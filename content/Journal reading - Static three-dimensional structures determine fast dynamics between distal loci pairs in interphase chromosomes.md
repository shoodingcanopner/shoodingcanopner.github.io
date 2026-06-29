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
## 읽은 이유
[[260619 Lab Rotation Presentation (EN)]]의 후속연구를 위해

## Overview

Live-cell imaging은 enhancer–promoter(E–P) 같은 chromatin loci 쌍 사이의 dynamics가 예상보다 훨씬 빠르다는 것을 보여줬다. 그런데 같은 세포의 정적(static) Hi-C/Micro-C contact map은 분명히 compact한 구조(fractal globule에 가까운 $\nu \approx 1/3$)를 보인다. **Compact한 구조라면 relaxation도 느려야 하는데, 실제로는 빠르다** — 이것이 Brückner et al. (Science, 2023)이 제기한 **conundrum**이다.

이 논문은 이 conundrum을 "구조와 동역학이 무관하다"가 아니라, **정적 contact map 단 하나만 입력으로 받으면 동역학 전체(relaxation time, MSD, first-passage time)를 정량적으로 예측할 수 있다**는 식으로 해결한다. 방법론은 **HIPPS-DIMES**: maximum entropy principle로 Hi-C contact map에서 3D 구조 ensemble을 만들고, 그 과정에서 나오는 connectivity matrix $\mathbf{K}$를 harmonic spring network의 spring constant로 재해석해 generalized Rouse model처럼 동역학을 푼다. Locus 고유의 fitting parameter는 전혀 없고, **전체 timescale을 정하는 friction coefficient 하나**만 조정한다.

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
#### **(scaling relation - B) Connectivity
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

**Step 1 — 정적 구조 (HIPPS).** Hi-C contact probability $\langle p_{ij}\rangle$를 mean spatial distance로 변환하는 power law:

$$
\langle r_{ij}\rangle = \Lambda\,\langle p_{ij}\rangle^{-1/\alpha}, \qquad \alpha \approx 4
\tag{2}
$$

($\alpha\approx4$는 imaging data와 RMSD를 최소화해 fitting된 값. 표준 polymer 이론과는 다른 경험적 관계.) $\langle r_{ij}\rangle$를 제약 조건으로 maximum entropy distribution을 세운다:

$$
P^{\text{MaxEnt}}(\{\mathbf{r}_i\}) = \frac{1}{Z}\exp\!\left(-\sum_{i<j} k_{ij}\,\|\mathbf{r}_i-\mathbf{r}_j\|^2\right)
\tag{3}
$$

$k_{ij}$(Lagrange multiplier)를 iterative scaling으로 풀면 모든 pairwise distance가 목표값과 일치하는 3D 구조 ensemble이 나온다. (DIMES는 동일한 절차를 Hi-C 대신 imaging distance map에 직접 적용한 버전.)

**Step 2 — 동역학 (Rouse-style normal mode).** $k_{ij}$를 harmonic potential $H=\sum_{i<j}k_{ij}\|\mathbf{r}_i-\mathbf{r}_j\|^2$의 spring constant로 재해석. Connectivity matrix $\mathbf{K}$ ($K_{ij}=k_{ij},\ K_{ii}=-\sum_{j\neq i}k_{ij}$)의 eigendecomposition으로 normal mode를 얻고, 각 mode가 독립적인 Ornstein-Uhlenbeck process를 따른다고 가정한다. Mode $p$의 relaxation time은 $\tau_p = -\xi/\lambda_p$ ($\xi$ = friction coefficient, **유일한 adjustable parameter, 전체 timescale만 결정**).

> [!warning] $\mathbf{K}$를 실제 힘으로 읽으면 안 됨
> 논문이 명시적으로 경고: $k_{ij}$는 Hi-C/imaging 제약을 만족시키기 위한 **effective coupling**일 뿐, large length scale에서 작용하는 literal한 분자 힘이 아니다.

순도 모형(homopolymer)에서는 $\theta=1$로 고정된다(diagonal mobility, hydrodynamic/Zimm coupling 없음을 가정) — 따라서 $\tau \sim s^{2\nu+1}$.

### 3. Homopolymer 검증 (Rouse / SAW / FG)

해석적 $\langle r_{ij}\rangle = |i-j|^\nu$ ($\nu=1/2, 3/5, 1/3$)를 그대로 입력해 $\mathbf{K}$를 역산하고 $G_2(t)$를 계산 → relaxation time $\tau(s)$가 정확히 $s^2$ (Rouse), $s^{2.2}$ (SAW), $s^{5/3}$ (FG)로 재현됨 (Fig. 1). Self-avoiding polymer의 Brownian dynamics 시뮬레이션(good/poor solvent)에 대해서도 $M_1(t), M_2(t)$를 정확히 재현 — **이론 자체의 self-consistency를 먼저 검증**한 단계.

### 4. *Drosophila* E–P pair 실험과의 비교

*Drosophila* nc14 embryo의 WT Micro-C contact map(chr 2R)을 HIPPS-DIMES에 입력 → Brückner et al.의 7개 eve E–P pair(58 kb ~ 3.3 Mb 분리) 위치에서 구조·동역학을 모두 예측:

- Contact map, $P(r)$ 분포, $\langle r\rangle$ vs $s$ — 모두 실험과 정량적으로 일치 (JSD 0.05–0.2).
- Friction coefficient를 fitting해 $l_0=147\,\text{nm}$, $\tau_0\approx3.1\,\text{s}$ 결정 ($\eta\approx0.5\,\text{Pa·s}$로 추정). **이 두 파라미터는 절대 timescale만 정하고 scaling exponent $\gamma$에는 영향을 주지 않음.**
- 결과: $\tau \sim s^{0.8\pm0.1}$ (HIPPS-DIMES) vs $\tau\sim s^{0.7\pm0.05}$ (실험) — Rouse($\gamma=2$)·FG($\gamma=5/3$)보다 **압도적으로 잘 맞음**.

**Randomly shuffled control.** Pairwise distance를 무작위로 섞으면(첫 off-diagonal만 보존) $\langle r_{ij}\rangle$가 plateau로 가고 $\tau$가 $s$에 무관해짐 — **정적 contact map의 실제 sequence/structure 정보가 빠른 동역학의 원인**임을 직접 증명하는 negative control.

### 5. Locus별 relaxation time과 eigenvalue spectrum

E–P pair를 넘어 **모든 locus 쌍**에 대해 $\tau_{ij}$를 계산하면 $\tau_{ij} \sim \langle r_{ij}\rangle^{2.7}$ (Rouse 예측 $4$, FG 예측 $5$보다 훨씬 작은 지수) — 평균적 homopolymer 근사(genomic distance만으로 averaging한 effective $r(s)\sim s^{1/4}$)를 적용하면 오히려 $\tau\sim s^{1.1}$, $\tau\sim r^4$로 **다른** 결과가 나옴. 즉 **전체 WT contact map의 heterogeneous 정보를 다 써야만** 빠른 동역학이 재현되고, 평균화된 homopolymer 그림으로는 안 됨.

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

작은 $p$(큰 length scale)에서 Rouse의 $p^2$보다 **작은** 지수($p^{1.2}$)를 가지는 것이 곧 큰 스케일에서 chromatin이 Rouse보다 빨리 relax한다는 것의 직접적 원인. End-to-end relaxation time $\tau_{ee}$는 chain length $N$에 대해 $\sim N^{1.03}$로 scaling (Rouse는 $N^2$).

### 6. First-passage time (contact 형성)

Loci가 처음 접촉(threshold $r_c=147\,\text{nm}$)하는 시간 $\tau_c$를 계산하면 $\langle\tau_c\rangle \sim \langle r\rangle^{3.4}$, 실험 trajectory에서 독립적으로 계산한 값과도 잘 맞음. 흥미로운 점은 이 지수($3.4$)가 **Szabo-Schulten-Schulten (SSS) 이론의 예측치 $3$**에 가깝다는 것 — SSS는 원래 Rouse model을 위해 유도됐고 Rouse에는 잘 안 맞는 이론인데, 오히려 **chromatin에는 더 잘 맞는다**는 역설적 결과.

$$
k = \frac{1}{\tau_d+\tau_c}, \qquad \tau_c \sim \tau_0\,p_c^{-\theta}
\;\;\Rightarrow\;\;
\hat{k} = \frac{k}{k_{\max}} = \frac{1}{1+(\tau_0/\tau_d)\,p_c^{-\theta}}
\tag{5}
$$

식 (5)는 transcription rate $k$를 E–P contact probability $p_c$의 함수로 쓴 **Hill equation의 동적 analog**(cooperativity parameter $\theta$).

### 7. Single-locus dynamics와 centrality

단일 locus MSD $M_1(t)\sim t^{0.5}$ (Rouse-like), 그러나 locus별로 $\alpha,D$가 넓게 분포(heterogeneous). **Closeness centrality** $C_i = \sum_{j\neq i}\langle r_{ij}\rangle^{-m}$ ($m=3$)을 정의하면 diffusivity $M_1(t=10^2\,\text{s})$와 **음의 상관** — 주변에 가까운 loci가 많을수록(=local density 높을수록) 더 느리게 움직인다. Total contact connectivity $\sum_j p_{ij}$와도 같은 방향의 anticorrelation.

### 8. Cohesin depletion (ΔRAD21)의 효과

Human HCT116 imaging data(WT vs ΔRAD21)에 같은 framework 적용:

- **Single-locus diffusivity는 증가** (20–40%) — cohesin loop extrusion이 평소 loci를 제약하고 있었다는 뜻. Centrality 감소가 클수록 diffusivity 증가도 큼(7번 결과와 일관).
- **Two-point relaxation time은 locus-dependent로 갈림**: TAD **내부** loci는 (거리가 멀어지므로) relaxation이 느려지고, TAD **경계** loci는 (insulation이 풀려 가까워지므로) relaxation이 빨라짐.
- First-passage time: WT에서는 TAD 내부 $\langle\tau_c\rangle\sim s^{0.5}$ + 경계에서 sharp jump였다가, ΔRAD21에서는 전체가 $s^{1.2}$로 **TAD 구분 자체가 사라짐**.
- Eigenvalue spectrum의 small-$p$ scaling도 $p^{1.2}\to p^{1.5}$로 바뀌고 $p=1,2$ mode 사이 gap이 사라짐 — TAD가 만들던 "두 개의 분리된 영역"이라는 구조적 신호가 spectrum에서도 지워짐.

## Questions & Insights

- _(아직 없음 — 논문을 더 깊이 파고들면서 채워갈 섹션)_

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
