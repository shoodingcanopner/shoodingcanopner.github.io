---
title: "QM lecture note - Perturbation Theory Examples"
date: "2026-09-20"
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
[[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]에서 nondegenerate perturbation theory의 formal development와 wave function renormalization을 다루었다.

# 오늘의 핵심

- **SHO + quadratic perturbation**: exact solution ($\omega \to \sqrt{1+\varepsilon}\,\omega$)과 perturbation 결과를 비교할 수 있는 예제. $\Delta_0 = \hbar\omega\left[\frac{\varepsilon}{4} - \frac{\varepsilon^2}{16} + O(\varepsilon^3)\right]$
- **Quadratic Stark effect**: 균일 전기장 속 수소 원자. Parity 때문에 ground state에는 **linear Stark effect가 없고**, 2차 효과가 leading order이다.
- **Selection rule**: $\bra{n', l'm'}z\ket{n, lm} = 0$ unless $l' = l \pm 1$, $m' = m$
- **Polarizability**: $\alpha = -\frac{2\Delta}{|\mathbf{E}|^2} = -2e^2\sum_{k\neq g}\frac{|\bra{k^0}z\ket{g^0}|^2}{E_g^0 - E_k^0}$

# 필기 내용

## Symbol table

| Symbol | Meaning |
|--|--|
| $\varepsilon \ll 1$ | SHO perturbation의 세기 |
| $x_{n'n} \equiv \bra{n'}x\ket{n}$ | SHO energy eigenbasis에서 position의 matrix element |
| $\ket{g^0}$ | 수소 원자의 ground state ($n=1$) |
| $\mathbf{E}$ | $z$ 방향의 uniform electric field |
| $z_{gj} \equiv \bra{g^0}z\ket{j^0}$ | $z$ operator의 matrix element |
| $\pi$ | Parity operator |
| $\alpha$ | Atomic polarizability |

## 1. 1st Elementary Example — Simple Harmonic Oscillator with Quadratic Perturbation

Unperturbed Hamiltonian:

$$
H_0 = \frac{1}{2}m\omega^2 x^2 + \frac{p^2}{2m}
$$

Perturbation: 동일 진동수, 동일 위치에 harmonic potential을 추가.

$$
V = \frac{1}{2}\varepsilon m\omega^2 x^2, \qquad \varepsilon \ll 1
$$

사실 exact solution을 아주 쉽게 구할 수 있는 간단한 문제다. $\omega$ 값만 바꾸면 되기 때문.

$$
\omega \to \sqrt{1+\varepsilon}\,\omega
$$

Perturbation theory의 결과와 exact solution을 비교해 보자. Ground state의 변화를 알아보면,

$$
\ket{0} = \ket{0^0} + \sum_{k\neq 0}\frac{V_{k0}}{E_0^0 - E_k^0}\ket{k^0} + \cdots
$$

$$
\Delta_0 = V_{00} + \sum_{k\neq 0}\frac{|V_{k0}|^2}{E_0^0 - E_k^0} + \cdots
$$

$V$의 matrix element를 구해보자. Position operator의 matrix element가

$$
x_{n'n} = \sqrt{\frac{\hbar}{2m\omega}}\left(\sqrt{n'+1}\,\delta_{n', n-1} + \sqrt{n'}\,\delta_{n', n+1}\right)
$$

임을 이용하자.

$$
(x^2)_{n'n} = \frac{\hbar}{2m\omega}\left(\sqrt{(n'+1)(n'+2)}\,\delta_{n', n-2} + \sqrt{n'(n'-1)}\,\delta_{n', n+2} + (2n'+1)\,\delta_{n'n}\right)
$$

$$
V_{n'n} = \frac{\varepsilon\hbar\omega}{4}\left(\sqrt{(n'+1)(n'+2)}\,\delta_{n', n-2} + \sqrt{n'(n'-1)}\,\delta_{n', n+2} + (2n'+1)\,\delta_{n'n}\right)
$$

$V_{k0}$ 중에서 0이 아닌 것은 $k = 0$, $k = 2$인 경우밖에 없다.

$$
V_{00} = \frac{\varepsilon\hbar\omega}{4}, \qquad V_{20} = \frac{\varepsilon\hbar\omega}{2\sqrt{2}}
$$

이를 이용하면 ($E_0^0 - E_2^0 = -2\hbar\omega$),

$$
\ket{0} = \ket{0^0} - \frac{\varepsilon}{4\sqrt{2}}\ket{2^0} + O(\varepsilon^2)
$$

$$
\Delta_0 = E_0 - E_0^0 = \hbar\omega\left[\frac{\varepsilon}{4} - \frac{\varepsilon^2}{16} + O(\varepsilon^3)\right]
$$

> [!note] AI 답변 — Exact solution과의 비교
> Exact ground state energy는 $E_0 = \frac{1}{2}\hbar\omega\sqrt{1+\varepsilon}$이다. $\sqrt{1+\varepsilon} \simeq 1 + \frac{\varepsilon}{2} - \frac{\varepsilon^2}{8} + \cdots$로 전개하면
>
> $$
> E_0 - \frac{1}{2}\hbar\omega = \hbar\omega\left[\frac{\varepsilon}{4} - \frac{\varepsilon^2}{16} + \cdots\right]
> $$
>
> 로 perturbation 결과와 정확히 일치한다.
>
> Ket에 대해서도 확인할 수 있다. Exact ground state는 폭이 좁아진 Gaussian $\psi_0 \propto \exp\left(-\frac{m\omega'x^2}{2\hbar}\right)$, $\omega' = \sqrt{1+\varepsilon}\,\omega$이다. 폭이 바뀐 Gaussian을 원래 basis로 전개하면 **짝수 상태** ($\ket{0^0}, \ket{2^0}, \ket{4^0}, \dots$)만 섞이는데, $V \propto x^2$가 parity even이라 $n \to n\pm 2$만 연결한다는 사실과 일치한다. 또 $\ket{2^0}$의 계수가 음수인 것은 파동함수가 가운데로 **좁아지는** 방향의 보정임을 뜻한다.
>
> 수렴 조건도 two-state problem과 같은 방식으로 볼 수 있다: 전개가 $\sqrt{1+\varepsilon}$의 binomial series이므로 $|\varepsilon| < 1$이면 수렴한다. $\varepsilon < -1$이면 $\omega'$가 허수가 되어 bound state 자체가 사라지는 것과 대응된다.

## 2. 2nd Elementary Example — Quadratic Stark Effect

Hydrogen atom in uniform electric field. $z$ 방향으로 uniform하게 걸린 전기장에서 수소 전자의 상태는?

전기장을 perturbation으로 두자. $V_0(r)$은 원래 수소 전자가 겪던 potential이다.

$$
H_0 = \frac{p^2}{2m} + V_0(r), \qquad V = -e|\mathbf{E}|z
$$

Spin은 고려하지 않기로 한다. 아직은 nondegenerate case를 연습 중이므로, $n = 1$ ($n$ is principal quantum number)인 경우, 바닥 상태만 다뤄보자.

Ground state $\ket{g^0}$에 대해 energy shift에 관한 식을 $z$ operator의 matrix element로 나타내면,

$$
\Delta_g = -e|\mathbf{E}|z_{gg} + e^2|\mathbf{E}|^2\sum_{j\neq g}\frac{|z_{gj}|^2}{E_g^0 - E_j^0} + \cdots
$$

### Parity를 이용해 $z_{gg} = 0$임을 확인

$\ket{g^0}$는 parity에 even하다. Parity operator가 $\pi$일 때,

$$
\pi\ket{g^0} = \ket{g^0}
$$

> [!warning] 필기 수정
> 필기의 $\pi\ket{g^0} = 1$은 $\pi\ket{g^0} = \ket{g^0}$ (eigenvalue $+1$)이 맞다.

반면 $z$는 parity에 odd하다.

$$
\pi z \pi = -z
$$

따라서,

$$
\bra{g^0}\pi z\pi\ket{g^0} = -\bra{g^0}z\ket{g^0}
$$

$$
\bra{g^0}\pi z\pi\ket{g^0} = \bra{\pi g^0}z\ket{\pi g^0} = \bra{g^0}z\ket{g^0}
$$

두 식이 동시에 성립하려면,

$$
z_{gg} = \bra{g^0}z\ket{g^0} = 0
$$

이렇기 때문에, ground state에는 **linear Stark effect가 없다.**

> [!note] AI 답변 — 왜 "nondegenerate"가 중요한가
> 이 논증은 $\ket{g^0}$가 parity eigenstate라는 점에만 의존한다. Nondegenerate state는 parity와 commute하는 $H_0$의 eigenstate이므로 자동으로 parity eigenstate이다. 반면 $n = 2$ 준위처럼 $2s$ (even)와 $2p$ (odd)가 degenerate하면 둘을 섞은 상태는 parity eigenstate가 아니게 되고, 영구 dipole moment를 가질 수 있어 **linear** Stark effect가 나타난다. 이것은 degenerate perturbation theory에서 다룰 내용이다.

### Off-diagonal term — Selection rule

이제 $z$의 off-diagonal term을 구하면, selection rule을 이용해서,

$$
\bra{n', l'm'}z\ket{n, lm} = 0, \qquad \text{unless } l' = l \pm 1, \; m' = m
$$

> [!note] AI 답변 — Selection rule의 기원
> - $m' = m$: $z$는 $L_z$와 commute한다 ($z$축 회전에 불변). 따라서 $z$는 $m$을 바꿀 수 없다.
> - $l' = l \pm 1$: $z \propto r\,Y_1^0$는 rank-1 spherical tensor의 $q=0$ 성분이다. [[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]에 의해 $|l - 1| \le l' \le l+1$이고, 여기에 parity odd 조건이 더해져 $l' = l$이 제외된다.
>
> Ground state ($l = 0, m = 0$)에 적용하면, 2차 보정의 합에 기여하는 것은 $l = 1, m = 0$ 상태들뿐이다.

### Polarizability

원자의 polarizability $\alpha$는 전기장에 의한 에너지 변화를 이용해 이렇게 정의된다.

$$
\alpha = -\frac{2\Delta}{|\mathbf{E}|^2}
$$

Ground state로 $\alpha$를 구해보면,

$$
\alpha = -2e^2\sum_{k\neq g}\frac{|\bra{k^0}z\ket{g^0}|^2}{E_g^0 - E_k^0}
$$

$\ket{k^0}$는 수소 원자의 모든 bound state가 될 수 있다.

> [!note] AI 답변 — 정의의 의미와 합의 범위
> 유도 dipole moment가 $\mathbf{d} = \alpha\mathbf{E}$이면, 그 에너지는 $\Delta = -\frac{1}{2}\alpha|\mathbf{E}|^2$이다 (dipole이 field에 의해 유도되는 과정에서의 일 때문에 $\frac{1}{2}$ 인자가 붙는다). 이를 뒤집은 것이 위 정의이다. Ground state에서는 $E_g^0 - E_k^0 < 0$이므로 $\alpha > 0$ — 앞 노트에서 본 "ground state의 2차 shift는 항상 음수"의 결과이다.
>
> 한 가지 주의: $\{\ket{k^0}\}$가 complete set이 되려면 bound state뿐 아니라 **continuum (unbound) state**까지 포함해야 한다. 따라서 엄밀한 합에는 continuum에 대한 적분도 들어간다. Bound state만으로는 합이 정확한 값을 주지 않는다. 이 무한합을 직접 계산하기는 어려워서, closure를 이용한 상한 추정이나 Dalgarno–Lewis 방법 같은 우회로를 쓴다. 정확한 값은 $\alpha = \frac{9}{2}a_0^3$ (Gaussian units, $a_0$: Bohr radius)이다.

# 궁금한 내용

# 연관 학습 노트

- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Simple Harmonic Oscillator]]
- [[QM lecture note - Discrete Symmetries]]
- [[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]

# 다음 강의

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.1

# 원본 필기 이미지
![[QM 1st week.pdf]]
