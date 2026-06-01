---
title: AM finalterm answer
date: "2026-05-31"
draft: true
subject: physics
tags: [study, analytical-mechanics, hamilton, berry-phase, chiral]
class: study
---

# AM finalterm answer

## 기호표

| Symbol | Meaning |
|--------|---------|
| $S$ | Effective action |
| $p$ | 운동량 |
| $x$ | 위치 |
| $A$ | 벡터 퍼텐셜 |
| $\phi$ | 스칼라 퍼텐셜 |
| $a_\mu$ | Momentum-space Berry connection |
| $\Theta$ | Berry curvature (pseudovector), $\Theta = \frac{\hat{p}}{2\|p\|^2}$ |
| $\mathbf{B}$ | 자기장 $\mathbf{B} = \nabla \times A$ |
| $\mathbf{E}$ | 전기장 $\mathbf{E} = -\nabla\phi - \partial_t A$ |
| $\mathfrak{m}$ | Berry 보정 인자 $\mathfrak{m} = 1 + e\,\Theta \cdot B$ |

---

## 배경: Souriau Mechanics의 Symplectic framework

> [!info] 이 섹션의 목적
> 레퍼런스 논문(Duval & Horváthy 2015)의 **Appendix A**는 일반적인 해밀턴 역학의 symplectic 기하학 표현을 제시한다. 이 표현이 없으면 논문 전체의 언어를 이해할 수 없으며, 특히 1번 문제의 EOM 유도는 이 프레임워크 위에서 이루어진다. 아래는 그 공백을 직접 채운 유도이다.

### 설정: 일반적 Lagrangian

Phase space 좌표 $\xi^\alpha = (x^i, p_i)$를 통합해서 다음 형태의 Lagrangian을 고려한다:

$$
\mathcal{L} = u_\alpha(\xi)\,\dot{\xi}^\alpha - h(\xi) \tag{L}
$$

$u_\alpha$는 $\xi$에만 의존하는 함수이고, $h(\xi)$는 Hamiltonian이다. 
$u_\alpha(\xi)\dot{\xi}^\alpha$는 phase space Lagrangian에서 $p_i\dot{q}^i$에 해당하는 항의 일반화이다. 르장드르 변환이 이미 완료된 phase space 위에서, $u_\alpha$는 canonical 1-form $\theta = p_i\,dq^i$를 일반화한 것이다. 
*Berry term $-a_i\dot{p}^i$가 있는 경우, $u_{p_i} = -a_i \neq 0$이 되어 momentum space 방향으로도 연결(connection)이 생기며, 이것이 Berry connection의 기하학적 의미이다.*

### Step A: Euler-Lagrange 방정식 유도

Lagrangian의 편미분을 계산한다. $\frac{\partial}{\partial\xi^\alpha} = \partial_\alpha$라고 표기. 

$$
\frac{\partial\mathcal{L}}{\partial\xi^\alpha} = \partial_\alpha u_\beta\,\dot{\xi}^\beta - \partial_\alpha h
$$

$$
\frac{\partial\mathcal{L}}{\partial\dot{\xi}^\alpha} = u_\alpha
$$

Euler-Lagrange equation에 대입한다. $\frac{d}{dt}u_\alpha$를 chain rule로 전개하면:

$$
\frac{d}{dt}u_\alpha(\xi) = \dot{\xi}^\beta\,\partial_\beta u_\alpha
$$

따라서 Euler-Lagrange equation은:

$$
\partial_\alpha u_\beta\,\dot{\xi}^\beta - \partial_\alpha h - \dot{\xi}^\beta\,\partial_\beta u_\alpha = 0
$$

$$
\boxed{(\partial_\alpha u_\beta - \partial_\beta u_\alpha)\,\dot{\xi}^\beta = \partial_\alpha h} \tag{A1-1}
$$
논문 속 식 (A1)을 이렇게 유도했다. 

### Step B: Symplectic 2-form 정의

위 방정식의 계수 행렬을 $\omega_{\alpha\beta}$로 이름 붙인다:

$$
\omega_{\alpha\beta} \equiv \partial_\alpha u_\beta - \partial_\beta u_\alpha \tag{A1-2}
$$

$\omega_{\alpha\beta} = -\omega_{\beta\alpha}$이므로 antisymmetric하다. 이를 이용해서 phase space 위의 sympletic 2-form을 정의하면:

$$
\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta
$$
이로서 일반적인 라그랑지안으로부터 그에 상응하는 sympletic 2-form을 구하는 방법을 알아냈다. 

### Step C: Evolution space와 $\sigma$ 정의

Phase space에 시간 $t$를 한 차원 더 붙여 **evolution space** $V = \text{phase space}\times\mathbb{R}$를 만든다. 이 위에서 다음 two-form을 정의한다:

$$
\sigma = \omega - dh\wedge dt = \frac{1}{2}(\partial_\alpha u_\beta - \partial_\beta u_\alpha)\,d\xi^\alpha\wedge d\xi^\beta - \partial_\alpha h\,d\xi^\alpha\wedge dt \tag{A2}
$$

### Step D: $\sigma(\dot{y}, \cdot) = 0$이 EOM임을 증명

Evolution space의 좌표 $y = (\xi^\alpha, t)$에서 trajectory일 때,  
논문에서는 아래 식을 EMO이라고 둔다. 
$$
\sigma(\dot{y}, \cdot) = 0 \tag{A3}
$$
이것이 EMO임을 증명해 보자. Trajectory의 tangential vertor는 $\dot{y}$는:

$$
\dot{y} = \dot{\xi}^\alpha\,\partial_\alpha + \partial_t
$$

시간 $t$가 매개변수이므로 $dt(\dot{y}) = 1$이다. 임의의 벡터 $v$에 대해 $v^\alpha \equiv d\xi^\alpha(v)$, $v^t \equiv dt(v)$로 정의하면, wedge product의 정의로부터:

$$
(d\xi^\alpha\wedge d\xi^\beta)(\dot{y},\, v) = \dot{\xi}^\alpha v^\beta - \dot{\xi}^\beta v^\alpha
$$

$$
(d\xi^\alpha\wedge dt)(\dot{y},\, v) = \dot{\xi}^\alpha v^t - v^\alpha
$$

대입하면:

$$
\sigma(\dot{y},v) = \frac{1}{2}\omega_{\alpha\beta}(\dot{\xi}^\alpha v^\beta - \dot{\xi}^\beta v^\alpha) - \partial_\alpha h(\dot{\xi}^\alpha v^t - v^\alpha)
$$

$\omega_{\alpha\beta}$의 반대칭성을 이용해 첫 항을 정리한다:

$$
\frac{1}{2}\omega_{\alpha\beta}(\dot{\xi}^\alpha v^\beta - \dot{\xi}^\beta v^\alpha) = \omega_{\alpha\beta}\dot{\xi}^\alpha v^\beta
$$

따라서:

$$
\sigma(\dot{y},v) = \left[\omega_{\alpha\beta}\dot{\xi}^\alpha + \partial_\beta h\right]v^\beta - \left[\dot{\xi}^\alpha\partial_\alpha h\right]v^t
$$

이것이 임의의 $v$에 대해 0이 되려면 $v^\beta$와 $v^t$의 계수가 각각 0이어야 한다:

$$
\begin{cases}
\omega_{\alpha\beta}\,\dot{\xi}^\alpha + \partial_\beta h = 0 \\[4pt]
\dot{\xi}^\alpha\,\partial_\alpha h = 0
\end{cases}
$$

**첫 번째 조건**: $\omega_{\alpha\beta}\dot{\xi}^\alpha = -\partial_\beta h$. $\omega_{\alpha\beta} = -\omega_{\beta\alpha}$를 이용해 부호를 바꾸고 인덱스를 $\alpha\leftrightarrow\beta$로 rename하면:

$$
\boxed{\omega_{\alpha\beta}\,\dot{\xi}^\beta = \partial_\alpha h}
$$

이것이 Hamilton 방정식이며, 식 (A1-1)과 같다. 

**두 번째 조건**: $\dot{\xi}^\alpha\partial_\alpha h = \frac{dh}{dt} = 0$ — 에너지 보존이다. 이 조건은 사실 독립적이지 않다. 첫 번째 EOM 양변에 $\dot{\xi}^\beta$를 곱하면:

$$
\omega_{\alpha\beta}\,\dot{\xi}^\alpha\dot{\xi}^\beta = \dot{\xi}^\alpha\partial_\alpha h\,
$$

좌변은 $\omega_{\alpha\beta}$의 반대칭성에 의해 자동으로 0이므로, 에너지 보존 $\frac{dh}{dt}=0$은 EOM으로부터 자동으로 따라온다.

### 요약: 핵심 등가 관계

$$
\underbrace{\delta S = 0}_{\text{variational principle}} \iff \underbrace{\omega_{\alpha\beta}\dot{\xi}^\beta = \partial_\alpha h}_{\text{Hamilton EOM}} \iff \underbrace{\sigma(\dot{y},\cdot)=0}_{\ker\sigma\text{에 접하는 곡선}}
$$

이 세 가지 표현은 모두 동치이며, 논문 Appendix A의 핵심이다. 1번 문제는 이 프레임워크를 chiral fermion action에 적용한 것이다.

---

# Problem 1 (50 points)

Based on the following effective action:
$$S = \int \left( (\mathbf{p} + e\mathbf{A}) \cdot \frac{d\mathbf{x}}{dt} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \frac{d\mathbf{p}}{dt} \right) dt$$ 

$$\nabla_{p} \times \mathbf{a} = \Theta \equiv \frac{\hat{\mathbf{p}}}{2|\mathbf{p}|^{2}}, \quad \hat{p} = \frac{\mathbf{p}}{|\mathbf{p}|}$$

where $a_{\mu}$ is a momentum-space Berry connection, derive the Hamiltonian equation of motion and solve them to find the below expression
$$\begin{cases}
\mathfrak{m}\frac{dx}{dt} = \hat{p} + eE \times \Theta + (\Theta \cdot \hat{p}) eB \\
\mathfrak{m}\frac{dp}{dt} = eE + e\hat{p} \times B + e^{2}(E \cdot B)\Theta
\end{cases}$$
$$\mathfrak{m} = 1 + e\Theta \cdot B$$ 

Here, $\mathfrak{m}$ may be regarded as an effective mass for this particle.

* **(Questions)**
  * Can you imagine a UV complete version of this effective action? In other words, figure out where this effective action comes from. *(Hint: Maybe google or AI with "chiral fermions". It is important to notice the momentum-linear dispersion, which implies that Poincaré invariance = Lorentz invariance + Translational invariance will play a key role.)* 
  * Can you figure out the Lorentz symmetry in this particle dynamics (optional)? 
---
$x$와 $p$ 두 가지를 나누어서 
## Step 1: $x^j$에 대한 Euler-Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{x}^j} - \frac{\partial L}{\partial x^j} = 0
$$

**첫째 항:**

$$
\frac{\partial L}{\partial \dot{x}^j} = p_j + eA_j
$$

$$
\frac{d}{dt}(p_j + eA_j) = \dot{p}_j + e\,\partial_i A_j\,\dot{x}^i
$$

**둘째 항:**

$$
\frac{\partial L}{\partial x^j} = e\,\partial_j A_i\,\dot{x}^i - e\,\partial_j\phi
$$

**합치면:**

$$
\dot{p}_j + e\,\partial_i A_j\,\dot{x}^i - e\,\partial_j A_i\,\dot{x}^i + e\,\partial_j\phi = 0
$$

$$
\dot{p}_j = -e\,\partial_j\phi + e(\partial_j A_i - \partial_i A_j)\dot{x}^i = eE_j + e(\dot{x}\times B)_j
$$

$$
\boxed{\dot{p} = eE + e\dot{x}\times B}
\tag{I}
$$

---

## Step 2: $p^j$에 대한 Euler-Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{p}^j} - \frac{\partial L}{\partial p^j} = 0
$$

**첫째 항:**

$$
\frac{\partial L}{\partial \dot{p}^j} = -a_j \quad \Rightarrow \quad \frac{d}{dt}(-a_j) = -\partial_{p^i}a_j\,\dot{p}^i
$$

**둘째 항:**

$$
\frac{\partial L}{\partial p^j} = \dot{x}^j - \partial_{p^j}a_i\,\dot{p}^i - \frac{p^j}{|p|}
$$

**합치면:**

$$
-\partial_{p^i}a_j\,\dot{p}^i - \dot{x}^j + \partial_{p^j}a_i\,\dot{p}^i + \hat{p}^j = 0
$$

$$
\dot{x}^j = \hat{p}^j + (\partial_{p^j}a_i - \partial_{p^i}a_j)\dot{p}^i = \hat{p}^j + \Theta_{ji}\,\dot{p}^i
$$

$$
\boxed{\dot{x} = \hat{p} + \Theta \times \dot{p}}
\tag{II}
$$

---

## Step 3: $\dot{x}$ 방정식 — (I)을 (II)에 대입

$$
\dot{x} = \hat{p} + \Theta \times (eE + e\dot{x}\times B)
$$

$$
= \hat{p} + e(\Theta \times E) + e\,\Theta \times (\dot{x} \times B)
$$

Triple product 전개 $\Theta \times (\dot{x} \times B) = \dot{x}(\Theta \cdot B) - B(\Theta \cdot \dot{x})$:

$$
\dot{x} = \hat{p} + e(\Theta \times E) + e(\Theta \cdot B)\dot{x} - e(\Theta \cdot \dot{x})B
$$

$\dot{x}$ 항을 좌변으로 이항:

$$
(1 - e\,\Theta \cdot B)\dot{x} + e(\Theta \cdot \dot{x})B = \hat{p} + e(\Theta \times E)
\tag{III}
$$

**$(\Theta \cdot \dot{x})$ 소거:** 식 (III)에 $\Theta$를 내적:

$$
(\Theta \cdot \dot{x})(1 - e\,\Theta \cdot B) + e(\Theta \cdot \dot{x})(\Theta \cdot B) = \Theta \cdot \hat{p} + e\,\Theta \cdot (\Theta \times E)
$$

$\Theta \cdot (\Theta \times E) = 0$ 이고, 좌변을 정리하면:

$$
(\Theta \cdot \dot{x})\Big[(1 - e\,\Theta \cdot B) + e(\Theta \cdot B)\Big] = \Theta \cdot \hat{p}
$$

$$
\Theta \cdot \dot{x} = \Theta \cdot \hat{p}
\tag{IV}
$$

(IV)를 (III)에 대입:

$$
(1 - e\,\Theta \cdot B)\dot{x} + e(\Theta \cdot \hat{p})B = \hat{p} + e(\Theta \times E)
$$

$\mathfrak{m} \equiv 1 + e\,\Theta \cdot B$ 를 정의하면 ($-$부호 주의: $1 - e\,\Theta\cdot B = -({\mathfrak{m}-2})$가 아니라 좌변을 다시 쓰면):

$$
\boxed{\mathfrak{m}\,\frac{dx}{dt} = \hat{p} + e(E \times \Theta) + e(\Theta \cdot \hat{p})B}
$$

---

## Step 4: $\dot{p}$ 방정식 — (II)를 (I)에 대입

$$
\dot{p} = eE + e(\hat{p} + \Theta \times \dot{p}) \times B
$$

$$
= eE + e\hat{p} \times B + e(\Theta \times \dot{p}) \times B
$$

Triple product 전개 $(\Theta \times \dot{p}) \times B = \Theta(\dot{p} \cdot B) - \dot{p}(\Theta \cdot B)$:

$$
\dot{p} + e(\Theta \cdot B)\dot{p} = eE + e\hat{p} \times B + e\,\Theta(\dot{p} \cdot B)
$$

$$
\mathfrak{m}\,\dot{p} = eE + e\hat{p} \times B + e\,\Theta(\dot{p} \cdot B)
\tag{V}
$$

**$(\dot{p} \cdot B)$ 소거:** 식 (V)에 $B$를 내적:

$$
\mathfrak{m}(\dot{p} \cdot B) = e(E \cdot B) + e(\hat{p} \times B) \cdot B + e(\Theta \cdot B)(\dot{p} \cdot B)
$$

$(\hat{p} \times B) \cdot B = 0$ 이므로:

$$
\mathfrak{m}(\dot{p} \cdot B) - e(\Theta \cdot B)(\dot{p} \cdot B) = e(E \cdot B)
$$

$$
(\dot{p} \cdot B)\Big[\mathfrak{m} - e(\Theta \cdot B)\Big] = e(E \cdot B)
$$

$\mathfrak{m} - e(\Theta \cdot B) = 1$ 이므로:

$$
\dot{p} \cdot B = e(E \cdot B)
\tag{VI}
$$

(VI)를 (V)에 대입:

$$
\boxed{\mathfrak{m}\,\frac{dp}{dt} = eE + e\hat{p} \times B + e^2(E \cdot B)\Theta}
$$

---

## 결과

$$
\mathfrak{m} = 1 + e\,\Theta \cdot B
$$

$$
\begin{cases}
\mathfrak{m}\,\dfrac{dx}{dt} = \hat{p} + eE \times \Theta + (\Theta \cdot \hat{p})\,eB \\[8pt]
\mathfrak{m}\,\dfrac{dp}{dt} = eE + e\hat{p} \times B + e^{2}(E \cdot B)\Theta
\end{cases}
$$
---
## Problem 2 (50 points)

Revisit this problem based on the symplectic geometry perspectives. Can you find the corresponding symplectic two-form and the symplectic vector field? Let me give you the answer.

$$V^{7} = T(\mathbb{R}^{3}\backslash\{0\}) \times \mathbb{R} = (x, p, t) \quad \text{(6-dimensional phase space + 1 time dimension)}$$

$$\sigma = \omega - dh \wedge dt$$ 

$$\omega = \omega_{0} + \frac{e}{2}\epsilon_{ijk}B^{i}dx^{j} \wedge dx^{k}$$

$$\omega_{0} = dp_{i} \wedge dx^{i} - \frac{s}{2|p|^{3}}\epsilon^{ijk}p_{i}dp_{j} \wedge dp_{k}$$

$$
h = |p| + e\phi
$$
$$
i_{X_{H}}\omega = dH \quad \text{or the following expression:}
$$

$$
\omega_{\alpha\beta}\dot{\xi}^{\beta} = \partial_{\alpha}h, \quad \text{where } \omega_{\alpha\beta} = \partial_{\alpha}u_{\beta} - \partial_{\beta}u_{\alpha}
$$

(Question)
  * Clarify the symplectic structure. Show that this symplectic two-form is non-degenerate, i.e., given by $\det(\omega_{\alpha\beta}) \neq 0$.

---

## Step 1: Hamiltonian 찾기

Action을 $\dot{x}$와 $\dot{p}$ 항으로 분리한다:

$$
S = \int \left[ (p + eA) \cdot \dot{x} - a \cdot \dot{p} - (|p| + e\phi) \right] dt
$$
식 (L)에서 제시한 Lagrangian의 일반식과 비교하여 $u_\alpha(\xi)$와 $h(\xi)$를 찾는다. 

$$
u_{x^i} = p_i + eA_i, \qquad u_{p_i} = -a_i, \qquad h = |p| + e\phi
$$

이렇게 자연스럽게 해밀토니안을 찾았다. 

## Step 2: Symplectic 2-form $\omega = d\theta$


$u_{x^i} = p_i + eA_i, \qquad u_{p_i} = -a_i$를 이용, 
$\omega_{\alpha\beta} \equiv \partial_\alpha u_\beta - \partial_\beta u_\alpha$ , $\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta$

**첫째 항** $d(p_i + eA_i)\wedge dx^i$:

$A = A(x)$이므로 $\partial_{p_j}A_i = 0$. 반대칭화하면:

$$
dp_i \wedge dx^i - \frac{e}{2}B_k\,\epsilon_{kij}\,dx^i \wedge dx^j
$$

여기서 $B_k = \epsilon_{kij}\partial_i A_j$.

**둘째 항** $-d(a_i\,dp^i) = -da_i\wedge dp^i$:

Berry curvature tensor를 정의하면:

$$
\Theta_{ij} \equiv \partial_{p_i}a_j - \partial_{p_j}a_i
$$

$$
\Rightarrow -\frac{1}{2}\Theta_{ij}\,dp^i \wedge dp^j
$$

**전체:**

$$
\omega = dp_i \wedge dx^i - \frac{e}{2}B_k\,\epsilon_{kij}\,dx^i \wedge dx^j - \frac{1}{2}\Theta_{ij}\,dp^i \wedge dp^j
$$


---

## Step 3: Symplectic matrix 표현

위상공간 좌표 $\xi^A = (x^i, p_i)$에서 $\omega = \frac{1}{2}\omega_{AB}\,d\xi^A\wedge d\xi^B$:

$$
\omega_{AB} = \begin{pmatrix} -e\mathbf{B}^{\times} & -\mathbf{1} \\ \mathbf{1} & -\boldsymbol{\Theta} \end{pmatrix}
$$

여기서 $(\mathbf{B}^{\times})_{ij} \equiv \epsilon_{ijk}B_k$ 는 cross-product matrix.

---

## Step 4: Hamilton 방정식 $\iota_V\omega = dH$

$dH$ 를 계산한다:

$$
\frac{\partial H}{\partial x^i} = e\partial_i\phi = -eE_i, \qquad \frac{\partial H}{\partial p_i} = \frac{p_i}{|p|} = \hat{p}_i
$$

$V = (\dot{x}^i, \dot{p}_i)$에 대해 $\iota_V\omega = dH$의 성분 방정식:

$$
-eB_k\epsilon_{kij}\dot{x}^j - \dot{p}_i = -eE_i
\tag{I}
$$

$$
\dot{x}^i - \Theta_{ij}\dot{p}^j = \hat{p}^i
\tag{II}
$$

식 (I)에서:

$$
\dot{p}_i = eE_i + e(\dot{x}\times B)_i
\tag{I'}
$$

---

## Step 5: $\dot{x}$ 방정식 유도

식 (II)에 (I')를 대입:

$$
\dot{x}^i = \hat{p}^i + (\boldsymbol{\Theta}\times\dot{p})^i = \hat{p}^i + e(\boldsymbol{\Theta}\times E)^i + e(\boldsymbol{\Theta}\times(\dot{x}\times B))^i
$$

Triple product $\boldsymbol{\Theta}\times(\dot{x}\times B) = \dot{x}(\boldsymbol{\Theta}\cdot B) - B(\boldsymbol{\Theta}\cdot\dot{x})$를 적용:

$$
\dot{x}^i = \hat{p}^i + e(E\times\boldsymbol{\Theta})^i + e(\boldsymbol{\Theta}\cdot B)\dot{x}^i - eB^i(\boldsymbol{\Theta}\cdot\dot{x})
$$

$e(\boldsymbol{\Theta}\cdot B)\dot{x}$ 항을 좌변으로 이항하면 $\mathfrak{m} = 1 + e\boldsymbol{\Theta}\cdot B$ 가 자연히 등장한다. 양변에 $\boldsymbol{\Theta}$를 내적하여 $(\boldsymbol{\Theta}\cdot\dot{x})$ 를 소거하면:

$$
\boxed{\mathfrak{m}\frac{dx}{dt} = \hat{p} + eE\times\boldsymbol{\Theta} + (\boldsymbol{\Theta}\cdot\hat{p})\,eB}
$$

---

## Step 6: $\dot{p}$ 방정식 유도

식 (I')에 $\dot{x}$ 결과를 대입하여 정리:

$$
\boxed{\mathfrak{m}\frac{dp}{dt} = eE + e\hat{p}\times B + e^2(E\cdot B)\boldsymbol{\Theta}}
$$

---

## 결과 정리

$$
\mathfrak{m} = 1 + e\,\Theta \cdot B
$$

$$
\begin{cases}
\mathfrak{m}\dfrac{dx}{dt} = \hat{p} + eE\times\Theta + (\Theta\cdot\hat{p})\,eB \\[8pt]
\mathfrak{m}\dfrac{dp}{dt} = eE + e\hat{p}\times B + e^{2}(E\cdot B)\Theta
\end{cases}
$$

### 각 항의 물리적 의미

- $\mathfrak{m} = 1 + e\boldsymbol{\Theta}\cdot B$: Berry 곡률과 자기장의 결합에서 오는 **위상공간 측도 보정 인자**
- $eE\times\boldsymbol{\Theta}$: 전기장과 Berry 곡률의 결합 → **anomalous Hall velocity**
- $(\boldsymbol{\Theta}\cdot\hat{p})\,eB$: Berry 곡률의 자기장 방향 보정
- $e^2(E\cdot B)\boldsymbol{\Theta}$: **chiral magnetic effect** 류의 항 (Weyl 반금속 등에서 등장)

이 방정식들은 **Weyl 반금속**이나 카이랄 입자의 anomalous transport를 기술한다.

---


## Related Concepts

- [[Hamiltonian Mechanics]]
- [[Symplectic Geometry]]
- [[Berry Phase]]
