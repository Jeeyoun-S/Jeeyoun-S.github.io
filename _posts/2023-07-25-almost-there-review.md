---
title: Almost There 회고록
tags: [Project, Review]
style: fill
color: info
description: 7주 간 진행됐던 Almost There 프로젝트에 대한 회고록
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

오늘은 지난 7주 간 진행된 Almost There 프로젝트를 되돌아보려고 한다.

### 프로젝트 설명
Almost There은 SSAFY 자율 프로젝트로 오픈소스 도메인으로 진행됐다.

Almost There은 모임 관리를 간편하게 할 수 있도록 지원하는 서비스이다.
핵심 기능으로는 모임 관리, 정산, 중간 장소 찾기, 실시간 위치 공유 및 채팅이 있다.

[더 자세한 설명과 프로젝트 코드 보러가기](https://jeeyoun-s.github.io/projects/5-almost-there)

### 좋았고 배울 수 있었던 점

#### 의존성 주입
Spring에서는 의존성 주입을 사용해 코드를 작성하게 되는데, 외부로부터 객체를 받아 사용해 객체 간 결합도를 줄이고 재활용성을 높이는 장점이 있다. 의존성 주입 방법에는 3가지가 있는데 지금까지 프로젝트에서는 아래와 같이 필드 주입을 사용했었다. 그 이유는 이 방법으로 배우기도 했고, 사용하기 간단해서이다. ([Spring 의존성 주입 참고자료](https://dev-coco.tistory.com/70))

```java
// 소귀경 프로젝트 > MemoService.java
@Autowired
UserRepository userRepository;

@Autowired
ArticleRepository articleRepository;

@Autowired
UserArticleMemoRepository userArticleMemoRepository;
```

그러나 알아보니 가장 권장하는 방법은 생성자 주입 방식이었고, 이번 프로젝트에서는 아래 코드와 같이 생성자 주입을 사용했다. 의존성 주입 방법을 바꾸면서 이전 프로젝트에서 당연하게 작성하던 코드들부터 리팩토링이 필요하다고 느꼈다. 

```java
// ChattingService.java
private final RedisTemplate<String, ChattingDto> redisTemplateForChatting;
private final ChattingRepository chattingRepository;
private final ChattingJDBCRepository chattingJDBCRepository;
```

#### Websocket
SSUEB 프로젝트 회고록에 썼듯이 실시간 화상 상담 기능을 맡지 못했던 것이 아쉬웠고, 실시간으로 처리하는 개발을 해보고 싶었다. 팀원들이 해보고 싶은 기술이 있냐고 물어봤을 때 Websocket을 해보고 싶다고 이야기했고, 실시간 채팅 기능을 담당해 개발하게 됐다.

이 부분은 내용이 길어 따로 글을 작성했다. ([]())

#### batchInsert

```java
@Repository
public class ChattingJDBCRepository {

  private final JdbcTemplate jdbcTemplate;

  public ChattingJDBCRepository(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public void batchInsert(List<ChattingDto> chattingList, Long meetingId) {

    jdbcTemplate.batchUpdate(
      "INSERT INTO chatting (message, meeting_id, member_id, chatting_time)" +
            "VALUES (?, ?, ?, ?)",

      new BatchPreparedStatementSetter() {
        @Override
        public void setValues(PreparedStatement ps, int i) throws SQLException {
          ps.setString(1, chattingList.get(i).getMessage());
          ps.setLong(2, meetingId);
          ps.setLong(3, chattingList.get(i).getMemberId());
          ps.setString(4, chattingList.get(i).getChattingTime().toString());
        }
        @Override
        public int getBatchSize() {
          return chattingList.size();
        }
      }
    );
  }
}
```

### 어렵고 아쉬웠던 점

#### 채팅 기능
- **Redis에서 MySQL로 이전**

- **스크롤 이동**

#### @Scheduled

```java
// ChattingService.java
@Scheduled(fixedDelay = 60000)
@Transactional
public void addChattingMysql() {
  // 생략
}
```

```java
// MapService.java
@Scheduled(cron = "0 * * * * *") // 테스트 위해 1분 주기
@Transactional
public void changeState() {
  // 생략
}
```