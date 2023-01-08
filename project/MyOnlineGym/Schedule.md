---
layout: page
title: 진행 일정
sitemap: false
permalink: /project/my-online-gym/schedule/
---
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
            font-size: 13px;
            margin: 0px;
        }
        .container .detail .type {
            font-weight: bolder;
            width: 30px;
        }
        .container .detail .plan {
            background-color: yellow;
            color: black;
        }
        .container .detail .db {
            background-color: pink;
            color: black;
        }
        .container .detail .person {
            font-style: italic;
        }
    </style>
</head>

<div class="container">
    <ul class="list">
        <li class="list-item">
            <div class="time">2022.11.17</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;아이디어 구상 및 기능 설계&emsp;
                <span class="person">-김민규</span>
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.18</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;아이디어 회의&emsp;
                <span class="person">-김민규, 서지윤</span>
            </div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;요구사항 명세서 작성&emsp;
                <span class="person">-김민규</span>
            </div>
            <div class="detail">
                <span class="type db">DB</span>
                &emsp;DB 설계 및 쿼리문 작성&emsp;
                <span class="person">-서지윤</span>
            </div>
        </li>
    </ul>
</div>