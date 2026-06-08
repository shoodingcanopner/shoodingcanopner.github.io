---
title: "📖 Quantum Mechanics"
date: 2026-02-26
subject:
tags:
  - study
  - subject
class: study_subject
---
> [!info] 과목 노트
> 대학원 1학년 1학기에 수강하는 양자역학1 강의 필기들

# 강의 정보 
교재로 Sakurai 책을 이용한다. 

중간고사 4월 16일
기말고사 6월 8일 14:00 ~ 17:00

결석을 하게 된다면 다음 강의 시작 전까지 못 들은 강의의 필기를 보내면 결석 점수가 아니라 지각 점수를 받게 된다. 
LMS에 강의록을 다 올려주신다고 한다. 

Week 1-4: Chap. 1 Fundamental Concepts
Week 5-7: Chap. 2 Quantum Dynamics
Week 8: Midterm Exam
Week 9-13: Chap. 3 Theory of Angular Momentum
Week 14-15: Chap. 4 Symmetry in Quantum Mechanics
Week 16: Final Exam

# 강의 필기

## 필기 노트 템플릿

[[QM lecture note  - Template]]

## 중간고사 범위
### 강의 필기
[[QM lecture note - Kets, Bras, and Operators]]
[[QM lecture note - Base Kets and Matrix Representation]]
[[QM lecture note - Measurements, Observables, and the Uncertainty Relations]]
[[QM lecture note - Basis Transformation Operator]]
[[QM lecture note - Position, Momentum, and Translation]]
[[QM lecture note - Position, Momentum, and Generators]]
[[QM lecture note - Gaussian Wave Packet]]
[[QM lecture note - Time Evolution Operator]]
[[QM lecture note - Heisenberg Picture and Equations of Motion]]
[[QM lecture note - Simple Harmonic Oscillator]]
[[QM lecture note - Wave Equation and Probability Conservation]]
→ 해석역학 범위인 Hamiton-Jacobi equation 설명도 자세하게 되어 있음
[[QM lecture note - Propagators and Path Integral]]
[[QM lecture note - Path Integral Formulation]]
[[QM lecture note - Gauge Transformations]]
[[QM lecture note - Aharonov-Bohm Effect and Magnetic Monopole]]

### 숙제와 추가 필기
[[Sakurai 1장 문제 풀기 + Homework]]
[[Sakurai 2장 문제 풀기 + Homework]]
[[QM mini note - Canonical Commutation Relation from Translation]]
[[QM mini note - Generator as Differential Operator]]
[[QM mini note - Translation Operator in Generator Eigenket Basis]]

### 시험 족보
후배를 위해 남기는 이번 중간고사 족보
[[QM midterm 2026-1]]

## 기말고사 범위

[[QM lecture note - Symmetry, Conservation Laws, and Degeneracy]]
[[QM lecture note - Discrete Symmetries]]
[[QM lecture note - Time Reversal Operator]]
[[QM lecture note - Rotation and Angular Momentum]]
[[QM lecture note - Time Reversal for Spin-½ System]]
[[QM lecture note - Kramers' Degeneracy]]
[[QM lecture note - Two-Component Spinor and Rotation Operator]]
[[QM lecture note - Euler Rotation and Angular Momentum Eigenvalues]]
[[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]
[[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]
[[QM lecture note - Addition of Angular Momentum and CG Coefficients]]
[[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]
[[QM lecture note - Wigner-Eckart Theorem Proof and Applications]]
[[QM lecture note - Density Operator and Entropy]]

### Mini Notes

[[Mini Note - Lie Derivative and Baker-Hausdorff Correspondence]]


## 으악 중간고사가 24시간도 안 남았다! 
이모저모 깨달은 것들을 써보자.
![[Pasted image 20260416143202.png]]
### Heisenberg 운동방정식에서 commutator를 슈뢰딩거 연산자로 계산해도 되는 이유

$H$가 시간 무관할 때, Heisenberg 연산자의 정의는

$$
A^H(t) = e^{iHt/\hbar}\,A^S\,e^{-iHt/\hbar}
$$

이므로 commutator를 전개하면:

$$
[A^H(t),\,H] = [e^{iHt/\hbar}A^S e^{-iHt/\hbar},\,H]
$$

$H$는 자기 자신의 함수인 $e^{\pm iHt/\hbar}$와 commute하므로, 지수 인자들을 밖으로 꺼낼 수 있다:

$$
= e^{iHt/\hbar}\,[A^S,\,H]\,e^{-iHt/\hbar}
$$

따라서 운동방정식은:

$$
\frac{d}{dt}A^H(t) = \frac{1}{i\hbar}\,e^{iHt/\hbar}[A^S,\,H]\,e^{-iHt/\hbar}
$$

**$[A^S, H]$만 계산하면 된다.** 유니터리 샌드위치는 결과를 하이젠베르크 연산자로 바꿔줄 뿐이고, 운동방정식의 구조(어떤 연산자에 비례하는지)는 바뀌지 않는다.

> [!note] 조건
> $H$가 **시간 무관**할 때만 성립. 시간 의존 $H$에서는 $e^{iHt/\hbar}$가 잘 정의되지 않으므로 이 논리가 그대로 적용되지 않는다.




### Free Particle: Position Operator의 시간 진화

#### Heisenberg 운동방정식으로 $x^H(t)$ 구하기

자유입자 $H = \frac{p^2}{2m}$에 Heisenberg 운동방정식 적용:

$$
\frac{d}{dt}x^H = \frac{1}{i\hbar}[x, H] = \frac{1}{i\hbar}\left[x, \frac{p^2}{2m}\right]
$$

$[x, G(p)] = i\hbar\frac{\partial G}{\partial p}$를 이용하면:

$$
\left[x, \frac{p^2}{2m}\right] = i\hbar\frac{p}{m}
$$

따라서:

$$
\frac{d}{dt}x^H = \frac{p}{m}
$$

자유입자에서 $p$는 보존되므로 ($[p, H] = 0$ → $p^H(t) = p(0)$), 적분하면:

$$
\boxed{x^H(t) = x(0) + \frac{p(0)}{m}t}
$$
그냥 이게 다임!!!! 진짜임!!!!

고전역학의 $x(t) = x_0 + v_0 t$와 완전히 같은 형태 — Ehrenfest 정리의 연산자 버전.

---

### Eigenket으로 검증

$x^H(t)$의 eigenket 조건:

$$
x^H(t)\ket{x'; t} = x'\ket{x'; t}
$$

Heisenberg eigenket은 $\ket{x'; t} = e^{iHt/\hbar}\ket{x'}$이므로,
$x$-representation에서:

$$
\left(x - \frac{i\hbar t}{m}\frac{\partial}{\partial x}\right)\langle x|x';t\rangle = x'\langle x|x';t\rangle
$$

$\langle x|x';t\rangle = \langle x|e^{iHt/\hbar}|x'\rangle$는 전파자의 켤레:

$$
\langle x|x';t\rangle \propto \exp\left[\frac{im(x-x')^2}{2\hbar t}\right]
$$

대입하면:

$$
\frac{\partial}{\partial x}\exp\left[\frac{im(x-x')^2}{2\hbar t}\right] = \frac{im(x-x')}{\hbar t}\exp\left[\frac{im(x-x')^2}{2\hbar t}\right]
$$

좌변 정리:

$$
x\cdot K^* + \frac{-i\hbar t}{m}\cdot\frac{im(x-x')}{\hbar t}K^* = xK^* + (x - x')K^* = x'K^* \checkmark
$$

---

### 결과 해석

$x^H(t)$의 eigenket은 **자유입자 전파자에 의해 퍼져나간 위치 고유상태**다.

- $t = 0$에서 $x'$에 완전히 국소화된 상태가 시간이 지나면 Gaussian 형태로 퍼져나감
- 그러면서도 연산자 $x^H(t)$의 eigenvalue는 고전적 궤적 $x_0 + \frac{p_0}{m}t$를 그대로 추적함

Heisenberg 그림과 Schrödinger 그림이 완벽하게 일관됨을 확인. ✅

### 임의 스핀 위치의 eigen vector

![[Pasted image 20260416085039.png]]

### Bloch sphere

![[Pasted image 20260417121202.png]]