---
title: "QM lecture note - Path Integral Formulation"
date: "2026-04-08"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.


아직 실제 필기 내용이랑 대조 검토 안 함.. 해야해..
# 지난 강의

[[QM lecture note - Propagators and Path Integral]]

Propagator $K(x_N, t_N; x_1, t_1)$는 time evolution operator를 위치 기저로 나타낸 matrix element이다. Feynman은 이것을 시간 조각으로 쪼개서 모든 경로에 대한 합으로 표현했다.

→ 오늘은 그 경로 적분의 구체적인 수학적 구조를 전개하고, 이로부터 슈뢰딩거 방정식을 다시 유도해보자.

# 오늘의 핵심

- **짧은 시간 $\Delta t$ 동안의 propagator**는 normalization 인자 $\omega(\Delta t)$와 action의 phase로 분리된다.
- 시간 조각을 무한히 쪼개면, propagator는 모든 경로에 대한 **path integral**로 표현된다.
- $\Delta t \to 0$ 극한에서 path integral로부터 **슈뢰딩거 방정식**이 직접 유도된다.
- $\omega(\Delta t)$는 free propagator와의 비교로 결정된다: $\omega(\Delta t) = \sqrt{\frac{2\pi i \hbar \Delta t}{m}}$

# 필기 내용

## 짧은 시간 동안의 Propagator

짧은 시간 $\Delta t$ 동안의 propagator를 구체적으로 써보자.

$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle = \frac{1}{\omega(\Delta t)} \exp\!\left(\frac{i\, S(n, n-1)}{\hbar}\right)
\tag{1}
$$

여기서 $\frac{1}{\omega(\Delta t)}$은 normalization constant이다. $(x_n, t_n) \to (x_{n-1}, t_{n-1})$은 충분히 짧은 시간 구간으로 간주한다.

$\Delta t$는 아주 작다고 가정한다. 짧은 시간 $\Delta t$ 동안의 action $S(n, n-1)$는:

$$
S(n, n-1) = \int_{t_{n-1}}^{t_n} dt \left[\frac{m}{2}\dot{x}^2 - V(x)\right] \approx \Delta t \left[\frac{m}{2}\frac{(x_n - x_{n-1})^2}{\Delta t^2} - V\!\left(\frac{x_n + x_{n-1}}{2}\right)\right]
\tag{2}
$$
이때, 속도는 짧은 시간 동안 등속운동한다는 전제로 결정된다. 포텐셜은 시작점과 끝점의 중간 위치에서 포텐셜로 정한다. 

따라서 짧은 구간의 propagator는:

$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle = \frac{1}{\omega(\Delta t)} \exp\!\left[\frac{i\Delta t}{\hbar}\left(\frac{m}{2}\frac{(x_n - x_{n-1})^2}{\Delta t^2} - V\!\left(\frac{x_n + x_{n-1}}{2}\right)\right)\right]
\tag{3}
$$

포텐셜 항은 $\Delta t$에 비례하기 때문에 $\exp\!\left(\frac{i}{\hbar} V\Delta t\right) \approx 1$로 근사할 수 있다.

그러므로 $\omega(\Delta t)$는 **kinetic term으로만** 결정된다, 따라서 free propagator(포텐셜없이 해밀토니안에 운동에너지만 있는 상태태)에서 아래와 같이 결정된다.

### $\omega(\Delta t)$의 결정

Free propagator로부터 normalization condition을 써보면:

$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle\big|_{t_n = t_{n-1}} = \delta(x_n - x_{n-1})
\tag{4}
$$
지난시간에 배운바, free propagetor는 가우시안 분포였다.
출발과 도착사이의 시간 간격은 가우시안 분포에서 variance와 비례했다. 
따라서 시간 간격을 0에 가깝게 하면, variance가 0이 되어 가면서 가우시안 분포가 디락델타가 된다. 
디락델타는 그자체오 normalization이 된 분포이다. 
이렇듯,
$t_n \to t_{n-1}$, $\Delta t \to 0$ 극한에서 $\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle\big|_{t_n = t_{n-1}}$이 Dirac delta가 되어야 한다는 조건으로부터, $\xi = x_n - x_{n-1}$으로 놓고:

$$
\int_{-\infty}^{\infty} d\xi\, \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right) = \sqrt{\frac{2\pi i \hbar \Delta t}{m}} = \omega(\Delta t)
\tag{5}
$$

그러므로:

$$
\lim_{\Delta t \to 0} \frac{1}{\omega(\Delta t)} \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right) = \delta(\xi)
\tag{6}
$$

> [!question] 왜 $2\pi$가 필요한가?
> 이 극한에서 $2\pi$는 어떤 역할을 하는가? $2\pi$ 없이는 Dirac delta 조건을 만족할 수 없다.
> → 실제로 Gaussian integral $\int e^{-\alpha u^2} du = \sqrt{\pi/\alpha}$에서 자연스럽게 나온다. 정규화 상수 자체에 $\sqrt{2\pi}$ 인자가 포함되어 있기 때문에, delta function의 표현과 맞추려면 이 인자가 필수적이다.

---

## Path Integral의 완전한 표현

위를 반복하면 전체 propagator는:

$$
\langle x_N, t_N \mid x_1, t_1 \rangle = \lim_{N\to\infty} \left(\frac{m}{2\pi i \hbar \Delta t}\right)^{\!\frac{N-1}{2}} \int dx_{N-1} \cdots \int dx_2 \prod_{n=2}^{N} \exp\!\left(\frac{i\, S(n, n-1)}{\hbar}\right)
\tag{7}
$$

경로 적분 측도(path integral measure)를 정의하면:

$$
\int_{x_1}^{x_N} \mathcal{D}(x(t)) \equiv \lim_{N\to\infty} \left(\frac{m}{2\pi i \hbar \Delta t}\right)^{\!\frac{N-1}{2}} \int dx_{N-1} \cdots \int dx_2
\tag{8}
$$

따라서 propagator는 아래와 같이 아름답게 표현된다:

$$
\boxed{\langle x_N, t_N \mid x_1, t_1 \rangle = \int_{x_1}^{x_N} \mathcal{D}(x(t))\; \exp\!\left[\frac{i}{\hbar} \int_{t_1}^{t_N} dt\, \mathcal{L}(x, \dot{x})\right]}
\tag{9}
$$

---

## Path Integral에서 Schrödinger 방정식 유도

$\Delta t$가 작을 때의 propagator:

$$
\langle x_1, t_1 + \Delta t \mid x_1, t_1 \rangle = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \int_{-\infty}^{\infty} d\xi\; \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right)\left(1 - \frac{iV\Delta t}{\hbar}\right) \langle x_1 - \xi, t_1 \mid x_1, t_1 \rangle
\tag{10}
$$

여기서 $\xi = x - (x_1 - \xi)$로 잡으면 ($x = x_1$, $\xi = x_1 - x_{n-1}$):

$$
\langle x, t + \Delta t \mid x_1, t_1 \rangle = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \int_{-\infty}^{\infty} d\xi\; \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right)\left(1 - \frac{iV\Delta t}{\hbar}\right) \langle x - \xi, t \mid x_1, t_1 \rangle
\tag{11}
$$

$\langle x - \xi, t \mid x_1, t_1 \rangle$를 $\xi$ 에 대해 Taylor 전개한다:

$$
\langle x - \xi, t \mid x_1, t_1 \rangle \approx \langle x, t \mid x_1, t_1 \rangle + \xi \frac{\partial}{\partial x}\langle x, t \mid x_1, t_1 \rangle + \frac{\xi^2}{2}\frac{\partial^2}{\partial x^2}\langle x, t \mid x_1, t_1 \rangle + \cdots
$$

> [!note] 홀수 차수 항 소거
> $\xi \to -\xi$ 대칭 때문에 홀수 차수 항은 Gaussian 적분 시 0이 된다. 즉 $\int \xi \cdot e^{im\xi^2/2\hbar\Delta t} d\xi = 0$.

적분을 수행하면 ($\int \xi^2 e^{im\xi^2/2\hbar\Delta t} d\xi$가 필요한 유일한 항):

$$
\Delta t \frac{\partial}{\partial t}\langle x, t \mid x_1, t_1 \rangle = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \cdot \sqrt{2\pi} \cdot \left(\frac{i\hbar\Delta t}{m}\right)^{\!3/2} \cdot \frac{1}{2}\frac{\partial^2}{\partial x^2}\langle x, t \mid x_1, t_1 \rangle - \frac{i}{\hbar}\Delta t\, V\langle x, t \mid x_1, t_1 \rangle
\tag{12}
$$

양변을 $\Delta t$로 나누고 정리하면:

$$
\boxed{i\hbar \frac{\partial}{\partial t}\langle x, t \mid x_1, t_1 \rangle = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\langle x, t \mid x_1, t_1 \rangle + V\langle x, t \mid x_1, t_1 \rangle}
\tag{13}
$$

**이것이 바로 슈뢰딩거 방정식이다.** Path integral은 슈뢰딩거 방정식과 동등한 또 다른 양자역학의 공식화임이 확인된다.

---

## 포텐셜과 게이지 변환 (연결)

**Constant potential** $V_0$를 더한다면:
- $\mathcal{H}' = \mathcal{H} + V_0$
- 포텐셜이 상수가 되면, wave function은 phase만 바뀌고, expectation value는 바뀌지 않는다.
- 전자기학에서도 해당되었던 이야기 → 다음 강의에서 자세히 다룬다.

$$
\psi'_{(\alpha)} = \exp\!\left(-\frac{i}{\hbar} t(\mathcal{H} + V_0)\right)\psi_0 = e^{-\frac{i}{\hbar}V_0 t}\psi_0
$$

$$
\psi_{(\alpha)} = \exp\!\left(-t\frac{i}{\hbar}\mathcal{H}\right)\psi_0
$$

→ $\psi_0 = \psi_\alpha$라는 것을 전제로 한다.

# 궁금한 내용

- **유도 연습**: 식 (12)의 Gaussian 적분 과정을 직접 해보자. $\int_{-\infty}^{\infty} d\xi\, \xi^2 \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right)$를 계산하고, 슈뢰딩거 방정식이 나오는지 확인하자.
- Path integral에서 고전 극한을 보이기: 질량이 커지면 action $S$의 스케일이 $\hbar$보다 훨씬 커져서, stationary phase approximation에 의해 고전 경로만 살아남음을 보여라.

# AI의 보충 설명

## Path Integral에서 슈뢰딩거 방정식 유도 — 빠진 계산 채우기

식 (12)에서 필요한 Gaussian 적분 두 가지:

$$
I_0 = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \int_{-\infty}^{\infty} d\xi\, \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right) = 1
$$

$$
I_2 = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \int_{-\infty}^{\infty} d\xi\, \xi^2\, \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right) = \frac{i\hbar\Delta t}{m}
$$

$I_2$의 계산: $\alpha = \frac{-im}{2\hbar\Delta t}$로 놓으면 $\int \xi^2 e^{-\alpha\xi^2}d\xi = \frac{\sqrt{\pi}}{2\alpha^{3/2}}$. 대입하면 $I_2 = \frac{i\hbar\Delta t}{m}$.

이것을 Taylor 전개 결과에 대입:

$$
\langle x, t+\Delta t \mid x_1, t_1 \rangle = \left(1 - \frac{iV\Delta t}{\hbar}\right)\left[\langle x,t\rangle + \frac{i\hbar\Delta t}{m}\cdot\frac{1}{2}\frac{\partial^2}{\partial x^2}\langle x,t\rangle\right]
$$

좌변을 $\langle x,t\rangle + \Delta t \frac{\partial}{\partial t}\langle x,t\rangle$으로 쓰고 $\Delta t$ 1차항만 남기면:

$$
\Delta t\frac{\partial}{\partial t}\langle x,t\rangle = \frac{i\hbar\Delta t}{2m}\frac{\partial^2}{\partial x^2}\langle x,t\rangle - \frac{iV\Delta t}{\hbar}\langle x,t\rangle
$$

$i\hbar$를 곱하면 슈뢰딩거 방정식이 된다. ∎

# 연관 학습 노트

- [[QM lecture note - Propagators and Path Integral]]
- [[QM lecture note - Wave Equation and Probability Conservation]]

# References

Sakurai, Modern Quantum Mechanics, Chap. 2

# 다음 강의

[[QM lecture note - Gauge Transformations]]

# 원본 필기

![[QM_7thweek_1.pdf]]
