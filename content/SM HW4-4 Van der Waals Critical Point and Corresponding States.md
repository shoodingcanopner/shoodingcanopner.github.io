---
title: SM HW4-4 Van der Waals Critical Point and Corresponding States
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 4th HW, Problem 4

# 문제

Van der Waals equation of state $\left(P + \frac{a}{v^2}\right)(v - b) \simeq kT$로부터 $T_c$, $p_c$, $V_c$를 구하라. Rescaled 변수로 van der Waals equation of corresponding states를 써라.

# 내 풀이

$P(v) = \frac{kT}{v - b} - \frac{a}{v^2}$. Critical point는 $P(v)$의 변곡점 기울기가 0이 되는 순간이다. 즉 $\max\left(\frac{\partial P}{\partial v}\right) = 0$을 만족하는 $v_c$를 찾는다.

$$
\frac{dP}{dv} = -kT(v - b)^{-2} + 2av^{-3}, \qquad \frac{d^2P}{dv^2} = 2kT(v - b)^{-3} - 6av^{-4}
$$

두 조건 ① $v_c^3(v_c - b)^{-2} = \frac{2a}{kT_c}$, ② $v_c^4(v_c - b)^{-3} = \frac{3a}{kT_c}$를 나누어

$$
v_c = 3b \;(V_c = 3Nb), \qquad T_c = \frac{8}{27k}\frac{a}{b}, \qquad P_c = \frac{1}{27}\frac{a}{b^2}
$$

Rescaling $v = v_c\tilde v$, $T = T_c\tilde T$, $P = P_c\tilde P$:

$$
\left(\tilde P + \frac{3}{\tilde v^2}\right)(3\tilde v - 1) = 8\tilde T
$$

→ $a$, $b$와 상관없이 모든 van der Waals 기체가 같은 식을 따른다.

# 풀이 검토

**판정: 완벽하다.** 강의 필기에서 계수를 확신하지 못했던 reduced equation을 여기서는 정확히 유도했다. 아래는 논리를 더 단단하게 하는 보충이다.

> [!tip] 1. "$\max(\partial P/\partial v) = 0$" 논리가 옳은 이유를 한 줄로
> Stable 영역에서는 $\partial P/\partial v < 0$이다. $T > T_c$이면 $\partial P/\partial v$의 최댓값(변곡점에서의 값)도 음수다. $T < T_c$이면 그 최댓값이 양수가 되어 loop가 생긴다. 따라서 **최댓값이 정확히 0이 되는 온도**가 $T_c$이다. "최댓값의 조건 $\partial^2 P/\partial v^2 = 0$" + "그 값이 0: $\partial P/\partial v = 0$"이 두 조건의 의미다. 답안에 이 설명을 붙이면 "왜 두 조건인가"라는 질문에 바로 답할 수 있다.
>
> 강의에서 쓴 다른 방법은 $(v - v_c)^3 = 0$, 즉 vdW 3차식의 세 근이 하나로 합쳐지는 조건이다. 같은 결과를 준다.

> [!warning] 2. "모든 기체가 같은 식"의 한계
> Law of corresponding states는 **vdW 기체들 사이에서는 정확**하지만, 실제 기체에는 근사적으로만 맞는다. 예를 들어 critical compressibility factor를 계산하면 다음과 같다.
> $$
> Z_c = \frac{P_cv_c}{kT_c} = \frac{a/27b^2 \cdot 3b}{8a/27b} = \frac{3}{8} = 0.375
> $$
> 실제 기체는 대략 0.23–0.31이다 (물 약 0.23, 단원자 기체 약 0.29). 이 차이는 critical point 근처의 fluctuation을 mean-field 이론인 vdW가 무시하기 때문이다. 이 내용은 phase transition 파트(Goldenfeld)로 이어진다.

> [!tip] 3. 다음 단계와의 연결
> Reduced 식에서 $a$, $b$가 사라지므로, Maxwell construction으로 구한 coexistence curve ($\tilde v_l$, $\tilde v_g$, $\tilde P^*$)도 $\tilde T$만의 함수가 된다. [[SM lecture note - Phase Equilibrium and Maxwell Construction|5주차 노트]]의 그림이 바로 이 reduced 식으로 계산한 것이다.

# 연관 노트

- [[SM lecture note - Phase Equilibrium and Maxwell Construction]]
- [[SM HW4-2 PV Isotherms of Water-Vapor Fluid]]

# 다음 문제
- [[SM HW4-5 Euler Relation for Entropy|HW4-5 Euler Relation for Entropy]]