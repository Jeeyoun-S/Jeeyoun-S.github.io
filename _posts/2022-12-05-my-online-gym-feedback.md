---
title: My Online Gym에 대한 Feedback 반영
date: 2022-12-05 00:00:00 +07:00
tags: [project]
style: fill
color: info
description: 1주일 간 My Online Gym Project를 끝낸 뒤, 받았던 Feedback 반영해 코드 수정하기
---

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

일주일 동안 빠르게 하나의 프로젝트([My Online Gym](https://jeeyoun-s.github.io/projects/2-my-online-gym))를 마무리하고 나니, 다른 사람들의 평가는 어떨지 궁금해졌다. 그래서 SSAFY 1학기 방학 동안 주변 사람들에게 피드백을 받아봤다. 주변 사람들에게 받으면, 다들 잘했다고 한다고 SSAFY에서 그랬는데. 오히려 피드백이 넘쳐나서 반성을 많이 했다. 특히, UI/UX에 대한 생각이 부족했음을 많이 느꼈다.

받았던 피드백을 정리하고, 해결 과정을 서술해 보려고 한다.

### 전체
- 팝업창이 전혀 없어 일부 기능에서 불편.
  - 회원가입 완료, 일정 등록 완료 시 팝업창을 활성화했고, 팝업창은 SweetAlert2 라이브러리를 사용했다.
  - [sweetalert2 Docs](https://sweetalert2.github.io/)
    
    ```javascript
    import Swal from 'sweetalert2'

    Swal.fire({
      title: '회원가입 완료',
      text: '로그인창으로 이동합니다.',
      icon: 'success',
      confirmButtonText: '확인',
      confirmButtonColor: '#143141'
    }).then((result) => {
      if (result.isConfirmed) {
        router.go();
      }
    });
    ```

- 알아보기 힘들 글씨체, 가독성이 더 좋은 글씨체 추천.
  - 로고, 카테고리 글씨체는 유지, 그 외 글씨체는 고딕체 중 하나로 변경했다.
  - [에스코어드림체](https://noonnu.cc/font_page/223)
    
    ```javascript
    @font-face {
      font-family: 'S-CoreDream-3Light';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    ```

### 운동 일정 관리 기능
- 달력이 한 페이지 안에 다 들어와서 스크롤 없이 볼 수 있게.
  - [fullcalendar.io](https://fullcalendar.io/docs) 내에 옵션에서 높이를 수정

    ```javascript
    calendarOptions: {
      height: 650,
    }
    ```

- 공휴일은 구분할 수 있게 다른 색으로 표시.
  - 일요일은 빨간색, 토요일은 파란색이 되도록 CSS 추가

    ```css
    /* 일요일 */
    .fc-theme-bootstrap .fc-daygrid-day.fc-day.fc-day-sun a.fc-daygrid-day-number {
      color: #FF0000;
      font-weight: bold;
    }

    /* 토요일 */
    .fc-theme-bootstrap .fc-daygrid-day.fc-day.fc-day-sat a.fc-daygrid-day-number {
      color: #9190FF;
      font-weight: bold;
    }
    ```

- 달력에서 날짜를 선택하면 해당 날짜에 일정을 추가할 수 있는 창.
  - fullcalendar에서 제공하는 날짜 선택 이벤트에 함수를 추가해 창을 활성화 및 비활성화

    ```javascript
    // 생략
    calendarOptions: {
      eventClick: this.changeIsShowDetail, // 날짜 클릭 이벤트 추가
    }

    // 생략
    // 클릭한 날짜의 정보를 받아와 창을 열고 닫아주는 함수
    changeIsShowAdd(info) {
      if (info) {
        if (this.dateRegist == info.dateStr) {
          this.isShowAdd = !this.isShowAdd;
        } else {
          this.dateRegist = info.dateStr;
          if (!this.isShowAdd) this.isShowAdd = true;
        }
      } else {
        this.isShowAdd = !this.isShowAdd;
      }
  },
    ```

- 달력 언어 한글로 변경 및 각 칸의 '15일'에서 '일' 삭제.
  - 달력 언어를 변경하니, 날짜가 '15'에서 '15일'로 변경됐고, 다시 이 부분에서 일만 없앴다.

    ```javascript
    // 생략
    calendarOptions: {
      locale: "ko", // 언어 변경
      dayCellContent: this.dayFormat, // 날짜 형식 변경
    }

    // 생략
    dayFormat(info) {
      // "일"을 공백으로 바꿔주는 형식
      return info.dayNumberText.replace("일", "");
    }
    ```

- 일정 조회 시, 별도의 페이지로 이동하는 것이 아니라 바로 옆에 뜨게.
- 조회 창에서 바로 수정할 수 있도록, 수정 창 없이.
  - 입력창 모달과 조회 페이지를 오른쪽 사이드바가 나타나는 것으로 수정했다.
  - [vue-bootstrap의 sidebar](https://bootstrap-vue.org/docs/components/sidebar)를 이용했다. 
  
    ```html
    <b-sidebar width="25%" :visible="isShowAdd" right shadow>
      <div class="px-3 py-2">
        <CalendarRegist :dateRegist = "dateRegist"></CalendarRegist>
      </div>
    </b-sidebar>
    <b-sidebar width="25%" :visible="isShowDetail" right shadow>
      <div class="px-3 py-2">
        <CalendarDetail :calendar_num = "calendar_num"></CalendarDetail>
      </div>
    </b-sidebar>
    ```

- 운동 일정을 분석해 주 몇 회 운동했는지 등의 분석 자료 조회.
  - 달력 오른쪽에 사용자 레벨을 표시하고, 레벨에 대한 설명을 추가했다.

    ```html
    <div id="calendar-badge">
      <h3>나의 운동 일정 분석</h3>
      <div id="contents">
        <span>나의 레벨</span>
        <b-form-rating v-model="badge" variant="warning" class="mb-2" no-border size="lg" readonly>
        </b-form-rating>
      </div>
    </div>
    ```

### 운동 영상 검색 기능
- 운동 영상 조회 시 한 페이지에 최대 3개의 영상만 노출, 더 많은 영상을 볼 수 있게 수정.
  - 영상 ITEM 내의 썸네일과 영상 정보 나열을 좌우에서 상하로 변경
  - 각 영상 ITEM은 상하에서 좌우로 나열 변경, 한 행에 영상이 최대 5개씩 뜨도록 수정

    ```html
    <div v-else id="video-list">
      <div id="video-list-item" v-for="video in video_search_data" :key="video.videoId" @click="detailVideo(video)">
        <img :src="video.thumbnails" />
        <div id="contents">
          <h3 v-html="video.title.substr(0, 25) + '...'"></h3>
          <p>{{ video.channelTitle }}</p>
        </div>
      </div>
    </div>
    ```

    ```css
    #video-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: left;
    }

    #video-list-item {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: left;
    }
    ```

### 운동 루틴 추천 기능
- 루틴에서 동작을 삭제하는 기능도 필요.
  - vue에서 삭제 함수 추가 구현 및 삭제 버튼 칸 추가

    ```javascript
    removeRoutine({commit}, index) {
      commit('REMOVE_ROUTINE_DATA', index);
    }
    ```

### 건강기능식품 검색 기능
- 검색 시, 최신순이나 조회수순 등 정렬 방식 선택.
  - 검색 결과 맨 위에 정렬 방식을 선택할 수 있는 select 버튼 추가

    ```html
    <b-form inline>
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="[{ text: '정렬 방식', value: null }, '조회수 순', '가나다 순', '최신 순']"
        v-model="sorting"
      ></b-form-select>
    </b-form>
    ```

- 검색 후 건강식품 나열할 때 각 건강식품 정보를 한 줄로 정리해 한 페이지에 많이 볼 수 있도록.
  - 식품명, 설명 나열을 상하에서 좌우로 변경해 한 줄로 볼 수 있게

    ```css
    #food-list-item #each-item {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: left;
    }
    ```

- 건강식품 구매처도 운동 영상과 동일하게 한 페이지에 많이 보이게 정리.
  - 운동 영상 검색과 유사한 방식으로 수정

사실 이외에도 기획 단계부터 아쉽다고 이야기한 부분들이 많았지만, 2학기 과정이 기다리고 있어 시간이 넉넉지 않아 전체적인 기능은 유지하는 방향으로 수정했다.