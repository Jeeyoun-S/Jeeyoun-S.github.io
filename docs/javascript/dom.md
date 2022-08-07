---
layout: page
title: Event
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

- Document Object Model
- windows  제공 함수
    - `alert` 확인 버튼이 있는 팝업
    - `confirm` 확인과 취소 버튼이 있는 팝업 → 확인 true, 취소 false
    - `prompt` 입력창, 확인, 취소 버튼이 있는 팝업
    - `open(URL)` 새 탭에서 URL를 연다
    - `parseInt` `parseFloat`
    - `setTimeout` `clearTimeout`
    - `setInterval` `clearInterval`
- 문서 접근 방식
    - `getElementByld(string_id)` 1개만 (id는 중복 불가능)
    - `querySelector(selector)` 처음 1개만
    - `querSelectorAll(selector)` 여러 개
        
        ```jsx
        querySelector("div")
        querySelector("#id")
        querySelector("[name='name']")
        ```
        
- 문서 조작 방식
    
    
    ```jsx
    //BEFORE
    <main id="modify">
    
    </main>
    ```
    
    ```jsx
    //AFTER
    <main id="modify">
    <h1>title</h1>
    <span id="name" msg="salty"></span>
    </main>
    ```
    
    ```jsx
    var new_thing = document.createElement("span");
    new_thing.setAttribute("id", "name");    //new_thing.id = "name";
    new_thing.setAttribute("msg", "salty");  //.은 사용자 정의 속성 추가 불가능
    
    var old_thing = document.getElementById("modify");
    old_thing.innerHTML = "<h1>title</h1>"
    old_thing.append(new_thing)
    ```
