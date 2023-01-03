---
layout: page
title: 진행 일정
sitemap: false
permalink: /pjt/my-online-gym/schedule/
---
<head>
    <style>
        $container-shadow: 0.5rem 0.5rem 2rem 0 rgba(black, 0.2);
        $gutter: 30px;
        $border-width: 4px;
        $dot-diameter: 8px;
        body {
        background: linear-gradient(55deg,#4E75B9 30%,#5CBF98 90%);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 12vh 100px;
        font-family: 'Source Sans Pro', arial, sans-serif;
        font-weight: 300;
        color: #333;
        box-sizing: border-box;
        * {
            box-sizing: border-box;
        }
        }
        .timeline {
        width:100%;
        max-width:800px;
        background:#fff;
        padding: 100px 50px;
        position: relative;
        box-shadow: $container-shadow;
        &:before {
            content: '';
            position: absolute;
            top: 0px;
            left:calc(33% + 15px); //$gutter/2
            bottom: 0px;
            width: $border-width;
            background: #ddd;
        }
        &:after {
            content: "";
            display: table;
            clear: both;
        } 
        }
        .entry {
        clear: both;
        text-align: left;
        position: relative;
        .title {
            margin-bottom: .5em;
            float: left;
            width: 33%;
            padding-right: $gutter;
            text-align: right;
            position: relative;
            &:before {
            content: '';
            position: absolute;
            width: $dot-diameter;
            height: $dot-diameter;
            border: $border-width solid salmon;
            background-color:#fff;
            border-radius:100%;
            top: 15%;
            right: -$dot-diameter;
            z-index: 99;
            }
            h3 {
            margin: 0;
            font-size: 120%;
            }
            p {
            margin: 0;
            font-size: 100%;
            }
        }
        .body {
            margin: 0 0 3em;
            float: right;
            width: 66%;
            padding-left: $gutter;
            p {
            line-height: 1.4em;
            &:first-child {
                margin-top: 0;
                font-weight: 400;
            }
            }
            ul {
            color:#aaa;
            padding-left: 0;
            list-style-type: none;
            li:before {
                content: "–";
                margin-right: .5em;
            }
            }
        }
        }
    </style>
    <script></script>
</head>

<div class="timeline">
  <div class="entry">
    <div class="title">
      <h3>2014 - Present</h3>
      <p>Title, Company</p>
    </div>
    <div class="body">
      <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
      <ul>
        <li>Rerum sit libero possimus amet excepturi</li>
        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3>2010 - Present</h3>
      <p>Title, Company</p>
    </div>
    <div class="body">
      <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
      <ul>
        <li>Rerum sit libero possimus amet excepturi</li>
        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3>2009 - 2010</h3>
      <p>Title, Company</p>
    </div>
    <div class="body">
      <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
      <ul>
        <li>Rerum sit libero possimus amet excepturi</li>
        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3>2006 - 2008</h3>
      <p>Title, Company</p>
    </div>
    <div class="body">
      <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
      <ul>
        <li>Rerum sit libero possimus amet excepturi</li>
        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
      </ul>
    </div>
  </div>

</div>