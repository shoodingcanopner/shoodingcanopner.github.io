---
title: "Gamma Function in Anomalous Diffusion"
date: "2025-09-13"
subject: mathematics
tags:
  - study
  - concept
  - gamma-function
  - anomalous-diffusion
  - mathematics
class: study
---

# Gamma Function in Anomalous Diffusion

## Overview

감마 함수는 팩토리얼 함수의 일반화로, anomalous diffusion 연구에서 핵심적인 역할을 한다. 특히 fractional calculus와 확률적 과정의 해석에서 자연스럽게 등장한다.

## 감마 함수 정의

**기본 정의**:
$$\Gamma(z) = \int_0^{\infty} t^{z-1} e^{-t} dt$$

여기서 $z$는 복소수이고, 실부가 양수여야 한다.

## 주요 성질

**1. 팩토리얼과의 관계**:
$$\Gamma(n) = (n-1)!$$
양의 정수 $n$에 대해 성립

**2. 순환 관계**:
$$\Gamma(z+1) = z\Gamma(z)$$

**3. 특별한 값들**:
$$\Gamma(1/2) = \sqrt{\pi}$$

## Anomalous Diffusion에서의 역할

### 1. Mittag-Leffler 함수
$$E_{\alpha,\beta}(z) = \sum_{n=0}^{\infty} \frac{z^n}{\Gamma(\alpha n + \beta)}$$

### 2. Time-averaged MSD 계산
CTRW 과정에서:
$$\langle\delta^2(\Delta)\rangle \sim \frac{2K_\alpha}{\Gamma(1+\alpha)} \frac{\Delta}{t^{1-\alpha}}$$

### 3. 분수 확산 방정식
분수 확산 방정식의 해에서 정규화 상수로 등장

### 4. 대기 시간 분포
Power-law 형태의 대기 시간 분포의 모멘트 계산에서 사용

## Symbol Table

| 기호 | 의미 |
|------|------|
| $\Gamma(z)$ | 감마 함수 |
| $\alpha$ | Anomalous diffusion exponent |
| $K_\alpha$ | 일반화된 확산 계수 |
| $\Delta$ | Lag time |
| $t$ | Measurement time |
| $E_{\alpha,\beta}(z)$ | Mittag-Leffler 함수 |

## Questions & Insights

- 왜 감마 함수가 확률 분포의 정규화에서 자연스럽게 나타나는가?
- Mittag-Leffler 함수와 일반적인 지수 함수의 차이점은?
- Fractional calculus에서 감마 함수의 역할은 무엇인가?

## Related Concepts

- [[Brownian Motion Properties]]
- [[Diffusion Equation Derivation from Random Walks]]
- [[Journal reading - Anomalous diffusion models and their properties]]
- [[Central Limit Theorem]]

## References

- Metzler, R. et al. "Anomalous diffusion models and their properties: non-stationarity, non-ergodicity, and ageing at the centenary of single particle tracking" (2014)

## Notes from Claude

감마 함수가 anomalous diffusion에서 중요한 이유:

1. **베타 분포, 감마 분포** 등 많은 확률 분포들이 감마 함수로 정규화됨
2. **Power-law 형태의 분포**들을 다룰 때 필수적
3. **Fractional derivatives**의 정의에서 핵심적 역할
4. **Non-exponential relaxation** 과정의 수학적 기술에 필요

특히 CTRW (Continuous Time Random Walk) 모델에서 time-averaged MSD가 ensemble-averaged MSD와 다른 스케일링을 보이는 weakly non-ergodic behavior를 기술할 때 감마 함수가 중요한 역할을 한다.
