---
title: "Probability Current Density 유도 과정"
date: "2025-05-28"
tags: [quantum_mechanics, probability_current, griffiths, derivation, study]
subjects: [physics]
category: "quantum mechanics study"
---

# Probability Current Density 유도 과정

## 개요

확률전류밀도(Probability Current Density)는 양자역학에서 확률이 공간을 통해 어떻게 흐르는지를 나타내는 벡터량입니다. 이는 확률 보존 법칙에서 자연스럽게 유도됩니다.

## 1. 출발점: 연속방정식 (Continuity Equation)

확률 보존 법칙을 수식으로 표현하면:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot \vec{J} = 0 \tag{1}$$

여기서:
- $\rho = |\psi|^2 = \psi^* \psi$ (확률밀도)
- $\vec{J}$ (확률전류밀도, 구하고자 하는 양)

## 2. 확률밀도의 시간 변화율 계산

$$\frac{\partial \rho}{\partial t} = \frac{\partial}{\partial t}(\psi^* \psi) = \frac{\partial \psi^*}{\partial t} \psi + \psi^* \frac{\partial \psi}{\partial t} \tag{2}$$

## 3. 슈뢰딩거 방정식 활용

시간 의존 슈뢰딩거 방정식:

$$i\hbar \frac{\partial \psi}{\partial t} = \hat{H}\psi \tag{3}$$

따라서:
- $\frac{\partial \psi}{\partial t} = \frac{1}{i\hbar}\hat{H}\psi = -\frac{i}{\hbar}\hat{H}\psi$
- $\frac{\partial \psi^*}{\partial t} = \frac{i}{\hbar}\hat{H}\psi^*$ (복소켤레)

## 4. 자유입자 해밀토니안 적용

자유입자의 해밀토니안:

$$\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 \tag{4}$$

이를 대입하면:
- $\frac{\partial \psi}{\partial t} = \frac{i\hbar}{2m}\nabla^2\psi$
- $\frac{\partial \psi^*}{\partial t} = -\frac{i\hbar}{2m}\nabla^2\psi^*$

## 5. 확률밀도 시간 변화율에 대입

식 (2)에 위 결과를 대입:

$$\frac{\partial \rho}{\partial t} = -\frac{i\hbar}{2m}\nabla^2\psi^* \cdot \psi + \psi^* \cdot \frac{i\hbar}{2m}\nabla^2\psi$$

$$\frac{\partial \rho}{\partial t} = \frac{i\hbar}{2m}[\psi^*\nabla^2\psi - (\nabla^2\psi^*)\psi] \tag{5}$$

## 6. 벡터 항등식 활용

다음 벡터 항등식을 사용:

$$\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*) = \psi^*\nabla^2\psi - (\nabla^2\psi^*)\psi \tag{6}$$

### 항등식 증명:
$$\nabla \cdot (\psi^*\nabla\psi) = (\nabla\psi^*) \cdot (\nabla\psi) + \psi^*\nabla^2\psi$$
$$\nabla \cdot (\psi\nabla\psi^*) = (\nabla\psi) \cdot (\nabla\psi^*) + \psi\nabla^2\psi^*$$

두 식을 빼면 식 (6)이 성립함.

## 7. 연속방정식과 비교

식 (5)와 (6)을 결합하면:

$$\frac{\partial \rho}{\partial t} = \frac{i\hbar}{2m}\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*) \tag{7}$$

연속방정식 (1)과 비교하면:

$$\nabla \cdot \vec{J} = -\frac{i\hbar}{2m}\nabla \cdot (\psi^*\nabla\psi - \psi\nabla\psi^*)$$

## 8. 최종 결과

확률전류밀도는:

$$\vec{J} = \frac{i\hbar}{2m}(\psi\nabla\psi^* - \psi^*\nabla\psi) \tag{8}$$

또는 허수부만 취해서:

$$\vec{J} = \frac{\hbar}{m}\text{Im}(\psi^*\nabla\psi) \tag{9}$$

## 물리적 의미

### 1. 확률의 흐름
- $\vec{J}$는 단위시간당 단위면적을 통과하는 확률의 양
- 마치 유체의 흐름과 같은 개념

### 2. 고전역학과의 비교
- 고전역학: $\vec{J} = \rho \vec{v}$ (질량밀도 × 속도)
- 양자역학: $\vec{J} = \rho \times \text{(양자속도)}$

### 3. 정상상태에서의 특성
에너지 고유상태 $\psi = \phi(x)e^{-iEt/\hbar}$에서:

$$\vec{J} = \frac{\hbar}{m}\text{Im}(\phi^*\nabla\phi \cdot e^{iEt/\hbar} \cdot e^{-iEt/\hbar}) = \frac{\hbar}{m}\text{Im}(\phi^*\nabla\phi)$$

실함수인 바닥상태에서는 $\vec{J} = 0$ (정상상태)

## 연관 개념

- [[슈뢰딩거 방정식]]
- [[확률 보존 법칙]]
- [[연속방정식]]
- [[양자역학에서의 확률해석]]

---

*이 유도 과정은 Griffiths "Introduction to Quantum Mechanics"의 표준적인 접근법을 따릅니다. 확률전류밀도는 양자역학에서 확률이 어떻게 국소적으로 보존되는지를 보여주는 중요한 개념입니다.*
