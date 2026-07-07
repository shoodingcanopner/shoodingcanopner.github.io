---
title: "Fluctuation-Dissipation Theorem"
date: "2026-07-01"
subject: statistical mechanics
tags:
  - study
  - concept
  - question
class: study
---

# Fluctuation-Dissipation Theorem

## Overview

**Fluctuation-Dissipation Theorem (FDT)** 는 평형 상태에서의 자발적 요동(fluctuation)과 외부 교란에 대한 시스템의 dissipative response 사이의 관계를 기술하는 정리이다.

핵심 내용: dynamic response function $\chi_i(t)$는 equilibrium time correlation function $C_i(t)$의 시간 미분으로 표현된다.

$$
\chi_i(t) = -\beta \frac{d}{dt} C_i(t)
\tag{17.22}
$$

자극 지점 $i$와 응답 지점 $j$를 구분하면 일반식이 된다.

$$
\chi_{ji}(t) = -\beta \frac{d}{dt} C_{ji}(t)
\tag{17.23}
$$

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\chi_i(t)$ | Dynamic response function |
| $\chi'(\omega)$ | In-phase (real) part of $\chi(\omega)$ |
| $\chi''(\omega)$ | Out-of-phase (imaginary) part; measure of dissipation |
| $C_i(t) = \langle \Delta X_i(t)\, \Delta X_i(0) \rangle_0$ | Equilibrium time correlation function |
| $S_i(\omega)$ | Power spectrum of $\Delta X_i(t)$ |
| $\beta = 1/k_BT$ | Inverse thermal energy |
| $f$ | External force (before removal at $t=0$) |

## Key Points

### FDT의 유도 흐름

**Step 1 — Onsager Regression Theorem** ([[Onsager Regression Theorem]])

외부 힘 $f$를 $t=0$에서 제거하면, 이후 시스템의 거시적 이완은 평형 상관함수에 비례한다:

$$
\Delta X_i(t) = \beta f \langle \Delta X_i(t)\, \Delta X_i(0) \rangle_0 = \beta f C_i(t)
\tag{17.21}
$$

**Step 2 — Response function의 정의** ([[Dynamic linear response theory]])

Stepwise unloading 실험에서 response function은 다음과 같이 정의된다:

$$
\chi(t) = -\frac{1}{f} \frac{d}{dt} \Delta X(t)
\tag{17.12}
$$

**Step 3 — 대입**

17.21을 17.12에 대입하면 17.22 (FDT)가 직접 유도된다.

---

### Fourier 공간에서의 FDT

식 (17.22)를 Fourier 변환하고 허수부만 추출 후 부분적분하면:

$$
\chi''_i(\omega) = -\beta \int_0^{\infty} dt\, \sin(\omega t)\, \frac{d}{dt} C_i(t)
= \beta\omega \int_0^{\infty} dt\, \cos(\omega t)\, C_i(t)
\tag{17.28}
$$

$C_i(t) = C_i(-t)$ 대칭성을 이용하면:

$$
\chi''_i(\omega) = \frac{\beta\omega}{2} \int_{-\infty}^{\infty} dt\, e^{i\omega t} C_i(t)
= \frac{\beta\omega}{2} S_i(\omega)
\tag{17.29}
$$

**물리적 의미**: dissipation($\chi''$)은 power spectrum($S_i$)에 직접 비례한다. 즉, 시스템이 얼마나 에너지를 흡수·발산하는지가 equilibrium 요동의 세기로 결정된다.

---

### Dissipation과 응답

$\chi(\omega) = \chi'(\omega) + i\chi''(\omega)$에서:
- $\chi'(\omega)$: 구동력과 같은 위상의 응답 (elastic)
- $\chi''(\omega)$: 구동력보다 $\pi/2$ 늦은 응답 (dissipative)

진동수 $\omega$의 힘에 의한 단위 시간당 평균 일(에너지 흡수율):

$$
\langle \dot{W} \rangle = \frac{1}{2} a^2 \omega\, \chi''(\omega) \geq 0
$$

따라서 $\chi''(\omega) \geq 0$ 는 열역학 제2법칙과 일치한다.

## Questions & Insights

- FDT가 성립하려면 시스템이 equilibrium 상태여야 한다. 생물학적 활성 시스템(active system)에서는 FDT가 위반된다. 이 경우 effective temperature $T_\text{eff}$를 도입하여 얼마나 비평형 상태인지 정량화할 수 있다 (식 17.31).

## Related Concepts

- [[Onsager Regression Theorem]]
- [[Dynamic linear response theory]]
- [[Statistical Physics for Biological Matter (Woo)]]

## References

- [[Statistical Physics for Biological Matter (Woo)]]

## Notes from Claude

FDT는 인과율(causality)에 의해 $\chi(t) = 0$ for $t < 0$이라는 조건 아래 성립한다. 이 조건 때문에 Fourier 변환 시 $\int_{-\infty}^{\infty}$가 아닌 $\int_0^{\infty}$로 적분 하한이 결정된다 (식 17.28).

또한 static linear response는 FDT의 $t=0$ 극한이다: $\chi_s = \beta \langle (\Delta X_i)^2 \rangle_0$ (Chapter 9의 결과와 일치).
