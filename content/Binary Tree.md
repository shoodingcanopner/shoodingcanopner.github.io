---
title: Binary Tree
date: 2026-01-13
subject: computer science
tags:
  - study
  - concept
class: study
---

# Binary Tree

## Overview

이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 자료구조이다. 왼쪽 자식(left child)과 오른쪽 자식(right child)으로 구분되며, 계층적 데이터를 표현하거나 효율적인 탐색/정렬에 활용된다.

## 용어 정의

| 용어 | 의미 |
|------|------|
| Root | 트리의 최상위 노드 |
| Leaf | 자식이 없는 노드 (단말 노드) |
| Height | 루트에서 가장 깊은 리프까지의 경로 길이 |
| Depth | 루트에서 특정 노드까지의 경로 길이 |
| Subtree | 특정 노드를 루트로 하는 부분 트리 |

## 이진 트리의 종류

**정 이진 트리 (Full Binary Tree)**
모든 노드가 0개 또는 2개의 자식을 가지는 트리.

**완전 이진 트리 (Complete Binary Tree)**
마지막 레벨을 제외한 모든 레벨이 완전히 채워져 있고, 마지막 레벨은 왼쪽부터 채워진 트리.

**포화 이진 트리 (Perfect Binary Tree)**
모든 내부 노드가 2개의 자식을 가지고, 모든 리프가 같은 깊이에 있는 트리.

**균형 이진 트리 (Balanced Binary Tree)**
모든 노드에서 왼쪽과 오른쪽 서브트리의 높이 차이가 1 이하인 트리.

## 주요 속성

높이가 $h$인 이진 트리의 노드 수 $n$:
$$
h + 1 \leq n \leq 2^{h+1} - 1
\tag{1}
$$

$n$개의 노드를 가진 완전 이진 트리의 높이:
$$
h = \lfloor \log_2 n \rfloor
\tag{2}
$$

## 순회 방법 (Traversal)

**전위 순회 (Preorder)**: Root → Left → Right
**중위 순회 (Inorder)**: Left → Root → Right  
**후위 순회 (Postorder)**: Left → Right → Root
**레벨 순회 (Level-order)**: BFS 방식으로 레벨별 탐색

## Questions & Insights

- 이진 탐색 트리(BST)에서 중위 순회를 하면 정렬된 순서로 노드를 방문하게 된다. 왜 그럴까?
- 균형 트리(AVL, Red-Black)는 왜 필요한가? 편향 트리가 되면 탐색 시간이 $O(n)$으로 퇴화하기 때문.

## Related Concepts

- (관련 노트 추가 예정)

## References

- 이 노트는 대화 중 생성됨

## Notes from Claude

이진 트리는 컴퓨터 과학에서 가장 기본적이면서도 강력한 자료구조 중 하나이다. 재귀적 구조를 가지고 있어 분할 정복(divide and conquer) 알고리즘과 자연스럽게 연결된다. 힙(Heap), 이진 탐색 트리(BST), 표현식 트리 등 다양한 응용이 존재한다.
