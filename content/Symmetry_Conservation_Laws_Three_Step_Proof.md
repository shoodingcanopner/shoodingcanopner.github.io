---
title: 대칭성과 보존법칙 - 3단계 논법 증명
date: "2025-06-02"
tags: [physics, quantum_mechanics, symmetry, conservation_laws, noether_theorem, study]
subjects: physics
category: MOC
---

# 대칭성과 보존법칙 - 3단계 논법 증명

## 개요

세 개의 핵심 정리를 연결하여 **"대칭성 → 보존법칙"** 을 엄밀하게 증명하는 논법
**"해밀토니안이 어떤 대칭성에 불변이면, 그 대칭성의 생성자가 보존량이 된다"**

## 필요한 세 가지 정리

### 정리 1: 불변성과 교환 관계
**명제:** 어떤 observable을 나타내는 operator Q가 있고, 어떤 transformation을 나타내는 unitary operator Y가 있다. 이때 Q가 Y에 대해 invariant하면 Q와 Y는 commute한다.

**수식:** $Y^\dagger Q Y = Q \Rightarrow [Q, Y] = 0$
왜 이런 샌드위치같은 연산을 하는가? 궁금하면
Observable에 basis transform을 하는 연산인  [[Unitary transformation]]를 공부하라. 

**증명:**
$$Y^\dagger Q Y = Q$$

양변에 오른쪽에서 $Y^\dagger$를 곱하면:
$$Y^\dagger Q Y Y^\dagger = Q Y^\dagger$$

$Y$가 유니터리이므로 $Y Y^\dagger = I$:
$$Y^\dagger Q = Q Y^\dagger \tag{1}$$

양변에 에르미트 켤레를 취하면:
$$Q^\dagger Y = Y Q^\dagger$$

Q가 observable(에르미트)이므로 $Q^\dagger = Q$:
$$Q Y = Y Q$$

따라서 $[Q, Y] = 0$ □

나중에 $Q$ 자리에 해밀토니안 $H$를 대입할 것이다. 

### 정리 2: 생성자와 불변량의 교환
**명제:** 앞서 정의한 Y, Q와 어떤 observable을 나타내는 operator A가 있다. 
A가 Y를 generate할 때, Q와 Y가 commute한다면 Q와 A도 commute한다.

**수식:** $Y = e^{i\alpha A}$이고 $[Q, Y] = 0$ $\Rightarrow$ $[Q, A] = 0$
이때, $\alpha A$는 무차원수. 그리고 transform하는 정도에 따라 $\alpha$가 선형적으로 증가한다.  

**증명 (무한소 변환):**
$\alpha$가 아주 작은 값인 $\epsilon$이라고 두자. 그러면 $Y$를 $\epsilon$에 대한 함수라고 생각하고, exponetial을 테일러 전개 할 수 있다. 
$$Y(\epsilon) = e^{i\epsilon A} \approx 1 + i\epsilon A + O(\epsilon^2)$$

$[Q, Y(\epsilon)] = 0$이므로:
$$[Q, 1 + i\epsilon A + O(\epsilon^2)] = 0$$
$$i\epsilon[Q, A] + O(\epsilon^2) = 0$$

$\epsilon \to 0$ 극한에서 $\epsilon^2$에 대한 항들은 0이라고 둘 수 있다. 그러면,
$$[Q, A] = 0$$ □

Baker-Campbell-Hausdorff 증명을 통해 더 엄밀하게 증명할 수 있다고 한다. 나중에 공부해보자. 


### 정리 3: Generalized Ehrenfest Theorem
**공식:**
$$\frac{d}{dt}\langle\hat{A}\rangle = \frac{1}{i\hbar}\langle[\hat{A}, \hat{H}]\rangle + \left\langle\frac{\partial \hat{A}}{\partial t}\right\rangle \tag{2}$$
[[Generalized_Ehrenfest_Theorem]]
## 3단계 논법: 대칭성에서 보존법칙 유도

### 주어진 조건
- **H**: 해밀토니안 (시스템의 에너지)
- **Y**: 유니터리 변환 연산자 (대칭 변환)
- **A**: observable 연산자 (Y의 생성자)
- **조건 1**: H가 Y에 대해 invariant ($Y^\dagger H Y = H$)
- **조건 2**: A가 Y를 generate ($Y = e^{i\alpha A}$)
- **조건 3**: A는 시간에 명시적으로 의존하지 않음 ($\frac{\partial A}{\partial t} = 0$)

### 증명 과정

**1단계: 정리 1 적용**
H가 Y에 대해 invariant하므로:
$$Y^\dagger H Y = H \xRightarrow{\text{정리 1}} [H, Y] = 0 \tag{3}$$

**2단계: 정리 2 적용**
A가 Y를 generate하고 식 (3)에서 $[H, Y] = 0$이므로:
$$[H, Y] = 0 \text{ and } Y = e^{i\alpha A} \xRightarrow{\text{정리 2}} [H, A] = 0 \tag{4}$$

**3단계: 정리 3 적용**
Generalized Ehrenfest theorem에 식 (4)와 조건 3을 적용:

$$\frac{d}{dt}\langle A \rangle = \frac{1}{i\hbar}\langle[A, H]\rangle + \left\langle\frac{\partial A}{\partial t}\right\rangle$$

식 (4)에서 $[H, A] = 0$이므로 $[A, H] = -[H, A] = 0$:
$$\frac{d}{dt}\langle A \rangle = \frac{1}{i\hbar} \cdot 0 + 0 = 0 \tag{5}$$

### 결론
$$\boxed{\frac{d}{dt}\langle A \rangle = 0}$$

**A의 기댓값은 시간에 따라 보존된다!**

## 물리적 의미와 응용

### 일반적 해석
**"해밀토니안이 어떤 대칭성에 불변이면, 그 대칭성의 생성자가 보존량이 된다"**

이는 **노터 정리(Noether's Theorem)**의 양자역학적 표현이다.

### 구체적 예시

**1) 병진 대칭성 → 운동량 보존**
- **대칭 변환**: $Y = e^{-i\mathbf{p}\cdot\mathbf{a}/\hbar}$ (공간 병진)
- **생성자**: $\mathbf{p}$ (운동량)
- **물리적 의미**: 공간이 균질하면 운동량이 보존됨

**2) 회전 대칭성 → 각운동량 보존**
- **대칭 변환**: $Y = e^{-i\mathbf{L}\cdot\boldsymbol{\theta}/\hbar}$ (회전)
- **생성자**: $\mathbf{L}$ (각운동량)
- **물리적 의미**: 공간이 등방적이면 각운동량이 보존됨

**3) 시간 대칭성 → 에너지 보존**
- **대칭 변환**: $Y = e^{-iHt/\hbar}$ (시간 발전)
- **생성자**: $H$ (해밀토니안/에너지)
- **물리적 의미**: 시간이 균질하면 에너지가 보존됨

**4) 게이지 대칭성 → 전하 보존**
- **대칭 변환**: $Y = e^{-iq\chi(\mathbf{r})}$ (게이지 변환)
- **생성자**: $q$ (전하 밀도)
- **물리적 의미**: 게이지 불변성이면 전하가 보존됨

## 핵심 통찰

### 수학적 구조
1. **대칭성**: 물리 법칙의 불변성
2. **생성자**: 대칭 변환을 만드는 무한소 연산자
3. **보존량**: 시간에 따라 변하지 않는 물리량

### 논리적 연쇄
$$\text{대칭성} \xrightarrow{\text{정리 1}} \text{교환 관계} \xrightarrow{\text{정리 2}} \text{생성자와의 교환} \xrightarrow{\text{정리 3}} \text{보존 법칙}$$

### 물리학적 중요성
- **대칭성 원리**가 **보존 법칙**의 근본 원인임을 보여줌
- **노터 정리**의 양자역학적 일반화
- 현대 물리학의 기본 원리 중 하나

