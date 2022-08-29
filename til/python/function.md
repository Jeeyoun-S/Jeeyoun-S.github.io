---
layout: page
title: Function
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 함수 기본 구조
```python
def func(x, y):     #선언
	""" coding """  #문서화
	n = n * 3       #Function Body
	return n
func(0,1)           #호출
```

### 선언과 호출 define & call
- 선언 `def func(x, y):` `return result`
- 호출 `func(0, 1)`

### 입력 Input
- `def func(x, y)` 에서 x, y는 Parameter (매개변수, 인수)
- `func(0, 1)` 에서 0, 1은 Argument (전달인자)
    1. Positional Arguments
    2. Keyword Arguments
        `def func(x, y)` → `func(x=0, y=1)` `func(0, y=1)` `func(x=0, 1) #Error`
    3. Default Arguments Values
        `def func(x, y=1)` `def func(x=1, y) #Error`
- 가변 인자 `*args`
    - Packing VS Unpacking
        - Packing `abcde_tupe = (1, 2, 3, 4, 5)`
        - Unpacking `a, b, c, d, e = (1, 2, 3, 4, 5)`
    - Asterisk `*` : 스퀸스 언패킹 연산자
        - Unpacking 연산자 → `a, *bcd, e = (1, 2, 3, 4, 5) #bcd = [2,3,4]`
        ```python
        def profile(*args):
        	return args #tuple 자료형으로 사용된다.
        profile(1, 2)
        ```
- 가변 키워드 인자 `**kwargs`
    - Keyword와 값이 딕셔너리로 묶여 처리
        ```python
        def profile(**kwargs):
        	print(kwargs)
        profile(name='우영우', age='25', job='lawyer')
        #출력값 {'name': '우영우', 'age': '25', 'job': 'lawyer'}
        ```

### 문서화 Docstring

### 범위 Scope
- Python의 Scope
    - local scope, local variable
    - global scope, global variable
- 변수의 lifecycle
    - built-in scope 파이썬 실행 이후 영원히 유지
    - global scope Module 호출부터 또는 Interpreter 종료까지 유지
    - local scope 함수 호출부터 종료까지 유지
- 이름 검색 규칙 (**LEGB** Rule)
    **L**ocal scope ⊂ **E**nclosed scope ⊂ **G**lobal scope ⊂ **B**uilt-in scope
- 함수에서 변수의 Scope
    - global 문
        ```python
        def func_name():
        	global number
        	number = 100
        print(number) #100
        ```
        1. number가 global 앞에 등장 불가
        2. number는 parameter, for 대상, class, function에 사용 불가
    - nonlocal 문
        ```python
        def func_first():
        	number = 100
        	def func_second():
        		nonlocal number
        		number = 200
        	print(number) #200
        ```
        1. number가 nonlocal 앞에 등장 불가
        2. number는 parameter, for 대상, class, function에 사용 불가
        3. 이미 존재하는 이름과의 연결만 가능

### 결과값 Output
- **Void function** → return 값이 없는 경우, None 반환
- **Value returning function** → return문으로 값 반환 (2개 이상일 경우, Tuple로 반환)
- Return VS Print
    ```python
    def func():
    	return('python')
    	#return을 만나면 함수 종료
    a = func(); print(a) #python
    print(func()) #python
    ```
    ```python
    def func():
    	print('python')
      #print를 하면 Console에 값이 찍힌다
    a = func(); print(a) #None
    func() #python
    ```

## 함수의 종류
### 내장 함수
- [Method of Datatype](method_of_datatype.md)
- [Built-in Function](built_in_function.md)

### 외장 함수
- [External Function](external_function.md)

### 사용자 정의 함수

## 함수의 응용

### map
- `map(function, iterable)`
- iterable에 fuction을 적용한 값을 map object로 반환

### filter
- `filter(function, iterable)`
- iterable를 fuction에 넣어 결과가 True일 경우만 filter object로 반환

### zip
- `zip(*iterables)` iterables는 원소 개수가 동일해야 한다.
- 여러 개의 iterable을 모아 tuple로 바꾼 뒤 zip object로 반환

### lambda
- `lambda 변수1, 변수2 : function code`
```python
plus = lambda a, b : a + b
print(plus(10,10)) #20
```

### 재귀 함수 (Recursion)
- 자신을 호출하는 함수 (ex. factorial, 피보나치 수열 등)
- **특징**
    - Python의 최대 재귀 깊이는 1,000번
    - 입력 값이 커지면, 연산 속도가 길어진다 → 사용 지양
- **예시**
    1. 피보나치 수열
        ```python
        def fib(n):
            if n < 2:
                return n
            else:
                return fib(n-1) + fib(n-2)
        ```

    2. 팩토리얼
        ```python
        def factorial(n):
            return n * factorial(n-1)
        
        ```

## Module

### 모듈과 패키지
- **Module** 다양한 기능을 하나의 파일(.py)로
    - `import module` `from module import *` `from module import functions`
    - 별명 붙여 사용 가능 `import module as md`
- **Package** 다양한 Module를 하나의 폴더로
    - `from package import module` `from package.module import functions`
    - `__init__.py` 이 있는 파일을 파이썬 패키지로 인식
- **Library** 다양한 Package를 하나의 묶음으로
    - `$ pip install Package` `$ pip uninstall Package` `$ pip install Package==1.04`
- **pip** Module, Package, Library를 관리
    - `$ pip list` 현재 사용하는 환경의 모든 패키지 목록
    - `$ pip show Package` Package에 대한 정보
    - `$ pip freeze > requirements.txt` 쓰고 있는 모든 패키지 목록과 버전
    - `$ pip install -r requirements.txt` 해당 txt에 있는 패키지를 버전대로 설치

### 가상환경
- 특정 폴더에 가상 환경을 만들어 패키지를 관리 및 사용
- 파이썬 버전에 따라 관리하기 위해 사용
- `$ python -m venv directory`

### 파이썬 표준 라이브러리
- 파이썬에 기본적으로 설치
- [PyPI.org](http://PyPI.org)
