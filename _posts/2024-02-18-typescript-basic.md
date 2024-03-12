---
title: Typescript 입문
tags: [Typescript]
style: fill
color: light
description: 타입스크립트 입문 - 기초부터 실전까지
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

> [타입스크립트 입문 - 기초부터 실전까지](https://inf.run/Ytf3)를 수강하며 정리한 글입니다.

## 참고 자료
- [강의 GitHub Repository](https://github.com/joshua1988/learn-typescript)
- [강의 자료 핸드북](https://joshua1988.github.io/ts/)
- [Typescript 공식 문서](https://www.typescriptlang.org/ko/)

## 초기 설정
### 필수 VSCode Plugin
- ESLint (TSLint deprecated)
- Live Server

### 타입스크립트의 장점
1. 에러 방지
2. 코드 가이드 및 자동 완성

### Javascript를 Typescript처럼
1. @ts-check 사용  
    ```javascript
    // @ts-check
    
    /**
    * @param {number} a 첫 번째 숫자
    * @param {number} b 두 번째 숫자
    * @returns {number}
    */
    function sum(a, b) {
      return a+b;
    };
    
    sum(10, "20"); // 오류 발생
    ```

2. Type 선언  
    ```javascript
    // typedef 사용
    
    /**
    * @typedef {object} Address
    * @property {string} street
    * @property {string} city
    */
    
    /**
    * @typedef {object} User
    * @property {string} name
    * @property {string} email
    * @property {Address} address
    */
    
    /**
    * @returns {Promise<User>} 사용자 정보
    */
    function fetchUser() {
      return axios.get(url);  
    };  
    ```

### Typescript 설정
1. .ts 파일 컴파일
```shell
npm i typescript -g # TS 설치
tsc index.ts        # TS를 JS로 변환
```

2. tsconfig 설정
```json
// 참고 자료 https://www.typescriptlang.org/ko/tsconfig
{
  "compilerOptions": {
    "allowJs": true, // js 파일 허용
    "checkJs": true, // @ts-check
    "noImplicitAny": true, // 최소 any라는 기본 타입 필수
  }
}
```

> **JS 변환 방법**  
> 많은 브라우저가 지원하는 JS로 변환 : https://babeljs.io/  
> TS를 JS로 변환 : https://www.typescriptlang.org/ko/play  

## 기본 문법
### Type Basic
1. 기본 타입 선언
```typescript
const strr: string = "hello";
const num: number = 10;
```

2. 배열 선언
```typescript
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
const items: number[] = [1, 2, 3];
```

3. Tuple 선언
```typescript
// Tuple, 모든 인덱스의 타입 설정
const address: [string, number] = ['seoul', 0];
```

4. Object 선언
```typescript
const obj: object = {};
const person: object = {
  name: 'capt',
  age: 100
};
const student: { name: string, age: number } = {
  name: 'thor',
  age: 1000
};
```

5. Boolean 선언
```typescript
const show: boolean = true;
```

### Functions
1. 파라미터의 타입 정의
```typescript
function sum(a: number, b: number) {
  return a + b;
};
sum(10, 20);
```

2. 반환 값의 타입 정의
```typescript
function ten(): number {
  return 10;
};
```

3. 파라미터 개수 제한
```typescript
function summ(a: number, b: number) {
  return a + b;
};
summ(10, 20, 30, 40); // 오류 발생, 엄격한 체크
```

4. Optional 파라미터 사용
```typescript
function log(a: string, b?: string) {
  return a + b;
};
log('hello world');
log('hello ts', 'abc');
```

### Type
1. 선언
```typescript
type Todo = {
  id: number,
  title: string,
  done: boolean
};
```

2. 활용 예시
```typescript
function fetchTodoItems(): Todo[] {
  const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}
```

> **any**  
> string, number, array 등의 모든 타입 통칭 (실행하는 시점에서 타입 할당)

### Interface
1. 선언
```typescript
interface User {
  age: number;
  name: string;
};
```

2. 변수에 활용
```typescript
var seho: User = {
  age: 33,
  name: '세호'
};
```

3. 함수 파라미터에 활용
```typescript
function getUser(user: User) {
  console.log(user);
};
const capt = {
  name: '캡틴',
  age: 100
};
getUser(capt);
```

4. 함수에 활용
```typescript
interface SumFunction {
  (a: number, b: number): number;
};
var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
};
```

5. 배열 인덱싱에 활용
```typescript
interface StringArray {
  [index: number]: string
};
var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 10; // 오류 발생
```

6. 딕셔너리 패턴에 활용
```typescript
interface StringRegexDictionary {
  [key: string]: RegExp
};
var obj: StringRegexDictionary = {
  something: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
obj.something;
Object.keys(obj).forEach(value => console.log(obj[value]));
```

7. 확장
```typescript
interface Person {
  name: string;
  age: number;
};
interface Developer extends Person {
  language: string;
};
var captain: Developer = {
  language: 'ts',
  name: 'capt',
  age: 100
};
```

### Interface와 Type 비교
1. 타입 별칭 : 타입에 이름을 붙인 것. 새로운 타입 값을 생성한 것이 아님. 확장 불가.
2. 인터페이스 : interface 자체를 자료형으로 보여줌. 확장 가능.
3. 확장 가능한 인터페이스 사용 추천.

### Union
1. 하나 이상의 타입을 사용 가능
2. 공통 속성에만 접근 가능
```typescript
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
function askSomeoneUnion(someone: Developer | Person) {
  // Developer와 Person의 모든 속성이 아닌 공통 속성에만 접근 가능
  someone.name;
};
```
3. 활용 예시
```typescript
function logMessage(value: string | number) {
  if (typeof value === 'number') {
        value.toString(); // number 타입을 기준으로 자동 완성 사용 가능
  }
  if (typeof value === 'string') {
        value.charAt(0);
  }
  throw new TypeError('value must be string or number');
};
logMessage('hello');
logMessage(100);
```

### Intersection
1. 여러 Type을 포괄
2. 활용 예시 (1)
```typescript
// 불가능. string이면서, number이면서, boolean
var capt: string & number & boolean;
```
3. 활용 예시 (2)
```typescript
function askSomeoneIntersection(someone: Developer & Person) {
  // Developer와 Person의 모든 속성에 접근 가능
  someone.age;
};
```

### Union와 Intersection 비교
```typescript
askSomeoneUnion({ name: '디벨로퍼', skill: '웹 개발' }); // 유니온
askSomeoneIntersection({ name: "waht", age: 100, skill: "ww" }); // 인터섹션
```

### Enum
1. 정수형 Enum
```typescript
enum Shoes {
  Nike,
  Adidas,
  Sth
};
var myShoes = Shoes.Nike;
console.log(myShoes); // 0
```

2. 문자열 Enum
```typescript
enum S {
  Nike = '나이키',
  Adidas = '아디다스'
};
var yourS = S.Nike;
console.log(yourS); // 나이키
```

3. Enum 사용 예시
```typescript
enum Answer {
  Yes = "Y",
  No = "N"
};
function ask(answer: Answer) {
  if (answer === Answer.Yes) {
        console.log("정답입니다");
  }
  if (answer === Answer.No) {
        console.log('오답입니다');
  }
};
ask(Answer.Yes);
ask(Answer.No);
```

## Class
### Prototype
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/inheritance_and_the_prototype_chain)
- [Object](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
```typescript
var user = { name: 'capt', age: 100 };
var admin = {};
admin.__proto__ = user;  // chrome 기준
console.log(admin.name); // capt
console.log(admin);      // proto 내 name 존재
```
```typescript
admin.role = 'admin'; 
console.log(admin);      // proto과 role 존재
```

### Class
- ES2015(ES6)부터 제공
```typescript
class Person {
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
}
```

### 함수 생성자와 Class
```typescript
// 함수 생성자
function Person(name, age) {
  this.name = name;
  this.age = age;
};
var capt = new Person('캡틴', 100);

// Class
class Person {
  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  };
};
var seho = new Person('세호', 30);
```

## Generic
### 개념
- 타입을 변수처럼 사용하는 방법
```typescript
function logText<T>(text: T): T {
    return text;
};
logText<string>('하이');
```

### 장점
- 함수의 중복 선언 개선
- 불필요하게 같은 코드가 반복되는 문제 해결
```typescript
// Generic 미사용
function logText(text: string) {
    return text;
};
function logNumber(num: number) {
    return num;
};
```
```typescript
// Generic 사용
function log(contents: T) {
    return contents;
};
```
- 타입 정의 시의 이점 활용 가능
- 타입을 인식해 자동 완성 기능 활용 가능
```typescript
function log<T>(text: T): T {
    return text;
};
const str = logText<string>('abc');
str.split(''); // 문자열로 인식
```

### Interface 속 Generic
```typescript
interface Dropdown<T> {
  value: T;
  selected: boolean;
};
const obj: Dropdown<string> = { value: 'abc', selected: false };
const num: Dropdown<number>  = { value: 10, selected: false };
```

### Generic 활용 예시
1. 배열
```typescript
function logTextLength<T>(text: T[]): T[] {
  // text 타입이 T인 경우, text.length 오류 발생
  // text 타입이 T[]인 경우, text.length 가능
  text.forEach((text) => {
        console.log(text);
  });
};
logTextLength<string>(['hi', 'abc']);
```

2. 정의된 타입
```typescript
interface LengthType {
  length: number;
};
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
};
// length라는 속성이 있다면 가능
logTextLength('a');            // 가능
logTextLength(10);             // 불가능
logTextLength({ length: 10 }); // 가능
```
3. keyof
```typescript
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
};
// ShoppingItem에 있는 key들 중에 한 가지만 들어갈 수 있다
function getShoppingItemOption<T extends keyof ShoppingItem>(option: T): T {
  return option;
};
getShoppingItemOption(10);     // 오류
getShoppingItemOption('a');    // 오류
getShoppingItemOption("name"); // 가능
```

## Type 활용
### Type 추론
- 특정 변수를 값을 할당, 함수 파라미터 및 반환값 설정 시 타입이 추론되는 기능
- 변수 선언
```typescript
var a;         // any로 추론
var b = 10;    // number로 추론
var c = 'abc'; // string으로 추론
```
- 함수 선언
```typescript
// any를 받아 any를 리턴하는 것으로 추론
function getD(d) {
    return d;
};
```
```typescript
// 기본값 설정에 따라 number를 받는 것으로 추론
function getE(e = 10) {
    var f = 'hi';          // f는 string으로 추론
    return e + f;          // number + string = string
};
```
- Best Common Type (가장 근접한 타입을 추론)
```typescript
var arr = [1, 2, true];       // number | boolean으로 추론
var brr = [1, 2, true, 'a'];  // string | number | string으로 추론
```

### Type 단언(assertion)
- 개발자가 Typescript보다 타입을 더 잘 알고 있다는 가정에서 시작
- 개발자가 정의한 타입으로 간주
```typescript
var a;
a = 20;               // 중간에 a의 값이 변하는 과정 존재
a = 'a';
var b = a;            // 타입 추론: b는 any로 추론
var c = a as string;  // 타입 단언: a는 string으로 c에 할당
```
- DOM API 조작 시 자주 사용
```typescript
// 타입 단언 미사용
var div = document.querySelector("div");
if (div) {
    div.innerText
};
```
```typescript
// 타입 단언 사용
var app = document.querySelector("#app") as HTMLDivElement;
app.innerText;
```

### Type 가드
```typescript
interface Developer {
  name: string;
  skill: string;
};

interface Person {
  name: string;
  age: number;
};
```
```typescript
// 반환 값에 타입 가드 적용
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
};

if (isDeveloper(tony)) {
  console.log(tony.skill); // 타입 인식됨
} else {
  console.log(tony.age);   // 타입 인식됨
}
```

### Type 호환
1. 인터페이스
```typescript
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}
```
```typescript
var developer: Developer =  new Developer();
var person: Person = new Person();
developer = new Person(); // 에러, Person에 skill 속성 없음
person = developer;       // 가능
```
- developer가 더 구조적으로 큰 타입, person이 작은 타입
- 더 작은 타입을 큰 타입에 담을 수 없다.
- class, interface, type 별칭 관계없이 내부적으로 존재하는 속성과 타입의 정의에 대해 비교

2. 함수
```typescript
var add = function(a: number) {
  // ... console.log(a);
};
var sum = function(a: number, b: number) {
  // .. return a+b;
};
```
```typescript
add = sum // 에러 (2개의 인자가 필요하나, 하나의 인자만 전달)
sum = add // 호환 가능
```
- sum이 add보다 구조적으로 더 크다.

3. 제네릭
```typescript
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 호환 가능
empty2 = empty1; // 호환 가능
```
```typescript
interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // 호환 불가능
notempty2 = notempty1; // 호환 불가능
```

### Type 모듈화
```typescript
// types.ts
export interface Todo {
  title: string;
  checked: boolean;
};
```
```typescript
// app.ts
import { Todo } from "./types";
var item: Todo = {
  title: '할 일  1',
  checked: false
};
```