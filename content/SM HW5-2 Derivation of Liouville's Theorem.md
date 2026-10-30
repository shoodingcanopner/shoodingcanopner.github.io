---
title: SM HW5-2 Derivation of Liouville's Theorem
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 5th HW, Problem 2

# 문제

$\frac{d\rho}{dt} = 0$이라는 Liouville's theorem 유도를 다시 해 봐라.

# 내 풀이

$\rho$에 대한 연속체 방정식과 phase space의 flow field는 다음과 같다.

$$
\frac{\partial\rho}{\partial t} = -\nabla\cdot(\rho\mathbf{u}), \qquad \mathbf{u} = \sum_i \hat q_i\dot q_i + \hat p_i\dot p_i = \sum_i \hat q_i\frac{\partial\mathcal{H}}{\partial p_i} - \hat p_i\frac{\partial\mathcal{H}}{\partial q_i}
$$

$\nabla\cdot(\rho\mathbf{u}) = (\nabla\rho)\cdot\mathbf{u} + \rho(\nabla\cdot\mathbf{u})$이고, Hamilton equation 때문에 다음이 성립한다.

$$
\nabla\cdot\mathbf{u} = \sum_i\left(\frac{\partial^2\mathcal{H}}{\partial q_i\partial p_i} - \frac{\partial^2\mathcal{H}}{\partial p_i\partial q_i}\right) = 0
$$

따라서

$$
\frac{\partial\rho}{\partial t} + \sum_i\left(\frac{\partial\rho}{\partial q_i}\frac{\partial\mathcal{H}}{\partial p_i} - \frac{\partial\mathcal{H}}{\partial q_i}\frac{\partial\rho}{\partial p_i}\right) = \frac{d\rho}{dt} = 0
$$

→ "$\frac{d\rho}{dt} = 0$는 $\rho$의 총량은 시간이 지나도 변하지 않음을 의미한다."

# 풀이 검토

**판정: 유도 과정은 맞다. 그러나 마지막 해석 문장이 틀렸고, 이것이 Liouville theorem의 핵심을 놓치게 만든다.**

> [!failure] 1. "$d\rho/dt = 0$ ⇒ $\rho$의 총량이 보존된다"는 틀린 해석이다
> **총량 보존** $\frac{d}{dt}\int\rho\,d\Gamma = 0$은 Liouville theorem이 아니라 **연속체 방정식 자체**의 결과다. 연속체 방정식을 전체 phase space에서 적분하면 divergence 항이 경계에서 사라지기 때문이다. 이것은 **어떤 flow에서든** (압축성 흐름이든, 마찰이 있는 계든) 성립한다. 확률이 생기거나 사라지지 않는다는 뜻일 뿐이다.
>
> Liouville theorem이 추가로 말하는 것은 다음과 같다.
> - **$d\rho/dt = 0$ (material/convective derivative)**: phase point를 **따라 움직이며** 보면 주변 밀도가 변하지 않는다.
> - 이것은 $\nabla\cdot\mathbf{u} = 0$, 즉 **phase space flow가 incompressible**하다는 것과 같다.
> - 그 결과 phase space의 임의의 영역은 흐르면서 모양이 일그러져도 **부피가 보존된다**.
>
> 이 차이가 중요한 이유는, 마찰이 있는 계($\nabla\cdot\mathbf{u} < 0$, 부피가 수축)에서도 총량은 보존되지만 $d\rho/dt \neq 0$이기 때문이다. Hamiltonian 계를 특별하게 만드는 것은 **부피 보존**이다.
>
> 참고로 강의 필기([[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]])에도 같은 문장이 있으니 함께 고쳐 두는 것을 권한다.

> [!warning] 2. $\partial\rho/\partial t = 0$과 $d\rho/dt = 0$의 구분
> - $d\rho/dt = 0$: 모든 Hamiltonian 계에서 **항상** 성립한다 (Liouville).
> - $\partial\rho/\partial t = 0$: 고정된 점에서 밀도가 변하지 않는 **stationary (평형)** 분포의 조건이다. Liouville에 의해 이는 $\{\rho, \mathcal{H}\} = 0$과 같다. 따라서 $\rho = \rho(\mathcal{H})$처럼 보존량만의 함수이면 stationary하고, 그 예가 microcanonical (uniform)과 canonical (Boltzmann) 분포다.

> [!warning] 3. 표기 (사소함)
> $\nabla\rho$ 식에서 $\partial\rho/\partial P$의 첨자 $i$가 빠졌다 ($\partial\rho/\partial p_i$).

> [!tip] 4. 유도의 핵심 한 줄
> 이 유도에서 Hamilton equation이 쓰인 곳은 **$\nabla\cdot\mathbf{u} = 0$ 단 한 곳**이다 (mixed partial이 상쇄됨). 즉 "Hamiltonian flow는 divergence-free다"가 Liouville theorem의 본질이다. 이 점을 명시하면 conceptual question에 바로 답할 수 있다.

# 연관 노트

- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]
- [[Liouville's Theorem]]
- [[SM HW5-1 Time Reversal Symmetry of Hamiltonian Dynamics]]
- [[SM HW5-3 Invariance of Phase Space Volume in Spherical Coordinates]]

# 다음 문제
- [[SM HW5-3 Invariance of Phase Space Volume in Spherical Coordinates|HW5-3 Invariance of Phase Space Volume in Spherical Coordinates]]