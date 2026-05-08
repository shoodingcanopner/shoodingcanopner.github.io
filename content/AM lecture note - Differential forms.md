---
title: AM lecture note - Differential forms
date: "2026-05-08"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Analytical Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

공지: 5월 마지막 주 전까지 강의를 마치겠다. (5월 21일이 마지막 강의가 되도록!)

# 지난 강의

[[AM lecture note - Symplectic geometry intro]]에서 vector field, tangent space, integral curve, Lie bracket, tangent map (push-forward)을 다뤘다. 오늘은 push-forward까지 마무리하고, **differential form**으로 넘어간다.

# 오늘의 핵심

오늘의 핵심 개념:
- **Cotangent space** $T_x^*\mathcal{U} = \text{Hom}(T_x\mathcal{U}, \mathbb{R})$: tangent space의 dual
- **1-form**: 각 점에 cotangent vector를 대응시키는 사상 $\alpha: \mathcal{U} \to T_x^*\mathcal{U}$
- **Interior product** $\iota_V$: 벡터장과 form의 자연스러운 pairing
- **$p$-form과 wedge product**: exterior algebra의 구조
- **Exterior derivative** $d$: form의 차수를 올리는 유일한 미분 연산자
- **Pull-back** $\varphi^*$: push-forward의 dual, form을 끌어오는 연산

# 필기 내용

## Differential form

### 지난 시간 복습, tangent vector
$\mathcal{U}$는 coordinate chart이다. $\mathcal{U} \in \mathbb{R}^n$, $x \in \mathcal{U}$.

그러면 $n$차원의 vector space를 가진다.

$$
T_x\mathcal{U} = \{tangent\ vectors\}
$$

이제부터는 벡터장과 쌍을 이루는 다른 tangent vector를 의미하는 것이 아니다.

$$
T_x\mathcal{U} = \text{span}\left\{\frac{\partial}{\partial x^1}\bigg|_x,\; \frac{\partial}{\partial x^2}\bigg|_x,\; \ldots,\; \frac{\partial}{\partial x^n}\bigg|_x\right\}
$$

### **Cotangent space 정의:**

$$
T_x^*\mathcal{U} = \text{Hom}(T_x\mathcal{U},\, \mathbb{R})
$$

→ 이게 무슨 뜻인지 교수님도 모른다. 아마 $\mathbb{R}$은 vector와 covector의 inner product가 실수임을 의미하는 것일 거다. 

$T_x^*\mathcal{U}$는 $T_x\mathcal{U}$의 dual space이다. 
### 1-form이란?

$\alpha$는 **1-form**이다. 벡터장의 dual-space 버전이라고 생각하면 된다. 

$$
\alpha: \mathcal{U} \longrightarrow T_x^*\mathcal{U}, \qquad x \longmapsto \alpha(x)
$$

$\{x^1, \ldots, x^n\}$를 $\mathcal{U}$ 위의 좌표라 하면:

- $T_x^*\mathcal{U}$의 basis는 $dx^1, \ldots, dx^n$이다.
- 이것은 $T_x\mathcal{U}$의 basis $\dfrac{\partial}{\partial x^1}, \ldots, \dfrac{\partial}{\partial x^n}$과 **dual**이다.

**Inner product (natural pairing):**

inner product라는 이름은 벡터장과 코벡터를 짝지어 실수를 만드는 것이다. 

$$
\langle -,\, -\rangle: T_x^*\mathcal{U} \times T_x\mathcal{U} \longrightarrow \mathbb{R}
$$
벡터와 코벡터의 basis 끼리의 inner product는 크로네터 델타이다. 
$$
\left\langle dx^i,\; \frac{\partial}{\partial x^j}\right\rangle = \delta^i_j
$$

이것이 서로 dual한 basis의 관계이다.

---

1-form $\alpha$는 basis $\{dx^1, \ldots, dx^n\}$의 선형 결합이다:

$$
\alpha = \alpha_1(x)\,dx^1 + \cdots + \alpha_n(x)\,dx^n
$$

이런 정의는 **coordinate independent definition**이다.

아까 벡터장은 $V(x) = V^1(x)\,\dfrac{\partial}{\partial x^1} + \cdots + V^n(x)\,\dfrac{\partial}{\partial x^n}$이라고 정의했었다. 
그래서 임의의 벡터장과 코벡터장의 inner product는 아래와 같다. 
계수들을 짝맞춰서 곱한 뒤 전부 더하는 것이다. 

$$
\langle\alpha,\, V\rangle = \alpha_1(x)\,V^1(x) + \cdots + \alpha_n(x)\,V^n(x)
$$

---

### Smooth 1-form: $df$
0-form $f(x)$를 이용해 1-form을 만드는 연산이 있다. 

$f(x)$가 $\mathcal{U}$ 위의 smooth function이라 하자. 그럼 $df$는 이렇게 만들어진다. 

$$
df = \frac{\partial f}{\partial x^1}\,dx^1 + \frac{\partial f}{\partial x^2}\,dx^2 + \cdots + \frac{\partial f}{\partial x^n}\,dx^n
$$

이 $df$는 **smooth 1-form**이다.

$\Omega^1(\mathcal{U})$는 **1-form의 space**이다.

$$
\Omega^1(\mathcal{U}) \times \text{Vect}(\mathcal{U}) \to C^\infty(\mathcal{U})
$$

---

## Interior product

**정의:** $V \in \text{Vect}(\mathcal{U})$일 때, $V$의 interior product $i_V$:

$$
i_V: \Omega^1(\mathcal{U}) \longrightarrow C^\infty(\mathcal{U}), \qquad \alpha \longmapsto \langle\alpha,\, V\rangle
$$

==즉, $i_V$는 미리 저장해 두었던 벡터장 $V$를 이용해서 입력받은 임의의 1-form을 $V$와 inner product하여 0-form을 만드는 연산자이다.== 

저번 시간, 벡터장 $V$는 0-form $f$에 대해 미분연산자처럼 작용한다는 것을 배웠다. 

$$
\boxed{\quad V(f)(x_0) = \frac{d}{dt}\bigg|_{t=0} f(\gamma(t)) \quad}
$$

$$
\frac{d}{dt}f(\gamma(t)) = \sum_i \frac{d\gamma^i(t)}{dt}\,\frac{\partial f}{\partial x^i}\bigg|_{\gamma(t)} = \sum_i V^i(\gamma(t))\,\frac{\partial f}{\partial x^i}(\gamma(t))
$$

이게 알고보면 $V$랑 $df$의 inner product인 것이다. 

**예시:** $V \in \text{Vect}(\mathcal{U})$, $f \in C^\infty(\mathcal{U})$일 때:

$$
V(f) = \sum_i V^i(x)\,\frac{\partial f}{\partial x^i} := i_V\,df = \langle df,\, V\rangle
$$

$df$는 아까 보였듯 $f$로 만든 1-form이다.

$$
df = \sum_i \frac{\partial f}{\partial x^i}\,dx^i
$$
### interior product로 1-form의 coefficient 추출하기

1-form $\alpha = \sum_{i=1}^n \alpha_i(x)\,dx^i$의 성분을 interior product로 추출할 수 있다:

$$
\alpha_i(x) = i_{\partial/\partial x^i}\,\alpha = \left\langle\alpha,\; \frac{\partial}{\partial x^i}\right\rangle
$$

이것은 $\dfrac{\partial}{\partial x^i}$와의 interior product이다.

---

## $p$-form과 Exterior Product

2차원 이상의 form으로 넘어가자. 1폼만 가지고는 뭔가 부족한 것이다. 
2차 이산의 form은 1-form의 텐서곱으로 이해하면 된다. 

**정의:** $\bigwedge^p T_x^*\mathcal{U}$는 $T_x^*\mathcal{U}$의 **$p$-th exterior product**이다.
exterior product가 무엇인지는 나중에 자세히 알아보자. 

$\xi$는 **$p$-form**:

$$
\xi: \mathcal{U} \longrightarrow \bigwedge^p T_x^*\mathcal{U}, \qquad x \longmapsto \xi(x)
$$

$\bigwedge^p T_x^*\mathcal{U}$의 basis:

$$
\left\{dx^{i_1} \wedge dx^{i_2} \wedge \cdots \wedge dx^{i_p}\right\}, \qquad i_1 < i_2 < \cdots < i_p
$$
$i_1$부터 $i_p$까지의 index를 어떻게 선택하느냐가 관건. 
$\mathcal{U}$가 $n$차원일 때, 1부터 $n$까지의 index가 있을 것이다. 여기서 $p$개를 뽑아 크기 순서대로 $i_1$부터 $i_p$까지로 할당하는 논리다. 

![[Pasted image 20260508132421.png]]

앞에 coefficient를 붙여서 일반적인 p-form을 이렇게 나타낼 수 있다. 
$$
\xi = \sum_{i_1 < \cdots < i_p} \xi_{i_1 \cdots i_p}(x)\; dx^{i_1} \wedge dx^{i_2} \wedge \cdots \wedge dx^{i_p}
$$
p-form space의 차원은 곧 basis의 개수이므로, 
구별되는 $n$개 중에서 $p$개를 순서없이 겹치지 않게 뽑는 경우의 수이다. 
$$
\dim\left(\bigwedge^p T_x^*\mathcal{U}\right) = \binom{n}{p} = \frac{n!}{p!\,(n-p)!}
$$

---

### Wedge product

**Wedge product 정의:**
$\Omega^p(\mathcal{U})$은 $\mathcal{U}$ 위의 smooth $p$-form의 집합.
$\Omega^\bullet(\mathcal{U})$은  $\mathcal{U}$ 위의 모든 form의 집합.
$$
\Omega^\bullet(\mathcal{U}) = \bigoplus_p \Omega^p(\mathcal{U}) = \Omega^0(\mathcal{U}) + \Omega^1(\mathcal{U}) + \Omega^2(\mathcal{U}) + \cdots
$$

→ 이걸 왜 정의하는가 싶긴 하지만... 
이게 있으면 모든 종류의 p-form 사이의 연산을 정의할 수있다. 

$$
\wedge: \Omega^p(\mathcal{U}) \times \Omega^q(\mathcal{U}) \longrightarrow \Omega^{p+q}(\mathcal{U}), \qquad (\alpha,\, \beta) \longmapsto \alpha \wedge \beta
$$

**성질:**

1. **Bilinear property**: $(\lambda_1\alpha_1 + \lambda_2\alpha_2) \wedge \beta = \lambda_1(\alpha_1 \wedge \beta) + \lambda_2(\alpha_2 \wedge \beta)$
2. **Associativity**: $(\alpha \wedge \beta) \wedge \gamma = \alpha \wedge (\beta \wedge \gamma)$
3. ==**Graded commutativity**==: $\alpha$가 $p$-form, $\beta$가 $q$-form일 때:

$$
\alpha \wedge \beta = (-1)^{pq}\,\beta \wedge \alpha
$$

**예를 들어**, 두 1-form의 wedge product에 대해, $pq=1$이므로, 

$$
dx^i \wedge dx^j = -dx^j \wedge dx^i
$$
이 경우, 똑같은 1-form basis끼리의 wedge product 는 0이 된다는 것을 반대칭성을 통해 알 수 있다. 
$$
dx^i \wedge dx^i = -dx^i \wedge dx^i
$$
이므로, $dx^i \wedge dx^i = 0$이어야 할 수밖에 없는 것이다. 

---

## Exterior Derivative

$d$가 뭘 의미하는가?

**기본 정의 (0-form → 1-form):**

$$
d: C^\infty(\mathcal{U}) = \Omega^0(\mathcal{U}) \longrightarrow \Omega^1(\mathcal{U})
$$

$d$는 0-form을 1-form으로 mapping하는 연산자다. 

$$
f \longmapsto df = \sum_{i=1}^n \frac{\partial f}{\partial x^i}\,dx^i
$$

**라이프니츠 규칙:** $d(fg) = f\,dg + g\,df$

---

### Theorem: Exterior derivative의 존재와 유일성
$d$의 기능을 더 확장해 보자. 아무 p-form이나 전부다 한 단계 높이는 연산자로. 
다음을 만족하는 **unique map** $d: \Omega^\bullet(\mathcal{U}) \to \Omega^\bullet(\mathcal{U})$가 존재한다:

1. $d$는 **$\mathbb{R}$-linear**
2. $d: \Omega^p(\mathcal{U}) \to \Omega^{p+1}(\mathcal{U})$ (차수를 1 올린다)
3. $d: \Omega^0(\mathcal{U}) \to \Omega^1(\mathcal{U})$는 위에서 정의한 $d$와 같다.
4. ==**Graded Leibniz rule**==: $\alpha$가 $p$-form이면:
$$
d(\alpha \wedge \beta) = (d\alpha) \wedge \beta + (-1)^p\,\alpha \wedge (d\beta)
$$
5. $d^2 = 0$

---

### Exterior derivative의 명시적 계산

$p$-form $\alpha$가 다음과 같이 주어진다면:

$$
\alpha = \frac{1}{p!}\sum_{i_1, \ldots, i_p} \alpha_{i_1, \ldots, i_p}(x)\; dx^{i_1} \wedge \cdots \wedge dx^{i_p}
$$
이것을 exterior derivative하면 뭐가 나올까?

 $p$-form의 basis의 exterior derivative를 먼저 계산해 보자.
 Leibniz rule과 $d^2 = 0$을 이용한다. 

$$
d(dx^{i_1} \wedge dx^{i_2} \wedge \cdots \wedge dx^{i_p}) = (\underset{0}{dd}x^{i_1}) \wedge (dx^{i_2} \wedge \cdots \wedge dx^{i_p}) + (-1)^1\,dx^{i_1} \wedge d(dx^{i_2} \wedge \cdots \wedge dx^{i_p})
$$
우변에서 첫번째 항은 0이 되어 날아간다. 
$$
= -dx^{i_1} \wedge d(dx^{i_2} \wedge dx^{i_3} \wedge \cdots \wedge dx^{i_p})
$$

$$
= -dx^{i_1} \wedge (\underset{0}{dd}x^{i_2}) \wedge (dx^{i_3} \wedge \cdots \wedge dx^{i_p}) + dx^{i_1} \wedge dx^{i_2} \wedge d(dx^{i_3} \wedge \cdots \wedge dx^{i_p})
$$
역시 우변에서 첫번째 항은 0이 되어 날아간다. 
$$
= dx^{i_1} \wedge dx^{i_2} \wedge d(dx^{i_3} \wedge \cdots \wedge dx^{i_p})
$$

$$
\cdots
$$
이 과정을 계속 반복하면, 
$$
= (-1)^{p-1}\,dx^{i_1} \wedge dx^{i_2} \cdots \wedge dx^{i_{p-1}} \wedge \underset{0}{d(dx^{i_p})}
$$

$$
= 0 \;\;!!
$$

즉, ==**1-form 이상의 basis는 exterior derivative 하면 0이 나온다.**==

$\alpha$에 대한 표현식에서 summation 되는 항인 $\alpha_{i_1, \ldots, i_p}(x)\;dx^{i_1} \wedge \cdots \wedge dx^{i_p}$에서, 
$\alpha_{i_1, \ldots, i_p}$는 0-form으로, $dx^{i_1} \wedge \cdots \wedge dx^{i_p}$는 $p$-form으로 두어 graded Leibniz rule을 이용해 $d\alpha$를 계산해 보자.
$$
d\alpha = \frac{1}{p!}\sum_{i_1, \ldots, i_p} d\!\left(\alpha_{i_1, \ldots, i_p}(x)\right) dx^{i_1} \wedge \cdots \wedge dx^{i_p} + \frac{1}{p!}\sum \alpha_{i_1, \ldots, i_p}(x)\;d\!\left(\underset{0}{dx^{i_1} \wedge \cdots \wedge dx^{i_p}}\right)
$$
우변에서 두번째 항은 0이 된다. 

결론적으로, 

$$
d\alpha = \frac{1}{p!}\sum_{i_1, \ldots, i_p}\sum_{k}^{n} \frac{\partial \alpha_{i_1, \ldots, i_p}(x)}{\partial x^k}\;dx^k \wedge dx^{i_1} \wedge \cdots \wedge dx^{i_p}
$$

---

### 1-form의 exterior derivative 예시

1-form $A = \sum_{i,j} A_j\,dx^j$에 $d$를 적용하면:

$$
dA = \sum_{i,j} \partial_i A^j(x)\;(dx^i \wedge dx^j)
$$

Antisymmetry에 의해,

$$
\sum_{i,j} \partial_i A^j(x)\;(dx^i \wedge dx^j) = \sum_{i,j} \partial_j A^i(x)\;(dx^j \wedge dx^i) = -\sum_{i,j} \partial_j A^i(x)\;(dx^i \wedge dx^j)
$$

따라서,

$$
dA = \frac{1}{2}\sum_{i,j}\left(\partial_i A^j - \partial_j A^i\right)(dx^i \wedge dx^j)
$$
---

### 벡터장에 적용: 전자기학과의 연결

1-form $A = \sum_{i,j} A_j(x)\,dx^j$ (이것을 vector potential $A$로 본다)에 $d$를 적용하면:

$$
dA = \sum_{i,j} \partial_i A_j(x)\;(dx^i \wedge dx^j)
$$

$$
dA = \frac{1}{2}\sum_{i,j}\left(\partial_i A_j - \partial_j A_i\right)(dx^i \wedge dx^j)
$$

$$
dA = F = \frac{1}{2}\sum_{i,j} F_{ij}\;(dx^i \wedge dx^j)
$$

여기서 $F_{ij} = \partial_i A_j - \partial_j A_i$는 **전자기장 텐서(field strength tensor)** 이다!

---

### $dF = 0$의 의미

그러면 $dF$는 무엇인가? 계산에 보면:

$dF = 0$이 되는 이유는 
$$
\left(\frac{\partial}{\partial x^k}F_{ij}\right)dx^k \wedge dx^i \wedge dx^j
$$

→ 여기서 $i, j, k$의 permutation을 돌려보면 사라질 거 같다.

이것은 **벡터 해석학의 항등식과 이어진다:**

$$
\nabla \times \mathbf{E} = 0, \qquad \nabla \cdot \mathbf{B} = 0
$$

즉, $dF = 0$은 **Maxwell 방정식의 Bianchi identity**에 해당한다!

Maxwell 방정식에 대한 논의는 다음 시간에 더 자세하게 다뤄진다. 

---

## Pull-back

$\mathcal{U}_1 \subset \mathbb{R}^n$, $\mathcal{U}_2 \subset \mathbb{R}^m$.

$$
\varphi: \mathcal{U}_1 \longrightarrow \mathcal{U}_2, \qquad (x^1, \ldots, x^n) \longmapsto (y^1 = \varphi^1(x),\; y^2 = \varphi^2(x),\; \ldots,\; y^m = \varphi^m(x))
$$

$\varphi$의 **pull-back** $\varphi^*$는 다음과 같이 정의된다.

**0-form (함수)의 pull-back:**
![[Pasted image 20260508144302.png]]
$$
\varphi^*(f) = f \circ \varphi
$$
$$
\varphi^*(f)(x) = f(\varphi(x))
$$
그저 합성함수일 뿐이다. 간단하다.
이것은 $\mathcal{U}_2$ 위의 함수(0-form)를 $\mathcal{U}_1$ 위의 함수로 가져오는 것이다.
$$
\varphi^*: \Omega^1(\mathcal{U}_2) \longrightarrow \Omega^1(\mathcal{U}_1)
$$

**$p$-form의 pull-back:**
활용을 확장해서 0-form뿐만 아니라 p-form에도 적용할 수 있다. 
$$
\varphi^*: \Omega^p(\mathcal{U}_2) \longrightarrow \Omega^p(\mathcal{U}_1)
$$
$y$ 좌표계를 쓰는 $\mathcal{U}_2$ 위의 $p$-form $\alpha$가 아래와 같이 표현 된다.

$$
\alpha = \frac{1}{p!}\sum_{i_1, \ldots, i_p} \alpha_{i_1, \ldots, i_p}(y)\;dy^{i_1} \wedge \cdots \wedge dy^{i_p}
$$

> [!info] Pull-back의 두 가지 변환 규칙
> 
> $$
> \alpha_{i_1, \ldots, i_p} \xrightarrow{\;\varphi^*\;} \varphi^*(\alpha_{i_1, \ldots, i_p}(y)) = \alpha_{i_1, \ldots, i_p}(\varphi(x))
> $$
> 
> $$
> dy^{i_s} \xrightarrow{\;\varphi^*\;} d(\varphi^*(y^{i_s})) = d(\varphi^{i_s}(x)) = \sum_{j_s} \frac{\partial \varphi^{i_s}(x)}{\partial x^{j_s}}\;dx^{j_s}
> $$

위 두 변환을 $\alpha$의 표현식에 적용하여 $\varphi^*(\alpha)$를 찾는다.

$$
\varphi^*(\alpha) = \frac{1}{p!}\sum_{i_1, \ldots, i_p} \varphi^*(\alpha_{i_1, \ldots, i_p}(y))\;d(\varphi^*(y^{i_1})) \wedge \cdots \wedge d(\varphi^*(y^{i_p}))
$$

$$
= \frac{1}{p!}\sum_{i_1, \ldots, i_p}\sum_{j_1, \ldots, j_p} \alpha_{i_1, \ldots, i_p}(\varphi(x))\;\frac{\partial \varphi^{i_1}(x)}{\partial x^{j_1}} \cdots \frac{\partial \varphi^{i_p}(x)}{\partial x^{j_p}}\;dx^{j_1} \wedge \cdots \wedge dx^{j_p}
$$

복잡해!! 

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

[[AM lecture note - Symplectic geometry intro]]
[[AM lecture note - Canonical transformation]]

# References

주요 교재: [[Chapter3_Interlude of Sympletic Geometry_[Si Li] Classical Mechanics and Geometry.pdf]]

# 다음 강의


# 필기 원본

![[AM_10thweek_1.pdf]]
