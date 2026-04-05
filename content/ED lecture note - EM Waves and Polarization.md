---
title: ED lecture note - EM Waves and Polarization
date: "2026-03-23"
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

[[ED lecture note - Symmetry and EM Waves]]

# 오늘의 핵심

- 자유 공간에서 맥스웰 방정식 → Helmholtz 방정식 → 평면파 해
- 전자기파는 **transverse wave**: $\mathbf{E}_0 \cdot \hat{n} = \mathbf{B}_0 \cdot \hat{n} = 0$
- $\hat{n}$이 복소수이면 amplitude가 위치에 따라 지수적으로 변함 (evanescent wave)
- Time-averaged Poynting vector: $\langle \mathbf{S} \rangle_t = \frac{1}{2}\sqrt{\frac{\varepsilon}{\mu}}|\mathbf{E}_0|^2 \hat{n}$
- 편광(Polarization)은 $\mathbf{E}_0$의 두 횡방향 성분의 **위상 차이**로 결정됨
$$
\boxed{\sqrt{\mu\varepsilon}\,\hat{n}\times\mathbf{E}_0 = \mathbf{B}_0}
$$
자기장은 전자기파 전파속도만큼 전기장보다 약하다. 

# 필기 내용

## 1. Helmholtz 방정식과 평면파 해

지난 시간, 자유전하와 전류가 없는 곳에서 맥스웰 방정식을 풀어 그 결과 **Helmholtz equation**을 얻었다.

$$
\left[\nabla^2 + \mu\varepsilon\omega^2\right]\begin{pmatrix}\mathbf{E} \\ \mathbf{B}\end{pmatrix} = 0
$$

이때 속도(파동 전파 속도)와 굴절률을 정의한다. 전파 속도가 진공에서 빛의 속도에 비해 $n$배 느릴 수록 굴절률이 커진다.

$$
v = \frac{1}{\sqrt{\mu\varepsilon}}, \qquad n = \frac{c}{v} = c\sqrt{\mu\varepsilon} = \sqrt{\frac{\mu\varepsilon}{\mu_0\varepsilon_0}}
$$

3차원 공간에서 Helmholtz equation의 solution은 **plane wave**이며, amplitude가 같은 공간적 지점들이 periodic한 **평면**을 이룬다.

$$
\mathbf{E}(\mathbf{x}, t) = \mathbf{E}_0 \exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t)
$$

$$
\mathbf{B}(\mathbf{x}, t) = \mathbf{B}_0 \exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t)
$$

- 파면에 대한 법선 벡터이자 진행 방향 벡터: $\hat{n}$
- 아직은 $\mathbf{E}_0$와 $\mathbf{B}_0$, 그리고 $\mathbf{k}$ 사이에는 아무런 관계가 없다.
- 맥스웰 방정식을 대입하면 세 사이의 관계가 생긴다.

---

### (1) wave vector $\mathbf{k} = k\hat{n}$으로 둘 때

Helmholtz equation을 풀면, $\mathbf{E}_0$와 $\mathbf{B}_0$는 시공간에 상수이기 때문에:

$$
(\nabla^2 + \mu\varepsilon\omega^2)\mathbf{E} = \mathbf{E}_0\left[(i\mathbf{k})\cdot(i\mathbf{k}) + \mu\varepsilon\omega^2\right]\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t) = 0
$$

$$
\therefore\quad k^2 \hat{n}\cdot\hat{n} = \mu\varepsilon\omega^2 = \frac{\omega^2}{v^2}
$$

이것이 성립하기 위해 $\hat{n}\cdot\hat{n} = 1$.

$\hat{n}$이 복소수이면 사정이 복잡해진다. 복소 평면에서 unit vector는 아니기 때문에, $\hat{n} = \mathbf{n}_R + i\mathbf{n}_I$로 분리하면:

$$
\hat{n}\cdot\hat{n} = (\mathbf{n}_R + i\mathbf{n}_I)\cdot(\mathbf{n}_R + i\mathbf{n}_I) = |\mathbf{n}_R|^2 - |\mathbf{n}_I|^2 + 2i(\mathbf{n}_R\cdot\mathbf{n}_I) = 1
$$

$$
\begin{cases} |\mathbf{n}_R|^2 - |\mathbf{n}_I|^2 = 1 \\ \mathbf{n}_R\cdot\mathbf{n}_I = 0 \end{cases}
\qquad \Leftarrow \hat{n}\cdot\hat{n}^* = 1 \text{ 이라는 조건이 아닌 것에 주의}
$$

따라서 $\mathbf{n}_R$과 $\mathbf{n}_I$는 (x-y 평면 위에 있다면) **hyperbolic function**의 관계다.

$$
\hat{n} = \hat{x}\cosh(\theta) + i\hat{y}\sinh(\theta)
$$

이 경우 $i\mathbf{k}\cdot\mathbf{x}$ 항에서 $-k\mathbf{n}_I\cdot\mathbf{x}$가 나와, 위치에 따라 amplitude를 **exponential하게 바꾸는 항**으로 작용한다. (evanescent wave)

---

### (2) $\nabla\cdot\mathbf{E} = \nabla\cdot\mathbf{B} = 0$ 맥스웰 방정식 적용

$$
\nabla\cdot(\mathbf{E}_0\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t)) = (\nabla\cdot\mathbf{E}_0)\exp(\cdots) + \mathbf{E}_0\cdot[\nabla\exp(ik\hat{n}\cdot\mathbf{x} - i\omega t)]
$$

$$
= \mathbf{E}_0\cdot(ik\hat{n})\exp(ik\hat{n}\cdot\mathbf{x} - i\omega t) = 0
$$

$$
\therefore\quad \mathbf{E}_0\cdot\hat{n} = \mathbf{B}_0\cdot\hat{n} = 0
$$

$\mathbf{E}$와 $\mathbf{B}$는 파동 진행 방향과 **직교하는 방향**. 따라서 전자기파를 **transverse wave**라고 부른다.

---

### (3) $\nabla\times\mathbf{E} = -\frac{\partial\mathbf{B}}{\partial t}$ 적용

vector identity: $\nabla\times(\psi\mathbf{a}) = (\nabla\psi)\times\mathbf{a} + \psi(\nabla\times\mathbf{a})$

이걸 정리하면:

$$
\boxed{\sqrt{\mu\varepsilon}\,\hat{n}\times\mathbf{E}_0 = \mathbf{B}_0}
$$

여기서 전기·자기장과 파동진행 방향 사이의 관계와, 전자기장의 세기 비율을 가늠할 수 있다.
- $\mathbf{E}_0\times\mathbf{B}_0$는 $\hat{n}$에 **평행**하다.
- 자기장은 빛의 속도만큼 전기장보다 약하다.
  - ※ 빛은 전자기 상호작용이니까 전기장 세기와 자기장 세기 사이 관계성이 있구나... 생각해 보니 당연하군.

---

## 2. 빛의 Energy Flux

지난 시간 Poynting vector $\mathbf{S} = \mathbf{E}\times\mathbf{H}$를 배웠다.

Time-averaged Poynting vector는:

$$
\langle\mathbf{S}\rangle_t = \frac{1}{2}\mathbf{E}\times\mathbf{H}^*
$$

> [!tip] 왜 1/2인가?
> complex conjugation에 주의. $\cos^2(\phi - \omega t)$를 시간 평균 내면 $\frac{1}{2}$이 나온다.

간단하게, 실수 벡터 $\mathbf{E}_0$와 $\mathbf{H}_0$에 대해:

$$
\mathbf{E} = \mathbf{E}_0\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t), \quad \mathbf{H} = \mathbf{H}_0\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t)
$$

각 장의 real part만 뽑아 Poynting vector 구하면:

$$
\text{Re}\{\mathbf{E}\}\times\text{Re}\{\mathbf{H}\} = \mathbf{E}_0\times\mathbf{H}_0\cdot\cos^2(\phi - \omega t)
$$

$\cos^2(\phi - \omega t)$를 시간 평균하면 $\frac{1}{2}$이 나온다.

전자기파에서 $\mathbf{H}_0 = \sqrt{\frac{\varepsilon}{\mu}}\mathbf{E}_0$임을 이용하면, 단위 면적, 단위 시간당 전자기파에 의한 에너지 flow는:

$$
\langle\mathbf{S}\rangle_t = \frac{1}{2}\sqrt{\frac{\varepsilon}{\mu}}|\mathbf{E}_0|^2\,\hat{n}
$$

---

### Time-averaged Energy Density

지난 시간 field energy density가 $\frac{1}{2}\{\mathbf{E}\cdot\mathbf{D} + \mathbf{B}\cdot\mathbf{H}\}$라는 걸 배웠다.

지금 field들이 complex number이므로, dot product에서 complex conjugation에 주의하여:

$$
\mathbf{E}\cdot\mathbf{D} \to \varepsilon\,\mathbf{E}\cdot\mathbf{E}^*, \qquad \mathbf{B}\cdot\mathbf{H} \to \frac{1}{\mu}\mathbf{B}\cdot\mathbf{B}^*
$$

time average하여 $\frac{1}{2}$을 더 곱해주면, **time-averaged energy density**는:

$$
\boxed{\langle u\rangle_t = \frac{1}{4}\left\{\varepsilon\,\mathbf{E}_0\cdot\mathbf{E}_0^* + \frac{1}{\mu}\mathbf{B}_0\cdot\mathbf{B}_0^*\right\}}
$$

전자기파에서 $\mathbf{B}_0 = \sqrt{\mu\varepsilon}\,\mathbf{E}_0$라는 걸 감안하면:

$$
\langle u\rangle_t = \frac{\varepsilon}{2}|\mathbf{E}_0|^2
$$

---

## 3. 복소 $\hat{n}$과 $\mathbf{E}_0$, $\mathbf{B}_0$

$\hat{n} = \mathbf{n}_R + i\mathbf{n}_I$, $\hat{n} = \hat{x}\cosh(\theta) + i\hat{y}\sinh(\theta)$인 경우,

이런 복소수 $\hat{n}$에 대한 $\mathbf{E}_0$와 $\mathbf{B}_0$는 뭘 만족하나?

$\mathbf{E}_0$의 $\hat{x}, \hat{y}$ 성분은 $\mathbf{E}_0\cdot\hat{n} = 0$이 되도록 신경 써야 하고, $\hat{z}$ 성분은 상관없다.

$A$와 $A'$가 임의의 complex number일 때, 조건은 $\mathbf{E}_0\cdot\hat{n}^* = 0$이 아니라 $\mathbf{E}_0\cdot\hat{n} = 0$이므로:

$$
\mathbf{E}_0 = A\left\{i\hat{x}\sinh(\theta) - \hat{y}\cosh(\theta)\right\} + A'\hat{z}
$$

$$
\mathbf{B}_0 = \sqrt{\mu\varepsilon}\,\hat{n}\times\mathbf{E}_0 \text{ 로 결정}
$$

---

## 4. 편광 (Polarization)

$\hat{n} = \hat{z}$이고, $\hat{\varepsilon}_1, \hat{\varepsilon}_2, \hat{z}$는 서로 직교하는 unit vector로 설정하자.

$\mathbf{E}_0$는 $\hat{\varepsilon}_1$과 $\hat{\varepsilon}_2$의 linear sum으로 나타낼 수 있다. 그러나 계수가 **complex**일 수 있다.

$$
\mathbf{E}_0 = \hat{\varepsilon}_1 E_1 + \hat{\varepsilon}_2 E_2, \qquad E_1, E_2 \in \mathbb{C}
$$

$$
\mathbf{B}_i = \sqrt{\mu\varepsilon}\,(\hat{n}\times\hat{\varepsilon}_i)E_i, \qquad i = 1, 2
$$

complex number를 지수로 나타내면:

$$
E_1 = |E_1|\exp(i\phi), \qquad E_2 = |E_2|\exp(i\chi)
$$

이는 곧 $\phi$와 $\chi$의 차이에 의해 각 시간에서 $\mathbf{E}_0$의 $\hat{\varepsilon}_1$ 성분과 $\hat{\varepsilon}_2$ 성분의 phase가 달라진다는 의미이다.

$$
\mathbf{E} = \hat{\varepsilon}_1|E_1|\exp\left[i\mathbf{k}\cdot\mathbf{x} - i(\omega t - \phi)\right] + \hat{\varepsilon}_2|E_2|\exp\left[i\mathbf{k}\cdot\mathbf{x} - i(\omega t - \chi)\right]
$$

**$\phi$와 $\chi$의 차이값이 "polarization" 형태를 결정.**

---

### (1) Linear Polarization: $\phi = \chi$

$$
\mathbf{E} = \left\{\hat{\varepsilon}_1|E_1| + \hat{\varepsilon}_2|E_2|\right\}\exp\left[i\mathbf{k}\cdot\mathbf{x} - i(\omega t - \phi)\right]
$$

두 성분의 위상이 같으므로, $\mathbf{E}$의 방향이 고정된 채 크기만 진동한다.

---

### (2) Elliptical Polarization: $\chi \neq \phi$ (일반적인 경우)

두 성분 사이의 위상 차가 있으면, $\mathbf{E}$ 벡터의 끝점이 **타원**을 그린다.

---

### (3) Circular Polarization

$$
\mathbf{E} = E_0(\hat{\varepsilon}_1 \pm i\hat{\varepsilon}_2)\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t)
$$

$-i = \exp\!\left(-i\frac{\pi}{2}\right)$를 이용하여, $\mathbf{E}_0(\hat{\varepsilon}_1 - i\hat{\varepsilon}_2)$ 경우의 real part:

$$
\hat{\varepsilon}_1 E_0\cos(\omega t) + \hat{\varepsilon}_2 E_0(-\sin\omega t)
$$

편광은 **clock wise** 방향으로 회전. 이것을 **RCP (Right Circular Polarization)**라 부르며, **negative helicity**를 가진다고 한다.

> [!info] Helicity 관례 (세 가지 convention이 맞물린다)
> 시계 방향이 옳다. 
> - Clock wise ↔ right ↔ negative helicity (오른손의 네 손가락이 회전 방향으로 감길 때, 엄지 손가락이 나로부터 멀어지는 방향)
> - Anti-clock wise ↔ left ↔ positive helicity

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

- [[ED lecture note - Gauge Transform and Energy Conservation]]
- [[ED lecture note - Momentum Conservation and Stress Tensor]]
- [[Wave Equation from Maxwell Equations]]

# References


# 다음 강의

[[ED lecture note - Stokes Parameters and Reflection]]

# 원본 필기 이미지

![[Pasted image 20260323204407.png]]
![[Pasted image 20260323204414.png]]![[Pasted image 20260323204420.png]]![[Pasted image 20260323204428.png]]![[Pasted image 20260323204434.png]]