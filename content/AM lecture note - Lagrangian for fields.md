---
title: "AM lecture note - Lagrangian for fields"
date: "2026-03-03"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
[[Analytical Mechanics]]
이것은 강의를 듣고 적은 필기입니다. 
정리가 안 되어 있고, 개인적인 생각이 섞여 있을 수도 있습니다.

# 지난 강의
[[AM lecture note - Lagrangian mechanics]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

## 라그랑주 역학 복습 — Action principle 유도

지난 시간, 뉴턴 역학을 라그랑지안으로 바꾸는 법을 배웠다.

$$
m\ddot{x} = -\frac{\partial V}{\partial x}
$$

이런 미분방정식으로 라그랑지안으로 표현하면

$$
\mathcal{L}[x, \dot{x}] = T(\dot{x}) - V(x) = \frac{m}{2}(\dot{x})^2 - V(x)
$$

**Action:**

$$
S = \int_{t_1}^{t_2} dt\ \mathcal{L}[x, \dot{x}]
$$

변분을 취하면:

$$
S + \delta S = \int_{t_1}^{t_2} dt\ \mathcal{L}[x + \delta x,\ \dot{x} + \delta\dot{x}]
$$

$$
= \int_{t_1}^{t_2} dt \left( \mathcal{L}(x, \dot{x}) + \frac{\partial \mathcal{L}}{\partial x}\delta x + \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta\dot{x} \right)
$$

따라서:

$$
\delta S = \int_{t_1}^{t_2} dt \left( \frac{\partial \mathcal{L}}{\partial x}\delta x + \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta\dot{x} \right)
$$

두 번째 항에 부분적분을 적용하면:

$$
= \int_{t_1}^{t_2} dt \left( \frac{\partial \mathcal{L}}{\partial x}\delta x \right) + \left[ \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta x \right]_{t_1}^{t_2} - \int_{t_1}^{t_2} dt \left( \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}}\delta x \right)
$$

Dirichlet boundary condition에 의해 경계 항은 0이므로:

$$
\delta S = \int_{t_1}^{t_2} dt \left( \frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}} \right) \delta x
$$

$\delta S = 0$ 이면 **라그랑주 방정식**:

$$
\frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}} = 0
$$

---

## Higher-order Lagrangian — $\ddot{q}$를 포함하는 경우

> [!note] 자체 풀이
> 아래 유도는 교수님이 생략하신 부분을 직접 계산한 것.

만약 라그랑지안이 아래 형태라면?

$$
\mathcal{L} = -\frac{1}{2}q\ddot{q} - V(q) = \frac{1}{2}\dot{q}^2 - V(q) - \frac{d}{dt}\left(\frac{1}{2}q\dot{q}\right)
$$

이 경우 equation of motion은 어떻게 될까?

라그랑지안을 $q$와 $\dot{q}$ 에 대한 함수로 보아야 하는가?

변분을 취하면:

$$
\delta \mathcal{L} = \frac{\partial \mathcal{L}}{\partial q}\delta q + \frac{\partial \mathcal{L}}{\partial \dot{q}}\delta\dot{q}
$$

$$
\int_{t_1}^{t_2} dt\ \delta\mathcal{L} = \int_{t_1}^{t_2} dt\ \frac{\partial \mathcal{L}}{\partial q}\delta q + \int_{t_1}^{t_2} \frac{\partial \mathcal{L}}{\partial \dot{q}}\delta\dot{q}
$$

두 번째 항을 두 번 부분적분하면:

$$
\int_{t_1}^{t_2} \frac{\partial \mathcal{L}}{\partial \dot{q}}\delta\dot{q} = \left[ \frac{\partial \mathcal{L}}{\partial \dot{q}}\delta\dot{q} \right]_{t_1}^{t_2} - \left[ \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right)\delta q \right]_{t_1}^{t_2} + \int_{t_1}^{t_2} dt\ \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right)\delta q
$$

경계조건: $\delta q(t_1) = \delta q(t_2) = 0$ 이고 $\delta\dot{q}(t_1) = \delta\dot{q}(t_2) = 0$ 이면 경계 항들이 사라진다.

따라서:

$$
\int_{t_1}^{t_2} dt\ \delta\mathcal{L} = \int_{t_1}^{t_2} dt \left[ \frac{\partial \mathcal{L}}{\partial q} + \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right) \right]\delta q
$$

**Equation of motion:**

$$
\frac{\partial \mathcal{L}}{\partial q} + \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right) = 0
$$

풀어보면 ($\mathcal{L} = -\frac{1}{2}q\ddot{q} - V(q)$):

$$
\frac{\partial \mathcal{L}}{\partial q} = -\frac{1}{2}\ddot{q} - \frac{\partial V}{\partial q}, \quad \frac{\partial \mathcal{L}}{\partial \dot{q}} = -\frac{1}{2}q
$$

$$
\frac{\partial \mathcal{L}}{\partial q} + \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right) = -\frac{1}{2}\ddot{q} - \frac{\partial V}{\partial q} - \frac{1}{2}\ddot{q} = -\ddot{q} - \frac{\partial V}{\partial q} = 0
$$

**원래 방정식과 같다!**

---

## Total derivative와 action의 관계

> [!note] 자체 풀이
> 아래 분석은 직접 계산한 것.

$\mathcal{L}$이 아래 형태일 때:

$$
\mathcal{L} = \frac{1}{2}\dot{q}^2 - V(q) - \frac{d}{dt}\left(\frac{1}{2}q\dot{q}\right)
$$

이 형태로 풀게 된다면, action은:

$$
S = \int_{t_1}^{t_2} dt\ \mathcal{L} = \int_{t_1}^{t_2} dt \left[\frac{1}{2}\dot{q}^2 - V(q) - \frac{d}{dt}\left(\frac{1}{2}q\dot{q}\right)\right]
$$

$$
= \int_{t_1}^{t_2} dt \left[\frac{1}{2}\dot{q}^2 - V(q)\right] - \left[\frac{1}{2}q\dot{q}\right]_{t_1}^{t_2}
$$

경계에서 $\delta q = 0$, $\delta\dot{q} = 0$ 이라는 조건이 있다면,

$$
= \int_{t_1}^{t_2} dt \left[\frac{1}{2}\dot{q}^2 - V(q)\right] + \text{constant}
$$

→ **시간에 대한 total derivative는 equation of motion에 영향을 주지 않지만, boundary condition에 유도관여하게 된다.**

---

## 어떤 미분방정식이든 라그랑지안으로 나타낼 수 있다

> [!note] 자체 풀이
> 아래 두 예제(wave equation, Schrödinger equation)는 강의에서 결과만 제시되었고, 유도 과정은 직접 계산한 것.

### Example 1. Wave equation

$$
\dot{y} = \frac{\partial y}{\partial t}, \quad y' = \frac{\partial y}{\partial x}
$$

Wave equation:

$$
\ddot{y} - c^2 y'' = 0
$$

이에 대응하는 라그랑지안:

$$
\mathcal{L} = \frac{1}{2}(\dot{y}^2 - c^2 y'^2)
$$

$\mathcal{L}$은 이제 $y$, $\dot{y}$, $y'$의 함수이다.

Wave equation의 solution의 world line은 $(t, x, y)$의 공간에 그려진다. $y$는 $x$와 $t$의 함수이므로, $\mathcal{L}$의 변분은:

$$
\delta\mathcal{L} = \left(\frac{\partial\mathcal{L}}{\partial y}\right)\delta y + \left(\frac{\partial\mathcal{L}}{\partial \dot{y}}\right)\delta\dot{y} + \left(\frac{\partial\mathcal{L}}{\partial y'}\right)\delta y'
$$

Action의 변분은, 계산할 때 $t$와 $x$에 대해 적분해야 한다:

$$
\delta S = \int_{x_1}^{x_2}\int_{t_1}^{t_2} dx\, dt \left[\left(\frac{\partial\mathcal{L}}{\partial y}\right)\delta y + \left(\frac{\partial\mathcal{L}}{\partial \dot{y}}\right)\delta\dot{y} + \left(\frac{\partial\mathcal{L}}{\partial y'}\right)\delta y'\right]
$$

마지막 두 term에 부분적분을 시행:

$$
\int_{x_1}^{x_2}\int_{t_1}^{t_2} dx\,dt \left[\frac{\partial\mathcal{L}}{\partial \dot{y}}\delta\dot{y}\right] = -\int_{x_1}^{x_2}\int_{t_1}^{t_2} dx\,dt \left[\frac{\partial}{\partial t}\frac{\partial\mathcal{L}}{\partial \dot{y}}\delta y\right] + \int_{x_1}^{x_2} dx\left[\frac{\partial\mathcal{L}}{\partial \dot{y}}\delta y\right]_{t=t_1}^{t=t_2}
$$

마지막 term은 $\delta y$가 각 boundary에서 0이면 사라진다.

$$
\int_{t_1}^{t_2}\int_{x_1}^{x_2} dt\,dx \left[\frac{\partial\mathcal{L}}{\partial y'}\delta y'\right] = -\int_{t_1}^{t_2}\int_{x_1}^{x_2} dt\,dx \left[\frac{\partial}{\partial x}\frac{\partial\mathcal{L}}{\partial y'}\delta y\right] + \int_{t_1}^{t_2} dt\left[\frac{\partial\mathcal{L}}{\partial y'}\delta y\right]_{x=x_1}^{x=x_2}
$$

마지막 term은 $\delta y$가 각 $x$-boundary에서 0이면 사라진다.

정리하면:

$$
\delta S = \int_{x_1}^{x_2}\int_{t_1}^{t_2} dt\,dx \left[\frac{\partial\mathcal{L}}{\partial y} - \frac{\partial}{\partial t}\frac{\partial\mathcal{L}}{\partial \dot{y}} - \frac{\partial}{\partial x}\frac{\partial\mathcal{L}}{\partial y'}\right]\delta y
$$

$\delta S = 0$일 때 **라그랑주 방정식 (field 버전)**:

$$
\frac{\partial\mathcal{L}}{\partial y} - \frac{\partial}{\partial t}\frac{\partial\mathcal{L}}{\partial \dot{y}} - \frac{\partial}{\partial x}\frac{\partial\mathcal{L}}{\partial y'} = 0
$$

$\mathcal{L} = \frac{1}{2}(\dot{y}^2 - c^2 y'^2)$을 대입하면 wave equation이 나온다. ✓

---

### Example 2. Schrödinger equation

$$
i\hbar \frac{\partial}{\partial t}\psi = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\psi
$$

여기서도 world line은 $t$, $x$, $\psi$의 공간에 그려지며, 라그랑지안은 $\psi$, $\dot{\psi}$, $\psi'$의 함수이다.

라그랑주 equation은 wave equation의 경우와 동일:

$$
\frac{\partial\mathcal{L}}{\partial \psi} - \frac{\partial}{\partial t}\frac{\partial\mathcal{L}}{\partial \dot{\psi}} - \frac{\partial}{\partial x}\frac{\partial\mathcal{L}}{\partial \psi'} = 0
$$

라그랑지안은 이렇게 주어진다:

$$
\mathcal{L} = \psi^* i\hbar \dot{\psi} + \frac{\hbar^2}{2m}(\psi')^*\psi'
$$

# 궁금한 내용

### Total derivative와 boundary condition의 관계
필기에서 "boundary condition에 유도관여하게 된다"고 했는데, 구체적으로 어떤 식으로 영향을 주는 건지 잘 모르겠다.

### Higher-order Lagrangian의 경계조건
$\delta\dot{q}(t_1) = \delta\dot{q}(t_2) = 0$이라는 조건은 어디서 오는 것인가? 표준 라그랑지안에서는 $\delta q = 0$만 요구했는데.

### 슈뢰딩거 라그랑지안
$\mathcal{L} = \psi^* i\hbar \dot{\psi} + \frac{\hbar^2}{2m}(\psi')^*\psi'$ — 이게 어떻게 슈뢰딩거 방정식을 주는지 직접 확인해보기.

# AI의 보충 설명


# 연관 학습 노트

[[Lagrangian Mechanics]]
[[AM lecture note - Lagrangian mechanics]]

# References

Tong의 강의록
[[2 The Lagrangian Formalism.pdf]]

# 다음 강의

