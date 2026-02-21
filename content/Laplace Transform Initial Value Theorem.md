---
title: "Laplace Transform Initial Value Theorem"
date: "2026-02-08"
subject: mathematics
tags:
  - study
  - concept
class: study
---

# Laplace Transform Initial Value Theorem

## Overview

Laplace 변환의 초기값 정리는 함수의 $t=0$에서의 값을 Laplace 변환의 고주파 극한 ($s \to \infty$)으로부터 추출하는 정리이다. 시간 영역의 초기 순간 거동을 주파수 영역에서 직접 얻을 수 있게 해준다.

$$
\boxed{\lim_{t \to 0^+} f(t) = \lim_{s \to \infty} [s \tilde{f}(s)]}
$$

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $f(t)$ | 시간 영역 함수 |
| $\tilde{f}(s)$ | Laplace 변환 |
| $s$ | Laplace 변환 변수 (복소수) |

## Main Result

함수 $f(t)$의 Laplace 변환이 $\tilde{f}(s) = \int_0^\infty e^{-st} f(t) dt$일 때:

$$
\lim_{t \to 0^+} f(t) = \lim_{s \to \infty} [s \tilde{f}(s)]
\tag{1}
$$

## Intuition

$s \to \infty$일 때 적분 커널 $se^{-st}$는 **Dirac delta처럼 작동**한다:

$$
\lim_{s \to \infty} se^{-st} \sim \delta(t)
$$

이는 delta 수열의 한 예로:
- **높이**: $s$ (선형 증가)
- **폭**: $\sim 1/s$ (역으로 감소)  
- **면적**: $\int_0^\infty se^{-st} dt = 1$ (보존)

따라서 $s \to \infty$일 때, 적분은 $t \approx 0$ 근처의 기여만 남게 되어 $f(0)$을 추출한다.

## Physical Interpretation

**시간 분해능 관점:**
- 큰 $s$: 빠른 감쇠 → 짧은 시간 스케일 정보 (초기값)
- 작은 $s$: 느린 감쇠 → 긴 시간 스케일 정보 (정상 상태)

**측정 이론 관점:**
- $s \to \infty$ = 완벽한 시간 분해능
- 시스템의 **순간 거동** 추출
- 비평형 과정에서 transient 동역학 파악에 유용

## Dual Theorem

최종값 정리(Final Value Theorem)도 존재:

$$
\lim_{t \to \infty} f(t) = \lim_{s \to 0^+} [s \tilde{f}(s)]
$$

## Applications

1. **확률과정**: 대기 시간 분포의 초기 속도 계산
2. **제어 이론**: 시스템의 초기 응답 분석
3. **신호 처리**: 신호의 초기 특성 추출
4. **생물물리**: 유전자 발현의 초기 동역학 (본 노트가 작성된 맥락)

## Related Concepts

[[Laplace Transform]]

## Questions & Further Study

논문 맥락에서:
- 왜 $f_N(0) = \rho$인가?  
  → 대기 시간이 0일 확률 밀도 = 활성 상태에서 즉시 전사할 순간 속도 = 전사율

## References

- Nicoll et al. (2025) "Transient power-law behaviour following induction distinguishes between competing models of stochastic gene expression" Nature Communications
- [[Journal reading - Transient power-law behaviour following induction distinguishes between competing models of stochastic gene expression]]

## Notes from Claude

이 정리는 논문의 식 (12)에서 사용되었다. Laplace 변환의 고주파 극한이 시간 영역의 초기값을 추출하는 것은 Fourier 분석에서 고주파 성분이 국소적 특징을 담고 있는 것과 유사하다. 

비평형 물리학적 관점에서, 이는 **짧은 시간 동역학이 시스템의 미세 구조 정보를 더 많이 담고 있다**는 원리와 연결된다 - 이것이 바로 이 논문의 핵심 메시지이기도 하다.
