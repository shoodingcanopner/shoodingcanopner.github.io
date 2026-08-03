---
title: Finite-Size Scaling and Data Collapse
date: "2026-07-30"
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# Finite-Size Scaling and Data Collapse

## Symbol Table

| Symbol            | Meaning                                                      |
| ----------------- | ------------------------------------------------------------ |
| $\ell$            | Loop size (observable whose distribution is in question)     |
| $N$               | System size (number of beads / chain length)                 |
| $P_N(\ell)$       | Loop size distribution at system size $N$                    |
| $\bar{F}_N(\ell)$ | Complementary CDF (survival function), $\Pr[\ell' \ge \ell]$ |
| $\alpha$          | Power-law exponent of the bulk (scale-free) region           |
| $\nu$             | Cutoff exponent, $L = N^{\nu}$                               |
| $L$               | Characteristic cutoff scale, $L \equiv N^{\nu}$              |
| $f(x)$            | Scaling function (cutoff function) of $x = \ell / L$         |
| $g(x)$            | Scaling function for the CCDF                                |
| $\rho$            | Loop density, $n_{\text{ext}} / N$                           |
| $q$               | Moment order                                                 |
| $q^{*}$           | Marginal moment order, $q^{*} = \alpha - 1$                  |

## Overview

"Is this distribution a power law?" is not a well-posed statistical question. At large sample size any pure power law is rejected by a KS test, while lognormal is nearly indistinguishable from a power law over a finite range. Finite-size scaling replaces it with a **falsifiable** question: does a single characteristic scale, set by system size, control all finite-size effects?

The scaling hypothesis is

$$
P_N(\ell) = \ell^{-\alpha}\, f\!\left(\frac{\ell}{N^{\nu}}\right)
\tag{1}
$$

The content of (1) is **not** "there is a power law." It is:

> When $N$ changes, the only thing that changes about the distribution is that one length $L = N^{\nu}$ grows. The curve does not change shape — it translates.

This is why the hypothesis is testable. Either curves at different $N$ collapse onto a single master curve after rescaling, or they do not.

## Key Points

### Structure of the scaling form

- $\ell^{-\alpha}$ — the scale-free part. No characteristic size.
- $f(x)$ — the cutoff function. Depends only on the **dimensionless ratio** $x = \ell/N^{\nu}$, never on $\ell$ and $N$ separately.

Asymptotics of $f$ are all that is assumed:

$$
f(x) \to \text{const} \quad (x \ll 1)
\tag{2}
$$

$$
f(x) \to 0 \ \text{rapidly} \quad (x \gg 1)
\tag{3}
$$

So for $\ell \ll L$ a pure power law is observed, and for $\ell \gtrsim L$ the tail is truncated. $L = N^{\nu}$ marks **where the power law stops being valid**.

Note that $f$ is not an unknown to be tolerated — it is a **measured output**. The collapsed master curve is $f$ itself.

### Physical meaning of $\nu$

$\nu$ answers: how fast does the largest loop grow when the system grows?

| $\nu$ | Interpretation |
|-------|----------------|
| $\nu = 1$ | Largest loops scale with chain length — extensive, loops occupy a finite fraction of the chain |
| $\nu < 1$ | Largest loops grow slower than $N$ — sub-extensive, loops are a vanishing fraction as $N \to \infty$ |

The trivial bound $\ell \le N$ guarantees $\nu \le 1$; the question is whether equality holds. In chromatin terms: does loop extrusion generate structure at the scale of the whole chromosome, or is there an intrinsic loop scale that does not grow with chain length?

This is the random-loop analogue of the crossover question already raised for the constant-loop case (whether $m_c \sim \sqrt{N+1}$), which is a statement of the same type with $\nu = 1/2$.

### Self-consistency of normalization

For $\alpha > 1$ the sum $\sum_\ell \ell^{-\alpha} f(\ell/L)$ is dominated by small $\ell$, converges independently of $L$, and (1) needs no $N$-dependent prefactor. For $\alpha < 1$ the cutoff dominates the normalization and an amplitude $A_N \sim L^{\alpha - 1}$ must be reinstated. Since the expected value here is $\alpha \approx 2$, the form as written is consistent.

### Testing collapse in practice

Treat $(\alpha, \nu)$ as two fitting parameters and minimize a collapse residual:

$$
\chi^{2}(\alpha, \nu) = \sum_{N} \sum_{\ell} \left[ \ell^{\alpha} P_N(\ell) - \bar{g}\!\left( \ell / N^{\nu} \right) \right]^{2}
\tag{4}
$$

where $\bar{g}$ is a spline through the pooled rescaled points.

Two practical rules:

1. **Collapse the CCDF, not the PDF.** This eliminates binning freedom entirely and reduces noise. The exponent simply shifts by one:

$$
\bar{F}_N(\ell) = \ell^{-(\alpha - 1)}\, g\!\left( \frac{\ell}{N^{\nu}} \right)
\tag{5}
$$

Derivation: substituting $\ell' = \ell u$ in $\int_\ell^\infty \ell'^{-\alpha} f(\ell'/L)\, d\ell'$ gives $\ell^{1-\alpha} \int_1^\infty u^{-\alpha} f(\ell u / L)\, du$, so the same $L$ and the same $\nu$ appear with $\alpha \to \alpha - 1$.

2. **Plot contours of $\chi^{2}(\alpha, \nu)$.** If the minimum is a long valley rather than a sharp basin, $\alpha$ and $\nu$ are degenerate along a compensating direction and neither can be quoted separately. Reporting a single minimum without checking this is a common error.

### Moment scaling — an independent route to $\alpha$ and $\nu$

Moments give access to the same exponents without any tail fitting:

$$
\langle \ell^{q} \rangle \sim \text{const} \quad (q < \alpha - 1)
\tag{6}
$$

$$
\langle \ell^{q} \rangle \sim L^{\,q - \alpha + 1} = N^{\nu(q - \alpha + 1)} \quad (q > \alpha - 1)
\tag{7}
$$

Small $q$ is bulk-dominated and $N$-independent; large $q$ is cutoff-dominated and grows as a power of $N$. The crossover sits at $q^{*} = \alpha - 1$.

For $\alpha = 2$ the first moment is exactly marginal, giving a sharp diagnostic:

$$
\alpha = 2 \ \Longrightarrow \ \langle \ell \rangle \sim \ln L = \nu \ln N
\tag{8}
$$

$$
\alpha < 2 \ \Longrightarrow \ \langle \ell \rangle \sim N^{\nu(2 - \alpha)}
\tag{9}
$$

So plotting $\langle \ell \rangle$ against $\ln N$ and checking for a straight line tests $\alpha = 2$ directly, and the slope gives $\nu$. This is far more stable than tail fitting: the mean uses the whole dataset, so statistical error is small, and there is no arbitrary $\ell_{\min}$ choice. **This is the cheapest high-value measurement available.**

### Failure modes

| Observation | Interpretation |
|-------------|----------------|
| No collapse for any $(\alpha, \nu)$ | More than one characteristic scale, or a crossover |
| $\hat{\alpha}$ drifts with $N$ | Apparent power law; lognormal or similar |
| $f$ depends on $N$ beyond $\ell/N^{\nu}$ | Wrong scaling variable — see below |
| $\chi^{2}$ valley degenerate | Exponents not separable; widen the range of $N$ |

### The density trap

What is held fixed while $N$ is scanned must be decided explicitly. Holding the loop number fixed (e.g. $n_{\text{loops}} = 2048$) while increasing $N$ changes the loop density $\rho = n_{\text{ext}}/N$ simultaneously. Then observed changes cannot be attributed to $N$, and the true scaling form is a two-variable function:

$$
P(\ell) = \ell^{-\alpha}\, f\!\left( \frac{\ell}{N^{\nu}},\ \rho \right)
\tag{10}
$$

Single-variable collapse then fails in principle, not because the hypothesis is wrong. **Fix $\rho$ and scan $N$.** If $\rho$ is itself of interest, establish the $N$ collapse at fixed $\rho$ first, then study $\rho$ dependence as a second stage.

## Questions & Insights

## Related Concepts

- [[2025-05-30_Ising_Model_Finite_Size_Scaling]]
- [[K-matrix Diagonalization (Generalized Rouse Model)]]
- [[MSD exponent from scale-dependent Flory exponent]]
- [[Contact probability exponent and polymer scaling]]
- [[🕯️ Infinite step-rate limit of symmetric loop extrusion (0729)]]


## Notes from Claude
