---
title: SM HW4-3 Clausius-Clapeyron Coexistence Curve
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 4th HW, Problem 3

# 문제

Clapeyron equation $\frac{dp}{dT} = \frac{\Delta Q_{\text{lat}}}{T\Delta v}$를 풀어 water–vapor의 coexisting curve를 구하라. Vapor가 ideal gas이고 $\Delta v = v_{\text{gas}} - v_{\text{wat}} \approx v_{\text{gas}}$라 가정하면

$$
\frac{dp}{dT} = \frac{p}{k_BT^2}\Delta Q_{\text{lat}}
$$

Particle당 latent heat가 압력에 의존하지 않는다고 가정하면 다음을 보여라 ($p_0$는 $T_0$에서의 saturated vapor pressure).

$$
p(T) = p_0(T_0)\exp\left\{-\frac{\Delta Q_{\text{lat}}}{k_B}\left(\frac{1}{T} - \frac{1}{T_0}\right)\right\}
$$

# 내 풀이

- $Q$와 $v$를 입자당 열과 부피로 해석. 물의 부피가 vapor에 비해 무시 가능하다고 가정.
- $\Delta v = v_{\text{gas}} = k_BT/p$이므로 $\frac{dp}{dT} = \frac{p}{k_BT^2}\Delta Q_{\text{lat}}$
- $\Delta Q_{\text{lat}}$가 $P$와 $T$에 대해 상수라고 가정하고 변수분리하여 적분.

$$
\ln\frac{p(T)}{p(T_0)} = -\frac{\Delta Q_{\text{lat}}}{k_B}\left(\frac{1}{T} - \frac{1}{T_0}\right)
$$

# 풀이 검토

**판정: 계산, 가정 모두 정확하다.** 특히 문제는 "압력에 의존하지 않는다"고만 했는데, 답안은 적분에 실제로 필요한 가정("$T$에 대해서도 상수")을 정확히 밝혔다. 아래는 이 근사의 **한계**에 관한 보충이다. Conceptual question으로 나오기 좋다.

> [!tip] 1. 가정에 대한 정확한 이해
> Coexistence curve 위에서는 $P$와 $T$가 $P = P(T)$로 묶여 함께 변한다. 따라서 "압력에 무관"이라는 조건만으로는 적분에 부족하고, 실제로 필요한 것은 **곡선을 따라 상수**라는 것, 즉 $T$에 무관하다는 것이다. 답안은 이 점을 정확히 짚었다.

> [!warning] 2. 이 결과가 깨지는 곳: critical point 근처
> 이 식에 들어간 세 근사는 모두 $T \to T_c$에서 무너진다.
> 1. **$v_{\text{liq}} \ll v_{\text{gas}}$**: critical point에서 두 부피가 같아진다 ($\Delta v \to 0$).
> 2. **Vapor = ideal gas**: 고밀도 vapor에서는 상호작용이 중요해진다.
> 3. **$\Delta Q_{\text{lat}}$ = 상수**: latent heat는 온도가 오를수록 줄어들어 $T_c$에서 0이 된다 ($\Delta s \to 0$). Critical point에서 first-order transition이 끝나기 때문이다.
>
> 따라서 이 식은 $T \ll T_c$ (예: 상온의 물)에서만 좋은 근사다.

> [!tip] 3. 실험적 의미
> $\ln p$를 $1/T$에 대해 그리면 기울기가 $-\Delta Q_{\text{lat}}/k_B$인 직선이 된다 (Arrhenius 형태). 측정한 증기압 곡선으로 latent heat를 구하는 표준적인 방법이다.

# 연관 노트

- [[SM lecture note - Phase Equilibrium and Maxwell Construction]] (Clausius–Clapeyron 유도)
- [[SM HW4-1 Phase Diagram of Water]]

# 다음 문제
- [[SM HW4-4 Van der Waals Critical Point and Corresponding States|HW4-4 Van der Waals Critical Point and Corresponding States]]