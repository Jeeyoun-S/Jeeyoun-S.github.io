---
layout: page
title: Concept of List
description: >
  Tell about List.
hide_description: true
sitemap: false
---

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