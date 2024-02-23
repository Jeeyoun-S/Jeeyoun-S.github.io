---
title: Typescript 입문 (1)
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
2. 예시
    ```typescript
    var capt: string & number & boolean; // 불가능. string이면서, number이면서, boolean
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