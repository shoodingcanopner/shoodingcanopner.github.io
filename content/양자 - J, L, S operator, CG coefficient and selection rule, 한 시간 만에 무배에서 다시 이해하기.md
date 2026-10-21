---
title: J, L, S operator and selection rule
date: "2026-10-20"
subject: quantum mechanics
tags:
  - study
  - concept
class: study
---
> [!info] 관련 노트
> 과목 노트: [[양자물리 (학부용, Griffiths)]]
> Sakurai 정리: [[QM lecture note - Rotation and Angular Momentum]]

| Symbol | Meaning |
|--------|---------|
| $\vec{J}$ | total angular momentum, 일반적인 rotation generator |
| $\vec{L}$ | orbital angular momentum, $\vec{r}\times\vec{p}$ |
| $\vec{S}$ | spin angular momentum |
| $j, m$ | $J^2$, $J_z$의 eigenvalue를 나타내는 quantum number |
| $J_\pm$ | ladder operator |
| $C^\pm_{jm}$ | ladder operator를 작용할 때 붙는 계수 |
| $\mathcal{D}(R)$ | rotation operator |
| $T^{(k)}_q$ | rank $k$ spherical tensor operator의 $q$ 성분 |
| $\langle \alpha', j' \Vert T^{(k)} \Vert \alpha, j \rangle$ | reduced matrix element |
| $\Pi$ | parity operator |
| $\braket{j_1, j_2; m_1, m_2 \vert j_1, j_2; j, m}$ | Clebsch–Gordan coefficient |

# $\vec{J}$ $\ket{j, m}$의 의미를 처음부터 고민해보자

## Operator $\vec{J}$는 무엇인가?
$\vec{J}$ operator는 일반적인 회전의 생성자이다. (rotation generator)
나중에 자세히 이야기하겠지만, $\vec{J}$ 는 $\vec{L}$과 $\vec{S}$의 **합(sum)**이다. 
$\vec{L}$과 $\vec{S}$는 서로 다른 공간에서 회전을 만든다. 정확히는 두 공간의 tensor product 위에서

$$
\vec{J} = \vec{L}\otimes\mathbb{1} + \mathbb{1}\otimes\vec{S}
$$

논의를 3차원에서의 회전으로 한정해 보자. $\vec{J} = \hat{x}J_x + \hat{y}J_y+ \hat{z}J_z$ 이렇게 벡터가 세 가지 요소로 이루어져 있다. 
$\vec{J}$ operator는 다음 commutation relation을 만족해야 한다. 

$$
[J_i, J_j] = i \hbar \epsilon_{ijk}J_k
$$

특이한 점은, 위 성질을 만족하는 $J_x, J_y, J_z$의 matrix가 $2 \times 2$, $3 \times 3$, $4\times 4$, ... 임의의 $(2j+1)\times(2j+1)$ 크기로 존재한다는 것이다. (아래에서 유도한다.)


## $\vec{J}$의 eigenket
아주 순수한 생각을 할 수 있다. Position eigenket을 정의할 때와 비슷하게, $\vec{J}$의 eigen ket을 이렇게 세 개의 eigenvalue를 가진 ket으로 정의해도 되지 않나?

$$
J_x\ket{m_x, m_y, m_z} = \hbar m_x\ket{m_x, m_y, m_z}
$$

$$
J_y\ket{m_x, m_y, m_z} =\hbar m_y\ket{m_x, m_y, m_z}
$$

$$
J_z\ket{m_x, m_y, m_z} = \hbar m_z\ket{m_x, m_y, m_z}
$$

그러나 이렇게 하면 $J$들이 서로 commute하지 않기 때문에 문제가 벌어진다. 
예를 들어, 

$$
[J_x,J_y]\ket{m_x, m_y, m_z} = \hbar^2(m_xm_y - m_y m_x)\ket{m_x, m_y, m_z} = 0
$$

이것은 $[J_x,J_y] = i \hbar J_z$와 모순이다. 원래대로라면 $i \hbar^2 m_z \ket{m_x, m_y, m_z}$가 되어야 하기 때문이다. 
모순을 피하려면 $m_z = 0$이어야 하고, 같은 논리를 다른 commutator에 적용하면 $m_x = m_y = m_z = 0$이 된다. 즉 이런 simultaneous eigenket은 $j=0$인 trivial한 상태밖에 없다.

이런 문제를 막기 위해, simultaneous eigenket은 서로 commute하는 operator의 eigenvalue 조합으로 정의해야 한다. 

그래서 우리는 보통 $\vec{J}$의 eigenket으로 $J^2$와 $J_z$의 eigenket을 사용한다. 
왜냐면 모든 $i$에 대해 $[J^2, J_i]=0$ 이기 때문이다. 

잠깐동안 아래 성질을 가지는 eigenket $\ket{a,b}$를 사용하자. 

$$
J^2 \ket{a,b} = a\ket{a,b}
$$

$$
J_z \ket{a,b} = b\ket{a,b}
$$

### Ladder operator

$$
J_\pm = J_x \pm iJ_y, \qquad J_\pm^\dagger = J_\mp
$$
$$
J_x = \frac{J_+ + J_-}{2}, \qquad  J_y = \frac{J_+ -J_-}{2i}
$$


이런 operator를 일단 정의해 두면, 이게 $\ket{a,b}$에 작용될 때 $b$값을 바꾼다는 걸 ==commutation relation==으로 유도할 수 있다. ($[J_z, J_\pm] = \pm\hbar J_\pm$)

$$
J_z(J_\pm\ket{a,b}) = ([J_z, J_\pm] + J_\pm J_z)\ket{a,b} = (b \pm \hbar)(J_\pm\ket{a,b})
$$

$J_\pm\ket{a,b}$ 가 여전히 $J_z$의 eigenket이면서, eigenvalue는 $b \pm \hbar$라는 걸 알 수 있다. 
Eigenvalue를 $\hbar$씩 오르내릴 수 있으므로 $J_\pm$를 ladder operator라고 부른다. 

덧붙여, $J_\pm\ket{a,b}$는 여전히 $J^2$의 eigenket이기도 하다. 
당연하다. $[J^2, J_\pm]=0$ 이기 때문이다. 

$J^2$을 $J_\pm\ket{a,b}$ 에 적용하면

$$
J^2(J_\pm\ket{a,b}) = J_\pm(J^2\ket{a,b}) = a(J_\pm\ket{a,b})
$$

$a$값이 보존된다는 것을 알 수 있다. 
이를 이용해서, $\ket{a,b}$에다가 $J_x, J_y, J_z$를 어떤 조합으로 적용해도 $a$값을 바꿀 수 없음을 알 수 있다. 

$$
J_x = \frac{J_+ + J_-}{2}, \qquad J_y = \frac{J_+ - J_-}{2i}
$$

임을 이용하고, $J_\pm$가 $a$값을 보존한다는 걸 생각하면... 당연한 결과다. 
($a$는 각운동량의 크기와 직결된다. 회전 연산은 각운동량의 크기를 보존한다. 좌표 축을 어떻게 돌려서 관찰하든, 물체의 회전 속도는 같으니까.)

$J_\pm\ket{a,b}$가 여전히 eigenket임은 알지만, 변환될 때 계수가 어떻게 붙는지는 아직 모른다. 

$$
J_\pm\ket{a,b} = C_\pm\ket{a, b \pm \hbar}
$$

$C_\pm$는 나중에 유도한다. 

### $a \geq b^2$의 증명
$a$와 $b$는 서로 무관하지 않다. 
Commutation relation에 따라오는 아래 식을 이용하면, 

$$
J^2 - J_z^2 = J_x^2 + J_y^2 = \frac{1}{2}(J_+J_- + J_-J_+) = \frac{1}{2}(J_-^\dagger J_- + J_+^\dagger J_+)
$$

이것의 기댓값을 구하면,

$$
\bra{a,b}J^2 - J_z^2\ket{a,b} = \frac{1}{2}\left\{\bra{a,b}J_-^\dagger J_-\ket{a,b} + \bra{a,b}J_+^\dagger J_+\ket{a,b}\right\}
$$

우변의 $\left\{\bra{a,b}J_-^\dagger J_-\ket{a,b} + \bra{a,b}J_+^\dagger J_+\ket{a,b}\right\}$은 $J_-\ket{a,b}$의 norm 제곱과  $J_+\ket{a,b}$의 norm 제곱의 합이므로 무조건 $\geq 0$이다. 

$$
\bra{a,b}J^2 - J_z^2\ket{a,b} = a - b^2
$$

따라서:

$$
a - b^2 \geq 0
$$

$a$와 $b$는 실수이므로 $a \geq b^2 \geq 0$, 즉 $a$는 음수가 될 수 없고

$$
\sqrt{a} \geq b \geq -\sqrt{a}
$$

이렇게 $b$의 값은 $a$로 인해 상한과 하한이 결정된다. 

### $b_{\max}$와 $b_{\min}$의 결정
그러면 $b_{\max}$와 $b_{\min}$가 뭔지 알아보자. 

가능한 $b$의 값 중에서 최대 값을 가진 ket을 상정해 보자. 
이것을 raising operator로 올리면, 그냥 0, 상태가 없어진다.  

$$
J_+\ket{a, b_{\max}} = 0 \quad \Rightarrow \quad J_-J_+\ket{a, b_{\max}} = 0
$$

$J_-J_+$를 $J_z$에 대해 나타낼 수 있다. 

$$
J_-J_+ = (J_x - iJ_y)(J_x + iJ_y) = J_x^2 + J_y^2 + i[J_x, J_y] = J^2 - J_z^2 - \hbar J_z
$$

이를 아까 상정한 ket에 적용하면, 

$$
J_-J_+\ket{a, b_{\max}} = (a - b_{\max}^2 - \hbar\,b_{\max})\ket{a, b_{\max}} = 0
$$

$$
\therefore\quad a = b_{\max}(b_{\max} + \hbar)
$$

같은 전개로:

$$
J_+J_- = J^2 - J_z^2 + \hbar J_z
$$

$$
a - b_{\min}^2 + \hbar\,b_{\min} = 0 \quad \Rightarrow \quad a = b_{\min}(b_{\min} - \hbar)
$$

두 식을 비교하면 $b_{\max}(b_{\max}+\hbar) = b_{\min}(b_{\min}-\hbar)$이고, 이 식의 해는 $b_{\min} = -b_{\max}$와 $b_{\min} = b_{\max}+\hbar$ 두 개다. 
후자는 $b_{\min} \leq b_{\max}$에 모순이므로 버린다. 

$$
b_{\min} = -b_{\max}
$$

Ladder operator는 $b$값을 $\hbar$씩 바꾸기 때문에, $\ket{a, b_{\min}}$에서 출발해 $J_+$를 반복해서 걸면 정확히 $\ket{a, b_{\max}}$에 도달해야 한다. (그렇지 않으면 $b_{\max}$를 지나쳐 버려 $a \geq b^2$이 깨진다.) 
따라서 $b_{\max} - b_{\min} = n\hbar$ ($n = 0, 1, 2, \dots$)이고, $b$가 가질 수 있는 값은 총 $n+1$가지이다. 

$$
b_{\max} - b_{\min} = 2b_{\max} = n\hbar \quad\Rightarrow\quad b_{\max} = \frac{n}{2}\hbar
$$

### 이제 양자수 $j$를 정의할 수 있다
$J_z$로 구별 가능한 상태의 수는 $n+1$개이다. 이 $n$의 절반을 양자수 $j$로 정의하자. 

$$
j = \frac{b_{\max}}{\hbar} = \frac{n}{2}
$$

$n$이 홀수면 $j$는 half integer, 짝수면 $j$는 integer. 총 $2j + 1$개의 state가 존재.

$j$는 총 각운동량의 크기를 나타내기도 한다. 

$$
a = b_{\max}(b_{\max} + \hbar) = j(j+1)\hbar^2
$$

### 양자수 $m$
$b$를 이용해 양자수 $m$을 정의하자. 

$$
b = m\hbar, \qquad m = -j, -j+1, \dots, j-1, j
$$

정리하면, 각운동량에 대한 eigenket을 이렇게 정의할 수 있다. 

$$
\boxed{\quad J^2\ket{j,m} = j(j+1)\hbar^2\ket{j,m}\quad}
$$

$$
\boxed{\quad J_z\ket{j,m} = m\hbar\ket{j,m} \quad}
$$

### $C^+_{jm}$의 결정 (Raising operator)
아까 제대로 알아내지 못 했던 ladder operator를 사용했을 때 붙는 계수를 이제 구해 보자. 

$$
J_+\ket{j,m}  = C^+_{jm}\ket{j,m+1}
$$

양 변에 $\bra{j',m'}$를 적용하면,

$$
\bra{j',m'}J_+\ket{j,m} = C^+_{jm}\braket{j',m'|j,m+1} = C^+_{jm}\,\delta_{jj'}\,\delta_{m',m+1}
$$

$\bra{j',m'}J_-J_+\ket{j,m}$을 두 가지 방법으로 계산할 수 있다. 
하나는 두 ladder operator가 서로 hermitian conjugate임을 이용하는 것이다. $\bra{j',m'}J_+^\dagger = (J_+\ket{j',m'})^\dagger = (C^+_{j'm'})^*\bra{j',m'+1}$ 이므로

$$
\bra{j',m'}J_-J_+\ket{j,m} = \bra{j',m'}J_+^\dagger J_+\ket{j,m} = (C^+_{j'm'})^*\,C^+_{jm}\braket{j',m'+1|j,m+1} = |C^+_{jm}|^2\,\delta_{jj'}\,\delta_{m'm}
$$

다른 하나는 앞서 유도한 $J_-J_+ = J^2 - J_z^2 - \hbar J_z$ 을 이용하는 것이다. 

$$
\bra{j',m'}J^2 - J_z^2 - \hbar J_z\ket{j,m} = \{j(j+1)\hbar^2 - m^2\hbar^2 - m\hbar^2\}\,\delta_{jj'}\,\delta_{mm'}
$$

두 결과를 비교하면 $|C^+_{jm}|^2 = \hbar^2(j-m)(j+m+1)$이다. 
$C^+_{jm}$의 phase는 정해지지 않는데, 관례적으로 양의 실수로 고른다. (Condon–Shortley phase convention)

$$
\boxed{C^+_{jm} = \hbar\sqrt{(j-m)(j+m+1)}}
$$

### $C^-_{jm}$의 결정 (Lowering operator)

비슷한 방식으로:

$$
\bra{j',m'}J_+J_-\ket{j,m} = |C^-_{jm}|^2\,\delta_{jj'}\,\delta_{mm'} = \{j(j+1)\hbar^2 - m^2\hbar^2 + m\hbar^2\}\,\delta_{jj'}\,\delta_{mm'}
$$

$$
\boxed{C^-_{jm} = \hbar\sqrt{(j+m)(j-m+1)}}
$$

일반식

$$
\boxed{C^{\pm}_{jm} = \hbar\sqrt{(j\mp m)(j \pm m+1)}}
$$

$$
J_+\ket{j,m} = \hbar\sqrt{(j-m)(j+m+1)}\;\ket{j, m+1}
$$

$$
J_-\ket{j,m} = \hbar\sqrt{(j+m)(j-m+1)}\;\ket{j, m-1}
$$

$m = j$이면 $C^+_{jm} = 0$, $m=-j$이면 $C^-_{jm} = 0$이 되어 사다리가 양 끝에서 자연스럽게 끊긴다.

### $J^2$, $J_z$,  $J_\pm$의 행렬 원소
서로 다른 eigenket을 샌드위치

$$
\bra{j',m'}J^2\ket{j,m} = j(j+1)\hbar^2\,\delta_{jj'}\,\delta_{mm'}
$$

$$
\bra{j',m'}J_z\ket{j,m} = m\hbar\,\delta_{jj'}\,\delta_{mm'}
$$

$$
\bra{j',m'}J_\pm\ket{j,m} = \hbar\sqrt{(j\mp m)(j \pm m+1)}\, \delta_{jj'}\,\delta_{m', m\pm 1}
$$

### Total Angular Momentum을 바꾸지 않는 이유

$\mathcal{D}(R)$은 total angular momentum을 바꾸지 않는다. 논리의 순서는 이렇다. 
모든 성분에 대해 $[J^2, J_i] = 0$이므로, $J_i$들로 만들어진 rotation operator

$$
\mathcal{D}(R) = \exp\left(-\frac{i\,\vec{J}\cdot\hat{n}\,\phi}{\hbar}\right)
$$

와도 $[J^2, \mathcal{D}(R)] = 0$이다. 
따라서 $\ket{j,m}$과 $\mathcal{D}(R)\ket{j,m}$은 $J^2$에 대해 똑같은 eigenvalue $j(j+1)\hbar^2$을 가진다. 
회전은 같은 $j$ 안의 $2j+1$개 상태끼리만 섞을 뿐, 다른 $j$로 넘어가지 않는다. 

이 관계는 선운동에서 translation operator를 적용해도 momentum이 바뀌지 않는 것과 비슷하다. ($[\vec{p}, \mathcal{T}(\vec{a})] = 0$)

# 반정수 $j$와 정수 $j$
아까 commutation relation만으로 유도한 결과에서는 $j = 0, \frac{1}{2}, 1, \frac{3}{2}, \dots$ 가 모두 허용되었다. 
그런데 algebra가 허용한다고 해서 모든 $j$가 실제로 나타나는 것은 아니다. 
**$\vec{J}$가 무엇에 작용하는가**에 따라 허용되는 $j$가 갈린다. 

## $\vec{L}$: 정수만 허용된다
$\vec{L} = \vec{r}\times\vec{p}$는 $x, p$로 구체적으로 **만들어진** operator이고, 공간 위의 wavefunction $\psi(\vec{r})$에 미분 연산자로 작용한다. 
Spherical coordinate에서 

$$
L_z = -i\hbar\frac{\partial}{\partial\phi}
$$

이므로 eigenfunction은 $e^{im\phi}$이다. 
Wavefunction은 $\phi \to \phi + 2\pi$에서 원래대로 돌아와야 하므로 $m$은 정수여야 하고, 따라서 $l$도 정수만 허용된다. 


## $\vec{S}$: 반정수도 허용된다
$\vec{S}$는 $x, p$로 만들어진 게 아니라 **commutation relation만으로 정의된** operator이다. 
따라서 algebra가 허용하는 반정수 $j$를 막을 이유가 없다. 
$j = s = \frac{1}{2}$이면 $\vec{J} = \vec{S} = \frac{\hbar}{2}\vec{\sigma}$ (Pauli matrix)이다. 

반정수 spin의 가장 이상한 성질: $2\pi$ 회전에서 부호가 바뀐다. 

$$
\mathcal{D}(2\pi)\ket{\uparrow} = e^{-i 2\pi S_z/\hbar}\ket{\uparrow} = e^{-i\pi}\ket{\uparrow} = -\ket{\uparrow}
$$

원래 상태로 돌아오려면 $4\pi$ 회전이 필요하다. 
공간 wavefunction이었다면 이런 일은 허용되지 않는다. 이것이 spin을 "공간 속 무언가의 자전"으로 해석할 수 없는 이유이다. 

## SU(2)와 SO(3)
- SU(2)와 SO(3) group이 무엇인지 지금 자세히 알 필요는 없다. 그냥 이 두 가지 개념(연산의 집합)이 있다는 것을 알면 된다. 
- **Group 수준**에서는 다르다. SU(2)는 SO(3)의 double cover이다. SU(2)의 원소 $U$와 $-U$가 같은 SO(3) 회전 하나에 대응한다. 이 성질이 위에서 본 예시, spin은 $4\pi$를 돌아야 원래대로 돌아오는 현상을 설명한다. 
- 정수 $j$ 표현은 SO(3)의 표현이기도 하다. ($2\pi$ 회전 = identity)
- 반정수 $j$ 표현은 SU(2)의 표현이다. 

| $j$           | 행렬 크기      | 예시                                           | Group        |
| ------------- | ---------- | -------------------------------------------- | ------------ |
| $0$           | $1\times1$ | $s$ orbital, spin-0 입자                       | SO(3), SU(2) |
| $\frac{1}{2}$ | $2\times2$ | 전자 spin                                      | SU(2)만       |
| $1$           | $3\times3$ | $p$ orbital ($l=1$), photon spin             | SO(3), SU(2) |
| $\frac{3}{2}$ | $4\times4$ | $l=1$과 $s=\frac{1}{2}$의 결합 ($j=\frac{3}{2}$) | SU(2)만       |

## $\vec{L}$과 $\vec{S}$는 회전시키는 대상이 다르다
둘 다 같은 algebra를 만족하는 rotation generator인데, 차이는 무엇을 회전시키느냐에 있다. 

화살표가 그려진 바람 지도를 돌린다고 생각해 보자. 지도를 회전시키면 두 가지 일이 동시에 일어난다. 
1. 각 화살표가 **새로운 위치로 옮겨간다.**
2. 화살표 자체의 **방향도 돌아간다.**

둘 중 하나만 하면 회전된 지도가 아니다. Vector field $\vec{V}(\vec{r})$로 쓰면

$$
R\,\vec{V}(\vec{r}) = \vec{V}'(R \vec{r}) 
$$
![[Pasted image 20261020204832.png]]
그림을 이용해서 이해해보자. 


- $\vec{V}'(R \vec{r})$에서 $R \vec{r}$, 이것은 화살표의 '위치'를 바꾸는 연산이다. 이것을 generate하는 것이 $\vec{L}$이라고 비유할 수 있다. 
- $R\,\vec{V}(\vec{r})$은 화살표의 방향을 바꾸는 연산이다.  즉 화살표의 성분(component, 여기서는 $\hat{x}, \hat{y}$)끼리 섞는 부분을 generate하는 것이 $\vec{S}$라고 비유할 수 있다. 

Hilbert space로 말하면 

$$
\mathcal{H} = L^2(\mathbb{R}^3) \otimes \mathbb{C}^{2s+1}
$$

이고, $\vec{L}$은 앞쪽(공간 wavefunction, 위치로 나타낼 수 있는 것)에만, $\vec{S}$는 뒤쪽(자유도, 위치와 무관한 것)에만 작용한다. 두 연산이 노는 공간이 아예 구변되어 있으므로, $[L_i, S_j] = 0$이다. 
전자의 spinor $\psi_\alpha(\vec{r})$에서 $\vec{r}$을 건드리는 게 $\vec{L}$, spin index $\alpha$를 건드리는 게 $\vec{S}$이다. 

| | $\vec{L}$ | $\vec{S}$ |
|---|---|---|
| 작용하는 곳 | 공간 wavefunction $L^2(\mathbb{R}^3)$ | 내부 성분 $\mathbb{C}^{2s+1}$ |
| 구성 | $\vec{x}\times\vec{p}$ (미분 연산자) | 행렬 (algebra로만 정의) |
| 허용 값 | 정수 $l$ | 정수 또는 반정수 $s$ |
| 표현 공간 크기 | 같은 $l$이 무한히 많은 radial 함수와 결합 | 입자마다 고정된 유한 차원 |

## 무엇이 보존되는가: spin-orbit coupling
회전 대칭이 있는 계에서 보존되는 것은 원칙적으로 **$\vec{J}$뿐**이다. 
$\vec{L}$과 $\vec{S}$가 각각 보존되려면 Hamiltonian이 공간 회전과 내부 회전을 따로따로 해도 불변이어야 한다. 

Spin-orbit coupling $H_{SO} \propto \vec{L}\cdot\vec{S}$는 두 회전을 **함께** 할 때만 불변이다. 

$$
[H_{SO}, \vec{L}] \neq 0, \qquad [H_{SO}, \vec{S}] \neq 0, \qquad [H_{SO}, \vec{J}] = 0
$$

그래서 fine structure에서는 $m_l, m_s$ 대신 $j, m_j$가 good quantum number가 된다. 
Zeeman effect의 weak/strong field 구분도 결국 "외부 자기장이 $\vec{L}$과 $\vec{S}$를 따로 붙잡을 만큼 센가"의 문제이다. 
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[양자 필기 - Weak-Field Zeeman Effect]]
- [[양자 필기 - Strong-Field Zeeman Effect]]

# Angular momentum addition과 Clebsch–Gordan coefficient
두 각운동량을 함께 고려해야 하는 때가 있다. 
예를 들어 전자 하나의 오비탈 각운동량과 스핀 각운동량을 함께 고려한다거나,  $\vec{J} = \vec{L} + \vec{S}$
두 입자의 spin을 고려하는 상황을 생각해 보자. $\vec{S} = \vec{S}_1 + \vec{S}_2$

아무튼 서로 구별되는 두 회전 상태로 이루어지는 ket space를 각각 '1의 공간'과 '2의 공간'이라고 지칭하자. 1의 공간은 $j$양자수가 $j_1$이고, $m$ 양자수가 $-j_1$부터 $j_1$까지 정수 간격으로 있는, 즉   $\ket{j_1, -j_1}, \ket{j_1, -j_1 + 1},  \cdots \ket{j_1, j_1 - 1},\ket{j_1, j_1}$ 을 basis ket으로 가지는 공간이다. 
2의 공간도 마찬가지이며, $(2j_2+1)$ 차원이다. 

$\vec{J}_1$연산자는 1의 공간에만 작용하며, 마찬가지로 $\vec{J}_2$는 2의 공간에만 작용한다. 
두 연산자가 노는 공간이 다르기 때문에, 둘은 항상 commute한다. $[J_{1i}, J_{2j}] = 0$
물론 $\vec{J}_1$와 $\vec{J}_2$ 각자는 엄연히 각운동량 연산자이기 때문에 아래와 같은 commutation relation을 가진다. 

$$
[J_{1i}, J_{1j}] = i \hbar \epsilon_{ijk} J_{1k}, \qquad [J_{2i}, J_{2j}] = i \hbar \epsilon_{ijk} J_{2k}
$$

1과 2가 함께 있는 시스템 "전체" 각운동량 연산자 $\vec{J}$는 이렇게 정의된다. 
$$
\vec{J} = \vec{J}_1 + \vec{J}_2
$$
더 엄밀히 하자면, $\vec{J}_1$과 $\vec{J}_2$ 연산자가 적용되는 공간이 별개이기 때문에 
아래와 같이 텐서곱을 이용해 표현하는 것이 옳다. 
$$
\vec{J} = \vec{J}_1\otimes\mathbb{1} + \mathbb{1}\otimes\vec{J}_2
$$
$\vec{J}$ 는 다시 $[J_i, J_j] = i\hbar\epsilon_{ijk}J_k$를 만족하는 각운동량이다. 

$\otimes$ 로 분리된 왼쪽과 오른쪽 자리는 각각 1의 공간과 2의 공간을 의미한다. 
$\vec{J}_1\otimes\mathbb{1}$ 라는 연산자는 1의 공간에는 $\vec{J}_1$가 작용하며, 2의 공간에는 identity operator가 작용하는 (즉 아무 변화를 일으키지 않는) 그런 것이다. 

벡터의 각 성분에 대해 아래가 성립한다. 
$$
J_i = J_{1i} +  J_{2i}
$$
$\vec{J}$을 제곱하면, 

$$
J^2 = (\vec{J}_1 + \vec{J}_2)\cdot (\vec{J}_1 + \vec{J}_2) = J_1^2 + J_2^2 + 2\vec{J}_1 \cdot \vec{J}_2
$$

($\vec{J}_1\cdot\vec{J}_2 + \vec{J}_2\cdot\vec{J}_1$을 $2\vec{J}_1\cdot\vec{J}_2$로 합칠 수 있는 것은 두 연산자가 commute하기 때문이다.)

$2\vec{J}_1\cdot\vec{J}_2$ 항이 있기 때문에, 전체 각운동량의 크기 $J^2$는 단순히 1과 2 각자의 각운동량 크기의 합($J_1^2 + J_2^2$)이 아니라는 것을 알 수 있다. 


## 두 개의 basis
두 각운동량이 사는 $(2j_1+1)(2j_2+1)$차원 공간에는 자연스러운 basis가 두 개 있다. 

### **Uncoupled basis**: $J_1^2, J_2^2, J_{1z}, J_{2z}$의 simultaneous eigenket
1과 2 각자의 각운동량 크기와, 각자의 $z$방향 각운동량을 이용
그저 앞서 말한 1의 공간에 사는 ket과 2의 공간에 사는 ket을 하나하나씩 가능한 모든 조합으로 텐서곱한 것이다. 
$$
\ket{j_1, j_2; m_1, m_2} = \ket{j_1, m_1}\otimes\ket{j_2, m_2}
$$

굳이 이 ket의 eigen value를 써보자면, 
$$
J_1^2\ket{j_1, j_2; m_1, m_2} = j_1(j_1+1)\hbar^2\ket{j_1, j_2; m_1, m_2} 
$$
$$
J_2^2\ket{j_1, j_2; m_1, m_2} = j_2(j_2+1)\hbar^2\ket{j_1, j_2; m_1, m_2} 
$$
$$
J_{1z}\ket{j_1, j_2; m_1, m_2} = m_1\hbar\ket{j_1, j_2; m_1, m_2} 
$$
$$
J_{2z}\ket{j_1, j_2; m_1, m_2} = m_2\hbar\ket{j_1, j_2; m_1, m_2} 
$$

### **Coupled basis**: $J_1^2, J_2^2, J^2, J_z$의 simultaneous eigenket
1과 2 각자의 각운동량 크기와, 전체 각운동량 크기, 전체 $z$방향 각운동량을 이용
$$
\ket{j_1, j_2; j, m}
$$
굳이 이 ket의 eigen value를 써보자면, 

$$
J_1^2\ket{j_1, j_2; j, m} = j_1(j_1+1)\hbar^2\ket{j_1, j_2; j, m}
$$
$$
J_2^2\ket{j_1, j_2; j, m} = j_2(j_2+1)\hbar^2\ket{j_1, j_2; j, m}
$$
$$
J^2\ket{j_1, j_2; j, m} = j(j+1)\hbar^2\ket{j_1, j_2; j, m}
$$
$$
J_z\ket{j_1, j_2; j, m} = m\hbar\ket{j_1, j_2; j, m}
$$


두 세트를 섞을 수는 없다. $J^2 = J_1^2 + J_2^2 + 2\vec{J}_1\cdot\vec{J}_2$이고 $\vec{J}_1\cdot\vec{J}_2$가 $J_{1x}J_{2x}$ , $J_{1y}J_{2y}$ 를 포함하므로 $[J^2, J_{1z}] \neq 0$이기 때문이다. 
앞에서 $J_x, J_y, J_z$를 동시에 대각화할 수 없었던 것과 같은 이야기다. 

### 이것 저것 계산해보자

그러면 만약, 연산자와 eigenket이 아닌 ket을 계산하고 싶다면 어떻게 해야하나?
$$
J^2\ket{j_1, j_2; m_1, m_2}
$$
$$
J_z\ket{j_1, j_2; m_1, m_2}
$$
$$
J_{1z}\ket{j_1, j_2; j, m}
$$
$$
J_{2z}\ket{j_1, j_2; j, m}
$$

이런 것들 말이다. 
일단 하나하나씩 할 수 있는 데 까지 계산해보자. 

#### $\ket{j_1, j_2; m_1, m_2}$은 $J^2$의 eigenket이 아니다. 그치만 $J^2\ket{j_1, j_2; m_1, m_2}$은 계산 가능하다

$$
J^2\ket{j_1, j_2; m_1, m_2} = (J_1^2 + J_2^2 + 2\vec{J}_1\cdot\vec{J}_2)\ket{j_1, j_2; m_1, m_2}
$$

위는 $\vec{J}_1\cdot\vec{J}_2\ket{j_1, j_2; m_1, m_2}$을 계산하는 것이 문제인데, 이를 풀어 써보면, 
$$
\vec{J}_1\cdot\vec{J}_2\ket{j_1, j_2; m_1, m_2} = (J_{1x}J_{2x}+J_{1y}J_{2y}+J_{1z}J_{2z})\ket{j_1, j_2; m_1, m_2} 
$$
$J_x$와 $J_y$는 raising operator $J_+$와 lowering operator $J_-$의 조합이라서, $m$을 $\pm 1$ 바꾼 상태들을 섞는다는 걸 상기해보자. 
이 시점에서 $\ket{j_1, j_2; m_1, m_2}$는 $\vec{J}_1\cdot\vec{J}_2$의 eigenket이 아니라는 것을 알 수 있다. 

그래도, $J_x = \frac{J_+ + J_-}{2},  J_y = \frac{J_+ -J_-}{2i}$을 이용해 또 꾸역꾸역 계산을 해 보면?
$$
\vec{J}_1\cdot\vec{J}_2 = J_{1z}J_{2z} + \frac{1}{2}\left(J_{1+}J_{2-} + J_{1-}J_{2+}\right)
$$

이를 $\ket{j_1, j_2; m_1, m_2}$에 작용시키고, 앞에서 구한 ladder 계수 $C^\pm_{jm} = \hbar\sqrt{(j\mp m)(j\pm m+1)}$를 쓰면

$$
\vec{J}_1\cdot\vec{J}_2\ket{j_1, j_2; m_1, m_2} = \hbar^2 m_1m_2\ket{j_1, j_2; m_1, m_2} + \frac{1}{2}C^+_{j_1m_1}C^-_{j_2m_2}\ket{j_1, j_2; m_1+1, m_2-1} + \frac{1}{2}C^-_{j_1m_1}C^+_{j_2m_2}\ket{j_1, j_2; m_1-1, m_2+1}
$$

라는 것을 알 수 있다. 
$\ket{j_1, j_2; m_1, m_2}$ 자신 말고도 다른 두 상태가 섞여 나오므로, 확실히 eigenket이 아니다. 

그런데 섞여 나오는 세 상태는 모두 $m_1 + m_2$가 같다. 
즉 $J^2$는 $m = m_1 + m_2$가 같은 상태끼리만 섞는다.  $J^2$연산은 전체 $z$방향 각운동량을 보존한다. 
따라서 $J^2$의 eigenket인 coupled state $\ket{j_1, j_2; j, m}$도 $m_1 + m_2 = m$인 uncoupled state들만의 선형 결합으로 쓸 수 있을 것이다. (뒤에 나오는 CG coefficient의 성질 $m = m_1 + m_2$의 직관적인 이유) 

#### $\ket{j_1, j_2; m_1, m_2}$은 $J_z$의 eigenket이기도 하다.
다른 것 계산에 도전해보자. 
$$
J_z\ket{j_1, j_2; m_1, m_2} = (J_{1z} + J_{2z})\ket{j_1, j_2; m_1, m_2} = \hbar(m_1 + m_2)\ket{j_1, j_2; m_1, m_2} 
$$
어랏? $\ket{j_1, j_2; m_1, m_2}$은 $J_z$의 eigenket임을 알 수 있다. $[J_z, J_{1z}] = [J_z, J_{2z}] =0$ 이기 때문에 당연하다. 
그래서 만약 원한다면, ket의 특성으로 $(m, m_1, m_2)$ 이 세 값 중 두 개를 특정하면 $\ket{j_1, j_2; m_1, m_2}$와 사실상 같은 기능의 eigenket을 정의할 수 있다. 

#### $J_{1z}\ket{j_1, j_2; j, m}$을 계산하다보면 CG coefficient의 필요성을 알게 된다
 그 다음 문제에 도전해보자. 
$$
J_{1z}\ket{j_1, j_2; j, m}
$$
$J_z = J_{1z}+ J_{2z}$를 이용할 수 없다. 
도저히 계산할 수 없다! 어쩌지?
이럴 때는, $\ket{j_1, j_2; j, m}$를 $\ket{j_1, j_2; m_1, m_2}$의 선형 합으로 나타내어 계산하는 수 밖에 없다. 
즉, basis를 바꾸는 것이다. 

그러면... 두 basis를 변환할 때 필요한 계수가 뭐지?
이것이 CG coefficient 정의의 출발점이다. 

## CG coefficient의 정의
두 basis 사이의 unitary 변환 행렬 원소가 **Clebsch–Gordan coefficient**이다. 

Identity operator $\mathbb{1}$를 $\sum_{m_1, m_2}\ket{j_1, j_2; m_1, m_2}\bra{j_1, j_2; m_1, m_2}$이렇게 모든 basis의 ket-bra를 합한 것으로 정의할 수 있다는 사실을 기억하자. 
이를 이용하면, 
$$
\ket{j_1, j_2; j, m} = \sum_{m_1, m_2}\ket{j_1, j_2; m_1, m_2}\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j, m}
$$
$\ket{j_1, j_2; j, m}$을 $\ket{j_1, j_2; m_1, m_2}$의 선형 합으로 나타낼 때, $\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j, m}$가 계수 역할을 한다는 걸 알 수 있다. 이걸 바로 CG coefficient라고 한다. 

역으로  $\ket{j_1, j_2; m_1, m_2}$을 $\ket{j_1, j_2; j, m}$의 합으로 나타내고 싶을 때, 
$\mathbb{1} = \sum_{j, m}\ket{j_1, j_2; j, m} \bra{j_1, j_2; j, m}$를 이용하면

$$
\ket{j_1, j_2; m_1, m_2}= \sum_{j, m}\ket{j_1, j_2; j, m} \bra{j_1, j_2; j, m}\ket{j_1, j_2; m_1, m_2}
$$

## CG coefficient의 성질

### 1. $m = m_1 + m_2$, $z$방향 각운동량 보존
$(J_z - J_{1z} - J_{2z}) = 0$을 $\bra{j_1,j_2;m_1,m_2}$와 $\ket{j_1,j_2;j,m}$ 사이에 끼우면

$$
(m - m_1 - m_2)\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j, m} = 0
$$

따라서 $m \neq m_1 + m_2$이면 CG coefficient는 0이다. 

### 2. Triangle inequality, $j$의 범위는 $j_1$과 $j_2$로 결정된다

$$
|j_1 - j_2| \leq j \leq j_1 + j_2
$$

차원을 세어서 확인할 수 있다. $j_1 \geq j_2$라 하면

$$
\sum_{j = j_1 - j_2}^{j_1+j_2}(2j+1) = (2j_1+1)(2j_2+1)
$$

양쪽 basis의 상태 수가 정확히 같다. 

신기한 걸 보여주지. 위 식이 성립함을 시각적으로 보일 수 있다. 
![[Pasted image 20261021134821.png]]


### 3. Phase convention과 실수성
CG coefficient의 전체 phase는 지금까지의 정의만으로는 정해지지 않는다. Condon–Shortley convention에서는
- ladder 계수 $C^\pm_{jm}$를 양의 실수로 고르고
- $\braket{j_1, j_2; j_1, j - j_1 | j_1, j_2; j, j} > 0$ 으로 정한다. 

이렇게 하면 모든 CG coefficient가 **실수**가 된다. 

### 4. Orthogonality
Unitary(실수이므로 orthogonal) 변환이므로

$$
\sum_{m_1, m_2}\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j, m}\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j', m'} = \delta_{jj'}\delta_{mm'}
$$

$$
\sum_{j, m}\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j, m}\braket{j_1, j_2; m_1', m_2' | j_1, j_2; j, m} = \delta_{m_1m_1'}\delta_{m_2m_2'}
$$

### 5. Recursion relation
$J_\pm = J_{1\pm} + J_{2\pm}$를 양쪽에 작용시키고 노트 앞부분의 $C^\pm_{jm}$를 쓰면

$$
\sqrt{(j\mp m)(j\pm m+1)}\,\braket{m_1, m_2 | j, m\pm1} = \sqrt{(j_1\mp m_1+1)(j_1\pm m_1)}\,\braket{m_1\mp1, m_2 | j, m} + \sqrt{(j_2\mp m_2+1)(j_2\pm m_2)}\,\braket{m_1, m_2\mp1 | j, m}
$$

($j_1, j_2$는 표기에서 생략.) 
이 식 하나로 모든 CG coefficient를 계산할 수 있다. Wigner–Eckart theorem에서 $T^{(k)}_q$의 행렬 원소가 만족하는 recursion relation이 바로 이것과 같아서 CG coefficient가 나오는 것이다. 

## 계산 절차
1. **맨 위에서 시작**: $m = j_1 + j_2$인 상태는 uncoupled basis에서 하나뿐이므로 바로 알 수 있다. 

$$
\ket{j_1+j_2, j_1+j_2} = \ket{m_1 = j_1, m_2 = j_2}
$$

2. **$J_-$로 내려가기**: $J_- = J_{1-} + J_{2-}$를 반복 적용해 $j = j_1+j_2$인 모든 $m$ 상태를 얻는다. 
3. **다음 $j$는 orthogonality로**: $m = j_1+j_2-1$인 상태는 2차원이다. 그중 하나는 2단계에서 얻었고, 그것과 직교하는 상태가 $\ket{j_1+j_2-1, j_1+j_2-1}$이다. (phase는 convention으로 고정)
4. 다시 $J_-$로 내려가고, 반복한다. 

## 예시 1: 두 spin-1/2 ($\frac{1}{2}\otimes\frac{1}{2} = 1 \oplus 0$)
상태 수: $2\times 2 = 3 + 1$

**Triplet** ($s=1$, 교환에 대해 대칭)

$$
\ket{1, 1} = \ket{\uparrow\uparrow}
$$

$$
\ket{1, 0} = \frac{1}{\sqrt{2}}\left(\ket{\uparrow\downarrow} + \ket{\downarrow\uparrow}\right)
$$

$$
\ket{1, -1} = \ket{\downarrow\downarrow}
$$

**Singlet** ($s=0$, 교환에 대해 반대칭)

$$
\ket{0, 0} = \frac{1}{\sqrt{2}}\left(\ket{\uparrow\downarrow} - \ket{\downarrow\uparrow}\right)
$$

$\ket{1,0}$은 $\ket{1,1}$에 $J_- = S_{1-}+S_{2-}$를 걸어서, $\ket{0,0}$은 $\ket{1,0}$과의 orthogonality로 얻는다. Condon–Shortley convention에 따라 $\braket{\uparrow\downarrow|0,0} = +\frac{1}{\sqrt{2}} > 0$. 

## 예시 2: Spin-orbit ($l \otimes \frac{1}{2} = (l+\frac{1}{2})\oplus(l-\frac{1}{2})$)
Fine structure에서 필요한 경우. 일반 $l$에 대해 닫힌 형태가 있다. 

$$
\ket{j = l\pm\tfrac{1}{2}, m} = \pm\sqrt{\frac{l \pm m + \frac{1}{2}}{2l+1}}\,\ket{m_l = m - \tfrac{1}{2}, \uparrow} + \sqrt{\frac{l \mp m + \frac{1}{2}}{2l+1}}\,\ket{m_l = m + \tfrac{1}{2}, \downarrow}
$$

$l=1$ ($p$ orbital), $m = \frac{1}{2}$이면

$$
\ket{\tfrac{3}{2}, \tfrac{1}{2}} = \sqrt{\frac{2}{3}}\,\ket{0, \uparrow} + \sqrt{\frac{1}{3}}\,\ket{1, \downarrow}
$$

$$
\ket{\tfrac{1}{2}, \tfrac{1}{2}} = -\sqrt{\frac{1}{3}}\,\ket{0, \uparrow} + \sqrt{\frac{2}{3}}\,\ket{1, \downarrow}
$$

이 coupled basis에서는 spin-orbit term이 대각적이다. 

$$
\vec{L}\cdot\vec{S} = \frac{1}{2}\left(J^2 - L^2 - S^2\right) \quad\Rightarrow\quad \bra{l, s; j, m}\vec{L}\cdot\vec{S}\ket{l, s; j, m} = \frac{\hbar^2}{2}\left[j(j+1) - l(l+1) - \tfrac{3}{4}\right]
$$

Fine structure에서 coupled basis를, strong-field Zeeman에서 uncoupled basis를 쓰는 이유가 여기서 나온다. Intermediate field에서는 두 basis 사이를 CG coefficient로 오가며 행렬을 대각화해야 한다. 
- [[양자 필기 - Spin-Orbit Coupling and Fine Structure]]
- [[양자 필기 - Intermediate-Field Zeeman Effect]]

## 참고: Wigner 3j symbol
CG coefficient를 더 대칭적인 형태로 다시 쓴 것이 Wigner 3j symbol이다. 

$$
\braket{j_1, j_2; m_1, m_2 | j_1, j_2; j, m} = (-1)^{j_1 - j_2 + m}\sqrt{2j+1}\begin{pmatrix} j_1 & j_2 & j \\ m_1 & m_2 & -m \end{pmatrix}
$$

3j symbol은 열을 바꿔도 부호만 바뀌는 대칭성이 있어서 표로 정리하거나 계산하기 편하다. 다른 교재나 표(Griffiths의 CG table, PDG table)를 볼 때는 phase convention과 $j_1, j_2$ 순서를 먼저 확인해야 한다. 순서를 바꾸면 $(-1)^{j_1+j_2-j}$의 부호가 붙는다. 

# Selection rule: 대칭성으로 보기
Griffiths에서는 spontaneous emission을 다룰 때 dipole 행렬 원소를 직접 적분해서 selection rule을 보인다. 
여기서는 같은 결과를 **대칭성만으로** 얻는다. 적분을 하지 않아도 어떤 행렬 원소가 0인지 알 수 있다는 것이 핵심이다. 

선택 규칙은 두 종류의 대칭성에서 나온다. 
1. **회전 대칭** → Wigner–Eckart theorem → $\Delta l$, $\Delta m$의 범위
2. **Parity** → $\Delta l$의 짝홀

## Spherical tensor operator
$\ket{j,m}$이 회전에 대해 특정한 방식으로 변환되듯, operator도 회전에 대해 변환된다. 
회전에 대해 $\ket{k, q}$처럼 변환하는 $2k+1$개 operator의 묶을 **rank $k$ spherical tensor** $T^{(k)}_q$ ($q = -k, \dots, k$)라고 한다. 

$$
\mathcal{D}^\dagger(R)\,T^{(k)}_q\,\mathcal{D}(R) = \sum_{q'=-k}^{k} \mathcal{D}^{(k)*}_{qq'}(R)\,T^{(k)}_{q'}
$$

무한소 회전으로 풀면 $\vec{J}$와의 commutation relation으로 동등하게 정의할 수 있다. 

$$
[J_z, T^{(k)}_q] = \hbar q\, T^{(k)}_q
$$

$$
[J_\pm, T^{(k)}_q] = \hbar\sqrt{(k\mp q)(k\pm q+1)}\,T^{(k)}_{q\pm1}
$$

앞에서 유도한 ladder 계수 $C^\pm_{jm}$와 **똑같은 계수**다. $J_\pm$가 $\ket{j,m}$의 $m$을 올리내리듯, commutator를 통해 $T^{(k)}_q$의 $q$를 올리내린다. 

예시:
- **Scalar** ($k=0$): $J_i$와 모두 commute하는 operator. 예) $\vec{L}\cdot\vec{S}$, 회전 대칭이 있는 계의 Hamiltonian
- **Vector** ($k=1$): 임의의 vector operator $\vec{V}$ ($\vec{r}, \vec{p}, \vec{L}, \vec{S}, \vec{J}$ 등)의 spherical component

$$
V_0 = V_z, \qquad V_{\pm1} = \mp\frac{1}{\sqrt{2}}(V_x \pm iV_y)
$$

특히 위치 operator는 $l=1$ spherical harmonics와 직접 연결된다. 

$$
r_q = \sqrt{\frac{4\pi}{3}}\,r\,Y_1^q(\theta,\phi)
$$

즉 $\vec{r}$은 회전에 대해 $\ket{1, q}$처럼 변환한다. 이것이 dipole selection rule의 출발점이다. 

## Wigner–Eckart theorem

$$
\bra{\alpha', j', m'}T^{(k)}_q\ket{\alpha, j, m} = \braket{j, k; m, q | j, k; j', m'}\,\frac{\langle \alpha', j' \| T^{(k)} \| \alpha, j \rangle}{\sqrt{2j+1}}
\tag{WE}
$$

($\alpha$는 $j, m$ 외의 나머지 quantum number, 예를 들면 hydrogen의 $n$. Normalization은 Sakurai convention이며, 교재마다 $\sqrt{2j+1}$ 인자를 두는 위치가 다르다.)

행렬 원소가 두 부분으로 갈라진다. 
- **기하학적 부분**: Clebsch–Gordan 계수. $m, q, m'$ 의존성이 전부 여기에 들어 있고, 동역학과 무관하게 회전 대칭만으로 결정된다. 
- **물리적 부분**: reduced matrix element $\langle \alpha', j' \| T^{(k)} \| \alpha, j \rangle$. $m, q, m'$과 무관하고, radial wavefunction 같은 계의 구체적인 정보는 전부 여기에 들어 있다. 

왜 CG 계수가 나오는가? $T^{(k)}_q\ket{\alpha,j,m}$은 회전에 대해 $\ket{k,q}\otimes\ket{j,m}$과 똑같이 변환한다. 실제로 $J_\pm$를 양쪽에 작용시켜 얻는 행렬 원소의 recursion relation이 두 각운동량 합성의 CG recursion relation과 정확히 같다. 
그래서 $T^{(k)}_q\ket{j,m}$을 $\ket{j',m'}$에 투영하는 것은, 각운동량 $k$와 $j$를 합성해 $j'$을 만드는 것과 같은 구조를 갖는다. 

### 따름정리: 회전 대칭이 주는 selection rule
CG 계수가 0이 아니려면 다음 두 조건을 만족해야 한다. 

$$
m' = m + q
$$

$$
|j - k| \leq j' \leq j + k
$$

(두 번째는 각운동량 합성의 triangle inequality.) 
따라서 rank $k$ tensor는 $j$를 최대 $k$만큼, $m$을 $q$만큼만 바꿀 수 있다. 

- $k=0$ (scalar): $j'=j$, $m'=m$. Scalar operator는 $j, m$을 바꾸지 못하고, 행렬 원소는 $m$에 무관하다. 회전 대칭이 있는 Hamiltonian의 에너지가 $m$에 대해 $(2j+1)$중 degenerate한 이유가 바로 이것이다. 
- $k=1$ (vector): $\Delta j = 0, \pm1$, $\Delta m = 0, \pm 1$. 단, $j=0 \to j'=0$은 triangle inequality $1 \leq j' \leq 1$에 의해 금지된다. 

### 따름정리: Ratio theorem
Reduced matrix element가 $m$과 무관하므로, 같은 $(\alpha', j'; \alpha, j)$ 사이의 행렬 원소들의 **비율**은 CG 계수의 비율만으로 결정된다. 하나만 계산하면 나머지는 공짜다. 
예를 들어 같은 $j$ 안에서 임의의 vector operator는 $\vec{J}$에 비례하는 행렬 원소를 갖는다 (projection theorem). 

$$
\bra{\alpha', j, m'}\vec{V}\ket{\alpha, j, m} = \frac{\bra{\alpha', j, m}\vec{J}\cdot\vec{V}\ket{\alpha, j, m}}{\hbar^2 j(j+1)}\bra{j, m'}\vec{J}\ket{j, m}
$$

Weak-field Zeeman effect에서 Landé g-factor를 구할 때 $\vec{S}$를 $\vec{J}$ 방향으로 사영한 것이 바로 이 정리의 응용이다. ([[양자 필기 - Weak-Field Zeeman Effect]])

## Parity가 주는 selection rule
회전 대칭만으로는 $\vec{r}$에 대해 $\Delta l = 0$이 허용된다. 이것을 금지하는 것은 parity다. 

$$
\Pi\,\vec{r}\,\Pi^\dagger = -\vec{r}, \qquad \Pi\ket{n,l,m} = (-1)^l\ket{n,l,m}
$$

($Y_l^m(\pi-\theta, \phi+\pi) = (-1)^l Y_l^m(\theta,\phi)$에서 온다.) 
$\Pi^\dagger\Pi = \mathbb{1}$을 끼워 넣으면

$$
\bra{n',l',m'}\vec{r}\ket{n,l,m} = \bra{n',l',m'}\Pi^\dagger(\Pi\vec{r}\Pi^\dagger)\Pi\ket{n,l,m} = (-1)^{l+l'+1}\bra{n',l',m'}\vec{r}\ket{n,l,m}
$$

따라서 $l + l'$이 짝수이면 행렬 원소는 0이다. Dipole transition은 **parity가 바뀌는** 상태 사이에서만 일어난다 (Laporte rule). 

## Electric dipole transition의 selection rule
Dipole 근사에서 전이 확률은 $|\bra{f}\vec{r}\ket{i}|^2$에 비례한다. 두 대칭성을 합치면:

| 조건 | 출처 |
|---|---|
| $\Delta m = 0, \pm 1$ | 회전 대칭 ($m' = m+q$, $q = 0,\pm1$) |
| $\Delta l = 0, \pm 1$ | 회전 대칭 (triangle inequality, $k=1$) |
| $\Delta l$ 홀수 | parity |
| $\Rightarrow \Delta l = \pm 1$ | 둘의 교집합 |

$q$가 빛의 polarization과 직접 대응한다. $z$ 방향 선편광($r_0 = z$)은 $\Delta m = 0$, 원편광($r_{\pm1}$)은 $\Delta m = \pm1$ 전이를 일으킨다. 

### Spin까지 포함하면
Dipole operator $\vec{r}$은 spin에 작용하지 않는다. ($[\vec{r}, \vec{S}] = 0$)
- $\Delta s = 0$, 그리고 uncoupled basis에서는 $\Delta m_s = 0$
- $\vec{r}$은 $\vec{L}$에 대해 vector이고 $\vec{S}$와 commute하므로 $\vec{J} = \vec{L}+\vec{S}$에 대해서도 rank-1 tensor이다. 따라서 coupled basis $\ket{n, l, s, j, m_j}$에서도 Wigner–Eckart theorem이 그대로 적용되어

$$
\Delta j = 0, \pm1 \;\;(j = 0 \to j' = 0 \text{ 금지}), \qquad \Delta m_j = 0, \pm 1
$$

## 예시: Hydrogen
- $2p \to 1s$: $\Delta l = -1$, 허용. Lyman-$\alpha$ 선
- $2s \to 1s$: $\Delta l = 0$, dipole 전이 금지 (parity). 그래서 $2s$는 metastable state이고, 주로 two-photon 과정으로 훨씬 느리게 붕괴한다. 
- $3d \to 1s$: $\Delta l = -2$, 금지 (triangle inequality). $3d \to 2p \to 1s$로 단계를 거쳐 내려간다. 

"금지"는 electric dipole 근사에서의 금지다. Magnetic dipole, electric quadrupole 같은 고차 항은 다른 rank와 parity를 가지므로 다른 selection rule을 따르고, 훨씬 약하게 일어난다. 

# 더 나아가: $d$차원의 rotation generator
$\vec{J} = \vec{r}\times\vec{p}$ 꼴은 사실 3차원에서만 성립하는 우연이다. 

## 회전은 축이 아니라 평면에서 일어난다
"$z$축 둘레의 회전"은 사실 $xy$-평면 안에서의 회전이다. 평면에 수직인 방향이 하나로 정해지는 것은 3차원뿐이다. (4차원에서 $x_1x_2$-평면에 수직인 것은 $x_3x_4$-평면 전체)
그래서 일반 차원에서는 평면 $(i,j)$마다 generator를 하나씩 정의하는 antisymmetric tensor를 쓴다. 

$$
L_{ij} = x_i p_j - x_j p_i, \qquad L_{ij} = -L_{ji}
$$

독립적인 generator 수는 평면의 수 $\binom{d}{2} = \frac{d(d-1)}{2}$이다. 3차원에서만 평면 수와 축 수가 같아서 Hodge dual로 vector처럼 쓸 수 있었다. 

$$
L_k = \frac{1}{2}\epsilon_{ijk}L_{ij} \quad\Rightarrow\quad L_3 = L_{12},\; L_1 = L_{23},\; L_2 = L_{31}
$$

## $\mathfrak{so}(d)$ commutation relation
Spin까지 포함한 일반적인 $J_{ij}$는 다음 $\mathfrak{so}(d)$ Lie algebra의 commutation relation (defining relation)으로 정의한다. 

$$
[J_{ij}, J_{kl}] = i\hbar \left( \delta_{ik} J_{jl} - \delta_{il} J_{jk} - \delta_{jk} J_{il} + \delta_{jl} J_{ik} \right)
$$

- index를 공유하지 않는 두 평면의 generator는 commute한다. 
- 3차원에서 $[L_{12}, L_{23}] = -i\hbar L_{13} = i\hbar L_{31}$, 즉 $[L_3, L_1] = i\hbar L_2$로 익숙한 식이 나온다. 
- Rotation operator: $U(R) = \exp\left(-\frac{i}{2\hbar}\theta_{ij}J_{ij}\right)$
- Spin 부분은 Clifford algebra $\{\gamma_i,\gamma_j\} = 2\delta_{ij}$로 만든다: $S_{ij} = -\frac{i\hbar}{4}[\gamma_i, \gamma_j]$. ($d=3$, $\gamma_i = \sigma_i$이면 $S_{12} = \frac{\hbar}{2}\sigma_3$)
- $\delta_{ij}$를 Minkowski metric $\eta_{\mu\nu}$로 바꾸면 **Lorentz algebra** $\mathfrak{so}(1,3)$이 된다. 

## 차원이 올라가면 달라지는 것
- 동시에 대각화할 수 있는 generator 수: $L_{12}, L_{34}, \dots$ 처럼 $\lfloor d/2 \rfloor$개 (Cartan subalgebra). 3차원에서는 $J_z$ 하나뿐이었다. 
- Casimir $L^2 = \frac{1}{2}\sum_{i,j}L_{ij}L_{ij}$의 orbital eigenvalue는 $\hbar^2\,l(l+d-2)$이고, $d=3$에서 $l(l+1)$로 돌아온다. 

## 4차원은 특별하다: $\mathfrak{so}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(2)$
6개의 generator를 $L_k = \frac{1}{2}\epsilon_{ijk}L_{ij}$ ($i,j,k\in\{1,2,3\}$)와 $K_k = L_{k4}$로 나누면

$$
[L_i, L_j] = i\hbar\,\epsilon_{ijk}L_k, \qquad [L_i, K_j] = i\hbar\,\epsilon_{ijk}K_k, \qquad [K_i, K_j] = i\hbar\,\epsilon_{ijk}L_k
$$

이고, 다음 조합은 서로 commute하는 두 개의 $\mathfrak{su}(2)$가 된다. 

$$
\vec{J}^{\pm} = \frac{1}{2}(\vec{L}\pm\vec{K}), \qquad [J^+_i, J^-_j] = 0
$$

Hydrogen의 $n^2$ degeneracy가 바로 이 숨겨진 SO(4) symmetry 때문이다. $\vec{L}$과 (rescale한) Runge–Lenz vector $\vec{A}$가 $\vec{L}, \vec{K}$와 같은 algebra를 이루고, bound state에서 $j_+ = j_- = \frac{n-1}{2}$이므로 degeneracy는 $(2j_++1)(2j_-+1) = n^2$이다. 

# 수정 기록
> [!note] 2026-10-20, Glia가 수정
> - "$\vec{J}$는 $\vec{L}$과 $\vec{S}$의 합집합" → 합(sum), tensor product 표기 추가
> - "2×2 = SU(2) spin, 3×3 = SO(3) angular momentum" 구분을 바로잡고 warning callout 추가
> - $\ket{m_x, m_y, m_x}$ 오타, commutator 계산의 $\hbar^2$ 누락 수정
> - $a \geq b \geq -a$ → $\sqrt{a} \geq b \geq -\sqrt{a}$
> - $b_{\min} = -b_{\max}$에서 다른 해를 버리는 근거 추가, "$b$값의 종류는 2 이상" → $n+1$가지 ($n \geq 0$)
> - $J_+\ket{j,m} = C^+_{jm}\ket{j,m}$ → $\ket{j,m+1}$, $C^+_{jm}$ 유도 과정 정리, phase convention 명시
> - rotation이 $J^2$를 보존하는 논리 방향 수정
> - "반정수 $j$와 정수 $j$", "$d$차원의 rotation generator" 섹션 새로 작성
> - "Selection rule: 대칭성으로 보기" 섹션 새로 작성 (spherical tensor, Wigner–Eckart theorem, parity, dipole selection rule)
> - "Angular momentum addition과 Clebsch–Gordan coefficient" 섹션 새로 작성
