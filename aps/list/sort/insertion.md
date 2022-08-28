---
layout: page
title: Insertion Sort
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 배열에서 오름차순으로 자리를 찾아 넣어주는 정렬
- 시간복잡도 `O(n^2)`

## 정렬 과정
1. 정렬돼 있지 않은 배열 A에서 원소를 하나씩 빼 정렬된 배열 B로 옮긴다.
2. A에서 뺀 원소를 B의 앞 원소부터 비교해 자리를 찾아 넣어준다.

## 구현
1. Array
    
    ```java
    public static int[] InsertSort(int[] numArr){
    	int numArrLen = numArr.length;
    	int[] sortArr = new int[numArrLen];
    	int sortArrLen = 0;
    	
    	while (numArrLen > 0) {
    		int i = numArr.length-numArrLen;
    		int j = 0;
    		for (j=0; j<=sortArrLen; j++) {
    			if (j==sortArrLen) {
    				break;
    			} else if (sortArr[j] > numArr[i]) {
    				for (int k=sortArrLen-1; k>=j; k--) {
    					sortArr[k+1] = sortArr[k]; 
    				} break;
    			}
    		}
    		sortArr[j] = numArr[i];
    		numArrLen--; sortArrLen++;
    	} return sortArr;
    }
    ```
    
1. LinkedList
    
    ```java
    package linkedlist.problems;
    
    import java.util.Scanner;
    
    public class InsertSort {
    	public static void main(String[] args) {
    		Scanner sc = new Scanner(System.in);
    		int T = sc.nextInt();
    		Node head = null;
    		Node tail = null;
    		
    		for (int tc=1; tc<=T; tc++) {
    			int N = sc.nextInt();
    			for (int num=0; num<N; num++) {
    				
    				int value = sc.nextInt();
    				Node newNode = new Node(value);
    				if (num == 0) {
    					head = newNode;
    					tail = head;
    				} else {
    					tail.next = newNode;
    					newNode.prev = tail;
    					tail = newNode;
    				}
    			}
    			
    			Node ppnode = head;
    			while (ppnode != null) {
    				System.out.printf("%d ", ppnode.value);
    				ppnode= ppnode.next;
    			}
    			
    			Node nodes = head;
    			while (nodes.next != null) {
    				
    				Node compare = head;
    				while (compare.next != null) {
    					if (compare.value > nodes.value) {
    						if (compare == head) {
    							head = nodes;
    							System.out.println("실행됐다1");
    						} else {
    							compare.prev.next = nodes;
    							nodes.prev = compare.prev;
    							System.out.println("실행됐다2");
    						}
    						compare.prev = nodes;
    						nodes.next = compare;
    						tail = nodes;
    						System.out.println("실행됐다3 "+nodes.value);
    						break;
    					} else if (compare.next == null) {
    						tail.next = nodes;
    						nodes.prev = tail;
    						tail = nodes;
    						System.out.println("실행됐다4 "+tail.value);
    						break;
    					} compare = compare.next;
    					System.out.println("실행됐다5 "+tail.value);
    				} nodes = nodes.next;
    			}
    			
    			System.out.printf("#%d ", tc);
    			Node pnode = head;
    			while (pnode.next != null) {
    				System.out.printf("%d ", pnode.value);
    				pnode= pnode.next;
    			} System.out.println();
    		}
    	}
    }
    ```