---
title: Simulated Stock App
permalink: /project/simulated-stock-app/
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
    a::after {
      display: none;  
    }
  </style>
</head>

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 소개
- **주제** 모의투식투자 안드로이드 앱 개발
- **기간** 2022.09.29 ~ ing
- **팀원** 권영우 김수빈 서다경 서지윤 임혜진
- **서비스 기본 아이디어** 주식 정보를 조회할 수 있고, 주식 투자를 체험할 수 있는 앱
- **핵심 기능** 모의 주식 및 외환 매매, 주식 정보 조회, 주식 종목 추천
- **GitHub** <a href="https://github.com/subin3277/StockApp" target="_blank">Frontend</a>, <a href="https://github.com/hjlim7831/StockAppServer" target="_blank">Backend</a>

## 역할
<img src="/project/SimulatedStockApp/image/Team.png" alt="Team"/>

## 개발 환경
<ul>
  <li>
    <b>Frontend</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Android Studio-3DDC84?style=flat&logo=AndroidStudio&logoColor=white">
  </li>
</ul>
<div class="explain">
  안드로이드 앱 개발을 위해 Android Studio를 사용했으며, 언어는 Java를 이용했습니다.
</div>

<ul class="not-start">
  <li>
    <b>Backend</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"> 
    <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat&logo=EclipseIDE&logoColor=white"> 
    <img src="https://img.shields.io/badge/Java8-007396?style=flat&logo=Java&logoColor=white"> 
    <img src="https://img.shields.io/badge/Gradle-C71A36?style=flat&logo=Gradle&logoColor=white"> 
    <img src="https://img.shields.io/badge/Swagger2-85EA2D?style=flat&logo=Swagger&logoColor=white"> 
    <img src="https://img.shields.io/badge/MyBatis-000000?style=flat&logo=MyBatis&logoColor=white">
  </li>
</ul>
<div class="explain not-start">
  Rest API 개발을 위해 Spring Boot를 사용했습니다. MyBatis로 Query문을 작성해 DB에서 데이터를 가져왔고, Swagger를 이용해 API 테스트를 진행했습니다.
</div>

<ul class="not-start">
  <li>
    <b>Database</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white">  
  </li>
</ul>
<div class="explain not-start">
  MySQL를 사용해 DB를 구축했습니다.
</div>

<ul class="not-start">
  <li>
    <b>Tools</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"> 
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white">
    <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white">
  </li>
</ul>
<div class="explain not-start">
  GitHub에 코드를 올리고, 버전 관리를 했습니다. 또한, Notion 페이지에 진행 상황을 기록하고, 기획안을 작성했습니다. 온라인으로 소통할 때는 Discord를 사용했습니다.
</div>

<ul class="not-start">
  <li>
    <b>Server</b>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat&logo=AmazonEC2&logoColor=white"> 
    <img src="https://img.shields.io/badge/Windows-0078D6?style=flat&logo=Windows&logoColor=white">
  </li>
</ul>
<div class="explain not-start">
  DB 서버와 앱 서버를 따로 구축해서 사용했으며, Windows 서버로 배포했습니다.
</div>

## 진행
- [일정](schedule)
- [기획](plan-and-design)
- [시스템 구조도](system-structure)
- [학습 노트](notes)

## 주요 기능

## 개발 후기
