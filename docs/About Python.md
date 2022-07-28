---
layout: page
title: About Python
description: >
  Let's start studying Python
hide_description: true
sitemap: false
---

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### I. **Python을 배워야 하는 이유**

1. 알고리즘 코딩 테스트에 유리
2. 구현 코딩 테스트에 유리
3. 가장 인기 많은 언어 (AI개발, 데이터 분석, 웹 프로그래밍, 업무 자동화 등)

### II. **Python의 특징**

1. Easy to Learn
2. 인터프리터 언어(Interpreter)
3. 객체 지향 프로그래밍(Object Oriented Programming)

### III. **Python 개발 환경**

- IDE: Visual Studio Code, PyCharm
- Jupyter Notebook
    - **설치**: `pip install notebook`
    - **확장**
        - `pip install jupyter_contrib_nbextensions`
        - `jupyter contrib nbextension install --user`
    - **실행**: Git Bash `$ jupyter notebook`
    - **종료**: Git Bach Ctrl + C / Git Bash 종료
    - **장점**
        1. python 코드와 마크다운을 같이 적을 수 있다.
        2. python 코드의 실행 결과를 함께 파일로 저장
        3. 전체 파일 단위가 아닌, 셀 단위 실행
- IDLE

### IV. **코드작성법**

- 코드 스타일 가이드 (ex. PEP8, Google Style guide, etc.)
- 들여쓰기: Tab 1번 또는 Space 4번

### V. **주석**

- `"""` `'''` `#` 코드에 대한 설명 작성

### VI. 변수

- **식별자**
    - 숫자로 시작 불가, 길이 제한 없음, 대소문자 구별
    - 예약어 사용 불가
        
        ```python
        import keyword
        print(keyword.kwlist)
        ```
