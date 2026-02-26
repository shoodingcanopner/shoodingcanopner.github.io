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

다른 벡터들의 선형 합 또한 그 안에 사는 벡터다.

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

셀 수 있는 orthonormal basis set이 있다.
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


# 궁금한 내용

Compton effect가 뭐지
디락 방정식이 뭐지
- Countable의 정확한 수학적 정의가 뭔가?
### $\langle \alpha | \alpha \rangle = 1$인데, $|\beta\rangle \neq |\alpha\rangle$에 대해서 $\langle \beta | \alpha \rangle = 0$ 이어야 하지 않나?
[[Quantum Measurement and Context Dependence]]


# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 






