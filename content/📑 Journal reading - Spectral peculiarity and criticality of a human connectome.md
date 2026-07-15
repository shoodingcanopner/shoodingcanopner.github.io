---
title: "Spectral peculiarity and criticality of a human connectome"
authors: N. Pospelov, S. Nechaev, K. Anokhin, O. Valba, V. Avetisov, A. Gorsky
DOI: "[DOI](https://doi.org/10.1016/j.plrev.2019.07.003)"
date read: '2026-07-06'
date published: '2019-07-01'
subject: network neuroscience
tags:
  - study
  - concept
  - question
class: study_journal
---

# Spectral peculiarity and criticality of a human connectome

## Overview

여러 생물종(C. elegans, C. intestinalis, macaque, human)의 structural connectome adjacency matrix에 대해 spectral density를 비교 분석한 논문. Maslov-Sneppen randomization으로 만든 "null state"와 실제 connectome의 spectrum 차이를 earth mover's distance (EMD)로 정량화하고, 어떤 conservation law(제약 조건)를 rewiring에 추가해야 실제 network의 spectrum을 재현할 수 있는지를 탐구한다. 후반부에서는 human connectome Laplacian의 level spacing distribution이 Wigner-Dyson과 Poisson 통계의 hybrid, 즉 criticality의 spectral signature를 보인다는 것을 보인다.

## Link to PDF and DOI

- Local PDF: `Spectral_peculiarity_and_criticality_of_a_human_connectome.pdf`
- DOI: [10.1016/j.plrev.2019.07.003](https://doi.org/10.1016/j.plrev.2019.07.003)

## 주요 내용 요약

- **핵심 관찰**: Human connectome의 adjacency matrix spectral density는 다른 생물종에 비해 자신의 degree-preserving randomized version (Maslov-Sneppen, MS)으로부터 가장 크게 벗어나 있음 (EMD 기준, Table 1: Human ≈ 1.45–1.53 vs C. elegans ≈ 0.72).
- **원시 생물 (C. elegans, C. intestinalis)**: vertex degree + 평균 삼각형 개수(triangle preserving constraint, TPC)만 conserve해도 randomized network의 spectrum이 실제 connectome과 잘 일치.
- **고등 생물 (macaque, human)**: TPC만으로는 부족하고, 각 노드별 local clustering coefficient (혹은 노드별 triangle 개수 벡터 T = {T_1, ..., T_N})까지 conserve해야 (local clustering constraint, LCC) spectrum이 잘 재현됨. → 고등 생물의 connectome은 "삼각형이 얼마나 있는가"보다 "어디에 분포하는가"가 구조적으로 중요함을 시사.
- **Rewiring 알고리즘**: Metropolis-type simulated annealing. Null state로 MS-randomized network 또는 maximally clustered network (MCN, 계산 효율을 위한 트릭)를 사용. Cost function은 F = Σ|C_i − C_i0| (clustering coefficient 차이) 또는 T = Σ|T_i − T_i0| (삼각형 개수 차이) 두 metric을 번갈아 최소화.
- **Constrained Erdős–Rényi network (CERN) 분석**: closed 3-motif 개수를 조절하는 chemical potential μ를 늘리면 network가 first-order phase transition을 거쳐 여러 개의 dense clique로 defragmentation됨. μ < μc에서는 spectrum이 Wigner semicircle + 1개의 isolated eigenvalue, μc를 넘으면 isolated eigenvalue들이 cluster 개수만큼 decouple되어 non-perturbative zone을 형성.
- **Criticality 파트**: Laplacian L = D − A의 level spacing distribution P(s)를 (log s, L(s)) 좌표로 분석. 이론적으로 Wigner surmise (delocalized, level repulsion)는 slope 2, Poisson (localized)은 slope 1. Human connectome 2개 데이터셋 모두에서 continuous zone과 discrete zone 둘 다 저-s에서는 Wigner, 고-s에서는 Poisson으로 넘어가는 **hybrid crossover**를 보임 → 3D Anderson localization의 criticality와 동일한 universal P(s) 형태. Barabási-Albert network에서는 이런 crossover가 없음 (discrete zone이 순수 Poisson).
- **Spectral density 자체의 형태**: continuous (central) zone + 여러 개의 isolated eigenvalue (discrete zone, 대략 cluster 개수만큼). Laplacian의 λ2 (algebraic connectivity, Fiedler vector와 연관)는 반구간 diffusion, λ3는 안-바깥 방향 radial diffusion과 연관된다는 선행 연구([40]) 언급.
- **Data**: human 2개 데이터셋 (Hagmann et al. 2008, Open Connectome Project), macaque (CoCoMac, 유일한 소스), C. elegans/C. intestinalis (Open Connectome Project). 네트워크 크기(250~6000 노드)를 바꿔도 결과가 robust함을 확인.

## Questions & Insights

-

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

- [[Link to related concept 1]]
- [[Link to related concept 2]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- Avetisov, Hovhannisyan, Gorsky, Nechaev, Tamm, Valba (2016), "Eigenvalue tunnelling and decay of quenched random networks", Phys. Rev. E 94, 062313 — CERN spectral phase transition의 원전
- de Lange, van den Heuvel, de Reus (2014), "The Laplacian spectrum of neural networks", Front. Comput. Neurosci. 7, 189
- Colomer-de-Simón, Serrano, Beiró, Alvarez-Hamelin, Boguñá (2013), "Deciphering the global organization of clustering in real complex networks", Sci. Rep. 3, 2517
