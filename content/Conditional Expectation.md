---
title: Conditional Expectation
date: 2025-08-24
tags:
  - probability-theory
  - conditional-expectation
  - sigma-algebra
  - martingale
  - measure-theory
  - study
class: concept
---

# Conditional Expectation

## Notation 정리

| 기호                  | 의미                                                       |
| ------------------- | -------------------------------------------------------- |
| $E[X\|\mathcal{G}]$ | Sigma-algebra $\mathcal{G}$에 대한 X의 조건부 기댓값               |
| $X$                 | 확률변수 ($E[\|X\|] < ∞$)                                    |
| $\mathcal{G}$       | 조건이 되는 sigma-algebra ($\mathcal{G} \subset \mathcal{F}$) |
| $\mathcal{F}$       | 전체 sigma-algebra                                         |
| $Y$                 | $\mathcal{G}$-측정가능한 확률변수                                 |
| $P$                 | 확률 측도                                                    |
| $ω$                 | 표본공간의 원소 (하나의 시행)                                        |

## 조건부 기댓값의 정확한 의미

### 1. 수학적 정의 (Radon-Nikodym Theorem 기반)

$E[X|\mathcal{G}]$는 다음 두 조건을 만족하는 **유일한** $\mathcal{G}$-측정가능한 확률변수입니다:

1. **측정가능성**: $E[X|\mathcal{G}]$는 $\mathcal{G}$-측정가능
2. **적분 조건**: 모든 $A ∈ \mathcal{G}$에 대해
   $$\int_A E[X|\mathcal{G}] dP = \int_A X dP$$

### 적분 조건의 깊은 의미

이 조건이 왜 필요한지 단계별로 설명해보겠습니다.

#### 1단계: 직관적 이해
**"부분적 정보에서 전체를 일치시키기"**

- 왼쪽: $\mathcal{G}$-정보만으로 예측한 값들의 평균
- 오른쪽: 실제 $X$ 값들의 평균  
- **조건**: 관찰 가능한 모든 사건 $A$에서 이 두 평균이 같아야 함

#### 2단계: 왜 모든 $A ∈ \mathcal{G}$에 대해서인가?

**핵심**: $\mathcal{G}$는 "현재 구별할 수 있는 사건들"의 집합

**예시**: 동전 던지기에서 $\mathcal{G} = \{\emptyset, \{H\}, \{T\}, \Omega\}$
- $A = \{H\}$: "앞면이 나온 경우들에서만" 평균이 같아야 함
- $A = \{T\}$: "뒷면이 나온 경우들에서만" 평균이 같아야 함
- $A = \Omega$: "전체에서" 평균이 같아야 함

#### 3단계: 적분의 의미 -> 여기서 $dP$ 가 뭘 나타내는지 알 수 있었어

$$\int_A E[X|\mathcal{G}] dP = \sum_{ω ∈ A} E[X|\mathcal{G}](ω) \cdot P(\{ω\})$$

**해석**:
- $A$에 속하는 모든 시행들에서
- 예측값들을 확률로 가중평균한 결과가  
- 실제값들의 가중평균과 같아야 함

#### 4단계: 구체적 예시로 확인

**설정**: 
- $X$: 주사위 눈의 수 (1,2,3,4,5,6)
- $\mathcal{G}$: "홀수/짝수"만 구별 가능 
- $\mathcal{G} = \{\emptyset, \{1,3,5\}, \{2,4,6\}, \Omega\}$

**조건부 기댓값**: 
- 홀수가 나왔다면: $E[X|\mathcal{G}] = \frac{1+3+5}{3} = 3$
- 짝수가 나왔다면: $E[X|\mathcal{G}] = \frac{2+4+6}{3} = 4$

**적분 조건 확인**:
- $A = \{1,3,5\}$: $\int_A E[X|\mathcal{G}] dP = 3 \times \frac{1}{2} = \frac{3}{2}$
- $A = \{1,3,5\}$: $\int_A X dP = (1+3+5) \times \frac{1}{6} = \frac{3}{2}$ ✓

#### 5단계: 왜 이 조건이 "최선의 예측"을 보장하는가?

**수학적 근거**: 
이 조건을 만족하는 $\mathcal{G}$-측정가능한 함수는 다음을 최소화합니다:
$$E[(X - Y)^2]$$
여기서 $Y$는 임의의 $\mathcal{G}$-측정가능한 함수

**직관적 설명**:
- 관찰 가능한 모든 상황에서 평균이 맞다면
- 그것이 가능한 최선의 예측

#### 6단계: 일반적인 측도론적 해석

**추상적 관점**: 
$$\int_A E[X|\mathcal{G}] dP = \int_A X dP$$

이는 두 측도가 $\mathcal{G}$ 위에서 같다는 의미:
- $\mu_1(A) = \int_A E[X|\mathcal{G}] dP$  
- $\mu_2(A) = \int_A X dP$
- $\mu_1|_{\mathcal{G}} = \mu_2|_{\mathcal{G}}$

**Radon-Nikodym 정리**: 이런 조건을 만족하는 함수가 유일하게 존재함을 보장

#### 7단계: 잘못된 이해 vs 올바른 이해

**❌ 잘못된 생각**: 
"$E[X|\mathcal{G}](ω) = X(ω)$가 각 점에서 성립해야 한다"

**✅ 올바른 이해**: 
"관찰 가능한 모든 사건에서 평균적으로 일치해야 한다"

개별 점에서는 다를 수 있지만, 집합별 평균에서는 반드시 같아야 합니다.

### 2. 직관적 해석

**"$\mathcal{G}$의 정보를 아는 상황에서 $X$의 최선의 예측값"**

- $\mathcal{G}$: 현재 사용 가능한 정보
- $E[X|\mathcal{G}]$: 이 정보를 바탕으로 한 $X$의 예측값
- 이 예측값 자체도 확률변수 (정보에 따라 달라짐)

## 구체적 예시들

### 예시 1: 브라운 운동에서
$E[B_3|\mathcal{F}_1]$ = "1초까지의 브라운 운동 경로를 관찰한 상태에서 3초 시점 값의 예측"

**계산**: 독립 증분 성질에 의해
$$E[B_3|\mathcal{F}_1] = E[B_3 - B_1 + B_1|\mathcal{F}_1] = E[B_3 - B_1|\mathcal{F}_1] + B_1 = 0 + B_1 = B_1$$

### 예시 2: 마팅게일에서
$E[M_s|\mathcal{F}_t] = M_t$ (for $s ≥ t$)

**의미**: 
- 현재 시점 $t$까지의 모든 정보를 알고 있어도
- 미래 시점 $s$에서의 마팅게일 값의 최선 예측은
- 단순히 현재 값 $M_t$

## 조건부 기댓값의 핵심 성질들

### 1. 선형성 (Linearity)
$$E[aX + bY|\mathcal{G}] = aE[X|\mathcal{G}] + bE[Y|\mathcal{G}]$$

### 2. 측정가능성에 따른 인수분해 (Factorization)
만약 $Y$가 $\mathcal{G}$-측정가능하면:
$$E[XY|\mathcal{G}] = Y \cdot E[X|\mathcal{G}]$$

**직관**: $Y$의 값을 이미 안다면, 밖으로 빼낼 수 있음

### 3. Tower Property (반복 기댓값 법칙)
$\mathcal{H} \subset \mathcal{G}$이면:
$$E[E[X|\mathcal{G}]|\mathcal{H}] = E[X|\mathcal{H}]$$

**직관**: 더 적은 정보로 예측하는 것은, 더 많은 정보로 예측한 뒤 다시 적은 정보로 예측하는 것과 같음

### 4. 독립성과의 관계
$X$와 $\mathcal{G}$가 독립이면:
$$E[X|\mathcal{G}] = E[X]$$

**직관**: $\mathcal{G}$의 정보가 $X$에 대해 아무것도 알려주지 않으므로, 무조건부 기댓값이 최선

## 마팅게일에서의 역할

### 마팅게일 조건 분석
$$E[M_s|\mathcal{F}_t] = M_t \text{ for } s ≥ t$$

**단계별 해석**:
1. **$M_s$**: 미래 시점 $s$에서의 마팅게일 값 (아직 모름)
2. **$\mathcal{F}_t$**: 현재 시점 $t$까지 관찰한 모든 정보
3. **$E[M_s|\mathcal{F}_t]$**: 현재 정보로 미래를 예측한 값
4. **$= M_t$**: 그 예측값이 정확히 현재 값

**물리적 의미**: 
- 아무리 정교한 분석을 해도
- 현재까지의 모든 패턴을 파악해도
- 미래에 대한 최선의 예측은 "현재 상태가 그대로 유지"

## 조건부 기댓값이 확률변수인 이유

### 중요한 개념적 차이
- **일반적 기댓값** $E[X]$: 상수 (하나의 숫자)
- **조건부 기댓값** $E[X|\mathcal{G}]$: 확률변수 (조건에 따라 달라짐)

### 구체적 예시
브라운 운동에서 $E[B_2^2|\mathcal{F}_1]$을 계산해보면:
$$E[B_2^2|\mathcal{F}_1] = E[(B_2-B_1+B_1)^2|\mathcal{F}_1] = E[(B_2-B_1)^2|\mathcal{F}_1] + 2B_1E[B_2-B_1|\mathcal{F}_1] + B_1^2$$
$$= 1 + 0 + B_1^2 = 1 + B_1^2$$

결과가 $B_1$에 의존하므로 확률변수입니다!

## 실제 계산에서의 활용

### 독립증분을 이용한 계산
브라운 운동의 독립증분 성질을 이용하면:
$$E[f(B_{t+h} - B_t)|\mathcal{F}_t] = E[f(B_{t+h} - B_t)] = E[f(B_h)]$$

### 마팅게일 확인
확률과정 $M_t$가 마팅게일인지 확인하려면:
1. $E[|M_t|] < ∞$ 확인
2. $M_t$가 $\mathcal{F}_t$-adapted 확인  
3. $E[M_{t+h}|\mathcal{F}_t] = M_t$ 계산으로 확인

## 조건부 기댓값의 기하학적 직관

**$E[X|\mathcal{G}]$는 $X$를 $\mathcal{G}$-측정가능한 함수들의 공간에 정사영시킨 결과**

- $L^2$ 공간에서 $\mathcal{G}$-측정가능한 부분공간으로의 직교투영
- 거리 $E[(X - E[X|\mathcal{G}])^2]$를 최소화하는 $\mathcal{G}$-측정가능한 함수
- 이것이 바로 "최선의 예측"이라는 의미의 수학적 근거

## 흔한 오해와 주의사항

### 1. 조건부 확률과의 혼동
- $P(A|\mathcal{G})$: 사건의 조건부 확률
- $E[X|\mathcal{G}]$: 확률변수의 조건부 기댓값
- 둘 다 확률변수임!

### 2. 조건의 순서
$\mathcal{H} \subset \mathcal{G}$일 때:
- $E[X|\mathcal{H}]$: 적은 정보로 예측 → 더 "뭉뚝한" 예측
- $E[X|\mathcal{G}]$: 많은 정보로 예측 → 더 "정교한" 예측

## Reference

[[Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Sigma-Algebra in Probability Theory]] - 조건이 되는 정보 구조의 기초
- [[Martingale Properties]] - 조건부 기댓값을 이용한 마팅게일 정의
- [[Radon-Nikodym Theorem]] - 조건부 기댓값 존재성의 이론적 근거
- [[Tower Property]] - 조건부 기댓값의 핵심 성질
- [[Jensen Inequality for Conditional Expectation]] - 조건부 기댓값의 부등식
