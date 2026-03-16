---
title: Order Parameter란 뭘까? feat. Ising Model
date: 2025-09-30
tags:
  - physics
  - statistical-mechanics
  - phase-transition
  - study
subjects:
  - physics
---

# Order Parameter in Ising Model

## 기호 정의

| 기호 | 의미 |
|------|------|
| $s_i$ | i번째 스핀의 상태 (+1 또는 -1) |
| $N$ | 전체 스핀의 개수 |
| $M$ | 자화(magnetization), order parameter |
| $T$ | 온도 |
| $T_c$ | 임계온도(critical temperature) |
| $\beta$ | 임계지수(critical exponent) |
| $J$ | 스핀 간 상호작용 강도 |
| $H$ | 외부 자기장 |

## Order Parameter란?

**Order parameter(질서 매개변수)** 는 시스템의 대칭성 파괴 정도를 정량적으로 나타내는 물리량이다.

### 핵심 특징

1. **상전이 전후로 불연속적 변화**
   - 무질서한 상: $\alpha = 0$
   - 질서있는 상: $\alpha \neq 0$

2. **대칭성 파괴의 척도**
   - 상전이 = 자발적 대칭성 파괴
   - Order parameter는 이 파괴 정도를 수치화

3. **거시적 집단 행동 반영**
   - 개별 미시 구성요소들의 평균적 정렬 상태

## Ising Model 개요

### 모델 정의

격자 위에 배치된 스핀들이 최근접 이웃끼리 상호작용하는 모델이다.

**해밀토니안:**

$$
H = -J \sum_{\langle i,j \rangle} s_i s_j - H \sum_i s_i \tag{1}
$$

여기서:
- $\langle i,j \rangle$: 최근접 이웃 쌍
- $s_i \in \{+1, -1\}$: 스핀 상태
- $J > 0$: 강자성 상호작용
- $H$: 외부 자기장

### 물리적 해석

- **스핀 ↑**: $s_i = +1$
- **스핀 ↓**: $s_i = -1$
- **강자성 상호작용**: 같은 방향으로 정렬된 스핀 쌍이 에너지적으로 유리

## Ising Model의 Order Parameter: 자화(Magnetization)

### 정의

$$
M = \frac{1}{N} \sum_{i=1}^{N} s_i \tag{2}
$$

자화는 모든 스핀 값의 평균이다.

### 물리적 의미

- $M = +1$: 모든 스핀이 위를 향함 (완전 정렬)
- $M = -1$: 모든 스핀이 아래를 향함 (완전 정렬)
- $M = 0$: 스핀이 무작위로 배열됨 (무질서)
- $-1 < M < 1$: 부분적 정렬

### 왜 자화가 Order Parameter인가?

자화는 시스템의 **위-아래 대칭성 파괴** 정도를 정량화한다.

**대칭성 관점:**
- 외부 자기장이 없을 때 ($H = 0$), 해밀토니안은 $s_i \to -s_i$ 변환에 대해 대칭
- 높은 온도: 이 대칭성 유지 → $\langle M \rangle = 0$
- 낮은 온도: 이 대칭성 자발적으로 파괴 → $\langle M \rangle \neq 0$

## 온도에 따른 자화의 변화

### 1. 고온 영역 ($T > T_c$): 상자성 상태

**특징:**
- 열요동이 상호작용보다 강함
- 스핀들이 무작위로 배열
- 장거리 질서 없음

**자화:**

$$
\langle M \rangle = 0 \tag{3}
$$

**시각화:**
```
↑ ↓ ↑ ↑ ↓ ↑ ↓
↓ ↑ ↓ ↑ ↑ ↓ ↑
↑ ↓ ↑ ↓ ↓ ↑ ↓
↓ ↑ ↑ ↓ ↑ ↓ ↑
```

### 2. 임계점 ($T = T_c$)

**특징:**
- 장거리 상관관계 발생
- 모든 길이 척도의 요동 공존
- 임계 현상(critical phenomena)

**자화 요동:**

$$
\langle M^2 \rangle - \langle M \rangle^2 \sim |T - T_c|^{-\gamma} \to \infty \quad \text{as } T \to T_c \tag{4}
$$

**시각화:**
```
↑↑↑ ↓↓↓ ↑↑↑
↑↑↑ ↓↓↓ ↑↑↑
↓↓ ↑↑↑↑ ↓↓
↓↓ ↑↑↑↑ ↓↓
```
*큰 스핀 클러스터(domain)가 동적으로 형성/소멸*

### 3. 저온 영역 ($T < T_c$): 강자성 상태

**특징:**
- 상호작용이 열요동보다 강함
- 스핀들이 한 방향으로 정렬
- 장거리 질서 존재

**자화:**

$$
\langle M \rangle = M_0(T) \neq 0 \tag{5}
$$

**임계 거동:**

$$
M_0(T) \sim (T_c - T)^\beta \quad \text{as } T \to T_c^- \tag{6}
$$

여기서 $\beta \approx 1/8$ (2D), $\beta \approx 1/2$ (평균장 이론)

**시각화:**
```
↑ ↑ ↑ ↑ ↑ ↑ ↑
↑ ↑ ↑ ↑ ↑ ↑ ↑
↑ ↑ ↑ ↑ ↑ ↑ ↑
↑ ↑ ↑ ↑ ↑ ↑ ↑
```
*거의 모든 스핀이 같은 방향*

## 자발적 자화(Spontaneous Magnetization)

### 개념

외부 자기장 없이 ($H = 0$) 저온에서 자발적으로 생기는 자화

$$
M_{\text{sp}}(T) = \lim_{H \to 0^+} \langle M \rangle_H \tag{7}
$$

### 자발적 대칭성 파괴

시스템은 $M = +M_0$ 또는 $M = -M_0$ 중 하나를 무작위로 선택한다.

**에너지 관점:**
- 두 상태 모두 동등한 에너지
- 하지만 임의의 작은 섭동이 하나를 선택
- 일단 선택되면 시스템은 그 상태에 머묾

## 감수성(Susceptibility)과 Order Parameter

### 감수성 정의

$$
\chi = \frac{\partial \langle M \rangle}{\partial H}\Big|_{H=0} \tag{8}
$$

자기장에 대한 자화의 반응 정도를 나타낸다.

### 임계점 근처 발산

$$
\chi \sim |T - T_c|^{-\gamma} \tag{9}
$$

여기서 $\gamma \approx 7/4$ (2D), $\gamma = 1$ (평균장 이론)

### 물리적 의미

- **$T > T_c$**: 감수성은 유한, 외부 자기장에 적당히 반응
- **$T = T_c$**: 감수성 발산, 작은 자기장에도 큰 반응
- **$T < T_c$**: 감수성 감소, 이미 정렬되어 있어 추가 정렬 어려움

## 요동-소산 정리(Fluctuation-Dissipation Theorem)

감수성과 자화 요동은 다음 관계를 만족한다:

$$
\chi = \beta (\langle M^2 \rangle - \langle M \rangle^2) \tag{10}
$$

여기서 $\beta = 1/(k_B T)$

**의미:**
- 임계점에서 요동이 발산 → 감수성도 발산
- 시스템의 반응성과 요동은 본질적으로 연결됨

## 임계 지수(Critical Exponents)

Order parameter와 관련된 주요 임계 지수:

| 지수 | 정의 | 2D Ising | 평균장 |
|------|------|----------|--------|
| $\beta$ | $M \sim (T_c - T)^\beta$ | 1/8 | 1/2 |
| $\gamma$ | $\chi \sim \|T - T_c\|^{-\gamma}$ | 7/4 | 1 |
| $\delta$ | $M \sim H^{1/\delta}$ at $T = T_c$ | 15 | 3 |

### 보편성(Universality)

같은 차원과 대칭성을 가진 시스템들은 같은 임계 지수를 가진다. 이는 미시적 세부사항에 무관하다.

## 평균장 이론(Mean Field Theory)

### 기본 아이디어

각 스핀이 느끼는 상호작용을 평균 자화로 근사:

$$
s_i \approx \langle s_i \rangle = m \tag{11}
$$

### 유효 해밀토니안

$$
H_{\text{eff}} = -J z m \sum_i s_i - H \sum_i s_i \tag{12}
$$

여기서 $z$는 최근접 이웃 개수

### 자기 일관성 방정식(Self-Consistency Equation)

$$
m = \tanh(\beta J z m + \beta H) \tag{13}
$$

### $H = 0$일 때 해

- **$T > T_c$**: $m = 0$ (유일한 해)
- **$T < T_c$**: $m = \pm \sqrt{1 - T/T_c}$ (두 개의 비자명한 해)

여기서 $k_B T_c = J z$

## Order Parameter의 일반화

### 다른 시스템의 Order Parameter

1. **초전도체**: Cooper pair 밀도 $|\psi|^2$
2. **초유체**: 질서 파라미터 $\psi = |\psi|e^{i\theta}$
3. **액정**: 배향 질서도 $S = \frac{1}{2}\langle 3\cos^2\theta - 1 \rangle$
4. **합금**: 원자 배열의 규칙성

### 공통점

모두 다음을 만족한다:
- 상전이 전: $\alpha = 0$
- 상전이 후: $\alpha \neq 0$
- 임계점 근처: 멱법칙 거동

## 실험적 관측

### 측정 방법

1. **자기 모멘트 측정**: SQUID, VSM
2. **중성자 산란**: 스핀 상관함수
3. **뮤온 스핀 공명**: 국소 자기장

### 실제 자성체

- **철(Fe)**: $T_c \approx 1043$ K
- **니켈(Ni)**: $T_c \approx 627$ K
- **코발트(Co)**: $T_c \approx 1388$ K

## 컴퓨터 시뮬레이션

### Monte Carlo 방법

1. **Metropolis 알고리즘**
   - 무작위로 스핀 선택
   - 뒤집기 시도
   - Boltzmann 확률로 수락/거부

2. **Wolff 알고리즘**
   - 클러스터 업데이트
   - 임계 느려짐(critical slowing down) 완화

### 측정 가능한 양

$$
M = \frac{1}{N} \sum_i s_i \tag{14}
$$

$$
\chi = \beta N (\langle M^2 \rangle - \langle M \rangle^2) \tag{15}
$$

## 핵심 요약

1. **Order parameter는 대칭성 파괴의 척도**
   - Ising model에서는 자화 $M$이 order parameter

2. **온도에 따른 자화의 변화**
   - $T > T_c$: $M = 0$ (무질서)
   - $T = T_c$: 발산하는 요동
   - $T < T_c$: $M \neq 0$ (질서)

3. **임계 현상**
   - 멱법칙 거동: $M \sim (T_c - T)^\beta$
   - 보편성: 세부사항에 무관한 임계 지수

4. **감수성과의 관계**
   - 임계점에서 감수성 발산
   - 요동-소산 정리로 연결

## 더 알아볼 주제

- [[Landau Theory of Phase Transitions]]
- [[Renormalization Group]]
- [[Correlation Functions in Statistical Mechanics]]
- [[Finite-Size Scaling]]

## 참고문헌

1. 진짜 참고문헌 뭐 였는지 찾아야 함

---

*Created: 2025-09-30*
*Last modified: 2026-02-22*