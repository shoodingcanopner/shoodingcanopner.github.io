---
title: AM lecture note -  Holonomic constraints
date: 2026-03-05
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
[[AM lecture note - Coordinate transformation invariance of Lagrangian equation]]

# 오늘의 핵심

> 어떻게 constraint system을 general하게 풀 수 있을까?
>
 > 라그랑주 multiplier $\lambda_\alpha$를 도입하여, 라그랑지안을 수정한다:
> $$
 L'(x^a, \dot{x}^a, \lambda_\alpha) = L(x^a, \dot{x}^a) + \lambda_\alpha f_\alpha(x^a, t)
 $$
> $L'$은 $x^a$, $\dot{x}^a$, $\lambda_\alpha$의 함수이다. $\dot{\lambda}_\alpha$는 등장하지 않는다.

# 필기 내용

## Holonomic Constraints란?

시스템이 있을 수 있는 좌표에 말 그대로 제약이 있는 것이 constraint이다. 

> **Holonomic constraints는 global structure이다.** 제약이 위치와 시간에만 의존한다.

흥미롭게도 'holonomic'은 그리스어로 '전체, 온통'이라는 뜻이라고 한다. 

$\alpha$번째 holonomic constraint는 이런 식으로 표현된다. 

$$
f_\alpha(x^a, t) = 0
$$
만약 제약 조건이 좌표 뿐만 아니라 속도에도 의존적이라면 그것은 holonomic하지 않으며, 일반적인 풀이법이 아직 없다. 

하지만 다행이게도, holonomic constraints는 일반적인 풀이법이 있다. 아주 쉽다. 

## Holonomic Constraints와 뉴턴 방정식 — 진자 예시
![[Pasted image 20260305134005.png]]
진자 운동을 생각하자.

**Constraint 조건:**

$$
x^2 + y^2 = l^2 \implies \begin{cases} x = l\sin\theta \\ y = l\cos\theta \end{cases}
$$

**뉴턴 운동방정식:**

$$
\begin{cases} m\ddot{x} = -T\dfrac{x}{l} \\ m\ddot{y} = mg - T\dfrac{y}{l} \end{cases}
$$

Constraints를 뉴턴 운동방정식에 적용하면:

$$
\begin{cases} \ddot{\theta} = -\dfrac{g}{l}\sin\theta \\ T = ml\dot{\theta}^2 + mg\cos\theta \end{cases}
$$

2개의 좌표, 1개의 constraint → 자유도는 1이다. 그러므로 $\theta$ 에 대해서만 풀면 된다.

$N$개의 입자,  constraint의 수는 $\alpha$ 일 때, 자유도는 $3N - \alpha$이다.

---

## 라그랑주 승수법 (Lagrange Multiplier)

어떻게 constraint system을 general하게 풀 수 있을까?

라그랑주 multiplier $\lambda_\alpha$를 도입하여, 라그랑지안을 수정한다:

$$
L'(x^a, \dot{x}^a, \lambda_\alpha) = L(x^a, \dot{x}^a) + \lambda_\alpha f_\alpha(x^a, t)
$$

$L'$은 $x^a$, $\dot{x}^a$, $\lambda_\alpha$의 함수이다. $\dot{\lambda}_\alpha$는 등장하지 않는다.

이렇게 해도 운동방정식은 $L(x^a, \dot{x}^a)$만을 사용했을 때와 비교하여 변하지 않는다. 
적어도 constraint를 양쪽 다 만족하는 한은 그렇다. 

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}^a}\right) - \frac{\partial L}{\partial x^a} = 0
\quad \Longleftrightarrow \quad
\frac{d}{dt}\left(\frac{\partial L'}{\partial \dot{x}^a}\right) - \frac{\partial L'}{\partial x^a} = 0
$$

$\lambda_\alpha$에 대해 라그랑주 방정식을 세우면 $\frac{\partial L'}{\partial \dot{\lambda}_\alpha} = 0$이므로,

$$
\frac{\partial L'}{\partial \lambda_\alpha} = f_\alpha(x^a, t) = 0
$$

→ constraint equation이 나온다.

### 진자에 적용

$$
L' = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2) + mgy + \frac{1}{2}\lambda(x^2 + y^2 - l^2)
$$
왜 $\lambda$앞에 $\frac{1}{2}$ 가 나오는가? 이건 그냥 convention이라고 한다. 그러면 왜 이런 convention이 유용할까? 그건 잘 모르겠다. 

이를 풀어 라그랑주 방정식을 구하면 

$$
\begin{cases} m\ddot{x} = \lambda x \\ m\ddot{y} = mg + \lambda y \end{cases}
$$

$\lambda$가 붙은 부분들, $\lambda x$와 $\lambda y$ 부분이 바로 **constraint force**이며, $\lambda = -\dfrac{T}{l}$임을 알 수 있다.

> [!Hint] 결론 - Constraint force
> 라그랑주 Multiplier를 더한 $L'$에 대해 오일러-라그랑주 방정식을 세우면, $\lambda_\alpha \frac{\partial f_\alpha}{\partial x^a}$ 항이 바로 **constraint force**이다. ($\lambda$ 혼자가 아니라, $\lambda$와 constraint의 편미분의 곱임에 주의.)



---

## 라그랑지안을 더 쉽게 만드는 방법

전체 좌표를 두 종류로 분리할 수 있다:
- $x^A$: constraint에 의해 결정되는 좌표
- $q_i$: constraint와 **무관한** 자유로운 일반화 좌표 ($x^A = x^A(q_i, t)$로 표현)

이때 $q_i$에 대한 라그랑주 방정식은:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = \lambda_\alpha \frac{\partial f_\alpha}{\partial q_i}
$$

그런데 $q_i$는 **정의상** constraint $f_\alpha$에 의존하지 않으므로,

$$
\frac{\partial f_\alpha}{\partial q_i} = 0
$$

이는 조건이 아니라 좌표 선택의 **정의에서 나오는 사실**이다. 따라서 $\lambda$ 항이 자동으로 사라지고:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0
$$

constraint를 $x^A = x^A(q_i, t)$로 대입한 unconstrained $L(q_i, \dot{q}_i, t)$만으로 운동을 완전히 기술할 수 있다.

진자의 경우 $\theta$가 바로 이 $q_i$에 해당한다 — $\theta$를 선택하는 순간 constraint $x^2 + y^2 = l^2$이 좌표계에 흡수되어 사라진다.

> **이것이 라그랑주 역학을 강력하게 만드는 부분이다.** constraint force를 구할 필요가 없다면, 승수법 없이 처음부터 좋은 일반화 좌표를 선택하는 것이 훨씬 깔끔하다.

| 방법 | 변수 | constraint force |
|------|------|------------------|
| 라그랑주 승수법 | $x, y, \lambda$ | 명시적으로 나옴 |
| 일반화 좌표 선택 | $\theta$ 만 | 처음부터 사라짐 |

### 진자에 적용 — 일반화 좌표 $\theta$로 직접 풀기

$\theta$를 일반화 좌표로 선택하면, $x$와 $y$를 다음과 같이 parametrize할 수 있다:

$$
\begin{cases}
x = l\sin\theta \\
y = l\cos\theta \\
\dot{x} = \dot{\theta}\, l\cos\theta \\
\dot{y} = -l\dot{\theta}\sin\theta \\
x^2 + y^2 = l^2 \\
\dot{x}^2 + \dot{y}^2 = (l\dot{\theta})^2
\end{cases}
$$

constraint가 좌표계에 흡수되므로, unconstrained 라그랑지안은:

$$
L'(\theta, \dot{\theta}) = \frac{1}{2}m(l\dot{\theta})^2 + mgl\cos\theta
$$

편미분을 계산하면:

$$
\frac{\partial L'}{\partial \theta} = -mgl\sin\theta
$$

$$
\frac{\partial L'}{\partial \dot{\theta}} = ml^2\dot{\theta}
$$

오일러-라그랑주 방정식:

$$
\frac{d}{dt}\left(\frac{\partial L'}{\partial \dot{\theta}}\right) - \frac{\partial L'}{\partial \theta} = ml^2\ddot{\theta} + mgl\sin\theta = 0
$$

$$
\therefore\quad \ddot{\theta} = -\frac{g}{l}\sin\theta
$$

$\lambda$ 없이, $\theta$ 하나만으로 진자의 운동방정식을 깔끔하게 얻었다.

---

##  양자역학으로 확장, path integral

Path Integral과의 연결 (강의 중 언급)
$$
\langle x_f, y_f | e^{\frac{i}{\hbar}H(t_f - t_i)} | x_i, y_i \rangle = \int_{(x_i,y_i)}^{(x_f,y_f)} \mathcal{D}x\,\mathcal{D}y\; e^{\frac{i}{\hbar}\int_{t_i}^{t_f} dt\, L}
+ \int_{-\infty}^{\infty} \mathcal{D}x\; e^{ix\, f_\alpha(x,t)}
$$
이 형태가 정확한지, 라그랑지안과 constraints를 path integral로 옮기는 방법은 나중에 알아야 한다.

---

# 궁금한 내용

### 라그랑지안과 path integral을 연결하는 방법은 무엇인가?
파인만 path integral 책에서 보았던 것 같은데....

# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[AM lecture note - Noether theorem]]

# 필기 이미지

![[Pasted image 20260305175119.png]]![[Pasted image 20260305175127.png]]