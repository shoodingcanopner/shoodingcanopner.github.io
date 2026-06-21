---
title: Physical properties of DNA
date: "2026-06-16"
subject: biophysics
tags:
  - study
  - concept
  - question
class: study
---

# Physical properties of DNA

## Overview

DNA polymer dynamics를 LAMMPS coarse-grained simulation으로 다루기 위해 알아야 할 DNA의 물리적 물성을 정리한 노트. 기하학적 크기, 기계적 탄성, 전하/용액 환경, 동역학 스케일, 그리고 이들을 시뮬레이션 파라미터로 환산하는 방법까지 다룬다. simulation의 input이 되거나 결과 해석의 기준이 되는 숫자들을 한곳에 모아두는 것이 목적이다.

## Geometric size (double-stranded DNA)

dsDNA의 기본 기하학적 치수는 다음과 같다.

- 1 base pair 사이 간격(rise): **0.34 nm**
- 1회전 길이(helical pitch): 약 10 bp, **3.4 nm**
- 폭(diameter): **2 nm**
- Nucleosome 하나의 크기: 약 11 nm
- Nucleosome 하나에 감긴 DNA: 약 147 bp, 약 50 nm
- Helicity: **right-handed** (B-form 기준)

흥미로운 우연: nucleosome 하나에 감기는 DNA 길이(약 50 nm)가 dsDNA의 persistence length(50 nm)와 거의 같다. 이는 단순한 우연이 아니라, persistence length가 DNA를 단단히 감기 위해 극복해야 하는 bending 에너지 스케일과 직접 연관되기 때문으로 볼 수 있다.

## Persistence length
- Double-stranded: 약 **50 nm** (약 150 bp)
- Single-stranded: 약 **1~2 nm** (salt 조건에 크게 의존)

> [!warning] ssDNA persistence length 주의
> ssDNA의 persistence length는 출처에 따라 약 1~2 nm 범위로 보고되며 이온 농도에 매우 민감하다. dsDNA의 폭(2 nm)과 숫자가 비슷해 혼동하기 쉬우니, 실제 사용할 때는 측정 조건(salt concentration)을 함께 명시하는 것이 좋다.

Persistence length는 bending stiffness $\kappa$와 다음 관계로 연결된다.

$$
l_p = \frac{\kappa}{k_B T}
\tag{1}
$$

이 관계는 LAMMPS에서 angle potential(bending rigidity)을 세팅할 때 직접 사용된다. 시뮬레이션에서 bead 한 개가 몇 bp에 대응하는지를 정하면, 그에 맞춰 angle stiffness를 환산할 수 있다.

## Mechanical properties

Coarse-grained 모델에서 bond/angle potential을 정할 때 참조하는 탄성 물성.

- **Bending stiffness**: persistence length로부터 식 (1)로 환산.
- **Stretching modulus**: dsDNA는 약 1000~1500 pN. force-extension 곡선의 선형 영역(enthalpic stretching) 해석에 필요.
- **Torsional persistence length**: 약 75 nm. twist rigidity에 해당하며 supercoiling을 다룰 때 필수.
- **Worm-like chain (WLC)**: dsDNA의 force-extension 거동을 기술하는 표준 모델. 낮은 force에서 entropic elasticity, 높은 force에서 enthalpic stretching을 보인다.

## Electrostatics & solution environment

DNA는 backbone의 인산기 때문에 강한 음전하를 띤다. screening이나 binding을 다루는 모델에서 중요하다.

- **Linear charge density**: backbone 1개당 $-1e$, 즉 1 bp당 $-2e$.
- **Debye length** $\lambda_D$: salt 농도에 따라 전기적 상호작용이 가려지는(screening) 거리 스케일.
- **Manning condensation**: counter-ion이 backbone 주위에 응축되어 effective charge가 명목값보다 줄어드는 현상.

## Dynamics & time scales

DNA segment 또는 DNA-binding protein의 운동을 특징짓는 양들. anomalous diffusion 해석의 기준이 된다.

- **Diffusion coefficient** $D$: 자유 DNA segment, 또는 DNA 위를 움직이는 binding protein의 1D/3D diffusion 계수.
- **Relaxation time**: Rouse time $\tau_R$ (hydrodynamics 무시), Zimm time (hydrodynamics 포함).
- **MSD scaling exponent**: polymer의 internal monomer는 short-time에서 anomalous subdiffusion을 보인다. Rouse model은 $\langle \Delta r^2 \rangle \sim t^{1/2}$, Zimm model은 $\sim t^{2/3}$. 이 exponent의 분리가 본 연구의 핵심 관심사.

## Coarse-graining mapping

실제 물성을 LAMMPS bead-spring 파라미터로 옮기는 매핑. 가장 자주 들춰보게 될 부분.

- **1 bead = 몇 bp인가?**: 보통 bead 하나를 persistence length 또는 그 절반에 대응시킨다. 예를 들어 1 bead ≈ 약 3 nm (약 10 bp)로 잡으면 flexible chain 근사가 잘 맞는다.
- **Bead diameter** $\sigma$: LJ 단위의 $\sigma$를 실제 nm로 환산해 excluded volume을 설정.
- **Bond potential**: 보통 FENE 또는 harmonic. Kremer-Grest 모델이 표준.
- **Angle potential**: persistence length를 재현하도록 식 (1)로 stiffness 결정.

## Questions & Insights

- Nucleosome에 감기는 DNA 길이(약 50 nm)와 dsDNA persistence length(50 nm)가 일치하는 것은 물리적으로 필연적인가, 아니면 우연인가? bending energy 관점에서 정량적으로 따져볼 가치가 있다.
- 우리 coarse-grained 모델에서 1 bead를 몇 bp로 잡을 것인지, 그리고 그 선택이 MSD scaling exponent 추정에 어떤 bias를 주는지 점검 필요.

## Related Concepts

- [[Gaussian Chain (Ideal Chain)]]
- [[Radius of Gyration of Gaussian Chain]]
- [[Entropic Spring Constant]]
- [[Contact probability exponent and polymer scaling]]
- [[Journal reading - Polymer physics of chromosome large-scale 3D organisation]]
- [[Journal reading - Polymer physics of nuclear organization and function]]
- [[Journal reading - Complexity of chromatin folding is captured by the strings and binders switch model]]

## References

- 사용자가 정리한 DNA 기본 물성 데이터 (geometric size, persistence length)

## Notes from Claude

이 노트는 "측정값/물성 모음집" 성격이라, 앞으로 실제 LAMMPS input을 짜면서 구체적인 환산 숫자(σ in nm, bead당 bp 수, angle stiffness 값 등)가 확정되면 Coarse-graining mapping 섹션을 실제 사용한 값으로 채워나가면 좋겠다. 그렇게 하면 이 노트가 "이론값 → 우리 시뮬레이션에서 실제 쓴 값"을 잇는 다리 역할을 하게 된다.
