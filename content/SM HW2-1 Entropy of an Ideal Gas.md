---
title: SM HW2-1 Entropy of an Ideal Gas
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 2nd HW, Problem 1

# 문제

$N$개 입자로 이루어진 ideal gas의 entropy를 구하라. First law $dE = T\,dS - p\,dV$, ideal gas law, $E = \frac{3}{2}Nk_BT$를 이용하여 다음을 보여라.

$$
S(T, V) - S(T_0, V_0) = \frac{3}{2}Nk_B\ln\frac{T}{T_0} + Nk_B\ln\frac{V}{V_0} = Nk_B\ln\left\{\left(\frac{T}{T_0}\right)^{3/2}\frac{V}{V_0}\right\}
$$

Remark: (1) Isothermal process에서 entropy는 $k_B\ln V^N$에 비례한다. Ring a bell? (2) $S$는 state function이다.

# 내 풀이

$$
dS = \frac{1}{T}dE + \frac{P}{T}dV, \qquad dE = \frac{3}{2}Nk_B\,dT, \qquad \frac{P}{T} = \frac{Nk_B}{V}
$$

$$
dS = \frac{3}{2}Nk_B\,d\ln T + Nk_B\,d\ln V
$$

적분하여 문제의 식을 얻음.

# 풀이 검토

**판정: 계산은 완벽하다.** 다만 문제가 던진 Remark 두 개에 답하지 않았는데, 둘 다 시험의 conceptual question 소재다.

> [!tip] 1. Remark (1): "$k_B\ln V^N$"이 떠올리게 하는 것
> $N$개 입자가 각각 부피 $V$ 안 어디에나 있을 수 있으므로, 위치 배치의 수는 $V^N$에 비례한다. 따라서 $S = k_B\ln\Omega$ (Boltzmann entropy)의 위치 부분이 바로 $k_B\ln V^N$이다. 열역학으로 얻은 식이 미시 상태 수 세기와 일치한다는 것이 이 Remark의 요점이며, [[SM HW6-1 Microstates and Entropy of an Ideal Gas|HW6-1]]에서 직접 확인한다.

> [!tip] 2. Remark (2): state function이라는 것의 쓰임
> $S$가 $(T, V)$만의 함수이므로, 어떤 경로로 가든 $\Delta S$는 같다. 실제로 [[SM HW2-2 Adiabatic Relations of an Ideal Gas|HW2-2]]의 reversible adiabat $(T/T_0)^{3/2}(V/V_0) = 1$을 대입하면 $\Delta S = 0$이 바로 나온다.

> [!warning] 3. 이 식은 $N$을 고정했을 때만 의미가 있다
> 기준점 상수 $S(T_0, V_0)$가 $N$에 어떻게 의존하는지는 열역학만으로 정해지지 않는다. $N$까지 바꾸며 extensivity를 요구하면 $\ln V$가 아니라 $\ln(V/N)$이 나와야 하는데, 이것은 통계역학에서 $1/N!$ (Gibbs paradox)과 연결된다. [[SM HW6-1 Microstates and Entropy of an Ideal Gas|HW6-1]] 참고.

> [!tip] 4. 사용한 식의 성격
> $dS = \frac{1}{T}dE + \frac{P}{T}dV$는 state function 사이의 관계라서 경로와 무관하게 성립한다. "Reversible일 때만"이라는 제약은 $T\,dS$를 $\text{đ}Q$로 바꿀 때만 붙는다.

# 연관 노트

- [[SM lecture note - Carnot Engine and Thermodynamic Entropy]]
- [[SM HW3-3 Chemical Potential of an Ideal Gas]] (이 결과를 그대로 사용)

# 다음 문제
- [[SM HW2-2 Adiabatic Relations of an Ideal Gas|HW2-2 Adiabatic Relations of an Ideal Gas]]