---
title: "QM lecture note - Time-Independent Perturbation Theory"
date: "2026-09-20"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의
2학기(양자역학 2)의 첫 강의. 1학기 마지막 필기는 [[QM lecture note - Density Operator and Entropy]]이다.

# 오늘의 핵심

- **OT**: 중간고사 2026-10-26 (Mon), 기말고사 2026-12-18 (Fri). 중간고사 전까지는 Chapter 5만 다룬다.
- **Perturbation theory**: 정확히 풀리지 않는 $H = H_0 + \lambda V$를, 이미 풀린 $H_0$의 해에서 출발해 $\lambda$의 power series로 근사한다.
- **Two-state problem**: exact solution을 전개하면 perturbation 결과가 나오고, 수렴 조건 $\left|\frac{2\lambda V_{12}}{E_1^0 - E_2^0}\right| < 1$이 필요하다. Perturbation이 작다고 무조건 통하는 것은 아니다.
- **Nondegenerate formal expansion**: projection operator $\phi_n$로 $\ket{n^0}$ 방향을 제거하여 inverse operator $\frac{1}{E_n^0 - H_0}$를 잘 정의한다.
- **결과**: $\Delta_n = \lambda V_{nn} + \lambda^2 \sum_{k \neq n}\frac{|V_{nk}|^2}{E_n^0 - E_k^0} + O(\lambda^3)$, $\ket{n^1} = \sum_{k\neq n}\frac{V_{kn}}{E_n^0 - E_k^0}\ket{k^0}$
- **Wave function renormalization**: $Z_n \simeq 1 - \lambda^2\sum_{k\neq n}\frac{|V_{kn}|^2}{(E_n^0 - E_k^0)^2}$, $1 - Z_n$은 $\ket{n^0}$ 밖으로의 "leakage" 확률.

# 필기 내용

## 0. OT — 2학기 강의 계획

| 항목 | 일정 |
|--|--|
| Midterm | 2026-10-26 (Mon) |
| Final test | 2026-12-18 (Fri) |

| 주차 | 범위 |
|--|--|
| Week 1–7 | Chapter 5 (Approximation methods) — 중간고사까지 이것만 배운다고? |
| Week 9–10 | Chapter 6 (partially) |
| Week 11–13 | Chapter 7 (partially) |
| Week 14–15 | Chapter 8 (partially) |

## Symbol table

| Symbol | Meaning |
|--|--|
| $H_0$ | Unperturbed Hamiltonian (이미 풀린 쉬운 Hamiltonian) |
| $V$ | Perturbation |
| $\lambda \in [0,1]$ | Perturbation parameter |
| $\ket{n^0}$, $E_n^0$ | $H_0$의 eigenket과 eigenvalue |
| $\ket{n}$, $E_n$ | 전체 Hamiltonian의 eigenket과 eigenvalue |
| $\Delta_n \equiv E_n - E_n^0$ | Energy shift |
| $\phi_n$ | $\ket{n^0}$을 제외한 projection operator |
| $V_{nk} \equiv \bra{n^0}V\ket{k^0}$ | Unperturbed basis에서의 matrix element |
| $Z_n$ | Wave function renormalization constant |

## 1. Chapter 5. Approximation Methods

Exact하게 못 푸는 문제를 대충(근사적으로) 풀기 위한 방법들.

### 5.1.1 Statement of the Problem — Perturbation theory가 뭔가?

Time-independent case. $H$가 풀고자 하는 어려운 Hamiltonian, $V$는 perturbation, $H_0$는 쉬운 Hamiltonian이다.

$$
H = H_0 + V
$$

$H_0$에 대해서는 이미 다 풀었다고 치자.

$$
H_0\ket{n^0} = E_n^0\ket{n^0}
$$

목표는 아래 식을 만족하는 $\ket{n}$과 $E_n$을 구하는 것이다.

$$
(H_0 + V)\ket{n} = E_n\ket{n}
$$

Perturbation parameter $\lambda \in [0, 1]$을 도입한다.

$$
(H_0 + \lambda V)\ket{n} = E_n\ket{n}
$$

$\lambda$에 대해 expand한다. Solution will be a power series of $\lambda$.

- $\lambda = 0$ → unperturbed
- $\lambda = 1$ → fully perturbed

$E_n(\lambda)$, $\ket{n(\lambda)}$는 **analytic**해야만 한다. 그래야 이 접근법이 말이 된다.

### 5.1.2 The Two-State Problem

Perturbation theory를 적용할 수 있는 쉬운 예시. $\ket{1^0}$과 $\ket{2^0}$의 basis로 나타내고, perturbation에 off-diagonal term만 있다고 하자.

$$
H^0 = \begin{pmatrix} E_1^0 & 0 \\ 0 & E_2^0 \end{pmatrix}, \qquad V = \begin{pmatrix} 0 & V_{12} \\ V_{21} & 0 \end{pmatrix}
$$

$V$ 또한 Hermitian이어야 하므로 $V_{21} = V_{12}^*$이다.

풀어야 하는 Hamiltonian은

$$
H = H^0 + \lambda V = \begin{pmatrix} E_1^0 & \lambda V_{12} \\ \lambda V_{12}^* & E_2^0 \end{pmatrix}
$$

이런 matrix는 쉽게 eigenvalue를 구할 수 있다.

$$
a_0 = \frac{E_1^0 + E_2^0}{2}, \qquad a_3 = \frac{E_1^0 - E_2^0}{2}, \qquad a_1 = \lambda |V_{12}|
$$

로 치환하면 (위상은 eigenvalue에 영향을 주지 않는다),

$$
H \sim \begin{pmatrix} a_0 + a_3 & a_1 \\ a_1 & a_0 - a_3 \end{pmatrix}
$$

이것의 eigenvalue는 $E = a_0 \pm \sqrt{a_1^2 + a_3^2}$로 알려져 있다. 따라서,

$$
\left\{ \begin{matrix} E_1 \\ E_2 \end{matrix} \right\} = \frac{E_1^0 + E_2^0}{2} \pm \sqrt{\frac{(E_1^0 - E_2^0)^2}{4} + \lambda^2 |V_{12}|^2}
$$

$\lambda|V_{12}| \ll |E_1^0 - E_2^0|$이라면 아래와 같이 expansion할 수 있다.

$$
\sqrt{1 + \varepsilon} \simeq 1 + \frac{1}{2}\varepsilon - \frac{1}{8}\varepsilon^2 + \cdots \qquad (\varepsilon \ll 1)
$$

$$
\sqrt{a_1^2 + a_3^2} = a_3\sqrt{1 + \frac{a_1^2}{a_3^2}} \simeq a_3\left(1 + \frac{1}{2}\frac{a_1^2}{a_3^2} - \frac{1}{8}\frac{a_1^4}{a_3^4} + \cdots\right), \qquad \left(\frac{a_1}{a_3}\right)^2 \ll 1
$$

> [!warning] 필기 수정
> 필기에서 $\sqrt{1 + a_1^2/a_0^2}$로 적힌 부분은 $\sqrt{1 + a_1^2/a_3^2}$가 맞다. 또한 4차항의 계수는 $-\frac{1}{3}$이 아니라 바로 위 전개식과 같은 $-\frac{1}{8}$이다.

$$
\frac{a_1}{a_3} = \frac{2\lambda V_{12}}{E_1^0 - E_2^0}
$$

대입해서 전개하면,

$$
E_1(\lambda) = E_1^0 + \frac{\lambda^2 |V_{12}|^2}{E_1^0 - E_2^0} + \cdots, \qquad E_2(\lambda) = E_2^0 - \frac{\lambda^2|V_{12}|^2}{E_1^0 - E_2^0} + \cdots
$$

> [!note] AI 답변 — Level repulsion
> $E_1^0 > E_2^0$라 하면, 위쪽 level은 더 올라가고 아래쪽 level은 더 내려간다. 즉 off-diagonal coupling은 두 level을 서로 **밀어낸다** (level repulsion). 이 구조는 아래 일반론의 2차 에너지 보정 $\sum_{k\neq n}\frac{|V_{nk}|^2}{E_n^0 - E_k^0}$에서 그대로 다시 나타난다: 위에 있는 상태와 섞이면 내려가고, 아래에 있는 상태와 섞이면 올라간다.

### 수렴 조건 — 이 solution의 expansion이 수렴할 조건은?

$\sqrt{1 + \varepsilon} = \sum_{n=0}^\infty a_n \varepsilon^n$에 비율 판정법을 적용한다. (여기서 $a_n$은 binomial 계수)

$$
\lim_{n\to\infty}\left|\frac{a_n \varepsilon^n}{a_{n-1}\varepsilon^{n-1}}\right| = \lim_{n\to\infty}\left|-\frac{2n-3}{2n}\varepsilon\right| = |\varepsilon|
$$

$|\varepsilon| < 1$이어야 수렴한다. 여기서 $\varepsilon = (a_1/a_3)^2$이므로,

$$
\left|\frac{2\lambda V_{12}}{E_1^0 - E_2^0}\right| < 1
$$

이어야 perturbation theory가 통한다.

### Perturbation이 작다고 해서 무조건 perturbation theory가 통하는 건 아니다

예시) Free space에 깊이 $V_0$의 1D square-well potential ($-a < x < a$)이 있는 경우를 생각하자. 1D에서는 아무리 얕은 attractive well이라도 bound state가 존재하며, 얕은 well의 bound state energy는

$$
E = -\frac{2ma^2}{\hbar^2}|\lambda V_0|^2
$$

> [!warning] 필기 수정
> 필기의 $|\lambda V_0^2|$는 $|\lambda V_0|^2$가 맞다.

만약 potential의 부호를 뒤집어 repulsive barrier ($\lambda \to -\lambda$)로 만들면, 위 식은 $\lambda^2$에만 의존하므로 perturbation theory는 이 경우에도 bound state가 있다고 말한다. 그러나 실제로는 repulsive barrier에서 bound state가 있을 수 없다.

> [!note] AI 답변 — 무엇이 잘못된 것인가?
> 실제 bound state energy를 $\lambda$의 함수로 쓰면 대략 $E(\lambda) \propto -\lambda^2\,\theta(\lambda)$ 꼴이다. $\lambda > 0$에서만 bound state가 존재하고 $\lambda < 0$에서는 사라진다. 이 함수는 $\lambda = 0$에서 **analytic하지 않다** — 양쪽의 Taylor 전개가 다르기 때문이다.
>
> Perturbation series는 $\lambda = 0$ 근방의 power series이므로, 원리적으로 $\lambda$와 $-\lambda$를 구분하지 못한다. 따라서 5.1.1에서 강조한 "$E_n(\lambda)$, $\ket{n(\lambda)}$가 analytic해야 한다"는 조건이 깨진 예시이다. 결국 perturbation의 **크기**가 작은 것만으로는 부족하고, unperturbed state에서 연속적으로(analytic하게) 이어지는 상태여야 perturbation theory가 의미를 가진다. 이 예시의 bound state는 애초에 $\lambda = 0$(free particle)에는 존재하지 않던 상태가 새로 생긴 것이다.

## 2. Formal Development of Perturbation Expansion — Nondegenerate Case

$H_0\ket{n^0} = E_n^0\ket{n^0}$을 만족하는 eigenket의 set $\{\ket{n^0}\}$은 complete하다.

> [!warning] 필기 수정
> 필기의 $H_0\ket{n^0} = E_n^0\ket{n}$은 우변이 $\ket{n^0}$이어야 한다.

$$
(H_0 + \lambda V)\ket{n}_\lambda = E_n^{(\lambda)}\ket{n}_\lambda
\tag{5.1.19}
$$

우리의 목표는 $\ket{n}_\lambda$, $E_n^{(\lambda)}$를 구하는 것. 이들이 $\lambda$의 함수임을 나타내기 위해 $\lambda$를 표기하지만, 이하 생략한다.

$$
(H_0 + \lambda V)\ket{n} = E_n\ket{n}
$$

Perturbation에 의한 energy shift를 정의한다.

$$
\Delta_n \equiv E_n - E_n^0
$$

식 (5.1.19)를 다시 쓰면,

$$
(H_0 + \lambda V)\ket{n} = (\Delta_n + E_n^0)\ket{n}
$$

Unperturbed와 관련된 항을 좌변으로 모아준다.

$$
(E_n^0 - H_0)\ket{n} = (\lambda V - \Delta_n)\ket{n}
\tag{5.1.21}
$$

양변을 $E_n^0 - H_0$로 나누어 아래 식을 세우고 싶어진다.

$$
\ket{n} = \frac{\lambda V - \Delta_n}{E_n^0 - H_0}\ket{n}
$$

그러나 $\ket{n}$에 $\ket{n^0}$ 성분이 있다면 $(E_n^0 - H_0)\ket{n^0} = 0$이 되어 분모가 정의되지 않는다.

그러나! 식 (5.1.21)의 우변에는 문제가 되는 $\ket{n^0}$ 성분이 없다.

$$
\bra{n^0}(\lambda V - \Delta_n)\ket{n} = \bra{n^0}(\lambda V + E_n^0 - E_n)\ket{n} = \bra{n^0}(\lambda V - H_0 - \lambda V + E_n^0)\ket{n} = \bra{n^0}(E_n^0 - H_0)\ket{n} = 0
$$

> [!warning] 필기 수정
> 필기에서 "식 5.12의 우변"은 식 (5.1.21)의 우변을 말한다.

이 성질을 이용해, $\ket{n^0}$을 제외한 공간에서 역연산자를 정의할 수 있다.

$\ket{n}$을 $\{\ket{m^0}\}$의 linear combination으로 나타내자. 그러나 $\ket{n^0}$은 제외하고.

$$
\ket{n} = \sum_{m\neq n} c_m \ket{m^0}, \qquad c_m = \braket{m^0|n}
$$

Projection operator도 $\ket{n^0}$을 빼고 정의하자. 이건 $\ket{n^0}$ 성분만 걸러 없애는 필터 같은 역할을 한다.

$$
\phi_n = 1 - \ket{n^0}\bra{n^0} = \sum_{k\neq n}\ket{k^0}\bra{k^0}
$$

이 필터를 inverse operator 앞에 붙여주면 연산자가 잘 정의된다.

$$
\frac{1}{E_n^0 - H_0}\phi_n = \sum_{k\neq n}\frac{1}{E_n^0 - E_k^0}\ket{k^0}\bra{k^0}
$$

$(\lambda V - \Delta_n)\ket{n}$에 $\ket{n^0}$ 성분이 없으므로, 식 (5.1.21)을 이렇게 쓸 수 있다.

> [!warning] 필기 수정
> 필기의 "식 2.22"는 식 (5.1.21)을 말한다.

$$
(E_n^0 - H_0)\ket{n} = \phi_n(\lambda V - \Delta_n)\ket{n}
$$

$$
\ket{n} \overset{?}{=} \frac{\phi_n}{E_n^0 - H_0}(\lambda V - \Delta_n)\ket{n}
$$

그러나 이것은 식 (5.1.21)의 우변을 0으로 만들 뿐, $\ket{n}$에는 $\ket{n^0}$ 성분이 있을 것이다. ($E_n^0 - H_0$가 $\ket{n^0}$ 성분을 죽이므로, 그 성분은 이 식으로 결정되지 않는다.) Exactly 쓰면,

$$
\ket{n} = c_n(\lambda)\ket{n^0} + \frac{\phi_n}{E_n^0 - H_0}(\lambda V - \Delta_n)\ket{n}
$$

$$
c_n(\lambda) = \braket{n^0|n}, \qquad \lim_{\lambda\to 0}c_n(\lambda) = 1
$$

$c_n(\lambda)$를 구하기 귀찮으니까, 원래의 normalization convention $\braket{n|n} = 1$을 버리고,

$$
\braket{n^0|n} = c_n(\lambda) = 1
$$

라고 그냥 정하자. 사실 학부 양자역학에서는 이러한 점을 당연하게 여기고 넘겼다.

정리하면, 이제 우린 이걸 가지고 있다.

$$
\ket{n} = \ket{n^0} + \frac{\phi_n}{E_n^0 - H_0}(\lambda V - \Delta_n)\ket{n}
\tag{5.1.34}
$$

그리고 $\bra{n^0}(\lambda V - \Delta_n)\ket{n} = 0$, 즉 $\bra{n^0}\lambda V\ket{n} = \Delta_n\braket{n^0|n}$라는 점에서,

$$
\Delta_n = \lambda\bra{n^0}V\ket{n}
\tag{5.1.35}
$$

이란 걸 알 수 있다.

### Perturbation expansion

$\ket{n}$과 $\Delta_n$을 perturbation expansion하면,

$$
\ket{n} = \ket{n^0} + \lambda\ket{n^1} + \lambda^2\ket{n^2} + \cdots
$$

$$
\Delta_n = \lambda\Delta_n^1 + \lambda^2\Delta_n^2 + \cdots
$$

$\ket{n^0}$을 제외한 ket ($\ket{n^1}, \ket{n^2}, \dots$)에는 $\ket{n^0}$ 성분이 없음에 주목. ($\braket{n^0|n} = 1$ convention의 결과)

이걸 $\Delta_n = \lambda\bra{n^0}V\ket{n}$에 대입.

$$
\lambda\Delta_n^1 + \lambda^2\Delta_n^2 + \cdots = \lambda\left\{\bra{n^0}V\ket{n^0} + \lambda\bra{n^0}V\ket{n^1} + \cdots\right\}
$$

$\lambda$의 차수가 같은 항의 계수를 비교.

| Order | Energy shift |
|--|--|
| $O(\lambda^1)$ | $\Delta_n^1 = \bra{n^0}V\ket{n^0}$ |
| $O(\lambda^2)$ | $\Delta_n^2 = \bra{n^0}V\ket{n^1}$ |
| $\vdots$ | $\vdots$ |
| $O(\lambda^k)$ | $\Delta_n^k = \bra{n^0}V\ket{n^{k-1}}$ |

즉, $k$차 에너지 보정을 구하려면 $(k-1)$차 ket 보정만 알면 된다.

그리고 perturbation expansion을 (5.1.34)에 대입하면,

$$
\lambda\ket{n^1} + \lambda^2\ket{n^2} + \cdots = \frac{\phi_n}{E_n^0 - H_0}\left(\lambda V - \lambda\Delta_n^1 - \lambda^2\Delta_n^2 - \cdots\right)\left\{\ket{n^0} + \lambda\ket{n^1} + \lambda^2\ket{n^2} + \cdots\right\}
$$

$\Delta_n^k\ket{n^0}$ 항은 $\phi_n\ket{n^0} = 0$이라 무시한다.

$\lambda$의 1차항을 비교하면 $\ket{n^1}$을 구할 수 있다.

$$
O(\lambda): \quad \ket{n^1} = \frac{\phi_n}{E_n^0 - H_0}V\ket{n^0} = \sum_{k\neq n}\ket{k^0}\bra{k^0}\frac{V}{E_n^0 - H_0}\ket{n^0} = \sum_{k\neq n}\frac{\bra{k^0}V\ket{n^0}}{E_n^0 - E_k^0}\ket{k^0}
$$

$$
\ket{n^1} = \sum_{k\neq n}\frac{\bra{k^0}V\ket{n^0}}{E_n^0 - E_k^0}\ket{k^0}
$$

> [!note] AI 답변 — 연산자 순서에 관하여
> 두 번째 등호에서 $\frac{1}{E_n^0 - H_0}$가 $V$보다 오른쪽으로 옮겨간 것처럼 적혀 있지만, 정확히는 $\frac{\phi_n}{E_n^0 - H_0} = \sum_{k\neq n}\frac{\ket{k^0}\bra{k^0}}{E_n^0 - E_k^0}$를 먼저 전개한 뒤 $V\ket{n^0}$에 작용시키는 것이다. 최종 결과는 동일하다.

이를 $\Delta_n^2 = \bra{n^0}V\ket{n^1}$에 적용,

$$
\Delta_n^2 = \bra{n^0}V\frac{\phi_n}{E_n^0 - H_0}V\ket{n^0} = \sum_{k\neq n}\frac{\bra{k^0}V\ket{n^0}}{E_n^0 - E_k^0}\bra{n^0}V\ket{k^0} = \sum_{k\neq n}\frac{|V_{nk}|^2}{E_n^0 - E_k^0}
$$

where

$$
V_{nk} \equiv \bra{n^0}V\ket{k^0} \neq \bra{n}V\ket{k}
$$

앞으로 모든 matrix element는 **unperturbed eigenstate basis**로 나타낼 것이다.

**Ground state의 2차 energy shift는 항상 음수**이다. 모든 $k \neq 0$에 대해 $E_0^0 < E_k^0$이므로,

$$
\Delta_0^2 = \sum_{k\neq 0}\frac{|V_{0k}|^2}{E_0^0 - E_k^0} < 0
$$

정리하면,

$$
\Delta_n = \lambda V_{nn} + \lambda^2\sum_{k\neq n}\frac{|V_{nk}|^2}{E_n^0 - E_k^0} + O(\lambda^3)
$$

## 3. Wave Function Renormalization

$\braket{n^0|n} = 1$이라고 정했기 때문에, $\ket{n}$은 한 번 더 제대로 된 normalization을 거쳐야 한다. 그 결과를 $\ket{n}_N$이라 두고, 비례상수 $Z_n^{1/2}$을 쓰자.

$$
\ket{n}_N = Z_n^{1/2}\ket{n}
\tag{5.1.45}
$$

$\braket{n^0|n} = 1$임을 이용하면,

$$
\braket{n^0|n}_N = Z_n^{1/2}
$$

(5.1.45)의 norm을 취하면 (양변 제곱),

$$
{}_N\braket{n|n}_N = 1 = Z_n\braket{n|n}
$$

$$
Z_n = \frac{1}{\braket{n|n}}
$$

> [!warning] 필기 수정
> 필기에는 $1 = Z_n\braket{n^0|n^0}$, $Z_n = 1/\braket{n^0|n^0}$로 적혀 있지만, $\braket{n^0|n^0} = 1$이므로 이러면 $Z_n = 1$이 되어버린다. 올바른 식은 $Z_n = 1/\braket{n|n}$이고, 바로 아래의 $Z_n^{-1}$ 전개도 실제로 $\braket{n|n}$을 전개하고 있다.

$Z_n^{-1}$을 perturbation expansion하면, $\braket{n^0|n^k} = \delta_{0k}$임에 주목하여,

$$
Z_n^{-1} = \left(\bra{n^0} + \lambda\bra{n^1} + \lambda^2\bra{n^2} + \cdots\right)\left(\ket{n^0} + \lambda\ket{n^1} + \lambda^2\ket{n^2} + \cdots\right)
$$

$$
= 1 + 2\lambda\,\text{Re}\braket{n^1|n^0} + \lambda^2\left\{\braket{n^1|n^1} + 2\,\text{Re}\braket{n^0|n^2}\right\} + O(\lambda^3)
$$

$\braket{n^1|n^0} = 0$, $\braket{n^0|n^2} = 0$이므로,

$$
Z_n^{-1} = 1 + \lambda^2\braket{n^1|n^1} + O(\lambda^3) = 1 + \lambda^2\sum_{k\neq n}\frac{|V_{kn}|^2}{(E_n^0 - E_k^0)^2} + O(\lambda^3)
$$

역수를 취하고 $\lambda^2$가 작다는 근사를 취하면,

$$
Z_n \simeq 1 - \lambda^2\sum_{k\neq n}\frac{|V_{kn}|^2}{(E_n^0 - E_k^0)^2}
$$

두 번째 항의 값을, perturbation에 의해 $\ket{n}$이 $\ket{n^0}$이 아닌 상태로 될 확률인 **"leakage"** 로 해석할 수 있다.

> [!note] AI 답변 — $Z_n$의 확률 해석
> $|{}_N\braket{n^0|n}|^2 = |Z_n^{1/2}|^2 = Z_n$ 이므로, $Z_n$ 자체가 "perturbed state $\ket{n}_N$을 측정했을 때 unperturbed state $\ket{n^0}$에서 발견될 확률"이다. 따라서 $1 - Z_n \simeq \lambda^2\sum_{k\neq n}\frac{|V_{kn}|^2}{(E_n^0 - E_k^0)^2}$는 다른 unperturbed state $\ket{k^0}$들로 새어나간 확률의 합이다. 각 항 $\left|\frac{\lambda V_{kn}}{E_n^0 - E_k^0}\right|^2$가 곧 $\ket{k^0}$로의 leakage 확률이다.
>
> 이 식은 perturbation theory가 잘 작동하기 위한 조건도 알려준다: $|\lambda V_{kn}| \ll |E_n^0 - E_k^0|$. 즉 **matrix element가 level spacing보다 작아야** 한다. Two-state problem의 수렴 조건과 같은 내용이다. Level spacing이 0인 degenerate case에서는 이 조건이 깨지므로 별도의 처리가 필요하다.

# 궁금한 내용

# 연관 학습 노트

- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]
- [[QM lecture note - Simple Harmonic Oscillator]]

# 다음 강의

같은 날 이어진 예제: [[QM lecture note - Nondegenerate Perturbation Theory Examples]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.1

# 원본 필기 이미지
![[QM 1st week.pdf]]