---
title: 양자 필기 - Second-Order Energy Correction
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
- [[양자 필기 - Time-Independent Nondegenerate Perturbation Theory]] (Griffiths 7.1.1–7.1.2: general formulation, first-order theory)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $H^0,\ H'$ | Unperturbed Hamiltonian, perturbation |
| $\psi_n^0,\ E_n^0$ | Unperturbed eigenfunction, eigenvalue |
| $\psi_n^k,\ E_n^k$ | $k$-th order correction |
| $c_m^{(n)}$ | $\psi_n^1$을 $\psi_m^0$로 전개했을 때의 계수 |
| $V_{mn}$ | Matrix element $\bra{\psi_m^0}H'\ket{\psi_n^0}$ (footnote 5 표기) |
| $\Delta_{mn}$ | Energy 차이 $E_m^0 - E_n^0$ (footnote 5 표기) |

# 필기 내용

## 1. Second-order equation에서 출발

지난 노트에서 $\lambda^2$ 차수를 모아 얻은 second-order equation은 다음과 같다.

$$
H^0\psi_n^2 + H'\psi_n^1 = E_n^0\psi_n^2 + E_n^1\psi_n^1 + E_n^2\psi_n^0
\tag{1}
$$

First-order 때와 똑같이 $\psi_n^0$와 inner product를 취한다.

$$
\bra{\psi_n^0}H^0\ket{\psi_n^2} + \bra{\psi_n^0}H'\ket{\psi_n^1} = E_n^0\bra{\psi_n^0}\ket{\psi_n^2} + E_n^1\bra{\psi_n^0}\ket{\psi_n^1} + E_n^2\bra{\psi_n^0}\ket{\psi_n^0}
\tag{2}
$$

$H^0$가 **hermitian**이므로

$$
\bra{\psi_n^0}H^0\ket{\psi_n^2} = E_n^0\bra{\psi_n^0}\ket{\psi_n^2}
\tag{3}
$$

이 되어 좌변 첫째 항과 우변 첫째 항이 상쇄된다. $\bra{\psi_n^0}\ket{\psi_n^0} = 1$을 쓰면

$$
E_n^2 = \bra{\psi_n^0}H'\ket{\psi_n^1} - E_n^1\bra{\psi_n^0}\ket{\psi_n^1}
\tag{4}
$$

## 2. $\psi_n^1$에는 $\psi_n^0$ 성분이 없다

First-order wave function correction은 $m \neq n$인 state로만 전개했다.

$$
\psi_n^1 = \sum_{m\neq n} c_m^{(n)}\psi_m^0,
\qquad
c_m^{(n)} = \frac{\bra{\psi_m^0}H'\ket{\psi_n^0}}{E_n^0 - E_m^0}
\tag{5}
$$

따라서 orthonormality에 의해

$$
\bra{\psi_n^0}\ket{\psi_n^1} = \sum_{m\neq n} c_m^{(n)}\bra{\psi_n^0}\ket{\psi_m^0} = 0
\tag{6}
$$

> [!note] 왜 $c_n^{(n)} = 0$으로 골라도 되나? (footnote 4)
> $\psi_n^1$에 $\psi_n^0$ 성분이 있어도 그건 zeroth-order 항 $\psi_n^0$에 흡수시킬 수 있다. 게다가 $c_n^{(n)} = 0$으로 고르면 $\psi_n$이 **first order까지 normalized** 된다:
> $\bra{\psi_n}\ket{\psi_n} = 1 + \lambda\left(\bra{\psi_n^1}\ket{\psi_n^0} + \bra{\psi_n^0}\ket{\psi_n^1}\right) + O(\lambda^2) = 1 + O(\lambda^2)$

(4)의 둘째 항이 사라지므로

$$
E_n^2 = \bra{\psi_n^0}H'\ket{\psi_n^1} = \sum_{m\neq n} c_m^{(n)}\bra{\psi_n^0}H'\ket{\psi_m^0} = \sum_{m\neq n}\frac{\bra{\psi_m^0}H'\ket{\psi_n^0}\bra{\psi_n^0}H'\ket{\psi_m^0}}{E_n^0 - E_m^0}
\tag{7}
$$

$H'$도 hermitian이므로 $\bra{\psi_n^0}H'\ket{\psi_m^0} = \bra{\psi_m^0}H'\ket{\psi_n^0}^*$이고, 분자는 절댓값의 제곱이 된다.

$$
\boxed{\ E_n^2 = \sum_{m\neq n}\frac{\left|\bra{\psi_m^0}H'\ket{\psi_n^0}\right|^2}{E_n^0 - E_m^0}\ }
\tag{8}
$$

이것이 **second-order perturbation theory의 fundamental result**다.

## 3. 식 (8)을 읽는 법

- **First order는 diagonal element, second order는 off-diagonal element의 제곱**으로 결정된다. $E_n^2$를 구하는 데 $\psi_n^2$는 필요 없고 $\psi_n^1$만 있으면 된다.
- **분모의 부호**: $m$이 $n$보다 위에 있으면($E_m^0 > E_n^0$) 기여가 음수, 아래에 있으면 양수다. 즉 state $n$은 위쪽 state들에 의해 아래로, 아래쪽 state들에 의해 위로 밀린다 (**level repulsion**).
- **Ground state**는 모든 $E_m^0 > E_0^0$이므로 $E_0^2 \le 0$. Ground state의 second-order correction은 **항상 에너지를 낮춘다**.
- **분모가 0이 되면 안 된다.** 즉 unperturbed spectrum이 **nondegenerate**해야 한다. Degenerate한 경우는 [[양자 필기 - Two-Fold Degenerate Perturbation Theory]]에서 다룬다.

## 4. 더 높은 차수 (footnote 5)

Griffiths는 실용적으로 (8)까지가 보통 쓸 만한 한계라고 말한다. 참고로 $V_{mn} \equiv \bra{\psi_m^0}H'\ket{\psi_n^0}$, $\Delta_{mn} \equiv E_m^0 - E_n^0$로 쓰면 처음 세 개의 correction은

$$
E_n^1 = V_{nn}
\tag{9}
$$

$$
E_n^2 = \sum_{m\neq n}\frac{|V_{nm}|^2}{\Delta_{nm}}
\tag{10}
$$

$$
E_n^3 = \sum_{l,m\neq n}\frac{V_{nl}V_{lm}V_{mn}}{\Delta_{nl}\Delta_{nm}} - V_{nn}\sum_{m\neq n}\frac{|V_{nm}|^2}{\Delta_{nm}^2}
\tag{11}
$$

## 5. 적용 범위 (Problem 7.4의 comment)

Perturbation theory는 **perturbation의 matrix element가 energy level spacing보다 작을 때만** 믿을 수 있다.

$$
\left|\bra{\psi_m^0}H'\ket{\psi_n^0}\right| \ll \left|E_n^0 - E_m^0\right|
\tag{12}
$$

그렇지 않으면 처음 몇 항이 나쁜 근사가 되거나, 급수 자체가 **수렴하지 않을 수도** 있다. 수렴하지 않으면 처음 몇 항은 아무 정보도 주지 않는다.

## 6. 관련 연습문제

- **Problem 7.4**: 가장 일반적인 two-level system. Exact energy와 perturbation 결과 비교, 수렴 조건.
- **Problem 7.5**: (a) Problem 7.1의 delta bump에 대한 $E_n^2$ (odd $n$에서 급수를 닫힌 꼴로 합할 수 있음), (b) Problem 7.2의 harmonic oscillator에 대한 $E_0^2$.
- **Problem 7.6**: Harmonic oscillator + 약한 electric field $H' = -qEx$. First order는 0, second order 계산 후 exact와 비교.
- **Problem 7.7**: Figure 7.3의 half-well perturbation을 numerical하게 풀어서 first-order wave function과 비교.

# 궁금한 내용



# AI의 보충 설명

**1. Ground state가 항상 내려가는 이유를 variational principle로 보기**

First order까지의 에너지 $E_0^0 + E_0^1 = \bra{\psi_0^0}H^0 + H'\ket{\psi_0^0}$는 전체 Hamiltonian $H$의 trial state $\psi_0^0$에 대한 기댓값이다. Variational principle에 의해 이 값은 true ground state energy의 **upper bound**다. 따라서 그 이후의 correction들은 에너지를 낮추는 방향이어야 자연스럽고, 실제로 $E_0^2 \le 0$이다.

**2. $E_n^2$의 크기를 대충 가늠하는 방법**

Completeness $\sum_m \ket{\psi_m^0}\bra{\psi_m^0} = 1$을 쓰면

$$
\sum_{m\neq n}\left|\bra{\psi_m^0}H'\ket{\psi_n^0}\right|^2 = \bra{\psi_n^0}H'^2\ket{\psi_n^0} - \left(E_n^1\right)^2
\tag{A1}
$$

이다. Ground state에서는 모든 분모의 크기가 적어도 첫 번째 gap $\Delta \equiv E_1^0 - E_0^0$ 이상이므로

$$
\left|E_0^2\right| \le \frac{\bra{\psi_0^0}H'^2\ket{\psi_0^0} - \left(E_0^1\right)^2}{\Delta}
\tag{A2}
$$

무한합을 직접 계산하기 어려울 때 order of magnitude를 확인하는 데 유용하다. 우변의 분자는 unperturbed state에서 $H'$의 **variance**라는 점도 기억할 만하다.

**3. 왜 $E_n^2$에 $\psi_n^2$가 필요 없나 (Wigner's $2n+1$ rule)**

일반적으로 wave function을 $k$차까지 알면 energy는 $2k+1$차까지 구할 수 있다. 그래서 $\psi_n^1$만으로 $E_n^2$뿐 아니라 $E_n^3$까지 구할 수 있고, 실제로 식 (11)에는 $V$와 $\Delta$만 들어 있다.

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]
- [[QM lecture note - Simple Harmonic Oscillator]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.1.3, footnotes 4–5, Problems 7.4–7.7

# 다음 강의
- [[양자 필기 - Two-Fold Degenerate Perturbation Theory]] (Griffiths 7.2.1)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
