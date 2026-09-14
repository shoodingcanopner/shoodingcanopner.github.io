---
title: 📑 Journal reading - Predictability can be dynamically constructed in deterministic systems"
authors: Lars Koopmans, Elinor M. Kay, Hyun Youk
DOI: "[DOI](https://doi.org/10.1038/s41467-026-77737-0)"
date read: "2026-09-13"
date published: "2026-09-11"
subject: statistical physics, complex systems, self-organization
tags:
  - study
  - concept
  - question
class: study_journal
---

# Predictability can be dynamically constructed in deterministic systems

## Overview

Nature Communications 게재 논문 (Koopmans, Kay, Youk, 2026). Secrete-and-sense 세포 간 상호작용을 모사한 generalized deterministic cellular automaton을 이용해, "완전히 결정론적이고 chaos가 없는 시스템"에서도 macroscopic fate가 initial configuration으로부터 예측 불가능할 수 있음을 보인 연구. 그 이유는 fate를 legible하게 만드는 predictive structure(vortex, non-contractible loop string, winding field)가 초기에는 부재하고, 동역학이 진행되면서 self-organize되어 나타나기 때문이라는 주장.

## Link to PDF and DOI

- DOI: https://doi.org/10.1038/s41467-026-77737-0
- PDF: [[Predictability can be dynamically constructed in deterministic systems.pdf]]

## 주요 내용 요약

- Triangular lattice 위 secrete-and-sense 세포들이 4개의 discrete state 중 하나를 가지며, 매 timestep마다 synchronous하게 업데이트되는 generalized cellular automaton.
![[Pasted image 20260914064550.png]]
![[Pasted image 20260914064653.png]]
![[Pasted image 20260914064715.png]]


- 동일한 update rule/parameter라도 initial configuration에 따라 static configuration, rectilinear wave, spiral wave 세 가지 fate 중 하나로 수렴.

![[Pasted image 20260914064841.png]]
![[Pasted image 20260914064856.png]]
![[Pasted image 20260914064940.png]]

- Logistic regression부터 CNN, transformer, HMM까지 다양한 machine-learning model이 initial configuration만으로는 fate를 chance level(~50%, binary task) 이상으로 예측하지 못함.
![[Pasted image 20260914065107.png]]


- Cell state를 phase vector로 recoding하면 discrete vortex(+1, -1, 0)가 자발적으로 나타남. +1과 -1 vortex는 항상 쌍으로 생성·소멸하며(topological charge conservation), periodic boundary condition(torus topology)이 이 pairing을 강제.
![[Pasted image 20260914065229.png]]
![[Pasted image 20260914065317.png]]

![[Pasted image 20260914065340.png]]


- Vortex는 Brownian particle처럼 행동하며(무작위 diffusion 후 접촉 시 annihilation), 이 minimal model만으로 cellular automaton의 vortex 개수 감소 패턴과 종료 시점을 잘 재현.
![[Pasted image 20260914065402.png]]
![[Pasted image 20260914065412.png]]
![[Pasted image 20260914065443.png]]

- 최초에 vortex들은 어떻게 생기는가?
local π mismatches act as seeds for vortex formation.
![[Pasted image 20260914070410.png]]

- 왜 전하량이 보존되는가?
periodic boundary condition, torus topology 때문이다. 
![[Pasted image 20260914070522.png]]

- String이라는 것이 존재한다. 
starting froma + 1 vortex core, one can reach a −1 vortex core by following a path composed entirely of cells in the same state
![[Pasted image 20260914071414.png]]
Across all lattice sizes examined, the final vortex pair was always connected by exactly four strings
![[Pasted image 20260914071551.png]]



- Non-contractible loop(NCL) string: vortex 쌍을 잇는 same-state cell string이 torus를 완전히 감아 도는 경우. 마지막 vortex 쌍이 남았을 때 NCL string의 개수와 추세(slope)를 보면 static/rectilinear wave로의 수렴(비-spiral fate)은 forward-time으로 예측 가능하지만, spiral wave 형성은 예측 불가.
![[Pasted image 20260914071749.png]]
하지만 spiral wave 형성 자체에 대해서는 이런 조기 예고 신호가 전혀 없다


- Winding field: NCL 개념을 일반화한 것으로, 각 cell이 속한 same-state connected region이 torus를 몇 번 감는지를 나타내는 vector field. 이 field 하나만 CNN에 넣어도 전체 lattice configuration을 넣었을 때와 거의 동일한 predictive accuracy 달성 — 즉 predictive signal의 대부분을 이 topological field가 담고 있음.
![[Pasted image 20260914121508.png]]

- Winding field는 초기 configuration에는 거의 존재하지 않다가(거의 모든 cell이 winding=0), vortex 생성과 같은 시점(~초반 1%)에 나타나기 시작해서 점차 확장됨. Static/rectilinear wave로 가는 trajectory는 vortex 소멸과 함께 winding field가 lattice 전체로 급격히 확장되는 반면, spiral wave trajectory는 서서히만 확장되어 끝까지 lattice의 ~60%만 덮음.
![[Pasted image 20260914121529.png]]
- 결론: 시스템이 완전히 deterministic해도(state space가 finite하고 fate가 초기 configuration에 의해 유일하게 결정되어도), 그 fate를 "practically" 예측 가능하게 만드는 구조(topological entity)는 초기에 부재하며 동역학을 통해 dynamically construct된다 — determinism과 practical predictability 사이의 gap을 명시적으로 보여준 사례.

## Questions & Insights

- Question or insight 1
- Question or insight 2

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

- [[Link to related concept 1]]
- [[Link to related concept 2]]

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

- Source 1
- Source 2
