---
title: ED lecture note - Complex Analysis
date: "2026-04-06"
subject: physics
tags:
  - study
  - lecture_notes
  - complex_analysis
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Dispersion]]
- 복소 유전율 $\varepsilon(\omega)$와 흡수, Drude 모델, 플라즈마 진동수
- 인과율과 D-E 관계식의 response function

# 오늘의 핵심

- 복소 변수의 기본 개념 (Argand diagram, De Moivre)
- Cauchy-Riemann 조건 → analytic function의 정의
- Cauchy 적분 정리 및 Cauchy 적분 공식
- Cauchy principal value
- Kramers-Kronig 관계식: $\varepsilon(\omega)$의 실수부와 허수부는 서로 독립이 아님
- $G(\tau)$의 유도 (Lorentz 모델, 유수 정리 활용)

# 필기 내용

## 1. 복소 변수 (Complex Variables)

복소수 $z$를 Argand diagram 위의 점 $(x, y)$로 표현한다.

$$
z = (x, y) = x + iy = r(\cos\theta + i\sin\theta) = re^{i\theta}
\tag{1}
$$

**곱셈의 성질:**

$$
|z_1 z_2| = |z_1||z_2|, \quad \arg(z_1 z_2) = \arg z_1 + \arg z_2
\tag{2}
$$

**De Moivre 공식:**

$$
e^{in\theta} = (\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta
\tag{3}
$$

**복소 로그함수의 주의점:**

$$
\ln z = \ln r + i\theta
\tag{4}
$$

그런데 $\theta' = \theta + 2\pi n$도 같은 $z$를 주므로 로그함수는 **다치함수(multivalued)** 가 된다.
이를 피하기 위해 $0 \leq \theta < 2\pi$로 범위를 제한한 것을 **주값(principal value)** 이라 한다.

---

## 2. 복소 함수 (Complex Function)

$$
w(z) = u(x,y) + iv(x,y)
\tag{5}
$$

여기서 $u$, $v$는 순수 실수 함수.

**예시:** $w(z) = z^2 = (x+iy)^2 = (x^2 - y^2) + i(2xy)$

$$
u(x,y) = x^2 - y^2, \quad v(x,y) = 2xy
\tag{6}
$$

---

## 3. Cauchy-Riemann 조건, 복소평면에서 부드러운 함수가 되기 위해

$w(z)$의 미분 $dw/dz$가 존재하려면, **적분 경로에 무관하게** 극한값이 같아야 한다.

$$
\frac{dw}{dz} = \lim_{\delta z \to 0} \frac{\delta w}{\delta z}
\tag{7}
$$

$\delta z = \delta x + i\delta y$로 두고, 두 가지 경로를 비교한다.

**경로 ①** $\delta y = 0$, $\delta x \to 0$:

$$
\frac{dw}{dz} = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x}
\tag{8}
$$

**경로 ②** $\delta x = 0$, $\delta y \to 0$:

$$
\frac{dw}{dz} = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y}
\tag{9}
$$

두 결과가 같으려면:

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
\tag{10}
$$

이것이 **Cauchy-Riemann 조건**이다.

> [!note] Analytic function (해석 함수)
> $w(z)$가 $z = z_0$ 및 그 근방에서 미분 가능할 때, $z_0$에서 **analytic**하다고 한다.
> Cauchy-Riemann 조건은 analytic function이 되기 위한 **필요조건**이다.

---

## 4. Cauchy 적분 정리 (Cauchy Integral Theorem)

닫힌 경로 $C$ 위의 선적분을 $n$개 분할한 뒤 극한을 취한다.

![[Pasted image 20260417160009.png]]
$$
\oint_C f(z)\,dz = \lim_{n\to\infty} \sum_j f(\zeta_j)(z_j - z_{j-1})
\tag{11}
$$
$z_j$는 커브 위에 일정 간격으로 점을 찍었을 때 $j$번째 점, 
$\zeta_j$는 $(z_{j-1},z_j)$구간 내부의 점으로, 함수 $f$의 값을 평가하는 점이다. 

$f(z) = u + iv$, $dz = dx + i\,dy$로 분해하여, 적분 값의 실수부와 허수부를 나누어주면, 

$$
\oint_C f\,dz = \oint (u\,dx - v\,dy) + i\oint (v\,dx + u\,dy)
\tag{12}
$$

Stokes 정리를 적용하면 각 항이 0이 됨을 Cauchy-Riemann 조건으로 보일 수 있다.

$$
\oint (u\,dx - v\,dy) = \iint \left(-\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\right)dx\,dy = 0
\tag{13}
$$
$$
\oint (v\,dx + u\,dy) = \iint \left(\frac{\partial u}{\partial x} - \frac{\partial v}{\partial y}\right)dx\,dy = 0
\tag{14}
$$

> [!Success] **결론:** 해석적인 복소 함수를 폐경로로 적분하면 0이다
> $f(z)$가 단연결 영역에서 analytic하고 단일값이면,
> $$\oint_C f(z)\,dz = 0 \tag{15}$$


---

## 5. Cauchy 적분 공식 (Cauchy Integral Formula)


닫힌 경로 $C$ 안에 $z_0$가 있고 $f(z)$가 $C$ 위 및 내부에서 analytic할 때:

$$
\oint_C \frac{f(z)}{z - z_0}\,dz = 2\pi i\,f(z_0)
\tag{16}
$$

**증명 스케치:** $z_0$ 주변에 반지름 $\delta$의 작은 원 $C'$을 그리면, $C$와 $C'$ 사이 영역에서 피적분 함수가 analytic하므로 두 경로의 적분이 같다. $C'$ 위에서 $z - z_0 = \delta e^{i\theta}$로 매개변수화하면 $f(z_0)$만 남는다.
자세한 내용: [[Cauchy Integral Formula]]

**고차 도함수로의 확장:**

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z-z_0)^{n+1}}\,dz
\tag{17}
$$

---

## 6. Cauchy Principal Value

실수축 위의 이상 적분에서 특이점 $\alpha$가 있을 때, 대칭적으로 제거하는 방식:

$$
P\int_{-\infty}^{\infty} \frac{f(x)}{x-\alpha}\,dx = \lim_{\delta\to 0} \left[\int_{-\infty}^{\alpha-\delta} \frac{f(x)}{x-\alpha}\,dx + \int_{\alpha+\delta}^{\infty} \frac{f(x)}{x-\alpha}\,dx\right] = i\pi f(\alpha)
\tag{18}
$$
![[Pasted image 20260417171509.png]]
$\alpha$ 주변에 반지름 $\delta$의 반원 $S_\delta$를 위쪽으로 돌린다. $\delta \to 0$ 극한에서:

$$
\int_{S_\delta} \frac{f(z)}{z-\alpha}\,dz \to -i\pi f(\alpha)
\tag{19}
$$
식(16) 보다 값이 1/2 되었음을 알 수 있다. Pole 근처를 원형으로 두른 게 아니라 

따라서:

$$
P\int_{-\infty}^{\infty} \frac{f(x)}{x-\alpha}\,dx = i\pi f(\alpha) - \oint_{\text{large}} \frac{f(z)}{z-\alpha}\,dz
\tag{20}
$$

$|z| \to \infty$에서 $f(z) \to 0$이면 큰 반원의 기여가 사라지고:

$$
P\int_{-\infty}^{\infty} \frac{f(x)}{x-\alpha}\,dx = i\pi f(\alpha)
\tag{21}
$$

**Hilbert 변환:** $f(x) = f_R(x) + if_I(x)$로 쓰면 실수부와 허수부 사이의 변환 관계가 도출된다.

---

## 이제 본론!!! $G(\tau)$ 유도 — Lorentz 모델에서 유수 정리 활용

지난 강의에서:

$$
\frac{\varepsilon(\omega)}{\varepsilon_0} - 1 = \frac{\omega_p^2}{\omega_0^2 - \omega^2 - i\gamma\omega}
\tag{22}
$$

Response function $G(\tau)$는:

$$
G(\tau) = \frac{\omega_p^2}{2\pi} \int_{-\infty}^{\infty} \frac{e^{-i\omega\tau}}{\omega_0^2 - \omega^2 - i\gamma\omega}\,d\omega
\tag{23}
$$

분모를 인수분해하면:

$$
\omega_0^2 - \omega^2 - i\gamma\omega = -(\omega - \omega_+)(\omega - \omega_-)
\tag{24}
$$

$$
\omega_\pm = -\frac{i\gamma}{2} \pm \nu_0, \quad \nu_0^2 = \omega_0^2 - \frac{\gamma^2}{4}
\tag{25}
$$

**Pole의 위치:** $\omega_\pm$는 모두 **하반 복소 평면**(3, 4사분면)에 위치한다.

**경로 선택 (유수 정리):**

- **경로 I ($\tau < 0$):** 위쪽 반원(상반 복소 평면)으로 닫는다. Pole이 없으므로 $G(\tau) = 0$
- **경로 II ($\tau > 0$):** 아래쪽 반원(하반 복소 평면)으로 닫는다. Pole 2개 기여 → $-2\pi i \times \text{Residue}$

> [!tip] 왜 경로를 그렇게 닫나?
> $R \to \infty$ 극한에서 $e^{-i\omega\tau}$의 발산을 막아야 한다.
> $\omega = Re^{i\theta}$로 쓰면 $e^{-i\omega\tau} = e^{-iR\cos\theta\cdot\tau} \cdot e^{R\sin\theta\cdot\tau}$
> - $\tau < 0$일 때: $\sin\theta > 0$ (상반 평면)이어야 지수가 억제됨 → 위로 닫기
> - $\tau > 0$일 때: $\sin\theta < 0$ (하반 평면)이어야 지수가 억제됨 → 아래로 닫기

**$\tau > 0$에서 적분 결과 (유수 계산):**

$$
G(\tau > 0) = -2\pi i \cdot \frac{\omega_p^2}{2\pi} \left[\frac{e^{-i\omega_+\tau}}{\omega_- - \omega_+} + \frac{e^{-i\omega_-\tau}}{\omega_+ - \omega_-}\right]
\tag{26}
$$

$$
= -i\omega_p^2 \cdot \frac{1}{\omega_- - \omega_+} \left(e^{-i\omega_+\tau} - e^{-i\omega_-\tau}\right)
\tag{27}
$$

$\omega_\pm = -i\gamma/2 \pm \nu_0$를 대입하면:

$$
G(\tau > 0) = \omega_p^2 \, e^{-\gamma\tau/2} \cdot \frac{1}{\nu_0} \sin(\nu_0 \tau)
\tag{28}
$$

**일반적 표현 (Heaviside step function $\Theta(\tau)$ 포함):**

$$
G(\tau) = \omega_p^2 \, e^{-\gamma\tau/2} \cdot \frac{1}{\nu_0} \sin(\nu_0\tau) \cdot \Theta(\tau)
\tag{29}
$$

> [!note] $\Theta(\tau)$가 붙는 이유
> $\tau < 0$일 때 $G(\tau) \neq 0$이면 미래의 E 값이 현재의 D를 결정하는 것 → **인과율(causality) 위반**
> 따라서 $G(\tau < 0) = 0$이어야 하며, 이를 자동으로 보장하는 것이 Heaviside 함수다.

> [!question] 강의에서 강조: $G(0) = 0$인 것... 왜지?
> $\tau = 0$에서 $\sin(0) = 0$이므로 자연스럽게 $G(0) = 0$.
> → 수학적으로는 알겠다. 그런데 물리적으로 왜 $G(0) = 0$이어야 하나?

---

## 8. $\varepsilon(\omega)$의 Analytic 구조와 Causality

**핵심 결과:**

$$
\frac{\varepsilon(\omega)}{\varepsilon_0} = 1 + \int_0^\infty G(\tau)\,e^{i\omega\tau}\,d\tau
\tag{30}
$$

**켤레 대칭성 증명:**

$$
\frac{\varepsilon(-\omega)}{\varepsilon_0} = 1 + \int_0^\infty G(\tau)\,e^{-i\omega\tau}\,d\tau = \left[\frac{\varepsilon(\omega^*)}{\varepsilon_0}\right]^*
\tag{31}
$$

따라서 $\varepsilon(\omega)/\varepsilon_0$는 **상반 복소 평면에서 $\omega$에 대한 analytic function**이다.
이는 $G(\tau)$가 $\tau > 0$에서만 정의되기 때문 — $e^{i\omega\tau}$가 발산하지 않으려면 $\text{Im}(\omega) > 0$이어야 한다.

---

## 9. Kramers-Kronig 관계식

$\varepsilon(\omega)/\varepsilon_0$가 상반 복소 평면에서 analytic → Cauchy principal value 공식 적용:

$$
\frac{\varepsilon(\alpha)}{\varepsilon_0} = \frac{1}{i\pi} P\int_{-\infty}^{\infty} \frac{\varepsilon(\omega)/\varepsilon_0}{\omega - \alpha}\,d\omega
\tag{32}
$$

$f = f_R + if_I$로 분리하면:

$$
\text{Re}\left[\frac{\varepsilon(\omega)}{\varepsilon_0}\right] = \frac{1}{\pi} P\int_{-\infty}^{\infty} \frac{\text{Im}\left[\varepsilon(\omega')/\varepsilon_0\right]}{\omega' - \omega}\,d\omega'
\tag{33}
$$

$$
\text{Im}\left[\frac{\varepsilon(\omega)}{\varepsilon_0}\right] = -\frac{1}{\pi} P\int_{-\infty}^{\infty} \frac{\text{Re}\left[\varepsilon(\omega')/\varepsilon_0\right]}{\omega' - \omega}\,d\omega'
\tag{34}
$$

짝함수/홀함수 관계를 활용하면 $[0, \infty)$에서의 적분으로 축약:

$$
\text{Re}\left[\frac{\varepsilon(\omega)}{\varepsilon_0}\right] = 1 + \frac{2}{\pi} P\int_0^\infty \frac{\omega'\,\text{Im}\left[\varepsilon(\omega')/\varepsilon_0\right]}{\omega'^2 - \omega^2}\,d\omega'
\tag{35}
$$

$$
\text{Im}\left[\frac{\varepsilon(\omega)}{\varepsilon_0}\right] = -\frac{2\omega}{2\pi} P\int_0^\infty \frac{\text{Re}\left[\varepsilon(\omega')/\varepsilon_0\right] - 1}{\omega'^2 - \omega^2}\,d\omega'
\tag{36}
$$

**물리적 의미:** 허수부(흡수)와 실수부(굴절)는 서로 독립이 아니다. 하나만 측정해도 다른 쪽을 결정할 수 있다.

> 강의 언급: 로렌츠 이론에서 실수부는 $\text{Re}(\varepsilon(\omega)) \sim \tilde{\varepsilon} + \dfrac{k}{\omega_0^2 - \omega^2}$ 형태 — 공명을 의미한다.

---

# 궁금한 내용

- [ ] "Advanced Green function"이 뭐지? 필기에서 여백에 메모만 되어 있음
- [ ] Response function이 있는 적분 방정식을 미분 방정식으로 나타내는 게 가능한가? (필기 마지막 질문)
- [ ] Hilbert 변환과 Kramers-Kronig 관계식의 정확한 연결고리는?

# AI의 보충 설명

> [!tip] Glia의 보충 설명 — 복소 해석이 어렵게 느껴지는 이유
> 복소 해석은 처음엔 "왜 이걸 배우지?"가 명확하지 않아서 어렵다. 핵심 아이디어는 하나다: **함수가 복소 평면에서 미분 가능하면(analytic), 엄청나게 강한 제약을 받는다.** 실함수와 달리, 복소 함수가 한 점에서 미분 가능하면 그 근방 전체에서 무한 번 미분 가능하고, 테일러 급수로 표현된다. 이 덕분에 닫힌 경로 적분이 0이 되거나, 내부의 값이 경계 값만으로 결정된다(Cauchy 공식). 전기역학에서는 이 구조가 $\varepsilon(\omega)$의 인과율과 직결된다.

> [!tip] Glia의 보충 설명 — 경로 닫기의 직관
> 유수 정리를 쓰려면 적분 경로를 큰 반원으로 닫아야 한다. 그런데 반드시 그 반원에서의 기여가 0이어야 한다. $e^{-i\omega\tau}$에서 $\omega$가 상반/하반 평면 중 어디에 있는지에 따라 이 지수가 발산하거나 감쇠한다. 그래서 $\tau$의 부호가 경로의 방향을 결정하는 핵심 변수다. 이것은 물리적으로 **인과율(causality)**과 직결되어 있다.

> [!tip] Glia의 보충 설명 — Kramers-Kronig의 물리적 함의
> Kramers-Kronig 관계식은 단순한 수학적 트릭이 아니다. 이것은 **선형 인과 시스템이라면 반드시 만족해야 하는 보편적 관계**다. 흡수(허수부)가 있으면 굴절률의 주파수 의존성(분산, 실수부)이 반드시 따라온다. 역으로 분산이 있으면 어딘가에 흡수가 있다. 실험적으로 흡수 스펙트럼만 측정해도 굴절률을 계산할 수 있다는 강력한 결론이다.

> [!tip] Glia의 보충 설명 — Kramers-Kronig와 Fluctuation-Dissipation Theorem의 연결
> 두 정리는 **같은 뿌리에서 나온 다른 표현**이다. 공통 기반은 **선형 응답 이론(Linear Response Theory)**이다.
>
> 외부 perturbation에 대한 반응을 response function $\chi(\tau)$로 쓸 때:
> $$\langle A(t) \rangle = \int_{-\infty}^{t} \chi(t-t') F(t')\, dt'$$
> 여기서 $\chi(\tau < 0) = 0$이 causality다. 전기역학의 $G(\tau)$와 완전히 같은 구조.
>
> | | Kramers-Kronig | Fluctuation-Dissipation |
> |--|--|--|
> | **가정** | causality만 | causality + **열평형** |
> | **내용** | $\chi'$와 $\chi''$ 사이의 관계 | $\chi''$와 자발적 요동 사이의 관계 |
> | **도구** | 복소 해석학 | 통계역학 |
>
> FDT의 핵심 결과 (classical limit):
> $$S_{AA}(\omega) = \frac{2k_BT}{\omega} \chi''(\omega)$$
> 여기서 $S_{AA}(\omega)$는 자기상관함수의 파워 스펙트럼. **흡수가 있는 곳에 반드시 열요동이 있다.**
> 둘을 합치면: 열평형 시스템에서 자발적 요동 → $\chi''(\omega)$ → KK → $\chi'(\omega)$라는 체인이 완성된다.

# 연관 학습 노트

- [[ED lecture note - Dispersion]]
- [[ED lecture note - Fresnel Equations]]
- Fluctuation-Dissipation Theorem (통계역학, 추후 연결 예정)

# References

- 교수님 handout: ED_7thweek_1_handout_complex_analysis.pdf
- 강의 필기: ED_7thweek_1.pdf

# 다음 강의

[[ED lecture note - Radiating Systems]]

# 필기 원본
[[ED_7thweek_1_handout_complex_analysis.pdf]]

![[ED_7thweek_1.pdf]]

교수님 handout
[[PHYS503 Compex Analysis.pdf]]