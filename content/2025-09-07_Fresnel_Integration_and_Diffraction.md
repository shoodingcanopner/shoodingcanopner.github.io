---
title: "Fresnel Integration and Diffraction"
date: "2025-09-07"
subject: physics
tags:
  - study
  - concept
  - optics
  - diffraction
class: study
---

# Fresnel Integration and Diffraction

## Overview

Fresnel 적분은 회절 현상을 정량적으로 기술하는 핵심 수학적 도구로, 직선 모서리 회절 문제에서 자연스럽게 도출되는 특수함수이다.

## Fresnel 적분의 정의

**Fresnel 코사인 적분:**
$$C(t) = \int_0^t \cos\left(\frac{\pi u^2}{2}\right) du \tag{1}$$

**Fresnel 사인 적분:**
$$S(t) = \int_0^t \sin\left(\frac{\pi u^2}{2}\right) du \tag{2}$$

### 주요 성질

- 초등함수로 표현 불가능 (특수함수)
- 무한대에서의 수렴값: $C(\infty) = S(\infty) = \frac{1}{2}$
- 복소수 표현: $\int_0^t e^{i\pi u^2/2} du = C(t) + iS(t)$
- 복소평면에서 Cornu spiral을 형성

## 물리적 배경: 직선 모서리 회절

### 기하학적 설정

```
광원 S(-a, 0, 0) -------- 모서리(0, 0, 0) -------- 관찰점 P(b, y_P, 0)
```

- **직선 모서리**: 불투명한 반무한 평면의 경계선 ($y > 0$ 불투명, $y < 0$ 투명)
- **좌표계**: z축은 빛의 진행방향, y축은 모서리에 수직
- **거리 정의**: 
  - $a$: 광원-모서리 거리
  - $b$: 모서리-관찰점 거리
  - $R = \frac{ab}{a+b}$: reduced distance

### 광경로와 위상차 계산

모서리 위의 점 $(0, y, 0)$에서 관찰점까지의 **전체 광경로**:

$$r(y) = \sqrt{a^2 + y^2} + \sqrt{b^2 + (y - y_P)^2} \tag{3}$$

**Fresnel 근사** ($y, y_P \ll a, b$):

$$r(y) \approx (a + b) + \frac{y^2}{2R} - \frac{y \cdot y_P}{b} + \frac{y_P^2}{2b} \tag{4}$$

축상 점 ($y_P = 0$)에서:
$$r(y) \approx (a + b) + \frac{y^2}{2R} \tag{5}$$

## Huygens-Fresnel 원리와 적분 유도

**전기장 계산:**

$$E(P) = \frac{E_0}{i\lambda} \int_{-\infty}^{y_0} \frac{e^{ikr(y)}}{r(y)} dy \tag{6}$$

분모의 $r(y) \approx a + b$로 근사하고 위상만 정확히 계산:

$$E(P) = \frac{E_0 e^{ik(a+b)}}{i\lambda(a+b)} \int_{-\infty}^{y_0} e^{ik\frac{y^2}{2R}} dy \tag{7}$$

### 무차원화: Fresnel 수

변수 변환: $v = y\sqrt{\frac{2}{λR}}$ (Fresnel 수)

$$E(P) \propto \int_{-\infty}^{v_0} e^{i\pi v^2/2} dv = C(v_0) + iS(v_0) \tag{8}$$

## 물리적 해석

### 기호의 의미

| 기호 | 의미 |
|------|------|
| $E_0$ | 입사파의 진폭 |
| $k = \frac{2\pi}{\lambda}$ | 파수 (wave number) |
| $r(y)$ | 점 $(0,y,0)$에서 P까지의 광경로 |
| $R$ | reduced distance |
| $v_0$ | 기하학적 그림자 경계의 Fresnel 수 |

### 핵심 아이디어

1. **$e^{i\pi v^2/2}$**: 각 점에서의 위상 기여
2. **$v^2$ 항**: 기하학적 경로차가 거리의 제곱에 비례
3. **Fresnel zone**: 곡면 파면의 기하학적 결과
4. **관측 강도**: $|E|^2 = C^2(v_0) + S^2(v_0)$

## 실험적 검증

- 직선 모서리 근처의 회절 무늬
- 기하학적 그림자 경계에서의 진동 패턴
- 이론과 실험의 정확한 일치

## Questions & Insights

- Fresnel 적분이 왜 초등함수로 표현될 수 없는가?
- Cornu spiral의 기하학적 의미는?
- 다른 형태의 회절(원형 개구, 슬릿)에서는 어떤 함수가 나타나는가?

## Related Concepts

- [[QM_Probability_Current_Density_Derivation]]
- [[Spherical Harmonics]]
- [[Fast_Fourier_Transform]]

## References

- Born & Wolf, Principles of Optics
- Hecht, Optics

