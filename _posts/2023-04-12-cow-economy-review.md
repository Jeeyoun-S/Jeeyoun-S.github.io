---
title: 소귀경 회고록
date: 2023-04-12 00:00:00 +07:00
tags: [project]
style: fill
color: info
description: 7주 간 진행됐던 소귀경 프로젝트에 대한 회고록
published: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

오늘은 지난 7주 간 진행된 소귀경(소 귀에 경제 읽기) 프로젝트를 되돌아보려고 한다.

### 프로젝트 설명
소귀경은 SSAFY 특화 프로젝트로 빅데이터 분산 도메인으로 진행됐다.

소귀경은 '소 귀에 경제 읽기'의 약자로 경제 기사를 읽으며 경제 공부를 할 수 있는 서비스입니다. 
핵심 기능으로는 경제 기사 트렌드 및 기사를 통한 학습 관련 기능이 있다.

[더 자세한 설명 보러가기](https://jeeyoun-s.github.io/projects/4-cow-economy)

### 잘했고 만족스러웠던 점

#### 협업
크롤링을 함께 담당한 팀원과 

[뉴스 크롤링 코드](https://github.com/Jeeyoun-S/Cow-Economy/blob/master/data/crawling/news_crawling.py)

#### JPA
이전 프로젝트에서 연관 관계를 매핑하지 않아 아쉬운 점이 있었지만, 이번 프로젝트는 이 점을 반영해 연관 관계를 매핑하고 DB 스키마가 자동으로 생성되도록 했다.

1. DB 스키마 자동 생성

```java
// application.yml
spring:
  jpa:
    hibernate:
      ddl-auto: update
```

위 속성을 추가하면 프로젝트 실행 시 DB 테이블을 자동으로 생성하거나 수정한다. `update`인 경우 Entity 정보를 비교해 변경사항만 수정하고, `create`는 기존 테이블을 삭제하고 새로 생성한다. 저희는 기존 테이블에 존재하는 데이터도 그대로 사용하고자 update로 설정했다.

이전 프로젝트 코드를 찾아보니 해당 프로젝트에서도 이 설정이 있었다. 그럼에도 수정할 때마다 SQL문을 공유하고, 해당 SQL문을 실행시켰던 것은 이에 대해 잘 몰랐기 때문이라고 생각한다. 공부의 중요성을 다시 한번 느끼는 계기였다.

1. `@NotNull`과 `nullable = false`의 차이
메모를 등록하는 API를 개발하던 중 Entity에 회원, 기사 등 기본 정보만 DB에 넣으려는 작업 중 에러가 발생했다. 바로 메모 작성 시간이 없어서 오류가 난다는 것이었다. 당시 코드는 아래와 같았다. `@NotNull`로 해당 칼럼에 NULL이 들어가지 못하도록 설정해 두었고, default 값으로 현재 시간을 넣어두었다.

```java
public class UserArticleMemo {
  // 생략
  @NotNull
  @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
  private LocalDateTime regtime;
  // 생략
}
```

메모를 등록할 때 regtime은 default 값이 있으므로 save() 할 때 Entity에 값을 넣지 않았고, 자동으로 default 값이 들어갈 거라 생각했다. 알아보니 `@NotNull`은 DB에 SQL 쿼리를 보내기 전에 예외를 처리한다고 한다. 따라서 DB에 넣기 전 값을 검증해 null인 경우 오류를 발생시키는 것이다.

```java
public class UserArticleMemo {
  // 생략
  @Column(nullable = false, columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
  private LocalDateTime regtime;
  // 생략
}
```

그래서 위와 같이 `@NotNull`에서 `nullable = false`로 값을 수정했다. 이 경우 값이 DB에 넘어간 뒤에 예외가 발생한다. 따라서 default가 설정돼 있는 경우에도 오류가 발생하지 않았다. 아래는 참고했던 글이다.

- 참고 자료 [[JPA] nullable=false와 @NotNull 비교, Hibernate Validation](https://kafcamus.tistory.com/15)

1. 연관 관계 매핑

```java
public class UserArticleMemo {
  // 생략

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "user_id")
  @Comment("회원 ID")
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "article_id")
  @Comment("기사 ID")
  private Article article;

  // 생략
}
```


1. 

#### Javascript
메모 관련 기능을 담당해 
[인용문 관련 Javascript 함수](https://github.com/Jeeyoun-S/Cow-Economy/blob/master/frontend/src/common/function/textSelection.js)

#### 움직이는 화면
Scene.js 라이브러리를 사용해 움직이는 화면을 구현했다. 

[Info 페이지](https://github.com/Jeeyoun-S/Cow-Economy#%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%99%94%EB%A9%B4)

### 어렵고 아쉬웠던 점

#### 협업

#### JPA

1. N+1 문제

#### iOS 메모 기능

#### 프로젝트의 규모

#### 분산 도메인

#### 퀴즈 기능