---
title: Ito vs Stratonovich Integration
date: 2025-08-24
tags:
  - ito-integral
  - stratonovich-integral
  - stochastic-integration
  - chain-rule
  - modeling-choice
  - study
class: concept
---

# Itô vs Stratonovich Integration 

## Notation 정리

| 기호 | 의미 |
|------|------|
| $\int f dB$ | Itô 적분 |
| $\int f \circ dB$ | Stratonovich 적분 |
| $t_j^*$ | 근사에서 사용하는 평가점 |
| $\sigma'(t,x)$ | $\sigma$의 $x$에 대한 편미분 |
| $dX_t$ | 확률미분방정식의 Itô 형태 |
| $\delta X_t$ | 확률미분방정식의 Stratonovich 형태 |
| $W_t$ | 백색잡음 (형식적 표기) |

## 두 적분의 정의 비교

### Itô 적분 (Left-endpoint rule)
$$\int_0^T f(t,ω) dB_t = \lim_{\Delta t_j \to 0} \sum_j f(t_j, ω) \Delta B_j$$

**평가점**: $t_j^* = t_j$ (구간의 **왼쪽 끝점**)

### Stratonovich 적분 (Midpoint rule)  
$$\int_0^T f(t,ω) \circ dB_t = \lim_{\Delta t_j \to 0} \sum_j f\left(\frac{t_j + t_{j+1}}{2}, ω\right) \Delta B_j$$

**평가점**: $t_j^* = \frac{t_j + t_{j+1}}{2}$ (구간의 **중점**)

## 핵심 차이점: Chain Rule

### Itô 공식 (2차 항 존재)
$$d[g(X_t)] = g'(X_t) dX_t + \frac{1}{2} g''(X_t) (dX_t)^2$$

**예시**: $g(x) = x^2$, $dX_t = dB_t$
$$d[B_t^2] = 2B_t dB_t + dt$$

### Stratonovich 공식 (일반적인 chain rule)
$$\delta[g(X_t)] = g'(X_t) \delta X_t$$

**예시**: 같은 경우
$$\delta[B_t^2] = 2B_t \circ dB_t$$

**핵심 차이**: Stratonovich에서는 **2차 항이 없다**!

## 두 적분 사이의 관계

### 변환 공식
$$\int_0^t \sigma(s, X_s) \circ dB_s = \int_0^t \sigma(s, X_s) dB_s + \frac{1}{2} \int_0^t \sigma'(s, X_s) \sigma(s, X_s) ds$$

**의미**: Stratonovich = Itô + 보정항

### 확률미분방정식에서의 관계
**Stratonovich 형태**:
$$dX_t = b(t, X_t) dt + \sigma(t, X_t) \circ dB_t$$

**동등한 Itô 형태**:
$$dX_t = \left[b(t, X_t) + \frac{1}{2}\sigma'(t, X_t)\sigma(t, X_t)\right] dt + \sigma(t, X_t) dB_t$$

## 언제 Itô 적분을 사용하는가?

### 1. **마팅게일 성질이 중요한 경우**
```
E[∫ f dB] = 0 (항상 성립)
E[∫ f ○ dB] ≠ 0 (일반적으로)
```

**응용**:
- 확률론적 증명
- 마팅게일 이론 활용
- 조건부 기댓값 계산

### 2. **금융수학**
```
dS_t = μS_t dt + σS_t dB_t
```

**이유**:
- **No-arbitrage 원리**: 할인된 가격이 마팅게일이어야 함
- **리스크 중립 측도**: Itô 적분의 마팅게일 성질 필요
- **Black-Scholes 공식**: Itô 공식 기반

**구체적 예**: 기하 브라운 운동
$$S_t = S_0 \exp\left(\left(\mu - \frac{\sigma^2}{2}\right)t + \sigma B_t\right)$$
여기서 $-\frac{\sigma^2}{2}$ 항이 Itô 적분의 특성!

### 3. **필터링 이론**
**Kalman 필터**에서:
- 관찰 과정과 신호 과정이 독립적인 잡음 포함
- 조건부 기댓값과 마팅게일 성질 필수
- Itô 적분의 "미래를 모른다" 성질이 자연스러움

### 4. **수치해석**
- **Euler-Maruyama 방법**: Itô SDE의 수치해
- 마팅게일 성질로 수치 오차 분석 용이
- 강수렴, 약수렴 이론이 잘 발달됨

## 언제 Stratonovich 적분을 사용하는가?

### 1. **물리적 모델링이 중요한 경우**
```
dX/dt = f(X) + g(X) · "noise"
```

**Wong-Zakai 정리**: 백색잡음의 물리적 근사
- 실제 물리적 잡음은 유한한 상관시간 보유
- 상관시간 → 0 극한에서 Stratonovich 적분으로 수렴

**예**: 브라운 입자의 운동
$$m\frac{dv}{dt} = -\gamma v + \xi(t)$$
여기서 $\xi(t)$는 실제 물리적 잡음

### 2. **좌표 변환이 필요한 경우**
**일반적인 chain rule** 때문에:
- 좌표계 변경 시 동일한 형태 유지
- 기하학적 구조 보존
- 다양체(manifold) 위에서의 SDE

**예**: 극좌표 변환
- Itô: 복잡한 2차 항들 출현
- Stratonovich: 자연스러운 변환

### 3. **다양체 위의 확률과정**
```
dX_t = b(X_t) dt + σ(X_t) ○ dB_t
```

**이유**:
- **좌표 무관성**: 좌표계 선택과 무관한 결과
- **기하학적 자연성**: 리만 기하학과의 호환성
- **대칭성**: 회전, 평행이동 등에 불변

### 4. **공학적 응용**
**제어 이론**:
- 시스템의 물리법칙이 중요
- 좌표 변환이 빈번
- 에너지 보존 등의 물리적 제약

**신호 처리**:
- 실제 잡음의 물리적 특성 반영
- 필터 설계에서의 자연스러움

## 구체적 비교 사례들

### 사례 1: 기하 브라운 운동
**물리적 모델링**:
$$\frac{dN}{dt} = rN + αN \cdot W_t$$

**Stratonovich 해석**:
$$N_t = N_0 e^{rt + αB_t}$$

**Itô 해석**:
$$N_t = N_0 e^{(r-\frac{α^2}{2})t + αB_t}$$

**선택 기준**: 
- 물리적 성장 과정 → Stratonovich
- 금융 모델링 → Itô

### 사례 2: 단위원 위의 브라운 운동
**Stratonovich**:
$$d\theta_t = \circ dB_t$$
자연스러운 형태

**Itô**:
$$d\theta_t = dB_t - \frac{1}{2}\theta_t dt$$
인위적인 drift 항 출현

### 사례 3: 생물학적 성장 모델
**로지스틱 성장 + 잡음**:
$$\frac{dN}{dt} = rN(1 - N/K) + σN \cdot "noise"$$

**Stratonovich 선택 이유**:
- 물리적 성장법칙 직접 반영
- 환경 잡음의 자연스러운 해석

## 실제 선택 가이드라인

### Step 1: 모델의 기원 파악
```
물리법칙 기반 → Stratonovich 고려
수학적 모델링 → Itô 고려
```

### Step 2: 필요한 수학적 성질 확인
```
마팅게일 성질 필요 → Itô
좌표 변환 빈번 → Stratonovich
```

### Step 3: 응용 분야 고려
```
금융수학 → Itô
물리학/공학 → Stratonovich
확률론 이론 → Itô
```

### Step 4: 계산의 편의성
```
조건부 기댓값 계산 → Itô
변수 변환 → Stratonovich
```

## 두 관점의 철학적 차이

### Itô 철학: "정보의 인과성"
- **미래를 알 수 없다**
- 현재 정보만으로 의사결정
- 확률론적 "공정성"
- **수학적 편의성** 우선

### Stratonovich 철학: "물리적 자연성"  
- **실제 현상의 충실한 반영**
- 물리법칙의 대칭성 보존
- 좌표계 독립성
- **물리적 직관** 우선

## 변환의 실제 활용

### 모델링 → 분석 전략
1. **물리적 모델링**: Stratonovich로 설정
2. **수학적 분석**: Itô로 변환
3. **결과 해석**: 다시 물리적 관점

### 예시: 인구 역학
```
물리모델: dN = rN dt + αN ○ dW
     ↓ 변환
수학분석: dN = (r + α²/2)N dt + αN dW  
     ↓ 해석
물리결과: 잡음이 평균 성장률 증가 효과
```

## 수치 계산에서의 고려사항

### Itô SDE 수치해법
- **Euler-Maruyama**: 직접적 구현
- **Milstein**: 2차 정확도
- 이론이 잘 정립됨

### Stratonovich SDE 수치해법
- **Heun 방법**: 예측-수정 기법
- **Runge-Kutta**: 고차 정확도
- 좌표 변환 시 안정적

## 실무적 권장사항

### 1. **기본 원칙**
- 모델의 **물리적 기원** 우선 고려
- 필요한 **수학적 성질** 확인
- 계산의 **실용성** 평가

### 2. **혼합 접근**
- 모델링: Stratonovich
- 이론 분석: Itô로 변환
- 수치 계산: 적절한 방법 선택

### 3. **문헌 참조**
해당 분야의 **관례** 확인:
- 금융: 거의 항상 Itô
- 물리: 상황에 따라 다름
- 생물학: 점점 Stratonovich 선호

## Reference

[[MOCs/Stochastic Differential Equations 공부하기]]

## 관련 개념들

- [[Ito Integral의 정의와 특징]] - Itô 적분의 기본 성질
- [[Chain Rule in Stochastic Calculus]] - 두 적분의 핵심 차이점
- [[Wong-Zakai Theorem]] - 물리적 잡음과 Stratonovich 적분의 관계
- [[Coordinate Transformation]] - Stratonovich 적분의 장점
- [[Martingale Properties]] - Itô 적분의 마팅게일 성질
- [[Financial Mathematics]] - Itô 적분의 대표적 응용
- [[Stochastic Differential Equations]] - 두 해석의 실제 적용
- [[Numerical Methods]] - 두 적분의 수치해법 차이
