---
title: Memory association and Hopfileld model -2
date: 2025-05-07
subject:
  - biology
tags:
  - study
  - lecture_note
class: study_lecture
---

#periperal #biology #study #neuroscience 
subjects: [[Neuronal dynamics]]
# 수업 들으면서 필기한 raw data

홉필드 모델의 한계: 실제 뇌의 발화 비율을 반영하지 않음. 뇌는 on-off 만으로 상태를 대변하지 않음. fully connected state는 뇌에서 자주 보이지 않음. 뉴런의 interaction은 자기 스핀처럼 symetric하지 않음(양 방향의 영향이 공평하지 않음)

멘허튼 거리가 뭐지

wij: 각 위치에서 prototype과 유사도를 미리 계산한 것 
prototype간의 orthogonality: 두개가 겹치는 게 없으면 내적값이 0 되지 않ㅇ르까?

Hopfield model: 스핀 상태가 energy gradient를 따라 가다 보면 하나의 prototype으로 도착. 

## Hopfield model에 stochastic function을 넣자. (Montecarlo simulation)
원래는 뉴런의 발화 상태를 step fuction으로 나타내었었다. 
자료에는 g라고 되어 있다. 하이버볼릭 탄젠트 함수를 사용한다. 
energy lande scape에 따라 움직이는데, 이때 thermal fructuation의 영향이 g함수의 형태로 결정. g함수가 step이면 낮은 온도, 유연할 수록 높은 온도이다. 

https://neuronaldynamics.epfl.ch/online/Ch17.S2.html


0xc0000183


나중에 시뮬레이션할 때

Need to downgrade matplotlib
=>
/# pip3 install matplotlib==3.5.1
Then it’s working…

