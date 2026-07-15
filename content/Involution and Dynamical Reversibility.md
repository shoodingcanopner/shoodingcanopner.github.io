---
title: "Involution and Dynamical Reversibility"
date: "2025-11-29"
subject: physics
tags:
  - study
  - concept
  - hamiltonian-mechanics
  - time-reversal
class: study
---

# Involution and Dynamical Reversibility

## Overview

해밀턴 역학에서 시간역전 연산자가 involution의 성질을 가지며, 이것이 동역학적 가역성(dynamical reversibility)과 어떻게 연결되는지 설명한다. 비평형 통계역학에서 엔트로피 생성을 이해하는 데 필수적인 개념.

## 기호 정리

| 기호 | 의미 |
|------|------|
| $\Omega$ | 위상공간 (phase space) |
| $x = (q, p)$ | 위상공간의 점 (위치, 운동량) |
| $\pi$ | 시간역전 연산자 |
| $f_t$ | 시간진화 연산자 (해밀턴 역학) |
| $H$ | 해밀턴니안 (총 에너지) |

## Key Points

### 1. Involution의 정의

함수 $\pi$가 involution이다 $\Leftrightarrow$ $\pi \circ \pi = \text{identity}$

즉, 두 번 적용하면 원래대로 돌아온다:
시간 반전은 원래 적용

$$\pi(\pi(x)) = x \tag{1}$$

**간단한 예시:**
- 부호 바꾸기: $\pi(x) = -x$이면 $\pi(\pi(x)) = -(-x) = x$
- 역수: $\pi(x) = 1/x$이면 $\pi(\pi(x)) = 1/(1/x) = x$
- 가만히 두기: 가만히 두면 당연히 두 번 적용해도 원래랑 같겠죠?
- 거울 반사: 두 번 뒤집으면 원래대로

### 2. 해밀턴 역학에서 시간역전 연산자

위상공간 $\Omega$에서 점 $x = (q_1,...,q_N, p_1,...,p_N)$에 대해:

$$\pi(q, p) = (q, -p) \tag{2}$$

**물리적 의미:**
- 위치 $q$는 그대로 유지 (입자 배치 동일)
- 운동량 $p$의 부호 반전 (속도 방향을 뒤집음)
- "시간을 거꾸로 돌린다" = 영화 역재생

**Involution 확인:**

$$\pi(\pi(q,p)) = \pi(q,-p) = (q, -(-p)) = (q,p) \checkmark \tag{3}$$

### 3. 동역학적 가역성


![[20251129_200848.jpg]]

지우개를 왔다갔다 던지는 상황을 상상해보자. 
세상은 time-reversal 고전 역학을 따르므로, 
도착 속도와 반대 속도로 던지면, 출발 속도의 반대 속도로 도착한다. 이 광경은 비디오 테이프를 역방향으로 재생한 것($f_{-t}$로 유도한 것의 초기 속도 부호의 음수를 붙이고 후기 속도 부호에 음수를 붙인 것)과 완벽히 일치한다. 


해밀턴 역학의 핵심 성질:

$$\pi f_t \pi = f_t^{-1} = f_{-t} \tag{4}$$

**의미 해석:**

좌변 $\pi f_t \pi$의 단계:
1. 초기 상태 $x = (q_0, p_0)$
2. 시간역전: $\pi(q_0, p_0) = (q_0, -p_0)$
3. 시간 $t$만큼 진화: $f_t(q_0, -p_0) = (q_t', p_t')$
4. 다시 시간역전: $\pi(q_t', p_t') = (q_t', -p_t')$

우변 $f_{-t}$:
- 시간을 $-t$만큼 진화 (역진화) ==즉 t초 전의 과거 상태로 mapping하는 것.== 

**물리적 직관:**
"운동량을 뒤집고 → 진화시키고 → 다시 운동량을 뒤집는 것" = "시간을 거꾸로 진화시키는 것, t 시간 뒤의 과거를 아는 것"

### 4. 구체적 예시: 단순조화진동자

해밀턴니안: $H = \frac{p^2}{2m} + \frac{1}{2}kq^2$

각진동수: $\omega = \sqrt{k/m}$

**정방향 진화** (시간 $t = \pi/(2\omega)$, 1/4 주기):
- 초기: $(q_0, p_0) = (A, 0)$ (최대 변위, 정지)
- 최종: $f_t(A, 0) = (0, -mA\omega)$ (평형점, 최대 속도로 아래로)

**시간역전된 진화** $\pi f_t \pi$:
1. $\pi(A, 0) = (A, 0)$ (운동량 원래 0)
2. $f_t(A, 0) = (0, -mA\omega)$
3. $\pi(0, -mA\omega) = (0, mA\omega)$ (운동량 반전)

**역진화** $f_{-t}$:
- $f_{-t}(A, 0) = (0, mA\omega)$ (위로 올라감)

결과: 같다!

### 5. Involution의 유용한 성질

$\pi^2 = \text{id}$를 이용하면 식 (4)를 여러 형태로 쓸 수 있다:

양변에 왼쪽에서 $\pi$ 곱하기:
$$f_t \pi = \pi f_t^{-1} \tag{5}$$

양변에 오른쪽에서 $\pi$ 곱하기:
$$f_t = \pi f_t^{-1} \pi \tag{6}$$

이런 동등한 형태들이 비평형 통계역학 유도에서 자주 활용된다.

### 6. 비평형 통계역학과의 연결

**미시적 가역성 vs 거시적 비가역성:**

- 해밀턴 역학: $\pi f_t \pi = f_t^{-1}$ (시간 대칭)
- 엔트로피 생성: $S(t) - S(0) > 0$ (시간 비대칭)

**핵심 질문:** 
어떻게 미시적으로 가역적인 역학에서 거시적 비가역성이 나타나는가?

**답:**
경로 확률의 비대칭성!

$$\frac{P[\text{forward trajectory}]}{P[\text{time-reversed trajectory}]} \neq 1$$

동역학은 가역적이지만 ($f_t = \pi f_t^{-1} \pi$), 경로의 확률은 대칭적이지 않다.

## Questions & Insights

- Involution이라는 추상적 개념이 물리적으로는 "시간을 두 번 역전하면 원래대로"라는 자명한 성질을 표현한다.
- 동역학적 가역성이 있어도 통계적으로는 비가역성이 나타날 수 있다는 것이 비평형 통계역학의 핵심.
- Liouville 정리(위상공간 부피 보존)와 함께 사용하면 경로 측도의 성질을 유도할 수 있다.

## Related Concepts

- [[Time_Reversal_Operator]]
- [[Lagrangian Mechanics]]
- [[Poisson_Brackets]]
- [[Liouville's Theorem]]

## References

이 노트는 "Time-Reversal and Entropy" (Maes & Netočný, 2003) 논문을 공부하면서 글리아와의 대화를 통해 작성되었다.
[[📑 Journal reading - Time-Reversal and Entropy]]
## Notes from Claude

Involution의 개념은 수학적으로는 간단하지만 ($\pi^2 = \text{id}$), 물리적으로는 깊은 의미를 담고 있다. 시간역전 대칭성이라는 미시 역학의 기본 성질이 어떻게 거시적 비가역성(엔트로피 증가)과 양립하는지를 이해하는 출발점이다.

==핵심은 "동역학이 가역적"이라는 것과 "경로의 확률이 대칭적"이라는 것이 다르다는 점이다. $\pi f_t \pi = f_t^{-1}$는 항상 성립하지만, $P[\omega] = P[\pi\omega]$는 평형에서만 성립한다.== → 신기한 부분, 왜 그런 지는 논문을 보면 알겠지. 
