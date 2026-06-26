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
> [!note] 시뮬레이션과의 연결
> LAMMPS 같은 MD 시뮬레이션에서 thermostat(예: Langevin thermostat)을 설정할 때 friction coefficient $\zeta$ (또는 damping time $1/\xi$)와 온도 $T$를 동시에 지정하는데, 그 둘이 독립적으로 자유롭게 고를 수 있는 게 아니라 식 (2.9)의 관계로 묶여 있다는 걸 보여주는 부분이다.

### 2. Overdamped 극한과 Smoluchowski 영역

Bead가 초기 속도의 "기억"을 잃는 시간 $\tau \approx 1/\xi$ 동안 이동하는 거리는 bead 지름에 비해 극히 작다 (나노미터 크기 bead: $l/a \sim 10^{-2}$, 식 2.14). 즉 **속도 자유도가 거의 즉시 평형화되므로, 우리가 관심 있는 시간척도(configuration이 바뀌는 시간척도)에서는 속도를 적분해서 없애고 위치만 추적할 수 있다.**

이렇게 얻는 것이 overdamped Langevin equation:

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

$N+1$개 bead, $N$개 spring ($k=3k_BT/b^2$)으로 이루어진 chain에서 내부 bead $n=1,...,N-1$의 운동방정식:

$$
\frac{d\mathbf{R}_n}{dt} = -\frac{3k_BT}{\zeta b^2}(2\mathbf{R}_n - \mathbf{R}_{n-1} - \mathbf{R}_{n+1}) + \mathbf{f}_n
\tag{2.19}
$$

양 끝 bead ($n=0, N$)는 한쪽 이웃만 있어서 식이 다르다 (식 2.18, 2.20). 이 **경계조건의 비대칭성**이 다음 단계인 normal mode 분리에서 mode의 quantization 조건을 결정한다.

### 4. Normal Mode 분리 — 경계조건이 만드는 양자화

$(3N+3)$개의 결합된 stochastic differential equation을 풀기 위해, ansatz $\mathbf{R}_n(t) = \mathbf{X}(t)\cos(an+c)$를 대입한다. 내부 bead의 방정식 (2.25)은 자동으로 만족되지만, **양 끝의 경계조건**(식 2.28-2.29)을 동시에 만족시키려면:

$$
\cos(a-c) = \cos c, \qquad \cos((N+1)a+c) = \cos(Na+c)
\tag{2.30, 2.31}
$$

이 조건에서 다음의 quantized 값들이 나온다:

$$
a = \frac{p\pi}{N+1}, \qquad c = \frac{p\pi}{2(N+1)}, \qquad p = 0, 1, ..., N
\tag{2.34}
$$

**핵심 통찰:** Free end 경계조건(양 끝이 한쪽 이웃만 갖는다는 사실)이 정확히 $N+1$개의 독립적인 cosine mode를 허용한다. 이는 고전적인 "고정된 끝(fixed boundary)"의 normal mode(사인 함수, $\sin(p\pi n/N)$ 형태)와 다른 quantization이다 — Rouse chain의 양 끝이 자유롭기 때문에 코사인 형태가 나온다.

전체 해는 이 mode들의 선형결합:

$$
\mathbf{R}_n = \mathbf{X}_0 + 2\sum_{p=1}^N \mathbf{X}_p \cos\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right]
\tag{2.35}
$$

역변환:

$$
\mathbf{X}_p = \frac{1}{N+1}\sum_{n=0}^N \mathbf{R}_n \cos\left[\frac{p\pi}{N+1}\left(n+\frac{1}{2}\right)\right]
\tag{2.37}
$$

이 변환으로 원래 결합된 방정식들이 완전히 **분리(decouple)**된다:

$$
\frac{d\mathbf{X}_p}{dt} = -\frac{3k_BT}{\zeta b^2}4\sin^2\left(\frac{p\pi}{2(N+1)}\right)\mathbf{X}_p + \mathbf{F}_p
\tag{2.38}
$$

$p=0$ 모드($\mathbf{X}_0$)는 무게중심(center of mass) $\mathbf{R}_G$ 그 자체이며, 다른 모든 모드($p\geq 1$)는 무게중심을 고정한 채 일어나는 독립적인 진동(vibration)이다. 모드 $\mathbf{X}_p$는 $N/p$개 세그먼트로 이루어진 subchain의 파장에 대응한다.

### 5. Relaxation Time과 평형 진폭

식 (2.38)을 풀면 relaxation time:

$$
\tau_p = \frac{\zeta b^2}{3k_BT}\left[4\sin^2\left(\frac{p\pi}{2(N+1)}\right)\right]^{-1} \approx \frac{\zeta b^2(N+1)^2}{3\pi^2 k_BT}\frac{1}{p^2}
\tag{2.46}
$$

(근사는 $p \ll N$일 때 유효하다.) 가장 느린 모드 $p=1$의 완화시간이 **Rouse time** $\tau_R \equiv \tau_1 \propto (N+1)^2$이다.

평형 진폭(Gaussian 분포의 분산):

$$
\langle X_p^2 \rangle = \frac{b^2}{8(N+1)\sin^2\left(\frac{p\pi}{2(N+1)}\right)} \approx \frac{(N+1)b^2}{2\pi^2}\frac{1}{p^2}
\tag{2.50}
$$

**진폭도 완화시간도 똑같이 $1/p^2$로 떨어진다** — 이 사실이 뒤에 나오는 모든 멱법칙(end-to-end correlation, segmental MSD, stress relaxation)의 공통 원인이다.

### 6. End-to-End Vector의 시간 상관함수

$\mathbf{R} = \mathbf{R}_N - \mathbf{R}_0$은 홀수 $p$ 모드만으로 표현된다 (짝수 모드는 대칭성에 의해 상쇄, Problem 2-1):

$$
\langle \mathbf{R}(t)\cdot\mathbf{R}(0)\rangle = \frac{8b^2}{\pi^2}(N+1)\sum_{p=1}^{N}{}' \frac{1}{p^2}e^{-t/\tau_p}
\tag{2.53}
$$

(prime은 홀수 $p$만 합산을 의미.) 이 식은 실제 polyethylene melt의 MD 시뮬레이션 결과(Padding & Briels 2001, Fig. 2.2)와 entanglement 길이 이하에서 잘 맞는다.

### 7. Segmental MSD — 세 가지 시간 영역

평균 세그먼트의 MSD:

$$
g_{seg}(t) = 6D_Gt + 4\sum_{p=1}^N \langle X_p^2\rangle\left(1-e^{-t/\tau_p}\right)
\tag{2.55}
$$

여기서 $D_G = D/(N+1)$은 무게중심의 diffusion coefficient.

**(a) $t \gg \tau_1$ (긴 시간):** 첫 항이 지배 → $g_{seg}(t) \approx 6D_G t$. 정상 확산, 사슬 전체가 분자처럼 움직인다.

**(b) $\tau_N \ll t \ll \tau_1$, $N \gg 1$ (중간 시간):** 합을 적분으로 근사하면

$$
g_{seg}(t) = \left(\frac{12k_BTb^2}{\pi\zeta}\right)^{1/2}t^{1/2}
\tag{2.57}
$$

**이상확산(subdiffusion) 지수 $\alpha = 1/2$가 등장.** $N$에 무관하다는 게 중요한 특징 — 사슬이 충분히 길면 이 영역은 chain length를 "보지 못한다".

**(c) $t \ll \tau_N$ (아주 짧은 시간):** 첫 항이 다시 $6D_Gt$이지만, 이 영역은 개별 bead들이 서로 거의 독립으로 움직이는 ballistic-to-diffusive 초기 영역과 맞물린다.

> [!note] $\alpha=1/2$의 기하학적 origin
> 이 멱법칙은 외부 매질의 점탄성이나 fractional Gaussian noise 같은 별도의 메커니즘 없이, **순수하게 완화시간 스펙트럼이 $\tau_p \sim 1/p^2$로 연속적으로 퍼져 있다는 사실**에서 나온다. 어느 시점에 측정하든 "아직 완화되지 않은 모드들의 연속체"가 있고, 그 누적합이 정확히 $t^{1/2}$를 만든다. [[Polymer Models]]의 β-polymer 일반화($\tilde\kappa_p \propto \sin^\beta$)에서 $\alpha = 1-1/\beta$가 나오는 것도 똑같은 메커니즘의 연장이다 — mode density 모양만 바뀐 것.

### 8. Stress Tensor와 Viscosity

미시적 stress tensor (kinetic 항 무시, pairwise force만 고려)를 Rouse mode로 옮기면:

$$
\bar{\sigma}^{micr} = \frac{3k_BT}{V}\sum_{p=1}^N \frac{\mathbf{X}_p\mathbf{X}_p}{\langle X_p^2\rangle}
\tag{2.76}
$$

각 모드가 **독립적으로** 응력에 기여한다 (cross term 없음). Rouse mode가 Gaussian 변수이므로, $\sigma_{xy}^{micr}(t)\sigma_{xy}^{micr}(0)$의 ensemble average는 Wick's theorem 형태로 분해되고, $p=q$인 항만 남는다:

$$
G(t) = \frac{k_BT}{V}\sum_{p=1}^N\left[\frac{\langle X_p(t)\cdot X_p(0)\rangle}{\langle X_p^2\rangle}\right]^2 = \frac{ck_BT}{N+1}\sum_{p=1}^N e^{-2t/\tau_p}
\tag{2.79}
$$

여기서 $c=N/V$는 bead 수밀도.

**주목할 점:** MSD의 mode correlation은 $e^{-t/\tau_p}$ (1차)인데, stress correlation은 그 제곱이라 $e^{-2t/\tau_p}$ — **stress relaxation은 MSD보다 완화시간이 절반으로 빠르다.** 같은 시스템이라도 MSD로 측정한 $\tau$와 rheology로 측정한 $\tau$를 혼동하면 안 된다.

이를 적분하면 viscosity (식 2.80):

$$
\eta = \int_0^\infty G(t)\,dt \approx \frac{c\zeta b^2}{36}(N+1)
\tag{2.80}
$$

농도와 friction이 고정일 때 $\eta \propto N$ — Rouse 모델의 특징적 예측이며, entanglement가 없는 저분자량 melt에서 실험적으로 확인된다 (고분자량에서는 entanglement 효과로 더 강한 $N$ 의존성이 나타남, Chapter 4 참고).

**짧은 시간 거동 (Problem 2-2):**

$$
G(t) = \frac{ck_BT}{N+1}\sqrt{\frac{\pi\tau_1}{8t}} \propto t^{-1/2}, \qquad \tau_N \ll t \ll \tau_1
$$

MSD의 $t^{+1/2}$ 성장과 정확히 짝을 이루는 $t^{-1/2}$ 감쇄 — 둘 다 같은 mode density에서 나오는 두 얼굴이다. Generalized Stokes-Einstein 관계의 polymer 버전으로 볼 수 있다.

### 9. 근사가 성립하는 조건 — fitting 검증 시 주의점

식 (2.46), (2.50), (2.57), (2.80)의 연속 적분 근사는 모두 $p \ll N$ (또는 동등하게 $\tau_N \ll t \ll \tau_1$) 조건에서만 유효하다. 만약 시뮬레이션에서 관찰하는 시간 구간이 이 윈도우를 벗어나면(즉 $N$이 충분히 크지 않거나, $t$가 $\tau_1$이나 $\tau_N$ 근처면), 깨끗한 멱법칙이 아니라 crossover 영역의 곡선이 나타난다. Fitting-free 검증을 할 때는 이 윈도우가 실제로 측정 구간을 충분히 덮는지 먼저 확인하는 것이 중요하다.

## Questions & Insights

- 현재까지 기록된 질문 없음 — 학습 중 궁금한 점이 생기면 이곳에 추가.

## Related Concepts

- [[Polymer Models]]
- [[MSD exponent from scale-dependent Flory exponent]]
- [[Contact probability exponent and polymer scaling]]
- [[Entropic Spring Constant]]
- [[Central Limit Theorem]]

## References

- J.T. Padding, *Theory of Polymer Dynamics*, Chapter 2: The Rouse Model
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
