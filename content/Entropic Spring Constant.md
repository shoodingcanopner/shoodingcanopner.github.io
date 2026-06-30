---
title: Entropic Spring Constant
date: "2026-01-21"
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study
---

# Entropic Spring Constant

## Overview

**Entropic spring constant** $K_e$는 [[Gaussian Chain (Ideal Chain)]]이 마치 스프링처럼 행동할 때의 탄성 상수이다. 이 탄성은 에너지적 기원이 아니라 **엔트로피적 기원**을 가진다.

놀라운 특징:
- **온도에 비례**: $K_e \propto T$ (일반 스프링은 $T$와 무관)
- **사슬 길이에 반비례**: $K_e \propto 1/N$

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $K_e$ | Entropic spring constant |
| $N$ | Segment 수 |
| $l$ | Kuhn length |
| $k_B$ | Boltzmann constant |
| $T$ | Temperature |
| $\mathbf{R}$ | End-to-end distance vector |
| $\mathbf{f}$ | 사슬 끝에 작용하는 힘 |

## Key Points

### 유도

Gaussian chain의 end-to-end distance $\mathbf{R}$에 대한 자유에너지:

$$
F(\mathbf{R}) = \frac{3k_BT}{2Nl^2} R^2
\tag{1}
$$

사슬 끝을 $\mathbf{R}$에 유지하려면 힘이 필요하다:

$$
\mathbf{f}(\mathbf{R}) = -\frac{\partial F}{\partial \mathbf{R}} = -\frac{3k_BT}{Nl^2} \mathbf{R} = -K_e \mathbf{R}
\tag{2}
$$

따라서 **entropic spring constant**:

$$
K_e = \frac{3k_BT}{Nl^2}
\tag{3}
$$

### 물리적 의미

**왜 온도에 비례하는가?**

일반 스프링(금속, 고무)의 탄성은 **에너지**에서 온다: 원자 간 결합을 변형시키는 데 에너지가 필요.

Gaussian chain의 탄성은 **엔트로피**에서 온다:
- $R = 0$일 때: Configuration 수 최대 → 엔트로피 최대
- $R > 0$일 때: Configuration 수 감소 → 엔트로피 감소

온도가 높을수록 $T\Delta S$ 효과가 커지므로, 사슬을 늘리기 더 어려워진다 (복원력 증가).

**왜 $N$에 반비례하는가?**

긴 사슬($N$ 큼)은 같은 $\mathbf{R}$을 만들 수 있는 configuration이 더 많다. 따라서 늘리기 쉽다 (스프링 상수 작음).

### Bead-Spring Model

이 결과는 Gaussian chain을 **bead-spring model**로 볼 수 있음을 의미한다:

- $N+1$개의 bead가 $N$개의 스프링으로 연결됨
- 각 스프링의 상수: $\frac{3k_BT}{l^2}$
- 전체 사슬의 유효 스프링 상수: $K_e = \frac{3k_BT}{Nl^2}$

직렬 연결된 스프링의 유효 상수가 $1/N$에 비례하는 것과 일치.


## Questions & Insights

- **고무 탄성**: 고무의 탄성도 entropic origin이다. 고무를 가열하면 더 뻣뻣해진다!
- **Effective Hamiltonian 관점**: $F(\mathbf{R})$는 microscopic 자유도를 적분해서 얻은 effective free energy. 이를 통해 복잡한 고분자를 단순한 스프링으로 환원.
- **한계**: 사슬을 contour length $L = Nl$에 가깝게 늘리면 Gaussian 근사가 깨진다. 이때는 더 정교한 모델 (Freely Jointed Chain의 Langevin function 등) 필요.

## Related Concepts

- [[Gaussian Chain (Ideal Chain)]] - Entropic spring의 기반이 되는 모델
- [[Radius of Gyration of Gaussian Chain]] - Gaussian chain의 또 다른 특성량

## References

- [[Statistical Physics for Biological Matter (Woo)]] - Chapter 10, Section 10.1 (The Entropic Chain)

## Notes from Claude

Entropic spring constant가 $T$에 비례한다는 사실은 처음 들으면 반직관적이다. "온도가 높으면 더 흐물흐물해지지 않나?"라고 생각하기 쉽다.

하지만 엔트로피 관점에서 보면 자연스럽다. 온도가 높을수록 시스템은 엔트로피가 높은 상태를 더 강하게 선호한다. Gaussian chain에서 엔트로피가 높은 상태는 $R \approx 0$인 coil 상태다. 따라서 고온에서는 사슬이 coil 상태로 돌아가려는 복원력이 더 강해진다.

이것은 고무풍선을 뜨거운 물에 넣으면 오히려 수축하는 현상과 같은 원리다!
