---
title: AM lecture note - Generating function
date: "2026-04-14"
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

[[AM lecture note - Canonical transformation]]에서 심플렉틱 조건, Poisson bracket의 불변성, infinitesimal canonical transformation과 generating function의 개념을 다뤘다.

# 오늘의 핵심

Canonical transformation은 변환 전후 라그랑지안이 **total derivative** 만큼 차이 나도 된다는 사실로부터, generating function $F$를 정의할 수 있다. $F$의 독립변수 선택에 따라 $F_1, F_2, F_3, F_4$의 네 가지 형태가 있으며, 이들 사이는 Legendre 변환으로 연결된다.

- **$F_1(q, Q)$:** $\dfrac{\partial F_1}{\partial q_i} = p_i$, $\dfrac{\partial F_1}{\partial Q_i} = -P_i$
- **$F_2(q, P)$:** $\dfrac{\partial F_2}{\partial q_i} = p_i$, $\dfrac{\partial F_2}{\partial P_i} = Q_i$
- **$F_3(p, Q)$:** $\dfrac{\partial F_3}{\partial p_i} = -q_i$, $\dfrac{\partial F_3}{\partial Q_i} = -P_i$
- **$F_4(p, P)$:** $\dfrac{\partial F_4}{\partial p_i} = -q_i$, $\dfrac{\partial F_4}{\partial P_i} = Q_i$

그리고 Hamilton-Jacobi 방정식은 $F_2$를 generating function으로 사용할 때 새로운 해밀토니안 $K = 0$이 되는 조건에서 유도된다.

# 필기 내용

## Generating function의 정의

Canonical transform에 쓰이는 generating function은 변환 전후 라그랑지안의 관계를 나타낸다:

$$
q_i \longrightarrow Q_i, \quad p_i \longrightarrow P_i, \quad \mathcal{H}(q_i, p_i) \longrightarrow K(Q_i, P_i)
$$

라그랑지안에 시간에 대한 total derivative term이 들어가도 equation of motion이 달라지지 않는다는 것을 안다. 따라서 변환 전후 라그랑지안 $L(q, \dot{q}, t)$와 $L'(Q, \dot{Q}, t)$는 total derivative 만큼 차이 나도 괜찮다. 이 차이가 바로 generating function의 시간 미분이다.

$$
L(q, \dot{q}, t) = p_i \dot{q}_i - \mathcal{H}(q_i, p_i)
$$

$$
L'(Q, \dot{Q}, t) = P_i \dot{Q}_i - K(Q_i, P_i) + \frac{d}{dt}F
$$

---

## $F_1(q, Q)$: $q$와 $Q$의 함수

예를 들어, $F$가 $q$와 $Q$의 함수라고 하자.

$$
\frac{d}{dt}F_1 = \frac{\partial F_1}{\partial q_i}\dot{q}_i + \frac{\partial F_1}{\partial Q_i}\dot{Q}_i + \frac{\partial F_1}{\partial t}
$$

이를 대입하고 $L = L'$이라 하면:

$$
p_i \dot{q}_i - \mathcal{H} = P_i \dot{Q}_i - K + \frac{\partial F_1}{\partial q_i}\dot{q}_i + \frac{\partial F_1}{\partial Q_i}\dot{Q}_i + \frac{\partial F_1}{\partial t}
$$

$$
\left(p_i - \frac{\partial F_1}{\partial q_i}\right)\dot{q}_i - \mathcal{H} = \left(P_i + \frac{\partial F_1}{\partial Q_i}\right)\dot{Q}_i - K + \frac{\partial F_1}{\partial t}
$$

따라서:

$$
\frac{\partial F_1}{\partial q_i} = p_i, \qquad \frac{\partial F_1}{\partial Q_i} = -P_i, \qquad K = \mathcal{H} - \frac{\partial F_1}{\partial t}
$$

$F_1(q, Q)$에서 $p_i$는 $q$와 $Q_i$에 대한 함수이고, $P_i$ 또한 $q$와 $Q_i$에 대한 함수이다.

이 generating function이 canonical transform을 나타낸다면, Poisson bracket의 성질을 유지해야 할 것이다:

$$
\{Q, P\} = \left.\frac{\partial Q}{\partial q}\right|_p \left.\frac{\partial P}{\partial p}\right|_q - \left.\frac{\partial Q}{\partial p}\right|_q \left.\frac{\partial P}{\partial q}\right|_p
$$

$P$는 $q$와 $Q$에 대한 함수이고, $p$ 또한 $q$와 $Q$에 대한 함수이므로, $\dfrac{\partial P}{\partial p}$를 바로 계산할 수 없다. $P(z, Q)$와 $p(z, Q)$이므로 chain rule을 이용해 편미분을 계산해야 한다.

$$
\left.\frac{\partial P}{\partial p}\right|_q = \left.\frac{\partial P}{\partial Q}\right|_q \left.\frac{\partial Q}{\partial p}\right|_q
$$

$$
\left.\frac{\partial P}{\partial q}\right|_p = \left.\frac{\partial P}{\partial q}\right|_Q + \left.\frac{\partial P}{\partial Q}\right|_q \left.\frac{\partial Q}{\partial q}\right|_p
$$

계산을 전개하면:

$$
\{Q, P\} = \left.\frac{\partial Q}{\partial q}\right|_p \left.\frac{\partial P}{\partial Q}\right|_q \left.\frac{\partial Q}{\partial p}\right|_q - \left.\frac{\partial Q}{\partial p}\right|_q \left.\frac{\partial P}{\partial Q}\right|_q \left.\frac{\partial Q}{\partial q}\right|_p + \left.\frac{\partial Q}{\partial p}\right|_q \left.\frac{\partial P}{\partial q}\right|_Q
$$

$$
= \left.\frac{\partial Q}{\partial p}\right|_q \left.\frac{\partial P}{\partial q}\right|_Q = \frac{\partial^2 F_1}{\partial Q\, \partial q} \cdot \left.\frac{\partial Q}{\partial p}\right|_q = \left.\frac{\partial p}{\partial P}\right|_Q \cdot \left.\frac{\partial P}{\partial p}\right|_Q = 1
$$

정말 복잡하지만 놀라운 관계다.

---

## $F_2(q, P)$: 가장 많이 쓰이는 generating function

보통 많이 쓰이는 generating function은 $F_2(q, P)$이다. 이 경우에도 정리해 보면:

$$
\frac{dF_2}{dt} = \frac{\partial F_2}{\partial q_i}\dot{q}_i + \frac{\partial F_2}{\partial P_i}\dot{P}_i + \frac{\partial F_2}{\partial t}
$$

$\dot{Q}_i$ 대신 $\dot{P}_i$가 필요하므로:

$$
P_i \dot{Q}_i = \frac{d}{dt}(P_i Q_i) - Q_i \dot{P}_i
$$

를 이용한다. 대입하면:

$$
p_i \dot{q}_i - \mathcal{H} = P_i \dot{Q}_i - K + \frac{dF_2}{dt}
$$

$$
\left(p_i - \frac{\partial F_2}{\partial q_i}\right)\dot{q}_i - \mathcal{H} = \left(\frac{\partial F_2}{\partial P_i} - Q_i\right)\dot{P}_i - K + \frac{\partial F_2}{\partial t} + \frac{d}{dt}(P_i Q_i)
$$

따라서:

$$
\frac{\partial F_2}{\partial q_i} = p_i, \qquad \frac{\partial F_2}{\partial P_i} = Q_i, \qquad K = \mathcal{H} + \frac{\partial F_2}{\partial t}
$$

이제 $P$와 $Q$는 $q$와 $P$에 대한 함수.

$$
\{Q, P\} = \left.\frac{\partial Q}{\partial q}\right|_p \left.\frac{\partial P}{\partial p}\right|_q - \left.\frac{\partial Q}{\partial p}\right|_q \left.\frac{\partial P}{\partial q}\right|_p
$$

$$
\left.\frac{\partial Q}{\partial q}\right|_p = \left.\frac{\partial Q}{\partial q}\right|_p + \left.\frac{\partial Q}{\partial P}\right|_q \left.\frac{\partial P}{\partial q}\right|_p
$$

$$
\left.\frac{\partial Q}{\partial p}\right|_q = \left.\frac{\partial Q}{\partial P}\right|_q \left.\frac{\partial P}{\partial p}\right|_q
$$

대입하면:

$$
\{Q, P\} = \left.\frac{\partial Q}{\partial q}\right|_p \left.\frac{\partial P}{\partial p}\right|_q + \left.\frac{\partial Q}{\partial P}\right|_q \left.\frac{\partial P}{\partial q}\right|_p \left.\frac{\partial P}{\partial p}\right|_q - \left.\frac{\partial Q}{\partial P}\right|_q \left.\frac{\partial P}{\partial p}\right|_q \left.\frac{\partial P}{\partial q}\right|_p
$$

$$
= \left.\frac{\partial Q}{\partial q}\right|_p \left.\frac{\partial P}{\partial p}\right|_q = \frac{\partial^2 F_2}{\partial q\, \partial P} \cdot \left.\frac{\partial P}{\partial p}\right|_q = \frac{\partial P}{\partial P} \cdot \frac{\partial P}{\partial p} = 1
$$

---

## $F_3(p, Q)$, $F_4(p, P)$

이 외에도 $p$와 $Q$를 변수로 생각한 $F_3(p, Q)$, $p$와 $P$를 변수로 생각한 $F_4(p, P)$도 생각할 수 있다. 같은 canonical transform을 나타내는 $F_1, F_2, F_3, F_4$ 사이는 **Legendre 변환의 관계**이다.

---

## Legendre 변환 관계 (네 generating function 사이)

| | $q$ | $p$ |
|---|---|---|
| $Q$ | $F_1(q, Q)$ | $F_3(p, Q)$ |
| $P$ | $F_2(q, P)$ | $F_4(p, P)$ |
![[Pasted image 20260414172051.png]]

Legendre 변환 관계도는 다음과 같다:

$$
F_2 = F_1 - Q\frac{\partial F_1}{\partial Q} = F_1 + QP
$$

$$
dF_2 = dF_1 + d(QP) \implies \frac{\partial F_2}{\partial q} = \frac{\partial F_1}{\partial q},\quad \frac{\partial F_2}{\partial Q} = -P,\quad \frac{\partial F_2}{\partial P} = Q
$$

$$
F_3 = F_1 - q\frac{\partial F_1}{\partial q} = F_1 - qp
$$

$$
dF_3 = dF_1 - d(qp) \implies \frac{\partial F_3}{\partial p} = p,\quad \frac{\partial F_3}{\partial Q} = \frac{\partial F_1}{\partial Q},\quad \frac{\partial F_3}{\partial p} = -q
$$

$F_2$와 $F_4$의 변환, $F_3$과 $F_4$의 변환도 같은 방식으로 보일 수 있다.

---

## Generator와 generating function의 관계

$F_2(q, P, t) = q_i P_i + \varepsilon G_j(q, p)$로 놓으면:

$$
p_j = \frac{\partial F_2}{\partial q_j} = P_j + \varepsilon \frac{\partial G}{\partial q_j}, \qquad \delta p_j = P_j - p_j = -\varepsilon \frac{\partial G}{\partial q_j}
$$

$$
Q_j = \frac{\partial F_2}{\partial P_j} = q_j + \varepsilon \frac{\partial G}{\partial p_j}, \qquad \delta q_j = Q_j - q_j = \varepsilon \frac{\partial G}{\partial p_j}
$$

$G$가 보존되는 경우, generating function은 무엇인가? $G = L$… (필기 일부 불명확)

---

## Canonical coordinate로 해밀턴 방정식 푸는 법

$\dot{Q}_i = 0$, $\dot{P}_i = 0$을 만족하는 변환을 찾으면 된다:

$$
\begin{cases} \dot{Q}_i = \dfrac{\partial K(Q,P)}{\partial P} = 0 \\[6pt] \dot{P}_i = -\dfrac{\partial K(Q,P)}{\partial Q} = 0 \end{cases}
$$

즉, $K = 0$이거나 상수여야 한다.

$F_2$를 사용하는 경우:

$$
K(Q, P, t) = \mathcal{H} + \frac{\partial F_2(q, P, t)}{\partial t} = 0
$$

$P = \dfrac{\partial F_2}{\partial q}$를 대입하면:

$$
\mathcal{H}\!\left(q,\, \frac{\partial F_2}{\partial q},\, t\right) + \frac{\partial F_2}{\partial t} = 0
$$

이것이 바로 **Hamilton-Jacobi 방정식**이다. → 내가 원래 알던 해밀턴-야코비 장정식과 이것이 대체 왜 동일한 건지 모르겠다. 

해밀턴-야코비 방정식은 원기둥 좌표계의 eigon function이고, 이건 원기둥 좌표의 대칭성과 카시미어에 의해 결정된다.

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

[[AM lecture note - Canonical transformation]]

# References

David Tong, *Classical Dynamics* (Cambridge lecture notes)

# 다음 강의

[[AM lecture note - Symplectic geometry intro]]

# 필기 원본

![[AM_5thweek_3.pdf]]
