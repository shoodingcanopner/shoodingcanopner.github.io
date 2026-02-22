---
title: Journal reading - Shortcuts in Stochastic Systems and Control of Biophysical Processes
authors: Efe Ilker, Özenç Güngör, Benjamin Kuznets-Speck, Joshua Chiel, Sebastian Deffner, Michael Hinczewski
DOI: "[10.1103/PhysRevX.12.021048](https://doi.org/10.1103/PhysRevX.12.021048)"
date: 2026-01-20
subject: non-equilibrium thermodynamics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Shortcuts in Stochastic Systems and Control of Biophysical Processes

## Overview

Discrete state Markov process와 graph theory를 이용. 
각 state의 probability distribution의 시간 변화가 정해진 시나리오대로(target trajectory, 시간에 따른 probability distribition의 변화) 변화하기 위한 transition rate function을 구하는 방법을 제시했다. 

생물은 효율적으로 probability distribution을 변화하는 쪽으로 transition rate를 control parameter를 이용해 변화시키고 있다는 주장을 하고 싶어 한다. 

이 논문은 양자 시스템 제어에서 개발된 counterdiabatic (CD) driving을 생물학적 과정에 적용하는 방법을 다룬다. 이산 상태 연속 시간 마르코프 네트워크에서 CD driving을 위한 실용적인 그래프 이론 프레임워크를 개발했다.

## Link to PDF and DOI

- DOI: [10.1103/PhysRevX.12.021048](https://doi.org/10.1103/PhysRevX.12.021048)
- PDF: [[Shortcuts in Stochastic Systems and Control of Biophysical Processes.pdf]]

# 주요 내용 요약
## 논문 전체 스토리 요약

### 논문의 핵심 성취

**Discrete-state Markov model에서 유한 시간(finite time) 내에** 시스템 상태의 확률 분포를 원하는 궤적을 따라 변화시키는 transition rate를 어떻게 컨트롤할지, 해를 구하는 **graphical method**를 제시했다.


### 논문 읽기의 기본, 어떤 배경을 깔고 있는가?
![[Pasted image 20260209125800.png]]

이 논문에서 state라고 함은 주로 어떤 분자(단백질)이 어떤 상태에 있는지를 나타낸다. 
예를 들어 샤페론이 잘못 접힌 단백질을 교정해 주는 경우를 생각하고 있다면, 네 가지 상태를 생각할 수 있다. 잘못 접혀가는 그 단백질에 카메라를 추적해서 관찰하고 있다고 생각하자. 

1. misfolded: 단백질이 잘못 접힌 상태
2. misfolded + chaperone: 잘못 접힌 단백질이 샤페론과 결합한 상태
3. intermediate: 단백질이 접혀가는 상태
4. native: 단백질이 잘 접힌 상태

한 단백질은 이 네 가지 상태 중 하나에 있을 것이며, 다른 상태로 전환될 수도 있다. 
전환 방향과 속도는 chemical rate($k$) 가 결정할 것이다. 

이 하나의 단백질 뿐만 아니라, 동일한 종류의 여러 단백질의 상태를 시간에 따라 기록하면 어떨까?
그러면 한 가지 상태에 단백질이 위치할 '확률'이 시간에 따라 변화하는 것을 볼 수 있을 것이다. 
이 시간에 따른 확률 분포의 변화를 궤적(trajectory)라고 부르겠다. 

생명체는 살아있기 위해 이 궤적을 임의로 조절해야 한다. 

갑자기 세포가 뜨거운 물에 담구어 졌다. 단백질은 온도가 높아지면 잘못 접히기 쉬워지므로, 순간적으로 상태 1(misfolded state)에 있을 확률이 높아졌다. 이대로 잘못 접힌 단백질을 방치해 두었다간 세포는 죽을 것이다. 때문에 적절히 반응해서 **빠른 시간 내로** 상태 1(misfolded state) 의 확률을 낮추어야 한다. 

![[Pasted image 20260209130317.png]]
위 그림과 같은 궤적을 원한다는 것이다. 파란 선이 상태 1의 확률이다. 시간이 지남에 따라 확 낮아지는 것을 알 수 있다. 

이렇게 상태의 확률을 다르게 만드려면 무엇을 해야 할까?
transition rate를 시간에 따라 변화 시켜야 한다. 
transition rate는 보통 어떤 화학 물질의 농도로 결정된다. 예를 들어 misfolded state 에서 misfolded protein + chaperone state로 가는 rate는 chaperone 농도에 의해서 결정된다. 
따라서 생물은 시스템이 적절한 확률 궤적을 따라가도록 제어하기 위해 transition rate를 제어하는 parameter를 시간에 따라 다르게 변화시킨다. 

이 이야기의 질문은 이렇게 귀결된다. 
'시스템의 상태가 특정 시간 궤적을 따라가도록 제어하려면 transition rate control parameter가 시간에 따라 어떻게 변화해야 하는가?'
'만들 수 있는 trajectory 변화 속도의 한계는 무엇인가? 제어할 수 있는 한도 내에서 얼마나 빠르게 확률 변화를 이끌 수 있는가?'


### 네 가지 핵심 요소와 notation

1. **Control parameter $\lambda_t$**: Transition rate를 변화시키는 외부 조작 변수 (예: 샤페론 농도, 온도, ATP 농도). 시간에 따라 변함.

2. **Transition rate $\Omega_{ij}(\lambda_t)$**: Control parameter의 함수로, 상태 $j$에서 $i$로의 전이 속도를 결정.

3. **Transition current $J_\alpha(t)$**: 확률과 transition rate로 결정되는 각 edge를 따라 흐르는 확률적 flow. $J_{ij}(t) = \Omega_{ij}(\lambda_t) p_j(t) - \Omega_{ji}(\lambda_t) p_i(t)$

4. **Target trajectories $\rho(\lambda_t)$**: 시간에 따라 도달하고자 하는 확률 분포 궤적. Instantaneous stationary distribution.



### 역문제 (Inverse Problem)

**목표:** Target trajectories $\rho(\lambda_t)$에 일치하게 각 상태의 확률이 시간에 따라 변화하도록 만드는 control parameter $\lambda_t$를 찾기.

**Master equation의 역방향 풀이:**
이런 Discrete-state Markov model은 다음 master equation을 따른다. 

$$ \boxed{\partial_t \boldsymbol{p}(t) = \boldsymbol{\Omega}(\lambda_t)\boldsymbol{p}(t)}$$

보통 이 방정식을 풀 때는 transition rate $\Omega$를 이용해서 Probability trajectories $p(t)$ 계산하는 게 목적이다. 
그러나 이 논문은 거꾸로 하고 있다. 목표로 하는 probability trajectories $\rho(\lambda_t)$를 구하기 위해 필요한 transition rate $\tilde{\Omega}$ 를 계산하는 것이다. 
![[Pasted image 20260209143335.png]]
### 두 가지 Regime의 구분

#### Adiabatic (천천히 변화, tilde ~ 없음)

- Control parameter $\lambda_t$가 **무한히 천천히** 변화 ($\dot{\lambda}_t \to 0$)
- 시스템은 각 순간 quasi-equilibrium state (거의 평형)
- $\Omega(\lambda_t)$, $\rho(\lambda_t)$, $\bar{J}(t)$만으로 기술
- 시스템이 자동으로 $\rho(\lambda_t)$ 궤적을 따라감
- $\Omega(\lambda_t)$를 구하기 쉽다. 

#### Finite-time (빠르게 변화, tilde ~ 있음)

- 생물학적 상황: 급격한 환경 변화 (예: 수십 분 내 열충격)
- 이런 경우 adiabatic case와 다른 해가 필요하다. 
- $\tilde{\Omega}(\lambda_t, \dot{\lambda}_t) = \Omega(\lambda_t) + \Delta\Omega(t)$
- $\tilde{\Omega}(\lambda_t, \dot{\lambda}_t)$는 Control parameter의 **시간 변화율** $\dot{\lambda}_t$에도 의존하는 함수가 된다. 
- $\tilde{J}(t) = \bar{J}(t) + \delta J(t)$
- **CD (Counterdiabatic) control** 필요한 상황이라고 본다. 

### 해법: Graphical Method
![[Pasted image 20260209143402.png]]

제어는 크게 두 가지로 나뉠 수 있다. 
Gloval control과 local control이다. 
### Global Control
- 모든 상태의 probability trajectory를 제어한다. 
### Local Control

- **일부 상태의 확률만** 제어한다. (더 현실적)
- 제어 가능한 parameter가 제한적일 때 이렇게 된다. 
- **Controllability criteria**, 즉 어떤 transition rate를 제어할 때 원하는 parameter를 전부 제어할 수 있는지에 대한 기준이 있다. 
  - Target state는 항상 controlable edge로 이루어진 subgraph 안에 있어야 한다. 
  - 그 subgraph안에 최소 한 개 이상의 nontarget state가 있어야 한다. 

아래 그림의 (b)는 controllability criteria를 만족한 경우이고, (c)는 그렇지 못 한 경우이다. 
(c)의 node 4는 controllable egde와 연결되지 못 한 채 고립되어 있다. 이러면 당연히 조종 당할 수 없다. 또한 (c)에서 node 1, 2, 3으로 이루어진 subgraph에는 nontarget state와 controllable edge로 연결되지 못 한 채 서로 갇혀있다. 이 경우에도 조종이 불가능하다. 

![[Pasted image 20260209143422.png]]
### 생물학적 검증: Heat Shock Response
초반에 언급한 열충격과 사폐론의 이야기로 돌아간다. 

![[Pasted image 20260209142349.png]]
**이론 예측:**
위의 fig c를 보아라. 검은 라인으로 표시된 $\tilde{C}(t)$는 시간에 따른 샤페론 농도이다. 
이는 원하는 궤적 (Fig d, misfolding을 확 낮추는 시나리오)가 나타나기 위해서 필요한 값을을 저자들이 이론적으로 계산한 결과이다. 

그러면 실제로도 생명체가 저런 함수를 따라 샤페론 농도를 조절하는가?
아래 실험 데이터를 보면 그래프 모양이 이론과 정성적으로 비슷함을 알 수 있다. 
각 색깔을 chaperone incoding gene의 이름이다. 실험에서 이 gene의 mRNA 농도를 측정한 것이다. mRNA 농도와 chaperone protein의 농도가 대충 비례한다고 가정하자. 
![[Pasted image 20260209142702.png]]

**해석:**
> "진화가 thermodynamically optimal (또는 near-optimal) control strategy를 선택했다!"

단조 감소하는 $\rho_1(t)$ 목표는 생물학적으로 유리 → 시스템이 이를 달성하는 제어 메커니즘(샤페론 농도 조절)을 진화시킴.

### 핵심 통찰

1. **Driven steady state**: Finite-time driving에서도 stationary current $\bar{J} \neq 0$ 가능 (non-equilibrium)
2. **Degeneracy**: 같은 target을 달성하는 무한히 많은 CD protocol 존재 (spanning tree의 선형결합)
3. **Thermodynamic cost**: Entropy production 최소화 가능 (detailed balance, optimal solution)
4. **Controllability**: Graph topology가 제어 가능성 결정
5. **Evolution optimizes**: 자연이 실제로 이론적 최적해를 구현

### 한 문장 요약

급격한 환경 변화에서도 생물 시스템이 원하는 확률 분포 궤적을 유지하려면 어떻게 제어해야 하는가에 대한 graphical solution을 제시하고, 실제 세포의 열충격 반응이 이 이론적 최적해(또는 near-optimal)와 일치함을 보였다.


## Notation의 핵심 구분: Adiabatic vs Finite-time

논문 전체를 관통하는 가장 중요한 개념적 구분은 **tilde(~) 유무**로 표현된다.

### Notation 비교표

| Notation | 의미 | 시나리오 | 시간 변화율 |
|----------|------|----------|------------|
| $\Omega(\lambda_t)$ | Original transition matrix | Adiabatic (이상적) | $\dot{\lambda}_t \to 0$ |
| $\rho(\lambda_t)$ | Target trajectory (instantaneous stationary) | Target 궤적 정의 | - |
| $\bar{J}(t)$ | Stationary current | Adiabatic current | - |
| $\tilde{\Omega}(\lambda_t, \dot{\lambda}_t)$ | CD transition matrix | Finite-time (현실) | $\dot{\lambda}_t \neq 0$ |
| $\tilde{J}(t)$ | CD current | 실제 구현 current | - |

### Adiabatic Story (notation에서 ~ 없음)

- Control parameter $\lambda_t$가 **무한히 천천히** 변화 ($\dot{\lambda}_t \to 0$)
- 시스템은 각 순간 instantaneous stationary state $\rho(\lambda_t)$에 머뭄
- $\Omega(\lambda_t)\rho(\lambda_t) = 0$, $\hat{\nabla}\bar{J}(t) = 0$
- **이상적이지만 비현실적** - "충분히 기다린다면 도달할 상태"
- 추가 제어 불필요

### Finite-time Story (~ 있음)

- Control parameter $\lambda_t$가 **유한 시간에** 변화 ($\dot{\lambda}_t \neq 0$)
- 시스템을 강제로 $\rho(\lambda_t)$ 궤적을 따라가게 만듦
- $\hat{\nabla}\tilde{J}(t) = \partial_t\hat{\rho}(\lambda_t) \neq 0$
- **현실적이고 구현 가능** - "빠르게 변해도 목표를 따라가는 제어"
- CD protocol 필요, CD와 adiabatic story의 차이는 이것이다 : $\delta J(t) = \tilde{J}(t) - \bar{J}(t)$

### $\dot{\lambda}_t$ 의존성의 물리적 의미

$$\lim_{\dot{\lambda}_t \to 0} \tilde{\Omega}(\lambda_t, \dot{\lambda}_t) = \Omega(\lambda_t)$$

빠르게 변할수록 더 큰 correction이 필요하며, 천천히 변하면 correction 불필요.

### 생물학적 예시: 열충격 반응

| 시나리오 | 시간 척도 | 세포 반응 | Notation |
|---------|----------|----------|----------|
| 온도 천천히 변화 | 30°C → 42°C (1년) | 자연스럽게 적응 | $\Omega(\lambda_t)$ |
| 열충격 | 30°C → 42°C (1분) | 샤페론 급증 필요 | $\tilde{\Omega}(\lambda_t, \dot{\lambda}_t)$ |

Section II의 목표: Given $\rho(\lambda_t)$와 $\Omega(\lambda_t)$로부터 $\tilde{\Omega}(\lambda_t, \dot{\lambda}_t)$를 구하는 graphical method 개발.


## 자잘한 정보

- counterdiabatic driving은 다른 이름으로 하면 **transitionless quantum driving**이다. transitionless라는 것은 inter-eigenstate transition이 없다는 뜻이다. 즉 시간을 따라서 하나의 eigenstate $| n(t)\rangle$ 를 따라가는 것이다.
> (p.3) In other words, if we start in a particular eigenstate $|n(0)\rangle$ at $t = 0$, we remain in the corresponding instantaneous eigenstate $|n(t)\rangle$ at all later times, up to a phase.'

- CD driving은 nonequilibrium excitation을 막기위해서 해밀토니안에 추가항을 붙이는 방식으로 이루어진다. 그래서 시스템이 adiabatic manifold를 벗어나지 않을 채, 그것 위의 궤적을 따르게 한다. 


# Questions & Insights

논문을 읽으며 떠오르는 질문과 통찰을 여기에 기록합니다.

### Q: 이 논문에서 finite time을 자꾸 강조하는 이유가 뭐지?
  A: Adiabatic process(무한히 천천히 변화)는 이론적으로 이상적이지만, 생물학적 현실에서는 빠른 반응이 필수적이다. 예를 들어 heat shock 시 샤페론을 천천히 올리면 이미 단백질이 misfolding/aggregation되어 늦다. Finite-time으로 빠르게 변화시키면 non-equilibrium excitation과 높은 thermodynamic cost가 발생하는데, CD driving은 finite time 안에 수행하면서도 adiabatic manifold를 따라가게 하여 "빠르지만 정확한" 제어를 가능하게 한다 - 이것이 "shortcuts to adiabaticity"의 핵심이다.

### Q: 왜 단열 과정(adiabatic process)과 '거의 평형 상태를 유지하며 천천히 변화'하는 것이 동치인가? 완벽하게 동치인가?
  A: 완벽한 동치는 아니다. "Adiabatic"은 맥락에 따라 다른 의미를 가진다. (1) 열역학: 열 교환 없음(dQ=0), 속도 무관 (2) 양자역학: Hamiltonian이 충분히 천천히 변할 때 시스템이 instantaneous eigenstate를 따름 (3) 이 논문(고전 확률 시스템): ∂tλt → 0 극한에서 시스템이 항상 instantaneous stationary distribution ρ(λt)에 있음 (Eq. 3). 이 논문은 양자역학 용어를 차용했지만 고전 시스템에 적용한 것으로, "adiabatic ≈ quasi-static ≡ 무한히 천천히 변화"로 이해하면 된다.

### Q: "If a system is driven over a finite-time interval, subject to fluctuations that take it far from equilibrium, can there still be a degree of control?" (p.2) - 이 문장의 의미를 자세히 뜯어보자.

A: 이 문장은 논문 전체의 핵심 질문이다. 
세 가지 "적"이 동시에 존재한다: 
(1) 시간 부족 (finite-time), (2) 확률성 (fluctuations), (3) 비평형 (far from equilibrium). 
직관적으로는 이 조건들이 동시에 있으면 제어가 불가능해 보인다. 하지만 CD driving은 "Yes, but you need the right transition rates!"라고 답한다. 
Fluctuations 자체를 없앨 수는 없지만, 적절한 $\delta J(t)$ (또는 양자역학의 $H_1(t)$)를 추가하면 **평균적 행동**(확률 분포)은 제어 가능하다. 
"Degree of control"은 두 가지 수준으로 나뉜다: 
(1) Global control - 모든 N개 상태 제어 (최소 N-1개 controllable edges 필요), 
(2) Local control - 일부 상태만 제어 (더 적은 control knobs, 생물학적으로 현실적). 
생물학적 맥락에서 이 질문은 "진화가 이런 제어를 달성했는가?"를 묻는 것이며, 논문 Fig. 7-8은 자연(효모/대장균의 열충격 반응)이 실제로 optimal control을 수행함을 보여준다. 철학적으로는 "결정론적 법칙 없이도, 빠르게 변하는 환경에서도, 요동치는 시스템을 의도대로 조종할 수 있는가?"라는 질문이며, CD driving의 답은 "Yes, with the right protocol!"이다.

### Q: 논문은 원하는 목표 경로 $\rho(t)$를 만들기 위한 control parameter $\lambda(t)$를 찾는다고 하는데, 실제 생물학적 시나리오(예: 열충격)에서는 외부 교란이 주어지고 시스템이 자율적으로 반응하는 것 아닌가? 논문의 접근과 반대 아닌가?
  A: 정확한 지적이다. 논문은 역설계(inverse design) 접근을 취하지만, 이는 자연 현상을 이해하는 도구로 사용된다. 
  
> Introduction 마지막 문장이 핵심: "By exploring how controllability depends on the duration of the target trajectory, one can investigate limits on how quickly a system can alter its state distribution in response to an external environmental change." 

즉, (1) "원하는 $\rho(t)$를 달성하려면 어떤 제어가 필요한가"를 계산하고, (2) 실제 자연에서 관찰되는 반응(Fig. 7의 샤페론 농도 변화)과 비교함으로써, (3) 생물 시스템이 무엇을 최적화하고 있는지, 그리고 빠른 반응의 물리적 한계가 무엇인지 역공학적으로 이해한다. 예: "misfolded 확률을 빠르게 줄이려면 $C(t)$가 이래야 한다" → "효모가 실제로 비슷하게 한다" → "진화가 thermodynamically optimal 전략을 선택했구나"

### Q: 식 2로부터 식 5와 6을 유도하는 과정에서 식 5의 우항 summation에 $j \neq i$ 조건이 추가되어야 하는 것 아닌가?

A: 정확한 지적이다. 엄밀한 유도 과정은 다음과 같다. 
Master equation (Eq. 2) 
$$\partial_t p_i(t) = \sum_j \Omega_{ij}(\lambda_t) p_j(t)$$
를 분리하면 
$$\partial_t p_i(t) = \sum_{j \neq i} \Omega_{ij}(\lambda_t) p_j(t) + \Omega_{ii}(\lambda_t) p_i(t)$$
이다. 
$$\Omega_{ii} = -\sum_{j \neq i} \Omega_{ji}$$
를 사용하면 
$$\partial_t p_i(t) = \sum_{j \neq i} [\Omega_{ij}(\lambda_t) p_j(t) - \Omega_{ji}(\lambda_t) p_i(t)] = \sum_{j \neq i} J_{ij}(t)$$
가 된다. 논문은 대각 current $J_{ii} \equiv 0$으로 정의하고 모든 $j$에 대한 합으로 표기한 것으로 보인다. Graph 관점에서도 이는 자연스러운데, edge는 서로 다른 상태를 연결하므로 self-loop가 없고 따라서 $J_{ii} = 0$이다. 
엄밀하게는 $\partial_t p_i(t) = \sum_{j \neq i} J_{ij}(t)$가 정확한 표현이다.


### Q: "However, our CD approach works for the more general case where $\bar{J}(t)$ can be nonzero but Eq. (15) is satisfied"가 무슨 말인가? 어떻게 $\bar{J}(t) \neq 0$인데 식 15 ($\hat{\nabla}\bar{J}(t) = 0$)는 성립할 수 있는가?

A: $\bar{J}(t) = 0$ (모든 edge에서 current가 0)과 $\hat{\nabla}\bar{J}(t) = 0$ (각 node에서 net inflow = 0)는 다른 조건이다. 전자는 detailed balance로 열평형(equilibrium)을 의미하고, 후자는 정상상태(stationary state)를 의미한다. $\hat{\nabla}$의 null space는 Δ-dimensional이므로 ($\Delta = E - (N-1)$), fundamental cycle을 따라 흐르는 current는 각 node에서 들어오는 양과 나가는 양이 같아 $\hat{\nabla}\bar{J}(t) = 0$을 만족하지만 $\bar{J}(t) \neq 0$일 수 있다. 이것이 **non-equilibrium steady state (NESS)** 또는 **driven steady state**이다. 예를 들어 분자 모터는 ATP를 소모하며 cycle을 계속 돌지만 확률 분포는 stationary 상태에 있다. 즉, CD driving은 equilibrium뿐 아니라 에너지를 소모하며 cycle을 도는 driven steady state도 다룰 수 있다.

### Q: 왜 굳이 reference state에 대한 행을 하나 뺀 reduced matrix를 쓰는가?

A: 확률 보존 $\sum_{i=1}^N p_i = 1$에 의해 $p_N = 1 - \sum_{i=1}^{N-1} p_i$로 자동 결정되므로, N개 확률 중 실제 자유변수는 N-1개뿐이다. Reduced matrix $\hat{\nabla}$는 이 minimal set of independent variables에 대한 방정식이다. 실용적으로는 (1) 역행렬 계산이 필요한데 $\hat{\nabla}$는 full rank (N-1)이고, (2) graph theory와 자연스럽게 매칭되며 (spanning tree가 N-1개 edge), (3) redundant equation을 제거하여 수치적으로 안정적이다.



# Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 

- [[Transition Rate Matrix vs Transition Probability Matrix]] 

# 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.
