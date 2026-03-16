---
title: "First Passage Renewal Equation"
date: "2026-02-06"
subject: physics
tags:
  - study
  - concept
  - first-passage
  - renewal-theory
class: study
---

# First Passage Renewal Equation

## Overview

**First Passage Renewal Equation**은 random walker가 특정 위치 x에 시간 t에 있을 확률을 계산하는 기본 방정식이다. [[Bachelier's Equation (Convolution theorem)|Bachelier's Equation]]과 매우 닮아있지만, **공간이 아닌 시간에 대해 적분**한다는 결정적 차이가 있다.

$$
\boxed{p(x,t) = \int_0^t f(x,t') \, p(0, t-t') \, dt'}
\tag{1}
$$

**핵심**: 이 식에서 $f(x,t')$는 반드시 **first passage time distribution**이어야 한다. 단순히 "시간 $t'$에 위치 $x$에 있을 확률"이 아니다!

## Symbol Table

| Symbol | Meaning | Dimension |
|--------|---------|-----------|
| $p(x,t)$ | 시간 $t$에 위치 $x$에 있을 확률 밀도 | $[\text{Length}]^{-1}$ |
| $f(x,t)$ | 위치 $x$에 **처음으로** 도달하는 시간의 PDF | $[\text{Time}]^{-1}$ |
| $p(0,t)$ | Displacement가 0인 propagator | $[\text{Length}]^{-1}$ |
| $t'$ | First passage가 일어나는 시간 | $[\text{Time}]$ |

## Bachelier's Equation과의 비교

### Bachelier's Equation (공간 convolution)

$$
P_N(\vec{x}) = \int P_{N-1}(\vec{r}) \cdot p_N(\vec{x} - \vec{r}) \, d^d\vec{r}
$$

**특징**:
- **공간 변수**에 대해 적분
- 적분 범위: $-\infty$ ~ $\infty$ (전체 공간)
- $p_N(\vec{r})$: N번째 step의 크기 분포 (단순 transition probability)
- Fourier transform에서 곱셈으로 변환

### First Passage Renewal Equation (시간 convolution)

$$
p(x,t) = \int_0^t f(x,t') \, p(0, t-t') \, dt'
$$

**특징**:
- **시간 변수**에 대해 적분
- 적분 범위: $0$ ~ $t$ (**인과적**, 음의 시간 없음)
- $f(x,t')$: **First passage time** 분포 (단순 transition이 아님!)
- ==Laplace transform==에서 곱셈으로 변환

### 비교 테이블

| | Bachelier | First Passage Renewal |
|---|---|---|
| **적분 변수** | 공간 $\vec{r}$ | 시간 $t'$ |
| **적분 범위** | $-\infty$ ~ $\infty$ | $0$ ~ $t$ |
| **Transition** | 일반 transition $p_n$ | **First passage** $f(x,t)$ |
| **변환** | Fourier | Laplace |
| **의미** | N번 step 후 위치 | 시간 t에 위치 x |

## 왜 First Passage Distribution이어야 하는가?

### ❌ 만약 그냥 $p(x,t')$를 쓴다면?

$$
p(x,t) \overset{?}{=} \int_0^t p(x,t') \, p(0, t-t') \, dt' \quad \text{(틀린 식!)}
$$

**문제: 이중 계산 (Double Counting)**

$p(x,t')$는 시간 $t'$에 $x$에 있는 **모든** 경로를 포함:
- $t'$에 **처음으로** $x$에 도달한 경로
- 이전에 이미 $x$를 **여러 번 방문**한 경로

각 경로마다 $p(0, t-t')$를 곱하면:
- 같은 사건을 **여러 번** 계산하게 됨
- Markov property가 명확하지 않음

### ✅ First Passage를 쓰면?

$$
p(x,t) = \int_0^t f(x,t') \, p(0, t-t') \, dt' \quad \text{(맞는 식!)}
$$

**해결: Renewal Property**

$f(x,t')$는 시간 $t'$에 **처음으로** $x$에 도달한 경로만 계산:
- $0 < \tau < t'$ 동안 **단 한 번도** $x$에 없었음이 보장
- $t-t'$에서 "과거가 리셋"됨, 이때때부터 새로운 random walk 시작
- 각 경로가 **정확히 한 번만** 계산됨

## Renewal Theory와의 연결

이 방정식은 **Renewal Theory**의 기본 방정식이다:

$$
\text{Process}(t) = \int_0^t \text{Renewal}(t') \times \text{Post-renewal}(t-t') \, dt'
$$

**Renewal**: "리셋" 또는 "새로 시작"하는 사건
**Key Property**: Renewal 순간에 과거 기억이 완전히 사라짐 (Markov property)

## Laplace Transform에서의 형태

Convolution이므로 Laplace transform에서 곱셈으로 변환:

$$
\tilde{p}(x,s) = \tilde{f}(x,s) \cdot \tilde{p}(0,s)
$$

여기서:
- $\tilde{g}(s) = \int_0^\infty g(t) e^{-st} dt$ (Laplace transform)
- $s$: Laplace 변수

**왜 Laplace인가?**
1. 적분 범위가 $0 \to t$ (인과적)
2. 많은 $f(x,t)$가 power-law tail: $f \sim t^{-3/2}$
3. Fourier는 이런 함수에서 발산하지만 Laplace는 수렴!

## 응용: Unbinding 문제와의 연결

당신의 DNA-protein unbinding 연구에서:

### 1D Lattice Unbinding Model

- **First passage to unbinding**: 단백질이 DNA를 처음으로 떠나는 시간
- **$f(t)$**: Unbinding time의 PDF
  $$
  f(t) = k_{\text{off}} e^{-k_{\text{off}} t}
  $$

- **Survival probability**:
  $$
  S(t) = \int_t^\infty f(t') dt' = e^{-k_{\text{off}} t}
  $$

### Energy-dependent Case

각 site $i$에서 결합 에너지 $E_i$에 따라:
$$
f(t|E_i) = k_{\text{off}}(E_i) \exp(-k_{\text{off}}(E_i) t)
$$

**Survival conditioning**:
- 오래 생존한 입자만 선택 → 깊은 trap 위주 샘플링
- Effective $f_{\text{eff}}(t)$가 power-law로 변형
- Renewal equation을 통해 subdiffusion 유도!

### CTRW Formulation

Montroll-Weiss equation도 결국 renewal equation의 일종:
$$
p(x,t) = \int_0^t \psi(t') \, p_{\text{jump}}(x, t-t') \, dt'
$$
- $\psi(t)$: Waiting time distribution (renewal)
- 당신의 모델: $\psi(t|E_i)$ energy-dependent
- Survival bias → $\psi_{\text{eff}}(t)$ power-law

## 차원 체크

식 (1)의 차원을 확인:
$$
p(x,t) = \int_0^t f(x,t') \, p(0, t-t') \, dt'
$$

- 좌변: $[p(x,t)] = [\text{Length}]^{-1}$
- 우변: $[f] \cdot [p] \cdot [dt'] = [\text{Time}]^{-1} \cdot [\text{Length}]^{-1} \cdot [\text{Time}]$
  $= [\text{Length}]^{-1}$ ✓

## Related Concepts

- [[Bachelier's Equation (Convolution theorem)]] - 공간 convolution 버전
- [[First Passage Time from Position PDF]] - Laplace 공간에서 계산법

## References

- MIT OCW 18.366, Lecture 16 (Bazant)
  [[Lecture 16 First Passage in the Continuum Limit.pdf]]
