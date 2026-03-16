---
title: "Entropy Production Rate"
date: "2026-02-20"
subject: stochastic thermodynamics
tags:
  - study
  - concept
  - question
class: study
---

# Entropy Production Rate (EPR)

## Overview

**엔트로피 생성률(Entropy Production Rate, EPR)** 은 확률론적 열역학에서 시스템의 비가역성을 정량화하는 핵심 양이다. 마스터 방정식으로 기술되는 시스템에서 앙상블 수준의 평균 엔트로피 생성률을 정의한다.

## Key Points

### 기호 정리

| Symbol                                   | Meaning                                   |
| ---------------------------------------- | ----------------------------------------- |
| ${J}_{ij} = W_{ij}p_j$                   | $j \to i$ 방향의 확률 흐름 (probability current) |
| $\mathcal{J}_{ij} = {J}_{ij} - {J}_{ji}$ | net current ($j \to i$ 방향으로 볼 때)          |
| $\dot{\Sigma}_{tot}$                     | 총 EPR                                     |
| $\dot{\Sigma}_{env}$                     | 환경 EPR                                    |
| $\dot{\Sigma}_{sys}$                     | 시스템 EPR                                   |

### EPR의 정의

$$
\dot{\Sigma}_{tot} = k_B \sum_{i,j>i} \mathcal{J}_{ij} \ln \frac{{J}_{ij}}{{J}_{ji}}
\tag{1}
$$

### 왜 이렇게 정의하는가 — 직관

엔트로피 생성은 "얼마나 비가역적인가"의 척도다. 비가역성은 앞방향과 뒷방향 흐름의 **불균형**에서 온다.

- ${J}_{ij} = {J}_{ji}$ → 완전히 균형, 이 쌍에서 엔트로피 생성 없음
- ${J}_{ij} \gg {J}_{ji}$ → 한 방향으로 치우침, 비가역적 → 엔트로피 생성

불균형의 척도로 $\ln({J}_{ij}/{J}_{ji})$를 쓰는 이유: ${J}_{ij} = {J}_{ji}$일 때 정확히 0, 대칭적으로 증가. 불균형의 "양"은 net current $\mathcal{J}_{ij}$로 가중하므로, 두 개를 곱한 $\mathcal{J}_{ij} \ln({J}_{ij}/{J}_{ji})$가 각 엣지의 기여가 된다.

또한 $\mathcal{J}_{ij}$와 $\ln({J}_{ij}/{J}_{ji})$는 항상 **같은 부호**이므로, 모든 항이 비음수 → $\dot{\Sigma}_{tot} \geq 0$. 열역학 제2법칙이 자동으로 나온다.

### EPR의 분해: LDB를 이용한 유도

$\ln({J}_{ij}/{J}_{ji})$를 전개한다:

$$
\ln \frac{{J}_{ij}}{{J}_{ji}} = \ln \frac{W_{ij}p_j}{W_{ji}p_i} = \ln \frac{W_{ij}}{W_{ji}} + \ln \frac{p_j}{p_i}
\tag{2}
$$

LDB 조건 $\ln(W_{ij}/W_{ji}) = \Delta S^{env}_{ij}/k_B$를 대입하면, EPR이 두 항으로 분리된다:

$$
\dot{\Sigma}_{tot} = \underbrace{k_B \sum_{i,j>i} \mathcal{J}_{ij} \ln \frac{W_{ij}}{W_{ji}}}_{\dot{\Sigma}_{env}} + \underbrace{k_B \sum_{i,j>i} \mathcal{J}_{ij} \ln \frac{p_j}{p_i}}_{\dot{\Sigma}_{sys}}
\tag{3}
$$

### $\dot{\Sigma}_{sys}$가 Shannon 엔트로피 시간미분임을 유도

Shannon 엔트로피를 $S_{sys} = -k_B \sum_i p_i \ln p_i$로 정의하면, 시간미분은:

$$
\dot{S}_{sys} = -k_B \sum_i \dot{p}_i (\ln p_i + 1) = -k_B \sum_i \dot{p}_i \ln p_i
\tag{4}
$$

마지막 등호는 $\sum_i \dot{p}_i = \frac{d}{dt}\sum_i p_i = 0$이기 때문이다. → *아-하!!!*

여기에 마스터 방정식(continuity equation, 식 2)을 대입한다:

$$
\dot{p}_i = \sum_{j \neq i} (W_{ij}p_j - W_{ji}p_i) = \sum_{j \neq i} \mathcal{J}_{ij}
\tag{5}
$$

따라서:

$$
\dot{S}_{sys} = -k_B \sum_i \ln p_i \sum_{j \neq i} \mathcal{J}_{ij}
\tag{6}
$$

$i$와 $j$ 인덱스를 교환하는 대칭화 트릭을 쓴다. $\mathcal{J}_{ij} = -\mathcal{J}_{ji}$이므로:

$$
\dot{S}_{sys} = -k_B \sum_i \ln p_i \sum_{j>i} \mathcal{J}_{ij} + k_B \sum_j \ln p_j \sum_{i>j}(-\mathcal{J}_{ij})
$$

$$
= k_B \sum_{i,j>i} \mathcal{J}_{ij} (\ln p_j - \ln p_i) = k_B \sum_{i,j>i} \mathcal{J}_{ij} \ln \frac{p_j}{p_i}
\tag{7}
$$

이것이 정확히 식 (3)의 $\dot{\Sigma}_{sys}$와 같다. 즉:

$$
\dot{\Sigma}_{sys} = \dot{S}_{sys} = \frac{d}{dt}\left(-k_B \sum_i p_i \ln p_i\right)
\tag{8}
$$

### 비평형 정상 상태에서

정상 상태(stationary state)에서는 $\dot{p}_i = 0$이므로 $\dot{\Sigma}_{sys} = 0$. 따라서:

$$
\dot{\Sigma}_{tot} = \dot{\Sigma}_{env} \geq 0
\tag{9}
$$

정상 상태에서의 모든 엔트로피 생성은 환경으로 나간다. 단, net current $\mathcal{J}_{ij} \neq 0$일 수 있으므로(비평형 정상 상태), $\dot{\Sigma}_{tot} > 0$일 수 있다.

## Questions & Insights

논문 6페이지 중에서

![[Pasted image 20260220170452.png]]
$$\Delta S = k_B \ln(k_+/k_-)$$
1D random walk에서 1 step 을 진행할 때 위의 공식과 같이 엔트로피가 생성된다고 한다. 
- Q: biased random walk에서 선호하는 방향으로 이동할수록 엔트로피가 감소해야 하지 않나? 더 규칙적이고 무작위성에서 멀어지는 거니까.

  A: 그건 **시스템의 엔트로피**를 떠올린 것. 여기서 $\Delta S = k_B \ln(k_+/k_-)$는 **우주 전체(시스템+환경)의 엔트로피**다. biased walk의 방향성은 ATP 같은 외부 에너지 투입에서 비롯되고, 그 에너지가 환경으로 열로 흘러나가며 환경의 엔트로피를 올린다. 시스템 안에서 입자가 규칙적으로 움직이는 것처럼 보여도, ==그 규칙을 만들기 위해 환경에 훨씬 많은 무질서가 생긴다.== $\Delta S > 0$에서 분자가 $k_+$(선호 방향)인 이유는 LDB에서 직접 나온다: $k_+/k_- = e^{\Delta S^{env}/k_B}$.

| | 시스템 엔트로피 | 환경 엔트로피 | 총 엔트로피 |
|---|---|---|---|
| unbiased ($k_+=k_-$) | 증가(확산) | 0 | 증가 |
| biased ($k_+>k_-$) | 감소할 수도 있음 | 크게 증가 | 반드시 증가 |

비평형 정상 상태에서는 $\dot{\Sigma}_{sys}=0$, $\dot{\Sigma}_{env} = \dot{\Sigma}_{tot} > 0$.

## Related Concepts

- [[Local Detailed Balance]]
- [[Kolmogorov's Criterion]]
- [[detailed balance]]
- [[Gibbs Entropy]]
- [[Journal reading - Stochastic thermodynamics for biological functions]]

## References

- Cao & Liang, *Stochastic thermodynamics for biological functions*, Quantitative Biology, 2025. DOI: 10.1002/qub2.75

## Notes from Claude

식 (7)의 대칭화 트릭이 핵심이다. $i \leftrightarrow j$ 교환을 통해 $\sum_i \ln p_i \sum_{j} \mathcal{J}_{ij}$를 $\sum_{i,j>i} \mathcal{J}_{ij} \ln(p_j/p_i)$로 바꾸는 것 — 이 계산이 EPR 분해 전체를 깔끔하게 만든다.
