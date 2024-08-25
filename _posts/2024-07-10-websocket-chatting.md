---
title: 실시간 채팅 구현
date: 2023-07-03 00:00:00 +07:00
tags: [Project, Websocket]
style: fill
color: info
description: Websocket, Spring Boot, Redis, MySQL를 사용한 실시간 채팅 구현 과정
published: false
---

### Websocket

### Backend: Spring Boot
먼저 백엔드에서는 spring boot starter websocket을 build.gradle에 넣어 사용했다. 

  ```java
  // Backend
  implementation 'org.springframework.boot:spring-boot-starter-websocket'
  ```

  WebsocketConfig 파일을 만들어서 설정을 해준다.

  ```java
  @EnableWebSocketMessageBroker
  @RequiredArgsConstructor
  @Configuration
  public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private final StompHandler stompHandler;

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
      registry.addEndpoint("/websocket") // 클라이언트에서 서버로 소켓 연결하는 endPoint 지정
              .setAllowedOriginPatterns("*") // CORS 설정
              .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
      registry.enableSimpleBroker("/topic", "/send", "/enter"); // 메시지 수신을 위한 서버 연결 주소 prefix
      registry.setApplicationDestinationPrefixes("/message"); // 메시지 발신을 위한 서버 연결 주소 prefix
    }

    // Socket Controller에 요청이 전달되기 전 처리할 로직을 사용하는 Interceptor 등록 (Config의 StompHandler)
    @Override
    public void configureClientInboundChannel(ChannelRegistration registration){
      registration.interceptors(stompHandler);
    }
  }
  ```

  @MessageMapping로 요청이 들어오면 @SendTo로 메시지를 보낸다. 메시지를 받으면 Redis에 채팅 내용을 저장하고, 받은 채팅 내용을 @SendTo로 보내준다.

  ```java
  /**
   * jeey0124
   * @param meetingId 모임 ID
   * @param chattingRequestDto 채팅 내용 및 작성자
   * @return 보낸 메시지 정보를 반환한다.
   * **/
  @MessageMapping("/receive/{meetingId}") // 메시지를 받을 endpoint 설정
  @SendTo("/send/{meetingId}") // 메시지를 보낼 곳 설정
  public BaseResponse sendChatting(@DestinationVariable String meetingId, ChattingRequestDto chattingRequestDto) {

    String message = chattingRequestDto.getMessage();
    // 메세지 내용은 최대 255자 이하
    if (message.length() <= 255) {
      // 우선 memberId는 프론트에서 받아오는 걸로
      Long memberId = chattingRequestDto.getMemberId();

      // 현재 시간 가져오기
      LocalDateTime now = LocalDateTime.now(ZoneId.of("Asia/Seoul"));

      // redis에 저장
      ChattingDto chattingDto = chattingService.addChattingRedis(memberId, meetingId, message, now);

      // 반환
      return BaseResponse.success(chattingDto);
    }
    return BaseResponse.fail();
  }
  ```

### Frontend: Vue.js

```javascript
// Frontend
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";
```

```javascript
// Websocket 연결
connect() {
  // 연결 시도 중거나 이미 연결됐거나
  if (
    this.connected ||
    (this.stompClient && this.stompClient.ws.readyState == 1)
  ) {
    this.waitConnect();
  }
  // 연결 시도
  else {
    this.updateConnected(true);
    const serverURL = `${process.env.VUE_APP_API_BASE_URL}/websocket`;
    let socket = new SockJS(serverURL);
    this.updateStompClient(Stomp.over(socket));

    this.stompClient.connect(
      {},
      async (frame) => {
        frame;
        this.updateConnected(false);
        this.connectAction();
      },
      (error) => {
        error;
        this.updateConnected(false);
        this.connect();
      }
    );
  }
},

// 소켓 연결 후 동작
async connectAction() {
  await this.chatSubscribe();
  await this.getMember();
  this.loading = await false;
  await document
    .querySelector(".v-snack__wrapper")
    .addEventListener("click", this.watchNewMessage);
  await window.addEventListener("scroll", this.onTheBottom);
  // await this.goBottom();
},

// 메세지 구독
chatSubscribe() {
  // 일단 끊고
  this.stompClient.unsubscribe(
    `chatting-subscribe-${this.$route.params.id}`
  );
  this.stompClient.subscribe(
    `/send/${this.$route.params.id}`,
    async (res) => {
      const data = await JSON.parse(res.body);
      if (data.statusCode == 200) {
        // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
        await this.chatList.push(data.data);
        // 스크롤 맨 아래로 이동
        // 본인이 작성한 채팅 or 스크롤이 아래 있는 경우
        if (this.memberId == data.data.memberId || this.bottom) {
          await this.goBottom();
        } else {
          this.newMessage = await data.data.message;
          this.newMessageMemberId = await data.data.memberId;
          this.snackbar = await true;
        }
      }
    },
    { id: `chatting-subscribe-${this.$route.params.id}` }
  );
},
```

```javascript
beforeDestroy() {
  this.stompClient.unsubscribe(`chatting-subscribe-${this.$route.params.id}`);
  this.stompClient.unsubscribe(`member-subscribe-${this.$route.params.id}`);
},
```

### 결과