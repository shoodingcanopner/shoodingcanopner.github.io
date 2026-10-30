---
title: SM HW1-4 Exact Differential
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 1st HW, Problem 4

# 문제

$df = P(x, y)\,dx + Q(x, y)\,dy$가 다음과 같이 쓰일 때 exact differential이며, 이때 $\int df$는 path-independent하다.

$$
df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy
$$

$df$가 exact differential이 되기 위한 $P$와 $Q$의 관계를 찾아라.

# 내 풀이
$$
P(x, y) = \frac{\partial f}{\partial x},  \qquad Q(x,y) = \frac{\partial f}{\partial y}
$$


$P = \partial f/\partial x$, $Q = \partial f/\partial y$이고, smooth function에서는 미분 순서가 상관없으므로

$$
\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 f}{\partial x \partial y} \quad \Rightarrow \quad \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
$$

# 풀이 검토

**판정: 결론은 맞지만, 증명한 것은 절반(필요조건)뿐이다.**

> [!failure] 1. 필요조건만 보였고 충분조건은 보이지 않았다
> 답안의 논리는 "**$df$가 exact라면** $\partial P/\partial y = \partial Q/\partial x$"이다. 문제가 묻는 것은 "**exact하게 만드는** 조건"이므로, 반대 방향이 핵심이다. 즉 "$\partial P/\partial y = \partial Q/\partial x$이면 $f$가 존재한다"를 보여야 한다.
>
> **충분조건의 증명 (Green's theorem)**: 영역 안의 임의의 closed loop $C$와 그 내부 $D$에 대해
> $$
> \oint_C (P\,dx + Q\,dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA = 0
> $$
> 따라서 선적분이 경로에 무관하다. 그러면 기준점 $(x_0, y_0)$에서 출발하는 적분으로 $f$를 정의할 수 있다.
> $$
> f(x, y) = \int_{(x_0, y_0)}^{(x, y)} (P\,dx + Q\,dy)
> $$

> [!failure] 2. 영역에 대한 조건(simply connected)이 빠졌다
> 위 증명에서 loop의 내부 $D$ 전체에서 $P$, $Q$가 정의되어 있어야 한다. 이 조건이 깨지면 충분조건이 성립하지 않는다.
>
> **반례**: 원점을 뺀 평면에서
> $$
> P = \frac{-y}{x^2 + y^2}, \qquad Q = \frac{x}{x^2 + y^2}
> $$
> 이면 $\partial P/\partial y = \partial Q/\partial x$가 성립하지만, 원점을 한 바퀴 도는 적분은 $2\pi$이다 ($d\theta$). 정확한 명제는 다음과 같다.
> - **Simply connected 영역**에서 $\partial P/\partial y = \partial Q/\partial x$ ⟺ $df$가 exact

> [!warning] 3. "Smooth"의 정확한 조건
> 미분 순서 교환(Schwarz/Clairaut theorem)에는 **second partial derivative의 연속성**이면 충분하다. 답안의 "smooth"는 이를 포함하므로 틀리지는 않았다.

> [!tip] 4. 열역학에서의 의미
> Ideal gas에서 $\text{đ}Q = C_V\,dT + \frac{Nk_BT}{V}dV$는 $\frac{\partial C_V}{\partial V} = 0 \neq \frac{Nk_B}{V}$이므로 exact하지 않다. 그러나 $1/T$를 곱하면 $dS = \frac{C_V}{T}dT + \frac{Nk_B}{V}dV$가 되어 조건을 만족한다. 즉 **$1/T$는 $\text{đ}Q$의 integrating factor**다. 이 내용은 2주차의 "$dS$ is exact differential (시험에 나온다)"와 Maxwell relation(4주차)의 수학적 근거다.

# 연관 노트

- [[SM lecture note - Carnot Engine and Thermodynamic Entropy]] (Path independency of entropy)
- [[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium]] (Maxwell relation = mixed partial 등식)

# 다음 문제
- [[SM HW2-1 Entropy of an Ideal Gas|HW2-1 Entropy of an Ideal Gas]]
