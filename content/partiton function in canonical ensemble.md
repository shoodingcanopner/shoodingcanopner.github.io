---
title: "Canonical Ensemble Partition Function"
date: "2025-11-03"
subject: physics
tags:
  - study
  - concept
  - statistical-mechanics
  - thermodynamics
class: study
---

# Canonical Ensemble Partition Function

## Overview

Canonical ensemble의 partition function (분배함수) Z는 모든 상태에 대한 Boltzmann factor의 합으로 정의된다. 이는 통계역학에서 가장 중요한 함수 중 하나로, 시스템의 모든 열역학적 성질을 유도할 수 있는 생성함수(generating function) 역할을 한다.

## Symbols and Notations

| Symbol | Meaning |
|--------|---------|
| $Z$ | Partition function (분배함수) |
| $\beta$ | $1/(k_B T)$, inverse temperature |
| $k_B$ | Boltzmann constant |
| $T$ | Temperature |
| $E_i$ | Energy of state $i$ |
| $P_i$ | Probability of state $i$ |
| $\langle E \rangle$ | Average energy |
| $F$ | Helmholtz free energy |
| $C_V$ | Heat capacity at constant volume |
| $\mu$ | Magnetic moment |
| $B$ | External magnetic field |

## Key Points

### Definition of Partition Function

Canonical ensemble에서 partition function은 다음과 같이 정의된다:

$$Z = \sum_i e^{-\beta E_i} \tag{1}\label{eq:partition}$$

여기서 합은 시스템의 모든 가능한 미시상태(microstate)에 대해 수행된다.

### Physical Meaning

- Partition function은 시스템이 취할 수 있는 모든 상태의 "통계적 무게"를 합한 것
- $Z$가 크다 = 접근 가능한 상태가 많다 = 높은 엔트로피
- 온도 $T$에서 시스템의 열역학적 성질을 완전히 결정

## Partition Function을 통해 물리량 구하기

### 1. Probability of Each State

각 상태 $i$가 발견될 확률은:

$$P_i = \frac{e^{-\beta E_i}}{Z} \tag{2}\label{eq:probability}$$

이는 정규화 조건 $\sum_i P_i = 1$을 만족한다.

**유도:**
Canonical ensemble에서 Boltzmann factor $e^{-\beta E_i}$는 상태 $i$의 상대적 확률을 나타낸다. 이를 정규화하면:

$$P_i = \frac{e^{-\beta E_i}}{\sum_j e^{-\beta E_j}} = \frac{e^{-\beta E_i}}{Z}$$

### 2. Average Energy

시스템의 평균 에너지는:

$$\langle E \rangle = \sum_i P_i E_i = \sum_i \frac{E_i e^{-\beta E_i}}{Z} \tag{3}\label{eq:avg_energy_1}$$

이를 partition function의 미분으로 표현할 수 있다:

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta} \tag{4}\label{eq:avg_energy_2}$$

**유도:**

$$\frac{\partial Z}{\partial \beta} = \frac{\partial}{\partial \beta}\sum_i e^{-\beta E_i} = \sum_i (-E_i)e^{-\beta E_i} = -\sum_i E_i e^{-\beta E_i}$$

따라서:

$$\langle E \rangle = \sum_i E_i \frac{e^{-\beta E_i}}{Z} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta} = -\frac{\partial \ln Z}{\partial \beta}$$

### 3. Helmholtz Free Energy

Helmholtz free energy는 partition function과 직접 연결된다:

$$F = -k_B T \ln Z = -\frac{1}{\beta}\ln Z \tag{5}\label{eq:helmholtz}$$

이로부터:

$$Z = e^{-\beta F} \tag{6}$$

**의미:** Free energy는 시스템이 유용한 일을 할 수 있는 에너지를 나타낸다.

**유도:** 
열역학적 관계식 $F = E - TS$와 $S = -k_B \sum_i P_i \ln P_i$를 이용하면 위 식을 얻을 수 있다.
-> 교과서 이용해서 내용 추가하기

### 4. Entropy

Entropy는:

$$S = -\frac{\partial F}{\partial T} = k_B \ln Z + k_B T \frac{\partial \ln Z}{\partial T} \tag{7}$$

또는:

$$S = k_B(\ln Z + \beta \langle E \rangle) \tag{8}$$

### 5. Heat Capacity

정적 비열(heat capacity at constant volume)은:

$$C_V = \frac{\partial \langle E \rangle}{\partial T} = k_B \beta^2 \frac{\partial^2 \ln Z}{\partial \beta^2} \tag{9}\label{eq:heat_capacity}$$

이는 에너지 요동(energy fluctuation)과도 관련된다:

$$C_V = \frac{1}{k_B T^2}(\langle E^2 \rangle - \langle E \rangle^2) \tag{10}$$

## Example: 2-State Paramagnetic System

### System Setup

- N개의 독립적인 자기 쌍극자(magnetic dipoles)
- 각 쌍극자는 spin up ($\uparrow$) 또는 spin down ($\downarrow$) 상태
- 외부 자기장 B에 의해서만 에너지가 결정 (쌍극자 간 상호작용 무시)
- Spin up 에너지: $E_\uparrow = -\mu B$
- Spin down 에너지: $E_\downarrow = +\mu B$

### Single Dipole Partition Function

하나의 쌍극자에 대한 partition function:

$$Z_1 = e^{-\beta(-\mu B)} + e^{-\beta(+\mu B)} = e^{\beta \mu B} + e^{-\beta \mu B} = 2\cosh(\beta \mu B) \tag{11}\label{eq:single_dipole}$$

### Probabilities

Spin up일 확률:

$$P_\uparrow = \frac{e^{\beta \mu B}}{Z_1} = \frac{e^{\beta \mu B}}{2\cosh(\beta \mu B)} = \frac{1}{1 + e^{-2\beta \mu B}} \tag{12}$$

Spin down일 확률:

$$P_\downarrow = \frac{e^{-\beta \mu B}}{Z_1} = \frac{e^{-\beta \mu B}}{2\cosh(\beta \mu B)} = \frac{1}{1 + e^{2\beta \mu B}} \tag{13}$$

검증: $P_\uparrow + P_\downarrow = 1$ ✓

### Average Energy of Single Dipole

$$\langle E_1 \rangle = -\frac{\partial \ln Z_1}{\partial \beta} = -\frac{\partial}{\partial \beta}\ln[2\cosh(\beta \mu B)] \tag{14}$$

$$\langle E_1 \rangle = -\mu B \tanh(\beta \mu B) \tag{15}\label{eq:single_avg_energy}$$

**물리적 의미:**
- $T \to 0$ (즉, $\beta \to \infty$): $\tanh(\beta \mu B) \to 1$이므로 $\langle E_1 \rangle \to -\mu B$ (모두 spin up)
- $T \to \infty$ (즉, $\beta \to 0$): $\tanh(\beta \mu B) \to 0$이므로 $\langle E_1 \rangle \to 0$ (spin up과 down이 동일 확률)

### Total System of N Dipoles

N개의 독립적인 쌍극자의 partition function:

$$Z_N = (Z_1)^N = [2\cosh(\beta \mu B)]^N \tag{16}$$

평균 에너지:

$$\langle E_N \rangle = N \langle E_1 \rangle = -N\mu B \tanh(\beta \mu B) \tag{17}$$

### Heat Capacity

식 $\eqref{eq:heat_capacity}$를 이용하여 비열을 구할 수 있다:

$$C_V = \frac{\partial \langle E_N \rangle}{\partial T} = Nk_B(\beta \mu B)^2 \text{sech}^2(\beta \mu B) \tag{18}$$

**물리적 특징:**
- $T \to 0$: $C_V \to 0$ (양자 통계에 의한 freezing)
- $T \to \infty$: $C_V \to 0$ (모든 상태가 동등하게 점유)
- 중간 온도에서 최댓값을 가짐 (Schottky anomaly)

## Questions & Insights

- Partition function이 생성함수 역할을 한다는 것이 흥미롭다. 단 하나의 함수에서 모든 열역학적 성질을 유도할 수 있다.
- $\ln Z$가 extensive quantity인 이유는? → N개 독립 입자면 $Z = Z_1^N$이므로 $\ln Z = N \ln Z_1$
- Canonical ensemble과 microcanonical ensemble의 partition function은 어떻게 다른가?
- Grand canonical ensemble에서는 어떻게 확장되는가?

## Related Concepts

- [[Equipartition Theorem]]
- [[Markov Property]]
- [[canonical ensemble에서 Boltzman factor]]
- [[microcanonical ensemble의 entropy]]
- [[Stirling Approximation]]
- [[깁스자유에너지와 평형상수]]
- [[열역학 자연변수와 르장드르 변환]]
- [[이상 기체의 미시 상태 수]]

## References

## Notes from Claude

이 노트는 사용자가 작성한 초안을 바탕으로 학습 노트 템플릿에 맞춰 재구성하고 내용을 추가한 것입니다. 

핵심 개념:
1. Partition function은 통계역학의 중심 도구
2. 미분을 통해 모든 물리량을 유도 가능
3. 2-state paramagnetic system은 가장 간단하면서도 본질적인 예제
