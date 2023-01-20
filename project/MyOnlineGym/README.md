---
title: My Online Gym
permalink: /project/my-online-gym/
layout: page
sitemap: false
---
<head>
  <style>
    ul {
      margin-bottom: 0px;
    }
    div.explain {
      font-size: 14px;
      padding-left: 39px;
    }
  </style>
</head>

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 소개
- **주제** 운동 관련 웹사이트 제작 (삼성청년SW아카데미 관통 프로젝트)
- **기간** 2022.11.17 ~ 2022.11.25
- **팀명** MVC
- **팀원** 김민규 서지윤
- **서비스 기본 아이디어** 초보자를 위한 당장 시작하고, 오래 지속할 수 있는 운동 습관 만들기
- **핵심 기능** 이용자의 운동환경에 맞는 루틴 제공, 꾸준한 운동 습관을 위한 운동 일정 관리

## 역할
- <b>김민규(팀장)</b> 기획, 데이터 수집/제작/검수, 추천 알고리즘 설계, 발표
- [<b>서지윤(팀원)</b>](https://github.com/Jeeyoun-S) DB 구축, Rest API 구현, Frontend 구현, 배포

## 개발 환경
<ul>
  <li>
    <b>Frontend</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/vue2-4FC08D?style=flat&logo=vue.js&logoColor=white"> 
    <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=VisualStudioCode&logoColor=white"> 
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"> 
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"> 
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white"> 
    <img src="https://img.shields.io/badge/Vue Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white">
  </li>
</ul>
<div class="explain">
  7일 내에 프로젝트를 완성해야 했기에, 삼성청년SW아카데미에서 그동안 배웠던 Vue2로 프론트엔드 개발을 진행했습니다. vue에서 vuex와 router를 추가해 사용했고, vue bootstrap 라이브러리로 디자인했습니다.
</div>

<ul>
  <li>
    <b>Backend</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"> 
    <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat&logo=EclipseIDE&logoColor=white"> 
    <img src="https://img.shields.io/badge/Java8-007396?style=flat&logo=Java&logoColor=white"> 
    <img src="https://img.shields.io/badge/Apache Maven-C71A36?style=flat&logo=ApacheMaven&logoColor=white"> 
    <img src="https://img.shields.io/badge/Swagger3-85EA2D?style=flat&logo=Swagger&logoColor=white"> 
    <img src="https://img.shields.io/badge/MyBatis-000000?style=flat&logo=MyBatis&logoColor=white">
  </li>
</ul>
<div class="explain">
  7일 내에 프로젝트를 완성해야 했기에, 삼성청년SW아카데미에서 그동안 배웠던 Spring Boot로 백엔드 개발을 진행했습니다. Spring Tools 4 for Eclipse에서 개발을 진행했고, MyBatis를 이용해 DB와 연동했습니다.
</div>

<ul>
  <li>
    <b>Database</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"> 
    <img src="https://img.shields.io/badge/JSON-000000?style=flat&logo=JSON&logoColor=white">
  </li>
</ul>
<div class="explain">
  데이터베이스로 MySQL을 사용했습니다. 직접 데이터를 JSON 파일로 만들어 DB로 옮겨주거나 JSON 파일에서 바로 가져다 쓰는 방법도 사용했습니다. 
</div>

<ul>
  <li>
    <b>Database</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"> 
    <img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=GitLab&logoColor=white"> 
    <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white"> 
    <img src="https://img.shields.io/badge/Webex-353535?style=flat&logo=Webex&logoColor=white">
  </li>
</ul>
<div class="explain">
  삼성청년SW아카데미에서 제공하는 GitLab으로 버전 관리를 했으며, Backend와 Frontend 각각 repo를 생성했습니다. 그외에 Notion은 회의, 진행 상황, 문서 작성 시 사용했습니다. 온라인으로 소통할 경우, Discord와 Webex를 사용했습니다. 
</div>

<ul>
  <li>
    <b>Server</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Microsoft Azure VM-0078D4?style=flat&logo=MicrosoftAzure&logoColor=white"> 
    <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=Linux&logoColor=white"> 
    <img src="https://img.shields.io/badge/Powershell-5391FE?style=flat&logo=Powershell&logoColor=white">
  </li>
</ul>
<div class="explain">
  Azure VM으로 Linux 서버를 만들어 배포했습니다. 로컬에서는 Windows를 사용하고 있어, PowerShell로 서버와 연결해 배포 작업을 진행했습니다.
</div>


## 진행
- [일정](schedule)
- [기획](plan-and-design)
- [시스템 구조도](system-structure)
- [학습 노트](notes)

## 주요 기능
1. 운동 일정 관리 기능
2. 운동 영상 검색 기능
3. 운동 루틴 추천 기능
4. 건강기능식품 검색 기능
5. 회원 관리 기능
<video controls width="250">
    <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
</video>

## 개발 후기
1. Spring Boot에서 다양한 Open API를 사용하는 방법 학습
2. 많은 구현 방법 중 어떤 방법을 택할 것인가에 대한 고민의 필요성 깨달음
3. 사용자 UI/UX에 대한 학습 
4. 첫 웹 프로젝트 완성 및 Linux 서버 배포 방법을 학습
