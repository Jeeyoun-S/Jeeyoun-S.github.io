---
layout: page
title: LinkedList
sitemap: false
permalink: /study/data-structure/java/linkedlist/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 연결 리스트 LinkedList
- 개별 요소를 연결해 만든 자료구조
- 동적 할당 가능

### 용어
- node
   1. Data Field : node의 값, 원소의 값을 저장
   2. Link Field : 현재 node와 연결돼 있는 다른 node의 주소
- head : 첫 번째 시작 node
- tail : 마지막 node

## 단방향 연결 리스트 Singly Linked List
### node
```java
public class Node {
	public int value; // Data Field
	public Node next; // Link Field
    
	public Node(int value) {
		this value = value;
		this.next = null;
	}
}
private Node head; // 첫 번째 node
private int size;  // LinkedList의 크기
```

### 조회
```java
public static Node get(int idx) {
    
    // idx가 LinkedList의 범위를 벗어난 경우
	if (idx < 0 || idx >= size) return null;
    
    // head부터 시작해 idx번째 요소 찾기
	Node now = head;
	for (int i=0; i<idx; i++) now = now.next;
	return now;
}
```

### 삽입
```java
public static boolean add(int idx, int value) {
    
    // idx가 LinkedList의 범위를 벗어난 경우
    if (idx < 0 || idx > size) return false;
    
    // 삽입해 줄 새 node 생성
    Node newNode = new Node(value);
    
    if (idx == 0) {
        newNode.next = head;
        head = newNode;
    } else if (idx == size) {
        if (size == 0) head = newNode;
        else {
            Node lastNode = get(size-1);
            lastNode.next = newNode;
        }
    } else {
        Node beforeNode = get(idx-1);
        newNode.next = beforeNode.next;
	    beforeNode.next = newNode;
    }
    size++;
    
    return true;
}
```

### 삭제
```java
public static int delete(int idx) {
    
    // idx가 LinkedList의 범위를 벗어난 경우
    if (idx < 0 || idx >= size) return 0;
    
    Node targetNode = get(idx);
    
    if (idx == 0) {
        head = targetNode.next;
    } else if (idx == (size-1)) {
        Node beforeNode = get(idx-1);
        beforeNode.next = null;
    } else {
        Node beforeNode = get(idx-1);
        beforeNode.next = targetNode.next;
    }
    size--;
    
    return targetNode.value;
}
```

## 양방향 연결 리스트 Doubly Linked List
### node
```java
public class Node {
	public int value;
	public Node prev;
	public Node next;
    
	public Node(int value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}
private Node head; // 첫 node
private Node tail; // 마지막 node
private int size;  // LinkedList 크기
```

### 조회
```java
public static Node get(int idx) {
	
    // idx가 LinkedList의 범위를 벗어난 경우
	if (idx < 0 || idx >= size) return null;
    
	else if (idx > size/2) {
		Node now = tail;
		for (int i=size-1; i>idx; i--) now = now.prev;
        return now;
	} else {
		Node now = head;
		for (int i=0; i<idx; i++) now = now.next;
        return now;
	}
}
```

### 삽입
```java
public static boolean add(int idx, int value) {
    
    // idx가 LinkedList의 범위를 벗어난 경우
	if (idx < 0 || idx > size) return false;
    
    Node newNode = new Node(value);
    
	if (idx == 0) {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
    } else if (idx == size) {
        newNode.prev = tail;
        tail.next = newNode;
        tail = newNode;
    } else {
		Node beforeNode = get(idx-1);
        
		newNode.next = beforeNode.next;
		beforeNode.next.prev = newNode;
        
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
	}
    size++;
    return true;
}
```

### 삭제
```java
public int delete(int idx) {
    
    // idx가 LinkedList의 범위를 벗어난 경우
    if (idx < 0 || idx >= size) return 0;
    
    Node targetNode = get(idx);
    
	if (idx == 0) {
        head = targetNode.next;
        if (head != null) head.prev = null;
    } else if (idx == (size-1)) {
        tail = targetNode.prev;
        tail.next = null;
    } else {
		targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;
	}
	size--;
	return targetNode.value;
}
```

## LinkedList API
### 생성
```java
import java.util.LinkedList;

LinkedList<Integer> linkedList = new LinkedList<Integer>();
```

### 메서드
```java
linkedList.getFirst(); // head 값 조회
linkedList.getLast();  // tail 값 조회
linkedList.get(2);     // index 2 값 조회

linkedList.addFirst(); // 처음에 값 추가
linkedList.addLast();  // 마지막에 값 추가
linkedList.add(15);    // 마지막에 값 추가
linkedList.add(2, 15); // index 2에 값 추가

linkedList.removeFirst(); // head 값 삭제
linkedList.removeLast();  // tail 값 삭제
linkedList.remove();      // head 삭제
linkedList.remove(2);     // index 2 삭제

linkedList.clear();   // 전체 원소 삭제
```

## 참고
- [[JAVA] LinkedList의 개념 및 사용법](https://crazykim2.tistory.com/566)