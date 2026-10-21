---
title: QM lecture note - Dyson Series & Transition Probability
date: 2026-10-13
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의
[[QM lecture note - The Interaction Picture]]

# 오늘의 핵심

I-picture time evolution operator에 대한 슈방

$$i\hbar{\frac{d}{d t}}U_{I}(t,t_{0})=V_{I}(t)U_{I}(t,t_{0}).$$
이를 Dyson series로 전개하여 2차식 까지만 남기면 아래 식이 된다. 

$$
\boxed{\, U_{I}(t,t_{0}) \, {{\approx\,\!1-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t}d t^{\prime}V_{I}(t^{\prime})+\left(\displaystyle\frac{-i}{\hbar}\right)^{2}\int_{t_{0}}^{t}d t^{\prime}\int_{t_{0}}^{t^{\prime}}d t^{\prime\prime}V_{I}(t^{\prime})V_{I}(t^{\prime\prime})}}\,}
$$

우린 여전히 $\ket{\alpha,t_{0};t}_{I}=\sum_{n}c_{n}(t)\ket{n}$인 setup에서 풀고 있다. 
만약 $\ket{\alpha}$가 $H_0$에 대해 eigenstate라면, $c_n(t)$는 아래와 같이 깔끔하게 나온다. 
그저 $U_I(t,t_0)$를 $H_0$의 eigen basis로 나타냈을 뿐.

$$
\boxed {\, c_n(t) = \bra{n}U_I(t,t_0)\ket{\alpha}\,}
$$
위위 식을 집어넣으면, 
$$c_{n}^{(0)}(t)=\delta_{n \alpha}\quad(\mathrm{independent\;of\;}t)$$
$$\begin{array}{c}{{c_{n}^{(1)}(t)=\displaystyle{\frac{-i}{\hbar}\int_{t_{0}}^{t}\bra{n}V_{I}(t^{\prime})\ket{\alpha} d t^{\prime}}}}\\ {{=\displaystyle{\frac{-i}{\hbar}\int_{t_{0}}^{t}e^{i\omega_{n \alpha}t^{\prime}}V_{n \alpha}(t^{\prime})d t^{\prime}}}}\end{array}$$
$$c_{n}^{(2)}(t)=\left({\frac{-i}{\hbar}}\right)^{2}\sum_{m}\int_{t_{0}}^{t}d t^{\prime}\int_{t_{0}}^{t^{\prime}}d t^{\prime\prime}e^{i\omega_{n m}t^{\prime}}V_{n m}(t^{\prime})e^{i\omega_{m \alpha}t^{\prime\prime}}V_{m \alpha}(t^{\prime\prime}),$$



# 필기 내용

[[QM lecture note - The Interaction Picture|지난 시간]]에 정의한 $c_n(t)$를 구하는 방법을 알아보자. 
Exact solution이 없는 경우, $c_n(t)$에 대한 approximation을 구하는 수밖에 없다. 
$$c_{n}(t)=c_{n}^{(0)}+c_{n}^{(1)}+c_{n}^{(2)}+\cdot\cdot\cdot\,,$$
Perturbation의 세기에 대한 0차항.. 1차항... 2차항을 의미한다. 

$c_{n}^{(0)}$, $c_{n}^{(1)}$, $c_{n}^{(2)}$ 등을 구하기 위해서는, 일단 time evolution operator의 근사식을 알아야 한다. 

## Time evolution operator $U_{I}(t,t_{0})$ 구하기


Interaction picture에서 [[QM lecture note - Time Evolution Operator|time evolution operator]] $U_{I}(t,t_{0})$는 아래와 같이 기능한다. 
$$\ket{\alpha,t_{0};t}_{I}=U_{I}(t,t_{0})\ket{\alpha,t_{0};t_{0}}_{I}.$$

 

위 식을 $i\hbar\frac{\partial}{\partial t}\ket{\alpha,t_{0};t}_{I}=V_{I}\ket{\alpha,t_{0};t}_{I},$에다가 넣으면 $U_{I}(t,t_{0})$에 대한 방정식을 얻을 수 있다. 
[[QM lecture note - Time Evolution Operator|기존에 알던 식 ]]$i\hbar\frac{d\,\mathcal{U}(t, t_0)}{dt} = \mathcal{H}(t)\,\mathcal{U}(t, t_0)$과  비교해 보아라. 
$$i\hbar{\frac{d}{d t}}U_{I}(t,t_{0})=V_{I}(t)U_{I}(t,t_{0}).$$
다른 observable operator와 달리, time evolution operator는 I-picture에서 $V_{I}$에 의해 time evolution한다는 것을 알 수 있다. 
이는 $U_I$가 observable처럼 $A_I = e^{iH_0t/\hbar}A_Se^{-iH_0t/\hbar}$ 꼴로 변환된 operator가 아니기 때문이다. 실제 관계는 양쪽의 시간이 다르다.
$$
U_I(t,t_0) = e^{iH_0t/\hbar}\,U(t,t_0)\,e^{-iH_0t_0/\hbar}
$$

정의에 의해 당연히, 시간이 옮겨지지 않으면 time evolution operator는 identity operator여야 한다. 
$$U_{I}(t,t_{0})|_{t=t_{0}}=1.$$
$U_{I}(t_0,t_{0})$를 아니까 미방 $i\hbar{\frac{d}{d t}}U_{I}(t,t_{0})=V_{I}(t)U_{I}(t,t_{0}).$에 대해 solution을 구할 수 있다. 
그저 방정식을 적분 형태로 바꿀 뿐이지만...

$$U_{I}(t,t_{0})=1-{\frac{i}{\hbar}}\int_{t_{0}}^{t}V_{I}(t^{\prime})U_{I}(t^{\prime},t_{0})d t^{\prime}.$$
문제는 위 식이 풀기가 힘들다는 것이다. 
그래서 적분을 재귀적으로 하여 근사식을 구하는 꼼수를 쓴다. 
위 식의 적분식 안에 $U_{I}(t',t_{0})=1-{\frac{i}{\hbar}}\int_{t_{0}}^{t'}V_{I}(t^{\prime\prime})U_{I}(t^{\prime\prime},t_{0})d t^{\prime\prime}$  (적분 인자가 $t^{\prime \prime}$으로 바뀌었음에 주목하라.) 를 대입하면, 


$$\begin{array}{c}{{U_{I}(t,t_{0})=\!1-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t}V_{I}(t^{\prime})\left[1-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t^{\prime}}V_{I}(t^{\prime\prime})U_{I}(t^{\prime\prime},t_{0})d t^{\prime\prime}\right]d t^{\prime}}}\end{array}$$
![[Pasted image 20261013151535.png]] 
위 식을 전개하는 중에, 빨간 밑줄을 친 $(-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t}V_{I}(t^{\prime})(-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t^{\prime}}V_{I}(t^{\prime\prime})U_{I}(t^{\prime\prime},t_{0})d t^{\prime\prime})dt^{\prime}$을 계산해야 하는데,
또 다시 $U_{I}(t^{\prime\prime},t_{0}) = 1 - \text{적분식}$ 꼴로 치환한다. 
$\text{적분식}$을 버리면 (버리는 항은 $V_I$가 세 번 곱해진 3차 항이므로, 2차까지의 근사에서는 무시할 수 있다), 결국

$(-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t}V_{I}(t^{\prime})(-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t^{\prime}}V_{I}(t^{\prime\prime})U_{I}(t^{\prime\prime},t_{0})d t^{\prime\prime})dt^{\prime} \approx \left(\displaystyle\frac{-i}{\hbar}\right)^{2}\int_{t_{0}}^{t}d t^{\prime}\int_{t_{0}}^{t^{\prime}}d t^{\prime\prime}V_{I}(t^{\prime})V_{I}(t^{\prime\prime})$ 가 되므로! 

최종적으로 $U_{I}(t,t_{0})$ 에 대한 근사식을 구하면 아래가 된다. 

$$
\boxed{\, U_{I}(t,t_{0}) \, {{\approx\,\!1-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t}d t^{\prime}V_{I}(t^{\prime})+\left(\displaystyle\frac{-i}{\hbar}\right)^{2}\int_{t_{0}}^{t}d t^{\prime}\int_{t_{0}}^{t^{\prime}}d t^{\prime\prime}V_{I}(t^{\prime})V_{I}(t^{\prime\prime})}}\,}
$$

이렇게 적분 식을 재귀적으로 넣어서 전개한 식을 **Dyson series**라고 부른다. 
원래 Dyson series는 이 과정을 끝없이 반복한 무한급수이고 그 자체로는 exact하다. 위 식은 이를 2차까지 자른 것이다.

> [!note] Operator 순서
> 2차 항 $V_I(t')V_I(t'')$에서 $t'' < t'$이므로, 나중 시간의 operator가 왼쪽에 온다. 서로 다른 시간의 $V_I$는 일반적으로 commute하지 않으므로 이 순서를 바꿀 수 없다. (→ time-ordering)

## $c_n(t)$ 근사식 구하기 (교재하고 index가 다름, 내용은 같음)
~~state index로 $i$ 쓰는 거 너무 싫어....~~ 

맨 처음 식 $\ket{\alpha,t_{0};t}_{I}=U_{I}(t,t_{0})\ket{\alpha,t_{0};t_{0}}_{I}$에다가 $\ket{\alpha,t_{0};t}_{I}=\sum_{n}c_{n}(t)\ket{n}$을 대입.


$$
\sum_{n} c_n(t)\ket{n} = \sum_{n} c_n(t_0)\,U_I(t,t_0)\ket{n}
$$
양 변에 $\bra{m}$을 곱한다. 
$$
\begin{aligned}
\sum_{n}\bra{m}c_n(t)\ket{n} &= \sum_{n} c_n(t_0)\bra{m}U_I(t,t_0)\ket{n} \\
c_m(t) &= \sum_{n}\bra{m}U_I(t,t_0)\ket{n}\,c_n(t_0)
\end{aligned}
$$
$\ket{\alpha}$가 일반적인 state라면 위 식으로 $c_n(t)$를 구해야 한다. 
만약, $\ket{\alpha}$가 초기에 $H_0$에 대한 eigenstate라면, 
$$
c_n(t_0) = \delta_{n \alpha}
$$
이므로, 
$$
\boxed {\, c_m(t) = \bra{m}U_I(t,t_0)\ket{\alpha}\,}
$$
이렇게 된다!
이후 $c_n^{(2)}$에서 $m$을 중간 상태의 합 index로 쓰기 위해, 자유 index를 $n$으로 바꿔 쓰자.
$$
c_n(t) = \bra{n}U_I(t,t_0)\ket{\alpha}
$$
여기에다가 $\, U_{I}(t,t_{0}) \, {{\approx\,\!1-\displaystyle\frac{i}{\hbar}\int_{t_{0}}^{t}d t^{\prime}V_{I}(t^{\prime})+\left(\displaystyle\frac{-i}{\hbar}\right)^{2}\int_{t_{0}}^{t}d t^{\prime}\int_{t_{0}}^{t^{\prime}}d t^{\prime\prime}V_{I}(t^{\prime})V_{I}(t^{\prime\prime})}}\,$을 대입하면, 드디어 원하던 것을 얻는다. 

[[QM lecture note - The Interaction Picture|Recall]]: $\omega_{n m}\equiv\frac{\left(E_{n}-E_{m}\right)}{\hbar}=-\omega_{m n}$
$$c_{n}^{(0)}(t)=\delta_{n \alpha}\quad(\mathrm{independent\;of\;}t)$$
$$\begin{array}{c}{{c_{n}^{(1)}(t)=\displaystyle{\frac{-i}{\hbar}\int_{t_{0}}^{t}\bra{n}V_{I}(t^{\prime})\ket{\alpha} d t^{\prime}}}}\\ {{=\displaystyle{\frac{-i}{\hbar}\int_{t_{0}}^{t}e^{i\omega_{n \alpha}t^{\prime}}V_{n \alpha}(t^{\prime})d t^{\prime}}}}\end{array}$$
$$c_{n}^{(2)}(t)=\left({\frac{-i}{\hbar}}\right)^{2}\sum_{m}\int_{t_{0}}^{t}d t^{\prime}\int_{t_{0}}^{t^{\prime}}d t^{\prime\prime}e^{i\omega_{n m}t^{\prime}}V_{n m}(t^{\prime})e^{i\omega_{m \alpha}t^{\prime\prime}}V_{m \alpha}(t^{\prime\prime}),$$
$c_n^{(2)}$의 $\sum_m$은 $\bra{n}V_I(t')V_I(t'')\ket{\alpha}$에서 두 $V_I$ 사이에 completeness relation $\sum_m\ket{m}\bra{m} = 1$을 끼워 넣어 생긴 것이다.


# 궁금한 내용

생각난 질문을 여기에 메모


# 다음 강의
[[QM lecture note - Constant Perturbation and Transition Rate]]



