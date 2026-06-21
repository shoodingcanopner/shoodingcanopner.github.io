---
title: ED lecture note - Dispersion
date: "2026-04-01"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Electrodynamics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Fresnel Equations]]

# 오늘의 핵심

- $\varepsilon$과 $\mu$가 frequency에 따라 달라지는 이유: 핵에 bound된 전자의 damped harmonic oscillation
- 단일 전자 모델로부터 $\varepsilon(\omega)/\varepsilon_0$ 유도
- $\varepsilon(\omega)$는 복소수: real part → 굴절, imaginary part → 흡수
- Imaginary part는 **Lorentzian peak** 모양 → 공명 진동수 근처에서 최대
- Normal dispersion: $\omega$ 증가 → $\text{Re}(\varepsilon/\varepsilon_0)$ 증가
- Anomalous dispersion: 공명 진동수 근처에서 $\omega$ 증가 → $\text{Re}(\varepsilon/\varepsilon_0)$ 감소

# 필기 내용

## 1. Dispersion이란?

반사·굴절은 끝. 이제 **Dispersion**에 대해 공부하자.

$\varepsilon$과 $\mu$가 **frequency에 따라 달라지는 이유**가 뭘까?
왜 $\omega$에 따라 굴절률이 달라져서 무지개가 생기는 걸까?
심지어 $\omega$에 따라 wave number가 달라지는 현상도 생긴다. 

---

## 2. Simple model for $\varepsilon(\omega)$, Lorentz model

핵에 bound된 전자가 **damped harmonic oscillation** 하는 경우.
**low density medium**에서 통하는 모델이다.

electric field가 $\mathbb{E}(x,t)$일 때, 전자의 equation of motion은:

$$
m\left(\ddot{x} + \gamma\dot{x} + \omega_0^2 x\right) = -e\,\mathbb{E}(x,t)
\tag{1}
$$

- $\gamma$: damping coefficient
- $\omega_0$: harmonic potential의 **binding frequency**
- 자기장의 영향은 무시

아주 작은 진폭으로 전자가 움직여서 전기장의 영향을 공간에 대해 average할 수 있다 가정.
$\mathbb{E}$가 $e^{-i\omega t}$로 oscillation 할 때:

이런 미분 방정식의 경우 시간이 충분히 지나면, $x$의 진동수는 외력의 진동수인 $\omega$와 같아진다는 걸 안다.
$x$와 전기장의 진동 사이 위상차 $\phi$가 있을 때:

$$
x(t) \propto e^{-i\omega t + i\phi}
$$

$$
\dot{x} = -i\omega x, \qquad \ddot{x} = -\omega^2 x
$$

운동방정식에 대입:

$$
m\left[-\omega^2 - i\gamma\omega + \omega_0^2\right]x = -e\,\mathbb{E}
$$

전자의 **dipole moment**는 → 지금은 전자 하나만을 보고 있으므로, 
단순히 전하의 위치에 전하량을 곱하면 된다. 

$$
p = -ex = \frac{e^2}{m}\left[\omega_0^2 - \omega^2 - i\omega\gamma\right]^{-1}\mathbb{E}
\tag{2}
$$

---

## 3. 다분자 계로의 확장

unit volume에 $N$개 분자가 있고, 분자당 $Z$개 electron이 있을 때,
$\omega_j$의 binding frequency와 $\gamma_j$의 damping을 가지는 전자가 분자 1개당 $f_j$개 있다고 치자.
$f_j$는 이를 만족: $Z = \sum_j f_j$

이 각기 다른 전자들의 dipole moment를 모두 합한 게 $\epsilon$를 결정할 것이다.
아래 식은 Polarization density를 구한 것. 

$$
p_\text{total} = \frac{e^2}{m}N\sum_j f_j\left[\omega_j^2 - \omega^2 - i\omega\gamma_j\right]^{-1}\mathbb{E}
\tag{3}
$$

**electric susceptibility**의 정의:

> [! tip] 이 정도는 외우자
> $$
> \chi_e = \frac{p_\text{total}}{\varepsilon_0 \mathbb{E}}, \qquad \frac{\varepsilon}{\varepsilon_0} = 1 + \chi_e
> $$

따라서:

$$
\frac{\varepsilon(\omega)}{\varepsilon_0} = 1 + \chi_e = 1 + \frac{Ne^2}{\varepsilon_0 m}\sum_j f_j\left[\omega_j^2 - \omega^2 - i\omega\gamma_j\right]^{-1}
\tag{4}
$$



---

## 4. 복소 유전율의 실수부와 허수부

$\varepsilon(\omega)$의 **real part**와 **imaginary part**를 구해 보자.

$$
\text{Re}\!\left(\frac{\varepsilon}{\varepsilon_0}\right) = 1 + \frac{Ne^2}{\varepsilon_0 m}\sum_j\frac{f_j(\omega_j^2 - \omega^2)}{(\omega_j^2 - \omega^2)^2 + \gamma_j^2\omega^2}
\tag{5}
$$

$$
\text{Im}\!\left(\frac{\varepsilon}{\varepsilon_0}\right) = \frac{Ne^2}{\varepsilon_0 m}\sum_j\frac{\gamma_j\omega f_j}{(\omega_j^2 - \omega^2)^2 + \gamma_j^2\omega^2}
\tag{6}
$$

Imaginary part가 가장 커지는 지점이 있다. 바로 분모가 0에 가까워지는 지점.

$$
\frac{\Gamma/2}{(x - x_0)^2 + (\Gamma/2)^2}
$$

꼴로 생긴 함수를 **Lorentz function**이라 부르며, 이로 인해 생긴 peak를 **Lorentzian peak**라고 부른다.

---

## 5. Normal dispersion과 Anomalous dispersion

![[Pasted image 20260401143901.png]]
위에 있는 그래프는 실수부, 아래에 있는 그래프는 허수부

- Imaginary peak가 있는 **진동수 근처**에서, $\text{Re}\!\left(\dfrac{\varepsilon}{\varepsilon_0}\right)$에는 독특한 일이 일어난다.
- Peak가 일어나기 이전 구간에서는 $\omega$가 증가하면 $\varepsilon/\varepsilon_0$도 증가하는 **normal dispersion**이 일어나지만,
- **Peak 전후**에서는 $\omega$가 증가하면 $\text{Re}\!\left(\dfrac{\varepsilon}{\varepsilon_0}\right)$가 줄어드는 **anomalous dispersion**이 일어난다.

## 6. Complex $k$와 Absorption

지난 시간, Simple Lorentz model로부터 아래 식을 얻었다:

$$
\frac{\varepsilon}{\varepsilon_0} = 1 + \chi_e = 1 + \frac{Ne^2}{m\varepsilon_0}\sum_j \frac{f_j}{\omega_j^2 - \omega^2 - i\gamma_j\omega}
$$

이제 $\varepsilon$가 **complex**라면, 이것의 허수부는 무슨 의미일까?

Wave number는 $k = \beta + i\dfrac{\alpha}{2}$로 쓸 수 있다 ($\alpha, \beta \in \mathbb{R}$).

전자기파의 파수는 $k = \omega\sqrt{\mu\varepsilon}$이고, $c = \dfrac{1}{\sqrt{\varepsilon_0\mu_0}}$이므로, $\mu = \mu_0$로 두면:

$$
k = \frac{\sqrt{\mu\varepsilon}}{\sqrt{\mu_0\varepsilon_0}} \cdot \frac{\omega}{c} = \frac{\omega}{c}\sqrt{\frac{\varepsilon}{\varepsilon_0}} = n\frac{\omega}{c}
$$

$k^2$를 실수부와 허수부로 나누면:

$$
k^2 = \frac{\omega^2}{c^2}\frac{\varepsilon}{\varepsilon_0} = \beta^2 - \frac{\alpha^2}{4} + i\alpha\beta
$$

따라서:

$$
\text{Re}(k^2) = \beta^2 - \frac{\alpha^2}{4} = \frac{\omega^2}{c^2}\,\text{Re}\!\left[\frac{\varepsilon}{\varepsilon_0}\right], \qquad \text{Im}(k^2) = \alpha\beta = \frac{\omega^2}{c^2}\,\text{Im}\!\left[\frac{\varepsilon}{\varepsilon_0}\right]
$$

$k$의 imaginary part가 작을 때 ($\alpha \ll \beta$):

$$
\beta^2 - \frac{\alpha^2}{4} \approx \beta^2 = \frac{\omega^2}{c^2}\,\text{Re}\!\left[\frac{\varepsilon}{\varepsilon_0}\right], \qquad \beta = \frac{\omega}{c}\sqrt{\text{Re}\!\left[\frac{\varepsilon}{\varepsilon_0}\right]}
$$

$$
\therefore\quad \alpha = \frac{\omega}{c}\frac{\text{Im}\!\left[\varepsilon/\varepsilon_0\right]}{\sqrt{\text{Re}\!\left[\varepsilon/\varepsilon_0\right]}} = \beta\,\frac{\text{Im}\!\left[\varepsilon/\varepsilon_0\right]}{\text{Re}\!\left[\varepsilon/\varepsilon_0\right]}
$$

$e^{ikx} = e^{-\alpha x/2}\cdot e^{i\beta x}$이므로, $\alpha$는 사실 **전기장 세기의 exponential decay**이다.

$$
I \propto |\mathbb{E}|^2 \propto e^{-\alpha x}
$$

따라서 $\text{Im}[\varepsilon/\varepsilon_0]$가 $\text{Re}[\varepsilon/\varepsilon_0]$에 비해 커질수록, $\varepsilon$의 imaginary part가 커질수록 빛은 매질을 통과하지 못하고 exponential decay한다.

---

## 7. Drude Model: Low Frequency Behavior, Optical Conductivity of Metal

bound frequency가 0에 가까운 **자유 전자**의 비율을 $f_0$라고 하자.

$\varepsilon(\omega)$를 bound electron에 의한 항과 자유 전자에 의한 항으로 분리할 수 있다:

$$
\varepsilon(\omega) = \varepsilon_b(\omega) + i\frac{Ne^2 f_0}{m\omega(\gamma_0 - i\omega)}
$$

- $\varepsilon_b(\omega)$: $\omega_j \neq 0$인 bound electron들의 기여
- 나머지 항: bound frequency가 0인 **free electron**의 기여

$f_0$가 있는 항이 major해질 경우, $\omega \to 0$일 때 $\text{Re}(\varepsilon)$가 급격히 커진다.

### Ampere 법칙과의 연결

Ampere 법칙: $\nabla \times \mathbf{H} = \mathbf{J} + \dfrac{\partial \mathbf{D}}{\partial t}$

전류 밀도는 옴의 법칙을 따른다. $\sigma$가 conductivity일 때 $\mathbf{J} = \sigma\mathbb{E}$.

$$
\nabla \times \mathbf{H} = \sigma\mathbb{E} + \frac{\partial}{\partial t}\varepsilon\mathbb{E} = (\sigma - i\omega\varepsilon)\mathbb{E} \approx -i\omega\!\left(\varepsilon + i\frac{\sigma}{\omega}\right)\mathbb{E}
$$
무슨 논리인지 모르겠는데, 책에서는 $\epsilon$중 $\epsilon_b$만 뽑아서 
$$
\nabla \times \mathbf{H} =  -i\omega\!\left(\varepsilon_b + i\frac{\sigma}{\omega}\right)\mathbb{E}
$$
라고 식을 두었다.

> [!tip] Glia의 보충 설명 — 왜 $\varepsilon_b$만 쓰는가?
> $\varepsilon(\omega)$ 전체에는 이미 **free electron의 기여**가 포함되어 있다:
> $$
> \varepsilon(\omega) = \varepsilon_b(\omega) + \underbrace{i\frac{Ne^2 f_0}{m\omega(\gamma_0 - i\omega)}}_{\text{free electron 항}}
> $$
> 만약 Ampere 법칙에서 $\mathbf{J} = \sigma\mathbb{E}$와 $\varepsilon(\omega)$ 전체를 **동시에** 쓰면, free electron의 효과가 양쪽에 **이중으로** 계산된다.
>
> 그래서 책은 **free electron의 효과를 $\mathbf{J} = \sigma\mathbb{E}$ 쪽에 몰아주기로** 약속하고, $\mathbf{D}$를 기술하는 $\varepsilon$에는 bound electron 항인 $\varepsilon_b$만 남긴 것이다. 이건 물리적 기술의 **분업**이다 — "자유전자의 효과는 $\sigma$로, 속박전자의 효과는 $\varepsilon_b$로." 

또 무슨 논리인지 모르겠는데, 위 식을 $\varepsilon(\omega) = \varepsilon_b(\omega) + i\frac{Ne^2 f_0}{m\omega(\gamma_0 - i\omega)}$와 비교하면. 

$$
\sigma = \frac{Ne^2 f_0}{m(\gamma_0 - i\omega)}
$$

즉, **free electron이 conductivity를 만든다.**

> [!tip] Glia의 보충 설명 — $\sigma$ 비교 논리
> 위 두 식을 비교하는 논리는 다음과 같다. Ampere 법칙을 $\varepsilon_b$로 정리한 식:
> $$
> \nabla \times \mathbf{H} = -i\omega\!\left(\varepsilon_b + i\frac{\sigma}{\omega}\right)\mathbb{E}
> $$
> 그리고 $\varepsilon(\omega) = \varepsilon_b + i\dfrac{Ne^2 f_0}{m\omega(\gamma_0 - i\omega)}$를 대입한 식:
> $$
> \nabla \times \mathbf{H} = -i\omega\,\varepsilon(\omega)\,\mathbb{E} = -i\omega\!\left[\varepsilon_b + i\frac{Ne^2 f_0}{m\omega(\gamma_0 - i\omega)}\right]\mathbb{E}
> $$
> 두 식이 동일해야 하므로 괄호 안을 비교하면:
> $$
> i\frac{\sigma}{\omega} = i\frac{Ne^2 f_0}{m\omega(\gamma_0 - i\omega)} \quad \Rightarrow \quad \sigma = \frac{Ne^2 f_0}{m(\gamma_0 - i\omega)}
> $$
> 결국 $\varepsilon(\omega)$의 free electron 항에 숨어있던 것이 바로 conductivity $\sigma$였던 셈이다.

질문) 지금 내용이 low frequency condition과 무슨 상관인가???

> [!tip] Glia의 보충 설명 — Low frequency와의 연관성
> $\sigma = \dfrac{Ne^2 f_0}{m(\gamma_0 - i\omega)}$의 **주파수 의존성**에 연관이 있다.
>
> **Low frequency 극한** ($\omega \ll \gamma_0$)에서는:
> $$
> \sigma \approx \frac{Ne^2 f_0}{m\gamma_0} \equiv \sigma_0 \quad (\text{실수 상수, DC conductivity})
> $$
> 이것이 우리가 일상에서 아는 **옴의 법칙**다. $\omega \to 0$에서 $\sigma$가 실수 상수가 되고, $\mathbf{J} = \sigma_0\mathbb{E}$가 성립한다.
>
> 따라서 Drude model 자체는 전 주파수 범위에서 성립하지만 low frequency behavior 라고 부르는 이유는 **이 모델이 DC conductivity를 재현하고 옴의 법칙으로 환원되는** 영역이 바로 low frequency이기 때문이다. 즉, free electron이 전도도를 결정한다는 그림이 가장 직관적으로 드러나는 영역이 low frequency다.

> [!tip] 정리
> Drude model에서 free electron의 기여는 $\varepsilon(\omega)$의 허수항과 동일하며, 이것이 금속의 optical conductivity의 기원이다. Low frequency 조건과 깊게 연관되어 있다.

---

## 8. High Frequency Limit: Plasma Frequency

$\omega \gg \omega_j$: resonance frequency보다 훨씬 높은 진동수의 빛이 쪼여질 때, 

$$
\frac{1}{\omega_j^2 - \omega^2 - i\gamma_j\omega} \approx -\frac{1}{\omega^2}\left(1 + i\frac{\gamma_j}{\omega} + O(\omega^{-2})\right)^{-1} 
$$

테일러 전개를 적용하면 ($\tfrac{1}{\omega^2}$도 작고, $\tfrac{1}{\omega}$도 작다)

$$
\approx -\frac{1}{\omega^2}\left(1 - i\frac{\gamma_j}{\omega} + O(\omega^{-2})\right)
$$

$$
\frac{\varepsilon}{\varepsilon_0}(\omega) = 1 - \frac{Ne^2 Z}{\varepsilon_0 m \omega^2} = 1 - \frac{\omega_p^2}{\omega^2}
$$

여기서 $\omega_p$는 **plasma frequency**, 물질의 내재적 성질에 의해 바로 정해지는 값이다. 

$$
\omega_p^2 = \frac{Ne^2 Z}{\varepsilon_0 m}
$$

$\mu = \mu_0$로 두면 파수와 $\omega$ 사이의 관계:

$$
k = \frac{\omega}{v} = \frac{\omega}{c}n = \frac{\omega}{c}\sqrt{\frac{\varepsilon}{\varepsilon_0}} = \frac{\omega}{c}\sqrt{1 - \frac{\omega_p^2}{\omega^2}} = \frac{1}{c}\sqrt{\omega^2 - \omega_p^2}
$$
![[Pasted image 20260401175529.png]]
**Dispersion relation**: $\omega^2 = \omega_p^2 + c^2k^2$

- $\omega < \omega_p$이면 $k$가 허수이다 → 빛이 투과하지 못하고 매질에 들어오면 **감쇠**한다.
- $\omega > \omega_p$이면 $\varepsilon > 0$ → 빛을 투과하기 시작. 이를 **UV transparency of metal**이라고 한다.

---

## 9. Causality: $\mathbb{D}$와 $\mathbb{E}$의 관계

$\varepsilon$가 상수가 아니라 **frequency dependency**가 있으면, $\mathbb{E}$의 변화와 $\mathbb{D}$의 변화 사이에 **시간 지연**이 있을 수 있다. 즉, $\varepsilon$는 **temporally nonlocal**하게 $\mathbb{D}$와 $\mathbb{E}$를 이어준다.

기본 식: $\mathbb{D}(\mathbf{x}, \omega) = \varepsilon(\omega)\,\mathbb{E}(\mathbf{x}, \omega)$

이 식을 $\mathbb{D}(\mathbf{x}, t)$와 $\mathbb{E}(\mathbf{x}, t)$에 대한 식으로 바꾸기 위해 **Fourier 변환**을 해야 한다.

$$
\mathbb{D}(\mathbf{x}, t) = \frac{1}{\sqrt{2\pi}}\int \mathbb{D}(\mathbf{x}, \omega)\,e^{-i\omega t}\,d\omega
$$

$$
= \frac{1}{\sqrt{2\pi}}\int \varepsilon(\omega)\,\mathbb{E}(\mathbf{x}, \omega)\,e^{-i\omega t}\,d\omega
$$

$\mathbb{E}(\mathbf{x}, t)$에 대한 식으로 바꾸면:

$$
= \frac{1}{\sqrt{2\pi}}\int \varepsilon(\omega)\,e^{-i\omega t}\!\left(\int \frac{1}{\sqrt{2\pi}}\,\mathbb{E}(\mathbf{x}, t')\,e^{i\omega t'}dt'\right)d\omega
$$

과거의 $\mathbb{E}$로부터 현재의 $\mathbb{D}$가 영향받는 정도는 $\varepsilon(\omega)$ 가 $\varepsilon_0$과 상대적으로 나는 차이에 의해 결정된다. 
새로운 notation으로 $\phi(\omega) = \dfrac{\varepsilon(\omega) - \varepsilon_0}{\varepsilon_0}$를 쓰자.

$$
\varepsilon(\omega) =\varepsilon_0\!\left(-1 + \frac{\varepsilon(\omega)}{\varepsilon_0} + 1\right)= \varepsilon_0\!\left(\frac{-\varepsilon_0 + \varepsilon(\omega)}{\varepsilon_0} + 1\right) = \varepsilon_0(\phi(\omega) + 1)
$$

이를 대입하면:

$$
\mathbb{D}(\mathbf{x}, t) = \frac{\varepsilon_0}{2\pi}\iint e^{-i\omega(t - t')}\mathbb{E}(\mathbf{x}, t')\,d\omega\,dt' + \frac{\varepsilon_0}{2\pi}\iint e^{-i\omega(t - t')}\phi(\omega)\,\mathbb{E}(\mathbf{x}, t')\,d\omega\,dt'
$$

**첫 번째 항**: $\omega$ 적분을 먼저 하면 $2\pi\delta(t - t')$가 나온다. 
결국 현재의 전기장, $\mathbb{E}(\mathbf{x}, t)$이 나온다. 

$$
\frac{\varepsilon_0}{2\pi}\iint e^{-i\omega(t-t')}\mathbb{E}(\mathbf{x}, t')\,d\omega\,dt' = \varepsilon_0\int\delta(t' - t)\,\mathbb{E}(\mathbf{x}, t')\,dt' = \varepsilon_0\mathbb{E}(\mathbf{x},t)
$$

**두 번째 항**: 자극($\mathbb{E}$)과 반응($\mathbb{D}$) 사이의 시간 지연을 나타내는 변수 $\tau = t - t'$를 이용해 표현. **response function** 의 형태로 적분을 나타낼 수 있다. 

$\omega$에 대해 먼저 적분한 결과가 $\mathbb{E}$와 $\mathbb{D}$를 이어주는 response function $G(\tau)$이다. 
이것은 $\phi(\omega) = \dfrac{\varepsilon(\omega) - \varepsilon_0}{\varepsilon_0}$의 역푸리에 변환이다. 

$$
G(\tau) = \frac{1}{2\pi}\int \phi(\omega)\,e^{-i\omega\tau}\,d\omega
$$

$$
\therefore\quad \mathbb{D}(\mathbf{x}, t) = \varepsilon_0\mathbb{E}(t) + \varepsilon_0\int G(\tau)\,\mathbb{E}(\mathbf{x}, t - \tau)\,d\tau
$$

시간 지연의 영향은 $\varepsilon$와 $\varepsilon_0$의 **상대적인 차이로 발생**한다는 점에 주목.

---

## 10. Lorentz model에 대한 $G(\tau)$ 계산

Lorentz model
$$
\frac{\varepsilon(\omega)}{\varepsilon_0} = 1 + \chi_e = 1 + \frac{Ne^2}{\varepsilon_0 m}\sum_j f_j\left[\omega_j^2 - \omega^2 - i\omega\gamma_j\right]^{-1}
\tag{4}
$$
를 적용하면 (아마 모든 전자의 binding frequency가 동일하다고 가정한 듯 하다.)

$$
G(\tau) = \frac{\omega_p^2}{2\pi}\int_{-\infty}^{\infty} \frac{e^{-i\omega\tau}}{\omega_0^2 - \omega^2 - i\gamma\omega}\,d\omega
$$

이 적분은 **유수 정리(Residue theorem)** 를 이용해 계산해야 한다.

---

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

[[ED lecture note - Fresnel Equations]]

# References


# 다음 강의

[[ED lecture note - Radiating Systems]]

# 원본 필기 이미지

[[ED_6thweek_1.pdf]]
[[ED_6thweek_2.pdf]]
![[Pasted image 20260401142400.png]]
![[Pasted image 20260401142403.png]]![[Pasted image 20260401142408.png]]
![[Pasted image 20260401174437.png]]


![[Pasted image 20260401174442.png]]
![[Pasted image 20260401174448.png]]

![[Pasted image 20260401174453.png]]
---

