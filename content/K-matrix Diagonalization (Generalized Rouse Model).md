---
title: "K-matrix Diagonalization (Generalized Rouse Model)"
date: "2026-07-10"
subject: biophysics
tags:
  - study
  - concept
  - polymer-physics
  - rouse-model
  - gaussian-network
  - k-matrix
  - anomalous-diffusion
class: study
---

# K-matrix Diagonalization (Generalized Rouse Model)

## Overview

이 노트는 [[Rouse Model]]에서 분리된 것으로, Rouse chain의 특정 $\cos$ 기저 대각화(Padding 교재 §5, 식 2.48–2.50)를 **임의의 connectivity를 갖는 harmonic network**(GNM, Hi-C 기반 chromatin model 등; HIPPS-DIMES convention)로 일반화한다. 핵심은 connectivity matrix $K$의 eigendecomposition 하나로 probability density, dynamics(EOM), relaxation time, single-locus MSD, segment-averaged MSD가 모두 정리된다는 점이다.

> [!info] 분리 출처
> 본문은 [[Rouse Model]]의 "일반화: K-matrix Diagonalization" 섹션을 손실 없이 그대로 옮긴 것이다 (2026-07-10 분리). 본문에 등장하는 §5, §7, 식 (2.44)/(2.47)/(2.54)/(2.55) 등의 상호참조는 모두 [[Rouse Model]] 노트의 Part 1 내용을 가리킨다.

## Key Points

### 일반화: K-matrix Diagonalization (GNM / HIPPS-DIMES convention)

앞의 (2.48)-(2.50)은 Rouse chain의 특정 $\cos$ 기저에 대한 대각화였다. 이것을 임의의 connectivity를 갖는 harmonic network(GNM, Hi-C 기반 chromatin model 등)로 일반화하면, 핵심은 **connectivity matrix $K$의 eigendecomposition** 하나로 정리된다.

#### Gaussian netrok energy and K-matrix
각 loci의 거리에 의한 harmonic potential을 최대한 일반적으로 나타내면 아래 식이 된다. 
$$
H = \sum_{i<j} k_{ij}\,\|\mathbf{r}_i-\mathbf{r}_j\|^2
$$
$K-\text{matrix}$는 해밀토니안에서 모든 2차항의 계수를 담았다. 대칭행렬이며,  $K_{ij}=k_{ij}\ (i\ne j)$, $K_{ii}=-\sum_{j\ne i}k_{ij}$로 값이 주어진다. 이때, $k_{ij}$안에 $1/2$ factor가 이미 들어있다고 친다. 

Position vector $\mathbf{R} = (\mathbf{R}_0, \dots, \mathbf{R}_N)^T$에 대해 network의 결합에너지를 이차형식으로 쓰고, $K$의 orthonormal eigenvector를 행으로 쌓은 $V$와 eigenvalue 대각행렬 $\Lambda$로 대각화한다:
$$
H = -\mathbf{R}^T K \mathbf{R} = -\sum_{ij}\mathbf{R}_i K_{ij}\mathbf{R}_j, \qquad V K V^T = \Lambda = \mathrm{diag}(\lambda_0, \dots, \lambda_N)
$$
이때, $\Lambda$는 0 아니면 음수 값만 가진다. 즉 $K$는 negative-definite

$\mathbf{X} = V\mathbf{R}$로 $\mathbf{R}$을 mode vector $\mathbf{V}$로 변환할 수 있다. Linear과 circular polymer의 경우, 이 과정이 discrete Fourier transform이라는 것을 나중에 보게 될 것이다. 

해밀토니안을 mode vector $\mathbf{V}$로 나타내면 결합항이 완전히 분리된다 (independent quadratic terms):
$$
H = -\mathbf{X}^T \Lambda \mathbf{X} = -\sum_p \lambda_p\, \mathbf{X}_p^2
$$
$\lambda_0 = 0$은 center-of-mass zero mode다.

#### **Probability density** 
##### $\mathbf{R}_n$ basis
$P = \frac{1}{Z}\exp \left( -\beta H\right)$이므로, 
$$
P(\mathbf{R}_0, \dots, \mathbf{R}_N) = \frac{1}{Z}\exp\!\left(+\beta \,\mathbf{R}^T K \mathbf{R}\right) 
$$
Multivariance normal distribution과 비교하라. 
$$
\mathcal{N}(\mathbf{R} \mid \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{(2\pi)^{D/2}} \frac{1}{|\boldsymbol{\Sigma}|^{1/2}} \exp\left\{ -\frac{1}{2} (\mathbf{R} - \boldsymbol{\mu})^{\mathrm{T}} \boldsymbol{\Sigma}^{-1} (\mathbf{R} - \boldsymbol{\mu}) \right\}

$$
$\mathbf{\Sigma}_{ij} = \langle (R_i - \mu_i)(R_j - \mu_j)\rangle$는 covariance matrix이며, 
식 비교를 통해 $\mathbf{\Sigma}^{-1}=-2\beta K$라는 걸 알 수 있다. 
그러면 평형 상태의 위치 분포로부터 covariance matrix를 얻을 수 있고, 이를 역행렬로 취하면 $K$-matrix를 알 수 있다는 뜻이 된다. 다만, 주의할 점은 $K$-marix가 가진 0 eigen value이다. 
따라서 $K$의 Moore–Penrose pseudo-inverse가 $\mathbf{\Sigma}$가 된다. 
$$
\mathbf{\Sigma} = -\frac{1}{2\beta} K^{+} = \frac{k_BT}{2}(-K)^{+}
$$

**Pseudo-inverse의 eigen decomposition.** $K$는 real symmetric이라 spectral decomposition을 갖는다. 이 노트 convention($VKV^T=\Lambda$, 즉 $K = V^T\Lambda V$)에서 $p$번째 eigenvector를 $\mathbf{v}_p$ ($V$의 $p$번째 행)라 하면:

$$
K = \sum_{p=0}^{N}\lambda_p\,\mathbf{v}_p\mathbf{v}_p^{T}, \qquad \lambda_0 = 0,\ \ \lambda_{p\ge1} < 0
$$

Symmetric matrix의 pseudo-inverse는 **eigenvector는 그대로 두고, nonzero eigenvalue만 역수로 바꾸며, zero eigenvalue는 0으로 남긴다**:

$$
K^{+} = \sum_{p:\,\lambda_p\ne 0}\frac{1}{\lambda_p}\,\mathbf{v}_p\mathbf{v}_p^{T} = V^{T}\Lambda^{+}V, \qquad \Lambda^{+} = \mathrm{diag}\!\left(0,\ \tfrac{1}{\lambda_1},\ \dots,\ \tfrac{1}{\lambda_N}\right)
$$

즉 $K$와 $K^{+}$는 **같은 eigenbasis $V$를 공유**하고 spectrum만 $\lambda_p \mapsto 1/\lambda_p$ ($p\ge1$)로 반전된다. Zero mode(center of mass)는 pseudo-inverse에서도 eigenvalue 0으로 kernel에 그대로 남는다.

**Per-mode 분산과의 정합성.** $\mathbf{\Sigma} = -\frac{1}{2\beta}K^{+}$의 internal mode($p\ge1$) eigenvalue를 읽으면

$$
-\frac{1}{2\beta}\cdot\frac{1}{\lambda_p} = -\frac{1}{2\beta\lambda_p} = \frac{k_BT}{2|\lambda_p|}
$$

로, 뒤의 $\mathbf{X}_p$ basis에서 구할 per-coordinate 평형 분산 $\langle X_{p,\alpha}^2\rangle = \frac{k_BT}{2|\lambda_p|}$과 정확히 일치한다. Center-of-mass 방향은 eigenvalue 0 — 유한한 평형 분산이 정의되지 않는 free translational mode를 pseudo-inverse가 projection out 한 것이다. 결국 $\mathbf{\Sigma}$는 internal subspace 위에서만 정의된 degenerate Gaussian의 covariance다.

**Projector 해석 — double-centering과의 연결.** $K$와 $K^{+}$의 곱은 zero mode를 걷어내는 orthogonal projector가 된다:

$$
KK^{+} = K^{+}K = \sum_{p\ge1}\mathbf{v}_p\mathbf{v}_p^{T} = I - \mathbf{v}_0\mathbf{v}_0^{T} = I - \frac{1}{N+1}\mathbf{1}\mathbf{1}^{T}
$$

($\mathbf{v}_0 = \frac{1}{\sqrt{N+1}}\mathbf{1}$은 uniform center-of-mass eigenvector.) 이 projector $I - \frac{1}{N+1}\mathbf{1}\mathbf{1}^{T}$가 곧 classical MDS의 **double-centering matrix** $J$다. 따라서 "평형 위치 covariance $\to$ pseudo-inverse $\to K$" 경로는 static structure(pairwise distance)에서 connectivity를 역산하는 MDS / HIPPS-DIMES 절차($G = -\tfrac12 JDJ = cK^{+}$)와 같은 대수적 골격을 공유한다.

##### $\nu$ to $\alpha$ derivation 연구와 연결
[[260629 Continuous nu(n)에서 K matrix 유도 (classical MDS)]]과 비교하면서 진행하자. 
###### 첫번째, $r^2(s) = s^{\nu}$로부터 


##### $\mathbf{X}_p$ basis
Probability density가 훨 간단해진다. 
$$
P(\mathbf{X}_0, \dots, \mathbf{X}_N) = \frac{1}{Z}\exp\!\left(+\beta\sum_p \lambda_p \mathbf{X}_p^2\right)
$$
대각화로 인해서, 각 $\mathbf{X}_p$ p-mode가 독립적인 Gaussian distribution을 가진다. $\lambda_p \le 0$이라는 점을 의식할 것. 

각 mode의 평형 분산을 읽으면 (per coordinate $\alpha$):
$$
\langle X_{p,\alpha}^2 \rangle = \frac{k_BT}{2 \lvert \lambda_p \rvert}
$$
Eigrn value의 절댓값이 크면 분산이 작아지는 것을 볼 수 있다. 

#### Static structure → covariance: double-centering (classical MDS)

앞의 $\boldsymbol{\Sigma} = -\frac{1}{2\beta}K^{+}$는 **평형 위치 covariance를 알면 $K$의 spectrum을 얻는다**는 뜻이다. 그런데 실험·시뮬레이션에서 직접 측정되는 양은 covariance가 아니라 **pairwise mean-square distance** $\langle|\mathbf{R}_i-\mathbf{R}_j|^2\rangle$ (Hi-C, MINFLUX 등)다. 이 둘을 잇는 것이 classical MDS의 **double-centering 항등식** $G = -\frac{1}{2}JDJ$이고, 아래에서 한 configuration에 대해 대수적으로 증명한 뒤 ensemble 평균으로 넘긴다.

**표기.** bead $n = N+1$개, 위치 $\mathbf{R}_i \in \mathbb{R}^d$.

- squared-distance matrix: $D_{ij} = |\mathbf{R}_i - \mathbf{R}_j|^2$
- center of mass: $\mathbf{R}_{cm} = \frac{1}{n}\sum_k \mathbf{R}_k$, 중심화 위치 $\delta\mathbf{R}_i = \mathbf{R}_i - \mathbf{R}_{cm}$
- 중심화 Gram matrix: $G_{ij} = \delta\mathbf{R}_i \cdot \delta\mathbf{R}_j$
- centering matrix: $J = I - \frac{1}{n}\mathbf{1}\mathbf{1}^{T}$

$J$는 $\mathbf{1}$(= CoM 방향)을 죽이는 orthogonal projector다:

$$
J\mathbf{1} = 0, \qquad J^{T} = J, \qquad J^{2} = J
$$

**Step 1 — $D$ 분해.** $|\mathbf{R}_i-\mathbf{R}_j|^2 = |\mathbf{R}_i|^2 + |\mathbf{R}_j|^2 - 2\,\mathbf{R}_i\cdot\mathbf{R}_j$. uncentered Gram $B_{ij} = \mathbf{R}_i\cdot\mathbf{R}_j$와 $a_i = |\mathbf{R}_i|^2$로 쓰면:

$$
D = a\mathbf{1}^{T} + \mathbf{1}a^{T} - 2B
$$

**Step 2 — 양옆에 $J$.** $J\mathbf{1}=0$, $\mathbf{1}^{T}J=0$이라 절대 위치 크기 정보 $a$를 담은 rank-1 항이 완전히 소거된다:

$$
J(a\mathbf{1}^{T})J = (Ja)(\mathbf{1}^{T}J) = 0, \qquad J(\mathbf{1}a^{T})J = (J\mathbf{1})(a^{T}J) = 0
$$

$$
\Rightarrow \quad -\frac{1}{2}JDJ = JBJ
$$

**Step 3 — $JBJ = G$.** 위치를 행으로 쌓은 $n\times d$ 행렬 $\mathsf{R}$ ($i$번째 행 $= \mathbf{R}_i^{T}$)로 $B = \mathsf{R}\mathsf{R}^{T}$. $J\mathsf{R}$의 $i$번째 행이 $\mathbf{R}_i - \mathbf{R}_{cm} = \delta\mathbf{R}_i$이므로:

$$
JBJ = (J\mathsf{R})(J\mathsf{R})^{T}, \qquad (JBJ)_{ij} = \delta\mathbf{R}_i\cdot\delta\mathbf{R}_j = G_{ij}
$$

따라서 한 configuration에서 항등식이 성립한다:

$$
G = -\frac{1}{2}JDJ
$$

**Step 4 — Ensemble 평균.** 이 항등식은 $D$에 대해 선형이라 평균이 그대로 통과한다:

$$
\langle G\rangle = -\frac{1}{2}J\langle D\rangle J
$$

$\langle D\rangle_{ij} = \langle|\mathbf{R}_i-\mathbf{R}_j|^2\rangle$는 측정 가능한 mean-square distance이고, $\langle G\rangle_{ij} = \langle\delta\mathbf{R}_i\cdot\delta\mathbf{R}_j\rangle$는 CoM-subtracted position covariance $\boldsymbol{\Sigma}$다:

$$
\boldsymbol{\Sigma} = -\frac{1}{2}J\langle D\rangle J
$$

$J$가 $\mathbf{1}$ 성분을 죽였기 때문에 lab origin 기준 절대 covariance가 아니라 **무게중심 기준 internal covariance**만 남는다 — 자유 확산하는 CoM은 stationary variance가 없어 애초에 정의되지 않는데, double-centering이 그 발산 방향을 자동으로 걷어낸다.

> [!note] 차원 인수 bookkeeping
> 위 $\boldsymbol{\Sigma}$는 full dot product($d$개 좌표 합)라, 이 노트의 per-coordinate covariance $\Sigma^{(\alpha)} = -\frac{1}{2\beta}K^{+}$와는 $\boldsymbol{\Sigma} = d\,\Sigma^{(\alpha)}$로 $d(=3)$배 차이다:
> $$
> -\frac{1}{2}J\langle D\rangle J = d\,\Sigma^{(\alpha)} = -\frac{d}{2\beta}K^{+}
> $$
> 상수 $\frac{d}{2\beta}$는 spectrum의 **모양**엔 안 들어오고 시간축 단위만 정하므로, "$\langle D\rangle \to$ 대각화 $\to$ eigenvalue 역수 $\to \lambda_p(K)$" 경로는 그대로 유효하다.

**함의 — static → dynamics.** $\boldsymbol{\Sigma}$와 $K^{+}$는 같은 eigenbasis를 공유하므로, 측정된 $\langle D\rangle$을 double-centering해서 대각화하면 eigenvalue만 역수 취해 $K$의 spectrum $\{\lambda_p\}$, 곧 relaxation spectrum $\{\tau_p\} = \{-\zeta/2\lambda_p\}$가 나온다. Segment-averaged MSD는 이 spectrum에만 의존하므로, **정적 pairwise distance만으로 dynamics가 예측된다** — HIPPS-DIMES의 핵심 논리다.

> [!warning] PSD 조건 (Schoenberg)
> $-\frac{1}{2}J\langle D\rangle J$가 PSD인 것은 $\langle D\rangle$이 진짜 Euclidean squared-distance matrix일 때와 동치다(Schoenberg criterion). 상수 exponent homopolymer $\langle R^2(s)\rangle \sim s^{2\nu}$는 Hurst $H=\nu$인 fractional Brownian motion이라 $0<\nu<1$에서 자동으로 PSD지만, **scale-dependent $\nu(s)$**에서는 보장되지 않으니 수치적으로 확인해야 한다.

#### Dynamics
K-matrix로 일반화한 운동방정식을 유도하자. 
##### Hamiltonian과 gradient
$$
H = -\sum_{i=0}^{N}\sum_{j=0}^{N} \mathbf{R}_i\,\mathbf{R}_j\,K_{ij}
$$
$\mathbf{R}_n$에 대한 gradient를 구하면, $\mathbf{R}_i$와 $\mathbf{R}_j$ **양쪽 모두** $\mathbf{R}_n$에 의존하므로 곱미분으로 두 항이 나온다:

$$
\frac{dH}{d\mathbf{R}_n} = -\sum_{i,j}\left[\delta_{in}\mathbf{R}_j K_{ij} + \mathbf{R}_i\,\delta_{jn}K_{ij}\right] = -\sum_{j}\mathbf{R}_j K_{nj} - \sum_{i}\mathbf{R}_i K_{in}
$$

$K$의 대칭성($K_{ij}=K_{ji}$)으로 두 합이 같으므로, gradient vector는:
$$
\nabla\Phi = -K\mathbf{R} - \mathbf{R}^T K = -2K\mathbf{R}
$$
> **핵심:** quadratic form을 미분하면 대칭성 때문에 factor 2가 내려온다. 이 2가 뒤에서 Hamiltonian eigenvalue와 EOM eigenvalue를 구분 짓는다.
##### Equation of Motion
Overdamped Langevin equation에 대입한다:

$$
\frac{d\mathbf{R}}{dt} = -\frac{1}{\zeta}\nabla\Phi + \mathbf{f} = \frac{2}{\zeta}K\mathbf{R} + \mathbf{f}
$$
$\mathbf{R} = V^T\mathbf{X}$ (즉 $\mathbf{X} = V\mathbf{R}$)로 변환한다. EOM에 대입한 뒤 **왼쪽에서 $V$를 곱한다**:

$$
V\frac{d(V^T\mathbf{X})}{dt} = \frac{2}{\zeta}V K V^T\mathbf{X} + V\mathbf{f}
$$

$$
\underbrace{VV^T}_{I}\frac{d\mathbf{X}}{dt} = \frac{2}{\zeta}\underbrace{VKV^T}_{\Lambda}\mathbf{X} + V\mathbf{f}
$$

$$
\frac{d\mathbf{X}}{dt} = \frac{2}{\zeta}\Lambda\mathbf{X} + \mathbf{F}, \qquad \mathbf{F} = V\mathbf{f}
$$

각 mode가 완전히 분리된다. $\Lambda = \mathrm{diag}(\lambda_0,\dots,\lambda_N)$이고 $\lambda_p \le 0$ (negative semi-definite, $\lambda_0 = 0$은 center-of-mass zero mode).
#### Relaxation time

EOM eigenvalue가 $\frac{2\lambda_p}{\zeta}$이므로, $\langle \mathbf{X}_p(t)\cdot\mathbf{X}_p(0)\rangle = \langle X_p^2\rangle\exp(-t/\tau_p)$에서 relaxation time은 (Hamiltonian eigenvalue $\lambda_p$ 기준):
$$
\tau_p = -\frac{\zeta}{2\lambda_p}
$$
이제 general form의 single-locus MSD를 먼저 구하고, 그다음 linear chain과 circular chain에서 eigen value problem이 어떻게 풀리는지 살펴보자.

#### MSD of single locus

특정 locus $n$의 MSD $\left\langle (\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle$를 K-matrix framework로 일반화하자. §7 (2.54)에서 linear chain에 대해 구한 것을 임의 connectivity로 확장하는 것이다.

**재료.** 각 mode는 독립적인 OU process이므로 변위의 통계는 §5의 (2.47)과 동일한 꼴이다:

$$
\left\langle \mathbf{X}_p(t)\cdot\mathbf{X}_p(0)\right\rangle = \langle \mathbf{X}_p^2\rangle\, e^{-t/\tau_p}
\quad\Longrightarrow\quad
\left\langle (\mathbf{X}_p(t)-\mathbf{X}_p(0))^2\right\rangle = 2\langle \mathbf{X}_p^2\rangle\left(1-e^{-t/\tau_p}\right)
$$

평형 진폭은 general framework의 per-coordinate 결과 $\langle X_{p,\alpha}^2\rangle = \frac{k_BT}{2|\lambda_p|}$의 3배 (3D vector):

$$
\langle \mathbf{X}_p^2\rangle = \frac{3k_BT}{2|\lambda_p|} = \frac{3k_BT\,\tau_p}{\zeta}
$$

(마지막 등호는 $\tau_p = \zeta/2|\lambda_p|$.)

$\mathbf{R} = V^T\mathbf{X}$이므로 $\mathbf{R}_n = \sum_p (V^T)_{np}\mathbf{X}_p$이고, 변위도 선형 결합이다:

$$
\mathbf{R}_n(t)-\mathbf{R}_n(0) = \sum_p (V^T)_{np}\left(\mathbf{X}_p(t)-\mathbf{X}_p(0)\right)
$$

이것을 **제곱**해서 평균을 취하면 이중합 $\sum_{p,q}$이 나오는데, 서로 다른 mode는 상관이 없으므로 ($\langle \Delta\mathbf{X}_p\cdot\Delta\mathbf{X}_q\rangle \propto \delta_{pq}$) cross term이 전부 죽고 대각항만 남는다:

$$
\left\langle (\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle = \sum_{p,q}(V^T)_{np}(V^T)_{nq}\left\langle \Delta\mathbf{X}_p\cdot\Delta\mathbf{X}_q\right\rangle = \sum_p (V^T)_{np}^{\,2}\left\langle (\mathbf{X}_p(t)-\mathbf{X}_p(0))^2\right\rangle
$$

$\langle(\Delta\mathbf{X}_p)^2\rangle = 2\langle\mathbf{X}_p^2\rangle(1-e^{-t/\tau_p})$과 $\langle\mathbf{X}_p^2\rangle = 3k_BT\tau_p/\zeta$를 대입하면 최종 general form:

$$
\left\langle (\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle = \frac{6k_BT}{\zeta}\sum_p (V^T)_{np}^{\,2}\,\tau_p\left(1-e^{-t/\tau_p}\right)
$$

> [!note] Zero mode가 CoM diffusion을 자동으로 준다
> $p=0$은 $\lambda_0 = 0$이라 $\tau_0 \to \infty$이고, 극한에서 $\tau_0(1-e^{-t/\tau_0}) \to t$. Center-of-mass eigenvector는 상수 $(V^T)_{n0} = 1/\sqrt{N+1}$이므로 이 항은
> $$
> \frac{6k_BT}{\zeta}\cdot\frac{1}{N+1}\cdot t = 6D_G t, \qquad D_G = \frac{k_BT}{\zeta(N+1)} = \frac{D}{N+1}
> $$
> 가 되어 식 (2.44)의 무게중심 확산이 그대로 복원된다. 즉 위 general form은 CoM drift와 internal relaxation을 하나의 합에 담고 있다.

**Linear chain 확인.** $(V_{lin})_{pn} = \sqrt{\frac{c_p}{N+1}}\cos\!\left[\frac{p\pi}{N+1}\left(n+\tfrac12\right)\right]$을 넣으면 $(V^T)_{np}^{\,2} = \frac{c_p}{N+1}\cos^2[\cdots]$ ($c_0=1$, $c_{p\ge1}=2$)이고, $p=0$ 항이 $6D_Gt$, $p\ge1$ 항이 $\frac{12k_BT\tau_p}{\zeta(N+1)}\cos^2[\cdots](1-e^{-t/\tau_p})$가 되어 §7의 식 (2.54)와 정확히 일치한다.

#### Segment-averaged MSD — eigenvalue spectrum만 남는다

single-locus 결과를 모든 locus에 대해 평균 내면 eigenvector 정보가 완전히 사라지고 **eigenvalue spectrum $\{\tau_p\}$에만 의존하는** 식이 나온다. 이것이 §7 (2.55)의 basis-무관 일반화다.

$$
g_{seg}(t) \equiv \frac{1}{N+1}\sum_{n=0}^N \left\langle (\mathbf{R}_n(t)-\mathbf{R}_n(0))^2\right\rangle = \frac{6k_BT}{\zeta}\sum_p \left[\frac{1}{N+1}\sum_{n=0}^N (V^T)_{np}^{\,2}\right]\tau_p\left(1-e^{-t/\tau_p}\right)
$$

**대괄호 = $\frac{1}{N+1}$.** $\sum_n (V^T)_{np}^{\,2} = \sum_n V_{pn}^{\,2}$은 $V$의 $p$번째 행(= $p$번째 eigenvector)의 norm²이고, $V$가 orthonormal이라 모든 행의 norm이 1이다:

$$
\sum_{n=0}^N (V^T)_{np}^{\,2} = (VV^T)_{pp} = 1
\quad\Longrightarrow\quad
\frac{1}{N+1}\sum_{n=0}^N (V^T)_{np}^{\,2} = \frac{1}{N+1}
$$

즉 eigenvector의 구체적 모양($\cos$이든 complex exponential이든, 어떠한 connectivity든)이 평균화에서 씻겨 나간다. 대입하고 zero mode($\tau_0\to\infty$, $\tau_0(1-e^{-t/\tau_0})\to t$)를 분리하면:

$$
g_{seg}(t) = \frac{6k_BT}{\zeta(N+1)}\sum_p \tau_p\left(1-e^{-t/\tau_p}\right) = 6D_Gt + \frac{6k_BT}{\zeta(N+1)}\sum_{p\ge1} \tau_p\left(1-e^{-t/\tau_p}\right)
$$

$\tau_p = -\frac{\zeta}{2\lambda_p}$
저 summation 부분($\sum_{p\ge1} \tau_p\left(1-e^{-t/\tau_p}\right)$)이 single exponent이기 위한 $\tau$의 스펙트럼은 무엇인가?

이것은 §7의 식 (2.55)와 정확히 같은 식이다. 유도만 다르다 — §7은 linear chain의 $\cos^2$ 직교성($\frac{1}{N+1}\sum_n\cos^2 = \frac12$)에 의존했지만, 여기선 **basis 무관하게 eigenvector row norm = 1** 하나로 끝난다. (linear에서 $(V^T)_{np}^{\,2} = \frac{2}{N+1}\cos^2$이니 $\sum_n = \frac{2}{N+1}\cdot\frac{N+1}{2} = 1$로 두 논증이 일치.)

> [!note] Complex basis 주의
> circular polymer처럼 $V$가 complex(unitary)면 실변위 MSD라서 $(V^T)_{np}^{\,2}$ 대신 $|V_{pn}|^2$을 써야 한다. row norm = 1은 unitary에서도 성립하므로 결론은 그대로다 — $|(V_{cir})_{pn}| = 1/\sqrt{N+1}$이라 $\sum_n |V_{pn}|^2 = 1$.

> [!important] Structure → dynamics 함의
> segment-averaged MSD는 **eigenvalue spectrum $\{\tau_p\} = \{-\zeta/2\lambda_p\}$에만 의존하고 eigenvector에는 전혀 의존하지 않는다.** connectivity($K$의 구조)가 $g_{seg}$로 들어오는 통로는 오직 스펙트럼뿐이다. "어느 loci가 어떻게 연결됐나"의 세부(eigenvector)는 개별 locus MSD에는 남지만, segment 평균에서는 spectral density로 압축돼 사라진다.

#### Example: Linear chain
Spring constant $k$ 를 1/2 factor를 포함해서 정의. 
$$
k = \frac{3}{2\beta b^2}
$$
Linear chain의 K-matrix는 $K_{lin}$은 대각 $-2k$ (양 끝 $-k$), off-diagonal $+k$인 tridiagonal이다. 
$$
\mathbb{K}_{\text{lin}} = \begin{pmatrix} -k & k & 0 & \cdots & \cdots & 0 \\ k & -2k & k & 0 & & \vdots \\ 0 & k & -2k & \ddots & \ddots & \vdots \\ \vdots & 0 & \ddots & \ddots & k & 0 \\ \vdots & & \ddots & k & -2k & k \\ 0 & \cdots & \cdots & 0 & k & -k \end{pmatrix}
$$

eigenvector는 $\cos$:
$$
(V_{lin})_{pn} = \sqrt{\frac{c_p}{N+1}}\cos\!\left[\frac{p\pi}{N+1}\left(n+\tfrac12\right)\right], \qquad c_0 = 1,\ c_{p\ge1} = 2
$$
**정규화 주의:** 공통 $\frac{1}{\sqrt{N+1}}$만 붙이면 $p\ge1$ 행은 $\sum_n\cos^2 = \frac{N+1}{2}$라 norm$^2=\frac12$로 덜 정규화된다 — $p\ge1$ 행에 $\sqrt{2}$를 더 붙여야 $V_{lin}$이 진짜 orthogonal이 되고 $V_{lin}K_{lin}V_{lin}^T = \Lambda_{lin}$이 정확히 성립한다.

Eigen value는 
$$
\lambda_p =  -4k\sin^2\tfrac{\pi p}{2(N+1)}
$$
$$
\Lambda_{lin} = -4k\,\mathrm{diag}\!\left(0,\ \sin^2\tfrac{\pi}{2(N+1)},\ \sin^2\tfrac{2\pi}{2(N+1)},\ \dots,\ \sin^2\tfrac{N\pi}{2(N+1)}\right)
$$

위 eigen value와 $k = \frac{3}{2\beta b^2}$를 $P(\mathbf{X}_0, \dots, \mathbf{X}_N) = \frac{1}{Z}\exp\!\left(+\beta\sum_p \lambda_p \mathbf{X}_p^2\right)$에 대입하면 식 (2.49)가 나온다. 
#### Example: **Circular polymer**

Ring은 $K_{cir}$가 아래같이 생겼다. circulant matrix.
$$
\mathbb{K}_{\text{cir}} = 
\begin{pmatrix} 
-2k & k & 0 & \cdots & 0 & k \\ 
k & -2k & k & 0 & & 0 \\ 
0 & k & -2k & \ddots & \ddots & \vdots \\ 
\vdots & 0 & \ddots & \ddots & k & 0 \\ 
0 & & \ddots & k & -2k & k \\
k & 0 & \cdots & 0 & k & -k 
\end{pmatrix}
$$

eigenvector는 complex exponential이다. 

$$
(V_{cir})_{pn} = \frac{1}{\sqrt{N+1}}e^{-i\frac{2\pi p}{N+1}n}
$$

Eigenvalue는:
$$
\lambda_p = 2k\left(\cos\tfrac{2\pi p}{N+1} - 1\right) = -4k\sin^2\tfrac{p\pi}{N+1}
$$
**argument가 $\frac{p\pi}{N+1}$ (분모에 2 없음)** — linear의 $\frac{p\pi}{2(N+1)}$과 다르다. 
$$
\Lambda_{cir} = -4k\,\mathrm{diag}\!\left(0,\ \sin^2\tfrac{\pi}{N+1},\ \sin^2\tfrac{2\pi}{N+1},\ \dots,\ \sin^2\tfrac{N\pi}{N+1}\right)
$$
Ring은 $\lambda_p = \lambda_{N+1-p}$의 **2-fold degeneracy**를 갖는다 ($\sin^2\frac{(N+1-p)\pi}{N+1} = \sin^2\frac{p\pi}{N+1}$) — 4-C의 complex mode degeneracy가 spectrum에도 그대로 나타난다. $V_{cir}$는 complex(unitary)이므로 $V_{cir}K_{cir}V_{cir}^{\dagger} = \Lambda_{cir}$, quadratic form도 $\mathbf X^\dagger\Lambda\mathbf X$로 conjugate transpose를 쓴다 ($V^T$ 아님). 모든 $p$에서 $|(V_{cir})_{pn}|=1$이라 $\frac{1}{\sqrt{N+1}}$ 하나로 전부 unitary가 되어, linear에서 있던 $p\ge1$ 정규화 문제가 없다.




#### Example: Circular polymer with constant loop

Circular backbone의 모든 loci가 $m$칸 떨어진 상대와 추가로 loop bond를 이루는 경우다. 이것은 [[🔥MAIN - looped polymer dynamics]] 연구에서 **해석적 검증용 reference system**으로 쓰인다 — looped polymer 중 닫힌 형태로 완전히 풀리는 드문 경우이기 때문이다.

##### K-matrix 구조

Bead 개수 $n = N+1$, 모든 index는 $\bmod\ n$으로 순환한다. 각 bead $i$는 backbone 이웃 $i\pm1$과 loop 상대 $i\pm m$, 총 4개와 연결되므로 degree가 **모든 site에서 균일하게 4**다:

$$
(K_{\text{cir-loop}})_{ij} = k\left(\delta_{j,i+1} + \delta_{j,i-1} + \delta_{j,i+m} + \delta_{j,i-m}\right), \qquad (K_{\text{cir-loop}})_{ii} = -4k
\tag{L1}
$$

Row sum이 0인 Laplacian 조건 $-4k + 4k = 0$이 자동으로 만족된다. 핵심은 이 행렬이 **circulant**라는 점 — 각 행이 이전 행의 순환 shift이고, 첫 행 $c_j$ 하나가 전체를 결정한다:

$$
(K_{\text{cir-loop}})_{ij} = c_{(j-i) \bmod n}, \qquad c_1 = c_{n-1} = c_m = c_{n-m} = k,\quad c_0 = -4k
\tag{L2}
$$

##### 대각화 — Fourier mode가 항상 eigenvector다

Circulant matrix의 결정적 성질: **행렬의 내용과 무관하게** eigenvector가 discrete Fourier mode로 고정된다. Loop 유무나 $m$ 값에 관계없이 basis가 circular Rouse chain과 동일하다.

$$
(V_{\text{cir-loop}})_{pn} = \frac{1}{\sqrt{N+1}}e^{-i\frac{2\pi p}{N+1}n}
\tag{L3}
$$

증명은 shift operator의 고유함수 성질 하나로 끝난다. Test vector $v_p(j) = e^{i\theta_p j}$, $\theta_p \equiv \frac{2\pi p}{n}$에 $K$를 작용시키면:

$$
(Kv_p)(i) = k\left[v_p(i+1) + v_p(i-1) + v_p(i+m) + v_p(i-m)\right] - 4k\,v_p(i)
\tag{L4}
$$

$v_p(i\pm s) = v_p(i)\,e^{\pm i\theta_p s}$를 대입하면 공통인자 $v_p(i)$가 통째로 빠져나온다:

$$
(Kv_p)(i) = v_p(i)\cdot k\left[e^{i\theta_p} + e^{-i\theta_p} + e^{i\theta_p m} + e^{-i\theta_p m} - 4\right]
\tag{L5}
$$

Euler 항등식 $e^{ix}+e^{-ix} = 2\cos x$로 정리하면 eigenvalue equation $Kv_p = \lambda_p v_p$가 성립하고:

$$
\lambda_p = 2k\left(\cos\frac{2\pi p}{N+1} - 1\right) + 2k\left(\cos\frac{2\pi pm}{N+1} - 1\right)
\tag{L6}
$$

Half-angle 항등식 $1-\cos x = 2\sin^2(x/2)$를 적용한 최종 형태:

$$
\lambda_p = -4k\left[\sin^2\frac{p\pi}{N+1} + \sin^2\frac{pm\pi}{N+1}\right], \qquad p = 0, 1, \dots, N
\tag{L7}
$$


##### 결과 해석

**두 항의 합 구조.** (L7)은 backbone 항과 loop 항의 **단순 덧셈**이다. 앞 절의 circular Rouse eigenvalue $\lambda_p^{\text{cir}} = -4k\sin^2\frac{p\pi}{N+1}$과 비교하면:

$$
\lambda_p^{\text{cir-loop}} = \lambda_p^{\text{cir}} + \lambda_{pm}^{\text{cir}}
\tag{L8}
$$

즉 loop은 spectrum에 **주기가 $m$배 빠른 두 번째 cosine을 중첩**시킨다. 첫 항의 주기는 $p \sim n$, 둘째 항의 주기는 $p \sim n/m$으로 훨씬 짧다.

**극한 확인.** $m=0$ (또는 $m=n$)이면 둘째 항이 0이 되어 circular Rouse가 정확히 복원된다. $m=1$이면 backbone bond가 두 겹이 되어 $\lambda_p = -8k\sin^2\frac{p\pi}{n}$, 즉 spring constant가 두 배인 Rouse chain과 같다.

**Zero mode.** $p=0$에서 두 항 모두 0이므로 $\lambda_0 = 0$ — center-of-mass mode는 connectivity와 무관하게 항상 보존된다.

**Degeneracy.** $\sin^2$의 대칭성이 두 항 모두에서 성립하므로, circular Rouse와 동일한 **2-fold degeneracy** $\lambda_p = \lambda_{N+1-p}$가 유지된다.

**Small-$p$ 거동.** $p \ll n/m$이면 두 sine 모두 quadratic 근사가 가능해서:

$$
\lambda_p \approx -4k\left[\left(\frac{p\pi}{n}\right)^2 + \left(\frac{pm\pi}{n}\right)^2\right] = -\frac{4k\pi^2}{n^2}(1+m^2)\,p^2
\tag{L9}
$$

가장 긴 파장 영역에서는 여전히 $-\lambda_p \sim p^2$ (Rouse scaling, $\alpha=2$)이지만 **prefactor가 $(1+m^2)$배 증폭**된다. Loop이 large-scale relaxation을 $\tau_p = -\zeta/2\lambda_p$만큼 가속시킨다는 뜻이다.

**Beating과 겉보기 exponent.** $p \gtrsim n/m$부터는 둘째 항이 quadratic 영역을 벗어나 진동하기 시작하고, spectrum이 순수 power-law가 아니라 **두 주기의 중첩(beating pattern)**이 된다. 이 구간에서 수치적으로 측정되는 local exponent $\alpha(p) = d\log(-\lambda_p)/d\log p$는 심하게 요동하며, 넓은 구간 평균은 $\alpha=2$가 아닌 값으로 나타난다 ($N=10^4$, $m=2048$ 수치실험에서 관측상 $\alpha \approx 1$). 이것은 진짜 asymptotic scaling law가 아니라 **두 성분의 crossover 평균**임에 주의해야 한다.

> [!warning] Aliasing 주의
> $2m \equiv 0 \pmod{n}$인 경우(예: $m = n/2$) $i+m$과 $i-m$이 같은 site를 가리켜 bond가 이중으로 계산된다. 이때 (L7)은 loop 항의 계수가 두 배인 형태로 수정되어야 하며, 수치 구현에서도 `+=` 누적 방식이 같은 원소에 두 번 더하는지 확인해야 한다.

##### Linear chain은 왜 안 풀리는가

같은 loop 구조를 **linear** backbone에 얹으면 (L3)이 더 이상 eigenvector가 아니다. 두 가지 이유가 있다.

1. **Translation invariance 파괴.** 양 끝 근방($i < m$ 또는 $i > N-m$)에서 loop 상대가 존재하지 않아 bond가 잘려나간다. 대각항이 $-4k$가 아니라 $-2k$ 또는 $-3k$로 site마다 달라지고, 행렬이 circulant가 아니게 되어 (L4)의 인수분해가 성립하지 않는다.
2. **Band 구조.** $\pm1$과 $\pm m$ 두 개의 off-diagonal band를 갖는다. 순수 tridiagonal($m=0$)이면 Chebyshev 계열로 풀리지만, $m$번째 band가 추가되면 일반적으로 닫힌 형태의 해가 없다.

따라서 해석적 검증은 circular 버전으로 수행하고, linear의 bulk 성질은 $N \gg m$ 조건에서 circular 결과로 근사하는 것이 표준적인 접근이다.

##### Numerical validation

(L7)을 numerical diagonalization과 직접 비교할 수 있다.

```python
def analytic_eigenvalues_circular_loop(N, k, m):
    """식 (L7): circular polymer with constant loop의 해석적 eigenvalue"""
    n = N + 1
    p = np.arange(n)
    return -4 * k * (np.sin(p * np.pi / n)**2 + np.sin(p * m * np.pi / n)**2)

K = build_K_circular_constant_loop(N, k, m)
lam_num, _ = diagonalize(K)
lam_ana = analytic_eigenvalues_circular_loop(N, k, m)
assert np.allclose(np.sort(lam_num), np.sort(lam_ana))
```

##### MSD와의 연결

Eigenvector가 모든 site에서 $|(V)_{pn}| = 1/\sqrt{N+1}$로 균일하므로 single-locus MSD가 **locus 위치에 무관**하다 (circular 대칭성). 따라서 single-locus MSD와 segment-averaged MSD가 일치하고, 앞 절의 결과가 그대로 적용된다:

$$
\left\langle (\Delta\mathbf{R}_n(t))^2\right\rangle = 6D_Gt + \frac{6k_BT}{\zeta(N+1)}\sum_{p\ge1}\tau_p\left(1-e^{-t/\tau_p}\right), \qquad \tau_p = -\frac{\zeta}{2\lambda_p}
\tag{L10}
$$

$\lambda_p$에 (L7)을 대입하면 loop이 MSD에 미치는 영향이 완전히 결정된다. Spectrum이 $-\lambda_p \sim p^{\alpha}$를 따르는 구간에서 MSD exponent는 $\beta = 1 - 1/\alpha$ 관계를 만족하므로, small-$p$의 $\alpha=2$ 구간은 $\beta=1/2$ (Rouse), beating 구간의 겉보기 $\alpha \approx 1$은 $\beta \approx 0$ (plateau, loop에 의한 caging)에 대응한다.

## Questions & Insights

- (Rouse Model 노트에서 이어진 열린 질문) segment-averaged MSD의 summation $\sum_{p\ge1}\tau_p(1-e^{-t/\tau_p})$이 single exponential이 되기 위한 $\tau$ 스펙트럼은 무엇인가?

## Related Concepts

- [[Rouse Model]]
- [[Polymer Models]]
- [[MSD exponent from scale-dependent Flory exponent]]
- [[📑 Journal reading - Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes]]

## References

- J.T. Padding, *Theory of Polymer Dynamics*, Chapter 2: The Rouse Model
- [[[Padding] THEORY OF POLYMER DYNAMICS-part-2.pdf]]

## Notes from Claude

이 노트는 [[Rouse Model]] 노트가 길어져 K-matrix 일반화 부분(GNM / HIPPS-DIMES convention)을 2026-07-10에 독립 노트로 분리한 것이다. 본문은 원본에서 손실 없이 verbatim으로 이식했으며(원본의 사소한 표기/오타도 그대로 보존), 본문 내 §5·§7 및 식 (2.44)/(2.47)/(2.54)/(2.55) 등의 상호참조는 [[Rouse Model]]의 Part 1을 가리킨다. 필요하면 이 상호참조들을 명시적 링크로 바꾸는 후속 작업을 할 수 있다.
