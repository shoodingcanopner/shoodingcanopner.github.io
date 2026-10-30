---
title: SM lecture note - Thermodynamic Equilibrium and the First Law
date: "2026-10-10"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Statistical Mechanics|Statistical Mechanics]]강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

첫 강의 (1st week)

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용


## Thermodynamics라는 게 뭔가?

**Equilibrium thermodynamics**라는 것은...
**평형 상태(equilibrium)** 의 system에서 열과 물질(thermo)의 이동(dynamics)을 "현상론"적으로 다룬다.

그럼, **thermodynamic equilibrium**은 뭔가?
→ 시간이 지나도 **상태 변수(state variable)** 가 바뀌지 않는 것이다.

그럼, state variable은 뭔가?
→ 말 그대로 system의 거시적인 상태를 나타내는 변수다. 세 가지 성질을 가진다.

1. **Path independence**
	- State variable의 변화량은 system의 initial state와 final state로만 결정되며, 그 사이 변화 경로와는 무관하다.
2. **Macroscopic description**
	- System 전체의 상태를 뭉뚱그려 기술한다. 하나의 Macrosate에는 여러개의 microstate가 포함되어 있을 수 있다.
3. **Equation of state**
	- 주어진 system에서 각 state variable들은 서로 상태 방정식으로 연결되어 있다.

State variable은 특성에 따라 크게 **extensive / intensive variable** 두 가지로 구분된다.

- **Extensive**: system size에 dependent한, 규모(extent)를 나타내는 값.
- **Intensive**: system size에 independent한, 세기(intensity)를 나타내는 값.

System을 보는 관점

- **Macroscopic** → 요소가 셀 수 없을 정도로 많다. 맨눈(?)으로 볼 수 있다.
- **Microscopic** → 적은 수의 개별 입자 단위로 본다. 가능한 microstate를 셀 수 있음.

---

## Example: Ideal Gas System의 state variables

State variables
- Extensive: Volume, Entropy, Number of particle
- Intensive: Pressure, Temperature, Chemical potential

Extensive ↔ Intensive 짝 (conjugate pair)
![[Pasted image 20261010195608.png]]

| Extensive | | Intensive |
|:-:|:-:|:-:|
| $V$ | ← work → | $P$ |
| $S$ | ← heat → | $T$ |
| $N$ | ← Gibbs free energy → | $\mu$ |

> [!question] Q. 왜 chemical potential $\mu$를 두고 "partial molar Gibbs free energy"라고 부르나?
> Chemical potential을 쉽게 정의하기 위해서는, chemical potential은 유지되고, 입자수는 변할 수 있는 system을 생각하는 게 좋다. 
> 그러나, 입자가 시스템 안밖으로 이동할 수 있는 시스템이라면 보통 열의 출입도 자유롭고 부피도 달라지는 경우일 것이다. 
> 이 시스템은 고정된 온도, 고정된 압력, 고정된 chmical potential로 특정되는 것이다. 
> 따라서, T, P, N을 상태변수로 두는 에너지를 고려해야 한다. 
> 이것이 바로 Gibbs free energy이며, 이 에너지의 변화량은 $dG = -SdT+VdP+\sum^{n}_{i=1}\mu_idN_i$로 정의된다. 
> 이 정의로부터 자연스럽게, 온도와 압력이 일정할 때 Gibbs free energy의 변화가 곧 $\sum^{n}_{i=1}\mu_idN_i$이라는 점이 나온다. 
> 따라서 chemical potential의 정의는 Gibbs free energy를 dlqwk tnfh sksns rjt
> $$\mu_{i}=\left(\frac{\partial G}{\partial N_{i}}\right)_{T,P,N_{j\neq i}}$$


### State space

$X, Y, Z$가 state variable, $f(X, Y, Z) = 0$이 state equation일 때

$$
f(X, Y, Z) = 0
$$

이렇게 존재 가능한 equilibrium이 이루는 면을 state space에 나타낼 수 있다.

![[Pasted image 20261010195630.png]]

- **Thermodynamic process** → state variable이 바뀌는 것. State space에서 경로로 나타낼 수 있음.
- **Quasi-equilibrium process** → process 중 거치는 모든 상태가 equilibrium state인 것. State space에서 경로가 equation of state plane에 embed.

- **Reversible process**: 반대 방향으로 진행하는 것도 가능한 process. 
	- ==Quasi-equilibrium process이면서,== 
	- ==system과 bath 전체의 total entropy 변화가 0이어야 한다.==

### Three types of thermodynamic system

1. **Isolated (microcanonical)**: 물질, 열 교환 X
2. **Closed (canonical)**: 물질 교환 X, 열 교환 O, heat bath에 연결됨
3. **Open**: 물질, 열 교환 O

---

## Three laws of thermodynamics

### Zeroth law

### First law: Energy conservation

When number of particle is conserved,

$$
dE = \text{đ}Q + \text{đ}W
$$

$\text{đ}$ 기호는 일과 열이 state variable이 아님을 의미.

> [!warning] Notation
> - $dE > 0$: system got energy
> - $\text{đ}Q > 0$: system got heat
> - $\text{đ}W > 0$: system got work → 이게 제일 헷갈림 부호 주의
> 
> $Q$와 $W$는 state function이 아니다.

First law는 reversible / irreversible process를 분간할 수 없다.

### What is work?

Reversible process와 irreversible process를 구분못 함.

$$
\text{đ}W = \mu \, dN - P \, dV + f \, dL + \gamma \, dA + \phi \, dq + B \, dM + E \, dp
$$

| Term           | 의미                                 |
| -------------- | ---------------------------------- |
| $\mu \, dN$    | chemical potential에 의한 일           |
| $-P \, dV$     | 3D work (**부호 주의**)                |
| $f \, dL$      | 1D work, $f$: tension              |
| $\gamma \, dA$ | 2D work, $\gamma$: surface tension |
| $\phi \, dq$   | electric                           |
| $B \, dM$      | magnetic                           |
| $E \, dp$      | electric dipole                    |

일반화하면,

$$
\text{đ}W = \sum_i f_i \, dX_i
$$

- $f_i$: generalized force, intensive variable
- $dX_i$: displacement, extensive variable

---

## Reversible vs Irreversible process

Assume a canonical system.

![[Pasted image 20261010200854.png]]

### Example of irreversible process

힘 $f_1$을 갑자기 없앤다. 이 중간 과정에서 상태는 잘 정의되지 않는다.

Internal energy는 보존되어야 하므로,

$$
\frac{3}{2} N k_B T = \text{constant}
$$

Ideal gas equation $PV = N k_B T$로 인해,

$$
P_1 V_1 = P_2 V_2
$$

또한, $T dS = P dV$일 것이나... 적분 식을 정의할 수가 없다.

### Example of reversible process (quasi-static)
![[Pasted image 20261010200916.png]]
이제는 적분을 정의할 수 있다. $P = \frac{1}{V} N k_B T$를 이용하여,

$$
\Delta W = -\int_I^F P \, dV = -N k_B T \int_I^F \frac{1}{V} \, dV
$$

$$
\Delta W = N k_B T \ln\left(\frac{V_1}{V_2}\right)
$$

또한,

$$
\Delta E = \Delta Q + \Delta W = 0
$$

$$
\Delta Q = -\Delta W
$$

---

## Heat capacity of Ideal Gas

$$
C_V = \left.\frac{dE}{dT}\right|_V = \frac{d}{dT}\left(\frac{3}{2} N k_B T\right) = \frac{3}{2} N k_B
$$

$\frac{E}{N} = \frac{3}{2} k_B T$인 이유는 **"Equipartition theorem"** 때문.

- 각 자유도에 대한 에너지가 $\frac{1}{2} k_B T$를 차지.
- 3D에서 공간 이동의 자유도는 3이다.

### (+) 2-atom molecule이라면?

회전의 자유도가 2 추가.

$$
C_V = \frac{5}{2} N k_B
$$
![[Pasted image 20261010200938.png]]
> [!note] 그림
> $C_V / N$ vs $T$ 그래프. 낮은 온도에서는 $\frac{3}{2} k_B$ 근처에 머물다가, 어느 온도에서 계단처럼 올라가 $\frac{5}{2} k_B$에 수렴.

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의


# 필기 원본

![[SM 1st week.pdf]]
