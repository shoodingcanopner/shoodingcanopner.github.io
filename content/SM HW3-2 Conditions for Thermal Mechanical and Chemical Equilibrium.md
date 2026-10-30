---
title: SM HW3-2 Conditions for Thermal Mechanical and Chemical Equilibrium
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 3rd HW, Problem 2

# 문제

2nd law를 이용하여 thermal, mechanical, chemical equilibrium의 조건을 찾아라. 고립계를 두 sub-system으로 나누는 벽의 제약을 순서대로 풀어, 열, 부피, 입자의 교환을 허용하라.

# 내 풀이
![[Pasted image 20261030130647.png]]

제약 조건으로 $V_1 + V_2 = V$, $E_1 + E_2 = E$, $S_1 + S_2 = S$, $N_1 + N_2 = N$을 나열.

양 측 1번과 2번 각각의 엔트로피는, $i$가 양 측에 대한 index일 때,
$$
dS_i = \frac{1}{T_i}dE_i + \frac{P_i}{T_i}dV_i - \frac{\mu_i}{T_i}dN_i
$$
1과 2를 합한 전체 엔트로피 변화는,
$$
dS = dS_1 + dS_2 = \left(\frac{1}{T_1} - \frac{1}{T_2}\right)dE_1 + \left(\frac{P_1}{T_1} - \frac{P_2}{T_2}\right)dV_1 - \left(\frac{\mu_1}{T_1} - \frac{\mu_2}{T_2}\right)dN_1
$$
열역학 제 2법칙에 따라, $dS = 0$ 이 되어야 시스템의 상태 함수 변화가 멈출 것이고, 우린 그것을 평형이라고 부르기로 했다. 

**Thermal EQ**:  
Partition의 adiabatic constraint를 없애서 thermal equilibrium을 정의해보자. 
Partition이 멈추어 있고 입자 출입을 허용하지 않기 때문에, $dV_1 = 0$, $dN_1 = 0$. 대신 열 출입은 가능하므로 에너지 변화는 있을 수 있다, $dE_1 \neq 0$.
$$
dS = \left(\frac{1}{T_1} - \frac{1}{T_2}\right)dE_1
$$
엔트로피 최대 $dS = 0$을 위해, $\frac{1}{T_1} - \frac{1}{T_2} =0$, 즉 $T_1 = T_2$가 되어야 한다. 
양 측의 온도가 같아지는 것이 평형의 조건임을 알 수 있다. 


**Mechanical EQ**: 
Partition이 움직이기까지 해서 $dV_1 \neq 0$ 이라면,
$$
dS =  \left(\frac{1}{T_1} - \frac{1}{T_2}\right)dE_1 + \left(\frac{P_1}{T_1} - \frac{P_2}{T_2}\right)dV_1 
$$
$P_1/T_1 = P_2/T_2$, $T_1 = T_2$으로 thermal equilibrium이 먼저 보장 된다면, $P_1 = P_2$. 
즉, 양 측의 압력이 같아지는 게 평형의 조건임을 알 수 있다. 

**Chemical EQ**: 
Partition이 입자 교환을 허용하여 $dN_1 \neq 0$이라면, 
$$
dS = \left(\frac{1}{T_1} - \frac{1}{T_2}\right)dE_1 + \left(\frac{P_1}{T_1} - \frac{P_2}{T_2}\right)dV_1 - \left(\frac{\mu_1}{T_1} - \frac{\mu_2}{T_2}\right)dN_1
$$
$\mu_1/T_1 = \mu_2/T_2$, $T_1 = T_2$으로 thermal equilibrium이 먼저 보장 된다면,  $\mu_1 = \mu_2$.
즉 양 측의 chemical potential이 같아지는 게 평형 조건임을 알 수 있다. 
# 풀이 검토

**판정: 평형 조건은 모두 맞다.** 그러나 2nd law를 "절반만" 썼고, 개념적으로 부정확한 서술이 있다.


> [!failure] 2. $dS = 0$ (stationarity)만 사용했다. 2nd law의 핵심인 $dS \ge 0$을 쓰지 않았다
> $dS = 0$은 "평형에서 무엇이 같은가"만 알려준다. 2nd law $dS \ge 0$을 쓰면 **평형으로 가는 방향**도 나온다 (강의 필기가 이 방식이다).
> $$
> \left(\frac{1}{T_1} - \frac{1}{T_2}\right)dE_1 \ge 0
> $$
> 따라서 $T_1 > T_2$이면 $dE_1 < 0$, 즉 열은 고온에서 저온으로 흐른다. 같은 방식으로 압력이 큰 쪽이 팽창하고, 입자는 $\mu$가 높은 곳에서 낮은 곳으로 흐른다. 시험의 conceptual question은 대개 이 **방향**을 묻는다.
>
> 또한 "엔트로피 최대"라고 말하려면 $dS = 0$만으로는 부족하고, $d^2S < 0$ (stability)도 필요하다. $dS = 0$은 최소나 안장점에서도 성립한다. 이 조건이 $C_V > 0$, $\partial P/\partial V < 0$ 같은 stability 조건으로 이어진다 ([[SM lecture note - Phase Equilibrium and Maxwell Construction|5주차]]).

> [!tip] 4. 왜 thermal equilibrium을 먼저 가정하는가
> 단열(adiabatic)이면서 움직이는 벽만 있으면, $P_1/T_1 = P_2/T_2$ 하나만으로는 최종 상태가 유일하게 정해지지 않는다 (유명한 "adiabatic piston problem"). 그래서 열 교환을 먼저 허용해 $T_1 = T_2$를 만든 뒤 $P_1 = P_2$를 얻는다. 답안의 순서는 이 점에서 올바르다.

# 연관 노트

- [[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium]]
- [[SM HW1-3 Zeroth Law of Thermodynamics]]

# 다음 문제
- [[SM HW3-3 Chemical Potential of an Ideal Gas|HW3-3 Chemical Potential of an Ideal Gas]]