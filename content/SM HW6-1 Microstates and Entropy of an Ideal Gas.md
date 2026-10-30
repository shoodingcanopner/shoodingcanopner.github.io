---
title: SM HW6-1 Microstates and Entropy of an Ideal Gas
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 6th HW, Problem 1 (1)–(4)

# 문제

$\mathcal{H} = \sum_{i=1}^{3N}\frac{p_i^2}{2m}$인 $N$-particle ideal gas에 대해 강의에서 생략한 계산을 완성하라.

1. 미시 상태 수가 $\omega/h^{3N}$임을 보여라. 여기서 $\omega = \frac{(2\pi mE)^{3N/2}}{(3N/2)!}\left(\frac{V}{h^3}\right)^N$.
2. Entropy가 다음과 같음을 보여라.
$$
S = k_B\ln\Omega = Nk_B\left\{\frac{3}{2} + \ln\left[\frac{V}{h^3}\left(\frac{4\pi mE}{3N}\right)^{3/2}\right]\right\}
$$
3. Internal energy: $\left.\frac{\partial S}{\partial E}\right|_{V,N}$
4. Equation of state: $\left.\frac{\partial S}{\partial V}\right|_{E,N}$

> [!note] 메모 (답안의 빨간 글씨)
> 문제의 $\omega$에 $h^3$이 **중복으로** 들어가 있었고, 나중에 오류 수정 공지가 올라왔다.

# 내 풀이

**(1)** 위치와 운동량은 독립이므로 $\omega = \omega_q \cdot \omega_p$이다. $\omega_q = V^N$이고, $\omega_p$는 $3N$차원 공간에서 반지름 $\sqrt{2mE}$인 구의 부피다.

$$
\omega_p = \frac{\pi^{3N/2}}{(3N/2 + 1)!}(2mE)^{3N/2} \simeq \frac{(2\pi mE)^{3N/2}}{(3N/2)!} \qquad (N \simeq N \pm 1 \text{ 근사})
$$

$$
\Omega = \frac{\omega_q\,\omega_p}{h^3} = \frac{(2\pi mE)^{3N/2}}{(3N/2)!}\left(\frac{V}{h^3}\right)^N
$$

(파란 메모: "원래 $N$개의 구분 안 되는 입자라면 $N!$의 multiplicity로 나누어야 함")

**(2)** Stirling $\ln N! \approx N(\ln N - 1)$을 써서 $S = k_BN\left[\frac{3}{2} + \ln\left\{\frac{V}{h^3}\left(\frac{4\pi mE}{3N}\right)^{3/2}\right\}\right]$

**(3)** $\left(\frac{\partial S}{\partial E}\right)_{V,N} = \frac{3Nk_B}{2E} = \frac{1}{T}$ → $E = \frac{3}{2}Nk_BT$

**(4)** $\left(\frac{\partial S}{\partial V}\right)_{E,N} = \frac{Nk_B}{V} = \frac{P}{T}$ → $PV = Nk_BT$

# 풀이 검토

**판정: (2)–(4)의 계산은 주어진 문제 기준으로 맞다. 그러나 $1/N!$이 빠진 entropy는 물리적으로 틀린 답이며(extensive하지 않음), (1)에 Gamma function 관련 오류가 있다.** 문제 자체에 오류가 있었으므로, 시험에서는 아래의 올바른 형태를 써야 한다.

> [!failure] 1. $1/N!$이 빠진 entropy는 extensive하지 않다 (Gibbs paradox)
> 답안 옆 메모대로 동종 입자는 구별할 수 없으므로, 입자를 서로 바꾼 $N!$개의 배치는 같은 미시 상태다. $N!$로 나누지 않은 결과가 틀린 이유는 다음과 같다.
> - **Extensivity 검사**: $N \to \lambda N$, $V \to \lambda V$, $E \to \lambda E$로 키우면 $E/N$은 그대로지만 $\ln V$에서 $\ln\lambda$가 남는다. 결과적으로 $S \to \lambda S + \lambda Nk_B\ln\lambda$가 되어 $\lambda S$가 아니다.
> - **Gibbs paradox**: 같은 기체가 든 두 상자 사이의 칸막이를 치우면, 거시적으로 아무것도 변하지 않았는데 $\Delta S = 2Nk_B\ln 2 > 0$이 나온다. 2주차 필기의 기체 혼합 그림과 관련된 역설이다.
>
> **올바른 결과 (Sackur–Tetrode equation)**:
> $$
> \Omega = \frac{1}{N!}\frac{(2\pi mE)^{3N/2}}{(3N/2)!}\left(\frac{V}{h^3}\right)^N
> $$
> $\ln N! \approx N\ln N - N$을 쓰면 $-N\ln N + N$이 더해져, $\ln V$가 $\ln(V/N)$으로, $\frac{3}{2}$가 $\frac{5}{2}$로 바뀐다.
> $$
> S = Nk_B\left\{\frac{5}{2} + \ln\left[\frac{V}{Nh^3}\left(\frac{4\pi mE}{3N}\right)^{3/2}\right]\right\}
> $$
> 이제 모든 extensive 변수가 $V/N$, $E/N$의 형태로만 들어가므로 $S$는 extensive하다.

> [!failure] 2. Gamma function과 factorial의 혼동
> $d$차원 구의 부피 공식 $V_d(r) = \frac{\pi^{d/2}}{\Gamma(d/2 + 1)}r^d$에서 $\Gamma(n + 1) = n!$이다. 따라서
> $$
> \Gamma\left(\frac{3N}{2} + 1\right) = \left(\frac{3N}{2}\right)!
> $$
> 이고 **근사 없이 정확히** 같다. 답안은 이를 $(3N/2 + 1)!$로 적은 뒤 "$N \simeq N \pm 1$"로 근사했다. 그러나 $(n+1)! = (n+1)\cdot n!$이라서 두 값은 $n+1$배 (약 $10^{23}$배) 차이 난다. 근사로 정당화할 수 없는 단계다. Entropy에서는 $\ln(n+1) \sim O(\ln N)$으로 무시되지만, 식 자체는 $\Gamma$를 정확히 변환해야 한다.

> [!warning] 3. $\Omega = \omega_q\omega_p/h^3$ → $h^{3N}$
> Voxel은 자유도 하나당 $h$이므로 $h^{3N}$이어야 한다. 최종 식의 $(V/h^3)^N$은 올바르게 되어 있어 표기 실수로 보인다.

> [!warning] 4. "껍질"이 아니라 "부피"로 센 것의 정당성
> 미시 상태 수는 원래 에너지 껍질 $\sigma(E)\Delta E$로 세야 하는데, 답안은 구의 **부피** $\omega$로 셌다. 고차원에서는 구의 부피 대부분이 표면 근처에 몰려 있어, 둘의 $\ln$ 차이가 $O(\ln N)$에 불과하다. 따라서 entropy의 leading order는 같다. 답안의 "면의 면적 ~ 구의 부피" 메모가 바로 이 내용이며, 한 줄의 근거를 붙이면 완전해진다 ([[SM lecture note - Ensemble Theory and Energy Hypersurface|Ensemble 노트]] AI 보충 설명 2).

> [!tip] 5. (3), (4)가 $N!$ 오류를 잡아내지 못하는 이유
> $\ln N!$은 $E$, $V$에 의존하지 않으므로 $\partial S/\partial E$와 $\partial S/\partial V$에는 영향이 없다. 그래서 $E = \frac{3}{2}Nk_BT$와 $PV = Nk_BT$는 $N!$이 있든 없든 맞게 나온다. $N!$의 효과는 **$N$으로 미분할 때**, 즉 chemical potential에서 드러난다.
> $$
> \mu = -T\left(\frac{\partial S}{\partial N}\right)_{E,V} = k_BT\ln\left(n\lambda^3\right), \qquad \lambda = \frac{h}{\sqrt{2\pi mk_BT}}
> $$
> 이것이 [[SM HW3-3 Chemical Potential of an Ideal Gas|HW3-3]]에서 열역학으로는 정하지 못했던 상수 $\mu_0$의 정체다.

> [!tip] 6. HW2-1과의 연결
> $S \supset Nk_B\ln V$ 항이 [[SM HW2-1 Entropy of an Ideal Gas|HW2-1]] Remark의 "$k_B\ln V^N$"이다. 열역학에서 얻은 $\frac{3}{2}Nk_B\ln T + Nk_B\ln V$ 구조가 미시 상태 수 세기로 재현된다.

# 연관 노트

- [[SM lecture note - Ensemble Theory and Energy Hypersurface]]
- [[이상 기체의 미시 상태 수]]
- [[microcanonical ensemble의 entropy]]
- [[SM HW2-1 Entropy of an Ideal Gas]]
- [[SM HW3-3 Chemical Potential of an Ideal Gas]]

# 다음 문제
[[SM HW6-2 Normalization of the Equilibrium One-Particle Density|HW6-2 Normalization of the Equilibrium One-Particle Density]]