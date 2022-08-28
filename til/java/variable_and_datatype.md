---
layout: page
title: Variable & Datatype
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Variable
- 대소문자 구분, 공백 불가, 숫자로 시작 불가
- `$`와 `_`외의 특수문자 사용 불가
- 합성어는 camelCase 활용
    - snake_case `my_name_what`
    - camelCase `myNameWhat`
    - PascalCase `MyNameWhat`
- 예약어 사용 불가 (ex. `if` `else` `class` `int` `new` )
- 변수 생성
    - 선언 `int name;`
    - 할당 `name = 'gildong';`
    - 초기화 `int name = 'gildong';`
- `"` 은 문자열, `'` 은 문자를 감쌀 때 사용

## Datatype
### 기본 자료형 Primitive Type
- 논리형 `boolean` → 기본값 `false`
- 문자형 `char` → 기본값 `'\u0000'`
- 숫자형
    - 정수형
        - `byte` -128 ~ 127 (1byte) → 기본값 `0`
        - `short` -32,768 ~ 32,767 (2byte) → 기본값 `0`
        - `int` -2,147,483,648 ~ 2,147,483,647 (4byte) → 기본값 `0`
        - `long` (8byte) → 기본값 `0L`
    - 실수형
        - `float` (4byte) → 기본값 `0.0f`
        - `double` (8byte) → 기본값 `0.0`

### 참조 자료형 Reference Type
1. Array 배열
    - 같은 종류의 데이터를 저장하는 자료구조
    - 크기는 고정 → 변경 불가 → 더 큰 배열 생성 후 내용 이동
    - **배열의 장단점**
        - 장점
            - 간단하고 쉽다.
            - 접근 속도가 빠르다.
        - 단점
            - 크기를 변경할 수 없다.
            - 비순차적 데이터를 추가 및 삭제하는 데 시간이 오래 걸린다.
    - **일차원 배열**
        - 선언
            - `int[] array_name` `boolean[] array_name` `Date[] array_name`
            - `String[] array_name` `char[] array_name` → `char`는 문자, `String`은  문자열
        - 생성
            - `int[] array_name = {1, 2, 3, 4, 5};`
            - `array_name = new int[] {1, 2, 3, 4, 5};`
            - `array_name = new int[10]; #10은 자료형 길이`
        - 배열 길이 조회 `array_name.length`
        - for-each
            ```java
            int array_name [] = {0, 1, 2, 3, 4};
            for (int i : array_name) {
                System.out.println(i);
            }
            ```
        - 출력
            - `import java.util.Arrays;` `Arrays.toString(variable);` 배열을 [값, 값, 값, …] 형태로 출력
        - 복사
            - `System.arraycopy(Object a, int a_start, Object b, int b_start, int length);`
                - `a` 원본배열
                - `a_start` 원본배열 복사 시작 위치
                - `b` 복사할 배열
                - `b_start` 복사 받을 시작 위치
                - `length` 복사할 크기
    - **다차원 배열**
        - 2차원 이상의 배열
        - 선언
            - `int[][] array_name` `int array_name[][]` `int[] array_name[]`
        - 생성
            - `array_name = new int[1차원 배열 수][1차원 배열 크기];`
            - `array_name = new int[1차원 배열 수][];`
            - `int[][] array_name = { {1,2,3,4,5}, {6,7,8,9,10} };`
2. String 문자열
3. Class
4. Interface
5. Enumeration
6. Annotations

## Type Casting
### 자료형 크기 비교
- `byte` < `short` , `char` < `int`  < `long` < `float` <`double`

### 형 변환
1. 묵시적 Implicit Casting
    - 크기가 작은 자료형에서 큰 자료형으로 → 데이터 손실이 없다.
    ```java
    byte a = 0; int b = a;
    SmartPhone model = new SmartPhone(); Object appliance = model;
    ```
2. 명시적 Explicit Casting
    - 크기가 큰 자료형에서 작은 자료형으로 → 데이터 손실이 있을 수 있다.
    - 형 변환 연산자 `(byte) a;`
      ```java
      int a = 0; byte b = (byte) a;
      SmartPhone model = new SmartPhone(); GalaxyS21 code = (GalaxyS21) model;
      ```
    - **숫자 ↔ 문자열 변환**
        - String → int `Integer.parseInt(variable)` `Integer.valueOf(variable)`
        - int → String `Integer.toString(variable)` `String.valueOf(variable)` `variable + ""`
