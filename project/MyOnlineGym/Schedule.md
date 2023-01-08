---
layout: page
title: 일정
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
            display:inline-block;
            width: 100px;
            font-weight: bolder;
        }
        .container .detail .plan {
            background-color: yellow;
            color: black;
        }
        .container .detail .db {
            background-color: pink;
            color: black;
        }
        .container .detail .front {
            background-color: green;
            color: black;
        }
        .container .detail .person {
            font-style: italic;
        }
    </style>
</head>

## 프로젝트 진행
<div class="container">
    <ul class="list">
        <li class="list-item">
            <div class="time">2022.11.17</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;아이디어 구상 및 기능 설계
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.18</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;아이디어 회의
            </div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;요구사항 명세서 작성
            </div>
            <div class="detail">
                <span class="type db">DB</span>
                &emsp;DB 설계 및 쿼리문 작성
            </div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;홈 화면 구현 및 전체 디자인 구상
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.19</div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;프로젝트 일정 회의
            </div>
            <div class="detail">
                <span class="type plan">기획</span>
                &emsp;목업 제작
            </div>
            <div class="detail">
                <span class="type data">데이터</span>
                &emsp;운동 상식 데이터 수집, JSON 제작
            </div>
            <div class="detail">
                <span class="type back">백엔드</span>
                &emsp;프로젝트 생성 및 회원 관련 API 구현
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.20</div>
            <div class="detail">
                <span class="type data">데이터</span>
                &emsp;운동 동작 데이터 수집, JSON 제작
            </div>
            <div class="detail">
                <span class="type back">백엔드</span>
                &emsp;영상 관련 API 구현
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.21</div>
            <div class="detail">
                <span class="type data">데이터</span>
                &emsp;운동 부위에 따른 기본 루틴 데이터 수집
            </div>
            <div class="detail">
                <span class="type back">백엔드</span>
                &emsp;건강기능식품, 일정 관련 API 구현
            </div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;일정 달력 페이지 구현
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.22</div>
            <div class="detail">
                <span class="type data">데이터</span>
                &emsp;운동 기본 루틴 JSON 제작
            </div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;회원 관련 페이지, 영상 관련 페이지 구현
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.23</div>
            <div class="detail">
                <span class="type data">데이터</span>
                &emsp;전체 JSON 데이터 정제
            </div>
            <div class="detail">
                <span class="type back">백엔드</span>
                &emsp;루틴 추천 관련 API 구현
            </div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;건강기능식품 관련 페이지, 찜 목록 페이지 구현
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.24</div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;루틴 추천 결과창 오류, 루틴 추가 오류, 리뷰 등록 즉각 반영 수정
            </div>
            <div class="detail">
                <span class="type presentation">발표</span>
                &emsp;PPT 제작 및 발표 준비
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.11.25</div>
            <div class="detail">
                <span class="type presentation">발표</span>
                &emsp;발표 진행
            </div>
        </li>
    </ul>
</div>

## 피드백 반영
<div class="container">
    <ul class="list">
        <li class="list-item">
            <div class="time">2022.12.05</div>
            <div class="detail">
                <span class="type back">백엔드</span>
                &emsp;Rest API 응답 형식 변경, Swagger 버전 변경, Swagger 응답 예시 추가
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.12.06</div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;건강기능식품·영상 상세 페이지 URL 수정, Rest API 응답 형식 맞춰 axios 수정
            </div>
        </li>
        <li class="list-item">
            <div class="time">2022.12.07</div>
            <div class="detail">
                <span class="type front">프론트엔드</span>
                &emsp;일정 추가·수정, 영상·건강기능식품·쇼핑몰 목록 UI 수정
            </div>
        </li>
    </ul>
</div>

## 배포
<div class="container">
    <ul class="list">
        <li class="list-item">
            <div class="time">2023.01.03</div>
            <div class="detail">
                <span class="type publish">배포</span>
                &emsp;Azure 가상 머신 생성, 배포 환경 세팅, DB 구축
            </div>
        </li>
        <li class="list-item">
            <div class="time">2023.01.08</div>
            <div class="detail">
                <span class="type publish">배포</span>
                &emsp;건강기능식품·영상 상세 페이지 URL 수정, Rest API 응답 형식 맞춰 axios 수정
            </div>
        </li>
    </ul>
</div>