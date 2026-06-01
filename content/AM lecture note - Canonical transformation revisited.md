---
title: AM lecture note - Canonical transformation revisited
date: "2026-05-29"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Analytical Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[AM lecture note - Poisson bracket and Darboux theorem]]

# 오늘의 핵심

- 확장 위상 공간 $\mathcal{U} \times \mathbb{R}$ 위에 수정된 2-form $\omega_\mathcal{H}$를 정의하면, Hamilton 방정식이 $\iota_{X_\mathcal{H}} \omega_\mathcal{H} = 0$이라는 단일 기하학적 조건으로 표현된다. $\iota_{X_\mathcal{H}} \omega_\mathcal{H}$가 Hamilton equation에서 사용되는 미분연산자들. 
- Canonical transformation은 이 구조를 보존하는 변환 $\varphi^* \omega_\mathcal{K} = \omega_\mathcal{H}$로 재정의된다.
- Generating function의 존재는 Poincaré Lemma에서 자연스럽게 따라온다.
- Poincaré 적분 불변량: 앙상블의 순환 $\oint \sum_i p_i\, dq_i$는 시간 발전에 대해 정확히 보존된다.

# 필기 내용

## 확장 위상 공간과 $\omega_\mathcal{H}$의 동기

| Symbol                                | Meaning                                                        |
| ------------------------------------- | -------------------------------------------------------------- |
| $\mathcal{U} \subset \mathbb{R}^{2n}$ | 위상 공간                                                          |
| $\mathcal{U} \times \mathbb{R}$       | 확장 위상 공간 (좌표: $q_i, p_i, t$)                                   |
| $\omega$                              | 표준 symplectic form $\sum_i dp_i \wedge dq_i$                   |
| $\mathcal{H}(q,p,t)$                  | 시간의존 Hamiltonian                                               |
| $\omega_\mathcal{H}$                  | 수정된 2-form $\omega - d\mathcal{H} \wedge dt$                   |
| $\pi$                                 | 시간 좌표로의 사영 $\pi: \mathcal{U} \times \mathbb{R} \to \mathbb{R}$ |

원래 $p$와 $q$의 phase space $\mathcal{U}$를 잘 쓰다가, 
갑자기 왜 $\mathcal{U} \times \mathbb{R}$ 로 **시간 차원을 확장하는가?**

시간의존 canonical transformation $(q_i, p_i) \mapsto (Q_i(q,p,t), P_i(q,p,t))$에서는 $\sum dp_i \wedge dq_i = \sum dP_i \wedge dQ_i$가 일반적으로 성립하지 않는다. 대신 성립하는 것은

$$
\sum_i dp_i \wedge dq_i - d\mathcal{H} \wedge dt = \sum_i dP_i \wedge dQ_i - d\mathcal{K} \wedge dt
$$

즉, symplectic form $\omega$만으로는 시간의존 변환의 기하학을 담을 수 없다. 
 $\mathcal{U} \times \mathbb{R}$은 시간에 따라 변화하는 phase space  $\mathcal{U}$를 모든 시간에 대해 층층히 쌓아 올린 것이라고 이해하면 되겠다.
 
 공간이 달라졌으니 Hamiltonian 정보를 포함한 **수정된 2-form**이 필요하다.

$$
\omega_\mathcal{H} := \omega - d\mathcal{H} \wedge dt = \sum_i dp_i \wedge dq_i - d\mathcal{H} \wedge dt
$$

이 $\omega_\mathcal{H}$는 $(2n+1)$차원 확장 위상 공간 $\mathcal{U} \times \mathbb{R}$ 위의 2-form이다.

> [!warning] 주의
> $\omega_\mathcal{H}$는 symplectic form이 **아니다** — 홀수 차원 공간에서는 non-degenerate 2-form이 존재할 수 없다. $\omega_\mathcal{H}$의 null direction이 정확히 하나 있고, 그것이 Hamilton 역학의 시간 발전 방향이 된다.

## Pushforward $\pi_*$

$\pi: \mathcal{U} \times \mathbb{R} \to \mathbb{R}$의 pushforward $\pi_*$는 접선 벡터의 시간 성분을 추출하는 연산이다. 확장 위상 공간의 점 $(q, p, t)$에서 접선 벡터

$$
v = \sum_i a^i \frac{\partial}{\partial q_i} + \sum_i b^i \frac{\partial}{\partial p_i} + c \frac{\partial}{\partial t}
$$

에 대해

$$
\pi_*(v) = c \frac{\partial}{\partial t}
$$

$q$와 $p$ 방향 성분은 모두 소멸하고 $t$ 성분만 남는다.

## Proposition 3.4.1: Hamilton 방정식의 기하학적 재정식화

> [!important] Proposition 3.4.1
> $\mathcal{U} \times \mathbb{R}$ 위에 다음 두 조건을 만족하는 벡터장 $X_\mathcal{H}$가 **유일하게** 존재한다:
> 1. $\pi_*(X_\mathcal{H}) = \frac{\partial}{\partial t}$ (시간 방향 성분이 1)
> 2. $\iota_{X_\mathcal{H}} \omega_\mathcal{H} = 0$ ($\omega_\mathcal{H}$의 null direction)

**조건 ①의 의미**: $X_\mathcal{H}$의 형태가 다음으로 제한된다.

$$
X_\mathcal{H} = \frac{\partial}{\partial t} + \sum_i \left( a^i \frac{\partial}{\partial q_i} + b^i \frac{\partial}{\partial p_i} \right)
$$

시간 방향은 고정되고, $a^i$와 $b^i$가 미지수이다.

**조건 ②로 미지수 결정**: $\omega_\mathcal{H}$를 성분으로 풀어쓰면

$$
\omega_\mathcal{H} = \sum_i dp_i \wedge dq_i - \sum_i (\partial_{q_i}\mathcal{H}\, dq_i + \partial_{p_i}\mathcal{H}\, dp_i) \wedge dt
$$

이에 $X_\mathcal{H}$를 interior product하면

$$
\iota_{X_\mathcal{H}} \omega_\mathcal{H} = \sum_i (a^i\, dp_i - b^i\, dq_i) + \sum_i (\partial_{q_i}\mathcal{H}\, dq_i + \partial_{p_i}\mathcal{H}\, dp_i) + (a^i \partial_{q_i}\mathcal{H} + b^i \partial_{p_i}\mathcal{H})\, dt = 0
$$

$dq_i$ 성분: $-b^i + \partial_{q_i}\mathcal{H} = 0 \implies b^i = \partial_{q_i}\mathcal{H}$

$dp_i$ 성분: $a^i + \partial_{p_i}\mathcal{H} = 0 \implies a^i = -\partial_{p_i}\mathcal{H}$

따라서

$$
\boxed{X_\mathcal{H} = \frac{\partial}{\partial t} + \sum_i \left( \frac{\partial \mathcal{H}}{\partial p_i} \frac{\partial}{\partial q_i} - \frac{\partial \mathcal{H}}{\partial q_i} \frac{\partial}{\partial p_i} \right)}
$$

**Hamilton 방정식과의 연결**: 적분곡선 $\gamma(t) = (q_i(t), p_i(t), t)$에 대해 $\frac{d}{dt}\gamma(t) = X_\mathcal{H}(\gamma(t))$이 정확히

$$
\dot{q}_i = \frac{\partial \mathcal{H}}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial \mathcal{H}}{\partial q_i}
$$

를 준다. 즉, **$\iota_{X_\mathcal{H}} \omega_\mathcal{H} = 0$ 하나가 Hamilton 방정식 전체를 인코딩한다.**

## Definition 3.4.2: Canonical Transformation의 기하학적 정의
![[Pasted image 20260529132204.png]]
위 도표에서 $\mathbb{R}$ 은 아마 시간을 의미하는 것.


$\mathcal{U} \subset \mathbb{R}^{2n}$, $\mathcal{H} = \mathcal{H}(q,p,t)$일 때, 미분동형사상 $\varphi: \mathcal{U} \times \mathbb{R} \to \mathcal{V} \times \mathbb{R}$이 **canonical transformation**이려면:

**조건 ①**: $\pi \circ \varphi = \pi$ — 시간 좌표를 보존한다.

이 조건에 의해 $\varphi$는

$$
\varphi: (q_i, p_i, t) \mapsto (Q_i(q,p,t),\, P_i(q,p,t),\, t)
$$

의 형태를 가진다.

**조건 ②**: 함수 $\mathcal{K}$가 $\mathcal{V} \times \mathbb{R}$ 위에 존재하여 $\varphi^* \omega_\mathcal{K} = \omega_\mathcal{H}$.

이 조건을 풀어쓰면

$$
\sum_i dp_i \wedge dq_i - d\mathcal{H} \wedge dt = \sum_i dP_i \wedge dQ_i - d\mathcal{K} \wedge dt
$$

정리하면

$$
d\left[\left(\sum_i p_i\, dq_i - \mathcal{H}\, dt \right) - \left(\sum_i P_i\, dQ_i - \mathcal{K}\, dt \right)\right] = 0
$$

## Generating Function의 존재 — Poincaré Lemma 적용

$\mathcal{U}$가 star-shaped이면, 위의 closed 1-form에 Poincaré Lemma를 적용하여

$$
\left(\sum_i p_i\, dq_i - \mathcal{H}\, dt \right) - \left(\sum_i P_i\, dQ_i - \mathcal{K}\, dt \right) = dF
$$

인 함수 $F$가 존재한다. 이 $F$가 바로 이전에 다뤘던 **generating function**이다.

## Canonical Transformation이 역학을 보존하는 이유

$\varphi^* \omega_\mathcal{K} = \omega_\mathcal{H}$이면

$$
\varphi_*(X_\mathcal{H}) = X_\mathcal{K}
$$

즉, $\varphi$는 $X_\mathcal{H}$의 적분곡선을 $X_\mathcal{K}$의 적분곡선으로 보낸다. 다시 말해, **$\mathcal{H}$에 대한 Hamilton 방정식의 해가 $\mathcal{K}$에 대한 Hamilton 방정식의 해로 변환된다.** 이것이 canonical transformation이 역학의 형태를 보존한다는 Prop 2.4.5의 기하학적 이유이다.

## §3.4.2 Poincaré의 적분 불변량

확장 위상 공간 $\mathcal{U} \times \mathbb{R}$에서, $\gamma$를 시각 $t_0$에서의 위상 공간 내 **닫힌 곡선**(closed curve)이라 하자. $\gamma$는 단일 입자의 궤적이 아니라, **같은 시각에 여러 초기 조건들이 이루는 앙상블**이다.

각 초기 조건을 Hamilton 방정식에 따라 시간 발전시키면, 나중 시각 $t$에서 또 다른 닫힌 곡선 $\tilde{\gamma}$를 얻는다. 확장 위상 공간에서 $\gamma$와 $\tilde{\gamma}$를 잇는 관(tube) $\Gamma$의 "세로 방향" 곡선들은 모두 $X_\mathcal{H}$의 적분곡선(= 개별 입자의 고전 궤적)이다.

**1단계**: $\Gamma$ 위의 모든 점에서, 곡면에 접하는 벡터 중 하나는 $X_\mathcal{H}$이다. $\iota_{X_\mathcal{H}} \omega_\mathcal{H} = 0$이므로, 2-form $\omega_\mathcal{H}$를 $\Gamma$ 위에서 적분하면

$$
\int_\Gamma \omega_\mathcal{H} = 0
$$

**2단계**: $\omega_\mathcal{H} = d\alpha$로 쓸 수 있다. 여기서

$$
\alpha = \sum_i p_i\, dq_i - \mathcal{H}\, dt
$$

이 $\alpha$를 **Poincaré-Cartan 1-form**이라 부른다. Stokes 정리에 의해

$$
\int_\Gamma \omega_\mathcal{H} = \int_\Gamma d\alpha = \oint_{\partial\Gamma} \alpha = \oint_{\tilde{\gamma}} \alpha - \oint_\gamma \alpha = 0
$$

**3단계**: $\gamma$와 $\tilde{\gamma}$는 각각 $t = \text{const}$ 슬라이스 위에 있으므로, 그 위에서 $dt = 0$이다. 따라서 $\alpha$의 $\mathcal{H}\, dt$ 항이 사라지고

$$
\boxed{\oint_\gamma \sum_i p_i\, dq_i = \oint_{\tilde{\gamma}} \sum_i p_i\, dq_i}
$$

즉, **$\oint_\gamma \sum_i p_i\, dq_i$는 Hamiltonian 시간 발전에 대한 정확한 불변량**이다. 이 결과는 시간 간격의 길이나 Hamiltonian의 시간 의존성에 관계없이 항상 성립한다.

# 궁금한 내용


# AI의 보충 설명

> [!note] Glia의 보충 (2026-05-29)
> Poincaré-Cartan 1-form $\alpha$의 물리적 의미, action variable, 그리고 Poincaré 적분 불변량과 adiabatic invariant의 차이에 대한 토론 정리.

## Poincaré-Cartan 1-form의 물리적 의미

고전 궤적 $\gamma(t) = (q_i(t), p_i(t), t)$을 따라 $\alpha$를 적분하면

$$
\int_\gamma \alpha = \int \left(\sum_i p_i \dot{q}_i - \mathcal{H}\right) dt = \int \mathcal{L}\, dt = S \quad \text{(action)}
$$

Legendre 변환 $\sum p_i \dot{q}_i - \mathcal{H} = \mathcal{L}$에 의해, **$\alpha$를 궤적 따라 적분하면 작용(action)**이 된다. 따라서 $\alpha$는 "미소 작용(infinitesimal action)"이다.

$\alpha$에서 $\mathcal{H}\, dt$를 제외한 $\sum_i p_i\, dq_i$는 **canonical 1-form** (또는 Liouville 1-form)으로, 그 exterior derivative가 symplectic form:

$$
d\left(\sum_i p_i\, dq_i\right) = \sum_i dp_i \wedge dq_i = \omega
$$

## Action Variable $J$

1자유도 주기 운동에서, 에너지 $E$가 고정되면 위상 공간의 궤적은 닫힌 곡선이다. **Action variable**은 이 닫힌 궤적이 둘러싸는 위상 공간 면적:

$$
J = \oint p\, dq = \int\!\!\int dp\, dq
$$

SHO의 예: $H = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 q^2 = E$이면, 궤적은 $p$-$q$ 평면의 타원이고

$$
J = \pi \cdot \sqrt{2mE} \cdot \sqrt{\frac{2E}{m\omega^2}} = \frac{2\pi E}{\omega} = \frac{E}{\nu}
$$

| 맥락 | $J$의 역할 |
|---|---|
| 위상 공간 기하 | 닫힌 궤적이 둘러싸는 면적 |
| Adiabatic 과정 | 매개변수를 천천히 바꿀 때 근사적으로 보존 |
| 구 양자론 | 양자화 대상: $J = nh$ → SHO에서 $E = nh\nu$ |
| 적분 가능 계 | action-angle 변수에서 토러스 위 등속 운동의 "반지름" |

## Poincaré 적분 불변량 vs. Adiabatic Invariant — 핵심 구분

둘 다 $\oint p\, dq$를 계산하지만, **적분 경로의 물리적 의미가 다르다.**

**Poincaré 적분 불변량**: $\gamma$는 한 시각에 여러 초기 조건들의 앙상블이 이루는 닫힌 곡선이다. 단일 입자의 궤적이 아니다. 이 불변량은 Hamiltonian 역학의 **정확한 결과**이며, 시간 간격이나 Hamiltonian의 시간 의존성에 관계없이 항상 성립한다.

**Adiabatic invariant**: $J = \oint p\, dq$의 적분 경로는 단일 입자의 한 주기 궤도이다. 매개변수가 변하면 궤도가 닫히지 않으므로, $J$를 정의하려면 매개변수 변화가 한 주기보다 훨씬 느려야 한다 (adiabatic 조건). 이 조건 하에서 $J$는 **근사적으로** 보존된다.

| | Poincaré 적분 불변량 | Adiabatic invariant |
|---|---|---|
| 적분 경로 | 앙상블 (여러 입자, 한 시각) | 단일 입자의 한 주기 궤도 |
| 정확성 | **정확히** 보존 | **근사적으로** 보존 |
| 조건 | 없음 (항상 성립) | 매개변수 변화가 한 주기보다 느려야 함 |

# 연관 학습 노트

- [[AM lecture note - Canonical transformation]]
- [[AM lecture note - Generating function]]
- [[AM lecture note - Interior product, Cartan formula and Poincare Lemma]]
- [[AM lecture note - Symplectic geometry intro]]
- [[Symplectic form as the grammar of conjugacy]]

# References

- Si Li, *Classical Mechanics and Geometry*, Chapter 3, §3.4.1–3.4.2 (pp. 108–111)

# 다음 강의

