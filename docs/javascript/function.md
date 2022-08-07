---
layout: page
title: Function
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}
- 객체로 값처럼 사용 가능
- 변수에 대입, 매개변수로 전달 가능
- 배열의 요소, 객체의 프로퍼티로 설정 가능
- 매개변수의 개수가 일치하지 않아도 호출 가능

### 1. 함수 만들기

- **함수 선언식**
    
    ```jsx
    //함수의 이름과 함께 정의
    function func() {}
    
    //호이스팅O, func() 호출 가능
    func();
    function func() {
    		console.log("Hello")
    }
    ```
    
- **함수 표현식**
    
    ```jsx
    // 익명 함수로 정의
    let func = function() {}
    
    //호이스팅X, func() 호출 불가능
    func();
    let func = function () {
    		console.log("Hello")
    }
    ```
    
- **함수의 리턴**
    - `return 리턴할 값`
    - 특정 값을 반환하지 않으면 `undefined` 반환
- **함수의 매개변수**
    - 매개변수가 함수의 호출에 영향을 미치지 않는다.
    - Overloading X
    
    ```jsx
    //함수 내부 프로퍼티 arguments 이용
    function func() {
    		console.log(arguments)
    }
    func(1, 10, 100) //1, 10, 100
    ```
    
    ```jsx
    function func(num) {
    		console.log(num)
    }
    func()            //undefined
    func(1, 10, 100)  //1
    ```
    

### 2. 화살표 함수

```jsx
var func_name = () => {
		console.log("화살표 함수");
}
func_name();
```

- 매개변수가 하나면 소괄호 `()` 생략 가능
- 실행문이 하나면 중괄호 `{}` 생략 가능
- 실행문이 하나이고, 해당 실행문이 return문이면, return 생략

화살표 함수 내에 this가 있으면 다르게 동작
