---
title: "QM lecture note - Discrete Symmetries"
date: "2026-04-28"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

# 지난 강의
[[QM lecture note - Symmetry, Conservation Laws, and Degeneracy]]

# 오늘의 핵심

- **이산 대칭(Discrete Symmetry)**: 연속적이지 않은 변환에 의한 대칭
- 세 가지 이산 대칭을 다룸: **Parity**, **Lattice Translation**, **Time Reversal**
- Parity selection rule: 행렬 원소가 0이 되는 조건
- Bloch's theorem: 주기적 퍼텐셜에서의 에너지 고유상태의 형태
- Time reversal symmetry: 복소 켤레(complex conjugate)로 구현됨

# 필기 내용

## 1. Parity와 Selection Rule

### Parity와 연산자의 관계

어떤 연산자 $A$에 대해:
- $\{\pi, A\} = 0$ 이면 $A$는 **parity odd**
- $[\pi, A] = 0$ 이면 $A$는 **parity even**

### Parity Selection Rule

두 개의 parity eigenstate $\ket{\alpha}$와 $\ket{\beta}$가 있다고 하자:

$$
\pi\ket{\alpha} = \varepsilon_\alpha\ket{\alpha}, \quad \pi\ket{\beta} = \varepsilon_\beta\ket{\beta}, \quad \varepsilon_\alpha, \varepsilon_\beta = \pm 1
$$

**주장**: $\bra{\beta}x\ket{\alpha} \neq  0$ , 단, $\varepsilon_\alpha = -\varepsilon_\beta$가 **아닌** 경우!

**증명**: $x$는 parity odd이므로 $-x = \pi x \pi$. 따라서:

$$
\bra{\beta}x\ket{\alpha} = -\bra{\beta}\pi x \pi\ket{\alpha} = -\varepsilon_\alpha \varepsilon_\beta \bra{\beta}x\ket{\alpha}
$$

- $-\varepsilon_\alpha \varepsilon_\beta = +1$이면 (즉, $\varepsilon_\alpha = \varepsilon_\beta$이면): 등식이 항상 성립
- $-\varepsilon_\alpha \varepsilon_\beta = -1$이면 (즉, $\varepsilon_\alpha = -\varepsilon_\beta$이면): $\bra{\beta}x\ket{\alpha} = 0$

> [!tip] Parity Selection Rule
> **다른 parity**를 가진 두 eigenstate 사이의 행렬 원소만 0이 아닐 수 있다.
> 즉, $\bra{\beta}x\ket{\alpha} \neq 0$이 되려면 $\varepsilon_\alpha \neq \varepsilon_\beta$이어야 한다.

---

## 2. Lattice Translation (격자 병진 대칭)

이제 다른 discrete symmetry로 넘어가자: **Lattice translation**.

### 설정

주기적 퍼텐셜:

$$
V(x \pm a) = V(x)
$$

이 경우, 해밀토니안도 periodic하고, lattice translation에 invariant하다.

**Translation operator** $\boldsymbol{\tau}(a)$:

$$
\mathcal{T}^\dagger(a) \mathcal{H} \mathcal{T}(a) = \mathcal{H}
$$

$$
\mathcal{T}^\dagger(a) \mathcal{T}(a) = \mathbf{1}
$$

$\boldsymbol{\tau}(a)$는 **unitary**이지만 **Hermitian은 아니다**.

> [!question] 질문: $\boldsymbol{\tau}(a)$가 그냥 위치 translation을 만드는 연산자랑 무슨 차이인 거지?
> 둘이 그냥 똑같은 거라고 한다. 

### Case 1: Periodic Dirac delta potential
![[Pasted image 20260428131159.png]]
Dirac delta가 일정 간격으로 있는 구조이다.
이런 에너지에서 Ground state는 우물 하나에 완전히 자리잡은 상태, 
n번째 구멍에 자리잡은 상태를 $\ket{n}$이라고 부르자. 
모든 구멍을 동등하므로, $n$에 상관없이 모든 ground states의 에너지는 똑같다. 

$$
H\ket{n} = E_0\ket{n}, \quad \text{모든 } \ket{n}\text{에 대해 에너지가 같다}
$$

$\ket{n}$은 $\boldsymbol{\tau}(a)$에 대한 eigenstate가 **아니다**:

$$
\boldsymbol{\tau}(a)\ket{n} = \ket{n+1}
$$

이는 energy degeneracy 때문에 가능한 것. 
$\ket{n}$은 $\mathcal{H}$와 $\boldsymbol{\tau}(a)$의 **simultaneous eigenstate가 아니다** 

그럼 $\mathcal{H}$와 $\boldsymbol{\tau}(a)$의 simultaneous eigenstate는 무엇일까? 
아마 모든 localized state의 선형 결합일 것이다. 

$$
\ket{\theta} = \sum_n e^{in\theta}\ket{n}, \quad -\pi \leq \theta \leq \pi
$$

검증:

$$
\mathcal{H}\ket{\theta} = \sum_n e^{in\theta} E_0\ket{n} = E_0\ket{\theta}
$$

$$
\boldsymbol{\tau}(a)\ket{\theta} = \sum_n e^{in\theta}\ket{n+1} = e^{-i\theta}\ket{\theta}
$$

따라서 $\ket{\theta}$는 $\boldsymbol{\tau}(a)$의 eigenvalue $e^{-i\theta}$를 가지는 eigenstate이다.

### Case 2: Periodic barrier가 유한한 경우 (tunneling 있음)

이제 인접 격자로 넘어갈 확률(tunneling)이 있다:

$$
\bra{n'}\mathcal{H}\ket{n} \neq 0 \quad \text{when } n' = n \pm 1
$$

구체적으로:

$$
\bra{n\pm 1}\mathcal{H}\ket{n} = -\Delta
$$

따라서 $\mathcal{H}\ket{n}$의 작용:

$$
\mathcal{H}\ket{n} = E_0\ket{n} - \Delta\ket{n+1} - \Delta\ket{n-1}
$$

→ $\ket{n}$은 더 이상 energy eigenstate가 아님.

그럼 과연 $\ket{\theta}$는 energy eigen state일까?

**$\ket{\theta}$에 $\mathcal{H}$를 작용:**

$$
\mathcal{H}\ket{\theta} = E_0 \sum_n e^{in\theta}\ket{n} - \Delta\sum_n e^{in\theta}\ket{n+1} - \Delta\sum_n e^{in\theta}\ket{n-1}
$$

인덱스 재정리 ($n' = n+1$, $n'' = n-1$):

$$
= \left(E_0 - \Delta e^{i\theta} - \Delta e^{-i\theta}\right)\sum_n e^{in\theta}\ket{n}
$$

$$
= \left(E_0 - 2\Delta\cos\theta\right)\ket{\theta}
$$

**에너지 eigenvalue:**

$$
\boxed{E(\theta) = E_0 - 2\Delta\cos\theta}
$$

$\ket{\theta}$의 에너지는 $\theta$에 의존하며, $\Delta$는 **에너지 밴드의 폭(bandwidth)** 을 결정한다.

> [!question] 질문: 바로 옆의 이웃 구멍 뿐만 아니라, 옆옆 이웃, 혹은 저 멀리까지도 낮은 확률로 전이할 수 있는 해밀토니안이라면?

---

## 3. $\theta$의 물리적 의미와 Bloch's Theorem

### $\theta$와 파동함수

$\braket{x'|\theta}$를 계산해보자:

$$
\braket{x'|\theta} \xrightarrow{\boldsymbol{\tau}(a)} \bra{x'}\boldsymbol{\tau}(a)\ket{\theta} = e^{-i\theta}\braket{x'|\theta}
$$

또한 $\bra{x'}\boldsymbol{\tau}(a) = \bra{x'-a}$이므로:

$$
\psi(x' - a) = e^{-i\theta}\psi(x')
$$

### Bloch's Theorem

위 조건의 해(ansatz):

$$
\psi_\theta(x') = e^{ikx'} u_k(x'), \quad \text{with } ka = \theta
$$

여기서 $u_k(x \pm a) = u_k(x)$ — $u_k$는 $a$ 주기로 **periodic**.

**검증:**

$$
\psi_\theta(x'-a) = e^{ik(x'-a)}u_k(x'-a) = e^{-ika}\left(e^{ikx'}u_k(x')\right) = e^{-i\theta}\psi_\theta(x') \checkmark
$$

> [!note] Bloch's Theorem
> 주기적 퍼텐셜 $V(x+a) = V(x)$를 가지는 계의 에너지 고유함수는 다음 형태로 쓸 수 있다:
> $$\psi_k(x) = e^{ikx}u_k(x)$$
> 여기서 $u_k(x)$는 격자 주기와 같은 주기를 가진 함수이다.

### 에너지 밴드 구조
![[Pasted image 20260428132129.png]]
$$
E = E_0 - 2\Delta\cos(ka)
$$

- $k$는 **crystal momentum (quasi-momentum)**: $\hbar k$
- $k$는 modulo $G$ (reciprocal lattice vector)까지만 보존된다.
- 의미있는 범위: **1st Brillouin Zone** $\left(-\frac{\pi}{a} \leq k \leq \frac{\pi}{a}\right)$

에너지 범위: $E_0 - 2\Delta \leq E \leq E_0 + 2\Delta$

> [!warning] $k$는 진짜 운동량이 아니다!
> $\psi_k(x)$는 운동량 연산자의 eigenstate가 아니다:
> $$\hat{p}\psi_k(x) = -i\hbar\frac{\partial}{\partial x}\left(e^{ikx}u_k(x)\right) = \hbar k\, e^{ikx}u_k(x) + e^{ikx}\left(-i\hbar\frac{\partial}{\partial x}u_k(x)\right)$$
> 두 번째 항이 있기 때문에 momentum eigenstate가 아니다.

---

## 4. Time Reversal (시간 역전 대칭)

### 동기

시간 역전: 시간의 방향을 뒤집어도 운동 방정식의 해인 계를 **time reversal symmetry**가 있다고 한다.

$$
x \xrightarrow{\mathcal{T}} x, \qquad p \xrightarrow{\mathcal{T}} -p
$$

time reversal은 위상공간에서의 mapping이다.

**Case 1**: 입자가 속도의 짝수 멱함수를 따르면 → time reversal symmetry를 가진다.

**Case 2**: 입자가 속도의 홀수 멱함수를 따르면 → time reversal symmetry가 깨진다.
예시: 마찰력(열역학에 의해서 time irreversible) 자기장 로렌츠힘(다만 시간 역전에 자기장의 소스까지 고려한다면 time reversal symmetry를 되찾는다. 만약 자기장이 영구자석에 의한 거라면? 스핀도 time revresal에 odd하기 때문에 )

### Time Reversal의 구현: Complex Conjugate

Schrödinger 방정식:

$$
i\hbar\frac{\partial\psi(t)}{\partial t} = \mathcal{H}\psi(t)
$$

$t \to -t$를 해도 이 방정식이 만족되려면:

$$
-i\hbar\frac{\partial\psi(-t)}{\partial t} = \mathcal{H}\psi(-t)
$$

이 방정식의 양변에 complex conjugate를 취하면:

$$
i\hbar\frac{\partial\psi^*(-t)}{\partial t} = \mathcal{H}\psi^*(-t)
$$

따라서 $\psi(t)$가 해이면 $\psi^*(-t)$도 해이다.

> [!note] 결론
> **Time reversal은 complex conjugate로 구현된다.**
> 
> 이것이 time reversal operator $\Theta$가 **antiunitary** operator인 이유이다.

# 궁금한 내용

- Bloch sphere와 Bloch's theorem — 같은 사람이 만든 건가?

# AI의 보충 설명

> [!info] Bloch sphere와 Bloch's theorem은 같은 사람이 만들었나?
> **네, 둘 다 Felix Bloch (1905–1983)의 작품이다.**
> - **Bloch's theorem** (1928): 박사 논문에서 주기적 퍼텐셜 속 전자의 파동함수 구조를 증명
> - **Bloch sphere** (1946): NMR 연구 중 스핀-1/2 계의 상태를 구면으로 표현하는 방법을 고안
> 
> 두 결과물의 성격이 전혀 달라서 다른 사람처럼 느껴지지만, 같은 사람이 완전히 다른 맥락에서 각각 만든 것이다. Bloch는 1952년 노벨 물리학상을 수상했는데, Bloch's theorem이 아니라 **NMR 개발 공로**로 받았다.

> [!info] Long-range hopping이 있는 해밀토니안
> 현재 노트의 모델은 nearest-neighbor hopping만 고려한 경우다:
> $$\mathcal{H}\ket{n} = E_0\ket{n} - \Delta\ket{n+1} - \Delta\ket{n-1}$$
> 
> next-nearest-neighbor 혹은 더 먼 거리까지 hopping 항을 추가하면:
> $$\mathcal{H}\ket{n} = E_0\ket{n} - \Delta_1(\ket{n+1}+\ket{n-1}) - \Delta_2(\ket{n+2}+\ket{n-2}) - \cdots$$
> 
> $\ket{\theta}$에 작용하면 에너지 eigenvalue는:
> $$E(\theta) = E_0 - 2\Delta_1\cos\theta - 2\Delta_2\cos 2\theta - \cdots$$
> 
> 일반적으로 $r$번째 이웃까지 hopping $\Delta_r$이 있다면:
> $$E(\theta) = E_0 - 2\sum_{r=1}^{R} \Delta_r \cos(r\theta)$$
> 
> **핵심적으로 달라지는 점:**
> - 에너지 밴드의 **모양**이 단순한 cosine에서 여러 cosine의 합으로 복잡해짐
> - **밴드폭**이 넓어짐 — 더 먼 이웃까지 hopping이 가능할수록 전자가 더 자유롭게 퍼질 수 있음
> - 밴드 내에 **극값(local min/max)** 이 생길 수 있음 — $\Delta_2$가 충분히 크면 Brillouin zone 내부에 새로운 극값이 생겨 밴드 구조가 복잡해짐
> 
> $\ket{\theta}$가 eigenstate가 된다는 구조 자체는 변하지 않는다. Lattice translation symmetry가 살아있는 한 Bloch's theorem은 항상 성립하고, hopping의 range는 분산 관계 $E(\theta)$의 모양만 바꿀 뿐이다.


# 연관 학습 노트


# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 4
- 강의 필기 (Week 10 - 1)

# 다음 강의

[[QM lecture note - Time Reversal Operator]]
# 원본 필기 이미지

![[QM_10thweek_1.pdf]]
