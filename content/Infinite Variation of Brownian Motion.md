---
title: Infinite Variation of Brownian Motion
date: 2025-08-24
tags:
  - brownian-motion
  - infinite-variation
  - quadratic-variation
  - path-properties
  - total-variation
  - study
class: concept
---

# Infinite Variation of Brownian Motion

## Notation 정리

| 기호                       | 의미                                 |     |     |                                     |
| ------------------------ | ---------------------------------- | --- | --- | ----------------------------------- |
| $V_T^{(n)}$              | 구간 $[0,T]$에서 분할 $n$에 대한 총변분        |     |     |                                     |
| $\Delta t_j$             | 시간 간격 $t_{j+1} - t_j$              |     |     |                                     |
| $\Delta B_j$             | 브라운 운동 증분 $B_{t_{j+1}} - B_{t_j}$  |     |     |                                     |
| $\langle B, B \rangle_t$ | 브라운 운동의 이차변분 (quadratic variation) |     |     |                                     |
| $\|                      | \Delta                             |     | $   | 분할의 세분도 (mesh): $\max_j \Delta t_j$ |
| $TV[0,T]$                | 구간 $[0,T]$에서의 총변분                  |     |     |                                     |
# 직관

브라운 운동은 
미시적으로 보면 볼 수록,
**작은 시간 간격으로 아무리 쪼개 보아도**, 
**항상 격렬하게 위치가 +혹은 -로 변화하는,** 
부지런하고 끊임없이 움직이는 운동이다. 

보통의 운동(등속 직선 운동 같은)은 유한 변분이다. 
시간 구간을 작개 쪼갤 수록 그 구간에서 변분도 비례하여 작아지기 때문에, 
(시간을 무한대로 쪼개면 그 구간에서는 변분이 0에 수렴)
총 변분 값은 유한하다.

## 총변분(Total Variation)의 정의

### 일반적인 함수의 총변분
함수 $f: [0,T] \rightarrow \mathbb{R}$에 대해, 분할 $0 = t_0 < t_1 < \cdots < t_n = T$에서:
$$V_T^{(n)} = \sum_{j=0}^{n-1} |f(t_{j+1}) - f(t_j)|$$

**총변분**:
$$TV[0,T] = \sup_{n, \{t_j\}} V_T^{(n)} = \sup_{n, \{t_j\}} \sum_{j=0}^{n-1} |f(t_{j+1}) - f(t_j)|$$

### 브라운 운동의 총변분
브라운 운동 $B_t$에 대해:
$$V_T^{(n)} = \sum_{j=0}^{n-1} |B_{t_{j+1}} - B_{t_j}| = \sum_{j=0}^{n-1} |\Delta B_j|$$

## Infinite Variation의 증명

### 핵심 아이디어
분할이 세밀해질수록 총변분이 무한대로 발산함을 보이겠습니다.

### Step 1: 기댓값 계산
균등분할 $t_j = jT/n$에서 $\Delta t_j = T/n$이므로:
$$\Delta B_j \sim N\left(0, \frac{T}{n}\right)$$

따라서:
$$E[|\Delta B_j|] = E[|Z|] \sqrt{\frac{T}{n}}$$
여기서 $Z \sim N(0,1)$이고 $E[|Z|] = \sqrt{\frac{2}{\pi}}$

### Step 2: 총변분의 기댓값
$$E[V_T^{(n)}] = E\left[\sum_{j=0}^{n-1} |\Delta B_j|\right] = \sum_{j=0}^{n-1} E[|\Delta B_j|]$$
$$= n \cdot \sqrt{\frac{2}{\pi}} \cdot \sqrt{\frac{T}{n}} = \sqrt{\frac{2T n}{\pi}}$$

### Step 3: 발산 증명
$$\lim_{n \to \infty} E[V_T^{(n)}] = \lim_{n \to \infty} \sqrt{\frac{2T n}{\pi}} = \infty$$

더 정교한 증명에서는 거의 확실하게(almost surely) 발산함을 보일 수 있습니다:
$$\lim_{||\Delta|| \to 0} \sum_{j} |\Delta B_j| = \infty \quad \text{a.s.}$$

## 직관적 이해

### 1. **일반적인 함수 vs 브라운 운동**

**매끄러운 함수** (예: $f(t) = t^2$):
- 구간이 작아질수록 기울기가 거의 일정
- 총변분이 유한값으로 수렴
- 예: $\int_0^T |f'(t)| dt = \int_0^T 2t dt = T^2$ (유한)

**브라운 운동**:
- 아무리 작은 구간에서도 "격렬한" 움직임
- 세분할수록 더 많은 "지그재그" 발견
- 총변분이 무한대로 발산

### 2. **물리적 해석**
꽃가루 입자를 고배율 현미경으로 관찰할 때:
- **낮은 배율**: 부드러운 움직임으로 보임
- **높은 배율**: 더욱 격렬하고 복잡한 움직임 발견
- **무한대 배율**: 무한히 복잡한 경로

### 3. **프랙탈적 성질**
브라운 운동 경로는 **자기유사성**을 가집니다:
- 어떤 스케일에서 봐도 비슷한 복잡도
- 확대해도 매끄러워지지 않음!!!
- 이것이 무한변분의 근본 원인

## 이차변분(Quadratic Variation)과의 대조

### 총변분은 무한, 이차변분은 유한!

**이차변분**:
$$\langle B, B \rangle_t = \lim_{||\Delta|| \to 0} \sum_j (\Delta B_j)^2 = t \quad \text{a.s.}$$

**왜 이런 차이가?**

### 수학적 분석
균등분할에서:
- **총변분**: $E[|\Delta B_j|] \propto \sqrt{\Delta t_j}$
- **이차변분**: $E[(\Delta B_j)^2] = \Delta t_j$

$n$개 구간으로 나누면:
- **총변분**: $n \times \sqrt{T/n} = \sqrt{nT} \to \infty$
- **이차변분**: $n \times T/n = T$ (유한!)

### 직관적 설명
$$(\Delta B_j)^2 \text{에서는 부호가 상쇄되지만, } |\Delta B_j|\text{에서는 모두 양수로 누적}$$

## 실제 계산 예시

### 구체적 시뮬레이션
$T = 1$, $n = 2^k$ 분할에서:

| $k$ | $n$ | $E[V_1^{(n)}]$ | $E[\text{이차변분}]$ |
|-----|-----|----------------|---------------------|
| 1 | 2 | $2\sqrt{\frac{1}{\pi}} \approx 1.13$ | 1 |
| 5 | 32 | $32\sqrt{\frac{1}{32\pi}} \approx 3.19$ | 1 |
| 10 | 1024 | $1024\sqrt{\frac{1}{1024\pi}} \approx 18.1$ | 1 |

분할이 세밀해질수록 총변분은 계속 증가하지만, 이차변분은 1로 수렴!

## 함수해석학적 의미

### 1. **함수공간에서의 위치**
- **유한변분 함수들**: $BV[0,T]$ (bounded variation 공간)
- **브라운 운동**: $BV[0,T]$에 속하지 않음
- 대신 **Hölder continuous** 함수 공간에 속함

### 2. **Hölder 연속성** -> 이게 뭐예요?
브라운 운동은 거의 확실하게 $\gamma$-Hölder 연속 ($\gamma < 1/2$):
$$|B_t - B_s| \leq C|t-s|^{\gamma}$$

하지만 $1/2$-Hölder 연속은 아닙니다 (이것이 무한변분의 원인).

## Itô 적분에 대한 함의

### 1. **Riemann-Stieltjes 적분 불가능**
$$\int_0^T f(t) dB_t \text{ (Riemann-Stieltjes 의미)}$$
는 정의될 수 없습니다. 브라운 운동의 무한변분 때문입니다.

### 2. **Itô 적분의 필요성**
이것이 바로 **새로운 적분 이론**(Itô 적분)이 필요한 이유입니다:
- 전통적 적분 이론으로는 처리 불가능
- 특별한 구성 방법 필요

### 3. **$(dB_t)^2 = dt$ 공식의 근거**
이차변분이 유한($= t$)이라는 것이 Itô 공식에서 2차항이 나타나는 근본 이유입니다.

## 물리적/응용적 의미

### 1. **에너지 소산**
무한변분은 **무한한 에너지** 소산을 의미합니다:
- 실제 물리계에서는 불가능
- 수학적 이상화의 극한

### 2. **측정의 한계**
실제로는:
- **유한한 측정 정밀도** 존재
- **분자 크기의 한계** 존재  
- 따라서 실제 관찰되는 변분은 유한

### 3. **금융에서의 의미**
주식가격 모델에서:
- **무한한 거래 기회**: 이론적으로 무한 수익 가능
- **거래 비용**: 실제로는 무한변분 전략 불가능

## 다른 확률과정과의 비교

### 1. **Poisson 과정** -> 왜 유한 변분인지 생각해 보기
- 점프가 있지만 **유한변분**
- 각 경로가 단조증가 계단함수

### 2. **Lévy 과정**
- 일반적으로 **무한변분**
- 브라운 운동 + Poisson 점프

### 3. **분수 브라운 운동**
- 허스트 지수 $H < 1/2$: 무한변분
- 허스트 지수 $H > 1/2$: 유한변분

## 수학적 정리

### **Theorem**: 브라운 운동의 무한변분
브라운 운동 $B_t$에 대해 거의 확실하게:
$$\liminf_{||\Delta|| \to 0} \sum_j |\Delta B_j| = \infty$$

### **Corollary**: Itô-Stratonovich 차이
이 성질 때문에 Itô 적분과 Stratonovich 적분이 다른 값을 가집니다.

## Reference

[[MOCs/Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Brownian Motion Properties]] - 브라운 운동의 기본 성질들
- [[Quadratic Variation]] - 이차변분의 유한성과 대조
- [[Ito Integral의 정의와 특징]] - 무한변분이 새로운 적분 이론 필요성의 근거
- [[Holder Continuity]] - 브라운 운동의 연속성 정도
- [[Riemann-Stieltjes Integration]] - 전통적 적분법의 한계
- [[Total Variation]] - 함수의 변분 개념
- [[Fractal Properties]] - 브라운 운동의 프랙탈적 성질
