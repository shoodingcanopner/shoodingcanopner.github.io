---
title: "Residue Theorem for Trigonometric Integrals"
date: "2025-11-27"
subject: complex analysis
tags:
  - study
  - concept
  - complex-analysis
  - integration
class: study
---

# Residue Theorem for Trigonometric Integrals

## Notation Table

| 기호 | 의미 |
|------|------|
| $I$ | 계산하려는 실적분 |
| $\theta$ | 실수 변수 (각도) |
| $z$ | 복소수 변수 |
| $C$ | 복소평면에서의 적분 경로 (단위원) |
| $\text{Res}[f, z_0]$ | 함수 $f$의 점 $z_0$에서의 유수 |

## Overview

분모에 삼각함수가 복잡하게 들어간 적분은 실수 범위에서 직접 계산하기 어렵다. 하지만 복소평면에서 극좌표 변환 $z = e^{i\theta}$를 이용하면, 유수 정리(Residue Theorem)를 적용하여 쉽게 계산할 수 있다.

## 핵심 아이디어

**실적분 → 복소적분 변환**: 
$$\int_0^{2\pi} f(\cos\theta, \sin\theta) d\theta \quad \to \quad \oint_C g(z) dz$$

이 변환의 핵심은:
1. $\theta$가 0에서 $2\pi$로 변할 때, $z = e^{i\theta}$는 단위원을 한 바퀴 돈다
2. 삼각함수를 복소지수함수로 표현할 수 있다
3. 복소평면에서 경로적분은 유수 정리로 계산된다

## 변환 공식

### 변수 치환

$$z = e^{i\theta} \tag{1}$$

### 미분 관계

$$dz = ie^{i\theta} d\theta = iz d\theta \tag{2}$$

따라서:
$$d\theta = \frac{1}{iz} dz \tag{3}$$

### 삼각함수 표현

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2} = \frac{z + \frac{1}{z}}{2} = \frac{z^2 + 1}{2z} \tag{4}$$

$$\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i} = \frac{z - \frac{1}{z}}{2i} = \frac{z^2 - 1}{2iz} \tag{5}$$

## 예제: 교과서 Example 1

다음 적분을 계산하라:

$$I = \int_0^{2\pi} \frac{d\theta}{5 + 4\cos\theta} \tag{6}$$

### Step 1: 변수 치환

$z = e^{i\theta}$로 놓으면:
- $d\theta = \frac{1}{iz} dz$
- $\cos\theta = \frac{z + \frac{1}{z}}{2}$

### Step 2: 복소적분으로 변환

$$I = \oint_C \frac{1}{5 + 4 \cdot \frac{z + \frac{1}{z}}{2}} \cdot \frac{1}{iz} dz \tag{7}$$

분모를 정리하면:

$$5 + 4 \cdot \frac{z + \frac{1}{z}}{2} = 5 + 2z + \frac{2}{z} = \frac{5z + 2z^2 + 2}{z} = \frac{2z^2 + 5z + 2}{z} \tag{8}$$

따라서:

$$I = \oint_C \frac{1}{\frac{2z^2 + 5z + 2}{z}} \cdot \frac{1}{iz} dz = \oint_C \frac{1}{i(2z^2 + 5z + 2)} dz \tag{9}$$

### Step 3: 특이점 찾기

분모를 인수분해하면:

$$2z^2 + 5z + 2 = (2z + 1)(z + 2) = 2(z + \frac{1}{2})(z + 2) \tag{10}$$

특이점: $z = -\frac{1}{2}$, $z = -2$

단위원 $|z| = 1$ 내부에 있는 특이점: $z = -\frac{1}{2}$ (왜냐하면 $|-\frac{1}{2}| = \frac{1}{2} < 1$)

### Step 4: 유수 계산

$z = -\frac{1}{2}$에서의 유수를 계산한다. 이는 단순극점이므로:

$$\text{Res}\left[\frac{1}{i \cdot 2(z + \frac{1}{2})(z + 2)}, z = -\frac{1}{2}\right] = \lim_{z \to -\frac{1}{2}} (z + \frac{1}{2}) \cdot \frac{1}{i \cdot 2(z + \frac{1}{2})(z + 2)} \tag{11}$$

$$= \frac{1}{i \cdot 2(-\frac{1}{2} + 2)} = \frac{1}{i \cdot 2 \cdot \frac{3}{2}} = \frac{1}{3i} \tag{12}$$

### Step 5: 유수 정리 적용

$$I = 2\pi i \cdot \sum \text{Res} = 2\pi i \cdot \frac{1}{3i} = \frac{2\pi}{3} \tag{13}$$

## 일반적인 적용 절차

삼각함수가 분모에 복잡하게 들어간 적분 $\int_0^{2\pi} f(\cos\theta, \sin\theta) d\theta$를 계산하는 절차:

1. $z = e^{i\theta}$ 치환
2. $d\theta = \frac{dz}{iz}$, $\cos\theta = \frac{z^2+1}{2z}$, $\sin\theta = \frac{z^2-1}{2iz}$ 대입
3. 복소적분 $\oint_C g(z) dz$로 변환
4. 단위원 내부의 특이점 찾기
5. 각 특이점에서 유수 계산
6. 유수 정리: $I = 2\pi i \sum \text{Res}$

## Questions & Insights

- 왜 극좌표 변환이 이렇게 강력한가? 단위원 위에서의 운동이 주기함수의 본질과 연결되기 때문
- 실수 적분이 복소평면에서는 경로적분이 된다는 것의 기하학적 의미는?
- 단위원 밖의 특이점은 왜 기여하지 않는가? 유수 정리의 본질과 관련

## Physical and Mathematical Applications

- Fourier 급수와 적분
- 양자역학에서 Green 함수 계산
- 신호 처리에서 필터 설계
- 통계역학에서 분배함수 계산

## Related Concepts

- [[Laurent Series and Convergence Regions]]
- [[Geometric Series]]
- [[Fourier Transform of Gaussian Distribution]]

## References

- [[boas methematical physics_14 FUNCTIONS OF A COMPLEX VARIABLE.pdf]]
