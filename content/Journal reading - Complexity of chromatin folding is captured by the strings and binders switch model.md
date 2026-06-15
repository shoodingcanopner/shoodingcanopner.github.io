---
title:
  "Complexity of chromatin folding is captured by the strings and binders switch model":
authors: Mariano Barbieri, Mita Chotalia, James Fraser, Liron-Mark Lavitas, Josée Dostie, Ana Pombo, Mario Nicodemi
DOI: "[DOI](https://doi.org/10.1073/pnas.1204799109)"
date read: "2026-06-13"
date published: "2012-10-02"
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

### 1. SBS Model의 구성
- Chromatin fiber = self-avoiding polymer (SAW), $n = 512$ beads, 각 bead는 $s_0$ bases.
- Fraction $f$의 site가 binding site이며, concentration $c_m$·affinity $E_X$를 가진 Brownian binder가 결합.
- Binder의 binding multiplicity $\geq 2$ (여기서는 6, CTCF·transcription factory 추정값)이므로 여러 polymer site를 동시에 묶어 **loop 형성**이 가능.
- Metropolis Monte Carlo simulation으로 equilibrium·dynamics 평가.

### 2. 세 가지 상태와 Switch-like Transition
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

- Mirny LA (2011) The fractal globule as a model of chromatin architecture in the cell. Chromosome Res 19:37–51. — FG model 정리 (이미 읽음)
- Lieberman-Aiden E, et al. (2009) Comprehensive mapping of long-range interactions reveals folding principles of the human genome. Science 326:289–293. — Hi-C 원논문, $\alpha \approx 1.08$ 출처
- Nicodemi M, Prisco A (2009) Thermodynamic pathways to genome spatial organization in the cell nucleus. Biophys J 96:2168–2177. — SBS model 상세
- de Gennes PG (1979) Scaling Concepts in Polymer Physics. — polymer scaling 이론 배경
