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