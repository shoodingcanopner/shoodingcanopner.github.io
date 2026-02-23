---
title: Journal reading - A Flow-Graph Formula for the Stationary Distribution of a Markov Chain
authors: Bruno O. Shubert
DOI: 10.1109/TSMC.1975.5408382
date: 2026-02-23
subject: stochastic processes, markov chains, graph theory
tags:
  - study
  - concept
  - question
class: study_journal
---

# A Flow-Graph Formula for the Stationary Distribution of a Markov Chain

## Overview

마르코프 체인의 정상 분포(stationary distribution)를 전이 행렬의 선형방정식으로 풀지 않고, 전이 그래프의 위상적 구조(spanning tree)로부터 직접 읽어내는 공식을 제시한다. Confluence(합류 트리)라는 개념을 핵심 도구로 사용하며, 각 상태의 정상 확률은 그 상태를 sink로 갖는 모든 confluence의 가중치 합에 비례함을 보인다.

## Link to PDF and DOI

로컬 PDF: [[A_Flow-Graph_Formula_for_the_Stationary_Distribution_of_a_Markov_Chain.pdf]]
DOI: [10.1109/TSMC.1975.5408382](https://doi.org/10.1109/TSMC.1975.5408382)

## 주요 내용 요약

- **Confluence**: 전이 그래프에서 모든 arc가 하나의 sink vertex로 향하는 spanning tree. 각 vertex는 successor가 최대 1개이며 cycle이 없는 최대 부분그래프.
- **핵심 공식**: $\mu_i = C \sum_{f \in \Phi_i} p(f)$, 여기서 $p(f) = \prod_{(i,j) \in B} p_{ij}$는 confluence를 구성하는 arc들의 전이확률의 곱.
- **증명의 핵심**: $S_j = R_j$ 임을 보임으로써 $\boldsymbol{\mu} = \boldsymbol{\mu} P$와 동치임을 확인. 이는 $P - I$의 주 cofactor 벡터와 일치.
- **확장**: regular chain 이외에도 transient state가 있는 체인, absorbing chain, cyclic chain에도 적용 가능.

## Questions & Insights

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

- [[Markov Chain Tree Theorem]]
- [[Link to related concept 1]]
- [[Link to related concept 2]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 

