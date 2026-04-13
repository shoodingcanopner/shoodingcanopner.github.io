---
title: Adiabatic Invariants
date: 2026-04-11
subject: physics
tags:
  - study
  - concept
  - analytical-mechanics
class: study
---

# Adiabatic Invariants

## Overview

**단열 불변량(adiabatic invariant)** 이란, 시스템의 파라미터 $\lambda$가 진동 주기 $T$에 비해 **매우 천천히** 변할 때 보존되는 양이다. 에너지는 보존되지 않더라도, 위상 공간 궤도가 둘러싸는 면적

$$
I = \frac{1}{2\pi} \oint p(q, E, \lambda)\, dq
$$

은 불변으로 남는다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\lambda$ | 외부에서 천천히 변화시키는 파라미터 |
| $T$ | 진동 주기 |
| $H(q, p; \lambda)$ | Hamiltonian |
| $I$ | Adiabatic invariant (위상 공간 면적 / $2\pi$) |
| $E$ | 에너지 (시간에 따라 변함) |
| $\omega$ | 진동 진동수 |

## 핵심 조건: "천천히"란?

$$
T \frac{d\lambda}{dt} \ll \lambda
$$

즉, 한 진동 주기 동안 파라미터의 변화량이 파라미터 자체에 비해 무시할 수 있을 만큼 작아야 한다. 이 조건 아래서, $\lambda$와 $E$는 한 주기에 걸쳐 사실상 상수로 취급할 수 있다.

## 증명 개요: $\overline{dI/dt} = 0$

### Step 1. 에너지의 시간 변화

Hamilton 방정식 $dH/dt = \partial H/\partial t$ 로부터:

$$
\frac{dE}{dt} = \frac{\partial H}{\partial \lambda}\frac{d\lambda}{dt}
$$

### Step 2. 한 주기 평균

$\lambda$가 천천히 변하므로 한 주기 평균을 취할 수 있다:

$$
\frac{\overline{dE}}{dt} = \frac{d\lambda}{dt} \cdot \overline{\left(\frac{\partial H}{\partial \lambda}\right)}
$$

### Step 3. $dt$를 $dq$로 교체

$\dot{q} = \partial H / \partial p$ 이므로 $dt = dq/\dot{q} = \frac{dq}{ \partial H / \partial p}$. 이를 이용해 주기 적분을 $q$ 적분으로 변환:
여기서 적분 경로는 SHO의 한 입자가 한 주기로 운동할때 phase space에서 그리는 타원 경로이다. 

$$
T = \oint \frac{dq}{(\partial H/\partial p)_\lambda}
$$

### Step 4. $p(q, E, \lambda)$ 로 변수 치환

에너지 보존식 $H(q, p, \lambda) = E$ (E는 상수), 양 변을 $\lambda$로 전미분하면 ($E$, $q$ 고정):

$$
\frac{\partial H}{\partial \lambda} + \frac{\partial H}{\partial p}\frac{\partial p}{\partial \lambda} = 0
$$

$$
\Rightarrow \quad \left(\frac{\partial p}{\partial \lambda}\right)_E = -\frac{\partial H/\partial \lambda}{\partial H/\partial p}
$$

이제 $\overline{(\partial H / \partial \lambda)}$ 를 명시적으로 쓰면, Step 3의 $dt \to dq$ 교체에 의해:

$$
\overline{\left(\frac{\partial H}{\partial \lambda}\right)} = \frac{\displaystyle\oint \frac{(\partial H/\partial \lambda)}{(\partial H/\partial p)}\, dq}{\displaystyle\oint \frac{dq}{(\partial H/\partial p)}}
$$

분자에 Step 4의 항등식 $\dfrac{\partial H/\partial \lambda}{\partial H/\partial p} = -\left(\dfrac{\partial p}{\partial \lambda}\right)_E$ 를 적용하면:

$$
\oint \frac{(\partial H/\partial \lambda)}{(\partial H/\partial p)}\, dq = -\oint \left(\frac{\partial p}{\partial \lambda}\right)_E dq
$$

분모에는 $\dfrac{1}{\partial H/\partial p} = \left(\dfrac{\partial p}{\partial E}\right)_\lambda$ 를 적용하면 ($H = E$를 $p$에 대해 풀었을 때):

$$
\oint \frac{dq}{(\partial H/\partial p)} = \oint \left(\frac{\partial p}{\partial E}\right)_\lambda dq
$$

따라서:

$$
\frac{\overline{dE}}{dt} = -\frac{d\lambda}{dt} \cdot \frac{\oint (\partial p/\partial \lambda)_E\, dq}{\oint (\partial p/\partial E)_\lambda\, dq}
$$

### Step 5. $dI/dt = 0$ 으로 재정리

$I = \frac{1}{2\pi}\oint p(q, E, \lambda)\, dq$ 로 정의하면:

$$
\frac{dI}{dt} = \frac{1}{2\pi}\oint \left[\left(\frac{\partial p}{\partial E}\right)_\lambda \frac{dE}{dt} + \left(\frac{\partial p}{\partial \lambda}\right)_E \frac{d\lambda}{dt}\right] dq
$$

Step 4의 결과를 대입하면 두 항이 **정확히 상쇄**되어:

$$
\boxed{\frac{\overline{dI}}{dt} = 0}
$$

## 물리적 직관: 왜 상쇄되는가?

$I = \frac{1}{2\pi}\oint p\, dq$ 는 **위상 공간 궤도가 둘러싸는 넓이** ($/ 2\pi$) 이다.

$\lambda$가 변할 때 두 가지 효과가 동시에 일어난다:
- $E$가 변하면서 궤도 **크기**가 달라진다
- $\lambda$ 자체가 변하면서 궤도 **모양**이 달라진다

이 두 효과가 정확히 상쇄되어, **위상 공간 면적이 보존**된다.

핵심: **빠른 진동(주기 $T$)** 과 **느린 파라미터 변화** 사이의 시간 스케일 분리가 존재할 때, 빠른 운동의 평균적 구조는 느린 변화에 의해 무너지지 않는다.

## 중요한 부수 결과: 주기와 $I$의 관계

$$
2\pi \frac{\partial I}{\partial E} = \oint \frac{dq}{\dot{q}} = T
$$

$$
\Rightarrow \quad \frac{\partial E}{\partial I} = \omega
$$

이것은 action-angle 변수의 핵심 관계이기도 하다.

## SHO 예시 확인

$$
H = \frac{1}{2m}\left(p^2 + m^2\omega^2 q^2\right) = E
$$

위상 공간 궤도는 반축이 $\sqrt{2mE}$, $\sqrt{2E/(m\omega^2)}$ 인 타원이므로:

$$
I = \frac{1}{2\pi} \cdot \pi \sqrt{2mE} \cdot \sqrt{\frac{2E}{m\omega^2}} = \frac{E}{\omega}
$$

$I = E/\omega = \text{const}$ 이므로, **$\omega$를 서서히 바꾸면 에너지는 진동수에 비례하여 변한다**.

## 양자역학과의 연결

$I = E/\omega$는 양자역학에서 $E = \hbar\omega$와 직결된다. 연속적인 action 값 $I$가 $\hbar$ 단위로 양자화된 것이 양자 수이며, 이는 우연이 아니라 adiabatic invariant의 본질에서 비롯된다.

## Questions & Insights

- $\lambda$가 **빠르게** 변하면 어떻게 되는가? $I$가 보존되지 않는 경우 어떤 양이 대신 의미를 갖는가?
- SHO 이외의 비조화 포텐셜에서 $I$를 명시적으로 계산할 수 있는가?
- Action-angle 변수와 $I$의 관계를 더 명확히: $I$가 action variable $J$와 동일한가?

## Related Concepts

- [[AM lecture note - Hamiltonian mechanics]]
- [[AM lecture note - Canonical transformation]]
- [[Poisson_Brackets]]
- [[AM lecture note - Liouville theorem and Canonical transformation]]
- [[Liouville's Theorem]]

## References

- Fowler, *Graduate Classical Mechanics*, Ch. 13.1 (LibreTexts)

## Notes from Claude

**증명의 핵심 트릭**: 시간 적분 $\int dt$를 위상 공간 적분 $\oint dq/\dot{q}$로 바꾸는 것. 이렇게 하면 $p$를 독립변수 $(q, E, \lambda)$의 함수로 쓸 수 있고, $\partial p/\partial \lambda$와 $\partial p/\partial E$라는 자연스러운 편미분이 등장한다.

**$\frac{dI}{dt}$가 0인 이유를 한 문장으로**: $dI/dt$를 전개하면 두 항이 나오는데, 한 항은 $E$ 변화의 기여($\partial p/\partial E \cdot \dot{E}$)이고 다른 항은 $\lambda$ 변화의 기여($\partial p/\partial \lambda \cdot \dot{\lambda}$)이며, Step 4의 항등식이 바로 이 둘이 서로 상쇄됨을 보여준다.

**위상 공간 그림**: $I$는 위상 공간에서 닫힌 궤도의 면적이다. Liouville 정리는 Hamiltonian flow 아래 위상 공간 면적이 보존된다고 말하지만, 여기서는 $\lambda$가 변하면서 Hamiltonian 자체가 바뀐다. 그럼에도 불구하고 "천천히" 변하는 조건 덕분에 면적이 보존된다 — 이것이 단열 불변성의 핵심이다.
