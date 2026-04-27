---
title: Group Velocity
date: "2026-04-19"
subject: physics
tags:
  - study
  - concept
  - electrodynamics
class: study
---

# Group Velocity

## Overview

분산 매질에서 파동 패킷의 엔벨로프가 이동하는 속도인 **군속도(group velocity)**의 개념과 유도를 정리한다. 위상속도와의 차이, 에너지 수송과의 관계, 정상/비정상 분산에서의 행동을 다룬다.

| Symbol | Meaning |
|--------|---------|
| $\omega$ | 각진동수 |
| $k$ | 파수 (wave number) |
| $v_p$ | 위상속도 (phase velocity) |
| $v_g$ | 군속도 (group velocity) |
| $n(\omega)$ | 굴절률 (주파수 의존) |
| $A(k)$ | 파수 스펙트럼 (spectral amplitude) |

## Key Points

### 1. 동기: 왜 군속도가 필요한가

- 실제 EM파는 단색파가 아니라 여러 주파수의 중첩이다.
- 맥스웰 방정식이 선형이므로, 서로 다른 주파수의 해를 선형 중첩할 수 있다.
- 분산 매질에서는 유전상수 $\epsilon(\omega)$가 주파수의 함수이므로, 각 주파수 성분의 위상속도가 다르다.
- 따라서 펄스가 전파되면서 왜곡되고, 에너지의 실제 이동 속도는 위상속도와 다를 수 있다.

### 2. 분산 관계

주파수와 파수의 관계:

$$
k = \frac{n(\omega)\,\omega}{c}
\tag{1}
$$

$$
\omega = \omega(k)
\tag{2}
$$

이 관계는 파동의 전파 방향에 무관하다.

### 3. 일반적인 파동 패킷의 표현

$$
u(x,t) = \int_{-\infty}^{\infty} A(k)\, e^{i[kx - \omega(k)t]}\, dk
\tag{3}
$$

$A(k)$는 초기 조건으로부터 결정되는 푸리에 스펙트럼:

$$
A(k) = \frac{1}{2\pi}\int u(x,0)\, e^{-ikx}\, dx
\tag{4}
$$

### 4. 군속도의 유도

$A(k)$가 $k_0$ 근처에 sharply peaked 되어 있다고 가정한다.

**Step 1.** $\omega(k)$를 $k_0$ 근처에서 1차 테일러 전개:

$$
\omega(k) \approx \omega_0 + \omega'_0(k - k_0)
\tag{5}
$$

여기서 $\omega_0 = \omega(k_0)$, $\omega'_0 = \left.\frac{d\omega}{dk}\right|_{k_0}$

**Step 2.** 지수부를 정리:

$$
kx - \omega(k)t \approx (k_0 x - \omega_0 t) + (k - k_0)(x - \omega'_0 t)
\tag{6}
$$

**Step 3.** 적분에 대입하여 $k$-독립 부분을 밖으로 꺼냄:

$$
u(x,t) \approx e^{i(k_0 x - \omega_0 t)} \int A(k)\, e^{i(k-k_0)(x - \omega'_0 t)}\, dk
\tag{7}
$$

**Step 4.** 엔벨로프 함수를 정의:

$$
\mathcal{E}(x) \equiv \int A(k)\, e^{i(k-k_0)x}\, dk
\tag{8}
$$

그러면 $t=0$에서 $u(x,0) = e^{ik_0 x}\,\mathcal{E}(x)$이고, 일반적인 $t$에서:

$$
u(x,t) \approx e^{i(k_0 x - \omega_0 t)}\,\mathcal{E}(x - \omega'_0 t)
\tag{9}
$$

**결론:** 엔벨로프 $\mathcal{E}$가 형태를 유지한 채 속도 $v_g$로 이동한다:

$$
v_g = \frac{d\omega}{dk}\bigg|_{k_0}
\tag{10}
$$

- $e^{i(k_0 x - \omega_0 t)}$: 캐리어 파동 → 위상속도 $v_p = \omega_0/k_0$로 진행
- $\mathcal{E}(x - v_g t)$: 엔벨로프 → 군속도 $v_g$로 진행

### 5. 에너지 수송

에너지 밀도는 $|u|^2$에 비례하고, $|u|^2 = |\mathcal{E}(x - v_g t)|^2$이므로 에너지는 군속도로 수송된다.

### 6. 빛에 대한 군속도 표현

$k = n(\omega)\omega/c$로부터 $dk/d\omega$를 곱의 미분법으로 계산:

$$
\frac{dk}{d\omega} = \frac{1}{c}\left(n + \omega\frac{dn}{d\omega}\right)
\tag{11}
$$

역수를 취하면:

$$
v_g = \frac{c}{n + \omega\,\dfrac{dn}{d\omega}}
\tag{12}
$$

위상속도 $v_p = c/n$과 비교하면, 분모에 $\omega\frac{dn}{d\omega}$ 항이 추가된 것이 군속도의 특징이다.

### 7. 정상 분산 vs 비정상 분산

**정상 분산 (normal dispersion):** $\frac{dn}{d\omega} > 0$
- $v_g < v_p < c$
- 에너지 흐름의 속도가 위상속도보다 작고, 광속보다도 작다.

**비정상 분산 (anomalous dispersion):** $\frac{dn}{d\omega} < 0$, 급격히 변함
- 군속도가 위상속도와 크게 달라질 수 있다.
- $dn/d\omega$가 급격히 변하므로 테일러 1차 전개가 유효하지 않다.
- 이 영역에서는 군속도 개념 자체가 의미를 잃는다.

## Questions & Insights

- 비정상 분산 영역에서 군속도가 $c$를 초과하거나 음수가 될 수 있는데, 이는 정보나 에너지의 초광속 전달을 의미하지 않는다. 테일러 전개가 무효한 영역이기 때문이다.

## Related Concepts

- [[ED lecture note - Dispersion]]
- [[ED lecture note - EM Waves and Polarization]]
- [[Wave Equation from Maxwell Equations]]

## References

- 전기역학1 교수님 handout (PHYS503 Group velocity)

## Notes from Claude

이 노트는 handout의 내용을 바탕으로, 대화에서 다룬 두 가지 유도를 포함하여 작성되었다:
1. 파동 패킷의 테일러 전개로부터 군속도 $v_g = d\omega/dk$ 유도 (Step 1~4)
2. 분산 관계 $k = n\omega/c$로부터 $v_g = c/(n + \omega\,dn/d\omega)$ 유도

