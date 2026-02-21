---
title: Minimal Coupling - 전자기장 속 양자역학
date: 2025-06-02
tags:
  - physics
  - quantum_mechanics
  - electromagnetism
  - minimal_coupling
  - study
subjects: physics
class: study
---

# Minimal Coupling - 전자기장 속 양자역학

## Minimal Coupling이란?

**정의:** 자유 입자의 해밀토니안을 전자기장이 있는 상황으로 확장하는 가장 기본적인 방법

**변환 규칙:**
$$\mathbf{p} \rightarrow \mathbf{p} - q\mathbf{A} \tag{1}$$
$$E \rightarrow E - q\phi \tag{2}$$

여기서:
- q: 입자의 전하량
- **A**: 벡터 포텐셜 (vector potential)
- φ: 스칼라 포텐셜 (scalar potential)

## 왜 "Minimal"인가?

**1) 가장 단순한 대체 규칙**
- 딱 이것만 바꾸면 끝. 추가적인 항들 없음
- 다른 복잡한 방법들도 있지만, 이게 가장 자연스럽고 간단함

**2) 게이지 불변성을 만족하는 최소한의 수정**
- 파울리 항 $(q/2m)\boldsymbol{\sigma} \cdot \mathbf{B}$ 같은 건 "non-minimal coupling"

**3) 최소 작용 원리에서의 의미**
- 라그랑지안에 전자기장을 포함시키는 "최소한의" 방법

## 해밀토니안 유도

**출발점:** 자유 입자 해밀토니안
$$\hat{H}_0 = \frac{\hat{\mathbf{p}}^2}{2m} \tag{3}$$

**Minimal coupling 적용:**
$$\hat{H} = \frac{1}{2m}(\hat{\mathbf{p}} - q\mathbf{A})^2 + q\phi \tag{4}$$

### 제곱 전개 과정

**핵심 계산:** $(\hat{\mathbf{p}} - q\mathbf{A})^2$ 전개

$$(\hat{\mathbf{p}} - q\mathbf{A})^2 = \hat{\mathbf{p}}^2 - q(\hat{\mathbf{p}} \cdot \mathbf{A} + \mathbf{A} \cdot \hat{\mathbf{p}}) + q^2A^2 \tag{5}$$

**∇ 연산자를 이용한 유도:**

$\hat{\mathbf{p}} = -i\hbar\nabla$ 이므로:

1) $\hat{\mathbf{p}} \cdot \mathbf{A} = -i\hbar \nabla \cdot \mathbf{A} = -i\hbar \sum_i \frac{\partial A_i}{\partial x_i}$

2) $\mathbf{A} \cdot \hat{\mathbf{p}} = -i\hbar \mathbf{A} \cdot \nabla = -i\hbar \sum_i A_i \frac{\partial}{\partial x_i}$

**중요:** $\nabla \cdot \mathbf{A}$ (발산)와 $\mathbf{A} \cdot \nabla$ (방향 미분 연산자)는 완전히 다름!

**게이지 조건 $\nabla \cdot \mathbf{A} = 0$ 적용:**
$$\hat{\mathbf{p}} \cdot \mathbf{A} + \mathbf{A} \cdot \hat{\mathbf{p}} = 2\mathbf{A} \cdot \hat{\mathbf{p}} \tag{6}$$

**최종 해밀토니안:**
$$\hat{H} = \frac{1}{2m}[\hat{\mathbf{p}}^2 - 2q\mathbf{A} \cdot \hat{\mathbf{p}} + q^2A^2] + q\phi \tag{7}$$

$$= \frac{1}{2m}[-\hbar^2\nabla^2 + 2iq\hbar\mathbf{A} \cdot \nabla + q^2A^2] + q\phi \tag{8}$$

## 게이지 조건과 게이지 불변성

### 게이지 변환
$$\phi' = \phi - \frac{\partial \chi}{\partial t} \tag{9}$$
$$\mathbf{A}' = \mathbf{A} + \nabla \chi \tag{10}$$

**중요한 사실:** 이 변환을 해도 E와 B는 변하지 않음!

### 주요 게이지들
**1) 쿨롱 게이지 (Coulomb Gauge):**
$$\nabla \cdot \mathbf{A} = 0 \tag{11}$$

**2) 로렌츠 게이지 (Lorenz Gauge):**
$$\nabla \cdot \mathbf{A} + \mu_0\epsilon_0 \frac{\partial \phi}{\partial t} = 0 \tag{12}$$

**게이지 조건의 의미:** 물리학이 아니라 **수학적 편의**를 위한 조건. 마치 좌표계를 선택하는 것처럼.

## 물리적 직관

### (p - qA)²의 의미

**1) 클래식한 비유 - 강물에서의 보트**
- **p**: 강물 흐름까지 포함한 "겉보기 운동량" (정준 운동량)
- **qA**: 강물의 흐름 (전자기장이 만드는 "흐름")  
- **p - qA**: 정지한 물에서의 보트 자체 속도 (실제 운동학적 운동량)

**2) 운동량의 종류**
- **정준 운동량 (Canonical momentum)**: p - 전자기장 효과까지 포함한 "겉보기 운동량"
- **운동학적 운동량 (Kinetic momentum)**: p - qA - 순수한 입자의 실제 운동
- 운동 에너지는 운동학적 운동량 (p - qA)에 의해 결정됨

**관계식:** p = mv + qA → mv = p - qA

**3) 양자역학적 의미**
- 위상 변화율: $(p - qA)/\hbar$
- 국소적인 드 브로이 파장을 결정
- **qA는 전자기장이 만드는 "위상 기울기"**

### 차원 분석의 아름다움

**qA의 차원:**
- **전하 q**: [A T] 
- **벡터 포텐셜 A**: [M L T⁻² A⁻¹]
- **qA**: [A T] × [M L T⁻² A⁻¹] = [M L T⁻¹] = 운동량 차원

**물리적 의미:** qA는 **전자기장이 입자와 함께 "끌고 다니는" 운동량**

**구체적 예시:** 
대전된 입자가 자기장에서 원운동할 때:
- **p**는 계속 변함 (방향이 바뀜)
- 하지만 **|p - qA|**는 일정 → 운동 에너지 일정  
- **qA**가 원운동을 만드는 "자기장의 기여분"

## 응용 예시: 솔레노이드 속 입자 (Aharonov-Bohm Effect)

**설정:** 반지름 b인 고리에 구속된 입자, 중앙에 솔레노이드

**벡터 포텐셜:**
$$\mathbf{A} = \frac{\Phi}{2\pi r}\hat{\phi}, \quad (r > a) \tag{13}$$

여기서 Φ = πa²B는 솔레노이드를 통과하는 자기 플럭스

**에너지 고유값:**
$$E_n = \frac{\hbar^2}{2mb^2}\left(n - \frac{q\Phi}{2\pi\hbar}\right)^2, \quad (n = 0, \pm1, \pm2, \ldots) \tag{14}$$

**핵심 통찰:**
- 입자가 있는 곳에는 **자기장 B = 0**
- 하지만 **벡터 포텐셜 A ≠ 0**
- 양자역학에서는 A가 물리적으로 중요함!
- **축퇴 해제**: n과 -n이 서로 다른 에너지를 가짐

## 핵심 개념 정리

1. **Minimal coupling은 전자기장을 포함하는 가장 기본적인 방법**
2. **p - qA가 "실제 운동"을 나타냄** (전자기 흐름에 상대적인)
3. **게이지 조건은 수학적 편의를 위한 선택**
4. **벡터 포텐셜 A가 양자역학에서 물리적 실재성을 가짐**
5. **차원 일치는 우연이 아니라 자연의 아름다운 대칭성**

---

*관련 노트:*
- [[전기역학 - 포텐셜과 맥스웰 방정식]]
- [[아하론-봄 효과와 게이지 이론]]
- [[양자역학에서의 대칭성과 보존법칙]]
