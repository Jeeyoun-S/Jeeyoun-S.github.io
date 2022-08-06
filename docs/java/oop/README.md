---
layout: page
title: Object Oriented Programming
description: >
  Here you should be able to find everything you need to know to accomplish the most common tasks when blogging with Hydejack.
hide_description: true
sitemap: false
permalink: /docs/java/oop/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 프로그램을 객체라는 기본 단위로 나누고, 객체 간의 상호작용으로 바라보는 방식
- 객체는 변수와 메소드의 

## 4가지 특징
### 추상화 Abstraction

### 다형성 Polymorphism
```java
public class SmartPhone {
		int releasedate;
		String codenumber;
}
public class GalaxyS21 extends SmartPhone {
		void buy(SmartPhone sp) {
				when = sp.releasedate;
				model = sp.codenumber;
		}
}

SmartPhone model = new GalaxyS21();       //1

SmartPhone[] model = new SmartPhone[2];   //2
model[0] = new SmartPhone();
model[1] = new Galaxy();
```
1. 상속 관계에 있을 때 부모 클래스 타입으로 자식 클래스 객체 참조 가능
2. 부모 클래스를 자식 클래스의 파라미터로 전달
- 참조 변수에 따른 연결
    - 상속 관계에서 변수 중복 → 참조 변수 타입에 따라
        - `SmartPhone model = new GalaxyS21();` 라면 SmartPhone의 변수
        - `GalaxyS21`에 해당 변수가 정의돼 있지 않다면 부모 변수 사용
    - 상속 관계에서 메서드 중복 → 자식 클래스 메서드 호출

### 상속 Inheritance
```java
public class SmartPhone {
		String number;
		public void buy() {
				System.out.println("I Buy Smartphone!");
		}
}

public class GalaxyS21 extends SmartPhone {
		String price;
		public void sell() {
				super(number);
				super.buy();
				System.out.println("I Sell GalaxyS21!");
		}
}
```
- 확장성, 재사용성
- 부모 클래스의 생성자와 초기화 블록은 상속되지 않는다.
- 다중 상속 불가
- `super()` 로 부모 클래스 변수 및 메서드 호출
- **Overriding** `@Override`
    - 상위 클래스에 선언된 메서드를 자식 클래스에서 재정의
    - 메서드 이름, 반환형, 매개변수, 타입, 개수 , 순서 동일하게 재정의
    - 접근 제어자 범위 : 하위 클래스 ≥ 상위 클래스
    - 예시
        - `v1.toString()` 문자열로 변경
        - `v1.equals(v2)` 두 객체의 내용이 같은지 비교
        - `hashCode`   ******************************
- **Object Class**
    - 모든 클래스의 조상
    - 별도로 상속 받지 않더라도 `extends Object` 가 생략돼 있다.

### 캡슐화 Encapsulation
- 개체의 속과 행위를 하나로 묶고, 일부를 숨긴다.
