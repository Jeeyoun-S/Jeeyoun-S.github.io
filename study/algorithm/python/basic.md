---
layout: page
title: Basic
sitemap: false
permalink: /study/algorithm/python/basic/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

*update 2022.11.16 -create*

## 타입 명시 방법
1. 변수
```python
zero: str = "0"
one: int = 1
```

2. 함수
```python
def function(value: int) -> str:
```

## generator
1. 선언
```python
def generator():
    yield 0
    yield "0"
    yield False
```

2. 출력
```python
new = generator()
next(new)         # 0
next(new)         # "0"
next(new)         # False
```

## 함수 & 라이브러리
1. `divmod(A, B)` : (A//B, A%B)