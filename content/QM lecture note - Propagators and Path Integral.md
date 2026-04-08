---
title: "QM lecture note - Propagators and Feynman's Path Integral"
date: "2026-04-06"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[QM lecture note - Wave Equation and Probability Conservation]]

WKB 조건: $\hbar|\nabla^2 S| \ll |\nabla S|^2$ 이면 고전적이게 된다.
$p = -\nabla S$ 였다. 그러면 위 내용은 '운동량이 크면 고전적이게 된다.'와 같은 말인가


→ 오늘은 파인만의 경로적분을 공부해 보자.

# 오늘의 핵심

- **Propagator** $K(x'', x'; t, t_0)$는 $t_0$에서 $x'$에 있던 파동함수를 $t$에서 $x''$에서의 파동함수로 전달하는 Green function이다.
- Propagator는 **Time Evolution Operator**를 위치 기저로 나타낸 matrix element이다:
$$
K(x'', x'; t, t_0) = \langle x'' | \mathcal{U}(t, t_0) | x' \rangle
$$
- Propagator의 Trace $G(t)$를 Laplace 변환하면, 에너지 스펙트럼을 **simple pole** 형태로 담는 $\tilde{G}(E)$를 얻는다.
- **Feynman's Path Integral**: $K$를 시간 조각으로 쪼개면, 모든 경로에 걸친 합으로 표현된다. 각 경로의 기여는 $\exp\!\left(\frac{i}{\hbar} S\right)$이며, 고전적 경로가 지배적이다.

# 필기 내용

## Propagator의 정의

이미 알고 있는 것: $|\alpha, t\rangle$를 구하고 싶다. 특정 basis $|a\rangle$로 나타냈을 때 계수 $\langle a | \alpha, t_0 \rangle$를 알고 있을 때, $|a\rangle$의 시간진화의 합으로 $|\alpha, t\rangle$를 구할 수 있다. 이것이 Schrödinger picture이다.

$$
|\alpha, t\rangle = \sum_a \mathcal{U}(t, t_0) |a\rangle \langle a | \alpha, t_0\rangle = \sum_a \exp\!\left(-i\frac{\mathcal{H}}{\hbar}(t - t_0)\right) |a\rangle \langle a | \alpha, t_0\rangle
$$

$|a\rangle$가 $\mathcal{H}$에 대한 eigen ket이라면, $\mathcal{H}|a\rangle = E_a|a\rangle$이므로:

$$
\psi(x'', t) = \langle x'' | \alpha, t\rangle = \sum_a \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \langle x'' | a\rangle \langle a | \alpha, t_0\rangle
$$

나는 $t_0$에서 $\psi$와 $t$에서 $\psi$를 연결하고 싶다. $\langle a | \alpha, t_0\rangle$에 $\int dx' |x'\rangle\langle x'|$를 끼워 넣자:

$$
\psi(x'', t) = \int dx' \sum_a \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \langle x'' | a\rangle \langle a | x'\rangle \langle x' | \alpha, t_0\rangle
$$

$$
= \int dx' \underbrace{\sum_a \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \langle x'' | a\rangle \langle a | x'\rangle}_{K(x'', x';\, t, t_0)} \psi(x', t_0)
$$

위치 $x'$와 $x''$, 시간 $t_0$과 $t$를 이어주는 **propagator**를 이렇게 정의한다:

$$
\boxed{K(x'', x'; t, t_0) = \sum_a \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \langle x'' | a\rangle \langle a | x'\rangle}
$$

$$
\psi(x'', t) = \int dx'\, K(x'', x'; t, t_0)\, \psi(x', t_0)
$$

---

## Propagator의 물리적 의미

$E_a$의 크기만큼, 시간이 지난 만큼 phase가 돌아간 채로 $\psi_a(x')$가 $\psi_a(x'')$로 전달된다.

$$
K(x'', x'; t, t_0) = \sum_a \langle x'' | a\rangle \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \langle a | x'\rangle = \sum_a \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \psi_a(x'')\, \psi_a^*(x')
$$

---

## Propagator의 특성

### 첫 번째 특성: Final variable에서 슈뢰딩거 방정식이 성립

초기 상태 $(x', t_0)$를 고정으로 두고 $K$를 $x''$과 $t$에 대한 함수라고 볼 때, $K$는 슈뢰딩거 방정식을 만족한다.

$$
i\hbar \frac{\partial}{\partial t} K = \mathcal{H}(x'')\, K
$$

### 두 번째 특성: $t \to t_0$ 이면 $K$가 디랙 델타
시간이 지나지 않았으니 probability amplitude가 원래대로 유지되어야 하기 때문이다. 
$$
\therefore \lim_{t \to t_0} K(x'', t;\, x', t_0) = \delta(x'' - x')
$$

증명:

$$
\lim_{t \to t_0} K = \lim_{t \to t_0} \sum_a \langle x'' | a\rangle \exp\!\left(-i\frac{E_a}{\hbar}(t - t_0)\right) \langle a | x'\rangle = \sum_a \langle x'' | a\rangle \langle a | x'\rangle = \delta(x'' - x')
$$

---

## Propagator와 time evolution operator

$$
K = \sum_a \langle x'' | a\rangle \exp\!\left(-i\frac{1}{\hbar} E_a(t - t_0)\right) \langle a | x'\rangle = \left\langle x'' \left| \exp\!\left(-\frac{i}{\hbar}\mathcal{H}(t - t_0)\right) \right| x'\right\rangle
$$

즉, **propagator는 time evolution operator를 position basis로 나타내었을 때의 matrix element**이다.

$K$는 초기 wave function이 Dirac delta일 때 슈뢰딩거 방정식의 솔루션이다. 즉, 슈뢰딩거 방정식의 **Green function**이다. 전정기학에서 Green function으로 퍼텐셜을 구하는 것과 비슷하다.

| | 전하 분포와 포텐셜 | QM wave function |
|---|---|---|
| 신호 | $x'$ 위치의 전하분포 $\rho(x')$ | 과거 wave function: $\psi(x', t_0)$ |
| 반응 | $x''$ 위치 포텐셜 $\phi(x'')$ | 현재 wave function: $\psi(x'', t)$ |
| Green function | $G(x'', x') = \frac{1}{4\pi} \cdot \frac{1}{\|x'' - x'\|}$ | $K(x'', t; x', t_0) = \langle x'' \| \mathcal{U}(t,t_0) \| x' \rangle$ |
| General solution | $\phi(x'') = \int dx'\, G(x'', x')\, \rho(x')$ | $\psi(x'', t) = \int dx'\, K(x'', x'; t, t_0)\, \psi(x', t_0)$ |
| Green function 정의 | $\nabla^2 G = -\delta(x'')$ | $t_0$에서 wave function이 디랙 델타일 때 $t$에서 wave function |

$t_0$에서 wavefunction이 디랙 델타일 때, $K$가 바로 $t$에서 슈뢰딩거 방정식의 해라는 것에서, 아래 방정식이 성립:

$$
\left[-\frac{\hbar^2}{2m}\nabla^2 + V - i\hbar\frac{\partial}{\partial t}\right] K = -i\hbar\, \delta(x'' - x')\, \delta(t' - t)
$$
아니 의미는 알겠는데... 왜 식을 위에것 처럼 쓰는 건지 모르겠다. 푸아송 방정식은 전하분포가 명시적으로 방정식에 있어서 그 자리에 디락 델타를 넣는 다는 것이 납득이 되는데, 슈뢰딩거 방정식의 경우 연산자를 한 변으로몰아넣고 반대편에 디락델타를 넣는 이유를 모르겠다. 

---

## 예시: Free Particle Propagator

$\mathcal{H} = \frac{P^2}{2m}$ 이라면 해밀토니안의 eigen ket은 $|p'\rangle$이다. $\mathcal{H}|p'\rangle = \frac{1}{2m} p'^2 |p'\rangle$.

연속 스펙트럼이므로 합을 적분으로 바꾸고, $\langle x'' | p'\rangle = \exp\!\left(i\frac{p'}{\hbar}x''\right) \cdot \frac{1}{2\pi\hbar}$를 이용:

$$
K(x'', t; x', t_0) = \frac{1}{2\pi\hbar} \int dp'\, \exp\!\left[i\frac{p'}{\hbar}(x'' - x') - i\frac{p'^2}{2m\hbar}(t - t_0)\right]
$$

$p'$에 대한 완전제곱식으로 바꾼 뒤, Gaussian integral을 수행하면:

$$
\boxed{K(x'', x'; t, t_0) = \sqrt{\frac{m}{2\pi i\hbar(t - t_0)}} \exp\!\left(\frac{im(x'' - x')^2}{2\hbar(t - t_0)}\right)}
$$
자세한 계산 과정을 확인하고 싶다. 

### Free Particle Action과의 비교

고전적으로, 입자는 시간 $t_0$시점에 $x'$ 위치에서 등속 운동하여 시간 $t$에 $x''$에 도달한다.

$$
\dot{x} = \frac{x'' - x'}{t - t_0}, \qquad \mathcal{L} = \frac{m}{2}\dot{x}^2 = \frac{m(x'' - x')^2}{2(t - t_0)^2}
$$

$$
S = \int_{t_0}^{t} dt'\, \mathcal{L} = \frac{m(x'' - x')^2}{2(t - t_0)}
$$

앞에서 구한 free particle propagator의 exponential 부분이 정확하게 $\exp\!\left(\frac{i}{\hbar} S\right)$이다. 
의외로 exponential 안에 음수 부호가 없다. 유의하자. 

---

## Propagator의 Trace: $G(t)$

Propagator는 time evolution operator를 position basis로 나타낸 matrix이므로, 
trace는 $x'' = x'$일 때  time evolution operator의 값을 모두 더한 것이다. 
이 trace를 $G(t)$라 쓰고, $t_0 = 0$으로 고정한다.

$$
G(t) = \int dx'\, K(x', t;\, x', 0) = \int dx'\, \sum_a \langle x' | a\rangle \langle a | x'\rangle \exp\!\left(-\frac{iE_a}{\hbar} t\right)
$$

$$
= \sum_a \exp\!\left(-\frac{iE_a}{\hbar} t\right)
$$

$t$가 붙어있다는 점을 제외하면 통계역학의 **partition function**과 비슷하다. $\beta = \frac{it}{\hbar}$이다. $t$를 imaginary로 만들면 $\beta$가 실수가 된다.

> [!question] 질문
> $\beta = \frac{1}{k_B T} = \frac{it}{\hbar}$이다. 시간·플랑크상수·온도·볼츠만 상수 사이의 관계는?

### Laplace 변환: $\tilde{G}(E)$

시간 공간에서 에너지 공간으로 변환한다. $t > 0$ 조건 때문에 푸리에 대신 라플라스 변환을 쓴다.

$$
\tilde{G}(E) = -\frac{i}{\hbar} \int_0^\infty dt\, G(t)\, \exp\!\left(iEt/\hbar\right) = -\frac{i}{\hbar} \int_0^\infty dt \sum_a \exp\!\left(-iE_a t/\hbar\right) \exp\!\left(iEt/\hbar\right)
$$

이대로 적분하면 발산한다. $E \to E + i\varepsilon$으로 바꾸고 $\varepsilon \to 0$으로 보내면:

$$
\boxed{\tilde{G}(E) = \sum_a \frac{1}{E - E_a}}
$$

$\tilde{G}(E)$는 에너지 스펙트럼 $E_a$의 분포를 **simple pole**의 형태로 나타내고 있다.

---

## Propagators as a Transition Amplitude

하이젠베르크 관점에서 propagator의 정체를 알아 보자.

$$
\mathcal{U}(t, 0) = \mathcal{U}(t, t_0)\, \mathcal{U}(t_0, 0) \quad \Rightarrow \quad \mathcal{U}(t, 0)\, \mathcal{U}^\dagger(t_0, 0) = \mathcal{U}(t, t_0)
$$

$$
K(x'', t; x', t_0) = \langle x'', 0 | \mathcal{U}(t, t_0) | x', 0\rangle = \langle x'', 0 | \mathcal{U}(t, 0)\, \mathcal{U}^\dagger(t_0, 0) | x', 0\rangle
$$

$$
\therefore K(x'', t; x', t_0) = \langle x'', t | x', t_0\rangle
$$

이는 $t_0$에서 한 위치의 basis와 $t$에서 다른 위치의 basis 사이의 내적이다. 
즉, $|x', t_0\rangle$ 상태가 $|x'', t\rangle$로 될 **probability amplitude**이다.

---

## Feynman's Formulation: Path Integral

**아이디어**: $K(x_N, t_N; x_0, t_0)$를 아주 짧은 $N$개의 시간 간격으로 쪼갠 뒤, 각 time segment에서 $K$들의 곱으로 나타내자.

$$
K(x_N, t_N; x_0, t_0) = \int dx_{N-1}\cdots dx_1\; K(x_N, t_N; x_{N-1}, t_{N-1}) \cdots K(x_1, t_1; x_0, t_0)
$$

$dx_{N-1} \cdots dx_1$을 적분한다는 것은, $(x_0, t_0)$에서 $(x_N, t_N)$으로 가는 사이에 일어날 수 있는 **모든 경로를 더한다**는 뜻이다.

짧은 시간 동안의 $K$는 action만큼 phase를 돌리는 기능을 한다:

$$
K(x + \Delta x, t + \Delta t;\, x, t) = \exp\!\left(\frac{i}{\hbar} S(x + \Delta x, t + \Delta t;\, x, t)\right)
$$

$$
\langle x_N, t_N | x_0, t_0\rangle = \sum_{\text{모든 경로}} \prod_{\text{한 경로에서 각 segment}} \exp\!\left(\frac{i}{\hbar} S_\text{segment}\right)
$$

모든 경로가 $K$ 계산에 동등한 가중치를 가진다. 다만, 비고전적인 경로들은 주변 경로끼리 스스로 빠르게 phase가 상쇄되어 실제로 보이지 않게 된다.

> [!note] 고전 극한
> 해보기: 질량이 커질수록, 고전적인 경로만 남게 된다는 것을 파인만 정보로 보이자.

---

# 궁금한 내용

- $G(t) = \sum_a \exp\!\left(-\frac{iE_a}{\hbar} t\right)$에서, $t$를 imaginary로 바꾸면 통계역학의 partition function이 된다. **시간과 온도 사이의 깊은 관계가 있는가?** (열장(thermal field theory)에서 다루는 주제일 것 같다.)
- Laplace 변환 계산 과정: $E \to E + i\varepsilon$ trick을 이용해 $\tilde{G}(E) = \sum_a \frac{1}{E - E_a}$를 직접 유도해 볼 것.
- Free particle propagator에서 prefactor $\sqrt{\frac{m}{2\pi i\hbar(t-t_0)}}$의 출처는? Gaussian integral 할 때 나오는 정규화 상수인가?

# AI의 보충 설명

## 1. 슈뢰딩거 방정식을 왜 Green function 형태로 쓰는가?

**핵심 질문**: 푸아송 방정식 $\nabla^2 G = -\delta(x'')$는 '소스가 있는 방정식'이라 디랙 델타를 넣는 게 납득되는데, 슈뢰딩거 방정식에서는 왜 연산자를 한쪽으로 몰고 반대편에 델타를 넣는가?

**Green function의 일반적 정의**부터 시작하자. 어떤 선형 미분 연산자 $\hat{L}$에 대해:

$$
\hat{L}\, f = s
$$

라는 방정식이 있을 때 ($s$는 소스), 이 연산자의 Green function $G$는 다음을 만족하는 함수로 정의된다:

$$
\hat{L}\, G(x, x') = \delta(x - x')
$$

이렇게 정의하면, 임의의 소스 $s$에 대한 해를 $f(x) = \int G(x, x')\, s(x')\, dx'$로 바로 쓸 수 있다. **연산자를 한쪽으로 몰고 델타를 반대편에 놓는 것이 바로 Green function의 정의 자체**이다.

푸아송 방정식의 경우 $\hat{L} = \nabla^2$이고 소스가 전하분포 $\rho$이므로 자연스럽게 그 형태가 보이는 것뿐이고, 슈뢰딩거 방정식에서는 $\hat{L}$이 아래와 같이 정의된다:

$$
\hat{L} = -\frac{\hbar^2}{2m}\nabla^2 + V - i\hbar\frac{\partial}{\partial t}
$$

슈뢰딩거 방정식 $\hat{L}\,\psi = 0$은 **소스 없는(homogeneous) 방정식**이다. 그런데 $K$는 초기 조건 $\psi(x', t_0) = \delta(x - x')$에 의해 구동되는 해이므로, 이 초기 조건을 소스 항으로 표현하면:

$$
\hat{L}\, K(x'', t;\, x', t_0) = -i\hbar\, \delta(x'' - x')\, \delta(t - t_0)
$$

우변에 붙는 $-i\hbar$는 관습적인 normalization 계수다. 직관적으로는: **"$t = t_0$, $x = x'$라는 시공간의 한 점에서 파동함수가 폭발했고, 그것이 이후에 퍼져나가는 것이 $K$이다"** 라고 이해하면 된다. 푸아송 방정식에서 점전하 하나가 포텐셜을 만드는 것과 정확히 같은 구조이다.

---

## 2. Free Particle Propagator의 Gaussian Integral 계산

계산하려는 적분:

$$
K = \frac{1}{2\pi\hbar} \int_{-\infty}^{\infty} dp'\, \exp\!\left[i\frac{p'}{\hbar}(x'' - x') - i\frac{p'^2}{2m\hbar}(t - t_0)\right]
$$

$\tau \equiv t - t_0 > 0$으로 놓자. 지수 안을 $p'$에 대해 완전제곱식으로 정리한다.

$$
i\frac{p'}\hbar(x''-x') - i\frac{p'^2}{2m\hbar}\tau = -\frac{i\tau}{2m\hbar}\left[p'^2 - \frac{2m(x''-x')}{\tau}p'\right]
$$

$$
= -\frac{i\tau}{2m\hbar}\left[\left(p' - \frac{m(x''-x')}{\tau}\right)^2 - \frac{m^2(x''-x')^2}{\tau^2}\right]
$$

$$
= -\frac{i\tau}{2m\hbar}\left(p' - \frac{m(x''-x')}{\tau}\right)^2 + \frac{im(x''-x')^2}{2\hbar\tau}
$$

두 번째 항은 $p'$와 무관하므로 적분 밖으로 나온다. $u = p' - \frac{m(x''-x')}{\tau}$로 치환하면:

$$
K = \frac{1}{2\pi\hbar}\exp\!\left(\frac{im(x''-x')^2}{2\hbar\tau}\right) \int_{-\infty}^{\infty} du\, \exp\!\left(-\frac{i\tau}{2m\hbar}u^2\right)
$$

이제 Gaussian integral을 수행한다. 일반적으로 $\text{Re}(\alpha) > 0$일 때:

$$
\int_{-\infty}^{\infty} du\, e^{-\alpha u^2} = \sqrt{\frac{\pi}{\alpha}}
$$

여기서 $\alpha = \frac{i\tau}{2m\hbar}$이다. $\text{Re}(\alpha) = 0$이지만 $\varepsilon \to 0$ 처리 (또는 analytic continuation)로 성립한다고 받아들이자. 그러면:

$$
\int_{-\infty}^{\infty} du\, \exp\!\left(-\frac{i\tau}{2m\hbar}u^2\right) = \sqrt{\frac{\pi}{i\tau/(2m\hbar)}} = \sqrt{\frac{2\pi m\hbar}{i\tau}}
$$

따라서:

$$
K = \frac{1}{2\pi\hbar} \cdot \sqrt{\frac{2\pi m\hbar}{i\tau}} \cdot \exp\!\left(\frac{im(x''-x')^2}{2\hbar\tau}\right) = \sqrt{\frac{m}{2\pi i\hbar\tau}} \exp\!\left(\frac{im(x''-x')^2}{2\hbar\tau}\right)
$$

$$
\boxed{K(x'', x'; t, t_0) = \sqrt{\frac{m}{2\pi i\hbar(t-t_0)}} \exp\!\left(\frac{im(x''-x')^2}{2\hbar(t-t_0)}\right)}
$$

**prefactor의 출처**: Gaussian integral에서 나오는 정규화 상수 $\sqrt{2\pi m\hbar / (i\tau)}$를 $2\pi\hbar$로 나눈 것이다. 물리적으로는 파동함수의 normalization을 유지하기 위해 반드시 필요한 인수이며, $\tau \to 0$ 극한에서 $K \to \delta(x''-x')$가 되게 해주는 역할도 한다.

---

## 3. $\tilde{G}(E)$ 유도: $i\varepsilon$ trick → 나중에 직접 연습장에 유도해보기

계산하려는 적분:

$$
\tilde{G}(E) = -\frac{i}{\hbar}\int_0^\infty dt\, \sum_a \exp\!\left(-\frac{iE_a}{\hbar}t\right) \exp\!\left(\frac{iE}{\hbar}t\right) = -\frac{i}{\hbar}\sum_a \int_0^\infty dt\, \exp\!\left(\frac{i(E - E_a)}{\hbar}t\right)
$$

$E$가 실수이면 피적분함수의 크기가 $|e^{i(E-E_a)t/\hbar}| = 1$로 일정하므로 $t \to \infty$ 에서 수렴하지 않는다. 수렴시키기 위해 $E$에 작은 양의 허수부를 더한다:

$$
E \to E + i\varepsilon \quad (\varepsilon > 0)
$$

그러면 지수 안이:

$$
\frac{i(E + i\varepsilon - E_a)}{\hbar}t = \frac{i(E-E_a)}{\hbar}t - \frac{\varepsilon}{\hbar}t
$$

$-\varepsilon t / \hbar$ 항이 $t \to \infty$에서 지수적으로 0으로 만들어주므로 적분이 수렴한다:

$$
\int_0^\infty dt\, \exp\!\left(\frac{i(E+i\varepsilon-E_a)}{\hbar}t\right) = \left[\frac{\exp\!\left(\frac{i(E+i\varepsilon-E_a)}{\hbar}t\right)}{\frac{i(E+i\varepsilon-E_a)}{\hbar}}\right]_0^\infty = 0 - \frac{1}{\frac{i(E+i\varepsilon-E_a)}{\hbar}} = \frac{i\hbar}{E+i\varepsilon-E_a}
$$

이것을 대입하면:

$$
\tilde{G}(E) = -\frac{i}{\hbar}\sum_a \frac{i\hbar}{E + i\varepsilon - E_a} = \sum_a \frac{1}{E + i\varepsilon - E_a}
$$

$\varepsilon \to 0$ 극한을 취하면:

$$
\boxed{\tilde{G}(E) = \sum_a \frac{1}{E - E_a}}
$$

$\tilde{G}(E)$는 복소 $E$-평면에서 각 고유에너지 $E_a$에 **단순 극(simple pole)** 을 가진다. 즉, 에너지 스펙트럼을 직접 읽어낼 수 있다. $i\varepsilon$ 처방은 물리적으로는 "인과율 조건"에 해당하며, pole이 실수 축의 바로 아래에 위치하게 만든다.

---

## 4. 허수 시간과 온도: Wick Rotation

Propagator의 trace:

$$
G(t) = \sum_a e^{-iE_a t/\hbar}
$$

통계역학의 partition function:

$$
Z = \text{Tr}\left[e^{-\beta \mathcal{H}}\right] = \sum_a e^{-\beta E_a}
$$

두 식을 비교하면, $\frac{it}{\hbar} = \beta = \frac{1}{k_B T}$로 놓는 순간 $G(t) = Z$가 된다. 즉:

$$
t \to -i\hbar\beta = -\frac{i\hbar}{k_B T}
$$

이 치환을 **Wick rotation** ($t \to -i\tau$, 실수 $\tau = \hbar\beta$)이라 한다. 이것은 단순한 수학적 트릭이 아니라, **시간의 허수 방향으로의 해석적 연속**이다.

**핵심 의미**: 온도 $T$에서의 열평형 통계역학은, 시간을 허수로 만들었을 때의 양자역학과 수학적으로 동일한 구조를 가진다. 구체적으로:

- 실시간 양자역학의 time evolution $e^{-i\mathcal{H}t/\hbar}$는 Wick rotation 후 $e^{-\mathcal{H}\tau/\hbar} = e^{-\beta\mathcal{H}}$, 즉 **Boltzmann factor**가 된다.
- 허수 시간 $\tau$의 범위는 $[0, \hbar\beta]$이고, 이 "허수 시간" 방향을 **Euclidean time** 또는 **thermal circle**이라 부른다.

이 구조는 **Thermal Field Theory** (유한온도 장론)의 출발점이 된다. 또한 이것은 우연이 아니라 깊은 물리적 이유가 있는데, 계의 열평형 상태는 "허수 시간 방향으로 주기적인" 양자 상태에 대응하기 때문이다 (KMS 조건). 나중에 통계역학이나 응집물리를 공부할 때 다시 만나게 될 것이다.

# 연관 학습 노트


# References

Sakurai, Modern Quantum Mechanics, Chap. 2

# 다음 강의

[[QM lecture note - Path Integral Formulation]]

# 원본 필기 이미지

![[QM_6thweek_2.pdf]]