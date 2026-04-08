---
title: Canonical Momentum in Magnetic Field
date: "2026-04-07"
subject: physics
tags: [study, concept]
class: study
---

# Canonical Momentum in Magnetic Field

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\mathbf{A}$ | 벡터 포텐셜 (vector potential) |
| $\mathbf{p}$ | 정준 운동량 (canonical momentum) |
| $m\mathbf{v}$ | 역학적 운동량 (mechanical momentum) |
| $e$ | 전하 |
| $\mathbf{B}$ | 자기장 |
| $L$ | 라그랑지안 |
| $H$ | 해밀토니안 |

## 핵심 주의

> [!warning] **정준 운동량 $\mathbf{p}$는 $m\mathbf{v}$가 아니다!**
> 자기 포텐셜이 있을 때, 정준 운동량과 역학적 운동량은 다른 물리량이다.
> $$
> \mathbf{p} = m\mathbf{v} + e\mathbf{A} \neq m\mathbf{v}
> $$

## 요약

| 물리량 | 표현 | 의미 |
|--------|------|------|
| 라그랑지안 | $\frac{1}{2}mv^2 + e\mathbf{v}\cdot\mathbf{A}$ | 운동방정식 재현 |
| 정준 운동량 | $\mathbf{p} = m\mathbf{v} + e\mathbf{A}$ | 해밀턴 형식의 기본 변수 |
| 역학적 운동량 | $m\mathbf{v} = \mathbf{p} - e\mathbf{A}$ | 실제 입자 운동량 |
| 해밀토니안 | $\frac{(\mathbf{p}-e\mathbf{A})^2}{2m}$ | 순수 운동에너지 |


## 출발점: 운동방정식

자기장만 있을 때 ($\mathbf{E}=0$) 로렌츠 힘:

$$
m\ddot{\mathbf{x}} = e(\mathbf{v} \times \mathbf{B})
$$

이 운동방정식을 재현하는 라그랑지안을 **역으로** 찾는다.

## 라그랑지안

$$
L = \frac{1}{2}m\mathbf{v}^2 + e\mathbf{v}\cdot\mathbf{A}
$$
속도와 벡터포텐셜의 스칼라곱, 거기에 전하를 곱한 게 에너지가 된다. 
보통의 포텐셜에너지는 위치에만 의존하는 함수였다는 점에서 특이하게 다가온다. 


$e\mathbf{v}\cdot\mathbf{A}$ 항이 있어야 오일러-라그랑주 방정식에서 로렌츠 힘이 나온다. 이건 공리가 아니라 **운동방정식으로부터 역으로 구성한 것**이다.

### 검증: 오일러-라그랑주 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{x}_i} - \frac{\partial L}{\partial x_i} = 0
$$

$$
\frac{\partial L}{\partial \dot{x}_i} = m\dot{x}_i + eA_i
$$

$$
\frac{d}{dt}(m\dot{x}_i + eA_i) = m\ddot{x}_i + e\dot{x}_j \frac{\partial A_i}{\partial x_j}
$$

$$
\frac{\partial L}{\partial x_i} = e\dot{x}_j \frac{\partial A_j}{\partial x_i}
$$

따라서:

$$
m\ddot{x}_i = e\dot{x}_j\left(\frac{\partial A_j}{\partial x_i} - \frac{\partial A_i}{\partial x_j}\right) = e(\mathbf{v}\times\mathbf{B})_i \quad \checkmark
$$

## 정준 운동량 (Canonical Momentum)

라그랑지안으로부터 정의:

$$
p_i \equiv \frac{\partial L}{\partial \dot{x}_i} = m\dot{x}_i + eA_i
$$

$$
\boxed{\mathbf{p} = m\mathbf{v} + e\mathbf{A}}
$$

- $\mathbf{p}$: 정준 운동량 — 해밀턴 형식의 기본 변수
- $m\mathbf{v}$: 역학적 운동량 — 실제 입자의 운동
- $e\mathbf{A}$: 장(field)이 기여하는 운동량

## 해밀토니안

르장드르 변환:

$$
H = \mathbf{p}\cdot\mathbf{v} - L = \frac{(\mathbf{p} - e\mathbf{A})^2}{2m}
$$

$\mathbf{p} - e\mathbf{A} = m\mathbf{v}$이므로, 해밀토니안은 결국 **순수한 운동에너지**다.


## Notes from Claude

- $e\mathbf{v}\cdot\mathbf{A}$ 항의 논리: "라그랑지안이 이래야 한다"가 아니라 "로렌츠 힘을 재현하려면 이래야 한다"는 역방향 논리
- $\mathbf{p} \neq m\mathbf{v}$임을 항상 주의할 것 — 해밀토니안에서 운동량을 쓸 때마다 $e\mathbf{A}$ 보정이 필요

## Related Concepts

[[Analytical Mechanics]]