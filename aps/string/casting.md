---
layout: page
title: Concept of List
description: >
  Tell about List.
hide_description: true
sitemap: false
---

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