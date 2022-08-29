---
layout: page
title: Start Python
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### Python을 배워야 하는 이유
1. 알고리즘 코딩 테스트에 유리
2. 구현 코딩 테스트에 유리
3. 가장 인기 많은 언어 (AI개발, 데이터 분석, 웹 프로그래밍, 업무 자동화 등)

### Python의 특징
1. Easy to Learn
2. Interpreter
3. Object Oriented Programming

### Python 개발 환경
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

### 코드작성법
- 코드 스타일 가이드 (ex. PEP8, Google Style guide, etc.)
- 들여쓰기: Tab 1번 또는 Space 4번

### 주석
- 코드에 대한 설명 작성
- 사용 방법
  - `#This code is ~~~` 한 줄 주석 처리
  - `"""This code is ~~~"""` 여러 줄 주석 처리, `'`도 가능

### 변수
- 선언 `a = 1`
- 식별자
    - 숫자로 시작 불가, 길이 제한 없음, 대소문자 구별
    - 예약어 사용 불가
        ```python
        import keyword
        print(keyword.kwlist) #예약어 출력하기
        ```

### 입력
- `input()`
- `import sys; sys.stdin.readline()`

### 출력
- `print("출력하고 싶은 내용을 입력하시오.")`