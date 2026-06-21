---
title: "Meaning of Electric Scalar Potential"
date: "2025-10-28"
subject: physics
tags:
  - study
  - concept
  - electrodynamics
  - potentials
class: study
---

# Meaning of Electric Scalar Potential

## Overview

전기 스칼라 포텐셜 $\phi$의 진정한 의미를 탐구한다. 흔히 "스칼라 포텐셜은 전하 분포를 나타낸다"고 생각하기 쉽지만, 실제로는 더 복잡한 역할을 한다. $\phi$는 전기장의 보존적 부분만을 담당하며, 자기 벡터 포텐셜 $\mathbf{A}$와 함께 작용해야 완전한 전기장을 만든다.

## Key Points

### 기호 정의

| 기호 | 의미 |
|------|------|
| $\phi$ | 전기 스칼라 포텐셜 |
| $\mathbf{A}$ | 자기 벡터 포텐셜 |
| $\mathbf{E}$ | 전기장 |
| $\mathbf{B}$ | 자기장 |
| $\rho$ | 전하 밀도 |

### 전기장의 포텐셜 표현

전기장은 두 포텐셜의 조합으로 표현된다:
$$\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t} \tag{1}$$

이 식을 다시 정리하면:
$$\nabla \phi = -\mathbf{E} - \frac{\partial \mathbf{A}}{\partial t} \tag{2}$$

**핵심 통찰:** 회전이 0인 벡터장 $\left(\mathbf{E} + \frac{\partial \mathbf{A}}{\partial t}\right)$은 어떤 스칼라 함수의 그래디언트로 표현 가능하다:
$$\mathbf{E} + \frac{\partial \mathbf{A}}{\partial t} = -\nabla \phi \tag{3}$$

**그러므로, 전기장과 자기 벡터 포텐셜의 시간 변화를 통틀어 하나의 스칼라 포텐셜 $\phi$로 나타낸 것이다.**

### 스칼라 포텐셜의 역할: 정전기 vs 시변 상황

#### 1) 정전기학 (Static Case)

시간에 무관한 상황에서 $\frac{\partial \mathbf{A}}{\partial t} = 0$이므로:
$$\mathbf{E} = -\nabla \phi \tag{4}$$

가우스 법칙 $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$를 대입하면:
$$\nabla^2 \phi = -\frac{\rho}{\epsilon_0} \tag{5}$$

**이 경우, $\phi$는 정말로 전하 분포 $\rho$만을 나타낸다.** 이것이 우리가 정전기학에서 배운 포아송 방정식이다.

#### 2) 시간 변화가 있는 경우 (Dynamic Case)

자기장이 시간에 따라 변하면 $\frac{\partial \mathbf{A}}{\partial t} \neq 0$이고:
$$\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t} \tag{6}$$

가우스 법칙을 적용하면:
$$\nabla \cdot \mathbf{E} = \nabla \cdot \left(-\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}\right) = \frac{\rho}{\epsilon_0} \tag{7}$$

정리하면:
$$\nabla^2 \phi + \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = -\frac{\rho}{\epsilon_0} \tag{8}$$

**$\phi$가 전하 밀도 $\rho$와 관계를 맺는 방정식에도 $\mathbf{A}$의 시간 변화가 들어가 있다!**

### 전기장의 두 가지 기여

전기장은 두 부분으로 나눌 수 있다:

1. **$-\nabla \phi$: 쿨롱형 전기장**
   - 전하에 의한 "보존적" 전기장
   - 정전기학의 전기장
   - 경로 무관한 선적분 (전위차가 정의됨)

2. **$-\frac{\partial \mathbf{A}}{\partial t}$: 유도 전기장**
   - 변화하는 자기장에 의한 전기장
   - 패러데이 전자기 유도의 결과
   - 회전하는(non-conservative) 전기장
   - 경로 의존적 선적분 (닫힌 경로에서 0이 아님)

$$\mathbf{E} = \underbrace{-\nabla \phi}_{\text{쿨롱형}} + \underbrace{\left(-\frac{\partial \mathbf{A}}{\partial t}\right)}_{\text{유도형}} \tag{9}$$

### 구체적 예시: 변화하는 자속에 의한 유도 전기장

솔레노이드 내부에서 자기장이 시간에 따라 변하는 경우를 생각하자.

- **정전하가 없으면** ($\rho = 0$): $\nabla^2 \phi = 0$ (게이지 조건에 따라 $\phi$를 0으로 선택 가능)
- 하지만 **전기장은 0이 아니다**: $\mathbf{E} = -\frac{\partial \mathbf{A}}{\partial t} \neq 0$

이 경우:
- $\phi$는 전하가 없으므로 trivial하지만
- $\mathbf{A}$의 시간 변화가 원형의 유도 전기장을 만든다
- 패러데이 법칙: $\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}$

**이것이 바로 $\phi$만으로는 전기장을 완전히 기술할 수 없는 이유이다.**

### 게이지 선택에 따른 $\phi$의 의미

게이지 변환:
$$
\begin{align}
\mathbf{A}' &= \mathbf{A} + \nabla \chi \tag{10}\\
\phi' &= \phi - \frac{\partial \chi}{\partial t} \tag{11}
\end{align}
$$

**쿨롱 게이지** ($\nabla \cdot \mathbf{A} = 0$):
$$\nabla^2 \phi = -\frac{\rho}{\epsilon_0} \tag{12}$$

이 게이지에서는 $\phi$가 순수하게 전하 분포에 의해서만 결정된다. 하지만 $\mathbf{A}$가 복잡해진다.

**로렌츠 게이지** ($\nabla \cdot \mathbf{A} + \mu_0 \epsilon_0 \frac{\partial \phi}{\partial t} = 0$):
$$\nabla^2 \phi - \mu_0 \epsilon_0 \frac{\partial^2 \phi}{\partial t^2} = -\frac{\rho}{\epsilon_0} \tag{13}$$

이 게이지에서는 $\phi$가 파동 방정식을 만족하며, 시간 지연 효과(retardation)를 포함한다.

## Questions & Insights

- **Q**: 정전기학에서 배운 "$\phi$는 전하 분포를 나타낸다"는 완전히 틀린 말인가?
  **A**: 아니다. 정전기 상황에서는 맞다. 하지만 시변 상황에서는 $\phi$와 $\mathbf{A}$가 함께 작용한다는 것을 이해해야 한다.

- **Q**: 왜 자연은 전기장을 두 개의 포텐셜 ($\phi$와 $\mathbf{A}$)로 나눴을까?
  **A**: 이는 전기장과 자기장이 서로 연결되어 있기 때문이다. 변화하는 자기장이 전기장을 만들고, 변화하는 전기장이 자기장을 만든다. 포텐셜 표현은 이 연결을 자연스럽게 담아낸다.

- **Insight**: 패러데이 유도는 단순히 "자기장 변화 → 전기장 생성"이 아니라, "$\mathbf{A}$의 시간 변화가 전기장에 기여"로 이해할 수 있다.

## Related Concepts

- [[Electric and Magnetic Potentials]]
- [[맥스웰 방정식 외우기]]
- [[MOCs/Electrodynamics|Electrodynamics]]

## References

- Griffiths, D. J., "Introduction to Electrodynamics", Chapter 10
- Feynman, R. P., "The Feynman Lectures on Physics", Vol. II, Chapter 15

## Notes from Claude

이 노트의 핵심은 "스칼라 포텐셜 $\phi$는 전하 분포만을 나타낸다"는 단순한 관점을 넘어서는 것이다. 

정전기학에서는 이 관점이 충분하지만, 전자기 유도가 있는 상황에서는 $\phi$와 $\mathbf{A}$가 모두 필요하다. 실제로 식 (3)을 보면:

$$\mathbf{E} + \frac{\partial \mathbf{A}}{\partial t} = -\nabla \phi$$

왼쪽의 전체 벡터장 (전기장 + 자기 벡터 포텐셜의 시간 변화)이 회전이 없을 때, 이를 하나의 스칼라 포텐셜의 그래디언트로 표현한 것이 $\phi$이다.

따라서 $\phi$는:
- 정전기학: 순수하게 전하 분포
- 시변 전자기학: 전기장의 보존적 부분을 담당하며, $\mathbf{A}$와 협력하여 완전한 전기장을 만듦

이것이 포텐셜의 진정한 의미이다.
