---
title: SM HW2-4 Kelvin and Clausius Statements
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 2nd HW, Problem 4

# 문제

Find the Kelvin and Clausius' statements of the 2nd law.

# 내 풀이

- **Kelvin statement**: Single heat reservoir에서 열을 흡수하여 그것을 전부 일로 전환하며, 그 이외 효과는 전혀 없는 cyclic process는 존재하지 않는다.
- **Clausius statement**: 저온에서 고온 물체로 열을 옮기는 것 외에 다른 효과 없는 cyclic process는 있을 수 없다.

# 풀이 검토

**판정: 두 진술 모두 정확하다.** 핵심 단어인 "**그 이외 효과는 전혀 없는**(sole effect)"을 빠뜨리지 않은 것이 좋다. 이 단어가 없으면 냉장고나 등온 팽창처럼 반례가 생긴다. 아래는 시험에서 이어서 물을 만한 내용이다.

> [!tip] 1. 두 진술의 동치성 (자주 나오는 문제)
> 각 진술이 깨지면 다른 진술도 깨진다는 것을 보이면 된다.
> - **Kelvin 위반 ⇒ Clausius 위반**: 고온 reservoir의 열 $Q$를 전부 일 $W = Q$로 바꾸는 기계가 있다고 하자. 그 일로 냉장고를 돌려 저온에서 $Q'$를 퍼 올려 고온에 $Q' + W$를 버린다. 합치면 결과적으로 저온에서 고온으로 열 $Q'$만 옮겨진다.
> - **Clausius 위반 ⇒ Kelvin 위반**: 저온에서 고온으로 열 $Q_1$을 저절로 옮기는 기계가 있다고 하자. 이를 Carnot engine(고온에서 $Q_2$를 받아 저온에 $Q_1$을 버림)과 합치면, 저온 reservoir의 출입은 상쇄되고 고온 reservoir 하나에서 받은 $Q_2 - Q_1$이 전부 일로 바뀐다.

> [!warning] 2. Clausius statement에 "cyclic"이 꼭 필요하지는 않다
> 보통은 "저온 물체에서 고온 물체로 열을 옮기는 것이 **유일한 결과**인 과정은 없다"로 쓴다. "Cyclic"을 넣어도 틀린 것은 아니다. "유일한 결과"라는 조건이 이미 작동 장치가 원래 상태로 돌아올 것을 포함하기 때문이다.

> [!tip] 3. 다른 내용과의 연결
> - 이 진술들 → Carnot's theorem → thermodynamic temperature → entropy로 이어지는 논리 사슬 ([[SM lecture note - Carnot Engine and Thermodynamic Entropy|2주차 노트]] Q1, Q2)
> - Entropy 형태의 2nd law ($\Delta S_{\text{total}} \ge 0$)와 같은 내용임

# 연관 노트

- [[SM lecture note - Carnot Engine and Thermodynamic Entropy]]

# 다음 문제
- [[SM HW2-5 Legendre Transformation|HW2-5 Legendre Transformation]]