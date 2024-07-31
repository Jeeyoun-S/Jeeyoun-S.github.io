---
title: 프로그래머스. 등산코스 정하기
tags: [Algorithm, Problem Solving, Shortest Path]
style: fill
color: warning
description: 힌트 없이 해결하지 못했던 문제 (3)
published: false
---

### 문제
- [프로그래머스. 등산코스 정하기](https://school.programmers.co.kr/learn/courses/30/lessons/118669)
- 산 속 N개의 지점이 주어지고 각 지점은 출입구, 쉼터, 산봉우리 중 하나로 각 지점을 잇는 등산로가 주어진다.
- 여러 등산로로 이뤄진 등산 코스는 출입구에서 시작해 시작점과 동일한 출입구에서 끝나며 산봉우리는 단 1개만 방문해야 한다.
- 등산 코스에서 가장 긴 등산로의 시간을 intensity라 하며 최소 intensity를 구한다.

### 시간초과 또는 런타임에러 [백트래킹]
- 시간복잡도 O(len(gates)len(paths))

```python
import sys

def solution(n, paths, gates, summits):
  # [0 출입구 or 1 쉼터 or 2 산봉우리, 연결된 길 [연결된 지점, 소요시간, 길 방문여부]]
  mountains = [[1, []] for _ in range(n+1)]

  # 결과값 [최소 산봉우리 번호, intensity 최솟값]
  result = [sys.maxsize, sys.maxsize]
  
  # 길을 반복하며 mountains에 맞춰 넣어주기
  for path in paths:
    i, j, w = path
    mountains[i][1].append([j, w, False])
    mountains[j][1].append([i, w, False])
  
  # 출입구를 반복하며 mountains에 출입구로 값 바꾸기
  for gate in gates:
    mountains[gate][0] = 0
  
  # 산봉우리를 반복하며 mountains에 산봉우리로 값 바꾸기
  for summit in summits:
    mountains[summit][0] = 2
  
  # 백트래킹 (현재 위치, 출입구, 산봉우리, 가장 긴 시간)
  def backtracking(now_point, start_gate, is_visit_summit, intensity):
    nonlocal result
    
    # 이미 intensity가 저장해 둔 값보다 크거나 값은 같으나 산봉우리 값이 더 커서
    # 결과값이 될 수 없는 경우
    if intensity > result[1] or (intensity == result[1] and is_visit_summit > result[0]):
      return
    
    # 현재 위치와 연결된 길로 이동
    for idx, road in enumerate(mountains[now_point][1]):
      point, cost, visited = road
      
      # 현재 위치에서 연결된 위치로의 길을 이용한 적이 없는 경우
      if not visited:
        
        # 출입구이고, 출발지와 같고, 방문한 산봉우리가 있다면
        if mountains[point][0] == 0 and start_gate == point and is_visit_summit > 0:
          # 결과값 구하기
          final_intensity = max(intensity, cost)
          if final_intensity < result[1] or (final_intensity == result[1] and is_visit_summit < result[0]):
            result = [is_visit_summit, final_intensity]

        # 쉼터인 경우
        if mountains[point][0] == 1:
          mountains[now_point][1][idx][2] = True
          backtracking(point, start_gate, is_visit_summit, max(intensity, cost))
          mountains[now_point][1][idx][2] = False

        # 산봉우리이고 아직 방문한 산봉우리가 없는 경우
        if mountains[point][0] == 2 and is_visit_summit < 0:
          mountains[now_point][1][idx][2] = True
          backtracking(point, start_gate, point, max(intensity, cost))
          mountains[now_point][1][idx][2] = False
  
  # 출입구부터 시작해 백트래킹
  for gate in gates:
    backtracking(gate, gate, -1, -1)
  
  return result
```

### 성공 [다익스트라]
- 시간복잡도 O(nlogn)
- 출입구에서 출입구로 돌아와야 하지만,
- 출입구에서 산봉우리로의 가장 긴 등산로 시간과 산봉우리에서 출입구로의 가장 긴 등산로 시간은 동일
- 따라서 출입구에서 산봉우리로의 값만 계산해 결과 출력

```python
import sys
import heapq

def solution(n, paths, gates, summits):
  
  # 각 지점 정보 [출입구 0, 쉼터 1, 산봉우리 2]
  points = [1 for _ in range(n+1)]

  # idx 지점에서 연결돼 있는 등산로
  roads = [[] for _ in range(n+1)]

  # 결과 [최소 산봉우리 번호, intensity 최솟값]
  result = [sys.maxsize, sys.maxsize]

  # idx 지점까지 도달하기까지의 최소 intensity
  distance = [sys.maxsize for _ in range(n+1)]
  
  # 출입구를 반복하며
  for gate in gates:
    # points의 값은 출입구로
    points[gate] = 0
    # 출입구로 도달하기까지 intensity는 필요 없다 (출입구에서 출발 예정)
    distance[gate] = 0
  
  # 산봉우리를 반복하며 points 값을 산봉우리로
  for summit in summits:
    points[summit] = 2
  
  # 등산로를 반복하며 roads에 (도달지점, 비용) 넣기
  for path in paths:
    i, j, w = path
    roads[i].append((j, w))
    roads[j].append((i, w))
  
  # 다익스트라 함수
  def dijkstra(start):
    nonlocal result
    
    heap = []
    heapq.heappush(heap, (0, start))
    
    while heap:
      intensity, point = heapq.heappop(heap)
      
      if distance[point] < intensity:
        continue
      
      for next_point, cost in roads[point]:
        next_intensity = max(intensity, cost)
          
        if distance[next_point] > next_intensity:
          distance[next_point] = next_intensity
            
          if points[next_point] == 1:
            heapq.heappush(heap, (distance[next_point], next_point))
  
  # 모든 출입구를 돌면서 다익스트라 계산
  for gate in gates:
      dijkstra(gate)
  
  # 계산한 distance를 반복하며 정답 구하기
  for idx, val in enumerate(distance):
    # 산봉우리인 경우
    if points[idx] == 2:
      # intensity가 저장된 값보다 작거나 intensity는 동일하나 산봉우리 번호가 더 작은 경우
      if result[1] > val or (result[1] == val and result[0] > idx):
        # 결과값 갱신
        result = [idx, val]
  
  return result
```