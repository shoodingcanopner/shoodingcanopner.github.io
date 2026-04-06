---
title: 📖 Electrodynamics
date: 2025-10-28
subject: physics
tags:
  - study
  - concept
  - electrodynamics
class: study_subject
---
# Electrodynamics

# 2026 전기역학1 강의 필기

> [!info] 과목 노트
> 대학원 1학년 1학기에 수강하는 전기역학1 강의 
> 


## 노트 템플릿

[[ED lecture note - Template]]

## 중간고사 범위

[[ED lecture note - electroststics and magnetostatics]]
[[ED lecture note - Faraday Maxwell Potentials]]
[[ED lecture note - Gauge Transform and Energy Conservation]]
[[ED lecture note - Momentum Conservation and Stress Tensor]]
[[ED lecture note - Symmetry and EM Waves]]
[[ED lecture note - EM Waves and Polarization]]
[[ED lecture note - Stokes Parameters and Reflection]]
[[ED lecture note - Fresnel Equations]]
[[ED lecture note - Dispersion]]

[[ED lecture note - Complex Analysis]]

[[중간고사 대비 - 이정도 유도는 모두 할 수 있어야 한다! 리스트]]

---


이 노트는 전기역학에 대한 감을 완전히 잃어버렸을 때, 기초부터 다시 감을 잡기 위한 로드맵 역할을 한다. 각 주제에 대한 상세한 내용은 연결된 노트들을 참고한다.


## 0. 단위와 상수 범례

전기역학에서 사용되는 기본 상수와 단위계를 정리한다.

### 기본 전자기 상수

| 상수     | 기호           | SI 단위 값                     | CGS-Gaussian 단위 값           |
| ------ | ------------ | --------------------------- | --------------------------- |
| 진공 유전율 | $\epsilon_0$ | $8.854 \times 10^{-12}$ F/m | $1/(4\pi)$                  |
| 진공 투자율 | $\mu_0$      | $4\pi \times 10^{-7}$ H/m   | $4\pi$                      |
| 광속     | $c$          | $2.998 \times 10^8$ m/s     | $2.998 \times 10^{10}$ cm/s |
| 기본 전하  | $e$          | $1.602 \times 10^{-19}$ C   | $4.803 \times 10^{-10}$ esu |

**중요한 관계식:**
$$c = \frac{1}{\sqrt{\epsilon_0 \mu_0}} \tag{0.1}$$



---

## 1. 맥스웰 방정식 외우기

전기역학의 출발점. 4개의 맥스웰 방정식과 전기장·자기장의 포텐셜 표현을 정리한다.

**관련 노트:**
- [[맥스웰 방정식 외우기]]

$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$
- [[간단한 시스템의 전기장 자기장 유도 직접 해보기]] 

## 2. 전기 포텐셜과 자기벡터 포텐셜

전기장과 자기장을 포텐셜로 표현하는 방법. 특히 전기와 자기 표현의 대칭성에 주목한다.

**핵심 개념:**
- 전기 스칼라 포텐셜 $\phi$와 자기 벡터 포텐셜 $\mathbf{A}$의 정의
$$
\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}
$$
$$
\mathbf{B} = \nabla \times \mathbf{A}
$$

- 게이지 불변성과 게이지 선택 (Coulomb gauge, Lorenz gauge)

[[전기장과 자기장의 포텐셜]]
[[포텐셜을 이용한 맥스웰 방정식]]
[[Vector Identities in Electrodynamics]]

## 3. 그린 함수를 이용한 쿨롱 법칙과 비오-사바르 법칙 유도

맥스웰 방정식으로부터 정전기학의 쿨롱 법칙과 정자기학의 비오-사바르 법칙을 유도한다. 그린 함수 방법의 강력함을 이해한다.

**핵심 개념:**
- 포아송 방정식과 디랙 델타 함수
- 그린 함수의 정의와 물리적 의미
- 점전하에 대한 전기 포텐셜 유도
- 전류 요소에 대한 자기 벡터 포텐셜 유도
- 쿨롱 법칙: $\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2}\hat{r}$
- 비오-사바르 법칙: $\mathbf{B} = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J} \times \hat{r}}{r^2} dV$

**관련 노트:**
- [[Poisson_Equation_for_Dirac_Delta_and_Point_Charge_Potential]]

**작성할 노트:**
- Green's Function for Poisson Equation
- Coulomb's Law from Maxwell Equations
- Biot-Savart Law from Maxwell Equations

### 4. 전자기파
- 진공에서의 파동 방정식
- [[Wave Equation from Maxwell Equations]]
- 평면파 해
- 에너지와 운동량

### 5. 경계 조건
- 전기장과 자기장의 경계 조건
- 유전체와 자성체

### 6. 전자기 복사
- 전기 쌍극자 복사
- Larmor 공식
- 복사 저항

---


*이 노트는 지속적으로 업데이트되며, 각 주제에 대한 상세 노트가 작성되면 링크가 추가된다.*
