---
layout: page
title: Input & Print
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Input 입력
### Scanner
```java
import java.util.Scanner;

public class Hello {
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		sc.next()
	}
}
```
- `nextDatatype()` 자료형에 맞는 값을 받는다. (예시 : `nextInt()`)
- `nextLine()` 한 줄을 받아온다. 앞에 남아있는 개행문자도 받아온다.
- `next()` 공백을 기준으로 한 단어를 받아온다.
- `hasNext()` 다음에 가져올 값이 있으면 True, 아니면 False
### Buffered

## Print 출력
### System.out
```java
public class Hello {
	public static void main(String[] args){
		System.out.println("Hello Java");
	}
}
```
- `System.out.print("Hello")` 출력 후 줄 바꿈을 하지 않은 상태
- `System.out.println("Hello")` 출력 후 줄 바꿈을 한 상태
- `System.out.printf("%d \n", 1)` % 지정값에 따라 출력해 주는 형태
    - %d 정수
        ```java
        System.out.printf("%d \n", 1);   //1
        System.out.printf("%4d \n", 1);  //   1
        System.out.printf("%-4d \n", 1); //1   
        System.out.printf("%04d \n", 1); //0001
        ```
    - %f 실수
        ```java
        System.out.printf("%f \n", 0.123);     //0.123000
        System.out.printf("%.2f \n", 0.12345); //0.12 (반올림)
        ```
    - %s 문자열
    - %c 문자 1개
