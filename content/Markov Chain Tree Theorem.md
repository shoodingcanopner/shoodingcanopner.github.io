---
title: "Markov Chain Tree Theorem"
date: "2026-02-23"
subject: stochastic processes, graph theory
tags:
  - study
  - concept
  - question
class: study
---

# Markov Chain Tree Theorem

## Overview

정규 마르코프 체인(regular Markov chain)의 정상 분포(stationary distribution) $\boldsymbol{\mu}$를 전이 그래프의 **spanning tree 구조**로부터 직접 계산하는 정리. 선형방정식 $\boldsymbol{\mu} = \boldsymbol{\mu}P$를 풀지 않고도 그래프의 위상적 구조만으로 $\mu_i$를 구할 수 있다.

## Key Points

### 기본 설정

| Symbol                                      | Meaning                                                 |
| ------------------------------------------- | ------------------------------------------------------- |
| $(j,i)$                                     | i에서 j로 가는 arc                                           |
| $W = [w_{ji}]$                              | 전이 확률 행렬 ($w_{ji}$: state $i \to j$ 확률)                 |
| $g = (V, A)$                                | 전이 그래프 (arc $(j,i) \in A$ iff $w_{ji} > 0$, $i \neq j$) |
| $\boldsymbol{\pi} = (\pi_1, \cdots, \pi_n)$ | 정상 분포                                                   |
| $\Phi_i$                                    | sink가 $i$인 모든 confluence의 집합                            |
| $p(f)$                                      | confluence $f$의 가중치                                     |

### Confluence (합류 트리)

**Confluence with sink $i$**: 전이 그래프 $g$의 spanning subgraph $f = (V, B)$로, 다음 조건을 만족한다. 

1. 각 vertex의 **out-degree ≤ 1** (나가는 arc가 최대 1개)
2. **cycle 없음** (끝과 끝이 이어지는 arc가 없음)
3. 위 두 조건 하에서 더 이상 arc를 추가할 수 없다. (**최대**)

결과적으로 sink $i$를 제외한 모든 vertex에서 출발하는 경로가 결국 $i$로 수렴하는 **방향성 spanning tree** 인 것이다. 

> **주의**: sink $i$는 in-degree가 여럿일 수 있지만, out-degree = 0. "각 vertex의 successor가 최대 1개"는 **나가는 방향** 기준임.

### 핵심 공식

각 confluence $f = (V, B)$의 가중치는 다음과 같이, 
confluence $f$가 가진 모든 arc의 transition probability를 곱한 것이다. 

$$
p(f) = \prod_{(j,i) \in B} w_{ji}
\tag{1}
$$

정상 분포는 다음과 같이 계산할 수 있다. 
$\boldsymbol{\pi}_i$는 $i$를 sink로 가지는 모든 confluence $f$의 가중치 $p(f)$를 전부 더한 것과 비례한다. 

$$
\pi_i = C \sum_{f \in \Phi_i} p(f)
\tag{2}
$$

여기서 $C > 0$는 $\sum_i \mu_i = 1$로 결정되는 normalization 상수.

### 이걸 어떻게 증명하는가?

$f + (j,i)$는 confluence f에 arc $(j,i)$를 추가한 새로운 subgraph를 의미한다. 
두 집합을 이렇게 정의 할 수 있다. 

$$
S_j = \{f + (i,j) : f \in \Phi_j,\ i \in V \setminus \{j\}\}
$$
$$
R_j = \{f + (j, i) : f \in \Phi_i,\ i \in V \setminus \{j\}\}
$$

$S_j$는 "j가 sink인 confluence를 하나 고른다, 거기에 j에서 임의의 노드 i로 나가는 가지를 추가한다." 라는 시행으로 만들 수 있는 모든 sub graph의 집합이다. 
$R_j$는 "j가 아닌 i를 하나 고른다. i가 sink인 confluence하나를 고른다. 거기에 i에서 j로 나가는 노드를 하나 추가한다." 라는 시행으로 만들 수 있는 모든 sub graph의 집합이다. 

사실 두 집합이 완전 같은 집합이라는 것을 **전단사 대응** $S_j \leftrightarrow R_j$가 존재함을 통해 보일 수 있다. 그림을 참고하라. 
j가 sink인 confluence에 arc$(i,j)$를 추가하면 그 그래프는 $S_j$의 원소이다. 
i가 sink인 confluence에 arc$(j,i)$를 추가하면 그 그래프는 $R_j$의 원소이다. 
그런데 방금 만든 두 개가 사실 같은 그래프다. 

![[forest.png]]

식 (1)과 식(2)를 이용하여 다음 두 식이 성립한다. 
$$
\pi_j \sum_{\substack{i=1  \\ i \neq j}}^n w_{ij} = \sum_{h \in S_j}p(h)
\tag{3-1}
$$
$$
 \sum_{\substack{i=1  \\ i \neq j}}^n w_{ji}\pi_i = \sum_{h \in R_j}p(h)
\tag{3-2}
$$

그런데 식 (3-1)의 좌변에 있는 summation 부분은 값이 1이고, 방금 $S_j$와 $R_j$가 같음을 보였다. 
따라서 두 식은 같으며, 최종적으로 

$$
\boldsymbol{\pi} = W\boldsymbol{\pi}
$$
이다. 이것이 바로 평형 상태 방정식.

직관적으로 따졌을 때, 식 (3-1)은 상태 $j$에서 탈출하는 current의 합이고, 식 (3-2)는 상태 $j$로 들어오는 currnet의 합이다. 그리고 이 둘이 같은 값인 게 평형 상태다. 

## Questions & Insights

## Related Concepts

- [[Markov Process]]
- [[Markov Property]]
- [[detailed balance]]
- [[Kolmogorov's Criterion]]
- [[Trajectory Probability in Continuous Time Markov Chains]]
- [[Steady-State vs Equilibrium State]]

## References

- Shubert, B. O. (1975). A flow-graph formula for the stationary distribution of a Markov chain. *IEEE Transactions on Systems, Man, and Cybernetics*.
- [[Journal reading - A Flow-Graph Formula for the Stationary Distribution of a Markov Chain]]

> [!warning] Notation 주의
> 원 논문은 row stochastic 표기 ($p_{ij}$: $i \to j$, arc $(i,j)$)를 사용하지만, 이 노트는 column stochastic 표기 ($w_{ji}$: $i \to j$, arc $(j,i)$)를 사용함.
## Notes from Claude

물리적 직관: $\mu_i$가 크다는 것은 "모든 흐름이 $i$로 수렴하는 패턴"이 많고 강하다는 것 → 정상 상태에서 $i$에 오래 머문다.

계산 복잡도 측면에서는 state 수 $n$이 커질수록 confluence의 수가 기하급수적으로 증가하므로, 실용적으로는 tree-like 구조의 그래프에서 특히 유리하다.
