---
title: "Chapman-Kolmogorov Equation"
date: "2026-02-06"
subject: physics
tags:
  - study
  - concept
  - markov-process
class: study
---

# Chapman-Kolmogorov Equation

## Overview

**Bachelier's Equation의 일반화: 위치와 시간에 의존하는 전이 확률**

Chapman-Kolmogorov equation은 [[Bachelier's Equation (Convolution theorem)]]을 더 general하게, Markov process 전반에 적용할 수 있도록 확장한 것이다. 

핵심 차이점:
- **Bachelier**: Step size의 확률 분포 $p(y)$가 **항상 동일**
- **Chapman-Kolmogorov**: 전이 확률 $p(x, t+\tau|x', t)$가 조건부 확률, **현재 위치 $x'$와 시간 $t$에 의존**

$$
\boxed{\rho(x, t+\tau) = \int p(x, t+\tau|x', t) \, \rho(x', t) \, dx'}
\tag{1}
$$

이걸 [[Kramers-Moyal Expansion]]한 결과는
$$
\boxed{\frac{\partial \rho}{\partial t} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n!} \frac{\partial^n}{\partial x^n}[M_n(x,t) \rho(x,t)]}
\tag{4}
$$
위치와 시간에 따라 달라지는 moments를 사용한다. 


## Symbol Table

| Symbol                     | Meaning                                                               |
| -------------------------- | --------------------------------------------------------------------- |
| $\rho(x,t)$                | 연속 시공간에서의 확률 밀도 함수 (PDF)                                              |
| $p(x, t+\tau \vert x', t)$ | **조건부 전이 확률**: 시간 $t$에 위치 $x'$에 있던 입자가 시간 $t+\tau$에 위치 $x$로 이동할 확률 밀도 |
| $\tau$                     | step 사이 작은 시간 간격                                                      |
| $M_n(x',t)$                | n차 moment (위치 $x'$, 시간 $t$에 의존)                                       |
| $D_n(x,t)$                 | Jump coefficient: $D_n = \frac{M_n}{n!\tau}$ (위치와 시간 함수!)             |

## Bachelier Equation의 한계

[[Bachelier's Equation (Convolution theorem)]]에서:
$$
P_{N+1}(x) = \int p(y) P_N(x-y) dy
$$

여기서 $p(y)$는:
- **Step size의 확률 분포**
- **위치와 무관** (IID steps)
- **항상 동일한 분포**

### 문제점: 현실은 더 복잡하다

실제 물리계에서:
- Energy landscape가 불균일 → **위치에 따라 다른 hopping rate**
- External force가 작용 → **시간에 따라 조건 변화**
- Particle의 내부 상태 → **Markovian but inhomogeneous**
→ **Step size 분포가 위치에 따라 달라짐**

## Chapman-Kolmogorov Equation

### 조건부 전이 확률의 도입

위치 $x'$에 있던 입자가 한 step 후 $x$로 이동하는 확률을:
$$
p(x, t+\tau|x', t)
$$
로 표기. 이것은:
- $x'$와 $t$에 **의존**하는 함수
- $x$에 대해 normalize: $\int p(x, t+\tau|x', t) dx = 1$

### Chapman-Kolmogorov Equation

$$
\boxed{\rho(x, t+\tau) = \int p(x, t+\tau|x', t) \, \rho(x', t) \, dx'}
\tag{2}
$$

**물리적 의미:**
1. 시간 $t$에 $x'$에 있을 확률: $\rho(x', t) dx'$
2. 그 위치에서 $x$로 갈 확률: $p(x, t+\tau|x', t)$
3. 모든 가능한 출발점 $x'$에 대해 적분

### Bachelier Equation과의 관계

만약 $p(x, t+\tau|x', t)$가 **displacement만 의존**한다면:
$$
p(x, t+\tau|x', t) = p(x - x')
$$

이 경우 식 (2)는:
$$
\rho(x, t+\tau) = \int p(x - x') \rho(x', t) dx'
$$

변수 변환 $y = x - x'$:
$$
\rho(x, t+\tau) = \int p(y) \rho(x - y) dy
$$

→ Bachelier's Equation으로 다시 돌아온다.


### Moments의 위치 의존성

n차 moment:
$$
M_n(x',t) = \int (x-x')^n p(x, t+\tau|x',t) dx
\tag{3}
$$

**중요:** $M_n$이 이제 **$x'$와 $t$의 함수**!

예시:
- Deep trap ($E_{\text{high}}$): $M_2 \approx 0$ (거의 안 움직임)
- Shallow trap ($E_{\text{low}}$): $M_2$ 큼 (빠르게 확산)

## Kramers-Moyal Expansion (General Case)

[[Kramers-Moyal Expansion]]과 동일한 방법으로 전개하면:

$$
\boxed{\frac{\partial \rho}{\partial t} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n!} \frac{\partial^n}{\partial x^n}[M_n(x,t) \rho(x,t)]}
\tag{4}
$$

또는 Jump coefficient $D_n(x,t) = \frac{M_n(x,t)}{n!\tau}$를 사용하면:

$$
\boxed{\frac{\partial \rho}{\partial t} = \sum_{n=1}^{\infty} (-1)^n \frac{\partial^n}{\partial x^n}[D_n(x,t) \rho(x,t)]}
\tag{5}
$$

**핵심 차이점:**

| Bachelier의 Kramers-Moyal | Chapman-Kolmogorov의 Kramers-Moyal |
|---------------------------|-----------------------------------|
| $D_n$ = 상수 | $D_n(x,t)$ = **위치와 시간의 함수** |
| $\frac{\partial \rho}{\partial t} = \sum (-1)^n D_n \frac{\partial^n \rho}{\partial x^n}$ | $\frac{\partial \rho}{\partial t} = \sum (-1)^n \frac{\partial^n}{\partial x^n}[D_n(x,t) \rho]$ |

**Product rule 주의!**
$$
\frac{\partial^n}{\partial x^n}[D_n(x,t) \rho(x,t)] \neq D_n(x,t) \frac{\partial^n \rho}{\partial x^n}
$$

$D_n$도 $x$에 의존하므로 미분 시 product rule 적용!

## CTRW와의 연결

Chapman-Kolmogorov equation은:
- **Discrete time** Markov process
- **Continuous space**

**CTRW (Continuous Time Random Walk)**로 가려면:
- Waiting time distribution $\psi(t|x)$도 위치 의존적
- **Day 4**의 Montroll-Weiss equation!

당신의 unbinding 모델:
$$
\psi(t|E_i) \propto e^{-t/\tau_i}, \quad \tau_i \propto e^{E_i/kT}
$$

→ Energy-dependent waiting time → CTRW!

## Notes from Claude

Chapman-Kolmogorov equation을 이해하는 핵심:

1. **"조건부 확률"의 의미**: $p(x, t+\tau|x', t)$는 "현재 상태 $x'$를 **알고 있을 때** 다음 상태 $x$로 갈 확률"
   
2. **Markov property**: 미래는 **현재만**에 의존, 과거 이력은 무관
   
3. **당신의 모델에 직접 적용**:
   - $x' =$ 현재 lattice site
   - $E(x') =$ 현재 binding energy
   - $p(x|x') \propto e^{-E(x')/kT}$ → hopping rate

4. **Survival conditioning의 영향**:
   - 오래 살아남은 입자 → 주로 deep trap 경험
   - Effective $\langle E \rangle$ 증가
   - $D_2(x,t)$ 감소 → subdiffusion!

이제 **Fokker-Planck equation** (Day 2, Lecture 13)에서 $D_1(x,t)$, $D_2(x,t)$가 어디서 오는지 명확해졌을 것입니다!

## Related Concepts

- [[Bachelier's Equation (Convolution theorem)]]
- [[Kramers-Moyal Expansion]]
- [[Markov Property]]
- [[Diffusion Equation Derivation from Random Walks]]

## References

- MIT OCW 18.366, Lecture 13 (Bazant)
[[Lecture 13 Discrete and Continuous Stochastic Processes.pdf]]
