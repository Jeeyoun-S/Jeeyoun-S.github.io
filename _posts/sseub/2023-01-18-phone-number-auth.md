---
title: 무료로 휴대폰 인증 구현하기
date: 2023-01-18 00:00:00 +07:00
modified: 2023-01-18 00:00:00 +07:00
tags: [ssueb]
description: 무료로 휴대폰 인증 구현하기
---

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

# 시작
프로젝트를 기획하던 중 카카오톡과 메세지로 알람을 보내기 위해 휴대폰 인증을 진행하기로 했다.

# 구현
네이버 클라우드 플랫폼 API에서 문자 메세지 서비스를 이용해 6자리 난수를 생성해 인증번호를 보내주고, 이를 확인하는 방법으로 구현하고자 한다.

### Naver Cloud Flatform
네이버 클라우드 플랫폼은 "검증된 네이버의 기술과 노하우를 바탕으로 여러분의 비즈니스와 산업에 꼭 필요한 클라우드를 제공합니다."라고 홈페이지에 쓰여 있다.
매달 50회까지 무료 SMS 전송을 지원하고, 신규 가입 고객을 대상으로 [100,000원의 할인 크레딧](https://www.ncloud.com/main/creditEvent)을 제공한다.
약 2개월 간 진행될 프로젝트에 사용하기에는 무료로 제공하는 횟수면 충분하다고 판단했다.

1. [Naver Cloud FlatForm](https://www.ncloud.com/) 회원가입
2. 결제수단 등록
3. Console 창에서 Services > Simple & Easy Notification Service 검색
4. Simple & Easy Notification Service > Project 생성
5. Simple & Easy Notification Service > SMS > SMS Calling Number 발신번호 등록
6. [SMS API Docs](https://api.ncloud-docs.com/docs/ko/ai-application-service-sens-smsv2) 참고

### Header 생성
네이버 클라우드 플랫폼의 공통 호출 및 인증 방법([Ncloud API](https://api.ncloud-docs.com/docs/common-ncpapi))에 따라 Header를 생성한다.
Header는 timestamp, access key, signature를 전달해 줘야 한다.

```java
public HttpHeaders makeHeader(String method, String url) throws InvalidKeyException, IllegalStateException, UnsupportedEncodingException, NoSuchAlgorithmException {
		
	// 새로운 헤더 객체 생성
	HttpHeaders headers = new HttpHeaders();

	// 현재 밀리초, API Gateway 서버와 시간 차가 5분 이상 나는 경우 유효하지 않은 요청으로 간주
	String timestamp = String.valueOf(System.currentTimeMillis());
	headers.set("x-ncp-apigw-timestamp", timestamp);

	// 네이버 클라우드 플랫폼 포털이나 Sub Account에서 발급받은 Access Key ID
	headers.set("x-ncp-iam-access-key", accessKeyId);

	// Body를 Access Key ID와 맵핑되는 Secret Key로 암호화한 서명값
	headers.set("x-ncp-apigw-signature-v2", makeSignature(method, url, timestamp));

	return headers;

}
```

그중 signature는 "요청에 맞게 StringToSign을 생성하고 SecretKey로 HmacSHA256 알고리즘으로 암호화한 후 Base64로 인코딩" 해야 한다. 
```java
public String makeSignature(String method, String url, String timestamp) throws IllegalStateException, UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeyException {
		
	// 네이버 클라우드의 signatureKey 암호화 코드
	String message = new StringBuilder().append(method).append(" ").append(url)
					    .append("\n").append(timestamp).append("\n")
					    .append(accessKeyId).toString();

	// StringToSign을 생성하고 SecretKey로 HmacSHA256 알고리즘으로 암호화
	SecretKeySpec signingKey = new SecretKeySpec(secretKey.getBytes("UTF-8"), "HmacSHA256");
	Mac mac = Mac.getInstance("HmacSHA256");
	mac.init(signingKey);
	byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));

	// Base64로 인코딩
	String encodeBase64String = Base64.encodeBase64String(rawHmac);

	return encodeBase64String;

}
```

### 인증번호 생성
6자리 난수를 생성해 보내주고, 이를 Redis를 통해 저장하는 걸 구현하려고 한다.
인증 번호는 Redis를 이용해 저장해 줬고, 자세한 설명은 [관련 글](https://jeeyoun-s.github.io/redis/)을 참고하면 된다.
