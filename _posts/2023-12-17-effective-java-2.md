---
title: Effective Java 3장
tags: [Java]
style: fill
color: success
description: Effective Java 3장 모든 객체의 공통 메서드
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## [10] equals는 일반 규약을 지켜 재정의

> **논리적 동치성**  
> 참조 타입 변수에서 핵심값이 동일하다면 논리적으로 동일하다 판단  

> **물리적 동치성**  
> 메모리에 저장된 변수가 가지는 값이 동일한지 판단

### equals를 재정의하지 않는 것을 권장하는 상황
- 각 인스턴스가 본질적으로 고유
- 인스턴스의 논리적 동치성을 검사할 필요 없음
- 상위 클래스에서 재정의한 equals가 하위 클래스에도 적합
- 클래스가 private, package-private이고, equals 메서드를 호출할 일 없음

### equals를 재정의해야 하는 상황
- 논리적 동치성을 확인해야 하는데, equals가 논리적 동치성을 비교하도록 재정의되지 않은 경우
  - 같은 인스턴스가 2개 이상 만들어지지 않는 것을 보장하는 경우는 제외

### equals 메서드를 재정의할 때 지켜야 하는 일반 규약
null이 아닌 모든 참조값 x, y, z에 대해 아래 속성 성립
- **반사성**: x.equals(x) = true
- **대칭성**: x.equals(y) = true이면 y.equals(x) = true
- **추이성**: x.equals(y) = true이고 y.equals(z) = true이면, x.equals(z) = true
- **일관성**: x.equals(y)의 결과값이 항상 같다
- **null 아님**: x.equals(null) = false

### equals 구현 방법
- == 연산자로 자기 자신의 참조인지 확인
- instanceof로 입력이 올바른 타입인지 확인
- 입력을 올바른 타입으로 형변환
- 입력과 핵심 필드들이 모두 일치하는지 확인

### equals 구현 시, 주의사항
- equals를 재정의한다면, hashCode도 재정의한다
- 너무 복잡하게 해결해려 하지 않는다
- Object 외의 타입을 매개변수로 받지 않는다
- equals를 자동으로 생성해 주는 오픈소스 : AutoValue 프레임워크

## [11] equals 재정의 시, hashCode도 재정의
equals에서 두 객체가 같다고 판단했다면, 두 객체의 hashCode 값도 동일해야 한다.
그렇지 않다면, HashMap, HashSet 같은 컬렉션에서 논리적으로 동일한 2개의 Key에 대해 다른 Value를 갖게 된다.

### hashCode 작성 방법
- hashCode를 재귀적으로 호출
  - 각 필드의 hashCode를 호출해서 result = 31 * result + c에 따라 result를 갱신한다.
    ```java
    @Override 
    public int hashCode() { 
      int result = Short.hashCode(areaCode); 
      result = 31 * result + Short.hashCode(prefix); 
      result = 31 * result + Short.hashCode(lineNum); 
      return result;
    } 
    ```
    - 파생 필드(다른 필드로부터 계산되는 필드)는 무시 가능
    - equals 비교에 사용되지 않은 필드는 제외

- 정적 메소드 hash 사용  
  - Objects 클래스에서 제공하는, 객체를 받아 해시코드를 계산해주는 정적 메소드를 사용해 반환한다.
    ```java
    @Override
    public int hashCode() { 
      return Objects.hash(lineNum, prefix, areaCode); 
    } 
    ```
  - 단 한 줄로 작성 가능
  - 더 느린 속도 → 성능이 민감하지 않은 경우에만 사용

- 캐싱
  - 객체가 해시 키로 자주 사용된다면, 객체의 인스턴스가 만들어질 때 해시코드를 계산해둔다.
  - 객체가 해시 키로 사용되지 않는다면, 지연 초기화 전략을 사용한다.
  - 지연 초기화 전략
    ```java
    private int hashCode; // 자동으로 0으로 초기화된다. 
    @Override 
    public int hashCode() { 
      int result = hashCode; 
      if (result == 0) { 
        result = Short.hashCode(areaCode); 
        result = 31 * result + Short.hashCode(prefix); 
        result = 31 * result + Short.hashCode(lineNum); 
        hashCode = result; 
      } 
      return result; 
    } 
    ``` 

### hashCode 주의 사항
- 성능을 높이기 위해, 핵심 필드를 생략해 hashCode를 계산하면 안 된다
- hashCode 반환 규칙을 자세히 밝히지 않는다

## [12] toString을 항상 재정의
Object의 기본 toString은 단순히 **클래스_이름@16진수로_표시한_해시코드**를 반환한다.

### toString을 재정의해야 하는 이유
- toString의 규약은 "모든 하위 클래스에서 toString을 재정의하라"
- toString을 잘 구현한 클래스는 디버깅이 쉽다

### toString 재정의 방법
- toString은 객체가 가진 **주요 정보를 모두 반환**하는 것이 좋다
- 전화번호나 행렬 같은 값 클래스면, **반환값의 포맷을 문서화**하기 권한다
  - 장점 : 표준적이고 명확하고 사람이 읽기 편해진다
  - 단점 : 포맷을 변경하면 이전 코드와 데이터에 영향이 간다
- **포맷 명시 여부**를 명확히 밝힌다
- toString의 **반환 값에 포함된 정보를 얻을 수 있는 API**를 제공한다

### toString 재정의 필요 없는 경우
- 정적 유틸리티 클래스
- 열거 타입 (Java가 완벽한 toString 제공)

## [13] clone 재정의는 주의해서 진행하라
### Cloneable Interface의 역할
Object의 protected 메서드인 clone의 동작 방식을 결정한다.
- **Cloneable을 구현 클래스** clone 호출 시, 복사한 객체 반환
- **Cloneable 미구현 클래스** clone 호출 시, CloneNotSupportedException

실무에서 Cloneable을 구현한 클래스는 public clone 메서드로, 클래스 자신이 반환 타입이 되도록 제공.

### clone 재정의 방법
#### 가변 상태를 참조하지 않는 경우
모든 필드가 기본 타입이거나 불변 객체를 참조한다면 아래와 같이 구현한다.
```java
@Override 
public PhoneNumber clone() { 
  try { 
    return (PhoneNumber) super.clone(); 
  } catch (CloneNotSupportedException e) { 
    throw new AssertionError(); // 일어날 수 없는 일이다. 
  } 
} 
```

#### 가변 상태를 참조하는 경우
clone이 원본 객체에 영향이 없고, 복제된 객체의 불변식을 보장해야 한다.
가변 객체를 복사하는 방법은 아래와 같다.

- clone을 재귀적으로 호출
  ```java
  @Override 
  public Stack clone() { 
    try {
      Stack result = (Stack) super.clone(); 
      result.elements = elements.clone(); 
      return result; 
    } catch (CloneNotSupportedException e) { 
      throw new AssertionError(); 
    } 
  } 
  ```
- deepCopy를 지원해 가변 상태를 공유하는 clone을 보강
  - 예시 : 리스트를 구성하는 객체(가변 상태)를 복사하는 deepCopy 구현
- super.clone으로 필드를 초기 상태로 설정하고, 고수준 메서드를 호출
  - super.clone으로 배열을 초기화하고, 원본 필드에 있는 모든 값을 하나씩 넣어 내용을 동일하게 만든다

### clone 재정의 주의 사항
- public인 clone 메서드에서는 throws 절을 없애야 한다
- 상속용 클래스는 Cloneable을 구현해서는 안 된다
  - Object 방식 모방
  - clone이 동작하지 않도록 구현 → 하위 클래스에서 재정의 불가능
- Cloneable을 구현한 Thread-safe 클래스에서는 clone도 동기화해줘야 한다
- 복사 생성자와 복사 팩터리라는 객체 복사 방식으로 대체 가능
  - 인터페이스 타입의 인스턴스를 인수로 받을 수 있다
  - 불필요한 검사 예외를 던지지 않는다
  - 형변환이 필요 없다

## [14] Comparable을 구현할지 고려하라
Comparable의 구현체 인스턴스에는 순서가 존재한다. Comparable의 compareTo는 단순 동치성 비교 + 순서까지 비교 가능하다.

### compareTo 규약
1. A < B이면, B > A이다 (두 객체 참조의 순서를 바꿔 비교해도 예상한 결과가 나와야 한다)
2. A > B이고 B > C이면, A > C이다
3. A = B이고 B = C이면, A = C이다 (같은 객체들끼리는 어떤 객체와 비교해도 동일하다)

### equals와의 차이점
- compareTo의 인수 타입은 컴파일 시 정해진다
  - 인수 타입을 확인하거나 형 변환하는 과정 불필요
- 객체 참조 필드를 비교하기 위해 compareTo를 재귀적으로 호출
  - Comparator를 대신 사용 가능

### 여러 핵심 필드가 있는 경우
가장 중요한 필드부터 순차적으로 비교한다.

#### compare 메서드 활용
```java
public int compareTo(PhoneNumber pn) { 
  int result = Short.compare(areaCode, pn.areaCode); 
  if (result == 0) { 
    result = Short.compare(prefix, pn.prefix); 
    if (result == 0) result = Short.compare(lineNum, pn.lineNum); 
  } 
  return result; 
} 
```

#### Comparator 생성 메서드 활용
```java
private static final Comparator<PhoneNumber> COMPARATOR = comparingInt((PhoneNumber pn) -> pn.areaCode) 
  .thenComparingInt(pn -> pn.prefix) 
  .thenComparingInt(pn -> pn.lineNum); 

public int compareTo(PhoneNumber pn) { 
  return COMPARATOR.compare(this, pn); 
}
```