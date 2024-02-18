---
title: 스프링 입문 (1)
tags: [Spring, Backend]
style: fill
color: success
description: 스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

> [스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술](https://inf.run/hivx6)를 수강하며 정리한 글입니다.

## Spring 프로젝트 생성
- Maven, Gradle
  - 필요한 라이브러리 import, 빌드까지의 라이프 사이클 관리
  - 과거에는 Maven, 최근에는 Gradle 사용 추세
- Spring Boot Version
  - SNAPSHOT 개발 진행 중
  - M1 정식 출시되지 않은 상태
- [Spring Initializr](https://start.spring.io/)
  - 프로젝트 생성 후 build.gradle 파일 import
  - Java 17, Spirng 3.2.2로 실습