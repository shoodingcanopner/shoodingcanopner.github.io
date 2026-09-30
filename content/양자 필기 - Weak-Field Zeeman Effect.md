---
title: 양자 필기 - Weak-Field Zeeman Effect
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
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]] (Griffiths 7.3.2)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $\mathbf{B}_{\text{ext}}$ | 외부 uniform magnetic field ($z$ 방향으로 둠) |
| $B_{\text{int}}$ | Spin-orbit coupling을 만드는 internal field (7.3.2의 $\mathbf{B}$) |
| $\boldsymbol{\mu}_l,\ \boldsymbol{\mu}_s$ | Orbital, spin magnetic dipole moment |
| $H'_Z$ | Zeeman perturbation |
| $H'_{fs}$ | Fine structure perturbation ($H'_r + H'_{so}$) |
| $\ket{n\,\ell\,j\,m_j}$ | Fine structure의 good states |
| $E_{nj}$ | Fine structure를 포함한 에너지 (7.69) |
| $g_J$ | Landé g-factor |
| $\mu_B$ | Bohr magneton, $e\hbar/2m$ |

# 필기 내용

## 1. 7.4 도입: Zeeman effect

원자를 uniform external magnetic field $\mathbf{B}_{\text{ext}}$ 안에 두면 에너지 준위가 이동한다. 이것이 **Zeeman effect**다. 전자 하나에 대한 perturbation은

$$
H'_Z = -\left(\boldsymbol{\mu}_l + \boldsymbol{\mu}_s\right)\cdot\mathbf{B}_{\text{ext}}
\tag{1}
$$

Spin magnetic moment는 7.3.2에서 본 대로 g-factor 2를 가지고, orbital magnetic moment는 **고전값 그대로**다 (footnote 22: extra factor 2는 spin에만 있다).

$$
\boldsymbol{\mu}_s = -\frac{e}{m}\mathbf{S},
\qquad
\boldsymbol{\mu}_l = -\frac{e}{2m}\mathbf{L}
\tag{2}
$$

따라서

$$
\boxed{\ H'_Z = \frac{e}{2m}\left(\mathbf{L} + 2\mathbf{S}\right)\cdot\mathbf{B}_{\text{ext}}\ }
\tag{3}
$$

> [!note] footnote 21
> 이 식은 $B$의 first order까지만 맞다. Hamiltonian의 $B^2$ 항을 무시했고 (exact result는 Problem 4.72), orbital magnetic moment는 사실 canonical이 아닌 **mechanical** angular momentum에 비례한다 (Problem 7.49). 무시한 항들은 $B^2$ order의 보정을 주어 $H'_Z$의 second-order 보정과 비슷한 크기이므로, first order에서는 안전하게 무시할 수 있다.

## 2. 세 가지 regime

Zeeman splitting의 성질은 **external field와 internal field의 상대적 크기**에 결정적으로 의존한다.

| Regime | 조건 | Unperturbed | Perturbation |
| --- | --- | --- | --- |
| Weak field (이 노트) | $B_{\text{ext}} \ll B_{\text{int}}$ | $H_{\text{Bohr}} + H'_{fs}$ | $H'_Z$ |
| Strong field | $B_{\text{ext}} \gg B_{\text{int}}$ | $H_{\text{Bohr}} + H'_Z$ | $H'_{fs}$ |
| Intermediate | 비슷함 | $H_{\text{Bohr}}$ | $H'_Z + H'_{fs}$ 둘 다, "by hand" 대각화 |

## 3. Weak field: 어떤 state가 good state인가

Fine structure가 지배적이므로 $H_{\text{Bohr}} + H'_{fs}$를 "unperturbed" Hamiltonian으로, $H'_Z$를 perturbation으로 본다. "Unperturbed" eigenstate는 fine structure에 맞는 $\ket{n\,\ell\,j\,m_j}$이고 "unperturbed" energy는 $E_{nj}$다.

이 state들은 **여전히 degenerate**하다. $E_{nj}$가 $m_j$와 (같은 $j$ 안에서) $\ell$에 의존하지 않기 때문이다. 다행히 $\ket{n\,\ell\,j\,m_j}$는 $H'_Z$에 대한 **good states**다.

- $\mathbf{B}_{\text{ext}}$를 $z$축으로 두면 $H'_Z$는 $J_z$와 commute한다.
- $H'_Z$는 $L^2$와도 commute한다.
- 각 degenerate state는 $m_j$와 $\ell$ 두 quantum number로 **유일하게** 구별된다.

따라서 $\mathsf{W}$ matrix를 쓸 필요가 없다 (이미 diagonal).

## 4. First-order Zeeman correction

$$
E_Z^1 = \bra{n\,\ell\,j\,m_j}H'_Z\ket{n\,\ell\,j\,m_j} = \frac{e}{2m}B_{\text{ext}}\,\hat{k}\cdot\langle\mathbf{L} + 2\mathbf{S}\rangle
\tag{4}
$$

$\mathbf{L} + 2\mathbf{S} = \mathbf{J} + \mathbf{S}$인데, 문제는 $\langle\mathbf{S}\rangle$를 바로 알 수 없다는 것이다.

**Vector model (Figure 7.9)**: Total angular momentum $\mathbf{J} = \mathbf{L} + \mathbf{S}$는 일정하고, $\mathbf{L}$과 $\mathbf{S}$는 이 고정된 벡터 주위를 빠르게 precess한다. 따라서 $\mathbf{S}$의 (시간) 평균값은 $\mathbf{J}$ 방향으로의 projection이다.

$$
\mathbf{S}_{\text{ave}} = \frac{(\mathbf{S}\cdot\mathbf{J})}{J^2}\mathbf{J}
\tag{5}
$$

$\mathbf{L} = \mathbf{J} - \mathbf{S}$이므로 $L^2 = J^2 + S^2 - 2\mathbf{J}\cdot\mathbf{S}$이고

$$
\mathbf{S}\cdot\mathbf{J} = \frac12\left(J^2 + S^2 - L^2\right) = \frac{\hbar^2}{2}\left[j(j+1) + s(s+1) - \ell(\ell+1)\right]
\tag{6}
$$

따라서

$$
\langle\mathbf{L} + 2\mathbf{S}\rangle = \left\langle\left(1 + \frac{\mathbf{S}\cdot\mathbf{J}}{J^2}\right)\mathbf{J}\right\rangle = \left[1 + \frac{j(j+1) - \ell(\ell+1) + s(s+1)}{2j(j+1)}\right]\langle\mathbf{J}\rangle
\tag{7}
$$

대괄호 안의 항이 **Landé g-factor** $g_J$다.

$$
g_J = 1 + \frac{j(j+1) - \ell(\ell+1) + s(s+1)}{2j(j+1)}
\tag{8}
$$

전자 하나의 경우 $j = \ell \pm 1/2$이고 (footnote 24)

$$
g_J = \frac{2j+1}{2\ell+1}
\tag{9}
$$

> [!important] (5)는 근사가 아니다 (footnote 23)
> (7)은 $\mathbf{S}$를 시간 평균으로 바꿔서 유도했지만, 결과는 **exact**하다. $\mathbf{L} + 2\mathbf{S}$와 $\mathbf{J}$는 둘 다 **vector operator**이고 state가 angular momentum eigenstate이므로, **Wigner–Eckart theorem**에 의해 matrix element가 비례한다 (Problem 7.25).
> $$
> \bra{n\,\ell\,j\,m_j}\mathbf{L} + 2\mathbf{S}\ket{n\,\ell\,j\,m_j'} = g_J\bra{n\,\ell\,j\,m_j}\mathbf{J}\ket{n\,\ell\,j\,m_j'}
> $$
> 비례 상수 $g_J$는 reduced matrix element의 비다.

## 5. 결과

$\hat{k}\cdot\langle\mathbf{J}\rangle = \hbar m_j$이므로

$$
\boxed{\ E_Z^1 = \mu_B\,g_J\,B_{\text{ext}}\,m_j\ }
\tag{10}
$$

여기서

$$
\mu_B \equiv \frac{e\hbar}{2m} = 5.788\times10^{-5}\ \text{eV/T}
\tag{11}
$$

가 **Bohr magneton**이다.

**Degeneracy 해석**: Quantum number $m$의 degeneracy는 **rotational invariance**의 결과였다 (Example 6.3, total angular momentum에도 같은 논리, footnote 25). $H'_Z$는 공간의 특정 방향 ($\mathbf{B}$ 방향)을 골라서 rotational symmetry를 깨고, **$m$ degeneracy를 푼다.**

**Total energy**는 fine structure (7.69)와 Zeeman (10)의 합이다.

## 6. 예: Ground state (Figure 7.10)

$n = 1$, $\ell = 0$, $j = 1/2$이므로 $g_J = 2$. Ground state는 두 준위로 갈라진다.

$$
-13.6\ \text{eV}\left(1 + \frac{\alpha^2}{4}\right) \pm \mu_B B_{\text{ext}}
\tag{12}
$$

$+$는 $m_j = 1/2$, $-$는 $m_j = -1/2$. $\mu_B B_{\text{ext}}$에 대해 그리면 기울기 $\pm1$인 두 직선이 된다.

## 7. 관련 연습문제

- **Problem 7.23**: (7.60)으로 수소의 internal field를 추정하고, "strong"과 "weak" Zeeman field를 정량적으로 구분.
- **Problem 7.24**: $n = 2$의 여덟 state $\ket{2\,\ell\,j\,m_j}$의 weak-field Zeeman energy를 구하고 Figure 7.10 같은 그림 그리기 (각 선의 기울기 표시).
- **Problem 7.25**: Wigner–Eckart theorem으로 두 vector operator의 matrix element가 비례함을 증명 (footnote 23의 근거).

# 궁금한 내용



# AI의 보충 설명

**1. "Weak"의 물리적 의미: 두 precession의 속도 비교**

Figure 7.9의 그림을 시간 척도로 읽으면 이해가 쉽다. Spin-orbit coupling 때문에 $\mathbf{L}$과 $\mathbf{S}$가 $\mathbf{J}$ 주위를 도는 속도는 fine structure splitting에 비례하고, 외부 field 때문에 $\mathbf{J}$가 $\mathbf{B}_{\text{ext}}$ 주위를 도는 속도는 $\mu_B B_{\text{ext}}$에 비례한다. **Weak field**는 앞의 것이 훨씬 빠른 경우라서, $\mathbf{B}_{\text{ext}}$ 입장에서는 $\mathbf{S}$의 $\mathbf{J}$ 방향 평균만 보인다. 그래서 (5)의 projection이 정당화된다. Strong field에서는 반대로 $\mathbf{L}$과 $\mathbf{S}$가 각각 $\mathbf{B}_{\text{ext}}$ 주위를 독립적으로 돌게 되어 coupling이 끊어진다 ([[양자 필기 - Strong-Field Zeeman Effect]]).

**2. Landé g-factor의 두 극한**

$\ell = 0$이면 $j = s$라서 (8)에서 $g_J = 2$로 **순수 spin**의 g-factor가 된다. $s = 0$이라면 $j = \ell$이 되어 $g_J = 1$로 **순수 orbital**의 g-factor가 된다. $g_J$는 $\mathbf{J}$ 안에 spin과 orbital이 얼마나 섞였는지에 따라 1과 2 사이를 보간하는 값이다.

**3. Projection theorem (1학기 Wigner–Eckart의 응용)**

Footnote 23의 내용을 일반적으로 쓰면, 임의의 vector operator $\mathbf{V}$에 대해 같은 $j$ 안에서

$$
\bra{j\,m'}\mathbf{V}\ket{j\,m} = \frac{\bra{j\,m}\mathbf{J}\cdot\mathbf{V}\ket{j\,m}}{\hbar^2 j(j+1)}\bra{j\,m'}\mathbf{J}\ket{j\,m}
\tag{A1}
$$

이 성립한다 (**projection theorem**). $\mathbf{V} = \mathbf{S}$로 두면 (5)가 "시간 평균"이 아니라 matrix element 수준에서 정확한 식이 된다. 1학기 노트 [[QM lecture note - Wigner-Eckart Theorem Proof and Applications]]와 연결된다.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]
- [[QM lecture note - Wigner-Eckart Theorem Proof and Applications]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.4 도입부, Section 7.4.1 (Figures 7.9–7.10), footnotes 21–25, Problems 7.23–7.25

# 다음 강의
- [[양자 필기 - Strong-Field Zeeman Effect]] (Griffiths 7.4.2)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
