---
title: "QM lecture note - Kramers' Degeneracy"
date: "2026-05-13"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의
[[QM lecture note - Time Reversal for Spin-½ System]]에서 Spin-½ system에서의 time reversal operator $\Theta = \eta e^{-i\pi S_y/\hbar}K$를 유도하고, $\Theta^2 = (-1)^{2j}$임을 증명했다.

# 오늘의 핵심

- **Kramers' Degeneracy Theorem**: Half-integer $j$ system에서, Hamiltonian이 time reversal even이면 모든 에너지 고유상태는 **doubly degenerate**하다.
- 증명의 핵심: $\Theta^2 = -\mathbb{1}$이면 $\ket{n}$과 $\Theta\ket{n}$이 반드시 orthogonal
- **E-field를 켜도** Hamiltonian은 여전히 time reversal even → Kramers' degeneracy 유지
- **B-field를 켜면** Hamiltonian의 시간 대칭이 깨짐 → Kramers' degeneracy가 깨질 수 있음

# 필기 내용

## 1. Kramers' Degeneracy Theorem

> **Theorem.** Half-integer $j$ system에서, Hamiltonian이 time reversal even ($[H, \Theta] = 0$)이면, 모든 에너지 고유상태는 **doubly degenerate**하다.

### 증명

$H\ket{n} = E_n\ket{n}$이고, $[H, \Theta] = 0$이므로:

$$
H(\Theta\ket{n}) = \Theta H\ket{n} = \Theta E_n\ket{n} = E_n(\Theta\ket{n})
$$

따라서 $\Theta\ket{n}$도 $\ket{n}$과 같은 에너지의 고유상태이다.

**과연 $\ket{n}$과 $\Theta\ket{n}$은 같은 상태인가, 다른 상태인가?**

다르다면 둘은 orthogonal 해야 한다. Antiunitary operator의 성질을 이용하여 확인한다.

$\ket{\alpha} = \ket{n}$, $\ket{\beta} = \Theta\ket{n}$으로 놓자.

$$
\ket{\tilde{\alpha}} = \Theta\ket{n}, \quad \ket{\tilde{\beta}} = \Theta(\Theta\ket{n}) = \Theta^2\ket{n} = -\ket{n}
$$

여기서 $\Theta^2 = -\mathbb{1}$ (half-integer $j$)을 사용했다.

Antiunitary operator의 성질 $\braket{\tilde{\beta}|\tilde{\alpha}} = \braket{\alpha|\beta}$를 적용하면:

$$
\braket{\tilde{\beta}|\tilde{\alpha}} = \bra{-n}\Theta\ket{n} = -\braket{n|\Theta|n}
$$

$$
\braket{\alpha|\beta} = \braket{n|\Theta|n}
$$

따라서:

$$
-\braket{n|\Theta|n} = \braket{n|\Theta|n}
$$

$$
\braket{n|\Theta|n} = 0
$$

$\ket{n}$과 $\Theta\ket{n}$은 **orthogonal**하다. 즉, 같은 에너지를 가지는 서로 다른 상태이므로 **doubly degenerate**하다. $\blacksquare$

> [!insight] 핵심
> 이 증명이 성립하려면 $\Theta^2 = -\mathbb{1}$이 필수적이다. Integer spin ($\Theta^2 = +\mathbb{1}$)이면 $\ket{\tilde{\beta}} = +\ket{n}$이 되어 $\braket{n|\Theta|n} = \braket{n|\Theta|n}$이라는 자명한 등식만 나오고, orthogonality를 보장할 수 없다.

 $\Theta^2$이 시스템에 따라 값이 달라진다는 게 납득하기 힘들다. 
 

## 2. Interaction with $\mathbf{E}$-field and $\mathbf{B}$-field

### E-field를 켤 때

$$
V(\vec{x}) = q\,\phi(\vec{x})
$$

여기서 $\phi(\vec{x})$는 electrostatic potential이다.

$V(\vec{x})$와 $\phi(\vec{x})$는 모두 **time reversal even**이다.

따라서 전체 Hamiltonian은 여전히 time reversal even이고, **Kramers' degeneracy가 유효**하다.

질문: 지금 고려하고 있는 시스템에서 $\Theta^2 = -\mathbb{1}$이 어떻게 보장되는가?

### B-field를 켤 때

Interaction part: $\vec{S}\cdot\mathbf{B}$

$\mathbf{B} = \nabla\times\mathbf{A}$이므로, interaction은 $\vec{p}\cdot\mathbf{A} + \mathbf{A}\cdot\vec{p}$ 형태도 포함한다.

- $\vec{S}$는 **TR-odd**
- $\vec{p}$도 **TR-odd**

Hamiltonian의 **시간 대칭이 깨진다**.

$$
[H, \Theta] \neq 0
$$

따라서 $\Theta$에 의해 관계된 두 상태는 **서로 다른 에너지를 가질 수 있다** — Kramers' degeneracy가 깨진다.

> [!question] $\mathbf{A}$ 자체의 TR 성질은?
> $\mathbf{B} = \nabla\times\mathbf{A}$이고 $\mathbf{B}$는 TR-odd ($\mathbf{B}$는 전류에 의해 만들어지고, 전류 방향이 뒤집히므로). 그러면 $\mathbf{A}$도 TR-odd인가?

# 궁금한 내용

- $\mathbf{A}$ 자체의 time reversal 성질은 어떻게 되는가? $\mathbf{B}$가 TR-odd이므로 $\mathbf{A}$도 TR-odd인가?
- Kramers' degeneracy가 깨지는 구체적인 예시 (Zeeman effect와의 연결)

# AI의 보충 설명



# 연관 학습 노트

- [[QM lecture note - Time Reversal Operator]]
- [[QM lecture note - Time Reversal for Spin-½ System]]
- [[QM lecture note - Discrete Symmetries]]

# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 4.4

# 다음 강의
[[QM lecture note - Two-Component Spinor and Rotation Operator]]

# 원본 필기 이미지

![[QM_12thweek_1.pdf]]