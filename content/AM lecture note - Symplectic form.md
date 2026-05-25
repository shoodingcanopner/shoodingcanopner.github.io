---
title: AM lecture note - Symplectic form
date: "2026-05-25"
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

[[AM lecture note - Cartan formula and Poincare Lemma]]

# 오늘의 핵심



# 필기 내용

## Symplectic vector space

물리적으로는 phase space에 해당한다.

$\omega$ 는 symplectic form이며, closed form이다. 

$V$를 finite dimensional real vector space라 하자.

$$
\omega : V \times V \longrightarrow \mathbb{R}
$$

$\omega$ is a linear map. 즉, $\omega$는 두 개의 벡터장을 받아 1개의 실수를 내뱉는 2-form이다.

$$
\omega(u, v) = -\omega(v, u)
$$

즉, $\omega$는 skew-symmetric (antisymmetric)하다.

$$
\omega : \Lambda^2 V \longrightarrow \mathbb{R}
$$

여기서 $\Lambda^2 V$는 $V \times V$와 같은 의미이다.

### Null space of $\omega$

$$
\mathcal{N} = \{ u \in V \mid \omega(u, v) = 0, \quad \forall\, v \in V \}
$$

말하자면, 하나라도 $\omega$ 안에 넣으면 무조건 0이 나오는 vector field의 집합.

### Non-degeneracy와 symplectic pairing

**Definition:** A skew-symmetric bilinear map on $V$, $\omega$ is called **non-degenerate** or **symplectic** if its null space is trivial: $\mathcal{N} = \{0\}$.

$\omega$ is symplectic pairing on $V$, $(V, \omega)$.

모든 물리적 공간은 이 성질을 만족해야 한다.

$\omega$가 phase space의 공간적 성질을 결정한다는 점과, 2개의 벡터를 받아 실수를 뱉는 연산이라는 점에서, 마치 Riemannian space에서 metric의 역할을 연상케 하나, metric은 symmetric 하지만 symplectic form은 antisymmetric 하다는 점에서 차이가 있다.

### Symplectic basis

$\omega$를 symplectic pairing on $V$라 하면, 다음을 만족하는 basis $\{e_1, e_2, \ldots, e_n, f_1, f_2, \ldots, f_n\}$이 존재한다. (이 basis는 phase space에서 $\{\partial_{x_1}, \partial_{x_2}, \ldots, \partial_{x_n}, \partial_{p_1}, \partial_{p_2}, \ldots, \partial_{p_n}\}$과 역할이 같다.)

$$
\omega(e_i, e_j) = \omega(f_i, f_j) = 0
$$

같은 종류의 basis끼리는 $\omega$에 넣으면 0이 나온다.

$$
\omega(e_i, f_j) = \delta_{ij} = -\omega(f_j, e_i)
$$
다른 종류의 basis를 하나하나 넣으면 크로네커 델타가 나온다.

이 특성들은 마치 Poisson 괄호와 commutator를 연상케 한다.

Phase space basis를 이용해 두 특성을 다시 쓰면,

$$
\omega(\partial_{x_i}, \partial_{x_j}) = \omega(\partial_{p_i}, \partial_{p_j}) = 0
$$

$$
\omega(\partial_{x_i}, \partial_{p_j}) = -\omega(\partial_{p_j}, \partial_{x_i}) = \delta_{ij}
$$

## Symplectic form의 직접적 표현

위를 만족하는 $\omega$를 $p$와 $x$의 basis로 직접 나타내면 이렇다.

$$
\omega = \sum_{\alpha=1}^{n} dp^\alpha \wedge dx^\alpha
$$

### $d\omega = 0$ 의 확인

$d\omega = 0$이어야 한다. 그 조건을 확인해 보면,

일반적인 $\{x^1, \ldots, x^n, x^{n+1}, \ldots, x^{2n}\}$의 coordinate를 사용할 때,

$$
\omega = \frac{1}{2} \sum_{i,j} \omega_{ij}\, dx^i \wedge dx^j
$$

$$
d\omega = \frac{1}{2} \sum_{i,j,k} \partial_k \omega_{ij}(x)\, dx^k \wedge dx^i \wedge dx^j
$$

$$
= \frac{1}{3!} \sum_{i,j,k} \left( \partial_k \omega_{ij} + \partial_i \omega_{jk} + \partial_j \omega_{ki} \right) dx^k \wedge dx^i \wedge dx^j
$$

$d\omega = 0$이기 위해,

$$
\partial_k \omega_{ij} + \partial_i \omega_{jk} + \partial_j \omega_{ki} = 0
$$

이어야 함을 알 수 있다.

> **질문:** 위 조건이 Poisson 괄호의 Jacobi identity와 연결되는 걸까? → 그렇다. 다음 강의에서 직접 증명한다. 

### Symplectic potential

$d\omega = 0$이기에, $\omega = d\lambda$를 만족하는 $\lambda$가 존재할 수도 있다.

$$
\omega = \sum_{\alpha=1}^{n} dp^\alpha \wedge dx^\alpha
$$

같은 경우에는,

$$
\lambda = \sum_{\alpha=1}^{n} p^\alpha\, dx^\alpha
$$

> **의문:** $\lambda$는 곧 action이다?

## Symplectic basis의 존재 증명

다시 $\{e_1, e_2, \ldots, e_n, f_1, f_2, \ldots, f_n\}$ basis 표현으로 돌아와서,

**Proof.** $e_1 \in V$를 잡으면, $\omega$의 non-degeneracy에 의해, 무조건 다음을 만족하는 $f_1$가 존재.

$$
f_1 \in V, \quad \omega(e_1, f_1) = 1
$$

즉, conjugate basis를 항상 찾을 수 있다.

$$
U = \text{Span}_{\mathbb{R}}\{e_1, f_1\}
$$

$$
U^\perp = \{ u \in V \mid \omega(e_1, u) = \omega(f_1, u) = 0 \}
$$

① $U \cap U^\perp = \{0\}$, $\quad V = U \oplus U^\perp$

② $\omega|_{U^\perp}$ defines symplectic pairing on $U^\perp$

지금 하고 있는 접근법은 Gram–Schmidt 직교화와 유사하다.

Phase space는 vector space의 generalization이라 할 수 있다.

**"Coordinates are just illusions."** 그저 표현 방법일 뿐.

## $\omega$의 행렬 표현

$\omega$를 matrix로 나타내자.

$$
\omega_{ij} := \omega(C_i, C_j)
$$

$C_i$와 $C_j$는 basis 중 하나.
Anti-symmetry에 의해해
$$
\omega_{ij} = -\omega_{ji}
$$

Non-degenerate 조건:

$$
\det \omega_{ij} \neq 0
$$

Basis 변환 행렬 $S$에 대해,

$$
S \omega S^T = S_{ij}\, \omega_{jk}\, [S^T]_{kl} = J_{il}
$$

> **질문:** 그런데 여기서 matrix $S$가 뭐지?

이때, $J$는 우리가 이미 배운 symplectic matrix다.

$$
J = \begin{pmatrix} 0 & -\mathbb{I}_n \\ \mathbb{I}_n & 0 \end{pmatrix}
$$

## $\tilde{\omega}$ map: 벡터장과 1-form의 대응

우리가 지금 배우고 있는 것은 모든 역학을 basis independent하게 나타내는 방법이다.

$$
\tilde{\omega} : \text{Vect}(\mathcal{U}) \longrightarrow \Omega^1(\mathcal{U})
$$
$$
v \longmapsto \omega(v, -) = i_v \omega
$$

$\tilde{\omega}$는 interior product이며, 동시에 원래는 두 개의 벡터를 받아야 할 $\omega$에 1개의 벡터만을 집어넣는 연산이다. 
2-form에 1개의 벡터를 넣으면 1-form이 되므로, $\tilde{\omega}$는 벡터를 1-form으로 만드는 연산.

Null space is kernel of $\tilde{\omega}$.

> **질문:** 그런데 kernel이 뭐지? $\mathcal{N} = \ker \omega = \{u\}$

$\tilde{\omega}$를 이용해 Hamiltonian vector field를 정의할 수 있다.

### Hamiltonian vector field 정의

**Definition.** $\mathcal{H}$를 $\mathcal{U}$ 위의 scalar function이라 하자. Associated Hamiltonian vector field $V_\mathcal{H}$를 다음과 같이 정의한다:

$$
V_\mathcal{H} = \tilde{\omega}^{-1}(d\mathcal{H})
$$

즉,

$$
\omega(V_\mathcal{H}, -) = i_{V_\mathcal{H}}\omega = d\mathcal{H}
$$

또 다른 말로 하면, $\forall\, V \in \text{Vect}(\mathcal{U})$에 대해,

$$
\omega(V_\mathcal{H}, V) = (d\mathcal{H})V
$$

### $\tilde{\omega}^{-1}$의 예시
$\omega = \sum_{\alpha=1}^{n} dp^\alpha \wedge dq^\alpha$를 사용하는 경우, 

$$
\tilde{\omega}^{-1} : \begin{cases} -dp^i \longmapsto \partial_{q_i} \\ dq^i \longmapsto \partial_{p_i} \end{cases}
$$

**Validation:**

$$
\omega(\partial_{q_i}, -) = \sum_\alpha dp^\alpha \wedge dq^\alpha (\partial_{q_i}, -) = -\sum_\alpha dq^\alpha \wedge dp^\alpha (\partial_{q_i}, -) = -dp^i
$$

$$
\omega(\partial_{p_i}, -) = \sum_\alpha dp^\alpha \wedge dq^\alpha (\partial_{p_i}, -) = dq^i
$$

### Hamiltonian vector field의 유도

$$
d\mathcal{H} = \sum_i (\partial_{p_i}\mathcal{H})\, dp^i + (\partial_{q_i}\mathcal{H})\, dq^i
$$

임을 $\tilde{\omega}^{-1}$에 적용하면,

$$
\tilde{\omega}^{-1}(d\mathcal{H}) = \sum_i (\partial_{p_i}\mathcal{H})\,\tilde{\omega}^{-1}(dp^i) + (\partial_{q_i}\mathcal{H})\,\tilde{\omega}^{-1}(dq^i)
$$

$$
= \sum_i (\partial_{p_i}\mathcal{H})(-\partial_{q_i}) + (\partial_{q_i}\mathcal{H})(\partial_{p_i})
$$

$$
= V_\mathcal{H}
$$

즉,

$$
V_\mathcal{H} = \sum_i \frac{\partial \mathcal{H}}{\partial q_i}\frac{\partial}{\partial p_i} - \frac{\partial \mathcal{H}}{\partial p_i}\frac{\partial}{\partial q_i} = \{\mathcal{H}, -\}
$$

으로, Poisson 괄호와 결부된다!

> **질문:** 이 논리로 Hamilton 방정식을 나타내면 무슨 식인가?

> [!note] Glia의 보충 (2026-05-25)
> **Symplectic geometry의 언어로 본 Hamilton 방정식**
> 
> Hamilton 방정식의 coordinate-free 표현은 다음 한 줄이다:
> 
> $$
> i_{V_\mathcal{H}}\,\omega = d\mathcal{H}
> $$
> 
> 이것이 익숙한 $\dot{q}^i, \dot{p}_i$ 방정식으로 환원되는 과정을 보자. 임의의 observable $f$의 시간 발전은 Poisson 괄호로(다음 강의에서 배울 내용)
> 
> $$
> \dot{f} = \{f, \mathcal{H}\} = i_{V_f}\, i_{V_\mathcal{H}}\, \omega
> $$
> 
> 이다. $\omega = dp^i \wedge dq^i$ convention 하에서 Poisson 괄호는
> 
> $$
> \{f, \mathcal{H}\} = \frac{\partial f}{\partial q_i}\frac{\partial \mathcal{H}}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial \mathcal{H}}{\partial q_i}
> $$
> 
> 이제 $f = q^j$를 넣으면 $\partial q^j / \partial q_i = \delta^j_i$, $\partial q^j / \partial p_i = 0$이므로,
> 
> $$
> \dot{q}^j = \{q^j, \mathcal{H}\} = \frac{\partial \mathcal{H}}{\partial p_j}
> $$
> 
> $f = p_j$를 넣으면 $\partial p_j / \partial q_i = 0$, $\partial p_j / \partial p_i = \delta_{ji}$이므로,
> 
> $$
> \dot{p}_j = \{p_j, \mathcal{H}\} = -\frac{\partial \mathcal{H}}{\partial q_j}
> $$
> 
> 이것이 Hamilton 방정식이다. 즉 $i_{V_\mathcal{H}}\omega = d\mathcal{H}$라는 하나의 기하학적 등식이, Poisson 괄호 $\{f, \mathcal{H}\} = i_{V_f} i_{V_\mathcal{H}} \omega$를 통해 $2n$개의 Hamilton 방정식으로 분해된다.
> 
> 여기서 주의할 점: $V_\mathcal{H} = \{\mathcal{H}, -\}$이지 $\{-, \mathcal{H}\}$가 아니다. 시간 발전은 $\dot{f} = \{f, \mathcal{H}\} = -\{\mathcal{H}, f\}$이므로, $V_\mathcal{H}$ 자체가 직접 flow의 tangent vector $d\gamma/dt$와 같다고 쓰면 부호가 뒤집힌다. Hamilton 방정식은 $\dot{f} = \{f, \mathcal{H}\}$로부터 나오는 것이지, $\frac{d\gamma}{dt} = V_\mathcal{H}$로 성분 비교하면 안 된다.

일반화 하면, 모든 scalar function $f$ on $\mathcal{U}$에 대해,

$$
\{f, -\} = V_f = \tilde{\omega}^{-1}(df)
$$

> [!note] Glia의 보충 (2026-05-25)
> **임의의 $f$로부터의 Hamiltonian vector field의 물리적 의미**
> 
> $\mathcal{H}$의 Hamiltonian vector field가 시간 발전을 생성하는 것처럼, 임의의 scalar function $f$의 $V_f$는 **$f$를 보존하는 canonical transformation**의 무한소 생성자이다. $f$가 보존량, 즉 $\{f, \mathcal{H}\} = 0$이면, $V_f$가 생성하는 flow는 $\mathcal{H}$를 불변으로 두는 대칭 변환이다. 이것이 Noether 정리의 Hamiltonian 버전이다.
> 
> **예시 1: $f = p_i$ (운동량)**
> 
> $$
> df = dp_i
> $$
> 
> $\tilde{\omega}^{-1}(dp^i) = -\partial_{q_i}$이므로,
> 
> $$
> V_{p_i} = \tilde{\omega}^{-1}(dp_i) = -\partial_{q_i}
> $$
> 
> 이 벡터장이 생성하는 flow는 $q^i$ 방향의 공간 병진 이동이다. $\{p_i, \mathcal{H}\} = 0$이면 그 방향의 병진 대칭이 있고, $p_i$는 보존된다.
> 
> **예시 2: $f = L_z = xp_y - yp_x$ (각운동량, 2차원에서 $q^1 = x,\, q^2 = y$)**
> 
> $$
> dL_z = p_y\, dx - p_x\, dy + x\, dp_y - y\, dp_x
> $$
> 
> $\tilde{\omega}^{-1}$를 적용하면,
> 
> $$
> V_{L_z} = p_y\, \tilde{\omega}^{-1}(dx) + (-p_x)\, \tilde{\omega}^{-1}(dy) + x\, \tilde{\omega}^{-1}(dp_y) + (-y)\, \tilde{\omega}^{-1}(dp_x)
> $$
> 
> $\tilde{\omega}^{-1}(dq^i) = \partial_{p_i}$와 $\tilde{\omega}^{-1}(dp^i) = -\partial_{q_i}$를 대입하면,
> 
> $$
> V_{L_z} = p_y\, \partial_{p_x} - p_x\, \partial_{p_y} - y\,(-\partial_x) + x\,(-\partial_y)
> $$
> 
> $$
> = -y\, \partial_x + x\, \partial_y + p_y\, \partial_{p_x} - p_x\, \partial_{p_y}
> $$
> 
> 이것은 $(x, y)$ 평면에서의 회전($x \to x - y\epsilon,\; y \to y + x\epsilon$)과 운동량 공간에서의 대응 회전($p_x \to p_x + p_y\epsilon,\; p_y \to p_y - p_x\epsilon$)을 동시에 생성하는 벡터장이다. 정확히 $z$축 둘레 회전의 무한소 생성자.
> 
> 정리하면, symplectic geometry에서 $f \mapsto V_f$라는 대응은 **"보존량 $\leftrightarrow$ 대칭 변환"의 사전**이다. $\mathcal{H} \mapsto V_\mathcal{H}$는 그 특수한 경우로, 에너지라는 보존량이 시간 병진 대칭에 대응하는 것이다.

## Symplectic form의 불변성

The symplectic two form $\omega$ is invariant under the flow $\varphi_t$ generated by a Hamiltonian vector field.

$$
\varphi_t^* \omega = \omega
$$

$\omega$를 pull back 해도 여전 하다.

$$
\Longleftrightarrow
$$

$$
\partial_t (\varphi_t^* \omega) = 0 = \mathcal{L}_{V_\mathcal{H}} \omega
$$

여기에 magic formula (Cartan formula)를 쓰면,

$$
(d\, i_{V_\mathcal{H}} + i_{V_\mathcal{H}}\, d)\omega = 0
$$

$$
d\, i_{V_\mathcal{H}}\omega = d(d\mathcal{H}) = 0
$$

이렇게 증명 끝.

## Liouville theorem과의 연결

**Liouville theorem** $\to$ phase space is **incompressible**.

$\frac{\omega^n}{n!}$은 volume form이다. 왜 인지 모르겠지만,

$$
\varphi_t^* \left(\frac{\omega^n}{n!}\right) = \frac{\omega^n}{n!} \quad \Longleftrightarrow \quad \mathcal{L}_{V_\mathcal{H}} \left(\frac{\omega^n}{n!}\right) = 0
$$

> 이 부분은 보충 설명이 필요.

## Lagrangian subspace → 다다음 강의에서 더 자세히 다룰 것이다. 

어떤 space에서 Lagrangian이 정의되나? $\to$ Lagrangian sub-space에서.

Lagrangian sub-space는 $p$가 $q$에 의한 함수로 고정된 space이다.

**Definition.** $(V, \omega)$에서 $L \subset V$가 **isotropic**이라 함은,

$$
\omega|_{L \times L} = 0, \quad \text{i.e.} \quad \omega(u, v) = 0 \quad \forall\, u, v \in L
$$

$$
\dim L \leq \frac{1}{2} \dim V
$$

운동량은 고정(?)되고 $q$만 남았기 때문.

> **질문:** 그럼 속도의 차원은? 위치 속도 둘 다 phase space에 있어야 하는 것 아닌가?

$\dim L < \frac{1}{2} \dim V$인 경우도 있음에 주목. 아마 자유도 때문?

사실 $\omega = \sum dp_i \wedge dq_i$ 이다. 그런데 수학자들은 정확한 정체를 밝히기 보단 기능만을 말해주는 걸 좋아한다.

### $\tilde{\omega}_L$의 injective 성질

$$
\tilde{\omega} : V \longrightarrow V^*
$$

$$
\tilde{\omega}_L : L \longrightarrow \left(\frac{V}{L}\right)^*
$$

$$
u \longmapsto \omega(u, -)
$$

> **질문:** 왜 공역이 $(V/L)^*$인 집합을 나눈다는 느낌이 되는 걸까? 이거 잘 모르겠는데.

$\tilde{\omega}_L$ is injective.

If $u \in L$ and $\tilde{\omega}_L(u) = 0$이면,

$$
\omega(u, v) = 0
$$

$$
\dim L \leq \dim\left(\frac{V}{L}\right) = \dim V - \dim L
$$

# 궁금한 내용

1. $d\omega = 0$ 조건이 Poisson 괄호의 Jacobi identity와 연결되는가?
2. Symplectic potential $\lambda = \sum p^\alpha\, dq_\alpha$는 곧 action인가?
3. Basis 변환에서 matrix $S$의 정확한 의미는?
4. $\ker\omega$의 정의와 의미?
5. Hamiltonian vector field로부터 Hamilton 방정식은 어떻게 나타나는가?
6. $\frac{\omega^n}{n!}$이 volume form인 이유는?
7. $\tilde{\omega}_L$의 공역이 $(V/L)^*$인 이유는?

# AI의 보충 설명


# 연관 학습 노트


# References


# 다음 강의

[[AM lecture note - Poisson bracket and Darboux theorem]]
# 필기 원본

![[AM_12thweek_1.pdf]]