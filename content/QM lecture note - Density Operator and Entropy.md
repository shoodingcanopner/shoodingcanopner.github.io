---
title: "QM lecture note - Density Operator and Entropy"
date: "2026-06-08"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의
[[QM lecture note - Wigner-Eckart Theorem Proof and Applications]]에서 Wigner-Eckart theorem의 증명, selection rules, 그리고 응용을 다루었다.

# 오늘의 핵심

- **Density operator**: 순수한 ket 하나로 기술되지 않는 통계적 혼합 상태를 기술하는 연산자 $\rho = \sum_i \omega_i \ket{\psi_i}\bra{\psi_i}$
- **Expectation value**: $\langle Q \rangle = \text{Tr}(\rho Q)$ — basis 독립적인 표현
- **Pure vs Mixed**: $\text{Tr}(\rho^2) = 1$ (pure), $\text{Tr}(\rho^2) < 1$ (mixed)
- **Von Neumann Entropy**: $S = -k\,\text{Tr}(\rho\ln\rho)$ — 시스템의 혼합 정도를 측정
- **Maximum entropy**: 모든 상태가 동등확률 $p_i = 1/d$일 때, $S_\text{max} = k\ln d$

# 필기 내용

## 1. 왜 Density Operator가 필요한가?

지금까지 양자역학에서는 시스템이 단 하나의 ket $\ket{\psi}$로 기술된다고 가정했다. 이것을 **pure state**라 한다.

그런데 실제 물리계에서는 이것이 불가능한 경우가 많다. 예를 들어:

- 온도 $T$의 열평형 상태에 있는 원자: 에너지 $E$인 상태에 있을 확률이 Boltzmann distribution을 따름
- 측정을 하기 전의 앙상블: 여러 가능한 상태가 확률적으로 혼합

이런 **통계적 혼합(statistical mixture)** 상태를 기술하기 위해 density operator가 필요하다.

### 열평형 상태의 예

해밀토니안 $\mathcal{H}$의 에너지 eigenstate를 $\{\ket{E_a}\}$라 하자. 온도 $T$에서 에너지 $E$인 상태에 있을 확률은:

$$
P_T(E) = \frac{e^{-E/kT}}{Z}, \qquad Z = \sum_{E} e^{-E/kT}
$$

이때 observable $Q$의 기댓값은:

$$
\langle Q \rangle_T = \sum_{E_a} P_T(E_a)\langle E_a | Q | E_a \rangle
$$

이것은 각 에너지 eigenstate에서의 양자역학적 기댓값을 **열통계적 확률로 가중평균**한 것이다. 고전 통계역학의 ensemble average와 완전히 같은 구조이다.

## 2. Density Operator의 정의

일반적인 혼합 상태에서, 상태 $\ket{\psi_i}$에 있을 확률이 $\omega_i$라 하면 ($\sum_i \omega_i = 1$, $\omega_i \ge 0$) density operator를 다음과 같이 정의한다:

$$
\rho = \sum_i \omega_i \ket{\psi_i}\bra{\psi_i}
$$

이것은 각 상태로의 **projection operator의 확률 가중 합**이다.

이를 이용하면 $Q$의 기댓값은:

$$
\langle Q \rangle = \text{Tr}(\rho Q)
$$

### 왜 Trace인가?

임의의 complete basis $\{\ket{b'}\}$에 대해 trace를 전개하면:

$$
\text{Tr}(\rho Q) = \sum_{b'}\langle b'|\rho Q|b'\rangle = \sum_{b'}\sum_i \omega_i \langle b'|\psi_i\rangle\langle\psi_i|Q|b'\rangle
$$

completeness relation을 삽입하면 $\langle Q \rangle_T = \sum_{E_a} P_T(E_a)\langle E_a | Q | E_a \rangle$와 일치함을 확인할 수 있다.

**핵심은 Trace가 basis 독립적**이라는 점이다. 어떤 basis로 계산해도 같은 값이 나오기 때문에, 물리적 예측값을 표현하기에 가장 자연스러운 방법이다.

### Density Operator의 성질

$$
\text{Tr}(\rho) = 1, \qquad \rho^\dagger = \rho, \qquad \rho \ge 0
$$

- $\text{Tr}(\rho) = 1$: 확률의 합이 1
- $\rho^\dagger = \rho$: Hermitian (모든 projection operator가 Hermitian이므로)
- $\rho \ge 0$: 모든 eigenvalue가 $\ge 0$ (확률이 음수일 수 없으므로)

## 3. Pure State vs Mixed State

| | Pure State | Mixed State |
|--|--|--|
| $\rho$ | $\ket{\psi}\bra{\psi}$ | $\sum_i \omega_i\ket{\psi_i}\bra{\psi_i}$, $\omega_i < 1$ |
| $\rho^2$ | $\rho^2 = \rho$ (idempotent) | $\rho^2 \neq \rho$ |
| $\text{Tr}(\rho^2)$ | $= 1$ | $< 1$ |

### Pure State에서 $\rho^2 = \rho$인 이유

$$
\rho^2 = \ket{\psi}\bra{\psi}\ket{\psi}\bra{\psi} = \ket{\psi}\underbrace{\braket{\psi|\psi}}_{=1}\bra{\psi} = \ket{\psi}\bra{\psi} = \rho
$$

### Mixed State에서 $\text{Tr}(\rho^2) < 1$인 이유

$\rho$를 대각화하면 ($\rho = \sum_i p_i \ket{i}\bra{i}$):

$$
\text{Tr}(\rho^2) = \sum_i p_i^2
$$

$0 < p_i < 1$이고 $\sum_i p_i = 1$이면, Cauchy-Schwarz에 의해:

$$
\sum_i p_i^2 \le \left(\sum_i p_i\right)^2 = 1
$$

등호는 $p_i = 1$ (하나만 1, 나머지 0), 즉 pure state일 때만 성립한다.

> [!note] AI 보충 — $\text{Tr}(\rho^2)$의 물리적 의미
> $\text{Tr}(\rho^2)$은 **purity**라고 부른다. 시스템이 얼마나 "pure"한지를 $[1/d, 1]$ 범위로 나타내는 양이다.
> - $\text{Tr}(\rho^2) = 1$: 완전한 pure state
> - $\text{Tr}(\rho^2) = 1/d$: 완전한 혼합 상태 (maximally mixed state, $d$: Hilbert space 차원)
>
> purity는 basis 독립적이므로, 실험적으로 접근 가능한 물리량이다.

## 4. Von Neumann Entropy

시스템이 얼마나 "섞여 있는지"를 정량화하는 양:

$$
S = -k\,\text{Tr}(\rho\ln\rho)
$$

$\rho$를 대각화하면 ($\rho = \sum_i p_i\ket{i}\bra{i}$):

$$
S = -k\sum_i p_i\ln p_i
$$

이것은 정보이론의 **Shannon entropy**와 정확히 같은 구조이다.

### Pure State: $S = 0$

Pure state에서는 $p_i = 1$ (하나만), 나머지 $p_j = 0$이다.

$\lim_{p \to 0} p\ln p = 0$이므로:

$$
S = -k\cdot 1\cdot\ln 1 = 0
$$

시스템의 상태를 완전히 알고 있으면 불확실성이 없으므로 entropy가 0이다.

### Mixed State: $S > 0$

여러 상태가 섞여있으면 각 $p_i \ln p_i < 0$이므로 $S > 0$.

### Maximum Entropy

$S$를 maximize하는 조건: $\sum_i p_i = 1$ 하에서 $-\sum_i p_i\ln p_i$를 최대화.

Lagrange multiplier를 사용하면:

$$
\frac{\partial}{\partial p_i}\left(-\sum_j p_j \ln p_j - \lambda\sum_j p_j\right) = 0
$$

$$
-\ln p_i - 1 - \lambda = 0 \implies p_i = e^{-(1+\lambda)} = \text{const}
$$

즉, $p_i = \frac{1}{d}$ (모든 상태가 동등 확률)일 때 entropy가 최대:

$$
S_\text{max} = -k\sum_{i=1}^d \frac{1}{d}\ln\frac{1}{d} = k\ln d
$$

이때 density operator는:

$$
\rho_\text{max} = \frac{1}{d}\sum_i \ket{\psi_i}\bra{\psi_i} = \frac{\mathbb{1}}{d}
$$

어떤 상태에 있는지 **전혀 모르는** 상황 — 완전히 무질서한 상태이다.

> [!note] AI 보충 — Von Neumann Entropy의 물리적 직관
> Von Neumann entropy는 시스템에 대한 **"무지의 정도"** 를 측정한다.
>
> - $S = 0$: 시스템 상태를 완전히 알고 있음 (pure state)
> - $S = k\ln d$: 시스템 상태에 대해 아무것도 모름 (maximally mixed)
> - 중간값: 부분적으로 알고 있음
>
> 통계역학에서 Boltzmann entropy $S = k\ln W$와의 연결: maximally mixed state에서 $\rho = \mathbb{1}/d$이면 $S = k\ln d$인데, $d$는 접근 가능한 미시 상태의 수 $W$에 대응한다. 이 둘은 같은 물리적 내용을 담고 있다.

## 5. 정리: Density Operator 한눈에 보기

$$
\rho = \sum_i \omega_i \ket{\psi_i}\bra{\psi_i}
$$

| 물리량 | 표현 | 의미 |
|--|--|--|
| 기댓값 | $\langle Q\rangle = \text{Tr}(\rho Q)$ | basis 독립적 |
| Purity | $\text{Tr}(\rho^2) \in [1/d,\, 1]$ | 1이면 pure |
| Entropy | $S = -k\,\text{Tr}(\rho\ln\rho)$ | 혼합 정도 |
| Pure 조건 | $\rho^2 = \rho$ | idempotent |
| Max entropy | $\rho = \mathbb{1}/d$ | $S = k\ln d$ |

# 궁금한 내용

> [!question] Density operator는 시간에 따라 어떻게 진화하는가? (von Neumann equation: $i\hbar\partial_t\rho = [\mathcal{H}, \rho]$)

> [!question] Open quantum system에서 환경과의 상호작용으로 pure state가 mixed state로 변하는 과정 (decoherence)은 어떻게 기술되는가?

# 연관 학습 노트

- [[QM lecture note - Time Evolution Operator]]
- [[QM lecture note - Measurements, Observables, and the Uncertainty Relations]]

# 다음 강의

기말고사 범위의 마지막 주제.

# References

- Sakurai, *Modern Quantum Mechanics*, Section 3.4

# 원본 필기 이미지
