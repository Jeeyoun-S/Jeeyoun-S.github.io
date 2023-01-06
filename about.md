---
title: About me
permalink: /about/
layout: page
excerpt: Hello peeps, I'm student of computer science from Banyuwangi, living in Jogjakarta. This blog for documentation about my programming journey, running on jekyll, hosting on netlify and using my own simple theme.
comments: false
---

<head>
  <style>
    /* RESET CSS FIRST */
    /* https://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section, main {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
    /* 	list-style: none; */
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    /* STYLES */
    /* --------------------------------

    Primary style

    -------------------------------- */
    html * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *, *:after, *:before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    body {
      font-size: 100%;
      font-family: "Droid Serif", serif;
      color: #7f8c97;
      background-color: #e9f0f5;
    }

    a {
      color: #acb7c0;
      text-decoration: none;
      font-family: "Open Sans", sans-serif;
    }

    img {
      max-width: 100%;
    }

    h1, h2 {
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
    }

    /* --------------------------------

    Modules - reusable parts of our design

    -------------------------------- */
    .status-container {
      /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
      width: 90%;
      max-width: 1170px;
      margin: 0 auto;
    }
    .status-container::after {
      /* clearfix */
      content: '';
      display: table;
      clear: both;
    }

    /* --------------------------------

    Main components

    -------------------------------- */
    header {
      height: 200px;
      line-height: 200px;
      text-align: center;
      background: #303e49;
    }
    header h1 {
      color: white;
      font-size: 18px;
      font-size: 1.125rem;
    }
    @media only screen and (min-width: 1170px) {
      header {
        height: 300px;
        line-height: 300px;
      }
      header h1 {
        font-size: 24px;
        font-size: 1.5rem;
      }
    }

    #status-timeline {
      position: relative;
      padding: 2em 0;
      margin-top: 2em;
      margin-bottom: 2em;
    }
    #status-timeline::before {
      /* this is the vertical line */
      content: '';
      position: absolute;
      top: 0;
      left: 18px;
      height: 100%;
      width: 4px;
      background: #d7e4ed;
    }
    @media only screen and (min-width: 1170px) {
      #status-timeline {
        margin-top: 3em;
        margin-bottom: 3em;
      }
      #status-timeline::before {
        left: 50%;
        margin-left: -2px;
      }
    }

    .status-timeline-block {
      position: relative;
      margin: 2em 0;
    }
    .status-timeline-block:after {
      content: "";
      display: table;
      clear: both;
    }
    .status-timeline-block:first-child {
      margin-top: 0;
    }
    .status-timeline-block:last-child {
      margin-bottom: 0;
    }
    @media only screen and (min-width: 1170px) {
      .status-timeline-block {
        margin: 4em 0;
      }
      .status-timeline-block:first-child {
        margin-top: 0;
      }
      .status-timeline-block:last-child {
        margin-bottom: 0;
      }
    }

    .status-timeline-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
    .status-timeline-img img {
      display: block;
      width: 24px;
      height: 24px;
      position: relative;
      left: 50%;
      top: 50%;
      margin-left: -12px;
      margin-top: -12px;
    }
    .status-timeline-img.status-picture {
      background: #75ce66;
    }
    .status-timeline-img.status-movie {
      background: #c03b44;
    }
    .status-timeline-img.status-location {
      background: #f0ca45;
    }
    @media only screen and (min-width: 1170px) {
      .status-timeline-img {
        width: 60px;
        height: 60px;
        left: 50%;
        margin-left: -30px;
        /* Force Hardware Acceleration in WebKit */
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
      }
      .cssanimations .status-timeline-img.is-hidden {
        visibility: hidden;
      }
      .cssanimations .status-timeline-img.bounce-in {
        visibility: visible;
        -webkit-animation: status-bounce-1 0.6s;
        -moz-animation: status-bounce-1 0.6s;
        animation: status-bounce-1 0.6s;
      }
    }

    @-webkit-keyframes status-bounce-1 {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.5);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale(1.2);
      }

      100% {
        -webkit-transform: scale(1);
      }
    }
    @-moz-keyframes status-bounce-1 {
      0% {
        opacity: 0;
        -moz-transform: scale(0.5);
      }

      60% {
        opacity: 1;
        -moz-transform: scale(1.2);
      }

      100% {
        -moz-transform: scale(1);
      }
    }
    @keyframes status-bounce-1 {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        -ms-transform: scale(0.5);
        -o-transform: scale(0.5);
        transform: scale(0.5);
      }

      60% {
        opacity: 1;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
      }

      100% {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
      }
    }
    .status-timeline-content {
      position: relative;
      margin-left: 60px;
      background: white;
      border-radius: 0.25em;
      padding: 1em;
      box-shadow: 0 3px 0 #d7e4ed;
    }
    .status-timeline-content:after {
      content: "";
      display: table;
      clear: both;
    }
    .status-timeline-content h2 {
      color: #303e49;
    }
    .status-timeline-content p, .status-timeline-content ul, .status-timeline-content .status-read-more, .status-timeline-content .status-date {
      font-size: 13px;
      font-size: 0.8125rem;
    }
    .status-timeline-content .status-read-more, .status-timeline-content .status-date {
      display: inline-block;
    }
    .status-timeline-content p {
      margin: 1em 0;
      line-height: 1.6;
    }
    .status-timeline-content ul {
      margin: 1em 0;
      line-height: 1.6;
    }
    .status-timeline-content .status-read-more {
      float: right;
      padding: .8em 1em;
      background: #acb7c0;
      color: white;
      border-radius: 0.25em;
    }
    .no-touch .status-timeline-content .status-read-more:hover {
      background-color: #bac4cb;
    }
    .status-timeline-content .status-date {
      float: left;
      padding: .8em 0;
      opacity: .7;
    }
    .status-timeline-content::before {
      content: '';
      position: absolute;
      top: 16px;
      right: 100%;
      height: 0;
      width: 0;
      border: 7px solid transparent;
      border-right: 7px solid white;
    }
    @media only screen and (min-width: 768px) {
      .status-timeline-content h2 {
        font-size: 20px;
        font-size: 1.25rem;
      }
      .status-timeline-content p {
        font-size: 16px;
        font-size: 1rem;
      }
      .status-timeline-content .status-read-more, .status-timeline-content .status-date {
        font-size: 14px;
        font-size: 0.875rem;
      }
    }
    @media only screen and (min-width: 1170px) {
      .status-timeline-content {
        margin-left: 0;
        padding: 1.6em;
        width: 45%;
      }
      .status-timeline-content::before {
        top: 24px;
        left: 100%;
        border-color: transparent;
        border-left-color: white;
      }
      .status-timeline-content .status-read-more {
        float: left;
      }
      .status-timeline-content .status-date {
        position: absolute;
        width: 100%;
        left: 122%;
        top: 6px;
        font-size: 16px;
        font-size: 1rem;
      }
      .status-timeline-block:nth-child(even) .status-timeline-content {
        float: right;
      }
      .status-timeline-block:nth-child(even) .status-timeline-content::before {
        top: 24px;
        left: auto;
        right: 100%;
        border-color: transparent;
        border-right-color: white;
      }
      .status-timeline-block:nth-child(even) .status-timeline-content .status-read-more {
        float: right;
      }
      .status-timeline-block:nth-child(even) .status-timeline-content .status-date {
        left: auto;
        right: 122%;
        text-align: right;
      }
      .cssanimations .status-timeline-content.is-hidden {
        visibility: hidden;
      }
      .cssanimations .status-timeline-content.bounce-in {
        visibility: visible;
        -webkit-animation: status-bounce-2 0.6s;
        -moz-animation: status-bounce-2 0.6s;
        animation: status-bounce-2 0.6s;
      }
    }

    @media only screen and (min-width: 1170px) {
      /* inverse bounce effect on even content blocks */
      .cssanimations .status-timeline-block:nth-child(even) .status-timeline-content.bounce-in {
        -webkit-animation: status-bounce-2-inverse 0.6s;
        -moz-animation: status-bounce-2-inverse 0.6s;
        animation: status-bounce-2-inverse 0.6s;
      }
    }
    @-webkit-keyframes status-bounce-2 {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-100px);
      }

      60% {
        opacity: 1;
        -webkit-transform: translateX(20px);
      }

      100% {
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes status-bounce-2 {
      0% {
        opacity: 0;
        -moz-transform: translateX(-100px);
      }

      60% {
        opacity: 1;
        -moz-transform: translateX(20px);
      }

      100% {
        -moz-transform: translateX(0);
      }
    }
    @keyframes status-bounce-2 {
      0% {
        opacity: 0;
        -webkit-transform: translateX(-100px);
        -moz-transform: translateX(-100px);
        -ms-transform: translateX(-100px);
        -o-transform: translateX(-100px);
        transform: translateX(-100px);
      }

      60% {
        opacity: 1;
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        -ms-transform: translateX(20px);
        -o-transform: translateX(20px);
        transform: translateX(20px);
      }

      100% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
      }
    }
    @-webkit-keyframes status-bounce-2-inverse {
      0% {
        opacity: 0;
        -webkit-transform: translateX(100px);
      }

      60% {
        opacity: 1;
        -webkit-transform: translateX(-20px);
      }

      100% {
        -webkit-transform: translateX(0);
      }
    }
    @-moz-keyframes status-bounce-2-inverse {
      0% {
        opacity: 0;
        -moz-transform: translateX(100px);
      }

      60% {
        opacity: 1;
        -moz-transform: translateX(-20px);
      }

      100% {
        -moz-transform: translateX(0);
      }
    }
    @keyframes status-bounce-2-inverse {
      0% {
        opacity: 0;
        -webkit-transform: translateX(100px);
        -moz-transform: translateX(100px);
        -ms-transform: translateX(100px);
        -o-transform: translateX(100px);
        transform: translateX(100px);
      }

      60% {
        opacity: 1;
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        -ms-transform: translateX(-20px);
        -o-transform: translateX(-20px);
        transform: translateX(-20px);
      }

      100% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
      }
    }
  </style>
</head>

## Education

## Project

## Tech Skills

## Certificate

## Awards

## Activities

<header>
	<h1>Vertical Timeline</h1>
</header>

<section id="status-timeline" class="status-container">
	<div class="status-timeline-block">
		<div class="status-timeline-img status-picture">
<!-- 			<img src="img/status-icon-picture.svg" alt="Picture"> -->
		</div> <!-- status-timeline-img -->

		<div class="status-timeline-content">
			<h2>February 8th, 2016</h2>
<!-- 			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p> -->
			<ul>
				<li><strike>Drink water</strike></li>
				<li><strike>Go for a walk</strike></li>
				<li><strike>Apply to an open position</strike></li>
			</ul>
			<a href="#0" class="status-read-more">Read more</a>
			<span class="status-date">Jan 14</span>
		</div> <!-- status-timeline-content -->
	</div> <!-- status-timeline-block -->

	<div class="status-timeline-block">
		<div class="status-timeline-img status-movie">
<!-- 			<img src="img/status-icon-movie.svg" alt="Movie"> -->
		</div> <!-- status-timeline-img -->

		<div class="status-timeline-content">
			<h2>Title of section 2</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
			<a href="#0" class="status-read-more">Read more</a>
			<span class="status-date">Jan 18</span>
		</div> <!-- status-timeline-content -->
	</div> <!-- status-timeline-block -->

	<div class="status-timeline-block">
		<div class="status-timeline-img status-picture">
<!-- 			<img src="img/status-icon-picture.svg" alt="Picture"> -->
		</div> <!-- status-timeline-img -->

		<div class="status-timeline-content">
			<h2>Title of section 3</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
			<a href="#0" class="status-read-more">Read more</a>
			<span class="status-date">Jan 24</span>
		</div> <!-- status-timeline-content -->
	</div> <!-- status-timeline-block -->

	<div class="status-timeline-block">
		<div class="status-timeline-img status-location">
<!-- 			<img src="img/status-icon-location.svg" alt="Location"> -->
		</div> <!-- status-timeline-img -->

		<div class="status-timeline-content">
			<h2>Title of section 4</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
			<a href="#0" class="status-read-more">Read more</a>
			<span class="status-date">Feb 14</span>
		</div> <!-- status-timeline-content -->
	</div> <!-- status-timeline-block -->

	<div class="status-timeline-block">
		<div class="status-timeline-img status-location">
<!-- 			<img src="img/status-icon-location.svg" alt="Location"> -->
		</div> <!-- status-timeline-img -->

		<div class="status-timeline-content">
			<h2>Title of section 5</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
			<a href="#0" class="status-read-more">Read more</a>
			<span class="status-date">Feb 18</span>
		</div> <!-- status-timeline-content -->
	</div> <!-- status-timeline-block -->

	<div class="status-timeline-block">
		<div class="status-timeline-img status-movie">
<!-- 			<img src="img/status-icon-movie.svg" alt="Movie"> -->
		</div> <!-- status-timeline-img -->

		<div class="status-timeline-content">
			<h2>Final Section</h2>
			<p>This is the content of the last section</p>
			<span class="status-date">Feb 26</span>
		</div> <!-- status-timeline-content -->
	</div> <!-- status-timeline-block -->
</section> <!-- status-timeline -->

He's a student from Banyuwangi, living in Jogjakarta. the blog for documentation about his programming 🎒 journey, running on jekyll, hosting on [now.sh](http://now.sh) and using his own theme, he name it <a href="https://github.com/piharpi/jekyll-klise" target="_blank" rel="noopener">klisé</a>, he also loves to learning web technology; but he often forgot, that a reason why him doing the writing.

If you have a question about him or else, just send a letter to him.

You can [report](http://github.com/piharpi/jekyll-klise/issues/new) if there is an broken link(s) or somethings else.

**may u needs ✨**
- {{ site.author.email }}
- github.com/{{ site.author.github }}
