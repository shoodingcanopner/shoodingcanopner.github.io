---
title: ED HW3 풀이
date: "2026-04-18"
subject: physics
tags:
  - study
  - homework
  - electrodynamics
class: study_homework
---

> [!info] 과제 풀이
> [[Electrodynamics 그 모든 것]] 과목의 HW3 풀이 정리
> Due: 2026-05-20 6:00 PM
> Jackson Chapter 9 (3rd edition) 관련 문제

---

# Problem 1. Radiation from a Center-fed Linear Antenna (20점)

Coaxial center-fed antenna의 전류밀도:

$$
\vec{J}(\vec{x}) = I \sin\!\left(\frac{kd}{2} - k|z|\right) \delta(x)\,\delta(y)\,\hat{z}, \quad |z| < d/2
$$

## (a) Radiation zone에서의 vector potential (3점)

Radiation zone에서 vector potential의 일반 공식:

$$
\vec{A}(\vec{x}) = \frac{\mu_0}{4\pi} \frac{e^{ikr}}{r} \int \vec{J}(\vec{x}\,') \, e^{-ik\hat{n}\cdot\vec{x}\,'} \, d^3x'
$$

전류가 z축 위에만 존재하므로 $\hat{n}\cdot\vec{x}' = z'\cos\theta$이고, 적분은:

$$
\int_{-d/2}^{d/2} I\sin\!\left(\frac{kd}{2} - k|z'|\right) e^{-ikz'\cos\theta}\,dz'
$$

피적분 함수에서 $\sin(\frac{kd}{2} - k|z'|)$는 $z'$에 대해 짝함수이고, $e^{-ikz'\cos\theta}$의 실수 부분 $\cos(kz'\cos\theta)$도 짝함수, 허수 부분 $-\sin(kz'\cos\theta)$는 홀함수이다. 따라서 허수 부분은 적분에서 사라지고:

$$
= 2I \int_0^{d/2} \sin\!\left(\frac{kd}{2} - kz'\right) \cos(kz'\cos\theta)\,dz'
$$

Wolfram Alpha로 검산한 적분 공식을 적용한다:

$$
\int_0^{a/b} \sin(a - bz)\cos(cz)\,dz = \frac{b[\cos(ac/b) - \cos(a)]}{b^2 - c^2}
$$

여기서 $a = kd/2$, $b = k$, $c = k\cos\theta$를 대입하면:

$$
= \frac{k\!\left[\cos\!\left(\frac{kd}{2}\cos\theta\right) - \cos\!\left(\frac{kd}{2}\right)\right]}{k^2 - k^2\cos^2\theta} = \frac{\cos\!\left(\frac{kd}{2}\cos\theta\right) - \cos\!\left(\frac{kd}{2}\right)}{k\sin^2\theta}
$$

따라서:

$$
\boxed{\vec{A}(\vec{x}) = \frac{\mu_0 I}{2\pi k} \frac{e^{ikr}}{r} \frac{\cos\!\left(\frac{kd}{2}\cos\theta\right) - \cos\!\left(\frac{kd}{2}\right)}{\sin^2\theta}\,\hat{z}}
$$

## (b) Radiation zone에서의 fields (3점)

Radiation zone에서 자기장과 전기장:

$$
\vec{H} = \frac{ik}{\mu_0}\,\hat{n} \times \vec{A}, \quad \vec{E} = Z_0\,\vec{H} \times \hat{n}
$$

$\hat{n} \times \hat{z} = -\sin\theta\,\hat{\phi}$를 이용하면:

$$
\boxed{H_\phi = -\frac{iI}{2\pi} \frac{e^{ikr}}{r} \frac{\cos\!\left(\frac{kd}{2}\cos\theta\right) - \cos\!\left(\frac{kd}{2}\right)}{\sin\theta}}
$$

$$
\boxed{E_\theta = Z_0\,H_\phi}
$$

## (c) Angular power distribution

시간 평균 Poynting vector로부터:

$$
\frac{dP}{d\Omega} = \frac{r^2}{2}\,\text{Re}(\vec{E}\times\vec{H}^*)\cdot\hat{r} = \frac{Z_0}{2}|rH_\phi|^2
$$

대입하면:

$$
\boxed{\frac{dP}{d\Omega} = \frac{Z_0 I^2}{8\pi^2} \frac{\left[\cos\!\left(\frac{kd}{2}\cos\theta\right) - \cos\!\left(\frac{kd}{2}\right)\right]^2}{\sin^2\theta}}
$$

## (d) $kd \ll 1$ 극한 (Hertzian dipole limit)

$kd \ll 1$일 때 코사인을 테일러 전개:

$$
\cos\!\left(\frac{kd}{2}\cos\theta\right) \approx 1 - \frac{1}{2}\left(\frac{kd}{2}\right)^2\!\cos^2\theta
$$

$$
\cos\!\left(\frac{kd}{2}\right) \approx 1 - \frac{1}{2}\left(\frac{kd}{2}\right)^2
$$

차이를 구하면:

$$
\cos\!\left(\frac{kd}{2}\cos\theta\right) - \cos\!\left(\frac{kd}{2}\right) \approx \frac{(kd)^2}{8}\sin^2\theta
$$

대입하면:

$$
\frac{dP}{d\Omega} = \frac{Z_0 I^2}{8\pi^2} \cdot \frac{(kd)^4\sin^4\theta}{64\sin^2\theta}
$$

$$
\boxed{\frac{dP}{d\Omega} = \frac{Z_0 I^2 (kd)^2}{512\pi^2}\,(kd)^2\sin^2\theta}
$$

> [!tip] 물리적 해석
> $kd \ll 1$ 극한에서 $\sin^2\theta$ 의존성은 **전기 쌍극자 복사 패턴**과 정확히 동일하다. 안테나 길이가 파장보다 훨씬 짧으면 Hertzian dipole처럼 행동함을 의미한다.

## (e) & (f) $kd = \pi$, $kd = 2\pi$의 angular distribution

**$kd = \pi$ (half-wave antenna, $d = \lambda/2$):**

$$
\frac{dP}{d\Omega} \propto \frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin^2\theta}
$$

- $\theta = \pi/2$ (적도) 방향에서 최대
- z축 ($\theta = 0, \pi$) 방향에서 영 → 깔끔한 도넛 형태

**$kd = 2\pi$ (full-wave antenna, $d = \lambda$):**

$$
\frac{dP}{d\Omega} \propto \frac{\left[\cos(\pi\cos\theta) + 1\right]^2}{\sin^2\theta}
$$

- 역시 적도 방향에서 최대이나, 빔이 더 좁음 (더 높은 directivity)
- z축 방향에서 영

> [!note] Plot
> 두 경우의 polar radiation pattern은 대화 내에서 시각화하였음.

---

# Problem 2. Angular Distribution of the Multipole Radiation (20점)

> [!warning] 풀이 예정
> 다음 세션에서 풀이할 것.

---

# Problem 3. Jackson 9.1 (20점)

> [!warning] 풀이 예정
> 문제 내용 확인 후 풀이할 것.

---

# Problem 4. Radiating Quadrupole — Jackson 9.2 (20점)

> [!warning] 풀이 예정
> 문제 내용 확인 후 풀이할 것.

---

# Problem 5. Radiating Two Fixed Dipoles — Jackson 9.15 (20점)

> [!warning] 풀이 예정
> 문제 내용 확인 후 풀이할 것.
