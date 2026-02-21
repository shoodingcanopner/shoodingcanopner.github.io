---
title: Onto vs One-to-one Functions 구분하기
date: "2025-05-25"
tags: [mathematics, functions, terminology, study]
subjects: [mathematics]
category: concept_clarification
---

# Onto vs One-to-one Functions 구분하기

## 기본 정의

### One-to-one (Injective, 단사함수)
**정의**: 서로 다른 입력은 서로 다른 출력을 가짐
$$\forall a_1, a_2 \in A, \text{ if } f(a_1) = f(a_2) \text{ then } a_1 = a_2$$

**직관**: "겹치지 않는다" - 각 출력값이 최대 하나의 입력과만 대응

### Onto (Surjective, 전사함수)  
**정의**: 공역의 모든 원소가 치역에 포함됨
$$\forall b \in B, \exists a \in A \text{ such that } f(a) = b$$

**직관**: "빠뜨리지 않는다" - 공역 B의 모든 점이 함수의 출력으로 나타남

## 구체적 예시

### One-to-one 예시

**One-to-one인 경우** ✓
```
f: ℝ → ℝ, f(x) = 2x + 1
```
- 서로 다른 x값은 서로 다른 f(x)값을 가짐
- 기울기가 0이 아닌 일차함수

**One-to-one이 아닌 경우** ✗
```
g: ℝ → ℝ, g(x) = x²
```
- g(2) = g(-2) = 4 (겹침 발생!)

### Onto 예시

**Onto인 경우** ✓
```
f: ℝ → ℝ, f(x) = x³
```
- 모든 실수 y에 대해 x = ∛y가 존재
- 치역 = 공역 = ℝ

**Onto가 아닌 경우** ✗
```
g: ℝ → ℝ, g(x) = x²
```
- 음수들은 치역에 없음
- 치역 = [0,∞) ≠ 공역 = ℝ

## 용어의 혼란과 번역

### 한국어-영어 대응 주의사항

| 한국어 | 영어 | 설명 |
|--------|------|------|
| 단사함수 | One-to-one (Injective) | 겹치지 않음 |
| 전사함수 | Onto (Surjective) | 빠뜨리지 않음 |
| **일대일 대응** | **Bijective** | 단사 + 전사 |

**주의**: "일대일 대응"을 "One-to-one"으로 번역하면 안 됨!
- "일대일 대응" = 완전한 대응 = Bijective
- "One-to-one" = 단사함수만

### 올바른 표현
- **One-to-one correspondence** = Bijective = 일대일 대응
- **One-to-one** = Injective = 단사함수

## 선형대수에서의 의미

행렬 $A: \mathbb{R}^n \to \mathbb{R}^m$에 대해:

### One-to-one 조건
$$\text{rank}(A) = n$$
- Null space = {0}
- 열벡터들이 선형독립

### Onto 조건  
$$\text{rank}(A) = m$$
- Column space = $\mathbb{R}^m$
- 모든 $\mathbb{R}^m$의 벡터에 도달 가능

### Bijective 조건
$$n = m \text{ and } \text{rank}(A) = n = m$$
- 정사각행렬이면서 가역행렬
- 역함수 존재

## 함수의 분류

```
전체 함수들
├── One-to-one만 (단사)
├── Onto만 (전사)  
├── One-to-one + Onto (전단사, Bijective)
└── 둘 다 아님 (일반함수)
```

## 물리학/공학에서의 응용

### 좌표변환
- **Bijective**: 완전한 좌표 변환 (가역)
- **One-to-one**: 정보 손실 없음
- **Onto**: 모든 영역 덮음

### 매니폴드 이론
- **Diffeomorphism**: Bijective + 미분가능
- **Embedding**: One-to-one (겹치지 않는 매장)
- **Covering**: Onto (전체 덮음)

## 기억법

- **One-to-one**: "하나가 하나로만" → 겹치지 않음
- **Onto**: "모든 곳으로" → 빠뜨리지 않음  
- **Bijective**: "완벽한 대응" → 둘 다!

---

## 연결된 개념들
- [[linear_transformations]]
- [[manifold_mappings]]
- [[coordinate_transformations]]