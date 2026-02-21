---
title: "Fourier Transform of Gaussian Distribution"
date: "2025-11-21"
subjects: mathematics, physics
tags:
  - study
  - concept
  - fourier-analysis
  - gaussian
  - mathematical-physics
class: study
---

# Fourier Transform of Gaussian Distribution

## Overview

Gaussian distribution은 **푸리에 변환에 대해 불변인 유일한 함수 형태**이다. 

유도의 핵심은 적분되는 항의 지수 부분을 완전 제곱식으로 만드는 것이다. 
이 특별한 성질은 불확정성 원리의 수학적 기초가 되며, 확산 방정식과 양자역학에서 핵심적인 역할을 한다.

## Physical Symbols

| 기호 | 의미 |
|------|------|
| $f(x)$ | 실공간의 가우스 함수 |
| $\tilde{f}(k)$ | 푸리에 공간의 가우스 함수 |
| $\alpha$ | 실공간 가우스의 폭 매개변수 |
| $k$ | 파수 (wave number) |
| $x$ | 위치 변수 |

## Key Points

### 기본 설정

가우스 함수를 다음과 같이 정의한다:
$$f(x) = e^{-\alpha x^2} \tag{1}$$

이것의 푸리에 변환은:
$$\tilde{f}(k) = \int_{-\infty}^{\infty} e^{-\alpha x^2} e^{-ikx} dx \tag{2}$$

### 유도 과정

**1단계: 지수 부분 정리**

지수를 하나로 합치면:
$$\tilde{f}(k) = \int_{-\infty}^{\infty} e^{-\alpha x^2 - ikx} dx \tag{3}$$

**2단계: 완전제곱식으로 만들기**

지수 부분을 $x$에 대한 완전제곱식으로 변형한다:
$$-\alpha x^2 - ikx = -\alpha\left(x^2 + \frac{ik}{\alpha}x\right) \tag{4}$$

완전제곱을 만들기 위해:
$$= -\alpha\left[\left(x + \frac{ik}{2\alpha}\right)^2 - \left(\frac{ik}{2\alpha}\right)^2\right] \tag{5}$$

$$= -\alpha\left(x + \frac{ik}{2\alpha}\right)^2 - \frac{k^2}{4\alpha} \tag{6}$$

**3단계: 적분 분리**

따라서:
$$\tilde{f}(k) = e^{-k^2/4\alpha} \int_{-\infty}^{\infty} e^{-\alpha\left(x + \frac{ik}{2\alpha}\right)^2} dx \tag{7}$$

**4단계: 변수 치환과 경로 변형**

$u = x + \frac{ik}{2\alpha}$로 치환하면 $du = dx$이고, 적분 경로는 복소평면에서 실수축에서 허수 방향으로 $\frac{k}{2\alpha}$만큼 평행이동한 직선이 된다.

코시 정리(Cauchy's Theorem)에 의해, $e^{-\alpha u^2}$는 전 복소평면에서 해석적(analytic)이므로 이 경로를 실수축으로 변형할 수 있다:

$$\int_{-\infty}^{\infty} e^{-\alpha u^2} du = \sqrt{\frac{\pi}{\alpha}} \tag{8}$$

(이것은 가우스 적분의 표준 결과이다) [[Gaussian Integral]]

**5단계: 최종 결과**

$$\tilde{f}(k) = \sqrt{\frac{\pi}{\alpha}} e^{-k^2/4\alpha} \tag{9}$$

### 핵심 결과

가우스 함수의 푸리에 변환은 다시 가우스 함수이다:
- 실공간: $e^{-\alpha x^2}$ (폭 매개변수 $\alpha$)
- 푸리에 공간: $e^{-k^2/4\alpha}$ (폭 매개변수 $1/4\alpha$)

## Physical Insights

### 폭의 역비례 관계

실공간에서 가우스가 좁을수록 ($\alpha$가 클수록) 푸리에 공간에서는 넓어진다 ($1/4\alpha$가 작아진다). 이것이 [[Uncertainty Principle]]의 수학적 표현이다:

$$\Delta x \cdot \Delta k \geq \text{const} \tag{10}$$

### 왜 가우스가 특별한가?

가우스 분포가 자기 자신으로 변환되는 이유는 완전제곱식의 성질 때문이다. $e^{-x^2}$와 $e^{-ikx}$를 곱할 때:

1. 지수 부분을 다시 완전제곱으로 정리할 수 있다
2. 이 과정에서 나오는 "교차항"($k^2$ 항)이 적분 밖으로 빠져나간다
3. 결과적으로 다시 가우스 형태가 만들어진다

이런 성질을 가진 함수는 가우스 함수가 유일하다.

## Questions & Insights


## Related Concepts

- [[Diffusion Equation Gaussian Distribution]]
- [[Fourier Transform Solution of Diffusion Equation]]
- [[Uncertainty Principle]]
- [[Central Limit Theorem]]
- [[Cauchy-Schwarz Inequality]]
- [[Gaussian Integral]]

## References

- 이 노트는 Claude와의 대화를 통해 작성되었음

## Notes from Claude

가우스 분포의 자기 유사성(self-similarity)은 자연에서 가우스 분포가 자주 나타나는 이유 중 하나이다:

이 모든 성질이 하나의 수학적 사실에서 비롯된다는 것이 놀랍다: **완전제곱식의 완결성.**
