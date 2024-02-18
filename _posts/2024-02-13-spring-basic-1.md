---
title: Spring 입문 (1)
tags: [Spring, Backend]
style: fill
color: success
description: 스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

> [스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술](https://inf.run/hivx6)를 수강하며 정리한 글입니다.

## 참고 자료
- [Spring Boot Docs HTML](https://docs.spring.io/spring-boot/docs/3.2.2/reference/htmlsingle/)
- [thymeleaf 공식 사이트](https://www.thymeleaf.org/)
- [스프링 공식 튜토리얼](https://spring.io/guides/gs/serving-web-content/)

## 초기 설정
### Spring 프로젝트 생성
- Maven, Gradle
  - 필요한 라이브러리 import, 빌드까지의 라이프 사이클 관리
  - 과거에는 Maven, 최근에는 Gradle 사용 추세
- Spring Boot Version
  - SNAPSHOT 개발 진행 중
  - M1 정식 출시되지 않은 상태
- [Spring Initializr](https://start.spring.io/)
  - 프로젝트 생성 후 build.gradle 파일 import
  - Java 17, Spirng 3.2.2로 실습

### 주요 라이브러리
- Spring Boot Starter Web
  - Tomcat (웹 서버)
  - Web MVC
- Spring Boot Starter Thymeleaf (타입리프 템플릿 엔진)
- Spring Boot Starter
  - Spring Boot (Spring Core)
  - Logging (Slf4j, Logback)
- Spring Boot Starter Test
  - Junit 5

### View 환경설정
1. resources/templates/hello.html 생성
2. HelloController.java
  ```java
  @Controller
  public class HelloController {
      // 1) localhost:8080/hello로 접속
      // 2) 내부 tomcat을 통해 HelloController로 이동
      // 3) hello URL에 매칭
      @GetMapping("hello") 
      public String hello(Model model) { 
          // 4) Spring이 Model을 생성
          // 5) Model에 데이터 추가
          model.addAttribute("data", "hello!"); 
          // 6) viewResolver가 resources:templates/hello.html를 찾아 처리
          return "hello"; 
      }
  }
  ```

> spring-boot-devtools로 서버 재시작 없이 View 바꾸기 가능

### Build & Run
```shell
./gradlew build  # 빌드
cd build/libs    # 빌드 폴더로 이동
java -jar hello-spring-0.0.1-SNAPSHOT.jar  # 빌드 파일 실행
./gradlew clean  # 빌드 폴더 삭제
./gradlew clean build  # 기존 빌드 삭제 후 재빌드
```

## 웹 개발 기초
### 웹 개발 방법
- 정적 콘텐츠: 파일을 그대로 웹 브라우저에 보여주는 방식
- MVC와 템플릿 엔진: 서버에서 HTML을 동적으로 바꿔 보여주는 방식
- API: JSON과 같은 데이터 구조 형식으로 Client에게 데이터 전달

### 정적 콘텐츠
- resources/static/hello-static.html 생성
- localhost:8080/hello-static.html로 요청
  - hello-static 관련 Controller 부재
  - resources/static으로 매칭
  - hello-static.html을 브라우저에 노출

###