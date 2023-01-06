---
title: About me
permalink: /about/
layout: page
excerpt: Hello peeps, I'm student of computer science from Banyuwangi, living in Jogjakarta. This blog for documentation about my programming journey, running on jekyll, hosting on netlify and using my own simple theme.
comments: false
---

<head>
  <style> 
    @import url(https://fonts.googleapis.com/css?family=Merriweather:400,700,900);
    $fontstack_heading: "Merriweather", sans-serif;
    $fontstack_body: "Merriweather", sans-serif;
    #timeline {
      font-size:100%;
      line-height:1.6;
    }
    #timeline .block-content {
      min-height:100vh;
    }
    #timeline .block-content p {
      font-size:1.1em;
      line-height:1.5;
      -webkit-font-smoothing:antialiased;
      margin:0 auto 1em auto;
    }
    #timeline .block-content h2 {

      text-align:center;
      margin:1em 0 0 0;
      font-size:2.5em;
      line-height:1;
      letter-spacing:0.02em;

      @media all and (min-width:40em) {

      font-size: 4.75em;

      }
    }
    .subtitle {

      font-family: $fontstack_heading;
      font-weight:300;
      text-transform:uppercase;
      text-align:center;
      font-size:1em;
      margin:0.5em 0;
    }
    .heading-group {
      margin:0 0 3em 0;
    }
    .content h3 {
      font-size: 1.2em;
      line-height:1.2;
      letter-spacing:0.02em;
      color:#fff;

      @media all and (min-width:40em) {

      font-size: 2.5em;

      }
    }


    #timeline h1, h2, h3 {

      font-family: $fontstack_heading;
      font-weight:900;

    }
    #timeline p {
      font-family: $fontstack_body;
      line-height:1.5;
    }

    .l-block-spacing {


      min-height:80vh;
      padding:2em 0 4em 0;

    }

    .l-contained {

      max-width:1000px;
      margin-left:auto;
      margin-right:auto;

      padding-left:1em;
      padding-right:1em;

      @media all and (min-width:40em) {

        padding-left:2em;
        padding-right:2em;


      }
    }
    .timeline-list {

      //border-left: 5px solid #ccc;
      padding-bottom: 1em;
      position: relative;
      max-width:700px;
      margin:0 auto;

      &:before {
        content: "";
         border-left: 5px solid #CCC;
         left: -0.25em;
         top: 2em;
         height: 100%;
         position: absolute;
         bottom: 0;
         top: 0;
        transform-origin:0 0;
        animation:scaleVertical 3s 1s ease both 1;
      }

      &:after {
        content: "";
        clear:both;

        position: absolute;
        bottom: 0px;
        left: -1em;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: none repeat scroll 0% 0% #DDD;
        border: 5px solid #DDD;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
        animation:revealScaleUp 0.75s 2.82s ease both 1;
      }
    }

    .t-block-teal {
      background:#02aa9d;
    }
    .t-block-teal h2 {
      color:#fff;
    }
    .t-block-teal h3 {
      color:#034944;
    }
    .t-block-teal p {
      color:#034944;
    }
    //list animation 
    //scale in the circle, follwoed by the list item
    //the border must also animate in.
    .timeline-list li {

      margin:0 0 3em 0;
      padding:0 2em 0em 2em;
        position: relative;

    }
    .timeline-list li:before {

      content: "";
      position: absolute;
      top: 0px;
      left: -1.45em;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: none repeat scroll 0% 0% #02aa9d;
      border: 5px solid #fff;
      animation:revealScaleUp 0.75s 0s ease both 1;
    }
    .timeline-list {

       animation:reveal 2s 0 ease both 1;
    }
    .timeline-list li .content {
      animation:revealFromLeft 0.5s 0s ease both 1;
    }




    .timeline-list li:nth-child(1):before {
      animation-delay:0.85s;
    }
    .timeline-list li:nth-child(1) .content {
      animation-delay:1.05s;
    }
    .timeline-list li:nth-child(2):before {
       animation-delay:1.2s;
    }
    .timeline-list li:nth-child(2) .content {
      animation-delay:1.5s;
    }
    .timeline-list li:nth-child(3):before {
      animation-delay:1.8s;
    }
    .timeline-list li:nth-child(3) .content {
      animation-delay:2.1s;
    }
    .timeline-list li:nth-child(4):before {
      animation-delay:2s;
    }
    .timeline-list li:nth-child(4) .content {
      animation-delay:2.3s;
    }
    @keyframes revealFromLeft {
      0% {
        transform:translateX(-1em);
        opacity:0;
      }
      100% {
        opacity:1;
        transform:translateX(0);
      }
    }
    @keyframes reveal {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    @keyframes scaleVertical {
      0% {
        transform:scaleY(0);

      }
      100% {
        transform:scaleY(1);
      }
    }
    @keyframes revealScaleUp {
      0% {
        opacity:0;
        transform:scale(0.5);
      }



      50% {
         opacity:1;
         transform:scale(1.3);

      }
      100% {
        opacity:1;
        transform:scale(1);

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

<div id="timeline">
   <section class="block-content t-block-teal l-block-spacing">
      <div class="l-contained">
        <header class="heading-group">
          <h2>Timeline</h2>
          <p class="subtitle">
            What is this?
          </p>
        </header>
        <ul class="timeline-list">
          <li>
              <div class="content">
            <h3>A timeline?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
            </p>
            </div>
          </li>
          <li>
              <div class="content">
            <h3>A railway map?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
            </p>
            </div>
          </li>
          <li>
              <div class="content">
            <h3>Random dots?</h3>


            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
            </p>
            </div>
          </li>



          <li>
              <div class="content">
            <h3>Absolutely nothing.</h3>


            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
            </p>
            </div>
          </li>
        </ul>



      </div>

    </section>
</div>

He's a student from Banyuwangi, living in Jogjakarta. the blog for documentation about his programming 🎒 journey, running on jekyll, hosting on [now.sh](http://now.sh) and using his own theme, he name it <a href="https://github.com/piharpi/jekyll-klise" target="_blank" rel="noopener">klisé</a>, he also loves to learning web technology; but he often forgot, that a reason why him doing the writing.

If you have a question about him or else, just send a letter to him.

You can [report](http://github.com/piharpi/jekyll-klise/issues/new) if there is an broken link(s) or somethings else.

**may u needs ✨**
- {{ site.author.email }}
- github.com/{{ site.author.github }}
