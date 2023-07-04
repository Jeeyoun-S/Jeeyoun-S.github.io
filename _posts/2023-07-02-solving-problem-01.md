---
title: 백준. 세 용액 (2473번)
date: 2023-07-02 00:00:00 +07:00
tags: [Algorithm, Group Study, Two Pointer]
style: fill
color: warning
description: 구글링 없이 해결하지 못했던 문제 (1)
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

6월이 되면서 SSAFY 공식 일정이 종료됐다. 이제 본격적으로 취업 준비를 할 시기가 됐고, 코딩테스트를 위해 알고리즘 스터디를 시작했다. 생각보다 고난도의 문제로 구성돼 있고, 생각을 많이 해야 하는 좋은 문제들이 많았다. 그중에서도 구글링 없이 해결하지 못한, 다시 꼭 풀어봐야 할 고난도 문제 위주로 기록을 남기고자 한다.

### 문제
- [백준 2473번. 세 용액](https://www.acmicpc.net/problem/2473)
- N개의 숫자가 주어졌을때, 3개의 합이 0에 가장 가까운 숫자 3개를 찾는 문제

### 시간초과
```python
import sys
from itertools import combinations

# 전체 용액의 수 입력 받기
N = int(sys.stdin.readline())

# 용액의 특성값 리스트 입력 받기
water = list(map(int, sys.stdin.readline().split()))

# 3개 용액 합쳤을 때 0에 가장 가까운 합, result를 만드는 3개 용액
result, value = sys.maxsize, []

# water 리스트에서 3개를 뽑는 모든 경우의 수 반복
for combi in combinations(water, 3):
  
  # 현재 뽑힌 3개(combi)의 합
  total = abs(sum(combi))

  # 합이 0이라면 value 값 바꿔주고 반복문 종료
  if total == 0:
    value = list(combi)
    break

  # 저장돼 있는 합보다 작으면 업데이트
  if result > total:
    result = total
    value = list(combi)

# 오름차순 정렬 후 출력
value.sort()
print(*value)
```

### 성공
```python
import sys

# 전체 용액의 수 입력 받기
N = int(sys.stdin.readline())

# 용액의 특성값 리스트 입력 받기
water = list(map(int, sys.stdin.readline().split()))

# 용액의 특성값 오름차순 정렬
water.sort()

# 3개 용액 합쳤을 때 0에 가장 가까운 합, result를 만드는 3개 용액, 반복문 진행 여부
result, value, going = sys.maxsize, [], True

# 처음부터 뒤에서 세번째까지 돌면서 하나의 용액 선택
for i in range(N-2):

  # i+1부터 N-1까지 투포인터
  start, end = i+1, N-1

  # start가 end보다 큰 동안 반복
  while start < end:

    # 현재 구한 값에서 용액의 특성값 합 구하기
    v = water[i] + water[start] + water[end]

    # 합이 현재까지 구한 값보다 작다면
    if abs(v) < result:

      # 결과값 갱신
      value, result = [water[i], water[start], water[end]], abs(v)

      # 만약 0이라면 반복문 종료
      if v == 0:
        going = False
        break

    # 만약 합이 0보다 크면 end - 1
    if v > 0:
      end -= 1
    
    # 합이 0보다 작으면 start + 1
    else:
      start += 1

  # 반복문 종료 조건
  if not going:
    break

# 결과값 출력
print(*value)
```

### 관련 문제
- [백준 2470번. 두 용액](https://www.acmicpc.net/problem/2470)