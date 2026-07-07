---
title: Smoluchowski Equation
date: "2026-06-30"
subject: statistical mechanics
tags:
  - study
  - concept
  - question
class: study
---

# Smoluchowski Equation

## Overview

Smoluchowski equation은 diffusion equation을 외부 force가 존재하는 경우로 확장한 방정식이다. Brownian particle이 potential $U(r)$ 하에서 momentum relaxation time $\tau_p$보다 훨씬 긴 시간 스케일 ($t \gg \tau_p$)에서 보이는 overdamped dynamics를 기술하며, diffusive flux와 convective(drift) flux를 합친 continuity equation으로부터 유도된다.

## Symbol Table

| Symbol             | Meaning                              |
| ------------------ | ------------------------------------ |
| $n(\mathbf{r}, t)$ | Number density of Brownian particles |
| $D$                | Diffusion constant                   |
| $U(\mathbf{r})$    | External potential, $F = -\nabla U$  |
| $\zeta$            | Friction coefficient                 |
| $V$                | Drift velocity                       |
| $J_n$              | Particle flux                        |
| $\tau_p = M/\zeta$ | Momentum relaxation time             |
| $\beta$            | $1/k_BT$                             |

## Key Points

### 1. 출발점: Force가 있는 diffusion equation

Smoluchowski equation은 식 (13.3) diffusion equation$\frac{\partial n}{\partial t} = D \nabla^2 n$을 외부 potential $U(r)$이 존재하는 경우로 일반화한 것이다:

$$
\frac{\partial n}{\partial t} = D \nabla \cdot \left[\nabla n + \beta(\nabla U) n\right]
\tag{1}
$$

### 2. Overdamped 극한과 drift velocity

유도의 핵심은 momentum Langevin equation. $V$는 평균적인 속도. $F$도 평균적인 힘/ 

$$
M\frac{dV}{dt} = -\zeta V + F(r)
\tag{2}
$$

에서 시작한다. $t \gg \tau_p = M/\zeta$인 시간 스케일에서는 관성항(LHS)이 무시되므로, friction force와 external force가 균형을 이룬다:

$$
V = \frac{1}{\zeta} F(r) = \frac{1}{\zeta}\left.\nabla U\right|_r
\tag{3}
$$

### 3. Flux: diffusive + convective
입자 flux는 두 항의 합이다:

$$
J_n = -D\nabla n + nV \tag{4}
$$
첫 항은 농도 기울기를 따라가는 diffusive current, 둘째 항은 force를 따라가는 convective (drift) current이다.

### 4. 평형 조건에서 Einstein relation 유도
평형 상태에서는 두 흐름이 정확히 상쇄되어 $J_n = 0$:

$$
-D\nabla n - \frac{n}{\zeta}\nabla U = 0
\tag{5}
$$

평형통계역학에 의해 $n(r) \propto e^{-\beta U(r)}$ 이어야 하므로, 이를 대입하면

$$
D = \frac{k_BT}{\zeta}
\tag{6}
$$

이 얻어진다. 이것이 fluctuation($D$)과 dissipation($\zeta$)을 연결하는 Einstein relation이다.

### 5. 최종 형태

Flux를 다시 쓰면

$$
J_n(r) = -D\, e^{-\beta U(r)} \nabla\left[e^{\beta U(r)} n(r)\right]
\tag{7}
$$

이를 continuity equation $\partial n/\partial t + \nabla \cdot J_n = 0$에 대입하면 Smoluchowski equation (식 1)이 얻어진다. 이 방정식은 $t \gg \tau_p$인 시간에 대해서만 유효하다.

### 6. Stokes-Einstein relation

구형 입자(radius $R$)에 대해 Stokes formula $\zeta = 6\pi\eta R$를 대입하면

$$
D = \frac{k_BT}{6\pi\eta R}
\tag{8}
$$

Perrin이 이 관계로부터 Boltzmann constant와 분자 크기를 추정하여 원자의 실재를 입증한 역사적 의미를 가진다.

### 7. 생물학적 응용

- **Cell capture**: steady state ($\partial n/\partial t = 0$)에서 absorbing boundary condition을 적용해 diffusion current $I_s = 4\pi RDn_\infty$를 구함.
- **Ionic diffusion through membrane**: 평형 조건 $J=0$에서 Nernst potential $\Delta U = k_BT \ln(c_i/c_o)$이 유도됨.

## Questions & Insights

## Related Concepts

- [[Ornstein-Uhlenbeck Process]]
- [[Ficks_First_Law_of_Diffusion]]
- [[Ficks_Second_Law_of_Diffusion]]
- [[Diffusion Equation Gaussian Distribution]]
- [[Equipartition Theorem]]

## References

- [[Statistical Physics for Biological Matter (Woo)]] — Chapter 13: Brownian Motions (식 13.12–13.22, 13.28–13.33, 13.39–13.47)

## Notes from Claude

- Smoluchowski equation의 핵심은 "diffusive flux와 convective flux가 평형에서 정확히 상쇄된다"는 조건으로부터 Einstein relation이 자연스럽게 도출된다는 점이다. 이는 fluctuation-dissipation theorem의 가장 단순한 형태 중 하나이다.
- 교재의 식 (13.12)는 다소 압축된 표기로 등장하므로, 실제 유도 과정 (13.13)~(13.21)을 따라가야 물리적 의미가 명확해진다.
