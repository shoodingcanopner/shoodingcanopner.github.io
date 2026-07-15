---
title: Transition Rate Matrix vs Transition Probability Matrix
date: 2026-01-20
subject: statistical physics
tags:
  - study
  - concept
  - question
class: study
---

# Transition Rate Matrix vs Transition Probability Matrix

## Overview

마르코프 과정을 기술하는 두 가지 행렬: transition probability matrix (이산 시간)와 transition rate matrix (연속 시간). 둘은 서로 다른 제약 조건을 만족하며, infinitesimal generator 관계로 연결된다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $P_{ij}$ | Transition probability from state $j$ to $i$ |
| $\Omega_{ij}$ | Transition rate from state $j$ to $i$ |
| $\Delta t$ | Small time interval |

# Transition Probability Matrix ($P$ or $T$)

**정의:**
- $P_{ij}$ = 상태 $j$에서 상태 $i$로 전이할 **확률**
- 무차원 (dimensionless)
- 값의 범위: $0 \leq P_{ij} \leq 1$

**제약 조건:**
$$
\sum_i P_{ij} = 1
$$
각 열(또는 행, convention에 따라)의 합이 1

**시간:**
- **Discrete-time** Markov chain
- $p(t+1) = P p(t)$

**물리적 의미:**
- "30% 확률로 전이"
- 한 time step에서의 전이

# Transition Rate Matrix ($\Omega$, $Q$, or $L$)

**정의:**
- $\Omega_{ij}$ (for $i \neq j$) = 상태 $j$에서 상태 $i$로 전이하는 **rate** (단위시간당 전이 확률)
- 차원: $[\text{time}]^{-1}$
- 값의 범위: $\Omega_{ij} \geq 0$ for $i \neq j$

**제약 조건:**
$$
\sum_i \Omega_{ij} = 0
$$
각 열의 합이 0

**Diagonal elements:**
$$
\Omega_{ii} = -\sum_{j \neq i} \Omega_{ji}
$$
나가는 rate들의 총합을 음수로

*의미상 i 상태에서 i로가는 rate니까 i에 남아있는 rate를 나타내야할 것 같은데, 실상을 보면 반대로 escape rate의 값을 갖고 있다.*

**시간:**
- **Continuous-time** Markov process
- Master equation: $\frac{dp}{dt} = \Omega p$

**물리적 의미:**
- "초당 0.3번 전이"
- Infinitesimal rate

# 두 행렬의 관계

**Taylor expansion:**
$$
P(\Delta t) = I + \Omega \Delta t + O(\Delta t^2)
$$

여기서:
- $P(\Delta t)$: 짧은 시간 $\Delta t$ 동안의 전이 확률 행렬
- $\Omega$: Infinitesimal generator (transition rate matrix)
- $I$: Identity matrix

**의미:**
- $\Omega$는 $P(t)$의 시간 미분 (at $t=0$)
항등행렬로 한번 뺴준다는 건 transition과 관련된 성분만 남기겠다는 의미
$$\Omega = \lim_{\Delta t \to 0} \frac{P(\Delta t) - I}{\Delta t}$$

### 왜 Rate Matrix의 열 합이 0인가?

확률 보존(probability conservation)을 보장:

$$
\frac{d}{dt}\sum_i p_i(t) = \sum_i \frac{dp_i}{dt} = \sum_i (\Omega p)_i = \sum_i \sum_j \Omega_{ij} p_j
$$

각 $j$에 대해 $\sum_i \Omega_{ij} = 0$이면:
$$
\frac{d}{dt}\sum_i p_i(t) = 0
$$

즉, 전체 확률이 보존됨.

## Comparison Table

| Property     | Probability Matrix $P$ | Rate Matrix $\Omega$       |
| ------------ | ---------------------- | -------------------------- |
| Time         | Discrete               | Continuous                 |
| Dimension    | Dimensionless          | [time]$^{-1}$              |
| Constraint   | $\sum_i P_{ij} = 1$    | $\sum_i \Omega_{ij} = 0$   |
| Diagonal     | $0 \leq P_{ii} < 1$    | $\Omega_{ii} < 0$          |
| Off-diagonal | $0 \leq P_{ij} \leq 1$ | $\Omega_{ij} \geq 0$       |
| Evolution    | $p(t+1) = Pp(t)$       | $\frac{dp}{dt} = \Omega p$ |
| Meaning      | "확률"                   | "rate (단위시간당)"             |

## Questions & Insights

- Rate matrix가 generator matrix라고 불리는 이유: continuous-time semigroup $e^{\Omega t}$의 infinitesimal generator
- Probability matrix에서 rate matrix 유도 가능: $\Omega = \lim_{\Delta t \to 0} \frac{P(\Delta t) - I}{\Delta t}$
- Rate matrix는 항상 음의 고유값을 가짐 (stability) → 오호

## Related Concepts

- [[Markov Property]]
- [[📑 Journal reading - Shortcuts in Stochastic Systems and Control of Biophysical Processes]]

## References

- Ilker et al., "Shortcuts in Stochastic Systems and Control of Biophysical Processes", Phys. Rev. X 12, 021048 (2022), Section II.A

## Notes from Claude

이 두 행렬의 차이를 이해하는 것이 master equation을 다루는 데 중요하다. 특히 생물물리 시스템에서는 continuous-time description이 자연스러운데, 이때 rate matrix $\Omega$를 사용한다.

Ilker 논문에서 $\Omega(\lambda_t)$의 off-diagonal이 "conditional probability **per unit time**"라고 명시한 것이 핵심이다.
