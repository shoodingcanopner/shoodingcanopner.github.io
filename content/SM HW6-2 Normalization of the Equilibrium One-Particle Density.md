---
title: SM HW6-2 Normalization of the Equilibrium One-Particle Density
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 6th HW, Problem 2 (Boltzmann equation에서 MB distribution 유도, 1단계)

# 문제 배경

평형($t \to \infty$, $dH/dt = 0$)에서 Boltzmann equation의 조건은

$$
\ln f_1^0(\mathbf{p}_1) + \ln f_1^0(\mathbf{p}_2) = \ln f_1^0(\mathbf{p}_1') + \ln f_1^0(\mathbf{p}_2')
$$

이다. 따라서 $f_1^0$는 충돌에서 보존되는 양의 함수이고, $f_1^0(\mathbf{p}) = C\exp[-A\mathbf{p}^2]$로 가정한다.

# 문제

Particle density $n (= N/V)$에 대해 $\int d^3p\,f_1^0(\mathbf{p}) = n$이다. 다음을 보여라.

$$
f_1^0(\mathbf{p}) = n\left(\frac{A}{\pi}\right)^{3/2}\exp\left[-A\mathbf{p}^2\right]
$$

# 내 풀이

Normalization으로 $C$를 찾는 과정. Gaussian integral $\int_{-\infty}^{\infty}e^{-x^2/a}dx = \sqrt{a\pi}$를 사용하고, $x$, $y$, $z$가 동등하므로

$$
\int d^3p\,f_1^0(\mathbf{p}) = C\left[\int dp_x\,C\exp(-Ap_x^2)\right]^3 = C\left(\frac{\pi}{A}\right)^{3/2} = n \quad \Rightarrow \quad C = n\left(\frac{A}{\pi}\right)^{3/2}
$$

(메모: "$n = N/V$ 헷갈릴 뻔")

# 풀이 검토

**판정: 결과가 맞다.** 식 한 줄의 표기만 고치면 된다.

> [!warning] 1. 대괄호 안의 $C$가 중복되었다
> $C\left[\int dp_x\,C\exp(-Ap_x^2)\right]^3$로 쓰면 $C^4$가 된다. 올바른 식은 다음과 같다.
> $$
> C\left[\int_{-\infty}^{\infty}dp_x\,e^{-Ap_x^2}\right]^3 = C\left(\frac{\pi}{A}\right)^{3/2}
> $$
> 다음 줄 결과는 올바르게 썼으므로 옮겨 적다 생긴 실수로 보인다.

> [!tip] 2. "$n$으로 normalize"의 의미 (메모의 "헷갈릴 뻔"에 대해)
> $f_1$은 **확률밀도가 아니라** $\mu$-space(한 입자의 위치–운동량 공간)에서의 **입자 수 밀도**다. 그래서 운동량으로 적분하면 1이 아니라 공간 밀도 $n(\mathbf{x})$가 나오고, 위치까지 적분하면 $N$이 나온다. 강의 필기의 "입자 하나가 $p$를 가질 확률 → 아님, $p$를 가지는 입자의 평균적인 개수 → 맞음"과 같은 이야기다 ([[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]).

> [!tip] 3. 가정 $f_1^0 = Ce^{-A\mathbf{p}^2}$에 숨은 것
> 충돌 불변량의 일반적인 조합은 $\ln f_1^0 = a - \boldsymbol{\alpha}\cdot\mathbf{p} - \beta\frac{\mathbf{p}^2}{2m}$이다 (입자 수, 운동량, 에너지). $\boldsymbol{\alpha}$ 항을 버린 것은 **기체 전체가 정지해 있는**(평균 운동량 0) 기준계를 택했다는 뜻이다. $\boldsymbol{\alpha} \neq 0$이면 중심이 $\mathbf{p}_0$로 이동한 drifting Maxwellian이 된다.

# 연관 노트

- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]
- [[SM HW6-3 Average Energy and the Constant A]]

# 다음 문제
[[SM HW6-3 Average Energy and the Constant A|HW6-3 Average Energy and the Constant A]]