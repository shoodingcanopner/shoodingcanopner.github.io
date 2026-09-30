---
title: 양자 필기 - Intermediate-Field Zeeman Effect
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
- [[양자 필기 - Strong-Field Zeeman Effect]] (Griffiths 7.4.2)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $H' = H'_Z + H'_{fs}$ | 두 perturbation을 동등하게 다룬 전체 perturbation |
| $\ket{j\,m_j}$ | Coupled basis (주어진 $\ell$, $n = 2$) |
| $\ket{\ell\,s\,m_\ell\,m_s}$ | Clebsch–Gordan table 표기의 uncoupled state (여기서 $s = 1/2$) |
| $\psi_1,\dots,\psi_8$ | $n = 2$의 여덟 basis state |
| $\gamma$ | Fine structure 에너지 단위, $(\alpha/8)^2\,13.6\ \text{eV}$ |
| $\beta$ | Zeeman 에너지 단위, $\mu_B B_{\text{ext}}$ |
| $\epsilon_1,\dots,\epsilon_8$ | $n = 2$ state의 최종 에너지 |

# 필기 내용

## 1. Setup

Intermediate regime에서는 $H'_Z$와 $H'_{fs}$ 어느 쪽도 지배적이지 않으므로, **둘을 동등하게** Bohr Hamiltonian에 대한 perturbation으로 다룬다.

$$
H' = H'_Z + H'_{fs}
\tag{1}
$$

여기서는 $n = 2$만 다룬다 ($n = 3$은 Problem 7.30). 이번에는 good states가 무엇인지 **자명하지 않아서**, degenerate perturbation theory의 full machinery, 즉 $\mathsf{W}$ matrix 대각화가 필요하다.

## 2. Basis 선택

Basis는 $\ell$, $j$, $m_j$로 규정되는 state로 잡는다 (footnote 27: $\ell$, $m_\ell$, $m_s$ state를 써도 된다. 그러면 $H'_Z$의 matrix element는 쉬워지지만 $H'_{fs}$가 어려워진다. $\mathsf{W}$의 모양은 달라져도 eigenvalue는 basis와 무관하다). Clebsch–Gordan coefficient로 $\ket{j\,m_j}$를 $\ket{\ell\,s\,m_\ell\,m_s}$로 쓰면 (footnote 28: 이 CG 표기를 7.4.1의 $\ket{n\,\ell\,j\,m_j}$나 7.4.2의 $\ket{n\,\ell\,m_\ell\,m_s}$와 혼동하지 말 것)

**$\ell = 0$:**

$$
\psi_1 \equiv \ket{\tfrac12\,\tfrac12} = \ket{0\,\tfrac12\,0\,\tfrac12},
\qquad
\psi_2 \equiv \ket{\tfrac12\,{-\tfrac12}} = \ket{0\,\tfrac12\,0\,{-\tfrac12}}
\tag{2}
$$

**$\ell = 1$:**

$$
\psi_3 \equiv \ket{\tfrac32\,\tfrac32} = \ket{1\,\tfrac12\,1\,\tfrac12},
\qquad
\psi_4 \equiv \ket{\tfrac32\,{-\tfrac32}} = \ket{1\,\tfrac12\,{-1}\,{-\tfrac12}}
\tag{3}
$$

$$
\psi_5 \equiv \ket{\tfrac32\,\tfrac12} = \sqrt{\tfrac23}\ket{1\,\tfrac12\,0\,\tfrac12} + \sqrt{\tfrac13}\ket{1\,\tfrac12\,1\,{-\tfrac12}}
\tag{4}
$$

$$
\psi_6 \equiv \ket{\tfrac12\,\tfrac12} = -\sqrt{\tfrac13}\ket{1\,\tfrac12\,0\,\tfrac12} + \sqrt{\tfrac23}\ket{1\,\tfrac12\,1\,{-\tfrac12}}
\tag{5}
$$

$$
\psi_7 \equiv \ket{\tfrac32\,{-\tfrac12}} = \sqrt{\tfrac13}\ket{1\,\tfrac12\,{-1}\,\tfrac12} + \sqrt{\tfrac23}\ket{1\,\tfrac12\,0\,{-\tfrac12}}
\tag{6}
$$

$$
\psi_8 \equiv \ket{\tfrac12\,{-\tfrac12}} = -\sqrt{\tfrac23}\ket{1\,\tfrac12\,{-1}\,\tfrac12} + \sqrt{\tfrac13}\ket{1\,\tfrac12\,0\,{-\tfrac12}}
\tag{7}
$$

## 3. $\mathsf{W}$ matrix

이 basis에서 $H'_{fs}$의 nonzero matrix element는 **모두 diagonal**에 있고 (7.68)로 주어진다. $H'_Z$는 off-diagonal element를 **네 개** 가진다. 전체 matrix $-\mathsf{W}$는 (Problem 7.29)

$$
-\mathsf{W} =
\begin{pmatrix}
5\gamma - \beta & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 5\gamma + \beta & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & \gamma - 2\beta & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & \gamma + 2\beta & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & \gamma - \frac23\beta & \frac{\sqrt2}{3}\beta & 0 & 0 \\
0 & 0 & 0 & 0 & \frac{\sqrt2}{3}\beta & 5\gamma - \frac13\beta & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & \gamma + \frac23\beta & \frac{\sqrt2}{3}\beta \\
0 & 0 & 0 & 0 & 0 & 0 & \frac{\sqrt2}{3}\beta & 5\gamma + \frac13\beta
\end{pmatrix}
\tag{8}
$$

여기서

$$
\gamma \equiv \left(\frac{\alpha}{8}\right)^2 13.6\ \text{eV},
\qquad
\beta \equiv \mu_B B_{\text{ext}}
\tag{9}
$$

## 4. 대각화

처음 네 eigenvalue는 이미 diagonal에 있다. 남은 것은 **두 개의 $2\times2$ block**이다. 첫 번째 block의 characteristic equation은

$$
\lambda^2 - \lambda\left(6\gamma - \beta\right) + \left(5\gamma^2 - \frac{11}{3}\gamma\beta\right) = 0
\tag{10}
$$

이고, quadratic formula로

$$
\lambda_\pm = 3\gamma - \frac{\beta}{2} \pm \sqrt{4\gamma^2 + \frac23\gamma\beta + \frac{\beta^2}{4}}
\tag{11}
$$

두 번째 block의 eigenvalue는 같은 식에서 **$\beta$의 부호만 바꾼 것**이다.

## 5. 결과 (Table 7.2)

$n = 2$ state의 에너지 ($E_2 = -13.6\ \text{eV}/4$):

$$
\epsilon_1 = E_2 - 5\gamma + \beta,
\qquad
\epsilon_2 = E_2 - 5\gamma - \beta
\tag{12}
$$

$$
\epsilon_3 = E_2 - \gamma + 2\beta,
\qquad
\epsilon_4 = E_2 - \gamma - 2\beta
\tag{13}
$$

$$
\epsilon_{5,6} = E_2 - 3\gamma + \frac{\beta}{2} \pm \sqrt{4\gamma^2 + \frac23\gamma\beta + \frac{\beta^2}{4}}
\tag{14}
$$

$$
\epsilon_{7,8} = E_2 - 3\gamma - \frac{\beta}{2} \pm \sqrt{4\gamma^2 - \frac23\gamma\beta + \frac{\beta^2}{4}}
\tag{15}
$$

Figure 7.11은 이 여덟 에너지를 $B_{\text{ext}}$의 함수로 그린 것이다.

- **Zero-field limit ($\beta = 0$)**: fine structure 값으로 돌아간다.
- **Weak field ($\beta \ll \gamma$)**: Problem 7.24의 결과를 재현한다.
- **Strong field ($\beta \gg \gamma$)**: Problem 7.27의 결과를 재현한다. 아주 강한 field에서 **다섯 개의 서로 다른 준위**로 수렴하는 것에 주목 (Problem 7.27에서 예측).

## 6. 관련 연습문제

- **Problem 7.29**: $n = 2$에 대해 $H'_Z$와 $H'_{fs}$의 matrix element를 계산해서 (8)의 $\mathsf{W}$ 구성.
- **Problem 7.30**: $n = 3$ state의 Zeeman effect를 weak, strong, intermediate regime에서 분석하고 Table 7.2, Figure 7.11 같은 결과 만들기. 힌트: $j$ state에 대한 Wigner–Eckart theorem.

# 궁금한 내용



# AI의 보충 설명

**1. 왜 $\mathsf{W}$가 이런 block 구조를 가지나**

$H'_Z \propto L_z + 2S_z$와 $H'_{fs}$는 **둘 다 $L^2$와 $J_z$와 commute**한다. [[양자 필기 - Higher-Order Degeneracy]]의 block diagonalization 논리에 의해, $\ell$이나 $m_j$가 다른 state 사이의 matrix element는 모두 0이다. 따라서 섞일 수 있는 것은 **$\ell$과 $m_j$는 같고 $j$만 다른** state 쌍뿐이다.

| Block | State | $\ell$ | $m_j$ |
| --- | --- | --- | --- |
| $1\times1$ | $\psi_1$, $\psi_2$ | 0 | $\pm1/2$ (짝이 될 $j$가 없음) |
| $1\times1$ | $\psi_3$, $\psi_4$ | 1 | $\pm3/2$ ($j = 1/2$에는 없는 $m_j$) |
| $2\times2$ | $\psi_5$, $\psi_6$ | 1 | $+1/2$ ($j = 3/2$와 $j = 1/2$) |
| $2\times2$ | $\psi_7$, $\psi_8$ | 1 | $-1/2$ ($j = 3/2$와 $j = 1/2$) |

$H'_{fs}$는 $J^2$와도 commute해서 $j$를 섞지 못하므로, $2\times2$ block의 off-diagonal $\frac{\sqrt2}{3}\beta$는 **전부 Zeeman 항에서 온다**. 실제로 $\beta \to 0$이면 off-diagonal이 사라진다.

**2. Figure 7.11에서 선들이 교차하는 규칙 (noncrossing rule)**

Figure 7.11을 보면 어떤 선들은 교차하고, 어떤 선들은 가까이 왔다가 서로 밀어낸다. 규칙은 간단하다. **같은 symmetry (여기서는 같은 $\ell$, $m_j$)를 가진 준위는 교차하지 않고** (off-diagonal element가 level repulsion을 일으킴), **symmetry가 다른 준위는 자유롭게 교차**한다 (섞일 matrix element가 0). 이것이 **von Neumann–Wigner noncrossing rule**이고, 같은 block 안의 두 eigenvalue (14)가 square root 때문에 절대 같아질 수 없는 것이 그 수학적 표현이다.

**3. 다른 원자 물리에서도 같은 구조가 나온다**

"두 coupling의 세기를 연속적으로 바꾸며 $2\times2$ block을 대각화한다"는 구조는 hyperfine structure에 외부 field를 걸 때도 똑같이 나타난다 (Breit–Rabi formula). 두 경우 모두 weak 극한에서는 coupled basis, strong 극한에서는 uncoupled basis가 good state가 되고, intermediate에서 둘이 매끄럽게 이어진다.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Weak-Field Zeeman Effect]]
- [[양자 필기 - Strong-Field Zeeman Effect]]
- [[양자 필기 - Higher-Order Degeneracy]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]
- [[QM lecture note - Wigner-Eckart Theorem Proof and Applications]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.4.3 (Table 7.2, Figure 7.11), footnotes 27–28, Problems 7.29–7.30

# 다음 강의
- [[양자 필기 - Hyperfine Splitting in Hydrogen]] (Griffiths 7.5)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
