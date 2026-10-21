---
title: "QM lecture note - Time-Independent Degenerate Perturbation Theory"
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
[[QM lecture note - Nondegenerate Perturbation Theory Examples]]


# 오늘의 핵심


# 필기 내용

## Symbol table

| Symbol | Meaning |
|--|--|
| $H_0$ | Unperturbed Hamiltonian |
| $V$ | Perturbation operator |
| $\lambda$ | Perturbation의 order를 세기 위한 expansion parameter |
| $D$ | Degenerate subspace |
| $g$ | Degeneracy (dimension of $D$) |
| $E_D^{(0)}$ | Degenerate subspace $D$의 unperturbed energy |
| $\ket{m^{(0)}}$ | 처음 주어진 $D$의 unperturbed basis kets |
| $\ket{l}$ | Perturbed energy eigenket |
| $\ket{l^{(0)}}$ | $\lambda \to 0$에서 $\ket{l}$이 수렴하는 올바른 zeroth-order ket |
| $\ket{k^{(0)}}$ | $D$ 바깥의 unperturbed eigenket ($k \notin D$) |
| $E_k^{(0)}$ | $\ket{k^{(0)}}$의 unperturbed energy |
| $V_{kl}$ | Matrix element $\bra{k^{(0)}}V\ket{l^{(0)}}$ |
| $P_0$ | $D$로의 projection operator |
| $P_1$ | $P_1 = 1 - P_0$, $D$ 바깥으로의 projection operator |
| $\mathbf{V}$ | $P_0 V P_0$의 $g \times g$ matrix, 원소는 $\bra{m^{(0)}}V\ket{m'^{(0)}}$ |
| $\Delta_l^{(1)}, \Delta_l^{(2)}$ | 1차, 2차 energy shift |
| $v_i$ | $P_0 V P_0$의 eigenvalue |
| $\ket{l_i^{(0)}}$ | $P_0 V P_0$의 eigenvector |
| $E_i^{(1)}$ | 1차까지의 eigenenergy, $E_i^{(1)} = E_D^{(0)} + \lambda v_i$ |

## 1. Nondegenerate 공식이 실패하는 이유

$$
\frac{V_{nk}}{E_n^{(0)} - E_k^{(0)}}
\tag{5.74}
$$



## 2. Degenerate subspace 안에서의 basis 선택

$$
\ket{l^{(0)}} = \sum_{m \in D} \braket{m^{(0)}|l^{(0)}} \ket{m^{(0)}}
$$



## 3. Projection operator를 이용한 Schrödinger equation 분리

$$
0 = (E - H_0 - \lambda V)\ket{l} = (E - E_D^{(0)} - \lambda V)P_0\ket{l} + (E - H_0 - \lambda V)P_1\ket{l}
\tag{5.75}
$$

$$
(E - E_D^{(0)} - \lambda P_0 V)P_0\ket{l} - \lambda P_0 V P_1\ket{l} = 0
\tag{5.76}
$$

$$
-\lambda P_1 V P_0\ket{l} + (E - H_0 - \lambda P_1 V)P_1\ket{l} = 0
\tag{5.77}
$$

$$
P_1\ket{l} = P_1 \frac{\lambda}{E - H_0 - \lambda P_1 V P_1} P_1 V P_0\ket{l}
\tag{5.78}
$$

$$
\ket{l} = \ket{l^{(0)}} + \lambda\ket{l^{(1)}} + \cdots
$$


$$
\Delta_l^{(1)} = \bra{l^{(0)}}V\ket{l^{(0)}}
\tag{5.84}
$$



## 5. Effective Hamiltonian과 eigenvector의 1차 보정

$$
\left( E - E_D^{(0)} - \lambda P_0 V P_0 - \lambda^2 P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 \right) P_0\ket{l} = 0
\tag{5.85}
$$

$$
E_i^{(1)} = E_D^{(0)} + \lambda v_i
$$

$$
E_i^{(1)} - E_j^{(1)} = \lambda(v_i - v_j)
$$

$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{P_0\ket{l_j^{(0)}}}{v_i - v_j} \bra{l_j^{(0)}} V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V \ket{l_i^{(0)}}
\tag{5.86}
$$

$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{P_0\ket{l_j^{(0)}}}{v_i - v_j} \sum_{k \notin D} \bra{l_j^{(0)}}V\ket{k} \frac{1}{E_D^{(0)} - E_k} \bra{k}V\ket{l_i^{(0)}}
\tag{5.87}
$$



## 6. 2차 energy shift

$$
\braket{l^{(0)}|l} = 1
$$

$$
\lambda\bra{l^{(0)}}V\ket{l} = \Delta_l = \lambda\Delta_l^{(1)} + \lambda^2\Delta_l^{(2)} + \cdots
$$

$$
\Delta_l^{(2)} = \bra{l^{(0)}}V\ket{l^{(1)}} = \bra{l^{(0)}}V P_1\ket{l^{(1)}} + \bra{l^{(0)}}V P_0\ket{l_i^{(1)}}
$$

$$
\Delta_l^{(2)} = \sum_{k \notin D} \frac{|V_{kl}|^2}{E_D^{(0)} - E_k^{(0)}}
\tag{5.88}
$$



## 7. Degenerate perturbation theory의 절차 요약



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.2

# 원본 필기 이미지
