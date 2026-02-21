---
title: "Smirnov Density"
date: "2026-02-06"
subject: physics
tags:
  - study
  - concept
  - first-passage
class: study
---

# Smirnov Density

## Overview

1D Brownian motion의 first passage time distribution. Power-law tail을 가진다.

## The Formula

$$
\boxed{f(x,t) = \frac{|x|}{\sqrt{4\pi D t^3}} \exp\left(-\frac{x^2}{4Dt}\right)}
\tag{7}
$$

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $f(x,t)$ | x에 처음 도달하는 시간 t의 PDF |
| $D$ | Diffusion coefficient |
| $x$ | 목표 위치 (고정) |

## 특징

### Power-law tail

Large t에서:
$$
f(x,t) \sim \frac{|x|}{\sqrt{4\pi D}} t^{-3/2}
$$

**의미**: 
- 긴 시간까지 도달 안 할 확률이 높음
- Mean first passage time이 발산하지는 않음: $\langle T(x) \rangle = x^2/(2D)$

### Essential singularity at t=0

$t \to 0$일 때 $f(x,t) \to 0$ (매우 빠르게)
- t=0에 정확히 도달할 확률은 0

## Laplace Transform

[[First Passage Time from Position PDF]]에서 유도:
$$
\tilde{f}(x,s) = e^{-|x|\sqrt{s/(2D)}}
$$

Inverse Laplace → Smirnov density

## Related Concepts

- [[First Passage Time from Position PDF]]
- [[First Passage Renewal Equation]]

## References

- MIT OCW 18.366, Lecture 16 (Bazant)
  [[Lecture 16 First Passage in the Continuum Limit.pdf]]
