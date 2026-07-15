---
title: "Trajectory Probability in Markov Chains"
date: "2026-02-20"
subject: stochastic thermodynamics
tags:
  - study
  - concept
  - question
class: study
---

# Trajectory Probability in Markov Chains

## Overview

Continuous time Markov chain(CTMC)에서 특정 **경로(trajectory)** 가 일어날 확률을 정의하는 공식. 확률론적 열역학에서 요동 정리(Fluctuation Theorem)와 엔트로피 생성을 경로 수준에서 다루는 출발점이 된다.

![[Pasted image 20260220152819.png]]

## Key Points

### 기호 정리

| Symbol | Meaning |
|--------|---------|
| $\gamma = [\gamma_0, \gamma_1, \ldots, \gamma_n]$ | 상태들의 순서열 (trajectory) |
| $[t_0, t_1, \ldots, t_{n+1}]$ | 각 전이가 일어난 시각, $t_0=0$, $t_{n+1}=\tau$ |
| $W^\lambda_{\gamma_i \gamma_{i-1}}(t_i)$ | 시각 $t_i$에 $\gamma_{i-1} \to \gamma_i$ 전이 속도 |
| $W^\lambda_{\gamma_i \gamma_i}(t)$ | 상태 $\gamma_i$의 대각 원소 (음수), $= -\sum_{j \neq \gamma_i} W_{j\gamma_i}$ |
| $\lambda_t$ | 시간에 따라 변하는 외부 제어 프로토콜 |

### Trajectory Probability (식 10)

$$
\mathcal{P}_\gamma = p(\gamma_0, 0) \prod_{i=1}^{n} W^\lambda_{\gamma_i \gamma_{i-1}}(t_i) \prod_{i=0}^{n} e^{\int_{t_i}^{t_{i+1}} W^\lambda_{\gamma_i \gamma_i}(t)\, dt}
\tag{1}
$$

세 가지 기여의 곱으로 구성된다:

- **$p(\gamma_0, 0)$**: 초기 상태 $\gamma_0$에 있을 확률
- **$\prod W^\lambda_{\gamma_i \gamma_{i-1}}(t_i)$**: 각 전이 사건이 일어날 속도의 곱
- **$\prod e^{\int W^\lambda_{\gamma_i \gamma_i} dt}$**: 각 상태에서 머무는 동안의 survival probability

### Survival Probability — 왜 exponential인가

상태 $\gamma_i$에 머무는 동안 다른 어떤 상태로도 전이하지 않을 확률 $S(t)$를 구한다. 총 탈출 속도는:

$$
\lambda(t) = -W^\lambda_{\gamma_i \gamma_i}(t) = \sum_{j \neq \gamma_i} W_{j\gamma_i}(t)
\tag{2}
$$

짧은 시간 $dt$ 동안 탈출하지 않을 확률이 $(1 - \lambda(t)\,dt)$이므로:

$$
\frac{dS}{dt} = -\lambda(t) \cdot S(t)
\tag{3}
$$

이 미분방정식의 해가 survival probability다:

$$
S(t_i \to t_{i+1}) = e^{-\int_{t_i}^{t_{i+1}} \lambda(t)\,dt} = e^{\int_{t_i}^{t_{i+1}} W^\lambda_{\gamma_i \gamma_i}(t)\,dt}
\tag{4}
$$

**exponential은 "단위 시간당 일정 비율로 이탈"하는 구조에서 항상 나온다.** 방사성 붕괴, first-order 화학 반응과 동일한 수학 구조.

$\lambda$가 상수이면 $S = e^{-\lambda \Delta t}$로 단순화된다. 식 (1)의 적분 형태는 $\lambda_t$가 시간에 따라 변하는 일반적인 경우다.

### 직관적 이해

trajectory probability는 세 종류의 "사건"을 모두 곱한 것이다:

1. 거기서 **시작했을** 확률
2. 각 전이가 **정확히 그 시각에** 일어날 속도
3. 각 상태에서 **다음 전이까지 탈출하지 않고 버텼을** 확률

이 세 기여를 분리해서 생각하면 식 (1)의 구조가 자연스럽다.

## Questions & Insights

- Q: Survival probability에서 왜 exponential이 나오는가?
  A: "단위 시간당 확률 $\lambda(t)$로 탈출"이라는 조건이 $dS/dt = -\lambda S$라는 미분방정식을 만들고, 그 해가 exponential이다. $\lambda$가 시간에 따라 변하면 지수에 적분이 들어간다.

## Related Concepts

- [[Markov Property]]
- [[Entropy Production Rate]]
- [[Local Detailed Balance]]
- [[📑 Journal reading - Stochastic thermodynamics for biological functions]]
- [[Markov Process]]

## References

- Cao & Liang, *Stochastic thermodynamics for biological functions*, Quantitative Biology, 2025. DOI: 10.1002/qub2.75

## Notes from Claude

Survival probability의 exponential 구조는 확률론적 열역학 전반에서 반복 등장한다. Gillespie algorithm이 이 구조를 직접 이용해서 CTMC를 시뮬레이션하고, 요동 정리(Fluctuation Theorem)에서 시간 역전 trajectory의 확률비를 계산할 때도 이 식이 출발점이 된다.
