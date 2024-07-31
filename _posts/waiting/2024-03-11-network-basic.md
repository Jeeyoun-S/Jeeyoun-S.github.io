---
title: Http, Network 기초
tags: [Network]
style: fill
color: light
description: 비전공자의 전공자 따라잡기 - 네트워크, HTTP
published: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

> [비전공자의 전공자 따라잡기 - 네트워크, HTTP](https://inf.run/b7Ne)를 수강하며 정리한 글입니다.

## 클라이언트 & 서버
- 용어
  - 브라우저, 프론트엔드 : 클라이언트
  - 백엔드 : 서버
- 클라이언트 & 서버 모델
  - 클라이언트 → 서버 : 요청
  - 서버 → 클라이언트 : 응답

## OSI 7계층
### 물리 계층 (L1, Physical)
- **컴퓨터** 0과 1 Bit로 구성
  - 8Bit = 1Byte OR 1OCTET
- **랜선** 전기 신호 이동
- **랜카드** 전기 신호를 0과 1로 변환, 0과 1을 전기 신호로 변환

### 데이터링크 계층 (L2, Data Link)
- **데이터(Bit 값)** 목적지MAC, 출발지MAC, 유형, 네트워크 계층의 데이터, 트레일러 정보 포함
  - 데이터링크 계층의 데이터 명칭: {% include elements/highlight.html text="프레임" %}
- Ethernet(Protocol)에 따라 데이터 해석해 의미 부여
- 목적지와 출발지는 MAC 주소로 표현
  - MAC 주소: 랜카드 ID, 48Bit (한 자리당 4Bit, 총 12자리)

> Protocol: 0과 1을 해석하는 방법에 대한 약속 (ex. WIFI)

> Q. 나의 MAC 주소(출발지)는 아는데, 다른 MAC 주소(목적지)는?  
> A. 목적지의 주소는 스위치(또는 허브) 주소, 이 주소가 라우터에 질문, 또 라우터가 다른 라우터에 질문, 라우터가 스위치에 질문, 스위치가 목적지 컴퓨터 MAC에 질문해 알아내게 된다.

### 네트워크 계층 (L3, Network)
- **데이터** 목적지IP, 출발지IP, 전송 계층의 데이터
  - 네트워크 계층의 데이터 명칭: {% include elements/highlight.html text="패킷" %}
- IP 주소: MAC이 여러 개 모여있는 네트워크 주소
  - IPv4: 4자리, 각 자리마다 0~255(2^8)까지, 4*8Bit = 32Bit, 256^4 = 약 43억개
    - 보통 0, 1, 255는 예약된 상태로 미사용
    - 0과 1은 사설 네트워크 대표 주소
    - 끝이 255인 경우, 브로드캐스트 주소 (브로드캐스트에 데이터 전송 시 네트워크 내부 전체에 데이터 전송)
    - 특수 IP: 127.0.0.1 = localhost 내 컴퓨터
  - IPv6: IPv4의 고갈로 등장, 128Bit
- 공인IP와 사설IP
  - 공인IP
    - 다른 컴퓨터와 통신 가능
  - 사설IP
    - 다른 컴퓨터와 통신 불가능
    - 내부 네트워크에서 사용
    - 대역 10, 172.16 ~ 172.31, 192.168로 시작

### 전송 계층 (L4, Transport)
- 포트
- 80 HTTP, 443 HTTPS, 22 SSH, 53 DNS, SMTP, POP3
- IP:PORT (예시: 15.163)
- 0 ~ 1023: Well Known Port, 이미 다른 곳에서 사용하고 있을 수 있어 사용 지양
- 0 ~ 65535
- 데이터: TCP(또는 UDP) 헤더 + 데이터(세션 계층 데이터)
- 명칭: 세그먼트

### 세션, 표현, 응용 계층
- HTTP Header + HTTP Body
  - HTTP Header: 요청, 응답 헤더 존재

## 데이터 전송 과정

- 내 컴퓨터에서 다른 컴퓨터(네이버)로 HTTP 요청 전송

목적지MAC | 출발지MAC | 목적지IP | 출발지IP | 목적지PORT | 출발지PORT | HTTP요청 | 트레일러

- 출발지MAC, IP, PORT는 당연히 아는 상태

- 목적지MAC: 내 네트워크 라우터(스위치)의 MAC 주소

- 목적지IP: naver.com을 IP로 변환해주는 DNS 리졸브

- 목적지PORT: naver.com은 HTTPS로 443