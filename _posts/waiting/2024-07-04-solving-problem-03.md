---
title: 프로그래머스. 순위 검색
date: 2023-07-04 00:00:00 +07:00
tags: [Algorithm, Group Study, Binary Search]
style: fill
color: warning
description: 구글링 없이 해결하지 못했던 문제 (3)
published: false
---

### 문제
- [프로그래머스. 순위 검색](https://school.programmers.co.kr/learn/courses/30/lessons/72412)
- 주어진 조건과 지원자들의 스펙을 비교해 조건에 충족하는 지원자만 걸러내는 문제

### 효율성 시간초과 [이분탐색]
```python
def solution(info, query):
  
  conditions = []
  n = len(info)
  
  for i in range(n):
    info_list = info[i].split(" ")
    info_list[-1] = int(info_list[-1])
    conditions.append(info_list)
  conditions.sort(key = lambda x: x[-1])
  
  def half(start, end, score):
    if start >= end:
      if conditions[end][4] >= score:
        return end
      elif start >= n or conditions[start][4] >= score:
        return start
      elif conditions[start][4] < score:
        return start + 1
      else:
        return end - 1
    mid = start + ((end - start) // 2)
    if conditions[mid][4] >= score:
      return half(start, mid, score)
    else:
      return half(mid+1, end, score)
  
  # 정답 리스트
  answer = [0 for _ in range(len(query))]
  for idx, val in enumerate(query):
    i_list = val.split(" and ")
    lang, end, age = i_list[0], i_list[1], i_list[2]
    food, score = i_list[-1].split(" ")
    start_point = half(0, n-1, int(score))

    if start_point >= n:
      continue
    
    for j in range(start_point, n):
      if lang == conditions[j][0] or lang == '-':
        if end == conditions[j][1] or end == '-':
          if age == conditions[j][2] or age == '-':
            if food == conditions[j][3] or food == '-':
              answer[idx] += 1

  return answer
```

### 성공 [이분탐색+자료구조]

### 관련 문제