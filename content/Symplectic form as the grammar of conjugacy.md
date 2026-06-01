---
title: Symplectic form as the grammar of conjugacy
date: "2026-05-29"
subject: physics
tags:
  - study
  - concept
class: study
---

# Symplectic form as the grammar of conjugacy

## Overview

Symplectic form $\omega$, Legendre 변환, 그리고 conjugate variable의 관계에 대한 통찰 정리.

Poincaré-Cartan 1-form $\alpha = \sum_i p_i\, dq_i - \mathcal{H}\, dt$에서 두 가지 사실이 동시에 성립한다:
- 궤적을 따라 적분하면 action $S = \int \mathcal{L}\, dt$ → Legendre 변환의 흔적
- $d(\sum p_i\, dq_i) = \omega$ → symplectic form의 기원

이 둘을 조합하면 **symplectic form의 물리적 역할**이 드러난다.

## Key Points

**Symplectic form은 conjugacy의 구조를 정의한다.**

$\omega = \sum dp_i \wedge dq_i$가 인코딩하는 것:

$$
\{q_i, p_j\} = \delta_{ij}, \quad \{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0
$$

이 Poisson bracket 관계가 "$(q_i, p_i)$는 conjugate pair"의 수학적 표현이다. $\omega$가 주어지면 Poisson bracket이 결정되고, Poisson bracket이 곧 conjugacy 관계이다.

**그러나 $\omega$는 특정 변수를 지목하지 않는다.**

Darboux 정리에 의해 임의의 symplectic form이 국소적으로 $\sum dp_i \wedge dq_i$로 쓸 수 있지만, 그런 $(q_i, p_i)$의 선택은 유일하지 않다. 서로 다른 Darboux 좌표들은 canonical transformation으로 연결되고, 전부 동등하게 유효하다.

**특정 conjugate pair를 골라주는 건 Lagrangian이다.**

$p_i = \partial \mathcal{L}/\partial \dot{q}_i$라는 Legendre 변환이 물리적으로 "이 $p_i$가 이 $q_i$의 짝"이라고 지정한다.

## 세 층위의 역할

$$
\mathcal{L}(q, \dot{q}) \xrightarrow{\text{Legendre 변환}} (q_i, p_i) \xrightarrow{d(\sum p_i\, dq_i)} \omega = \sum dp_i \wedge dq_i
$$

| 구조 | 역할 |
|---|---|
| Lagrangian $\mathcal{L}$ | **특정** conjugate pair를 물리적으로 지정 |
| Symplectic form $\omega$ | conjugacy의 **추상적 구조** 정의 (Poisson bracket, 역학, 보존량) |
| Darboux 정리 | 어떤 $\omega$든 국소적으로 표준 conjugate pair 구조를 가짐 |

**비유**: $\omega$는 "짝을 이루는 구조가 있다"는 **문법**, Lagrangian은 "누가 누구의 짝인가"를 정하는 **단어 선택**, canonical transformation은 같은 문법 아래에서의 **번역**.

## Questions & Insights

- 양자역학에서 canonical commutation relation $[\hat{q}, \hat{p}] = i\hbar$은 symplectic structure의 양자화로 볼 수 있다. Poisson bracket $\{q, p\} = 1$이 $\omega$에서 왔으니, canonical quantization은 결국 symplectic form을 양자화하는 과정인가?

## Related Concepts

- [[AM lecture note - Canonical transformation revisited]]
- [[AM lecture note - Canonical transformation]]
- [[AM lecture note - Generating function]]
- [[AM lecture note - Poisson bracket and Darboux theorem]]
- [[AM lecture note - Symplectic form and Hamiltonian vector field]]

## References

- Si Li, *Classical Mechanics and Geometry*, Chapter 3
- 해석역학 강의 중 토론 (2026-05-29)

## Notes from Claude

이 통찰은 $\alpha = \sum p_i\, dq_i - \mathcal{H}\, dt$라는 하나의 1-form에 Legendre 변환과 symplectic 구조가 동시에 담겨 있다는 관찰에서 출발했다. Poincaré-Cartan 1-form이 Lagrangian 역학과 Hamiltonian 역학의 접점이라는 점에서, 이 1-form은 고전역학의 두 정식화를 잇는 다리 역할을 한다.
