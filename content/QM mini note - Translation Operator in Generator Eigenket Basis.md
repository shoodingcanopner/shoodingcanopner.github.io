---
title: "QM mini note - Translation Operator in Generator Eigenket Basis"
date: "2026-04-14"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기 보충 노트
> 이것은 [[Quantum Mechanics]] 강의 관련 손 필기를 정리한 보충 노트입니다.
> [[QM lecture note - Position, Momentum, and Generators]]의 내용을 바탕으로 합니다.

# 핵심

- Translation operator를 generator의 eigenket을 basis로 써서 matrix로 나타낼 수 있다.
- Time-evolution operator를 energy eigenket basis로 전개하면 대각행렬이 되는 것과 같은 구조다.
- Position translation operator $T(dx)$를 momentum basis로 전개하면, $p$의 eigenvalue $p'$에 대한 위상 인자 $\exp(-i\Delta x\, p'/\hbar)$가 대각 원소로 나온다.
- 이 표현으로 $T(dx)\ket{x'}$를 계산하면 $\ket{x'+dx}$가 정확히 나와 일관성을 검증할 수 있다.

# 필기 내용

## Time-evolution operator와의 유비

Time-evolution operator의 경우, energy eigenket $\ket{a'}$으로 나타내면 대각행렬이 되어 유용하다.

완전성 관계 $\sum_{a'}\ket{a'}\bra{a'} = \mathbb{1}$을 두 번 삽입하면:

$$
\exp\!\left(-\frac{iHt}{\hbar}\right) = \sum_{a'}\sum_{a''} \ket{a''}\bra{a''} \exp\!\left(-\frac{iHt}{\hbar}\right) \ket{a'}\bra{a'}
$$

$H\ket{a'} = E_{a'}\ket{a'}$이므로:

$$
= \sum_{a'} \ket{a'} \exp\!\left(-\frac{iE_{a'}t}{\hbar}\right) \bra{a'}
\tag{1}
$$

generator인 $H$의 eigenket basis에서 대각화된 형태이다.

---

## Position translation operator를 momentum basis로 전개

$T(dx)$의 유한 형태:

$$
T(dx) = \exp\!\left(-\frac{i\,\Delta x\, p}{\hbar}\right)
\tag{2}
$$

완전성 관계 $\int dp'\,\ket{p'}\bra{p'} = \mathbb{1}$을 두 번 삽입하면:

$$
T(dx) = \int dp' \int dp''\, \ket{p''}\bra{p''}\, T(dx)\, \ket{p'}\bra{p'}
$$

$\bra{p''}T(dx)\ket{p'} = \exp\!\left(-\frac{i\,\Delta x\, p'}{\hbar}\right)\delta(p''-p')$이므로:

$$
\boxed{T(dx) = \int dp'\, \ket{p'} \exp\!\left(-\frac{i\,\Delta x\, p'}{\hbar}\right) \bra{p'}}
\tag{3}
$$

generator인 $p$의 eigenket basis에서 대각화된 형태 — (1)과 완전히 같은 구조다.

---

## 검증: $T(dx)\ket{x'}$ 계산

(3)으로 $\ket{x'}$에 작용시킨다.

$$
T(dx)\ket{x'} = \int dp'\, \ket{p'} \exp\!\left(-\frac{i\,\Delta x\, p'}{\hbar}\right) \braket{p'|x'}
\tag{4}
$$

$\braket{p'|x'} = \frac{1}{\sqrt{2\pi\hbar}}\exp\!\left(-\frac{ip'x'}{\hbar}\right)$를 대입:

$$
= \int dp'\, \ket{p'} \exp\!\left(-i\frac{p'}{\hbar}(x' + dx)\right)
\tag{5}
$$

$$
= \int dp'\, \ket{p'}\braket{p'|x' + dx} = \ket{x' + dx} \quad \checkmark
\tag{6}
$$

# 연관 학습 노트

- [[QM lecture note - Position, Momentum, and Generators]]
- [[QM lecture note - Time Evolution Operator]]
- [[QM mini note - Canonical Commutation Relation from Translation]]
- [[QM mini note - Generator as Differential Operator]]

# 필기 원본 이미지

![[Pasted image 20260414175819.png]]
