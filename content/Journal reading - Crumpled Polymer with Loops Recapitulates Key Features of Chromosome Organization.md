---
title: "Crumpled Polymer with Loops Recapitulates Key Features of Chromosome Organization"
authors: Kirill E. Polovnikov, Hugo B. Brandão, Sergey Belan, Bogdan Slavov, Maxim Imakaev, Leonid A. Mirny
DOI: "[DOI](https://doi.org/10.1103/PhysRevX.13.041029)"
date read: "2026-08-30"
date published: "2023-11-13"
subject: chromatin polymer physics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Crumpled Polymer with Loops Recapitulates Key Features of Chromosome Organization

## Overview

Crumpled chain (df 임의, 특히 df=3인 crumpled globule)을 exponentially distributed loop(평균 길이 λ)와 gap(평균 길이 g)으로 folding시킨 analytical model. Diagram decomposition (4 diagrams: spacer-spacer, loop-spacer, loop-loop same, loop-loop other) + fractional Brownian motion (fBm) bridge formalism — 즉 Polovnikov, Nechaev & Tamm (Soft Matter, 2018)에서 다룬 effective Hamiltonian을 그대로 가져와 loop 안쪽 통계에 적용한다. 핵심 결과는 두 가지:

1. Contact probability P(s)의 log-derivative에 peak-and-dip 구조가 생기는 이유를 기하학적으로 설명 (loop shoulder at s≈λ)
2. **Dilution of entanglements**: unentangled loop들이 backbone을 shortening시키면서 동시에 entanglement length Ne를 증가시킴 → chromosome은 s ≲ 1–2 Mb에서 사실상 unentangled

## Link to PDF and DOI

- PDF: `Books/Crumpled_Polymer_with_Loops_Recapitulates_Key_Features_of_Chromosome_Organization.pdf` (사용자 업로드본, Books 폴더로 이동 권장)
- DOI: [10.1103/PhysRevX.13.041029](https://doi.org/10.1103/PhysRevX.13.041029)

## 주요 내용 요약

- **Model setup**: fractal chain (df ≥ 2)을 exponentially distributed loop (mean λ)/gap (mean g)로 접음. Loop base는 additional bond로만 모델링 (topological embrace 아님, cohesin의 "chemical binding" 근사).
- **Mean-field 관계**: 
$$
P_0(s) \propto s^{-3/df}
$$
  loop이 없는 fractal chain의 baseline.
- **4 diagrams (Fig. 7, a–d)**: spacer-spacer / loop-spacer / 같은 loop 안 / 서로 다른 loop. 각 diagram의 분산 ⟨r²⟩을 fBm bridge 공식으로 계산하고, exponential loop/gap 분포를 two-state Markov process로 취급해 diagram별 통계적 weight를 유도 (Appendix A).
- **Small-scale (s≤λ) 효과**: loop 내부 접촉 증가로 shoulder 생성
$$
P(s)/P_0(s) \approx 1+\Omega(s/\lambda)\,\frac{\lambda}{\lambda+g},\quad s\le\lambda
$$
- **Large-scale (s≫λ) 효과**: loop들을 건너뛰는 effective contour shortening
$$
P(s)/P_0(s)\propto\left(\frac{\lambda}{g}+1\right)^{3/df},\quad s\gg\lambda
$$
- **Peak & dip**: 두 효과의 경쟁이 log-derivative의 peak(=λ 근처)와 dip을 만듦. Ideal chain(df=2)에서는 d=λ/g≈2, crumpled chain(df=3)에서는 d≈1에서 dip이 사라짐.
- **Entanglement length Ne의 crossover**: s<Ne에서는 ideal(df=2), s≥Ne에서는 crumpled(df=3) — topological blob 개념.
- **Dilution of entanglements의 핵심 물리**: loop들이 unentangled이므로 topological obstacle을 만들지 않음. Backbone이 shortening되면서 effective Kuhn volume density가 감소:
$$
\varphi_k^{\rm eff} = \frac{\varphi_k^{(0)}}{1+d\left(1-c_\alpha \varphi_k^{(0)}\lambda^{1/2}\right)}, \qquad N_e = N_e(\varphi_k^{\rm eff})
$$
  여기서 d=λ/g. Simulation(N≈90,000 beads, ring polymer)에서 Ne가 d=0일 때 70 kb → d=3일 때 420 kb로 6배 증가함을 확인 (Fig. 4b).
- **Micro-C fit (HFF cells)**: λ≈180 kb, λ/g=2 → 추정 Ne≈700 kb, 즉 약 8개 loop (~2 Mb) 스케일까지 chromosome backbone이 사실상 unentangled.
- **Γ(local friction)와 무관하게 topology 논의**: cohesin depletion(ΔRad21)은 peak/dip을 완전히 없애고 P(s)~s⁻¹ 유지 (loop 자체가 사라짐); Wapl depletion은 loop을 키워 shoulder를 오른쪽으로 이동시킴.
- **한계점 (저자 스스로 명시)**: (1) exponential loop/gap 분포 가정, 실제 extrusion에서는 nested loop·correlation 존재; (2) equilibrium loop 가정 — active/nonequilibrium 효과 미고려 (critical scale s*≈100–1000 kb 추정); (3) Gaussian 근사 — 실제 crumpled chain은 non-Gaussian Redner–des Cloizeaux 분포를 따름, 그래서 effective df≈2.7 (not 3) 사용; (4) λ/g>4의 dense bottle-brush regime은 다루지 않음.

## Questions & Insights

- Question or insight 1
- Question or insight 2

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

- [[Journal reading - Effective Hamiltonian of topologically stabilized polymer states]] (같은 저자의 fBm bridge / effective Hamiltonian 이론적 기반)

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- Source 1
- Source 2
