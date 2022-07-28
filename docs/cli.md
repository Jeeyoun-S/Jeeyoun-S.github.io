---
layout: page
title: CLI
description: >
  This chapter covers advanced topics, such as offline support and custom JS builds. Codings skills are recommended.
hide_description: true
sitemap: false
---

0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### CLI (Command Line Interface)

- **CLI**(GUI를 명령어로, 개발자) ↔ **GUI**(그래픽으로 사용자와 컴퓨터가 상호작용, 개인)
- CLI로만 할 수 있는 것도 있고, GUI보다 컴퓨터의 resource가 절약된다.
- GUI 화면에 그래픽으로 전부 보여주기 힘들어서 CLI는 개발할 때 많이 쓴다.
- 수많은 개발 시스템이 CLI를 제공 → CLI 배워야 한다.
- 개발자가 MAC을 많이 쓰는 이유?
    CLI 명령어는 리눅스, 유닉스가 근본 > MacOS는 리눅스 유닉스에서 파생
    윈도우는 명령어가 달랐다(DIR) → 윈도우보다 맥이 편하다.
    그래서 윈도우가 패치(Powershell), 원래 있던 게(cmd)

### **CLI 기본 명령어**

- `touch` 파일 생성
- `rm` 파일 삭제, `-r` 옵션을 주면 폴더 삭제 기능
- `Mkdir` **새 폴더 생성
- `start`(W), `open`(M) 폴더/파일 열기
- `start .` **현재 폴더 GUI로 열어 준다. (.은 나를 의미)
- `ls` 현재 작업 중인 디렉토리의 폴더/파일 목록
- `cd` 현재 작업 중인 디렉토리 변경
- `cd ..` 상위 디렉토리로 이동
- `~` (현재 작업 중인 위치) 많이 쓰는 위치, 압축 (`C:\Users\user` 홈 디렉토리)
- `clear` 화면 지워짐
- `./` 현재 작업하고 있는 경로
- `../` 현재 작업하고 있는 폴더의 부모 폴더

### **절대경로 vs 상대경로**

- 절대경로
    루트 디렉토리부터 목적 지점까지 거치는 모든 경로 작성 (ex. `C:/Users/user/Desktop`)
    
- 상대경로
    현재 디렉토리를 기준으로 계산된 상대적 위치
    (ex. 현재 `C:/Users` → 바탕화면 상대경로 `user/Desktop`)
    
- 절대경로 사용 시 컴을 바꾸면 에러가 날 수도 있다.
