---
title: 양자 HW2 풀이
date: 2026-09-30
subject: quantum mechanics
tags:
  - study
  - homework
  - quantum_mechanics
class: study_homework
draft: true
---
> [!error] 비공식 자료, 책임 안 짐
> 이것은 [[양자물리 (학부용, Griffiths)]] HW2를 TA가 푼 풀이입니다.
> 개인적인 풀이가 섞여 있고, 교수님께서 검토하신 자료가 **아니므로,** 정답을 보장하지 않습니다.

> [!error] HW 2 due (10.2. 23:59) 이후에 공개처리
> 그 이전에는 publish하면 안 된다. 
> 부분 점수 기준까지 기록한 다음에 공개하도록 하자. 


# Problem 7.9

둘레 $L$인 원 위를 자유롭게 움직이는 입자 (bead on a ring).

## (a) Stationary states

Schrödinger equation $-\frac{\hbar^2}{2m}\psi'' = E\psi$의 해를 $\psi = Ae^{ikx}$, $k^2 = 2mE/\hbar^2$로 두고 periodic boundary condition $\psi(x+L) = \psi(x)$를 걸면

$$
e^{ikL} = 1
\quad\Rightarrow\quad
k_n = \frac{2\pi n}{L},
\qquad n = 0, \pm1, \pm2, \dots
\tag{1}
$$

$$
\psi_n(x) = \frac{1}{\sqrt L}e^{2\pi inx/L},
\qquad
E_n = \frac{\hbar^2k_n^2}{2m} = \frac{2}{m}\left(\frac{n\pi\hbar}{L}\right)^2
\tag{2}
$$

$E_n$이 $n^2$에만 의존하므로 $n = 0$을 제외하면 $\psi_n$과 $\psi_{-n}$이 doubly degenerate하다.



## (b) First-order correction (Eq. 7.33)

Degenerate pair $\psi_a^0 = \psi_n$, $\psi_b^0 = \psi_{-n}$에 대해 $\mathsf{W}$를 구해야 한다. 일반적인 matrix element는

$$
\bra{\psi_m}H'\ket{\psi_{n'}} = -\frac{V_0}{L}\int_{-L/2}^{L/2} e^{-x^2/a^2}e^{2\pi i(n'-m)x/L}\,dx
\approx -\frac{V_0}{L}\int_{-\infty}^{\infty} e^{-x^2/a^2}e^{2\pi i(n'-m)x/L}\,dx
\tag{3}
$$

$a \ll L$이라 적분 구간을 $\pm\infty$로 늘렸다. Gaussian Fourier integral

$$
\int_{-\infty}^{\infty} e^{-x^2/a^2}e^{-ikx}\,dx = \sqrt\pi\, a\, e^{-k^2a^2/4}
\tag{4}
$$

을 쓰면

$$
\bra{\psi_m}H'\ket{\psi_{n'}} = -\frac{\sqrt\pi\, aV_0}{L}\exp\left[-\frac{\pi^2a^2(n'-m)^2}{L^2}\right]
\tag{5}
$$

따라서 $\kappa \equiv e^{-4\pi^2n^2a^2/L^2}$로 두면

$$
W_{aa} = W_{bb} = -\frac{\sqrt\pi\, aV_0}{L},
\qquad
W_{ab} = W_{ba} = -\frac{\sqrt\pi\, aV_0}{L}\kappa
\tag{6}
$$

Eq. 7.33에 넣으면 $E^1_\pm = W_{aa} \pm |W_{ab}|$이므로

$$
\boxed{\ E^1_\pm = -\frac{\sqrt\pi\, aV_0}{L}\left(1 \mp e^{-4\pi^2n^2a^2/L^2}\right)\ }
\tag{7}
$$



## (c) Good states

$$
\mathsf{W} = -\frac{\sqrt\pi\, aV_0}{L}\begin{pmatrix} 1 & \kappa \\ \kappa & 1 \end{pmatrix}
\tag{8}
$$

의 eigenvector는 $(1, \pm1)/\sqrt2$이므로 good states는

$$
\psi_n^{g\pm} = \frac{1}{\sqrt2}\left(\psi_n \pm \psi_{-n}\right),
\qquad
\psi_n^{g+} = \sqrt{\frac2L}\cos\frac{2\pi nx}{L},
\quad
\psi_n^{g-} = i\sqrt{\frac2L}\sin\frac{2\pi nx}{L}
\tag{9}
$$

Eq. 7.9로 확인하면 ($W_{ab}$가 real이므로)

$$
\bra{\psi_n^{g\pm}}H'\ket{\psi_n^{g\pm}} = \frac12\left(W_{aa} + W_{bb} \pm 2W_{ab}\right) = -\frac{\sqrt\pi\, aV_0}{L}\left(1 \pm \kappa\right)
\tag{10}
$$

로 (7)의 두 값과 일치한다. ($\psi^{g+}$가 (7)의 $E^1_-$, $\psi^{g-}$가 $E^1_+$에 대응한다.)

물리적 해석: cosine state는 dimple이 있는 $x = 0$에서 최대라서 크게 내려가고, sine state는 $x = 0$에 node가 있어서 거의 영향을 받지 않는다. $na \ll L$이면 $\kappa \approx 1$이라 $E^{g+} \approx -2\sqrt\pi\, aV_0/L$, $E^{g-} \approx 0$.



## (d) Hermitian operator $A$

**Parity operator** $\Pi$: $\Pi f(x) = f(-x)$.

- $\Pi$는 hermitian이다.
- $H^0 = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$는 $x \to -x$에 대해 불변이므로 $[\Pi, H^0] = 0$.
- $H' = -V_0e^{-x^2/a^2}$는 even function이므로 $[\Pi, H'] = 0$.

$\Pi\psi_n(x) = \psi_n(-x) = \psi_{-n}(x)$이므로

$$
\Pi\psi_n^{g\pm} = \frac{1}{\sqrt2}\left(\psi_{-n} \pm \psi_n\right) = \pm\psi_n^{g\pm}
\tag{11}
$$

Eigenvalue $\pm1$이 서로 다르므로 theorem의 조건을 만족하고, $H^0$와 $\Pi$의 simultaneous eigenstate가 정확히 (c)의 good states다.



# Problem 7.11

Infinite cubical well (한 변 $a$)에 delta function bump $H' = a^3V_0\,\delta(x-\tfrac a4)\,\delta(y-\tfrac a2)\,\delta(z-\tfrac{3a}{4})$.

## Setup

$$
\psi_{n_xn_yn_z} = \left(\frac2a\right)^{3/2}\sin\frac{n_x\pi x}{a}\sin\frac{n_y\pi y}{a}\sin\frac{n_z\pi z}{a},
\qquad
E^0 = \frac{\pi^2\hbar^2}{2ma^2}\left(n_x^2 + n_y^2 + n_z^2\right)
\tag{12}
$$

Delta function이므로 matrix element는 $\mathbf{r}_0 = (a/4,\ a/2,\ 3a/4)$에서의 값의 곱이다.

$$
\bra{\psi_i}H'\ket{\psi_j} = a^3V_0\,\psi_i(\mathbf{r}_0)\,\psi_j(\mathbf{r}_0)
\tag{13}
$$

## Ground state $(1,1,1)$

$$
E^1_{111} = a^3V_0\left(\frac2a\right)^3\sin^2\frac\pi4\,\sin^2\frac\pi2\,\sin^2\frac{3\pi}{4} = 8V_0\cdot\frac12\cdot1\cdot\frac12 = 2V_0
\tag{14}
$$



## First excited states $(2,1,1),\ (1,2,1),\ (1,1,2)$

Triply degenerate ($E^0 = 3\pi^2\hbar^2/ma^2$)이므로 $3\times3$ $\mathsf{W}$를 대각화해야 한다. $\mathbf{r}_0$에서의 값은

$$
\psi_{211}(\mathbf{r}_0) = \left(\frac2a\right)^{3/2}\frac{1}{\sqrt2},
\qquad
\psi_{121}(\mathbf{r}_0) = 0,
\qquad
\psi_{112}(\mathbf{r}_0) = -\left(\frac2a\right)^{3/2}\frac{1}{\sqrt2}
\tag{15}
$$

($\sin\pi = 0$, $\sin\frac{3\pi}{2} = -1$에 주의.) 따라서 basis $(\psi_{211}, \psi_{121}, \psi_{112})$에서

$$
\mathsf{W} = 4V_0\begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}
\tag{16}
$$

Eigenvalue와 good states:

$$
\boxed{\ E^1 = 0\ \left(\psi_{121}\right),\quad 0\ \left(\tfrac{1}{\sqrt2}(\psi_{211} + \psi_{112})\right),\quad 8V_0\ \left(\tfrac{1}{\sqrt2}(\psi_{211} - \psi_{112})\right)\ }
\tag{17}
$$

> [!failure] 풀다가 실수함
> 손풀이의 diagonal element $4V_0,\ 0,\ 4V_0$는 맞지만, **degenerate state에 nondegenerate 공식을 쓴** 것이 문제다. $W_{13} = W_{31} = a^3V_0\,\psi_{211}(\mathbf{r}_0)\psi_{112}(\mathbf{r}_0) = -4V_0 \neq 0$이므로 $\psi_{211}$, $\psi_{112}$는 good states가 아니다. 정답은 $0,\ 0,\ 8V_0$.
> Trace는 basis와 무관해서 $4 + 0 + 4 = 0 + 0 + 8$로 합은 우연히 같다. 채점할 때 학생들이 같은 실수를 할 가능성이 높은 문제다.

> [!tip] Delta function perturbation의 일반적인 구조
> (13)에 의해 $\mathsf{W} = a^3V_0\,\mathbf{v}\mathbf{v}^T$ ($v_i = \psi_i(\mathbf{r}_0)$)로 **rank 1**이다. 그래서 nonzero eigenvalue는 항상 하나뿐이고 그 값은 $a^3V_0|\mathbf{v}|^2$이다. 나머지 good states는 모두 $\mathbf{r}_0$에서 0이 되는 combination이라 delta function을 "느끼지 못한다".

# Problem 7.12

$$
\mathsf{H} = V_0\begin{pmatrix} 1-\epsilon & 0 & 0 \\ 0 & 1 & \epsilon \\ 0 & \epsilon & 2 \end{pmatrix}
= V_0\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
+ \epsilon V_0\begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
= \mathsf{H}^0 + \mathsf{H}'
\tag{18}
$$

## (a) Unperturbed

$\ket{1},\ \ket{2},\ \ket{3}$ = standard basis, eigenvalue $V_0,\ V_0,\ 2V_0$. $\ket{1}$과 $\ket{2}$가 degenerate.



## (b) Exact eigenvalues

$$
\det(\mathsf{H} - E) = (V_0(1-\epsilon) - E)\left[(V_0 - E)(2V_0 - E) - \epsilon^2V_0^2\right] = 0
\tag{19}
$$

$$
E_1 = V_0(1-\epsilon),
\qquad
E_\pm = \frac{V_0}{2}\left(3 \pm \sqrt{1 + 4\epsilon^2}\right)
\tag{20}
$$

$\sqrt{1+x} \approx 1 + \frac x2 - \frac{x^2}{8}$에 $x = 4\epsilon^2$을 넣으면 $\sqrt{1+4\epsilon^2} \approx 1 + 2\epsilon^2$이므로

$$
E_1 = V_0(1-\epsilon)\ \text{(exact)},
\qquad
E_+ \approx V_0\left(2 + \epsilon^2\right)\ \text{(from }\ket3\text{)},
\qquad
E_- \approx V_0\left(1 - \epsilon^2\right)\ \text{(from }\ket2\text{)}
\tag{21}
$$



## (c) Nondegenerate PT for $\ket3$

$$
E_3^1 = \bra3 \mathsf{H}'\ket3 = 0
\tag{22}
$$

$$
E_3^2 = \sum_{m\neq3}\frac{\left|\bra m\mathsf{H}'\ket3\right|^2}{E_3^0 - E_m^0} = \frac{0}{2V_0 - V_0} + \frac{(\epsilon V_0)^2}{2V_0 - V_0} = \epsilon^2V_0
\tag{23}
$$

$E_3 \approx V_0(2 + \epsilon^2)$로 $E_+$와 second order까지 일치한다.

## (d) Degenerate PT for $\{\ket1, \ket2\}$

$$
\mathsf{W} = \begin{pmatrix} \bra1\mathsf{H}'\ket1 & \bra1\mathsf{H}'\ket2 \\ \bra2\mathsf{H}'\ket1 & \bra2\mathsf{H}'\ket2 \end{pmatrix} = \begin{pmatrix} -\epsilon V_0 & 0 \\ 0 & 0 \end{pmatrix}
\tag{24}
$$

이미 diagonal이므로 $E_1 \approx V_0(1-\epsilon)$, $E_2 \approx V_0$. $E_1$은 exact와 정확히 같고, $E_- = V_0(1-\epsilon^2)$은 first order까지 $V_0$로 일치한다. $E_-$의 $-\epsilon^2V_0$는 $\ket2$–$\ket3$ coupling에서 오는 second-order 효과로, (c)의 $+\epsilon^2V_0$와 크기가 같고 부호가 반대다 (level repulsion).

> [!success] 검산: 정답

# Problem 7.17

1D harmonic oscillator의 lowest-order relativistic correction.

## 풀이 (ladder operator, Problem 2.12의 technique)

$H'_r = -\dfrac{p^4}{8m^3c^2}$이고 1D oscillator는 nondegenerate이므로 $E^1_r = -\dfrac{1}{8m^3c^2}\bra{n}p^4\ket{n}$. Momentum을 ladder operator로 쓰면

$$
p = i\sqrt{\frac{\hbar m\omega}{2}}\left(a_+ - a_-\right)
\quad\Rightarrow\quad
p^4 = \left(\frac{\hbar m\omega}{2}\right)^2\left(a_+ - a_-\right)^4
\tag{25}
$$

$(a_+ - a_-)^4$을 전개했을 때 diagonal에 기여하는 것은 $a_+$ 두 개, $a_-$ 두 개인 항뿐이고, 부호는 $(-1)^2 = +1$이다. $a_+\ket n = \sqrt{n+1}\ket{n+1}$, $a_-\ket n = \sqrt n\ket{n-1}$을 써서 여섯 가지 순서를 계산하면 (오른쪽부터 작용)

| 순서 | $\bra n\cdots\ket n$ |
| --- | --- |
| $a_-a_-a_+a_+$ | $(n+1)(n+2)$ |
| $a_-a_+a_-a_+$ | $(n+1)^2$ |
| $a_-a_+a_+a_-$ | $n(n+1)$ |
| $a_+a_-a_-a_+$ | $n(n+1)$ |
| $a_+a_-a_+a_-$ | $n^2$ |
| $a_+a_+a_-a_-$ | $n(n-1)$ |

합은 $6n^2 + 6n + 3$이다. 따라서

$$
\bra n p^4\ket n = \left(\frac{\hbar m\omega}{2}\right)^2 \cdot 3\left(2n^2 + 2n + 1\right)
\tag{26}
$$

$$
\boxed{\ E^1_r = -\frac{3}{32}\frac{(\hbar\omega)^2}{mc^2}\left(2n^2 + 2n + 1\right) = -\frac{3}{16mc^2}\left[\left(E_n^0\right)^2 + \frac{(\hbar\omega)^2}{4}\right]\ }
\tag{27}
$$

## 교차 검증 ($p^2 = 2m(E-V)$ 트릭)

7.3.1과 같이 $E^1_r = -\frac{1}{2mc^2}\left[E^2 - 2E\langle V\rangle + \langle V^2\rangle\right]$. Oscillator에서는 virial theorem에 의해 $\langle V\rangle = E/2$라서 앞의 두 항이 상쇄되고 $E^1_r = -\langle V^2\rangle/2mc^2$만 남는다. $\langle x^4\rangle = \left(\frac{\hbar}{2m\omega}\right)^2(6n^2 + 6n + 3)$이므로

$$
\langle V^2\rangle = \frac14 m^2\omega^4\langle x^4\rangle = \frac{3}{16}(\hbar\omega)^2\left(2n^2 + 2n + 1\right)
\tag{28}
$$

로 (27)과 일치한다. ($6n^2 + 6n + 3$은 $n = 0,\dots,4$에서 $12\times12$ ladder matrix로 직접 확인함.)

# Problem 7.19
![[Pasted image 20260930164511.png]]

$\mathbf{L}$, $\mathbf{S}$는 각각 $[L_i, L_j] = i\hbar\epsilon_{ijk}L_k$, $[S_i, S_j] = i\hbar\epsilon_{ijk}S_k$를 만족하고 서로는 commute한다. 
$\mathbf{L}\cdot\mathbf{S} = \sum_i L_iS_i$.
그리고 $L^2$는 모든 $L_i$와 commute한다. 마찬가지로 $S^2$는 모든 $S_i$와 commute한다. 

1학기에 배운 commutator의 성질을 이용하자. $[]$안에 있는 스칼라는 밖으로 뺄 수 있다.


**(a)** $x$ 성분:


$$
[\mathbf{L}\cdot\mathbf{S}, L_x] = \sum_i [L_i, L_x]S_i = [L_y, L_x]S_y + [L_z, L_x]S_z = -i\hbar L_zS_y + i\hbar L_yS_z = i\hbar\left(\mathbf{L}\times\mathbf{S}\right)_x
\tag{29}
$$

$y$, $z$도 cyclic permutation으로 같으므로

$$
\boxed{\ [\mathbf{L}\cdot\mathbf{S}, \mathbf{L}] = i\hbar\left(\mathbf{L}\times\mathbf{S}\right)\ }
\tag{30}
$$

굳이 하고 싶다면, 레비치비타를 이용해서 한번에 general하게 나타낼 수 있다. 


**(b)** 같은 계산을 $\mathbf{S}$에 대해 하면

$$
[\mathbf{L}\cdot\mathbf{S}, S_x] = \sum_i L_i[S_i, S_x] = -i\hbar L_yS_z + i\hbar L_zS_y = i\hbar\left(\mathbf{S}\times\mathbf{L}\right)_x
\quad\Rightarrow\quad
\boxed{\ [\mathbf{L}\cdot\mathbf{S}, \mathbf{S}] = i\hbar\left(\mathbf{S}\times\mathbf{L}\right)\ }
\tag{31}
$$

($\mathbf{L}$과 $\mathbf{S}$가 commute하므로 $\mathbf{S}\times\mathbf{L} = -\mathbf{L}\times\mathbf{S}$로 순서 문제가 없다.)
$\boxed{\ [\mathbf{L}\cdot\mathbf{S}, \mathbf{S}] = [\mathbf{S}\cdot\mathbf{L}, \mathbf{S}]= i\hbar\left(\mathbf{S}\times\mathbf{L}\right)\ }$

**(c)** (a) + (b):

$$
[\mathbf{L}\cdot\mathbf{S}, \mathbf{J}] = i\hbar\left(\mathbf{L}\times\mathbf{S} + \mathbf{S}\times\mathbf{L}\right) = 0
\tag{32}
$$


**(d), (e)** $[L_i, L^2] = 0$, $[S_i, S^2] = 0$이고 $\mathbf{L}$과 $\mathbf{S}$는 commute하므로

$$
[\mathbf{L}\cdot\mathbf{S}, L^2] = \sum_i [L_i, L^2]S_i = 0,
\qquad
[\mathbf{L}\cdot\mathbf{S}, S^2] = \sum_i L_i[S_i, S^2] = 0
\tag{33}
$$

**(f)** $J^2 = L^2 + S^2 + 2\mathbf{L}\cdot\mathbf{S}$이므로 (d), (e)와 자기 자신과의 commutator에 의해

$$
[\mathbf{L}\cdot\mathbf{S}, J^2] = 0
\tag{34}
$$

**의미**: $H'_{so} \propto \mathbf{L}\cdot\mathbf{S}$는 $\mathbf{L}$, $\mathbf{S}$와 commute하지 않지만 $\mathbf{J}$, $L^2$, $S^2$, $J^2$와는 commute한다. 그래서 $\ket{n\,\ell\,s\,j\,m_j}$가 good states다 ([[양자 필기 - Spin-Orbit Coupling and Fine Structure]]).

# Problem 7.20
![[Pasted image 20260930165734.png]]
주어진 식은

$$
E_r^1 = -\frac{(E_n)^2}{2mc^2}\left[\frac{4n}{\ell+1/2} - 3\right],
\qquad
E_{so}^1 = \frac{(E_n)^2}{mc^2}\left\{\frac{n\left[j(j+1) - \ell(\ell+1) - 3/4\right]}{\ell(\ell+1/2)(\ell+1)}\right\}
\tag{35}
$$

이걸 더해서 
$$
\boxed{\ E_{fs}^1 = \frac{(E_n)^2}{2mc^2}\left(3 - \frac{4n}{j+1/2}\right)\ }
$$
이걸 만들면 된다. 
업스핀일 때와 다운스핀일 때, 두 가지 경우로 나누어 각각 계산하면 된다. 

## Case 1: $j = \ell + 1/2$ (up spin)

$j(j+1) = \ell^2 + 2\ell + \frac34$이므로 $j(j+1) - \ell(\ell+1) - \frac34 = \ell$.

$$
E_{so}^1 = \frac{(E_n)^2}{mc^2}\frac{n}{(\ell+1/2)(\ell+1)}
\tag{36}
$$

$$
E_r^1 + E_{so}^1 = \frac{(E_n)^2}{2mc^2}\left[3 - \frac{2n}{\ell+1/2}\left(2 - \frac{1}{\ell+1}\right)\right] = \frac{(E_n)^2}{2mc^2}\left[3 - \frac{2n}{\ell+1/2}\cdot\frac{2\ell+1}{\ell+1}\right] 
$$
$$
= \frac{(E_n)^2}{2mc^2}\left[3 - \frac{4n}{\ell+1}\right]
\tag{37}
$$

$\ell + 1 = j + \frac12$이므로 (7.68)이 나온다.

## Case 2: $j = \ell - 1/2$ down spin

$j(j+1) = \ell^2 - \frac14$이므로 $j(j+1) - \ell(\ell+1) - \frac34 = -(\ell+1)$.

$$
E_{so}^1 = -\frac{(E_n)^2}{mc^2}\frac{n}{\ell(\ell+1/2)}
\tag{38}
$$

$$
E_r^1 + E_{so}^1 = \frac{(E_n)^2}{2mc^2}\left[3 - \frac{2n}{\ell+1/2}\left(2 + \frac1\ell\right)\right] = \frac{(E_n)^2}{2mc^2}\left[3 - \frac{2n}{\ell+1/2}\cdot\frac{2\ell+1}{\ell}\right]
$$
$$
 = \frac{(E_n)^2}{2mc^2}\left[3 - \frac{4n}{\ell}\right]
\tag{39}
$$


$\ell = j + \frac12$이므로 역시 (7.68)이 나온다.

$$
\boxed{\ E_{fs}^1 = \frac{(E_n)^2}{2mc^2}\left(3 - \frac{4n}{j+1/2}\right)\ }
\tag{40}
$$

**$\ell = 0$**: $j = 1/2$ (plus sign)만 가능하다. (35)의 $E_{so}^1$은 형식적으로 $0/0$이지만, Case 1처럼 $\ell$을 약분한 (36)에 $\ell = 0$을 넣으면 (40)이 그대로 성립한다 (footnote 18). 엄밀하게는 Darwin term이 이 값을 준다 ([[Sakurai 5.17 - Darwin Term and Fine Structure]]).

# Problem 7.21
![[Pasted image 20260930170237.png]]
![[Pasted image 20260930170249.png]]

## Bohr theory

$$
E_3 - E_2 = 13.6\ \text{eV}\left(\frac14 - \frac19\right) = 1.889\ \text{eV}
\tag{41}
$$

$$
\lambda = \frac{hc}{E_3 - E_2} = \frac{1239.8\ \text{eV nm}}{1.889\ \text{eV}} = 656\ \text{nm},
\qquad
\nu = \frac{E_3 - E_2}{h} = 4.57\times10^{14}\ \text{Hz}
\tag{42}
$$

## Fine structure sublevels

(7.69)에서 $E^1_{fs} = -\dfrac{13.6\ \text{eV}\,\alpha^2}{n^4}\left(\dfrac{n}{j+1/2} - \dfrac34\right)$이고 $13.6\ \text{eV}\,\alpha^2 = 7.242\times10^{-4}\ \text{eV}$.

| Level | 분수 표현 | $E^1_{fs}$ (eV) |
| --- | --- | --- |
| $n=2,\ j=1/2$ | $-\frac{5}{64}(13.6\alpha^2)$ | $-5.658\times10^{-5}$ |
| $n=2,\ j=3/2$ | $-\frac{1}{64}(13.6\alpha^2)$ | $-1.132\times10^{-5}$ |
| $n=3,\ j=1/2$ | $-\frac{1}{36}(13.6\alpha^2)$ | $-2.012\times10^{-5}$ |
| $n=3,\ j=3/2$ | $-\frac{1}{108}(13.6\alpha^2)$ | $-6.706\times10^{-6}$ |
| $n=3,\ j=5/2$ | $-\frac{1}{324}(13.6\alpha^2)$ | $-2.235\times10^{-6}$ |

$n = 2$는 2개, $n = 3$은 3개의 sublevel로 갈라진다.
Finestructure는 $\ell$ degeneracy만 깨뜨리고 $m_\ell$ degeneracy는 유지하며, $\ell$의 종류는 $n$과 같으니 이게 당연한 결과이다. 

## Allowed transitions
아 맞다 광자의 각운동량을 생각해야 해! 광자는 보손이다. 

Chapter 7 범위에서는 selection rule을 따로 고려하지 않고, $n = 3$의 세 sublevel에서 $n = 2$의 두 sublevel로 가는 **모든 조합 $3\times2 = 6$개**를 전이로 본다. $\Delta E = E^1_{fs}(3, j) - E^1_{fs}(2, j')$:

| Line | Transition | $\Delta E$ (eV) | $\Delta\nu$ (Hz) |
| --- | --- | --- | --- |
| (1) | $j = 1/2 \to 3/2$ | $-8.80\times10^{-6}$ | $-2.13\times10^9$ |
| (2) | $j = 3/2 \to 3/2$ | $+4.61\times10^{-6}$ | $+1.11\times10^9$ |
| (3) | $j = 5/2 \to 3/2$ | $+9.08\times10^{-6}$ | $+2.20\times10^9$ |
| (4) | $j = 1/2 \to 1/2$ | $+3.646\times10^{-5}$ | $+8.82\times10^9$ |
| (5) | $j = 3/2 \to 1/2$ | $+4.987\times10^{-5}$ | $+1.206\times10^{10}$ |
| (6) | $j = 5/2 \to 1/2$ | $+5.434\times10^{-5}$ | $+1.314\times10^{10}$ |

## 최종 답

> The red Balmer line splits into **6** lines. In order of increasing frequency, they come from the transitions (1) $j = 1/2$ to $j = 3/2$, (2) $j = 3/2$ to $j = 3/2$, (3) $j = 5/2$ to $j = 3/2$, (4) $j = 1/2$ to $j = 1/2$, (5) $j = 3/2$ to $j = 1/2$, (6) $j = 5/2$ to $j = 1/2$. The frequency spacing between line (1) and line (2) is $3.24\times10^9$ Hz, between (2) and (3) is $1.08\times10^9$ Hz, between (3) and (4) is $6.62\times10^9$ Hz, between (4) and (5) is $3.24\times10^9$ Hz, and between (5) and (6) is $1.08\times10^9$ Hz.

> [!note] 채점 참고
> **간격의 패턴**: 여섯 선은 도착 준위가 $j' = 3/2$인 세 선 (1)–(3)과 $j' = 1/2$인 세 선 (4)–(6)의 두 묶음이다. 각 묶음 안의 간격은 $n = 3$ sublevel 사이의 간격 ($3.24$ GHz, $1.08$ GHz)이고, 두 묶음은 $n = 2$ fine splitting만큼 통째로 밀려 있다. 그래서 같은 간격이 두 번씩 나타난다.
> **Selection rule을 쓴 답도 정답 처리 권장**: Electric dipole (E1) selection rule $\Delta j = 0, \pm1$ (Chapter 11)을 적용하면 (6) $j = 5/2 \to 1/2$가 빠져서 5개가 된다. 이 전이는 electric quadrupole 같은 higher multipole로만 일어나 실제 스펙트럼에서는 매우 약하다. 공식 풀이가 어느 쪽인지 확인하지 못했으므로, 채점 기준은 교수님과 맞추는 것이 좋다.

# Problem 7.45

![[Pasted image 20260930172245.png]]

Stark effect: $H'_S = eE_{\text{ext}}z = eE_{\text{ext}}r\cos\theta$. Spin과 fine structure는 무시.

## (a) Ground state

$$
E^1_{100} = eE_{\text{ext}}\bra{\psi_{100}}z\ket{\psi_{100}} = eE_{\text{ext}}\int|\psi_{100}|^2 r\cos\theta\,d^3r = 0
\tag{43}
$$

$|\psi_{100}|^2$은 spherically symmetric이고 $\int_0^\pi\cos\theta\sin\theta\,d\theta = 0$이기 때문이다. (Parity로 보면 $|\psi_{100}|^2$은 even, $z$는 odd.)

## (b) First excited states

Basis $\psi_1 = \psi_{200},\ \psi_2 = \psi_{211},\ \psi_3 = \psi_{210},\ \psi_4 = \psi_{21-1}$. 대부분의 matrix element는 selection rule로 계산 없이 0이다.

- **$\Delta m = 0$**: $[L_z, z] = 0$이므로 $m$이 다른 state 사이의 $z$ matrix element는 0 (φ 적분이 사라짐). 따라서 $\psi_{21\pm1}$은 다른 state와 섞이지 않는다.
- **Parity**: $\psi_{n\ell m}$의 parity는 $(-1)^\ell$이고 $z$는 odd이므로, **같은 $\ell$ 사이의 element (모든 diagonal 포함)는 0**이다.

남는 것은 $W_{13} = W_{31} = eE_{\text{ext}}\bra{\psi_{200}}z\ket{\psi_{210}}$ 하나다.

$$
\psi_{200} = \frac{1}{\sqrt2}a^{-3/2}\left(1 - \frac{r}{2a}\right)e^{-r/2a}\cdot\frac{1}{\sqrt{4\pi}},
\qquad
\psi_{210} = \frac{1}{\sqrt{24}}a^{-3/2}\frac ra e^{-r/2a}\cdot\sqrt{\frac{3}{4\pi}}\cos\theta
\tag{44}
$$

Angular 부분:

$$
\int Y_0^0\,Y_1^0\cos\theta\,d\Omega = \frac{1}{\sqrt{4\pi}}\sqrt{\frac{3}{4\pi}}\cdot\frac{4\pi}{3} = \frac{1}{\sqrt3}
\tag{45}
$$

Radial 부분 ($u = r/a$):

$$
\int_0^\infty R_{20}R_{21}\,r^3\,dr = \frac{a}{\sqrt{48}}\int_0^\infty\left(1 - \frac u2\right)u^4e^{-u}\,du = \frac{a}{4\sqrt3}\left(4! - \frac{5!}{2}\right) = -3\sqrt3\,a
\tag{46}
$$

$$
\bra{\psi_{200}}z\ket{\psi_{210}} = -3\sqrt3\,a\cdot\frac{1}{\sqrt3} = -3a
\quad\Rightarrow\quad
W_{13} = W_{31} = -3eaE_{\text{ext}}
\tag{47}
$$

$$
\mathsf{W} = -3eaE_{\text{ext}}\begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
\tag{48}
$$

Eigenvalue는

$$
\boxed{\ E^1 = -3eaE_{\text{ext}},\quad 0,\quad 0,\quad +3eaE_{\text{ext}}\ }
\tag{49}
$$

**$E_2$는 세 준위로 갈라진다** (가운데 준위는 여전히 doubly degenerate).

## (c) Good states와 electric dipole moment

$$
\psi_\pm = \frac{1}{\sqrt2}\left(\psi_{200} \pm \psi_{210}\right)\ \ (E^1 = \mp3eaE_{\text{ext}}),
\qquad
\psi_{211},\ \psi_{21-1}\ \ (E^1 = 0)
\tag{50}
$$

$\mathbf{p}_e = -e\mathbf{r}$의 기댓값:

- $\psi_{21\pm1}$: parity에 의해 $\langle\mathbf{r}\rangle = 0$이므로 $\langle\mathbf{p}_e\rangle = 0$.
- $\psi_\pm$: $\langle x\rangle$, $\langle y\rangle$는 0이다 ($x$, $y$는 $\Delta m = \pm1$만 연결하는데 두 성분 모두 $m = 0$). $z$ 성분은
$$
\langle z\rangle_\pm = \frac12\left(\bra{\psi_{200}}z\ket{\psi_{200}} + \bra{\psi_{210}}z\ket{\psi_{210}} \pm 2\bra{\psi_{200}}z\ket{\psi_{210}}\right) = \mp3a
\tag{51}
$$

$$
\boxed{\ \langle\mathbf{p}_e\rangle_\pm = \pm3ea\,\hat{z},
\qquad
\langle\mathbf{p}_e\rangle_{21\pm1} = 0\ }
\tag{52}
$$

$E_{\text{ext}}$와 무관한 **permanent electric dipole moment**다. 확인: $H'_S = -\mathbf{p}_e\cdot\mathbf{E}_{\text{ext}}$이므로 $E^1 = -\langle\mathbf{p}_e\rangle\cdot\mathbf{E}_{\text{ext}} = \mp3eaE_{\text{ext}}$로 (49)와 일치한다. Field 방향으로 정렬된 dipole ($\psi_+$)이 내려간다.

> [!tip] 왜 $n = 2$만 linear Stark effect를 보이나
> $\ell$이 다르고 parity가 반대인 state ($2s$, $2p$)가 degenerate하기 때문에 섞여서 permanent dipole을 만들 수 있다. 이것은 $1/r$ potential의 accidental $\ell$ degeneracy 덕분이다. Ground state는 섞을 짝이 없어서 first order가 0이고, 효과는 $E_{\text{ext}}^2$에 비례하는 second order부터 나온다 (quadratic Stark effect, Problem 7.51).

# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Second-Order Energy Correction]]
- [[양자 필기 - Two-Fold Degenerate Perturbation Theory]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[양자 필기 - Higher-Order Degeneracy]]
- [[양자 필기 - Relativistic Correction to Hydrogen]]
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[QM lecture note - Simple Harmonic Oscillator]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Problems 7.9, 7.11, 7.12, 7.17, 7.19, 7.20, 7.21, 7.45
- 원본 과제 파일: 양자_HW2.pdf (TA 손풀이 포함)
