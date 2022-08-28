---
layout: page
title: Binary Search
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 정렬된 자료의 중간값과 비교해, 비교할 값의 수를 반으로 줄여가며 검색
- 시간복잡도 O(logn)

## 구현
1. 반복문 이용
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
2. 재귀함수 이용
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
