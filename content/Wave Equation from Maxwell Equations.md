---
title: "Wave Equation from Maxwell Equations"
date: "2025-11-02"
subject: physics
tags:
  - study
  - concept
  - electromagnetism
class: study
---

# Wave Equation from Maxwell Equations

## Overview

자유 공간(전하와 전류가 없는 공간)에서 [[맥스웰 방정식 외우기]]으로부터 전기장과 자기장이 파동 방정식을 만족함을 유도한다.

벡터 항등식

$$\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$$
이게 핵심! 나머지는 진공에서 단순화된 맥방을 풀면 자연스럽게 따라나온다. 
파동 방정식의 기본 형태응 2차 공간 미분(라플라시안)이 2차 시간 미분과 비례한다는 것. 

## 기호 정리

| 기호 | 의미 |
|------|------|
| $\mathbf{E}$ | 전기장 |
| $\mathbf{B}$ | 자기장 |
| $\epsilon_0$ | 진공 유전율 |
| $\mu_0$ | 진공 투자율 |
| $c$ | 빛의 속도 $c = 1/\sqrt{\epsilon_0 \mu_0}$ |

## 자유 공간의 Maxwell 방정식

전하도 전류도 없는 자유 공간에서 ($\rho = 0, \mathbf{J} = 0$):

$$
\nabla \cdot \mathbf{E} = 0 \tag{1}
$$

$$
\nabla \cdot \mathbf{B} = 0 \tag{2}
$$

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \tag{3}
$$

$$
\nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} \tag{4}
$$

## 유도 과정

### 전기장 파동 방정식

식 (3)의 양변에 curl을 취한다:

$$
\nabla \times (\nabla \times \mathbf{E}) = \nabla \times \left(-\frac{\partial \mathbf{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B})
$$

벡터 항등식 $\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$를 사용하고, 식 (1)에서 $\nabla \cdot \mathbf{E} = 0$이므로:

$$
-\nabla^2 \mathbf{E} = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B})
$$

여기에 식 (4)를 대입:

$$
-\nabla^2 \mathbf{E} = -\frac{\partial}{\partial t}\left(\mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right) = -\mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}
$$

따라서:

$$
\nabla^2 \mathbf{E} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} = \frac{1}{c^2}\frac{\partial^2 \mathbf{E}}{\partial t^2} \tag{5}
$$

### 자기장 파동 방정식

동일한 방법으로 식 (4)의 양변에 curl을 취하면:

$$
\nabla \times (\nabla \times \mathbf{B}) = \mu_0 \epsilon_0 \frac{\partial}{\partial t}(\nabla \times \mathbf{E})
$$

벡터 항등식과 식 (2), (3)을 사용:

$$
-\nabla^2 \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial}{\partial t}\left(-\frac{\partial \mathbf{B}}{\partial t}\right)
$$

따라서:

$$
\nabla^2 \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} = \frac{1}{c^2}\frac{\partial^2 \mathbf{B}}{\partial t^2} \tag{6}
$$

## 결론

전기장과 자기장 모두 속도 $c = 1/\sqrt{\mu_0\epsilon_0} \approx 3 \times 10^8$ m/s로 전파되는 파동 방정식을 만족한다. 이것이 전자기파(빛)의 존재를 수학적으로 증명한 Maxwell의 위대한 발견이다.

## Related Concepts

- [[맥스웰 방정식 외우기]]
- [[포텐셜을 이용한 맥스웰 방정식]]
- [[전기장과 자기장의 포텐셜]]
- [[Electrodynamics 그 모든 것]]

## References

## Notes from Claude

핵심은 Faraday 법칙과 Ampère-Maxwell 법칙에 curl을 취하면 서로를 포함하는 2차 미분 방정식이 나온다는 것이다. 전기장의 시간 변화가 자기장을 만들고, 자기장의 시간 변화가 다시 전기장을 만드는 순환 구조가 파동을 가능하게 한다.
