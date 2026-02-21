---
title: 이토 공식 (Itô Formula)
date: 2025-08-25
tags:
  - stochastic-calculus
  - ito-formula
  - chain-rule
  - study
subjects:
  - mathematics
  - probability-theory
---

# 이토 공식 (Itô Formula)

## 개념 정의

이토 공식은 확률적분에서의 연쇄법칙(chain rule)에 해당하는 공식으로, 이토 과정(Itô process)에 매끄러운 함수를 합성했을 때의 미분을 구하는 공식이다.

## 기호 정의

| 기호            | 의미                |           |
| ------------- | ----------------- | --------- |
| $X_t$         | 이토 과정             |           |
| $B_t$         | 브라운 운동            |           |
| $g(t,x)$      | $C^2$ 함수          |           |
| $u(t,\omega)$ | ==드리프트 계수==       | 아하?       |
| $v(t,\omega)$ | ==확산 계수==         | 이게 이 뜻이었군 |
| $Y_t$         | 변환된 과정 $g(t,X_t)$ |           |

## **핵심 직관**

==브라운 운동의 "거칠음(roughness)" 때문에 $(dB_t)^2$가 무시되지 않는 것이 확률미적분의 특징이다. 1계 변분 항으로만 테일러 전개 했음에도, $(dB_t)^2$가 살아있다.== 

## 1차원 이토 공식

### 정리 (1차원 이토 공식)

$X_t$가 다음과 같은 이토 과정이라고 하자:
$$
dX_t = u(t,\omega)dt + v(t,\omega)dB_t
$$

$g(t,x) \in C^2([0,\infty) \times \mathbb{R})$이라 하면, $Y_t = g(t,X_t)$는 다시 이토 과정이고:

$$
dY_t = \frac{\partial g}{\partial t}(t,X_t)dt + \frac{\partial g}{\partial x}(t,X_t)dX_t + \frac{1}{2}\frac{\partial^2 g}{\partial x^2}(t,X_t)(dX_t)^2 \tag{1}
$$

여기서 곱셈 규칙은 다음과 같다:
$$
dt \cdot dt = dt \cdot dB_t = dB_t \cdot dt = 0, \quad dB_t \cdot dB_t = dt \tag{2}
$$

### 곱셈 규칙 (식 2)이 성립하는 이유

**핵심**: 무한소의 차수(order of infinitesimals)로 이해해야 한다.

#### 1. $dt \cdot dt = 0$인 이유
- $dt$는 **결정적(deterministic)** 이고 **1차 무한소**
- $(dt)^2$는 **2차 무한소**가 되어 1차에 비해 무시 가능
- $\lim_{\Delta t \to 0} \frac{(\Delta t)^2}{\Delta t} = \lim_{\Delta t \to 0} \Delta t = 0$

#### 2. $dt \cdot dB_t = dB_t \cdot dt = 0$인 이유
**확률론적 직교성(stochastic orthogonality)** 에서 나온다.
==확률적 직교성은 둘은 곱한 것의 expectation value가 0==이라는 뜻.

아마도 dt는 deterministic하고, dBt는 무한 변분에 의해 dt가 얼마나 작든, 변동하니까 확률적 직교성이 생기는 것 아닐까?

이산 근사: $\Delta t \cdot \Delta B_t$의 제곱 기댓값을 보면:
$$
E[(\Delta t \cdot \Delta B_t)^2] = (\Delta t)^2 \cdot E[(\Delta B_t)^2] = (\Delta t)^2 \cdot \Delta t = (\Delta t)^3
$$

극한에서: $\lim_{\Delta t \to 0} \frac{(\Delta t)^3}{\Delta t} = 0$

#### 3. $dB_t \cdot dB_t = dt$인 이유 (왜 0이 아닌가?)
브라운 운동의 **이차 변분(quadratic variation)** 이 시간과 같기 때문:
$$
E[(\Delta B_t)^2] = \Delta t
$$

브라운 운동 증분의 제곱은 1차 무한소이므로 무시할 수 없다!

#### 무한소 차수 요약표

| 항 | 차수 | 극한에서 결과 |
|---|---|---|
| $dt$ | 1차 | 유지 |
| $dB_t$ | $\frac{1}{2}$차 (거칠음) | 유지 |
| $dt \cdot dt$ | 2차 | → 0 |
| $dt \cdot dB_t$ | $\frac{3}{2}$차 | → 0 |
| $dB_t \cdot dB_t$ | 1차 | → $dt$ |


### 적분 형태

이토 공식을 적분 형태로 쓰면:
$$
g(t,X_t) = g(0,X_0) + \int_0^t \left[\frac{\partial g}{\partial s}(s,X_s) + u_s\frac{\partial g}{\partial x}(s,X_s) + \frac{1}{2}v_s^2\frac{\partial^2 g}{\partial x^2}(s,X_s)\right]ds + \int_0^t v_s\frac{\partial g}{\partial x}(s,X_s)dB_s \tag{3}
$$

## 핵심 예제

### 예제 1: $\int_0^t B_s dB_s$ 계산

$g(t,x) = \frac{1}{2}x^2$, $X_t = B_t$로 두면:
- $\frac{\partial g}{\partial t} = 0$
- $\frac{\partial g}{\partial x} = x$  
- $\frac{\partial^2 g}{\partial x^2} = 1$
- $dX_t = dB_t$이므로 $(dX_t)^2 = dt$

이토 공식에 의해:
$$
d\left(\frac{1}{2}B_t^2\right) = B_t dB_t + \frac{1}{2}dt
$$

따라서:
$$
\int_0^t B_s dB_s = \frac{1}{2}B_t^2 - \frac{1}{2}t \tag{4}
$$

### 예제 2: 적분 부분법

$f(s)$가 연속이고 유계변분을 가지면:
$$
\int_0^t f(s)dB_s = f(t)B_t - \int_0^t B_s df_s \tag{5}
$$

## 다차원 이토 공식

### 정리 (다차원 이토 공식)

$X(t) = (X_1(t), \ldots, X_n(t))$가 n차원 이토 과정이고:
$$
dX(t) = u(t)dt + v(t)dB(t)
$$

$g(t,x): [0,\infty) \times \mathbb{R}^n \to \mathbb{R}^p$가 $C^2$ 함수라 하면, $Y(t) = g(t,X(t))$의 k번째 성분은:

$$
dY_k = \frac{\partial g_k}{\partial t}(t,X)dt + \sum_i \frac{\partial g_k}{\partial x_i}(t,X)dX_i + \frac{1}{2}\sum_{i,j} \frac{\partial^2 g_k}{\partial x_i \partial x_j}(t,X)dX_i dX_j \tag{6}
$$

여기서 $dB_i dB_j = \delta_{ij}dt$이다.

## 이토 공식의 의미와 중요성

1. **확률적 연쇄법칙**: 일반적인 연쇄법칙에 추가적인 2차 미분항이 나타난다.
2. **$(dB_t)^2 = dt$**: 브라운 운동의 2차 변분이 시간과 같다는 핵심 사실
3. **마팅게일 보존**: 특정 조건에서 이토 공식으로 얻어진 과정도 마팅게일이 된다.

## 관련 개념

- [[Brownian Motion Properties]]
- [[Ito Integral의 정의와 특징]]  
- [[Martingale Properties]]
- [[Martingale Representation Theorem]]
- [[Exponential Martingale]]

## 참고문헌

- Øksendal, B. (2003). *Stochastic Differential Equations*, Chapter 4
