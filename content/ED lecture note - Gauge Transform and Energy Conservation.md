---
title: "ED lecture note - Gauge Transform and Energy Conservation"
date: "2026-03-11"
subject: physics
tags:
  - study
  - lecture_notes
  - electrodynamics
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]]강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[ED lecture note - Faraday Maxwell Potentials]]

# 오늘의 핵심

- **Gauge Transform**: 물리적으로 측정 가능한 E, B는 변하지 않으면서 포텐셜 $\phi$, $\mathbf{A}$를 임의의 스칼라 함수 $\Lambda$로 변환할 수 있다.

- **Lorenz Condition**
$$
\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \phi}{\partial t} = 0
$$ 을 만족하는 게이지. $\phi$와 $\mathbf{A}$가 분리된 파동방정식 형태가 된다.

- **Coulomb Gauge** 
$$
\nabla \cdot \mathbf{A} = 0
$$
을 만족하는 게이지. $\phi$는 instantaneous Coulomb potential이 된다.

- **Poynting Vector** 
$$
\mathbf{S} = \mathbf{E} \times \mathbf{H}
$$
는 에너지 흐름(energy flux)을 의미한다.

- **Gauge dependence\independence**
게이지 변환에 독립적인 값만 물리적(실제적)인 의미를 가진다. 

# 필기 내용

## 복습: 포텐셜로부터 맥스웰 방정식

지난 시간, 포텐셜에 대해 배웠다.

$$
\mathbf{B} = \nabla \times \mathbf{A}
$$

$$
\mathbf{E} = -\nabla\phi - \frac{\partial \mathbf{A}}{\partial t}
$$

이걸 맥스웰 방정식에 적용해 보자.

$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$ 에 대입하면:

$$
\nabla \cdot \left(-\nabla\phi - \frac{\partial \mathbf{A}}{\partial t}\right) = \frac{\rho}{\epsilon_0}
$$

$\nabla \times \mathbf{B} = \frac{1}{c^2}\frac{\partial \mathbf{E}}{\partial t} + \mu_0 \mathbf{J}$ 에 대입하면:

$$
\nabla \times (\nabla \times \mathbf{A}) - \frac{1}{c^2}\frac{\partial}{\partial t}\left(-\nabla\phi - \frac{\partial \mathbf{A}}{\partial t}\right) = \mu_0 \mathbf{J}
$$

이걸 정리할 때, 항등식 $\nabla \times (\nabla \times \mathbf{A}) = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A}$ 를 이용.

정리하면:

$$
\nabla^2 \phi + \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = -\frac{\rho}{\epsilon_0}
$$
$$
\nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} - \nabla\left(\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \phi}{\partial t}\right) = -\mu_0 \mathbf{J}
$$

이건 $\phi$와 $\mathbf{A}$가 뒤섞여 있어 풀기에 더럽다.

---

## Gauge Transform

오늘의 주제. 어떤 scalar field $\Lambda$가 있다.

$$
\mathbf{A} \to \mathbf{A}' = \mathbf{A} + \nabla\Lambda
$$

$$
\phi \to \phi' = \phi - \frac{\partial \Lambda}{\partial t}
$$

이런 변환이 괜찮은 이유는, $\mathbf{A}'$와 $\phi'$에서 유래한 $\mathbf{B}$와 $\mathbf{E}$가 $\mathbf{A}$와 $\phi$의 것과 다름없기 때문.

$$
\mathbf{B}' = \nabla \times \mathbf{A}' = \nabla \times (\mathbf{A} + \nabla\Lambda) = \nabla \times \mathbf{A} = \mathbf{B}
$$

($\nabla \times (\nabla\Lambda) = 0$ 을 이용)

$$
\mathbf{E}' = -\nabla\phi' - \frac{\partial \mathbf{A}'}{\partial t} = -\nabla\phi + \nabla\left(\frac{\partial \Lambda}{\partial t}\right) - \frac{\partial \mathbf{A}}{\partial t} - \frac{\partial}{\partial t}(\nabla\Lambda) = -\nabla\phi - \frac{\partial \mathbf{A}}{\partial t} = \mathbf{E}
$$

---

## Lorenz Gauge

앞서 본 식:

$$
\nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} - \nabla\left(\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \phi}{\partial t}\right) = -\mu_0 \mathbf{J}
$$

에서, 만약

$$
\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \phi}{\partial t} = 0
$$

이 된다면 식이 이렇게 깔끔해진다:

$$
\nabla^2 \phi - \frac{1}{c^2}\frac{\partial^2 \phi}{\partial t^2} = -\frac{\rho}{\epsilon_0}
$$

$$
\nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J}
$$

$\phi$와 $\mathbf{A}$가 분리된 좋은 방정식을 얻는다. 이 조건을 보고 **Lorenz condition** 이라 함.

### Lorenz condition을 만족하는 $\Lambda$ 찾기

Lorenz condition을 만족하는 $\Lambda$를 찾자.

$\nabla \cdot \mathbf{A}' + \frac{1}{c^2}\frac{\partial\phi'}{\partial t} = 0$ 이어야 하니까:

$$
\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial\phi}{\partial t} + \nabla^2\Lambda - \frac{1}{c^2}\frac{\partial^2\Lambda}{\partial t^2} = 0
$$

$$
\nabla^2\Lambda - \frac{1}{c^2}\frac{\partial^2\Lambda}{\partial t^2} = -\left(\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial\phi}{\partial t}\right)
$$

이를 만족하는 $\Lambda$가 항상 있다고 한다.

**Lorenz gauge에서**: 위 조건을 만족하면 $\nabla^2\Lambda - \frac{1}{c^2}\frac{\partial^2\Lambda}{\partial t^2} = 0$ 을 만족한다.

이런 조건을 **charge conservation / continuity equation** 이라 부른다.

 정적 해(static solution)로부터 $\mathbf{A} = \frac{\mu_0}{4\pi}\int \frac{1}{r}\mathbf{J}\,dv$, $\phi = \frac{1}{4\pi\epsilon_0}\int\frac{1}{r}\rho\,dv$ 가 있다.
 
이것을 $\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial\phi}{\partial t} = 0$ 에 대입하자면,

$$
\nabla \cdot \mathbf{J} = -\frac{\partial\rho}{\partial t}
$$

즉 우리가 알던 charge conservation이 나온다.

질문) 이게 당연하게 성립해야 하는 거 아닌가?

---

## Coulomb Gauge

$\nabla \cdot \mathbf{A} = 0$ 인 조건을 의미.

$\nabla \times (\nabla \times \mathbf{A}) = -\nabla^2 \mathbf{A}$ 이 된다.

또한 $\nabla^2\phi + \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = -\frac{\rho}{\epsilon_0}$ 의 식에서 $\nabla^2\phi = -\frac{\rho}{\epsilon_0}$ 가 바로 나와 **Poisson 방정식**이 된다. 이걸 풀면

$$
\phi = \frac{1}{4\pi\epsilon_0}\int\frac{\rho}{r}\,dv
$$

가 나온다.

더 엄밀하게 쓰면, $\mathbf{x}$가 $\phi$ 측정 지점이고 $\mathbf{x}'$가 전하 밀도의 위치일 때,

$$
\phi(\mathbf{x}, t) = \int\frac{\rho(\mathbf{x}', t)}{|\mathbf{x} - \mathbf{x}'|}\,d^3x'
$$

이걸 **instantaneous Coulomb potential** 이라고 한다.

**문제점**: $\phi$에서 $t$와 $\rho$에서 $t$가 같은 게 말이 안 된다!
이게 성립하려면 포텐셜의 전하 변화를 받아들이는 속도가 무한대 여야 한다.
그런데 그럴 리리가 없다.

### Coulomb gauge에서 $\mathbf{A}$ 방정식

$\nabla \cdot \mathbf{A} = 0$ 을 적용하면 맥스웰 두 번째 식이:

$$
\nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} = \left(-\mu_0 \mathbf{J} + \frac{1}{c^2}\nabla\left(\frac{\partial\phi}{\partial t}\right)\right)
$$

$\mathbf{J}$를 transverse 한 성분과 longitudinal 한 성분으로 나누자면,

$$
\mathbf{J} = \mathbf{J}_\text{transverse} + \mathbf{J}_\text{longitudinal}
$$

이러면 $\frac{1}{c^2}\nabla\left(\frac{\partial\phi}{\partial t}\right) = -\mu_0 \mathbf{J}_\text{longitudinal}$

$\nabla\frac{\partial\phi}{\partial t}$ 는 longitudinal한 성분 밖에 없는 양수다. ($\nabla \times \left(\nabla\frac{\partial\phi}{\partial t}\right) = 0$ 이므로)

식의 좌변은 transverse 한 성분 밖에 없다. 왜냐면 $\nabla \cdot \mathbf{A} = 0$ 이기 때문.

> **(증명)** 아인슈타인 표기법 사용. $i, j, k = 1, 2, 3$ 에 대해,
> 데카르트 좌표계에에서 $\mathbf{A}$가 충분히 매끄러운 함수라면. 
>
> $\nabla^2 \mathbf{A} = \hat{e}_i \frac{\partial^2 A_i}{\partial x_j \partial x_j}$, $\nabla \cdot \mathbf{A} = \frac{\partial A_i}{\partial x_i} = 0$
>
> $\nabla \cdot (\nabla^2 \mathbf{A}) = \frac{\partial}{\partial x_i}\left(\frac{\partial^2 A_i}{\partial x_j \partial x_j}\right) = \frac{\partial^2}{\partial x_j \partial x_j}\left(\frac{\partial A_i}{\partial x_i}\right) = 0$
>
> $\nabla \cdot \left(\frac{\partial^2 \mathbf{A}}{\partial t^2}\right) = \frac{\partial}{\partial x_i}\left(\frac{\partial^2 A_i}{\partial t^2}\right) = \frac{\partial^2}{\partial t^2}\left(\frac{\partial A_i}{\partial x_i}\right) = 0$
>
> 따라서 $\nabla \cdot \left(\nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2}\right) = 0$ 이다.

따라서

$$
\nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J} + \frac{1}{c^2}\nabla\left(\frac{\partial\phi}{\partial t}\right)
$$

식의 양변은 **transverse 성분 밖에 없다**. 마치 자기장처럼.

---

## 두 게이지를 동시에 만족하면?

> **질문)** 만약 Lorenz 게이지와 Coulomb 게이지가 동시에 만족된다면?
>
> Lorenz: $\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \phi}{\partial t} = 0$
>
> Coulomb: $\nabla \cdot \mathbf{A} = 0$
>
> 두 조건을 빼면 $\frac{1}{c^2}\frac{\partial \phi}{\partial t} = 0$, 즉 $\frac{\partial \phi}{\partial t} = 0$.
> 이러면 전기역학이 아니라 **정전기학**이 되는 건가?

**$\frac{\partial \phi}{\partial t} = 0$ 이 실제로 함의하는 것**

Coulomb gauge에서 $\phi$는 instantaneous Coulomb potential이므로:

$$
\phi(\mathbf{x}, t) = \frac{1}{4\pi\epsilon_0}\int \frac{\rho(\mathbf{x}', t)}{|\mathbf{x} - \mathbf{x}'|}\,d^3x'
$$

$\frac{\partial \phi}{\partial t} = 0$ 이라는 건, 이 적분이 시간에 대해 안 변한다는 뜻 — 즉 $\frac{\partial \rho}{\partial t} = 0$, **전하 밀도가 시간에 안 변한다**는 것.

그러면 continuity equation에 의해 $\nabla \cdot \mathbf{J} = -\frac{\partial \rho}{\partial t} = 0$, 즉 **정상 전류(steady current)** 상황.

**그러면 정전기학인가?** — 아니다.

이건 정전기학 + 정자기학, 즉 **정상 상태(static/steady-state)** 상황이다.
- 전하는 안 변하지만 ($\frac{\partial \rho}{\partial t} = 0$)
- 전류는 흐를 수 있고 ($\mathbf{J} \neq 0$, 단 $\nabla \cdot \mathbf{J} = 0$)
- $\mathbf{A}$는 여전히 시간 의존성을 가질 수 있다

즉 "전기장 쪽 동역학은 꺼졌지만 자기장 쪽은 살아있는" 상태. 전동역학이 **정전기학으로 축퇴하는 게 아니라**, 동역학적 자유도가 $\mathbf{A}$에만 남아있는 상황이다.

**더 근본적인 문제**: 두 게이지를 "동시에 만족"시키는 것이 항상 가능한지부터 물어야 한다. 게이지 자유도는 하나의 스칼라 함수 $\Lambda$로 결정되는데, Lorenz 조건과 Coulomb 조건을 **동시에** 만족시키는 $\Lambda$가 존재하느냐는 일반적인 상황에서 보장되지 않는다. 즉, 두 조건이 동시에 성립하는 건 **특수한 물리적 상황**에서만 가능한 것이지, 임의로 선택할 수 있는 게 아니다.

---

## Wave Equation

Lorenz gauge를 만족하면:

$$
\nabla^2\Lambda - \frac{1}{c^2}\frac{\partial^2\Lambda}{\partial t^2} = 0
$$

$\Lambda$가 wave 방정식을 따른다.

### $\Lambda$가 파동 방정식을 따른다는 것의 물리적 함의

이건 단순한 수학적 결과가 아니다. 의미를 몇 가지 층위로 뜯어보자.

**1. 게이지 자유도 자체가 빛의 속도로 전파한다**

$\Lambda$는 Lorenz gauge 안에서의 **잔여 자유도(residual gauge freedom)** — 이미 Lorenz condition을 만족하는 포텐셜을 또 다른 Lorenz condition을 만족하는 포텐셜로 바꾸는 변환이다. 이 비물리적 자유도가 물리적 신호(전자기파)와 **똑같은 속도, 똑같은 방정식**으로 전파한다.

**2. Lorenz gauge는 상대론적으로 공변(covariant)한 게이지다**

파동 방정식의 연산자

$$
\Box = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}
$$

는 Lorentz 변환 하에서 불변이다. $\Lambda$가 $\Box\Lambda = 0$을 따른다는 건, 잔여 게이지 자유도가 특수상대론의 대칭성과 완전히 맞물려 있다는 뜻. Coulomb gauge의 잔여 자유도($\nabla^2\Lambda = 0$, 라플라스 방정식)와 대조적이다 — 그건 순간 전달이다.

**3. Lorenz gauge로도 게이지가 완전히 고정되지 않는다**

$\Box\Lambda = 0$을 만족하는 $\Lambda$는 무수히 많다. 즉 Lorenz condition 하나만으로는 포텐셜이 유일하게 결정되지 않는다. 완전히 고정하려면 추가적인 경계조건 또는 초기조건이 필요하다.

> **한 줄 요약**: Lorenz gauge의 "불확정성"이 빛의 속도로 전파하는 파동의 형태로만 존재한다 — 이는 Lorenz gauge가 상대론적 구조와 정합함을 보여주는 귀결이다.

---

진공이라면, 그러니까 $\rho = 0$, $\mathbf{J} = 0$ 이라면, 포텐셜은:

$$
\phi = 0, \quad \nabla^2 \mathbf{A} - \frac{1}{c^2}\frac{\partial^2 \mathbf{A}}{\partial t^2} = 0
$$

$\mathbf{A}$가 wave equation을 따른다.

### $\mathbf{A}$의 파동 방정식 → $\mathbf{E}$, $\mathbf{B}$의 파동 방정식

진공에서 Lorenz gauge 하에 $\phi = 0$ 이므로 포텐셜과 장의 관계는:

$$
\mathbf{E} = -\frac{\partial \mathbf{A}}{\partial t}, \quad \mathbf{B} = \nabla \times \mathbf{A}
$$

$\mathbf{A}$가 $\Box \mathbf{A} = 0$ 을 만족할 때, $\Box$ 는 $\frac{\partial}{\partial t}$ 및 $\nabla \times$ 와 교환 가능한 선형 연산자이므로:

$$
\Box \mathbf{E} = \Box\left(-\frac{\partial \mathbf{A}}{\partial t}\right) = -\frac{\partial}{\partial t}(\Box \mathbf{A}) = 0
$$

$$
\Box \mathbf{B} = \Box(\nabla \times \mathbf{A}) = \nabla \times (\Box \mathbf{A}) = 0
$$

즉 $\mathbf{E}$와 $\mathbf{B}$ 모두 파동 방정식을 따른다. 이것이 **전자기파**다.

> **정리**: $\mathbf{A}$가 전자기파를 기술하는 포텐셜로서 파동적으로 거동하고, 거기서 유도된 $\mathbf{E}$, $\mathbf{B}$ 역시 동일한 파동 방정식을 따른다. $\mathbf{A}$ 자체가 전자기파는 아니다 — 게이지 의존적이기 때문. 하지만 $\mathbf{A}$의 파동 방정식은 $\mathbf{E}$, $\mathbf{B}$의 파동 방정식을 **함의**한다.

---

## 에너지 보존

장이 전하에 하는 일의 일률.

$$
\frac{dW}{dt} = \text{힘} \cdot \text{속도} = q(\mathbf{v} \cdot \mathbf{E}) = \int \mathbf{J} \cdot \mathbf{E}\,d^3x
$$

$\mathbf{B}$는 일하지 않는다. 로렌츠 힘에서 $\mathbf{v} \times \mathbf{B}$ 이기 때문, $\mathbf{F} \perp \mathbf{B}$.

위의 식 속 $\mathbf{J}$에 $\nabla \times \mathbf{H} = \frac{\partial \mathbf{D}}{\partial t} + \mathbf{J}$ 를 도입.

$$
\frac{dW}{dt} = \int \left[\mathbf{E} \cdot (\nabla \times \mathbf{H}) - \mathbf{E} \cdot \left(\frac{\partial \mathbf{D}}{\partial t}\right)\right]d^3x
$$

여기에 vector identity를 도입:

$$
\nabla \cdot (\mathbf{E} \times \mathbf{H}) = (\nabla \times \mathbf{E}) \cdot \mathbf{H} - (\nabla \times \mathbf{H}) \cdot \mathbf{E}
$$
이건 흔히 쓰는 식이니까 외웠으면 좋겠는걸.

$$
\frac{dW}{dt} = \int \left[-\nabla \cdot (\mathbf{E} \times \mathbf{H}) + \mathbf{H} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot \left(\frac{\partial \mathbf{D}}{\partial t}\right)\right]d^3x
$$

$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ 를 이용

$$
\frac{dW}{dt} = -\int \left[\nabla \cdot (\mathbf{E} \times \mathbf{H}) + \mathbf{H} \cdot \frac{\partial \mathbf{B}}{\partial t} + \mathbf{E} \cdot \frac{\partial \mathbf{D}}{\partial t}\right]d^3x
$$

여기서 $\mathbf{H} \cdot \frac{\partial \mathbf{B}}{\partial t} + \mathbf{E} \cdot \frac{\partial \mathbf{D}}{\partial t}$ 를 어떻게 쓸 수 있을까?

$\mathbf{H}$와 $\mathbf{B}$, $\mathbf{E}$와 $\mathbf{D}$가 서로 일정한 상수배의 차이밖에 안 난다면,

$$
\mathbf{B} \cdot \frac{\partial \mathbf{H}}{\partial t} = \mathbf{H} \cdot \frac{\partial \mathbf{B}}{\partial t}, \quad \mathbf{D} \cdot \frac{\partial \mathbf{E}}{\partial t} = \mathbf{E} \cdot \frac{\partial \mathbf{D}}{\partial t}
$$

이므로,

$$
\mathbf{H} \cdot \frac{\partial \mathbf{B}}{\partial t} + \mathbf{E} \cdot \frac{\partial \mathbf{D}}{\partial t} = \frac{1}{2}\left(\frac{\partial \mathbf{B} \cdot \mathbf{H}}{\partial t} + \frac{\partial \mathbf{E} \cdot \mathbf{D}}{\partial t}\right)
$$

이때 **field energy** 라는 걸 정의한다:

$$
u = \frac{1}{2}(\mathbf{H} \cdot \mathbf{B} + \mathbf{E} \cdot \mathbf{D})
$$

$$
\frac{dW}{dt} = -\int \mathbf{J} \cdot \mathbf{E}\,d^3x = \int_V \left[\frac{\partial u}{\partial t} + \nabla \cdot (\mathbf{E} \times \mathbf{H})\right]d^3x
$$

정리:

$$
-\mathbf{J} \cdot \mathbf{E} = \frac{\partial u}{\partial t} + \nabla \cdot (\mathbf{E} \times \mathbf{H})
$$

---

## Poynting Vector

우리 여기서 **Poynting Vector** 라는 걸 정의한다.

$$
\mathbf{S} = \mathbf{E} \times \mathbf{H}
$$

$-\mathbf{J} \cdot \mathbf{E}$를 전하의 이동으로 인한 기계적인 일률이라고 이름 붙이면.

$$
\frac{d}{dt}u_\text{mechanical} = \mathbf{J} \cdot \mathbf{E}
$$

$$
\therefore \quad -\nabla \cdot \mathbf{S} = \frac{\partial}{\partial t}(u_\text{field} + u_\text{mechanical})
$$

적분 형태:

$$
\int_V \left[\mathbf{J} \cdot \mathbf{E} + \frac{1}{2}\frac{d}{dt}(\mathbf{E} \cdot \mathbf{D} + \mathbf{B} \cdot \mathbf{H})\right]d^3x = -\oint_{\partial V}(\mathbf{E} \times \mathbf{H}) \cdot \hat{n}\,da
$$

결국 $\mathbf{S}$는 **energy flux**를 의미한다.

---

# 궁금한 내용

- Lorenz condition에 정적 해를 대입하면 charge conservation이 나온다고 했는데, 이게 당연한 결과 아닌가? 아니면 비자명한 결과인가?

	**→ 당연한 결과가 맞다.** 단, 이유를 정확히 짚어야 한다.

	charge conservation은 맥스웰 방정식 자체에 이미 내장되어 있다. 네 번째 맥스웰 방정식에 발산을 취하면:

	$$
	\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J} + \mu_0\epsilon_0 \frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})
	$$

	여기에 $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$ 를 대입하면 게이지 선택 없이 바로:

	$$
	\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0
	$$

	즉 charge conservation은 **게이지와 무관하게 항상 성립**한다.

	그렇다면 강의에서 Lorenz gauge → charge conservation 유도는 무엇이었나? Lorenz gauge가 charge conservation을 *만들어내는* 게 아니라, 이미 존재하는 charge conservation과 Lorenz gauge가 **정합적(consistent)임을 확인한 것**이다. Lorenz gauge는 충분조건이지 필요조건이 아니다.
	더 근본적으로, charge conservation은 **Noether 정리**에 의해 물리 법칙의 전역적 $U(1)$ 위상 대칭의 귀결이다. 게이지 이론의 핵심이기도 하다.


- ~~Lorenz와 Coulomb 게이지를 동시에 만족하면 정전기학이 되는가?~~ → "두 게이지 동시 만족" 섹션 참고. 정전기학이 아니라 정상 상태(steady-state) 상황. 동역학적 자유도가 $\mathbf{A}$에만 남음.

- Coulomb gauge에서 instantaneous potential의 문제를 어떻게 해결하는가? 실제로 물리적 관측가능량 E, B 는 인과율을 지킨다는 걸 따로 보여야 하는가?

- transverse / longitudinal 분해는 Helmholtz decomposition 과 같은 건가?

# AI의 보충 설명

## 게이지 의존 vs 게이지 독립

**게이지 의존 (gauge-dependent)**

게이지를 바꾸면 값이 달라지는 양. $\Lambda$를 선택하는 방법에 따라 다른 값을 갖는다.

대표적인 예가 포텐셜 $\phi$, $\mathbf{A}$. Lorenz gauge와 Coulomb gauge에서 $\mathbf{A}$의 구체적인 함수 형태가 달라진다 — 같은 물리 상황을 기술하는데도 포텐셜의 숫자값이 다르게 나온다.

**게이지 독립 (gauge-independent)**

게이지를 어떻게 선택하든 값이 변하지 않는 양. 물리적으로 실제 측정 가능한 양들이 여기 해당한다.

대표적인 예가 $\mathbf{E}$와 $\mathbf{B}$. 오늘 필기에서 직접 확인했듯이, 게이지 변환

$$
\mathbf{A} \to \mathbf{A} + \nabla\Lambda, \quad \phi \to \phi - \frac{\partial\Lambda}{\partial t}
$$

을 해도 $\mathbf{E}' = \mathbf{E}$, $\mathbf{B}' = \mathbf{B}$.

**왜 이 구분이 중요한가**

물리학의 근본 원칙은 **측정 가능한 양은 게이지 선택에 무관해야 한다**는 것. $\phi$나 $\mathbf{A}$는 수학적 도구일 뿐이고, 실제 자연이 게이지 선택을 "알 리가 없다."

- 게이지 의존량 → 수학적 편의를 위한 중간 도구. 물리적 실체 없음.
- 게이지 독립량 → 실제 측정 가능한 물리량. 자연이 결정하는 값.

> **비유**: 해발고도 vs 두 지점의 높이 차이. 해수면 기준(= 게이지 선택)을 어디로 잡느냐에 따라 "해발 100m"라는 숫자는 달라진다. 하지만 두 산 사이의 높이 차이는 기준점과 무관하게 항상 같다. $\phi$, $\mathbf{A}$가 전자이고, $\mathbf{E}$, $\mathbf{B}$가 후자다.

# 연관 학습 노트

- [[포텐셜을 이용한 맥스웰 방정식]]
- [[전기장과 자기장의 포텐셜]]
- [[Wave Equation from Maxwell Equations]]

# References


