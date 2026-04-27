---
title: EM wave propagation through dielectric layers 기출 풀이
date: "2026-04-19"
tags:
  - electrodynamics
  - homework
  - optics
  - Fresnel
---

# EM Plane Wave Propagation through Dielectric Layers 기출 풀이

> [!info] 시험 대비
> 전기역학1 중간고사 대비 기출 문제 풀이.
> 균질 유전체 다층 구조에서의 평면파 전파, 반사/투과 계수 문제.
> 관련 강의 노트: [[ED lecture note - Fresnel Equations]]

---

## 문제 (50 points)
![[Pasted image 20260419140108.png]]
**EM plane wave propagation through homogeneous dielectric materials.**

The layers are made of nonmagnetic materials to ignore the difference in the magnetic permittivity.

세 층 구조: 굴절률 $n_1$ (입사 매질) → $n_2$ (두께 $d$의 중간층) → $n_3$ (투과 매질).

입사각 $\theta_1$, 중간층 내 각도 $\theta_2$, 투과각 $\theta_3$.

**참고 (REF):** 입사면에 수직인 E field (s-편광)에 대한 단일 경계면 Fresnel 계수:

$$
t_{12} = \frac{E_{t2}}{E_1} = \frac{2n_1 \cos\theta_1}{n_1 \cos\theta_1 + n_2 \cos\theta_2}
$$

$$
r_{12} = \frac{E_{r1}}{E_1} = \frac{n_1 \cos\theta_1 - n_2 \cos\theta_2}{n_1 \cos\theta_1 + n_2 \cos\theta_2}
$$

---

### a) (20 points)

Find the relations for the total reflection and transmission coefficients in terms of single layer expressions of reflection ($r_{12}$, $r_{23}$) and transmission ($t_{12}$, $t_{23}$) coefficients and the phase difference: $e^{i\delta}$ for light traveled through the $n_2$ layer of thickness $d$ for one time.

**풀이:**

#### Total reflection coefficient

2번째 레이어 안에서 무한히 왕복 반사하는 기여를 모두 합산한다.

**$R_0$: 1→2 경계면에서 바로 반사:**

$$
R_0 = r_{12}
$$

**$R_1$: 2층 한 번 왕복 후 1층으로 돌아옴:**

$$
R_1 = t_{12} \cdot e^{i\delta} \cdot r_{23} \cdot e^{i\delta} \cdot t_{21} = t_{12}\,t_{21}\,r_{23}\,e^{2i\delta}
$$

==Stokes relation $t_{12}\,t_{21} = 1 - r_{12}^2$ 를 적용하면:==

$$
R_1 = (1 - r_{12}^2)\,r_{23}\,e^{2i\delta}
$$

**$R_2$, $R_3$, $\ldots$: 추가 왕복마다의 기여:**

2층 안에서 한 번 더 왕복할 때마다 2→3 경계에서 반사($r_{23}$), 2→1 경계에서 반사($r_{21} = -r_{12}$), 2층을 두 번 통과($e^{2i\delta}$)하므로, 공비 $\phi$를 정의하면:

$$
\phi = -r_{23}\,r_{12}\,e^{2i\delta}
$$

$$
R_2 = \phi\,R_1, \quad R_3 = \phi^2\,R_1, \quad \ldots
$$

**등비급수 합산:**

$$
r_{\text{total}} = R_0 + R_1 \sum_{n=0}^{\infty} \phi^n = R_0 + \frac{R_1}{1-\phi}
$$

$$
\boxed{r_{\text{total}} = r_{12} + \frac{(1-r_{12}^2)\,r_{23}\,e^{2i\delta}}{1 + r_{23}\,r_{12}\,e^{2i\delta}}}
$$

#### Total transmission coefficient

**$T_1$: 1번만에 투과:**

$$
T_1 = t_{12}\,e^{i\delta}\,t_{23}
$$

**$T_2$: 2번만에 투과 (2층에서 한 번 왕복 후 투과):**

$$
T_2 = t_{12}\,e^{i\delta}\,r_{23}\,e^{i\delta}\,r_{21}\,e^{i\delta}\,t_{23} = T_1 \cdot e^{2i\delta}\,r_{23}\,r_{21}
$$

$r_{21} = -r_{12}$ 이므로, 공비 $\psi$를 정의하면:

$$
\psi = -e^{2i\delta}\,r_{23}\,r_{12} = \phi
$$

반사 쪽과 같은 공비다!

$$
T_2 = \psi\,T_1, \quad T_3 = \psi^2\,T_1, \quad \ldots
$$

**등비급수 합산:**

$$
t_{\text{total}} = T_1 \sum_{n=0}^{\infty} \psi^n = \frac{T_1}{1-\psi}
$$

$$
\boxed{t_{\text{total}} = \frac{e^{i\delta}\,t_{12}\,t_{23}}{1 + e^{2i\delta}\,r_{23}\,r_{12}}}
$$

---

### b) (10 points)

Find out the explicit expression for the phase difference ($\delta$) related to the layer thickness ($d$), angle $\theta_2$, and index of refraction $n_2$.

Note that the phase difference occurs for the EM plane waves with the travel distance only along the vertical direction in the scattering plane here.

**풀이:**

$n_2$ 매질 안에서의 파수는:

$$
k_2 = \frac{2\pi}{\lambda_2} = \frac{2\pi n_2}{\lambda}
$$

여기서 $\lambda$는 진공 파장, $\lambda_2 = \lambda/n_2$는 매질 내 파장이다.

문제에서 위상차는 **수직 방향 이동 거리에 대해서만** 계산하라고 했다. 이는 비스듬히 입사할 때 수평 방향 위상 변화는 모든 파(입사/반사/투과)에 공통이라 위상 **차이**에 기여하지 않기 때문이다. (Bragg 회절과는 다른 상황이다 — 그쪽은 다른 면에서 반사된 빛끼리 비교하므로 실제 이동 거리를 쓴.)

따라서 파수의 수직 성분 $k_2\cos\theta_2$와 수직 거리 $d$를 곱하면:

$$
\boxed{\delta = k_2\cos\theta_2 \cdot d = \frac{2\pi n_2 \cos\theta_2}{\lambda}\,d}
$$

--- 
###  c) (10 points)

Show that for the thickness difference of $\Delta d = \dfrac{\lambda}{2 n_2 \cos\theta_2}$, the reflectivity ($R = |r|^2$) and transmittivity ($R = |t|^2$) remain the same.

**풀이:**

두께 $d$가 $\Delta d$만큼 변하면, 위상차는:

$$
\delta' = \frac{2\pi n_2\cos\theta_2}{\lambda}(d + \Delta d) = \delta + \frac{2\pi n_2\cos\theta_2}{\lambda}\cdot\frac{\lambda}{2n_2\cos\theta_2} = \delta + \pi
$$

따라서:

$$
e^{2i\delta'} = e^{2i(\delta+\pi)} = e^{2i\delta}\cdot e^{2i\pi} = e^{2i\delta}
$$

a)에서 구한 $r_{\text{total}}$과 $t_{\text{total}}$의 식에서 $e^{2i\delta}$가 유일한 $d$-의존적 인자인데, $\Delta d$를 더해도 이 값이 변하지 않으므로:

$$
R = |r_{\text{total}}|^2, \quad T = |t_{\text{total}}|^2 \quad \text{모두 불변.} \quad \square
$$

> [!tip] 물리적 의미
> $\Delta d = \frac{\lambda}{2n_2\cos\theta_2}$는 2층 내에서 수직 방향으로 정확히 반파장에 해당한다. 왕복하면 한 파장 차이이므로 위상이 $2\pi$만큼 바뀌어 결국 동일한 간섭 조건을 준다.

---

### d) (10 points)

Find out the general condition for the thickness of the intermediate layer to have the maximum reflectivity, and the resulting reflectivity.

**풀이:**

a)의 결과를 정리하면 $r_{\text{total}}$는 다음과 같이 쓸 수 있다:

$$
r_{\text{total}} = \frac{r_{12} + r_{23}\,e^{2i\delta}}{1 + r_{23}\,r_{12}\,e^{2i\delta}}
$$

$|r_{\text{total}}|^2$을 계산하면 ($z\cdot z^*$ 이용):

$$
|r_{\text{total}}|^2 = \frac{r_{12}^2 + r_{23}^2 + 2\cos(2\delta)\,r_{12}\,r_{23}}{1 + r_{12}^2\,r_{23}^2 + 2\cos(2\delta)\,r_{12}\,r_{23}}
$$

이 식에서 $\cos(2\delta)$만 변수이고, 분자를 최대화하고 분모를 최소화하려면 $\cos(2\delta)\,r_{12}\,r_{23}$가 **양수이면서 최대**여야 한다.

$r_{12}\,r_{23}$의 부호에 따라 두 가지 경우가 나뉘다:

**Case 1: $r_{12}\,r_{23} > 0$ (예: $n_1 < n_2 < n_3$)**

$\cos(2\delta) = +1$ 일 때 최대. 즉:

$$
2\delta = 2m\pi \quad \Rightarrow \quad d = \frac{m\lambda}{2n_2\cos\theta_2}, \quad m = 0, 1, 2, \ldots
$$

이것은 **half-wave** 두께 조건이다.

**Case 2: $r_{12}\,r_{23} < 0$ (예: $n_1 < n_2 > n_3$)**

$\cos(2\delta) = -1$ 일 때 최대. 즉:

$$
2\delta = (2m+1)\pi \quad \Rightarrow \quad d = \frac{(2m+1)\lambda}{4n_2\cos\theta_2}, \quad m = 0, 1, 2, \ldots
$$

이것은 **quarter-wave** 두께 조건이다.

**일반적 조건:**

$$
\boxed{\cos(2\delta) = \text{sgn}(r_{12}\,r_{23})}
$$

> [!question] 왜 $\alpha$의 경계값에서 최대인가? — 미분으로 확인
> 
> $\alpha = \cos(2\delta)$로 두고 $f(\alpha) = \frac{A + B\alpha}{C + B\alpha}$ ($A = r_{12}^2+r_{23}^2$, $B = 2r_{12}r_{23}$, $C = 1+r_{12}^2r_{23}^2$)로 쓰면:
> 
> $$
> f'(\alpha) = \frac{B(C-A)}{(C+B\alpha)^2}
> $$
> 
> $C - A = (1-r_{12}^2)(1-r_{23}^2) > 0$ (전반사가 아닌 한 $|r_{12}|<1$, $|r_{23}|<1$)이므로, $f'(\alpha)$의 부호는 $B = 2r_{12}r_{23}$의 부호와 같다.
> 
> 즉 $f'(\alpha)$는 **상수 부호**이므로 $f$는 $\alpha$에 대해 **단조함수**이다. 내부 극값이 존재하지 않으므로, $\alpha \in [-1, +1]$의 경계에서 최대/최소가 결정된다.
> 
> - $r_{12}r_{23} > 0$ → 단조증가 → $\alpha = +1$에서 최대
> - $r_{12}r_{23} < 0$ → 단조감소 → $\alpha = -1$에서 최대
> 
> $|r| < 1$이 성립하는 이유: Fresnel 계수 $r_{12} = \frac{n_1\cos\theta_1 - n_2\cos\theta_2}{n_1\cos\theta_1 + n_2\cos\theta_2}$에서 분자의 절댓값은 두 양수의 차이고 분모는 합이므로 항상 $|r| < 1$이다. (전반사 상황에서는 $\cos\theta_2$가 순허수가 되어 $|r|=1$이 될 수 있지만, 이 문제에서는 3층까지 투과하는 상황이므로 제외.)

**최대 반사율:**

두 경우 모두 $\cos(2\delta)\,r_{12}\,r_{23} = |r_{12}\,r_{23}|$ 이 되므로:

$$
\boxed{R_{\max} = \left(\frac{r_{12} + r_{23}}{1 + r_{12}\,r_{23}}\right)^2}
$$

> [!tip] 물리적 의미
> - $n_1 < n_2 < n_3$ (e.g. 공기→유리→다이아몬드): 두 경계면에서 모두 위상 반전이 일어나므로, half-wave 두께에서 반사파들이 보강 간섭한다.
> - $n_1 < n_2 > n_3$ (e.g. 공기→유리→공기): 한쪽에서만 위상 반전이 일어나므로, quarter-wave 두께에서 반사파들이 보강 간섭한다.

---
