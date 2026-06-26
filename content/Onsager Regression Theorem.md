---
title: "Onsager Regression Theorem"
date: "2026-01-30"
subject: statistical mechanics
tags:
  - study
  - concept
  - question
class: study
---

# Onsager Regression Theorem

## Overview

**Onsager's Regression Theorem**은 평형 상태에서의 미시적 열요동이 시간에 따라 감소하는 방식과, 거시적 비평형 교란이 평형으로 이완되는 방식이 동일하다는 정리이다. 이는 평형 상태의 요동 관찰만으로도 비평형 응답 특성을 예측할 수 있게 해주는 강력한 도구다.

**"Regression"의 의미**: 평형 상태로 되돌아가는(회귀하는) 과정을 의미한다. 통계학의 regression과는 다른 물리학적 용어이다.

## Key Symbol Table

| Symbol                     | Meaning                                                                    |
| -------------------------- | -------------------------------------------------------------------------- |
| $x_i(t)$                   | 미시적으로 본 위치, 미시상태마다 다름 (혹은 그냥 conjugate variable)                           |
| $\Delta x_i(t)$            | 미시적으로 본 변위, $\Delta x_i(t) = x_i - \langle x_i \rangle_0$                  |
| $\Delta X_i(t)$            | 미시 변위차의 앙상블 평균, 혹은 거시적 변위, $\Delta X_i(t) = \langle \Delta x_i(t) \rangle$ |
| $f_i$                      | $x_i$와의 conjugate force, 둘이 곱하면 해밀토니안의 perturbation term 됨                 |
| $\langle \cdots \rangle_0$ | 평형 앙상블 평균                                                                  |
| $\beta$                    | $1/(k_B T)$                                                                |
| $\tau$                     | 이완 시간 상수                                                                   |
| $C_i(t)$                   | 미시 변위의 시간 상관함수 $\langle \Delta x_i(t) \Delta x_i(0) \rangle_0$             |

## Mathematical Statement

작은 외력 $f_i$를 가해준 상태로 평형 상태에 있던 시스템. 이때  $t=0$에 갑자기 힘을 제거한다.
그러면 시간 $t$에서의 시스템 변수 변화는 다음과 같이 주어진다:

$$
\Delta X_i(t) = \beta f_i \langle \Delta x_i(t) \Delta x_i(0) \rangle_{f=0}
\tag{17.21}
$$

여기서:
- **좌변**: 비평형 상태에서의 거시적 이완 (macroscopic relaxation)
- **우변**: stationary state에서의 미시적 시간 상관함수 (microscopic time correlation)
- $\langle \cdots \rangle_{f=0}$: 외력이 없는 평형 상태에서의 앙상블 평균
![[Pasted image 20260130113412.png]]
![[Pasted image 20260130113430.png]]


## Physical Interpretation

위의 그림을 참고하라. 

### 상황 1: 거시적 비평형 이완

1. 시스템에 작은 외력 $f_i$를 가해 평형 위치에서 $\Delta X_i(0)$만큼 벗어남
2. $t=0$에서 외력 제거
3. 시스템이 평형으로 **되돌아감 (regression)**

예: 고무줄을 당겼다가 놓으면
$$\Delta X(t) = \Delta X(0) e^{-t/\tau}$$

### 상황 2: 미시적 평형 요동

1. 시스템이 외력 없이 평형 상태에 있음
2. 열요동으로 인해 시스템 변수가 끊임없이 흔들림
3. $t=0$에 우연히 $\Delta X_i(0)$만큼 벗어났다고 하자
4. 시간 상관함수를 계산하면:

$$\langle \Delta X_i(t) \Delta X_i(0) \rangle_0 = \langle (\Delta X_i)^2 \rangle_0 e^{-t/\tau}$$

**놀랍게도 같은 시간 상수 $\tau$로 감소한다!**

### Onsager's Statement (1931)

> "The regression of microscopic thermal fluctuations at equilibrium follows the macroscopic law of relaxation of small non-equilibrium disturbances."

평형 상태에서 미시적 열요동의 회귀는 작은 비평형 교란의 거시적 이완 법칙을 따른다.

## Why Is This Powerful?

### 실험적 응용

평형 상태의 요동만 관찰하면 비평형 응답 특성을 알 수 있다:

1. **필요 없는 것**: 외력을 가했다가 제거하는 복잡한 과정
2. **필요한 것**: 평형 상태에서 시간 신호 기록 및 상관함수 분석

예: RNA hairpin (Chapter 17 Fig. 17.1)
- 다양한 힘에서 평형 요동 측정
- 시간 상관함수 분석
- 동적 응답 특성 추출

### Connection to FDT

Onsager regression theorem과 fluctuation-dissipation theorem은 밀접히 연관되어 있다. FDT (17.22):

$$\chi_i(t) = \beta \frac{d}{dt} C_i(t)$$

여기서 $C_i(t) = \langle \Delta X_i(t) \Delta X_i(0) \rangle_0$는 시간 상관함수이다.

Onsager theorem은 이 관계의 물리적 근거를 제공한다.

## Application: Diffusion (Eq. 17.76)

밀도 요동의 경우:

**거시적 법칙**: 확산방정식 (거시적 변수니까 앙상플변균을 한 변수인 $\Delta X$와 $n$ 밀도가 대응된다.)
$$\frac{\partial n(\mathbf{q}, t)}{\partial t} = -Dq^2 n(\mathbf{q}, t)$$

**Onsager theorem 적용**: 평형 밀도 상관함수도 같은 방정식을 따른다
$$\frac{\partial}{\partial t} C_n(\mathbf{q}, t) = -Dq^2 C_n(\mathbf{q}, t)$$

따라서:
$$C_n(\mathbf{q}, t) = C_n(\mathbf{q}, 0) e^{-Dq^2 |t|}$$


## Questions & Insights

**Q1**: 왜 평형 요동과 비평형 이완이 같은 시간 의존성을 가지는가?
- 두 과정 모두 같은 underlying dynamics (Hamiltonian 또는 Langevin equation)에 의해 지배된다
- 선형 응답 영역에서는 초기 조건만 다를 뿐 시간 진화는 동일하다

**Q2**: 모든 시스템에 적용 가능한가?
- 평형 상태 근처에서만 유효 (선형 응답 영역)
- 비평형 정상상태(steady state)에서는 수정이 필요 (effective temperature 개념)

**Q3**: 왜 "regression"이라는 용어를 사용하는가?
- 평형으로 되돌아가는(regress) 과정을 강조
- Onsager가 1931년 논문에서 사용한 원래 용어

## Related Concepts

- [[Statistical Physics for Biological Matter (Woo)]]

## References

- W. Sung, *Statistical Physics for Biological Matter*, Chapter 17, Section 17.1.2, page 333 (Eq. 17.21, Fig. 17.3)

## Notes from Claude

**Regression의 의미**: "Regression"이라는 단어가 왜 사용되었는지가 이 정리 이해의 핵심이다. 통계학의 regression(회귀분석)과는 완전히 다른 의미로, 물리학에서는 "평형 상태로 되돌아가는 과정"을 의미한다.

**고무줄 비유의 중요성**: 거시적 실험(고무줄을 당겼다 놓기)과 미시적 관찰(열요동 측정)이 같은 결과를 준다는 것은 매우 놀라운 사실이다. 이는 평형 통계역학과 비평형 통계역학을 연결하는 다리 역할을 한다.

**실험적 파워**: 이 정리의 진정한 가치는 실험적 편의성에 있다. 시스템을 교란시킬 필요 없이 평형 상태에서 신호만 기록하면 된다. 특히 생물학적 시스템처럼 복잡한 시스템에서 매우 유용하다.

**식 17.76과의 연결**: 확산방정식이 거시적 이완을 기술하면, 같은 방정식이 밀도 상관함수의 시간 의존성도 기술한다. 이것이 Onsager theorem의 구체적 응용 예시다.

**한계**: 선형 응답 영역에서만 성립한다. 큰 교란이나 강한 비평형 상태에서는 성립하지 않는다. 생물학적 활성계(active systems)의 경우 effective temperature 개념을 도입해야 한다 (Section 17.1.3 마지막 부분).
