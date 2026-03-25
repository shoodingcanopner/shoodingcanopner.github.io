---
title: AM lecture note - Noether theorem in field theory
date: "2026-03-10"
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

[[AM lecture note - Noether theorem]]

저번 강의에서 시간에 대한 generator $T$와 공간에 대한 generator $\mathcal{Q}$를 정의했다.

$$
\delta t = \varepsilon T, \quad \delta q = \varepsilon \mathcal{Q}
$$

그리고 뇌터 정리의 최종 결과는 이것이었다.

$$
\frac{d}{dt} \left\{ \left( \frac{\partial L}{\partial \dot{q}} \dot{q} - L \right) T - \frac{\partial L}{\partial \dot{q}} \mathcal{Q} \right\} = 0
$$

여기서 $\frac{\partial L}{\partial \dot{q}} \dot{q} - L$ 부분이 바로 해밀토니안이다.

---

# 오늘의 핵심

- 오늘 강의는 **상대론적 notation**을 사용한다. $\partial_\mu$는 일반화 속도, $\phi$는 일반화 좌표이다.
- 입자 역학의 뇌터 정리를 **field theory 버전**으로 확장한다.
- 대칭성에 해당하는 **보존되는 Noether current** $J_a^\mu$를 구한다: $\partial_\mu J_a^\mu = 0$
- 마지막에는 **로렌츠 힘의 Lagrangian**을 다룬다.

---

# 필기 내용

## 상대론적 표기법 도입

오늘 강의는 상대론적 notation을 사용한다.

- $\phi$: 일반화 좌표
- $\partial_\mu \phi$: 일반화 속도??

액션은 다음과 같이 쓴다.

$$
S = \int d^d x \; \mathcal{L}[\phi, \partial_\mu \phi]
$$

**예시.** 
$$
\mathcal{L}[y, \partial_t y, \partial_x y] = \frac{1}{2}  (\partial_ty)^2 - \frac{c^2}{2}(\partial_xy)^2
$$

이건 라그랑지안이고, Euler-Lagrange 방정식은

$$
\frac{\partial}{\partial t}\left(\frac{\partial \mathcal{L}}{\partial \dot{y}}\right) + \frac{\partial}{\partial x}\left(\frac{\partial \mathcal{L}}{\partial y'}\right) - \frac{\partial \mathcal{L}}{\partial y} = 0
$$

풀면 $\ddot{y} - c^2 y'' = 0$. **파동 방정식**이 나온다.

> [!note] 상대론적 notation에서의 경계 조건
> 상대론적 notation에서는 시간이나 공간이나, 둘 다 그냥 위상공간의 한 축으로 취급된다.
> $\delta y = 0$이 되는 곳을 찾아 surface integral을 한다고 한다.

---

## Field theory 버전의 Lagrangian과 뇌터 정리

### 스칼라 필드의 변환

$\phi(x)$는 스칼라 field이다. 좌표 변환을 생각해보자.

$$
x \to x'
$$

$$
\phi(x) \to \phi'(x') = \phi(x)
$$

> [!note] AI 보충
> $\phi'(x') = \phi(x)$ 이 성질은 오직 **scalar field**에서만 적용된다.
> 스칼라 필드는 좌표계가 바뀌어도 각 시공간 점에서의 값이 변하지 않는다는 뜻이다.
> 벡터장이나 텐서장이라면 변환 행렬이 추가로 곱해진다.

$\phi'$의 존재를 명확하게 하기 위해 이렇게 정의하자.

$$
\phi'(x') = F(\phi(x))
$$

아마 $F$는 field에서 field를 mapping하는 함수인 것 같다.

### 액션의 변환

액션도 변환된다.

$$
S \to S' = \int d^d x \; \mathcal{L}[\phi'(x), \partial_\mu \phi'(x)]
$$
$$
S[\phi(x), \partial_\mu \phi(x)] \to S'[\phi'(x), \partial_\mu \phi'(x)] = \int d^d x' \; \mathcal{L}[\phi'(x'), \partial'_\mu \phi'(x')]
$$

이때, $\partial'_\mu = \frac{\partial}{\partial x'^\mu}$이고, chain rule을 적용하면

$$
\partial'_\mu = \frac{\partial x^\nu}{\partial x'^\mu} \frac{\partial}{\partial x^\nu}
$$

또한 $d^d x' = d^d x \left|\frac{dx'}{dx}\right|$.
여기서 $\left|\frac{\partial x'}{\partial x}\right|$는 **Jacobian matrix의 determinant**이다.

$$
\left|\frac{\partial x'}{\partial x}\right| = \det \begin{pmatrix} \frac{\partial x'^1}{\partial x^1} & \frac{\partial x'^1}{\partial x^2} & \cdots & \frac{\partial x'^1}{\partial x^n} \\ \frac{\partial x'^2}{\partial x^1} & \frac{\partial x'^2}{\partial x^2} & \cdots \\ \vdots & & \ddots \end{pmatrix}
$$


그러므로

$$
S' = \int d^d x' \; \mathcal{L}[\phi'(x'), \partial'_\mu \phi'(x')] = \int d^d x' \; \mathcal{L}\left[F(\phi(x)), \frac{\partial x^\nu}{\partial x'^\mu} \frac{\partial}{\partial x^\nu} F(\phi(x))\right]
$$

$$
= \int d^d x \left|\frac{dx'}{dx}\right| \mathcal{L}\left[F(\phi(x)), \frac{\partial x^\nu}{\partial x'^\mu} \partial_\nu F(\phi(x))\right]
$$


> [!note] 개인적인 이해
> 지금까지의 전개는 $x'$에 대한 적분과 표현식을 $x$에 대한 것으로 바꾸기 위함인 것 같다.

---

### 예시: 평행 이동과 로렌츠 변환

**첫 번째 예시. 평행 이동** 
$a$는 상수 벡터.

$$
x \to x' = x + a
$$
$\phi$가 스칼라장이라면
$$
\phi(x) \to \phi'(x') = \phi(x)
$$
즉
$F(\phi (x)) = \phi (x)$
$$
\frac{\partial x'^\nu}{\partial x^\mu} = \delta^\nu_\mu
$$

이러면 trivial하게 $S = S'$이다.

**두 번째 예시. 로렌츠 변환** 

$$
x^\mu \to x'^\mu = \Lambda^\mu_{\ \nu} x^\nu \quad \text{(이때 } \Lambda^\mu_{\ \nu} \text{는 Lorentz transformation matrix)}
$$

$$
\phi(x^\mu) \to \phi'(x'^\mu) = L_{\Lambda} \phi(x^\mu) \quad \text{(}L_{\Lambda}\text{}\text{는 또 다른 matrix)}
$$
로렌츠 변환 행렬은 아래 조건을 만족해야 한다. 
$$
\Lambda^\mu_{\ \rho} \eta_{\mu\nu} \Lambda^\nu_{\ \sigma} = \eta_{\rho\sigma} \quad \text{(} \eta \text{는 계량텐서)}
$$
그러면 변환된 액션은 이렇다. Jacobian의 determinant는 1. 
$$
S' = \int d^d x \; \mathcal{L}[L_\Lambda \phi(x), \Lambda^{-1} \cdot \partial (L_\Lambda \phi(x))]
$$

---

### Infinitesimal transform

변환된 좌표 $x'^\mu$가 $\omega_a$의 함수라고 취급하자. $x'^\mu(\omega_a = 0) = x^\mu$이다.

$$
x'^\mu = x^\mu + \omega_a \frac{\partial x^\mu}{\partial \omega_a}
$$

$$
\phi'(x') = F(\phi(x))
$$
이것 역시 $\omega_a$에 대해 1차 테일러 전개하면, 
$$
\phi'(x') = \phi(x) + \omega_a \frac{\delta}{\delta \omega_a} F(\phi(x))
$$

$\phi(x)$를 $\omega_a$로 미분하는 게 아니라 $F$를 $\omega_a$로 미분하는 게 핵심이다.

**Generator란 무엇인가.**

$$
\delta_\omega \phi(x) = \phi'(x) - \phi(x) = -i\omega_a G_a \phi(x)
$$

> [!note] 주의
> 같은 좌표 $x$에서 $\phi$와 $\phi'$를 비교한다.

이 $G_a$를 **generator**라 부른다.

---

### Generator 유도

테일러 전개를 이용해서 $\phi'(x') - \phi(x')$를 구체적으로 구해보자. Chain rule과 테일러 전개를 이용한다. 

$$
\phi'(x') = \phi(x) + \omega_a \frac{\delta}{\delta \omega_a} F(\phi(x))
$$
$$
= \phi\!\left(x'^\mu - \omega_a \frac{\delta x^\mu}{\delta \omega_a}\right) + \omega_a \frac{\delta}{\delta \omega_a} F\!\left(\phi\!\left(x'^\mu - \omega_a \frac{\delta x^\mu}{\delta \omega_a}\right)\!\right)
$$
$$
= \phi(x') - \omega_a \frac{\delta x^\mu}{\delta \omega_a} \partial'_\mu \phi(x') + \omega_a \frac{\delta}{\delta \omega_a}\!\left[F(\phi(x'^{\mu})) - \omega_a \frac{\delta x^\mu}{\delta \omega_a} \partial_\mu \phi(x') \frac{\delta F}{\delta \phi}\right]
$$

> [!note] AI 보충
> 빨간 메모: $\omega_a$에 대한 2차 이상 항은 infinitesimal limit에서 무시된다.

$$
= \phi(x') - \omega_a \frac{\delta x^\mu}{\delta \omega_a} \partial'_\mu \phi(x') + \omega_a \frac{\delta}{\delta \omega_a} F(\phi(x'^\mu))
$$

따라서

$$
\phi'(x') - \phi(x') = -\omega_a \frac{\delta x^\mu}{\delta \omega_a} \partial_\mu \phi(x') + \omega_a \frac{\delta}{\delta \omega_a} F(\phi(x^\mu))
$$

$$
= -i\omega_a G_a \phi(x')
$$

$$
\therefore \quad i G_a \phi = \frac{\delta x^\mu}{\delta \omega_a} \partial_\mu \phi - \frac{\delta F(\phi)}{\delta \omega_a}
$$

- $\phi$가 스칼라인 경우, $\frac{\partial F(\phi)}{\partial \omega^\nu} = 0$이다. 왜냐면 그래야 스칼라니까.
- $\frac{\delta x^\mu}{\delta \omega_a} \partial_\mu \phi$ 항은 **coordinate transform의 효과**이고,
- $\frac{\delta F(\phi)}{\delta \omega_a}$ 항은 **함수의 변화에 의한 효과**이다.

---

### 로렌츠 변환을 이용한 예시 (이해 못 함)

$$
x'^\mu = x^\mu + \omega^\mu_{\ \nu} x^\nu = x^\mu + \omega_{\rho\nu} \eta^{\rho\mu} x^\nu
$$

각 운동량 generator는 $L_{\mu\nu} = -iX_\mu \partial_\nu + iX_\nu \partial_\mu$

$$
\frac{\delta x^\mu}{\delta \omega_{\rho\nu}} = \frac{1}{2}\left(\eta^{\rho\mu} x^\nu - \eta^{\nu\mu} x^\rho\right)
$$

$-\frac{\delta F(\phi)}{\delta \omega_a}$이 스핀이라고 한다. $\frac{\delta x^\mu}{\delta \omega_a} \partial_\mu \phi$는 각운동량이고.

---

### Noether current 유도

$$
x'^\mu = x^\mu + \omega_a \frac{\partial x^\mu}{\partial \omega_a}
$$

$$
\det(1 + E) = e^{\text{tr}\ln(1+E)}
$$

$$
\frac{\partial x'^\nu}{\partial x^\mu} = \delta^\nu_\mu + \partial_\mu \omega_a \frac{\partial x^\mu}{\partial \omega_a}
$$

따라서

$$
\det\!\left(\frac{\partial x'^\nu}{\partial x^\mu}\right) = 1 + \partial_\mu\!\left(\omega_a \frac{\delta x^\mu}{\delta \omega_a}\right)
$$

여기서 $\partial_\mu$와 $x^\mu$가 공통으로 가진 $\mu$는 **trace**임을 의미한다.

액션을 전개하면

$$
S'[\phi'(x), \partial_\mu \phi'(x)] = \int d^d x \left(1 + \partial_\mu\!\left(\omega_a \frac{\delta x^\mu}{\delta \omega_a}\right)\right) \mathcal{L}\!\left[\phi + \omega_a \frac{\delta F}{\delta \omega_a},\ \left\{\delta^\nu_\mu - \partial_\mu\!\left(\omega_a \frac{\delta x^\nu}{\delta \omega_a}\right)\right\}\!\left\{\partial_\nu \phi + \partial_\nu\!\left(\omega_a \frac{\delta F(\phi)}{\delta \omega_a}\right)\right\}\right]
$$

이 적분항의 모든 걸 테일러 전개하면, 결과는

$$
\delta S = S'[\phi(x), \partial_\mu \phi(x)] - S[\phi(x), \partial_\mu \phi(x)] = \int d^d x \; J_a^\mu \; \partial_\mu \omega_a = 0
$$

이게 **conserved Noether current**이다.

$$
\partial_\mu J_a^\mu = 0
$$

$$
J_a^\mu = \left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} \cdot \partial_\nu \phi - \delta^\mu_\nu \mathcal{L}\right) \frac{\delta x^\nu}{\delta \omega_a} - \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)} \frac{\delta F(\phi)}{\delta \omega_a}
$$

---

## 로렌츠 힘에 대한 라그랑지안 역학

로렌츠 힘 방정식:

$$
m\ddot{x} = q(\mathbb{E} + \dot{x} \times \mathbb{B})
$$

이것에 대한 라그랑지안은 무엇인가?

$\nabla \cdot \mathbb{B} = 0 \Rightarrow \mathbb{B} = \nabla \times A$

패러데이 법칙: $\nabla \times \mathbb{E} + \frac{\partial \mathbb{E}}{\partial t} = 0 \Rightarrow \mathbb{E} = -\nabla\phi - \partial_t A$

$$
\mathcal{L} = \frac{m}{2}\dot{x}\cdot\dot{x} - q\phi + q\dot{x}\cdot A
$$

여기서 $q\dot{x}\cdot A$는 **velocity dependent potential**이다.

- $q\phi$는 전기장에 의한 potential
- $-q\dot{x}\cdot A$는 자기장에 의한 potential

이 라그랑지안으로 라그랑주 방정식을 구하면

$$
\frac{d}{dt}(m\dot{x} + qA) + q\nabla\phi - q\nabla(A\cdot\dot{x}) = 0 \quad \text{(이거 풀 줄 알아놓기)}
$$

$$
m\ddot{x} = -q\nabla\phi - q\partial_t A + q\dot{x}\times\mathbb{B}
$$

**Scalar product의 그라디언트:**

$$
\nabla(A\cdot B) = A\times(\nabla\times B) + B\times(\nabla\times A) + (A\cdot\nabla)B + (B\cdot\nabla)A
$$

---

# 궁금한 내용

- 로렌츠 변환 예시에서 $\Lambda^\mu_{\ \nu}$, $L$, $L_\Lambda \phi(x)$, 그리고 $\Lambda^\mu_{\ \rho} \eta_{\mu\nu} \Lambda^\nu_{\ \sigma} = \eta_{\rho\sigma}$가 각각 무엇을 의미하는가?
- Generator 정의에서 $-i$가 붙는 이유는? (양자역학적 convention인가?)
- 로렌츠 변환 예시에서 스핀($-\frac{\delta F(\phi)}{\delta \omega_a}$)과 각운동량($\frac{\delta x^\mu}{\delta \omega_a}\partial_\mu\phi$)이 어떻게 분리되는가?
- 라그랑지안에서 라그랑주 방정식으로 넘어가는 계산 ($\frac{d}{dt}(m\dot{x}+qA)+q\nabla\phi - q\nabla(A\cdot\dot{x})=0$) 직접 유도해보기

---

# AI의 보충 설명

> [!note] AI 보충: $\phi$. field는 무엇에서 무엇으로 가는 함수인가?
> 스칼라 필드의 경우:
> $$
> \phi : \mathbb{R}^d \to \mathbb{R}
> $$
> 시공간의 각 점 $x^\mu$마다 하나의 실수값을 할당하는 함수다.
>
> 입자 역학과 비교하면:
>
> | | 입자 역학 | Field theory |
> |---|---|---|
> | 독립변수 | $t$ | $x^\mu = (t, \mathbf{x})$ |
> | 일반화 좌표 | $q(t)$ | $\phi(x^\mu)$ |
> | 일반화 속도 | $\dot{q}(t)$ | $\partial_\mu \phi(x^\mu)$ |
> | 자유도 | 유한 개 | 무한 개 (각 점마다) |
>
> 입자 역학의 $q(t)$가 "시간 $t$에서 입자의 위치"였다면,
> $\phi(x^\mu)$는 **"시공간의 점 $x^\mu$에서 장(field)의 값"** 이다.
> 즉, 시공간을 시스템의 **configuration space**로 mapping하는 함수다.
> (위상공간은 위치+운동량을 모두 포함하므로, 정확히는 configuration space가 적절한 표현.)
> 
> 예를 들어 파동함수 같은 경우는, 특정 위치와 시점에서 파동의 위상이 곧 filed가 mapping하는 값이다. 
> 
> **점입자를 field로 나타내려면?**
> 억지로 표현하면 Dirac delta를 써야 한다:
> $$
> \phi(t, \mathbf{x}) = m \cdot \delta^{(3)}(\mathbf{x} - \mathbf{q}(t))
> $$
> 이건 매우 singular하고 field theory의 틀에 자연스럽지 않다.
> 오히려 관계의 방향은 반대가 자연스럽다 — field를 **양자화**하면 입자가 나온다.
> (전자기장 $A^\mu$ 양자화 → 광자, 스칼라 필드 $\phi$ 양자화 → 스칼라 입자)
> 즉 입자는 field의 **excitation(들뜸)** 으로 이해된다. 이것이 QFT의 핵심이다.

> [!note] AI 보충: 스칼라 필드의 좌표 변환 — passive vs active
> **스칼라(scalar)의 정의** = 좌표계 변환에 불변인 값.
> 따라서 $\phi$가 스칼라 필드라면, **같은 시공간의 점**을 **다른 좌표**로 불렀을 때도 그 점에서의 값은 동일하다.
>
> $$
> x \to x' \quad \Rightarrow \quad \phi'(x') = \phi(x)
> $$
>
> 여기서 $x$와 $x'$는 **같은 물리적 점**을 다른 좌표로 표현한 것이다.
> 지금까지 변환을 뜻하는 저 화살표의 의미를 잘못 파악하고 있었는데, 
> 이것은 물리적으로 같은 점에 대한 표기를 왼쪽에서 오른쪽의 값으로 바꾸겠다는 뜻이다. 
> 
> $\phi'(x') = \phi(x)$는 "좌표 이름이 바뀌었을 뿐, 그 점의 물리적 값은 그대로"라는 뜻이다.
> 벡터장이었다면 $V'^\mu(x') = \Lambda^\mu_{\ \nu} V^\nu(x)$처럼 변환 행렬이 추가로 작용한다.
> 스칼라는 이 변환 행렬이 항등($\Lambda = 1$)인 특수한 경우다.
>
> **주의: 스칼라 조건과 물리적 대칭성은 별개의 문제다.**
>
> | | 비교 대상 | 좌표 | 물리적 점 | 항상 성립? |
> |---|---|---|---|---|
> | 스칼라 조건 | $\phi'(x') = \phi(x)$ | 다름 | **같은 점** | YES, 스칼라의 **정의** |
> | 평행이동 대칭성 | $\phi_\text{new}(x) = \phi(x)$ | 같음 | 다른 점 | NO, 계의 **물리적 성질**에 따라 다름 |
>
> 예를 들어 원점의 점전하 $\phi(x) = q/|x|$를 생각하면:
> - 좌표계를 $a$만큼 평행이동하면 (같은 점을 $x' = x+a$로 부르면) $\phi'(x') = \phi(x)$ ✓ (스칼라 조건)
> - 전하 자체를 $a$만큼 옮기면 $\phi_\text{new}(x) = q/|x-a| \neq \phi(x)$ (평행이동 대칭성 깨짐)
>
> **Active vs Passive transformation:**
> Generator 정의 $\delta_\omega \phi(x) = \phi'(x) - \phi(x)$에서는 좌표값 $x$를 고정하고 함수 형태를 비교한다.
> 이것은 **active transformation** 관점 — 같은 좌표 $x$라는 숫자에서 비교하므로, 물리적으로는 서로 다른 시공간의 점을 비교하는 셈이다.
> 반면 스칼라 조건 $\phi'(x') = \phi(x)$는 **passive transformation** 관점이다.
>
> 즉:
> - $\phi'(x) \neq \phi(x)$ — 같은 좌표, 다른 함수 형태 (active)
> - $\phi'(x') = \phi(x)$ — 같은 물리적 점, 스칼라 조건 (passive)
>
> 오늘 강의에서 테일러 전개로 $\phi'(x') \to \phi'(x)$로 바꾸는 계산이 바로 이 두 관점을 연결하는 과정이었다.

> [!note] AI 보충: 로렌츠 조건 $\Lambda^\mu_{\ \rho} \eta_{\mu\nu} \Lambda^\nu_{\ \sigma} = \eta_{\rho\sigma}$
> 이 식은 **로렌츠 변환이 민코프스키 계량을 보존**한다는 조건이다.
> $\eta_{\mu\nu}$는 민코프스키 계량 텐서 $\text{diag}(-1,+1,+1,+1)$ (혹은 부호 convention에 따라 $\text{diag}(+1,-1,-1,-1)$).
> 쉽게 말하면, **두 사건 사이의 시공간 간격 $ds^2 = \eta_{\mu\nu}dx^\mu dx^\nu$이 로렌츠 변환에서 불변**임을 뜻한다.
> 이것이 바로 특수 상대성 이론의 핵심 대칭성이다.

---

# 연관 학습 노트



---

# References

- David Tong, Classical Dynamics lecture notes
- [[2 The Lagrangian Formalism.pdf]]
- 강의 보충 자료 [[Noether_1st_Theorem_ref.pdf]]
![[Pasted image 20260312084035.png|637]]
![[Pasted image 20260312084057.png]]
![[Pasted image 20260312084104.png]]
![[Pasted image 20260312084109.png]]
![[Pasted image 20260312084115.png]]

![[Pasted image 20260312084129.png]]

![[Pasted image 20260312084136.png]]

# 다음 강의
[[AM lecture note - Hamiltonian mechanics]]