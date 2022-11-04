---
layout: page
title: Sort
sitemap: false
permalink: /aps/java/list/sort/
---

*update 2022.11.04*

## 정렬 Sort
- 2개 이상의 자료를 오름차순 또는 내림차순으로 배열
- 키 : 정렬 기준
- 안정 VS 불안정
  - 안정 정렬 : 값이 같을 때 원본 순서를 보장
  - 불안정 정렬 : 원본 순서를 보장하지 않는다.

## 버블 정렬 Bubble Sort
- 인접한 원소를 비교해 원소 교환 Swap
- 시간복잡도 **O(n<sup>2</sup>)**

### Swap
1. 변수
    ```java
    int a = 2; int b = 1; int c;
    c = a; a = b; b = c;
    ```
2. 함수
    ```java
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

### 구현
```java
import java.util.Arrays;

public class main {
  public static void main(String[] args) {
    int[] numlist = {55, 4, 34, 54, 1, 12, 35};
    int tmp;

    // i는 값이 정렬돼 고정될 위치로 맨 끝부터 맨 앞으로
    for (int i=numlist.length-1; i>0; i--) {
      for (int j=0; j<i; j++) {
        // 큰 값을 오른쪽으로
        if (numlist[j] > numlist[j+1]) {
          tmp = numlist[j];
          numlist[j] = numlist[j+1];
          numlist[j+1] = tmp;
        }
      }
    } System.out.println(Arrays.toString(numlist));
  }
}
```

## 선택 정렬 Selection Sort
- 시간복잡도 **O(n<sup>2</sup>)**

### Selection Algorithm
- 특정 원소(ex. 최대값, 최소값, 중간 값) 찾기
- K번째로 작은 값 찾기
    - 1 ~ K번째 작은 원소를 차례로 찾아 앞으로 이동 → K번째 값 반환

### 정렬 과정
1. 최소값을 찾은 뒤, 맨 앞의 값과 교환
2. 나머지 값들에 대해서도 위 과정 반복

### 구현
```java
import java.util.Arrays;

public class main {
  public static void main(String[] args) {
    int[] numlist = {55, 4, 34, 54, 1, 12, 35};

    // 마지막에 하나가 남으면 정렬할 필요 없으므로 배열 길이-1만큼 반복
    for (int i=0; i<numlist.length-1; i++) {
      int minidx = i; // 위치 i부터 배열 끝까지 중 최솟값 idx
      for (int j=i+1; j<numlist.length; j++) {
        if (numlist[j] < numlist[minidx] {
          minidx = j;
        }
      }
      // 최솟값과 i에 있는 값 Swap
      int tmp = numlist[i];
      numlist[i] = numlist[minidx];
      numlist[minidx] = tmp;
    }
    System.out.println(Arrays.toString(numlist));
  }
}
```

## 카운팅 정렬 Counting Sort
- 배열에 각 요소가 몇 개씩 있는지 세는 방법
  - 정수로 표현 가능한 자료만 사용 가능
  - 배열 내 가장 큰 수를 알아내야 한다.
- 시간복잡도 **O(n+k)**

### 정렬 과정
1. 정렬할 배열의 최댓값을 인덱스로 포함하는 배열을 생성
2. 요소별 개수를 계산해 새로 생성한 배열에 요소값을 인덱스로 저장
3. 요소별 개수의 누적합 계산
4. 원본 배열과 동일한 크기의 배열을 생성
5. 원본 배열을 맨 끝 요소부터 순회
6. 해당 요소의 누적합에서 1을 빼고, 새로 생성한 배열의 정렬된 위치에 저장

### 구현
1. 양수 값만 존재
    ```java
    // 배열에서 최대값 찾기
    int maximum = numlist[0];
    for (int i : numlist) {
      if (i > maximum) {
        maximum = i;
      }
    }

    // 요소별 빈도수를 넣는 배열 만들기
    int[] freq = new int[maximum+1];
    for (int j : numlist) {
      freq[j] += 1;
    }

    // 누적합 구하기
    int total = 0;
    for (int p=0; p<freq.length; p++) {
      total += freq[p]; 
      freq[p] = total;
    }

    // 복사해 정렬한 배열 만들기
    int[] copyNum = new int[numlist.length];
    for (int k=numlist.length-1; k>=0; k--) {
      int number = numlist[k];
      freq[number] -= 1;
      copyNum[freq[number]] = number;
    }
    ```
2. 음수 값도 존재
    ```java
    // 배열에서 최소값과 최대값 찾기
    int maximum = numlist[0];
    int minimum = numlist[0];
    for (int i : numlist) {
      if (i > maximum) {
        maximum = i;
      } else if (i < minimum) {
        minimum = i;
      }
    }

    // 값 밀기
    if (minimum < 0) {
      int N = -(minimum);
      for (int j=0; j<numlist.length; j++) {
        numlist[j] += N;
      }
    }

    // 요소별 빈도수를 넣는 배열 만들기
    int[] freq = new int[(maximum-minimum)+1];
    for (int j : numlist) {
      freq[j] += 1;
    }

    // 누적합 구하기
    for (int p=1; p<freq.length; p++) {
      total[p] += freq[p-1];
    }

    // 정렬한 배열 만들기
    int[] copyList = new int[numlist.length];
    for (int k=numlist.length-1; k>=0; k--) {
      int number = numlist[k];
      freq[number] -= 1;
      copyList[freq[number]] = number;
    }

    // 밀었던 값 원상복구
    if (minimum < 0) {
      int N = -(minimum);
      for (int j=0; j<numlist.length; j++) {
        copyList[j] -= N;
      }
    }
    ```

## 삽입 정렬 Insertion Sort
- 이미 정렬돼 있는 배열에서 자신의 자리를 찾아 넣어주는 정렬
- 시간복잡도 **O(n<sup>2</sup>)**

### 정렬 과정
1. 정렬돼 있지 않은 배열 A에서 원소를 하나씩 빼 정렬된 배열 B로 옮긴다.
2. A에서 뺀 원소를 B의 앞 원소부터 비교해 자리를 찾아 넣어준다.

### 구현
1. Array
    ```java
    public static int[] insertSort(int[] numArr){
      int numArrLen = numArr.length;      // 입력받은 배열 길이
      int[] sortArr = new int[numArrLen]; // 정렬된 배열을 저장
      int sortArrLen = 0;                 // 정렬된 배열에 넣은 요소 개수
      
      while (numArrLen > 0) { // 옮겨야 할 요소가 남아있는 경우
        int i = numArr.length-numArrLen;
        int j = 0;
        for (j=0; j<sortArrLen; j++) {
          if (sortArr[j] > numArr[i]) {
            for (int k=sortArrLen-1; k>=j; k--) {
              sortArr[k+1] = sortArr[k]; 
            } break;
          }
        }
        sortArr[j] = numArr[i];
        numArrLen--; sortArrLen++;
      } return sortArr;
    }
    ```
2. LinkedList
    ```java
    ```

## 병합 정렬 Merge Sort
- 시간복잡도 **O(nlogn)**
- 안정 정렬

## 퀵 정렬 Quick Sort
- 불안정 정렬