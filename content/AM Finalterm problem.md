[[Analytical Mechanics]]

# 2026 Classical Mechanics Final Term

## Problem 1 (50 points)

Based on the following effective action:
$$S = \int \left( (\mathbf{p} + e\mathbf{A}) \cdot \frac{d\mathbf{x}}{dt} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \frac{d\mathbf{p}}{dt} \right) dt$$ 

$$\nabla_{p} \times \mathbf{a} = \Theta \equiv \frac{\hat{\mathbf{p}}}{2|\mathbf{p}|^{2}}, \quad \hat{p} = \frac{\mathbf{p}}{|\mathbf{p}|}$$

where $a_{\mu}$ is a momentum-space Berry connection, derive the Hamiltonian equation of motion and solve them to find the below expression
$$\begin{cases}
\mathfrak{m}\frac{dx}{dt} = \hat{p} + eE \times \Theta + (\Theta \cdot \hat{p}) eB \\
\mathfrak{m}\frac{dp}{dt} = eE + e\hat{p} \times B + e^{2}(E \cdot B)\Theta
\end{cases}$$
$$\mathfrak{m} = 1 + e\Theta \cdot B$$ 

Here, $\mathfrak{m}$ may be regarded as an effective mass for this particle.

* **(Questions)**
  * Can you imagine a UV complete version of this effective action? In other words, figure out where this effective action comes from. *(Hint: Maybe google or AI with "chiral fermions". It is important to notice the momentum-linear dispersion, which implies that Poincaré invariance = Lorentz invariance + Translational invariance will play a key role.)* 
  * Can you figure out the Lorentz symmetry in this particle dynamics (optional)? 

---

## Problem 2 (50 points)

Revisit this problem based on the symplectic geometry perspectives. Can you find the corresponding symplectic two-form and the symplectic vector field? Let me give you the answer.

$$V^{7} = T(\mathbb{R}^{3}\backslash\{0\}) \times \mathbb{R} = (x, p, t) \quad \text{(6-dimensional phase space + 1 time dimension)}$$

$$\sigma = \omega - dh \wedge dt$$ 

$$\omega = \omega_{0} + \frac{e}{2}\epsilon_{ijk}B^{i}dx^{j} \wedge dx^{k}$$

$$\omega_{0} = dp_{i} \wedge dx^{i} - \frac{s}{2|p|^{3}}\epsilon^{ijk}p_{i}dp_{j} \wedge dp_{k}$$

$$
h = |p| + e\phi
$$
$$
i_{X_{H}}\omega = dH \quad \text{or the following expression:}
$$

$$
\omega_{\alpha\beta}\dot{\xi}^{\beta} = \partial_{\alpha}h, \quad \text{where } \omega_{\alpha\beta} = \partial_{\alpha}u_{\beta} - \partial_{\beta}u_{\alpha}
$$

(Question)
  * Clarify the symplectic structure. Show that this symplectic two-form is non-degenerate, i.e., given by $\det(\omega_{\alpha\beta}) \neq 0$.

---

## Problem 3 (100 points)

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

## Problem 4 (100 points)

Now, we introduce a non-minimal coupling of electromagnetic fields into this spin $1/2$ chiral fermion. Starting from the closed two-form:
$$\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\lambda}^{\mu} \wedge S_{\rho}^{\lambda} dS_{\mu}^{\rho} + \frac{1}{2}eF_{\mu\nu}dR^{\mu} \wedge dR^{\nu}$$ 

derive the corresponding equations of motion as follows:
$$\begin{cases}
\dot{R}^{\mu} = P^{\mu} + \frac{S^{\mu \nu} F_{\nu \rho} P^\rho}{\frac{1}{2}S \cdot F} \\
\dot{P}^{\mu} = -e F^{\mu}_{\nu} \dot{R}^{\nu} \\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu}
\end{cases}$$ 

Unfortunately, the above closed two-form is not completely satisfactory. We have to introduce the mass square constraint in the following way:
$$
P_\mu P^\mu = -\frac{eg}{2}S \cdot F
$$


Hence we introduce the novel evolution space 
$$\tilde{V}^{9} = \left\{ P, R \in \mathbb{R}^{3,1}, \; S \in \mathfrak{o}(3,1) \;\middle|\; P_{\mu}P^{\mu} = -\frac{eg}{2}S \cdot F, \; S_{\mu\nu}P^{\nu} = 0, \; \frac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^{2} \right\}$$ 

endowed with the closed two-form:
$$\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\lambda}^{\mu} \wedge S_{\rho}^{\lambda} dS_{\mu}^{\rho} + \frac{1}{2}eF_{\mu\nu}dR^{\mu} \wedge dR^{\nu} \quad$$

As a result, we find:
$$\begin{cases}
\dot{R}^{\mu} = P^{\mu} - \frac{1}{g+1}\frac{1}{S_{\alpha \beta}F^{\alpha \beta}} \left[ (g-2) S^{\mu\nu}F_{\nu\rho}P^{\rho} - g S^{\mu\nu}\partial_\nu F_{\rho\sigma} S^{\rho \sigma} \right] \\
\dot{P}^{\mu} = -e F^{\mu}_{\nu}\dot{R}^\nu -\frac{eg}{4}\partial^{\mu}F_{\rho\sigma}S^{\rho \sigma}\\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu} + \frac{eg}{2}\left[ S^{\mu}_{\rho}F^{\rho\nu} - S^{\nu}_{\rho}F^{\rho \mu} \right]
\end{cases}$$ 

These equations constitute the zero-rest-mass counterparts of the celebrated **Bargmann-Michel-Telegdi (BMT) equations** for massive relativistic particles.

For the massive case, one can show that these types of equations can be derived from the following Lagrangian:
$$L = -\frac{1}{2}m(\dot{x}_{\mu} + \lambda^{\nu}S_{\mu\nu})(\dot{x}^{\mu} + \lambda_{\nu}S^{\mu\nu}) - eA_{\mu}\dot{x}^{\mu} + \frac{1}{2}(\psi_{A}\dot{\varphi}^{A} - \dot{\psi}_{A}\varphi^{A}) - \frac{1}{2}kF_{\mu\nu}S^{\mu\nu}$$

where $S_{\mu\nu} = \psi_{A}(\Sigma_{\mu\nu})^{A}_{B}\varphi^{B}$.
*(The dynamical variables are the position of the particle $x^{\mu}(\theta)$, a real vector $\varphi^{A}$ belonging to a finite-dimensional representation of the Lorentz-group, whose infinitesimal generators are the quantities $(\Sigma_{\mu\nu})^{A}_{B}$, a vector $\psi_{A}$ belonging to the conjugate representation, and the lagrangian multipliers $\lambda^{\mu}$. The constant $m$ represents the mass of the particle and $k$ is given by $k = \frac{eg}{2m}$, where $g$ represents the gyromagnetic factor.)


* **(Questions)**
  * Starting from this effective Lagrangian, derive that $S^2$ is a conserved quantity.
  * We note that in the weak-field approximation, all the components of the four-vector $\eta_{\mu}$ are very small, and therefore they can be neglected, so we get the BMT equations:
$$\ddot{x}_{\mu} = \frac{e}{m}F_{\mu\nu}\dot{x}^{\nu}$$

$$\dot{S}_{\rho} = g\frac{e}{2m}F_{\rho\mu}S^{\mu} + (g-2)\frac{e}{2m}F_{\mu\nu}S^{\mu}\dot{x}^{\nu}\dot{x}_{\rho}$$
