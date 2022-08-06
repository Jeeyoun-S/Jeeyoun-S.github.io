---
layout: page
title: Access Modifier
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### 접근 제한자 종류
- `public` 어디서나 접근 가능
- `protected` 같은 패키지에서만 접근 가능 (자식 클래스도 접근 가능)
- `default` 기본 설정, 같은 패키지만 접근 허용
- `private` 해당 클래스에서만 접근 허용

### 활용 제한자
- `static` 클래스 요소 설정
- `final` 최종 상태 → 요소 수정 불가능
    - *클래스 상속* 불가능, *메소드 overriding* 불가능, *변수 수정* 불가능
- `abstract` 추상 메서드, 클래스 작성 *(추상클래스 abstract class)*
    ```java
    public abstract class Smartphone {
    		public abstract void WatchOut();
    }
    ```
    - 상속 전용
    - 추상 클래스는 객체 생성 불가능
    - 자식 클래스가 반드시 추상 메소드를 구현하도록 만들기 위해 → 안정성 향상
- `interface` 완벽히 추상화된 객체
    ```java
    public interface NewName {}
    ```
    - 변수는 모두 상수, 메소드는 모두 추상 메소드
    - 상속 가능 `extends` , 개체 생성 불가능
    - `class class_name implements interface_name {}` 클래스가 인터페이스에 상속
    - 하위 클래스는 추상 메소드 Override 필수→ 구현의 강제

### 접근자, 설정자
```java
public class Hello {
		private String name;
		
		public String getter() {
				return name;
		}
		public void setter(String new_name) {
				this.name = new_name;
		}
}
```
- 접근할 수 없는 변수에 접근하기 위한 메서드

### Singleton Pattern
```java
public class Sneakers {
		private static Sneakers shoes = new Sneaker();
		private Sneakers() {}
		public static Sneakers getSneakers() {
				return shoes;
		}
}
```
- 객체의 인스턴스가 1개, 실제로 생성되는 객체가 1개
