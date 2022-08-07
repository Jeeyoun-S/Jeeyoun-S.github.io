---
layout: page
title: Web Storage
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## X. Web Storage

### 1. session Storage

### 2. local Storage

```html
<input id="phone-number" placeholder="전화번호를 입력하세요">
<button id="add">추가</button>
<button id="read">조회</button>
<button id="remove">삭제</button>
<div id="list">조회 결과</div>
```

- 등록 `setItem(key, value)`
    
    ```jsx
    let number_btn = document.querySelector("#add");
    number_btn.addEventListener('click', func_add);
    
    function func_add () {
    	let number = document.querySelector("#phone-number");
    	let new_number = JSON.stringify(number.value);
    
    	localStorage.setItem('number_data', new_number)
    	number.value = '';
    }
    ```
    
- 조회 `getItem(key)`
    
    ```jsx
    document.querySelector('#read').addEventListener('click', func_read);
    
    function func_watch () {
    	let write = document.querySelector('#list');
    	let number = localStorage.getItem('number_data');
    
    	if (number != null) {
    		let new_number = JSON.parse(number);
    		write.innerText = new_number;
    	}
    ```
    
- 삭제 `removeItem(key)`
    
    ```jsx
    document.querySelector('#remove').addEventListener('click', func_remove)
    
    function func_remove () {
    	localStorage.removeItem('number_data');
    }
    ```
    
- `clear()`
- `key(index)`
- `length`
