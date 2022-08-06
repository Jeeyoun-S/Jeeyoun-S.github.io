---
layout: page
title: JVM Memory
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

### Java의 메모리
- Garbage Collection(GC)이 메모리 관리 → 개발자가 관리 X
- Class Loader → `.class` 를 읽어들여 메모리에 올린다.
- 메모리 영역
    - 클래스(메소드) 영역 : 클래스 정보 저장
    - Heap : 인스턴스 생성
    - Stack : 메서드 수행 시 프레임 할당, 필요한 변수나 중간 결과 값 임시 암기, 메서드 종료 시 할당 메모리 자동 제거

### Garbage Collection
- Heap 영역(class 영역 포함)에 생성된 메모리 관리 담당
- 더 이상 사용되지 않는 객체들을 점검해 제거
- 자동적 실행 (CPU 한가하거나 메모리 부족할 때)
- JVM에 의해 실행
- `System.gc()`를 통해 호출 (시스템 영향을 줘서 하지 않기)
- 참고자료 [https://d2.naver.com/helloworld/1329](https://d2.naver.com/helloworld/1329)

### static VS non-static


    | 분류 | static | non-static |
    | ----- | ----- | ----- |
    | 로딩 | 클래스 로딩 시 | 객체 생성 시 |
    | 메모리 | 클래스당 한 개의 메모리 공간 할당 | 인스턴스당 메모리 별도 할당 |
    | 문법 특징 | 클래스 이름으로 접근 | 객체 생성 후 접근 |
    | 접근 | non-static 영역에 접근 불가 | static 영역에 접근 가능 |
