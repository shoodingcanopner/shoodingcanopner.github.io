---
title: "Mini note - Lie Derivative and Baker-Hausdorff Correspondence"
date: "2026-05-28"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기 보충 노트
> 이것은 [[Analytical Mechanics]]와 [[Quantum Mechanics]] 두 과목에 걸치는 보충 노트입니다.
> 해석역학의 Lie derivative와 양자역학의 Baker-Hausdorff Lemma가 같은 수학적 구조임을 정리합니다.

# 오늘의 핵심

- 해석역학의 **Lie derivative**와 양자역학의 **commutator**는 같은 역할을 한다: "무한소 변환의 생성자를 따른 변화량"
- 유한 변환으로 확장하면, 해석역학의 **$e^{t\mathcal{L}_V}f$** 와 양자역학의 **$e^{iGt}A\,e^{-iGt}$** 가 정확히 대응
- 이 대응의 다리는 **양자화 규칙** $\{A, B\} \to \frac{1}{i\hbar}[A, B]$

# 필기 내용

## 무한소 변환의 대응

### 해석역학: Lie Derivative

[[AM lecture note - Hodge dual and Lie derivative]]에서 배운 내용. 벡터장 $V$의 flow를 따른 0-form $f$의 변화율:

$$
\mathcal{L}_V f = V(f) = V^i \partial_i f
$$

Hamiltonian vector field $V_\mathcal{H}$에 대해 적용하면:

$$
\mathcal{L}_{V_\mathcal{H}} f = V_\mathcal{H}(f) = \{f, \mathcal{H}\}
$$

이것이 $f$의 시간 발전이다: $\dot{f} = \{f, \mathcal{H}\}$.

### 양자역학: Commutator

Heisenberg picture에서 operator $A$의 시간 발전:

$$
\frac{dA}{dt} = \frac{i}{\hbar}[H, A] = \frac{1}{i\hbar}[A, H] \cdot (-1) \quad \text{...아니, 정리하자면,}
$$

$$
\frac{dA}{dt} = \frac{i}{\hbar}[H, A]
$$

### 대응 관계

$$
\boxed{\mathcal{L}_{V_\mathcal{H}} f = \{f, \mathcal{H}\} \quad \longleftrightarrow \quad \frac{i}{\hbar}[H, A]}
$$

양쪽 모두 "Hamiltonian이 생성하는 변환을 따른 물리량의 변화율"이다. 양자화 규칙 $\{f, \mathcal{H}\} \to \frac{1}{i\hbar}[A, H]$가 이 대응을 매개한다.

## 유한 변환의 대응

### 해석역학: Flow의 Taylor 전개

$\varphi_t$가 $V$의 flow를 $t$만큼 따라간 것이라면, 함수값의 변화는:

$$
f(\varphi_t(x)) = f(x) + t\,\mathcal{L}_V f + \frac{t^2}{2!}\mathcal{L}_V^2 f + \frac{t^3}{3!}\mathcal{L}_V^3 f + \cdots
$$

$$
= e^{t\mathcal{L}_V} f
$$

이건 $\varphi_t(x)$에서의 함수값을 $x$에서의 Lie derivative들로 표현한 Taylor 전개이다.

### 양자역학: Baker-Hausdorff Lemma

[[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]에서 유도한 내용. Operator $G$에 의한 유한 변환:

$$
e^{iG\lambda}\,A\,e^{-iG\lambda} = A + (i\lambda)[G, A] + \frac{(i\lambda)^2}{2!}[G,[G,A]] + \cdots
$$

$$
= \sum_{n=0}^{\infty}\frac{(i\lambda)^n}{n!}\,[{}^n G, A]
$$

### 나란히 놓기

| | 해석역학 | 양자역학 |
|---|---|---|
| **무한소 변환** | $\mathcal{L}_V f$ | $i[G, A]$ |
| **2차** | $\mathcal{L}_V^2 f$ | $(i)^2[G,[G,A]]$ |
| **$n$차** | $\mathcal{L}_V^n f$ | $(i)^n[{}^n G, A]$ |
| **유한 변환** | $e^{t\mathcal{L}_V} f$ | $e^{iGt}\,A\,e^{-iGt}$ |
| **변환의 의미** | flow를 따른 함수값 변화 | unitary 변환에 의한 operator 변화 |

**$\mathcal{L}_V$의 역할을 양자역학에서는 $i[G, \cdot]$가 수행한다.** 이것이 핵심 대응이다.

## 구체적 예시: 회전

### 해석역학

$V = V_{L_z} = -y\,\partial_x + x\,\partial_y + \cdots$ (phase space에서의 $z$축 회전 생성자)

$$
e^{\phi\,\mathcal{L}_{V_{L_z}}} f(x, y) = f(x\cos\phi - y\sin\phi,\; x\sin\phi + y\cos\phi)
$$

유한 회전 $\phi$만큼 돌린 위치에서의 함수값.

### 양자역학

$G = -\frac{1}{\hbar}J_z$ ($z$축 회전 생성자)

$$
e^{-iJ_z\phi/\hbar}\,a_+^\dagger\,e^{iJ_z\phi/\hbar}
$$

이것을 Baker-Hausdorff로 전개한 것이 바로 Schwinger model 노트에서 한 계산이다. 결과는:

$$
a_+^\dagger \to a_+^\dagger\cos\frac{\phi}{2} + a_-^\dagger\sin\frac{\phi}{2}
$$

> [!note] 구조적 동일성
> 두 경우 모두 "생성자의 거듭제곱 적용을 Taylor 전개로 합산"하는 과정이다. 해석역학에서는 Lie derivative의 거듭제곱, 양자역학에서는 nested commutator가 그 역할을 한다. 이 둘을 잇는 다리가 양자화 규칙 $\{A, B\} \to \frac{1}{i\hbar}[A, B]$이다.

## 정리: 대응 사전

| 해석역학 | 양자역학 |
|---------|--------|
| Observable $f$ | Operator $A$ |
| Poisson bracket $\{f, g\}$ | Commutator $\frac{1}{i\hbar}[A, B]$ |
| Hamiltonian vector field $V_f$ | $\frac{i}{\hbar}[f, \cdot]$ (adjoint action) |
| Lie derivative $\mathcal{L}_{V_f}$ | $\frac{i}{\hbar}[f, \cdot]$ |
| Flow $e^{t\mathcal{L}_V}$ | Unitary conjugation $e^{iGt}(\cdot)e^{-iGt}$ |
| $\mathcal{L}_{V_\mathcal{H}} f = 0$ (보존량) | $[H, A] = 0$ (보존량) |

# 연관 학습 노트

- [[AM lecture note - Hodge dual and Lie derivative]]
- [[AM lecture note - Symplectic form]]
- [[AM mini note - Conservation Laws and Hamiltonian Vector Fields]]
- [[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]
- [[QM lecture note - Rotation and Angular Momentum]]