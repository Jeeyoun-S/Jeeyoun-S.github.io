---
title: 소귀경 회고록
date: 2023-04-12 00:00:00 +07:00
tags: [project]
style: fill
color: info
description: 7주 간 진행됐던 소귀경 프로젝트에 대한 회고록
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

오늘은 지난 7주 간 진행된 소귀경(소 귀에 경제 읽기) 프로젝트를 되돌아보려고 한다.

### 프로젝트 설명
소귀경은 SSAFY 특화 프로젝트로 빅데이터 분산 도메인으로 진행됐다.

소귀경은 '소 귀에 경제 읽기'의 약자로 경제 기사를 읽으며 경제 공부를 할 수 있는 서비스다. 
핵심 기능으로는 경제 기사 트렌드 및 기사를 통한 학습 관련 기능이 있다.

[더 자세한 설명 보러가기](https://jeeyoun-s.github.io/projects/4-cow-economy)

### 좋았고 배울 수 있었던 점

#### 기사 크롤링
크롤링을 함께 담당한 팀원과 프로젝트 초반에 크롤링 코드를 완성하기 위해 의견을 수없이 주고받았다. 
이때 팀원으로부터 꼼꼼함과 데이터 처리 방법을 많이 배울 수 있었고, 처리 방법을 다각도로 생각해 볼 수 있었다. 
처음 기초 코드는 내가 작성했고, 이 코드를 바탕으로 [완성된 코드](https://github.com/Jeeyoun-S/Cow-Economy/blob/master/data/crawling/news_crawling.py)를 작성했다.

크롤링 작업의 대부분은 Colab을 사용했다. Colab의 경우 바로 코드 실행이 가능하고, 수정자와 이전 버전도 확인할 수 있어 편리했다. 
또한, 코드 실행시간도 바로 확인할 수 있고, 함께 공유하며 코드를 짤 수 있다는 게 가장 큰 장점이었다. 
초기 코드를 작성하기 위해 고려한 부분은 아래와 같다.

- **뉴스를 어디서 가져올 것인가**  
처음에는 경제 언론사의 공식 홈페이지 고려했지만 언론사마다 카테고리가 달랐다. 
언론사별로 크롤링하면 카테고리 수가 너무 많아지거나 자체적으로 판단해 카테고리를 묶는 작업이 필요했다. 
네이버 뉴스의 경우 여러 언론사의 경제 뉴스만 모아 8개의 카테고리로 구분돼 있어 네이버 뉴스 경제를 크롤링하는 것이 더 합리적이라고 느꼈다.  

- **어떤 라이브러리를 사용할 것인가**  
Python의 대표적인 크롤링 라이브러리로는 Selenium과 BeautifulSoup이 있다. 
가장 큰 차이는 Selenium은 동적인 페이지, BeautifulSoup은 정적인 페이지를 가져온다는 것이다.  
기사 크롤링에서는 동적인 움직임 없이 for문으로 URL로만 모든 기사를 수집하는 게 가능했다. 
Selenium보다 BeautifulSoup이 속도가 더 빠르고 메모리가 절약되므로, 동적인 페이지가 필요 없는 뉴스 크롤링에서는 BeautifulSoup만 사용했다.

- **카테고리별, 모든 페이지 기사 수집**  
네이버 뉴스의 경제 페이지 내에 있는 모든 카테고리별 기사를 페이지별로 수집해야 했다. 경제 세부 카테고리의 경우 URL의 sid2로 카테고리 번호를 넣어서 설정할 수 있었다. 그래서 먼저 sid1으로 for문 다음에는 sid2로 이중 for문을 구현했다.  
다음에는 각 카테고리별 모든 페이지를 돌아야 했다. 페이지 번호를 끝까지 알기 위해 10으로 나눴을 때 1이 되는 페이지마다 최대 페이지 수를 구하는 로직을 수행했다. 도달했을 때 맨 뒤 번호를 최대 페이지 번호로 저장하거나 다음 버튼이 있으면 +10 이상이 있으므로 +10을 최대 페이지 번호로 저장했다. 결과적으로 마지막 페이지까지 도달할 수 있게 구현했다. 

    ```python
    # sid1 101 (경제)
    sid1 = (101, ) # 대분류
    # sid2 259 (금융), 258 (증권), 261 (산업/재계), 771 (중기/벤처), 260 (부동산), 262 (글로벌 경제), 310 (생활경제), 263 (경제 일반)
    sid2 = (259, 258, 261, 771, 260, 262, 310, 263, ) # 소분류

    end_date = dt.datetime.now(timezone('Asia/Seoul')) # 오늘 날짜
    start_date = end_date - dt.timedelta(days=1)       # 하루 전 날짜

    # results 딕셔너리 내부에는 {"category1": 101, "category2": 259, "press": "", "date": "", "reporter": "", "title": "", "contents": ""}
    results = []

    # 대분류로 반복
    for big in sid1:

      # 소분류로 반복
      for small in sid2:

        # 날짜로 반복
        s_date = start_date
        while s_date <= end_date:

          # 페이지로 반복
          page = 1
          max_page = 1
          while page <= max_page:
            response = urlopen(f'https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid2={small}&sid1={big}&date={s_date.strftime("%Y%m%d")}&page={page}')
            soup = BeautifulSoup(response, "html.parser")

            # 페이지 수 구하기
            if page%10 == 1:
              page_a_list = soup.find("div", {"class": "paging"}).find_all("a")
              last_value = page_a_list[-1].get_text()
              if last_value == '다음':
                max_page += 10
              elif last_value.isdigit():
                max_page = int(last_value)

    # 이하 생략
    ```

이 외에도 기본적인 기사, 언론사, 날짜, 내용 등 기본적인 정보를 가져오는 코드를 구현했고, 초반 코드가 완성된 후 제대로 된 데이터 처리를 위해 디테일한 부분을 수정하기 시작했다. 이후 작업에서 고려한 내용은 아래와 같다.

- **어떤 신문사의 기사만을 가져올 것인가?**  
카테고리별로, 대표적인 정보(기자, 언론사, 제목 등)을 가져오는 틀은 완성된 상태였고, 최초 코드는 한국경제와 연합뉴스 기사만을 가져오도록 설정했다. 
[네이버의 언론사 목록](https://news.naver.com/main/officeList.naver)을 참고했고, 종합 및 경제 언론사의 기사를 수집하기로 결정했다.

```python
press_list = ['매일경제', '머니투데이', '비즈워치', '서울경제', '아시아경제',
              '이데일리', '조선비즈', '조세일보', '파이낸셜뉴스', '한국경제', '헤럴드경제',
              '경향신문', '국민일보', '동아일보', '문화일보', '서울신문', '세계일보', '조선일보', '중앙일보', '한계레', '한국일보']

# 중간 생략

press_name = link.find("span", {"class": "writing"}).get_text()
if li is None or (press_name not in press_list):
  continue
```

- **내용을 통으로 처리하지 않고 분류해서 처리**  
초기 코드에는 기사 내용을 HTML 포함 그대로 가져오도록 처리했다. 그러나 기사 내용에는 이미지, 이미지 설명, 인용구 등이 존재했고, 특히 와이어프레임 설계를 고려했을 때 썸네일이 필요했으므로 내용을 처리해야 했다.  
여기서 집중했던 부분은 (1)이미지와 이미지 설명이 `<table>` 내에 존재하는 경우 (2)`<strong>`과 `<b>` 태그 처리였다. 내용을 DB에 저장하고, 나중에 프론트에서 보여줄 때까지 고려해서 코드를 짜야했다. 따라서 HTML 태그를 separator로 변경했고 코드는 아래와 같다.  

```python
# separator
separator_image = "@@img"
separator_image_end = "@@endimg"
separator_image_desc = "@@imgdesc"
separator_image_desc_end = "@@endimgdesc"
separator_strong = "@@strong"
separator_strong_end = "@@endstrong"

# 중간 생략

br_list = contents.find_all("br") # br 처리
for br in br_list:
    br.replace_with("@@br")

td_list = contents.find_all("td") # table 내 이미지 설명
for td in td_list:
  if(td.find_all("table")):
    continue
  img_desc = td.get_text()
  if len(img_desc.strip()) > 0:
    td.replace_with(separator_image_desc + td.get_text() + separator_image_desc_end)

img_list = contents.find_all("img") # 이미지 전체 변경
if len(img_list) != 0 :
    detail["article_thumbnail"] = img_list[0].get("data-src")
for img in img_list:
    img.replace_with(separator_image + img.get("data-src") + separator_image_end)

em_list = contents.find_all("em") # table 외 이미지 설명
for em in em_list:
    em.replace_with(separator_image_desc + em.get_text() + separator_image_desc_end)

strong_list = contents.find_all("strong") # strong 태그
for strong in strong_list:
    strong.replace_with(separator_strong + strong.get_text() + separator_strong_end)

b_list = contents.find_all("b") # b 태그 = strong 태그 동일하게 처리
for b in b_list:
    b.replace_with(separator_strong + b.get_text() + separator_strong_end)

# 이하 생략
```

- **코드 실행 시간**  
Colab으로 작업하니 1일 치 기사를 크롤링하면 약 12분(대략 3000개)이 걸렸다. 1시간마다 크롤링하기에 큰 문제를 없으리라 생각됐지만, 시간이 길게 느껴졌다. Colab이 구글 내부 서버에서 코드를 실행하다 보니 오래 걸리는 것이 아닐까 하는 생각이 들었고, Pycharm으로 실행해 봤다.  
그 결과, 약 7~8분 정도로 실행 시간이 감소했고 시간이 지연되는 문제를 없을 것이라 예상했다. 프로젝트 관련 조언을 해주시는 현업 전문가님께서도 Interval 내에 처리가 가능하므로 전혀 문제 될 부분이 없을 거라고 말씀해 주셨다.

#### JPA
이전 프로젝트에서 연관 관계를 매핑하지 않아 아쉬운 점이 있었지만, 이번 프로젝트는 이 점을 반영해 연관 관계를 매핑하고 DB 스키마가 자동으로 생성되도록 했다.

**DB 스키마 자동 생성**

```java
// application.yml
spring:
  jpa:
    hibernate:
      ddl-auto: update
```

위 속성을 추가하면 프로젝트 실행 시 DB 테이블을 자동으로 생성하거나 수정한다. `update`인 경우 Entity 정보를 비교해 변경사항만 수정하고, `create`는 기존 테이블을 삭제하고 새로 생성한다. 저희는 기존 테이블에 존재하는 데이터도 그대로 사용하고자 update로 설정했다.

이전 프로젝트 코드를 찾아보니 해당 프로젝트에서도 이 설정이 있었다. 그럼에도 수정할 때마다 SQL문을 공유하고, 해당 SQL문을 실행시켰던 것은 이에 대해 잘 몰랐기 때문이라고 생각한다. 공부의 중요성을 다시 한번 느끼는 계기였다.

**@NotNull과 nullable = false의 차이**  
메모를 등록하는 API에서 메모 Entity에 회원, 기사 등 기본 정보만 설정한 뒤 DB에 넣으려는 작업 중 에러가 발생했다. 바로 메모 작성 시간이 없어서 오류가 난다는 것이었다. 당시 코드는 아래와 같았다. `@NotNull`로 해당 칼럼에 NULL이 들어가지 못하도록 설정해 두었고, default 값으로 현재 시간을 넣어두었다.

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

그래서 위와 같이 `@NotNull`에서 `nullable = false`로 값을 수정했다. 이 경우 값이 DB에 넘어간 뒤에 예외가 발생한다. 따라서 default가 설정돼 있는 경우에도 오류가 발생하지 않았다. [[JPA] nullable=false와 @NotNull 비교, Hibernate Validation](https://kafcamus.tistory.com/15)'를 참고했다.

**연관 관계 매핑**  
1:1, 1:N, N:N 관계를 Entity에서 설정해 반복적인 Join을 하지 않아 코드가 간결해지고, 생산성이 높아졌다.

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

**Entity와 DTO 상호 변환**  
이전 공통 프로젝트를 담당해 주셨던 컨설턴트님께서 Entity를 그대로 반환하지 말고 DTO로 변환해 사용하라는 조언을 해주셨었다. 그 이유를 찾아보니 매우 다양했고([Entity와 DTO를 구분해서 사용하는 이유](https://velog.io/@heyday_7/Entity-DTO-VO#:~:text=Entity%EC%99%80%20DTO%EB%A5%BC%20%EA%B5%AC%EB%B6%84%ED%95%B4%EC%84%9C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0,-Entity%20%EA%B5%AC%ED%98%84%EA%B3%BC&text=%EC%9D%B4%EB%AF%B8%20%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%8A%94%20%EB%8B%A4%20%EA%B0%80%EC%A7%80%EA%B3%A0,%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EB%82%B4%EC%A4%84%20%EC%88%98%20%EC%9E%88%EB%8B%A4.)) 변환 방법도 여러 가지였다.

```java
User user = optionUser.get();
Consultant consultant = optionConsultant.get();

UserInfoResponseData userInfoResponseData = new UserInfoResponseData();
userInfoResponseData.setId(id);
userInfoResponseData.setConsultantIntro(consultant.getConsultantIntro());
userInfoResponseData.setConsultantProfile(consultant.getConsultantProfile());
userInfoResponseData.setConsultantPetType(consultant.getConsultantPetType());
userInfoResponseData.setConsultantReservationCount(consultant.getConsultantReservationCount());
userInfoResponseData.setUserName(user.getUserName());
userInfoResponseData.setUserPhone(user.getUserPhone());
userInfoResponseData.setUserAlertFlag(user.getUserAlertFlag());
```

이전 프로젝트에서는 위와 같이 Setter를 활용해 매우 길고 번거로운 코드를 구현했었다. 한 번의 함수 호출로 DTO를 생성하지 못했고, 구현을 Controller에서 해 재사용이 어렵다는 문제도 존재했다. 또한, Entity에서는 Setter를 이용하면 객체의 안전성과 일관성이 유지되지 못해 Setter 사용을 지양해야 한다는 것도 몰라 모든 Entity에 Setter가 있었다.

Setter 외에도 생성자를 사용하는 방법과 Builder를 사용하는 방법 2가지가 있었다. 생성자는 코드가 가장 간결하고 재사용 시 편리하다는 장점이 있지만, 전달되는 인자의 수가 많아지면 코드 작성이 어렵고 가독성이 떨어진다는 단점이 있었다. 생성자 단점을 보완한 것이 Builder로, Builder는 순서에 종속되지 않으면서 가독성이 높고 유연하다.

```java
public ArticleDto(Article article) {
    this.articleId = article.getArticleId();
    this.articleCategory = article.getArticleCategory();
    this.articleRegtime = article.getArticleRegtime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));;
    this.articlePress = article.getArticlePress();
    this.articleTitle = article.getArticleTitle();
    this.articleThumbnail = article.getArticleThumbnail();
    this.articleHits = article.getArticleHits();
}
```

보통은 DTO에서 Entity, Entity에서 DTO로 변환할 때 DTO 또는 Entity만 인자로 전달해 주면 되기에 위의 코드처럼 생성자를 주로 사용했다. 1~3개의 인자만 전달하는 경우 가독성과 순서가 개발 시 큰 문제를 아니라고 생각했다.

```java
// 저장할 UserArticleMemo Entity 생성
UserArticleMemo userArticleMemo = UserArticleMemo.builder()
    .user(optionalUser.get())
    .article(optionalArticle.get())
    .build();
```

다만, 인자의 개수를 다르게 해 생성자 오버로딩이 많이 필요한 경우와 인자가 많은 경우는 위 코드처럼 Builder를 사용해 가독성을 높이고 번거로운 작업을 줄였다. Builder는 @Builder를 사용해 구현했다.

#### Javascript
메모 관련 기능을 담당해 
[인용문 관련 Javascript 함수](https://github.com/Jeeyoun-S/Cow-Economy/blob/master/frontend/src/common/function/textSelection.js)를 구현했다. 이 함수를 구현하면서 몰랐던 Javascript에 대해 알 수 있었고, 메모 기능의 핵심은 아래와 같았다.

1. 기사를 드래그하면 인용문 추가 버튼을 활성화한다.
2. 인용문 추가 버튼을 클릭하면 드래그했던 인용문이 메모 등록창에 추가되고, 하단 등록창으로 스크롤을 이동한다.
3. 메모 내용을 입력하고, 메모를 등록한다. (인용문 없이도 등록 가능)
4. 메모 조회창 또는 등록창에서 인용문을 클릭하면 인용문의 위치로 스크롤이 이동하며 인용문이 하이라이트 처리돼 보인다.
5. 화면을 한 번 터치하면 인용문의 하이라이트 처리가 사라진다.

먼저 내용을 드래그했는지를 알 수 있는 event가 javascript에 동작했고, selectionchange 이벤트를 걸면 내용을 드래그 했을 때 이벤트가 발생한 것으로 판단된다.

```javascript
document.addEventListener("selectionchange", this.addSelection);
```

#### 움직이는 화면
[Info 페이지](https://github.com/Jeeyoun-S/Cow-Economy#%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%99%94%EB%A9%B4)에서 Scene.js 라이브러리를 사용해 움직이는 화면을 구현했다. 

### 어렵고 아쉬웠던 점

#### 협업
팀원 일부 간의 소통은 매우 활발히 이뤄졌지만, 팀원들 다 같이 이야기를 나누는 시간은 적었다고 생각한다.

#### JPA
연관 관계를 매핑하며 발생할 수 있는 JPA N+1 문제를 고려하지 않았던 점이 아쉬웠다.

#### iOS 메모 기능
아이폰에서는 `getSelection()` 함수가 동작하지 않아 드래그된 내용을 가져오지 못하고 NULL 값이 들어와 인용문 추가 기능을 사용하지 못한다. 아이폰에서는 해당 함수를 지원하지 않는다고 한다. 다만, macOS 맥북에서는 `getSelection()` 함수가 동작했다. 결국 `getSelection()` 함수를 사용하지 않고는 어떻게 구현할지 아이디어가 없어 결국 해결하지 못하고 프로젝트를 마쳤다.

#### 분산 도메인
Hadoop과 Spark를 다뤄볼 수 있는 기회가 흔치 않다고 판단했기에 빅데이터 분산 도메인을 선택했다. 그러나 분산 도메인에서 클러스터 문제가 종종 발생해 프로젝트 진행이 더뎌지는 문제가 있었다.