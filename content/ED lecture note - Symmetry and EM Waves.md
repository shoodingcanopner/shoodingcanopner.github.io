---
title: ED lecture note - Symmetry and EM Waves
date: "2026-03-18"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Momentum Conservation and Stress Tensor]]

# 오늘의 핵심

- 전자기량(E, B, ρ, J, P 등)은 **Rotation(R), Inversion(I), Time Reversal(T)** 변환 하에서 각각 고유한 변환 특성을 가진다.
- **B는 pseudovector**: Inversion에서 부호가 바뀌지 않고, Time reversal에서 부호가 바뀐다.
- Nonconducting media에서 평면 전자기파는 **Helmholtz 방정식**을 만족한다.
- Phase velocity $v = \omega/k = c/n$ (n: 굴절률)

# 필기 내용

## Chapter 6 — 전자기장의 대칭적 특성

### Rotation (R), Inversion (I), Time Reversal (T) 개요

회전 변환부터 보자.
[[Orthogonal Matrix]] 문서를 참고.

$$
X_i' = a_{ij} X_j, \quad a_{ij} = (a^{-1})_{ji}
$$

2nd rank tensor는 각 차원의 인덱스를 합하여 변환된다:

$$
B'_{\alpha\beta} = \alpha_{\alpha\gamma} \, a_{\beta\delta} \, B_{\gamma\delta}
$$

벡터의 외적: $\vec{A} = \vec{B} \times \vec{C}$, 성분으로는 $A_i = \varepsilon_{ijk} B_j C_k$

변환 후:
$$
A'_i = \det(a) \cdot a_{ij} A_j
$$

Rotation의 경우 $\det(a) = 1$이므로, 변환 아래서 외적의 결과(pseudo vector)도 벡터와 똑같이 변환된다.

---

### Reflection (반사 변환, I)

또 다른 변환으로 **reflection**이 있다. $I$라고 쓰겠다.

예를 들어 $z$-$y$ plane을 반사면으로 잡은 경우:

$$
X_i(x, y, z) \xrightarrow{I_z} X'_i(x', y', z') = X'_i(x, y, -z)
$$
성분별로:
$$
x_i \to x'_i = x_i, \quad y_i \to y'_i = y_i, \quad z_i \to z'_i = -z_i
$$
점대칭을 만드는 **space inversion**의 경우 모든 부호가 바뀐다:

$$
X_i \to X'_i = -X_i
$$

Real vector의 경우도 마찬가지: $\vec{v} \to \vec{v}' = -\vec{v}$

Axial vector (pseudovector)는 inversion을 해도 부호가 바뀌지 않는다. 
**Axial vector (pseudovector)**: $\vec{A} \to \vec{A}' = +\vec{A}$

왜인가? $\vec{C} = \vec{E} \times \vec{F}$ 이라 하면,

$$
\vec{C}' = (-\vec{E}) \times (-\vec{F}) = \vec{E} \times \vec{F} = \vec{C}
$$

Pseudo scalar는 inversion에 부호가 바뀐다. 
예를 들어 $A \cdot (B \times C) = d$라 하면, $d$는 pseudoscalar.

$$
d' = \vec{A}' \cdot (\vec{B}' \times \vec{C}') = (-\vec{A}) \cdot (-\vec{B} \times -\vec{C}) = -d
$$

스칼라답지 않게 inversion에서 부호가 바뀐다.

#### 일반적인 n-th rank tensor의 inversion 변환

아까 본 식, 
$$
B'_{\alpha\beta} = \alpha_{\alpha\gamma} \, a_{\beta\delta} \, B_{\gamma\delta}
$$
에서 눈치챌 수 있듯, rank가 늘어나는 만큼 transform tensor를 여러 번 사용하기 때문에, 부호가 바뀌는지 여부는 rank가 결정한다. 

$$
M^{N'} = (-1)^N M^N \quad \text{이 경우 진짜 tensor (true tensor)}
$$

진짜 텐서와 반대의 규칙으로 부호가 바뀌는 경우를 pseudo tensor라고 한다. 

$$
M^{N'} = (-1)^{N+1} M^N \quad \text{이 경우 pseudo tensor}
$$

---

### Time Reversal (T)

$$
T(t) \to t' = -t
$$
위치 벡터는 time reversal에 invariant하다.
$$
T(\vec{x}) \to \vec{x}' = \vec{x} \quad \text{(위치 벡터는 변하지 않는다)}
$$

운동량은 시간 미분이 들어가 있기 때문에 time reveral에 부호가 바뀐다. 
$$
T(\vec{p}) = T\!\left(m\frac{d\vec{x}}{dt}\right) \to \vec{p}' = m\left(-\frac{d\vec{x}}{dt}\right) = -\vec{p}
$$

**뉴턴의 운동방정식은 time reversal에 invariant한가?**

$$
m\ddot{\vec{x}} = -\frac{\partial V}{\partial \vec{x}} = m\frac{d^2\vec{x}}{dt^2}
$$

Time reversal을 하면:

$$
m\left(\frac{d}{d(-t)}\right)\!\left(\frac{d}{d(-t)}\right)\vec{x} = -\frac{\partial V}{\partial \vec{x}}
$$

$$
m\ddot{\vec{x}} = -\frac{\partial V}{\partial \vec{x}} \quad \text{그대로이다.}
$$

Time reversal을 하면 원래 final condition이었던 곳에서 initial state로 향해 evolve한다.

---

### 전자기량의 R, I, T 변환 특성

각 변환을 할 때, R, I, T를 다하면 전기역학의 물리량은 어떻게 변하나.

#### (i) 전하 밀도 ρ → true scalar & time reversal invariant

$$
R, I, T(\rho) \to \rho \quad \text{(true scalar)}
$$

#### (ii) 전기장 E → true vector & time reversal invariant

$$
I(\vec{E}) \to \vec{E}' = -\vec{E} \quad \text{(true vector)}
$$
$$
T(\vec{E}) \to \vec{E}' = \vec{E} \quad \text{(시간 역전 시 invariant)}
$$

$\nabla \cdot \vec{E} = \rho/\varepsilon_0$는 inversion에 invariant한가?

$$
I(\rho/\varepsilon_0) = \rho/\varepsilon_0
$$
$$
I(\nabla \cdot \vec{E}) = (-\nabla) \cdot (-\vec{E}) = \nabla \cdot \vec{E}
$$

따라서 inversion에 대해 $\nabla \cdot \vec{E} = \rho/\varepsilon_0$ 는 invariant하다. ✓

#### (iii) 자기장 B → pseudo vector & time reversal non-invariant

**B는 pseudovector**다:

$$
I(\vec{B}) = +\vec{B}
$$
$$
T(\vec{B}) = -\vec{B}
$$

$\vec{F} = q(\vec{v} \times \vec{B})$이고, $\vec{F}$와 $\vec{v}$는 real vector이니, B는 pseudovector여야 한다. 
$T(\vec{B}) = -\vec{B}$임(B의 time reversal non-invariance)은 $\nabla \times \vec{B} = \mu_0 \vec{J}$로도 확인 가능. $T(\vec{J}) = -\vec{J}$이므로 양변이 일치하려면 $T(\vec{B}) = -\vec{B}$이어야 한다. (방정식 자체는 time reversal에 invariant하다.)

$\nabla \times \vec{E} = -\partial \vec{B}/\partial t$는 어떤가? Inversion에서 invariant해야 한다.

$$
I(\nabla \times \vec{E}) = \nabla \times \vec{E}
$$
$$
I\!\left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t} I(\vec{B}) = -\frac{\partial \vec{B}}{\partial t}
$$

Inversion에서 양변이 같으므로 invariant. ✓

#### (iv) Current density J → real vector & time reversal non-invariant

$$
I(\vec{J}) = -\vec{J}
$$

$$
T(\vec{J}) = -\vec{J}
$$

$\vec{J} = \rho \vec{v}$를 이용해서도 증명할 수 있다.

#### (v) Polarization P → realvector & time reversal invariant
time reversal invariant한 이유는 polarization이 점전하 밀도의 공간 미분에 의존하기 때문
$$
I(\vec{P}) = -\vec{P}, \quad T(\vec{P}) = \vec{P}
$$

P를 B에 대한 polynomial로 나타내면?

$$
\vec{P} \propto \chi_E \vec{E} + \text{higher order term of } \vec{E}
$$

일단 P를 B 없이 나타낼 수 있다.

P를 B에 대한 first order로 나타낸다면? 
**그 항은 $P$와 대칭적 특성이 같아야만 한다.** 

| | $\vec{E} \times \vec{B}$ | $\left(\frac{\partial \vec{E}}{\partial t}\right) \times \vec{B}$ | $\left(\frac{\partial^2 \vec{E}}{\partial t^2}\right) \times \vec{B}$ |
|---|---|---|---|
| Inversion | $-$ | $-$ | $-$ |
| Time reversal | $-$ | $+$ | $-$ |

$\frac{\partial \vec{E}}{\partial t} \times \vec{B}$ 만이 P의 대칭성을 만족한다.

질문) $\vec{E} \cdot \vec{B}$는 생각 안 하지? E랑 B는 항상 직교하나?

대칭성을 만족한 항들만을 골라 expansion하면 아래같이 표현할 수 있다. 

$$
\frac{1}{\varepsilon_0} \vec{P} = \chi_0 \vec{E} + \chi_1 \frac{\partial \vec{E}}{\partial t} \times \vec{B} + \chi_2 (\vec{B} \cdot \vec{B})\vec{E} + \chi_3 (\vec{E} \cdot \vec{B})\vec{B}
$$

이 중에서 $\frac{\partial \vec{E}}{\partial t} \times \vec{B}$ 가 진짜 물리량으로 영향을 주나? 그런 사례가 있있다고 한다.

이게 Chapter 6 끝이다.

> [!note] Magnetic monopole에 대한 이야기는 직접 책에서 읽어보기를.

---

## Chapter 7 — 전자기장에 대해 (전자기파)

### Plane EM Wave in Nonconducting Media

진공이다. 전하, 전류 둘 다 없다.

$$
\nabla \cdot \vec{B} = 0
$$

$$
\nabla \cdot \vec{E} = 0
$$

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

$$
\nabla \times \vec{B} = \mu\epsilon \frac{\partial \vec{E}}{\partial t}
$$

Solution이 $e^{-i\omega t}$ 꼴이라고 가정.

시간에 대해 푸리에 변환해서 $\vec{E}(t, \vec{x}) \to \vec{E}(\omega, \vec{x})$의 solution을 구하자. 푸리에 변환하면 $\frac{\partial}{\partial t} \to -i\omega$로 바뀐다.

변환 후 맥스웰 방정식:

$$
\nabla \cdot \vec{B} = 0
$$

$$
\nabla \cdot \vec{E} = 0
$$

$$
\nabla \times \vec{E} = i\omega \vec{B}
$$

$$
\nabla \times \vec{B} = \mu\epsilon (-i\omega)\vec{E}
$$

이걸 풀면:

$$
\nabla \times (\nabla \times \vec{E}) - i\omega \, \nabla \times \vec{B} = 0 \quad \to \quad \nabla \times (\nabla \times \vec{E}) - \omega^2 \mu\epsilon \vec{E} = 0
$$

$$
\nabla \times (\nabla \times \vec{B}) + \omega^2 \mu\epsilon \, \nabla \times \vec{E} = 0
$$

Vector identity $\nabla \times (\nabla \times \vec{E}) = \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E} = -\nabla^2 \vec{E}$ 를 사용하면:

$$
\left(\nabla^2 + \omega^2 \mu\epsilon\right)\vec{E} = 0
$$

### Helmholtz Equation

$$
\left(\nabla^2 + \omega^2 \mu\epsilon \right) \begin{pmatrix} \vec{E} \\ \vec{B} \end{pmatrix} = 0
$$

Solution이 $e^{i\vec{k}\cdot\vec{x} - i\omega t}$라고 가정하면, $\nabla^2 \to -k^2$:

$$
-k^2 + \omega^2 \mu\epsilon = 0, \quad k = \omega \sqrt{\mu \epsilon}
$$

### Phase Velocity

$$
v = \frac{\omega}{k} = \frac{1}{\sqrt{\mu\varepsilon}} = \frac{c}{n}, \quad n = \frac{c}{v} \quad \text{(굴절률, index of refraction)}
$$

$$
e^{ikx - i\omega t} = e^{ik(x - \frac{\omega}{k}t)} = e^{ik(x - vt)}
$$

이 표현에서 phase에 작용하는 게 phase velocity.

일반적인 solution은 오른쪽으로 가는 파동과 왼쪽으로 가는 파동의 선형 결합:

$$
U(x, t) = a\, e^{ikx - i\omega t} + b\, e^{-ikx - i\omega t}
$$

파수를 정리하면:

$$
U_k(x, t) = a\, e^{ik(x - \frac{\omega}{k}t)} + b\, e^{-ik(x + \frac{\omega}{k}t)}
$$

**Nondispersive media**에서는 $\mu$와 $\varepsilon$가 $\omega$에 independent하다.

$$
U(x) = \frac{1}{\sqrt{2\pi}} \int U_k \, e^{ikx} \, dk
$$

# 궁금한 내용



# AI의 보충 설명


# 연관 학습 노트


# 필기 원본

[[ED_4thweek_2.pdf]]

# 다음 강의

[[ED lecture note - EM Waves and Polarization]]
