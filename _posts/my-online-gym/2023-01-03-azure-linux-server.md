---
title: Azure VM으로 Linux Server 배포하기
date: 2023-01-03 00:00:00 +07:00
modified: 2023-01-03 00:00:00 +07:00
tags: [my-online-gym, linux]
description: Azure VM으로 Linux Server 배포하기
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### Linux
1. 패키지 갱신 `sudo apt update`

### Linux Server 접속하기
1. 서버 연결 `ssh my-online-gym@172.174.120.196`
2. root 계정으로 이동 `sudo su -`

### MySQL로 이동
0. MySQL 기본 보안 명령어 `mysql_secure_installation`
1. root 계정으로 mysql 접속 `mysql -u root -p`
2. 서버 내의 sql 파일 실행
        ```powershell
        source /home/my-online-gym/sql/ssafit_schema.sql;
        ```
3. 종료 `exit`

### Linux 폴더
1. 내부 폴더 목록 확인 `ls`

### Linux 서버로 파일 옮기기
1. Local의 ssafit_schema.sql을 Server의 home/my-online-gym/sql로 복사
        ```powershell
        scp ssafit_schema.sql my-online-gym@172.174.120.196:/home/sql
        ```

### Java 설치하기
1. Java 설치 `sudo apt openjdk-8-jdk`
2. Java 설치 확인 `java -version`

### Spring Boot 배포하기
1. 프로젝트 배포 파일 .jar 생성하기
        `프로젝트 우클릭 > Run > Maven Build...`
2. `git clone (git repo 주소)`으로 서버에 파일 가져오기
3. `cd (project)\target`으로 폴더 이동
4. `java -jar (project)-0.0.1-SNAPSHOT.jar` 실행
5. 백그라운드 실행 시, `nohup java -jar (project)-0.0.1-SNAPSHOT.jar &`
6. 백그라운드 실행 확인 `cat nohup.out`

### Vue 배포하기
