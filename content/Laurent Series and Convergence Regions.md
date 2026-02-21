---
title: Laurent Series and Convergence Regions
date: 2025-11-27
subject: mathmetics
tags:
  - study
  - concept
  - complex-analysis
  - mathematical-physics
class: study
---

# Laurent Series and Convergence Regions

## Overview

로랑 급수(Laurent series)는 복소함수를 특이점 근처에서 전개하는 방법으로, 테일러 급수의 일반화이다. 특이점을 포함하는 영역에서도 함수를 급수로 표현할 수 있으며, 수렴 영역은 특이점의 위치에 의해 결정된다.

## Key Insight: 등비급수와 테일러 전개의 연결 [[Geometric Series]]

함수 $f(z) = \frac{1}{1+z}$는 등비급수와 테일러 전개의 관계를 보여주는 좋은 예시다.

**$z=0$ 근처에서 ($|z| < 1$):**
$$\frac{1}{1+z} = 1 - z + z^2 - z^3 + z^4 - \cdots = \sum_{n=0}^{\infty} (-1)^n z^n$$

이는 첫째항이 1이고 공비가 $-z$인 무한등비급수이며, $|z| < 1$에서만 수렴한다.

**$|z| > 1$ 영역에서:**
$$\frac{1}{1+z} = \frac{1}{z} \cdot \frac{1}{1 + 1/z} = \frac{1}{z}\left(1 - \frac{1}{z} + \frac{1}{z^2} - \frac{1}{z^3} + \cdots\right)$$
$$= \frac{1}{z} - \frac{1}{z^2} + \frac{1}{z^3} - \frac{1}{z^4} + \cdots$$

이는 로랑 급수의 주요부(principal part)만 있는 형태다.
**==아하! singular point을 넘어서는 영역에서는 principal part만 남게 되는구나!==**

### 수렴 반경과 특이점

- 특이점: $z = -1$ (단순극점, simple pole)
- 수렴 반경: 원점을 중심으로 한 수렴 반경은 정확히 $|-1 - 0| = 1$
- 이유: **가장 가까운 특이점까지의 거리**가 수렴 반경을 결정한다

## 여러 수렴 영역을 갖는 로랑 급수: 교과서 예시
![[Pasted image 20251127192130.png]]

### 함수 정의

$$f(z) = \frac{12}{z(2-z)(1+z)}$$

이 함수는 세 개의 특이점을 갖는다: $z = 0$, $z = 2$, $z = -1$

### 부분분수 분해

$$f(z) = \frac{4}{z}\left(\frac{1}{1+z} + \frac{1}{2-z}\right)$$

### 세 개의 서로 다른 로랑 급수

원점 $z_0 = 0$을 중심으로, 특이점들의 위치에 따라 세 개의 수렴 영역이 생긴다:

#### Region 1: $0 < |z| < 1$

이 영역에서는 $\frac{1}{1+z}$와 $\frac{1}{2-z}$ 모두 $z$의 거듭제곱으로 전개한다, principal part는 없다. 

$$\frac{1}{1+z} = 1 - z + z^2 - z^3 + \cdots$$
$$\frac{1}{2-z} = \frac{1}{2}\cdot\frac{1}{1-z/2} = \frac{1}{2}(1 + \frac{z}{2} + \frac{z^2}{4} + \cdots)$$

결과:
$$f(z) = -3 + \frac{9z}{2} - \frac{15z^2}{4} + \frac{33z^3}{8} + \cdots + \frac{6}{z}$$

#### Region 2: $1 < |z| < 2$

이 영역에서는:
- $\frac{1}{2-z}$는 $z$의 거듭제곱으로 전개 (왜냐하면 $|z| < 2$)
- $\frac{1}{1+z}$는 $1/z$의 거듭제곱으로 전개 (왜냐하면 $|z| > 1$)

$$\frac{1}{2-z} = \frac{1}{2}(1 + \frac{z}{2} + \frac{z^2}{4} + \cdots)$$
$$\frac{1}{1+z} = \frac{1}{z}\cdot\frac{1}{1+1/z} = \frac{1}{z}(1 - \frac{1}{z} + \frac{1}{z^2} - \cdots)$$

#### Region 3: $|z| > 2$

이 영역에서는 두 분수 모두 $1/z$의 거듭제곱으로 전개한다:

$$\frac{1}{1+z} = \frac{1}{z}\cdot\frac{1}{1+1/z} = \frac{1}{z}(1 - \frac{1}{z} + \frac{1}{z^2} - \cdots)$$
$$\frac{1}{2-z} = -\frac{1}{z}\cdot\frac{1}{1-2/z} = -\frac{1}{z}(1 + \frac{2}{z} + \frac{4}{z^2} + \cdots)$$

결과:
$$f(z) = -\frac{12}{z^3}\left(1 + \frac{1}{z} + \frac{3}{z^2} + \frac{5}{z^3} + \frac{11}{z^4} + \cdots\right)$$

## 핵심 원리: 수렴 영역의 결정

1. **특이점의 위치**: 중심점으로부터 특이점들까지의 거리가 수렴 영역의 경계를 만든다
2. **환형 영역(annulus)**: ==두 특이점 사이의 영역에서는 로랑 급수가 양의 거듭제곱과 음의 거듭제곱을 모두 포함한다==
3. **전개 방법의 선택**: 
   - ==$|z - z_0| < |특이점 - z_0|$이면 $(z-z_0)$의 거듭제곱으로 전개==
   - ==$|z - z_0| > |특이점 - z_0|$이면 $1/(z-z_0)$의 거듭제곱으로 전개==

## Questions & Insights

- 같은 함수 $f(z)$가 서로 다른 영역에서 완전히 다른 급수 표현을 가질 수 있다
- 특이점의 "거리"가 복소평면에서 수렴성을 결정하는 기하학적 의미는 무엇인가?
- 이 개념이 나중에 유수 정리(Residue theorem)와 어떻게 연결되는가?
- Green 함수나 전파자(propagator) 계산에서 이러한 전개가 어떻게 활용되는가?

## Physical Applications

- **양자역학**: Green 함수의 극점 구조와 전파자
- **전자기학**: 다극자 전개(multipole expansion)
- **통계역학**: 분배함수의 특이점과 상전이

## Related Concepts

- [[Geometric Series]]
- [[Residue Theorem for Trigonometric Integrals, 삼각함수가 이상하게 들어가 있을 때 적분하기]]
- [[Complex Functions]]
- [[Green Functions]]

## References

- [[boas methematical physics_14 FUNCTIONS OF A COMPLEX VARIABLE.pdf]]

## Notes

이 주제는 등비급수라는 고등학교 수학 개념이 복소해석에서 어떻게 일반화되고 심화되는지 보여주는 좋은 예시다. 특히 "같은 함수가 다른 영역에서 다른 급수로 표현된다"는 점은 해석적 연속(analytic continuation)의 개념으로 이어진다.

수렴 반경이 "가장 가까운 특이점까지의 거리"라는 기하학적 해석은 복소평면에서 함수의 거동을 이해하는 핵심이다.
