---
title: "Gaussian Integral"
date: "2025-11-21"
subjects: mathematics
tags:
  - study
  - concept
  - integral
  - gaussian
  - mathematical-methods
class: study
---

# Gaussian Integral

## Overview

exp(-x 제곱)을 전 범위에서 적분하면 루트 파이!!!!!

$$\boxed{\int_{-\infty}^{\infty} e^{-u^2} du = \sqrt{\pi}}$$

가우스 적분(Gaussian Integral)은 수학과 물리학에서 가장 중요한 적분 중 하나로, 정규분포, 통계역학, 양자역학, 확산 방정식 등 수많은 분야에서 핵심적으로 사용된다. 이 적분의 값은 직접 계산할 수 없고, 2차원 극좌표 변환이라는 영리한 트릭을 통해 계산된다.

## Physical Symbols

| 기호 | 의미 |
|------|------|
| $I$ | 가우스 적분의 값 |
| $\alpha$ | 가우스 함수의 폭 매개변수 (양수) |
| $r$ | 극좌표에서의 반지름 |
| $\theta$ | 극좌표에서의 각도 |

## Key Points

### 기본 가우스 적분

가장 기본적인 가우스 적분:
$$I = \int_{-\infty}^{\infty} e^{-x^2} dx \tag{1}$$

일반적인 형태:
$$\int_{-\infty}^{\infty} e^{-\alpha x^2} dx = \sqrt{\frac{\pi}{\alpha}} \quad (\alpha > 0) \tag{2}$$

### 유도: 극좌표 변환 트릭

**1단계: 제곱하기**

적분 $I$를 직접 계산하는 대신, $I^2$을 계산한다:
$$I^2 = \left(\int_{-\infty}^{\infty} e^{-x^2} dx\right) \left(\int_{-\infty}^{\infty} e^{-y^2} dy\right) \tag{3}$$

적분 변수가 독립적이므로:
$$I^2 = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-x^2} e^{-y^2} dx dy = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^2+y^2)} dx dy \tag{4}$$

**2단계: 극좌표 변환**

2차원 적분을 극좌표로 변환한다:
$$x = r\cos\theta, \quad y = r\sin\theta \tag{5}$$

야코비안(Jacobian):
$$dx dy = r dr d\theta \tag{6}$$

그리고:
$$x^2 + y^2 = r^2 \tag{7}$$

따라서:
$$I^2 = \int_{0}^{2\pi} \int_{0}^{\infty} e^{-r^2} r dr d\theta \tag{8}$$

**3단계: 각도 적분**

각도에 대한 적분은 간단하다:
$$\int_{0}^{2\pi} d\theta = 2\pi \tag{9}$$

**4단계: 반지름 적분**

반지름에 대한 적분:
$$\int_{0}^{\infty} e^{-r^2} r dr \tag{10}$$

변수 치환: $u = r^2$, $du = 2r dr$
$$\int_{0}^{\infty} e^{-r^2} r dr = \frac{1}{2}\int_{0}^{\infty} e^{-u} du = \frac{1}{2} \tag{11}$$

**5단계: 최종 결과**

$$I^2 = 2\pi \cdot \frac{1}{2} = \pi \tag{12}$$

따라서:
$$I = \sqrt{\pi} \tag{13}$$

즉:
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} \tag{14}$$

### 일반화: 매개변수 $\alpha$가 있는 경우

$$\int_{-\infty}^{\infty} e^{-\alpha x^2} dx \tag{15}$$

변수 치환: $u = \sqrt{\alpha} x$, $du = \sqrt{\alpha} dx$
$$\int_{-\infty}^{\infty} e^{-\alpha x^2} dx = \frac{1}{\sqrt{\alpha}} \int_{-\infty}^{\infty} e^{-u^2} du = \frac{\sqrt{\pi}}{\sqrt{\alpha}} = \sqrt{\frac{\pi}{\alpha}} \tag{16}$$

## Useful Variants

### 관련 적분들

**1. 짝수 거듭제곱과의 곱** -> 부분 적분으로 유도 가능

$$\int_{-\infty}^{\infty} x^{2n} e^{-\alpha x^2} dx = \frac{(2n-1)!!}{(2\alpha)^n} \sqrt{\frac{\pi}{\alpha}} \tag{17}$$

여기서 $(2n-1)!! = 1 \cdot 3 \cdot 5 \cdots (2n-1)$ (이중 계승)

특히:
$$\int_{-\infty}^{\infty} x^2 e^{-\alpha x^2} dx = \frac{1}{2\alpha} \sqrt{\frac{\pi}{\alpha}} \tag{18}$$

**2. 홀수 거듭제곱과의 곱**

홀수 함수이므로:
$$\int_{-\infty}^{\infty} x^{2n+1} e^{-\alpha x^2} dx = 0 \tag{19}$$

**3. 복소수 선형항이 있는 경우**

$$\int_{-\infty}^{\infty} e^{-\alpha x^2 + bx} dx = \sqrt{\frac{\pi}{\alpha}} e^{b^2/4\alpha} \tag{20}$$

이것은 완전제곱식을 만들어 유도한다 (푸리에 변환에서 사용).

## Physical and Mathematical Significance

### 왜 이 트릭이 작동하는가?

1. **1차원의 한계**: $e^{-x^2}$의 부정적분을 초등함수로 표현할 수 없다
2. **차원 확장의 마법**: 2차원으로 확장하면 대칭성($x^2+y^2 = r^2$)이 드러난다
3. **극좌표의 위력**: 회전 대칭성을 이용해 적분을 분리할 수 있다

### 물리학에서의 중요성

**1. 통계역학**: 파티션 함수 계산의 기초
$$Z = \int e^{-\beta E} dE$$

**2. 양자역학**: 조화진동자의 규격화
$$\int |\psi_0(x)|^2 dx = 1$$

**3. 확산 이론**: 가우스 분포의 규격화 조건
$$\int_{-\infty}^{\infty} \frac{1}{\sqrt{4\pi Dt}} e^{-x^2/4Dt} dx = 1$$

### 수학적 아름다움

이 적분은 다음을 보여준다:
- **$\pi$의 예상치 못한 출현**: 원과 무관해 보이는 곳에서 $\pi$가 나타난다
- **차원 간 연결**: 1차원 문제를 2차원에서 해결한다
- **대칭성의 위력**: 회전 대칭성이 계산을 가능하게 한다

## Questions & Insights


## Related Concepts

- [[Equipartition Theorem]]
- [[Fourier Transform of Gaussian Distribution]]
- [[Diffusion Equation Gaussian Distribution]]
- [[Central Limit Theorem]]
- [[Stirling Approximation]]

## References

- 이 노트는 Claude와의 대화를 통해 작성되었음

## Notes from Claude

가우스 적분은 수학의 가장 영리한 트릭 중 하나이다. 핵심 통찰은 "만약 1차원에서 풀 수 없다면, 2차원으로 가라"이다.

**극좌표 트릭의 본질**: 
- 직교좌표: $x^2 + y^2$ (분리 불가능)
- 극좌표: $r^2$ (분리 가능!)

이 차이가 전부다. 대칭성을 올바른 좌표계에서 보면 불가능해 보이던 것이 가능해진다.

**일반화**: 다차원 가우스 적분은
$$\int_{-\infty}^{\infty} \cdots \int_{-\infty}^{\infty} e^{-\mathbf{x}^T A \mathbf{x}} d^n\mathbf{x} = \frac{\pi^{n/2}}{\sqrt{\det A}}$$
여기서 $A$는 양정부호 행렬이다. 이것은 양자장론과 통계역학에서 경로적분의 기초가 된다.
