---
layout: page
title: Start Java
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### Java를 배워야 하는 이유

### 컴퓨터의 자료표현
- **프로그램** : 컴퓨터에서 작업을 수행하는 명령어의 모음
- **운영체제** : 시스템 소프트웨어, 하드웨어 관리, 시스템 서비스 제공
- **Bit** : 0과 1을 표현하는 2진수 한 자리
- **Byte** : 8Bit = 1Byte, 1Byte는 2^8^가지의 정보 표현 가능

### JVM (Java virtual machine)
- Java Byte Code를 실행할 수 있는 주체
    - `.java` → Compile → `.class` → JVM
    - Compile은 사람이 쓴 코드를 컴퓨터가 알 수 있게 바꿔주는 과정
- Java Byte Code는 OS에 독립적이나 JVM은 OS에 독립적이지 않다.
- **JRE** (Java runtime environment): JVM이 java 실행 시 필요한 것을 가지고 있다.
- **JDK** (Java development kit): JRE와 개발에 필요한 도구를 가지고 있다.

### 자바 파일 실행 방법
1. java 코드 작성 후 `.java` 파일 생성하기
2. 명령 프롬프트에 `javac file_name.java` 실행 후 `.class` 파일 생성 확인하기
3. `java class_name` 으로 java 코드 실행해 보기

### Main Method
- Java를 실행하면, 가장 먼저 실행되는 부분
- `public static void main(String[] args){}`

### 주석
- `//` 한 줄 주석 처리
- `/* */` 여러 줄 주석 처리
- `/** **/` Documentation API 작성
