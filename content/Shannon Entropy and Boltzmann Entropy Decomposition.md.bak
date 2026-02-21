---
title: "Shannon Entropy and Boltzmann Entropy Decomposition"
date: "2025-11-30"
subject: statistical mechanics
tags:
  - study
  - concept
  - entropy
  - statistical-mechanics
class: study
---

# Shannon Entropy and Boltzmann Entropy Decomposition

## Overview

Phase space와 reduced space를 연결하는 핵심 항등식. Microcanonical ensemble의 전체 엔트로피가 거시상태 분포의 uncertainty와 각 거시상태 내부 미시상태 다양성으로 분해됨을 보인다. 이는 통계역학에서 "전체 uncertainty = 어느 거시상태? + 그 안에서 어느 미시상태?"라는 직관을 수학적으로 명확히 한다.

## Notation

| 기호 | 의미 |
|------|------|
| $\mathcal{C}$ | Phase space (미시상태 공간) |
| $\hat{\mathcal{C}}$ | Reduced space (거시상태 공간) |
| $M$ | 거시상태 (phase cell) |
| $\hat{\nu}$ | Reduced space 위의 확률분포 |
| $\hat{\nu} \times \rho$ | Phase space로 lift된 분포 (microcanonical) |
| $\rho$ | Liouville measure (phase space 부피 측도) |
| $\|M\|$ | Phase cell $M$의 부피 |

## The Identity

$$
S(\hat{\nu} \times \rho) - \hat{S}(\hat{\nu}) = \sum_M \hat{\nu}(M) \hat{S}_B(M) \tag{1}
$$

여기서:
- $S(\hat{\nu} \times \rho)$: Microcanonical ensemble의 Shannon entropy (phase space)
- $\hat{S}(\hat{\nu})$: Reduced state 분포의 Shannon entropy
- $\hat{S}_B(M) = \ln |M|$: Boltzmann entropy (phase cell의 크기)

## Derivation

### Step 1: Shannon entropy 전개

Microcanonical distribution의 정의:

$$
\hat{\nu} \times \rho(x) = \frac{\hat{\nu}(M(x))}{|M(x)|} \tag{2}
$$

Shannon entropy:

$$
S(\hat{\nu} \times \rho) = -\int_{\mathcal{C}} \frac{\hat{\nu}(M(x))}{|M(x)|} \ln\left[\frac{\hat{\nu}(M(x))}{|M(x)|}\right] dx \tag{3}
$$

### Step 2: 로그 분해

$$\ln\left[\frac{\hat{\nu}(M(x))}{|M(x)|}\right] = \ln \hat{\nu}(M(x)) - \ln |M(x)| \tag{4}$$

따라서:
$$S(\hat{\nu} \times \rho) = -\int_{\mathcal{C}} \frac{\hat{\nu}(M(x))}{|M(x)|} \ln \hat{\nu}(M(x)) dx + \int_{\mathcal{C}} \frac{\hat{\nu}(M(x))}{|M(x)|} \ln |M(x)| dx \tag{5}$$

### Step 3: Phase cell별 적분 분해

Phase space는 phase cell들의 disjoint union:
$$\mathcal{C} = \bigsqcup_{M \in \hat{\mathcal{C}}} M \tag{6}$$

첫 번째 적분항:
$$-\int_{\mathcal{C}} \frac{\hat{\nu}(M(x))}{|M(x)|} \ln \hat{\nu}(M(x)) dx = -\sum_M \int_M \frac{\hat{\nu}(M)}{|M|} \ln \hat{\nu}(M) dx \tag{7}$$

$M$ 내부에서 $M(x) = M$은 상수이므로:
$$= -\sum_M \ln \hat{\nu}(M) \cdot \frac{\hat{\nu}(M)}{|M|} \cdot |M| = -\sum_M \hat{\nu}(M) \ln \hat{\nu}(M) = \hat{S}(\hat{\nu}) \tag{8}$$

두 번째 적분항:
$$\int_{\mathcal{C}} \frac{\hat{\nu}(M(x))}{|M(x)|} \ln |M(x)| dx = \sum_M \int_M \frac{\hat{\nu}(M)}{|M|} \ln |M| dx \tag{9}$$

$$= \sum_M \ln |M| \cdot \frac{\hat{\nu}(M)}{|M|} \cdot |M| = \sum_M \hat{\nu}(M) \ln |M| = \sum_M \hat{\nu}(M) \hat{S}_B(M) \tag{10}$$

### Step 4: 결론

식 (8)과 (10)을 (5)에 대입:
$$S(\hat{\nu} \times \rho) = \hat{S}(\hat{\nu}) + \sum_M \hat{\nu}(M) \hat{S}_B(M) \tag{11}$$

따라서:
$$S(\hat{\nu} \times \rho) - \hat{S}(\hat{\nu}) = \sum_M \hat{\nu}(M) \hat{S}_B(M) \tag{12}$$

## Physical Interpretation

### 전체 uncertainty의 분해

$$\underbrace{S(\hat{\nu} \times \rho)}_{\text{전체 엔트로피}} = \underbrace{\hat{S}(\hat{\nu})}_{\text{거시상태 uncertainty}} + \underbrace{\sum_M \hat{\nu}(M) \hat{S}_B(M)}_{\text{미시상태 다양성 (평균)}}$$

### 각 항의 물리적 의미

**좌변 $S(\hat{\nu} \times \rho) - \hat{S}(\hat{\nu})$:**
- Microcanonical ensemble의 전체 Shannon entropy
- 에서 거시상태 분포의 uncertainty를 뺀 것
- = "거시상태를 알고 난 후 남은 uncertainty"

**우변 $\sum_M \hat{\nu}(M) \hat{S}_B(M)$:**
- 각 거시상태 $M$의 Boltzmann entropy (phase cell 크기의 로그)
- 거시상태 확률 $\hat{\nu}(M)$로 가중평균
- = "같은 거시상태 내부 미시상태들의 다양성"의 평균

### Information-theoretic perspective

이 분해는 정보이론의 chain rule과 동일한 구조:
$$H(X, Y) = H(X) + H(Y|X)$$

여기서:
- $X$ = 거시상태
- $Y$ = 미시상태
- $H(Y|X)$ = 거시상태를 알 때 미시상태의 조건부 엔트로피

## Connection to Gibbs Variational Principle

이 항등식은 Gibbs entropy의 정의와도 연결됩니다:
$$S_G(\hat{\nu}) = \sup_{p(\mu)=\hat{\nu}} S(\mu) = S(\hat{\nu} \times \rho) \tag{13}$$

왜냐하면:
- 주어진 거시상태 분포 $\hat{\nu}$에 대해
- 가능한 모든 phase space 분포 $\mu$ 중
- Shannon entropy $S(\mu)$를 최대화하는 것은
- Microcanonical ensemble $\hat{\nu} \times \rho$

## Example: Ideal Gas

기체 분자 $N$개의 계:

**거시상태 $M$:**
- 온도 $T$, 압력 $P$, 부피 $V$로 정의

**Boltzmann entropy $\hat{S}_B(M)$:**
- $\hat{S}_B(M) = N \ln V + \frac{3N}{2}\ln T + \text{const}$
- Phase cell의 크기가 $V^N T^{3N/2}$에 비례

**분포 $\hat{\nu}$:**
- 예: 온도 분포가 정규분포를 따른다면
- 평균 Boltzmann entropy는 온도 분산에 의존

## Questions & Insights

이 분해가 왜 중요한가?
- Phase space (미시)와 reduced space (거시)를 명확히 연결
- 열역학 제2법칙의 통계역학적 근거 제공
- Gibbs entropy production의 이해에 핵심적

평형상태에서는?
- $\hat{\nu}$가 단일 거시상태에 집중: $\hat{\nu} = \delta(M - M_{\text{eq}})$
- $\hat{S}(\hat{\nu}) = 0$ (uncertainty 없음)
- $S(\hat{\nu} \times \rho) = \hat{S}_B(M_{\text{eq}})$ (순수 Boltzmann entropy)

## Related Concepts

- [[microcanonical ensemble의 entropy]]
- [[2025-09-05_Entropy_Misconception_Volume_vs_Microstates]]
- [[Journal reading - Time-Reversal and Entropy]]

## References

- Maes, C., & Netočný, K. (2003). Time-Reversal and Entropy. Journal of Statistical Physics, 110(1/2), 269-310. (Equation 3.5)

## Notes from Claude

이 항등식의 핵심은 "전체 uncertainty = 거시적 uncertainty + 미시적 다양성"이라는 직관을 수학적으로 정확하게 표현한다는 점입니다.

특히 microcanonical ensemble이 자연스럽게 나타나는 이유는: 거시상태 $\hat{\nu}$만 알고 있을 때, 미시상태에 대한 최대 엔트로피 분포 (maximum ignorance)가 바로 균등분포이기 때문입니다.

이는 정보이론의 maximum entropy principle과 완벽하게 일치하며, 왜 통계역학에서 microcanonical/canonical ensemble이 "자연스러운" 선택인지를 정당화합니다.
