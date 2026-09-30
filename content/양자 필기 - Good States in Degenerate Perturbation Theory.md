---
title: 양자 필기 - Good States in Degenerate Perturbation Theory
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
- [[양자 필기 - Two-Fold Degenerate Perturbation Theory]] (Griffiths 7.2.1)

# 오늘의 핵심

> [!important] Theorem
> $A$가 $H^0$, $H'$와 **모두 commute하는 hermitian operator**라고 하자. 만약 degenerate eigenfunction $\psi_a^0,\ \psi_b^0$가 $A$의 eigenfunction이면서 **서로 다른 eigenvalue**를 가지면,
> $$
> A\psi_a^0 = \mu\psi_a^0,
> \qquad
> A\psi_b^0 = \nu\psi_b^0,
> \qquad
> \mu \neq \nu
> $$
> $\psi_a^0,\ \psi_b^0$가 perturbation theory에 쓸 good states다.

위의 조건을 만족하는 $A$는 symmeytry를 이용해서 찾을 수 있다. 
$H^0$와 $H'$가 공통으로 지키는 symmetry가 무엇인지 여러개 찾아보자. 

위 theorem을 이후 강의 내용에서 계속 반복해서 쓸 것이다. 

| Perturbation                           | 쓰는 operator $A$         | Good quantum numbers      |
| -------------------------------------- | ----------------------- | ------------------------- |
| Relativistic correction $H'_r$         | $L^2,\ L_z$             | $n,\ \ell,\ m_\ell$       |
| Spin-orbit coupling $H'_{so}$          | $L^2,\ S^2,\ J^2,\ J_z$ | $n,\ \ell,\ s,\ j,\ m_j$  |
| Weak-field Zeeman                      | $L^2,\ J_z$             | $n,\ \ell,\ j,\ m_j$      |
| Strong-field Zeeman의 fine structure 부분 | $L^2,\ J_z$             | $n,\ \ell,\ m_\ell,\ m_s$ |
| Hyperfine (ground state)               | total spin $S^2,\ S_z$  | triplet / singlet         |


# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $A$ | $H^0$, $H'$와 모두 commute하는 hermitian operator |
| $\mu,\ \nu$ | $\psi_a^0,\ \psi_b^0$의 $A$ eigenvalue ($\mu \neq \nu$) |
| $H(\lambda)$ | $H^0 + \lambda H'$ |
| $\psi_\gamma(\lambda),\ \gamma$ | $H(\lambda)$와 $A$의 simultaneous eigenstate와 그 $A$ eigenvalue |
| $R(\pi)$ | 함수를 반시계 방향으로 $\pi$만큼 회전시키는 operator |
| $D$ | $x \leftrightarrow y$를 바꾸는 operator (45° diagonal에 대한 reflection) |

# 필기 내용

## 1. 동기

지난 노트의 결론: $W_{ab} = 0$이면 $\psi_a^0,\ \psi_b^0$가 이미 good state여서 nondegenerate perturbation theory를 그대로 쓸 수 있다. 그렇다면 **good states를 처음부터 추측할 수 있는 방법**이 있으면 좋겠다. 대부분의 경우 **symmetry**가 그 방법을 준다.

## 2. Theorem

> [!important] Theorem
> $A$가 $H^0$, $H'$와 **모두 commute하는 hermitian operator**라고 하자. 만약 degenerate eigenfunction $\psi_a^0,\ \psi_b^0$가 $A$의 eigenfunction이면서 **서로 다른 eigenvalue**를 가지면,
> $$
> A\psi_a^0 = \mu\psi_a^0,
> \qquad
> A\psi_b^0 = \nu\psi_b^0,
> \qquad
> \mu \neq \nu
> $$
> $\psi_a^0,\ \psi_b^0$가 perturbation theory에 쓸 good states다.

## 3. Proof

$H(\lambda) = H^0 + \lambda H'$와 $A$가 commute하므로, 둘의 **simultaneous eigenstate** $\psi_\gamma(\lambda)$가 존재한다.

$$
H(\lambda)\psi_\gamma(\lambda) = E(\lambda)\psi_\gamma(\lambda),
\qquad
A\psi_\gamma(\lambda) = \gamma\,\psi_\gamma(\lambda)
\tag{1}
$$

$A$가 hermitian이므로

$$
\bra{\psi_a^0}A\ket{\psi_\gamma(\lambda)} = \braket{A\psi_a^0|\psi_\gamma(\lambda)}
\tag{2}
$$

좌변은 $\gamma\bra{\psi_a^0}\ket{\psi_\gamma(\lambda)}$, 우변은 $\mu^*\bra{\psi_a^0}\ket{\psi_\gamma(\lambda)}$이고, hermitian operator의 eigenvalue $\mu$는 real이므로

$$
(\gamma - \mu)\bra{\psi_a^0}\ket{\psi_\gamma(\lambda)} = 0
\tag{3}
$$

이 식은 **모든 $\lambda$에서 성립**하므로 $\lambda \to 0$ 극한에서도 성립한다.

$$
\bra{\psi_a^0}\ket{\psi_\gamma(0)} = 0 \quad \text{unless } \gamma = \mu
\tag{4}
$$

$$
\bra{\psi_b^0}\ket{\psi_\gamma(0)} = 0 \quad \text{unless } \gamma = \nu
\tag{5}
$$

Good state는 $\psi_\gamma(0) = \alpha\psi_a^0 + \beta\psi_b^0$ 꼴이다. $\mu \neq \nu$이므로 $\gamma$는 둘 중 하나일 수밖에 없다.

- $\gamma = \mu$이면 (5)에 의해 $\beta = \bra{\psi_b^0}\ket{\psi_\gamma(0)} = 0$ → good state는 $\psi_a^0$
- $\gamma = \nu$이면 같은 논리로 good state는 $\psi_b^0$

Good states를 (degenerate subspace에서 $\mathsf{W}$를 대각화하든, 이 theorem을 쓰든) 찾고 나면, 그것을 unperturbed state로 삼아 ordinary nondegenerate perturbation theory를 적용하면 된다.

## 4. Example 7.4: Example 7.2의 good states를 theorem으로 찾기
저번에 풀었던 아래 예시에 새로운 theorem을 적용해 보자. 
$$
H^0 = \frac{p^2}{2m} + \frac12 m\omega^2\left(x^2 + y^2\right),
\qquad
H' = \epsilon m\omega^2 xy
$$
$H^0$의 eigenstate는 단순히 $x$와 $y$축 각각에 대한 [[QM lecture note - Simple Harmonic Oscillator|1D simple harmonic osillator eigenfunction]]의 곱이었다. 
$$
\psi_a^0 = \psi_0(x)\psi_1(y),
\qquad
\psi_b^0 = \psi_1(x)\psi_0(y)
\tag{5}
$$
$\psi_0$은 even function, $\psi_1$은 odd function이라는 점만 염두해두자. 
![[Pasted image 20260930142658.png]]


$H' = \epsilon m\omega^2 xy$는 $H^0$보다 symmetry가 낮다. $H^0$는 continuous rotational symmetry가 있지만, $H = H^0 + H'$는 **$\pi$의 정수배 회전**에 대해서만 invariant하다.

**시도 1:  $\pi$회전 operator $R(\pi)$.** $(x,y) \to (-x,-y)$로 보내면

$$
R(\pi)\psi_a^0(x,y) = \psi_a^0(-x,-y) = -\psi_a^0(x,y),
\qquad
R(\pi)\psi_b^0(x,y) = -\psi_b^0(x,y)
\tag{6}
$$
$\psi_a^0$, $\psi_b^0$모두 eigenfuction이기는 하지만, 
==둘 다 eigenvalue가 $-1$로 **같아서 쓸모없다.**== Theorem은 distinct eigenvalue를 요구한다.

**시도 2: $D$ ($x \leftrightarrow y$ 교환).** 45° diagonal에 대한 reflection이다. $H^0$와 $H'$ 모두 $x$와 $y$를 바꿔도 그대로이므로 $D$와 commute한다. 그런데

$$
D\psi_a^0(x,y) = \psi_a^0(y,x) = \psi_b^0(x,y),
\qquad
D\psi_b^0(x,y) = \psi_a^0(x,y)
\tag{7}
$$

즉 $\psi_a^0,\ \psi_b^0$는 $D$의 eigenstate가 아니다. 하지만 $D$의 eigenstate가 되는 combination을 만들 수 있다.

$$
\psi_\pm^0 \equiv \pm\psi_a^0 + \psi_b^0
\tag{8}
$$

$$
D\left(\pm\psi_a^0 + \psi_b^0\right) = \pm\psi_b^0 + \psi_a^0 = \pm\left(\pm\psi_a^0 + \psi_b^0\right)
\tag{9}
$$

Eigenvalue가 $\pm1$로 **서로 다르고**, $D$는 $H^0$, $H'$와 commute하므로 이것들이 good states다. Example 7.2, 7.3의 결과와 일치한다.

## 5. Moral

> [!important] Moral
> Degenerate state를 만나면, $H^0$와 $H'$ 모두와 commute하는 hermitian operator $A$를 찾아라. Unperturbed state로 $H^0$와 $A$의 simultaneous eigenfunction (단, **distinct eigenvalue**)을 고르고, **ordinary first-order perturbation theory**를 쓰면 된다. 그런 operator를 못 찾으면 $\mathsf{W}$를 직접 대각화해야 해야지 뭐... 어쩌겠어

대부분의 경우 $A$는 **symmetry**가 알려 준다. [[Symmetry_Conservation_Laws_Three_Step_Proof|Chapter 6에서 본 것처럼]] symmetry는 $H$와 commute하는 operator와 연결되고, 그것이 바로 good states를 찾는 데 필요한 조건이다.

> [!note] Theorem이 $\mathsf{W}$ 대각화보다 더 강력한 이유 (footnote 7)
> $\mathsf{W}$로 good states를 결정하려면 두 eigenvalue $E^1_\pm$가 달라야 한다. 어떤 경우에는 first order에서 같고 second, third, 혹은 더 높은 order에서야 갈라진다. 이때 $\mathsf{W}$는 good states를 알려 주지 못하지만, **theorem은 모든 경우에 good states를 알려 준다.**

## 6. 관련 연습문제

- **Problem 7.9 (d)**: Bead on a ring + dimple 문제에서 theorem의 조건을 만족하는 hermitian operator $A$를 찾고, $H^0$와 $A$의 simultaneous eigenstate가 (c)에서 쓴 good states와 같음을 보이기.

# 궁금한 내용



# AI의 보충 설명

**1. Theorem이 $\mathsf{W}$를 자동으로 대각화하는 이유 (한 줄 증명)**

$A\psi_a^0 = \mu\psi_a^0$, $A\psi_b^0 = \nu\psi_b^0$이고 $[A, H'] = 0$이면

$$
0 = \bra{\psi_a^0}[A, H']\ket{\psi_b^0} = \bra{\psi_a^0}AH' - H'A\ket{\psi_b^0} = (\mu - \nu)\bra{\psi_a^0}H'\ket{\psi_b^0}
\tag{A1}
$$

$\mu \neq \nu$이므로 $W_{ab} = 0$. 
즉 **$A$의 서로 다른 eigenvalue를 가진 state 사이에는 $H'$가 matrix element를 만들지 못한다.** 
지난 노트의 "운 좋은 경우 $W_{ab} = 0$"이 사실 운이 아니라 symmetry의 결과인 것이다. 

그렇다면.... $H^0$와 $H'$가 같은 symmetry를 가진다면, 잘 하면 $\psi^0$을 그대로 good state로 쓸 수 있는 때가 오지 않을까?
이 경우를 잘 활용하는 것이 앞으로 배울 내용, 'fine structure'와 'Zeeman efffect'이다. 

**2. 수소 원자 fine structure와 Zeeman effect에서의 적용 (7.3, 7.4 미리보기)**

앞으로 배울 남은 chapter 7내용은 사실상 이 theorem을 반복 적용하는 과정이다.

| Perturbation | 쓰는 operator $A$ | Good quantum numbers |
| --- | --- | --- |
| Relativistic correction $H'_r$ | $L^2,\ L_z$ | $n,\ \ell,\ m_\ell$ |
| Spin-orbit coupling $H'_{so}$ | $L^2,\ S^2,\ J^2,\ J_z$ | $n,\ \ell,\ s,\ j,\ m_j$ |
| Weak-field Zeeman | $L^2,\ J_z$ | $n,\ \ell,\ j,\ m_j$ |
| Strong-field Zeeman의 fine structure 부분 | $L^2,\ J_z$ | $n,\ \ell,\ m_\ell,\ m_s$ |
| Hyperfine (ground state) | total spin $S^2,\ S_z$ | triplet / singlet |

Operator 하나로 모든 state가 구별되지 않을 때는 여러 개의 commuting operator를 **함께** 써서 eigenvalue 조합이 모두 다르게 만들면 된다. 반대로 commuting operator를 다 써도 구별이 안 되는 state들이 남으면 (예: Stark effect에서 $L_z$만으로는 $m$이 같은 state들을 구별 못 함) 그 부분은 $\mathsf{W}$를 직접 대각화해야 한다.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Two-Fold Degenerate Perturbation Theory]]
- [[QM lecture note - Symmetry, Conservation Laws, and Degeneracy]]
- [[QM lecture note - Discrete Symmetries]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.2.2 (Theorem, Example 7.4, Moral), footnote 7, Problem 7.9

# 다음 강의
- [[양자 필기 - Higher-Order Degeneracy]] (Griffiths 7.2.3)

