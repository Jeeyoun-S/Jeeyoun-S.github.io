---
layout: page
title: Brute Force
hide_description: true
sitemap: false
---
1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 개념
- 한 칸씩 이동하며 패턴과 비교하고, 패턴이 있는지 전부 확인하는 방법
- 시간복잡도 최대 O(MN)
    - N : 문자열의 길이
    - M : 패턴의 길이

## 구현
1. While문 이용
    
    ```java
    public static int BruteForceWhile(String str, String pat) {
    	int s = 0;
    	int p = 0;
    	int cnt = 0;
    	
    	while (s<str.length() && p<pat.length()) {
    		if (str.charAt(s) != pat.charAt(p)) {
    			s -= p;
    			p = -1;
    		} else if (p == pat.length()-1) {
    			s -= p;
    			p = -1;
    			cnt += 1;
    		}
    		s++;
    		p++;
    	} return cnt;
    }
    ```
    
2. For문 이용
    
    ```java
    public static int BruteForceFor(String str, String pat) {
    	int cnt = 0;
    	
    	for (int s=0; s<str.length(); s++) {
    		for (int p=0; p<pat.length(); p++) {
    			if (str.charAt(s) != str.charAt(p)) {
    				break;
    			} else if (p == pat.length()-1) {
    				cnt += 1;
    				break;
    			}
    		}
    	} return cnt;
    }
    ```