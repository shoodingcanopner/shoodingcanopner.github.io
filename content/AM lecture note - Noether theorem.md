---
title: AM lecture note - Noether theorem
date: "2026-03-05"
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

[[AM lecture note - Holonomic constraints]]

# 오늘의 핵심



# 필기 내용


## 뇌터 정리 (Noether's Theorem)

라그랑지안으로부터 대칭성을 찾아라 → **뇌터 정리**.

> 라그랑지안에 **연속 대칭**이 있다면, 그에 상응하는 **보존량**이 있다.

### 보존량이란?

어떤 양 $F$에 대해 $\frac{dF}{dt} := 0$.

$$
\frac{dF}{dt} = \sum_i \left(\frac{\partial F}{\partial q_i}\frac{\partial q_i}{\partial t} + \frac{\partial F}{\partial \dot{q}_i}\frac{\partial \dot{q}_i}{\partial t}\right) + \frac{\partial F}{\partial t}
$$

### 라그랑주 방정식이 성립하면 해밀토니안은 보존량이다

$L$이 $t$에 명시적으로 의존하지 않는다면, 시간에 대해 대칭인 것이고,

$$
H = \left(\sum_j \dot{q}_j \frac{\partial L}{\partial \dot{q}_j}\right) - L
$$

$H$는 보존량이다. 양자역학에서 보존량은 양자화 가능하며, **해밀토니안은 시간의 generator**이다.

**증명:**

$$
\frac{dH}{dt} = \sum_j \left(\ddot{q}_j \frac{\partial L}{\partial \dot{q}_j} - \dot{q}_j \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right)\right) - \frac{d}{dt}L = 0
$$

$$
\frac{d}{dt}L = \left(\frac{\partial L}{\partial q_i}\right)\dot{q}_i + \left(\frac{\partial L}{\partial \dot{q}_i}\right)\ddot{q}_i = -\left(\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)\right)\dot{q}_i + \left(\frac{\partial L}{\partial \dot{q}_i}\right)\ddot{q}_i
$$

> **경로가 오일러-라그랑주 방정식을 따라야만** 해밀토니안이 보존된다는 말씀.  
> → 따르지 않는 경우가 양자 역학이다.

---

## Cyclic Coordinate와 보존량

특정 일반화 좌표 $q_j$에 대해 $\frac{\partial L}{\partial q_j} = 0$ 이라면?

$$
p_j = \frac{\partial L}{\partial \dot{q}_j} \text{ 는 상수, 보존량이다.}
$$

$$
\frac{dp_j}{dt} = \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) = \frac{\partial L}{\partial q_j} = 0
$$

---

## 뇌터 정리의 일반적 유도

$s$라는 정도로 좌표를 transform한다 생각. 시간은 관여하지 않는다고 일단 생각하자. $s$는 실수.

$$
q_i(t) \longrightarrow Q_i(s, t), \quad Q_i(0, t) = q_i(t)
$$

$s$의 변화에 따라 $L$이 변하지 않으면 대칭인 것이다:

$$
\frac{\partial}{\partial s} L[Q, \dot{Q}, t] = 0
$$

**증명:**

$$
\frac{\partial}{\partial s} L = \frac{\partial L}{\partial Q}\frac{\partial Q}{\partial s} + \frac{\partial L}{\partial \dot{Q}}\frac{\partial \dot{Q}}{\partial s}
$$

$$
\frac{\partial L}{\partial s}\bigg|_{s=0} = \frac{\partial L}{\partial q}\frac{\partial Q}{\partial s}\bigg|_{s=0} + \frac{\partial L}{\partial \dot{q}}\frac{\partial \dot{Q}}{\partial s}\bigg|_{s=0}
$$

$$
= \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right)\frac{\partial Q}{\partial s}\bigg|_{s=0} + \frac{\partial L}{\partial \dot{q}}\frac{\partial \dot{Q}}{\partial s}\bigg|_{s=0}
$$

$$
= \frac{d}{dt}\left[\frac{\partial L}{\partial \dot{q}}\frac{\partial Q}{\partial s}\bigg|_{s=0}\right]
$$

$$
= 0
$$

따라서,

$$
\frac{\partial L}{\partial \dot{q}} \cdot \frac{\partial Q}{\partial s}\bigg|_{s=0} \equiv \frac{\partial L}{\partial \dot{q}} \cdot \delta q
$$

**는 보존되는 양이다.**

> [!note] 자체 풀이
> 위 유도에서 두 번째 줄에서 세 번째 줄로 넘어갈 때, 오일러-라그랑주 방정식을 사용했다:
> $$
> \frac{\partial L}{\partial q} = \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right)
> $$
> 그리고 product rule을 쓰면:
> $$
> \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right)\frac{\partial Q}{\partial s} + \frac{\partial L}{\partial \dot{q}}\frac{d}{dt}\left(\frac{\partial Q}{\partial s}\right) = \frac{d}{dt}\left[\frac{\partial L}{\partial \dot{q}}\frac{\partial Q}{\partial s}\right]
> $$
> $\frac{d}{dt}\frac{\partial Q}{\partial s} = \frac{\partial \dot{Q}}{\partial s}$ 이므로 성립.  
> 또한 $\int dt \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i} \delta q_i\right) = 0$ (경계 조건).

---

## 예시 — 병진 대칭과 운동량 보존

$$
L = \frac{1}{2}m\sum_i^N |\dot{\mathbf{r}}_i|^2 - \frac{1}{2}\sum_{\substack{i,j=1 \\ i \neq j}}^N \left(|\mathbf{r}_i - \mathbf{r}_j|\right)^2
$$

변환: $\mathbf{r}_i \to \mathbf{r}_i + s\hat{n}$ ($\hat{n}$은 병진 이동 벡터)

$$
L(\cdot, |\dot{\mathbf{r}}_i|, t) = L(\mathbf{r}_i + s\hat{n}, |\dot{\mathbf{r}}_i|, t)
$$

보존량:

$$
\sum_i \frac{\partial L}{\partial \dot{\mathbf{r}}_i} \cdot \hat{n} = \sum_i \mathbf{p}_i \cdot \hat{n} = 0
$$

→ **운동량은 보존량이다.**

변환: $\mathbf{r}_i \to \mathbf{r}_i + d\hat{n} \times \mathbf{r}_i$ ($\hat{n}$은 회전축 벡터)

$$
\sum_i \frac{\partial L}{\partial \dot{\mathbf{r}}_i} \cdot (\hat{n} \times \mathbf{r}_i) \text{ 이 보존량이며, 이게 각운동량이다.}
$$

→ 다교재에 있는 예시.

---

## 갈릴레이 변환의 10개 Generator에 적용 (Noether's theorem의 일반적 유도)

갈릴레이 변환에 있는 10개의 generator를 적용해 보자.  
→ 위키피디아 아래 참고해 강의하셨다.

시간 변환:

$$
t \to t' = t + \varepsilon T
$$

$T$는 generator.

$$
q_i(t) \to q'_i(t') = \Phi[q_i(t), \varepsilon] = \Phi[q_i(t' - \varepsilon T), \varepsilon]
$$

Action:

$$
I = \int_{t_1}^{t_2} dt\, L(q_i(t), \dot{q}_i(t), t)
$$

$$
I'(\varepsilon) = \int_{t_1 + \varepsilon T}^{t_2 + \varepsilon T} dt'\, L\left[q'_i(t'), \dot{q}'_i(t'), t'\right]
$$

속도의 변환:

$$
\dot{q}_i(t) \to \dot{q}'_i(t') = \frac{d}{dt}\Phi[q_i(t), \varepsilon] = \frac{\partial \Phi[q_i(t'-\varepsilon T), \varepsilon]}{\partial q} \cdot \frac{\partial q}{\partial t}
$$

$$
= \frac{\partial \Phi[q_i(t'-\varepsilon T), \varepsilon]}{\partial q} \cdot \dot{q}_i(t' - \varepsilon T)
$$

따라서:

$$
I'(\varepsilon) = \int_{t_1 + \varepsilon T}^{t_2 + \varepsilon T} dt'\, L\left[\Phi(q_i(t'-\varepsilon T), \varepsilon),\, \frac{\partial \Phi[q_i(t'-\varepsilon T), \varepsilon]}{\partial q}\dot{q}_i(t'-\varepsilon T),\, t'\right]
$$

대칭 조건 ($I' = I$) 에서 $\varepsilon$으로 미분하고 $\varepsilon = 0$으로 놓으면:

$$
0 = \frac{dI'(\varepsilon)}{d\varepsilon}\bigg|_{\varepsilon=0}
$$

$$
= L[q_i(t_2), \dot{q}_i(t_2), t_2]\,T - L[q_i(t_1), \dot{q}_i(t_1), t_1]\,T
$$

$$
+ \int_{t_1 + O.T.}^{t_2 + O.T.} dt\, \left[\frac{\partial L}{\partial q} \cdot \left(-\frac{\partial q}{\partial q}\dot{q}\,T + \frac{\partial q}{\partial \varepsilon}\right) + \frac{\partial L}{\partial \dot{q}}\left(-\frac{\partial^2 \Phi}{\partial q^2}\dot{q}^2 + \frac{\partial^2 \Phi}{\partial \varepsilon \partial q}\dot{q} - \frac{\partial \Phi}{\partial q}\ddot{q}\,T\right)\right]
$$

> [!note] 미완성 — 위키피디아 유도 참조
> 마지막 페이지 수식은 판서 내용이 너무 방대하여 완전히 옮기지 못했습니다.  
> 아래 Wikipedia Derivations 섹션을 함께 참고할 것:  
> [Noether's theorem — Wikipedia](https://en.wikipedia.org/wiki/Noether%27s_theorem#Derivations)

$$
\Phi[q_i(t'-\varepsilon T), \varepsilon] = \Phi[q_i(t') - \varepsilon T\dot{q}_i, \varepsilon]
$$

$$
\frac{\partial}{\partial \varepsilon}\left(\frac{\partial \Phi}{\partial q}\dot{q}\right) = \frac{\partial}{\partial \varepsilon}\left[\dot{q}\frac{\partial}{\partial q}\left(\Phi[q_i(t') - \varepsilon\frac{\partial \Phi}{\partial q}\dot{q}\,T\right]\right] = \frac{\partial}{\partial \varepsilon}\left(\frac{\partial \Phi}{\partial q} - \varepsilon\frac{\partial^2 \Phi}{\partial q^2}\dot{q}\,T\right)
$$

# 궁금한 내용



# AI의 보충 설명

## 라그랑주 승수법의 핵심 아이디어

라그랑주 승수법은 수학적으로 매우 우아한 방법이다. 핵심은 다음과 같다:

**원래 계**: $x^a$를 자유롭게 변분하되, constraint $f_\alpha = 0$를 따로 강제한다.  
**수정된 계**: $L' = L + \lambda_\alpha f_\alpha$에서 $x^a$와 $\lambda_\alpha$를 **모두** 자유 변수로 취급하여 변분한다.

$\lambda_\alpha$로 변분 → constraint equation 재생.  
$x^a$로 변분 → constraint force가 포함된 운동방정식.

$\lambda$의 물리적 의미는 **constraint가 계에 가하는 힘의 세기**이다. 진자의 경우 $\lambda = -T/l$로, 줄의 장력을 인코딩한다.

## 뇌터 정리의 중요성

뇌터 정리는 현대 이론 물리학의 근간이다:

| 대칭 | 보존량 |
|------|--------|
| 시간 평행이동 | 에너지 (해밀토니안) |
| 공간 평행이동 | 운동량 |
| 회전 | 각운동량 |
| 게이지 대칭 | 전하 (전자기학) |
| 위상 대칭 | 입자 수 (양자역학) |

특히 **해밀토니안이 시간의 generator**라는 말은 양자역학에서 $e^{-iHt/\hbar}$가 시간 발전 연산자임을 통해 명확해진다. 고전역학에서 보존량이 generator인 것, 양자역학에서 에르미트 연산자가 유니터리 변환을 생성하는 것이 같은 구조다 — [[포아송 브라켓과 양자역학 교환자의 연결성]] 참고.

## Cyclic Coordinate

$\frac{\partial L}{\partial q_j} = 0$인 좌표를 **cyclic coordinate** 또는 **ignorable coordinate**라 한다. 오일러-라그랑주 방정식에 의해 즉시 $\dot{p}_j = 0$이 나온다. 이것은 뇌터 정리의 가장 단순한 케이스로, 좌표 $q_j \to q_j + s$의 대칭에 대응된다.

# 연관 학습 노트

- [[Lagrangian Mechanics]]
- [[Symmetry_Conservation_Laws_Three_Step_Proof]]
- [[포아송 브라켓과 양자역학 교환자의 연결성]]
- [[Lagrangian_and_Generalized_Momentum]]

# References

- David Tong, *Classical Dynamics* lecture notes (Cambridge)
- [[2 The Lagrangian Formalism.pdf]]
- [Noether's theorem — Wikipedia, Derivations 섹션](https://en.wikipedia.org/wiki/Noether%27s_theorem#Derivations)

# 다음 강의


