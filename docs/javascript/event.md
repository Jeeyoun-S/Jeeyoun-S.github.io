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

### Event 종류
- 키보드 `keyup` `keydown` `keypress`
- 마우스 `click` `mousemove` `mouseup` `mousedown` `mouseenter` `mouseleave`
- 로딩 `load` `unload`
- 폼 `input` `change` `blur` `focus` `submit`

### 고전 처리 방식

1. 인라인 설정
    
    ```jsx
    <button onclick="alert('warning')">Warning</button>
    ```
    
2. 스크립트 설정
    
    ```jsx
    <button id="warn">Warning</button>
    <script>
    	var warning_btn = document.querySelector("#warn")
    	warning_btn.onclick = func;
    	function func() {
    		alert("Warning")
    	}
    </script>
    ```
    

## 2. 표준 처리 방식

```jsx
<button id="warn">Warning</button>
<script>
	var warning_btn = document.querySelector("#warn");
	warning_btn.addEventListener("click", func);
	function func() {
			alert("Warning")
		}
</script>
```
