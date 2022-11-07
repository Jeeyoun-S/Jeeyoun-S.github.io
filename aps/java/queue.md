---
layout: page
title: Queue
sitemap: false
permalink: /aps/java/queue/
---

*update 2022.11.07 -create*

## Queue
- 빨대에 버블티 펄을 넣는 형태
- 선형 자료구조 (Linear)
- 먼저 들어간 것이 먼저 나오는 구조
- FIFO : First In First Out

### 연산
- `createQueue` 빈 큐 생성
- `enQueue` 원소 넣기
- `deQueue` 원소 빼기 및 반환
- `Qpeek` 가장 먼저 들어간 원소 반환
- `isEmpty` 큐가 비어있으면 true, 아니면 false
- `isFull` 큐가 가득 차 있으면 true, 아니면 false

## 선형 Queue
### Array
1. Queue 생성
2. enQueue 구현
3. deQueue 구현
4. isEmpty 구현
5. isFull 구현

### Queue API
1. Queue 생성
```java
import java.util.LinkedList;
import java.util.Queue;
Queue<Integer> queue = new LinkedList<>();
```

2. Queue 메서드
```java
queue.add(15)    //예외 발생
queue.offer(15)  //Null 반환
queue.remove()   //예외 발생
queue.poll()     //Null 반환
queue.element()  //예외 발생
queue.peek()     //Null 반환
```

## 원형 Queue

## 우선순위 Queue