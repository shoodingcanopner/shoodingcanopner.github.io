---
title: "Generating Function in Random Walks"
date: "2026-02-04"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Generating Function in Random Walks

## Overview

**Generating function은 probability density function $P(x)$를 Fourier transform한 $\hat{P}(k)$이다**

뭘 generate 하냐면... $\hat{P}(k)$를 미분하면 $P(x)$의 moments가 만들어진다. 
$$ m_n = (i)^n \frac{d^n\hat{P}}{dk^n}\bigg|_{k=0}$$
$i$ 부분이 거슬린다면 이렇게 이해하던지. $-ik$통째로 미분하는 것이더. 
$$ m_n = \frac{d^n\hat{P}}{(d-ik)^n}\bigg|_{k=0}$$

$\hat{P}(k)$는 이름이 많다. **Characteristic function** 혹은 **moment-generating function**이라고 불린다. 
이를 "moment-generating function"이라고도 부르는 이유는, 
$k=0$ 근처에서 Taylor 전개했을 때의 계수가 바로 moment들이기 때문이다.

핵심 아이디어: **Fourier transform에서 사용되는 exponential function $e^{-ikx}$를 Taylor 전개하면, 자연스럽게 moment들이 추출된다.**

## Symbol Table

| Symbol       | Meaning                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------- |
| $P(x)$       | 위치 $x$의 확률밀도함수 (PDF)                                                                            |
| $\hat{P}(k)$ | **Characteristic function** or **moment-generating function** (==Fourier transform== of $P(x)$) |
| $m_n$        | $n$-th moment: $\langle x^n \rangle$                                                            |
| $k$          | Fourier space의 wave vector                                                                      |

## Key Derivation: 왜 테일러 전개를 했는데 $(-i)^n k^n$ 형태가 나오는가?

### Step 1: Fourier Transform 정의

$$
\hat{P}(k) = \int_{-\infty}^{\infty} e^{-ikx} P(x) \, dx
\tag{1}
$$

### Step 2: Exponential을 Taylor 전개

적분 안의 $e^{-ikx}$를 전개:

$$
e^{-ikx} = \sum_{n=0}^{\infty} \frac{(-ikx)^n}{n!} = 1 - ikx + \frac{(-ikx)^2}{2!} + \cdots
\tag{2}
$$

### Step 3: 적분 안으로 삽입

$$
\hat{P}(k) = \int_{-\infty}^{\infty} \left[\sum_{n=0}^{\infty} \frac{(-ikx)^n}{n!}\right] P(x) \, dx
\tag{3}
$$

적분과 합의 순서를 바꾸면 (절대수렴 가정):

$$
\hat{P}(k) = \sum_{n=0}^{\infty} \frac{(-ik)^n}{n!} \int_{-\infty}^{\infty} x^n P(x) \, dx
\tag{4}
$$

### Step 4: Moment 등장!

적분 부분이 바로 $n$-th moment:

$$
\int_{-\infty}^{\infty} x^n P(x) \, dx = \langle x^n \rangle = m_n
\tag{5}
$$

따라서:

$$
\boxed{\hat{P}(k) = \sum_{n=0}^{\infty} \frac{(-i)^n k^n m_n}{n!}}
\tag{6}
$$

전개하면:

$$
\hat{P}(k) = 1 - im_1 k - \frac{1}{2}m_2 k^2 + \cdots
\tag{7}
$$

## Physical Interpretation

**왜 $(-i)^n$이 나오는가?**

$(-i)^n$은 단순히 "복소수라서"가 아니라, **Fourier transform의 구조적 결과**이다:

1. Fourier transform은 $e^{-ikx}$라는 oscillating function 사용
2. $k$로 미분할 때마다 $-ix$가 내려옴:
   $$\frac{d^n\hat{P}}{dk^n}\bigg|_{k=0} = (-i)^n m_n$$
3. $n$번 미분 → $(-i)^n x^n$ → $P(x)$로 평균 → $(-i)^n m_n$

**물리적 의미:**
- Real space의 정보 ($m_n$)를 k-space로 encoding
- Phase structure ($e^{-ikx}$의 복소수 성질) 반영
- Moment 추출을 위한 자연스러운 도구

## Key Points

- **Characteristic function = Moment-generating function**: $\hat{P}(k)$의 Taylor 계수가 moments
- **$(-i)^n$ factor**: Fourier transform 정의에서 자연스럽게 유도됨
- **Convolution → Product**: Fourier space에서 independent steps의 곱셈으로 변환
- **유용성**: Random walk에서 $N$번 step 후 위치 분포 계산 시 convolution 대신 곱셈 사용 가능

## Questions & Insights

- **Q1**: Moment가 무한대이거나 존재하지 않으면 (fat-tailed distribution)?
  - $\hat{P}(k)$가 $k=0$ 근처에서 analytic하지 않음
  - Anomalous diffusion과 관련

## Related Concepts

이 함수에 로그를 취하며 뭐가 되게!
[[Cumulant Generating Function]]

- [[Fourier Transform of Gaussian Distribution]]
- [[Central Limit Theorem]]
- [[Brownian Motion Properties]]
- [[Diffusion Equation Derivation from Random Walks]]

## References

- MIT OCW 18.366, Lecture 2: Moments, Cumulants, and Scaling (Martin Bazant)
- [[Lecture 2 Moments, Cumulants, and Scaling.pdf]]
