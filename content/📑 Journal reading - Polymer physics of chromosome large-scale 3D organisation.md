---
title: Journal reading - Polymer physics of chromosome large-scale 3D organisation
authors: Andrea M. Chiariello, Carlo Annunziatella, Simona Bianco, Andrea Esposito, Mario Nicodemi
DOI: "[DOI](https://doi.org/10.1038/srep29775)"
date read: 2026-06-15
date published: 2016-07-13
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Polymer physics of chromosome large-scale 3D organisation

## Overview

Hi-C로 측정된 mammalian chromatin의 3D architecture가 classical polymer physics의 **scaling concept**으로 sub-Mb부터 chromosomal scale까지 잘 기술된다는 것을 보인 논문. 핵심 모델은 **Strings & Binders Switch (SBS) model**로, chromatin filament를 self-avoiding walk (SAW) bead chain으로, loop 형성을 diffusing binder와의 specific interaction으로 표현한다. 이 모델로 Sox9, Bmp7, Xist locus의 contact matrix를 95% 이상의 정확도로 재현하고, Xist locus의 ΔXTX deletion 효과를 fitting parameter 없이 예측한다.

> **이 노트의 목표:** 논문을 따라 LAMMPS로 SBS model을 직접 시뮬레이션하기 위해, 모델 정의와 구현 파라미터를 한 곳에 정리한다. 구현에 필요한 정보는 [[#SBS model 시뮬레이션 구현 노트 (LAMMPS)]] 섹션 참고.

## Link to PDF and DOI

- DOI: [10.1038/srep29775](https://doi.org/10.1038/srep29775)
- Local PDF: [[S_Polymer_physics_of_chromosome_large-scale_3D_organisation.pdf]]
- Journal: *Scientific Reports* **6**, 29775 (2016)

## 주요 내용 요약

### 1. SBS model 정의
- Chromatin filament = N개의 bead로 이루어진 **self-avoiding (SAW) polymer chain**.
- 각 bead는 diffusing **binder** (molar concentration $c$)와 attractive interaction을 통해 상호작용. Binder가 bead들을 bridge하여 loop를 형성하고 polymer를 fold시킨다.
- 모든 입자(bead, binder)는 **Langevin equation**을 따르는 Brownian motion. LAMMPS로 Molecular Dynamics 시뮬레이션.
- Control parameter는 두 개: 상호작용 에너지 $E_{int}$, binder 농도 $c$.

### 2. Phase diagram & conformational classes (homopolymer)
- **Coil-globule transition**: $\Theta$-point에서 gyration radius $R_g$가 급격히 collapse.
  - Coil 상태 (낮은 $E_{int}, c$): 열린 conformation, SAW universality class.
  - Globule 상태: 닫힌 compact conformation (open state 부피의 약 1%).
- Globule phase 내부에서 새로운 **order-disorder transition** (binder들의):
  - **Closed disordered**: binder가 homogeneous하게 분포, structure factor $S(k)$가 flat.
  - **Closed ordered**: binder가 ordered aggregate 형성, $S(k)$에 sharp peak.
- Contact probability scaling $P_c(s) \sim s^{-\alpha}$:
  - Coil (SAW): $\alpha \sim 2.1$
  - $\Theta$-point: $\alpha \sim 1.5$
  - Closed ordered: $\alpha \sim 1.0$
  - Closed disordered: 초기 감소 후 long plateau.

### 3. Chromatin = mixture of pure states
- 단일 chromosome은 여러 folding state로 fold된 region들의 **혼합(mixture)**으로 모델링.
- Mixture의 $P(s)$ = pure state들의 contact probability의 **linear combination** (상대 abundance에만 의존).
- Genome-wide Hi-C/TCC 데이터를 0.5Mb~chromosomal scale (3 orders of magnitude)에 걸쳐 fitting.
- 결과: hESC는 open fraction이 가장 높음(~75%), differentiated cell(IMR90)은 ~50%. 짧은 chromosome일수록 open fraction이 높음.

### 4. Higher-order structure & many-body contacts
- Block-copolymer (red/green bead block) 모델 → contact matrix에 **checkerboard pattern** (TAD, metaTAD에 해당하는 hierarchical organization).
- TAD boundary의 **symmetry-breaking effect**: closed phase에서 boundary에 대해 symmetric/asymmetric하게 위치한 site pair가 다른 physical distance를 가짐 (open phase에서는 차이 없음).
- **Many-body contact**: closed state에서 $n$개 site의 동시 contact이 open state보다 exponential하게 빈번. Hi-C는 pairwise만 측정하지만, multi-body interaction이 chromatin의 abundant한 구조적 요소임을 시사.

### 5. Loci-specific modeling (Sox9, Bmp7, Xist)
- Heteropolymer (여러 type의 binding site/binder)로 specific locus 모델링.
- Binding site 배치는 **Simulated Annealing Monte Carlo**로 Hi-C contact matrix와의 거리를 최소화하여 추론 (overfitting 방지용 Bayesian term 포함).
- Sox9 (6Mb, N=2250 beads): Hi-C와 Pearson correlation **95%**, 15 bead types.
- Xist (1.3Mb, N=540 beads): 5C와 96% correlation, 10 bead types. **ΔXTX deletion**을 fitting 없이 구현 → ectopic interaction을 91% correlation으로 예측.
- Bmp7 (2Mb, N=858 beads): 95% correlation, 11 bead types.

## SBS model 시뮬레이션 구현 노트 (LAMMPS)

> Supplementary Materials & Methods 기반. 본인 시뮬레이션 목표를 위해 핵심 구현 정보를 정리.

### 단위계 (reduced units)
- Length unit: bead diameter $\sigma = 1$ (bead와 binder 같은 지름).
- Mass unit: $m = 1$ (bead, binder 동일).
- Energy unit: $\varepsilon = k_B T$.
- Friction (dimensionless): $\zeta = 0.5$.
- MD time step: $\Delta t = 0.012$, stationarity까지 최대 $10^9$ step.

### Potential 1 — FENE bond (연속 bead 사이)
- Kremer-Grest 표준 FENE.
- FENE length constant $R_0 = 1.6\sigma$.
- Spring strength $K = 30\, k_B T / \sigma^2$.

### Potential 2 — Excluded volume (모든 입자 쌍, WCA)
- 순수 repulsive shifted Lennard-Jones = **Weeks-Chandler-Andersen (WCA)** potential.
- Length scale $\sigma$, energy scale $\varepsilon = k_B T$.
- (LAMMPS: `lj/cut` with cutoff $2^{1/6}\sigma$)

### Potential 3 — Bead-binder attractive interaction (cognate끼리만)
- Short-ranged attractive LJ (shifted), cutoff $r_{int}$ 밖에서는 0:

$$
V_{int}(r) = 4\epsilon_{int}\left[\left(\frac{\sigma_{b\text{-}b}}{r}\right)^{12} - \left(\frac{\sigma_{b\text{-}b}}{r}\right)^{6} - \left(\frac{\sigma_{b\text{-}b}}{r_{int}}\right)^{12} + \left(\frac{\sigma_{b\text{-}b}}{r_{int}}\right)^{6}\right], \quad r < r_{int}
$$

- $\sigma_{b\text{-}b} = 1\sigma$ (bead와 binder 반지름 합).
- $r_{int} = 1.3\sigma$ (homopolymer/blockcopolymer), Sox9 등 locus 모델은 $r_{int} = 1.5\sigma$.
- $\epsilon_{int} = \epsilon_{int}^{*}\,\varepsilon$ (dimensionless amplitude $\epsilon_{int}^{*}$가 control parameter).
- Potential 최소값의 절댓값 $E_{int}$를 interaction의 energy scale로 사용:

$$
E_{int} = \left| 4\epsilon_{int}\left[\left(\frac{\sigma_{b\text{-}b}}{r_{int}}\right)^{6} - \left(\frac{\sigma_{b\text{-}b}}{r_{int}}\right)^{12} - \frac{1}{4}\right]\right|
$$

### 초기 조건 & equilibration
1. Polymer를 random SAW configuration으로 초기화 (연속 bead 간격 = 평형 SAW 길이 $0.97\sigma$).
2. Binder는 box 안에 random 배치.
3. Overlap 제거를 위해 hard-core LJ 대신 **soft potential** $V_{soft}(r) = A\left[1 + \cos\left(\frac{\pi r}{2^{1/6}\sigma}\right)\right]$ ($r < 2^{1/6}\sigma$)로 $10^7$ step equilibrate. $A$는 시간에 따라 선형 증가. (LAMMPS: `pair_style soft`, `fix adapt`)
4. 이후 FENE + WCA로 전환, scaling property로 stationary SAW 확인.

### Box & 농도
- Box: periodic boundary, 한 변 $D \propto N^{0.588}\sigma$ (SAW gyration radius 이상).
- Binder 농도: $c = P / (V N_A)$, $V = D^3$, $P$ = box 내 binder 수.

### 물리 단위 매핑 (예시: mESC)
- Bead size: $\sigma \sim \rho_c^{1/3}\, G^{-1/3} D_n$ ($D_n$ = nucleus diameter, $G$ = genome length). mESC에서 $D_n = 3.5\mu m$, $G = 6.5$Gb.
- 예: $L=100$Mb, $N=1000$ → bead당 100kb, $\sigma = 87$nm.
- Time unit: $\tau = \eta(6\pi\sigma^3/\varepsilon)$. 예: $\eta = 0.1$P, $T=300$K, N=1000, L=100Mb → $\tau = 0.03$s.

### Chain 종류별 세팅 요약
| Model | N beads | 용도 | bead types |
|---|---|---|---|
| Homopolymer | 1000 | phase diagram | 1 |
| Blockcopolymer | 1000 (500+500 또는 250×4) | TAD/metaTAD, symmetry breaking | 2 |
| Sox9 heteropolymer | 2250 | locus, $\sigma=26$nm, 40kb Hi-C | 15 |
| Xist heteropolymer | 540 | locus, 20kb 5C | 10 |
| Bmp7 heteropolymer | 858 | locus, 30kb Hi-C | 11 |

- Blockcopolymer 예시 파라미터: $E_{int}$ 0~12 $k_B T$, $c$ up to 215 nmol/l.
- Sox9 Figure 4 조건: $c = 194$ nmol/l, $E_{int} = 12\, k_B T$ (closed disordered state).

### Contact matrix 계산
- Contact threshold: $r_{ij} < \lambda\sigma$, $\lambda = 3.5$ (Sox9 robustness check 시 $\lambda = 10$도 사용).
- Bead pair $(i,j)$가 threshold 안이면 contact으로 count, configuration ensemble에 대해 평균.

## Questions & Insights

- Question or insight 1
- Question or insight 2

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

- [[Link to related concept 1]]
- [[Link to related concept 2]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다. 

- Barbieri et al. (2012) *PNAS* 109, 16173 — SBS model 원본 ([DOI](https://doi.org/10.1073/pnas.1204799109))
- Nicodemi & Prisco (2009) *Biophys. J.* 96, 2168 — SBS의 thermodynamic 기반
- Kremer & Grest (1990) *J. Chem. Phys.* 92, 5057 — FENE + WCA potential (구현의 표준 레퍼런스)
- de Gennes, *Scaling Concepts in Polymer Physics* (1979) — polymer scaling 이론
- Nora et al. (2012) *Nature* 485, 381 — Xist locus 5C 데이터, ΔXTX
