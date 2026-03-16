---
title: "Thermodynamic Square"
date: "2025-10-08"
subject: physics
tags:
  - study
  - concept
  - thermodynamics
  - mnemonic
class: study
---

# Thermodynamic Square

## Overview

Thermodynamic Square는 열역학의 4개 주요 퍼텐셜(U, F, H, G)과 8개의 열역학 변수(V, T, S, P) 사이의 관계를 시각적으로 정리한 다이어그램이다. "Very Fat Ugly Sheep"라는 암기법을 통해 모든 열역학 관계식과 Maxwell relations를 단 몇 초 만에 복원할 수 있다.

## 기호 정리

| 기호 | 의미 | 분류 |
|------|------|------|
| $V$ | Volume (부피) | Extensive |
| $F$ | Helmholtz Free Energy | Thermodynamic Potential |
| $T$ | Temperature (온도) | Intensive |
| $U$ | Internal Energy (내부에너지) | Thermodynamic Potential |
| $G$ | Gibbs Free Energy | Thermodynamic Potential |
| $S$ | Entropy (엔트로피) | Extensive |
| $H$ | Enthalpy (엔탈피) | Thermodynamic Potential |
| $P$ | Pressure (압력) | Intensive |

## Thermodynamic Square 구조

### 표준 배치

```
    V ―― F ―― T
    |    |    |
    U ――   ―― G
    |    |    |
    S ―― H ―― P
```

### "Very Fat Ugly Sheep" 암기법

```
Very  Fat  UGly  SHeeP
  V    F   U G   S H P
```

배치:
- **첫 줄**: V - F - T
- **둘째 줄**: U -  - G 
- **셋째 줄**: S - H - P

## 핵심 규칙

### 1. 대각선 반대편 = Conjugate Pair (짝)

```
V ↔ P  (부피 ↔ 압력)
T ↔ S  (온도 ↔ 엔트로피)
```

이 쌍들은 서로 **열역학적 켤레변수(thermodynamic conjugate variables)**이다.

### 2. 편미분 규칙: "옆을 반대편으로 미분"

**규칙**: 퍼텐셜(F, U, G, H)을 인접한 변수로 편미분하면 대각선 반대편 변수가 나온다.

**부호 규칙**:
- **위 → 아래** (Intensive → Extensive): **마이너스(−)**
- **아래 → 위** (Extensive → Intensive): **플러스(+)**

### 3. 모든 편미분 관계식

#### F (Helmholtz Free Energy)
$$
\left(\frac{\partial F}{\partial V}\right)_T = -P \tag{1}
$$
$$
\left(\frac{\partial F}{\partial T}\right)_V = -S \tag{2}
$$

#### G (Gibbs Free Energy)
$$
\left(\frac{\partial G}{\partial T}\right)_P = -S \tag{3}
$$
$$
\left(\frac{\partial G}{\partial P}\right)_T = V \tag{4}
$$

#### U (Internal Energy)
$$
\left(\frac{\partial U}{\partial V}\right)_S = -P \tag{5}
$$
$$
\left(\frac{\partial U}{\partial S}\right)_V = T \tag{6}
$$

#### H (Enthalpy)
$$
\left(\frac{\partial H}{\partial S}\right)_P = T \tag{7}
$$
$$
\left(\frac{\partial H}{\partial P}\right)_S = V \tag{8}
$$

## Maxwell Relations 유도

Thermodynamic Square로부터 **Maxwell Relations**을 직접 유도할 수 있다.

### 원리

2차 편미분의 순서 무관성 (Schwarz theorem):
$$
\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)
$$

### F로부터의 Maxwell Relation

식 (1)과 (2)로부터:
$$
\frac{\partial}{\partial T}\left(\frac{\partial F}{\partial V}\right)_T = \frac{\partial}{\partial V}\left(\frac{\partial F}{\partial T}\right)_V
$$

$$
\frac{\partial(-P)}{\partial T} = \frac{\partial(-S)}{\partial V}
$$

$$
\left(\frac{\partial P}{\partial T}\right)_V = \left(\frac{\partial S}{\partial V}\right)_T \tag{9}
$$

### 4개의 Maxwell Relations

| 퍼텐셜 | Maxwell Relation |
|--------|------------------|
| $F(T,V)$ | $\left(\frac{\partial P}{\partial T}\right)_V = \left(\frac{\partial S}{\partial V}\right)_T$ |
| $G(T,P)$ | $\left(\frac{\partial V}{\partial T}\right)_P = -\left(\frac{\partial S}{\partial P}\right)_T$ |
| $U(S,V)$ | $\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V$ |
| $H(S,P)$ | $\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$ |

## 자연변수(Natural Variables)

각 퍼텐셜의 **자연변수**는 다이어그램에서 양 옆에 위치한 변수들이다:

| 퍼텐셜 | 자연변수 | Differential Form |
|--------|----------|-------------------|
| $U$ | $(S, V)$ | $dU = TdS - PdV$ |
| $F$ | $(T, V)$ | $dF = -SdT - PdV$ |
| $H$ | $(S, P)$ | $dH = TdS + VdP$ |
| $G$ | $(T, P)$ | $dG = -SdT + VdP$ |

## 실전 사용법

### 예제 1: $(\partial G/\partial P)_T$는?

**단계**:
1. Square에서 G의 위치 확인 (중간)
2. G의 옆에 있는 변수 중 P 찾기 (오른쪽 아래)
3. P의 대각선 반대편 = V (왼쪽 위)
4. 아래 → 위 방향 = **플러스**

**답**: 
$$
\left(\frac{\partial G}{\partial P}\right)_T = +V
$$

### 예제 2: $(\partial F/\partial T)_V$는?

**단계**:
1. F의 위치 확인 (위쪽 중간)
2. F의 옆에 있는 T (오른쪽)
3. T의 대각선 반대편 = S (아래)
4. 위 → 아래 방향 = **마이너스**

**답**:
$$
\left(\frac{\partial F}{\partial T}\right)_V = -S
$$

## 시험장 복원 전략

**30초 복원법**:

1. **"Very Fat Ugly Sheep" 쓰기**
2. **배치하기**:
   ```
   V  F  T
   U  G
   S  H  P
   ```
3. **규칙 기억**:
   - 대각선 반대 = 짝
   - 옆을 반대로 미분
   - 위→아래 = −, 아래→위 = +

**완성!** 모든 열역학 관계식 복원 가능

## 왜 "Thermodynamic Square"인가?

### 장점

1. **모든 관계식을 한 그림으로**
   - 4개 퍼텐셜의 자연변수
   - 8개의 1차 편미분
   - 부호 규칙까지 포함

2. **Maxwell Relations 포함**
   - 2차 편미분으로 자동 유도

3. **빠른 복원**
   - 암기법 하나로 30초 내 복원

4. **시각적 직관**
   - Legendre transformation 구조 이해
   - Conjugate pairs 명확히 표시

## Key Insights

### 물리적 의미

- **Intensive ↔ Extensive**: 켤레변수는 물리적으로 대립하는 쌍
  - 온도 ↔ 엔트로피 (열적 자유도)
  - 압력 ↔ 부피 (기계적 자유도)

- **편미분의 의미**: "한 변수를 조금 바꿀 때 퍼텐셜이 얼마나 변하는가?"
  - $(\partial F/\partial V)_T = -P$: 등온 조건에서 부피 팽창 시 압력만큼 자유에너지 감소

### 수학적 구조

- **Legendre Transformation**: Square는 Legendre 변환 구조를 시각화
  - $S \to T$: $F = U - TS$
  - $V \to P$: $H = U + PV$
  - $S \to T, V \to P$: $G = U - TS + PV$

## Related Concepts

- [[열역학 자연변수와 르장드르 변환]] - Legendre transformation과 자연변수의 원리
- [[Probability_and_Statistics]] - 통계역학적 앙상블과의 연결

## References

- Wikipedia: "Thermodynamic square"
- Callen, H. B., "Thermodynamics and an Introduction to Thermostatistics"
- Born square (유사 다이어그램)

## Notes from Claude

Thermodynamic Square는 단순한 암기 도구가 아니라 열역학의 수학적 구조를 시각적으로 표현한 것이다. 

**핵심 통찰**:
1. **대칭성**: Intensive-Extensive 쌍의 대칭 관계가 다이어그램에 명시적으로 드러남
2. **완전성**: 4개 퍼텐셜 × 각 2개 편미분 = 8개 기본 관계식을 모두 포함
3. **확장성**: 화학포텐셜 $\mu$와 입자수 $N$을 추가하면 Grand Canonical ensemble까지 확장 가능

**실용적 가치**:
- 시험: 30초 내 모든 공식 복원
- 연구: 필요한 관계식을 즉시 찾아낼 수 있음
- 교육: 열역학의 구조를 직관적으로 이해하는 도구

**주의사항**:
- 부호 규칙을 정확히 기억해야 함 (위→아래 = −)
- 자연변수 개념과 연결하여 이해하면 더욱 강력함
- Maxwell Relations는 보너스로 얻어지는 결과

이 다이어그램 하나로 열역학의 절반을 커버할 수 있다!
