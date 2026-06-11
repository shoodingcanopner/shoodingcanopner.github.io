---
title: ED mini note - Center-fed Linear Antenna
date: "2026-06-09"
subject: physics
tags:
  - study
  - concept
class: study
---

# Center-fed Linear Antenna — 복사 세기 유도

> [!tip] Glia의 노트
> 시험 준비를 위해 Glia가 작성한 학습 보충 노트입니다.

## 기호 정리

| Symbol | Meaning |
|--------|---------|
| $d$ | 안테나 전체 길이 ($-d/2 \leq z \leq d/2$) |
| $I_0$ | 중심에서의 최대 전류 |
| $I(z)$ | z 위치에서의 전류 분포 |
| $\vec{p}$ | electric dipole moment |
| $k = \omega/c$ | wave number |
| $\theta$ | z축과 관찰 방향이 이루는 각도 |
| $Z_0$ | 자유 공간 임피던스 |

---

## 핵심 아이디어: current → dipole moment

charge density $\rho$로 dipole moment를 정의하지만, 전류 분포가 주어진 경우에는 **연속 방정식**을 이용해 변환한다.

연속 방정식 $\partial\rho/\partial t + \nabla\cdot\vec{J} = 0$에서, $e^{-i\omega t}$ 의존성을 가정하면:

$$
\rho = \frac{i}{\omega}\nabla\cdot\vec{J}
$$

이를 $\vec{p} = \int \vec{x}'\rho\,d^3x'$에 대입하고 integration by parts를 적용하면:

$$
\vec{p} = \frac{i}{\omega}\int \vec{x}'\,(\nabla'\cdot\vec{J})\,d^3x' = -\frac{i}{\omega}\int \vec{J}\,d^3x'
$$

따라서:

$$
\boxed{\dot{\vec{p}} = -i\omega\vec{p} = \int \vec{J}\,d^3x'}
$$

**dipole moment의 시간 미분 = 전류의 공간 적분.**

---

## 풀이

### Step 1: 전류 분포 설정

안테나는 z축 위에 있고, 전류는 z방향:

$$
\vec{J}(\vec{x}') = I(z)\,\delta(x')\delta(y')\,\hat{z}
$$

주어진 전류 분포:

$$
I(z) = I_0\left(1 - \frac{2|z|}{d}\right)
$$

중심($z=0$)에서 최대이고, 끝($z=\pm d/2$)에서 0이 되는 삼각형 분포.

### Step 2: Dipole moment 계산

$$
\dot{p} = \int_{-d/2}^{d/2} I(z)\,dz = 2\int_0^{d/2} I_0\left(1 - \frac{2z}{d}\right)dz
$$

적분 계산:

$$
\int_0^{d/2}\left(1 - \frac{2z}{d}\right)dz = \left[z - \frac{z^2}{d}\right]_0^{d/2} = \frac{d}{2} - \frac{d}{4} = \frac{d}{4}
$$

따라서:

$$
\dot{p} = 2I_0 \cdot \frac{d}{4} = \frac{I_0 d}{2}
$$

$\dot{p} = -i\omega p$이므로:

$$
p = \frac{\dot{p}}{-i\omega} = \frac{I_0 d}{2(-i\omega)} = \frac{iI_0 d}{2\omega}
$$

### Step 3: $k^4|p|^2$ 계산

$$
|p|^2 = \frac{I_0^2 d^2}{4\omega^2}
$$

$$
k^4|p|^2 = k^4 \cdot \frac{I_0^2 d^2}{4\omega^2} = \frac{k^4 I_0^2 d^2}{4\omega^2}
$$

$k = \omega/c$이므로 $k^2 = \omega^2/c^2$, 따라서:

$$
k^4|p|^2 = \frac{k^4 I_0^2 d^2}{4k^2 c^2} = \frac{k^2 I_0^2 d^2}{4c^2}
$$

### Step 4: 최종 답

Hint의 공식에 대입:

$$
\frac{dP}{d\Omega} = \frac{c^2 Z_0}{32\pi^2} k^4|p|^2\sin^2\theta
$$

$$
= \frac{c^2 Z_0}{32\pi^2} \cdot \frac{k^2 I_0^2 d^2}{4c^2}\sin^2\theta
$$

$$
\boxed{\frac{dP}{d\Omega} = \frac{Z_0 k^2 I_0^2 d^2}{128\pi^2}\sin^2\theta}
$$

---

## 물리적 해석

- $\sin^2\theta$ 패턴: z축 방향($\theta=0$)으로는 복사가 없고, 수직 방향($\theta=\pi/2$)으로 복사가 최대. 이것은 단순 dipole과 동일한 패턴.
- $\propto k^2 d^2$: 안테나가 길수록, 파장이 짧을수록 복사 세기가 증가.
- 삼각형 전류 분포는 균일 분포에 비해 effective dipole moment가 절반($d/2$ vs $d$)으로 줄어든 것과 같다.

> [!question] 왜 삼각형 분포인가?
> Center-fed 안테나에서 전류는 끝에서 0이 되어야 한다 (끝이 open이므로 전하가 빠져나갈 곳이 없음). 가장 단순한 이 조건을 만족하는 분포가 삼각형이다.

---

## 연관 학습 노트

- [[ED mini note - Lienard-Wiechert Potential]]
- [[ED lecture note - Scattering and Diffraction]]
