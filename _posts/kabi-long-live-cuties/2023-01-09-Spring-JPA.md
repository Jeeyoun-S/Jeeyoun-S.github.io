---
title: Spring JPA 기초 다지기
date: 2023-01-03 00:00:00 +07:00
modified: 2023-01-03 00:00:00 +07:00
tags: [kabi-long-live-cuties, spring]
description: Spring JPA 기초 다지기
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### Class - Table Mapping
```java
@Entity                // DB 테이블과 매핑할 대상
@Table(name = "user")  // user 테이블과 매핑
public class User {
  
  // user 테이블에서 email 컬럼, Id로 설정
  @Id
  private String email;
  
  // user 테이블에서 name 컬럼
  priavet String name;
  
  // user 테이블에서 create_date 컬럼을 createDate에 매핑
  @Column(name = "create_date")
  private LocalDateTime createDate;
}
```

