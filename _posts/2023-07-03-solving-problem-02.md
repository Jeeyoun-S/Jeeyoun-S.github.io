---
title: 백준. 오큰수 (17298번)
date: 2023-07-03 00:00:00 +07:00
tags: [Algorithm, Problem Solving, Stack]
style: fill
color: warning
description: 힌트 없이 해결하지 못했던 문제 (2)
---

### 문제
- [백준 17298번. 오큰수](https://www.acmicpc.net/problem/17298)
- 숫자 리스트 A가 주어졌을때 각 인덱스 i에 대해 오른쪽에 있으면서 A[i]보다 큰 수 중에 가장 왼쪽에 있는 수 찾기

### 시간초과 [반복문]
- 시간복잡도 O(N<sup>2</sup>) 

```python
import sys

# 수열 길이 입력 받기
N = int(sys.stdin.readline())

# 수열 A 리스트 입력 받기
A = list(map(int, sys.stdin.readline().split()))

# 0부터 N-1까지 반복: 답을 구할 인덱스
for i in range(N):

    # A[i]와 비교할 i보다 큰 인덱스
    for j in range(i+1, N):

        # A[i]보다 크면 출력 후 반복 종료
        if A[i] < A[j]:
            print(A[j], end="")
            break
    
    # 오른쪽에 더 큰 값이 없다면 -1 출력
    else:
        print(-1, end="")

    # 출력 형식 맞추기 위해 띄어쓰기 출력
    if i != (N-1):
        print(" ", end="")
```

### 성공 [스택]
- 시간복잡도 O(N) 

```python
import sys
from collections import deque

# 수열 길이 입력 받기
N = int(sys.stdin.readline())

# 수열 A 리스트 입력 받기
A = list(map(int, sys.stdin.readline().split()))

# 정답 리스트
answer = [-1 for _ in range(N)]

# 사용할 stack
stack = deque()

# 인덱스 0은 넣고 시작
stack.appendleft(0)

# 인덱스 1부터 N-1까지 반복
for i in range(1, N):
    
    # stack에 값이 있고, 현재 값보다 stack의 맨 위 값이 작을 때
    while stack and A[stack[0]] < A[i]:
        
        # 스택 맨 위의 인덱스 값을 A[i]로 바꾸기
        answer[stack.popleft()] = A[i]
    
    # stack에 현재 값 넣기
    stack.appendleft(i)

# 출력
print(*answer)
```