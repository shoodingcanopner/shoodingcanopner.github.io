---
title: "Thermodynamic Uncertainty Relation (TUR)"
date: "2026-02-20"
subject: stochastic thermodynamics
tags:
  - study
  - concept
  - question
class: study
---

# Thermodynamic Uncertainty Relation (TUR)

## Overview

**"Precision costs dissipation." — 정밀도에는 소산이 따른다.**

비평형 정상 상태에서, 어떤 확률적 흐름(current)의 **상대 분산(relative variance)** 은 그 시스템의 **총 엔트로피 생성률**에 의해 하한이 결정된다.

$$
\frac{\text{Var}[J]}{\langle J \rangle^2} \geq \frac{2k_B}{\Sigma}
\tag{1}
$$

- $\langle J \rangle$: current의 평균
- $\text{Var}[J]$: current의 분산
- $\Sigma$: 총 엔트로피 생성 (EPR × 시간)

분산을 줄이고 싶으면(정밀도를 높이고 싶으면) $\Sigma$를 키워야 한다 — 더 많이 소산해야 한다.

## Key Points

### 직관

비평형 시스템에서 방향성 있는 흐름을 만들려면 에너지를 소모해야 한다. 그런데 그 흐름의 **통계적 정밀도**까지 높이려면 추가적인 소산이 필요하다. TUR은 이 트레이드오프의 하한을 정량적으로 준다.

$$
\underbrace{\frac{\text{Var}[J]}{\langle J \rangle^2}}_{\text{상대 노이즈}^2} \cdot \underbrace{\Sigma}_{\text{소산}} \geq 2k_B
\tag{2}
$$

세 가지 양의 곱이 항상 $2k_B$ 이상 — **정밀도와 소산은 반비례 관계**다.

### Biased Random Walk에서의 TUR (식 19)

입자를 시간 $\tau$ 동안 biased random walk 시키면, 변위 $X_\tau$에 대해:

$$
\frac{\text{Var}[X_\tau]}{\langle X_\tau \rangle^2} = \frac{\Delta S / (2k_B)}{\tanh[\Delta S / (2k_B)]} \cdot \frac{2k_B}{\Sigma_\tau} \geq \frac{2k_B}{\Sigma_\tau}
\tag{3}
$$

- $\Delta S = k_B \ln(k_+/k_-)$: 한 스텝당 엔트로피 생성
- $\Sigma_\tau$: 시간 $\tau$ 동안의 총 엔트로피 생성
- 첫째 인수 $\frac{\Delta S/2k_B}{\tanh[\Delta S/2k_B]} \geq 1$ (항상 성립) → TUR 하한을 위에서 조인다

물리적 의미: 입자를 특정 방향으로 이동시키기 위해서는(평균을 0과 멀리 떨어뜨리기 위해서는) 어느 정도의 variance를 감수할 수밖에 없다. 특히 평균을 더 멀리 이동할수록 variance도 더 커져야 한다.

### 등호 조건

TUR의 등호는 특수한 경우에만 성립한다. biased random walk에서는 $\Delta S \to 0$ (거의 평형) 극한에서 등호에 접근. 일반적으로 비평형 시스템은 TUR 하한보다 항상 크다.

### 생물학적 함의

| 기능 | 요구되는 정밀도 | 필요한 최소 소산 |
|------|----------------|----------------|
| 분자 모터 보폭 정밀도 | $\text{Var}/\langle X \rangle^2$ 작게 | $\Sigma \geq 2k_B / (\text{Var}/\langle J \rangle^2)$ |
| 생체 시계 정확도 | 주기 분산 작게 | 에너지 소모 필수 |
| 화학 신호 정밀도 | 농도 노이즈 작게 | ATP 소모 필수 |

생물학적 시스템이 ATP를 소비하는 이유 중 하나가 TUR — **정밀한 기능 수행에는 열역학적 비용이 반드시 따른다.**

## Questions & Insights

## Related Concepts

- [[Entropy Production Rate]]
- [[Local Detailed Balance]]
- [[Kolmogorov's Criterion]]
- [[Journal reading - Stochastic thermodynamics for biological functions]]

## References

- Cao & Liang, *Stochastic thermodynamics for biological functions*, Quantitative Biology, 2025. DOI: 10.1002/qub2.75
- Barato AC, Seifert U. Thermodynamic uncertainty relation for biomolecular processes. PRL. 2015.

## Notes from Claude

TUR의 등장은 확률론적 열역학의 주요 성과 중 하나였다(2015, Barato & Seifert). "소산 없이는 정밀도도 없다"는 이 결과는 분자 모터 효율, 생체 시계, 신호 전달 등 다양한 생물학적 문제에 하한을 제공한다. 식 (19)는 biased random walk라는 단순한 모델에서 TUR이 어떻게 구현되는지 보여주는 좋은 예시.
