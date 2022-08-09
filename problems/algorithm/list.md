---
layout: page
title: List
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 배열
### 1차원 배열
- 선언
    - 자료형, 이름, 길이
    - `int[] numbers = new int[5]`
- 접근
    - `numbers[index] = 20`  → `index+1`번째 원소에 `20`을 저장
    - **주의** : Java에서는 음수 인덱스 불가능
- 순회
    `int[] arr = {2, 4, 6, 8, 10, 12}`
    - 정방향
        - `for (int i : arr) { i }`
        - `for (int i=0; i < arr.length; i++) { arr[i] }`
    - 역방향
        - `for (int i = arr.length-1; i>=0; i--) { arr[i] }`
        - `for (int i = 0; i < arr.length; i++) { arr[arr.length-1-i] }`

## 정렬 Sort
- 2개 이상의 자료를 오름차순 또는 내림차순으로 배열
- Key : 정렬 기준
- Swap
    ``` java
    int a = 2; int b = 1; int c;
    c = a; a = b; b = c;
    ```
- Swap Function
    ``` java
    public class main {
        static int[] numlist = {55, 4, 34, 54, 1, 12, 35};
        public static void main(String[] args) {
            System.out.println(Arrays.toString(numlist));
        }
        static void Swap(int idx_a, int idx_b) {
            int tmp = numlist[idx_a];
            numlist[idx_a] = numlist[idx_b];
            numlist[idx_b] = tmp;
	}
    }
    ```

### 버블 정렬 Bubble Sort
- 인접한 원소를 비교한 뒤, 원소 교환
- 시간복잡도 O(n<sup>2</sup>)
- 오름차순 정렬 (Python)
    ``` python
    for i in range(len(numlist)-1, 0, -1):
    	for j in range(i):
            if numlist[j] > numlist[j+1]:
                tmp = numlist[j]
                numlist[j] = numlist[j+1]
                numlist[j+1] = tmp
    print(numlist)
    ```
- 내림차순 정렬 (Java)
    ``` java
    import java.util.Arrays;
    for (int i=numlist.length-1; i>0; i--) {
	for (int j=0; j<i;j++) {
		if (numlist[j] < numlist[j+1]) {
			int tmp = numlist[j];
			numlist[j] = numlist[j+1];
			numlist[j+1] = tmp;
		}
	}
    }
    System.out.println(Arrays.toString(numlist));
    ```

### 선택 정렬 Selection Sort
- Selection Algorithm
    - 최대값, 최소값, 중간값 등 특정 원소 찾기
    - K번째로 작은 값 찾기
    	- `1~K번째 작은 원소를 차례로 찾아 앞으로 이동 → K번째 값 반환
- 최소값을 찾은 뒤 맨 앞의 값과 교환 → 나머지도 이 과정을 반복
- 시간복잡도 O(n<sup>2</sup>)
- 오름차순 정렬 (Python)
    ``` python
    for i in range(len(numlist)):
        minidx = i
        for j in range(i+1, len(numlist)):
            if numlist[minidx] > numlist[j]:
                minidx = j
        tmp = numlist[minidx]
        numlist[minidx] = numlist[i]
        numlist[i] = tmp 
    print(numlist)
    ```
- 내림차순 정렬 (Java)
    ``` java
    import java.util.Arrays;
    for (int i=0; i<numlist.length; i++) {
    	int maxidx = i;
	for (int j=i; j<numlist.length; j++) {
		if (numlist[maxidx] < numlist[j]) {
			maxidx = j;
		}
	}
	int tmp = numlist[maxidx];
	numlist[maxidx]= numlist[i];
	numlist[i] = tmp;
    }
    System.out.println(Arrays.toString(numlist));
    ```

### 카운팅 정렬 Counting Sort
### 삽입 정렬 Insertion Sort
### 병합 정렬 Merge Sort
### 퀵 정렬 Quick Sort

## 검색 Search

### 순차 검색 Sequential Search
- 일렬로 나열돼 있는 자료를 순차적으로 검색
- 시간복잡도 O(n)
- Ordered List *(ascending)*
    - 찾으면 true 반환, 찾는 값보다 비교 값이 커지면 false 반환
    ``` java
    ```
- Unordered List *(ascending)*
    - 찾으면 true 반환, 찾지 못하면 false 반환
    ``` java
    ```

### 이진 검색 Binary Search
### 인덱싱 Indexing
