---
layout: page
title: Datatype and Operator
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}
# Datatype
## 기본 자료형
### 논리형
- `boolean`

### 문자형
- `char`

### 숫자형
- 정수형
    - `byte` -128 ~ 127
    - `short` -32,768 ~ 32,767
    - `int` -2,147,483,648 ~ 2,147,483,647
    - `long`
- 실수형
    - `float`
    - `double`

## 참조 자료형
### String

# Type Casting
## 크기 비교
`byte` < `short` , `char` < `int`  < `long` < `float` <`double`

## 형 변환
### 묵시적 Implicit Casting
- 크기가 작은 자료형에서 큰 자료형으로 → 데이터 손실이 없다.

### 명시적 Explicit Casting
- 크기가 큰 자료형에서 작은 자료형으로 → 데이터 손실이 있을 수 있다.
- 형 변환 연산자 `int a = 1; b = (byte) a;`

# Operator
## 단항 연산자
- 증감 연산자 `++` `--`
- 부호 연산자 `+` `-`
- 논리 부정 연산자 `!`
- 비트 부정 연산자 `~`
- 형 변환 연산자 `(datatype)`

## 산술 연산자
`*` `/` `%` `+` `-`

## 비교 연산자
- 대소 비교 `>` `>=` `<` `<=`
- 동등 비교 `==` `!=`
    - `String` 의 경우, `equals()` 로 동등 비교

## 논리 연산자
`&&` `||` `!`

## 삼항 연산자
`조건 ? True일 때 Code : False일 때 Code`

## 복합 대입 연산자
`+=` `-=` `*=` `/=`
