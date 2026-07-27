---
title: Journal reading - Effective Hamiltonian of topologically stabilized polymer states
authors: K. Polovnikov, S. Nechaev, M. V. Tamm
DOI: "[DOI](https://doi.org/10.1039/c8sm00785c)"
date read: 2026-07-27
date published: 2018-07-27
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Effective Hamiltonian of topologically stabilized polymer states
![[Pasted image 20260727110337.png]]
## 왜 읽었나
우리 연구실에 방문하신 세르게이 교수님의 [[2026-07-17]] 특강에서 잠깐 다룬 내용이다. 
그리고 loop extrusion관련해서 하고 있는 작업과 방법론이 비슷하다. 

## Overview

Nonconcatenated ring polymer melt이나 crumpled globule 같은 topologically stabilized polymer state를 설명할 microscopic Hamiltonian은 그동안 알려지지 않았다. 이 논문은 quadratic (Gaussian network) Hamiltonian

$$
S = \frac{3}{2b^2}\sum_{n=0}^{N-1}(\mathbf{x}_{n+1}-\mathbf{x}_n)^2 + \sum_{n=0}^{N}\sum_{n'=n+2}^{N} V(\mathbf{x}_n,\mathbf{x}_{n'})
$$

에서 pairwise coupling $V(\mathbf{x}_n,\mathbf{x}_{n'}) = a_{nn'}(\mathbf{x}_n-\mathbf{x}_{n'})^2$ 의 계수가 chemical distance $s=|n-n'|$에 대해 power-law로 decay ($a_s \sim c s^{-\gamma}$, $\gamma \in (2,3)$) 할 때, 그 결과로 얻어지는 평형 monomer-to-monomer distance 분포가 fractional Brownian motion (fBm)과 정확히 동일한 통계를 갖는다는 것을 증명한다. fractal dimension $d_f = 2/(\gamma-2) \in (2,3)$ 을 임의로 조절 가능한 Gaussian polymer Hamiltonian을 최초로 구성한 논문.

## Link to PDF and DOI

- DOI: [10.1039/c8sm00785c](https://doi.org/10.1039/c8sm00785c)
- 로컬 PDF: [[Books/Effective Hamiltonian of topologically stabilized polymer state.pdf]]

## 주요 내용 요약
### SectionⅠ - 서론

- **문제의식**: ideal chain ($d_f=2$), swollen chain ($d_f\approx 1.7$–$4/3$), collapsed globule은 잘 알려진 archetype이지만, nonconcatenated ring polymer melt·mitotic chromosome처럼 topologically stabilized된 $2 < d_f < 3$ 상태를 만드는 microscopic Hamiltonian은 미지수였음. topology는 non-local하고 dense system에서 screening되지 않기 때문.

### Section Ⅱ- mapping of polymer conformations onto fBM trajectories

- **Action (eq. 1)**: beads-on-string 모델. $k$번째, $m$번째 bead를 $\mathbf{x}_k$, $\mathbf{x}_m$에 고정했을 때의 partition function $P(\mathbf{x}_k,\mathbf{x}_m)$은 Euclidean Feynman path integral로 쓰인다.

$$
P(\mathbf{x}_k, \mathbf{x}_m) = \int \mathcal{D}\{\mathbf{X}\}\, e^{-S\{\mathbf{X}\}} \tag{1-1}
$$

$$
S = \frac{3}{2b^2}\sum_{n=0}^{N-1}(\mathbf{x}_{n+1}-\mathbf{x}_n)^2 + \sum_{n=0}^{N}\sum_{n'=n+2}^{N} V(\mathbf{x}_n,\mathbf{x}_{n'}) \tag{1-2}
$$

  첫 번째 항은 표준 nearest-neighbor Gaussian chain(=Wiener measure) 항이고, 두 번째 항 $V(\mathbf{x}_n,\mathbf{x}_{n'})$이 이 논문에서 새로 도입하는 non-local pairwise interaction이다.

- **Volume interaction이 없는 경우 (ideal chain, eq. 2)**: $V=0$이면 $P$는 diffusion equation을 따르고, $\mathbf{x}=\mathbf{x}_k-\mathbf{x}_m$, $s=|k-m|$을 각각 좌표·시간으로 놓으면 표준 Brownian motion과 동일한 분포를 얻는다.

$$
P(\mathbf{x}_k, \mathbf{x}_m, s) = \left(\frac{3}{2\pi s b^2}\right)^{3/2} \exp\!\left(-\frac{3(\mathbf{x}_k-\mathbf{x}_m)^2}{2sb^2}\right) \tag{2}
$$

  즉 ideal polymer chain의 conformation은 $d_f=2$인 fractal(Brownian trajectory)과 같다.

- **일반화된 fractal dimension을 갖는 목표 분포 (eq. 3)**: 이 논문이 묻는 질문은 "$V(\mathbf{x}_n,\mathbf{x}_{n'})$을 어떻게 고르면 monomer-to-monomer distance 분포가 임의의 $d_f$를 갖는 Gaussian이 되는가"이다. 목표로 하는 분포는:

$$
P(\mathbf{x}_k, \mathbf{x}_m, s) = \left(\frac{3}{2\pi b^2 s^{2/d_f}}\right)^{3/2} \exp\!\left(-\frac{3(\mathbf{x}_k-\mathbf{x}_m)^2}{2b^2 s^{2/d_f}}\right) \tag{3}
$$
위 식에서 $s$의 지수가 바로 [[MSD exponent from scale-dependent Flory exponent|내가 알던]] Flory exponent $2\nu = 2/d_f$이다. 

  $d_f=2$이면 eq. 2로 환원된다. 이 분포는 Hurst exponent $H=1/d_f = \nu$인 [[Fractional Brownian Motion|fractional Brownian motion (fBm)]] $B_H$의 분포와 정확히 같은 형태다 — fBm은 ordinary Brownian motion의 증분(increment)을 non-local algebraic memory kernel로 가중하여 적분한 process이며, $H>1/2$에서 증분끼리 양의 상관, $H<1/2$에서 음의 상관을 가지며 그 상관이 power-law로 decay하는 strongly non-Markovian process다. 그럼에도 fBm은 Brownian motion의 linear function이라 (3)의 의미에서 Gaussian이다.

- **fBm을 생성하는 fractional Langevin equation, fLe (eq. 4)**: 여러 Langevin formalism 중, fluctuation-dissipation theorem을 만족하는 것을 [[Generalized Langevin Equation and Memory Kernel|요구하면]] overdamped limit에서 아래 fLe가 fBm 통계를 만드는 선호되는 형태가 된다.

$$
\xi_H \int_0^{t} d\tau\, K(t-\tau)\frac{d\mathbf{r}(\tau)}{d\tau} = \mathbf{F}_H(t), \qquad \langle \mathbf{F}_H(t_1)\mathbf{F}_H(t_2)\rangle = \xi_H K(t_1-t_2) \tag{4-1}
$$

$$
K(t_1-t_2) = \frac{2(1-H)(1-2H)}{|t_1-t_2|^{2H}} \tag{4-2}
$$

  friction kernel $K$가 $|t_1-t_2|^{-2H}$로 algebraic하게 decay한다는 점이 핵심이며, 이는 뒤 Section Ⅳ에서 논문이 제시하는 memory-dependent action (eq. 8)의 kernel $\varphi(s)\sim s^{-2H}$과 fluctuation-dissipation argument로 직접 연결된다.


- **구체적인 pairwise potential 제안 (eq. 5)**: eq. 3의 목표 분포를 만들기 위해, 이 논문은 quadratic (harmonic) pairwise potential을 제안한다.

$$
V(\mathbf{x}_k, \mathbf{x}_m) = a_{km}(\mathbf{x}_k - \mathbf{x}_m)^2 \tag{5}
$$

  이때 계수 $a_{km}$은 두 monomer의 절대 위치 $k,m$이 아니라 오직 chemical distance $s=|k-m|$에만 의존해야 한다 (translational invariance 조건). 
![[Pasted image 20260727085707.png]]

- **Coupling coefficient의 asymptotic decay 조건 (eq. 6)**: $a_s$가 $s\to\infty$에서 power-law로 decay해야 한다.
$$
a_s \sim c\, s^{-\gamma}, \qquad \gamma \in (2,3), \quad c>0 \tag{6}
$$

- **Fractal dimension과 decay exponent의 관계 (eq. 7)**: 위 조건 하에서 얻어지는 conformational statistics의 fractal dimension이 $\gamma$에 의해 결정된다.

$$
d_f = \frac{2}{\gamma-2} \tag{7}
$$

  $\gamma>3$이면 $a_s$가 $s^{-3}$보다 빨리 죽어서 large scale에서 여전히 ideal chain 통계($d_f=2$)를 유지하고, non-nearest-neighbor 항은 그저 persistence length만 renormalize한다. $\gamma=3$은 log correction이 붙는 critical point. Quadratic interaction (5)는 물리적으로 "monomer 쌍마다 rigidity가 다른 harmonic spring들의 집합"(Fig. 1)으로 해석할 수 있으며, protein 구조를 설명하는 Gaussian network model이나 "beta-model"(Amitai & Holcman) 등 여러 맥락에서 이전에도 등장한 potential 형태다.

- **Continuum 극한에서의 대안적 action, memory kernel 표현 (eq. 8)**: $N\to\infty$인 long fBm conformation의 경우, harmonic potential (5) 대신 action (1)의 "kinetic" 항 자체를 memory-dependent kernel로 수정한 형태로 다시 쓸 수 있다.

$$
\tilde{P}(\mathbf{x}, \mathbf{y}) = \int \mathcal{D}\{\mathbf{X}\}\, e^{-\tilde{S}}, \qquad \tilde{S} = \int_0^{\infty}\!\! d\xi \int_0^{\infty}\!\! d\xi'\; \frac{\partial \mathbf{X}(\xi)}{\partial \xi}\frac{\partial \mathbf{X}(\xi')}{\partial \xi'}\,\varphi(|\xi-\xi'|) \tag{8}
$$

  여기서 $\varphi(|\xi-\xi'|)$가 power-law로 decay하는 memory kernel이다. $\varphi(\xi)=\delta_\xi$면 $H=1/2$인 단순 Brownian motion(=표준 kinetic action)으로 환원된다. 
  
- **이 Section의 논리적 역할**: eq. 1–4는 아직 $V(\mathbf{x}_n,\mathbf{x}_{n'})$의 구체적 형태를 제시하지 않는다. 단지 "목표 분포(eq. 3)가 fBm과 동일하다"는 수학적 대응관계만 확립하고, 이어지는 Section Ⅲ에서 이 목표를 만족시키는 구체적 quadratic potential $V(\mathbf{x}_k,\mathbf{x}_m)=a_{km}(\mathbf{x}_k-\mathbf{x}_m)^2$ (eq. 5)을 제시한다.


### Section Ⅲ - microscopic Hamiltonian which is identical to the fBM

- **Ring chain 설정 (eq. 9)**: 이제 Section Ⅱ에서 제안한 potential (5)가 실제로 eq. 3의 fBm 분포를 만드는지 증명하기 위해, 구체적인 계산이 쉬운 ring chain($N\gg1$ 개 monomer, $\mathbf{x}_N \equiv \mathbf{x}_0$, phantom chain 가정)을 도입한다. $N$을 홀수 $N=2n+1$로 둔다.

$$
V(\{\mathbf{X}\}) = \psi(\mathbf{x}_0,\mathbf{x}_1,\dots,\mathbf{x}_{N-1}) = \sum_{m<k} a_s (\mathbf{x}_k-\mathbf{x}_m)^2 \tag{9}
$$

  ring이므로 $|k-m|\ll N$인 경우 $\mathbf{x}_k-\mathbf{x}_m$의 분포가 boundary condition에 의존하지 않아 일반성을 잃지 않는다.

- **Chemical distance의 circular 정의 (eq. 10)**: ring에서는 $k,m$ 사이의 거리를 두 방향(시계/반시계) 중 더 짧은 쪽으로 잰다.

$$
s(k,m) = \min(|k-m|,\; N-|k-m|) \tag{10}
$$

- **$s(k,m)$의 대칭성 (eq. 11)**: 이 거리 함수는 symmetric이면서 circularly periodic하다.

$$
s(k,m) = s(m,k); \qquad s(k+i \bmod N,\; m+i \bmod N) = s(k,m) \tag{11}
$$

  즉 $n = (N-1)/2$개의 독립적인 $a(s)$ 값($s=1,\dots,n$)만 있으면 전체 interaction을 결정할 수 있다. 표준 ideal polymer ring은 nearest-neighbor interaction만 있는 경우로, $a(1)=3/2b^2$, $s>1$에서 $a(s)=0$에 해당한다.

- **대각합 계수 $a(0)$의 정의 (eq. 12)**: 이후 potential을 quadratic form으로 정리하기 위해 아래 보조 정의를 도입한다.

$$
a(0) \equiv 2\sum_{s>0} a(s) \tag{12}
$$
이로 인해 matrix $\mathbb{A}$는 모든 행과 열의 내부 요소의 합이 0이 된다. 이런 걸 Laplacian matrix라고 한다. 


- **Potential을 quadratic form $\langle X|\mathbb{A}|X\rangle$로 재정리 (eq. 13)**: eq. 12의 $a(0)$을 이용하면 potential (9)를 표준적인 이차형식으로 다시 쓸 수 있다.

$$
V(\{\mathbf{X}\}) = \psi(\mathbf{x}_0,\dots,\mathbf{x}_{N-1}) = a(0)\sum_{m=0}^{N-1}\mathbf{x}_m^2 - 2\sum_{m<k} a(s(k,m))\,\mathbf{x}_m\mathbf{x}_k = \langle X|\mathbb{A}|X\rangle \tag{13}
$$

  여기서 matrix $\mathbb{A}$의 원소는 오직 $s(k,m)$(chemical distance)에만 의존한다. 이 구조가 $\mathbb{A}$를 **symmetric circulant matrix**로 만드는 핵심이며, 이 성질 덕분에 뒤 eq. 15에서 eigenvector가 (data-dependent가 아니라) 항상 discrete Fourier mode로 고정된다 — 
  이는 사용자의 K-matrix Diagonalization 노트에서 확인한 "circulant matrix는 내용과 무관하게 eigenvector가 Fourier mode로 고정된다"는 성질과 정확히 같은 메커니즘이다.

- **Circulant matrix $\mathbb{A}$의 구체적 예시 (eq. 14, $n=3$, $N=7$)**: matrix element가 $s(k,m)$에만 의존하는 구조를 $7\times7$ 예시로 명시적으로 보여준다.

$$
\mathbb{A} = -\begin{bmatrix}
a_0 & a_1 & a_2 & a_3 & a_3 & a_2 & a_1 \\
a_1 & a_0 & a_1 & a_2 & a_3 & a_3 & a_2 \\
a_2 & a_1 & a_0 & a_1 & a_2 & a_3 & a_3 \\
a_3 & a_2 & a_1 & a_0 & a_1 & a_2 & a_3 \\
a_3 & a_3 & a_2 & a_1 & a_0 & a_1 & a_2 \\
a_2 & a_3 & a_3 & a_2 & a_1 & a_0 & a_1 \\
a_1 & a_2 & a_3 & a_3 & a_2 & a_1 & a_0
\end{bmatrix} 
\tag{14}
$$

  $a_{1,2,3}$은 임의의 양수, $a_0$은 eq. 12로 결정된다. 각 행이 이전 행의 순환 shift인 전형적인 circulant 구조가 눈으로 바로 확인된다 


- **Circulant matrix의 eigenvector (eq. 15)**: 임의의 circulant matrix $\mathbb{A}$는 원소 값과 무관하게 항상 discrete Fourier mode를 eigenvector로 갖는다는 일반적 성질(순환행렬 이론, ref. 31)을 그대로 사용한다. $\mathbb{A}|A_p\rangle = \omega_p|A_p\rangle$에서:

$$
A_p^{(k)} = \frac{1}{\sqrt{N}}\exp\!\left(\frac{2\pi i p k}{N}\right), \qquad k=0,1,\dots,N-1 \tag{15}
$$

  즉 eq. 14의 $\mathbb{A}$가 어떤 구체적인 $a_{1,2,3},\dots$ 값을 갖든, eigenbasis는 항상 이 complex exponential(Fourier mode)로 고정된다 — 사용자의 K-matrix 노트에서 확인한 "circulant면 내용과 무관하게 eigenvector가 Fourier mode"라는 성질이 여기서 명시적으로 쓰인다.

- **Eigenvalue $\omega_p$ (eq. 16)**: 위 eigenvector를 대입하면 eigenvalue가 $a(s)$들의 cosine transform으로 주어진다.

$$
\omega_p = a(0) - \sum_{s=1}^{n} a(s)\left[\exp\!\left(\frac{2\pi i p s}{N}\right) + \exp\!\left(\frac{2\pi i p(N-s)}{N}\right)\right] = 2\sum_{s=1}^{n} a(s)\left(1-\cos\frac{2\pi p s}{N}\right) \tag{16}
$$

  $\omega_0=0$은 degeneracy 2를 가지며(전체 chain의 rigid translation에 해당하는 zero mode), 다른 eigenvalue는 $\omega_p=\omega_{N-p}$의 대칭성을 만족한다. 
  수렴을 위해서는 $a(s)$가 $1/s$보다 빨리 decay해야 한다 — 그렇지 않으면 강하게 attractive한 elastic network가 $N\to\infty$ 극한에서 한 점으로 collapse해버린다.

- **Small-$p$ asymptotic (eq. 17, Appendix A 결과)**: $a(s)=cs^{-\gamma}$일 때 $p\ll N$인 영역에서 eigenvalue의 leading behavior가 $\gamma$의 범위에 따라 갈린다.

$$
\omega_p \sim
\begin{cases}
\Gamma(1-\gamma)\left(\dfrac{p}{N}\right)^{\gamma-1} & \text{for } 2<\gamma<3 \\[2mm]
\dfrac{1}{\gamma-3}\left(\dfrac{p}{N}\right)^{2} & \text{for } \gamma>3
\end{cases}
\tag{17}
$$

  $\gamma>3$이면 표준 Rouse spectrum($\omega_p\sim p^2$)이 ($\gamma$-dependent prefactor를 제외하면) 그대로 복원되고, non-nearest-neighbor 항 $a(s)$($s>1$)은 그저 persistence length만 renormalize한다. $2<\gamma<3$에서는 질적으로 다른 spectrum이 나오며, 바로 이 구간이 $d_f=2/(\gamma-2)\in(2,3)$을 만드는 원천이다.
  → 나중에 보면 알겠지만, $\omega_p$의 $p$에 대한 exponent - 1 = 2$\nu$이다. 
  → 이 접근은 $\nu >1/2$인 swollen chain을 설명하지 못 한다는 점을 알 수 있다.  나는 이걸 harmonic attraction으로는 부풀어 오른 polyme rconfiguration을 설명할 수 없다는 의미로 해석한다. 

- **Normal relaxation mode로의 변환, discrete Fourier transform (eq. 18)**: 실공간 좌표 $\mathbf{x}_k$를 normal mode $\mathbf{u}_p = \langle\mathbf{X}|\mathbf{A}_p\rangle$로 바꾸는 순변환·역변환.

$$
\mathbf{u}_p = \frac{1}{\sqrt{N}}\sum_{k=0}^{N-1}\mathbf{x}_n \exp\!\left(\frac{2\pi i p k}{N}\right), \qquad \mathbf{x}_k = \frac{1}{\sqrt{N}}\sum_{p=0}^{N-1}\mathbf{u}_p \exp\!\left(-\frac{2\pi i p k}{N}\right) \tag{18}
$$

- **Potential의 대각화 (eq. 19)**: 새 좌표 $\mathbf{u}_p$로 potential (13)을 표현하면, eigenbasis의 orthonormality $\langle A_m|A_p\rangle=\delta_{m,p}$에 의해 cross term이 모두 사라지고 각 mode가 독립적인 harmonic oscillator처럼 완전히 분리된다.

$$
V(\{\mathbf{X}\}) = \sum_{m=0}^{N-1}\left\langle \mathbf{A}_m\left|\mathbf{u}_m^*\sum_{p=0}^{N-1}\omega_p\mathbf{u}_p\right|\mathbf{A}_p\right\rangle = \sum_{m=0}^{N-1}\sum_{p=0}^{N-1}\mathbf{u}_m^*\,\omega_p\,\mathbf{u}_p\langle\mathbf{A}_m|\mathbf{A}_p\rangle = \sum_{p=0}^{N-1}\omega_p|\mathbf{u}_p|^2 \tag{19}
$$

  이 형태는 사용자의 K-matrix 노트에서 다뤘던 $H=-\mathbf{X}^T\Lambda\mathbf{X}=-\sum_p\lambda_p\mathbf{X}_p^2$와 정확히 같은 구조다(부호 convention만 반대 — 이 논문은 potential $V=\sum\omega_p|u_p|^2$을 최소화하는 Boltzmann weight $e^{-V}$를 쓰고, 사용자 노트는 $H=-\mathbf{X}^T K\mathbf{X}$에서 $K$가 negative-definite인 convention을 쓴다. $\omega_p \leftrightarrow -\lambda_p$로 대응).

- **Equipartition theorem 적용 (eq. 20)**: 대각화된 potential (19)은 각 mode당 독립적인 Gaussian이므로, [[Equipartition Theorem]]에 의해 mode의 평형 분산이 eigenvalue의 역수로 바로 주어진다.

$$
\overline{\mathbf{u}_p^*\mathbf{u}_{p'}} = \frac{3\delta_{pp'}}{\omega_p} \tag{20}
$$
	$k_bT = 1$로 두면 인수 $1/2$가 위 식에서 빠진 것 같다. 
  
  이 식이 다음 단계(eq. 21–23)에서 monomer-to-monomer distance $\mathbf{x}_k-\mathbf{x}_m$의 분산 $\sigma^2(s)$를 eigenvalue spectrum $\{\omega_p\}$의 합으로 명시적으로 계산하는 데 직접 사용된다 


- **전체 conformation의 통계적 weight가 Gaussian임을 보임 — statement (i) (eq. 21)**: quadratic Hamiltonian (13)으로부터 전체 conformation $\mathbf{X}=\{\mathbf{x}_0,\dots,\mathbf{x}_{N-1}\}$의 statistical weight가 (정의상) Gaussian function임이 바로 따라 나온다.

$$
P_N(\mathbf{X}) = \frac{1}{Z_N}\exp\{-\langle \mathbf{X}|\mathbb{A}|\mathbf{X}\rangle\} \tag{21}
$$

  이것으로 eq. 3의 목표 분포가 만족해야 할 두 조건 중 (i) Gaussian 조건은 자동으로 증명된다. 남은 것은 (ii) variance가 $s$의 power로 자란다는 것.

- **나머지 좌표를 적분해서 marginal distribution 얻기 (eq. 22)**: translational invariance 덕분에, $\mathbf{x}_k,\mathbf{x}_m$ 두 개만 남기고 나머지 좌표를 모두 적분하면 두 monomer 사이 거리의 marginal distribution을 얻는다.

$$
P(\mathbf{x}_k, \mathbf{x}_m, s) = \frac{1}{Z_N}\int \exp\{-\langle \mathbf{X}|\mathbb{A}|\mathbf{X}\rangle\}\prod_{i\ne k,m} d\mathbf{x}_i = \left(\frac{3}{2\pi\sigma_{km}^2}\right)^{3/2}\exp\!\left(-\frac{(\mathbf{x}_k-\mathbf{x}_m)^2}{2\sigma_{km}^2}\right) \tag{22}
$$

  여기서 variance $\sigma_{km}^2 = \overline{(\mathbf{x}_k-\mathbf{x}_m)^2} \equiv \sigma^2(s)$는 contour length $s(k,m)$만의 함수다(circulant 구조의 translational invariance 덕분).

- **Variance를 normal mode(eigenvalue spectrum)로 표현 (eq. 23)**: eq. 18의 normal mode 변환을 이용해 $\sigma^2(s)$를 eq. 20의 equipartition 결과로 직접 계산할 수 있다.

$$
\sigma^2(s) = \frac{1}{N}\overline{\left|\sum_{p=0}^{N-1}\mathbf{u}_p\left(e^{-\frac{2\pi i p k}{N}} - e^{-\frac{2\pi i p m}{N}}\right)\right|^2} = \frac{12}{N}\sum_{p=1}^{n}\omega_p^{-1}\left(1-\cos\frac{2\pi p\,s(k,m)}{N}\right) \tag{23}
$$

  (spectrum의 2중 축퇴와 equipartition (eq. 20)을 사용해서 정리한 결과.) 

- **$s\gg1$ asymptotic으로 statement (ii) 증명 (eq. 24)**: $\sigma^2(s)$의 $s\gg1$ 극한 거동은 $p\ll N$인 $\omega_p$(=eq. 17)에 의해 결정되며, 이때 relevant한 $p$는 $N/s$ order다. eq. 17을 대입하고 연속극한으로 근사하면:

$$
\sigma^2(s) \sim \frac{1}{N}\sum_{p=1}^{n}\left(\frac{p}{N}\right)^{1-\bar\gamma}\left(1-\cos\frac{2\pi p\,s(k,m)}{N}\right) \approx \int_0^{\pi} x^{1-\bar\gamma}(1-\cos xs)\,dx = s^{\bar\gamma-2}\int_0^{\pi s} y^{1-\bar\gamma}(1-\cos y)\,dy \tag{24}
$$

  여기서 $\bar\gamma = \gamma$ ($2<\gamma<3$일 때) 또는 $\bar\gamma=3$ ($\gamma>3$일 때)로 정의된다.

- **$\bar\gamma$ 정의**

$$
\bar\gamma = \begin{cases} \gamma & \text{for } 2<\gamma<3 \\ 3 & \text{for } \gamma>3 \end{cases} \tag{25}
$$

- **$\sigma^2(s)$의 leading asymptotic**

$$
\sigma_s^2 \sim \begin{cases} s^{\gamma-2} & \text{for } 2<\gamma<3 \\ s & \text{for } \gamma>3 \end{cases} \tag{26}
$$

- **Hurst exponent $H$ (eq. 27)**

$$
H = \frac{\bar\gamma}{2}-1 = \begin{cases} \gamma/2-1 & \text{for } 2<\gamma<3 \\ 1/2 & \text{for } \gamma>3 \end{cases} \tag{27}
$$

- **두 개의 power law를 이어붙인 $a(s)$ (eq. 28, Fig. 2 numerical test용)**
![[Pasted image 20260727101731.png]]

$$
a(s) = \begin{cases} c_1 s^{-\gamma_1} & \text{for } s<s^* \\ c_2 s^{-\gamma_2} & \text{for } s>s^* \end{cases} \tag{28}
$$

  $s^*$는 두 power-law regime을 나누는 **crossover length scale**이다. $s\ll s^*$인 짧은 거리에서는 $\gamma_1$이, $s\gg s^*$인 긴 거리에서는 $\gamma_2$가 $\sigma^2(s)$의 거동을 지배한다 — 즉 chain이 더 이상 하나의 fractal dimension을 갖지 않고, $s\ll s^*$ 구간과 $s\gg s^*$ 구간에서 서로 다른 $d_f$(eq. 26–27 관계를 각각 $\gamma_1$, $\gamma_2$에 적용)를 갖는 **scale-dependent** conformation이 만들어진다. 
  대규모($s\gg s^*$) 거동은 오직 $\gamma_2$(=$a(s)$의 large-$s$ tail)에만 의존한다는 점은 eq. 26의 asymptotic 결과와 일관된다. 논문은 이 성질이 active/inactive 영역이 섞인 heterochromatin처럼, chain의 서로 다른 부분(혹은 서로 다른 길이 스케일)에서 다른 fractal dimension을 갖는 conformation을 만드는 데 쓰일 수 있다고 제안한다. Fig. 2의 수치 예시는 $s^*=100$, $(\gamma_1,\gamma_2)=(4,\,8/3)$과 그 반대 $(8/3,\,4)$ 두 조합을 비교한다 — 사용자의 continuous $\nu(n)$ 프레임워크 관점에서 보면, 이 eq. 28은 $\nu(n)$이 두 개의 constant piece로만 이루어진 가장 단순한 2-piece 특수 케이스에 해당한다.

  **$s^*$를 결정하는 요소**: 논문은 $s^*$를 유도하는 analytical formula를 제공하지 않는다 — $s^*$, $\gamma_1$, $\gamma_2$, $c_1$, $c_2$ 모두 Fig. 2 수치 테스트를 위해 **손으로 지정한 free parameter**일 뿐이다. 굴이 제약을 찾자면 $s=s^*$에서 $a(s)$가 연속이어야 한다는 조건 $c_1(s^*)^{-\gamma_1}=c_2(s^*)^{-\gamma_2}$ 정도가 전부이며, 이건 $s^*$ 값 자체를 결정하는 게 아니라 $s^*$를 먼저 고르면 $c_1/c_2$ 비율이 정해진다는 constraint일 뿐이다. 논문이 부여하는 유일한 물리적 해석은 Discussion에서 언급되는 heterochromatin 비유 정도로, active/inactive domain의 경계(예: TAD boundary)가 $s^*$에 대응할 것이라는 정성적 제안만 있고 이를 계산하는 방법은 논문 범위 밖에 남겨둔다.

- **fBm의 power spectrum $f(p)$ 정의 (eq. 29)**

$$
f(p) = \overline{\mathbf{u}_p^*\mathbf{u}_p} \sim \omega_p^{-1} \tag{29}
$$

- **$f(p)$의 scaling (eq. 30, known fBm result)**

$$
f(p) \sim \left(\frac{N}{p}\right)^{2H+1} \tag{30}
$$

- **Rouse-type dynamics의 postulate (eq. 31)**

$$
\xi\frac{d\mathbf{x}_i}{dt} = -\nabla_i V(\mathbf{X}) + \delta\text{-correlated Gaussian noise} \tag{31}
$$

### Section Ⅳ - connection to fBM memory kernal
이 섹션에서는 식 (8)에서 정의한 memory kernel  $\varphi(|\xi-\xi'|)$과 $a(s)$사이의 관계식을 유도한다. 

- **Partition function을 action language로 재정리 (eq. 32)**: quadratic interaction (13)을 가진 polymer chain의 partition function을 "moving particle"의 Euclidean action 형태로 다시 쓴다.

$$
Z_N = \int \mathcal{D}\{\mathbf{X}\}\, e^{-S}, \qquad S = \langle X|\mathbb{A}|X\rangle \tag{32}
$$

  여기서 $\mathcal{D}\{\mathbf{X}\}=\prod_{k=0}^N d\mathbf{x}_k$이고, $S$는 particle trajectory의 action $\tilde{S}$에 해당한다. 이 재해석이 Section Ⅱ의 memory-kernel action (eq. 8)과 이 lattice Hamiltonian (eq. 13)을 잇는 출발점이다.

- **Memory-dependent action (eq. 8)의 discretization (eq. 33)**: continuum action을 lattice로 이산화하면 nearest-neighbor increment $(\mathbf{x}_k-\mathbf{x}_{k-1})$들의 곱으로 전개된다.

$$
\tilde{S} = \int_0^N\!\! d\xi\int_0^N\!\! d\xi'\, \frac{\partial \mathbf{X}(\xi)}{\partial \xi}\frac{\partial \mathbf{X}(\xi')}{\partial \xi'}\varphi(|\xi-\xi'|) \approx \sum_{k,m}^N (\mathbf{x}_k-\mathbf{x}_{k-1})(\mathbf{x}_m-\mathbf{x}_{m-1})\varphi_{k,m} = \sum_{k,m}^N \left(\varphi_{k,m}-\varphi_{k,m+1}-\varphi_{k+1,m}+\varphi_{k+1,m+1}\right)\mathbf{x}_k\mathbf{x}_m \tag{33}
$$

- **$a_{km}$과 memory kernel $\varphi$의 대응관계 (eq. 34)**: eq. 21(Gaussian weight)과 eq. 33이 같은 것이 되려면, quadratic Hamiltonian의 계수 $a_{km}$이 $\varphi$의 이산 2차 차분으로 주어져야 한다.

$$
a_{km} = -\left(\varphi_{k,m}-\varphi_{k,m+1}-\varphi_{k+1,m}+\varphi_{k+1,m+1}\right) \tag{34}
$$

- **연속극한: discrete difference → 2차 미분 (eq. 35)**: $1\ll|k-m|<n$인 영역에서, 위 이산 차분을 연속 2차 미분으로 근사할 수 있다.

$$
a(s=|k-m|) = \varphi(s-1)+\varphi(s+1)-2\varphi(s) \simeq \frac{\partial^2 \varphi(s)}{\partial s^2} \tag{35}
$$

  대규모 통계는 $a(s)$의 asymptotic behavior에만 의존하고 small-$s$ 디테일(=$a(s)$나 $\varphi(s)$의 정확한 형태)에는 둔감하다는 점이 핵심 — 이 둔감성 덕분에 eq. 35를 continuum derivative로 근사하는 것이 정당화된다.

- **$a(s)$의 asymptotic 가정 (eq. 36)**: Section Ⅲ의 조건과 동일하게, $s\to\infty$에서 power-law decay를 가정한다.

$$
a(s) \sim s^{-\gamma}, \qquad \gamma\in(2,3) \tag{36}
$$

- **대응하는 memory kernel $\varphi(s)$ (eq. 37)**: eq. 35를 미분방정식처럼 풀면, $a(s)$의 power-law가 $\varphi(s)$의 power-law로 그대로 대응된다.

$$
\varphi(s) \simeq \frac{s^{2-\gamma}}{(\gamma-2)(\gamma-1)}, \qquad \gamma\in(2,3) \tag{37}
$$

- **최종 형태: algebraically decaying memory kernel을 가진 action (eq. 38)**: eq. 27의 Hurst exponent $H=\gamma/2-1$ (즉 $\gamma=2H+2$)을 대입해서 정리하면, action이 $H$만으로 매개변수화된 형태로 단순화된다.

$$
\tilde{S} = \frac{1}{2H(2H+1)}\int_0^N\!\! d\xi\int_0^N\!\! d\xi'\, \frac{\partial \mathbf{X}(\xi)}{\partial \xi}\frac{\partial \mathbf{X}(\xi')}{\partial \xi'}\varphi(|\xi-\xi'|), \qquad \varphi(s)\simeq\frac{1}{s^{2H}} \tag{38}
$$

  $H\in(0,1/2)$인 임의의 $H$에 대해, $\varphi(s)\sim s^{-2H}$인 이 action이 Hurst exponent $H$를 갖는 fBm ensemble을 점근적으로 생성한다. $H=1/4$는 Rouse chain의 bead trajectory(Burlatskii-Oshanin, ref. 30)로 환원되고, $H=1/3$은 crumpled globule의 Hurst exponent에 해당한다. $H=1/2$에서는 algebraic 표현이 무너지고 $\varphi(s)\simeq\delta(s)$로 collapse하여 표준 kinetic action(ordinary Brownian motion)을 회복한다.

> [!warning] $\xi$의 정체가 예시마다 바뀌는 문제 → 아래 주장이 맞는지는 검토가 필요함
> eq. 34–38의 유도 자체는 $\xi$가 무엇을 의미하는지(contour position인지 real time인지)에 전혀 의존하지 않는 순수하게 형식적인 대수 조작이다 — $a_{km}\leftrightarrow\varphi$ 대응(34–35), $a(s)\sim s^{-\gamma}$ 가정(36), $\gamma=2H+2$를 대입해 $\varphi(s)\simeq s^{-2H}$를 얻는 과정(37–38) 어느 곳도 $\xi$의 물리적 정체를 가정하지 않는다. 이 "parametrization-agnostic"함이 Section Ⅳ의 제목이 외치는 "**Unifying** action"의 의미다.
>
> 문제는 바로 이 다음 단락에서 논문이 든 두 예시가 서로 **다른 $\xi$ 해석**을 쓴다는 점이다:
> - **$H=1/3$ (crumpled globule)**: 지금까지 다루어온 **공간적(spatial) 해석** 그대로다. $\xi$=contour position(monomer index), $\gamma=8/3 \Rightarrow d_f=2/(\gamma-2)=3 \Rightarrow H=1/d_f=1/3$. Section Ⅲ의 논리와 완전히 일관된다.
> - **$H=1/4$ (ref. 30, Rouse chain bead trajectories)**: ref. 30 (Burlatskii-Oshanin)이 실제로 다루는 건 Rouse chain에 묻힌 monomer 하나의 **real-time dynamics**다. 표준 Rouse 이론의 잘 알려진 결과로, 무한히 긴 chain 속 monomer는 이웃들의 viscoelastic memory 때문에 실시간에서 $\langle\Delta x^2(t)\rangle\sim t^{1/2}$로 subdiffuse하고, fBm 언어로 옮기면 $2H=1/2\Rightarrow H=1/4$가 된다. 즉 여기서는 $\xi=t$(진짜 시간)이다.
>
> $\gamma=2H+2$ 대입 자체는 두 경우 모두에서 똑같이(그리고 올바르게) 재사용되고 있어 formula 차원에서는 문제가 없다. 문제는 같은 문자 $H$가 가리키는 "$\xi$의 물리적 정체"가 두 예시 사이에서 슬쩍 바뀐다는 것이다 — 하나는 공간(contour), 하나는 시간(real dynamics). 논문은 이 전환을 명시적으로 짚어주지 않고 한 문장 안에 나란히 배치해서, 마치 둘 다 같은 종류의 $H$처럼 보이게 만든다.

- **fLe(eq. 4)와의 fluctuation-dissipation 연결, work 표현 (eq. 39)**: eq. 4의 fLe 좌변은 fLe particle에 작용하는 dissipative friction force $\mathbf{F}$에 대응한다. 평형에서는 이 force가 하는 일이 particle trajectory를 따라 적분한 action $\tilde{S}$와 같아야 한다. $\mathbf{x}_1\to\mathbf{x}_2$로 시간 $t$ 동안 이동하는 particle에 대해 eq. 38은:

$$
\tilde{S} = 2\int_0^t dt' \int_0^{t'} dt''\, \frac{\partial \mathbf{x}(t')}{\partial t'}\frac{\partial \mathbf{x}(t'')}{\partial t''}\varphi(t'-t'') = -\int_{\mathbf{x}_1}^{\mathbf{x}_2} \mathbf{F}\, d\mathbf{x} \tag{39}
$$

- **Friction force $\mathbf{F}(t)$의 명시적 표현 (eq. 40)**: eq. 39를 미분하면 friction force의 형태를 얻는다.

$$
\mathbf{F}(t) = -\int_0^t dt'\, K_a(t-t')\frac{\partial \mathbf{x}(t')}{\partial t'}, \qquad K_a(t-t') \sim \frac{1}{|t-t'|^{2H}} \tag{40}
$$

  수치 계수(prefactor)를 제외하면, 이 friction kernel $K_a$는 eq. 4의 fLe에 등장하는 kernel $K(t_1-t_2)=\frac{2(1-H)(1-2H)}{|t_1-t_2|^{2H}}$와 정확히 동일한 형태다 — 즉 Section Ⅱ에서 fBm을 생성한다고 제시했던 fLe(eq. 4)와, 이 Section에서 lattice Hamiltonian으로부터 유도한 memory-kernel action(eq. 38)이 fluctuation-dissipation theorem을 매개로 서로 정합적임이 확인된다.

### SectionⅤ - Discussion
![[Pasted image 20260727104435.png]]

- **Fig. 3의 목적**: 논문이 eq. 9–40에서 증명한 것은 "이런 quadratic Hamiltonian을 쓰면 이론적으로 fBm 통계가 나온다"는 것뿐이다. Discussion(Section Ⅴ)은 그 이론이 **실제 시뮬레이션 데이터와 맞는지**를 검증하는 유일한 대목이며, Fig. 3이 그 핵심 증거다.

- **비교에 쓰인 두 독립적 시뮬레이션 데이터 소스**:
  - **Fig. 3a**: ref. 29 (Tamm et al. PRL 2015, *Anomalous Diffusion in Fractal Globules* — 이미 읽은 [[📑 Journal reading - Anomalous Diffusion in Fractal Globules]] 그 논문)의 partially equilibrated crumpled globule 데이터. Linear chain, periodic boundary condition.
  - **Fig. 3b**: ref. 28 (Imakaev, Tchourine, Nechaev, Mirny, *Soft Matter* 2015)의 reflecting boundary condition을 가진 box 안 equilibrium unknotted ring 데이터.
  - 두 데이터 모두 저자들에게 직접 raw simulation data를 받아 재분석한 것.

- **Fig. 3a, b — Maxwell distribution fit (eq. 41)**: 여러 $s=|k-m|$ 값에 대해 monomer-to-monomer distance $x\equiv|\mathbf{x}_k-\mathbf{x}_m|$의 분포를 뽑고, eq. 3(fBm target distribution)에서 유도되는 Maxwell distribution

$$
P(x) = 4\pi x^2 \left(\frac{3}{2\pi\sigma^2(s)}\right)^{3/2}\exp\!\left(-\frac{3x^2}{2\sigma^2(s)}\right) \tag{41}
$$

  으로 fitting한다(eq. 22의 Gaussian $P(\mathbf{x}_k,\mathbf{x}_m,s)$을 3D 구면좌표로 적분해서 radial distribution으로 바꾼 형태). $\sigma^2(s)$는 free fit parameter다.
  - **작은 $s$에서의 불일치**: 두 패널 모두 작은 $s$에서 데이터가 Maxwell fit과 눈에 띄게 어긋난다. 논문은 이를 시뮬레이션에서 스크리닝되지 않은 excluded volume interaction과 유한한 chain flexibility 탓으로 돌린다 — quadratic Hamiltonian (13)은 애초에 이런 short-range steric effect를 담지 못하는 harmonic-spring 모델이므로, 이 불일치는 모델의 예상된 한계다.
  - **큰 $s$에서의 우수한 fit**: entanglement length $N_e$보다 큰 $s$에서는 fit이 "remarkably good"하다고 평가된다. 이 구간은 정확히 Flory theorem(=단순 ideal chain 스케일링 $\sigma^2(s)\sim s$)이 더 이상 성립하지 않는 구간과 겹친다 — 즉 이 논문의 Hamiltonian이 필요한 바로 그 구간(topologically stabilized regime)에서 잘 맞는다는 뜻.
  - fit이 유효한 상한은 $s\approx N^{2/3}$까지이며, 그 이상은 finite-size effect가 지배한다.

- **Fig. 3c, d — $\sigma^2(s)$의 log-log scaling, $N_e$의 결정**: Maxwell fit에서 뽑은 $\sigma^2(s)$를 $s$에 대해 log-log로 그린 패널. $\sigma^2(s)\sim s$(직선, Rouse/ideal chain scaling, dashed line로 표시)에서 벗어나는 지점이 바로 entanglement length $N_e$의 정의다.
  - **(c) ref. 29 데이터**: $N_e\approx 50$. Fit된 power-law slope $\approx 0.76$(figure 상단 caption 표기, "$s^{0.76}$").
  - **(d) ref. 28 데이터**: $N_e\approx 150$. Fit된 slope $\approx 0.66$.
  - 두 slope 모두 이 논문의 이론적 목표 범위 $\sigma^2(s)\sim s^{\gamma-2}$, $\gamma\in(2,3)$ 즉 slope $\in(0,1)$ 안에 들어온다. $d_f=2/(\gamma-2)$로 역산하면 (c)는 $\gamma-2\approx0.76\Rightarrow d_f\approx2.63$, (d)는 $\gamma-2\approx0.66\Rightarrow d_f\approx3.03$(≈크럼플드 글로뷸 극한 $d_f=3$에 근접) — ring melt와 crumpled globule이 서로 다른 $d_f$를 갖는다는 것이 수치적으로도 확인된다.

- **다른 문헌과의 교차검증**: ref. 47 (Tsalikis et al., poly(ethylene oxide) ring melt MD 시뮬레이션, $N\le500$)에서도 유사한 분석이 수행되었고(그 논문 Fig. 10), 정성적으로 같은 패턴(작은 $s$ 불일치, 큰 $s$ 좋은 fit)이 관찰된다고 언급된다. Footnote 56에서는 ref. 47이 $\sigma^2(s)$의 best-fit 값과 직접 측정값 사이에 최대 70% 차이가 있다고 주장하는 반면, 이 논문은 ref. 28·29 데이터에서 10–20%의 더 작은 discrepancy만 발견했다고 밝히며, 이 차이의 원인 규명은 future work로 남긴다.

- **Discussion의 결론**: 이 두 독립적 검증(Fig. 3a·b의 distribution shape, Fig. 3c·d의 variance scaling)을 근거로, 논문은 "simple quadratic Hamiltonian (13)이 실험적으로 관측된 fractal dimension에 맞게 계수를 조정하면 topologically stabilized state의 effective phenomenological description으로서 매우 좋은 후보"라고 결론짓는다. 단, 이는 Section Ⅰ에서부터 지적된 한계 — 실제 topological state가 정말 Gaussian인지 아닌지는 여전히 미지수이며, 아니라면 이 Hamiltonian은 fractal dimension에만 의존하는 성질만 재현 가능하다는 단서를 유지한 채로다.

## Questions & Insights
- Q: 이 논문의 핵심 주장은 "임의의 fractal dimension을 가진 self-similar stabilized polymer configuration이 특정 Hurst exponent를 가진 fBm trajectory와 대응되고, 이를 재현하는 bead-bead potential을 최초로 제시한다"는 것 같은데, 서론과 초록이 왜 굳이 'topologically stabilized'를 강조하는가? Topology가 이 논문에서 왜 중요한가?

  A: Topology는 논문이 유도하는 quadratic Hamiltonian 수학 자체에는 등장하지 않는다(eq. 1은 phantom chain 가정 — 사슬끼리 자유롭게 뚫고 지나감). Topology의 역할은 두 가지: ① $2<d_f<3$인 self-similar 상태가 애초에 왜 존재하는지에 대한 물리적 메커니즘 — ring의 non-concatenation, 혹은 미완성 reptation 같은 topological 제약이 사슬을 진짜 equilibrium collapsed globule로 완전히 이완되지 못하게 막아 territorial/hierarchical한 self-similar 구조를 유지시킨다. ② dense system에서 topology는 non-local하고 screening되지 않아 정확한 microscopic Hamiltonian이 알려져 있지 않다는 문제의식 — 그래서 논문은 topology를 정확히 인코딩하는 대신, topology가 만들어내는 *결과물*(평형 monomer-monomer 거리 분포)만 재현하는 effective phenomenological Hamiltonian을 제시한다. 즉 topology는 "이런 상태가 왜 존재하는가"의 답이지 "이 Hamiltonian이 어떻게 유도되는가"의 답은 아니다 — 이 논문의 은근한 긴장점.

- Q: Action은 보통 $T-V$의 시간 적분인데, static polymer configuration에는 시간 개념이 애매하다. 논문 eq. (1)의 action $S$는 결국 potential과 같은 것 아닌가?

  A: 맞다. $S$는 실제로는 Boltzmann weight의 exponent, 즉 $k_BT=1$ 단위의 총 potential energy(elastic bond energy + interaction $V$)이며 kinetic energy $T$는 어디에도 없다. "action"이라 불리는 이유는 통계역학의 표준적 formal analogy 때문 — chain index $n$(혹은 contour distance $s=|k-m|$)이 imaginary time 역할을 하고, bond vector 차분의 제곱합이 Euclidean(허수시간) path integral의 kinetic term과 수학적으로 동일한 형태가 된다(de Gennes의 polymer-magnet analogy / Wiener measure ≡ 자유입자 propagator). 논문도 이를 명시적으로 확인한다: "$s=|k-m|$ playing the role of the coordinate and time". Section Ⅳ에서는 이 언어를 한 단계 더 밀어붙여 $\xi\in[0,N]$을 진짜 시간으로 재해석하고 fluctuation-dissipation theorem으로 friction force를 유도하는데, 이는 eq. 1의 원래(정적 conformation) 맥락과는 구분되는 두 번째 해석이다.

## Related Concepts
이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

- [[Fractional Brownian Motion]] — 이 논문의 핵심 대상. df와 Hurst exponent H=1/df 관계
- [[K-matrix Diagonalization (Generalized Rouse Model)]] — 이 논문 Section III의 circulant matrix eigenmode 대각화(eq. 13-23)와 double-centering / eigenvalue spectrum → variance 골격을 정확히 공유하는 사용자의 K-matrix 노트
- [[β-polymer (beta-polymer)]] — 이 논문 ref. 41 "beta-model"(Amitai & Holcman)과 동일한 generalized Rouse eigenvalue 구조 ($\sin^\beta$ vs. 이 논문의 $(p/N)^{\gamma-1}$)
- [[MSD exponent from scale-dependent Flory exponent]] — 사용자의 ν(n)→α(τ) 프레임워크 노트, 이 논문의 $d_f=2/(\gamma-2)$와 직접 연결
- [[Rouse Model]] — $\gamma>3$ 극한에서 이 논문의 결과가 환원되는 baseline
- [[Equipartition Theorem]] — eq. 20 $\overline{\mathbf{u}_p^*\mathbf{u}_{p'}} = 3\delta_{pp'}/\omega_p$ 유도에 사용

**관련 저널 리딩 노트:**
- [[📑 Journal reading - Anomalous Diffusion in Fractal Globules]] — 이 논문의 ref. 29 (Tamm et al. PRL 2015)이자, 이 논문 Fig. 3a의 Maxwell-fit 검증 데이터 원출처
- [[📑 Journal reading - The fractal globule as a model of chromatin architecture in the cell]] — 이 논문 ref. 21 (Mirny 2011)
- [[📑 Journal reading - Complexity of chromatin folding is captured by the strings and binders switch model]] — 사용자의 핵심 연구 모델(SBS)과의 접점

- [[Generalized Langevin Equation and Memory Kernel]] — eq. 4 (fLe)와 eq. 8 (memory-kernel action)에 대한 상세 설명, FDT를 통한 friction-noise kernel 등가성의 미시적 유도(Caldeira-Leggett) 포함

## 더 읽어보고 싶은 레퍼런스

- Ge, Panyukov, Rubinstein (2016), *Self-similar conformations and dynamics in entangled melts and solutions of non-concatenated ring polymers*, Macromolecules — 이 논문 ref. 14, non-concatenated ring polymer의 self-similar conformation 이론
- Tamm, Nazarov, Gavrilov, Chertovich (2015), *Anomalous diffusion in fractal globules*, PRL 114, 178102 — ref. 29, 이 논문의 fitting에 사용된 crumpled globule 시뮬레이션 데이터 원 논문
- Polovnikov, Gherardi, Cosentino-Lagomarsino, Tamm (2018), *Fractal folding and medium viscoelasticity contribute jointly to chromosome dynamics*, PRL 120, 088101 — ref. 42, 이 Hamiltonian을 크로마틴 동역학에 적용한 후속 논문

