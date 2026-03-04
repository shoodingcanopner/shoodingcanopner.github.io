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
테일러 전개
$$
= \int_{t_1}^{t_2} dt \left( \mathcal{L}(x, \dot{x}) + \frac{\partial \mathcal{L}}{\partial x}\delta x + \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta\dot{x} \right)
$$

따라서:

$$
\delta S = \int_{t_1}^{t_2} dt \left( \frac{\partial \mathcal{L}}{\partial x}\delta x + \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta\dot{x} \right)
$$

적분 속 두 번째 항에 부분적분을 적용하면:

$$
\int_{t_1}^{t_2} dt \left(  \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta\dot{x} \right) = \left[ \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta x \right]_{t_1}^{t_2} - \int_{t_1}^{t_2} dt \left( \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}}\delta x \right)
$$

Dirichlet boundary condition에 의해 $t_1$과  $t_2$에서 $\delta x$는 0이므로, $\left[ \frac{\partial \mathcal{L}}{\partial \dot{x}}\delta x \right]_{t_1}^{t_2}$는 0이 되어 사라진다.
풀어낸 결과를 본래 식에 적용하면. 

$$
\delta S = \int_{t_1}^{t_2} dt \left( \frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}} \right) \delta x
$$

최소 작용이라면 엑션이 극값을 가지므로 $\delta S = 0$ 이다.
그러면 **라그랑주 방정식**이 나온다. 

$$
\frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}} = 0
$$

---

## Higher-order Lagrangian — $\ddot{q}$를 포함하는 경우


만약 라그랑지안이 아래 형태라면?

$$
\mathcal{L} = -\frac{1}{2}q\ddot{q} - V(q) = \frac{1}{2}\dot{q}^2 - V(q) - \frac{d}{dt}\left(\frac{1}{2}q\dot{q}\right)
$$

이 경우 equation of motion은 어떻게 될까?
$\mathcal{L}[x, \dot{x}] = T(\dot{x}) - V(x) = \frac{m}{2}(\dot{x})^2 - V(x)$ 이었을 때와 똑같이 나온다. 
왜냐면 라그랑지안에 붙은 시간에 대한 전미분 항은 equation of motion을 변화시키지 않기 때문이다. 왜 그런지 직접 풀어보겠다. 

> [!note] 자체 풀이
> 아래 유도는 수업에서 생략된 부분을 직접 계산한 것.

$\mathcal{L} = -\frac{1}{2}q\ddot{q}$일 때 라그랑주 방정식을 직접 구해보자. 

이 경우 라그랑지안을 $q$와 $\ddot{q}$ 에 대한 함수로 보아야 하는 것 같다. 

변분을 취하면:

$$
\delta \mathcal{L} = \frac{\partial \mathcal{L}}{\partial q}\delta q + \frac{\partial \mathcal{L}}{\partial \ddot{q}}\delta\ddot{q}
$$

$$
\int_{t_1}^{t_2} dt\ \delta\mathcal{L} = \int_{t_1}^{t_2} dt\ \frac{\partial \mathcal{L}}{\partial q}\delta q + \int_{t_1}^{t_2} \frac{\partial \mathcal{L}}{\partial \ddot{q}}\delta\ddot{q}
$$

두 번째 항을 두 번 부분적분하면:

$$
\int_{t_1}^{t_2} \frac{\partial \mathcal{L}}{\partial \ddot{q}}\delta\ddot{q} = \left[ \frac{\partial \mathcal{L}}{\partial \ddot{q}}\delta\dot{q} \right]_{t_1}^{t_2} - \left[ \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \ddot{q}}\right)\delta q \right]_{t_1}^{t_2} + \int_{t_1}^{t_2} dt\ \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \ddot{q}}\right)\delta q
$$

경계조건: $\delta q(t_1) = \delta q(t_2) = 0$ 이고 $\delta\dot{q}(t_1) = \delta\dot{q}(t_2) = 0$ 이면 경계 항들이 사라진다.

$\delta\dot{q}(t_1) = \delta\dot{q}(t_2) = 0$ 이어야 한다는 조건들은 라그랑지안이 $\mathcal{L}[x, \dot{x}] = \frac{m}{2}(\dot{x})^2$ 였을 때는 필요 없었던 경계 조건이다. 

따라서:

$$
\int_{t_1}^{t_2} dt\ \delta\mathcal{L} = \int_{t_1}^{t_2} dt \left[ \frac{\partial \mathcal{L}}{\partial q} + \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \ddot{q}}\right) \right]\delta q
$$

**Equation of motion:**

$$
\frac{\partial \mathcal{L}}{\partial q} + \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \ddot{q}}\right) = 0
$$

풀어보면 ($\mathcal{L} = -\frac{1}{2}q\ddot{q} - V(q)$):

$$
\frac{\partial \mathcal{L}}{\partial q} = -\frac{1}{2}\ddot{q} - \frac{\partial V}{\partial q}, \quad \frac{\partial \mathcal{L}}{\partial \ddot{q}} = -\frac{1}{2}q
$$

$$
\frac{\partial \mathcal{L}}{\partial q} + \frac{d^2}{dt^2}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right) = -\frac{1}{2}\ddot{q} - \frac{\partial V}{\partial q} - \frac{1}{2}\ddot{q} = -\ddot{q} - \frac{\partial V}{\partial q} = 0
$$

**원래 방정식과 같다!**

---

## Total derivative와 action의 관계

> [!note] 자체 풀이
> 아래 분석은 직접 계산한 것.

라그랑지안에 붙은 시간에 대한 전미분 항은 equation of motion을 변화시키지 않는 이유는 간단하다. 액션에 상수항을 추가하는 기능을 하기 때문이다. 

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

결론 (강의에서 들은 메시지): **시간에 대한 total derivative는 equation of motion에 영향을 주지 않지만, boundary condition에 관여하게 된다.**

---

## 어떤 미분방정식이든 라그랑지안으로 나타낼 수 있다

> [!note] 자체 풀이
> 아래 두 예제(wave equation, Schrödinger equation)는 강의에서 결과만 제시되었고, 유도 과정은 직접 계산한 것.

### Example 1. 1D Wave equation

$$
\dot{y} = \frac{\partial y}{\partial t}, \quad y' = \frac{\partial y}{\partial x}
$$

Wave equation: (c는 빛의 속도 아니면 파동의 속도)

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

Action의 변분은, 계산할 때 $t$와 $x$에 대해 적분해야 한다. 왜냐면 (아마도) world line이 $(t, x, y)$의 공간에 있으니까.

$$
\delta S = \int_{x_1}^{x_2}\int_{t_1}^{t_2} dx\, dt \left[\left(\frac{\partial\mathcal{L}}{\partial y}\right)\delta y + \left(\frac{\partial\mathcal{L}}{\partial \dot{y}}\right)\delta\dot{y} + \left(\frac{\partial\mathcal{L}}{\partial y'}\right)\delta y'\right]
$$

마지막 두 term에 부분적분을 시행하여 정리한다. 

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
---

# 궁금한 내용
### Higher-order Lagrangian의 경계조건
$\delta\dot{q}(t_1) = \delta\dot{q}(t_2) = 0$이라는 조건은 어디서 오는 것인가? 표준 라그랑지안에서는 $\delta q = 0$만 요구했는데.
→ 당연히 world line에서 경로의 시작과 끝의 위상은 고정이라는 조건에서 주어지는 것 아닐까?

### 슈뢰딩거 라그랑지안
$\mathcal{L} = \psi^* i\hbar \dot{\psi} + \frac{\hbar^2}{2m}(\psi')^*\psi'$ — 이게 어떻게 슈뢰딩거 방정식을 주는지 직접 확인해보기.

# AI의 보충 설명

## Higher-order Lagrangian의 경계조건 — $\delta\dot{q} = 0$은 어디서 오는가?

사용자자의 직관 — "world line의 시작과 끝 위치가 고정된다는 조건" — 은 **절반만 맞다.**

"위치 고정" → $\delta q(t_1) = \delta q(t_2) = 0$ 은 맞다. 그런데 **위치가 고정된다고 해서 속도까지 자동으로 고정되지는 않는다.** 두 끝점이 같더라도 그 점에 도달하는 속도는 얼마든지 다를 수 있기 때문이다.

수학적으로: $\delta q = 0$이지만 $\delta\dot{q} \neq 0$인 변분은 얼마든지 존재한다.

그러면 $\delta\dot{q} = 0$은 어디서 오는가? 표준 라그랑지안 $\mathcal{L}(q, \dot{q})$에서는 부분적분이 **한 번**이므로 경계 항이

$$
\left[\frac{\partial\mathcal{L}}{\partial \dot{q}}\delta q\right]_{t_1}^{t_2}
$$

이고, $\delta q = 0$만으로 충분했다. 그런데 $\mathcal{L}(q, \ddot{q})$처럼 higher-order가 들어오면 **두 번** 부분적분이 필요하고, 경계 항이 두 개가 생긴다:

$$
\left[\frac{\partial\mathcal{L}}{\partial\ddot{q}}\delta\dot{q}\right]_{t_1}^{t_2} - \left[\frac{d}{dt}\frac{\partial\mathcal{L}}{\partial\ddot{q}}\delta q\right]_{t_1}^{t_2}
$$

두 번째 항은 $\delta q = 0$으로 사라지지만, **첫 번째 항은 $\delta\dot{q} = 0$이라는 별도의 조건 없이는 사라지지 않는다.**

즉, $\delta\dot{q} = 0$은 위치 고정에서 자동으로 따라오는 게 아니라, higher-order Lagrangian에서 변분법이 작동하려면 **추가로 부과해야 하는 경계조건**이다.

**이것이 왜 문제인가 — Ostrogradsky instability**

표준 라그랑지안은 경계에서 위치만 고정하면 됐다. Higher-order가 들어오면 위치 + 속도를 동시에 고정해야 한다. 이는 사실상 초기조건을 통째로 경계에서 묶는다는 뜻이고, 더 심각하게는 이런 이론은 **에너지가 아래로 무한히 내려가는 불안정성(Ostrogradsky instability)** 을 가진다. 이것이 물리학에서 가능하면 higher-order를 피하고 $\mathcal{L}(q, \dot{q})$ 형태로 쓰는 것을 선호하는 이유이다.

사용자의 필기에서 나온 결론 — $\mathcal{L} = -\frac{1}{2}q\ddot{q}$와 $\mathcal{L} = \frac{1}{2}\dot{q}^2$이 total derivative 하나 차이라는 것 — 이 사실 중요한 이유가 여기 있다. 물리적으로 동등하지만, 후자가 경계조건도 단순하고 안정적이다.


# 연관 학습 노트

[[Lagrangian Mechanics]]
[[AM lecture note - Lagrangian mechanics]]

# References

Tong의 강의록
[[2 The Lagrangian Formalism.pdf]]

# 다음 강의


# 손 필기 이미지

![[Pasted image 20260304093446.png]]
![[Pasted image 20260304093456.png]]![[Pasted image 20260304093500.png]]
![[Pasted image 20260304093512.png]]![[Pasted image 20260304093530.png]]