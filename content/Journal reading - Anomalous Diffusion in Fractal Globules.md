---
title: Journal reading - Anomalous Diffusion in Fractal Globules
authors: M. V. Tamm, L. I. Nazarov, A. A. Gavrilov, A. V. Chertovich
DOI: "[DOI](https://doi.org/10.1103/PhysRevLett.114.178102)"
date read: 2026-06-13
date published: 2015-05-01
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Anomalous Diffusion in Fractal Globules

## Overview

Fractal globule(crumpled globule)은 진핵세포 핵 안 chromatin packing을 설명하는 대표적 모델이다. 이 논문은 그동안 정적 구조(static structure, $R \sim n^{1/3}$) 위주로 연구되던 fractal globule에서 **monomer의 thermal motion, 즉 self-diffusion dynamics**를 다룬다.

핵심 결과: fractal globule 내 monomer 운동은 subdiffusive하며, mean-square displacement가
$$
\langle X^2(t) \rangle \sim t^{\alpha_F}, \qquad \alpha_F \approx 0.4
$$
로 거동한다. 이는 scaling theory 예측 $\alpha_F = 2/5$ 및 chromatin dynamics 실험값과 잘 일치하여, fractal globule 모델을 뒷받침하는 추가 증거가 된다.

## Link to PDF and DOI

- DOI: [10.1103/PhysRevLett.114.178102](https://doi.org/10.1103/PhysRevLett.114.178102)
- PDF: [[Anomalous Diffusion in Fractal Globules.pdf]]

## 주요 내용 요약

- **배경 — 왜 fractal globule인가**: 진핵세포의 chromatin fiber는 너무 길어서, 만약 equilibrium globule이라면 심하게 entangle되어 생물학적 기능(chromosome territory, 손쉬운 unentanglement, promoter–enhancer interaction의 빠른 접촉)을 수행할 수 없다. Topological 제약(knot 없음, chain 간 entanglement 없음)이 chain을 fractal/crumpled globule 상태로 유지시킨다는 관점이다.
- **Static 가정 3가지**: ① fractal dimension $d_f = 3$ 으로 $R \sim n^{1/3}$, ② entanglement 부재 → loop가 쉽게 펴졌다 접힘, ③ territorial organization(chain을 따라 가까우면 공간적으로도 가깝다). Linear chain에서 이 상태는 equilibrium이 아니라 **metastable**이지만 비교적 오래 유지된다.

- **Scaling theory의 핵심 논리**:
  - Rouse model부터 출발. 등시간(equal-time) 통계가 $\langle [x(s_1,t)-x(s_2,t)]^2 \rangle \sim |s_1 - s_2|$ (ideal chain).
  - Chain connectivity 논증: 시간 $\tau$ 동안 변위가 자라려면 길이 $\delta s(\tau)$ 만큼의 chain 조각이 **집단적으로(collectively)** 움직여야 한다.
  - 그 조각의 effective diffusion constant는 독립적 random force 가정 하에 $D(\delta s) \sim D_0 / \delta s$.
  - 이를 결합하면 Rouse exponent $\alpha_R = 1/2$ 가 회복된다.
- **Fractal globule로의 일반화**: equal-time 통계만 fractal 통계로 교체한다.
$$
\langle [x(s_1,t)-x(s_2,t)]^2 \rangle \sim |s_1 - s_2|^{2/d_f}
$$
  같은 connectivity 논증을 반복하면 일반식
$$
\alpha_F = \frac{2}{2 + d_f}
$$
  를 얻고, $d_f = 3$ 대입 시 $\alpha_F = 2/5 = 0.4$. Hydrodynamic interaction을 포함하면 $\approx 0.42$ 로 약간 빨라진다.
- **비교 대상**: equilibrium(entangled) globule은 reptation에 의해 $\alpha_{\text{ent}} = 1/4$. 따라서 $\alpha_{\text{ent}}=1/4 < \alpha_F \approx 0.4 < \alpha_R = 1/2$ 순서로, fractal globule은 Rouse보다 느리지만 entangled globule보다는 빠르다.

- **시뮬레이션 (DPD)**: $N = 2^{18} \approx 2.6 \times 10^5$ monomer chain. 서로 다른 두 초기 상태(randomized Moore curve, conformation-dependent polymerization으로 만든 "random fractal")와 control인 "Gaussian"(equilibrium globule)을 준비·annealing.
  - 두 fractal 초기 상태가 annealing 후 수렴 → **unique metastable fractal globule state**의 존재를 시사.
  - 측정된 exponent: Gaussian $\alpha_G \approx 1/4$(reptation 예측과 일치), fractal $\alpha_F^{\text{exp}} \approx 0.38$ — 이론값 $0.4$–$0.42$에 근접(약간 낮은 것은 fluctuation effect로 추정).
  - Fractal 상태에서 변위 분포는 subdiffusion에도 불구하고 모든 시간에서 Gaussian 유지 → **fractional Brownian motion** 특성. 반면 equilibrium globule은 비정규 분포.
- **생물학적 함의 (first passage time)**: enhancer–promoter 같은 두 locus가 서로 만나는 first passage time이 genomic distance에 대해 $T \sim n^{1.6\text{–}1.67}$ 로, Rouse time $T \sim n^2$ 보다 빠르다. 즉 fractal globule packing이 유전자 조절을 위한 빠른 접촉에 유리하다는 추가 논거.

## Questions & Insights

- Question or insight 1
- Question or insight 2

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

- [[MSD exponent from scale-dependent Flory exponent]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다. 

- Source 1
- Source 2
