---
title: 무료로 휴대폰 인증 구현하기
date: 2023-01-18 00:00:00 +07:00
modified: 2023-01-18 00:00:00 +07:00
tags: [ssueb]
description: 무료로 휴대폰 인증 구현하기
---

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 시작
프로젝트를 기획하던 중 카카오톡과 메세지로 알람을 보내기 위해 휴대폰 인증을 진행하기로 했다.

## Facebook Account Kit
가장 첫 번째로 고려했던 방법이나, Facebook이 Data를 수집한다는 이야기가 있어 다른 방식으로 하기로 결정했다.

## Naver Cloud Flatform
네이버 클라우드 플랫폼 API에서 문자 메세지 서비스를 이용해 직접 휴대폰 인증을 구현했다.

### Header 생성
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
