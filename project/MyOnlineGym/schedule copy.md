---
layout: page
title: 진행 일정
sitemap: false
permalink: /project/my-online-gym/schedule/
---
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: white;
        }
        .box {
            margin:0 3%;
            overflow: hidden;
            padding: 10px 0 40px 60px
        }
        .box ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: relative;
            transition: all 0.5s linear;
            top:0
        }
        .box ul:last-of-type {top:80px}
        .box ul:before {
            content: "";
            display: block;
            width: 0;
            height: 100%;
            border:1px dashed black;
            position: absolute;
            top:0;
            left:30px
        }
        .box ul li {
            margin: 20px 5px 60px 60px;
            position: relative;
            padding: 10px 20px;
            background:rgba(255, 255, 255, 0.3);
            color: black;
            border-radius: 10px;
            line-height: 20px;
            width: 70%
        }
        .box ul li > span {
            content: "";
            display: block;
            width: 0;
            height: 100%;
            border:1px solid black;
            position: absolute;
            top:0;
            left:-30px
        }
        .box ul li > span:before,.box ul li > span:after {
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background:#ff6d6d;
            border:2px solid black;
            position: absolute;
            left:-7.5px
        }
        .box ul li > span:before {top:-10px}
        .box ul li > span:after {top:95%}
        .box .title {
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 5px
        }
        .box .info:first-letter {text-transform: capitalize;line-height: 1.7}
        .box .name{
            margin-top: 10px;
            text-transform: capitalize;
            font-style: italic;
            text-align: right;
            margin-right: 20px
        }
        .box .time span {
            position: absolute;
            left: -100px;
            color: black;
            font-size:80%;
            font-weight: bold;
        }
        .box .time span:first-child{top:-16px}
        .box .time span:last-child{top:94%}
        .arrow {
            position: absolute;
            top: 105%;
            left: 22%;
            cursor: pointer;
            height:20px;
            width:20px
        }
        .arrow:hover {
            -webkit-animation: arrow 1s linear infinite;
            -moz-animation: arrow 1s linear infinite;
                -o-animation: arrow 1s linear infinite;
                    animation: arrow 1s linear infinite;
        }
        .box ul:last-of-type .arrow {
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
            0%,100% {top:105%}
            50% {top:106%}
        }
        @-webkit-keyframes arrow{
            0%,100% {top:105%}
            50% {top:106%}
        }
        @-moz-keyframes arrow{
            0%,100% {top:105%}
            50% {top:106%}
        }
        @-o-keyframes arrow{
            0%,100% {top:105%}
            50% {top:106%}
        }
    </style>
    <script>
    </script>
</head>

<div class="box">
    <ul id="first-list">
        <li>
            <span></span>
            <div class="title">기획</div>
            <div class="info">아이디어 구상 및 기능 설계</div>
            <div class="name">- 김민규 -</div>
            <div class="time">
                <span>22.11.17</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">기획</div>
            <div class="info">요구사항 명세서 작성</div>
            <div class="name">- 김민규 -</div>
            <div class="title">DB</div>
            <div class="info">DB 설계 및 쿼리문 작성</div>
            <div class="name">- 서지윤 -</div>
            <div class="title">프론트엔드</div>
            <div class="info">홈 화면 구현 및 전체 디자인 구상</div>
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.11.18</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">기획</div>
            <div class="info">목업 제작</div>
            <div class="name">- 김민규 -</div>
            <div class="title">데이터</div>
            <div class="info">운동 상식 데이터 수집, JSON 제작</div>
            <div class="name">- 김민규 -</div>
            <div class="title">백엔드</div>
            <div class="info">프로젝트 생성 및 회원 관련 API 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.11.19</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">데이터</div>
            <div class="info">운동 동작 데이터 수집, JSON 제작</div>
            <div class="name">- 김민규 -</div>
            <div class="title">백엔드</div>
            <div class="info">영상 관련 API 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.11.20</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">데이터</div>
            <div class="info">운동 루틴 데이터 수집</div>
            <div class="name">- 김민규 -</div>
            <div class="title">백엔드</div>
            <div class="info">건강기능식품, 일정 관련 API 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="title">프론트엔드</div>
            <div class="info">일정 달력 페이지 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.11.21</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">데이터</div>
            <div class="info">운동 루틴 JSON 제작</div>
            <div class="name">- 김민규 -</div>
            <div class="title">프론트엔드</div>
            <div class="info">회원 관련 페이지, 영상 관련 페이지 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.11.22</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">데이터</div>
            <div class="info">전체 JSON 데이터 정제</div>
            <div class="name">- 김민규 -</div>
            <div class="title">백엔드</div>
            <div class="info">루틴 추천 관련 API 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="title">프론트엔드</div>
            <div class="info">건강기능식품 관련 페이지, 찜 목록 페이지 구현</div>
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.11.23</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">프론트엔드</div>
            <div class="info">루틴 추천 결과창 오류, 루틴 추가 오류, 리뷰 등록 즉각 반영 수정</div>
            <div class="name">- 서지윤 -</div>
            <div class="title">발표</div>
            <div class="info">PPT 제작 및 발표 준비</div>
            <div class="name">- 김민규 -</div>
            <div class="time">
                <span>22.11.24</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">발표</div>
            <div class="info">발표 진행</div>
            <div class="name">- 김민규 -</div>
            <div class="time">
                <span>22.11.25</span>
                <span>12:00 PM</span>
            </div>
        </li>
    </ul>
    <ul id="second-list">
        <li>
            <span></span>
            <div class="title">백엔드</div>
            <div class="info">Rest API 응답 형식 변경, Swagger 버전 변경, Swagger 응답 예시 추가
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.12.05</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">프론트엔드</div>
            <div class="info">건강기능식품·영상 상세 페이지 URL 수정, Rest API 응답 형식 맞춰 axios 수정
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.12.06</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">프론트엔드</div>
            <div class="info">일정 추가·수정, 영상·건강기능식품·쇼핑몰 목록 UI 수정
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>22.12.07</span>
                <span>06:00 PM</span>
            </div>
        </li>
        <li>
            <span></span>
            <div class="title">배포</div>
            <div class="info">Azure 가상 머신 생성, 배포 환경 세팅, DB 구축
            <div class="name">- 서지윤 -</div>
            <div class="time">
                <span>23.01.03</span>
                <span>06:00 PM</span>
            </div>
        </li>
    </ul>
</div>

<!-- <table>
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
</table> -->