---
title: "QM lecture note - Time-Independent Degenerate Perturbation Theory"
date: "2026-10-04"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의
[[QM lecture note - Nondegenerate Perturbation Theory Examples]]


# 오늘의 핵심
7절 내용을 보자. 
앍 개복잡해.

# 필기 내용

## Symbol table

| Symbol                           | Meaning                                                              |
| -------------------------------- | -------------------------------------------------------------------- |
| $H_0$                            | Unperturbed Hamiltonian                                              |
| $V$                              | Perturbation operator                                                |
| $\lambda$                        | Perturbation의 order를 세기 위한 expansion parameter                       |
| $D$                              | Degenerate subspace                                                  |
| $g$                              | Degeneracy (dimension of $D$)                                        |
| $E_D^{(0)}$                      | Degenerate subspace $D$의 unperturbed energy                          |
| $\ket{m^{(0)}}$                  | 처음 주어진 $D$의 unperturbed basis kets                                   |
| $\ket{l}$                        | Perturbed energy eigenket                                            |
| $\ket{l^{(0)}}$                  | $\lambda \to 0$에서 $\ket{l}$이 수렴하는 올바른 zeroth-order ket               |
| $\ket{k^{(0)}}$                  | $D$ 바깥의 unperturbed eigenket ($k \notin D$)                          |
| $E_k^{(0)}$                      | $\ket{k^{(0)}}$의 unperturbed energy                                  |
| $V_{kl}$                         | Matrix element $\bra{k^{(0)}}V\ket{l^{(0)}}$                         |
| $P_0$                            | $D$로의 projection operator                                            |
| $P_1$                            | $P_1 = 1 - P_0$, $D$ 바깥으로의 projection operator                       |
| $\mathbf{V}$                     | $P_0 V P_0$의 $g \times g$ matrix, 원소는 $\bra{m^{(0)}}V\ket{m'^{(0)}}$ |
| $\Delta_l^{(1)}, \Delta_l^{(2)}$ | 1차, 2차 energy shift                                                  |
| $v_i$                            | $P_0 V P_0$의 eigenvalue                                              |
| $\Delta_{li}^{(1)}$              | $\Delta_{li}^{(1)} = v_i$, 본문에서 $v_i$ 대신 사용                          |
| $\ket{l_i^{(0)}}$                | $P_0 V P_0$의 eigenvector                                             |
| $E_i^{(1)}$                      | 1차까지의 eigenenergy, $E_i^{(1)} = E_D^{(0)} + \lambda v_i$             |

## 1. Nondegenerate 공식이 실패하는 이유와 "좋은 상태"의 필요성

Nondegenerate 공식은 1차부터 아래 식을 포함한다. 

$$
\frac{V_{nk}}{E_n^{(0)} - E_k^{(0)}}
\tag{5.74}
$$
이게 문제가 되는 경우는 $E_n^{(0)} - E_k^{(0)} =0$ 이 되어 발산하는 경우다. 
Nondegenerate할 때는 다른 eigenstate이면 무조건 energy level이 다르기 때문에 이런 비극이 일어나지 않았다. 
그러나 degenerate할 경우, 얼마든지 다른 상태의 에너지가 같을 수 있다. 

분모가 0이 되는 것은 필연이다. 그러면 이것을 해결하는 방법은 **분자 또한 0으로 만드는 것이다.** 
이는 곧 **$V$를 대각화** 하는 것을 의미한다. 
우리는 **$V$를 대각화하는 ket**을 degenerate subspace 내부에서 찾아야 한다. 

$V$를 대각화하는  [[양자 필기 - Two-Fold Degenerate Perturbation Theory#1. Nondegenerate perturbation theory가 실패하는 이유|degenerate subspace]] 내부 ket은 "degenerate perturbation theory를 쓰기에 **좋은 상태**"이기 때문에, 우리는 이것을 **Good state**라고 부른다. 

## 2. Degenerate subspace 안에서의 basis 선택
앞으로 degenerate subspace를 $D$ 라고 부르겠다. $D$의 차원은 $g$이다. 

$D$ 내부의 ket은 모두 $H_0$에 대해 에너지 $E_D^{(0)}$를 가진다. 

$$
H_0 \ket{m^{(0)}} = E_D^{(0)} \ket{m^{(0)}} \qquad \text{if } \ket{m^{(0)}} \in D
$$

Good state는 $\ket{l^{(0)}}$라고 부르겠다. 
이는 $D$를 이루는 basis ($H^0$의 eigenstate이자 degenerate한 것)의 선형 합으로 나타낼 수 있다. 


$$
\ket{l^{(0)}} = \sum_{m \in D} \braket{m^{(0)}|l^{(0)}} \ket{m^{(0)}}
$$

$\ket{l^{(0)}}$ 역시 $H_0$에 대해 eigen energy $E_D^{(0)}$을 가진다. 

$$
H_0 \ket{l^{(0)}} = E_D^{(0)} \ket{l^{(0)}}
$$

## 3. Projection operator를 이용한 Schrödinger equation 분리

### 핵심 연산자 정의

Perturbation이 켜지면, 즉 $\lambda$가 0보다 커지면 $\ket{l^{(0)}}$가 $\lambda$에 대한 함수 $\ket{l}$이 된다. 

$\ket{l}$은 perturbation이 있는 hamiltonian $H_0 + \lambda V$ 의 eigenket이며, eigenvalue로 $E$를 가진다. 
$$
0 = (E - H_0 - \lambda V)\ket{l}
$$
이것을 더 쉽게 전개하기 위하여, 우리는 $D$ 에 대한 projection operator $P_0$를 정의한다. 
이 연산자는 $D$에 속하는 ket은 그대로 반환(통과) 시키지만, $D$ 밖에 있는 ket은 걸러내어 0으로 만든다. 

$$
P_0 = \sum_{m \in D} \ket{m} \bra{m}
$$
$D^C$에 대한 연산자 $P_1$도 정의하자. 이는 $P_0$과는 반대로,  $D$에 속하는 ket은 걸러내어 0으로 만들고, $D$ 밖에 있는 ket은 그대로 통과시킨다. 
$$
P_1 = \mathbf{1} - P_0
$$
따라서 $P_0$과 $P_1$는 마치... 계란 노른자와 흰자를 분리하는 도구 같은 거다. 

### 재료 손질

왜 우리는 굳이 흰자와 노른자를 구별해야 하는가? 그것은 $\lambda$가 켜짐에 따라 $\ket{l}$이 어떻게 변화하는지 보기 위해서이다. 
$\ket{l}_0$은 원래 노른자 ($D$ 성분)밖에 없었다. 그러나 $\lambda$가 커짐에 따라, 원래는 가지고 있지 않던 흰자($D^C$성분)도 포함하기 시작할 것이다. 

노른자 분리기를 이용하여 이 변화를 잘 관찰해 보자. 
$$
\ket{l} = \mathbf{1}\ket{l} = P_0\ket{l} + P_1\ket{l}
$$

$P_0\ket{l}$는 여전히 $D$안의 ket이기 때문에 $H_0$에 대한 eigen energy가 $E_D^{(0)}$일 것이다. 
$$
0 = (E - H_0 - \lambda V)\ket{l} = (E - E_D^{(0)} - \lambda V)P_0\ket{l} + (E - H_0 - \lambda V)P_1\ket{l}
\tag{5.75}
$$
이 식을 다시 노른자 흰자 분리기에 넣을 것이다. 
노른자 성분 $P_0\ket{l}$에 $V$가 적용되면 또 흰자와 노른자가 섞인 무언가가 될 것이기 때문. 
$P_1\ket{l}$ 도 마찬가지, $V$에 적용되면 노른자 성분을 가질 수도 있다. 



먼저 (5.75)의 노른자 성분을 알아보자.
맨 우변의 왼쪽에 $P_0$ 연산자를 취한다. 
$E - H_0$는 $P_0$와 commute한다. $D$ 공간은 $H_0$의 eigenket으로 이루어 졌으니까. 
$V$는 아마도 $P_0$와 commute하지 않을 것이다. 
$P_0P_1 = 0$이다. 이 점을 이용하면, 
$P_0(E - H_0 - \lambda V)P_1\ket{l} = -\lambda P_0VP_1\ket{l}$ 만 남는다, 

그러면 식 (5.75)의 노른자 성분은,
$$
(E - E_D^{(0)} - \lambda P_0 V)P_0\ket{l} - \lambda P_0 V P_1\ket{l} = 0
\tag{5.76}
$$

그 다음 (5.75)의 흰자 성분을 알아보자.
맨 우변의 왼쪽에 $P_1$ 연산자를 취한다. 
$P_1$또한 $H_0$와 commute한다.  $D^C$ 공간도 $H_0$의 eigenket으로 이루어 졌으니까. 
$P_1(E - E_D^{(0)} - \lambda V)P_0\ket{l}  = - \lambda P_1 VP_0\ket{l}$이 될 것이고,  
그러면 식 (5.75)의 흰자 성분은,

$$
-\lambda P_1 V P_0\ket{l} + (E - H_0 - \lambda P_1 V)P_1\ket{l} = 0
\tag{5.77}
$$
### 흰자의 1st correction term, $P_1\ket{l^{(1)}}$ 구하기

(5.77)을 분수 형태로 쓸 수 있다. 
$$
P_1\ket{l} = P_1 \frac{\lambda}{E - H_0 - \lambda P_1 V P_1} P_1 V P_0\ket{l}
\tag{5.78}
$$
분모가 0이 되지 않을 것이라 안심이다. 왜냐면 $E$의 값은 $E_D^{(0)}$과 가까울 텐데, $P_1 H_0 P_1$의 값은 $E_D^{(0)}$와 다르기 때문이다. 

원래 하던 것 처럼 $\ket{l}$를 $\lambda$에 대한 함수로 expansion하고, 

$$
\ket{l} = \ket{l^{(0)}} + \lambda\ket{l^{(1)}} + \cdots
$$
(5.78)에 대입한 다음, $\lambda$에 대해 같은 차수의 항을 모아 좌변과 우변을 비교한다. 

$P_1 \ket{l^{0}} = 0$ 임을 고려, (5.78)의 좌항에 있는 $\ket{l}$에 위를 대입하면, $\lambda P_{1}|l^{(1)}\rangle$ 부터 시작한다. 
그럼 (5.78)의 $\lambda$ 1차항은 무엇인가?
먼저, $\frac{\lambda}{E - H_0 - \lambda P_1 V P_1}$의 $\lambda$ 차수부터 정리해 준다. 분모의 $\lambda$가 있는 게 문제이기 때문
일반식, $\frac{1}{A-\lambda B}$를 등비급수의 합으로 전개하면, 
$$
\frac{1}{A-\lambda B} = \frac{1}{A} \cdot \frac{1}{1 - \lambda B\frac{1}{A}} = \frac{1}{A}  \sum_{n=0}^{\infty}\left(\lambda B\frac{1}{A}\right)^n = \frac{1}{A} + \frac{1}{A}B\frac{1}{A}\lambda + O(\lambda^2)
$$
이므로, 
(5.78) 우변의 $\lambda$ 1차항만 계산하고 싶다면 $P_1 \frac{\lambda}{E - H_0 } P_1 V P_0\ket{l^0}$만 계산하면 된다. 
앞에 이미 $\lambda$가 곱해져 있으므로, 나머지는 lowest order로 바꿔도 된다. 즉 $E \to E_D^{(0)}$. 
$$
P_1 \frac{\lambda}{E - H_0 } P_1 V P_0\ket{l^0} = \sum_{k \notin D} \frac{\lambda}{E -H_0} \ket{k^{(0)}} \bra{k^{(0)}} V \ket{l^0} = \lambda \sum_{k\not\in D}\frac{|k^{(0)}\rangle V_{k l}}{E_{D}^{(0)}-E_{k}^{(0)}}
$$
결론, 식 (5.78)에서 구할 수 있는  $\lambda$ 1차식으로부터 아래 관계식을 얻는다. 

$$P_{1}|l^{(1)}\rangle=\sum_{k\not\in D}\frac{|k^{(0)}\rangle V_{k l}}{E_{D}^{(0)}-E_{k}^{(0)}}. \tag{5.79}$$

$\ket{l}$의 흰자 부분의 1st order correction을 구했다. 
### 1st energy correction, $\Delta_l^{(1)}$ 구하기 

이제 노른자 성분, $P_0\ket{l}$을 구하기 위해 (5.78) $P_1\ket{l} = P_1 \frac{\lambda}{E - H_0 - \lambda P_1 V P_1} P_1 V P_0\ket{l}$을 
(5.76) $(E - E_D^{(0)} - \lambda P_0 V)P_0\ket{l} - \lambda P_0 V P_1\ket{l} = 0$에 대입한다. 
그러면 식 전체를 $P_0\ket{l}$에 대해 정리할 수 있다. 

$$\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}-\lambda^{2}P_{0}V P_{1}\frac{1}{E-H_{0}-\lambda V}P_{1}V P_{0}\right)P_{0}|l \rangle=0.\tag{5.80}$$


> [!note] (5.80)의 $\lambda^2$ 항은 왜 (5.81)에서 사라지는가
> (5.80)의 괄호 안에서 $E - E_D^{(0)}$을 뺀 나머지를 $D$ 안에서 작용하는 $g \times g$ **effective Hamiltonian**으로 본다.
> 
> $$
> H_{\text{eff}} = \underbrace{\lambda P_0 V P_0}_{O(\lambda)} + \underbrace{\lambda^2 P_0 V P_1 \frac{1}{E - H_0 - \lambda V} P_1 V P_0}_{O(\lambda^2)\;\equiv\;\lambda^2 U}
> $$
> 
> $\lambda^2 U$ 항 자체는 $\lambda$에 대한 1차식이 **아니다.** 이 항은 energy에는 $O(\lambda^2)$로, eigenvector에는 $O(\lambda)$로 기여한다. Eigen vector에는 1차 항으로 작용한다는 게 신기한 부분, 왜일까?
> 
> **Eigenvector:** $\lambda P_0 V P_0$를 unperturbed 부분, $\lambda^2 U$를 perturbation으로 보자. $\lambda P_0 V P_0$의 eigenvalue는 $\lambda v_i$이므로 **level spacing이 $\lambda(v_i - v_j)$, 즉 $O(\lambda)$**이다. 원래 degenerate였기 때문에 spacing이 작다. Nondegenerate perturbation theory를 적용하면
> 
> $$
> \delta\left(P_0\ket{l_i^{(0)}}\right) = \sum_{j \neq i} P_0\ket{l_j^{(0)}} \frac{\bra{l_j^{(0)}}\lambda^2 U\ket{l_i^{(0)}}}{\lambda v_i - \lambda v_j} = \lambda \sum_{j \neq i} P_0\ket{l_j^{(0)}} \frac{U_{ji}}{v_i - v_j}
> $$
> 
> 분자의 $\lambda^2$를 분모의 $\lambda$가 하나 상쇄해서 $O(\lambda)$가 남는다. 그래서 eigenvector를 order $\lambda$까지 구할 때는 이 항을 살려야 한다. → (5.85)~(5.87)
> 
> | | Energy 보정 | Eigenvector 보정 |
> |---|---|---|
> | $\lambda^2 U$ 항의 기여 | $O(\lambda^2)$ → (5.81)에서 버림 | $O(\lambda^2)/O(\lambda) = O(\lambda)$ → (5.86)에서 살림 |



험험... 아무튼 그렇다고 한다. 위 박스 속 내용을 완전히 이해할 필요는 없다. 
교과서에서 고작 한 줄로 적어서 이해 안 되었던 부분을 AI한테 물어보니 저렇게 답변해줬다. 

아무튼 결론은, $\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}-\lambda^{2}P_{0}V P_{1}\frac{1}{E-H_{0}-\lambda V}P_{1}V P_{0}\right)P_{0}|l \rangle=0$ 에서 eigen energy를 구할 때는 $\lambda$ 1차까지 신뢰할 수 있고, eigen vector를 구할 때는 $\lambda$ 0차항 까지 신뢰할 수 있다는 것이다. 

그럼 일단 1st order energy correction을 구해보자. 식 (5.80) $\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}-\lambda^{2}P_{0}V P_{1}\frac{1}{E-H_{0}-\lambda V}P_{1}V P_{0}\right)P_{0}|l \rangle=0$ 에서 $\lambda$ 2차항을 버리면 그냥 
$\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}\right)P_{0}|l \rangle=0$

$$(E-E_{D}^{(0)}-\lambda P_{0}V P_{0})(P_{0}|l^{(0)}\rangle)=0. \tag{5.81}$$
이제부터 서로 다른 good state를 구별하기 위해 $l_i^{(0)}$라고 lower index를 쓰겠다. 

(5.81)을 잘 보면 이거 고윳값 방정식이다. 
$P_{0}|l_i^{(0)}\rangle$가 $\lambda P_{0}V P_{0}$의 eigenvector이며, eigenvalue는 $E_i-E_{D}^{(0)} \approx \lambda \Delta_{li}^{(1)}$, 즉 1st order energy correction이다. 
그러나 주목해야 할 점이 있다면, 벡터와 행렬 $V$ 모두 $D$ space에 한정되어 있다는 것이다. 
즉, $P_{0}V P_{0}$는 원래의 $V$에서 reduce 된 $g \times g$ matrix이다. 그리피스 교과서책에서는 $W$ matrix라고 불렀던 바로 그것이다. 

고윳값 방정식을 행렬로 명시적으로 표현하면, 
$$
(P_0 V P_0) \ket{l_i^{(0)}} = \Delta_{li}^{(1)}\ket{l_i^{(0)}}
$$
==Good state라는 것은 $W = P_0 V P_0$의 eigenvector라는 것을 알 수 있다.==


결국, 1st order energy correction은 그저 $V$를 good state로 보쌈한 것이라는 걸 알 수 있다. 

$$
\Delta_l^{(1)} = \bra{l^{(0)}}V\ket{l^{(0)}}
\tag{5.84}
$$

1st order energy correction이 $V$ perturbation에 대한 expectation value라는 점은 nondegenerate이나, degenerate이나 똑같다. 외우기 쉽다!

## 노른자의 1st order correction, $P_0\ket{l_i^{(1)}}$ (제일 어려움)

다시 식 (5.80)을 보자. 
$\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}-\lambda^{2}P_{0}V P_{1}\frac{1}{E-H_{0}-\lambda V}P_{1}V P_{0}\right)P_{0}|l \rangle=0$

$\frac{1}{E-H_{0}-\lambda V} \approx \frac{1}{E_D^{(0)}-H_{0}-\lambda V + \lambda \Delta_{li}^{(1)}}$

분모에 있는 $\lambda$ 1차항은 버리자. 앞서 파란 박스에서 논의한 바에 따르면 $\lambda^2 P_{0}V P_{1}\frac{1}{E_D^{(0)}-H_{0}}P_{1}V P_{0}$은 $\lambda$의 1차항처럼 작용할 것이다. 

$$
\left( E - E_D^{(0)} - \lambda P_0 V P_0 - \lambda^2 P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 \right) P_0\ket{l} = 0
\tag{5.85}
$$
**그리고 이 식 자체에 nondegenerate perturbation theory를 적용한다!!!**
**$P_0\ket{l}$에 대해 푼다!!!**

처음에 무슨 말인지 정말 이해가 되지 않았다. 
교과서에서 영어 문장 한 줄로 설명을 하고 넘어갔으니까!

나는 저자보다 더 잘 설명할 자신 있다. 
프라임을 붙여서 원래 표기와 구분하겠다. 

마치 $\lambda P_0 V P_0 = H'_0$ 이고, $\lambda^2 P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 = \lambda V'$ 이고, $\ket{n^{(0)}}$는 $P_0\ket{l_i^{(0)}}$인 것 처럼 푸는 것이다. 

$H_0' \ket{l_i^{(0)}} = \lambda \Delta_{li}^{(1)}  \ket{l_i^{(0)}}$ ,  $\lambda P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 = V'$을 이용해서, nondegenerate perturbation theory의 공식

$$
\ket{n^1} = \sum_{k\neq n}\frac{\bra{k^0}V\ket{n^0}}{E_n^0 - E_k^0}\ket{k^0}
$$
을 지금 상황에 맞춰 변형하면,  ($P_0$를 적용하는 것을 잊지 말자!)

$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{\bra{l_j^{(0)}} P_0 V'P_0\ket{l_i^{(0)}}}{\lambda \Delta_{li}^{(1)}  - \lambda \Delta_{lj}^{(1)} } P_0\ket{l_j^{(0)}}
$$
$\lambda^2 P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 = \lambda V'$를 대입하고, 분모 분자의 $\lambda$를 약분, 


$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{P_0\ket{l_j^{(0)}}}{\Delta_{li}^{(1)}  -  \Delta_{lj}^{(1)}} \bra{l_j^{(0)}} V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V \ket{l_i^{(0)}}
\tag{5.86}
$$
이런 게 나온다~! (교과서하고 notation이 살짝 다르다)
$P_1$을 summation으로 표현하면 결국,
$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{P_0\ket{l_j^{(0)}}}{\Delta_{li}^{(1)}  -  \Delta_{lj}^{(1)}} \sum_{k \notin D} \bra{l_j^{(0)}}V\ket{k} \frac{1}{E_D^{(0)} - E_k} \bra{k}V\ket{l_i^{(0)}}
\tag{5.87}
$$


## 6. 2차 energy shift, $\Delta_l^{(2)}$
$\ket{l_i^{(1)}}$을 완전히 알게 되었으니, $\Delta_l^{(2)}$도 구할 수 있다. 
Nondegenerate perturbation theory에서 유도했던, 

$$
\Delta_n^{N} = \bra{n^{(0)}} V \ket{n^{(N-1)}}
$$
을 지금도 활용할 수 있기 때문이다. 


$$
\Delta_l^{(2)} = \bra{l^{(0)}}V\ket{l^{(1)}} = \bra{l^{(0)}}V P_1\ket{l^{(1)}} + \bra{l^{(0)}}V P_0\ket{l^{(1)}}
$$
이때, 두 번째 항이 0임을 알 수 있다. 예전에 배웠듯, $\braket{l^{(1)}|l^{(0)}} = 0$임을 잊지 말자. 

$$
\bra{l^{(0)}}V P_0\ket{l^{(1)}} = \bra{l^{(0)}}P_0 V P_0\ket{l^{(1)}} = \Delta_l^{(1)}\braket{l^{(0)}|l^{(1)}} = 0
$$
첫 번째 등호는 $P_0\ket{l^{(0)}} = \ket{l^{(0)}}$를 이용해 $P_0$를 하나 더 끼워 넣은 것이다. 두 번째 등호는 $P_0VP_0$가 Hermitian이고 $\bra{l^{(0)}}$가 그 eigen-bra이기 때문이다. 
주의: $\ket{l^{(0)}}$는 $V$가 아니라 **$P_0VP_0$의** eigenvector다. $P_0$와 $V$는 commute하지 않으므로 $V\ket{l^{(0)}} \neq \Delta_l^{(1)}\ket{l^{(0)}}$이다.

$$
\Delta_l^{(2)}= \bra{l^{(0)}}V P_1\ket{l^{(1)}} 
$$
$$
P_{1}|l^{(1)}\rangle=\sum_{k\not\in D}\frac{|k^{(0)}\rangle V_{k l}}{E_{D}^{(0)}-E_{k}^{(0)}}. \tag{5.79}
$$


끝!!! 이제 진짜 끝!! 휴!
$$
\Delta_l^{(2)} = \sum_{k \notin D} \frac{|V_{kl}|^2}{E_D^{(0)} - E_k^{(0)}}
\tag{5.88}
$$



## 7. Degenerate perturbation theory의 절차 요약
### 도구 준비

$D$: degenerate space, 이 안에 사는 ket을 **노른자**라고 부른다. 
$D^C$: 여기 있는 ket을 **흰자**라고 부른다. 

노른자 필터, $D$를 위해.
$$
P_0 = \sum_{m \in D} \ket{m} \bra{m}
$$
흰자 필터, $D^{C}$를 위해. 
$$
P_1 = \mathbf{1} - P_0
$$

### 재료 손질
슈방에 노른자와 흰자를 따로 넣는다. (노른자인지 도른자인지 알 수 없는)
$$
0 = (E - H_0 - \lambda V)\ket{l} = (E - E_D^{(0)} - \lambda V)P_0\ket{l} + (E - H_0 - \lambda V)P_1\ket{l}
\tag{5.75}
$$

그 결과를 노른자 필터로 한번 거른다. 이를 **'슈방의 노른자'** 라고 부른다. 
$$
(E - E_D^{(0)} - \lambda P_0 V)P_0\ket{l} - \lambda P_0 V P_1\ket{l} = 0
\tag{5.76}
$$
한 켠으로는, 흰자 필터로 한 번 거른다. 
$$
-\lambda P_1 V P_0\ket{l} + (E - H_0 - \lambda P_1 V)P_1\ket{l} = 0
\tag{5.77}
$$
위를 분수 형태로 써서 준비해둔다. 이를 **'슈방의 흰자'** 라고 부른다. 
$$
P_1\ket{l} = P_1 \frac{\lambda}{E - H_0 - \lambda P_1 V P_1} P_1 V P_0\ket{l}
\tag{5.78}
$$


### 1st order energy correction, $\Delta_l^{(1)}$ 구하기,  동시에 good state $\ket{l^{(0)}}$ 구하기
(학부때는 이것만 알아도 괜찮았지!)

슈방의 노른자와 흰자를 섞어야 한다. 

슈방의 흰자를 슈방의 노른자에 대입, 이를 **슈방 계란물**이라고 부른다. 

$$\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}-\lambda^{2}P_{0}V P_{1}\frac{1}{E-H_{0}-\lambda V}P_{1}V P_{0}\right)P_{0}|l \rangle=0.\tag{5.80}$$

$\lambda$ 2차항을 날려

$$(E-E_{D}^{(0)}-\lambda P_{0}V P_{0})(P_{0}|l^{(0)}\rangle)=0. \tag{5.81}$$

$P_{0}V P_{0}$는 원래의 $V$에서 reduce 된 $g \times g$ matrix이다. Good state는 $P_{0}V P_{0}$의 eigenstate이다. 
Eigenvalue는 자연스럽게 $\Delta_l^{(1)}$가 된다. 

$$
\boxed{\quad (P_0 V P_0) \ket{l_i^{(0)}} = \Delta_{li}^{(1)}\ket{l_i^{(0)}} \quad}
$$
고윳값 방정식
$$
\Delta_{li}^{(1)} = \bra{l_i^{(0)}}V\ket{l_i^{(0)}}
\tag{5.84}
$$


### 흰자의 1st correction term, $P_1\ket{l^{(1)}}$ 구하기
늘 하던 것처럼 perturbed ket을 $\lambda$에 대해 expansion

$$
\ket{l} = \ket{l^{(0)}} + \lambda\ket{l^{(1)}} + \cdots
$$
위를 슈방의 흰자에 대입
$$
\frac{1}{A-\lambda B} = \frac{1}{A} \cdot \frac{1}{1 - \lambda B\frac{1}{A}} = \frac{1}{A}  \sum_{n=0}^{\infty}\left(\lambda B\frac{1}{A}\right)^n = \frac{1}{A} + \frac{1}{A}B\frac{1}{A}\lambda + O(\lambda^2)
$$
위 꼼수를 이용해 더러운 분수 부분의 0차항만 쓴다. 앞에 이미 $\lambda$가 곱해져 있으므로 $E \to E_D^{(0)}$ (lowest order). 

$$
P_1 \frac{\lambda}{E - H_0 } P_1 V P_0\ket{l^0} = \sum_{k \notin D} \frac{\lambda}{E -H_0} \ket{k^{(0)}} \bra{k^{(0)}} V \ket{l^0} = \lambda \sum_{k\not\in D}\frac{|k^{(0)}\rangle V_{k l}}{E_{D}^{(0)}-E_{k}^{(0)}}
$$

정리하면, 

$$P_{1}|l^{(1)}\rangle=\sum_{k\not\in D}\frac{V_{k l}}{E_{D}^{(0)}-E_{k}^{(0)}}\ket{k^0} \tag{5.79}$$
[[QM lecture note - Time-Independent Nondegenerate Perturbation Theory|nondegenerate perturbation theory]]에서 배운 $\ket{n^1} = \sum_{k\neq n}\frac{V_{kn}}{E_n^0 - E_k^0}\ket{k^0}$ 과 비교해 보아라. 똑같지?
그저 흰자이기 때문에 흰자속 basis ket의 조합으로 만들어 진다는 제한이 추가되었을 뿐이다. 

### 노른자의 1st order correction, $P_0\ket{l_i^{(1)}}$ (제일 어려움)
다시 슈방 계란물을 준비

$$
\left(E-E_{D}^{(0)}-\lambda P_{0}V P_{0}-\lambda^{2}P_{0}V P_{1}\frac{1}{E-H_{0}-\lambda V}P_{1}V P_{0}\right)P_{0}|l \rangle=0.\tag{5.80}
$$
$$
\frac{1}{E-H_{0}-\lambda V} \approx \frac{1}{E_D^{(0)}-H_{0}-\lambda V + \lambda \Delta_{li}^{(1)}} \approx \frac{1}{E_D^{(0)}-H_0}
$$
$$
\left( E - E_D^{(0)} - \lambda P_0 V P_0 - \lambda^2 P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 \right) P_0\ket{l} = 0
\tag{5.85}
$$
**그리고 이 식 자체에 nondegenerate perturbation theory를 적용한다!!!**
$\lambda P_0 V P_0 = H'_0$ 
$\lambda^2 P_0 V P_1 \frac{1}{E_D^{(0)} - H_0} P_1 V P_0 = \lambda V'$
$\ket{n^{(0)}} = P_0\ket{l_i^{(0)}}$

$$
\ket{n^1} = \sum_{k\neq n}\frac{\bra{k^0}V\ket{n^0}}{E_n^0 - E_k^0}\ket{k^0}
$$

$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{\bra{l_j^{(0)}} P_0 V'P_0\ket{l_i^{(0)}}}{\lambda \Delta_{li}^{(1)}  - \lambda \Delta_{lj}^{(1)} } P_0\ket{l_j^{(0)}}
$$
$$
P_0\ket{l_i^{(1)}} = \sum_{j \neq i} \frac{P_0\ket{l_j^{(0)}}}{\Delta_{li}^{(1)}  -  \Delta_{lj}^{(1)}} \sum_{k \notin D} \bra{l_j^{(0)}}V\ket{k} \frac{1}{E_D^{(0)} - E_k} \bra{k}V\ket{l_i^{(0)}}
\tag{5.87}
$$

### 2nd order energy shift, $\Delta_l^{(2)}$, 흰자만 쓴다

$$
\Delta_l^{(2)}= \bra{l^{(0)}}V P_1\ket{l^{(1)}} 
$$
$$
\Delta_l^{(2)} = \sum_{k \notin D} \frac{|V_{kl}|^2}{E_D^{(0)} - E_k^{(0)}}
\tag{5.88}
$$

# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]

# 다음 강의
[[QM lecture note - Linear Stark Effect]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.2

# 원본 필기 이미지
요즘은 바로 obsidian에 쓰는 편이다. 