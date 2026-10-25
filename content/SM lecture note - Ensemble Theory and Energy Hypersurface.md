---
title: SM lecture note - Ensemble Theory and Energy Hypersurface
date: "2026-10-24"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Statistical Mechanics|Statistical Mechanics]]강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

## Ensemble theory

### Voxel in phase space

Phase space에서 **voxel** → 부피의 최소 단위, 구분 가능한 상태 범위의 단위, 해상도.

$$
\prod_i^N \Delta q_i \Delta p_i = h^{3N}
$$

$\Delta q \Delta p \geq h$라는 양자적 불확정성에 의해 크기가 결정되었다.

### Energy hypersurface

**Energy hypersurface**: 에너지가 같은 상태들이 이루는 surface.

> [!note] 그림 (필기 원본 1쪽)
> $(q, p)$ phase space에서 같은 $E$를 가지는 상태들이 구면 같은 hypersurface를 이루고, 그 바깥에 두께 $dE$의 얇은 껍질이 있다.
![[Pasted image 20261024130506.png]]

이것의 크기:

$$
\sigma(E) = \int dA, \quad E = \mathcal{H}(\{\mathbf{q}_i\}, \{\mathbf{p}_i\})
$$

$\sigma(E)$를 어찌 계산하는가?

$\sigma(E)$에 의해 둘러싸인 부피를 계산:

$$
\omega(E) = \int_{\mathcal{H}(\mathbf{q}, \mathbf{p}) \leq E} \prod_i d^3q_i\, d^3p_i
$$

$$
\omega(E + dE) = \omega(E) + \left. \frac{\partial \omega}{\partial E} \right|_E dE = \omega(E) + \sigma(E)\, dE
$$

$dE$로 인해 늘어난 부피 = 표면적 · $dE$일 테니.

$$
\sigma(E) = \left. \frac{\partial \omega}{\partial E} \right|_E
$$

### Number of microstates

특정 상태변수 값 $(E, V, N)$을 가지는 microstate의 수: $\Omega(E, V, N)$

$$
\Omega(E, V, N) = \frac{\sigma(E, V, N)\, \Delta E}{h^{3N}} \simeq \frac{\sigma(E, V, N)}{h^{3N}}
$$

($3N \gg \Delta E$)

> [!important] 중요 과제
> **Ideal gas의 $S$를 구하라!**
> $\Omega$를 구한다 → $S = k_B \ln \Omega$를 구한다.

# 궁금한 내용


# AI의 보충 설명

필기 원본과 비교해 짚어둘 부분. 과제 풀이는 적지 않았다.

**1. $\sigma(E)$는 기하학적 표면적 $\int dA$와 정확히 같지 않다**
- 에너지 $E$와 $E + dE$ 사이 껍질의 두께는 어디서나 $dE$가 아니라 $dE / |\nabla_\Gamma \mathcal{H}|$이다. ($\nabla_\Gamma$: phase space의 gradient)
- 따라서 "늘어난 부피 = 표면적 · $dE$"는 $|\nabla_\Gamma \mathcal{H}|$가 상수일 때만 맞고, 일반적으로는

$$
\sigma(E) = \frac{\partial \omega}{\partial E} = \oint_{\mathcal{H} = E} \frac{dA}{|\nabla_\Gamma \mathcal{H}|} = \int \prod_i d^3q_i\, d^3p_i\ \delta(\mathcal{H} - E)
$$

- 결론 $\sigma = \partial \omega / \partial E$는 그대로 맞다. 다만 $\sigma$의 정의를 $\int dA$가 아니라 이 식으로 보는 게 정확하다.

**2. "$3N \gg \Delta E$"의 의미**
- 숫자 $3N$과 에너지 $\Delta E$는 단위가 달라 직접 비교할 수 없다. 또 $\Delta E$를 지우면 $\sigma / h^{3N}$은 무차원이 아니게 된다 (단위: 1/energy).
- 실제 근거는 entropy에서 나온다.

$$
S = k_B \ln \Omega = k_B \ln \frac{\sigma}{h^{3N}} + k_B \ln \Delta E
$$

- 첫 항은 $N$에 비례하는 $O(N)$ 크기이지만, $\ln \Delta E$는 $N$과 무관한 $O(1)$ 항이라 thermodynamic limit에서 무시된다. 같은 이유로 $\Omega$를 $\omega / h^{3N}$(껍질 대신 전체 부피)으로 세어도 $S$는 leading order에서 같다. 판서의 "$3N \gg$" 메모는 아마 이 차원 $3N$의 크기에 관한 이야기였을 것이다.

**3. Voxel 크기 $h^{3N}$의 근거**
- 불확정성 관계는 $\Delta q \Delta p \geq \hbar / 2$이고, 정확히 $h$가 나오지는 않는다. $h$는 상자 속 입자의 양자 상태 수를 세서 classical phase-space 부피와 맞추면 나오는 값이다 (semiclassical limit에서 상태 하나당 $h$의 부피).
- 불확정성은 "왜 최소 단위가 존재하는가"에 대한 직관으로 보면 된다.

**4. 과제 힌트 (풀이 아님)**
- Ideal gas에서 $\omega(E)$는 $3N$차원 구의 부피 문제가 된다.
- 동종 입자를 구분하지 않으려면 $1/N!$을 붙여야 $S$가 extensive해진다 (Gibbs paradox). 이걸 빼먹으면 Sackur–Tetrode 식이 안 나온다.

# 연관 학습 노트

- [[microcanonical ensemble의 entropy]]
- [[2025-09-05_Entropy_Misconception_Volume_vs_Microstates]]
- [[Gibbs Entropy]]
- [[Liouville's Theorem]]

# References

강의 ppt 링크를 이곳에 

# 다음 강의


# 필기 원본

![[SM_ensemble_theory.pdf]]
