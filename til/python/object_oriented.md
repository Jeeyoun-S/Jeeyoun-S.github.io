---
layout: page
title: Object-Oriented
hide_description: true
sitemap: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 프로그램을 독립된 객체들과 객체 간의 상호작용으로 파악하는 방법
- 코드의 직관성, 활용의 용이성, 변경의 유연성
- 장단점
  - **장점** : 대규모 소프트웨어 개발에 적합, 쉬운 유지보수
  - **단점** : 느린 실행 속도, 많은 노력과 시간 필요

## 기초 문법

```python
class Example:                #클래스 정의
	num = 0                     #클래스 변수
	say = "hi"                  #클래스 변수

	def __init__(self, today_date):
		self.today = today_date   #인스턴스 변수

	def Hello():
		print("Hello, Everyone")

date = Example("22-07-26")    #인스턴스 생성
date.Hello()                  #메서드 호출 "Hello, Everyone"

print(date.today)             #인스턴스 변수, '22-07-26'
print(Example.num)            #클래스 변수, 0
```

### 객체 Object

- 객체는 특정 타입의 인스턴스 → 속성과 행동으로 구성된 모든 것
- 속성(변수), 행동(메서드)
- **비교**: `==` 내용이 같은 경우, `is` 동일한 객체인 경우

### 인스턴스 Instance

- 클래스로 만든 객체 → 특정 클래스의 인스턴스

### 클래스 Class

- 객체들의 분류
- Class 이름은 되도록 대문자로 설정
    - snake case `my_name_what`
    - camel casse `myNameWhat`
    - pascal case `MyNameWhat`

### 이름 공간 Namespace

```python
class Sneakers:
	shoes = "Buy"
	def size(self):
		print(self.shoes)

person1 = Sneakers()
person2 = Sneakers()

person1.shoes = "Already bought"

print(person1.shoes)    #Already bought
print(person2.shoes)    #Buy
print(Sneakers.shoes)   #Buy
```

## Method

```python
class ThreeType:
	def instanceme(self):
		print("instance")

	@classmethod
	def classme(cls):
		print("class")

	@staticmethod
	def staticme():
		print("static")

ThreeType.instanceme()
ThreeType.classme()
ThreeType.staticme()

sample = ThreeType()

sample.instanceme()
sample.classme()
sample.staticme()
```

### Instance Method
- 첫 번째 인자 self

1. **Constructor Method** 생성자
    
    ```python
    class Sneakers:
    	def __init__(self, first, second):
    		self.num1 = first
    		self.num2 = second
    		print(self.num1, self.num2)
    
    shoes = Sneakers(230, 280) #230, 280
    ```
    
    - 정의 `__init__(self[, other])`
    - 인스턴스 객체가 생성될 때 자동으로 호출
2. **Special or Magic Method** 
    - `__add__(self)`
    - `__str__(self)`
        
        ```python
        class Sneakers:
        	def __str__(self):
        		return "안녕하세요"
        
        print(Sneakers()) #안녕하세요
        ```
        
    - `__repr__(self)`
        
        ```python
        class Sneakers:
        	def ShoesData(self, size1):
        		self.num1 = size1
        
        	def __repr__(self):
        		return self.num1
        
        shoes = Sneakers(); shoes.ShoesData('230', '280')
        print(shoes)  #'280'
        ```
        
        - 문자열만 return 가능, 다른 자료형 return 시 `TypeError`
    - `__cmp__(self)`
    - `__len__(self)`
    - `__lt__(self, other)`
    - `__le__(self, other)`
    - `__eq__(self, other)`
        
        ```python
        class Sneakers:
        	def __eq__(self):
        		return "안녕하세요"
        
        print(Sneakers()) #안녕하세요
        ```
        
    - `__gt__(self, other)` 부등호 연산자 >, greater than
    - `__ge__(self, other)`
    - `__ne__(self, other)`
3. **Destructor Method** 소멸자
    
    ```python
    class What:
    	def __del__(self):
    		print("클래스를 소멸시킵니다.")
    
    Umn = What()
    del Umn      #클래스를 소멸시킵니다.
    print(Umn)   #NameError: name 'Umn' is not defined
    ```
    
    - 정의 `__del__(self)`
    - 호출 `del instance_name`

### Class Method `@classmethod`
- 첫 번째 인자 cls

```python
class Sneakers:

	@classmethod
	def classmethod_name(cls):
		print("Umn")

Sneakers.classmethod_name() #Umn
```

### Static Method `@staticmethod`
- 인스턴스 변수 및 클래스 변수를 다루지 않는 메서드

```python
class Sneakers:

	@staticmethod
	def staticmethod_name(size):
		print(size)

Sneakers.staticmethod_name(230) #230

shoes = Sneaker()
shoes.staticmethod_name(250)    #250
```

### Decorator `@` :star:
- 함수를 어떤 함수로 꾸며서, 꾸민 함수를 리턴하는 함수

```python
def Hello(options):
	print("Hi")
	options()
	print("Bye")

@Hello
def Introduce():
	print("My name is ~")

#Hi\nMy name is ~\nBye

```

```python
def Hello(options):
	def Text():
		print("Hi")
		options()
		print("Bye")
	return Text

@Hello
def Introduce():
	print("My name is ~")

Introduce() #Hi\nMy name is ~\nBye
```

## 핵심 개념

### 추상화

- 복잡한 것 = 숨기기, 필요한 것 = 드러내기
- 공통점을 속성, 클래스로 나타낸다.

### 상속 Inheritance

```python
class SmartPhone:
	name = "smartphone name is"
	def say(self):
		print("hello")

class Application(SmartPhone): #Application에 SmartPhone 상속
	def user(self):
		print("good")

zflip = Application()
zflip.user()           #hello
print(zflip.name)      #smartphone name is
```

- 코드 재사용 가능하게 해 유용
- **관련 Method**
    - `isinstance(*object*, class_name)` object가 class_name의 instance 또는 subclass인지
    - `issubclass(*object*, class_name)` object가 class_name의 subclass인지
        
        → class_name은 튜플도 가능, 튜플이라면 모든 요소를 검사
        
        `issubclass(bool, int) #True`
        
    - `super()` 자식 class에서 부모 class를 사용할 때
        
        ```python
        class 
        ```
        
    - `class_name.mro()` class_name의 부모 클래스 확인
- **다중 상속**
    - 상속 받은 여러 클래스의 요소를 모두 활용할 수 있다.
    - 중복된 메서드가 존재할 경우, 상속된 순서에 따라 결정된다.

### 다형성 Polymorphism

- 동일한 메서드가 클래스에 따라 다르게 동작
- 부모 클래스의 메서드 이름은 그대로 특정 기능을 바꾸고 싶을 때 활용

- **Overriding**
    - 부모 클래스의 메서드 `MethodName` , 자식 클래스의 메서드 `MethodName`
    - 자식 클래스에서 부모 클래스 실행 시 `super().method()`
- **Overloading**
    - 
    - 이름이 같은 것을

### 캡슐화

- **Public Member**
    - 언더바 없이 시작
    - 어디서나 호출 가능
    - 하위 클래스 override 허용
- **Protected Access Modifier**
    - 언더바 1개로 시작
    - 부모 클래스 내부와 자식 클래스에서만 호출 가능
    - 하위 클래스 override 허용
- **Private Access Modifier**
    - 언더바 2개로 시작
    - 하위 클래스 상속 및 외부 호출 불가능
    - 본 클래스 내부에서만 사용 가능
- **getter & setter**
    - getter 변수 값 읽기 `@property`
    - setter 변수 값 설정 `@변수명.setter`

## 객체 속의 객체

```python
class SmartPhone:
	app_list = []
	def app(self, thing):
		self.app_list.append(thing)

class Application:
	pass

zflip = SmartPhone()
naver = Application()
google = Application()

zflip.app(naver)
zflip.app(google)
print(zflip.app_list) #[<__main__.Application object at 0x000002C5E2807760>, <__main__.Application object at 0x000002C5E2807CD0>]
```

## 참고 자료

- [https://wikidocs.net/89](https://wikidocs.net/89)
- [https://www.daleseo.com/python-property/](https://www.daleseo.com/python-property/)