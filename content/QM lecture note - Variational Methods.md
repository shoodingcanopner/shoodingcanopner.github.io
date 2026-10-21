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
[[QM lecture note - Time-Independent Degenerate Perturbation Theory]]


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

$$
\frac{\partial \bar{H}}{\partial \lambda_1} = 0, \qquad \frac{\partial \bar{H}}{\partial \lambda_2} = 0, \qquad \dots
\tag{5.159}
$$



## 5. Example 1 — Hydrogen atom ground state

$$
\braket{\mathbf{x}|\tilde{0}} \propto e^{-r/a}
\tag{5.160}
$$

$$
\bar{H}_{\min} = -\frac{e^2}{2a_0} \qquad (a = a_0)
$$



## 6. Example 2 — One-dimensional infinite well

$$
V = \begin{cases} 0 & \text{for } |x| < a \\ \infty & \text{for } |x| > a \end{cases}
\tag{5.161}
$$

$$
\braket{x|0} = \frac{1}{\sqrt{a}}\cos\left(\frac{\pi x}{2a}\right), \qquad E_0 = \left(\frac{\hbar^2}{2m}\right)\left(\frac{\pi^2}{4a^2}\right)
\tag{5.162}
$$

### Parabola trial function (variational parameter 없음)

$$
\braket{x|\tilde{0}} = a^2 - x^2
\tag{5.163}
$$

$$
\bar{H} = \frac{\left(\frac{-\hbar^2}{2m}\right)\int_{-a}^{a} (a^2 - x^2)\frac{d^2}{dx^2}(a^2 - x^2)\,dx}{\int_{-a}^{a} (a^2 - x^2)^2\,dx} = \left(\frac{10}{\pi^2}\right)\left(\frac{\pi^2\hbar^2}{8a^2 m}\right) \simeq 1.0132\,E_0
\tag{5.164}
$$



### $\lambda$를 variational parameter로 둔 trial function

$$
\braket{x|\tilde{0}} = |a|^\lambda - |x|^\lambda
\tag{5.165}
$$

$$
\bar{H} = \left[\frac{(\lambda + 1)(2\lambda + 1)}{(2\lambda - 1)}\right]\left(\frac{\hbar^2}{4ma^2}\right)
\tag{5.166}
$$

$$
\lambda = \frac{1 + \sqrt{6}}{2} \simeq 1.72
\tag{5.167}
$$

$$
\bar{H}_{\min} = \left(\frac{5 + 2\sqrt{6}}{\pi^2}\right)E_0 \simeq 1.00298\,E_0
\tag{5.168}
$$



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



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Time-Independent Degenerate Perturbation Theory]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.4

# 원본 필기 이미지
