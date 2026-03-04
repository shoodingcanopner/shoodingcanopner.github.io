---
title: QM lecture note - Kets, Bras, and Operators
date: 2026-02-26
subject: physics
tags:
  - study
  - lecture_note
class: study_lecture
---
[[Quantum Mechanics]]

이것은 강의를 듣고 적은 필기입니다. 
정리가 안 되어 있고, 개인적인 생각이 섞여 있을 수도 있습니다. 

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 
# 필기 내용

1.1이 재미있다. 읽어보시라. 

## Hilbert Space

고전역학에서는 상태가 phase space의 한 점 $(q, p)$ 이었다.
양자에서는 상태가 **벡터**다. **Ket space** 또는 이것의 dual space **Bra space**에 산다. 
여기를 **Hilbert space**라고 한다.
Ket vector는 어떤 상태에 대해 완전한 정보를 가진다.

### Hilbert space란?

Hilbert space는 다음 4가지 조건을 통과해야 부를 수 있다.

**1. Linear vector space 여야 한다.**

$|\alpha\rangle, |\beta\rangle \in \mathcal{H}$ 이면 $C_a|\alpha\rangle + C_b|\beta\rangle \in \mathcal{H}$, $C_a, C_b \in \mathbb{C}$

다른 벡터들의 선형 합 또한 그 공간간안에 사는 벡터다.

**2. Inner product가 정의된다.**

Inner product는 dual vector로 모든 vector에 작용해야 한다.
우리는 ket의 dual vector를 **bra vector**라 부른다. 
마치 도플갱어처럼 모든 각각의 ket vector에는 상응하는 bravector가 있다. One-to-one으로 mapping이 된다는 뜻이다. 

여느 vector와 dual vector처럼 둘 사이에 내적이 정의되고, 그 값은 스칼라다. 

$$
\langle \beta | \alpha \rangle \in \mathbb{C} \quad \text{for any } |\alpha\rangle, |\beta\rangle \in \mathcal{H}
$$

Inner product의 complex conjugate:

$$
\langle \beta | \alpha \rangle = \langle \alpha | \beta \rangle^*
$$

**3. Positive definite property**를 가진다:

$$
\langle \alpha | \alpha \rangle > 0
$$
$$
\langle \alpha | \alpha \rangle = 0 \implies |\alpha\rangle = 0 \quad \text{(null ket)}
$$

$\sqrt{\langle \alpha | \alpha \rangle}$: norm of the vector

$\langle \alpha | \beta \rangle = 0$ 이면 $|\alpha\rangle$과 $|\beta\rangle$는 **orthogonal**.

$|\alpha\rangle$과 $|\beta\rangle$가 normalized 된다면:

$$
P = |\langle \beta | \alpha \rangle|^2
$$

이것은 $|\alpha\rangle$ 상태로 준비된 입자가 $|\beta\rangle$로 발견될 확률이다.

**4. Separable 하다.**

셀 수 있는 orthonormal basis set이 있다. → *그래서 '양자'역학인가?*
어떤 벡터든 basis로 나타낼 수 있다:

$$
|\gamma\rangle = \sum_n C_n |e_n\rangle
$$

- 디락 델타 함수는 Hilbert space에 살지 않는다 → **non-physical basis의 예시** → position eigenstate
- Continuous basis로 쓰이는 $|x\rangle$, $|p\rangle$ 등은 Hilbert space에 살지 않고 **outer space**에 산다.

**5. Complete 하다.**

**Cauchy sequence**: 벡터들로 이루어진 sequence로, $\text{norm}(|a_n\rangle - |a_m\rangle) \to 0$ as $n, m \to \infty$

Hilbert space에 있는 모든 Cauchy sequence는 거기 있는 벡터로 수렴한다.
... 이게 왜 completeness인가?

### Completeness와 Basis

우리는 이미 basis의 completeness를 알고 있다. Basis를 선형 결합하면 모든 벡터를 만들 수 있다. Vector space를 span

**Partial sum:**

$$
|S_k\rangle = \sum_{n=1}^{k} C_n |e_n\rangle
$$

$\{|S_1\rangle, |S_2\rangle, \ldots\}$가 Cauchy sequence이다. $k$가 커질수록 $|S_k\rangle$는 한 벡터로 수렴하는 것이다.

$$
\sum_n |C_n|^2 < \infty, \quad \langle S_k | S_k \rangle = \sum_n^k |C_n|^2
$$

Cauchy complete 하다는 게 있어야 상태를 나타내기 위한 basis를 사용할 수 있다.

### Hilbert space의 예시: $L^2(\mathbb{R})$

$L^2(\mathbb{R})$: space of square-integrable functions

$$
\int_{-\infty}^{\infty} |\psi|^2 \, dx < \infty
$$


## Orthonormal Basis와 Completeness Relation

Ket으로 이루어진 basis $\{|k_n\rangle\}$가 있으면, 모든 basis의 선형합으로 나타낼 수 있다:

$$
|a\rangle = \sum_n C_n |k_n\rangle
$$

orthonormal이면 $\langle k_m | k_n \rangle = \delta_{nm}$. 특정 basis의 계수를 추출출

$$
\langle k_n | a \rangle = \sum_m C_m \langle k_n | k_m \rangle = \sum_m \delta_{nm} C_m = C_n
$$

Completeness relation (항등 연산자):

$$
\sum_n |k_n\rangle\langle k_n| = \mathbb{I}
$$

이를 이용하면:

$$
\sum_m |k_m\rangle\langle k_m | a \rangle = \sum_m C_m |k_m\rangle = |a\rangle
$$

$$
\left(\sum_m |k_m\rangle\langle k_m|\right)|a\rangle = \mathbb{I}|a\rangle = |a\rangle
$$

## Operators

벡터를 변환하는 operator:

$$
X|a\rangle = |a'\rangle
$$

**Operator의 성질:**
- **같다**: $X|a\rangle = Y|a\rangle$ for all $|a\rangle$ 이면 $X = Y$
- **Null operator**: $X|a\rangle = 0$ for all $|a\rangle$이면 $X$는 null operator
- **Commute**: $X + Y = Y + X$
- **Associative**: $X + (Y + Z) = (X + Y) + Z$
- **Linear**: $X\left(C_a|a\rangle + C_b|b\rangle\right) = C_a(X|a\rangle) + C_b(X|b\rangle)$

## Projection Operator

1차원 subspace (basis ket $|k\rangle$ 하나로 이루어진 공간) 로의 projection operator:

$$
P_k \equiv |k\rangle\langle k|
$$

어떤 벡터의 $|k\rangle$ 방향 성분만 추출:

$$
P_k|a\rangle  = |k\rangle\langle k|a\rangle = C_k|k\rangle
$$

**Outer product**: column vector와 row vector를 곱하면 matrix가 됨:

$$
(|\beta\rangle)(\langle\alpha|) = |\beta\rangle\langle\alpha|
$$

모든 basis에 대한 projection operator를 더하면 → Hilbert space 전체에 projection → 항등 연산자:

$$
\sum_n |k_n\rangle\langle k_n| = \mathbb{I} \quad \text{(completeness relation)}
$$

basis가 whole space를 span한다는 뜻.

## Operator의 Outer Product 표현

모든 operator는 ket과 bra의 outer product로 나타낼 수 있다:

$$
X = |b\rangle\langle a|, \quad X|c\rangle = |b\rangle\langle a|c\rangle
$$
열벡터와 행벡터를 곱하면 matrix가 됨:

$$
\begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix} \begin{pmatrix} r_1 & r_2 & \cdots & r_n \end{pmatrix} = \begin{pmatrix} m_{11} & m_{12} & \cdots & m_{1n} \\ m_{21} & m_{22} & \cdots & m_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ m_{n1} & m_{n2} & \cdots & m_{nn} \end{pmatrix}
$$

$$
X^\dagger = |a\rangle\langle b|
$$

## Dual Correspondence와 Adjoint (Hermitian Conjugate)

화살표로 이어진 것은 서로 복소켤레이다.
켤레전치는 벡터들의 순서를 거울상으로 뒤집고 브라와 켓도 뒤집는 효과를 준다. 
$$
X|a\rangle \longleftrightarrow \langle a|X^\dagger
$$

$$
X|c\rangle = |b\rangle\langle a|c\rangle \longleftrightarrow \langle c|X^\dagger = \langle c|a\rangle\langle b|
$$

이것을 **hermitian adjoint** 라고 한다.

$X = |b\rangle\langle a|$, $Y = |d\rangle\langle c|$ 일 때:

$$
XY = |b\rangle\langle a|d\rangle\langle c| = |b\rangle(\langle a|d\rangle)\langle c|
$$

$$
YX = |d\rangle\langle c|b\rangle\langle a| = |d\rangle(\langle c|b\rangle)\langle a|
$$

따라서 일반적으로 $XY \neq YX$.

$$(XY)^\dagger = Y^\dagger X^\dagger = |c\rangle\langle d|a\rangle\langle b|$$

연산의 순서를 바꾸면:

$$
\langle \beta | X | \alpha \rangle = \left(\langle \alpha | X^\dagger | \beta \rangle\right)^*
$$

$X$가 **hermitian**이면 $X = X^\dagger$. 그때 $\langle \alpha | X | \beta \rangle$의 complex conjugate:

$$
\langle \beta | X | \alpha \rangle = \left(\langle \alpha | X | \beta \rangle\right)^*
$$
$$
\langle \alpha | X | \alpha \rangle = \left(\langle \alpha | X | \alpha \rangle\right)^*
$$
$$
\langle \alpha | X | \alpha \rangle \text{ is real.}
$$
따라서 Hermitian의 expectation value는 실수이다. 

# 궁금한 내용

Compton effect가 뭐지
디락 방정식이 뭐지
- Countable의 정확한 수학적 정의가 뭔가?
### $\langle \alpha | \alpha \rangle = 1$인데, $|\beta\rangle \neq |\alpha\rangle$에 대해서 $\langle \beta | \alpha \rangle = 0$ 이어야 하지 않나?
어리석은 질문이지만 양자역학에 익숙하지 않다면 충분히 할 수 있는 질문이다. 
아래 노트에 정리했다. 
[[Quantum Measurement and Context Dependence]]

Gelfand triple이 워지

# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[QM lecture note - Base Kets and Matrix Representation]]




