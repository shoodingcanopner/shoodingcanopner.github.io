---
title: ED lecture note - electrostatics and magnetostatics
date: 2026-02-25
subject: physics
tags:
  - study
  - lecture_note
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 오늘의 핵심

학부때 배운 전자기학과 맥스웰 방정식을 간단히 복습한다. Electrostatics, insulators (dielectrics), magnetostatics의 핵심 개념과 방정식들.

---

# Notation 정리

| Symbol          | 의미                                   |
| --------------- | ------------------------------------ |
| $\vec{R}_{10}$  | $q_1$에서 $q_0$를 향하는 거리 벡터             |
| $\hat{R}$       | 거리 벡터의 단위 벡터                         |
| $R$             | 두 점 사이의 거리                           |
| $\varepsilon_0$ | 진공의 유전율 (permittivity of free space) |
| $\vec{E}$       | 전기장 (electric field)                 |
| $V$             | 스칼라 포텐셜 (scalar potential)           |
| $\rho$          | 전하 밀도 (charge density)               |
| $\vec{P}$       | 편극 밀도 (polarization density)         |
| $\sigma_b$      | 표면 bound charge 밀도                   |
| $\rho_b$        | 부피 bound charge 밀도                   |
| $\rho_{free}$   | 자유 전하 밀도                             |
| $\vec{D}$       | 전기 변위 벡터 (electric displacement)     |
| $\vec{B}$       | 자기장 (magnetic field)                 |
| $\mu_0$         | 진공의 투자율 (permeability of free space) |
| $\vec{J}$       | 전류 밀도 (current density)              |
| $\vec{v}$       | 전하의 속도                               |

---

# 필기 내용

## Electrostatics

$\vec{R}_{10}$: $q_1$부터 $q_0$까지의 거리 벡터.

Coulomb's law — test charge $Q_0$에 $q_1$이 작용하는 힘:

$$
\vec{F}_{10} = \frac{1}{4\pi\varepsilon_0} \frac{q_1}{R_1^2} Q_0 \hat{R}_{10}
$$

점전하가 여러 개 있으면 index $i$를 붙여 중첩 (superposition):

$$
\vec{F}_{total} = \frac{1}{4\pi\varepsilon_0} \sum_i \frac{Q_{0}}{R_{i0}^2} q_i \hat{R}_{i0}
$$

이 힘은 **inverse square law**를 따른다. 실험적으로 검증된 규칙. $\frac{1}{4\pi\varepsilon_0}$는 단위를 맞추고 비례성을 등식으로 만들기 위해 도입된 상수.

> 각 전하에 의한 힘이 독립적으로 작용한다는 게 얼마나 다행인가?

점전하가 아니라 전하밀도를 안다면, summation 대신 integral:

$$
\vec{F}_{total} = \frac{Q}{4\pi\varepsilon_0} \int_V \frac{\hat{R}}{R^2} \rho \, d^3v
$$

**전기장** 도입: $\vec{F}_{total} = Q\vec{E}$

$$
\vec{E} = \frac{1}{4\pi\varepsilon_0} \int_V \frac{\hat{R}}{R^2} \rho \, d^3\tau
$$

### Gauss 법칙

적분형:

$$
\oint_S \vec{E} \cdot d\vec{n} = \frac{1}{\varepsilon_0} Q_{total}
$$

$Q_{total}$은 폐면 내부 공간의 총 전하.

미분형:

$$
\nabla \cdot \vec{E} = \frac{1}{\varepsilon_0} \rho
$$

### Scalar Potential

정전기학에서 $\nabla \times \vec{E} = 0$. 폐곡선에 대해 선적분하면 $\oint \vec{E} \cdot d\vec{l} = 0$.

이는 $\vec{E}$가 어떤 함수의 gradient임을 암시한다다. 따라서:

$$
\vec{E} = -\nabla V
$$

$V$를 **scalar potential**이라고 부른다. Potential을 도입하는 이유: 벡터보다 다루기 쉽기 때문.

**Poisson 방정식** ($\rho \neq 0$):

$$
\nabla^2 V = -\frac{1}{\varepsilon_0} \rho
$$

$\rho = 0$이면 **Laplace 방정식**: $\nabla^2 V = 0$.

이 방정식으로 $V$를 구하고, $\vec{E}$를 구할 수 있다.

## Ideal Conductor

- charge가 내부에서 자유롭게 움직인다.
- charge가 힘이 없어질 때까지 움직여서 평형이 되므로, 내부에서 $\vec{E} = 0$, 전위는 constant.
- charge는 conductor surface에 머무른다. $\rho = 0$ inside the conductor.
- 표면 근처에서 $\vec{E}$는 표면과 직교한다.

## Insulators (Dielectrics)

- 모든 전하가 특정한 원자에 구속되어 있다.
- 외부에서 전기장이 주어지면 **polarize**된다. 핵은 가만히 있고 전자는 한쪽으로 쏠리므로.
- Polarization $\vec{p}$, 전기장과 비례.
- $\vec{P}$ : polarization density, 

### Dipole Moment으로부터 Potential 유도

점 dipole의 potential:

$$
V = \frac{1}{4\pi\varepsilon_0} \frac{\hat{R} \cdot \vec{p}}{R^2}
$$

연속 분포로 확장

$$
V = \frac{1}{4\pi\varepsilon_0} \int_V \frac{\hat{R} \cdot \vec{P}}{R^2} d^3\tau
$$

$\frac{\hat{R}}{R^2} = \nabla\!\left(\frac{1}{R}\right)$ 이다. 이건 알아두면 유용하다. 
$\nabla$의 곱의 규칙을 적용:

$$
V = \frac{1}{4\pi\varepsilon_0} \int_V \vec{P} \cdot \nabla\!\left(\frac{1}{R}\right) d\tau
$$

$$
= \frac{1}{4\pi\varepsilon_0} \int_V \nabla \cdot \left(\frac{1}{R}\vec{P}\right) - \frac{1}{R}(\nabla \cdot \vec{P}) \, d\tau
$$

발산 정리 적용 후:

$$
V = \frac{1}{4\pi\varepsilon_0} \oint_S \frac{1}{R} \vec{P} \cdot d\vec{a} - \frac{1}{4\pi\varepsilon_0} \int_V \frac{1}{R} (\nabla \cdot \vec{P}) \, d^3\tau
$$

이를 일반적인 potential 형태와 비교하면 **bound charges**를 정의할 수 있다. 

$$
\sigma_b = \vec{P} \cdot \hat{n}, \qquad \rho_b = -\nabla \cdot \vec{P}
$$
![[Pasted image 20260227100815.png]]
![[Pasted image 20260227100848.png]]

![[Pasted image 20260227101125.png]]
### Effective charge density와 D 벡터

$$
\rho_{effective} = \rho_{free} + \rho_{bound}
$$

Gauss 법칙에 대입:

$$
\nabla \cdot \vec{E} = \frac{1}{\varepsilon_0} \rho = \frac{1}{\varepsilon_0} \rho_{free} - \frac{1}{\varepsilon_0} \nabla \cdot \vec{P}
$$
$$
\varepsilon_0 \nabla \cdot \vec{E} + \nabla \cdot \vec{P} = \rho_{free}
$$
$$
\nabla \cdot (\varepsilon_0 \vec{E} + \vec{P}) = \rho_{free}
$$

**Electric displacement** $\vec{D}$ 정의:

$$
\vec{D} = \varepsilon_0 \vec{E} + \vec{P}
$$

**Dielectric material 안에서의 Gauss 법칙:**

$$
\nabla \cdot \vec{D} = \rho_{free}
$$

---

## Magnetostatics

같은 방향 전류: 도선끼리 끌리고. 
다른 방향 전류: 도선끼리 밀린다.

### Lorentz Force

자기력만:

$$
\vec{F} = Q(\vec{v} \times \vec{B})
$$

전기력까지 합치면 **Lorentz force**:

$$
\vec{F} = Q(\vec{E} + \vec{v} \times \vec{B})
$$

### Biot-Savart Law

$$
\vec{B} = \frac{\mu_0}{4\pi} \int \frac{\vec{I} \times \hat{R}}{R^2} \, dl
$$

### Current Density

$$
\frac{d\vec{I}}{da} = \vec{J} = \rho \vec{v}
$$

$$
\vec{I} = \int \vec{J} \cdot d\vec{a}
$$

폐면에 대한 flux: $\oint_S \vec{J} \cdot d\vec{a}$ = 내부에서 전하가 흘러나오는 정도.

발산 정리로:

$$
\oint_S \vec{J} \cdot d\vec{a} = \int_V \nabla \cdot \vec{J} \, d^3v = -\frac{d}{dt} Q_{total} = -\frac{d}{dt} \int_V \rho \, d^3v
$$

**Continuity equation:**

$$
\nabla \cdot \vec{J} = -\frac{d\rho}{dt}
$$

---

# 궁금한 내용

### 도체 표면의 곡률과 전하 분포 사이의 관계는?

**핵심: 곡률이 클수록 전하 밀도가 높다.**

Conductor 표면에서 전기장은 항상 표면에 수직이고:

$$
E = \frac{\sigma}{\varepsilon_0}
$$

### 간단한 모델: 두 구의 연결

반지름이 다른 두 구 $r_1 \ll r_2$가 도선으로 연결된 상황. 같은 conductor이므로 전위 $V$가 같아야 한다:

$$
V = \frac{Q_1}{4\pi\varepsilon_0 r_1} = \frac{Q_2}{4\pi\varepsilon_0 r_2}
$$

> **왜 전위를 이렇게 구하는가?**
> - **전제 1**: 균일하게 대전된 구의 표면 전위는 $V = \frac{Q}{4\pi\varepsilon_0 r}$. Poisson 방정식을 구 대칭으로 풀면 나오는 결과로, 구 외부에서 전하가 중심에 몰려 있는 것처럼 행동하기 때문에 점전하 공식과 동일한 형태.
> - **전제 2**: 도선으로 연결된 conductor는 등전위. 전위 차이가 있으면 전하가 흘러 평형을 맞추므로 $V_1 = V_2$.
> - **가정**: 두 구가 충분히 멀리 떨어져 있어 서로의 전기장이 상대방 전하 분포에 영향을 주지 않음. 가까이 있으면 유도 효과로 계산이 복잡해짐.

따라서 $\frac{Q_1}{Q_2} = \frac{r_1}{r_2}$. 표면 전하 밀도를 비교하면:

$$
\frac{\sigma_1}{\sigma_2} = \frac{Q_1}{Q_2} \cdot \frac{r_2^2}{r_1^2} = \frac{r_2}{r_1}
$$

$r_1 < r_2$이면 $\sigma_1 > \sigma_2$. 표면 전기장도 동일한 비율로:

$$
\frac{E_1}{E_2} = \frac{r_2}{r_1}
$$

### 일반적인 경우

임의의 conductor 표면에서 평균 곡률 $\kappa \sim \frac{1}{r}$와 전하 밀도는 정성적으로:

$$
\sigma \propto \kappa
$$

**응용 — 피뢰침의 원리**: 뾰족한 끝부분은 곡률이 매우 크므로 전하가 집중되고 전기장이 극도로 강해진다. 전기장이 임계값을 넘으면 공기가 이온화되어 방전이 일어남.

### 물리적 직관

Conductor 내부에서 $\vec{E} = 0$이 되려면, 표면 전하들이 만드는 전기장이 서로 상쇄되어야 한다. 뾰족한 곳에서는 전하들이 좁은 영역에 몰려 있어 내부 방향으로의 전기장 기여가 커지기 때문에, 더 많은 전하가 있어야 상쇄가 가능하다. 결과적으로 평형 상태에서 곡률이 큰 곳에 전하가 몰리게 된다.

# AI의 보충 설명


# 연관 학습 노트

- [[Electrodynamics 그 모든 것]]

# References

강의 ppt 링크를 이곳에
