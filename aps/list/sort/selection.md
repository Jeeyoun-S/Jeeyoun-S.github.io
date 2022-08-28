---
layout: page
title: Concept of List
description: >
  Tell about List.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

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