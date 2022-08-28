---
layout: page
title: Counting Sort
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 배열에 각 요소가 몇 개씩 있는지 세는 방법
    - 정수로 표현 가능한 자료만 사용 가능
    - 배열 내 가장 큰 수를 알아내야 한다.
- 시간복잡도 O(n+k)

## 정렬 과정
1. 원본 배열의 최댓값을 인덱스로 포함하는 배열을 생성
2. 새로 생성한 배열에 요소값을 인덱스로 해 요소별 개수를 저장
3. 요소별 개수의 누적합 계산
4. 원본 배열과 동일한 크기의 배열을 생성
5. 원본 배열을 맨 끝 요소부터 순회
6. 해당 요소의 누적합에서 1을 빼고, 새로 생성한 배열의 누적합 인덱스에 저장

## 구현
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

2. 음수 값도 존재 *(가장 작은 값을 0으로 설정)*

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