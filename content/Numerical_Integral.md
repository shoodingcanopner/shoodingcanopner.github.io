---
title: lecture8_Integral
date: 2025-05-09
subject:
  - physics
  - mathmetics
tags:
  - study
  - lecture_note
  - computational_physics
class: study_lecture
---

# PHYS406 Computational Physics - Integral Methods (Part 1)
*Aaram J. Kim*

## 2 Integral

이것은 초등 수치 해석으로 분류되는 마지막 섹션입니다. 우리는 일차원 적분을 다룰 것입니다:

$$I(a, b) = \int_a^b dx f(x)$$

### 2.1 Trapezoidal method

이전에 소개된 대로, 사다리꼴 방법은 주어진 $k$번째 길이 요소에 사다리꼴을 배치합니다:

$$A_k = \frac{h}{2}[f(a + (k-1)h) + f(a + kh)]$$

그리고 총 적분은 사다리꼴 면적의 합으로 근사됩니다:

$$I(a, b) \sim \sum_{k=1}^N A_k = \frac{h}{2} [f(a + (k-1)h) + f(a + kh)]$$

$$= h\left(\frac{1}{2}f(a) + f(a + h) + f(a + 2h) + \cdots + f(b - h) + \frac{1}{2}f(b)\right)$$

$$= h\left[\frac{1}{2}f(a) + \frac{1}{2}f(b) + \sum_{k=1}^{N-1} f(a + kh)\right]$$

### 2.2 Simpson's rule

사다리꼴 대신, 함수의 작은 부분을 2차 함수로 근사하여 이 부분에 대한 해석적 적분을 수행할 수 있습니다. 2차 곡선을 맞추기 위해 세 개의 수가 필요하므로, 세 개의 데이터 포인트가 단위 부분을 구성합니다. 세 개의 데이터 포인트, $f(-h)$, $f(0)$, 및 $f(h)$와 피팅 함수 $f(x) = Ax^2 + Bx + C$를 가정합니다. 그러면 세 가지 피팅 조건은 다음과 같이 작성될 수 있습니다:

$$f(-h) = Ah^2 - Bh + C, \quad f(0) = C, \quad f(h) = Ah^2 + Bh + C$$

따라서, 관계를 역전시키면:

$$A = \frac{1}{h^2}\left(\frac{1}{2}f(-h) - f(0) + \frac{1}{2}f(h)\right)$$

$$B = \frac{1}{2h}[f(h) - f(-h)]$$

$$C = f(0)$$
피팅된 2차 함수의 적분은 쉽게 수행할 수 있습니다:

$$\int_{-h}^{h} dx (Ax^2 + Bx + C) = \frac{2}{3}Ah^3 + 2Ch = \frac{h}{3}[f(-h) + 4f(0) + f(h)]$$

이제 다른 세그먼트의 적분을 합하면:

$$I(a, b) \sim \frac{h}{3}[f(a) + 4f(a+h) + f(a+2h)] + \cdots + \frac{h}{3}[f(a+(N-2)h) + 4f(a+(N-1)h) + f(b)]$$

$$= \frac{h}{3}\left[f(a) + f(b) + 4\sum_{\text{odd }k}f(a+kh) + 2\sum_{\text{even }k}f(a+kh)\right]$$

각 선 세그먼트가 $2h$를 커버하므로, 심슨 방법의 경우 총 짝수 개의 그리드와 홀수 개의 데이터 포인트가 필요합니다.

### 2.3 Error estimation: Euler-Maclaurin formula

$$f(x) = f(x_{k-1}) + (x - x_{k-1})f'(x_{k-1}) + \frac{1}{2}(x - x_{k-1})^2f''(x_{k-1}) + \cdots$$

$$\int_{x_{k-1}}^{x_k} dx f(x) = f(x_{k-1})\int_{0}^{h} du + f'(x_{k-1})\int_{0}^{h} du \, u + \frac{1}{2}f''(x_{k-1})\int_{0}^{h} du \, u^2 + \cdots$$

$$= hf(x_{k-1}) + \frac{h^2}{2}f'(x_{k-1}) + \frac{h^3}{6}f''(x_{k-1}) + O(h^4)$$

$$\int_{x_{k-1}}^{x_k} dx f(x) = hf(x_k) - \frac{h^2}{2}f'(x_k) + \frac{h^3}{6}f''(x_k) - O(h^4)$$

이 두 식을 더하면:

$$\int_{x_{k-1}}^{x_k} dx f(x) = \frac{h}{2}[f(x_{k-1}) + f(x_k)] + \frac{h^2}{4}[f'(x_{k-1}) - f'(x_k)] + \frac{h^3}{12}[f''(x_{k-1}) + f''(x_k)] + O(h^4)$$

그리고, 결과적인 전체 적분:

$$\int_{a}^{b} dx f(x) = \sum_{k=1}^{N}\int_{x_{k-1}}^{x_k} dx f(x)$$

$$= \frac{h}{2}\sum_{k=1}^{N}[f(x_{k-1}) + f(x_k)] + \frac{h^2}{4}[f'(a) - f'(b)] + \frac{h^3}{12}\sum_{k=1}^{N}[f''(x_{k-1}) + f''(x_k)] + O(h^4)$$

$$\int_{a}^{b} dx f''(x) = \frac{h}{2}\sum_{k=1}^{N}[f''(x_{k-1}) + f''(x_k)] + O(h^2)$$

$$\frac{h^3}{12}\sum_{k=1}^{N}[f''(x_{k-1}) + f''(x_k)] = \frac{h^2}{6}\int_{a}^{b} dx f''(x) + O(h^4)$$

$$= -\frac{h^2}{6}[f'(a) - f'(b)] + O(h^4)$$

$$\int_{a}^{b} dx f(x) = \frac{h}{2}\sum_{k=1}^{N}[f(x_{k-1}) + f(x_k)] + \frac{h^2}{12}[f'(a) - f'(b)] + O(h^4)$$

$$\varepsilon = \frac{h^2}{12}[f'(a) - f'(b)]$$

이것은 오일러-맥클로린 공식으로, 사다리꼴 법칙이 $O(h)$까지 정확한 1차 법칙이며 $O(h^2)$의 오차를 가진다는 것을 말합니다.