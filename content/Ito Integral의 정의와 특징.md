---
title: Itô Integral의 정의와 특징
date: 2025-08-24
tags:
  - stochastic-calculus
  - ito-integral
  - brownian-motion
  - study
class: concept
---

# Itô Integral의 정의와 특징

## Notation 정리

| 기호 | 의미 |
|------|------|
| $B_t(ω)$ | 1차원 브라운 운동 |
| $\mathcal{F}_t$ | 브라운 운동이 생성하는 시점 $t$까지의 sigma-algebra |
| $f(t,ω)$ | 피적분함수 |
| $\int_S^T f(t,ω) dB_t$ | S부터 T까지의 Itô integral |
| $V(S,T)$ | Itô integral이 정의되는 함수들의 클래스 |
| $φ(t,ω)$ | Elementary function (단순함수) |
| $e_j(ω)$ | $\mathcal{F}_{t_j}$-측정가능한 확률변수 |
| $\mathbf{1}_{[t_j, t_{j+1})}$ | 구간 지시함수 |
| $W(S,T)$ | 확장된 함수 클래스 |

## 핵심 아이디어: "미래를 넘보지 않는" 적분

Itô integral의 가장 중요한 특징은 **non-anticipating** 성질입니다. 즉, 시점 t에서의 integrand 값이 미래의 브라운 운동 정보에 의존하지 않는다는 것입니다.

## 다른 적분법과의 차이점

### 1. Riemann-Stieltjes 적분과의 차이

**문제점**: 브라운 운동 경로는
- nowhere differentiable (어디서도 미분불가능)
- infinite total variation (무한 변분)

따라서 일반적인 Riemann-Stieltjes 적분으로는 정의할 수 없습니다.

### 2. 근사점 선택의 중요성

Example 3.1.1에서 보듯이, 같은 함수 $f(t,ω) = B_t(ω)$에 대해서도:

Example 3.1.1에서 같은 함수 $f(t,ω) = B_t(ω)$를 근사하는 두 방법:

- **φ₁ (Left endpoint)**: $φ_1(t,ω) = \sum_j B_{j·2^{-n}}(ω) \mathbf{1}_{[j·2^{-n}, (j+1)2^{-n})}(t)$
  $$E\left[\int_0^T φ_1 dB_t\right] = 0$$
  (독립증분 성질에 의해)

- **φ₂ (Right endpoint)**: $φ_2(t,ω) = \sum_j B_{(j+1)2^{-n}}(ω) \mathbf{1}_{[j·2^{-n}, (j+1)2^{-n})}(t)$
  $$E\left[\int_0^T φ_2 dB_t\right] = T$$

**기댓값이 완전히 다름!** 이는 브라운 운동의 높은 변동성과 미래 정보 사용 여부 때문입니다.
Right endpoint 방식은 미래를 내다보고 참조하는 방식이다. 

### 3. Itô vs Stratonovich 선택

- **Itô integral**: Left endpoint 선택 → $t_j^* = t_j$
- **Stratonovich integral**: Midpoint 선택 → $t_j^* = \frac{t_j + t_{j+1}}{2}$

## Itô Integral의 정의 과정

### Step 1: 허용가능한 함수 클래스 V(S,T)

함수 $f(t,ω): [0,∞) \times Ω \rightarrow \mathbb{R}$가 다음을 만족:

1. **Measurability**: $(t,ω) \mapsto f(t,ω)$가 $\mathcal{B} \times \mathcal{F}$-측정가능
2. **Adaptedness**: $f(t,ω)$가 $\mathcal{F}_t$-adapted (미래를 모름!)
3. **Integrability**: $E[\int_S^T f(t,ω)^2 dt] < ∞$

### Step 2: Elementary Function에서 정의

Elementary function: 
$$φ(t,ω) = \sum_j e_j(ω) \mathbf{1}_{[t_j, t_{j+1})}(t)$$

여기서 $e_j$는 $\mathcal{F}_{t_j}$-측정가능 (과거 정보만 사용!)

정의:
$$\int_S^T φ(t,ω) dB_t(ω) = \sum_j e_j(ω)[B_{t_{j+1}} - B_{t_j}](ω)$$

### Step 3: Itô Isometry

**핵심 공식**:
$$E\left[\left(\int_S^T φ(t,ω) dB_t(ω)\right)^2\right] = E\left[\int_S^T φ(t,ω)^2 dt\right]$$

이는 근사 과정에서 수렴성을 보장하는 핵심 도구입니다.

### Step 4: 일반 함수로 확장

1. Bounded continuous → Elementary로 근사
2. Bounded → Bounded continuous로 근사  
3. General V(S,T) → Bounded로 근사

각 단계에서 $L^2$ 수렴을 사용하여 극한을 정의합니다.

## Itô Integral의 독특한 성질들

### 1. Martingale 성질
$$M_t = \int_0^t f(s,ω) dB_s$$
는 항상 martingale입니다.

### 2. 예상과 다른 결과
$$\int_0^t B_s dB_s = \frac{1}{2}B_t^2 - \frac{1}{2}t$$

일반적인 적분이라면 $\frac{1}{2}B_t^2$이 나올 것 같지만, **추가 항 $-\frac{1}{2}t$** 가 나타납니다!
![[Pasted image 20250824114945.png]]


### 3. 형식적 규칙: $(dB_t)^2 = dt$

이는 Itô 공식의 핵심이며, 브라운 운동의 quadratic variation이 $t$라는 사실을 반영합니다.

## 물리적/직관적 해석

Itô integral은 **인과관계(causality)** 를 존중합니다:
- 시점 $t$에서의 결정은 오직 과거와 현재 정보만 사용
- 이는 실제 물리적 시스템이나 금융 시장에서 자연스러운 가정
- "미래를 예측할 수 없다"는 현실을 수학적으로 반영

## Reference

[[MOCs/Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Simple Functions]] - Elementary function 구성의 기초
- [[Brownian Motion Properties]] - 브라운 운동의 독립증분과 기본 성질
- [[Martingale Properties]] - Itô integral의 martingale 성질
- [[Ito vs Stratonovich Integration]] - Itô 적분과 Stratonovich 적분의 선택 기준
- [[Sigma-Algebra in Probability Theory]] - 측정가능성과 adaptedness의 기초
