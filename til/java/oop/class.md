---
layout: page
title: Class
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 클래스
- 변수와 메소드로 이뤄진 사용자 정의 자료형
- 객체(인스턴스)를 생성하는 틀

### 생성
```java
class Hello {                                   // 클래스 생성
	public void study() {
		System.out.println("Hello 클래스가 생성됐습니다.");
	}
}

public class JavaFileName{
	public static void main(String[] args){
		Hello hi = new Hello();                     // 인스턴스 생성
	}
}
```
- 속성 - 필드, 동작 - 메소드, 생성자
- `[접근제한자] [활용제한자] class class_name {}`
    - 접근제한자 public, default
    - 활용제한자 final, abstract

### 변수
```java
public class Hello {
	int age;                // 인스턴스 변수
	static int birthyear;   // 클래스 변수

	void info() {
		int birthday;   // 지역 변수 
	}
}
```
- class variable
    - 클래스 영역 선언 (static)
    - 클래스가 메모리에 올라갔을 때 생성
    - 모든 인스턴스 공유
- instance variable
    - 클래스 영역 선언
    - 인스턴스가 생성됐을 때 생성
    - 인스턴스 별로 생성
- local variable
    - 클래스 영역 이외
    - 변수가 선언됐을 때 생성

### 메소드
```java
public class Hello {
	public void info(String name) {              // 메서드 선언, name은 매개변수(Parameter)
		System.out.println("저는"+name+"입니다");
	}
	public static void hi() {                    // 클래스 메서드 선언
		System.out.println("반갑습니다");
	}
	public int your_age() {
		return age;
	}
}
Hello morning = new Hello();
morning.info("Gildong");                      // 메서드 호출, Gildong은 인자(Argument)

Hello.hi();                                   // 클래스 메서드 호출

morning.age = 20;
int realage = morning.your_age();
```
- `[접근제한자] [활용제한자] return_type method_name([매개변수들]) {}`
    - 접근제한자 public, protected, default, private
    - 활용제한자 static, final, abstract, synchronized
- Return type
    - 선언 시 하나만 지정 가능, 없다면 void
- **Method Overloading**
    - 이름이 같고 매개변수가 다른 메소드 정의
    - 개수, 순서, 타입 다르게 지정

## 생성자
- 인스턴스 생성 시 실행되는 함수
- 클래스명과 생성자 이름은 동일하게 설정
- 반환타입 부재
- PascalCase로 작성

### 기본 생성자 default
```java
public class Hello {
	//public Hello() { }  매개변수가 없는 형태
}
Hello introduce = new Hello();
```
- 클래스 내 생성자가 없으면 JVM이 자동으로 제공

### 파라미터가 있는 생성자
```java
public class Bye {
	public Bye(String name) {
		my_name = name;
	}
}
Bye goodbye = new Bye("Gildong");
```

### 생성자 Overloading
```java
public class Greeting {
	Greeting() {}
	Greeting(String name) {}
	Greeting(String name, int age) {}
}

Greeting me = new Greeting();
Greeting you = new Greeting("Gildong");
Greeting we = new Greeting("Gildong", 20);
```

### this
- `this.variable_name`
    ```java
    public class Greeting {
    	String name;
    	int age;
        Greeting(String name, int age) {
    		  this.name = name;
    		  this.age = age;
    	}
    }
    ```
- `this([인자값..])`
    ```java
    public class Greeting {
    	String name;
    	int age;
	Greeting() {
		this("Gildong", 20);
	}
        Greeting(String name, int age) {
	}
    }
    ```
- 생성자 내에서만 호출 가능, 첫 번째에 위치