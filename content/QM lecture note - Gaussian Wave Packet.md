---
title: "QM lecture note - Gaussian Wave Packet"
date: "2026-03-20"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[QM lecture note - Position, Momentum, and Generators]]

# 오늘의 핵심

Gaussian wave packet은 x-space에서 보면 Gaussian envelope 안에 phase가 진동하는 형태이고, 푸리에 변환(momentum space)에서 보아도 역시 Gaussian이다. 두 공간에서의 너비가 불확정성 원리를 포화(saturate)시킨다.

$$
\boxed{\Delta x \cdot \Delta p = \frac{\hbar}{2}}
$$

# 필기 내용

## Gaussian Wave Packet in x-space

x-space에서 wave function은 다음과 같다.

$$
\psi_\alpha(x') = \langle x' | \alpha \rangle = \frac{1}{\pi^{1/4}\sqrt{d}} \exp\!\left( ikx' - \frac{x'^2}{2d^2} \right)
$$

- $\exp(ikx')$: 진동하는 phase 항
- $\exp\!\left(-\dfrac{x'^2}{2d^2}\right)$: phase들의 envelope을 Gaussian으로 결정하는 항

### $\langle x^2 \rangle$ 계산

정규화된 확률밀도:

$$
\psi_\alpha^* \psi_\alpha = \frac{1}{d\sqrt{\pi}} \exp\!\left(-\frac{x'^2}{d^2}\right)
$$

modulus는 예상했듯이 그냥 Gaussian이다. $\displaystyle\int_{-\infty}^{\infty} \exp\!\left(-\frac{x^2}{d^2}\right)dx = d\sqrt{\pi}$ 를 이용.

$$
\langle x^2 \rangle = \frac{1}{d\sqrt{\pi}} \int_{-\infty}^{\infty} dx'\, \exp\!\left(-\frac{x'^2}{d^2}\right) x'^2
$$

$\kappa = \dfrac{1}{d^2}$으로 놓으면,

$$
\exp\!\left(-\frac{x'^2}{d^2}\right)x'^2 = -\frac{d}{d\kappa}\exp(-\kappa x'^2)
$$

$$
\int_{-\infty}^{\infty} dx'\, \exp\!\left(-\frac{x'^2}{d^2}\right)x'^2 = -\frac{d}{d\kappa}\sqrt{\frac{\pi}{\kappa}} = \frac{1}{2}\sqrt{\pi}\,\kappa^{-3/2}
$$

$$
\therefore \langle x^2 \rangle = \frac{1}{2}d^2
$$

자연스럽게 (Gaussian distribution의 특성상) $\langle x \rangle = 0$, $\langle (\Delta x)^2 \rangle = \dfrac{1}{2}d^2$.

---

## Gaussian Wave Packet in p-space

$\langle p \rangle$과 $\langle p^2 \rangle$은 푸리에 변환하면 더 아름답게 구할 수 있다. Gaussian을 푸리에 변환하면 다시 Gaussian이 나온다. 그럼 Gaussian wave packet을 푸리에 변환하면 뭐가 나올까?

푸리에 변환할 때 $\exp\!\left(-\dfrac{i}{\hbar}p'x'\right)$을 이용하고, $1/\sqrt{2\pi\hbar}$로 normalize → 이거 항상 까먹는다. 

$$
\phi_\alpha(p') = \left[\frac{1}{\pi^{1/4}\sqrt{d}} \int_{-\infty}^{\infty} dx'\, \exp\!\left[-i\left(\frac{p'}{\hbar}-k\right)x'\right] \exp\!\left(-\frac{x'^2}{2d^2}\right)\right] \frac{1}{\sqrt{2\pi\hbar}}
$$

$\rho = p' - \hbar k$로 놓고, $\exp$ 내부를 완전제곱식으로 만든다:

$$
-i\frac{\rho}{\hbar}x' - \frac{x'^2}{2d^2} = -\frac{1}{2d^2}\left(x' + i\frac{\rho d^2}{\hbar}\right)^2 - \frac{\rho^2 d^2}{2\hbar^2}
$$

$i\dfrac{\rho d^2}{\hbar}$은 $x'$를 허수축으로 평행이동한 것이므로 적분에 영향을 주지 않는다:

$$
\int dx'\, \exp\!\left(\frac{x'^2}{2d^2}\right) = d\sqrt{2\pi}
$$

최종 결과:

$$
\boxed{\phi_\alpha(p') = \sqrt{\frac{d}{\hbar\sqrt{\pi}}} \exp\!\left[-\frac{d^2}{2\hbar^2}(p' - \hbar k)^2\right]}
$$
Probability density를 구하면, 
$$
|\phi_\alpha(p')|^2 = \frac{d}{\hbar\sqrt{\pi}} \exp\!\left[-\frac{d^2}{\hbar^2}(p' - \hbar k)^2\right]
$$

놀랍게도 $\hbar k$만큼 평행이동한 Gaussian distribution이 나온다. 진동하는 phase가 전혀 없다.

### Expectation Values in p-space

$$
\langle p \rangle = \hbar k, \qquad \langle p^2 \rangle = \frac{\hbar^2}{2d^2} + \hbar^2 k^2
$$

$$
\therefore \langle (\Delta p)^2 \rangle = \frac{\hbar^2}{2d^2}
$$
어차피 가우시안이므로 standard deviation은 식을 보며 바로 알 수 있다. 
다만 주의할 점은, 꼭 wave function을 제곱하여 probability density를 구해야 한다는 것이다. Wave function 자체가 가우시안이라서 좀 헷갈린다. 

---

## Minimum Uncertainty State

$$
\langle (\Delta x)^2 \rangle \cdot \langle (\Delta p)^2 \rangle = \frac{d^2}{2} \cdot \frac{\hbar^2}{2d^2} = \frac{\hbar^2}{4}
$$

$$
\therefore \Delta x \cdot \Delta p = \frac{\hbar}{2}
$$

Gaussian wave packet은 불확정성 원리를 정확히 포화(saturate)시키는 **minimum uncertainty state**이다.

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

# References

# 다음 강의

[[QM lecture note - Time Evolution Operator]]

# 원본 필기 이미지

![[QM_4thweek_2.pdf]]
