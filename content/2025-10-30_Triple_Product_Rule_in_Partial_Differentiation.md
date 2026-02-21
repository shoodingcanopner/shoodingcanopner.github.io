---
title:
  "Triple Product Rule in Partial Differentiation": 
date:
  "2025-10-30"
subject: mathematics
tags:
  - study
  - concept
  - calculus
  - partial_derivatives
class: study
---

# Triple Product Rule in Partial Differentiation

## Overview

편미분에서의 Triple Product Rule은 세 변수 사이의 관계를 나타내는 중요한 항등식이다. 이 규칙은 미분 기호를 단순 분수로 취급해서는 안 된다는 것을 보여주는 강력한 예시이며, 열역학에서 맥스웰 관계식을 유도하는 데 핵심적으로 사용된다.

**Triple Product Rule:**
$$
\left(\frac{\partial E}{\partial V}\right)_P \left(\frac{\partial V}{\partial S}\right)_E \left(\frac{\partial S}{\partial E}\right)_V = -1 \tag{1}\label{eq:triple-product}
$$

## Notation and Symbols

| 기호                                             | 의미                             |
| ---------------------------------------------- | ------------------------------ |
| $E$                                            | Energy (에너지)                   |
| $V$                                            | Volume (부피)                    |
| $S$                                            | Entropy (엔트로피)                 |
| $P$                                            | 일반적인 점 또는 상태 (첨자로 쓰일 때는 고정 변수) |
| $\Delta E$, $\Delta V$, $\Delta S$             | 각 변수의 미소 변화량                   |
| $\left(\frac{\partial X}{\partial Y}\right)_Z$ | $Z$를 고정한 상태에서 $Y$에 대한 $X$의 편미분 |

## Key Points

### 1. Triple Product Rule의 증명

증명의 핵심은 상태 공간에서 세 점 $P_1$, $P_2$, $P_3$를 고려하여 각 편미분의 의미를 기하학적으로 이해하는 것이다.

#### Step 1: V고정 (Volume Fixed)

상태 $P_1(E_0, V_0, S_0)$에서 시작하여 $V$를 고정하고 $E$를 $\Delta E$만큼 변화시키면:

$$
P_1(E_0, V_0, S_0) \to P_2\left(E_0 + \Delta E, V_0, S_0 + \frac{\partial S}{\partial E}\bigg|_{P_1} \Delta E\right) \tag{2}
$$

이때 $S$-$E$ 평면에서의 변화를 보면, $\left(\frac{\partial S}{\partial E}\right)_V$는 $V$를 고정한 상태에서 $E$ 변화에 따른 $S$의 변화율이다.

#### Step 2: S고정 (Entropy Fixed)

이제 $P_2$에서 $S$를 고정하고 $V$를 $\Delta V$만큼 변화시키면:

$$
P_2\left(E_0 + \Delta E, V_0, S_0 + \frac{\partial S}{\partial E}\bigg|_{P_1} \Delta E\right) \to P_3\left(E_0 + \Delta E + \frac{\partial E}{\partial V}\bigg|_{P_2} \Delta V, V_0 + \Delta V, S_0 + \frac{\partial S}{\partial E}\bigg|_{P_1} \Delta E\right) \tag{3}
$$

이때 $E$-$V$ 평면에서의 변화를 보면, $\left(\frac{\partial E}{\partial V}\right)_S$는 $S$를 고정한 상태에서 $V$ 변화에 따른 $E$의 변화율이다.

#### Step 3: E고정 (Energy Fixed)

마지막으로 $P_3$에서 $E$를 고정하고 $V$를 $\Delta V$, $S$를 $\Delta S$만큼 변화시켜 원래 상태로 돌아가려고 한다:

$$
P_3\left(E_0 + \Delta E + \frac{\partial E}{\partial V}\bigg|_{P_2} \Delta V, V_0 + \Delta V, S_0 + \frac{\partial S}{\partial E}\bigg|_{P_1} \Delta E\right)
$$
$$
\to P_1\left(E_0 + \Delta E + \frac{\partial E}{\partial V}\bigg|_{P_2} \Delta V, V_0 + \Delta V + \frac{\partial V}{\partial S}\bigg|_{P_3} \Delta S, S_0 + \frac{\partial S}{\partial E}\bigg|_{P_1} \Delta E + \Delta S\right) \tag{4}
$$

이때 $V$-$S$ 평면에서의 변화를 보면, $\left(\frac{\partial V}{\partial S}\right)_E$는 $E$를 고정한 상태에서 $S$ 변화에 따른 $V$의 변화율이다.

#### Step 4: 미소량의 극한

이 세 과정을 거쳐 원래 점 $P_1$으로 돌아오려면, 각 변수의 변화량이 0이 되어야 한다. $\Delta E \to 0$, $\Delta V \to 0$, $\Delta S \to 0$의 극한을 취하면, 각 점에서의 편미분이 같아진다:

$$
\frac{\partial E}{\partial V}\bigg|_{P_2} = \frac{\partial E}{\partial V}\bigg|_{P_1}, \quad \frac{\partial V}{\partial S}\bigg|_{P_3} = \frac{\partial V}{\partial S}\bigg|_{P_1}
$$

따라서 다음 세 조건이 동시에 만족되어야 한다:

$$
\begin{cases}
\Delta E + \frac{\partial E}{\partial V} \Delta V = 0 \\
\Delta V + \frac{\partial V}{\partial S} \Delta S = 0 \\
\Delta S + \frac{\partial S}{\partial E} \Delta E = 0
\end{cases} \tag{5}
$$

#### Step 5: 최종 결과 도출

첫 번째 식에서 두 번째 식을 대입하면:

$$
\Delta E + \frac{\partial E}{\partial V} \left(-\frac{\partial V}{\partial S} \Delta S\right) = 0
$$

$$
\Rightarrow \Delta E - \frac{\partial E}{\partial V} \frac{\partial V}{\partial S} \Delta S = 0 \tag{6}
$$

세 번째 식에서 $\Delta S$를 소거하면:

$$
\Delta E + \frac{\partial E}{\partial V} \frac{\partial V}{\partial S} \frac{\partial S}{\partial E} \Delta E = 0 \tag{7}
$$

$\Delta E \neq 0$이므로 양변을 $\Delta E$로 나누면:

$$
1 + \frac{\partial E}{\partial V} \frac{\partial V}{\partial S} \frac{\partial S}{\partial E} = 0
$$

$$
\therefore \quad \frac{\partial E}{\partial V} \frac{\partial V}{\partial S} \frac{\partial S}{\partial E} = -1 \tag{8}
$$

이것이 Triple Product Rule이다.

### 2. Chain Rule과의 차이점

많은 학생들이 chain rule을 잘못 적용하여 다음과 같이 생각하는 실수를 한다:

$$
\frac{\partial E}{\partial V} \cdot \frac{\partial V}{\partial S} \cdot \frac{\partial S}{\partial E} \stackrel{?}{=} \frac{\partial E}{\partial E} = 1 \quad \text{(틀림!)}
$$

이는 미분 기호를 단순 분수처럼 약분할 수 있다고 잘못 가정한 것이다. **편미분에서는 각 미분이 어떤 변수를 고정하는지가 명시되어야 하며**, 이 정보가 없으면 chain rule을 제대로 적용할 수 없다.

올바른 chain rule 적용은 고정 변수를 명시해야 한다:

$$
\left(\frac{\partial E}{\partial S}\right)_V = \left(\frac{\partial E}{\partial V}\right)_S \left(\frac{\partial V}{\partial S}\right)_E \quad \text{(이것도 일반적으로 성립하지 않음)}
$$

실제로 Triple Product Rule $\eqref{eq:triple-product}$은 이러한 단순 약분이 성립하지 않으며, 오히려 $-1$이라는 결과가 나온다는 것을 보여준다.

### 3. 미분 기호는 분수가 아니다

Triple Product Rule은 **미분 기호를 분수처럼 취급하면 안 된다**는 것을 보여주는 강력한 예시다. 일변수 미적분에서는 $\frac{dy}{dx}$를 마치 분수처럼 다루어도 많은 경우 올바른 결과를 얻을 수 있지만, 편미분에서는 다음과 같은 이유로 이것이 불가능하다:

1. **고정 변수의 존재**: 편미분 $\left(\frac{\partial x}{\partial y}\right)_z$는 $z$를 고정한다는 조건이 필수적이다.

2. **경로 의존성**: 상태 공간에서 한 점에서 다른 점으로 가는 경로는 무수히 많으며, 각 경로마다 다른 변수를 고정할 수 있다.

3. **비가환성**: 편미분의 순서를 바꾸면 일반적으로 다른 결과가 나온다.

Triple Product Rule에서 곱이 $+1$이 아니라 $-1$이 나오는 것은 이러한 편미분의 본질적 특성을 반영한 결과다.

## Questions & Insights

- 왜 열역학에서 이 규칙이 자주 등장하는가? 열역학적 변수들(온도, 압력, 부피, 엔트로피 등) 사이의 관계를 나타낼 때 필수적이기 때문이다.

- 이 규칙은 3개 이상의 변수로 일반화될 수 있는가? 일반적으로 $n$개의 변수가 관계식으로 연결되어 있을 때, $(n-1)$개의 편미분의 곱을 생각할 수 있지만, 단순한 패턴으로 일반화되지는 않는다.

- 기하학적 의미는 무엇인가? 상태 공간에서 닫힌 경로를 따라 돌아왔을 때, 각 구간에서의 변화율의 곱이 특정 값(-1)을 가진다는 것을 의미한다.

## Related Concepts

- [[열역학 자연변수와 르장드르 변환]]: 열역학 퍼텐셜들 사이의 관계
- [[Differential의 진정한 의미]]: 미분 개념의 엄밀한 이해
- [[맥스웰 방정식 외우기]]: 열역학적 맥스웰 관계식 유도에 활용
- [[Generalized_Ehrenfest_Theorem]]: 양자역학에서의 미분 규칙

## References

- 사용자 제공 필기 자료

## Notes from Claude

Triple Product Rule은 편미분의 복잡성을 잘 보여주는 예시입니다. 이 규칙을 이해하는 것은 다음과 같은 이유로 중요합니다:

첫째, 미분 기호의 본질을 이해하게 됩니다. $\frac{\partial x}{\partial y}$는 단순한 분수가 아니라, "다른 변수들을 고정한 상태에서의 변화율"이라는 복잡한 개념입니다.

둘째, 열역학과 통계역학에서 자주 등장하는 맥스웰 관계식들을 유도할 때 이 규칙이 핵심적으로 사용됩니다. 예를 들어:
$$
\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V
$$

셋째, 상태 방정식을 다룰 때 필요한 수학적 도구를 제공합니다. 실험적으로 측정하기 어려운 양을 측정 가능한 양들의 조합으로 표현할 수 있게 해줍니다.

증명 과정에서 보았듯이, 이 규칙은 상태 공간에서의 닫힌 경로를 따라 변화를 추적함으로써 유도됩니다. 이는 편미분이 단순한 대수적 조작이 아니라 기하학적 의미를 가진다는 것을 보여줍니다.
