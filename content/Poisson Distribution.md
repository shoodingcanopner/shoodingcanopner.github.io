---
title: Poisson Distribution
date: "2026-02-10"
subject: probability
tags:
  - study
  - concept
  - question
class: study
---

# Poisson Distribution

## Overview

Poisson distribution은 단위 시간당 평균 $\lambda$번 발생하는 사건이 시간 $t$ 동안 정확히 $N$번 일어날 확률을 나타내는 이산 확률 분포이다.

$$
P(N,t) = \frac{(\lambda t)^N e^{-\lambda t}}{N!}
\tag{1}
$$

이 분포는 **exponential waiting time**을 가지는 CTRW (Continuous Time Random Walk)의 결과이며, **모든 cumulant가 동일하다**는 독특한 성질을 가진다.

### Symbol Table

| Symbol                 | Meaning                         | Unit          |
| ---------------------- | ------------------------------- | ------------- |
| $N$                    | Number of events                | dimensionless |
| $t$                    | Time                            | time          |
| $\lambda$              | Rate (events per unit time)     | 1/time        |
| $\langle \tau \rangle$ | Mean waiting time               | time          |
| $\psi(t)$              | Waiting time PDF                | 1/time        |
| $\Psi(t)$              | Survival probability            | dimensionless |
| $\tilde{P}(z,t)$       | Probability generating function | dimensionless |
| $\bar{P}(q,t)$         | Moment generating function      | dimensionless |
| $\hat{P}(q,t)$         | Cumulant generating function    | dimensionless |
| $c_m$                  | m-th cumulant                   | dimensionless |

## Key Points

### 유도 1: 이항분포의 극한

시간 $t$를 $n$개의 작은 구간으로 나누고 ($\Delta t = t/n$), 각 구간에서 사건 발생 확률을 $p = \lambda t/n$으로 설정한다.

$t$시간까지($n$개의 구간 동안) $N$번의 사건이 일어날 확률은 이항분포를 따른다.

$$
P(N) = \binom{n}{N} p^N (1-p)^{n-N}
\tag{2}
$$

$n \to \infty$ 극한에서 ($p \to 0$이지만 $np = \lambda t$ 고정):

$$
\binom{n}{N} \frac{(\lambda t)^N}{n^N} \to \frac{(\lambda t)^N}{N!}
\tag{3}
$$

$$
\left(1-\frac{\lambda t}{n}\right)^{n} \to e^{-\lambda t}
\tag{4}
$$

따라서 식 (1)을 얻는다.

### 유도 2: Exponential Waiting Time

**Waiting time PDF:**

$$
\psi(t) = \lambda e^{-\lambda t}
\tag{5}
$$

Memoryless property를 가지며 평균 waiting time은 $\langle \tau \rangle = 1/\lambda$이다.

**Survival probability** (시간 $t$까지 아무 사건도 안 일어날 확률):

$$
\Psi(t) = \int_t^\infty \psi(t') dt' = e^{-\lambda t}
\tag{6}
$$

**N번 점프의 총 시간 PDF:**

Laplace transform 이용:

$$
\tilde{\psi}(s) = \frac{\lambda}{\lambda + s}
\tag{7}
$$

N-fold convolution:

$$
\tilde{\psi}_N(s) = \left(\frac{\lambda}{\lambda + s}\right)^N
\tag{8}
$$

역변환 (Gamma distribution):
N번의 사건이 일어날 때까지 waiting time distribution

$$
\psi_N(t) = \frac{\lambda^N t^{N-1} e^{-\lambda t}}{(N-1)!}
\tag{9}
$$

**Renewal theory 접근:**

"$[0,t]$ 구간에 정확히 $N$번 점프" = "$N$번째 점프가 $[0,t]$ 안에 일어나고 그 이후 $t$까지는 아무 사건이 안 일어나야 함"

$$
P(N,t) = \int_0^t \psi_N(t') \Psi(t-t') dt'
\tag{10}
$$

계산하면 식 (1)을 얻는다.
$$
P(N,t) = \frac{(\lambda t)^N e^{-\lambda t}}{N!}
\tag{1}
$$
### Generating Functions

**Probability generating function:**

$$
\tilde{P}(z,t) = \sum_{N=0}^\infty P(N,t) z^N = e^{\lambda t(z-1)}
\tag{11}
$$

**Moment generating function:**

$$
\bar{P}(q,t) = e^{\lambda t(e^q - 1)}
\tag{12}
$$

평균: $\langle N \rangle = \lambda t$

분산: $\sigma_N^2 = \lambda t$

**Cumulant generating function:**
은 moment generating function에 로그 취한 것것
$$
\hat{P}(q,t) = \lambda t(e^q - 1) = \lambda t \sum_{m=1}^\infty \frac{q^m}{m!}
\tag{13}
$$

**모든 cumulant가 같다:**

$$
c_m = \lambda t \quad \text{for all } m \geq 1
\tag{14}
$$

이는 푸아송 분포의 독특한 특징으로, mean = variance = higher order cumulants를 의미한다.



## Questions & Insights

**Q1**: 왜 모든 cumulant가 같은가?

MGF의 구조 $\exp(\lambda t(e^q - 1))$에서 자연스럽게 나온다. Taylor expansion하면 모든 차수의 계수가 $\lambda t$가 된다.

**Q2**: Memoryless property의 의미는?

과거에 얼마나 기다렸든 앞으로 기다릴 시간의 분포는 동일하다. 즉 $P(T > t+s | T > t) = P(T > s)$. 이는 exponential distribution만의 특성이다.

## Related Concepts

- [[Moment Generating Function]]
- [[Cumulant Generating Function]]
- [[Central Limit Theorem]]
- [[Brownian Motion Properties]]
- [[Laplace Transform]]
- [[First Passage Renewal Equation]]

## References

- MIT OCW 18.366 Lecture 16: Continuous Time Random Walks
- [[Lecture 16 Continuous Time Random Walks.pdf]]

## Notes from Claude

푸아송 과정은 CTRW의 가장 간단한 예시이다. Exponential waiting time이 memoryless property를 만들고, 이것이 모든 cumulant를 동일하게 만든다는 것이 핵심이다.
