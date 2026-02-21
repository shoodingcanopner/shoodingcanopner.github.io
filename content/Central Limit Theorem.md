---
title: Central Limit Theorem
date: 2025-08-22
subject: mathematics, statistical_physics
tags:
  - study
  - concept
  - probability
  - statistics
  - mathematics
  - brownian_motion
class: study
---
[[MOCs/Stochastic Differential Equations 공부하기]]
# Central Limit Theorem

## Notation

| 기호          | 의미                                      |
| ----------- | --------------------------------------- |
| $X_i$       | $i$번째 독립 확률변수                           |
| $\mu$       | 확률변수의 평균 $E[X_i]$                       |
| $\sigma^2$  | 확률변수의 분산 $\text{Var}(X_i)$              |
| $S_n$       | $n$개 확률변수의 합 $X_1 + X_2 + \cdots + X_n$ |
| $\bar{X}_n$ | 표본평균 $S_n/n$      *처음 보는 개념!*           |
| $Z_n$       | 표준화된 확률변수                               |
| $N(a,b)$    | 평균 $a$, 분산 $b$인 정규분포                    |
| $N(0,1)$    | 표준정규분포                                  |
| $B_t$       | 브라운 운동하는 한 입자의 시간 t에서 위치                |

## Overview

중심극한정리는 확률론과 통계학의 가장 중요한 정리 중 하나로, 많은 독립적인 확률변수들의 합이 정규분포에 수렴한다는 것을 보여준다. 이는 브라운 운동의 이론적 기초이며, 자연현상에서 정규분포가 흔히 나타나는 이유를 설명한다.

## Key Points

$n$ 수가 늘어 나면
 - 평균은 $n$에 선형 증가한다.
 - 분산도 $n$에 선형 증가한다.
 - 표준편차는  $\sqrt{n}$ 법칙을 따른다. 
 - 상대표준편차는 $\frac{1}{\sqrt{n}}$ 법칙을 따른다. 

### 수학적 진술

독립이고 동일한 분포를 가진 확률변수들 $X_1, X_2, X_3, \ldots$에 대해:
- $E[X_i] = \mu$ (평균)
- $\text{Var}(X_i) = \sigma^2$ (분산)


합을 $S_n = X_1 + X_2 + \cdots + X_n$이라 하고, 표본평균을 $\bar{X}_n = S_n/n$이라 하면,
표준화된 분포 $Z_n$ 은 아래 식으로 나타낼 수 있다.:

$$Z_n = \frac{S_n - n\mu}{\sigma\sqrt{n}} = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \tag{1}$$

일 때, $n \to \infty$이면 $Z_n \to N(0,1)$ (표준정규분포)



### 핵심 스케일링 법칙, 이거라도 알자!

독립 확률변수들의 합에서 나타나는 보편적 패턴:
- 평균: $E[S_n] = n\mu$ (선형 증가)
- 분산: $\text{Var}(S_n) = n\sigma^2$ (선형 증가) -> 브라운 운동의 MSE는 시간에 대해해 선형 증가한다는 것과 연관
- 표준편차: $\text{SD}(S_n) = \sigma\sqrt{n}$ ($\sqrt{n}$ 법칙)
- 상대표준편차: $\frac{\text{SD}(S_n)}{E[S_n]} = \frac{\sigma\sqrt{n}}{n\mu}$ ($\frac{1}{\sqrt{n}}$ 법칙)

### 표준화의 의미

표준화 과정의 두 단계:
1. 중심화: $S_n - n\mu$ (평균을 0으로)
2. 스케일 조정: $(S_n - n\mu)/(\sigma\sqrt{n})$ (분산을 1로)

표본평균의 관점에서:
- $E[\bar{X}_n] = \mu$ (불편 추정량)
- $\text{Var}(\bar{X}_n) = \sigma^2/n$ (정확도가 $1/\sqrt{n}$으로 개선)

### 구체적 예시: 동전 던지기

$n$번 동전 던지기에서 앞면 개수 $S_n$:
- 개별 결과: $X_i \sim \text{Bernoulli}(0.5)$
- $\mu = 0.5$, $\sigma^2 = 0.25$

시행 횟수별 분포:
- $n = 100$: $S_{100} \approx N(50, 25)$, 표준편차 = 5
- $n = 10000$: $S_{10000} \approx N(5000, 2500)$, 표준편차 = 50

상대적 정확도:
- $n = 100$: 상대 표준편차 = $5/50 = 10\%$
- $n = 10000$: 상대 표준편차 = $50/5000 = 1\%$

## Questions & Insights

### 왜 정규분포가 등장하는가?

1. 오차의 상쇄 효과: 큰 값과 작은 값이 서로 상쇄되어 평균으로 회귀
2. 변동의 감소: 개별 변동들이 $\sqrt{n}$만큼만 누적 (선형이 아님)
3. 자연의 최적성: 주어진 평균과 분산 하에서 엔트로피가 최대인 분포

### $\sqrt{n}$ 법칙의 함의

정확도 개선의 한계:
- 2배 더 정확하려면 4배 더 많은 표본 필요
- 오차 $\propto 1/\sqrt{n}$
- 실용적 한계: 매우 많은 데이터가 필요

### 표준화 식의 두 가지 표현

$$\frac{S_n - n\mu}{\sigma\sqrt{n}} = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \tag{2}$$

첫 번째 형태: 합의 관점 (총합을 표준화)
두 번째 형태: 평균의 관점 (표본평균을 표준화)

## Related Concepts

- [[Moment Generating Function]]

- [[Brownian Motion Properties]]
- [[Cauchy-Schwarz Inequality]]: 분산 계산의 수학적 도구
- [[Generalized Central Limit Theorem Proof]]: Characteristic function을 이용한 CLT 증명

## References

- Bernt Øksendal, "Stochastic Differential Equations", Chapter 2
- 중심극한정리와 브라운 운동의 연결
- 물리적 해석: 분자 충돌의 누적 효과

## Notes from Claude

### 브라운 운동과의 연결

브라운 운동에서 입자에 가해지는 수많은 미시적 충격들:
- 각 충격 = 독립적인 확률변수
- 시간 간격 $\Delta t$ 동안의 위치 변화 = 많은 충돌의 합
- 중심극한정리 적용 → $B_t - B_s \sim N(0, |t-s|)$

물리적 의미:
- 복잡한 미시적 과정 → 간단한 거시적 법칙 (정규분포)
- 이것이 통계물리학의 핵심 아이디어

### 스케일링과 자기유사성

브라운 운동의 스케일링 성질:
$$B_t \text{와 } \sqrt{t} \cdot B_1 \text{이 같은 분포}$$

이는 중심극한정리의 $\sqrt{n}$ 법칙과 직접 연결됨:
- 시간이 4배 → 분산이 4배 → 표준편차는 2배
- 자연의 프랙탈 구조와 연결

### 실용적 활용

1. 품질 관리: 제품 측정값들의 평균 분포
2. 여론조사: 표본평균의 신뢰구간 계산  
3. 금융: 주가 수익률의 분포 모델링
4. 물리학: 측정 오차의 분포, 통계역학의 열평형

중심극한정리는 단순한 수학 정리를 넘어서 자연현상을 이해하는 핵심 도구이다.
