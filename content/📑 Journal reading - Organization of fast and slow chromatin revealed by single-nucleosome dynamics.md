---
title: Organization of fast and slow chromatin revealed by single-nucleosome dynamics
authors: S. S. Ashwin, Tadasu Nozaki, Kazuhiro Maeshima, Masaki Sasai
DOI: "[DOI](https://doi.org/10.1073/pnas.1907342116)"
date read: "2026-07-07"
date published: "2019-10-01"
subject: biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Organization of fast and slow chromatin revealed by single-nucleosome dynamics
## 왜 읽었나?

[[260706 Chromatin dynamics 후속연구]]
chromosome loci의 population이 느린 것과 빠른 것으로 나뉜다. 

## Overview

살아있는 HeLa 세포에서 single-nucleosome tracking 데이터를 통계적으로 분석하여, nucleosome의 MSD (mean square displacement) 분포가 **bimodal**하다는 것을 보이고, 이를 근거로 chromatin을 fast/slow 두 종류의 dynamic domain으로 분류한 논문. Nozaki et al. (2017)의 live-cell imaging 데이터를 재분석했고, correlation function 분석과 minimal polymer (ring) model을 통해 이 dynamic domain 구조의 기원을 설명한다.

핵심 아이디어: chromatin은 정적인 구조가 아니라 **유체(fluid)처럼 움직이는 계**이며, 그 안에서도 nucleosome-nucleosome interaction과 cohesin에 의한 tethering 정도에 따라 fast domain(f domain)과 slow domain(s domain)으로 나뉜다는 것.

## Link to PDF and DOI

- DOI: [10.1073/pnas.1907342116](https://doi.org/10.1073/pnas.1907342116)
- 로컬 PDF: [[Organization of fast and slow chromatin revealed by single-nucleosome dynamics.pdf]]

## 주요 내용 요약

### 1. MSD 분포의 bimodality → fast/slow 분류
- 전체 평균 MSD는 $\bar{M} \sim t^{0.5}$ (subdiffusive, $t < 1$ s), $t \sim 1$ s 근처에서 saturate, $t > 1$ s에서 diffusive ($\bar{M} \sim t$)로 전이.
- 개별 nucleosome의 MSD 분포 $P(M,t)$는 $t=0.1$ s에서는 단봉이지만 시간이 지날수록(특히 $t=0.5$ s) 뚜렷한 **2개의 peak**로 갈라짐.
- Noisy trajectory 데이터에서 $P(M,t)$를 얻기 위해 Richardson-Lucy (RL) iterative deconvolution 알고리즘을 사용 (van Hove correlation function을 Gaussian basis로 전개).
- $M^*$ (두 peak 사이의 최소점)를 기준으로 fast ($M_i(0.5\text{s}) \geq M^*$) / slow ($M_i(0.5\text{s}) < M^*$) nucleosome을 정의.
- Fitting 결과: fast nucleosome은 $\beta = 0.69$–$0.88$, slow nucleosome은 $\beta = 0.44$–$0.47$ — **서로 다른 물리적 메커니즘**으로 움직인다는 근거.

### 2. f domain / s domain의 정의 (상관함수 분석)
- Displacement autocorrelation $\eta^a(t)$: $t^* \approx \delta t$에서 부호가 바뀜 → 이웃 nucleosome에 의한 back-scattering (viscoelastic behavior).
- Vibrational mode density $D^a(\omega)$의 Fourier transform에서 $D^a(0) \neq 0$ → **liquid-like behavior**의 신호 (amorphous solid라면 $D^a(0)=0$).
  - $D^f(0) > D^s(0)$: fast nucleosome이 더 fluid.
- Pair correlation function (radial distribution) $g^{ab}(r)$에서 특성 거리 발견:
  - $D^{ss} = 600$ nm (slow-slow), $D^{ff} = 380$ nm (fast-fast)
  - Displacement correlation $\xi^{ab}(r)$로부터 correlation radius $R_c^{ss} \approx 300$ nm, $R_c^{ff} \approx R_c^{fs} \approx 190$ nm
- FISH 데이터의 domain 크기와 비교하면 f domain ~50–300 kb (loop domain의 중간값 185 kb와 유사), s domain ~150–500 kb (TAD/loop cluster 크기와 유사).
- $g^{fs}(r)$의 진동 패턴은 f domain과 s domain이 **mosaic하게 배치**되어 있음을 시사.

### 3. Perturbation 실험 (원인 분석)
| 조건 | 효과 |
|---|---|
| Cohesin KD (RAD21 siRNA) | fast:slow 비율 급증, slow는 더 느려지고 fast는 더 빨라짐 (A/B compartment 강화 추정) |
| TSA (histone hyperacetylation) | 전체적으로 decondensation → fast/slow 모두 빨라짐, s domain이 f domain에 흡수되는 경향 |
| Formaldehyde crosslinking | fast population 급감, MSD 전반적으로 감소 (구조 고정 효과) |
| PERI (heterochromatin, nuclear periphery) | crosslinking과 유사하지만 약한 효과 (nuclear lamina에 tethering) |

→ 결론: nucleosome은 기본적으로 열적 요동(thermal fluctuation)으로 움직이며, **cohesin bundling과 nucleosome-nucleosome interaction(histone tail 등)이라는 물리적/기하학적 constraint**가 fast/slow를 가르는 핵심 요인.

### 4. Minimal polymer (ring) model
- 2개의 연속된 loop domain (Region I, II)을 cohesin으로 묶인 ring polymer로 모델링 (300 bead, LJ-type potential).
- Interaction strength $\epsilon/k_BT$로 open (<0.6) ↔ compact (>1.2) coil-globule transition 구현.
- 핵심 결과: 
  - 두 domain 모두 compact하면 합쳐져서 하나의 큰 s domain처럼 행동 ($R_c^{ss}$ 증가).
  - Compact + open 조합에서는 reference point(tethering 위치)가 **어디 있는지**가 전체 움직임을 결정 (tethering이 open/compact 여부보다 중요할 수 있음).
  - Core-globule 구조(Region I이 core, Region II가 surface를 wrap)에서는 core가 slow, surface가 fast로 자연스럽게 bimodal 발생.
- → domain의 open/compact 여부뿐 아니라 **tethering의 성질(위치, geometry)**이 f/s 분화에 핵심적.

## Questions & Insights

- Q: 이 논문의 continuous-ν 접근과의 관계는?
  A: 이 논문은 ν(Flory exponent)를 직접 다루지는 않지만, "국소적으로 다른 dynamic regime(fast/slow)이 공존하며 그 경계가 cohesin/tethering에 의해 결정된다"는 그림은 신지의 continuous-ν(n) ODE 프레임워크와 상호보완적 — ν(n)의 공간적 변화가 여기서 관찰된 f/s domain의 물리적 기원(compact vs open, tethering 유무)의 결과일 수 있음. 특히 $\beta_\text{fast} \approx 0.69$–$0.88$, $\beta_\text{slow} \approx 0.44$–$0.47$이라는 국소 MSD exponent 값의 넓은 스펙트럼은, 연속적으로 변하는 $\nu_\text{loc}(\delta n)$이 만들어내는 $\alpha(\tau)$ 스펙트럼과 같은 종류의 현상을 실험적으로 뒷받침하는 근거로 쓸 수 있음.
- Q: crossover timescale $\tau_c$ 개념과 이 논문의 $t \sim 1$ s saturation의 관계는?
  A: 이 논문의 $\bar{M} \sim t^{0.5} \to$ saturation $\to \sim t$ (diffusive) 전이는, continuous-ν ODE에서 예측하는 $\tau_c \sim n_c^{1+2\nu_1}$ crossover와 현상론적으로 유사한 구조 — 다만 이 논문의 saturation은 confinement(caging)에 의한 것이고, ODE 프레임워크의 crossover는 ν 자체의 scale-dependence에 의한 것이라는 차이가 있음. 이 구분을 발표 시 명확히 할 필요 있음.

## Related Concepts

- [[Strings and Binders Switch 모델]] (있다면 링크, 논문 내 SBS 관련 개념과 비교 시 참고)
- [[continuous-ν ODE 프레임워크]] (관련 있다면 링크)

## 더 읽어보고 싶은 레퍼런스

- Nozaki et al. (22) — Mol. Cell 67, 282–293 (2017), *Dynamic organization of chromatin domains revealed by super-resolution live-cell imaging* — 이 논문의 원 데이터 소스
- Di Pierro, Potoyan, Wolynes, Onuchic (24) — PNAS 115, 7753–7758 (2018), *Anomalous diffusion, spatial coherence, and viscoelasticity from the energy landscape of human chromosomes*
- Shi, Liu, Hyeon, Thirumalai (25) — Nat. Commun. 9, 3161 (2018), *Interphase human chromosome exhibits out of equilibrium glassy dynamics*
- Shinkai, Nozaki, Maeshima, Togashi (26) — PLoS Comput. Biol. 12, e1005136 (2016), *Dynamic nucleosome movement provides structural information of topological chromatin domains in living human cells*
- Schwarzer et al. (48) — Nature 551, 51–56 (2017), *Two independent modes of chromatin organization revealed by cohesin removal*
