---
layout: page
title: Basic
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## JavaScript
- 웹 브라우저의 UI를 제어하기 위한 동적 스크립트 언어
- Node.js를 통해 콘솔에서도 사용이 가능
- Style Guide : [Airbnb](https://github.com/tipjs/javascript-style-guide), [Google](https://github.com/tipjs/javascript-style-guide)

### 사용 방법
- HTML `<script>` 태그 내에 작용
    - 위치는 상관없으나 `<body>` 내에 사용하는 것을 권장
- 외부 스크립트 참조
    - `<script src="file_name.js">`
    - `src` 설정 후 `<script>` 내부에 코드 작성 시 실행되지 않음

### 주석
- `//` 한 줄 주석
- `/* */` 여러 줄 주석

### 기본 문법
- `;` 필수는 아니나, `;` 없으면 동작이 불가능한 코드 존재
- `console.log` == `System.out.print`

## 변수
- 변수 타입은 가리키는 값에 대한 타입을 나타낸다.
- `var` `let` `const` 키워드로 변수 선언
    - `var` 는 중복 선언 가능
    - `undefined` 변수에 아무 값도 없어서 타입을 알 수 없는 경우
- **동적 타입** 대입되는 값에 따라서 용도가 변경되는 방식
- `문자` `$`  `_`로 시작, 대소문자 구분, 예약어 사용 불가
- camelCase 주로 사용, 상수는 SNAKE_CASE

### var
- 선언 및 할당 `var name = "gildong"`
- 재할당 `name = "unknown"`
- 재선언 `var name = "jieun"`
- **함수 Scope**
    ```jsx
    function func_name() {
    		var name = "gildong";
    }
    console.log(name);        //undefined
    ```
    - 함수 내에서 정의하면 그밖에서는 사용 불가능
- **호이스팅 Hoisting**
    ```jsx
    //입력 코드
    console.log(name); var name = "gildong"; console.log(name);
    
    //실행 코드
    var name; console.log(name); var name = "gildong"; console.log(name);
    ```
    - 실행에 필요한 변수 값을 상단에 선언

### let
- 선언 및 할당 `let name = "gildong"`
- 재할당 `name = "unknown"`
- 재선언 불가 `let name = "jieun" #SyntaxError`
- **블록 Scope**
    ```jsx
    let name = 'gildong';
    {
    	let name = 'IU';
    }
    console.log(name); //gildong
    ```
    ```jsx
    let name = 'gildong';
    {
    	name = 'IU';
    }
    console.log(name); //IU
    ```

### const
- 선언만 불가 `const name #SyntaxError`
- 선언 및 할당 `const name = "gildong"`
- 재선언 불가 `name = "IU" #SyntaxError`
- 재할당 불가 `const name = "IU" #SyntaxError`
- **블록 Scope**
- 상수로 사용 → 대문자 SNAKE_CASE 사용

## Datatype
### 기본 데이터 타입 Primitive Type
- **문자열** `string`
    - `" "` 큰 따옴표, `' '` 작은 따옴표
    - `` `` backtick
        - *space*, *Enter* 반영 가능
        - ``나는 ${age}살입니다``
    - [이모지](https://apps.timwhitlock.info/emoji/tables/unicode#emoji-modal) 사용 가능 `\u{1F621}`
    - Escape 문자 사용 가능 `\n` `\'`
    - `str_name.length` 문자열 길이
    - Indexing
        ```jsx
        'JavaScript'.length
        'JavaScript'[1]           //'a'
        'JavaScript'[10]          //undefined
        'JavaScript'.charAt(1)    //'a'
        'JavaScript'.charAt(10)   //""
        ```
        
- **숫자형** `number`
    - 일반적인 숫자 및 특수 숫자 `NaN` `-0` `+0`
        - `Infinity` `-Infinity` 0으로 나눴을 때
    - 지수표현 `1e2 == 20`
    - 부동소수점 사용
        ```jsx
        var num = 0.3 - 0.2
        console.log(num1)
        //0.099999999998
        ```
        ```jsx
        var num1 = 0.3; var num2 = 0.2
        console.log((num1*10-num2*10)/10)
        //0.1
        ```
- **불린형** `Boolean`
    - false `null` `undefined` `0` `''` `NaN`
    - 논리 반전 `!`
- **undefined**
    - 변수에 값이 대입되지 않은 상태
    - `var name = undefined` 도 가능하나, 권장XX
        - 값이 없다는 걸 보여주고 싶다면 `null`
    ```jsx
    var name;
    console.log(name); //undefined
    ```
- `null`
- `Symbol` 변경 불가능한 기본 타입

### 객체 타입
- Object - function array

### 변수의 자료형 검사
- `typeof (data)` → 문자열 반환 `typeof (typeof (data)) #String`
- `null` 은 `object` → 설계 실수

### 동적 데이터 타입
- 대입한 타입이 변경되면 데이터 타입도 자동으로 변경

## 형 변환
- 문자열 `String()`
- 숫자 `Number()`
    
    | 입력 | false | true | undefined | null | 숫자 이외 |
    | --- | --- | --- | --- | --- | --- |
    | 반환 | 0 | 1 | NaN | 0 | NaN |
    
    - `+"1"` → `1`
    - `-"1"` → `-1`
- 불린형 `Boolean()` `!!`

## 연산
- **단항 연산자**
    - `+` `-` `++` `--` `typeof` `!`
- **이항 연산자**
    - `+` `-` `*` `/` `%` `**` `=` `+=` `-=` `*=`
- **문자열 연산**
    - `+` 하나라도 문자열이면 문자열로 연산
    - `+` 외의 연산자이면 숫자로 연산
        
        ```jsx
        console.log(3+6+'9') //99
        console.log('3'+6+9) //369
        ```
        
- **일치 연산자**
    - `===` `!==` 값과 타입까지 일치
    - `==` `!=` 값만 일치
- **논리 연산자**
    - `true || false`
    - `false && false`
- **삼항 연산자**
    - `조건문 ? true일 때 : false일 때`

## 제어문
### 조건문
- **if**
    ```jsx
    if () {
    } if else () {
    } else {
    }
    ```
- **switch**
    ```jsx
    switch () {
    	case 1:
    	default:
    }
    ```

### 반복문
- **for**
    
    ```jsx
    for (i=0; i<10; i++) {
    		console.log(i)
    }
    ```
- **for in**
    ```jsx
    for (key in object_name) {
    		console.log(key)
    }
    ```
    - 객체의 속성을 순회
    - 인덱스 순으로 순회한다는 보장X
- **for of**
    ```jsx
    for (val of array_name) {
    		console.log(val)
    }
    ```
    - 반복 가능한 객체 순회

- **while**
    ```jsx
    while () {
    }
    ```
- **do while**
    
    ```jsx
    do {
    } while ()
    ```

## 배열 Array
- 생성 `[]` `Array()`
- 배열의 크기는 동적으로 변경
- 크기가 지정돼 있지 않아도 데이터 입력 가능
- 여러 데이터 타입을 하나의 배열에 입력 가능
- 배열의 길이는 가장 큰 인덱스 +1한 값
- **Array Method**
    - `array_name.push('추가할 값')` 마지막에 값 추가 → return length
    - `array_name.pop()` 마지막 값 제거 → return 제거한 값
    - `array_name.unshift('추가할 값')` 가장 앞에 값 추가 → return length
    - `array_name.shift()` 가장 앞에 값 제거 → return 제거한 값
    - `array_name.includes()` 특정값이 있는지 판별
    - `array_name.indexOf()` 인덱스 반환 → 없으면 -1 반환
    - `array_name.join()` 구분자로 연결해 반환 → 전달인자 없으면 쉼표
   
## Method
- `.map(num ⇒ num *2)` 새로운 배열 생성
- `.find` 조건이 true인 첫 번째 요소만 return, 없으면 undefined
- `.filter` 조건이 true인 요소만으로 배열 생성
- `.every`
- `.reduce`
- `.some`
