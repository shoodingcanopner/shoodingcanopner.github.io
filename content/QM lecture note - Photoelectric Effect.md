---
title: "QM lecture note - Photoelectric Effect"
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
[[QM lecture note - Electric Dipole Approximation and TRK Sum Rule]]


# 오늘의 핵심


# 필기 내용

> [!info] 이 노트의 설명은 Glia가 작성했다.
> 시험 대비로 빠르게 완성한 노트. 이후 직접 읽으면서 고치거나 보충할 것.

Sakurai 5.8.3 Photoelectric Effect

## Symbol table

| Symbol | Meaning |
|--|--|
| $\ket{\alpha}$ | Initial atomic (bound) state (교과서의 $\ket{i}$) |
| $\ket{\mathbf{k}_f}$ | Final continuum state, plane wave |
| $L$ | Box size (box normalization) |
| $n_x, n_y, n_z$ | Lattice integers labeling allowed $\mathbf{k}$ |
| $\rho(E)$ | Density of final states |
| $d\Omega$ | Solid angle of the ejected electron |
| $\mathbf{q}$ | Momentum transfer, $\mathbf{k}_f - (\omega/c)\hat{\mathbf{n}}$ |
| $\theta, \phi$ | Polar angles of $\mathbf{k}_f$ (Fig. 5.13) |
| $\alpha_{\text{fs}}$ | Fine-structure constant $e^2/\hbar c$ |

## 1. 문제 설정

Photoelectric effect = 빛을 흡수한 전자가 원자 밖으로 튀어나가는 것. 
즉 **bound state → continuum state ($E > 0$)** transition이다.

- Initial state $\ket{\alpha}$: 원자의 bound state
- Final state: 자유 전자. 전자가 너무 느리지 않으면 핵의 Coulomb 힘을 무시하고 **plane wave** $\ket{\mathbf{k}_f}$로 근사한다.

5.8.1의 $\sigma_{\text{abs}}$ (5.320)을 그대로 쓰되, 


$$
\sigma_{\text{abs}} = \frac{4\pi^2\hbar}{m_e^2\omega}\left(\frac{e^2}{\hbar c}\right)\left\lvert\bra{n}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha}\right\rvert^2\delta(E_n - E_\alpha - \hbar\omega)
\tag{5.320}
$$


final state가 continuum이므로 $\delta$-function을 density of states $\rho(E_n)$와 함께 적분한다. 이번에는 matrix element가 에너지뿐 아니라 **전자가 튀어나가는 방향**에도 의존하므로, 방향까지 구분해서 센다.

## 2. Box normalization → 전자가 자유롭게 움직이는 물질파

Plane wave는 규격화가 안 되므로, 한 변이 $L$인 상자 안에서 $\lvert\psi\rvert^2$의 적분이 1이 되도록 하고 periodic boundary condition을 준다.

$$
\braket{\mathbf{x}|\mathbf{k}_f} = \frac{e^{i\mathbf{k}_f\cdot\mathbf{x}}}{L^{3/2}}
\tag{5.333}
$$

$$
k_x = \frac{2\pi n_x}{L}, \quad \ldots
\tag{5.334}
$$

$n_x, n_y, n_z$는 정수다. $L \to \infty$이면 $\mathbf{k}$는 연속 변수가 된다. 최종 결과에서 $L$은 사라져야 한다.

## 3. Density of states (방향 포함, $d \Omega$ 고려려) 

State 개수 세기 = $(n_x, n_y, n_z)$ 격자점 세기.

$$
n^2 = n_x^2 + n_y^2 + n_z^2
\tag{5.335}
$$

$n$ ~ $n + dn$, 방향 $d\Omega$ 안의 격자점 수는 구 껍질 부피 $n^2\,dn\,d\Omega$이다. 에너지와 $n$의 관계는
$p = \hbar k$이므로, 

$$
E = \frac{\hbar^2k_f^2}{2m_e} = \frac{\hbar^2}{2m_e}\frac{n^2(2\pi)^2}{L^2}
\tag{5.336}
$$

상태의 수를 구 껍질 부피 $n^2\,dn\,d\Omega$ 로 나타냈던 것을, 위에서 구한 관계식을 이용해 $d E d \Omega$에 대한 식으로 고쳐준다.
$n = Lk_f/2\pi$와 $dE = (\hbar^2k_f/m_e)\,dk_f$를 쓰면

$$
n^2\,d\Omega\frac{dn}{dE}dE = \left(\frac{L}{2\pi}\right)^3(k_f^2)\frac{dk_f}{dE}\,d\Omega\,dE = \left(\frac{L}{2\pi}\right)^3\frac{m_e}{\hbar^2}k_f\,dE\,d\Omega
\tag{5.337}
$$

(Phase space에서 $d^3x\,d^3p/(2\pi\hbar)^3$당 state 하나라는 것과 같은 말이다.)

## 4. Differential cross section

(5.320)  $\sigma_{\text{abs}}$식에 위의 $\rho$를 곱하고 $dE$로 적분하면 $\delta$-function이 사라지고, 방향 $d\Omega$당 cross section이 남는다.

$\sigma_{\text{abs}} = \frac{4\pi^2\hbar}{m_e^2\omega}\left(\frac{e^2}{\hbar c}\right)\left\lvert\bra{n}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha}\right\rvert^2\delta(E_n - E_\alpha - \hbar\omega)$

$$
\frac{d\sigma}{d\Omega} = \frac{4\pi^2\alpha_{\text{fs}}\hbar}{m_e^2\omega}\left\lvert\bra{\mathbf{k}_f}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha}\right\rvert^2\frac{m_ek_fL^3}{\hbar^2(2\pi)^3}
\tag{5.338}
$$

$L^3$은 matrix element 속 $\lvert1/L^{3/2}\rvert^2 = 1/L^3$과 약분된다.

**주의**: 여기서는 dipole approximation을 쓰지 **않는다**. 튀어나간 전자의 파장은 원자 크기와 비슷할 수 있으므로 $e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x}}$를 그대로 둔다.

## 5. 예: K-shell 전자 (hydrogen-like 1s)

Initial state는 수소 ground state에서 $a_0 \to a_0/Z$로 바꾼 것이다.

$$
\bra{\mathbf{k}_f}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha} = \hat{\boldsymbol{\varepsilon}}\cdot\int d^3x\frac{e^{-i\mathbf{k}_f\cdot\mathbf{x}}}{L^{3/2}}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}(-i\hbar\nabla)\left[\frac{1}{\sqrt{\pi}}e^{-Zr/a_0}\left(\frac{Z}{a_0}\right)^{3/2}\right]
\tag{5.339}
$$

### 계산 전략

**부분적분으로 $\nabla$를 왼쪽 두 지수함수로 넘긴다.**  
힘든 미분을 어려운 함수에 하지 않고 쉬운 함수에 떠넘기는 전략. 
파동함수 특성 상 무한히 먼 곳에서는 0이 되어서 $-\inf, \inf$경계항은 0이된다. 

- $\nabla$가 $e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x}}$에 걸리면 $\hat{\mathbf{n}}$이 나오는데, $\hat{\boldsymbol{\varepsilon}}\perp\hat{\mathbf{n}}$이므로 0이다.

$$
\hat{\boldsymbol{\varepsilon}}\cdot\left[\nabla e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\right] = 0
\tag{5.340}
$$

- $\nabla$가 $e^{-i\mathbf{k}_f\cdot\mathbf{x}}$에 걸리면 상수 $\mathbf{k}_f$가 나와서 적분 밖으로 나간다. 결국 matrix element 
	  $\bra{\mathbf{k}_f}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha} \propto \hbar(\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{k}_f)$이다.

- 존재하는 지수 함수 둘을 합친다. 남는 적분은 $e^{-i\mathbf{q}\cdot\mathbf{x}}\psi_{1s}(\mathbf{x})$, 즉 **atomic wave function의 Fourier transform**이다.

$$
\mathbf{q} \equiv \mathbf{k}_f - \left(\frac{\omega}{c}\right)\hat{\mathbf{n}}
\tag{5.341}
$$

$\mathbf{q}$의 의미: (나간 전자의 운동량) − (들어온 photon의 운동량($\hat{\mathbf{n}}$ 방향이니까 빛의 방향이다)). 이 차이만큼의 운동량을 원자(핵)가 받아 준다. 원래 전자가 $\mathbf{q}$ 성분의 운동량을 가지고 있었을 확률진폭이 $\tilde{\psi}(\mathbf{q})$인 셈이다.

### 1s의 Fourier transform

$b = Z/a_0$로 두면 $\int e^{-i\mathbf{q}\cdot\mathbf{x}}e^{-br}d^3x = \frac{8\pi b}{(b^2 + q^2)^2}$이므로

$$
\tilde{\psi}_{1s}(\mathbf{q}) = \frac{8\sqrt{\pi}\,b^{5/2}}{(b^2 + q^2)^2}
$$

이것을 (5.338)에 넣고 정리하면 ($\alpha_{\text{fs}}\hbar = e^2/c$)

$$
\frac{d\sigma}{d\Omega} = 32e^2k_f\frac{(\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{k}_f)^2}{m_ec\omega}\frac{Z^5}{a_0^5}\frac{1}{[(Z^2/a_0^2) + q^2]^4}
\tag{5.342}
$$

## 6. 각도 분포 (Fig. 5.13)

$\hat{\boldsymbol{\varepsilon}}$을 $x$축, $\hat{\mathbf{n}}$을 $z$축으로 두면

$$
(\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{k}_f)^2 = k_f^2\sin^2\theta\cos^2\phi
$$

$$
q^2 = k_f^2 - 2k_f\frac{\omega}{c}\cos\theta + \left(\frac{\omega}{c}\right)^2
\tag{5.343}
$$

### 해석

- $(\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{k}_f)^2$: 전자는 **polarization 방향**(빛의 전기장이 흔드는 방향)으로 가장 많이 튀어나간다. 빛의 진행 방향($\theta = 0$)으로는 나가지 않는다.
- $q^2$의 $\cos\theta$ 항: $\theta$가 작을수록 $q^2$가 작아져 분모가 작아지므로, 분포가 **앞쪽(빛의 진행 방향 쪽)으로 약간 기운다.** 이건 photon 운동량 $(\omega/c)\hat{\mathbf{n}}$ 때문에 생기는 효과로, dipole approximation에서는 사라진다.
- $Z^5$ 의존성: 무거운 원자일수록 K-shell photoelectric effect가 매우 강하다.



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Absorption and Stimulated Emission]]
- [[QM lecture note - Electric Dipole Approximation and TRK Sum Rule]]
- [[QM lecture note - Variational Methods]]

# 다음 강의
[[QM lecture note - Spontaneous Emission]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.8.3

# 원본 필기 이미지
