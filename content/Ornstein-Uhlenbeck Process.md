---
title: Ornstein-Uhlenbeck Process
date: "2026-06-15"
subject: statistical mechanics
tags:
  - study
  - concept
  - question
class: study
---

# Ornstein-Uhlenbeck Process

## Overview

Ornstein-Uhlenbeck (OU) process는 **mean-reverting stochastic process**이다. 조화 포텐셜 $U(x) = \frac{1}{2}kx^2$ 하에서 overdamped Brownian motion에 해당하며, 노이즈가 있음에도 불구하고 평균 위치로 돌아오려는 경향을 가진다. Velocity Langevin equation도 같은 수학적 구조를 가지므로 OU process에 속한다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $x$ | Position (or velocity in velocity OU) |
| $\zeta$ | Friction coefficient |
| $k$ | Spring (restoring) constant |
| $\tau$ | Relaxation time $= \zeta/k$ |
| $f_R(t)$ | Random (thermal) force |
| $H$ | Noise strength |
| $\tau_p$ | Momentum relaxation time $= M/\zeta$ |

## Key Points

### 두 가지 형태

**Velocity OU process** (식 13.64, F=0 경우) 이것은 Brownian particle의 Langevin equation:

$$
M\frac{dv}{dt} = -\zeta v + f_R(t)
\tag{1}
$$
식 전체에 평균을 취하면 $M\frac{d\langle v\rangle}{dt} = -\zeta \langle v \rangle + \langle f_R(t) \rangle =  -\zeta \langle v \rangle$, 
간단한 미방을 풀면 $\langle v \rangle = v_0 e^{t/\tau_p}$

$v$가 평균 0으로 회귀하며, relaxation time은 $\tau_p = M/\zeta$이다.

**Position OU process** (식 13.107, overdamped + harmonic):

$$
\zeta\frac{dx}{dt} = -kx + f_R(t)
\tag{2}
$$

$x$가 평균 0으로 회귀하며, relaxation time은 $\tau = \zeta/k$이다.

두 방정식은 수학적으로 동일한 구조를 가지므로, velocity OU의 결과를 치환하여 position OU에 적용할 수 있다 ($v \to x$, $M \to \zeta$, $\tau_p \to \tau$).

### Probability Distribution (식 13.108)

초기 위치 $x_0$에서 시작한 OU process의 확률 분포:

$$
P(x; t | x_0) = \left[\frac{k}{2\pi(1 - e^{-2t/\tau})}\right]^{1/2} \exp\left[-\frac{k(x - e^{-t/\tau}x_0)^2}{2(1 - e^{-2t/\tau})}\right]
\tag{3}
$$

- **평균**: $\langle x(t) \rangle = x_0 e^{-t/\tau}$ → 시간이 지남에 따라 0으로 수렴
- **분산**: $\langle x^2(t) \rangle - \langle x(t) \rangle^2 = \frac{k_BT}{k}(1 - e^{-2t/\tau})$ → $k_BT/k$ (equilibrium)

### 장시간 극한 (Equilibrium, 식 13.91)

$t \to \infty$:

$$
P(x) = \left(\frac{k}{2\pi k_BT}\right)^{1/2} \exp\left[-\frac{kx^2}{2k_BT}\right]
\tag{4}
$$

이는 harmonic oscillator의 equilibrium Boltzmann 분포와 일치하며, equipartition theorem $\langle kx^2/2 \rangle = k_BT/2$를 만족한다.

### Velocity Correlation Function (식 13.76)

평형 상태($t, t' \gg \tau_p$)에서 velocity OU process의 time correlation function:

$$
C_V(t - t') = \frac{k_BT}{M} e^{-|t-t'|/\tau_p}
\tag{5}
$$

**Stationarity**: $t + t'$에는 무관하고 오직 $|t - t'|$에만 의존한다. 이는 equilibrium time correlation function의 핵심 성질이다.

### Wiener Process와의 관계

$k = 0$ (restoring force 없음) 극한에서 OU process는 **Wiener process** (pure diffusion)로 환원된다 (식 13.103, 104):

$$
\zeta\frac{dx}{dt} = f_R(t)
\tag{6}
$$

$$
\langle (x(t) - x_0)^2 \rangle = 2Dt
\tag{7}
$$

OU process는 Wiener process에 mean-reversion이 추가된 형태이다.

### Noise와 Dissipation의 관계 (Fluctuation-Dissipation)

Random force의 크기 $H$는 friction coefficient와 온도로 결정된다 (식 13.75):

$$
\langle f_R(t) f_R(t') \rangle = 2\zeta k_BT \, \delta(t - t')
\tag{8}
$$

이것이 성립해야만 장시간에 equilibrium에 도달한다.

## Questions & Insights

- Stationarity: 평형 극한에서 $e^{-(t+t')/\tau}$ 항이 소멸하며 correlation function이 $|t-t'|$에만 의존하게 된다 (식 13.73 → 13.76 전환 과정).
- OU process에서도 position $x(t)$는 여전히 stochastic하게 변화한다. Overdamped limit은 가속도가 0이라는 게 아니라, 관성 항이 무시 가능한 시간 스케일($t \gg \tau_p$)에서의 근사이다.
- $x(t)$가 $f_R(t)$와 linearly related되어 있으므로 Gaussian distribution을 가진다 (CLT).

## Related Concepts

- [[Brownian Motion Properties]]
- [[Equipartition Theorem]]
- [[White Noise and Brownian Motion Relationship]]
- [[Diffusion Equation Gaussian Distribution]]
- [[Stochastic Differential Equations 공부하기]]

## References

- [[Statistical Physics for Biological Matter (Woo)]] — Chapter 13: Brownian Motions (식 13.76, 13.79, 13.91, 13.103, 13.107, 13.108)

## Notes from Claude

- Velocity OU (식 13.64)와 Position OU (식 13.107)는 수학적으로 동일한 구조이므로, 결과를 변수 치환을 통해 공유할 수 있다.
- Stationarity는 평형 time correlation function의 핵심 성질로, 절대 시간(t+t')이 아닌 상대 시간(t-t')에만 의존함을 의미한다.
- OU process는 지그재그 운동을 계속하면서도 평균적으로 restoring force에 의해 원점으로 되돌아오는 구조를 가진다.
- Wiener process와 달리, OU process는 장시간에 발산하지 않고 equilibrium 분포에 수렴한다.
