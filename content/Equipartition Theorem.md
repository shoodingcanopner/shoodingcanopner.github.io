---
title: "Equipartition Theorem"
date: "2026-01-22"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Equipartition Theorem

## Overview

Equipartition theorem은 고전 통계역학에서 열평형 상태에 있는 시스템의 평균 에너지 분포를 기술하는 핵심 정리다. 시스템의 에너지가 일반화 좌표나 운동량에 대해 quadratic하게 의존하는 각 자유도마다 평균 에너지 $\frac{1}{2}k_B T$가 할당된다는 내용이다.

## Mathematical Statement

에너지가 다음과 같이 표현될 때:
$$
E = \sum_i c_i q_i^2
$$

여기서 $q_i$는 일반화 좌표 또는 운동량, $c_i$는 상수다. 각 quadratic term에 대해:

$$
 c_i \langle q_i^2 \rangle = \frac{1}{2}k_B T
\tag{1}
$$

### Symbol Table

| Symbol | Meaning |
|--------|---------|
| $q_i$ | Generalized coordinate or momentum |
| $c_i$ | Coefficient (e.g., $k/2$ for spring, $1/(2m)$ for kinetic energy) |
| $k_B$ | Boltzmann constant |
| $T$ | Absolute temperature |
| $Z$ | Partition function |
| $\beta$ | $1/(k_B T)$ |

## Proof from Canonical Ensemble

총 에너지를 다음과 같이 분해할 수 있다고 가정하자:
$$
U = U_{\text{other}} + \sum_i^N c_i q_i^2
\tag{2}
$$

**Partition function factorization:**
$$
Z = Z_{\text{other}} \prod_{i} Z_i
\tag{3}
$$

각 자유도에 대한 partition function:
$$
Z_i = \int_{-\infty}^{\infty} dq_i \, e^{-\beta c_i q_i^2} = \sqrt{\frac{\pi}{\beta c_i}}
\tag{4}
$$

**평균 에너지 계산:**

통계역학의 표준 트릭을 사용하면:
$$
\langle q_i^2 \rangle = \frac{\int_{-\infty}^{\infty} dq_i \, q_i^2 e^{-\beta c_i q_i^2}}{Z_i}
\tag{5}
$$

이를 $\beta$에 대한 미분으로 표현할 수 있다:
$$
\langle q_i^2 \rangle = -\frac{1}{c_i} \frac{\partial}{\partial \beta} \ln Z_i
\tag{6}
$$

$\ln Z_i = \frac{1}{2} \ln \frac{\pi}{\beta c_i}$를 대입하면:
$$
\langle q_i^2 \rangle = -\frac{1}{c_i} \frac{\partial}{\partial \beta} \left( -\frac{1}{2} \ln \beta \right) = \frac{1}{2c_i\beta}
\tag{7}
$$

따라서:
$$
c_i \langle q_i^2 \rangle = \frac{1}{2\beta} = \frac{1}{2}k_B T
\tag{8}
$$

## Physical Examples

### Position Coordinate (Harmonic Oscillator)
- $q_i = x$, $c_i = \frac{k}{2}$ (spring constant)
- Potential energy: $U = \frac{1}{2}kx^2$
- $\langle \frac{1}{2}kx^2 \rangle = \frac{1}{2}k_B T$

### Momentum (Kinetic Energy)
- $q_i = p$, $c_i = \frac{1}{2m}$
- Kinetic energy: $T = \frac{p^2}{2m}$
- $\langle \frac{p^2}{2m} \rangle = \frac{1}{2}k_B T$

### Normal Mode Coordinate
- $q_i = Q_\alpha$, $c_i = \frac{\omega_\alpha^2}{2}$
- Modal energy: $E_\alpha = \frac{1}{2}\omega_\alpha^2 Q_\alpha^2$

## Validity Conditions

Equipartition theorem이 **엄밀하게 성립하는** 조건:

1. **Quadratic energy dependence**: 에너지가 앙상블에 따라 달라지는 어떤 변수의 제곱에 비례
2. **Unbounded variables**: 그 어떤 변수가 $(-\infty, +\infty)$ 범위를 가짐
3. **Classical limit**: $\hbar \omega \ll k_B T$ (양자 효과 무시 가능)

### Bounded Variables and Breakdown

**중요한 점:** 좌표가 bounded인 경우 위 증명을 직접 적용할 수 없다.

#### Case 1: Angular Variable with Quadratic Potential
각도 변수 $\theta \in [0, 2\pi]$에 대해 $U \propto \theta^2$이면:
$$
Z = \int_0^{2\pi} d\theta \, e^{-\beta c \theta^2}
$$

이는 ==Gaussian integral과 달라 error function으로 표현되며, 일반적으로 $\langle c\theta^2 \rangle \neq \frac{1}{2}k_B T$==

**예외:** Small angle approximation ($\theta \ll 1$)에서는 적분 범위가 실질적으로 unbounded처럼 행동하여 equipartition이 근사적으로 성립.

#### Case 2: Periodic Potential
$U = \kappa(1 - \cos\theta)$ 같은 주기적 potential:
- 애초에 quadratic이 아니므로 equipartition 직접 적용 불가
- 고온 극한 ($k_B T \gg \kappa$)에서 Taylor 전개하면 equipartition 회복

#### Case 3: Confined System with Boundaries
예: 상자 속 입자 $x \in [0, L]$에 harmonic potential
- 벽 경계 조건으로 인해 wavefunction 잘림
- 고온 극한 (thermal wavelength $\ll L$)에서만 경계 효과 무시 가능

### High Temperature Limit

대부분의 bounded system에서 equipartition은 **고온 극한에서 회복**된다:
- 경계 효과가 무시 가능해짐 (thermal wavelength $\ll$ system size)
- Quadratic 근사가 유효한 범위가 넓어짐

## Applications

### Heat Capacity of Ideal Gas
3차원 ideal gas의 경우:
- 병진 운동: 3개의 quadratic kinetic energy terms
- 총 에너지: $\langle E \rangle = \frac{3}{2}Nk_B T$
- 정적 열용량: $C_V = \frac{3}{2}Nk_B$

### Diatomic Molecules
- 병진 (3) + 회전 (2) + 진동 (2): 총 7 degrees of freedom
- 고온에서: $C_V = \frac{7}{2}Nk_B$
- 실제로는 양자 효과로 온도에 따라 달라짐

### Virial Theorem Connection
시간 평균과 ensemble 평균이 같다고 가정하면 (ergodicity), equipartition theorem은 virial theorem과 연결된다.

## Questions & Insights

- **왜 bounded variable에서는 equipartition이 깨지는가?**
  - Gaussian integral의 유효성이 깨짐. 적분 범위가 제한되면 $\int_{-\infty}^{\infty} \to \int_a^b$로 바뀌어 analytic solution이 달라진다.
  
- **양자역학에서는?**
  - 양자 조화 진동자: $\langle E \rangle = \hbar\omega(\frac{1}{2} + \frac{1}{e^{\beta\hbar\omega}-1})$
  - 고온 극한 ($k_B T \gg \hbar\omega$)에서 classical equipartition 회복
  
- **왜 $-\frac{\partial}{\partial \beta} \ln Z$ 트릭이 작동하는가?**
  - $\langle q^2 e^{-\beta c q^2} \rangle \propto \frac{\partial}{\partial \beta} e^{-\beta c q^2}$
  - Partition function의 정의와 결합하면 logarithmic derivative로 표현됨

## Related Concepts

- [[canonical ensemble에서 Boltzman factor]]
- [[partiton function in canonical ensemble]]
- [[microcanonical ensemble의 entropy]]
- [[Gaussian Integral]]

## References

내가 직접 유도함

## Notes from Claude

이 노트는 사용자가 직접 손으로 증명을 작성한 후 토론하며 만들었다. 특히 bounded variable에 대한 질문이 핵심적이었는데, 이는 equipartition theorem의 한계를 정확히 이해하는 데 중요한 지점이다.

증명의 핵심 아이디어는 partition function을 **각 자유도별로 factorize한 후**, Gaussian integral을 이용해 해석적으로 계산하고, $-\frac{\partial}{\partial \beta} \ln Z$ 트릭으로 평균을 구하는 것이다. 이는 통계역학에서 자주 쓰이는 강력한 테크닉이다.

Bounded variable의 경우는 실제 물리 시스템에서 자주 마주치는 상황인데 (각도 변수, 상자 속 입자 등), equipartition이 정확히 성립하지 않는다. 하지만 고온 극한이나 작은 진폭 근사에서는 여전히 유용한 근사가 된다는 점이 중요하다.