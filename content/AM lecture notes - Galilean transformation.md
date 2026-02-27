---
title: AM lecture notes - Galilean transformation
date: 2026-02-24
subject: physics
tags:
  - study
  - concept
  - question
class: study_lecture
---

[[Analytical Mechanics]]
이것은 강의를 듣고 적은 필기입니다. 
정리가 안 되어 있고, 개인적인 생각이 섞여 있을 수도 있습니다. 

# 오늘의 핵심

오늘의 명언
더러운 계산은 학부때 이미 많이 했다. 
대학원생의 물리는 계산이 아니라 식을 세우고 생각하는 방법을 배우는 것이다.

진짜 수업한 내용
> "대칭 변환이 있으면, 
> 그걸 infinitesimal하게 쪼갰을 때 나오는 게 derivative operator고, 
> generator이고, 
> 그게 곧 물리량이다"

# 필기 내용

물리학에서 해야 할 질문 두 가지가 있다. 
1. 왜 방정식이 저런 미방으로 나오는가
2. 가장 직관적인 물리학적 개념이 뭔가? 
→ 양쪽의 답이 대칭성이라고 한다. 라그랑지안이든 해밀토니안이든 뭐든 대칭성이 결정한다. 
왜 해밀토니안이 운돌량과 질량과 이런 $H = \frac{p^2}{2m}$으로 적어져야 하는가?
각운동량 버전은 $H = \frac{\boldsymbol{L}^2}{2m\boldsymbol{r}^2}$ 
해밀토니안이 왜 운동과 회전에 변하지 않는가?
rotation invariant, translation invariant 
헤밀토니안이 각운동량과 운동량에 commute하기 때문이다. 
$[\boldsymbol{L}, H] = 0$
$[p,H] = 0$
일단 coummute하기 위해서는 해당 연산자에 대한 다항식이기만 하면 된다. 
이 coummute조건에 더해서 갈릴레이 변환 등의 추가 조건이 필요하다. 

일단 물리를 한다면 해밀토니안과 라그랑지안이 뭔지 찾기만 해도 끝났음. 
계산은 컴퓨터가 해주겠지. 

물리 방정식은 관성계 변환에 대해 불변이어야 한다. 그리고 상대론적 부분도 신경써야 함. 광속불변까지 적용해야 한다. 

## Newtonian mechanics

뉴턴 역학은 Galilian group으로 정의된다. 

$\boldsymbol{r}$ 이 3차원의 위치과 시간에 대한 값을 가진 시공간상의 한 좌표라면,
Transform은 그냥 이 점을 다른 한 점으로 mapping하는 것이다. 
번환된 점에는 프라임을 붙여 표시한다. 
$\boldsymbol{r} \rightarrow \boldsymbol{r}'$

한 관성계(inertia frame)에서 다른 관성계로 frame을 바꾸는 변환을 생각하자.
free space에서 네 가지 변환을 고려할 수 있다. 

- **translation** , 간단함. 위치에 상수 벡터를 더함. 
$$
\boldsymbol{r}' = \boldsymbol{r} + \boldsymbol{c}
$$
- **rotation** , 위치에 SO(3) matrix $\boldsymbol{O}$를 취한다. 
$$
\boldsymbol{r}' = \boldsymbol{O}\boldsymbol{r}
$$
- **time translation** 간단함, 시간에 상수 스칼라를 더함.  
$$
t' = t+ s
$$
- **Boost** 이게 뭔가 싶은데, 한 관성계가 다른 관성계에 대해 속도 $\boldsymbol{u}$로 등속운동할 때 일어나는 변환이다. 이름을 보면 가속운동이어야 할 것 같은데 말이지... 하지만 가속운동을 하는 순간 비관성계가 된다.    
$$
\boldsymbol{r}' = \boldsymbol{u}\boldsymbol{t}
$$


---

## Translation Operator와 Generator

우리는 이미 양자역학 translation으로부터 generator를 유도하는 과정을 배웠다.

**Translation operator** $T({\varepsilon})$, 
$\mathbb{\varepsilon}$은 평행 이동 벡터

$$
T(\varepsilon)\psi(x) = \psi(x+\varepsilon)
$$
우항을 1st order 까지 테일러 전개 해 준다. 
그렇게 튀어나온 미분 연산자를 운동량 operator로 표현하면 아래 식의 좌항이 된다. 
$$
\left(1 + \frac{i}{\hbar}\boldsymbol{p}\cdot\varepsilon\right)\psi(x) = \psi(x) + \varepsilon \cdot \nabla\psi(x)
$$
Matrix로 표현하면 translation operator는 아래 식과 같다. 
$$
T(\varepsilon) = e^{\frac{i}{\hbar}\boldsymbol{p}\cdot\varepsilon} \approx \mathbb{I} + \frac{i}{\hbar}\boldsymbol{P}\varepsilon \quad (\text{3×3 matrix})
$$

**회전 변환, z축 회전축:**

$$
R_z(\phi) = \begin{pmatrix} \cos\phi & -\sin\phi & 0 \\ \sin\phi & \cos\phi & 0 \\ 0 & 0 & 1 \end{pmatrix} \approx \begin{pmatrix} 1 & -\phi & 0 \\ \phi & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

$$
\approx e^{\frac{i}{\hbar}\phi L_z} \approx \mathbb{I} + \frac{i}{\hbar}L_z\phi
$$

우린 $\boldsymbol{P}$랑 $\boldsymbol{L}$ 같은 걸 **generator**라고 부른다.
한마디로, generator는 **"infinitesimal 변환을 만들어내는 연산자"** 이다. 

---
어떤 방정식이든, 그 순간 순간의 한 지점, infinitesimal하게 작은 변화에서 시작해 세울 수 있다. Tangential equation

Translation 한 차원에 하나의 generator가 나온다. 

SO3에서 S의 의미가 뭐냐 determinant가 하나라는 뜻인가?
Poincaré 그룹의 대칭성을 요구하면 맥스웰 방정식이 유일하게 결정된다
그러면 eigen value가 자기 포텐셜 전기 포텐셜로 나온다. 

대칭성을 이용해 맥스웰 방정식을 유도할 수 있다고 한다. 자세한 건 모르겠다.


$$
\boldsymbol{L}^2 |\ell\, m\rangle = \hbar^2 \ell(\ell+1)|\ell\, m\rangle
$$

$$
L_z |\ell\, m\rangle = \hbar m |\ell\, m\rangle
$$

$\ell = 1$, spin 1인 입자에 대해, 아래식을 세울 수 있으며, 이건 맥스웰 방정식을 압축한 것이다. 

$$
\left(\mathbb{I}\partial_t + \boldsymbol{J}\cdot\nabla\right)|E \pm iB\rangle = 0
$$

**→ SO(3)에서 S의 의미 (글리아와 논의, 2026-02-24)**

SO(3)의 각 글자:
- **S** = Special → $\det = 1$인 행렬만 포함
- **O** = Orthogonal → $R^T R = I$를 만족
- **3** = 3차원

O(3)는 $\det = \pm 1$인 행렬을 모두 포함한다. $\det = +1$은 순수한 회전, $\det = -1$은 회전 + 반사(reflection)이다. SO(3)는 여기서 $\det = +1$, 즉 **반사 없이 회전만** 하는 변환들의 집합이다.

공간 반사(parity)는 연속적인 변환으로 만들 수 없다. 회전은 infinitesimal하게 쪼개서 generator로 생성할 수 있지만, 반사는 그럴 수 없다. 따라서 generator를 이야기하는 이 수업의 틀 안에서는 자연스럽게 SO(3)만 다루게 된다. 



---

## 갈릴레이 변환

맥스웰 방정식을 일단 제쳐두고, 
우리는 갈릴레이 변환을 통해 고전역학 운동 방정식을 세우는 법을 알아볼 것이다. 

$G(R, V, \boldsymbol{a}, s)$
- $R$: 회전 변환 (rotation)
- $V$: Boost velocity
- $\boldsymbol{a}$: translation locus
- $s$: time translation parameter

**Transform law:**
- Boost
$$
(x,t) \rightarrow (x + Vt,\ t)
$$
- Translation
$$
(x,t) \rightarrow (x + \boldsymbol{a},\ t)
$$
- time translation
$$
(x,t) \rightarrow (x,\ t+s)
$$
- Rotation
$$
(x,t) \rightarrow (Rx,\ t)
$$

**갈릴레이 변환을 두 번 하면?**

$$
G(R', V', \boldsymbol{a}', s') \cdot G(R, V, \boldsymbol{a}, s) = G(R'R,\ V'+R'V,\ \boldsymbol{a}'+V's+R'\boldsymbol{a},\ s'+s)
$$

**행렬 연산으로 표현** 하면 더 간단하다. 
어떻게 이렇게 간단히 표현할 방법을 찾은 건지는 모르겠지만.

$$
\begin{pmatrix} R & V & \boldsymbol{a} \\ 0 & 1 & s \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ t \\ 1 \end{pmatrix} = \begin{pmatrix} Rx + Vt + \boldsymbol{a} \\ t+s \\ 1 \end{pmatrix}
$$

$$
G' \cdot G = \begin{pmatrix} R' & V' & \boldsymbol{a}' \\ 0 & 1 & s' \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} R & V & \boldsymbol{a} \\ 0 & 1 & s \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} R'R & R'V+V' & R'\boldsymbol{a}+V's+\boldsymbol{a}' \\ 0 & 1 & s'+s \\ 0 & 0 & 1 \end{pmatrix}
$$

**변환과 그것의 generator:**
- time → $H$ 해밀토니안
- translation → $\boldsymbol{P}$ momentum
- rotation → $L_{jk}$ angular momentum
- boost → $C_i$ (이건 뭐지?)

---

## Generator의 5×5 Matrix 표현

아까 위에서 3by3 matrix로 표현한 건 사실 뭐가 축약된 것이었다. 
Matrix의 내부에 있는 원소는 하나의 값이 아니라 그것 자체로 matrix 였다. 
$R$은 3 by 3 matrix, $V$와 $\boldsymbol{a}$ 는 3 by 1 matrix이다. 
그걸 풀어쓰면, 갈릴레이변환 자체는 5by5 matrix로 완전하게 나타낼 수 있다.

물론 각 generator도 5 by 5 matrix로 나타낼 수 있다. 

$$
isH = \begin{pmatrix} 0&0&0&0&0 \\ 0&0&0&0&0 \\ 0&0&0&0&0 \\ 0&0&0&0&s \\ 0&0&0&0&0 \end{pmatrix}
$$

$$
i\boldsymbol{a}\cdot\boldsymbol{P} = \begin{pmatrix} 0&0&0&0&a_1 \\ 0&0&0&0&a_2 \\ 0&0&0&0&a_3 \\ 0&0&0&0&0 \\ 0&0&0&0&0 \end{pmatrix}
$$

$$
iV\cdot\boldsymbol{C} = \begin{pmatrix} 0&0&0&v_1&0 \\ 0&0&0&v_2&0 \\ 0&0&0&v_3&0 \\ 0&0&0&0&0 \\ 0&0&0&0&0 \end{pmatrix}
$$

$$
i\theta_i \varepsilon^{ijk} L_{jk} = \begin{pmatrix} 0&\theta_3&-\theta_2&0&0 \\ -\theta_3&0&\theta_1&0&0 \\ \theta_2&-\theta_1&0&0&0 \\ 0&0&0&0&0 \\ 0&0&0&0&0 \end{pmatrix}
$$

**종합:**

$$
G_\gamma(R,V,\boldsymbol{a},s) = \mathbb{I}_{5\times5} + \begin{pmatrix} 0&\theta_3&-\theta_2&v_1&a_1 \\ -\theta_3&0&\theta_1&v_2&a_2 \\ \theta_2&-\theta_1&0&v_3&a_3 \\ 0&0&0&0&s \\ 0&0&0&0&0 \end{pmatrix}
$$

$$
= \mathbb{I}_{5\times5} + \left\{isH + i\boldsymbol{a}\cdot\boldsymbol{P} + iV\boldsymbol{C} + i\theta_i\varepsilon^{ijk}L_{jk}\right\}
$$

$$
= e^{isH + i\boldsymbol{a}\cdot\boldsymbol{P} + iV\boldsymbol{C} + i\theta_i\varepsilon^{ijk}L_{jk}}
$$
변환식을 matrix로 나타내면 아래 식을 이용하면 된다.
$$
G_\gamma \boldsymbol{x} = \boldsymbol{x}', \quad \boldsymbol{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ t \\ 1 \end{pmatrix}
$$

# 궁금한 내용

### 양자역학, 고양이 책에서 generator 관련 내용 설명된 부분을 다시 보자. 

### 왜 generator 앞에 허수 i가 붙은 상태로 exponential 위에 올라가야 하나?

**→ 글리아와 논의 (2026-02-24)**

Generator가 **Hermitian 연산자**여야 하기 때문이다.

양자역학에서 측정 가능한 물리량은 Hermitian 연산자여야 하고, 변환 연산자 $U$는 확률 보존을 위해 **Unitary**여야 한다:

$$
U^\dagger U = I
$$

Unitary 연산자를 exponential로 쓰면 $U = e^{i\theta G}$. 여기서 $G$가 Hermitian $(G^\dagger = G)$이면:

$$
U^\dagger = e^{-i\theta G^\dagger} = e^{-i\theta G} \implies U^\dagger U = I \quad \checkmark
$$

만약 $i$ 없이 $U = e^{\theta G}$로 쓰면, Unitary를 만족하려면 $G$가 anti-Hermitian이어야 하고, 그러면 eigenvalue가 순허수가 되어 측정값이 실수가 아니게 된다. 따라서 $i$를 붙여 **generator를 Hermitian으로, 변환 연산자를 Unitary로** 동시에 만족시킨다.

$\hbar$는 단위 때문이다. $e$ 위에 올라가는 건 무차원이어야 하는데, $\hat{p}$는 운동량 단위, $\varepsilon$은 길이 단위를 가지므로 $\hbar$로 나눠 무차원으로 만든다.

### boost의 generator $C_i$는 정확히 무엇인가?

**→ 글리아와 논의한 내용 요약 (2026-02-24)**

Boost는 $x$와 $p$ 둘 다 동시에 변환한다.
- $x \rightarrow x + Vt$
- $p \rightarrow p + mV$

$x$공간에서 infinitesimal boost를 전개하면 generator로 $\hat{p}t$가 나오고, $p$공간에서 전개하면 $m\hat{x}$가 나온다. 어느 한쪽만 봐선 절반밖에 못 본다. 둘을 합쳐야 완전한 generator가 된다:

$$
C_i = mx_i - p_i t
$$

$C_i$는 **질량중심의 위치**와 관련된 양이다. boost invariance에 의해 보존되며, Noether 정리 관점에서 **boost invariance → $C_i$ 보존** 쌍이 성립한다. $H, P, L$과 달리 $C_i$는 $t$에 명시적으로 의존하는 보존량이라 낯설게 느껴지는 것.

두 basis $(x, p)$를 동시에 변환하는 경우는 하나의 공간만으로 다루기 어렵다. 이를 우아하게 해결하는 도구가 **Poisson bracket**과 **symplectic geometry**이며, 이것이 해밀토니안 역학이 phase space $(q, p)$ 전체를 동등하게 다루는 이유다. 라그랑지안이 $q$공간만 보는 것과 대조된다.

### 군론기초도 알아봐야겠다. 

### 푸앵카레 그룹이 뭔가?

# 연관 학습 노트


# References
Tong의 Lecture note
[[1 Newton’s Laws of Motion.pdf]]


맥스웰 방정식 풀이법 참고해 봐라고 주신 자료가 있다. 
긴 논문이다. 
[[Maxwell S1.pdf]]
[[Maxwell S2.pdf]]


# 이어지는 강의
[[AM lecture notes - Transformation of equation, Casimir Invariants]]


