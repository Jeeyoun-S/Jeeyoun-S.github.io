---
layout: page
title: Tree
sitemap: false
permalink: /til/data_structure/java/tree/
---
0. this unordered seed list will be replaced by toc as unordered list
{:toc}

## Tree
- 1 : N 관계로 계층화된 자료 구조
- 비선형 구조

### 용어
- node
  1. root : 최상위 계층 node, 부모 node 없음
  2. leaf : 최하위 계층 node, 자식 node 없음
  3. 형제 : 같은 부모를 갖는 자식 node
  4. 조상 : 부모 Node 상위의 node
  5. 자손 : 자식 Node 하위의 node
- edge 간선 : node를 연결하는 선
- subtree : 부모 node와의 간선을 끊었을 때 tree
- degree 차수
  1. node 차수 : 자식 node의 수
  2. tree 차수 : node 차수 중 최댓값
- 높이
  1. node 높이 : root node부터의 간선 수
  2. tree 높이 : node 높이 중 최댓값

## 이진 트리 Binary Tree
