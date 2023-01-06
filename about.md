---
title: About me
permalink: /about/
layout: page
excerpt: Hello peeps, I'm student of computer science from Banyuwangi, living in Jogjakarta. This blog for documentation about my programming journey, running on jekyll, hosting on netlify and using my own simple theme.
comments: false
---

<head>
  <style> 
    @mixin tablet-and-up {
        @media screen and (min-width: 769px) { @content; }
    }
    @mixin mobile-and-up {
        @media screen and (min-width: 601px) { @content; }
    }
    @mixin tablet-and-down  {
        @media screen and (max-width: 768px) { @content; }
    }
    @mixin mobile-only {
        @media screen and (max-width: 600px) { @content; }
    }


    .container ul, li{
      list-style: none;
      padding: 0;
    }

    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      background: linear-gradient(45deg, #209cff, #68e0cf);
      padding: 3rem 0;
    }
    .wrapper{
      background: #eaf6ff;
      padding: 2rem;
      border-radius: 15px;
    }
    .container h1{
      font-size: 1.1rem;
      font-family: sans-serif;
    }
    .sessions{
      margin-top: 2rem;
      border-radius: 12px;
      position: relative;
    }
    .container li{
      padding-bottom: 1.5rem;
      border-left: 1px solid #abaaed;
      position: relative;
      padding-left: 20px;
      margin-left: 10px;
      &:last-child{
        border: 0px;
        padding-bottom: 0;
      }
      &:before{
        content: '';
        width: 15px;
        height: 15px;
        background: white;
        border: 1px solid #4e5ed3;
        box-shadow: 3px 3px 0px #bab5f8;
        box-shadow: 3px 3px 0px #bab5f8;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: 0px;
      }
    }
    .time{
      color: #2a2839;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      @include mobile-and-up{
        font-size: .9rem;
      }
      @include mobile-only{
        margin-bottom: .3rem;
        font-size: 0.85rem;
      }

    }
    .container p{
      color: #4f4f4f;
          font-family: sans-serif;
      line-height: 1.5;
      margin-top:0.4rem;
      @include mobile-only{
        font-size: .9rem;
      }
    }
  </style>
</head>

## Education
<div class="container">
  <div class="wrapper">
    <ul class="sessions">
      <li>
        <div class="time">2018.03 - 2022.02</div>
        <p>세종대학교 호텔관광경영학, 응용통계학</p>
      </li>
      <li>
        <div class="time">2022.07 - ing</div>
        <p>삼성청년SW아카데미 SSAFY 8기, 비전공 JAVA Track</p>
      </li>
    </ul>
  </div>
</div>

## Project

## Tech Skills

## Certificate

## Awards

## Activities

He's a student from Banyuwangi, living in Jogjakarta. the blog for documentation about his programming 🎒 journey, running on jekyll, hosting on [now.sh](http://now.sh) and using his own theme, he name it <a href="https://github.com/piharpi/jekyll-klise" target="_blank" rel="noopener">klisé</a>, he also loves to learning web technology; but he often forgot, that a reason why him doing the writing.

If you have a question about him or else, just send a letter to him.

You can [report](http://github.com/piharpi/jekyll-klise/issues/new) if there is an broken link(s) or somethings else.

**may u needs ✨**
- {{ site.author.email }}
- github.com/{{ site.author.github }}
