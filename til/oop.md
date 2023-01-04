## 객체 지향 프로그래밍, Object Oriented Programming

### 개념
현실 세계를 프로그래밍으로 옮겨와 프로그래밍
현실 세계의 사물 = 객체, 객체로부터 개발하고자 하는 애플리케이션에 필요한 특징을 뽑아  프로그래밍

### 장점
1. 높은 코드 재사용성
    - 자주 사용되는 로직을 라이브러리로 만들어두면 계속해서 사용 가능
    - 코드에 대한 신뢰성 확보 가능
2. 버그 발생 감소
    - 라이브러리를 각종 예외상황에 맞게 만들어두면, 에러를 컴파일 단계에서 알아내기 가능
3. 높은 생산성
    - 개발자가 내부적으로 코드가 어떻게 동작하는지 몰라도, 라이브러리가 제공하는 기능 사용 가능
4. 쉬운 디버깅, 용이한 유지보수
    - 객체 단위로 코드가 나눠져 작성되기 때문
5. 요구사항을 명확하게 파악 가능
    - 데이터 모델링 시, 객체와 매핑하는 것이 수월

### 단점
1. 실행 시스템에 많은 overhead 발생
    - 객체 간의 정보 교환이 모두 메시지 교환을 통해 발생
    - 하드웨어의 발전으로 보완
2. 객체가 예측할 수 없는 상태를 갖게 돼 버그 발생
    - 변수가 존재하고, 변수를 통해 객체가 예측할 수 없는 상태를 갖게 됨
    - 함수형 패러다임이 주목받는 이유

### 설계 원칙
1. SRP
    - Single Responsibility Principle, 단일 책임 원칙
    - 클래스는 단 하나의 책임을 갖고, 클래스 변경 이유는 단 하나의 이유
2. OCP
    - Open-Closed Principle, 개방-폐쇄 원칙
    - 확장에는 열려 있고, 변경에는 닫혀 있어야 한다.
3. LSP
    - Liskov Substitution Principle, 리스코프 치환 원칙
    - 상위 타입의 객체를 하위 타입의 객체로 치환해도 상위 타입을 사용하는 프로그램은 정상적으로 동작
4. ISP
    - Interface Segregation Principle, 인터페이스 분리 원칙
    - 인터페이스는 사용하는 클라이언트를 기준으로 분리해야 한다.
5. DIP
    - Dependency Inversion Principle, 의존 역전 원칙
    - 고수준 모듈은 저수준 모듈의 구현에 의존해서는 안 된다.

## RESTful API

### RESTful 개념
1. REpresentational State Transfer + ~ful : ~한 API
2. REST의 기본 원칙을 성실히 지킨 서비스 디자인

### REST
1. 하나의 아키텍처, Resource Oriented Architecture
2. API 설계의 중심에 자원(Resource)이 있고, HTTP Method를 통해 자원을 처리하도록 설계

### REST 6가지 원칙
1. Uniform Interface
2. Stateless
3. Caching
4. Client-Server
5. Hierarchical System
6. Code on Demand

### RESTful API 디자인 방법
1. 자원(Resource)과 행위(Method)를 명시적이고, 직관적으로 분리
    - 자원 : URI로 표현 & 지시 대상은 *명사*로 표현
    - 행위 : HTTP Method로 표현 & GET, POST, PUT, PATCH, DELETE를 분명한 목적으로 사용
2. Message는 Header와 Body를 명확하게 분리해 사용
    - Body : Entity에 대한 내용
    - Header : 애플리케이션 서버가 행동할 판단의 근거가 되는 컨트롤 정보인 API 버전 정보, 응답받고자 하는 MIME 타입 등
    - Header와 Body는 Http Header와 Http Body로 나눌 수 있고, Http Body에 들어가는 json 구조로 분리도 가능
3.  API 버전 관리
    - 환경은 항상 변하기 때문에 API의 signature가 변경될 수도 있음에 유의
    - 특정 API를 변경할 때는 반드시 하위호환성 보장
4.  서버와 클라이언트가 같은 방식을 사용해 요청
    - 브라우저는 form-data 형식으로, 서버는 json 형식으로 보내는 식 지양
    - 둘 다, json으로 또는 form-data로 보내는 e걸로 통일하는 것을 지향

### 장점
1. Open API를 제공하기 쉽다.
2. 멀티플랫폼 지원 및 연동이 용이
3. 원하는 타입으로 데이터를 주고 받기 가능
4. 기존 웹 인프라(HTTP)를 그대로 사용 가능

### 단점
1. 사용 가능한 메소드가 4가지뿐
2. 분산 환경에는 부적합
3. HTTP 통신 모델에 대해서만 지원

## TDD

### 개념
- Test-Driven Development
- 매우 짧은 개발 사이클의 반복에 의존하는 소프트웨어 개발 프로세스
- 테스트를 통과하는 코드를 작성하고, 상황에 맞게 리팩토링하는 과정 거치는 방법
- 테스트가 코드 작성을 주도하는 개발 방식

### 특징
1. Add a test
    - 새로은 기능을 추가하기 전 테스트를 먼저 작성
    - 테스트를 작성하기 위해서는 기능의 요구사항과 명세에 대한 분명한 이해 필요
    - 코드 작성 전, 요구사항에 집중할 수 있도록 돕는 장점
2. Run all tests and see if new one fails
    - 새로운 기능이 제대로 작동함과 동시에 기존의 기능들이 잘 작동하는지 테스트를 통해 확인

## 함수형 프로그래밍

### immutable vs mutable
1. immutable :  객체가 가지고 있는 값을 변경 불가능
    - 값이 변경될 경우, 새로운 객체를 생성하고, 변경된 값을 주입해 반환
2. mutable : 객체의 값이 변경된 경우, 값을 변경

### first-class citizen
*함수(function) = 일급 객체(first-class citizen)로 간주*
1. 변수나 데이터 구조 안에 함수를 담을 수 있어서 함수의 파라미터로 전달할 수 있고, 함수의 반환값으로 사용 가능
2. 할당에 사용된 이름과 관계없이 고유한 구별이 가능
3. 함수를 리터럴로 바로 정의 가능

### Reactive Programming
- = 선언형 프로그래밍(Declarative Programming) <-> 명령형 프로그래밍(Imperative Programming)
- 함수형 프로그래밍 패러다임을 활용하는 것
- 모든 것을 stream으로 본다.
*(stream : 값들의 집합으로 볼 수 있으며, 제공되는 함수형 메소드를 통해 데이터를 immutable하게 관리 가능)*

## MVC Pattern

## Git과 GitHub
