---
title: 양자 필기 - Strong-Field Zeeman Effect
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
- [[양자 필기 - Weak-Field Zeeman Effect]] (Griffiths 7.4 도입, 7.4.1)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $\ket{n\,\ell\,m_\ell\,m_s}$ | Uncoupled basis state (strong field의 good states) |
| $H'_Z$ | Zeeman Hamiltonian, 여기서는 unperturbed에 포함 |
| $H'_{fs} = H'_r + H'_{so}$ | Fine structure, 여기서는 perturbation |
| $\mu_B$ | Bohr magneton, $e\hbar/2m$ |
| $E_{nm_\ell m_s}$ | Bohr + Zeeman "unperturbed" energy |
| $E_{fs}^1$ | 이 basis에서의 fine structure first-order correction |

# 필기 내용

## 1. Setup: 역할이 뒤바뀐다

$B_{\text{ext}} \gg B_{\text{int}}$이면 Zeeman effect가 지배적이다. 이 regime을 **Paschen–Back effect**라고도 한다 (footnote 26). 이제 "unperturbed" Hamiltonian은 $H_{\text{Bohr}} + H'_Z$이고 perturbation은 $H'_{fs}$다. $\mathbf{B}_{\text{ext}}$를 $z$축으로 두면

$$
H'_Z = \frac{e}{2m}B_{\text{ext}}\left(L_z + 2S_z\right)
\tag{1}
$$

이것은 $L_z$, $S_z$만 포함하므로 uncoupled basis에서 바로 diagonal이다. "Unperturbed" energy는

$$
\boxed{\ E_{nm_\ell m_s} = -\frac{13.6\ \text{eV}}{n^2} + \mu_B B_{\text{ext}}\left(m_\ell + 2m_s\right)\ }
\tag{2}
$$

## 2. Good states

지금 쓰는 state $\ket{n\,\ell\,m_\ell\,m_s}$는 **degenerate**하다.

- 에너지가 $\ell$에 의존하지 않는다.
- 추가로 **우연한 일치**가 있다. 예: $m_\ell = 3,\ m_s = -1/2$과 $m_\ell = 1,\ m_s = 1/2$은 $m_\ell + 2m_s$가 같아서 에너지가 같다.

다시 운이 좋게도 $\ket{n\,\ell\,m_\ell\,m_s}$가 perturbation $H'_{fs}$에 대한 **good states**다. $H'_{fs}$는 $L^2$, $J_z$와 commute하고, 이 두 operator가 7.2.2 theorem의 $A$ 역할을 한다.

- $L^2$가 $\ell$ degeneracy를 해결한다.
- $J_z$가 $m_\ell + 2m_s = m_j + m_s$의 우연한 일치를 해결한다. ($m_\ell + 2m_s$와 $m_j = m_\ell + m_s$가 둘 다 같으면 $m_s$도 같아서 결국 같은 state다.)

## 3. First-order fine structure correction

$$
E_{fs}^1 = \bra{n\,\ell\,m_\ell\,m_s}\left(H'_r + H'_{so}\right)\ket{n\,\ell\,m_\ell\,m_s}
\tag{3}
$$

**Relativistic 부분**은 spin과 무관하므로 [[양자 필기 - Relativistic Correction to Hydrogen]]의 결과 (7.58)와 같다.

**Spin-orbit 부분** (7.63)에는 $\mathbf{S}\cdot\mathbf{L}$의 기댓값이 필요하다. 이 basis는 $S_z$, $L_z$의 eigenstate이고 orbital과 spin의 product state이므로

$$
\langle\mathbf{S}\cdot\mathbf{L}\rangle = \langle S_x\rangle\langle L_x\rangle + \langle S_y\rangle\langle L_y\rangle + \langle S_z\rangle\langle L_z\rangle = \hbar^2 m_\ell m_s
\tag{4}
$$

$S_z$, $L_z$ eigenstate에서는 $\langle S_x\rangle = \langle S_y\rangle = \langle L_x\rangle = \langle L_y\rangle = 0$이기 때문이다. 이것들을 합치면 (Problem 7.26)

$$
\boxed{\ E_{fs}^1 = \frac{13.6\ \text{eV}}{n^3}\alpha^2\left\{\frac{3}{4n} - \left[\frac{\ell(\ell+1) - m_\ell m_s}{\ell(\ell+1/2)(\ell+1)}\right]\right\}\ }
\tag{5}
$$

> [!warning] $\ell = 0$일 때
> 대괄호 안의 항은 $\ell = 0$에서 indeterminate하다. 올바른 값은 **1**이다 (Problem 7.28).

**Total energy**는 Zeeman 부분 (2)와 fine structure 부분 (5)의 합이다.

## 4. 관련 연습문제

- **Problem 7.26**: (7.84)에서 출발해 (7.58), (7.63), (7.66), (7.85)를 써서 (5) 유도.
- **Problem 7.27**: $n = 2$의 여덟 state $\ket{2\,\ell\,m_\ell\,m_s}$의 strong-field energy를 Bohr, fine structure ($\propto\alpha^2$), Zeeman ($\propto\mu_B B_{\text{ext}}$) 세 항의 합으로 쓰기. Fine structure를 무시하면 서로 다른 준위가 몇 개이고 각각의 degeneracy는?
- **Problem 7.28**: $\ell = 0$이면 weak와 strong field의 good states가 같다. Field 세기와 **무관한** $\ell = 0$ Zeeman effect의 일반 결과를 구하고, (5)의 대괄호를 1로 해석하면 재현됨을 보이기.

# 궁금한 내용



# AI의 보충 설명

**1. Strong field에서는 $\mathbf{L}$과 $\mathbf{S}$의 coupling이 끊어진다**

Weak field에서는 spin-orbit이 $\mathbf{L}$과 $\mathbf{S}$를 묶어 $\mathbf{J}$ 주위로 돌게 했다 (Figure 7.9). Strong field에서는 외부 field에 의한 precession이 훨씬 빨라서 $\mathbf{L}$과 $\mathbf{S}$가 **각각 $\mathbf{B}_{\text{ext}}$ 주위를 독립적으로** 돈다. 그래서 $J^2$는 더 이상 good quantum number가 아니고, 대신 $m_\ell$과 $m_s$가 각각 good quantum number가 된다. Good quantum number가 $(n, \ell, j, m_j)$에서 $(n, \ell, m_\ell, m_s)$로 바뀌는 것이 두 regime의 핵심 차이다.

**2. 식 (4)에서 버린 항들은 왜 무시해도 되나**

$\mathbf{S}\cdot\mathbf{L} = L_zS_z + \frac12\left(L_+S_- + L_-S_+\right)$에서 ladder operator 항은 $m_\ell + m_s$를 보존하지만 $m_\ell + 2m_s$를 **바꾼다**. 즉 (2)에서 에너지 차이가 $\mu_B B_{\text{ext}}$ 정도인 state들 사이를 연결한다. 그래서 이 항들은 second order에서야 기여하고, 크기는 대략 $(\text{fine structure})^2/(\mu_B B_{\text{ext}})$ 정도로 strong field에서 작다. First order에서는 diagonal element만 남으니 (4)의 $\hbar^2 m_\ell m_s$가 전부다. Field가 줄어들어 이 항이 무시할 수 없게 되는 영역이 바로 intermediate field다.

**3. $\ell = 0$은 특별하다**

$\ell = 0$이면 $\mathbf{L} = 0$이라 spin-orbit coupling이 없고, $j = s$, $m_j = m_s$여서 weak와 strong의 good states가 같다. 그래서 $\ell = 0$ state의 Zeeman shift는 field 세기와 무관하게 하나의 식으로 쓸 수 있다 (Problem 7.28). Intermediate-field의 $n = 2$ 표에서 $\ell = 0$ state 두 개가 처음부터 $1\times1$ block인 것도 같은 이유다.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Weak-Field Zeeman Effect]]
- [[양자 필기 - Relativistic Correction to Hydrogen]]
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.4.2, footnote 26, Problems 7.26–7.28

# 다음 강의
- [[양자 필기 - Intermediate-Field Zeeman Effect]] (Griffiths 7.4.3)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
