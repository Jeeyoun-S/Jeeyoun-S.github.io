---
layout: page
title: 진행 일정
sitemap: false
permalink: /pjt/my-online-gym/schedule/
---
<head>
    <style>
    // ----------------  THE BASICS
    @import url('https://fonts.googleapis.com/css?family=Oswald|Roboto:400,700');
    body {
        font-size: 14px;
        line-height: 1.5;
    }
    // ----------------  THE FONTS
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald', sans-serif;
    }
    h1 {
        font-size: 2rem;
        margin-bottom: .5em;
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-size: .8rem;
    }
    // ----------------  LAYOUT
    .container {
        max-width: 1024px;
        width: 90%;
        margin: 0 auto;
    }
    // ----------------  THE FONTS
    $border-color: rgba(black, .3);
    .timeline-item {
        padding: 3em 2em 2em;
        position: relative;
        color: rgba(black, .7);
        border-left: 2px solid $border-color;
        
        p {
            font-size: 1rem;
        }
        
        &::before {
            content: attr(date-is);
            position: absolute;
            left: 2em;
            font-weight: bold;
            top: 1em;
            display: block;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: .785rem;
        }
        &::after {
            width: 10px;
            height: 10px;
            display: block;
            top: 1em;
            position: absolute;
            left: -7px;
            border-radius: 10px;
            content: '';
            border: 2px solid $border-color;
            background: white;
        }
        &:last-child {
            border-image: linear-gradient(
                to bottom,
                $border-color 60%,
                rgba($border-color, 0)) 1 100%
            ;
        }
    }
    </style>
    <script></script>
</head>

<div class="container">
	<div class="timeline-item" date-is='20-07-1990'>
		<h1>Hello, 'Im a single div responsive timeline without mediaQueries!</h1>
		<p>
			I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
		</p>
	</div>
	<div class="timeline-item" date-is='20-07-1990'>
		<h1>Oeehhh, that's awesome.. Me too!</h1>
		<p>
			I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
		</p>
	</div>
	<div class="timeline-item" date-is='20-07-1990'>
		<h1>I'm ::last-child so my border fades ^__^</h1>
		<p>
			I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
		</p>
	</div>
</div>