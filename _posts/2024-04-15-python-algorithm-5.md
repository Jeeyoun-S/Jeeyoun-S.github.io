---
title: 파이썬 알고리즘 인터뷰 5장
tags: [Algorithm, Python]
style: fill
color: warning
description: 파이썬 알고리즘 인터뷰 5장 리스트, 딕셔너리
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

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
