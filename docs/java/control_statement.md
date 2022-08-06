---
layout: page
title: Control Statement
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 조건문

### if
- if-else문
    ```java
    if (조건) {
    		True일 경우 실행할 code;
    } else {
    		False일 경우 실행할 code;
    }
    ```
- 중첩 if문
    ```java
    if (A) {
    		if (B) {
    				A, B 모두 True일 경우;
    		} else {
    				A는 True, B는 False일 경우;
    		}
    } else {
    		A가 False일 경우;
    }
    ```
- if-else if-else문
    
    ```java
    if (A) {
    		A는 True일 경우;
    } else if (B) {
    		A는 False, B는 True일 경우;
    } else {
    		A와 B 모두 False일 경우;
    }
    ```

### switch
```java
switch (수식A) {
		case 1:
				수식A의 값이 1일 때 출력할 code;
		case 2:
				수식A의 값이 2일 때 출력할 code;
		default:                              //else와 동일한 역할
				수식A의 값이 1, 2가 아닐 때 출력할 code;
}
```
- 만약 수식A가 1이라면 case 1 이후로 code를 계속 출력한다.
- 수식A가 1일 때, case 1의 code만 출력하고 싶다면 `break` 필요

## 반복문
### for문
```java
for (초기화식; 조건식; 증감식) {
		반복 수행할 문장;
}
```
- 초기화식, 증감식은 둘 이상 작성 가능
- `for( ; ; )` 무한루프

### while문
```java
while (조건식) {
		반복 수행할 문장;
}
```

### do~while문
```java
do {
		반복 수행할 문장
} while (조건식);
```
- 반복 수행할 문장을 먼저 수행 후 조건식을 판단

## 반복문 제어
### break
### continue

## 참고 자료
- [https://wikidocs.net/263](https://wikidocs.net/263)
