---
title: AM lecture note - Symplectic geometry intro
date: "2026-04-28"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Analytical Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[AM lecture note - Generating function]]에서 generating function의 네 가지 형태($F_1, F_2, F_3, F_4$), Legendre 변환 관계, Hamilton-Jacobi 방정식을 다뤘다.

# 오늘의 핵심

이제 **미분기하, symplectic geometry**를 시작한다. 해밀턴 방정식을 differential form으로 나타내는 방법을 배울 것이다.

오늘의 핵심 개념:
- **Tangent space**: 점 $x \in \mathcal{U}$에서의 접선 공간 $T_x\mathcal{U} = \{x\} \times \mathbb{R}^n$
- **Vector field**: 각 점에 tangent vector를 대응시키는 사상 $V: \mathcal{U} \to T_x\mathcal{U}$
- **Integral curve**: $\frac{d\gamma}{dt} = V(\gamma(t))$를 만족하는 곡선 → 운동 방정식을 따르는 궤도
- **Lie bracket**: 두 벡터장의 commutator $[V, W]$, 미분기하의 핵심 구조
- **Tangent map (push-forward)**: 매끄러운 사상 $\varphi: \mathcal{U}_1 \to \mathcal{U}_2$가 벡터장을 어떻게 이동시키는지



$$\boxed{\quad \frac{d}{dt}\gamma(t) = V(\gamma(t)) \quad \to \quad \text{이것이 ODE이다.}\quad}
$$


**예시:** $\mathcal{H}(p, q)$가 phase space에서 해밀토니안을 나타낸다 치자. 해밀턴 방정식은 integral curve를 만들어 낸다. 이를 결정하는 vector field는:

$$
\mathbb{V}(q, p) = \dot{q}^i\,\frac{\partial}{\partial q^i} + \dot{p}_i\,\frac{\partial}{\partial p_i} = \frac{\partial\mathcal{H}}{\partial p_i}\frac{\partial}{\partial q^i} - \frac{\partial\mathcal{H}}{\partial q^i}\frac{\partial}{\partial p_i}
$$

($\dot{q}^i$와 $\dot{p}_i$가 $\dfrac{\partial\gamma^i}{\partial t}$의 역할을 하는 것)



Vector field와 integral curve, 그리고 0-form에 미분 연산자처럼 작용하는 vector field

$$
\boxed{\quad V(f)(x_0) = \frac{d}{dt}\bigg|_{t=0} f(\gamma(t)) \quad}
$$
이 연산 결과 또한 0-form이다. 


**RHS 계산:**

$$
\frac{d}{dt}f(\gamma(t)) = \sum_i \frac{d\gamma^i(t)}{dt}\,\frac{\partial f}{\partial x^i}\bigg|_{\gamma(t)} = \sum_i V^i(\gamma(t))\,\frac{\partial f}{\partial x^i}(\gamma(t))
$$


**Lie bracket 정의:**

$$
[V, W]\,f = V(W(f)) - W(V(f))
$$


이를 이용해 tangent vector를 mapping하는 **$\varphi_*$를 정의한다:

$$
\varphi_*: T_x\mathcal{U}_1 \longrightarrow T_{\varphi(x)}\mathcal{U}_2
$$

$T_x\mathcal{U}_1$의 basis를 $\varphi_*$가 어떻게 mapping하는지는, 그냥 좌표계 변환이다. 

$$
\varphi_*\!\left(\frac{\partial}{\partial x^i}\right) = \frac{\partial y^j}{\partial x^i}\,\frac{\partial}{\partial y^j} = \frac{\partial\varphi^j}{\partial x^i}\,\frac{\partial}{\partial y^j}
$$

따라서 $T_x\mathcal{U}_1$에 속한 일반적인 벡터 $\xi^i\dfrac{\partial}{\partial x^i}$에 대해서:

$$
\varphi_*\!\left(\sum_{i=1}^n \xi^i\,\frac{\partial}{\partial x^i}\right) = \sum_j\sum_i \xi^i\,\frac{\partial\varphi^j}{\partial x^i}\,\frac{\partial}{\partial y^j}
$$


# 필기 내용

## Vector field란 무엇인가?

$\mathcal{U} \subset \mathbb{R}^n$, $x \in \mathcal{U}$, $x = (x_1, \ldots, x_n)$

**Tangent space of $\mathcal{U}$:**

$$
T_x\mathcal{U} := \{x\} \times \mathbb{R}^n = \{(x, \xi) \mid \xi \in \mathbb{R}^n\}
$$

- $x$는 **point**를 나타내고, $\xi$는 **velocity vector**를 나타낸다.
- $(x, \xi)$는 tangent vector를 나타낸다.
- 이것은 linear structure를 가진다. 같은 점 $x$에서 정의된 두 tangent vector는 선형적으로 더할 수 있다. 

$$
\lambda_1(x, \xi) + \lambda_2(x, \eta) = (x,\, \lambda_1\xi + \lambda_2\eta)
$$

---

$\gamma$는 시간이라는 매개변수를 manifold 위의 한 점으로 mapping하는 함수, 즉 운동 그 자체이며, manifold 위의 curve이다. 

$$
\gamma: (t_0, t_1) \longrightarrow \mathcal{U} \subset \mathbb{R}^n, \qquad t \longmapsto \gamma(t)
$$

$\gamma$로 tangent vector를 정의할 수 있다. $\gamma$가 지나가는 특정 점 $x$에서 $\gamma$가 만드는 속도. 

$$
\left(x = \gamma(t),\; \xi = \frac{d\gamma(t)}{dt}\right) \in T_{\gamma(t)}\mathcal{U}
$$

---

$V$가 $\mathcal{U}$ 위의 **vector field**일 때, 이는 점과 tangent vector를 mapping하는 함수이다. 

$$
V: \mathcal{U} \longrightarrow T_x\mathcal{U}, \qquad x \longmapsto V(x) = (x,\, \xi(x))
$$

**vector field basis:**

$$
\frac{\partial}{\partial x_i}\bigg|_x = \left(x,\; (\delta_{1i},\, \delta_{2i},\, \ldots,\, \delta_{ni})\right)
$$

즉, $x_i$ 방향으로만 속도가 1인 벡터장.

모든 $x \in \mathcal{U}$에 대해, $\dfrac{\partial}{\partial x_1}, \dfrac{\partial}{\partial x_2}, \ldots, \dfrac{\partial}{\partial x_n}$들은 $T_x\mathcal{U}$의 basis를 이룬다.

모든 벡터장은 이렇게 나타낼 수 있다 (아인슈타인 summation convention):

$$
V = V^i(x)\, \frac{\partial}{\partial x^i}
$$

앞으로 $\dfrac{\partial}{\partial x^i}$를 가끔 $\partial_i$라고 표기하자.

---

## Integral Curve

상미방을 벡터장과 연관지어 보자. **상미방의 해 = 운동 방정식을 따르는 궤적**,이는 곧 상미방으로 정의된 벡터장의 흐름을 따르는 입자.

**정의:** Let $I \subset \mathbb{R}$ be the open interval.

$$
\gamma: I \to \mathcal{U} \subset \mathbb{R}^n, \qquad \frac{d\gamma(t)}{dt} = V(\gamma(t)) \quad \text{for each } t \in I
$$

이런 곡선을 **integral curve of the vector field $V$ on $\mathcal{U}$** 라고 부른다.

> [!question] 질문
> Initial condition에 따라서 상미방의 해는 여러가지이다. 그러니 한 vector field로 정의되는 integral curve도 무한히 많은 curve의 집합을 이루지 않겠는가?

예시: $\gamma_i(t) = t\,(\delta_{i1},\, \delta_{i2},\, \delta_{i3},\, \ldots,\, \delta_{in})$

이 $\gamma_i(t)$는 $\dfrac{\partial}{\partial x_i}$를 위한 integral curve이다.

---

### Theorem (ODE 해의 존재와 유일성)

> $V$가 local domain $\mathcal{U}$ 위에서 smooth vector field라면, each point $x_0 \in \mathcal{U}$에 대해 integral curve $\gamma: (-\varepsilon, \varepsilon) \to \mathcal{U}$가 존재하여 $\gamma(0) = x_0$. Any two such integral curves meeting at $x_0$ are equal on the cross section of their domain.

이것은 ODE solution의 **existence and uniqueness**에 의한 성질이다.

$$\boxed{\quad \frac{d}{dt}\gamma(t) = V(\gamma(t)) \quad \to \quad \text{이것이 ODE이다.}\quad}
$$

$\gamma(t) = (\gamma^1(t), \ldots, \gamma^n(t))$, $V(x) = V^1(x)\partial_{x^1} + \cdots + V^n(x)\partial_{x^n}$이면:

$$
\frac{d\gamma^1(t)}{dt} = V^1(\gamma(t)),\quad \frac{d\gamma^2(t)}{dt} = V^2(\gamma(t)), \quad \cdots \quad \frac{d\gamma^n(t)}{dt} = V^n(\gamma(t))
$$

**예시:** $\mathcal{H}(p, q)$가 phase space에서 해밀토니안을 나타낸다 치자. 해밀턴 방정식은 integral curve를 만들어 낸다. 이를 결정하는 vector field는:

$$
\mathbb{V}(q, p) = \dot{q}^i\,\frac{\partial}{\partial q^i} + \dot{p}_i\,\frac{\partial}{\partial p_i} = \frac{\partial\mathcal{H}}{\partial p_i}\frac{\partial}{\partial q^i} - \frac{\partial\mathcal{H}}{\partial q^i}\frac{\partial}{\partial p_i}
$$

($\dot{q}^i$와 $\dot{p}_i$가 $\dfrac{\partial\gamma^i}{\partial t}$의 역할을 하는 것)

---

## 벡터장과 미분 연산자

벡터장 그 자체는  $\mathcal{U}$위에 있는 함수에 대한 **미분 연산자**로 작동한다.

$$
V(x) = V^i(x)\,\frac{\partial}{\partial x^i}, \qquad V(f)(x) = V^i(x)\,\frac{\partial f}{\partial x^i}\bigg|_x
$$

이 연산자는 **라이프니츠 규칙**을 만족한다:

$$
V(fg) = f\,V(g) + V(f)\,g
$$

**역학의 모든 특성은 위상 공간의 기하가 결정한다.**

**미분 연산자를 이해하는 기하학적 방법:**

Let $f \in C^\infty$, $x_0 \in \mathcal{U}$, $\gamma: (-\varepsilon, \varepsilon) \to \mathcal{U}$, $\gamma(0) = x_0$.
그리고 curve $\gamma(t)$가 벡터장 $V$의 integral curve일 때($V(\gamma(t)) = \dfrac{d}{dt}\gamma(t)$)
Then:

$$
\boxed{\quad V(f)(x_0) = \frac{d}{dt}\bigg|_{t=0} f(\gamma(t)) \quad}
$$


**RHS 계산:**

$$
\frac{d}{dt}f(\gamma(t)) = \sum_i \frac{d\gamma^i(t)}{dt}\,\frac{\partial f}{\partial x^i}\bigg|_{\gamma(t)} = \sum_i V^i(\gamma(t))\,\frac{\partial f}{\partial x^i}(\gamma(t))
$$

이것은 chain rule에 의한 것이다. $f$라는 함수가 integral curve를 따를 때 어떻게 변하는지 알 수 있다.

---

## Lie bracket

$\text{Vect}(\mathcal{U})$는 $\mathcal{U}$ 위에 있는 smooth vector field의 공간.

$$
V = V^i\,\frac{\partial}{\partial x^i}, \qquad W = W^j\,\frac{\partial}{\partial x^j}
$$

**Lie bracket 정의:**

$$
[V, W]: \big(C^\infty(\mathcal{U}),\, C^\infty(\mathcal{U})\big) \longrightarrow C^\infty(\mathcal{U})
$$

$$
[V, W]\,f = V(W(f)) - W(V(f))
$$

여기서 $[V, W]$는 commutator와 같은 기능이다.

**성질:**
1. $[V, W]\,C = 0$ for any constant $C$
2. $[V, W]\,fg = V(W(fg)) - W(V(fg))$

![[Pasted image 20260508105437.png]]

계산하면:

$$
[V, W]\,fg = f\,[V,W]\,g + g\,[V,W]\,f
$$

이것도 라이프니츠 규칙을 만족한다 → Lie bracket은 진짜 벡터장이다!

**명시적 계산:**

$$
[V, W]\,f = V^i\,\frac{\partial}{\partial x^i}\!\left(W^j\,\frac{\partial f}{\partial x^j}\right) - W^j\,\frac{\partial}{\partial x^j}\!\left(V^i\,\frac{\partial f}{\partial x^i}\right)
$$

$$
= \left(V^i\,\frac{\partial W^j}{\partial x^i} - W^i\,\frac{\partial V^j}{\partial x^i}\right)\frac{\partial f}{\partial x^j}
$$

따라서:

$$
[V, W] = \left(V^i\,\frac{\partial W^j}{\partial x^i} - W^i\,\frac{\partial V^j}{\partial x^i}\right)\frac{\partial}{\partial x^j}
$$

---

## Lie bracket의 성질

1. **Bilinear**
2. **Skew symmetry**: $[W, V] = -[V, W]$
3. **Jacobi identity** → 이게 핵심, 연산의 consistency를 만든다:

$$
[A,\,[B,C]] + [B,\,[C,A]] + [C,\,[A,B]] = 0
$$

$\mathcal{D} = e^{iV\cdot\mathcal{E}_V}$라고 두고, 교환 법칙이 성립한다고 두면, generator $V, W, T$에 대해:

$$
[V,\,[W,T]] + [W,\,[T,V]] + [T,\,[V,W]] = 0
$$

가 성립함을 볼 수 있다. → 직접 증명은 나중에 해 보기!

---

## Tangent map, push-forward

Let $\mathcal{U}_1 \subset \mathbb{R}^n$, $\mathcal{U}_2 \subset \mathbb{R}^m$ be two open subsets.
둘의 좌표계를 이렇게 나타내자:
$\mathcal{U}_1: x = (x^1, \ldots, x^n)$, $\mathcal{U}_2: y = (y^1, \ldots, y^m)$

$\varphi$는 smooth map, $\mathcal{U}_1$에서 $\mathcal{U}_2$로 정의되는 mapping:

$$
\varphi: \mathcal{U}_1 \longrightarrow \mathcal{U}_2, \qquad x \longmapsto y = \varphi(x)
$$

$$
y^i = \varphi^i(x)
$$

이를 이용해 tangent vector를 mapping하는 **$\varphi_*$를 정의한다:

$$
\varphi_*: T_x\mathcal{U}_1 \longrightarrow T_{\varphi(x)}\mathcal{U}_2
$$

$T_x\mathcal{U}_1$의 basis를 $\varphi_*$가 어떻게 mapping하는지는, 그냥 좌표계 변환이다. 

$$
\varphi_*\!\left(\frac{\partial}{\partial x^i}\right) = \frac{\partial y^j}{\partial x^i}\,\frac{\partial}{\partial y^j} = \frac{\partial\varphi^j}{\partial x^i}\,\frac{\partial}{\partial y^j}
$$

따라서 $T_x\mathcal{U}_1$에 속한 일반적인 벡터 $\xi^i\dfrac{\partial}{\partial x^i}$에 대해서:

$$
\varphi_*\!\left(\sum_{i=1}^n \xi^i\,\frac{\partial}{\partial x^i}\right) = \sum_j\sum_i \xi^i\,\frac{\partial\varphi^j}{\partial x^i}\,\frac{\partial}{\partial y^j}
$$

---

**기하학적 이해:** $\mathcal{U}_1$ 위의 커브를 하나 생각하자.

$$
\gamma: I \to \mathcal{U}_1, \qquad \gamma(0) = x,\quad \gamma'(0) = \xi = \xi^i\,\frac{\partial}{\partial x^i}
$$

커브를 $\mathcal{U}_2$ 위로 옮기는 것은 $\varphi$가 한다:

$$
\varphi \cdot \gamma: I \to \mathcal{U}_2, \qquad \varphi(\gamma(0)) = \varphi(x)
$$

이 곳의 $t = 0$에서 tangent vector는:

$$
\frac{d}{dt}\bigg|_{t=0}\varphi^i(\gamma(t))\,\frac{\partial}{\partial y^i} = \xi^j\,\frac{\partial\varphi^i}{\partial x^j}\,\frac{\partial}{\partial y^i}
$$

$$
\therefore\quad (\varphi \cdot \gamma)'(0) = \varphi_*(\gamma'(0)) = \varphi_*(\xi)
$$

$\varphi_*$는 커브의 속도를 $\mathcal{U}_1$ 위에서 $\mathcal{U}_2$ 위로 옮겨준다.

---

**Proposition:** pushing-forward로 합성함수처럼 연산할 수 있다.

Let $\varphi: \mathcal{U}_1 \to \mathcal{U}_2$, $\phi: \mathcal{U}_2 \to \mathcal{U}_3$

$$
\text{then} \quad (\phi \circ \varphi)_* = \phi_* \circ \varphi_*
$$

교환 다이어그램:
![[Pasted image 20260508113744.png]]

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

[[AM lecture note - Generating function]]
[[AM lecture note - Canonical transformation]]
[[AM lecture note - Hamiltonian mechanics]]

# References

주요 교재: [[Chapter3_Interlude of Sympletic Geometry_[Si Li] Classical Mechanics and Geometry.pdf]]

# 다음 강의

[[AM lecture note - Differential forms]]
# 필기 원본

![[AM_9thweek_2.pdf]]
