---
title: ED lecture note - Stokes Parameters and Reflection
date: "2026-03-25"
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

[[ED lecture note - EM Waves and Polarization]]

# 오늘의 핵심

- 원형 편광 basis $\hat{\varepsilon}_\pm = \frac{1}{\sqrt{2}}(\hat{\varepsilon}_1 \pm i\hat{\varepsilon}_2)$는 LCP/RCP의 기저를 이룬다.
- Stokes parameters $(S_0, S_1, S_2, S_3)$는 빛의 편광 상태를 **세기로 측정 가능한 양**으로 기술한다.
- Monochromatic beam: $S_0^2 = S_1^2 + S_2^2 + S_3^2$
- Snell's law: $k\sin\theta_i = k'\sin\theta_r$ →
$$
\frac{\sin\theta_i}{\sin\theta_r} = \frac{n'}{n}
$$
- Total internal reflection: $n'/n < 1$일 때 임계각 $\sin\theta_c = n'/n$ 존재
- 전반사 이상의 입사각 → $\cos\theta_r'$이 허수 → **evanescent wave** (z방향 지수 감쇠)

# 필기 내용

## 1. 원형 편광 basis와 helicity

지난 시간 원형 편광을 배웠다. 편광에 대해 이어서 공부한다.

$$
\mathbb{E}(\mathbf{x}, t) = \left(\hat{\varepsilon}_1\tilde{E}_1 + \hat{\varepsilon}_2\tilde{E}_2\right)e^{i\mathbf{k}\cdot\mathbf{x} - i\omega t}
$$

$\hat{\varepsilon}_1, \hat{\varepsilon}_2, \hat{k}$는 서로 직교하며, $\tilde{E}_1, \tilde{E}_2 \in \mathbb{C}$.

원형 편광의 경우:

$$
\mathbb{E}(\mathbf{x}, t) = |E|\left(\hat{\varepsilon}_1 \pm i\hat{\varepsilon}_2\right)\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t)
$$

$i\hat{\varepsilon}_2$ 앞에 붙는 부호에 따라 편광의 회전 방향이 달라진다.

| 부호                      | Helicity          | 편광  | 회전 방향              |
| ----------------------- | ----------------- | --- | ------------------ |
| $+i\hat{\varepsilon}_2$ | positive helicity | LCP | counter clock wise |
| $-i\hat{\varepsilon}_2$ | negative helicity | RCP | clock wise         |
이렇게 부르는 convention이 교재마다 다른 듯 하다. 
헷갈린다. 외우자. 시계가 옳은(right) 방향으로 돈다!  
![[Pasted image 20260419142808.png]]
한 자리에서 빛을 정면으로 맞으며 관찰한 시간에 따른 편광의 회전 방향.

회전 자체를 나타내는 기저를 만들 수도 있다. **circular polarization basis**:

$$
\hat{\varepsilon}_\pm = \frac{1}{\sqrt{2}}\left(\hat{\varepsilon}_1 \pm i\hat{\varepsilon}_2\right)
\tag{1}
$$

각각 LCP($+$)와 RCP($-$)의 기저이다. 이 기저는 다음 성질을 만족한다:

$$
\hat{\varepsilon}_\pm^* \cdot \hat{\varepsilon}_\mp = 0, \qquad \hat{\varepsilon}_\pm^* \cdot \hat{\varepsilon}_\pm = 1
\tag{2}
$$

---

## 2. Stokes Parameters

Stokes parameters는 빛의 세기로 결정된다. 편광 상태를 결정하는 요소.

네 가지 편광 요소로 표현: $\tilde{E}_1 = a_1 e^{i\delta_1}$, $\tilde{E}_2 = a_2 e^{i\delta_2}$, $\tilde{E}_+ = a_+ e^{i\delta_+}$, $\tilde{E}_- = a_- e^{i\delta_-}$
즉, 크기랑 위상을 따로 분리해서 일단 지금은 생각하자. 
$a$와 $\delta$는 모두 실수이다. 

$\mathbb{E}_0$를 두 가지로 나타낼 수 있다.

$$
\mathbb{E}_0 = \hat{\varepsilon}_1\tilde{E}_1 + \hat{\varepsilon}_2\tilde{E}_2 \quad \text{또는} \quad \mathbb{E}_0 = \hat{\varepsilon}_+\tilde{E}_+ + \hat{\varepsilon}_-\tilde{E}_-
$$

### 선형 편광 basis에서의 Stokes parameters

$$
S_0 = |\mathbb{E}_0\cdot\hat{\varepsilon}_1|^2 + |\mathbb{E}_0\cdot\hat{\varepsilon}_2|^2 = a_1^2 + a_2^2
\tag{3}
$$

$$
S_1 = |\mathbb{E}_0\cdot\hat{\varepsilon}_1|^2 - |\mathbb{E}_0\cdot\hat{\varepsilon}_2|^2 = a_1^2 - a_2^2
\tag{4}
$$

$$
S_2 = 2\,\text{Re}\left\{(\hat{\varepsilon}_1\cdot\mathbb{E}_0)^*(\hat{\varepsilon}_2\cdot\mathbb{E}_0)\right\} = 2\,\text{Re}\left(a_1 a_2 e^{i(\delta_2 - \delta_1)}\right) = 2a_1 a_2\cos(\delta_2 - \delta_1)
\tag{5}
$$

$$
S_3 = 2\,\text{Im}\left\{(\hat{\varepsilon}_1\cdot\mathbb{E}_0)^*(\hat{\varepsilon}_2\cdot\mathbb{E}_0)\right\} = 2a_1 a_2\sin(\delta_2 - \delta_1)
\tag{6}
$$

### 원형 편광 basis에서 Stokes parameters 표현

원형 편광 basis로 $\mathbb{E}_0 = \frac{1}{\sqrt{2}}(\hat{\varepsilon}_1 \pm i\hat{\varepsilon}_2)\tilde{E}_\pm$를 사용하면:

$$
\hat{\varepsilon}_1\cdot\mathbb{E}_0 = \frac{1}{\sqrt{2}}(a_+ e^{i\delta_+} + a_- e^{i\delta_-})
$$

$$
\hat{\varepsilon}_2\cdot\mathbb{E}_0 = \frac{i}{\sqrt{2}}(a_+ e^{i\delta_+} - a_- e^{i\delta_-})
$$

이로부터 계산하면:

$$
|\hat{\varepsilon}_1\cdot\mathbb{E}_0|^2 = \frac{1}{2}\left[a_+^2 + a_-^2 + 2\cos(\delta_+ - \delta_-)\right]
$$

$$
|\hat{\varepsilon}_2\cdot\mathbb{E}_0|^2 = \frac{1}{2}\left[a_+^2 + a_-^2 - 2\cos(\delta_+ - \delta_-)\right]
$$

$$
(\hat{\varepsilon}_1\cdot\mathbb{E}_0)^*(\hat{\varepsilon}_2\cdot\mathbb{E}_0) = \frac{i}{2}\left[a_+^2 - a_-^2 + 2ia_+a_-\sin(\delta_+ - \delta_-)\right]
$$

원형 편광 basis로 나타낸 Stokes parameters:

$$
S_0 = a_+^2 + a_-^2
\tag{7}
$$

$$
S_1 = 2a_+a_-\cos(\delta_+ - \delta_-)
\tag{8}
$$

$$
S_2 = 2a_+a_-\sin(\delta_- - \delta_+)
\tag{9}
$$

$$
S_3 = a_+^2 - a_-^2
\tag{10}
$$

### Stokes parameters의 의미

$$
S_0: \text{빛의 세기}
$$

$$
S_1: x\text{-선형 편광이 }y\text{-선형 편광보다 우세한 정도}
$$

$$
S_2: \text{대각 선형 편광인 정도}
$$

$$
S_3: \text{LCP가 RCP보다 우세한 정도}
$$

### 자유도와 관계식

4개의 parameter는 independent하지 않다. 자유도가 3개이기 때문:
$\{a_+, a_-, \delta_+ - \delta_-\}$ 또는 $\{a_1, a_2, \delta_1 - \delta_2\}$

Stokes parameters 사이 관계식:

$$
S_0^2 = S_1^2 + S_2^2 + S_3^2
\tag{11}
$$

이는 **monochromatic beam**인 경우 성립. **quasi-monochromatic beam**의 경우:

$$
S_0^2 \geq S_1^2 + S_2^2 + S_3^2
\tag{12}
$$

---

## 3. 굴절과 반사 (Reflection and Refraction)


![[Pasted image 20260325190552.png]]


$\mu, \varepsilon$가 다른, 즉 refractive index가 다른 medium에 도달했을 때 빛은 어떻게 되나?

$n$인 medium에서 $n'$으로 빛이 향할 때, 입사파는 $\mathbf{k}$, 굴절파는 $\mathbf{k}'$, 반사파는 $\mathbf{k}''$.

입사각을 $\theta_i$, 굴절각을 $\theta_r$, 반사각을 $\theta_r''$로 정의한다.

세 가지 빛의 전기장 식을 써보면:

**incident wave:**
$$
\mathbb{E} = \mathbb{E}_0\exp(i\mathbf{k}\cdot\mathbf{x} - i\omega t), \qquad \mathbf{B} = \sqrt{\mu\varepsilon}\,\frac{1}{k}\mathbf{k}\times\mathbb{E}
\tag{13}
$$

**refracted wave:**
$$
\mathbb{E}' = \mathbb{E}_0'\exp(i\mathbf{k}'\cdot\mathbf{x} - i\omega t), \qquad \mathbf{B}' = \sqrt{\mu'\varepsilon'}\,\frac{1}{k'}\mathbf{k}'\times\mathbb{E}'
\tag{14}
$$

**reflected wave:**
$$
\mathbb{E}'' = \mathbb{E}_0''\exp(i\mathbf{k}''\cdot\mathbf{x} - i\omega t), \qquad \mathbf{B}'' = \sqrt{\mu\varepsilon}\,\frac{1}{k''}\mathbf{k}''\times\mathbb{E}''
\tag{15}
$$

$\omega$가 다 동일하고, 전파 속도는 $\frac{1}{\sqrt{\mu\varepsilon}}$이 결정하기에:

$$
|\mathbf{k}| = |\mathbf{k}''| = \omega\sqrt{\mu\varepsilon}, \qquad |\mathbf{k}'| = \omega\sqrt{\mu'\varepsilon'}
\tag{16}
$$

입사파와 반사파의 wave number는 같다. $n$과 $n'$의 경계가 $z=0$이라 할 때, 세 가지 파는 경계에서 모두 같은 값이어야 한다.

$$
\mathbf{k} = \hat{x}\sin\theta_i + \hat{z}\cos\theta_i
$$
$$
\mathbf{k}' = \hat{x}\sin\theta_r + \hat{z}\cos\theta_r
$$
$$
\mathbf{k}'' = \hat{x}\sin\theta_r'' - \hat{z}\cos\theta_r''
$$

$z=0$ 경계에서:

$$
\mathbf{k}\cdot\mathbf{x}\big|_{z=0} = \mathbf{k}'\cdot\mathbf{x}\big|_{z=0} = \mathbf{k}''\cdot\mathbf{x}\big|_{z=0}
$$

이것이 항상 성립해야 하므로, $x$ 성분끼리 같아야 한다:

$$
k\sin\theta_i = k'\sin\theta_r = k''\sin\theta_r''
\tag{17}
$$

$k = k''$이므로 $\theta_i = \theta_r''$, 즉 **입사각과 반사각은 같다.**

입사각과 굴절각에 관해서:

$$
\frac{k'}{k} = \frac{\sin\theta_i}{\sin\theta_r} = \frac{n'}{n}
\tag{18}
$$

이것이 **Snell's law**이다.

> [!info] $k \propto n$의 이유
> $k \propto \frac{1}{v}$, $n \propto \frac{1}{v}$ → $k \propto n$.
> Wave number와 refractive index는 비례.

---

## 4. 전반사 (Total Internal Reflection)와 Evanescent Wave

**Total reflection 조건**: $n'/n < 1$

**임계각(critical angle)** $\theta_c$에서 $\theta_r = \frac{\pi}{2}$이므로:

$$
\sin\theta_c = \frac{n'}{n}
\tag{19}
$$

이 각도에서는 굴절광이 경계를 타고 전달된다.

입사각이 $\theta_c$보다 크다면, $\sin\theta_r > 1$이 되므로, $\theta_r$이 **허수**가 된다.

$\sin^2\theta + \cos^2\theta = 1$을 이용하면:

$$
\cos\theta_r = i\sqrt{\sin^2\theta_r - 1} = i\sqrt{\left(\frac{n}{n'}\right)^2\sin^2\theta_i - 1} = i\sqrt{\frac{\sin^2\theta_i}{\sin^2\theta_c} - 1}
\tag{20}
$$

$\cos\theta_r$가 허수가 된다. 그러면 무슨 일이 벌어지나?

$$
e^{i\mathbf{k}'\cdot\mathbf{x}} = \exp\!\left(ik'x\sin\theta_r + ik'z\cos\theta_r\right)
$$

$$
= \exp\!\left(-\sqrt{\frac{\sin^2\theta_i}{\sin^2\theta_c} - 1}\cdot k'z + ik'\frac{\sin\theta_i}{\sin\theta_c}x\right)
\tag{21}
$$

exponent 안에 **real value가 들어간다**. 
빛이 $z$방향으로 지수적으로 감쇠하며, 이를 **evanescent wave**라 부른다.

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트
[[Polarization of Light]]
스넬의 법칙을 기하학적으로 유도하는 방법: [[Snell's Law]]
# References


# 다음 강의

[[ED lecture note - Fresnel Equations]]

# 원본 필기 이미지
[[ED_5thweek_2.pdf]]
![[Pasted image 20260325185532.png]]![[Pasted image 20260325185538.png]]