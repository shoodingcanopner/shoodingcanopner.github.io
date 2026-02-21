---
title: Sigma-Algebra in Probability Theory
date: 2025-08-24
tags:
  - probability-theory
  - measure-theory
  - sigma-algebra
  - events
  - measurability
  - study
class: concept
---

# Sigma-Algebra in Probability Theory

## Notation 정리

| 기호 | 의미 |
|------|------|
| $Ω$ | 표본공간 (모든 가능한 결과들의 집합) |
| $ω$ | 표본공간의 한 원소 (하나의 시행 결과) |
| $\mathcal{F}$ | Sigma-algebra (사건들의 집합) |
| $A, B, F$ | 사건 ($\mathcal{F}$의 원소, $Ω$의 부분집합) |
| $\mathcal{F}_t$ | 시점 $t$까지의 정보로 구성된 sigma-algebra |
| $\mathcal{G}, \mathcal{H}$ | 일반적인 sigma-algebra |
| $P$ | 확률 측도 ($P: \mathcal{F} \rightarrow [0,1]$) |
| $B_t$ | 시점 $t$에서의 브라운 운동 |
| $X_t$ | 시점 $t$에서의 확률 과정 |
| $\sigma(·)$ | 주어진 집합에 의해 생성된 sigma-algebra |
| $X^{-1}(B)$ | 집합 $B$의 역상 (preimage): $\{ω : X(ω) ∈ B\}$ |

## 정확한 개념 정의

### Sigma-algebra란?
**Definition 2.1.1**: 집합 $Ω$에 대한 sigma-algebra $\mathcal{F}$는 $Ω$의 부분집합들의 모임으로, 다음 조건들을 만족:

1. **공집합 포함**: $∅ ∈ \mathcal{F}$
2. **여집합에 대한 닫힘**: $F ∈ \mathcal{F} \Rightarrow F^c ∈ \mathcal{F}$
3. **가산 합집합에 대한 닫힘**: $A_1, A_2, \ldots ∈ \mathcal{F} \Rightarrow \bigcup_{i=1}^{\infty} A_i ∈ \mathcal{F}$

### 핵심 이해: 사건(Event)의 정체
> 네가 방금,
> **$\mathcal{F}$**: 전체 표본공간 $\Omega$에서 일어날 수 있는 모든 사건들의 집합 (전체 σ-algebra)
> 이라고 했지? 
> 
> 내가 알기론, 위 문장에서 '사건들'또한 어떤 기준을 충족하는 $\omega$의 집합인 걸로 알고 있어. 예를 들어, '1초에서 1m위치에 입자가 있는 사건'이라는 건 $\mathcal{F}$의 한 원소야. 
> 그리고 '1초에서 1m위치에 입자가 있는 사건'은 해당 조건을 만족하는 시행 $\omega$들을 원소로 가지는 집합이야.  그렇지?

말씀하신 게 정확합니다:
- **사건(Event)**: $\mathcal{F}$의 한 원소, 즉 $Ω$의 부분집합
- **사건의 의미**: 특정 조건을 만족하는 $ω$들의 집합

### 구체적 예시

**표본공간**: $Ω = \{\text{모든 가능한 브라운 운동 경로들}\}$
**사건의 예**:
- $A_1 = \{ω : B_1(ω) > 0\}$ = "1초에 입자가 양수 위치에 있는 사건"
- $A_2 = \{ω : \max_{0≤t≤1} B_t(ω) > 2\}$ = "첫 1초 동안 최고점이 2를 넘는 사건"

**중요**: 각 사건은 **해당 조건을 만족하는 시행(경로) $ω$들의 집합**입니다.

## 확률론에서의 역할

### 1. 확률 측도의 정의역
확률 측도 $P: \mathcal{F} \rightarrow [0,1]$
- $P(A)$: 사건 $A$가 일어날 확률
- $A ∈ \mathcal{F}$여야만 확률을 정의할 수 있음

### 2. 측정 가능성(Measurability)의 기준
함수 $X: Ω → \mathbb{R}$이 $\mathcal{F}$-측정 가능하다는 것:
$$X^{-1}(B) ∈ \mathcal{F} \text{ for all Borel sets } B ⊂ \mathbb{R}$$

**중요**: 여기서 $X^{-1}(B)$는 **역함수가 아니라 역상(preimage)**을 의미합니다:
$$X^{-1}(B) = \{ω ∈ Ω : X(ω) ∈ B\}$$

**직관**: $X$의 값에 대한 모든 질문("$X$가 집합 $B$에 속하는가?")에 확률적으로 답할 수 있다.

### 구체적 예시: 측정가능성
**예시 1**: $X(ω) = B_1(ω)$ (1초 시점 브라운 운동)
- $B = (0, ∞)$ (양수 집합)에 대해
- $X^{-1}(B) = \{ω : B_1(ω) > 0\}$ = "1초에 양수 위치에 있는 사건"
- 이 사건이 $\mathcal{F}_1$에 속하므로 $X$는 $\mathcal{F}_1$-측정가능

**예시 2**: $Y(ω) = B_2(ω)$ (2초 시점 브라운 운동)  
- 같은 $B = (0, ∞)$에 대해
- $Y^{-1}(B) = \{ω : B_2(ω) > 0\}$ = "2초에 양수 위치에 있는 사건"
- 이 사건은 $\mathcal{F}_1$에 속하지 않음 (1초 시점에선 미래 정보)
- 따라서 $Y$는 $\mathcal{F}_1$-측정가능하지 않음

## Filtration과의 관계

### 정보의 점진적 공개
$$\mathcal{F}_t = \sigma(B_s : s ≤ t)$$

**의미**:
- $\mathcal{F}_t$: 시점 $t$까지 관찰로 **확률적 판단이 가능한 사건들**의 집합
- 예: $\{ω : B_1(ω) > 0\} ∈ \mathcal{F}_2$ (시점 2에서 판단 가능)
- 예: $\{ω : B_3(ω) > 0\} ∉ \mathcal{F}_2$ (시점 2에서는 미래 정보)

### 구체적 사건 분석

**사건**: "1초에서 입자가 1m 위치에 있다"
- **집합 표현**: $A = \{ω : B_1(ω) = 1\}$
- **확률**: $P(A) = 0$ (연속분포에서 한 점의 확률)
- **측정가능성**: $A ∈ \mathcal{F}_1$ (1초 시점에 판단 가능)

**사건**: "입자가 처음으로 1m에 도달하는 시점이 2초 이전"
- **집합 표현**: $A = \{ω : \inf\{t ≥ 0 : B_t(ω) = 1\} < 2\}$
- **측정가능성**: $A ∈ \mathcal{F}_2$ (2초까지 관찰하면 판단 가능)

## 왜 이런 복잡한 구조가 필요한가?

### 1. 측도론적 엄밀성
- 모든 부분집합에 확률을 할당하면 역설 발생 (Banach-Tarski 역설)
- Sigma-algebra는 **확률을 일관성 있게 정의할 수 있는 사건들만** 선별

### 2. 극한 연산과의 호환성
- 가산 합집합에 닫혀있어서 극한 과정을 다룰 수 있음
- 예: $\lim_{n→∞} P(\bigcup_{i=1}^n A_i) = P(\bigcup_{i=1}^∞ A_i)$

### 3. 조건부 확률의 수학적 기반
조건부 기댓값 $E[X|\mathcal{G}]$는 $\mathcal{G}$-측정가능해야 함

## 실제 적용에서의 이해

### Adapted Process
$X_t$가 $\mathcal{F}_t$-adapted라는 것:
- $X_t^{-1}(B) ∈ \mathcal{F}_t$ for all Borel sets $B$
- **의미**: $X_t$의 값이 시점 $t$까지의 정보만으로 결정 가능

### Martingale 조건
$E[M_s|\mathcal{F}_t] = M_t$에서:
- $\mathcal{F}_t$: 현재까지 관찰 가능한 모든 사건들
- 조건부 기댓값: 이 사건들에 대한 정보를 안 상태에서의 예측

## 핵심 통찰

**Sigma-algebra = "확률적으로 의미 있는 질문들의 집합"**

각 사건 $A ∈ \mathcal{F}$는:
- 수학적으로: $Ω$의 부분집합 
- 확률론적으로: "이런 일이 일어날까?"라는 질문
- 물리적으로: 특정 조건을 만족하는 시행들의 모임

## Reference

[[Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Measurable Functions]] - Sigma-algebra와 측정가능성
- [[Conditional Expectation]] - Sigma-algebra를 조건으로 하는 기댓값
- [[Brownian Motion Properties]] - 브라운 운동이 생성하는 filtration의 구체적 예시
- [[Martingale Properties]] - Filtration과 마팅게일의 관계
- [[Probability Space Construction]] - (Ω, F, P) 삼중체의 구성
