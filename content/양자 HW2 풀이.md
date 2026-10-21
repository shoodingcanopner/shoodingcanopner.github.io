---
title: 양자 HW2 풀이
date: 2026-09-30
subject: quantum mechanics
tags:
  - study
  - homework
  - quantum_mechanics
class: study_homework
draft: false
---
> [!error] 비공식 자료, 책임 안 짐
> 이것은 [[양자물리 (학부용, Griffiths)]] HW2를 TA가 푼 풀이입니다.

# 채점 기준
total 100 pt (혹시 보너스 점수로 인해 100점 이상을 받아도 100으로 인정함함)

연산 실수, 부호 실수 → 각 풀이 내부에서 종류가 다른 실수가 **최초** 발생 시 각 -1 pt
(앞선 과정에서 생긴 실수로 인해 뒤에서 계속 틀리는 경우는 감점하지 않음)


# Notation
이 페이지에서 
점수 앞에 - 가 있는 경우 감점을 의미

Feedback pdf에서
보라 글씨는 문항 당 득점 표시, 빨간 글씨는 세부 사항 당 감점 표시. 

# Problem 7.9 (20 pt)
![[Pasted image 20261016183318.png]]


둘레 $L$인 원 위를 자유롭게 움직이는 입자 (bead on a ring).

## (a) Stationary states (3 pt)

Potential energy가 없으니까, 슈방 $-\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2}= E\psi$의 해가 free particle과 비슷한 꼴의  $\psi = Ae^{ikx}$ 일 것이라고 가정한다. 

가정한 식을 슈방에 넣어서 풀면 $k^2 = \frac{2m}{\hbar^2}E$ 라는 것을 알 수 있다. 
System 자체가 periodic boundary condition을 가지므로, $\psi(x)$또한 PBC를 지켜야 한다.  
$\psi(x+L) = \psi(x)$를 강제하면, $E$와 $k$가 infinite potential wall 과 비슷하게 양자화된다는 것을 알 수 있다. 

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

$E_n$이 $n^2$에만 의존하므로 $n = 0$을 제외하면 $\psi_n$과 $\psi_{-n}$이 에너지가 같다. doubly degenerate하다.

###### → 주요 식이 있 으면 3 pt
###### 문제에서 미리 알려준 답을 이용해서 그것이 틀리지 않음을 보인 경우, 이 system의 핵심인 periodic boundary에 의한 quantization을 언급하지 않으면 -1 pt


## (b) First-order correction (5 pt)


먼저  $H$의 eigen basis로 나타낸 $H'$의 matrix element를 일반적으로 구하자. 

$$
\bra{\psi^0_m}H'\ket{\psi^0_{n'}} = -\frac{V_0}{L}\int_{-L/2}^{L/2} e^{-x^2/a^2}e^{2\pi i(n'-m)x/L}\,dx
\approx -\frac{V_0}{L}\int_{-\infty}^{\infty} e^{-x^2/a^2}e^{2\pi i(n'-m)x/L}\,dx
\tag{3}
$$

문제에서 권유한대로, $a \ll L$이라 적분 구간을 $\pm\infty$로 늘렸다. 
위 적분식은 Gaussian function을 푸리에 변환하는 것이다. 
1학기에 위치와 운동량의 wave function이 서로 푸리에 변환 관계인 것을 보았다. 
그때 Gaussian function의 푸리에 변환은 또 Gaussian function이라는 점을 알게 되었다. 
$$
\int_{-\infty}^{\infty} e^{-x^2/a^2}e^{-ikx}\,dx = \sqrt\pi\, a\, e^{-k^2a^2/4}
\tag{4}
$$
이 공식을 쓰면
$$
\bra{\psi^0_m}H'\ket{\psi^0_{n'}} = -\frac{\sqrt\pi\, aV_0}{L}\exp\left[-\frac{\pi^2a^2(n'-m)^2}{L^2}\right]
\tag{5}
$$
교과서에 있는 식을 불러오면
$$E_{\pm}^{1}=\frac{1}{2}\left[W_{a a}+W_{b b}\pm\sqrt{(W_{a a}-W_{b b})^{2}+4\,|W_{a b}|^{2}}\right] \tag{Eq. 7.33}$$


### Nondegernerate case
는 $n=0$일 경우 밖에 없다. 
식 (5)에 $n = 0$을 대입하면, 

$$
E_0^1 =  -\frac{\sqrt\pi\, aV_0}{L}
$$

 
###### 문제에서는 교과서 식 (Eq. 7.33)을 이용해 풀라고 했기 때문에, nondegenerate case를 따로 언급안 했어도 괜찮음

### Degenerate case
Degenerate pair $\psi_{\alpha}^0 = \psi_n$, $\psi_{\beta}^0 = \psi_{-n}$에 대해 $\mathsf{W}$를 구해야 한다. 

$\psi_{\alpha}^0 = \psi_n$, $\psi_{\beta}^0 = \psi_{-n}$ 을 위 식 (5) 에 대입하여 $H'$를 $4 \times 4$ matrix로 reduce하자.
$n' - m$부분은 $0$ 아니면 $2n$이 된다. 
$$
\kappa \equiv e^{-4\pi^2n^2a^2/L^2}
$$
라고 두고, 행렬 요소를 쓰면
$$
 
$$  
###### 행렬 요소 구하기 까지 → 3pt


Eq. 7.33에 넣으면 $E^1_\pm = W_{aa} \pm |W_{ab}|$이므로

$$
\boxed{\ E^1_\pm = -\frac{\sqrt\pi\, aV_0}{L}\left(1 \mp \kappa \right) = -\frac{\sqrt\pi\, aV_0}{L}\left(1 \mp e^{-4\pi^2n^2a^2/L^2}\right)\ }
\tag{7}
$$
###### → 2 pt


## (c) Good states (6 pt)

$$
\mathsf{W} = -\frac{\sqrt\pi\, aV_0}{L}\begin{pmatrix} 1 & \kappa \\ \kappa & 1 \end{pmatrix}
\tag{8}
$$
깔끔하게 생긴 행렬. 이것의 eigenvector는 $(1, \pm1)/\sqrt2$이므로 good states는

$$
\psi_n^{g\pm} = \frac{1}{\sqrt2}\left(\psi_n \pm \psi_{-n}\right),
\qquad
\psi_n^{g+} = \sqrt{\frac2L}\cos\frac{2\pi nx}{L},
\quad
\psi_n^{g-} = i\sqrt{\frac2L}\sin\frac{2\pi nx}{L}
\tag{9}
$$
 
           
###### → 3 pt

$$ $$
Eq. 7.9로 확인하면 ($W_{ab}$가 real이므로)

$$
\bra{\psi_n^{g\pm}}H'\ket{\psi_n^{g\pm}} = \frac12\left(W_{aa} + W_{bb} \pm 2W_{ab}\right) = -\frac{\sqrt\pi\, aV_0}{L}\left(1 \pm \kappa\right)
\tag{10}
$$

로 (7)의 두 값과 일치한다. ($\psi^{g+}$가 (7)의 $E^1_-$, $\psi^{g-}$가 $E^1_+$에 대응한다.)

... 혹시 $x$에 대해 적분식으로 일일이 푼 사람은 없겠지?
  
###### → 3 pt

물리적 해석:  cosine state는 dimple이 있는 $x = 0$에서 최대라서 크게 내려가고, sine state는 $x = 0$에 node가 있어서 거의 영향을 받지 않는다. $na \ll L$이면 $\kappa \approx 1$이라 $E^{g+} \approx -2\sqrt\pi\, aV_0/L$, $E^{g-} \approx 0$.


## (d) Hermitian operator $A$ (6 pt)
![[Pasted image 20261016193158.png]]
$H^0, H'$모두와 commute하며, eigenvalue가 distinct한 hermitian operator $A$를 찾아라. 

[[QM lecture note - Discrete Symmetries|Parity operator]] $\Pi$ 가 $A$가 될 수 있다. Perturbation있기 전과 후 모두 parity symmetry를 가지기 때문.
$\Pi f(x) = f(-x)$.

- $\Pi$는 hermitian이다.
- $H^0 = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$는 $x \to -x$에 대해 불변이므로 $[\Pi, H^0] = 0$.
- $H' = -V_0e^{-x^2/a^2}$는 even function이므로 $[\Pi, H'] = 0$.



$\psi_n(x) = \frac{1}{\sqrt L}e^{2\pi inx/L},$
$\Pi\psi_n(x) = \psi_n(-x) = \psi_{-n}(x)$이므로., 
$$
\Pi\psi_n^{g\pm} = \frac{1}{\sqrt2}\left(\psi_{-n} \pm \psi_n\right) = \pm\psi_n^{g\pm}
\tag{11}
$$

Eigenvalue $\pm1$이 서로 다르므로 theorem의 조건을 만족하고, 
###### → $\Pi$가 theorem 조건에 맞는 이유를 언급하지 않으면(특히  $H^0$와 $H'$이랑 commute함을 언급 안 하면) -2 pt
###### 언급은 했으나   $[\Pi, H^0] = 0$와 $[\Pi, H'] = 0$인 이유를 설명하지 않으면 -1 pt.

$H^0$와 $\Pi$의 simultaneous eigenst ate가 정확히 (c)의 good states다.
###### → $\Pi$를 이용해서 eigenket을 구한 부분이 없거나, good state를 $\Pi$와 연산한 기록이 없으면 -2 pt

###### → 위 두 조건을 피하고 $A$를 정확하게 찾았으면 온점수

  
# Problem 7.11 (10 pt)
![[Pasted image 20261016183350.png]]

Infinite cubical well (한 변 $a$)에 delta function bump $H' = a^3V_0\,\delta(x-\tfrac a4)\,\delta(y-\tfrac a2)\,\delta(z-\tfrac{3a}{4})$.

## Setup - Perturbation이 없을 때 eigenstate
그저 
$$
\psi_{n_xn_yn_z} = \left(\frac2a\right)^{3/2}\sin\frac{n_x\pi x}{a}\sin\frac{n_y\pi y}{a}\sin\frac{n_z\pi z}{a},
\qquad
E^0 = \frac{\pi^2\hbar^2}{2ma^2}\left(n_x^2 + n_y^2 + n_z^2\right)
\tag{12}
$$
###### → 1 pt (Eigen energy 식은 없어도 무관       )

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

###### → 3 pt

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
위 행렬의 eigenvalue는 아래 행렬의 eigenvalue와 같다.  위 행렬의 행과 열을 짝수번 swap하면 아래 행렬이 되기 때문.

$$
4V_0\begin{pmatrix} 1 & -1 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} 
$$
Eigenvalue는 0과 $8V_0$이다. 

Eigenvalue와 good states: 

$$
\boxed{\ E^1 = 0\ \left(\psi_{121}\right),\quad 0\ \left(\tfrac{1}{\sqrt2}(\psi_{211} + \psi_{112})\right),\quad 8V_0\ \left(\tfrac{1}{\sqrt2}(\psi_{211} - \psi_{112})\right)\ }
\tag{17}
$$
###### 상응하는 good state언급 없이 energy만 구해도 괜찮음
###### → 6 pt
###### → 답이 맞더라도 degenerate perturbation theory 적용 안 하면 -4 pt 

# Problem 7.12 (10 pt)
![[Pasted image 20261016183439.png]]
$$
\mathsf{H} = V_0\begin{pmatrix} 1-\epsilon & 0 & 0 \\ 0 & 1 & \epsilon \\ 0 & \epsilon & 2 \end{pmatrix}
= V_0\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
+ \epsilon V_0\begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
= \mathsf{H}^0 + \mathsf{H}'
\tag{18}
$$

## (a) Unperturbed

$\ket{1},\ \ket{2},\ \ket{3}$ = standard basis, eigenvalue $V_0,\ V_0,\ 2V_0$. 

###### → 2 pt

$\ket{1}$과 $\ket{2}$가 degenerate.
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
###### → 2pt

$\sqrt{1+x} \approx 1 + \frac x2 - \frac{x^2}{8}$에 $x = 4\epsilon^2$을 넣으면 $\sqrt{1+4\epsilon^2} \approx 1 + 2\epsilon^2$이므로

$$
E_1 = V_0(1-\epsilon)\ \text{(from }\ket1\text{)},
\qquad
E_+ \approx V_0\left(2 + \epsilon^2\right)\ \text{(from }\ket3\text{)},
\qquad
E_- \approx V_0\left(1 - \epsilon^2\right)\ \text{(from }\ket2\text{)}
\tag{21}
$$

###### → 2 pt

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

###### → 3 pt 
###### Second order 없으면 -2 pt


## (d) Degenerate PT for $\{\ket1, \ket2\}$

$$
\mathsf{W} = \begin{pmatrix} \bra1\mathsf{H}'\ket1 & \bra1\mathsf{H}'\ket2 \\ \bra2\mathsf{H}'\ket1 & \bra2\mathsf{H}'\ket2 \end{pmatrix} = \begin{pmatrix} -\epsilon V_0 & 0 \\ 0 & 0 \end{pmatrix}
\tag{24}
$$

이미 diagonal이므로 $E_1 \approx V_0(1-\epsilon)$, $E_2 \approx V_0$. 
$E_1$은 exact와 정확히 같고, $E_- = V_0(1-\epsilon^2)$은 first order까지 $V_0$로 일치한다. 

###### → 3 pt

# Problem 7.17 (10 pt)
![[Pasted image 20261016183504.png]]
1D harmonic oscillator의 lowest-order relativistic correction.
[[양자 필기 - Relativistic Correction to Hydrogen]]
## 풀이 (ladder operator, Problem 2.12의 technique)

$H'_r = -\dfrac{p^4}{8m^3c^2}$이고 1D oscillator는 nondegenerate이므로 $E^1_r = -\dfrac{1}{8m^3c^2}\bra{n}p^4\ket{n}$. 
[[QM lecture note - Simple Harmonic Oscillator|Momentum을 ladder operator]]로 쓰면

$$
p = i\sqrt{\frac{\hbar m\omega}{2}}\left(a_+ - a_-\right)
\quad\Rightarrow\quad
p^4 = \left(\frac{\hbar m\omega}{2}\right)^2\left(a_+ - a_-\right)^4
\tag{25}
$$

$(a_+ - a_-)^4$을 전개했을 때 diagonal에 기여하는 것은 $a_+$ 두 개, $a_-$ 두 개인 항뿐이다. 
부호는 $(-1)^2 = +1$이다. 
$a_+\ket n = \sqrt{n+1}\ket{n+1}$, $a_-\ket n = \sqrt n\ket{n-1}$을 써서 여섯 가지 순서를 계산하면

| 순서             | $\bra n\cdots\ket n$ |
| -------------- | -------------------- |
| $a_-a_-a_+a_+$ | $(n+1)(n+2)$         |
| $a_-a_+a_-a_+$ | $(n+1)^2$            |
| $a_-a_+a_+a_-$ | $n(n+1)$             |
| $a_+a_-a_-a_+$ | $n(n+1)$             |
| $a_+a_-a_+a_-$ | $n^2$                |
| $a_+a_+a_-a_-$ | $n(n-1)$             |
###### → 7 pt

합은 $6n^2 + 6n + 3$이다. 따라서

$$
\bra n p^4\ket n = \left(\frac{\hbar m\omega}{2}\right)^2 \cdot 3\left(2n^2 + 2n + 1\right)
\tag{26}
$$

$$
\boxed{\ E^1_r = -\frac{3}{32}\frac{(\hbar\omega)^2}{mc^2}\left(2n^2 + 2n + 1\right) = -\frac{3}{16mc^2}\left[\left(E_n^0\right)^2 + \frac{(\hbar\omega)^2}{4}\right]\ }
\tag{27}
$$
###### → 3 pt


## 다른 풀이 - energy expectation value이용
[[양자 필기 - Relativistic Correction to Hydrogen#4. First-order correction $p 4$를 피하는 트릭]]에서 배웠듯, 
$$
E_r^1= -\frac{1}{2mc^2}\left[E^2 - 2E\langle V\rangle + \langle V^2\rangle\right]
\tag{12}
$$
이 식도 이용할 수 있다. 
$\langle V\rangle = \frac{1}{2}m\omega^2\langle x^2 \rangle$임을 이용, 결국 $\langle x^2 \rangle$과 $\langle x^4 \rangle$을 구하는 것이 관건이 된다. 
물론 적분식을 이용해도 괜찮지만, 이번에도 ladder operator를 사용해 보자. 
$$
x = \sqrt{\frac{\hbar}{2m\omega}}(a_- + a_+),
$$
$$
x^2 = \frac{\hbar}{2m\omega}(a_- + a_+^\dagger)^2,
$$
을 전개했을 때, 기댓값이 0이 되지 않는 항은 $aa^\dagger$와  $a^\dagger a$ 뿐이다.

$$
x^4 = (\frac{\hbar}{2m\omega})^2(a_ + a_+^\dagger)^4
$$
을 전개했을 때, 기댓값이 0이 되지 않는 항은  $a_+$ 두 개, $a_-$ 두 개인 항뿐이다. 

| 순서             | $\bra n\cdots\ket n$ |
| -------------- | -------------------- |
| $a_-a_-a_+a_+$ | $(n+1)(n+2)$         |
| $a_-a_+a_-a_+$ | $(n+1)^2$            |
| $a_-a_+a_+a_-$ | $n(n+1)$             |
| $a_+a_-a_-a_+$ | $n(n+1)$             |
| $a_+a_-a_+a_-$ | $n^2$                |
| $a_+a_+a_-a_-$ | $n(n-1)$             |
| $a_+ a_-$      | $n$                  |
| $a_- a_+$      | $n+1$                |
###### → 7 pt
이리가나 저리가나 첫번째 풀이와 두번째 풀이가 별반 다르지 않음을 알 수 있다. 
오히려 첫번째 풀이가 깔끔할지도?
$$
\langle x^2 \rangle = \frac{\hbar}{2m\omega} (2n+1)
$$

$$
\langle x^4 \rangle = (\frac{\hbar}{2m\omega})^2 (6n^2 + 6n + 3)
$$

$$
\langle V\rangle = \frac{1}{4}\hbar \omega(2n+1)
$$
$$
\langle V^2\rangle = \frac{1}{16}\hbar^2 \omega^2(6n^2 + 6n + 3)
$$


$E = \hbar \omega (n+\frac{1}{2})$를 적용해 최종 계산한다. 
하다 보면 $E^2 - 2E\langle V\rangle$이 된다는 것을 알 수 있다. 
결국 답은 첫번째 풀이와 똑같이 나온다. 

$$
\boxed{\ E^1_r = -\frac{3}{32}\frac{(\hbar\omega)^2}{mc^2}\left(2n^2 + 2n + 1\right) = -\frac{3}{16mc^2}\left[\left(E_n^0\right)^2 + \frac{(\hbar\omega)^2}{4}\right]\ }
\tag{27}
$$
###### → 3 pt

# Problem 7.19 (10 pt)
![[Pasted image 20260930164511.png]]

$\mathbf{L}$, $\mathbf{S}$는 서로 commute.
$[L_i, L_j] = i\hbar\epsilon_{ijk}L_k$, $[S_i, S_j] = i\hbar\epsilon_{ijk}S_k$를 만족한다. 
$\mathbf{L}\cdot\mathbf{S} = \sum_i L_iS_i$.
그리고 $L^2$는 모든 $L_i$와 commute한다. 마찬가지로 $S^2$는 모든 $S_i$와 commute한다. 

마지막으로 commutator product rule
$[AB,C] = A[B,C]+[A,C]B$

아래 풀이에서는 $[\mathbf{L},\mathbf{S}]$관련 항들을 0으로 취급하여 식에 적지 않았다. 

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

###### → 2 pt


**(b)** 같은 계산을 $\mathbf{S}$에 대해 하면

$$
[\mathbf{L}\cdot\mathbf{S}, S_x] = \sum_i L_i[S_i, S_x] = -i\hbar L_yS_z + i\hbar L_zS_y = i\hbar\left(\mathbf{S}\times\mathbf{L}\right)_x
\quad\Rightarrow\quad
\boxed{\ [\mathbf{L}\cdot\mathbf{S}, \mathbf{S}] = i\hbar\left(\mathbf{S}\times\mathbf{L}\right)\ }
\tag{31}
$$

($\mathbf{L}$과 $\mathbf{S}$가 commute하므로 $\mathbf{S}\times\mathbf{L} = -\mathbf{L}\times\mathbf{S}$로 순서 문제가 없다.)
$\boxed{\ [\mathbf{L}\cdot\mathbf{S}, \mathbf{S}] = [\mathbf{S}\cdot\mathbf{L}, \mathbf{S}]= i\hbar\left(\mathbf{S}\times\mathbf{L}\right)\ }$

###### → 2 pt

**(c)** (a) + (b):

$$
[\mathbf{L}\cdot\mathbf{S}, \mathbf{J}] = i\hbar\left(\mathbf{L}\times\mathbf{S} + \mathbf{S}\times\mathbf{L}\right) = 0
\tag{32}
$$

###### → 1 pt

**(d), (e)** $[L_i, L^2] = 0$, $[S_i, S^2] = 0$이고 $\mathbf{L}$과 $\mathbf{S}$는 commute하므로

$$
[\mathbf{L}\cdot\mathbf{S}, L^2] = \sum_i [L_i, L^2]S_i = 0,
\qquad
[\mathbf{L}\cdot\mathbf{S}, S^2] = \sum_i L_i[S_i, S^2] = 0
\tag{33}
$$
###### → 2 + 2 pt

**(f)** $J^2 = L^2 + S^2 + 2\mathbf{L}\cdot\mathbf{S}$이므로 (d), (e)와 자기 자신과의 commutator에 의해

$$
[\mathbf{L}\cdot\mathbf{S}, J^2] = 0
\tag{34}
$$

###### → 1 pt

**의미**: $H'_{so} \propto \mathbf{L}\cdot\mathbf{S}$는 $\mathbf{L}$, $\mathbf{S}$와 commute하지 않지만 $L^2$, $S^2$, $J^2$,  $\mathbf{J}$와는 commute한다. 그래서 $\ket{n\,\ell\,s\,j\,m_j}$가 good states다 ([[양자 필기 - Spin-Orbit Coupling and Fine Structure]]).


# Problem 7.20 (10 pt)
그저 교과서에 지면 상 실리지 못 한 유도를 스스로 하는 문제.
![[Pasted image 20260930165734.png]]
주어진 식은

$$
E_r^1 = -\frac{(E_n)^2}{2mc^2}\left[\frac{4n}{\ell+1/2} - 3\right],
\qquad
$$
$$
E_{so}^1 = \frac{(E_n)^2}{mc^2}\left\{\frac{n\left[j(j+1) - \ell(\ell+1) - 3/4\right]}{\ell(\ell+1/2)(\ell+1)}\right\}
\tag{35}
$$


이 둘을 더해서 
$$
\boxed{\ E_{fs}^1 = \frac{(E_n)^2}{2mc^2}\left(3 - \frac{4n}{j+1/2}\right)\ } \tag{7.68}
$$
이걸 만들면 된다. 
업스핀일 때와 다운스핀일 때, 두 가지 경우로 나누어 각각 계산하면 된다. 
문제에서 힌트를 준 것 처럼, $j = \ell \pm 1/2$ 이 두 가지 경우를 대입해서 각각 계산하면 된다. 

## Case 1: $j = \ell + 1/2$ (up spin)

$j(j+1) =(\ell +1/2)(\ell + 3/2)= \ell^2 + 2\ell + \frac34$이므로 $j(j+1) - \ell(\ell+1) - \frac34 = \ell$.

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
###### → 5pt

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

###### → 5 pt

$$
\boxed{\ E_{fs}^1 = \frac{(E_n)^2}{2mc^2}\left(3 - \frac{4n}{j+1/2}\right)\ }
\tag{40}
$$

**$\ell = 0$**: $j = 1/2$ (plus sign)만 가능하다. (35)의 $E_{so}^1$은 형식적으로 $0/0$이지만, Case 1처럼 $\ell$을 약분한 (36)에 $\ell = 0$을 넣으면 (40)이 그대로 성립한다 (footnote 18). 엄밀하게는 Darwin term이 이 값을 준다 ([[Sakurai 5.17 - Darwin Term and Fine Structure]]).

# Problem 7.21 (10 pt)

![[Pasted image 20261016183633.png]]
아주 귀찮은 계산 문제

Fine structure로 인한 energy spliting에 의해 늘어나는 Balmer line  은 몇 개이고, 선 사이 간격은 얼마인가?

$\Delta E$구하기 → $Hz$단위로 frequency 구하기(선과 선 사이의)

## Bohr theory - Fine structure를 고려하지 않을 때 Balmer line

$$
h  = 4.136 \cdot 10^{-15} \text{eV}\cdot\text{s}
$$

$$
E_3 - E_2 = 13.6\ \text{eV}\left(\frac14 - \frac19\right) = 1.889\ \text{eV}
\tag{41}
$$

$$
\lambda = \frac{hc}{E_3 - E_2} = \frac{1.2398\cdot 10^{-6}\ \text{eV}  \cdot \text{m}}{1.889\ \text{eV}} = 6.56 \cdot 10^{-7}\ \text{m},
$$
$$
\nu = \frac{E_3 - E_2}{h} = 4.57\times10^{14}\ \text{Hz}
\tag{42}
$$

###### → 굳이 풀이에 없어도 괜찮음

## Fine structure sublevels

(7.69)에서 $E^1_{fs} = -\dfrac{13.6\ \text{eV}\,\alpha^2}{n^4}\left(\dfrac{n}{j+1/2} - \dfrac34\right)$이고 
$\alpha = \frac{e^2}{4 \pi \epsilon_0 \hbar c} = 7.297 \cdot 10^{-3}$

$\alpha^2 = 5.3246 \cdot 10^{-5}$

$13.6\ \text{eV}\,\alpha^2 = 7.241\times10^{-4}\ \text{eV}$.

$$
E^1_{fs} = -\dfrac{1}{n^4}\left(\dfrac{n}{j+1/2} - \dfrac34\right) \cdot(7.241\times10^{-4}\ \text{eV})
$$



| Level         | $-\dfrac{1}{n^4}\left(\dfrac{n}{j+1/2} - \dfrac34\right)$ | $E^1_{fs}$ (eV)       |
| ------------- | --------------------------------------------------------- | --------------------- |
| $n=2,\ j=1/2$ | $-\frac{5}{64}$                                           | $-5.658\times10^{-5}$ |
| $n=2,\ j=3/2$ | $-\frac{1}{64}$                                           | $-1.132\times10^{-5}$ |
| $n=3,\ j=1/2$ | $-\frac{1}{36}$                                           | $-2.012\times10^{-5}$ |
| $n=3,\ j=3/2$ | $-\frac{1}{108}$                                          | $-6.706\times10^{-6}$ |
| $n=3,\ j=5/2$ | $-\frac{1}{324}$                                          | $-2.235\times10^{-6}$ |

###### → 각 energy level의 값을 굳이 안 구해도 괜찮음

==$n = 2$는 2개, $n = 3$은 3개의 sublevel로 갈라진다.== 


Finestructure는 $\ell$ degeneracy만 깨뜨리고 $m_\ell$ degeneracy는 유지하며, $\ell$의 종류는 $n$과 같으니 이게 당연한 결과이다. 

## Allowed transitions
Chapter 7 범위에서는 selection rule을 따로 고fu하지 않고, $n = 3$의 세 sublevel에서 $n = 2$의 두 sublevel로 가는 **모든 조합 $3\times2 = 6$개**를 전이로 본다. $\Delta E = E^1_{fs}(3, j) - E^1_{fs}(2, j')$:

| Line | Transition        | $\Delta E$ (eV)       | 이전 level과 에너지 차이 (eV) | 이전 level과 frequency 차이 (Hz) |
| ---- | ----------------- | --------------------- | --------------------- | --------------------------- |
| (1)  | $j = 1/2 \to 3/2$ | $-8.80\times10^{-6}$  |                       |                             |
| (2)  | $j = 3/2 \to 3/2$ | $+4.61\times10^{-6}$  | 1.341$\times10^{-5}$  | 3.242$\times10^{9}$         |
| (3)  | $j = 5/2 \to 3/2$ | $+9.08\times10^{-6}$  | 4.47$\times10^{-6}$   | 1.08$\times10^{9}$          |
| (4)  | $j = 1/2 \to 1/2$ | $+3.646\times10^{-5}$ | 2.738$\times10^{-5}$  | 6.662$\times10^{9}$         |
| (5)  | $j = 3/2 \to 1/2$ | $+4.987\times10^{-5}$ | 1.341$\times10^{-5}$  | 3.24$\times10^{9}$          |
| (6)  | $j = 5/2 \to 1/2$ | $+5.434\times10^{-5}$ | 0.447$\times10^{-5}$  | 1.08$\times10^{9}$          |
|      |                   |                       |                       |                             |

$h  = 4.136 \cdot 10^{-15} \text{eV}\cdot\text{s}$

> [!Danger] Forbidden transition?
> 6번 transition이 논란이 생길 만 한 부분이다. 이것이forbidden transition이라는 이유로 답안에서 제외한 학생들이 많다. 
> 아직 빛에 의한 전자의 에너지 전이가 어떤 원리로 일어나는지 우리는 배우지 않았다. (Griffith chapter 1 내용)
> 그리고 문제에서는 전자의 에너지 전이가 빛에 의한 것이라고 언급되지 않았다.
> 
> 왜 $\Delta j =-2$인 게 안 되는지 설명이 제대로 없는 경우에는, AI의 답변을 깊이 고민하거나 이해하지 않은 것으로 간주한다. 


## 최종 답

> The red Balmer line splits into **6** lines. In order of increasing frequency, they come from the transitions 
> (1) $j = 1/2$ to $j = 3/2$, 
> (2) $j = 3/2$ to $j = 3/2$, 
> (3) $j = 5/2$ to $j = 3/2$, 
> (4) $j = 1/2$ to $j = 1/2$, 
> (5) $j = 3/2$ to $j = 1/2$, 
> (6) $j = 5/2$ to $j = 1/2$. 
> The frequency spacing 
> between line (1) and line (2) is $3.24\times10^9$ Hz, 
> between (2) and (3) is $1.08\times10^9$ Hz, 
> between (3) and (4) is $6.62\times10^9$ Hz, 
> between (4) and (5) is $3.24\times10^9$ Hz, and 
> between (5) and (6) is $1.08\times10^9$ Hz.


## 설마 누군가가 에너지 레벨을 내림차순으로 보아서 frequency차이를 계산했다면?
아이고 다시 계산해야 하네?




> [!note] 채점 참고
> **간격의 패턴**: 여섯 선은 도착 준위가 $j' = 3/2$인 세 선 (1)–(3)과 $j' = 1/2$인 세 선 (4)–(6)의 두 묶음이다. 각 묶음 안의 간격은 $n = 3$ sublevel 사이의 간격 ($3.24$ GHz, $1.08$ GHz)이고, 두 묶음은 $n = 2$ fine splitting만큼 통째로 밀려 있다. 그래서 같은 간격이 두 번씩 나타난다.
> **Selection rule을 쓴 답도 정답 처리 권장**: Electric dipole (E1) selection rule $\Delta j = 0, \pm1$ (Chapter 11)을 적용하면 (6) $j = 5/2 \to 1/2$가 빠져서 5개가 된다. 이 전이는 electric quadrupole 같은 higher multipole로만 일어나 실제 스펙트럼에서는 매우 약하다. 공식 풀이가 어느 쪽인지 확인하지 못했으므로, 채점 기준은 교수님과 맞추는 것이 좋다.

# Problem 7.45 (20 pt)

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

### $\mathsf{W}$의 block 구조

Basis 순서를 $(\psi_{200}, \psi_{210}\,|\,\psi_{211}\,|\,\psi_{21-1})$로 바꾸면 $\mathsf{W}$는 block diagonal이 된다.

$$
\mathsf{W} = \begin{pmatrix} 0 & -3eaE_{\text{ext}} & 0 & 0 \\ -3eaE_{\text{ext}} & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
\tag{48a}
$$

- $1\times1$ block 두 개: $\psi_{211}$, $\psi_{21-1}$은 다른 state와 섞이지 않으므로 이미 good states이고, $E^1 = 0$이다.
- 따라서 $2\times2$ block $\{\psi_{200}, \psi_{210}\}$만 대각화하면 된다.

### $2\times2$ block 대각화

$w \equiv 3eaE_{\text{ext}}$로 두면 characteristic equation은

$$
\det\begin{pmatrix} -\lambda & -w \\ -w & -\lambda \end{pmatrix} = \lambda^2 - w^2 = 0
\quad\Rightarrow\quad
\lambda = \pm w
\tag{48b}
$$

Eq. 7.33에 $W_{aa} = W_{bb} = 0$을 넣어도 $E^1_\pm = \pm|W_{ab}|$로 같은 결과가 나온다. 따라서 first-order correction은

$$
\boxed{\ E^1 = -3eaE_{\text{ext}},\quad 0,\quad 0,\quad +3eaE_{\text{ext}}\ }
\tag{49}
$$

**$E_2$는 세 준위로 갈라진다**: $-3eaE_{\text{ext}}$, $0$ ($\psi_{211}$, $\psi_{21-1}$의 doubly degenerate), $+3eaE_{\text{ext}}$.

## (c) Good states와 electric dipole moment

### Eigenvector 구하기

$2\times2$ block에서 $(\mathsf{W} - \lambda)\mathbf{v} = 0$을 푼다 ($\mathbf{v} = (\alpha, \beta)^T$는 $\psi_{200}$, $\psi_{210}$의 계수).

$$
\lambda = -w:\quad
\begin{pmatrix} w & -w \\ -w & w \end{pmatrix}\begin{pmatrix} \alpha \\ \beta \end{pmatrix} = 0
\quad\Rightarrow\quad
\alpha = \beta
\tag{49a}
$$

$$
\lambda = +w:\quad
\begin{pmatrix} -w & -w \\ -w & -w \end{pmatrix}\begin{pmatrix} \alpha \\ \beta \end{pmatrix} = 0
\quad\Rightarrow\quad
\alpha = -\beta
\tag{49b}
$$

Normalize하면 good states는

$$
\psi_\pm = \frac{1}{\sqrt2}\left(\psi_{200} \pm \psi_{210}\right)\ \ (E^1 = \mp3eaE_{\text{ext}}),
\qquad
\psi_{211},\ \psi_{21-1}\ \ (E^1 = 0)
\tag{50}
$$

### Theorem 관점: 어떤 symmetry가 남았나

Electric field가 $z$축을 골라서, $H^0$의 완전한 rotational symmetry와 parity는 깨지고 **$z$축에 대한 회전 대칭**만 남는다. 후보 operator를 하나씩 확인하면

| Operator | $H^0$와 commute? | $H'_S \propto z$와 commute? | 쓸 수 있나 |
| --- | --- | --- | --- |
| $L_z$ | ✓ | ✓ ($z$는 $z$축 회전에 불변) | ✓ |
| $L^2$ | ✓ | ✗ ($[L^2, z] \neq 0$) | ✗ |
| Parity $\Pi$ | ✓ | ✗ ($\Pi z\Pi^\dagger = -z$) | ✗ |

$L_z$의 eigenvalue는 $\psi_{200}, \psi_{211}, \psi_{210}, \psi_{21-1}$에 대해 $\hbar(0, 1, 0, -1)$이다. 따라서 $\psi_{211}$, $\psi_{21-1}$은 $L_z$로 구별되어 바로 good states가 되지만, $\psi_{200}$과 $\psi_{210}$은 둘 다 $m = 0$이라 구별되지 않는다. 이 둘을 구별해 줄 수 있는 $L^2$와 parity는 바로 electric field가 깨뜨린 symmetry이므로, 이 $2\times2$ block은 위처럼 **직접 대각화해야** 한다. 거꾸로 말하면, field가 parity를 깨뜨렸기 때문에 parity가 반대인 $2s$와 $2p$가 섞일 수 있는 것이다.

> [!note] $\psi_{211}$과 $\psi_{21-1}$의 degeneracy는 exact하다
> $\mathsf{W}$의 eigenvalue $0$이 두 번 겹치므로 $\mathsf{W}$만으로는 이 두 state 사이의 good states가 정해지지 않는다 (footnote 6). 그런데 $xz$ 평면에 대한 거울 반사 $\sigma$ ($y \to -y$, 즉 $\phi \to -\phi$)는 $H^0$, $H'_S$와 모두 commute하고 $\sigma Y_1^1 = -Y_1^{-1}$로 $m \leftrightarrow -m$을 바꾼다. 따라서 $m$과 $-m$의 에너지는 모든 order에서 같고, 이 두 state의 어떤 linear combination (예: 실수 궤도 $2p_x$, $2p_y$)을 쓰든 똑같이 good states다.

### 물리적 그림: $sp$ hybrid orbital

(44)를 넣고 정리하면 ($z = r\cos\theta$)

$$
\psi_\pm = \frac{1}{\sqrt{64\pi}}\,a^{-3/2}\left[2 - \frac{r \mp z}{a}\right]e^{-r/2a}
\tag{50a}
$$

$\psi_+$의 대괄호는 $+z$축 위($z = r$)에서 항상 $2$이지만, $-z$축 위($z = -r$)에서는 $2 - 2r/a$로 $r$과 함께 크기가 커진다. 그래서 전자 밀도가 **$-z$ 쪽으로 치우친** $sp$ hybrid orbital이 되고, $\psi_-$는 그 반대다. $+z$ 방향 field는 음전하인 전자를 $-z$ 쪽으로 밀기 때문에, 전자가 이미 그쪽에 가 있는 $\psi_+$가 에너지가 낮다. 아래 계산이 이를 정량적으로 확인해 준다.

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
