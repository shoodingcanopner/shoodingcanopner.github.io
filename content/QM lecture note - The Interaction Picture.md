---
title: QM lecture note - The Interaction Picture
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


# 오늘의 핵심

### Interaction picture에서 ket과 operator 표현
Interaction picture는 total Hamiltonian($H_0 + V(t)$)에 의한 시간 진화를 $H_0$에 의한 부분과 $V(t)$에 의한 부분으로 나눈 방식이다. 
Ket은 $V_I(t)$에 의해서만 시간 진화, operator는 $H_0$에 의해서만 시간진화


$$\boxed{\ket{\alpha,t_{0};t}_{I} =e^{i H_{0}t/\hbar}\ket{\alpha,t_{0};t}_{S},}$$
$${\cal A}_{I}\equiv e^{i H_{0}t/\hbar}{\cal A}_{S}e^{-i H_{0}t/\hbar}.$$

반대로 하이젠베르크 관점 (H-picture)에서 정의하면, H-picture에서 시간에 independent하게 정의한 state를 $V$를 이용해 시간진화하면 된다. 

$$\boxed{\ket{\alpha,t_{0};t}_{I} =e^{-i V t/\hbar}\ket{\alpha}_{H}}$$

$${\cal A}_{I}\equiv e^{-i Vt/\hbar}{\cal A}_{H}(t)e^{i Vt/\hbar}.$$

### Interaction picture에서 ket의 슈방, $V_I$로 time evolution

$$i\hbar\frac{\partial}{\partial t}\ket{\alpha,t_{0};t}_{I}=V_{I}\ket{\alpha,t_{0};t}_{I},$$
→ 그냥 $V$가 아니라 $V_S$이다. 


### I-picture에서 operator의 슈방, $H_0$로 time evolution

$$\frac{d{\cal A}_{I}}{d t}=\frac{1}{i\hbar}[{\cal A}_{I},{\cal H}_{0}],$$

### Time-dependent perturbation theory에서 문제 정의
$$\ket{\alpha,t_{0};t}_{I}=\sum_{n}c_{n}(t)\ket{n}.$$
$c_n(t)$를 $t$에 대해 구하라. 


### 슈방을 여차저차해서 얻은 $c_n$에 대한 미방
$$\boxed{\, i\hbar\frac{d}{d t}c_{n}(t)=\sum_{m}V_{n m}(t)e^{i\omega_{n m}t}c_{m}(t) \,}$$

$$\omega_{n m}\equiv\frac{\left(E_{n}-E_{m}\right)}{\hbar}=-\omega_{m n}.$$


# 필기 내용

## 도입
시간에 따라 perturbation이 달라지는 문제를 푼다. 

관심있는 임의의 상태 $\ket{\alpha}$가 시간이 지나면 어떻게 변할까?
초기 상태의 $\ket{\alpha}$를 초기 $H_0$의 eigenstate를 이용해 나타낸다.
$$\ket{\alpha}=\sum_{n}c_{n}(0)\ket{n}.$$

시간이 지났을 때 $\ket{\alpha}$가 아래와 같이 쓰인다고 보자. 
$$\ket{\alpha,t_{0}=0;\,t}=\sum_{n}c_{n}(t)e^{-i E_{n}t/\hbar}\ket{n}$$
Perturbation이 없을 때는 $e^{-i E_{n}t/\hbar}\ket{n} = \ket{n, t_0 = 0; t}$이라는 것을 생각하자.  
만약 perturbation이 없다면, $c_n(t) = c_n(0)$일 것이다. 
$c_n(t)$이 constant function이 아니라 시간에 따라 변하는 함수인 것은 오직 $V(t)$의 영향이다. 

우리의 목표는 문제를 위와 같이 세팅했을 때 ==$c_n(t)$를 구하는 것이다.==
따라서 time evolution operator를 $H_0$에 의한 부분과 $V(t)$에 의한 부분을 분리할 필요가 있다. 


## Interaction picture
$t = 0$, 즉 초기 상태에서는 모든 picture에서 같음을 기억
(이 정의는 $t_0 = 0$을 전제한다. $t_0 \neq 0$이면 $t = t_0$에서 $\ket{\alpha,t_0;t_0}_I = e^{iH_0t_0/\hbar}\ket{\alpha}_S \neq \ket{\alpha}_S$가 되어 picture들이 일치하지 않는다.)

Interaction picture에서 ket은 이렇게 정의된다. 
$$\boxed{\ket{\alpha,t_{0};t}_{I} =e^{i H_{0}t/\hbar}\ket{\alpha,t_{0};t}_{S},}$$
S-picture에서 상태를 $H_0$ operator에 의한 time evolution $=e^{-i H_{0}t/\hbar}$을 무효화시켰다는 걸 알 수 있다. 

$\bra{\beta}_I A_I \ket{\alpha}_I = \bra{\beta}_S A_S \ket{\alpha}_S$ 이 임의의 ket과 임의의 operator $A$에 대해 성립해야 하므로, $A_I$와 $A_S$의 관계는:
$e^{- i H_{0}t/\hbar} A_I e^{i H_{0}t/\hbar} = A_S$이고, 역으로

$${\cal A}_{I}\equiv e^{i H_{0}t/\hbar}{\cal A}_{S}e^{-i H_{0}t/\hbar}.$$
특히 perturbation에 대해서, 
$$V_{I}(t)=e^{i H_{0}t/\hbar}V(t) e^{-i H_{0}t/\hbar}$$


이제 슈방을 I-picture로 다시 쓸 수 있다. 
$$\begin{array}{l}{{i\hbar\displaystyle\frac{\partial}{\partial t}\ket{\alpha,t_{0};t}_{I}=i\hbar\displaystyle\frac{\partial}{\partial t}(e^{i H_{0}t/\hbar}\ket{\alpha,t_{0};t}_{S})}}\\ {{\phantom{i\hbar\displaystyle}=-H_{0}e^{i H_{0}t/\hbar}\ket{\alpha,t_{0};t}_{S}+e^{i H_{0}t/\hbar}(H_{0}+V)\ket{\alpha,t_{0};t}_{S}}}\\ {{\phantom{i\hbar\displaystyle}=e^{i H_{0}t/\hbar}V e^{-i H_{0}t/\hbar}e^{i H_{0}t/\hbar}\ket{\alpha,t_{0};t}_{S}.}}\end{array}$$
위 식 전개에서.. 어려운 건 없는 것 같다. 첫번째 줄에서 미분할 때 곱의 미분 신경쓰고, $\ket{\alpha,t_{0};t}_S$의 시간 미분에서 오리지널 슈방을 쓰고, $V_I$의 꼴로 나타내기 위해 마지막줄 처럼 식을 고쳐주면 된다. 

앞서 $\ket{\alpha,t_{0};t}_I$는 $V_I(t)$로 인해 time evolution을 한다고 예고한 것과 상통하게, 슈방은 아래와 같이 쓰인다. 
$$i\hbar\frac{\partial}{\partial t}\ket{\alpha,t_{0};t}_{I}=V_{I}\ket{\alpha,t_{0};t}_{I},$$
원래 $H$가 있던 자리에 $V_I$가 있는 것을 볼 수 있다. 


또한, ${\cal A}_{I}\equiv e^{i H_{0}t/\hbar}{\cal A}_{S}e^{-i H_{0}t/\hbar}$의 양 변을 미분하고 정리하면 operator의 슈방을 구할 수 있다. 
$$\frac{d{\cal A}_{I}}{d t}=\frac{1}{i\hbar}[{\cal A}_{I},{\cal H}_{0}],$$

원래 알던 식인 $\frac{d{\cal A}_{H}}{d t}=\frac{1}{i\hbar}[{\cal A}_{H},{\cal H}]$와 비교해 보아라. 앞서 예고했듯, I-picture에서 operator는 $H_0$에 의해 time evolution함을 알 수 있다. 

## $c_n$에 대한 방정식
도입부에서 본 $\ket{\alpha,t_{0}=0;\,t}_S=\sum_{n}c_{n}(t)e^{-i E_{n}t/\hbar}\ket{n}$에 양 변에 $e^{iH_0 t/ \hbar}$을 곱하면 I-picture로 나타낼 수 있다. 
$$\ket{\alpha,t_{0};t}_{I}=\sum_{n}c_{n}(t)\ket{n}.$$
$c_n$에 대해 깔끔하게 정리된다. 
$\braket{n|\alpha,t_{0};t}_{I} =  c_n(t)$ 라는 걸 알 수 있다. 
슈방을 정리하자. $i\hbar\frac{\partial}{\partial t}\ket{\alpha,t_{0};t}_{I}=V_{I}\ket{\alpha,t_{0};t}_{I},$의 양 변에 $\bra{n}$을 곱하면, $\bra{n}$을 시간 미분 해보았자 0이라는 점을 이용해서 아래 식이 나온다. 우변에는 $V_I$와 ket 사이에 completeness relation $\sum_m \ket{m}\bra{m} = 1$을 끼워 넣었다. 

$$i\hbar\frac{\partial}{\partial t}\braket{n|\alpha,t_{0};t}_{I}=\sum_{m}\bra{n}V_{I}\ket{m}\braket{m|\alpha,t_{0};t}_{I}.$$

위 식에서 좌변은 $i\hbar\frac{\partial}{\partial t} c_n(t)$와 같다. 
우변에다가 $\ket{\alpha,t_{0};t}_{I}=\sum_{j}c_{j}(t)\ket{j}$를 넣어 정리하면, 
$$
\begin{aligned}
& RHS
=\sum_{j}\sum_{m}\bra{n}e^{iH_0t/\hbar}\,V(t)\,e^{-iH_0t/\hbar}\ket{m}\bra{m}c_j(t)\ket{j} \\
&= \sum_{j}\sum_{m}\bra{n}e^{iH_0t/\hbar}\,V(t)\,e^{-iH_0t/\hbar}\ket{m}\,c_j(t)\,\delta_{mj} \\
& = \sum_{j}\sum_{m} V_{n m}(t)e^{i(E_{n}-E_{m})t/\hbar}\,c_j(t)\,\delta_{mj} \\
&= \sum_{m} V_{n m}(t)\,e^{i(E_{n}-E_{m})t/\hbar}\,c_m(t)
\end{aligned}
$$
둘째 줄에서 셋째 줄로 갈 때는 $H_0$의 eigenket에 대해 $e^{-iH_0t/\hbar}\ket{m} = e^{-iE_mt/\hbar}\ket{m}$, $\bra{n}e^{iH_0t/\hbar} = e^{iE_nt/\hbar}\bra{n}$을 이용했다. 마지막 줄은 $\delta_{mj}$로 $j$에 대한 합을 수행한 결과이다.

> [!important] $V_{nm}$은 $V_I$가 아니라 $V$의 matrix element!
> 여기서 $V_{nm}$은 **Schrödinger picture**의 perturbation $V(t)$로 만든 matrix element이다.
> $$
> V_{nm}(t) \equiv \bra{n}V(t)\ket{m}
> $$
> 반면 I-picture의 $V_I(t)$로 만든 matrix element는 phase factor까지 포함한 전체이다.
> $$
> \bra{n}V_I(t)\ket{m} = V_{nm}(t)\,e^{i\omega_{nm}t}
> $$
> 즉 $e^{i\omega_{nm}t}$는 $H_0$에 의한 시간 진화를 I-picture로 옮기면서 생긴 인자이다. 둘을 혼동하지 말 것.
> 또한 $V$ 자체가 시간 의존이므로 $V_{nm}$도 일반적으로 $t$의 함수이다.

$n$과 $m$ basis state의 에너지 차이로 인한 frequency를 앞으로 아래와 같이 쓰겠다. 
$$\omega_{n m}\equiv\frac{\left(E_{n}-E_{m}\right)}{\hbar}=-\omega_{m n}.$$

그럼 정리하던 식은 이렇게 $c_{n}(t)$에 대한 1차 시간 미분 방정식이 된다. 
$$i\hbar\frac{d}{d t}c_{n}(t)=\sum_{m}V_{n m}(t)e^{i\omega_{n m}t}c_{m}(t),$$
행렬 표현으로 쓰면, 
$$i\hbar\left(\!\!{\begin{array}{c}{{\dot{c}_{1}}}\\ {{\dot{c}_{2}}}\\ {{\dot{c}_{3}}}\\ {{\vdots}}\end{array}}\!\!\right)=\left(\!\!{\begin{array}{c c c c}{{V_{11}}}&{{V_{12}e^{i\omega_{12}t}}}&{{}}&{{\cdots}}\\ {{V_{21}e^{i\omega_{21}t}}}&{{V_{22}}}&{{}}&{{\cdots}}\\ {{}}&{{}}&{{V_{33}}}&{{\cdots}}\\ {{}}&{{}}&{{\vdots}}&{{\ddots}}\end{array}}\!\!\right)\left(\!\!{\begin{array}{c}{{c_{1}}}\\ {{c_{2}}}\\ {{c_{3}}}\\ {{\vdots}}\end{array}}\!\!\right).$$


# 궁금한 내용

생각난 질문을 여기에 메모
# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의

[[QM lecture note - Dyson Series & Transition Probability]]

# 필기 원본

