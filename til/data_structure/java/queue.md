---
layout: page
title: Queue
sitemap: false
permalink: /til/data_structure/java/queue/
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

## 선형 큐 Linear Queue
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
queue.add(15)    // 예외 발생
queue.offer(15)  // Null 반환
queue.remove()   // 예외 발생
queue.poll()     // Null 반환
queue.element()  // 예외 발생
queue.peek()     // Null 반환
```

## 원형 큐 Circular Queue
- 앞부분에 빈 자리를 재활용하지 못하는 선형 큐의 단점 보완
- 마지막 인덱스까지 자리가 차면, 첫 인덱스부터 다시 삽입

### 구현
1. Queue 생성
```java
static int[] circularQueue = new int[5];
static int front = 0;
static int rear = 0;
static int size = 0;
```
2. enQueue
```java
public static void enQueue(int value) {
  if (isFull()) return;
  
  circularQueue[rear] = value;
  rear = (rear+1)%circularQueue.length;
  size++;
}
```
3. deQueue
```java
public static int deQueue() {
  if (isEmpty()) return -1;
  
  int result = circularQueue[front];
  circularQueue[front] = 0;
  
  front = (front+1)%circularQueue.length;
  size--;
  return result;
}
```
4. isEmpty
```java
public static boolean isEmpty() {
  if (size == 0) return true;
  return false;
}
```
5. isFull
```java
public static boolean isFull() {
  if (size == circularQueue.length) return true;
  return false;
}
```

## 우선순위 큐 Priority Queue
### Array

### LinkedList

### Heap

### PriorityQueue API
1. PriorityQueue 생성
  ```java
  import java.util.PriorityQueue;
  import java.util.Collections;
  
  // 낮은 숫자 우선
  PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
  
  // 높은 숫자 우선
  PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());
  ```

2. PriorityQueue 메서드
  ```java
  priorityQueue.add(15)    // 예외 발생
  priorityQueue.offer(15)  // Null 반환
  
  priorityQueue.remove()   // 예외 발생
  priorityQueue.poll()     // Null 반환
  
  priorityQueue.element()  // 예외 발생
  priorityQueue.peek()     // Null 반환
  
  priorityQueue.clear()    // 초기화
  ```
