---
title: "Integrating Factor Method"
date: "2026-06-25"
subject: mathematics
tags:
  - study
  - concept
  - question
  - differential-equations
class: study
---

# Integrating Factor Method

## Overview

1차 선형 비제차 상미분방정식(first-order linear inhomogeneous ODE)

$$
\frac{dy}{dt} + p(t)y = q(t)
$$

을 풀기 위한 표준 기법이다. 양변에 적절한 함수("적분인자", integrating factor)를 곱해서 좌변을 어떤 함수의 완전한 시간 미분(곱의 미분법칙의 결과)으로 만들고, 그 다음 양변을 그대로 적분해서 해를 얻는다.

이 노트는 [[Rouse Model]] 노트에서 다룬 단일 bead의 Langevin 방정식

$$
\frac{d\mathbf{v}}{dt} = -\xi\mathbf{v} + \mathbf{F}(t)
$$

을 푸는 과정에서 분리되어 만들어진 일반 방법론 노트다. 같은 형태의 방정식이 Rouse mode (식 2.45), RC 회로, radioactive decay with source term 등 여러 곳에서 반복되므로, 패턴 자체를 독립적으로 기억해두면 유용하다.

## Key Points

### 공통 기호

| 기호 | 의미 |
|------|------|
| $p(t)$ | 1차 항의 계수 (감쇄/완화율에 대응하는 경우가 많음) |
| $q(t)$ | 비제차항 (forcing term, source term) |
| $\mu(t)$ | 적분인자 (integrating factor) |

### 1. 문제의 형태

$$
\frac{dy}{dt} + p(t)y = q(t)
\tag{1}
$$

$p(t)$가 상수($p(t)=\xi$, 예: friction coefficient)인 경우가 물리에서 가장 흔하다. 이 노트는 이 상수 계수 경우를 중심으로 다루고, 마지막에 $p(t)$가 시간에 의존하는 일반적 경우도 짚는다.

### 2. 왜 적분인자를 곱하면 풀리는가

핵심 관찰: 곱의 미분법칙(product rule)을 거꾸로 쓰는 것이다.

$$
\frac{d}{dt}\left[\mu(t)y(t)\right] = \mu(t)\frac{dy}{dt} + \mu'(t)y(t)
\tag{2}
$$

식 (1)에 $\mu(t)$를 곱한 것과 식 (2)를 비교하면:

$$
\mu(t)\frac{dy}{dt} + \mu(t)p(t)y = \mu(t)q(t)
$$

이 좌변이 식 (2)의 우변과 같아지려면

$$
\mu'(t) = \mu(t)p(t)
$$

이어야 한다. 이건 $\mu$에 대한 가장 단순한 선형 ODE이고, 바로 풀린다:

$$
\frac{d\mu}{\mu} = p(t)\,dt \quad\Rightarrow\quad \mu(t) = \exp\left(\int p(t)\,dt\right)
\tag{3}
$$

**$p(t)=\xi$가 상수인 경우** (Rouse 방정식이 정확히 이 경우):

$$
\mu(t) = e^{\xi t}
\tag{4}
$$

### 3. 적분인자를 곱하면 좌변이 "완전 미분"이 된다

식 (3)의 $\mu(t)$를 골랐기 때문에, 식 (1)의 양변에 곱하면 정확히

$$
\frac{d}{dt}\left[\mu(t)y(t)\right] = \mu(t)q(t)
\tag{5}
$$

가 된다. **좌변이 더 이상 "$y$의 미분과 $y$ 자신이 섞인 식"이 아니라, "어떤 함수 하나의 미분"으로 깔끔하게 묶인다.** 이게 이 방법의 전부다 — 한번 이렇게 묶이면, 그냥 양변을 적분하면 끝이다.

### 4. 양변을 적분해서 해 구하기

식 (5)를 $0$부터 $t$까지 적분:

$$
\mu(t)y(t) - \mu(0)y(0) = \int_0^t \mu(\tau)q(\tau)\,d\tau
$$

$y(0)=y_0$이고 (상수 계수의 경우) $\mu(0)=1$이므로:

$$
y(t) = \mu(t)^{-1}y_0 + \mu(t)^{-1}\int_0^t \mu(\tau)q(\tau)\,d\tau
\tag{6}
$$

**상수 계수** ($p=\xi$, $\mu(t)=e^{\xi t}$) 인 경우, $\mu(t)^{-1}=e^{-\xi t}$를 적분 안으로 합쳐 넣으면:

$$
y(t) = y_0 e^{-\xi t} + \int_0^t e^{-\xi(t-\tau)}q(\tau)\,d\tau
\tag{7}
$$

> [!note] 적분 변수 $\tau$와 $t$를 혼동하지 않기
> 식 (7)에서 피적분함수는 반드시 $q(\tau)$여야 한다 — $\tau$가 적분 변수이고, $t$는 적분의 위끝(상한)으로 고정된 외부 변수다. $q(t)$를 적분 기호 안에 그대로 두면 $\tau$에 대해 상수처럼 취급되어 적분 밖으로 빠져나가 버리고, 전혀 다른 (그리고 보통 물리적으로 맞지 않는) 식이 된다. Padding 교재의 Rouse 방정식 풀이에서 실제로 이런 인쇄 오류가 있었다 — $\int_0^t d\tau\, e^{-\xi(t-\tau)}\mathbf{F}(t)$로 적혀 있었는데, 맞는 식은 $\mathbf{F}(\tau)$다.

### 5. 구체적 적용: Rouse 방정식

[[Rouse Model]]의 식 (2.2):

$$
\frac{d\mathbf{v}}{dt} = -\xi\mathbf{v} + \mathbf{F}(t) \quad\Leftrightarrow\quad \frac{d\mathbf{v}}{dt} + \xi\mathbf{v} = \mathbf{F}(t)
$$

여기서 $p=\xi$ (상수), $q(t) = \mathbf{F}(t)$. 식 (7)을 그대로 대입하면:

$$
\mathbf{v}(t) = \mathbf{v}_0 e^{-\xi t} + \int_0^t d\tau\, e^{-\xi(t-\tau)}\mathbf{F}(\tau)
\tag{2.4}
$$

똑같은 구조가 Rouse mode의 식 (2.45)에도 반복된다:

$$
\mathbf{X}_p(t) = \mathbf{X}_p(0)e^{-t/\tau_p} + \int_0^t d\tau\, e^{-(t-\tau)/\tau_p}\mathbf{F}_p(\tau)
$$

여기서는 $\xi \to 1/\tau_p$로 치환된 것뿐, 수학적 구조는 완전히 동일하다.

### 6. 물리적 해석 — 두 항의 의미

해의 형태 $y(t) = y_0 e^{-pt} + \int_0^t e^{-p(t-\tau)}q(\tau)\,d\tau$는 항상 두 부분으로 나뉜다:

- **첫 항 (homogeneous solution):** 초기조건의 "기억"이 시간 $1/p$ 척도로 지수적으로 사라진다.
- **둘째 항 (particular solution, convolution 적분):** 과거의 모든 source $q(\tau)$가 현재 상태에 기여하는데, $\tau$가 오래될수록 가중치 $e^{-p(t-\tau)}$로 그 영향이 감쇄한다 — **최근의 source일수록 현재에 더 크게 남아있다.**

이 구조는 **memory kernel이 단순 지수($e^{-p(t-\tau)}$)인 convolution**으로 볼 수 있고, 더 일반적인 (non-Markovian) 점탄성 시스템에서는 이 kernel 자체가 더 복잡한 함수로 대체된다.

### 7. $p(t)$가 시간에 의존하는 일반적인 경우

$p$가 상수가 아니면 식 (3)-(6)이 그대로 일반형으로 남는다:

$$
\mu(t) = \exp\left(\int_0^t p(s)\,ds\right), \qquad y(t) = \frac{1}{\mu(t)}\left[y_0 + \int_0^t \mu(\tau)q(\tau)\,d\tau\right]
$$

물리에서는 $p(t)$가 시간에 따라 변하는 경우(예: 시간 의존적 friction, 또는 시간 의존적 포텐셜의 곡률)에 이 일반형이 필요하다. 상수 계수인 경우가 압도적으로 흔하지만, 일반형의 구조를 알고 있으면 어디서 단순화가 일어나는지 명확히 보인다.

## Questions & Insights

- 현재까지 기록된 질문 없음 — 학습 중 궁금한 점이 생기면 이곳에 추가.

## Related Concepts

- [[Rouse Model]]
- [[Laplace Transform]]

## References

- J.T. Padding, *Theory of Polymer Dynamics*, Chapter 2 (Eq. 2.2–2.4의 풀이 과정에서 도출)

## Notes from Claude

이 노트는 [[Rouse Model]] 노트의 식 (2.4) 유도 과정에서 분리되어 만들어진 독립 방법론 노트다. Padding 원문의 식 (2.4)에는 인쇄 오류가 있다 — 적분 안의 $\mathbf{F}(t)$는 $\mathbf{F}(\tau)$가 맞다 (Section 4의 note 참고). 이 오류는 책 전체에 영향을 주지 않는다 — 바로 다음 페이지의 평균 계산(식 2.7, 2.8)은 이미 $\mathbf{F}(\tau)$를 올바르게 사용하고 있어서, 단순 조판 실수로 보인다.

이 패턴(1차 선형 ODE → homogeneous 감쇄항 + convolution 형태의 particular solution)은 Rouse mode뿐 아니라 Ornstein-Uhlenbeck process 전반에서 반복되므로, 앞으로 stochastic dynamics를 다루는 다른 노트에서도 이 노트를 참조할 일이 많을 것으로 예상된다.
