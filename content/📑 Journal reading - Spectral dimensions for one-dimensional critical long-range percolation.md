---
title: 📑 Spectral dimensions for one-dimensional critical long-range percolation
authors: Zherui Fan, Lu-Jing Huang
DOI: "[DOI](https://doi.org/10.1214/26-EJP1568)"
date read: 2026-08-19
date published: 2026-07-04
subject: probability theory / mathematical physics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Spectral dimensions for one-dimensional critical long-range percolation
![[Pasted image 20260821093419.png]]
Spectral dimension의 정의
![[Pasted image 20260821095242.png]]

Spectral dimension의 식
![[Pasted image 20260821095328.png]]

## Overview

1차원 정수 격자 $\mathbb{Z}$ 위에서 정의된 critical long-range percolation (β-LRP) 모델의 simple random walk에 대해 quenched/annealed spectral dimension이 모두 $d_s = 2/(1+\delta)$로 존재함을 증명한 논문. 여기서 $\delta \in (0,1)$은 이 모델에서 effective resistance가 거리에 대해 갖는 growth exponent. Kumagai–Misumi (2008)의 volume/resistance 기반 heat kernel 추정 기법을 이 특정 모델에 적용해서, 기존에 미해결로 남아있던 $(d,s)=(1,2)$ (critical) 케이스의 spectral dimension 존재성을 확립함.

사용자의 K-matrix (graph Laplacian) 기반 연구와의 연결점: 이 논문의 그래프는 장거리 edge가 거리에 따른 power-law 확률로 무작위로 생기는 구조이고, 이는 사용자의 loop-extrusion 유래 K-matrix의 sparse random long-range coupling과 구조적으로 유사함. 특히 annealed vs quenched spectral property가 다를 수 있다는 논점이 사용자의 "annealed vs quenched spectrum" 노트에서 다룬 문제와 직접 연결됨.

## Link to PDF and DOI

- PDF: [[Spectral dimensions for one-dimensional critical long-range percolation.pdf]]
- DOI: [https://doi.org/10.1214/26-EJP1568](https://doi.org/10.1214/26-EJP1568)

## 주요 내용 요약

- (읽으면서 채워나갈 예정)

## Questions & Insights

- (읽으면서 채워나갈 예정)

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.

- [[K-matrix Diagonalization (Generalized Rouse Model)]]
- [[Fractional Laplacian and Power-law Eigenspectrum]]

## 더 읽어보고 싶은 레퍼런스

- [10] J. Ding, Z. Fan and L.-J. Huang. The polynomial growth of effective resistances in one-dimensional critical long-range percolation. arXiv:2504.21378 (2025) — 이 논문의 핵심 보조정리(효 resistance의 polynomial growth)를 증명한 선행연구 → [[The polynomial growth of effective resistances in one-dimensional critical long-range percolation.pdf]]
- [7] V. H. Can, D. A. Croydon and T. Kumagai. Spectral dimension of simple random walk on a long-range percolation cluster. EJP 27 (2022) — [[Spectral dimension of simple random walk on a long-range percolation cluster.pdf]] (볼트에 이미 존재, MAIN 노트에서 "위 논문의 후속연구"로 언급됨)
- [14] T. Kumagai and J. Misumi. Heat kernel estimates for strongly recurrent random walk on random media. J. Theoret. Probab. 21(4) (2008) — 이 논문의 핵심 증명 기법(volume+resistance → heat kernel)의 출처
