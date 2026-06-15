---
title: Journal reading - The fractal globule as a model of chromatin architecture in the cell
authors: Leonid A. Mirny
DOI: "[DOI](https://doi.org/10.1007/s10577-010-9177-0)"
date read: 2026-05-29
date published: 2011-01-01
subject: biophysics, polymer physics, chromatin
tags:
  - study
  - concept
  - question
class: study_journal
---

# The fractal globule as a model of chromatin architecture in the cell

## Overview

세포 핵 안에 수 미터의 DNA가 어떻게 접혀 들어가는가? 이 논문은 **fractal globule(프랙탈 글로불)**이라는 고분자 상태를 소개하고, 이것이 인간 염색체의 구조 모델로서 어떻게 Hi-C 실험 데이터와 부합하는지를 설명한다. Fractal globule은 고분자 붕괴(collapse) 과정에서 위상학적 제약(topological constraint)에 의해 자연스럽게 형성되는 장수명 중간 상태로, equilibrium globule과 대비되는 독특한 스케일링 특성을 가진다.

핵심 주장: 인간 세포의 Hi-C 데이터에서 관찰된 $P_c(s) \sim s^{-1}$ 스케일링은 fractal globule 모델과만 일치하며, equilibrium globule, random loop model, swollen/ideal coil 등 다른 모델들은 모두 배제된다.

## Link to PDF and DOI

- DOI: [10.1007/s10577-010-9177-0](https://doi.org/10.1007/s10577-010-9177-0)
- PDF: [[The fractal globule as a model of chromatin architecture in the cell.pdf]]

## 주요 내용 요약

### 1. 크로마틴을 고분자로 모델링하기

크로마틴은 뉴클레오솜에 감긴 DNA의 fiber로, 균일한 지름·밀도·유연성을 가진 homopolymer로 1차 근사할 수 있다. 각 "bead"는 약 10–12개의 뉴클레오솜 (~2–2.5 kbp)에 해당하며, 직경 20–40 nm의 구로 모델링된다. 10 Mb 영역은 약 4,000–5,000개의 freely jointed segment로 표현된다.

### 2. 세 가지 고분자 상태와 스케일링

실험적으로 측정되는 두 가지 주요 물리량:
- $R(s)$: 유전체 거리 $s$ 만큼 떨어진 두 loci의 평균 공간 거리 (FISH로 측정)
- $P_c(s)$: 거리 $s$ 만큼 떨어진 두 loci가 공간 접촉할 확률 (Hi-C로 측정)

| 상태 | $R(s)$ 스케일링 | $P_c(s)$ 스케일링 |
|------|----------------|------------------|
| Random coil (ideal chain) | $s^{1/2}$ | $s^{-3/2}$ |
| Equilibrium globule | $s^{1/2}$ (소 $s$), plateau (대 $s$) | $s^{-3/2}$ (소 $s$), const (대 $s$) |
| **Fractal globule** | $s^{1/3}$ | $s^{-1}$ |

### 3. Fractal globule의 핵심 성질

**형성 메커니즘:** 위상학적 제약(사슬이 자기 자신을 통과할 수 없음) 하에서 고분자가 붕괴할 때 자연스럽게 형성된다. 모든 크기의 crumple(구겨진 덩어리)이 계층적으로 쌓인 자기유사(self-similar) 구조.

$$
R(N) \sim N^{1/3}, \quad R(s) \sim s^{1/3}
$$

$$
P_c(s) \sim s^{-1}
$$

**무매듭(unentangled):** Equilibrium globule은 고도로 매듭지어 있는 반면, fractal globule은 열린 상태의 위상을 유지한다. 이 덕분에 어떤 영역도 빠르게 펼쳐(unfold)질 수 있다.

**영역 분리(territorial organization):** 연속된 유전체 영역이 공간적으로 별개의 영역을 차지한다. 이는 모든 스케일에서 나타나는 "genomic territory"에 해당한다.

**광범위한 상호작용(crosstalk):** 영역 분리에도 불구하고, 크기 $s$인 crumple이 나머지와 갖는 상호작용 수는 표면적이 아닌 **부피**에 비례한다:

$$
M(s) \sim s \sim R^3(s) \sim V(s)
$$

두 crumple(크기 $s_1$, $s_2$, 사슬 거리 $l$로 분리)의 상호작용 수:

$$
M_{1,2}(l) \sim \frac{s_1 s_2}{l} \sim \frac{V_1 V_2}{l}
$$

**장수명 중간 상태:** Equilibrium globule로 가는 느린 과정의 중간 상태. 평형화 시간이 ~$N^3$으로 매우 길다. Rosa & Everaers의 추정에 따르면 실제 염색체 fiber가 평형화되는 데 500년 이상이 걸린다.

### 4. Hi-C 데이터와의 비교

Lieberman-Aiden et al. (2009)의 Hi-C 실험에서:

$$
P_c^{\text{exp}}(s) \sim s^{\alpha}, \quad \alpha \approx -1
$$

이 스케일링이 0.5 Mb ~ 6 Mb 범위에서 성립함. Fractal globule만이 (a) $P_c(s) \sim s^{-1}$ 스케일링과 (b) 큰 $s$에서 plateau 부재를 동시에 설명한다.

$s^{-1}$ 스케일링의 직관적 의미: 두 배 멀리 떨어진 loci는 두 배 덜 상호작용한다. 또한 특징적인 루프 길이가 없다 — 모든 길이의 루프가 존재하며 평균이 정의되지 않는다.

### 5. 생물학적 함의

- **유전자 활성화:** 무매듭 구조 덕에 crosslinking 단백질/RNA를 제거하면 즉각적인 대규모 디컨덴세이션이 가능 → 전사 기계의 접근성 확보
- **염색체 영역(chromosomal territories):** 위상학적 제약이 염색체 간 분리를 자연스럽게 유발
- **암과의 연관:** 체세포 copy-number alteration 빈도 $f(s) \sim s^{-1}$이 $P_c(s) \sim s^{-1}$과 동일한 스케일링을 가짐 → 공간 접촉이 재조합/수선 이벤트의 빈도를 결정한다는 가설

### 6. Fractal globule의 안정성

- Topoisomerase II (topo II)가 strand passing을 허용하면 fractal globule이 빠르게 평형 globule로 전환됨
- 가역적 crosslinking은 평형화를 유의미하게 늦춤
- Fractal globule은 세포 분열 주기 동안(~10–15 h) 유지되다가 유사분열 시 리셋됨

## Questions & Insights

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

## 더 읽어보고 싶은 레퍼런스

- Lieberman-Aiden et al. (2009) — Hi-C 실험 원본: Comprehensive mapping of long-range interactions reveals folding principles of the human genome. *Science* 326, 289–293.
- Rosa & Everaers (2008) — $R(s) \sim s^{1/3}$ 스케일링의 시뮬레이션 확인: Structure and dynamics of interphase chromosomes. *PLoS Comput Biol* 4, e1000153.
- Grosberg et al. (1988) — Fractal (crumpled) globule 최초 제안: The role of topological constraints in the kinetics of collapse of macromolecules. *J Phys* 49, 2095–2100.
