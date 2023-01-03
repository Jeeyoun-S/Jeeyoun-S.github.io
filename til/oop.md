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
3.  
