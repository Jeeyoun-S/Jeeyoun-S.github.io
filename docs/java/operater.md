---
layout: page
title: Operator
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 1. 단항 연산자

- 증감 연산자 `++` `--`
- 부호 연산자 `+` `-`
- 형 변환 연산자 `(datatype)`

## 2. 산술 연산자

- `*` `/` `%` `+` `-`

## 3. 비트 연산자

- NOT `~` 1은 0로, 0은 1로
- AND `&` 둘 다 1일 경우 1이고, 나머지는 0
- OR `|` 둘 중 하나 이상 1이면 1이고, 나머지는 0
- XOR `^` 둘이 다르면 1이고, 나머지는 0
- SHIFT
    - `a << b` 정수 a를 b만큼 왼쪽으로 이동, 빈자리는 0
    - `a >> b` 정수 a를 b만큼 오른쪽으로 이동, 빈자리는 제일 왼쪽 값 복사
    - `a >>> b` 정수 a의 b만큼 오른쪽으로 이동, 빈자리는 0 → 무조건 양수

## 4. 비교 연산자

- 대소 비교 `>` `>=` `<` `<=`
- 동등 비교 `==` `!=`
    - `String` 의 경우, `equals()` 로 동등 비교
- `A instanceof B`  객체 A가 클래스 B이거나 B를 상속받는다면 `true`

## 4. 논리 연산자

- AND `&&`
- OR `||`
- NOT `!`

## 5. 삼항 연산자

- `조건 ? True일 때 실행할 Code : False일 때 실행할 Code`

## 6. 대입 연산자

- `=`
- `+=` `-=` `*=` `/=` `%=`
- `&=` `^=` `|=`
- `<<=` `>>=` `>>>=`
