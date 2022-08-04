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

# Variable
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

# Datatype
## 기본 자료형 Primitive Type
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

## 참조 자료형 Reference Type
### 배열 Array
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
        ```java
          array_name = new int[1차원 배열 수][1차원 배열 크기];
          array_name = new int[1차원 배열 수][];
          int[][] array_name = {{1,2,3,4,5}, {6,7,8,9,10}};
        ```

- String
- Class
- Interface
- Enumeration
- Annotations

# Type Casting
## 자료형 크기 비교
`byte` < `short` , `char` < `int`  < `long` < `float` <`double`

## 형 변환
### 묵시적 Implicit Casting
```java
(byte) a = 0;
int b = a;
```

```java
SmartPhone model = new SmartPhone();
Object appliance = model;
```

- 크기가 작은 자료형에서 큰 자료형으로 → 데이터 손실이 없다.

### 명시적 Explicit Casting

```java
int a = 0;
byte b = (byte) a;
```

```java
SmartPhone model = new SmartPhone();
GalaxyS21 code = (GalaxyS21) model; //무늬만
```

- 크기가 큰 자료형에서 작은 자료형으로 → 데이터 손실이 있을 수 있다.
- 형 변환 연산자 `int a = 1; byte b = (byte) a;`
- 숫자↔문자열 변환
    - String → int `Integer.parseInt(variable)` `Integer.valueOf(variable)`
    - int → String `Integer.toString(variable)` `String.valueOf(variable)` `variable + ""`
- 상속 관계에서 변수 중복 → 참조 변수 타입에 따라
    - `SmartPhone model = new GalaxyS21();` 라면 SmartPhone의 변수
- 상속 관계에서 메서드 중복 → 자식 클래스 메서드 호출

## Generics
- 미리 사용할 타입을 명시해 형 변환 불필요
- 객체 타입에 대한 안전성 확보
- `ClassName<T>` `InterfaceName<T>`
    - **T** : reference Type, **E** : Element, **K** : Key, **V** : Value
- 사용 방법
    1. 객체 생성
        - `ClassName<String> variable1 = new ClassName<String>();`
        - `ClassName<String> variable2 = new ClassName<>();`
    2. 클래스 생성
        
        ```java
        class ClassName<T> {
        		private T name;
        		public T getter() {
        				return name;
            }
        		public void setter(T newname) {
        				this.name = newname;
        		}
        }
        ```
        
    3. 사용
        - T로 객체 한정 → T의 자식까지만 허용
        - Object로 객체 설정 → 어떤 객체든지 허용
- Type parameter 제한
    - `ClassName<T extends Number>` T의 상위 타입 Number
    - `ClassName<T extends Number & InterfaceName>` 클래스와 인터페이스 제약 조건 이용
- Generic Type 객체 할당 받을 때
    - `Generic type<?>` 타입 제한 무
    - `Generic type<? extends T>` T, T의 자식 클래스 가능
    - `Generic type<? super T>` T, T의 부모 클래스 가능
- Generic Method ******************************
    
    ```java
    public <T, T2> void info(T v1, T2 v2)  {
    		
    }
    ```
    
    - 파라미터, 리턴 타입 → type parameter
