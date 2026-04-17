---
title: Green Function for Wave Equation
date: "2026-04-17"
subject: physics
tags:
  - study
  - concept
  - electrodynamics
  - green-function
class: study
---

# Green Function for Wave Equation

## 기호 범례

| 기호            | 의미                                              |
| ------------- | ----------------------------------------------- |
| $\phi$        | 스칼라 포텐셜                                         |
| $\mathbf{A}$  | 벡터 포텐셜                                          |
| $\square$     | 달랑베르시안 (d'Alembertian) 연산자                      |
| $k$           | 파수 (wave number), $k = \omega/c$                |
| $R$           | 소스-관찰자 사이 거리, $R =\|\mathbf{x} - \mathbf{x}'\|$ |
| $\tau$        | 지연 시간, $\tau = t - t'$                          |
| $G^+$         | 지연 그린 함수 (retarded Green function)              |
| $G^-$         | 선진 그린 함수 (advanced Green function)              |
| $\tilde{G}_k$ | $k$-공간에서의 그린 함수                                 |

---

## wave equation을 위한 Green's function

$\mathbf{A}$와 $\phi$에 대한 맥스웰 방정식이 어떻게 생겼는지 상기해 보자.

$$
\nabla^2\phi + \frac{1}{c^2}\frac{\partial}{\partial t}(\nabla\cdot\mathbf{A}) = -\frac{\rho}{\epsilon_0}
\tag{1}
$$

$$
\nabla^2\mathbf{A} - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\mathbf{A} - \nabla\!\left(\nabla\cdot\mathbf{A} + \frac{1}{c^2}\frac{\partial\phi}{\partial t}\right) = -\mu_0\mathbf{J}
\tag{2}
$$

Lorentz gauge $\nabla\cdot\mathbf{A} + \frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2} = 0$ 을 사용.

$\phi$와 $\mathbf{A}$에 대해, 독립적인 wave equation이 나온다.

가끔, wave equation에 나오는 연산자 $\nabla^2 - \frac{1}{v^2}\frac{\partial^2}{\partial t^2} = \square$ 를 
이렇게 하나의 연산자 기호로 □ 네모로 쓰기도 한다. 
세모에 이어 네모라니, 뇌절이다.
이때, $v$는 phase velocity, 여기서는 $v = c$, 광속이다.

$$
\left(\nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\right)\phi = \square\phi = -\frac{\rho}{\epsilon_0}
\tag{3}
$$

$$
\left(\nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\right)\mathbf{A} = \square\mathbf{A} = -\mu_0\mathbf{J}
\tag{4}
$$

---

시간 공간에서 진동수 공간으로 변환해 주는 푸리에 변환을 양 변에 취하면,
귀찮은 시간 미분항이 파수가 된다. $-\frac{1}{c^2}\frac{\partial^2}{\partial t^2} \xrightarrow{\text{FT}} k^2 = \frac{\omega^2}{c^2}$. 
물리적 차원은 양쪽이 같다. 

이러면 방정식이 오로지 공간에 대한 문제가 되면서 풀이가 간편해진다.

파동 방정식 일반식,

$$
\left(\nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\right)\psi(x, t) = -4\pi f(x, t)
\tag{5}
$$

에 푸리에 변환을 해보자.  
어려워 보이는 $\frac{\partial^2}{\partial t^2}\psi(x, t)$ 항만 먼저 푸리에 변환해 보자. 
부분 적분은 두 번 연속 적용해 보면. 

$$
\frac{\partial^2}{\partial t^2}\psi \xrightarrow{\text{FT}} \int_{-\infty}^{\infty}dt\,e^{i\omega t}\frac{\partial^2}{\partial t^2}\psi = \left[e^{i\omega t}\frac{\partial}{\partial t}\psi\right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty}dt\,i\omega e^{i\omega t}\frac{\partial}{\partial t}\psi
\tag{6}
$$

$$
= - \left[i\omega e^{i\omega t}\psi\right]_{-\infty}^{\infty} + \int_{-\infty}^{\infty}(i\omega)^2 e^{i\omega t}\psi\,dt = -\omega^2\tilde{\psi}(x,\omega)
\tag{7}
$$
시간 2계 미분 연산자가 $-\omega^2$이 되었다. 

따라서 기존의 파동방정식은 이렇게 변환된다. 

$$
\left(\nabla^2 + \frac{\omega^2}{c^2}\right)\tilde{\psi}(x,\omega) = -4\pi\tilde{f}(x,\omega)
\tag{8}
$$

우리는 이걸 헬름홀츠 방정식이라고 부르기로 한다.

이제 이 방정식의 Green function을 찾아보자.

Green's function은 $\tilde{f}(x,\omega) = \delta(x-x')$ 로 두었을 때 solution이다.

$$
\left(\nabla^2 + k^2\right)\tilde{G}_k(x, x') = -4\pi\,\delta(x - x')
\tag{9}
$$

즉, 각각의 $k$에 대한 solution $\tilde{G}_k(x,x')$ 를 찾는 것이다. $k$를 상수 취급하는 것이다. 

$\mathbf{R} = x - x'$, $\mathbf{R}$이 소스와 관찰자 사이 변위 벡터일 때,

$$
\nabla^2 = \frac{1}{R}\frac{\partial^2}{\partial R^2}R
\tag{10}
$$

> [!question] 라플라시안을 왜 이렇게 두는 건지는 모르겠다!

> [!tip] Glia의 보충 설명
> 이건 **구면 대칭**을 활용한 트릭이야. 3차원 라플라시안을 구면좌표계로 쓰면 $\theta$, $\varphi$ 항이 포함되는데, $\tilde{G}_k$는 점 소스에서의 그린 함수이므로 해가 **구면 대칭** — $\theta$, $\varphi$ 의존성이 없어. 각도 항들이 다 0이 되고:
> $$
> \nabla^2 \tilde{G}_k = \frac{1}{R^2}\frac{\partial}{\partial R}\!\left(R^2\frac{\partial \tilde{G}_k}{\partial R}\right)
> $$
> 이걸 항등식으로 다르게 쓰면 $\frac{1}{R}\frac{\partial^2}{\partial R^2}(R\tilde{G}_k)$와 같다. 직접 전개해서 확인하면:
> $$
> \frac{1}{R}\frac{\partial^2}{\partial R^2}(Rf) = \frac{2}{R}\frac{\partial f}{\partial R} + \frac{\partial^2 f}{\partial R^2} = \frac{1}{R^2}\frac{\partial}{\partial R}\!\left(R^2\frac{\partial f}{\partial R}\right)
> $$
> 이렇게 쓰는 **진짜 이유**는, $u(R) \equiv R\tilde{G}_k(R)$ 로 치환하면 식 (12)가 단순한 1D 조화진동자 ODE로 바뀌기 때문이야:
> $$
> \frac{\partial^2 u}{\partial R^2} + k^2 u = 0
> $$
> 해가 바로 $u = Ae^{ikR} + Be^{-ikR}$ — 이게 핵심 트릭.

$$
\frac{1}{R}\frac{\partial^2}{\partial R^2}(R\tilde{G}_k) + k^2\tilde{G}_k = -4\pi\,\delta(R)
\tag{11}
$$

$R \neq 0$ 일 때, 우변은 0이다.

$$
\frac{\partial^2}{\partial R^2}(R\tilde{G}_k) + k^2(R\tilde{G}_k) = 0
\tag{12}
$$
간단한 미분 방정식이며, 아래와 같이 일반식을 쓸 수 있다. 
$$
\Rightarrow\quad R G_k(R) = A e^{ikR} + B e^{-ikR}
\tag{13}
$$

$$
\therefore\quad \tilde{G}_k(R) = A\cdot\frac{1}{R}e^{ikR} + B\frac{1}{R}e^{-ikR}, \quad A+B=1
\tag{14}
$$

$kR \to 0$ 극한: $\tilde{G}_k(R) = \frac{1}{R}$


Exponential 내부가 음수인 것과 양수인 것, 두 가지 해를 구별해서 적어보자면, 
$$
\tilde{G}_k^{(\pm)}(R) = \frac{1}{R}e^{\pm ikR}
\tag{15}
$$
이 둘의 물리적 기능은 완전 상반된다. 

---

헬름홀츠 방정식의 양 변에 $e^{i\omega t'}$ 를 곱해준다 → 왜 이렇게 하는 건지 논리를 이해 못 하겠다!

> [!question] 헬름홀츠 방정식 양변에 $e^{i\omega t'}$를 곱하는 이유
> 필기 당시 이 논리를 이해하지 못했다고 메모되어 있음. 왜 $e^{i\omega t'}$를 곱하면 $t$-space의 파동 방정식으로 돌아오는지?

> [!tip] Glia의 보충 설명
> **목표를 먼저 생각하자.** 우리가 원하는 건 식 (17), 즉 시공간 파동 방정식의 그린 함수 방정식이야:
> $$
> \left(\nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\right)G^{(\pm)}(x,t;\,x',t') = -4\pi\,\delta(x-x')\,\delta(t-t')
> $$
> 오른쪽에 $\delta(t-t')$가 필요한데, 이걸 푸리에 표현으로 쓰면:
> $$
> \delta(t-t') = \frac{1}{2\pi}\int_{-\infty}^{\infty}d\omega\,e^{-i\omega(t-t')} = \frac{1}{2\pi}\int_{-\infty}^{\infty}d\omega\,e^{i\omega t'}\,e^{-i\omega t}
> $$
> **$\delta(t-t')$는 $e^{i\omega t'}$의 역 푸리에 변환이야.** 그러니까 $e^{i\omega t'}$를 헬름홀츠 방정식 양변에 곱하고 $\frac{1}{2\pi}\int d\omega\,e^{-i\omega t}$ 를 취하면:
> - **좌변:** $k^2 = \omega^2/c^2$이므로 역변환할 때 $k^2 \to -\frac{1}{c^2}\frac{\partial^2}{\partial t^2}$ 로 복원됨. $\nabla^2$은 영향 받지 않으므로 그대로.
> - **우변:** $-4\pi\,\delta(x-x') \cdot \frac{1}{2\pi}\int d\omega\,e^{i\omega t'}e^{-i\omega t} = -4\pi\,\delta(x-x')\,\delta(t-t')$
> 
> 한 줄 요약: **$e^{i\omega t'}$를 곱하는 건 $\delta(t-t')$를 오른쪽에 만들어내기 위한 장치야.** 역 푸리에 변환이 $\delta(t-t')$를 만들어주고, 동시에 $k^2$항이 시간 2계 미분으로 복원되면서 원래 파동 방정식의 그린 함수 방정식이 나오는 구조야.

$$
\left(\nabla^2 + k^2\right)\tilde{G}_k^{(\pm)}\,e^{i\omega t'} = -4\pi\,\delta(x-x')\,e^{i\omega t'}
\tag{16}
$$

이걸 다시 $\omega$-space에서 $t$-space로 역 푸리에 변환.

$$
\left(\nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}\right)G^{(\pm)}(x,t;\,x',t') = -4\pi\,\delta(x-x')\,\delta(t-t')
\tag{17}
$$

이때, $G^{(\pm)}$는 $\tilde{G}_k^{(\pm)}e^{i\omega t'}$의 역 푸리에 변환이다. $\tau = t - t'$ 일 때,

$$
G^{(\pm)}(R,\tau) = \frac{1}{2\pi}\int_{-\infty}^{\infty}d\omega\,\frac{1}{R}\,e^{\pm ikR}\cdot e^{i\omega t'}\cdot e^{-i\omega t}
\tag{18}
$$

$$
= \frac{1}{2\pi}\int_{-\infty}^{\infty}d\omega\,\frac{1}{R}\,e^{\pm ikR}\,e^{-i\omega(t-t')}
\tag{19}
$$

$$
= \frac{1}{2\pi}\int_{-\infty}^{\infty}d\omega\,\frac{1}{R}\exp\!\left[i\omega\!\left(-\tau \pm \frac{|x-x'|}{c}\right)\right]
\quad \left(\begin{aligned}&R = |x-x'|\\&k=\frac{\omega}{c}\end{aligned}\right)
\tag{20}
$$

상수를 푸리에 변환하면 exponential 내부를 0으로 만드는 조건으로 디랙 델타가 나온다는 것을 이미 알고 있다. 

$$
\therefore\quad G^{(\pm)}(R,\tau) = \frac{1}{R}\,\delta\!\left(\tau \mp \frac{R}{c}\right)
\tag{21}
$$

$$
G^{(\pm)}(x,t;\,x',t') = \frac{1}{|x'-x|}\,\delta\!\left(t - t' \mp \frac{|x-x'|}{c}\right) \tag{22}
$$
$$
\left(\text{디락 델타가 0이 아닐 조건은 }t - t' = \pm\frac{|x-x'|}{c}\right)

$$

이때, $\frac{|x-x'|}{c} \geq 0$ 이므로, 
$G^+$인 경우 $t - t' > 0$ 이고, $G^-$인 경우 $t - t' < 0$ 일 때 
디랙 델타가 무한대가 되는 지점이 있다.

$t - t'$는 소스에서 신호가 나온 시점과 그것을 관찰자가 감지한 시점까지의 지연을 나타낸다. 
인과율을 생각하면, $t - t' > 0$인 게 자연스럽다. 
$t - t' < 0$이면 신호가 생성되기도 전에 감지한 것이므로, 미래를 예견했다는 의미이다. 

따라서 $G^+$와 $G^-$는 다른 별명을 가지고 있다.

- **$G^+$: retarded green function.**
  - $(x, t)$에서 일어난 관찰은 앞선 시점  $t' = t - \frac{|x-x'|}{c}$에서 $|x-x'|$만큼 떨어진 거리에서 일어난 신호를 감지한 것이다.

- **$G^-$: advanced Green function.**

---

Green function을 이용하여 general solution $\psi^{(\pm)}(x,t)$를 구하면 이렇다.

$$
\psi^{(\pm)}(x,t) = \iint dx'\,dt'\;G^{\pm}(x,t;\,x',t')\,f(x',t')
\tag{23}
$$

retarded green's function만 사용한 경우,

$$
\psi(x,t) = \iint dx'\,dt'\;\frac{1}{|x'-x|}\,\delta\!\left(t-t'-\frac{|x-x'|}{c}\right)f(x',t')
\tag{24}
$$
시간에 대해 적분하며 $t' = t - \frac{|x-x'|}{c}$가 대입된다. 

$$
\boxed{\psi(x,t) = \int dx'\;\frac{f\!\left(x',\,t-\frac{|x-x'|}{c}\right)}{|x'-x|}}
\tag{25}
$$

---

## 연관 학습 노트

- [[포텐셜을 이용한 맥스웰 방정식]]
- [[Wave Equation from Maxwell Equations]]
- [[Poisson_Equation_for_Dirac_Delta_and_Point_Charge_Potential]]
- [[ED lecture note - Radiating Systems]]
- [[ED lecture note - Electric Dipole Radiation]]

## Reference

![[ED_Green_function.pdf]]
전기역학 handout
[[Greenfunction_derivation.pdf]]