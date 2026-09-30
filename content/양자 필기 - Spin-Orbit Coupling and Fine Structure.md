---
title: 양자 필기 - Spin-Orbit Coupling and Fine Structure
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
- [[양자 필기 - Relativistic Correction to Hydrogen]] (Griffiths 7.3 도입, 7.3.1)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $\mathbf{B}$ | 전자의 rest frame에서 양성자가 만드는 magnetic field |
| $\boldsymbol{\mu},\ \boldsymbol{\mu}_e$ | Magnetic dipole moment, 전자의 magnetic dipole moment |
| $\mathbf{L},\ \mathbf{S},\ \mathbf{J}$ | Orbital, spin, total angular momentum ($\mathbf{J} = \mathbf{L} + \mathbf{S}$) |
| $T$ | 궤도 주기 (이 노트에서는 kinetic energy가 아님) |
| $g$ | g-factor, $\boldsymbol{\mu} = g\,(q/2m)\,\mathbf{S}$ |
| $H'_{so}$ | Spin-orbit interaction |
| $j,\ m_j$ | Total angular momentum quantum number와 그 $z$ 성분 |
| $E_{so}^1,\ E_{fs}^1$ | Spin-orbit, fine structure의 first-order energy |

# 필기 내용

## 1. 물리적 그림

![[Pasted image 20260930162511.png]]

전자 입장에서 보면 **양성자가 전자 주위를 돈다** (Figure 7.6). 궤도 운동하는 양전하는 전자의 rest frame에서 magnetic field $\mathbf{B}$를 만들고, 이 field가 spin하는 전자의 magnetic moment $\boldsymbol{\mu}$에 torque를 가해 field 방향으로 정렬시키려 한다. Hamiltonian은

$$
H = -\boldsymbol{\mu}\cdot\mathbf{B}
\tag{1}
$$
 계산해야할 것은 두 가지다: 양성자의 공전이 만드는는 $\mathbf{B}$와 전자의 $\boldsymbol{\mu}$.

## 2. 양성자가 만드는 magnetic field (양자역학 없음, 순수 고전 전기역학)

양성자를 (전자 입장에서) 연속적인 current loop로 보면, Biot–Savart law에서 loop 중심의 field는

$$
B = \frac{\mu_0 I}{2r},
\qquad
I = \frac{e}{T}
\tag{2}
$$

한편 핵의 rest frame에서 전자의 orbital angular momentum은

$$
L = rmv = \frac{2\pi mr^2}{T}
\tag{3}
$$
전자의 rest frame에서 핵의 각운동량 벡터의 방향은 $L$의 방향과 같다. 

따라서 $\mathbf{B}$와 $\mathbf{L}$은 같은 방향(Figure 7.6에서 위쪽)을 향하므로, $1/T = L/(2\pi mr^2)$를 넣고 $c = 1/\sqrt{\epsilon_0\mu_0}$로 $\mu_0$를 없애면

$$
\mathbf{B} = \frac{1}{4\pi\epsilon_0}\frac{e}{mc^2r^3}\mathbf{L}
\tag{4}
$$

## 3. 전자의 magnetic dipole moment
![[Pasted image 20260930163251.png]]
**고전 계산**: 전자의 스핀을 고전적으로 해석하면 전하를 띤 입자가 공간에서 회전하는 것이다. 
동그란 공이 돌아가는데, 공 표면에 전하가 고르게 분포해 있다고 가정하자. 이 공의 magnetic dipole moment를 구하자. 

Magnetic dipole moment는 current × area, angular momentum(여기선 스핀 $S$)은 moment of inertia × angular velocity이므로

$$
\mu = \frac{q\pi r^2}{T},
\qquad
S = \frac{2\pi mr^2}{T}
\tag{5}
$$

**Gyromagnetic ratio**는 $\mu/S = q/2m$으로 $r$, $T$와 무관하다. 구처럼 더 복잡한 figure of revolution도 고리로 잘라 더하면, 전하와 질량이 같은 방식으로 분포하는 한 같은 비율을 가진다.

$$
\boldsymbol{\mu} = \left(\frac{q}{2m}\right)\mathbf{S}
\tag{6}
$$

**실제 전자**의 magnetic moment는 고전값의 **두 배**다.

$$
\boldsymbol{\mu}_e = -\frac{e}{m}\mathbf{S}
\tag{7}
$$

이 "extra" factor 2는 Dirac의 relativistic theory로 설명된다.

> [!note] g-factor (footnote 14) → 으악 대학원 양자 2 시험 범위야
> 고전 기대값과의 차이를 **g-factor**로 나타낸다: $\boldsymbol{\mu} = g\,(q/2m)\,\mathbf{S}$. Dirac theory에서 전자의 $g$는 정확히 2이지만, **quantum electrodynamics**는 작은 보정을 준다: $g_e = 2 + \alpha/\pi + \cdots = 2.002\ldots$ 이것이 **anomalous magnetic moment**이고, 그 계산과 측정의 일치는 20세기 물리학의 가장 큰 성취 중 하나다.

## 4. 합치기, 그리고 Thomas precession

(1), (4), (7)을 합치면

$$
H = \left(\frac{e^2}{4\pi\epsilon_0}\right)\frac{1}{m^2c^2r^3}\,\mathbf{S}\cdot\mathbf{L}
\tag{8}
$$

그런데 이 계산에는 **심각한 fraud**가 있다. 전자의 rest frame은 궤도 운동하며 **가속하는 non-inertial frame**이다. 이를 보정하는 kinematic correction이 **Thomas precession**이고, 여기서는 factor $1/2$을 준다. 이게 왜 $1/2$인지는 내용이 양자역학의 범위를 넘어서서 생략. 

$$
\boxed{\ H'_{so} = \left(\frac{e^2}{8\pi\epsilon_0}\right)\frac{1}{m^2c^2r^3}\,\mathbf{S}\cdot\mathbf{L}\ }
\tag{9}
$$

이것이 **spin-orbit interaction**이다. 전자의 modified gyromagnetic ratio(×2)와 Thomas precession factor(×1/2)가 **우연히 정확히 상쇄**되므로, 결과는 순진한 고전 모델에서 기대하는 것과 같다. 물리적으로는 전자의 순간적인 rest frame에서 양성자의 magnetic field가 전자의 magnetic dipole moment에 가하는 torque 때문이다.

## 5. Quantum mechanics: 이번엔 good states가 바뀐다

Spin-orbit coupling이 있으면 해밀토니안에 $\mathbf{S}\cdot\mathbf{L}$이 있기 때문에
Hamiltonian이 더 이상 $\mathbf{L}$, $\mathbf{S}$와 **commute하지 않는다**. 즉 spin과 orbital angular momentum이 따로 보존되지 않는다 (Problem 7.19, HW2에서 직접 확인). 
그러나 $H'_{so}$는 $L^2$, $S^2$, 그리고 **total angular momentum**

$$
\mathbf{J} \equiv \mathbf{L} + \mathbf{S}
\tag{10}
$$

와는 commute하므로, 이 양들은 보존된다. 바꿔 말하면

> [!important] Good states
> $L_z$, $S_z$의 eigenstate는 good state가 **아니다**. $L^2$, $S^2$, $J^2$, $J_z$의 eigenstate가 good state다.

$J^2 = (\mathbf{L}+\mathbf{S})\cdot(\mathbf{L}+\mathbf{S}) = L^2 + S^2 + 2\mathbf{L}\cdot\mathbf{S}$이므로

$$
\mathbf{L}\cdot\mathbf{S} = \frac12\left(J^2 - L^2 - S^2\right)
\tag{11}
$$

따라서 $\mathbf{L}\cdot\mathbf{S}$의 eigenvalue는

$$
\frac{\hbar^2}{2}\left[j(j+1) - \ell(\ell+1) - s(s+1)\right]
\tag{12}
$$

이고, 전자는 $s = 1/2$이다. 한편 $1/r^3$의 기댓값은 (Problem 7.43)

$$
\left\langle\frac{1}{r^3}\right\rangle = \frac{1}{\ell(\ell+1/2)(\ell+1)\,n^3a^3}
\tag{13}
$$

> [!note] footnote 17
> Problem 7.43은 $\psi_{n\ell m}$, 즉 $L_z$ eigenstate로 기댓값을 계산하지만, 지금 필요한 것은 $J_z$ eigenstate다. $J_z$ eigenstate는 $m = m_j \pm 1/2$인 state들의 linear combination인데, $\langle r^s\rangle$가 $m$과 무관하므로 상관없다.

## 6. Spin-orbit energy

$$
E_{so}^1 = \langle H'_{so}\rangle = \frac{e^2}{8\pi\epsilon_0}\frac{1}{m^2c^2}\frac{(\hbar^2/2)\left[j(j+1) - \ell(\ell+1) - 3/4\right]}{\ell(\ell+1/2)(\ell+1)\,n^3a^3}
\tag{14}
$$

$E_n$으로 표현하면

$$
\boxed{\ E_{so}^1 = \frac{(E_n)^2}{mc^2}\left\{\frac{n\left[j(j+1) - \ell(\ell+1) - 3/4\right]}{\ell(\ell+1/2)(\ell+1)}\right\}\ }
\tag{15}
$$

> [!warning] $\ell = 0$은? (footnote 18)
> $\ell = 0$이면 분모가 0이지만, 이때 $j = s = 1/2$이라 **분자도 0**이어서 (15)는 indeterminate하다. 물리적으로 $\ell = 0$이면 spin-orbit coupling이 없어야 한다. 어쨌든 spin-orbit을 relativistic correction과 **더하면** 문제가 사라지고, 합 (16)은 **모든 $\ell$에서 맞다.** 불안하다면, (nonrelativistic) Schrödinger equation 대신 (relativistic) Dirac equation으로 exact solution을 구하면 같은 결과가 나온다는 사실에서 위안을 얻자 (Problem 7.22).

## 7. Fine structure formula

완전히 다른 물리적 mechanism인데도 relativistic correction과 spin-orbit coupling이 **같은 order** $(E_n^2/mc^2)$라는 것은 놀랍다. 둘을 더하면 (Problem 7.20)

$$
\boxed{\ E_{fs}^1 = \frac{(E_n)^2}{2mc^2}\left(3 - \frac{4n}{j + 1/2}\right)\ }
\tag{16}
$$

**$\ell$이 사라지고 $j$만 남았다.** Bohr formula와 결합하면 fine structure를 포함한 수소 에너지 준위의 grand result:

$$
\boxed{\ E_{nj} = -\frac{13.6\,\text{eV}}{n^2}\left[1 + \frac{\alpha^2}{n^2}\left(\frac{n}{j+1/2} - \frac34\right)\right]\ }
\tag{17}
$$

## 8. 결과의 해석 (Figure 7.8)
![[Pasted image 20260930164356.png]]
- Fine structure는 **$\ell$ degeneracy를 깬다.** 주어진 $n$에서 서로 다른 $\ell$이 모두 같은 에너지를 가지지는 않는다.
- 그러나 **$j$ degeneracy는 유지한다.** 같은 $n$, 같은 $j$면 $\ell$이 달라도 에너지가 같다.
- Figure 7.8: 각 $n$ 준위가 가능한 $j$ 값의 개수만큼 갈라진다. $n=1$은 $j = 1/2$ 하나, $n=2$는 $j = 1/2, 3/2$, $n=3$은 $j = 1/2, 3/2, 5/2$, $n=4$는 $j = 1/2, \dots, 7/2$.
- Orbital과 spin의 $z$ 성분 $m_\ell$, $m_s$는 더 이상 good quantum number가 **아니다**. Stationary state는 이 값들이 서로 다른 state들의 linear combination이다. **Good quantum numbers는 $n,\ \ell,\ s,\ j,\ m_j$**다.
- $\ket{j\,m_j}$ (주어진 $\ell$, $s$)를 $\ket{\ell\,s\,m_\ell\,m_s}$의 linear combination으로 쓰려면 **Clebsch–Gordan coefficient**를 쓴다 (footnote 19).

## 9. 관련 연습문제

- **Problem 7.19**: Commutator 계산: $[\mathbf{L}\cdot\mathbf{S}, \mathbf{L}]$, $[\mathbf{L}\cdot\mathbf{S}, \mathbf{S}]$, $[\mathbf{L}\cdot\mathbf{S}, \mathbf{J}]$, $[\mathbf{L}\cdot\mathbf{S}, L^2]$, $[\mathbf{L}\cdot\mathbf{S}, S^2]$, $[\mathbf{L}\cdot\mathbf{S}, J^2]$.
- **Problem 7.20**: (15)와 relativistic correction으로부터 (16) 유도. $j = \ell \pm 1/2$ 두 경우를 따로 계산하면 같은 결과가 나온다.
- **Problem 7.21**: Red Balmer line ($n = 3 \to 2$)이 fine structure로 몇 개의 선으로 갈라지는지, 인접한 선 사이의 frequency 간격은 얼마인지.
- **Problem 7.22**: Dirac equation의 exact fine structure formula를 $\alpha^4$까지 전개해 (17)을 재현.

# 궁금한 내용



# AI의 보충 설명

**1. 왜 uncoupled basis $\ket{\ell\,m_\ell}\ket{s\,m_s}$에서는 $H'_{so}$가 diagonal이 아닌가**

$\mathbf{L}\cdot\mathbf{S}$를 ladder operator로 풀어 쓰면

$$
\mathbf{L}\cdot\mathbf{S} = L_zS_z + \frac12\left(L_+S_- + L_-S_+\right)
\tag{A1}
$$

둘째 항의 $L_+S_-$는 $\ket{m_\ell}\ket{\uparrow}$를 $\ket{m_\ell + 1}\ket{\downarrow}$로 바꾼다. 즉 $m_\ell$과 $m_s$를 **각각은 바꾸지만 합 $m_j = m_\ell + m_s$는 보존**한다. 그래서 uncoupled basis에서 $\mathsf{W}$는 off-diagonal element를 가지고, 반대로 (11) 덕분에 coupled basis $\ket{\ell\,s\,j\,m_j}$에서는 $L^2$, $S^2$, $J^2$가 모두 숫자가 되어 행렬 계산 없이 끝난다. [[양자 필기 - Good States in Degenerate Perturbation Theory]]의 표에서 "spin-orbit coupling → $L^2, S^2, J^2, J_z$"가 이 뜻이다.

**2. $n=2$ 준위로 보는 fine structure의 모양**

Spectroscopic notation $n\ell_j$ ($\ell = 0,1,2,\ldots \to S, P, D, \ldots$)로 쓰면, $n=2$에는 $2S_{1/2}$, $2P_{1/2}$, $2P_{3/2}$가 있다. (17)은 $j$에만 의존하므로 **$2S_{1/2}$와 $2P_{1/2}$는 정확히 같은 에너지**로 남고 $2P_{3/2}$만 위에 있다. 이 남은 degeneracy를 깨는 것이 다음 계층인 **Lamb shift** ($\alpha^5 mc^2$)이고, 이 둘의 차이를 측정한 Lamb–Retherford 실험이 QED 발전의 출발점이 되었다. 또 $n/(j+1/2) \ge 1 > 3/4$이므로 fine structure는 **모든 준위를 Bohr 값보다 낮춘다.**

**3. $\ell = 0$ 문제와 Darwin term**

Footnote 18의 불편함은 Dirac equation을 $1/c^2$까지 전개하면 해결된다. 그러면 relativistic correction, spin-orbit 외에 세 번째 항인 **Darwin term**이 나온다.

$$
H'_D = \frac{\pi\hbar^2}{2m^2c^2}\left(\frac{e^2}{4\pi\epsilon_0}\right)\delta^3(\mathbf{r})
\tag{A2}
$$

Delta function이라 $\psi(0) \neq 0$인 $\ell = 0$ state에만 기여하는데, 그 값이 마침 spin-orbit 식 (15)에 $\ell = 0$, $j = 1/2$를 형식적으로 넣었을 때의 값과 같다. 그래서 Griffiths처럼 "$\ell = 0$에서도 (16)이 맞다"고 할 수 있는 것이다. 자세한 내용은 [[Sakurai 5.17 - Darwin Term and Fine Structure]] 참고.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Relativistic Correction to Hydrogen]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]
- [[QM lecture note - Two-Component Spinor and Rotation Operator]]
- [[Sakurai 5.17 - Darwin Term and Fine Structure]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.3.2 (Figures 7.6–7.8), footnotes 14–19, Problems 7.19–7.22

# 다음 강의
- [[양자 필기 - Weak-Field Zeeman Effect]] (Griffiths 7.4 도입, 7.4.1)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
