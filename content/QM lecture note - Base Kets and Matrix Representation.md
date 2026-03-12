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

## Matrix Representation of Operators

### Eigenvector의 Completeness

Eigenvector가 span하는 공간이 $M$ 이라 하자. $M \neq H$ 이라면? 이건 orthogonal complement 이다. $M^\perp$ 이라 부른다. (증명은 앞서 했으므로 생략)

### Operator X의 Matrix 표현

Completeness relation을 이용하면 operator $X$를:

$$
X|k\rangle = \mathbb{1} \cdot X|k\rangle = \sum_{k'} |k'\rangle\langle k'|X|k\rangle
$$

$\langle k'|X|k\rangle$가 matrix가 원소로 가지는 값이다.

$$
X_{k'k} = \langle k'|X|k\rangle
$$

### Matrix 곱의 표현

$$
\langle k|XY|k'\rangle = \sum_{k''} \langle k|X|k''\rangle\langle k''|Y|k'\rangle = \sum_{k''} X_{kk''} Y_{k''k'}
$$

### Operator의 전개

$$
X = \mathbb{1} \cdot X \cdot \mathbb{1} = \sum_{a'',a'} |a''\rangle\langle a''|X|a'\rangle\langle a'|
$$

### Ket과 Bra의 Vector 표현

$|\alpha\rangle$는 열벡터:

$$
|\alpha\rangle = \begin{pmatrix} \langle a^1|\alpha\rangle \\ \langle a^2|\alpha\rangle \\ \vdots \\ \langle a^n|\alpha\rangle \end{pmatrix}
$$

$\langle\alpha|$는 행벡터:

$$
\langle\alpha| = \begin{pmatrix} \langle\alpha|a^1\rangle & \langle\alpha|a^2\rangle & \cdots & \langle\alpha|a^n\rangle \end{pmatrix}
$$

### Inner Product의 Matrix Form

$|\beta\rangle$와 $|\alpha\rangle$를 $|a^n\rangle$의 basis로 나타내면:

$$
\langle\beta|\alpha\rangle = \sum_{a'} \langle\beta|a'\rangle\langle a'|\alpha\rangle = \begin{pmatrix} \langle\beta|a^1\rangle & \langle\beta|a^2\rangle & \cdots & \langle\beta|a^n\rangle \end{pmatrix} \begin{pmatrix} \langle a^1|\alpha\rangle \\ \langle a^2|\alpha\rangle \\ \vdots \\ \langle a^n|\alpha\rangle \end{pmatrix}
$$

### Operator X의 Matrix

$$
X = \begin{pmatrix} \langle a^1|X|a^1\rangle & \langle a^1|X|a^2\rangle & \cdots \\ \langle a^2|X|a^1\rangle & \langle a^2|X|a^2\rangle & \cdots \\ \vdots & & \ddots \end{pmatrix}
$$

### Outer Product $|\beta\rangle\langle\alpha|$의 Matrix 표현

$$
|\beta\rangle\langle\alpha| = \begin{pmatrix} \langle a^1|\beta\rangle \\ \langle a^2|\beta\rangle \\ \vdots \\ \langle a^n|\beta\rangle \end{pmatrix} \begin{pmatrix} \langle a^1|\alpha\rangle^* & \langle a^2|\alpha\rangle^* & \cdots & \langle a^n|\alpha\rangle^* \end{pmatrix} = \begin{pmatrix} \langle a^1|\beta\rangle\langle a^1|\alpha\rangle^* & \cdots \\ \langle a^2|\beta\rangle\langle a^1|\alpha\rangle^* & \cdots \\ \vdots & \ddots \end{pmatrix}
$$

### Operator의 Transpose, Complex Conjugate, Hermitian Adjoint

$$
A = \mathbb{1} A \mathbb{1} = \sum_{k,k'} |k\rangle\langle k|A|k'\rangle\langle k'|
$$

- **Transpose:** $A^T = \sum_{k,k'} |k\rangle\langle k'|A|k\rangle\langle k'|$ (k와 k' 자리 바꿈)
- **Complex conjugate:** $A^* = \sum_{k,k'} |k\rangle (\langle k|A|k'\rangle)^* \langle k'|$
- **Hermitian adjoint:** $A^\dagger = \sum_{k,k'} |k\rangle (\langle k'|A|k\rangle)^* \langle k'|$

## Commutator & Anti-commutator

$$
[A, B] = AB - BA
$$
$$
\{A, B\} = AB + BA
$$

## Example: Spin-1/2 System

Base kets: $|+\rangle$, $|-\rangle$

$S_z$는 상태를 관측하는 연산자. Base ket이 $S_z$의 eigen ket이다.

$$
S_z|\pm\rangle = \pm\frac{\hbar}{2}|\pm\rangle
$$

$$
\mathbb{1} = |+\rangle\langle+| + |-\rangle\langle-|
$$

$$
S_z = \frac{\hbar}{2}|+\rangle\langle+| - \frac{\hbar}{2}|-\rangle\langle-|
$$

**Ladder operators:**

$$
S_+ \equiv \hbar|+\rangle\langle-|, \quad S_- \equiv \hbar|-\rangle\langle+|
$$

$$
S_+|+\rangle = 0, \quad S_+|-\rangle = \hbar|+\rangle
$$

$$
S_-|+\rangle = \hbar|-\rangle, \quad S_-|-\rangle = 0
$$

나중에 $S_\pm = S_x \pm iS_y$ 임을 보일 것이다.

**Matrix representation:**

$$
|+\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad |-\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}
$$

$$
|+\rangle\langle+| = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad |-\rangle\langle-| = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
$$

$$
S_z = \frac{\hbar}{2}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

$$
S_+ = \hbar\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad S_- = \hbar\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}
$$

# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의

[[QM lecture note - Measurements, Observables, and the Uncertainty Relations]]

# 원본 필기 이미지

![[Pasted image 20260310153311.png]]
![[Pasted image 20260310153319.png]]
![[Pasted image 20260310153326.png]]