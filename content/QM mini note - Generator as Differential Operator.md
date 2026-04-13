---
title: "QM mini note - Generator as Differential Operator"
date: "2026-04-13"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기 보충 노트
> 이것은 [[Quantum Mechanics]] 강의 관련 손 필기를 정리한 보충 노트입니다.
> [[QM lecture note - Position, Momentum, and Translation]] 및 [[QM lecture note - Position, Momentum, and Generators]]의 핵심 유도를 복습·정리한 내용입니다.

# 오늘의 핵심

- Translation operator $T(dx') = \mathbb{1} - i\,dx'\,K$에서, generator $K$가 위치 $x$에 대한 미분 연산자임을 position space에서 직접 보일 수 있다.
- $T(dx')\ket{\alpha}$를 두 가지 방법으로 전개해 비교하면 $\braket{x'|K|\alpha} = -i\frac{\partial}{\partial x'}\braket{x'|\alpha}$가 나온다.
- $K = -i\frac{\partial}{\partial x'}$이므로 $p = \hbar K = -i\hbar\frac{\partial}{\partial x'}$이다.
- 추가로, $T^\dagger(dx') = T(-dx')$임을 완전성 관계를 이용해 직접 증명할 수 있다.

# 필기 내용

## Generator $K$가 미분 연산자임을 유도

**설정:** Hermitian operator $K$에 대해 position translation operator가

$$
T(dx') = \mathbb{1} - i\,dx'\,K
\tag{1}
$$

로 주어진다. $K$가 $x$에 대한 미분 연산자임을 보이기 위해, 임의의 ket $\ket{\alpha}$에 대해 $\braket{x'|T(dx')|\alpha}$를 두 가지 방법으로 계산한다.

---

**방법 ①** — $T(dx') = \mathbb{1} - i\,dx'\,K$를 직접 대입:

$$
\braket{x'|T(dx')|\alpha} = \braket{x'|\mathbb{1} - i\,dx'\,K|\alpha}
$$

$$
= \braket{x'|\alpha} - i\,dx'\braket{x'|K|\alpha}
\tag{2}
$$

---

**방법 ②** — $T(dx')$의 정의 $T(dx')\ket{x'} = \ket{x'+dx'}$를 이용:

$$
\braket{x'|T(dx')|\alpha} = \bra{T^\dagger(dx')x'}|\alpha\rangle
$$

$$
= \braket{T(-dx')x'|\alpha} = \braket{x'-dx'|\alpha}
\tag{3}
$$

---

**두 결과를 같다고 놓으면:**

$$
\braket{x'|\alpha} - i\,dx'\braket{x'|K|\alpha} = \braket{x'-dx'|\alpha}
$$

$$
-i\,dx'\braket{x'|K|\alpha} = \braket{x'-dx'|\alpha} - \braket{x'|\alpha}
$$

양변을 $-i\,dx'$로 나누면:

$$
\braket{x'|K|\alpha} = \frac{i}{dx'}\bigl\{\braket{x'-dx'|\alpha} - \braket{x'|\alpha}\bigr\}
$$

$$
= -i\frac{\partial}{\partial x'}\braket{x'|\alpha}
\tag{4}
$$

따라서:

$$
\boxed{K = -i\frac{\partial}{\partial x'}}
\tag{5}
$$

그리고 translation operator는 position space에서:

$$
T(dx') = \mathbb{1} - dx'\frac{\partial}{\partial x'}
\tag{6}
$$

> [!caution] 순서 주의
> 방법 ②에서 $T^\dagger(dx') = T(-dx')$를 사용했다. 이는 translation operator가 unitary하다는 성질에서 비롯된다 — unitary operator는 $T^\dagger = T^{-1}$이고, $T(dx')$의 역변환은 반대 방향으로의 translation인 $T(-dx')$이다. 이 사실의 독립적인 증명은 아래 섹션 참고.

> [!note] $p$와의 관계
> $K = p/\hbar$이므로 momentum operator는 position space에서 아래와 같이 작용한다:
> $$
> p = \hbar K = -i\hbar\frac{\partial}{\partial x'}
> $$

---

## 추가: $T^\dagger(dx') = T(-dx')$ 직접 증명

위의 유도에서 방법 ②를 쓸 때 이 성질을 사용했다. 직접 증명해보자.

**Translation operator의 적분 표현:**

$$
T(dx') = \int dx''\,\ket{x''+dx'}\bra{x''}
\tag{7}
$$

이를 Hermitian conjugate하면:

$$
T^\dagger(dx') = \int dx''\,\ket{x''}\bra{x''+dx'}
\tag{8}
$$

변수 치환 $x''' = x'' + dx'$ (즉 $x'' = x''' - dx'$)을 하면:

$$
T^\dagger(dx') = \int dx'''\,\ket{x'''-dx'}\bra{x'''}
\tag{9}
$$

이것은 정확히 $T(-dx')$의 정의이다:

$$
\boxed{T^\dagger(dx') = T(-dx')}
\tag{10}
$$

# 연관 학습 노트

- [[QM lecture note - Position, Momentum, and Translation]]
- [[QM lecture note - Position, Momentum, and Generators]]
- [[QM mini note - Canonical Commutation Relation from Translation]]

# 필기 원본 이미지
![[Pasted image 20260413212619.png]]
