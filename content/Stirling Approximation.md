---
title: "Stirling Approximation"
date: "2025-11-02"
subject: mathematics
tags:
  - study
  - concept
  - approximation
  - factorial
  - statistics
class: study
---

# Stirling Approximation

## Overview

Stirling approximation은 큰 수 $n$에 대한 팩토리얼 $n!$을 근사하는 공식이다. 통계역학, 조합론, 확률론 등에서 매우 자주 사용되며, 특히 미시상태 수나 엔트로피 계산에서 필수적이다.

물리학자는 이것만 알면 된다. 대부분 n이 아주 클 떄만 사용하므로

$$
\ln(n!) \approx n\ln(n) - n \tag{3}
$$
$$n! = (\frac{n}{e})^n \tag{3-1}$$
==1부터 n까지의 기하 평균이 대충 n/e이다!==

## 주요 공식

### 기본 형태

$$
n! \approx \sqrt{2\pi n}\left(\frac{n}{e}\right)^n \tag{1}
$$

### 로그 형태 (가장 많이 사용)

$$
\ln(n!) \approx n\ln(n) - n + \frac{1}{2}\ln(2\pi n) \tag{2}
$$

$n$이 충분히 클 때, 마지막 항은 무시할 수 있어서:

$$
\ln(n!) \approx n\ln(n) - n \tag{3}
$$

나는 이걸 어떻게 외우는 게 더 편했냐면, 3번 식에서 로그를 풀어서

$$n! = (\frac{n}{e})^n \tag{3-1}$$
n!은 1부터 n까지 숫자가 n번 곱해지는 거잖아?
$\frac{n}{e}$가 곱하기적 평균 값(이것이 바로 기하 평균)이라는 뜻 처럼 보여서 의미심장하다. 
이런 곳에서 자연 상수가 등장하다니. 

### 더 간단한 근사

매우 거친 근사가 필요할 때:

$$
\ln(n!) \approx n\ln(n) \tag{4}
$$

## 근사의 정확도

| $n$ | $n!$ (정확값) | Stirling 근사 | 상대 오차 |
|-----|--------------|--------------|---------|
| 1 | 1 | 0.92 | 8% |
| 5 | 120 | 118.02 | 1.6% |
| 10 | 3,628,800 | 3,598,696 | 0.8% |
| 20 | $2.43 \times 10^{18}$ | $2.42 \times 10^{18}$ | 0.4% |

n이 20 정도만 되어도 정확도가 쓸만하구나?

## 유도 개요

Stirling approximation은 다음과 같이 유도할 수 있다:

1. 팩토리얼의 로그를 취한다:
$$
\ln(n!) = \ln(1) + \ln(2) + \cdots + \ln(n) = \sum_{k=1}^{n}\ln(k)
$$

2. 이 합을 적분으로 근사한다:
$$
\sum_{k=1}^{n}\ln(k) \approx \int_1^n \ln(x)\,dx
$$

3. 적분을 계산한다:
$$
\int_1^n \ln(x)\,dx = [x\ln(x) - x]_1^n = n\ln(n) - n + 1
$$

4. 더 정밀한 유도를 위해 Euler-Maclaurin 공식이나 감마 함수를 이용할 수 있다.

## 통계역학에서의 응용

### 엔트로피 계산

엔트로피 $S = k_B \ln(\Omega)$를 계산할 때, 미시상태 수 $\Omega$가 종종 팩토리얼을 포함한다.

예: $N$개 입자를 구별 가능한 상태로 배치할 때
$$
\Omega = \frac{(N+q)!}{N!q!}
$$

Stirling approximation을 사용하면:
$$
\ln(\Omega) \approx (N+q)\ln(N+q) - N\ln(N) - q\ln(q)
$$

### 이항 계수 근사

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

로그를 취하고 Stirling approximation을 적용:
$$
\ln\binom{n}{k} \approx n\ln(n) - k\ln(k) - (n-k)\ln(n-k)
$$

## 사용 시 주의사항

1. **$n$이 충분히 커야 한다**: 일반적으로 $n > 10$ 정도면 괜찮은 근사
2. **로그 형태로 사용하기**: 팩토리얼 자체가 아닌 $\ln(n!)$를 계산할 때 특히 유용
3. **필요한 정확도 확인**: 문제에 따라 식 (2), (3), (4) 중 적절한 것을 선택

## Key Points

- Stirling approximation은 큰 수의 팩토리얼을 다루기 쉬운 형태로 근사
- 로그 형태: $\ln(n!) \approx n\ln(n) - n$이 가장 많이 사용됨
- 통계역학에서 엔트로피와 미시상태 수 계산에 필수적
- $n$이 클수록 정확도가 향상됨

## Questions & Insights

- 왜 $e$가 자연스럽게 등장하는가? → 적분 근사와 자연로그의 성질 때문
- Euler-Maclaurin 공식을 이용한 더 정밀한 유도는?
- 감마 함수 $\Gamma(n+1) = n!$와의 관계는?

## Related Concepts

- [[Central Limit Theorem]] - 큰 수의 법칙과 연관
- [[microcanonical ensemble의 entropy]] - 엔트로피 계산에 사용
- [[여러 시스템의 미시 상태 수 예제]] - 미시상태 수 계산 예제
- [[이상 기체가 양쪽 박스에 있을 확률 다차원 이항 분포]] - 이항 분포 근사

## References

## Notes from Claude

이 노트는 Stirling approximation의 기본 개념과 통계역학에서의 응용을 다룹니다. 특히 로그 형태의 근사가 왜 유용한지, 그리고 언제 사용해야 하는지를 강조했습니다. 

팩토리얼이 등장하는 대부분의 통계역학 문제에서 이 근사는 필수적입니다. $n\ln(n) - n$ 형태를 외워두면 매우 유용합니다!
