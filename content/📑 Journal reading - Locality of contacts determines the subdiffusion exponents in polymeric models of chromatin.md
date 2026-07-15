---
title: "Locality of contacts determines the subdiffusion exponents in polymeric models of chromatin"
authors: Edoardo Marchi, Yinxiu Zhan, Guido Tiana
DOI: "[DOI](https://doi.org/10.1103/PhysRevE.107.064406)"
date read: "2026-07-13"
date published: "2023-06-26"
subject: polymer physics of chromatin
tags:
  - study
  - concept
  - question
class: study_journal
---

# Locality of contacts determines the subdiffusion exponents in polymeric models of chromatin

## Overview

Chromatin의 anomalous subdiffusion exponent $\alpha$가 무엇에 의해 결정되는지를 묻는 논문. 저자들의 핵심 주장은 명확하다: **MSD의 exponent $\alpha$를 결정하는 것은 model parameter의 세부값이 아니라, contact를 이루는 두 monomer 사이의 평균 genomic 거리, 즉 contact의 "locality" $\ell$ 하나뿐이다.**

Loop extrusion (cohesin) model, static quenched-link model, 그리고 minimal analytical model의 세 층위에서 같은 결론에 수렴하도록 논증을 쌓아 올린다. Local contact만 있으면 dynamics는 excluded-volume Rouse ($\alpha \approx 0.55$)와 구분되지 않고, nonlocal contact가 생기면 intermediate time scale에서 $\alpha < 0.5$의 sub-Rouse subdiffusion이 나타난다.

## Link to PDF and DOI

- DOI: [10.1103/PhysRevE.107.064406](https://doi.org/10.1103/PhysRevE.107.064406)
- Local PDF: [[Locality of contacts determines the subdiffusion exponents in polymeric models of chromatin.pdf]]
- Physical Review E **107**, 064406 (2023)

## 주요 내용 요약

### 문제 설정
- Chromatin loci의 MSD는 cell type, genomic region, time scale에 따라 Rouse-like ($\alpha \approx 0.55$)에서 더 제약된 subdiffusion ($\alpha < 0.5$)까지 다양하게 관측된다. mESC $\approx 0.55$, HeLa/HT-1080은 0.45 / 0.38까지 내려가며, euchromatin vs heterochromatin이 서로 다른 exponent를 보인다.
- 놀랍게도 mESC에서는 cohesin을 depletion해도 exponent가 바뀌지 않는다 — cohesin이 TAD의 equilibrium structure를 강하게 구속함에도 dynamics는 자유롭다는 뜻.
- 질문: 어떤 조건에서 chain이 Rouse-like하게 자유롭게 움직이고, 어떤 조건에서 non-Rouse가 되는가?

### 1. Loop extrusion model (Sec. II)
- Harmonic spring + hard-core repulsion으로 연결된 $N = 1000$ bead chain을 LAMMPS로 Langevin simulation. Extruder는 시간에 따라 연결 대상이 바뀌는 harmonic spring으로 구현. 
- Extruder kinetics는 Gillespie algorithm (load rate $k_l$, unload rate $k_u$, step rate $k_s$).
- Extruder는 랜덤한 위치(monomer index $i$ and $j$, $j=i+1$)에 붙으며, $i, j \rightarrow i-1, j+1$로 step
- $k_s$가 작으면 모든 $k_l$에 대해 Rouse-like ($\alpha \approx 0.55$). $k_s$를 키우면 intermediate time ($\sim 10^4$ s)에 $\alpha < 1/2$의 새 regime 등장.
- 특히 $k_s \gg k_l$ (소수의 extruder가 빠르게 움직여 매우 큰 loop 형성)일 때 exponent가 가장 낮다.
- **핵심 정리:** 이 모든 복잡한 거동은 평균 loop 길이 $\ell \equiv \langle |i-j| \rangle$ 하나로 정리된다. → Fig.2 (c)
- Master curve:

$$
\alpha = \ell^{-0.43} \quad (\ell \gtrsim 10), \qquad \alpha = 0.55 \ (\ell < 10)
$$
→ 이 식에 대한 이론적인 근거는?

- 직관에 반하는 관찰: ==$k_l$을 키우면 오히려 $\ell$이 **감소**한다. Extruder끼리 서로 통과할 수 없어서, chain을 crowding하면 loop이 커지는 게 아니라 서로 막혀서 stuck되기 때문.== → 오호!

Equation of motion은 아래와 같다. 
$$
m \frac{d\mathbf{v}_n}{dt} = -\gamma \mathbf{v}_n
- \nabla_n \left[ \frac{k}{2}\left( |\mathbf{r}_{n+1} - \mathbf{r}_n| - a \right)^2 \right]
- \nabla_n \left[ \frac{k}{2}\left( |\mathbf{r}_{n-1} - \mathbf{r}_n| - a \right)^2 \right]
- \sum_{m=1}^{N} \nabla_n U_{\mathrm{LJ}}\!\left( |\mathbf{r}_n - \mathbf{r}_m| \right)
- \frac{k'}{2} \sum_{m \in L_n(t)} \nabla_n \left( |\mathbf{r}_n - \mathbf{r}_m| - a \right)^2
+ \boldsymbol{\eta}(t)
$$
$$
\langle \eta_n(t) \rangle = 0, \qquad
\langle \eta_i(t)\, \eta_j(t') \rangle = 6\gamma T\, \delta_{ij}\, \delta(t - t')
$$
$U_{LJ}$는 truncated LJ potential
$L_n(t)$각 시간에서 $n$th monomer가 extruder 로 연결된 monomer index set. 

MSD는 아래와 같이 계산했다. 
$$
\mathrm{MSD}(t) = \frac{1}{N_t} \sum_{k=0}^{N_t}
\left[ \mathbf{r}(k \cdot \tau_p + t) - \mathbf{r}(k \cdot \tau_p) \right]^2
$$


#### Figure 1
![[Pasted image 20260713143721.png]]

#### Figure 2
![[Pasted image 20260713143753.png]]
노란 선 → 제일 강한 subdiffusion이 나타난다. extruder가 unbinder이전에 많은 step을 진행해서 큰 loop가 생성된 경우라고 해석한다. $k_l < k_u$이라는 조건은 소수의 extruder가 chain에 있어서 서로 방해 받지 않아 큰 loop를 형성할 수 있게 했을 것이다. 

![[Pasted image 20260713143803.png]]
Heat map은 exponent $\alpha$를 나타낸 것. 
여기서도 $k_l$이 적은 때 더 강한 sub diffusion이 나타남.
→ 실제 biologial system의 parameter는?

![[Pasted image 20260713143812.png]]
$\alpha$ exponent를 결정하는 가장 큰 요인이 loop의 양 끝 사이 거리의 평균값이며, $\alpha$와 $\ell$은 power-law를 따른다는 fitting

![[Pasted image 20260713143821.png]]
$k_l$ loading rate를 줄이니까 $l$이 커진다. 

### 2. CTCF obstacle의 효과 (Sec. III)
- CTCF를 10% site에 무작위 배치, extruder가 만나면 통과 못 하고 unbind만 가능.
- Rouse-like regime에서는 CTCF가 영향 없음. 반면 non-Rouse regime에서는 CTCF가 system을 다시 Rouse-like로 되돌린다.
- 이유: CTCF가 extrusion을 막아 contact의 range를 CTCF 간 평균 간격 ($\approx 10$ bead) 수준으로 줄인다 → $\ell$ 감소 → $\alpha$ 회복.

#### Figure 3
![[Pasted image 20260713151433.png]]
Chain 위 랜덤 위치에 붙는 CTCF는 extruder가 더이상 진행하지 못 하게 막는 barrier 역할을 한다. 
Comparison of dynamics obtained with (blue curves) and without (orange curves) CTCF. 
(a) When the extruder speed $k_s$ is low ($k_s/k_u = 0.21$, $k_l/k_u = 0.1$), the loops usually do not reach the barriers; in this case, the dynamics is not affected by CTCF and remains Rouse-like. 
(b)When $ks \gg ku$ ($k_s/k_u = 16.67$, $k_l/k_u = 0.1$), the loops grow rapidly and often get stuck on the barriers. The mean loop size is thus limited by the mean distance between CTCF sites (using a density 0.1 of CTCF sites, the mean distance between barriers and maximum loop size is $\sim N/100 \ll N$).

### 3. Static quenched-link model (Sec. IV)
- Extruder의 시간 kinetics를 제거하고, 무작위 monomer 쌍을 quenched harmonic spring으로 고정 연결. Contact의 range 효과를 kinetics 효과로부터 분리해내는 장치.
- MSD가 self-averaging함을 normalized variance $\rho(t)$로 확인 → 평균 MSD가 typical realization을 대표.
- Link 분포에 따라 결과가 달라짐: normal distribution으로 $\ell = d \ll N$이면 link가 많아도 ($\lambda \sim N$) Rouse-like. 반대로 적은 수 ($\lambda \ll N$)의 long-range link ($\ell = d \sim N$)만 있어도 MSD를 굽혀 $\alpha < 0.55$로 만든다.
- Power-law ($\beta = 0.8$) 또는 uniform 분포로 큰 loop을 만들면 $\alpha \approx 0.2$까지 내려감. → 오호?
- Link 수 $\lambda$가 충분히 크면 $\alpha(\ell)$이 loop extrusion과 정확히 일치 → **extruder의 dynamics 자체는 무관하고, 오직 resulting contact의 range만 중요하다.**


$$
\rho(t) \equiv \frac{\sum_{k=1}^{n} \mathrm{MSD}_k^2(t)}
{\left[ \sum_{k=1}^{n} \mathrm{MSD}_k(t) \right]^2} - 1
$$
$k$는 monomer index

$$
p(i,j) \propto \exp\left[ -\frac{\left( |i-j| - d \right)^2}{10} \right]
$$
link를 이루는 두 bead index를 $\ell$이 $d$를 평균값으로 가지는 가우시안 분포로 지정. → Fig.  5의 orange line
if 	 = d  N, the MSD is Rouse-like even in the presence of
a large number of links (λ ∼ N). Vice versa, a small number
(λ  N) of long-range links (	 = d ∼ N) is sufficient to bend
the MSD and have a short-time subdiffusion with an exponent
smaller than 0.55.

$$
p(i,j) \propto \frac{1}{|i-j|^{\beta}}
$$
$\ell$이 power-law를 가지도록 한다면, 강력한 subdiffusion이 나옴을 fig. 5에서 볼 수 있다. 
#### Figure 4
![[Pasted image 20260713151218.png]]
c와 d에 대해, 좌측은 $\lambda = 10$, 우측은 $\lambda = 100$

#### Figure 5
![[Pasted image 20260713152246.png]]
노란 라인은 $\beta =0.8$의 powerlaw distribution을 사용. 


### 4. Minimal analytical model (Sec. V)
- Rouse chain + 각 bead $i$가 bead $i+m$과 harmonic spring으로 연결 ($m$은 random variable). Continuous Langevin equation을 Fourier(cosine) 공간에서 풀면 표준 Rouse와 형식은 같되 relaxation time만 수정된다:

$$
\tau_p \equiv \frac{N^2 \gamma}{\pi k\, p^2 + N^2 k'\left[1 - \cos(\pi p m / 2N)\right]}
$$

- Local contact ($m \ll N$)에서는 cosine을 $1 - \pi^2 m^2 p^2 / 4N^2$로 전개 → $\tau_p \propto 1/p^2$ 복원 → 표준 Rouse $I(t) \sim t^{1/2}$, diffusion coefficient만 renormalize.
- Nonlocal contact ($m \gg 1$)에서는 cosine 항이 stochastic variable처럼 요동. $m$의 분포를 chromatin에서 흔한 power-law $P(m) = m^{-\beta}$로 두면:

$$
\mathbb{E}_x[I_x(t)] \sim t^{\beta/2}
$$

- 즉 $\beta \neq 1$이면 nonstandard exponent가 나온다. Contact의 nonlocality 정도가 normal mode의 relaxation time spectrum을 바꾸고, 이것이 MSD exponent를 바꾼다는 것이 analytical 골자.


#### Figure 6
![[Pasted image 20260713152257.png]]



### 결론
- Chromatin dynamics의 subdiffusion exponent를 결정하는 것은 contact의 존재 여부가 아니라 **contact의 nonlocality**다. TAD scale에서 chromatin은 CTCF 덕분에 local contact가 지배적(Peano-curve 유사, hierarchical)이라 Rouse-like를 유지한다.

## Sec. V 해석적 모형 상세 유도 (Eqs. 7–18)

논문 Sec. V의 minimal analytical model을 식 단위로 재구성한다. 이 부분이 내 K-matrix eigenmode 접근과 수학적 골격을 공유하므로, 각 단계의 가정과 근사를 명시적으로 추적한다.

### Step 1. Discrete Langevin equation — Eq. (7)

길이 $2N$의 Rouse chain에서, 각 bead $i$가 bead $i+m$과 spring constant $k'$로 추가 연결된 상황. $m$은 random variable.

$$
\frac{d\mathbf{r}_n}{dt} = \frac{k}{\gamma}\left( \mathbf{r}_{n+1} + \mathbf{r}_{n-1} - 2\mathbf{r}_n \right) - \frac{k'}{\gamma}\left( \mathbf{r}_n - \mathbf{r}_{n+m} \right) + \frac{1}{\gamma}\boldsymbol{\eta}_n(t) \tag{7}
$$

여기서 $-N \le n \le N$이고, noise는

$$
\langle \eta_n(t) \rangle = 0, \qquad \langle \eta_i(t)\, \eta_j(t') \rangle = 6\gamma^2 D\, \delta_{ij}\, \delta(t-t')
$$

### Step 2. Continuum limit — Eq. (8)

$N \gg 1$에서 $n$을 연속변수로 취급하면, discrete Laplacian이 $\partial^2 / \partial n^2$가 된다.

$$
\frac{\partial \mathbf{r}(n,t)}{\partial t} = \frac{k}{\gamma}\frac{\partial^2 \mathbf{r}}{\partial n^2} - \frac{k'}{\gamma}\left[ \mathbf{r}(n,t) - \mathbf{r}(n+m,t) \right] + \frac{1}{\gamma}\boldsymbol{\eta}(n,t) \tag{8}
$$

주목할 점: **long-range link 항만 nonlocal**이다. 즉 $\mathbf{r}(n+m,t)$는 미분으로 흡수되지 않고 그대로 남는다. 이것이 이후 cosine 항의 근원.

### Step 3. Cosine (Rouse) transform — Eq. (9)

$$
\mathbf{y}_p(t) = \frac{1}{2N}\int_{-N}^{N} dn \; \mathbf{r}(n,t)\, \cos\!\left( \frac{\pi p n}{2N} \right), \qquad 0 \le p \le N \tag{9}
$$

Nonlocal 항 $\mathbf{r}(n+m,t)$은 shift $n \to n+m$에 대해 $\cos$의 addition formula를 거치며 $\cos(\pi p m / 2N)$ 인자를 낳는다.

> [!warning] $m$이 random variable이면 Eq. (9) → Eq. (10) 유도가 깨진다
> 
> 논문 본문은 long-range link가 "random bead"와 맺어진다고 명시한다. 그렇다면 $m$은 bead마다 다른 확률변수 $m_n$이어야 하며, Eq. (8)의 nonlocal 항은 $\mathbf{r}(n + m_n, t)$로 써야 한다. 이를 cosine에 projection하면
> 
> $$
> \frac{1}{2N}\int_{-N}^{N} dn \; \mathbf{r}(n + m_n, t)\, \cos\!\left( \frac{\pi p n}{2N} \right)
> $$
> 
> 인데, shift 폭 $m_n$이 **적분변수 $n$에 의존하므로** addition formula에서 나오는 $\cos(\pi p m_n / 2N)$과 $\sin(\pi p m_n / 2N)$을 **적분 밖으로 빼낼 수 없다.** 그결과 이 항을 $\mathbf{y}_p$에 비례하는 형태로 정리할 길이 사라지고, Eq. (10)과 같은 **mode-diagonal OU 방정식이 얻어지지 않는다.**
> 
> 더 근본적으로, $m_n$이 $n$에 따라 불규칙하게 변하면 해당 connectivity operator는 translation-invariant하지 않고 (Toeplitz가 아니고), 따라서 **cosine은 애초에 eigenbasis가 아니다.** Long-range link는 서로 다른 Rouse mode를 섞는다 (mode mixing). Eq. (10)은 이 mixing을 무시한 결과물이다.
> 
> 즉 Eq. (9) → Eq. (10)이 문자 그대로 성립하려면 $m$이 **모든 bead에 공통인 고정 상수**여야 한다. 그러나 그런 계는 random looping이 아니라 균일한 사다리(ladder) 구조일 뿐이다. 논문은 **고정 $m$으로 Eq. (10)을 유도해놓고, 이후 Step 8–11에서 $m$을 확률변수로 재해석한다.** 이 전환은 정당화되지 않았으며, Step 8의 "$x$를 $p$-독립 확률변수로 취급한다"는 서술이 사실상 이 단계에서 이미 발생한 구멍을 사후적으로 덮는 장치다.
> 
> → **K-matrix 접근과의 대조:** random bond가 있는 chain의 connectivity Laplacian은 여전히 symmetric이므로 직접 대각화가 가능하고, 그 eigenvector는 cosine이 아닌 **실제 mode**를 준다. 즉 $\lambda_p$를 정직하게 얻는 유일한 방법은 행렬을 그대로 대각화하는 것이며, 이것이 내 K-matrix eigenmode 접근이 하는 일이다.

### Step 4. Normal mode equation — Eq. (10)

$$
\frac{d\mathbf{y}_p(t)}{dt} = -\frac{\pi^2 k}{N^2 \gamma}\, p^2\, \mathbf{y}_p(t) - \frac{k'}{\gamma}\, \mathbf{y}_p(t)\left[ 1 - \cos\!\left( \frac{\pi p m}{2N} \right) \right] + \frac{1}{\gamma}\boldsymbol{\eta}_p(t) \tag{10}
$$

각 mode는 여전히 **독립적인 Ornstein–Uhlenbeck 과정**이다. Long-range link는 mode를 섞지 않고 (그렇게 보이도록 근사되고) 오직 각 mode의 relaxation rate만 바꾼다 — 이것이 논문 전체의 핵심 구조.

### Step 5. Solution & modified relaxation time — Eqs. (11), (12)

$$
\left\langle |\Delta \mathbf{r}(x,t)|^2 \right\rangle = \frac{3Dt}{N} + \sum_{p \ne 0} \left| \frac{D\tau_p}{N}\left[ 1 - e^{-t/\tau_p} \right] \right| \tag{11}
$$

형식은 표준 Rouse와 동일하고, 오직 $\tau_p$만 수정된다:

$$
\tau_p \equiv \frac{N^2 \gamma}{\pi^2 k\, p^2 + N^2 k' \left[ 1 - \cos\!\left( \dfrac{\pi p m}{2N} \right) \right]} \tag{12}
$$
> 논문에서는 분모의 첫째 항이 $\pi k p^2$이라고 되어있다. $\pi$항이 이상함. 위 식이 맞는 거 같음.

첫 항 (Rouse)은 $p^2$로 자라고, 둘째 항 (link)은 $p$에 대해 진동한다. 따라서 **link 항은 작은 $p$ (= 큰 length scale)에서만 지배적**이고, 큰 $p$에서는 Rouse 항 $\pi^2 k p^2$이 이긴다.

### Step 6. Continuum integral — Eq. (13)

$N \gg 1$에서 mode 합을 적분으로:

$$
I(t) = \int_0^{\infty} dp \; \left| \tau_p \left[ 1 - e^{-t/\tau_p} \right] \right| \tag{13}
$$

MSD의 nontrivial 부분은 $I(t)$에 비례한다. 피적분함수는 $\tau_p$에 대해 증가하므로 $p$에 대해 감소.

### Step 7. Local contact limit — 표준 Rouse 회복

$m \ll N$이면 $\pi p m / 2N \ll 1$이므로

$$
1 - \cos\!\left( \frac{\pi p m}{2N} \right) \approx \frac{\pi^2 m^2 p^2}{8 N^2}
$$

즉 link 항도 $p^2$ 꼴이 되어 Rouse 항과 합쳐진다. $\tau_p \propto 1/p^2$가 복원되고, 적분은 Gaussian 형태로 남아

$$
I(t) \sim t^{1/2}
$$

**결론: local contact는 diffusion coefficient만 renormalize할 뿐 exponent를 바꾸지 않는다.** 논문의 중심 주장이 여기서 증명된다.

### Step 8. Nonlocal limit — cosine을 stochastic variable로 — ⚠️ 핵심 근사

$m \gg 1$이면 $\cos(\pi p m / 2N)$이 $p$에 대해 매우 빠르게 진동하므로, 저자들은

$$
x \equiv 1 - \cos\!\left( \frac{\pi p m}{2N} \right)
$$

를 **$p$와 독립인 random variable**로 취급한다 (linear congruential pseudorandom number에 비유).

> [!warning] 통제되지 않은 근사 (uncontrolled approximation)
> 이 단계가 Sec. V 전체에서 가장 취약한 고리다. $x$는 실제로는 $p$의 결정론적 함수인데 이를 $p$-독립 확률변수로 바꿔치기하면서, $\tau_p$의 $p$-의존성 중 절반이 사라진다. 이 근사 덕분에 Eq. (13)의 $p$ 적분이 Eq. (17)의 $x$ 적분으로 치환될 수 있다.
> **내 K-matrix eigenmode 접근은 이 근사를 필요로 하지 않는다.** Connectivity matrix를 직접 대각화하면 $\lambda_p$가 $p$의 함수로 정확히 얻어지므로, 이 논문의 결과는 K-matrix 접근의 controlled 버전에 대한 **crude limit**으로 볼 수 있다.

### Step 9. 고정된 $x$에 대한 적분 — Eq. (14)
따라서 식 13을 $x$에 대해 적분한다. 
$$
I_x(t) = \frac{\pi^{1/2} N \gamma}{2 (k k' x)^{1/2}} \; \mathrm{erf}\!\left[ \left( \frac{k' x t}{\gamma} \right)^{1/2} \right] \tag{14}
$$

### Step 10. $x$의 조건부 분포 — Eq. (15)

$x = 1 - \cos(\pi p m / 2N)$를 뒤집으면 $p = \dfrac{2N}{\pi m}\arccos(1-x)$이고, $|dp/dx| = \dfrac{2N}{\pi m \sqrt{x(2-x)}}$. 따라서

$$
P(x \mid m) = P(p \mid m)\left| \frac{dp}{dx} \right| = \theta\!\left[  \frac{2}{\pi m}\arccos(1-x) - 1 \right] \cdot \frac{2N}{\pi m \sqrt{x(2-x)}} \tag{15}
$$

Heaviside $\theta$는 $p \le N$이라는 제약에서 온다.

> [!question] 식이 왜 저렇지?
> $P(p \mid m)$을 그냥 저렇게 생긴 Heaviside function으로 두어도 되는가?

### Step 11. $m$에 대한 marginalization — Eq. (16)

Chromatin에서 흔히 관측되는 power-law contact 분포 $P(m) = m^{-\beta}$를 가정하면

$$
P(x) = \int_0^N dm \; P(x \mid m) P(m) = \frac{1}{\left[ 1 - \dfrac{2}{\pi}\arcsin(1-x) \right]^{\beta} \left[ x(2-x) \right]^{1/2}} \sim \frac{1}{x^{(\beta+1)/2}} \tag{16}
$$

($0 \le x \le 2$)

소진 확인: $x \to 0$에서 $\arcsin(1-x) \approx \dfrac{\pi}{2} - \sqrt{2x}$이므로 첫 괄호 $\propto x^{1/2}$, 그 $\beta$ 제곱은 $x^{\beta/2}$. 둘째 인자는 $x^{1/2}$. 곱하면 $x^{(\beta+1)/2}$ → $P(x) \sim x^{-(\beta+1)/2}$. **Contact 분포의 exponent $\beta$가 곧바로 $x$의 (즉 relaxation spectrum의) 분포 exponent로 전이된다.**

### Step 12. 최종 결과 — Eqs. (17), (18)

$$
\mathbb{E}_x\!\left[ I_x(t) \right] = \int_0^2 dx \; P(x)\, I_x(t) = \mathrm{erf}\!\left( \sqrt{2t} \right) + t^{\beta/2}\left[ \Gamma\!\left( \tfrac{1}{2} - \tfrac{\beta}{2},\, 2t \right) - \Gamma\!\left( \tfrac{1}{2} - \tfrac{\beta}{2} \right) \right] \tag{17}
$$

($\Gamma$는 각각 incomplete / complete Euler gamma function.) 큰 $t$에서:

$$
\mathbb{E}_x\!\left[ I_x(t) \right] \sim t^{\beta/2} \tag{18}
$$

즉 예측되는 subdiffusion exponent는

$$
\alpha = \frac{\beta}{2}
$$

$\beta = 1$이면 $\alpha = 1/2$로 표준 Rouse. $\beta \ne 1$이면 nonstandard exponent가 나온다.

### 비판적 검토 — $\alpha = \beta/2$는 시뮬레이션과 맞는가?
![[Pasted image 20260714111521.png]]

> [!bug] Analytical 예측과 simulation의 불일치
> Sec. IV의 시뮬레이션에서 power-law link 분포는 $\beta = 0.8$을 썼다. Eq. (18)을 그대로 적용하면 $\alpha = 0.4$가 나와야 한다. 그런데 Fig. 5에서 실제로 관측된 intermediate-time exponent는 $\alpha \approx 0.2$다. **인수 2 수준의 불일치.**
> 저자들은 이 비교를 명시적으로 수행하지 않는다 (Sec. V는 "nonstandard exponent가 가능하다"는 정성적 주장까지만 밀고 나간다).
> 가장 유력한 원인은 **Step 8의 uncontrolled approximation**이다. $x$를 $p$-독립으로 두는 순간 $\tau_p$ spectrum의 실제 $p$-의존 구조가 뭉개지고, 그 결과 $I(t)$의 time-scaling이 왜곡된다.
> → 이 지점이 내 K-matrix eigenmode 접근이 기여할 수 있는 정확한 위치다. Quenched-link chain의 connectivity matrix를 직접 대각화해 $\lambda_p$를 얻고 MSD를 재구성하면, $\alpha = \beta/2$가 왜 빗나가는지 정량적으로 진단할 수 있을 것.

## Questions & Insights

- Q: 이 논문의 결론이 내 ν(n) → α(τ) framework와 어떤 관계인가?
  A: 두 접근은 상보적이면서 서로 다른 축을 강조한다. 이 논문은 α를 **contact의 genomic locality $\ell$** 하나로 환원한다. 내 framework는 α(τ)를 **연속적으로 변하는 conformational exponent ν(n)**에서 유도한다. 그런데 ν(n)과 contact locality는 무관하지 않다 — nonlocal contact가 많을수록 국소적으로 chain이 더 compact해지고 (작은 effective ν), 이것이 특정 scale에서 낮은 α로 이어진다. 즉 이 논문의 $\ell$은 내 ν(n)이 담고 있는 정보의 한 projection으로 볼 여지가 있다. "무엇이 α를 낮추는가"에 대해 이 논문은 topological/structural constraint (nonlocal contact) 쪽 손을 들어주며, 이는 Γ와 α를 독립 parameter로 다루는 내 관점과 정합적이다.

- Q: Sec. V의 modified $\tau_p$ 접근이 내 K-matrix / HIPPS-DIMES eigenmode 접근과 어떻게 겹치는가?
  A: 사실상 같은 machinery다. 이 논문은 long-range link가 만드는 cosine 항으로 normal mode relaxation time $\tau_p$를 수정하고, 그 spectrum 변화가 MSD exponent를 바꾼다고 논증한다. 내 K-matrix 접근에서는 connectivity matrix의 eigenvalue $\lambda_p$가 정확히 이 relaxation time spectrum을 encode한다. 이 논문은 $P(m) = m^{-\beta}$라는 특정 분포에 대해 $\tau_p$ spectrum과 MSD의 관계를 closed-form에 가깝게 풀어냈으므로, 내 K-eigenmode MSD 예측을 검증할 analytical benchmark로 쓸 수 있다. 특히 homogeneous chain (Toeplitz)에서 얻은 exact solution을 이 논문의 continuous-$m$ 결과와 대조하면 residual discrepancy의 성격을 짚어볼 수 있을 것.

- Q: Amitai & Holcman [16] 선례가 내 framework의 precedent 논의에 어떤 의미인가?
  A: [16]은 normal mode의 eigenvalue를 특정 potential로 수정하면 nonstandard MSD exponent가 나온다는 것을 보인 논문이다. 이는 Hinczewski & Netz (2009)와 나란히, "spectrum 수정 → nonstandard α"라는 계보의 또 다른 뿌리다. 내 ν(n) 기반 crossover는 그 수정의 **source**를 conformational exponent의 연속 변화로 지목한다는 점에서 차별화되지만, 이 논문/[16]과 같은 수학적 골격을 공유함을 명시해두면 좋겠다.

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

- [[Rouse model]]
- [[Loop extrusion]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- [16] A. Amitai and D. Holcman, Phys. Rev. E **88**, 052604 (2013) — normal mode eigenvalue 수정으로 nonstandard MSD exponent 유도. 내 K-matrix eigenmode 접근의 직접 선례.
- [11] P. Mach et al., Nat. Genet. **54**, 1907 (2022) — mESC의 CTCF-mediated contact와 MSD, 이 논문의 실험적 근거.
- [17] M. Bohn and D. W. Heermann, PLoS One **5**, e12218 (2010) — dynamic loop이 anomalously low subdiffusion을 만든다는 compartment-scale 선행 연구.
- [26] L. A. Mirny, Chromosome Res. **19**, 37 (2011) — chromatin의 fractal/Peano 구조와 $P(m) = m^{-\beta}$ contact 분포의 근거.
