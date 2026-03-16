---
title: 📖 Statistical Physics for Biological Matter (Woo)
date: 2026-01-12
subject: statistical mechanics
tags:
  - study
  - concept
  - question
class: study_subject
---
# 책 공부
우리 랩의 바이블을 공부한다. 2주 정도 잡자. → 결국은 3주가 됐다. 
하루에 2개 chapter를 봐야 한다. 

# 파일 목록

[[Statistical Physics for Biological Matter_1 Introduction  Biological Systems and Physical Approaches.pdf]]

[[Statistical Physics for Biological Matter_2 Basic Concepts of Relevant Thermodynamics and Thermodynamic Variables.pdf]]

[[Statistical Physics for Biological Matter_3 Basic Methods of Equilibrium Statistical Mechanics.pdf]]

[[Statistical Physics for Biological Matter_4 Statistical Mechanics of Fluids and Solutions.pdf]]

[[Statistical Physics for Biological Matter_5 Coarse-Grained Description  Mesoscopic States, Effective Hamiltonian and Free Energy Functions.pdf]]

[[Statistical Physics for Biological Matter_6 Water and Biologically-Relevant Interactions.pdf]]

[[Statistical Physics for Biological Matter_7 Law of Chemical Forces  Transitions, Reactions, and Self-assemblies.pdf]]

[[Statistical Physics for Biological Matter_8 The Lattice and Ising Models.pdf]]

[[Statistical Physics for Biological Matter_9 Responses, Fluctuations, Correlations and Scatterings.pdf]]

[[Statistical Physics for Biological Matter_10 Mesoscopic Models of Polymers  Flexible Chains.pdf]]

[[Statistical Physics for Biological Matter_11 Mesoscopic Models of Polymers  Semi-flexible Chains and Polyelectrolytes.pdf]]

[[Statistical Physics for Biological Matter_12 Membranes and Elastic Surfaces.pdf]]

[[Statistical Physics for Biological Matter_13 Brownian Motions.pdf]]

[[Statistical Physics for Biological Matter_14 Stochastic Processes, Markov Chains and Master Equations.pdf]]

[[Statistical Physics for Biological Matter_15 Theory of Markov Processes and the Fokker-Planck Equations.pdf]]

[[Statistical Physics for Biological Matter_16 The Mean-First Passage Times and Barrier Crossing Rates.pdf]]

[[Statistical Physics for Biological Matter_17 Dynamic Linear Responses and Time Correlation Functions.pdf]]

[[Statistical Physics for Biological Matter_18 Noise-Induced Resonances  Stochastic Resonance, Resonant Activation, and Stochastic Ratchets.pdf]]

[[Statistical Physics for Biological Matter_19 Transport Phenomena and Fluid Dynamics.pdf]]

[[Statistical Physics for Biological Matter_20 Dynamics of Polymers and Membranes in Fluids.pdf]]

[[Statistical Physics for Biological Matter_21 Epilogue.pdf]]



## 공부하고 노트 쓸 내용

### 13 Brownian motion 
![[Pasted image 20260113140026.png]]
NP(r,t)가 무엇에 대한 notation인가?

![[Pasted image 20260113140116.png]]
Smoluchoski equation, 확산방정식에 확산뿐만 아니라 외력에 의한 convection 까지 포함된 방정식, 간단하게 개념 노트 만들기, 식 12, 13


Einstein relation 유도 방법

![[Pasted image 20260113140405.png]]
이런 꼴의 식을 log-log plot하면 뭐가 나오는가?

입자의 밀도와 전기 포텐셜을 비유하는 확산방정식과 정전기학의 푸아송 방정식 공유 비유 정리

![[Pasted image 20260113140654.png]]
Linear operator가 이렇게 간단히 상수처럼 취급되어 t에 대한 지수로 올라갈 수 있는 이유?
![[Pasted image 20260113142519.png]]
이런 논리를 통째로 이해하기
(white noise)상수 함수, 디락델타, 가우시안 분포의 함수 관계, 적분과 푸리에 변환을 이용하여

![[Pasted image 20260113142734.png]]
![[Pasted image 20260113142804.png]]
Langevin equation 개념 정리. 그저 ma 가 마찰력, 외력, 랜덤 노이즈의 합과 같을 뿐
underdamped Langevin EQ와 overdamped Langevin EQ의 차이 정리
Wiener process가 뭐였지? 노트 있을 거 같은데. overdamped Langevin EQ가 이거라고 한다. 

(라플라스 변환 복습) 어떤 미방이 라플라스변환으로 풀기 쉬운기? 식 64, 67

> It signifies the detailed balance between the random noise
fRðtÞ and the dissipative force fv to retain the thermal equilibrium in the long time;
if the strength of this thermal and equilibrium noise takes other values than
given by (13.75), the system will not attain the stationarity and will not arrive
at the equilibrium state in the long time.

왜 여기에서 detailed balance 이야기가 나오는 걸까?

> time? Because the displacement is linearly related to the
velocity, xðtÞ  x0 ¼
R t
0 ds vðsÞ, this is also distributed in Gaussian,

Gaussian distribution에 linearly related되었다면, 그것 또한 Gaussian이다? 이유는?


수학 연산에서 emsemble average 기호  <>을 밖으로 꺼낼 수 있는 조건에 대해 정리해 봐야 겠다. 적분, 미분, 곱, 합, exp function 
cumulant와 cumulant expansion에 대해
euqipartition theorem에 대해
Ornstein-Uhlenbeck process의 식과 그것의 의미

### 14 Markov chain and master equation

![[Pasted image 20260113150444.png]]
time correlation function은 power spectrum의 푸변이다. 유도 과정 노트로 정리하고 머리에 넣기. 혹시 이미 노트가 있나?


확산에서 시간과 공간의 Coarse graining을 겨울학교에서 배웠던 RG flow로 나타낼 수 있을까? 할 수 있다면 Theory space를 어떻게 나타내야 하나?


### 15 Fokker-Planck equation

다변수인 경우는 테전을 어떻게 하는가?
Hermitian인 것과 eigen value의 존재 사이 어떤 연관이 있는가?

### 10 Mesoscopic Models of Polymers: Flexible Chains

폴리머의 특성은 어떤 스케일에서 보는 지에 따라 완전 달라지는 것 같다. 
persistance length 보다 작은 단위, 같은 단위, 더 큰 단위로 측정할 때 어떤 변화가 생기는가?

![[Pasted image 20260119140901.png]]

### 20 the last chapter

랑방에서 어떻게 time correlation function을 구하는가?



# 연관 노트들

## Chapter 9 Responses, Fluctuations, Correlations and Scatterings

이 챕터는 자극과 그에 따른 시스템의 반응을 다룬다. 

자극이라는 것은 external field 아니면 힘이다. $f_i$라고 표기한다. 
이 챕터에서는 자극이 긴 시간동안 일정하게 주어졌을 때의 반응을 다룬다. 
static response라고 보아도 무방하겠다. 

자극과 반응을 다루려면 $f_i$와 시스템이 가지는 변수 중 무엇이 conjugate되었는지 보아야 한다. 
그것은 해밀토니안이 결정한다. 
conjugated microscopic variable을 $\mathcal{X}_i$라고 표기한다. 
외부 자극과 관련된 해밀토니안의 추가 항을 perturbation term이라고 부른다. 

$$\mathcal{H}' = -f_i \mathcal{X}_i$$

결국 macroscopic하게 관찰할 수 있는 건, 특정 힘이 주어진 앙상블 속에서 $\mathcal{X}_i$의 앙상블 평균이다. 우린 이걸 macroscopic displacement $X_i$라고 부른다. 

$$X_i = \langle \mathcal{X}_i \rangle$$

Response라 함은 힘이 없을 때보다 힘이 주어졌을 때 변수가 얼마나 변화했는가를 보는 것이다. 그래서 항상 힘이 없었을 때의 $\mathcal{X}_i$와 비교해야 한다. 
**힘이 주어지지 않은(unperturbed) 앙상블로 평균한 것**을 앞으로 $\langle \rangle_0$이라고 표기하면, 
**microscopic fluctuation**은 다음과 같다:

$$\Delta \mathcal{X}_i = \mathcal{X}_i - \langle \mathcal{X}_i \rangle_0$$

위 값은 microstate마다 달라지는 값이다. 
이를 앙상블 평균낸 **average change**가 바로 우리가 바라던 진정한 **response의 역할**을 할 것이다. 

$$\Delta X_i = \langle \Delta \mathcal{X}_i \rangle = \langle \mathcal{X}_i \rangle - \langle \mathcal{X}_i \rangle_0$$

자극과 반응이 있다면 관심이 가는 게 susceptibility이다. susceptibility는 자극이 조금씩 변화할 때 반응이 얼마나 달라지는지의 척도이다. 

$$\chi_i = \frac{\partial}{\partial f_i} \Delta X_i$$

"방금 이 챕터에서 다루는 것은 static response라고 말했는데, 자극의 강도가 변한다는 상황이라면 앞뒤가 안 맞는 것 아닌가?" 

라고 생각할 수 있다. 맞다. 이 상황은 자극의 강도가 아주아주 천천히 변화하여서 매 순간이 equilibrium에 도달해 있다고 가정하는 quasi-equilibrium state를 가정하고 있다. 빠른 시간 내에 자극이 달라지는 경우는 chapter 17에서 다룰 것이다. 

이 챕터의 핵심은 **Fluctuation-Response Theorem**이다:

$$\langle (\Delta \mathcal{X}_i)^2 \rangle_0 = k_B T \chi_i = k_BT \frac{\partial}{\partial f_i} \Delta X_i$$

즉, susceptibility가 자극이 없을 때 시스템의 자체적인 fluctuation으로 결정된다.


공식 유도, 자극이 온 시스템에 영향 끼치는 경우: 
[[Static Fluctuation-Response Theorem]]
자극이 local한 경우, susceptibility가 공간적인 경우: 
[[Static Fluctuation-Response Theorem for Continuous Fields]]

Fluctuation-Response Theorem과 거의 똑같은 공식을 가지지만, 
자극이 시간에 따라 주기적으로 변화하는 경우는
fluctuation-dissipation theorem(FDT)이라고 한다. 

## Chapter 10: Mesoscopic Models of Polymers - Flexible Chains

이 챕터에서는 ideal chain을 다룬다. 
이상기체에서는 기체 입자가 질량만 있고 부피가 없는 취급을 한 것 처럼, 
이상 사슬 또한 부피를 가지지 않는다. 
그저 서로 이어진 입자가 정해진 거리 segmental length만큼 떨어져 있고, 
위치한 각도는 correlation없이 독립적이게 무작위로 결정된다. 
각도에 제한이 없으므로 입자들은 서로 포개어질 수(혹은 아주 가까워질 수) 있다. 

ideal chain은 random walk의 궤적과 정확히 일치한다. 
random walk의 step size가 ideal chain의 segmental length(Kuhn length)에 대응되며, 
step number가 입자 수에 대응되고, 
출발 지점과 최종 도착 지점 사이 변위가 ideal chain의 end-to-end distance(EED)에 대응된다. 

persistance length가 무한히 작다고 하면 (혹은 coarse-graining으로 줌아웃해서 본다면)
ideal chain을 연속체로 볼 수 있다. 
그러면 입자 사이 사이가 무한한 입자 수의 ideal chain으로 연결되어 있다고 볼 수 있으며, 
입자가 서로 entropic spring constant로 연결된 효과가 나타난다. 

- [[Radius of Gyration of Gaussian Chain]]
- [[Generalized Central Limit Theorem Proof]]
- [[Gaussian Chain (Ideal Chain)]]
- [[Entropic Spring Constant]] 


## Chapter 17: Dynamic Linear Responses and Time Correlation Functions

- [[Onsager Regression Theorem]]

