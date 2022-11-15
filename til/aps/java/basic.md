---
layout: page
title: Basic
sitemap: false
permalink: /aps/java/basic/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

*update 2022.11.04 -create*

## Input
1. Scanner  
```java
Scanner sc = new Scanner(System.in);
sc.next();    // 다음 문자열 하나
sc.nextInt(); // 다음 정수 하나
sc.hasNext(); // 다음 입력값이 있는지 확인
```

2. BufferedReader  
```java
BufferedReader buffer = new BufferedReader(new InputStreamReader(System.in));
buffer.readLine();            // 문자열 입력 받기
buffer.readLine().split(" "); // 공백으로 구분돼 있는 경우
```

## Import
```java
import java.util.*;
import java.lang.*;
import java.io.*;
```