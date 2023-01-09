---
title: Spring JPA 기초 다지기 (1)
date: 2023-01-09 00:00:00 +07:00
modified: 2023-01-09 00:00:00 +07:00
tags: [kabi-long-live-cuties, spring]
description: Spring JPA 기초 다지기 (1)
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### JPA란?

### application.properties 설정
```
# MySQL
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/(database)
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
  User findById(String email); // Entity가 없다면 null 반환
  Optional<User> findById(String email); // Entity가 없다면 empty Optional 반환
  
  // delete : Entity 삭제
  void delete(User user);
  void deleteById(String email); // findById() 실행 후, delete()
  
  // save : Entity 저장
  void save(User user);
  User save(User user);
}
```

#### findBy____ 특정 조건으로 찾기
1. `findBy____`
    - 1개 특정값 `List<User> findByName(String name);`
    - 2개 이상 특정값 `List<User> findByNameAndAge(String name, int age);`
2. 조건 비교
    - `List<User> findByNameLike(String keyword);`
    - `List<User> findByCreatedAtAfter(LocalDateTime time);`
    - `List<User> findByCreatedAtBetween(int from, int to);`
    - `LessThan` `IsNull` `Containing` `In` 등
3. `findAll()` 모두 조회

#### order 정렬하기
1. `findBy___OrderBy_______` 
    - `List<User> findByNameLikeOrderByNameDesc(String word);`  
       = `SELECT * FROM db WHERE name LIKE word ORDER BY name DESC`
    - `List<User> findByNameLikeOrderByNameAscEmailAsc(String word);`  
      = `SELECT * FROM db WHERE name LIKE word ORDER BY name ASC email ASC`
2. `Sort`
    - 정렬 조건 1개
      ```java
      Sort sort = Sort.by(Sort.Order.asc("name"));
      List<User> user = userRepository.findByNameLike("김%", sort);
      ```
    - 정렬 조건 2개 이상
      ```java
      Sort sort = Sort.by(Sort.Order.asc("name"), Sort.Order.desc("age"));
      List<User> user = userRepository.findByNameLike("이%", sort);
      ```

#### Paging
- **Pageable** & **PageRequest**
    - 조회
      ```java
      // 한 페이지에 10개 기준으로 두 번째 페이지 조회 (page는 0부터 시작)
      Pageable pageable = PageRequest.ofSize(10).withPage(1);
      List<User> user = userRepository.findByNameLike("김%", pageable);
      ```
    - 조회 & 정렬
      ```java
      Sort sort = Sort.by(Sort.Order.asc("name"), Sort.Order.desc("email"));
      Pageable pageable = PageReuqest.ofSize(10).withPage(1).withSort(sort);
      List<User> user = userRepository.findByNameLike("박%", pageable);
      ```
- Page Type
    - 전체 페이지 개수, 전체 개수 등 페이징 처리에 필요한 값 제공
      ```java
      // Page Type으로 DB 정보 조회하기
      Pageable pageable = PageRequest.ofSize(10).withPage(0).withSort(sort);
      Page<User> page = userRepository.findByNameLike("%지%", pageable);
        
      // 전체 개수
      long totalElements = page.getTotalElements();
        
      // 전체 페이지 수
      long totalPages = page.getTotalPages();
        
      // 현재 페이지 결과 목록
      List<User> content = page.getContent();
        
      // 페이지 크기
      int size = page.getSize();
        
      // 현재 페이지
      int pageNumber = page.getNumber();
        
      // content의 개수
      int numberOfElements = page.getNumberOfElements();
      ```

#### save 동작 과정
1. **새로운 Entity인지 판단**
    - Persistable을 구현한 Entity
        ```java
        // Persistable 구현 예시
        @Entity
        @Table(name = "user")
        public class User implements Persistable<String> {
            @Transient
            private boolean isNew = true;
        }
        ```
    - @Version 속성 존재 & 버전 값 null
    - 식별자가 참조 타입 & null
    - 식별자가 숫자 타입 & 0  
    
    2. **새로운 Entity인 경우**   
        - EntityManager#persist() 실행  

    2. **새로운 Entity가 아닌 경우**  
        - EntityManager#merge() 실행  

### 참고자료
- []()
- [inflearn JPA & Spring Data JPA 기초](https://www.inflearn.com/course/jpa-spring-data-%EA%B8%B0%EC%B4%88/dashboard)
