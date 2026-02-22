---
title: Journal reading - Size limits the sensitivity of kinetic schemes
authors: Jeremy A. Owen, Jordan M. Horowitz
DOI: "[DOI](https://doi.org/10.1038/s41467-023-36705-8)"
date: 2026-02-22
subject: nonequilibrium biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Size limits the sensitivity of kinetic schemes

## 이거 왜 읽었나?

[[Journal reading - Stochastic thermodynamics for biological functions]]
위 리뷰 논문의 레퍼런스라서 읽었다. 
세포의 sensitivity가 Markov chain의 topology와 관련있다는 내용이라고 하길래, 흥미로워 보였다. 

## Overview

Continuous time Markov chain (Markov jump process, kinetic scheme)에서 어떤 관측량의 감도(Hill coefficient)가 **perturbation의 support의 size m**에 의해 bound된다는 것을 증명한 논문. 

평형계에서 Hill coefficient ≤ 결합 자리 수 n이라는 사실을 비평형계로 일반화한다. 

또한 이 bound를 포화시키는 새로운 비평형 메커니즘인 **nested hysteresis**를 제안한다.

## Link to PDF and DOI

- DOI: [https://doi.org/10.1038/s41467-023-36705-8](https://doi.org/10.1038/s41467-023-36705-8)
- PDF: [[Size limits the sensitivity of kinetic schemes.pdf]]

## 주요 내용 요약

![[Pasted image 20260222215655.png]]
- 기본 모델로 continuous time [[MOCs/Markov Process|Markov Process]] 를 이 논문에서 사용한다. 

- 이 논문에서 다루는 **Markov state**이란, 
	ligand가 붙을 수 있는 효소나 DNA의 상태를 의미한다. 이것에 ligand가 붙은 양상, 효소의 어느 자리에 무슨 ligand가 붙었는지가 달라지면 상태가 달라지는 것이다. 

- 이 논문에서 다루는 **perturbation** 이란, 
	주로 ligand concentration을 의미한다. Ligand가 몇 개나 효소에 붙었는지에 따라 효소의 상태가 달라지고, ligand가 붙는 속도는 ligand concentration에 선형적으로 증가한다. 때문에 Markov chain의 transition rate는 ligand concentration에 따라 달라진다. 결과적으로 평형상태에서 특정 상태에 있을 확률은 ligand concentration이라는 perturebation에 의해 달라진다. 
	
![[Pasted image 20260222220822.png|위키피디아에서 따온 이미지]]
- **Hill coefficient** → 이 논문의 출발점. 
	일부 효소는 여러 개의 ligand binding site를 가지고 있다. ligand concentration이 증가할 때, 효소의 모든  ligand binding site가 차지되어 있을 확률은 시그모이드함수로 증가한다. 
	이 시그모이드 관계를 정량화하기 위해 Hill function을 사용한다:
	$$f(x) = \frac{x^H}{K^H + x^H}$$
	여기서 $x$는 ligand concentration, $K$는 effective dissociation constant, $H$는 **Hill coefficient**로 반응의 (로그) sensitivity를 정량화한다. $H$가 클수록 입출력 관계가 스위치처럼 날카로워진다. 열역학적 평형 상태에서 $H$는 동시에 결합 가능한 ligand의 최대 수 $n$을 초과할 수 없다는 것이 알려져 있다. 


- **Support bound** → **이 논문에서 제시하는 가장 핵심 개념**
	임의의 continuous time Markov chain에서, perturbation x의 support 크기 m이 로그 감도를 bound한다: |d log⟨A⟩/d log x| ≤ m

- 평형계: Hill coefficient ≤ n (결합 자리 수). 비평형계: Hill coefficient ≤ m (support 크기), m은 n보다 클 수 있음
- **응용 사례**: E. coli 편모 모터 스위치(비평형 MWC 모델), kinetic proofreading, 화학 농도 sensing
- **Nested hysteresis**: n개의 비순서 결합 자리가 있을 때, H_eff ≤ 2ⁿ−1의 지수적 감도를 달성하는 비평형 메커니즘

## Questions & Insights

- Q: 논문이 f(x) 대신 ⟨A⟩π/⟨B⟩π에 집중하는 이유는?
  A: f(x)는 너무 막연해서 bound 증명이 불가능. ⟨A⟩/⟨B⟩ 형태로 쓰면 Markov chain tree theorem에 의해 유리함수임이 보장되어 분자·분모의 최고차수 비교로 감도의 상한을 유도할 수 있음. 동시에 이 형태가 실험적 측정량 거의 전부를 포괄해 일반성도 잃지 않음.

- Q: A와 B가 임의적으로 정해질 수 있는데 부등식이 의미 있는가?
  A: m이 A와 B로부터 완전히 독립적으로 결정되기 때문에 가능. m은 시스템의 그래프 구조(어떤 상태가 x에 의존하는 탈출률을 갖는가)에서만 나오는 양. Markov chain tree theorem에서 spanning tree는 각 vertex마다 나가는 edge가 최대 하나이므로, x에 의존하는 전이율이 한 monomial에 들어갈 수 있는 횟수가 support 크기 m을 넘지 못함 → πk의 x에 대한 최고 차수가 m 이하 → 어떤 관측량을 고르든 감도가 m을 초과할 수 없음. A, B가 임의적이라는 점이 오히려 이 bound를 모든 측정량에 적용되는 보편적 구조적 한계로 만듦.

- Q: 편모 모터 MWC 모델에서 CW↔CCW 전환에 ligand가 직접 관여하지 않는데 어떻게 support에 포함되는가?
  A: Support는 "어떤 전환이 x에 의존하는가"가 아니라 "어떤 상태의 탈출률(exit rate)이 x에 의존하는가"로 정의됨. CW 상태들은 CW↔CCW 전환(검은 화살표, x 무관) 외에도 CheY-P 결합(빨간 화살표, x 의존) 경로가 있어서 전체 탈출률 = k_i[L] + (무관한 것들)이 되고, [L]이 오르면 탈출률이 바뀜 → support 포함. 유일하게 빠지는 상태는 fully bound state(결합 수 = n)로, 더 이상 결합이 일어나지 않아 x 의존 전이가 없기 때문. 따라서 m = 2n.

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 
