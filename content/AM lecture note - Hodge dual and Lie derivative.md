---
title: AM lecture note - Hodge dual and Lie derivative
date: "2026-05-16"
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

[[AM lecture note - Differential forms]]

# 오늘의 핵심

- Tensor product를 이용한 wedge product의 정의
- $d^2 = 0$ 증명과 벡터 해석학적 해석 ($\nabla \cdot (\nabla \times A) = 0$)
- 두 1-form의 wedge product가 curl 연산에 대응
- 세 1-form의 wedge product → volume form과 Hodge dual
- Maxwell 방정식을 미분형식 한 줄로 표현: $F = dA$, $dF = 0$
- Current 3-form $J$와 $d\star F = J$
- Lie derivative의 정의와 성질: $\mathcal{L}_V(d\alpha) = d(\mathcal{L}_V \alpha)$, Leibniz 규칙
- Volume form의 Lie derivative와 divergence의 관계

# 필기 내용

## Tensor product를 이용한 Wedge product 정의

Wedge product는 tensor product를 이용하여 다음과 같이 정의된다:

$$
dx^i \wedge dx^j = dx^i \otimes dx^j - dx^j \otimes dx^i
$$
Antisymmetry가 눈에 단번에 보인다. 
Wedge product는 그자체로 commutator 스러운 기능을 품고 있던 것이다. 

## $d^2 = 0$ 증명

### 0-form의 exterior product를 명시적으로 계산하기

아인슈타인 합 규약을 사용할 때, 0-form $f$에 대해:

$$
df = (\partial_j f)\, dx^j
$$

이를 다시 exterior derivative하면:

$$
ddf = d\bigl((\partial_j f)\, dx^j\bigr) = \partial_i \partial_j f\; dx^i \wedge dx^j + \partial_j f\;(ddx^j)
$$

- 첫 번째 항 $\partial_i \partial_j f\; dx^i \wedge dx^j$: 이것은 $dx^i \wedge dx^j$의 antisymmetry에 의해 index summation 이후 0이 된다. ($\partial_i \partial_j f$는 $i, j$에 대해 대칭이지만, $dx^i \wedge dx^j$는 반대칭)
- 두 번째 항: $ddx^j = 0$이라서 사라진다.

따라서 $ddf = 0$, 즉 $d^2 = 0$.

## $\nabla \cdot (\nabla \times A) = 0$은 $d^2 = 0$로부터 유도되는 성질이다

1-form $A$를 다음과 같이 정의한다:

$$
A = A_j\, dx^j
$$

exterior derivative를 취하면:

$$
dA = \frac{1}{2}(\partial_i A_j - \partial_j A_i)\; dx^i \wedge dx^j
$$
(왜 $\frac{1}{2}$가 붙었는지는... 알겠지?)

여기에 다시 exterior derivative를 취하면:

$$
ddA = \frac{1}{2}\partial_k(\partial_i A_j - \partial_j A_i)\; dx^k \wedge dx^i \wedge dx^j
$$

$$
= \frac{1}{2}\partial_k (\nabla \times A)_k\; dx^k \wedge dx^i \wedge dx^j
$$

$$
= \frac{1}{2}\nabla \cdot (\nabla \times A)\; dx^k \wedge dx^i \wedge dx^j
$$

$d^2 = 0$이므로, $\nabla \cdot (\nabla \times A) = 0$이라는 결론이 나온다.

## 두 1-form의 Wedge product는 Curl과 직결된다

3차원에서 두 1-form $A$와 $B$를 정의한다:

$$
A = A_x\,dx + A_y\,dy + A_z\,dz
$$

$$
B = B_x\,dx + B_y\,dy + B_z\,dz
$$

이들의 wedge product를 계산하면:

$$
A \wedge B = (A_x B_y - A_y B_x)\,dx \wedge dy + (A_y B_z - A_z B_y)\,dy \wedge dz + (A_z B_x - A_x B_z)\,dz \wedge dx
$$

$$
= [A \times B]_z\,dx \wedge dy + [A \times B]_x\,dy \wedge dz + [A \times B]_y\,dz \wedge dx
$$

이것은 우리가 알던 **curl 연산**에 대응된다.

## Volume form과 Hodge dual

### $A \wedge B \wedge C$와 Volume form

$A \wedge B \wedge C$는 부피와 직결되며, 이것이 $dx \wedge dy \wedge dz$ (3차원에서의 top form)가 **volume form**이라고 불리는 이유다.

$$
A \wedge (B \wedge C) = (A_x\,dx + A_y\,dy + A_z\,dz) \wedge \bigl[[\mathbf{B} \times \mathbf{C}]_z\,dx \wedge dy + [\mathbf{B} \times \mathbf{C}]_x\,dy \wedge dz + [\mathbf{B} \times \mathbf{C}]_y\,dz \wedge dx\bigr]
$$

$$
= A_z[\mathbf{B}\times\mathbf{C}]_z\,dz \wedge dx \wedge dy + A_x[\mathbf{B}\times\mathbf{C}]_x\,dx \wedge dy \wedge dz + A_y[\mathbf{B}\times\mathbf{C}]_y\,dy \wedge dz \wedge dx
$$

$$
= \mathbf{A} \cdot (\mathbf{B} \times \mathbf{C})\; dx \wedge dy \wedge dz
$$

### Hodge dual

이것을 어떻게 잘 표기할 수 있을까... 고민하던 누군가가 **Hodge dual**이라는 걸 개발했다.

> [!question] 질문
> Hodge dual 관계인 두 form을 곱하면 volume form이 나오는 성질을 이용해 쉽게 이해할 수 있는 것 같다.

> [!note] Glia의 보충 (2026-05-16)
> **Hodge dual의 정의:** $n$차원 공간에서 $p$-form $\alpha$의 Hodge dual $\star\alpha$는 다음을 만족하는 $(n-p)$-form이다:
> $$
> \alpha \wedge \star\alpha = |\alpha|^2 \;\Omega
> $$
> 더 일반적으로, 임의의 두 $p$-form $\alpha$, $\beta$에 대해 $\alpha \wedge \star\beta = \langle \alpha, \beta \rangle \;\Omega$ ($\Omega$는 volume form, $\langle \cdot, \cdot \rangle$는 $p$-form의 내적).
>
> 즉, **"form과 그 Hodge dual을 wedge하면 volume form"**이라는 직관이 정확히 정의 그 자체다.
>
> **기하학적 의미:** $p$-form $\alpha$가 어떤 $p$차원 방향을 "점유"하고 있다면, $\star\alpha$는 나머지 $(n-p)$차원 방향을 채워서 전체 공간의 부피를 완성하는 form이다. 예를 들어 $dx^3$가 $z$방향을 담당하면 $\star dx^3 = dx^1 \wedge dx^2$가 나머지 $xy$ 평면을 채워준다:
> $$
> dx^3 \wedge \star dx^3 = dx^3 \wedge (dx^1 \wedge dx^2) = dx^1 \wedge dx^2 \wedge dx^3 = \Omega
> $$
>
> 위의 $A \wedge B \wedge C$ 결과도 이 구조로 이해할 수 있다: $B \wedge C$의 Hodge dual이 $(\mathbf{B} \times \mathbf{C}) \cdot d\mathbf{X}$라는 1-form이고, 여기에 $A$를 wedge하면 내적이 되면서 volume form이 나온다.

### Hodge dual의 예시 ($\mathcal{U} \subset \mathbb{R}^3$)

$$
\star 1 = dx^1 \wedge dx^2 \wedge dx^3
$$

$$
\star(dx^1 \wedge dx^2 \wedge dx^3) = 1
$$

$$
\star dx^3 = dx^1 \wedge dx^2
$$

$$
\star(dx^1 \wedge dx^2) = dx^3
$$

### Hodge dual과 벡터 연산의 대응

$$
\star(A \wedge B) = [\mathbf{A}\times\mathbf{B}]_z\,\star(dx \wedge dy) + [\mathbf{A}\times\mathbf{B}]_x\,\star(dy \wedge dz) + [\mathbf{A}\times\mathbf{B}]_y\,\star(dz \wedge dx)
$$

$$
= [\mathbf{A}\times\mathbf{B}]_z\,dz + [\mathbf{A}\times\mathbf{B}]_x\,dx + [\mathbf{A}\times\mathbf{B}]_y\,dy
$$

$$
= (\mathbf{A} \times \mathbf{B}) \cdot d\mathbf{X}
$$

여기서 $d\mathbf{X} = dx\,\hat{x} + dy\,\hat{y} + dz\,\hat{z}$이다.

그리고:

$$
\star(A \wedge B \wedge C) = \mathbf{A}\cdot(\mathbf{B}\times\mathbf{C})\;\star(dx \wedge dy \wedge dz) = \mathbf{A}\cdot(\mathbf{B}\times\mathbf{C}) = \det\begin{pmatrix} A_x & A_y & A_z \\ B_x & B_y & B_z \\ C_x & C_y & C_z \end{pmatrix}
$$

## Maxwell 방정식을 한 줄로 표현하기

### Potential 1-form의 정의

Potential을 나타내는 1-form을 다음과 같이 정의한다:

$$
A = A_x\,dx + A_y\,dy + A_z\,dz - \phi\,dt
$$

이때, $\mathbf{A} = A_x\hat{x} + A_y\hat{y} + A_z\hat{z}$는 기존에 전기역학에서 배운 **벡터 포텐셜**이고, $\phi$는 **스칼라 포텐셜**이다.

### Field strength 2-form: $F = dA$

$A$의 exterior derivative는 **field form**이라고 부른다:

$$
F = dA
$$

명시적으로 계산하면:

$$
dA = -(\partial_x \phi + \partial_t A_x)\,dx \wedge dt - (\partial_y \phi + \partial_t A_y)\,dy \wedge dt - (\partial_z \phi + \partial_t A_z)\,dz \wedge dt
$$

$$
\quad + (\partial_y A_z - \partial_z A_y)\,dy \wedge dz + (\partial_z A_x - \partial_x A_z)\,dz \wedge dx + (\partial_x A_y - \partial_y A_x)\,dx \wedge dy
$$

이것을 $F = F_{\mu\nu}\,dx^\mu \wedge dx^\nu$로 쓰면:

$$
F = E_x\,dx \wedge dt + E_y\,dy \wedge dt + E_z\,dz \wedge dt + B_x\,dy \wedge dz + B_y\,dz \wedge dx + B_z\,dx \wedge dy
$$

우리는 전기역학에서 전기장과 자기장이:

$$
\mathbf{E} = -\nabla\phi - \frac{\partial \mathbf{A}}{\partial t}, \qquad E_x = -\partial_x\phi - \partial_t A_x
$$

$$
\mathbf{B} = \nabla \times \mathbf{A}, \qquad B_x = \partial_y A_z - \partial_z A_y
$$

라는 것을 안다. 이것이 $dA$의 계산 결과와 정확히 일치한다.

### $dF = 0$의 의미

$dF = 0$은 다음 두 방정식과 이어진다:

$$
\nabla \cdot \mathbf{B} = 0
$$

$$
\nabla \times \mathbf{E} + \partial_t \mathbf{B} = 0
$$

$dF$를 명시적으로 계산하면:

$$
dF = (\partial_y E_x\,dy + \partial_z E_x\,dz)\,dx \wedge dt + (\partial_x E_y\,dx + \partial_z E_y\,dz)\,dy \wedge dt + (\partial_x E_z\,dx + \partial_y E_z\,dy)\,dz \wedge dt
$$

$$
\quad + (\partial_x B_x\,dx + \partial_t B_x\,dt)\,dy \wedge dz + (\partial_y B_y\,dy + \partial_t B_y\,dt)\,dz \wedge dx + (\partial_z B_z\,dz + \partial_t B_z\,dt)\,dx \wedge dy
$$

정리하면:

$$
= (\partial_x B_x + \partial_y B_y + \partial_z B_z)\,dx \wedge dy \wedge dz
$$

$$
\quad + (-\partial_z E_y + \partial_y E_z + \partial_t B_x)\,dy \wedge dz \wedge dt
$$

$$
\quad + [\nabla \times \mathbf{E} + \partial_t \mathbf{B}]_z\,dx \wedge dy \wedge dt + (-\partial_z E_x + \partial_x E_z + \partial_t B_y)\,dx \wedge dz \wedge dt
$$

이를 정리하면:

$$
dF = \nabla \cdot \mathbf{B}\;(\star dt) + [\nabla \times \mathbf{E} + \partial_t \mathbf{B}]_x\;(\star dx) + [\nabla \times \mathbf{E} + \partial_t \mathbf{B}]_z\;(\star dz) - [\nabla \times \mathbf{E} + \partial_t \mathbf{B}]_y\;(\star dy)
$$

$$
= 0
$$

### Current 3-form

$$
d\star F \stackrel{?}{=} J
$$

$$
d(d\star F) = dJ = 0 \quad \longleftrightarrow \quad \text{conservation law와 연결?}
$$

> [!question] 질문
> Current 3-form $J$가 정확히 무엇인지 설명을 들었지만 이해하지 못했다. $dJ = 0$이 conservation law와 연결된다는 점은 나중에 다시 확인할 것.

> [!note] Glia의 보충 (2026-05-17)
> **왜 $d\star F = J$인가? — 직관적 해석**
>
> $F$는 2-form으로 $E$와 $B$ 정보를 담고 있는데, Hodge dual $\star F$를 취하면 $E$와 $B$의 역할이 뒤바뀐다. $F$에서 $dt$ 방향에 실려 있던 $E$ 성분이 $\star F$에서는 순수 공간 방향으로 가고, 순수 공간 방향에 실려 있던 $B$ 성분이 $dt$를 포함하는 방향으로 간다.
>
> 따라서:
> - $dF = 0$에서 $d$가 $E$와 $B$의 특정 조합을 잡아냄: $\nabla \cdot \mathbf{B} = 0$, $\nabla \times \mathbf{E} + \partial_t \mathbf{B} = 0$
> - $d\star F$에서는 $d$가 $E$와 $B$의 **나머지 조합**을 잡아냄: $\nabla \cdot \mathbf{E} = \rho$, $\nabla \times \mathbf{B} - \partial_t \mathbf{E} = \mathbf{J}$
>
> 즉, Maxwell 방정식 4개를 $E$-$B$ 대칭성 관점에서 두 쌍으로 나눈 것이 정확히 $dF = 0$과 $d\star F = J$에 대응한다.
>
> **Current 3-form $J$의 정체:**
> 4차원 시공간 $(x,y,z,t)$에서 $F$는 2-form이니까 $\star F$도 2-form이고 (4-2=2), $d\star F$는 3-form이다. $J$는 전하밀도 $\rho$와 전류밀도 $\mathbf{J}$를 담는 3-form이다:
> $$
> J = \rho\;dx \wedge dy \wedge dz - J_x\;dy \wedge dz \wedge dt - J_y\;dz \wedge dx \wedge dt - J_z\;dx \wedge dy \wedge dt
> $$
> $\rho$는 공간 3차원 방향($dx \wedge dy \wedge dz$)에 실리고, 전류밀도 $J_i$는 시간 방향 $dt$를 하나 포함하는 3-form 기저에 실린다.
>
> **$dJ = 0$과 전하 보존 법칙:**
> $d\star F = J$의 양변에 $d$를 취하면 $d^2 = 0$에 의해 $dJ = 0$이 자동으로 성립한다. 이것을 성분으로 풀면 정확히 **전하 보존 법칙(continuity equation)**이다:
> $$
> \frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{J} = 0
> $$
> $d^2 = 0$이라는 수학적 항등식이 $d\star F = J$라는 물리 법칙과 결합하여 전하 보존을 자동으로 보장하는 구조다.
>
> **요약:**
>
> | 미분형식 | Maxwell 방정식 |
> |---|---|
> | $F = dA$ | 포텐셜로부터 장을 정의 |
> | $dF = 0$ | $\nabla \cdot \mathbf{B} = 0$, $\nabla \times \mathbf{E} + \partial_t \mathbf{B} = 0$ |
> | $d\star F = J$ | $\nabla \cdot \mathbf{E} = \rho$, $\nabla \times \mathbf{B} - \partial_t \mathbf{E} = \mathbf{J}$ |
> | $dJ = 0$ ($d^2=0$에서 자동) | $\partial_t \rho + \nabla \cdot \mathbf{J} = 0$ (전하 보존) |

## Lie Derivative

### 벡터장과 적분 곡선 (복습)

벡터장 $V = V^i(x)\,\partial_i$에 대해, 적분 곡선(integral curve)은:

$$
\varphi: (-\epsilon, \epsilon) \times \mathbb{R}^n \longrightarrow \mathbb{R}^n
$$

$$
(x, t) \longmapsto \varphi(t, x)
$$

$$
\boxed{\partial_t \varphi(t, x) = V(\varphi(t, x))}
$$

$x$ 위치에 있던 점이 벡터장을 따라흐르면 $t$ 초 뒤에 $\varphi(t, x)$에 있다는 것이다. $\varphi$는 위치 $x$와 경과 시간 $t$를 알려주면 $t$ 뒤에 $x$의 미래를 알려주는 함수.

> [!warning] 표기 주의
> 위 식의 양변은 벡터장이 아니라 **성분값(실수값 함수)**이다. 엄밀하게는 $\partial_t \varphi^i(t,x) = V^i(\varphi(t,x))$로, 각 성분별 방정식이다. 
> $V = V^i \partial_i$는 벡터장이지만, 적분 곡선 방정식에서 $V(\varphi(t,x))$는 "벡터장 $V$가 점 $\varphi(t,x)$에서 가지는 성분값"을 뜻한다. 이 구분을 놓치면 나중에 chain rule 적용 시 헷갈릴 수 있다.


### Flow와 Diffeomorphism

$\varphi$가 미리 고정된 lag time $t$를 저장해 두고 있다면 어떨까?

$$
\varphi_t: \mathbb{R}^n \longrightarrow \mathbb{R}^n
$$

$$
x \longmapsto \varphi(t, x)
$$

$\varphi_t$는 $\mathbb{R}^n$의 **diffeomorphism**이다. $t$를 **diffeomorphism parameter**라고 부른다.

$\varphi_t$는 벡터장 $V$의 flow를 $t$만큼 따라간 것으로 얻어진다:

$$
\varphi_t \circ \varphi_s = \varphi_{t+s}, \qquad \varphi_t^{-1} = \varphi_{-t}
$$

### Lie Derivative의 정의

$V \in \text{Vect}(\mathbb{R}^n)$, $\alpha \in \Omega^p(\mathbb{R}^n)$일 때:

$$
\mathcal{L}_V \alpha = \frac{d}{dt}\bigg|_{t=0} \varphi_t^*(\alpha)
$$

**직관적 해석:** $\alpha$가 infinitesimal time 뒤의 patch에서 정의되어 있지만, $\alpha$를 $t=0$ 에서의 patch로 pull-back 해서 $t$에 대해 미분하겠다. 즉, **벡터장 $V$의 flow를 따를 때 $p$-form $\alpha$의 변화량을 계산**하는 것이다.

> [!question] 질문
> 이것보다 더 이해하기 쉬운 해석은 없나?

> [!note] Glia의 보충 (2026-05-17)
> **핵심 문제: "form이 변했는지"를 어떻게 비교하나?**
>
> 보통 미분은 $f(x+\epsilon) - f(x)$를 비교하는 것이지만, $p$-form은 각 점마다 정의된 객체라서 점 $x$에서의 $\alpha$와 점 $\varphi_\epsilon(x)$에서의 $\alpha$는 **서로 다른 공간에 사는 객체**라 직접 뺄 수가 없다. 비교를 가능하게 만드는 트릭이 pull-back이다:
>
> 1. 벡터장 $V$의 flow를 따라 점 $x$를 $\epsilon$만큼 흘려보내면 $\varphi_\epsilon(x)$에 도착
> 2. 그 도착점에서의 $\alpha$를 $\varphi_\epsilon^*$로 **원래 점 $x$로 끌고 온다**
> 3. 이제 둘 다 같은 점 $x$에 있으니까 뺄셈이 가능
>
> $$
> \mathcal{L}_V \alpha = \lim_{\epsilon \to 0} \frac{\varphi_\epsilon^*(\alpha) - \alpha}{\epsilon}
> $$
>
> **비유: 강물 위의 온도 측정.** 강물이 흐르고 있고($V$ = 유속장), 수면 위에 온도 분포가 있다고 하자($\alpha$ = 물리량). "강물의 흐름을 따라가면서 온도가 변하는가?"를 묻는 것이 Lie derivative다. 단순히 "이 자리에서 시간이 지나면 변하나"($\partial_t$)가 아니라, **흐름을 타고 이동하면서 느끼는 변화**를 측정한다.
>
> $\mathcal{L}_V \alpha = 0$이면 "$\alpha$는 $V$의 흐름을 따라 끌려가도 모양이 안 변한다" — 즉 $V$의 flow에 대한 **대칭성**이 있다는 뜻이다.
>
> 0-form $f$의 경우 pull-back이 그냥 합성이니까:
> $$
> \mathcal{L}_V f = \lim_{\epsilon \to 0} \frac{f(\varphi_\epsilon(x)) - f(x)}{\epsilon} = V(f)
> $$
> 이것은 유체역학의 **물질미분(material derivative)**의 공간 부분과 정확히 같은 구조다.

### 0-form에 대한 Lie derivative

만약 $\alpha = f \in \Omega^0$이라면, Lie derivative는 그냥 미분 연산자 $V$를 $f$에 적용한 것이다:

$$
\mathcal{L}_V f = \frac{d}{dt}\bigg|_{t=0}(\varphi_t^* f) = \frac{d}{dt}\bigg|_{t=0} f(\varphi(t,x)) = V(f)
$$

> [!question] 질문 (빨간 글씨)
> 왜 $\frac{d}{dt}\big|_{t=0} f(\varphi(t,x)) = V(f)$이지? $\partial_t \varphi(t,x) = V(\varphi(t,x))$에서 어떻게 유도해?

> [!note] Glia의 보충 (2026-05-17)
> Chain rule을 적용한다. $f(\varphi(t,x))$에서 $\varphi$는 $n$개의 성분 $\varphi^i$를 가지므로:
> $$
> \frac{d}{dt}\bigg|_{t=0} f(\varphi(t,x)) = \frac{\partial f}{\partial \varphi^i}\bigg|_{\varphi(0,x)} \cdot \frac{\partial \varphi^i}{\partial t}\bigg|_{t=0}
> $$
>
> 여기서 두 가지 사실을 대입한다:
> - $\varphi(0, x) = x$ (시간 0에서는 제자리) $\Rightarrow$ $\frac{\partial f}{\partial \varphi^i}\big|_{\varphi(0,x)} = \frac{\partial f}{\partial x^i}\big|_x$
> - 적분 곡선의 정의 $\partial_t \varphi^i(t,x) = V^i(\varphi(t,x))$에서 $t=0$ $\Rightarrow$ $\frac{\partial \varphi^i}{\partial t}\big|_{t=0} = V^i(x)$
>
> 따라서:
> $$
> = \frac{\partial f}{\partial x^i}\bigg|_x \cdot V^i(x) = V^i(x)\,\partial_i f = V(f)
> $$
> 마지막 등호는 벡터장 $V = V^i \partial_i$가 함수 $f$에 작용하는 것의 정의 그 자체다.

> [!question] 질문 (빨간 글씨)
> Lie derivative와 Lie bracket은 무슨 연관이기에 Lie라는 명칭을 동시에 쓰는 걸까?

> [!note] Glia의 보충 (2026-05-17)
> 단순히 명칭만 공유하는 게 아니라 실제로 깊이 연결되어 있다.
>
> **1. 벡터장에 대한 Lie derivative = Lie bracket:**
> 벡터장 $W$에 대한 Lie derivative는:
> $$
> \mathcal{L}_V W = [V, W]
> $$
> 즉 Lie bracket은 "벡터장의 Lie derivative"의 특수한 경우다.
>
> **2. 함수에 대한 Lie derivative의 비가환성 = Lie bracket:**
> 두 벡터장 $V$, $W$와 함수 $f$에 대해:
> $$
> \mathcal{L}_V(\mathcal{L}_W f) - \mathcal{L}_W(\mathcal{L}_V f) = \mathcal{L}_{[V,W]} f
> $$
> Lie derivative를 두 번 적용하는 순서를 바꿨을 때의 차이가 정확히 Lie bracket $[V,W]$에 의한 Lie derivative다. Lie bracket이 "두 flow를 번갈아 따라갔을 때 생기는 어긋남"을 측정하는 것이었는데, 그 어긋남이 Lie derivative의 비가환성으로 나타난다.
>
> **왜 같은 이름인가:** Sophus Lie가 연구한 핵심 주제가 연속 변환군(Lie group)과 그 무한소 생성자(Lie algebra)였다. Lie derivative는 "flow(연속 변환)를 따라가면서 기하학적 객체의 변화를 측정"하는 것이고, Lie bracket은 "두 무한소 생성자 사이의 대수적 관계"인데, 이 둘이 같은 구조의 서로 다른 얼굴이다.

### Lie derivative의 성질

#### ① $\mathcal{L}_V$와 $d$는 교환된다

$$
\mathcal{L}_V(d\alpha) = d(\mathcal{L}_V \alpha)
$$

**증명:**

$$
\mathcal{L}_V(d\alpha) = \frac{d}{dt}\bigg|_{t=0} \varphi_t^*(d\alpha) = \frac{d}{dt}\bigg|_{t=0} d(\varphi_t^* \alpha) = d(\mathcal{L}_V \alpha)
$$

여기서 pull-back과 exterior derivative가 교환되는 성질 $\varphi_t^*(d\alpha) = d(\varphi_t^* \alpha)$를 사용하였다.

#### ② Leibniz 규칙

$$
\mathcal{L}_V(\alpha \wedge \beta) = \mathcal{L}_V(\alpha) \wedge \beta + \alpha \wedge \mathcal{L}_V(\beta)
$$

**증명:**

$$
\mathcal{L}_V(\alpha \wedge \beta) = \frac{d}{dt}\bigg|_{t=0} \varphi_t^*(\alpha \wedge \beta) = \frac{d}{dt}\bigg|_{t=0} \varphi_t^*(\alpha) \wedge \varphi_t^*(\beta)
$$

Product rule을 적용하면 위의 Leibniz 규칙이 된다.

> [!note] 필기 노트의 메모
> 이 성질을 기하학적으로 해석하면 재미있다고 하는데, 나는 이것을 어떻게 기하학적으로 해석해야 하는지 모르겠다.

> [!note] Glia의 보충 (2026-05-17)
> **기하학적 해석: 넓이의 변화율**
>
> 2차원에서 $\alpha$와 $\beta$가 각각 1-form이면, $\alpha \wedge \beta$는 두 방향이 만드는 **넓이 요소**다. Flow를 따라 이 넓이가 어떻게 변하는지를 묻는 게 $\mathcal{L}_V(\alpha \wedge \beta)$이다.
>
> 넓이가 변하는 방식은 두 가지뿐이다:
> - $\alpha$ 방향이 변형되면서 넓이가 변한다 → $\mathcal{L}_V(\alpha) \wedge \beta$
> - $\beta$ 방향이 변형되면서 넓이가 변한다 → $\alpha \wedge \mathcal{L}_V(\beta)$
>
> 이것은 곡의 미분법 $(fg)' = f'g + fg'$과 본질적으로 같은 구조다. 직사각형의 넓이 $A = a \times b$의 변화율이 $dA = da \cdot b + a \cdot db$인 것처럼, wedge product로 만들어진 기하학적 "부피"의 변화율도 각 변이 독립적으로 기여하는 항의 합이 된다.
>
> 실제로 노트 아래의 volume form 결과 $\mathcal{L}_V \Omega = \text{div}(V)\,\Omega$도 이 Leibniz 규칙을 $n$번 반복 적용해서 나온 것이다 — $dx^1 \wedge \cdots \wedge dx^n$의 각 $dx^{i_q}$가 한 번씩 $\mathcal{L}_V$를 받아 $\frac{\partial V^{i_q}}{\partial x^k}dx^k$로 바뀌고, 대각 성분($k = i_q$)만 살아남아 $\partial_1 V^1 + \cdots + \partial_n V^n = \text{div}(V)$가 된다.

### 일반적 $p$-form의 Lie derivative

$$
\alpha = \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;dx^{i_1} \wedge \cdots \wedge dx^{i_p}
$$

Leibniz 규칙과 $\mathcal{L}_V dx^{i_q} = d\mathcal{L}_V x^{i_q} = dV^{i_q} = \frac{\partial V^{i_q}}{\partial x^k}\,dx^k$를 사용하면:

$$
\mathcal{L}_V \alpha = \frac{1}{p!}\bigl\{\mathcal{L}_V(\alpha_{i_1, \ldots, i_p})\bigr\}\;dx^{i_1} \wedge \cdots \wedge dx^{i_p}
$$

$$
\quad + \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;\Bigl\{\mathcal{L}_V(dx^{i_1})\Bigr\} \wedge dx^{i_2} \wedge \cdots \wedge dx^{i_p}
$$

$$
\quad + \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;dx^{i_1} \wedge \Bigl\{\mathcal{L}_V(dx^{i_2})\Bigr\} \wedge dx^{i_3} \wedge \cdots \wedge dx^{i_p}
$$

$$
\quad + \cdots
$$

$$
\quad + \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;dx^{i_1} \wedge \cdots \wedge \Bigl\{\mathcal{L}_V(dx^{i_p})\Bigr\}
$$

각 기저 1-form의 Lie derivative는:

$$
\mathcal{L}_V dx^{i_q} = d\mathcal{L}_V x^{i_q} = dV^{i_q} = \frac{\partial V^{i_q}}{\partial x^k}\,dx^k
$$

이를 대입하면 명시적인 결과를 얻는다:

$$
\mathcal{L}_V \alpha = \frac{1}{p!}\,V(\alpha_{i_1, \ldots, i_p})\;dx^{i_1} \wedge \cdots \wedge dx^{i_p}
$$

$$
\quad + \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;\frac{\partial V^{i_1}}{\partial x^k}\,dx^k \wedge dx^{i_2} \wedge \cdots \wedge dx^{i_p}
$$

$$
\quad + \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;dx^{i_1} \wedge \frac{\partial V^{i_2}}{\partial x^k}\,dx^k \wedge dx^{i_3} \wedge \cdots \wedge dx^{i_p}
$$

$$
\quad + \cdots
$$

$$
\quad + \frac{1}{p!}\,\alpha_{i_1, \ldots, i_p}\;dx^{i_1} \wedge \cdots \wedge \frac{\partial V^{i_p}}{\partial x^k}\,dx^k
$$

### Volume form의 Lie derivative

$\Omega = dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n$은 volume form이자 top form이다.

$$
\mathcal{L}_V \Omega = \mathcal{L}_V(dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n)
$$

$$
= (\partial_1 V^1 + \partial_2 V^2 + \cdots + \partial_n V^n)\;dx^1 \wedge dx^2 \wedge \cdots \wedge dx^n
$$

$$
= \text{div}(V)\;\Omega
$$

이 결과는 벡터장의 **divergence**가 volume form의 Lie derivative를 통해 자연스럽게 정의된다는 것을 보여준다.

# 궁금한 내용

- Current 3-form $J$의 정확한 정의와 물리적 의미? $dJ = 0$과 conservation law의 관계?
- Lie derivative의 더 직관적인 해석은?
- $\frac{d}{dt}\big|_{t=0} f(\varphi(t,x)) = V(f)$의 유도 과정?
- Lie derivative와 Lie bracket의 명칭적 연관?
- Leibniz 규칙의 기하학적 해석?

# AI의 보충 설명


# 연관 학습 노트

- [[AM lecture note - Differential forms]]
- [[AM lecture note - Symplectic geometry intro]]

# References


# 다음 강의

[[AM lecture note - Stokes theorem]]
# 필기 원본

![[AM_10thweek_2.pdf]]
