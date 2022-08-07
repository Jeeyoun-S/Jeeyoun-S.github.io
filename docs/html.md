---
layout: page
title: HTML
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### HTML 개념
- 웹페이지를 만들기 위한 언어
- **H**yper **T**ext **M**arkup **L**anguage
  - Hyper Text : 참조로 한 문서에서 다른 문서로 접근할 수 있는 텍스트
  - Markup Language : 문서, 데이터의 구조를 명시하는 언어
- 확장자 `.html` `.htm`
- 태그는 대소문자 구분 없고, `Enter` `Spacebar` `Tab` 적용되지 않는다.
   - `Spacebar` 는 최대 1개 적용

### DOM 트리
- Document Object Model
    ```html
    <html>
    	<head><title></title></head>
    	<body><h1></h1><body>
    </html>
    ```
- 참고자료 [mdn web docs](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)

### HTML 구성요소
1. 태그 `<a href="https://www.naver.com/">네이버</a>` 
    - 시작태그 `<a href="https://www.naver.com/">`
        - 시작태그만 있는 태그도 존재 `img` `br` `hr`
        - 속성 `href`, 속성값 `"https://www.naver.com/"`
        - 공통 속성 `id` `class`
        - 사용자 정의 속성도 존재
        - Kebab case 사용 `background-color`
    - 종료태그 `</a>`
2. 주석 `<!--explanation-->`
    - 개발자 창에서는 보인다 → 사적인 대화 남기지 않는다
3. 기본 구조 
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    	<head>
    		<meta charset="UTF-8">
    		<title>Document</title>
    	</head>
    	<body><body>
    </html>
    ```
    - `html` 최상위 요소
    - `head` 문서제목, 문자코드 등 문서에 대한 정보 포함, 출력되지 않는 부분
        - `meta` 문서의 작성자, 날짜 등 본문에 나타나지 않는 정보
        - `title` 탭의 이름
    - `body` 브라우저 화면에 나타나는 정보
        - `id` 중복 불가, 문서 내 tag 식별
        - `class` 중복 가능, tag에 공통적인 특성 부여

### 태그
1. 특수문자
        
    | &nbsp; | &lt; | &gt; | &amp; | &quot; | &copy; | &reg; |
    | --- | --- | --- | --- | --- | --- | --- |
    | space | < | > | & | “ | © | ® |
2. Semantic tag
    
    | Tag | 기능 |
    | --- | --- |
    | header | 문서 전체나 섹션이 헤더 |
    | nav | 네비게이션 |
    | aside | 사이드에 위치한 공간 |
    | section | 문서의 일반적인 구분 |
    | article | 독립적으로 구분되는 영역 |
    | footer | 문서 전체나 섹션이 푸터 |
    | h1 ~ h6 | 6단계 제목 |
    - 의미론적 요소를 담은 Tag
    - 코드의 가독성 향상, 쉬운 유지보수
3. Text content
    
    | Tag | 기능 |
    | --- | --- |
    | blockquote | 긴 인용문 (들여쓰기가 돼 있다) |
    | hr | 수평선 color |
    | pre | Enter와 Spacebar 사용 가능 |
    | p | 문단 |
    | li | list item |
    | ul | unordered list |
    | ol | ordered list type start |
    | div | 구문 콘텐츠를 위한 block container |
4. Inline text semantics
    
    | Tag | 기능 |
    | --- | --- |
    | a | 하이퍼링크 href target  |
    | b, strong | 굵은 글씨, strong은 중대 및 긴급한 콘텐츠 |
    | <br | 줄바꿈 |
    | <i> <em> | 기울기, em 특정 문자열 강조 |
    | <q> | 짧은 인용문 |
    | <s> | 취소선 |
    | <u> | 밑줄 |
    | <sup> <sub> | 위 첨자, 아래 첨자 |
    | <span> | 구문 콘텐츠를 위한 inline container |
5. Image & Multimedia
    
    | Tag | 기능 |
    | --- | --- |
    | <audio> | 소리 콘텐츠 |
    | <img> | 이미지 삽입 src title alt |
    | <video> | 미디어 플레이어 삽입 |
6. Table content
    
    | Tag | 기능 |
    | --- | --- |
    | <table> | 표 border |
    | <caption> | 표의 설명 또는 제목 |
    | <thead> | 열의 머리글인 행의 집합 |
    | <tbody> | 여러 행을 묶어 표 본문 구성 |
    | <tfoot> | 열을 요약하는 행의 집합 |
    | <th> | 머리글 |
    | <tr> | 행 |
    | <td> | 데이터(열) rowspan colspan |
    | <col> | 열 |
    | <colgroup> | 열을 묶는 그룹 정의 |
- Forms
    - 사용자에게 입력받은 데이터를 서버에서 처리하는 용도
        
        | Tag | 기능 |
        | --- | --- |
        | method | GET 주소 표시줄에 입력 내용 표시, 길이 제한O |
        | method | POST 내용 표시X, 길이 제한X |
        | name | 이름 지정 |
        | action | <form> 태그 안의 내용들을 처리해줄 프로그램 지정 |
        | target | <action> 스크립트 파일을 다른 위치에 열도록 지정 |
    - 태그
        
        | Tag | 기능 |
        | --- | --- |
        | <form> | 문서 구획 (정보 제출을 위한 대화형 컨트롤 포함) |
        | <button> | 클릭할 수 있는 버튼 |
        | <input> | 사용자의 데이터를 받을 수 있는 대화형 컨트롤 |
        | <lable> | 사용자 인터페이스 항목의 설명 |
        | <select> | 옵션 메뉴를 제공하는 컨트롤 |
        | <option> | 항목 |
        | <textarea> | 멀티라인 일반 텍스트 편집 컨트롤 |
        | <fieldset> | 웹 양식의 여러 컨트롤과 레이블을 묶을 때 사용 |
        | <legend> | fieldset 콘텐츠의 설명을 나타낸다. |
    - `input`
        
        | Tag | 기능 |
        | --- | --- |
        | autofocus | 폼의 요소 중에서 해당 요소에 마우스 커서를 표시 |
        | placeholder | 입력란에 힌트 내용 표시 |
        | readonly | 읽기 전용으로 지정 |
        | disabled |  |
        | required | 서버 전송 전 필수 입력 항목 체크 |
        | min, max, step | 최소값, 최댓값, 일정 간격 지정 |
        | size | 화면에 보여지는 글자의 길이 지정 |
        | minlength, maxlength | 텍스트의 최대, 최소 길이 지정 |
        | height, width | image의 너비와 높이 |
        | multiple | email이나 file일 때 두 개 이상의 값 입력 |

## V. 참고자료

- [Mozilla](https://developer.mozilla.org/ko/) 키워드 + mdn으로 검색
- emmet 기능
