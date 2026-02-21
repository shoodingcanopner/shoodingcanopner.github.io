---
title: "Poisson Equation for Dirac Delta and Point Charge Potential"
date: "2025-10-26"
subject: physics
tags:
  - study
  - electromagnetism
  - mathematical-physics
  - concept
class: study
---

# Poisson Equation for Dirac Delta and Point Charge Potential

## Symbol Definitions

| Symbol | Meaning |
|--------|---------|
| $\vec{r}$ | Position vector |
| $\delta^3(x,y,z)$ | Three-dimensional Dirac delta function |
| $V$ | Volume |
| $\phi$ | Scalar potential |
| $h_1, h_2, h_3$ | Scale factors in curvilinear coordinates |
| $\hat{n}$ | Unit normal vector |

## Overview

디락 델타 함수와 포아송 방정식의 관계를 이해하고, 점전하의 정전기 퍼텐셜이 어떻게 유도되는지 다룬다.

## Key Points

### 1. 라플라시안과 디락 델타 함수

$$
\nabla^2 \left(\frac{1}{r}\right) = -4\pi \delta^3(x,y,z) \tag{1}$$

*여기서 $\delta^3(x,y,z)$는 3차원에서 디락 delta 함수.*

### 2. 유도 과정

라플라시안의 성질을 이용하면:

$$
\nabla^2 \left(\frac{1}{r}\right) = \nabla \cdot \left(\nabla \frac{1}{r}\right) \tag{2}
$$

*$\frac{1}{r}$의 gradient는:*

$$
\nabla \frac{1}{r} = -\frac{1}{r^2}\hat{r} \tag{3}
$$

따라서:

$$
\nabla \cdot \left(\frac{\hat{r}}{r^2}\right) = 4\pi \delta^3(x,y,z) \tag{4}
$$

### 3. Divergence Theorem 적용

임의의 부피 $V$에 대해 양변을 적분하면:

$$
\int_V \nabla \cdot \left(\frac{\hat{r}}{r^2}\right) dV = \oint_{S=V\text{의 경계}} \frac{\hat{r}}{r^2} \cdot \hat{n} \, da = \frac{1}{R^2} \oint |da| = \frac{4\pi R^2}{R^2} = 4\pi \tag{5}
$$

*만약 $V$가 원점의 중심인 반지름 $R$ 구라면 $r = R$이므로.*

부피적분을 면적분으로 변환한다.

### 4. 중간 결론

$$
\int_V \nabla \cdot \left(\frac{\hat{r}}{r^2}\right) dV = 4\pi \tag{6}
$$

이어서 원점을 제외한 위치에서 $\nabla \cdot \frac{\hat{r}}{r^2} = 0$임을 보일 것이다. 디락 델타 함수의 정의에 의해 식 $\eqref{eq:laplacian-delta}$가 성립한다.

## Curvilinear Coordinates

일반 좌표계에서 divergence 기본 공식:

*$h_1, h_2, h_3$가 각각 scale factor일 때:*

$$
\nabla \cdot \vec{A} = \frac{1}{h_1 h_2 h_3} \left\{ \frac{\partial}{\partial x_1}(A_1 h_2 h_3) + \frac{\partial}{\partial x_2}(A_2 h_1 h_3) + \frac{\partial}{\partial x_3}(A_3 h_1 h_2) \right\} \tag{7}
$$

### Spherical Coordinates

구면좌표계에서는 $h_r = 1$, $h_\theta = r\sin\theta$, $h_\phi = r$이므로:

$$
\nabla \cdot \vec{A} = \frac{1}{r^2 \sin\theta} \left\{ \frac{\partial}{\partial r}(r^2 \sin\theta A_r) + \frac{\partial}{\partial \theta}(r A_\theta) + \frac{\partial}{\partial \phi}(r\sin\theta A_\phi) \right\} \tag{8}
$$

*이제 $\nabla \cdot \frac{\hat{r}}{r^2}$를 구하면, 이 식은 $r$과 $\theta$에 대한 term이 없으므로:*

$$
\nabla \cdot \frac{\hat{r}}{r^2} = \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \cdot \frac{1}{r^2}\right) = 0 \quad (r \neq 0) \tag{9}
$$

$$
= \infty \quad (\text{at } r = 0) \tag{10}
$$

*이러한 성질로 가정 $\nabla \cdot \frac{\hat{r}}{r^2}$이 디락 델타의 정의를 만족함을 알 수 있다.*

## Questions & Insights

- Divergence theorem을 이용해 디락 델타 함수의 적분 표현을 얻을 수 있다는 점이 흥미롭다.
- 원점에서의 특이점(singularity) 처리가 디락 델타 함수의 핵심이다.
- *왜 $4\pi$라는 계수가 나오는가? → 단위 구의 표면적이 $4\pi R^2$이기 때문.*
- 이는 쿨롱 법칙에서  $4\pi$ 계수가 등장하는 것으로 직결된다. 

## Related Concepts

[[맥스웰 방정식 외우기]]

## References

- https://youtu.be/0_Qw39mKrjQ
![[Pasted image 20251026220325.png]]
![[Pasted image 20251026220335.png]]
## Notes from Claude

디락 델타 함수는 물리학에서 점전하, 점질량 등 이상화된 개념을 수학적으로 다루기 위한 도구다. $\nabla^2(1/r) = -4\pi\delta^3(\vec{r})$는 전자기학의 포아송 방정식과 직결되며, 점전하의 퍼텐셜 $\phi = q/(4\pi\epsilon_0 r)$를 유도하는 기반이 된다.

Divergence theorem의 적용은 미분 형태의 관계식을 적분 형태로 변환하여 물리적 의미를 명확히 하는 강력한 방법이다.
