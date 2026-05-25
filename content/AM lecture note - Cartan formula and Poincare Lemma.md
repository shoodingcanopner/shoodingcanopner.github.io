---
title: AM lecture note - Cartan formula and Poincare Lemma
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

[[AM lecture note - Stokes theorem]]

# 오늘의 핵심

- Lie derivative의 세 가지 성질로부터 정의를 끌어낼 수 있는가?
- Interior product의 정의와 성질
- **Cartan magic formula**: $\mathcal{L}_V = d \circ i_V + i_V \circ d$
- Cartan formula로부터 Lie derivative의 세 성질을 복원하는 증명
- Lie derivative와 interior product에 관한 정리 (commutator 관계)
- Closed form, exact form의 정의와 **de Rham cohomology**
- **Poincaré Lemma**: star-shaped 열린 집합에서 모든 closed form은 exact
- Phase space가 star-shaped이므로 generating function이 존재하는 이유

# 필기 내용

## Lie derivative 복습

Lie derivative $\mathcal{L}_V$의 특징들:

**① 0-form에 취했을 때:**

$$
\mathcal{L}_V(f) = V(f), \quad \forall f \in \Omega^0(\mathcal{U}),\; f \in C^\infty(\mathcal{U})
$$

**② $d$와의 교환:**

$$
\mathcal{L}_V \circ d = d \circ \mathcal{L}_V
$$

**③ Leibniz rule:**

$$
\mathcal{L}_V(\alpha \wedge \beta) = (\mathcal{L}_V \alpha) \wedge \beta + \alpha \wedge (\mathcal{L}_V \beta), \quad \forall \alpha, \beta \in \Omega^\bullet(\mathcal{U})
$$

이 세 조건으로 Lie derivative의 정의를 끌어내는 게 가능한가? 교수님은 모르겠다고 하셨다.

## General Differential p-form에 대한 Lie derivative

$$
\mathcal{L}_V \left( \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; dx^{i_1} \wedge \cdots \wedge dx^{i_p} \right)
$$

$$
= \sum_{i_1,\ldots,i_p} V(\alpha_{i_1,\ldots,i_p}) \; dx^{i_1} \wedge \cdots \wedge dx^{i_p}
$$

$$
+ \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; d(V(x^{i_1})) \wedge \cdots \wedge dx^{i_p}
$$

$$
+ \cdots + \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; dx^{i_1} \wedge \cdots \wedge d(V(x^{i_p}))
$$

## Interior Product 정의

$$
i: \text{Vect}(\mathcal{U}) \times \Omega^p(\mathcal{U}) \longrightarrow \Omega^{p-1}(\mathcal{U})
$$

$$
(V, \alpha) \longmapsto i_V \alpha
$$

form의 차수를 한 단계 낮춘다.

일반적인 p-form에 대해:

$$
i_V \left( \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; dx^{i_1} \wedge \cdots \wedge dx^{i_p} \right) = \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; (i_V dx^{i_1}) \wedge \cdots \wedge dx^{i_p}
$$

$$
- \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; dx^{i_1} \wedge (i_V dx^{i_2}) \wedge \cdots \wedge dx^{i_p}
$$

$$
+ \cdots + (-1)^{p-1} \sum_{i_1,\ldots,i_p} \alpha_{i_1,\ldots,i_p} \; dx^{i_1} \wedge dx^{i_2} \wedge \cdots \wedge (i_V dx^{i_p})
$$

여기서 벡터장을 $V = V^i(x) \partial_i$라고 표현할 때, $i_V dx^i = V^i(x)$이다.

## Interior Product의 성질

**① $C^\infty$-linear:**

$$
i_V(f\alpha) = f \, i_V(\alpha), \quad f \text{는 } C^\infty \text{ class 0-form}
$$

**② 1-form $df$에 대해:**

$$
i_V(df) = V(f)
$$

**③ Graded Leibniz rule:**

$$
i_V(\alpha \wedge \beta) = (i_V \alpha) \wedge \beta + (-1)^p \, \alpha \wedge (i_V \beta), \quad \text{for } \alpha \in \Omega^p(\mathcal{U})
$$

## 세 연산의 차수 비교

| 연산 | 사상 | 차수 변화 |
|------|------|-----------|
| $d$ | $\Omega^p \to \Omega^{p+1}$ | form의 차수를 올린다 |
| $\mathcal{L}_V$ | $\Omega^p \to \Omega^p$ | form의 차수가 그대로 |
| $i_V$ | $\Omega^p \to \Omega^{p-1}$ | form의 차수를 내린다 |

## Cartan Magic Formula

$$
\mathcal{L}_V = d \circ i_V + i_V \circ d
$$

$D_V = d \circ i_V + i_V \circ d$라고 정의한 뒤, $D_V$와 $\mathcal{L}_V$의 성질과 일치함을 보인다.

### 증명: 성질 ①

$$
D_V f = (d \circ i_V + i_V \circ d) f = d(i_V f) + i_V(df) = V(f)
$$

$f$는 0-form이라서 $i_V f = 0$이다.

### 증명: 성질 ②

$$
D_V \circ d = (d \circ i_V + i_V \circ d) \circ d = (d \circ i_V) \circ d = d(i_V d) = d(d \circ i_V + i_V \circ d) = d \circ D_V
$$

따라서 $D_V \circ d = d \circ D_V$.

### 증명: 성질 ③

$\alpha$는 p-form, $\beta$는 q-form이라 하자.

$$
D_V(\alpha \wedge \beta) = (D_V \alpha) \wedge \beta + \alpha \wedge (D_V \beta)
$$

이 증명의 상세 전개:

$$
D_V(\alpha \wedge \beta) = d \, i_V(\alpha \wedge \beta) + i_V \, d(\alpha \wedge \beta)
$$

$$
= d\big((i_V \alpha) \wedge \beta + (-1)^p \alpha \wedge i_V \beta\big) + i_V\big(d\alpha \wedge \beta + (-1)^p \alpha \wedge d\beta\big)
$$

$$
= (d \, i_V \alpha) \wedge \beta + (-1)^{p-1}(i_V \alpha) \wedge d\beta + (-1)^p d\alpha \wedge i_V \beta + \alpha \wedge d \, i_V \beta
$$

$$
\quad + (i_V \, d\alpha) \wedge \beta + (-1)^{p+1} d\alpha \wedge i_V \beta + (-1)^p i_V \alpha \wedge d\beta + \alpha \wedge i_V \, d\beta
$$

$$
= (d \, i_V \alpha + i_V \, d\alpha) \wedge \beta + \alpha \wedge (d \, i_V \alpha + i_V \, d) \beta
$$

$$
= D_V \alpha \wedge \beta + \alpha \wedge D_V \beta
$$

## Lie derivative와 Interior product에 관한 정리

$V, W \in \text{Vect}(\mathcal{U})$일 때, $\Omega^\bullet(\mathcal{U})$ 위의 연산자로서:

**① Lie derivative의 commutator:**

$$
[\mathcal{L}_V, \mathcal{L}_W] := \mathcal{L}_V \mathcal{L}_W - \mathcal{L}_W \mathcal{L}_V = \mathcal{L}_{[V,W]}
$$

여기서 $\mathcal{L}_V \alpha := \frac{d}{dt}\bigg|_{t=0} \varphi_t^*(\alpha)$이고, 벡터장에 대해서는 $\mathcal{L}_X Y = [X,Y] = XY - YX$.

**② Interior product의 반교환:**

$$
i_V i_W + i_W i_V = 0
$$

**③ $\mathcal{L}_V$와 $d$의 교환:**

$$
[\mathcal{L}_V, d] = \mathcal{L}_V d - d\mathcal{L}_V = 0
$$

앞서 증명했듯이.

**④ Cartan formula 재서술:**

$$
i_V d + d \, i_V = \mathcal{L}_V
$$

**⑤ $\mathcal{L}_V$와 $i_W$의 commutator:**

$$
[\mathcal{L}_V, i_W] = \mathcal{L}_V i_W - i_W \mathcal{L}_V = i_{[V,W]}
$$

증명 스케치:

$$
= (i_V d + d \, i_V) i_W - i_W (i_V d + d \, i_V)
$$

> [!question] 질문
> 이것으로 $i_{[V,W]}$를 어떻게 유도하지?

## Poincaré Lemma

증명을 어떻게 하냐? → 일단은 받아들이고 넘어가라.

### Closed form과 Exact form

- $\alpha$가 **closed**: $d\alpha = 0$
- $\alpha$가 **exact**: $\alpha = d\beta$인 $\beta$가 존재

$d^2 = 0$이기 때문에, **exact form은 모두 closed form**이다.
![[Pasted image 20260525133153.png]]
### de Rham Cohomology

**정의)** $\mathcal{U} \in \mathbb{R}^n$이 열린 집합일 때, p차 de Rham cohomology를 다음과 같이 정의한다:

$$
\mathcal{H}^p_{\text{dR}}(\mathcal{U}) := \frac{\text{closed } p\text{-forms on } \mathcal{U}}{\text{exact } p\text{-forms on } \mathcal{U}}
$$

> [!question] 질문
> 이 분수 기호가 무슨 의미인가? → 이것은 **몫 공간(quotient space)**을 의미한다. Closed p-form들의 벡터 공간에서 exact p-form들의 부분 공간을 "같은 것으로 취급(동치 관계)"한 뒤 얻어지는 공간이다. 즉 두 closed form $\alpha_1, \alpha_2$가 exact form만큼 차이 나면 ($\alpha_1 - \alpha_2 = d\beta$), 같은 동치류로 본다.

**Example 1)** $\mathcal{U}$가 connected라 가정하고 $\mathcal{H}^0_{\text{dR}}(\mathcal{U})$를 고려하자.

$f$가 closed form이라면 $df = 0$이므로 $f$는 constant function이다.

따라서:

$$
\mathcal{H}^0_{\text{dR}}(\mathcal{U}) = \mathbb{R}
$$

**Example 2)** $\mathcal{U} = \mathbb{R}^2 - \{0\}$

$$
\alpha = \frac{x \, dy - y \, dx}{x^2 + y^2}
$$

$\alpha$는 closed이지만 exact하지는 않다. 이것이 Berry connection과 연관이 있다고 한다.

$$
\mathcal{H}^1_{\text{dR}}(\mathcal{U}) = \text{winding number} = \mathbb{Z}
$$

### Star-Shaped 집합

**정의)** $\mathcal{U} \subset \mathbb{R}^n$이 **star-shaped**라 함은, 어떤 점 $x_0 \in \mathcal{U}$가 존재하여, 임의의 $x \in \mathcal{U}$에 대해 $x$와 $x_0$를 잇는 직선이 $\mathcal{U}$ 안에 포함되는 것이다.

> [!question] 질문
> 무엇이 straight connecting인가? → $x$와 $x_0$를 잇는 선분(line segment) $\{tx_0 + (1-t)x \mid t \in [0,1]\}$이 $\mathcal{U}$에 포함된다는 것이다.

### Poincaré Lemma 서술

**Poincaré Lemma)** 열린 부분집합 $\mathcal{U} \in \mathbb{R}^n$이 star-shaped이면,

$$
\mathcal{H}^p_{\text{dR}}(\mathcal{U}) = 0, \quad \text{for any } p > 0
$$

즉, **모든 closed form이 exact**하다.
$\alpha$가 closed form ($d \alpha = 0$)이면 반드시 어떤 $\beta$가 존재해서 $\alpha = d \beta$가 된다.

### Phase Space와의 연결

Phase space는 본질적으로 star-shaped이다. ($\mathbb{R}^{2n}$은 convex이므로 당연히 star-shaped.)

Phase space $\mathbb{R}^{2n} = (q_1, \ldots, q_n, p_1, \ldots, p_n)$ 위에서, time-dependent transformation은

$$
\varphi: (\vec{q}, \vec{p}) \longmapsto (\vec{Q}, \vec{P})
$$

이것이 canonical transformation이 되려면:

$$
\sum_i dp_i \wedge dq_i = \sum_i dP_i \wedge dQ_i
$$

> [!question] 질문
> 내적은 보존된다는 의미? 이게 무슨 의미지? → symplectic 2-form $\omega = \sum_i dp_i \wedge dq_i$가 보존된다는 것이다. 이것은 canonical transformation의 정의 자체이다.

이로부터:

$$
d\left(\sum_i dp_i \wedge dq_i - \sum_i dP_i \wedge dQ_i\right) = 0
$$

Phase space는 star-shaped이므로, Poincaré Lemma에 의해 generating function $F$가 존재하여:

$$
dF = \sum_{i=1}^{n} p_i \, dq_i - \sum_{i=1}^{n} P_i \, dQ_i
$$

# 궁금한 내용

1. Lie derivative의 세 가지 성질만으로 정의를 완전히 결정할 수 있는가?
2. ~~이 분수 기호(de Rham cohomology 정의에서)가 무슨 의미인가?~~ → 몫 공간
3. ~~무엇이 straight connecting인가?~~ → 선분이 집합 안에 포함
4. $[\mathcal{L}_V, i_W] = i_{[V,W]}$ 증명의 나머지 전개는?
5. Berry connection과 $\mathcal{H}^1_{\text{dR}}(\mathbb{R}^2 \setminus \{0\})$의 구체적 연결은?

# AI의 보충 설명


# 연관 학습 노트

- [[AM lecture note - Differential forms]]
- [[AM lecture note - Hodge dual and Lie derivative]]
- [[AM lecture note - Generating function]]
- [[AM lecture note - Canonical transformation]]

# References


# 다음 강의



[[AM lecture note - Symplectic form]]
# 필기 원본
![[AM_11thweek_1.pdf]]