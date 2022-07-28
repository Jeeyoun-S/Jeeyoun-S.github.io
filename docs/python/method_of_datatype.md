---
layout: page
title: Method of Datatype
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---

This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## I. 문자열

### 1. 문자열 조회 및 탐색

- `string.find('A')` A의 첫 번째 위치 반환 → A가 없으면 -1 반환
- `string.index('A')` A의 첫 번째 위치 반환 → A가 없으면 `ValueError`
- `string.count('A')` A의 갯수를 반환

### 2. 문자열 검증

- `string.isspace()` 문자열이 공백으로 이뤄져 있는지
- `string.isalpha()` 알파벳인지
- `string.isupper()` 대문자인지 `string.islower()` 소문자인지
- `string.istitle()` 단어의 처음 대문자, 나머지 소문자
- `string.isdecimal()` 0~9까지 수인가⊂ `string.isdigit()` 숫자로 이뤄져 있는가
    
    ⊂ `string.isnumeric()` 문자열을 수로 볼 수 있는가
    
- `string.startswith('A')` 문자열이 A로 시작하는가 `string.endswith('A')` A로 끝나는가

### 3. 문자열 변경

- `string.upper()` `string.lower()` `string.title()` `string.capitalize()` `string.swapcase()`
- `string.replace(old, new[,count])` 문자열의 old를 new로 바꿔준다.
- `string.split('A')` 공백 or 인자를 기준으로 분리
- `'A'.join(iterable)` iterable를 A로 이어 문자열로 → 문자열이 아닌 값 전달 시 `TypeError`
- `string.strip('A')` `string.rstrip('A')` `string.lstrip('A')` 공백 or 인자 제거
    
    ```python
    words = 'nananacnananabanana'
    print(words.rstrip(' banana')) #'nananac'
    ```
    

## I. 리스트

### 1. 요소 추가 및 삭제

- `list.append(A)` 끝에 A 삽입
- `list.insert(idx, A)` 인덱스 idx에 A를 삽입 → `idx > len(list)`이면 맨 끝에 A 삽입
- `list.extend(iterable)` 맨 끝부터 iterable의 모든 요소 추가
    
    ```python
    lunch_menu = ['sandwitch', 'taco', 'chicken', 'pizza']
    lunch_menu.extend('ade')
    print(lunch_menu) #['sandwitch', 'taco', 'chicken', 'pizza', 'a', 'd', 'e']
    ```
    
- `list.remove(A)` A 중 가장 왼쪽에 있는 항목 제거 → A 없으면 `ValueError`
- `list.pop(idx)` 가장 마지막 요소 또는 `list[idx]`를 반환 후 제거
- `list.clear()` 모든 요소 제거

### 2. 요소 탐색

- `list.index(A)` 가장 왼쪽에 있는 A의 index를 반환 → A 없으면 `ValueError`
- `list.count(A)` A의 개수 반환

### 3. 요소 정렬

- `list.sort()` 정렬 → `sorted(list)` 정렬해서 새로운 리스트 생성
- `list.reverse()` 현재에서 순서를 반대로

## III. 튜플

### 1. 탐색

- `tuple.index(A[,start[,end]])`
- `tuple.count(A)`

## IV. 집합

### 1. 요소 추가 및 삭제

- `set.add('A')` `set.update([1, 2, 3])`
- `set.pop()` 임의의 원소 1개 제거
- `set.remove('A')` A 제거 → A가 없으면 `KeyError`
- `set.discard('A')` A 제거 → A가 없어도 에러 없이 set 그대로 반환
- `set.clear()` 전체 값 삭제

### 2. 복사

- `set.copy()` 얕은 복사
- `set.get()` `set.setdefault()`

### 3. 요소 관계

- `set1.isdisjoint(set2)` set1과 set2가 서로소인가
- `set1.issubset(set2)` set1 ⊂ set2, set1이 set2의 부분집합
- `set1.issuperset(set2)` set2 ⊂ set1, set2가 set1의 부분집합

## V. 딕셔너리

### 1. 조회

- `dict.keys()` `dict.values()` `dict.items()`
- `dict.get(key[, default])` key의 값을 반환 → key가 없으면 `None` 또는 `default` 반환
- `dict.setdefault(key[, default])` key의 값을 반환
    
    → key가 없으면 `dict[key] = default`를 저장한 뒤 `default` 반환
    

### 2. 값 추가 및 삭제

- `dict.clear()`
- `dict.pop(key[, default])` key 값 반환하고 삭제 → key 없으면 `KeyError` 또는 `default` 반환
- `dict.update('A'=1)` `dict.update({'A':1})`

### 3. 복사

- `dict.copy()` 얕은 복사
