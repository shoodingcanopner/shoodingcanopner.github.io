---
title: "Kramers-Moyal Expansion"
date: "2026-02-05"
subject: physics
tags:
  - study
  - concept
  - random-walk
class: study
---

# Kramers-Moyal Expansion

## Overview

**Discrete random walk**에서 **continuous PDE**로 넘어가는 체계적인 방법

Kramers-Moyal expansion은 [[Bachelier's Equation (Convolution theorem)]]
$$
P_{N+1}(x) = \int_{-\infty}^{\infty} p(y) P_N(x-y) dy
$$
이것을 **연속 시공간의 편미분방정식(PDE)** 으로 변환하는 테크닉이다. 
핵심 아이디어는: **step size y가 충분히 작을 때, 확률 분포 $P_N(x-y)$ 를 $-y$에 대해 Taylor 전개할 수 있다**.

그 결과 최종적으로 이런 식이 나온다.
$$
\boxed{\frac{\partial \rho}{\partial t} = -D_1\frac{\partial \rho}{\partial x} + D_2\frac{\partial^2\rho}{\partial x^2} - D_3\frac{\partial^3\rho}{\partial x^3} + \cdots}
$$

첫 두 항만 남기면 → **Fokker-Planck equation** (advection-diffusion)

하지만 이 expansion에는 미묘한 문제가 있다...

## Symbol Table

| Symbol      | Meaning                                       |
| ----------- | --------------------------------------------- |
| $P_N(x)$    | N번 step 후 위치의 이산 확률 분포                        |
| $\rho(x,t)$ | 연속 시공간에서의 확률 밀도: $\rho(x,N\tau) = P_N(x)$     |
| $p(y)$      | 한 step의 변위 분포 (single-step PDF)               |
| $\tau$      | Step 간 시간 간격                                  |
| $m_n$       | step size의 n차 moment: $m_n = \int y^n p(y)dy$ |
| $D_n$       | Jump coefficient: $D_n = \frac{m_n}{n!\tau}$  |
| $\sigma$    | Step size의 표준편차                               |
## 출발점: Bachelier's Equation

[[Bachelier's Equation (Convolution theorem)]]에서:
$$
P_{N+1}(x) = \int_{-\infty}^{\infty} p(y) P_N(x-y) dy
$$

## Taylor Expansion

### Step 1: $P_N(x-y)$를 전개

$p(y)$가 $|y| \lesssim \sigma$ 범위에 집중되므로
y가 작게 변한다고 치고 $P_N$을 x 근처에서 전개
$$
P_N(x-y) = \sum_{n=0}^{\infty} \frac{(-y)^n}{n!} \frac{d^n P_N(x)}{dx^n}
$$

### Step 2: Bachelier's equation에 대입

$$
P_{N+1}(x) = \int_{-\infty}^{\infty} p(y) \sum_{n=0}^{\infty} \frac{(-y)^n}{n!} \frac{d^n P_N(x)}{dx^n} dy
$$

Linearity of integration:

$$
P_{N+1}(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{n!} \frac{d^n P_N(x)}{dx^n} \int_{-\infty}^{\infty} y^n p(y) dy
$$

### Step 3: 테일러 급수에서 나온 polynomial과 확률 분포 적분이 만나 moments가 나옴

$$
\boxed{m_n = \int_{-\infty}^{\infty} y^n p(y) dy}
$$
따라서:
$$
P_{N+1}(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{n!} m_n \frac{d^n P_N(x)}{dx^n}
$$

$m_0 = 1$ (normalization)이므로:

$$
P_{N+1}(x) = P_N(x) + \sum_{n=1}^{\infty} \frac{(-1)^n}{n!} m_n \frac{d^n P_N(x)}{dx^n}
$$

## PDE로 변환

### 시간 미분 근사

$$
\frac{P_{N+1}(x) - P_N(x)}{\tau} \approx \frac{\partial \rho(x,t)}{\partial t}
$$

### Jump Coefficients 정의

$$
D_n = \frac{m_n}{n! \tau}
$$

### 최종 결과: Kramers-Moyal Expansion

$$
\boxed{\frac{\partial \rho}{\partial t} = \sum_{n=1}^{\infty} (-1)^n D_n \frac{\partial^n \rho}{\partial x^n}}
$$

명시적으로:

$$
\frac{\partial \rho}{\partial t} = -D_1 \frac{\partial \rho}{\partial x} + D_2 \frac{\partial^2 \rho}{\partial x^2} - D_3 \frac{\partial^3 \rho}{\partial x^3} + \cdots
$$

## 물리적 해석

### 각 항의 의미

| 항 | 의미 |
|---|---|
| $D_1 \frac{\partial \rho}{\partial x}$ | **Drift** (평균 속도) |
| $D_2 \frac{\partial^2 \rho}{\partial x^2}$ | **Diffusion** (확산) |
| $D_3 \frac{\partial^3 \rho}{\partial x^3}$ | **Skewness** (비대칭성) |
| $D_n$ | 고차 비선형 효과 |

### Fokker-Planck Equation

첫 두 항만 남기면:

$$
\boxed{\frac{\partial \rho}{\partial t} + v\frac{\partial \rho}{\partial x} = D\frac{\partial^2 \rho}{\partial x^2}}
$$

여기서:
- $v = D_1 = \frac{m_1}{\tau}$ (drift velocity)
- $D = D_2 = \frac{m_2}{2\tau} = \frac{\sigma^2}{2\tau}$ (diffusion coefficient)

**Advection-Diffusion Equation**

## 왜 테일러 전개가 정당화되는가?

### Continuum Limit의 조건

$$
N \to \infty, \quad \tau \to 0, \quad \text{but } N\tau = t \text{ (fixed)}
$$

이때:

1. **Step size distribution $p(y)$**: 
   - 폭 ~ $\sigma$ (small!)
   - $\tau \to 0$이면 $\sigma \sim \sqrt{\tau} \to 0$
   - **점점 더 뾰족해짐** (→ $\delta$-function처럼)

2. **Position distribution $P_N(x)$**:
   - 폭 ~ $\sigma\sqrt{N}$ (large!)
   - 이 스케일에서는 **완만하게 변함**
→ **Taylor 전개 정당화!**

## 이 Expansion의 문제점

### 1. 시간 미분의 근사 문제

좌변: $\frac{\partial \rho}{\partial t}$ (1차 미분만)
우변: 모든 공간 고차 미분 포함

**고차 시간 미분이 사라졌다!**

더 정확한 전개:

$$
\frac{P_{N+1} - P_N}{\tau} = \frac{\partial \rho}{\partial t} + \frac{\tau}{2}\frac{\partial^2 \rho}{\partial t^2} + \frac{\tau^2}{3!}\frac{\partial^3 \rho}{\partial t^3} + \cdots
$$
이다. 왜냐면
$$
\rho(x,N\tau + \tau) = \rho(x,N\tau) + \tau\frac{\partial \rho}{\partial t} + \frac{\tau^2}{2}\frac{\partial^2 \rho}{\partial t^2} + \frac{\tau^3}{3!}\frac{\partial^3 \rho}{\partial t^3} + \cdots
$$
이기 때문

이것을 고려하면 훨씬 복잡한 PDE가 됨 (Lecture 8의 식 11 참조)

### 2. Moments vs Cumulants

Kramers-Moyal expansion은 **moments $m_n$** 을 사용한다.

하지만 **cumulants $\kappa_n$** 이 더 fundamental한 파라미터라고 보통 평가한다. 

왜냐하면:
- $m_2 = \langle x^2 \rangle$ (평균의 제곱 포함)
- $\kappa_2 = \sigma^2 = m_2 - m_1^2$ (진짜 분산)

**Central Limit Theorem**에서 중요한 것은 cumulants!


## Continuum Limit의 조건

### 정확히 언제 성립하는가?

$$
\sigma \ll \sigma\sqrt{N} \quad \Rightarrow \quad N \gg 1
$$

더 정확히:

$$
\tau \to 0, \quad N \to \infty, \quad N\tau = t \text{ fixed}
$$

이때:
- Step size: $\sigma \sim \sqrt{\tau} \to 0$
- 총 변위: $\sqrt{N\sigma^2} = \sqrt{t\sigma^2/\tau} \sim \sqrt{t}$ (유한)

## Related Concepts

- [[Bachelier's Equation (Convolution theorem)]]
- [[Chapman-Kolmogorov Equation]]
- [[Central Limit Theorem]]
- [[Cumulant Generating Function]]
- [[Moment Generating Function]]
- [[Gram-Charlier Expansion]]

## References

- MIT OCW 18.366, Lecture 8 (Bazant)
 [[Lecture 8 The Continuum Limit.pdf]]
