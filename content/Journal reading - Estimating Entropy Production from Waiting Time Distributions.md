---
title: "Estimating Entropy Production from Waiting Time Distributions"
authors: Dominic J. Skinner, Jörn Dunkel
DOI: "[10.1103/PhysRevLett.127.198101](https://doi.org/10.1103/PhysRevLett.127.198101)"
date read: "2026-04-27"
date published: "2021-11-01"
subject: nonequilibrium statistical mechanics, stochastic thermodynamics, biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Estimating Entropy Production from Waiting Time Distributions

## Overview

Hidden Markov 과정의 **waiting time 분포만을 이용해** 엔트로피 생성률(EPR)의 하한을 추정하는 방법을 제시한 논문. 많은 생물 실험에서 내부 state들이 숨겨져 있고, 오직 두 개의 메타상태(A, B) 사이의 전환만 관찰 가능한 상황에서, 기존 TUR(Thermodynamic Uncertainty Relation)이 적용 불가능한 경우에도 EPR 하한을 추정할 수 있음을 보인다.

핵심 아이디어: 평형계에서는 waiting time 분포가 반드시 **단조감소(monotonically decreasing)**해야 한다. 비단조적 분포는 비평형의 신호이며, 분산의 크기로부터 EPR 하한을 계산할 수 있다.

## Link to PDF and DOI

- DOI: [10.1103/PhysRevLett.127.198101](https://doi.org/10.1103/PhysRevLett.127.198101)
- PDF: [[Estimating_Entropy_Production_from_Waiting_Time_Distributions.pdf]]

## 주요 내용 요약

### 셋업: Hidden Markov 시스템

- $N_T$개의 이산 상태 위에서 전이율 $W_{ij}$를 갖는 Markov 과정
- 정상 분포 $\pi$에서의 EPR:

$$
\sigma = k_B \sum_{i<j} (\pi_i W_{ij} - \pi_j W_{ji}) \log \frac{\pi_i W_{ij}}{\pi_j W_{ji}}
$$

- 평형조건: 상세균형 $\pi_i W_{ij} = \pi_j W_{ji}$ → EPR $\sigma = 0$
- 실험에서는 오직 두 메타상태 A, B만 관측 가능 → 내부 구조는 숨겨짐 (non-Markovian coarse-graining)

### 핵심 결과: σ_T 추정량

Waiting time 분산으로부터 EPR 하한을 주는 추정량:

$$
\sigma_T = \frac{2k_B}{\langle t \rangle_A + \langle t \rangle_B} \, \Lambda\!\left(\frac{\mathrm{Var}\, t_A}{\langle t \rangle_A^2}\right)
$$

- $\Lambda(x)$: 수치 최적화로 결정되는 **universal limiting curve**
- $\sigma(S) \geq \sigma_T$ 항상 성립 (최적 하한)
- 입력 데이터: waiting time 통계의 평균과 분산만 필요

### Canonical 정규화 절차

최적화 문제를 단순화하기 위한 두 단계 rescaling:
1. 각 메타상태에서 보내는 시간 비율을 $1/2$로 정규화
2. 시간 단위를 $\tau = (\langle t \rangle_A + \langle t \rangle_B)/2$로 정규화

→ 이를 통해 임의의 시스템을 단일 canonical 시스템에 대한 최적화 문제로 환원

### 적용 사례

| 시스템 | $\mathrm{Var}\,t / \langle t \rangle^2$ | $\sigma_T$ |
|---|---|---|
| Glutaminase 유전자 (inactive state) | 1.6 | $\geq 2.2 \, k_B/\mathrm{h}$ |
| Bmal1 promoter (inactive state) | 1.5 | $\geq 2.4 \, k_B/\mathrm{h}$ |
| 임신한 실내 소 (lying state) | — | $4.1 \, k_B/\mathrm{h}$ |

### 점근 공식: 정밀 타이머 한계

$\mathrm{Var}\,t_A / \langle t \rangle_A^2 \to 0$ 극한에서 Langevin 연속 근사를 통해:

$$
\frac{\mathrm{Var}\,t_A}{\langle t \rangle_A^2} = \frac{1}{\hat{\sigma}} + \frac{4\ln\hat{\sigma}}{\hat{\sigma}^2} + o\!\left(\frac{\ln\hat{\sigma}}{\hat{\sigma}^2}\right), \quad \hat{\sigma} = \frac{\sigma \langle t \rangle_A}{2k_B}
$$

→ 심장박동 데이터에 적용: 인간(젊음) $\geq 280\,k_B/\mathrm{s}$, 개 $\geq 270\,k_B/\mathrm{s}$, 쥐 $\geq 2360\,k_B/\mathrm{s}$

### 기존 TUR과의 비교

- 기존 TUR [Gingrich et al. 2016]: observable current가 없는 시스템에 적용 불가
- 최근 TUR [Harvey et al.]: 적용 가능하지만 $\sigma_T$보다 훨씬 낮은 bound, 수렴도 느림
- $\sigma_T$: 같은 waiting time 통계를 가지는 모든 시스템에 대한 최적(tightest possible) bound

## Questions & Insights

*(논문을 읽으며 생기는 질문과 인사이트를 여기에 기록)*

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.


## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.

AI 추천)
- [Skinner & Dunkel, PNAS 2021](https://doi.org/10.1073/pnas.2024300118) — 같은 저자들의 선행 논문, optimization framework 원형
- [Horowitz & Gingrich, Nat. Phys. 2020](https://doi.org/10.1038/s41567-019-0702-6) — TUR 리뷰
- [Harvey, Lahiri & Ganguli, arXiv:2002.10567] — 비교 대상인 최근 TUR
- [Barato & Seifert, Phys. Rev. X 2016] — 생물학적 oscillator의 TUR 분석
