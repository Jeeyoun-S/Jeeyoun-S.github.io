---
layout: page
title: Datatype
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 자료형

### Numeric Type
- 숫자 표현
    - **정수** `int(10)`
    - **실수** `float(10.12345)`
    - **지수** `number = 123456e-2 #1234.56`
    - **복소수** `complex(a, b)` = a + bj
    - Python에서 저장 가능한 최댓값
        ```python
        import sys
        print(sys.maxsize)
        ```
        - Python의 경우, 오버플로우(데이터 타입 별 메모리 크기 제한)이 없다.
        - **임의 정밀도 산술**: 남아있는 가용 메모리를 더 끌어다 쓸 수 있는 방식

- N진수
    | 2진수(binary) | 8진수(octal) | 16진수(hexadecimal) |
    |:---:|:---:|:---:|
    | 0b | 0o | 0x |
    
- 부동소수점 오류 (Floating point rounding error)
    - 원인
        1. 2진수를 10진법으로 바꾸는 과정에서 무한대 숫자가 나타난다.
        2. 무한대 숫자 그대로 저장 불가 → 근사값만 표시
    - 해결방법
        1. 매우 작은 수와의 비교
            ```python
            print(abs(A-B)<=1e-15)
            ```
        2. math 활용
            ```python
            import math
            print(math.isclose(A, B))
            ```
        3. sys 활용
            ```python
            import sys
            abs(A-B) <= sys.float_info.epsilon
            ```

### String Type
- Escape sequence
    | \n | \t | \r | \\ | \" | \' | \0 |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Enter | Tab | 캐리지 리턴 | \ | " | \' | Null |
    
- String Interpolation
    1. % 포맷팅
        `print("나는 매일 %d번씩 손을 닦는다" %num)`
    2. str.format 함수
        `print('나는 매일 {}번씩 밥을 먹는다'.format(num))`
    3. f-string 문법*
        `print(f'나는 매일 {num}번씩 양치한다')`
        
- String Interpolation 형식
    - **표현식**
        | 정수 | 문자 | 실수 | 8진수 | 16진수 | 년 | 월 | 일 | 요일 |
        |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
        | d | c | f | o | x | %y | %m | %d | %A |
        1. 예시 코드
        ```python
        num = 34.54564
        print(f'{num:.2f}') #34.55
        print(f'{num:0.7f}') #34.5456400
        ```
        2. 예시 코드
        ```python
        import datetime
        today = datetime.datetime.now()
        print(f'{today:%y}년 {today:%m}월 {today:%d}일') #22년 07월 19일
        ```
    - **정렬**
        | {num:>5} | 오른쪽 정렬 |
        | {num:<5} | 왼쪽 정렬 |
        | {num:^5} | 가운데 정렬 |
        | {num:0<5} or {num:<05} | 왼쪽 정렬 & 빈 자리는 0 |
    - 중괄호 출력 원하면 `{{}}`

### Boolean Type
- `True` `False`

### List [sequence, 가변]
- `[]` 또는 `list()` 로 생성 가능

### Tuple (sequence, 불변)
- `()` 또는 `tuple()` 로 생성 가능
- Tuple assignment `x, y = 0, 0`
- 불변이지만, `tuple * 2` `tuple += True, False` 는 가능

### Range (sequence, 불변)
- `range(start, end+1, step)`

### Set {not sequence, 가변}
- `{}` 또는 `set()`로 생성 가능
- 연산자
    | `|` | 합집합 |
    | `&` | 교집합 |
    | `-` | 차집합 |
    | `^` | 대칭차집합 (합집합 - 교집합) |

### Dictionary {not sequence:가변}
- `{}` 또는 `dict()` 로 생성 가능
- **Key** 불변 데이터만 가능 (str, integer, float, bool, tuple, range)
- **Key** 중복 불가능, 중복 시 맨 마지막만 값으로
- **Value** 형태 관계 없음
- 3.7부터는 ordered, 명확한 정렬을 원한다면 `OrderedDict` 사용
- List, Tuple, Set로 **형 변환** 시, Key 값만 남는다.

## 형 변환
- 암시적 implicit → 사용 지양 `print(True+3) #4` `print(3+5.0) #8.0`
- 명시적 explicit

## 기타

### Indexing & Slicing sequence
- List, Tuple, Range, 문자열에서 사용 가능
- `Indexing[index]` `Slicing[start, end+1, step]`
- **예시**
    ```python
    word = "python"
    word[2] #t, indexing
    word[5:2:-1] #noh, slicing
    ```

### Shallow & Deep copy
- 할당 Assignment `b = a`
    1. 불변
        ```python
        a = "aaa"; b = a
        b = "bbb" #b만 변화
        ```
    2. 가변
        ```python
        a = [0, 1, 2]; b = a
        b[0] = 3 #a와 b 모두 변화
        ```
        
- 얕은 복사 Shallow copy
    - Slicing `b = a[:]`
        1. List
            
            ```python
            a = [0, 1, 2]; b = a[:]
            b[0] = 2 #b만 변화
            ```
            
        2. List 속 List
            
            ```python
            a = [0, 1, [2, 3]]; b = a[:]
            b[2][0] = 5 #a와 b 모두 변화
            ```
    - list( ) `b = list(a)`
        ```python
        a = [0, 1, [2, 3]]; b = list(a)
        b[2][0] = 5 #a와 b 모두 변화
        ```
    - copy.copy() `b = copy.copy(a)`
        ```python
        import copy
        a = [0, 1, [2, 3]]; b = copy.copy(a)
        b[2][0] = 5 #a와 b 모두 변화
        ```
        
- 깊은 복사 Deep copy
    - copy.deepcopy(**)** `b = copy.deepcopy(a)`
        ```python
        import copy
        a = [0, 1, [2, 3]]; b = copy.deepcopy(a)
        b[2][0] = 5 #b만 변화
        ```
