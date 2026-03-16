---
title: "Markov Property"
date: "2026-02-20"
subject: stochastic processes
tags:
  - study
  - concept
class: study
---

# Markov Property

## Overview

**마르코프 성질(Markov Property)** 은 확률 과정에서 미래 상태가 **현재 상태에만** 의존하고, 과거 이력에는 무관하다는 조건이다.

$$
P(\gamma_{n+1} \mid \gamma_n, \gamma_{n-1}, \ldots, \gamma_0) = P(\gamma_{n+1} \mid \gamma_n)
\tag{1}
$$

"현재가 과거를 요약한다"는 직관. 과거를 아무리 많이 알아도, 현재 상태 이상의 예측력을 얻을 수 없다.

## Key Points

- 마르코프 성질을 만족하는 확률 과정 → **마르코프 과정 (Markov Process)**
- 이산 상태, 연속 시간 버전 → **CTMC (Continuous-Time Markov Chain)**, 마스터 방정식으로 기술
- 이 성질 덕분에 trajectory probability를 각 전이의 곱으로 분해할 수 있다 → [[Trajectory Probability in Continuous Time Markov Chains]]

## Related Concepts

- [[Markov Process]]
- [[Trajectory Probability in Continuous Time Markov Chains]]
- [[Chapman-Kolmogorov Equation]]
- [[Transition Rate Matrix vs Transition Probability Matrix]]
