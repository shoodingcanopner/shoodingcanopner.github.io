---
title: AM finalterm answer
date: "2026-05-31"
draft: true
subject: physics
tags: [study, analytical-mechanics, hamilton, berry-phase, chiral]
class: study
---
문제: [[AM Finalterm problem]]
# Notations 

# Symbol notation

| Symbol         | Meaning                                                             |
| -------------- | ------------------------------------------------------------------- |
| $S$            | Effective action                                                    |
| $\mathbf{p}$   | Momentum                                                            |
| $\mathbf{x}$   | Position                                                            |
| $A$            | Electromagnetic vector potential                                    |
| $\phi$         | Electromagnetic scalar potential                                    |
| $a_\mu$        | Momentum-space Berry connection                                     |
| $\Theta$       | Berry curvature (pseudovector), $\Theta = \frac{\hat{p}}{2\|p\|^2}$ |
| $\mathbf{B}$   | Magnetic field $\mathbf{B} = \nabla \times A$                       |
| $\mathbf{E}$   | Electric field $\mathbf{E} = -\nabla\phi - \partial_t A$            |
| $\mathfrak{m}$ | Effective mass $\mathfrak{m} = 1 + e\,\Theta \cdot B$               |

## Tag notation

수식에 있는 tag중 로마 숫자를 사용한 것은 본 문제 풀이에서 자체적으로 적용한 라벨링이다. 
그 외, 아라비아 숫자를 사용하는 tag는 레퍼런스 논문(Duval & Horváthy 2015)에서 사용한 tag와 일치하도록 작성했다. 
알파벳만 사용한한 tag는 논문에서 등장한 수식이지만, tag는 없었던 수식에 사용하였다. 

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

### 핵심 등가 관계

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
라그랑지안은 이렇게 정의된다. 
$$
L = (\mathbf{p} + e\mathbf{A}) \cdot \dot{\mathbf{x}} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \dot{\mathbf{p}}
$$

$x$와 $p$, 둘 각각에 대한 Euler-Lagrange equation을 푼다. 
## Step 1: $x^j$에 대한 Euler-Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{x}^j} - \frac{\partial L}{\partial x^j} = 0
$$

**첫째 항:**

$$
\frac{\partial L}{\partial \dot{x}^j} = p_j + eA_j
$$

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{x}^j} = \frac{d}{dt}(p_j + eA_j) = \dot{p}_j + e\,\dot{x}^i\partial_{x^i} A_j\,
$$

**둘째 항:**

$$
\frac{\partial L}{\partial x^j} = e\,\partial_{x^j} A_i\,\dot{x}^i - e\,\partial_{x^j}\phi
$$

**합치면:**

$$
\dot{p}_j + e\,\partial_{x^i} A_j\,\dot{x}^i - e\,\partial_{x^j} A_i\,\dot{x}^i + e\,\partial_{x^j}\phi = 0
$$

$$
\dot{p}_j = -e\,\partial_{x^j}\phi + e(\partial_{x^j} A_i - \partial_{x^i} A_j)\dot{x}^i = eE_j + e(\dot{x}\times B)_j
$$

$$
\boxed{\dot{\mathbf{p}} = e\mathbf{E} + e\dot{\mathbf{x}}\times \mathbf{B}}
\tag{I}
$$

---

## Step 2: $p^j$에 대한 Euler-Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{p}^j} - \frac{\partial L}{\partial p^j} = 0
$$

**첫째 항:**

$$
\frac{\partial L}{\partial \dot{p}^j} = -a_j \quad \Rightarrow \quad \frac{d}{dt}(-a_j) = -\dot{p}^i\partial_{p^i}a_j\,
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
\dot{x}^j = \hat{p}^j + (\partial_{p^j}a_i - \partial_{p^i}a_j)\dot{p}^i = \hat{p}^j - \epsilon_{ijk}\Theta_{k}\,\dot{p}^i = \hat{p}^j - [\Theta \times \dot{\mathbf{p}}]^j
$$

$$
\boxed{\dot{\mathbf{x}} = \hat{\mathbf{p}} - \Theta \times \dot{\mathbf{p}}}
\tag{II}
$$

---

## Step 3: $\dot{x}$ 방정식 — (I)을 (II)에 대입
식(II) 속에 있는 $\dot{p}$에 식(I)을 대입한다. 
$$
\dot{x} = \hat{p} - \Theta \times (eE + e\dot{x}\times B)
$$
$$
= \hat{p} - e(\Theta \times E) - e\,\Theta \times (\dot{x} \times B)
$$

Triple product 전개 $\Theta \times (\dot{x} \times B) = \dot{x}(\Theta \cdot B) - B(\Theta \cdot \dot{x})$:

$$
\dot{x} = \hat{p} - e(\Theta \times E) - e(\Theta \cdot B)\dot{x} + e(\Theta \cdot \dot{x})B
$$

$\dot{x}$ 항을 좌변으로 이항:

$$
(1 + e\,\Theta \cdot B)\dot{x} - e(\Theta \cdot \dot{x})B = \hat{p} - e(\Theta \times E)
\tag{III}
$$

**$(\Theta \cdot \dot{x})$ 소거:** 식 (III)의 양변에에 $\Theta$를 내적:

$$
(\Theta \cdot \dot{x})(1 + e\,\Theta \cdot B) - e(\Theta \cdot \dot{x})(\Theta \cdot B) = \Theta \cdot \hat{p} - e\,\Theta \cdot (\Theta \times E)
$$

$\Theta \cdot (\Theta \times E) = 0$ 이고, 좌변을 정리하면:

$$
(\Theta \cdot \dot{x})\Big[(1 + e\,\Theta \cdot B) - e(\Theta \cdot B)\Big] = \Theta \cdot \hat{p}
$$

$$
\Theta \cdot \dot{x} = \Theta \cdot \hat{p}
\tag{IV}
$$

(IV)를 (III)에 대입:

$$
(1 + e\,\Theta \cdot B)\dot{x} - e(\Theta \cdot \hat{p})B = \hat{p} - e(\Theta \times E)
$$

Effective mass $\mathfrak{m} \equiv 1 + e\,\Theta \cdot B$ 를 정의하면

$$
\boxed{\mathfrak{m}\,\frac{dx}{dt} = \hat{p} + e(E \times \Theta) + e(\Theta \cdot \hat{p})B} \tag{2.1-1}
$$

---

## Step 4: $\dot{p}$ 방정식 — (II)를 (I)에 대입

$$
\dot{p} = eE + e(\hat{p} - \Theta \times \dot{p}) \times B
$$
$$
= eE + e\hat{p} \times B - e(\Theta \times \dot{p}) \times B
$$

Triple product 전개 $(\Theta \times \dot{p}) \times B = -\Theta(\dot{p} \cdot B) + \dot{p}(\Theta \cdot B)$:

$$
\dot{p} + e(\Theta \cdot B)\dot{p} = eE + e\hat{p} \times B + e\,\Theta(\dot{p} \cdot B) \tag{V}
$$

**$(\dot{p} \cdot B)$ 소거:** 식 (V)에 $B$를 내적:

$$
(1 + e\,\Theta \cdot B)(\dot{p} \cdot B) = e(E\cdot B) + e(\hat{p} \times B)\cdot B + e\,(\Theta\cdot B)(\dot{p} \cdot B)
$$

$(\hat{p} \times B) \cdot B = 0$ 이므로:

$$
(1 + e\,\Theta \cdot B)(\dot{p} \cdot B) - e(\Theta \cdot B)(\dot{p} \cdot B) = e(E \cdot B)
$$

$$
\dot{p} \cdot B = e(E \cdot B)
\tag{VI}
$$

(VI)를 (V)에 대입하고 effective mass를 도입:

$$
\boxed{\mathfrak{m}\,\frac{dp}{dt} = eE + e\hat{p} \times B + e^2(E \cdot B)\Theta} \tag{2.1-2}
$$

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


- $\mathfrak{m} = 1 + e\boldsymbol{\Theta}\cdot B$: Berry 곡률과 자기장의 결합에서 오는 **위상공간 측도 보정 인자**
- $eE\times\boldsymbol{\Theta}$: 전기장과 Berry 곡률의 결합 → **anomalous Hall velocity**
- $(\boldsymbol{\Theta}\cdot\hat{p})\,eB$: Berry 곡률의 자기장 방향 보정
- $e^2(E\cdot B)\boldsymbol{\Theta}$: **chiral magnetic effect** 류의 항 (Weyl 반금속 등에서 등장)

이 방정식들은 **Weyl 반금속**이나 카이랄 입자의 anomalous transport를 기술한다.


## UV complete version

*UV complete version은 Souriau의 massless spinning particle model이다. 이 모델에서 spin은 독립적인 자유도이며, Poincaré 대칭이 자연스럽게 작용한다. Spin enslaving s=sp^s = s\hat{p} s=sp^​을 gauge fixing으로 적용하면 6차원으로 reduce되어 effective action (1.1)이 복원된다.*

---
# Problem 2 (50 points)

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

## Step 1: Lagrangian의 일반식과 비교

액션을 통해 정의된 라그랑지안을 다시 보면, 

$$
L = (\mathbf{p} + e\mathbf{A}) \cdot \dot{\mathbf{x}} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \dot{\mathbf{p}}
$$

식 (L)에서 제시한 Lagrangian의 일반식과 비교하여 $u_\alpha(\xi)$와 $h(\xi)$를 찾는다. 

$$
u_{x^i} = p_i + eA_i, \qquad u_{p_i} = -a_i
$$
$$
 h = |p| + e\phi \tag{2.7}
$$
 논문에서 제시한 것과 같은 해밀토니안이 나왔다. 
 
## Step 2: Symplectic 2-form $\omega = d\theta$
$u_{x^i}$와 $u_{p^i}$, 그리고 앞서 살펴본 symplectic matrix $\omega_{\alpha\beta}$를 구하는 식 $\omega_{\alpha\beta} \equiv \partial_\alpha u_\beta - \partial_\beta u_\alpha$ 과 symplectic 2-form의 일반식 $\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta$ 를 이용해서 symplectic 2-form을 구한다.

좌표 $\xi^\alpha = (x^1, x^2, x^3, p_1, p_2, p_3)$에서 $\omega_{\alpha\beta} = \partial_\alpha u_\beta - \partial_\beta u_\alpha$를 블록별로 계산한다.

**블록 (1) — $x$-$x$ 블록: $\omega_{x^i x^j}$**

$$
\omega_{x^i x^j} = \partial_{x^i} u_{x^j} - \partial_{x^j} u_{x^i} = e(\partial_i A_j - \partial_j A_i)
$$

양변에 $\epsilon_{kij}$를 곱하는 방식으로 $B^k = \epsilon^{kij}\partial_i A_j$를 역으로 풀면:

$$
\epsilon_{kij}B^k = \epsilon_{kij}\epsilon^{klm}\partial_l A_m = (\delta_i^l\delta_j^m - \delta_i^m\delta_j^l)\partial_l A_m = \partial_i A_j - \partial_j A_i
$$

$\epsilon_{kij} = \epsilon_{ijk}$ (cyclic)이므로:

$$
\partial_i A_j - \partial_j A_i = \epsilon_{ijk}B^k
$$

따라서:

$$
\omega_{x^i x^j} = e\,\epsilon_{ijk}B^k
$$

**블록 (2) — $p$-$p$ 블록: $\omega_{p_i p_j}$**

$$
\omega_{p_i p_j} = \partial_{p_i} u_{p_j} - \partial_{p_j} u_{p_i} = -(\partial_{p_i} a_j - \partial_{p_j} a_i)
$$

$(\nabla_p \times \mathbf{a})^k = \Theta^k$의 정의로부터 $\partial_{p_i} a_j - \partial_{p_j} a_i = \epsilon_{ijk}\Theta^k$이므로:

$$
\omega_{p_i p_j} = -\epsilon_{ijk}\Theta^k
$$

여기서 논문에서 **spin enslaving**이라고 표현하는 스핀과 모멘텀의 관계식, $\mathbf{s} = s\hat{\mathbf{p}}$를 적용한다. Spin $s$인 chiral 입자의 Berry curvature는:

$$
\Theta^k = \frac{s\,p^k}{|p|^3}
$$

이는 $\boldsymbol{\Theta} = s\,\frac{\hat{\mathbf{p}}}{|p|^2}$로, $p$-공간에서의 magnetic monopole이다. 대입하면:

$$
\omega_{p_i p_j} = -\frac{s\,\epsilon_{ijk}p^k}{|p|^3}
$$

**블록 (3) — $x$-$p$ 블록: $\omega_{x^i p_j}$**

$a_j$는 $\mathbf{p}$에만, $A_i$는 $\mathbf{x}$에만 의존하므로 교차 미분은 0:

$$
\omega_{x^i p_j} = \partial_{x^i} u_{p_j} - \partial_{p_j} u_{x^i} = 0 - \partial_{p_j}p_i = -\delta_{ij}
$$

따라서 $\omega_{p_j x^i} = +\delta_{ij}$.

### 2-form으로 조립

각 블록의 기여를 합산하면:

$$
\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta = dp_i\wedge dx^i - \frac{s}{2|p|^3}\epsilon_{ijk}p^k\,dp_i\wedge dp_j + \frac{e}{2}\epsilon_{ijk}B^k\,dx^i\wedge dx^j
$$

인덱스를 올리고 순서를 재배열하면 ($\epsilon_{ijk}p^k\,dp_i\wedge dp_j = \epsilon^{ijk}p_i\,dp_j\wedge dp_k$):

$$
\boxed{\omega = dp_i\wedge dx^i - \frac{s}{2|p|^3}\epsilon^{ijk}p_i\,dp_j\wedge dp_k + \frac{e}{2}\epsilon_{ijk}B^k\,dx^i\wedge dx^j}
$$

이를 논문 표기로 분해하면:

$$
\omega_0 = dp_i\wedge dx^i - \frac{s}{2|p|^3}\epsilon^{ijk}p_i\,dp_j\wedge dp_k \tag{2.6}
$$

$$
\omega = \omega_0 + \frac{e}{2}\epsilon_{ijk}B^i\,dx^j\wedge dx^k \tag{2.5}
$$

문제에서 제시한 형태와 정확히 일치한다. ✓

- 첫 항 $dp_i\wedge dx^i$: 표준 canonical symplectic form
- 둘째 항 $\sim\epsilon^{ijk}p_i\,dp_j\wedge dp_k$: $p$-공간의 magnetic monopole (Berry 곡률), spin enslaving $\mathbf{s}=s\hat{\mathbf{p}}$에 의해 계수가 $s$
- 셋째 항 $\sim\epsilon_{ijk}B^k\,dx^i\wedge dx^j$: 실공간 자기장에서 오는 보정

### Symplectic 행렬 $\omega_{\alpha\beta}$의 명시적 표현

좌표 순서 $(x_1, x_2, x_3, p_1, p_2, p_3)$에서 블록별 계산 결과를 행렬로 쓰면:

$$
\omega_{\alpha\beta} = \begin{pmatrix} 0 & eB^3 & -eB^2 & -1 & 0 & 0 \\ -eB^3 & 0 & eB^1 & 0 & -1 & 0 \\ eB^2 & -eB^1 & 0 & 0 & 0 & -1 \\ 1 & 0 & 0 & 0 & -\Theta^3 & \Theta^2 \\ 0 & 1 & 0 & \Theta^3 & 0 & -\Theta^1 \\ 0 & 0 & 1 & -\Theta^2 & \Theta^1 & 0 \end{pmatrix} 
$$

블록으로 쓰면:

$$
\omega_{\alpha\beta} = \begin{pmatrix} X & -\mathbf{1} \\ \mathbf{1} & P \end{pmatrix}, \qquad X_{ij} = \omega_{x^i x^j} = e\epsilon_{ijk}B^k,\quad P_{ij} = \omega_{p_i p_j} = -\epsilon_{ijk}\Theta^k
$$

### Non-degeneracy: $\det(\omega_{\alpha\beta}) = \mathfrak{m}^2$

**Pfaffian — 정의 및 공식**

$2n\times 2n$ 반대칭 행렬의 determinant는 Pfaffian을 이용해 계산할 수 있다. 

$$
\det(A) = \mathrm{Pf}(A)^2
$$

$2n\times 2n$ 반대칭 행렬 A의 Pfaffian은 다음과 같이 정의된다:

$$
\mathrm{Pf}(A) = \frac{1}{2^n n!}\sum_{\sigma\in S_{2n}}\mathrm{sgn}(\sigma)\prod_{i=1}^{n}A_{\sigma(2i-1),\,\sigma(2i)}
$$
이때 $S_{2n}$는 순열 $\{1, 2, \cdots, 2n\}$의 순열들의 집합니다. 
중복을 제거하면 **완전 매칭(perfect matching)** 전개로 쓸 수 있다. 지표 집합 $\{1,2,\ldots,2n\}$의 완전 매칭이란 전체를 $n$개의 쌍으로 나누는 방법이며, 총 $(2n-1)!! = (2n-1)(2n-3)\cdots 1$가지가 존재한다:

$$
\mathrm{Pf}(A) = \sum_{\text{perfect matchings}\;\alpha}\mathrm{sgn}(\alpha)\prod_{(i,j)\in\alpha}A_{ij}
$$

여기서 부호 $\mathrm{sgn}(\alpha)$는 매칭 $\alpha$를 표준 순서 $\{(1,2),(3,4),\ldots,(2n-1,2n)\}$로 정렬했을 때의 순열의 부호이다. 

구체적으로, 매칭 $\alpha = (i_1 j_1)(i_2 j_2)\cdots(i_n j_n)$에 대해 각 쌍 내부는 $i_k < j_k$, 쌍들 사이는 $i$가 오름차순이 되도록 $i_1 < i_2 < \cdots < i_n$이 되도록 정렬하면 순열 $\sigma = (i_1, j_1, i_2, j_2, \ldots, i_n, j_n)$을 얻는다. 이때 $\mathrm{sgn}(\alpha) = \mathrm{sgn}(\sigma)$이다. 
예를 들어 매칭 $(14)(25)(36)$은 이미 표준 순서이므로 순열 $\sigma = (1,4,2,5,3,6)$에 해당한다. 순열 $\sigma$를 $(1, 2, 3, 4,5,6)$로 되돌리는데 필요한 inversion을 세면 $(4,2),\,(4,3),\,(5,3)$으로 총 3개이므로 $\mathrm{sgn} = (-1)^3 = -1$이다. 

지금 determinant를 구하는 $\omega_{\alpha\beta}$같이 $6\times 6$ matrix의 경우, $n=3$이며, 매칭은 $(2\cdot3-1)!! = 15$가지이다.

$\alpha < \beta$ 조건을 만족하는 $\omega_{\alpha\beta}$중 non-zero element는:

$$
\omega_{12}=eB^3,\quad \omega_{13}=-eB^2,\quad \omega_{23}=eB^1,\quad \omega_{14}=-1,\quad \omega_{25}=-1,\quad \omega_{36}=-1
$$

$$
\omega_{45}=-\Theta^3,\quad \omega_{46}=\Theta^2,\quad \omega_{56}=-\Theta^1
$$

15개 완전 매칭 중 모든 쌍이 영이 아닌 것만 살아남는다:

| 매칭             | 부호   | 기여                                                                        |
| -------------- | ---- | ------------------------------------------------------------------------- |
| $(14)(25)(36)$ | $-1$ | $-\omega_{14}\omega_{25}\omega_{36} = -(-1)(-1)(-1) = 1$                  |
| $(12)(36)(45)$ | $+1$ | $+\omega_{12}\omega_{36}\omega_{45}=(eB^3)(-1)(-\Theta^3) = eB^3\Theta^3$ |
| $(13)(25)(46)$ | $+1$ | $+\omega_{13}\omega_{25}\omega_{46}=(-eB^2)(-1)(\Theta^2) = eB^2\Theta^2$ |
| $(14)(23)(56)$ | $+1$ | $+\omega_{14}\omega_{23}\omega_{56}=(-1)(eB^1)(-\Theta^1) = eB^1\Theta^1$ |
|                |      |                                                                           |

합산하면:

$$
\mathrm{Pf}(\omega) = 1 + e(B^1\Theta^1 + B^2\Theta^2 + B^3\Theta^3) = (1 + e\,\boldsymbol{\Theta}\cdot\mathbf{B}) = \mathfrak{m}
$$

따라서:

$$
\boxed{\det(\omega_{\alpha\beta}) = \mathrm{Pf}(\omega)^2 = \mathfrak{m}^2 \equiv (1 + e\,\Theta \cdot B)^2 } \tag{2.8}
$$

$\mathfrak{m} = 1 + e\,\boldsymbol{\Theta}\cdot\mathbf{B} \neq 0$인 한 $\det(\omega) \neq 0$이므로, symplectic 2-form은 **non-degenerate**하다. 
1번 문제의 EOM에서 등장한 effective mass $\mathfrak{m}$이 여기서 위상공간 부피 측도의 보정 인자로 재등장하는 것은 우연이 아니다.

## Step 3: Hamiltonian vector field $X_H$

$i_{X_H}\omega = dh$는 성분으로 쓰면 $\omega_{\alpha\beta}X_H^\beta = \partial_\alpha h$이다. 즉 (2.3)의 행렬 방정식:

$$
\begin{pmatrix} X & -\mathbf{1} \\ \mathbf{1} & P \end{pmatrix} \begin{pmatrix} \dot{x}^i \\ \dot{p}_i \end{pmatrix} = \begin{pmatrix} \partial_{x^i}h \\ \partial_{p_i}h \end{pmatrix}
$$

$h = |p| + e\phi$이므로 우변은:

$$
\partial_{x^i}h = e\partial_i\phi = -eE_i, \qquad \partial_{p_i}h = \hat{p}_i
$$

**위쪽 블록** ($x$ 방향):

$$
e\epsilon_{ijk}B^k\dot{x}^j - \dot{p}_i = -eE_i \quad\Rightarrow\quad \dot{p}_i = eE_i + e(\dot{\mathbf{x}}\times\mathbf{B})_i \tag{I}
$$

**아래쪽 블록** ($p$ 방향):

$$
\dot{x}^i - \epsilon_{ijk}\Theta^k\dot{p}^j = \hat{p}^i \quad\Rightarrow\quad \dot{\mathbf{x}} = \hat{\mathbf{p}} + \boldsymbol{\Theta}\times\dot{\mathbf{p}} \tag{II}
$$

식 (I), (II)는 Problem 1의 EL 방정식과 완전히 동일하다. 따라서 연립해서 풀면 동일한 결과:

$$
\boxed{X_H = \frac{1}{\mathfrak{m}}\Big[\,\big(\hat{p}^i + e(\mathbf{E}\times\boldsymbol{\Theta})^i + e(\boldsymbol{\Theta}\cdot\hat{\mathbf{p}})B^i\big)\,\partial_{x^i}\ +\ \big(eE_i + e(\hat{\mathbf{p}}\times\mathbf{B})_i + e^2(\mathbf{E}\cdot\mathbf{B})\Theta_i\big)\,\partial_{p_i}\Big]} \tag{2.5}
$$

$X_H$의 적분 곡선(integral curve)이 바로 chiral fermion의 운동 궤적이다.

$\det(\omega) = \mathfrak{m}^2 \neq 0$이 보장되므로 $X_H = \omega^{-1}(dh)$는 **유일하게** 정의된다. Problem 1에서 EOM의 분모로 등장했던 $\mathfrak{m}$이, symplectic 구조의 non-degeneracy 조건으로부터 자연스럽게 재등장하는 것이다.

---

# Problem 3 (100 points)

Consider a spinning particle to follow relativity. To describe the spinning particle, we consider a 9-dimensional phase space, given by:

$$
V^{9} = \left\{ R, I, J \in \mathbb{R}^{3,1} \;\middle|\; I_{\mu}I^{\mu} = J_{\mu}J^{\mu} = 0, \; I_{\mu}J^{\mu} = -1 \right\}
$$ 

Here, $I_{\mu} \& J_{\mu}$ are two independent null vectors, given above. To figure out that this is the 9-dimensional phase space, we introduce $P_{\mu} \& S_{\mu\nu}$ to replace $I_{\mu} \& J_{\mu}$ as follows:
$$I_{\mu} \rightarrow P_{\mu} \quad \text{and} \quad S_{\mu\nu} = -s\epsilon_{\mu\nu\rho\sigma}P^{\rho}J^{\sigma}$$ 

Then, we obtain:
$$V^{9} = \left\{ R, P \in \mathbb{R}^{3,1}, \; S \in \mathfrak{o}(3,1) \;\middle|\; P_{\mu}P^{\mu} = 0, \; S_{\mu\nu}P^{\nu} = 0, \; \frac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^{2} \right\}$$

It is straightforward to check out that $P_{\mu} \& S_{\mu\nu}$ satisfy these constraints. Now, we introduce the following closed two-form:
$$\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\mu}^{\lambda} \wedge S_{\rho}^{\mu} dS_{\lambda}^{\rho}$$ 

Here, we do not consider electromagnetic fields. Identify the Hamiltonian vector field and obtain the following Hamiltonian equation of motion:
$$\begin{cases}
P_{\mu}\dot{R}^{\mu} = 0 \\
\dot{P}^{\mu} = 0 \\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu}
\end{cases}$$

It is quite surprising to realize that this symplectic two-form is identical to that of **Q. 2** if electromagnetic fields are neglected, i.e., $\omega_{0}$ in **Q. 2**. In other words, the symplectic two-form of **Q. 2** without electromagnetic fields is a symplectic reduction of the above symplectic two-form. Can you figure it out? See below.

To obtain down-to-earth expressions, we put $R = (r, t)$, where $r$ and $t$ are the position and time coordinates in a chosen Lorentz frame. The two null-vectors are in turn $P = (p, |p|)$ and $J = (q, -|q|)$, where $p$ and $q$ are two (necessarily nonzero) 3-vectors which satisfy $p \cdot q + |p||q| = 1$. In these terms we have:
$$s = s(p|q| + q|p|)$$
$$S_{ij} = \epsilon_{ijk}s^{k}$$ 
$$S_{j4} = s(p \times q)_{j} = (\hat{p} \times s)_{j}$$

* **(Question)**
  * Based on this coordinate representation, find the moment map that reduces the symplectic two-form in 9-dimensional phase space to that in 6-dimensional one.

---

