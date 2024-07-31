---
title: 알고리즘을 위한 Python
tags: [Algorithm, Python]
style: fill
color: warning
description: 알고리즘 풀 때 알면 좋은 Python Method와 Library
published: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Library
### deque
```python
from collections import deque
queue = deque()

# 왼쪽에 요소 추가
queue.appendleft(10)

# 오른쪽에 요소 추가
queue.append(0)

# 왼쪽에 요소 삭제
queue.popleft()

# 오른쪽에 요소 삭제
queue.pop()

# 왼쪽에 배열 추가
queue.extendleft(array)

# 오른쪽에 배열 추가
queue.extend(array)

# item을 삭제
queue.remove(item)
```

### heap
```python
import heapq
heap = []

# 요소 추가
heapq.heappush(heap, 50)

# 리스트를 heap으로 변경
heapq.heapify(heap)

# 요소 삭제 (가장 작은 원소 제거)
heapq.heappop(heap)
```

### itertools
```python
import itertools
nums = [1, 2, 3]

# 순열 생성
for perm in itertools.permutations(nums, 3):
  print(perm) # (1, 2) / (2, 1) / (1, 3) •••

# 조합 생성
for combi in itertools.combinations(nums, 2):
  print(combi) # (1, 2) / (1, 3) / (2, 3) •••

# 중복 조합 생성
for combi in itertools.combinations_with_replacement(nums, 2):
  print(combi) # (1, 1) / (1, 2) / (2, 2) •••

# 데카르트곱 생성 (nums와 alphas를 3번 모두 짝)
alphas = ['A', 'B', 'C']
for prod in itertools.product(nums, alphas, repeat=3):
  print(prod)
  # (1, 'A', 1, 'A', 1, 'A')
  # (1, 'A', 1, 'A', 1, 'B')
  # (1, 'A', 1, 'A', 1, 'C')
  # •••
```

### sys
```python
import sys

# 최대 정수값
sys.maxsize
float("inf")
math.inf     # python 3.5 이상만 가능

# 입력 받기
sys.stdin.readline()
input()
```