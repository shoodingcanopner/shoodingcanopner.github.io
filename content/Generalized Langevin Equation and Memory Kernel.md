---
title: "Generalized Langevin Equation and Memory Kernel"
date: "2026-07-27"
subject: statistical physics
tags:
  - study
  - concept
  - question
class: study
---

# Generalized Langevin Equation and Memory Kernel

## Overview

표준(Markovian) Langevin equation에서 friction force는 **지금 이 순간의 속도에만** 비례한다 ($-\zeta v(t)$). 이는 바탕(bath, 용매)이 입자보다 훨씬 빠르게 relax한다는 근사다. Bath가 느리게 relax하는 내부 자유도를 가지면, friction이 **과거의 속도 전체를 커널로 가중해 적분한 형태**로 바뀐다 — 이것이 memory kernel이 있는 generalized Langevin equation (GLE), 그리고 그 fractional 버전인 fractional Langevin equation (fLe)이다. Friction kernel과 thermal noise kernel이 (같은 함수로) 강제로 묶이는 이유는 fluctuation-dissipation theorem (FDT) 때문이며, 이는 Caldeira-Leggett류의 bath-oscillator 모델로 미시적으로 유도할 수 있다.

이 노트는 Polovnikov, Nechaev, Tamm (2018, Soft Matter) 논문의 eq. (4)와 eq. (8)을 이해하기 위해 작성됨 — [[📑 Journal reading - Effective Hamiltonian of topologically stabilized polymer states]] 참고.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\zeta, \xi_H$ | Friction coefficient |
| $K(t)$ | Friction memory kernel (fLe, time-domain) |
| $\varphi(\xi)$ | Memory kernel in the action/path-integral formulation |
| $H$ | Hurst exponent, $H=1/d_f$ |
| $F_H(t)$ | Thermal random force in fLe |
| $\gamma(t)$ | Friction kernel from bath-oscillator derivation |
| $c_\alpha, \omega_\alpha, m_\alpha$ | Coupling constant, frequency, mass of $\alpha$-th bath oscillator |

## Key Points

### 1. Markovian Langevin equation (memory 없음)

$$
\zeta \frac{dx(t)}{dt} = F(t), \qquad \langle F(t)F(t')\rangle = 2\zeta k_BT\,\delta(t-t')
$$

Friction이 delta function 커널을 가진 특수한 경우로 볼 수 있다 — "지금 이 순간"만 본다.

### 2. Fractional Langevin equation (fLe, 이 논문의 eq. 4)

$$
\xi_H \int_0^{t} d\tau\, K(t-\tau)\frac{d\mathbf{r}(\tau)}{d\tau} = \mathbf{F}_H(t), \qquad \langle \mathbf{F}_H(t_1)\mathbf{F}_H(t_2)\rangle = \xi_H K(t_1-t_2)
$$

$$
K(t_1-t_2) = \frac{2(1-H)(1-2H)}{|t_1-t_2|^{2H}}
$$

friction force가 과거의 모든 속도 $v(\tau)$, $\tau<t$를 커널 $K(t-\tau)$로 가중해서 합친 형태. $K$가 delta function이면 Markovian으로 환원. $K\sim|t_1-t_2|^{-2H}$가 algebraic하게 decay한다는 게 핵심 — $H=1/2$일 때 $(1-2H)=0$이라 delta function으로 붕괴, $H<1/2$(subdiffusive)일수록 더 느리게 decay해 "더 먼 과거까지 기억".

**미시적 기원 (Mori-Zwanzig 직관):** 큰 시스템(예: 폴리머 체인 전체)에서 관심 자유도(하나의 monomer) 하나만 남기고 나머지를 적분해서 없애면, 남은 자유도의 운동방정식은 항상 이런 memory-kernel Langevin 형태가 된다. 이 논문의 핵심 메시지는 quadratic Hamiltonian(비국소적 spring 네트워크, eq. 5)에서 다른 monomer들을 적분해 없애면 정확히 eq. 4의 fLe가 나온다는 것.

### 3. Memory kernel을 가진 action (이 논문의 eq. 8)

$$
\tilde{S} = \int_0^{N}\!\! d\xi \int_0^{N}\!\! d\xi'\; \frac{\partial \mathbf{X}(\xi)}{\partial \xi}\frac{\partial \mathbf{X}(\xi')}{\partial \xi'}\,\varphi(|\xi-\xi'|)
$$

eq. 4가 힘의 균형(dynamics) 관점이라면, eq. 8은 확률 가중치(path integral/action) 관점 — 같은 물리를 다른 형식으로 쓴 것. 표준 kinetic action $\int d\xi(\partial X/\partial\xi)^2$는 **한 점**에서의 속도 제곱만 보는데($\varphi(\xi)=\delta_\xi$인 특수 케이스), eq. 8은 **서로 다른 두 점** $\xi,\xi'$의 속도끼리 곱한 것을 커널 $\varphi(|\xi-\xi'|)$로 가중해 전부 더한다. $\varphi$가 멀리까지 안 죽으면, 멀리 떨어진 두 시점의 속도가 서로 correlated 되도록 통계에 벌점을 매기는 역할 — 이것이 fBm의 정의(증분끼리 멀리까지 상관을 갖는 process) 그 자체.

두 식의 연결: eq. 8의 action을 시간에 대해 미분하면 정확히 eq. 4의 friction force $F(t)=-\int dt' K(t-t')\dot x(t')$ 형태가 나오고, $\varphi(s)\sim s^{-2H}$가 eq. 4의 kernel과 일치한다 (논문 eq. 39–40).

### 4. 왜 friction kernel과 noise kernel이 같은 함수인가 — FDT

우연이 아니라 필연이다. Caldeira-Leggett 스타일로, 입자가 조화진동자 bath에 선형 결합됐다고 하자:

$$
H = \frac{p^2}{2m} + V(x) + \sum_\alpha \left[\frac{p_\alpha^2}{2m_\alpha} + \frac{1}{2}m_\alpha\omega_\alpha^2\left(x_\alpha - \frac{c_\alpha x}{m_\alpha \omega_\alpha^2}\right)^2\right]
$$

bath 자유도를 exact하게 적분해 없애면 GLE가 나온다:

$$
m\ddot{x} + \int_0^t dt'\, \gamma(t-t')\,\dot{x}(t') + V'(x) = F(t)
$$

$$
\gamma(t) = \sum_\alpha \frac{c_\alpha^2}{m_\alpha\omega_\alpha^2}\cos(\omega_\alpha t)
$$

여기까지는 순수 역학 — 아직 온도도 FDT도 없다. $F(t)$는 그저 bath의 초기조건 $x_\alpha(0), p_\alpha(0)$에 의존하는 함수일 뿐.

**FDT가 들어오는 지점:** bath 초기조건이 온도 $T$의 Boltzmann 분포를 따른다고 가정 ($\langle x_\alpha(0)^2\rangle = k_BT/(m_\alpha\omega_\alpha^2)$ 등)하면:

$$
\langle F(t)F(t')\rangle = k_BT\sum_\alpha \frac{c_\alpha^2}{m_\alpha\omega_\alpha^2}\cos[\omega_\alpha(t-t')] = k_BT\,\gamma(t-t')
$$

$\gamma(t)$와 $\langle F(t)F(0)\rangle$이 (상수 $k_BT$ 차이만 나고) 정확히 같은 함수인 이유는 둘 다 같은 결합상수 $c_\alpha$로 이루어진 같은 spectral density에서 나오기 때문이다.

**물리적 이유:** friction과 noise는 서로 다른 채널이 아니라 같은 채널의 두 얼굴이다. bath 진동자 하나하나가 (1) 입자에 힘을 되돌려줌으로써(=과거 운동을 기억하며) dissipation을 일으키고, (2) 동시에 자기 자신의 열적 요동으로 noise를 준다. 두 효과가 같은 $c_\alpha$에서 나오므로, bath가 진짜 열평형이라는 가정 하나만으로 두 커널이 강제로 같아진다.

**만약 이게 성립하지 않는다면:** friction만 세게, noise는 약하게 주면 입자가 비물리적으로 냉각되고 반대면 계속 가열된다. FDT는 "시스템이 결국 올바른 온도 $T$의 열평형 상태로 relax한다"를 보장하는 조건. 이 논문이 eq. 4에서 $\langle F_H F_H\rangle = \xi_H K$를 요구하는 이유가 바로 이것 — fBm 통계 자체는 이 조건 없이도 만들 수 있지만, 열역학적으로 일관된(진짜 온도 $T$의 열평형에 도달하는) fBm을 원한다면 friction kernel과 noise kernel이 반드시 같은 함수여야 한다.

## Questions & Insights

- Q: eq. (4)에서 friction force와 thermal random force가 같은 $K(t_1-t_2)$에 지배받는 것이 FDT 때문인가?
  A: 그렇다. Bath-oscillator 모델(Caldeira-Leggett)로 미시적으로 유도하면, friction kernel $\gamma(t)$와 noise correlation $\langle F(t)F(0)\rangle$이 모두 같은 결합상수 spectral density에서 나온다는 것을 알 수 있다. Bath가 온도 $T$의 열평형이라는 가정을 추가하는 순간 $\langle FF\rangle = k_BT\,\gamma$로 강제된다. FDT가 없으면 시스템이 올바른 온도로 relax하지 않는다(비물리적 냉각/가열).

## Related Concepts

- [[Fluctuation-Dissipation Theorem]]
- [[Fractional Brownian Motion]]
- [[Rouse Model]]
- [[📑 Journal reading - Effective Hamiltonian of topologically stabilized polymer states]]

## References

- Polovnikov, Nechaev, Tamm (2018), *Effective Hamiltonian of topologically stabilized polymer states*, Soft Matter 14, 6561 — eq. (1)-(8), 특히 fLe (eq. 4)와 memory-kernel action (eq. 8)
- Burlatskii & Oshanin (1988), *Probability distribution for trajectories of a polymer chain segment*, Theor. Math. Phys. 75, 659 — memory-kernel action의 최초 등장, $H=1/4$ Rouse case

## Notes from Claude

이 노트는 사용자가 [[📑 Journal reading - Effective Hamiltonian of topologically stabilized polymer states]] 저널 리딩 세션 중 eq. 4, eq. 8이 이해가 안 된다고 질문하면서 나온 대화를 정리한 것이다. Caldeira-Leggett bath-oscillator 유도는 논문에 직접 나오지 않는, Glia가 왜 friction/noise kernel이 같아야 하는지 미시적으로 보여주기 위해 보충한 설명이다.
