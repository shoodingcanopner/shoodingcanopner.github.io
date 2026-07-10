---
title: "Rouse Model"
date: "2026-06-25"
subject: biophysics
tags:
  - study
  - concept
  - question
  - polymer-physics
  - rouse-model
  - anomalous-diffusion
class: study
---

# Rouse Model

## Overview

Rouse model은 가장 기본적인 동적 polymer 모델로, $N+1$개의 bead가 $N$개의 entropic spring으로 연결된 Gaussian chain에 overdamped Langevin dynamics를 부여한 것이다. Hydrodynamic interaction을 무시하기 때문에 melt 조건(다른 chain에 둘러싸여 solvent flow가 가려지는 상황)에 적합하다.

이 노트는 J.T. Padding, *Theory of Polymer Dynamics* Chapter 2를 기반으로, friction의 미시적 기원부터 normal mode 분리, MSD의 세 가지 시간 영역, end-to-end vector correlation, 그리고 stress tensor를 통한 viscosity 계산까지 전체 유도 과정을 정리한다.

[[Polymer Models]] 노트의 "Rouse Model" 섹션이 결과 위주의 압축된 요약이라면, 이 노트는 그 결과들이 *어떻게* 나오는지 — 특히 경계조건이 normal mode quantization을 어떻게 강제하는지, fluctuation-dissipation theorem이 어디서 나오는지를 자세히 다룬다.

## Key Points

### 공통 기호 (이 노트 내 표기)

| 기호 | 의미 |
|------|------|
| $\zeta$ | bead의 friction coefficient |
| $\xi = \zeta/m$ | friction frequency (mass로 나눈 것) |
| $b$ | Kuhn length (bond length) |
| $k = 3k_BT/b^2$ | entropic spring constant (3차원) |
| $D = k_BT/\zeta$ | 단일 bead의 diffusion coefficient |
| $\mathbf{R}_n$ | $n$번째 bead의 위치, $n=0,...,N$ |
| $\mathbf{X}_p$ | $p$번째 Rouse normal mode, $p=0,...,N$ |
| $\tau_p$ | $p$번째 모드의 relaxation time |
| $\tau_R \equiv \tau_1$ | Rouse time (가장 느린 모드의 완화시간) |
| $G(t)$ | shear relaxation modulus |
| $\eta$ | shear viscosity |

---

### 1. Friction과 Random Force의 기원

단일 spherical bead (반지름 $a$)가 solvent 속에서 받는 힘은 두 가지다 — 속도에 비례하는 systematic friction과, 분자 충돌에서 오는 random force $\mathbf{F}(t)$:

$$
\frac{d\mathbf{v}}{dt} = -\xi \mathbf{v} + \mathbf{F}
\tag{2.2}
$$

여기서 $\xi = \zeta/m = 6\pi\eta_s a/m$ (Stokes friction, $\eta_s$는 solvent viscosity).

식 (2.2)를 적분해서 식 (2.4)와 같은 형태의 해를 얻는 일반적인 방법은 [[Integrating Factor Method]]에 따로 정리했다.

$$
\mathbf{v}(t) = \mathbf{v}_0 e^{-\xi t} + \int_0^t d\tau\, e^{-\xi(t-\tau)}\mathbf{F}(\tau)
\tag{2.4}
$$
초기 속도가 $\tau_r = 1/\xi$의 relaxation time으로 감쇠, 그리고 힘은 exponent한 가중치로 쌓인다. 

$\mathbf{F}(t)$가 random force이므로, 이것의 평균적인 property를 정의. 평균적으로 힘은 0이어야 하고, 위에 적분 식이 적혀져 있으므로 힘의 time correlation도 고려해야 한다. 랜덤한 힘이므로 delta correlation을 가져야 한다.

$\mathbf{F}(t)$의 평균 property는 다음 두 가지로 가정된다 (식 2.4를 이용해 $\langle v(t)\cdot v(t)\rangle$를 구하려면 이 가정이 필요하다):

$$
\langle \mathbf{F}(t)\rangle = \mathbf{0}
\tag{2.5}
$$

$$
\left\langle \mathbf{F}(t)\cdot\mathbf{F}(t')\right\rangle_{v_0} = C_{v_0}\,\delta(t-t')
\tag{2.6}
$$

여기서 $C_{v_0}$는 (아직 미정인) 상수이며, 초기 속도 $v_0$에 의존할 수도 있다는 표기다. $\delta(t-t')$가 등장하는 이유는 "랜덤하다"는 가정의 가장 단순한 구현 — 서로 다른 시각의 충돌은 완전히 독립(uncorrelated)이라는 뜻이다. 식 (2.6)의 $C_{v_0}$가 정확히 무엇인지는 아직 모르는 상태이고, 이를 equipartition theorem으로 결정하는 것이 바로 다음 단계(식 2.9)다.

식 (2.4)에 식 (2.5)-(2.6)을 적용해서 속도의 평균과 분산을 구해보자.

**평균 (식 2.7):** 식 (2.4)의 양변에 평균을 취하면, 적분 안의 $\langle\mathbf{F}(\tau)\rangle_{v_0}=0$ (식 2.5)이므로 적분항이 사라진다:

$$
\langle\mathbf{v}(t)\rangle_{v_0} = \mathbf{v}_0e^{-\xi t} + \int_0^t d\tau\, e^{-\xi(t-\tau)}\langle\mathbf{F}(\tau)\rangle_{v_0} = \mathbf{v}_0e^{-\xi t}
\tag{2.7}
$$

즉 평균 속도는 그냥 초기 속도가 friction에 의해해 지수적으로 감쇄하는 모습이다 — 당연한 결과지만, random force가 평균적으로 어떤 방향으로도 치우치지 않는다는 가정(식 2.5)이 정확히 이 결과를 만든다.

**분산 (식 2.8):** $\langle\mathbf{v}(t)\cdot\mathbf{v}(t)\rangle_{v_0}$를 구하려면 식 (2.4)를 자기 자신과 내적해야 한다. 세 항이 나온다 — $v_0$ 항끼리의 곱, $v_0$와 적분항의 교차곱(cross term), 그리고 적분항끼리의 곱:

$$
\langle\mathbf{v}(t)\cdot\mathbf{v}(t)\rangle_{v_0} = v_0^2e^{-2\xi t} + 2\int_0^t d\tau\, e^{-\xi(2t-\tau)}\mathbf{v}_0\cdot\langle\mathbf{F}(\tau)\rangle_{v_0} + \int_0^t d\tau'\int_0^t d\tau\, e^{-\xi(2t-\tau-\tau')}\left\langle\mathbf{F}(\tau)\cdot\mathbf{F}(\tau')\right\rangle_{v_0}
$$

가운뎃 항(cross term)은 다시 식 (2.5) 때문에 0이 된다. 마지막 항은 식 (2.6)의 delta correlation을 대입하면, $\delta(\tau-\tau')$가 이중적분 중 하나를 "잡아먹어서" 단일적분으로 줄어든다:

$$
\int_0^t d\tau'\int_0^t d\tau\, e^{-\xi(2t-\tau-\tau')}C_{v_0}\delta(\tau-\tau') = C_{v_0}\int_0^t d\tau\, e^{-2\xi(t-\tau)} = \frac{C_{v_0}}{2\xi}\left(1-e^{-2\xi t}\right)
$$

따라서:

$$
\langle\mathbf{v}(t)\cdot\mathbf{v}(t)\rangle_{v_0} = v_0^2e^{-2\xi t} + \frac{C_{v_0}}{2\xi}\left(1-e^{-2\xi t}\right)
\tag{2.8}
$$

이 결과가 핵심적인 다음 단계로 이어진다: **$t\to\infty$일 때 식 (2.8)은 $C_{v_0}/2\xi$로 수렴해야 하는데, equipartition theorem은 이 극한값이 정확히 $3k_BT/m$이어야 한다고 요구한다.( $\langle\frac{m x^2}{2}\rangle = \frac{k_B T}{2}$, 따라서  $\langle v^2\rangle = 3k_BT/m$)** 이 조건이 미지수 $C_{v_0}$를 결정해주고, 그 결과가 바로 식 (2.9)다.

$$
\langle \mathbf{F}(t)\cdot\mathbf{F}(t')\rangle = 6\frac{k_BT\xi}{m}\delta(t-t')
\tag{2.9}
$$

이것이 fluctuation-dissipation theorem의 한 형태다 — **friction이라는 systematic(dissipative)한 효과와 random force의 통계적 크기가 독립적이지 않고, 같은 열적 origin에서 묶여 나온다.** 이 관계가 없으면 bead는 평형 온도에 도달하지 못한다. 

식 (2.4)에다가 지금까지 구한 식을 넣고 적분하면 MSD를 구할 수 있다. 
$$
\langle (\mathbf{r}(t)-\mathbf{r}(0))^2\rangle = \frac{6k_B T}{m \xi}t
$$

3차원에서 $\langle (\mathbf{r}(t)-\mathbf{r}(0))^2\rangle = 6Dt$라는 것으로부터 Einstein relation이 나온다:

$$
D = \frac{k_BT}{m\xi} = \frac{k_BT}{\zeta} = \frac{k_BT}{6\pi \eta_s a}
\tag{2.13}
$$
마지막 항 $\frac{k_BT}{6\pi \eta_s a}$이 diffusion coefficient라는 것은 Einstein relation이다.

### 2. Overdamped 극한과 Smoluchowski 영역

Bead가 초기 속도의 "기억"을 잃는 시간 $\tau \approx 1/\xi$ 동안 이동하는 거리는 bead 지름에 비해 극히 작다 (나노미터 크기 bead: $l/a \sim 10^{-2}$, 식 2.14). 즉 **속도 자유도가 거의 즉시 평형화되므로, 우리가 관심 있는 시간척도(configuration이 바뀌는 시간척도)에서는 속도를 적분해서 없애고 위치만 추적할 수 있다.**

이렇게 얻는 것이 overdamped Langevin equation, 관성항이 없다. :

$$
\frac{d\mathbf{r}}{dt} = -\frac{1}{\zeta}\nabla\Phi + \nabla D + \mathbf{f}
\tag{2.15}
$$

이 식의 세 항은 각각 다음을 의미한다:

- **$-\frac{1}{\zeta}\nabla\Phi$ (potential drift):** 외부 포텐셜 $\Phi$가 만드는 힘에 의한 drift. $-\nabla\Phi$를 friction $\zeta$로 나눌 것. overdamped이기에, 보존력과 속도가 비례한다. Rouse chain에서는 $\Phi$가 이웃 bead들과의 spring potential이다 — 즉 이 항이 식 (2.19)의 우항을 만든다.

- **$\nabla D$ (diffusivity gradient drift):** diffusion coefficient $D$가 위치에 따라 다른 값을 가질 경우 추가되는 항. $D$가 일정한 경우 이 항은 0이 되어 사라진다. 이 항을 유도하는 법을 Appendix B에서 다룬다. "diffusivity가 공간적으로 다르다도 입자의 평형 분포가 Boltzmann 분포(식 B.2)를 따르도록" 보정해주는 항이다. 이 보정항이 없다면 diffusivity가 낮은 지역에 입자가 모일 것이다. 

- **$\mathbf{f}$ (random force):** 식 (2.5)-(2.6)에서 본 random force와 같은 역학이지만, 이제는 힘이 아니라 속도에 random drift가 더해지는 overdamped 버전이다. 평균 0, delta-correlated (식 2.17). 

> [!note] 세 항의 구조(structure)
> 식 (2.15)는 결국 "deterministic drift (2가지: potential과 diffusivity gradient) + stochastic noise"라고 설명하는 일반적인 overdamped Langevin 방정식의 형태를 띈 다. Rouse chain에선 $D$가 일정하다고 가정하므로 $\nabla D$항은 사라지고, 실질적으로 $\dot{\mathbf{r}} = -\zeta^{-1}\nabla\Phi + \mathbf{f}$의 단순한 형태로 쓰인다.

$$
\langle \mathbf{f}(t)\mathbf{f}(t')\rangle = 2D\bar{\mathbf{I}}\delta(t-t')
\tag{2.17}
$$

이 식이 Smoluchowski equation(probability density의 시간 발전, [[Smoluchowski Equation]] 참고)을 유도하는 출발점이다.

### 3. Rouse Chain의 Langevin 방정식

$N+1$개 bead, $N$개 spring ($k=3k_BT/b^2$)으로 이루어진 chain에서 내부 bead의 운동방정식

$$
\frac{d\mathbf{R}_0}{dt} = -\frac{3k_BT}{\zeta b^2}(\mathbf{R}_0 - \mathbf{R}_{1}) + \mathbf{f}_0
\tag{2.18}
$$
전체 potential energy  $\frac{3k_BT}{2b^2}\sum_n(\mathbf{R}_n-\mathbf{R}_{n-1})^2$을  $\mathbf{R}_n$으로 미분한 게 아래 식(2.19) 에서 $\nabla\Phi$이다. 
$$
\frac{d\mathbf{R}_n}{dt} = -\frac{1}{\zeta}\frac{3k_BT}{ b^2}(2\mathbf{R}_n - \mathbf{R}_{n-1} - \mathbf{R}_{n+1}) + \mathbf{f}_n \qquad  n=1,...,N-1
\tag{2.19}
$$
$$
\frac{d\mathbf{R}_N}{dt} = -\frac{3k_BT}{\zeta b^2}(\mathbf{R}_N - \mathbf{R}_{N-1}) + \mathbf{f}_N
\tag{2.20}
$$
양 끝 bead ($n=0, N$)는 한쪽 이웃만 있어서 식이 다르다 (식 2.18, 2.20). 
이 **경계조건의 비대칭성**이 다음 단계인 normal mode 분리에서 mode의 quantization 조건을 결정한다.

### 3-C. Rouse Chain의 Langevin 방정식 - Circular polymer

만약 양 끝, 0번째와 N번째 bead가 연결된 고리 형태의 polymer라면, 
$$
\frac{d\mathbf{R}_0}{dt} = -\frac{3k_BT}{\zeta b^2}(2\mathbf{R}_0 - \mathbf{R}_{N} - \mathbf{R}_{1}) + \mathbf{f}_0
\tag{2.18 - C}
$$
$$
\frac{d\mathbf{R}_N}{dt} = -\frac{3k_BT}{\zeta b^2}(2\mathbf{R}_N - \mathbf{R}_{N-1} - \mathbf{R}_{0}) + \mathbf{f}_N
\tag{2.20 - C}
$$
식 2.19는 동일하다. 

### 4. Normal Mode 분리 — 경계조건이 만드는 양자화

$(3N+3)$개의 결합된 stochastic differential equation을 풀기 위해, ansatz 

$$
\mathbf{R}_n(t) = C \mathbf{X}(t)\cos(an+c) \tag{2.23}
$$
를 대입한다. 

식(2.18)부터 (2.20)까지 순서대로
$$
\frac{d\mathbf{X}}{dt}\cos c = -\frac{3k_BT}{\zeta b^2}\left\{\cos c - \cos(a+c)\right\}\mathbf{X}
\tag{2.24}
$$
$$
\frac{d\mathbf{X}}{dt}\cos(na+c) = -\frac{3k_BT}{\zeta b^2}4\sin^2(a/2)\cos(na+c)\mathbf{X}
\tag{2.25}
$$
$$
\frac{d\mathbf{X}}{dt}\cos(Na+c) = -\frac{3k_BT}{\zeta b^2}\left\{\cos(Na+c) - \cos((N-1)a+c)\right\}\mathbf{X}
\tag{2.26}
$$
내부 bead의 방정식 (2.25)이 양 끝 (2.24)와 (2.26)에도 동일한 형태로 적용되기 위해서는, $4\sin^2(a/2)\cos(na+c)$에 $n=0$와 $n=N$을 대입한 것이 $\cos c - \cos(a+c)$와 $\cos(Na+c) - \cos((N-1)a+c)$랑 같아야 한다. 이 조건은 아래와 같다. 

$$
\cos(a-c) = \cos c, \qquad \cos((N+1)a+c) = \cos(Na+c)
\tag{2.30, 2.31}
$$

이 조건에서 다음의 quantized 값들이 나온다:
$$
a = \frac{p\pi}{N+1}, \qquad c = \frac{a}{2} =\frac{p\pi}{2(N+1)}, \qquad p = 0, 1, ..., N
\tag{2.34}
$$
Quantization을 대입하면 ansatz는 

$$
\mathbf{R}_n(t) = C\mathbf{X}(t)\cos( \frac{p\pi}{N+1}(n+\frac{1}{2}))
$$
**핵심 통찰:** Free end 경계조건(양 끝이 한쪽 이웃만 갖는다는 사실)이 정확히 $N+1$개의 독립적인 cosine mode를 허용한다. 이는 고전적인 "고정된 끝(fixed boundary)"의 normal mode(사인 함수, $\sin(p\pi n/N)$ 형태)와 다른 quantization이다 — Rouse chain의 양 끝이 자유롭기 때문에 코사인 형태가 나온다.
**생각해보기**: 왜 $p$의 최댓값이 $N$인 것인가? $p=N+1$을 대입하는 순간 무슨 일이 일어나는가?

전체 해는 이 mode들의 선형결합. 방금 식에서 정규화 상수 $C$를 잘 결정한다. 
왜 이런지 자세한 내용은 아래 diagonalization에서 다룬다. 
$$
\mathbf{R}_n(t) = \mathbf{X}_0 + \sqrt{\frac{2}{N+1}}\sum_{p=1}^N \mathbf{X}_p(t) \cos\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right]
\tag{2.35}
$$
역변환:
$$
\mathbf{X}_p(t) = \sqrt{\frac{c_p}{N+1}}\sum_{n=0}^N \mathbf{R}_n(t) \cos\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right] \qquad c_0 = 1,\ c_{p\ge1} = 2
\tag{2.37}
$$
Random force도 변환해 준다. 
$$
\mathbf{F}_p = \sqrt{\frac{c_p}{N+1}}\sum_{n=0}^{N} \mathbf{f}_n \cos\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right] \qquad c_0 = 1,\ c_{p\ge1} = 2
\tag{2.42}
$$

이 변환으로 원래 결합된 방정식들이 완전히 **분리(decouple)** 된다. $\mathbf{X}_p(t)$에 대한 방정식(2.25)을 풀면 된다. 

$$
\frac{d\mathbf{X}_p}{dt} = -\frac{3k_BT}{\zeta b^2}4\sin^2\left(\frac{p\pi}{2(N+1)}\right)\mathbf{X}_p + \mathbf{F}_p
\tag{2.38}
$$
$$
\langle \mathbf{F}_p(t)\rangle = \mathbf{0}
\tag{2.39}
$$
$$
\langle \mathbf{F}_0(t)\mathbf{F}_0(t')\rangle = 2D\bar{\mathbf{I}}\delta(t-t')
\tag{2.40}
$$
$$
\langle \mathbf{F}_p(t)\mathbf{F}_q(t')\rangle = 2D\bar{\mathbf{I}}\delta_{pq}\delta(t-t') \qquad (p+q>0)
\tag{2.41}
$$

$p=0$ 모드($\mathbf{X}_0$)는 무게중심(center of mass) $\mathbf{R}_G$ 그 자체이며, 다른 모든 모드($p\geq 1$)는 무게중심을 고정한 채 일어나는 독립적인 진동(vibration)이다. 모드 $\mathbf{X}_p$는 $N/p$개 세그먼트로 이루어진 subchain의 진폭에 대응한다.

### 4-C. Normal Mode 분리 — Circular polymer
$$
\frac{d\mathbf{X}}{dt}\cos c = -\frac{3k_BT}{\zeta b^2}\left\{2\cos c - \cos(Na+c) - \cos(a+c)\right\}\mathbf{X}
\tag{2.24 - C}
$$
$$
\frac{d\mathbf{X}}{dt}\cos(Na+c) = -\frac{3k_BT}{\zeta b^2}\left\{2\cos(Na+c) - \cos((N-1)a+c) - \cos(c)\right\}\mathbf{X}
\tag{2.26 - C}
$$
위가 방정식 2.25와 동일하게 적용되기 위해서는, $2\cos c - \cos(Na+c) - \cos(a+c)$, $2\cos(Na+c) - \cos((N-1)a+c) - \cos(c)$각각이 $2\cos(na+c) - \cos((n-1)a+c) - \cos((n+1)a+c)$에다가 $n$에 각각 0과 $N$을 대입한 것과 같은 결과여야 한다. 이 조건은 아래와 같다. 
$$
\cos(-a+c) = \cos (Na+c), \qquad \cos((N+1)a+c) = \cos(c)
\tag{2.30 - C, 2.31 - C}
$$
여기서 결정적인 관찰: **$c$가 어떤 값이든 위 두 조건이 만족된다.** 이건 우연이 아니라 ring의 구조적 특징이다 — periodic system은 monomer index에 대한 회전 대칭($n \to n + \text{const}$)을 가지므로 cosine의 phase가 물리적으로 고정되지 않는다. 그 결과, $a \neq 0$인 각 wavenumber마다 $\cos(an)$과 $\sin(an)$이 **같은 eigenvalue를 갖는 두 개의 독립 mode**가 된다 (2-fold degeneracy). Linear chain에서 $c = a/2$로 phase가 고정되어 mode가 non-degenerate였던 것과 결정적으로 다른 점이다.

주기 조건 $\mathbf{R}_{n+(N+1)} = \mathbf{R}_n$으로부터 wavenumber가 quantize된다:
$$
a = \frac{2\pi p}{N+1}, \qquad p = 0, 1, ..., N
\tag{2.34 - C}
$$

> [!warning] Cosine만으로는 basis가 불완전하다
> Degeneracy 때문에 ring의 완전한 mode 전개는 $\cos$과 $\sin$을 **둘 다** 포함해야 한다. $\cos(2\pi pn/(N+1))$만 쓰면 (1) $\sin$ mode가 통째로 빠져 임의의 configuration을 표현할 수 없고 (incomplete), (2) $\cos$은 $p$와 $N+1-p$가 같은 함수라 $p=1,...,N$을 모두 합하면 같은 cosine을 두 번 세게 된다 (redundant). 따라서 아래처럼 **complex exponential**을 쓰는 것이 가장 깔끔하다.

**Complex exponential 전개.** $c$의 자유도(= degeneracy)를 자연스럽게 담기 위해 complex Fourier basis를 쓴다:
$$
\mathbf{R}_n(t) = \sqrt{\frac{1}{N+1}}\sum_{p=0}^{N} \mathbf{X}_p(t)\, e^{i\frac{2\pi p}{N+1}n}
\tag{2.35 - C}
$$
역변환:
$$
\mathbf{X}_p(t) = \sqrt{\frac{1}{N+1}}\sum_{n=0}^{N} \mathbf{R}_n(t)\, e^{-i\frac{2\pi p}{N+1}n}
\tag{2.37 - C}
$$
$\mathbf{R}_n$이 실수이므로 mode는 reality condition $\mathbf{X}_{N+1-p} = \mathbf{X}_p^{*}$를 만족한다 — 즉 $p$와 $N+1-p$가 서로 켤레인 degenerate pair를 이룬다. $p=0$은 여전히 center of mass ($\mathbf{X}_0 = \frac{1}{N+1}\sum_n \mathbf{R}_n$)다.

**Eigenvalue.** $\mathbf{R}_n \propto e^{ian}$을 interior 방정식(2.19)에 넣으면 $2 - e^{-ia} - e^{ia} = 2 - 2\cos a = 4\sin^2(a/2)$이다. Ring에서는 이 관계가 boundary bead를 포함한 모든 bead에 예외 없이 성립하므로 (matching condition 자동 충족), mode 방정식은:
$$
\frac{d\mathbf{X}_p}{dt} = -\frac{3k_BT}{\zeta b^2}4\sin^2\left(\frac{p\pi}{N+1}\right)\mathbf{X}_p + \mathbf{F}_p
\tag{2.38 - C}
$$
Linear chain의 $4\sin^2\!\big(\frac{p\pi}{2(N+1)}\big)$과 비교하면 argument가 정확히 2배다. 작은 $p$에서 $\tau_p^{\text{ring}} \approx \tau_p^{\text{linear}}/4$가 되어, **같은 길이의 ring이 linear chain보다 4배 빠르게 완화된다**는 잘 알려진 결과가 나온다.

**Noise.** Random force도 같은 complex basis로 변환한다:
$$
\mathbf{F}_p = \sqrt{\frac{1}{N+1}}\sum_{n=0}^{N} \mathbf{f}_n\, e^{-i\frac{2\pi p}{N+1}n}
\tag{2.42 - C}
$$
Real-space FDT $\langle \mathbf{f}_n(t)\mathbf{f}_m(t')\rangle = 2D\,\bar{\mathbf{I}}\,\delta_{nm}\delta(t-t')$를 대입하고 $\sum_n e^{-i\frac{2\pi (p-q)n}{N+1}} = (N+1)\delta_{pq}$를 쓰면:
$$
\langle \mathbf{F}_p(t)\,\mathbf{F}_q^{*}(t')\rangle = 2D\,\bar{\mathbf{I}}\,\delta_{pq}\,\delta(t-t') \qquad (p, q \geq 1)
\tag{2.41-2 - C}
$$

### 5. Relaxation Time과 평형 진폭
다시 linear polymer로 돌아온다. 

$\mathbf{X}_0$는 center of mass와 비례함을 알 수 있다. 
$$
\mathbf{X}_0(t) = \sqrt{\frac{1}{N+1}}\sum_{n=0}^N \mathbf{R}_n(t) = \sqrt{N+1} \cdot\text{Center of mass}
\tag{2.37}
$$
$\mathbf{F}_0$는 polymer전체에 가해진 합력과 비례한다는 점은 자명하다. 
$$
\mathbf{F}_0(t) = \sqrt{\frac{1}{N+1}}\sum_{n=0}^N \mathbf{f}_n(t)
$$
$$
\langle \mathbf{F}_0(t)\mathbf{F}_0(t')  \rangle =  6D\,\delta(t-t')
$$
이를 통해 polymer 전체, center of mass의 diffusion coefficient를 알 수 있다. 
$p=0$일 때 미분방정식 (2.38)을 풀면, 
$$
\mathbf{X}_0(t) = \mathbf{X}_0(0) + \int_0^t d\tau\, \mathbf{F}_0(\tau)
\tag{2.43}
$$
단순히 합력을 적분한 뻔한 결과이다. MSD를 구하면
$$
\text{MSD}_{cm}(t) = \frac{1}{N+1}\left\langle (\mathbf{X}_0(t)-\mathbf{X}_0(0))^2\right\rangle = \frac{1}{N+1}\left\langle \int_0^t d\tau \int_0^t d\tau'\, \mathbf{F}_0(\tau)\cdot\mathbf{F}_0(\tau')\right\rangle 
$$
$$
= \frac{6D}{N+1}t \equiv 6D_Gt
\tag{2.44}
$$

COM의 diffusivity는 monomer diffusivity를 monomer 갯수만큼 나눈 것이란 걸 알 수 있다. 
$$
D_G = \frac{D}{N+1}
$$

아래 식(2.45)를 식 (2.38) $\frac{d\mathbf{X}_p}{dt} = -\frac{3k_BT}{\zeta b^2}4\sin^2\left(\frac{p\pi}{2(N+1)}\right)\mathbf{X}_p + \mathbf{F}_p$과 비교하면 $\text{p-mode}$의 relaxation time $\tau_p$을 구할 수 있다. 
$$
\mathbf{X}_p(t) = \mathbf{X}_p(0)e^{-t/\tau_p} + \int_0^t d\tau\, e^{-(t-\tau)/\tau_p}\mathbf{F}_p(\tau)
\tag{2.45}
$$
$$
\tau_p = \frac{\zeta b^2}{3k_BT}\left[4\sin^2\left(\frac{p\pi}{2(N+1)}\right)\right]^{-1} \approx \frac{\zeta b^2(N+1)^2}{3\pi^2 k_BT}\frac{1}{p^2}
\tag{2.46}
$$

(근사는 $p \ll N$일 때 유효하다.) 가장 느린 모드 $p=1$의 완화시간이 **Rouse time** $\tau_R \equiv \tau_1 \propto (N+1)^2$이다.

#### 모드의 시간 상관함수 (식 2.47)

식 (2.45)는 $\mathbf{X}_p(t)$ 자체의 시간 전개를 주지만, 우리가 실제로 자주 쓰는 양은 $\langle \mathbf{X}_p(t)\cdot\mathbf{X}_p(0)\rangle$ — 즉 시간에 따라 이 모드가 자신의 초기값과 얼마나 닮아있는지를 나타내는 **autocorrelation function** 이다. 식 (2.45)의 양변에 $\mathbf{X}_p(0)$를 내적하고 ensemble average를 취하면:

$$
\langle\mathbf{X}_p(t)\cdot\mathbf{X}_p(0)\rangle = \langle\mathbf{X}_p(0)\cdot\mathbf{X}_p(0)\rangle e^{-t/\tau_p} + \int_0^t d\tau\, e^{-(t-\tau)/\tau_p}\langle\mathbf{F}_p(\tau)\cdot\mathbf{X}_p(0)\rangle
$$

적분 안의 $\langle\mathbf{F}_p(\tau)\cdot\mathbf{X}_p(0)\rangle$는 0이다 — $\tau>0$ 시점의 random force는 $t=0$에 이미 정해져 있던 $\mathbf{X}_p(0)$와 인과적으로 상관이 없기 때문이다. 따라서 적분항이 사라지고:

$$
\langle \mathbf{X}_p(t)\cdot\mathbf{X}_p(0)\rangle = \langle X_p^2\rangle\exp(-t/\tau_p)
\tag{2.47}
$$

여기서 $\langle X_p^2\rangle \equiv \langle\mathbf{X}_p(0)\cdot\mathbf{X}_p(0)\rangle$는 모드의 **equilibrium variance**, $t=0$에서의 자기 자신과의 상관, 즉 그냥 그 모드의 "전형적인 크기"다. 식 (2.47)이 말하는 바는 단순하다: 모드 $p$가 초기값을 "기억하는" 정도가 시간이 지나면서 $e^{-t/\tau_p}$로 감쇄한다는 것. $\tau_p$가 작을수록(빠른 모드, 큰 $p$) 기억을 빨리 잃고, $\tau_p$가 클수록(느린 모드, 작은 $p$) 오래 기억한다.

#### Boltzmann Weight의 좌표 변환 — 평형 진폭이 나오는 근거 (식 2.48-2.49)

진폭 $\langle X_p^2\rangle$은 **동역학과 무관한 순수 평형 통계량**이다 — 즉 시간을 전혀 포함하지 않고, Gaussian chain이 열평형 상태에서 어떤 모양을 하고 있는지에만 의존한다. 이를 구하려면 동역학 방정식이 아니라 **평형 분포(Boltzmann distribution)** 로 돌아가야 한다.

Cartesian 좌표에서 Rouse chain의 configuration 확률은, entropic spring 에너지 $\frac{3k_BT}{2b^2}\sum_n(\mathbf{R}_n-\mathbf{R}_{n-1})^2$에 대한 Boltzmann factor다:
$$
P(\mathbf{R}_0,...,\mathbf{R}_N) = \frac{1}{Z}\exp\left[-\frac{3}{2b^2}\sum_{n=0}^N(\mathbf{R}_n-\mathbf{R}_{n-1})^2\right]
\tag{2.48}
$$
이 분포를 그대로는 다루기 어렵다 — 지수 안의 합이 이웃한 $\mathbf{R}_n$들을 서로 얽어매고 있어서, $N+1$개의 좌표가 독립이 아니다. 그런데 식 (2.35)-(2.37)의 변환(Rouse mode로 옮기는 것)은 **선형(linear)이고 직교(orthogonal)** 변환이다. 지수 안의 이차형식(quadratic form)만 Rouse 좌표로 바꿔서 다시 쓰면 그대로 새로운 분포가 된다:
$$
P(\mathbf{X}_0,...,\mathbf{X}_N) = \frac{1}{Z}\exp\left[-\frac{6}{b^2}\sum_{p=1}^N \mathbf{X}_p\cdot\mathbf{X}_p\sin^2\left(\frac{p\pi}{2(N+1)}\right)\right]
\tag{2.49}
$$
Variance는 $1/\sin^2\left(\frac{p\pi}{2(N+1)}\right)$에 비례한다. $p$가 클 수록 variance가 작아지고 0에 분포가 집중된다. 

### 6. End-to-End Vector의 시간 상관함수

$\mathbf{R} = \mathbf{R}_N - \mathbf{R}_0$은 홀수 $p$ 모드만으로 표현된다 (짝수 모드는 대칭성에 의해 상쇄):

$$
\langle \mathbf{R}(t)\cdot\mathbf{R}(0)\rangle = \frac{8b^2}{\pi^2}(N+1)\sum_{p=1}^{N}{}' \frac{1}{p^2}e^{-t/\tau_p}
\tag{2.53}
$$

(prime은 홀수 $p$만 합산을 의미.) 이 식은 실제 polyethylene melt의 MD 시뮬레이션 결과(Padding & Briels 2001, Fig. 2.2)와 entanglement 길이 이하에서 잘 맞는다.

### 7. Segmental MSD — 세 가지 시간 영역 → 중요

#### 개별 세그먼트의 MSD를 Rouse mode로 분해 (식 2.54)

지금까지는 무게중심($p=0$ 모드)의 MSD(식 2.44)와 각 모드의 자기상관함수(식 2.47)를 따로 구했다. 이제 이걸 합쳐서 **특정 세그먼트 $n$ 하나의 실제 위치** $\mathbf{R}_n(t)$가 시간에 따라 얼마나 움직이는지를 구해보자. 식 (2.35)의 역변환을 이용하면 $\mathbf{R}_n(t) - \mathbf{R}_n(0)$은 각 모드의 변위를 $\cos$ 가중치로 합한 것이다. 다른 모드들끼리는 서로 상관이 없다는 사실(식 2.41의 $\delta_{pq}$)을 쓰면, MSD도 교차항 없이 각 모드의 기여를 그냥 더한 형태로 쓸 수 있다:
$$
\left\langle (\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle = \left\langle (\mathbf{X}_0(t)-\mathbf{X}_0(0))^2\right\rangle + \frac{2}{N+1}\sum_{p=1}^N \left\langle(\mathbf{X}_p(t)-\mathbf{X}_p(0))^2\right\rangle\cos^2\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right]
\tag{2.54}
$$
$$
\left\langle (\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle = 6D_Gt + \frac{2}{N+1}\sum_{p=1}^N \left\langle(\mathbf{X}_p(t)-\mathbf{X}_p(0))^2\right\rangle\cos^2\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right]
\tag{2.54}
$$

**구조를 풀어보면:**
- 첫 항 $\langle(\mathbf{X}_0(t)-\mathbf{X}_0(0))^2\rangle$은 식 (2.44)에서 이미 구한 무게중심의 MSD, 즉 $6D_Gt$ — 세그먼트가 어디에 있든 공통으로 겪는 "사슬 전체의 이동".
- $\langle(\mathbf{X}_p(t)-\mathbf{X}_p(0))^2\rangle$는 식 (2.47)에서 구한 자기상관함수를 펼치면 바로 얻어진다: $\langle X_p(t)^2\rangle - 2\langle X_p(t)\cdot X_p(0)\rangle + \langle X_p(0)^2\rangle = 2\langle \mathbf{X}_p^2\rangle(1-e^{-t/\tau_p}) = \frac{6k_BT\tau_p}{\zeta}(1-e^{-t/\tau_p})$ (평형상태라 $\langle \mathbf{X}_p(t)^2\rangle = \langle \mathbf{X}_p(0)^2\rangle = \langle \mathbf{X}_p^2\rangle = \frac{3k_BT\tau_p}{\zeta}$ — general framework의 per-coordinate $\frac{k_BT}{2|\lambda_p|}$의 3배).

#### 모든 세그먼트에 대한 평균 — $\cos^2$가 사라지는 이유 (식 2.55)

식 (2.54)는 특정 세그먼트 $n$ 하나에 대한 결과라 $n$에 따라 다른 값을 준다(사슬 가운데 세그먼트와 끝 세그먼트는 다르게 움직인다). "평균적인 세그먼트"의 거동을 보려면 $n=0,...,N$에 대해 평균을 낸다:

$$
g_{seg}(t) = \frac{1}{N+1}\sum_{n=0}^N \left\langle(\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle
$$

이 평균을 식 (2.54)에 대입하면, $n$에 대한 합이 $\cos^2[\cdot]$ 항에만 걸린다. 직교성 관계식 (2.36)의 변형을 쓰면 $\frac{1}{N+1}\sum_n \cos^2[p\pi(n+1/2)/(N+1)] = \frac{1}{2}$ (단 $p\geq1$) — 즉 **세그먼트 전체에 평균을 내면 어느 모드든 가중치가 똑같이 $1/2$로 평탄해진다.** 마디/배의 위치 의존성이 평균화 과정에서 정확히 지워지는 것이다. 이 사실을 대입하면 바로 식 (2.55)가 나온다:

$$
g_{seg}(t) = 6D_Gt + \frac{1}{N+1}\sum_{p=1}^N \left\langle(\mathbf{X}_p(t)-\mathbf{X}_p(0))^2\right\rangle = 6D_Gt + \frac{6k_BT}{\zeta(N+1)}\sum_{p=1}^N \tau_p\left(1-e^{-t/\tau_p}\right)
\tag{2.55}
$$
$$
\tau_p = \frac{\zeta b^2}{12k_BT}\left[\sin^2\left(\frac{p\pi}{2(N+1)}\right)\right]^{-1} 
$$


##### **(a) $t \gg \tau_1$ (Rouse time보다 긴 시간):** 
모든 $p\geq1$ 모드에서 $e^{-t/\tau_p}\to 0$이므로 합 전체가 $4\sum_p \langle X_p^2\rangle$라는 상수로 포화되고, 시간에 따라 자라는 항은 첫 항뿐이다.
→ $g_{seg}(t) \approx 6D_G t$. 정상 확산, 사슬 전체가 분자처럼 움직인다.

##### **(b) $\tau_N \ll t \ll \tau_1$, $N \gg 1$ (중간 시간) — 적분 근사의 4단계 (식 2.57 유도):**

이 구간에서는 $6D_Gt$ 항이 무시할 만큼 작고(식 2.44에서 $D_G \propto 1/(N+1)$이라 매우 느림), 합 $\sum_p\langle X_p^2\rangle(1-e^{-t/\tau_p})$이 지배적이다. $N\gg1$이면 $p$값이 매우 빽빽하게 분포하므로, 합을 적분으로 바꿀 수 있다. Padding은 이 적분을 4단계로 변환한다:

**1단계 — 합을 적분으로, $\langle X_p^2\rangle$와 $\tau_p$를 큰-$N$ 근사식(식 2.46, 2.50)으로 치환:**

$\tau_p \approx \frac{\zeta b^2(N+1)^2}{3\pi^2 k_BT}\frac{1}{p^2}$, $g_{seg}(t) \approx \frac{6k_BT}{\zeta(N+1)}\sum_{p=1}^N \tau_p\left(1-e^{-t/\tau_p}\right)$
$$
g_{seg}(t) = \frac{2b^2}{\pi^2}(N+1)\int_0^\infty dp\,\frac{1}{p^2}\left(1-e^{-tp^2/\tau_1}\right)
$$
(계수 $2b^2(N+1)/\pi^2$은 식 (2.55)의 $\frac{6k_BT}{\zeta(N+1)}\tau_p$에 $\tau_p \approx \tau_1/p^2$와 $\tau_1 = \frac{\zeta b^2(N+1)^2}{3\pi^2 k_BT}$를 대입한 결과다. 평형 진폭으로 쓰면 $\frac{2}{N+1}\langle\mathbf{X}_p^2\rangle$에 $\langle\mathbf{X}_p^2\rangle = \frac{b^2}{4\sin^2(p\pi/2(N+1))} \approx \frac{b^2(N+1)^2}{\pi^2 p^2}$를 넣은 것과 같다.)

**2단계 — $(1-e^{-x})$를 시간 적분으로 다시 쓰기:** 임의의 $x>0$에 대해 $1-e^{-x} = \int_0^x e^{-x'}dx'$라는 사실(또는 동등하게 $\frac{d}{dt'}e^{-t'p^2/\tau_1} = -\frac{p^2}{\tau_1}e^{-t'p^2/\tau_1}$를 적분)을 이용해 $(1-e^{-tp^2/\tau_1})$을 $t'$에 대한 적분으로 바꾼다:

$$
g_{seg}(t) = \frac{2b^2}{\pi^2}(N+1)\int_0^\infty dp\,\frac{1}{p^2}\cdot\frac{p^2}{\tau_1}\int_0^t dt'\,e^{-t'p^2/\tau_1} = \frac{2b^2}{\pi^2}\frac{(N+1)}{\tau_1}\int_0^t dt'\int_0^\infty dp\,e^{-t'p^2/\tau_1}
$$

이 단계의 핵심은 $1/p^2$이 정확히 지워진다는 것 — 적분 가능성을 막던 $p\to0$ 근처의 발산이 이렇게 사라진다.

**3단계 — 가우시안 적분 (Wolfram Alpha로 검산 가능):** 안쪽 $p$ 적분은 표준 가우시안 적분이다:

$$
\int_0^\infty dp\, e^{-t'p^2/\tau_1} = \frac{1}{2}\sqrt{\frac{\pi\tau_1}{t'}}
$$

(일반식 $\int_0^\infty e^{-ax^2}dx = \frac{1}{2}\sqrt{\pi/a}$에 $a=t'/\tau_1$을 대입한 결과.)

**4단계 — 남은 $t'$ 적분, $t^{1/2}$의 등장:**

$$
g_{seg}(t) = \frac{2b^2}{\pi^2}\frac{(N+1)}{\tau_1}\cdot\frac{1}{2}\sqrt{\pi\tau_1}\int_0^t dt'\,\frac{1}{\sqrt{t'}} = \frac{b^2(N+1)}{\pi^2}\sqrt{\frac{\pi}{\tau_1}}\cdot 2\sqrt{t}
$$

$\int_0^t t'^{-1/2}dt' = 2\sqrt{t}$가 바로 **이 유도 전체에서 $t^{1/2}$가 나오는 유일한 지점**이다. 마지막으로 식 (2.46)의 $\tau_1 \approx \zeta b^2(N+1)^2/(3\pi^2 k_BT)$를 대입해서 $(N+1)$과 $\tau_1$ 안의 $(N+1)^2$가 약분되면, $N$에 대한 의존성이 완전히 사라지고:

$$
g_{seg}(t) = \left(\frac{12k_BTb^2}{\pi\zeta}\right)^{1/2}t^{1/2}
\tag{2.57}
$$

**이상확산(subdiffusion) 지수 $\alpha = 1/2$가 등장.** $N$이 유도 중간에는 명시적으로 있었지만 $\tau_1$의 $N$ 의존성과 정확히 상쇄되어 최종식에서 사라졌다는 점이 중요하다 — 사슬이 충분히 길면 이 영역은 chain length를 "보지 못한다".

> [!note] 적분 변환의 핵심 아이디어 한 줄 요약
> 합 → 적분 (연속체 근사) → $(1-e^{-x})$를 적분형으로 전환 (발산 제거) → 가우시안 적분 (표준 공식) → 남은 시간적분에서 $t^{1/2}$ 출현. 이 패턴은 "완화시간이 연속 스펙트럼으로 퍼진 시스템에서 짧은 시간 거동을 구하는" 거의 모든 상황(stress relaxation의 Problem 2-2, β-polymer 일반화)에서 재사용된다.

##### **(c) $t \ll \tau_N$ (아주 짧은 시간):** 
첫 항이 다시 $6D_Gt$이지만, 이 영역은 개별 bead들이 서로 거의 독립으로 움직이는 ballistic-to-diffusive 초기 영역과 맞물린다.

> [!note] $\alpha=1/2$의 기하학적 origin
> 이 멱법칙은 외부 매질의 점탄성이나 fractional Gaussian noise 같은 별도의 메커니즘 없이, **순수하게 완화시간 스펙트럼이 $\tau_p \sim 1/p^2$로 연속적으로 퍼져 있다는 사실**에서 나온다. 어느 시점에 측정하든 "아직 완화되지 않은 모드들의 연속체"가 있고, 그 누적합이 정확히 $t^{1/2}$를 만든다. [[Polymer Models]]의 β-polymer 일반화($\tilde\kappa_p \propto \sin^\beta$)에서 $\alpha = 1-1/\beta$가 나오는 것도 똑같은 메커니즘의 연장이다 — mode density 모양만 바뀐 것.



### 일반화: K-matrix Diagonalization (GNM / HIPPS-DIMES convention)

> [!info] 독립 노트로 분리됨 (2026-07-10)
> 이 섹션의 전체 내용(General framework · Probability density · Dynamics(EOM) · Relaxation time · MSD of single locus · Segment-averaged MSD · Linear/Circular chain 예시)은 [[K-matrix Diagonalization (Generalized Rouse Model)]] 노트로 옮겨졌다.

## Questions & Insights

- 현재까지 기록된 질문 없음 — 학습 중 궁금한 점이 생기면 이곳에 추가.

## Related Concepts

- [[Polymer Models]]
- [[MSD exponent from scale-dependent Flory exponent]]
- [[Contact probability exponent and polymer scaling]]
- [[Entropic Spring Constant]]
- [[Central Limit Theorem]]
HIPPS-DIMES 부분은 아래 논문을 참고
- [[Journal reading - Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes]]
## References

- J.T. Padding, *Theory of Polymer Dynamics*, Chapter 2: The Rouse Model
- [[[Padding] THEORY OF POLYMER DYNAMICS-part-2.pdf]]
- [[Polymer Models]] (Rouse Model 섹션, Amitai & Holcman 2017 기반 요약)
- J.T. Padding and W.J. Briels, *J. Chem. Phys.* 114, 8685 (2001) — MD 시뮬레이션 비교 데이터 (Fig. 2.2, 2.3)

## Notes from Claude

이 노트는 [[Polymer Models]]의 "Rouse Model" 섹션(Amitai & Holcman 리뷰 기반 요약)과 별도로, Padding 교재의 전체 유도 과정을 자세히 풀어둔 독립 노트다. 두 노트의 표기법이 다른 점 주의:

| | Padding (이 노트) | Polymer Models 노트 |
|---|---|---|
| friction | $\zeta$ | $\gamma$ |
| spring constant | $k=3k_BT/b^2$ (3차원 고정) | $\kappa = dk_BT/b^2$ (일반 차원) |
| bead 수 | $N+1$ ($p=0,...,N$) | $N$ ($p=0,...,N-1$) |
| 가장 느린 모드 | $\tau_1$ | $\tau_N$ |

핵심적으로 새로 추가된 내용은 (1) fluctuation-dissipation theorem이 어디서 나오는지의 미시적 유도, (2) free-end 경계조건이 normal mode의 quantization을 어떻게 결정하는지, (3) stress tensor를 통한 viscosity 계산과 그 완화시간이 MSD의 완화시간과 다르다는 점이다.
