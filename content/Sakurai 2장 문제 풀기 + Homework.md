---
title: "Sakurai 2장 문제 풀기"
date: "2026-04-15"
tags:
  - study
  - quantum-mechanics
  - problem-solving
---

# Sakurai 2장 문제 풀기

> [!info]
> Sakurai Modern Quantum Mechanics 2장 연습문제 풀이 모음.
> 접근법과 핵심 개념 위주로 정리.

---

# Week 5 HW
![[QM week5 20262182 김신지.pdf]]

## 2.3 — Larmor Precession

> 전자가 $t=0$에서 $\hat{n} = \hat{x}\sin\beta + \hat{z}\cos\beta$ 방향의 spin-up 상태 $\ket{\uparrow_n}$에 있다. Hamiltonian은 $\mathcal{H} = -\gamma B_0 S_z$. 다음을 구하라.

**Notation 정리:**
- $S_z$ eigenket: $\ket{\uparrow}$, $\ket{\downarrow}$
- $S_x$ eigenket: $\ket{\uparrow_x}$, $\ket{\downarrow_x}$
- $S_n = \mathbf{S}\cdot\hat{n}$ eigenket: $\ket{\uparrow_n}$, $\ket{\downarrow_n}$

#### 초기 상태 $\ket{\uparrow_n}$ 구하기

$S_n = \sin\beta\,S_x + \cos\beta\,S_z = \frac{\hbar}{2}\begin{pmatrix}\cos\beta & \sin\beta\\\sin\beta & -\cos\beta\end{pmatrix}$

eigenvalue equation에서:

$$
\ket{\uparrow_n} = \cos\frac{\beta}{2}\ket{\uparrow} + \sin\frac{\beta}{2}\ket{\downarrow}
$$

#### $\mathcal{H}$의 energy eigenstate

$\ket{\uparrow}$, $\ket{\downarrow}$가 $\mathcal{H}$의 eigenstate:

$$
\mathcal{H}\ket{\uparrow} = -\frac{\hbar\gamma B_0}{2}\ket{\uparrow} = E_\uparrow\ket{\uparrow}, \quad \mathcal{H}\ket{\downarrow} = \frac{\hbar\gamma B_0}{2}\ket{\downarrow} = -E_\uparrow\ket{\downarrow}
$$

#### 시간 발전

$$
\ket{\uparrow_n(t)} = \cos\frac{\beta}{2}\exp\left(i\frac{\gamma B_0}{2}t\right)\ket{\uparrow} + \sin\frac{\beta}{2}\exp\left(-i\frac{\gamma B_0}{2}t\right)\ket{\downarrow}
$$

#### (a) $t$ 시간 후에 $\ket{\uparrow_x}$로 발견될 확률을 구하라

$\ket{\uparrow_x} = \frac{1}{\sqrt{2}}\left(\ket{\uparrow} + \ket{\downarrow}\right)$ 이므로:

$$
\langle\uparrow_x|\uparrow_n(t)\rangle = \frac{1}{\sqrt{2}}\left[\cos\frac{\beta}{2}\exp\left(i\frac{\gamma B_0}{2}t\right) + \sin\frac{\beta}{2}\exp\left(-i\frac{\gamma B_0}{2}t\right)\right]
$$

$$
\left|\langle\uparrow_x|\uparrow_n(t)\rangle\right|^2 = \frac{1}{2}\left[\cos^2\frac{\beta}{2} + \sin^2\frac{\beta}{2} + 2\cos\frac{\beta}{2}\sin\frac{\beta}{2}\cos(\gamma B_0 t)\right]
$$

$$
\boxed{\left|\langle\uparrow_x|\uparrow_n(t)\rangle\right|^2 = \frac{1}{2}\left[1 + \cos(\gamma B_0 t)\sin\beta\right]}
$$

#### (b) $\langle S_x\rangle$의 기댓값을 시간에 대한 함수로 구하라

$\left|\langle\downarrow_x|\uparrow_n(t)\rangle\right|^2 = 1 - \left|\langle\uparrow_x|\uparrow_n(t)\rangle\right|^2 = \frac{1}{2}\left[1 - \cos(\gamma B_0 t)\sin\beta\right]$

$$
\langle S_x\rangle = \frac{\hbar}{2}\left|\langle\uparrow_x|\uparrow_n(t)\rangle\right|^2 - \frac{\hbar}{2}\left|\langle\downarrow_x|\uparrow_n(t)\rangle\right|^2
$$

$$
\boxed{\langle S_x\rangle = \frac{\hbar}{2}\cos(\gamma B_0 t)\sin\beta}
$$

#### (c) $\beta \to 0$의 극한과 $\beta \to \frac{\pi}{2}$의 극한에서 결과를 정당화하라라

**(i) $\beta \to 0$**: $\hat{n} = \hat{z}$ → $\ket{\uparrow_n} = \ket{\uparrow}$

$\left|\langle\uparrow_x|\uparrow\rangle\right| = \frac{1}{\sqrt{2}}$ 이므로 $\ket{\uparrow_x}$로 관찰될 확률은 항상 $\frac{1}{2}$. $\sin\beta = 0$ → $\langle S_x\rangle = 0$ ✅

**(ii) $\beta \to \frac{\pi}{2}$**: $\hat{n} = \hat{x}$ → $\ket{\uparrow_n} = \ket{\uparrow_x}$

$\langle S_x\rangle(0) = \frac{\hbar}{2}\sin\frac{\pi}{2} = \frac{\hbar}{2}$ → $\ket{\uparrow_x}$의 $\langle S_x\rangle$와 같다 ✅

x-y 평면에 묶여 있어서, 시간이 지남에 따라 $\ket{\uparrow_x}$와 $\ket{\downarrow_x}$ 사이를 진동한다.

---

## 2.12 — SHO Superposition State의 $\langle x\rangle$, $\langle p\rangle$

> $\ket{\alpha} = \frac{1}{\sqrt{2}}\ket{0} + \frac{1}{\sqrt{2}}e^{i\delta}\ket{1}$, $\delta\in\mathbb{R}$.
>
> (a) $\langle x'\,|\alpha,t\rangle$를 구하고, $\langle x\rangle$과 $\langle p\rangle$를 찾아라.
> (b) Heisenberg 관점에서 계산하여 같은 결과를 얻어라.

#### 기본 표기

$x_0 = \sqrt{\frac{\hbar}{m\omega}}$, 에너지 고유상태: $E_n = \left(n+\frac{1}{2}\right)\hbar\omega$

#### (a) Schrödinger 관점

시간 발전:

$$
\ket{0(t)} = \exp\left(-i\frac{\omega}{2}t\right)\ket{0}, \quad \ket{1(t)} = \exp\left(-i\frac{3\omega}{2}t\right)\ket{1}
$$

$$
\ket{\alpha,t} = \frac{1}{\sqrt{2}}\exp\left(-i\frac{\omega}{2}t\right)\ket{0} + \frac{1}{\sqrt{2}}\exp\left(-i\frac{3\omega}{2}t+i\delta\right)\ket{1}
$$

파동함수:

$$
\psi_\alpha(x',t) = \frac{1}{\sqrt{2}}\exp\left(-i\frac{\omega}{2}t\right)\psi_0(x') + \frac{1}{\sqrt{2}}\exp\left(-i\frac{3\omega}{2}t+i\delta\right)\psi_1(x')
$$

여기서 $\psi_0(x') = \frac{1}{\pi^{1/4}\sqrt{x_0}}\exp\left(-\frac{x'^2}{2x_0^2}\right)$, $\psi_1(x') = \frac{\sqrt{2}}{\pi^{1/4}\sqrt{x_0}}\cdot\frac{x'}{x_0}\psi_0$

**$\langle x\rangle$ 계산:**

$\langle 0|x|0\rangle = \langle 1|x|1\rangle = 0$ (홀/짝 함수의 적분이 0)

$$
\langle 0|x|1\rangle = \int x'\psi_0^*\psi_1\,dx' = \frac{\sqrt{2}}{x_0}\int x'^2\psi_0^*\psi_0\,dx' = \frac{\sqrt{2}}{x_0}\cdot\frac{x_0^2}{2} = \frac{x_0}{\sqrt{2}}
$$

$$
\langle\alpha|x(t)|\alpha\rangle = \frac{x_0}{\sqrt{2}}\cos(\omega t - \delta)
$$

**$\langle p\rangle$ 계산:**

$\langle 0|p|1\rangle = -i\hbar\frac{1}{x_0\sqrt{2}}\int\left(1-\frac{x'^2}{x_0^2}\right)\psi_0^*\psi_0\,dx' = -i\frac{\hbar}{x_0\sqrt{2}}$

$$
\langle\alpha|p(t)|\alpha\rangle = -\frac{\hbar}{x_0\sqrt{2}}\sin(\omega t - \delta)
$$

$$
\boxed{\langle x\rangle_\alpha(t) = \frac{x_0}{\sqrt{2}}\cos(\omega t - \delta), \quad \langle p\rangle_\alpha(t) = -\frac{\hbar}{x_0\sqrt{2}}\sin(\omega t - \delta)}
$$

#### (b) Heisenberg 관점

$a(t) = e^{-i\omega t}a_0$, $a^\dagger(t) = e^{i\omega t}a_0^\dagger$ 이므로:

$$
x(t) = x_0\cos\omega t + \frac{p_0}{m\omega}\sin\omega t
$$

$$
p(t) = p_0\cos\omega t - m\omega x_0\sin\omega t
$$

$\langle 0|x_0|0\rangle = 0$, $\langle 0|x_0|1\rangle = \frac{x_0}{\sqrt{2}}$, $\langle 0|p_0|1\rangle = -i\frac{\hbar}{x_0\sqrt{2}}$ 를 이용하면:

$$
\langle\alpha|x(t)|\alpha\rangle = \frac{x_0}{\sqrt{2}}\cos\delta\cos\omega t + \frac{x_0}{\sqrt{2}}\sin\delta\sin\omega t = \frac{x_0}{\sqrt{2}}\cos(\omega t - \delta)
$$

$$
\langle\alpha|p(t)|\alpha\rangle = -\frac{\hbar}{x_0\sqrt{2}}\sin(\omega t - \delta)
$$

두 관점에서 완전히 동일한 결과. ✅

> [!tip]
> $\langle x\rangle$과 $\langle p\rangle$이 $\omega$ 주기로 진동하는 것은 Ehrenfest 정리를 만족한다. 이 상태는 QM적인 특성을 가지면서도 고전 SHO와 같이 진동하는 상태이다.

---

# Week 6 HW
![[QM week6 20262182 김신지.pdf]]
## 2.41 — Propagators and Action

> 시작점 $(x,t) = (0,0)$, 도착점 $(x,t) = (D,T)$인 두 경로를 고려.
> - 경로 1 (가속 경로): $x_1(t) = \frac{1}{2}at^2$
> - 경로 2 (등속 경로): $x_2(t) = vt$
>
> 포텐셜: $V(x) = -\frac{2mD}{T^2}x$

#### (a) $a$와 $v$ 결정, $V(x)$를 $m, D, T$로 나타내기

경로 1에서 $D = x_1(T) = \frac{1}{2}aT^2$ 이므로:

$$
a = \frac{2D}{T^2}
$$

$F = -\frac{dV}{dx} = ma$ 이므로:

$$
V(x) = -\frac{2mD}{T^2}x
$$

경로 2에서 $D = vT$ 이므로:

$$
v = \frac{D}{T}
$$

#### (b) 각 경로에서 Classical action $S = \int_0^T\left[\frac{1}{2}m\dot{x}^2 - V(x)\right]dt$ 계산

**경로 1** ($\dot{x}_1 = at$):

$$
S_1 = \int_0^T\left[\frac{1}{2}ma^2t^2 + \frac{2mD}{T^2}\cdot\frac{1}{2}at^2\right]dt = \left(\frac{1}{2}ma^2 + \frac{maD}{T^2}\right)\frac{T^3}{3}
$$

$a = \frac{2D}{T^2}$를 대입:

$$
S_1 = \frac{4}{3}\cdot\frac{mD^2}{T}
$$

**경로 2** ($\dot{x}_2 = v$):

$$
S_2 = \int_0^T\left[\frac{1}{2}mv^2 + \frac{2mD}{T^2}\cdot vt\right]dt = \frac{mD^2}{2T} + \frac{mD^2}{T} = \frac{3}{2}\cdot\frac{mD^2}{T}
$$

**비교:**

$$
S_1 = \frac{4}{3}\cdot\frac{mD^2}{T} < S_2 = \frac{3}{2}\cdot\frac{mD^2}{T}
$$

올바른 경로 (경로 1)의 action이 더 작다 — 최소 작용의 원리와 일치. ✅

$$
\Delta S = S_2 - S_1 = \frac{1}{6}\cdot\frac{mD^2}{T}
$$

#### (c) $D = 1\text{ mm}$, $T = 1\text{ ms}$일 때 $\Delta S/\hbar$ 계산

$\frac{D^2}{T} = 10^{-3}\text{ m}^2/\text{s}$, $\hbar = 10^{-34}\text{ m}^2\text{kg/s}$

**전자** ($m_e = 9\times 10^{-31}\text{ kg}$):

$$
\frac{\Delta S}{\hbar} = \frac{1}{6}\cdot\frac{m_e D^2}{\hbar T} \approx 1.44
$$

**탄소 나노입자** ($m_c \approx 2\times 10^{-24}\text{ kg}$):

$$
\frac{\Delta S}{\hbar} \approx 3.2\times 10^6
$$

#### 해석: 고전 극한

**전자** ($\Delta S/\hbar \approx 1.44$): 비고전적 경로와의 phase 차이가 작다. 양자적 효과가 두드러지며, 비고전적 경로도 중첩에 기여하여 간섭 효과가 관찰될 수 있다.

**탄소 나노입자** ($\Delta S/\hbar \approx 3.2\times 10^6$): 고전적 경로에서 조금이라도 벗어나면 위상이 너무 빠르게 진동하여 상쇄되고, 오직 고전적 경로만 생존한다. 질량이 큰 물체가 고전 역학을 따르는 이유이다.

> [!tip] Path Integral의 물리적 의미
> Feynman 경로적분에서 고전 경로 근방에서만 위상이 정렬(stationary phase)되어 보강간섭이 일어난다. 이것이 대응원리가 구현되는 메커니즘이다.

---

# 내가 중요하다 생각하는 문제


## 2.1 — Spin Precession: Heisenberg 그림으로 풀기

> $H = \omega S_z$로 주어진 spin precession 문제를 Heisenberg 그림에서 풀어라. $S_x(t)$, $S_y(t)$, $S_z(t)$를 구하라.

---

### Step 1 — Heisenberg 운동방정식 세우기

Heisenberg 운동방정식:

$$
\frac{d}{dt}S_i^H(t) = \frac{1}{i\hbar}[S_i^H(t),\, H]
$$

$H = \omega S_z$는 시간 무관 해밀토니안이므로, 앞선 논의에서 확인했듯 commutator 안은 슈뢰딩거 연산자로 계산해도 된다:

$$
\frac{d}{dt}S_i(t) = \frac{1}{i\hbar}[S_i,\, \omega S_z]= \frac{\omega}{i\hbar}[S_i, S_z]
$$

spin commutation relation $[S_i, S_j] = i\hbar\,\varepsilon_{ijk}S_k$를 이용하면:

$$
[S_x, S_z] = -i\hbar S_y, \quad [S_y, S_z] = i\hbar S_x, \quad [S_z, S_z] = 0
$$

각각 대입:

$$
\frac{d}{dt}S_x = \frac{\omega}{i\hbar}(-i\hbar S_y) = \omega S_y
$$

$$
\frac{d}{dt}S_y = \frac{\omega}{i\hbar}(i\hbar S_x) = -\omega S_x
$$

$$
\frac{d}{dt}S_z = 0
$$

연립 미분방정식을 얻었다:

$$
\dot{S}_x = \omega S_y, \qquad \dot{S}_y = -\omega S_x, \qquad \dot{S}_z = 0
\tag{*}
$$

---

### Step 2 — 잘못된 접근: $S_x \sim e^{i\omega t}$로 ansatz 넣기

$\dot{S}_x = \omega S_y$, $\dot{S}_y = -\omega S_x$를 보면 고전역학의 커플링된 진동 방정식과 모양이 같다. 그래서 자연스럽게 다음 ansatz를 시도하고 싶어진다:

$$
S_x(t) \stackrel{?}{=} S_x(0)\,e^{i\omega t}
$$

첫 번째 방정식에 대입:

$$
i\omega S_x(0)e^{i\omega t} = \omega S_y(t)
\implies S_y(t) = i\, S_x(0)\,e^{i\omega t}
$$

두 번째 방정식에 대입해서 확인해보면:

$$
\dot{S}_y = i^2\omega S_x(0)\,e^{i\omega t} = -\omega S_x(0)\,e^{i\omega t}
$$

$-\omega S_x(t) = -\omega S_x(0)e^{i\omega t}$이므로 두 번째 방정식은 수치적으로는 성립한다.

**==정말 놀랍게도!!!!!==**
**그러나 이 ansatz는 틀렸다.** $S_x(t)$, $S_y(t)$는 Hermitian 연산자여야 하는데, $e^{i\omega t}$라는 복소 인수를 곱하면 Hermiticity가 깨진다!!!!!!!

$$
\left(S_x(0)\,e^{i\omega t}\right)^\dagger = S_x(0)\,e^{-i\omega t} \neq S_x(0)\,e^{i\omega t}
$$

물리적으로 관측 가능한 양은 Hermitian 연산자여야 하므로, 이 해는 받아들일 수 없다.

> [!warning] 핵심 차이
> 고전역학에서 $x(t) = x_0 e^{i\omega t}$를 쓸 때는 $x$가 실수이고 복소 지수는 단순히 계산 편의를 위한 트릭이다. 그러나 양자역학에서 $S_x(t)$는 연산자이고, 연산자에 $e^{i\omega t}$를 곱하면 Hermiticity 자체가 바뀐다. 연산자에 복소 ansatz를 쓸 때는 훨씬 신중해야 한다.

---

### Step 3 — 올바른 접근: $S_\pm$를 이용한 diagonalization

SHO에서 $x$와 $p$의 커플링을 $a$, $a^\dagger$로 diagonalize했던 것처럼, $S_x$와 $S_y$의 커플링을 raising/lowering operator로 풀자:

$$
S_+ \equiv S_x + iS_y, \qquad S_- \equiv S_x - iS_y
$$

$(*)$를 선형결합해서 $S_\pm$의 운동방정식을 구한다:

$$
\frac{d}{dt}S_+ = \dot{S}_x + i\dot{S}_y = \omega S_y + i(-\omega S_x) = -i\omega(S_x + iS_y) = -i\omega S_+
$$

$$
\frac{d}{dt}S_- = \dot{S}_x - i\dot{S}_y = \omega S_y - i(-\omega S_x) = i\omega(S_x - iS_y) = i\omega S_-
$$

이제 각각 독립적인 1차 ODE가 됐다:

$$
\dot{S}_+ = -i\omega S_+, \qquad \dot{S}_- = i\omega S_-
$$

이는 즉시 적분 가능:

$$
S_+(t) = e^{-i\omega t}\,S_+(0), \qquad S_-(t) = e^{i\omega t}\,S_-(0)
$$

이 해는 문제 없다. $e^{\pm i\omega t}$가 c-number(복소 스칼라)로 연산자에 곱해지는 것이고, $S_+$와 $S_-$는 서로 Hermitian 켤레 $S_- = S_+^\dagger$이므로 일관성이 있다.

---

### Step 4 — $S_x(t)$, $S_y(t)$, $S_z(t)$ 복원

정의를 역산하면:

$$
S_x = \frac{S_+ + S_-}{2}, \qquad S_y = \frac{S_+ - S_-}{2i}
$$

대입:

$$
S_x(t) = \frac{S_+(t) + S_-(t)}{2} = \frac{e^{-i\omega t}S_+(0) + e^{i\omega t}S_-(0)}{2}
$$

$S_+(0) = S_x(0) + iS_y(0)$, $S_-(0) = S_x(0) - iS_y(0)$을 다시 대입:


$$
S_x(t) = \frac{e^{-i\omega t}(S_x(0)+iS_y(0)) + e^{i\omega t}(S_x(0)-iS_y(0))}{2}
$$

$$
= S_x(0)\frac{e^{i\omega t}+e^{-i\omega t}}{2} - S_y(0)\frac{e^{i\omega t}-e^{-i\omega t}}{2i}\cdot i
$$

$$
\boxed{S_x(t) = S_x(0)\cos\omega t + S_y(0)\sin\omega t}
$$

같은 방식으로:

$$
\boxed{S_y(t) = -S_x(0)\sin\omega t + S_y(0)\cos\omega t}
$$

$$
\boxed{S_z(t) = S_z(0)}
$$

---

### 결과 해석

$S_z$는 보존되고, $S_x$와 $S_y$는 $z$축 주위로 각속도 $\omega$로 세차운동한다. 행렬 형태로 쓰면:

$$
\begin{pmatrix}S_x(t)\\S_y(t)\\S_z(t)\end{pmatrix} = \begin{pmatrix}\cos\omega t & \sin\omega t & 0\\ -\sin\omega t & \cos\omega t & 0\\ 0 & 0 & 1\end{pmatrix}\begin{pmatrix}S_x(0)\\S_y(0)\\S_z(0)\end{pmatrix}
$$

이것은 $z$축에 대한 회전 행렬 $R_z(\omega t)$와 정확히 같은 구조다. 즉, 하이젠베르크 그림에서 연산자가 고전적 세차운동과 동일한 방식으로 시간 발전함을 확인할 수 있다.

> [!tip] SHO와의 유사성
> | SHO | Spin Precession |
> |-----|----------------|
> | $x$, $p$ 커플링 → $a$, $a^\dagger$로 diagonalize | $S_x$, $S_y$ 커플링 → $S_+$, $S_-$로 diagonalize |
> | $a(t) = e^{-i\omega t}a(0)$ | $S_+(t) = e^{-i\omega t}S_+(0)$ |
> | $a^\dagger(t) = e^{i\omega t}a^\dagger(0)$ | $S_-(t) = e^{i\omega t}S_-(0)$ |
> | $x(t)$, $p(t)$를 $a$, $a^\dagger$로 복원 | $S_x(t)$, $S_y(t)$를 $S_\pm$로 복원 |
>
> 두 문제 모두 **커플링된 연산자를 diagonalize하는 새 basis를 찾는 것**이 핵심이다.

---

### 보충: $S_x(t)$, $S_y(t)$의 행렬 표현과 Eigenket의 시간 진화

#### 행렬 표현 확인

우리가 구한 결과 $S_x(t) = S_x\cos\omega t + S_y\sin\omega t$에 행렬을 직접 대입:

$$
S_x(t) = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}\cos\omega t + \frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}\sin\omega t = \frac{\hbar}{2}\begin{pmatrix}0 & e^{-i\omega t}\\ e^{i\omega t} & 0\end{pmatrix}
$$

$$
S_y(t) = -S_x\sin\omega t + S_y\cos\omega t = \frac{\hbar}{2}\begin{pmatrix}0 & -ie^{-i\omega t}\\ ie^{i\omega t} & 0\end{pmatrix}
$$

$t=0$에서 $S_x$, $S_y$의 표준 행렬로 환원됨을 확인할 수 있다. ✅

#### Eigenket의 시간 진화

$S_x(t)\ket{\psi} = \pm\frac{\hbar}{2}\ket{\psi}$를 풀면 ($z$ basis로 표현):

**$S_x(t)$의 eigenket:**

$$
\ket{\uparrow_x; t} = \frac{1}{\sqrt{2}}\begin{pmatrix}e^{-i\omega t}\\1\end{pmatrix}, \qquad \ket{\downarrow_x; t} = \frac{1}{\sqrt{2}}\begin{pmatrix}-e^{-i\omega t}\\1\end{pmatrix}
$$

**$S_y(t)$의 eigenket:**

$$
\ket{\uparrow_y; t} = \frac{1}{\sqrt{2}}\begin{pmatrix}-ie^{-i\omega t}\\1\end{pmatrix}, \qquad \ket{\downarrow_y; t} = \frac{1}{\sqrt{2}}\begin{pmatrix}ie^{-i\omega t}\\1\end{pmatrix}
$$

$t=0$에서 표준 eigenket으로 환원됨을 확인:

$$
\ket{\uparrow_x; 0} = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix} \checkmark, \qquad \ket{\uparrow_y; 0} = \frac{1}{\sqrt{2}}\begin{pmatrix}-i\\1\end{pmatrix} \checkmark
$$

#### 구조의 아름다움

$e^{-i\omega t}$가 위쪽 성분($\ket{\uparrow_z}$ 성분)에만 붙는 구조가 보인다. 이는 Schrödinger 그림의 시간 발전

$$
e^{-iHt/\hbar}\ket{\uparrow_z} = e^{-i\omega t/2}\ket{\uparrow_z}, \quad e^{-iHt/\hbar}\ket{\downarrow_z} = e^{i\omega t/\hbar/2}\ket{\downarrow_z}
$$

과 완전히 일관된다. Heisenberg 그림에서 eigenket이 $e^{iHt/\hbar}$로 변환되므로, $\ket{\uparrow_z}$ 성분은 $e^{-i\omega t/2} \cdot e^{-i\omega t/2} = e^{-i\omega t}$, $\ket{\downarrow_z}$ 성분은 $e^{i\omega t/2} \cdot e^{-i\omega t/2} = 1$ — 정확히 위 행렬 표현의 패턴이다.

> [!tip]
> $t$ 시점에 $S_x$ 업스핀으로 측정될 확률은 Heisenberg 그림에서
> $$P = \left|\braket{\uparrow_x; t \mid \psi_0}\right|^2$$
> 이며, 이는 Schrödinger 그림의 $\left|\braket{\uparrow_x \mid \psi(t)}\right|^2$와 동등하다.
