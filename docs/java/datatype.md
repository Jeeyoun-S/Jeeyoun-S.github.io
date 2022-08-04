---
layout: page
title: Datatype and Operator
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---

This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

# I. Datatype

## 1. 기본 자료형

### a. 논리형

- `boolean`

### b. 문자형

- `char`

### c. 숫자형

- 정수형
    - `byte` -128 ~ 127
    - `short` -32,768 ~ 32,767
    - `int` -2,147,483,648 ~ 2,147,483,647
    - `long`
- 실수형
    - `float`
    - `double`

## 2. 참조 자료형

### a. String

# II. Type Casting

## 1. 크기 비교

`byte` < `short` , `char` < `int`  < `long` < `float` <`double`

## 2. 형 변환

### a. 묵시적 Implicit Casting

- 크기가 작은 자료형에서 큰 자료형으로 → 데이터 손실이 없다.

### b. 명시적 Explicit Casting

- 크기가 큰 자료형에서 작은 자료형으로 → 데이터 손실이 있을 수 있다.
- 형 변환 연산자 `int a = 1; b = (byte) a;`

# III. Operator

## 1. 단항 연산자

- 증감 연산자 `++` `--`
- 부호 연산자 `+` `-`
- 논리 부정 연산자 `!`
- 비트 부정 연산자 `~`
- 형 변환 연산자 `(datatype)`

## 2. 산술 연산자

`*` `/` `%` `+` `-`

## 3. 비교 연산자

- 대소 비교 `>` `>=` `<` `<=`
- 동등 비교 `==` `!=`
    - `String` 의 경우, `equals()` 로 동등 비교

## 4. 논리 연산자

`&&` `||` `!`

## 5. 삼항 연산자

`조건 ? True일 때 Code : False일 때 Code`

## 6. 복합 대입 연산자

`+=` `-=` `*=` `/=`
