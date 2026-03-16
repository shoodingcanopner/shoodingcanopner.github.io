---
title: Steady-State랑 Equilibrium State 같은 거예요?
date: 2026-02-23
subject: statistical physics
tags:
  - study
  - concept
  - question
class: study
---

# Steady-State vs Equilibrium State

> "Steady-state랑 equilibrium state 같은 거 아니에요?"

많은 사람이 헷갈리는 개념이지만, 핵심 차이는 **probability current**가 흐르는지 여부에 있다.

## 기호 정의

| Symbol        | Meaning                                  |
| ------------- | ---------------------------------------- |
| $\rho_i$      | 상태 $i$의 확률 (stationary distribution)     |
| $W_{i \to j}$ | 상태 $i$에서 $j$로의 전환율 (transition rate)     |
| $J_{ij}$      | 상태 $i \to j$ 방향의 net probability current |

## 공통점: 왜 헷갈리는가

두 상태 모두 **확률 분포가 시간에 따라 변하지 않는다.** 즉,

$$
\frac{d\rho_i}{dt} = 0 \quad \forall i
\tag{1}
$$

이 조건 때문에 외부에서 관찰하면 겉보기에 동일하다. 충분히 긴 시간 동안 확률 분포가 같으므로 어떤 순간의 스냅샷만 보면 구별이 안 된다.

## 차이점: Net Probability Current

상태 $i$에서 $j$로의 net probability current는 다음과 같이 정의된다.

$$
J_{ij} = \rho_i W_{i \to j} - \rho_j W_{j \to i}
\tag{2}
$$

이 current가 0인지 아닌지가 두 상태를 가르는 핵심이다.

### Equilibrium State (열평형 상태)

**Detailed balance** 조건을 만족한다. 즉, **모든 상태 쌍**에 대해 probability current가 0이다.

$$
J_{ij} = \rho_i W_{i \to j} - \rho_j W_{j \to i} = 0 \quad \forall i, j
\tag{3}
$$

이는 각 상태 쌍 사이에서 전환이 정확히 상쇄됨을 의미한다. Cycle을 따라가도 net flux가 없다. 미시적 가역성(microscopic reversibility)이 성립하는 상태다.

### Nonequilibrium Steady-State (NESS)

정상 상태이지만 detailed balance를 **위반**한다. 전체적인 확률은 보존되지만($d\rho_i/dt = 0$), 개별 current는 0이 아니다.

$$
\sum_j J_{ij} = 0 \quad \text{(정상 상태 조건, 각 노드에서 current 보존)}
\tag{4}
$$

$$
J_{ij} \neq 0 \quad \text{for some } (i, j)
\tag{5}
$$

시스템이 **cycle을 돌면서** probability current가 순환한다. 이 순환 flux를 유지하기 위해 외부에서 지속적으로 에너지가 공급되어야 한다. Entropy production rate $\dot{\sigma} > 0$ 이다.

## 요약: 포함 관계

$$
\text{Equilibrium} \subset \text{Steady-state}
$$

평형 상태는 정상 상태의 **부분집합**이다. 정상 상태 조건($d\rho/dt = 0$)은 필요 조건이고, detailed balance는 추가적인 더 강한 조건이다.

| 조건 | Equilibrium | NESS |
|------|-------------|------|
| $d\rho_i/dt = 0$ | ✓ | ✓ |
| $J_{ij} = 0$ (all pairs) | ✓ | ✗ |
| Entropy production $\dot{\sigma}$ | $= 0$ | $> 0$ |
| 외부 에너지 공급 필요 | ✗ | ✓ |

## 직관: 어떻게 구별하는가?

겉보기에 같아 보이지만, 시스템을 **시간 역전(time-reversal)** 하면 차이가 드러난다.

- **Equilibrium**: 시간을 거꾸로 돌려도 동일하게 보인다. (미시적 가역성)
- **NESS**: 시간을 거꾸로 돌리면 cycle의 방향이 반대가 되어 다르게 보인다.

이것이 [[Kolmogorov's Criterion]]과 연결되는 지점이다. Cycle $i \to j \to k \to i$에 대해 정방향과 역방향 전환율의 곱이 같은지 확인한다.

## Questions & Insights


## Related Concepts

- [[detailed balance]]
- [[Entropy Production Rate]]
- [[Markov Process]]
- [[Local Detailed Balance]]
- [[Kolmogorov's Criterion]]
- [[Trajectory Probability in Continuous Time Markov Chains]]

## Notes from Claude

평형 상태와 정상 상태의 구별은 단순한 용어 문제가 아니라, 시스템이 열역학적으로 어떤 상태에 있는지를 판단하는 핵심적인 기준이다. 세포 내 분자 모터, 이온 채널, 유전자 발현 회로 등 생물물리학적 시스템의 대부분은 NESS에 해당한다.
