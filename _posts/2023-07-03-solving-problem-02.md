---
title: 백준. 오큰수 (17298번)
date: 2023-07-03 00:00:00 +07:00
tags: [Algorithm, Group Study, Stack]
style: fill
color: warning
description: 구글링 없이 해결하지 못했던 문제 (2)
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

### 문제
- [백준 17298번. 오큰수](https://www.acmicpc.net/problem/17298)
- 숫자 리스트 A가 주어졌을때 각 인덱스 i에 대해 오른쪽에 있으면서 A[i]보다 큰 수 중에 가장 왼쪽에 있는 수 찾기

### 시간초과 [반복문]
```python
import sys

N = int(sys.stdin.readline())
A = list(map(int, sys.stdin.readline().split()))

for i in range(N):

    for j in range(i+1, N):
        if A[i] < A[j]:
            print(A[j], end="")
            break
    else:
        print(-1, end="")

    if i != (N-1):
        print(" ", end="")
```

### 성공 [스택]
```python
```