---
title: ED mini note - Stokes Parameters as Basis Decomposition
date: "2026-04-19"
subject: physics
tags:
  - study
  - electrodynamics
  - polarization
class: study_mini
---

> [!idea] 자체 정리 노트
> 이 노트는 강의 필기가 아니라, Stokes parameters에 대한 개인적인 통찰을 정리한 것이다.
> 관련 강의 노트: [[ED lecture note - Stokes Parameters and Reflection]]

# 핵심 아이디어

**각 Stokes parameter는 "특정 편광 basis로 분해했을 때 두 성분의 세기 차이"로 통일적으로 이해할 수 있다.**

임의의 편광 상태 $\mathbb{E}_0$를 어떤 orthonormal basis $\{\hat{e}_A, \hat{e}_B\}$로 분해하면:

$$
\mathbb{E}_0 = c_A \hat{e}_A + c_B \hat{e}_B
$$

이때 Stokes parameter는:

$$
S = |c_A|^2 - |c_B|^2
$$

즉, **각 basis에서의 "우세한 정도"를 측정하는 양**이다.

# 각 Stokes parameter와 대응하는 basis

![[Pasted image 20260419145804.png]]

| Stokes parameter | Basis | $\hat{e}_A$ | $\hat{e}_B$ | 의미 |
|---|---|---|---|---|
| $S_1$ | x/y 선형편광 | $\hat{\varepsilon}_1$ | $\hat{\varepsilon}_2$ | x편광이 y편광보다 우세한 정도 |
| $S_2$ | 대각 선형편광 | $\hat{\varepsilon}_{\pi/4}$ | $\hat{\varepsilon}_{3\pi/4}$ | ↗ 편광이 ↖ 편광보다 우세한 정도 |
| $S_3$ | 원형편광 | $\hat{\varepsilon}_+$ | $\hat{\varepsilon}_-$ | LCP가 RCP보다 우세한 정도 |

$S_0 = |c_A|^2 + |c_B|^2$는 어떤 basis에서나 동일하며, 총 세기를 나타낸다.

# Poincaré sphere에서의 시각화


$S_1, S_2, S_3$를 세 축으로 하는 공간에서, monochromatic beam의 편광 상태는 반지름 $S_0$인 구(Poincaré sphere) 위의 한 점에 대응한다:

$$
S_0^2 = S_1^2 + S_2^2 + S_3^2
$$

각 축의 양/음 끝점이 해당 basis의 순수 편광 상태에 대응한다:

- $+S_1$: x-선형편광, $-S_1$: y-선형편광
- $+S_2$: ↗ 대각편광, $-S_2$: ↖ 대각편광
- $+S_3$: LCP, $-S_3$: RCP

# $S_2$의 유도: 대각 basis를 이용한 방법

$S_1$과 $S_3$는 정의에서 바로 $a_1^2 - a_2^2$, $a_+^2 - a_-^2$ 꼴이 나오지만, $S_2$는 강의 노트에서 $2\,\text{Re}\{(\hat{\varepsilon}_1 \cdot \mathbb{E}_0)^*(\hat{\varepsilon}_2 \cdot \mathbb{E}_0)\}$로 정의되어 있어서 같은 패턴이 아닌 것처럼 보인다.

하지만 **대각 편광 basis**를 도입하면 $S_2$도 같은 구조임을 보일 수 있다.

## 대각 편광 basis 정의

$$
\hat{\varepsilon}_{\pi/4} = \frac{1}{\sqrt{2}}(\hat{\varepsilon}_1 + \hat{\varepsilon}_2), \qquad \hat{\varepsilon}_{3\pi/4} = \frac{1}{\sqrt{2}}(-\hat{\varepsilon}_1 + \hat{\varepsilon}_2)
$$

## 유도

$$
S_2 = |\hat{\varepsilon}_{\pi/4} \cdot \mathbb{E}_0|^2 - |\hat{\varepsilon}_{3\pi/4} \cdot \mathbb{E}_0|^2
$$

각 내적을 계산하면:

$$
\hat{\varepsilon}_{\pi/4} \cdot \mathbb{E}_0 = \frac{1}{\sqrt{2}}(a_1 e^{i\delta_1} + a_2 e^{i\delta_2})
$$

$$
\hat{\varepsilon}_{3\pi/4} \cdot \mathbb{E}_0 = \frac{1}{\sqrt{2}}(-a_1 e^{i\delta_1} + a_2 e^{i\delta_2})
$$

절대값 제곱의 차를 구하면:

$$
|\hat{\varepsilon}_{\pi/4} \cdot \mathbb{E}_0|^2 = \frac{1}{2}\left(a_1^2 + a_2^2 + a_1 a_2 \left\{e^{i(\delta_1 - \delta_2)} + e^{i(\delta_2 - \delta_1)}\right\}\right)
$$

$$
|\hat{\varepsilon}_{3\pi/4} \cdot \mathbb{E}_0|^2 = \frac{1}{2}\left(a_1^2 + a_2^2 - a_1 a_2 \left\{e^{i(\delta_1 - \delta_2)} + e^{i(\delta_2 - \delta_1)}\right\}\right)
$$

빼면 $a_1^2 + a_2^2$ 항은 상쇄되고:

$$
S_2 = a_1 a_2 \left\{e^{i(\delta_1 - \delta_2)} + e^{i(\delta_2 - \delta_1)}\right\} = 2a_1 a_2 \cos(\delta_1 - \delta_2)
$$

이는 강의 노트의 $S_2 = 2a_1 a_2 \cos(\delta_2 - \delta_1)$과 일치한다. ($\cos$은 짝함수이므로.)

## $S_3$도 같은 구조

$$
S_3 = |\hat{\varepsilon}_+ \cdot \mathbb{E}_0|^2 - |\hat{\varepsilon}_- \cdot \mathbb{E}_0|^2 = a_+^2 - a_-^2
$$

# 정리

> [!summary] 통일적 해석
> 모든 Stokes parameter는 **"적절한 편광 basis로 분해한 뒤 두 성분의 세기 차이"**라는 하나의 원리로 이해된다. 이 관점에서 $S_1, S_2, S_3$는 서로 $45°$ 또는 직교하는 세 가지 편광 방향에서의 "우세도"를 측정하는 것이며, Poincaré sphere의 세 축과 자연스럽게 대응한다.

# 연관 노트

- [[ED lecture note - Stokes Parameters and Reflection]]
- [[ED lecture note - EM Waves and Polarization]]
- [[Polarization of Light]]
