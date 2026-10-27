---
title: "QM lecture note - Variational Methods"
date: "2026-10-04"
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
[[QM lecture note - The Zeeman Effect]]


# 오늘의 핵심


# 필기 내용

## Symbol table

| Symbol | Meaning |
|--|--|
| $H$ | Hamiltonian (exact solution을 모름) |
| $\ket{0}$ | True ground-state ket |
| $E_0$ | True ground-state energy |
| $\ket{\tilde{0}}$ | Trial ket (normalize되지 않았을 수 있음) |
| $\bar{H}$ | Trial ket에 대한 $H$의 expectation value |
| $\ket{k}$ | $H$의 exact energy eigenket |
| $E_k$ | $\ket{k}$의 energy eigenvalue |
| $\varepsilon$ | Trial ket의 excited state 성분 크기 |
| $\delta\ket{\tilde{0}}$ | Trial ket의 variation |
| $\lambda_1, \lambda_2, \dots$ | Variational parameters |
| $a$ | Hydrogen 예제: trial wave function의 길이 parameter / Infinite well 예제: well의 반폭 |
| $a_0$ | Bohr radius |
| $\theta$ | $\ket{0}$와 $\ket{\tilde{0}}$ 사이의 "angle" |

## 1. Variational principle (Theorem 8)
대충 정한 실험적인 상태 $\bra{\tilde{0}}$
이것의 에너지로 ground state energy를 가늠할 수 있다. 
$$
\bar{H} \equiv \frac{\bra{\tilde{0}}H\ket{\tilde{0}}}{\braket{\tilde{0}|\tilde{0}}}
\tag{5.151}
$$

$$
\bar{H} \ge E_0
\tag{5.152}
$$



## 2. Proof

$$
\ket{\tilde{0}} = \sum_{k=0}^{\infty} \ket{k}\braket{k|\tilde{0}}
\tag{5.153}
$$

$$
H\ket{k} = E_k\ket{k}
\tag{5.154}
$$

$$
\bar{H} = \frac{\sum_{k=0}^{\infty} |\braket{k|\tilde{0}}|^2 E_k}{\sum_{k=0}^{\infty} |\braket{k|\tilde{0}}|^2}
\tag{5.155a}
$$

$$
\bar{H} = \frac{\sum_{k=1}^{\infty} |\braket{k|\tilde{0}}|^2 (E_k - E_0)}{\sum_{k=0}^{\infty} |\braket{k|\tilde{0}}|^2} + E_0
\tag{5.155b}
$$

$E_k - E_0 \ge 0$인 게 보장되어 있다. 왜냐면 $E_0$은 gorund state이니까. 
이 부분이 Variational principle을 ground state에서 밖에 못 쓰는 이유이기도 하다. 

$$
\bar{H} \ge E_0
\tag{5.155c}
$$



## 3. Error의 order — Stationarity

$$
\braket{k|\tilde{0}} \sim O(\varepsilon) \qquad \text{for } k \neq 0
\tag{5.156}
$$

$$
\bar{H} - E_0 \sim O(\varepsilon^2)
\tag{5.157}
$$

$$
\ket{\tilde{0}} \to \ket{\tilde{0}} + \delta\ket{\tilde{0}}
\tag{5.158}
$$

$$
\delta\bar{H} = 0
$$



## 4. Variational parameter를 이용한 최소화
$\bar{H}$ 를 최소로 만드는 $\ket{\tilde{0}}$ 을 만드는 parameter vlaue를 찾아라. 
일종의 최적화 
$$
\frac{\partial \bar{H}}{\partial \lambda_1} = 0, \qquad \frac{\partial \bar{H}}{\partial \lambda_2} = 0, \qquad \dots
\tag{5.159}
$$



## 5. Example 1 — Hydrogen atom ground state
$\ket{\tilde{0}} (a)$ 를 대충 정하자면 아래와 같다. $a$가 variational parameter인 것이다. 
$$
\braket{\mathbf{x}|\tilde{0}} \propto e^{-r/a}
\tag{5.160}
$$

$$
H = \frac{\vec{p}^2}{2m_e} - \frac{e^2}{r}
$$

$$
\bra{\tilde{0}} H \ket{\tilde{0}}
$$
$$
\bar{H}(a)
$$

> [!note] AI 답변 — $\bar{H}(a)$ 계산
> **주의: kinetic energy 적분이 발산한다면 부피 요소 $r^2$를 빠뜨린 것이다.** $\psi = e^{-r/a}$에 radial Laplacian을 걸면
> 
> $$
> \nabla^2\psi = \frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{d\psi}{dr}\right) = \left(\frac{1}{a^2} - \frac{2}{ar}\right)e^{-r/a}
> $$
> 
> 두 번째 항의 $\frac{1}{r}$ 때문에 $r^2$ 없이 적분하면 $\int_0^\infty\frac{e^{-2r/a}}{r}dr$가 $r \to 0$에서 log 발산한다. $d^3x = 4\pi r^2dr$을 넣으면 $\frac{1}{r}\cdot r^2 = r$이 되어 문제가 없다.
> 
> **Normalization**
> 
> $$
> \braket{\tilde{0}|\tilde{0}} = \int e^{-2r/a}\,4\pi r^2dr = 4\pi\cdot2!\left(\frac{a}{2}\right)^3 = \pi a^3
> $$
> 
> **Kinetic energy**: 부분적분으로 $\int\psi^*\left(-\nabla^2\right)\psi\,d^3x = \int\lvert\nabla\psi\rvert^2d^3x$를 쓰면 2차 미분이 필요 없다. $\lvert\nabla\psi\rvert^2 = \frac{1}{a^2}e^{-2r/a}$이므로
> 
> $$
> \bra{\tilde{0}}\frac{\mathbf{p}^2}{2m}\ket{\tilde{0}} = \frac{\hbar^2}{2m}\int\frac{1}{a^2}e^{-2r/a}\,4\pi r^2dr = \frac{\hbar^2}{2m}\cdot\pi a
> $$
> 
> (Laplacian으로 직접 해도 $4\pi\left[\frac{1}{a^2}\cdot\frac{a^3}{4} - \frac{2}{a}\cdot\frac{a^2}{4}\right] = -\pi a$가 되어 같은 결과.)
> 
> **Potential energy**
> 
> $$
> \bra{\tilde{0}}\left(-\frac{e^2}{r}\right)\ket{\tilde{0}} = -e^2\int e^{-2r/a}\,4\pi r\,dr = -e^2\cdot4\pi\left(\frac{a}{2}\right)^2 = -\pi e^2a^2
> $$
> 
> **$\bar{H}$**: normalization $\pi a^3$으로 나누면
> 
> $$
> \bar{H}(a) = \frac{\hbar^2}{2ma^2} - \frac{e^2}{a}
> $$
> 
> **최소화**
> 
> $$
> \frac{\partial\bar{H}}{\partial a} = -\frac{\hbar^2}{ma^3} + \frac{e^2}{a^2} = 0 \quad\Rightarrow\quad a = \frac{\hbar^2}{me^2} = a_0
> $$
> 
> $$
> \bar{H}_{\min} = \frac{e^2}{2a_0} - \frac{e^2}{a_0} = -\frac{e^2}{2a_0}
> $$
> 
> **검산**: 최솟점에서 $\langle T\rangle = \frac{e^2}{2a_0} = -E$로 virial theorem과 일치한다.

$$
\bar{H}_{\min} = -\frac{e^2}{2a_0} \qquad (a = a_0)
$$



## 6. Example 2 — One-dimensional infinite well

$$
V = \begin{cases} 0 & \text{for } |x| < a \\ \infty & \text{for } |x| > a \end{cases}
\tag{5.161}
$$

실제 해는 이렇게 생겼다. 
$$
\braket{x|0} = \frac{1}{\sqrt{a}}\cos\left(\frac{\pi x}{2a}\right), \qquad E_0 = \left(\frac{\hbar^2}{2m}\right)\left(\frac{\pi^2}{4a^2}\right)
\tag{5.162}
$$

### Parabola trial function (variational parameter 없음)

$$
\braket{x|\tilde{0}} = a^2 - x^2
\tag{5.163}
$$
대충 이렇게 $\pm a$에서 0이 되는, even하게 생긴 wave function을 잠정적인 해로 생각하자.

적분 편하당.
$$
\bar{H} = \frac{\left(\frac{-\hbar^2}{2m}\right)\int_{-a}^{a} (a^2 - x^2)\frac{d^2}{dx^2}(a^2 - x^2)\,dx}{\int_{-a}^{a} (a^2 - x^2)^2\,dx} = \left(\frac{10}{\pi^2}\right)\left(\frac{\pi^2\hbar^2}{8a^2 m}\right) \simeq 1.0132\,E_0
\tag{5.164}
$$
대충 이렇게 찍어도 ground state energy를 이렇게나 잘 맞춘다. 


### $\lambda$를 variational parameter로 둔 trial function

$\pm a$에서 0이 되며 even하게 생겼다는 점은 그대로 두고, 차수만 바꾸어 보면 어떨까?
$$
\braket{x|\tilde{0}} = |a|^\lambda - |x|^\lambda
\tag{5.165}
$$
$\lambda$가 variation parameter이다. 
이또한 적분이 쉽다. 

$$
\bar{H} = \left[\frac{(\lambda + 1)(2\lambda + 1)}{(2\lambda - 1)}\right]\left(\frac{\hbar^2}{4ma^2}\right)
\tag{5.166}
$$
$\lambda$로 미분하면, 
$$
\lambda = \frac{1 + \sqrt{6}}{2} \simeq 1.72
\tag{5.167}
$$

$$
\bar{H}_{\min} = \left(\frac{5 + 2\sqrt{6}}{\pi^2}\right)E_0 \simeq 1.00298\,E_0
\tag{5.168}
$$

오차가 꽤 줄어들었다. 

### Trial ket과 true ground state의 overlap 추정

$$
\bar{H}_{\min} = \sum_{k=0}^{\infty} |\braket{k|\tilde{0}}|^2 E_k \ge |\braket{0|\tilde{0}}|^2 E_0 + 9E_0\left(1 - |\braket{0|\tilde{0}}|^2\right)
\tag{5.169}
$$

$$
|\braket{0|\tilde{0}}|^2 \ge \frac{9E_0 - \bar{H}_{\min}}{8E_0} = 0.99963
\tag{5.170}
$$

$$
\braket{0|\tilde{0}} = \cos\theta
\tag{5.171}
$$

$$
\theta \lesssim 1.1^\circ
\tag{5.172}
$$



## 7. First excited state로의 확장
We can also use the
variational method to estimate the energies of first excited states; all we need to do is work
with a trial ket orthogonal to the ground-state wave function, either exact, if known, or an
approximate one obtained by the variational method.


# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Time-Independent Degenerate Perturbation Theory]]

# 다음 강의

[[QM lecture note - The Interaction Picture]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.4

# 원본 필기 이미지
