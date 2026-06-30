---
title: Static Fluctuation-Response Theorem
date: 2026-02-03
subject: statistical physics
tags:
  - study
  - concept
  - question
class: study
---

# Static Fluctuation-Response Theorem
FRT

## Overview

시스템의 **susceptibility**(외부 자극에 대한 응답)가 **자극이 없을 때의 내재적 요동**으로 결정된다는 정리이다.

$$
\langle \Delta \mathcal{X}_j \Delta \mathcal{X}_i \rangle_0 = k_B T \frac{\partial}{\partial f_i} \Delta X_j \tag{5}
$$

이 노트에서는 이것의 유도 과정을 다룬다. 

## Symbol Table
 [[Statistical Physics for Biological Matter (Woo)]]의 
 chapter 9 설명 부분을 보고 오기를 추천

| Symbol                    | Meaning                                |
| ------------------------- | -------------------------------------- |
| $\mathcal{H}_0$           | perturebation이 없을 때 원래 해밀토니안           |
| $\mathcal{H}'$            | perturbation term                      |
| $f_i$                     | 외부 자극 (힘 또는 field)                     |
| $\mathcal{X}_i$           | $f_i$에 conjugate한 microscopic variable |
| $\langle \cdot \rangle_0$ | 섭동이 없을 때의 앙상블 평균                       |
| $\Delta \mathcal{X}_i$    | microscopic fluctuation                |
| $\chi_i$                  | static susceptibility                  |

## Key Points

### 설정

외부 자극 $f_i$에 의한 perturbation term:

$$
\mathcal{H}' = -f_i \mathcal{X}_i \tag{1}
$$

### 유도의 핵심 가정

 $\langle \mathcal{X}_j \rangle$를 구하기 위해 partition function과 Boltzman factor를 이용한 평균값 구하기를 하면 된다. 
Perturbation이 충분히 작다는 가정을 하여, **exponential을 1차 테일러 전개**한다:

$$
e^{\beta f_i \mathcal{X}_i} \approx 1 + \beta f_i \mathcal{X}_i \tag{2}
$$

이 근사가 전체 유도의 출발점이다.

풀다 보면 나오는 분모를 한번 더 테전해야 하기도 하는구나..

### 앙상블 평균 계산

섭동이 있을 때 $\mathcal{X}_j$의 앙상블 평균:

$$
\langle \mathcal{X}_j \rangle = \frac{\sum_M \mathcal{X}_j e^{-\beta \mathcal{H}}}{\sum_M e^{-\beta \mathcal{H}}} \approx \frac{\sum_M \mathcal{X}_j e^{-\beta \mathcal{H}_0}(1 + \beta f_i \mathcal{X}_i)}{\sum_M e^{-\beta \mathcal{H}_0}(1 + \beta f_i \mathcal{X}_i)} \tag{3}
$$

분자와 분모를 각각 $\langle \cdot \rangle_0$로 정리하면:

$$
\langle \mathcal{X}_j \rangle \approx \frac{\langle \mathcal{X}_j \rangle_0 + \beta f_i \langle \mathcal{X}_j \mathcal{X}_i \rangle_0}{1 + \beta f_i \langle \mathcal{X}_i \rangle_0} \tag{4}
$$

분모를 1차 테일러 전개:

$$
\frac{1}{1 + \beta f_i \langle \mathcal{X}_i \rangle_0} \approx 1 - \beta f_i \langle \mathcal{X}_i \rangle_0 \tag{5}
$$

분자와 곱하고 1차항까지만 남기면:

$$
\langle \mathcal{X}_j \rangle \approx \langle \mathcal{X}_j \rangle_0 + \beta f_i \left( \langle \mathcal{X}_j \mathcal{X}_i \rangle_0 - \langle \mathcal{X}_j \rangle_0 \langle \mathcal{X}_i \rangle_0 \right) = \langle \mathcal{X}_j \rangle_0 + \beta f_i \langle \Delta \mathcal{X}_j \Delta \mathcal{X}_i \rangle_0 \tag{6}
$$

여기서 $\Delta \mathcal{X}_i = \mathcal{X}_i - \langle \mathcal{X}_i \rangle_0$이다.

### Fluctuation-Response Theorem

Average change $\Delta X_j = \langle \mathcal{X}_j \rangle - \langle \mathcal{X}_j \rangle_0$를 정의하면:

$$
\langle \Delta \mathcal{X}_j \Delta \mathcal{X}_i \rangle_0 = k_B T \frac{\partial}{\partial f_i} \Delta X_j \tag{7}
$$

특히 $i = j$일 때:

$$
\langle (\Delta \mathcal{X}_i)^2 \rangle_0 = k_B T \chi_i \tag{8}
$$

여기서 susceptibility는 $\chi_i = \frac{\partial}{\partial f_i} \Delta X_i$이다.

## Questions & Insights

- 유도의 핵심은 **perturbation이 작다는 가정 하에 exponential을 1차 테일러 전개**하는 것
- 이 정리는 **평형 상태의 요동을 측정**하면 **비평형 응답을 예측**할 수 있음을 의미한다
- Static한 경우만 다루며, 시간에 따른 동적 응답은 Chapter 17에서 다룬다

## Related Concepts

만약 자극이 계 전체가 아니라 local하게 작용한다면? 
자극을 준 지점과 반응을 하는 지점 사이 거리까지 고려해야 한다. 
아래 노트로 이어진다.
[[Static Fluctuation-Response Theorem for Continuous Fields]]

- [[Statistical Physics for Biological Matter (Woo)]]
- [[canonical ensemble에서 Boltzman factor]]
- [[Equipartition Theorem]]

## References

- Statistical Physics for Biological Matter (Woo), Chapter 9, 식 (9.1)-(9.5)

## Notes from Claude

- 식 (2)의 테일러 전개만 기억하면 나머지 유도는 자연스럽게 따라온다
- Susceptibility의 정의 $\chi_i = \frac{\partial}{\partial f_i} \Delta X_i$와 요동-응답 정리의 결과 $\langle (\Delta \mathcal{X}_i)^2 \rangle_0 = k_B T \chi_i$를 구분하는 것이 중요하다
