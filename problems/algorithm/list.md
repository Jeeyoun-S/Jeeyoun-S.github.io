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

### 2차원 배열
- 선언
    - 자료형, 이름, 행의 개수, 열의 개수 → 1차원 배열의 크기가 각각 달라도 가능
    - `int[][] arr = new int[5][10];`
    - `int[][] arr = { {0,1,2,3,4},{5,6,7,8,9},{10,11,12,13,14},{15,16,17,18,19} };`
- 순회
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
            
    - 열 우선 순회
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
            
    - 행 교차 순회 *(1줄마다)*
        - 방법1
            
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
            
        - 방법2
            
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
            
        - 방법3
            
            ```java
            for (int i=0; i<arr.length; i++) {
            	for (int j=0; j<arr[i].length; j++) {
            		System.out.println(arr[i][j+(arr[i].length-1-(2*j))*(i%2)]);
            	}
            }
            ```
            
    - 열 교차 순회 *(1줄마다)*
        
        ```java
        for (int j=0; j<arr[0].length;; j++) {
        	for (int i=0; i<arr.length; i++) {
        		int rlt = j%2 == 0 ? i : arr.length-i-1;
        		System.out.println(arr[rlt][j]);
        	}
        }
        ```
        
    - 행 교차 순회 *(2줄마다)*
        
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

		if (rep%2==0) {
			row = 0; col = rep;
		} else {
			row = rep; col = 0;
		}

		while (col >=0) {
			if (row >= 0 && row < N && col >= 0 && col < M) {
				System.out.println(arr[row][col]);
			}
			if (rep%2==0) {
				row ++; col--;
			} else {
				row --; col++;
			}
		}
	}
	```
        
    - 달팽이 순회

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

- 이동
    - 델타 이동
    
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

## 정렬 Sort
- 2개 이상의 자료를 오름차순 또는 내림차순으로 배열
- Key : 정렬 기준
- 안정 VS 불안정 정렬
    - 안정 정렬 : 값이 같을 때 원본 순서를 보장O
    - 불안정 정렬 : 값이 같을 때 원본 순서를 보장X
- Swap
    ``` java
    int a = 2; int b = 1; int c;
    c = a; a = b; b = c;
    ```
- Swap Function
    ``` java
    public class SwapFunction {
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
- 오름차순 정렬 *(Python)*
    ``` python
    for i in range(len(numlist)-1, 0, -1):
    	for j in range(i):
            if numlist[j] > numlist[j+1]:
                tmp = numlist[j]
                numlist[j] = numlist[j+1]
                numlist[j+1] = tmp
    print(numlist)
    ```
- 내림차순 정렬 *(Java)*
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
    	- 1~K번째 작은 원소를 차례로 찾아 앞으로 이동 → K번째 값 반환
- 시간복잡도 O(n<sup>2</sup>)
- 정렬 과정
	1. 최소값을 찾은 뒤 맨 앞의 값과 교환
	2. 맨 앞 값을 제외한 나머지에서 최소값을 찾아 두 번째 값과 교환
	3. 나머지도 이 과정을 반복
- 오름차순 정렬 *(Python)*
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
- 내림차순 정렬 *(Java)*
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
- 배열에 각 요소가 몇 개씩 있는지 세는 방법
    - 정수로 표현 가능한 자료만 사용 가능
    - 배열 내 가장 큰 수를 알아내야 한다.
- 시간복잡도 O(n+k)
- 정렬 과정
    1. 원본 배열의 최댓값을 인덱스로 포함하는 배열을 생성
    2. 새로 생성한 배열에 요소값을 인덱스로 해 요소별 개수를 저장
    3. 요소별 개수의 누적합 계산
    4. 원본 배열과 동일한 크기의 배열을 생성
    5. 원본 배열을 맨 끝 요소부터 순회
    6. 해당 요소의 누적합에서 1을 빼고, 새로 생성한 배열의 누적합 인덱스에 저장
- 양수 값만 존재
    
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
- 음수 값도 존재 *(가장 작은 값을 0으로 설정)*
    
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

### 삽입 정렬 Insertion Sort
### 병합 정렬 Merge Sort
### 퀵 정렬 Quick Sort

## 검색 Search

### 순차 검색 Sequential Search
- 일렬로 나열돼 있는 자료를 순차적으로 검색
- 시간복잡도 O(n)
- Ordered List *(ascending)*
    - 찾으면 true 반환, 찾는 값보다 비교 값이 커지면 false 반환
    - For
    ``` java
    static boolean SearchForOrder(int[] numlist, int key) {
        for (int i : numlist) {
            if (i == key) {
                return true;
            } else if (i > key) {
                break;
            }
        } return false;
    }
    ```
    - While
    ``` java
    static boolean SearchWhileOrder(int[] numlist, int key) {
        int cnt = 0;
            while (numlist[cnt] <= key) {
                if (numlist[cnt] == key) {
                    return true;
                }
            cnt ++;
        } return false;
    }
    ```
- Unordered List *(ascending)*
    - 찾으면 true 반환, 찾지 못하면 false 반환
    - For
    ``` java
    static boolean SearchForUnorder(int[] numlist, int key) {
        for (int i : numlist) {
            if (i == key) {
                return true;
            }
        } return false;
    }
    ```
    - While
    ``` java
    static boolean SearchWhileUnorder(int[] numlist, int key) {
        int cnt = 0;
            while (cnt < numlist.length) {
                if (numlist[cnt] == key) {
                    return true;
                }
            cnt ++;
        } return false;
    }
    ```

### 이진 검색 Binary Search
- 정렬된 자료의 중간값과 비교해, 비교할 값의 수를 반으로 줄여가며 검색
- 시간복잡도 O(logn)
- 반복문 이용
    ``` java
    static boolean SearchBinaryWhile(int[] numlist, int key) {
        int start = 0;
        int end = numlist.length-1;
        while (end >= start) {
            int halfN = start + (end-start)/2 + 1;
            if (start == end) {
                if (key == numlist[start]) {
                    return true;
                } else {
                    return false;
                }
            }
            if (key < numlist[halfN]) {
                end = halfN-1;
            } else if (key > numlist[halfN]) {
                start = halfN+1;
            } else {
                return true;
            }
        } return false;
    }
    ```
- 재귀함수 이용
    ``` java
    static void SearchBinaryRecur(int[] numlist, int key) {
        int HalfN = numlist.length/2;
        if (numlist.length == 0) {
            System.out.println(false);
        } else if (key == numlist[HalfN]) {
            System.out.println(true);
        } else {
            int start = 0;
            int end = numlist.length-1;
            if (key < numlist[HalfN]) {
                end = HalfN - 1;
            } else if (key > numlist[HalfN]) {
                start = HalfN + 1;
            }
            int[] newlist = new int[end-start+1];
            for (int i=start; i<=end; i++) {
            	newlist[i-start] = numlist[i];
            } SearchBinaryRecur(newlist, key);
        }
    }
    ```

### 인덱싱 Indexing
