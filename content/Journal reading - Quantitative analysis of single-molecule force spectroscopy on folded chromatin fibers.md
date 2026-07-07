---
title: Journal reading - Quantitative analysis of single-molecule force spectroscopy on folded chromatin fibers
authors: He Meng, Kurt Andresen, John van Noort
DOI: "[DOI](https://doi.org/10.1093/nar/gkv215)"
date read: "2026-06-24"
date published: "2015-03-16"
subject: biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Quantitative analysis of single-molecule force spectroscopy on folded chromatin fibers

## Overview

Magnetic tweezers로 단일 chromatin fiber를 0.5–25 pN 범위에서 늘리면서 얻은 force-extension curve를 분석한 논문. 핵심은 nucleosome 하나하나를 4가지 conformation (fiber-embedded → single wrap → extended → fully unwrapped)으로 나누고, 각 conformation의 자유에너지와 extension을 statistical mechanics 모델로 동시에 fitting한 것. 기존에 보고되지 않았던 새로운 metastable "extended" conformation (3–7 pN 영역)을 발견해서, 이 conformation을 넣어야만 high-force step size (24 nm)와 구조적으로 예상되는 step size (30 nm, 89 bp 한 바퀴)의 불일치를 설명할 수 있음을 보임. 197-bp NRL fiber와 167-bp NRL fiber가 서로 다른 folding topology(아마 solenoid vs zig-zag)를 가진다는 것도 force-extension의 정성적 차이로부터 추론.

## Link to PDF and DOI

- DOI: [10.1093/nar/gkv215](https://doi.org/10.1093/nar/gkv215)
- 로컬 PDF: [[Nucleic Acids Research_Meng et al_van Noort_Quantitative analysis of single-molecule force spectroscopy on folded chromatin.pdf]]

## 주요 내용 요약



- **실험 시스템**: Widom 601 positioning sequence를 가진 두 종류의 array (15×197 bp NRL, 30×167 bp NRL)를 chicken erythrocyte histone octamer로 reconstitution. Magnetic tweezers (force clamp 방식)로 0.1 mm/s 속도로 force-extension curve를 측정. 단일 mononucleosome도 동일 조건에서 비교 측정.

- **4-state statistical mechanics 모델**: 각 nucleosome을 4개의 conformation 중 하나로 가정.
  1. **Fiber** (folded, 다른 nucleosome과 상호작용): Hookean spring으로 근사, $z_\text{fiber}(f) = f/k + z_0$
  2. **Single wrap** (한 바퀴만 감긴 상태, $L_\text{wrap}=89$ bp 풀림): extensible WLC로 기술, free energy 변화 $\Delta G_1$
  3. **Extended** (이 논문에서 새로 제안한 metastable state): single wrap과 동일한 WLC contour length지만 추가 extension $z_\text{ext}$와 추가 free energy $\Delta G_2 - fz_\text{ext}$를 가짐
  4. **Unwrapped** (완전히 풀림, histone은 여전히 결합): bare DNA WLC와 동일한 거동, 추가 free energy $\Delta G_3$ (단, 이 transition은 hysteresis 때문에 equilibrium fitting 대상에서 제외)

- **전체 tether의 extension/free energy**는 각 conformation population에 대한 합으로 표현되고, 동일한 extension을 갖는 microstate들의 degeneracy를 binomial factor로 처리한 뒤 Boltzmann-weighted ensemble average로 force-extension curve를 계산 (Eq. 8).

- **핵심 발견 1 — 새로운 extended conformation**: high-force unwrapping의 실측 step size (24 ± 7 nm)가 구조적으로 예상되는 89 bp 한 바퀴 풀림 (~30 nm)보다 작음. 이 차이를 메우기 위해 single wrap과 fully unwrapped 사이에 $z_\text{ext} \approx 4.6$ nm, $\Delta G_2 \approx 4$–5 $k_BT$의 추가 conformation을 도입해야만 데이터가 모델과 일치. 저자들은 이 conformation이 H2A/H2B dimer의 histone core로부터의 dissociation과 관련 있을 것으로 추정 (FRET 연구와의 정합성 근거).

- **핵심 발견 2 — fiber 안에서 nucleosome이 더 안정함**: mononucleosome의 첫 transition 자유에너지 $\Delta G_1^\text{nuc} \approx 8.8\ k_BT$ 대비, fiber에 embedding된 nucleosome은 $\Delta G_1^\text{fiber} \approx 19$–21 $k_BT$로 약 2배 이상 높음. 즉 nucleosome-nucleosome 상호작용이 DNA wrapping을 ~10 $k_BT$만큼 추가로 안정화시킴.

- **핵심 발견 3 — compositional heterogeneity 처리**: 동일 batch 내에서도 fiber 간 low-force 영역 변동이 큼. 이를 설명하기 위해 $n_\text{fiber}$ (folded fiber를 형성하는 nucleosome 수)와 $n_\text{unfolded}$ (tetrasome으로 추정되는, fiber를 형성하지 않고 high-force unwrapping만 겪는 입자 수)를 분리해서 fitting. $n_\text{tot} = n_\text{fiber} + n_\text{unfolded}$.

- **핵심 발견 4 — NRL에 따른 topology 차이**: 197 NRL fiber는 첫 번째 transition에서 **degenerate states** 모델이 잘 맞음 (모든 nucleosome이 동등 — 단일 stack 구조와 부합, solenoid 추정). 167 NRL fiber는 **non-degenerate** 모델(첫 transition의 degeneracy를 제거)이 더 잘 맞음 — fiber 끝 부분 nucleosome이 중간 nucleosome보다 덜 안정적인 zig-zag 구조와 부합. 두 구조 모두 $\Delta G_1^\text{fiber}$ 값은 비슷하지만 stiffness $k$는 167 NRL이 197 NRL보다 약 3배 큼 (0.6 vs 0.22 pN/nm).

- **방법론적 포인트**: high-force unwrapping (last transition)은 hysteresis가 있어 equilibrium 가정이 깨짐 → Eq. 8 fitting 대상에서 제외하고 대신 측정된 extension을 각 state의 예측 extension에 직접 매칭하는 방식으로 처리. Low-force transition들은 pull/release curve가 겹쳐서 (6 pN 이하) reversible & equilibrium으로 간주 가능.

#### Figure 1
![[Pasted image 20260624130115.png]]
#### Figure 2
![[Pasted image 20260624130134.png]]
#### Figure 3
![[Pasted image 20260624130147.png]]

#### Figure 4
![[Pasted image 20260624130158.png]]

#### Figure 5
![[Pasted image 20260624130239.png]]




## Deep Dive

### Free energy 공식을 세우는 과정

이 논문의 free energy 구성은 **"WLC 스트레칭 에너지 + 화학적 전이 자유에너지"**를 단계적으로 쌓아 올리는 방식이다.

1. **DNA의 force-extension 관계 (extensible WLC)**
$$
z_\text{DNA}(f, L) = L\left(1 - \frac{1}{2}\sqrt{\frac{k_BT}{fA}} + \frac{f}{S}\right)
$$
$L$: contour length, $A$: persistence length, $S$: stretch modulus.

2. **Free energy는 extension의 적분(work)으로 정의됨**
열역학적 관계 $z = -\partial G/\partial f$를 적분하면:
$$
G_\text{DNA}(f, L) = -\int_0^f z_\text{DNA}(\tilde f, L)\, d\tilde f
$$
이는 "이 force까지 당기는 데 필요한 일(work)의 음수"라는 표준적인 정의이다.

3. **각 conformation마다 "기본 스트레칭 자유에너지 + 화학적 전이 자유에너지"를 더함**
   - Single wrap: $G_\text{DNA}(f, L_i) + \Delta G_1$ — 한 바퀴를 풀기 위한 화학적 비용 $\Delta G_1$ 추가
   - Extended: $G_\text{DNA}(f, L_i) + \Delta G_1 + \Delta G_2 - fz_\text{ext}$ — $-fz_\text{ext}$ 항은 추가 길이 $z_\text{ext}$만큼 늘어나며 force가 해주는 일을 자유에너지에서 빼주는 Legendre-transform 성격의 항
   - Fiber: Hookean spring이므로 $G_\text{fiber}(f) = -f^2/2k - fz_0$

4. **전체 tether는 nucleosome 독립성 가정 하에 단순 합산**
$$
G_\text{tot}(f) = \sum_i n_i G_i(f) + G_\text{DNA}(f, L)
$$

5. **Degeneracy를 곱해 partition function 구성, Boltzmann 가중 평균으로 force-extension curve 계산**
$$
\langle z_\text{tot}(f)\rangle = \frac{\sum_\text{states} z_\text{tot}(f)\, D(\text{state})\, e^{-G_\text{tot}(f)/k_BT}}{\sum_\text{states} D(\text{state})\, e^{-G_\text{tot}(f)/k_BT}}
$$
이는 force-ensemble(isotension ensemble) 통계역학의 표준적인 적용이다.

### 새로운 Extended Intermediate State를 정당화하는 근거

저자들의 논증은 하나의 결정적 증거가 아니라, **여러 독립적인 데이터 라인이 동시에 같은 결론을 가리키는 누적적 논증** 구조를 따른다.

1. **Step size mismatch (직접적 동기)**: 측정된 high-force step size는 24 ± 7 nm인데, 구조적으로 예상되는 89 bp 전체 풀림은 ~30 nm여야 함. 이 차이(~6 nm)가 측정 오차(2 nm)보다 훨씬 커서, 빠진 conformation이 있다는 신호.

2. **고force 영역에서 모델 fit의 직접적 개선**: $z_\text{ext}=4.6$ nm인 extended state를 넣었을 때만 high-force 영역의 모든 step이 모델 곡선과 정확히 일치 (Figure 3A). 빼면 데이터가 점진적으로 모델에서 벗어남.

3. **저force 영역에서 독립적으로 동일한 결론**: 3.5 pN 근처의 force plateau도 단일 transition으로는 fitting 불가능하고, 반드시 두 단계 transition(fiber→single wrap, single wrap→extended)을 넣어야 데이터 재현 (Figure 3C, 3D). high-force 분석과 완전히 독립적인 데이터셋에서 같은 결론에 도달.

4. **Mononucleosome과의 일관성**: 단일 nucleosome 데이터에서도 같은 extended state ($z_\text{ext}=5.3$ nm)를 도입해야 fit이 개선됨 — fiber에서만 나타나는 인공적 현상이 아니라 nucleosome 자체의 본질적 성질임을 시사.

5. **가역성(reversibility) 패턴과의 정합성**: 이 transition은 force를 낮추면 reversible — histone이 완전히 떨어지지 않는다는 뜻. H2A/H2B dimer 해리(octamer 골격은 유지) 해석과 일치하며, single-molecule FRET에서 보고된 dimer/tetramer interface 거동과도 부합.

## Questions & Insights

- Q: SBS 모델(사용자의 메인 프로젝트)과 이 force-spectroscopy 모델은 어떤 관계인가?
  A: 직접적인 연결은 없음. SBS는 polymer 수준의 coarse-grained binder-mediated folding(긴 scale, 통계적 conformation 분포)을 다루고, 이 논문은 nucleosome 단위의 mechanical/thermodynamic state transition(짧은 scale, force-driven 개별 입자 동역학)을 다룸. 다만 "여러 metastable conformation 사이의 자유에너지 landscape" 라는 통계역학적 프레이밍 자체는 SBS의 binder-mediated phase transition과 유비될 수 있는 개념적 공통점이 있음 — 둘 다 coarse-grained free energy landscape 위에서의 state 전이를 다룬다는 점에서.

- Q: "Array of DNA", "Debye screening length", "DNA deflection length"가 정확히 무슨 의미인가?
  A: Array는 Widom 601 positioning sequence가 일정 간격(NRL)으로 반복된 DNA 기질을 가리키는 표현으로, "chromatin fiber"와 거의 같은 의미로 쓰임. Debye screening length는 전해질 용액에서 정전기적 전하가 screening되어 효과가 감쇠하는 거리 스케일($\lambda_D \sim \sqrt{\varepsilon k_BT/(2N_Ae^2I)}$, salt 농도에 반비례). DNA deflection length는 구부러진 semiflexible polymer가 열적 변동을 지나 다시 매끈한 곡선처럼 행동하기 시작하는 거리(Odijk 1993 개념, $\ell_d \sim (AR^2)^{1/3}$ 형태의 scaling). 이 논문에서는 이 두 길이가 "nucleosome 사이 거리가 첫 transition 이후 이 기준들을 넘어서면 nucleosome들이 서로 독립적으로 거동한다"는 가정을 정당화하는 데 쓰임.

- Q: 위 문장에서 histone tail length가 왜 함께 사정거리 기준으로 쓰이는가?
  A: Nucleosome-nucleosome 상호작용은 한 가지 메커니즘이 아니라 최소 세 가지 독립적 채널로 일어남 — (1) histone tail(특히 H4)이 옆 nucleosome의 acidic patch에 직접 접촉하는 분자적 채널, (2) DNA 표면 전하 간 정전기적 채널(Debye length가 사정거리), (3) linker DNA의 구부러짐이 거는 기계적 제약 채널(deflection length가 사정거리). "nucleosome들이 상호작용하지 않는다"는 결론을 내리려면 이 세 채널이 모두 동시에 끊어져야 하므로, 직접 접촉 채널의 사정거리인 histone tail의 물리적 길이도 별도로 명시해야 함. 세 길이는 하나의 통합된 길이가 아니라, 상호작용 종류가 다른 만큼 독립적으로 점검해야 하는 세 개의 서로 다른 기준임.

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

- [[Magnetic Tweezers]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- Kulić & Schiessel (2004), "DNA Spools under Tension", Phys. Rev. Lett. 92, 228101 — single nucleosome의 spool model, $\Delta G_1^\text{nuc}$ 비교 기준
- Schalch et al. (2005), Nature 436, 138 — tetranucleosome crystal structure, zig-zag folding의 구조적 근거
- Collepardo-Guevara & Schlick (2014), PNAS 111, 8061 — NRL에 따른 chromatin fiber polymorphism, coarse-grained 시뮬레이션 (SBS와의 비교 관점에서 흥미로움)
