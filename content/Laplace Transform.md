---
title: Laplace Transform
date: "2026-02-09"
subject: mathematics
tags:
  - study
  - concept
  - transform
class: study
---

# Laplace Transform

## Overview

Laplace transform은 시간 영역 함수 $f(t)$를 복소수 주파수 영역 함수 $F(s)$로 변환하는 적분 변환이다. 본질적으로 **exponential decay 가중치를 곱한 가중 적분**으로 이해할 수 있다.

## Definition

| Symbol | Meaning |
|--------|---------|
| $f(t)$ | 시간 영역 함수 |
| $F(s)$ | Laplace 변환된 함수 |
| $s$ | 복소수 주파수 ($s = \sigma + i\omega$) |
| $\sigma$ | decay rate (실부) |

$$
F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty f(t)e^{-st}dt
\tag{1}
$$

## Key Intuition: Decay Rate Interpretation

**핵심 직관**: $e^{-st}$는 exponential decay 가중치로 작용하며, $s$의 실부 $\sigma = \text{Re}(s)$가 decay rate를 결정한다.

$$
e^{-st} = e^{-\sigma t}e^{-i\omega t}
\tag{2}
$$

- **$\sigma$가 클수록**: 초기 시간 ($t \approx 0$)의 기여가 지배적
- **$\sigma$가 작을수록**: 더 긴 시간 범위의 값들이 유의미하게 기여
- $s \to \infty$: 오직 $f(0)$의 정보만 포착 (Initial Value Theorem)
- $s \to 0$: 전체 시간 구간에 걸친 평균적 행동 포착

이 해석은 Laplace transform이 **시간 척도에 따라 함수를 분해**한다는 관점을 제공한다.

## Common Laplace Transform Pairs

기본적인 함수들의 Laplace transform 표:

| $f(t)$ | $F(s) = \mathcal{L}\{f(t)\}$ | ROC |
|--------|------------------------------|-----|
| $\delta(t)$ | $1$ | all $s$ |
| $1$ | $\frac{1}{s}$ | $\text{Re}(s) > 0$ |
| $t$ | $\frac{1}{s^2}$ | $\text{Re}(s) > 0$ |
| $t^n$ | $\frac{n!}{s^{n+1}}$ | $\text{Re}(s) > 0$ |
| $e^{at}$ | $\frac{1}{s-a}$ | $\text{Re}(s) > a$ |
| $te^{at}$ | $\frac{1}{(s-a)^2}$ | $\text{Re}(s) > a$ |
| $\sin(\omega t)$ | $\frac{\omega}{s^2 + \omega^2}$ | $\text{Re}(s) > 0$ |
| $\cos(\omega t)$ | $\frac{s}{s^2 + \omega^2}$ | $\text{Re}(s) > 0$ |
| $e^{at}\sin(\omega t)$ | $\frac{\omega}{(s-a)^2 + \omega^2}$ | $\text{Re}(s) > a$ |
| $e^{at}\cos(\omega t)$ | $\frac{s-a}{(s-a)^2 + \omega^2}$ | $\text{Re}(s) > a$ |

**ROC (Region of Convergence)**: Laplace 적분이 수렴하는 $s$의 범위

## Physical Interpretation

$F(s)$는 다음과 같이 해석할 수 있다:

- **Frequency domain analysis**: $s$는 복소수 주파수
- **Transfer function**: 시스템의 입출력 관계를 $s$ 영역에서 대수적으로 표현
- **Stability analysis**: $s$의 실부가 양수인 영역에서 함수가 발산하는지 판단

## Key Properties

1. **Linearity**:
$$
\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)
\tag{3}
$$

2. **Derivative**:
이거 푸변에서도 똑같지 않나?
$$
\mathcal{L}\left\{\frac{df}{dt}\right\} = sF(s) - f(0)
\tag{4}
$$

3. **Second Derivative**:
$$
\mathcal{L}\left\{\frac{d^2f}{dt^2}\right\} = s^2F(s) - sf(0) - f'(0)
\tag{5}
$$

4. **Initial Value Theorem**:
$$
\lim_{s \to \infty} sF(s) = f(0)
\tag{6}
$$

5. **Final Value Theorem**:
$$
\lim_{s \to 0} sF(s) = \lim_{t \to \infty} f(t)
\tag{7}
$$

6. **Convolution**:
$$
\mathcal{L}\{f(t) * g(t)\} = F(s)G(s)
\tag{8}
$$

## Applications to Ordinary Differential Equations

Laplace transform은 **선형 상수 계수 ODE**를 푸는 데 특히 유용하다:

### 적용 가능한 ODE 형태

일반적인 형태:
$$
a_n\frac{d^ny}{dt^n} + a_{n-1}\frac{d^{n-1}y}{dt^{n-1}} + \cdots + a_1\frac{dy}{dt} + a_0 y = f(t)
\tag{9}
$$

여기서:
- 계수 $a_0, a_1, \ldots, a_n$은 **상수**여야 함
- 초기 조건 $y(0), y'(0), \ldots, y^{(n-1)}(0)$이 주어져야 함
- 우변 $f(t)$는 Laplace transform 가능해야 함

### 해법 절차

1. **양변에 Laplace transform 적용**:
$$
\mathcal{L}\left\{\frac{d^ny}{dt^n}\right\} = s^nY(s) - s^{n-1}y(0) - s^{n-2}y'(0) - \cdots - y^{(n-1)}(0)
\tag{10}
$$

2. **대수 방정식으로 변환**: 미분 방정식이 $Y(s)$에 대한 대수 방정식이 됨

3. **$Y(s)$ 구하기**: 대수적으로 $Y(s)$를 고립시킴

4. **역변환**: $y(t) = \mathcal{L}^{-1}\{Y(s)\}$

### 예제: 2차 ODE

$$
\frac{d^2y}{dt^2} + 2\zeta\omega_n\frac{dy}{dt} + \omega_n^2 y = f(t)
\tag{11}
$$

Laplace transform 적용:
$$
s^2Y(s) - sy(0) - y'(0) + 2\zeta\omega_n[sY(s) - y(0)] + \omega_n^2Y(s) = F(s)
\tag{12}
$$

정리하면:
$$
Y(s) = \frac{F(s) + sy(0) + y'(0) + 2\zeta\omega_n y(0)}{s^2 + 2\zeta\omega_n s + \omega_n^2}
\tag{13}
$$

이는 **transfer function** $H(s) = \frac{1}{s^2 + 2\zeta\omega_n s + \omega_n^2}$과 초기 조건 효과의 합으로 표현된다.

### 왜 Laplace Transform이 ODE에 유용한가?

- **미분 → 곱셈**: $\frac{d}{dt} \leftrightarrow s$ 변환으로 미분방정식이 대수방정식으로 변환
- **초기 조건 자동 처리**: 미분의 Laplace transform에 초기 조건이 자연스럽게 포함됨
- **Convolution → 곱셈**: Green's function 해법이 간단해짐

## Inverse Laplace Transform

Laplace transform의 역변환은 **Bromwich integral**로 정의되며, 복소 평면에서의 적분으로 표현된다. 실제로는 Residue Theorem, Partial Fraction Decomposition, 또는 Transform Table을 사용하여 계산한다.

$$
f(t) = \mathcal{L}^{-1}\{F(s)\} = \frac{1}{2\pi i}\int_{\gamma - i\infty}^{\gamma + i\infty} F(s)e^{st}ds
\tag{14}
$$

**자세한 내용**: [[Inverse Laplace Transform (Bromwich Integral)]]에서 Bromwich integral의 유도, 물리적 의미, 실용적 계산 방법을 다룬다.

## Applications

- **Differential equations**: 미분 → 대수 연산으로 변환
- **Control theory**: Transfer function 분석
- **Signal processing**: 시스템 응답 분석
- **Circuit analysis**: 전기회로 임피던스 계산

## Questions & Insights

- Laplace transform과 Fourier transform의 정확한 관계는? ($s = i\omega$일 때가 아니라 $\sigma = 0$일 때)
- Region of convergence (ROC)의 물리적 의미는? (어떤 decay rate까지 수렴하는가)
- 왜 causality(인과율)와 Laplace transform이 관련있는가? (적분이 $t=0$부터 시작)
- Bilateral Laplace transform ($t \in (-\infty, \infty)$)과의 차이는?

## Related Concepts

- [[Inverse Laplace Transform (Bromwich Integral)]]
- [[Fourier Transform of Gaussian Distribution]]
- [[Laurent Series and Convergence Regions]]
- [[Residue Theorem for Trigonometric Integrals, 삼각함수가 이상하게 들어가 있을 때 적분하기]]
- [[Laplace Transform Initial Value Theorem]]

## References

- 사용자의 직관적 이해 (2026-02-09 대화)
- Statistical mechanics winter school notes (2026-02-11)

## Notes from Claude

사용자가 제시한 "exponential decay 가중치" 해석은 Laplace transform의 본질을 정확하게 포착한 **표준적이고 올바른 이해**이다. 

이 직관은 특히 다음을 이해하는 데 유용하다:
- 왜 Laplace transform이 안정성 분석에 유용한가 (decay rate $\sigma$)
- 왜 초기값 정리가 $s \to \infty$에서 성립하는가
- 왜 미분이 $s$ 곱셈으로 변환되는가 (exponential의 성질)

많은 교재가 이런 직관적 설명을 제공하지 않고 형식적 정의만 제시하는데, 이 해석을 유지하면 복잡한 변환 성질들을 직관적으로 이해할 수 있다.

**추가된 내용 (2026-02-11)**:
- Laplace transform 표를 추가하여 실용적 활용 강화
- ODE 적용 섹션: 어떤 형태의 미분방정식에 유용한지, 그리고 왜 유용한지 명확히 설명
- 역변환 공식의 유도: Bromwich integral이 Fourier 역변환에서 자연스럽게 유도됨을 보임. 단순히 "이 공식을 쓴다"가 아니라 **왜 이 형태가 되는지**를 Fourier transform 관점에서 설명.
