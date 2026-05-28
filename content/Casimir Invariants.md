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
→ **관성의 법칙과 직결.** 어떤 관성계에서 봐도 같은 입자라는 것 = 외력이 없으면 운동 상태가 유지된다는 것. $C_1 = M$이 보존된다는 구조 자체가 관성을 정의한다.

- **$C_2 = H - \frac{|\vec{P}|^2}{2M}$** (내부 에너지): $H$는 전체 에너지, $\frac{|\vec{P}|^2}{2M}$은 질량중심의 운동에너지. 이 둘의 차이가 부스트에 불변인 **내부 에너지**다.
→ **작용반작용보다는 운동량 보존과 대응.** $C_2$가 에너지 형태를 $H = \frac{P^2}{2M} + U$로 강제하는 것이고, 작용반작용(운동량 보존)은 translation generator $\vec{P}$가 닫힌 계에서 보존된다는 사실에서 나온다.

- **$\vec{S} = \vec{L} - \frac{1}{M}\vec{K}\times\vec{P}$** (스핀): 궤도 각운동량에서 질량중심 운동의 기여분을 뺀 것. 즉 **내재적 회전.**

- **$C_3 = |\vec{S}|^2$**: 스핀의 크기 제곱.

# 왜 이게 뉴턴 운동방정식인가?

## 시각의 전환

보통은 이렇게 생각한다:
> 뉴턴이 $F = ma$를 발견했다 → 그 방정식이 갈릴레이 대칭성을 만족한다

하지만 대칭성 관점에서는 방향이 반대다:
> 갈릴레이 대칭성을 요구한다 → Casimir invariants가 $M, U, S^2$임이 결정된다 → 이 구조가 "질량을 가진 입자"를 정의한다 → $F = ma$가 **나온다**

## 어떻게 운동방정식이 나오는가

$C_2 = H - \frac{|\vec{P}|^2}{2M}$이 갈릴레이 변환에 불변이라는 조건은, 해밀토니안이 반드시

$$
H = \frac{P^2}{2M} + U
$$

형태여야 함을 **강제**한다. 이건 뉴턴 역학의 운동에너지 공식이 발견된 게 아니라 갈릴레이 대칭성으로부터 유일하게 결정된다는 뜻이다.

여기서 해밀턴 방정식을 쓰면:

$$
\dot{p}_i = -\frac{\partial H}{\partial x_i} = -\frac{\partial U}{\partial x_i}
$$

즉 $ma = F$. $F = ma$는 **갈릴레이 대칭성의 필연적 귀결**이다.

## 결론

Casimir invariant들이 입자를 분류한다. $C_1 = M$이 있다는 건 입자가 질량을 가진다는 것, $C_2$가 에너지를 정의한다는 것 — 이 구조 자체가 갈릴레이 대칭성 아래서 뉴턴 역학의 입자 개념을 **완전히 규정**한다.

**"질량 $m$을 가진 입자가 갈릴레이 대칭성을 만족하며 움직인다"는 요구조건만으로 뉴턴 방정식이 나온다.**

# 왜 모든 generator와 commute하면 변환에 불변인가?

## Generator와 변환의 관계

변환 $Y$는 generator $A$로부터 만들어진다:

$$
Y = e^{i\alpha A}
$$

$[C, A] = 0$ 이면, commutator의 선형성과 $[C, A^n] = nA^{n-1}[C,A]$를 이용하면:

$$
[C, e^{i\alpha A}] = i\alpha[C, A] \cdot e^{i\alpha A} = 0
$$

따라서:

$$
[C, A] = 0 \implies [C, Y] = 0 \implies Y^\dagger C Y = C
$$

갈릴레이 그룹의 임의의 변환은 모든 generator의 조합으로 만들어지므로, **$C$가 모든 generator와 commute하면 어떤 갈릴레이 변환에도 불변**이다.

## 고전역학에서는?

고전역학에서 commutator의 역할은 **Poisson bracket**이 한다:

$$
\{f, g\}_{\text{Poisson}} \longleftrightarrow \frac{1}{i\hbar}[\hat{f}, \hat{g}]_{\text{commutator}}
$$

보존량 조건도 대응된다:

$$
\frac{dA}{dt} = \{A, H\} + \frac{\partial A}{\partial t} = 0 \quad (\text{고전}) \longleftrightarrow \quad \frac{d}{dt}\langle\hat{A}\rangle = \frac{1}{i\hbar}\langle[\hat{A},\hat{H}]\rangle + \left\langle\frac{\partial\hat{A}}{\partial t}\right\rangle = 0 \quad (\text{양자})
$$

$[C, \text{generator}] = 0$ 표기는 사실 **Lie algebra bracket**이며, 고전역학에서의 실체는 Poisson bracket이다. 같은 Lie 대수 구조를 고전/양자역학이 각자의 방식으로 구현하는 것.

→ [[Poisson_Brackets]]

## 샌드위치 연산 $Y^\dagger C Y$의 의미

이건 그냥 **선형대수의 기저 변환**이다.

기저를 $Y$로 바꿨을 때 연산자 $C$의 새로운 표현:

$$
C \mapsto Y^\dagger C Y
$$

(유니터리 행렬은 $Y^{-1} = Y^\dagger$이므로 $RCR^{-1}$과 같은 형태.)

$Y^\dagger C Y = C$ 는 "새 기저에서 봐도 $C$의 표현이 똑같다" — 즉 $C$가 그 변환에 불변이라는 뜻. 기댓값 보존과 형태는 같지만 맥락이 다르다:

| 맥락 | 의미 |
|------|------|
| 기댓값 보존 | 상태를 변환해도 측정 결과가 같다 |
| 연산자 불변성 | 기저를 바꿔도 연산자 표현이 같다 |

→ [[Unitary transformation]]

# 궁금한 내용


# 연관 학습 노트

[[AM lecture note - Galilean transformation]]
[[AM lecture note - Transformation of equation, Casimir Invariants]]
[[Poisson_Brackets]]

양자역학에서
**"해밀토니안이 어떤 대칭성에 불변이면, 그 대칭성의 생성자가 보존량이 된다"**
라는 걸 배웠다. 이때 commutator를 유용하게 사용함. 
[[Symmetry_Conservation_Laws_Three_Step_Proof]]
