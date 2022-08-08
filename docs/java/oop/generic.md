---
layout: page
title: Generic
hide_description: true
sitemap: false
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Generics
- 다양한 타입의 객체를 다루는 메서드
- 미리 사용할 타입을 명시해 형 변환 불필요
- 객체 타입에 대한 안전성 확보
- `ClassName<T>` `InterfaceName<T>`
    - **T** : reference Type, **E** : Element, **K** : Key, **V** : Value
- 사용 방법
    1. 클래스 생성
        
        ```java
        class ClassName<T> {
        		private T name;
        		public T getter() {
        				return name;
            }
        		public void setter(T newname) {
        				this.name = newname;
        		}
        }
        ```
    2. 객체 생성
        - `ClassName<String> variable1 = new ClassName<String>();`
        - `ClassName<String> variable2 = new ClassName<>();` 
        - `ClassName variable3 = new ClassName<>();` 
    3. 사용
        - T로 객체 한정 → T의 자식까지만 허용
        - Object로 객체 설정 → 어떤 객체든지 허용
- Type parameter 제한
    - `ClassName<T extends Number>` T의 상위 타입 Number
    - `ClassName<T extends Number & InterfaceName>` 클래스와 인터페이스 제약 조건 이용
- Generic Type 객체 할당 받을 때
    - `Generic type<?>` 타입 제한 무
    - `Generic type<? extends T>` T와 T의 자식 클래스 가능
    - `Generic type<? super T>` T와 T의 부모 클래스 가능
- Generic Method ******************************
    
    ```java
    public <T, T2> void info(T v1, T2 v2)  {
    		
    }
    ```
    
    - 파라미터, 리턴 타입 → type parameter
