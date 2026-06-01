---
title: AM lecture note - Stokes theorem
date: "2026-05-17"
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

[[AM lecture note - Hodge dual and Lie derivative]]

# 오늘의 핵심



# 필기 내용

## Orientation (방향)

교과서 91 page.

Differential forms는 **"oriented" spaces** 위에서 적분할 수 있다.
![[Pasted image 20260517115449.png]]
뫼비우스 띠는 orientation이 없는 공간의 예시다. (안과 밖, 위와 아래가 구분되지 않아서 그런 것으로 추정)

앞으로의 표기: $\{\partial_i\} = \{e_i\}$

**Definition:** $n$차원 벡터공간 $V$의 **orientation**은 다음 동치 관계(equivalence relation)를 기준으로 하는 ordered basis의 선택이다.

두 ordered basis $e_1, e_2, e_3, \cdots$ 와 $\tilde{e}_1, \tilde{e}_2, \tilde{e}_3, \cdots$ 가 같은 orientation을 가질 조건:

$$
e_1 \wedge e_2 \wedge \cdots \wedge e_n = \lambda \, \tilde{e}_1 \wedge \tilde{e}_2 \wedge \cdots \wedge \tilde{e}_n \in \bigwedge^n V
$$

for some $\lambda > 0$. 이때 $\lambda$가 **양수**인 게 중요하다.

$\bigwedge^n V$ : $V$의 $n$-th exterior product. **1차원 공간**이다.

아마 부피들의 공간이라고 해석해도 될 듯?

$$
\{\text{Orientation of } n\text{-dimensional vector space}\} = \frac{\text{nonzero elements of } \bigwedge^n V}{\text{rescaling by positive factor}}
$$

이 기준이라면, 같은 방향성을 가진 basis를 동등하게 취급할 수 있다.

우리는 $V$에게 **2가지 방향이 있음**을 알 수 있다.

> [!question] 질문
> 아무리 고차원이어도 방향은 두 가지 밖에 없단 점이 신기함.

### Example: $\mathbb{R}^3$의 orientation

$\{e_1, e_2, e_3\}$가 $\mathbb{R}^3$의 basis일 때,

$$
e_1 \wedge e_2 \wedge e_3 = -e_2 \wedge e_1 \wedge e_3 = e_2 \wedge e_3 \wedge e_1
$$

그동안 Cartesian coordinate에서 오른손 좌표계와 왼손 좌표계로 분류하던 게 이런 의미였다.
![[Pasted image 20260517115554.png]]
오른손 좌표계들: $(x,y,z)$, $(y,z,x)$, $(z,x,y)$ — 모두 같은 orientation.

왼손 좌표계들: $(y,x,z)$, $(x,z,y)$, $(z,y,x)$ — 반대 orientation.

---

## n-form의 적분

$x^1, x^2, \cdots, x^n$을 $\mathcal{U}$ 위의 oriented coordinate system이라 하자.

$\alpha \in \Omega^n(\mathcal{U})$를 $\mathcal{U}$ 위의 differential $n$-form이라 하자.

$$
\alpha = f(x) \, dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n
$$

orientation이 고정되면 wedge product는 의미가 없어진다 (orientation fixed → wedge product is meaningless).

$$
\alpha = f(x) \, dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n = -f(x) \, dx^{2} \wedge dx^{1} \wedge \cdots \wedge dx^n
$$

**$n$-form $\alpha$의 적분은 고정된 oriented coordinate system에 대해 좌표 선택에 무관하다:**

$$
\int_K \alpha := \int \cdots \int_K (-f(x)) \, dx^{2} dx^{1} \cdots dx^n = -\int \cdots \int_K f(x) \, dx^1 dx^2 \cdots dx^n
$$

### 좌표 변환과 Jacobi factor

또 다른 coordinate system $y^1, y^2, \cdots, y^n$을 도입해 보자.

Volume form 변환에 **Jacobi factor**가 들어간다:

$$
dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n = \det\left(\frac{\partial x^i}{\partial y^j}\right) \, dy^1 \wedge dy^2 \wedge \cdots \wedge dy^n
$$

$\det\left(\frac{\partial x^i}{\partial y^j}\right) > 0$ 이라면 두 좌표계의 **방향이 같음**을 의미.

$$
\alpha = f(x) \, dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n = f(x(y)) \det\left(\frac{\partial x^i}{\partial y^j}\right) \, dy^1 \wedge dy^2 \wedge \cdots \wedge dy^n
$$

$$
\int_K \alpha = \int \cdots \int_K f(x(y)) \det\left(\frac{\partial x^i}{\partial y^j}\right) \, dy^1 \wedge dy^2 \wedge \cdots \wedge dy^n
$$

---

## Diffeomorphism으로의 일반화

이건 좌표 변환을 diffeomorphism으로 일반화한 것이다.


![[Pasted image 20260517115742.png]]

두 패치 $\mathcal{U}_1$과 $\mathcal{U}_2$에 대해, $x$ 좌표계는 $\mathcal{U}_1$의 것이고, $y$는 $\mathcal{U}_2$의 것이다.

$\varphi: \mathcal{U}_1 \to \mathcal{U}_2$ 의 smooth diffeomorphism을 고려.

$\varphi$은 orientation을 보존한다고 고려하자. 그러니까,

$$
\varphi^*(dy^1 \wedge dy^2 \wedge \cdots \wedge dy^n) = \det\left(\frac{\partial \varphi^i}{\partial x^j}\right) \, dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n
$$

이때 $\det\left(\frac{\partial \varphi^i}{\partial x^j}\right) > 0$ 이 방향 보존을 의미.

적분 범위 $K \subset \mathcal{U}_1$에 대해, 치환적분이라는 개념을 diffeomorphism으로 일반화할 수 있다:

$$
\int_K \varphi^* \alpha = \int_{\varphi(K)} \alpha
$$

### Pull-back의 명시적 계산

$\alpha$의 pull back, $\varphi^* \alpha$를 명시적으로 계산하기:

$$
\varphi^* \alpha = (\varphi^* f) \cdot \varphi^*(dy^1 \wedge dy^2 \wedge \cdots \wedge dy^n)
$$

$$
\varphi^* f = f(\varphi)
$$

$$
\varphi^*(dy^1 \wedge dy^2 \wedge \cdots \wedge dy^n) = \varphi^*(dy^1) \wedge \varphi^*(dy^2) \wedge \cdots \wedge \varphi^*(dy^n)
$$

$$
= \left(\frac{\partial \varphi^1}{\partial x^a} dx^a\right) \wedge \left(\frac{\partial \varphi^2}{\partial x^b} dx^b\right) \wedge \cdots \wedge \left(\frac{\partial \varphi^n}{\partial x^z} dx^z\right)
$$

$$
= \det\left(\frac{\partial \varphi^i}{\partial x^j}\right) dx^1 \wedge \cdots \wedge dx^n
$$

그래서 결국, 우리가 알던 치환적분 성질이 나오는 것이다:

$$
\varphi^* \alpha = f(\varphi(x)) \det\left(\frac{\partial \varphi^i}{\partial x^j}\right) dx^1 \wedge \cdots \wedge dx^n
$$

### Example: 극좌표 (Polar coordinate)

$$
(r, \theta)_K \xrightarrow{\varphi} (x, y)_{\phi(K)}
$$

$K$에서 $\varphi(K)$로의 사상.

$$
x = \varphi^1(r, \theta) = r\cos\theta, \quad y = \varphi^2(r, \theta) = r\sin\theta
$$

$$
\varphi^*(dx) = \frac{\partial \varphi^1}{\partial r} dr + \frac{\partial \varphi^1}{\partial \theta} d\theta = \cos\theta \, dr - r\sin\theta \, d\theta
$$

$$
\varphi^*(dy) = \frac{\partial \varphi^2}{\partial r} dr + \frac{\partial \varphi^2}{\partial \theta} d\theta = \sin\theta \, dr + r\cos\theta \, d\theta
$$

$$
\varphi^*(dx \wedge dy) = \varphi^*(dx) \wedge \varphi^*(dy)
$$

$$
= (\cos\theta \, dr - r\sin\theta \, d\theta) \wedge (\sin\theta \, dr + r\cos\theta \, d\theta)
$$

$$
= r \, dr \wedge d\theta
$$

$$
\int_{\varphi(K)} dx \wedge dy = \int_K \varphi^*(dx \wedge dy) = \int_K r \, dr \wedge d\theta
$$

---

## 차원이 다른 경우로의 일반화

두 패치 $\mathcal{T}$와 $\mathcal{K}$가 차원이 다른 경우로 일반화해보자.

$$
\mathcal{T} \xrightarrow{\varphi} \mathcal{K}
$$

$$
\mathcal{T} \subset \mathbb{R}^p, \quad \mathcal{K} \subset \mathbb{R}^n
$$
$\alpha$는 원래 $\mathcal{K}$에서 정의된 p-form이다. 
$$
\alpha \in \Omega^p(\mathbb{R}^n)
$$

$$
\int_{\varphi(\mathcal{T})} \alpha = \int_{\mathcal{T}} \varphi^* \alpha
$$

### Example: 1-form의 선적분

$\alpha = \alpha_i \, dx^i$ , $\alpha$는 1-form이다.

$\gamma: [a, b] \to \mathbb{R}^n$, $t \mapsto \gamma(t) = (\gamma^1(t), \cdots, \gamma^n(t))$

이때, $[a,b]$가 $\mathcal{T}$이고, $\mathbb{R}^n$이 $\mathcal{K}$, $\gamma$가 $\varphi$의 역할이다.

$$
\int_{\gamma(t)} \alpha = \int_{\mathbb{R}} \gamma^*(\alpha) = \int_a^b \left(\sum_i \alpha_i(\gamma(t)) \frac{d\gamma^i(t)}{dt}\right) dt
$$

---

## Stoke's theorem

![[Pasted image 20260517120301.png]]

$\mathcal{K} \subset \mathbb{R}^n$이 $p$차원 surface라 하자.

$\partial \mathcal{K}$를 $\mathcal{K}$의 boundary라 하자.

$\mathcal{K}$의 방향이 $\partial \mathcal{K}$의 방향을 결정한다.

$x \in \mathcal{K}$에 대해, $\vec{n}_x$를 $\partial \mathcal{K}$ 위의 outward normal vector field이라 하자.

**Stoke's theorem:** smooth $(p-1)$-form인 $\alpha$에 대해서,

$$
\int_{\mathcal{K}} d\alpha = \int_{\partial \mathcal{K}} \alpha
$$

### Example 1: $n = p = 2$ (Green's theorem)

$$
\alpha = \alpha_1(x) \, dx^1 + \alpha_2(x) \, dx^2
$$

$$
d\alpha = \left(\frac{\partial \alpha_2}{\partial x^1} - \frac{\partial \alpha_1}{\partial x^2}\right) dx^1 \wedge dx^2
$$

$$
\iint_{\mathcal{K}} d\alpha = \iint_{\mathcal{K}} (\partial_1 \alpha_2 - \partial_2 \alpha_1) \, dx^1 \wedge dx^2 = \int_{\partial \mathcal{K}} \alpha_1 \, dx^1 + \alpha_2 \, dx^2
$$

이게 바로 **Green's Theorem**이다.

### Example 2: $n = p = 3$ (가우스 적분 정리)

$$
\alpha = \alpha_1 \, dx^2 \wedge dx^3 + \alpha_2 \, dx^3 \wedge dx^1 + \alpha_3 \, dx^1 \wedge dx^2
$$

$$
d\alpha = (\partial_1 \alpha_1 + \partial_2 \alpha_2 + \partial_3 \alpha_3) \, dx^1 \wedge dx^2 \wedge dx^3
$$

$$
\iiint_K \left(\frac{\partial \alpha_1}{\partial x^1} + \frac{\partial \alpha_2}{\partial x^2} + \frac{\partial \alpha_3}{\partial x^3}\right) dx^1 \wedge dx^2 \wedge dx^3 = \iint_{\partial K} \alpha_1 \, dx^2 \wedge dx^3 + \alpha_2 \, dx^3 \wedge dx^1 + \alpha_3 \, dx^1 \wedge dx^2
$$

이것이 바로 **가우스 적분 정리**이다.

---

## Stoke's theorem의 응용: Flux conservation law

![[Pasted image 20260517120342.png]]

$\mathcal{M}$의 boundary가 $\partial \mathcal{M} = \mathcal{K}_2 - \mathcal{K}_1$으로 주어져 있다고 하자.

$\alpha$가 **closed form** ($d\alpha = 0$)이라 하면,

$$
\int_{\mathcal{K}_2} \alpha - \int_{\mathcal{K}_1} \alpha = \int_{\partial \mathcal{M}} \alpha = \int_{\mathcal{M}} d\alpha = 0
$$

$$
\int_{\mathcal{K}_1} \alpha = \int_{\mathcal{K}_2} \alpha
$$

이게 바로 **flux conservation law**이다.

---

## Closed form과 경로 독립성

![[Pasted image 20260517120409.png]]

$\alpha \in \Omega^1(\mathbb{R}^n)$, $d\alpha = 0$

$p, q \in \mathbb{R}^n$인 두 점에 대해,

$$
\int_p^q \alpha = \int_\gamma \alpha
$$

$p$와 $q$를 이어주는 아무 $\gamma$에 대해 위가 성립.

왜냐면 Stokes theorem에 의해, $\gamma_1$으로부터 smoothly deformed된 $\gamma_2$에 대해

$$
\int_{\gamma_1} \alpha = \int_{\gamma_2} \alpha
$$

를 성립하기 때문.

이게 $d\alpha = 0$일 때, $\alpha$가 보존장이라는 것.

### Example: 위상적 효과 (Topological effect)

$\mathcal{U} = \mathbb{R}^2 - \{0\}$ 에서

$$
\alpha = \frac{x \, dy - y \, dx}{x^2 + y^2}, \quad d\alpha = 0
$$

두 점 $p = -1$, $q = 1$을 잇는 두 path $\gamma_1$과 $\gamma_2$를 고려.
![[Pasted image 20260517120428.png]]
$\gamma_1$은 lower hemicycle, $\gamma_2$는 upper hemicycle.

두 경로 모두 원점을 우회한다. 원점에 구멍이 있어서, $\gamma_1$을 변형한다고 해서 $\gamma_2$가 되지 못한다.

이것이 공간의 **topological effect**가 나타나는 부분이다.

Circuit $C$에 대해,

$$
\int_{\gamma_1} \alpha - \int_{\gamma_2} \alpha = \oint_C \alpha
$$

$\alpha = d\theta$ 이라는 polar coordinate를 사용한다면,

$$
\oint_C \alpha = \int_0^{2\pi} d\theta = 2\pi \neq 0
$$



$$
\int_{\gamma_1} \alpha \neq \int_{\gamma_2} \alpha
$$

라는 점이 명확하다. 이것은 공간의 topology가 적분 결과에 영향을 미치는 대표적인 예시이다.

> [!question] 질문
> 교수님이 cohomology group을 이 맥락에서 언급하셨다. 이게 뭘까?
> 
# 궁금한 내용

1. "Modulo"의 정확한 수학적 의미 → orientation 정의에서 "modulo equivalence relation"은 동치 관계를 기준으로 분류한다는 뜻.
2. 아무리 고차원이어도 orientation이 두 가지뿐인 이유 → $\bigwedge^n V$가 1차원이므로, 0이 아닌 원소를 양의 rescaling으로 나누면 정확히 두 동치류가 나온다.
3. Cohomology group이란 무엇인가? → 교수님이 언급만 하심. 추후 조사 필요.

# AI의 보충 설명


# 연관 학습 노트

- [[AM lecture note - Differential forms]]
- [[AM lecture note - Hodge dual and Lie derivative]]

# References

교과서 91 page (David Tong's Classical Dynamics / Si Li)

# 다음 강의

[[AM lecture note - Interior product, Cartan formula and Poincare Lemma]]
# 필기 원본
![[AM_10thweek_3.pdf]]