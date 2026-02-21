---
title: "확률과 통계 학습 정리"
date: "2025-05-12"
tags: [MOC, math, probability, statistics, study]
subjects: [mathematics]
---

# 확률과 통계 학습 정리

이 문서는 확률과 통계 학습의 핵심 개념을 정리한 MOC(Map of Content)입니다. 수리 물리 교재 챕터 15  "Probability and Statistics"를 기반으로 학습한 내용을 체계적으로 정리했습니다.

## 1. 확률 개요

확률 이론은 물리과학, 양자역학, 통계역학 등 다양한 분야에서 중요한 응용을 가집니다. 확률은 부분적인 무지 상태에서 결과에 대한 우리의 지식을 정량화하는 방법입니다.

### 확률의 기본 개념
- 확률은 불확실한 사건에 대한 가능성을 수치로 표현
- 동전 던지기에서 앞면이 나올 확률은 1/2
- 모든 가능한 결과가 '상호 배타적(mutually exclusive)', '집합적으로 완전(collectively exhaustive)', '동등하게 가능(equally likely)'할 때 확률 정의

### 확률의 기본 정의

확률의 가장 기본적인 정의:

$$P(E) = \frac{\text{사건 } E\text{에 유리한 결과의 수}}{\text{가능한 총 결과의 수}} \tag{1.2}$$

## 2. 표본 공간(Sample Space)

표본 공간은 실험의 모든 가능한 상호 배타적 결과의 집합을 말합니다.

### 균일 및 비균일 표본 공간
- **균일 표본 공간(Uniform sample space)**: 모든 결과가 동일한 확률을 가짐
- **비균일 표본 공간(Nonuniform sample space)**: 결과마다 다른 확률을 가짐

### 확률의 일반적 정의

주어진 표본 공간(균일 또는 비균일)과 그 점들에 연관된 확률이 있을 때, 사건의 확률은 사건에 유리한 모든 표본점의 확률을 더함으로써 찾습니다.

## 3. 확률 정리

### 복합 사건의 확률

사건 A와 B가 있을 때, "A와 B가 한번에 일어날" 복합 사건의 확률:

$$P(A \cap B) = P(A) \cdot P(B|A) \tag{3.1}$$

여기서 $P(B|A)$는 A가 발생했다는 조건 하에 B가 발생할 확률입니다.

### 독립 사건

사건 A와 B가 독립적이라면:

$$P(B) = P(B|A) \tag{3.4}$$
$$P(A \cap B) = P(A) \cdot P(B) \tag{3.5}$$

### 합집합의 확률

사건 A와 B의 합집합(A 또는 B 또는 둘 다)의 확률:

$$P(A+B) = P(A) + P(B) - P(A \cap B) \tag{3.6}$$

### 배타적 사건
A와 B가 상호 배타적이면($P(A \cap B) = 0$):

$$P(A+B) = P(A) + P(B) \tag{3.7}$$

### 조건부 확률과 베이즈 공식

조건부 확률 $P(B|A)$를 구하는 베이즈 공식:

$$P(B|A) = \frac{P(A \cap B)}{P(A)} \tag{3.8}$$

[[베이즈 공식]]

## 4. 계수 방법

### 기본 계수 원리

만약 하나의 일을 $N_1$ 방법으로 할 수 있고, 그 후에 두 번째 일을 $N_2$ 방법으로 할 수 있다면, 두 일을 순서대로 $N_1 \cdot N_2$ 방법으로 할 수 있습니다. 

### 순열
n개 중에서 r개를 선택하여 순서대로 배열하는 방법의 수:

$$P(n,r) = \frac{n!}{(n-r)!} \tag{4.3}$$

### 조합
n개 중에서 r개를 선택하는 방법의 수(순서 무관):

$$C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!} \tag{4.5}$$

### 볼-박스 문제
N개의 공을 n개의 상자에 배치하는 방법 및 통계역학 관련 분포:
- **맥스웰-볼츠만 통계**: 모든 배치가 동등하게 가능
- **페르미-디락 통계**: 박스당 최대 한 개의 입자만 가능
- **보즈-아인슈타인 통계**: 모든 구별 가능한 배열이 동등하게 가능

## 5. 확률 변수

확률 변수는 표본 공간의 각 점에 대해 특정 값을 갖는 함수입니다.

### 확률 함수

확률 함수 $f(x)$는 확률 변수 $x$가 특정 값을 가질 확률을 나타냅니다.

### 평균값, 표준편차

확률 변수 $x$의 평균값 또는 기댓값:

$$\mu = \text{average of } x = \sum_i x_i p_i = \sum_i x_i f(x_i) \tag{5.2}$$

분산:

$$\text{Var}(x) = \sum_i (x_i - \mu)^2 f(x_i) \tag{5.3}$$

표준편차:

$$\sigma_x = \text{standard deviation of } x = \sqrt{\text{Var}(x)} \tag{5.4}$$

### 누적 분포 함수

확률 변수 $x$가 특정 값 $x_i$ 이하일 확률을 나타내는 함수:

$$F(x_i) = \text{(probability that } x \leq x_i\text{)} = \sum_{x_j \leq x_i} f(x_j) \tag{5.6}$$

## 6. 연속 분포

### 확률 밀도 함수

연속 확률 변수의 확률 밀도 함수 $f(x)$는 $\int_{-\infty}^{\infty} f(x) dx = 1$을 만족합니다.

### 연속 분포의 평균과 분산

평균값:

$$\mu = \bar{x} = E(x) = \langle x \rangle = \int_{-\infty}^{\infty} x f(x) dx \tag{6.2}$$

분산:

$$\text{Var}(x) = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx = \sigma_x^2 \tag{6.3}$$

### 누적 분포 함수

연속 확률 변수의 누적 분포 함수:

$$F(x) = \int_{-\infty}^{x} f(u) du, \quad \int_{-\infty}^{\infty} f(x) dx = F(\infty) = 1 \tag{6.4}$$

### 결합 분포

두 확률 변수 $x$와 $y$의 결합 확률 밀도 함수 $f(x,y)$를 사용한 기대값 계산:

$$\bar{x} = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x f(x,y) dx dy \tag{6.6}$$

$$\bar{y} = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} y f(x,y) dx dy \tag{6.6}$$

$$\text{Var}(x) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x - \bar{x})^2 f(x,y) dx dy = \sigma_x^2 \tag{6.6}$$

$$\text{Var}(y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (y - \bar{y})^2 f(x,y) dx dy = \sigma_y^2 \tag{6.6}$$

$$\text{Cov}(x,y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x - \bar{x})(y - \bar{y}) f(x,y) dx dy \tag{6.6}$$

## 7. 이항 분포

### 베르누이 시행

각 시행에서 두 가능한 결과("성공"과 "실패")가 있고, 성공 확률이 $p$, 실패 확률이 $q = 1-p$인 독립 시행의 반복을 베르누이 시행이라 합니다.

### 이항 확률 함수

n번의 베르누이 시행에서 정확히 x번의 성공이 있을 확률:

$$f(x) = C(n,x) p^x q^{n-x} \tag{7.3}$$

### 이항 누적 분포 함수

n번의 베르누이 시행에서 최대 x번의 성공이 있을 확률:

$$F(x) = \sum_{u=0}^{x} C(n,u) p^u q^{n-u} = \sum_{u=0}^{x} \binom{n}{u} p^u q^{n-u} \tag{7.4}$$

### 평균과 분산

이항 분포의 평균은 $\mu = np$이고, 분산은 $\text{Var}(x) = npq$입니다.

## 8. 정규 분포 (가우시안 분포)

### 정규 분포 함수

정규 분포의 확률 밀도 함수와 누적 분포 함수:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/(2\sigma^2)} \tag{8.1}$$

$$F(x) = \frac{1}{\sigma\sqrt{2\pi}} \int_{-\infty}^{x} e^{-(t-\mu)^2/(2\sigma^2)} dt \tag{8.1}$$

### 이항 분포의 정규 근사

큰 n과 큰 np에 대해 이항 분포는 정규 분포로 근사할 수 있습니다:

$$f(x) = C(n,x) p^x q^{n-x} \sim \frac{1}{\sqrt{2\pi npq}} e^{-(x-np)^2/(2npq)} \tag{8.3}$$

### 표준 정규 분포

$\mu = 0$, $\sigma = 1$인 특수한 정규 분포:

$$\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2} \tag{8.5}$$

$$\Phi(z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{z} e^{-u^2/2} du \tag{8.5}$$

## 9. 포아송 분포

### 포아송 분포 함수

단위 시간당 평균 발생 횟수가 $\mu$일 때, 정확히 n번 발생할 확률:

$$P_n = \frac{\mu^n}{n!} e^{-\mu} \tag{9.8}$$

### 포아송 분포의 평균과 분산

포아송 분포의 평균과 분산은 모두 $\mu$입니다.

### 이항 분포의 포아송 근사

큰 n과 작은 p에 대해 이항 분포는 포아송 분포로 근사할 수 있습니다:

$$C(n,x) p^x q^{n-x} \sim \frac{(np)^x e^{-np}}{x!} \tag{9.9}$$

## 10. 통계와 실험 측정

### 모집단 평균의 추정

표본 평균을 모집단 평균의 추정값으로 사용:

$$\text{Estimate of population mean is } \mu \approx \bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i \tag{10.1}$$

### 모집단 분산의 추정

표본 분산을 모집단 분산의 추정값으로 사용:

$$\text{Estimate of population variance is } \sigma^2 \approx \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2 \tag{10.2}$$

### 평균의 표준 편차; 표준 오차

평균의 표준 편차 또는 표준 오차:

$$\sigma_m = \frac{\sigma}{\sqrt{n}} \tag{10.3}$$

### 측정값 조합

두 독립적으로 측정된 양 x와 y의 함수 w = w(x,y)에 대한 표준 오차:

$$\sigma_{mw} = \sqrt{\left(\frac{\partial w}{\partial x}\right)^2 \sigma_{mx}^2 + \left(\frac{\partial w}{\partial y}\right)^2 \sigma_{my}^2} \tag{10.13}$$

### 중심 극한 정리

표본 크기 n이 충분히 크면, 모집단 분포가 어떤 형태이든 상관없이 표본 평균의 분포는 정규 분포에 근사합니다.

### 신뢰 구간

표본 평균이 모집단 평균으로부터 $\pm \sigma_m$ 범위 내에 있을 확률은 약 68%입니다. 이러한 구간을 68% 신뢰 구간이라고 합니다.

---

이 MOC 문서는 "Probability and Statistics" 챕터 15의 주요 개념을 정리한 것입니다. 각 주제에 대한 더 자세한 학습이 필요한 경우 연결된 노트를 참조하세요.
