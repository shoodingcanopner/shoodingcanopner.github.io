---
title: Cauchy-Schwarz Inequality
date: 2025-05-08
subject: mathmetics
tags:
  - study
  - concept
  - mathematics
  - linear_algebra
  - inequality
  - quantum_mechanics
class: study
---

# 코시-슈바르츠 부등식 (Cauchy-Schwarz Inequality)

## 개요

코시-슈바르츠 부등식은 선형대수학과 해석학의 핵심 부등식으로, 벡터 공간의 내적과 노름 사이의 관계를 규정한다. 이 부등식은 내적 공간에서 보편적으로 성립하며 여기저기 다양한 분야에 쓰인다. 특히 양자역학에서 [[Uncertainty Principle]]을 증명하기 위해 쓰인다. 

## 수학적 정의

### 일반적인 형태

내적 공간에서 코시-슈바르츠 부등식의 일반적인 형태는 다음과 같다.

$$|\langle u, v \rangle|^2 \leq \langle u, u \rangle \cdot \langle v, v \rangle$$

노름(norm)을 사용하여 표현하면:

$$|\langle u, v \rangle| \leq \|u\| \cdot \|v\|$$

여기서:
- $\langle u, v \rangle$는 벡터 $u$와 $v$ 사이의 내적
- $\|u\| = \sqrt{\langle u, u \rangle}$는 벡터 $u$의 노름(길이)
- $\|v\| = \sqrt{\langle v, v \rangle}$는 벡터 $v$의 노름(길이)

### 등호 조건

부등식의 등호는 다음 조건에서만 성립합니다:
- $u$와 $v$가 선형 종속일 때, 즉 $u = \lambda v$ 또는 $v = \lambda u$ (여기서 $\lambda$는 스칼라)
- 둘 중 하나가 영벡터일 때

## 증명 방법


임의의 스칼라 $\lambda$에 대해, 벡터 $u - \lambda v$의 제곱 노름은 항상 0보다 크거나 같다. 

$$\|u - \lambda v\|^2 \geq 0$$

이를 전개하면:
$$\langle u - \lambda v, u - \lambda v \rangle \geq 0$$
$$\langle u, u \rangle - \lambda \langle u, v \rangle - \overline{\lambda} \langle v, u \rangle + |\lambda|^2 \langle v, v \rangle \geq 0$$

특히 $\lambda = \frac{\langle u, v \rangle}{\langle v, v \rangle}$를 선택하면(단, $v \neq 0$):
$$\langle u, u \rangle - \frac{|\langle u, v \rangle|^2}{\langle v, v \rangle} \geq 0$$

이를 정리하면 코시-슈바르츠 부등식이 나온다. 
$$|\langle u, v \rangle|^2 \leq \langle u, u \rangle \cdot \langle v, v \rangle$$

## 다양한 공간에서의 형태

### 유클리드 공간 $\mathbb{R}^n$

$\mathbf{u} = (u_1, u_2, \ldots, u_n)$와 $\mathbf{v} = (v_1, v_2, \ldots, v_n)$에 대해:

$$\left(\sum_{i=1}^n u_i v_i\right)^2 \leq \left(\sum_{i=1}^n u_i^2\right) \left(\sum_{i=1}^n v_i^2\right)$$

### 복소 벡터 공간 $\mathbb{C}^n$

$\mathbf{u} = (u_1, u_2, \ldots, u_n)$와 $\mathbf{v} = (v_1, v_2, \ldots, v_n)$에 대해:

$$\left|\sum_{i=1}^n u_i \overline{v_i}\right|^2 \leq \left(\sum_{i=1}^n |u_i|^2\right) \left(\sum_{i=1}^n |v_i|^2\right)$$

### 함수 공간 $L^2[a,b]$

연속 함수 $f(x)$와 $g(x)$에 대해:

$$\left|\int_a^b f(x)\overline{g(x)}\,dx\right|^2 \leq \int_a^b |f(x)|^2\,dx \cdot \int_a^b |g(x)|^2\,dx$$

### 확률론적 형태

확률 변수 $X$와 $Y$에 대해:

$$[E(XY)]^2 \leq E(X^2) \cdot E(Y^2)$$

여기서 $E$는 expectation value. 

## 기하학적 해석

코시-슈바르츠 부등식은 기하학적으로 두 벡터 사이의 각도 $\theta$와 관련있다. 

$$\langle u, v \rangle = \|u\| \cdot \|v\| \cdot \cos \theta$$

따라서:
$$|\cos \theta| \leq 1$$

이는 직관적으로 두 벡터가 완전히 평행할 때($\theta = 0$ 또는 $\theta = \pi$) 등호가 성립한다는 의미이다. 

## 응용

### 불확정성 원리

양자역학에서 하이젠베르크의 불확정성 원리는 코시-슈바르츠 부등식에 기반한다. 
두 관측량 $A$와 $B$의 표준편차 $\Delta A$와 $\Delta B$에 대해:

$$\Delta A \cdot \Delta B \geq \frac{1}{2}|\langle [A, B] \rangle|$$

여기서 $[A, B] = AB - BA$는 commutator. 이 부등식의 유도 과정은 다음과 같다. 

1. 상태 $|\psi\rangle$에 대해, 연산자의 편차를 $\Delta \hat{A} = \hat{A} - \langle\hat{A}\rangle I$와 $\Delta \hat{B} = \hat{B} - \langle\hat{B}\rangle I$로 정의

2. 코시-슈바르츠 부등식을 적용하면:
   $$\|\Delta \hat{A}|\psi\rangle\|^2 \cdot \|\Delta \hat{B}|\psi\rangle\|^2 \geq |\langle\psi|\Delta \hat{A}^\dagger \Delta \hat{B}|\psi\rangle|^2$$

3. $\Delta \hat{A}^\dagger \Delta \hat{B}$를 교환자와 반교환자로 분해한다.

자세한 유도 과정은 [[Uncertainty Principle]] 노트에서 확인.

### 삼각 부등식

내적 공간에서 삼각 부등식:
$$\|u + v\| \leq \|u\| + \|v\|$$

이는 코시-슈바르츠 부등식을 사용하여 증명할 수 있다. 
$$\|u + v\|^2 = \langle u + v, u + v \rangle = \|u\|^2 + 2\text{Re}\langle u, v \rangle + \|v\|^2 \leq \|u\|^2 + 2\|u\|\|v\| + \|v\|^2 = (\|u\| + \|v\|)^2$$

### 통계학에서의 상관 계수

두 확률 변수 $X$와 $Y$의 상관 계수 $\rho$는:
$$\rho = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}$$

코시-슈바르츠 부등식에 의해 $-1 \leq \rho \leq 1$이 성립.

## 관련 개념

- [[Uncertainty Principle]]
- [[양자역학 기댓값 연산의 비선형성]]

## 참고문헌
- Sakurai, J. J. (2017). Modern Quantum Mechanics. Cambridge University Press.
