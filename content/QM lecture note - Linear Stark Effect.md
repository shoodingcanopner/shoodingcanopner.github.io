---
title: "QM lecture note - Linear Stark Effect"
date: "2026-10-24"
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

Sakurai 5.2.1 Linear Stark Effect

## Symbol table

| Symbol | Meaning |
|--|--|
| $n$ | Principal quantum number |
| $l$ | Orbital angular momentum quantum number |
| $m$ | Magnetic quantum number |
| $e$ | Elementary charge |
| $a_0$ | Bohr radius |
| $\mathbf{E}$ | Uniform external electric field ($z$-direction) |
| $V$ | Perturbation operator |
| $\ket{2s, m=0}$ | $n=2$, $l=0$ state |
| $\ket{2p, m}$ | $n=2$, $l=1$ state ($m = 0, \pm 1$) |
| $\Delta_\pm^{(1)}$ | First-order energy shift |
| $\ket{\pm}$ | $V$를 대각화하는 zeroth-order kets (good states) |

## Degeneracy of the hydrogen atom

$$
0 \le l < n
\tag{5.89}
$$

$$
E_{n=2} = -\frac{e^2}{8a_0}
$$

## Perturbation

$$
V = -ez|\mathbf{E}|
\tag{5.90}
$$

## Matrix representation in the $n=2$ subspace

Basis order: $\ket{2s}$, $\ket{2p, m=0}$, $\ket{2p, m=1}$, $\ket{2p, m=-1}$

$$
V = \begin{pmatrix} 0 & \bra{2s}V\ket{2p, m=0} & 0 & 0 \\ \bra{2p, m=0}V\ket{2s} & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
\tag{5.91}
$$

$$
\bra{2s}V\ket{2p, m=0} = \bra{2p, m=0}V\ket{2s} = 3ea_0|\mathbf{E}|
\tag{5.92}
$$

## Energy shifts and zeroth-order kets

$$
\Delta_\pm^{(1)} = \pm 3ea_0|\mathbf{E}|
\tag{5.93}
$$

$$
\ket{\pm} = \frac{1}{\sqrt{2}}\left(\ket{2s, m=0} \pm \ket{2p, m=0}\right)
\tag{5.94}
$$

### Energy-level diagram (Fig. 5.1)


## Permanent electric dipole moment


## Validity: Lamb shift vs. perturbation strength



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Degenerate Perturbation Theory]]
- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[양자 HW2 풀이]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.2.1

# 원본 필기 이미지
