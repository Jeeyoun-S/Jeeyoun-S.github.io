---
layout: page
title: String
sitemap: false
permalink: /study/data-structure/java/string/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 문자열 뒤집기 Reverse
```java
String txt = "Let`s Reverse String";
```

### 문자열 자리 바꾸기
```java
char[] txtlist = txt.toCharArray();
for (int i=0; i<txtlist.length/2; i++) {
	char tmp = txtlist[i];
	txtlist[i] = txtlist[txtlist.length-i-1];
	txtlist[txtlist.length-i-1] = tmp;
}
System.out.println(String.valueOf(txtlist));
```

### 새로운 문자열 만들기
```java
char[] txtlist = new char[txt.length()];
for (int i=txt.length()-1; i>=0; i--) {
	txtlist[txt.length()-1-i] = txt.charAt(i);
}
System.out.println(String.valueOf(txtlist));
```

### StringBuilder의 reverse()
```java
StringBuilder sb = new StringBuilder(txt);
StringBuilder sb_reverse = sb.reverse();
System.out.println(sb_reverse.toString());
```

### StringBuffer의 reverse()
```java
StringBuffer sb = new StringBuffer(txt);
StringBuffer sb_reverse = sb.reverse();
System.out.println(sb_reverse.toString());
```

## 형 변환 Type Casting
### String to Number
1. Integer.valueOf(String)
```java
System.out.println(Integer.valueOf(txt));
```

2. Integer.parseInt(String)
```java
System.out.println(Integer.parseInt(txt));
```

3. 함수
```java
public static int StringToInteger(String txt) {
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

### Number to String
1. String.valueOf(number)
```java
System.out.println(String.valueOf(num));
```

2. Integer.toString(number)
```java
System.out.println(Integer.toString(num));
```

3. 함수
```java
public static String IntToStr(int num) {
	StringBuilder sb = new StringBuilder();
	boolean minus = false;
	if (num < 0) {
			minus = true;
			num = -num;
	}
	while (num != 0) {
			sb.insert(0, num%10);
			num = num/10;
	}
	if (minus) sb.insert(0, '-');
	return sb.toString();
}
```