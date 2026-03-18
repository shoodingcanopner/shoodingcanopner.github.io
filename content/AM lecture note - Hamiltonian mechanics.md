---
title: AM lecture note - Hamiltonian mechanics
date: "2026-03-12"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!warning] 강의 필기
> 이것은 [[Analytical Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[AM lecture note - Noether theorem in field theory]]

# 오늘의 핵심

- 로렌츠 힘의 Lagrangian에서 게이지 변환이 $L$에 total derivative를 더하는 방식으로만 영향을 준다는 것을 확인함
- 르장드르 변환으로 $\mathcal{H} = p_i \dot{q}_i - L$을 정의하고, Hamilton 방정식을 유도함
- 로렌츠 힘 예시로 $\mathcal{H} = \frac{1}{2m}(\mathbf{p} - \frac{e}{c}\mathbf{A})^2 + e\phi$ 임을 확인
- Hamiltonian 역학에서의 variational principle과 constraint 처리 방법 (Poisson bracket으로 나타나는 consistency condition)

# 필기 내용

## 로렌츠 힘 Lagrangian과 게이지 변환

> [!Danger] 텐서 연산이 들어가기 때문에 헷갈린다. 주의할 것

지난 시간에 로렌츠 힘 예시를 보았다.

$$
m\ddot{\mathbf{x}} = q\left(\mathbf{E} + \frac{1}{c}\dot{\mathbf{x}} \times \mathbf{B}\right)
$$

$\mathbf{B} = \nabla \times \mathbf{A}$, $\mathbf{E} = -\nabla\phi - \frac{\partial}{\partial t}\mathbf{A}$ 의 포텐셜을 도입하면, Lagrangian은:

$$
L = \frac{1}{2}m\dot{\mathbf{x}}^2 + q\mathbf{A}\cdot\dot{\mathbf{x}} - q\phi
$$

우리는 게이지 변환이 $\mathbf{E}$와 $\mathbf{B}$, 그리고 운동방정식에 영향을 주지 않는다는 것을 안다. 그래서 **액션 역시 게이지 불변이어야 하고**, 게이지 변환에 의한 $L'$에는 시간에 대한 total derivative term만 추가되어야 한다.

진짜 그런지 확인: 변환된 포텐셜은

$$
\mathbf{A} \to \mathbf{A}' = \mathbf{A} + \nabla\Lambda
$$

$$
\phi \to \phi' = \phi - \frac{\partial\Lambda}{\partial t}
$$

먼저 알아야 할 것: **시간 전미분 공식**

$$
\frac{d\Lambda}{dt} = \left(\frac{\partial x}{\partial t}\frac{\partial}{\partial x} + \frac{\partial y}{\partial t}\frac{\partial}{\partial y} + \frac{\partial z}{\partial t}\frac{\partial}{\partial z}\right)\Lambda + \frac{\partial}{\partial t}\Lambda = \dot{\mathbf{x}}\cdot\nabla\Lambda + \frac{\partial}{\partial t}\Lambda
$$

이를 이용하면:

$$
\mathbf{A}'\cdot\dot{\mathbf{x}} - \phi' = (\mathbf{A} + \nabla\Lambda)\cdot\dot{\mathbf{x}} - \left(\phi - \frac{\partial\Lambda}{\partial t}\right)
$$

$$
= \mathbf{A}\cdot\dot{\mathbf{x}} - \phi + \dot{\mathbf{x}}\cdot(\nabla\Lambda) + \frac{\partial\Lambda}{\partial t}
$$

$$
= \mathbf{A}\cdot\dot{\mathbf{x}} - \phi + \frac{d}{dt}\Lambda
$$

따라서:

$$
L' = \frac{1}{2}m\dot{\mathbf{x}}^2 + q(\mathbf{A}\cdot\dot{\mathbf{x}} - \phi) + q\frac{d}{dt}\Lambda
$$

extra term인 $q\frac{d}{dt}\Lambda$는 정확히 시간에 대한 total derivative이다. ✓

다시 돌아가서, 운동방정식을 구하면:

$$
\frac{d}{dt}(m\dot{\mathbf{x}} + q\mathbf{A}) - q\nabla(\dot{\mathbf{x}}\cdot\mathbf{A}) + q\nabla\phi = 0
$$

벡터 $\mathbf{A}$를 시간에 대해 전미분하면:

$$
\frac{d\mathbf{A}}{dt} = (\nabla \mathbf{A}) \cdot \dot{\mathbf{x}} + \frac{\partial\mathbf{A}}{\partial t}
$$

여기서 $\nabla\mathbf{A}$는 벡터 그라디언트이며, 2차 텐서이다. 이렇게 index summation하는 경우는 $\dot{\mathbf{x}}$를 오른쪽에 적는다.

$$
[(\nabla \mathbf{A}) \cdot \dot{\mathbf{x}}]_i = \sum_j (\partial_j A_i)\, \dot{x}_j
$$

그래서 운동방정식을 더 풀어 쓰면:

$$
m\ddot{\mathbf{x}} + q(\nabla \mathbf{A}) \cdot \dot{\mathbf{x}} + q\frac{\partial\mathbf{A}}{\partial t} - q\nabla(\dot{\mathbf{x}}\cdot\mathbf{A}) + q\nabla\phi = 0
$$

$$
m\ddot{\mathbf{x}} + q\left\{\frac{\partial\mathbf{A}}{\partial t} + (\nabla \mathbf{A}) \cdot \dot{\mathbf{x}} - \nabla(\dot{\mathbf{x}}\cdot\mathbf{A}) + \nabla\phi\right\} = 0
$$

### 숙제 풀이: 원통 좌표에서의 운동방정식과 각속도 (HW1 #6)

> [!note] 직접 풀었음음
> 아래는 숙제 6번 문제의 풀이이다. 라그랑지안이 로렌츠 힘을 재현함을 보이고, 구체적인 벡터 포텐셜에서 각속도 공식을 유도한다.

**문제:** 전자(질량 $m$, 전하 $-e$)가 자기장 $\mathbf{B} = \nabla \times \mathbf{A}$ 속에서 운동한다. 라그랑지안은:

$$
L = \frac{1}{2}m\dot{\mathbf{r}} \cdot \dot{\mathbf{r}} - e\dot{\mathbf{r}} \cdot \mathbf{A}(\mathbf{r})
$$

원통 좌표 $(r, \theta, z)$에서 $\mathbf{A} = (0,\, f(r)/r,\, 0)$이 주어졌을 때, 초기 시각에 $r = r_0$이고 속도가 $(r, z)$ 평면에 있다면 $z$축 둘레의 각속도를 구하라.

#### Step 1: 라그랑지안 전개

원통 좌표에서 $\dot{\mathbf{r}} \cdot \dot{\mathbf{r}} = \dot{r}^2 + r^2\dot{\theta}^2 + \dot{z}^2$이고, $\dot{\mathbf{r}} \cdot \mathbf{A} = r\dot{\theta} \cdot \frac{f(r)}{r} = \dot{\theta}f(r)$이므로:

$$
L = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\theta}^2 + \dot{z}^2) - e\dot{\theta}f(r)
$$

#### Step 2: 벡터 그래디언트 텐서와 운동방정식

원통 좌표 $(r, \theta, z)$에서 벡터장 $\mathbf{A} = A_r \hat{r} + A_\theta \hat{\theta} + A_z \hat{z}$의 벡터 그래디언트 $\nabla \mathbf{A} = \nabla \otimes \mathbf{A}$는 2차 텐서이다.

**유도:** $\nabla = \hat{r}\frac{\partial}{\partial r} + \hat{\theta}\frac{1}{r}\frac{\partial}{\partial \theta} + \hat{z}\frac{\partial}{\partial z}$를 $\mathbf{A}$에 텐서곱으로 작용시킨다. 기저 벡터 $\hat{r}, \hat{\theta}$가 $\theta$에 의존하므로:

$$
\frac{\partial \hat{r}}{\partial \theta} = \hat{\theta}, \quad \frac{\partial \hat{\theta}}{\partial \theta} = -\hat{r}
$$

$r, z$에 대한 기저 벡터의 미분은 모두 0이다.

**(1) $\hat{r}$ 방향 미분** ($\frac{\partial}{\partial r}$): 기저 벡터가 $r$에 의존하지 않으므로 단순 편미분:

$$
\frac{\partial}{\partial r}(A_r \hat{r} + A_\theta \hat{\theta} + A_z \hat{z}) = \frac{\partial A_r}{\partial r}\hat{r} + \frac{\partial A_\theta}{\partial r}\hat{\theta} + \frac{\partial A_z}{\partial r}\hat{z}
$$

이것이 텐서의 첫 번째 열(column)을 준다.

**(2) $\hat{\theta}$ 방향 미분** ($\frac{1}{r}\frac{\partial}{\partial \theta}$): 곱의 법칙 + 기저 벡터 미분이 핵심이다.

$$
\frac{\partial}{\partial \theta}(A_r \hat{r}) = \frac{\partial A_r}{\partial \theta}\hat{r} + A_r \hat{\theta}
$$

$$
\frac{\partial}{\partial \theta}(A_\theta \hat{\theta}) = \frac{\partial A_\theta}{\partial \theta}\hat{\theta} - A_\theta \hat{r}
$$

$$
\frac{\partial}{\partial \theta}(A_z \hat{z}) = \frac{\partial A_z}{\partial \theta}\hat{z}
$$

$\hat{r}, \hat{\theta}$ 성분끼리 모으고 $1/r$을 곱하면, 텐서의 두 번째 열이 된다:

$$
\hat{r} \text{ 성분}: \frac{1}{r}\frac{\partial A_r}{\partial \theta} - \frac{A_\theta}{r}, \quad \hat{\theta} \text{ 성분}: \frac{1}{r}\frac{\partial A_\theta}{\partial \theta} + \frac{A_r}{r}, \quad \hat{z} \text{ 성분}: \frac{1}{r}\frac{\partial A_z}{\partial \theta}
$$

여기서 $-A_\theta/r$와 $+A_r/r$이 곡률 보정항이다.

**(3) $\hat{z}$ 방향 미분** ($\frac{\partial}{\partial z}$): 기저 벡터가 $z$에 의존하지 않으므로 단순 편미분:

$$
\frac{\partial}{\partial z}(A_r \hat{r} + A_\theta \hat{\theta} + A_z \hat{z}) = \frac{\partial A_r}{\partial z}\hat{r} + \frac{\partial A_\theta}{\partial z}\hat{\theta} + \frac{\partial A_z}{\partial z}\hat{z}
$$

세 열을 모으면 일반 공식이 된다:

$$
(\nabla \mathbf{A})_{ij} = \begin{pmatrix} \dfrac{\partial A_r}{\partial r} & \dfrac{1}{r}\dfrac{\partial A_r}{\partial \theta} - \dfrac{A_\theta}{r} & \dfrac{\partial A_r}{\partial z} \\[10pt] \dfrac{\partial A_\theta}{\partial r} & \dfrac{1}{r}\dfrac{\partial A_\theta}{\partial \theta} + \dfrac{A_r}{r} & \dfrac{\partial A_\theta}{\partial z} \\[10pt] \dfrac{\partial A_z}{\partial r} & \dfrac{1}{r}\dfrac{\partial A_z}{\partial \theta} & \dfrac{\partial A_z}{\partial z} \end{pmatrix}
$$

여기에 $A_r = 0$, $A_\theta = f(r)/r$, $A_z = 0$을 대입한다. $A_\theta$가 $r$에만 의존하므로 $\theta, z$ 미분은 모두 0이다. 0이 아닌 성분만 계산하면:

- $(1,2)$ 성분: $\dfrac{1}{r}\dfrac{\partial A_r}{\partial \theta} - \dfrac{A_\theta}{r} = 0 - \dfrac{f/r}{r} = -\dfrac{f}{r^2}$

- $(2,1)$ 성분: $\dfrac{\partial A_\theta}{\partial r} = \dfrac{\partial}{\partial r}\!\left(\dfrac{f}{r}\right) = \dfrac{1}{r}\dfrac{\partial f}{\partial r} - \dfrac{f}{r^2}$

- $(2,2)$ 성분: $\dfrac{1}{r}\dfrac{\partial A_\theta}{\partial \theta} + \dfrac{A_r}{r} = 0 + 0 = 0$

따라서:

$$
(\nabla \mathbf{A})_{ij} = \begin{pmatrix} 0 & -\dfrac{f}{r^2} & 0 \\[8pt] \dfrac{1}{r}\dfrac{\partial f}{\partial r} - \dfrac{f}{r^2} & 0 & 0 \\[8pt] 0 & 0 & 0 \end{pmatrix}
$$

오일러-라그랑주 방정식으로부터 운동방정식 세 개를 얻는다:

$$
m(\ddot{r} - \dot{\theta}^2 r) + e\dot{\theta}\frac{f}{r} + e\dot{\theta}\frac{\partial f}{\partial r} = 0
$$

$$
m(2\dot{r}\dot{\theta} + r\ddot{\theta}) - e\dot{r}\left(\frac{1}{r}\frac{\partial f}{\partial r} - \frac{f}{r^2}\right) = 0
$$

$$
m\ddot{z} = 0
$$

#### Step 3: 보존량을 이용한 각속도 유도

운동방정식을 직접 풀기보다, **$\theta$가 순환 좌표**임을 이용한다. $L$에 $\theta$ 자체가 나타나지 않으므로 정준 각운동량이 보존된다:

$$
p_\theta = \frac{\partial L}{\partial \dot{\theta}} = mr^2\dot{\theta} - ef(r) = \text{const}
$$

**초기 조건 적용:** 초기에 $r = r_0$이고 속도가 $(r, z)$ 평면에 있으므로 $\dot{\theta}(t=0) = 0$이다. 따라서:

$$
p_\theta = m r_0^2 \cdot 0 - ef(r_0) = -ef(r_0)
$$

임의 시각에서 보존 법칙을 적용하면:

$$
mr^2\dot{\theta} - ef(r) = -ef(r_0)
$$

$\dot{\theta}$에 대해 정리하면:

$$
\boxed{\dot{\theta} = \frac{e}{mr^2}\left[f(r) - f(r_0)\right]}
$$

> [!tip] 풀이 전략의 교훈
> 이 문제에서 운동방정식을 직접 세우는 것은 "라그랑주 방정식이 로렌츠 힘을 재현함을 보여라"는 전반부에 필요하다. 하지만 각속도를 구하는 후반부에서는 **대칭성 → 보존량 → 초기 조건 대입**이라는 전략이 훨씬 효율적이다.
>
> 일반적 원칙: **순환 좌표가 보이면, 운동방정식을 풀지 말고 보존량부터 쓰라.**

---

## 해밀턴 역학 — 개론적 설명

해밀턴 역학을 해야 하는 이유: 2차 상미방의 기본 형태는

$$
\frac{d^2y(x)}{dx^2} + a(x)\frac{dy(x)}{dx} + b(x)y(x) = f(x)
$$

이것이다. 이 미분방정식을 coupling된 2개의 1차 상미방으로 나타낼 수 있다. 이런 2차 상미방을 만드는 Lagrangian을 찾고, **르장드르 변환**을 통해 Hamilton을 찾고, 그걸 풀면 원하는 것을 얻을 수 있다고 한다.

> [!note] 동기
> phase space에서 canonical transformation과 관련 있다는데 무슨 의미인지... (추후 학습)

---

## 르장드르 변환

$f(x)$라는 함수가 있을 때 (convex function), $\frac{df}{dx} = u$라고 하면, $u$에 대한 함수 $g(u)$로 $f(x)$를 변환할 수 있다:

$$
g(u) = xu - f(x)
$$

여기서 대응 관계는:

$$
f(x) \leftrightarrow L(q_i, \dot{q}_i)
$$

$$
x \leftrightarrow \dot{q}_i
$$

$$
u \leftrightarrow p_i = \frac{\partial L}{\partial \dot{q}_i}
$$

$$
g(u) \leftrightarrow \mathcal{H}(q_i, p_i)
$$

이런 관계로 변환할 수 있다.

---

## Hamilton 방정식 유도

$$
\mathcal{H} = p_i\dot{q}_i - L, \quad p_i = \frac{\partial L}{\partial \dot{q}_i}
$$

전미분:

$$
dL = \left(\frac{\partial L}{\partial q}\right)dq + p_i d\dot{q}_i
$$

$$
d\mathcal{H} = p_i d\dot{q}_i + \dot{q}_i dp_i - \left(\frac{\partial L}{\partial q}\right)dq - p_i d\dot{q}_i
$$

$$
= \dot{q}_i\, dp_i - \left(\frac{\partial L}{\partial q_i}\right)dq_i
$$

한편 $\mathcal{H} = \mathcal{H}(q_i, p_i)$이므로:

$$
d\mathcal{H} = \left(\frac{\partial \mathcal{H}}{\partial q_i}\right)dq_i + \left(\frac{\partial \mathcal{H}}{\partial p_i}\right)dp_i
$$

계수 비교하면:

$$
\frac{\partial \mathcal{H}}{\partial p_i} = \dot{q}_i
$$

Lagrange 방정식에 의해:

$$
-\frac{\partial L}{\partial q_i} = \frac{\partial \mathcal{H}}{\partial q_i} = -\dot{p}_i \quad \Rightarrow \quad \dot{p}_i = -\frac{\partial \mathcal{H}}{\partial q_i}
$$

이게 **equation of motion**이다.

정리하면:

$$
\frac{\partial L}{\partial \dot{q}_i} = p_i \iff \frac{\partial \mathcal{H}}{\partial p_i} = \dot{q}_i
$$

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0 \iff \dot{p}_i + \frac{\partial \mathcal{H}}{\partial q_i} = 0
$$

---

## 예시: 로렌츠 힘의 Lagrangian으로부터 Hamiltonian 구하기

$$
L = \frac{1}{2}m\dot{r}^2 - e\phi + \frac{e}{c}\dot{\mathbf{r}}\cdot\mathbf{A}
$$

$$
\mathbf{p} = \frac{\partial L}{\partial \dot{\mathbf{r}}} = m\dot{\mathbf{r}} + \frac{e}{c}\mathbf{A}, \quad \dot{\mathbf{r}} = \frac{1}{m}\mathbf{p} - \frac{e}{cm}\mathbf{A}
$$

$$
\dot{\mathbf{r}}\cdot\mathbf{p} = \frac{1}{m}\mathbf{p}^2 - \frac{e}{cm}\mathbf{p}\cdot\mathbf{A}
$$

$$
L = \frac{1}{2m}\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)^2 - e\phi + \frac{e}{cm}\mathbf{p}\cdot\mathbf{A} - \frac{e^2}{c^2m}|\mathbf{A}|^2
$$

$$
L = \frac{1}{2m}|\mathbf{p}|^2 - e\phi - \frac{e^2}{2c^2m}|\mathbf{A}|^2
$$

$$
\mathcal{H} = p_i\dot{q}_i - L = \frac{1}{m}|\mathbf{p}|^2 - \frac{e}{cm}\mathbf{p}\cdot\mathbf{A} - \frac{1}{2m}|\mathbf{p}|^2 + e\phi + \frac{e^2}{2c^2m}|\mathbf{A}|^2
$$

$$
= \frac{1}{2m}|\mathbf{p}|^2 - \frac{e}{cm}\mathbf{p}\cdot\mathbf{A} + \frac{e^2}{2c^2m}|\mathbf{A}|^2 + e\phi
$$

$$
= \frac{1}{2m}\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)^2 + e\phi
$$

> [!question] 궁금한 점
> $\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)$이 effective momentum인가?

이 Hamiltonian을 이용해 두 개의 연결된 1차 상미방을 얻을 수 있다.  
바로 $\frac{\partial\mathcal{H}}{\partial \mathbf{r}}$과 $\frac{\partial\mathcal{H}}{\partial \mathbf{p}}$가 나타내는 것이 이것이다.

$$
\begin{cases}
\dot{\mathbf{r}} = \dfrac{\partial\mathcal{H}}{\partial \mathbf{p}} = \dfrac{1}{m}\left(\mathbf{p} - \dfrac{e}{c}\mathbf{A}\right) \\[10pt]
\dot{p}_i = -\dfrac{\partial\mathcal{H}}{\partial r_i} = -e\dfrac{\partial\phi}{\partial r_i} + \dfrac{e}{cm}\left(p_j - \dfrac{e}{c}A_j\right)\dfrac{\partial A_j}{\partial r_i}
\end{cases}
$$

---

## Hamiltonian 역학에서 Variational principle

$$
S = \int_{t_i}^{t_f} dt\, L(q,\dot{q}) = \int_{t_i}^{t_f} dt\left(p_i\dot{q}_i - \mathcal{H}(q_i, p_i)\right)
$$

변분을 취하면:

$$
\delta S = \int_{t_i}^{t_f} dt\left((\delta p_i)\dot{q}_i + p_i\delta\dot{q}_i - \frac{\partial\mathcal{H}}{\partial p_i}\delta p_i - \frac{\partial\mathcal{H}}{\partial q_i}\delta q_i\right)
$$

$p_i\delta\dot{q}_i$에 부분 적분을 적용:

$$
\int_{t_i}^{t_f} dt\, p_i\delta\dot{q}_i = \left[p_i\delta q_i\right]_{t_i}^{t_f} - \int_{t_i}^{t_f} dt\, \dot{p}_i\delta q_i
$$

경계 조건 $\delta q_i(t_i) = \delta q_i(t_f) = 0$으로 경계항 소멸. 정리하면:

$$
\delta S = \int_{t_i}^{t_f} dt\left(\dot{q}_i - \frac{\partial\mathcal{H}}{\partial p_i}\right)\delta p_i - \int_{t_i}^{t_f} dt\left(\dot{p}_i + \frac{\partial\mathcal{H}}{\partial q_i}\right)\delta q_i = 0
$$

> [!note] Glia의 보충 (2026-03-12)
> 이 단계에서 $\delta p_i$와 $\delta q_i$는 **독립적인 변분**이다 — Hamiltonian 역학은 phase space $(q_i, p_i)$에서 정식화되므로, 둘을 별개의 독립변수로 취급한다.
> 
> 따라서 $\delta S = 0$이 되려면 각 계수가 **동시에** 0이어야 한다:
> 
> $$
> \delta p_i \text{ 계수} = 0 \quad \Rightarrow \quad \dot{q}_i = \frac{\partial\mathcal{H}}{\partial p_i}
> $$
> 
> $$
> \delta q_i \text{ 계수} = 0 \quad \Rightarrow \quad \dot{p}_i = -\frac{\partial\mathcal{H}}{\partial q_i}
> $$
> 
> 두 Hamilton 방정식이 **동시에** 유도된다. 필기에서 $\dot{q}_i = \frac{\partial\mathcal{H}}{\partial p_i}$를 미리 대입해 $\delta p_i$ 항을 소거한 것처럼 보이지만, 논리 순서가 반대다 — 이 방정식은 유도의 **결과**이지 가정이 아니다.

---

## Hamiltonian 역학에서 Constraint 처리

Constraint는 $\phi_k(p, q) = 0$의 식으로 주어지는데, 액션에 이를 더하면:

$$
S = \int_{t_i}^{t_f}\left(p\cdot\dot{q} - \mathcal{H} - \lambda_k\phi_k\right)
$$

변환된 Lagrangian과 Hamiltonian:

$$
\tilde{L} = L - \lambda_k\phi_k
$$

$$
\tilde{\mathcal{H}} = \mathcal{H} + \lambda_k\phi_k
$$

이로부터 수정된 운동방정식:

$$
\dot{q}_i = \frac{\partial\tilde{\mathcal{H}}}{\partial p_i} = \frac{\partial\mathcal{H}}{\partial p} + \lambda_k\frac{\partial\phi_k}{\partial p}
$$

$$
\dot{p}_i = -\frac{\partial\tilde{\mathcal{H}}}{\partial q} = -\frac{\partial\mathcal{H}}{\partial q} - \lambda_k\frac{\partial\phi_k}{\partial q}
$$

Constraint는 시간에 대해 일정해야 하므로 (**consistency condition**):

$$
\begin{cases}
\phi_k = 0 \\[4pt]
\dot{\phi}_k = \dfrac{\partial\phi_k}{\partial q_i}\dot{q}_i + \dfrac{\partial\phi_k}{\partial p_i}\dot{p}_i = 0
\end{cases}
$$

대입하면:

$$
\dot{\phi}_k = \frac{\partial\phi_k}{\partial q_i}\frac{\partial\mathcal{H}}{\partial p_i} - \frac{\partial\phi_k}{\partial p_i}\frac{\partial\mathcal{H}}{\partial q_i} + \lambda_j\frac{\partial\phi_k}{\partial q_i}\frac{\partial\phi_j}{\partial p_i} - \lambda_j\frac{\partial\phi_k}{\partial p_i}\frac{\partial\phi_j}{\partial q_i}
$$

Poisson bracket $\{A, B\} \equiv \frac{\partial A}{\partial q_i}\frac{\partial B}{\partial p_i} - \frac{\partial A}{\partial p_i}\frac{\partial B}{\partial q_i}$로 쓰면:

$$
\dot{\phi}_k = \{\phi_k, \mathcal{H}\} + \lambda_j\{\phi_k, \phi_j\} = 0
$$

# 궁금한 내용

- ~~effective momentum $\mathbf{p} - \frac{e}{c}\mathbf{A}$ 의 물리적 의미는?~~ → 해소됨 (아래 참고)
- Canonical transformation과 phase space의 관계 (르장드르 변환과 어떻게 연결되는지)
- Constraint의 Poisson bracket 조건이 Dirac bracket으로 이어지는 과정

> [!note] Glia의 보충 (2026-03-12) — kinetic momentum vs canonical momentum
> $\mathbf{p} - \frac{e}{c}\mathbf{A}$는 **운동학적 운동량(kinetic momentum)** $\boldsymbol{\pi} = m\dot{\mathbf{r}}$이다. "effective momentum"보다 이 이름이 더 정확하다.
>
> 두 운동량의 비교:
>
> | | 정준 운동량 (canonical) | 운동학적 운동량 (kinetic) |
> |---|---|---|
> | 정의 | $\mathbf{p} = m\dot{\mathbf{r}} + \frac{e}{c}\mathbf{A}$ | $\boldsymbol{\pi} = m\dot{\mathbf{r}} = \mathbf{p} - \frac{e}{c}\mathbf{A}$ |
> | 역할 | Hamiltonian 형식의 변수 | 실제 물리적 운동량 |
> | 게이지 불변? | ❌ | ✅ |
>
> **왜 $\boldsymbol{\pi}$는 게이지 불변인가?**
>
> 게이지 변환 $\mathbf{A} \to \mathbf{A} + \nabla\Lambda$ 하에서:
>
> $$
> \mathbf{p}' = m\dot{\mathbf{r}} + \frac{e}{c}\mathbf{A}' = \mathbf{p} + \frac{e}{c}\nabla\Lambda
> $$
>
> $$
> \boldsymbol{\pi}' = \mathbf{p}' - \frac{e}{c}\mathbf{A}' = \left(\mathbf{p} + \frac{e}{c}\nabla\Lambda\right) - \frac{e}{c}\left(\mathbf{A} + \nabla\Lambda\right) = \mathbf{p} - \frac{e}{c}\mathbf{A} = \boldsymbol{\pi}
> $$
>
> $\nabla\Lambda$ 항이 정확히 상쇄된다. 근본적으로 $\boldsymbol{\pi} = m\dot{\mathbf{r}}$은 입자의 **실제 속도**에만 의존하고, 게이지 변환은 포텐셜의 수학적 재서술일 뿐 물리적 운동을 바꾸지 않기 때문이다.
>
> Hamiltonian을 $\boldsymbol{\pi}$로 쓰면:
> $$
> \mathcal{H} = \frac{|\boldsymbol{\pi}|^2}{2m} + e\phi
> $$
> 이건 그냥 운동에너지 + 퍼텐셜에너지다.

# AI의 보충 설명

# 연관 학습 노트


# References

- David Tong, *Classical Dynamics* lecture notes
- [[4 The Hamiltonian Formulation.pdf]]

# 다음 강의

[[AM lecture note - Poisson bracket and constraints]]