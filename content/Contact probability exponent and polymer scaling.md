---
title: Contact probability exponent and polymer scaling
date: 2026-06-13
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study
---

# Contact probability exponent and polymer scaling

## Overview

Polymer의 **contact probability** $P_c(s)$ (contour distance $s$만큼 떨어진 두 monomer가 공간에서 접촉할 확률)는 power law $P_c(s) \sim s^{-\alpha}$를 따른다. 이 contact exponent $\alpha$는 mean-square distance exponent $\nu$ ($R(s) \sim s^{\nu}$, 즉 fractal dimension $d_f = 1/\nu$)와 스케일링 관계로 연결된다.

이 노트는 그 관계식을 정리하고, 특히 **self-avoiding walk(SAW)에서 단순 $\alpha = d\nu$가 깨지는 이유(correlation hole)**와, chromatin 모델(equilibrium globule / fractal globule / SBS transition)에서 각각 $\alpha$가 어떻게 나오는지를 비교한다. SBS model 논문(Barbieri 2012)의 $\alpha = 2.1, 1.5, 0$ 값들의 출처를 정당화하는 도구이다.

## Symbol table

| Symbol | Meaning |
|--------|---------|
| $s$ | contour(genomic) distance, 두 monomer 사이 chain을 따라 잰 거리 |
| $R(s)$ | 두 monomer 사이 공간상 거리, $R(s)\sim s^{\nu}$ |
| $\nu$ | metric(size) exponent, fractal dimension $d_f = 1/\nu$ |
| $\alpha$ | contact probability exponent, $P_c(s)\sim s^{-\alpha}$ |
| $d$ | 공간 차원 (여기서는 $d=3$) |
| $\gamma$ | configuration number exponent of free linear polymer |
| $\theta_2$ | des Cloizeaux internal-internal contact exponent (correlation hole) |

## Key Points

### 1. 기본 mean-field 관계식: $\alpha = d\nu$

두 monomer가 접촉하려면 한 쪽이 다른 쪽 주위 접촉 부피 $\sim b^d$ 안에 들어와야 한다. monomer가 퍼져 있는 부피는 $\sim R(s)^d \sim s^{d\nu}$이므로, 접촉 확률은 "접촉 부피 / 퍼진 부피":

$$
P_c(s) \sim \frac{b^d}{R(s)^d} \sim s^{-d\nu}
\tag{1}
$$

따라서 $d=3$에서:

$$
\alpha = d\nu = 3\nu
\tag{2}
$$

이 식은 **두 monomer 위치가 독립적(uncorrelated)이라고 가정한 mean-field 근사**이다. ideal chain·collapsed globule처럼 monomer 간 통계적 상관이 약할 때 잘 맞는다.

### 2. 세 가지 표준 상태에서의 값

| 상태 | $\nu$ | $d_f = 1/\nu$ | $\alpha$ | 비고 |
|---|---|---|---|---|
| ideal chain / 3D random walk | $1/2$ | 2 | $3/2$ | $3\nu = 1.5$, mean-field 정확 |
| equilibrium globule | $1/3$ | 3 | $3/2$ | collapsed & **highly knotted/entangled** |
| fractal (crumpled) globule | $1/3$ | 3 | $\approx 1$ | collapsed & **knot-free, territorial** |
| SAW (swollen coil) | $\approx 0.588$ | $\approx 1.7$ | $\approx 2.1$ | correlation hole 보정 필요 (식 4) |

주목할 점: **equilibrium globule과 fractal globule은 둘 다 $\nu = 1/3$($d_f = 3$, space-filling)인데 $\alpha$가 다르다** ($3/2$ vs $1$). 즉 $\alpha$는 $\nu$만으로 결정되지 않으며, **chain의 위상(topology)·상관 구조**에도 의존한다. mean-field 식 $\alpha = 3\nu = 1$은 fractal globule(knot-free)에 맞고, knotted equilibrium globule은 contact가 더 빨리 감소($\alpha = 3/2$)한다.

### 3. SAW에서 단순 $3\nu$가 깨지는 이유: correlation hole

Self-avoiding chain에서는 두 monomer가 excluded volume 때문에 서로를 밀어내, 가까운 거리에 함께 있을 확률이 mean-field 예측보다 더 억제된다 (**correlation hole**). 이 효과는 거리 분포함수 $p(r)$의 short-distance 거동에 추가 지수로 들어간다:

$$
p_s(r, N) \approx R_N^{-d}\, F_s(r/R_N), \qquad F_s(y) \sim y^{\theta_s} \;\; (y \to 0)
\tag{3}
$$

여기서 $\theta_s$는 접촉하는 두 점의 종류에 따라 다르다 (des Cloizeaux exponents):
- $\theta_0$: end–end contact, $\theta_0 = (\gamma - 1)/\nu \approx 0.27$
- $\theta_1$: end–internal contact, $\approx 0.46$
- $\theta_2$: **internal–internal contact**, $\approx 0.71$ (des Cloizeaux 원래값) ~ $0.81$ (Duplantier+Monte Carlo 정밀값)

Chromatin contact는 chain 내부 두 점이므로 $\theta_2$를 쓴다. correlation hole을 포함한 contact probability는:

$$
P_c(s) \sim s^{-(d + \theta_2)\nu}
\tag{4}
$$

즉 contact exponent는:

$$
\alpha = (d + \theta_2)\,\nu
\tag{5}
$$

SAW 검산: $\alpha = (3 + 0.81)\times 0.588 \approx 2.24$, SBS 논문의 $\alpha \approx 2.1$과 합리적으로 일치.

**핵심**: $\theta_2$는 swollen SAW에서 무시 못 하지만, ideal chain·fractal globule에서는 거의 0이라 식 (2)의 단순 $\alpha = d\nu$로 회귀한다. 그래서 open(SAW)만 $3\nu$에서 벗어나는 것.

### 4. SBS 논문 값들과의 대응

- **open (euchromatin)**: $\nu = 0.588$ → 식 (5)로 $\alpha \approx 2.1$ ✓
- **transition (fractal, $\Theta$-point)**: $\nu = 0.5$ → 식 (2)로 $\alpha = 1.5$ ✓ (Hi-C $1.08$을 포함하는 범위로 서술)
- **compact (heterochromatin)**: $\nu \to 0$, contact가 거리에 무관 → $\alpha \to 0$ (plateau)

## Questions & Insights

- Q: 왜 open(SAW)만 $\alpha = 3\nu$ 공식에서 벗어나는가?
  A: SAW는 excluded volume이 강해 두 monomer 간 correlation hole($\theta_2 \approx 0.8$)이 무시 못 할 크기다. ideal chain·globule은 이 효과가 약해 $\alpha = 3\nu$ 회귀.
- Q: equilibrium globule과 fractal globule은 둘 다 $\nu = 1/3$인데 왜 $\alpha$가 다른가 ($3/2$ vs $1$)?
  A: $\alpha$는 metric exponent $\nu$만이 아니라 chain의 위상에도 의존한다. fractal globule은 knot-free·territorial이라 가까운 contour가 공간에서도 가까워 contact 감소가 느리고($\alpha\approx1$), equilibrium globule은 highly knotted라 mixing이 심해 contact가 더 빨리 감소($\alpha=3/2$)한다. Lieberman-Aiden 2009가 Hi-C의 $\alpha\approx1.08$을 fractal globule의 증거로 든 핵심 근거.

## Related Concepts

- [[Journal reading - Complexity of chromatin folding is captured by the strings and binders switch model]]
- [[Journal reading - The fractal globule as a model of chromatin architecture in the cell]]
- [[Journal reading - Polymer physics of nuclear organization and function]]
- [[Journal reading - Anomalous Diffusion in Fractal Globules]]

## References

- des Cloizeaux, J. (1980) Short range correlation between elements of a long polymer in a good solvent. *J. Physique* 41, 223. — internal contact exponent $\theta_2$ 원전 (RG $\epsilon$-expansion)
- Duplantier, B. — $\theta_2$를 star polymer exponent와 연결; 정밀값 $\theta_2 \approx 0.81$ (Hsu et al. PERM Monte Carlo 기반)
- Lieberman-Aiden, E. et al. (2009) Comprehensive mapping of long-range interactions reveals folding principles of the human genome. *Science* 326, 289. — fractal globule $\alpha\approx1$ vs equilibrium globule $\alpha=3/2$ 구분
- Mirny, L. A. (2011) The fractal globule as a model of chromatin architecture in the cell. *Chromosome Res* 19, 37.
- de Gennes, P. G. (1979) *Scaling Concepts in Polymer Physics*. — $\Theta$-point $\nu=1/2$ 및 contact scaling 배경

## Notes from Claude

Claude's explanations and insights on this topic:

이 관계식을 처음 유도할 때 흔히 $\alpha = 3\nu$만 외우는데, 이건 mean-field 근사일 뿐이고 SAW에서는 명백히 깨진다는 점이 핵심이다. 더 깊게는, $\alpha$ 하나로 polymer 상태를 역추론하는 것이 위험하다는 함의가 있다 — equilibrium/fractal globule이 같은 $\nu$에 다른 $\alpha$를 갖는 것처럼, $\alpha$는 metric exponent와 topology 둘 다의 함수이기 때문이다. SBS 논문의 mixture 논증("평균 $\alpha$만으로는 architecture를 말할 수 없다")은 사실상 이 통찰의 또 다른 표현이다: 단일 $\alpha$ 값은 여러 conformation 혼합의 평균일 수 있어 구조를 일의적으로 결정하지 못한다.

주의: des Cloizeaux exponent에는 $\theta_0$(end-end), $\theta_1$(end-internal), $\theta_2$(internal-internal) 세 종류가 있고, chromatin처럼 chain 내부 두 점의 접촉에는 반드시 $\theta_2$를 써야 한다. 값이 헷갈리기 쉬우니($\theta_0\approx0.27$ vs $\theta_2\approx0.8$) 인용 시 종류를 명시할 것.
