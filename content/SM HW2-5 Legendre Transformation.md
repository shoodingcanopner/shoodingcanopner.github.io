---
title: SM HW2-5 Legendre Transformation
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 2nd HW, Problem 5

# 문제

(1) Legendre transformation $g(p) = f(x) - xp$, $p = \partial f/\partial x = f'(x)$에 대한 수학적 설명을 하라. $g$가 다음과 같음을 보여라.

$$
g(p) = f(f'^{-1}(p)) - f'^{-1}(p)\,p
$$

즉 $f'(x)$의 역함수 존재와 $p$로의 one-to-one mapping이 결정적이다.

(2) $f(x) = x^2$, $p = f'(x)$일 때 $g = f(x) - xp$를 $p$의 함수로 구하라. Inverse transformation $f = g + xp$로 원래 함수 $f(x)$를 되찾을 수 있음을 보여라.

# 내 풀이

(1) $p = f'(x) \Leftrightarrow x = f'^{-1}(p)$ (역함수의 성질 $F(a) = b \Leftrightarrow a = F^{-1}(b)$). 따라서 $f(x) = f(f'^{-1}(p))$이고 문제의 식이 나온다.

(2) $p = 2x$, $x = p/2$, $f = \frac{1}{4}p^2$, $xp = \frac{1}{2}p^2$이므로 $g(p) = -\frac{1}{4}p^2$. 역변환: $f(x) = g(p) + xp = -x^2 + 2x^2 = x^2$

# 풀이 검토

**판정: (2)의 계산 결과는 맞다.** 그러나 (1)은 문제가 강조한 핵심을 다루지 않았고, (2)의 역변환은 논리가 순환적이다.

> [!failure] 1. (1)에서 "언제 역함수가 존재하는가"를 다루지 않았다
> 문제가 "crucial"이라고 강조한 것은 **$f'$의 역함수가 존재할 조건**이다. 답안은 역함수가 존재한다고 가정하고 대입만 했다.
> - $f'$가 one-to-one이려면 **strictly monotonic**이어야 한다. 이는 $f'' > 0$ (strictly convex) 또는 $f'' < 0$ (strictly concave)과 같다.
> - $f''$의 부호가 바뀌면 하나의 $p$에 여러 $x$가 대응하고, $g(p)$는 여러 가지(branch)를 가진 다가함수가 된다.
>
> 이것이 바로 [[SM lecture note - Phase Equilibrium and Maxwell Construction|5주차]] vdW의 상황이다. vdW의 $F(V)$는 convex하지 않은 구간이 있어서, $G = F + PV$로 Legendre 변환하면 하나의 $P$에 세 개의 $V$가 대응한다. Maxwell construction(convex hull)은 이 문제를 해결하는 방법이다.

> [!failure] 2. $g$가 정말로 $p$만의 함수라는 것을 보이지 않았다
> Legendre 변환의 핵심 성질은 미분을 해 봐야 드러난다.
> $$
> dg = f'(x)\,dx - p\,dx - x\,dp = -x\,dp \qquad (\because f'(x) = p)
> $$
> 따라서 $g$는 $x$에 의존하지 않고, $g'(p) = -x$이다. 열역학에서 $F = E - TS$의 $dF = -S\,dT + \cdots$와 정확히 같은 구조다 ([[SM lecture note - Free Energies and Fluctuation Theorems|3주차]]). "변수를 conjugate 변수로 바꾸고, 새 함수의 미분이 원래 변수를 돌려준다"는 이 성질이 설명의 중심이어야 한다.

> [!failure] 3. (2)의 역변환이 순환적이다
> 답안은 $g(p) + xp$에 **정변환에서 알고 있던** $p = 2x$를 대입했다. 그러나 역변환이 "성공적으로 $f$를 되찾는다"를 보이려면, **$g$만 가지고** $x$와 $p$의 관계를 알아내야 한다.
> $$
> x = -g'(p) = -\frac{d}{dp}\left(-\frac{p^2}{4}\right) = \frac{p}{2} \quad \Rightarrow \quad p = 2x
> $$
> $$
> f = g + xp = -\frac{(2x)^2}{4} + x(2x) = x^2
> $$
> 결과는 같지만, $x = -g'(p)$라는 단계가 바로 역변환의 내용이다. 이 단계가 Legendre 변환이 **involution**(두 번 하면 원래대로)이라는 것을 보여준다.

> [!tip] 4. 부호 convention
> 수학에서는 보통 $g(p) = xp - f(x)$로 정의하고, 그러면 $g$는 다시 convex가 된다. 이 강의와 열역학($F = E - TS$)은 $f - xp$ convention을 쓰므로, convex한 $f$가 concave한 $g$로 바뀐다 (예: $g = -p^2/4$). 강의에서 쓰는 convention을 유지할 것.

# 연관 노트

- [[열역학 자연변수와 르장드르 변환]]
- [[SM lecture note - Free Energies and Fluctuation Theorems]]
- [[SM lecture note - Phase Equilibrium and Maxwell Construction]]

# 다음 문제
- [[SM HW3-1 Enthalpy and the Second Law|HW3-1 Enthalpy and the Second Law]]