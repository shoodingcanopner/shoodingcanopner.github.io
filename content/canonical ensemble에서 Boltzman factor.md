---
tags: [study]
---

아직 글리아에게 수정 요청을 하지 않음

Canonical ensemble, 박스가 열원에 연결되어 있어서 부피, 입자수, 온도가 결정된 시스템에서는 특정 에너지 $E_i$를 가지는 상태 $P_i$에 있을 확률은 다음과 같음을 알고 있다. 


$$ P_i = exp(-\frac{E_i}{k_BT}) =exp(-\beta E_i)$$
$\beta = \frac{1}{k_BT}$는 차가운 정도이다. 에너지의 역의 차원을 가진다. 

저 exp 항을 Boltzman factor라고 부른다. 그런데 왜 이럴까?
이건 모두 고립계 microcanonical ensemble에서 엔트로피와 확률분포에 의해 유도된다. 
[[microcanonical ensemble의 entropy]]

박스와 열원 전체를 고립계로 두고 푼 것이다. 
![[Pasted image 20251102152527.png]]

heat bath는 우리가 관심 가지는 시스템보다 입자수가 아주 아주 많다. 
전체 계가 가질 총 에서지가 $E_{total}$일 때, 
시스템이 i상태에 있을 확률은 heat bath가 $E_{total} - E_i$의 에너지를 가질 미시상태의 수와 비례한다. (시스템이 E_i의 에너지를 가질 미시 상태의 수의 변동은 무시할 만큼 작기 때문에? 아마도?)

미시상태의 수는 exp(엔트로피)형식으로 나타낼 수 있따. 


![[Pasted image 20251102152728.png]]

즉 시스템이 i 상태에 있을 확률의 비율은 비교하는 두 상태 사이를 오갈 때 Exp(heat bath의 엔트로피 변화)라는 뜻. 

우리는 엔트로피의 정의를 통해 

$$dS = \frac{1}{T}[dU + pdV -\mu dN]$$
이라는 사실을 알고 있다. 
지금은 heat bath의 부피 변화와 입자 수 변화를 무시할 수 있으므로, 
엔트로피 변화는 $\frac{두 상태를 오갈 때 열원의 에너지 변화량}{T}$
인 것을 알 수 있다. 
이것을 원래 식에 대입라면 결국 Boltzman factor를 얻을 수 있다. 

이제 두 상태 사이의 확률의 '비율'을 알았다. 
대부분이 관심가질 것은 비율이 아니라 확실한 확률, P_i일 것이다. 
이것을 알기 위해서는 모든 i에 대한 Boltman factor의 합을 구하여 normalization 과정을 거쳐야 할 것이다. 
이때 partition function의 개념이 나온다. 

partition function은 모든 상태에 대해 Boltzman factor를 더한 것이다. 
물론 ensemble 종류에 따라 유효한 factor도 다르고, partition function의 형태도 다르다. 

[[partiton function in canonical ensemble]]
# Related Concepts

- [[Equipartition Theorem]]

# Reference
유우경 교수님 정량생물학 강의 노트
[[20250922_29_StatisticalMechanics.pdf]]




