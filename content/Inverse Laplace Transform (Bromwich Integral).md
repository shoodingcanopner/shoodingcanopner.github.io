---
title: Inverse Laplace Transform (Bromwich Integral)
date: "2026-02-11"
subject: mathematics
tags:
  - study
  - concept
  - transform
  - complex-analysis
class: study
---

# Inverse Laplace Transform (Bromwich Integral)

## Overview

Inverse Laplace Transform은 주파수 영역 함수 $F(s)$를 시간 영역 함수 $f(t)$로 되돌리는 변환이다. 공식적으로는 **Bromwich integral**이라는 복소 적분으로 정의되며, 실제로는 Residue Theorem을 이용한 계산이나 Transform Table을 사용한다.

Bromwich integral을 해야 하는 이유는 푸리에 변환을 이용해 우아하게 증명할 수 있다. 

## Definition: Bromwich Integral

| Symbol | Meaning |
|--------|---------|
| $F(s)$ | Laplace 변환된 함수 |
| $f(t)$ | 시간 영역 함수 |
| $\gamma$ | $F(s)$의 모든 특이점보다 오른쪽에 있는 실수 |
| $s$ | 복소수 변수 ($s = \sigma + i\omega$) |

역변환의 공식적 정의:
$$
f(t) = \mathcal{L}^{-1}\{F(s)\} = \frac{1}{2\pi i}\int_{\gamma - i\infty}^{\gamma + i\infty} F(s)e^{st}ds
\tag{1}
$$

여기서 적분 경로는 복소 평면에서 $\text{Re}(s) = \gamma = \text{const}$인 수직선이다.

## 왜 이 공식인가? - Fourier Transform으로부터의 유도

Bromwich integral은 단순히 "그냥 이렇게 정의한다"가 아니라, **Fourier transform의 역변환에서 자연스럽게 유도**된다.

### Step 1: Fourier Transform 관계
라플라스 변환에서 s가 꼭 실수이리란 법은 없구나?
$s$를 복소수인 $s = \sigma + i\omega$로 놓으면, 충분히 큰 $\sigma$에 대해:
$$
F(\sigma + i\omega) = \int_0^\infty f(t)e^{-(\sigma + i\omega)t}dt = \int_0^\infty [f(t)e^{-\sigma t}]e^{-i\omega t}dt
\tag{2}
$$

이것은 $g(t) = f(t)e^{-\sigma t}$의 **Fourier transform**이다! 그런데 $t$의 적분 범위가 양수로 한정된. 

**핵심 통찰**: Laplace transform은 exponential decay를 곱한 함수의 Fourier transform으로 볼 수 있다.

### Step 2: Fourier Inverse Transform 적용

Fourier 역변환 공식에 의해:
시간에 대해 푸리에 역변환 해줄 때는 적분 기호가 $\frac{d \omega}{2 \pi}$임을 잊지 말것.
$$
g(t) = f(t)e^{-\sigma t} = \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\sigma + i\omega)e^{i\omega t}d\omega
\tag{3}
$$

양변에 $e^{\sigma t}$를 곱하면:
$$
f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} F(\sigma + i\omega)e^{(\sigma + i\omega)t}d\omega
\tag{4}
$$

### Step 3: 변수 치환

$s = \sigma + i\omega$로 놓으면:
- $ds = id\omega$ (따라서 $d\omega = \frac{ds}{i}$)
- $\omega: -\infty \to \infty$는 $s: \sigma - i\infty \to \sigma + i\infty$에 대응

따라서:
$$
f(t) = \frac{1}{2\pi}\int_{\sigma - i\infty}^{\sigma + i\infty} F(s)e^{st}\frac{ds}{i} = \frac{1}{2\pi i}\int_{\sigma - i\infty}^{\sigma + i\infty} F(s)e^{st}ds
\tag{5}
$$

이것이 **Bromwich integral**이다!

## 물리적 의미와 기하학적 해석

### 적분 경로

- **복소 평면 적분**: 적분 경로는 $\text{Re}(s) = \sigma = \text{const}$인 수직선
- **$\sigma$ 선택**: $F(s)$의 모든 극점(poles)보다 오른쪽에 위치해야 수렴
- **Region of Convergence**: $\sigma$는 ROC 내부에 있어야 함

### Causality와의 연결

- Laplace transform의 적분이 $t=0$부터 시작하므로, 역변환도 $t \geq 0$에서만 유효
- $t < 0$에 대해서는 $f(t) = 0$ (causal function)
- 이것이 물리적 시스템의 **인과율**을 자연스럽게 반영

### 왜 $\gamma$는 모든 극점 오른쪽이어야 하나?

Residue Theorem을 적용할 때:
- $t > 0$: 왼쪽 반평면을 닫아 적분 (극점들을 포함)
- $t < 0$: 오른쪽 반평면을 닫아 적분 (극점 없음 → $f(t) = 0$)

$\gamma$가 모든 극점보다 오른쪽에 있어야 이 논리가 작동한다.

## 실용적 역변환 방법

직접 Bromwich 적분을 계산하는 것은 어려우므로, 다음 방법들을 사용한다:

### 1. Transform Table 사용

가장 간단한 방법. 기본적인 transform pairs를 암기하거나 표에서 찾는다.

**예시**:
$$
F(s) = \frac{1}{s-a} \quad \Rightarrow \quad f(t) = e^{at}
\tag{6}
$$

### 2. Partial Fraction Decomposition

$F(s)$가 유리함수일 때 효과적:

$$
F(s) = \frac{P(s)}{Q(s)} = \sum_i \frac{A_i}{s - s_i} + \sum_j \frac{B_j}{(s - s_j)^2} + \cdots
\tag{7}
$$

각 항을 개별적으로 역변환:
$$
\mathcal{L}^{-1}\left\{\frac{A}{s-a}\right\} = Ae^{at}
\tag{8}
$$

$$
\mathcal{L}^{-1}\left\{\frac{B}{(s-a)^2}\right\} = Bte^{at}
\tag{9}
$$

### 3. Residue Theorem

복소 평면에서 극점의 residue를 계산:

$$
f(t) = \sum_{\text{poles } s_i} \text{Res}[F(s)e^{st}, s_i]
\tag{10}
$$

**Simple pole** $s_i$에서의 residue:
$$
\text{Res}[F(s)e^{st}, s_i] = \lim_{s \to s_i} (s - s_i)F(s)e^{st}
\tag{11}
$$

**Multiple pole** (order $n$)에서의 residue:
$$
\text{Res}[F(s)e^{st}, s_i] = \frac{1}{(n-1)!}\lim_{s \to s_i} \frac{d^{n-1}}{ds^{n-1}}[(s-s_i)^n F(s)e^{st}]
\tag{12}
$$

### 4. Convolution Theorem

$$
\mathcal{L}^{-1}\{F(s)G(s)\} = f(t) * g(t) = \int_0^t f(\tau)g(t-\tau)d\tau
\tag{13}
$$

$F(s)G(s)$의 역변환을 직접 구하기 어려울 때, $f(t)$와 $g(t)$를 각각 구해 convolution.

## 예제: 2차 시스템

$$
F(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}
\tag{14}
$$

### Underdamped case ($\zeta < 1$)

극점: $s_{1,2} = -\zeta\omega_n \pm i\omega_d$, where $\omega_d = \omega_n\sqrt{1-\zeta^2}$

Residue 계산하거나 partial fraction으로:
$$
f(t) = \frac{\omega_n}{\omega_d}e^{-\zeta\omega_n t}\sin(\omega_d t)
\tag{15}
$$

## Questions & Insights

- Bilateral Laplace transform의 역변환은 어떻게 다른가?
- Branch cut이 있는 함수 (예: $\sqrt{s}$)의 역변환은?
- Numerical inverse Laplace transform 방법은? (Talbot method, Gaver-Stehfest)
- 왜 $t<0$에서 $f(t)=0$이 자동으로 나오는가? (적분 경로 닫는 방향)

## Related Concepts

- [[Laplace Transform]]
- [[Residue Theorem for Trigonometric Integrals, 삼각함수가 이상하게 들어가 있을 때 적분하기]]
- [[Laurent Series and Convergence Regions]]
- [[Fourier Transform of Gaussian Distribution]]

## References

- Statistical mechanics winter school notes (2026-02-11)
- Complex analysis textbooks (Churchill & Brown)

## Notes from Claude

Bromwich integral이 "그냥 정의"처럼 보이지만, 실제로는 Fourier transform의 자연스러운 확장이다. 이 유도를 이해하면:

1. **왜 $2\pi i$가 분모에 있는가**: Fourier 역변환의 $2\pi$와 변수 치환의 $i$
2. **왜 수직선을 따라 적분하는가**: $\omega$가 실수 전체를 움직일 때 $s$의 경로
3. **왜 ROC가 중요한가**: Fourier transform 수렴 조건에서 유래

실제 계산에서는 Bromwich integral을 직접 계산하지 않고, residue theorem이나 table lookup을 사용한다. 하지만 이론적 배경을 이해하면 왜 이 방법들이 작동하는지, 그리고 언제 조심해야 하는지 (branch cut, essential singularity 등) 알 수 있다.
