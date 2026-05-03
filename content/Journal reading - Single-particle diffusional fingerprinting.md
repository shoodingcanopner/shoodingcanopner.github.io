---
title: "Journal reading -  Single-particle diffusional fingerprinting: A machine-learning framework for quantitative analysis of heterogeneous diffusion"
authors: Henrik D. Pinholt, Søren S.-R. Bohr, Josephine F. Iversen, Wouter Boomsma, Nikos S. Hatzakis
DOI: "[10.1073/pnas.2104624118](https://doi.org/10.1073/pnas.2104624118)"
date read: 2026-05-03
date published: 2021-07-28
subject: biophysics, single-particle tracking, machine learning
tags:
  - study
  - concept
  - question
class: study_journal
---

# Single-particle diffusional fingerprinting

## Overview

Single-particle tracking(SPT)으로 얻은 분자 궤적(trajectory)을 분류하고 해석하기 위한 머신러닝 프레임워크. "Diffusional fingerprint"란 각 궤적에서 추출한 17개의 특성(feature) 분포로, 이것을 이용해 입자의 종류(identity)를 분류하고 확산 메커니즘에 대한 물리적 통찰을 얻는다.

핵심 아이디어: 기존 방법들은 특정 확산 모델(e.g., anomalous diffusion, confined diffusion)을 사전에 가정해야 했지만, diffusional fingerprinting은 모델-무관(model-agnostic)하게 작동한다. 또한 시뮬레이션 데이터로 pretrain할 필요 없이, 실험 데이터 자체를 학습/예측에 사용한다.

## Link to PDF and DOI

- DOI: [10.1073/pnas.2104624118](https://doi.org/10.1073/pnas.2104624118)
- PDF: `Books/` 폴더 확인 필요

## 주요 내용 요약

### 방법론: 17개 Feature 추출

각 궤적에서 아래 4가지 범주의 feature를 계산한다:

**1. HMM (Hidden Markov Model) features**
- 4-state HMM을 전체 궤적에 global fitting
- 각 state의 체류 시간: $T_0, T_1, T_2, T_3$, 평균 체류 시간 $\langle\tau\rangle$
- State-shifting(속도 전환) 확산을 포착하는 데 핵심적

**2. MSD scaling features**
- Power law fit to MSD: $\text{MSD}(\Delta t) \sim D\Delta t^\alpha$
- 추출 feature: $\alpha$ (anomalous exponent), $D$ (diffusion constant), MSDratio, Pval

**3. Trajectory shape features**
- kurtosis, dimension (fractal dimension), efficiency, trappedness
- 운동의 지속성(persistence)과 갇힘(confinement) 포착

**4. Step statistics**
- Gaussianity (non-Brownian displacement 검출)
- meanSL (average step length), meanMSD, N (track length)

### 분류 파이프라인

1. 각 궤적 → 17개 feature 계산
2. Linear Discriminant Analysis (LDA)로 feature ranking
3. Logistic regression으로 입자 identity 분류
4. 상위 feature 해석 → 물리적/메커니즘적 통찰

### 검증: 시뮬레이션 데이터

- **Speed-switching** (fast vs slow HMM): F1 = 95.7 ± 0.4%
  - 주요 discriminating features: $T_0, T_1, T_2$, meanSL
- **Anomalous diffusion** (subdiffusive $\alpha=0.5$, normal $\alpha=1$, superdiffusive $\alpha=1.5$): F1 = 92.1 ± 0.4%
  - 주요 features: MSDratio, Dimension, alpha, Trappedness
- CNN(state-of-the-art)과 비슷한 성능, 하지만 feature ranking으로 mechanistic insight 제공

### 실험 데이터 적용

**1. TLL Lipase (L3 vs native)**
- 촉매 효율은 거의 동일하나, step-length 분포가 overlap → fingerprinting으로 분리 가능 (F1 = 65.7%)
- 결론: L3는 빠른 state를 더 많이 점유 → stochastic large jumps → antichemotaxis 가능성

**2. Transcription factors in cells (Sox2 vs NLS)**
- Sox2: 중간 확산계수, mouse embryonic stem cell
- NLS: 더 빠른 확산, 낮은 DNA 결합 친화도
- F1 = 72.7%, NLS 91% / Sox2 52% (NLS 내 두 population 존재)

**3. Nanoparticles in mucus (PLGA vs TPGS-coated)**
- TPGS coating이 mucus 투과성 향상
- F1 높음: TPGS 93%, PLGA 91%
- TPGS: 더 빠르고, less confined, more Brownian ($\alpha \approx 1$, fractal dim ≈ 2)
- 해석: PLGA가 mucus channel에 갇혀 subdiffusive → TPGS coating이 이를 해제

## Questions & Insights

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

- [[Hidden Markov Model (HMM)]]
- [[Anomalous diffusion and MSD scaling]]
- [[Linear Discriminant Analysis (LDA)]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 

- Bohr et al. (2019) Sci. Rep. — TLL lipase SPT 원본 데이터 [DOI: 10.1038/s41598-019-52702-2]
- Hansen et al. (2018) eLife — Spot-On, transcription factor SPT analysis [DOI: 10.7554/eLife.33125]
- Kowalek et al. (2019) Phys. Rev. — Feature-based vs deep-learning for diffusion classification [ref 32]
