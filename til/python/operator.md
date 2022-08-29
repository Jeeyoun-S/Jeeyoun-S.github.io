---
layout: page
title: Operator
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

### 산술 연산자
- `+` `-` `*` `/` `//` `**`
- `A = 10; print(-A)` 변수 앞에 - 또는 +로 양수, 음수 표현 가능

### 비교 연산자
- `<` `<=` `>` `>=` `==` `!=` `is` `is not`

### 논리 연산자
- **Falsy** `0` / `0.0` / `()` / `[]` / `{}` / `None` / `“”`
- **우선순위** `not` > `and` > `or`
- **단축 평가**
    ```python
    print(1 and 2) #2
    print(0 and 1) #0
    
    print(1 or 2) #1
    print(0 or 1) #1
    ```
- `None` 의 경우, `a is None` 을 사용하는 것을 권장

### 복합 연산자
- `+=` `-=` `*=` `/=` `//=` `%=` `**=`

### 식별 연산자
- `is` `id(A)`
- -5~256까지는 id가 동일, 257부터 id는 다르다.
- id가 다르면 is로 판별 시 `False` 가 나온다.

### 멤버십 연산자
- `in` `not in`

### 연산자 우선 순위
`()` > `[::]` > `[index]` > `**` > 단항 연산자 `+` `-` > 산술 연산자 `*` `/` `%` > 산술 연산자 `+` `-` > 비교 연산자 `in` `is` > `not` > `and` > `or`
