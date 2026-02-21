---
title: Cortical field model
date: 2025-05-16
subject:
  - biology
tags:
  - study
  - lecture_note
class: study_lecture
---

# Cortical Field Model

## 수업 필기

### introduction
뇌는 연속적인 것과 discreate한 것을 처리하는 방법이 다르다. 
시각적인 것도, 방향적인 것도. 
place cell이 뭐죠???
이런 처리는 뇌의 피질 cortex에서 담당한다. 

### mean-field model
이거 통계 물리에서 본 적이 있어!!
하나의 뉴런이 모든 뉴런과 연결되어 있다면, 모든 뉴런의 영향(input or state)을 평균내어서 고려할 수 있다. 즉, mean-field는 full connected일 때 확실하게 사용할 수 있다. 
혹은 연결이 random해도 대략적으로 mean-field를 사용할 수 있다. 왜냐면 랜덤이니까.
mean-field는 연결 사이 강도가 모두 똑같다고(가중치가 같다고) 가정한다. 

![[Pasted image 20250516104544.png]]
이렇게 개별 연결에 대한 index가 사라지고, 모든 뉴런의 상태를 적분하는 term이 들어갔다. 

이렇게 mean-field model을 사용하면, 
single-neuron rate = population rate
그래서 starionary state에서는 population rate가 변하지 않는다. 

### transient state

- spike response model (SRM)


- Generalized-integrate-and-fire model 
앞서 배웠던 신경 하나의 firing을 계산할 때 적응, 노이즈 등 오만 걸 다 고려한 적분 모델. 그것의 input이 mean-field인. 


갑자기 firing rate가 높아지는 순간이 있다. 

ppt에서 보이는 A(t)가 뭐하는 함수이지?


### cortex
시각적 방향 인식경향이 같은 뉴런들이 피질에서 공간적으로 밀집해 있다. 

multiple population을 모아 continum으로 만들자. summation을 integration으로 만들자. 

왜..distance dependant coupling이 일어나는 거지? Maxican hat


### solution types

boundary condition을 periodig하게. 시작과 끝이 연결되어 잌ㅅ다고 가정. 

첫 번째 해는 firing이 uniform하게

두 번째 해는 특정 지점의 뉴런의 firing이 높게 -> bump solution
다음에 parameter에 따라 bump의 위치가 바뀌는 걸 보다고 함

#### edge enhancement가 뭐지?
사각형 사이 검은 점이 edge enhancement라고 한다. 
Mach band는 continum modle에서 Maxican hat으로 설명할 수 있다. 

head direction cell

쥐가 특정 위치에 있을 때만 발화하는 뉴런이 있다. 
머리의 위치가 특정 방향에 있을 때 발화하는 뉴런이 있다. 

## References

- Source 1
- Source 2

## Notes from Claude

Claude's explanations and insights on this topic:

