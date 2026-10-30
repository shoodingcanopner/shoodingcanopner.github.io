---
title: 📖 Statistical Mechanics
date: 2026-10-10
subject: statistical mechanics
tags:
  - study
  - subject
class: study_subject
---
> [!info] 과목 노트
> 대학원 1학년 2학기에 수강하는 통계역학 강의 필기들

# 강의 정보 

## OT
오늘 OT만 하진... 않겠지?

- TA → 민지원 선배님 / e-mail: jwmin0724
- 과제는 책 연습문제에서 (Pathria)
- Huang 책도 참고하라.
	- Goldenfeld → phase transition
	- Kardar → 여기서도 문제 나올 예정.
- Thermodynamics 부분은 짧게
- 과제는 매주마다 한 번.

# 강의 필기

## 필기 노트 템플릿

[[SM lecture note - Template]]

## 중간고사 범위
### 강의 필기
- [[SM lecture note - Thermodynamic Equilibrium and the First Law|1st week - Thermodynamic Equilibrium and the First Law]]
- [[SM lecture note - Carnot Engine and Thermodynamic Entropy|2nd week - Carnot Engine and Thermodynamic Entropy]]
- [[SM lecture note - Free Energies and Fluctuation Theorems|3rd week - Free Energies and Fluctuation Theorems]]
- [[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium|4th week - Gibbs-Duhem Relation and Conditions for Equilibrium]]
- [[SM lecture note - Phase Equilibrium and Maxwell Construction|5th week - Phase Equilibrium and Maxwell Construction]]
- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem|6th week - Kinetic Theory and Boltzmann's H-theorem]]
- [[SM lecture note - Ensemble Theory and Energy Hypersurface|7th week - Ensemble Theory and Energy Hypersurface]]

### 과제 풀이 노트
❗표시가 있는 것은 한번 잘 볼 필요가 있는 문제들. 
이거 없는 것들은 그리 어렵지 않음음

#### **1st HW**
Ideal gas system이란 무엇인가? 여기서 온도는 어떻게 정의되는가?
- [[SM HW1-1 Ideal Gas and Absolute Temperature|HW1-1 Ideal Gas and Absolute Temperature]] 
Constant pressure에서 ideal gas의 heat capacity를 구하라. 
- [[SM HW1-2 Heat Capacity at Constant Pressure|HW1-2 Heat Capacity at Constant Pressure]]
열역학 제 0 법칙을 설명하라. 
- [[SM HW1-3 Zeroth Law of Thermodynamics|HW1-3 Zeroth Law of Thermodynamics]]
Exact differential과 path independence
- [[SM HW1-4 Exact Differential|HW1-4 Exact Differential]]

#### **2nd HW**
이상 기체의 에너지 공식 $E = \frac{3}{2}Nk_bT$를 이용해, 온도와 부피가 달라질 때 엔트로피 변화 식을 찾아라.
- [[SM HW2-1 Entropy of an Ideal Gas|HW2-1 Entropy of an Ideal Gas]]
Ideal gase의 adiabatic relation(변화 전 후 의 온도-압력, 온도-부피 의 관계) 를 구하라.
- [[SM HW2-2 Adiabatic Relations of an Ideal Gas|HW2-2 Adiabatic Relations of an Ideal Gas]]
카르노 엔진의 엔트로피 변화가 0임을 적분식으로 명확하게 보여라. (열역학적 엔트로피 정의를 이용)
- [[SM HW2-3 Carnot Cycle and Clausius Integral|HW2-3 Carnot Cycle and Clausius Integral]]
열역학 제 2 법칙에 관해 Kelcin과 Clausius 는 각각 어떻게 설명했는가?
- [[SM HW2-4 Kelvin and Clausius Statements|HW2-4 Kelvin and Clausius Statements]]
르장드르 변환의 특성. $p = f'(x)$일 때,  $f(x)$의 르장드르 변환 $g(p)$은 어떻게 생겼는가?
- [[SM HW2-5 Legendre Transformation|HW2-5 Legendre Transformation]]

#### **3rd HW**
Isobaric system에서는 enthalpy가 정의된다. $dH = dQ + \sum_i dW_i$임을 보여라. 
- [[SM HW3-1 Enthalpy and the Second Law|HW3-1 Enthalpy and the Second Law]]
고립계 속에서 박스가 두 개의 공간으로 나뉘어 있다. 이것을 가로지르는 벽이 순서대로 1. 열 교환을 허용하고, 2. 부피 교환을 허용하고, 3. 입자 교환을 허락할 때, 각 조건을 활용해서 thermal, mechanical, chemical equilibrium의 조건을 찾아라. 
- [[SM HW3-2 Conditions for Thermal Mechanical and Chemical Equilibrium|HW3-2 Conditions for Thermal, Mechanical, and Chemical Equilibrium]]
$\mu (p,T)$ 함수 구하기.
- [[SM HW3-3 Chemical Potential of an Ideal Gas|HW3-3 Chemical Potential of an Ideal Gas]]

#### **4th HW**
물분자의 phase diagram을 P-T plane에서 그리고, coexistence line, critical point, triple point가 무엇인지 설명하라. 
- [[SM HW4-1 Phase Diagram of Water|HW4-1 Phase Diagram of Water]]
 $T_c$를 기준으로 나눈 세 가지 온도 영역에서(보다 작음, 같음, 보다 큼) P V 그래프에 물의 등온 선을 그려라.
- [[SM HW4-2 PV Isotherms of Water-Vapor Fluid|HW4-2 PV Isotherms of Water-Vapor Fluid]]
Clausius-Clapeyron equation를 이용해 coexisting curve $P(T)$ 그리기
- [[SM HW4-3 Clausius-Clapeyron Coexistence Curve|HW4-3 Clausius-Clapeyron Coexistence Curve]]
Van der Waals equation of state $(P + \frac{a}{v^2})(v-b) \simeq k_bT$를 이용해서, $V_c, T_c, P_c$를 찾고, 이를 이용해서 얻은 무차원 부피, 온도, 압력 변수로 universal equation of state를 찾아라. 
- [[SM HW4-4 Van der Waals Critical Point and Corresponding States|HW4-4 Van der Waals Critical Point and Corresponding States]]
Extensive function의 특성을 이용해서, $-N \mu _ PV +E/T = S$ 임을 찾아라. 
- [[SM HW4-5 Euler Relation for Entropy|HW4-5 Euler Relation for Entropy]]

#### **5th HW**
해밀턴 역학의 시간 역전 대칭과 미시적 가역성
- [[SM HW5-1 Time Reversal Symmetry of Hamiltonian Dynamics|HW5-1 Time Reversal Symmetry of Hamiltonian Dynamics]]
Phase space density $\rho$에 대해, 연속체 방정식을 이용하여 Liouville's theorem을 유도하라. 
- [[SM HW5-2 Derivation of Liouville's Theorem|HW5-2 Derivation of Liouville's Theorem]]
Voxel of phase space in spherical coordinate
- [[SM HW5-3 Invariance of Phase Space Volume in Spherical Coordinates|HW5-3 Invariance of Phase Space Volume in Spherical Coordinates]]

#### **6th HW**
이상기체의 미시 상태 수를 구한 뒤, 엔트로피에 관한 식을 구하라.
- [[SM HW6-1 Microstates and Entropy of an Ideal Gas|HW6-1 Microstates and Entropy of an Ideal Gas]]
이상 기체의 one-particle density가 $f_1^0(\mathbf{p}) = C \exp{-A \mathbf{p}^2}$꼴의 함수를 가진다. 다음 과정을 이용해 상수 $C$와 $A$의 값을 특정하라. 

One-particle density의 normalization하여 C를 찾아라. 
[[SM HW6-2 Normalization of the Equilibrium One-Particle Density|HW6-2 Normalization of the Equilibrium One-Particle Density]]
분자 하나의 평균 에너지가 $\epsilon$임을 이용하여 $A$를 찾아라. 
[[SM HW6-3 Average Energy and the Constant A|HW6-3 Average Energy and the Constant A]]
한 면에 대한 압력이 $P$임을 이용하여 이상기체상태방정식을 찾아라. 
[[SM HW6-4 Kinetic Pressure of an Ideal Gas|HW6-4 Kinetic Pressure of an Ideal Gas]]
이상기체상태방정식을 이용해 One-particle density가 MB distribution임을 보여라. 
[[SM HW6-5 Maxwell-Boltzmann Distribution|HW6-5 Maxwell-Boltzmann Distribution]]


## 기말 고사 범위

### 강의 필기


### 과제 풀이


