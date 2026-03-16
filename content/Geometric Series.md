---
title: "Geometric Series"
date: "2025-11-27"
subject: Mathematics
tags:
  - study
  - concept
  - series
  - basics
class: study
---

# Geometric Series (등비급수)

## Overview

등비급수는 각 항이 일정한 비율(공비)로 증가하는 수열의 합이다. 복소해석에서 테일러 급수와 로랑 급수의 기초가 되는 개념이다.

## 공식

첫째항이 $a$, 공비가 $r$인 무한등비급수:

$$\sum_{n=0}^{\infty} ar^n = a + ar + ar^2 + ar^3 + \cdots = \frac{a}{1-r}$$

**수렴 조건**: $|r| < 1$

## 유도

부분합 $S_N = a + ar + ar^2 + \cdots + ar^{N-1}$에 대해:

$$S_N = a\frac{1-r^N}{1-r}$$

$|r| < 1$일 때, $N \to \infty$이면 $r^N \to 0$이므로:

$$S = \lim_{N\to\infty} S_N = \frac{a}{1-r}$$

## 주요 응용 예시

### 1. $\frac{1}{1-x}$의 전개

$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots, \quad |x| < 1$$

### 2. $\frac{1}{1+x}$의 전개

$$\frac{1}{1+x} = \frac{1}{1-(-x)} = 1 - x + x^2 - x^3 + \cdots, \quad |x| < 1$$

### 3. 복소수로의 확장

공비 $r$이 복소수여도 동일하게 적용된다. $|r| < 1$이면:

$$\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$$

## Key Insight

등비급수는 단순한 대수적 공식처럼 보이지만, 실제로는:
- **테일러 급수의 특수한 경우**
- **로랑 급수 전개의 기본 도구**
- **복소해석에서 함수 전개의 출발점**

## Related Concepts

- [[Laurent Series and Convergence Regions]]