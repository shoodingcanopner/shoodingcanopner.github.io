---
title: SM HW3-1 Enthalpy and the Second Law
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 3rd HW, Problem 1

# 문제

Isobaric system ($p$ = const, $dp = 0$)에서 enthalpy $H$로 2nd law를 표현하라.

(1) 다음을 보여라. $dQ$는 환경과 교환한 열, $dW_i (= f_i dX_i)$는 $p\,dV$ 이외의 reversible work다. Reversible work가 없으면 $dH = dQ$이다.

$$
dH = d(E + pV) = dQ + \sum_i dW_i
$$

(2) 계가 adiabatic하기까지 하면 $dQ = 0$이고 $dH = \sum_i dW_i$이다. 2nd law를 고려하면 이 등식은 다음으로 일반화된다. $\delta W$는 irreversible 또는 reversible하게 가한 일이고, $dW_{\text{rev}} < \delta W_{\text{irr}}$이다. 이 부등식에 대한 자신의 논증을 제시하라.

$$
dH \le \sum_i \delta W_i
$$

따라서 일 교환이 없는 isobaric, adiabatic system에서는 $dH \le 0$이고, $H$는 최솟값에 도달한다 (equilibrium).

# 내 풀이

**(1)**

$$
dE = \text{đ}Q - P\,dV + \sum_i dW_i
$$

$$
dH = dE + d(PV) = \text{đ}Q + V\,dP + \sum_i dW_i = \text{đ}Q + \sum_i dW_i \qquad (dP = 0)
$$

**(2)** Clausius inequality $\delta Q \le T\,dS$ (등호는 reversible)를 사용하면

$$
dH = \delta Q + V\,dP + \sum_i dW_i \le T\,dS + V\,dP + \sum_i dW_i
$$

$dP = 0$, 그리고 "adiabatic을 reversible adiabatic, $dS = 0$으로 해석"하여 $dH \le \sum_i dW_i$.

# 풀이 검토

**판정: (1)은 맞다. (2)는 결론이 맞지만, 부등식을 만들어낸 근거가 스스로 모순된다.**

> [!warning] (1) 첫 줄의 $T\,dS$ 표기
> 풀이 첫 줄에 $dE = T\,dS - P\,dV + \sum f_i\,dX_i$를 쓰고 $T\,dS$를 $\text{đ}Q$로 바꿨다. 이 치환은 reversible일 때만 성립한다. 처음부터 first law $dE = \text{đ}Q + \text{đ}W$로 시작하면 이 문제가 생기지 않는다 (두 번째 줄이 바로 그것이다). 또한 $-P\,dV$가 irreversible에서도 성립하는 이유는 고정된 것이 외부 압력이기 때문이다 ([[SM lecture note - Free Energies and Fluctuation Theorems|3주차 노트]] Q2).

> [!failure] (2) "Reversible adiabatic이라서 $dS = 0$"은 부등식의 근거가 될 수 없다
> 답안의 사슬을 경우별로 보면 다음과 같다.
> - **Reversible이라면**: $\delta Q = T\,dS$로 **등호**가 성립한다. 따라서 결론도 $dH = \sum dW_i$ (등식)일 뿐, 부등식이 생기지 않는다.
> - **Irreversible이면서 문자 그대로 adiabatic($\delta Q = 0$)이라면**: Clausius inequality에서 $dS > 0$이 되어 "$dS = 0$" 가정이 깨진다.
>
> 즉 "reversible"과 "부등식"을 동시에 가질 수 없다. 의미 있는 부등식은 **irreversible process**에서 나오는데, 그 경우 adiabatic이면 $dS = 0$이 아니다.

> [!tip] (2) 올바른 논증 1: $H$의 natural variable은 $(S, P)$다
> First law와 Clausius inequality는 **모든 과정**에서 성립한다.
> $$
> dH = \text{đ}Q + V\,dP + \sum_i \delta W_i, \qquad \text{đ}Q \le T\,dS
> $$
> $$
> dH \le T\,dS + V\,dP + \sum_i \delta W_i
> $$
> 이제 **$S$와 $P$를 고정**하면 $dH \le \sum_i \delta W_i$이다. 즉 이 부등식이 정확히 성립하는 조건은 "adiabatic"이 아니라 "**isentropic + isobaric**"이다. Irreversible process에서 $S$를 고정하려면 생긴 entropy만큼 열을 빼내야 하므로, 이 계는 엄밀히는 adiabatic이 아니다.
>
> 답안이 $dS = 0$을 쓴 직관은 옳았다. 다만 근거를 "reversible"이 아니라 "**$H$의 minimum principle은 고정된 $(S, P)$에서 성립한다**"로 대야 한다. 이는 $F$가 $(T, V)$에서, $G$가 $(T, P)$에서 최소가 되는 것과 같은 구조다 ([[SM lecture note - Free Energies and Fluctuation Theorems|3주차]]).

> [!tip] (2) 올바른 논증 2: 문제가 의도한 "같은 상태 변화에 필요한 일" 비교
> $H$는 state function이므로, 같은 시작과 끝 상태 사이의 $dH$는 reversible 경로로 계산해도 같다. 따라서 $dH = \sum dW_{\text{rev}}$이다. 같은 상태 변화를 irreversible하게 일으키려면 dissipation 때문에 더 많은 일이 든다 ($dW_{\text{rev}} \le \delta W_{\text{irr}}$). 그러므로 $dH \le \sum \delta W$이다. 문제의 "$dW_{\text{rev}} < \delta W_{\text{irr}}$" 힌트는 이 논증을 겨냥한 것이다.

> [!warning] 문제 자체의 모호함
> 문자 그대로의 adiabatic irreversible process에서는 first law가 $dH = \sum \delta W_i$를 **등식**으로 준다. 그래서 "adiabatic"이라는 단어만으로는 부등식에 내용이 없다. 시험에서 이 유형이 나오면 "고정된 natural variable $(S, P)$에서의 minimum principle"로 답하는 것이 가장 안전하다.

# 연관 노트

- [[SM lecture note - Free Energies and Fluctuation Theorems]]
- [[SM HW1-2 Heat Capacity at Constant Pressure]] ($dH = \text{đ}Q$ → $C_P = \partial H/\partial T$)

# 다음 문제
- [[SM HW3-2 Conditions for Thermal Mechanical and Chemical Equilibrium|HW3-2 Conditions for Thermal, Mechanical, and Chemical Equilibrium]]