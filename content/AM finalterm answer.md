---
title: AM finalterm answer
date: "2026-05-31"
draft: true
subject: physics
tags: [study, analytical-mechanics, hamilton, berry-phase, chiral]
class: study
---
문제: [[AM Finalterm problem]]
# Notations 

## Symbol notation

| Symbol                 | Meaning                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| $S$                    | Effective action                                                                                               |
| $\mathbf{p}$           | Momentum (3-vector)                                                                                            |
| $\mathbf{x}$           | Position (3-vector)                                                                                            |
| $\hat{\mathbf{p}}$     | Unit vector in momentum direction, $\hat{\mathbf{p}} = \mathbf{p} \lvert \mathbf{p} \rvert$                   |
| $A$                    | Electromagnetic vector potential                                                                               |
| $\phi$                 | Electromagnetic scalar potential                                                                               |
| $a_\mu$                | Momentum-space Berry connection                                                                                |
| $\boldsymbol{\Theta}$  | Berry curvature (pseudovector), $\boldsymbol{\Theta} = \frac{\hat{\mathbf{p}}}{2 \lvert \mathbf{p} \rvert ^2}$ |
| $\mathbf{B}$           | Magnetic field, $\mathbf{B} = \nabla \times \mathbf{A}$                                                        |
| $\mathbf{E}$           | Electric field, $\mathbf{E} = -\nabla\phi - \partial_t \mathbf{A}$                                             |
| $\mathfrak{m}$         | Effective mass, $\mathfrak{m} = 1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B}$                                   |
| $\xi^\alpha$           | Phase space coordinates, $\xi^\alpha = (x^i, p_i)$                                                             |
| $h$                    | Hamiltonian                                                                                                    |
| $\omega_{\alpha\beta}$ | Symplectic matrix (components of symplectic 2-form)                                                            |
| $\omega$               | Symplectic 2-form on phase space                                                                               |
| $\omega_0$             | Canonical part of symplectic 2-form (without EM fields)                                                        |
| $\sigma$               | Closed 2-form on evolution space $V = \text{phase space} \times \mathbb{R}$                                    |
| $X_H$                  | Hamiltonian vector field                                                                                       |
| $s$                    | Spin of the particle                                                                                           |

## Tag notation

아라비아 숫자를 사용하는 tag는 레퍼런스 논문(Duval & Horváthy 2015)에서 사용한 tag와 일치하도록 작성했다. 
그 외, 로마 숫자나 알파벳만 사용한 것은 본 문제 풀이에서 자체적으로 적용한 라벨링이다. 

---

# Solutions

[[AM final project - Background knowledge - Souriau Mechanics의 Symplectic framework]]
[[AM final project - Problem 1]]
[[AM final project - Problem 2]]

# Problem 3

Consider a spinning particle to follow relativity. To describe the spinning particle, we consider a 9-dimensional phase space, given by:

$$
V^{9} = \left\{ R, I, J \in \mathbb{R}^{3,1} \;\middle|\; I_{\mu}I^{\mu} = J_{\mu}J^{\mu} = 0, \; I_{\mu}J^{\mu} = -1 \right\}
$$ 

Here, $I_{\mu} \& J_{\mu}$ are two independent null vectors, given above. To figure out that this is the 9-dimensional phase space, we introduce $P_{\mu} \& S_{\mu\nu}$ to replace $I_{\mu} \& J_{\mu}$ as follows:
$$I_{\mu} \rightarrow P_{\mu} \quad \text{and} \quad S_{\mu\nu} = -s\epsilon_{\mu\nu\rho\sigma}P^{\rho}J^{\sigma}$$ 

Then, we obtain:
$$V^{9} = \left\{ R, P \in \mathbb{R}^{3,1}, \; S \in \mathfrak{o}(3,1) \;\middle|\; P_{\mu}P^{\mu} = 0, \; S_{\mu\nu}P^{\nu} = 0, \; \frac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^{2} \right\}$$

It is straightforward to check out that $P_{\mu} \& S_{\mu\nu}$ satisfy these constraints. Now, we introduce the following closed two-form:
$$\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\mu}^{\lambda} \wedge S_{\rho}^{\mu} dS_{\lambda}^{\rho}$$ 

Here, we do not consider electromagnetic fields. Identify the Hamiltonian vector field and obtain the following Hamiltonian equation of motion:
$$\begin{cases}
P_{\mu}\dot{R}^{\mu} = 0 \\
\dot{P}^{\mu} = 0 \\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu}
\end{cases}$$

It is quite surprising to realize that this symplectic two-form is identical to that of **Q. 2** if electromagnetic fields are neglected, i.e., $\omega_{0}$ in **Q. 2**. In other words, the symplectic two-form of **Q. 2** without electromagnetic fields is a symplectic reduction of the above symplectic two-form. Can you figure it out? See below.

To obtain down-to-earth expressions, we put $R = (r, t)$, where $r$ and $t$ are the position and time coordinates in a chosen Lorentz frame. The two null-vectors are in turn $P = (p, |p|)$ and $J = (q, -|q|)$, where $p$ and $q$ are two (necessarily nonzero) 3-vectors which satisfy $p \cdot q + |p||q| = 1$. In these terms we have:
$$s = s(p|q| + q|p|)$$
$$S_{ij} = \epsilon_{ijk}s^{k}$$ 
$$S_{j4} = s(p \times q)_{j} = (\hat{p} \times s)_{j}$$

* **(Question)**
  * Based on this coordinate representation, find the moment map that reduces the symplectic two-form in 9-dimensional phase space to that in 6-dimensional one.

---

