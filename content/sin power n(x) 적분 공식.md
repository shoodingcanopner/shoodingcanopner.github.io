---
title: sin^n(x) 적분 공식
date: 2025-05-07
subject:
  - mathmetics
tags:
  - study
  - concept
  - calculus
  - integration
  - trigonometry
---

# sin^n(x) 적분 공식

## Overview

sin^n(x)의 적분에 관한 수학적 공식과 그 유도 과정에 대한 설명입니다. 이 공식은 삼각함수의 거듭제곱을 포함하는 적분을 계산할 때 매우 유용하며, 특히 물리학의 많은 분야(양자역학, 전자기학, 파동 등)에서 빈번하게 사용됩니다.

## Key Points

- $\sin^n(x)$ 적분의 기본 공식(n이 홀수일 때): 
  $$\int\sin^n(x)\,dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int\sin^{n-2}(x)\,dx$$
- $\sin^n(x)$ 적분의 기본 공식(n이 짝수일 때):
  $$\int\sin^n(x)\,dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int\sin^{n-2}(x)\,dx$$
  또는 배각 공식을 이용한 방법:
  $$\int\sin^n(x)\,dx = \int\sin^{n-2}(x)\sin^2(x)\,dx = \int\sin^{n-2}(x)(1-\cos^2(x))\,dx$$
- 부분적분법과 삼각함수 항등식을 활용한 단계적 공식 유도 과정
- $\sin^n(x)$ 적분 계산의 핵심은 지수를 점진적으로 줄여나가는 것
- 예제로 $\int_0^\pi \sin^5(x)\,dx = \frac{16}{15}$ 계산 과정

## Questions & Insights

- 물리학에서 파동함수를 다룰 때 이 공식이 어떤 실질적 의미를 가지는가?

## Related Concepts

- [[부분적분법]]
- [[삼각함수 항등식]]

## References

- James Stewart, Calculus (8th Edition)
- Murray R. Spiegel, Mathematical Handbook of Formulas and Tables
- 오늘(2025-05-07)의 Claude와의 대화

## Notes from Claude

이 적분 공식의 핵심은 지수를 단계적으로 낮추는 것입니다. 홀수 지수의 경우:

1. 부분적분법을 적용 ($u = \sin^{n-1}(x)$, $dv = \sin(x)dx$)
2. $\cos^2(x) = 1 - \sin^2(x)$ 항등식을 활용
3. 최종적으로 $\int\sin^n(x)\,dx$에 대해 풀기

이 방법은 물리학에서 파동함수나 확률분포를 계산할 때 매우 중요합니다. 특히 양자역학에서 특정 포텐셜 내에서의 입자 거동을 분석할 때 이러한 적분이 자주 등장합니다. 파동함수의 규격화(normalization)나 기대값 계산에도 이 공식이 활용됩니다.

### n이 짝수일 때의 $\sin^n(x)$ 적분

짝수 지수의 $\sin^n(x)$ 적분에는 여러 접근법이 있습니다:

1. **일반적인 재귀 공식 활용**: 홀수와 동일한 재귀 공식을 적용할 수 있습니다.
   $$\int\sin^n(x)\,dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int\sin^{n-2}(x)\,dx$$

2. **삼각함수 항등식 활용**: 배각 공식과 $\sin^2(x) = \frac{1 - \cos(2x)}{2}$ 항등식을 이용합니다.
   $$\int\sin^n(x)\,dx = \int\sin^{n-2}(x)(1-\cos^2(x))\,dx$$
   
   이 방법은 짝수 지수를 점진적으로 줄여 최종적으로 $\int 1 \,dx$ 또는 $\int \cos(2x) \,dx$로 단순화할 수 있습니다.

3. **구체적인 예: $\sin^2(x)$ 적분**
   $$\int\sin^2(x)\,dx = \int \frac{1 - \cos(2x)}{2}\,dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C$$

4. **구체적인 예: $\sin^4(x)$ 적분**
   $$\begin{align*}
   \int\sin^4(x)\,dx &= \int\sin^2(x)\sin^2(x)\,dx \\
   &= \int\sin^2(x)\frac{1 - \cos(2x)}{2}\,dx \\
   &= \frac{1}{2}\int\sin^2(x)\,dx - \frac{1}{2}\int\sin^2(x)\cos(2x)\,dx \\
   \end{align*}$$
   
   그 후 추가 계산을 통해 적분을 완료합니다.

이 방법들은 물리학에서 특히 파동이나 진동 시스템을 분석할 때 중요합니다. 양자역학에서는 파동함수의
확률 분포를 계산할 때 짝수 지수의 적분이 더 자주 등장하는 경향이 있습니다.


- 우리는 부분적분과 삼각함수 항등식을 적용한 후 다음 식까지 왔습니다:
    
    $$\int\sin^n(x)\,dx + (n-1)\int\sin^n(x)\,dx = -\sin^{n-1}(x)\cos(x) + (n-1)\int\sin^{n-2}(x)\,dx
    
- 이 식에서 양변에 있는 ∫sin⁡n(x) dx\int\sin^n(x)\,dx ∫sinn(x)dx 항들을 모아보면:
    
    $$n\int\sin^n(x)\,dx = -\sin^{n-1}(x)\cos(x) + (n-1)\int\sin^{n-2}(x)\,dx
    
- 이제 이 식의 양변을 n으로 나누면:
    
    $$\int\sin^n(x)\,dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int\sin^{n-2}(x)\,dx$$


### 재귀 공식에서 n으로 나누는 이유

$\sin^n(x)$ 적분 공식에서 우변의 첫 번째 항이 $-\frac{\sin^{n-1}(x)\cos(x)}{n}$로 n으로 나누어지는 이유는 다음과 같은 대수적 조작 과정에서 비롯됩니다:

1. 부분적분법과 삼각함수 항등식을 적용한 후, 다음 식에 도달합니다:
   $$\int\sin^n(x)\,dx + (n-1)\int\sin^n(x)\,dx = -\sin^{n-1}(x)\cos(x) + (n-1)\int\sin^{n-2}(x)\,dx$$

2. 좌변의 항들을 모아보면:
   $$n\int\sin^n(x)\,dx = -\sin^{n-1}(x)\cos(x) + (n-1)\int\sin^{n-2}(x)\,dx$$

3. 이 식을 $\int\sin^n(x)\,dx$에 대해 풀기 위해 양변을 n으로 나누면:
   $$\int\sin^n(x)\,dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int\sin^{n-2}(x)\,dx$$

이 n으로 나누는 과정은 단순히 대수적인 필요성에서 비롯된 것이지만, 물리적 의미를 생각해볼 수도 있습니다. 이 공식은 고차원의 문제를 저차원의 문제로 축소시키는 방법을 제공하며, n으로 나누는 것은 그 "축소 비율"을 나타낸다고 볼 수 있습니다. 양자역학에서는 이러한 재귀적 관계가 파동함수의 규격화 과정과 관련이 있습니다.
