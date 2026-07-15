---
title: "Local Detailed Balance"
date: "2026-02-19"
subject: stochastic thermodynamics
tags:
  - study
  - concept
  - question
class: study
---

# Local Detailed Balance (LDB)

## Overview

**엔트로피를 많이 만드는 방향의 반응이 더 빠르게 일어난다.** 

**국소 세부 균형(Local Detailed Balance)** 은 확률론적 열역학의 핵심 원리로, 마스터 방정식으로 기술되는 시스템에서 **개별 전이 쌍의 속도비**를 그 전이가 환경에 생성하는 **엔트로피**로 연결한다.

전통적인 detailed balance가 평형 시스템 전체에 성립하는 전역적 조건인 반면, LDB는 비평형 시스템에서도 **각 전이마다 국소적으로** 열역학을 도입한다. "Local"이라는 이름은 여기서 왔다.

## Key Points

### 핵심 식

| Symbol | Meaning |
|--------|---------|
| $W_{ij}$ | 상태 $j \to i$의 전이 속도(rate) |
| $\Delta S^{\text{env}}_{ij}$ | 전이 $j \to i$로 인해 환경에 생성되는 엔트로피 |
| $e_i$ | 상태 $i$의 에너지 |
| $F_{ij}$ | 비평형 구동력 (driving force), $F_{ij} = -F_{ji}$ |
| $T$ | 환경의 온도 |

$$
\frac{W_{ij}}{W_{ji}} = e^{\Delta S^{\text{env}}_{ij} / k_B}
\tag{1}
$$

환경 엔트로피 변화는 두 기여로 분해된다:

$$
\Delta S^{\text{env}}_{ij} = \frac{e_j - e_i}{T} + F_{ij}
\tag{2}
$$

- **첫째 항**: 순수한 에너지 차이에서 오는 기여 → 평형에서도 존재
- **둘째 항 $F_{ij}$**: 외부 비평형 구동력 → ATP 가수분해, 이온 농도 기울기 등에서 비롯됨

### 평형과의 관계

$F_{ij} = 0$이면 LDB는 전통적인 **detailed balance condition**으로 환원된다:

$$
\frac{W_{ij}}{W_{ji}} = e^{-\beta(e_i - e_j)}
\tag{3}
$$

이 경우 시스템은 볼츠만 분포 $p^{\text{eq}}_i \propto e^{-\beta e_i}$로 이완한다.

### Cycle Affinity와의 연결

네트워크의 사이클 $c = [m_0, m_1, \ldots, m_n, m_0]$에 대해 **cycle affinity**를 정의할 수 있다:

$$
F_c = \ln \frac{W_{m_0,m_1} W_{m_1,m_2} \cdots W_{m_n,m_0}}{W_{m_1,m_0} W_{m_2,m_1} \cdots W_{m_0,m_n}}
\tag{4}
$$

LDB를 적용하면 $F_c$는 그 사이클을 한 바퀴 돌 때 생성되는 총 엔트로피와 같다. $F_c \neq 0$이면 시간 역전 대칭이 깨진 것이고(시계 방향과 시계 반대 방향 흐름의 속도가 다르므로.), 시스템은 비평형 상태. $F_c = 0$ (모든 사이클에 대해)이면 평형 ← **[[Kolmogorov's Criterion]]**.

### $F_{ij}$를 만드는 생물학적 요인

- **ATP/GTP 가수분해**: ~20 $k_BT$ 자유에너지 공급. 분자 모터, 리보솜, 운동학적 교정(kinetic proofreading)에 사용
- **이온 농도 기울기**: 양성자 구동력(proton motive force) 등. 세균 편모 모터, ATP 합성효소
- **인산화 포텐셜** ($\Delta\mu$): PdP 사이클에서 초민감도(ultrasensitivity)의 원천

## Questions & Insights

- Q: 평형에서 $W_{ij} = W_{ji}$가 성립한다고 알고 있었는데, 이게 LDB에 들어있는 내용인가?
  A: 엄밀히는 틀렸다. 평형에서 성립하는 건 **detailed balance condition** $p^{\text{eq}}_i W_{ji} = p^{\text{eq}}_j W_{ij}$이지, 전이 속도 자체가 같다는 게 아니다. $W_{ij} = W_{ji}$는 에너지 차이도 없고 driving force도 없는 특수한 경우에만 성립. LDB에서 $F_{ij}=0$으로 놓으면 $W_{ij}/W_{ji} = e^{(e_j-e_i)/k_BT}$가 나오고, 여기에 볼츠만 분포를 대입하면 detailed balance condition이 자동으로 유도된다. 즉 LDB는 detailed balance를 **함의**한다.

- Q: Kolmogorov's criterion에서 cycle이 네트워크의 모든 상태를 방문해야 하나?
  A: 아니다. 고리를 이루기만 하면 — 시작점으로 돌아오는 임의의 닫힌 경로면 — 유효한 사이클이다. Criterion은 "모든 가능한 사이클에 대해" $F_c = 0$이어야 한다는 것. 작은 사이클 하나라도 $F_c \neq 0$이면 시스템 전체가 비평형이 된다. 실제로는 independent한 사이클들의 집합(cycle basis)만 확인하면 충분하다.

## Related Concepts

- [[detailed balance]]
- [[Nonequilibrium_Thermodynamics_Basic_Concepts]]
- [[Kolmogorov's Criterion]]
- [[📑 Journal reading - Stochastic thermodynamics for biological functions]]

## References

- Cao & Liang, *Stochastic thermodynamics for biological functions*, Quantitative Biology, 2025. DOI: 10.1002/qub2.75
- Maes C. Local detailed balance. SciPost Phys Lect Notes. 2021.

## Notes from Claude

LDB의 물리적 직관: 전이 속도비가 그 전이가 우주(시스템+환경)에 얼마나 많은 엔트로피를 만드는지에 의해 결정된다는 것. 

엔트로피를 많이 만드는 방향(비가역적 방향)이 훨씬 빠르게 일어난다. 이건 열역학 제2법칙의 운동학적 표현이라고 볼 수 있다.
