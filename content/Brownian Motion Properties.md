---
title: Brownian Motion Properties
date: 2025-08-24
tags:
  - brownian-motion
  - stochastic-process
  - independent-increments
  - gaussian-process
  - wiener-process
  - study
class: concept
---

# Brownian Motion Properties

## Notation 정리

| 기호              | 의미                                      |
| --------------- | --------------------------------------- |
| $B_t(ω)$        | 시점 $t$에서의 브라운 운동의 위치 좌표($ω$는 입자, 혹은 시행) |
| $B_t^{(i)}$     | $n$차원 브라운 운동의 $i$번째 성분 (좌표)             |
| $\mathcal{F}_t$ | 브라운 운동이 생성하는 시점 $t$까지의 sigma-algebra    |
| $P^x$           | 시작점 $x$에서 출발하는 브라운 운동의 확률측도             |
| $E^x[·]$        | 시작점 $x$에 대한 기댓값                         |
| $p(t,x,y)$      | 전이확률밀도함수                                |
| $\Delta B_j$    | 시간 구간 $[t_j, t_{j+1}]$에서의 증분, 위치의 변화량   |

## 브라운 운동의 정의

**브라운 운동** $\{B_t\}_{t≥0}$는 다음 조건들을 만족하는 확률과정이다:

### 1. **연속성 (Continuity)**
$$P[t \mapsto B_t(ω) \text{ is continuous}] = 1$$
해설: 브라운 운동하는 입자의 시간에 따른 위치 변화가 연속 함수일 확률이 항상 1이다. 

### 2. **독립증분 (Independent Increments)**
$$B_{t_1}, B_{t_2}-B_{t_1}, B_{t_3}-B_{t_2}, \ldots, B_{t_k}-B_{t_{k-1}}$$
모든 조합의 $t_1, t_2, ..., t_{k}$에 대해 위 값들이 **서로 독립**이다. (단, $0 ≤ t_1 < t_2 < \cdots < t_k$).

**직관적 의미**: 
- 서로 다른 시간 구간에서의 위치 변화량은 완전히 독립
- 과거의 움직임이 미래의 움직임에 영향을 주지 않음
- "기억 없는" 무작위 보행
- 매 시점마다 어디로 이동할 지는 아무도 몰라

### 3. **정규증분 (Gaussian/Normal Increments)**
모든 $s < t$에 대해:
$$B_t - B_s \sim N(0, t-s)$$

즉, 증분이 평균 0, 분산 (t-s)인 정규분포를 따른른다.
이것은 **central limit theorem** 의 결과다

### 4. **시작점**을 원점으로 둔다
$$B_0 = 0 \text{ (또는 } B_0 = x \text{ for starting point } x\text{)}$$
모든 시행은 같은 위치에서 시작한다. 

## 독립증분 성질의 구체적 의미

### 수학적 표현
$0 ≤ s < t$인 임의의 $s, t$에 대해:
$$E[f(B_t - B_s)|\mathcal{F}_s] = E[f(B_t - B_s)]$$

**의미**: 현재까지의 정보를 알아도, 미래 증분의 분포는 변하지 않음

### 구체적 예시들

**예시 1**: 조건부 기댓값
$$E[B_3|\mathcal{F}_1] = E[B_3 - B_1 + B_1|\mathcal{F}_1] = E[B_3 - B_1] + B_1 = 0 + B_1 = B_1$$

**예시 2**: 미래 증분의 독립성
- 현재까지 "오르막길"이었어도
- 다음 증분 $B_{t+h} - B_t$는 여전히 $N(0,h)$
- 과거 패턴과 무관

**예시 3**: 조건부 분산
$$\text{Var}(B_t|\mathcal{F}_s) = \text{Var}(B_t - B_s) = t - s \text{ for } s < t$$

## 가우시안 과정 (Gaussian Process) 성질

### 유한차원 분포
모든 $0 ≤ t_1 ≤ t_2 ≤ \cdots ≤ t_k$에 대해:
$$(B_{t_1}, B_{t_2}, \ldots, B_{t_k})$$
는 다변량 정규분포를 따릅니다.

### 평균과 공분산
- **평균**: $E[B_t] = 0$ (시작점이 0인 경우)
- **공분산**: $\text{Cov}(B_s, B_t) = \min(s,t)$ for $s,t ≥ 0$

**증명**:
$$E[B_s B_t] = E[B_s(B_t - B_s + B_s)] = E[B_s(B_t - B_s)] + E[B_s^2] = 0 + s = s$$
(when $s ≤ t$, 독립증분 성질 사용)
아래 문서에서 풀이랑 연결되는 거 같다. 
[[Radius of Gyration of Gaussian Chain]]

## 브라운 운동의 중요한 성질들

### 1. **마팅게일 성질**
$$E[B_t|\mathcal{F}_s] = B_s \text{ for } s ≤ t$$

**증명**: 독립증분을 이용하여
$$E[B_t|\mathcal{F}_s] = E[B_t - B_s + B_s|\mathcal{F}_s] = E[B_t - B_s] + B_s = 0 + B_s = B_s$$

### 2. **이차변분 (Quadratic Variation)**
$$\langle B, B \rangle_t = t$$

**의미**: $(dB_t)^2 = dt$ (Itô 공식의 기초)

### 3. **스케일링 성질 (Scaling Property)**
$c > 0$에 대해, $B_{ct}$는 $B_{t}$의 운동을 시간에 대해 $c$배 가속한 것. 
$$\tilde{B}_t = \frac{1}{\sqrt{c}} B_{ct}$$
이것도 브라운 운동이다. 

공간 축과 시간 축을 scaling 했다.
시간이 $c$배 더 흐르면 위치 분포의 분산은 c배로 증가, 표준편차 $\sqrt{c}$ 배가 된다. 
그래서 위치 값을 $\sqrt{c}$로 나눈 것이다. 

### 4. **시간 역전 성질**
$T > 0$에 대해:
$$\hat{B}_t = B_{T-t} - B_T, \quad 0 ≤ t ≤ T$$
도 브라운 운동입니다.

## 전이확률밀도와 확률측도

### 전이확률밀도
$$p(t,x,y) = \frac{1}{\sqrt{2\pi t}} \exp\left(-\frac{(x-y)^2}{2t}\right)$$

**의미**: 시점 0에서 $x$에 있던 입자가 시점 $t$에서 $y$ 근처에 있을 확률밀도

### Kolmogorov 구성
브라운 운동의 존재는 유한차원 분포들이 **일관성 조건**을 만족함을 보이고, Kolmogorov 확장 정리를 적용하여 증명된다.

## n차원 브라운 운동

### 정의
$$B_t = (B_t^{(1)}, B_t^{(2)}, \ldots, B_t^{(n)})$$
여기서 각 $B_t^{(i)}$는 독립인 1차원 브라운 운동이다. 

### 성질
- **독립성**: $E[B_t^{(i)} B_t^{(j)}] = 0$ for $i ≠ j$
- **등방성**: 회전에 대해 불변
- **증분**: $B_t - B_s \sim N(0, (t-s)I_n)$

## Itô 적분과의 관계

### 왜 브라운 운동인가?
브라운 운동의 성질들이 Itô 적분을 가능하게 만듭니다:

1. **독립증분**: $\int_t^s f dB$가 과거와 독립
2. **가우시안**: Itô isometry 성립
3. **연속성**: 적분의 연속성 보장
4. **마팅게일**: Itô 적분도 마팅게일

### 형식적 미분
$$\frac{dB_t}{dt} = W_t \text{ (white noise)}$$

하지만 이는 형식적 표기일 뿐, 실제로는 미분불가능합니다.

## 브라운 운동의 성질들

### 1. **무한 변분 (Infinite Variation)**
거의 모든 경로에서:
$$\lim_{\Delta t_j \to 0} \sum_j |B_{t_{j+1}} - B_{t_j}| = ∞$$
더 자세한 설명: [[Infinite Variation of Brownian Motion]]
### 2. **어디서도 미분불가능**
거의 모든 경로는 모든 점에서 미분불가능하다. 

### 3. **법칙의 반복 로그 (Law of Iterated Logarithm)**
$$\limsup_{t \to ∞} \frac{B_t}{\sqrt{2t \log \log t}} = 1 \text{ a.s.}$$

### 4. **재귀성 (Recurrence)**
[[Recurrence of Brownian Motion]]
- 1차원: $P[\text{origin을 무한히 많이 방문}] = 1$
- 2차원: $P[\text{origin 근방을 무한히 많이 방문}] = 1$  
- 3차원 이상: $P[\text{origin에서 영원히 멀어짐}] = 1$

## 브라운 운동의 변형들

### 1. **기하 브라운 운동**
$$dX_t = \mu X_t dt + \sigma X_t dB_t$$
$$X_t = X_0 \exp\left(\left(\mu - \frac{\sigma^2}{2}\right)t + \sigma B_t\right)$$

### 2. [[Ornstein-Uhlenbeck Process]]
$$dX_t = -\theta X_t dt + \sigma dB_t$$
평균 회귀 성질을 가진 가우시안 과정

### 3. [[Fractional Brownian motion]]
허스트 지수 $H ≠ 1/2$를 가진 자기상관이 있는 가우시안 과정

##  Reference

[[MOCs/Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Moment Generating Function]]

- [[Central Limit Theorem]] - 브라운 운동의 극한정리적 기초
- [[White Noise and Brownian Motion Relationship]] - 브라운 운동과 백색잡음의 관계
- [[Martingale Properties]] - 브라운 운동의 마팅게일 성질
- [[Ito Integral의 정의와 특징]] - 브라운 운동을 이용한 확률적분
- [[Gaussian Process]] - 브라운 운동의 가우시안 과정 성질
- [[Infinite Variation of Brownian Motion]] - 브라운 운동의 무한변분 성질 상세 분석
- [[Markov Property]] - 브라운 운동의 마르코프 성질
