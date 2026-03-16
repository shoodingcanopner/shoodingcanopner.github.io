---
title: "Bachelier's Equation"
date: "2026-02-04"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Bachelier's Equation

## Overview
Markov chain의 시간 진화를 나타내는 가장 확실한 방법

Bachelier's equation은 random walk에서 **N번 step 후 위치의 확률 분포**를 계산하는 기본 방정식이다. 핵심 아이디어는: **독립적인 step들을 누적한 결과는 각 step의 확률 분포를 모두convolution한 것**이다.
$$
\boxed{P_N = p_1 * p_2 * p_3 * \cdots * p_N * P_0}
\tag{4}
$$
이 방정식이 왜 중요한가? 
통계물리와 확률론에서 확률 분포에 대해 **Fourier transform을 쓰는 근본적인 이유**를 보여주기 때문이다.

## Symbol Table

| Symbol         | Meaning                        |
| -------------- | ------------------------------ |
| $X_N$          | N번 step 후 위치 (random variable) |
| $P_N(\vec{x})$ | N번 step 후 위치의 확률 밀도 함수 (PDF)   |
| $p_n(\vec{r})$ | n번째 step의 크기 $\vec{r}$에 대한 PDF |
| $*$            | Convolution 연산                 |
| $\hat{P}(k)$   | Fourier transform of $P(x)$    |

## The Problem: 누적 확률 분포 계산

### 우리가 알고 싶은 것

Random walker가:
- 처음 위치 $X_0 = 0$에서 시작
- N번의 독립적인 step $\Delta x_1, \Delta x_2, \ldots, \Delta x_N$을 거침
- 최종 위치: $X_N = \sum_{i=1}^N \Delta x_i$

**질문: 최종 위치 $X_N$의 확률 분포는?**

step 크기의 확률 분포와 step 시작 이전의 위치에 대한 PDF를 모두 고려해야 한다. 
step 크기에 대해 적분한다. 
말이 되려면 아래 같은 적분을 해야 한다. 
$$
P_N(\vec{X}) = \int P_{N-1}(\vec{R}) \cdot p_N(\vec{X} - \vec{R}) \, d^d\vec{R}
\tag{1}
$$
**이게 바로 convolution!**
$$
\boxed{P_N = p_N * P_{N-1}}
\tag{2}
$$

### Recursive하게 전개

$$
P_N = p_N * P_{N-1} = p_N * (p_{N-1} * P_{N-2}) = \cdots
\tag{3}
$$

최종적으로:
$$
\boxed{P_N = p_1 * p_2 * p_3 * \cdots * p_N * P_0}
\tag{4}
$$

($P_0 = \delta(\vec{x})$, 원점에서 시작)

**이것이 Bachelier's equation이다!**

## The Problem with Convolution

### 왜 Convolution은 계산하기 어려운가?

**1D 예시:**
$$
P_2(x) = \int_{-\infty}^{\infty} p_1(x') p_2(x - x') dx'
\tag{5}
$$

- 적분을 직접 계산해야 함
- N번 convolution하면? 계속 중첩 적분!
- 계산 복잡도가 급격히 증가

## The Solution: Fourier Transform! ✨

### Convolution Theorem

$$
\boxed{\widehat{f * g}(\vec{k}) = \hat{f}(\vec{k}) \cdot \hat{g}(\vec{k})}
\tag{6}
$$

Fourier transform을 하면 **Convolution이 곱셈으로 변환된다!**

### Bachelier's Equation in Fourier Space

아래 식은 초기 위치 분포가 디락 델타라고 가정한 듯 하다. 
real space에서 디락 텔타는 Fourier space에서 상수이다. 
$$
\hat{P}_N(\vec{k}) = \hat{p}_1(\vec{k}) \cdot \hat{p}_2(\vec{k}) \cdots \hat{p}_N(\vec{k})
\tag{7}
$$
$$
\boxed{\hat{P}_N(\vec{k}) = \prod_{n=1}^N \hat{p}_n(\vec{k})}
\tag{8}
$$
각 step의 확률 분포 푸리에 변환한 걸 다 곱해 주면 그만이다. 

**IID (Identical Independent Distributed) steps이면:**
그러니까 매 step의  확률 분포가 동인하면서, 각 step이 independent하다면
똑같은 $\hat{p}(\vec{k})$을 여러번 곱하면 된다. 
$$
\hat{P}_N(\vec{k}) = (\hat{p}(\vec{k}))^N
\tag{9}
$$
**엄청나게 간단해졌다!**

### 최종 답 구하기

Inverse Fourier transform:
$$
P_N(\vec{x}) = \int \frac{d^d\vec{k}}{(2\pi)^d} e^{i\vec{k} \cdot \vec{x}} \hat{P}_N(\vec{k})
\tag{10}
$$

## 왜 통계학자들은 Fourier를 좋아하나?

### 1. **Convolution → Product**

| Real Space                       | Fourier Space                                            |
| -------------------------------- | -------------------------------------------------------- |
| $P_N = p_1 * p_2 * \cdots * p_N$ | $\hat{P}_N = \hat{p}_1 \cdot \hat{p}_2 \cdots \hat{p}_N$ |
| 중첩 적분 (악몽)                       | 단순 곱셈 (천국)                                               |

### 2. **Product → Sum (Log 취하면)**

$$
\log \hat{P}_N(\vec{k}) = \sum_{n=1}^N \log \hat{p}_n(\vec{k})
\tag{11}
$$

이게 바로 **cumulant-generating function의 additivity**!

### 3. **Gaussian은 Fourier에서도 Gaussian**

$$
p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-x^2/(2\sigma^2)} \quad \Longleftrightarrow \quad \hat{p}(k) = e^{-\sigma^2 k^2/2}
\tag{12}
$$

계산이 매우 간단해짐!

## 이것이 이어지는 이론들

- **Generating Function** → Moment 추출
- **Cumulant Generating Function** → Additivity


## Related Concepts

- [[Chapman-Kolmogorov Equation]]
- [[Cumulant Generating Function]]
- [[Central Limit Theorem]]
- [[Diffusion Equation Derivation from Random Walks]]

## References

- MIT OCW 18.366, Lecture 2 (Bazant)
[[Lecture 2 Moments, Cumulants, and Scaling.pdf]]
