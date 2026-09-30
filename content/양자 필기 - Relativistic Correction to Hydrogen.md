---
title: 양자 필기 - Relativistic Correction to Hydrogen
date: "2026-09-30"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!error] 비공식 자료, 책임 안 짐
> 이것은 [[양자물리 (학부용, Griffiths)]] 강의를 듣고 TA가 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 
> 교수님께서 검토하신 자료가 **아니므로,** 전문성을 보장하지 않습니다.

# 지난 강의
- [[양자 필기 - Higher-Order Degeneracy]] (Griffiths 7.2.3)

# 오늘의 핵심

Relativistic kinetic energy에 의해 더해지는 perturbation Hamiltonian은 아래와 같이 구해진다. 


$$
\boxed{\ H'_r = -\frac{p^4}{8{m}^3c^2}\ }
\tag{9}
$$
$p^2\ket{\psi} = 2m(E - V)\ket{\psi}$을 사용하면, first-order perturbation energy를 Bohr potential $V(r)$ 에 대한 expectation value로 나타낼 수 있다. 

$$
E_r^1 = -\frac{1}{8m^3c^2}\bra{p^2\psi}\ket{p^2\psi} = -\frac{1}{2mc^2}\bra{\psi}(E-V)^2\ket{\psi} = -\frac{1}{2mc^2}\left[E^2 - 2E\langle V\rangle + \langle V^2\rangle\right]
\tag{12}
$$

Expectation value를 몇 개 계산하고, 

$$
\left\langle\frac1r\right\rangle = \frac{1}{n^2 a}
\tag{14}
$$

$$
\left\langle\frac{1}{r^2}\right\rangle = \frac{1}{(\ell + 1/2)\,n^3a^2}
\tag{15}
$$

이를 (12)에 대입하면 first perturbaion correction을 얻는다. 


$$
\boxed{\ E_r^1 = -\frac{(E_n)^2}{2mc^2}\left[\frac{4n}{\ell + 1/2} - 3\right]\ }
\tag{17}
$$
$\psi_{n\ell m_\ell}$이 good states이며, $n,\ \ell,\ m_\ell$이 **good quantum numbers**다. 따라서 굳이 degenerate perturbation theory를 쓸 필요가 없었다. 

이유는 [[양자 필기 - Good States in Degenerate Perturbation Theory|지난 시간]]에서 배운 good state의 두 가지 조건을  $\psi_{n\ell m_\ell}$이 충족하기 때문이다. 

- $H'_r \propto p^4$는 **spherically symmetric**이라 $L^2$, $L_z$와 commute한다. 즉, $L^2$, $L_z$가 $A$역할을 한다. 
- 주어진 $E_n$의 $n^2$개 state는 $L^2$, $L_z$ eigenvalue 조합 양자수 $(\ell, m_\ell)$으로 **모두 구별**된다. (즉, states는 $A$에 대해 모두 다른 eigen value를 가진다.)



# 기호 정리

| Symbol              | Meaning                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| $H_{\text{Bohr}}$   | 1학기에 푼 수소 원자 Hamiltonian (kinetic + Coulomb)                                                   |
| $\alpha$            | Fine structure constant, $e^2/(4\pi\epsilon_0\hbar c) \approx 1/137.036$                       |
| $mc^2$              | 전자의 rest energy (약 511 keV)                                                                    |
| $E_n$               | Bohr energy, $-13.6\,\text{eV}/n^2$                                                            |
| $a$                 | Bohr radius, $4\pi\epsilon_0\hbar^2/(me^2) \approx 0.529\,\text{Å}$                            |
| $T,\ p$             | Kinetic energy, relativistic momentum                                                          |
| $H'_r$              | Relativistic correction perturbation                                                           |
| $E_r^1$             | Relativistic correction의 first-order energy                                                    |
| $m$                 | 전자의 질량 (magnetic quantum number와 구별하기 위해 후자는 $m_\ell$로 씀! 교과서에는 이 구분이 안 되어 있어서 잘못하면 헷갈릴 지도...) |
| $n,\ \ell,\ m_\ell$ | 수소 원자의 principal, orbital, magnetic quantum number                                             |

# 필기 내용

## 1. 7.3 도입: Bohr Hamiltonian은 전부가 아니다, 나머지 자잘한 Hamiltonian의 영향은 perturbation theory로 풀자

1학기(Section 4.2)에서 수소 원자를 풀 때 쓴 Hamiltonian은 **Bohr Hamiltonian**이다.

$$
H_{\text{Bohr}} = -\frac{\hbar^2}{2m}\nabla^2 - \frac{e^2}{4\pi\epsilon_0}\frac{1}{r}
\tag{1}
$$

전자의 kinetic energy와 Coulomb potential energy뿐이다. 핵의 운동은 $m$을 **reduced mass**로 바꾸면 보정된다 (Problem 5.1). 그보다 중요한 것이 **fine structure**이고, 서로 다른 두 mechanism에서 나온다.

1. **Relativistic correction** (이 노트)
2. **Spin-orbit coupling** ([[양자 필기 - Spin-Orbit Coupling and Fine Structure]])

Fine structure는 Bohr energy보다 $\alpha^2$배 작은 perturbation이다. 여기서

$$
\alpha \equiv \frac{e^2}{4\pi\epsilon_0\hbar c} \approx \frac{1}{137.036}
\tag{2}
$$

가 유명한 **fine structure constant**다. 그보다 $\alpha$배 더 작은 것이 전기장의 quantization에서 오는 **Lamb shift**, 또 한 자릿수 더 작은 것이 전자와 양성자의 magnetic dipole moment 사이 상호작용에서 오는 **hyperfine structure**다.

| Correction | Order |
| --- | --- |
| Bohr energies | $\alpha^2 mc^2$ |
| Fine structure | $\alpha^4 mc^2$ |
| Lamb shift | $\alpha^5 mc^2$ |
| Hyperfine splitting | $(m/m_p)\alpha^4 mc^2$ |


## 2. Relativistic kinetic energy

$H_{\text{Bohr}}$의 첫 항은 classical kinetic energy에서 왔다.

$$
T = \frac12 mv^2 = \frac{p^2}{2m}
\quad\xrightarrow{\ \mathbf{p} \to -i\hbar\nabla\ }\quad
T = -\frac{\hbar^2}{2m}\nabla^2
\tag{3}
$$

하지만 relativistic kinetic energy는 total energy에서 rest energy를 뺀 것이다.

$$
T = \frac{mc^2}{\sqrt{1 - (v/c)^2}} - mc^2
\tag{4}
$$

이것을 relativistic momentum

$$
p = \frac{mv}{\sqrt{1-(v/c)^2}}
\tag{5}
$$

로 표현해야 한다. $v$를 소거하면

$$
p^2c^2 + m^2c^4 = \frac{m^2v^2c^2 + m^2c^4\left[1-(v/c)^2\right]}{1-(v/c)^2} = \frac{m^2c^4}{1-(v/c)^2} = \left(T + mc^2\right)^2
\tag{6}
$$

이므로

$$
T = \sqrt{p^2c^2 + m^2c^4} - mc^2
\tag{7}
$$

## 3. Nonrelativistic limit 전개

수소 전자의 kinetic energy는 약 10 eV로 rest energy 511,000 eV에 비해 아주 작다 (footnote 10). 작은 수 $p/mc$로 전개하면

$$
T = mc^2\left[\sqrt{1 + \left(\frac{p}{mc}\right)^2} - 1\right] = mc^2\left[\frac12\left(\frac{p}{mc}\right)^2 - \frac18\left(\frac{p}{mc}\right)^4 + \cdots\right] = \frac{p^2}{2m} - \frac{p^4}{8m^3c^2} + \cdots
\tag{8}
$$

첫 항은 이미 $H_{\text{Bohr}}$에 있으므로, **lowest-order relativistic correction**은 위 전개식에서 두번째항이다. 

$$
\boxed{\ H'_r = -\frac{p^4}{8m^3c^2}\ }
\tag{9}
$$

## 4. First-order correction: $p^4$를 피하는 트릭

First-order perturbation theory에 의해

$$
E_r^1 = \langle H'_r \rangle = -\frac{1}{8m^3c^2}\bra{\psi}p^4\ket{\psi}= -\frac{1}{8m^3c^2}\bra{p^2\psi}\ket{p^2\psi}
\tag{10}
$$

$p^2\ket{\psi}$를 직접 계산하는 대신 **unperturbed Schrodinger equation**을 이용한다.
$\ket{\psi}$은 unperturbed system에서 eigen state이기 때문에 unperturbed Schrodinger equation을 지금 써도 되는 것이다. 아마도. 

$$
p^2\ket{\psi} = 2m(E - V)\ket{\psi}
\tag{11}
$$

(10)식의 bra에 대해서도 당연히 $\bra{\psi}p^2 = 2m\bra{\psi}(E-V)$이기때문에

$$
E_r^1 = -\frac{1}{8m^3c^2}\bra{p^2\psi}\ket{p^2\psi} = -\frac{1}{2mc^2}\bra{\psi}(E-V)^2\ket{\psi} = -\frac{1}{2mc^2}\left[E^2 - 2E\langle V\rangle + \langle V^2\rangle\right]
\tag{12}
$$

미분 연산자 문제가 potential의 기댓값 문제로 바뀌었다. 여기까지는 어떤 potential에도 성립한다.

## 5. 수소 원자에 적용
혼동이 될 수도 있지만, $p^2\ket{\psi}$에 대한 식은 unperturbed Schrodinger equation에서 왔기 때문에 $V(r)$은 그저 Bohr potential이다. 

식 (12)에 $V(r) = -\frac{1}{4\pi\epsilon_0}\frac{e^2}{r}$을 넣으면

$$
E_r^1 = -\frac{1}{2mc^2}\left[E_n^2 + 2E_n\left(\frac{e^2}{4\pi\epsilon_0}\right)\left\langle\frac1r\right\rangle + \left(\frac{e^2}{4\pi\epsilon_0}\right)^2\left\langle\frac{1}{r^2}\right\rangle\right]
\tag{13}
$$

필요한 기댓값은 unperturbed state $\psi_{n\ell m_\ell}$에서

$$
\left\langle\frac1r\right\rangle = \frac{1}{n^2 a}
\tag{14}
$$

$$
\left\langle\frac{1}{r^2}\right\rangle = \frac{1}{(\ell + 1/2)\,n^3a^2}
\tag{15}
$$

(14)는 virial theorem으로 쉽게 얻을 수 있다. 이 페이지 하단에 유도 식이 있으니 확인인 (Problem 7.15), 
(15)는 쉽지 않다 (Problem 7.42, Feynman–Hellmann theorem 이용). 

$r$의 임의의 거듭제곱에 대한 일반식은 Bethe and Salpeter에 있다 (footnote 12).

Bohr radius $a$를 없애고 $E_n$으로 정리하려면 다음 관계 하나면 충분하다.

$$
\frac{e^2}{4\pi\epsilon_0}\frac{1}{a} = -2n^2E_n
\tag{16}
$$

(13)의 괄호 안 세 항이 각각 $E_n^2$, $-4E_n^2$, $\dfrac{4n}{\ell+1/2}E_n^2$이 되어

$$
\boxed{\ E_r^1 = -\frac{(E_n)^2}{2mc^2}\left[\frac{4n}{\ell + 1/2} - 3\right]\ }
\tag{17}
$$

Relativistic correction은 $E_n$보다 대략 $E_n/mc^2 \approx 2\times10^{-5}$배 작다.

## 6. 왜 nondegenerate perturbation theory를 써도 되었나

수소 원자는 degeneracy가 심한데 (10)에서 nondegenerate 공식을 그냥 썼다. 이게 괜찮은 이유는 [[양자 필기 - Good States in Degenerate Perturbation Theory]]에서 언급한 대칭성 때문이다.

- $H'_r \propto p^4$는 **spherically symmetric**이라 $L^2$, $L_z$와 commute한다. 즉, $L^2$, $L_z$가 $A$역할을 한다. 
- 주어진 $E_n$의 $n^2$개 state는 $L^2$, $L_z$ eigenvalue 조합 양자수 $(\ell, m_\ell)$으로 **모두 구별**된다. (states는 $A$에 대해 모두 다른 eigen value를 가진다.)

따라서 $\psi_{n\ell m_\ell}$이 good states이고, $n,\ \ell,\ m_\ell$이 **good quantum numbers**다.


## 7. Degeneracy는 얼마나 풀렸나

(17)을 보면 $E_r^1$이 $\ell$에 의해서는 바뀌지만 $m_\ell$에는 무관함을 알 수 있다. 

- **$m_\ell$ degeneracy ($2\ell+1$-fold)는 남는다.** Rotational symmetry 때문이고 (Example 6.3), 이 perturbation도 rotational symmetry를 유지한다.
- **$\ell$ degeneracy는 사라진다.** 이것은 $1/r$ potential에만 있는 추가 symmetry에서 오는 "accidental" degeneracy라서 (Problem 6.34), 거의 **어떤 perturbation에도 깨질 것**으로 예상된다.

## 8. 관련 연습문제

- **Problem 7.14**: (a) Bohr energy를 $\alpha$와 $mc^2$로 표현. (b) Fine structure constant를 first principles로 계산 (Nobel Prize 문제, 풀지 말 것).
- **Problem 7.15**: Virial theorem으로 (14) 증명.
	이건 간단하니까 바로 풀어보자. 
	 Virial theorem: $-2\langle T \rangle = \langle V\rangle$
	 $E_n = \langle V\rangle/2 = \frac{e^2}{4\pi\epsilon_0}\frac{1}{a} \frac{1}{-2n^2}$
	 $\langle V\rangle =  - \frac{e^2}{4\pi\epsilon_0} \langle \frac{1}{r} \rangle$
	 $\langle \frac{1}{r} \rangle = \frac{1}{an^2}$
- **Problem 7.16**: Problem 4.52의 $\langle r^s\rangle$ ($\psi_{321}$)을 $s = 0, -1, -2, -3$에서 확인, $s = -7$에 대해 comment.
- **Problem 7.17(HW2)**: 1D harmonic oscillator의 lowest-order relativistic correction (Problem 2.12의 technique 이용). → 결국 $p^2$의 expectation value를 구하라는 것이다. 계산이 귀찮을 뿐 원리는 쉬움. 
- **Problem 7.18**: $\ell = 0$ state에서 $p^2$, $p^4$가 hermitian임을 보이기 ($\nabla^2(1/r)$의 delta function 주의).
- Further Problems 중 관련: **7.33** (핵의 finite size 보정), **7.42** (Feynman–Hellmann으로 $\langle 1/r\rangle$, $\langle 1/r^2\rangle$), **7.43–7.44** (Kramers' relation).

# 궁금한 내용



# AI의 보충 설명

**1. 이 절을 읽기 위한 1학기 최소 복습**

수소 원자의 eigenstate는 $\psi_{n\ell m_\ell}(r,\theta,\phi) = R_{n\ell}(r)\,Y_\ell^{m_\ell}(\theta,\phi)$이고 $n = 1,2,\dots$, $\ell = 0,\dots,n-1$, $m_\ell = -\ell,\dots,\ell$이다. 에너지가 $n$에만 의존하므로 한 준위에 $\sum_{\ell=0}^{n-1}(2\ell+1) = n^2$개 state가 degenerate하다 (spin 포함 시 $2n^2$). Angular momentum은

$$
L^2\ket{\ell\,m_\ell} = \hbar^2\ell(\ell+1)\ket{\ell\,m_\ell},
\qquad
L_z\ket{\ell\,m_\ell} = \hbar m_\ell\ket{\ell\,m_\ell}
\tag{A1}
$$

**2. Relativistic correction은 항상 에너지를 낮춘다**

$\ell \le n-1$이므로 $\dfrac{4n}{\ell+1/2} \ge \dfrac{4n}{n-1/2} > 4 > 3$. 따라서 (17)의 괄호는 항상 양수이고 $E_r^1 < 0$이다. 직관적으로는 (8)에서 $-p^4$ 항이 말해 주듯 relativistic kinetic energy가 같은 $p$에서 $p^2/2m$보다 **느리게** 증가하기 때문이다. 또 $\ell$이 작을수록 (핵 가까이 가는 궤도일수록) 더 많이 내려가는데, 핵 근처에서 전자가 빨라서 상대론 효과가 크다고 생각하면 자연스럽다.


# 연관 학습 노트
- [[양자물리 (학부용, Griffiths)]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]
- [[QM lecture note - Symmetry, Conservation Laws, and Degeneracy]]
- [[Sakurai 5.17 - Darwin Term and Fine Structure]]

# References

- Griffiths, Introduction to Quantum Mechanics (3rd ed.), Section 7.3 도입부 (Table 7.1), Section 7.3.1, footnotes 10–12, Problems 7.14–7.18, 7.33, 7.42–7.44

# 다음 강의
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]] (Griffiths 7.3.2)

# 필기 원본

손필기 없음. Griffiths 교재 본문을 바탕으로 정리함.
