---
title: "QM lecture note - Spin-Orbit Interaction and Fine Structure"
date: "2026-10-25"
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
[[QM lecture note - The Relativistic Correction to the Kinetic Energy]]


# 오늘의 핵심


# 필기 내용

Sakurai 5.3.2 Spin-Orbit Interaction and Fine Structure

## Symbol table

| Symbol | Meaning |
|--|--|
| $V_c(r)$ | Central (spin-independent) potential, screened Coulomb potential |
| $\phi(r)$ | Electrostatic potential |
| $e$ | Electron charge ($e < 0$, Sakurai convention) |
| $\mathbf{E}$ | Electric field felt by the valence electron |
| $\mathbf{B}_{\text{eff}}$ | Effective magnetic field in the electron rest frame |
| $\boldsymbol{\mu}$ | Electron magnetic moment |
| $\mathbf{L}, \mathbf{S}, \mathbf{J}$ | Orbital, spin, total angular momentum |
| $H_{LS}$ | Spin-orbit Hamiltonian (naive) |
| $V_{LS}$ | Spin-orbit perturbation ($= \frac{1}{2}H_{LS}$) |
| $\mathscr{Y}_l^{j=l\pm1/2,m}$ | Spin-angular function |
| $R_{nl}(r)$ | Radial wave function |
| $\Delta_{nlj}$ | First-order energy shift by $V_{LS}$ |
| $\langle\cdots\rangle_{nl}$ | Radial expectation value |
| $p_r$ | Radial momentum operator |
| $\alpha$ | Fine-structure constant, $\alpha = e^2/\hbar c$ |

## Central potential of hydrogenlike atoms

지금까지는 전자가 하나밖에 없는 상황을 다루었으니, 핵으로 인한 potential을 그냥 순수 쿨롱 포텐셜로 쓸 수 있었다. 그러나 전자가 여러개 있는 등, 순수하지 않은 상황도 풀기 위해서, 

중심을 향하는 potential을 이렇게 일반화된 함수로 쓸 것이다. 
$$
V_c(r) = e\phi(r)
\tag{5.105}
$$
$e$는 전자의 전하이기 때문에 음수이다. $V_c(r)$ 이 에너지의 차원이고, $\phi(r)$은 전압 차원의 물리량임을 상기.
표기가 표기인지라 헷갈리기 쉽다. 
## Spin-orbit interaction

Fine structure는 전자가 오비탈을 돌면서 느끼는 자기장과, 스핀의 자기모멘트가 interaction하여 생기는 추가적인 에너지를 고려하는 것이다. 

전자를 원점으로 두는 좌표계에서는 핵이 각운동량 제곱 $\hbar^2 \, l(l+1)$로 돌고있다. 
이는 마치 원형 도선의 중심에서 자기장을 느끼는 경우다. 
==(궤도 모양에 대한 가정은 필요 없다. Biot-Savart 식은 순간 속도만 쓰므로 원운동이 아니어도 성립한다. 진짜 숨은 가정은 전자 rest frame이 inertial이라는 것이고, 아래 Thomas precession 절 참고.)==


전기장은 전압 함수를 $- \nabla$ 하여 구할 수 있다! 이 식을 central potential로 쓰면, 
$$
\mathbf{E} = - \nabla \phi(r)= -\left(\frac{1}{e}\right)\nabla V_c(r)
\tag{5.106}
$$
미분하는 함수가 $r$에만 의존하므로, 그라디언트는 $\nabla = \hat{\mathbf{r}} \frac{\partial}{\partial r} = \frac{\mathbf{x}}{r} \frac{\partial}{\partial r}$라고 단순화할 수 있다. 
결국, 전기장은

$$
\mathbf{E} = \left(\frac{\mathbf{x}}{r}\right)\frac{1}{(-e)}\frac{dV_c}{dr}
$$

흡사 비오-사바르 법칙과 같은 식을 이용해 자기장을 구하면, 
$$
\mathbf{B}_{\text{eff}} = -\left(\frac{\mathbf{v}}{c}\right)\times\mathbf{E}
\tag{5.107}
$$
전자의 자기모멘트는 스핀에 의해 이렇게 주어진다. 
$$
\boldsymbol{\mu} = \frac{e\mathbf{S}}{m_ec}
\tag{5.108}
$$
에너지는 -(자기모멘트)$\cdot$(자기장) 이다. 
$$
H_{LS} \overset{?}{=} -\boldsymbol{\mu}\cdot\mathbf{B}_{\text{eff}} = \boldsymbol{\mu}\cdot\left(\frac{\mathbf{v}}{c}\times\mathbf{E}\right)
$$
속도를 운동량에 대해 나타내고, 식에 자기모멘트를 대입하면, 

$$
H_{LS} = \left(\frac{e\mathbf{S}}{m_ec}\right)\cdot\left[\frac{\mathbf{p}}{m_ec}\times\left(\frac{\mathbf{x}}{r}\right)\frac{1}{(-e)}\frac{dV_c}{dr}\right] = \frac{1}{m_e^2c^2}\frac{1}{r}\frac{dV_c}{dr}(\mathbf{L}\cdot\mathbf{S})
\tag{5.109}
$$
==$\frac{1}{r}\frac{dV_c}{dr}$는 $r$의 함수인 연산자이지만, $\mathbf{L}$, $\mathbf{S}$와 commute한다. 그래서 expectation value가 radial 부분 (5.113)과 angular 부분 (5.114)로 분리되므로, 아직 신경 쓸 필요가 없다.== 

중요한 건, 이제 해밀토니안에 $(\mathbf{L}\cdot\mathbf{S})$ 라는 흔치 않은 연산자가 들어갔다는 점이다. 
이제 공간적인 회전(오비탈)과 스핀이 서로 상호작용하는 것이다. 


### Factor of two (Thomas precession)
==전자는 원운동(가속)을 하므로 전자 rest frame은 회전하는 non-inertial frame이다. 이 회전 효과(Thomas precession)를 보정하면 factor $\frac{1}{2}$이 붙어서 $V_{LS} = \frac{1}{2}H_{LS}$가 된다. 정확한 설명은 Dirac equation에서 나온다.==

## Choice of base kets
현재 unperturbed Hamiltonian은 이렇게 생겼다. 
$$
H_0 = \frac{\mathbf{p}^2}{2m} + V_c(r)
\tag{5.110}
$$
$(\mathbf{L}\cdot\mathbf{S})$에 대한 eigenket을 basis 삼아야 앞으로 삶이 편안해질 것이다. 

오비탈과 스핀의 상태를 함께 고려하는 state로는 다음 두 가지 선택지가 있다. 

$$
\text{Set 1: The eigenkets of } \mathbf{L}^2, L_z, \mathbf{S}^2, S_z
$$
$$
\text{Set 2: The eigenkets of } \mathbf{L}^2, \mathbf{S}^2, \mathbf{J}^2, J_z
\tag{5.111}
$$

이 중에서 인생이 편안해 지는 것은 바로 두번째 옵션이다. 
왜냐면 $\mathbf{J}^2, J_z$이 $(\mathbf{L}\cdot\mathbf{S})$와 commute하기 때문이다. 
$\mathbf{J}^2 = \mathbf{L}^2 + \mathbf{S^2} +2(\mathbf{L}\cdot\mathbf{S})$
$(\mathbf{L}\cdot\mathbf{S}) = L_xS_x + L_yS_y+L_zS_z$
$J_z = L_z + S_z$
$[L_z,  L_xS_x + L_yS_y] = i\hbar(L_yS_x -  L_xS_y)$
$[S_z,  L_xS_x + L_yS_y] = i\hbar(L_xS_y - L_yS_x )$
라는 점을 떠올리며 눈으로 풀어보자.

이로서 우리가 풀어갈 문제가 good state를 이미 아는 degenerate perturbation theory라는 점을 알게 되었다. 

본격적인 적분을 하기 전에, wave function이 이런 꼴로 나옴을 상기하자. 
$$
\psi_{nlm} = R_{nl}(r)\mathscr{Y}_l^{j=l\pm1/2,m}
\tag{5.112}
$$

## First-order energy shift (Landé's interval rule)

First-order energy shift를 구하는 문제는 이제 $\frac{1}{m_e^2c^2}\frac{1}{r}\frac{dV_c}{dr}(\mathbf{L}\cdot\mathbf{S})$의 expectation value를 구하는 것이다. 
$\frac{1}{r}\frac{dV_c}{dr}$은 일단 모르는 채로 남겨두고, $\langle \mathbf{L}\cdot\mathbf{S} \rangle$을 구하는 것에 집중하자. 
우리가 선택한 basis가 
$$
\text{Set 2: The eigenkets of } \mathbf{L}^2, \mathbf{S}^2, \mathbf{J}^2, J_z
\tag{5.111}
$$
이며, 
$$
 (\mathbf{L}\cdot\mathbf{S}) = \frac{1}{2}(\mathbf{J}^2 - \mathbf{L}^2 - \mathbf{S^2})
$$
라는 점을 생각하면, 생각보다 간단한 문제라는 것을 알 수 있다!
스핀은 $1/2$이기 때문에, $j$값의 선택지가 $l \pm 1/2$, 이 두 가지밖에 없다는 점 또한 상기하자. 

$\mathbf{J}^2$에 대한 eigenvalue는 
$\hbar^2(l \pm 1/2)(l +1 \pm 1/2) = \hbar^2 \left\{ l^2 + (1\pm1)l +\frac{1}{4}(1\pm2)\right\}$
$\mathbf{L}^2$에 대한 eigenvalue는 
$\hbar^2 l(l+ 1) = \hbar^2 \left\{ l^2 + l \right\}$
$\mathbf{S}^2$에 대한 eigenvalue는 
$\hbar^2  \frac{1}{2} (1+\frac{1}{2})= \hbar^2  \frac{3}{4}$

전부 다 잘 더하고 빼면 아래 식이 나온다. 


$$
\int\mathscr{Y}^\dagger\,\mathbf{S}\cdot\mathbf{L}\,\mathscr{Y}\,d\Omega = \frac{1}{2}\left[j(j+1) - l(l+1) - \frac{3}{4}\right]\hbar^2 = \frac{\hbar^2}{2}\begin{cases} l & j = l + \frac{1}{2} \\ -(l+1) & j = l - \frac{1}{2} \end{cases}
\tag{5.114}
$$

주의! 여기서 $j = l \pm 1/2$를 나누는 건 스핀의 up/down이 아니란 점! 헷갈리지 말자. 
$j =l +1/2$와 $j =l - 1/2$각각은 업스핀과 다운 스핀 상태가 섞여있다. 

아무튼, 정리를 이어가면, 

$$
\Delta_{nlj} = \frac{1}{2m_e^2c^2}\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl}\frac{\hbar^2}{2}\begin{cases} l & j = l + \frac{1}{2} \\ -(l+1) & j = l - \frac{1}{2} \end{cases}
$$

아직 모르는 부분은 그저 적분으로 풀 수밖에 없어.
$$
\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl} \equiv \int_0^\infty R_{nl}\frac{1}{r}\frac{dV_c}{dr}R_{nl}\,r^2\,dr
\tag{5.113}
$$

## Example: sodium D lines (Fig. 5.2)

전자 11개를 가지고 있는 Na를 예시로 생각해 보자. 
$$
(1s)^2(2s)^2(2p)^6(3s)
\tag{5.115}
$$
![[Pasted image 20261025221158.png]]

소금등!

$3s$에 있는 최외각전자가 들뜨는 경우를 생각해 보자. 
이제 순수한 쿨롱 포텐셜이 아니기 때문에 $3s$ 와 $3p$가 에너지 차이가 난다. 
또한, 같은 $3p$에 속해서 같은 $l=1$값을 가져도, spin-orbital interaction에 의해 $j$값은 $\frac{2 \pm 1}{2}$로 다를 수 있다. 
이 차이가 또 ==line splitting==을 만든다. 

그래서 $3s \rightarrow 3p$의 전환이 두 가지 에너지 차이를 가진다. (그림 참고)
![[Pasted image 20261025222212.png]]

실제로 스펙트럼을 분석하면, 상당히 비슷한 파장인 5896과 5890 옴스트롬 선이 보인다고 한다. 

이걸 역산하면 Na에서 $\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl}$ 값을 역산할 수 있겠는데?
$\omega = \frac{2\pi c}{\lambda}$로 진동수 차이를 역산 → 에너지 차이 역산 → $\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl}$ 

> [!note] AI 답변 — D line으로 $\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{3p}$ 역산하기
> **1. 파장 → 에너지 차이** ($hc = 12398$ eV·Å)
> 
> $$
> \Delta E = \hbar\Delta\omega = 2\pi\hbar c\left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right) = 12398\,\text{eV·Å}\times\left(\frac{1}{5890} - \frac{1}{5896}\right)\text{Å}^{-1} \approx 2.14\times10^{-3}\,\text{eV}
> $$
> 
> **2. 에너지 차이 → radial expectation value** 
> (5.113)에서 $j = l + \frac{1}{2}$와 $j = l - \frac{1}{2}$의 차이를 구하면
> 
> $$
> \Delta E = \frac{\hbar^2}{4m_e^2c^2}\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl}\left[l + (l+1)\right]
> $$
> 
> $l = 1$이면 $[\cdots] = 3$이므로
> 
> $$
> \left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{3p} = \frac{4(m_ec^2)^2}{3(\hbar c)^2}\Delta E \approx \frac{4\times(0.511\times10^6\,\text{eV})^2}{3\times(1973\,\text{eV·Å})^2}\times2.14\times10^{-3}\,\text{eV} \approx 190\,\text{eV/Å}^2
> $$
> 
> **3. 크기 비교** 
> $e^2/a_0^3 = 27.2\,\text{eV}/a_0^2 \approx 97\,\text{eV/Å}^2$이므로 $\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{3p} \approx 2\,\frac{e^2}{a_0^3}$이다. 아래 (5.116)의 차원 분석 추정 $\sim e^2/a_0^3$과 order가 일치한다. (정밀한 파장 5889.95 Å, 5895.92 Å을 써도 $\Delta E \approx 2.13$ meV, 약 $1.96\,e^2/a_0^3$로 거의 같다.)
> 
> **역산이 깔끔하게 되는 이유**: $3p_{3/2}$와 $3p_{1/2}$의 차이를 보면 다른 보정들이 상쇄된다. 예를 들어 5.3.1의 relativistic kinetic correction (5.104)는 $n, l$에만 의존하고 $j$에는 의존하지 않아서 차이에서 사라진다. 남는 것은 순수한 $\mathbf{L}\cdot\mathbf{S}$ 효과뿐이다. 단, $V_{LS} = \frac{1}{2}H_{LS}$라는 phenomenological 처리는 믿고 계산한 것이다.

## Order of magnitude
fine structure가 얼마나 미미한지 알아보는 단계.
$$
\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl} \sim \frac{e^2}{a_0^3}
\tag{5.116}
$$

$$
\frac{e^2}{m_ec^2} : \frac{\hbar}{m_ec} : a_0 :: 1 : 137 : (137)^2
\tag{5.117}
$$

$$
\frac{e^2}{\hbar c} = \frac{1}{137}
\tag{5.118}
$$

$$
\left(\frac{e^2\hbar^2}{a_0^3m_e^2c^2}\right) : \left(\frac{e^2}{a_0}\right) :: \left(\frac{1}{137}\right)^2 : 1
\tag{5.119}
$$

> [!note] AI 답변 — Fine structure는 얼마나 작은가
> **(5.116)** $V_c \sim e^2/r$이고 $r \sim a_0$이므로, 차원만 보면 $\frac{1}{r}\frac{dV_c}{dr} \sim \frac{e^2}{a_0^3}$이다. 이를 (5.113)에 넣으면 fine-structure splitting은 다음과 같다.
> 
> $$
> \Delta_{\text{fine}} \sim \frac{1}{m_e^2c^2}\cdot\frac{e^2}{a_0^3}\cdot\hbar^2 = \frac{e^2}{a_0}\left(\frac{\hbar}{m_ec\,a_0}\right)^2
> $$
> 
> Balmer splitting(gross structure)은 $e^2/a_0$ 정도이므로, 둘의 비는 $\left(\hbar/m_ec\,a_0\right)^2$이다.
> 
> **(5.117)** 세 길이 scale, 즉 classical electron radius $e^2/m_ec^2$, Compton wavelength $\hbar/m_ec$, Bohr radius $a_0 = \hbar^2/m_ee^2$는 서로 $\alpha$배씩 차이 난다. 따라서 $\hbar/(m_ec\,a_0) = \alpha$이다.
> 
> **(5.119)** 그러므로 $\Delta_{\text{fine}}/\Delta_{\text{Balmer}} \sim \alpha^2 \approx (1/137)^2 \approx 5\times10^{-5}$이다.
> 
> **핵심**: Fine structure는 gross structure에 비해 $\alpha^2$배 작은 보정이다. Bohr orbit에서 전자 속도는 $v/c \sim \alpha$이므로, $\alpha^2$는 상대론적 효과의 크기 $(v/c)^2$와 같다. 그래서 5.3.1의 relativistic kinetic correction도 같은 order이고, 둘을 함께 fine structure라 부른다.



## Coulomb potential case (hydrogen atom)

아직 안 푼 부분을 가장 간단한 시스템을 가정하고 풀어보자.

수소전자라서 포텐셜이 순수 쿨롱 포텐셜이라면, 
$$
\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle_{nl} = \left\langle\frac{Ze^2}{r^3}\right\rangle_{nl}
\tag{5.120}
$$
관건은 $1/r^3$의 expectation value를 ==계산하는== 것이다. 
이건 아직 해본 적이 없다. 

### $\langle 1/r^3 \rangle$: commutator trick → 으악 하기 싫어! 그렇지만 ==중요할 것 같아==
일일이 적분을 하지 않고, 꼼수를 써서 풀 수 있는 문제이다. 
지금은 수소 전자이니까 unperturbed Hamiltonian이 $H_{0}=\frac{{\bf p}^{2}}{2m_{e}}-\frac{Z e^{2}}{r}$ 라는 걸 생각.
==$H_0\ket{nlm} = E_n\ket{nlm}$==이 성립, 
$$
\bra{nlm}[H_0, A]\ket{nlm} = \bra{nlm}H_0 A - A H_0\ket{nlm} = (E_n - E_n)\bra{nlm}A\ket{nlm} = 0
\tag{5.121}
$$
그러하여, **어떤 연산자 A이든 간에** 위 성질로 $[H_0, A]$의 expectation value $\langle [H_0, A] \rangle$가 0이다. 

이 성질을 어떻게 활용하냐면, 먼저 $H_0$에 있는 kinetic energy part를
$$
\frac{{\bf p}^{2}}{2m_{e}} = \frac{p_r^2}{2m_{e}} + \frac{\mathbf{L}^2}{2m_{e}r^2}
$$
==이렇게 radial 부분과 각운동량 부분으로 나눈다. $p_r^2$ 항은 $p_r$과 commute하므로 아래 commutator에서 사라지고, centrifugal 항 $\frac{l(l+1)\hbar^2}{2m_er^2}$만 남는다.== 
$A$연산자를 $p_r$로 둔다. 그러면 아래 식을 얻는다. 
$$
\bra{nlm}\left[\frac{l(l+1)\hbar^2}{2m_er^2} - \frac{Ze^2}{r}, p_r\right]\ket{nlm} = 0
\tag{5.122}
$$
 그리고 $\left[\frac{l(l+1)\hbar^2}{2m_er^2} - \frac{Ze^2}{r}, p_r\right]$을 계산한다. 
 $[r,p_r] = i \hbar$이라는 conjugate relation을 이용, 
 
 $$
 p_r = -i\hbar\frac{1}{r}\frac{\partial}{\partial r}r= -i \hbar (\frac{\partial }{\partial r}+\frac{1}{r})
 $$
 
 이다. 
  이렇게 운동량은 위치에 대한 미분연산자이다. 
 Commutator를 직접 계산해 보면, 운동에너지항이 미분되면서 $1/r^3$항이 나온다는 것을 알 수 있다. 
  
  $$
a = \frac{l(l+1)\hbar^2}{2m_e}, \qquad b = -Ze^2
$$

$$
\left[\frac{l(l+1)\hbar^2}{2m_er^2} - \frac{Ze^2}{r}, p_r\right] = \left[a r^{-2} + b r^{-1},\; -i\hbar\frac{\partial}{\partial r}\right] = \;?
$$
나눠서 잘 풀어보면, 

$$
\left[r^{-2}, \frac{\partial}{\partial r}\right] = r^{-2}\frac{\partial}{\partial r} - \frac{\partial}{\partial r}r^{-2} \qquad \text{(acting on } f(r)\text{)}
$$

$$
= r^{-2}\frac{\partial}{\partial r} - \left(-2r^{-3} + r^{-2}\frac{\partial}{\partial r}\right)
$$

$$
= 2r^{-3}
$$
결국 $r^{-2}$가 미분된 게 부호가 바뀌어서 나오고

$$
\left[r^{-1}, \frac{\partial}{\partial r}\right] = r^{-1}\frac{\partial}{\partial r} - \frac{\partial}{\partial r}r^{-1}
$$

$$
= r^{-1}\frac{\partial}{\partial r} - \left(-r^{-2} + r^{-1}\frac{\partial}{\partial r}\right)
$$

$$
= r^{-2}
$$
결국 $r^{-1}$가 미분된 게 부호가 바뀌어서 나온다. 

모두 정리하면, 
$$
\therefore \left[a r^{-2} + b r^{-1},\; -i\hbar\frac{\partial}{\partial r}\right] = -i\hbar\left(2a r^{-3} + b r^{-2}\right)
$$

$a$와 $b$를 대입하면 다시 아래 결론을 얻는다. 

$$
\bra{nlm}\left(-\frac{l(l+1)\hbar^2}{m_er^3} + \frac{Ze^2}{r^2}\right)\ket{nlm} = 0
\tag{5.123}
$$
즉, $\langle \frac{1}{r^2} \rangle$을 알면 $\langle \frac{1}{r^3} \rangle$ 도 알 수 있다는 의미. 

$$
\left\langle\frac{Ze^2}{r^3}\right\rangle_{nl} = \frac{m_e}{l(l+1)\hbar^2}\left\langle\frac{(Ze^2)^2}{r^2}\right\rangle_{nl} = -\frac{2m_e^2c^2Z^2\alpha^2}{nl(l+1)(l+1/2)\hbar^2}E_n^{(0)}
\tag{5.124}
$$

### Result

수소 전자의 경우는 fine structure energy가 이렇게 나온다. 
$$
\Delta_{nlj} = -\frac{Z^2\alpha^2}{2nl(l+1)(l+1/2)}E_n^{(0)}\begin{cases} l & j = l + \frac{1}{2} \\ -(l+1) & j = l - \frac{1}{2} \end{cases}
\tag{5.125}
$$

### $l = 0$ and the Darwin term
==(5.124)는 $l(l+1)$로 나누므로 $l = 0$에서는 쓸 수 없다. 그런데 (5.125) 자체는 $l = 0$에서도 0이 아닌 값을 가지며, 이것이 Dirac equation의 정확한 결과와 일치한다. 이 shift의 기원이 Darwin term이다.==



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - The Relativistic Correction to the Kinetic Energy]]
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[Sakurai 5.17 - Darwin Term and Fine Structure]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.3.2

# 원본 필기 이미지
