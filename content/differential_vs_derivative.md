---
title: Differential vs Derivative 구분하기
date: "2025-05-25"
tags: [mathematics, differential_geometry, terminology, study]
subjects: [mathematics]
category: concept_clarification
---

# Differential vs Derivative 구분하기

## 핵심 구분

### Derivative (도함수)
- **정의**: 변화율 자체를 나타내는 **결과값**
- **형태**: 숫자 또는 함수
- **의미**: "변화율이 얼마나?"

### Differential (미분형식)  
- **정의**: 선형근사를 위한 **도구** (1-form, linear functional)
- **형태**: dx, dy 등이 포함된 식
- **의미**: "특정 방향 v로 움직일 때 변화량은?" → df(v)

## 구체적 예시

함수 $f(x,y) = x^2 + 3xy$에 대해:

### Derivatives (편미분)
$$\frac{\partial f}{\partial x} = 2x + 3y \tag{1}$$
$$\frac{\partial f}{\partial y} = 3x \tag{2}$$

### Differential (미분형식)
$$df = (2x + 3y)dx + 3x\,dy \tag{3}$$

## 사용법의 차이

### Derivative 사용
- 특정 점에서의 기울기: $f'(2) = 4$
- 편미분 계산: $\left.\frac{\partial f}{\partial x}\right|_{(1,2)} = 8$

### Differential 사용  
- 방향미분: $df(v) = (2x + 3y)v^1 + 3x v^2$
- 선형근사: $f(x+dx, y+dy) \approx f(x,y) + df$
- Pull-back: $F^*df = d(f \circ F)$

## Push-forward 맥락에서

**"differential of F"**라고 할 때:
- 실제로는 F의 **야코비안 행렬**의 작용
- 벡터를 다른 벡터로 변환하는 선형변환
- $F_*[v] = Jv$ (J는 야코비안)

## 쉬운 구분법

1. **dx, dy가 붙어있으면** → Differential
2. **그냥 숫자나 함수면** → Derivative
3. **"변화율 계산"** → Derivative  
4. **"방향에 따른 측정"** → Differential

## 물리학적 직관

### Derivative
- 속도 = 위치의 시간 도함수
- 가속도 = 속도의 시간 도함수

### Differential
- 일 = 힘의 1-form과 변위의 pairing
- $W = \int F \cdot dr = \int F^i dx^i$

## 미분기하학에서의 중요성

- **Derivatives**: 국소적 변화율
- **Differentials**: 좌표 무관한 기하학적 객체
- 매니폴드에서는 differential이 더 근본적
- Pull-back, push-forward는 모두 differential의 개념

## 참고사항

영어권에서도 이 용어들이 종종 혼용되어 사용되므로, 맥락을 통해 정확한 의미를 파악하는 것이 중요하다.

---

## 연결된 개념들
- [[tangent_vectors_and_cotangent_vectors]]
- [[pull_back_and_push_forward]]
- [[exterior_differential]]