---
title: Time Reversal Operator
tags: [quantum_mechanics, symmetry, time_reversal, study]
subjects: physics
date: "2025-06-08"
---

# Time Reversal Operator (시간 반전 연산자)

## 개념 개요

시간 반전 연산자 $\hat{T}$ (또는 $\hat{\Theta}$)는 양자역학에서 시간의 방향을 뒤바꾸는 대칭 연산자이다. 고전역학과 달리 양자역학에서는 복소함수와 확률진폭을 다루기 때문에 시간 반전이 단순하지 않다.

## 고전역학에서의 시간 반전

고전역학에서 시간 반전 $t \rightarrow -t$는 다음과 같은 변환을 일으킨다:

- 위치: $\vec{r}(t) \rightarrow \vec{r}(-t)$  → 위치의 부호는 바뀌지 않는다. 
- 속도: $\vec{v}(t) = \frac{d\vec{r}}{dt} \rightarrow -\vec{v}(-t)$ → ==속도의 부호는 바뀐다!!!== 그야 운동을 역제생한 비디오를 보면 속도가 반대 방향으로 보이기 때문
- 가속도: $\vec{a}(t) = \frac{d\vec{v}}{dt} \rightarrow \vec{a}(-t)$ → ==가속도의 부호는 그대로이다.== 
- 각운동량: $\vec{L} = \vec{r} \times m\vec{v} \rightarrow -\vec{L}$ → ==속도와 같이 각속도와 각운동향의 부호는 바뀐다.== 

## 양자역학에서의 시간 반전

### 반유니터리 연산자

양자역학에서 시간 반전 연산자는 **반유니터리(antiunitary)** 연산자이다:

$$\hat{T} = \hat{U}\hat{K}$$

여기서:
- $\hat{U}$: 유니터리 연산자
- $\hat{K}$: 복소켤레 연산자

### 시간 반전의 성질

1. **슈뢰딩거 방정식에 대한 작용**:
   $$i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle = \hat{H}|\psi(t)\rangle$$
   
   시간 반전 후:
   $$-i\hbar\frac{\partial}{\partial t}|\psi(-t)\rangle = \hat{T}\hat{H}\hat{T}^{-1}|\psi(-t)\rangle$$

2. **해밀토니안의 변환**:
   시간 반전 불변성을 가지려면:
   $$\hat{T}\hat{H}\hat{T}^{-1} = \hat{H}$$

## 스핀-1/2 입자에 대한 시간 반전

### 파울리 스핀 행렬의 변환

$$\hat{T}\sigma_x\hat{T}^{-1} = -\sigma_x$$
$$\hat{T}\sigma_y\hat{T}^{-1} = \sigma_y$$
$$\hat{T}\sigma_z\hat{T}^{-1} = -\sigma_z$$

### 구체적인 표현

스핀-1/2에 대해:
$$\hat{T} = -i\sigma_y\hat{K}$$

스핀 상태에 대한 작용:
$$\hat{T}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} -b^* \\ a^* \end{pmatrix}$$

## 크라머스 정리 (Kramers' Theorem)

### $\hat{T}^2$의 성질

반정수 스핀 입자의 경우:
$$\hat{T}^2 = -\hat{I}$$

정수 스핀 입자의 경우:
$$\hat{T}^2 = +\hat{I}$$

### 크라머스 축퇴

반정수 스핀을 가진 입자가 홀수 개 있는 시스템에서, 시간 반전 불변 해밀토니안의 모든 에너지 준위는 최소 2중 축퇴된다.

**증명 개요**:
- $|\psi\rangle$이 에너지 $E$의 고유상태라면, $\hat{T}|\psi\rangle$도 같은 에너지를 가진다
- 만약 $\hat{T}|\psi\rangle = c|\psi\rangle$라면, $\hat{T}^2|\psi\rangle = |c|^2|\psi\rangle$
- 그런데 $\hat{T}^2 = -\hat{I}$이므로 $|c|^2 = -1$ (불가능)
- 따라서 $|\psi\rangle$와 $\hat{T}|\psi\rangle$는 서로 다른 상태이며, 같은 에너지를 가진다

## 물리적 의미

1. **자기장의 효과**: 자기장은 시간 반전에 의해 방향이 바뀐다
2. **궤도각운동량**: $\hat{T}\hat{L}\hat{T}^{-1} = -\hat{L}$
3. **스핀**: $\hat{T}\hat{S}\hat{T}^{-1} = -\hat{S}$

## 응용

### 고체물리학
- 에너지 밴드 구조의 대칭성
- 홀 효과와 관련된 현상들

### 원자물리학
- 제만 효과에서의 축퇴 제거
- 스핀-궤도 결합 효과

### 핵물리학
- 핵 스핀 상태의 분석
- 베타 붕괴에서의 패리티 위반

## 실험적 검증

시간 반전 대칭성은 대부분의 물리 현상에서 보존되지만, 약한 상호작용에서는 작은 위반이 관찰된다 (CP 위반과 관련).

## 참고 문헌

- Sakurai, J.J. "Modern Quantum Mechanics"
- Tinkham, M. "Group Theory and Quantum Mechanics"
