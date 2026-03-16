---
title: "Cumulant Generating Function"
date: "2026-02-04"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Cumulant Generating Function

## Overview

Cumulant generating function (CGF)은 [[Moment Generating Function]]에 **logarithm을 취한 것**이다. 
$$
\boxed{\psi(k) = \log \hat{P}(k)}
\tag{3}
$$
CGF의 Taylor 전개 계수가 바로 cumulant들이며, 이들은 독립적인 확률 시행에서 **additive 특성**을 가진다.

**왜 중요한가?** 
- Random walk에서 N번 step 후의 통계적 성질을 간단히 계산 가능
- Normal diffusion의 $\sigma \sim \sqrt{N}$ scaling 직접 유도
- Central Limit Theorem의 수학적 기반

## Symbol Table
| Symbol | Meaning |
|--------|---------|
| $\hat{P}(k)$ | Moment generating function (characteristic function) |
| $\psi(k)$ | Cumulant generating function |
| $m_n$ | $n$-th moment: $\langle x^n \rangle$ |
| $c_n$ | $n$-th cumulant |
| $\sigma^2$ | Variance = $c_2$ |
## Definition

### Moment Generating Function (복습)

$$
\hat{P}(k) = \int_{-\infty}^{\infty} e^{-ikx} P(x) \, dx = \sum_{n=0}^{\infty} \frac{(-i)^n k^n m_n}{n!}
\tag{1}
$$

전개하면:
$$
\hat{P}(k) = 1 - im_1 k - \frac{1}{2}m_2 k^2 - \frac{i}{6}m_3 k^3 + \cdots
\tag{2}
$$

### Cumulant Generating Function

$$
\boxed{\psi(k) = \log \hat{P}(k)}
\tag{3}
$$

Taylor 전개:
$$
\psi(k) = \sum_{n=1}^{\infty} \frac{(-i)^n k^n c_n}{n!} = -ic_1 k - \frac{1}{2}c_2 k^2 - \frac{i}{6}c_3 k^3 + \cdots
\tag{4}
$$

### Cumulant 추출

$n$-th cumulant는 $k=0$에서의 $n$-th 미분:
$$
c_n = i^n \frac{\partial^n \psi}{\partial k^n}\bigg|_{k=0}
\tag{5}
$$

## Moment와 Cumulant의 관계

### Exponential 관계식

$$
\hat{P}(k) = e^{\psi(k)}
\tag{6}
$$

양변을 Taylor 전개하고 계수를 비교하면:

### 1st Cumulant: Mean

$$
c_1 = m_1 = \langle x \rangle
\tag{7}
$$

### 2nd Cumulant: Variance 

$$
\begin{aligned}
\hat{P}(k) &= e^{\psi(k)} = 1 + \psi + \frac{\psi^2}{2} + \cdots \\
&= 1 + (-ic_1 k - \frac{1}{2}c_2 k^2 + \cdots) + \frac{1}{2}(-ic_1 k)^2 + \cdots \\
&= 1 - ic_1 k - \frac{1}{2}(c_2 + c_1^2)k^2 + \cdots
\end{aligned}
\tag{8}
$$

$k^2$ 계수 비교:
$$
-\frac{1}{2}m_2 = -\frac{1}{2}(c_2 + c_1^2)
\tag{9}
$$

따라서:
$$
\boxed{c_2 = m_2 - m_1^2 = \langle x^2 \rangle - \langle x \rangle^2 = \sigma^2}
\tag{10}
$$

**이게 바로 variance!**

### Higher Cumulants

$$

c_3 = m_3 - 3m_1 m_2 + 2m_1^3 \quad \text{(skewness)} \tag{11}
$$
$$
c_4 = m_4 - 3m_2^2 - 4m_1 m_3 + 12m_1^2 m_2 - 6m_1^4 \quad \text{(kurtosis)} \tag{12}

$$

## Additivity: 가장 중요한 특성

### Convolution → Product → Sum 체인

**Step 1: Real space에서 independent random variables**

$X_1, X_2$가 독립이고 $X = X_1 + X_2$이면, PDF는:
$$
P_X(x) = \int P_{X_1}(x') P_{X_2}(x - x') dx' = P_{X_1} * P_{X_2}
\tag{13}
$$

**Convolution!**

**Step 2: Fourier space로 가면 Product**

Convolution theorem:
$$
\hat{P}_X(k) = \hat{P}_{X_1}(k) \cdot \hat{P}_{X_2}(k)
\tag{14}
$$

**곱셈 연산!**

**Step 3: Logarithm 취하면 Sum**

$$
\psi_X(k) = \log \hat{P}_X(k) = \log[\hat{P}_{X_1}(k) \cdot \hat{P}_{X_2}(k)]
\tag{15}
$$

$$
\boxed{\psi_X(k) = \psi_{X_1}(k) + \psi_{X_2}(k)}
\tag{16}
$$

**덧셈 연산!**

### Random Walk에서의 Additivity

N번의 IID (Independent Identically Distributed) steps:
$$
X_N = \sum_{i=1}^N \Delta x_i
\tag{17}
$$

각 step의 CGF가 $\psi(k)$이면:
$$
\psi_N(k) = N\psi(k)
\tag{18}
$$

따라서 **모든 cumulant가 N에 비례:**
$$
\boxed{c_{n,N} = Nc_n}
\tag{19}
$$

### 구체적 예: Variance (2nd cumulant)

$$
c_{2,N} = Nc_2 = N\sigma^2
\tag{20}
$$

Standard deviation:
$$
\sigma_N = \sqrt{c_{2,N}} = \sqrt{N\sigma^2} = \sqrt{N} \cdot \sigma
\tag{21}
$$

**이게 바로 normal diffusion의 square-root scaling!** 

## Why Logarithm? 왜 Log를 취하는가?

### 1. 물리적으로 의미있는 양

| Cumulant | Physical Meaning |
|----------|------------------|
| $c_1 = m_1$ | 평균 (center of mass) |
| $c_2 = \sigma^2$ | 분산 (width of distribution) |
| $c_3$ | 비대칭성 (skewness) |
| $c_4$ | 꼬리의 두께 (kurtosis) |

Moment ($m_2 = \langle x^2 \rangle$)는 평균을 빼지 않아서 해석이 애매함.

### 2. Additivity = 분석 용이

Independent systems를 다룰 때:
- Moment: $m_{n,N}$은 복잡한 조합
- Cumulant: $c_{n,N} = Nc_n$ (깔끔!)

### 3. Central Limit Theorem 구조 명확화

$$
\psi_N(k) = N\psi(k) = -iNc_1 k - \frac{Nc_2}{2}k^2 + O(N^{-1/2})
\tag{22}
$$

$N \to \infty$에서 고차 cumulant 무시 가능 → Gaussian!

## Key Points

1. **정의**: $\psi(k) = \log \hat{P}(k)$
2. **Cumulant 추출**: $c_n = i^n \frac{\partial^n \psi}{\partial k^n}|_{k=0}$
3. **물리적 의미**: $c_1$ = mean, $c_2$ = variance, ...
4. **Additivity (핵심!)**: 
   - ==Real space==: 누적되는 각 step(변위)의 확률분포들이 **==Convolution==** 되어 최종 도착지의 PDF가 결정된다. ($P_1 * P_2$)
   - ==Fourier space==: real space의 convolution은 Fourier space에서 **==Product==** 이다 ($\hat{P}_1 \cdot \hat{P}_2$)
   - ==Log space==: Fourier space의 함수에 로그를 취하면 product가 **==Sum==** 이 된다. ($\psi_1 + \psi_2$)
   - 결과: 각 step의 **cumulants들은 더해진다.** 
   - $c_{n,N} = Nc_n$
1. **Normal diffusion**: $\sigma_N = \sqrt{N}\sigma$

## Questions & Insights

**Q1: Moment로는 안 되고 왜 Cumulant를 써야 하나?**
- Moment는 additivity 없음: $m_{2,N} = Nm_2 + (\text{교차항})$
- Cumulant는 깔끔한 additivity: $c_{2,N} = Nc_2$

**Q2: Cumulant가 무한대이면?**
- Fat-tailed distribution (Lévy flights)
- CGF가 $k=0$ 근처에서 analytic하지 않음
- Anomalous diffusion 발생

## Related Concepts

- [[Moment Generating Function]]
- [[Central Limit Theorem]]
- [[Brownian Motion Properties]]

## References

- MIT OCW 18.366, Lecture 2 (Bazant)
[[Lecture 2 Moments, Cumulants, and Scaling.pdf]]

## Notes from Claude

Cumulant의 additivity는 **CTRW 이론의 핵심**입니다.

**Normal diffusion (전체 앙상블):**
- IID steps → $c_{2,N} = N\sigma^2$
- $\sigma_N = \sqrt{N}\sigma$
- MSD $\sim t$

**Subdiffusion (survival bias):**
- Steps correlated → Additivity 깨짐
- $c_{2,N} \neq N\sigma^2$
- $\sigma_N \sim N^\alpha$, $\alpha < 1/2$
- MSD $\sim t^\alpha$, $\alpha < 1$

Day 4의 Montroll-Weiss equation은 바로 이 "깨진 additivity"를 다루는 도구입니다!

**Convolution → Product → Sum** 체인은 random walk 이론 전체를 관통하는 핵심 아이디어입니다. 이게 완벽히 이해되면 CTRW도 쉽게 이해될 겁니다! 
