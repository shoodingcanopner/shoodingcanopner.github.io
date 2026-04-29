---
title: ED lecture note - Scattering and Diffraction
date: "2026-04-28"
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

[[ED lecture note - Electric Quadrupole Radiation]]

# 오늘의 핵심

- **지난 시간 마무리**: Oscillating spheroidal charge distribution의 quadrupole moment tensor와 복사 패턴 $\frac{dP}{d\Omega} \propto Q_0^2 \sin^2\theta\cos^2\theta$.
- **Ch. 10 Scattering의 세 가지 regime**: $\lambda \gg d$ (multipole), $\lambda \sim d$ (multipole fields), $\lambda \ll d$ (semi-geometrical).
- **Rayleigh Scattering**: 긴 파장에서 induced dipole이 산란파를 만듦. $\frac{d\sigma}{d\Omega} \propto k^4$ — 하늘이 파란 이유!
- **작은 유전구 산란**: $\frac{d\sigma}{d\Omega} \propto k^4 a^6 \left|\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right|^2 |\hat{\varepsilon}^* \cdot \hat{\varepsilon}_0|^2$
- **작은 완전 도체구 산란**: electric + magnetic dipole 기여가 함께 나타남. $\frac{d\sigma}{d\Omega} \propto k^4 a^6$.
- **완전 도체구의 편광**: $\theta = \frac{\pi}{2}$에서 parallel component가 사라지지 않음 (magnetic dipole 기여 때문에 유전구와 다름).
- **Collection of Scatterers**: structure factor $\mathcal{F}(\mathbf{q}) = \left|\sum_j e^{i\mathbf{q}\cdot\mathbf{x}_j}\right|^2$로 간섭 효과 정리.
- **1D Structure Factor**: $\mathcal{F}_{1D} = \left|\frac{\sin(N\mathbf{q}a/2)}{\sin(\mathbf{q}a/2)}\right|^2$ — Bragg 조건, long wavelength 극한.

# 필기 내용

## 지난 시간 마무리 - Electric Quadrupole Radiation: Oscillating Spheroidal Charge

Quadrupole moment tensor는 이렇게 생겼다:

$$
Q = \begin{pmatrix} -\frac{1}{2}Q_0 & 0 & 0 \\ 0 & -\frac{1}{2}Q_0 & 0 \\ 0 & 0 & Q_0 \end{pmatrix}
$$

> 왜 이렇게 생겼나? $\text{tr}(Q) = 0$ 으로 만들기 위한 이유!

Quadrupole moment vector: $\mathbf{Q} = \left(-\frac{1}{2}Q_0, -\frac{1}{2}Q_0, Q_0\right)$

이때 $|(\hat{n}\times\mathbf{Q})\times\hat{n}|^2 = |\mathbf{Q}|^2 - |\hat{n}\cdot\mathbf{Q}|^2$를 계산해야 한다.

$$
|\mathbf{Q}|^2 = \mathbf{Q}^*\cdot\mathbf{Q} = |Q_{11}|^2|\hat{n}_x|^2 + |Q_{22}|^2|\hat{n}_y|^2 + |Q_{33}|^2|\hat{n}_z|^2
$$

$$
= \frac{1}{4}Q_0^2\left(\sin^2\theta\cos^2\phi + \sin^2\theta\sin^2\phi\right) + Q_0^2\cos^2\theta
$$

$$
= \frac{1}{4}Q_0^2\sin^2\theta + Q_0^2\cos^2\theta
$$

$$
\hat{n}\cdot\mathbf{Q} = -\frac{1}{2}Q_0(\hat{n}_x^2 + \hat{n}_y^2) + Q_0\hat{n}_z^2 = -\frac{1}{2}Q_0\sin^2\theta + Q_0\cos^2\theta
$$

$$
|\hat{n}\cdot\mathbf{Q}|^2 = \frac{1}{4}Q_0^2\sin^4\theta - Q_0^2\sin^2\theta\cos^2\theta + Q_0^2\cos^4\theta
$$

따라서:

$$
|\mathbf{Q}|^2 + |\hat{n}\cdot\mathbf{Q}|^2 \text{ 를 계산하면 (필기에 부호 오류 주의)}
$$

$$
|\mathbf{Q}|^2 - |\hat{n}\cdot\mathbf{Q}|^2 = \frac{1}{4}Q_0^2\sin^2\theta(1-\sin^2\theta) + Q_0^2\cos^2\theta(1-\cos^2\theta) + Q_0^2\sin^2\theta\cos^2\theta
$$

$$
= \frac{9}{4}Q_0^2\sin^2\theta\cos^2\theta
$$

따라서:

$$
\frac{dP}{d\Omega} \propto Q_0^2\sin^2\theta\cos^2\theta
$$

복사 패턴이 $z$축을 중심으로 4엽 클로버 모양이 나온다.

---

## Chapter 10. Scattering and Diffraction

산란을 만드는 target과 입사파의 scale 차이에 따라 접근이 달라진다:

- $\lambda \gg d$: **simple description** in terms of lowest order induced multipoles
- $\lambda \sim d$: **systematic treatment** with multipole fields
- $\lambda \ll d$: **semi-geometrical approach**

---

## 1. Scattering at Long Wavelength

### A. 작은 dipole에 의한 Scattering

입사된 전자기장에 의해, multipole이 진동한다.
- Induced electric/magnetic multipole이 입사 파와 definite phase relationship을 가지며 oscillating한다.
- 이 oscillating induced multipole 자체가 radiation을 만든다.

**Description via plane monochromatic wave**

주변 medium의 $\mu$와 $\varepsilon$는 1이라고 두자. $\hat{\varepsilon}_0$가 입사파의 polarization 방향이고, $\hat{n}_0$가 입사파의 진행 방향 unit vector일 때, 전자기장은:

$$
\mathbf{E}_{inc} = \hat{\varepsilon}_0 E_0 \exp(ik\hat{n}_0\cdot\mathbf{x})
$$

$$
\mathbf{H}_{inc} = \hat{n}_0\times\mathbf{E}_{inc}/Z_0
$$

산란된 전자기파 ($\hat{\varepsilon}$: 산란파의 편광 방향, $\hat{n}$: 산란파의 진행 방향, $\mathbf{p}$: induced dipole moment, $\mathbf{m}$: magnetic dipole moment):

$$
\mathbf{E}_{sc} = \frac{1}{4\pi\varepsilon_0}k^2\frac{e^{ikr}}{r}\left[(\hat{n}\times\mathbf{p})\times\hat{n} - \hat{n}\times\frac{\mathbf{m}}{c}\right]
$$

$$
\mathbf{H}_{sc} = \hat{n}\times\mathbf{E}_{sc}/Z_0
$$

**Differential scattering cross-section** 정의:

$$
\frac{d\sigma}{d\Omega}(\hat{n},\hat{\varepsilon};\hat{n}_0,\hat{\varepsilon}_0) = \frac{r^2 \frac{1}{2Z_0}|\hat{\varepsilon}^*\cdot\mathbf{E}_{sc}|^2}{\frac{1}{2Z_0}|\hat{\varepsilon}_0^*\cdot\mathbf{E}_{inc}|^2}
$$

> $r^2$은 solid angle 때문에 그냥 붙은 것.
> 의미: The power radiated in the direction $\hat{n}$ with polarization $\hat{\varepsilon}$, per unit angle, per unit incident flux in the direction $\hat{n}_0$ with polarization $\hat{\varepsilon}_0$.

$\hat{\varepsilon}^*\cdot\mathbf{E}_{sc}$를 전개하면:

$$
\hat{\varepsilon}^*\cdot\mathbf{E}_{sc} = \frac{1}{4\pi\varepsilon_0}k^2\frac{e^{ikr}}{r}\left[\hat{\varepsilon}^*\cdot\mathbf{p} - (\hat{\varepsilon}^*\cdot\hat{n})(\hat{n}\cdot\mathbf{p}) + (\hat{n}\times\hat{\varepsilon}^*)\cdot\frac{\mathbf{m}}{c}\right]
$$

$\hat{\varepsilon}$는 산란파의 편광이므로 $\hat{\varepsilon}\perp\hat{n}$ → $(\hat{\varepsilon}^*\cdot\hat{n}) = 0$.

따라서 **(Jackson 10.4) Rayleigh Scattering 공식**:

$$
\boxed{\frac{d\sigma}{d\Omega} = \frac{k^4}{(4\pi\varepsilon_0)^2}\left|\hat{\varepsilon}^*\cdot\mathbf{p} + (\hat{n}\times\hat{\varepsilon}^*)\cdot\frac{\mathbf{m}}{c}\right|^2}
$$

---

### B. 작은 Dielectric Sphere의 산란

Target이 dielectric constant $\varepsilon_r$인 작은 구. Electric dipole moment는 이렇게 형성된다 (Jackson 10.5):

$$
\mathbf{p} = 4\pi\varepsilon_0\left(\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right)a^3\mathbf{E}_{inc}
$$

> Magnetic dipole moment는 없다.

이것을 $\frac{d\sigma}{d\Omega}$ 공식에 대입하면:

$$
\frac{d\sigma}{d\Omega} = k^4 a^6\left|\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right|^2|\hat{\varepsilon}^*\cdot\hat{\varepsilon}_0|^2
$$

**편광 평균**

Scattering plane은 $\hat{n}$과 $\hat{n}_0$가 올라가 있는 면이다. 보통 incident wave는 편광되어 있지 않기에, $|\hat{\varepsilon}^*\cdot\hat{\varepsilon}_0|^2$에서 $\hat{\varepsilon}_0$를 모든 편광에 대해 평균낸다.

Scattering plane을 $x$-$z$ 평면으로 잡는다. $\hat{n}_0$가 $z$축과 평행, $\hat{n}\cdot\hat{z} = \cos\theta$일 때:

$$
\hat{\varepsilon}_0 = (0, \cos\phi, \sin\phi)
$$

$\phi$에 대해 평균낸다는 것이 곧 모든 $\hat{\varepsilon}_0$ 방향에 평균낸다는 의미.

$$
\hat{\varepsilon}_\perp = (0, 1, 0), \quad \hat{\varepsilon}_\parallel = (-\sin\theta, 0, \cos\theta)
$$

$$
\langle|\hat{\varepsilon}_0\cdot\hat{\varepsilon}_\perp|^2\rangle_\phi = \langle|\cos\phi|^2\rangle_\phi = \frac{1}{2\pi}\int_{-\pi}^{\pi}\cos^2\phi\, d\phi = \frac{1}{2}
$$

$$
\langle|\hat{\varepsilon}_0\cdot\hat{\varepsilon}_\parallel|^2\rangle_\phi = \langle\sin^2\phi\cos^2\theta\rangle_\phi = \frac{1}{2}\cos^2\theta
$$

각 성분에 대한 differential scattering cross section:

$$
\frac{d\sigma_\parallel}{d\Omega} = k^4 a^6\left|\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right|^2\frac{\cos^2\theta}{2}
$$

$$
\frac{d\sigma_\perp}{d\Omega} = k^4 a^6\left|\frac{\varepsilon_r - 1}{\varepsilon_r + 2}\right|^2\frac{1}{2}
$$

> Perpendicular component는 angle dependence가 없다. $\theta = \frac{\pi}{2}$에서는 parallel component가 사라진다 → 순수 편광.

---

### 작은 완전 도체구의 산란 (Scattering by a Small Perfectly Conducting Sphere)

완전 도체구에서는 electric dipole moment와 magnetic dipole moment가 둘 다 유도된다 (Jackson 2.14, 5.11):

$$
\mathbf{p} = 4\pi\varepsilon_0 a^3\mathbf{E}_{inc}
$$

$$
\mathbf{m} = -2\pi a^3\mathbf{H}_{inc}
$$

이를 대입하면:

$$
\frac{d\sigma}{d\Omega} = \frac{k^4}{(4\pi\varepsilon_0)^2}\left|4\pi\varepsilon_0 a^3 \hat{\varepsilon}^*\cdot\mathbf{E}_{inc} + (\hat{n}\times\hat{\varepsilon}^*)\cdot\left(-\mathbf{H}_{inc}\frac{2\pi a^3}{c}\right)\right|^2
$$

$$
= k^4 a^6\left|\hat{\varepsilon}^*\cdot\hat{\varepsilon}_0 - \frac{1}{2}(\hat{n}\times\hat{\varepsilon}^*)\cdot(\hat{n}_0\times\hat{\varepsilon}_0)\right|^2
$$

> $\frac{1}{Z_0} = \frac{\varepsilon_0}{μ_0}$를 이용, $\hat{n}_0\times\mathbf{E}_{inc}/Z_0 = \mathbf{E}\hat{n}_0\times\hat{\varepsilon}_0$

각 편광 성분에 대해 $\phi$에 대해 평균낸다.

벡터 관계:

$$
\hat{\varepsilon}_0 = (0, \cos\phi, \sin\phi), \quad \hat{\varepsilon}_\parallel = (-\sin\theta, 0, \cos\theta), \quad \hat{\varepsilon}_\perp = (0, 1, 0)
$$

$$
\hat{n}_0 = (1, 0, 0), \quad \hat{n} = (\cos\theta, \sin\theta, 0), \quad \hat{n}_0\times\hat{\varepsilon}_0 = (0, -\sin\phi, \cos\phi)
$$

**Parallel component** $\hat{\varepsilon}_\parallel$에 대해:

$$
\hat{\varepsilon}_\parallel^*\cdot\hat{\varepsilon}_0 - \frac{1}{2}(\hat{n}\times\hat{\varepsilon}_\parallel^*)\cdot(\hat{n}_0\times\hat{\varepsilon}_0) = \sin\phi\cos\theta - \frac{1}{2}\sin\theta
$$

$$
\left\langle\left|\hat{\varepsilon}_\parallel^*\cdot\hat{\varepsilon}_0 - \frac{1}{2}(\hat{n}\times\hat{\varepsilon}_\parallel^*)\cdot(\hat{n}_0\times\hat{\varepsilon}_0)\right|^2\right\rangle = \frac{1}{2}\left(\cos\theta - \frac{1}{2}\right)^2
$$

$$
\frac{d\sigma_\parallel}{d\Omega} = \frac{k^4 a^6}{2}\left|\cos\theta - \frac{1}{2}\right|^2
$$

**Perpendicular component** $\hat{\varepsilon}_\perp$에 대해:

$$
\hat{\varepsilon}_\perp^*\cdot\hat{\varepsilon}_0 - \frac{1}{2}(\hat{n}\times\hat{\varepsilon}_\perp^*)\cdot(\hat{n}_0\times\hat{\varepsilon}_0) = \cos\phi - \frac{1}{2}(-\sin\theta, 0, \cos\theta)\cdot(0, \sin\phi, \cos\phi)
$$

$$
= \cos\phi - \frac{1}{2}\cos\theta\cos\phi
$$

$$
\left\langle\left|\cdots\right|^2\right\rangle = \frac{1}{2}\left(1 - \frac{1}{2}\cos\theta\right)^2
$$

$$
\frac{d\sigma_\perp}{d\Omega} = \frac{k^4 a^6}{2}\left(1 - \frac{1}{2}\cos\theta\right)^2
$$

**편광도 (Polarization)**

$\theta$에 따른 편광도는 정의할 수 있다:

$$
\Pi(\theta) = \frac{\frac{d\sigma_\perp}{d\Omega} - \frac{d\sigma_\parallel}{d\Omega}}{\frac{d\sigma_\perp}{d\Omega} + \frac{d\sigma_\parallel}{d\Omega}}
$$

이 경우:

$$
\Pi(\theta) = \frac{3\sin^2\theta}{5(1 + \cos^2\theta) - 8\cos\theta}
$$

> Electric dipole은 $\hat{\varepsilon}^*\cdot\hat{\varepsilon}_0$ 항에서 알 수 있듯 산란파에 편광이 직접 드러난다.
> 그러나 magnetization에서는 $\hat{n}\times\hat{\varepsilon}^*$ 항에서 알 수 있듯, 편광 특성이 한번 꼬아서(?) 나타난다.

---

## 2. Collection of Scatterers

일정 간격으로 떨어져 있는 여러 개의 산란자가 있다. 첫 번째 입자로부터 $j$번째 입자로 향하는 번위 벡터를 $\mathbf{x}_j$라고 두자.

입사파에 대한 경로 차이: $\Delta_1 = |x_j|\sin\phi = \mathbf{x}_j\cdot\hat{n}_0$

산란파에 대한 경로 차이: $\Delta_2 = |x_j|\sin\theta = -\mathbf{x}_j\cdot\hat{n}$ (부호 주의!)

총 위상차: $k(\Delta_1 + \Delta_2) = k\mathbf{x}_j\cdot(\hat{n}_0 - \hat{n})$

$\mathbf{q} = k(\hat{n}_0 - \hat{n})$으로 정의하면, 위상차 = $\mathbf{q}\cdot\mathbf{x}_j$

모든 산란자에 대한 differential cross section:

$$
\frac{d\sigma}{d\Omega} = \frac{k^4}{(4\pi\varepsilon_0)^2}\left|\sum_j\left[\hat{\varepsilon}^*\cdot\mathbf{p}_j + (\hat{n}\times\hat{\varepsilon}^*)\cdot\frac{\mathbf{m}_j}{c}\right]e^{i\mathbf{q}\cdot\mathbf{x}_j}\right|^2
$$

모든 입자에서 $\mathbf{p}$와 $\mathbf{m}$이 다 똑같다면?

$$
\frac{d\sigma}{d\Omega} = \frac{k^4}{(4\pi\varepsilon_0)^2}\left|\hat{\varepsilon}^*\cdot\mathbf{p} + (\hat{n}\times\hat{\varepsilon}^*)\cdot\frac{\mathbf{m}}{c}\right|^2\left|\sum_j e^{i\mathbf{q}\cdot\mathbf{x}_j}\right|^2
$$

여기서 오른쪽의 summation term을 **Structure Factor**라고 부른다:

$$
\mathcal{F}(\mathbf{q}) = \left|\sum_j e^{i\mathbf{q}\cdot\mathbf{x}_j}\right|^2
$$

### 1D Structure Factor

$$
\mathcal{F}_{1D}(\mathbf{q}) = \left|\sum_{n=0}^{N-1}e^{i\mathbf{q}na}\right|^2 = \left|\sum_{n=0}^{N-1}(e^{i\mathbf{q}a})^n\right|^2 = \left|\frac{1 - e^{i\mathbf{q}Na}}{1 - e^{i\mathbf{q}a}}\right|^2
$$

$$
= \left|\frac{\sin\left(\frac{N\mathbf{q}a}{2}\right)}{\sin\left(\frac{\mathbf{q}a}{2}\right)}\right|^2
$$

> [!question] 등비급수에서 마지막 sin 꼴로의 변환은 어떻게?

### 3D Structure Factor

$$
\mathcal{F}_{3D}(\mathbf{q}) = \left|\frac{\sin(N_x \mathbf{q}a/2)}{\sin(\mathbf{q}a/2)}\right|^2 \left|\frac{\sin(N_y \mathbf{q}b/2)}{\sin(\mathbf{q}b/2)}\right|^2 \left|\frac{\sin(N_z \mathbf{q}c/2)}{\sin(\mathbf{q}c/2)}\right|^2
$$

총 산란자 개수: $N = N_x N_y N_z$

### Short Wavelength Case: Bragg Condition

$$
\mathbf{q}a = 2\pi m \quad (m \in \mathbb{Z})
$$

### Long Wavelength Case

$\sin\left(\frac{\mathbf{q}a}{2}\right) \simeq \frac{\mathbf{q}a}{2}$로 근사:

$$
\tilde{\mathcal{F}}_{long}(\mathbf{q}) = N^2\frac{\sin^2(N_x\mathbf{q}a/2)}{(N_x\mathbf{q}a/2)^2}\cdot\frac{\sin^2(N_y\mathbf{q}a/2)}{(N_y\mathbf{q}a/2)^2}\cdot\frac{\sin^2(N_z\mathbf{q}a/2)}{(N_z\mathbf{q}a/2)^2}
$$

$$
\mathcal{F}(\mathbf{q}) \propto N^2\left(\frac{\sin X}{X}\right)^2, \quad X = \frac{N_z\mathbf{q}a_z}{2}
$$

- $\frac{N\mathbf{q}a}{2} \leq \pi \Rightarrow \mathbf{q} \leq \frac{2\pi}{Na}$
- $\mathbf{q}\theta \sim \frac{2\pi}{\lambda}\theta \leq \frac{2\pi}{Na}$ → $\theta \leq \frac{\lambda}{Na}$ → $\theta \sim \frac{\lambda}{L}$ (L = 전체 크기)

그래프: 중기 장인 강한 peak → 분모가 0이 될 때, 근처 작은 곁봉우리 → 분자가 0이 될 때.

**왜 peak 세기가 $\propto N^2$이라고 하는 것인가?** 모든 산란자의 위상이 맞을 때 amplitude가 $N$배가 되므로 intensity = amplitude² → $N^2$.

# 궁금한 내용

> [!question] Geometric series → sin 꼴 변환
> $\left|\frac{1 - e^{iN\mathbf{q}a}}{1 - e^{i\mathbf{q}a}}\right|^2$에서 $\left|\frac{\sin(N\mathbf{q}a/2)}{\sin(\mathbf{q}a/2)}\right|^2$로의 변환 과정은?

> [!question] 완전 도체구에서 $\mathbf{m} = -2\pi a^3 \mathbf{H}_{inc}$의 유도
> Jackson section 5.11에서 이 결과가 나온다고 했는데, 경계 조건에서 어떻게 유도되는가?

> [!question] Polarization $\Pi(\theta)$ 공식 유도
> $\Pi(\theta) = \frac{3\sin^2\theta}{5(1+\cos^2\theta) - 8\cos\theta}$가 완전 도체구의 두 cross section에서 어떻게 나오는지 대수적으로 확인해보기.

# AI의 보충 설명

# 연관 학습 노트

- [[ED lecture note - Electric Quadrupole Radiation]]
- [[ED lecture note - Electric Dipole Radiation]]

# References

Jackson, Classical Electrodynamics, Chapter 10 (식 10.4, 10.5)
Jackson, Chapter 2.14 (완전 도체구 electric dipole)
Jackson, Chapter 5.11 (완전 도체구 magnetic dipole)

# 다음 강의

# 필기 원본

![[ED_10thweek_1.pdf]]
