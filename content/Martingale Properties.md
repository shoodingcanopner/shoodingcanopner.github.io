---
title: Martingale Properties
date: 2025-08-24
tags:
  - martingale
  - stochastic-process
  - ito-integral
  - conditional-expectation
  - study
class: concept
---

# Martingale Properties

## Notation 정리

| 기호 | 의미 |
|------|------|
| $\{M_t\}_{t≥0}$ | 마팅게일 확률 과정 |
| $\{\mathcal{M}_t\}_{t≥0}$ | Filtration (증가하는 sigma-algebra들의 족) |
| $\mathcal{F}_t$ | 브라운 운동이 생성하는 시점 $t$까지의 sigma-algebra |
| $E[·\|\mathcal{G}]$ | Sigma-algebra $\mathcal{G}$에 대한 조건부 기댓값 |
| $B_t$ | 시점 $t$에서의 브라운 운동 |
| $f(t,ω)$ | Itô integral의 피적분함수 |
| $\int_0^t f dB$ | Itô integral |

## 마팅게일의 직관적 정의

말씀하신 대로, 마팅게일은 **"과거 경로를 알고 있을 때, 미래의 기댓값이 현재 값과 같은"** 확률 과정입니다.

즉, 현재까지의 모든 정보를 알고 있어도, 미래에 대한 최선의 예측은 단순히 "현재 값(알고 있는 가장 마지막 순간의 값)"이라는 의미입니다.

## Filtration의 정의와 의미

### Filtration이란?
**Definition 3.2.2**: Filtration은 증가하는 σ-algebra들의 족입니다:
$$\{\mathcal{M}_t\}_{t≥0} \text{ where } \mathcal{M}_s \subset \mathcal{M}_t \subset \mathcal{F} \text{ for } 0 ≤ s < t$$

### 직관적 이해
- **$\mathcal{F}$**: 전체 표본공간 $\Omega$에서 일어날 수 있는 모든 사건들의 집합 (전체 σ-algebra)
- **$\mathcal{M}_t$**: 시점 $t$까지 관찰 가능한 사건들의 집합 (σ-algebra의 부분집합)
- **증가성**: 시간이 지날수록 더 많은 정보를 얻음 $\mathcal{M}_s \subset \mathcal{M}_t$

### 구체적 예: 브라운 운동의 Filtration
$$\mathcal{F}_t = \sigma(B_s : s ≤ t)$$

이는 다음과 같은 사건들로 생성된 σ-algebra입니다:
- $\{ω : B_{t_1}(ω) ∈ A_1, B_{t_2}(ω) ∈ A_2, \ldots, B_{t_k}(ω) ∈ A_k\}$
- 여기서 $t_1, t_2, \ldots, t_k ≤ t$

### 물리적 해석
- **$ω ∈ Ω$**: 하나의 입자(확률 과정의 한 시행)
- **$\mathcal{M}_t$**: "시점 $t$까지 입자의 경로를 관찰했을 때 구별할 수 있는 사건들"
- 예: $\{ω : B_1(ω) > 0\}$ ∈ $\mathcal{F}_2$이지만 $\{ω : B_3(ω) > 0\}$ ∉ $\mathcal{F}_2$

## 수학적 정의 (Definition 3.2.2)

확률 과정 $\{M_t\}_{t≥0}$가 filtration $\{\mathcal{M}_t\}_{t≥0}$에 대한 **마팅게일**이려면:

1. **Adaptedness**: $M_t$가 $\mathcal{M}_t$-측정가능 
   - 즉, $M_t$의 값이 시점 $t$까지의 정보만으로 결정 가능
2. **Integrability**: $E[|M_t|] < ∞$ for all $t$
3. **마팅게일 성질**: $E[M_s|\mathcal{M}_t] = M_t$ for all $s ≥ t$

### 직관적 해석
- $\mathcal{M}_t$: 시점 $t$까지 관찰 가능한 모든 정보
- $M_t$: 현재 관찰된 상태값
- $E[M_s|\mathcal{M}_t]$: 현재 정보로 미래 $s$ 시점을 예측한 조건부 기댓값
- **결론**: 현재까지의 모든 정보를 활용해도 미래의 최선 예측치는 현재 값

## 마팅게일의 핵심 성질들

### 1. 불편성 (Unbiasedness)
$$E[M_t] = E[M_0] \text{ for all } t ≥ 0$$

**증명**: 마팅게일 성질에서 $t = 0$을 대입하면
$$E[M_t|\mathcal{M}_0] = M_0$$
양변의 기댓값을 취하면 $E[M_t] = E[M_0]$

### 2. 평균 보존성
시간이 흘러도 전체 "평균"은 변하지 않습니다.

## 브라운 운동과 마팅게일

### Example 3.2.3: 브라운 운동은 마팅게일

$B_t$가 $n$-차원 브라운 운동이면, $B_t$는 $\mathcal{F}_t$-마팅게일입니다.

**증명**:
- $E[|B_t|^2] = |B_0|^2 + nt < ∞$ ✓
- $s ≥ t$일 때:
  $$E[B_s|\mathcal{F}_t] = E[B_s - B_t + B_t|\mathcal{F}_t] = E[B_s - B_t|\mathcal{F}_t] + B_t = 0 + B_t = B_t$$
  
독립증분 성질에 의해 $B_s - B_t$는 $\mathcal{F}_t$와 독립이므로 조건부 기댓값이 0입니다.

## Itô Integral과 마팅게일의 관계

### 핵심 정리: Corollary 3.2.6

$f(t,ω) ∈ V(0,T)$이면:
$$M_t(ω) = \int_0^t f(s,ω) dB_s$$
는 **항상 마팅게일**입니다.

### 왜 마팅게일이 되는가?

1. **Adaptedness**: Itô integral은 정의상 $\mathcal{F}_t$-adapted
2. **Integrability**: Itô isometry에 의해 $E[M_t^2] < ∞$
3. **마팅게일 성질**: 
   $$E[M_s|\mathcal{F}_t] = E\left[\int_0^s f dB\right|\mathcal{F}_t] = \int_0^t f dB + E\left[\int_t^s f dB\right|\mathcal{F}_t] = M_t + 0 = M_t$$

**핵심**: $\int_t^s f dB$는 미래의 브라운 운동 증분에만 의존하므로, 과거 정보 $\mathcal{F}_t$와 독립!

## 마팅게일의 물리적/경제적 해석

### 1. 공정한 게임 (Fair Game)
- $M_t$: 시점 $t$에서의 누적 수익
- 마팅게일 성질: 어떤 전략을 써도 평균적으로는 손익이 0
- 카지노, 주식 시장에서의 효율적 시장 가설과 연관

### 2. 정보의 효율성
현재까지의 모든 정보를 활용해도, 미래에 대한 추가적인 통찰을 얻을 수 없다는 의미

### 3. 무차익 거래 (No Arbitrage)
금융 수학에서 자산 가격 모델이 마팅게일이라는 것은 위험 없는 수익 기회가 없다는 의미

## Doob의 마팅게일 부등식

연속 마팅게일 $M_t$에 대해:
$$P\left[\sup_{0≤t≤T} |M_t| ≥ λ\right] ≤ \frac{1}{λ^p} \cdot E[|M_T|^p]$$

이는 마팅게일의 최대값이 얼마나 클 수 있는지를 제한하는 중요한 도구입니다.

## 마팅게일 표현 정리 (Martingale Representation Theorem)

**Theorem 4.3.4**: 모든 $\mathcal{F}_t^{(n)}$-마팅게일 $M_t$는 다음과 같이 표현 가능:
$$M_t = E[M_0] + \int_0^t g(s,ω) dB(s)$$

**의미**: 
- 브라운 운동에 의해 생성된 정보 하에서
- 모든 마팅게일은 Itô integral로 표현 가능
- 이는 금융 수학에서 헤징 전략 구성의 이론적 기초

## Itô Integral = 마팅게일인 이유의 핵심

1. **Non-anticipating 성질**: 미래를 모르므로 예측 불가능
2. **독립증분**: 브라운 운동의 미래 증분은 과거와 독립
3. **선형성**: 기댓값 연산자의 선형성

결국 **"미래를 넘보지 않는"** Itô integral의 철학이 **"예측 불가능한"** 마팅게일의 성질과 완벽하게 일치합니다.

## Reference

[[MOCs/Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Ito Integral의 정의와 특징]] - Non-anticipating 성질의 기초
- [[Conditional Expectation]] - 마팅게일 정의의 핵심 도구  
- [[Brownian Motion Properties]] - 기본적인 마팅게일 예제와 독립증분 성질
- [[Doob Martingale Inequality]] - 마팅게일의 최대값을 제어하는 핵심 부등식
- [[Martingale Representation Theorem]] - 마팅게일과 Itô integral의 동치성
- [[Sigma-Algebra in Probability Theory]] - Filtration과 측정가능성의 기초
