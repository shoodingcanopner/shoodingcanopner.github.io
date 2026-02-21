---
title: Orthogonal Matrix
date: "2026-02-11"
subject: mathematics
tags:
  - study
  - concept
  - question
class: study
---

# Orthogonal Matrix

## Overview

Orthogonal matrix는 전치행렬이 역행렬과 같은 행렬이다. 3차원 공간에서 거리와 각도를 보존하는 선형 변환을 나타내며, determinant의 부호에 따라 회전과 반사로 분류된다.

## Definition

행렬 $A$가 orthogonal matrix이려면:

$$
A^T A = I
\tag{1}
$$

이는 $A^T = A^{-1}$과 동치이다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $A$ | Orthogonal matrix |
| $A^T$ | Transpose of A |
| $I$ | Identity matrix |
| $\det A$ | Determinant of A |
| $SO(3)$ | Special Orthogonal group |
| $O(3)$ | Orthogonal group |

## Key Properties

### Determinant Constraint

Orthogonal matrix는 반드시 다음을 만족한다:

$$
\det(A^T A) = \det(I) = 1
\tag{2}
$$

$$
(\det A)^2 = 1
\tag{3}
$$

$$
\det A = \pm 1
\tag{4}
$$

### Classification by Determinant

Orthogonal matrix는 determinant의 부호에 따라 두 가지로 분류된다:

**1) Proper Rotation (det A = +1)**
- Special Orthogonal group $SO(3)$에 속함
- Orientation을 보존하는 변환
- 순수 회전 (rotation)
- 오른손 좌표계가 여전히 오른손 좌표계로 유지됨

**2) Improper Rotation (det A = -1)**
- Orthogonal group $O(3)$에서 $SO(3)$를 뺀 부분
- Orientation을 뒤집는 변환
- 반사(reflection), 회전반사(rotoreflection), 반전(inversion) 포함
- 오른손 좌표계가 왼손 좌표계로 변환됨

### Geometric Interpretation

Orthogonal 변환은 다음을 보존한다:
- **거리**: $|A\mathbf{v}| = |\mathbf{v}|$ for all vectors $\mathbf{v}$
- **각도**: $\langle A\mathbf{u}, A\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle$ for all vectors $\mathbf{u}, \mathbf{v}$
- **직교성**: 직교 좌표계가 직교 좌표계로 변환됨

## Examples

### Rotation Matrix (det = +1)

z축 중심 회전:

$$
R_z(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}
\tag{5}
$$

$\det R_z = 1$이므로 proper rotation이다.

### Reflection Matrix (det = -1)

xy 평면에 대한 반사:

$$
M_{xy} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}
\tag{6}
$$

$\det M_{xy} = -1$이므로 improper rotation이다.

### Inversion (det = -1)

원점 대칭:

$$
P = \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix}
\tag{7}
$$

$\det P = -1$이므로 improper rotation이다.

## Physical Significance

물리학에서 orthogonal matrix의 분류는 중요한 의미를 갖는다:

**Polar vectors (진짜 벡터)**
- 위치, 속도, 힘 등
- $\det A = +1$: 정상적으로 변환
- $\det A = -1$: 정상적으로 변환

**Axial vectors (유사벡터)**
- 각운동량, 토크, 자기장 등
- $\det A = +1$: 정상적으로 변환
- $\det A = -1$: **부호가 추가로 반전**

이 차이는 외적으로 정의된 벡터들이 좌표계의 orientation 변화에 민감하기 때문이다.

## Questions & Insights

- Orthogonal matrix의 eigenvalue는 어떤 형태를 가지는가?
- $SO(3)$가 group을 이루는 이유는 무엇인가?
- 4차원 이상에서는 어떻게 확장되는가?

## Related Concepts

- [[대칭성, 위상수학, 상전이]]
- [[Lagrangian Mechanics]]
- [[2025-06-02_Symmetry_Conservation_Laws_Three_Step_Proof]]

## References

- Boas, Mathematical Methods in the Physical Sciences

## Notes from Claude

Orthogonal matrix는 거리와 각도를 보존하는 변환이다. Determinant의 부호(±1)는 orientation 보존 여부를 나타내며, 이것이 polar vector와 axial vector를 구분하는 핵심이다. 

회전(rotation)은 오른손 좌표계를 오른손 좌표계로 유지하지만 (det = +1), 반사(reflection)는 왼손 좌표계로 뒤집는다 (det = -1). 외적으로 정의된 벡터(axial vector)는 반사 시 추가 부호 변화를 겪어 물리적 의미(회전 방향)를 유지한다.
