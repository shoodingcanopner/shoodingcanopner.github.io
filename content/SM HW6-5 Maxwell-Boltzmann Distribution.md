---
title: SM HW6-5 Maxwell-Boltzmann Distribution
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 6th HW, Problem 5 (MB distribution 유도, 마지막 단계)

# 문제

[[SM HW6-4 Kinetic Pressure of an Ideal Gas|Prob. 4]]에서 $PV = \frac{2}{3}N\epsilon = Nk_BT$이므로 $\epsilon = \frac{3}{2}k_BT$이다. 이를 [[SM HW6-3 Average Energy and the Constant A|Prob. 3]]의 $f_1^0$에 대입하여 MB distribution을 보여라.

$$
f_1^0(\mathbf{p}) = \frac{n}{(2\pi mk_BT)^{3/2}}\exp\left[-\frac{\mathbf{p}^2}{2mk_BT}\right]
$$

# 내 풀이

$$
f_1^0(\mathbf{p}) = n\left(\frac{3}{4\pi\epsilon m}\right)^{3/2}\exp\left(-\frac{3}{4m\epsilon}\mathbf{p}^2\right) \quad \xrightarrow{\;\epsilon = \frac{3}{2}k_BT\;} \quad f_1^0(\mathbf{p}) = \frac{n}{(2\pi mk_BT)^{3/2}}\exp\left(-\frac{3}{4m\epsilon}\mathbf{p}^2\right)
$$

# 풀이 검토

**판정: 마무리가 덜 되었다.** Prefactor는 대입했지만 exponent는 대입하지 않아, 최종 식이 $\epsilon$과 $T$가 섞인 상태로 끝났다.

> [!failure] 1. Exponent에 $\epsilon = \frac{3}{2}k_BT$를 대입하지 않았다
> $$
> \frac{3}{4m\epsilon} = \frac{3}{4m\cdot\frac{3}{2}k_BT} = \frac{1}{2mk_BT}
> $$
> 따라서 최종 답은 다음과 같다.
> $$
> f_1^0(\mathbf{p}) = \frac{n}{(2\pi mk_BT)^{3/2}}\exp\left[-\frac{\mathbf{p}^2}{2mk_BT}\right]
> $$
> 문제가 "보여라"를 요구했으므로, 목표 식과 **정확히 같은 형태**로 끝내야 한다. 같은 식 안에서 변수 대입을 일부만 하면 시험에서 감점된다.

> [!tip] 2. 결과 검산 습관
> MB distribution을 얻은 뒤 다음 두 가지로 스스로 검산할 수 있다.
> - **Normalization**: $\int d^3p\,f_1^0 = n\cdot\frac{(2\pi mk_BT)^{3/2}}{(2\pi mk_BT)^{3/2}} = n$ ✓
> - **Boltzmann factor 형태**: $\exp[-\mathbf{p}^2/2mk_BT] = \exp[-E_{\text{kin}}/k_BT]$이다. 이것은 이후 canonical ensemble에서 일반적인 Boltzmann factor $e^{-\beta E}$로 다시 나온다.

> [!tip] 3. 이 유도 전체(HW6 Prob. 2–5)의 논리 구조
> 1. Boltzmann equation의 평형 조건 → $\ln f_1^0$은 충돌 불변량의 선형결합 → Gaussian 형태 ([[SM HW6-2 Normalization of the Equilibrium One-Particle Density|Prob. 2]])
> 2. Normalization으로 $C$ 결정 (Prob. 2)
> 3. 평균 에너지로 $A$ 결정 ([[SM HW6-3 Average Energy and the Constant A|Prob. 3]])
> 4. Kinetic pressure와 ideal gas law를 비교해 $\epsilon \leftrightarrow T$ 연결 ([[SM HW6-4 Kinetic Pressure of an Ideal Gas|Prob. 4]])
> 5. 대입하여 MB distribution 완성 (이 문제)
>
> 온도는 4단계에서 **외부(ideal gas law)로부터** 들어온다는 점을 기억할 것.

# 연관 노트

- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]] (Maxwell-Boltzmann distribution)
- [[SM HW6-4 Kinetic Pressure of an Ideal Gas]]
