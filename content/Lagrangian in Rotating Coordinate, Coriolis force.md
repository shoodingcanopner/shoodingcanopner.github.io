---
title: Lagrangian in Rotating Coordinate, Coriolis force
date: 2026-03-04
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Rotating Coordinate Systems

## Overview

라그랑지안 형식론이 **임의의 좌표계에서도 성립**함을 보여주는 예제.
관성계에서 정의된 자유입자의 라그랑지안을 회전 좌표계로 변환하면, 오일러-라그랑주 방정식으로부터 원심력과 코리올리 힘이 **자동으로** 도출된다.

벡터를 벡터로 미분하는 수학적 스킬도 다루었다. 

| 기호 | 의미 |
|------|------|
| $\mathbf{r}$ | 관성계에서의 위치 벡터 |
| $\mathbf{r}'$ | 회전 좌표계에서의 위치 벡터 |
| $\boldsymbol{\omega}$ | 회전 좌표계의 각속도 벡터 |
| $\omega$ | 각속도의 크기 |

## Key Points

### 설정

관성계에서 자유입자의 라그랑지안:

$$
L = \frac{1}{2}m\dot{\mathbf{r}}^2
\tag{2.17}
$$

$z$축을 중심으로 각속도 $\boldsymbol{\omega} = (0, 0, \omega)$로 회전하는 좌표계를 도입한다. 두 좌표계의 관계:

$$
x' = x\cos\omega t + y\sin\omega t
$$

$$
y' = y\cos\omega t - x\sin\omega t
$$

$$
z' = z
$$

### 라그랑지안 변환 (식 2.19)

위 관계식을 $L$에 대입하면:

$$
L =  \frac{1}{2}m[(\dot{x}' - \omega y')^2 + (\dot{y}' - \omega x')^2 + \dot{z}^2] = \frac{1}{2}m(\dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}')^2
\tag{2.19}
$$

**핵심:** 관성계의 속도 $\dot{\mathbf{r}}$는 회전 좌표계에서 $\dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}'$로 표현된다.
$\boldsymbol{\omega}\times\mathbf{r}'$는 회전으로 인해 추가되는 속도 항이다.

편의상 $\mathbf{w} \equiv \dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}'$로 정의하면 $L = \frac{1}{2}m|\mathbf{w}|^2$.

### 오일러-라그랑주 방정식 적용 (식 2.20)

**$\partial L / \partial \dot{\mathbf{r}}'$ 계산:**

$\boldsymbol{\omega}\times\mathbf{r}'$는 $\dot{\mathbf{r}}'$에 무관하므로:

$$
\frac{\partial L}{\partial \dot{\mathbf{r}}'} = m\mathbf{w} = m(\dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}')
$$

$\boldsymbol{\omega}$는 상수이므로 시간미분하면:

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{\mathbf{r}}'} = m(\ddot{\mathbf{r}}' + \boldsymbol{\omega}\times\dot{\mathbf{r}}')
\tag{2.20b}
$$

**$\partial L / \partial \mathbf{r}'$ 계산:**

$\dot{\mathbf{r}}'$는 $\mathbf{r}'$에 무관하므로, $\boldsymbol{\omega}\times\mathbf{r}'$ 항만 기여한다.
벡터 항등식을 이용하면:

$$
\frac{\partial L}{\partial \mathbf{r}'} = m(\dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}')\times\boldsymbol{\omega} = -m\boldsymbol{\omega}\times(\dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}')
\tag{2.20a}
$$
처음에는 벡터로 미분하는 게 어색했었다. 
그냥 성분별로 미분을 구한 다음 다 같이 합치면 된다. 

### 운동방정식 (식 2.21)

오일러-라그랑주 방정식 $\frac{d}{dt}\frac{\partial L}{\partial \dot{\mathbf{r}}'} - \frac{\partial L}{\partial \mathbf{r}'} = 0$에 대입하고 정리하면:

$$
m\ddot{\mathbf{r}}' = -m\boldsymbol{\omega}\times(\boldsymbol{\omega}\times\mathbf{r}') - 2m\boldsymbol{\omega}\times\dot{\mathbf{r}}'
\tag{2.21}
$$

| 항                                                                   | 이름                      | 특징                                      |
| ------------------------------------------------------------------- | ----------------------- | --------------------------------------- |
| $-m\boldsymbol{\omega}\times(\boldsymbol{\omega}\times\mathbf{r}')$ | 원심력 (Centrifugal force) | $\boldsymbol{\omega}$에 수직인 평면에서 바깥쪽을 향함 |
| $-2m\boldsymbol{\omega}\times\dot{\mathbf{r}}'$                     | 코리올리 힘 (Coriolis force) | 속도에 수직, 대기/해류 대순환의 원인                   |

이 두 힘은 **가상력(fictitious forces)**: 회전 좌표계를 사용하기 때문에 나타나는 것이지, 실제 상호작용이 아니다.

### 라그랑지안 접근의 강점

뉴턴 방정식으로 회전 좌표계의 운동방정식을 유도하려면 좌표 변환을 일일이 수작업으로 해야 한다. 반면 라그랑지안 접근에서는:

1. 관성계의 $L$을 정의한다.
2. 좌표 변환을 $L$에 대입한다.
3. 오일러-라그랑주 방정식을 적용한다.

가상력이 **자동으로** 유도된다.

## Questions & Insights

- 일반상대론에서 중력은 원심력, 코리올리 힘과 동일한 의미의 "가상력"이다 (등가원리). 이 연결이 흥미롭다.
- 벡터 미분 $\partial L / \partial \mathbf{r}'$를 계산할 때, 성분별로 쪼개면 $\boldsymbol{\omega}\times$ 연산자가 자연스럽게 나온다. 벡터 미분이 어색할 때는 항상 성분 분해가 안전하다.

## Related Concepts

- [[Lagrangian Mechanics]]

## References

- David Tong, *Classical Dynamics* (Cambridge Lecture Notes), Section 2.2.1
- [[2 The Lagrangian Formalism.pdf]]

## Notes from Claude

### 벡터를 벡터로 미분하면 무엇이 나오는가?

미분의 결과는 분자/분모가 스칼라인지 벡터인지에 따라 달라진다.

| 미분 | 결과 |
|------|------|
| 스칼라 / 스칼라 | 스칼라 |
| 스칼라 / 벡터 | 벡터 (gradient) |
| 벡터 / 스칼라 | 벡터 |
| 벡터 / 벡터 | 텐서 (행렬) |

$\partial L / \partial \mathbf{r}'$에서 $L$은 **스칼라**이므로, 결과는 벡터(gradient)가 된다.

### $\partial L / \partial \mathbf{r}'$를 텐서를 통해 유도하기

chain rule을 적용하면:

$$
\frac{\partial L}{\partial \mathbf{r}'} = m\mathbf{w} \cdot \frac{\partial \mathbf{w}}{\partial \mathbf{r}'}
$$

여기서 $\frac{\partial \mathbf{w}}{\partial \mathbf{r}'}$는 **벡터를 벡터로 미분**한 것이므로 텐서가 된다. $\mathbf{w}$에서 $\mathbf{r}'$에 의존하는 항은 $\boldsymbol{\omega}\times\mathbf{r}'$뿐이므로, $\boldsymbol{\omega} = (0, 0, \omega)$일 때:

$$
\frac{\partial \mathbf{w}}{\partial \mathbf{r}'} = \frac{\partial (\boldsymbol{\omega}\times\mathbf{r}')}{\partial \mathbf{r}'} = \begin{pmatrix} 0 & -\omega & 0 \\ \omega & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

이제 **벡터 $\cdot$ 텐서 = 벡터** 수축을 적용한다. $\mathbf{w} = (w_x, w_y, w_z)$를 대입하면:

$$
m\mathbf{w} \cdot \frac{\partial \mathbf{w}}{\partial \mathbf{r}'} = m(w_y\omega,\ -w_x\omega,\ 0) = m\mathbf{w}\times\boldsymbol{\omega}
$$

반교환성 $\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}$를 적용하면:

$$
\frac{\partial L}{\partial \mathbf{r}'} = m\mathbf{w}\times\boldsymbol{\omega} = -m\boldsymbol{\omega}\times\mathbf{w} = -m\boldsymbol{\omega}\times(\dot{\mathbf{r}}' + \boldsymbol{\omega}\times\mathbf{r}')
$$

**흐름 요약:**

$$
\frac{\partial L}{\partial \mathbf{r}'} = m\mathbf{w}\cdot\underbrace{\frac{\partial \mathbf{w}}{\partial \mathbf{r}'}}_{\text{텐서}} = m\mathbf{w}\times\boldsymbol{\omega}
$$

텐서가 중간에 등장하지만, 벡터와 수축되면서 결국 벡터로 귀결된다.

### 레비-치비타 기호로 더 깔끔하게 유도하기

**준비:** 외적의 $i$번째 성분을 레비-치비타 기호로 쓰면:

$$
(\mathbf{a}\times\mathbf{b})_i = \epsilon_{ijk}a_j b_k
$$

따라서 $w_i = \dot{r}'_i + \epsilon_{ijk}\omega_j r'_k$.

**$\partial L / \partial r'_n$ 계산:**

chain rule 적용:

$$
\frac{\partial L}{\partial r'_n} = m w_i \frac{\partial w_i}{\partial r'_n}
$$

$w_i$에서 $r'_n$에 의존하는 항은 $\epsilon_{ijk}\omega_j r'_k$뿐이므로:

$$
\frac{\partial w_i}{\partial r'_n} = \epsilon_{ijk}\omega_j \frac{\partial r'_k}{\partial r'_n} = \epsilon_{ijk}\omega_j \delta_{kn} = \epsilon_{ijn}\omega_j
$$

대입하면:

$$
\frac{\partial L}{\partial r'_n} = m w_i \epsilon_{ijn} \omega_j
$$

**레비-치비타 반대칭성으로 정리:**

$\epsilon_{ijn} = -\epsilon_{inj}$를 적용:

$$
\frac{\partial L}{\partial r'_n} = -m w_i \epsilon_{inj} \omega_j = -m\epsilon_{inj} w_i \omega_j
$$

외적의 정의 $(\mathbf{a}\times\mathbf{b})_n = \epsilon_{nij}a_i b_j$와 $\epsilon_{inj} = -\epsilon_{nij}$를 이용하면:

$$
\frac{\partial L}{\partial r'_n} = m\epsilon_{nij} w_i \omega_j = m(\mathbf{w}\times\boldsymbol{\omega})_n
$$

모든 성분 $n$에 대해 성립하므로 벡터로 올리면:

$$
\boxed{\frac{\partial L}{\partial \mathbf{r}'} = m\mathbf{w}\times\boldsymbol{\omega} = -m\boldsymbol{\omega}\times\mathbf{w}}
$$

**텐서 방법과 비교:**

| | 텐서 방법 | 레비-치비타 방법 |
|---|---|---|
| **핵심 도구** | 텐서 수축 | $\epsilon_{ijk}$ 반대칭성 |
| **중간 과정** | $3\times3$ 행렬 명시 | 인덱스 치환으로 압축 |
| **장점** | 구조가 시각적으로 명확 | 일반적인 $\boldsymbol{\omega}$에도 바로 적용 가능 |

레비-치비타 방법이 더 깔끔한 이유: $\delta_{kn}$으로 인덱스 하나가 즉시 사라지고, 이후 반대칭성 한 번으로 외적 형태가 바로 나오기 때문이다.

