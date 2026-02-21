---
title: 지수 마팅게일 (Exponential Martingale)
date: 2025-08-25
tags:
  - exponential-martingale
  - stochastic-calculus
  - girsanov-theorem
  - study
subjects:
  - mathematics
  - probability-theory
---

# 지수 마팅게일 (Exponential Martingale)

## 개념 정의

지수 마팅게일은 브라운 운동의 선형결합에 대한 지수함수 형태의 확률과정으로, 측도 변환과 Girsanov 정리에서 핵심적인 역할을 한다.

## 기호 정의

| 기호 | 의미 |
|------|------|
| $\theta(t,\omega)$ | n차원 벡터 과정 |
| $B(t)$ | n차원 브라운 운동 |
| $Z_t$ | 지수 마팅게일 |
| $\theta^2$ | $\theta \cdot \theta$ (내적) |
| $V[0,T]$ | 이토 적분 가능한 과정들의 클래스 |

## 정의와 성질

### 지수 마팅게일의 정의

$\theta(t,\omega) = (\theta_1(t,\omega), \ldots, \theta_n(t,\omega)) \in \mathbb{R}^n$이고 $\theta_k(t,\omega) \in V[0,T]$ ($k = 1, \ldots, n$)라 하자. 지수 마팅게일 $Z_t$는 다음과 같이 정의된다:

$$
Z_t = \exp\left\{\int_0^t \theta(s,\omega)dB(s) - \frac{1}{2}\int_0^t \theta^2(s,\omega)ds\right\} \tag{1}
$$

### 이토 공식 적용

$g(x) = e^x$에 이토 공식을 적용하면:
- $g'(x) = e^x$
- $g''(x) = e^x$

$X_t = \int_0^t \theta(s,\omega)dB(s) - \frac{1}{2}\int_0^t \theta^2(s,\omega)ds$라 하면:
- $dX_t = \theta(t,\omega)dB(t) - \frac{1}{2}\theta^2(t,\omega)dt$
- $(dX_t)^2 = \theta^2(t,\omega)dt$

이토 공식에 의해:
$$
dZ_t = Z_t dX_t + \frac{1}{2}Z_t (dX_t)^2 = Z_t\theta(t,\omega)dB(t) \tag{2}
$$

## 마팅게일 성질

### 정리 (지수 마팅게일)

$Z_t\theta_k(t,\omega) \in V[0,T]$ (모든 $k = 1, \ldots, n$)라면, $Z_t$는 마팅게일이다.

### 증명

(2)에서 $dZ_t = Z_t\theta(t,\omega)dB(t)$이므로:
$$
Z_t = Z_0 + \int_0^t Z_s\theta(s,\omega)dB(s) = 1 + \int_0^t Z_s\theta(s,\omega)dB(s)
$$

이토 적분은 마팅게일이므로 $\mathbb{E}[Z_t] = \mathbb{E}[Z_0] = 1$이고, 마팅게일 성질이 성립한다.

## 마팅게일 조건

지수 마팅게일이 진정한 마팅게일이 되기 위한 충분조건들:

### 1. Novikov 조건

$$
\mathbb{E}\left[\exp\left(\frac{1}{2}\int_0^T \theta^2(s,\omega)ds\right)\right] < \infty \tag{3}
$$

### 2. Kazamaki 조건

$$
\mathbb{E}\left[\exp\left(\frac{1}{2}\int_0^T \theta(s,\omega)dB(s)\right)\right] < \infty \quad \forall t \leq T \tag{4}
$$

## 중요한 예제들

### 예제 1: 상수 계수

$\theta(t,\omega) = \lambda$ (상수)인 경우:
$$
Z_t = \exp\left(\lambda B_t - \frac{1}{2}\lambda^2 t\right)
$$

이는 항상 마팅게일이다.

### 예제 2: 시간 종속

$\theta(t,\omega) = h(t)$ (결정적 함수)인 경우:
$$
Z_t = \exp\left(\int_0^t h(s)dB_s - \frac{1}{2}\int_0^t h^2(s)ds\right)
$$

$h \in L^2[0,T]$이면 마팅게일이다.

## Girsanov 정리와의 연관

지수 마팅게일은 Girsanov 정리에서 Radon-Nikodým 도함수 역할을 한다:

새로운 측도 $Q$를 다음과 같이 정의하면:
$$
\frac{dQ}{dP} = Z_T
$$

$Q$ 측도 하에서:
$$
\tilde{B}_t = B_t - \int_0^t \theta(s,\omega)ds
$$
는 브라운 운동이 된다.

## 응용

### 1. 수리금융학
- **측도 변환**: 위험 중립 측도 구성
- **옵션 가격책정**: Black-Scholes 공식 유도
- **리스크 관리**: 민감도 분석

### 2. 확률론
- **측도 변환**: 확률 측도의 절대연속성
- **큰 편차 이론**: 확률의 지수적 추정
- **필터링 이론**: 관측 모델에서의 측도 변환

## 계산 예제

### 예제: 1차원 경우

$\theta_t = \sin(t)$라 하자. 그러면:
$$
Z_t = \exp\left(\int_0^t \sin(s)dB_s - \frac{1}{2}\int_0^t \sin^2(s)ds\right)
$$

이토 공식에 의해:
$$
dZ_t = Z_t \sin(t)dB_t
$$

따라서:
$$
Z_t = 1 + \int_0^t Z_s \sin(s)dB_s
$$

## 변분과 멈춤시간

지수 마팅게일은 다음과 같은 성질들을 만족한다:

1. **선택적 멈춤**: $\tau$가 멈춤시간이면 $Z_{t \wedge \tau}$도 마팅게일
2. **최대값 부등식**: Doob의 부등식 적용 가능
3. **수렴성**: 특정 조건에서 극한이 존재

## 관련 개념

- [[Itô Formula]]
- [[Martingale Properties]]
- [[Brownian Motion Properties]]
- [[Martingale Representation Theorem]]
- [[Ito Integral의 정의와 특징]]

## 참고문헌

- Øksendal, B. (2003). *Stochastic Differential Equations*, Exercise 4.4
- Ikeda, N. & Watanabe, S. (1989). *Stochastic Differential Equations and Diffusion Processes*
