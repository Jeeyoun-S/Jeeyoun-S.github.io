---
layout: page
title: My Online Gym
sitemap: false
permalink: /pjt/my-online-gym/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Project 소개
1. 기획 배경
  - 목적에 맞는 운동 루틴을 활용해 웨이트 트레이닝을 하고 싶지만, 이미 짜여져 있는 운동 루틴은 공간, 기구, 부상 부위 등의 이유로 수행하기 어려운 경우가 많았습니다. 이로 인해 각자 상황에 맞는 운동 루틴을 추천해 주는 서비스를 생각하게 됐습니다.
  - 건강기능식품을 섭취하고 싶지만, 같은 기능의 건강기능식품 간의 비교가 어려웠고, 과한 섭취 및 비인가 건강기능식품 구매의 우려가 있었습니다. 따라서 식약처 인증이 돼 있는 건강기능식품의 정보를 모아볼 수 있는 서비스를 생각하게 됐습니다.

2. 목표
  - 운동 장소, 운동 기구, 불편한 부위, 중점적으로 운동하고 싶은 부위를 간단하게 입력 받고 딱 맞는 루틴을 추천해주는 서비스 구현
  - 식약처 인증 건강기능 식품을 기능별로 검색해 정보를 조회하고 간편하게 구매할 수 있는 서비스 구현
  - 운동 영상을 찾아보고, 리뷰를 남길 수 있는 서비스 구현

3. 개발 환경
  - Frontend  
    <img src="https://img.shields.io/badge/vue.js2-4FC08D?style=flat&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=VisualStudioCode&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white">
  - Backend  
    <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"> <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat&logo=EclipseIDE&logoColor=white"> <img src="https://img.shields.io/badge/Java8-007396?style=flat&logo=Java&logoColor=white"> <img src="https://img.shields.io/badge/Apache Maven-C71A36?style=flat&logo=ApacheMaven&logoColor=white">
  - Database  
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/JSON-000000?style=flat&logo=JSON&logoColor=white">
  - Tools  
    <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=GitLab&logoColor=white">
  - Server  
    <img src="https://img.shields.io/badge/Microsoft Azure-0078D4?style=flat&logo=MicrosoftAzure&logoColor=white"> <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=Ubuntu&logoColor=white"> <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=Linux&logoColor=white">

## Team 'MVC'
- <b>김민규 (팀장)</b>
    1. 기획
    2. 데이터 수집/제작/검수
    3. 추천 알고리즘 설계
    4. 발표
- [<b>서지윤 (팀원)</b>](https://github.com/Jeeyoun-S)
    1. DB 구축
    2. Backend - Rest API 구현
    3. Frontend - 웹페이지 구현
    4. 배포

## 진행 일정
<table>
  <thead>
    <th>날짜</th>
    <th>분류</th>
    <th>일정</th>
  </thead>
  <tbody>
    <tr><td>11월 17일</td><td>기획</td><td>아이디어 및 기능 회의</td></tr>
    <tr><td rowspan="3">11월 18일</td><td>기획</td><td>목업 제작</td></tr>
                                         <tr><td>DB</td><td>DB 설계 및 쿼리문 작성</td></tr>
                                         <tr><td>프론트엔드</td><td>홈 화면 구현</td></tr>
    <tr><td>11월 19일</td><td>백엔드</td><td>프로젝트 생성 및 회원 관련 API 구현</td></tr>
    <tr><td>11월 20일</td><td>백엔드</td><td>영상 관련 API 구현</td></tr>
    <tr><td rowspan="2">11월 21일</td><td>백엔드</td><td>건강기능식품, 일정 관련 API 구현</td></tr>
                                         <tr><td>프론트엔드</td><td>일정 달력 페이지 구현</td></tr>
    <tr><td>11월 22일</td><td>프론트엔드</td><td>회원 관련 페이지, 영상 관련 페이지 구현</td></tr>
    <tr><td rowspan="2">11월 23일</td><td>백엔드</td><td>루틴 추천 관련 API 구현</td></tr>
                                         <tr><td>프론트엔드</td><td>건강기능식품 관련 페이지, 찜 목록 페이지 구현</td></tr>
    <tr><td rowspan="2">11월 24일</td><td>프론트엔드</td><td>루틴 추천 결과창 오류, 루틴 추가 오류, 리뷰 등록 즉각 반영 수정</td></tr>
                                         <tr><td>발표</td><td>PPT 제작 및 발표 준비</td></tr>
    <tr><td>11월 25일</td><td>발표</td><td>발표 진행</td></tr>
    <tr><td>12월 05일</td><td>백엔드</td><td>Rest API 응답 형식 변경, Swagger 버전 변경, Swagger 응답 예시 추가</td></tr>
    <tr><td>12월 06일</td><td>프론트엔드</td><td>건강기능식품·영상 상세 페이지 URL 수정, Rest API 응답 형식 맞춰 axios 수정</td></tr>
    <tr><td>12월 07일</td><td>프론트엔드</td><td>일정 추가·수정, 영상·건강기능식품·쇼핑몰 목록 UI 수정</td></tr>
    <tr><td>01월 02일</td><td>배포</td><td>Azure 가상 머신 생성, 배포 환경 세팅, DB 구축</td></tr>
  </tbody>
</table>

## 시스템 구조도
1. Database ERD
2. SpringBoot Class Diagram
3. Vue.js Structure

## 주요 기능
1. 운동 일정 관리 기능
2. 운동 영상 검색 기능
3. 운동 루틴 추천 기능
4. 건강기능식품 검색 기능

## 개발 후기
1. '운동 루틴 추천' 기능에서 루틴을 만드는 과정이 구현 방법에 대한 고민이 길어져 단순화되고, 변경된 부분이 많은데 이 부분이 많이 아쉽습니다.
2. 다양한 Open API를 사용하는 방법을 .
3. 기능을 구현하는 방법이 다양하고, 방법에 따라 결과물도 성능도 조금씩 달라져, 기능 구현 방법에 대한 고민이 많이 필요하다는 것을 느꼈습니다.
4. 그동안 실습을 통해 조금씩 구현해 본 적은 있지만, 이렇게 전체 프로젝트를 직접 기획해 만들어 보는 것은 처음이라 뿌듯하기도 하고, 아쉽기도 합니다.
