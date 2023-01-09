---
title: Spring JPA 기초 다지기
date: 2023-01-03 00:00:00 +07:00
modified: 2023-01-03 00:00:00 +07:00
tags: [kabi-long-live-cuties, spring]
description: Spring JPA 기초 다지기
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### JPA란?

### application.properties 설정
```
# MySQL
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/(Database name)&characterEncoding=UTF-8
spring.datasource.username=(username)
spring.datasource.password=(password)
  
# JPA
spring.jpa.database=mysql
spring.jpa.open-in-view=false
  
# Hibernate
logging.level.org.hibernate.SQL=DEBUG
```

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

### Repository Interface
```java
// User : Entity Type
// String : Entity의 식별자 Type
public interface UserRepository extends Repository<User, String> {
  
  // findBy___ : ___으로 Entity 조회
  User findById(String email); // 해당 Entity가 없다면 null 반환
  Optional<User> findById(String email); // 해당 Entity가 없다면 empty Optional 반환
  
  // delete
  void delete(User user);
  void deleteById(String email); // findById() 실행 후, delete()
  
  
}
```

### 참고자료
- []()
- [inflearn JPA & Spring Data JPA 기초](https://www.inflearn.com/course/jpa-spring-data-%EA%B8%B0%EC%B4%88/dashboard)
