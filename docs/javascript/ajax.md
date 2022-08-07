---
layout: page
title: Basic
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## XI. Ajax

- 비동기 통신
- Google Maps, VIBE, 네이버 검색 등

### 1. XMLHttpRequest

```html
<button id="need-date">데이터 가져오기</button>
<span id="data-list">가져온 데이터 목록</span>
```

```jsx
let result

document.querySelector('#need-data').addEventListener('click', getdata);

function getdata() {
	result = new XMLHttpRequest();
	result.onreadystatechange = callback;
	result.open('GET', './folder_name/datefile.txt', true);   //loading
	result.send()
}

function callback() {
	if (result.readyState == 4) {
		if (result.status == 200) {
			document.querySelector("#data-list").innerHTML = result.responseText;
		} else {
			console.log("데이터 가져오기 실패")
		}
	}
}                                                           //completed
```

- `XHLHttpRequest()`
- `open("HTTP method", "URL", sync/async)`
- `send(content)`
- `onreadystatechange`
- `readyState`
    - uninitialized `0`
    - loading `1`
    - loaded `2`
    - interactive `3`
    - completed `4`
- `status`
    - Success `200`
    - Not Found `404`
    - Server Error `500`
- `responseText` 응답 결과를 문자열로
- `responseXML` 응답 결과를 XML로
