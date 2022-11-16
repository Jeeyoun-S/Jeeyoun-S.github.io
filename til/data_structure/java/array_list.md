---
layout: page
title: ArrayList
sitemap: false
permalink: /til/data_structure/java/arraylist/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

*update 2022.11.16 -create*

## ArrayList
- Array와 달리 크기가 가변적으로 변화
- index는 0부터 시작

## 구현
### Array
1. 선언
```java
int[] arraylist = new int[100];
int size = 0;
```
2. 조회 (get)
```java
public int get(int index) {
    if (index < 0 || index >= size) return -1;
    return arraylist[index];
}
```
3. 삽입 (add)
```java
public void add(int index, int value) {
    if (index > size) index = size;
    
    if (size >= arraylist.length) {
        int[] newArraylist = new int[arraylist.length+1];
        for (int i=0; i<size; i++) newArraylist[i] = arraylist[i];
        arraylist = newArraylist;
    }
    
    for (int i=size-1; i>=index; i--) arraylist[i+1] = arraylist[i];
    arraylist[index] = value;
    size++;
}
```
4. 삭제 (remove)
```java
public int remove(int index) {
    int result = arraylist[index];
    
    for (int i=index+1; i<size; i++) arraylist[i-1] = arraylist[i];
    size--;
    return result;
}
```

### ArrayList API
1. 선언
```java
ArrayList<Integer> arraylist = new ArrayList<Integer>();
ArrayList<String> arraylist = new ArrayList<String>();
```

2. 메서드
- add
  - 값 추가
  - parameter : (index), value
  ```java
  // [ 5, 10, 15, 20 ]
  arraylist.add(25)    // [ 5, 10, 15, 25 ]
  arraylist.add(0, 1)  // [ 1, 5, 10, 15, 25 ]
  ```
- remove
  - 값 제거
  - parameter : index
  - Integer가 아닌 경우 parameter : value도 가능
  ```java
  arraylist.remove(1)   // [ 1, 10, 15, 25 ]
  ```
- get
  - index에 해당하는 값 조회
  - parameter : index
  ```java
  arraylist.get(0)      // 1
  ```
- indexOf
  - 값이 있는 index 조회
  - parameter : value
  ```java
  arraylist.indexOf(10) // 1
  ```
- size
  - 배열의 크기 조회
  ```java
  arraylist.size()      // 4
  ```
- contains
  - 배열 내 값이 있는지 조회
  - parameter : value
  ```java
  arraylist.contains(10) // true
  ```