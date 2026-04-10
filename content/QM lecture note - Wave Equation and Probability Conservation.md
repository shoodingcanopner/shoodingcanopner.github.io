---
title: QM lecture note -  Probability Conservation/Hamilton-Jacobi EQ/Classical limit
date: 2026-03-31
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

오늘의 공지: 중간 고사는 4.16 목요일 3-6시
# 지난 강의

[[QM lecture note - Simple Harmonic Oscillator]]

# 오늘의 핵심

### Probability current
- **Schrödinger Wave Equation**은 Time Evolution Operator의 미분방정식으로부터 자연스럽게 유도된다.
- Wave function의 확률 밀도 $\rho = |\psi|^2$는 시간이 지나도 보존된다 → **Probability Conservation**
Probability conservation, 슈방, continuity equation에서 probability flux의 정의를 이용하면 양자역학 버전의 **Probability current** (flux) $\mathbf{J}$를 이렇게 정의할 수 있다. 

$$
\mathbf{J} = -\left(\frac{i\hbar}{2m}\right)\left[\psi^*\nabla\psi - \psi\nabla\psi^*\right]
$$
$$
\boxed{\mathbf{J} = \left(\frac{\hbar}{m}\right)\text{Im}\left[\psi^*\nabla\psi\right]}
$$

- 이를 국소적으로 기술하면 **Continuity Equation**: $\frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{J} = 0$

### Hamilton Jacobi equation

$$
\frac{\partial W}{\partial q^f_s} = p^f_s \qquad,\qquad \frac{\partial W}{\partial t} = -\mathcal{H}
$$

### $W$의 물리적 의미

$W$를 어떻게 이해해야 할까? 운동의 시작점은 고정해 두고, 끝점 $q^f$와 $t$만 변수로 받는 함수로 보자. 이것은 **configuration space에 퍼져있고, 시간에 따라 변화하는 스칼라 장**이다.

$\nabla W_{(x)} = P_{(x)}$이기 때문에, 이 스칼라 장의 기울기가 한 순간, 그 지점에서 운동을 결정한다.

한 시점에서 $W$ 값이 같은 점을 모으면 **등위면 (마치 전기장 전기포텐셜에서 등전위 면처럼)** 을 생각할 수 있다면, 입자는 그 면에 수직한 방향으로 움직인다.

즉, $W(q, t)$는 **"입자가 $t$시간에 $q$에 위치하게 있기위해 지금까지흐른동안 액션"** 이다.

### 고전역학으로 환원

- **Hamilton-Jacobi 방정식**과 양자역학의 Wave Equation을 비교하면, $\hbar \to 0$ 극한에서 양자역학이 고전역학으로 환원됨을 보일 수 있다 → **Classical Limit (WKB)**

### wave function의 극좌표 표현

$$
\psi(\mathbf{x}, t) = \sqrt{\rho(\mathbf{x}, t)} \exp\left[\frac{iS(\mathbf{x}, t)}{\hbar}\right]
$$
이렇게 확률 밀도 $\rho(\mathbf{x}, t)$와 phase $S(\mathbf{x}, t)$로 나누어서 나타낼 수있다. 
Phase를 괜히 $S(\mathbf{x}, t)$라고 쓴 게 아니다. 나중에 파인만의 경로 적분을 공부한다면, 시간이 지날 때 파동함수의 phase는 액션만큼 돌아간다는 걸 알 수 있다.
위의 식에서 $S(\mathbf{x}, t)$가 바로 액션이자, 해밀턴-자코비 방정식에 등장하는 $W(q, t)$이다! 
$\nabla S_{(x)}$ 가 바로 운동량이라는 게 양자역학에서도 그대로 적용된다. 
Probability current가 $\nabla S_{(x)} = P_{(x)}$로 결정되는 것이다. 

$$
\boxed{\mathbf{J} = \frac{\rho \nabla S}{m}}
$$
Probability current는 velocity field와 probability density의 곱이라는 점을 고려해라. 

# 필기 내용

## Time Evolution Operator의 미분방정식 복습

지난 시간에 $i\hbar \dfrac{\partial \mathcal{U}}{\partial t} = \mathcal{H}\mathcal{U}$ 를 유도했다. 이것을 다시 공부해 보자.

아래 성질을 이용한다. 

$$
\mathcal{U}(dt+t, 0) = \mathcal{U}(dt+t,\, t)\,\mathcal{U}(t, 0)
$$

$\mathcal{U}(dt+t, t)$는 무한소 시간 발전 연산자이므로:

$$
\mathcal{U}(dt+t,\, t) = \exp\!\left(-i\frac{1}{\hbar}\mathcal{H}(t)\,dt\right) = 1 - i\frac{1}{\hbar}\mathcal{H}(t)\,dt
$$

따라서:

$$
\mathcal{U}(dt+t, 0) = \left(1 - i\frac{1}{\hbar}\mathcal{H}(t)\,dt\right)\mathcal{U}(t, 0)
$$

이를 정리하면:

$$
\mathcal{U}(dt+t, 0) - \mathcal{U}(t, 0) = -i\frac{1}{\hbar}\mathcal{H}\,dt\,\mathcal{U}(t, 0)
$$

$$
\boxed{i\hbar\frac{\partial}{\partial t}\mathcal{U}(t, 0) = \mathcal{H}\,\mathcal{U}(t, 0)}
$$

중명 완료. 아마도.

---

## Schrödinger Wave Equation 유도

이후에, 이 time translation operator에 대한 미분방정식은 슈뢰딩거의 Wave Equation으로 이어진다. $\mathcal{U}|a, 0\rangle = |a, t\rangle$를 이용.

$$
i\hbar\frac{\partial}{\partial t}|a, t\rangle = \mathcal{H}|a, t\rangle
$$

여기에 $\langle x' |$를 왼쪽에서 곱하면:

$$
i\hbar\frac{\partial}{\partial t}\langle x' | a, t\rangle = \langle x' | \mathcal{H} | a, t\rangle
$$

$\langle x' | \mathcal{H} | a, t\rangle$를 어떻게 쓸 수 있는지 살펴보자. $\mathcal{H} = \dfrac{1}{2m}P^2 + V(x)$이므로:

**포텐셜 항**: 완전성 관계 $\int dx''|x''\rangle\langle x''|$를 삽입하면,

$$
V(x) = \langle x' | V(x) | x'' \rangle = V(x')\,\delta(x' - x'')
$$

**운동량 항**: 이전에 공부한 것에서 $\langle x' | P | a \rangle = -i\hbar\nabla\langle x' | a \rangle$임을 알고 있으므로,

$$
\left\langle x' \left| \frac{1}{2m}P^2 \right| a \right\rangle = -\frac{\hbar^2}{2m}\nabla^2\langle x' | a \rangle
$$

따라서:

$$
\langle x' | \mathcal{H} | a, t \rangle = \left(-\frac{\hbar^2}{2m}\nabla^2 + V\right)\langle x' | a, t\rangle
$$

이렇게 해서 **슈뢰딩거의 Wave Equation**이 나온다:

$$
\boxed{i\hbar\frac{\partial}{\partial t}\psi_a = -\frac{\hbar^2}{2m}\nabla^2\psi_a + V\psi_a}
$$

### $\mathcal{H}$의 eigenstate에 대한 wave equation

$\mathcal{H}$에 대한 eigenstate: $\langle x' | a \rangle = u(x')$이고, $\mathcal{H}|a\rangle = E_a|a\rangle$ 이면, 양변에 넣으면 간단한 의미가 나온다.

$$
\left(-\frac{\hbar^2}{2m}\nabla^2 + V\right)u(x') = E_a\,u(x') = i\hbar\frac{\partial}{\partial t}u(x')
$$

### Wave Function의 불변성

$\mathcal{U}$가 unitary 하기 때문에, $\mathcal{U}^\dagger(x)\mathcal{U}(t) = 1$ 이다.

따라서 **normalized 된 상태는 시간진화를 해도 계속 normalized 된다**.

---

## Probability Conservation

**Probability density**: $\rho = |\psi|^2$이라 두면,

$$
\int \rho\,dx = \int |\psi|^2\,dx \text{ 는 시간이 지나도 변치 않는다.}
$$

이게 바로 **Probability Conservation**. 입자는 사라지거나 하지 않는다. 

이것을 구체적으로 확인하자:

$$
\frac{d}{dt}\int \rho\,dx = \frac{d}{dt}\int dx'\,\psi^*\psi = \int dx' \left(\frac{\partial}{\partial t}\psi^*\right)\psi + \psi^*\left(\frac{\partial}{\partial t}\psi\right) = 0
$$

슈뢰딩거 방정식을 이용해 시간 미분된 Wave function 항을 정리하자.

$$
\frac{d}{dt}\psi = \frac{1}{i\hbar}\left(-\frac{\hbar^2}{2m}\nabla^2\psi + V\psi\right)
$$

이를 대입하면:

$$
\frac{\partial}{\partial t}\int \rho\,dx = \frac{1}{i\hbar}\int dx^3 \left(\frac{\hbar^2}{2m}\nabla^2\psi^* - V\psi^*\right)\psi + \psi^*\left(-\frac{\hbar^2}{2m}\nabla^2\psi + V\psi\right)
$$

$\psi$와 $\psi^*$, $V$는 연산자가 아니라 함수라서 교환이이 성립한다. 따라서 **$V\psi^*\psi$ 와 $\psi^* V\psi$ 가 cancel out**:

$$
\frac{\partial}{\partial t}\int \rho\,dx = \frac{\hbar}{2mi}\int dx^3 \left(\nabla^2\psi^*\right)\psi - \psi^*\left(\nabla^2\psi\right)
$$

여기서 다음 항등식을 이용한다:

$$
\nabla\cdot\left[\psi\nabla\psi^* - \psi^*\nabla\psi\right] = \psi\nabla^2\psi^* - \psi^*\nabla^2\psi + (\nabla\psi)\cdot(\nabla\psi^*) - (\nabla\psi^*)\cdot(\nabla\psi)
$$

$$
= \psi\nabla^2\psi^* - \psi^*\nabla^2\psi
$$

이것을 이용하면:

$$
\frac{\partial}{\partial t}\int \rho\,dx = \frac{i\hbar}{2m}\int dx^3\,\nabla\cdot\left[\psi^*\nabla\psi - \psi\nabla\psi^*\right]
$$

이렇게 **Probability current** (flux) $\mathbf{J}$를 정의한다:

$$
\boxed{\mathbf{J} = -\left(\frac{i\hbar}{2m}\right)\left[\psi^*\nabla\psi - \psi\nabla\psi^*\right]}
$$

$$
\therefore \int \left(\frac{\partial \rho}{\partial t} + \nabla\cdot\mathbf{J}\right)dx^3 = 0
$$

이게 바로 **Continuity Equation**이다.

---

## Hamilton-Jacobi Equation (고전역학)

> 양자역학 공식에서 무엇을 바꿔야 고전역학이 될까?
> 이것을 이해하기 위해, Hamilton-Jacobi equation을 먼저 알아야 된다.

### 설정

운동의 시작점 $q^i$, 운동의 끝점 $q^f$, 그리고 총 운동 시간 $T$가 주어졌을 때, 이 조건을 만족하며 오일러-라그랑주 방정식을 만족하는 경로 $q^\text{classical}$이 있다고 하자.

어떤 함수 $W$는 $q^i$, $q^f$, $T$가 주어졌을 때 $q^\text{classical}$의 **액션값**을 반환한다:

$$
W(q^i_s,\, q^f_s,\, T) = S(q^\text{classical}) = \int_0^T \mathcal{L}(q^\text{classical},\, \dot{q}^\text{classical},\, t)\,dt
$$

### $W$의 미분

$\delta S$를 구하면, 고전적인 경로를 따으기 때문에 오일러-라그랑주 방정식에 따라 **bulk term은 0**이 된다. 남는 건 boundary term 뿐이다. 

$$
\delta S = \int_0^T \left[\frac{\partial \mathcal{L}}{\partial q} - \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right)\right]dt + \left[\frac{\partial \mathcal{L}}{\partial \dot{q}}\,\delta q\right]_0^T = \frac{\partial \mathcal{L}}{\partial \dot{q}}\bigg|_\text{final}\delta q^\text{final} - \frac{\partial \mathcal{L}}{\partial \dot{q}}\bigg|_\text{initial}\delta q^\text{initial}
$$

따라서:

$$
\delta S = p^\text{final}\,\delta q^\text{final} - p^\text{initial}\,\delta q^\text{initial}
$$

**$W$를 $q^f$에 대해 미분하면 마지막 점에서 운동량 $p^\text{final}$이 나온다**:

$$
\frac{\partial W}{\partial q^f_s} = \frac{\delta S}{\delta q^\text{final}_s} = p^\text{final}
$$

### $T$에 대한 전미분

$\dfrac{dW}{dT}$ 자체는 마지막 시점에서 라그랑지안이다:

$$
\frac{dW}{dT} = \mathcal{L}\!\left(q^\text{final}_s,\, \dot{q}^\text{final},\, T\right)
$$

그런데 $\dfrac{dW}{dT}$를 편미분으로도 쪼갤 수 있다:

$$
\frac{dW}{dT} = \frac{\partial W}{\partial T} + \frac{\partial W}{\partial q^f_s}\dot{q}^\text{final}_s = \frac{\partial W}{\partial T} + p^\text{final}_s\,\dot{q}^\text{final}_s = \mathcal{L}^\text{final}
$$

라그랑주-르장드르 변환이 가능하다:

$$
\frac{\partial W}{\partial T} = \mathcal{L}^\text{final} - p^\text{final}_s\,\dot{q}^\text{final}_s = -\mathcal{H}(q^\text{final}_s,\, p^\text{final}_s,\, T)
$$

앞에서 $p^\text{final}$도 $W$로 나타낼 수 있으므로:

$$
\boxed{\frac{\partial W}{\partial t} = -\mathcal{H}\!\left(q_s,\, \frac{\partial W}{\partial q_s},\, t\right)}
$$

이것이 바로 **Hamilton-Jacobi Equation**이다.

### 정리

$$
\frac{\partial W}{\partial q^f_s} = p^f_s \qquad,\qquad \frac{\partial W}{\partial t} = -\mathcal{H}
$$

### $W$의 물리적 의미

$W$를 어떻게 이해해야 할까? 운동의 시작점은 고정해 두고, 끝점 $q^f$와 $t$만 변수로 받는 함수로 보자. 이것은 **configuration space에 퍼져있고, 시간에 따라 변화하는 스칼라 장**이다.
즉, $W(q, t)$는 **"입자가 $t$시간에 $q$에 위치하게 있기위해 지금까지 운동한 동안 생긴 액션"** 이다.

$\nabla W_{(x)} = P_{(x)}$이기 때문에, 이 스칼라 장의 기울기가 한 순간, 그 지점에서 운동을 결정한다.

한 시점에서 $W$ 값이 같은 점을 모아서 **등위면 (마치 전기장 전기포텐셜에서 등전위 면처럼)** 을 생각할 수 있다면, 입자는 그 면에 수직한 방향으로 움직인다.

> [!note] 최소 작용의 원리
> 최소 작용의 원리에 따라, 입자의 운동 방향은 $W$의 등위면에 수직하게 결정된다. $\nabla W = P$이므로, $W$의 기울기 방향이 곧 운동량의 방향이다. "기울기를 따라 간다"가 아니라, 기울기 방향이 곧 운동량 방향이라는 뜻.


해밀토니안이 시간에 불변하여 $\dfrac{\partial \mathcal{H}}{\partial t} = 0$ 이라면,

$$
\frac{\partial^2 W}{\partial t^2} = -\frac{\partial \mathcal{H}}{\partial t} = 0 \qquad \Rightarrow \qquad \frac{\partial W}{\partial t} = \text{constant}
$$

$W$는 $t$에 대한 일차 항을 가진다. 어떤 상수 $E$를 이용해, $W(q, t)$를 위치와 시간에 대한 함수로 분리할 수 있다:

$$
W = W^0(q) - Et
$$

여기서 $E$는 초기 상태에 의해 정해지는 값이며, 이 값이 바로 **total energy**라는 것을 유도할 수 있다. 

$$
\mathcal{H} = \frac{p^2}{2m} + V = \frac{1}{2m}\sum_s\left(\frac{\partial W}{\partial q_s}\right)^2 + V = \frac{1}{2m}|\nabla W|^2 + V
$$

$W(q, t)$와 해밀턴-자코비 방정식에 대입하면:

$$
\frac{\partial}{\partial t}(W^0 - Et) = -\frac{1}{2m}\left|\nabla(W^0 - Et)\right|^2 + V
$$
$$
P = \nabla W(q, t) = \nabla W^0
$$
$$
-E + \frac{1}{2m}|\nabla W^0|^2 + V = 0 \qquad \Rightarrow \qquad |\nabla W^0| = \sqrt{2m(E - V)} = |P|
$$



 $E - V$가 바로 $\dfrac{|P|^2}{2m}$, 즉 운동 에너지이므로, $E$는 곧 총 에너지이다. 
 $W(q, t)$를 결정할 때 $E$값을 초기상태에 따라 총 에너지로 지정해 주고, $\nabla W^0$를 풀어주면, 그것은 총 에너지 $E$를 보존하는 입자의 운동을 기술하는 $W$가 되는 것이다.

특정한 $W^0$ 값을 가지는 면(등위면)은 시간에 따라 움직일 수 있다. 이 면은 운동량 방향으로 이동하며, 이동속도는 마치 파동의 파면의 **phase velocity**에 비유할 수 있다.
아래 식이 생소하다!! 시간에 따라서 W(x,t) 전체가 아래로 푹 꺼진다고 상상하면, 국소적으로 W의 기울기의 크기가 클 수록 면이 느리게 이동한다는 것을 떠올릴 수 있다. 
$$
v_\text{phase} = \frac{E}{|\nabla W^0|} = \frac{E}{|P|} = \frac{E}{\sqrt{2m(E-V)}}
$$

($E$ 자체가 이동속도가 아니다. 운동량 $|P| = \sqrt{2m(E-V)}$로 나눈 값이다.)

---

## Wave Function의 극좌표 표현과 Probability Current의 의미

파동함수를 확률 밀도 $\rho(\mathbf{x}, t)$와 위상 $S(\mathbf{x}, t)$로 분리해 나타낼 수 있다:

$$
\psi(\mathbf{x}, t) = \sqrt{\rho(\mathbf{x}, t)} \exp\left[\frac{iS(\mathbf{x}, t)}{\hbar}\right]
$$

Phase를 굳이 $S(\mathbf{x}, t)$라고 쓴 건 우연이 아니다. 파인만의 경로 적분에 따르면, **시간이 지날 때 파동함수의 phase는 액션만큼 돌아간다**. 즉 $S(\mathbf{x}, t)$는 바로 액션이자, Hamilton-Jacobi 방정식에 등장하는 $W(q, t)$와 같은 것이다.

고전역학에서 $\nabla W_{(x)} = P_{(x)}$였던 것과 대응하여, $\nabla S_{(x)}$는 **고전적 대응(classical correspondence)으로서 국소 운동량의 역할**을 한다. 엄밀하게는 $\hbar \to 0$ 극한에서 성립하는 관계이며, 일반적인 양자 상태에서 $\nabla S$는 정확한 운동량 eigenvalue가 아니라 **국소 평균 운동량(local mean momentum)**에 해당한다:

$$
\nabla S_{(x)} \longleftrightarrow P_{(x)} \quad (\hbar \to 0 \text{ 극한})
$$

Probability current도 이것으로 결정된다:

$$
\boxed{\mathbf{J} = \frac{\rho \nabla S}{m}}
$$

이 식의 구조를 보면: **Probability current = probability density × velocity field**. $\dfrac{\nabla S}{m}$이 velocity field 역할을 하는 것이다. 고전 유체역학의 연속 방정식 $\dfrac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$과 정확히 같은 구조다.

---

## Classical Limit of Quantum Mechanics (WKB)

이제 양자역학과 연관지어 보자. 파동함수를 복소수 극좌표계로 나타낼 것이다.

어떤 함수 $\Theta(x, t)$에 대해, $\psi = e^{i\Theta/\hbar}$라고 나타내자. 이것을 슈뢰딩거 방정식에 넣어 보자. $\nabla^2\psi = \nabla^2 e^{i\Theta/\hbar}$를 계산하는 게 관건.

### $\nabla^2\psi$ 계산 (1차원에서)

$$
\frac{\partial^2\psi}{\partial x^2} = \frac{\partial}{\partial x}\left[\frac{i}{\hbar}\left(\frac{\partial\Theta}{\partial x}\right)\psi\right] = \frac{i}{\hbar}\left(\frac{\partial^2\Theta}{\partial x^2}\right)\psi - \frac{1}{\hbar^2}\left(\frac{\partial\Theta}{\partial x}\right)^2\psi
$$

3차원으로 일반화하면:

$$
\nabla^2\psi = \frac{i}{\hbar}(\nabla^2\Theta)\psi - \frac{1}{\hbar^2}|\nabla\Theta|^2\psi
$$

이를 이용해 슈뢰딩거 방정식을 풀면, **$\Theta$에 대한 미분방정식**을 얻을 수 있다:

$$
\boxed{\frac{\partial}{\partial t}\Theta + \frac{1}{2m}|\nabla\Theta|^2 + V = \frac{i\hbar}{2m}\nabla^2\Theta}
$$

### $\hbar \to 0$ 극한: Classical Limit

만약 $\hbar \to 0$이라면, $W$ 대신 $\Theta$에 대한 **Hamilton-Jacobi Equation**이 되는 것이다.

$$
\text{양자역학 방정식이 고전적으로 되는 것이다.}
$$

$$
\psi = \exp\!\left(-\frac{i}{\hbar} \cdot \text{고전적 작용}\right) \qquad \text{→ 양자역학에서는 action이 phase를 돌린다.}
$$

### $\hbar$ 전개 (WKB Expansion)

$\Theta$를 $\hbar$에 대해 expand 해 보자. 0차항이 고전적 $W$가 되리라 기대한다:

$$
\Theta \approx W + \frac{\hbar}{i}W_1 + \left(\frac{\hbar}{i}\right)^2 W_2 + \cdots
$$

$\hbar|\nabla^2 W| \ll |\nabla W|^2$ 일 때 시스템은 고전적이게 된다.

> [! AI 보충 설명]
> 이 조건을 직관적으로 해석하면: $W$의 변화 스케일 $\lambda_W$가 드 브로이 파장 $\lambda_\text{dB} = h/p$보다 훨씬 클 때, 즉 **양자 효과(파장)에 비해 그 스케일이 충분히 클 때** 고전적이 된다. $\psi = e^{i\Theta/\hbar}$의 phase가 짧은 거리 안에서 빠르게 돌아갈수록 (비유: 파장이 짧을수록) 고전적이다.
>
> 드 브로이 물질파 $p = \hbar k = h/\lambda$는 이 조건의 직관적 보연이다. 조건 $\hbar|\nabla^2 W| \ll |\nabla W|^2$의 의미를 구체적으로 보여주는 예시다:
> $$
> |\nabla W|^2 \sim p^2, \qquad \hbar|\nabla^2 W| \sim \hbar\frac{p}{\lambda_W} \sim \frac{h}{\lambda_W}p
> $$
> 따라서 조건 $\hbar|\nabla^2 W| \ll |\nabla W|^2$는 $\lambda_\text{dB} = h/p \ll \lambda_W$와 동치다. 드 브로이 파장이 시스템의 건화량 스케일보다 훨씬 짧을 때 고전 근사가 성립한다.



### $W_1$ 계산 → 나중에 직접 해보기!

$\Theta \approx W + \frac{\hbar}{i}W_1 + \cdots$를 $\Theta$에 대한 미분방정식에 넣고 **$\hbar^1$ 차수 항만** 모으면 $W_1$을 구할 수 있다.

먼저 $\hbar^0$ 차수를 모으면 Hamilton-Jacobi 방정식이 나온다 (예상대로):

$$
\frac{\partial W}{\partial t} + \frac{1}{2m}|\nabla W|^2 + V = 0
$$

$\hbar^1$ 차수 항을 모으면 $W_1$ 방정식이 나온다:

$$
\frac{\hbar}{i}\frac{\partial}{\partial t}W_1 + \frac{1}{2m}\cdot\frac{\hbar}{i}\cdot 2(\nabla W \cdot \nabla W_1) = i\hbar\frac{1}{2m}\nabla^2 W
$$

$|\nabla\Theta|^2$의 전개에서 $\hbar^1$ 항이 $2\nabla W \cdot \nabla(\frac{\hbar}{i}W_1)$로 나오고, 우변의 $\frac{i\hbar}{2m}\nabla^2\Theta$에서 $\hbar^1$ 항이 $\frac{i\hbar}{2m}\nabla^2 W$로 나오는 것이다. 양변을 $\frac{\hbar}{i}$로 나누면 $W_1$에 대한 선형 PDE를 얻는다.

### $W_1$까지 구하면 — Probability Density

$W_1$까지 구하면, 이것으로 probability density $\rho$를 결정:

$$
\psi = e^{i\Theta/\hbar} = e^{i(W + \frac{\hbar}{i}W_1)/\hbar} = e^{W_1}\,e^{iW/\hbar}
$$

$$
|\psi|^2 = e^{2W_1} = \rho(x, t)
$$

**"고전적 액션에서 벗어난 항이 probability distribution을 만든다."**

---

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트


# References
Tong의 고전역학 교재
[[4 The Hamiltonian Formulation.pdf]]

# 다음 강의

[[QM lecture note - Propagators and Path Integral]]

# 원본 필기

![[QM_6thweek_1.pdf]]
