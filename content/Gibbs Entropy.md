---
title: "Gibbs Entropy"
date: "2025-11-30"
subject: statistical mechanics
tags:
  - study
  - concept
  - entropy
  - statistical-mechanics
  - variational-principle
class: study
---

# Gibbs Entropy

## Overview

Gibbs entropy는 거시상태 분포가 주어졌을 때 가능한 최대 미시상태 엔트로피를 나타내는 개념이다. "거시적 제약 하에서 미시상태는 최대로 무작위"라는 Gibbs의 원리를 수학적으로 구현한 것으로, 열역학 엔트로피와 통계역학을 연결하는 핵심 개념이다. Microcanonical ensemble이 바로 이 최대 엔트로피를 달성하는 분포임을 보여준다.

## Notation

| 기호                      | 의미                                   |
| ----------------------- | ------------------------------------ |
| $\mathcal{C}$           | Phase space (미시상태 공간)                |
| $\hat{\mathcal{C}}$     | Reduced space (거시상태 공간)              |
| $M$                     | 거시상태 (phase cell)                    |
| $\mu$                   | Phase space 위의 확률밀도 (미시상태 공간)        |
| $\hat{\nu}$             | Reduced space 위의 확률분포                |
| $p(\mu)$                | $\mu$를 reduced space로 projection한 분포 |
| $S(\mu)$                | Shannon entropy of $\mu$             |
| $\hat{\nu} \times \rho$ | Microcanonical ensemble              |

## Definition

$$S_G(\hat{\nu}) \equiv \sup_{p(\mu)=\hat{\nu}} S(\mu) \tag{1}$$

**말로 풀어쓰면:**
- 입력: Reduced space 위의 확률분포 $\hat{\nu}$
- 조건: Phase space 분포 $\mu$가 $p(\mu) = \hat{\nu}$를 만족
- 출력: 이러한 모든 $\mu$ 중 Shannon entropy $S(\mu)$의 최댓값

### Consistency condition: $p(\mu) = \hat{\nu}$

$$p(\mu)(M) = \int_M \mu(x) \rho(dx) = \hat{\nu}(M), \quad \forall M \in \hat{\mathcal{C}} \tag{2}$$

**의미:**
- 미시상태 Phase space 분포 $\mu$를 거시상태로 projection했을 때
- 거시상태 분포가 $\hat{\nu}$와 정확히 일치해야 함

## Gibbs Variational Principle

### Main Result

$$S_G(\hat{\nu}) = S(\hat{\nu} \times \rho) \tag{3}$$

**핵심:**
- 최대 엔트로피는 **microcanonical ensemble** $\hat{\nu} \times \rho$에 의해 달성됨
- Microcanonical: $\hat{\nu} \times \rho(x) = \frac{\hat{\nu}(M(x))}{|M(x)|}$

### Proof

임의의 phase space 분포 $\mu$에 대해 $p(\mu) = \hat{\nu}$라고 하자.

**Step 1: 엔트로피 차이 계산**

$$S(\hat{\nu} \times \rho) - S(\mu) = -\int_{\mathcal{C}} (\hat{\nu} \times \rho)(x) \ln(\hat{\nu} \times \rho)(x) dx + \int_{\mathcal{C}} \mu(x) \ln \mu(x) dx \tag{4}$$

**Step 2: 로그 비율로 재구성**

$$= -\int_{\mathcal{C}} \mu(x) \ln \frac{(\hat{\nu} \times \rho)(x)}{\mu(x)} dx + \int_{\mathcal{C}} [\mu(x) - (\hat{\nu} \times \rho)(x)] \ln(\hat{\nu} \times \rho)(x) dx \tag{5}$$

**Step 3: 두 번째 항이 0임을 보이기**

Phase cell $M$별로 적분 분해:
$$\int_{\mathcal{C}} [\mu(x) - (\hat{\nu} \times \rho)(x)] \ln(\hat{\nu} \times \rho)(x) dx = \sum_M \int_M [\mu(x) - (\hat{\nu} \times \rho)(x)] \ln \frac{\hat{\nu}(M)}{|M|} dx \tag{6}$$

$M$ 내부에서 $\ln \frac{\hat{\nu}(M)}{|M|}$는 상수:
$$= \sum_M \ln \frac{\hat{\nu}(M)}{|M|} \left[\int_M \mu(x) dx - \int_M (\hat{\nu} \times \rho)(x) dx\right] \tag{7}$$

$$= \sum_M \ln \frac{\hat{\nu}(M)}{|M|} [\hat{\nu}(M) - \hat{\nu}(M)] = 0 \tag{8}$$

**Step 4: Relative entropy (KL divergence)**

따라서:
$$S(\hat{\nu} \times \rho) - S(\mu) = -\int_{\mathcal{C}} \mu(x) \ln \frac{(\hat{\nu} \times \rho)(x)}{\mu(x)} dx = D_{KL}(\mu \| \hat{\nu} \times \rho) \geq 0 \tag{9}$$

Kullback-Leibler divergence는 항상 비음수이고, 등호는 $\mu = \hat{\nu} \times \rho$일 때만 성립.

**결론:**
$$S(\hat{\nu} \times \rho) \geq S(\mu), \quad \forall \mu \text{ s.t. } p(\mu) = \hat{\nu} \tag{10}$$

따라서:
$$S_G(\hat{\nu}) = S(\hat{\nu} \times \rho) \tag{11}$$

## Physical Interpretation

### Maximum Entropy Principle

**Gibbs의 원리:**
> "거시적 제약(관측 가능한 정보) 하에서, 미시상태는 최대로 무작위적이다"

**수학적 구현:**
- 거시상태 분포 $\hat{\nu}$: 우리가 아는 정보
- Microcanonical ensemble: 이 제약 하에서 최대 무질서
- "우리가 모르는 것에 대해서는 완전히 무작위로 가정"

### Why Microcanonical?

각 phase cell $M$ 내부에서:
- 균등분포 $\frac{1}{|M|}$가 최대 엔트로피
- "같은 거시상태 내의 모든 미시상태는 동등하게 그럴듯"
- 어떤 미시상태를 선호할 이유가 없음

### Connection to Thermodynamic Entropy

Gibbs entropy는 열역학 엔트로피와 가장 가까운 통계역학적 개념:
- 열역학: 거시변수(온도, 압력 등)만 사용
- Gibbs entropy: 거시분포 $\hat{\nu}$를 입력으로 받음
- "관측 가능한 정보로부터 계산 가능한 엔트로피"

## Special Case: Single Macrostate

거시상태가 확실히 $M$으로 고정된 경우:
$$\hat{\nu} = \delta(M - \cdot) \tag{12}$$

이 경우:
$$S_G(\delta(M - \cdot)) = \hat{S}_B(M) = \ln |M| \tag{13}$$

**의미:**
- 거시상태가 확정되면 Gibbs entropy = Boltzmann entropy
- 남은 uncertainty는 순전히 "$M$ 내부의 어느 미시상태인가?"

## Relationship with Shannon and Boltzmann Entropies

세 엔트로피의 관계:
$$S_G(\hat{\nu}) = S(\hat{\nu} \times \rho) = \hat{S}(\hat{\nu}) + \sum_M \hat{\nu}(M) \hat{S}_B(M) \tag{14}$$

**분해:**
- $\hat{S}(\hat{\nu})$: 거시상태의 uncertainty
- $\sum_M \hat{\nu}(M) \hat{S}_B(M)$: 미시상태 다양성의 평균

자세한 유도는 [[Shannon Entropy and Boltzmann Entropy Decomposition]] 참조.

## Example: Ideal Gas

### Setup

기체 분자 $N$개, 부피 $V$, 에너지 $E$ 범위에서:

**거시상태 분포 $\hat{\nu}$:**
- 온도 $T_1 = 300K$일 확률: 0.7
- 온도 $T_2 = 400K$일 확률: 0.3

### Possible Microdistributions

**Distribution A (Microcanonical):**
```
T₁ phase cell 안: 완전 균등분포 ρ = 1/|M₁|
T₂ phase cell 안: 완전 균등분포 ρ = 1/|M₂|
```

**Distribution B (Biased):**
```
T₁ phase cell 안: 한쪽 구석에 집중 (비균등)
T₂ phase cell 안: 균등분포
```

둘 다 $p(\mu) = \hat{\nu}$를 만족하지만:
- $S(A) > S(B)$
- $S_G(\hat{\nu}) = S(A)$ = microcanonical의 엔트로피

### Calculation

Boltzmann entropy (Sackur-Tetrode):
$$\hat{S}_B(T) = N \left[k_B \ln V + \frac{3}{2}k_B \ln T + \text{const}\right] \tag{15}$$

Gibbs entropy:
$$S_G(\hat{\nu}) = -[0.7 \ln 0.7 + 0.3 \ln 0.3] + 0.7 \hat{S}_B(T_1) + 0.3 \hat{S}_B(T_2) \tag{16}$$

## Historical Context

### Josiah Willard Gibbs (1839-1903)

Gibbs가 통계역학을 정립하면서:
- Ensemble theory 도입 (microcanonical, canonical, grand canonical)
- "거시적 제약 하의 최대 엔트로피" 원리 확립
- 열역학과 통계역학의 연결 완성

### Maximum Entropy Principle

이후 E.T. Jaynes (1957)가 정보이론 관점에서 재해석:
- 주어진 제약 조건 하에서 최대 엔트로피 분포 선택
- "주관적 확률론"의 정당화
- Bayesian inference와의 연결

## Why This Matters

### In Equilibrium Statistical Mechanics

- Microcanonical ensemble (고립계): 에너지 고정 → 균등분포
- Canonical ensemble (열욕 접촉): 온도 고정 → Boltzmann distribution
- 모두 "maximum entropy under constraints"

### In Nonequilibrium

- Gibbs entropy production: $S_G(\hat{\nu}_t) - S_G(\hat{\nu}_0)$
- 비평형 과정에서 엔트로피가 증가하는 방향
- 열역학 제2법칙의 통계역학적 근거

### In Information Theory

- Maximum entropy = minimum bias
- "알려진 정보만 사용하고, 모르는 것은 가정하지 않는다"
- Bayesian prior 선택의 원리

## Questions & Insights

왜 microcanonical이 "자연스러운" 선택인가?
- 정보이론: Maximum entropy principle
- 통계역학: Equal a priori probability postulate
- 둘은 같은 원리의 다른 표현

Gibbs entropy vs 열역학 엔트로피?
- 열역학: 거시변수의 함수 $S(E, V, N)$
- Gibbs: 거시상태 분포의 함수 $S_G(\hat{\nu})$
- 평형에서 일치, 비평형에서도 자연스럽게 확장

왜 항상 $S_G(\hat{\nu}_t) \geq S_G(\hat{\nu}_0)$인가?
- Liouville theorem: phase space 부피 보존
- Coarse-graining: 미시→거시 정보 손실
- Irreversibility의 근원

## Related Concepts

- [[microcanonical ensemble의 entropy]]
- [[Shannon Entropy and Boltzmann Entropy Decomposition]]
- [[Journal reading - Time-Reversal and Entropy]]

## References

- Maes, C., & Netočný, K. (2003). Time-Reversal and Entropy. Journal of Statistical Physics, 110(1/2), 269-310. (Equations 3.6-3.7)
- Jaynes, E. T. (1957). Information Theory and Statistical Mechanics. Physical Review, 106(4), 620-630.

## Notes from Claude

Gibbs entropy의 아름다움은 "거시적 제약 하에서 미시상태는 최대로 무작위"라는 단순하고 직관적인 원리를 수학적으로 정확하게 구현한다는 점입니다.

이것은 단순한 수학적 정의가 아니라, 물리학의 근본 원리입니다:
- 우리가 관측할 수 있는 것(거시변수)은 제한적
- 관측되지 않는 자유도는 최대한 무작위
- 이것이 바로 열역학 제2법칙의 통계역학적 기원

특히 중요한 점은 Gibbs variational principle이 Kullback-Leibler divergence의 비음성으로 증명된다는 것입니다. 이는 정보이론과 통계역학이 같은 수학적 구조를 공유함을 보여줍니다.

Microcanonical ensemble이 "special"하거나 "postulate"가 아니라, maximum entropy principle의 필연적 귀결이라는 것이 Gibbs entropy의 핵심 통찰입니다.
