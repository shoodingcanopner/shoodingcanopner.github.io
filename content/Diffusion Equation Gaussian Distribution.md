---
title: "확산방정식으로부터 가우시안 분포 도출"
date: "2025-05-27"
tags: [physics, mathematics, diffusion, gaussian, brownian_motion, study]
subjects: [physics, mathematics]
category: "quantum mechanics study"
---

# 확산방정식으로부터 가우시안 분포 도출

## 개요

확산방정식(Diffusion Equation)을 풀어서 랜덤 워크하는 입자 하나가 가우시안 분포를 가진다는 것을 수학적으로 도출하는 과정입니다. 이것이 바로 브라운 운동의 수학적 기초가 됩니다.

## 1. 확산방정식 설정

1차원에서의 확산방정식:

$$\frac{\partial P(x,t)}{\partial t} = D \frac{\partial^2 P(x,t)}{\partial x^2} \tag{1}$$

여기서:
- $P(x,t)$: 시간 $t$에서 위치 $x$에 입자가 있을 확률밀도
- $D$: 확산계수 (diffusion coefficient)

## 2. 초기조건

$t=0$에서 입자가 원점에 있다고 가정:

$$P(x,0) = \delta(x) \tag{2}$$

## 3. 푸리에 변환을 이용한 풀이

### 3.1 푸리에 변환 정의
$P(x,t)$의 푸리에 변환을 $\tilde{P}(k,t)$라 정의:

$$\tilde{P}(k,t) = \int_{-\infty}^{\infty} P(x,t) e^{-ikx} dx$$

### 3.2 푸리에 공간에서의 확산방정식
확산방정식을 푸리에 변환하면, $x$ 2차 미분이 $-k^2$가 된다. 

$$\frac{\partial \tilde{P}(k,t)}{\partial t} = -Dk^2 \tilde{P}(k,t) \tag{3}$$
### 3.3 푸리에 공간에서의 해
식 (3)은 1차 선형 미분방정식이므로:

$$\tilde{P}(k,t) = \tilde{P}(k,0) e^{-Dk^2t} \tag{4}$$

초기조건 $P(x,0) = \delta(x)$의 푸리에 변환:
$$\tilde{P}(k,0) = \int_{-\infty}^{\infty} \delta(x) e^{-ikx} dx = 1$$
따라서:
$$\tilde{P}(k,t) = e^{-Dk^2t} \tag{5}$$

## 4. 역푸리에 변환

$$P(x,t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-Dk^2t} e^{ikx} dk$$

지수함수를 정리:

$$P(x,t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-Dk^2t + ikx} dk$$

완전제곱식으로 변형:

$$-Dk^2t + ikx = -Dt\left(k - \frac{ix}{2Dt}\right)^2 - \frac{x^2}{4Dt}$$

따라서:

$$P(x,t) = \frac{e^{-x^2/(4Dt)}}{2\pi} \int_{-\infty}^{\infty} e^{-Dt(k - \frac{ix}{2Dt})^2} dk$$

## 5. 가우시안 적분 계산

변수치환: $u = \sqrt{Dt}\left(k - \frac{ix}{2Dt}\right)$

$$\int_{-\infty}^{\infty} e^{-Dt(k - \frac{ix}{2Dt})^2} dk = \frac{1}{\sqrt{Dt}} \int_{-\infty}^{\infty} e^{-u^2} du = \frac{\sqrt{\pi}}{\sqrt{Dt}}$$

## 6. 최종 결과

$$P(x,t) = \frac{e^{-x^2/(4Dt)}}{2\pi} \cdot \frac{\sqrt{\pi}}{\sqrt{Dt}} = \frac{1}{\sqrt{4\pi Dt}} e^{-\frac{x^2}{4Dt}} \tag{6}$$

## 결론: 가우시안 분포

확산방정식의 해가 정확히 **가우시안 분포**입니다:

$$P(x,t) = \frac{1}{\sqrt{4\pi Dt}} \exp\left(-\frac{x^2}{4Dt}\right) \tag{7}$$
### 물리적 의미

- **평균**: $\langle x \rangle = 0$ (원점 중심)
- **분산**: $\langle x^2 \rangle = 2Dt$ (시간에 비례해서 퍼짐)
- **표준편차**: $\sigma = \sqrt{2Dt}$

### In the case of 3D diffusion
$$ 
P(\vec{r},t) = P(x,t)P(y,t)P(z,t) = \frac{1}{(4\pi Dt)^{3/2}} \exp\left(-\frac{r^2}{4Dt}\right) \tag{8}
$$
$x, y, z$각각이 식(7)의 분포를 가진다. 분산은 $\langle r^2 \rangle = 6Dt$가 나온다. 

## 연관 개념

- [[Central Limit Theorem]]
- [[Brownian Motion Properties]]
- [[Diffusion Equation Derivation from Random Walks]]

---

*이 노트는 확산방정식과 가우시안 분포의 수학적 연결고리를 보여주며, 양자역학과 고전 확률론 사이의 연결점을 이해하는 데 중요한 기초가 됩니다.*
