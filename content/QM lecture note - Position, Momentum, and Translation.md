---
title: "QM lecture note - Position, Momentum, and Translation"
date: "2026-03-12"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[QM lecture note - Basis Transformation Operator]]

# 오늘의 핵심

- Continuous spectrum의 eigenket들은 Dirac delta 정규화를 사용하며, 이를 통해 모든 ket을 wave function으로 표현할 수 있다.
- Position operator $x$의 eigenket $\ket{x'}$들은 completeness relation $\int dx'\, \ket{x'}\bra{x'} = \mathbb{1}$을 만족하고, $\psi(x) = \braket{x | \alpha}$는 $\{\ket{x}\}$ basis에 대한 expansion coefficient이다.
- Translation operator $T(\delta x)$는 unitary이며, 무한소 전개를 통해 $T(\delta x) = \mathbb{1} - ik\,\delta x$로 쓸 수 있고, $k$는 Hermitian operator이다.
- $x$와 $T(\delta x)$의 commutator 계산을 통해 $[x, k] = i$를 유도할 수 있으며, 3D로 확장하면 $[x_i, k_j] = i\delta_{ij}\mathbb{1}$이다.

# 필기 내용

## Continuous Spectrum

디락 델타로 정의된 위치의 eigenket을 이용해 모든 ket을 wave function으로 만들 수 있다.

$$
\braket{x | \psi} = \psi(x)
$$

$\ket{x}$가 complete하므로,

$$
\ket{\psi} = \int dx\, \ket{x}\braket{x|\psi} = \int dx\, \psi(x)\,\ket{x}
$$

$$
\braket{x'|\psi} = \int dx\, \braket{x'|x}\braket{x|\psi} = \psi(x)\,\delta(x-x') = \psi(x')
$$

basis의 sum으로 ket을 나타내면 다음과 같다.
Discrete한 경우는

$$
\ket{z} = \sum_{a'} \ket{a'}\braket{a'|z}
$$

Continuous한 경우는

$$
\ket{z} = \int da'\, \braket{a'|z}\,\ket{a'}
$$

**Continuous spectrum observables 이용 방법**

- 여전히 self-adjoint operator다.
- Projection-valued measure를 사용.
- $\Phi$ 위에서 $A$를 먼저 정의하고, duality를 통해 $\Phi^*$ 위의 $A^*$로 확장.
- 예시) $T(a)\ket{x} = \ket{x+a}$
  - $T(a)$는 힐베르트 공간의 unitary operator지만, $\ket{x}$에도 적용할 수 있는 것이다.

---

## Position Space

| 기호 | 의미 |
|------|------|
| $x$ | position operator |
| $x'$ | eigenvalue (실수) |
| $\psi(x)$ | wave function (position representation) |
| $T(\delta x)$ | infinitesimal translation operator |
| $k$ | generator of translation (Hermitian) |

### Discrete ↔ Continuous 대응표

|                | Discrete                                                                  | Continuous                                                                       |
| -------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| eigenvalue eq. | $A\ket{a'} = a'\ket{a'}$                                                  | $\xi\ket{\xi'} = \xi'\ket{\xi'}$                                                 |
| orthonormality | 크로네커 델타<br>$\braket{a'' \| a'} = \delta_{a''a'}$                          | 디락 델타<br>$\braket{\xi'' \| \xi'} = \delta(\xi''-\xi')$                           |
| completeness   | $\sum_{a'}\ket{a'}\bra{a'} = \mathbb{1}$                                  | $\int d\xi'\,\ket{\xi'}\bra{\xi'} = \mathbb{1}$                                  |
| expansion      | $\ket{\alpha} = \sum_{a'}\ket{a'}\braket{a'\|\alpha}$                     | $\ket{\alpha} = \int d\xi'\,\braket{\xi'\|\alpha}\,\ket{\xi'}$                   |
| norm           | $\sum_{a'}\|\braket{a'\|\alpha}\|^2 = 1$                                  | $\int d\xi'\,\|\braket{\xi'\|\alpha}\|^2 = 1$                                    |
| inner product  | $\braket{\beta\|\alpha} = \sum_{a'}\braket{\beta\|a'}\braket{a'\|\alpha}$ | $\braket{\beta\|\alpha} = \int d\xi'\,\braket{\beta\|\xi'}\braket{\xi'\|\alpha}$ |
| matrix element | $\bra{a''}A\ket{a'} = a'\delta_{a''a'}$                                   | $\bra{\xi''}\xi\ket{\xi'} = \xi'\,\delta(\xi''-\xi')$                            |


$$
x\ket{x'} = x'\ket{x'} \qquad (x\text{는 operator, }x'\text{는 값})
$$

관측이 $x' - \Delta/2 \sim x' + \Delta/2$ 간격에서 이루어질 때,

$$
\ket{\alpha} = \int_{-\infty}^{\infty} dx\,\ket{x}\braket{x|\alpha} \xrightarrow{\text{관측}} \int_{x'-\Delta/2}^{x'+\Delta/2} dx\,\ket{x}\braket{x|\alpha}
$$

$\alpha$를 $x'$으로 찾되 $dx$ 범위에서 발견될 확률은 $|\braket{x'|\alpha}|^2\,dx$인 것이다.

$\ket{\alpha}$가 제대로 normalized라면,

$$
1 = \int_{-\infty}^{\infty} dx\,|\braket{x|\alpha}|^2 = \int_{-\infty}^{\infty} dx\,|\psi(x)|^2
$$

즉 $\psi(x)$는 $\{\ket{x}\}$ basis에 대한 **expansion coefficient**인 것이다.

### Wave Function in Position Space

$$
\braket{\beta|\alpha} = \int_{-\infty}^{\infty} dx\, \braket{\beta|x}\braket{x|\alpha} = \int dx\, \psi_\beta^*(x)\,\psi_\alpha(x)
$$

$\psi_\beta(x)$와 $\psi_\alpha(x)$의 겹침을 계산한 것이다. $\braket{\beta|\alpha}$는 $\ket{\alpha}$를 $\ket{\beta}$ 상태로 관찰할 확률 진폭폭이다.

$$
\psi_\alpha(x) = \sum_{a'} \braket{x|a'}\braket{a'|\alpha} = \sum_{a'} u_{a'}(x)\,C_{a'}
$$

$$
C_{a'} = \braket{a'|\alpha}, \qquad u_{a'}(x) = \braket{x|a'} \quad \text{(basis ket의 position 표현)}
$$

operator의 matrix element:

$$
\bra{\beta}A\ket{\alpha} = \int dx'\int dx''\, \braket{\beta|x'}\bra{x'}A\ket{x''}\braket{x''|\alpha}
$$

$$
= \int dx'\int dx''\, \psi_\beta^*(x')\,\bra{x'}A\ket{x''}\,\psi_\alpha(x'')
$$

만약 $A = f(x)$이면,

$$
\bra{x'}f(x)\ket{x''} = f(x'')\,\braket{x'|x''} = f(x'')\,\delta(x'-x'')
$$

$$
\therefore\quad \bra{\beta}A\ket{\alpha} = \int dx'\, \psi_\beta^*(x')\,f(x')\,\psi_\alpha(x')
$$

### 3D Position Space

3D에서는 $x, y, z$의 simultaneous eigenket을 사용한다. $x, y, z$가 compatible하기 때문.

$$
\ket{\vec{x}'} = \ket{x', y', z'}
$$

$$
x\ket{\vec{x}'} = x'\ket{\vec{x}'}, \quad y\ket{\vec{x}'} = y'\ket{\vec{x}'}, \quad z\ket{\vec{x}'} = z'\ket{\vec{x}'}
$$

---

## Translation

> wave packet이 $x'$에서 $x' + \delta x$로 이동

![[Pasted image 20260312151744.png]]
$$
T(\delta x)\,\ket{x'} = \ket{x' + \delta x}
$$

$\ket{x'}$과 $\ket{x' + \delta x}$은 같은 ket이지만, eigenvalue(라벨)가 달라지는 것이다.

$$
T(\delta x)\,\ket{\alpha} = T(\delta x)\int_{-\infty}^{\infty} dx\,\ket{x}\braket{x|\alpha}
$$
$$
= \int dx'\,\ket{x' + \delta x}\braket{x'|\alpha}
$$
$$
= \int \ket{x}\braket{x - \delta x|\alpha} = \int \psi_\alpha(x - \delta x)\,\ket{x}
$$

### $T(\delta x)$의 특성

**1) Unitary** — probability conservation 때문에

$$
\braket{\alpha|\alpha} = \bigl(T(\delta x)\ket{\alpha}\bigr)^\dagger\bigl(T(\delta x)\ket{\alpha}\bigr) = \bra{\alpha}T^\dagger(\delta x)\,T(\delta x)\ket{\alpha}
$$

$$
\therefore\quad T^\dagger(\delta x)\,T(\delta x) = \mathbb{1}
$$

**2) Composition**

$$
T(\delta x + \delta x') = T(\delta x)\,T(\delta x')
$$

**3) Inverse**

$$
T(-\delta x) = T^{-1}(\delta x) = T^\dagger(\delta x)
$$

**4) Identity**

$$
\lim_{\delta x \to 0} T(\delta x) = \mathbb{1}
$$

### Explicit Form of $T(\delta x)$

$$
T(\delta x) = \mathbb{1} - ik\cdot\delta x
$$

$T(\delta x)$를 테일러 전개 1차까지 한 것이다. $k$ 또한 어떤 operator이다.

**Unitarity 검증:**

$$
(\mathbb{1} + ik^\dagger\delta x)(\mathbb{1} - ik\delta x) = \mathbb{1} + i\delta x(k^\dagger - k) = \mathbb{1}
$$

$$
\therefore\quad k \text{는 Hermitian}
$$

**Composition 검증:**

$$
T(\delta x)\,T(\delta x') = (\mathbb{1} - ik\delta x)(\mathbb{1} - ik\delta x') = \mathbb{1} - ik(\delta x + \delta x') = T(\delta x + \delta x')
$$

**Unitary 검증 (inverse):**

$$
T^{-1}(\delta x) = T^\dagger(\delta x) = \mathbb{1} + ik\delta x
$$

---

## $x$와 $T(\delta x)$ 사이의 관계

$$
[x,\, T(\delta x)] = ?
$$

$$
[x,\, T(\delta x)]\,\ket{x'} = x\,T(\delta x)\ket{x'} - T(\delta x)\,x\ket{x'}
$$

$$
= (x' + \delta x)\ket{x' + \delta x} - x'\ket{x' + \delta x}
$$

$$
= \delta x\,\ket{x' + \delta x} \approx \delta x\,\ket{x'}
$$

$$
\therefore\quad [x,\, T(\delta x)] = \delta x
$$

$T(\delta x) = \mathbb{1} - ik\delta x$를 대입하면,

$$
[x,\, \mathbb{1} - ik\delta x] = [x,\, -i\delta x\, k] = -i\delta x\,[x, k] = \delta x
$$

$$
\therefore\quad [x, k] = i
$$

이것을 3차원으로 확장하면,

$$
[x_i,\, k_j] = i\delta_{ij}\,\mathbb{1}
$$

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

- [[QM lecture note - Kets, Bras, and Operators]]
- [[QM lecture note - Base Kets and Matrix Representation]]
- [[QM lecture note - Measurements, Observables, and the Uncertainty Relations]]
- [[QM lecture note - Basis Transformation Operator]]

# References

# 필기 이미지

![[Pasted image 20260312144017.png]]
![[Pasted image 20260312144024.png]]
![[Pasted image 20260312144029.png]]
![[Pasted image 20260312144035.png]]
![[Pasted image 20260312144041.png]]
