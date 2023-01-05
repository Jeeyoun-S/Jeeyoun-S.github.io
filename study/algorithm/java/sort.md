---
layout: page
title: Sort
sitemap: false
permalink: /study/algorithm/java/sort/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

*update 2022.11.04 -create*

## 정렬 Sort
- 2개 이상의 자료를 오름차순 또는 내림차순으로 배열
- 키 : 정렬 기준
- 안정 VS 불안정
  - 안정 정렬 : 값이 같을 때 원본 순서를 보장
  - 불안정 정렬 : 원본 순서를 보장하지 않는다.

## 거품 정렬 Bubble Sort
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

## 계수 정렬 Counting Sort
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
      
      while (numArrLen > 0) {
        int i = numArr.length-numArrLen;
        int j = 0;
        for (j=0; j<sortArrLen; j++) {
          if (sortArr[j] > numArr[i]) { // 현재 정렬하고자 하는 값보다 커지면
            for (int k=sortArrLen-1; k>=j; k--) { // 옆으로 밀기
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
   1. Node.java
      ```java
      public class Node {
      Node prev = null;
      Node next = null;
      int value;

      public Node(int value) {
        this.value = value;
      }
      }
      ```
   2. SelectionSort.java
      ```java
      public static void insertSort(int[] numArr) {
        // 입력받은 배열을 LinkedList로 연결하며 정렬한다.
        
        // index 0에 있는 값을 Node에 넣어준다.
        Node head = new Node(numArr[0]);
        
        for (int i=1; i<numArr.length; i++) {
          // numArr[i]를 값으로 갖는 newNode를 생성한다.
          Node newNode = new Node(numArr[i]);
          
          // compareNode와 비교, compareNode는 head부터 다음 Node가 없을 때까지 반복
          Node compareNode = head;
          while (compareNode != null) {
            // 만약 현재 Node인 newNode보다 compareNode의 값이 크면
            // newNode를 compareNode 앞에 넣는다.
            if (compareNode.value > newNode.value) {
              if (compareNode == head) { // compareNode의 이전 Node가 없고, 대신 head로
                head = newNode;
              } else { // compareNode의 이전 Node의 다음 Node를 new Node로
                compareNode.prev.next = newNode;
              }
              newNode.prev = compareNode.prev;
              compareNode.prev = newNode;
              newNode.next = compareNode;
              break;
            }
            
            // 다음 Node가 없다면 맨 뒤에 현재 newNode를 붙인다.
            if (compareNode.next == null ) {
              compareNode.next = newNode;
              newNode.prev = compareNode;
              break;
            } compareNode = compareNode.next;
          }
        }
        
        // 결과값을 출력한다.
        Node startNode = head;
        while (startNode != null) {
          System.out.println(startNode.value);
          startNode = startNode.next;
        }
      }
      ```

## 병합 정렬 Merge Sort
- 시간복잡도 **O(nlogn)**
- 안정 정렬

### 정렬 과정
1. 주어진 배열을 최소 단위로 분할한다.
2. 분할한 배열을 정렬하며 병합한다.

### 구현
```java
static int[] numArr;       // 정렬을 수행할 배열
static int[] sortNumArr;   // 정렬 시 임시로 사용할 배열
public static void divideAndMerge(int left, int right) {
  if (left < right) {
    // mid를 기준으로 반으로 나눈다.
    int mid = left + ((right - left)/2);
    divideAndMerge(left, mid);
    divideAndMerge(mid + 1, right);

    // left부터 right까지 정렬
    mergeSort(left, mid, right);
  }
}
public static void mergeSort(int left, int mid, int right) {
  // mid를 중심으로 반으로 나눠진 배열을 병합하며 정렬
  // left ~ mid, mid+1 ~ right는 각각 정렬된 상태
  int l = left;     // left ~ mid에서 시작점 (최솟값의 위치)
  int r = mid + 1;  // mid+1 ~ right에서 시작점 (최솟값의 위치)
  
  int point = left; // '정렬이 안 된 값 중 최솟값'을 넣어줄 위치
  while (l <= mid && r <= right) {
    if (numArr[l] < numArr[r]) {     // numArr[l]이 최솟값
      sortNumArr[point] = numArr[l]; // l+1 증가
      l++;
    } else {
      sortNumArr[point] = numArr[r]; // numArr[r]이 최솟값
      r++;                           // r+1 증가
    } point++;
  }
  
  // left ~ mid에서 남은 값 넣어주기
  while (l <= mid) {
    sortNumArr[point] = numArr[l];
    l++; point++;
  }
  
  // mid+1 ~ right에서 남은 값 넣어주기
  while (r <= right) {
    sortNumArr[point] = numArr[r];
    r++; point++;
  }
  
  // 정렬한 배열 값을 numArr에 넣어주기
  for (int i=left; i<=right; i++) {
    numArr[i] = sortNumArr[i];
  }
}
```

## 퀵 정렬 Quick Sort
- 시간복잡도 **O(nlogn) ~ O(n<sup>2</sup>)**
- 불안정 정렬

### 정렬 과정
1. pivot 선정 (Partition 방법)
2. pivot을 기준으로 왼쪽에는 pivot보다 작은 값, 오른쪽에는 pivot보다 큰 값을 위치시킨다.
3. 그후 pivote의 왼쪽, 오른쪽으로 나눠 다시 1번부터 반복

### 구현
1. Sort  
```java
public static void quickSort(int left, int right) {
  if (left < right) {
    // pivot을 구한 뒤, pivot을 기준으로 나눈다.
    int pivot = hoarePartition(left, right);
    quickSort(left, pivot-1);
    quickSort(pivot+1, right);
  }
}
```

2. Partition  
  a. Hoare Partition  
    ```java
    public static int hoarePartition(int left, int right) {
      // 제일 왼쪽 값은 pivot으로 선택
      int pivot = numArr[left];
      int L = left + 1;
      int R = right;
      
      while (L <= R) {
        // L값이 pivot보다 작으면 L을 오른쪽으로 이동
        while (L <= R && numArr[L] <= pivot) L++;
        
        // R값이 pivot보다 크면 R을 왼쪽으로 이동
        while (numArr[R] > pivot) R--;
        
        // L값은 pivot보다 크고, R값은 pivot보다 작으므로 바꿔준다.
        if (L < R) {
          int tmp = numArr[L];
          numArr[L] = numArr[R];
          numArr[R] = tmp;
        }
      }
      
      // pivot과 numArr[R]의 위치 변경
      // pivot보다 작은 값은 왼쪽으로, 큰 값은 오른쪽으로 가도록 설정
      int tmp = numArr[left];
      numArr[left] = numArr[R];
      numArr[R] = tmp;
      
      return R;
    }
    ```
  
  b. Lomuto Partition  
    ```java
    public static int lomutoPartition(int left, int right) {
      // pivot을 가장 오른쪽 값으로 설정
      int pivot = numArr[right]; 
      int i = left - 1;
      
      // pivot을 제외하고 left부터 right - 1까지
      for (int j=left; j<right; j++) {
        
        // 만약 pivot 값이 더 크면 제일 왼쪽으로 이동
        if (numArr[j] <= pivot) {
          i++;
          int tmp = numArr[i];
          numArr[i] = numArr[j];
          numArr[j] = tmp;
        }
      }
      // pivot보다 작아서 왼쪽으로 이동한 마지막 인덱스 다음 i+1과 privot과 위치 변경
      int tmp = numArr[i+1];
      numArr[i+1] = numArr[right];
      numArr[right] = tmp;
      return i + 1;
    }
    ```

## 힙 정렬 Heap Sort
## 기수 정렬 Radix Sort