---
layout: page
title: CSS
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## CSS 개념

- Cascading Style Sheets
- HTML를 화면에 표시하는 방식을 정의
- 내용과 관계없이 디지인만 변경 가능
- 반응형 문서 제작 가능
- 확장자 `.css`
- 기본구조
    ```css
    .class_name {               /*선택자(Selector)*/
    	/*선언부, 선언 블록*/
    	background-color: red;    /*background-color: 속성, red: 속성 값*/
    	width: 100px;             /*선언*/
    }
    ```

## CSS 적용 방법
1. 외부 참조 external style
    - `<link>`를 사용해 외부 스타일 시트 적용
    - 예시 `<link rel="stylesheet" href="외부참조시트.css">`
2. 내부 참조 Internal style
    - `<style>` 태그 사이에 CSS 규칙 작성
    - 외부 참조보다 우선 적용
3. Inline style
    - tag에서 `style` 속성을 사용
    - 예시 `<h1 style="color: red; font-size: 10px;">제목</h1>`
    - 내부 참조보다 우선 적용

## CSS Selector
- HTML에서 CSS를 적용할 요소 정의

### 기본 선택자
1. 전체 선택자 Universal selector
    - HTML 내 모든 element를 선택
    - `* { style properties }`
2. 유형 선택자 Type selector
    - 태그명으로 해당 태그의 모든 요소 선택
    - `tag-name{ style properties }`
3. 클래스 선택자 Class selector
    - class가 적용된 모든 태그 선택
    - `.class-name{ style properties }`
4. 아이디 선택자 ID selector
    - 동일한 ID를 가진 태그 선택
    - `#id-name{ style properties }`
5. 속성 선택자 Attribute selector
    - 특정한 속성이 있는 태그 선택
    - `tag[attribute]{ style properties }`
    - `tag[attribute="what"]{ style properties }`
        - `~="what"` 속성 개수와 관계없이 what을 속성으로 가지면 선택
        - `|="what"` what으로 시작하는 요소 값을 가지면 선택 (`what where` 선택X)
        - `^="what"` what으로 시작하는 요소 값을 가지면 선택 (`what where` 선택O)
        - `$="what"` what으로 끝나는 요소 값을 가지면 선택
        - `*="what"` what이 요소 값에 들어가면 선택 (`wwwwhattttt` 선택O)

### 그룹 선택자
1. 선택자 목록 Selector list
    - 일치하는 노드 선택
    - `element1, element2 { style properties }`

### 결합자
1. 자손 결합자 Descendant combinator
    - `selector1 selector2 { style properties }`
    - `selector1`의 자손 중 `selector2`를 모두 선택
    - 자손 VS 자식
        ```html
        <html>
        	<head></head>
        	<body>
        		<h1></h1>
        		<h2></h2>
        		<div>
        			<div></div>
        			<span></span>
        			<ul></ul>
        		</div>
        	</body>
        </html>
        ```
        - 위의 예시에서 `<body>` 기준으로
            - 자식은 `h1` `h2` `div`
            - 자손은 `<body>` 속 모든 element
2. 자식 결합자 Child combinator
    - `selector1 > selector2 { style properties }`
    - `selector1`의 아래 자식 `selector2` 선택
3. 일반 형제 결합자 General sibling combinator
    - `former-element ~ target-element { style properties }`
    - `former-element` 뒤에 오면서 같은 부모를 공유하는 `target-element` 선택
4. 인접 형제 결합자 Adjacent sibling combinator
    - `former-element + target-element { style properties }`
    - `former-element` 바로 뒤에 오면서 같은 부모를 공유하는 `target-element` 선택

### 의사 클래스 Pseudo Class

### 우선 순위
- 마지막 규칙, 구체적인 규칙
- `!important` 우선 적용하나 사용 지양

### 상속 Inheritance
- 부모 요소의 스타일이 자식에 적용될지 모른다.
- **상속O** - 값이 지정돼 있지 않다면 부모의 속성 값을 갖는다. `color`
- **상속X** - 값이 지정돼 있지 않다면 초기값을 갖는다. `border`

## CSS 속성
### 크기 단위
- **길이**
    - `px` `cm` `mm` `in`
    - `em` 배수의 단위 (내 조상의 N배)
    - `rem` 배수의 단위 (root 최상
- **백분율** : 상위 block 크기가 바뀌면 백분율에 따라 크기 변경
- **auto (width)** : 100%, 상위 block이 허용하는 만큼
- **auto (height)** : 0%, block box 속 내용물의 크기가 높이 결정

### 색상 단위
- 키워드 `red` `blue`
- RGB `#ffffff` `rgb(255, 0, 0)` `rgba(255, 0, 0, 0.5)`
- HSL `hsl(100, 100%, 0)` `hsla(100, 100%, 0)`

### font
|  | 기능 |
| --- | --- |
| font-family | 글꼴 |
| font-size | 크기 `large` `larger`  |
| font-style | 스타일 `normal` `italic`  |
| font-variant | 소문자를 작은 대문자로 변형 `small-caps` |
| font-weight | 굵기 `lighter` `normal` `bold` `bolder` |
| font | font 속성 한 번에 지정
font:(font-weight font-style font-variant) (font-size) (font-family) |

### text

|  | 기능 |
| --- | --- |
| text-align | 수평 정렬 center right left justify |
| text-decoration | 장식 line-through underline none overline |
| text-indent | 들여쓰기 |
| text-transform | 대소문자 변경 uppercase capitalize lowercase |
| text-shadow | 그림자 text-shadow: x y blur-radius color |
| white-space | element 내 공백 지정 pre pre-wrap pre-line nowrap |
| vertical-align | 수직 정렬 top middle bottom |
| letter-spacing | 문자 간 space 간격 |
| word-spacing | 단어 간 간격 |
| line-height | 줄 간격 |
| color | 색상 |

### background

|  | 기능 |
| --- | --- |
| background-color | 배경색 |
| background-image | 배경 이미지 |
| background-attachment | 배경 이미지 고정 or scroll |
| background-repeat | 배경 그림 반복 여부 |
| background-position | 배경 그림 위치 |
| background-size | 배경 이미지 크기 조정 |
| background-clip | 배경 적용 범위 조절 |
| background | background 속성 한 번에 지정 |

### box model
- 모든 element는 box 형태
- `margin` > `border` > `padding` > `content`
    1. margin
        
        |  | top | right | bottom | left |
        | --- | --- | --- | --- | --- |
        | 10px | 10px | 10px | 10px | 10px |
        | 5px 10px | 5px | 10px | 5px | 10px |
        | 5px 10px 15px | 5px | 10px | 15px | 10px |
        | 5px 10px 15px 20px | 5px | 10px | 15px | 20px |
        - `margin-top` `margin-bottom` `margin-right` `margin-left`
        - `margin: 0 auto` 상하는 margin 없고, 가운데 정렬이 되도록 설정
        - **마진상쇄 현상** : 위아래 모두 margin이 있다면 큰 값에 맞춘다.
    2. padding
        - 배경색까지 침범, `contents` 가 축소될 수도 있다.
    3. border
        
        |  | 기능 |
        | --- | --- |
        | border-style | 선 모양 |
        | border-width | 선 굵기 |
        | border-color | 선 색상 |
        | border-radius | 선 모서리 |
        | box-shadow | 그림자 효과 |
    4. box-sizing
        - `box-sizing: border-box` contents 영역만을 box로 지정

### display
1. `display : block`
    - 줄 바꿈이 일어나는 요소
    - 화면 크기 전체 = 가로 폭
    - 블록 안에 인라인 삽입 가능
    - `div` `ul` `ol` `li` `p` `hr` `form`
2. `display : inline`
    - 줄 바꿈이 일어나지 않는 요소
    - content 너비 = 가로 폭
    - width, height, margin-top, bottom 지정 불가 → line-height로 상하 여백 지정
    - `span` `a` `img` `input` `label` `b` `e` `i` `strong`
3. `display : inline-block`
    - 한 줄에 표시 가능한 inline
    - width, height, margin 설정 가능한 block
4. `display : none`
    - 공간 차지도 안 하고, 화면에 표시하지 않는 요소
    - 공간은 차지하나 화면에 표시는 안 되는 `visibility : hidden`

### position
- `static` top, left 거리 지정 불가
- `relative` top, left 거리 지정
- `absolute` 절대적인 위치 지정
- `fixed` 스크롤해도 동일한 위치에 고정

### float
- 박스의 위치 결정을 위해 사용
- `none` 기본값
- `left` 요소를 왼쪽으로 띄운다.
- `right` 요소를 오른쪽으로 띄운다.

### clear
- `float` 속성의 값 초기화
- `left` `right` 각 속성 값 취소 가능
- `both` 양쪽의 속성 값 취소 가능
- `none` 기본값

### cursor
- 마우스 커서 모양 변경
- `auto` `crosshair` `pointer` `move` `text` `wait` `help`
- `e-resize` `ne-resize` `nw-resize` `n-resize` `se-resize` `sw-resize` `s-resize` `w-resize`

## flexbox
- 인터페이스 내 공간 배분, 정렬 기능 제공
- 주요 개념
    - Main Axios, Cross Axios
    - start, end
    - Container item

### Flex Item

|  | 기능 |
| --- | --- |
| order | item 배치 순서 제어 |
| flex-basis | item 너비 지정 |
| flex-grow | item 팽창 제어 |
| flex-shrink | item 수축 제어 |
| align-self | 교차축 정렬 |
| flex | 단축 지정 |

### Flex Container
- display 속성으로 Container 생성
    - `display: flex` → block container
    - `display: inline-flex` → inline container
    
    | flex-direction | item 나열 row row-reverse column column-reverse |
    | --- | --- |
    | flex-wrap | item 크기 > container 크기 → 줄 넘김 nowrap wrap wrap-reverse |
    | flex-flow | 방향과 줄 넘김 설정 direction wrap |
    | justify-content | 메인축 정렬
    flex-start flex-end center space-around space-evenly space-between |
    | align-items | 교차축 정렬
    stretch flex-start flex-end center baseline |
    | align-content | wrap에 의해 여러 줄이 발생한 경우 교차축 정렬
    stretch flex-start flex-end center space-around |
