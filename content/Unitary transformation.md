---
title: Unitary transformation
date: 2026-02-26
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Similarity Transformation and Basis Change

## Overview

양자역학에서 유니타리 연산자 $U$ ($U^\dagger U = UU^\dagger = I$)를 이용해 observable $Q$를 새로운 기저(basis)에서 다시 표현하는 것을 **유사 변환(similarity transformation)** 혹은 **유니타리 변환(unitary transformation)** 이라 한다.

양자역학뿐만 아니라 그냥 선형대수학에서도 적용되는 특성이다. 

변환의 방향(능동/수동)에 따라 샌드위치의 순서가 달라진다:
- **능동 변환 (active):** 상태를 $U$로 변환 → $|\psi'\rangle = U|\psi\rangle$ → operator는 $Q' = UQU^\dagger$
- **수동 변환 (passive / 기저 변환):** 행렬 원소 관점에서 새 기저로의 변환 → $Q'_{ij} = (U^\dagger Q U)_{ij}$

이 문서에서는 시간에 대해 변하지 않는 $U$를 가정한다. 

## Key Points

- **기댓값 보존 조건:** 물리적 기댓값은 기저 선택에 무관해야 한다.

$$
\langle\psi|Q|\psi\rangle = \langle\psi'|Q'|\psi'\rangle
\tag{1}
$$

- **샌드위치 구조의 필연성:** 상태가 $|\psi'\rangle = U|\psi\rangle$으로 변환될 때, 기댓값 보존을 위해 operator는 $Q' = UQU^\dagger$로 변환되어야 한다.

$$
\langle\psi|Q|\psi\rangle = \langle\psi|\underbrace{U^\dagger U}_{=I} Q \underbrace{U^\dagger U}_{=I}|\psi\rangle = \langle U \psi|(UQU^\dagger)|U\psi\rangle =\langle\psi'|(UQU^\dagger)|\psi'\rangle
\tag{2}
$$

- **유니타리 조건:** $U^\dagger U = UU^\dagger = I$ 이면 변환이 내적(inner product)을 보존한다. 즉 확률 해석이 유지된다.

## 예시: 스핀의 회전

$z$축 스핀 측정 연산자를 $y$축 기준 90° 회전으로 변환하면 $x$축 스핀 측정 연산자가 된다. 

$$
S_z = \frac{\hbar}{2}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
\tag{3}
$$

$y$축 90° 회전 연산자:

$$
U = R_y\!\left(\frac{\pi}{2}\right) = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}
\tag{4}
$$

변환 결과:

$$
U S_z U^\dagger = S_x = \frac{\hbar}{2}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
\tag{5}
$$

물리적으로는 동일한 실험이지만, 기준 방향이 바뀐 것이다.

![[고개룰 돌려봐.png]]


## 대각화와 연결

어떤 행렬을 자기 자신의 eigen vector로 이루어진 basis로 나타낸다면? 
Eigenvector들의 orthogonality로 인해 변환된 행렬은 대각 성분만 가지게 된다. 
이것이 바로 대각화다. 

## Eigen value의 유지



## Questions & Insights

- $Y$가 유니타리가 아닌 경우(예: non-Hermitian 계)에도 similarity transformation의 의미가 유지될까? → 기댓값 보존이 깨지므로 물리적 해석이 달라진다.
- 해밀토니안의 시간 발전 연산자 $U(t) = e^{-iHt/\hbar}$도 유니타리이므로, 시간에 따른 연산자 변환(Heisenberg picture)이 $U^\dagger Q U$ 형태임은 자연스럽다.

## Related Concepts

- [[AM lecture notes - Galilean transformation]]

## References


## Notes from Claude

$U^\dagger Q U$ 구조(수동 변환)가 similarity transformation의 표준 convention이다. 상태가 $U$로 변환될 때 operator는 $U^\dagger Q U$로 변환되어야 기댓값이 보존된다. $UQU^\dagger$는 능동 변환(active transformation)에 해당하며, 두 convention 모두 문헌에서 사용되므로 혼동하지 않도록 주의할 것.
