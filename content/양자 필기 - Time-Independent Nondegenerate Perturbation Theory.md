---
title: 양자 필기 - Time-Independent Perturbation Theory
date: 2026-09-09
subject: quantum mechanics
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!error] 비공식 자료, 책임 안 짐
> 이것은 [[양자물리 (학부용, Griffiths)]] 강의를 듣고 TA가 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 
> 교수님께서 검토하신 자료가 **아니므로,** 전문성을 보장하지 않습니다.

# 오늘의 핵심

- **Time-independent perturbation theory**: exact solution을 아는 문제에서 출발해, 풀 수 없는 문제의 근사해를 구하는 방법.
- 핵심 트릭은 dimensionless parameter $\lambda \in [0,1]$로 easy problem($\lambda=0$)과 hard problem($\lambda=1$)을 연결하고, solution을 $\lambda$에 대한 **power series**로 전개하는 것.
- 이 아이디어는 양자역학 밖에서도 쓰인다 (algebraic equation 예제).
- Perturbed Hamiltonian $H = H^0 + \lambda H'$를 Schrödinger equation에 넣고 **$\lambda$의 차수별로 식을 맞추면** first order theory, second order theory가 차례로 나온다.
- **First order energy correction**은 $H'$의 **diagonal element**로 구한다: $E_n^1 = \langle \psi_n^0 | H' | \psi_n^0 \rangle$.
- **First order wave function correction**은 $H'$의 **off-diagonal element**로 구한다.

# 기호 정리

| Symbol             | Meaning                                                   |   
| ------------------ | --------------------------------------------------------- |
| $H^0$              | Unperturbed Hamiltonian (exact solution을 아는 것)            |  
| $H'$               | Perturbation Hamiltonian                                  | 
| $\lambda$          | Dimensionless perturbation parameter, $\lambda \in [0,1]$ |  
| $\psi_n^0,\ E_n^0$ | Unperturbed eigenfunction, eigenvalue                     |   
| $\psi_n^k,\ E_n^k$ | $k$-th order correction                                   |   
| $H'_{mn}$          | Matrix element $\bra{\psi_m^0}  H' \ket{\psi_n^0}$ |


# 필기 내용

## 1. Perturbation theory의 일반적인 아이디어 (TA 연습시간 내용)

Perturbation theory는 양자역학 고유의 방법이 아니다. **일반적인 방정식**에도 쓸 수 있고, concept은 수업에서 배운 것과 완전히 같다.

> Solution을 아는 **쉬운 방정식**  (${\lambda:0 \to 1 }$) exact solution을 모르는 **어려운 방정식**

$\lambda$를 0에서 1로 연속적으로 변화시키면서 solution이 $\lambda$에 의해 어떻게 변하는지를 본다. 
Solution을 $\lambda$에 대한 함수로 취급하면, $\lambda$에 대한 power series로 전개할 수 있다.

### Example: algebraic equation

$x^5 + x = 1$의 solution을 구하기는 어렵다. 반면 $x^5 = 1$은 쉽다. 이 둘을 $\lambda$를 포함한 식으로 잇는다.

![[Pasted image 20260909192732.png]]

$$
x^5 + \lambda x = 1
\tag{1}
$$

$\lambda = 0$이면 쉬운 문제, $\lambda = 1$이면 원래의 어려운 문제다.
$x^5 + \lambda x = 1$ 에서 $\lambda$를 0에서 1로 옮겨감에 따라, solution도 슬금슬금 변한다. 
따라서 solution은 $\lambda$에 대한 함수이다. 
$$
x(\lambda)
$$

Solution이 $\lambda$에 대해 **analytic**하다면 power expansion 할 수 있다. 
(어떻게 analytic함을 확인할 수 있는지는 나에게 물어보지 말아라.)

$$
x(\lambda) = \sum_{n=0}^{\infty} c_n \lambda^n
\tag{2}
$$
결국 $c_n$을 찾는 문제로 귀결되었다. 

$x(0) = 1$을 알고 있으므로, $c_0 = 1$이다.

$$
x(\lambda) = 1 + \sum_{n=1}^{\infty} c_n \lambda^n
\tag{3}
$$

이제 나머지 $c_n$들을 구하면 된다. (3)을 (1)에 대입하면

$$
\left(1 + c_1\lambda + c_2\lambda^2 + O(\lambda^3)\right)^5 + \lambda\left(1 + c_1\lambda + O(\lambda^2)\right) = 1
\tag{4}
$$

**$\lambda$의 1차항만 모으면**, 모든 $\lambda$에 대해 식이 성립해야 하므로 $\lambda$의 계수는 0이어야 한다.  

$$
5c_1 + 1 = 0 \quad \Longrightarrow \quad c_1 = -\frac{1}{5}
\tag{5}
$$

**$\lambda$의 2차항을 모으면**, 역시 계수가 0이어야 한다. 

$$
10c_1^2 + c_1 + 5c_2 = 0 \quad \Longrightarrow \quad c_2 = -\frac{1}{25}
\tag{6}
$$

따라서, $x(\lambda)$을 이차식까지는 찾아냈다. 원한다면 얼마든지 나머지 $c_n$을 구할 수 있다.

$$
x(\lambda) = 1 - \frac{1}{5}\lambda - \frac{1}{25}\lambda^2 + O(\lambda^3)
\tag{7}
$$
근사식을 이용해 $x^5 + x = 1$의 solution을 구할 수 있다. 
$$
x(1) \simeq \frac{19}{25} = 0.76
\tag{8}
$$

실제 solution은 $0.7548\cdots$ 이므로, 2차까지만 계산해도 **0.7% 정도의 오차**밖에 나지 않는다.

## 2. Perturbed Hamiltonian의 setup (강의 내용 시작)

Unperturbed potential(solution을 아는 것)에서는 윗첨자 $0$을 붙여서 쓰도록 하자. 

$$
H^0 \psi_n^0 = E_n^0 \psi_n^0
\tag{9}
$$

$$
\langle \psi_n^0 | \psi_m^0 \rangle = \delta_{nm}
\tag{10}
$$

Perturbed potential에서는 윗첨자 없이 쓴다.

$$
H \psi_n = E_n \psi_n
\tag{11}
$$

Perturbed Hamiltonian $H$는 $H^0$에 perturbation potential이 붙은 것이다.
$$
H = H^0 + \lambda H'
\tag{12}
$$

$\lambda$는 dimensionless parameter이고 $\lambda \in [0,1]$, 작은 수라고 가정한다. 
$\lambda = 1$이면 완전히 perturbation 된 것이다.

$\psi_n$은 $\psi_n^0$에 correction term이 더해진 것으로 본다.
$\psi_n$과 $E_n$은 $\lambda$에 대한 함수이기 때문에, $\lambda$에 대해 power expansion할 수 있다. 

$$
\psi_n = \psi_n^0 + \lambda \psi_n^1 + \lambda^2 \psi_n^2 + \cdots
\tag{13}
$$

$$
E_n = E_n^0 + \lambda E_n^1 + \lambda^2 E_n^2 + \cdots
\tag{14}
$$

우리가 구해야 하는 것은 $\psi_n^1,\ \psi_n^2,\ E_n^1,\ E_n^2$이다.

이걸 그대로 Schrödinger equation에 적용하면

$$
(H^0 + \lambda H')(\psi_n^0 + \lambda\psi_n^1 + \lambda^2\psi_n^2) = (E_n^0 + \lambda E_n^1 + \lambda^2 E_n^2)(\psi_n^0 + \lambda\psi_n^1 + \lambda^2\psi_n^2)
\tag{15}
$$

$\lambda$의 차수에 따라 정리하면

$$
H^0\psi_n^0 + \lambda\left(H'\psi_n^0 + H^0\psi_n^1\right) + \lambda^2\left(H^0\psi_n^2 + H'\psi_n^1\right) + \cdots
$$

$$
= E_n^0\psi_n^0 + \lambda\left(E_n^0\psi_n^1 + E_n^1\psi_n^0\right) + \lambda^2\left(E_n^0\psi_n^2 + E_n^1\psi_n^1 + E_n^2\psi_n^0\right) + \cdots
$$

> [!note] 윗첨자 세는 법
> **윗첨자의 합이 $\lambda$의 차수와 같음**에 주목. 예를 들어 $\lambda\left(H'\psi_n^0 + H^0\psi_n^1\right)$에서 $H'$의 프라임을 윗첨자 1로 취급하면, $H'\psi_n^0 \to$ 윗첨자 합 1, $H^0\psi_n^1 \to$ 윗첨자 합 1.

$\lambda$는 임의의 수이므로, (수렴 범위 이내에서) 어떤 수를 $\lambda$에 넣어도 등식이 성립해야 한다. 
따라서 **$\lambda$의 각 차수 항에 붙은 계수가 좌우변이 같아야 한다.**

$$
H'\psi_n^0 + H^0\psi_n^1 = E_n^0\psi_n^1 + E_n^1\psi_n^0
\qquad \text{(first order theory)}
\tag{16}
$$

$$
H^0\psi_n^2 + H'\psi_n^1 = E_n^0\psi_n^2 + E_n^1\psi_n^1 + E_n^2\psi_n^0
\qquad \text{(second order theory)}
\tag{17}
$$

## 3. First order correction of energy

First order theory (16)의 양변에 $\langle \psi_n^0 |$를 곱한다.

$$
\langle \psi_n^0 | H' | \psi_n^0 \rangle + \langle \psi_n^0 | H^0 | \psi_n^1 \rangle = E_n^0 \langle \psi_n^0 | \psi_n^1 \rangle + E_n^1 \langle \psi_n^0 | \psi_n^0 \rangle
\tag{18}
$$

$H^0$는 Hermitian이므로 좌변 둘째 항은 $\langle \psi_n^0 | H^0 | \psi_n^1 \rangle = E_n^0 \langle \psi_n^0 | \psi_n^1 \rangle$이 되어 우변 첫째 항과 **정확히 상쇄**된다. 그리고 $\langle \psi_n^0 | \psi_n^0 \rangle = 1$이므로, 정리하면 간단하고 많이 쓰이는 식이 나온다.

$$
\boxed{\ E_n^1 = \langle \psi_n^0 | H' | \psi_n^0 \rangle\ }
\tag{19}
$$

$H'$만 이용해서 $E_n^1$을 알 수 있다. 이것은 **perturbation의 expectation value**다.

Matrix element 표기를 도입해 두면 편하다.

$$
H'_{mn} = \langle \psi_m^0 | H' | \psi_n^0 \rangle
\tag{20}
$$

### Example 1. Infinite square well의 바닥을 $V_0$만큼 들어올리기
![[Pasted image 20260909193807.png]]
Unperturbed wave function은

$$
\psi_n^0(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi}{a}x\right)
\tag{21}
$$

우물의 "floor"를 상수 $V_0$만큼 올리는 perturbation이므로, $H'$는 constant다. (즉 $H' = V_0 \mathbb{I}$, $V_0 \in \mathbb{R}$.)

$$
E_n^1 = \langle \psi_n^0 | H' | \psi_n^0 \rangle = V_0 \langle \psi_n^0 | \psi_n^0 \rangle = V_0
\tag{22}
$$

Corrected energy level은 $E_n \approx E_n^0 + V_0$로, 그냥 전부 $V_0$만큼 들어올려진다. 여기서 놀라운 점은 **first order theory가 exact answer를 준다**는 것이다. Constant perturbation에 대해서는 higher order correction이 전부 사라진다.

### Example 2. 우물의 절반에만 걸린 perturbation
![[Pasted image 20260909193812.png]]
Perturbation이 우물의 절반까지만 뻗어 있으면, **적분 범위가 절반**이 된다.

$$
E_n^1 = \frac{2V_0}{a}\int_0^{a/2}\sin^2\left(\frac{n\pi}{a}x\right)dx = \frac{V_0}{2}
\tag{23}
$$

이 경우 모든 energy level이 $V_0/2$만큼 올라간다. Exact result는 아니지만, first-order approximation으로는 그럴듯하다.

## 4. First order correction of wave function

다시 first order theory (16)에서 시작한다. 이번 목표는 $\psi_n^1$을 구하는 것이다.

$$
(H^0 - E_n^0)\psi_n^1 = (E_n^1 - H')\psi_n^0
\tag{24}
$$

$\psi_n^1$을 unperturbed eigenfunction $\psi_m^0$의 **linear summation**으로 나타내자.

$$
\psi_n^1 = \sum_{m \neq n} c_m^{(n)} \psi_m^0
\tag{25}
$$

Summation에서 $\psi_n^0$은 제외한다. 식 13에서 이미 $\psi_n$에 $\psi_n^0$이 포함되어 있으므로.

(25)를 (24)에 대입하고 $H^0\psi_m^0 = E_m^0\psi_m^0$을 쓰면

$$
\sum_{m \neq n}(E_m^0 - E_n^0)c_m^{(n)}\psi_m^0 = (E_n^1 - H')\psi_n^0
\tag{26}
$$

$\langle \psi_\ell^0 |$과 내적한다. **좌변**은 orthonormality에 의해

$$
\sum_{m \neq n}(E_m^0 - E_n^0)c_m^{(n)}\delta_{\ell m} = (E_\ell^0 - E_n^0)c_\ell^{(n)}
\tag{27}
$$

**우변**은

$$
\langle \psi_\ell^0 | E_n^1 - H' | \psi_n^0 \rangle = E_n^1 \delta_{\ell n} - \langle \psi_\ell^0 | H' | \psi_n^0 \rangle
\tag{28}
$$

$\ell \neq n$이라면 첫 항이 사라지고, 이제 $c_\ell^{(n)}$을 안다.

$$
c_\ell^{(n)} = \frac{\langle \psi_\ell^0 | H' | \psi_n^0 \rangle}{E_n^0 - E_\ell^0}
\tag{29}
$$

$$
\boxed{\ \psi_n^1 = \sum_{m \neq n} \frac{\langle \psi_m^0 | H' | \psi_n^0 \rangle}{E_n^0 - E_m^0}\,\psi_m^0\ }
\tag{30}
$$

> [!insight] 주목
> $E_n^1$은 $H'$의 **diagonal element**로 구한다.
> $\psi_n^1$은 $H'$의 **off-diagonal element**로 구한다.

# 궁금한 내용 (TA 시간에 나온 질문문)



# AI의 보충 설명


# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[Quantum Mechanics]]

# References

- 강의 필기, 2026년 2학기 양자역학 1주차 (수)
- Griffiths, *Introduction to Quantum Mechanics*, Chapter 7.1 (Example 7.1, Figures 7.2–7.3)

# 원본 필기 이미지

![[양자_1stweek_1.pdf]]
