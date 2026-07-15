---
title: Fractional Brownian Motion
date: "2026-07-11"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Fractional Brownian Motion

## Overview

**Fractional Brownian motion (fBm)** 은 표준 Brownian motion에서 딱 하나의 성질만 바꾼 확장이다. 표준 BM은 increment들이 **독립(independent)** 이지만, fBm은 increment들 사이에 **long-range correlation (memory)** 을 넣는다. 이 상관의 부호와 강도를 조절하는 단 하나의 parameter가 **Hurst exponent** $H \in (0,1)$ 이며, 그 결과 MSD가 $t^{2H}$ 로 스케일한다. 즉 anomalous diffusion exponent $\alpha = 2H$.

viscoelastic medium이나 polymer network 안에서의 subdiffusion을 기술하는 대표적인 phenomenological model이며, chromatin locus dynamics의 유효 기술로 널리 쓰인다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $B_H(t)$ | fractional Brownian motion at time $t$ |
| $H$ | Hurst exponent, $H \in (0,1)$ |
| $H_n$ | conformational Hurst exponent (fBm in contour index $n$), $H_n = \nu$ |
| $H_t$ | temporal Hurst exponent (fBm in time $t$), $H_t = \alpha/2$ |
| $\nu$ | Flory exponent, $R \sim n^{\nu}$ |
| $d_f$ | fractal dimension of the chain conformation, $d_f = 1/\nu$ |
| $\alpha$ | anomalous MSD exponent, $\alpha = 2H$ |
| $\xi_n$ | fractional Gaussian noise (fGn), increment of fBm |
| $C(k)$ | autocovariance of fGn at lag $k$ |
| $D_{\text{graph}}$ | fractal dimension of the fBm graph $(t, B_H(t))$ |
| $D_{\text{traj}}$ | fractal dimension of the trajectory (image) in $\mathbb{R}^d$ |
| $d$ | dimension of the embedding space |
| $\stackrel{d}{=}$ | equality in distribution |

## Key Points

### Definition

fBm은 다음을 만족하는 **zero-mean Gaussian process** 로 정의된다: $B_H(0) = 0$, 그리고 covariance가

$$
\langle B_H(t)\, B_H(s)\rangle = \frac{1}{2}\left( |t|^{2H} + |s|^{2H} - |t-s|^{2H} \right)
\tag{1}
$$
위 식이 직관적으로 느껴지지 않는다면, 아래 식이 더 와닿을 수 있다. 
$$
\langle |B_H(t)-B_H(s)|^2\rangle =  |t-s|^{2H}
\tag{1-A}
$$
Gaussian process이므로 covariance만으로 process 전체가 완전히 결정된다. 여기서 $s = t$ 를 넣으면 variance, 즉 MSD를 얻는다.

$$
\langle B_H(t)^2 \rangle = |t|^{2H}
\tag{2}
$$

따라서 anomalous exponent는 $\alpha = 2H$ 이다.

### Three regimes

Hurst exponent 하나가 세 가지 서로 다른 dynamics를 만든다.

| $H$ | increment correlation | dynamics | intuition |
|-----|----------------------|----------|-----------|
| $H = 1/2$ | 무상관 | normal diffusion ($\alpha = 1$) | 기억 없는 보통 Brownian motion |
| $H > 1/2$ | 양의 상관 (persistent) | superdiffusion ($\alpha > 1$) | 추세가 이어짐, 경로가 매끄러움 |
| $H < 1/2$ | 음의 상관 (antipersistent) | subdiffusion ($\alpha < 1$) | 자기 발자국을 되돌림, 경로가 거침 |

chromatin monomer는 Rouse-like dynamics로 $\alpha \approx 1/2$, 즉 $H \approx 1/4$ 인 antipersistent 영역에 속한다.

### Fractional Gaussian noise (fGn)

fBm의 increment $\xi_n = B_H(n+1) - B_H(n)$ 를 **fractional Gaussian noise** 라 부른다. 이는 stationary Gaussian sequence이며, 그 autocovariance는 $|k|^{2H}$ 의 second difference로 주어지고, 큰 lag에서 power-law로 감쇠한다.

$$
C(k) = \langle \xi_n\, \xi_{n+k}\rangle \sim H(2H-1)\,|k|^{2H-2}, \qquad |k| \to \infty
\tag{3}
$$

- $H > 1/2$: $C(k) > 0$ 이고 $\sum_k C(k)$ 가 발산 → **long-range dependence**.
- $H < 1/2$: $C(k) < 0$ (음의 상관), 되돌림 경향.
- $H = 1/2$: $C(k) = 0$ ($k \neq 0$) → white noise → 보통 BM.

### Self-similarity and fractal dimension

fBm은 통계적으로 **self-similar** 하다.

$$
B_H(at) \stackrel{d}{=} a^{H}\, B_H(t)
\tag{4}
$$

궤적을 확대/축소해도 $a^H$ 로 리스케일하면 통계적으로 동일한 모양이 나온다.

**주의: graph와 trajectory의 fractal dimension은 서로 다른 양이다.** 혼동하기 쉬우므로 반드시 구분할 것.

**(a) Graph dimension.** $(t, B_H(t))$ 를 평면에 그린 **시계열 플롯의 그래프**가 갖는 차원. 경로의 거칠기(roughness)를 정량화한다.

$$
D_{\text{graph}} = 2 - H
\tag{5}
$$

$H \to 1$ 이면 매끄러운 추세($D_{\text{graph}} \to 1$), $H \to 0$ 이면 톱니 같은 거친 곡선($D_{\text{graph}} \to 2$). 표준 BM($H = 1/2$)의 graph dimension은 $3/2$ 이다.

**(b) Trajectory (image) dimension.** 시간 축을 제거하고, 입자가 $d$ 차원 공간에 남긴 **자취 그 자체**가 갖는 차원. 공간을 얼마나 채우는지를 정량화한다.

$$
D_{\text{traj}} = \min\left(\frac{1}{H},\, d\right)
\tag{6}
$$

| $H$                              | $D_{\text{graph}} = 2 - H$ | $D_{\text{traj}} = \min(1/H, d)$    |
| -------------------------------- | -------------------------- | ----------------------------------- |
| $H = 1/2$ (BM)                   | $3/2$                      | $2$ — 평면을 채움 (area-filling)         |
| $H = 1/4$ (Rouse monomer의 시간 궤적) | $7/4$                      | $3$ ($d = 3$) — compact exploration |
| $H \to 1$                        | $1$                        | $1$ — 거의 직선                         |

표준 Brownian trajectory의 차원이 $2$ 라는 것이 고전적 결과이며, $2 - H = 3/2$ 를 여기에 적용하면 안 된다. 단, $D_{\text{traj}} = d$ 는 Hausdorff dimension이 embedding 차원과 같다는 뜻이지, 경로가 공간을 문자 그대로 덮는다는 뜻은 아니다 (평면 위 BM path는 dimension 2이지만 Lebesgue measure는 0이다).

### ⚠️ Rouse monomer trajectory vs. Rouse chain conformation

가장 혼동하기 쉬운 지점. **Rouse polymer에는 fBm이 두 번 등장하며, 둘은 서로 다른 축을 파라미터로 갖는 별개의 process이다.**

| | **chain conformation** | **monomer trajectory** |
|---|---|---|
| fBm의 파라미터 축 | contour index $n$ | time $t$ |
| 대상 | $\vec{R}(n)$ — 사슬이 공간에 놓인 모양 | $\vec{r}_i(t)$ — monomer 하나의 시간 자취 |
| Hurst | $H_n = \nu = 1/2$ (ideal chain) | $H_t = \alpha/2 = 1/4$ |
| image dimension | $d_f = 1/\nu = \mathbf{2}$ | $\min(1/H_t,\, d) = \mathbf{3}$ |

따라서:

- **ideal Rouse chain의 conformation은 fractal dimension $2$ 이며, space-filling이 아니다.** ideal chain은 공간 속 random walk이므로 당연한 결과다.
- 3차원을 채우는 conformation($d_f = 3$, 즉 $\nu = 1/3$)은 **fractal globule** 이며, 이것은 Rouse ideal chain이 아니다.
- monomer의 **시간 궤적**이 $D_{\text{traj}} = 3$ 인 것은 전혀 별개의 사실이며, "한 monomer가 자기 주변을 recurrent하게 빠짐없이 훑는다"는 **compact exploration**을 뜻한다.

chromatin 문헌에서 "space-filling polymer"는 관용적으로 **fractal globule의 conformation**을 가리키므로, monomer의 시간 궤적을 설명할 때 이 단어를 쓰면 안 된다. 대신 **compact / recurrent exploration** 이라고 쓴다.

### 두 exponent를 잊는 다리
[[MSD exponent from scale-dependent Flory exponent]]
둘은 별개의 process이지만 무관하지는 않다. Rouse-type dynamics(no hydrodynamics)에서 conformational exponent $\nu$ 가 temporal exponent 를 결정한다.

$$
\alpha = \frac{2\nu}{2\nu + 1}, \qquad H_t = \frac{\alpha}{2} = \frac{\nu}{2\nu + 1}
\tag{7}
$$

| polymer | $\nu$ | $d_f = 1/\nu$ | $\alpha$ | $H_t$ |
|---|---|---|---|---|
| ideal chain (Rouse) | $1/2$ | $2$ | $1/2$ | $1/4$ |
| fractal globule | $1/3$ | $3$ | $2/5$ | $1/5$ |

즉 **static conformation의 fractal 구조가 dynamic anomalous exponent를 낳는다.** 이 map의 scale-dependent 확장이 $\nu(n) \to \alpha(\tau)$ framework의 핵심이다. relaxation time exponent 관계식($z_n = 1+2\nu$, $z_R = 2 + d_f$, $\alpha = 2/z_R$)과 $\nu$ 의 물리적 범위($1/3 \leq \nu \leq 1$, 단 local exponent는 예외)는 [[MSD exponent from scale-dependent Flory exponent]] §6–7 참조.

### Physical origin

antipersistent fBm이 세포 내 subdiffusion의 대표 모델이 되는 이유는 **viscoelastic medium이 stress를 탄성적으로 저장했다가 시차를 두고 되돌려주기** 때문이다. 입자를 밀면 매질이 나중에 되민다 — 이것이 음의 increment correlation의 물리적 기원이다. 미시적으로는 power-law memory kernel을 가진 **generalized Langevin equation (GLE)** 이 fBm-like dynamics를 낳는다. Rouse model에서 single-monomer MSD가 중간 시간 영역에서 $t^{1/2}$ 로 자라는 것($H = 1/4$)이 대표적 예다.

### Contrast with CTRW

같은 subdiffusion($\alpha < 1$)이라도 fBm과 **continuous-time random walk (CTRW)** 는 물리가 완전히 다르다. 이 구분은 single-particle tracking 분석에서 핵심이다.

| | fBm | CTRW |
|---|---|---|
| 느려지는 원인 | increment의 음의 상관 (방향 되돌림) | heavy-tailed waiting time (trapping) |
| displacement 분포 | Gaussian | non-Gaussian |
| ergodicity | ergodic | non-ergodic, aging |
| 그림 | 쉬지 않고 걷되 발자국을 지움 | 가끔 아주 오래 멈춤 |

MSD exponent만으로는 둘을 구별할 수 없으므로, ergodicity breaking parameter, p-variation, Gaussianity test 등으로 판별한다.

## Questions & Insights

- 실제 chromatin locus 궤적이 fBm인가 CTRW인가? MSD exponent는 같아도 ergodicity/Gaussianity 검정으로 갈라야 하며, MINFLUX 같은 고해상도 tracking 데이터가 이 판별의 열쇠가 된다.
- $\nu(n) \to \alpha(\tau)$ forward-map framework에서 fBm은 phenomenological 유효 기술, Rouse/GLE는 그 microscopic 기원. 두 층위가 어떻게 정합적으로 연결되는지가 핵심 질문.
- fGn의 정확한 autocovariance $C(k) = \tfrac{1}{2}(|k+1|^{2H} - 2|k|^{2H} + |k-1|^{2H})$ 는 $|k|^{2H}$ 의 이산 second difference이며, large-$k$ 극한에서 식 (3)으로 수렴한다.

## Related Concepts

- [[Brownian Motion Properties]]
- [[Rouse Model]]
- [[K-matrix Diagonalization (Generalized Rouse Model)]]
- [[MSD exponent from scale-dependent Flory exponent]]
- [[Power_Spectral_Density]]
- [[White Noise and Brownian Motion Relationship]]
- [[Ornstein-Uhlenbeck Process]]
- [[📑 Journal reading - Anomalous diffusion models and their properties]]


