---
title: 양자 필기 - Higher-Order Degeneracy
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
- [[양자 필기 - Good States in Degenerate Perturbation Theory]] (Griffiths 7.2.2)

# 오늘의 핵심

[[양자 필기 - Two-Fold Degenerate Perturbation Theory]]를 일반화 한다. 
그저 degenerate space의 차원이 늘어났고, $W$ matrix의 크기도 따라서 커졌을 뿐. 
크게 달라진 건 없다. 

# 기호 정리

| Symbol                     | Meaning                                                                 |
| -------------------------- | ----------------------------------------------------------------------- |
| $\psi_j^0$                 | $n$-fold degenerate subspace의 orthonormal basis ($j = 1,\dots,n$)       |
| $\alpha_j$                 | Good state를 이루는 계수                                                      |
| $W_{ij}$                   | $\bra{\psi_i^0}H'\ket{\psi_j^0}$, $n\times n$ matrix $\mathsf{W}$의 원소   |
| $P_D$                      | Degenerate subspace로의 projection operator                               |
| $\tilde{H}^0,\ \tilde{H}'$ | Problem 7.34의 새로운 unperturbed Hamiltonian과 perturbation                 |
| $W^2_{ij}$                 | Second-order degenerate perturbation theory의 matrix (윗첨자 2는 제곱이 아니라 차수) |

# 필기 내용

## 1. $n$-fold degeneracy로의 일반화

Two-fold degeneracy에서 한 일을 그대로 확장하면 된다. $n$-fold degeneracy에서는 $n\times n$ matrix

$$
W_{ij} = \bra{\psi_i^0}H'\ket{\psi_j^0}
\tag{1}
$$

의 **eigenvalue가 first-order energy correction**이고, **eigenvector가 good states**다.

## 2. Three-fold degeneracy의 예

Degenerate state가 $\psi_a^0,\ \psi_b^0,\ \psi_c^0$ 세 개라면 first-order correction $E^1$은 다음 eigenvalue problem의 해다.

$$
\begin{pmatrix}
W_{aa} & W_{ab} & W_{ac} \\
W_{ba} & W_{bb} & W_{bc} \\
W_{ca} & W_{cb} & W_{cc}
\end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \\ \gamma \end{pmatrix}
= E^1
\begin{pmatrix} \alpha \\ \beta \\ \gamma \end{pmatrix}
\tag{2}
$$

그리고 good states는 대응하는 eigenvector로 만든다.

$$
\psi^0 = \alpha\psi_a^0 + \beta\psi_b^0 + \gamma\psi_c^0
\tag{3}
$$

(eigenvalue가 겹치면 [[양자 필기 - Two-Fold Degenerate Perturbation Theory]]의 footnote 6 경고가 그대로 적용된다.)


## 3. 해석: degenerate part의 대각화 (footnote 9)

Degenerate perturbation theory는 결국 **Hamiltonian의 degenerate part를 대각화하는 것**이다. 
Problem 7.34는 이것을 projection operator로 표현한다. Degenerate subspace로의 projection

$$
P_D = \ket{\psi_a^0}\bra{\psi_a^0} + \ket{\psi_b^0}\bra{\psi_b^0}
\tag{4}
$$

를 써서 Hamiltonian을 다시 나눈다.

$$
H = H^0 + H' = \tilde{H}^0 + \tilde{H}'
\tag{5}
$$

$$
\tilde{H}^0 = H^0 + P_D H' P_D,
\qquad
\tilde{H}' = H' - P_D H' P_D
\tag{6}
$$

$\tilde{H}^0$는 degenerate subspace 안의 $H'$를 미리 흡수한 unperturbed Hamiltonian이어서 (보통) **nondegenerate**해지고, 그 뒤로는 ordinary nondegenerate perturbation theory를 쓸 수 있다. 이 방법은 unperturbed energy가 정확히 같지 않고 **매우 가까운** 경우 ($E_a^0 \approx E_b^0$)에도 쓸 수 있다는 장점이 있다 (예: band structure의 nearly-free electron approximation).

## 5. 관련 연습문제

- **Problem 7.10**: Example 7.3의 first-order energy $\pm\epsilon\hbar\omega/2$가 exact solution을 $\epsilon$ 1차까지 전개한 것과 일치함을 보이기.
- **Problem 7.11 (HW2)**: Infinite cubical well에 delta function bump $H' = a^3V_0\,\delta(x-a/4)\,\delta(y-a/2)\,\delta(z-3a/4)$를 넣었을 때 ground state와 triply degenerate first excited state의 first-order correction.
- **Problem 7.12(HW2)**: Three-state system $\mathsf{H} = V_0\begin{pmatrix} 1-\epsilon & 0 & 0 \\ 0 & 1 & \epsilon \\ 0 & \epsilon & 2 \end{pmatrix}$. Exact eigenvalue, nondegenerate state의 first/second-order, degenerate state의 first-order를 비교.
- **Problem 7.13**: $\psi^0 = \sum_{j=1}^n \alpha_j\psi_j^0$에서 출발해 $n$-fold 경우에 $E^1$이 $\mathsf{W}$의 eigenvalue임을 증명.
- Further Problems 중 관련: **7.34–7.35** (projection operator 방법), **7.39–7.41** (second-order degenerate perturbation theory).

# 궁금한 내용



# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Two-Fold Degenerate Perturbation Theory]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[양자 필기 - Second-Order Energy Correction]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.2.3, footnotes 8–9, Problems 7.10–7.13, 7.34–7.35, 7.39–7.41

# 다음 강의
- [[양자 필기 - Relativistic Correction to Hydrogen]] (Griffiths 7.3 도입, 7.3.1)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
