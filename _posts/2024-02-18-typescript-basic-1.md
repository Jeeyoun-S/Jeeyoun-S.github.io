---
title: Typescript 입문 (1)
tags: [Typescript]
style: fill
color: success
description: 타입스크립트 입문 - 기초부터 실전까지
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

> [타입스크립트 입문 - 기초부터 실전까지](https://inf.run/Ytf3)를 수강하며 정리한 글입니다.

## 참고 자료
- [강의 GitHub Repository](https://github.com/joshua1988/learn-typescript)
- [강의 자료 핸드북](https://joshua1988.github.io/ts/)
- [Typescript 공식 문서](https://www.typescriptlang.org/ko/)

# 초기 설정
## 필수 VSCode Plugin
- ESLint (TSLint deprecated)
- Live Server

## 타입스크립트의 장점
1. 에러 방지
2. 코드 가이드 및 자동 완성

## Javascript를 Typescript처럼
1. @ts-check 사용
    ```javascript
    // @ts-check
    
    /**
     * 
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

## Typescript 설정
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

> JS 변환 방법
> - 많은 브라우저가 지원하는 JS로 변환 : https://babeljs.io/
> - TS를 JS로 변환 : https://www.typescriptlang.org/ko/play

# 기본 문법
## 1. Type Basic
```typescript
// JS 문자열 선언
var str = "hello";

// TS 문자열 선언
const strr: string = "hello";
const num: number = 10;

// TS 배열 선언
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
const items: number[] = [1, 2, 3];
const address: [string, number] = ['seoul', 0]; // Tuple, 모든 인덱스의 타입 설정

// TS 객체 선언
const obj: object = {};
const person: object = {
  name: 'capt',
  age: 100
};
const student: { name: string, age: number } = {
  name: 'thor',
  age: 1000
};

// TS 불린 선언
const show: boolean = true;
```

## 2. Functions
```typescript
// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
};
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function ten(): number {
  return 10;
};

// 함수의 타입을 정의하는 방식
function add(a: number, b: number): number {
  return a + b;
};

// 여러 파라미터 제한하는 속성
function summ(a: number, b: number) {
  return a + b;
};
summ(10, 20, 30, 40); // 오류 발생, 엄격한 체크

// Optional 파라미터
function log(a: string, b?: string) {
  return a + b;
};
log('hello world');
log('hello ts', 'abc');
```

## 3. 