---
title: "Liouville's Theorem"
date: "2025-11-29"
subject: physics
tags:
  - study
  - concept
  - statistical-mechanics
  - hamiltonian-mechanics
  - phase-space
class: study
---

# Liouville's Theorem

## 기호표

| 기호 | 의미 |
|------|------|
| $\rho(q, p, t)$ | 위상공간에서의 확률밀도 함수 |
| $\Omega$ | 위상공간 (phase space) |
| $H$ | 해밀토니안 (총 에너지) |
| $\{f, g\}$ | 푸아송 괄호 (Poisson bracket) |
| $\dot{q}_i, \dot{p}_i$ | 정준 좌표의 시간 미분 |
| $\frac{d}{dt}$ | 전미분 (total derivative) |
| $\frac{\partial}{\partial t}$ | 편미분 (partial derivative) |

## Overview

Liouville's theorem은 해밀턴 역학에서 위상공간의 확률밀도 함수가 어떻게 시간에 따라 진화하는지를 기술하는 핵심 정리이다. 이 정리의 본질은 **위상공간 위 밀도 함수가 연속체 방정식(continuity equation)을 따른다**는 것이며, 이는 유체역학에서의 질량 보존과 정확히 같은 구조를 가진다. 또한 밀도 함수의 시간 진화가 해밀토니안과의 푸아송 괄호로 표현된다는 점도 매우 인상적이다.

## Key Points

### 1. Liouville 방정식: 연속체 방정식 형태

위상공간 $\Omega$에서 확률밀도 $\rho(q, p, t)$는 다음을 만족한다:

$$\frac{\partial \rho}{\partial t} + \sum_i \left( \frac{\partial}{\partial q_i}(\dot{q}_i \rho) + \frac{\partial}{\partial p_i}(\dot{p}_i \rho) \right) = 0 \tag{1}$$
여기에 해밀턴 방정식을 대입하면
$$\frac{\partial \rho}{\partial t} + \sum_i \left( \dot{q}_i \frac{\partial \rho}{\partial q_i} + \dot{p}_i \frac{\partial \rho}{\partial p_i} \right) = 0 \tag{5}$$
꼴의 식이 나오며, 보통 이 표현으로 더 많이 쓰인다. 

(1)식은 **연속체 방정식(continuity equation)** 과 동일한 형태:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0 \tag{2}$$

여기서 위상공간의 "속도장(위상 공간의 모든 변수의 시간 변화율)"은 $\mathbf{v} = (\dot{q}_1, ..., \dot{q}_n, \dot{p}_1, ..., \dot{p}_n)$
$\rho \mathbf{v}$는 "흐름장"이라고 생각할 수 있으려나? 흐름장의 발산의 음수는 그 위치 밀도의 시간 변화. 
흐름장이 발산하면 그곳의 밀도는 줄어들테지. 

**물리적 의미:**
- 위상공간에서 확률 "유체"가 흐른다
- 확률은 생성되거나 소멸되지 않고 보존된다 (확률 밀도는 비압축 유체다다)
- 해밀턴 흐름을 따라 이동할 뿐

### 2. 위상공간 부피 보존

해밀턴 방정식에서:

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i} \tag{3}$$

따라서:

$$\sum_i \left( \frac{\partial \dot{q}_i}{\partial q_i} + \frac{\partial \dot{p}_i}{\partial p_i} \right) = \sum_i \left( \frac{\partial^2 H}{\partial q_i \partial p_i} - \frac{\partial^2 H}{\partial p_i \partial q_i} \right) = 0 \tag{4}$$

이를 식 (1)에 대입하면:

$$\frac{\partial \rho}{\partial t} + \sum_i \left( \dot{q}_i \frac{\partial \rho}{\partial q_i} + \dot{p}_i \frac{\partial \rho}{\partial p_i} \right) = 0 \tag{5}$$

**핵심:**
- 위상공간에서 "비압축성 유체"처럼 행동
- Jacobian determinant = 1 (부피가 보존됨)
- $\nabla \cdot \mathbf{v} = 0$ (divergence-free flow)

### 3. 푸아송 괄호 형태: 가장 인상적인 표현

식 (5)를 다시 쓰면:

$$\frac{\partial \rho}{\partial t} = -\sum_i \left( \frac{\partial H}{\partial p_i} \frac{\partial \rho}{\partial q_i} - \frac{\partial H}{\partial q_i} \frac{\partial \rho}{\partial p_i} \right) \tag{6}$$

이는 푸아송 괄호의 정의와 정확히 일치:

$\frac{\partial \rho}{\partial t} = -\{\rho, H\} \tag{7}$

또는 전미분 형태로:

$\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \{\rho, H\} = 0 \tag{8}$

**물리적 의미:**
- 해밀턴 흐름을 따라 움직이는 관찰자가 보면 밀도는 불변
- 궤적을 따라가면서 본 "확률 농도"는 변하지 않음
- 마치 강물을 따라 떠내려가는 물방울의 농도가 불변인 것과 같음

**중요: 좌표의 시간 진화와 부호 비교**

좌표의 시간 진화 (Poisson_Brackets.md 참고):
$\dot{q}_i = \{q_i, H\} = \frac{\partial H}{\partial p_i} \tag{9}$

밀도의 시간 진화:
$\frac{\partial \rho}{\partial t} = -\{\rho, H\} \tag{10}$

왜 부호가 반대인가? 이는 **능동 변환 vs 수동 변환**의 차이:

- $\{q_i, H\}$: 능동 변환 - "점 자체가 어디로 움직이는가" (라그랑지안 관점)
- $-\{\rho, H\}$: 수동 변환 - "고정된 점에서 밀도가 어떻게 변하는가" (오일러리안 관점)

**강물의 비유:**
- 물방울을 따라가면 ($d/dt$): 밀도 불변 → $\frac{d\rho}{dt} = 0$
- 한 점에 서서 관찰 ($\partial/\partial t$): 밀도 변화 → $\frac{\partial \rho}{\partial t} = -\{\rho, H\}$

물이 오른쪽으로 흐르면 ($\dot{q} > 0$), 고정된 점의 밀도는 감소 ($\partial_t \rho < 0$). 이것이 부호가 반대인 이유!

### 4. 세 가지 동등한 형태

**1) 연속체 방정식 형태:**
$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$$

**2) 확장된 형태:**
$$\frac{\partial \rho}{\partial t} + \sum_i \left( \dot{q}_i \frac{\partial \rho}{\partial q_i} + \dot{p}_i \frac{\partial \rho}{\partial p_i} \right) = 0$$

**3) 푸아송 괄호 형태:**
$\frac{\partial \rho}{\partial t} = -\{\rho, H\}$

모두 같은 내용을 다른 언어로 표현한 것!

**주의:** 부호 convention에 주의! $\{q_i, H\} = \dot{q}_i$ (양수)이지만 $\partial_t \rho = -\{\rho, H\}$ (음수)이다.

### 5. 통계역학과의 연결

**Microcanonical ensemble:**

에너지 껍질 $E \leq H(q,p) \leq E + \Delta E$에서:

$$\rho(q,p) = \frac{1}{\Omega(E)} \quad \text{(constant)}$$

여기서 $\Omega(E)$는 위상공간 부피.

Liouville's theorem에 의해:
$$\frac{d\rho}{dt} = 0 \Rightarrow \text{Microcanonical ensemble은 정상 상태}$$

**비평형 통계역학:**

Liouville's theorem 자체는 밀도의 보존을 말하지만, 엔트로피는 증가할 수 있다. 왜? 

- 밀도 $\rho$는 보존되지만 (식 8)
- Coarse-grained density는 변한다
- 엔트로피 = "섞임의 정도"는 증가

이것이 미시적 가역성과 거시적 비가역성의 공존을 설명!

## Questions & Insights

- Liouville's theorem은 "확률의 보존"을 말하지만, 이것이 곧 "엔트로피 보존"을 의미하지는 않는다. 왜?
- 위상공간 부피는 보존되는데, 어떻게 평형으로 향하는가? Coarse-graining의 역할은?
- 푸아송 괄호 형태 $\partial_t \rho = \{H, \rho\}$는 양자역학의 $i\hbar \partial_t \rho = [H, \rho]$와 어떻게 대응되는가?
- 비가역적 과정에서도 Liouville's theorem은 성립하는가? (Yes! 미시적으로는 항상 가역적)

## Related Concepts

- [[Poisson_Brackets]]
- [[Involution and Dynamical Reversibility]]
- [[microcanonical ensemble의 entropy]]
- [[Journal reading - Time-Reversal and Entropy]]

## References

이 노트는 "Time-Reversal and Entropy" (Maes & Netočný, 2003) 논문을 공부하면서 작성되었다.

## Notes from Claude

Liouville's theorem의 아름다움은 세 가지 서로 다른 관점을 통일한다는 데 있다:

1. **유체역학적 관점**: 위상공간에서 확률 유체가 비압축성으로 흐른다
2. **기하학적 관점**: 위상공간 부피가 보존된다 (symplectic structure)
3. **동역학적 관점**: 해밀토니안이 시간 진화를 생성한다 (푸아송 괄호)

특히 주목할 점은 $\frac{d\rho}{dt} = 0$이라는 단순한 문장이 통계역학 전체의 기초가 된다는 것이다. 궤적을 따라 밀도가 불변이라는 이 사실로부터:

- Microcanonical ensemble의 정당성
- 에르고딕 가설의 필요성
- 비가역성 패러독스의 기원

모두가 자연스럽게 이해된다.

그러나 Liouville's theorem은 **미시적 보존**을 말할 뿐, **거시적 비가역성**을 설명하지 못한다. 이것이 바로 Boltzmann의 coarse-graining과 H-theorem이 필요한 이유이며, Time-Reversal and Entropy 논문의 핵심 주제이기도 하다.
