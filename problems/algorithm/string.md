---
layout: page
title: String
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 문자열
### 컴퓨터의 문자 표현
- 아스키 코드 ASCII Code
    - 7bit → 128문자 (95개 출력 가능, 33개 출력 불가능)
    - `0` 48, `A` 65, `a` 97
- 유니코드
    - UTF-8, UTF-16, UTF-32

### 문자열의 분류
- fixed length
- variable length
    - length controlled → JAVA의 문자열
    - delimited

### 문자열 뒤집기
1. 문자열 자리 바꾸기
    
    ```java
    char[] txtlist = txt.toCharArray();
    for (int i=0; i<txtlist.length/2; i++) {
    	char tmp = txtlist[i];
    	txtlist[i] = txtlist[txtlist.length-i-1];
    	txtlist[txtlist.length-i-1] = tmp;
    }
    System.out.println(String.valueOf(txtlist));
    ```
    
2. 새로운 문자열에 뒤에서부터 넣기
    
    ```java
    char[] txtlist = new char[txt.length()];
    for (int i=txt.length()-1; i>=0; i--) {
    	txtlist[txt.length()-1-i] = txt.charAt(i);
    }
    System.out.println(String.valueOf(txtlist));
    ```
    
3. StringBuilder 사용하기
    
    ```java
    StringBuilder sb = new StringBuilder(txt);
    StringBuilder txtreverse = sb.reverse();
    
    System.out.println(txtreverse.toString());
    ```
    
4. StringBuffer 사용하기
    
    ```java
    StringBuffer sb = new StringBuffer(txt);
    StringBuffer txtreverse = sb.reverse();
    
    System.out.println(txtreverse.toString());
    ```

### 문자열 → 숫자
1. `System.out.println(Integer.valueOf(txt));`
2. `System.out.println(Integer.parseInt(txt));`
3. 함수 구현 *(음수도 처리)*
    
    ```java
    public static int StrToInt(String txt) {
    	int num = 0;
    	int rlt = 0;
    	boolean minus = false;
    	
    	for (int i=0; i<txt.length(); i++) {
    		char ea = txt.charAt(i);
    		if (ea >= '0' && ea <= '9') {
    			num = ea - '0';
    		} else if (ea == '-') {
    			minus = true;
    		} else {
    			break;
    		}
    		rlt = (rlt*10)+num;
    	}
    	
    	if (minus) {return -rlt;}
    	else {return rlt;}
    }
    ```
    

### 숫자 → 문자열
1. `System.out.println(String.valueOf(num));`
2. `System.out.println(Integer.toString(num));`
3. 함수 구현 *(음수도 처리)*
    
    ```java
    public static String IntToStr(int num) {
    	StringBuilder sb = new StringBuilder();
    	
    	if (num < 0) {
    		sb.append('-');
    		num = -num;
    	}
    	
    	while (num != 0) {
    		sb.insert(1, num%10);
    		num = num/10;
    	}
    
    	return sb.toString();
    }
    ```
    

## 패턴 매칭 Pattern Matching
- N : 문자열의 길이
- M : 패턴의 길이

### 고지식한 알고리즘 Brute Force
- 한 칸씩 이동하며 패턴과 비교하고, 패턴이 있는지 전부 확인하는 방법
- 시간복잡도 최대 O(MN)
- While문 이용
    
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
    
- For문 이용
    
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

### 라빈-카프 알고리즘 Rabin-Karp

### KMP 알고리즘 Knuth-Morris-Pratt

### 보이어-무어 알고리즘 Boyer-Moore
