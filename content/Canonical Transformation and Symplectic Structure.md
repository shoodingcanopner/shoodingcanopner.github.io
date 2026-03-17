---
title: "Canonical Transformation and Symplectic Structure"
date: "2026-03-17"
subject: classical mechanics
tags:
  - study
  - concept
class: study
---

# Canonical Transformation and Symplectic Structure

이 노트는 [[QM lecture note - Position, Momentum, and Generators]]의 궁금한 내용 1번에서 출발했다:
**"Poisson bracket 구조가 보존된다는 것만으로, $p_i\dot{q}_i - H = Q_i\dot{P}_i - H' + \frac{dF}{dt}$ 형태를 유도할 수 있는가?"**

결론: **그렇다.** 하지만 그 논증은 미분기하 언어를 요구한다.

---

## 기호 정리

| 기호 | 의미 |
|------|------|
| $(q_i, p_i)$ | 원래 정준 좌표 |
| $(Q_i, P_i)$ | 변환된 정준 좌표 |
| $\omega$ | symplectic 2-form |
| $F$ | generating function |
| $d$ | exterior derivative |

---

## 1. Symplectic 2-form

위상공간(phase space) $\mathbb{R}^{2n}$에 다음 2-form을 정의한다:

$$
\omega = \sum_i dq_i \wedge dp_i
$$

Poisson bracket은 이 $\omega$로 완전히 표현된다. 두 함수 $f, g$에 대해:

$$
\{f, g\} = \omega(X_f, X_g)
$$

여기서 $X_f$는 $f$의 Hamiltonian vector field. 
왜 이런지 차근차근 알아보자. 

### Two-form의 연산

**1-form** $\alpha$는 벡터 하나를 받아 실수를 뱉는 선형 함수, covector이다. $\alpha(V) = \alpha_i V^i$

**2-form** $\omega$는 벡터 두 개를 받는 쌍선형 반대칭 함수:

$$
\omega(V, W) = -\omega(W, V)
$$

wedge product의 의미:

$$
(dx^i \wedge dx^j)(V, W) = V^i W^j - V^j W^i
$$
두 벡터를 $dx^i$와 $dx^j$ 평면에 사영했을 때 벡터가 이루는 평행사변형의 면적값이 바로 위의 값이다. 

위상공간에서 $\omega = \sum_i dq_i \wedge dp_i$를 두 벡터장 $V, W$에 작용하면:
$\dot{q}_i^V$와 $\dot{p}_i^V$가 벡터장 $V$의 성분일 때, 
$$
\omega(V, W) = \sum_i \left( \dot{q}_i^V \dot{p}_i^W - \dot{p}_i^V \dot{q}_i^W \right)
$$

직관적으로는 **위상공간에서 $V$와 $W$가 이루는 면적의 합**이다.

### Hamiltonian Vector Field의 정의

위상 공간의 한 점을 실수로 mapping하는 함수 $f(q,p)$가 주어졌을 때, Hamiltonian vector field $X_f$는 다음으로 정의된다:

$$
\omega(X_f, \,\cdot\,) = df = \frac{\partial f}{\partial p_i} dp_i + \frac{\partial f}{\partial q_i} dq_i
$$
$\omega(X_f, \,\cdot\,)$는 2-form에다가 벡터를 이미 하나 넣었으므로 1-form의 역할을 하는 것이다. 

$X_f$는 정확히 어떻게 생긴걸까? 계수를 알아보자. 

$X_f = A_i \frac{\partial}{\partial q_i} + B_i \frac{\partial}{\partial p_i}$로 놓고,
$\omega(X_f, \cdot) = df$에 임의의 벡터장 $W = \dot{q}_i^W \frac{\partial}{\partial q_i} + \dot{p}_i^W \frac{\partial}{\partial p_i}$를 넣어 계산한다.

좌변:
$$
\omega(X_f, W) = A_i \dot{p}_i^W - B_i \dot{q}_i^W
$$

우변 ($df$를 $W$에 작용):

$$
df(W) = \frac{\partial f}{\partial p_i} \dot{p}_i^W + \frac{\partial f}{\partial q_i} \dot{q}_i^W
$$

$W$가 임의이므로 $\dot{q}_i^W$, $\dot{p}_i^W$ 각각의 계수를 비교하면:

$$
A_i = \frac{\partial f}{\partial p_i}, \qquad B_i = -\frac{\partial f}{\partial q_i}
$$

따라서:

$$
\boxed{X_f = \frac{\partial f}{\partial p_i}\frac{\partial}{\partial q_i} - \frac{\partial f}{\partial q_i}\frac{\partial}{\partial p_i}}
$$

### **해밀턴 역학과 시간의 역할:**
$H$에 대응하는 Hamiltonian vector field $X_H$는 특별한 의미를 가진다.

$$
X_H = \frac{\partial H}{\partial p_i}\frac{\partial}{\partial q_i} - \frac{\partial H}{\partial q_i}\frac{\partial}{\partial p_i}
$$

이것은 Hamilton의 운동방정식 $\dot{q}_i = \frac{\partial H}{\partial p_i}$, $\dot{p}_i = -\frac{\partial H}{\partial q_i}$ 그 자체다. 즉:
$$
X_H = \dot{q_i}\frac{\partial}{\partial q_i} + \dot{p_i}\frac{\partial}{\partial p_i}
$$

> $X_H$는 equation of motion의 soultion이 위상공간에서 그리는 흐름을 나타낸다!!!
> 시간은 위상공간의 좌표가 아니라, 이 흐름을 얼마나 따라갔는지를 재는 **매개변수(parameter)** 다.

위상공간 $(q_i, p_i)$의 한 점은 계의 어느 한 순간의 상태 하나를 나타낸다. 시간이 흐른다는 건 그 점이 $X_H$를 따라 궤적을 그린다는 것:

$$
t \mapsto (q_i(t),\, p_i(t))
$$

### $\{f, g\} = \omega(X_f, X_g)$ 확인

$$
\omega(X_f, X_g) = \sum_i \left( \frac{\partial f}{\partial p_i}\cdot\left(-\frac{\partial g}{\partial q_i}\right) - \left(-\frac{\partial f}{\partial q_i}\right)\cdot\frac{\partial g}{\partial p_i} \right) = \sum_i \left( \frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i} \right) = \{f, g\}
$$

**Poisson bracket은 symplectic form으로 측정한 두 Hamiltonian vector field 사이의 면적**이다.


즉, **Poisson bracket 구조를 보존한다 = $\omega$를 보존한다.**

Canonical transformation $(q,p) \to (Q,P)$의 정의는 바로 이것이다:

$$
\sum_i dQ_i \wedge dP_i = \sum_i dq_i \wedge dp_i
$$

---

## 2. Poincaré Lemma를 통한 generating function의 존재 증명

$\omega$가 보존된다는 것을 다르게 쓰면:

$$
\sum_i dq_i \wedge dp_i - \sum_i dQ_i \wedge dP_i = 0
$$

이것은 다음과 동치다:

$$
d\left( \sum_i p_i\, dq_i - \sum_i P_i\, dQ_i \right) = 0
$$

**왜 동치인가?** $d$의 두 가지 성질을 쓴다.

**성질 1 — Leibniz 규칙:** $f$가 스칼라 함수(0-form), $\alpha$가 1-form일 때:

$$
d(f \cdot \alpha) = df \wedge \alpha + f \cdot d\alpha
$$

**성질 2 — $d^2 = 0$:** 임의의 form $\alpha$에 대해 $d(d\alpha) = 0$.

이 두 성질로 $d(p_i\, dq_i)$를 계산하면:

$$
d(p_i\, dq_i) = dp_i \wedge dq_i + p_i \cdot d(dq_i) = dp_i \wedge dq_i + 0 = dp_i \wedge dq_i
$$

모든 $i$에 대해 더하고, wedge의 반대칭성 $dp_i \wedge dq_i = -dq_i \wedge dp_i$를 쓰면:

$$
d\!\left(\sum_i p_i\, dq_i\right) = \sum_i dp_i \wedge dq_i = -\sum_i dq_i \wedge dp_i
$$

마찬가지로 $d\!\left(\sum_i P_i\, dQ_i\right) = -\sum_i dQ_i \wedge dP_i$. 따라서:

$$
d\!\left(\sum_i p_i\, dq_i - \sum_i P_i\, dQ_i\right) = -\sum_i dq_i \wedge dp_i + \sum_i dQ_i \wedge dP_i
$$

이것이 $0$이라는 조건은 정확히 $\sum_i dq_i \wedge dp_i = \sum_i dQ_i \wedge dP_i$, 즉 $\omega$ 보존과 같다. $\blacksquare$

즉 1-form $\lambda = \sum_i p_i\, dq_i - \sum_i P_i\, dQ_i$ 가 **closed**하다. ($d\lambda = 0$)

**Poincaré Lemma:** 단순연결(simply connected) 공간에서 closed form은 exact하다. 즉 어떤 함수 $F$가 존재해서:

$$
\lambda = dF
$$

성분별로 쓰면:

$$
\sum_i p_i\, dq_i - \sum_i P_i\, dQ_i = dF(q, Q)
$$
$$
\frac{\partial F}{\partial q_i} = p_i
$$
$$
\frac{\partial F}{\partial Q_i} = - P_i
$$


이것이 $F_1(q, Q)$ 타입 generating function의 존재를 보장한다.

---

## 3. 작용과의 연결

위 식을 시간으로 적분하면:

$$
\int \left( p_i \dot{q}_i - P_i \dot{Q}_i \right) dt = \int \frac{dF}{dt}\, dt = F\Big|_{t_1}^{t_2}
$$

경계항은 변분에서 사라지므로($\delta F|_{t_1}^{t_2} = 0$), 두 라그랑지안은 동일한 작용 변분을 준다:

$$
p_i \dot{q}_i - H = Q_i \dot{P}_i - H' + \frac{dF}{dt}
$$

($P_i\dot{Q}_i$와 $Q_i\dot{P}_i$는 전미분 항 차이만 있어서 generating function의 타입에 따라 정리된다.)

---

## 3.5. $F_1$에서 $F_2$로 — Legendre Transform

Poincaré Lemma로 얻은 결과는 $q$와 $Q$가 독립변수인 $F_1$ 타입이었다:

$$
\sum_i p_i\, dq_i - \sum_i P_i\, dQ_i = dF_1(q, Q)
$$

독립변수를 $Q \to P$로 바꾸고 싶다면 — 즉 $F_2(q, P, t)$를 원한다면 — Legendre transform을 쓴다:

$$
F_2(q, P, t) \equiv F_1(q, Q, t) + \sum_i Q_i P_i
$$

양변에 $d$를 취하면:

$$
dF_2 = dF_1 + \sum_i P_i\, dQ_i + \sum_i Q_i\, dP_i
$$

$dF_1 = \sum_i p_i\, dq_i - \sum_i P_i\, dQ_i$를 대입하면 $\sum P_i\, dQ_i$ 항이 소거되어:

$$
\boxed{dF_2 = \sum_i p_i\, dq_i + \sum_i Q_i\, dP_i}
$$

이제 $F_2$의 독립변수가 $q$와 $P$로 바뀌었다. 계수비교하면:

$$
p_i = \frac{\partial F_2}{\partial q_i}, \qquad Q_i = \frac{\partial F_2}{\partial P_i}
$$

$F_3$, $F_4$도 마찬가지 방식이다. $\lambda = \sum p_i\, dq_i - \sum P_i\, dQ_i$에 적절한 항의 $d$를 더해서 원하는 독립변수 쌍으로 교환하는 것 — 이것이 Legendre transform의 본질이다.

| 타입 | Legendre 추가항 | 결과 1-form |
|------|----------------|-------------|
| $F_1(q,Q)$ | (없음) | $\sum p_i\,dq_i - \sum P_i\,dQ_i$ |
| $F_2(q,P)$ | $+\sum Q_i P_i$ | $\sum p_i\,dq_i + \sum Q_i\,dP_i$ |
| $F_3(p,Q)$ | $-\sum q_i p_i$ | $-\sum q_i\,dp_i - \sum P_i\,dQ_i$ |
| $F_4(p,P)$ | $-\sum q_i p_i + \sum Q_i P_i$ | $-\sum q_i\,dp_i + \sum Q_i\,dP_i$ |

---

## 4. Generating function의 네 가지 타입

$F$의 독립변수를 어떻게 고르느냐에 따라 네 가지 타입이 나온다. $p_i\, dq_i - P_i\, dQ_i = dF$를 Legendre transform으로 변수변환하면:

| 타입             | 독립변수         | 관계식                                                                                    |
| -------------- | ------------ | -------------------------------------------------------------------------------------- |
| $F_1(q, Q, t)$ | 옛 위치, 새 위치   | $p_i = \frac{\partial F_1}{\partial q_i}$, $P_i = -\frac{\partial F_1}{\partial Q_i}$  |
| $F_2(q, P, t)$ | 옛 위치, 새 운동량  | $p_i = \frac{\partial F_2}{\partial q_i}$, $Q_i = \frac{\partial F_2}{\partial P_i}$   |
| $F_3(p, Q, t)$ | 옛 운동량, 새 위치  | $q_i = -\frac{\partial F_3}{\partial p_i}$, $P_i = -\frac{\partial F_3}{\partial Q_i}$ |
| $F_4(p, P, t)$ | 옛 운동량, 새 운동량 | $q_i = -\frac{\partial F_4}{\partial p_i}$, $Q_i = \frac{\partial F_4}{\partial P_i}$  |


---

## 4.5. Generating Function의 물리적 의미

수학적으로는 "독립변수 선택"이지만, 물리적으로는 **"어느 공간의 언어로 변환을 기술하느냐"** 의 문제다.

### $F_1(q, Q, t)$ — 위치 → 위치

옛 위치 $q$와 새 위치 $Q$를 둘 다 지정하면, $F_1$이 그로부터 $p$와 $P$를 뱉어준다. 물리적 그림: **"입자가 $q$에서 출발해서 $Q$로 도착했다. 그 여정을 $F_1$이 기술한다."** 실제로 $F_1(q, Q, t)$는 위치 $q$에서 위치 $Q$까지 가는 고전적 작용(classical action)과 동일한 구조를 가지며, 경로적분의 propagator와 연결된다.

### $F_2(q, P, t)$ — 위치 기준, 새 운동량 생성

가장 실용적인 타입이다. 현재 위치 $q$를 기준으로, 새 운동량 $P$ 방향으로 변환을 기술한다. Identity transformation $F_2 = q_i P_i$와 infinitesimal transformation $F_2 = q_i P_i + \varepsilon G(q, P)$가 여기서 나오는 이유가 이것이다 — 위치 $q$에서 출발해서 새 운동량 $P$를 생성하는 방식이 **물리적 대칭과 보존량**을 기술하는 데 가장 자연스럽기 때문이다.

### $F_3(p, Q, t)$ — 운동량 → 위치, Fourier 유사 구조

옛 운동량 공간에서 출발해 새 위치 공간으로 가는 변환이다. **Fourier transform과 유사한 구조**를 가지며, 실제로 $p$-표현에서 $x$-표현으로 전환하는 것과 연결된다.

### $F_4(p, P, t)$ — 운동량 → 운동량

완전히 운동량 공간 안에서 노는 변환이다. 실용적으로는 가장 덜 쓰이지만, 운동량끼리 섞는 변환(예: 회전)을 기술할 때 등장한다.

### 요약표

| 타입 | 물리적 의미 | 대표 예시 |
|------|------------|----------|
| $F_1(q,Q)$ | 위치→위치, 고전적 propagator | 경로적분 |
| $F_2(q,P)$ | 위치 기준 infinitesimal 변환 | $G=p$ (translation), $G=L_z$ (rotation) |
| $F_3(p,Q)$ | 운동량→위치, Fourier 유사 | $x$-$p$ 표현 전환 |
| $F_4(p,P)$ | 운동량→운동량 변환 | 운동량 공간 회전 |

---

## 5. $H' = H + \frac{\partial F_2}{\partial t}$ 유도

$F_2(q_i, P_i, t)$로 놓으면 ($F_1$에서 $Q \to P$ Legendre transform):

$$
\sum_i p_i\, dq_i - \sum_i P_i\, dQ_i = dF_1 \quad \xrightarrow{\text{Legendre}} \quad \sum_i p_i\, dq_i + \sum_i Q_i\, dP_i = dF_2
$$

여기서 $F_2 = F_1 + \sum_i Q_i P_i$로 정의. 전미분을 전개하면:

$$
dF_2 = \frac{\partial F_2}{\partial q_i}dq_i + \frac{\partial F_2}{\partial P_i}dP_i + \frac{\partial F_2}{\partial t}dt
$$

$dq_i$, $dP_i$ 계수를 비교:

$$
p_i = \frac{\partial F_2}{\partial q_i}, \qquad Q_i = \frac{\partial F_2}{\partial P_i}
$$

시간 항까지 포함한 작용 조건 $p_i\dot{q}_i - H = Q_i\dot{P}_i - H' + \frac{dF_2}{dt}$에서 상수항 비교:

$$
\boxed{H' = H + \frac{\partial F_2}{\partial t}}
$$

---

## 핵심 요약

1. **Canonical transformation = symplectic 2-form $\omega$ 보존**
2. $\omega$ 보존 $\Rightarrow$ $\lambda = p\,dq - P\,dQ$ 가 closed
3. Poincaré Lemma $\Rightarrow$ generating function $F$ 존재
4. $F$의 독립변수 선택 → 4가지 타입
5. 각 타입에서 계수비교 → $p_i, Q_i, H'$ 의 관계식

# 궁금한 내용

**Q. Poisson bracket 안에 넣는 $f$, $g$가 스칼라 함수라면, 해석역학에서 $\{q_i, p_j\}$처럼 벡터처럼 보이는 것을 넣을 때는 어떻게 되는 건가?**

$f$와 $g$는 항상 스칼라 함수다. $q_i$나 $p_i$도 마찬가지 — 위상공간의 한 점 $(q, p)$를 받아서 그 점의 $i$번째 성분값을 돌려주는 스칼라 함수다:

$$
q_i : (q, p) \mapsto q_i \in \mathbb{R}
$$

벡터처럼 보이는 이유는 $i$ 인덱스가 여러 개이기 때문이고, 각각의 $q_i$, $p_i$는 개별적으로 스칼라 함수다. $i$는 함수의 라벨이지, 그 함수가 벡터라는 뜻이 아니다.

따라서 $\{q_i, p_j\} = \delta_{ij}$를 계산할 때도, 스칼라 함수 $q_i$와 $p_j$ 각각의 Hamiltonian vector field를 구해서 $\omega$에 넣는 것이다:

$$
X_{q_i} = \frac{\partial}{\partial p_i}, \qquad X_{p_j} = \frac{\partial}{\partial q_j}
$$
$$
\{q_i, p_j\} = \omega(X_{q_i}, X_{p_j}) = \delta_{ij}
$$

# AI의 보충 설명



# 연관 학습 노트

- [[QM lecture note - Position, Momentum, and Generators]]
# 같이 읽어보면 좋을 자료

[[MIT8_09F14_Chapter_4.pdf]]