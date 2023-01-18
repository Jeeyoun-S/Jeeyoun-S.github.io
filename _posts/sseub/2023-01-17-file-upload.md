---
title: Spring Boot에서 파일 업로드 구현하기
date: 2023-01-17 00:00:00 +07:00
modified: 2023-01-17 00:00:00 +07:00
tags: [ssueb]
description: Spring Boot에서 파일 업로드 구현하기
---

0. this unordered seed list will be replaced by toc as unordered list
{:toc}


## 파일 저장하기
```java
// 전달 받은 이미지 파일 가져오기
MultipartFile image = ;

// 파일 이름 가져오기
String filename = image.getOriginalFilename();

// 파일 이름에서 확장자만 가져오기
String extension = filename.substring(filename.lastIndexOf("."));

// UUID로 파일명 새로 생성하기
filename = UUID.randomUUID().toString() + extension;

// 저장 경로 설정하기
String path = "C:\\Users";

// File 객체 생성하기
File file = new File(path, filename);

// 1. 파일을 복사해서 넣는 방법
try {
  FileCopyUtils.copy(image.getBytes(), file);
} catch (IOException e) {
  e.printStackTrace();
}
				
// 2. 파일을 옮기는 방법
try {
  image.transferTo(file);
} catch (IllegalStateException e) {
  e.printStackTrace();
} catch (IOException e) {
  e.printStackTrace();
}
```
