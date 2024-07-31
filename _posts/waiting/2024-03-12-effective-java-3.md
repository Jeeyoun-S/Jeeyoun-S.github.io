---
title: Effective Java 4장
tags: [Java]
style: fill
color: success
description: Effective Java 4장 클래스와 인터페이스
published: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## [15] 클래스와 멤버의 접근 권한을 최소화
모든 클래스와 멤버의 접근성을 가능한 좁힌다.

> **API** (Application Programming Interface)  
> 프로그래밍에서 사용할 수 있도록 미리 준비된 인터페이스  

> **톱레벨 클래스**  
> 단일 형태의 클래스, 중첩 클래스가 아닌 클래스

### 톱레벨 클래스, 인터페이스 접근자
- public과 default(package-private) 사용 가능
- 외부에서 사용할 이유 없다면 default 추천 (내부 구현)
- public은 하위 호환을 위한 관리 필요 (API)
- 한 클래스에서만 사용되는 경우
  - 사용하는 클래스 내에 private static으로 중첩 권장
  - 내부 클래스로 선언 시, 외부 클래스에서만 접근 가능

### 멤버 변수 접근자
- private, default, protected, public 사용 가능
- 하위 클래스의 메서드는 상위 클래스 메서드보다 접근 수준 좁게 설정 불가능

### public 접근자
- public 클래스의 인스턴스 필드는 되도록 public이 안 되도록 처리
- public 가변 필드를 갖는 클래스는 일반적으로 스레드 불안전
- 클래스에서 public static final 배열 필드를 두거나 이 필드를 반환하는 접근자 메서드를 제공하지 않을 것

> 1) 클라이언트에서 수정할 수 있다면 보안의 허점이 존재하는 것.  
> 2) 클래스가 필드 값을 제한할 힘을 갖고 있어야 한다.  
> 3) 의도치 않게 API로 공개되는 경우를 막아야 한다.

## [16] public 클래스에서는 접근자 메서드 사용
- public 클래스에서는 private 필드와 Getter, Setter를 사용
  - API 변경 없이, 내부 표현 방식을 유연하게 바꾸기 위함
  - 불변 필드더라도 노출하지 않는 것을 더 추천
- package-private, private 중첩 클래스에서는 필드 노출 가능

## [17] 변경 가능성 최소화
### 불변 클래스 이점
- 인스턴스 내부 값 수정 불가
- 쉬운 설계와 구현
- 낮은 오류 발생 가능성
- 높은 안전성
  - 스레드 안전성을 보장해 동기화 불필요

### 불변 클래스 규칙
- 객체 상태 변경 메서드 X
- 클래스 확장 불가
- 모든 필드를 final로 선언
- 모든 필드를 private으로 선언
- 외부에서 내부 가변 컴포넌트에 접근 불가
  - 객체 참조가 아닌 방어적 복사를 수행하도록 개발

