---
layout: page
title: 기획
sitemap: false
permalink: /project/simulated-stock-app/plan-and-design/
---
<head>
   <style>
      .title {
         width: 70px;
         text-align: center;
         font-weight: bold;
      }
      
      table ul {
         padding-inline-start: 20px;
      }
      
      table {
        margin-bottom: 10px;
      }
   </style>
</head>

1. this unordered seed list will be replaced by toc as unordered list
{:toc}

## 주요 기능

## 요구사항 정의서

## 요구사항 명세서
<ol>
   <li>주식 정보 및 환율 조회 기능 명세서 (모두 사용자가 동일한 정보)</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 앱에 접속했을 때 원하는 주식 정보를 조회할 수 있다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>사용자가 ‘메인 화면 접속’ 또는 ‘개별 주식 항목 및 환율을 선택’하면 실행된다.</td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <td>
            <ol>
               <li>실시간으로 국내외 주식 정보 크롤링 및 DB 저장</li>
               <li>DB 정보를 불러와서 서버로 가져온다.</li>
               <li>화면에 정보를 시각화해서 보여준다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">대안<br>시나리오</td>
         <td>실시간 주식 정보 조회에 실패하면 시간대별로 정보를 보여준다.</td>
      </tr>
      <tr>
         <td class="title">조회 가능<br>정보</td>
         <td>
            <ol>
               <li>산업별 수익률 (상승 TOP3, 하락 TOP3)</li>
               <li>주요 지수 (코스피, 코스닥, 나스닥, 다우, S&P, 니케이)</li>
               <li>환율 (달러, 유로, 위안, 엔화)</li>
               <li>주식 항목별 정보</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">부가 기능</td>
         <td>
            <ol>
               <li>개별 주식 항목 조회 시, 사용자의 최근 조회 목록에 해당 주식 항목 저장</li>
               <li>조회한 개별 주식에 있는 찜 버튼을 누르면 주식을 사용자의 찜 리스트에 저장</li>
            </ol>
         </td>
      </tr>
   </table>
   
   <li>주식 매매 기능 명세서</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 앱에서 국내 주식 및 외환을 팔거나 살 수 있다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>사용자가 로그인 후 주식 매수 또는 매도를 클릭하면 실행된다.</td>
      </tr>
      <tr>
         <td class="title">후행 조건</td>
         <td>
            <ol>
               <li>매수 시, 사용자의 잔고가 매매가보다 크다.</li>
               <li>매도 시, 사용자의 보유 주식량이 매도할 주식량보다 많다.</li>
               <li>주식 장이 열려있다. (9시 ~ 15시 30분)</li>
               <li>실시간 주가 업데이트 가능</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <td>
            <ol>
               <li>선택한 주식의 실시간 주가를 DB에서 서버로 가져온다.</li>
               <li>실시간 주가를 보여주고, 사용자가 매매할 수량을 입력한다.</li>
               <li>매매 버튼을 누르면 사용자의 보유 주식량과 잔고 정보를 DB에서 가져와 매매가 가능한지 확인한다.</li>
               <li>매매가 가능하면 보유 주식량과 잔고 정보를 업데이트한다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">대안<br>시나리오</td>
         <td>
            <ol>
               <li>실시간 주가 업데이트가 불가능하다면, 정각의 주가를 적용한다.</li>
               <li>잔고가 없다면 ‘매매 포기’ 또는 ‘추가 입금’ 선택</li>
               <li>보유 주식량이 적다면 ‘매매 포기’ 또는 ‘보유 주식 전체 매매’ 선택</li>
               <li>주식 장이 열려있지 않다면 매매 버튼 비활성화</li>
            </ol>
         </td>
      </tr>
   </table>
   
   <li>사용자별 주식 현황 조회 기능 명세서 (사용자별로 다른 정보)</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 앱에서 보유 자산 , 찜 리스트, 최근 조회 목록을 볼 수 있다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>사용자가 로그인 후, 마이페이지를 클릭하면 실행된다.</td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <td>
            <ol>
               <li>사용자의 개별 정보, 실시간 주식 정보를 DB에서 서버로 가져온다.</li>
               <li>현재 주가를 반영한 총액을 실시간 주식 정보를 바탕으로 계산한다.</li>
               <li>2의 정보를 사용자 개별 정보와 함께 화면에 정보를 시각화해서 보여준다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">대안<br>시나리오</td>
         <td>실시간 주가 업데이트가 불가능하다면, 정각의 주가를 적용한다.</td>
      </tr>
      <tr>
         <td class="title">조회 가능<br>정보</td>
         <td>
            <ol>
               <li>보유 자산 현황 (주식 - 현재 주가를 반영한 총액 포함/매도 버튼, 외환, 현금 등)</li>
               <li>찜 리스트 (개수 제한, 삭제 가능)</li>
               <li>최근 조회 목록 (기간 및 개수 제한, 삭제 가능)</li>
            </ol>
         </td>
      </tr>
   </table>
   
   <li>상장 예정 주식 조회 기능 명세서</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 ‘상장 예정 주식’ 조회를 클릭하면 상장 예정인 (약 14일) 전인 주식 종목을 조회할 수 있다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>사용자가 ‘상장 예정 주식’ 조회를 클릭해야 한다.</td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <td>
            <ol>
               <li>실시간으로 상장 예정 주식 정보 크롤링 및 DB 저장</li>
               <li>DB 정보를 불러와서 서버로 가져온다.</li>
               <li>화면에 정보를 시각화해서 보여준다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">대안<br>시나리오</td>
         <td>실시간 정보 업데이트가 불가능하다면, 일단위 정보를 적용한다.</td>
      </tr>
      <tr>
         <td class="title">조회 가능<br>정보</td>
         <td>회사명, 공모가</td>
      </tr>
   </table>
   
   <li>주식 추천 기능 명세서</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 메인 화면에 접속했을 때 추천 주식을 볼 수 있다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>사용자가 메인 화면에 접속한다.</td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <td>
            <ol>
               <li>DB에서 주식 정보를 가져온다,</li>
               <li>주식 추천 알고리즘 적용해 추천 주식 목록 생성한다.</li>
               <li>사용자가 메인 화면에서 추천 주식 목록을 보여준다.</li>
               <li>목록에서 개별 주식 항목을 선택하면 해당 주식 정보 조회 기능으로 넘어간다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">대안<br>시나리오</td>
         <td>추천 알고리즘 적용을 못하면 증권사의 추천 주식 정보 가져오기</td>
      </tr>
      <tr>
         <td class="title">비기능적<br>요구사항</td>
         <td>배너 형식으로 보여준다.</td>
      </tr>
   </table>
   
   <li>주식 검색 기능 명세서</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 검색창에 검색어를 입력하고 검색 버튼을 누르면 해당 검색어에 맞는 검색 결과를 보여준다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>사용자가 검색창에 검색어를 입력하고 검색 버튼을 누른다.</td>
      </tr>
      <tr>
         <td class="title">후행 조건</td>
         <td>검색어를 특수문자 제외 두 글자 이상 입력한다.</td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <td>
            <ol>
               <li>DB에서 주식 정보를 가져온다.</li>
               <li>검색어 유사도 알고리즘을 활용해 결과 목록을 생성한다.</li>
               <li>검색어를 세션에 저장한다. (최근 검색 목록에 추가)</li>
               <li>결과 목록 보여준다.</li>
               <li>사용자가 개별 결과를 클릭하면 주식 조회 기능으로 넘어간다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">대안<br>시나리오</td>
         <td>
            <ol>
               <li>유사도 알고리즘을 활용하지 못한다면 검색어가 포함되는 정보만 보여준다.</li>
               <li>검색 결과가 없다면 검색 결과가 없다는 창을 보여준다.</li>
            </ol>
         </td>
      </tr>
   </table>
   
   <li>회원가입, 로그인, 로그아웃 기능 명세서</li>
   <table>
      <tr>
         <td class="title">개요</td>
         <td>사용자가 회원가입, 로그인 버튼을 누르면 각 기능에 맞춰 입력창이 뜨고 정보를 입력하면 실행된다. 로그아웃은 로그인한 상태에서 로그아웃 버튼을 누르면 로그인 정보를 없앤다.</td>
      </tr>
      <tr>
         <td class="title">선행 조건</td>
         <td>
            <ol>
               <li>로그인, 회원가입 : 사용자가 메인화면에 접속하여 해당 버튼을 클릭하면 기능을 실행할 수 있는 페이지로 이동한다.</li>
               <li>로그아웃 : 사용자가 로그인 한 상태에서 마이페이지 메뉴에 접속해 로그아웃 버튼을 클릭하면 실행된다.</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td class="title">기본<br>시나리오</td>
         <ul>
            <li>로그인</li>
            <ul>
               <li>사용자가 로그인 페이지에서 아이디와 비밀번호를 입력하고 로그인 버튼을 클릭한다.</li>
               <li>DB에서 사용자의 아이디, 비밀번호 목록을 가져와 일치하는 정보가 있는지 확인한다.</li>
               <li>일치하는 정보가 있다면 로그인한 회원의 정보를 세션에 저장하고 메인 화면으로 이동한다.</li>
               <li>일치하는 정보가 없다면 ‘일치하는 정보가 없습니다.’라는 알림창을 띄우고, 로그인 페이지로 리다이렉트 한다.</li>
            </ul>
            <li>로그아웃</li>
            <ul>
               <li>사용자가 마이페이지 메뉴에서 로그아웃 버튼을 클릭한다.</li>
               <li>로그인한 회원의 정보를 세션에서 지우고, 메인 화면으로 리다이렉트 한다.</li>
            </ul>
            <li>회원가입</li>
            <ul>
               <li>사용자가 회원가입 페이지에서 아이디, 비밀번호, 닉네임, 이메일을 입력하고 로그인 버튼을 클릭한다.</li>
               <li>아이디, 닉네임, 이메일 중복 확인을 한다.</li>
               <li>중복이 없다면 DB에 4가지 정보를 넣어주고, 로그인 페이지로 이동한다.</li>
               <li>중복이 있다면 입력한 정보가 기존 회원과 중복해 다시 입력해 달라는 팝업을 띄운다.</li>
            </ul>
         </ul>
      </tr>
   </table>
</ol>

## 스토리보드
