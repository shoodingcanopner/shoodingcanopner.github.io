---
title: "Markov Process"
date: "2026-02-20"
subject: stochastic processes
tags:
  - study
  - concept
class: study
---

# Markov Process

## Overview

**마르코프 과정(Markov Process)** 은 [[Markov Property]]를 만족하는 확률 과정이다. 미래 상태가 현재 상태에만 의존하고 과거 이력에는 무관하다.

## Key Points

### 분류

| 상태 | 시간 | 이름 |
|------|------|------|
| 이산 | 이산 | Markov Chain |
| 이산 | 연속 | CTMC (Continuous-Time Markov Chain) |
| 연속 | 연속 | Diffusion Process (예: Brownian Motion) |

확률론적 열역학에서 주로 다루는 것은 **CTMC** — 이산 상태, 연속 시간.

### CTMC의 기술

- **마스터 방정식**으로 확률 분포의 시간 진화를 기술
- 전이 속도 행렬 $W$로 완전히 결정됨
- 경로(trajectory)의 확률 → [[Trajectory Probability in Continuous Time Markov Chains]]

## Related Concepts

- [[Markov Property]]
- [[Trajectory Probability in Continuous Time Markov Chains]]
- [[Chapman-Kolmogorov Equation]]
- [[Local Detailed Balance]]
- [[Transition Rate Matrix vs Transition Probability Matrix]]
