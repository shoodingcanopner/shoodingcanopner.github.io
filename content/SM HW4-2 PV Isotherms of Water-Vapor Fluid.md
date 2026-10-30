---
title: SM HW4-2 PV Isotherms of Water-Vapor Fluid
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 4th HW, Problem 2

# 문제

Water–vapor fluid의 P–V isotherm을 여러 온도 $T \le T_c$에서 그려라.

# 내 풀이
![[Pasted image 20261030135144.png]]

![[Pasted image 20261030135201.png|244]]

- 회색 영역처럼 vapor와 water가 공존하는 영역에서는 압력이 일정하게 유지된다.
- $T_c$에서는 $(\partial P/\partial V)_{T_c} = 0$, $(\partial^2 P/\partial V^2)_{T_c} = 0$이 되므로 변곡점의 기울기가 0이다.
- Line이 coexistence region에 접하여, 다른 $V$에서 $P$가 같은 현상이 없어지는 온도이다.
- $T_c$ 이상의 온도에서는 supercritical fluid가 된다.

# 풀이 검토

**판정: 그림이 정확하고, $P$–$T$ diagram과의 대응까지 그린 점이 훌륭하다.** 아래는 서술을 더 정확하게 만드는 지적이다.

> [!warning] 1. Critical 조건은 등온선 전체가 아니라 한 점에서 성립한다
> "$T_c$에서는 $(\partial P/\partial V)_{T_c} = 0$"이라고 쓰면, $T_c$ 등온선 전체에서 기울기가 0인 것처럼 읽힌다. 정확히는 **critical volume $V_c$에서** 성립한다.
> $$
> \left(\frac{\partial P}{\partial V}\right)_{T_c, V_c} = 0, \qquad \left(\frac{\partial^2 P}{\partial V^2}\right)_{T_c, V_c} = 0
> $$

> [!tip] 3. 더 쓸 수 있는 내용
> - **Liquid 구간이 가파른 이유**: liquid는 거의 incompressible하여 $\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T$가 매우 작다.
> - **돔 안의 상태**: 같은 $P$, $T$에서 평균 부피가 다른 상태들은 두 phase의 비율만 다르다 (lever rule).
> - **$T \to T_c$**: 수평 구간이 짧아지다가 $T_c$에서 한 점(변곡점)으로 줄어든다. 즉 liquid와 gas의 밀도 차이가 0이 된다. 이 밀도 차이가 critical phenomena의 order parameter다.

# 연관 노트

- [[SM lecture note - Phase Equilibrium and Maxwell Construction]]
- [[SM HW4-1 Phase Diagram of Water]]
- [[SM HW4-4 Van der Waals Critical Point and Corresponding States]]

# 다음 문제
- [[SM HW4-3 Clausius-Clapeyron Coexistence Curve|HW4-3 Clausius-Clapeyron Coexistence Curve]]
