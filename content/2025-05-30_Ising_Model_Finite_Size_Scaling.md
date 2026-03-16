---
title: "Ising Model Finite Size Scaling"
date: "2025-05-30"
subject: statistical_mechanics
tags:
  - study
  - concept
  - ising_model
  - phase_transition
  - finite_size_scaling
  - critical_phenomena
  - monte_carlo
class: study
---

# Ising Model Finite Size Scaling

## Overview

Finite Size Scaling은 유한한 크기의 시스템에서 무한 시스템의 임계 현상을 정확히 추출하는 방법론이다. Ising 모델에서 상관 길이 ξ와 시스템 크기 L의 경쟁에서 나타나는 스케일링 현상을 이용한다.

## Key Points

### 1. Finite Size Scaling의 필요성
- **이론 vs 실제**: 상전이는 thermodynamic limit (L→∞)에서 일어나지만 시뮬레이션은 항상 유한 크기
- **유한 시스템의 특성**: 진짜 상전이는 없고 모든 양들이 smooth하게 변함
- **핵심**: 상관 길이 ξ와 시스템 크기 L의 관계에서 scaling 현상 관찰

### 2. Scaling의 기본 원리

**상관 길이와 시스템 크기의 경쟁:**
$$\xi(T) \sim |t|^{-\nu} \quad (t = (T-T_c)/T_c) \tag{1}$$

- **ξ << L**: 시스템이 충분히 크면 bulk behavior 관찰
- **ξ ~ L**: 상관 길이가 시스템 크기와 비슷해지면 finite size effects가 중요
- **ξ >> L**: 시스템이 너무 작아서 bulk 성질 관찰 불가

**Finite Size Scaling 가설:**
$$F_L = L^d f(tL^{1/\nu}, HL^{(\beta+\gamma)/\nu}) \tag{2}$$

여기서:
$F_L$ 는 L\*L개 스핀을 가진 유한 시스템의 자유 에너지. 
$f(tL^{1/\nu}, HL^{(\beta+\gamma)/\nu})$는 무차원이면서 system size에는 independent 하고 온도와 외부 자기장에만 의존적인 함수이다. 

즉, 식(2)는 유한크기 시스템에서 자유에너지 함수를 system size(L)에 dependent한 부분과($L^d$), system size에 independent한 부분으로($f(tL^{1/\nu}, HL^{(\beta+\gamma)/\nu})$) 나눈 결과이다. 

- L: 시스템 선형 크기
- t: reduced temperature  
- H: 외부 자기장
- ν, β, γ: critical exponents
- d: dimension. 2D ising model이면 d=2

### 2.5. 자유 에너지에서 Observable Scaling 유도

**핵심 아이디어**: 자유 에너지의 scaling form에서 열역학적 관계식을 이용해 모든 observable의 scaling을 유도할 수 있다.

Scaling variable들을 정의:
- $x = tL^{1/\nu}$ (temperature scaling variable)
- $y = HL^{(\beta+\gamma)/\nu}$ (field scaling variable)

그러면 $F_L = L^d f(x,y)$

**자화 (Magnetization) 유도:**
열역학 관계식: $M = -\frac{\partial F}{\partial H}$

Chain rule 적용:
$$M = -L^d \frac{\partial f}{\partial y} \cdot \frac{\partial y}{\partial H} = -L^d \frac{\partial f}{\partial y} \cdot L^{(\beta+\gamma)/\nu}$$

$$M = L^{d+(\beta+\gamma)/\nu} \left(-\frac{\partial f}{\partial y}\right)$$

2D에서 scaling theory에 의해 $d + (\beta+\gamma)/\nu = 2 - \beta/\nu$이므로:
$$M(T,L) = L^{-\beta/\nu} \tilde{M}(tL^{1/\nu})$$

**비열과 자화율도 유사하게 유도:**
- 비열: $C = -T\frac{\partial^2 F}{\partial T^2}$ → $C(T,L) = L^{\alpha/\nu} \tilde{C}(tL^{1/\nu})$
- 자화율: $\chi = -\frac{\partial^2 F}{\partial H^2}$ → $\chi(T,L) = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})$

**결론**: 모든 observable이 같은 scaling variable $tL^{1/\nu}$를 공유하지만, 크기 의존성의 지수가 각기 다르다.

### 3. 2D Ising 모델에서의 구체적 예시

**Critical Temperature의 Size Dependence:**
2D square lattice에서 $\nu = 1$이므로:
$$|t| \sim |T-T_c(L)| \sim L^{-1/\nu} = L^{-1} \tag{3}$$
따라서 $T_c(L) \sim 1/L$로 scaling

**주요 Observable들의 Scaling:**

틸다로 표시한 부분의 함수들은 무차원 scaling variable $tL^{1/\nu}$에 대한 함수이므로, 시스템의 크기와 무관한 universal한 함수이다. 다른 사이즈의 시스템이어도 공통성을 보이게 하는 핵심. 예를 들어 magnetization의 경우 x-axis: tL^{1/ν} y-axis: M × L^{β/ν}로 plot하면 $\tilde{M}(x)$ 곡선이 나오면서 모든 size에서 데이터가 하나의 곡선으로 합쳐진다. 

1. **자화 (Magnetization):**
$$M(T,L) = L^{-\beta/\nu} \tilde{M}(tL^{1/\nu}) \tag{4}$$
*$\tilde{M}$ 이 무얼 의미하는 거지?*
2. **비열 (Specific Heat):**
$$C(T,L) = L^{\alpha/\nu} \tilde{C}(tL^{1/\nu}) \tag{5}$$

3. **자화율 (Susceptibility):**
$$\chi(T,L) = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu}) \tag{6}$$

### 4. 실제 분석 방법

**Data Collapse 방법:**
- 다른 시스템 크기 L에서 얻은 데이터를 scaling variable $tL^{1/\nu}$에 대해 plot
- 하나의 universal curve로 collapse됨

**Critical Temperature 결정:**

*방법 1: Specific Heat Peak*
- 각 L에서 specific heat의 peak 위치 $T_c(L)$ 측정
- $T_c(L)$ vs $1/L$ plot의 intercept가 $T_c(\infty)$

*방법 2: Cumulant Method*  -> 시뮬레이션에선 이 방법을 이용할 것이다.
Fourth-order cumulant (Binder cumulant):
$$U_4 = 1 - \frac{\langle M^4 \rangle}{3\langle M^2 \rangle^2} \tag{7}$$
모든 크기에서 $U_4$가 교차하는 점이 $T_c$

**Critical Exponents 추출:**
Correlation Length에서 모든 곡선이 $T_c$에서 교차:
$$\xi(T,L) \sim L \quad \text{at } T_c \tag{8}$$

### 5. 실용적 절차

**Step 1: 시뮬레이션 설계**
```
다양한 시스템 크기: L = 8, 16, 32, 64, 128...
임계점 근처 온도: T = Tc ± δT 범위
충분한 통계: thermalization + measurement
```

**Step 2: Raw Data 분석**
```
각 (T,L)에서 측정:
- 자화 M, 비열 C, 자화율 χ
- Magnetization distribution
```

**Step 3: Finite Size Scaling 분석**
```
1. Tc 결정 (cumulant crossing)
2. Critical exponents 추정
3. Data collapse 확인
4. Universal scaling functions 추출
```

## Questions & Insights

- **왜 이렇게 scaling이 되는가?**: 임계점에서 상관 길이가 발산하려 하지만 유한한 시스템 크기에 의해 잘림
- **Only one relevant length scale**: 임계점 근처에서는 ξ와 L만이 중요한 길이 척도
- **Universality**: 미시적 세부사항은 잊혀지고 dimensionality와 symmetry만 중요
- **Critical slowing down과의 관계**: 임계점 근처에서 correlation time이 발산하는 문제와 어떻게 연결되는가?

## Related Concepts

- [[Critical_Slowing_Down_and_Cluster_Algorithms]]
- [[Renormalization_Group_Theory]]
- [[Monte_Carlo_Methods_Statistical_Physics]]
- [[Critical_Exponents_Universality_Classes]]
- [[Ising_Model_Phase_Transitions]]

## References

- 전산물리 강의 자료

## Notes from Claude

Finite size scaling은 단순히 기술적인 문제를 해결하는 방법이 아니라, 상전이의 본질적 물리를 이해하는 핵심 도구이다. 

특히 중요한 점은:
1. **Physical Intuition**: ξ와 L의 경쟁이 모든 scaling behavior를 결정한다
2. **Universal Behavior**: 미시적 세부사항과 무관하게 dimensionality와 symmetry만으로 결정되는 보편적 성질
3. **Practical Power**: 유한한 계산 자원으로 무한 시스템의 정확한 성질을 추출할 수 있는 강력한 방법론

이는 condensed matter physics뿐만 아니라 다양한 분야의 critical phenomena 연구에 광범위하게 응용되는 fundamental concept이다.
