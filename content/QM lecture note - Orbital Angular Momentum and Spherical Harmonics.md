---
title: "QM lecture note - Orbital Angular Momentum and Spherical Harmonics"
date: "2026-05-27"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의
[[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]에서 Schwinger Oscillator Model을 도입하여 두 독립 harmonic oscillator의 ladder operator로 각운동량 대수를 구성하고, Baker-Hausdorff Lemma와 binomial expansion을 거쳐 Wigner's $d$-matrix formula $d^{(j)}_{m'm}(\beta)$의 닫힌 공식을 유도했다.

# 오늘의 핵심

- **Orbital angular momentum**의 position representation: $\mathbf{L} = \mathbf{r} \times \mathbf{p}$를 $x, p$ 연산자로 나타내고, position eigenket에 적용
- $z$축 infinitesimal rotation operator $\mathcal{D}_z(\delta\phi) = 1 - \frac{i}{\hbar}L_z\delta\phi$가 position ket에 작용하는 효과: 고전적 $z$축 회전과 동일
- Spherical coordinate에서 $L_z$, $L_x$, $L_y$, $L_\pm$, $L^2$의 **미분 연산자 표현** 유도
- **Spherical harmonics** $Y_l^m(\theta, \phi)$의 정의와 미분 방정식
- $L_\pm$의 boundary 조건($m = \pm l$)으로부터 $Y_l^{\pm l}(\theta,\phi) = C_l\,e^{\pm il\phi}\sin^l\theta$ 유도
- **반정수 $l$의 배제**: $l = \frac{1}{2}$를 대입하면 $\frac{1}{\sqrt{\sin\theta}}$ singularity 발생
- Ladder operator를 반복 적용하여 일반적인 $Y_l^m(\theta,\phi)$의 공식 유도 (Sakurai 식 3.246)
- Spherical harmonics의 **orthonormality**
- **Spherical harmonics as rotation matrices**: $\ket{\hat{n}} = \mathcal{D}(R)\ket{\hat{z}}$로부터 $\mathcal{D}^{(l)}_{m'0}(\alpha = \phi, \beta = \theta, \gamma = 0) = \sqrt{\frac{4\pi}{2l+1}}\,Y_l^{m'^*}(\theta,\phi)$ 유도

# 필기 내용

## 1. Orbital Angular Momentum의 Position Representation

스핀을 무시할 수 있다면, 입자 하나에 작용하는 angular momentum은 orbital angular momentum $\mathbf{L}$과 같다. $\mathbf{L}$을 wave function (position and momentum)에 작용하는 연산자로 취급하자. 고전역학에서와 똑같이 정의된다:

$$
\mathbf{L} = \mathbf{r} \times \mathbf{p}, \qquad p = -i\hbar\frac{\partial}{\partial x}
$$

$x$와 $p$ 연산자로 $L_x$, $L_y$, $L_z$ 각각을 나타내면, 역시 고전역학과 같다:

$$
L_x = yp_z - zp_y, \qquad L_y = zp_x - xp_z, \qquad L_z = xp_y - yp_x
$$

## 2. Infinitesimal Rotation Operator의 Position Ket에 대한 작용

일단 $z$를 회전축 삼아 $\delta\phi$만큼 회전시키는 infinitesimal operator $\mathcal{D}_z(\delta\phi)$를 고려하자:

$$
\mathcal{D}_z(\delta\phi) = 1 - \frac{i}{\hbar}L_z\,\delta\phi = 1 - \frac{i}{\hbar}\delta\phi(xp_y - yp_x)
$$

$x$, $p$ 형식으로 나타낸 $\mathcal{D}_z(\delta\phi)$를 $\ket{x', y', z'}$에 적용하면 어떻게 되는가?

$p$가 원래 infinitesimal translation operator였음을 잊지 말라:

$$
\mathcal{T}(d\mathbf{x}') = 1 - \frac{i}{\hbar}\mathbf{p}\cdot d\mathbf{x}', \qquad \mathcal{T}(d\mathbf{x}')\ket{\mathbf{x}'} = \ket{\mathbf{x}' + d\mathbf{x}'}
$$

$\mathcal{D}_z(\delta\phi)\ket{x', y', z'}$을 계산하기 위해, $xp_y - yp_x$에서 position operator가 먼저 ket에 적용되도록 수정한다. $[x, p] = i\hbar$, 즉 $xp = i\hbar + px$를 이용:

$$
xp_y - yp_x = i\hbar + p_y x - i\hbar - p_x y = p_y x - p_x y
$$

이를 적용하면:

$$
\mathcal{D}_z(\delta\phi)\ket{x', y', z'} = 1 - \frac{i}{\hbar}\{p_y(\delta\phi\,x') - p_x(\delta\phi\,y')\}\ket{x', y', z'}
$$

$$
= \ket{x' - y'\delta\phi,\; y' + x'\delta\phi,\; z'}
$$

고전적으로 $z$축 회전을 했을 때 일어나는 일과 똑같다!

## 3. Passive Transform과 Spherical Coordinate에서의 $L_z$

임의의 상태 $\ket{\alpha}$에 $\mathcal{D}_z(\delta\phi)$를 적용하고 이를 $x'$, $y'$, $z'$로 나타낸다면:

$$
\bra{x', y', z'}\left(1 - \frac{i}{\hbar}L_z\,\delta\phi\right)\ket{\alpha} = \braket{x' + y'\delta\phi,\; y' - x'\delta\phi,\; z' | \alpha}
$$

일종의 passive transform이 나타난다.

$r$, $\theta$, $\phi$의 좌표로 확인하는 편이 더 명백할 수 있다:

$$
\bra{r, \theta, \phi}\left(1 + \frac{i}{\hbar}L_z\,\delta\phi\right)\ket{\alpha} = \braket{r, \theta, \phi - \delta\phi | \alpha}
$$

$\phi$에 대해 1차 Taylor 전개하면:

$$
= \braket{r, \theta, \phi | \alpha} - \delta\phi\,\frac{\partial}{\partial\phi}\braket{r, \theta, \phi | \alpha}
$$

따라서, spherical coordinate에서 $L_z$를 나타내면, position eigenket $\ket{r, \theta, \phi} = \ket{\mathbf{x}'}$에 대해:

$$
\boxed{\bra{\mathbf{x}'}L_z\ket{\alpha} = -i\hbar\frac{\partial}{\partial\phi}\braket{\mathbf{x}'|\alpha}}
$$

마치 $p_x$가 $x$를 translate하여 $p_x = -i\hbar\frac{\partial}{\partial x}$인 것처럼, $L_z$ 또한 $\phi$를 translate하여 $L_z = -i\hbar\frac{\partial}{\partial\phi}$인 것이다.

> [!note] 차원 분석
> $\frac{\partial}{\partial\phi}$ 연산이 무차원이기에, angular momentum의 차원과 $\hbar$의 차원이 같음을 알 수 있다.

## 4. $L_x$, $L_y$의 Spherical Coordinate 표현

비슷한 방법으로 $L_x$와 $L_y$도 다룰 수 있다.

$x$축 회전에 대해:

$$
\bra{x', y', z'}\left(1 - \frac{i}{\hbar}\delta\phi_x\,L_x\right)\ket{\alpha} = \braket{x',\; y' + z'\delta\phi_x,\; z' - y'\delta\phi_x | \alpha}
$$

$\braket{x',\; y' + z'\delta\phi_x,\; z' - y'\delta\phi_x}$를 spherical coordinate로 나타내면:

$$
\bra{r, \theta, \phi}\left(1 + \frac{i}{\hbar}\delta\phi_x\,L_x\right)\ket{\alpha} = \braket{r,\; \theta + \sin\phi\,\delta\phi_x,\; \phi + \cot\theta\cos\phi\,\delta\phi_x | \alpha}
$$


따라서 $L_x$를 $r$, $\theta$, $\phi$ coordinate로 나타내면:

$$
\boxed{\bra{\mathbf{x}'}L_x\ket{\alpha} = -i\hbar\left(-\sin\phi\frac{\partial}{\partial\theta} - \cot\theta\cos\phi\frac{\partial}{\partial\phi}\right)\braket{\mathbf{x}'|\alpha}}
$$

$L_y$는 이렇게 생겼다:

$$
\boxed{\bra{\mathbf{x}'}L_y\ket{\alpha} = -i\hbar\left(\cos\phi\frac{\partial}{\partial\theta} - \cot\theta\sin\phi\frac{\partial}{\partial\phi}\right)\braket{\mathbf{x}'|\alpha}}
$$

> [!question] $L_x$와 $L_y$에 대한 식을 직관적으로 이해할 수 있을까?
> Cartesian에서 $L_x = y\partial_z - z\partial_y$, $L_y = z\partial_x - x\partial_z$로 출발하여 spherical coordinate로의 chain rule 변환을 수행하면 같은 결과를 얻을 수 있다.

## 5. $L_\pm$와 $L^2$의 Spherical Coordinate 표현

$L_\pm = L_x \pm iL_y$라고 정의한 것에 따라, $L_\pm$를 구해보면 훨씬 간단한 게 나타난다:

$$
\bra{\mathbf{x}'}L_\pm\ket{\alpha} = -i\hbar\left\{(-\sin\phi \pm i\cos\phi)\frac{\partial}{\partial\theta} - \cot\theta(\cos\phi \pm i\sin\phi)\frac{\partial}{\partial\phi}\right\}\braket{\mathbf{x}'|\alpha}
$$

$-\sin\phi \pm i\cos\phi = \pm i\,e^{\pm i\phi}$, $\cos\phi \pm i\sin\phi = e^{\pm i\phi}$를 이용하면:

$$
\boxed{\bra{\mathbf{x}'}L_\pm\ket{\alpha} = -i\hbar\,e^{\pm i\phi}\left(\pm i\frac{\partial}{\partial\theta} - \cot\theta\frac{\partial}{\partial\phi}\right)\braket{\mathbf{x}'|\alpha}}
$$

마지막으로, total angular momentum $L^2 = L_z^2 + \frac{1}{2}(L_+L_- + L_-L_+)$를 계산하면:

$$
\boxed{\bra{\mathbf{x}'}L^2\ket{\alpha} = -\hbar^2\left[\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2} + \frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)\right]\braket{\mathbf{x}'|\alpha}}
$$

$r = 1$일 때 spherical coordinate에서 Laplacian의 angular part와 닮았다! 어쩌면 슈뢰딩거 방정식을 풀고 변수분리를 하다 보면 그렇게 될 것이다.

## 6. Spherical Harmonics (Sakurai 3.6.2)

### 양자수 $n$, $l$, $m$으로 특정되는 상태

양자수 $n$, $l$, $m$으로 특정되는 상태를 $\ket{n, l, m}$이라 볼 수 있다. 이것을 공간 좌표로 나타내면:

$$
\braket{\mathbf{x}'|n, l, m} = R_{nl}(r)\,Y_l^m(\theta, \phi)
$$

potential이 회전에 symmetry를 가져서, 각도 $(\theta, \phi)$에만 dependent한 항 $Y_l^m(\theta, \phi)$만 분리할 수 있다고 가정.

$\theta$와 $\phi$에 대한 정보만을 가진 directional eigenket $\ket{\hat{n}}$을 도입하면:

$$
\braket{\hat{n}|l\,m} = Y_l^m(\theta, \phi)
$$

라고 볼 수 있다.

### $Y_l^m$에 대한 미분 방정식

$\braket{\hat{n}|L_z|l\,m}$이 무엇인지 두 가지로 평가하자:

**방법 ①**: $L_z\ket{l\,m} = m\hbar\ket{l\,m}$이므로:

$$
\braket{\hat{n}|L_z|l\,m} = \hbar m\,\braket{\hat{n}|l\,m} = \hbar m\,Y_l^m(\theta, \phi)
$$

**방법 ②**: 앞서 확인한 것처럼:

$$
\braket{\hat{n}|L_z|l\,m} = -i\hbar\frac{\partial}{\partial\phi}\braket{\hat{n}|l\,m} = -i\hbar\frac{\partial}{\partial\phi}Y_l^m(\theta, \phi)
$$

따라서 $Y_l^m(\theta, \phi)$에 대한 미분 방정식은:

$$
-i\hbar\frac{\partial}{\partial\phi}Y_l^m(\theta, \phi) = m\hbar\,Y_l^m(\theta, \phi)
$$

$$
\left(i\frac{\partial}{\partial\phi} + m\right)Y_l^m = 0
$$

이런 아주 간단한 1차 미방이 나오며, $Y_l^m$에서 $\phi$에 대한 부분은 $e^{im\phi}$여야만 한다:

$$
Y_l^m(\theta, \phi) = e^{im\phi}\,y_l^m(\theta)
$$

여기서 $y_l^m(\theta)$은 아직 모른다.

마찬가지로, $L^2$의 성질 $L^2\ket{l\,m} = l(l+1)\hbar^2\ket{l\,m}$을 이용하면:

$$
-\hbar^2\left[\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2} + \frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)\right]Y_l^m(\theta, \phi) = \hbar^2\,l(l+1)\,Y_l^m(\theta, \phi)
$$

$$
\left[\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2} + \frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right) + l(l+1)\right]Y_l^m(\theta, \phi) = 0
$$

예전에 수소 원자 슈뢰딩거 방정식을 풀 때, $l(l+1)$이 변수 분리 인자로 기능했을 것이다.

### Orthonormality

$Y_l^m(\theta, \phi)$의 orthogonal한 성분을 확인해 보자. $\braket{l'\,m'|l\,m} = \delta_{l'l}\,\delta_{m'm}$임에 따라, completeness relation:

$$
\int d\Omega_{\hat{n}}\,\ket{\hat{n}}\bra{\hat{n}} = \int_0^{2\pi}d\phi\int_0^{\pi}d\theta\;\ket{\hat{n}}\bra{\hat{n}} = \mathbf{1}
$$

을 적용하면:

$$
\int_0^{2\pi}d\phi\int_0^{\pi}d\theta\;\braket{l'\,m'|\hat{n}}\braket{\hat{n}|l\,m} = \int_0^{2\pi}d\phi\int_0^{\pi}d\theta\;Y_l^{m'^*}(\theta,\phi)\,Y_l^m(\theta,\phi) = \delta_{l'l}\,\delta_{m'm}
$$

## 7. $L_\pm$의 Boundary 조건과 $Y_l^{\pm l}$ 유도

$L_\pm$의 특성으로 넘어가자. $m = \pm l$일 때 ($z$-angular momentum이 최대/최소일 때), $L_\pm$를 적용하면 0이 나와야 한다:

$$
\braket{\hat{n}|L_\pm|l,\;m = \pm l} = 0 \qquad \therefore\quad L_\pm\,Y_l^{\pm l} = 0
$$

$$
-i\hbar\,e^{\pm i\phi}\left(\pm i\frac{\partial}{\partial\theta} - \cot\theta\frac{\partial}{\partial\phi}\right)Y_l^{\pm l} = 0
$$

여기에 $Y_l^{\pm l} = e^{\pm il\phi}\,y_l^{\pm l}(\theta)$를 대입하면:

$$
\pm i\,e^{\pm i l\phi}\frac{\partial}{\partial\theta}y_l^{\pm l}(\theta) - \cot\theta\,(\pm il)\,e^{\pm il\phi}\,y_l^{\pm l}(\theta) = 0
$$

정리하면:

$$
\left(\frac{\partial}{\partial\theta} - l\cot\theta\right)y_l^{\pm l}(\theta) = \left(\frac{\partial}{\partial\theta} - l\frac{\cos\theta}{\sin\theta}\right)y_l^{\pm l}(\theta) = 0
$$

$\frac{\partial}{\partial\theta}$가 $\sin\theta$를 하나 없애는 대신 $\cos\theta$를 만들고, 거기에 $l$이 곱해진다는 점에서:

$$
y_l^{\pm l}(\theta) = C_l\,\sin^l\theta
$$

이때 $C_l$은 계수.

최종적으로:

$$
Y_l^{\pm l}(\theta, \phi) = e^{\pm il\phi}\,C_l\,\sin^l\theta
$$

## 8. 반정수 $l$의 배제

이 식을 이용하여, $L^2$, $L_z$의 eigenstate는 **반정수 $l$을 가질 수 없음**을 확인할 수 있다.

$l = \frac{1}{2}$, $m = \frac{1}{2}$을 대입하면:

$$
Y_{1/2}^{1/2}(\theta, \phi) = C_{1/2}\,e^{i\phi/2}\sqrt{\sin\theta}
$$

$l = \frac{1}{2}$, $m = -\frac{1}{2}$을 대입하면:

$$
Y_{1/2}^{-1/2}(\theta, \phi) = C'_{1/2}\,e^{-i\phi/2}\sqrt{\sin\theta}
$$

$Y_{1/2}^{1/2}$에 $L_-$를 취해서 $Y_{1/2}^{-1/2}$가 나오는지 확인해 본다:

$$
\braket{\hat{n}|L_-|\tfrac{1}{2},\tfrac{1}{2}} = -i\hbar\,e^{-i\phi}\left(-i\frac{\partial}{\partial\theta} - \cot\theta\frac{\partial}{\partial\phi}\right)\left(C_{1/2}\,e^{i\phi/2}\sqrt{\sin\theta}\right)
$$

$$
= -C_{1/2}\,e^{-i\phi/2}\,\frac{\cos\theta}{\sqrt{\sin\theta}}
$$

이것은 $Y_{1/2}^{-1/2} \propto e^{-i\phi/2}\sqrt{\sin\theta}$와 **형태가 맞지 않다.**

또한 $\frac{1}{\sqrt{\sin\theta}}$ 때문에 $\theta = 0, \pi$에서 **singularity**를 가진다.

따라서 $l = \frac{1}{2}$ (반정수)인 spherical harmonics는 물리적으로 허용되지 않는다.

> [!question] J, L, S, 이 셋의 관계는 무엇인가?

> [!note] AI 답변
> **$\mathbf{J}$가 가장 일반적인 개념이고, $\mathbf{L}$과 $\mathbf{S}$는 그 특수한 경우이다.**
>
> $\mathbf{J}$: angular momentum commutation relation $[J_i, J_j] = i\hbar\epsilon_{ijk}J_k$를 만족하는 **모든** operator를 통칭하는 추상적인 틀이다. 이 대수 구조만으로 eigenvalue spectrum, ladder operator 등을 유도할 수 있으며, $j$가 정수뿐 아니라 반정수도 될 수 있다.
>
> $\mathbf{L} = \mathbf{r} \times \mathbf{p}$: orbital angular momentum. 공간 좌표에서의 운동으로 정의되므로 position basis로 표현 가능하고, wave function의 단일값 조건에 의해 $l$은 **정수만** 허용된다.
>
> $\mathbf{S}$: spin angular momentum. 입자의 내재적 성질로, 공간 좌표와 무관하다. 따라서 단일값 조건에 묶이지 않아 $s = \frac{1}{2}$ 같은 반정수가 가능하다.
>
> 전체 구조는 $\mathbf{J} = \mathbf{L} + \mathbf{S}$이며, 세 개 모두 같은 commutation relation을 만족한다.

## 9. Ladder Operator를 이용한 일반적 $Y_l^m$ 유도

적분을 이용해 normalization을 진행하여 $C_l$을 구할 수 있다. 직접 계산하지 않고 교과서 내용을 빌리면:

$$
C_l = \frac{(-1)^l}{2^l\,l!}\sqrt{\frac{(2l+1)(2l)!}{4\pi}}
$$

$Y_l^l$을 알았으니 이제 ladder operator를 사용해 모든 상태를 구할 수 있다. 이 연속된 과정의 일반 식을 구하자면:

$$
L_-\ket{l\,m} = \hbar\sqrt{(l+m)(l-m+1)}\;\ket{l,\;m-1}
$$

$$
Y_l^{m-1} = \frac{\braket{\hat{n}|L_-|l\,m}}{\hbar\sqrt{(l+m)(l-m+1)}} = \frac{1}{\sqrt{(l+m)(l-m+1)}}\,e^{-i\phi}\left(-\frac{\partial}{\partial\theta} + i\cot\theta\frac{\partial}{\partial\phi}\right)Y_l^m(\theta, \phi)
$$

### $L_-$의 반복 적용에 대한 일반 공식

$Y_l^{m'} = e^{im'\phi}\,f(\theta)$로 쓰고 $L_-$를 적용하면:

$$
(L_-)\,e^{im'\phi}\,f(\theta) = -i\hbar\,e^{-i\phi}\left(-i\frac{\partial}{\partial\theta} - \cot\theta\frac{\partial}{\partial\phi}\right)e^{im'\phi}\,f(\theta)
$$

$$
= -\hbar\,e^{i(m'-1)\phi}\left(\frac{d}{d\theta} + m'\cot\theta\right)f(\theta)
$$

교수님 판서에 따르면, 마지막 줄은 다음과 같이 변환된다:

$$
-\hbar\,e^{i(m'-1)\phi}\left(\frac{d}{d\theta} + m'\cot\theta\right)f(\theta) = \hbar\,e^{i(m'-1)\phi}\,(\sin\theta)^{1-m'}\,\frac{d}{d\cos\theta}\left[f(\theta)\,\sin^{m'}(\theta)\right]
$$

> [!warning] 교수님 판서 오류 확인
> 교수님께서는 $\sin\theta$의 지수에 $l$을 쓰셨는데, 검산 결과 **$1$이 맞다** ($l$이 아님).
> 
> 검산: $\frac{d}{d\cos\theta} = -\frac{1}{\sin\theta}\frac{d}{d\theta}$를 적용하면,
> 
> $$
> (\sin\theta)^{1-m'}\,\frac{d}{d\cos\theta}\left[f(\theta)\,\sin^{m'}(\theta)\right] = -(\sin\theta)^{-m'}\frac{d}{d\theta}\left[f(\theta)\sin^{m'}(\theta)\right]
> $$
> 
> $$
> = -\sin^{-m'}(\theta)\left(m'\cos\theta\,\sin^{m'-1}(\theta)\,f(\theta) + \sin^{m'}(\theta)\frac{df}{d\theta}\right)
> $$
> 
> $$
> = -\left(m'\cot(\theta)\,f(\theta) + \frac{df}{d\theta}\right)
> $$
> 
> 이것은 $-\left(\frac{d}{d\theta} + m'\cot\theta\right)f(\theta)$와 일치한다. ✓

$Y_l^0$에 $L_-$를 $k$번 적용하면? 은근 유추하기 어렵지만, 일반적인 결과는:

$$
(L_-)^k\,e^{im'\phi}\,f(\theta) = \hbar^k\,e^{i(m'-k)\phi}\,\sin^{k-m'}(\theta)\left(\frac{d}{d\cos\theta}\right)^k\left[f(\theta)\,\sin^{m'}(\theta)\right]
$$

### Sakurai 식 3.246 유도

$Y_l^m(\theta, \phi) = \sqrt{\frac{(l+m)!}{(2l)!\,(l-m)!}}\left(\frac{L_-}{\hbar}\right)^{l-m}Y_l^l(\theta, \phi)$에다가, $(L_-/\hbar)^{l-m}\,Y_l^l(\theta, \phi)$에 대한 명시적인 식을 넣기 위해 지금까지 풀었다.

$Y_l^l(\theta, \phi) = e^{il\phi}\,C_l\,\sin^l\theta$를 위 식에 대입한다. $k = l - m$, $m' = l$, $f(\theta) = C_l\,\sin^l\theta$임에 유의한다:

$$
\left(\frac{L_-}{\hbar}\right)^{l-m}Y_l^l(\theta, \phi) = C_l\,e^{im\phi}\,\sin^{-m}(\theta)\left(\frac{d}{d\cos\theta}\right)^{l-m}\left[\sin^{2l}(\theta)\right]
$$

$C_l = \frac{(-1)^l}{2^l\,l!}\sqrt{\frac{(2l+1)(2l)!}{4\pi}}$를 이용하면, 정말 식 (3.246)이 나오는 걸 확인할 수 있다:

$$
\boxed{Y_l^m(\theta, \phi) = \frac{(-1)^l}{2^l\,l!}\sqrt{\frac{(2l+1)}{4\pi}\frac{(l+m)!}{(l-m)!}}\;e^{im\phi}\;\frac{1}{\sin^m\theta}\;\frac{d^{l-m}}{d(\cos\theta)^{l-m}}(\sin\theta)^{2l}}
$$

그리고 음의 $m$에 대해:

$$
Y_l^{-m}(\theta, \phi) = (-1)^m\left[Y_l^m(\theta, \phi)\right]^*
$$

$m = 0$일 때:

$$
Y_l^0 = \sqrt{\frac{2l+1}{4\pi}}\,P_l(\cos\theta)
$$

> [!note] 교수님의 $\mathbf{J}$를 이용한 유도
> 교수님께서는 이와 똑같은 내용을 $\mathbf{J}$를 이용해 유도했다:
> 
> $$
> J_\pm\ket{j,m} = \hbar\sqrt{(j \mp m)(j \pm m + 1)}\;\ket{j, m \pm 1}
> $$
> 
> 천장 상태 $\ket{j,j}$에서 $\ket{j,m}$이 될 때까지 $J_-$를 $j - m$번 적용하자:
> 
> $$
> (J_-)^{j-m}\ket{j,j} = \hbar^{j-m}\sqrt{\frac{(2j)!\,(j-m)!}{(j+m)!}}\;\ket{j,m}
> $$
> 
> $$
> \therefore\quad \ket{j,m} = \sqrt{\frac{(j+m)!}{(2j)!\,(j-m)!}}\left(\frac{J_-}{\hbar}\right)^{j-m}\ket{j,j}
> $$
> 
> $L$에 대한 식도 같은 형태이다:
> 
> $$
> Y_l^m(\theta, \phi) = \sqrt{\frac{(l+m)!}{(2l)!\,(l-m)!}}\left(\frac{L_-}{\hbar}\right)^{l-m}Y_l^l(\theta, \phi)
> $$

## 10. Spherical Harmonics as Rotation Matrices (Sakurai 3.6.3)

우리는 앞서 정의한 directional eigenket $\ket{\hat{n}}$을 $\ket{\hat{z}}$를 회전시켜서 얻고 싶다:

$$
\ket{\hat{n}} = \mathcal{D}(R)\ket{\hat{z}}
$$

$\ket{\hat{n}}$이 $(\theta, \phi)$에 해당한다고 치자. $\hat{z}$축에 대해 $\theta$만큼 회전하고, $\hat{z}$축에 대해 $\phi$만큼 회전하는 과정이 $\mathcal{D}(R)$이다:

$$
\mathcal{D}(R) = R_z(\phi)\,R_y(\theta)
$$

오일러 각으로 나타내면, $\hat{z}$축에 대해 $\phi$만큼 회전하고, $\hat{y}'$축에 대해 $\theta$만큼 회전하는 과정:

$$
\alpha = \phi, \quad \beta = \theta, \quad \gamma = 0
$$

$$
\mathcal{D}(R) = \mathcal{D}(\alpha = \phi,\;\beta = \theta,\;\gamma = 0)
$$

### $\mathcal{D}(R)$의 행렬 표현

항등행렬 $\mathbb{1} = \sum_{l,m}\ket{l,m}\bra{l,m}$을 집어넣자:

$$
\ket{\hat{n}} = \sum_{l,m}\mathcal{D}(R)\ket{l,m}\braket{l,m|\hat{z}}
$$

양 변에 $\bra{l',m'}$을 적용하면, $\mathcal{D}(R)$의 행렬 표현을 얻는다:

$$
\braket{l',m'|\hat{n}} = \sum_m \braket{l',m'|\mathcal{D}(R)|l,m}\braket{l,m|\hat{z}}
$$

$$
= \sum_m \mathcal{D}^{(l)}_{m'm}(\alpha = \phi,\;\beta = \theta,\;\gamma = 0)\,\braket{l,m|\hat{z}}
$$

### $\braket{l,m|\hat{z}}$의 계산

$\ket{\hat{z}}$는 $\theta = 0$에 해당한다. 따라서:

$$
\braket{l,m|\hat{z}} = Y_l^{m^*}(\theta = 0,\;\phi = \text{undetermined})
$$

$Y_l^m(\theta = 0)$은 $m \neq 0$일 때 0이다. $L_z\ket{\hat{z}} = (yp_x - xp_y)\ket{\hat{z}} = 0\ket{\hat{z}}$에서도 알 수 있듯이:

$$
\braket{l,m|\hat{z}} = Y_l^{m^*}(\theta = 0,\;\phi = \text{undetermined})\,\delta_{m0}
$$

$$
= \sqrt{\frac{2l+1}{4\pi}}\,P_l(\cos\theta)\bigg|_{\theta = 0}\,\delta_{m0} = \sqrt{\frac{2l+1}{4\pi}}\,P_l(1)\,\delta_{m0} = \sqrt{\frac{2l+1}{4\pi}}\,\delta_{m0}
$$

### 최종 결과

원래 식에 대입하면:

$$
Y_l^{m'^*}(\theta, \phi) = \sqrt{\frac{2l+1}{4\pi}}\,\mathcal{D}^{(l)}_{m'0}(\alpha = \phi,\;\beta = \theta,\;\gamma = 0)
$$

$$
\boxed{\mathcal{D}^{(l)}_{m'0}(\alpha = \phi,\;\beta = \theta,\;\gamma = 0) = \sqrt{\frac{4\pi}{2l+1}}\,Y_l^{m'^*}(\theta, \phi)}
$$

특히 $m = 0$일 때:

$$
d^{(l)}_{00}(\beta)\bigg|_{\beta = \theta} = P_l(\cos\theta)
$$

# 궁금한 내용

> [!question] $L_x$와 $L_y$에 대한 식을 직관적으로 이해할 수 있을까?
> $L_x = -i\hbar(-\sin\phi\frac{\partial}{\partial\theta} - \cot\theta\cos\phi\frac{\partial}{\partial\phi})$, $L_y = -i\hbar(\cos\phi\frac{\partial}{\partial\theta} - \cot\theta\sin\phi\frac{\partial}{\partial\phi})$가 나오는 과정은 coordinate transformation 말고도 직관적으로 이해할 수 있는 방법이 있는가?

> [!question] Spherical harmonics의 물리적 의미
> $Y_l^m(\theta, \phi)$는 $\ket{l,m}$ 상태의 "angular wave function"인데, $l$이 커질수록 angular distribution이 어떻게 변하는지, 고전적 극한과 어떻게 연결되는가?

# AI의 보충 설명



# 연관 학습 노트

- [[QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix]]
- [[QM lecture note - Euler Rotation and Angular Momentum Eigenvalues]]
- [[QM lecture note - Rotation and Angular Momentum]]

# 다음 강의



# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.6

# 원본 필기 이미지

![[QM_13thweek_2.pdf]]