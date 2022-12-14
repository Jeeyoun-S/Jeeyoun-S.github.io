---
layout: page
title: 기획
sitemap: false
permalink: /project/my-online-gym/plan-and-design/
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 기획 배경
1. 상황에 맞는 운동 루틴 추천
    * 기존 루틴을 활용해 웨이트 트레이닝을 하고 싶지만, 이미 짜여져 있는 루틴은 상황 여건에 따라 수행하기 어려운 경우가 많았습니다.
    * 이로 인해 각자 상황에 맞는 운동 루틴을 추천해 주는 서비스를 생각하게 됐습니다.
2. 건강기능식품에 대한 신뢰도 높은 정보 제공
    * 건강기능식품을 섭취하고 싶지만, 같은 기능의 건강기능식품 간의 비교가 어려웠습니다.
    * 또한, 과한 섭취 및 비인가 건강기능식품 구매의 우려가 있었습니다.
    * 식약처 인증이 돼 있는 건강기능식품의 정보를 모아볼 수 있는 서비스를 생각하게 됐습니다.

## 목표
1. 운동 루틴 추천 기능 구현
    * 운동 장소, 운동 기구, 불편한 부위, 중점적으로 운동하고 싶은 부위를 간단하게 입력 받고 딱 맞는 루틴을 추천해주는 서비스 구현
    * 추천 받은 루틴에서 동작을 추가할 수 있고, 해당 루틴을 찜 목록에 저장할 수 있게 구현
2. 건강기능식품 검색 및 조회 기능 구현
    * 식약처 인증 건강기능 식품을 기능별로 검색해 정보를 조회하고 간편하게 구매할 수 있는 서비스 구현
    * 관심 있는 건강기능식품 찜할 수 있고, 구매할 수 있는 링크로 접속 가능하도록 구현
3. 운동 영상 조회 기능 구현
    * 운동 영상을 찾아보고, 리뷰를 남길 수 있는 서비스 구현
    * 찜 목록에 영상을 추가하고, 리뷰를 수정 및 삭제도 가능하도록 구현

## 요구사항 명세서
1. 운동 루틴 추천 기능
    - **개요** 사용자의 환경과 요망, 불편요소를 반영한 운동 루틴을 추천한다.
    - **선행 조건** 사용자가 메인 페이지에서 ‘운동 루틴 추천’ 카테고리를 클릭한다.
    - **기본 시나리오**
        * 사용자의 운동 환경을 입력받는다.
        * 운동 환경이 입력되어 있고 사용자가 ‘시작’을 선택할 경우, 추천 운동 루틴이 제시된다.
        * 사용자가 낯선 운동에 대해 이해할 수 있도록, 각 운동의 튜토리얼 유튜브 영상으로 연결되는 버튼이 운동 이름 오른쪽에 표시된다.  
    - **대안 시나리오** 운동 환경이 입력되어 있고 사용자가 ‘운동 검색’을 선택할 경우, 운동 검색 화면으로 이동한다.
2. 운동 동작 검색 기능
    - **개요** 사용자가 원하는 운동을 검색 후 루틴에 추가할 수 있다. 
    - **선행 조건** 사용자가 운동 루틴을 추가 받은 후 ‘원하는 운동 추가’를 선택한다.
    - **기본 시나리오**
        * 사용자가 원하는 운동을 검색한다.
        * DB에 저장되어 있는 검색어와 비교해 일치하는 검색결과를 표시한다.
        * 사용자가 운동 추가를 선택하면 해당 운동이 포함된 루틴에 추가된다.
    - **대안 시나리오** DB에 저장되어 있는 검색어와 비교해 일치하는 검색결과가 없다면, 자카드 유사도 검사 후 가장 가까운 검색 결과를 제시한다.
3. 사용자별 운동 캘린더 기능
    - **개요** 사용자가 메인 페이지에서 운동한 날짜와 운동량을 볼 수 있다.
    - **선행 조건** 사용자가 로그인한 상태라면, 메인 페이지에 표시된다.
    - **기본 시나리오**
        * 사용자의 개별 정보를 DB에서 서버로 가져온다. 
        * [FullCalendar API](https://fullcalendar.io/)를 통해 표시된 캘린더 영역에 각 날짜의 운동여부와 운동량을 보여준다.
    - **대안 시나리오** 사용자의 첫 이용이거나 게스트 이용자라면, 일정이 없는 달력을 보여준다.
4. 사용자별 레벨 부여 기능
    - **개요** 최근 한 달 간 운동 일자에 따라 레벨을 보여준다.
    - **선행 조건** 사용자가 로그인한 상태여야 한다.
    - **기본 시나리오**
        * 로그인한 사용자의 최근 한 달 간 운동 일정을 DB에서 가져온다.
        * 운동한 날이 며칠인가에 따라 레벨을 부여한다.
        * 부여한 레벨을 메인 페이지에서 확인할 수 있다.
5. 건강기능식품 품목분류정보 조회 및 검색
    - **개요** 건강기능식품과 관련된 정보를 얻을 수 있도록 만든다.
    - **선행 조건** 사용자가 건강기능식품에 대한 정보를 얻고자 ‘건강기능식품’ 카테고리를 클릭한다.
    - **기본 시나리오**
        * 조회
            * 사용자가 ‘건강기능식품’ 카테고리를 클릭한다.
            * 모든 건강 식품에 대한 정보를 얻을 수 있다. 
        * 키워드 태그 검색
            * OpenAPI 정보 중 주된 기능성에서 핵심 키워드를 뽑는다.
            * 키워드를 클릭하면, 키워드에 해당하는 건강기능식품들의 품목명, 섭취시주의사항, 주된기능성, 일일섭취량 하한 등을 보여준다.
    - **대안 시나리오** OpenAPI 이용이 불가능하다면 다른 기능을 생각해 본다.
    - **기타** 건강기능식품 정보는 [공공데이터활용 건강기능식품 품목분류정보](http://www.foodsafetykorea.go.kr/api/openApiInfo.do?menu_grp=MENU_GRP31&menu_no=661&show_cnt=10&start_idx=1&svc_no=I2710) 사용
6. 회원가입, 로그인, 로그아웃 기능 명세서
    - **개요** 사용자가 회원가입, 로그인 버튼을 누르면 각 기능에 맞춰 입력창이 뜨고 정보를 입력하면 실행된다. 로그아웃은 로그인한 상태에서 로그아웃 버튼을 누르면 로그인 정보를 없앤다.
    - **선행 조건**
        * 로그인, 회원가입 : 사용자가 메인화면에 접속하여 해당 버튼을 클릭하면 기능을 실행할 수 있는 페이지로 이동한다.
        * 로그아웃 : 사용자가 로그인 한 상태에서 로그아웃 버튼을 클릭하면 실행된다.
    - **후행 조건**
        * 로그인: 아이디와 비밀번호가 일치하지 않으면 로그인 페이지로 다시 돌아간다.
        * 회원가입: 입력한 정보가 조건에 맞지 않으면 회원가입 페이지로 다시 돌아간다.
    - **기본 시나리오**
        * 로그인
            * 사용자가 로그인 페이지에서 아이디와 비밀번호를 입력하고 로그인 버튼을 클릭한다.
            * DB에서 사용자의 아이디, 비밀번호 목록을 가져와 일치하는 정보가 있는지 확인한다.
            * 일치하는 정보가 있다면 로그인한 회원의 정보를 세션에 저장하고 메인 화면으로 이동한다.
            * 일치하는 정보가 없다면 ‘일치하는 정보가 없습니다.’라는 알림창을 띄우고, 로그인 페이지로 리다이렉트 한다.
        * 로그아웃
            * 사용자가 로그아웃 버튼을 클릭한다.
            * 로그인한 회원의 정보를 세션에서 지우고, 메인 화면으로 리다이렉트 한다.
        * 회원가입 
            * 사용자가 회원가입 페이지에서 아이디, 비밀번호, 닉네임, 이메일을 입력하고 회원가입 버튼을 클릭한다.
            * 아이디, 닉네임, 이메일 중복 확인을 한다.
            * 중복이 없다면 DB에 4가지 정보를 넣어주고, 로그인 페이지로 이동한다.
            * 중복이 있다면 입력한 정보가 기존 회원과 중복해 다시 입력해 달라는 팝업을 띄운다.
7. 회원가입 없이 게스트 이용 기능
    - **개요** 회원가입 없이도 누구나 기능들을 이용할 수 있게, 게스트 사용자를 만든다.
    - **선행 조건** 사용자가 My Online Gym 사이트에 접속하고, 로그인을 하지 않는다. 
    - **기본 시나리오**
        * 사용자가 로그인하지 않은 상태로 기능을 사용하고자 한다.
        * 로그인하지 않을 채 게스트로 권한을 주고, 사용자가 기록한 정보는 DB가 아닌 Session에 저장한다.
        * Session이 만료되면(만료 시간 설정) 정보가 사라진다.
    - **대안 시나리오** 게스트 사용자를 만드는 것이 어렵다면 로그아웃 상태에서 사용할 수 있는 기능에 제한을 둔다.

## 화면 설계서
1. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide1.PNG" target="_blank">로그인 이전 메인 페이지</a>
2. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide2.PNG" target="_blank">로그인 이후 메인 페이지</a>
3. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide3.PNG" target="_blank">게스트 이용 시 메인 페이지</a>
4. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide4.PNG" target="_blank">로그인 이후 메인 페이지에서 '운동할래' 선택 - 첫 사용 시</a>
5. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide5.PNG" target="_blank">게스트 이용 시 메인 페이지에서 '운동할래' 선택</a>
6. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide6.PNG" target="_blank">운동 설정 완료 후 페이지</a>
7. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide7.PNG" target="_blank">운동 검색 페이지</a>
8. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide8.PNG" target="_blank">루틴 계산 페이지</a>
9. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide9.PNG" target="_blank">루틴 제시 페이지</a>
10. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide10.PNG" target="_blank">운동 피드백 페이지</a>
11. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide11.PNG" target="_blank">로그인 이후 메인 페이지</a>
12. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide12.PNG" target="_blank">건강기능식품 전체 조회</a>
13. <a href="https://jeeyoun-s.github.io/project/MyOnlineGym/mock-up/slide13.PNG" target="_blank">건강기능식품 검색 페이지</a>