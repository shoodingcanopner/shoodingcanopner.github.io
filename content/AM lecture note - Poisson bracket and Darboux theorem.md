---
title: AM lecture note - Poisson bracket and Darboux theorem
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

[[AM lecture note - Symplectic form]]

# 오늘의 핵심



# 필기 내용

## Symplectic manifold와 Hamiltonian vector field

Symplectic manifold $\to$ closed.

$$
\omega = \sum_{i=1}^{n} dp^i \wedge dq^i \quad \text{(by Newtonian dynamics)}
$$

Hamiltonian vector field와 물리의 master equation:

$$
i_{V_\mathcal{H}} \omega = d\mathcal{H} \quad \Longleftrightarrow \quad \tilde{\omega}^{-1}(d\mathcal{H}) = V_\mathcal{H}
$$

$i_{V_\mathcal{H}} \omega = d\mathcal{H}$의 의미: 아마 이 방정식으로 $V_\mathcal{H}$가 결정되는 것이 해밀턴 방정식과 동치일 것이다.

지난 시간 노트에서 정리했듯이, $\omega = \sum_{\alpha=1}^{n} dp^\alpha \wedge dq^\alpha$를 사용했을 때 $V_\mathcal{H}$는
$$
V_\mathcal{H} = \sum_i \frac{\partial \mathcal{H}}{\partial q_i}\frac{\partial}{\partial p_i} - \frac{\partial \mathcal{H}}{\partial p_i}\frac{\partial}{\partial q_i} = \{\mathcal{H}, -\}
$$

> **질문:** $V_\mathcal{H}$의 integral curve인 $\varphi_t$가 운동 방정식의 해인가?


> [!note] Glia의 보충 (2026-05-25)
> **$V_\mathcal{H}$의 integral curve와 운동 방정식의 관계 — Convention 주의**
> 
> $\omega = dp^i \wedge dq^i$ convention (Si Li 교재, 이 강의의 convention)에서,
> 
> $$
> V_\mathcal{H} = \frac{\partial \mathcal{H}}{\partial q_i}\frac{\partial}{\partial p_i} - \frac{\partial \mathcal{H}}{\partial p_i}\frac{\partial}{\partial q_i}
> $$
> 
> 이므로, $V_\mathcal{H}$의 integral curve $\gamma(t)$, 즉 $\frac{d\gamma}{dt} = V_\mathcal{H}(\gamma(t))$를 성분별로 쓰면:
> 
> $$
> \dot{q}^i = -\frac{\partial \mathcal{H}}{\partial p_i}, \qquad \dot{p}_i = \frac{\partial \mathcal{H}}{\partial q_i}
> $$
> 
> 이것은 표준 Hamilton 방정식과 **부호가 반대**이다!
> 
> 표준 Hamilton 방정식 $\dot{q}^i = \partial\mathcal{H}/\partial p_i$, $\dot{p}_i = -\partial\mathcal{H}/\partial q_i$는 **Poisson 괄호를 통해** 나온다:
> 
> $$
> \dot{f} = \{f, \mathcal{H}\} = -V_\mathcal{H}(f)
> $$
> 
> ($\because \{f, \mathcal{H}\} = V_f(\mathcal{H}) = -\{\mathcal{H}, f\} = -V_\mathcal{H}(f)$)
> 
> 여기에 $f = q^i$를 넣으면: $\dot{q}^i = -(-\partial\mathcal{H}/\partial p_i) = \partial\mathcal{H}/\partial p_i$. 올바른 부호가 나온다.
> 
> 교재 (Si Li, Prop 3.4.1)에서는(다음 강의 노트에서 다룰 내용용) extended phase space $\mathcal{U} \times \mathbb{R}$에서
> 
> $$
> X_\mathcal{H} = \frac{\partial}{\partial t} - V_\mathcal{H}
> $$
> 
> 를 정의하고, 이 $X_\mathcal{H}$의 integral curve가 Hamilton 방정식의 해임을 보인다. 마이너스 부호가 핵심이다.
> 
> **요약:** $\omega = dp \wedge dq$ convention에서 "$V_\mathcal{H}$의 integral curve = Hamilton 방정식의 해"는 틀린 서술이다. 정확히는 $-V_\mathcal{H}$의 flow, 또는 equivalently $\dot{f} = \{f, \mathcal{H}\}$를 통해 Hamilton 방정식이 나온다.
> 
> (만약 $\omega = dq^i \wedge dp^i$ convention을 사용하면 $\tilde{\omega}^{-1}$의 부호가 뒤집혀서 $V_\mathcal{H}$의 integral curve가 직접 Hamilton 방정식이 된다. Convention 선택의 문제.)

## Symplectic form의 Hamiltonian flow 불변성

Symplectic form은 Hamiltonian vector field에 의한 evolution에 invariant하다.

$$
\varphi_t^* \omega = \omega \quad \Longleftrightarrow \quad \mathcal{L}_{V_\mathcal{H}} \omega = 0
$$
→ 이게 아마 canonical transform이 푸아송 괄호의 성질을 유지한다는 성질과 연관될 것이다. 
정말 그런가? 예시를 들어 설명해보자.

> [!note] Glia의 보충 (2026-05-25)
> **Canonical transformation과 symplectic form 보존의 연결 — 예시: $P = q^{-1}$, $Q = pq^2$**
>
> 전반부에서 배운 canonical transformation의 조건 $MJM^T = J$는 symplectic geometry의 언어로 정확히 **$\varphi^*\omega = \omega$** (symplectomorphism)이다.
>
> **예시 변환:** $\varphi : (q, p) \mapsto (Q, P) = (pq^2,\; q^{-1})$
>
> **① $\varphi^*\omega = \omega$의 직접 확인**
>
> $\omega = dp \wedge dq$ 하에서:
>
> $$
> dP = -q^{-2}\,dq, \quad dQ = q^2\,dp + 2pq\,dq
> $$
>
> $$
> dP \wedge dQ = (-q^{-2}\,dq) \wedge (q^2\,dp + 2pq\,dq) = dp \wedge dq = \omega
> $$
>
> 행렬 $M$은 $\varphi$의 tangent map이고, $J$는 $\omega$의 행렬 표현이며, $MJM^T = J$는 이것의 행렬적 번역이다.
>
> **② $\omega$ 보존 $\to$ Poisson 괄호 보존**
>
> $$
> \{Q, P\}_{q,p} = (2pq)(0) - (q^2)(-q^{-2}) = 1 = \{q, p\}
> $$
>
> **③ Hamiltonian vector field 구조의 보존**
>
> $\varphi^*\omega = \omega$이면 $\varphi_*(V_\mathcal{H}) = V_K$ ($K = \mathcal{H} \circ \varphi^{-1}$). Hamilton 방정식의 형태가 새 좌표에서도 유지된다.
>
> **④ 두 언어의 대응**
>
> | 전반부 (해석역학) | 후반부 (심플렉틱 기하학) |
> |---|---|
> | $MJM^T = J$ | $\varphi^*\omega = \omega$ |
> | Poisson 괄호 보존 | $\omega^{ij}$ 보존 |
> | Hamilton 방정식의 형태 보존 | $\varphi_*(V_\mathcal{H}) = V_K$ |
> | 시간 발전이 canonical | $\varphi_t^*\omega = \omega$, $\mathcal{L}_{V_\mathcal{H}}\omega = 0$ |
>
> 본문의 $\varphi_t^*\omega = \omega$는 시간 발전이라는 특수한 canonical transformation이고, 위 예시는 일반적인 canonical transformation이다. 둘 다 symplectomorphism이라는 같은 구조의 서로 다른 예이다.

## Poisson bracket

$\mathcal{U}$의 두 scalar function $f, g \in C^\infty(\mathcal{U})$의 Hamilton vector field가 $V_f$와 $V_g$일 때, 푸아송 괄호는 이렇게 정의된다.

$$
\{-,\, -\} : C^\infty(\mathcal{U}) \times C^\infty(\mathcal{U}) \longrightarrow C^\infty(\mathcal{U})
$$

즉, $\mathcal{U}$에서 정의된 2개의 scalar function을 받아 1개의 scalar function을 반환한다.

실제 연산은 이렇다.

$$
\{f, g\} = i_{V_f} i_{V_g} \omega = i_{\tilde{\omega}^{-1}(df)}\, i_{\tilde{\omega}^{-1}(dg)}\, \omega
$$

와! 어지러워!

### Example: Einstein summation convention 사용

$$
\omega = dp^i \wedge dq^i
$$

$$
V_f = V_f^{p_i} \partial_{p_i} + V_f^{q_i} \partial_{q_i}, \qquad V_g = V_g^{p_i} \partial_{p_i} + V_g^{q_i} \partial_{q_i}
$$

$$
df = (\partial_{p_i} f)\, dp^i + (\partial_{q_i} f)\, dq^i, \qquad dg = (\partial_{p_i} g)\, dp^i + (\partial_{q_i} g)\, dq^i
$$

$V$들의 계수 결정: 다음 관계를 이용.

$$
\tilde{\omega}^{-1}(dp^i) = -\partial_{q_i}, \qquad \tilde{\omega}^{-1}(dq^i) = \partial_{p_i}
$$

$$
\tilde{\omega}^{-1}(df) = (\partial_{p_i} f)\,\tilde{\omega}^{-1}(dp^i) + (\partial_{q_i} f)\,\tilde{\omega}^{-1}(dq^i) = -(\partial_{p_i} f)\,\partial_{q_i} + (\partial_{q_i} f)\,\partial_{p_i} = V_f
$$

따라서,

$$
V_f^{q_i} = -\partial_{p_i} f, \quad V_f^{p_i} = \partial_{q_i} f, \quad V_g^{q_i} = -\partial_{p_i} g, \quad V_g^{p_i} = \partial_{q_i} g
$$

$$
i_{V_f} i_{V_g} \omega = i_{V_f}(V_g^{p_i}\, dq^i - V_g^{q_i}\, dp^i) = V_f^{p_i} V_g^{p_i} - V_f^{p_i} V_g^{q_i}
$$

이를 정리하면,

$$
\{f, g\} = (\partial_{q_i} f)(\partial_{p_i} g) - (\partial_{q_i} g)(\partial_{p_i} f)
$$

이렇게 우리가 원래 알던 푸아송 괄호 식이 나온다. 그럼에도 미분기하 방식의 정의가 유용한 이유는 좌표계에 의존하지 않고 구조를 나타낼 수 있기 때문이다.

## Hamiltonian vector field 정의에 따른 Poisson bracket

Hamiltonian vector field의 정의에 따라,

$$
\omega(V_g, -) = i_{V_g} \omega = dg
$$

이므로,

$$
i_{V_f} i_{V_g} \omega = i_{V_f}(dg) = V_f(g)
$$

의 관계가 나온다.

$$
\therefore \{f, g\} = V_f(g) = \omega^{-1}(df)(g)
$$

지난 강의 노트에서 $V_f = \{f, -\}$를 유도한 것과 직결된다.

## 더 general한 symplectic 2-form에 대해

$dx^i$ ($i$는 $2N$까지)가 1-form basis일 때,

$$
\omega = \frac{1}{2} \sum_{i,j}^{2N} \omega_{ij}\, dx^i \wedge dx^j
$$

$$
\tilde{\omega} : \partial_k \longmapsto \sum_i^{2N} \omega_{ki}\, dx^i
$$

### 증명

$$
\tilde{\omega}(\partial_k) = \omega(\partial_k, -)
$$

$$
= \frac{1}{2} \sum_{i,j}^{2N} \omega_{ij}\left(\delta_{ik}\, dx^j - \delta_{jk}\, dx^i\right)
$$

$$
= \frac{1}{2} \sum_{i,j}^{2N} \left(\omega_{kj}\, dx^j - \omega_{ik}\, dx^i\right)
$$

$-\omega_{ik} = \omega_{ki}$ (anti-symmetry)를 이용하면,

$$
= \frac{1}{2} \sum_j \omega_{kj}\, dx^j + \frac{1}{2} \sum_i \omega_{ki}\, dx^i = \sum_i^{2N} \omega_{ki}\, dx^i
$$

### $\tilde{\omega}^{-1}$의 일반적 표현

$$
\tilde{\omega}^{-1} : dx^k \longmapsto \sum_i^{2N} \omega^{ki}\, \partial_i
$$

이때, $\omega^{ki}$는 $\omega$의 역행렬, 즉 $\sum_j \omega^{ki} \omega_{ij} = \delta^k_j$.

### 증명

$\tilde{\omega}(\tilde{\omega}^{-1}(dx^k)) = dx^k$가 됨을 보여라.

$$
\tilde{\omega}\left(\sum_i^{2N} \omega^{ki}\, \partial_i\right) = \sum_i^{2N} \omega^{ki}\, \tilde{\omega}(\partial_i) = \sum_{i,j}^{2N} \omega^{ki}\, \omega_{ij}\, dx^j = \sum_j \delta^k_j\, dx^j = dx^k
$$

### Hamiltonian vector field의 명시적 표현

Einstein summation convention을 사용할 때,

$$
df = (\partial_i f)\, dx^i
$$

$$
V_f = \tilde{\omega}^{-1}(df) = (\partial_i f)\,\tilde{\omega}^{-1}(dx^i) = \omega^{ij}\,(\partial_i f)\,\partial_j
$$

### Poisson bracket의 일반적 표현

$$
\{f, g\} = V_f(g) = \omega^{ij}\,(\partial_i f)(\partial_j g)
$$

## Poisson bracket의 성질

Poisson bracket은 다음 성질을 만족한다.

### ① Anti-symmetry

$$
\{f, g\} = -\{g, f\}
$$

이 성질은 $\omega_{ij}$의 anti-symmetry를 물려받은 것이다.

### ② Leibniz rule (Associativity)

$$
\{f, gh\} = \{f, g\}h + g\{f, h\}
$$

**증명:**

$$
\{f, gh\} = V_f(gh) = \omega^{ij}\,(\partial_i f)(\partial_j(gh))
$$

$$
= \omega^{ij}\,(\partial_i f)\{g\,\partial_j h + (\partial_j g)h\}
$$

$$
= g\, V_f(h) + \{V_f(g)\}\, h = g\{f, h\} + \{f, g\}\,h
$$

### ③ Jacobi identity (Consistency relation)

$$
\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} = 0
$$

**증명:**

$$
\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\}
$$

$$
= V_f(V_g(h)) + V_g(V_h(f)) + V_h(V_f(g))
$$

$$
= \omega^{ij}(\partial_i f)\left\{\partial_j\, \omega^{kl}\,(\partial_k g)(\partial_l h)\right\} + \cdots + \cdots
$$

$$
= (\partial_i f)(\partial_k g)(\partial_l h)\,\omega^{ij}\,\partial_j \omega^{kl} + \cdots + \cdots
$$

$$
= A(f,g,h) + B(f,g,h)
$$

이때,

$$
A(f,g,h) = (\partial_i f)(\partial_k g)(\partial_l h)\,\omega^{ij}\,\partial_j \omega^{kl} + (\partial_i g)(\partial_k h)(\partial_l f)\,\omega^{ij}\,\partial_j \omega^{kl} + (\partial_i h)(\partial_k f)(\partial_l g)\,\omega^{ij}\,\partial_j \omega^{kl}
$$

$$
B(f,g,h) = \omega^{ij}\,\omega^{kl}\,\partial_i f\left\{\partial_j(\partial_k g)(\partial_l h)\right\} + \omega^{ij}\,\omega^{kl}\,\partial_i g\left\{\partial_j(\partial_k h)(\partial_l f)\right\} + \omega^{ij}\,\omega^{kl}\,\partial_i h\left\{\partial_j(\partial_k f)(\partial_l g)\right\}
$$

$A(f,g,h)$와 $B(f,g,h)$의 계산 결과를 따로 비교해 보자.

#### $A(f,g,h) = 0$의 증명

먼저 $A(f,g,h)$에 대해,

$$
(\partial_i f)(\partial_k g)(\partial_l h)\,\omega^{ij}\,\partial_j \omega^{kl} + \underbrace{(\partial_i g)(\partial_k h)(\partial_l f)}_{(l,i,k) \to (i,k,l)}\,\omega^{ij}\,\partial_j \omega^{kl} + \underbrace{(\partial_i h)(\partial_k f)(\partial_l g)}_{(k,l,i) \to (i,k,l)}\,\omega^{ij}\,\partial_j \omega^{kl}
$$

$$
= (\partial_i f)(\partial_k g)(\partial_l h)\left\{\omega^{ij}\,\partial_j \omega^{kl} + \omega^{kj}\,\partial_j \omega^{li} + \omega^{lj}\,\partial_j \omega^{ik}\right\}
$$

이때, $d\omega = 0$에 의해 $\partial_k \omega_{li} + \partial_i \omega_{kl} + \partial_l \omega_{ik} = 0$인 걸 이용한다.

역행렬 관계에 의해, $\omega^{ir}\,\omega_{rk} = \delta^i_k$.

이를 $\partial_k$로 미분:

$$
(\partial_j \omega^{ir})\,\omega_{rk} + \omega^{ir}\,\partial_j \omega_{rk} = 0
$$

원성분자의 미분만을 남기기 위해 $\omega^{kl}$을 곱한다:

$$
(\partial_j \omega^{ir})\,\omega_{rk}\,\omega^{kl} + \omega^{ir}\,\omega^{kl}\,\partial_j \omega_{rk} = 0
$$

$$
\partial_j \omega^{il} + \omega^{ir}\,\omega^{kl}\,\partial_j \omega_{rk} = 0
$$

결국,

$$
\partial_j \omega^{li} = \omega^{ir}\,\omega^{kl}\,\partial_j \omega_{rk}
$$

우변에서 $r$과 $k$는 summation되는 dummy index임을 알 수 있다. $r \to a$, $k \to b$로 표기를 바꾸면,

$$
\partial_j \omega^{li} = -\omega^{ai}\,\omega^{bl}\,\partial_j \omega_{ab}
$$

이것을 $\omega^{ij}\,\partial_j \omega^{kl} + \omega^{kj}\,\partial_j \omega^{li} + \omega^{lj}\,\partial_j \omega^{ik}$에 대입하면,

$$
-\omega^{ij}\,\omega^{al}\,\omega^{bk}\,\partial_j \omega_{ab} - \omega^{kj}\,\omega^{ai}\,\omega^{bl}\,\partial_j \omega_{ab} - \omega^{lj}\,\omega^{ak}\,\omega^{bi}\,\partial_j \omega_{ab}
$$

미분방 앞에 붙은 계수를 똑같이 맞추고 싶다. dummy index는 $j, a, b$이므로,

두 번째 항에 index 변환 $(a, b, j) \to (j, a, b)$, 세 번째 항에 index 변환 $(b, j, a) \to (j, a, b)$:

$$
= -\left(\omega^{ij}\,\omega^{la}\,\omega^{kb}\right)\left\{\partial_j \omega_{ab} + \partial_b \omega_{ja} + \partial_a \omega_{bj}\right\}
$$

$d\omega = 0$에 의해, $\{\}$ 내부는 0이다.

따라서 $A(f,g,h) = 0$.

#### $B(f,g,h) = 0$의 증명

$$
B = \omega^{ij}\,\omega^{kl}\,\partial_i f\left\{\partial_j(\partial_k g)(\partial_l h)\right\} + \cdots + \cdots
$$

$$
= \omega^{ij}\,\omega^{kl}\,(\partial_i f)(\partial_k g)(\partial_j \partial_l h) + \omega^{ij}\,\omega^{kl}\,(\partial_i f)(\partial_l h)(\partial_j \partial_k g)
$$

$$
+ \omega^{ij}\,\omega^{kl}\,(\partial_i g)(\partial_k h)(\partial_j \partial_l f) + \omega^{ij}\,\omega^{kl}\,(\partial_i g)(\partial_l f)(\partial_j \partial_k h)
$$

$$
+ \omega^{ij}\,\omega^{kl}\,(\partial_i h)(\partial_k f)(\partial_j \partial_l g) + \omega^{ij}\,\omega^{kl}\,(\partial_i h)(\partial_l g)(\partial_j \partial_k f)
$$

Index 치환 $(i,k,l) \to (k,l,i)$를 세 번째·네 번째 항에, $(i,k,l) \to (l,i,k)$를 다섯 번째·여섯 번째 항에 적용하면,

$$
= (\partial_i f)(\partial_k g)(\partial_j \partial_l h)\left(\omega^{ij}\,\omega^{kl} + \omega^{kj}\,\omega^{li}\right)
$$

$$
+ (\partial_k g)(\partial_l h)(\partial_j \partial_i f)\left(\omega^{kj}\,\omega^{li} + \omega^{kj}\,\omega^{ik}\right)
$$

$$
+ (\partial_l h)(\partial_i f)(\partial_j \partial_k g)\left(\omega^{lj}\,\omega^{ik} + \omega^{ij}\,\omega^{kl}\right)
$$

Summation을 하면 $\omega$의 anti-symmetry에 의해 0이 된다.

$$
(\partial_i f)(\partial_k g)(\partial_j \partial_l h)\left(\omega^{ij}\,\omega^{kl} + \omega^{kj}\,\omega^{li}\right) = 0
$$

임을 대표로 확인해 보면, $(j, l)$로 index를 뒤바꾸어도 식은 똑같은 값을 가져야 한다.

$$
(\partial_i f)(\partial_k g)(\partial_l \partial_j h)\left(\omega^{il}\,\omega^{kj} + \omega^{kl}\,\omega^{ji}\right) = (\partial_i f)(\partial_k g)(\partial_j \partial_l h)\left(-\omega^{kl}\,\omega^{ij} - \omega^{li}\,\omega^{kj}\right)
$$

결국,

$$
(\partial_i f)(\partial_k g)(\partial_j \partial_l h)\left(\omega^{ij}\,\omega^{kl} + \omega^{kj}\,\omega^{li}\right) = -(\partial_i f)(\partial_k g)(\partial_j \partial_l h)\left(\omega^{ij}\,\omega^{kl} + \omega^{kj}\,\omega^{li}\right)
$$

이므로 0이다.

이렇게 Jacobi identity 증명 끝.

## Poisson bracket과 commutator의 연결

$$
[V_f, V_g] = V_{\{f,g\}}
$$

Poisson bracket과 commutator가 연결되는 순간.

**증명:**

$$
i_{[V_f, V_g]}\,\omega = [\mathcal{L}_{V_f},\, i_{V_g}]\,\omega = \mathcal{L}_{V_f}\, i_{V_g}\,\omega = \mathcal{L}_{V_f}\,dg = d\,i_{V_f}\,dg = d\{f, g\}
$$

증명 과정이 이해 안 되긴 하지만 일단 받아들이고 넘어가자.

## Floer Homology

이게 Floer Homology와 관련 있다고 하는데 무슨 의미인지 모르겠다.

## Darboux theorem

모든 phase space는 locally equivalent하다. $\to$ 따라서 phase space는 topology로만 class를 나누는 게 가능하다.

$\mathbb{R}^{2N}$ space에 있는 그 어떤 symplectic form도 local하게는 standard symplectic form

$$
\omega = \sum_i^N dp^i \wedge dq^i
$$

꼴로 coordinate transform 할 수 있다. 아마도 이 개념이 canonical transform과 연관될 것이다.

### Theorem

$0$을 포함하는 $\mathbb{R}^{2n}$ space에서 $\omega$가 symplectic form이라 두자. $0$의 이웃 $\mathcal{U}$에서 이러한 성질을 만족하는 coordinate function $\{q_1, \cdots, q_n, p_1, \cdots, p_n\}$이 있다.

$$
\omega = \sum_{i=1}^{n} dp_i \wedge dq_i \qquad \text{on } \mathcal{U}
$$

## Time-dependent vector field의 flow

증명하기 전에, flow on the time-dependent vector field에 대해 알아 보자.

$V_t$가 time-dependent vector field일 때, 이것의 flow $\varphi_t$는 다음 식을 만족:

$$
\frac{\partial}{\partial t}\,\varphi_t = V_t(\varphi_t)
$$

> **질문:** 여기서 말하는 time은 어떻게 정의되는 거지?

### Proposition

$\alpha$가 $\mathcal{U}$에서 정의된 form일 때, (즉, $\alpha \in \Omega^\bullet$일 때)
다음 식이 만족된다.

$$
\frac{\partial}{\partial t}\left(\varphi_t^*\,\alpha\right) = \varphi_t^*\left(\mathcal{L}_{V_t}\,\alpha\right)
$$

Lie derivative의 정의가 $\mathcal{L}_V \alpha = \left.\frac{d}{dt}\right|_{t=0} \varphi_t^*(\alpha)$였던 걸 생각하면, 위 식의 의미는...

대체 뭐지?!

### 증명

교과서의 증명을 따라가자.

#### $\alpha = f$ (scalar function)일 때

$\varphi_t^*(f) = f(\varphi_t(x))$, 그리고 0-form $f$에 대해 $\mathcal{L}_V f = V(f)$임을 이용.

$$
\frac{\partial}{\partial t}\left(\varphi_t^* f\right)(x) = \frac{\partial}{\partial t}\left(f(\varphi_t(x))\right) = \frac{\partial \varphi_t^i(x)}{\partial t}\,\frac{\partial f}{\partial x^i}(\varphi_t(x)) = V_t^i(\varphi_t(x))\,\frac{\partial f}{\partial x^i}(\varphi_t(x))
$$

$$
= \mathcal{L}_{V_t} f(\varphi_t(x)) = \left(\varphi_t^*(\mathcal{L}_{V_t} f)\right)(x)
$$

#### $\alpha = df$일 때

$$
\frac{\partial}{\partial t}\left(\varphi_t^*\,df\right) = d\left(\frac{\partial}{\partial t}\,\varphi_t^* f\right) = d\left(\varphi_t^*\,\mathcal{L}_{V_t} f\right) = \varphi_t^*\left(d\,\mathcal{L}_{V_t} f\right) = \varphi_t^*\,\mathcal{L}_{V_t}(df)
$$

사실 이 증명 과정들이 별로 와 닿지는 않는다.

## Darboux theorem의 증명: Moser's trick

$\omega$의 일반형

$$
\omega = \frac{1}{2}\sum_{i,j}^{2N} \omega_{ij}(x)\,dx^i \wedge dx^j
$$

에 대해,

$$
\omega_0 = \frac{1}{2}\sum_{i,j}^{2N} \omega_{ij}(0)\,dx^i \wedge dx^j
$$

라 두자.

$d(\omega - \omega_0) = 0$이므로, Poincaré lemma에 의해 $\omega - \omega_0 = d\beta$를 만족하는 1-form $\beta$가 $0$의 이웃 영역에서 존재한다.

$$
\omega_t = \omega_0 + t\,d\beta
$$

라 두자.

> 이게 뭐가 trick이라는 거야? $\omega_t$가 $\omega_0$로 변환 될 수 있다는 걸 보이는 게 목표?

$\mathcal{U}$를 충분히 작게 잡으면, $\omega_t$는 $\mathcal{U}$ 위에서 임의의 $t \in [0,1]$에 대해 non-degenerate라고 가정할 수 있다.

$\mathcal{U}$ 위에서 time-dependent vector field $V_t$를 다음과 같이 정의한다:

$$
i_{V_t}\,\omega_t = -\beta
$$

$(\omega - \omega_0)|_{x=0} = 0$이므로, $\beta$도 $x = 0$에서 사라지고, 따라서 $V_t$도 $x = 0$에서 사라진다.

$\varphi_t$를 $V_t$의 flow라 하면, $\varphi_t(0) = 0$.

$0$의 더 작은 이웃 $\tilde{\mathcal{U}}$를 잡아, $\varphi_t : \tilde{\mathcal{U}} \longrightarrow \mathcal{U}$가 $t \in [0,1]$에서 정의되도록 할 수 있다.

$\varphi_t^*\,\omega_t$를 생각하면, 위의 Proposition에 의해:

$$
\frac{\partial}{\partial t}\left(\varphi_t^*\,\omega_t\right) = \varphi_t^*\left(\mathcal{L}_{V_t}\,\omega_t + \frac{\partial}{\partial t}\,\omega_t\right) = \varphi_t^*\left(d\,i_{V_t}\,\omega_t + d\beta\right) = \varphi_t^*\left(-d\beta + d\beta\right) = 0
$$

따라서,

$$
\varphi_t^*\,\omega_t = \omega_0 \qquad \text{for all } t \in [0,1]
$$

모든 $t$에서 $\omega_t$는 $\omega_0$로 변환 될 수 있다.

(증명의 나머지는 다음 강의에서 이어짐)

# 궁금한 내용

1. ~~$V_\mathcal{H}$의 integral curve인 $\varphi_t$가 운동 방정식의 해인가?~~ → $\omega = dp \wedge dq$ convention에서는 $V_\mathcal{H}$의 integral curve가 아니라 $-V_\mathcal{H}$의 flow가 Hamilton 방정식의 해. AI 보충 설명 참고.
2. $[V_f, V_g] = V_{\{f,g\}}$ 증명의 논리적 흐름이 잘 이해가 안 됨 (특히 $[\mathcal{L}_{V_f}, i_{V_g}]\omega = \mathcal{L}_{V_f} i_{V_g}\omega$ 부분)
3. Floer Homology가 여기서 어떤 관련이 있는가?
4. Time-dependent vector field에서 time은 어떻게 정의되는가?
5. Darboux theorem 증명에서 Moser's trick의 핵심 아이디어는 무엇인가?

# AI의 보충 설명

# 연관 학습 노트


# References

주요 교재: [[Chapter3_Interlude of Sympletic Geometry_[Si Li] Classical Mechanics and Geometry.pdf]]

# 다음 강의


# 필기 원본

![[AM_12thweek_2.pdf]]