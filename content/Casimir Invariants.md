---
title: Casimir Invariants
date: "2026-02-26"
subject: physics
tags:
  - study
  - concept
class: study
---

# Casimir Invariant란?

그룹의 모든 generator와 **commute하는 연산자**다.

갈릴레이 그룹의 경우, 모든 generator $H, P_i, L_{jk}, K_i$에 대해:

$$
[C, H] = 0, \quad [C, P_i] = 0, \quad [C, L_{jk}] = 0, \quad [C, K_i] = 0
$$
인 $C$는 Casimir invariant이다. 

물리적으로는 **모든 관성계에서 같은 값을 갖는 양**이다. 어떤 갈릴레이 변환을 해도 변하지 않으므로, 입자를 분류하는 내재적 속성이 된다.

# 어떻게 찾는가?

Generator들 사이의 **Lie bracket (commutation relation)** 을 먼저 구한다. 그런 다음 이 commutation relation을 만족하면서 **모든 generator와 commute하는 조합**을 찾는다.

갈릴레이 그룹의 commutation relation:

$$
[L_i, L_j] = i\varepsilon_{ijk}L_k
$$

$$
[L_i, P_j] = i\varepsilon_{ijk}P_k
$$

$$
[L_i, K_j] = i\varepsilon_{ijk}K_k
$$

$$
[K_i, H] = iP_i
$$

$$
[K_i, P_j] = iM\delta_{ij}
$$

나머지는 0.

# 갈릴레이 그룹의 Casimir Invariants

**Casimir invariants in Gal(3):**

$$
C_1 = M = m\mathbb{I} \quad (\text{mass})
$$

$$
C_2 = U = H - \frac{1}{2M}|\vec{P}|^2 \quad (\text{internal energy})
$$

$$
\vec{S} = \vec{L} - \frac{1}{M}\vec{K}\times\vec{P} \quad (\text{spin})
$$

$$
C_3 = |\vec{S}|^2
$$

## 각각의 물리적 의미

- **$C_1 = M$** (질량): 가장 단순한 Casimir invariant. 부스트, 회전 어떤 변환을 해도 질량은 변하지 않는다.

- **$C_2 = H - \frac{|\vec{P}|^2}{2M}$** (내부 에너지): $H$는 전체 에너지, $\frac{|\vec{P}|^2}{2M}$은 질량중심의 운동에너지. 이 둘의 차이가 부스트에 불변인 **내부 에너지**다.

- **$\vec{S} = \vec{L} - \frac{1}{M}\vec{K}\times\vec{P}$** (스핀): 궤도 각운동량에서 질량중심 운동의 기여분을 뺀 것. 즉 **내재적 회전.**

- **$C_3 = |\vec{S}|^2$**: 스핀의 크기 제곱.

# 왜 이게 뉴턴 운동방정식인가?

Casimir invariant들이 입자를 분류한다. $C_1 = M$이 있다는 건 입자가 질량을 가진다는 것, $C_2$가 에너지를 정의한다는 것 — 이 구조 자체가 갈릴레이 대칭성 아래서 뉴턴 역학의 입자 개념을 **완전히 규정**한다.

다시 말해 **"질량 $m$을 가진 입자가 갈릴레이 대칭성을 만족하며 움직인다"는 요구조건만으로 뉴턴 방정식이 나온다.**

# 궁금한 내용

Lie bracket과 commutation relation을 체계적으로 계산하는 방법은?

Poincaré 그룹의 Casimir invariant는 무엇인가? (상대론적 버전)

# 연관 학습 노트

[[AM lecture notes - Galilean transformation]]
[[AM lecture notes - unnamed]]
[[Poisson_Brackets]]

양자역학에서
**"해밀토니안이 어떤 대칭성에 불변이면, 그 대칭성의 생성자가 보존량이 된다"**
라는 걸 배웠다. 이때 commutator를 유용하게 사용함. 
[[Symmetry_Conservation_Laws_Three_Step_Proof]]
