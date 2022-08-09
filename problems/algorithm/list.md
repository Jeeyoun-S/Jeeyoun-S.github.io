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

## 정렬
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
