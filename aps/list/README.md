---
layout: page
title: List
sitemap: false
permalink: /aps/list/
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Datatype
1. [Array](/datatype/array_java.md) *(java)*
2. [List](/datatype/list_python.md) *(python)*

## Sort
1. Basics
  - 2개 이상의 자료를 오름차순 또는 내림차순으로 배열
  - Key : 정렬 기준
  - 안정 VS 불안정 정렬
        - 안정 정렬 : 값이 같을 때 원본 순서를 보장 O
        - 불안정 정렬 : 값이 같을 때 원본 순서를 보장 X
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

2. [Bubble Sort](/sort/bubble.md)
3. [Selection Sort](/sort/selection.md)
4. [Counting Sort](/sort/counting.md)
5. [Insertion Sort](/sort/insertion.md)
6. [Merge Sort](/sort/merge.md)
7. [Quick Sort](/sort/quick.md)
  
## Search
1. [Sequential Search](/search/sequential.md)
2. [Binary Search](/search/binary.md)