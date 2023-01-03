---
layout: page
title: 진행 일정
sitemap: false
permalink: /pjt/my-online-gym/schedule/
---
<head>
    <style>
        @import "compass/css3";
        /* Variables */
        $color-1: black;
        $color-2: white;
        $color-3: rgb(168, 50, 121);
        /* Fonts */
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);
        #schedule {
            font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 1em;
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: 0.05em;
        }
        /* Layout */
        #schedule {
            @include box-sizing(border-box);
        }
        /* Styling */
        #schedule .timeline {
            margin: 4em auto;
            position: relative;
            max-width: 46em;
            &:before {
                background-color: $color-1;
                content: '';
                margin-left: -1px;
                position: absolute;
                top: 0;
                left: 2em;
                width: 2px;
                height: 100%;
            }
        }
        #schedule .timeline-event {
            position: relative;
            &:hover {
                .timeline-event-icon {
                @include rotate (-45deg);
                background-color: $color-3;
                }
                .timeline-event-thumbnail {
                @include box-shadow(inset 40em 0 0 0 $color-3);
                }
            }
        }
        #schedule .timeline-event-copy {
            padding: 2em;
            position: relative;
            top: -1.875em;
            left: 4em;
            width: 80%;
            #schedule h3 {
                font-size: 1.75em;
            }
            #schedule h4 {
                font-size: 1.2em;
                margin-bottom: 1.2em;
            }
            #schedule strong {
                font-weight: 700;
            }
            p:not(.timeline-event-thumbnail) {
                padding-bottom: 1.2em;
            }
        }
        #schedule .timeline-event-icon {
            @include transition(transform 0.2s ease-in);
            @include rotate (45deg);
            background-color: $color-1;
            outline: 10px solid $color-2;
            display: block;
            margin: 0.5em 0.5em 0.5em -0.5em;
            position: absolute;
            top: 0;
            left: 2em;
            width: 1em;
            height: 1em;
        }
        #schedule .timeline-event-thumbnail {
            @include transition(box-shadow 0.5s ease-in 0.1s);
            color: $color-2;
            font-size: 0.75em;
            background-color: $color-1;
            @include box-shadow(inset 0 0 0 0em #ef795a);
            display: inline-block;
            margin-bottom: 1.2em;
            padding: 0.25em 1em 0.2em 1em;
        }
    </style>
    <script></script>
</head>

<div id="schedule">
    <ul class="timeline">
    <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
        <p class="timeline-event-thumbnail">April 2011 - heute</p>
        <h3>Geil,Danke! GmbH</h3>
        <h4>Geschäftsführerin eines Web-Studios</h4>
        <p><strong>Schwerpunkt: Frontend-Entwicklung</strong><br>Entwickeln von anspruchsvollen, animierten, responsive und adaptive Webseiten mit HTML5, SCSS, jQuery; für alle Browser, optimiert für Desktop, Notebook, Smartphones und Tablets (iOS, Android, Windows).</p>
        <p><strong>Projektmanagement mit Scrum</strong><br>Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise durch Grunt, Yeoman, GIT, JIRA und BrowserStack.</p>
        </div>
    </li>
    <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
        <p class="timeline-event-thumbnail">November 2009 - März 2011</p>
        <h3>Freelancer</h3>
        <h4>Designer und Autor</h4>
        <p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p>
        </div>
    </li>
    <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
        <p class="timeline-event-thumbnail">April 2011 - heute</p>
        <h3>konplan gmbh</h3>
        <h4>IT-Consultant</h4>
        <p><strong>Systemarchitektur, Consulting</strong><br>Konzeption und Modellierung von Systemen und APIs für Digital Publishing und Entitlement nach SOA</p>
        </div>
    </li>
    </ul>  
</div>