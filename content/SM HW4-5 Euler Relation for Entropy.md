---
title: SM HW4-5 Euler Relation for Entropy
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 4th HW, Problem 5 (textbook prob 1.9)

# 문제

Entropy $S(N, V, E)$가 extensive quantity라는 사실을 이용하여 다음을 보여라.

$$
N\left(\frac{\partial S}{\partial N}\right)_{V,E} + V\left(\frac{\partial S}{\partial V}\right)_{N,E} + E\left(\frac{\partial S}{\partial E}\right)_{N,V} = S
$$

이는 $(-N\mu + PV + E)/T = S$, 즉 $N\mu = E + PV - TS$를 뜻한다.

# 내 풀이

$N$, $V$, $E$, $S$가 모두 extensive이므로, system size를 $l$배 하면

$$
lS(N, V, E) = S(lN, lV, lE)
$$

양변을 $l$로 미분하고 $l = 1$을 대입하면 문제의 식. 여기에 $dS = \frac{1}{T}dE - \frac{\mu}{T}dN + \frac{P}{T}dV$를 대입하면

$$
S = -\frac{\mu N}{T} + \frac{PV}{T} + \frac{E}{T}, \qquad TS = -\mu N + PV + E
$$

# 풀이 검토

**판정: 완벽하다.** 논리 오류는 없다. 다음 두 가지만 보충하면 더 완성도 있는 답안이 된다.

> [!tip] 1. 마지막 한 줄
> 문제가 요구한 최종 형태 $N\mu = E + PV - TS$까지 써 주고, 이것이 $G = N\mu$ (Gibbs free energy)임을 밝히면 좋다. 그러면 "$\mu$ = particle당 Gibbs free energy"라는 해석 ([[SM lecture note - Free Energies and Fluctuation Theorems|3주차]])이 완성된다.

> [!tip] 2. 미분 위치의 명시
> $\partial S/\partial(lN)$은 $(lN, lV, lE)$에서 계산한 값이고, $l = 1$을 넣은 뒤에야 $(N, V, E)$에서의 값이 된다. 답안은 이 순서를 지켰다. 서술형에서는 "$l = 1$을 대입하면 편미분이 원래 점에서 계산된다"는 말을 한 번 적어 두면 채점자가 의도를 바로 확인할 수 있다.

> [!tip] 3. 연결되는 결과
> - 이 식을 미분하고 first law를 빼면 **Gibbs–Duhem relation** $S\,dT - V\,dP + N\,d\mu = 0$이 나온다 ([[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium|4주차]]).
> - 같은 식 $E = TS - PV + \mu N$을 [[SM HW3-3 Chemical Potential of an Ideal Gas|HW3-3]] (3)에서 $\mu_0$를 구하는 데 사용했다.
> - Extensivity가 이 결과의 유일한 가정이다. 따라서 extensivity가 깨지는 계(gravity 같은 long-range interaction)에서는 성립하지 않는다.

# 연관 노트

- [[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium]]
- [[SM lecture note - Free Energies and Fluctuation Theorems]] (AI의 보충 설명 Q1)

# 다음 문제
- [[SM HW5-1 Time Reversal Symmetry of Hamiltonian Dynamics|HW5-1 Time Reversal Symmetry of Hamiltonian Dynamics]]
