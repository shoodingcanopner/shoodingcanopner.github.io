---
title: "QM lecture note - Canonical Commutation Relation from Translation"
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

# 핵심

- Translation operator의 generator 개념을 이용하면 $[x, p_x] = i\hbar$를 유도할 수 있다.
- **운동량이 위치의 미분연산자라는 사실을 이용하지 않은, 순수하게 translation property를 이용한 유도이다.**
- $[x, T(dx')]$를 직접 계산한 뒤, $T(dx') = \mathbb{1} - \frac{i}{\hbar}dx'\,p_x$를 대입하면 canonical commutation relation이 나온다.
- $[p_i, p_j] = 0$은 서로 다른 방향의 translation operator가 commute한다는 사실에서 유도된다.
- $T(\Delta p) = \mathbb{1} + i\frac{\Delta p}{\hbar}\,x$의 부호는 왜 $T(\Delta x) = \mathbb{1} - i\frac{\Delta x}{\hbar}\,p$와 반대일까? → commutation relation 때문에 그렇다. 

> [!note] 일반화
> A와 B가 서로 canonical conjugate라고 치자. 둘은 서로의 generator이다.
> 둘의 commutation relation이 $[A, B] = i$를 만족할 때, 
> 각자의 translation operator는 이렇게 정의된다. 
> $$
> T(\delta A) = \mathbb{1} - i\,\delta A \cdot B, \qquad T(\delta B) = \mathbb{1} + i\,\delta B \cdot A
> $$
> 두 translation operator에서 $\delta$의 계수 앞 부호가 반대가 되는 것은 commutation relation의 비대칭성 $[A,B] = -[B,A]$에서 비롯된다.

# 필기 내용

## 배경: 변수와 그 generator 사이의 canonical commutation relation

Translation operator의 명시적 형태:

$$
T(dx') = \mathbb{1} - i\frac{dx'}{\hbar}\,p_x
\tag{1}
$$

이 translation operator는 위치 eigenket에 아래와 같이 작용한다:

$$
T(dx')\,\ket{x'} = \ket{dx' + x'}
\tag{2}
$$

---

## $[x, p_x] = i\hbar$ 유도

**목표:** 위치 연산자 $x$와 운동량 연산자 $p_x$의 commutator를 구한다.

**아이디어:** $[x, p_x]$를 직접 구하는 대신, $[x, T(dx')]$를 먼저 계산한 뒤 (1)을 대입한다.

**Step 1.** $[x, T(dx')]$를 eigenket $\ket{x'}$에 작용시킨다:

$$
x\,T(dx')\ket{x'} = x\ket{x' + dx'} = (x' + dx')\ket{x' + dx'}
\tag{3}
$$

$$
T(dx')\,x\ket{x'} = x'\,T(dx')\ket{x'} = x'\ket{x' + dx'}
\tag{4}
$$

두 식의 차:

$$
[x,\,T(dx')]\,\ket{x'} = dx'\,\ket{x' + dx'} \approx dx'\,\ket{x'}
\tag{5}
$$

($dx'$이 무한소이므로 $\ket{x'+dx'} \approx \ket{x'}$)

따라서:

$$
[x,\,T(dx')] = dx'
\tag{6}
$$

**Step 2.** (1)을 (6)에 대입:

$$
\left[x,\,\mathbb{1} - \frac{i}{\hbar}dx'\,p_x\right] = dx'
$$

$$
-\frac{i}{\hbar}dx'\,[x,\,p_x] = dx'
$$

$$
\boxed{[x,\,p_x] = i\hbar}
\tag{7}
$$

---

## 3차원으로의 확장: $[x_i, p_j] = i\hbar\,\delta_{ij}$

각 방향의 translation operator가 독립적으로 작용하므로:

$$
[x_i,\,p_j] = i\hbar\,\delta_{ij}
\tag{8}
$$

---

## $[p_i, p_j] = 0$ 유도

**아이디어:** 서로 다른 방향의 translation이 commute함을 이용한다.

서로 다른 방향 $\hat{x}_i$, $\hat{x}_j$로의 translation operator는 순서에 관계없이 같은 결과를 준다:

$$
[T(\Delta x_i\,\hat{x}_i),\,T(\Delta x_j\,\hat{x}_j)] = 0
\tag{9}
$$

각 translation operator를 (1)의 형태로 쓰면:

$$
\left[\mathbb{1} - \frac{\Delta x_i}{i\hbar}p_i,\;\mathbb{1} - \frac{\Delta x_j}{i\hbar}p_j\right]
= -\frac{\Delta x_i\,\Delta x_j}{\hbar^2}[p_i,\,p_j] = 0
\tag{10}
$$

$$
\boxed{[p_i,\,p_j] = 0}
\tag{11}
$$

> [!note] 물리적 의미
> $x$ 방향으로 먼저 평행이동하고 $y$ 방향으로 이동하든, 반대 순서로 하든 결과는 같다. 이 사실이 바로 $p_x$와 $p_y$가 commute함을 보장한다.

---

## 요약: Canonical Commutation Relations

| Commutator | 값 |
|---|---|
| $[x_i,\,p_j]$ | $i\hbar\,\delta_{ij}$ |
| $[x_i,\,x_j]$ | $0$ |
| $[p_i,\,p_j]$ | $0$ |

이 세 관계식은 양자역학의 근본 구조를 이루며, translation operator의 성질로부터 자연스럽게 도출된다.

---

## 보충: $T(\Delta p)$의 부호는 왜 $T(\Delta x)$와 반대일까?

**문제의식:** position translation operator는

$$
T(\Delta x) = \mathbb{1} - i\frac{\Delta x}{\hbar}\,p
\tag{12}
$$

인데, momentum translation operator는

$$
T(\Delta p) = \mathbb{1} + i\frac{\Delta p}{\hbar}\,x
\tag{13}
$$

로 부호가 반대다. 왜일까?

**검증:** $[T(\Delta p),\, p]$를 직접 계산해보자.

$T(\Delta p)$가 momentum eigenket $\ket{p'}$에 작용하면:

$$
T(\Delta p)\,p\,\ket{p'} = p'\,T(\Delta p)\ket{p'} = p'\ket{p' + \Delta p}
\tag{14}
$$

$$
p\,T(\Delta p)\ket{p'} = p\,\ket{p' + \Delta p} = (p' + \Delta p)\ket{p' + \Delta p}
\tag{15}
$$

따라서:

$$
[T(\Delta p),\, p]\,\ket{p'} = -\Delta p\,\ket{p' + \Delta p} \approx -\Delta p\,\ket{p'}
$$

$$
[T(\Delta p),\, p] = -\Delta p
\tag{16}
$$

한편 (13)을 대입하면:

$$
\left[\mathbb{1} + i\frac{\Delta p}{\hbar}\,x,\; p\right] = i\frac{\Delta p}{\hbar}[x,\,p] = -\Delta p
$$

$$
\therefore\quad [x,\,p] = i\hbar \quad \checkmark
\tag{17}
$$

만약 (13)의 부호를 반대로 $T(\Delta p) = \mathbb{1} - i\frac{\Delta p}{\hbar}x$로 놓았다면, (16)과 비교했을 때 $[x, p] = -i\hbar$가 나와 canonical commutation relation에 모순이 생긴다.

> [!note] 일반화
> A와 B가 서로 반대 방향의 generator 관계, 즉 $[A, B] = i$를 만족할 때:
> $$
> T(\delta A) = \mathbb{1} - i\,\delta A \cdot B, \qquad T(\delta B) = \mathbb{1} + i\,\delta B \cdot A
> $$
> 두 translation operator에서 $\delta$의 계수 앞 부호가 반대가 되는 것은 commutation relation의 비대칭성 $[A,B] = -[B,A]$에서 비롯된다.

# 연관 학습 노트

- [[QM lecture note - Position, Momentum, and Translation]]
- [[QM lecture note - Position, Momentum, and Generators]]
- [[Poisson_Brackets]]
- [[포아송 브라켓과 양자역학 교환자의 연결성]]

# 필기 원본 이미지

![[Pasted image 20260413210949.png]]
![[Pasted image 20260414140232.png]]