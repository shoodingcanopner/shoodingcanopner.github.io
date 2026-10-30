---
title: SM HW5-1 Time Reversal Symmetry of Hamiltonian Dynamics
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 5th HW, Problem 1

# 문제

(1) Time reversal $\mathrm{TR}: (\mathbf{q}, \mathbf{p}, t) \to (\mathbf{q}, -\mathbf{p}, -t)$에 의해 $\{\rho, \mathcal{H}\} \to \{\mathcal{H}, \rho\} = -\{\rho, \mathcal{H}\}$임을 보여라. 또한 $(\mathbf{q}(t), \mathbf{p}(t))$가 Hamilton equation의 해이면 $(\mathbf{q}(-t), -\mathbf{p}(-t))$도 해임을 보여라.

(2) 이 관계를 비가역성의 측면에서 해석하라.

# 내 풀이

**(1) Poisson bracket**: Hamiltonian이 TR에 불변이라 가정하고, $\partial/\partial p \to \partial/\partial(-p)$를 넣어

$$
\mathrm{TR}(\{\rho, \mathcal{H}\}) = \sum_i \frac{\partial\rho}{\partial q_i}\frac{\partial\mathcal{H}}{\partial(-p_i)} - \frac{\partial\mathcal{H}}{\partial q_i}\frac{\partial\rho}{\partial(-p_i)} = \{\mathcal{H}, \rho\} = -\{\rho, \mathcal{H}\}
$$

**(1) 해의 대칭**: 목표를 "$\dot q_i(-t) = \frac{\partial\mathcal{H}}{\partial(-p_i)}$, $\dot p_i(-t) = \frac{\partial\mathcal{H}}{\partial q_i}$"로 두고,

$$
\dot q(-t) = \frac{d}{dt}q(-t) = \frac{d(-t)}{dt}\frac{dq(-t)}{d(-t)} = -\frac{dq(t)}{dt} = -\dot q(t)
$$

같은 논리로 $\dot p(-t) = -\dot p(t)$. 따라서 원래 Hamilton equation과 동치.

**(2)** 고전역학은 순전히 가역적인 운동밖에 설명 못 한다. 시간을 거꾸로 한 운동도 운동방정식의 해가 될 수 있으므로, 모든 운동을 미시적으로 보면 가역적이다. 비가역성은 여러 입자의 운동을 뭉뚱그려 볼 때 나타난다.

# 풀이 검토

**판정: Poisson bracket 부분은 맞다. 해의 대칭 증명은 chain rule 단계가 틀렸고, 결론은 맞지만 논증으로는 성립하지 않는다. (2)는 방향은 맞으나 핵심 개념이 빠졌다.**

> [!failure] 1. 해의 대칭 증명: "$\frac{dq(-t)}{d(-t)} = \frac{dq(t)}{dt}$"는 틀렸다
> $\frac{dq(-t)}{d(-t)}$는 "$q$의 도함수를 **시각 $-t$에서** 계산한 값", 즉 $\dot q(-t)$이다. "시각 $t$에서의 값" $\dot q(t)$가 아니다. 따라서 올바른 chain rule은 다음과 같다.
> $$
> \frac{d}{dt}\big[q(-t)\big] = -\dot q(-t)
> $$
> 답안의 $\dot q(-t) = -\dot q(t)$는 $\dot q$가 **시간에 대한 홀함수**라는 주장인데, 일반적인 궤적에서는 성립하지 않는다. 같은 오류가 $\dot p$에도 반복되었다.
>
> 근본 원인은 **"$q(-t)$를 미분한 것"과 "$\dot q$를 $-t$에서 계산한 것"을 같은 기호 $\dot q(-t)$로 썼기** 때문이다. 이런 문제는 새 궤적에 **새 이름**을 붙이면 피할 수 있다.

> [!tip] 올바른 증명
> 새 궤적을 $\tilde q(t) \equiv q(-t)$, $\tilde p(t) \equiv -p(-t)$로 정의한다. 가정은 $\mathcal{H}(q, -p) = \mathcal{H}(q, p)$이다. 이 가정에서 $\partial\mathcal{H}/\partial p$는 $p$에 대해 홀함수, $\partial\mathcal{H}/\partial q$는 짝함수가 된다.
>
> **첫째 식**:
> $$
> \frac{d\tilde q}{dt} = -\dot q(-t) = -\frac{\partial\mathcal{H}}{\partial p}\Big(q(-t), p(-t)\Big) = \frac{\partial\mathcal{H}}{\partial p}\Big(q(-t), -p(-t)\Big) = \frac{\partial\mathcal{H}}{\partial p}(\tilde q, \tilde p)
> $$
> **둘째 식**:
> $$
> \frac{d\tilde p}{dt} = +\dot p(-t) = -\frac{\partial\mathcal{H}}{\partial q}\Big(q(-t), p(-t)\Big) = -\frac{\partial\mathcal{H}}{\partial q}\Big(q(-t), -p(-t)\Big) = -\frac{\partial\mathcal{H}}{\partial q}(\tilde q, \tilde p)
> $$
> 따라서 $(\tilde q, \tilde p)$도 Hamilton equation을 만족한다. 핵심은 **편미분을 어느 점에서 계산하는지 추적하는 것**과 **$\mathcal{H}$가 $p$에 대해 짝함수라는 가정을 실제로 쓰는 것**이다. 답안은 Poisson bracket 부분에서는 이 가정을 밝혔지만, 해의 대칭 부분에서는 쓰지 않았다.

> [!warning] 2. Poisson bracket 결과로 무엇을 보이려 했는지 마무리하지 않았다
> 이 계산의 목적은 **Liouville equation의 TR 불변성**이다. TR에서는 $\rho(q, p, t) \to \rho(q, -p, -t)$이고 $\partial/\partial t \to -\partial/\partial t$이다. 따라서
> $$
> \frac{\partial\rho}{\partial t} = -\{\rho, \mathcal{H}\}
> $$
> 의 양변이 모두 부호가 바뀌어 같은 방정식이 된다. 이 결론을 한 줄 써야 문제가 완결된다.

> [!tip] 3. TR 불변성이 깨지는 경우
> 자기장이 있으면 $\mathcal{H} = \frac{(\mathbf{p} - e\mathbf{A})^2}{2m}$은 $p$에 대해 짝함수가 아니다. 이때는 $\mathbf{B} \to -\mathbf{B}$를 함께 뒤집어야 대칭이 회복된다. "Hamiltonian이 TR에 불변이라 가정"이 실제로 어떤 조건인지 보여주는 좋은 예다.

> [!warning] 4. (2) "고전역학은 가역적인 운동밖에 설명 못 한다"는 과장이다
> 마찰처럼 비가역적인 현상도 고전역학으로 기술한다. 다만 그것은 많은 자유도를 뭉뚱그린 **유효(effective) 기술**이고, 근본적인 **Hamiltonian dynamics가 TR 대칭**이라는 것이 정확한 표현이다.
>
> 빠진 핵심 개념은 다음과 같다. 강의의 H-theorem 부분과 직결된다.
> - **Loschmidt's paradox**: 미시 법칙이 가역적이라면 비가역성은 어디서 오는가?
> - **Coarse-graining**: $N$-particle density $\rho$ 대신 reduced density $f_1$을 쓰면 정보를 버리게 된다. Liouville theorem 때문에 $\rho$로 정의한 fine-grained Gibbs entropy는 시간에 대해 **일정**하다.
> - **Molecular chaos (Stosszahlansatz)**: 충돌 **전** 두 입자가 독립이라는 가정이 시간 방향을 고른다. 충돌 **후**에 독립이라고 가정하면 $H$가 증가하는 반대 결론이 나온다. 강의 필기의 "어디서부터 time reversal symmetry가 사라지지?"에 대한 답이 바로 이것이다.
> - **초기 조건**: 낮은 entropy의 특별한 초기 상태에서 출발하기 때문에 한 방향만 관찰된다.

# 연관 노트

- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]
- [[SM HW5-2 Derivation of Liouville's Theorem]]
- [[Gibbs Entropy]]

# 다음 문제
- [[SM HW5-2 Derivation of Liouville's Theorem|HW5-2 Derivation of Liouville's Theorem]]