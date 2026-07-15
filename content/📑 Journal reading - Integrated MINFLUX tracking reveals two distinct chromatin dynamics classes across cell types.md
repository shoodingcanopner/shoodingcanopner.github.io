---
title: Integrated MINFLUX tracking reveals two distinct chromatin dynamics classes across cell types
authors: Matteo Mazzocca, Domenic N. Narducci, Simon Grosse-Holz, Jessica Matthias, Tatiana S. Karpova, Anders S. Hansen
DOI: "[DOI](https://doi.org/10.1038/s41594-026-01807-6)"
date read: "2026-07-07"
date published: "2026-05-04"
subject: chromatin dynamics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Integrated MINFLUX tracking reveals two distinct chromatin dynamics classes across cell types
## 왜 읽었나
[[260706 Chromatin dynamics 후속연구]]
이 논문에 따르면, 실제 크로마틴은 아주 넓은($10^{-4} \sim 10^4$ s) time scale에서 일전한 0.3의 subdiffusion을 보인다. 
어떻게 이게 가능한가? 아직 설명한 사람이 없다. 

또한, chrimatin dynamics에 영향을 끼치는 단백질들을 억제하는 약을 쳐서 MSD를 뽑았다. 
이는 chromatin dynamics의 key factor가 무엇인지 알려주는 단서일지도 모른다. 
## Overview

Hansen lab (MIT)에서 나온 논문으로, MINFLUX(200 μs–10 s), 카메라 기반 SPT(100 ms–200 s), SRLCI(20 s–hours)를 결합해 **7 orders of magnitude (OOM)**에 걸쳐 chromatin MSD를 측정했다. 목표는 MSD(Δt) ∝ Δt^α의 power-law 가정이 실제로 성립하는지, 아니면 α가 timescale에 따라 변하는지(continuously varying α)를 큰 dynamic range에서 검증하는 것. 결과적으로 세포 종류에 따라 두 가지 질적으로 다른 dynamics class가 존재함을 발견했다:

1. **Class 1 (U2OS, RPE-1):** 전체 7 OOM에 걸쳐 α ≈ 0.3으로 일정한 단일 power law — persistent subdiffusion.
2. **Class 2 (MEF, RH30, mES cells):** 짧은 시간(α ≈ 0.3)에서 긴 시간(α ≈ 0.5–0.6)으로 갈수록 α가 증가하는 continuously steepening MSD — 즉 단일 exponent로 fitting이 안 됨.

이 두 번째 class는 사용자가 진행 중인 **continuous ν(n) → α(τ) ODE 프레임워크**와 현상론적으로 정확히 같은 형태의 질문(α가 timescale에 따라 어떻게 변하는가)을 실험적으로 다루고 있어, 직접적인 관련성이 크다.

## Link to PDF and DOI

- DOI: https://doi.org/10.1038/s41594-026-01807-6
- 로컬 PDF: [[Integrated MINFLUX tracking reveals two distincr chromatin dynamics classes across cell types.pdf]]

## 주요 내용 요약

- **모티베이션:** 기존 chromatin MSD 연구들은 대부분 dynamic range가 2 OOM 정도(≤4 OOM이 ~97%)에 그쳐, subdiffusive regime(특히 α < 0.5)을 통계적으로 검증하기에 불충분했다. Fractal globule 모델(α = 0.4)을 검증하려면 >5 OOM, α = 0.3이면 거의 7 OOM이 필요하다는 계산.

- **방법론:** MINFLUX, SPT, SRLCI 라는 세 가지 MSD 측정 방식을 이용. 이러는 이유는 세 방식이 볼 수 있는 time scale이 각자 다르기 때문. 위 FIg.1 a에서 나타낸 것 처럼 $10^{-4} \sim 10^1$에서는 MINFLUX를, $10^2 \sim 10^3$에서는 SPT를, $10^0 \sim 10^4$에서는 SRLCI를 이용. 
![[Pasted image 20260707111333.png]]
![[Pasted image 20260707115150.png]]


- **Experimental Setup 1**: Chromatin위의 랜던한 single loci의 MSD를 확인
> DNA가 아니라 히스톤 단백질에 형광을 붙였다. H2B-HaloTag + $JFX_{650}$ ligand
> Human과 mouse 두 종의 여러가지 cell을 사용했다. mES, MEF, U2OS, RPE-1, RH30
![[Pasted image 20260707111305.png]]
   H2B에 Halo 발현시키는데 PiggyBac integrase를 사용했다고 한다. 관심있으면 나중에 찾아볼 것. 


- **Experimental Setup 2**: 한 [[Topologically associated domain|TAD]]에 속하는 두 [[CTCF]] loci에 다른 형광을 달아서 관찰했다. Loop extrusion의 영향을 직접적으로 보고싶어서 이렇게 한 듯 하다. 
![[Pasted image 20260707113323.png]]

- **핵심 결과 1 — 두 가지 dynamics class** 
> genome-wide H2B-Halo tracking에서 U2OS/RPE-1은 단일 α ≈ 0.29–0.30 power law로 전체 range를 잘 설명. 
![[Pasted image 20260707115231.png]]
![[Pasted image 20260707115258.png]]


> 반면 MEF/RH30/mES는 짧은 시간에서 α ≈ 0.3으로 시작해 긴 시간에서 α ≈ 0.5–0.6까지 증가 — 단일 exponent 모델이 기각됨(invalidates single-exponent model).
![[Pasted image 20260707115524.png]]
![[Pasted image 20260707115548.png]]
![[Pasted image 20260707115602.png]]


- **핵심 결과 2 — 모든 세포에서 short-timescale α ≈ 0.3:** Rouse (α=0.5), fractal globule (α=0.4) 같은 표준 polymer 모델보다 훨씬 subdiffusive. 즉 통상적으로 쓰이는 polymer model들로는 짧은 시간 동역학을 설명 못 함.

- **Perturbation 실험:** transcription 억제(DRB), HDAC 억제(TSA), topoisomerase II 억제(ICRF)는 mobility prefactor Γ만 다소 바꾸고 α(exponent)에는 큰 영향 없음. 반면 cohesin subunit RAD21 depletion(loop extrusion 제거)은 유일하게 **long-timescale α를 유의미하게 변화**시켰다(Fbn2 locus, control α~0.3 → ΔRAD21 α~0.5). → loop extrusion이 minutes~hours 스케일 chromatin motion의 주요 regulator라는 결론.
![[Pasted image 20260707113510.png]]
DRB: RNA polymerase가 DNA에 붙으면 국소적으로 loci하나가 무거워지면서 friction이 증가하는 효과를 줄 것이다. 
TSA: Acetylation은 histone의 charge를 중화시켜서 open chromatine을 만든다. 
ICRF: [[Topoisomerase II]]는 supercoiling과 엉킴을 방지. ICRF는 이 작용을 억제

![[Pasted image 20260707115718.png]]
![[Pasted image 20260707115810.png]]
![[Pasted image 20260707115821.png]]

- **Fbn2 locus (mES) 특이 케이스:** array tracking은 array 자체의 finite size 때문에 short-time에서 MSD가 낮게 나오다가, array 크기 이상으로 벗어나면 genome-wide histone MSD와 수렴. SRLCI 데이터는 two-locus relative MSD라서 장시간에는 genomic separation에 의해 saturate — 이는 완전히 다른 통계량(two-point 대 one-point)을 비교하는 것이므로 겉보기 불일치는 방법론적 차이로 설명됨.
![[Pasted image 20260707115636.png]]
- **First-passage time(FPT) 함의:** FPT ∝ X^(2/α) (self-similar scaling). α=0.3일 때 330 nm 떨어진 두 loci의 median FPT ~10 s. Genomic separation이 100 kb → 2 Mb(20배)로 늘면 search time이 ~20,000배 증가(~8시간). 이는 distal E-P(enhancer-promoter) 상호작용이 diffusion만으로는 극히 비효율적이며 loop extrusion 같은 능동적 메커니즘이 필요함을 시사.
![[Pasted image 20260707115851.png]]

- **Discussion 핵심 메시지:** (1) MSD가 power law인지 여부와 무관하게, 모든 세포에서 이전 보고들보다 훨씬 얕은(shallow) MSD, 즉 강한 subdiffusion 관찰. (2) 알려진 DNA-associated process 억제로는 이 강한 subdiffusion의 기원을 설명 못 함 — cumulative effect of multiple processes 또는 chromatin folding geometry 자체의 물리적 제약일 가능성. (3) <200 nm 내에서는 diffusive search가 매우 효율적(~360 ms)이라 'contact'와 'action-at-a-distance' 구분이 무의미해짐.




## Questions & Insights


## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

[[MOCs/📑 Journal reading - Polymer physics of nuclear organization and function|📑 Journal reading - Polymer physics of nuclear organization and function]]

이런 실험 논문에서 발견한 사실을 한 곳에 정리해두자. 
[[Chromatin dynamics]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- Gabriele, M. et al. Dynamics of CTCF- and cohesin-mediated chromatin looping revealed by live-cell imaging. *Science* 376, 496–501 (2022). — 이 논문의 Bayesian MSD fitting 방법론의 기반. SRLCI 데이터 출처.
- Bronshtein, I. et al. Transient anomalous diffusion of telomeres in the nucleus of mammalian cells. *Phys. Rev. Lett.* 103, 018102 (2009). — 큰 dynamic range에서 varying exponent를 보고한 선행 사례(telomere).
- Marchi, E., Zhan, Y. & Tiana, G. Locality of contacts determines the subdiffusion exponents in polymeric models of chromatin. *Phys. Rev. E* 107, 064406 (2023). — loop 유발 subdiffusion의 polymer 이론적 배경.
- Sabaté, T. et al. Uniform dynamics of cohesin-mediated loop extrusion in living human cells. *Nat. Genet.* 57, 3152–3164 (2025).
