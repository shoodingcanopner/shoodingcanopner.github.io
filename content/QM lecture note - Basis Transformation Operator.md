---
title: "QM lecture note - Basis Transformation Operator"
date: "2026-03-10"
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
[[QM lecture note - Measurements, Observables, and the Uncertainty Relations]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

## Basis Transformation Operator

이것을 $\mathcal{U}$라고 쓰겠다. 이것은 $\{|a'\rangle\}$ set의 basis ket 하나를, 그것과 짝이 맞는 $\{|b'\rangle\}$ set의 basis ket 하나로 변환한다.

$$
|b^{(k)}\rangle = \mathcal{U}|a^{(k)}\rangle \quad \text{for } \forall k
$$

이 성질을 만족하려면 $\mathcal{U}$는 이렇게 생겨야 한다:

$$
\mathcal{U} = \sum_k |b^k\rangle\langle a^k|
$$

$$
\mathcal{U}^\dagger = \sum_k |a^k\rangle\langle b^k|
$$

$\mathcal{U}$의 또 다른 성질은, bra를 이용했을 때:

$$
\langle b^k|\mathcal{U} = \langle a^k|
$$

$\mathcal{U}$는 **unitary operator**이다. 즉 $\mathcal{U}^\dagger\mathcal{U} = \mathbb{1}$, $\mathcal{U}^\dagger = \mathcal{U}^{-1}$.

$$
\mathcal{U}^\dagger\mathcal{U} = \sum_m\sum_k |a^m\rangle\langle b^m|b^k\rangle\langle a^k| = \sum_m\sum_k \delta^m_k |a^m\rangle\langle a^k| = \sum_k |a^k\rangle\langle a^k| = \mathbb{1}
$$

### Matrix Representation

$\mathcal{U}$를 $\{|a'\rangle\}$ basis의 matrix로 나타내 보자. 이 matrix의 $m$th row, $l$th column을 $\mathcal{U}^{|a'\rangle}_{ml}$이라 표기하겠다. 즉:

$$
\mathcal{U}^{|a'\rangle}_{ml} = \langle a^m|\mathcal{U}|a^l\rangle
$$

이를 전개하면:

$$
\langle a^m|\mathcal{U}|a^l\rangle = \sum_k \langle a^m|b^k\rangle\langle a^k|a^l\rangle = \sum_k \delta^k_l \langle a^m|b^k\rangle = \langle a^m|b^l\rangle
$$

$$
\therefore \quad \mathcal{U}^{|a'\rangle}_{ml} = \langle a^m|\mathcal{U}|a^l\rangle = \langle a^m|b^l\rangle
$$

($\mathcal{U}|a^l\rangle = |b^l\rangle$이니 당연한 결과.)

반대로 $\mathcal{U}$를 $\{|b'\rangle\}$ basis의 matrix로 나타내면:

$$
\mathcal{U}^{|b'\rangle}_{ml} = \langle b^m|\mathcal{U}|b^l\rangle = \langle a^m|b^l\rangle
$$

놀랍게도 $\mathcal{U}^{|a'\rangle}_{ml} = \mathcal{U}^{|b'\rangle}_{ml}$이다.

### Basis 변환 적용

임의의 ket $|\alpha\rangle$를 $\{|a'\rangle\}$ basis에서 나타낸 coefficient는 $\langle a^m|\alpha\rangle = C^a_m$. $\{|b'\rangle\}$ basis에 대해서도 마찬가지로 $\langle b^m|\alpha\rangle = C^b_m$.

$C^b_l$을 $C^a$에 대해 나타내자:

$$
\langle b^l|\alpha\rangle = \langle b^l|\mathbb{1}|\alpha\rangle = \sum_m \langle b^l|a^m\rangle\langle a^m|\alpha\rangle = \sum_m \mathcal{U}^\dagger_{lm} C^a_m
$$

이를 matrix로 나타내면:

$$
\begin{pmatrix}C^b_1\\C^b_2\\\vdots\end{pmatrix} = \mathcal{U}^\dagger \begin{pmatrix}C^a_1\\C^a_2\\\vdots\end{pmatrix}
$$

$$
\begin{pmatrix}C^a_1\\C^a_2\\\vdots\end{pmatrix} = \mathcal{U} \begin{pmatrix}C^b_1\\C^b_2\\\vdots\end{pmatrix}
$$

$\mathcal{U}^\dagger$를 이용하면 $\{|a'\rangle\}$에서 표현을 $\{|b'\rangle\}$에서 표현으로 옮길 수 있다. $\mathcal{U}$를 이용하면 그 반대로 할 수 있다.

### Similarity Transformation

이제 operator (matrix)의 basis를 변환하자. 이것을 **similarity transformation**이라 부른다.

어떤 operator $X$. 이것을 $\{|b'\rangle\}$의 basis로 나타낸다:

$$
\langle b^m|X|b^l\rangle = \langle b^m|\mathbb{1}\,X\,\mathbb{1}|b^l\rangle
$$

$$
= \sum_p\sum_n \langle b^m|a^p\rangle\langle a^p|X|a^n\rangle\langle a^n|b^l\rangle
$$

$$
= \sum_p\sum_n \langle a^m|\mathcal{U}^\dagger|a^p\rangle\langle a^p|X|a^n\rangle\langle a^n|\mathcal{U}|a^l\rangle
$$

$$
= \langle a^m|\mathcal{U}^\dagger X\,\mathcal{U}|a^l\rangle
$$

$$
\therefore \quad \langle b^m|X|b^l\rangle = \langle a^m|\mathcal{U}^\dagger X\,\mathcal{U}|a^l\rangle
$$

($\langle b^m| = \langle a^m|\mathcal{U}^\dagger$와 $|b^l\rangle = \mathcal{U}|a^l\rangle$ 관계를 생각하면 당연하다.)

# 궁금한 내용

생각난 질문을 여기에 메모

# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의


# 원본 필기 이미지
![[Pasted image 20260310153050.png]]
![[Pasted image 20260310153045.png]]