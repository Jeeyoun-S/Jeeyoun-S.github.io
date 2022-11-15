---
layout: page
title: Queue
sitemap: false
permalink: /aps/java/queue/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

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
```java
static int[] queue = new int[100]; // Queue로 쓰일 배열
static int firstIdx = -1;          // Queue의 첫 번째 원소의 인덱스
static int lastIdx = -1;           // Queue의 마지막 원소의 인덱스
```

2. enQueue 구현
```java
static void enQueue(int val) {
  if (isFull()) {  // Queue가 차 있다면 배열 크기 늘리기
    int[] newQueue = new int[queue.length + 1];
    for (int i=0; i<queue.length; i++) newQueue[i] = queue[i];
    queue = newQueue;
  }
  // 만약 비어있는 상태라면 첫 번째 원소 인덱스도 + 1
  if (isEmpty()) firstIdx++;
  lastIdx++;            // 마지막 원소 인덱스 + 1
  queue[lastIdx] = val; // 마지막 원소 인덱스에 값 저장
}
```

3. deQueue 구현
```java
static int deQueue() {
  // 배열이 비어있다면 -1 반환
  if (isEmpty()) return -1;
  // 그 외에는 firstIdx 값 반환
  int val = queue[firstIdx];
  // 값 제거 후 Queue가 빈다면 인덱스 초기화
  if (firstIdx == lastIdx) {
    firstIdx = -1;
    lastIdx = -1;
  } else firstIdx++;
  return val;
}
```

4. isEmpty 구현
```java
static boolean isEmpty() {
  if (firstIdx == -1 && lastIdx == -1) return true;
  return false;
}
```

5. isFull 구현
```java
static boolean isFull() {
  if (lastIdx == queue.length - 1) return true;
  return false;
}
```

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
### Array
### PriorityQueue API