
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

## MVC Pattern

## Git과 GitHub
