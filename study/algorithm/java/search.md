---
layout: page
title: Search
sitemap: false
permalink: /til/algorithm/java/search/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

*update 2022.11.04 -create*

## 검색 Search
- 원하는 항목을 찾는 작업
- 탐색 키 Search key

## 순차 탐색 Sequential Search
- 일렬로 돼 있는 자료를 순서대로 검색
- 간단 & 직관
- 시간복잡도 **O(n)**

### 구현
1. Ordered List *(ASC)*  
```java
// 순차 검색
// 찾으면 true 반환, 찾는 값보다 비교값이 커지면 false 반환
static int[] numlist = {1, 2, 3, 4, 5, 6, 7};
// For문 사용
static boolean searchForSort(int key) {
  for (int i : numlist) {
    if (i == key) return true;
    else if (i > key) break;
  } return false;
}
// While문 사용
static boolean searchWhileSort(int key) {
  int cnt = 0;
  while (cnt < numlist.length) {
    if (cnt == key) return true;
    else if (cnt > key) break;
    cnt++;
  } return false;
}
```

2. Unordered List  
```java
static int[] numlist = {55, 4, 34, 54, 1, 12, 35};
// For문 사용
static boolean searchForNoSort(int key) {
  for (int i=0; i<numlist.length; i++) {
    if (numlist[i] == key) return true;
  } return false;
}
// While문 사용
static boolean searchWhileNoSort(int key) {
    int cnt = 0;
    while (cnt < numlist.length) {
        if (numlist[cnt] == key) return true;	
        cnt++;
    } return false;
}
```

## 이진 탐색 Binary Serarch
- 자료의 중간 값과 비교해, 비교할 값의 수를 반으로 줄여 빠르게 검색
- 정렬된 상태에서 수행
- 시간복잡도 **O(logn)**

### 구현
1. 반복문
```java
static boolean SearchBinary(int[] numlist, int key) {
  int start = 0;
  int end = numlist.length-1;
  while (end >= start) {
    int halfN = start + (end-start)/2 + 1;
    if (start == end) {
      if (key == numlist[start]) return true;
      else return false;
    }
    if (key < numlist[halfN]) end = halfN-1;
    else if (key > numlist[halfN]) start = halfN+1;
    else return true;
  } return false;
}
```

2. 재귀
```java
static void SearchBinary(int[] numlist, int key) {
  int HalfN = numlist.length/2;
  if (numlist.length == 0) System.out.println(false);
  else if (key == numlist[HalfN]) System.out.println(true);
  else {
    int start = 0;
    int end = numlist.length-1;
    if (key < numlist[HalfN]) end = HalfN - 1;
    else if (key > numlist[HalfN]) start = HalfN + 1;

    int[] newlist = new int[end-start+1];
    for (int i=start; i<=end; i++) {
      newlist[i-start] = numlist[i];
    } SearchBinaryRecur(newlist, key);
  }
}
```

3. Arrays.binarySearch
```java
Arrays.binarySearch(numlist, key);
```

## 완전 탐색 Exhaustive Search
## 인덱싱 Indexing