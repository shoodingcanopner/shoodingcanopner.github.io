---
title: 양자 필기 - Two-Fold Degenerate Perturbation Theory
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
- [[양자 필기 - Second-Order Energy Correction]] (Griffiths 7.1.3)

# 오늘의 핵심
Two-fold degenerate에서 풀어보자. 

Unperturbed Hamiltonian에 대해 같은 에너지 값을 가지는 eigen state의 집합을 "Degenerate space"라고 부른다. 

Degenerate case에서는 "good state"를 찾는 것이 1차 목표다. 

"Good state"는 perturebation이 없을 때는 그저 degenerate space에 사는 한 가지 상태였으나, perturbation이 켜지자 마자 해밀토니안의 eigen state가 되는 그런 state다. 

 Good state를 이렇게 두 상태의 선형 합으로 표현하자. a상태와 b상태는 degenerate하다. 
 $\psi^0 = \alpha\psi_a^0 + \beta\psi_b^0$

Matrix $\mathsf{W}$는 $H'$를 degenerate ket이 사는 subspace로만 나타낸 것이다. 
이것을 대각화하면 $\alpha$와 $\beta$를 찾을 수 있다
$$
W_{ij} \equiv \bra{\psi_i^0}H'\ket{\psi_j^0},
\qquad (i,j = a,b)
\tag{15}
$$

$$
\begin{pmatrix} W_{aa} & W_{ab} \\ W_{ba} & W_{bb} \end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \end{pmatrix}
= E^1
\begin{pmatrix} \alpha \\ \beta \end{pmatrix}
\tag{18}
$$
$$
\boxed{\ E^1_\pm = \frac12\left[W_{aa} + W_{bb} \pm \sqrt{\left(W_{aa} - W_{bb}\right)^2 + 4\left|W_{ab}\right|^2}\ \right]\ }
\tag{20}
$$

# 기호 정리

| Symbol | Meaning |
| --- | --- |
| $\psi_a^0,\ \psi_b^0$ | 같은 에너지 $E^0$를 가지는 두 orthonormal unperturbed state |
| $\alpha,\ \beta$ | Good state를 이루는 linear combination 계수 |
| $W_{ij}$ | Degenerate subspace 안에서 $H'$의 matrix element $\bra{\psi_i^0}H'\ket{\psi_j^0}$ |
| $\mathsf{W}$ | $W_{ij}$를 원소로 하는 $2\times 2$ matrix |
| $E^1_\pm$ | $\mathsf{W}$의 두 eigenvalue = 두 good state의 first-order energy correction |
| $\psi_n(x)$ | 1D harmonic oscillator의 $n$번째 eigenstate (Example 7.2) |
| $\omega_\pm$ | Rotated coordinate에서 두 oscillator의 frequency, $\sqrt{1\pm\epsilon}\,\omega$ |

# 필기 내용

## 1. Nondegenerate perturbation theory가 실패하는 이유

두 개 이상의 서로 다른 state $\psi_a^0,\ \psi_b^0$가 같은 에너지를 가지면, 앞선 chapter 7.1에서 배운 nondegenerate perturbation theory의 공식에서 분모 $E_a^0 - E_b^0 = 0$이 된다. 그러면 발산하고 만다!

$$
c_a^{(b)} = \frac{\bra{\psi_a^0}H'\ket{\psi_b^0}}{E_b^0 - E_a^0},
\qquad
E_a^2 = \sum_{m\neq a}\frac{\left|\bra{\psi_m^0}H'\ket{\psi_a^0}\right|^2}{E_a^0 - E_m^0}
\tag{1}
$$

이 문제는 분자 $\bra{\psi_a^0}H'\ket{\psi_b^0}$가 우연히 0이면 피할 수 있다. 
만약 우연이 안 일어나서 $\bra{\psi_a^0}H'\ket{\psi_b^0} \neq 0$이면 어떡하는가?
$\psi_a^0$와 $\psi_b^0$의 선형 결합으로 off quagonal term을 0으로 만드는 ket을 찾으면 된다. 
$\bra{\psi_{a'}^0}H'\ket{\psi_{b'}^0}= \bra{\psi_{b'}^0}H'\ket{\psi_{a'}^0} = 0$을 성립하는 $\psi_{a'}^0$과 $\psi_{b'}^0$를 찾는 것이다. 
즉, degenerate ket을 이용해서 $H'$를 대각화 할 것이다. 
Perturbation theory를 사용하기 유용하다는 측면에서, eigen vector로 나온  $\psi_{a'}^0$과 $\psi_{b'}^0$를 우린 "Good state"라고 부른다. 

## 2. Two-fold degeneracy의 setup
일단은 단 두 개의 ket만 degeneracy를 가지는 간단한 상황을 고려해 보자.
(다음 챕터에서 two-fold이상의 higher fold degeneracy의 경우로 이론을 확장할 것이다.)

$$
H^0\psi_a^0 = E^0\psi_a^0,
\qquad
H^0\psi_b^0 = E^0\psi_b^0,
\qquad
\braket{\psi_a^0|\psi_b^0} = 0
\tag{2}
$$

$\psi_a^0$ , $\psi_b^0$ 이 둘의 **어떤 linear combination**도 여전히 같은 eigenvalue를 가지는 $H^0$의 eigenstate다.

$$
\psi^0 = \alpha\psi_a^0 + \beta\psi_b^0,
\qquad
H^0\psi^0 = E^0\psi^0
\tag{3}
$$

보통 perturbation은 degeneracy를 **깨뜨린다**. $\lambda$를 0에서 1로 키우면 공통 에너지 $E^0$가 두 개로 갈라진다 (Figure 7.4). 반대로 perturbation을 끄면, 위쪽 state는 **특정한** linear combination으로, 아래쪽 state는 그것과 orthogonal한 combination으로 돌아간다.

> [!important] Good states의 정의
> **Good states** = perturbation을 끌 때($\lambda \to 0$) true eigenstate들이 수렴하는 unperturbed state. 즉, perturbed eigenstate들이 unperturved 에서는 어떤 eigen state였는지 추정한 것이다. 
> 문제는 이것을 미리 알 수 없다는 것. 그래서 first-order energy조차 계산할 수 없다.

## 3. Example 7.2: exact solution에서 good states 찾기
Exact solution과 perturbation thepry의 결과를 비교할 수 있는 간단한 예시를 풀어보자. 

2D harmonic oscillator에 perturbation을 더한다.

$$
H^0 = \frac{p^2}{2m} + \frac12 m\omega^2\left(x^2 + y^2\right),
\qquad
H' = \epsilon m\omega^2 xy
\tag{4}
$$

First excited state ($E^0 = 2\hbar\omega$)는 two-fold degenerate이고, 한 가지 basis는

$$
\psi_a^0 = \psi_0(x)\psi_1(y),
\qquad
\psi_b^0 = \psi_1(x)\psi_0(y)
\tag{5}
$$

Exact solution을 구하기 위해 **좌표를 45° 회전**시키면 문제가 풀린다.
왜냐면  45° 회전한 좌표계에서 perturbed potential을 깔끔한 타원 방정식 꼴로 쓸 수 있기 때문이다. 
![[Pasted image 20260930091631.png]]
$$
x' = \frac{x+y}{\sqrt2},
\qquad
y' = \frac{x-y}{\sqrt2}
\tag{6}
$$

$xy = \frac12\left(x'^2 - y'^2\right)$이므로 perturbed Hamiltonian은 두 개의 독립적인 1D oscillator가 된다.

$$
H = \frac{1}{2m}\left(p_{x'}^2 + p_{y'}^2\right) + \frac12 m(1+\epsilon)\omega^2 x'^2 + \frac12 m(1-\epsilon)\omega^2 y'^2
\tag{7}
$$
$x'$에 대해서는 frequency가 $(1+\epsilon)\omega$인 1D oscillator가 있으며, 
$y'$에 대해서는 frequency가 $(1-\epsilon)\omega$이라는 것을 확인.

두 개의 frequency를 $\omega_\pm = \sqrt{1\pm\epsilon}\,\omega$라고 간단하게 쓰자. Perturbed Hamiltonian의 exact solution은:

$$
\psi_{mn} = \psi_m^+(x')\psi_n^-(y'),
\qquad
E_{mn} = \left(m+\frac12\right)\hbar\omega_+ + \left(n+\frac12\right)\hbar\omega_-
\tag{8}
$$

First excited state에서 갈라져 나온 두 state는 $(m,n) = (0,1)$ (lower)과 $(1,0)$ (upper)이다.
위에 등-에너지 선(energy line) 그림에 주목하라. 
사실, perturbation이 일어나면 good state가 아니어도 모든 degenerate state가 에너지가 달라지기는 한다. 
그러나 good state가 가지는 특이점은, perturbation이 일어났을 때 자기만 고유한 에너지를 가지게 된다는 점이다. 
등에너지선에서 선이 촘촘해지고 널널해지는 형태에 주목하라. 새로운 축(good state의 방향)은 선 밀도의 극점이다. $y'$방향은 가장 높은 선 밀도를 보이며, $x'$방향은 가장 낮은 선 밀도를 보인다. 


Perturbed state의 eigenstate $\psi_{mn} = \psi_m^+(x')\psi_n^-(y')$에다가 $\epsilon \to 0$ 극한을 취하면 good state를 구할 수 있다. 

$$
\lim_{\epsilon\to0}\psi_{01} = \psi_0\left(\frac{x+y}{\sqrt2}\right)\psi_1\left(\frac{x-y}{\sqrt2}\right) = \frac{-\psi_a^0 + \psi_b^0}{\sqrt2}
\tag{9}
$$

$$
\lim_{\epsilon\to0}\psi_{10} = \frac{\psi_a^0 + \psi_b^0}{\sqrt2}
\tag{10}
$$

따라서 이 문제의 good states는

$$
\boxed{\ \psi_\pm^0 = \frac{1}{\sqrt2}\left(\psi_b^0 \pm \psi_a^0\right)\ }
\tag{11}
$$

Exact solution을 알 때는 이렇게 찾을 수 있다. 문제는 **exact solution을 모를 때** 어떻게 찾느냐다.

## 4. 일반적인 방법: $\mathsf{W}$ matrix diagonaligation

Good state를 일반적인 형태 $\psi^0 = \alpha\psi_a^0 + \beta\psi_b^0$ 으로 두고 $\alpha,\ \beta$를 미지수로 남긴다. 그리고

$$
E = E^0 + \lambda E^1 + \lambda^2 E^2 + \cdots,
\qquad
\psi = \psi^0 + \lambda\psi^1 + \lambda^2\psi^2 + \cdots
\tag{12}
$$

를 $H\psi = E\psi$에 넣고 $\lambda^1$ 차수를 모으면 (chapter 7.1과 같은 방식)

$$
H^0\psi^1 + H'\psi^0 = E^0\psi^1 + E^1\psi^0
\tag{13}
$$

양 변이 가진 $\psi_a^0$성분의 크기를 구하기 위해 $\psi_a^0$와 inner product를 취한다. 
$H^0$가 hermitian이므로 $\bra{\psi_a^0}H^0\ket{\psi^1} = E^0\bra{\psi_a^0}\ket{\psi^1}$이 되어 우변 첫째 항과 상쇄된다. 
$\psi^0 = \alpha\psi_a^0 + \beta\psi_b^0$과 orthonormality $\braket{\psi_a^0|\psi_b^0} = 0$를 쓰면 식이 아래와 같이 정리된다. 

$$
\alpha\bra{\psi_a^0}H'\ket{\psi_a^0} + \beta\bra{\psi_a^0}H'\ket{\psi_b^0} = \alpha E^1
\tag{14}
$$

Matrix element를 다음과 같이 정의한다. 
Matrix $W$는 $H'$를 degenerate ket이 사는 subspace로만 나타낸 것이다. 

$$
W_{ij} \equiv \bra{\psi_i^0}H'\ket{\psi_j^0},
\qquad (i,j = a,b)
\tag{15}
$$

(14)를 행렬 표현으로 나타내면:

$$
\alpha W_{aa} + \beta W_{ab} = \alpha E^1
\tag{16}
$$
(13)에다가  양 변 $\psi_b^0$로 inner product를 취해 위와 비슷한 방식으로 나타내면:
$$
\alpha W_{ba} + \beta W_{bb} = \beta E^1
\tag{17}
$$
(16)과 (17)을 행렬식으로 나타내보면, $\alpha, \beta$를 알아내는 문제는 곧 $W$ matrix의 diagonalization이라는 것을 알 수 있다. 

$$
\begin{pmatrix} W_{aa} & W_{ab} \\ W_{ba} & W_{bb} \end{pmatrix}
\begin{pmatrix} \alpha \\ \beta \end{pmatrix}
= E^1
\begin{pmatrix} \alpha \\ \beta \end{pmatrix}
\tag{18}
$$

> [!important] 결론
> - $\mathsf{W}$의 **eigenvalue** → first-order energy correction $E^1$
> - $\mathsf{W}$의 **eigenvector** → good states의 계수 $(\alpha, \beta)$


Nontrivial solution이 있으려면 determinant가 0이어야 하고, $W_{ba} = W_{ab}^*$를 쓰면

$$
\left(W_{aa} - E^1\right)\left(W_{bb} - E^1\right) - \left|W_{ab}\right|^2 = 0
\tag{19}
$$

$$
\boxed{\ E^1_\pm = \frac12\left[W_{aa} + W_{bb} \pm \sqrt{\left(W_{aa} - W_{bb}\right)^2 + 4\left|W_{ab}\right|^2}\ \right]\ }
\tag{20}
$$

이것이 **degenerate perturbation theory의 fundamental result**다. 두 root가 두 개의 perturbed energy에 대응한다.

## 5. Example 7.3: $\mathsf{W}$로 Example 7.2 다시 풀기

Diagonal element는 integrand가 odd function이라 0이다.

$$
W_{aa} = \epsilon m\omega^2 \int |\psi_0(x)|^2 x\, dx \int |\psi_1(y)|^2 y\, dy = 0,
\qquad
W_{bb} = 0
\tag{21}
$$

Off-diagonal element는

$$
W_{ab} = \epsilon m\omega^2 \int \psi_0(x)\, x\, \psi_1(x)\, dx \int \psi_1(y)\, y\, \psi_0(y)\, dy
\tag{22}
$$

두 적분은 같다. $x = \sqrt{\hbar/2m\omega}\left(a_+ + a_-\right)$와 $a_-\psi_1 = \psi_0$를 쓰면 각 적분은 $\sqrt{\hbar/2m\omega}$이므로

$$
W_{ab} = \epsilon m\omega^2 \cdot \frac{\hbar}{2m\omega} = \epsilon\frac{\hbar\omega}{2}
\tag{23}
$$

$$
\mathsf{W} = \epsilon\frac{\hbar\omega}{2}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
\tag{24}
$$

Normalized eigenvector는 $\frac{1}{\sqrt2}(1,1)^T$와 $\frac{1}{\sqrt2}(-1,1)^T$이고, 이는 exact solution에서 얻은 good states (11)과 정확히 같다. Eigenvalue는

$$
E^1 = \pm\epsilon\frac{\hbar\omega}{2}
\tag{25}
$$

## 6. $W_{ab} = 0$인 운 좋은 경우

$W_{ab} = 0$이면 eigenvector는 $(1,0)^T,\ (0,1)^T$이고 에너지는

$$
E^1_+ = W_{aa} = \bra{\psi_a^0}H'\ket{\psi_a^0},
\qquad
E^1_- = W_{bb} = \bra{\psi_b^0}H'\ket{\psi_b^0}
\tag{26}
$$

이는 **nondegenerate perturbation theory로 얻었을 결과와 정확히 같다.** $\psi_a^0,\ \psi_b^0$가 처음부터 good state였던 것이다. 그렇다면 good state를 **처음부터 추측할 수 있다면** 그냥 nondegenerate theory를 쓰면 된다. 이 아이디어가 [[양자 필기 - Good States in Degenerate Perturbation Theory]]의 theorem이다.

> [!warning] $\mathsf{W}$의 eigenvalue가 같을 때 (footnote 6)
> (20)에서 square root가 0이면 $E^1_+ = E^1_-$로 degeneracy가 first order에서 풀리지 않는다. 이때는 어떤 $\alpha,\ \beta$도 (18)을 만족해서 **good states를 여전히 모른다.** First-order energy 자체는 (20)으로 맞게 나오지만, higher-order correction이 필요하면 second-order degenerate perturbation theory (Problems 7.39–7.41)나 7.2.2의 theorem을 써야 한다.

## 7. 관련 연습문제

- **Problem 7.8**: $\mathsf{W}$에서 얻은 두 good states $\psi_\pm^0$가 (a) orthogonal하고 (b) $\bra{\psi_+^0}H'\ket{\psi_-^0} = 0$이며 (c) $\bra{\psi_\pm^0}H'\ket{\psi_\pm^0} = E^1_\pm$임을 보이기.
- **Problem 7.9 (HW2)**: Bead on a ring에 작은 "dimple" $H' = -V_0 e^{-x^2/a^2}$을 넣었을 때. (b) (20)으로 $E^1$, (c) good states, (d) theorem을 만족하는 hermitian operator 찾기.

# 궁금한 내용



# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Time-Independent Nondegenerate Perturbation Theory]]
- [[양자 필기 - Second-Order Energy Correction]]
- [[QM lecture note - Simple Harmonic Oscillator]]
- [[QM lecture note - Symmetry, Conservation Laws, and Degeneracy]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.2 도입부, Section 7.2.1 (Examples 7.2–7.3, Figures 7.4–7.5), footnote 6, Problems 7.8–7.9

# 다음 강의
- [[양자 필기 - Good States in Degenerate Perturbation Theory]] (Griffiths 7.2.2)


