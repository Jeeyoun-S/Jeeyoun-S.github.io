---
layout: page
title: Stack
sitemap: false
permalink: /aps/java/stack/
---

*update 2022.11.07 -create*

## Stack
- 주머니에 물건을 쌓은 형태
- 선형 자료구조 (Linear)
- 나중에 들어간 것이 먼저 나오는 구조
- LIFO : Last In First Out

### 연산
- `push` 원소 넣기
- `pop` 원소 빼기 및 반환
- `peek` 마지막에 들어간 원소 반환
- `isEmpty` Stack이 비어있으면 true, 아니면 false

## 구현
### Array
1. Stack 생성
```java
static int[] stack = new int[10]; // stack 크기를 10으로 고정
static int size = 0;              // stack에 있는 원소 수
```

2. isEmpty 구현
```java
static boolean isEmpty() {
  // 만약 stack에 있는 원소 수가 0이면 비어있는 상태
	return size == 0;
}
```

3. isFull 구현
```java
static boolean isFull() {
  // size가 배열의 크기와 같다면 꽉찬 상태
	return size == stack.length;
}
```

4. push 구현
```java
static void push(int val) {
  if (isFull()) { // 가득 차 있다면 배열 크기 늘리기
    int[] newStack = new int[stack.length+1];
    // 기존 배열에 있는 값 옮기기
    for (int i=0; i<stack.length; i++) {
      newStack[i] = stack[i];
    } stack = newStack;
  } 
  stack[size] = val; // 배열에 넣고
  size += 1;         // stack에 들어간 원소 수 + 1
}
```

5. pop 구현
```java
static int pop() {
		if (isEmpty()) { // stack이 비어있다면 -1 반환
			return -1;
		} else {
      size -= 1;             //크기 하나 줄이고
			int val = stack[size]; // 마지막 값 반환
			return val;
		}
}
```

### Stack API
1. Stack 생성
```java
import java.util.Stack;
Stack<Integer> stack = new Stack<>();
```

2. Stack 메서드
```java
stack.push(15);  // 15 삽입
stack.pop();     // 맨 위의 값 삭제 및 반환
stack.peek();    // 맨 위의 값 반환
stack.isEmpty(); // 스택이 비어있는지 확인
stack.size();    // 스택의 크기 반환
stack.clear();   // 스택을 비운다
```