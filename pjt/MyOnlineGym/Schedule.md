---
layout: page
title: 진행 일정
sitemap: false
permalink: /pjt/my-online-gym/schedule/
---
<head>
    <style>
        @import 'compass/css3'
        @import '//fonts.googleapis.com/css?family=Muli:300'
        $text: #1D1D26
        $text-light: #77777D
        $colors:  red #FF3467, blue #18D0BF, salmon #F48A6D, purple #C178FA

        $timeline-padding-left-right: 62px
        $timeline-tracker-padding-right: 11px

        $timeline__item-padding-top-bottom: 62px

        $timeline__step-padding-right: 62px

        $timeline__step__marker-height: 24px
        $timeline__step__marker-width: 24px
        $timeline__step__marker-border-width: 4px

        $timeline__time-padding-right: 126px
        $timeline__time-font-size: 26px

        $timeline__title-padding-bottom: 26px
        $timeline__title-font-size: 32px

        $timeline__points-padding-bottom: 12px
        $timeline__points-font-size: 24px
        
        
        /*
        * Timeline
        *

        .timeline
        +display-flex()
        +flex-direction(column)
        padding: 0 $timeline-padding-left-right
        margin: 0
        list-style: none
        
        &::before
            position: fixed
            top: 0
            height: 100%
            padding-right: $timeline-tracker-padding-right
            border-right: 2px solid #F2F2F2
            content: ""

        &__item
            +display-flex()
            +align-items(stretch)
            padding: $timeline__item-padding-top-bottom 0
        
        &__step
            padding-right: $timeline__step-padding-right
            
            &__marker
            position: relative
            display: table-cell
            height: $timeline__step__marker-height
            min-height: $timeline__step__marker-height
            width: $timeline__step__marker-width
            min-width: $timeline__step__marker-width
            border: $timeline__step__marker-border-width solid #F2F2F2
            +border-radius(50%)
            background-color: white
            z-index: 0
            
            @each $color in $colors
                &--#{nth($color, 1)}
                border-color: nth($color, 2)
            
            
        &__time
            padding-right: $timeline__time-padding-right
            font-size: $timeline__time-font-size
            
        &__title
            padding-bottom: $timeline__title-padding-bottom
            font-size: $timeline__title-font-size
            
        &__points
            padding: 0
            list-style: none
            font-size: $timeline__points-font-size
            color: $text-light
            > *
            padding: 0 0 $timeline__points-padding-bottom 0
            
        /*
        * For mobile!
        *

        $ratio: 1.75
            
        @media (max-width: 768px)
        .card
            max-width: 375
            
        .timeline
            padding: 0 ($timeline-padding-left-right / $ratio)

            &::before
            padding-right: $timeline-tracker-padding-right / $ratio

            &__item
            padding: ($timeline__item-padding-top-bottom / $ratio) 0

            &__step
            padding-right: $timeline__step-padding-right / $ratio

            &__marker
                height: $timeline__step__marker-height / $ratio
                min-hieght: $timeline__step__marker-height / $ratio
                width: $timeline__step__marker-width / $ratio
                min-width: $timeline__step__marker-width / $ratio
                border-width: $timeline__step__marker-border-width / $ratio

            &__time
            padding-right: $timeline__time-padding-right / $ratio
            font-size: $timeline__time-font-size / $ratio

            &__title
            padding-bottom: $timeline__title-padding-bottom / $ratio
            font-size: $timeline__title-font-size / $ratio

            &__points
            font-size: $timeline__points-font-size / $ratio
            > *
                padding-bottom: $timeline__points-padding-bottom / $ratio
            
            
        /*
        * Display stuff
        *

        html
        background: url(//s3-us-west-2.amazonaws.com/s.cdpn.io/153256/trees.jpg) no-repeat center center fixed
        +background-size(cover)
        
        html, body
        line-height: 1.5rem
        font-family: 'Muli', sans-serif
        font-weight: 300
        margin: 0
        box-sizing: border-box
        height: 100%

        *, *:before, *:after
        box-sizing: inherit
        
        .card
        background-color: white
        max-width: 750px
        margin: 0 auto
        height: 100%
        +box-shadow(0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12))
        display: table
    </style>
    <script></script>
</head>

<div class="card">
  <ul class="timeline">

    <li class="timeline__item">
      <div class="timeline__step">
        <div class="timeline__step__marker timeline__step__marker--red"></div>
      </div>
      <div class="timeline__time">
        5pm
      </div>
      <div class="timeline__content">
        <div class="timeline__title">
          New Icons
        </div>
        <ul class="timeline__points">
          <li>Mobile App</li>
        </ul>
      </div>
    </li>

    <li class="timeline__item">
      <div class="timeline__step">
        <div class="timeline__step__marker timeline__step__marker--blue"></div>
      </div>
      <div class="timeline__time">
        4pm
      </div>
      <div class="timeline__content">
        <div class="timeline__title">
          Design Stand Up
        </div>
        <ul class="timeline__points">
          <li>Hangouts</li>
        </ul>
      </div>
    </li>

    <li class="timeline__item">
      <div class="timeline__step">
        <div class="timeline__step__marker timeline__step__marker--salmon"></div>
      </div>
      <div class="timeline__time">
        9am
      </div>
      <div class="timeline__content">
        <div class="timeline__title">
          Break
        </div>
      </div>
    </li>

    <li class="timeline__item">
      <div class="timeline__step">
        <div class="timeline__step__marker timeline__step__marker--blue"></div>
      </div>
      <div class="timeline__time">
        2pm
      </div>
      <div class="timeline__content">
        <div class="timeline__title">
          Home Screen
        </div>
        <ul class="timeline__points">
          <li>Web App</li>
        </ul>
      </div>
    </li>

  </ul>
</div>