---
layout: page
title: Array
sitemap: false
permalink: /aps/java/list/array/
---

*update 2022.11.04 - create*

## 배열
- 일정한 자료형의 변수들을 하나의 이름으로 열거해 사용하는 자료구조

## 1차원 배열
### 선언
- 자료형, 이름, 길이 필요
- `int[] nums = new int[6]`

### 접근
- `nums[index] = 20` → `index+1`번째 원소에 20을 저장
- 주의:warning: Java에서는 음수 index 불가능

### 순회 
- `int[] arr = {2, 4, 6, 8, 10, 12};`
- 정방향
  - `for (int i : arr) { i };`
  - `for (int i=0; i < arr.length; i++) { arr[i] };`
- 역방향
  - `for (int i = arr.length-1; i>=0; i--) { arr[i] };`
  - `for (int i = 0; i < arr.length; i++) { arr[arr.length-1-i] };`

## 2차원 배열
### 선언
- 자료형, 이름, 행의 개수, 열의 개수 → 내부 1차원 배열의 크기가 각각 달라도 가능
- `int[][] arr = new int[5][10];`
- `int[][] arr = { {0,1,2,3,4}, {5,6,7,8,9}, {10,11,12,13,14}, {15,16,17,18,19} };`

### 순회
- 행 우선 순회
  - 열 정방향
    ```java
    for (int i=0; i<arr.length; i++) {
      for (int j=0; j<arr[i].length; j++) {
        System.out.println(arr[i][j]);
      }
    }
    ```
  - 열 역방향
    ```java
    for (int i=0; i<arr.length; i++) {
      for (int j=arr[i].length-1; j>=0; j--) {
        System.out.println(arr[i][j]);
      }
    }
    ```
- 행 우선 순회
  - 행 정방향
    ```java
    for (int j=0; j<arr[0].length; j++) {
      for (int i=0; i<arr.length; i++) {
        System.out.println(arr[i][j]);
      }
    }
    ```
  - 행 역방향
    ```java
    for (int j=0; j<arr[0].length; j++) {
      for (int i=arr.length-1; i>=0; i--) {
        System.out.println(arr[i][j]);
      }
    }
    ```
- 행 교차 순회 (1줄마다)
  - 방법 1
    ```java
    for (int i=0; i<arr.length; i++) {
      if (i%2==0) {
        for (int j=0; j<arr[i].length; j++) {
          System.out.println(arr[i][j]);
        }
      } else {
        for (int j=arr[i].length-1; j>=0; j--) {
          System.out.println(arr[i][j]);
        }
      }
    }
    ```
  - 방법 2
    ```java
    for (int i=0; i<arr.length; i++) {
      for (int j=0; j<arr[i].length; j++) {
        if (i%2==0) {
          System.out.println(arr[i][j]);
        } else {
          System.out.println(arr[i][arr[i].length-1-j]);
        }
      }
    }
    ```
  - 방법 3
    ```java
    for (int i=0; i<arr.length; i++) {
      for (int j=0; j<arr[i].length; j++) {
        System.out.println(arr[i][j+(arr[i].length-1-(2*j))*(i%2)]);
      }
    }
    ```
- 열 교차 순회 (1줄마다)
  ```java
  for (int j=0; j<arr[0].length;; j++) {
    for (int i=0; i<arr.length; i++) {
      int rlt = j%2 == 0 ? i : arr.length-i-1;
      System.out.println(arr[rlt][j]);
    }
  }
  ```
- 행 교차 순회 (2줄마다)
  ```java
  for (int i=0; i<arr.length; i++) {
    for (int j=0; j<arr[i].length; j++) {
      int rlt = (i/2)%2==0 ? j : arr[i].length-1-j;
        System.out.println(arr[i][rlt]);
      }
  }
  ```
- 대각선 순회
  ```java
  int N = arr.length;
  int M = arr[0].length;

  for (int rep=0; rep<(N+M-1); rep++) {
    int row = 0;
    int col = rep;
    
    while (col >=0) {
      if (row >= 0 && row < N && col >= 0 && col < M) {
        System.out.println(arr[row][col]);
      }
      row ++; col--;
    }
  }
  ```
- 대각선 교차 순회
  ```java
  int N = arr.length;
  int M = arr[0].length;

  for (int rep=0; rep<(N+M-1); rep++) {
    int row;
    int col;
    
    if (rep%2==0) {row = 0; col = rep;}
    else {row = rep; col = 0;}
    
    while (col >=0) {
      if (row >= 0 && row < N && col >= 0 && col < M) {
        System.out.println(arr[row][col]);
      }
      if (rep%2==0) {row ++; col--;}
      else {row --; col++;}
    }
  }
  ```
- 달팽이 순회
  - for문 사용
    - (0, 0)부터 시작해 테두리의 각 변을 이동하는 4개의 for문  
    ```java
    int top = 0;
		int bottom = arr.length - 1;
		int left = 0;
		int right = arr[0].length - 1;
		
		while (left <= right && top <= bottom) {
			for (int i=left; i<=right; i++) {
				System.out.println(arr[top][i]);
			} top++;
			for (int i=top; i<=bottom; i++) {
				System.out.println(arr[i][right]);
			} right--;
			for (int i=right; i>=left; i--) {
				System.out.println(arr[bottom][i]);
			} bottom--;
			for (int i=bottom; i>=top; i--) {
				System.out.println(arr[i][left]);
			} left++;
		}
    ```

  - 규칙 이용
    - 수평 → 수직 : 이동 칸 수가 하나씩 감소  
    - 수직 → 수평 : 이동 칸 수는 동일, 방향 전환  
    ```java
    int rowN = arr.length;
    int colN = arr[0].length;
    int fixc = 0;
    int fixr = 0;

    for (int i=0; i<Math.min(rowN, colN); i++) {
      for (int c=0; c<colN-i-1; c++) {
        System.out.println(arr[fixc][fixr]);
        if (i%2 == 0) fixr++;
        else fixr--;
      } 
      System.out.println(arr[fixc][fixr]);
      for (int r=0; r<rowN-i-1; r++) {
        if (i%2 == 0) fixc++;
        else fixc--;
        System.out.println(arr[fixc][fixr]);
      }
      if (i%2 == 0) fixr--;
      else fixr++;
    }
    ```

  - 델타 이동
    - 우 → 하 → 좌 → 상  
    ```java
    int[][] delta = { {0, 1}, {1, 0}, {0, -1}, {-1, 0} };
    boolean[][] check = new boolean[arr.length][arr[0].length];
    int x = 0; int y = 0;
    int direction = 0;

    while (true) {
      System.out.println(arr[x][y]);
      check[x][y] = true;
      boolean rlt = true;
      for (int i=direction; i<direction+4; i++) {
        int[] d = delta[i%4];
        if (x+d[0] >= 0 && x+d[0] < arr.length && y+d[1] >= 0 && y+d[1] < arr[0].length && !check[x+d[0]][y+d[1]]) {
          x = x+d[0]; y = y+d[1];
          rlt = false;
          direction = i%4;
          break;
        }
      } if (rlt) break;
    }
    ```

### 이동
- 델타 이동
  - 한 좌표에서 인접 좌표로 이동하는 2차원 배열 탐색 방법  
  | (-1, -1) | (-1, 0) | (-1, 1) |
  | --- | --- | --- |
  | (0, -1) | POINT | (0, 1) |
  | (1, -1) | (1, 0) | (1, 1) |
  
  ```java
  int dr = 0; // 찾을 열
  int dc = 0; // 찾을 행
  
  // 바로 위의 칸부터 시계 방향
  int[][] idx = { {-1,0}, {-1,1}, {0,1}, {1,1}, {1,0}, {1,-1}, {0,-1}, {-1,-1} };
  
  for (int i=0; i<idx.length; i++) {
    int rm = dr+idx[i][0];
    int cm = dc+idx[i][1];
    if (rm >= 0 && rm < arr.length && cm >= 0 && cm < arr[0].length) {
      System.out.println(arr[rm][cm]);
    }
  }
  ```
- 전치 행렬
  ```java
  int N = arr.length;
  for (int i=0; i<N; i++) {
    for (int j=0; j<N-i; j++) {
      int tmp = arr[i][j];
      arr[i][j] = arr[N-1-j][N-1-i];
      arr[N-1-j][N-1-i] = tmp;
    }
  }
  ```