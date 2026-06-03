---
title: AM lecture note - Lie Group, Lie Algebra and Moment Map
date: "2026-06-03"
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

[[AM lecture note - Lagrangian submanifold]]

# 오늘의 핵심

- Lie group은 "매끄러운 대칭 변환들의 모임"이고, Lie algebra $\mathfrak{g} = T_e G$는 그 무한소 버전이다.
- Group action은 군이 다양체 위의 점을 다른 점으로 옮기는 사상이다 — 라그랑지안의 $\int\mathcal{L}\,dt$와는 무관.
- Lie algebra 원소 $A \in \mathfrak{g}$마다 $M$ 위의 벡터장 $V_A$가 생기고, 이 대응은 Lie bracket을 보존한다 (Prop 3.6.10).
- $V_A$가 Hamiltonian vector field이면 $\iota_{V_A}\omega = d\mathcal{H}_A$인 스칼라 함수 $\mathcal{H}_A$가 존재한다.
- Moment map $\mu: M \to \mathfrak{g}^*$는 이 $\mathcal{H}_A$들을 모든 $A \in \mathfrak{g}$에 대해 패키징한 것이다.

# 필기 내용

## §3.6.1 Lie Group

| Symbol | Meaning |
|--------|---------|
| $G$ | Lie group |
| $\mathfrak{g} = T_e G$ | Lie algebra ($e$에서의 접공간) |
| $[A, B]$ | Lie bracket (행렬의 경우 교환자 $AB - BA$) |
| $\rho: G \times M \to M$ | Group action |
| $G \cdot x$ | 점 $x$의 궤도(orbit) |
| $G_x$ | 점 $x$의 안정화군(stabilizer) |

**Definition 3.6.1**: Lie group은 매끄러운 다양체이면서 동시에 군 구조를 가지고, 군 연산(곱셈, 역원)이 매끄러운 사상인 것.

### $GL_n(\mathbb{R})$

$$
GL_n(\mathbb{R}) := \{A \in M_n(\mathbb{R}) \mid \det(A) \neq 0\}
$$

$\det$는 연속함수이므로 $GL_n(\mathbb{R})$은 $\mathbb{R}^{n^2}$의 **열린 부분집합** → 자동으로 매끄러운 다양체 (Example 3.5.4).

$$
\dim GL_n(\mathbb{R}) = n^2
$$

군 공리 확인: $\det(AB) = \det(A)\det(B) \neq 0$ (닫힘), $I_n$ (항등원), $\det(A^{-1}) = 1/\det(A) \neq 0$ (역원). ✓

군 연산의 매끄러움: 곱셈은 성분이 다항식, 역원은 Cramer 공식으로 $\det \neq 0$인 영역에서 매끄러움. ✓

### 부분군들의 계층

$$
GL_n(\mathbb{R}) \supset SL_n(\mathbb{R}) \supset O_n(\mathbb{R}) \supset SO_n(\mathbb{R})
$$

**$SL_n(\mathbb{R})$**: $\det = 1$ 조건 → $\dim = n^2 - 1$.

곡선 $\gamma(t) = 1 + tA + O(t^2)$에 대해 $\det(\gamma(t)) = 1 + t\,\text{Tr}(A) + \cdots$이므로 $\mathfrak{sl}_n = \{A \mid \text{Tr}(A) = 0\}$.

**$SO_n(\mathbb{R})$**: $A^T A = I$, $\det = 1$ 조건 → $\dim = \frac{n(n-1)}{2}$.

$(1+tA)(1+tA^T) = 1 + t(A + A^T) + O(t^2) = 1$이므로 $\mathfrak{so}_n = \{A \mid A + A^T = 0\}$ (반대칭 행렬).

> [!note] 양자역학 연결
> Sakurai에서 배운 $SU(2)$도 Lie group. 각운동량 연산자 $J_x, J_y, J_z$가 $\mathfrak{su}(2)$의 기저이고, 회전 연산자 $e^{-i\theta J_z/\hbar} \in SU(2)$가 지수 사상(exponential map)의 예시:
> $$J_i \in \mathfrak{su}(2) \xrightarrow{\exp} e^{-i\theta J_i/\hbar} \in SU(2)$$
> Sakurai의 교환자 관계 $[J_i, J_j] = i\hbar\epsilon_{ijk}J_k$가 바로 $\mathfrak{su}(2)$의 Lie bracket 구조다.

## §3.6.1 Group Action (Definition 3.6.3)

> [!warning] 용어 주의
> 여기서 **action**은 라그랑지안의 $S = \int\mathcal{L}\,dt$와 완전히 다른 단어다. 군이 다양체 위의 점을 다른 점으로 옮기는 **사상(map)**을 의미한다.

군 $G$가 다양체 $M$ 위에 작용한다는 것:

$$
\rho: G \times M \longrightarrow M, \qquad (g, m) \longmapsto g \cdot m
$$

두 조건: $e \cdot m = m$, $(gh) \cdot m = g \cdot (h \cdot m)$.

**Action의 언어들 (Def 3.6.6)**:

$$
G \cdot x = \{\rho_g(x) \mid g \in G\} \subset M \qquad \text{(궤도, orbit)}
$$

$$
G_x = \{g \in G \mid \rho_g(x) = x\} \subset G \qquad \text{(안정화군, stabilizer)}
$$

- **Transitive**: 궤도가 $M$ 전체 (단 하나의 궤도)
- **Free**: 모든 점의 stabilizer가 $\{e\}$뿐

**Example 3.6.5**: 벡터장 $V$의 흐름 $\rho_t$는 $\mathbb{R}$-action. $\rho_t \circ \rho_s = \rho_{t+s}$이 군 구조와 호환. Hamiltonian vector field의 흐름이 $\varphi_t^*\omega = \omega$를 만족하는 것 = 이 $\mathbb{R}$-action이 symplectomorphism으로 작용하는 것.

**Example 3.6.7 (Hopf fibration)**: $S^1$이 $S^3$에 free하게 작용:

$$
e^{i\theta} \cdot (z_1, z_2) = (e^{i\theta}z_1, e^{i\theta}z_2)
$$

$$
S^1 \hookrightarrow S^3 \xrightarrow{\pi} S^3/S^1 \simeq S^2
$$

## §3.6.1 Lie Algebra와 벡터장 (Prop 3.6.10)

$G$가 $M$에 작용할 때, $A \in \mathfrak{g}$마다 $M$ 위의 벡터장 $V_A$가 생긴다:

$$
V_A(x) = \frac{d}{dt}\bigg|_{t=0}(\gamma(t) \cdot x), \qquad \gamma(0) = e,\; \gamma'(0) = A
$$

**Proposition 3.6.10**: 이 사상 $\mathfrak{g} \to \text{Vect}(M)$은 Lie algebra morphism:

$$
[V_A, V_B] = V_{[A,B]}, \qquad \forall A, B \in \mathfrak{g}
$$

$\mathfrak{g}$에서의 Lie bracket이 $M$ 위 벡터장의 Lie bracket으로 정확히 보내진다.

> [!note] 양자역학 연결
> $[J_i, J_j] = i\hbar\epsilon_{ijk}J_k$를 만족하는 연산자들이 힐베르트 공간 위에서 작용하는 것이 정확히 $\mathfrak{su}(2) \to \text{Vect}(\mathcal{H})$의 Lie algebra morphism이다. Sakurai가 교환자 관계 하나만으로 $J^2$ 고유값, 올림/내림 연산자를 전부 유도한 것이 Lie algebra의 대수적 구조를 활용한 것.

## §3.6.2 Hamiltonian Action과 Moment Map

### Hamiltonian action으로 가는 단계

$G$가 symplectomorphism으로 작용 → $\mathscr{L}_{V_A}\omega = 0$ → $d(\iota_{V_A}\omega) = 0$ → $\iota_{V_A}\omega$는 closed 1-form.

closed이면 항상 exact인 건 아님. $H^1_{dR}(M) = 0$ (simply connected 등)이면 Poincaré Lemma에 의해:

$$
\iota_{V_A}\omega = d\mathcal{H}_A, \qquad \mathcal{H}_A \in C^\infty(M)
$$

$\mathcal{H}_A$는 $V_A$를 Hamiltonian vector field로 만드는 스칼라 함수. 단, 상수만큼의 불확정성이 있음: $\mathcal{H}_A \sim \mathcal{H}_A + c$.

**Definition 3.6.12**: 이 상수 불확정성을 군 전체에 걸쳐 일관되게 고정할 수 있을 때 action을 **Hamiltonian**이라 한다. 조건:

$$
\text{①}\quad \iota_{V_A}\omega = d\mathcal{H}_A
$$

$$
\text{②}\quad \{\mathcal{H}_A, \mathcal{H}_B\} = \mathcal{H}_{[A,B]}
$$

조건 ②는 $\mathfrak{g} \to C^\infty(M)$이 Lie algebra morphism임을 요구 — Prop 3.6.10의 $\mathfrak{g} \to \text{Vect}(M)$이 morphism인 것과 같은 구조.

### Moment Map (Definition 3.6.12)

$\mathcal{H}_A$를 모든 $A \in \mathfrak{g}$에 대해 패키징:

$$
\mu: M \longrightarrow \mathfrak{g}^*, \qquad \langle \mu(m), A \rangle = \mathcal{H}_A(m)
$$

**$\mu(m)$의 정확한 역할**:

- $\mathcal{H}_A \in C^\infty(M)$: 특정 $A$를 고정했을 때 $V_A$를 Hamiltonian vector field로 만드는 스칼라 함수.
- $\mu(m) \in \mathfrak{g}^*$: 특정 점 $m$을 고정했을 때 모든 $A$에 대한 $\mathcal{H}_A(m)$ 값을 한꺼번에 담은 것.

$$
\iota_{V_A}\omega = d\mathcal{H}_A \qquad \longleftrightarrow \qquad \langle \mu(-), A\rangle = \mathcal{H}_A(-)
$$

### Example 3.6.14: 평행이동 대칭 → 선운동량

**세팅**: $G = \mathbb{R}^n$이 위상공간 $\mathbb{R}^{2n}$에 평행이동으로 작용.

$$
\vec{a} \cdot (\vec{x}, \vec{p}) = (\vec{x} + \vec{a},\, \vec{p})
$$

**Lie algebra**: $\mathfrak{g} = \mathbb{R}^n = \mathbb{R}e_1 \oplus \cdots \oplus \mathbb{R}e_n$. 기저 $e_i$는 $x^i$ 방향 평행이동의 생성자.

**벡터장**: $e_i$가 생성하는 벡터장

$$
V_{e_i}(x) = \frac{d}{dt}\bigg|_{t=0}(\vec{x} + te_i, \vec{p}) = \frac{\partial}{\partial x^i}
$$

**$\iota_{V_{e_i}}\omega$ 계산**: $\omega = \sum_i dp_i \wedge dx^i$에 대해

$$
\iota_{\partial/\partial x^i}\omega = \iota_{\partial/\partial x^i}(dp_i \wedge dx^i) = -dx^i \cdot (\iota_{\partial/\partial x^i} dp_i) + dp_i \cdot (\iota_{\partial/\partial x^i} dx^i)
$$

$\iota_{\partial/\partial x^i} dp_i = 0$, $\iota_{\partial/\partial x^i} dx^i = 1$이므로

$$
\iota_{V_{e_i}}\omega = dp_i = d(-p_i) \cdot (-1) \implies \mathcal{H}_{e_i} = -p_i
$$

**Moment map**:

$$
\mu: \mathbb{R}^{2n} \longrightarrow \mathbb{R}^n
$$

$$
\mu(\vec{x}, \vec{p}) = -\vec{p} = (-p_1, \cdots, -p_n)
$$

> [!note] 뇌터 정리와의 연결
> 평행이동 대칭의 보존량이 선운동량 $\vec{p}$라는 것이 moment map 언어로 정확히 표현된다. 부호 $-$는 Si Li의 $\omega = dp \wedge dq$ 규약에서 오는 것.

### Example 3.6.15: 회전 대칭 → 각운동량

**세팅**: $S^1$이 $\mathbb{R}^2$에 회전으로 작용.

$$
e^{i\theta}: \begin{pmatrix} x \\ y \end{pmatrix} \mapsto \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}
$$

$\omega = dx \wedge dy$에 대해 $(e^{i\theta})^*(dx \wedge dy) = dx \wedge dy$이므로 $S^1$은 symplectomorphism으로 작용. ✓

**Lie algebra**: $\mathfrak{g} = \mathbb{R}e$, 생성자 $e = \partial/\partial\theta$.

**벡터장**:

$$
V_e\big|_{(x,y)} = \frac{\partial}{\partial\theta}\bigg|_{\theta=0} \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix}
$$

$$
V_e = -y\frac{\partial}{\partial x} + x\frac{\partial}{\partial y}
$$

**$\iota_{V_e}\omega$ 계산**: $\omega = dx \wedge dy$에 대해

$$
\iota_{V_e}\omega = -y\,dy - x\,dx = d\!\left(-\frac{1}{2}x^2 - \frac{1}{2}y^2\right)
$$

따라서

$$
\mathcal{H}_e = -\frac{1}{2}(x^2 + y^2) + c, \qquad c \in \mathbb{R}
$$

**Moment map**:

$$
\mu(x, y) = -\frac{1}{2}|z|^2 + c, \qquad z = x + iy
$$

**$SO(3)$으로 확장** (Example 3.6.16): $SO_n(\mathbb{R})$이 $\mathbb{R}^{2n}$에 작용할 때, $\mathfrak{so}_n$의 기저 $E_{ij}$ ($(i,j)$성분이 1, $(j,i)$성분이 $-1$)에 대한 Hamiltonian은

$$
\mathcal{H}_{E_{ij}} = x_i p_j - x_j p_i
$$

$n=3$일 때 이것이 바로 **각운동량의 성분** $L_{ij} = x_i p_j - x_j p_i$. ✓

### "Moment"라는 이름의 유래

"Moment"는 역학의 **돌림힘(torque)** 개념에서 왔다. 각운동량이 프랑스어로 *moment cinétique*이고, 수학자들이 이 개념을 추상화하면서 이름을 그대로 가져왔다.

$$
\underbrace{\mu: M \to \mathfrak{g}^*}_{\text{moment map}} \quad\text{는}\quad \underbrace{\vec{L} = \vec{x} \times \vec{p}}_{\text{각운동량}}\text{의 추상화}
$$

| 대칭 | Lie group | Moment map | 보존량 |
|---|---|---|---|
| 평행이동 | $\mathbb{R}^n$ | $\mu = -\vec{p}$ | 선운동량 |
| 회전 | $S^1$ | $\mu = -\frac{1}{2}\|z\|^2$ | 각운동량 ($n=3$: $L_{ij} = x_ip_j - x_jp_i$) |


# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

- [[AM lecture note - Lagrangian submanifold]]
- [[AM lecture note - Symplectic form and Hamiltonian vector field]]
- [[AM lecture note - Poisson bracket and Darboux theorem]]
- [[AM lecture note - Canonical transformation revisited]]

# References

- Si Li, *Classical Mechanics and Geometry*, Chapter 3, §3.6.1–3.6.2 (pp. 121–125)

# 다음 강의


# 필기 원본
