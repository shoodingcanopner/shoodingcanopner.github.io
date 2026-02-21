---
title: Generalized Central Limit Theorem Proof
date: "2026-01-21"
subject: statistical physics
tags:
  - study
  - concept
  - question
class: study
---

# Generalized Central Limit Theorem Proof

## Overview

여러 단계의 시행 결과를 모두 더한 변수는 Gaussian distribution을 따른다는 정리. 
비록 각 시행의 확률 분포는 매우 다를지라도 이런 성질을 만족한다. 

Characteristic function을 이용한 **일반화된 중심극한정리(CLT)** 증명을 다룬다. 여기서 "일반화"란 각 step의 크기가 다를 수 있고($|l_i| \neq |l_j|$), 평균이 0이 아닐 수 있다($\langle \mathbf{l}_i \rangle \neq 0$, biased random walk)는 의미다.

이 증명은 W. Sung의 "Statistical Physics for Biological Matter" Chapter 10에 기반하며, 책의 오타를 수정한 버전이다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\mathbf{l}_n$ | $n$번째 step의 변위 벡터 |
| $\mathbf{R}$ | End-to-end distance, $\mathbf{R} = \sum_{n=1}^{N} \mathbf{l}_n$ |
| $p_n(\mathbf{l}_n)$ | $n$번째 step의 확률분포 |
| $p_n(\mathbf{k})$ | $p_n(\mathbf{l}_n)$의 characteristic function (Fourier transform) |
| $\langle \mathbf{l}_n \rangle$ | $n$번째 step의 평균 |
| $\langle \Delta l_n^2 \rangle$ | $n$번째 step의 분산, $\langle l_n^2 \rangle - \langle \mathbf{l}_n \rangle^2$ |
| $\langle \mathbf{l} \rangle$ | 전체 step 평균의 평균, $\frac{1}{N}\sum_n \langle \mathbf{l}_n \rangle$ |
| $\langle \Delta l^2 \rangle$ | 전체 분산의 평균, $\frac{1}{N}\sum_n \langle \Delta l_n^2 \rangle$ |

## Key Points

### Step 1: End-to-End Distance의 확률분포

$N$개의 독립적인 step으로 이루어진 random walk의 end-to-end distance $\mathbf{R} = \sum_{n=1}^{N} \mathbf{l}_n$의 확률분포는:

$$
P(\mathbf{R}; N) = \int d\mathbf{l}_1 \cdots \int d\mathbf{l}_N \, \delta(\mathbf{l}_1 + \cdots + \mathbf{l}_N - \mathbf{R}) \, p_1(\mathbf{l}_1) \cdots p_N(\mathbf{l}_N)
\tag{1}
$$

### Step 2: Fourier 표현

델타함수의 Fourier 표현, constant를 푸리에변환하면 디락 델타가 나온다.

$$
\delta(\mathbf{l}_1 + \cdots + \mathbf{l}_N - \mathbf{R}) = (2\pi)^{-3} \int d\mathbf{k} \, e^{i\mathbf{k}\cdot(\mathbf{l}_1 + \cdots + \mathbf{l}_N - \mathbf{R})}
\tag{2}
$$

이를 대입하면:

$$
P(\mathbf{R}; N) = (2\pi)^{-3} \int d\mathbf{k} \, e^{-i\mathbf{k}\cdot\mathbf{R}} \{p_1(\mathbf{k}) \cdots p_N(\mathbf{k})\}
\tag{3}
$$

여기서 **characteristic function**은:
개별 시행의 확률 분포를 푸리에 변환한 것
확률을 푸리에 변환하면 푸변에서 사용하는 exponential에 대한 평균값이 나온다. 
$$
p_n(\mathbf{k}) = \int d\mathbf{l}_n \, p_n(\mathbf{l}_n) \, e^{i\mathbf{k}\cdot\mathbf{l}_n} = \langle e^{i\mathbf{k}\cdot\mathbf{l}_n} \rangle
\tag{4}
$$

### Step 3: Characteristic Function의 전개

$e^{i\mathbf{k}\cdot\mathbf{l}_n}$을 Taylor 전개하면:

$$
e^{i\mathbf{k}\cdot\mathbf{l}_n} \approx 1 + i\mathbf{k}\cdot\mathbf{l}_n - \frac{1}{2}(\mathbf{k}\cdot\mathbf{l}_n)^2 + \cdots
$$

앙상블 평균을 취하면:

$$
p_n(\mathbf{k}) = \langle e^{i\mathbf{k}\cdot\mathbf{l}_n} \rangle \approx 1 + i\mathbf{k}\cdot\langle\mathbf{l}_n\rangle - \frac{1}{2}\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle
\tag{5}
$$

**주의**: 책(식 10.13)에서는 마지막 항이 $(\mathbf{k}\cdot\langle\mathbf{l}_n\rangle)^2$로 되어 있는데, 이는 **오타**다. 올바른 형태는 $\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle$이다.

### Step 4: 로그를 취하고 전개

곱의 로그는 로그의 합:

$$
\ln\{p_1(\mathbf{k}) \cdots p_N(\mathbf{k})\} = \sum_{n=1}^{N} \ln p_n(\mathbf{k})
$$

$\ln(1+x) \approx x$ (for small $x$)를 적용:

$$
\ln p_n(\mathbf{k}) \approx i\mathbf{k}\cdot\langle\mathbf{l}_n\rangle - \frac{1}{2}\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle
\tag{6}
$$

### Step 5: Isotropic 분포에서 $\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle$ 계산

Isotropic(등방성) 분포에서는 $\langle l_{n,\alpha} l_{n,\beta} \rangle = \frac{\langle l_n^2 \rangle}{3}\delta_{\alpha\beta}$이므로:

$$
\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle = \sum_{\alpha,\beta} k_\alpha k_\beta \langle l_{n,\alpha} l_{n,\beta} \rangle = \frac{\langle l_n^2 \rangle}{3} \sum_\alpha k_\alpha^2 = \frac{\langle l_n^2 \rangle}{3} k^2
\tag{7}
$$

$\langle \mathbf{l}_n \rangle$이 작다고 가정하면 $\langle l_n^2 \rangle \approx \langle \Delta l_n^2 \rangle$이므로:

$$
\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle \approx \frac{\langle \Delta l_n^2 \rangle}{3} k^2
\tag{8}
$$

### Step 6: 합 계산

$$
\sum_{n=1}^{N} \ln p_n(\mathbf{k}) \approx \sum_{n=1}^{N} \left( i\langle\mathbf{l}_n\rangle \cdot \mathbf{k} - \frac{1}{6}\langle \Delta l_n^2 \rangle k^2 \right)
\tag{9}
$$

**전체 평균**을 정의하면:

$$
\langle \mathbf{l} \rangle = \frac{1}{N}\sum_{n=1}^{N} \langle \mathbf{l}_n \rangle, \quad \langle \Delta l^2 \rangle = \frac{1}{N}\sum_{n=1}^{N} \langle \Delta l_n^2 \rangle
\tag{10}
$$

따라서:

$$
\sum_{n=1}^{N} i\langle\mathbf{l}_n\rangle \cdot \mathbf{k} = iN\langle \mathbf{l} \rangle \cdot \mathbf{k}
$$

$$
\sum_{n=1}^{N} \frac{1}{6}\langle \Delta l_n^2 \rangle k^2 = \frac{N\langle \Delta l^2 \rangle}{6} k^2
$$

### Step 7: 단일 step의 Characteristic Function 형태

$$
p(\mathbf{k}) = \exp\left( i\langle \mathbf{l} \rangle \cdot \mathbf{k} - \frac{\langle \Delta l^2 \rangle}{6} k^2 \right)
\tag{11}
$$

그러면:

$$
\{p_1(\mathbf{k}) \cdots p_N(\mathbf{k})\} \approx \exp\left( N \left[ i\langle \mathbf{l} \rangle \cdot \mathbf{k} - \frac{\langle \Delta l^2 \rangle}{6} k^2 \right] \right)
\tag{12}
$$

### Step 8: Fourier 역변환으로 Gaussian 복원

식 (12)를 식 (3)에 대입하고 Fourier 역변환을 수행하면:

$$
P(\mathbf{R}; N) = \left( \frac{3}{2\pi \langle \Delta R^2 \rangle} \right)^{3/2} \exp\left[ -\frac{3(\mathbf{R} - \langle \mathbf{R} \rangle)^2}{2\langle \Delta R^2 \rangle} \right]
\tag{13}
$$

여기서:

$$
\langle \mathbf{R} \rangle = N\langle \mathbf{l} \rangle = \sum_{n=1}^{N} \langle \mathbf{l}_n \rangle
\tag{14}
$$

$$
\langle \Delta R^2 \rangle = N\langle \Delta l^2 \rangle = \sum_{n=1}^{N} \langle \Delta l_n^2 \rangle
\tag{15}
$$

## Questions & Insights

- **일반성**: 개별 step의 분포 $p_n(\mathbf{l}_n)$가 무엇이든, 통계적으로 독립이기만 하면 $N \to \infty$에서 Gaussian 분포가 된다.
- **책의 오타**: 식 10.13의 첫 번째 줄에서 $(\mathbf{k}\cdot\langle\mathbf{l}_n\rangle)^2$는 $\langle(\mathbf{k}\cdot\mathbf{l}_n)^2\rangle$의 오타다. 전자를 사용하면 분산 항이 상쇄되어 CLT의 핵심인 $\langle \Delta l^2 \rangle$ 항이 사라져버린다.
- **Isotropic 가정**: 식 (7)에서 $\langle l_{n,\alpha} l_{n,\beta} \rangle = \frac{\langle l_n^2 \rangle}{3}\delta_{\alpha\beta}$는 등방성 가정이 필요하다. 비등방성 분포에서는 더 복잡한 텐서 구조가 나타난다.

## Related Concepts

- [[Central Limit Theorem]] - CLT의 개념적 설명과 스케일링 법칙

## References

- [[Statistical Physics for Biological Matter (Woo)]] - Chapter 10, Section 10.1.1

## Notes from Claude

이 증명의 핵심은 **characteristic function의 곱이 로그에서 합으로 바뀐다**는 점이다. 이 덕분에 개별 step들의 기여가 단순히 더해지고, $N$이 커지면 중심극한정리에 의해 Gaussian으로 수렴한다.

물리적으로, 이것은 **많은 독립적인 작은 요동들이 합쳐지면 그 분포가 원래 요동의 세부사항과 무관하게 Gaussian이 된다**는 보편성(universality)을 수학적으로 보여준다. 이것이 자연에서 Gaussian 분포가 그토록 흔한 이유다.
