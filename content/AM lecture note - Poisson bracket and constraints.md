---
title: AM lecture note - Poisson bracket and constraints
date: "2026-03-17"
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

[[AM lecture note - Hamiltonian mechanics]]

# 오늘의 핵심

- Poisson bracket의 네 가지 대수적 성질(antisymmetry, linearity, Leibniz rule, Jacobi identity)
- Poisson bracket을 이용한 시간 발전: $\frac{df}{dt} = \{f, H\} + \frac{\partial f}{\partial t}$, 보존량 조건
- 각운동량 $L_i$의 Poisson bracket: $\{L_i, L_j\} = \epsilon_{ijk}L_k$, Casimir invariant $L^2$
- Laplace–Runge–Lenz 벡터: 케플러 운동의 또 다른 보존량
- Gauge theory와 Dirac constraint formalism — 1차(게이지)/2차 constraint의 구분

# 필기 내용

## Poisson bracket 복습 및 성질

두 함수 $f(p, q)$와 $g(p, q)$에 대해 Poisson bracket은:

$$
\{f, g\} := \frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial g}{\partial q_i}\frac{\partial f}{\partial p_i}
$$

(Einstein summation convention을 따른다.)

> [!note] 왜 $p$와 $q$가 orthogonal?
> 나중에 다룰 예정이라고 함.

### 네 가지 성질
꼭 위의 표현식을 따를 필요도 없이, 아래의 네 가지 성질을 따르는 것을 푸아송 괄호로 취취급한다고 한다. 

① **Antisymmetry**

$$
\{f, g\} = -\{g, f\}
$$

② **Linearity** ($\alpha, \beta \in \mathbb{R}$)

$$
\{\alpha f + \beta g, h\} = \alpha\{f, h\} + \beta\{g, h\}
$$

③ **Leibniz rule**

$$
\{fg, h\} = f\{g, h\} + \{f, h\}g
$$
여기에 antisymmetry를 적용하면, 
$$
\{h, fg\} = f\{h, g\} + \{h, f\}g
$$
④ **Jacobi identity** (consistance condition)

$$
\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} = 0
$$

> [!note] Group과의 연관
> Group의 definition을 상기하면 — 연산의 closure, identity, inverse.
> 4번 규칙은 association rule에 더해 $f = e^{iG\epsilon}$ infinitesimal transform을 넣으면 증명 가능하다고 한다. 지금 당장은 무슨 말인지 모르겠다. 
> 이게 **심플렉틱 기하학(symplectic geometry)** 과도 연관된다 한다.

### 해밀토니안 역학에서 Poisson bracket의 특성

$$
\{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0, \quad \{q_i, p_j\} = \delta^i_j
$$

---

## 시간 발전과 보존량

임의의 함수 $f(q, p, t)$의 시간 전미분:

$$
\frac{df}{dt} = \frac{\partial f}{\partial q_i}\dot{q}_i + \frac{\partial f}{\partial p_i}\dot{p}_i + \frac{\partial f}{\partial t}
$$

Hamilton 방정식 $\dot{q}_i = \frac{\partial H}{\partial p_i}$, $\dot{p}_i = -\frac{\partial H}{\partial q_i}$ 를 대입하면:

$$
\frac{df}{dt} = \frac{\partial f}{\partial q_i}\frac{\partial H}{\partial p_i} + \frac{\partial f}{\partial p_i}\left(-\frac{\partial H}{\partial q_i}\right) + \frac{\partial f}{\partial t} = \{f, H\} + \frac{\partial f}{\partial t}
$$

따라서 **$f$가 보존량이 되는 조건**: $\{f, H\} = 0$ 이고 $\frac{\partial f}{\partial t} = 0$.

> [!question] 궁금한 내용
> 그럼 위 식은 뇌터 정리와 동치인가?

> [!note] Lie bracket과의 연결?
> (Lie bracket과의 연결이 언급됐는데, $f \, e^{-t \frac{\overleftarrow{\partial}}{\partial q_i} \otimes \frac{\overrightarrow{\partial}}{\partial p_i}} g$ 를 소개하는 데 이게 **Moyal product** 라고 불리고 Lie bracket과 연결된다고 함)

### Jacobi identity를 이용한 보존량의 성질

$\{I, H\} = 0$ 이고 $\{J, H\} = 0$ 이면:

$$
\{\{I, J\}, H\} = 0
$$

즉, **두 보존량의 Poisson bracket도 보존량**이다.

> [!question] 궁금한 내용
> 이것의 물리적인 함의는 무엇인가?

---

## 각운동량의 Poisson bracket

$$
\mathbf{L} = \mathbf{r} \times \mathbf{p}, \quad L_i = \epsilon_{ijk}\, r_j\, p_k
$$

$\{L_1, L_2\}$를 계산하면:

$$
\{L_1, L_2\} = \{r_2 p_3 - r_3 p_2,\; r_3 p_1 - r_1 p_3\}
$$

$$
= \{r_2 p_3,\; r_3 p_1\} + \{r_3 p_2,\; r_1 p_3\}
$$

$$
= -r_2 p_1 + p_2 r_1 = L_3
$$

> [!note] 자세한 유도 (추가 필기 2026-03-18)
> 
> **일반적인 경우 $\{L_i, L_\ell\}$ 유도**
> 
> $L_i = \epsilon_{ijk}\, r_j p_k$, $L_\ell = \epsilon_{\ell mn}\, r_m p_n$ 으로 쓰면:
> 
> $$
> \{L_i, L_\ell\} = \epsilon_{ijk}\,\epsilon_{\ell mn}\{r_j p_k,\, r_m p_n\}
> $$
> 
> Leibniz rule을 적용하면 ($\{r_j, r_m\} = 0$, $\{p_k, p_n\} = 0$ 을 이용해 소거):
> 
> $$
> \{r_j p_k,\, r_m p_n\} = r_j r_m \{p_k, p_n\} + r_j \{p_k, r_m\} p_n + r_m \{r_j, p_n\} p_k + \{r_j, r_m\} p_k p_n
> $$
> 
> $$
> = -\delta_{km}\, r_j p_n + \delta_{jn}\, r_m p_k
> $$
> 
> 대입하면:
> 
> $$
> \epsilon_{ijk}\,\epsilon_{\ell mn}\{r_j p_k,\, r_m p_n\} = -\epsilon_{ijk}\,\epsilon_{\ell kn}\, r_j p_n + \epsilon_{ijk}\,\epsilon_{\ell mj}\, r_m p_k
> $$
> 
> $\epsilon$-$\delta$ 항등식 $\epsilon_{ijk}\,\epsilon_{i'jk} = \delta_{ii'}\delta_{jj'} - \delta_{ij'}\delta_{ji'}$ 을 적용:
> 
> $$
> = -(\delta_{ni}\delta_{\ell j} - \delta_{nj}\delta_{\ell i})\, r_j p_n + (\delta_{k\ell}\delta_{im} - \delta_{km}\delta_{i\ell})\, r_m p_k
> $$
> 
> $$
> = -\delta_{ni}\delta_{\ell j}\, r_j p_n + r_i p_i + \delta_{k\ell}\delta_{im}\, r_m p_k - r_m p_m
> $$
> 
> $$
> = -r_\ell p_i + r_i p_\ell
> $$
> 
> 이것을 $\epsilon$-$\delta$ 항등식으로 다시 쓰면:
> 
> $$
> = (\delta_{ig}\delta_{h\ell} - \delta_{ih}\delta_{\ell g})\, r_g p_h = \epsilon_{i\ell f}\,\epsilon_{fgh}\, r_g p_h = \epsilon_{i\ell f}\, L_f
> $$
> 
> 따라서:
> 
> $$
> \{L_i, L_\ell\} = \epsilon_{i\ell f}\, L_f
> $$

일반화하면:

$$
\{L_i, L_j\} = \epsilon_{ijk}\, L_k
$$

### Casimir invariant
[[Casimir Invariants]] 참고. 
모든 연산자와 commute하는 것 — **Casimir invariant**.

$$
L^2 = L_1^2 + L_2^2 + L_3^2, \quad \{L^2, L_i\} = 0 \quad \forall i
$$

놀랍게도, $L^2$는 Hamiltonian이다. **Hamiltonian은 Casimir invariant이다.**

---

## Laplace–Runge–Lenz (LRL) 벡터

행성의 타원 운동에서 — **행성과 항성의 거리에 따른 또 다른 보존량**.  
(Space translation은 대칭이 아니지만 회전은 대칭)

$$
\mathbf{A} = \frac{1}{m}\mathbf{p} \times \mathbf{L} - \hat{r}, \quad \left(\hat{r} = \frac{\mathbf{r}}{r}\right)
$$

$$
\mathbf{A} \cdot \mathbf{L} = 0
$$

$\{H, \mathbf{A}\} = 0$ 임을 쉽게 보일 수 있다고 한다.  
Poisson bracket의 성질만을 이용해 $\{H, A\} = 0$ 을 증명해 보자:

$$
\{L_\alpha, A_b\} \quad \text{와} \quad \{A_\alpha, A_b\} \text{ 를 계산해보자.}
$$

이제 우리는 6개의 보존량을 가졌다.
그래서 마치 회전을 4차원에서 하는 것이다.  
최전면이 6개인 곳, 이제 $SO(3)$의 대칭에서 $SO(4)$로 승격됐다.  
이런 방법은 수소 원자를 풀 때도 쓸 수 있다.

---

## Gauge theory와 Dirac constraint formalism

이 부분은 혼란스럽다. 배경을 모르는 모델을 풀고 있기 때문이다. 
레퍼런스를 참고해 더 공부해보자. 

### 1차원 Scalar QED 모델 (예시)

액션:

$$
I[\psi(t),\, A_0(t)] = \frac{1}{2}\int_{t_1}^{t_2} dt\, \left(\dot{\psi} - A_0\right)^2
$$

> [!question] 궁금한 내용
> 이거 지금 갑자기 왜 물고 있는 거지? $\psi$와 $A_0$가 뭐인지? 왜 라그랑지안이 이렇게 주어지는 거지?

#### ① Gauge symmetry (redundancy)

$$
\psi \to \psi' = \psi + \epsilon(t)
$$

$$
A_0 \to A_0' = A_0 + \dot{\epsilon}(t)
$$

($\epsilon(t)$는 시간에 대한 임의의 함수)

운동방정식:

$$
\frac{\delta I}{\delta A_0} = 0 \quad \Rightarrow \quad \dot{\psi} - A_0 = 0
$$

$$
\frac{\delta I}{\delta \psi} \Rightarrow \frac{\partial L}{\partial \psi} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\psi}}\right) = 0 \quad \Rightarrow \quad \frac{d}{dt}(\dot{\psi} - A_0) = 0
$$

$f(t)$가 임의의 시간에 대한 함수일 때, $\psi(t) = f(t)$, $A_0(t) = \dot{f}(t)$ 가 solution이다.

#### ② 정준 운동량과 Hamiltonian

$$
P_\psi = \frac{\partial L}{\partial \dot{\psi}} = \dot{\psi} - A_0
$$

$$
P_{A_0} = \frac{\partial L}{\partial \dot{A}_0} = 0
$$

Hamiltonian:

$$
H = P_\psi \dot{\psi} - L = \frac{1}{2}P_\psi^2 + A_0 P_\psi
$$

액션을 $(P_\psi, \psi, A_0)$로 쓰면:

$$
I[P_\psi, \psi, A_0] = \int_{t_1}^{t_2} dt\left(P_\psi \dot{\psi} - \frac{1}{2}P_\psi^2 - A_0 P_\psi\right)
$$

변분:

$$
\frac{\delta I}{\delta A_0} = P_\psi, \quad \frac{\delta I}{\delta P_\psi} = \dot{\psi} - P_\psi - A_0 = 0, \quad \frac{\delta I}{\delta \psi} = -\dot{P}_\psi = 0
$$

> [!note] Glia의 보충 (2026-03-18): Constraint와 EOM의 구분
> 
> **왜 $\frac{\delta I}{\delta A_0} = P_\psi = 0$을 "constraint"라고 부르는가?**
> 
> 핵심 기준은 **시간 미분의 유무**이다.
> 
> - **운동방정식(EOM)**: $\dot{q} = \ldots$, $\dot{p} = \ldots$ 형태 — 시간 미분을 포함하며, "현재 상태로부터 미래 진화"를 결정한다.
> - **Constraint**: $\phi(p, q) = 0$ 형태 — 시간 미분 없이, **허용되는 초기 조건의 범위**를 제한하는 대수적 조건이다.
> 
> Hamiltonian action:
> $$
> I[P_\psi, \psi, A_0] = \int dt\left(P_\psi \dot{\psi} - \frac{1}{2}P_\psi^2 - A_0 P_\psi\right)
> $$
> 에서 $A_0$는 **시간 미분 없이** action에 등장한다. 따라서 $A_0$로 변분하면 $\dot{p}$가 끼어들 여지가 없고, 결과가 $P_\psi = 0$이라는 순수한 대수적 조건으로 나온다. 이것이 constraint이다.
> 
> $A_0$는 **Lagrange 승수(Lagrange multiplier)** 역할을 한다. 홀로노믹 구속조건 $f(q) = 0$을 action에 $\lambda f(q)$로 더했을 때 $\lambda$로 변분하면 $f(q) = 0$이 constraint로 나오는 것과 완전히 같은 구조이다.
> 
> | 구분 | 형태 | 역할 |
> |------|------|------|
> | EOM | $\dot{q} = \ldots$, $\dot{p} = \ldots$ | 시간 진화를 결정 |
> | Constraint | $\phi(p, q) = 0$ (미분 없음) | 허용된 초기조건의 범위를 제한 |
> 
> 따라서 "모든 EOM이 constraint인가?"라는 의문의 답은 **아니다**. Constraint는 EOM 중에서도 시간 미분을 포함하지 않는 특별한 경우이며, 게이지 이론에서는 Lagrange 승수 역할을 하는 변수($A_0$ 등)가 항상 이것을 만들어낸다.

**이것이 바로 Gauge theory이다.**

---

### Dirac constraint formalism

Hamiltonian에서 gauge theorem의 일반화.

$$
I[p_i, q_i, \lambda_a] = \int_{t_1}^{t_2} dt\left(p_i \dot{q}_i - H_0(p_i, q_i) + \lambda_a \phi_a(p_i, q_i)\right)
$$

($\phi_a(p_i, q_i) = 0$ 가 약한 constraint, $H_0 + \lambda_a \phi_a$ 는 effective Hamiltonian)

이러면 Hamilton 방정식은:

$$
\dot{q}_i = \frac{\partial H_0}{\partial p_i} - \lambda_a \frac{\partial \phi_a}{\partial p_i}
$$

$$
\dot{p}_i = -\frac{\partial H_0}{\partial q_i} + \lambda_a \frac{\partial \phi_a}{\partial q_i}
$$

Constraint의 consistency condition ($\phi_a = 0$ 이 시간에 대해 보존되어야 함):

$$
\phi_a(p_i, q_i) = 0 \quad \Rightarrow \quad \frac{d}{dt}\phi_a(p_i, q_i) = \{\phi_a,\, H_0 - \lambda_b \phi_b\}
$$

$$
= \{\phi_a, H_0\} - \{\phi_a, \lambda_b \phi_b\} = 0
$$

**6개 constraint가 있을 때의 equation of motion.**

#### 두 가지 케이스

① **None-gauge theorem** — Dirac **2nd class constraint**

$$
C_{ab} := \{\phi_a, \phi_b\}
$$

만약 $C_{ab}$가 invertible이라면:

$$
C_{ab}[C^{-1}]_{bc} = \delta_{ac}
$$

$$
\lambda_a = [C^{-1}]_{ab}\{\phi_b, H_0\}
$$

② **Gauge theories** — Dirac **1st class constraint**

$$
\{\phi_a, \phi_b\} = 0, \quad \therefore C_{ab} = 0
$$

운동 방정식에서:

$$
C_{ab}\lambda_b - \{\phi_a, H_0\} = 0 \quad \text{(두 등식이 모두 0)}
$$

이 경우:

$$
\{\phi_a, \phi_b\} = C_{abc}\,\phi_c, \quad \{\phi_a, H_0\} = C_{ab}\,\phi_b
$$

$\phi_c = 0$, $\phi_b = 0$이 성립. $C_{abc}$와 $C_{ab}$는 상수.

Gauge transformation:

$$
\delta q_i = \{q_i, \phi_a\}\,\epsilon_a(t)
$$

$$
\delta p_i = \{p_i, \phi_a\}\,\epsilon_a(t)
$$

$$
\delta \lambda_c = \dot{\epsilon}_a(t) + \epsilon_a(t)\,C_{ac} - \lambda_a\,\epsilon_b(t)\,C_{abc}
$$

$\{{\cdot}, H\} = \frac{\partial}{\partial t}$이고, $\{{\cdot}, H\}$이 시간의 generator. 그래서:

$$
\delta_\epsilon = \{{\cdot}, G\}
$$

$$
\delta q_i = \epsilon_a(t)\frac{\partial \phi_a}{\partial p_i}, \quad \delta p_i = -\epsilon_a(t)\frac{\partial \phi_a}{\partial q_i}
$$

액션이 $\delta q_i$와 $\delta p_i$에 invariant 하다는 것을 보이면:

$$
\delta I = \int_{t_1}^{t_2} dt\left[-\epsilon_a\frac{\partial\phi_a}{\partial q_i}\dot{q}_i + \frac{d}{dt}(p_i q_i) - \epsilon_a\frac{\partial\phi_a}{\partial p_i}\dot{p}_i - \frac{\partial H}{\partial q_i}\epsilon_a\frac{\partial\phi_a}{\partial p_i} + \frac{\partial H}{\partial p_i}\epsilon_a\frac{\partial\phi_a}{\partial q_i} - \delta\lambda_a\phi_a - \lambda_a\left(\frac{\partial\phi_a}{\partial q_i}\epsilon_b(t)\frac{\partial\phi_b}{\partial p_i} - \frac{\partial\phi_a}{\partial p_i}\epsilon_b(t)\frac{\partial\phi_b}{\partial q_i}\right)\right]
$$

정리하면:

$$
\delta I = \int_{t_1}^{t_2} dt\left[-\epsilon_a\frac{d\phi_a}{dt} - \epsilon_a\{H_0, \phi_a\} - \delta\lambda_a\phi_a - \lambda_a\epsilon_b C_{abc}\phi_c\right]
$$

$$
= \int_{t_1}^{t_2} dt\left[\dot{\epsilon}_a\phi_a + \epsilon_a C_{ab}\phi_b - \delta\lambda_a\phi_a - \lambda_a\epsilon_b C_{abc}\phi_c\right]
$$

$$
= 0
$$

이이 된다고 한다.

# 궁금한 내용

- $f \, e^{-t \frac{\overleftarrow{\partial}}{\partial q_i} \otimes \frac{\overrightarrow{\partial}}{\partial p_i}} g$ 라는 표현이 Moyal product와 어떻게 연결되는지?
- $I$와 $J$가 보존량이면 $\{I, J\}$도 보존량이라는 것의 물리적 의미
- LRL 벡터의 $\{L_\alpha, A_b\}$, $\{A_\alpha, A_b\}$ 계산 (직접 해보기)
- Scalar QED 모델에서 $\psi$와 $A_0$의 물리적 의미 — 왜 이런 Lagrangian 형태가 나오는지
- SO(3) → SO(4) 승격의 의미

# AI의 보충 설명

# 연관 학습 노트

[[AM lecture note - Hamiltonian mechanics]]

# References

[[A short review on Noether's theorems, gauge symmetries-part-4.pdf]]

# 다음 강의

[[AM lecture note - Constrained systems examples]]
