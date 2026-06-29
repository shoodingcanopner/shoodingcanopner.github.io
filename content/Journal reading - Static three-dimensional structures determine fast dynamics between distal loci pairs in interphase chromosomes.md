---
title: Journal reading - Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes
authors: Guang Shi, Sucheol Shin, D. Thirumalai
DOI: "[DOI](https://doi.org/10.1126/sciadv.adx1763)"
date read: 2026-06-29
date published: 2025-08-01
subject: biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes
![[Pasted image 20260629090825.png]]

## 읽은 이유
[[260619 Lab Rotation Presentation (EN)]]의 후속연구를 위해

## Overview

Live-cell imaging은 enhancer–promoter(E–P) 같은 chromatin loci 쌍 사이의 dynamics가 예상보다 훨씬 빠르다는 것을 보여줬다. 그런데 같은 세포의 정적(static) Hi-C/Micro-C contact map은 분명히 compact한 구조(fractal globule에 가까운 $\nu \approx 1/3$)를 보인다. **Compact한 구조라면 relaxation도 느려야 하는데, 실제로는 빠르다** — 이것이 Brückner et al. (Science, 2023)이 제기한 **conundrum**이다.

이 논문은 이 conundrum을 "구조와 동역학이 무관하다"가 아니라, **static contact map 단 하나만 입력으로 받으면 동역학 전체(relaxation time, MSD, first-passage time)를 정량적으로 예측할 수 있다**는 식으로 해결한다. 방법론은 **HIPPS-DIMES**: maximum entropy principle로 Hi-C contact map에서 3D 구조 ensemble을 만들고, 그 과정에서 나오는 connectivity matrix $\mathbf{K}$를 harmonic spring network의 spring constant로 재해석해 generalized Rouse model처럼 동역학을 푼다. Locus 고유의 fitting parameter는 전혀 없고, **전체 timescale을 정하는 friction coefficient 하나**만 조정한다.

주목할 점: 이 논문의 방법론. Analytic하게 풀 수 있다면 시간에 따라 바뀌는 exponents사이 관계식을 구할 수 있지 않을까?

## Link to PDF and DOI

- DOI: [10.1126/sciadv.adx1763](https://doi.org/10.1126/sciadv.adx1763)
- *Science Advances* **11**, eadx1763 (2025)
- PDF: [[Books/Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes.pdf|Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes]]

## 주요 내용 요약

### 1. Conundrum의 정량적 구조 — Introduction의 scaling theory

| Symbol   | 정의                                                                                                                   |
| -------- | -------------------------------------------------------------------------------------------------------------------- |
| $\nu$    | Flory exponent. Mean spatial distance $r(s)$가 genomic distance $s$에 대해 갖는 정적(static) scaling: $r^2(s) \sim s^{2\nu}$ |
| $\theta$ | Diffusion coefficient $D(s)$가 $s$에 대해 갖는 scaling: $D(s) \sim s^{-\theta}$ ($s$길이의 subchain의 diffusion coefficient)   |
| $\alpha$ | Single-monomer MSD anomalous exponent: $\Delta r^2(\tau) \sim \tau^\alpha$                                           |

기존에 내가 알고 있던 sacling theory([[MSD exponent from scale-dependent Flory exponent]])와 같지만 살짝 다름. $\theta$가 추가되었다. 

#### **(scaling relation - A) Collective diffusion
Genomic length $s$인 polymer coil이 자기 크기만큼 움직이는 데 걸리는 시간은 $\tau_r(s) = r^2(s)/D(s)$이다. 이는 [[MSD exponent from scale-dependent Flory exponent]]에서 Ansatz 2와 같다. 
관계식에 exponents를 대입하면
$$

\tau_r(s) \sim s^{2\nu+\theta}
\tag{1a}
$$
#### (scaling relation - B) Connectivity
$\tau_r$ 시간 동안 monomer 하나가 diffusion으로 움직인 거리도 coil 크기 $r(s)$와 같아야 한다는 self-consistency 조건 $\tau_r^{\alpha}\sim r^2(s)\sim s^{2\nu}$.  이는 [[MSD exponent from scale-dependent Flory exponent]]에서 Ansatz 1과 같다. 
여기에 (1a)를 대입하면 $s^{\alpha(2\nu+\theta)}\sim s^{2\nu}$, 따라서 세 exponents의 관계식이 나온다. 

$$
\alpha = \frac{2\nu}{2\nu+\theta}
\tag{1b}
$$

**실험으로 측정 가능한 $\tau$로의 연결.** $\tau_r$ 자체는 직접 측정하기 어렵다. Brückner et al.은 대신 two-point quantity $M_2(t)=\langle\|\mathbf{r}_{ij}(t)-\mathbf{r}_{ij}(0)\|^2\rangle$가 평형값 $\langle r^2(s)\rangle$에 saturate하는 시간을 $\tau$로 **operationally** 정의했고, 이 $\tau$도 scaling상 $\tau_r$과 같은 지수를 따른다:

$$
\tau \sim \tau_r \sim s^{2\nu+\theta} \sim \langle r\rangle^{(2\nu+\theta)/\nu}
\tag{1}
$$

> [!question] 이 scaling theory가 본문의 실제 방법론(HIPPS-DIMES)에도 쓰이는가?
> **아니다.** 식 (1)·(1b)는 Introduction에서 conundrum을 진술하기 위한 도구일 뿐이고, "Outline of the theory"·"Dynamics from K" 섹션의 실제 절차는 이 scaling ansatz를 전혀 가정하지 않는다. 실제 방법론은 측정된 Hi-C/Micro-C로부터 connectivity matrix $\mathbf{K}$를 수치적으로 직접 구성하고, 그 **전체 eigenvalue spectrum** $\{\lambda_p\}$을 그대로 식 (3)의 normal mode sum에 넣는다 — 단일한 전역 $\nu,\theta$를 끼워 넣을 자리가 없다.
>

#### Concundrum - chromatin dynamics 실험 결과는 scaling thory와 맞지 않는다
Brückner et al. (2023)의 *Drosophila* 측정 결과:

| 양                                                            | 측정값                        | Rouse 예측 ($\nu=1/2,\theta=1$)   | FG 예측 ($\nu=1/3,\theta=1$) |
| ------------------------------------------------------------ | -------------------------- | ------------------------------- | -------------------------- |
| Mean distance between two loci $r(s)\sim s^\nu$              | $\nu \approx 1/3$ (FG와 일치) | —                               | —                          |
| Single locus MSD exponent $\alpha$                           | $\approx 0.5$ (Rouse와 일치)  | $\alpha=2\nu/(2\nu+\theta)=1/2$ | $0.4$                      |
| Relaxation time of two-point correlation $\tau\sim s^\gamma$ | $\gamma \approx 0.7$       | $\gamma = 2\nu+\theta = 2$      | $\gamma=5/3$               |

> [!important] Conundrum의 핵심
> 정적 구조는 FG($\nu=1/3$)와 일치하는데, FG가 예측하는 relaxation exponent $\gamma=5/3$는 실측 $0.7$보다 **훨씬 크다(=훨씬 느리다)**. 즉 정적 구조만 보면 "느려야 할" 동역학이 실제로는 "빠르다".

> [!note] Notation 주의 — $\alpha$가 이 논문에서 두 가지로 쓰임
> 이 논문은 $\alpha$를 (i) HIPPS의 contact-distance mapping exponent($\langle r_{ij}\rangle = \Lambda\langle p_{ij}\rangle^{-1/\alpha}$, $\alpha\approx4$, 섹션 2)와 (ii) single-monomer MSD exponent($\alpha = 2\nu/(2\nu+\theta)$, 섹션 1) 양쪽에 모두 쓴다. **두 $\alpha$는 완전히 다른 양**이다. 사용자의 `alpha_from_nu.py`에서 쓰는 $\alpha$는 (ii)와 정확히 같은 정의이므로, 이 논문을 인용할 때는 항상 어느 $\alpha$인지 명시할 것.

### 2. HIPPS-DIMES 방법론

| 단계                | Notation                               | 이름 / 의미                                                                                                   | 정의식                                                                                                                                                            | 비고                                                                                                                                                            |
| ----------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 입력 (정적)           | $\langle p_{ij}\rangle$                | **Contact probability**. Locus $i,j$가 contact할 평균 확률(Hi-C/Micro-C 실험에서 직접 측정되는 raw 입력)                    | — (실험 측정값)                                                                                                                                                     | HIPPS 관계 $\langle r_{ij}\rangle=\Lambda\langle p_{ij}\rangle^{-1/\alpha}$ ($\alpha\approx4$)로 거리로 환산됨. **이 $\alpha$는 MSD exponent와는 다른 양**(앞서 다룬 notation 충돌) |
| 입력 (정적)           | $\langle r_{ij}\rangle$                | **Mean spatial distance**. Locus $i,j$ 사이의 평균 3D 공간 거리                                                    | $\langle r_{ij}\rangle=\Lambda\langle p_{ij}\rangle^{-1/\alpha}$ (식 2)                                                                                         | $P^{\text{MaxEnt}}$를 세우기 위한 제약조건(constraint) 값                                                                                                                |
| 정적 구조             | $P^{\text{MaxEnt}}(\{\mathbf{r}_i\})$  | 모든 loci 좌표 $\{\mathbf{r}_i\}$에 대한 **maximum-entropy joint distribution**                                  | $P^{\text{MaxEnt}}=\dfrac{1}{Z}\exp\!\Big(-\sum_{i<j}k_{ij}\|\mathbf{r}_i-\mathbf{r}_j\|^2\Big)$ (식 3)                                                         | $Z$는 normalization constant. $\langle r_{ij}\rangle$ 제약을 만족하도록 $k_{ij}$가 결정됨                                                                                  |
| 정적 구조             | ==$\mathbf{K}$ (connectivity matrix)== | $P^{\text{MaxEnt}}$의 Lagrange multiplier $k_{ij}$들을 모은 행렬. Harmonic spring network의 spring constant로 재해석됨 | $K_{ij}=k_{ij}\ (i\neq j),\quad K_{ii}=-\sum_{j\neq i}k_{ij}$                                                                                                  | $k_{ij}<0$이면 반발(repulsion) 의미. Iterative scaling algorithm으로 수치적으로 결정. 본 이론의 **핵심 출력물**                                                                       |
| effective energy  | $H \propto ln(P^{\text{MaxEnt}})$      | $P^{\text{MaxEnt}}$를 **Boltzmann distribution**으로 재해석할 때 쓰는 양                                             | $H=\sum_{i<j}k_{ij}\|\mathbf{r}_i-\mathbf{r}_j\|^2$                                                                                                            | $P^{\text{MaxEnt}}\propto e^{-H}$. 이 재해석이 (i) 정적 구조 ↔ (ii) 동역학(스프링 네트워크)을 잇는 다리                                                                               |
| 동역학 (locus pair별) | $G_2^{ij}(t)$                          | Locus $i,j$ pair에 특화된 two-point **autocorrelation function**                                              | $G_2^{ij}(t)=\langle\mathbf{r}_{ij}(t)\cdot\mathbf{r}_{ij}(0)\rangle=3\sum_{p=1}^{N-1}(V_{pi}-V_{pj})^2 e^{-t/\tau_p}\Big(-\dfrac{k_BT}{\lambda_p}\Big)$ (식 3) | $\mathbf{K}$의 eigenvalue/eigenvector로 직접 계산됨. Rouse model의 구조와 동일하나 $V$가 nontrivial(수치적으로 구해야 함)                                                              |
| 동역학 (앙상블 평균)      | $G_2(t)$                               | $G_2^{ij}(t)$를 같은 genomic separation $s$에 대해 평균낸 **앙상블 버전**                                               | $G_2(t)=\langle r^2(s)\rangle-M_2(t)/2$                                                                                                                        | Relaxation time $\tau$의 정의: $G_2(\tau)/G_2(0)=1/e$                                                                                                            |
| 동역학 (관측량)         | $M_2(t)$                               | **Two-point MSD**. Locus 쌍 사이 거리 벡터의 변화량 제곱                                                               | $M_2(t)=\big\langle\|\mathbf{r}_{ij}(t)-\mathbf{r}_{ij}(0)\|^2\big\rangle = 2\langle r_{ij}^2\rangle-2G_2(t)$                                                  | 실험(Brückner et al.)에서 직접 측정 가능한 양. $t\to\infty$에서 $\langle r_{ij}^2\rangle$로 saturate                                                                         |
| 동역학 (스펙트럼)        | $\lambda_p,\ V$                        | $\mathbf{K}$의 **eigenvalue**(모드 $p$의 spring 강도)와 **eigenvector**(모드의 공간적 모양)                              | $\mathbf{K}V=\lambda V$                                                                                                                                        | $\tau_p=-\xi/\lambda_p$ (mode relaxation time, $\xi$=friction). $p$=normal mode index, $p=1,\dots,N-1$                                                        |

**Step 1 — 정적 구조 (HIPPS).** Hi-C contact probability $\langle p_{ij}\rangle$를 mean spatial distance로 변환하는 power law:

$$
\langle r_{ij}\rangle = \Lambda\,\langle p_{ij}\rangle^{-1/\alpha}, \qquad \alpha \approx 4

$$

($\alpha\approx4$는 imaging data와 RMSD를 최소화해 fitting된 값. 표준 polymer 이론과는 다른 경험적 관계.) $\langle r_{ij}\rangle$를 제약 조건으로 maximum entropy distribution을 세운다:

$$
P^{\text{MaxEnt}}(\{\mathbf{r}_i\}) = \frac{1}{Z}\exp\!\left(-\sum_{i<j} k_{ij}\,\|\mathbf{r}_i-\mathbf{r}_j\|^2\right)
\tag{2}
$$

$k_{ij}$(Lagrange multiplier)를 iterative scaling으로 풀면 모든 pairwise distance가 목표값과 일치하는 3D 구조 ensemble이 나온다. (DIMES는 동일한 절차를 Hi-C 대신 imaging distance map에 직접 적용한 버전.)

**Step 2 — 동역학 (Rouse-style normal mode).** $k_{ij}$를 harmonic potential $H=\sum_{i<j}k_{ij}\|\mathbf{r}_i-\mathbf{r}_j\|^2$의 spring constant로 재해석. Connectivity matrix $\mathbf{K}$ ($K_{ij}=k_{ij},\ K_{ii}=-\sum_{j\neq i}k_{ij}$)의 eigendecomposition으로 normal mode를 얻고, 각 mode가 독립적인 Ornstein-Uhlenbeck process를 따른다고 가정한다. Mode $p$의 relaxation time은 $\tau_p = -\xi/\lambda_p$ ($\xi$ = friction coefficient, **유일한 adjustable parameter, 전체 timescale만 결정**).

$$
G_2^{ij}(t) \equiv \langle\mathbf{r}_{ij}(t)\cdot\mathbf{r}_{ij}(0)\rangle = 3\sum_{p=1}^{N-1}(V_{pi}-V_{pj})^2\,e^{-t/\tau_p}\left(-\frac{k_BT}{\lambda_p}\right) \tag{3}
$$

homopolymer에서는 $\theta=1$로 고정된다(diagonal mobility, hydrodynamic/Zimm coupling 없음을 가정) — 따라서 $\tau \sim s^{2\nu+1}$.

#### Deep Dive — Step 2 (동역학)의 상세 유도 (Supplementary Text, Section I)

본문 Step 2의 "Rouse model의 framework를 이용해 interlocus dynamics를 derive한다"는 문장은 실제로는 **두 개의 분리된 move**를 압축한 표현이다. 이 구분을 먼저 하지 않으면 "정적 분포에서 어떻게 동역학이 유도되지?"라는 혼란이 생긴다.

##### (1) 출발점 — 가정 두 개 (derive가 아니라 ansatz)

| | 내용 | 성격 |
|---|---|---|
| 가정 A | $P^{\text{MaxEnt}}(\{\mathbf{r}_i\})$를 (unit temperature) Boltzmann distribution으로 해석 | 추가 물리적 ansatz |
| 가정 B | Overdamped Langevin, 모든 locus가 같은 friction $\xi$, hydrodynamic coupling 없음(diagonal mobility), force는 $H$에서, noise는 fluctuation-dissipation을 만족 | Rouse model과 동일한 framework 차용 |

> [!important] 왜 "유도"가 아니라 "가정"인가
> 같은 equilibrium 분포 $P^{\text{MaxEnt}}$를 stationary distribution으로 갖는 dynamics는 무한히 많다 (overdamped Langevin, Zimm-type hydrodynamic coupling, memory kernel이 있는 GLE, 심지어 일부 non-equilibrium driving까지). Hi-C contact map은 "정적으로 어디 있는가"의 정보만 담고 있고 "어떤 속도/메커니즘으로 거기 도달하는가"에 대해서는 정보가 없다. 따라서 동역학 framework(가정 B)는 데이터에서 derive된 게 아니라 **선택된 것**이며, 그 정당성은 나중에 실험(Brückner et al. 데이터)과 비교해 사후적으로 검증된다 ("Application to experiments" 섹션).

가정 A+B를 받아들이면, 그 다음은 순수 선형대수로 강제된다 — 이게 본문이 "eigendecomposition → normal mode → OU process"라고 쓴 부분.

##### (2) Langevin 방정식과 $H$의 관계 (Eq. S1)

$$
\xi\frac{d\mathbf{R}}{dt} = \mathbf{K}\mathbf{R} + \mathbf{f}, \qquad \mathbf{R}=(\mathbf{r}_1,\dots,\mathbf{r}_n)^T
$$

여기서 $\mathbf{K}$는 connectivity matrix($K_{ij}=k_{ij}$, $K_{ii}=-\sum_{j\neq i}k_{ij}$)다. 정의를 직접 전개하면 항등식이 성립한다:

$$
H = -\mathbf{R}^T\mathbf{K}\mathbf{R}
$$

##### (3) 왜 $\mathbf{K}$의 eigendecomposition이 normal mode를 주는가

$\mathbf{K}$가 dense matrix이므로 $\xi\dot r_i=\sum_j K_{ij}r_j+f_i$는 모든 $r_i$가 서로 얽혀(coupled) 있다. 새로운 좌표 $X_p=\sum_i V_{pi}r_i$가 **자기 자신에게만** 의존하는 dynamics를 가지려면:

$$
\xi\dot X_p = \sum_i V_{pi}\,\xi\dot r_i = \sum_j\Big(\sum_i V_{pi}K_{ij}\Big)r_j \;\overset{!}{=}\; \lambda_p X_p = \lambda_p\sum_j V_{pj}r_j
$$

이 조건은 정확히 $\sum_i V_{pi}K_{ij}=\lambda_p V_{pj}$ (모든 $j$) — 즉 **$V_p$가 $\mathbf{K}$의 eigenvector**라는 뜻이다. "Decoupling되는 방향을 찾는다"는 질문과 "eigenvector를 찾는다"는 질문이 정의상 같은 질문이다.

**최소 예시 (2-bead, spring constant $k$):**

$$
\mathbf{K}=\begin{pmatrix}-k & k\\ k & -k\end{pmatrix}
\;\;\Rightarrow\;\;
\lambda_0=0\ \big(\mathbf{v}_0\propto(1,1)\big), \qquad \lambda_1=-2k\ \big(\mathbf{v}_1\propto(1,-1)\big)
$$

$\mathbf{v}_0$(같이 움직이기)은 spring이 안 늘어나 restoring force가 없는 center-of-mass mode, $\mathbf{v}_1$(반대로 벌어지기)은 가장 강한 restoring force를 받는 mode. $N$개 locus로 확장하면 가능한 "독립적으로 진화하는 모양"이 $N$개로 늘어나고, 그게 mode index $p=0,\dots,N-1$이다.

> [!note] 해석역학의 coupled oscillator와 동일한 골격
> $M\ddot q=-Cq$를 $C$의 eigenvector로 대각화하면 $\ddot Q_p=-\omega_p^2 Q_p$(독립 SHM)가 나오는 것과 수학적으로 같은 구조. 여기서는 가속도 항이 없는 overdamped 1차 방정식 + noise가 더해진 stochastic 버전일 뿐이다 ($\omega_p^2 \leftrightarrow -\lambda_p$, 정상모드 진동 $\leftrightarrow$ OU decay).
>
> Standard Rouse(tridiagonal $\mathbf{K}$)에서는 eigenvector가 정확히 cosine Fourier mode $V_{pi}\propto\cos(p\pi i/N)$로 풀리고, $p$가 클수록 짧은 길이스케일·빠른 relaxation이라는 직관이 그대로 유지된다. 이 논문의 $\mathbf{K}$는 dense/비균질이라 closed form은 없지만 같은 직관(Fig. 4A에서 큰 $p$일수록 $|\lambda_p|$가 커짐)이 성립한다.

##### (4) 모드 분리와 noise 통계의 보존 (Eq. S2–S3)

$$
\mathbf{V}\mathbf{K}\mathbf{V}^T=\mathbf{\Lambda}, \qquad \mathbf{X}\equiv\mathbf{V}\mathbf{R}
\;\;\Rightarrow\;\;
\xi\dot{\mathbf{X}} = \mathbf{\Lambda}\mathbf{X}+\tilde{\mathbf{f}}, \qquad \tilde{\mathbf{f}}=\mathbf{V}\mathbf{f}
$$

$\mathbf{K}$가 대칭행렬이므로 $\mathbf{V}$는 직교행렬($\mathbf{V}^T=\mathbf{V}^{-1}$)이다. 등방·delta-correlated 가우시안 noise는 직교변환(회전/반사)을 거쳐도 통계가 그대로 보존되므로($\langle\tilde f_p\tilde f_{p'}\rangle = \sum_{i,j}V_{pi}V_{p'j}\langle f_if_j\rangle = 2\xi k_BT\,\delta_{pp'}\delta(t-t')$, $\mathbf{V}\mathbf{V}^T=\mathbf{I}$ 사용), $\tilde{\mathbf{f}}$도 서로 독립인 white noise다. $\mathbf{\Lambda}$가 diagonal이므로 $N$개의 **독립인** 1차원 SDE로 완전히 분리된다 — $\lambda_0=0$(zero/center-of-mass mode, restoring force 없음), 나머지 $\lambda_p<0$.

##### (5) Ornstein-Uhlenbeck 해와 분산 (Eq. S4)

$$
X_p(t) = X_p(0)\,e^{-t/\tau_p} + \frac{1}{\xi}\int_0^t e^{-(t-t')/\tau_p}\,\tilde f_p(t')\,dt', \qquad \tau_p\equiv-\frac{\xi}{\lambda_p}
$$

Itô isometry로 분산을 구하면 (fluctuation-dissipation: $\langle\tilde f_p(t')\tilde f_p(t'')\rangle=2\xi k_BT\,\delta(t'-t'')$):

$$
\text{Var}[X_p(t)] = \frac{2\xi k_BT}{\xi^2}\int_0^t e^{-2(t-t')/\tau_p}\,dt'
$$

> [!note] Wolfram Alpha로 적분 검산
> $\displaystyle\int_0^t e^{-2(t-t')/\tau}\,dt' = \frac{\tau}{2}\big(1-e^{-2t/\tau}\big)$ — 확인됨.

대입하면:

$$
\text{Var}[X_p(t)] = -\frac{k_BT}{\lambda_p}\big(1-e^{-2t/\tau_p}\big)
$$

본문 Eq. (S4) $X_{p,\alpha}(t)\sim\mathcal{N}\!\big(X_{p,\alpha}(0)e^{-t/\tau_p},\,-\tfrac{k_BT}{\lambda_p}(1-e^{-2t/\tau_p})\big)$와 정확히 일치 ($\lambda_p<0$이므로 분산이 양수인 것도 확인됨).

##### (6) $G_2^{ij}(t)$ 유도 (Eq. S5–S12) — main text Eq. (3)으로 연결

$\mathbf{R}=\mathbf{V}^T\mathbf{X}$이므로:

$$
r_{ij} = r_i-r_j = \sum_{p=0}^{N-1}(V_{pi}-V_{pj})\,X_p
$$

독립 가우시안의 선형결합이라 $r_{ij}$도 가우시안. 자기상관 $\langle r_{ij}(t)\cdot r_{ij}(0)\rangle$을 구할 때, 서로 다른 mode($p\neq p'$)는 독립이라 cross term이 전부 사라지고 같은 mode 항만 남는다:

$$
\langle X_p(t)X_p(0)\rangle = e^{-t/\tau_p}\langle X_p(0)^2\rangle = e^{-t/\tau_p}\left(-\frac{k_BT}{\lambda_p}\right)
$$

(두번째 등식: $\langle X_p(0)^2\rangle$은 평형 분산이므로 (5)의 분산식에서 $t\to\infty$ 극한과 같음.) 3개 Cartesian 성분을 등방적으로 더하면(factor 3):

$$
G_2^{ij}(t) \equiv \langle\mathbf{r}_{ij}(t)\cdot\mathbf{r}_{ij}(0)\rangle = 3\sum_{p=1}^{N-1}(V_{pi}-V_{pj})^2\,e^{-t/\tau_p}\left(-\frac{k_BT}{\lambda_p}\right)
$$

— main text Eq. (3)과 정확히 일치. ($p=0$ 항은 $V_{0i}=V_{0j}$(zero mode eigenvector는 모든 $i$에 대해 같은 값, 순수 translation)이라 자동으로 0이 되므로 합을 $p=1$부터 써도 동일.)

**전체 유도를 한 줄로 요약**: *독립 OU mode의 선형결합 → 자기상관은 각 mode의 (계수)$^2$ × (그 mode의 평형분산) × $e^{-t/\tau_p}$의 합.* Rouse model과 논리 구조가 글자 그대로 같고, 다른 점은 $\mathbf{K}$가 nearest-neighbor tridiagonal이 아니라 Hi-C 기반 dense matrix라는 것뿐이다.

##### (7) $M_2$와 $M_1$ (Eq. S13–S14) — zero mode의 운명이 갈리는 지점

$$
M_2(t) = 2\langle r_{ij}^2\rangle - 2G_2^{ij}(t), \qquad M_1(t) = 2\langle r_i^2\rangle - 2\langle\mathbf{r}_i(t)\cdot\mathbf{r}_i(0)\rangle
$$

(둘 다 $\langle\|X(t)-X(0)\|^2\rangle = \langle X(t)^2\rangle+\langle X(0)^2\rangle-2\langle X(t)X(0)\rangle$이고 stationary 가정으로 $\langle X(t)^2\rangle=\langle X(0)^2\rangle=\langle X^2\rangle$가 되어 telescoping된 형태.)

$M_2$는 $t\to\infty$에서 $G_2\to0$이라 깨끗하게 $2\langle r_{ij}^2\rangle$로 plateau한다 — 이게 가능한 이유는 (6)에서 본 것처럼 **zero mode가 $r_{ij}$에서 자동으로 사라지기 때문**이다.

> [!important] $M_1$은 이 cancellation이 없다 — 미해결 지점
> $r_i$ 하나만 보면 zero mode 항 $V_{0i}X_0$이 그대로 살아있고, $X_0$은 $\lambda_0=0$이라 순수 free diffusion(Wiener process)을 한다:
> $$\langle X_0(t)X_0(0)\rangle = \langle X_0(0)^2\rangle \to \infty$$
> 즉 Eq. (S14)를 문자 그대로($p=0$ 포함) 읽으면 $\langle r_i^2\rangle$의 "long-time value"는 발산해 정의되지 않는다. 실제로 Fig. 6A에서 $M_1(t)$가 $10^5$ s까지도 plateau 없이 $\sim t^{0.5}$로 계속 가는 것과는 부합하지만, 본문/이 supplementary 두 페이지 안에는 $p=0$ 처리(포함/제외)에 대한 명시가 없다.
>
> **사용자 연구와의 연결**: zero mode를 살려두면 정의상 충분히 긴 시간에선 $M_1(t)$가 internal-mode $t^{0.5}$에서 COM Fickian $t^1$로 crossover해야 한다 — 이는 260626 문헌조사 Goal 2(continuous $\nu\to0$일 때 monomer가 CoM exponent를 따라간다)와 정확히 같은 메커니즘(zeroth Rouse mode의 지배)이다. 이 논문은 그 crossover를 명시적으로 다루지 않는다.

---

**전체 구조 요약**

$$
\underbrace{P^{\text{MaxEnt}}\text{를 Boltzmann 분포로 해석} + \text{Rouse-type Langevin 가정}}_{\text{물리적 ansatz — 증명 불가, 실험으로 사후 검증}}
\;\Longrightarrow\;
\underbrace{\text{eigendecomposition} \to \text{독립 OU mode} \to G_2^{ij}(t),\,M_1(t),\,M_2(t)}_{\text{순수 선형대수 — 자동으로 따라옴}}
$$

### 3. Homopolymer 검증 (Rouse / SAW / FG)

해석적 $\langle r_{ij}\rangle = |i-j|^\nu$ ($\nu=1/2, 3/5, 1/3$)를 그대로 입력해 $\mathbf{K}$를 역산하고 $G_2(t)$를 계산 → relaxation time $\tau(s)$가 정확히 $s^2$ (Rouse), $s^{2.2}$ (SAW), $s^{5/3}$ (FG)로 재현됨 (Fig. 1). Self-avoiding polymer의 Brownian dynamics 시뮬레이션(good/poor solvent)에 대해서도 $M_1(t), M_2(t)$를 정확히 재현 — **이론 자체의 self-consistency를 먼저 검증**한 단계.
##### Fig. S3
![[Pasted image 20260629092808.png]]
(b), (c), (d)는 각각 Rouse chain. FG model, and SAW에 대해 numericaly 계산한 connectivity matrices $\mathbf{K}$
##### Fig. 1
![[Pasted image 20260629092150.png]]
(A) Normalized two-point autocorrelation function, G2(t)/G2(0), N-1000의 Rouse model에서.
(B) 세 종류의 homopolymer의 relaxation time을 이론적으로 계산한 결과. Exponent가 기존에 알려진 값으로 나온다. 

##### Fig. S4

![[Pasted image 20260629092653.png]]
Normalized two-point autocorrelation function, G2(t)/G2(0), N-1000의 FG model과 SAW에서.
### 4. *Drosophila* E–P pair 실험과의 비교

*Drosophila* nc14 embryo의 WT Micro-C contact map(chr 2R)을 HIPPS-DIMES에 입력 → Brückner et al.의 7개 eve E–P pair(58 kb ~ 3.3 Mb 분리) 위치에서 구조·동역학을 모두 예측:

- Contact map, $P(r)$ 분포, $\langle r\rangle$ vs $s$ — 모두 실험과 정량적으로 일치 (JSD 0.05–0.2).
- Friction coefficient를 fitting해 $l_0=147\,\text{nm}$, $\tau_0\approx3.1\,\text{s}$ 결정 ($\eta\approx0.5\,\text{Pa·s}$로 추정). **이 두 파라미터는 절대 timescale만 정하고 scaling exponent $\gamma$에는 영향을 주지 않음.**
- 결과: $\tau \sim s^{0.8\pm0.1}$ (HIPPS-DIMES) vs $\tau\sim s^{0.7\pm0.05}$ (실험) — Rouse($\gamma=2$)·FG($\gamma=5/3$)보다 **압도적으로 잘 맞음**.
##### Fig. 2

![[Pasted image 20260629100723.png]]
![[Pasted image 20260629101202.png]]
(A) Contect probability map의 실험값(좌측 하단)과 이론값(우측 하단)

![[Pasted image 20260629100759.png]]
(B) Distribution of pairwise distances for the seven promoter-enhancer
loci pairs: experimental histograms and HIPPS-DIMES predicted distribution (solid lines). JSD values between model predictions and experimental data are reported.

![[Pasted image 20260629100733.png]]
(C) Comparison of the mean spatial distances ⟨r⟩ as a function of the genomic distance s between the experimental measurements and the HIPPS-DI MES predictions.
![[Pasted image 20260629100809.png]]
(D) Two-point MSD $M_2(t)$를 이론으로 계산한 결과
![[Pasted image 20260629100743.png]]
(E) $\gamma$를 실험과 이론에서 비교한 결과. 실험은 0.7, 이론은 0.8
우리 이론이 scaling theory보다 정확하게 맞춘다고 주장장
![[Pasted image 20260629100817.png]]
(F) Scatter plot for the relaxation
time τ versus genomic separation s for all pairs of loci. Power-law
fit is shown in black line.


**Randomly shuffled control.** 
Pairwise distance를 무작위로 섞으면(첫 off-diagonal만 보존) $\langle r_{ij}\rangle$가 plateau로 가고 $\tau$가 $s$에 무관해짐 — **정적 contact map의 실제 sequence/structure 정보가 빠른 동역학의 원인**임을 직접 증명하는 negative control.
(b)에서 small $s$에서 나오는 exponent $\nu = 0.6 = 3/5$는 SAW에서 나타나는 trivial한 값. 

##### Fig. S7
![[Pasted image 20260629102518.png]]
![[Pasted image 20260629102532.png]]
![[Pasted image 20260629102540.png]]


### 5. Locus별 relaxation time과 eigenvalue spectrum

E–P pair를 넘어 **모든 locus 쌍**에 대해 $\tau_{ij}$를 계산하면 $\tau_{ij} \sim \langle r_{ij}\rangle^{2.7}$ (Rouse 예측 $4$, FG 예측 $5$보다 훨씬 작은 지수) — 평균적 homopolymer 근사(genomic distance만으로 averaging한 effective $r(s)\sim s^{1/4}$)를 적용하면 오히려 $\tau\sim s^{1.1}$, $\tau\sim r^4$로 **다른** 결과가 나옴. 즉 **전체 WT contact map의 heterogeneous 정보를 다 써야만** 빠른 동역학이 재현되고, 평균화된 homopolymer 그림으로는 안 됨.

##### Fig. 3
![[Pasted image 20260629103006.png]]
(A)
![[Pasted image 20260629103024.png]]
(B)


이 빠른 동역학의 메커니즘을 eigenvalue spectrum $|\lambda_p|$로 분석하면 Rouse의 깨끗한 $|\lambda_p|\sim p^2$와 달리 **3개의 서로 다른 scaling regime**이 나타남:

$$
|\lambda_p| \sim
\begin{cases}
p^{1.2} & p \lesssim 10 \\
p^{3} & 10 \lesssim p \lesssim 50 \\
p^{1.5} & p \gtrsim 50
\end{cases}
\tag{4}
$$
$1/\lvert \lambda_p \rvert$는 $N/p$개로 이루어진 segment의 relaxation time과 비례한다.
작은 $p$(큰 length scale)에서 Rouse의 $p^2$보다 **작은** 지수($p^{1.2}$)를 가지는 것이 곧 큰 스케일에서 chromatin이 Rouse보다 빨리 relax한다는 것의 직접적 원인. End-to-end relaxation time $\tau_{ee}$는 chain length $N$에 대해 $\sim N^{1.03}$로 scaling (Rouse는 $N^2$).

##### Fig. 4
![[Pasted image 20260629103048.png]]
(A)
![[Pasted image 20260629103057.png]]
(B)


### 6. First-passage time (contact 형성)

Loci가 처음 접촉(threshold $r_c=147\,\text{nm}$)하는 시간 $\tau_c$를 two-point relaxation time을 이용해 계산하면 $\langle\tau_c\rangle \sim \langle r\rangle^{3.4}$, 실험 trajectory에서 독립적으로 계산한 값과도 잘 맞음. 
흥미로운 점은 이 지수($3.4$)가 **Szabo-Schulten-Schulten (SSS) 이론의 예측치 $3$**에 가깝다는 것 — SSS는 원래 Rouse model을 위해 유도됐고 Rouse에는 잘 안 맞는 이론인데, 오히려 **chromatin에는 더 잘 맞는다**는 역설적 결과.

$$
k = \frac{1}{\tau_d+\tau_c}, \qquad \tau_c \sim \tau_0\,p_c^{-\theta}
\;\;\Rightarrow\;\;
\hat{k} = \frac{k}{k_{\max}} = \frac{1}{1+(\tau_0/\tau_d)\,p_c^{-\theta}}
\tag{5}
$$

식 (5)는 transcription rate $k$를 E–P contact probability $p_c$의 함수로 쓴 **Hill equation의 동적 analog**(cooperativity parameter $\theta$).

##### Fig. 5
![[Pasted image 20260629111332.png]]
(A)
![[Pasted image 20260629111354.png]]
(B)

### 7. Single-locus dynamics와 centrality

단일 locus MSD $M_1(t)\sim t^{0.5}$ (Rouse-like), 그러나 locus별로 $\alpha,D$가 넓게 분포(heterogeneous). **Closeness centrality** $C_i = \sum_{j\neq i}\langle r_{ij}\rangle^{-m}$ ($m=3$)을 정의하면 diffusivity $M_1(t=10^2\,\text{s})$와 **음의 상관** — 주변에 가까운 loci가 많을수록(=local density 높을수록) 더 느리게 움직인다. Total contact connectivity $\sum_j p_{ij}$와도 같은 방향의 anticorrelation.

##### Fig. 6
![[Pasted image 20260629113333.png]]
(A) Single-locus MSD M1(t). Each curve corresponds to an individual locus. 
![[Pasted image 20260629113346.png]]
(B) Histogram of the fitted diffusion exponent α and diffusion coefficients D. 
![[Pasted image 20260629113359.png]]
(C) Locus-specific diffusivity, defined as $M_1(t = 10^2 s)$, versus closeness centrality  $C_i = \sum_{j\neq i}\langle r_{ij}\rangle^{-m}$ ($m=3$)

![[Pasted image 20260629113411.png]]
(D) Scatter plot of locus-specific diffusivity, defined as $M_1(t) at t = 10^2 s$, versus total contact connectivity as a function of the sum of contact probabilities for each locus i $\sum_j p_{ij}$.



### 8. Cohesin depletion (ΔRAD21)의 효과

Human HCT116 imaging data(WT vs ΔRAD21)에 같은 framework 적용:

- **Single-locus diffusivity는 증가** (20–40%) — cohesin loop extrusion이 평소 loci를 제약하고 있었다는 뜻. Centrality 감소가 클수록 diffusivity 증가도 큼(7번 결과와 일관).
- **Two-point relaxation time은 locus-dependent로 갈림**: TAD **내부** loci는 (거리가 멀어지므로) relaxation이 느려지고, TAD **경계** loci는 (insulation이 풀려 가까워지므로) relaxation이 빨라짐.
- First-passage time: WT에서는 TAD 내부 $\langle\tau_c\rangle\sim s^{0.5}$ + 경계에서 sharp jump였다가, ΔRAD21에서는 전체가 $s^{1.2}$로 **TAD 구분 자체가 사라짐**.
- Eigenvalue spectrum의 small-$p$ scaling도 $p^{1.2}\to p^{1.5}$로 바뀌고 $p=1,2$ mode 사이 gap이 사라짐 — TAD가 만들던 "두 개의 분리된 영역"이라는 구조적 신호가 spectrum에서도 지워짐.


### 9. Discussion — 의의·한계·generality

#### 남겨진 이론적 과제 — eigenvalue spectrum ↔ scaling exponent

논문이 명시적으로 인정한 한계: $|\lambda_p|$의 3-regime 구조(5번 섹션)와 relaxation time의 scaling exponent $\gamma$를 잇는 **closed-form analytical 관계**는 아직 없다. 지금은 두 양을 각각 계산해서 "방향이 일관된다"는 정도만 보여줬을 뿐, $\lambda_p$의 모양에서 $\gamma$ 값을 직접 *유도*하지는 못한다. Discussion에서 "an important avenue for future theoretical work"로 명시한 지점.

#### Single-locus heterogeneity와 cohesin depletion — 재확인

Discussion은 본문 7번(centrality)·8번(cohesin depletion) 섹션의 핵심 결론을 한 번 더 thesis로 못박는다:
- Local chromatin density(contact probability)가 높을수록 diffusion이 느림.
- Cohesin 제거 시 single-locus diffusivity는 증가하지만, two-point relaxation time의 변화는 locus-dependent(TAD 내부·경계에서 반대 방향).

(7·8번 섹션과 내용이 중복되므로 세부 수치는 거기 참고.)

#### Generality 주장 — 어디까지 검증했나

| 적용 대상 | 데이터 종류 | 위치 |
|---|---|---|
| *Drosophila* chr 2R | Micro-C | 본문 main result |
| Human HCT116 (WT/ΔRAD21) | imaging distance map | 본문 (cohesin) |
| Human GM12878 | Hi-C | fig. S14 |
| Mouse ESC, Fbn2 locus | Micro-C | fig. S15 |

이론은 "species/cell line에 agnostic"하다고 주장하지만, 현재 구현은 **chromosome 하나를 독립된 contiguous polymer로** 다룬다. Whole-genome 수준 모델링(inter-chromosomal contact 포함)은 아직 미지원 — 향후 (a) chromosome별 독립 분석을 병렬화하거나 (b) inter-chromosomal contact를 포함하는 확장이 필요하다고 명시.

> [!warning] 한계 — noise propagation
> HIPPS-DIMES는 입력 데이터(Hi-C/Micro-C/imaging)의 noise를 그대로 예측에 전파시킨다. Source: Hi-C/Micro-C의 mappability·fragment-level bias, fixation artifact(formamide-based FISH 등), imaging의 localization uncertainty.
> 다만 moderate Hi-C/Micro-C noise와 ≤50 nm localization error에는 dynamical prediction이 robust함을 fig. S16–S17에서 확인했다. Future work로 (a) localization uncertainty를 명시적으로 모델링하거나 (b) RASER-FISH 같은 non-denaturing 기법으로 얻은 데이터에 적용하는 것을 제안한다.

#### Live-cell validation 전망

마지막 단락: HIPPS-DIMES는 시간 분해된(time-resolved) trajectory를 예측하므로, CRISPR-dCas9 tagging·operator-repeat array·MS2/MCP reporter 같은 live-cell tracking 방법으로 MSD·relaxation time·first-passage statistics를 직접 검증할 수 있다는 전망으로 마무리한다.

## Questions & Insights

- **Q: $|\lambda_p|\sim p^x$에서 왜 $x$가 작을수록 더 빠른 relaxation을 의미하는가?** 직관과 반대로 $|\lambda_p|$가 작으면 $\tau_p=-\xi/\lambda_p$는 커지므로 "더 느려야 하는 게 아닌가" 하는 의문이 생길 수 있다. 핵심은 $p$ 자체가 절대적인 단위가 아니라는 점 — $1/|\lambda_p|$는 길이 $s=N/p$인 chain segment의 relaxation time으로 해석된다. 이를 $s$로 환산하면 $|\lambda_p|\sim p^x=(N/s)^x \Rightarrow \tau(s)\sim s^x$가 되고, 이 $x$는 앞서 다룬 $\gamma$와 같은 역할을 한다. 같은 length scale $s(>1)$에서 비교하면 $x$가 작을수록 $\tau(s)$도 작다(=빠르다). 반면 $p$만 고정하고 $p^x$를 직접 비교하면($N$을 무시) 결론이 뒤집힐 수 있다 — 예를 들어 $p=10,\,N=1000$일 때 $N$을 제대로 포함하면 $|\lambda_p|_{\text{chromatin}}\sim p^{1.2}N^{-1.2}\approx0.0040$이 $|\lambda_p|_{\text{Rouse}}\sim p^2N^{-2}\approx0.0001$보다 오히려 크다(=더 빠르다). 즉 $N$을 함께 고정해야 비교가 성립한다(Fig. 4B의 $\tau_{ee}\sim N^{1.03}$ vs Rouse $N^2$가 바로 이 $s$/$N$-domain 비교의 직접적 증거).

- Q: $\mathbf{K}$의 eigenvector가 Rouse model의 경우에는 푸리에 변환에 쓰이는 factor가 되는 건가?
  A: 맞다 — 정확히는 복소지수함수를 쓰는 "진짜" DFT가 아니라 **Discrete Cosine Transform (DCT)** 의 basis다.

  - **이유**: Rouse matrix는 1차원 격자 위의 discrete Laplacian이고, $\xi\partial_t r = k\partial_n^2 r+f$, $\left.\partial_n r\right|_{n=0,N}=0$ (자유 끝 = Neumann boundary condition)인 diffusion equation의 discrete 버전이다. Laplacian의 eigenfunction은 항상 sinusoidal이지만, 정확히 어떤 sinusoidal basis가 나오는지는 경계조건이 결정한다:

| 경계조건 | Eigenfunction | 변환 |
|---|---|---|
| Periodic (ring polymer) | $e^{2\pi ipn/N}$ | 진짜 DFT |
| Dirichlet (양 끝 고정) | $\sin(p\pi n/N)$ | DST |
| **Neumann (free end, Rouse)** | $\cos(p\pi n/N)$ | **DCT** |

  - **닫힌 형태**:
    $$
    V_{pi}\propto\cos\!\left(\frac{p\pi}{N}\Big(i-\tfrac12\Big)\right), \qquad \lambda_p=-2k\left(1-\cos\frac{p\pi}{N}\right), \qquad p=0,\dots,N-1
    $$
    이게 Doi-Edwards의 Rouse mode 정의 $X_p(t)=\frac1N\int_0^N\cos(p\pi n/N)\,r(n,t)\,dn$의 discrete 버전이다.

  - **검산 (Wolfram Alpha)**: $N=2$ 토이 모델($\lambda_0=0,(1,1)$; $\lambda_1=-2k,(1,-1)$)과 정확히 일치. $N=3,\,k=1$에서도 직접 대각화해 $\lambda=0,-1,-3$ — 공식 $\lambda_p=-2(1-\cos(p\pi/3))$와 정확히 일치, eigenvector도 $(1,1,1)$, $(1,0,-1)$, $(1,-2,1)$로 공식과 일치 확인.

  - **HIPPS-DIMES의 $\mathbf{K}$에는 왜 안 통하는가**: Rouse $\mathbf{K}$는 모든 spring이 같은 $k$, nearest-neighbor만 연결되어 **translational invariance**가 있어 깨끗한 cosine 해가 나온다. HIPPS-DIMES의 $\mathbf{K}$는 Hi-C에서 나온 dense, 완전히 비균질한 matrix(translational invariance 없음)라 closed-form eigenvector가 존재할 이유가 없다 — 그래서 본문이 numerical eigendecomposition이 필요하다고 명시한 것. 다만 "$p$가 클수록 짧은 길이스케일·빠른 relaxation"이라는 cosine의 직관은 정성적으로 살아남는다(Fig. 4A).
## Related Concepts

- [[MSD exponent from scale-dependent Flory exponent]] — 이 논문 식 (1)의 $\alpha=2\nu/(2\nu+\theta)$가 사용자가 정리한 $\alpha=2\nu/(1+2\nu)$ 관계의 $\theta=1$ 특수 경우. 단, 이 논문은 **constant $\nu$**만 다루고 user의 continuous $\nu_{\text{loc}}(n)$ 일반화는 다루지 않음.
- [[Journal reading - Complexity of chromatin folding is captured by the strings and binders switch model]]
- [[Journal reading - The fractal globule as a model of chromatin architecture in the cell]]
- [[Journal reading - Polymer physics of chromosome large-scale 3D organisation]]

## 더 읽어보고 싶은 레퍼런스

- D. B. Brückner, H. Chen, L. Barinov, B. Zoller, T. Gregor, "Stochastic motion and transcriptional dynamics of pairs of distal DNA loci on a compacted chromosome," *Science* **380**, 1357–1362 (2023). — 이 논문이 풀려고 하는 conundrum의 원본 실험 데이터.
- G. Shi, D. Thirumalai, "From Hi-C contact map to three-dimensional organization of interphase human chromosomes," *Phys. Rev. X* **11**, 011051 (2021). [DOI](https://doi.org/10.1103/PhysRevX.11.011051) — HIPPS 방법론 원논문.
- G. Shi, D. Thirumalai, "A maximum-entropy model to predict 3D structural ensembles of chromatin from pairwise distances...," *Nat. Commun.* **14**, 1150 (2023). [DOI](https://doi.org/10.1038/s41467-023-36412-4) — DIMES 방법론 원논문.
- J. Zuin et al., "Nonlinear control of transcription through enhancer–promoter interactions," *Nature* **604**, 571–577 (2022). — 식 (5) Hill-equation analog가 모델링하는 실험적 배경.

