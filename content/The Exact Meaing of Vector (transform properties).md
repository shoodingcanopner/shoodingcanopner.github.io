---
title: Vector Transformation Properties
date: 2026-02-12
subject: mathematics
tags:
  - study
  - concept
  - question
class: study
---

# Vector Transformation Properties

## Overview

벡터의 엄밀한 정의는 "크기와 방향을 가진 양"이 아니라 **좌표 변환에 대한 변환 성질**로 주어진다. Displacement vector(변위 벡터)가 변환되는 규칙과 동일하게 변환되는 양을 벡터라고 정의한다.

- **Polar vector**: 기저 변환 시 $\mathbf{V}' = A\mathbf{V}$로 변환되도록 **정의**된 양
- **Pseudo vector** (axial vector) : 기저 변환 시 $\mathbf{V}' = (\det A) A\mathbf{V}$로 변환되도록 **정의**된 양

Pseudo vector인지 아닌지 확인하는 가장 쉬운 방법은 이것의 방향을 정의하는데 **오른손 법칙같은 convention** 이 필요한지이다. 

## Symbol Table

| Symbol        | Meaning                     |
| ------------- | --------------------------- |
| $\mathbf{V}$  | 원래 좌표계에서의 벡터 성분             |
| $\mathbf{V}'$ | 변환된 좌표계에서의 벡터 성분            |
| $A$           | 좌표 변환 행렬                    |
| $\mathbf{r}$  | Displacement vector (위치 벡터) |
| $\det A$      | Determinant of A            |

## Displacement Vector as Prototype

**Boas의 정의 방식:**

Displacement vector(변위 벡터) $\mathbf{r}$는 공간상의 한 점에서 다른 점으로의 변위를 나타낸다. 좌표계를 변환 행렬 $A$로 회전 또는 반사시킬 때, displacement vector는 다음과 같이 변환된다:

$$
\mathbf{r}' = A\mathbf{r}
\tag{1}
$$

**Vector의 일반적 정의:**

어떤 양 $\mathbf{V}$가 벡터이려면, displacement vector와 **완전히 동일한 변환 규칙**을 따라야 한다:

$$
\mathbf{V}' = A\mathbf{V}
\tag{2}
$$

이것이 벡터의 엄밀한 정의다. "크기와 방향을 가진다"는 직관적 설명은 불충분하며, 변환 성질로만 벡터를 정의할 수 있다.

## Meaning of Primed Coordinates

**V'이 의미하는 것:**

$\mathbf{V}'$은 "변환된 기저(basis)에 대해 같은 물리적 대상을 표현한 성분"이다. 

**중요: 변환 규칙이 벡터를 정의한다**

단순히 "변환된 좌표계에서의 성분"이라는 설명만으로는 불충분하다. 왜냐하면:

- **Polar vector**: 기저 변환 시 $\mathbf{V}' = A\mathbf{V}$로 변환되도록 **정의**된 양
- **Pseudo vector** (axial vector) : 기저 변환 시 $\mathbf{V}' = (\det A) A\mathbf{V}$로 변환되도록 **정의**된 양

둘 다 "변환된 좌표계에서의 성분"을 나타내지만, **변환 법칙 자체가 다르다**. 이 변환 법칙이 바로 벡터의 종류를 결정하는 본질적 정의다.

**구체적 예시 - Polar vector:**

원래 좌표계에서 속도 벡터가 $\mathbf{v} = (3, 0, 0)$ m/s라고 하자. 이제 좌표계를 z축 중심으로 90도 회전시키면:

$$
A = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}
\tag{3}
$$

$$
\mathbf{v}' = A\mathbf{v} = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 3 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 3 \\ 0 \end{pmatrix}
\tag{4}
$$

**해석:**
- 물리적 벡터 자체(물체의 실제 운동)는 변하지 않았다
- 단지 **기저벡터들이 회전**했을 뿐이다
- 새로운 기저로 표현하면 같은 속도가 $(0, 3, 0)$ m/s로 나타난다
- 속도는 $\mathbf{v}' = A\mathbf{v}$ 규칙을 따르므로 **polar vector다**

**구체적 예시 - Pseudovector:**

각운동량 $\mathbf{L} = \mathbf{r} \times \mathbf{p}$를 xy 평면에 대해 반사시키면 ($\det A = -1$):

$$
A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}
\tag{5}
$$

$$
\mathbf{L}' = (\det A) A\mathbf{L} = (-1) A\mathbf{L} = -A\mathbf{L}
\tag{6}
$$

각운동량은 $\mathbf{L}' = (\det A)A\mathbf{L}$ 규칙을 따르므로 **pseudo vector다**.

**핵심 정리:**

| 구분 | 기저 표현 | 변환 법칙 | 의미 |
|------|----------|-----------|------|
| $\mathbf{V}$ | $\{e_1, e_2, e_3\}$ | - | 원래 기저에서의 성분 |
| $\mathbf{V}'$ (polar) | $\{e'_1, e'_2, e'_3\}$ | $\mathbf{V}' = A\mathbf{V}$ | 변환된 기저에서의 성분 |
| $\mathbf{V}'$ (pseudo) | $\{e'_1, e'_2, e'_3\}$ | $\mathbf{V}' = (\det A)A\mathbf{V}$ | 변환된 기저에서의 성분 (추가 부호) |

같은 물리적 대상을 다른 기저로 표현하지만, **어떤 변환 규칙을 따르는가**가 그 양이 무엇인지를 정의한다.

## Tensor Hierarchy

물리량은 변환 성질에 따라 계층적으로 분류된다:

**0차 텐서 (Scalar):**
좌표 변환에 불변한다.

$$
\phi' = \phi
\tag{5}
$$

예시: 온도, 질량, 에너지

**1차 텐서 (Vector):**
선형 변환 규칙을 따른다.

$$
V_i' = A_{ij}V_j
\tag{6}
$$

예시: 위치, 속도, 힘, 전기장

**2차 텐서:**
두 개의 인덱스를 갖는다.

$$
T_{ij}' = A_{ik}A_{jl}T_{kl}
\tag{7}
$$

예시: 관성 텐서, 응력 텐서, 전자기장 텐서

**n차 텐서:**
n개의 인덱스를 갖는다.

$$
T_{i_1i_2...i_n}' = A_{i_1j_1}A_{i_2j_2}...A_{i_nj_n}T_{j_1j_2...j_n}
\tag{8}
$$

## Polar vs Axial Vectors

**Polar Vector (True Vector):**
모든 orthogonal 변환에 대해 식 (2)를 만족한다.

- Rotation ($\det A = +1$): $\mathbf{V}' = A\mathbf{V}$ ✓
- Reflection ($\det A = -1$): $\mathbf{V}' = A\mathbf{V}$ ✓

예시: 위치 $\mathbf{r}$, 속도 $\mathbf{v}$, 힘 $\mathbf{F}$, 전기장 $\mathbf{E}$

**Axial Vector (Pseudo vector):**
Reflection에서 추가 부호 변화가 생긴다.

- Rotation ($\det A = +1$): $\mathbf{V}' = A\mathbf{V}$ ✓
- Reflection ($\det A = -1$): $\mathbf{V}' = (\det A) \cdot A\mathbf{V} = -A\mathbf{V}$

예시: 각운동량 $\mathbf{L}$, 토크 $\boldsymbol{\tau}$, 자기장 $\mathbf{B}$

**왜 이런 차이가 생기나:**

Axial vector는 두 polar vector의 외적으로 정의된다:

$$
\mathbf{L} = \mathbf{r} \times \mathbf{p}
\tag{9}
$$

외적의 변환 성질:

$$
(\mathbf{r} \times \mathbf{p})' = (A\mathbf{r}) \times (A\mathbf{p}) = (\det A) A(\mathbf{r} \times \mathbf{p})
\tag{10}
$$

Reflection일 때 $\det A = -1$이므로 추가 음의 부호가 붙는다. 이는 외적이 오른손 법칙으로 정의되기 때문이며, 좌표계가 왼손 좌표계로 바뀌면 방향이 한 번 더 뒤집힌다.

**엄밀한 분류:**

Axial vector는 사실 **antisymmetric 2nd-rank tensor**다. 3차원에서는 우연히 3개의 독립 성분을 가져서 벡터처럼 보일 뿐이다.

## How to Identify Vectors

어떤 양이 벡터인지 판별하는 방법:

**1) 좌표 변환 성질 확인**
- Rotation 시: $\mathbf{V}' = A\mathbf{V}$를 만족하는가?
- Reflection 시: $\mathbf{V}' = A\mathbf{V}$를 만족하는가? (polar)
- 혹은 $\mathbf{V}' = (\det A)A\mathbf{V}$를 만족하는가? (axial)

**2) 정의 방식 확인**
- Displacement vector와 같은 방식으로 정의되는가?
- 외적으로 정의되는가? → pseudovector

**3) 물리적 의미 확인**
- 크기와 방향을 갖는가? (필요조건, 충분조건 아님)
- 좌표계 독립적인 물리적 의미를 갖는가?

## Examples

**Velocity는 vector인가?**

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt}
\tag{11}
$$

Displacement vector $\mathbf{r}$의 미분이므로:

$$
\mathbf{v}' = \frac{d\mathbf{r}'}{dt} = \frac{d(A\mathbf{r})}{dt} = A\frac{d\mathbf{r}}{dt} = A\mathbf{v}
\tag{12}
$$

따라서 velocity는 polar vector다. ✓

**Angular momentum은 vector인가?**

$$
\mathbf{L} = \mathbf{r} \times \mathbf{p}
\tag{13}
$$

외적으로 정의되므로 pseudovector다. Reflection 시:

$$
\mathbf{L}' = (A\mathbf{r}) \times (A\mathbf{p}) = (\det A) A(\mathbf{r} \times \mathbf{p}) = -A\mathbf{L}
\tag{14}
$$

추가 음의 부호가 붙는다.

**Temperature는 vector인가?**

온도 $T$는 좌표 변환에 불변이다:

$$
T' = T
\tag{15}
$$

따라서 scalar (0차 텐서)다.

## Questions & Insights

- 4차원 시공간에서는 어떻게 확장되는가? (Four-vector)
- Pseudotensor는 무엇인가?
- 외적이 3차원에서만 특별히 벡터처럼 보이는 이유는?
- Covariant vs contravariant vector의 차이는?

## Related Concepts

- [[Orthogonal Matrix]]
- [[Lagrangian Mechanics]]
- [[Poisson_Brackets]]

## References

- Boas, Mathematical Methods in the Physical Sciences

## Notes from Claude

벡터의 정의는 변환 성질로 주어진다. Boas 교재의 접근은 displacement vector를 prototype으로 사용하여, 이와 같은 변환 규칙을 따르는 모든 양을 벡터로 정의한다.

$\mathbf{V}'$은 변환된 좌표계에서 측정한 같은 물리적 벡터의 성분을 의미한다. 물리적 대상 자체는 변하지 않지만, 기준틀(좌표계)이 바뀌면 그 성분 표현이 달라진다.

Axial vector는 reflection 시 추가 부호 변화를 겪으며, 엄밀히는 antisymmetric tensor다. 이는 외적의 정의가 좌표계의 orientation에 민감하기 때문이다.
