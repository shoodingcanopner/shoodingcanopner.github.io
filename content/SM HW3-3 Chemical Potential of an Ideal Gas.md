---
title: SM HW3-3 Chemical Potential of an Ideal Gas
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 3rd HW, Problem 3 

# 문제

Ideal gas의 chemical potential을 구하라.

(1) Gibbs–Duhem relation $d\mu(p, T) = -\frac{S}{N}dT + \frac{V}{N}dp$에 이전 과제의 entropy를 넣으면 다음과 같다.

$$
d\mu(p, T) = -k_B\left(S_0 + \ln\left\{\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right\}\right)dT + k_BT\frac{dP}{P}
$$

(2) $(p_0, T_0) \to (p_0, T)$ (isobaric), $(p_0, T) \to (p, T)$ (isothermal)로 적분하여 다음을 보여라.

$$
\mu(p, T) = \mu_0 - k_BT\ln\left\{\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right\} + \left(\frac{5}{2} - S_0\right)k_B(T - T_0)
$$

(3) $E = TS - pV + \mu N$을 이용해 $\mu_0 = \left(\frac{5}{2} - S_0\right)k_BT_0$를 보여라.

(4) 최종적으로 $\mu(p, T) = k_BT\left[\frac{\mu_0}{k_BT_0} - \ln\left\{\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right\}\right]$를 보여라.

# 내 풀이

## (1) Gibbs–Duhem에 대입

지난 과제의 결과를 가져온다.

$$
\frac{S}{N} = k_B\left[S_0 + \ln\left(\left(\frac{T}{T_0}\right)^{5/2}\left(\frac{P}{P_0}\right)\right)\right]
$$

Ideal gas equation에 의해,

$$
\frac{V}{N} = \frac{k_BT}{P}
$$

두 식을 $d\mu = -\frac{S}{N}dT + \frac{V}{N}dP$에 대입하면,

$$
d\mu = -k_B\left[S_0 + \ln\left(\left(\frac{T}{T_0}\right)^{5/2}\left(\frac{P}{P_0}\right)\right)\right]dT + \frac{k_BT}{P}dP
$$

## (2) Path integral

**(a) Isobaric $(P_0, T_0) \to (P_0, T)$**

압력이 같기에, $\frac{P_0}{P} = 1$, $dP = 0$.

$$
\Delta\mu_a = -k_B\int_{T_0}^{T}\left[S_0 + \frac{5}{2}\ln\frac{T'}{T_0}\right]dT'
$$

다음 적분을 이용한다.

$$
\int \ln\left(\frac{T'}{T_0}\right)dT' = T'\ln\left(\frac{T'}{T_0}\right) - T'
$$

$$
\Delta\mu_a = -k_BS_0(T - T_0) - \frac{5}{2}k_B\left[T\ln\frac{T}{T_0} - T + T_0\right]
$$

**(b) Isothermal $(P_0, T) \to (P, T)$**

$dT = 0$이므로, 간단해진다.

$$
\Delta\mu_b = k_BT\int_{P_0}^{P}\frac{dP'}{P'} = k_BT\ln\frac{P}{P_0} = \frac{5}{2}k_BT\ln\left(\frac{P}{P_0}\right)^{2/5}
$$

**합치기**

$$
\mu(P, T) = \mu_0 + \Delta\mu_a + \Delta\mu_b = \mu_0 - k_BT\ln\left[\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right] + \left(\frac{5}{2} - S_0\right)k_B(T - T_0)
$$

## (3) $\mu_0$ 구하기

$E = TS - PV + \mu N$에 $E = \frac{3}{2}Nk_BT$, $PV = Nk_BT$ 대입,

$$
\frac{3}{2}Nk_BT = TS - Nk_BT + \mu N
$$

$$
\mu = \frac{1}{N}\left(\frac{5}{2}Nk_BT - TS\right) = \frac{5}{2}k_BT - T\frac{S}{N}
$$

$\frac{S}{N} = k_B\left[S_0 + \ln\left(\left(\frac{T}{T_0}\right)^{5/2}\left(\frac{P}{P_0}\right)\right)\right]$에 $S = S_0$, $T = T_0$ 대입,

$$
\frac{S_0}{N} = k_BS_0 + k_B\ln(1) = k_BS_0
$$

따라서,

$$
\mu_0 = \frac{5}{2}k_BT_0 - T_0k_BS_0 = \left(\frac{5}{2} - S_0\right)k_BT_0
$$

이다.

## (4) 최종 식

(3)의 결과를 (2)에 대입. $\left(\frac{5}{2} - S_0\right)k_B = \frac{\mu_0}{T_0}$이므로,

$$
\mu(P, T) = \mu_0 + \frac{\mu_0}{T_0}(T - T_0) - k_BT\ln\left[\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right]
$$

$$
= \mu_0\frac{T}{T_0} - k_BT\ln\left[\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right]
$$

$$
= k_BT\left[\frac{\mu_0}{k_BT_0} - \ln\left(\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right)\right]
$$

# 풀이 검토

**판정: (2)–(4)의 최종 결과는 모두 맞다. 그러나 (1)의 출발식에 부호 오류가 있고, 이것이 결과에 드러나지 않은 것은 우연이다.**

> [!failure] 1. Entropy 식의 압력 비율이 뒤집혔다: $P/P_0$ → $P_0/P$
> [[SM HW2-1 Entropy of an Ideal Gas|HW2-1]]의 $S = Nk_B\ln\left\{(T/T_0)^{3/2}(V/V_0)\right\}$에 $V/V_0 = (T/T_0)(P_0/P)$를 넣으면 다음이 나온다.
> $$
> \frac{S}{N} = k_B\left[S_0 + \ln\left\{\left(\frac{T}{T_0}\right)^{5/2}\frac{P_0}{P}\right\}\right]
> $$
> 답안의 식대로라면 **압력을 높일수록 entropy가 커진다**. 하지만 압축하면 위치 자유도가 줄어 entropy는 감소해야 한다. 물리적 직관으로 바로 걸러낼 수 있는 오류다.
>
> 이 오류가 결과에 드러나지 않은 이유는 다음과 같다.
> - (2a)는 $P = P_0$인 isobaric 경로라서 비율이 1이 된다.
> - (2b)는 entropy가 아니라 $V/N$ 항만 쓴다.
> - (3)은 기준점 $(P_0, T_0)$에서 계산해서 $\ln 1 = 0$이 된다.
>
> 결과적으로 (1)에 쓴 $d\mu$ 식 자체는 문제의 주어진 식과 다르다 (틀린 식이다).

> [!warning] 2. (3)의 대입 서술
> "$S = S_0$, $T = T_0$ 대입"이라고 썼지만, 대입하는 것은 **$P = P_0$, $T = T_0$**이다. $S_0$는 대입하는 변수가 아니라, 기준점에서의 particle당 entropy를 $k_B$ 단위로 쓴 **무차원 상수**다.

> [!tip] 3. 경로 선택에 대해
> $\mu$는 state function이므로 어떤 경로로 적분해도 된다. Isobaric 다음 isothermal을 택한 것은 각 구간에서 $dP = 0$ 또는 $dT = 0$이 되어 적분이 쉬워지기 때문이다. $\int\ln(T'/T_0)\,dT' = T'\ln(T'/T_0) - T'$의 사용도 정확하다.

> [!tip] 4. 열역학의 한계와 통계역학의 답
> 이 문제의 결과에는 정해지지 않은 상수 $S_0$ (또는 $\mu_0$)가 남는다. 열역학은 **차이**만 정할 수 있기 때문이다 (문제의 "chemical potential difference is important"). 통계역학에서 $1/N!$을 포함한 Sackur–Tetrode entropy ([[SM HW6-1 Microstates and Entropy of an Ideal Gas|HW6-1]])를 쓰면 상수까지 정해진다.
> $$
> \mu = k_BT\ln\left(n\lambda^3\right), \qquad \lambda = \frac{h}{\sqrt{2\pi mk_BT}}, \quad n = \frac{N}{V} = \frac{P}{k_BT}
> $$
> 이 식은 $P$에 대해 $k_BT\ln P$, $T$에 대해 $-\frac{5}{2}k_BT\ln T$로 의존하는데, 이는 이 과제 결과와 정확히 일치한다.

# 연관 노트

- [[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium]]
- [[SM HW2-1 Entropy of an Ideal Gas]]
- [[SM HW4-5 Euler Relation for Entropy]] ($E = TS - PV + \mu N$의 근거)

# 다음 문제
- [[SM HW4-1 Phase Diagram of Water|HW4-1 Phase Diagram of Water]]