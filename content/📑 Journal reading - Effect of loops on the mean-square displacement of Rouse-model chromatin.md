---
title: "Effect of loops on the mean-square displacement of Rouse-model chromatin"
authors: Tianyu Yuan, Hao Yan, Mary Lou P. Bailey, Jessica F. Williams, Ivan Surovtsev, Megan C. King, Simon G. J. Mochrie
DOI: "[DOI](https://doi.org/10.1103/PhysRevE.109.044502)"
date read: "2026-07-14"
date published: "2024-04-09"
subject: theoretical biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Effect of loops on the mean-square displacement of Rouse-model chromatin

## Overview

Classical Rouse model에 **loop**을 도입했을 때 chromatin의 dynamics가 어떻게 바뀌는지를 exact simulation으로 규명한 논문. Loop을 loop base의 두 monomer를 잇는 추가 spring으로 모델링하여 dynamical matrix $K$에 far-from-diagonal term을 더하고, LEF(loop extrusion factor) model로 loop configuration을 시간 진화시킨다. 이 논문에서는 K-matrix 대각화를 numerical하게, looping dynamics에 따라 바뀌는 K-matrix에 대해 각각 다 풀었다. (즉, 아직 analytical analysis는 안 했다.)

핵심 결과는 두 가지다.
1. Loop은 gene locus의 averaged MSD를 크게 **억제(suppress)** 한다.
2. Loop은 MSD의 stretching exponent $\alpha$를 classical Rouse 값 $1/2$에서 loop density에 따라 **$0.40$–$0.45$** 범위로 낮춘다.

이 $\alpha$ 값은 fission yeast, *E. coli* 등의 single-locus tracking 실험값과 일치한다. 우리 연구의 K-matrix eigenmode 방법과 동일한 수학적 기계장치를 사용하되, K가 **static connectivity matrix가 아니라 dynamical matrix**라는 점이 핵심 차이다.

## Link to PDF and DOI

- DOI: [10.1103/PhysRevE.109.044502](https://doi.org/10.1103/PhysRevE.109.044502)
- Local PDF: [[Effect of loops on the mean-square displacement of Rouse-model chromatin.pdf]]
- Code (MATLAB)
	- https://github.com/bigpaul97/rouse_simulation
	- https://github.com/nilesyan/LEF-Simulation → loop topology만 있어도 monomer position의 covariance matrix를 구하고, polymer의 radius of gyration을 구할 수 있는 코드. 방법은 topology를 이용해 K-matrix(Laplacian matrix)를 만든 뒤 역행렬을 구해서 covariance matrix를 구하는 방식인 거 같다. 

## 주요 내용 요약

### 1. Theoretical framework (Sec. II)
Notation과 부호 규약이 조금 다르지만, 내가 이미 공부한 내용과 같다. 
[[K-matrix Diagonalization (Generalized Rouse Model)]] 이 노트를 이해해야 논문을 이해할 수 있다. 

- Overdamped equation of motion을 matrix form으로 쓴다.
$$
Z\dot{X} = -KX + F
$$
- Dimensionless matrix $J,\,A$ 도입 ($Z=\zeta J$, $K=\kappa A$). $J^{-1}A$를 diagonalize하여 normal coordinate $X'=S^{-1}X$로 decouple.
- **핵심 subtlety**: $S$는 $J^{-1}A$를 diagonalize하지, $A$를 직접 diagonalize하지 않는다. 그런데도 $\{A^{1/2}v_m\}$이 orthogonal임을 증명하여 $S^T A S \equiv D_2$가 diagonal임을 보인다. 덕분에 potential energy가 normal coordinate에서 decouple되고 equipartition을 적용할 수 있다.
$$
\langle X_m'^2 \rangle = \frac{k_B T}{\kappa \lambda_m}
$$
- 여기서 **amplitude를 지배하는 eigenvalue $\lambda_m$ (of $S^T A S$)** 와 **relaxation rate를 지배하는 eigenvalue $\ell_m$ (of $J^{-1}A$)** 는 서로 다르다. 최종 single-bead MSD는
$$
\langle [X_n(t)-X_n(0)]^2 \rangle = \frac{2 k_B T}{\kappa}\sum_{m=1}^{N}\frac{S_{nm}^2}{\lambda_m}\left(1 - e^{-\frac{\kappa}{\zeta}\ell_m t}\right)
$$
- $J = \mathbb{1}$ (uniform friction)인 특수 경우에만 $\lambda_m = \ell_m$으로 일치한다.



### 2. Classical Rouse 재현 (Sec. II C)
- Loop이 없으면 early-time에서 $\text{MSD} = 2D t^{1/2}$, $\alpha = 1/2$, $D = k_B T/\sqrt{\pi \zeta \kappa}$를 정확히 재현.
- Boundary condition(free/periodic/fixed)에 관계없이 $\text{MSD} = \frac{k_B T}{\sqrt{\pi \kappa}}\sqrt{t/\tau_p}$ 형태는 불변.

### Rouse model with loops (Sec. II D)
Fig 1에서 묘사한 것과같이, looping에 의한 harmonic interaction을 K-matrix에 추가해준다. 

#### Figure 1
![[Pasted image 20260714115719.png]]
### 3. Loop의 효과 (Sec. IV A)
- CTCF model, random loop model 모두 loop이 MSD를 크게 억제.
- $\alpha$: CTCF model은 plateau $\approx 0.45$, random loop model은 $0.45 \to 0.4$로 continuous하게 감소. LEF 수가 많을수록 억제 심하고 $\alpha$의 limiting value $\approx 0.43$. → [[#Figure 5]]
- **Loop extrusion dynamics 자체는 영향이 거의 없다**: static loop과 dynamic loop 결과가 사실상 동일. 이유는 ==polymer relaxation time(Rouse time$\tau_p \sim 0.9$ s)이 loop reconfiguration timescale보다 훨씬 짧아, loop이 "얼어붙은" 것처럼 보이는 **timescale separation(adiabatic)** 이 성립하기 때문.== → [[#Figure 8]]

#### Figure 5
![[Pasted image 20260715123016.png]]
파란 건 CTCF model, 초록색 random loop model

#### Figure 6
![[Pasted image 20260715123445.png]]
선의 모양에 따라 boundary condition이 다름
solid → free
dashed → periodic
dotted → fixed
색에 따라 looping model이 다름
red → no loop
blue → CTCF
green → random looping

#### Figure 7
![[Pasted image 20260715124120.png]]
Simulated MSDs of Rouse-model polymers with periodic boundary conditions for the CTCF model with different numbers of LEFs

#### Figure 8
![[Pasted image 20260715124602.png]]
노란 라인이 static loop
파란 라인이 dynamic loop
별 차이 없다. 


### 4. Static properties (Sec. IV B)
- Loop size와 backbone segment length 분포가 large scale에서 approximately **exponential** → characteristic length scale이 존재 → 이 polymer는 **fractal이 아니다**. → [[#Figure 9]]
- 그럼에도 large $N$에서 $R_G \propto N^{1/2}$, monomer density $\propto N^{-1/2}$ → asymptotic하게는 **Gaussian ($\nu = 1/2$)**. 단, short scale에서 $R_{EE}^2$가 sublinear (loop에 의한 국소적 compaction).

#### Figure 9

![[Pasted image 20260715131344.png]]

(a) Loop size distribution, (b) backbone segment length distribution, and (c) chromatin compaction distribution

#### Figure 10
![[Pasted image 20260715134519.png]]
for chromatin polymers with 24 (cyan, middle solid), 48 (blue, dashed), 72 (magenta, dotted), and 144 (green, dash-dotted) LEFs,


### 5. Rosette와 nonuniform friction (Sec. IV C–E)
- Rosette에서 locus의 dynamics는 loop에 대한 **위치**가 결정: loop **tip**이 MSD 최대(early-time에 loop 없는 polymer처럼 행동), loop **base**가 최소(약 1/2배), backbone은 그 중간(early엔 tip, late엔 base를 닮음). → [[#Figure 12]]
- Lognormal nonuniform friction: individual bead의 spread는 커지지만 **averaged MSD/$\alpha$는 uniform case와 거의 동일**. → [[#Figure 13]]
- Replication factory (rosette + base에 10배 friction): base MSD 크게 감소. Amplitude $\propto 1/\sqrt{\zeta}$ (10배 friction → early-time에 약 3배 감소)이지만, 이 friction 의존성은 long-time에서 약해진다. → [[#Figure 15]]

#### Figure 11
![[Pasted image 20260715134555.png]]

#### Figure 12
![[Pasted image 20260715135541.png]]
yellow → tip
magenta → base
cyan → backbon

#### Figure 13
![[Pasted image 20260715142826.png]]
Friction을 lofnormal distribution으로 각 bead에 배정해서 hetero polymer를 만들었을 때. 


#### Figure 14
![[Pasted image 20260715142833.png]]

#### Figure 15
![[Pasted image 20260715143408.png]]
(a) Shown in blue (dotted) and green (dash-dotted) lines
are the mean MSDs for the loop tips and bases, respectively, of
a rosette polymer in the nonuniform-friction environment, as illustrated
in Fig. 14. Shown in red (solid) and magenta (dashed) lines
are the mean MSDs for the loop tips and bases, respectively, of the
same rosette polymer, but in a uniform-friction envioronment, i.e.
without the region of ten-fold friction shown in Fig. 14.


## Questions & Insights

- Q: 이 논문의 eigenmode MSD 공식이 우리 K-matrix 방법과 같은 것인가?
  A: 수학적 기계장치(eigen-decomposition → mode별 amplitude/relaxation 합산)는 동일하지만 **K의 정체가 다르다**. 여기서 $A$는 시간 진화를 지배하는 *dynamical matrix* (Rouse connectivity + loop spring)이고, HIPPS-DIMES의 K는 contact map에서 역추론한 *static connectivity matrix*다. 이 논문은 mode amplitude를 $\lambda_m$ (of $S^T A S$), relaxation을 $\ell_m$ (of $J^{-1}A$)로 **명시적으로 분리**했는데, 이는 우리가 씨름해 온 amplitude factor 문제(Hamiltonian convention × equipartition의 factor-of-2 상쇄)를 friction matrix $J \neq \mathbb{1}$인 general case로 확장한 깔끔한 reference다. Uniform friction에서 둘이 일치($\lambda_m=\ell_m$)한다는 점도 우리 Rouse control test의 근거와 일관됨.

- Q: 이 model은 non-fractal($\nu\to1/2$)인데도 $\alpha<1/2$가 나온다. 우리 $\nu(n)\to\alpha(\tau)$ framework와 모순 아닌가?
  A: 여기가 가장 흥미로운 지점이다. 표준적으로 fractal polymer에서 $\alpha = 2\nu/(2\nu+1)$이라 하면 $\nu=1/2\Rightarrow\alpha=0.5$, $\nu=1/3\Rightarrow\alpha=0.4$다. 즉 $\alpha=0.4$는 보통 globule-like $\nu\approx1/3$을 요구한다. 그런데 이 논문은 **asymptotic $\nu=1/2$인 Gaussian polymer**에서 loop topology만으로 $\alpha\approx0.4$를 만든다. 겉보기엔 우리 framework와 충돌하지만, **Fig. 10(a)의 short-scale sublinear $R_{EE}^2$** 가 열쇠다. Loop이 intermediate scale에서 국소적으로 $\nu(n)<1/2$를 유도하고, 이 effective $\nu$ 감소가 $\alpha$를 낮춘다고 보면 우리 $\nu(n)$ framework가 오히려 이 mechanism을 **설명**할 수 있다. 즉 "loop이 $\alpha$를 낮춘다"를 "loop이 scale-dependent $\nu(n)$을 만든다"로 재해석하는 것이 우리 프레임워크의 잠재적 기여점이 될 수 있다.
α
- Q: $\Gamma$(mobility prefactor)와 $\alpha$의 독립성 주장을 이 논문이 뒷받침하는가?
  A: 강하게 뒷받침한다. Replication factory section에서 base에 10배 friction을 주면 MSD **amplitude**만 $1/\sqrt{\zeta}$로 바뀌고(local friction = $\Gamma$-계열), $\alpha$를 지배하는 것은 loop **topology**다. 이는 우리가 확립한 "DRB는 $\Gamma$만 올리고 $\alpha$ 불변 / RAD21 depletion(cohesin 교란)만이 loop network를 rewire해 $\alpha$를 바꾼다"와 정확히 같은 구조의 독립 증거다. Lognormal friction이 averaged $\alpha$를 안 바꾼다는 결과도 같은 맥락.

- Q: static/dynamic loop이 같은 결과를 준다는 것의 함의는?
  A: 우리 continuous-$\nu$ ODE의 **adiabatic approximation**과 동일한 timescale separation이다. Polymer가 loop 재배열보다 훨씬 빠르게 relax하므로 loop을 quasi-static으로 취급 가능. 우리 memory에 적힌 adiabatic 실패 조건("binder kinetics가 monomer relaxation과 경쟁할 때")의 **반대편(성립 영역)** 에 이 논문이 위치한다. 우리 framework의 validity 경계를 실증적으로 보여주는 케이스로 인용 가능.

- Q: Marchi–Zhan–Tiana(2023)와 어떻게 연결되는가?
  A: 둘 다 contact/loop이 subdiffusion을 만드는 mechanism을 다룬다. Marchi et al.은 modified relaxation time $\tau_p$ 접근으로 $\alpha=\beta/2$를 예측했으나 simulation과 discrepancy가 있었다(Step 8의 uncontrolled approximation). 반면 이 논문은 근사 없이 dynamical matrix를 **exact diagonalization**하므로, 우리가 지적한 "cosine을 p-independent로 두는 uncontrolled approximation"을 회피한다. 두 논문을 나란히 두면 우리 K-matrix 접근의 rigor 우위를 논증하는 좋은 대조군이 된다.

- Q: 매 time step마다 eigenvalue spectrum이 바뀌는데, MSD를 대체 어떻게 계산한 것인가?
  A: 세 가지 오해를 풀면 명확해진다. **(1) 스펙트럼은 time step마다가 아니라 loop event마다 바뀐다.** Update time step은 1 s 고정이지만 $A$가 바뀌는 건 loop configuration이 실제로 변하는 순간뿐이라, spectrum은 시간에 대해 **piecewise-constant**다. **(2) Dynamic case의 MSD는 closed-form(Eq. 28)으로 계산하지 않았다.** Eq. 28은 단일 고정 spectrum + 모든 mode가 stationary variance $\sigma^2_{X'_m}=k_BT/\kappa\lambda_m$에 있다는 가정 위에서만 성립하므로, loop 있는 경우엔 **no-loop classical Rouse 검증용 theory curve로만** 쓰인다. **(3) 대신 SPT 실험처럼 궤적을 만들고 MSD를 경험적으로 측정한다.** 한 epoch $[t_1,t_3)$ 안에서는 그 configuration의 $S,\ell_m,\lambda_m$으로 exact OU update(Eq. 36) $X'_m(t+\Delta t) = X'_m(t)\,e^{-(\kappa/\zeta)\ell_m \Delta t} + \mathcal{N}(0,1)\sqrt{(k_BT/\kappa\lambda_m)(1 - e^{-2(\kappa/\zeta)\ell_m \Delta t})}$ 로 mode를 진화시키고 $X = S X'$로 실공간 복원. Loop event가 나면 멈추고 **실공간 위치 $X(t_3)$를 그대로 물리적 상태로 넘겨받아** 새 configuration의 basis로 재투영한 뒤 이어간다. 여기서 epoch 경계를 넘어 연속성을 보장하는 것은 **normal coordinate가 아니라 실공간 위치 $X$**다 (basis가 매 epoch 바뀌므로 normal coordinate는 연속일 수 없다). 전체 Rouse 시뮬레이션은 loop event로 잘린 sub-simulation의 연쇄이며, OU update가 고정 spectrum에 대해 임의 $\Delta t$에서 정확하므로 "exact"라 부른다. 이 방법이 물리적으로 잘 작동하는 근거는 다시 **timescale separation**이다: epoch 길이($\sim10^3$ s) $\gg \tau_p\approx0.9$ s이므로 각 epoch 안에서 polymer가 새 $\lambda_m$이 정하는 equilibrium으로 충분히 relax한다 (Fig. 4의 potential energy가 equipartition 값 $600\,k_BT$ 근처에 계속 머무는 것이 그 증거). 최종적으로 MSD는 시계열 $X_n(t)$에서 time origin 평균 + 30회 독립 시뮬레이션 평균으로 구하고, $\alpha$는 Eq. 37의 log-log 국소 기울기로 뽑는다.

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

- [[Rouse model]]
- [[Loop extrusion factor model]]
- [[Mean-square displacement]]
- [[Anomalous subdiffusion]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- Bailey et al., *Loops and the activity of loop extrusion factors constrain chromatin dynamics*, Mol. Biol. Cell 34, ar78 (2023) — 이 논문의 실험적 짝. [DOI](https://doi.org/10.1091/mbc.E23-04-0119)
- Weber, Theriot & Spakowitz, *Subdiffusive motion of a polymer composed of subdiffusive monomers*, Phys. Rev. E 82, 011913 (2010) — viscoelastic 배경으로 $\alpha<1/2$ 설명. [DOI](https://doi.org/10.1103/PhysRevE.82.011913)
- Fudenberg et al., *Formation of chromosomal domains by loop extrusion*, Cell Rep. 15, 2038 (2016) — CTCF model의 원전. [DOI](https://doi.org/10.1016/j.celrep.2016.04.085)
