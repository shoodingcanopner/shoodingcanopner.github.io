---
title: Radius of Gyration of Gaussian Chain
date: "2026-01-21"
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study
---

# Radius of Gyration of Gaussian Chain

## Overview

Gaussian chain(이상 사슬)의 **회전 반경(radius of gyration)** $R_G$를 계산하는 방법을 정리한다. 특히 질량중심의 평균과 분산을 혼동하여 발생하는 흔한 실수를 다룬다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $R_G$ | Radius of gyration (회전 반경) |
| $N$ | Number of segments (세그먼트 수) |
| $l$ | Kuhn length (쿤 길이) |
| $\mathbf{r}_i$ | Position of $i$-th vertex |
| $\mathbf{R}_{cm}$ | Center of mass position |
| $\langle \cdot \rangle$ | Ensemble average |

## Definition

$$
R_G^2 = \frac{1}{N}\sum_{i=1}^{N} \langle (\mathbf{r}_i - \mathbf{R}_{cm})^2 \rangle
\tag{1}
$$

여기서 질량중심은:

$$
\mathbf{R}_{cm} = \frac{1}{N}\sum_{j=1}^{N} \mathbf{r}_j
\tag{2}
$$

## Key Points

### 흔한 실수: $\langle \mathbf{R}_{cm} \rangle = 0$이므로 무시?

$\langle \mathbf{R}_{cm} \rangle = 0$은 맞다. 하지만 **$\langle \mathbf{R}_{cm}^2 \rangle \neq 0$** 이다!

이것은 랜덤워크에서 $\langle \mathbf{R} \rangle = 0$이지만 $\langle R^2 \rangle = Nl^2$인 것과 같은 논리다.

### 잘못된 풀이 (오답)

질량중심을 무시하고 원점 기준으로 계산하면:

$$
R_G^2 \stackrel{?}{=} \frac{1}{N}\sum_i \langle \mathbf{r}_i^2 \rangle = \frac{l^2}{N}\sum_{i=1}^{N} i = \frac{l^2}{N} \cdot \frac{N(N+1)}{2} \approx \frac{Nl^2}{2}
$$

이것은 **틀린 답**이다.

### 올바른 풀이

**(1) 전개**

$$
(\mathbf{r}_i - \mathbf{R}_{cm})^2 = \mathbf{r}_i^2 - 2\mathbf{r}_i \cdot \mathbf{R}_{cm} + \mathbf{R}_{cm}^2
$$

합을 취하면:
앙상블에 의해 바뀌는 거랑 index $i$에 의해 바뀌는 변수를 혼동하는 것 같음. 
앙상블 하나가 주어지면 $R_{cm}$은 $i$와 상관없이 고정된 값. 

$$
\sum_{i=1}^{N} (\mathbf{r}_i - \mathbf{R}_{cm})^2 = \sum_i \mathbf{r}_i^2 - 2N\mathbf{R}_{cm}^2 + N\mathbf{R}_{cm}^2 = \sum_i \mathbf{r}_i^2 - N\mathbf{R}_{cm}^2
\tag{3}
$$

**(2) 표준 트릭의 유도**

질량중심으로부터의 거리 제곱합은 모든 쌍 사이 거리 제곱합으로 표현할 수 있다:

$$
\sum_{i=1}^{N} (\mathbf{r}_i - \mathbf{R}_{cm})^2 = \frac{1}{2N} \sum_{i,j} (\mathbf{r}_i - \mathbf{r}_j)^2
\tag{4}
$$

**유도 과정:**

우변을 전개하면:

$$
\frac{1}{2N} \sum_{i,j} (\mathbf{r}_i - \mathbf{r}_j)^2 = \frac{1}{2N} \sum_{i,j} (\mathbf{r}_i^2 - 2\mathbf{r}_i \cdot \mathbf{r}_j + \mathbf{r}_j^2)
$$

$$
= \frac{1}{2N} \left( N\sum_i \mathbf{r}_i^2 - 2\sum_{i,j} \mathbf{r}_i \cdot \mathbf{r}_j + N\sum_j \mathbf{r}_j^2 \right)
$$
*이중 곱은 summation을 분리할 수 있다. 적분에서 그랬던 것 처럼.* 
$$
= \frac{1}{2N} \left( 2N\sum_i \mathbf{r}_i^2 - 2\left(\sum_i \mathbf{r}_i\right) \cdot \left(\sum_j \mathbf{r}_j\right) \right)
$$

$$
= \sum_i \mathbf{r}_i^2 - \frac{1}{N}\left(\sum_i \mathbf{r}_i\right)^2
$$

$$
= \sum_i \mathbf{r}_i^2 - N\mathbf{R}_{cm}^2
$$

이것은 식 (3)의 좌변과 정확히 일치한다.

**(3) Gaussian chain에서 $\langle (\mathbf{r}_i - \mathbf{r}_j)^2 \rangle$ 계산**

$i$번째와 $j$번째 vertex 사이는 $|i-j|$개의 independent random walk step이므로:
*절댓값이 핵심이다. 나라면 까먹었을 듯*

$$
\langle (\mathbf{r}_i - \mathbf{r}_j)^2 \rangle = |i-j| \cdot l^2
\tag{5}
$$

**(4) 이중 합 계산**

$$
\sum_{i=1}^{N} \sum_{j=1}^{N} |i-j| = 2\sum_{i=1}^{N} \sum_{j=1}^{i-1} (i-j) = 2\sum_{i=1}^{N} \frac{i(i-1)}{2} = \sum_{i=1}^{N} i(i-1)
$$

$$
= \sum_{i=1}^{N} i^2 - \sum_{i=1}^{N} i = \frac{N(N+1)(2N+1)}{6} - \frac{N(N+1)}{2}
$$

$$
= \frac{N(N+1)(2N+1) - 3N(N+1)}{6} = \frac{N(N+1)(2N-2)}{6} = \frac{N(N+1)(N-1)}{3}
$$

큰 $N$에서: $\approx \frac{N^3}{3}$

**(5) 최종 결과**

$$
R_G^2 = \frac{1}{N} \cdot \frac{1}{2N} \cdot \frac{N^3}{3} \cdot l^2 = \frac{Nl^2}{6}
\tag{6}
$$

### 빠진 항의 직접 계산 (대안적 방법)

잘못된 풀이에서 빠진 $\langle \mathbf{R}_{cm}^2 \rangle$ 항을 직접 계산할 수도 있다.

**(1) 출발점**

$$
\langle \mathbf{R}_{cm}^2 \rangle = \left\langle \left( \frac{1}{N}\sum_{i=1}^{N} \mathbf{r}_i \right)^2 \right\rangle = \frac{1}{N^2}\sum_{i,j}\langle \mathbf{r}_i \cdot \mathbf{r}_j \rangle
$$

**(2) $\langle \mathbf{r}_i \cdot \mathbf{r}_j \rangle$ 계산**

원점에서 시작하는 random walk에서:

$$
\mathbf{r}_i = \sum_{k=1}^{i} \mathbf{l}_k, \quad \mathbf{r}_j = \sum_{m=1}^{j} \mathbf{l}_m
$$

내적하면:
*합의 내적이 이렇게 되는 건가?*
$$
\mathbf{r}_i \cdot \mathbf{r}_j = \sum_{k=1}^{i} \sum_{m=1}^{j} \mathbf{l}_k \cdot \mathbf{l}_m
$$

앙상블 평균을 취하면, $\langle \mathbf{l}_k \cdot \mathbf{l}_m \rangle = l^2 \delta_{km}$이므로:

$$
\langle \mathbf{r}_i \cdot \mathbf{r}_j \rangle = l^2 \cdot (\text{공통으로 포함된 step 수})
$$

$i \leq j$라고 하면, $\mathbf{r}_i$는 step 1부터 $i$까지, $\mathbf{r}_j$는 step 1부터 $j$까지 포함한다. 공통 부분은 step 1부터 $i$까지, 즉 $i$개이다. 따라서:

$$
\langle \mathbf{r}_i \cdot \mathbf{r}_j \rangle = \min(i, j) \cdot l^2
$$

**(3) 이중 합 계산**

대칭성을 이용해서 $i \leq j$인 경우만 세고 2배 한 뒤, 대각선($i=j$) 보정:

$$
\sum_{i=1}^{N} \sum_{j=1}^{N} \min(i,j) = 2\sum_{i=1}^{N} \sum_{j=i}^{N} i - \sum_{i=1}^{N} i = 2\sum_{i=1}^{N} i(N-i+1) - \frac{N(N+1)}{2}
$$

큰 $N$에서 leading order만 보면: $\approx N^3 - \frac{2N^3}{3} = \frac{N^3}{3}$

**(4) 결과**

$$
\langle \mathbf{R}_{cm}^2 \rangle = \frac{l^2}{N^2} \cdot \frac{N^3}{3} = \frac{Nl^2}{3}
$$

따라서:

$$
R_G^2 = \frac{Nl^2}{2} - \frac{Nl^2}{3} = \frac{Nl^2}{6}
$$

## Questions & Insights

- **핵심 교훈**: 확률변수의 평균이 0이라고 해서 그 제곱의 평균(분산)도 0인 것은 아니다.
- 식 (4)의 트릭은 질량중심을 명시적으로 다루지 않아도 되게 해주므로 계산이 간결해진다.
- $R_G^2 = \frac{Nl^2}{6} = \frac{R_0^2}{6}$이므로, 회전 반경은 end-to-end distance $R_0 = N^{1/2}l$의 약 $1/\sqrt{6} \approx 0.41$배이다.

## Related Concepts

- [[Gaussian Chain (Ideal Chain)]]
- [[Generalized Central Limit Theorem Proof]]

## References

- [[Statistical Physics for Biological Matter (Woo)]] - Chapter 10, Problem P10.1

## Notes from Claude

이 문제에서 발생한 실수는 통계역학에서 매우 흔한 오류 패턴이다. 어떤 양의 **평균이 0**이라는 사실과 그 양의 **제곱 평균(분산)이 0**이라는 것은 완전히 다른 명제다.

비유하자면: 주사위를 던져서 (나온 눈 - 3.5)의 평균은 0이지만, (나온 눈 - 3.5)²의 평균은 분명히 양수다.

표준 트릭 식 (4)는 물리학의 여러 분야에서 등장한다. 예를 들어 N-body 시스템의 virial theorem 유도에서도 비슷한 변환이 쓰인다.
