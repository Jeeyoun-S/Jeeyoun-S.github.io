## Javascript

### Crawling
크롤링은 이전에 Python으로 해본 적이 있었다. Python의 경우, BeautifulSoup과 Selenium을 사용했었다. Javascript로 할 때도 이전 크롤링 경험을 되살려 우선, 페이지 내에서 이동이 필요 없다고 파악해 정적인 페이지를 크롤링하는 방법을 공부했다. 

```javascript
// 크롤링을 위해 필요한 import
const cherrio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");

// URL에 있는 HTML 가져오기
await axios({
  url: url,
  methods: "GET",
  responseType: "arraybuffer" // 한글 깨짐 방지
}).then((html) => {
  // 가져온 HTML을 디코딩
  const data = iconv.decode(html.data, "EUC-KR").toString();
  const $ = cherrio.load(data);

  // 1. $에서 가져온 것의 자식 노드 전부 찾기
  const $childrens = $({CSS Selector | HTML이 있는 변수}).children({CSS Selector});
  // 2. $에서 특정 노드 찾기
  const specifics = $({CSS Selector | HTML이 있는 변수}).find({CSS Selector});
  // 3. innerText 가져오기
  const = specifics.text()
  // 4. attribute 이름의 값 가져오기
  const = specifics.attr({attribute name})
})
```

### JSON
Rest API 설계 시 응답 형식에 JSON을 많이 사용하고 있기에 JSON 파일을 기반으로 작업하는 것이 좋으리라 생각했다. Javascript에서 JSON 파일을 다루는 방법에 대해 알아 보았다.

```javascript
// json 파일 가져오기
const json = require(JSON 파일명, 확장자 및 경로 포함); 

// json 파일에 쓰기
const fs = require("fs");
fs.writeFileSync(JSON 파일명, 확장자 및 경로 포함, JSON.stringify(JSON으로 바꿀 Object));

// JSON 형식 문자열을 Object로 변경
JSON.parse(String);

// Object를 JSON 형식 문자열로 변경
JSON.stringify(Object)
```

### Javascript
#### Crawling
- [Node.js를 이용한 크롤링](https://thisisprogrammingworld.tistory.com/136)
- [Node.js 에서 웹 크롤링하기](https://velog.io/@yesdoing/Node.js-%EC%97%90%EC%84%9C-%EC%9B%B9-%ED%81%AC%EB%A1%A4%EB%A7%81%ED%95%98%EA%B8%B0-wtjugync1m)

#### JSON
- [nodejs에서 json파일 읽기](https://bitcoder.tistory.com/35)
- [Node.js에서 JSON 파일에 데이터를 저장하고 읽는 방법](https://smilehugo.tistory.com/entry/nodejs-json-create-store-read-update)

#### 기초 문법
- [[Javascript] 현재 날짜, 시간 구하기](https://hianna.tistory.com/325)
- [[JavaScript]배열에 중복 값이 있는지 확인하는 방법](https://developer-talk.tistory.com/266)
- [[Javascript] 시간 계산하기 (시/분/초/ 더하기, 빼기)](https://hianna.tistory.com/330)



- 재귀와 스택 ([재귀(Recursion)와 스택(stack)영역](https://bentist.tistory.com/57#:~:text=%EC%BB%B4%ED%93%A8%ED%84%B0%20%EA%B3%BC%ED%95%99%EC%97%90%20%EC%9E%88%EC%96%B4%EC%84%9C%20%EC%9E%AC%EA%B7%80,%ED%95%98%EA%B8%B0%20%EC%89%AC%EC%9A%B4%20%EA%B2%BD%EC%9A%B0%EA%B0%80%20%EB%A7%8E%EB%8B%A4.))
- map과 filter ([[java script] map() / filter() 함수란? 배열 가공하기.](https://cheershennah.tistory.com/224))
- Javascript 모듈화 ([[ js ] 모듈화란? (import, export 사용법)](https://velog.io/@rozley/js-%EB%AA%A8%EB%93%88%ED%99%94%EB%9E%80-import-export-%EC%82%AC%EC%9A%A9%EB%B2%95))
- Javascript 반복문 ([javascript 반복문(문자열, 배열, 오브젝트)](https://velog.io/@taelee/javascript-%EB%B0%98%EB%B3%B5%EB%AC%B8%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%B0%B0%EC%97%B4-%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8))