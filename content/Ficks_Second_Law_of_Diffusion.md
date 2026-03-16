---
title: "Fick's Second Law 유도 과정"
date: "2025-05-28"
tags: [diffusion, Fick_law, derivation, physics, quantum_mechanics, study]
subjects: [physics]
category: "quantum mechanics study"
---

# Fick's Second Law 유도 과정

## 개요

Fick's second law는 Fick's first law와 연속방정식(물질 보존 법칙)을 결합하여 유도되는 확산방정식입니다. 이는 농도가 시간에 따라 어떻게 변하는지를 설명하며, 양자역학에서 슈뢰딩거 방정식과의 연결고리를 제공합니다.

## 1. 유도의 출발점

### 필요한 두 방정식
1. **Fick's First Law**: $\vec{J} = -D \nabla \rho$ (확산 흐름)
2. **연속방정식**: $\frac{\partial \rho}{\partial t} + \nabla \cdot \vec{J} = 0$ (물질 보존)

## 2. 유도 과정

### 1단계: 연속방정식 적용

물질 보존 법칙 (연속방정식):
$$\frac{\partial \rho}{\partial t} + \nabla \cdot \vec{J} = 0 \tag{1}$$

이를 다시 정리하면:
$$\frac{\partial \rho}{\partial t} = -\nabla \cdot \vec{J} \tag{2}$$

### 2단계: Fick's First Law 대입

First law에서 $\vec{J} = -D\nabla\rho$이므로:

$$\frac{\partial \rho}{\partial t} = -\nabla \cdot (-D\nabla\rho) = \nabla \cdot (D\nabla\rho) \tag{3}$$

### 3단계: 확산계수가 상수인 경우

만약 확산계수 $D$가 공간적으로 일정하다면 ($D = \text{상수}$):

$$\frac{\partial \rho}{\partial t} = D \nabla \cdot (\nabla\rho) = D \nabla^2 \rho \tag{4}$$

## 3. 최종 결과: Fick's Second Law

$$\frac{\partial \rho}{\partial t} = D \nabla^2 \rho \tag{5}$$

이것이 바로 **확산방정식(Diffusion Equation)**입니다!

### 1차원 형태
$$\frac{\partial \rho}{\partial t} = D \frac{\partial^2 \rho}{\partial x^2} \tag{6}$$

## 4. 물리적 의미

### First Law vs Second Law 비교
- **First Law**: "지금 이 순간 흐름이 얼마나?" (공간적 관계)
- **Second Law**: "시간이 지나면서 농도가 어떻게 변할까?" (시간적 변화)

### 라플라시안 $\nabla^2\rho$의 물리적 의미
- **$\nabla^2\rho > 0$**: 주변보다 농도가 **낮음** → 농도 **증가** ($\frac{\partial \rho}{\partial t} > 0$)
- **$\nabla^2\rho < 0$**: 주변보다 농도가 **높음** → 농도 **감소** ($\frac{\partial \rho}{\partial t} < 0$)
- **$\nabla^2\rho = 0$**: 평형 상태 → 농도 **변화 없음** ($\frac{\partial \rho}{\partial t} = 0$)

## 5. 직관적 이해: 1차원 예시

### 미시적 관점
어떤 점 $x$에서 농도 변화를 생각해보자:

- **좌측에서 들어오는 흐름**: $J(x-\delta x)$
- **우측으로 나가는 흐름**: $J(x+\delta x)$
- **순 증가**: $J(x-\delta x) - J(x+\delta x) = -[J(x+\delta x) - J(x-\delta x)]$

### 수학적 전개
$$\frac{\partial \rho}{\partial t} = -\frac{\partial J}{\partial x} = -\frac{\partial}{\partial x}\left(-D\frac{\partial \rho}{\partial x}\right) = D\frac{\partial^2 \rho}{\partial x^2}$$

### 물리적 해석
**"흐름의 차이가 농도 변화를 만든다"**

## 6. 양자역학에서의 적용

### 양자역학적 확산방정식
확률밀도 $\rho = |\psi|^2$에 대해:

$$\frac{\partial \rho}{\partial t} = \beta^2 \nabla^2 \rho \tag{7}$$

여기서 $\beta^2 = \frac{\hbar}{2m}$ (양자역학적 확산계수)

### 슈뢰딩거 방정식과의 연결

#### 슈뢰딩거 방정식 (자유입자)
$$i\hbar\frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\psi$$

#### Wick Rotation 적용
$t \to it$ (실시간 → 허수시간)로 치환하면:

$$\frac{\partial \psi}{\partial \tau} = \frac{\hbar}{2m}\nabla^2\psi = \beta^2\nabla^2\psi$$

이것이 바로 **확산방정식!**

## 7. 확산방정식의 해

### 가우시안 해 (1차원)
초기 조건 $\rho(x,0) = \delta(x)$ (원점에서 시작)일 때:

$$\rho(x,t) = \frac{1}{\sqrt{4\pi Dt}} \exp\left(-\frac{x^2}{4Dt}\right) \tag{8}$$

### 해의 특성
- **분산**: $\sigma^2 = 2Dt$
- **표준편차**: $\sigma = \sqrt{2Dt}$
- **시간에 비례해서 퍼짐!**

### 브라운 운동과의 연결
이 가우시안 해가 바로 **브라운 운동하는 입자의 확률분포**입니다!

## 8. 핵심 통찰

### 유도 과정의 물리적 의미
**First Law → Second Law 유도는:**
1. **국소 보존** (연속방정식): 물질이 사라지지 않는다
2. **확산 흐름** (First Law): 기울기에 따른 흐름
3. **→ 시간 발전** (Second Law): 농도의 시간적 변화

### 물리적 직관
**"지금 흐름이 있으면 → 미래에 농도가 변한다"**

### 양자-고전 연결
- **고전**: 브라운 운동 → 가우시안 분포 (확산방정식)
- **양자**: 조화진동자 → 가우시간 파동함수 (슈뢰딩거 방정식)
- **연결**: Wick rotation을 통한 수학적 등가성

## 9. 응용 분야

### 물리학적 현상
- **열전도**: 온도 확산
- **물질 확산**: 농도 확산
- **양자역학**: 확률분포의 시间 발전

### 수학적 중요성
- **편미분방정식** 이론의 기본 예제
- **그린 함수** 방법의 적용
- **푸리에 변환**을 통한 해법

## 연관 개념

- [[Fick's First Law]]
- [[연속방정식]]
- [[확산방정식]]
- [[슈뢰딩거 방정식과 확산방정식의 연결]]
- [[브라운 운동]]
- [[Wick Rotation]]

---

*Fick's second law는 first law와 물질보존법칙을 결합하여 얻어지는 확산방정식으로, 농도의 시간적 변화를 예측합니다. 이는 브라운 운동이 가우시안 분포를 만드는 수학적 이유이며, 양자역학과 고전물리학을 연결하는 중요한 다리 역할을 합니다.*
