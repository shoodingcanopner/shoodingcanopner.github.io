---
title: Journal reading - Complexity of chromatin folding is captured by the strings and binders switch model
authors: Mariano Barbieri, Mita Chotalia, James Fraser, Liron-Mark Lavitas, Josée Dostie, Ana Pombo, Mario Nicodemi
DOI: "[DOI](https://doi.org/10.1073/pnas.1204799109)"
date read: 2026-06-13
date published: 2012-10-02
subject: theoretical biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Complexity of chromatin folding is captured by the strings and binders switch model

## Overview

이 논문은 interphase nucleus에서 chromatin folding의 다양성을 설명하기 위한 **Strings and Binders Switch (SBS) model**을 제안한다. Chromatin을 self-avoiding polymer(strings)로, 그리고 transcription factor·CTCF 같은 diffusible factor를 Brownian binder로 표현한다. Binder가 polymer의 binding site에 결합하면서 loop가 형성되고, binder concentration $c_m$·affinity $E_X$·binding site 분포에 따라 polymer가 **open / fractal / compact**의 세 가지 안정 상태 사이를 **switch-like(thermodynamic phase transition)** 방식으로 전환한다.

핵심 주장은, 기존에 chromatin folding의 보편 원리로 여겨지던 **Fractal-Globule (FG) model이 사실은 SBS model의 수많은 transient conformation 중 하나에 불과**하며, FISH·Hi-C·3C 실험에서 관측되는 다양한 scaling exponent를 단일 framework로 통합 설명할 수 있다는 것이다.

## Link to PDF and DOI

- DOI: [10.1073/pnas.1204799109](https://doi.org/10.1073/pnas.1204799109)
- PDF: [[Books/Complexity of chromatin folding is capturedby the strings and binders switch model.pdf|Complexity of chromatin folding is capturedby the strings and binders switch model]]

## 주요 내용 요약
![[Pasted image 20260615195301.png]]
### 1. SBS Model의 구성
- Chromatin fiber = self-avoiding polymer (SAW), $n = 512$ beads, 각 bead는 $s_0$ bases.
- Fraction $f$의 site가 binding site이며, concentration $c_m$·affinity $E_X$를 가진 Brownian binder가 결합.
- Binder의 binding multiplicity $\geq 2$ (여기서는 6, CTCF·transcription factory 추정값)이므로 여러 polymer site를 동시에 묶어 **loop 형성**이 가능.
- Metropolis Monte Carlo simulation으로 equilibrium·dynamics 평가.

#### Simulation parameters & model setup (from SI)

**Polymer & binder 설정**

| 항목                     | 값 / 설정                                                                | 비고                                                                                    |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Chain length           | $n = 512$ spherical sites                                             | 더 짧거나 긴 polymer도 scaling 상 유사 거동                                                      |
| Bead 당 genomic content | $s_0 = L/n$, 예) $L = 10\,\mathrm{Mb}$이면 $s_0 \approx 20\,\mathrm{kb}$ | 20kb에 0.34nm(1bp의 길이)를 곱하면 $6.8\mu m$이다.                                              |
| Binding site fraction  | $f = 0.5$ (main case) binding site와 none-binding site가 1대1            | site는 chain을 따라 **균등 분포(evenly distributed)** 가정                                      |
| Binding affinity       | $E_X = 2\,k_B T$ (모든 site 고정)                                         | 실제 TF 결합 에너지: nonspecific $\approx 2\,k_B T$ ~ specific $\approx 20\,k_B T$           |
| Binding multiplicity   | 6 → cubic lattice라서!                                                  | CTCF·transcription factory 등 multi-binding organizer 반영. multiplicity $\geq 2$면 유사 패턴 |
| Control parameter      | $c_m$ (given $E_X$) 또는 $E_X$ (given $c_m$)                            | 둘 중 어느 쪽을 바꿔도 동등한 결과                                                                  |

**Lattice & 물리적 스케일 매핑**

- 계산을 위해 polymer는 lattice spacing $d_0$의 cubic lattice 위에 존재. $d_0$ = polymer site의 linear length, single occupancy(자기회피).
- Nonbreaking 제약: 인접 두 site는 next 또는 nearest-next neighbor lattice site에만 위치 가능.
- 화학적 상호작용은 nearest-neighbor 입자 사이에서만 허용.
- Lattice spacing 추정: $d_0 \approx (s_0/G)^{1/3} D_0$. 포유류 기준 genome $G \approx 6\,\mathrm{Gb}$, nucleus diameter $D_0 \approx 5\,\mu\mathrm{m}$ → $L = 10\,\mathrm{Mb}$에서 $d_0 \approx 0.1\,\mu\mathrm{m}$.
- 농도 환산 (lattice site 당 분자 분율 $c$ ↔ molar concentration $c_m$):

$$
c \sim c_m\, d_0^{3}\, N_A
$$

  여기서 $N_A$는 Avogadro 수.

**Monte Carlo 동역학**

- Metropolis algorithm + periodic boundary condition (경계효과 감소).
- 각 MC step에서 모든 분자·bead를 무작위 순서로 평균 1회 이동, 전이확률 $\propto \exp(-\Delta H / k_B T)$. 시행률은 Arrhenius factor $r_0 \exp(-\Delta H / k_B T)$.
- MC averages: 최대 $10^3$ runs, 각 run 최대 $10^{11}$ steps.
- **실시간 매핑**: MC time unit $t_0 = 1/r_0$. Diffusion constant $D = S^2 / (d_0^2 / 4 t_0)$ ($S^2$ = center of mass의 단위 MC time 당 mean-square displacement)를 포유류 DNA loci 측정값 $D = 1\,\mu\mathrm{m}^2/\mathrm{h}$에 맞춰 $t_0$ 도출. → 예측 folding time이 수 시간 규모로, 생물학적 기대 범위와 일치.

**측정량 정의**

- Squared radius of gyration: $R_g^2 = \dfrac{1}{2n(n-1)} \sum_{i,j=1}^{n} (\mathbf{r}_i - \mathbf{r}_j)^2$. 논문에서는 동일 길이 random SAW chain의 $R_g^2$로 normalize.
- Contact matrix: entry $n_{i,j}/n$ = site $i, j$가 contact한 평균 상대 횟수. **Contact 정의: 두 site가 거리 $2.5\,d_0$ 이내**.
- Contact probability $P_c(s)$: contour distance $s$만큼 떨어진 두 site의 평균 contact 확률.

**Domain / looping-out 변형 모델 (Fig. 3, S7)**

- Chain $n = 152$ beads, $f = 1/6$, 두 종류 binding site(red/green)를 chain 전반·후반에 분리 배치.
- 각 site는 서로 다른 binder와만 결합 (red↔red, green↔green; binder끼리 상호작용 없음).
- 이 경우 파라미터: $c_m = 25\,\mathrm{nmol/L}$, $E_X = 4\,k_B T$ (compact 상태 유도).
- **Looping out**: 두 domain이 equilibrium에 도달한 뒤, site A 중심의 red binding site 3개를 inert(blue, 결합능 상실) 상태로 변경 → 해당 segment가 domain 밖으로 loop out.
- **Associating domains (TAD)**: 서로 다른 domain이 공통 binder(예: "yellow")를 공유하면 domain 간 association 발생.

### 2. 세 가지 상태와 Switch-like Transition

![[Pasted image 20260615195159.png]]
$s$는 genomic distance, $s_0$는 bead당 genomic distance, $s/s_0$는 bead number. 
앞서 bead 512개 썼다고 했음. 

- **Order parameter**: radius of gyration $R_g^2$ — open일 때 최대, compact일 때 최소.
- $R_g^2(c_m)$는 **sigmoid** 형태. Threshold $C_{tr}$ (곡선 변곡점 = polymer $\Theta$ transition)를 기준으로:
  - $c_m < C_{tr}$: **open (SAW random coil)** — $\nu \sim 0.58$, $\alpha \sim 2.1$ (euchromatin)
  - $c_m \approx C_{tr}$: **fractal (transition point)** — $\nu \sim 0.5$, $\alpha \sim 1.08{-}1.5$
  - $c_m > C_{tr}$: **compact (collapsed globule)** — $\nu \sim 0$, $\alpha \sim 0$ (heterochromatin)
- 예: $E_X = 2\,k_B T$일 때 $C_{tr} \approx 10\,\mathrm{nmol/L}$ (전형적 핵 단백질 농도). $E_X$가 작아지면 $C_{tr}$ 증가 (phase diagram).
- **핵심 의의**: 파라미터를 미세조정할 필요 없이, $c_m$·$E_X$를 threshold 위로 올리는 단순 전략(단백질 up-regulation 등)만으로 핵 구조를 신뢰성 있게 sharp하게 조절 가능.

### 3. 두 가지 scaling 관측량
- Mean-square spatial distance: $R^2(s) \sim s^{2\nu}$
- Contact probability: $P_c(s) \sim 1/s^{\alpha}$
- 둘 다 $c_m$에 대해 sigmoid(switch-like)하게 변하며, 세 regime을 반영.

### 4. FG model과의 비교 및 비판
- FG model: noninteracting free polymer의 특정 transient knot-free 상태. $\alpha \approx 1$, $\nu \approx 0.33$ 예측.
- 문제점:
  1. $R^2(s)$가 무한히 증가($\nu \sim 0.33$)한다고 예측 → 그러나 대부분 FISH 데이터는 **plateau**($\nu \sim 0$)를 보임.
  2. FG 상태는 매우 특수한 초기조건(고도로 압축된 knot-free 상태에서 풀려나는 과정)에서만, **일시적으로만** 존재. Topoisomerase 같은 핵 인자 존재 시 시간 창이 사라짐.
- **결정적 반례**: Hi-C 평균 $\alpha \approx 1.08$은 보편 상수가 아님.
  - 같은 cell line(GM06990) 안에서도 염색체별로 $\alpha$가 다름: chr X $\approx 0.93$ (silent, closed), chr 19 $\approx 1.30$ (gene-dense, open).
  - hESC(H1)는 모든 염색체가 $\alpha \approx 1.6$ (stem cell의 open chromatin 특성과 일치).
- **Mixture 논증**: open($\alpha = 2.1$)·compact($\alpha = 0$) polymer를 비율 $p : 1-p$로 섞기만 해도 (fractal 상태 없이) 평균 $\alpha$가 재현됨. $p \approx 0.60$이면 $\alpha = 1.08$, $p = 0.45$면 $0.93$, $p = 0.80$이면 $1.3$. → 평균 $\alpha$ 하나로 chromatin architecture를 논하는 것은 무의미.

### 5. Topological domain과 looping out
- 두 종류 binding site(red/green)를 polymer의 두 절반에 분리 배치 → SBS가 **separate domain(globule)** 형성.
- 이때 $P_c(s)$가 두 regime: 짧은 $s$에서 낮은 $\alpha$(closed/globular), 긴 $s$에서 높은 $\alpha$(open). $\approx 1$-Mb domain 관측과 일치.
- Binding site의 affinity를 일부 변경(red→무결합 blue)하면 해당 segment가 domain 밖으로 **loop out** → 유전자 활성화 시 chromatin decondensation 재현.

### 6. Dynamic behavior: Kurtosis
- $K = \langle R^4(s)\rangle / \langle R^2(s)\rangle^2$ (4차/2차 moment 비, 차원 없는 양). Cell-to-cell·locus 변동성 정보를 담음.
- 실험 FISH $K$: 1.5–4.4.
- SBS: $c_m$이 low/high(open/closed)일 때 $K \approx 1.5$(SAW 값), threshold 부근에서 **최대 $\sim 5$까지 peak**. → 실험 범위 전체를 포괄.
- 다른 모델(SAW, fixed-loop, random-loop, FG)은 모두 **상수 $K$**만 산출 → SBS만이 이 다양성을 재현.

## Questions & Insights
- Q: 랜덤 워크(Gaussian chain)도 그 자체로 fractal인데, 이 논문은 왜 "open chromatin"과 "fractal chromatin"을 따로 구분하는가? open도 fractal 아닌가?
  A: 맞다. open(SAW)도 fractal이다. 세 상태(open/transition/compact)는 **전부 fractal이며, 구별되는 것은 fractal dimension $d_f = 1/\nu$ 하나뿐**이다.
    - open (SAW): $\nu \sim 0.588$, $d_f \approx 1.7$ — swollen self-avoiding coil
    - "fractal" (transition): $\nu \sim 0.5$, $d_f = 2.0$ — $\Theta$-point ideal chain
    - compact (globule): $\nu \to 0$, $d_f \to 3.0$ — space-filling collapsed globule
  논문이 transition 상태만 "fractal"이라 부르는 건 물리적으로 엄밀한 구분이 아니라 **chromatin 커뮤니티의 관습적 명명**이다. 근거는 두 가지: (1) $C_{tr}$에서 $\nu \approx 0.5$가 나오는 것을 polymer coil–globule transition의 **$\Theta$-point**으로 동일시한다 ($\Theta$ 용매에서 excluded volume과 attraction이 상쇄되어 ideal/Gaussian 통계를 따름 → $\nu = 1/2$). (2) open($\nu=0.588$)·compact($\nu=0$)는 threshold 근처 넓은 영역에서 안정적으로 같은 값을 유지하지만(sigmoid 양 끝), $\nu=0.5$는 **딱 $C_{tr}$ 한 점에서만 나타나는 임계 상태**(변곡점)이다. 즉 open/compact는 이미 이름 붙은 *자명한(trivial) fractal*이고, transition만 $\Theta$ 임계점이라는 특별한 지위를 가지므로 강조해서 "fractal"이라 부른 것.

- Insight: "fractal"이라는 단어가 chromatin 문헌에서 최소 세 가지 의미로 혼용된다 — (a) 임의의 self-similar 구조 [넓은 물리적 의미, 세 상태 모두 해당], (b) Lieberman-Aiden(2009)의 **fractal globule** ($\nu \approx 1/3$, $d_f = 3$, space-filling이지만 unknotted한 비평형 상태), (c) **이 논문의 "fractal"** [$\nu = 0.5$, $d_f = 2$, transition-point ideal chain]. (b)와 (c)는 명백히 다른 상태인데 같은 단어를 쓴다. 더 정확한 명명이었다면: open = swollen fractal($d_f\approx1.7$), transition = $\Theta$-point/ideal fractal($d_f=2$), compact = collapsed/space-filling fractal($d_f=3$).

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

- [[Contact probability exponent and polymer scaling]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다. 

- Mirny LA (2011) The fractal globule as a model of chromatin architecture in the cell. Chromosome Res 19:37–51. — FG model 정리 (이미 읽음)
- Lieberman-Aiden E, et al. (2009) Comprehensive mapping of long-range interactions reveals folding principles of the human genome. Science 326:289–293. — Hi-C 원논문, $\alpha \approx 1.08$ 출처
- Nicodemi M, Prisco A (2009) Thermodynamic pathways to genome spatial organization in the cell nucleus. Biophys J 96:2168–2177. — SBS model 상세
- de Gennes PG (1979) Scaling Concepts in Polymer Physics. — polymer scaling 이론 배경
