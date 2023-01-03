---
layout: page
title: 진행 일정
sitemap: false
permalink: /pjt/my-online-gym/schedule/
---
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: white;
        }
        .box {
            margin:0 10%;
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
            margin: 20px 60px 60px;
            position: relative;
            padding: 10px 20px;
            background:rgba(255, 255, 255, 0.3);
            color: black;
            border-radius: 10px;
            line-height: 20px;
            width: 35%
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