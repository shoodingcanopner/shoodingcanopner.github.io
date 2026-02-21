---
tags: [study]
---
### detailed balance

평형 상태가 되려면 transition probability가 어떻게 되어야 하나?
detailed balance를 지켜야 한다. 
평형상태에서 특정 상태에 있을 확률이 볼츠만 분포에 따른다면, 그리고 평형이니 만큼 양쪽  A 상태와 B 상태의 분포가 변함이 없다면

- 평형 상태에서 입자가 A일 확률 $\times$ A에서 B로 바뀔 확률 
- 평형 상태에서 입자가 B일 확률 $\times$ B에서 A로 바뀔 확률
이 둘이 같아야 한다!!!

왜냐면 첫째는 단위시간당 시스템속 A가 B로 바뀌는 양이고
둘째는 단위시간당 B가 A로 바뀌는 양이기 때문이다. 

식으로 정리하면 아래와 같다. 
$$P_{eq}(A)P_{trans}(A \rightarrow B) = P_{eq}(B)P_{trans}(B \rightarrow A)$$


의 등식이 성립해야한다. 

### transition probability가 detailed balance인 건 어떻게 알 수 있지?

**바로 위 식을 변형하고,$P_{eq}$에 Boltzman factor $e^{(-E_i/k_B T)}$를 대입하면 된다.** 
$$\frac{P_{trans}(A \rightarrow B)}{P_{trans}(B \rightarrow A)} = \frac{P_{eq}(B)}{P_{eq}(A)} = e^{-(E_B - E_A)/k_BT}$$
