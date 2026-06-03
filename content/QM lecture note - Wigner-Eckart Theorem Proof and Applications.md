---
title: "QM lecture note - Wigner-Eckart Theorem Proof and Applications"
date: "2026-06-03"
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
[[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]에서 Spherical tensor의 정의, Cartesian tensor 분해, commutation relation, tensor product를 다루었다. 마지막에 Wigner-Eckart theorem을 statement만 소개했다.

# 오늘의 핵심

- **Selection rule**: $\bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m} = 0$ unless $m' = q + m$ and $|j - k| \le j' \le j + k$
- **Wigner-Eckart Theorem**: 행렬원소를 CG coefficient × double-bar matrix element로 인수분해
- **증명 전략**: 텐서 연산자의 recursion relation이 CG coefficient의 recursion relation과 동일한 구조 → 두 양이 비례
- **Example 6 (Scalar)**: rank-0 tensor는 $j, m$을 바꾸지 않음
- **Example 7 (Vector)**: rank-1 tensor에 대한 selection rule $\Delta m = \pm1, 0$, $\Delta j = \pm1, 0$ (0→0 금지)
- **Projection Theorem**: $j = j'$이면 벡터 연산자의 행렬원소가 $\mathbf{J}$의 행렬원소에 비례

# 필기 내용

## 1. Selection Rules (Section 3.11.2)
텐서 연산자 행렬원소 $\bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m}$에 대한 두 가지 kinematic 제한이 있다.

### m-selection rule

$$
\bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m} = 0 \quad \text{unless} \quad m' = q + m
\tag{3.471}
$$

> [!note] AI 보충 — $\alpha$의 의미
> 상태 $\ket{\alpha, j, m}$에서 $\alpha$는 $j$와 $m$으로 기술되지 않는 나머지 양자수 전체를 총칭하는 레이블이다. 수소 원자라면 $\alpha = n$ (주양자수), 더 일반적으로는 에너지, 래디얼 양자수, 기타 보존량이 될 수 있다.
>
> Double-bar matrix element $\langle\alpha' j'\, \|\, T^{(k)}\, \|\, \alpha j\rangle$는 이 동역학적 정보에 의존하지만, $m$, $m'$, $q$에는 의존하지 않는다. 즉 정리는 "기하학(회전)과 동역학을 분리"한 것이다.


**Proof**: commutation relation $[J_z, T_q^{(k)}] = \hbar q\, T_q^{(k)}$를 이용한다.

$$
\bra{\alpha', j', m'}\left([J_z,\, T_q^{(k)}] - \hbar q\, T_q^{(k)}\right)\ket{\alpha, j, m} = [(m' - m)\hbar - \hbar q]\,\bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m} = 0
$$

따라서 $m' \ne q + m$이면 행렬원소가 0이다.

**다른 관점**: rotation operator $\mathcal{D}(\hat{z}, \phi)$를 이용하면 $T_q^{(k)}\ket{\alpha, j, m}$은 $z$축 회전에 대해 $e^{-i(q+m)\phi}$로 변환된다. 이것은 $m' = q + m$인 상태에만 projection이 살아남음을 뜻한다.

$$
\mathcal{D}(\hat{z}, \phi)\, T_q^{(k)}\ket{\alpha, j, m} = e^{-iq\phi}\, e^{-im\phi}\, T_q^{(k)}\ket{\alpha, j, m}
\tag{3.473}
$$

### 삼각 관계 (triangular relation)
CG coefficient가 0이 아니려면 세 각운동량이 삼각 부등식을 만족해야 한다:

$$
|j - k| \le j' \le j + k
\tag{3.475}
$$

이것은 CG coefficient에 대한 selection rule에서 바로 나온다.

## 2. Wigner-Eckart Theorem

### Statement

$$
\bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m} = \langle jk;\, mq\, |\, jk;\, j'm'\rangle\, \frac{\langle\alpha' j'\, \|\, T^{(k)}\, \|\, \alpha j\rangle}{\sqrt{2j' + 1}}
\tag{3.474}
$$

여기서 $\langle\alpha' j'\, \|\, T^{(k)}\, \|\, \alpha j\rangle$는 **double-bar matrix element** (= reduced matrix element)로, $m$, $m'$, $q$에 **전혀 무관**하다.

### 정리의 의미
행렬원소는 두 인자의 곱으로 인수분해된다:

1. **CG coefficient** $\langle jk;\, mq | jk;\, j'm'\rangle$: 오직 기하학적 정보 (회전 방향)에만 의존. $\alpha$, 구체적인 연산자의 성질과는 무관.
2. **Double-bar matrix element**: 오직 동역학적 정보 ($\alpha$, 래디얼 적분 등)에 의존. $m$, $m'$, $q$와는 무관.

따라서 $m$, $m'$, $q$가 다른 수많은 행렬원소들은 CG coefficient 비율로 모두 연결된다 — 딱 하나의 double-bar element만 알면 나머지는 전부 계산 가능하다.

> [!tip] 핵심 직관
> Wigner-Eckart theorem은 "물리 계산을 두 부분으로 분리"한다.
> - **어떻게 회전하는가** → CG coefficient (기하학)
> - **얼마나 강하게 coupling하는가** → double-bar element (동역학)
>
> 이 분리가 가능한 이유는 텐서 연산자가 정확히 각운동량의 회전 변환 규칙을 따르도록 정의되어 있기 때문이다.

## 3. 증명 (Proof)

### 증명 전략

Eq. (3.468b)를 이용해 $\bra{\alpha', j', m'}[J_\pm, T_q^{(k)}]\ket{\alpha, j, m}$을 두 가지 방법으로 전개한다.

**왼쪽에서 $J_\pm$을 작용**:

$$
\bra{\alpha', j', m'}[J_\pm, T_q^{(k)}]\ket{\alpha, j, m} = \hbar\sqrt{(k \mp q)(k \pm q + 1)}\,\bra{\alpha', j', m'} T_{q\pm1}^{(k)}\ket{\alpha, j, m}
\tag{3.476}
$$

**오른쪽에서 $J_\pm$을 작용** (3.191, 3.192 사용):

$$
\sqrt{(j' \pm m')(j' \mp m' + 1)}\,\bra{\alpha', j', m' \mp 1} T_q^{(k)}\ket{\alpha, j, m}
$$

$$
= \sqrt{(j \mp m)(j \pm m + 1)}\,\bra{\alpha', j', m'} T_q^{(k)}\ket{\alpha, j, m \pm 1}
$$

$$
\quad + \sqrt{(k \mp q)(k \pm q + 1)}\,\bra{\alpha', j', m'} T_{q\pm1}^{(k)}\ket{\alpha, j, m}
\tag{3.477}
$$

### 핵심 관찰

위의 recursion relation (3.477)을 CG coefficient의 recursion relation (3.369)와 비교한다.

치환: $j' \to j$, $m' \to m$, $j \to j_1$, $m \to m_1$, $k \to j_2$, $q \to m_2$

두 recursion relation은 **같은 계수 $a_{ij}$를 가진 1차 선형 동차 방정식** $\sum_j a_{ij} x_j = 0$의 형태다:

$$
\sum_j a_{ij} x_j = 0, \quad \sum_j a_{ij} y_j = 0
\tag{3.478}
$$

이 방정식 시스템은 각각을 개별적으로 풀 수 없지만, **비율은 결정**할 수 있다:

$$
\frac{x_j}{x_k} = \frac{y_j}{y_k} \quad \Rightarrow \quad x_j = c\, y_j
\tag{3.479}
$$

여기서 $c$는 $m$, $q$, $m'$에 무관한 **universal proportionality constant**이다.

### 결론

CG recursion에서 $\langle j_1 j_2;\, m_1 m_2 \pm 1\, |\, j_1 j_2;\, jm\rangle$이 텐서 행렬원소 $\bra{\alpha', j', m'} T_{q\pm1}^{(k)}\ket{\alpha, j, m}$에 대응하므로:

$$
\bra{\alpha', j', m'} T_{q\pm1}^{(k)}\ket{\alpha, j, m} = (\text{$m$, $q$, $m'$에 무관한 비례상수}) \times \langle jk;\, mq \pm 1\, |\, jk;\, j'm'\rangle
\tag{3.480}
$$

이 비례상수를 $\frac{\langle\alpha' j'\, \|\, T^{(k)}\, \|\, \alpha j\rangle}{\sqrt{2j'+1}}$로 정의하면 Wigner-Eckart theorem (3.474)이 증명된다. $\square$

## 4. 예제들 (Examples)

### Example 6: Scalar operator ($k = 0$)

$T_0^{(0)} = S$ (scalar)에 대해 Wigner-Eckart theorem을 적용하면:

$$
\bra{\alpha', j', m'} S \ket{\alpha, j, m} = \delta_{jj'}\,\delta_{mm'}\, \frac{\langle\alpha' j'\, \|\, S\, \|\, \alpha j\rangle}{\sqrt{2j' + 1}}
\tag{3.481}
$$

**이유**: scalar operator는 각운동량 0을 더하는 것과 같으므로 ($k = 0$), CG coefficient $\langle j0;\, m0\, |\, j0;\, j'm'\rangle = \delta_{jj'}\delta_{mm'}$가 된다. 따라서 scalar operator는 $j$와 $m$을 바꾸지 못한다.

### Example 7: Vector operator ($k = 1$)

벡터 연산자 $\mathbf{V}$는 구면 텐서 언어로 rank-1 tensor이고, 구면 성분은 $V_{q=\pm1, 0}$이다.

Selection rule:

$$
\Delta m \equiv m' - m = \pm 1, 0 \qquad \Delta j \equiv j' - j = \begin{cases} \pm 1 \\ 0 \end{cases}
\tag{3.482}
$$

**추가 규칙**: $0 \to 0$ 전이는 금지. ($j = j' = 0$이면 CG coefficient가 0)

이 selection rule은 복사 이론에서 근본적인 중요성을 가진다 — 방출 광자의 장파장 극한에서 얻어지는 **dipole selection rule**이다.

## 5. Projection Theorem

### Statement

$j = j'$인 경우, Wigner-Eckart theorem을 벡터 연산자 $\mathbf{V}$에 적용하면 특히 단순한 형태가 된다:

$$
\bra{\alpha', jm'} V_q \ket{\alpha, jm} = \frac{\bra{\alpha', jm}\mathbf{J}\cdot\mathbf{V}\ket{\alpha, jm}}{\hbar^2 j(j+1)}\, \bra{jm'} J_q \ket{jm}
\tag{3.483}
$$

직관: **$j = j'$이면 벡터 연산자의 행렬원소는 $\mathbf{J}$의 행렬원소에 비례한다.**

### Proof 개요

(3.469)를 이용해 $\bra{\alpha', jm}\mathbf{J}\cdot\mathbf{V}\ket{\alpha, jm}$을 전개:

$$
\bra{\alpha', jm}\mathbf{J}\cdot\mathbf{V}\ket{\alpha, jm} = m\hbar\bra{\alpha', jm} V_0 \ket{\alpha, jm}
$$

$$
\quad + \frac{\hbar}{\sqrt{2}}\sqrt{(j+m)(j-m+1)}\,\bra{\alpha', jm-1} V_{-1}\ket{\alpha, jm}
$$

$$
\quad - \frac{\hbar}{\sqrt{2}}\sqrt{(j-m)(j+m+1)}\,\bra{\alpha', jm+1} V_{+1}\ket{\alpha, jm}
$$

$$
= c_{jm}\,\langle\alpha' j\, \|\, \mathbf{V}\, \|\, \alpha j\rangle
\tag{3.485}
$$

Wigner-Eckart theorem에 의해 모든 행렬원소는 double-bar element에 비례하고, $c_{jm}$은 $\alpha$, $\alpha'$, $\mathbf{V}$에 무관하다.

$\mathbf{J}\cdot\mathbf{V}$는 scalar operator이므로 ($[\mathbf{J}, \mathbf{J}\cdot\mathbf{V}] = 0$) $c_{jm}$은 $m$에도 무관 → $c_j$로 쓸 수 있다. $\mathbf{V} \to \mathbf{J}$, $\alpha' \to \alpha$로 놓으면:

$$
\bra{\alpha, jm} J^2 \ket{\alpha, jm} = c_j\,\langle\alpha j\, \|\, \mathbf{J}\, \|\, \alpha j\rangle \quad \Rightarrow \quad j(j+1)\hbar^2 = c_j\,\langle\alpha j\, \|\, \mathbf{J}\, \|\, \alpha j\rangle
\tag{3.486}
$$

따라서:

$$
\frac{\langle\alpha' j\, \|\, \mathbf{V}\, \|\, \alpha j\rangle}{\langle\alpha j\, \|\, \mathbf{J}\, \|\, \alpha j\rangle} = \frac{\bra{\alpha', jm}\mathbf{J}\cdot\mathbf{V}\ket{\alpha, jm}}{j(j+1)\hbar^2}
\tag{3.487}
$$

Wigner-Eckart를 $V_q$와 $J_q$ 양쪽에 적용하면, 같은 CG coefficient를 가지므로:

$$
\bra{\alpha', jm'} V_q \ket{\alpha, jm} = \frac{\bra{\alpha', jm}\mathbf{J}\cdot\mathbf{V}\ket{\alpha, jm}}{\hbar^2 j(j+1)}\, \bra{jm'} J_q \ket{jm}
\tag{3.488}
$$

$\square$

> [!note] AI 보충 — Projection Theorem의 직관
> 이름이 "Projection"인 이유: $j = j'$ 부분 공간 안에서는 **어떤 벡터 연산자 $\mathbf{V}$도 $\mathbf{J}$의 방향으로만 행렬원소를 가진다.** 즉 $\mathbf{J}$에 수직인 성분은 이 부분 공간에서 평균적으로 0이 된다.
>
> 고전적 유추: 각운동량 $\mathbf{J}$ 주위를 세차 운동하는 벡터 $\mathbf{V}$를 떠올리자. 시간 평균을 취하면 $\mathbf{J}$에 수직인 성분은 사라지고, $\mathbf{J}$ 방향 성분만 남는다. Projection theorem은 이 고전적 세차 운동의 양자역학적 버전이다.

# 궁금한 내용

> [!question] Eq. (3.479)에서 "two homogeneous linear equations with the same coefficients $a_{ij}$"라고 했는데, recursion relation의 어느 부분이 $a_{ij}$에 해당하는지 정확히 추적할 수 있는가?

> [!question] Projection theorem에서 $0 \to 0$ 전이가 금지되는 이유를 CG coefficient 관점에서 어떻게 이해하는가?

> [!question] Double-bar matrix element는 구체적으로 어떻게 계산하는가? 수소 원자에서의 예시는?

# AI의 보충 설명

## 증명의 핵심 아이디어 (수학적 구조)

증명에서 핵심은 **"같은 계수를 가진 두 선형 방정식 시스템의 해는 비례한다"**는 것이다.

CG coefficient $\langle jk; mq | jk; j'm' \rangle$와 텐서 행렬원소 $\bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m}$ 둘 다, 인접한 $m$, $q$ 값들과 정확히 같은 수치 계수로 연결된다. 이 계수들은 $J_\pm$ 행렬원소에서 나오기 때문에 양쪽에서 동일하다.

$$
\{a_{ij}\}_{CG} = \{a_{ij}\}_{tensor} \quad \Rightarrow \quad \bra{\alpha', j', m'} T_q^{(k)} \ket{\alpha, j, m} \propto \langle jk;\, mq\, |\, jk;\, j'm'\rangle
$$

비례상수가 $m$, $q$, $m'$에 무관한 것이 정리의 핵심이다.

# 연관 학습 노트

- [[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]
- [[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]
- [[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 3.11.2–3.11.4 (pp. 236–240)

# 원본 필기 이미지

