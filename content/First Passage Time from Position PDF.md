---
title: "First Passage Time from Position PDF"
date: "2026-02-06"
subject: physics
tags:
  - study
  - concept
  - first-passage
class: study
---

# First Passage Time from Position PDF

## Overview

Position PDF로부터 first passage time distribution을 계산하는 공식. Laplace 공간에서 매우 간단한 형태로 나타난다.

## The Formula

### Real Space
[[First Passage Renewal Equation]]으로부터:
$$
p(x,t) = \int_0^t f(x,t') \, p(0, t-t') \, dt'
$$

### Laplace Space

Convolution → 곱셈:
$$
\tilde{p}(x,s) = \tilde{f}(x,s) \cdot \tilde{p}(0,s)
$$

따라서:
$$
\boxed{\tilde{f}(x,s) = \frac{\tilde{p}(x,s)}{\tilde{p}(0,s)}}
\tag{4}
$$

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\tilde{f}(x,s)$ | First passage time distribution (Laplace) |
| $\tilde{p}(x,s)$ | Position PDF at time t (Laplace) |
| $\tilde{p}(0,s)$ | Zero-displacement propagator (Laplace) |
| $s$ | Laplace variable |

## 의미

**입력**: 
- $p(x,t)$: x=0에서 시작, 시간 t에 x에 있을 확률
- $p(0,t)$: 0만큼 이동한 확률

**출력**: 
- $f(x,t)$: x에 처음 도달하는 시간의 PDF

Laplace 변환 덕분에 나눗셈 하나로 해결.

## 예제: 1D Brownian Motion

$$
\tilde{p}(x,s) = \frac{1}{\sqrt{2Ds}} e^{-|x|\sqrt{s/(2D)}}
$$

$$
\tilde{p}(0,s) = \frac{1}{\sqrt{2Ds}}
$$

따라서:
$$
\tilde{f}(x,s) = e^{-|x|\sqrt{s/(2D)}}
$$

Inverse Laplace → Smirnov density:
$$
f(x,t) = \frac{|x|}{\sqrt{4\pi D t^3}} \exp\left(-\frac{x^2}{4Dt}\right)
$$

Power-law tail: $f(x,t) \sim t^{-3/2}$

## Related Concepts

- [[First Passage Renewal Equation]]
- [[Bachelier's Equation (Convolution theorem)]]

## References

- MIT OCW 18.366, Lecture 16 (Bazant)
  [[Lecture 16 First Passage in the Continuum Limit.pdf]]
