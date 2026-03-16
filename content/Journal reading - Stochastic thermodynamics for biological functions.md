---
title: Journal reading - Stochastic thermodynamics for biological functions
authors: Yuansheng Cao, Shiling Liang
DOI: "[10.1002/qub2.75](https://doi.org/10.1002/qub2.75)"
date read: 2026-02-19
subject: stochastic thermodynamics, biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Stochastic thermodynamics for biological functions

## 이거 왜 읽었나?
Quantitative biology Journal의 논문.
논문의 제목이 곧 내 관심분야이다. 
이 분야에서 가장 최근에 나온 리뷰논문이다. 
읽으면서 기본 개념을 많이 배웠고, 더 읽어보고 싶은 논문도 발굴했다. 

아직 노트에 읽은 내용을 다 정리하지 않았다. 지금까지 절반 정도 했나?

## Overview

비평형 열역학의 프레임워크(확률론적 열역학)를 생물학적 기능에 적용한 리뷰 논문. 마스터 방정식, 국소 세부 균형(LDB), 엔트로피 생성, 요동 정리(Fluctuation Theorem), 열역학적 불확정성 관계(TUR) 등의 핵심 개념을 소개하고, 분자 모터, 교정(proofreading), 생물학적 감지, 집단 행동 등에 적용한다.

## Link to PDF and DOI

- DOI: [10.1002/qub2.75](https://doi.org/10.1002/qub2.75)
- PDF: [[Stochastic thermodynamics for biological functions.pdf]]

## 주요 내용 요약

- **섹션 2**: 확률론적 열역학의 기초 — 마스터 방정식, LDB, 엔트로피 생성률(EPR), 요동 정리(Jarzynski, Crooks), TUR, 비평형 정상 상태에서의 응답, 화학 반응 네트워크(CRN)
- **섹션 3.1**: 분자 모터와 세포 내 수송 — TUR이 모터 효율과 이상 확산에 부과하는 한계
- **섹션 3.2**: 교정과 오류 수정 — 운동학적 교정(Hopfield), 정확도-속도-에너지 트레이드오프
- **섹션 3.3**: 생물학적 감지의 민감도, 적응, 정확도 — PdP 사이클, Hill 계수, Burg-Purcell 한계
- **섹션 3.4**: 집단 행동과 비평형 상전이 — 동기화, 에너지 소산과 질서의 관계

## Questions & Insights

- Q: 식 (5)의 driving force $F_{ij}$를 만드는 생물학적 요인은?
  A: ATP/GTP 가수분해, 이온 농도 기울기(양성자 구동력), 인산화 포텐셜 등. 모두 에너지 소모를 통해 특정 전이를 비가역적으로 만드는 외부 구동력.
- Q: 식 (4)에 이름이 있나?
  A: Local Detailed Balance (LDB, 국소 세부 균형). 개별 전이 쌍의 속도비를 그 전이의 환경 엔트로피 생성으로 연결하는 원리. 비평형에서도 성립한다는 점이 전통적 detailed balance와의 차이.
- Q: EPR(식 9)은 왜 $\mathcal{J}_{ij} \ln(\mathcal{J}_{ij}/\mathcal{J}_{ji})$의 합으로 정의되나? 그리고 시스템 EPR이 Shannon 엔트로피 시간미분과 같은 이유는?
  A: 비가역성은 앞/뒤 방향 흐름의 불균형에서 온다. $\ln(\mathcal{J}_{ij}/\mathcal{J}_{ji})$는 그 불균형의 철도이고, net current $\mathcal{J}_{ij}$로 가중한 것. Shannon 엔트로피 미분과의 동치는 마스터 방정식 $\dot{p}_i = \sum_j \mathcal{J}_{ij}$를 대입한 뒤 $i \leftrightarrow j$ 대칭화 트릭으로 유도. → [[Entropy Production Rate]]



## Related Concepts

많은 개념을 배웠다.

- [[detailed balance]]
- [[Nonequilibrium_Thermodynamics_Basic_Concepts]]
- [[Local Detailed Balance]]
- [[Entropy Production Rate]]
- [[Kolmogorov's Criterion]]
- [[Trajectory Probability in Continuous Time Markov Chains]]
- [[Thermodynamic Uncertainty Relation]]

## 더 읽어보고 싶은 레퍼런스

[[Journal reading - Size limits the sensitivity of kinetic schemes]]
[[Journal reading - Flexibility and sensitivity in gene regulation out of equilibrium]]
