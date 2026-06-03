---
title: AM lecture note - Lagrangian submanifold
date: "2026-06-02"
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

[[AM lecture note - Canonical transformation revisited]]

# 오늘의 핵심

- 라그랑지안 부분다양체 $L \subset M$은 $j^*\omega = 0$이고 $\dim L = \frac{1}{2}\dim M$인 부분다양체다.
- $j^*\omega$의 계산은 **"$p$를 $q$의 함수로 대입하고 chain rule로 $dp$를 $dq$로 바꾼다"** 는 구체적 절차로 실행된다.
- $L_f$가 라그랑지안 부분다양체인 것 ↔ 생성함수 $F(q)$가 존재하여 $f_i = \partial F / \partial q_i$.
- 이 구조는 Legendre 변환 및 Hamilton-Jacobi 방정식과 정확히 연결된다.

# 필기 내용

## Definition 3.5.20: 라그랑지안 부분다양체

| Symbol | Meaning |
|--------|---------|
| $(M, \omega)$ | 심플렉틱 다양체 |
| $j: L \hookrightarrow M$ | 포함 사상 (inclusion map) |
| $j^*\omega$ | $\omega$의 $L$로의 pull-back |
| $T^*Q$ | configuration space $Q$의 여접다발 (cotangent bundle) |

심플렉틱 다양체 $(M, \omega)$의 부분다양체 $j: L \subset M$이 **라그랑지안 부분다양체(Lagrangian submanifold)** 이려면:

$$
\omega|_L := j^*\omega = 0, \qquad \dim L = \frac{1}{2} \dim M
$$

이것은 각 점 $p \in L$에서 접공간 $T_p L$이 $T_p M$의 선형 라그랑지안 부분공간(Def 3.3.5)임을 의미한다.

## $j^*\omega$ 계산법

위상공간 $\mathbb{R}^{2n}$에 표준 심플렉틱 형식 $\omega = \sum_i dp_i \wedge dq_i$. 부분다양체 $L_f$를 다음 포함 사상으로 정의:

$$
j_f: \mathbb{R}^n \longrightarrow \mathbb{R}^{2n}
$$

$$
(q_1, \cdots, q_n) \longmapsto (q_1, \cdots, q_n,\; p_1 = f_1(q), \cdots, p_n = f_n(q))
$$

**Pull-back 계산 규칙**: $L_f$ 위에서 $p_i = f_i(q)$이므로

$$
j_f^*(dq_i) = dq_i
$$

$$
j_f^*(dp_i) = d(f_i(q)) = \sum_k \frac{\partial f_i}{\partial q_k} dq_k
$$

대입하면:

$$
j_f^*\omega = \sum_i j_f^*(dp_i) \wedge j_f^*(dq_i) = \sum_i \left(\sum_k \frac{\partial f_i}{\partial q_k} dq_k\right) \wedge dq_i = \sum_{i,k} \frac{\partial f_i}{\partial q_k}\, dq_k \wedge dq_i
$$

$dq_k \wedge dq_i = -dq_i \wedge dq_k$를 이용해 $i < k$인 쌍으로 묶으면:

$$
j_f^*\omega = \sum_{i < k} \left(\frac{\partial f_i}{\partial q_k} - \frac{\partial f_k}{\partial q_i}\right) dq_k \wedge dq_i
$$

따라서 $j_f^*\omega = 0$ ↔ 모든 $i, k$에 대해

$$
\frac{\partial f_i}{\partial q_k} = \frac{\partial f_k}{\partial q_i}
$$

Poincaré Lemma에 의해 이것은 다음과 동치:

$$
\boxed{L_f \text{ 는 라그랑지안 부분다양체} \iff \exists\, F(q) \text{ s.t. } f_i(q) = \frac{\partial F(q)}{\partial q_i}}
$$
이 $F(q)$를 $L$의 **생성함수**라 한다.
생성함수 정의를 $\frac{\partial f_i}{\partial q_k} = \frac{\partial f_k}{\partial q_i}$에 대입하면 이 성질이 자명하다. 
$$
\frac{\partial f_i}{\partial q_k} = \frac{\partial}{\partial q_k} \frac{\partial F(q)}{\partial q_i}= \frac{\partial}{\partial q_i} \frac{\partial F(q)}{\partial q_k} =\frac{\partial f_k}{\partial q_i}
$$

## 구체적 예시 ($n = 2$)

$\omega = dp_1 \wedge dq_1 + dp_2 \wedge dq_2$, $p_1 = q_2$, $p_2 = q_1$으로 정의된 $L_f$:

$$
j_f^*(dp_1) = dq_2,\qquad j_f^*(dp_2) = dq_1
$$

$$
j_f^*\omega = dq_2 \wedge dq_1 + dq_1 \wedge dq_2 = 0 \checkmark
$$

생성함수: $F(q_1, q_2) = q_1 q_2$이면 $\partial F/\partial q_1 = q_2 = p_1$, $\partial F/\partial q_2 = q_1 = p_2$. ✓

## 고전역학과의 연결

세 표현이 같은 것을 말하고 있다:

$$
\underbrace{p_i = \frac{\partial \mathcal{L}}{\partial \dot{q}_i}}_{\text{Legendre 변환}} \quad\longleftrightarrow\quad \underbrace{p_i = \frac{\partial F}{\partial q_i}}_{\text{라그랑지안 부분다양체}} \quad\longleftrightarrow\quad \underbrace{\frac{\partial p_i}{\partial q_k} = \frac{\partial p_k}{\partial q_i}}_{j_f^*\omega = 0}
$$

**Legendre 변환**: $p_i = \partial \mathcal{L}/\partial \dot{q}_i$는 접다발 $TQ$ (속도 공간)에서 여접다발 $T^*Q$ (운동량 공간)으로의 사상

$$
\mathbb{F}\mathcal{L}: TQ \longrightarrow T^*Q,\qquad (q_i, \dot{q}_i) \mapsto \left(q_i,\; p_i = \frac{\partial \mathcal{L}}{\partial \dot{q}_i}\right)
$$

을 정의한다. 이 사상의 상(image)이 $T^*Q$ 안의 라그랑지안 부분다양체다 — Hessian $\partial^2 \mathcal{L}/\partial \dot{q}_i \partial \dot{q}_j$가 non-degenerate할 때. 이 조건이 심플렉틱 언어로는 $\omega$의 non-degeneracy에 해당한다.

**Hamilton-Jacobi 방정식**: 주 함수 $S(q, t)$에 대해 $p_i = \partial S/\partial q_i$. 이것이 바로 생성함수를 액션으로 두었을 때($F = S$)이다. HJ 방정식의 해가 존재 ↔ 위상공간에 라그랑지안 부분다양체가 존재.

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

- [[AM lecture note - Canonical transformation revisited]]
- [[AM lecture note - Generating function]]
- [[AM lecture note - Poisson bracket and Darboux theorem]]

# References

- Si Li, *Classical Mechanics and Geometry*, Chapter 3, §3.5.3 (p. 120)

# 다음 강의
[[AM lecture note - Lie Group, Lie Algebra and Moment Map]]

# 필기 원본
