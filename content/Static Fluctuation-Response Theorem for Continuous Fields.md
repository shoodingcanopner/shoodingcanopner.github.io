---
title: Static Fluctuation-Response Theorem for Continuous Fields
date: "2026-02-03"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Static Fluctuation-Response Theorem for Continuous Fields

## Overview
자극이 시스템 전체가 아니라 공간에 따라 local하게 주어진다면?
Fluctuation-Response Theorem을 **공간적으로 연속적인 변수**로 확장한 것이다. 
자극과 응답이 위치에 따라 달라지며, susceptibility가 두 위치 $\mathbf{r}$과 $\mathbf{r}'$의 함수가 된다.
susceptibility는 위치에 따른 correlation function이 된다. 

$$
\chi_n(\mathbf{r}, \mathbf{r}') = \beta C_n(\mathbf{r}, \mathbf{r}') = \beta \langle \Delta n(\mathbf{r}) \Delta n(\mathbf{r}') \rangle_0 \tag{7}
$$

## Symbol Table

| Symbol                          | Meaning                                 |
| ------------------------------- | --------------------------------------- |
| $x(\mathbf{r})$                 | 위치 $\mathbf{r}$에서의 microscopic variable |
| $f(\mathbf{r}')$                | 위치 $\mathbf{r}'$에서의 외부 자극               |
| $\chi(\mathbf{r}, \mathbf{r}')$ | 두 위치에 대한 susceptibility                 |
| $C_n(\mathbf{r}, \mathbf{r}')$  | 밀도 요동의 위치에 대한 상관함수                      |
| $n(\mathbf{r})$                 | microscopic local number density        |
| $u(\mathbf{r})$                 | 외부 포텐셜                                  |
| $\langle \cdot \rangle_0$ | 섭동이 없을 때의 앙상블 평균                       |

## Key Points

### 설정: 연속적인 perturbation

자극 $f(\mathbf{r}')$와 응답 변수 $x(\mathbf{r}')$가 공간에 걸쳐 분포할 때, perturbation term은 적분 형태(functional)가 된다:

$$
\mathcal{H}' = -\int d\mathbf{r}' \, f(\mathbf{r}') x(\mathbf{r}') \tag{1}
$$

### Fluctuation-Response Theorem의 연속 버전

위치 $\mathbf{r}$에서의 평균 변화를 구하기 위해 모든 지점($\mathbf{r}'$)에서의 자극을 감안한다. 
susceptibility를 커널삼아서 $f(\mathbf{r}')$를 적분한다는 의미

$$
\Delta x(\mathbf{r}) = \int d\mathbf{r}' \, \chi(\mathbf{r}, \mathbf{r}') f(\mathbf{r}') \tag{2}
$$

여기서 susceptibility는 correlation function과 연결된다:

$$
\chi(\mathbf{r}, \mathbf{r}') = \frac{\delta}{\delta f(\mathbf{r}')} \Delta x(\mathbf{r}) = \beta \langle \Delta x(\mathbf{r}) \Delta x(\mathbf{r}') \rangle_0 \tag{3}
$$

$\frac{\delta}{\delta f(\mathbf{r}')}$는 **functional derivative**로, 이산적인 경우의 $\frac{\partial}{\partial f_i}$를 연속으로 확장한 것이다.

### 밀도 요동에 적용

$N$개 입자 시스템에 외부 포텐셜 $u(\mathbf{r})$이 작용할 때 이렇게 된다. 
해밀토니안이 함수 $u(\mathbf{r})$에 대한 functional이 되는 셈이다. 

$$
\mathcal{H}' = \sum_{\alpha=1}^{N} u(\mathbf{r}_\alpha) = \int d\mathbf{r} \, u(\mathbf{r}) n(\mathbf{r}) \tag{4}
$$

여기서 microscopic local number density는 각 입자가 가지는 점밀도 delta function을 전부 더한 것

$$
n(\mathbf{r}) = \sum_{\alpha=1}^{N} \delta(\mathbf{r} - \mathbf{r}_\alpha) \tag{5}
$$

### 밀도에 대한 Fluctuation-Response

위치 $\mathbf{r}$에서의 밀도 변화:

$$
\Delta n(\mathbf{r}) = \int d\mathbf{r}' \, \chi_n(\mathbf{r}, \mathbf{r}') u(\mathbf{r}') \tag{6}
$$

susceptibility와 density correlation function의 관계:

$$
\chi_n(\mathbf{r}, \mathbf{r}') = \beta C_n(\mathbf{r}, \mathbf{r}') = \beta \langle \Delta n(\mathbf{r}) \Delta n(\mathbf{r}') \rangle_0 \tag{7}
$$

여기서 $\Delta n(\mathbf{r}) = n(\mathbf{r}) - \bar{n}$이고, $\bar{n} = \langle n(\mathbf{r}) \rangle_0$는 평형 밀도이다.

### 점 자극의 경우

자극이 한 점 $\mathbf{r}_0$에 집중된 경우, $u(\mathbf{r}) = U \delta(\mathbf{r} - \mathbf{r}_0)$:

$$
\Delta n(\mathbf{r}) = \beta U \langle \Delta n(\mathbf{r}) \Delta n(\mathbf{r}_0) \rangle_0 \tag{8}
$$

**물리적 의미**: $\mathbf{r}_0$에서의 섭동이 $\mathbf{r}$까지 전파되는 정도가 두 위치 사이의 밀도 상관함수로 결정된다.

## Questions & Insights

- 이산 버전에서 $\frac{\partial}{\partial f_i}$가 연속 버전에서 **functional derivative** $\frac{\delta}{\delta f(\mathbf{r}')}$로 확장된다
- Susceptibility $\chi(\mathbf{r}, \mathbf{r}')$가 두 위치의 함수가 되어, **공간적 상관관계**를 담는다
- 균일한 시스템에서는 $\chi(\mathbf{r}, \mathbf{r}') = \chi(\mathbf{r} - \mathbf{r}')$로 단순화된다 (translational invariance)

## Related Concepts

non-local한 경우의 FRT
[[Static Fluctuation-Response Theorem]]

- [[Statistical Physics for Biological Matter (Woo)]]

## References

- Statistical Physics for Biological Matter (Woo), Chapter 9, 식 (9.17)-(9.29)

## Notes from Claude

- 이산 버전과 연속 버전의 대응 관계를 기억하면 유도가 자연스럽다:
  - $f_i \to f(\mathbf{r}')$
  - $\sum_i \to \int d\mathbf{r}'$
  - $\frac{\partial}{\partial f_i} \to \frac{\delta}{\delta f(\mathbf{r}')}$
- 식 (8)은 **한 점의 섭동이 공간을 통해 어떻게 전파되는지**를 보여준다