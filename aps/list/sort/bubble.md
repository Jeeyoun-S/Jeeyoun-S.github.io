---
layout: page
title: Bubble Sort
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 인접한 원소를 비교한 뒤, 원소 교환
- 시간복잡도 O(n<sup>2</sup>)

## 구현
1. Ascending *(Python)*
    ``` python
    for i in range(len(numlist)-1, 0, -1):
    	for j in range(i):
            if numlist[j] > numlist[j+1]:
                tmp = numlist[j]
                numlist[j] = numlist[j+1]
                numlist[j+1] = tmp
    print(numlist)
    ```

2. Descending *(Java)*
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