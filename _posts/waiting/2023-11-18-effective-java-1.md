---
title: Effective Java 2장
tags: [Java]
style: fill
color: success
description: Effective Java 2장 객체 생성과 파괴
published: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## [01] 생성자 대신, 정적 팩터리 메서드
### 정적 팩터리 메서드의 장점
- 함수명 지정 가능
  - 생성자와 매개변수만으로는 객체의 특성을 설명하기 어려움
  - 정적 팩터리 메서드는 이름으로 객체의 특성 묘사 가능
- 호출될 때마다 새 인스턴스 생성 필수X
  - 불변 클래스의 경우, 인스턴스를 만들어두거나 캐싱해 재활용 가능

> **플라이웨이트 패턴**  
> 인스턴스를 가능한 공유해서 메모리를 절약하는 패턴

- 반환 타입의 하위 타입 반환 가능
  - 반환할 객체의 클래스를 자유롭게 선택하는 유연성
- 입력 매개변수에 따라 매번 다른 클래스의 객체 반환 가능
  - 반환 타입의 하위 타입이면, 어떤 클래스의 객체든 반환 가능
  - 예시 : EnumSet
- 정적 팩터리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 부재해도 된다  

### 정적 팩터리 메서드의 단점
- public이나 protected 생성자 없이, 정적 팩터리 메서드만 제공하면 하위 클래스 생성 가능
  - 상속보다 컴포지션을 사용하도록 유도

> **Composition(컴포지션)**  
> 새로운 클래스 내의 필드값으로 기존 클래스의 인스턴스를 참조하는 식으로 기능을 확장. 상속 대신 사용하는 방식.  

- 프로그래머가 찾기 어려움
  - API 설명에 명확히 드러나지 않음
  - API 문서를 잘 작성하고 규약에 따라 메서드 이름을 작성해 보완 가능

### 정적 팩터리 메서드의 명명 방식

|      메서드 이름       | 설명                                                         | 비고 |
| :--------------------: | ------------------------------------------------------------ |
|          from          | 매개변수 1개, 해당 타입의 인스턴스 반환                      |
|           of           | 매개변수 여러 개, 적합한 타입의 인스턴스 반환 (집계 메서드)  |
|        valueOf         | from, of의 더 자세한 버전                                    |
| instance / getInstance | 매개변수에 명시한 인스턴스 반환                              |
|  create / newInstance  | getInstance와 동일하지만, 매번 새로운 인스턴스 반환          |
|        getType         | 다른 클래스의 팩터리 메서드를 정의 (Type : 반환할 객체 타입) |
|        newType         | getType과 동일하지만, 매번 새로운 인스턴스 반환              |
|          type          | getType과 newType의 간결한 버전                              |

## [02] 생성자에 매개변수가 많다면, 빌더
선택적 매개변수가 많은 경우, 사용하는 3가지 방법

### 점층적 생성자 패턴
매개변수의 개수만큼 생성자를 생성
- 단점
  - 설정하길 원치 않는 매개변수도 값을 지정 필수
  - 매개변수 개수가 많아지면, 떨어지는 생산성과 가독성

### 자바빈즈 패턴
매개변수가 없는 생성자로 객체를 만들고, Setter로 값 설정
- 단점
  - 객체 하나를 만들기 위해 여러 개의 메서드를 호출
  - 무너진 일관성 → 클래스를 불변으로 만들기 불가능

### 빌더 패턴
- 장점
  - 높은 생산성, 가독성, 유연성
  - 계층적으로 설계된 클래스와 사용하기 좋다
  - 가변인수 매개변수를 여러 개 사용 가능
- 단점
  - 빌더를 만들어야 한다
  - 장황한 코드로 매개변수가 4개 이상일 때 값어치가 있다

## [03] private 생성자나 열거 타입으로, 싱글턴 보증
싱글턴을 만드는 3가지 방법

### public static final 필드  
생성자는 private으로 감추고, public static 멤버를 하나 만든다.
```java
public class Elvis {
  // private 생성자는 아래에서 한 번 호출된다. 
  private static final Elvis INSTANCE = new Elvis(); 
  private Elvis() { } 
} 
```
1. API에서 싱글턴임이 명백히 드러난다
2. 간결하다
3. 직렬화를 위해 Serializable 외에 추가적인 구현이 필요하다

### public static 정적 팩터리 메서드
```java
public class Elvis { 
  private static final Elvis INSTANCE = new Elvis(); 
  private Elvis() { };
  public static Elvis getInstance() {
    return INSTANCE; 
  };
} 
```
1. API를 바꾸지 않고도 싱글턴이 아니게 변경할 수 있다
2. 정적 팩터리를 제네릭 싱글턴 팩터리로 만들 수 있다
3. 정적 팩터리의 메서드 참조를 공급자로 사용할 수 있다
4. 직렬화를 위해 Serializable 외에 추가적인 구현이 필요하다

### 원소가 하나인 열거 타입
```java
public enum Elvis { 
  INSTANCE; 
} 
```
1. 가장 간결하다
2. 추가 구현 없이 직렬화 가능
3. Enum 외의 클래스를 상속해야 한다면 사용할 수 없다

## [04] 인스턴스화를 방지한다면, private 생성자 사용
추상 클래스로 만드는 것으로 인스턴스화를 막을 수 없다. 생성자를 명시하지 않으면, 컴파일러가 자동으로 기본 생성자를 만들어 주기 때문이다.
**private 생성자를 추가하면 클래스의 인스턴스화를 막을 수 있다.**

- 명시적 생성자가 private이니 클래스 바깥에서 접근 불가능
- private 생성자에서 에러를 던지면, 클래스 내부에서 생성자 호출도 방지
- 상속 불가능 (상위 클래스의 생성자에 접근 불가능)

## [05] 자원을 직접 명시하지 말고, 의존 객체 주입을 사용
클래스가 하나 이상의 자원에 의존할 때 구현 방법

> **정적 유틸리티 클래스**  
> static method와 static field만 담은 클래스

### 정적 유틸리티
```java
public class SpellChecker {
  private static final Lexicon dictionary = ...;
  private SpellChecker() {};
}
```
- 낮은 유연성
- 테스트가 어려움

### 싱글턴
```java
public class SpellChecker {
  private final Lexicon dictionary = ...;
  private SpellChecker(...) {};
  public static SpellChecker INSTANCE = new SpellChecker(...);
}
```
- 낮은 유연성
- 테스트가 어려움

### 의존 객체 주입
```java
public class SpellChecker {
  private final Lexicon dictionary;
  // 인스턴스를 생성할 때 생성자에 필요한 자원을 넘겨주는 방식
  public SpellChecker(Lexicon dictionary) {
    this.dictionary = Object.requireNonNull(dictionary);
  };
}
```
- 불변을 보장 → 여러 클라이언트가 의존 객체를 안전하게 공유 가능
- 생성자, 정적 팩터리, 빌더 모두에 응용 가능
- 의존성이 수천 개가 되는 프로젝트에서는 코드가 복잡해 진다

## [06] 불필요한 객체 생성 피하기
똑같은 기능의 객체를 매번 생성하기보다 **하나의 객체를 재사용하는 것을 나은 경우가 존재**한다.
아래 예시에서는 문자열이 유효한 숫자인지 확인하는 메서드가 작성돼 있다. 이 메서드의 경우, 내부에서 **Pattern 인스턴스를 만들어 사용하고 곧바로 버린다.**
```java
static boolean isRomanNumeralSlow(String s) { 
  return s.matches("^(?=.)M*(C[MD]|D?C{0,3})" + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$"); 
} 
```

아래 코드는 **Pattern 인스턴스를 직접 생성해 캐싱해 두고 사용**한다. isRomanNumeral가 빈번히 사용될 경우 앞선 코드보다 성능이 개선된다.
```java
private static final Pattern ROMAN = Pattern.compile(
  "^(?=.)M*(C[MD]|D?C{0,3})" + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$"
); 
static boolean isRomanNumeralFast(String s) { 
  return ROMAN.matcher(s).matches(); 
} 
```

- 이 외에 불필요한 객체를 만들어 낼 필요가 없는 경우
  - 의도하지 않은 오토박싱으로 많은 인스턴스 생성
  - Map 인터페이스의 keySet 메서드

> 항상 객체를 새로 생성하는 것을 피해야 하는 것은 아니고, 아주 무겁지 않으면 객체 풀을 만들 필요가 없다. 복사가 필요한 상황에 객체를 재사용했을 때는 버그, 보안 구멍 등의 문제가 발생할 수 있으나, 불필요한 객체를 생성하는 것은 코드의 형태와 성능에만 영향을 미친다는 점을 명심해야 한다.

## [07] 다 쓴 객체 참조 해제
객체 참조 하나를 살려두면, 가비지 컬렉터는 객체가 참조하는 모든 객체를 회수하지 못한다. 따라서 메모리 누수로 인해 잠재적으로 성능에 악영향이 있을 수 있다.
해당 참조를 다 쓰면 **null 처리하면 참조를 해제**할 수 있다. 다만, null 처리를 하는 일은 예외적인 경우여야 한다.

- 메모리를 직접 관리하는 클래스
- 캐시
- 리스너 혹은 콜백

## [08] finalizer와 cleaner 사용 피하기
Java는 finalizer, cleaner 객체 소멸자를 제공한다.

- **finalizer**  
  예측할 수 없고 상황에 따라 위험할 수도 있어 일반적으로 불필요하다. 기본적으로 쓰지 말아야 한다.

- **cleaner**   
  finalizer의 대안으로 제시됐다. finalizer보다는 덜 위험하지만, 예측할 수 없고 느리고 일반적으로 불필요하다.

### finalizer와 cleaner 피해야 하는 이유
- 상태를 영구적으로 수정하는 작업에서 사용 금지
  - 실행 시점을 보장 불가
  - 실행 여부를 보장 불가
- 심각한 성능 문제를 동반
  - 가비지 컬렉터의 효율을 떨어뜨린다.
- finalizer 공격에 노출돼 보안 문제 발생 가능성 존재
  - 생성자나 직렬화 과정에서 예외 발생 시, 악의적인 하위 클래스의 finalizer가 실행 가능해 허용되지 않은 작업 수행
  - final이 아닌 클래스에 아무것도 하지 않는 final finalizer를 만들어 공격 방어

### 종료해야 할 자원을 담고 있는 경우, 대안책
- AutoCloseable 구현
  - 인스턴스를 다 쓰고 나면 close 메서드 호출

### finalizer와 cleaner의 쓰임
- close 메서드를 호출하지 않는 경우에 대한 안전망
- 네이티브 피어와 연결된 객체의 회수

## [09] try-finally보다는 try-with-resources를 사용하라
**try-finally**은 아래와 같은 문제가 있다.
- 자원이 2개 이상이라면 코드가 지저분하다
- 예외 처리 시, 디버깅이 어려워지는 경우가 있다

Java 7 이후부터는 **try-with-resources**를 사용할 수 있다. 자원이 AutoCloseable 인터페이스를 구현해야 한다.
- 짧고 읽기 수월하다
- 예외를 파악하기도 좋다