---
title: SM HW1-3 Zeroth Law of Thermodynamics
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 1st HW, Problem 3

# 문제

Explain the zeroth law of thermodynamics.

# 내 풀이

- The zeroth law of thermodynamics is related to measure of temperature.
- It states that if two systems are in thermal equilibrium with a third system, they also in the thermal equilibrium each other.
- This principle makes the thermal equilibrium as a transitive property.

# 풀이 검토

**판정: 내용은 맞다.** 다만 "왜 이것이 법칙으로 필요한가"가 빠져 있다.

> [!warning] 1. "Related to measure of temperature"는 너무 막연하다
> 0th law의 진짜 역할은 **온도라는 state variable의 존재를 보장**하는 것이다.
> - Thermal equilibrium 관계가 reflexive, symmetric이고 0th law에 의해 **transitive**이므로, 이 관계는 **equivalence relation**이다.
> - Equivalence relation은 모든 평형 상태를 서로 겹치지 않는 class로 나눈다.
> - 같은 class에 속한 계들에 같은 숫자를 붙인 것이 (empirical) **temperature**다.
>
> 온도계가 작동하는 근거도 이것이다. 온도계(제3의 계)와 평형인 두 물체는 직접 접촉하지 않아도 서로 평형임이 보장된다.

> [!tip] 2. 4주차 내용과의 연결
> 열역학/통계역학에서 thermal equilibrium 조건은 $\partial S_A/\partial E_A = \partial S_B/\partial E_B$, 즉 $T_A = T_B$였다 ([[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium|4주차]]). 등호는 transitive하므로, entropy를 이용한 정의에서는 0th law가 자연스럽게 따라 나온다.


# 연관 노트

- [[SM lecture note - Thermodynamic Equilibrium and the First Law]]
- [[SM HW1-1 Ideal Gas and Absolute Temperature]]

# 다음 문제
- [[SM HW1-4 Exact Differential|HW1-4 Exact Differential]]