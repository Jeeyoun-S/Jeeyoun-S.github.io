---
layout: page
title: My Online Gym
sitemap: false
permalink: /pjt/my-online-gym/
---

1. [기획](/pjt/my-online-gym/PlanAndDesign.md)

<head>
  <style>
    body{
    margin: 0;
    padding: 0;
    background-color:#ff6d6d;
    font-family: arial
    }
    .box{
        margin:0 10%;
        height: 630px;
        overflow: hidden;
        padding: 10px 0 40px 60px
    }
    .box ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: relative;
        transition: all 0.5s linear;
        top:0
    }
    .box ul:last-of-type{top:80px}
    .box ul:before{
        content: "";
        display: block;
        width: 0;
        height: 100%;
        border:1px dashed #fff;
        position: absolute;
        top:0;
        left:30px
    }
    .box ul li{
        margin: 20px 60px 60px;
        position: relative;
        padding: 10px 20px;
        background:rgba(255, 255, 255, 0.3);
        color:#fff;
        border-radius: 10px;
        line-height: 20px;
        width: 35%
    }
    .box ul li > span{
        content: "";
        display: block;
        width: 0;
        height: 100%;
        border:1px solid #fff;
        position: absolute;
        top:0;
        left:-30px
    }
    .box ul li > span:before,.box ul li > span:after{
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background:#ff6d6d;
        border:2px solid #fff;
        position: absolute;
        left:-7.5px
    }
    .box ul li > span:before{top:-10px}
    .box ul li > span:after{top:95%}
    .box .title{
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 5px
    }
    .box .info:first-letter{text-transform: capitalize;line-height: 1.7}
    .box .name{
        margin-top: 10px;
        text-transform: capitalize;
        font-style: italic;
        text-align: right;
        margin-right: 20px
    }
    .box .time span{
        position: absolute;
        left: -100px;
        color:#fff;
        font-size:80%;
        font-weight: bold;
    }
    .box .time span:first-child{top:-16px}
    .box .time span:last-child{top:94%}
    .arrow{
        position: absolute;
        top: 105%;
        left: 22%;
        cursor: pointer;
      height:20px;
      width:20px
    }
    .arrow:hover{
        -webkit-animation: arrow 1s linear infinite;
          -moz-animation: arrow 1s linear infinite;
            -o-animation: arrow 1s linear infinite;
                animation: arrow 1s linear infinite;
    }
    .box ul:last-of-type .arrow{
        position: absolute;
        top: 105%;
        left: 22%;
        transform: rotateX(180deg);
        cursor: pointer;
    }
    svg{
        width: 20px;
        height: 20px
    }
    @keyframes arrow{
        0%,100%{
            top:105%
        }
        50%{
            top:106%
        }
    }
    @-webkit-keyframes arrow{
        0%,100%{
            top:105%
        }
        50%{
            top:106%
        }
    }
    @-moz-keyframes arrow{
        0%,100%{
            top:105%
        }
        50%{
            top:106%
        }
    }
    @-o-keyframes arrow{
        0%,100%{
            top:105%
        }
        50%{
            top:106%
        }
    }
  </style>
  <script>
    var downArrow = document.getElementById("btn1");
    var upArrow = document.getElementById("btn2");
    downArrow.onclick = function () {
        'use strict';
        document.getElementById("first-list").style = "top:-620px";
        document.getElementById("second-list").style = "top:-620px";
        downArrow.style = "display:none";
        upArrow.style = "display:block";
    };
    upArrow.onclick = function () {
        'use strict';
        document.getElementById("first-list").style = "top:0";
        document.getElementById("second-list").style = "top:80px";
        upArrow.style = "display:none";
        downArrow.style = "display:block";
    };
    // creating my image link
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = "https://codepen.io/mo7hamed/pens/public";
    link.target = "_blank";
    var photo = document.createElement("img");
    link.appendChild(photo);
    photo.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1292524/profile/profile-80.jpg";
    photo.alt = "mo7amed";
    photo.style =
      "border-radius:50%;position:fixed;bottom:20px;right:20px;transition:all 0.5s ease";
    photo.onmouseover = function() {
      this.style.transform = "scale(1.1,1.1)";
      this.style.boxShadow = "5px 5px 15px #000";
    };
    photo.onmouseout = function() {
      this.style.transform = "scale(1,1)";
      this.style.boxShadow = "none";
    };
  </script>
</head>

## Project 소개
1. 기획 배경
    - 상황에 맞는 운동 루틴 추천
        * 기존 루틴을 활용해 웨이트 트레이닝을 하고 싶지만, 이미 짜여져 있는 루틴은 상황 여건에 따라 수행하기 어려운 경우가 많았습니다.
        * 이로 인해 각자 상황에 맞는 운동 루틴을 추천해 주는 서비스를 생각하게 됐습니다.
    - 건강기능식품에 대한 신뢰도 높은 정보 제공
        * 건강기능식품을 섭취하고 싶지만, 같은 기능의 건강기능식품 간의 비교가 어려웠습니다.
        * 또한, 과한 섭취 및 비인가 건강기능식품 구매의 우려가 있었습니다.
        * 식약처 인증이 돼 있는 건강기능식품의 정보를 모아볼 수 있는 서비스를 생각하게 됐습니다.

2. 목표
    - 운동 루틴 추천 기능 구현
        * 운동 장소, 운동 기구, 불편한 부위, 중점적으로 운동하고 싶은 부위를 간단하게 입력 받고 딱 맞는 루틴을 추천해주는 서비스 구현
        * 추천 받은 루틴에서 동작을 추가할 수 있고, 해당 루틴을 찜 목록에 저장할 수 있게 구현
    - 건강기능식품 검색 및 조회 기능 구현
        * 식약처 인증 건강기능 식품을 기능별로 검색해 정보를 조회하고 간편하게 구매할 수 있는 서비스 구현
        * 관심 있는 건강기능식품 찜할 수 있고, 구매할 수 있는 링크로 접속 가능하도록 구현
    - 운동 영상 조회 기능 구현
        * 운동 영상을 찾아보고, 리뷰를 남길 수 있는 서비스 구현
        * 찜 목록에 영상을 추가하고, 리뷰를 수정 및 삭제도 가능하도록 구현

3. 개발 환경
  - Frontend  
    <img src="https://img.shields.io/badge/vue.js2-4FC08D?style=flat&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=VisualStudioCode&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white">
  - Backend  
    <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"> <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat&logo=EclipseIDE&logoColor=white"> <img src="https://img.shields.io/badge/Java8-007396?style=flat&logo=Java&logoColor=white"> <img src="https://img.shields.io/badge/Apache Maven-C71A36?style=flat&logo=ApacheMaven&logoColor=white"> <img src="https://img.shields.io/badge/Swagger3-85EA2D?style=flat&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/mybatis-000000?style=flat&logo=MyBatis&logoColor=white">
  - Database  
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/JSON-000000?style=flat&logo=JSON&logoColor=white">
  - Tools  
    <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=GitLab&logoColor=white">
  - Server  
    <img src="https://img.shields.io/badge/Microsoft Azure-0078D4?style=flat&logo=MicrosoftAzure&logoColor=white"> <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=Ubuntu&logoColor=white"> <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=Linux&logoColor=white"> <img src="https://img.shields.io/badge/Powershell-5391FE?style=flat&logo=Powershell&logoColor=white">

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
<div class="box">
    <ul id="first-list">
        <li>
            <span></span>
            <div class="title">comment #01</div>
            <div class="info">the best animation , the best toturials you would ever see .</div>
            <div class="name">- dr. mohamed -</div>
            <div class="time">
                <span>JUN, 17<sup>th</sup></span>
                <span>12:00 AM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">summery #01</div>
            <div class="info">the best animation , the best toturials you would ever see here only . you can learn how to animate and how to use SVG . even else you can add your own animations .</div>
            <div class="name">- eng. amr -</div>
            <div class="time">
                <span>JUN, 29<sup>th</sup></span>
                <span>11:36 AM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">comment #02</div>
            <div class="info">the best animation , the best toturials you would ever see . what about canvas ?? do you like it ..</div>
            <div class="name">- dr. ahmed -</div>
            <div class="time">
                <span>FEB, 2<sup>nd</sup></span>
                <span>02:00 PM</span>
            </div>
        </li>
        <div class="arrow" id="btn1">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">
            <g>
                <g>
                    <path d="M135.899,167.877c1.902,1.902,4.093,2.851,6.567,2.851s4.661-0.948,6.562-2.851L282.082,34.829    c1.902-1.903,2.847-4.093,2.847-6.567s-0.951-4.665-2.847-6.567L267.808,7.417c-1.902-1.903-4.093-2.853-6.57-2.853    c-2.471,0-4.661,0.95-6.563,2.853L142.466,119.622L30.262,7.417c-1.903-1.903-4.093-2.853-6.567-2.853    c-2.475,0-4.665,0.95-6.567,2.853L2.856,21.695C0.95,23.597,0,25.784,0,28.262c0,2.478,0.953,4.665,2.856,6.567L135.899,167.877z" fill="#FFFFFF"/>
                    <path d="M267.808,117.053c-1.902-1.903-4.093-2.853-6.57-2.853c-2.471,0-4.661,0.95-6.563,2.853L142.466,229.257L30.262,117.05    c-1.903-1.903-4.093-2.853-6.567-2.853c-2.475,0-4.665,0.95-6.567,2.853L2.856,131.327C0.95,133.23,0,135.42,0,137.893    c0,2.474,0.953,4.665,2.856,6.57l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854l133.054-133.046    c1.902-1.903,2.847-4.093,2.847-6.565c0-2.474-0.951-4.661-2.847-6.567L267.808,117.053z" fill="#FFFFFF"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
        
    </div> 
    </ul>
        
        
    
    <ul id="second-list">
        <li>
            <span></span>
            <div class="title">comment #03</div>
            <div class="info">the best animation , the best toturials you would ever see .</div>
            <div class="name">- mohamed -</div>
            <div class="time">
                <span>MAR, 21<sup>st</sup></span>
                <span>03:49 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">summery #02</div>
            <div class="info">the best animation , the best toturials you would ever see here only . you can learn how to animate and how to use SVG . even else you can add your own animations .</div>
            <div class="name">- mohamed -</div>
            <div class="time">
                <span>MAY, 13<sup>rd</sup></span>
                <span>09:23 AM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">comment #04</div>
            <div class="info">the best animation , the best toturials you would ever see . what about canvas ?? do you like it ..</div>
            <div class="name">- mohamed -</div>
            <div class="time">
                <span>OCT, 15<sup>th</sup></span>
                <span>08:30 PM</span>
            </div>
        </li>
        
        <div class="arrow" id="btn2">
    
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">
            <g>
                <g>
                    <path d="M135.899,167.877c1.902,1.902,4.093,2.851,6.567,2.851s4.661-0.948,6.562-2.851L282.082,34.829    c1.902-1.903,2.847-4.093,2.847-6.567s-0.951-4.665-2.847-6.567L267.808,7.417c-1.902-1.903-4.093-2.853-6.57-2.853    c-2.471,0-4.661,0.95-6.563,2.853L142.466,119.622L30.262,7.417c-1.903-1.903-4.093-2.853-6.567-2.853    c-2.475,0-4.665,0.95-6.567,2.853L2.856,21.695C0.95,23.597,0,25.784,0,28.262c0,2.478,0.953,4.665,2.856,6.567L135.899,167.877z" fill="#FFFFFF"/>
                    <path d="M267.808,117.053c-1.902-1.903-4.093-2.853-6.57-2.853c-2.471,0-4.661,0.95-6.563,2.853L142.466,229.257L30.262,117.05    c-1.903-1.903-4.093-2.853-6.567-2.853c-2.475,0-4.665,0.95-6.567,2.853L2.856,131.327C0.95,133.23,0,135.42,0,137.893    c0,2.474,0.953,4.665,2.856,6.57l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854l133.054-133.046    c1.902-1.903,2.847-4.093,2.847-6.565c0-2.474-0.951-4.661-2.847-6.567L267.808,117.053z" fill="#FFFFFF"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
        
    </div>
    </ul>
    
    <script src="JavaScript/timeline-V2.js"></script>
</div>

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
