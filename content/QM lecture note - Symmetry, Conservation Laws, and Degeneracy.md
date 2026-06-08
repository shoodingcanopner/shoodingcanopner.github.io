---
title: "QM lecture note - Symmetry, Conservation Laws, and Degeneracy"
date: "2026-04-27"
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

[[QM lecture note - Aharonov-Bohm Effect and Magnetic Monopole]]

중간고사 이후 Chapter 4로 넘어감. Chap. 4의 주제는 Symmetry, Conservation Laws, and Degeneracy.

# 오늘의 핵심

- Noether 정리: 연속 대칭 → 보존량. Generator $G$가 $\mathcal{H}$와 commute하면 $G$는 conserved quantity.
- Degeneracy의 근본 원인: $[\mathcal{T}, \mathcal{H}] = 0$을 만족하는 symmetry operator $\mathcal{T}$의 존재.
- Parity operator $\pi$: unitary + hermitian → involutory ($\pi^2 = \mathbb{1}$), eigenvalue $\pm 1$.
- Parity 아래서: polar vector (x, p)는 odd, axial vector (L, S)는 even.
- Symmetric double-well: 에너지 고유상태는 parity eigenstate. $E_A > E_S$. 위치 eigenstate는 에너지 고유상태가 아님 → oscillation.

# 필기 내용

## Noether's Theorem (복습)

> Chap. 4 먼저 나간다: **Symmetry, Conservation Laws, and Degeneracy**

고전역학의 뇌터 정리를 recall.

Infinitesimal transformation $q_i \to q_i + \delta q_i$에서

$$
\delta q_i = \varepsilon\, k_i(q)
$$

$k_i(q)$는 generator. 만약 transform을 해서 라그랑지안이 그대로라면, 어떤 보존량 $J$가 있다:

$$
J = \sum_i \frac{\partial \mathcal{L}}{\partial \dot{q}_i} k_i(q)
$$

**증명 스케치:**

$$
\delta L = \sum_i \left( \frac{\partial \mathcal{L}}{\partial q_i} \delta q_i + \frac{\partial \mathcal{L}}{\partial \dot{q}_i} \delta \dot{q}_i \right)
$$

$$
= \sum_i \left( \left[\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_i}\right] \varepsilon k_i + \frac{\partial \mathcal{L}}{\partial \dot{q}_i} \left[\varepsilon \frac{dk_i}{dt}\right] \right)
$$

$$
= \varepsilon \frac{d}{dt}\left(\sum_i \frac{\partial \mathcal{L}}{\partial \dot{q}_i} k_i\right) = 0
$$

**예시 1: 병진 대칭**

Transformation: $x_i \to x_i + \varepsilon$, $k_i = 1$.

보존량: $J = \sum_i p_i k_i = P$ (전체 운동량).

**예시 2: z축 회전 대칭**

회전 행렬:

$$
R = \begin{pmatrix} \cos\varepsilon & -\sin\varepsilon & 0 \\ \sin\varepsilon & \cos\varepsilon & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

infinitesimal 변환: $x' = (cos \varepsilon) x - (sin \varepsilon) y - \approx x - \varepsilon y$, $y' \approx y + \varepsilon x$.
즉 $k_x = -y$, $k_y = x$.

$$
J = \frac{\partial \mathcal{L}}{\partial \dot{x}} k_x + \frac{\partial \mathcal{L}}{\partial \dot{y}} k_y = p_x(-y) + p_y(x) = L_z
$$

---

## 양자역학에서의 대칭과 보존 (Chap. 4 본론)

Transform하는 unitary operator $\mathcal{T}$가 similarity transformation으로 $\mathcal{H}$를 불변으로 둔다면, 즉 $\mathcal{T}$가 $\mathcal{H}$와 commute하면:

$$
\mathcal{T}^\dagger \mathcal{H} \mathcal{T} = \mathcal{H}, \quad [\mathcal{T}, \mathcal{H}] = 0
$$

Infinitesimal unitary operator:

$$
\mathcal{T} = \mathbb{1} - \frac{i\varepsilon}{\hbar} G
$$

이면 $[\mathcal{H}, G] = 0$이 따라오고, 시스템은 $\mathcal{T}$에 대칭이며 $G$는 보존량.

**Heisenberg 운동방정식**으로 확인:

$$
\frac{dG}{dt} = \frac{1}{i\hbar}[ G,\mathcal{H}] + \frac{\partial G}{\partial t} = 0
$$

---

## Degeneracy

$[\mathcal{T}, \mathcal{H}]$를 만족하는 symmetry operator $\mathcal{T}$,
이것이 **degeneracy의 primary reason**이다.

$\ket{n}$이 에너지 고유상태라면: $\mathcal{H}\ket{n} = E_n\ket{n}$

$$
\mathcal{H}\,\mathcal{T}\ket{n} = \mathcal{T}\,\mathcal{H}\ket{n} = E_n\bigl(\mathcal{T}\ket{n}\bigr)
$$

$\mathcal{T}\ket{n}$도 같은 에너지 $E_n$을 갖는 eigenket.
basis ket을 바꿔도 같은 eigenvalue를 가지기 때문.

> **예시?** free particle에서 momentum ket의 위치를 바꾸어도 같은 에너지 값을 갖는다.

---

## 4.2 Discrete Symmetries — Parity (공간 반전)

### Parity operator $\pi$ 정의

Parity는 **점대칭**. 좌표의 부호를 바꾼다:

$$
\ket{a} \to \pi\ket{a}
$$

$$
\langle x \rangle_\pi = \bra{a}\pi^\dagger\, x\, \pi\ket{a} = -\langle x \rangle
$$

즉 $\pi^\dagger x \pi = -x$. $\pi$와 $x$는 **anticommute**:

$$
\{x, \pi\} = x\pi + \pi x = 0
$$

$\pi\ket{x'} = \ket{-x'}$

이라는 것도 간단하게 알 수 있다.
사실 $\pi\ket{x'} = e^{i\delta}\ket{-x'}$이긴 하지만, convention에 따라 $\delta = 0$이라 둔다.

### Parity는 Unitary + Hermitian

$$
\pi = \pi^{-1} = \pi^\dagger \quad \Rightarrow \quad \text{Unitary and Hermitian}
$$

$$
\pi^2 = \mathbb{1} \quad \Rightarrow \quad \text{involutory (자기 자신의 역)}
$$

따라서 eigenvalue는 $\pm 1$.

### Momentum과 Parity
Momentum은 위치에 대한 generator이다. 
Momentum에 parity operator를 취하면 어떻게 될까?
$dx'$를 만큼 옮기는 translation 이었던 게, parity에 의해서 $-dx'$만큼 옮기는 translation으로 바뀐다. 

$$
\pi^\dagger\, \mathcal{T}(dx')\, \pi = \mathcal{T}(-dx')
$$

$$
\mathcal{T}(dx') = \mathbb{1} - \frac{ip}{\hbar}dx'
$$

좌변: $-\pi p = p\pi$, 즉

$$
\pi^\dagger p\, \pi = -p \quad \Rightarrow \quad \{\pi, p\} = 0
$$

$p$도 $x$처럼 parity에 대해 **odd**.

### 각운동량과 Parity

$$
L = x \times p, \quad [\pi, L] = 0
$$

각운동량 $L$은 parity에 대해 **even** (axial vector).
![[Pasted image 20260428085838.png]]
### Vector 분류

| 종류 | Parity 하에서 | 예시 |
|------|-------------|------|
| Polar vector | odd | $x$, $p$ |
| Axial vector | even | $L$, $S$ |
| (True) Scalar | even | |
| Pseudo scalar | odd | $S \cdot x$ |


### 파동함수에 적용

$$
\langle x' | \pi | a \rangle = \pm \langle x' | a \rangle = \langle \pi x' | a \rangle = \langle -x' | a \rangle = \psi(-x')
$$
두 번째 변은 parity operator를 $a$에 적용하여 eigen value $\pm 1$이 나온 것이다. 

$$
\therefore\quad \psi(-x') = \pm\psi(x')
$$

State가 공간에 대칭이면 **even**, 반대칭이면 **odd** 파동함수를 갖는다.


### Parity eigenket과 파동함수 (예시)

$[\pi, \mathcal{H}] = 0$이면, spherical harmonics는 $L^2$의 simultaneous eigenfunction.

$$
\langle x' | a, \ell m \rangle = R_a(r)\, Y_\ell^m(\theta, \phi)
$$
![[Pasted image 20260428090046.png]]
**Space inversion** $x' \to -x'$은 구면좌표에서:

$$
r \to r, \quad \theta \to \pi - \theta, \quad \phi \to \pi + \phi
$$

이에 따라:

$$
\cos\theta \to -\cos\theta, \quad e^{im\phi} \to (-1)^m e^{im\phi}
$$
$$
Y^m_l(\theta, \phi)\propto P_\ell^m(\cos\theta)  e^{im \phi}
$$

$$
P_\ell^m(\cos\theta) \propto \left(\frac{d}{d\cos\theta}\right)^{\ell-m} \sin^{2\ell}\theta
$$

결과:

$$
Y_\ell^m(\theta, \phi) \to (-1)^\ell\, Y_\ell^m
$$

---

## Parity eigenket의 증명 (non-degenerate case)

$[\mathcal{H}, \pi] = 0$이라면, 즉 시스템이 공간에 대칭이면.
그리고 non-degenerate $\ket{n}$에 대해 $\mathcal{H}\ket{n} = E_n\ket{n}$이라면,  
$\ket{n}$또한 $\pi$의 eigenket이다. 
즉 해밀토니안이 공간에 대해 대칭으로 설계되어 있다면 해밀토니안의 eigen ket또한 대칭성을 가진다. 

**proof:**

$$
\ket{a} = \frac{1}{2}(1 \pm \pi)\ket{n}
$$

이라 두면:

$$
\pi\ket{a} = \frac{1}{2}(\pi \pm 1)\ket{n} = \pm\frac{1}{2}(1 \pm \pi)\ket{n} = \pm\ket{a}
$$

$$
\mathcal{H}\ket{a} = E_n \cdot \frac{1}{2}(1 \pm \pi)\ket{n} = E_n\ket{a}
$$

따라서 $\ket{a}$는 같은 에너지를 갖는 parity eigenket.
증명이 직관적으로 이해되지 않는다. 

---

## 4.22 Symmetric Double-Well Potential

$\pi$와 $\mathcal{H}$가 commute하는 상황.
![[Pasted image 20260428091034.png]]
- $\ket{S}$: $\pi$-even eigenstate (symmetric)
- $\ket{A}$: $\pi$-odd eigenstate (antisymmetric)
- $E_A > E_S$ (반대칭 상태가 에너지 더 높음)

입자 에너지가 barrier보다 작으면,
낮은 우물에서 cos, sin, 높은 우물(barrier)에서 cosh, sinh.

**위치 고유상태 (R, L) 정의:**

$$
\ket{R} = \frac{1}{\sqrt{2}}\bigl(\ket{S} + \ket{A}\bigr)
$$

$$
\ket{L} = \frac{1}{\sqrt{2}}\bigl(\ket{S} - \ket{A}\bigr)
$$

$\ket{R}$, $\ket{L}$은 에너지 고유상태가 **아니다**.

**시간 진화:**

$$
\ket{R, t} = \frac{1}{\sqrt{2}}\left(e^{-iE_S t/\hbar}\ket{S} + e^{-iE_A t/\hbar}\ket{A}\right)
$$

$$
= \frac{1}{\sqrt{2}}e^{-iE_S t/\hbar}\left(\ket{S} + e^{-i(E_A - E_S)t/\hbar}\ket{A}\right)
$$

괄호 안의 두 번째 항의 위상이 돌면서 $\ket{L}$과 같아지는 순간이 있음.
이것이 **tunneling oscillation**이며, 진동 주기는:

$$
\frac{(E_A - E_S)t}{\hbar} = \pi \quad \text{가 될 때}
$$

**$\langle L | x | R \rangle \neq 0$:** 터널링 덕분에 두 우물 사이에 전류가 흐름.

barrier → ∞ 극한이 되면 터널링이 일어나지 않는다. 
oscillation이 멈춘다. 이는 $E_A = E_S$가 되었다는걸 의미한다. 

질문: $\ket{S}$ 의정확한 정체가 뭔가? Energy eigen state에서 symmetry한 상태들만 모두 합쳐둔 것인가?

### Spontaneous Symmetry Breaking


→ **배리어가 짱 크면 가능**: Large system phenomena.
→ 강자성체의 경우, 스핀들 정렬 (spontaneous magnetization).

# 궁금한 내용

- $A$가 1이 아닌 다른 값이 나오는 게 가능한지? (non-normalizable 문제 관련)
- Spontaneous symmetry breaking과 degenerate vacuum의 관계가 더 궁금함

# AI의 보충 설명

# 연관 학습 노트


# References

- Sakurai, *Modern Quantum Mechanics*, Chap. 4
- 9주차 1번 강의 손필기

# 다음 강의

[[QM lecture note - Discrete Symmetries]]

# 원본 필기 이미지

![[QM_9thweek_1.pdf]]
