---
title: Recurrence of Brownian Motion
date: "2026-07-01"
subject: mathematics
tags:
  - study
  - concept
  - brownian-motion
  - stochastic-process
  - recurrence
class: study
---

# Recurrence of Brownian Motion

## Overview

브라운 운동의 **recurrence**(재귀성)란, 입자가 출발점(또는 그 근방)을 무한히 많이 재방문하는 성질이다. 이를 수학적으로 검증하려면 **특정 시점 $t$에 입자가 원점 근방 반지름 $a$ 이내에 있을 확률 $P(\|B_t\| < a)$** 를 계산하고, 이를 $t$에 대해 적분했을 때 발산하는지 확인한다.

$$
\text{Recurrent} \iff \int_0^{\infty} P(\|B_t\| < a)\, dt = \infty
\tag{0}
$$

차원에 따라 결론이 달라지며, **1D와 2D는 recurrent, 3D 이상은 transient**이다.

## Symbol Table

| 기호 | 의미 |
|------|------|
| $B_t$ | $d$차원 브라운 운동 위치 |
| $a$ | 원점 근방의 반지름 (양수 상수) |
| $P(\|B_t\| < a)$ | 시각 $t$에서 원점 근방 내에 있을 확률 |
| $\text{erf}(x)$ | Error function: $\text{erf}(x) = \int_0^x e^{-u^2} du$ |
| $p_d(r, t)$ | $d$차원 브라운 운동의 transition probability density |

## Key Points

### 핵심 아이디어: Return Probability의 시간 적분

직접 "무한히 방문한다"는 것을 증명하는 대신, 다음 논리를 사용한다:

$$
\sum_n P(\text{시각 } t_n \text{에 원점 근방 방문}) = \infty \implies \text{무한히 많이 방문}
$$

이것은 **Second Borel-Cantelli Lemma**의 적용이다. 따라서 핵심은 $P(\|B_t\| < a)$의 large-$t$ 거동을 구하는 것.

---

### 1차원 계산

**Transition probability density:**

$$
P(x, t) = \frac{1}{\sqrt{2\pi t}}\, e^{-x^2/2t}
\tag{1}
$$

**구간 $[0, a]$에서의 적분** (우함수이므로 전체의 절반):

$$
P(x < a,\, t) = \frac{2}{\sqrt{2\pi t}} \int_0^a e^{-x^2/2t}\, dx
\tag{2}
$$

$u = x/\sqrt{2t}$로 치환하면 $dx = \sqrt{2t}\, du$:

$$
\int_0^a e^{-x^2/2t}\, dx = \sqrt{2t} \int_0^{a/\sqrt{2t}} e^{-u^2}\, du = \sqrt{2t}\cdot \text{erf}\!\left(\frac{a}{\sqrt{2t}}\right)
\tag{3}
$$

따라서:

$$
P(|x| < a,\, t) = \frac{2}{\sqrt{2\pi t}} \cdot \sqrt{2t}\cdot \text{erf}\!\left(\frac{a}{\sqrt{2t}}\right) = \frac{2}{\sqrt{\pi}}\,\text{erf}\!\left(\frac{a}{\sqrt{2t}}\right)
\tag{4}
$$

**Large-$t$ 전개**: $t \to \infty$이면 $a/\sqrt{2t} \to 0$이고, $\text{erf}(\epsilon) \approx \epsilon$이므로:

$$
P(|x| < a,\, t) \approx \frac{2}{\sqrt{\pi}} \cdot \frac{a}{\sqrt{2t}} = \frac{a\sqrt{2}}{\sqrt{\pi t}} \sim t^{-1/2}
\tag{5}
$$

**재귀성 판정:**

$$
\int_1^{\infty} t^{-1/2}\, dt = \infty \quad \Rightarrow \quad \textbf{1D BM is recurrent}
\tag{6}
$$

---

### 2차원 계산

**Transition probability density** (두 독립 1D BM의 곱):

$$
P(\mathbf{r}, t) = \frac{1}{2\pi t}\, e^{-r^2/2t}
\tag{7}
$$

**원점 근방 반지름 $a$ 내의 확률** (극좌표):

$$
P(r < a,\, t) = \int_0^{2\pi}\!\int_0^a \frac{1}{2\pi t}\, e^{-r^2/2t}\, r\, dr\, d\theta
\tag{8}
$$

$u = r^2/2t$로 치환하면 $r\, dr = t\, du$:

$$
P(r < a,\, t) = \frac{1}{2\pi t} \cdot 2\pi \cdot t \int_0^{a^2/2t} e^{-u}\, du = \left[-e^{-u}\right]_0^{a^2/2t} = 1 - e^{-a^2/2t}
\tag{9}
$$

**Large-$t$ 전개**: $a^2/2t \to 0$이면 $1 - e^{-\epsilon} \approx \epsilon$이므로:

$$
P(r < a,\, t) \approx \frac{a^2}{2t} \sim t^{-1}
\tag{10}
$$

**재귀성 판정:**

$$
\int_1^{\infty} t^{-1}\, dt = \infty \quad \Rightarrow \quad \textbf{2D BM is recurrent}
\tag{11}
$$

---

### 3차원 계산 (참고)

3D transition probability density:

$$
P(\mathbf{r}, t) = \left(\frac{1}{2\pi t}\right)^{3/2} e^{-r^2/2t}
\tag{12}
$$

구면좌표 적분 (구체적 계산 생략):

$$
P(r < a,\, t) \sim \left(\frac{a^2}{2t}\right)^{3/2} \sim t^{-3/2}
\tag{13}
$$

**Transient 판정:**

$$
\int_1^{\infty} t^{-3/2}\, dt < \infty \quad \Rightarrow \quad \textbf{3D BM is transient}
\tag{14}
$$

---

### 차원별 요약

| Dimension | $P(\|B_t\| < a)$ (large $t$) | $\int_0^\infty P\, dt$ | Result |
|:---------:|:-----------------------------:|:----------------------:|:------:|
| 1D | $\sim t^{-1/2}$ | $\infty$ | **Recurrent** |
| 2D | $\sim t^{-1}$ | $\infty$ (log 발산) | **Recurrent** |
| 3D | $\sim t^{-3/2}$ | $< \infty$ | **Transient** |
| $d \geq 3$ | $\sim t^{-d/2}$ | $< \infty$ | **Transient** |

일반적으로 $d \geq 3$이면 $\int t^{-d/2} dt < \infty$이므로 transient이다. 즉 **$d \leq 2$에서만 재귀적**이다.

## Questions & Insights

- 2D는 $t^{-1}$ 감쇠로 아슬아슬하게 재귀적 — 경계 차원(critical dimension)이 $d = 2$라는 점이 흥미롭다.
- 이 계산에서 사용한 논리(return probability의 시간 적분)는 Pólya의 random walk recurrence 조건과 정확히 대응된다. 연속/이산의 차이만 있을 뿐.

## Related Concepts

- [[Brownian Motion Properties]]
- [[Gaussian Integral]]
- [[Diffusion Equation Gaussian Distribution]]
- [[Markov Property]]
- [[Infinite Variation of Brownian Motion]]


## Notes from Claude

재귀성 증명의 핵심은 "언제 돌아오는가"가 아니라 **"얼마나 자주 돌아오는가"** 를 시간 적분으로 보는 것이다.

Return probability의 large-$t$ 거동이 $t^{-d/2}$로 결정되는 이유는 간단하다: 시간이 흐를수록 입자의 위치 분포가 $\sim \sqrt{t}$로 퍼지므로, 고정된 부피 $\sim a^d$ 안에 있을 확률은 총 부피 $\sim t^{d/2}$에 반비례해 $\sim t^{-d/2}$가 된다.

이 $t^{-d/2}$ 거동의 임계점은 $d = 2$ — $\int t^{-1} dt$가 경계에서 발산하는 유일한 지수다. **이것이 2D가 recurrent하면서도 "가장 아슬아슬한" 재귀성을 갖는 이유**이다.
