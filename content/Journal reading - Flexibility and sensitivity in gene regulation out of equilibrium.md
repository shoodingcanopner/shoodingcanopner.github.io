---
title: Flexibility and sensitivity in gene regulation out of equilibrium
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

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 

### 글리아의 추천
- Owen & Horowitz (2023), "Size limits the sensitivity of kinetic schemes." *Nat. Commun.* — 이 논문의 민감도 상한과 관련
- Lammers, Flamholz, Garcia (2023), "Competing constraints shape the nonequilibrium limits of cellular decision-making." *PNAS*
- Grah, Zoller, Tkačik (2020), "Nonequilibrium models of optimal enhancer function." *PNAS*
