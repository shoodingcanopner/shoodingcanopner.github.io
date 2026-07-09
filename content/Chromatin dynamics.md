---
title: Chromatin dynamics
date: "2026-07-07"
subject: biophysics
tags:
  - study
  - concept
  - question
  - chromatin
  - chromatin-dynamics
  - anomalous-diffusion
  - polymer-physics
class: study
---

# Chromatin dynamics

## Overview

Chromatin dynamics는 세포 핵 내에서 chromatin(chromosome을 구성하는 DNA-histone 복합체)이 시간에 따라 어떻게 움직이는지를 다루는 분야다. 핵심 관측량은 mean squared displacement(MSD)이며, 보통

$$
\text{MSD}(\Delta t) \propto \Delta t^{\alpha}
$$

형태의 (준)power-law로 기술된다. 여기서 exponent $\alpha$가 1보다 작으면 subdiffusion을 의미하고, chromatin의 polymeric한 연결성(뉴클레오솜 간 연결) 때문에 일반적으로 $\alpha < 1$이 관측된다.

이 노트는 chromatin dynamics와 관련된 저널 리딩 노트, 개념 노트들을 모으는 **hub 역할**을 하는 MOC다. 앞으로 관련 연구를 읽을 때마다 이곳에 링크를 추가한다.

## Key Points
- **표준 polymer 모델의 예측:**
  - Rouse model: $\alpha = 0.5$
  - Fractal globule model: $\alpha \approx 0.4$
  - SBS(Strings and Binders Switch) model: 국소 Flory exponent $\nu_\text{loc}(n)$에 따라 α가 연속적으로 변할 수 있음
- **실험적으로 보고된 α 값의 범위:** 문헌마다 0.1~0.8로 넓게 퍼져 있으며, 이는 (1) 측정 dynamic range 부족, (2) locus-specific vs. genome-wide 차이, (3) 세포 종류·chromatin 상태(eu/heterochromatin)의 차이 등에서 기인
### [[Journal reading - Integrated MINFLUX tracking reveals two distinct chromatin dynamics classes across cell types|Integrated MINFLUX tracking reveals two distinct chromatin dynamics classes across cell types]]
7 OOM에 걸친 MSD 측정
- 두 가지 dynamics class(constant α=0.3 vs. 시간에 따라 증가하는 α) 발견
- 아직 원리가 설명되지 않은 $\alpha = 0.3$의 강력한 subdiffusion

### [[Journal reading - Organization of fast and slow chromatin revealed by single-nucleosome dynamics|Organization of fast and slow chromatin revealed by single-nucleosome dynamics]]

## Questions & Insights

- $\alpha = 0.3$은 3D공간에서 최대로 packing한 fratal structure인 fractal globule model로도 설명이 안 된다. 그래서 내 생각에는 단순 정적 구조의 특성과 scaling theory로는 이 subdiffusion을 설명할 수 없을 것 같다. 

## Related Concepts

### 저널 리딩 노트 (chromatin dynamics 직접 관련)

- [[Journal reading - Static three-dimensional structures determine fast dynamics between distal loci pairs in interphase chromosomes]] — 정적 Hi-C 구조와 실측 dynamics 사이의 괴리, K-matrix normal mode 접근
- [[Journal reading - Polymer physics of nuclear organization and function]] — nuclear organization의 polymer physics 개관, MFPT 포함
- [[Journal reading - Anomalous Diffusion in Fractal Globules]] — fractal globule의 동적 성질(α ≈ 0.4)

### 배경 이론 / 구조 모델
- [[Physical properties of DNA]]
- [[Journal reading - Complexity of chromatin folding is captured by the strings and binders switch model]] — SBS model 원논문
- [[Journal reading - The fractal globule as a model of chromatin architecture in the cell]] — fractal globule 정적 구조 모델
- [[Journal reading - Polymer physics of chromosome large-scale 3D organisation]] — Hi-C와 polymer scaling 연결
- [[Polymer Models]] — polymer 모델 전반 개념 정리
- [[Contact probability exponent and polymer scaling]] — ν와 contact probability exponent 관계
- [[MSD exponent from scale-dependent Flory exponent]]

## References

- (필요시 사용자가 직접 추가)


