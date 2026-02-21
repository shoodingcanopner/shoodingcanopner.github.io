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

### SI 단위계의 전자기 단위

#### 전기 관련 단위

| 물리량           | 단위  | 기호  | 기본 단위 표현      | 비고  |
| ------------- | --- | --- | ------------- | --- |
| 전하            | 쿨롱  | C   | A·s           |     |
| 전류            | 암페어 | A   | A (기본 단위)     |     |
| 전위, 전압        | 볼트  | V   | kg·m²/(A·s³)  | J/C |
| 전기장           | -   | -   | V/m = N/C     |     |
| 전기 저항         | 옴   | Ω   | kg·m²/(A²·s³) | V/A |
| 전기 용량 (커패시턴스) | 패럿  | F   | A²·s⁴/(kg·m²) | C/V |
| 유전율           | -   | -   | F/m           |     |

#### 자기 관련 단위

| 물리량 | 단위 | 기호 | 기본 단위 표현 | 비고 |
|--------|------|------|---------------|------|
| 자기장 | 테슬라 | T | kg/(A·s²) | Wb/m² |
| 자기선속 | 웨버 | Wb | kg·m²/(A·s²) | V·s = T·m² |
| 자기 인덕턴스 | 헨리 | H | kg·m²/A² | Wb/A = V·s/A |
| 투자율 | - | - | H/m | |
| 자화 | - | - | A/m | |

### 단위 간 관계식

**테슬라(T), 웨버(Wb), 헨리(H)의 관계:**

$$
\begin{align}
1 \text{ T} &= 1 \frac{\text{Wb}}{\text{m}^2} = 1 \frac{\text{kg}}{\text{A} \cdot \text{s}^2} \tag{0.2}\\
1 \text{ Wb} &= 1 \text{ V} \cdot \text{s} = 1 \text{ T} \cdot \text{m}^2 \tag{0.3}\\
1 \text{ H} &= 1 \frac{\text{Wb}}{\text{A}} = 1 \frac{\text{V} \cdot \text{s}}{\text{A}} \tag{0.4}
\end{align}
$$

**패럿(F)과 다른 단위의 관계:**

$$
\begin{align}
1 \text{ F} &= 1 \frac{\text{C}}{\text{V}} = 1 \frac{\text{A} \cdot \text{s}}{\text{V}} \tag{0.5}\\
1 \text{ F} &= 1 \frac{\text{s}}{\Omega} \tag{0.6}
\end{align}
$$

**전기장과 자기장의 단위 관계:**

$$
\begin{align}
[\mathbf{E}] &= \frac{\text{V}}{\text{m}} = \frac{\text{N}}{\text{C}} \tag{0.7}\\
[\mathbf{B}] &= \text{T} = \frac{\text{N}}{\text{A} \cdot \text{m}} \tag{0.8}
\end{align}
$$

### SI vs CGS-Gaussian 단위계 비교

| 물리량 | SI 단위 | CGS-Gaussian 단위 | 변환 |
|--------|---------|-------------------|------|
| 전하 $q$ | 쿨롱 (C) | esu (statC) | 1 C = $3 \times 10^9$ esu |
| 전류 $I$ | 암페어 (A) | esu/s | 1 A = $3 \times 10^9$ esu/s |
| 전위 $\phi$ | 볼트 (V) | statvolt | 1 V = $1/300$ statvolt |
| 전기장 $\mathbf{E}$ | V/m | statvolt/cm | 1 V/m = $1/(3 \times 10^4)$ statvolt/cm |
| 자기장 $\mathbf{B}$ | 테슬라 (T) | 가우스 (G) | 1 T = $10^4$ G |

**CGS-Gaussian 단위계에서의 맥스웰 방정식:**

$$
\begin{align}
\nabla \cdot \mathbf{E} &= 4\pi\rho \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{1}{c}\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \frac{4\pi}{c}\mathbf{J} + \frac{1}{c}\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

### 유용한 기억 팁

1. **테슬라(T)**: 자기장의 세기. 자기선속밀도 = 웨버/면적
2. **웨버(Wb)**: 자기선속. 패러데이 법칙에서 자연스럽게 나타남
3. **헨리(H)**: 인덕턴스. 웨버/전류 = 전압·시간/전류
4. **패럿(F)**: 커패시턴스. 전하/전압
5. **==$\epsilon_0 \mu_0 c^2 = 1$==**: SI 단위계의 핵심 관계식

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
- 전기장: $\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}$
- 자기장: $\mathbf{B} = \nabla \times \mathbf{A}$
- 게이지 불변성과 게이지 선택 (Coulomb gauge, Lorenz gauge)
- 전기-자기 대칭성의 의미

[[전기장과 자기장의 포텐셜]]
[[포텐셜을 이용한 맥스웰 방정식]]


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
