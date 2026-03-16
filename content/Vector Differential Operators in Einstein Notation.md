---
title: Vector Differential Operators in Einstein Notation
date: "2026-02-18"
subject: physics
tags:
  - study
  - concept
class: study
---

# Vector Differential Operators in Einstein Notation

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\mathbf{e}_i$ | Unit basis vector in the $i$-th direction |
| $\partial_i$ | Shorthand for $\frac{\partial}{\partial x_i}$ |
| $\varepsilon_{ijk}$ | Levi-Civita symbol (totally antisymmetric tensor) |
| $f$ | Scalar field |
| $\mathbf{F}$ | Vector field, with components $F_i$ |

반복 인덱스(더미 인덱스)에는 아인슈타인 합산 규칙이 자동으로 적용된다: $a_i b_i \equiv \sum_i a_i b_i$.

---

## Overview

벡터 미분 연산자(gradient, divergence, curl, Laplacian)를 **아인슈타인 표기법**과 **레비-치비타 기호**로 표현하면, 맥스웰 방정식을 비롯한 전기역학의 방정식들을 간결하고 체계적으로 다룰 수 있다.

---

## Key Points

### Gradient

스칼라장 $f$의 기울기:

$$
\nabla f = \mathbf{e}_i \frac{\partial}{\partial x_i} f
\tag{1}
$$

결과는 벡터. 기저 벡터 $\mathbf{e}_i$와 편미분의 곱에 합산 규칙이 적용된다.

---

### Divergence

벡터장 $\mathbf{F}$의 발산:

$$
\nabla \cdot \mathbf{F} = \frac{\partial}{\partial x_i} F_i
\tag{2}
$$

결과는 스칼라. 인덱스 $i$가 반복되어 내적이 구현된다.

---

### Curl

벡터장 $\mathbf{F}$의 회전:

$$
\nabla \times \mathbf{F} = \varepsilon_{ijk} \, \mathbf{e}_i \frac{\partial}{\partial x_j} F_k
\tag{3}
$$

결과는 벡터. **레비-치비타 기호** $\varepsilon_{ijk}$는 인덱스가 짝수 순열이면 $+1$, 홀수 순열이면 $-1$, 반복되면 $0$.

---

### Laplacian (Scalar)

스칼라장 $f$의 라플라시안:

$$
\nabla^2 f = \frac{\partial^2}{\partial x_i^2} f
\tag{4}
$$

$\partial^2/\partial x_i^2$는 $\sum_i \partial^2/\partial x_i^2$의 줄임. 즉 $\nabla^2 = \nabla \cdot \nabla$.

---

### Laplacian (Vector)

벡터장 $\mathbf{F}$의 라플라시안:

$$
\nabla^2 \mathbf{F} = \mathbf{e}_i \frac{\partial^2}{\partial x_j^2} F_i
\tag{5}
$$

각 성분 $F_i$에 스칼라 라플라시안을 적용한 것. 반복 인덱스는 $j$ (성분 인덱스 $i$와 구분).

---

## Levi-Civita Symbol 요약

$$
\varepsilon_{ijk} = \begin{cases} +1 & \text{if } (i,j,k) \text{ is an even permutation of } (1,2,3) \\ -1 & \text{if odd permutation} \\ 0 & \text{if any index repeats} \end{cases}
$$

유용한 항등식:

$$
\varepsilon_{ijk}\varepsilon_{imn} = \delta_{jm}\delta_{kn} - \delta_{jn}\delta_{km}
\tag{6}
$$

이 항등식은 벡터 삼중곱 $\mathbf{A} \times (\mathbf{B} \times \mathbf{C})$ 전개 등에 핵심적으로 사용된다.

---

## Questions & Insights

- $\nabla \times (\nabla f) = 0$, $\nabla \cdot (\nabla \times \mathbf{F}) = 0$ 임을 레비-치비타 기호의 반대칭성을 이용해 직접 증명해 보기
- 맥스웰 방정식을 이 표기법으로 쓰면 어떤 구조가 드러나는가?

## Related Concepts

- [[맥스웰 방정식 외우기]]
- [[전기장과 자기장의 포텐셜]]
- [[Electrodynamics 그 모든 것]]
- [[Vector Identities in Electrodynamics]]

## References

- 사용자 필기 (2026-02-18)
![[Pasted image 20260219002016.png]]
## Notes from Claude

Gradient·Divergence·Curl·Laplacian 모두 아인슈타인 표기법으로 통일하면 인덱스 구조만으로 연산의 성격(스칼라 출력 vs 벡터 출력)이 한눈에 보인다. Curl은 레비-치비타 기호 덕분에 외적의 반대칭성이 $\varepsilon_{ijk}$의 부호 규칙 하나로 표현된다. 전기역학 공부 시 $\mathbf{B} = \nabla \times \mathbf{A}$, $\mathbf{E} = -\nabla \phi - \partial_t \mathbf{A}$ 같은 포텐셜 표현도 이 표기법으로 다루면 훨씬 깔끔해진다.
