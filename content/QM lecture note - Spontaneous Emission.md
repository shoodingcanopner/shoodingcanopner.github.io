---
title: "QM lecture note - Spontaneous Emission"
date: "2026-10-26"
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
[[QM lecture note - Photoelectric Effect]]


# 오늘의 핵심


# 필기 내용

> [!info] 이 노트의 설명은 Glia가 작성했다.
> 시험 대비로 빠르게 완성한 노트. 이후 직접 읽으면서 고치거나 보충할 것.

Sakurai 5.8.4 Spontaneous Emission

## Symbol table

| Symbol | Meaning |
|--|--|
| $\ket{\alpha}$ | Initial (excited) atomic state (교과서의 $\ket{i}$) |
| $\ket{n}$ | Final (lower) atomic state |
| $\mathbf{k}$ | Photon wave vector, $\mathbf{k} = (\omega/c)\hat{\mathbf{n}}$ |
| $L$ | Box size for the radiation field |
| $A_0$ | Amplitude of the vector potential |
| $u$ | Electromagnetic energy density |
| $\rho(E)$ | Density of photon states |
| $\tau$ | Lifetime, $1/\tau = w$ |
| $\alpha_{\text{fs}}$ | Fine-structure constant $e^2/\hbar c$ |
| $\varepsilon_\pm, \varepsilon_0$ | Spherical components of $\hat{\boldsymbol{\varepsilon}}$ |
| $\alpha, \alpha'$ | (5.353) 이후: radial quantum number 등 나머지 label (Wigner-Eckart 표기) |
| $\mathscr{R}_{\alpha'\alpha}$ | Radial integral |

## 1. 아이디어

들뜬 원자는 빛이 없어도 스스로 photon을 내고 아래 state로 내려간다. 이게 spontaneous emission이다.

- 엄밀하게는 **전자기장을 양자화**해야 설명된다. 빛이 없는 vacuum에도 zero-point fluctuation이 있어서, 그것이 emission을 "자극"한다고 볼 수 있다. (7장)
- 하지만 여기서는 고전적인 field로 정확한 답을 얻는 trick을 쓴다: **상자 안에 photon 하나 분량의 에너지 $\hbar\omega$를 가진 고전 파동이 있다**고 가정하고, stimulated emission rate (5.302a)를 계산한다.
- 왜 이게 맞나: 양자화된 field에서 emission rate는 photon 수 $N$에 대해 $\propto (N+1)$이다. $N$ 부분이 stimulated emission, **$+1$ 부분이 spontaneous emission**이다. "photon 하나 분량"이 바로 이 $+1$에 해당한다.

[[QM lecture note - Harmonic Perturbation and Detailed Balance of photo emission and absorption|Detailed balance 노트]]에서 본 것처럼, 이 과정이 있어야 열평형의 Boltzmann 분포가 유지된다.

## 2. 상자 안의 고전 파동, 진동하는 자기벡터 포텐셜을 상자 안에. 

$H = H_0 + V(t)$, $V(t) = -(e/m_ec)\mathbf{A}\cdot\mathbf{p}$로 harmonic perturbation이고, emission이므로 (5.302a)를 쓴다.

$$
\mathbf{A} = 2A_0\hat{\boldsymbol{\varepsilon}}\cos(\mathbf{k}\cdot\mathbf{x} - \omega t)
\tag{5.344}
$$

한 변이 $L$인 상자 + periodic boundary condition (photoelectric effect의 (5.333)과 같은 방식):

$$
\mathbf{k} = \frac{2\pi}{L}(n_x\hat{\mathbf{x}} + n_y\hat{\mathbf{y}} + n_z\hat{\mathbf{z}})
\tag{5.345}
$$

### $A_0$ 정하기: 상자 안의 에너지 $= \hbar\omega$
$A_0$는 방출되는 빛의 에너지(전자가 잃는 에너지)로 결정되어야 할 것이다. 
즉, $\omega$에 의전하는 값이다. 
박스 속 전자기장의 에너지를 계산해서 $A_0$에 대한 식을 찾는다. 

$$
\mathbf{E} = -\frac{1}{c}\frac{\partial\mathbf{A}}{\partial t} = 2A_0k\hat{\boldsymbol{\varepsilon}}\sin(\mathbf{k}\cdot\mathbf{x} - \omega t)
\tag{5.346a}
$$

$$
\mathbf{B} = \nabla\times\mathbf{A} = 2A_0(\hat{\boldsymbol{\varepsilon}}\times\mathbf{k})\sin(\mathbf{k}\cdot\mathbf{x} - \omega t)
\tag{5.346b}
$$

$\lvert\mathbf{E}\rvert = \lvert\mathbf{B}\rvert$이므로 $u = (E^2 + B^2)/8\pi = \frac{A_0^2k^2}{\pi}\sin^2(\cdots)$이고, 시간 평균 $\overline{\sin^2} = \frac{1}{2}$을 쓰면

$$
\int_{L^3}d^3x\,\langle u\rangle = \frac{\omega^2}{2\pi c^2}A_0^2L^3 = \hbar\omega
\tag{5.347}
$$

$$
A_0 = \sqrt{\frac{2\pi\hbar c^2}{\omega L^3}}
\tag{5.348}
$$

이 값은 7장에서 field를 양자화해서 얻는 결과 (7.180)과 같다.

## 3. Photon의 density of states
지난 시간에는 전자 입자파의 density of state를 이용했다면, 이제는 

$E = \hbar\omega = 2\pi\hbar cn/L$, $n = (n_x^2 + n_y^2 + n_z^2)^{1/2}$. 모든 방향에 대해 적분하면 (구 껍질)

$$
\rho(E)\,dE = 4\pi n^2\,dn = 4\pi\left(\frac{\omega L}{2\pi c}\right)^2\frac{L}{2\pi\hbar c}\,dE = \frac{\omega^2}{2\pi^2\hbar c^3}L^3\,dE
\tag{5.349}
$$

(Photoelectric effect의 (5.337)과 같은 세기 방법. 차이는 전자 $E \propto k^2$ 대신 photon $E \propto k$라는 것뿐이다.)
$E = \hbar \omega = \hbar c k$ 이니까
## 4. Matrix element: dipole approximation

Emission은 (5.312)의 $e^{+i\omega t}$ 항이므로

$$
V_{n\alpha} = -\frac{eA_0}{m_ec}\bra{n}\hat{\boldsymbol{\varepsilon}}\cdot e^{-i\mathbf{k}\cdot\mathbf{x}}\mathbf{p}\ket{\alpha}
\tag{5.350}
$$

원자 transition의 파장은 ~100 nm 이상으로 원자보다 1000배 크므로 dipole approximation (5.321)
을 쓴다. 
아무튼 이번 범위에는 dipole approximation밖에 안 나오는 군
![[Pasted image 20261027101658.png]]
그리고 (5.327)로 $\mathbf{p} \to \mathbf{x}$로 바꾸면
![[Pasted image 20261027101847.png]]
$$
V_{n\alpha} = -\frac{eA_0}{m_ec}\bra{n}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha} = -i\frac{e\omega A_0}{c}\bra{n}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{x}\ket{\alpha}
\tag{5.351}
$$

## 5. Lifetime
Life time은 transition rate의 inverse이다. 

(5.302a) $w = \frac{2\pi}{\hbar}\lvert V_{n\alpha}\rvert^2\rho(E)$에 (5.348), (5.349), (5.351)을 넣으면

$$
\frac{1}{\tau_{\alpha\to n}} = \frac{2\pi}{\hbar}\left(\frac{e\omega A_0}{c}\right)^2\lvert\bra{n}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{x}\ket{\alpha}\rvert^2\frac{\omega^2}{2\pi^2\hbar c^3}L^3
$$

$A_0^2 = 2\pi\hbar c^2/(\omega L^3)$를 넣으면 **$L^3$이 약분**되고

$$
\frac{1}{\tau_{\alpha\to n}} = 2\alpha_{\text{fs}}\frac{\omega^3}{c^2}\lvert\bra{n}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{x}\ket{\alpha}\rvert^2
\tag{5.352}
$$

- 상자 크기 $L$과 무관하다 → 물리적인 결과다.
- **$\omega^3$에 비례**: 에너지 간격이 큰 transition일수록, 고에너지의 빛을을 방출할수록 훨씬 빨리 붕괴한다.

## 6. 예: unpolarized $p \to s$ transition

### Polarization을 spherical component로

$$
\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{x} = \frac{\varepsilon_x - i\varepsilon_y}{\sqrt{2}}\frac{x + iy}{\sqrt{2}} + \frac{\varepsilon_x + i\varepsilon_y}{\sqrt{2}}\frac{x - iy}{\sqrt{2}} + \varepsilon_zz
$$

$$
= \sqrt{\frac{4\pi}{3}}\left(-\varepsilon_-Y_1^{+1}r + \varepsilon_-Y_1^{-1}r + \varepsilon_0Y_1^0r\right)
\tag{5.353}
$$

> [!warning] 교과서 오타 (Glia 확인)
> 교과서에는 $\varepsilon_\pm \equiv (\varepsilon_x - i\varepsilon_y)\sqrt{2}$로 적혀 있고 (5.353), (5.358)의 두 번째 항도 $\varepsilon_-$로 되어 있다. 첫 줄과 비교하면 올바른 형태는 다음과 같다.
> $$
> \varepsilon_\pm \equiv \frac{\varepsilon_x \mp i\varepsilon_y}{\sqrt{2}}, \qquad \hat{\boldsymbol{\varepsilon}}\cdot\mathbf{x} = \sqrt{\frac{4\pi}{3}}\left(-\varepsilon_-Y_1^{+1}r + \varepsilon_+Y_1^{-1}r + \varepsilon_0Y_1^0r\right)
> $$
> 즉 $Y_1^{-1}$ 항의 계수는 $\varepsilon_+$이다. 최종 결과 (5.359)에는 $\lvert\varepsilon_+\rvert^2 + \lvert\varepsilon_-\rvert^2 + \lvert\varepsilon_0\rvert^2 = 1$만 쓰이므로 영향이 없다.

### Wigner-Eckart theorem

Initial state는 unpolarized $p$ state, 즉 $m = 0, \pm1$이 같은 비율로 섞여 있다. $\bra{s}Y_1^q\ket{p, m} = 0$ unless $m = -q$이므로, (5.353)의 세 항은 **각각 정확히 하나의 $m$에 대해서만** 0이 아니다.

$$
\bra{\alpha'; s}Y_1^qr\ket{\alpha; p, m} = \braket{11; -q, q|11; 00}\frac{\bra{\alpha'; s}\lvert Y_1r\rvert\ket{\alpha; p}}{\sqrt{3}}
\tag{5.354}
$$

Reduced matrix element는 세 항 모두 같으므로 하나($m = 0$)만 계산하면 된다.

$$
\bra{\alpha'; s}Y_1^0r\ket{\alpha; p, m = 0} = \frac{1}{\sqrt{4\pi}}\mathscr{R}_{\alpha'\alpha}
\tag{5.355}
$$

$$
\mathscr{R}_{\alpha'\alpha} \equiv \int_0^\infty r^2dr\,R^*_{\alpha'}(r)\,r\,R_\alpha(r)
\tag{5.356}
$$

$$
\bra{\alpha'; s}\lvert Y_1r\rvert\ket{\alpha; p} = -\frac{3}{\sqrt{4\pi}}\mathscr{R}_{\alpha'\alpha}
\tag{5.357}
$$

$$
\bra{\alpha'; s}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{x}\ket{\alpha; p, m} = -\frac{1}{\sqrt{3}}\left(-\varepsilon_-\delta_{m,-1} + \varepsilon_-\delta_{m,1} - \varepsilon_0\delta_{m,0}\right)\mathscr{R}_{\alpha'\alpha}
\tag{5.358}
$$

(위 warning 참고: 두 번째 $\varepsilon_-$는 $\varepsilon_+$)

### 평균과 polarization 합

- 어떤 $m$이든 $\lvert\text{matrix element}\rvert^2 = \frac{1}{3}\lvert\varepsilon_q\rvert^2\mathscr{R}^2$ 꼴이다.
- Initial $m$ 세 개에 대해 평균: $\frac{1}{3}\sum_q\frac{1}{3}\lvert\varepsilon_q\rvert^2\mathscr{R}^2 = \frac{1}{9}\mathscr{R}^2$ ($\sum_q\lvert\varepsilon_q\rvert^2 = 1$)
- 같은 $\mathbf{k}$에 대해 서로 수직인 polarization이 2개 있으므로 $\times2$

$$
\frac{1}{\tau_{p\to s}} = 2\alpha_{\text{fs}}\frac{\omega^3}{c^2}\cdot\frac{1}{9}\lvert\mathscr{R}_{\alpha'\alpha}\rvert^2\cdot2 = \frac{4}{9}\alpha_{\text{fs}}\frac{\omega^3}{c^2}\lvert\mathscr{R}_{\alpha'\alpha}\rvert^2
\tag{5.359}
$$

참고: 수소 $2p \to 1s$에 대입하면 $\tau \approx 1.6$ ns 정도가 나온다.

## 7. Dipole selection rule을 만족하지 않으면

Long wavelength 근사의 다음 항($\mathbf{x}$의 고차 항)이 기여한다. 이 항들은 (원자 크기/파장)만큼씩 더 작으므로 **lifetime이 훨씬 길다** (forbidden transition). 그래서 dipole-allowed final state가 있으면 그쪽이 압도한다.



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note  - Harmonic Perturbation and Detailed Balance of photo emission and absorption]]
- [[QM lecture note - Absorption and Stimulated Emission]]
- [[QM lecture note - Electric Dipole Approximation and TRK Sum Rule]]
- [[QM lecture note - Photoelectric Effect]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.8.4

# 원본 필기 이미지
