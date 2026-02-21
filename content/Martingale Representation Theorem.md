---
title: 마팅게일 표현 정리 (Martingale Representation Theorem)
date: 2025-08-25
tags:
  - martingale
  - representation-theorem
  - stochastic-calculus
  - study
subjects:
  - mathematics
  - probability-theory
  - mathematical-finance
---

# 마팅게일 표현 정리 (Martingale Representation Theorem)

## 개념 정의

마팅게일 표현 정리는 브라운 운동에 의해 생성된 σ-대수에서 정의된 모든 마팅게일이 이토 적분으로 표현될 수 있음을 보여주는 핵심 정리이다.

## 기호 정의

| 기호 | 의미 |
|------|------|
| $B(t)$ | n차원 브라운 운동 |
| $\mathcal{F}_t^{(n)}$ | $B(s), s \leq t$에 의해 생성된 σ-대수 |
| $M_t$ | $\mathcal{F}_t^{(n)}$-마팅게일 |
| $L^2(\mathcal{F}_T, P)$ | $\mathcal{F}_T$-가측이고 제곱적분가능한 확률변수들의 공간 |
| $V^n(0,T)$ | 이토 적분 가능한 과정들의 클래스 |

## 이토 표현 정리

### 정리 (이토 표현 정리)

$F \in L^2(\mathcal{F}_T^{(n)}, P)$라 하자. 그러면 유일한 확률과정 $f(t,\omega) \in V^n(0,T)$가 존재하여:

$$
F(\omega) = \mathbb{E}[F] + \int_0^T f(t,\omega)dB(t) \tag{1}
$$

## 마팅게일 표현 정리

### 정리 (마팅게일 표현 정리)

$B(t) = (B_1(t), \ldots, B_n(t))$를 n차원 브라운 운동이라 하자. $M_t$가 $\mathcal{F}_t^{(n)}$-마팅게일이고 모든 $t \geq 0$에 대해 $M_t \in L^2(P)$라 하면, 유일한 확률과정 $g(s,\omega)$가 존재하여 모든 $t \geq 0$에 대해 $g \in V^{(n)}(0,t)$이고:

$$
M_t(\omega) = \mathbb{E}[M_0] + \int_0^t g(s,\omega)dB(s) \quad \text{a.s.} \tag{2}
$$

## 증명의 핵심 아이디어

### 1단계: 지수 마팅게일 기저

다음 형태의 지수함수들이 $L^2(\mathcal{F}_T, P)$에서 조밀하다:
$$
\exp\left\{\int_0^T h(t)dB_t - \frac{1}{2}\int_0^T h^2(t)dt\right\} \tag{3}
$$
여기서 $h \in L^2[0,T]$는 결정적 함수이다.

### 2단계: 지수 마팅게일의 표현

$Y_t = \exp\left\{\int_0^t h(s)dB_s - \frac{1}{2}\int_0^t h^2(s)ds\right\}$라 하면, 이토 공식에 의해:
$$
dY_t = Y_t h(t)dB_t \tag{4}
$$

따라서:
$$
Y_T = 1 + \int_0^T Y_s h(s)dB_s \tag{5}
$$

### 3단계: 일반화

임의의 $F \in L^2(\mathcal{F}_T, P)$에 대해 (3)의 선형결합으로 근사하고, 이토 등거리 공식을 이용하여 극한을 취한다.

## 응용과 중요성

### 1. 수리금융학에서의 응용

- **완비시장 이론**: 모든 조건부 청구권이 동적 헤지 전략으로 복제 가능
- **리스크 중립 측도**: 마팅게일 측도 하에서 가격 과정 표현
- **블랙-숄즈 공식**: 옵션 가격의 헤지 포트폴리오 표현

### 2. 확률론에서의 의미

- **마팅게일의 구조**: 브라운 필트레이션에서 마팅게일의 완전한 특성화
- **예측 가능 표현**: 마팅게일의 예측 가능한 구성요소 분해

## 유니시티(Uniqueness)

표현 (2)에서 $g(s,\omega)$는 유일하다. 이는 이토 등거리 공식으로부터 따라온다:

만약 두 표현 $\int_0^T f_1 dB = \int_0^T f_2 dB$가 있다면:
$$
0 = \mathbb{E}\left[\left(\int_0^T (f_1 - f_2)dB\right)^2\right] = \int_0^T \mathbb{E}[(f_1 - f_2)^2]ds
$$

따라서 $f_1 = f_2$ a.e. $(s,\omega)$.

## 예제: 브라운 운동의 함수들

### 예제 1: $F = B_T$
$$
B_T = 0 + \int_0^T dB_s
$$
따라서 $f(s,\omega) = 1$.

### 예제 2: $F = B_T^2$
$$
B_T^2 = T + \int_0^T 2B_s dB_s
$$
따라서 $f(s,\omega) = 2B_s$.

### 예제 3: $F = e^{B_T}$
이토 공식에 의해:
$$
e^{B_T} = 1 + \int_0^T e^{B_s} dB_s + \frac{1}{2}\int_0^T e^{B_s} ds
$$

이를 마팅게일로 만들기 위해 지수 마팅게일을 사용한다.

## 제한사항과 확장

1. **차원**: n차원 브라운 운동에 대해서는 n차원 벡터 값 적분자가 필요
2. **시간 구간**: 유한 시간 구간 $[0,T]$에 국한
3. **필트레이션**: 브라운 필트레이션에만 적용

## 관련 개념

- [[Ito Integral의 정의와 특징]]
- [[Martingale Properties]]
- [[Brownian Motion Properties]]
- [[Exponential Martingale]]
- [[Itô Formula]]

## 참고문헌

- Øksendal, B. (2003). *Stochastic Differential Equations*, Chapter 4.3
- Karatzas, I. & Shreve, S. (1991). *Brownian Motion and Stochastic Calculus*
