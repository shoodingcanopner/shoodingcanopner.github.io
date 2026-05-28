---
title: "Representation Theory"
date: "2026-05-28"
subject: physics
tags:
  - study
  - concept
class: study
---

# 개요

**Representation theory**는 추상적인 group의 원소를 구체적인 행렬(또는 linear operator)로 나타내는 이론이다. 양자역학에서 대칭성을 다루는 핵심 도구이며, 해석역학에서도 Galilean group, Lorentz group 등의 구조를 분석하는 데 사용된다.

이 노트는 양자역학 [[Quantum Mechanics]]과 해석역학 [[Analytical Mechanics]]에서 이미 배운 내용을 바탕으로, representation theory의 기본 개념을 정리한다.

# Group (군)

## 정의

집합 $G$와 연산 $\cdot$이 다음 네 가지를 만족하면 $(G, \cdot)$를 group이라 한다:

- **Closure**: $g_1, g_2 \in G \Rightarrow g_1 \cdot g_2 \in G$
- **Associativity**: $(g_1 \cdot g_2) \cdot g_3 = g_1 \cdot (g_2 \cdot g_3)$
- **Identity**: $\exists\, e \in G$ such that $e \cdot g = g \cdot e = g$
- **Inverse**: $\forall\, g \in G$, $\exists\, g^{-1}$ such that $g \cdot g^{-1} = g^{-1} \cdot g = e$

## 이미 만난 Group들

**Rotation group SO(3)**: 3차원 공간에서의 모든 회전의 집합. 두 회전을 연속 적용하면 또 다른 회전이고, 항등 회전이 있고, 역회전이 있다. 양자역학 Chapter 3의 주인공.

**Galilean group Gal(3)**: [[AM lecture note - Transformation of equation, Casimir Invariants]]에서 배운 것. 공간 병진($\vec{a}$), 시간 병진($s$), 회전($\vec{\theta}$), boost($\vec{u}$)를 모두 포함한다.

$$
G = \exp\{i(Hs + \vec{P}\cdot\vec{a} + \vec{L}\cdot\vec{\theta} + \vec{K}\cdot\vec{u})\}
$$

**SU(2)**: $2 \times 2$ unitary matrix 중 $\det = 1$인 것들의 집합. Spin-$\frac{1}{2}$의 회전이 여기에 해당한다. SO(3)의 double cover.

# Lie Algebra

## 정의

Lie group의 항등원 근방에서의 무한소 변환을 기술하는 대수 구조. Group의 원소를 $g = e^{i\epsilon T}$로 쓸 때, generator $T$들이 이루는 공간이 Lie algebra이다.

Lie algebra의 핵심 구조는 **commutation relation** (Lie bracket):

$$
[T_a, T_b] = i f_{abc}\,T_c
$$

여기서 $f_{abc}$는 **structure constant**라 부른다.

## 이미 만난 Lie Algebra들

**$\mathfrak{su}(2)$ (angular momentum algebra)**: 양자역학에서 가장 중요한 Lie algebra.

$$
[J_i, J_j] = i\hbar\,\epsilon_{ijk}\,J_k
$$

$J_x$, $J_y$, $J_z$ 세 개의 generator가 이 관계를 만족한다. Structure constant는 $\epsilon_{ijk}$ (Levi-Civita symbol). $\mathbf{L}$, $\mathbf{S}$, $\mathbf{J}$ 모두 이 algebra를 만족한다.

**$\mathfrak{su}(1,1)$ (Schwinger model의 확장)**: $K_+ = a_+^\dagger a_-^\dagger$, $K_- = a_+ a_-$, 그리고 $N$의 적절한 조합이 만드는 algebra. $j$를 정수 단위로 바꾸는 operator를 포함한다. Angular momentum의 $\mathfrak{su}(2)$와는 다른 algebra.

**Galilean algebra**: [[AM lecture note - Transformation of equation, Casimir Invariants]]에서 다룬 $H$, $\vec{P}$, $\vec{L}$, $\vec{K}$ 사이의 commutation relation 전체가 Galilean Lie algebra이다.

# Representation (표현)

## 정의

Group $G$의 **representation**이란, $G$의 원소를 벡터 공간 $V$ 위의 linear operator(행렬)로 대응시키는 함수 $D$이다:

$$
D: G \to GL(V)
$$

이 대응이 group 구조를 보존해야 한다:

$$
D(g_1 \cdot g_2) = D(g_1)\,D(g_2), \qquad D(e) = \mathbb{1}
$$

직관적으로, **"추상적인 group 원소에 구체적인 행렬을 배정하는 규칙"** 이다.

## 양자역학에서의 Representation

SO(3) (또는 SU(2))의 한 원소인 "회전 $R$"에 대해, 양자역학에서 배운 여러 가지 행렬 표현이 있다:

**$j = \frac{1}{2}$ representation**: 회전 $R$을 $2 \times 2$ 행렬 $\mathcal{D}^{(1/2)}(R)$로 나타냄.

$$
\mathcal{D}^{(1/2)}(\alpha,\beta,\gamma) = \begin{pmatrix} e^{-i(\alpha+\gamma)/2}\cos\frac{\beta}{2} & -e^{-i(\alpha-\gamma)/2}\sin\frac{\beta}{2} \\ e^{i(\alpha-\gamma)/2}\sin\frac{\beta}{2} & e^{i(\alpha+\gamma)/2}\cos\frac{\beta}{2} \end{pmatrix}
$$

이 행렬이 작용하는 공간: $\{\ket{+}, \ket{-}\}$ (spin-$\frac{1}{2}$ Hilbert space). 차원 = $2j+1 = 2$.

**$j = 1$ representation**: 같은 회전 $R$을 $3 \times 3$ 행렬 $\mathcal{D}^{(1)}(R)$로 나타냄.

이 행렬이 작용하는 공간: $\{Y_1^{-1}, Y_1^0, Y_1^1\}$ 또는 $\{\ket{1,-1}, \ket{1,0}, \ket{1,1}\}$. 차원 = $2j+1 = 3$.

**일반적인 $j$ representation**: 회전 $R$을 $(2j+1) \times (2j+1)$ 행렬로 나타냄.

$$
\mathcal{D}^{(j)}_{m'm}(R) = \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}\vec{J}\cdot\hat{n}\,\phi\right)\ket{j,m}
$$

**같은 물리적 회전**인데 **다른 크기의 행렬**로 나타낸 것 — 각각이 하나의 representation이다.

# Irreducible Representation (기약 표현)

## 정의

Representation $D$가 작용하는 벡터 공간 $V$의 부분 공간 $W \subset V$가 있어서, 모든 group 원소 $g$에 대해 $D(g)W \subset W$이면 (즉, $W$가 $D(g)$에 의해 자기 자신 안에서만 섞이면) $W$를 **invariant subspace**라 한다.

Representation이 **irreducible**하다는 것은, trivial한 것($\{0\}$과 $V$ 전체) 외에 invariant subspace가 없다는 뜻이다. 더 작은 block으로 쪼갤 수 없다.

## 양자역학에서의 예시

**Irreducible의 예**: $j = 1$ representation에서 $\{Y_1^{-1}, Y_1^0, Y_1^1\}$에 아무 회전을 가해도 이 세 함수가 서로 섞이기만 하지, 이 공간 밖으로 나가지 않는다. 그리고 이 셋 중 일부만 따로 분리되는 더 작은 부분 공간도 없다. 따라서 $\mathcal{D}^{(1)}$은 **irreducible representation**이다.

**Reducible의 예**: $l = 0$과 $l = 1$을 합친 4차원 공간 $\{Y_0^0, Y_1^{-1}, Y_1^0, Y_1^1\}$을 생각하자. 회전을 가하면:

- $Y_0^0$은 절대 다른 것들과 섞이지 않는다 ($l = 0$은 회전에 불변)
- $Y_1^{-1}$, $Y_1^0$, $Y_1^1$는 서로만 섞인다

따라서 이 4차원 representation은 $1 \times 1$ block과 $3 \times 3$ block으로 분해된다:

$$
\mathcal{D}(R) = \begin{pmatrix} \mathcal{D}^{(0)}(R) & 0 \\ 0 & \mathcal{D}^{(1)}(R) \end{pmatrix}
$$

이것은 **reducible** — 더 작은 irreducible representation들의 직합(direct sum)으로 쪼개진다.

## 물리적 핵심

$$
\text{Hilbert space} = \bigoplus_j V^{(j)}
$$

양자역학의 핵심 전략: **Hilbert space를 irreducible representation들로 분해하면, 각 block 안에서 문제가 독립적으로 풀린다.** $j$ 양자수가 하나 정해지면 그 안에서의 물리($m$의 범위, ladder operator의 계수, rotation matrix)가 완전히 결정된다.

## 해석역학에서의 예시

[[AM lecture note - Transformation of equation, Casimir Invariants]]에서 배운 질문:

> "p orbital은 SO(3) group에 irreducible하다"의 의미?

이제 답할 수 있다: $p$ orbital은 $l = 1$인 세 함수 $\{Y_1^{-1}, Y_1^0, Y_1^1\}$이 이루는 3차원 공간이고, 이것은 SO(3)의 **3차원 irreducible representation**이다. 아무리 회전을 해도 이 세 함수가 서로 섞이기만 할 뿐, 더 작은 부분 공간으로 분해되지 않는다.

# Casimir Operator와의 연결

각 irreducible representation을 **구별해주는** 것이 **Casimir operator**이다.

$\mathfrak{su}(2)$의 경우: $J^2$이 Casimir operator. 모든 generator $J_x$, $J_y$, $J_z$와 commute하며, 하나의 irreducible representation 안에서 고유값 $j(j+1)\hbar^2$이 일정하다. $j$가 다르면 다른 irreducible representation이다.

Galilean algebra의 경우: [[Casimir Invariants]]에서 배운 $M$ (질량), $U$ (내부 에너지), $|\vec{S}|^2$ (spin)이 Casimir operator들이다.

정리하면: **Casimir operator의 고유값이 irreducible representation에 이름표를 붙여준다.**

# Addition of Angular Momentum

Sakurai Chapter 4에서 배울 내용: 두 angular momentum $j_1$, $j_2$를 합치면?

$$
V^{(j_1)} \otimes V^{(j_2)} = \bigoplus_{j=|j_1-j_2|}^{j_1+j_2} V^{(j)}
$$

왼쪽은 $(2j_1+1)(2j_2+1)$차원의 **reducible representation**이고, 오른쪽은 이것을 **irreducible representation들의 direct sum으로 분해**한 것이다. 이 분해에 등장하는 계수가 **Clebsch-Gordan coefficient**이다.

예시: spin-$\frac{1}{2}$ 두 개를 합치면 ($j_1 = j_2 = \frac{1}{2}$):

$$
V^{(1/2)} \otimes V^{(1/2)} = V^{(0)} \oplus V^{(1)}
$$

$2 \times 2 = 4$차원이 $1 + 3 = 4$차원으로 분해. Singlet ($j = 0$)과 triplet ($j = 1$).

# 연관 학습 노트

- [[AM lecture note - Transformation of equation, Casimir Invariants]]
- [[Casimir Invariants]]
- [[QM lecture note - Rotation and Angular Momentum]]
- [[QM lecture note - Euler Rotation and Angular Momentum Eigenvalues]]
- [[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]
- [[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]
- [[Mini note - Lie Derivative and Baker-Hausdorff Correspondence]]

# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3
- 해석역학 수업 1주차 (Galilean group과 Casimir invariants)