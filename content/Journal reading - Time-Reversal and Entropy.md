---
title: Journal reading - Time-Reversal and Entropy
date: 2025-11-29
subject: Statistical Mechanics, Nonequilibrium Thermodynamics
tags:
  - study
  - concept
  - question
  - entropy
  - time-reversal
  - statistical-mechanics
class: study_journal
---

# Time-Reversal and Entropy

## Overview

Christian Maes and Karel Netočný (2003)의 비평형 통계역학 논문. 엔트로피 생성(entropy production)을 경로공간 측도(path space measure)에서 시간역전 대칭성을 깨는 원천항(source term)으로 정의하는 일반적인 framework를 제시한다. 닫힌 계와 열린 계 모두에서, 과도 상태와 정상 상태 모두에서 적용 가능한 통일된 접근법.

## Link to PDF and DOI

- PDF: [[time reversal and entropy.pdf]]
- DOI: Maes, C., Netočný, K. Time-Reversal and Entropy. _Journal of Statistical Physics_ **110**, 269–310 (2003). https://doi.org/10.1023/A:1021026930129

## 주요 내용 요약

### Section 3: Mathematical Framework

**3.1 Dynamics and Time-Reversal**
- Hamiltonian dynamics: $f_t$ (시간 $t$만큼 evolution)
- Time-reversal: $\pi$ (운동량 부호 반전)
- Dynamical reversibility: $\pi f_t \pi = f_t^{-1}$
- **확률 계산**: 초기 거시상태 $M_0$에서 시작해서 시간 $t$ 후 영역 $A$에 도달할 확률
  $$\text{Prob}[f_t(x) \in A \mid M(x) = M_0] = \frac{|f_t^{-1}A \cap M_0|}{|M_0|}$$
  - 분자: $A$로 가는 $M_0$ 내 미시상태들의 위상공간 부피
  - 분모: $M_0$의 전체 위상공간 부피

**3.2 Reduced Variables (거시변수)**
- Phase space $\mathcal{C}$를 partition $\hat{\mathcal{C}}$로 나눔
- 각 partition element $M \in \hat{\mathcal{C}}$는 같은 거시상태를 가진 미시상태들의 집합 (phase cell)
- Map $M: \mathcal{C} \to \hat{\mathcal{C}}$는 미시상태를 거시상태로 매핑하는 함수
- $M(x)$는 두 가지 의미: (1) 함수로서 거시상태, (2) 집합으로서 $x$가 속한 phase cell
- ==**Projection 연산**: 미시 확률분포 $\nu$를 거시 확률분포로 변환==, 적분을 하면 됨
  $$p(\nu)(M) = \nu(M) = \int dx\, \nu(x)\, \delta(M(x) - M)$$

**3.3 Distributions (확률 분포)**
- 정확한 미시상태는 접근 불가능 → 확률이 필요
- **Microcanonical ensemble**: 자연스러운 선택
  $$\hat{\nu} \times \rho(x) = \frac{\hat{\nu}(M(x))}{|M(x)|}$$
- $\hat{\nu} \times \rho(x)$ 거시상태 확률 분포 이용해서 미시 확률 분포를 만든 것이다다
  - $\hat{\nu}$: reduced state의 확률 분포
  - $|M(x)|$: phase cell의 부피 (Liouville 측도)
  - =="같은 거시상태 내의 모든 미시상태는 동등하게 그럴듯하다"==
- 두 가지 조건 만족:
  1. $\hat{\nu} \times \rho(M) = \hat{\nu}(M)$ (거시상태 확률 보존)
  2. $\hat{\nu} \times \rho(x|M) = 1/|M|$ (phase cell 내부 균등 분포)

**3.4 Entropies (엔트로피들)**
- **Shannon entropy**: $S(\mu) = -\int dx\, \mu(x) \ln \mu(x)$
- **Boltzmann entropy**: $\hat{S}_B(M) = \ln |M|$ (phase cell의 크기의 로그)
- **Gibbs entropy**: $S_G(\hat{\nu}) = \sup_{p(\mu)=\hat{\nu}} S(\mu) = S(\hat{\nu} \times \rho)$
  - Gibbs variational principle에 의해 microcanonical ensemble이 최대 엔트로피
  - 자세한 내용: [[Gibbs Entropy]]

**핵심 수식 (3.5): Shannon-Boltzmann 분해**
$$S(\hat{\nu} \times \rho) - \hat{S}(\hat{\nu}) = \sum_M \hat{\nu}(M) \hat{S}_B(M)$$
- 전체 엔트로피 = 거시상태 uncertainty + 미시상태 다양성(평균)
- 자세한 유도: [[Shannon Entropy and Boltzmann Entropy Decomposition]]

### Section 4: Entropy Production in Closed Systems

**엔트로피 생성의 정의**
- 엔트로피 생성률 = (전체) 엔트로피의 시간당 변화
- Transient regime: 비평형 상태에서 평형으로 완화되는 과정

**핵심 수식 (4.1): 미시 궤적 수준의 시간역전 비대칭**
$\ln \frac{\text{Prob}[(x, fx, \ldots, f^n x) = c \mid M(x) = M_0]}{\text{Prob}[(x, fx, \ldots, f^n x) = c^\theta \mid M(x) = \theta M_n]} = \hat{S}_B(M_n) - \hat{S}_B(M_0)$

**식의 의미:**
- 좌변: 미시 궤적 $c$의 확률 vs 시간역전 궤적 $c^\theta$의 확률의 비
- 우변: Boltzmann 엔트로피의 변화
- 엔트로피가 증가하면 정방향 궤적이 역방향보다 **지수적으로 더 그럴듯함**

**왜 이렇게 되는가?**
1. 초기 거시상태 $M_0$가 주어졌을 때, 특정 미시 궤적의 확률은 초기 미시상태의 확률에만 의존
2. Microcanonical ensemble: 초기 미시상태 확률 = $1/|M_0| = e^{-\hat{S}_B(M_0)}$
3. 시간역전 궤적의 확률 = $1/|M_n| = e^{-\hat{S}_B(M_n)}$
4. 따라서 비율의 로그 = Boltzmann 엔트로피 변화

**물리적 직관:**
- 처음: 기체가 방 왼쪽에만 ($M_0$, 작은 phase cell)
- 나중: 방 전체에 퍼짐 ($M_n$, 큰 phase cell)
- 정방향 (퍼지는 과정): 매우 그럴듯함
- 역방향 (저절로 모이는 과정): 거의 불가능함

**한계와 극복:**
- 문제: 실제로는 미시 궤적을 관측 불가능
- 해결: 거시상태 궤적 $w = (M_0, M_1, \ldots, M_n)$로 lifting
- "추가 불확실성"에 대한 대가를 지불해야 함 → Proposition 4.1

**Proposition 4.1 (거시 궤적 수준)**
초기 분포 $\hat{\mu}$에서 시작한 거시 궤적의 엔트로피 생성:
$R_{\hat{\mu}}^t = \ln \frac{dP_{\hat{\mu}}}{dP_{\hat{\mu}_t \theta}^G}$

기댓값:
$E_{\hat{\mu}}[R_{\hat{\mu}}^t] = S_G(\hat{\mu}_t) - S_G(\hat{\mu}) \geq 0$

- Gibbs 엔트로피 생성 = 경로 확률 비율의 평균
- 항상 non-negative (Jensen 부등식)

### Main Results Summary

- **핵심 아이디어**: 엔트로피 생성 = 경로와 시간역전된 경로의 확률 측도 비율의 로그
- **Closed Systems (Section 4)**: 미시→거시 수준으로 lifting, Gibbs 엔트로피 생성
- **Open Systems (Section 5)**: 열원(heat bath)과 연결된 계에서 엔트로피 생성 = 계의 엔트로피 변화 + 열류/온도
- **Markov Approximation (Section 6)**: Repeated randomization을 통한 마르코프 근사
- **Phase Space Contraction (Section 8)**: Thermostated dynamics에서 위상공간 수축과 엔트로피 생성의 관계

## Questions & Insights

**Section 3에서의 깨달음:**
- **나의 직관과 측도론**: Microcanonical ensemble에서 "각 상태에 존재 크기를 부여하는 함수"라는 내 생각이 측도론의 본질과 일치한다는 걸 깨달음
- **$M(x)$의 이중적 의미**: 함수로서의 거시상태와 집합으로서의 phase cell이라는 두 관점을 동시에 이해하는 것이 중요
- **Randomization $\hat{\nu} \times \rho$**: 이것은 실제 물리적 과정이 아니라 우리의 무지(ignorance)를 표현하는 수학적 도구
- **왜 균등분포가 자연스러운가?**: Information theory 관점에서 주어진 제약(거시상태) 하에서 최대 엔트로피 → Microcanonical ensemble

**Section 4에서의 핵심 깨달음: 조건부 확률의 마법**

**Q: 조건 없이 비교하면?**
만약 초기 거시상태 조건 없이 그냥 "어떤 미시 궤적의 확률"과 "그 역방향 미시 궤적의 확률"을 비교하면:
$\frac{\text{Prob}[(x, fx, \ldots, f^n x) = \gamma]}{\text{Prob}[(x, fx, \ldots, f^n x) = \gamma\Theta]} = 1$

**왜 1인가?**
- **Dynamical reversibility** ($\theta f \theta = f^{-1}$): 모든 정방향 궤적 ↔ 역방향 궤적이 일대일 대응
- **Liouville's theorem** ($|df_t/dx| = 1$): 위상공간 부피 보존
- 결과: 정방향과 역방향 궤적의 확률이 **정확히 같음**

**미시적으로는 완전히 가역적이다!**

**그런데 거시상태 조건을 주면:**
$\frac{\text{Prob}(\gamma \mid M_0)}{\text{Prob}(\gamma\Theta \mid \theta M_n)} = \frac{1/|M_0|}{1/|M_n|} = e^{\hat{S}_B(M_n) - \hat{S}_B(M_0)} \neq 1$

**왜 차이가 생기는가?**
- 조건 없을 때: 전체 위상공간에서 균등하게 시작 → 완전 대칭
- 조건부: 특정 phase cell $M_0$에서만 시작
- $|M_0| \neq |M_n|$ (일반적으로) → **비대칭 발생!**

**비가역성의 본질:**
> "비가역성은 미시 dynamics의 성질이 아니다! 
> 비가역성은 거시상태 제약 때문에 생긴다."

- 미시적: 시간역전 대칭
- 하지만 우리는 **거시상태만 관측/제어** 가능
- 거시상태 제약 하에서 비대칭성 등장
- **이것이 열역학 제2법칙의 기원!**

**예시: 기체 확산**
- 조건 없이: "임의의 미시상태 → A로" vs "임의의 미시상태 → B로" = 확률 같음 (1:1 대응)
- 조건부: "왼쪽에 모임($M_0$) → 퍼짐" vs "퍼짐($M_n$) → 왼쪽에 모임" = 확률 매우 다름!

**철학적 함의:**
조건부 확률이 모든 마법의 원천. Maxwell's demon 역설의 해답도 여기에 있다.

**Appendix A에서의 깊은 깨달음: 시간의 화살과 우주의 초기조건**

**핵심 문장 (p.299):**
> "We can then expect, both for the forward evolution and for the backward evolution (positive or negative times) that the Boltzmann entropy should increase."

**이 문장이 내게 새롭게 다가온 이유:**

**순수 통계만으로는 양방향 모두 엔트로피 증가!**

**논리:**
1. 큰 거시상태(평형)가 통계적으로 압도적으로 많은 미시상태 포함
2. "무작위로 미시상태를 뽑으면" 큰 phase cell에 속할 확률 높음
3. 시간 진화 = 위상공간을 탐색 = "무작위로 뽑는 것과 유사"
4. 미시 dynamics는 시간역전 대칭 → 정방향이든 역방향이든 동일한 논리
5. **결과: 양방향 모두 엔트로피 증가 예상**

**Loschmidt's paradox (로슈미트 역설):**
- 미시 법칙은 시간역전 대칭
- 그런데 왜 엔트로피는 한 방향으로만 증가?
- **답: 순수 통계만으로는 방향 못 정함!**

**시간의 화살 (Arrow of Time)의 기원:**

세 단계 분석:
1. **미시 법칙** (Newton, Schrödinger): 시간역전 대칭 → 방향 없음
2. **통계 법칙** (열역학 제2법칙): 순수 통계는 양방향 증가 예측 → 여전히 방향 없음!
3. **우주론적 조건** (빅뱅): 극도로 낮은 엔트로피 초기조건 → **방향 등장!**

**내 생각:**
> "우리 우주는 빅뱅이라는 정말 낮은 엔트로피 상태에서 시작했기 때문에 시간의 흐름이라는 게 생길 수 있다"

**이것이 정확한 현대 물리학의 견해다!**

**구체적으로:**
- **만약 우주가 이미 평형이었다면**: 엔트로피 최대, 요동만, 과거/미래 구분 불가, 시간 방향 없음
- **빅뱅 때문에**: 과거=특수(낮은 S), 현재=중간, 미래=평형(높은 S) → 명확한 화살!

**예시: 기체 확산의 역설**
- 정방향 (미래): $t=0$ 왼쪽에만 → $t>0$ 퍼짐 (엔트로피 증가)
- 역방향 (과거): $t=0$ 왼쪽에만 → $t<0$도 퍼져있었을 확률 높음! (역방향도 증가?)
- **해결**: "왼쪽에만"은 특수한 준비 상태. 실제 우주는 과거에 더 특수했음(빅뱅)

**시간의 방향들 (모두 같은 방향!):**
1. 열역학적 화살: 엔트로피 증가 방향
2. 심리학적 화살: 기억하는 방향 (과거), 예측하는 방향 (미래)
3. 우주론적 화살: 우주 팽창, 빅뱅에서 멀어지는 방향

**깊은 질문 (Roger Penrose):**
> "왜 빅뱅은 낮은 엔트로피였을까?"
→ 아직 완전한 답 없음. 양자 중력 이론 필요.

**통합적 이해:**
1. **Coarse-graining** → 비가역성 (결국 비가역성은 우리가 시스템을 뭉뚱그려볼 때만 생김)
2. **특수한 초기조건** (빅뱅) → 방향성
3. **둘의 결합** → **시간의 화살**

**Carlo Rovelli의 관점:**
> "시간의 흐름은 근본적 실재가 아니라, 우리가 우주의 일부만 보기 때문에 생기는 현상"
- 전지전능한 관점 (Block Universe): 시간 방향 없음
- 제한된 관점 (우리): 시간이 흐르는 것처럼 보임
- 또다시 coarse-graining의 결과!

**최종 통찰:**
통계역학 → 우주론 → 의식의 본질까지 연결되는 깊은 구조.
우리의 존재 자체가 우주의 특수한 초기조건의 증거!

**여전히 남은 질문들:**
- Assumption A1과 A2가 실제로 언제 성립하는가? 특히 A2의 타당성
- 왜 "second law conditions"에서만 Gibbs entropy production = Boltzmann entropy production인가?
- Markov approximation의 정당화: mixing condition이 구체적으로 무엇을 의미하는가?

## Related Concepts

이 논문을 이해하기 위해 필요한 개념들:

다음 문장이 무슨 의미일까?
The dynamics is reversible in the sense that $\pi f_t \pi = f_t^{-1}$ where the time-reversal $\pi$ on W is the involution that changes the sign of the momenta.
[[Involution and Dynamical Reversibility]]

**Section 3 핵심 개념: 세 가지 엔트로피**
- Shannon entropy, Boltzmann entropy, Gibbs entropy의 관계
- [[Gibbs Entropy]]
- [[Shannon Entropy and Boltzmann Entropy Decomposition]]

**Section 3.9: Kolmogorov-Sinai Entropy**
- 거시 궤적을 실현하는 초기 미시상태 개수의 로그
- 시간역전 대칭 → 엔트로피 생성이 아님
- [[Kolmogorov-Sinai Entropy in Path Space]]

## 더 읽어보고 싶은 레퍼런스

- [ ] 왜 엔트로피는 증가하는가? microscopic하게 설명. J. Bricmont, Bayes, Boltzmann and Bohm: Probability in physics, in Chance in Physics, Foundations and Perspectives, J. Bricmont, D. Dürr, M. C. Galavotti, G. Ghirardi, F. Petruccione, and N. Zanghi, eds. (Springer-Verlag, 2002). → 이거 교과서인걸요?
- [ ] ...


