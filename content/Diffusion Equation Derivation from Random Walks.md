---
title: "Diffusion Equation Derivation from Random Walks"
date: "2025-08-31"
subjects: physics
tags:
  - study
  - concept
  - diffusion
  - stochastic-processes
  - random-walk
class: study
---

# Diffusion Equation Derivation from Random Walks

## Overview

확산 방정식은 불규칙하고 들쭉날쭉한 랜덤 워크의 앙상블에서 긴 길이와 시간 스케일의 연속 극한을 취할 때 나타나는 간단한 행동을 설명한다. 이 유도 과정은 미시적인 확률론적 움직임에서 거시적인 결정론적 방정식이 어떻게 나타나는지 보여주는 중요한 예시이다.

## Key Points

### 확산 방정식의 기본 형태
$$\frac{\partial \rho}{\partial t} = D\nabla^2 \rho = D \frac{\partial^2 \rho}{\partial x^2} \tag{1}$$

여기서:
- $\rho(x,t)$: 국소적 확률 밀도 (또는 농도)
- $D$: 확산 계수
- $t$: 시간
- $x$: 위치

### 물리적 해석
확산 방정식은 다음 두 가지 상황을 설명할 수 있다:
1. **거시적 관점**: 향수 분자들의 국소 구름이 공기 분자들과의 충돌을 통해 랜덤 워크하는 진화하는 밀도
2. **미시적 관점**: 개별 입자가 공간을 랜덤 워크할 때의 확률 밀도 (비상호작용 입자의 경우)

### 랜덤 워크에서의 유도 과정

#### 1단계: 기본 가정
각 시간 단계 $\Delta t$에서 입자의 위치 변화:
$$x(t + \Delta t) = x(t) + \ell(t) \tag{2}$$

스텝 $\ell(t)$의 확률 분포 $\chi(\ell)$는 다음 조건을 만족:
첫째는 확률 밀도 분포가 정규화되었다는 의미. 이건 당연히 지켜야 한다.
둘째는 스텝 $\ell(t)$ 가 한쪽으로 쏠리지 않았다는 의미. 스텝의 기댓값이 0이라는 의미다.
$$\int \chi(z) dz = 1 \tag{3a}$$
$$\int z\chi(z) dz = 0 \tag{3b}$$
$$\int z^2\chi(z) dz = a^2 \tag{3c}$$

#### 2단계: 확률 밀도의 시간 진화
다음 시간 단계에서의 확률 밀도:
$$\rho(x, t + \Delta t) = \int_{-\infty}^{\infty} \rho(x', t)\chi(x - x') dx' \tag{4}$$

변수 치환 $z = x - x'$을 통해:
$$\rho(x, t + \Delta t) = \int_{-\infty}^{\infty} \rho(x - z, t)\chi(z) dz \tag{5}$$

#### 3단계: 테일러 전개
$\rho$가 broad하고 스텝 크기가 변화 스케일에 비해 매우 작다는 가정 하에:
$$\rho(x, t + \Delta t) \approx \int \left[ \rho(x,t) - z\frac{\partial \rho}{\partial x} + \frac{z^2}{2}\frac{\partial^2 \rho}{\partial x^2} \right] \chi(z) dz \tag{6}$$

#### 4단계: 적분 계산
$\chi(z)$의 모멘트 조건들을 이용하여:
$$\rho(x, t + \Delta t) = \rho(x,t) + \frac{1}{2}\frac{\partial^2 \rho}{\partial x^2} a^2 \tag{7}$$

#### 5단계: 연속 극한
$\rho$가 천천히 변한다는 가정하에 ($\rho(x, t + \Delta t) - \rho(x,t) \approx (\partial \rho/\partial t) \Delta t$):
$$\frac{\partial \rho}{\partial t} = \frac{a^2}{2\Delta t} \frac{\partial^2 \rho}{\partial x^2} \tag{8}$$

### 확산 계수
$$D = \frac{a^2}{2\Delta t} \tag{9}$$

여기서 $a^2$는 스텝 크기의 분산, $\Delta t$는 시간 간격이다.

## Questions & Insights

- 왜 2차 모멘트만이 확산 방정식에 기여하는가? 1차 모멘트가 0인 조건의 물리적 의미는?
- 확산 계수 $D$가 $a^2/2\Delta t$로 표현되는 것이 아인슈타인 관계식과 어떻게 연결되는가?
- 이 유도 과정에서 중심극한정리가 암묵적으로 어떤 역할을 하는가?
- 비정상 확산(anomalous diffusion)에서는 이 유도가 어떻게 수정되어야 하는가?

## Related Concepts

- [[Moment Generating Function]]
- [[Ficks_First_Law_of_Diffusion]]
- [[Ficks_Second_Law_of_Diffusion]]
- [[Diffusion Equation Gaussian Distribution]]
- [[Brownian Motion Properties]]
- [[Journal reading - Anomalous diffusion models and their properties]]
- [[Central Limit Theorem]]
- [[White Noise and Brownian Motion Relationship]]

## References

- 텍스트 이미지에서 발췌한 Section 2.2 "The diffusion equation"
- 연속 극한에서의 랜덤 워크 앙상블 이론

## Notes from Claude

이 유도는 통계역학과 확률론의 아름다운 만남을 보여준다. 미시적인 무작위성에서 거시적인 결정론적 방정식이 나타나는 과정은 다음과 같은 핵심 아이디어들을 포함한다:

1. **스케일 분리**: 미시적 스텝 크기와 거시적 관찰 스케일 사이의 큰 차이가 연속 근사를 정당화한다.

2. **중심극한정리의 역할**: 많은 독립적인 랜덤 스텝들의 합이 가우시안 분포로 수렴하는 것이 확산 방정식의 가우시안 해와 연결된다.

3. **확산의 보편성**: 이 유도는 분자 확산, 열 확산, 입자 확산 등 다양한 물리적 시스템에 적용될 수 있는 보편적 프레임워크를 제공한다.

4. **수학적 엄밀성**: 테일러 전개에서 2차 항까지만 고려하는 근사가 왜 정당한지에 대한 물리적 직관 - 고차 모멘트들은 연속 극한에서 무시할 수 있을 정도로 작아진다.

이 과정은 또한 확률적 미분방정식(SDE)과 편미분방정식(PDE) 사이의 연결을 보여주는 중요한 예시이기도 하다.