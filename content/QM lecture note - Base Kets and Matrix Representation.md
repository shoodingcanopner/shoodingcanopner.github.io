---
title: Base Kets and Matrix Representation
date: 2026-03-05
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의
[[QM lecture note - Kets, Bras, and Operators]]

# 오늘의 핵심

아직 양자역학의 기본을 공부하고 있다. 
그리피스를 이미 공부했다면 볼 필요 없는 부분이다. 

# 필기 내용

## Theorem 1: Hermitian Operator의 성질

**1. Hermitian operator의 eigenvalue는 real이다.**
Observable이 Hermitian operator여야 하는 이유. Observable이라면 관측값이 실수여야 하기 때문이다.

어떤 Hermitian operator $A$와 이것의 eigenket $|a\rangle$ 
증명은 간단하다. 
$$
\langle a|A|a\rangle = \left(\langle a|A^\dagger|a\rangle\right)^* = \left(\langle a|A|a\rangle\right)^*
$$

따라서:

$$
\lambda\langle a|a\rangle = (\lambda\langle a|a\rangle)^* \implies \lambda = \lambda^* \implies \lambda \text{ is real.}
$$

**2. 한 operator에 대해 다른 eigenvalue를 가지는 두 eigenket은 서로 orthogonal하다.**

$A|a_1\rangle = \lambda_1|a_1\rangle$, $A|a_2\rangle = \lambda_2|a_2\rangle$ 일 때:

$$
\langle a_2|A|a_1\rangle = \lambda_1\langle a_2|a_1\rangle = \left(\langle a_1|A|a_2\rangle\right)^* = \left( \lambda_2 \langle a_1|a_2\rangle\right)^* = \lambda_2\langle a_2|a_1\rangle
$$

$$
(\lambda_1 - \lambda_2)\langle a_2|a_1\rangle = 0 \implies (\lambda_1 - \lambda_2)\delta_{12} = 0
$$
$\delta_{12}$는 크로네커 델타. 
$\lambda_1 \neq \lambda_2$이면 $\langle a_2|a_1\rangle = 0$. 즉 orthogonal.

## Completeness Relation의 응용

Completeness relation $\sum_n |a_n\rangle\langle a_n| = \mathbb{I}$을 이용하면:

$$
|a\rangle = \mathbb{I}|a\rangle = \sum_n |a_n\rangle\langle a_n|a\rangle
$$

Normalization 조건:

$$
\langle a|a\rangle = \langle a|\mathbb{I}|a\rangle = \langle a| \left( \sum_n |a_n\rangle\langle a_n| \right)|a\rangle = \sum_n |\langle a_n|a\rangle|^2 = \sum_n |C_n|^2 = 1
$$

# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의



