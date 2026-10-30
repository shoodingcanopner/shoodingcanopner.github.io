---
title: SM HW6-3 Average Energy and the Constant A
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 6th HW, Problem 3 (MB distribution 유도, 2단계)

# 문제

기체 분자의 평균 에너지 $\epsilon$이 다음과 같다.

$$
\epsilon = \frac{\int f_1^0(\mathbf{p})(\mathbf{p}^2/2m)\,d^3p}{\int d^3p\,f_1^0(\mathbf{p})}
$$

이 적분을 계산하여 다음을 보여라.

$$
f_1^0(\mathbf{p}) = n\left(\frac{3}{4\pi\epsilon m}\right)^{3/2}\exp\left[-\frac{3}{4m\epsilon}\mathbf{p}^2\right]
$$

# 내 풀이

분모는 $n$이다. 분자에서 $p_x^2 + p_y^2 + p_z^2$의 대칭성으로 $p_x^2$ 항의 3배를 취한다.

$$
\int d^3p\,f_1^0\frac{\mathbf{p}^2}{2m} = \frac{3C}{2m}\left(\int dp_y\,e^{-Ap_y^2}\right)\left(\int dp_z\,e^{-Ap_z^2}\right)\left(\int dp_x\,e^{-Ap_x^2}p_x^2\right) = \frac{3C}{2m}\cdot\frac{\pi}{A}\cdot\frac{\sqrt\pi}{2}A^{-3/2}
$$

$$
= \frac{3C}{4m}\pi^{3/2}A^{-5/2} = \frac{3n}{4m}A^{-1} = n\epsilon \quad \Rightarrow \quad A = \frac{3}{4m\epsilon}
$$

Gaussian moment 공식: $\int_{-\infty}^{\infty}x^{2n}e^{-x^2/a^2}dx = \sqrt\pi\frac{a^{2n+1}(2n-1)!!}{2^n}$

# 풀이 검토

**판정: 완벽하다.** 대칭성으로 계산량을 줄인 것, Gaussian moment 공식을 정확히 쓴 것 모두 좋다. 오류는 없다.

> [!tip] 1. 결과의 물리적 의미
> $A = \frac{3}{4m\epsilon}$을 성분별로 보면 다음과 같다.
> $$
> \langle p_x^2 \rangle = \frac{1}{2A} = \frac{2m\epsilon}{3} \quad \Rightarrow \quad \left\langle\frac{p_x^2}{2m}\right\rangle = \frac{\epsilon}{3}
> $$
> 평균 에너지가 세 방향에 **똑같이** 나뉜다. 다음 단계에서 $\epsilon = \frac{3}{2}k_BT$와 결합하면 방향마다 $\frac{1}{2}k_BT$가 되는데, 이것이 equipartition theorem의 kinetic theory 버전이다.

> [!tip] 2. 시험용 지름길
> Gaussian $e^{-Ap_x^2}$의 분산이 $\frac{1}{2A}$라는 것을 기억하면, 적분 없이 $\epsilon = 3\cdot\frac{1}{2m}\cdot\frac{1}{2A} = \frac{3}{4mA}$가 한 줄에 나온다.

# 연관 노트

- [[SM HW6-2 Normalization of the Equilibrium One-Particle Density]]
- [[SM HW6-4 Kinetic Pressure of an Ideal Gas]]

# 다음 문제
[[SM HW6-4 Kinetic Pressure of an Ideal Gas|HW6-4 Kinetic Pressure of an Ideal Gas]]