---
title: Journal reading - Flexibility and sensitivity in gene regulation out of equilibrium
authors: Sara D. Mahdavi, Gabriel L. Salmon, Patill Daghlian, Hernan G. Garcia, Rob Phillips
DOI: "[10.1073/pnas.2411395121](https://doi.org/10.1073/pnas.2411395121)"
date read: 2026-03-08
date published: 2024-11-05
subject: nonequilibrium biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Flexibility and sensitivity in gene regulation out of equilibrium

## Overview

세포는 전사인자(TF)의 농도를 제어 변수로 삼아 유전자 발현을 조율한다. 이 논문은 가장 단순하고 보편적인 유전자 조절 모티프인 **4-상태 사이클(square graph)** 을 비평형 조건에서 분석하여, 에너지 소산(dissipation)이 어떤 새로운 입출력 거동을 가능하게 하는지 체계적으로 탐구한다. Graph theory(특히 Matrix Tree Theorem)를 활용해 전사 반응 곡선의 보편적 형태를 도출하고, 비평형이 잠금 해제(unlock)하는 새로운 **regulatory shape phenotype**들을 분류한다.

## Link to PDF and DOI

DOI: [10.1073/pnas.2411395121](https://doi.org/10.1073/pnas.2411395121)
PDF: [[Flexibility and sensitivity in gene regulation out of equilibrium.pdf]]
Supplementary: [[S_Flexibility and sensitivity in gene regulation out of equilibrium.pdf]]
supplementary가 80페이지가 넘어간다. 엄청나다. 
## memo

Hernan G. Garcia와 Rob Phillips 교수님이 이쪽에서 유명하신 분 인 거 같다. UCB 생물리 그룹, 칼텍 수리천문과 소속이시다. 

## 주요 내용 요약

![[Pasted image 20260308193005.png]]
- **모델**: RNA 중합효소(RNAP, P라고 표기)와 전사인자(TF, X라고 표기) 두 분자가 게놈에 결합/해리하는 4-상태 사이클(S, X, P, XP). 왜 이런 간단한 모델을 연구하는 게 가치있는가? *E. coli* RegulonDB 기준 전체 조절 프로모터의 절반 이상이 이 구조라고 한다. 수학적으로 풀기에도 간단하기도 하다. 

- **핵심 수학적 결과**: Matrix Tree Theorem에 의해 임의의 출력 $\langle r \rangle$은 $[X]$에 대한 유리함수(ratio of quadratic polynomials)로 표현된다:
$$
\langle r \rangle = \frac{A + B[X] + C[X]^2}{D + E[X] + F[X]^2}
$$
평형에서는 분자·분모가 모두 선형으로 축소 → Hill/MWC 형태로 환원.

- **세 가지 regulatory shape phenotype**:
  1. 평형-유사형: 단조 증가/감소, 변곡점 1개
  2. (비평형 전용) 비단조형: 변곡점 2개 (band-pass/band-gap 가능)
  3. (비평형 전용) 단조 3-변곡점형: 여러 농도 구간에서 서로 다른 민감도 구현

- **민감도의 전역 경계(global bounds)**: 정규화된 민감도 $s([X])$는 shape phenotype에 따라 엄격히 제한됨. 평형: 항상 $1/4$. 비평형 단일 변곡점: $[0.16, 1/2]$. 2-변곡점: $[1/4, 1/2]$. 3-변곡점: $[1/8, 1/4]$.

- **비단조성의 조건(Eq. 5)**: TF가 RNAP의 결합 속도와 해리 속도를 같은 방향으로 변화시킬 때에만(ambiguous/dualistic role) 비단조성이 가능. 이 조건은 pure diffusion-limited binding 가정 하에서는 성립하지 않아 실제 생물학적 계는 대부분 단조 반응을 보임.

- **에너지 예산**: ATP 1개 ≈ 20 $k_BT$, 최대 2 ATP 분해분(40 $k_BT$)으로도 모든 shape phenotype에 접근 가능 → 생물학적으로 현실적.

## Questions & Insights

### 📌 논문 전체 이해 요약 (2026-03-08)

- Q: 이 논문의 핵심 주장을 한 문단으로 요약하면?
  A: 유전자 조절(gene regulation)은 TF 농도 → mRNA 전사율의 response function으로 표현된다. 평형상태에서 이 함수는 반드시 Hill function 형태(변곡점 1개, 단조)만 가능하다. 그러나 비평형 상태에서는 변곡점이 2개(비단조)이거나 3개(단조)인 새로운 shape phenotype이 가능해진다. 이는 단일 TF만으로도 더 복잡하고 유연한 생물학적 조절이 가능함을 의미한다.

- Q: 왜 평형에서는 Hill function만 가능한가?
  A: Matrix Tree Theorem에 의해 response function은 [X]에 대한 2차/2차 유리함수다. 그런데 평형(detailed balance) 조건이 성립하면 사이클의 forward/backward flux가 상쇄되어 이차항이 사라지고 1차/1차 형태로 축소된다. 이것이 Hill/MWC 형태다. 비평형에서는 이 상쇄가 일어나지 않아 이차항이 살아남고, 새로운 shape이 가능해진다.

- Q: 비단조(2-변곡점) 곡선은 생물학적으로 어떤 의미인가?
  A: 어떤 [X] 구간에서는 TF가 activator 역할, 다른 구간에서는 repressor 역할을 하는 양가적(ambiguous) 시나리오가 가능해진다. Band-pass/band-gap 필터링이나 화학 신호의 시간적 펄스 생성에 활용될 수 있다.

- Q: "RNA translation 농도"가 아니라 "mRNA transcription rate"이다 (정정)
  A: 이 논문의 response function은 TF 농도 → mRNA 생산 속도(전사율)의 관계다. Translation(번역, mRNA → 단백질)은 이 논문의 범위 밖이다.

- Q: Dorsal 단백질 사례는 이 논문의 실험적 증거인가?
  A: 아니다. Dorsal은 "이런 기능이 생물학적으로 의미 있다"는 동기 부여 예시일 뿐이다. 논문의 기여는 단일 유전자+에너지 소비로 수학적으로 구현 가능하다고 **제안(propose)**하는 것까지다. 실험 검증은 미래 과제.

### 📌 Fig. 4 — 민감도의 전역 경계 (global bounds on sensitivity)

- Q: Fig. 4가 보여주는 것은?
  A: 정규화된 민감도 $s([X])$의 상한과 하한을 shape phenotype별로 정리한 그림. 핵심 결과:
  - 평형(1-변곡점): $s = 1/4$ (고정, 조절 불가)
  - 비평형 1-변곡점: $s \in [0.16,\, 1/2]$ — 최대 평형의 2배까지 가능
  - 비평형 2-변곡점: $s \in [1/4,\, 1/2]$
  - 비평형 3-변곡점: $s \in [1/8,\, 1/4]$ — shape 복잡성과 민감도는 tradeoff
  - **shape 복잡성 ↑ → 최대 민감도 ↓**: 3-변곡점은 더 풍부한 기능을 얻는 대신 민감도 상한이 낮아진다.

### 📌 Fig. 5 — edge-by-edge로 detailed balance 깨기

- Q: Fig. 5의 실험 설계는?
  A: 8개의 rate constant 중 하나씩 평형값에서 증가/감소시키면서(나머지 7개는 고정) response curve가 어떻게 바뀌는지 추적. 에너지 예산은 생물학적으로 보수적인 $|\Delta\mu| \leq 40\, k_BT$ (ATP 2개 분량).

- Q: Fig. 5의 주요 결과는?
  A: (1) 생물학적으로 현실적인 에너지 범위 내에서 모든 세 가지 shape phenotype에 접근 가능하다. (2) 어떤 edge를 구동하느냐에 따라 결과가 크게 다르다 — 어떤 rate는 좁은 drive 범위에서만 비단조에 도달하고, 어떤 rate는 넓은 범위에서 비단조가 기본값이 된다. (3) 일부 특성(inflection point 위치, saturation 값)은 net drive에 대해 **power law**로 스케일링된다.

### 📌 Fig. 6 — 두 개의 edge를 동시에 구동할 때

- Q: Fig. 6이 Fig. 5와 다른 점은?
  A: edge를 하나씩이 아니라 두 개씩 동시에 구동했을 때의 2D phase diagram. 28가지 rate pair를 모두 분석.

- Q: Fig. 6의 주요 결과는?
  A: (1) 두 edge를 동시에 구동하면 single-edge 구동보다 더 적은 에너지로 비단조성에 도달할 수 있다 — **dissipative bargain**. 28개 pair 중 22개가 infinitesimal net drive만으로 비단조에 접근 가능. (2) 민감도(slope)도 single-edge 대비 크게 향상된다. 예: $(k_{SX}, k_{PS})$ pair는 net drive $\approx 10\, k_BT$만으로 slope ≈ 0.35 달성, 반면 잘못된 pair를 선택하면 $35\, k_BT$를 써도 slope ≈ 0.054에 그친다. (3) 최적 slope를 내는 rate pair는 항상 rate space의 경계(boundary)에 위치한다 — 두 rate 중 하나는 허용 에너지를 최대로 써야 최적에 도달.

## Related Concepts

[[Markov Chain Tree Theorem]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 

### 글리아의 추천
- Owen & Horowitz (2023), "Size limits the sensitivity of kinetic schemes." *Nat. Commun.* — 이 논문의 민감도 상한과 관련
- Lammers, Flamholz, Garcia (2023), "Competing constraints shape the nonequilibrium limits of cellular decision-making." *PNAS*
- Grah, Zoller, Tkačik (2020), "Nonequilibrium models of optimal enhancer function." *PNAS*
