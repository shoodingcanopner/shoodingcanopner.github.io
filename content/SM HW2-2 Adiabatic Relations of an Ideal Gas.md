---
title: SM HW2-2 Adiabatic Relations of an Ideal Gas
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 2nd HW, Problem 2

# 문제

Ideal gas의 adiabatic expansion/compression. 열 교환이 없으므로 $dE = dW$이고, $dE = \frac{3}{2}Nk_B\,dT$, $dW = -p\,dV$이다. 다음 adiabatic relation을 보여라.

$$
\left(\frac{T}{T_0}\right)^{3/2} = \frac{V_0}{V}, \qquad \left(\frac{T}{T_0}\right)^{5/2} = \frac{p}{p_0}, \qquad pV^{5/3} = \text{const}
$$

Remark: adiabatic하게 부피를 바꾸면 entropy가 보존된다. 열 교환이 없으므로 entropy가 보존된다.

# 내 풀이

![[Pasted image 20261030123508.png]]

$\frac{3}{2}Nk_B\,dT = -P\,dV = -Nk_BT\frac{dV}{V}$에서 $\frac{3}{2}d\ln T = -d\ln V$ → $(T/T_0)^{3/2} = V_0/V$

$P\,dV + V\,dP = Nk_B\,dT$를 이용해 $\frac{5}{2}Nk_B\,dT = V\,dP$ → $(T/T_0)^{5/2} = P/P_0$

두 식을 곱해 $(P/P_0)(V/V_0)^{5/3} = 1$ → $PV^{5/3} = \text{const}$

# 풀이 검토

**판정: 계산은 맞다.** 그러나 숨어 있는 가정 하나가 conceptual question의 단골 소재다.

> [!failure] 1. 숨은 가정: quasi-static (reversible). 단순히 "adiabatic"만으로는 이 관계식이 성립하지 않는다
> $dW = -P\,dV$에서 $P$는 **기체 자신의 압력**이다. 이것을 일로 쓸 수 있는 것은 과정 내내 기체가 평형 상태여서 $P$가 정의되고 $P = P_{\text{ext}}$일 때, 즉 **quasi-static**일 때뿐이다.
>
> **반례: free expansion (Joule expansion)**. 단열 용기에서 칸막이를 치워 기체가 진공으로 팽창하면 $\text{đ}Q = 0$ (adiabatic)이고, 바깥에 한 일도 $\text{đ}W = 0$이다. 따라서 $\Delta E = 0$, ideal gas이므로 $T$는 **그대로**다. 이 경우 $(T/T_0)^{3/2} = V_0/V$는 성립하지 않는다.
>
> 그리고 이때 entropy는 보존되지 않는다.
> $$
> \Delta S = Nk_B\ln\frac{V}{V_0} > 0
> $$
> 즉 문제 Remark의 "열 교환이 없으므로 entropy가 보존된다"는 **reversible adiabatic일 때만** 맞는 말이다. 정확한 논리는 $dS \ge \text{đ}Q/T = 0$ (Clausius inequality)이고, 등호는 reversible일 때만 성립한다. 이 예시는 [[SM lecture note - Thermodynamic Equilibrium and the First Law|1주차 노트]]의 irreversible process 예시, [[SM lecture note - Carnot Engine and Thermodynamic Entropy|2주차 노트]] Q4와 같은 이야기다.

> [!tip] 2. 지수 $5/3$의 정체
> $\gamma = C_P/C_V = (5/2)/(3/2) = 5/3$이다 ([[SM HW1-2 Heat Capacity at Constant Pressure|HW1-2]]). 일반적으로 $PV^\gamma = \text{const}$이고, diatomic gas라면 $\gamma = 7/5$이다.

> [!tip] 3. 더 짧은 풀이
> [[SM HW2-1 Entropy of an Ideal Gas|HW2-1]]의 entropy에 $\Delta S = 0$을 넣으면 $(T/T_0)^{3/2}(V/V_0) = 1$이 즉시 나온다. "Reversible adiabatic = isentropic"이라는 관점이 시험에서 더 빠르다.

# 연관 노트

- [[SM lecture note - Carnot Engine and Thermodynamic Entropy]]
- [[SM HW2-3 Carnot Cycle and Clausius Integral]] (이 결과를 사용)

# 다음 문제
- [[SM HW2-3 Carnot Cycle and Clausius Integral|HW2-3 Carnot Cycle and Clausius Integral]]