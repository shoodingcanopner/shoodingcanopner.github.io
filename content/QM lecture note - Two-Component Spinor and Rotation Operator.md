---
title: "QM lecture note - Two-Component Spinor and Rotation Operator"
date: "2026-05-13"
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
[[QM lecture note - Kramers' Degeneracy]]에서 Kramers' degeneracy theorem을 증명하고, E/B-field 상호작용에서의 time reversal 대칭 여부를 논의했다.

# 오늘의 핵심

- 다시 **Chapter 3**으로 돌아감: $[J_i, J_j] = i\hbar\,\varepsilon_{ijk}\,J_k$
- 공간 차원이 2이면 → Spin-½과 동일한 표현식: **Two-component spinor**
- Pauli matrix $\sigma_i, \sigma_j, \sigma_k$의 성질 6가지
- $\vec{\sigma}\cdot\vec{a}$의 matrix 표현과 핵심 identity: $(\vec{\sigma}\cdot\vec{a})(\vec{\sigma}\cdot\vec{b}) = \mathbb{1}\,\vec{a}\cdot\vec{b} + i\vec{\sigma}\cdot(\vec{a}\times\vec{b})$
- Rotation operator의 **명시적 유도**: $D(\hat{n},\phi) = \mathbb{1}\cos\frac{\phi}{2} - i(\vec{\sigma}\cdot\hat{n})\sin\frac{\phi}{2}$
- $D(\hat{n},2\pi) = -\mathbb{1}$: 2차원 표현의 핵심 특성, 일반적으로 $e^{-i2\pi\vec{J}\cdot\hat{n}/\hbar}\ket{j,m} = (-1)^{2j}\ket{j,m}$
- $\hat{n}$ 방향 spinor의 명시적 표현
- **SO(3)과 SU(2)의 비교**: Lie group, Lie algebra, parameter space

# 필기 내용

## 1. Chapter 3으로의 복귀: 각운동량 교환 관계

지난 시간에 $[J_i, J_j] = i\hbar\,\varepsilon_{ijk}\,J_k$를 유도했다.

**공간의 차원이 1이라면:** 모든 연산자가 스칼라이므로 모든 연산자가 commute한다. $[J_i, J_j] = i\hbar\,\varepsilon_{ijk}\,J_k$의 관계를 따르는 0이 아닌 operator는 없다.

**공간 차원이 2라면:** Spin $\frac{1}{2}$과 표현식이 같다 → **Two-component spinor**.

## 2. Two-Component Spinor

Basis $\ket{+}, \ket{-}$에서 $S_k\ket{\pm} = \pm\frac{\hbar}{2}\ket{\pm}$:

$$
\ket{+} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \equiv \chi_+, \qquad \ket{-} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \equiv \chi_-
$$

$$
\bra{+} = \begin{pmatrix} 1 & 0 \end{pmatrix} = \chi_+^\dagger, \qquad \bra{-} = \begin{pmatrix} 0 & 1 \end{pmatrix} = \chi_-^\dagger
$$

임의의 ket과 bra의 표현:

$$
\ket{\alpha} = \begin{pmatrix} \braket{+|\alpha} \\ \braket{-|\alpha} \end{pmatrix}, \qquad \bra{\alpha} = \begin{pmatrix} \braket{\alpha|+} & \braket{\alpha|-} \end{pmatrix}
$$

Spinor 표현:

$$
\chi = \begin{pmatrix} \braket{+|\alpha} \\ \braket{-|\alpha} \end{pmatrix} = \begin{pmatrix} C_+ \\ C_- \end{pmatrix} = C_+\chi_+ + C_-\chi_-
$$

## 3. Pauli Matrices

$S_k$의 matrix representation: $\braket{\pm|S_k|\pm} = \pm\frac{\hbar}{2}\braket{\pm|\pm}$, $\braket{\pm|S_k|\mp} = -\frac{\hbar}{2}\braket{\pm|\mp}$

$$
S_k = \frac{\hbar}{2}\left\{\ket{+}\bra{+} - \ket{-}\bra{-}\right\} = \frac{\hbar}{2}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \frac{\hbar}{2}\sigma_k
$$

$$
S_i = \frac{\hbar}{2}\left\{\ket{+}\bra{-} + \ket{-}\bra{+}\right\}, \qquad S_j = \frac{\hbar}{2}i\left\{-\ket{+}\bra{-} + \ket{-}\bra{+}\right\}
$$

$$
S_i = \frac{\hbar}{2}\sigma_i, \quad S_j = \frac{\hbar}{2}\sigma_j
$$

$$
\sigma_i = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_j = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_k = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

> [!tip] 기댓값
> $\braket{S_k} = \braket{\alpha|S_k|\alpha} = \sum_{a'=\pm}\sum_{a''=\pm}\braket{\alpha|a'}\braket{a'|S_k|a''}\braket{a''|\alpha} = \frac{\hbar}{2}\chi^\dagger\sigma_k\chi$

## 4. Properties of Pauli Matrices

1. $\sigma^2 = \mathbb{1}$: 모든 Pauli matrix는 **orthogonal matrix** (자기 자신이 inverse)
2. $\sigma_i\sigma_j = -\sigma_j\sigma_i$ (일종의 antisymmetry: 연산 순서를 바꾸면 음수가 붙음)
3. $[\sigma_i, \sigma_j] = 2i\,\varepsilon_{ijk}\,\sigma_k$
4. $\det(\sigma) = -1$
5. $\sigma^\dagger = \sigma$: **Hermitian**
6. $\text{Tr}(\sigma) = 0$

## 5. $\vec{\sigma}\cdot\vec{a}$의 계산

Pauli matrix의 vector $\vec{\sigma} = (\sigma_i, \sigma_j, \sigma_k)$를 정의하고, 임의의 벡터 $\vec{a} = (a_i, a_j, a_k)$와의 내적을 계산한다:

$$
\vec{\sigma}\cdot\vec{a} = a_i\sigma_i + a_j\sigma_j + a_k\sigma_k = \begin{pmatrix} 0 & a_i \\ a_i & 0 \end{pmatrix} + \begin{pmatrix} 0 & -ia_j \\ ia_j & 0 \end{pmatrix} + \begin{pmatrix} a_k & 0 \\ 0 & -a_k \end{pmatrix}
$$

$$
\vec{\sigma}\cdot\vec{a} = \begin{pmatrix} a_k & a_i - ia_j \\ a_i + ia_j & -a_k \end{pmatrix}
$$

## 6. 핵심 Identity: $(\vec{\sigma}\cdot\vec{a})(\vec{\sigma}\cdot\vec{b})$

두 행렬의 곱을 직접 계산하면:

$$
(\vec{\sigma}\cdot\vec{a})(\vec{\sigma}\cdot\vec{b}) = \begin{pmatrix} a_k & a_i - ia_j \\ a_i + ia_j & -a_k \end{pmatrix}\begin{pmatrix} b_k & b_i - ib_j \\ b_i + ib_j & -b_k \end{pmatrix}
$$

대각 성분의 (1,1) 원소를 전개하면 $\vec{a}\cdot\vec{b} + i[\vec{a}\times\vec{b}]_k$가 나오고, 나머지도 마찬가지로:

$$
= \begin{pmatrix} \vec{a}\cdot\vec{b} + i[\vec{a}\times\vec{b}]_k & \cdots \\ \cdots & \vec{a}\cdot\vec{b} - i[\vec{a}\times\vec{b}]_k \end{pmatrix}
$$

한편:

$$
i\vec{\sigma}\cdot(\vec{a}\times\vec{b}) = \begin{pmatrix} i[\vec{a}\times\vec{b}]_k & [\vec{a}\times\vec{b}]_j + i[\vec{a}\times\vec{b}]_i \\ -[\vec{a}\times\vec{b}]_j + i[\vec{a}\times\vec{b}]_i & -i[\vec{a}\times\vec{b}]_k \end{pmatrix}
$$

이것을 대입하면 결국:

$$
\boxed{(\vec{\sigma}\cdot\vec{a})(\vec{\sigma}\cdot\vec{b}) = \mathbb{1}\,\vec{a}\cdot\vec{b} + i\vec{\sigma}\cdot(\vec{a}\times\vec{b})}
$$

**특수한 경우** ($\vec{a} = \vec{b}$):

$$
(\vec{\sigma}\cdot\vec{a})^2 = \mathbb{1}\,|\vec{a}|^2
$$

특히 $|\vec{a}|^2 = 1$일 때:

$$
(\vec{\sigma}\cdot\hat{a})^n = \begin{cases} \vec{\sigma}\cdot\hat{a} & (n \text{ is odd}) \\ \mathbb{1} & (n \text{ is even}) \end{cases}
$$

> [!tip] 이 성질이 나중에 증명할 때 유용하게 쓰인다.

## 7. Rotation Operator의 명시적 유도

지난 시간에 $e^{-i\phi S_z/\hbar} = \mathbb{1}\cos\frac{\phi}{2} - i\sigma_y\sin\frac{\phi}{2}$을 이용했다. 이제 이것을 **일반적인 축에 대해** 증명한다.

$\vec{S}\cdot\hat{n} = \frac{\hbar}{2}\vec{\sigma}\cdot\hat{n}$이므로:

$$
D(\hat{n},\phi) = \exp\left(-i\frac{\phi}{\hbar}\vec{S}\cdot\hat{n}\right) = \exp\left(-i\frac{\phi}{2}\vec{\sigma}\cdot\hat{n}\right)
$$

Taylor 전개:

$$
\exp\left(-i\frac{\phi}{2}\vec{\sigma}\cdot\hat{n}\right) = \mathbb{1} + \left(-i\frac{\phi}{2}\right)(\vec{\sigma}\cdot\hat{n}) + \frac{1}{2!}\left(-i\frac{\phi}{2}\right)^2(\vec{\sigma}\cdot\hat{n})^2 + \frac{1}{3!}\left(-i\frac{\phi}{2}\right)^3(\vec{\sigma}\cdot\hat{n})^3 + \cdots
$$

$(\vec{\sigma}\cdot\hat{n})^2 = \mathbb{1}$을 반복 적용하면:

$$
= \mathbb{1}\left[1 - \frac{1}{2!}\left(\frac{\phi}{2}\right)^2 + \frac{1}{4!}\left(\frac{\phi}{2}\right)^4 - \cdots\right] - i(\vec{\sigma}\cdot\hat{n})\left[\frac{\phi}{2} - \frac{1}{3!}\left(\frac{\phi}{2}\right)^3 + \cdots\right]
$$

$$
= \mathbb{1}\cos\frac{\phi}{2} - i(\vec{\sigma}\cdot\hat{n})\sin\frac{\phi}{2}
$$

$$
\boxed{D(\hat{n},\phi) = \mathbb{1}\cos\frac{\phi}{2} - i(\vec{\sigma}\cdot\hat{n})\sin\frac{\phi}{2} = \mathbb{1}\cos\frac{\phi}{2} - i\frac{2}{\hbar}\vec{S}\cdot\hat{n}\sin\frac{\phi}{2}}
$$

Matrix 표현:

$$
D(\hat{n},\phi) = \begin{pmatrix} \cos\frac{\phi}{2} - in_z\sin\frac{\phi}{2} & (-in_x - n_y)\sin\frac{\phi}{2} \\ (-in_x + n_y)\sin\frac{\phi}{2} & \cos\frac{\phi}{2} + in_z\sin\frac{\phi}{2} \end{pmatrix}
$$

## 8. $D(\hat{n}, 2\pi) = -\mathbb{1}$

축이나 $\hat{n}$에 상관없이 $2\pi$만큼 돌리면:

$$
D(\hat{n}, 2\pi) = \mathbb{1}\cos\pi - i(\vec{\sigma}\cdot\hat{n})\sin\pi = -\mathbb{1}
$$

> [!warning] 이상한 결과
> $2\pi$ 회전이 항등 변환이 아니라 $-\mathbb{1}$이다! 이것은 **2차원 표현 (spin-½)의 특성**이다.

일반적으로:

$$
e^{-i2\pi\vec{J}\cdot\hat{n}/\hbar}\ket{j,m} = (-1)^{2j}\ket{j,m}
$$

- Integer spin: $2\pi$ 회전 → $+\mathbb{1}$ (원래 상태)
- Half-integer spin: $2\pi$ 회전 → $-\mathbb{1}$ ($4\pi$ 회전해야 원래 상태)

## 9. $\hat{n}$ 방향 Spinor의 명시적 표현

$\hat{n}$ 방향의 spinor $\chi$를 명시적으로 구해보자. $\hat{n}$은 $z$축에서 $y$축으로 $\beta$만큼 돌리고, $z$축으로 $\alpha$만큼 돌린 방향이다.

$$
\chi = D(\hat{z}, \alpha)\,D(\hat{y}, \beta)\ket{+}
$$

$$
= \begin{pmatrix} \cos\frac{\alpha}{2} - i\sin\frac{\alpha}{2} & 0 \\ 0 & \cos\frac{\alpha}{2} + i\sin\frac{\alpha}{2} \end{pmatrix}\begin{pmatrix} \cos\frac{\beta}{2} & -\sin\frac{\beta}{2} \\ \sin\frac{\beta}{2} & \cos\frac{\beta}{2} \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix}
$$

$$
= \begin{pmatrix} e^{-i\alpha/2} & 0 \\ 0 & e^{i\alpha/2} \end{pmatrix}\begin{pmatrix} \cos\frac{\beta}{2} \\ \sin\frac{\beta}{2} \end{pmatrix}
$$

$$
\boxed{\chi = \begin{pmatrix} \cos\frac{\beta}{2}\,e^{-i\alpha/2} \\ \sin\frac{\beta}{2}\,e^{i\alpha/2} \end{pmatrix}}
$$

## 10. SO(3)과 SU(2) 비교

### SO(3): Special Orthogonal Group

$SO(3)$: 3D 공간에서 원점을 중심으로 한 **모든 회전**의 집합.

- **Orthogonality constraint**: $R^T R = \mathbb{1}$ → 길이와 각도를 보존
- **Special**: $\det(R) = 1$ (이 조건을 만족시키지 않으면 회전이 아님. 예: $\det(R) = -1$이면 반사)

$SO(3)$는 **group**이다:
1. **닫힘** (closure): $\forall\, a, b \in G$이면 $a\cdot b \in G$
2. **Associativity**: $\forall\, a, b, c \in G$이면 $a\cdot(b\cdot c) = (a\cdot b)\cdot c$
3. **Identity element**: $\exists\, e \in G$ such that $e\cdot a = a\cdot e = a$
4. **Inverse**: $\forall\, a \in G$, $\exists\, a^{-1} \in G$ such that $a\cdot a^{-1} = e$

### SU(2): Special Unitary Group

$SU(2)$: $\det = 1$인 $2\times 2$ **unitary matrix**의 집합.

### SO(3)과 SU(2)의 관계: Lie Theory

**Lie theory**: 연속 대칭에 관한 이론.

**Infinitesimal transformation**: $g(\varepsilon) = \mathbb{1} + \varepsilon X$ (여기서 $X$는 **generator**)

$SO(3)$과 $SU(2)$는 모두 **Lie group**이다.

**Lie group $G$의 Lie algebra** $\mathfrak{g} \in \mathcal{G}$: $e^{\phi X} \in G$이고 $\phi \in \mathbb{R}$인 $X$의 집합.

### SO(3)의 Lie Algebra

$SO(3)$에서 $R \in G$이면 $R = e^{\phi J}$ (여기서 $J$는 $3\times 3$ 행렬):

$$
R^T R = (e^{\phi J})^T e^{\phi J} = \mathbb{1}
$$

$$
\Rightarrow J^T + J = 0 \quad \text{(antisymmetric)}
$$

$$
\det(R) = \det(e^{\phi J}) = e^{\text{Tr}(\phi J)} = 1
$$

$$
\Rightarrow \text{Tr}(J) = 0 \quad \text{(traceless)}
$$

이 조건을 만족하는 generator들:

$$
J_1 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}, \quad J_2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix}, \quad J_3 = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

$e^{i\phi J}$를 operator로 정의하기 위해 $i$를 곱하면:

$$
J_1 = i\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}, \quad J_2 = i\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix}, \quad J_3 = i\begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

이들은 $[J_i, J_j] = i\,\varepsilon_{ijk}\,J_k$의 성질을 가진다.

### SU(2)의 Lie Algebra

$$
U^\dagger U = U U^\dagger = \mathbb{1} \quad \Rightarrow \quad (e^{iJ_i})^\dagger(e^{iJ_i}) = \mathbb{1}
$$

$$
\det(U) = 0 \quad \Rightarrow \quad \text{tr}(J) = 0
$$

(설명은 동일한 과정)

### Parameter Space

**SU(2):**

$$
U(a,b) = \begin{pmatrix} a & b \\ -b^* & a^* \end{pmatrix}, \quad |a|^2 + |b|^2 = 1
$$

4개의 실수가 필요하다: $a = \alpha + \beta i$, $b = \gamma + \delta i$

$$
\alpha^2 + \beta^2 + \gamma^2 + \delta^2 = 1
$$

이는 4차원 공간에서의 **3-sphere** ($S^3$)이다.

- **SU(2)는 전체 3-sphere** ($S^3$)
- **SO(3)는 반쪽 3-sphere** (antipodal points를 동일시)

SU(2)에서 **2개의 원소**가 SO(3)에서는 **1개에 대응**한다.

$$
SU(2) / \mathbb{Z}_2 \cong SO(3)
$$

그러나 **locally isomorphic**하다: Lie algebra가 동일하다.

> [!question] SU(2)에서 SO(3)로의 2:1 대응
> $D(\hat{n}, \phi)$와 $D(\hat{n}, \phi + 2\pi) = -D(\hat{n}, \phi)$는 SU(2)에서는 다른 원소이지만, SO(3)에서는 같은 회전을 나타낸다. 이것이 정확히 "반쪽 3-sphere"와 어떻게 대응되는지?

# 궁금한 내용

- SU(2)에서 SO(3)로의 2:1 대응의 기하학적 의미: "반쪽 3-sphere"
- $(\vec{\sigma}\cdot\vec{a})(\vec{\sigma}\cdot\vec{b})$ identity의 off-diagonal 원소 계산을 직접 해볼 것
- Pauli matrix가 왜 $\sigma_x, \sigma_y, \sigma_z$ 대신 $\sigma_i, \sigma_j, \sigma_k$로 표기되었는가? (강의 notation)

# AI의 보충 설명



# 연관 학습 노트

- [[QM lecture note - Rotation and Angular Momentum]]
- [[QM lecture note - Time Reversal for Spin-½ System]]

# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.2, 3.3

# 다음 강의

[[QM lecture note - Euler Rotation and Angular Momentum Eigenvalues]]에서 Euler rotation의 body-fixed → space-fixed 변환, 고차원 각운동량의 고유값 구조, $\mathcal{D}(R)$의 기약 표현, 그리고 $d^{(j)}(\beta)$ 행렬을 다룬다.
# 원본 필기 이미지

![[QM_12thweek_1.pdf]]