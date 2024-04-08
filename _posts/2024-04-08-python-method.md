---
title: 알고리즘을 위한 Python
tags: [Algorithm, Python]
style: fill
color: warning
description: 알고리즘 풀 때 알면 좋은 Python Method와 Library
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## String Method
```python
sentence = "Thank you for your inviting!"
```

### count
- 문자열 내 특정 문자열의 개수를 찾는 함수
  ```python
  # y 개수 반환
  sentence.count('y') #2

  # sentence[10:]에서 y 개수 반환
  sentence.count('y', 10) #1

  # sentence[10:13]에서 y 개수 반환
  sentence.count('y', 10, 14) #0
  ```

### find, rfind
- 문자열 내 특정 문자열의 인덱스를 찾는 함수
- 찾는 문자열이 없다면 -1 반환
  ```python
  # 첫 번째 y의 인덱스
  sentence.find('y') #6

  # sentence[10:]에서 첫 번째 y의 인덱스
  sentence.find('y', 10) #14

  # sentence[10:13]에서 첫 번째 y의 인덱스
  sentence.find('y', 10, 14) #-1
  ```

### index
- find와 동일한 기능
- 찾는 문자열이 없다면 오류 발생
  ```python
  # 첫 번째 y의 인덱스
  sentence.index('y') #6

  # 첫 번째 z의 인덱스
  sentence.index('z') #ValueError: substring not found
  ```

### upper, lower, swapcase
- 소문자와 대문자를 변경하는 함수
  ```python
  # 모두 대문자로
  sentence.upper() #THANK YOU FOR YOUR INVITING!

  # 모두 소문자로
  sentence.lower() #thank you for your inviting!

  # 소문자는 대문자로, 대문자는 소문자로
  sentence.swapcase() #tHANK YOU FOR YOUR INVITING!
  ```

### capitalize, title
- 전체, 단어 기준으로 대소문자 변경
  ```python
  # 첫 문자만 대문자, 나머지는 소문자
  sentence.capitalize() #Thank you for your inviting!

  # 단어의 첫자만 대문자, 나머지는 소문자
  sentence.title() #Thank You For Your Inviting!
  ```

### lstrip, rstrip, strip
- 앞뒤 공백 제거하는 메소드
  ```python
  example = " example for strip test "

  # 왼쪽 공백 제거
  example.lstrip() #'example for strip test '

  # 오른쪽 공백 제거
  example.rstrip() #' example for strip test'

  # 왼쪽과 오른쪽 공백 제거
  example.strip() #'example for strip test'
  ```

### replace
- 특정 문자열만 변경
  ```python
  # y를 P로 변경
  sentence.replace('y', 'P') #Thank Pou for Pour inviting!

  # 처음부터 count개를 y에서 P로 변경
  sentence.replace('y', 'P', 1) #Thank Pou for your inviting!
  ```

### split
- 문자열의 특정 단위로 나눠 리스트로 반환
  ```python
  # n을 기준으로 문자열 분리
  sentence.split('n') #['Tha', 'k you for your i', 'viti', 'g!']

  # 최대 2+1 = 3개로 분리
  sentence.split('n', 2) #['Tha', 'k you for your i', 'viting!']
  ```

### join
- 반복 가능한 요소들을 하나의 문자열로 연결
  ```python
  word_list = ['A', 'B', 'C', 'D', 'E']

  # word_list에 있는 값을 @로 연결해 하나의 문자열 반환
  '@'.join(word_list) #A@B@C@D@E
  ```

### isalpha, isdigit, isalnum
- 문자열 내 요소가 무엇인지 판단
  ```python
  # A1이 알파벳 또는 한글인지 확인
  'A1'.isalpha() #False
  'A*'.isalpha() #False

  # A1이 숫자인지 확인
  'A1'.isdigit() #False
  '*1'.isdigit() #False

  # A1이 숫자, 알파벳, 한글인지 확인
  'A1'.isalnum() #True
  'A1*'.isalnum() #False
  ```

## List Method
### insert
- 리스트의 특정 위치에 요소 삽입  
  ```python
  nums = [1, 2, 3]
  nums.insert(1, 10) # [1, 10, 2, 3]
  ```

### append
- 리스트의 끝에 요소 삽입
  ```python
  nums = [1, 2, 3]
  nums.append(10) # [1, 2, 3, 10]
  ```

### clear
- 리스트의 모두 삭제
  ```python
  nums = [1, 2, 3]
  nums.clear() # []
  ```

### remove
- 리스트의 특정 위치에 요소 삭제
  ```python
  nums = [1, 2, 3]
  nums.remove(2) # [1, 3]
  ```

### pop
- 리스트의 끝에 요소 삭제
  ```python
  nums = [1, 2, 3]
  nums.pop() # [1, 2]
  ```

### count
- 리스트 내 특정 요소의 개수
  ```python
  nums = [1, 2, 3, 1, 1, 2]
  nums.count(1) # 3
  ```

### copy
- 리스트 복사
  ```python
  nums = [1, 2, 3]
  numss = nums.copy() # [1, 2, 3]
  ```

### extend
- 리스트 병합
  ```python
  nums = [1, 2, 3]
  numss = nums.extend([7, 8, 9]) # [1, 2, 3, 7, 8, 9]
  ```

### index
- 리스트 내 특정 요소의 인덱스
  ```python
  nums = [1, 2, 3]
  numss = nums.index(3) # 2
  ```

### sort
- 리스트 정렬  
  ```python
  nums = [3, 1, 5, 1, 7]
  
  # 기본 정렬
  nums.sort() # [1, 1, 3, 5, 7]
  
  # 내림차순 정렬
  nums.sort(reverse=True) # [7, 5, 3, 1, 1]
  
  # 정렬 조건 추가
  nums.sort(key=lambda x:-x) # [7, 5, 3, 1, 1]
  ```

## Library
### Deque
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

### Heap
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

### Itertools
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

### Sys
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