---
title: "Kolmogorov-Sinai Entropy in Path Space"
date: "2025-11-30"
subject: statistical mechanics
tags:
  - study
  - concept
  - entropy
  - dynamical-systems
  - trajectory
class: study
---

# Kolmogorov-Sinai Entropy in Path Space

## Overview

Kolmogorov-Sinai (KS) entropy는 주어진 거시상태 궤적에 대해, 그러한 궤적을 실현할 수 있는 초기 미시상태들의 다양성을 측정한다. 즉, 거시 궤적 정보를 알고 있을 때, 그 속에 숨어있는 (존재할 수 있는) 미시 경로의 경우의 수에 대한 우리의 무지를 나타내는 엔트로피다. 이는 Boltzmann entropy가 한 거시상태 내 미시상태 개수를 측정하는 것의 동역학적 확장이다.

## Notation

| 기호 | 의미 |
|------|------|
| $\omega = (M_0, M_1, \ldots, M_n)$ | Reduced space에서의 거시상태 궤적 |
| $f$ | Phase space의 Hamiltonian flow (시간 $\delta$ 진화) |
| $f^{-j}$ | $j$ 스텝 역진화 연산자 |
| $M_j$ | 시간 $j$에서의 거시상태 (phase cell) |
| $f^{-j}M_j$ | "시간 $j$에 $M_j$에 도달하려면 초기에 어디 있어야 하는가?" |

## Definition

$$S_K(\omega) \equiv \ln \left| \bigcap_{j=0}^n f^{-j}M_j \right| \tag{1}$$

**각 항의 의미:**

### $f^{-j}M_j$: 역추적 함수

**입력:** 거시상태 $M_j$ (시간 $j$)

**연산:** $j$번의 역학적 절차를 거슬러 올라감

**출력:** "$j$ 스텝 후에 $M_j$에 도달할 수 있는 초기 미시상태들의 집합"

$$f^{-j}M_j = \{x \in \mathcal{C} : f^j(x) \in M_j\}$$

### $\bigcap_{j=0}^n f^{-j}M_j$: 전체 궤적 제약

**모든 시간 스텝의 조건을 동시에 만족하는 초기 미시상태들:**

- 시간 0: $M_0$에 있어야 함 → $x \in M_0$
- 시간 1: $M_1$에 있어야 함 → $x \in f^{-1}M_1$
- 시간 2: $M_2$에 있어야 함 → $x \in f^{-2}M_2$
- ...
- 시간 n: $M_n$에 있어야 함 → $x \in f^{-n}M_n$

**교집합:**
$$\bigcap_{j=0}^n f^{-j}M_j = \text{"거시 궤적 } \omega \text{를 실현하는 모든 초기 미시상태들"}$$

### $S_K(\omega)$: 미시 경로 다양성의 엔트로피

$$S_K(\omega) = \ln \left| \bigcap_{j=0}^n f^{-j}M_j \right|$$

**물리적 의미:**
- 거시 궤적 $\omega$가 주어졌을 때
- 그러한 궤적을 만들 수 있는 초기 미시상태의 개수 (phase space 부피)
- 그 로그 = Boltzmann entropy와 같은 형태
- **"거시 정보를 알 때, 미시 경로에 대한 무지"**

## Physical Interpretation

### Boltzmann Entropy와의 유사성

**Boltzmann entropy (한 순간):**
$$\hat{S}_B(M) = \ln |M|$$
- $|M|$: 거시상태 $M$인 미시상태의 개수
- 거시상태 $M$을 알고 있을 때, 그 안의 미시상태 개수에 대한 무지가 바로 볼츠만 엔트로피

**KS entropy (궤적):**
$$S_K(\omega) = \ln \left| \bigcap_{j=0}^n f^{-j}M_j \right|$$
- 거시상태 궤적 $\omega$를 아는 것
- → 그런 궤적을 만드는 초기 미시상태 개수에 대한 무지

### "경로의 경우의 수"

거시 궤적 $\omega$가 주어졌을 때:
- 가능한 미시 궤적의 개수 $\sim e^{S_K(\omega)}$
- $S_K$가 크면: 많은 미시 경로가 같은 거시 궤적을 만듦
- $S_K$가 작으면: 소수의 미시 경로만 그 거시 궤적 실현

## Example: Two-Step Trajectory

### Setup

거시 궤적: $\omega = (M_0, M_1, M_2)$

### Step-by-step Analysis

**시간 0: $M_0$에 있음**
- 조건: $x \in M_0$
- 가능한 초기 상태: $M_0$ 전체

**시간 1: $M_1$에 있어야 함**
- 조건: $f(x) \in M_1$
- 즉, $x \in f^{-1}M_1$
- 결합 조건: $x \in M_0 \cap f^{-1}M_1$

**시간 2: $M_2$에 있어야 함**
- 조건: $f^2(x) \in M_2$
- 즉, $x \in f^{-2}M_2$
- 최종 조건: $x \in M_0 \cap f^{-1}M_1 \cap f^{-2}M_2$

**KS entropy:**
$$S_K(\omega) = \ln |M_0 \cap f^{-1}M_1 \cap f^{-2}M_2|$$

### Interpretation

이 값은:
- "$(M_0, M_1, M_2)$라는 거시 궤적을 따라가는 미시 궤적들"의 초기 조건 phase space 부피
- 거시 정보 $\omega$를 알고도 남은 미시적 uncertainty

## Geometric Picture

```
Phase Space at t=0:
┌─────────────────────────┐
│                         │
│   M₀ (전체 phase cell)  │
│   ┌─────────────┐       │
│   │ f⁻¹M₁       │       │
│   │  ┌──────┐   │       │
│   │  │f⁻²M₂│   │       │  ← 이 교집합!
│   │  └──────┘   │       │
│   └─────────────┘       │
│                         │
└─────────────────────────┘

교집합 = 거시 궤적 ω를 실현하는 초기 미시상태들
```

시간이 지날수록:
- 제약 조건이 늘어남 ($n$이 증가)
- 교집합이 줄어듦 (일반적으로)
- $S_K(\omega)$가 작아짐

## Time-Reversal Invariance

### 중요한 성질

$$S_K(\omega) = S_K(p\omega) \tag{2}$$

여기서 $p\omega = (pM_n, pM_{n-1}, \ldots, pM_0)$는 시간역전된 궤적.

### 증명 스케치

Hamiltonian 역학의 가역성:
$$pf^{-1}p = f \tag{3}$$

Time-reversal $p$는 phase space 부피 보존:
$$|pA| = |A| \tag{4}$$

따라서:
$$\left| \bigcap_{j=0}^n f^{-j}M_j \right| = \left| p\left(\bigcap_{j=0}^n f^{j}M_{n-j}\right) \right| = \left| \bigcap_{j=0}^n f^{j}M_{n-j} \right| \tag{5}$$

**결론:** 순방향 궤적과 역방향 궤적의 KS entropy는 같다.

### 물리적 의미

**KS entropy는 시간 방향과 무관:**
- 영화를 정방향으로 보든 역방향으로 보든
- "거시 궤적 → 미시 경로 경우의 수"는 같음
- 따라서 **엔트로피 생성이 아님!**

## Why NOT Entropy Production?

### Section 4와의 차이

논문 9페이지에서:

> "the factor $\left|\prod_{j=0}^n f^{-j}M_j\right|$ will cancel when taking the ratio... this expresses the time-reversal invariance of the dynamical entropy, $S_K(\omega)=S_K(p\omega)$, which excludes it as candidate for entropy production."

**엔트로피 생성 (Section 4):**
$$R(\omega) = \ln \frac{P(\omega)}{P(p\omega)} \tag{6}$$

이것은:
- Time-reversal **breaking**
- 순방향과 역방향 궤적의 **확률 비율**
- $R(\omega) \neq -R(p\omega)$

**KS entropy:**
- Time-reversal **invariant**
- 순전히 동역학의 기하학적 성질
- 확률과 무관

## Connection to Ergodic Theory

### Classical Kolmogorov-Sinai Entropy

Ergodic theory에서 KS entropy의 원래 정의:

$$h_{KS}(\mu, f) = \sup_{\mathcal{P}} \lim_{n \to \infty} \frac{1}{n} H\left(\bigvee_{j=0}^{n-1} f^{-j}\mathcal{P}\right) \tag{7}$$

### Asymptotic Behavior

전형적인 궤적에 대해:
$$S_K(\omega) \sim -n \cdot h_{KS} + o(n) \tag{8}$$

**의미:**
- Chaotic system ($h_{KS} > 0$): 교집합이 exponentially 줄어듦
- Regular system ($h_{KS} = 0$): 교집합이 상수 또는 느리게 줄어듦

### Breiman's Theorem

적절한 partition $\hat{\mathcal{C}}$에 대해:
$$\lim_{n \to \infty} \frac{1}{n} S_K(\omega) = -h_{KS} \quad \text{(a.e.)} \tag{9}$$

이것이 식 (1)과 classical KS entropy를 연결한다.

## Comparison with Other Entropies

| 엔트로피 | 입력 | 출력 의미 | Time-reversal |
|----------|------|-----------|---------------|
| **Boltzmann** $\hat{S}_B(M)$ | 한 거시상태 | 그 안의 미시상태 개수 | N/A |
| **KS** $S_K(\omega)$ | 거시 궤적 | 그 궤적의 초기 미시상태 개수 | Invariant |
| **Entropy Production** | 거시 궤적 | 순방향/역방향 확률 비 | **Breaking** |

## Key Insights

$S_K(\omega)$는 무엇을 측정하는가?
- 거시 궤적이라는 "정보"를 알고 있을 때
- 여전히 모르는 미시 경로의 다양성
- "숨어있는 경우의 수"에 대한 엔트로피

왜 시간역전 대칭인가?
- 순전히 phase space 기하학
- 확률이 아닌 부피 (Liouville measure)
- 동역학의 가역성이 보존

왜 엔트로피 생성이 아닌가?
- 엔트로피 생성 = 시간 방향 선호
- $S_K$는 방향 중립적
- 비가역성을 설명할 수 없음

## Related Concepts

- [[Gibbs Entropy]]
- [[Shannon Entropy and Boltzmann Entropy Decomposition]]
- [[Involution and Dynamical Reversibility]]
- [[📑 Journal reading - Time-Reversal and Entropy]]

## References

- Maes, C., & Netočný, K. (2003). Time-Reversal and Entropy. Journal of Statistical Physics, 110(1/2), 269-310. (Equation 3.9, page 7)

## Notes from Claude

이 개념의 핵심은 사용자의 직관대로:

"$f^{-j}$는 거시상태 값을 받아서, $j$번의 역학 절차를 거치면 그 값이 나올 수 있는 초기 미시상태 집합을 출력하는 함수다."

"KS entropy는 거시 궤적이 주어질 때, 그런 궤적을 만들 수 있는 초기 미시상태 개수의 로그다. 마치 Boltzmann entropy처럼."

"즉, 주어진 거시 정보를 이용해도, 그 속에 숨은 미시 경로의 경우의 수에 대한 무지를 나타낸다."

이것이 Boltzmann entropy의 동역학적 일반화이며, 거시 궤적 내부에 숨어있는 미시적 다양성을 정량화하는 도구다.

중요한 것은 이것이 시간역전 대칭이라는 점이다. 따라서 비가역성이나 엔트로피 생성을 설명할 수 없고, 그것은 Section 4에서 다른 방식으로 정의된다.
