---
title: 파이썬 알고리즘 인터뷰 6장
tags: [Algorithm, Python]
style: fill
color: warning
description: 파이썬 알고리즘 인터뷰 6장 문자열 조작
published: false
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
