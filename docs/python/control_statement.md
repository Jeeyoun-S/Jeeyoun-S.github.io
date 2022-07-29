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

### 기본 조건문
```python
if 조건문:
	True일 경우 실행할 code
else:
	False일 경우 실행할 code
```

### 복수 조건문
```python
if 조건문A:
	A가 True일 경우 실행할 code
elif 조건문B:
	A가 False, B가 True일 경우 실행할 code
else:
	A와 B가 False일 경우 실행할 code
```

### 중첩 조건문
```python
if 조건문A:
	if 조건문 B:
		A가 True이고, B도 True일 경우 실행할 code
```

### 조건 표현식 (삼항 연산자)
```python
true인 경우 값 if 조건 else false인 경우 값
```

- 가독성이 떨어진다는 단점이 있다.

## 반복문

### While문
```python
while 조건:
	조건이 True라면 실행할 code
```

### For문
```python
for 변수 in iterable:
	iterable의 처음부터 끝까지 반복할 code
```
- enumerate 순회
    `for index, i in enumerate(list, start=1):`
- Comprehension
    1. List `[Code for 변수 in iterable if 조건]`
    2. Dictionary `{Code:Code for 변수 in iterable}`

### 반복문 제어
- `break` 반복문 종료
- `continue` 이후 코드 실행 안 하고, 다음 반복 수행
- `for-else` 반복문 실행한 후에 else문 실행
- `pass` 아무것도 안 한다.

## 
- [Python Tutor](https://pythontutor.com/) 조건문과 반복문을 시각화해서 보여주는 사이트
