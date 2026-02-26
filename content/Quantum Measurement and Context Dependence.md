---
title: "Quantum Measurement and Context Dependence"
date: "2026-02-26"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---
# Quantum Measurement and Context Dependence

## Overview

$|\alpha\rangle$ 상태로 준비된 입자가 $|\beta\rangle$로 측정될 확률이 $P = |\langle\beta|\alpha\rangle|^2$라는 것을 배우고 나서, 자연스럽게 이런 의문이 생겼다:

> "$\langle\alpha|\alpha\rangle = 1$인데, $|\beta\rangle \neq |\alpha\rangle$이면 $\langle\beta|\alpha\rangle = 0$이어야 하지 않나?"
> 같은 상태로 발견될 확률이 1이면, 다른 상태로 발견될 확률은 0이어야 하는 거 아닌가?

이 질문을 파고들면서 **normalized ≠ orthogonal** 임을 깨달았고, 더 나아가 양자역학에서 측정이 맥락 의존적이라는 것까지 이어졌다. 배반사건이 성립하려면 단순히 "다른 상태"가 아니라 **같은 observable의 eigenstates** 여야 한다는 것이 핵심이다.

## Key Points

**Normalized ≠ Orthogonal**

두 상태가 모두 normalized 되어 있어도 ($\langle\alpha|\alpha\rangle = \langle\beta|\beta\rangle = 1$), 서로 직교할 필요는 없다.

$$
\langle \beta | \alpha \rangle \neq 0 \quad \text{이 가능하다.}
$$

이 내적값의 제곱이 바로 $|\alpha\rangle$ 상태의 입자를 $|\beta\rangle$로 측정할 확률이다:

$$
P = |\langle \beta | \alpha \rangle|^2
$$

**배반사건이 되는 조건**

$|\alpha\rangle$로 발견되는 사건과 $|\beta\rangle$로 발견되는 사건이 배반이 되려면, 둘이 **같은 observable의 eigenstates**여야 한다. 같은 observable의 eigenstates들은 orthonormal basis를 이루기 때문이다:

$$
\langle e_i | e_j \rangle = \delta_{ij}
$$

이 basis 전체에 대해 확률을 합산하면 1이 된다:

$$
\sum_i |\langle e_i | \alpha \rangle|^2 = 1
$$

**측정의 맥락 의존성 (Context Dependence)**

같은 상태라도 **어떤 observable로 측정하느냐**에 따라 결과가 달라진다. 스핀 예시:

$$
|+x\rangle = \frac{1}{\sqrt{2}}(|+z\rangle + |-z\rangle)
$$

$|+z\rangle$ 상태에서 $S_x$를 측정하면:

$$
|\langle +x | +z \rangle|^2 = \frac{1}{2}
$$

$|+z\rangle$과 $|+x\rangle$는 서로 다른 상태이지만, 발견 확률이 $\frac{1}{2}$이다. $S_z$가 확정된 상태가 $S_x$ 측정에서는 불확정한 것 — 이것이 **불확정성 원리**와도 연결된다.

**응애를 위한 설명**

처음에 "normalized된 두 상태는 직교해야 하지 않나?"라는 질문에서 출발한 개념. $\langle\alpha|\alpha\rangle = 1$이라는 것은 단지 벡터의 길이가 1이라는 것일 뿐, 다른 벡터와의 관계를 결정하지 않는다. 확률의 총합 조건은 임의의 두 상태 사이에서가 아니라, 완전한 orthonormal basis 전체에 대해 성립한다.

### 비유: 필통 속 색연필

필통 안에 다양한 색의 색연필이 가득 있는 상황을 생각하자. 이 상태를 $|\text{색연필}\rangle$이라 하고, 관찰은 그 중 하나를 랜덤으로 꺼내 보는 것이다.

**도구 종류 basis** $= \{|\text{색연필}\rangle, |\text{연필}\rangle, |\text{붓}\rangle\}$으로 측정하면:

$$
|\langle \text{색연필} | \text{색연필} \rangle|^2 = 1, \quad |\langle \text{연필} | \text{색연필} \rangle|^2 = 0
$$

$|\text{색연필}\rangle$은 이 기저에서 완전히 확정된 eigenstate다.

**색깔 basis** $= \{|\text{빨강}\rangle, |\text{파랑}\rangle, |\text{노랑}\rangle, \ldots\}$으로 측정하면:

$$
|\text{색연필}\rangle = \sum_{\text{색}} c_{\text{색}} |\text{색}\rangle
$$

$$
|\langle \text{빨강} | \text{색연필} \rangle|^2 = \frac{\text{빨간 색연필 수}}{\text{전체 색연필 수}}
$$

이것이 **superposition**이다. $|\text{색연필}\rangle$은 도구 기저에서는 확정된 상태이지만, 색깔 기저에서는 여러 상태의 중첩으로 표현된다. 어떤 기저를 쓰느냐에 따라 상태가 "확정"되어 보이기도 하고 "불확정"해 보이기도 한다. 스핀으로 돌아오면, $|+z\rangle$은 $S_z$ 기저에선 완전히 확정된 상태이지만 $S_x$ 기저에선 $|+x\rangle$과 $|-x\rangle$의 중첩인 것과 같은 이야기다.

## Questions & Insights

- 서로 다른 observable들이 공통 eigenstate를 가질 수 있을까? → 교환자 $[A, B] = 0$일 때 가능 ([[Uncertainty Principle]] 참고)
- 측정 후 상태는 어떻게 바뀌는가? (state collapse)

## Related Concepts

- [[QM lecture note - Kets, Bras, and Operators]]
- [[Quantum Mechanics]]
- [[Uncertainty Principle]]

## References

- POSTECH 양자역학 강의 (2026 봄학기)

## Notes from Claude


