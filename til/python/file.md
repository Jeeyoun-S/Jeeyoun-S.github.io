---
layout: page
title: File
hide_description: true
sitemap: false
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## .json
1. 열기
  ```python
  import json
  open_file = open('file_name.json', encoding='utf-8')
  get_data = json.load(open_file)
  ```

2. 저장

## .txt
1. 열기
  - `open_file = open('file_name.txt', 'r', encoding='utf-8')`
    
    | r | w | a |
    | --- | --- | --- |
    | read | write | add |
    | 읽기 | 쓰기 | 추가하기 |

2. 읽기
  - `open_file.readline()`
  - `open_file.readlines()`
  - `open_file.read()`

3. 저장

4. 닫기
  - `open_file.close()`

## .xls
1.

## .csv
2.