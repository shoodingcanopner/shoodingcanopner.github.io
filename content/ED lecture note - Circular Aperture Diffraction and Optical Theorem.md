---
title: ED lecture note - Circular Aperture Diffraction and Optical Theorem
date: "2026-05-06"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Diffraction Theory]]

# 오늘의 핵심

- 원형 구멍(circular aperture)에 의한 Fraunhofer 회절을 scalar diffraction theory로 분석
- 회절 패턴은 1st order Bessel function $J_1$으로 기술되며, Airy disk 패턴을 만들어냄
- 구멍이 클수록 회절 무늬가 좁아짐 (분해능 향상)
- Optical theorem: 산란 단면적과 forward scattering amplitude의 허수부를 연결

# 필기 내용

## Chapter 10.9 Diffraction by Circular Aperture

**좌표 설정:**
- 소스의 위치: $\mathbf{x}'$
- 관찰자 위치: $\mathbf{x}$
- 소스로부터 관찰자까지의 벡터: $\mathbf{R} = \mathbf{x} - \mathbf{x}'$
- 회절파의 파수벡터: $\mathbf{k}$, 방향이 $\mathbf{x}$와 같음
- 관찰방향의 unit vector: $\hat{n} = \dfrac{\mathbf{x}}{|\mathbf{x}|} = \dfrac{\mathbf{x}}{x} = \dfrac{\mathbf{x}}{r}$

**원거리 근사 (소스 크기에 비해 관찰자가 멀리 있을 때, $r \gg d$):**

![[Pasted image 20260506183919.png]]
$$
kR = k|\mathbf{x} - \mathbf{x}'| = k\left[x^2 + x'^2 - 2\mathbf{x}\cdot\mathbf{x}'\right]^{1/2}
= kx\left[1 + \left(\frac{x'}{x}\right)^2 - 2\frac{\mathbf{x}\cdot\mathbf{x}'}{x^2}\right]^{1/2}
$$

$$
= kx\left[1 + \frac{1}{2}\left(\frac{x'}{x}\right)^2 - \frac{\mathbf{x}\cdot\mathbf{x}'}{x^2} + \cdots\right]
= kx - k\frac{\mathbf{x}\cdot\mathbf{x}'}{x} + \frac{k}{2x}(x'^2 + \cdots)
$$

$$
= kr - k\hat{n}\cdot\mathbf{x}' + \frac{k}{2r}(r'^2 + \cdots)
$$

**Fraunhofer Diffraction 근사:** $kR \approx kr - k\hat{n}\cdot\mathbf{x}'$

이를 Jackson (10.79)에 적용하면:

$$
\psi(\mathbf{x}) = -\frac{e^{ikr}}{4\pi r}\int_{S_1} e^{-i\mathbf{k}\cdot\mathbf{x}'}\left[\hat{n}\cdot\nabla'\psi(\mathbf{x}') + ik\hat{n}\psi(\mathbf{x}')\right]da' \quad \text{(Jackson 10.108)}
$$

> [!question] 질문: Vector diffraction이랑 scalar diffraction의 차이가 뭐지?

---

## Scalar Diffraction Theory for Circular Aperture

**구멍에서 입사파 조건.** 입사파의 파수가 $k_0$일 때:

$$
\psi(\mathbf{x}) = E_0 e^{i\mathbf{k}_0\cdot\mathbf{x}}, \quad \nabla\psi(\mathbf{x}) = i\mathbf{k}_0\psi(\mathbf{x}), \quad \nabla'\psi(\mathbf{x}') = i\mathbf{k}_0\psi(\mathbf{x}')
$$

Jackson (10.108)에서 피적분항 중 $[\,]$ 내부 항에 해당되는 부분:

$$
(i\mathbf{k}_0 + i\mathbf{k})\cdot\hat{n}\,\psi(\mathbf{x}') = i(\mathbf{k}_0 + \mathbf{k})\cdot\hat{n}\,E_0\,e^{i\mathbf{k}_0\cdot\mathbf{x}'}
$$

![[Pasted image 20260506183948.png]]

**좌표계 설정:**
- 구멍이 $z$-$y$ plane에 원점을 중심, $a$ 반지름으로 뚫려있음
- plane of incident wave를 $x$-$z$ plane으로 고정. 임의의 각도 $\alpha$에 대해 입사파의 wave number vector:

$$
\mathbf{k}_0 = k(\hat{x}\sin\alpha + \hat{z}\cos\alpha)
$$

- 대신 산란파에 만든 자유도를 줌. 임의각 $\phi$, $\theta$에 대해:

$$
\mathbf{k} = k(\hat{x}\sin\theta\cos\phi + \hat{y}\sin\theta\sin\phi + \hat{z}\cos\theta)
$$

- 관찰방향의 unit vector $\hat{n}$은 $\mathbf{k}$의 unit vector:

$$
\hat{n} = \hat{k} = \hat{x}\sin\theta\cos\phi + \hat{y}\sin\theta\sin\phi + \hat{z}\cos\theta
$$

$$
i(\mathbf{k}_0 + \mathbf{k})\cdot\hat{n} = ik(\cos\alpha + \cos\theta)
$$

**적분 변수 설정:**

소스 $\mathbf{x}'$는 $x$-$y$ plane 위 구멍에 포함되는 모든 점:

$$
\mathbf{x}' = \hat{x}\,\rho\cos\beta + \hat{y}\,\rho\sin\beta
$$

$$
\mathbf{k}_0\cdot\mathbf{x}' = k\rho\sin\alpha\cos\beta
$$

$$
\mathbf{k}\cdot\mathbf{x}' = k\rho(\sin\theta\cos\phi\cos\beta + \sin\theta\sin\phi\sin\beta) = k\rho\sin\theta\cos(\phi-\beta)
$$

**계산할 적분:**

$$
\psi(\mathbf{x}) = -\frac{e^{ikr}}{4\pi r}\cdot i(\mathbf{k}_0+\mathbf{k})\cdot\hat{n}\,E_0\int_{S_1}e^{i(\mathbf{k}_0 - \mathbf{k})\cdot\mathbf{x}'}da'
$$

지금까지 구한 식들을 집어 넣으면:

$$
\psi(\mathbf{x}) = ik\left(-\frac{e^{ikr}}{4\pi r}\right)E_0(\cos\alpha + \cos\theta)\int_0^a\rho\,d\rho\int_0^{2\pi}d\beta\;e^{ikp[\sin\alpha\cos\beta - \sin\theta\cos(\phi-\beta)]}
$$

**기하학적 트릭으로 $\beta$ 적분 수행:**
![[Pasted image 20260506184006.png]]
![[Pasted image 20260506184021.png]]

새 벡터를 정의:

$$
\vec{\xi} = \hat{y}\sin\theta - \hat{x}\sin\alpha, \quad |\vec{\xi}| = \sqrt{\sin^2\theta + \sin^2\alpha - 2\sin\theta\sin\alpha\cos\phi}
$$

그림에서 보이는 대로:

$$
\sin\alpha\cos\beta - \sin\theta\cos(\phi-\beta) = |\xi|\cos\beta'
$$

따라서 $\beta$ 적분:

$$
\int_0^{2\pi}d\beta\;e^{-ikp[\sin\alpha\cos\beta - \sin\theta\cos(\phi-\beta)]}
= \int_0^{2\pi}d\beta'\;e^{ik\rho|\xi|\cos\beta'} = 2\pi J_0(k\rho\xi)
$$

**$\rho$ 적분 (베셀 함수 항등식 활용):**

$$
\int_0^a\rho\,J_0(k\rho\xi)\,d\rho = \frac{1}{k\xi}J_1(ka\xi)
$$

**최종 결과:**

$$
\boxed{\psi(\mathbf{x}) = -(ik)\frac{e^{ikr}}{r}\left(\frac{\cos\alpha + \cos\theta}{2}\right)a^2 E_0\frac{J_1(ka\xi)}{ka\xi}}
$$

---

## 산란 단면적과 회절 패턴

$$
\frac{dP}{d\Omega} = P_i\frac{(ka)^2}{4\pi}\cos\alpha\left(\cos^2\theta + \cos^2\phi\sin^2\theta\right)\left|\frac{2J_1(ka\xi)}{ka\xi}\right|^2
$$

여기서:

$$
P_i = \left(\frac{E_0^2}{2Z_0}\right)\pi a^2\cos\alpha
$$

![[Pasted image 20260506184047.png]]

**Airy disk 패턴:**

1st order Bessel function $J_1(x)$에 대해, $x = 3.8317$일 때 처음으로 $J_1(x) = 0$이 된다.

따라서 $ka\xi = 3.8317$, 즉:

$$
\xi = \frac{\lambda}{2\pi a}\cdot 3.8317
$$

일 때 첫번째 어두운 회절 무늬 발생.

$x$-$y$ plane에 직교하는 방향으로 빛이 오면 ($\alpha = 0$), $\vec{\xi} = \hat{y}\sin\theta$이므로:

$$
\xi = \sin\theta = \frac{\lambda}{2\pi a}\cdot 3.8317 \quad \text{일 때 첫번째 어두운 회절 무늬 발생}
$$

**물리적 의미:**
- 구멍이 커질수록 ($a$ 클수록) $\sin\theta$가 작을 때 어두운 무늬 발생 → $dP/d\Omega$의 폭이 좁아짐 (더 집속된 빔)
- 반대로 구멍이 좁을수록 회절이 많이 되어 밝은 회절 무늬의 폭이 넓어짐

---

## Chapter 10.11 Optical Theorem

**Optical theorem:** 산란체의 total scattering cross section과 forward scattering amplitude의 허수부를 연결하는 정리.

$$
\sigma_t = \frac{\text{total power}}{\text{incident power}} = \frac{4\pi}{k}\,\text{Im}\left[\hat{\varepsilon}^*\cdot\vec{f}(\mathbf{k}=\mathbf{k}_0)\right]
$$

정의:

$$
\vec{f}(\mathbf{k},\mathbf{k}_0) = \frac{\vec{F}(\mathbf{k},\mathbf{k}_0)}{E_0}
$$

$$
\hat{\varepsilon}^*\cdot\vec{F}(\mathbf{k},\mathbf{k}_0) \sim \text{forward scattering amplitude}
$$

> [!question] 이게 지금 무슨 내용이지? $\vec{f}(\mathbf{k},\mathbf{k}_0)$하고 $\vec{F}(\mathbf{k},\mathbf{k}_0)$는 뭐지?

# 궁금한 내용

1. Vector diffraction이랑 scalar diffraction의 차이가 뭐지?
2. Optical theorem에서 $\vec{f}(\mathbf{k},\mathbf{k}_0)$와 $\vec{F}(\mathbf{k},\mathbf{k}_0)$의 정확한 정의와 물리적 의미는?
3. $\beta'$로의 치환 트릭: $\sin\alpha\cos\beta - \sin\theta\cos(\phi-\beta) = |\xi|\cos\beta'$ 이 성립하는 이유를 엄밀히 확인하기

# AI의 보충 설명


# 연관 학습 노트

- [[ED lecture note - Diffraction Theory]]
- [[ED lecture note - Scattering and Diffraction]]

# References

Jackson Classical Electrodynamics, Chapter 10.9, 10.11

# 다음 강의

[[ED lecture note - Special Relativity and Lorentz Transform]]
# 필기 원본

![[ED_11thweek_2.pdf]]
