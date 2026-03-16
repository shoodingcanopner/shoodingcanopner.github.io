---
title: "Polarization of Light"
date: "2025-12-01"
subject: physics
tags:
  - study
  - concept
  - optics
  - electromagnetism
class: study
---

# Polarization of Light

## Overview

빛의 편광(polarization)은 전자기파의 전기장 벡터가 진동하는 방향과 패턴을 나타낸다. 전기장의 x 성분과 y 성분의 진폭과 위상차에 따라 선형 편광, 원형 편광, 타원 편광으로 분류된다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $E_x(z,t)$ | 전기장의 x 방향 성분 |
| $E_y(z,t)$ | 전기장의 y 방향 성분 |
| $E_{0x}$ | x 성분의 진폭 |
| $E_{0y}$ | y 성분의 진폭 |
| $k$ | 파수 (wave number) |
| $\omega$ | 각진동수 |
| $\varepsilon$ | x 성분과 y 성분 사이의 위상차 |
| $\hat{x}$, $\hat{y}$ | x, y 방향 단위벡터 |

## Key Points

### 전기장의 성분 표현

빛이 z 방향으로 진행할 때, 전기장은 z에 수직인 평면에서 진동한다:

$$
\vec{E}_x(z,t) = E_{0x}\cos(kz - \omega t)\hat{x} \tag{1}
$$

$$
\vec{E}_y(z,t) = E_{0y}\cos(kz - \omega t + \varepsilon)\hat{y} \tag{2}
$$

여기서 $\varepsilon$는 x 성분과 y 성분 사이의 위상차이다.

### 복소수 표현 (Complex Representation)

전기장을 복소수 지수함수로 나타내면 계산이 훨씬 간편해진다. 물리적으로 의미 있는 실제 전기장은 복소수 표현의 실수부이다:

$$
\tilde{E}_x(z,t) = E_{0x}e^{i(kz - \omega t)} \tag{1a}
$$

$$
\tilde{E}_y(z,t) = E_{0y}e^{i(kz - \omega t + \varepsilon)} \tag{2a}
$$

실제 전기장은:
$$
E_x = \text{Re}[\tilde{E}_x] = E_{0x}\cos(kz - \omega t)
$$
$$
E_y = \text{Re}[\tilde{E}_y] = E_{0y}\cos(kz - \omega t + \varepsilon)
$$

특정 위치 $z=0$에서 시간 의존성만 보면:

$$
\vec{\tilde{E}}(t) = (E_{0x}\hat{x} + E_{0y}e^{i\varepsilon}\hat{y})e^{-i\omega t} \tag{4}
$$

이 표현의 장점:
- Jones vector $(E_{0x}, E_{0y}e^{i\varepsilon})^T$로 편광 상태를 간단히 표현
- 편광판, 위상지연판 등 광학 소자의 작용을 행렬로 표현 가능
- 위상 관계가 명확히 드러남

**원형 편광의 복소수 표현**

우원 편광 ($\varepsilon = -\pi/2$, $E_{0x} = E_{0y} = E_0$):
$$
\vec{\tilde{E}}(t) = E_0(\hat{x} - i\hat{y})e^{-i\omega t} \tag{5}
$$

좌원 편광 ($\varepsilon = +\pi/2$, $E_{0x} = E_{0y} = E_0$):
$$
\vec{\tilde{E}}(t) = E_0(\hat{x} + i\hat{y})e^{-i\omega t} \tag{6}
$$

$i$의 존재가 90도 위상차를 나타내며, 부호가 회전 방향을 결정한다.

### 타원 방정식

x 성분과 y 성분의 관계는 타원 방정식으로 나타낼 수 있다:

$$
\left(\frac{E_x}{E_{0x}}\right)^2 + \left(\frac{E_y}{E_{0y}}\right)^2 - 2\frac{E_x}{E_{0x}}\frac{E_y}{E_{0y}}\cos\varepsilon = \sin^2\varepsilon \tag{3}
$$

이 식은 삼각함수의 배각 공식과 제곱 후 더하기를 통해 유도할 수 있다.

### 편광의 분류

**1. 선형 편광 (Linear Polarization)**
- 조건: $\varepsilon = 0$ 또는 $\varepsilon = \pi$
- 전기장이 하나의 평면에서만 진동
- 타원 방정식이 직선으로 퇴화:
  - $\varepsilon = 0$: $\frac{E_y}{E_{0y}} = \frac{E_x}{E_{0x}}$
  - $\varepsilon = \pi$: $\frac{E_y}{E_{0y}} = -\frac{E_x}{E_{0x}}$

**2. 원형 편광 (Circular Polarization)**
- 조건: $E_{0x} = E_{0y}$ 그리고 $\varepsilon = \pm\frac{\pi}{2}$
- 전기장 벡터의 끝이 원을 그리며 회전
- 타원 방정식이 원으로 퇴화:
  $$E_x^2 + E_y^2 = E_0^2$$
- $\varepsilon = +\frac{\pi}{2}$: 좌원 편광 (left circular)
- $\varepsilon = -\frac{\pi}{2}$: 우원 편광 (right circular)

**3. 타원 편광 (Elliptical Polarization)**
- 조건: 일반적인 경우
- 전기장 벡터의 끝이 타원을 그리며 회전
- 타원의 장축과 단축의 비율은 $E_{0x}$, $E_{0y}$, $\varepsilon$에 의해 결정

### 위상차의 물리적 의미

*x 성분과 y 성분의 진동을 따로 생각해야 한다. 두 진동의 위상차가 없으면 평면 위 편광이다. 위상차가 있으면 원형 아님 타원 편광이다. x 성분과 y 성분의 진폭이 같으면 원형 편광이다. 위상차에 따라 원형 편광과 타원 편광의 위상 회전 속도가 달라진다.*

- 위상차 $\varepsilon$는 y 성분이 x 성분보다 얼마나 앞서거나 뒤지는지를 나타낸다
- 회전 방향(편광의 chirality)을 결정한다
- 위상차가 달라지면 타원의 방향과 회전 속도가 변한다

### 편광의 응용

- 편광판(polarizer)을 통한 빛의 세기 제어
- 3D 영화 (원형 편광 이용)
- LCD 디스플레이
- 광학 활성 물질의 분석
- 레이더와 안테나 시스템

## Questions & Insights

- 편광 상태는 Stokes parameter나 Poincaré sphere로도 표현할 수 있다. 이 표현들은 어떤 장점이 있을까?
- 양자광학에서 편광은 광자의 어떤 상태에 대응할까? (스핀?)
- 매질을 통과할 때 편광 상태가 변하는 현상(복굴절, 선광성 등)의 원리는?

## Related Concepts

- [[Wave Equation from Maxwell Equations]]
- [[맥스웰 방정식 외우기]]
- [[Snell's Law]]

## References

사용자가 제공한 편광 타원 방정식 이미지

## Notes from Claude

편광은 전자기파의 벡터적 성질을 보여주는 중요한 현상이다. 단순히 파동의 진폭과 주파수만으로는 완전히 기술할 수 없고, 전기장 벡터의 방향과 시간에 따른 변화를 모두 고려해야 한다.

타원 방정식 (3)은 두 수직 성분의 시간에 따른 변화를 하나의 기하학적 관계식으로 압축한 것이다. 이 식에서 $\cos\varepsilon$ 항은 두 성분 사이의 상관관계를, $\sin^2\varepsilon$ 항은 독립적인 진동의 정도를 나타낸다고 볼 수 있다.

물리적으로 중요한 것은 선형, 원형, 타원 편광이 별개의 현상이 아니라 연속적인 스펙트럼을 이룬다는 점이다. 위상차 $\varepsilon$와 진폭비 $E_{0x}/E_{0y}$를 연속적으로 변화시키면 한 편광 상태에서 다른 상태로 부드럽게 전환할 수 있다.
