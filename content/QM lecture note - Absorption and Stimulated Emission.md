---
title: "QM lecture note - Absorption and Stimulated Emission"
date: "2026-10-26"
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
[[QM lecture note - Harmonic Perturbation and Detailed Balance]]


# 오늘의 핵심


# 필기 내용
> [!info] 이 노트의 설명은 AI가 작성했다.
> 시험 대비로 빠르게 완성한 노트. 이후 직접 읽으면서 고치거나 보충할 것.

Sakurai 5.8.1 Absorption and Stimulated Emission

## Symbol table

| Symbol | Meaning |
|--|--|
| $e$ | Electron charge ($e < 0$, Sakurai convention) |
| $\mathbf{A}(\mathbf{x})$ | Vector potential of the classical radiation field |
| $\phi(\mathbf{x})$ | Scalar potential |
| $A_0$ | Amplitude of the vector potential |
| $\hat{\boldsymbol{\varepsilon}}$ | (Linear) polarization vector |
| $\hat{\mathbf{n}}$ | Propagation direction |
| $\omega$ | Angular frequency of the radiation |
| $\ket{\alpha}$ | Initial state (교과서의 $\ket{i}$) |
| $\ket{n}$ | Final state |
| $\omega_{n\alpha}$ | $(E_n - E_\alpha)/\hbar$ |
| $\gamma$ | Line width (natural or collision broadening) |
| $U$ | Energy density of the radiation field |
| $cU$ | Energy flux (energy per area per unit time) |
| $\sigma_{\text{abs}}$ | Absorption cross section |
| $\alpha_{\text{fs}}$ | Fine-structure constant $e^2/\hbar c \approx 1/137$ (initial state $\ket{\alpha}$와 구분하려고 첨자를 붙임) |

## Hamiltonian with a classical radiation field

**Semiclassical treatment**: 원자(전자)는 양자역학으로, 빛은 고전적인 전자기장으로 다룬다. 빛을 양자화(photon)하지 않아도 absorption과 stimulated emission은 정확히 설명된다.

Zeeman effect 때처럼 minimal coupling $\mathbf{p} \to \mathbf{p} - e\mathbf{A}/c$를 하면

$$
H = \frac{\mathbf{p}^2}{2m_e} + e\phi(\mathbf{x}) - \frac{e}{m_ec}\mathbf{A}\cdot\mathbf{p}
\tag{5.307}
$$

- $\lvert\mathbf{A}\rvert^2$ 항은 field의 2차라서 약한 빛에서는 무시한다.
- 원래 $-\frac{e}{2m_ec}(\mathbf{p}\cdot\mathbf{A} + \mathbf{A}\cdot\mathbf{p})$인데, Coulomb gauge에서는 $\mathbf{p}\cdot\mathbf{A} = \mathbf{A}\cdot\mathbf{p}$이므로 하나로 합쳐진다. ([[QM lecture note - The Zeeman Effect]]의 (5.130), (5.131))

$$
\nabla\cdot\mathbf{A} = 0
\tag{5.308}
$$

## Monochromatic plane wave

$$
\mathbf{A} = 2A_0\hat{\boldsymbol{\varepsilon}}\cos\left(\frac{\omega}{c}\hat{\mathbf{n}}\cdot\mathbf{x} - \omega t\right)
\tag{5.309}
$$

빛은 transverse wave이므로 $\hat{\boldsymbol{\varepsilon}} \perp \hat{\mathbf{n}}$이고, 그래서 (5.308)이 자동으로 만족된다.

$$
\cos\left(\frac{\omega}{c}\hat{\mathbf{n}}\cdot\mathbf{x} - \omega t\right) = \frac{1}{2}\left[e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x} - i\omega t} + e^{-i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x} + i\omega t}\right]
\tag{5.310}
$$

$$
\mathbf{A} = A_0\hat{\boldsymbol{\varepsilon}}\left[e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x} - i\omega t} + e^{-i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x} + i\omega t}\right]
\tag{5.311}
$$

## Harmonic perturbation과의 대응

$$
-\left(\frac{e}{m_ec}\right)\mathbf{A}\cdot\mathbf{p} = -\left(\frac{e}{m_ec}\right)A_0\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\left[e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x} - i\omega t} + e^{-i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x} + i\omega t}\right]
\tag{5.312}
$$

[[QM lecture note - Harmonic Perturbation and Detailed Balance|Harmonic perturbation]]의 $V(t) = Ve^{i\omega t} + V^\dagger e^{-i\omega t}$ (5.298)과 비교하면:

| 항 | 대응 | 과정 | 조건 |
|--|--|--|--|
| $e^{-i\omega t}$ | $V^\dagger$ | Absorption | $E_n = E_\alpha + \hbar\omega$ |
| $e^{+i\omega t}$ | $V$ | Stimulated emission | $E_n = E_\alpha - \hbar\omega$ |

즉 이 절은 새로운 이론이 아니라, harmonic perturbation의 $V$를 구체적으로 $-\frac{e}{m_ec}\mathbf{A}\cdot\mathbf{p}$로 정한 것뿐이다.

### Absorption

$e^{-i\omega t}$ 항의 계수를 읽으면

$$
V^\dagger_{n\alpha} = -\frac{eA_0}{m_ec}\left(e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\right)_{n\alpha}
\tag{5.313}
$$

이것을 (5.303)의 아래 부호(absorption)에 넣으면

$$
w_{\alpha\to n} = \frac{2\pi}{\hbar}\frac{e^2}{m_e^2c^2}\lvert A_0\rvert^2\left\lvert\bra{n}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha}\right\rvert^2\delta(E_n - E_\alpha - \hbar\omega)
\tag{5.314}
$$

## Line broadening

$\delta$-function은 "빛의 에너지가 level 간격과 정확히 같을 때만 흡수한다"는 뜻이다.

- $\ket{n}$이 continuum이면 $\rho(E_n)$와 함께 적분하면 된다. (→ 5.8.3 photoelectric effect)
- $\ket{n}$이 discrete여도 ground state가 아닌 한 finite lifetime이 있어서 에너지가 무한히 날카롭지 않다 (natural broadening, 5.9절). 충돌에 의한 broadening도 있다.

그래서 $\delta$를 폭 $\gamma$인 Lorentzian의 극한으로 본다.

$$
\delta(\omega - \omega_{n\alpha}) = \lim_{\gamma\to0}\left(\frac{\gamma}{2\pi}\right)\frac{1}{(\omega - \omega_{n\alpha})^2 + \gamma^2/4}
\tag{5.315}
$$

이 Lorentzian은 적분하면 1이고, 높이의 절반에서 폭(FWHM)이 $\gamma$이다.

## Absorption cross section

### 의미

$w_{\alpha\to n}$에는 $\lvert A_0\rvert^2$, 즉 **빛의 세기**가 들어 있다. 빛을 세게 쪼이면 많이 흡수하는 건 당연하니까, 원자 자체의 성질만 뽑아내려면 빛의 세기로 나눠야 한다.

$$
\sigma_{\text{abs}} = \frac{(\text{Energy/unit time}) \text{ absorbed by the atom } (\alpha \to n)}{\text{Energy flux of the radiation field}}
\tag{5.316}
$$

- 분자: 단위시간당 흡수하는 에너지 $= \hbar\omega \times w_{\alpha\to n}$ (한 번 흡수할 때마다 $\hbar\omega$)
- 분모: 단위면적·단위시간당 들어오는 에너지 (energy flux, 차원 = 에너지/(면적·시간))
- 비율의 차원 = **면적**

**직관**: 원자를 빛을 가로막는 과녁으로 생각하면, $\sigma_{\text{abs}}$는 "이 면적에 떨어지는 빛은 전부 흡수된다"고 할 때의 유효 면적이다. 실제 원자 크기와는 다르고, 공명($\omega \approx \omega_{n\alpha}$)에서는 원자보다 훨씬 커질 수 있다.

### Energy flux of the radiation field

(5.319)로 field를 구하면, (5.309)에서

$$
\mathbf{E} = -\frac{1}{c}\frac{\partial\mathbf{A}}{\partial t} = -\frac{2A_0\omega}{c}\hat{\boldsymbol{\varepsilon}}\sin\left(\frac{\omega}{c}\hat{\mathbf{n}}\cdot\mathbf{x} - \omega t\right)
$$

이므로 $E_{\max} = 2A_0\omega/c$이고, 평면파에서는 $B_{\max} = E_{\max}$ (Gaussian units)이다. 시간 평균($\overline{\sin^2} = \frac{1}{2}$)을 취한 energy density는

$$
U = \frac{1}{2}\left(\frac{E_{\max}^2}{8\pi} + \frac{B_{\max}^2}{8\pi}\right)
\tag{5.318}
$$

$$
U = \frac{1}{2}\cdot\frac{2}{8\pi}\cdot\frac{4A_0^2\omega^2}{c^2} = \frac{\omega^2\lvert A_0\rvert^2}{2\pi c^2}
$$

빛은 속도 $c$로 움직이므로 energy flux는 $cU$이다.

$$
cU = \frac{1}{2\pi}\frac{\omega^2}{c}\lvert A_0\rvert^2
\tag{5.317}
$$

$$
\mathbf{E} = -\frac{1}{c}\frac{\partial}{\partial t}\mathbf{A}, \qquad \mathbf{B} = \nabla\times\mathbf{A}
\tag{5.319}
$$

### Result

분자 $\hbar\omega\,w_{\alpha\to n}$를 분모 $cU$로 나누면

$$
\sigma_{\text{abs}} = \frac{\hbar\omega(2\pi/\hbar)(e^2/m_e^2c^2)\lvert A_0\rvert^2\left\lvert\bra{n}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha}\right\rvert^2\delta(E_n - E_\alpha - \hbar\omega)}{(1/2\pi)(\omega^2/c)\lvert A_0\rvert^2}
$$

**핵심: $\lvert A_0\rvert^2$가 약분된다.** 그래서 $\sigma_{\text{abs}}$는 빛의 세기와 무관한, 원자 고유의 양이다. 정리하면

$$
\sigma_{\text{abs}} = \frac{4\pi^2\hbar}{m_e^2\omega}\left(\frac{e^2}{\hbar c}\right)\left\lvert\bra{n}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha}\right\rvert^2\delta(E_n - E_\alpha - \hbar\omega)
\tag{5.320}
$$

### Dimension check

$$
\delta(E_n - E_\alpha - \hbar\omega) = \frac{1}{\hbar}\delta(\omega_{n\alpha} - \omega)
$$

$e^2/\hbar c$는 무차원이고, $\delta(\omega_{n\alpha} - \omega)$는 시간 차원 $T$를 가진다. 그러면

$$
\left[\frac{\hbar}{m^2\omega}\right]\cdot[p^2]\cdot\left[\frac{1}{\hbar}\right]\cdot T = \frac{1}{M^2/T}\cdot\frac{M^2L^2}{T^2}\cdot T = L^2
$$

으로 면적이 맞다.

### 다음 절로

(5.320)의 matrix element에는 $e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x}}$가 들어 있어서 계산이 어렵다. 5.8.2에서는 빛의 파장이 원자보다 훨씬 길다는 점을 이용해 이 지수함수를 1로 근사한다. (electric dipole approximation)

# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Harmonic Perturbation and Detailed Balance]]
- [[QM lecture note - Constant Perturbation and Transition Rate]]
- [[QM lecture note - The Zeeman Effect]]

# 다음 강의
[[QM lecture note - Electric Dipole Approximation and TRK Sum Rule]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.8.1

# 원본 필기 이미지
