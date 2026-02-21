---
title: "Kolmogorov's Criterion"
date: "2026-02-20"
subject: stochastic thermodynamics
tags:
  - study
  - concept
  - question
class: study
---

# Kolmogorov's Criterion

## Overview

**Kolmogorov's criterion**은 마스터 방정식으로 기술되는 Markov 시스템이 **열역학적 평형 상태인지 판별하는 조건**이다. 네트워크 내의 모든 사이클에 대해 cycle affinity가 0이면, 그 시스템은 평형이다.

## Key Points

### Cycle Affinity

사이클 $c = [m_0, m_1, \ldots, m_n, m_0]$에 대해 cycle affinity를 정의한다:

$$
F_c = \ln \frac{W_{m_0,m_1} W_{m_1,m_2} \cdots W_{m_n,m_0}}{W_{m_1,m_0} W_{m_2,m_1} \cdots W_{m_0,m_n}}
\tag{1}
$$

LDB를 적용하면 $F_c$는 그 사이클을 한 바퀴 순환할 때 생성되는 **총 엔트로피**와 같다.

### Criterion 본문

$$
F_c = 0 \quad \text{for all cycles} \iff \text{시스템이 평형}
\tag{2}
$$

- $F_c \neq 0$인 사이클이 하나라도 존재하면 → 시스템은 **비평형**, 시간 역전 대칭이 깨짐
- 모든 사이클에 대해 $F_c = 0$ → 시스템은 **평형**, 볼츠만 분포로 이완 가능

### 사이클의 범위

사이클은 네트워크의 **모든 상태를 방문할 필요가 없다**. 고리를 이루기만 하면 — 즉 시작점으로 돌아오는 임의의 닫힌 경로면 — 유효한 사이클이다.

- 5개 상태 네트워크에서 {1, 2, 3}만 도는 삼각형 사이클도 완전히 유효
- 실제 확인 시에는 **independent한 사이클들의 집합(cycle basis)** 만 확인하면 충분하다. 나머지 사이클은 모두 cycle basis의 선형결합으로 표현되기 때문.

### 직관

평형 시스템에서는 어떤 닫힌 경로를 순환해도 알짜 엔트로피가 생성되지 않는다. $F_c = 0$은 이것의 수학적 표현이다. 반대로 비평형 구동력($F_{ij} \neq 0$)이 존재하면 특정 사이클에서 일방통행이 생겨 $F_c \neq 0$이 된다.

## Questions & Insights

## Related Concepts

- [[Local Detailed Balance]]
- [[detailed balance]]
- [[Nonequilibrium_Thermodynamics_Basic_Concepts]]

## References

- Cao & Liang, *Stochastic thermodynamics for biological functions*, Quantitative Biology, 2025. DOI: 10.1002/qub2.75
- Kolmogoroff A. Zur Theorie der Markoffschen Ketten. Math Ann. 1936;112(1):155–60.

## Notes from Claude

Kolmogorov's criterion의 핵심 실용성: 네트워크가 평형인지 확인하려면 전이 속도 행렬 전체를 분석할 필요 없이, cycle basis만 점검하면 된다. 생물학적 맥락에서는 ATP 등의 에너지 투입이 반드시 어떤 사이클에서 $F_c \neq 0$을 만들어내고, 이것이 비평형 기능의 열역학적 근거가 된다.
