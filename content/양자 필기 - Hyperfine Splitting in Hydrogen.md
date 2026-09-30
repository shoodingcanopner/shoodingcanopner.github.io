---
title: 양자 필기 - Hyperfine Splitting in Hydrogen
date: "2026-09-30"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!error] 비공식 자료, 책임 안 짐
> 이것은 [[양자물리 (학부용, Griffiths)]] 강의를 듣고 TA가 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 
> 교수님께서 검토하신 자료가 **아니므로,** 전문성을 보장하지 않습니다.

# 지난 강의
- [[양자 필기 - Intermediate-Field Zeeman Effect]] (Griffiths 7.4.3)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $\mathbf{S}_e,\ \mathbf{S}_p$ | 전자, 양성자의 spin |
| $\boldsymbol{\mu}_e,\ \boldsymbol{\mu}_p$ | 전자, 양성자의 magnetic dipole moment |
| $m_e,\ m_p$ | 전자, 양성자의 질량 |
| $g_p$ | 양성자의 g-factor (측정값 5.59) |
| $\hat{r}$ | 전자 위치 방향의 unit vector |
| $\mathbf{S}$ | Total spin $\mathbf{S}_e + \mathbf{S}_p$ |
| $H'_{hf},\ E_{hf}^1$ | Hyperfine perturbation과 first-order energy |
| $\Delta E,\ \nu$ | Triplet–singlet 에너지 간격, 방출 photon의 frequency |

# 필기 내용

## 1. 양성자도 magnetic dipole이다

양성자 자체도 magnetic dipole을 이루지만, 분모의 질량 때문에 전자의 dipole moment보다 훨씬 작다.

$$
\boldsymbol{\mu}_p = \frac{g_p e}{2m_p}\mathbf{S}_p,
\qquad
\boldsymbol{\mu}_e = -\frac{e}{m_e}\mathbf{S}_e
\tag{1}
$$

양성자는 세 개의 quark로 이루어진 composite 구조라서 gyromagnetic ratio가 전자처럼 단순하지 않다. 그래서 explicit한 g-factor $g_p$를 쓰며, 측정값은 전자의 2.00과 달리 **5.59**다.

## 2. Dipole이 만드는 magnetic field

고전 전자기학에 의해 dipole $\boldsymbol{\mu}$는 다음 field를 만든다.

$$
\mathbf{B} = \frac{\mu_0}{4\pi r^3}\left[3\left(\boldsymbol{\mu}\cdot\hat{r}\right)\hat{r} - \boldsymbol{\mu}\right] + \frac{2\mu_0}{3}\boldsymbol{\mu}\,\delta^3(\mathbf{r})
\tag{2}
$$

> [!note] Delta function 항 (footnote 29)
> 이 항이 낯설다면, dipole을 spinning charged spherical shell로 보고 $\boldsymbol{\mu}$를 고정한 채 반지름 $\to 0$, 전하 $\to \infty$ 극한을 취하면 유도할 수 있다.

## 3. Hyperfine Hamiltonian

양성자의 magnetic dipole moment가 만드는 field 안에서 전자의 Hamiltonian은 (7.59의 $H = -\boldsymbol{\mu}\cdot\mathbf{B}$에 의해)

$$
H'_{hf} = \frac{\mu_0 g_p e^2}{8\pi m_p m_e}\frac{\left[3\left(\mathbf{S}_p\cdot\hat{r}\right)\left(\mathbf{S}_e\cdot\hat{r}\right) - \mathbf{S}_p\cdot\mathbf{S}_e\right]}{r^3} + \frac{\mu_0 g_p e^2}{3m_p m_e}\mathbf{S}_p\cdot\mathbf{S}_e\,\delta^3(\mathbf{r})
\tag{3}
$$

First-order correction은 기댓값이다.

$$
E_{hf}^1 = \frac{\mu_0 g_p e^2}{8\pi m_p m_e}\left\langle\frac{3\left(\mathbf{S}_p\cdot\hat{r}\right)\left(\mathbf{S}_e\cdot\hat{r}\right) - \mathbf{S}_p\cdot\mathbf{S}_e}{r^3}\right\rangle + \frac{\mu_0 g_p e^2}{3m_p m_e}\langle\mathbf{S}_p\cdot\mathbf{S}_e\rangle\left|\psi(0)\right|^2
\tag{4}
$$

## 4. Ground state

Ground state (혹은 $\ell = 0$인 모든 state)에서는 wave function이 **spherically symmetric**이라 첫 번째 기댓값이 사라진다 (Problem 7.31). 한편 (4.80)에서 $\left|\psi_{100}(0)\right|^2 = 1/(\pi a^3)$이므로

$$
E_{hf}^1 = \frac{\mu_0 g_p e^2}{3\pi m_p m_e a^3}\langle\mathbf{S}_p\cdot\mathbf{S}_e\rangle
\tag{5}
$$

두 spin의 dot product를 포함하므로 이를 **spin-spin coupling**이라 부른다 (spin-orbit coupling은 $\mathbf{S}\cdot\mathbf{L}$을 포함했다).

## 5. Good states: total spin

Spin-spin coupling이 있으면 각 spin angular momentum은 따로 보존되지 않는다. Good states는 **total spin**의 eigenvector다.

$$
\mathbf{S} \equiv \mathbf{S}_e + \mathbf{S}_p
\tag{6}
$$

전과 똑같이 제곱해서 정리하면

$$
\mathbf{S}_p\cdot\mathbf{S}_e = \frac12\left(S^2 - S_e^2 - S_p^2\right)
\tag{7}
$$

전자와 양성자 모두 spin 1/2이므로 $S_e^2 = S_p^2 = (3/4)\hbar^2$이다.

- **Triplet** (spin "parallel"): total spin 1, $S^2 = 2\hbar^2$
- **Singlet**: total spin 0, $S^2 = 0$

따라서

$$
\boxed{\ E_{hf}^1 = \frac{4g_p\hbar^4}{3m_p m_e^2c^2a^4}
\begin{cases}
+1/4, & \text{(triplet)} \\
-3/4, & \text{(singlet)}
\end{cases}\ }
\tag{8}
$$

## 6. 21-centimeter line (Figure 7.12)

Spin-spin coupling은 ground state의 spin degeneracy를 깨서 **triplet은 올리고 singlet은 내린다.** 에너지 간격은

$$
\Delta E = \frac{4g_p\hbar^4}{3m_p m_e^2c^2a^4} = 5.88\times10^{-6}\ \text{eV}
\tag{9}
$$

Triplet에서 singlet으로 전이할 때 방출되는 photon의 frequency는

$$
\nu = \frac{\Delta E}{h} = 1420\ \text{MHz}
\tag{10}
$$

이고, 대응하는 파장은 $c/\nu = 21\ \text{cm}$로 microwave 영역이다. 이 유명한 **21-centimeter line**은 우주에서 가장 널리 퍼져 있는 복사 중 하나다.

## 7. 관련 연습문제

- **Problem 7.31**: 상수 벡터 $\mathbf{a}$, $\mathbf{b}$에 대한 angular integral 공식을 보이고, 이를 이용해 $\ell = 0$ state에서 (4)의 첫 번째 기댓값이 0임을 증명.
- **Problem 7.32**: 수소 공식을 적절히 수정해 (a) muonic hydrogen, (b) positronium, (c) muonium의 ground state hyperfine splitting 구하기. "Bohr radius"에는 reduced mass를, gyromagnetic ratio에는 실제 질량을 쓸 것. Positronium은 pair annihilation 때문에 실험값과 크게 다르다.
- Further Problems 중 관련: **7.47** (deuterium의 hyperfine transition 파장, deuteron은 spin 1, $g_d = 1.71$).

# 궁금한 내용



# AI의 보충 설명

**1. Spin-orbit와 spin-spin은 같은 트릭으로 풀린다**

| | Spin-orbit (7.3.2) | Spin-spin (7.5) |
| --- | --- | --- |
| 결합하는 두 angular momentum | $\mathbf{L},\ \mathbf{S}$ | $\mathbf{S}_e,\ \mathbf{S}_p$ |
| 보존되는 합 | $\mathbf{J} = \mathbf{L} + \mathbf{S}$ | $\mathbf{S} = \mathbf{S}_e + \mathbf{S}_p$ |
| Dot product 트릭 | $\mathbf{L}\cdot\mathbf{S} = \frac12(J^2 - L^2 - S^2)$ | $\mathbf{S}_p\cdot\mathbf{S}_e = \frac12(S^2 - S_e^2 - S_p^2)$ |
| Good quantum number | $j$ | total spin 1 (triplet) / 0 (singlet) |

두 경우 모두 "개별 angular momentum은 보존되지 않지만 합은 보존된다 → 합의 eigenstate가 good state → dot product를 제곱의 차로 바꾼다"는 같은 구조다. (원자 물리에서는 보통 nuclear spin을 $\mathbf{I}$, 전체를 $\mathbf{F} = \mathbf{I} + \mathbf{J}$로 쓰고, 수소 ground state의 두 준위를 $F = 1$, $F = 0$이라 부른다.)

**2. Delta function 항 (Fermi contact interaction)이 전부다**

Ground state에서 살아남는 것은 (3)의 delta function 항뿐인데, 이것을 **Fermi contact interaction**이라 부른다. 전자가 양성자 **위치에** 있을 확률 밀도 $|\psi(0)|^2$에 비례하므로, $\psi(0) \neq 0$인 $\ell = 0$ state에서만 기여한다. $\ell \neq 0$ state에서는 $\psi(0) = 0$이라 contact 항은 사라지고 대신 (3)의 첫 번째 (dipole–dipole) 항이 기여한다.

**3. 크기 감각: 왜 Table 7.1에 $m/m_p$가 붙나**

(1)에서 양성자의 magnetic moment는 분모에 $m_p$가 있어서 전자보다 $m_e/m_p \approx 1/1836$배 정도 작다. 그래서 hyperfine은 fine structure ($\alpha^4 mc^2$)에 $m/m_p$가 곱해진 크기가 되고, (9)의 $\Delta E \sim 10^{-6}$ eV는 fine structure보다 두세 자릿수 작다.

**4. 21 cm line이 천문학에서 중요한 이유**

Triplet → singlet 전이는 magnetic dipole transition이라 매우 느려서, 원자 하나의 수명이 약 $10^7$년에 이른다. 그런데도 은하에 중성 수소가 워낙 많아서 신호가 강하게 관측된다. 파장이 길어 성간 먼지를 잘 통과하고, Doppler shift로 수소 구름의 속도를 잴 수 있어서 **은하의 나선 구조와 rotation curve** (dark matter의 증거 중 하나)를 그리는 데 쓰였다.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[양자 필기 - Relativistic Correction to Hydrogen]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.5 (Figure 7.12), footnotes 29–30, Problems 7.31–7.32, 7.47

# 다음 강의
- Griffiths Chapter 7 Further Problems / Chapter 8 The Variational Principle

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
