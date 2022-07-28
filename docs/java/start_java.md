---
layout: page
title: Start Java
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---

This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### I. 자바 가상 머신 (JVM, Java virtual machine)

- Java Byte Code를 실행할 수 있는 주체
    - `.java` → Compile → `.class` → JVM
    - Compile은 사람이 쓴 코드를 컴퓨터가 알 수 있게 바꿔주는 과정
- Java Byte Code는 Platform, 즉 OS에 독립적이나 JVM은 OS에 독립적이지 않다.
- Write once, run anywhere!
- **JRE** (Java runtime environment): JVM이 java 실행 시 필요한 것을 가지고 있다.
- **JDK** (Java development key): JRE와 개발에 필요한 도구를 가지고 있다.

### II. 자바 파일 실행 방법

1. java 코드 작성 후 `.java` 파일 생성하기
2. 명령 프롬프트에 `javac file_name.java` 실행 후 `.class` 파일 생성 확인하기
3. `java class_name` 으로 java 코드 실행해 보기

### III. main method

- `public static void main(String[] args){}`
- JAVA를 실행하면, 가장 먼저 실행되는 부분

### IV. 주석

- `//` 한 줄 주석 처리
- `/* */` 여러 줄 주석 처리
- `/** **/` Documentation API 작성

### V. 출력

- `System.out.print("Hello")` 출력 후 줄 바꿈을 하지 않은 상태
- `System.out.println("Hello")` 출력 후 줄 바꿈을 한 상태
- `System.out.printf("%d \n", 1)` % 지정값에 따라 출력해 주는 형태
    - %d 정수
        
        ```java
        System.out.prinf("%d \n", 1)   //1
        System.out.prinf("%4d \n", 1)  //   1
        System.out.prinf("%-4d \n", 1) //1   
        System.out.prinf("%04d \n", 1) //0001
        ```
        
    - %f 실수
        
        ```java
        System.out.prinf("%f \n", 0.12345)   //0.123450
        System.out.prinf("%.2f \n", 0.12345) //0.12 (반올림)
        ```
        
    - %s 문자열
    - %c 문자 1개
