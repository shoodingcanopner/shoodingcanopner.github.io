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
- $\omega(\Delta t)$는 free propagator와의 비교로 결정되거나, 아니면 그냥 normalization condition(probability perseravation)을 이용해도 된다. 
- In 1-dimension, $\omega(\Delta t) = \sqrt{\frac{2\pi i \hbar \Delta t}{m}}$ 
- $\omega(\Delta t)$는 $[L^d]$의 차원을 가지고 있다. 
- Propagator은 $[L^d]$의 차원을 가지고 있다. 위치에 대한 디락델타 함수와 차원이 같으므로. 

# 필기 내용

## 짧은 시간 동안의 Propagator

짧은 시간 $\Delta t$ 동안의 propagator를 구체적으로 써보자.
단기간동안 한 운동에 의한 action을 exponential로 올린 term앞에 비례 상수가 붙는 형태가 되어야 한다. 
이 비례 상수는 짧은 시간 간격$\Delta t$을 무엇으로 잡는가에 따라 달라져야 할 것이다. 

$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle = \frac{1}{\omega(\Delta t)} \exp\!\left(\frac{i\, S(n, n-1)}{\hbar}\right)
\tag{1}
$$

여기서 $\frac{1}{\omega(\Delta t)}$은 normalization constant이다. 
물리적 차원으로 생각해 보아도, position ket 사이의 inner product는 부피에 대한 역수 차원이다. 따라서 exponential term 앞에 부피에 대한 역수차원을 가지는 상수가 곱해져야 한다. 

짧은 시간 $\Delta t$ 동안의 action $S(n, n-1)$는, 등속 운동을 한다고 근사한다. 포텐셜은 시작점과 끝점의 중간 위치에서 포텐셜로 정한다. 

$$
S(n, n-1) = \int_{t_{n-1}}^{t_n} dt \left[\frac{m}{2}\dot{x}^2 - V(x)\right] \approx \Delta t \left[\frac{m}{2}\frac{(x_n - x_{n-1})^2}{\Delta t^2} - V\!\left(\frac{x_n + x_{n-1}}{2}\right)\right]
\tag{2}
$$

따라서 짧은 구간의 propagator는:

$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle = \frac{1}{\omega(\Delta t)} \exp\!\left[\frac{i\Delta t}{\hbar}\left(\frac{m}{2}\frac{(x_n - x_{n-1})^2}{\Delta t^2} - V\!\left(\frac{x_n + x_{n-1}}{2}\right)\right)\right]
\tag{3-1}
$$

포텐셜 항은 $\Delta t$에 비례하기 때문에 $V\Delta t \approx 0$로 근사할 수 있다.
$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle = \frac{1}{\omega(\Delta t)} \exp\!\left[\frac{im}{2 \hbar \Delta t}(x_n - x_{n-1})^2 \right]
\tag{3-2}
$$
그러므로 $\omega(\Delta t)$는 **kinetic term으로만** 결정된다.

### $\omega(\Delta t)$의 결정

Free propagator로부터 normalization condition을 써보면:

$$
\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle\big|_{t_n = t_{n-1}} = \delta(x_n - x_{n-1})
\tag{4}
$$
지난시간에 배운바, free propagetor는 가우시안 분포였다.
출발과 도착사이의 시간 간격은 가우시안 분포에서 variance와 비례했다. 
따라서 시간 간격을 0에 가깝게 하면, variance가 0이 되어 가면서 가우시안 분포가 디락델타가 된다. 
디락델타는 그자체로 normalization이 된 분포이다. 
이렇듯, $\omega(\Delta t)$는 propagator를 normalization을 할 수 있는 값이어야 한다. 
$\omega(\Delta t)$가 없는 exponential항을 적분했을 때 나오는 값이 바로 $\omega(\Delta t)$가 되어야 하는 것이다. 

$\xi = x_n - x_{n-1}$으로 놓고, $\exp\!\left[\frac{im}{2 \hbar \Delta t}(x_n - x_{n-1})^2 \right]$ 의 적분을 취해 보자. 그냥 가우시안 적분이다. 


$$
\int_{-\infty}^{\infty} d\xi\, \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right) = \int_{-\infty}^{\infty} d\xi\, \exp\!\left(-\frac{m}{2i\hbar\Delta t}\xi^2\right) =\sqrt{\frac{2\pi i \hbar \Delta t}{m}} = \omega(\Delta t)
\tag{5}
$$

그러므로:

$$
\lim_{\Delta t \to 0} \frac{1}{\omega(\Delta t)} \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right) = \delta(\xi)
\tag{6}
$$

결국 작은 시간 동안의 propagator는
$$
\boxed{\langle x_n, t_n \mid x_{n-1}, t_{n-1} \rangle = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \exp\!\left[\frac{iS(n,n-1)}{\hbar}\right]}

$$
exponential-action 항과 normalization constant, 둘이 곱해진 형태가 propagator라는 걸 잊지 말것. 

---

## Path Integral의 완전한 표현
![[Pasted image 20260415121616.png]]

짧은 시간 구간의 propagator들을 켜켜이 곱한 뒤, 위치에 대해 적분하자. 

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
$\mathcal{D}(x(t))$속 $x(t)$는 가능한 경로 중 하나를 나타낸 것, $\int_{t_1}^{t_N} dt\, \mathcal{L}(x, \dot{x})$는 그 경로에 대한 액션. 
결국 모든 경로에 의한 $\exp\!\left[\frac{i}{\hbar} \int_{t_1}^{t_N} dt\, \mathcal{L}(x, \dot{x})\right]$를 더한다는 뜻이다. 


---

## Path Integral에서 Schrödinger 방정식 유도
여기에서부터 시작한다. 
$\Delta t$ 딱 한 단계만 지날 때의, propagator사이의 관계식
$$
\braket{x_N,t_N|x_1,t_1} = \int dx_{N-1} \braket{x_N,t_N|x_{N-1},t_{N-1}}\braket{x_{N-1},t_{N-1}|x_1,t_1}
$$
N번째는 마지막 단계를 의미하므로, 기존 wave equation의 표기와 결을 맞추기 위해 
**$x_N$을 $x$이라고 표기하고 $t_{N-1}$을 $t$라고 표기하자.** 
나중에 테일러 전개를 취할 때, 이 변수를 어떻게 두느냐에 따라 난이도가 달라진다. 

$$
\braket{x,t + \Delta t|x_1,t_1} = \int dx_{N-1} \braket{x,t + \Delta t|x_{N-1},t} \braket{x_{N-1},t|x_1,t_1}
$$

$\Delta t$가 작을 때의 propagator, 어쩐지 이 증명법에서는 potential을 상수로 두는 것만 같다. 
시간이 아주 짧으면 변위가 크지 않으니까 그런가?

$$
\braket{x,t + \Delta t|x_1,t_1} = \sqrt{\frac{m}{2\pi i \hbar \Delta t}} \int_{-\infty}^{\infty} d\xi\; \exp\!\left(\frac{im\xi^2}{2\hbar\Delta t}\right)\left(1 - \frac{iV\Delta t}{\hbar}\right) \langle x_1 - \xi, t_1 \mid x_1, t_1 \rangle
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

## Propagator의 물리적 차원과 경로적분 측도의 정규화

### Q. Propagator의 물리적 차원은?

Propagator $K(x'', t''; x', t')$는 다음 관계식으로 정의된다:

$$
\psi(x'', t'') = \int dx'\, K(x'', t''; x', t')\, \psi(x', t')
$$

1D에서 $[\psi] = L^{-1/2}$ (규격화 조건 $\int|\psi|^2 dx = 1$로부터)이므로, 차원 분석을 하면:

$$
[L^{-1/2}] = [K] \cdot L \cdot L^{-1/2} \quad \Rightarrow \quad [K] = L^{-1}
$$

$d$차원으로 일반화하면 $[\psi] = L^{-d/2}$이므로:

$$
[K] = L^{-d}
$$

즉 propagator의 차원은 **공간 부피의 역수**이다. 시간은 지수부 $\exp(iS/\hbar)$ 안에 무차원으로 들어가므로 차원에 기여하지 않는다.

### Q. $\exp(iS/\hbar)$는 무차원인데, 비례 상수는 어디서 오는가?

비례 상수는 별도로 존재하는 것이 아니라, **경로적분 측도 $\mathcal{D}[x(t)]$ 자체에 포함되어 있다.** 시간 슬라이싱으로 측도를 구체적으로 쓰면:

$$
\int \mathcal{D}[x(t)] = \lim_{N\to\infty} \left(\frac{m}{2\pi i \hbar \Delta t}\right)^{\!\frac{N-1}{2}} \int dx_{N-1}\cdots\int dx_2
$$

(이것이 식 (8)의 measure 정의와 동일하다.)

**구조적 이유:** 완전한 propagator를 슬라이싱으로 쓰면 $N$개의 inner product $\braket{x_n, t_n | x_{n-1}, t_{n-1}}$의 곱이 나타나지만, 중간 위치 적분 변수는 $(N-1)$개뿐이다. 이 비대칭성—$N$개의 inner product와 $(N-1)$개의 적분—이 정확히 차원 $L^{-1}$을 만들어낸다.

차원 분석으로 확인:
- $(N-1)$개의 $dx_k$: 차원 $L^{N-1}$
- 정규화 인자 $\left(\frac{m}{2\pi i \hbar \Delta t}\right)^{(N-1)/2}$: 차원 $L^{-(N-1)}$
- 나머지 정규화 인자 $\left(\frac{m}{2\pi i \hbar \Delta t}\right)^{1/2}$: 차원 $L^{-1}$
- $\exp(iS/\hbar)$: 무차원

$$
[K] = L^{-(N-1)} \cdot L^{N-1} \cdot L^{-1} = L^{-1} \quad (N \to \infty \text{ 극한에서도 성립})
$$

**3차원으로 일반화:** 위치 변수가 3차원 벡터 $\mathbf{x}$가 되면 각 시간 슬라이스의 적분 $dx_k \to d^3x_k$이고, 정규화 인자도 $\left(\frac{m}{2\pi i \hbar \Delta t}\right)^{3/2}$으로 대체된다. 이때 $d$차원 일반화에서:

$$
[K] = L^{-d(N-1)} \cdot L^{d(N-1)} \cdot L^{-d} = L^{-d}
$$

즉, **$d$차원 공간에서 propagator의 차원은 $L^{-d}$**이고, 이는 처음 규격화 조건에서 구한 결과와 일치한다. ∎

# 연관 학습 노트

- [[QM lecture note - Propagators and Path Integral]]
- [[QM lecture note - Wave Equation and Probability Conservation]]

# References

Sakurai, Modern Quantum Mechanics, Chap. 2

# 다음 강의

[[QM lecture note - Gauge Transformations]]

# 원본 필기

![[QM_7thweek_1.pdf]]
