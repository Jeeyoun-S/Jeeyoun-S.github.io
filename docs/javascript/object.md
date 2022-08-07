---
layout: page
title: Object
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### Object
- 문자열로 이름을 붙인 값들의 집합체 (Key : Value)
- **Property** : 객체에 저장하는 값

### 생성
- 객체 리터럴 `{}`
- 생성자 `new Object()`
- 생성자 함수 `function Func() {}; let new_object = new Func();`

### Property 추가
```jsx
let me = {name: ‘gildong’, age: 20} //key 값은 알아서 문자열로 인식

function Profile(name, age) {
		this.name = name;
		this.age = age;
}
let you = new Profile("kildong", 25)
```

- 함수 내 this는 함수를 호출한 객체
- key와 value가 같은 경우
    
    ```jsx
    const a = ['what', 'where', 'who']
    const b = ['which', 'how', 'why']
    const object_name= {
    		a,
    		b,
    }
    ```

### 조회 및 수정

```jsx
//조회
console.log(me.name);

//변경
me.name = "kildong";
```

```jsx
//조회
console.log(me['name']);

//변경
me['name'] = "kildong";
```

### 추가 및 삭제

```jsx
//추가
me.job = "developer";
me['email'] = "abcdef@naver.com";

//삭제
delete me.name;
```

### 주소 복사

- `array1 = {name: 'gildong'}; array2 = array1;`
- array1의 주소를 array2에도 저장

### ForEach

.foreach(cb) ⇒ return 되는 값 없음 === 콜백 함수에 return 필요 없음

arry.forEach(function (num)) {

console.log(num);

}

arry.map(num ⇒ num *2)

.find

.filter

.every

.reduce

.some
