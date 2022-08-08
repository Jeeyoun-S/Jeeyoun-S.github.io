---
layout: page
title: Abstract Collection Framework
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Collection Framework
- 객체를 한 곳에 모아서 사용하는 환경 제공
- 정적 자료구조 Static structure
    - 고정된 크기, 선언할 때 크기를 명시하면 수정 불가 (ex. 배열 등)
- 동적 자료구조 Dynamic structure
    - 요소의 개수에 따라 자료구조의 크기가 동적으로 변화 (ex. 리스트, 스택, 큐 등)

## Collection interface

| 분류 | Collections | List |
| --- | --- | --- |
| 추가 | `add(E e)` `addAll(Collection<? extends E> c` | `add(int index, E element)` `addAll(int index, Collection<? extends E> c)` 
| 조회 | `contains(Object o)` `containsAll(Collection<?> c)` `equals()` `isEmpty()` `iterator()` `size()` | `get(int index)` `indexOf(Object o)` `lastIndexOf(Objext o)` `listIterator()` |
| 삭제 | `clear()` `removeAll(Collection<?> c)` `retainAll(Collection<?> c)` | `remove(int index)` |
| 수정 |  | `set(int index, E element)` |
| 기타 | `toArray()` | `subList(int fromIIndex, int tolndex)` |

## 핵심 interface
### List : 순서O, 중복O, 동적
- `ArrayList`
    - 선언 `List<String> staff = new ArrayList<>();`
    - Collection Interface
        - `add(E element)` : 데이터 입력
        - `get(int index)` : 데이터 추출
        - `size()` : 입력된 데이터의 크기 반환
        - `remove(int i)` : 특정한 데이터를 삭제
        - `remove(Object o)` : 특정한 데이터를 삭제
        - `clear()` : 모든 데이터 삭제
        - `contains(Object o)` : 특정 객체가 포함되어 있는지 체크
        - `isEmpty()` : 비어있는지 체크 (true, false)
        - `addAll(Collection c)` : 기존 등록된 콜렉션 데이터 입력
        - `iterator()` : iterator 인터페이스 객체 반환
- `LinkedList`
- `Vector`

### Set : 순서X, 중복X
- 장점 : 빠른 속도, 효율적인 중복 제거 수단
- 단점 : 단순 집합의 개념으로 정렬하려면 별도의 처리 필요
- Collection Interface
    - add(E e) : 데이터 입력
    - size() : 입력된 데이터의 크기 반환
    - remove(Object o) : 특정한 데이터를 삭제
    - clear() : 모든 데이터 삭제
    - contains(Object o) : 특정 객체가 포함되어 있는지 체크
    - isEmpty() : 비어있는지 체크 (true, false)
    - iterator() : iterator 인터페이스 객체 반환
    - toArray() : Set의 내용을 Object 형의 배열로 변환
- `HashSet`
- `TreeSet`

### Map : 순서X, Key 중복X, Value 중복O
- 장점 : 빠른 속도
- Collection Interface
    - V put(K key, V value) : 데이터 입력
    - V get(Object key) : 데이터 추출
    - V remove(K key) : 입력된 데이터의 크기 반환
    - boolean containsKey(Object key) : 특정한 key 포함 여부
    - void putAll(map<K key, V value> m) : 기존 콜렉션 데이터 추가
    - `Set<Map.Entry<K,V> entrySet()>` : key와 value 쌍을 표현하는 Map.Entry 반환
- `HashMap`
- `TreeMap`
- `HashTable`
- `Properties`

### 정렬

- Set에서는 SortedSet의 자식 객체
- Map에서는 SortedMap의 자식 객체 (Key 기준)
- sort(List<T> list)

### Comparable Interface
