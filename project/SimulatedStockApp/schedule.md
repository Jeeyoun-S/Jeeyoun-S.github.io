---
layout: page
title: 일정
sitemap: false
permalink: /project/simulated-stock-app/schedule/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

<head>
    <style>
        .container ul.inside {
            list-style: disc;
            font-size: 13px;
            margin: 0px;
            padding-left: 26px;
        }
        .container ul.list, li.list-item {
            list-style: none;
            padding: 0;
        }
        .container ul.list li.list-item {
            padding-bottom: 1.5rem;
            border-left: 1px solid #A6A6A6;
            position: relative;
            padding-left: 20px;
            margin-left: 10px;
        }
        .container ul.list li.list-item:last-child {
            border: 0px;
            padding-bottom: 0;
        }
        .container ul.list li.list-item:before {
            content: '';
            width: 15px;
            height: 15px;
            background: white;
            border: 1px solid #000000;
            box-shadow: 3px 3px 0px #A6A6A6;
            border-radius: 50%;
            position: absolute;
            left: -10px;
            top: 0px;
        }
        .container .time {
            font-weight: bolder;
        }
        .container .detail {
            font-size: 14px;
            margin: 0px;
        }
        .container .detail .type {
            display:inline-block;
            width: 90px;
            text-align: center;
            font-weight: bolder;
            color: black;
        }
        .container .detail .plan {
            background-color: #FF7E37;
        }
        .container .detail .meeting {
            background-color: #FF5E00;
        }
        .container .detail .crawl {
            background-color: #FFBB00;
        }
        .container .detail. db {
            background-color: #FFCF01;
        }
        .container .detail .front {
            background-color: #FFE400;
        }
        .container .detail .data {
            background-color: #ABF200;
        }
        .container .detail .back {
            background-color: #1DDB16;
        }
        .container .detail .presentation {
            background-color: #9FC93C;
        }
        .container .detail .publish {
            background-color: #C4B73B;
            color: black;
        }
        .container .detail .person {
            font-style: italic;
        }
    </style>
</head>

## 기획 및 DB 구축
<div class="container">
    <ul class="list">
        <li class="list-item">
            <div class="time">2022.09.29</div>
            <div class="detail">
                <span class="type meeting">회의</span>
                &emsp;아이디어 회의, 기획 역할 분담
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.09.30</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;요구사항 정의서 작성
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.01</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;요구사항 명세서 작성
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.01</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;스토리보드 제작
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.02</div>
            <div class="detail">
                <span class="type crawl">크롤링</span>
                &emsp;주식 정보, 뉴스 크롤링 코드 작성
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.04</div>
            <div class="detail">
                <span class="type meeting">회의</span>
                &emsp;각 팀 진행상황 및 계획 공유
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.06</div>
            <div class="detail">
                <span class="type crawl">크롤링</span>
                &emsp;실시간 주가, 상장 예정주식 크롤링 코드 작성
            </div>
            <div class="detail">
                <span class="type db">DB</span>
                &emsp;주가 ERD 설계
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.07</div>
            <div class="detail">
                <span class="type db">DB</span>
                &emsp;ERD 초안 작성
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.10.10</div>
            <div class="detail">
                <span class="type db">DB</span>
                &emsp;ERD 초안 작성
            </div>
        </li>
    </ul>
</div>

## APP 개발
