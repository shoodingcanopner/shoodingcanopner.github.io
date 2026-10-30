---
title: SM HW1-1 Ideal Gas and Absolute Temperature
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 1st HW, Problem 1

# 문제

Thermodynamics에서 정의되는 **ideal gas system**과 **absolute temperature**를 설명하라. (Reference book을 찾아볼 것)

# 내 풀이

- **Ideal gas system**: 매우 많은 수의 "ideal particle"이 공간에 갇힌 계. Ideal particle의 세 가지 성질:
	1. 입자 사이에 potential이 없다.
	2. 입자는 무시할 수 있을 만큼 작다.
	3. 항상 elastic collision을 한다.
- **Absolute temperature**: absolute zero에 고정된 온도 scale로, internal thermal kinetic energy를 측정한다. Ideal particle의 평균 병진 운동에너지에 비례한다 (3D).

$$
\left\langle \frac{1}{2}mv^2 \right\rangle = \frac{3}{2}k_B T
$$

- Ideal gas는 absolute temperature를 포함한 ideal gas law를 따른다.

$$
PV = N k_B T
$$

> [!quote] 채점 코멘트
> Definition of absolute temperature should be originated from reversible Carnot engine or $dS/dE$.

# 풀이 검토

> [!failure] 1. 온도를 thermodynamics가 아니라 kinetic theory의 결과로 정의했다 (감점의 핵심)
> 문제는 "**thermodynamics에서 정의되는**" absolute temperature를 묻는다. 그런데 $\langle \frac{1}{2}mv^2 \rangle = \frac{3}{2}k_BT$는 정의가 아니라, **classical ideal gas + equipartition theorem**에서만 성립하는 **결과**다. 게다가 equipartition을 유도하려면 이미 $T$가 정의되어 있어야 하므로(Boltzmann factor $e^{-E/k_BT}$), 이것을 온도의 정의로 쓰면 **순환논리**가 된다.
>
> Thermodynamics의 정의는 다음 두 가지다.
> - **Kelvin scale (reversible Carnot engine)**: Carnot's theorem에 의해 reversible engine의 효율은 작동 물질과 무관하게 두 reservoir에만 의존한다. 따라서 온도를 다음과 같이 **물질과 무관하게** 정의할 수 있다.
> $$
> \frac{Q_1}{Q_2} = \frac{T_1}{T_2}
> $$
> - **Entropy로부터의 정의**:
> $$
> \frac{1}{T} = \left(\frac{\partial S}{\partial E}\right)_{V,N}
> $$
>
> 덧붙여, ideal gas thermometer로 정의한 온도 $T = \lim_{n \to 0} PV/Nk_B$가 Kelvin scale과 일치한다는 것은 [[SM HW2-3 Carnot Cycle and Clausius Integral|HW2-3]]의 계산($Q_1/Q_2 = T_1/T_2$)으로 확인된다.

> [!failure] 2. "Temperature measures internal thermal kinetic energy"는 일반적으로 틀린 명제다
> 온도는 에너지 그 자체가 아니라, **열접촉 시 같아지는 양**($\partial S/\partial E$)이다. 반례는 다음과 같다.
> - **Fermi gas**: $T = 0$에서도 Fermi energy만큼의 큰 kinetic energy를 가진다.
> - **Spin system**: 에너지에 상한이 있으면 음의 온도가 가능하다 ([[SM lecture note - Carnot Engine and Thermodynamic Entropy|2주차 노트]] Q5).
> - **Diatomic gas의 진동 자유도**: 낮은 온도에서 얼어붙어 equipartition이 깨진다 ([[SM lecture note - Thermodynamic Equilibrium and the First Law|1주차 노트]]의 $C_V$ 계단).

> [!warning] 3. Ideal gas의 thermodynamic 정의가 빠졌다
> 답안의 세 성질은 **microscopic 모델**(kinetic theory)이다. Thermodynamics는 미시 구조를 가정하지 않으므로, ideal gas를 거시적 성질로 정의한다.
> 1. Equation of state: $PV = Nk_BT$
> 2. Internal energy가 온도만의 함수: $E = E(T)$, 즉 $\left(\partial E / \partial V\right)_T = 0$ (Joule's law)
>
> 실제 기체는 dilute limit ($n \to 0$)에서 이 성질에 수렴한다.

> [!warning] 4. "No potential"과 "elastic collision"은 서로 긴장 관계에 있다
> 상호작용이 정말로 전혀 없다면 충돌도 없고, 계가 평형에 도달할 수단이 없다. 정확한 그림은 다음과 같다. 상호작용은 **아주 짧고 드물어서 에너지에는 기여하지 않지만**, 에너지와 운동량을 재분배해 **평형(equilibration)을 일으키는** 역할은 한다. 이것이 Boltzmann equation의 collision term이 하는 일이다 ([[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]).

> [!tip] 보완: "Absolute"의 의미
> Absolute scale은 영점이 관례가 아니라 **물리적으로 정해진다**는 뜻이다. Carnot 관계식 $Q_1/Q_2 = T_1/T_2$에서 $Q_1 \ge 0$이므로 $T \ge 0$이고(양의 온도 영역에서), $T_1 \to 0$이면 버리는 열이 0이 된다. 역사적으로는 물의 triple point를 273.16 K로 고정해 단위를 정했다. 2019년 SI 재정의 이후에는 $k_B$의 값을 정확히 고정하여 kelvin을 정의한다.

# 연관 노트

- [[SM lecture note - Thermodynamic Equilibrium and the First Law]]
- [[SM lecture note - Carnot Engine and Thermodynamic Entropy]] (AI의 보충 설명 Q2: thermodynamic temperature scale)
- [[SM HW2-3 Carnot Cycle and Clausius Integral]]
- [[SM HW6-4 Kinetic Pressure of an Ideal Gas]] (kinetic theory에서 $\epsilon = \frac{3}{2}k_BT$가 어떻게 나오는가)

# 다음 문제
- [[SM HW1-2 Heat Capacity at Constant Pressure|HW1-2 Heat Capacity at Constant Pressure]]