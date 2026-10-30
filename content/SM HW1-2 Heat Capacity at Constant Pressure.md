---
title: SM HW1-2 Heat Capacity at Constant Pressure
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 1st HW, Problem 2

# 문제

Ideal gas의 constant pressure heat capacity $C_p = \left.\frac{dQ}{dT}\right|_p$를 계산하라.

Hint: 열을 흡수할 때 기체가 압력 $p$에 맞서 팽창할 수 있으므로 $dQ = dE - dW$이다. 따라서

$$
C_p(T) = C_v(T) + \left.\frac{d(-W)}{dT}\right|_p
$$

# 내 풀이

First law: $\Delta E = \Delta Q + \Delta W = \Delta Q - P\Delta V$

3D ideal gas: $E(N, T) = \frac{3}{2}k_B N T$, 그리고 $PV = Nk_BT$에서 $P\Delta V = Nk_B \Delta T$ (constant $P$, $N$)

$$
C_p = \left(\frac{\partial Q}{\partial T}\right)_{P,N} = \left(\frac{\partial E}{\partial T}\right)_{P,N} + P\left(\frac{\partial V}{\partial T}\right)_{P,N} = \frac{3}{2}Nk_B + Nk_B = \frac{5}{2}Nk_B
$$

# 풀이 검토

**판정: 결과와 논리 모두 맞다.** 아래는 표기와 일반성에 관한 지적이다.

> [!warning] 1. $\left(\partial Q / \partial T\right)_{P,N}$은 잘못된 표기다
> $Q$는 state function이 아니므로 "$Q$의 편미분"은 존재하지 않는다 ($\text{đ}Q$는 inexact differential). 다음 중 하나로 써야 한다.
> $$
> C_P = \left.\frac{\text{đ}Q}{dT}\right|_P = \left(\frac{\partial H}{\partial T}\right)_{P,N}
> $$
> 두 번째 형태가 시험에서 가장 안전하다. Isobaric에서 $dH = \text{đ}Q$이기 때문이다 ([[SM HW3-1 Enthalpy and the Second Law|HW3-1]]). Ideal gas에서는 $H = E + PV = \frac{5}{2}Nk_BT$이므로 바로 $C_P = \frac{5}{2}Nk_B$가 나온다.

> [!warning] 2. $\left(\partial E / \partial T\right)_P = \left(\partial E / \partial T\right)_V$인 이유를 밝히지 않았다
> 이 등식은 ideal gas의 $E$가 **$T$만의 함수**라서 성립한다. 일반적인 관계는 다음과 같다.
> $$
> C_P - C_V = \left[\left(\frac{\partial E}{\partial V}\right)_T + P\right]\left(\frac{\partial V}{\partial T}\right)_P
> $$
> Ideal gas는 $\left(\partial E/\partial V\right)_T = 0$이라서 $C_P - C_V = Nk_B$ (**Mayer relation**)가 된다. Real gas에서는 첫 항이 살아남는다.

> [!tip] 보완
> - $\Delta$ 대신 미분 $d$로 쓰고, $-P\,dV$가 성립하는 근거(quasi-static)를 한 줄 명시하면 더 깔끔하다.
> - $\gamma = C_P/C_V = 5/3$은 [[SM HW2-2 Adiabatic Relations of an Ideal Gas|HW2-2]]의 $PV^{5/3} = \text{const}$로 이어진다.

# 연관 노트

- [[SM lecture note - Thermodynamic Equilibrium and the First Law]]
- [[SM lecture note - Free Energies and Fluctuation Theorems]] (Enthalpy와 $C_P$)

# 다음 문제
- [[SM HW1-3 Zeroth Law of Thermodynamics|HW1-3 Zeroth Law of Thermodynamics]]