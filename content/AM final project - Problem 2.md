
문제: [[AM Finalterm problem]] / 답안 모음: [[AM finalterm answer]]
# Problem 2
Revisit this problem based on the symplectic geometry perspectives. Can you find the corresponding symplectic two-form and the symplectic vector field? Let me give you the answer.

$$V^{7} = T(\mathbb{R}^{3}\backslash\{0\}) \times \mathbb{R} = (x, p, t) \quad \text{(6-dimensional phase space + 1 time dimension)}$$

$$\sigma = \omega - dh \wedge dt$$ 

$$\omega = \omega_{0} + \frac{e}{2}\epsilon_{ijk}B^{i}dx^{j} \wedge dx^{k}$$

$$\omega_{0} = dp_{i} \wedge dx^{i} - \frac{s}{2|p|^{3}}\epsilon^{ijk}p_{i}dp_{j} \wedge dp_{k}$$

$$
h = |p| + e\phi
$$
$$
i_{X_{H}}\omega = dH \quad \text{or the following expression:}
$$

$$
\omega_{\alpha\beta}\dot{\xi}^{\beta} = \partial_{\alpha}h, \quad \text{where } \omega_{\alpha\beta} = \partial_{\alpha}u_{\beta} - \partial_{\beta}u_{\alpha}
$$

(Question)
  * Clarify the symplectic structure. Show that this symplectic two-form is non-degenerate, i.e., given by $\det(\omega_{\alpha\beta}) \neq 0$.

---

## Step 1: Lagrangian의 일반식과 비교
액션을 통해 정의된 라그랑지안을 다시 보면, 

$$
L = (\mathbf{p} + e\mathbf{A}) \cdot \dot{\mathbf{x}} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \dot{\mathbf{p}}
$$

식 (L)에서 제시한 Lagrangian의 일반식과 비교하여 $u_\alpha(\xi)$와 $h(\xi)$를 찾는다. 

$$
u_{x^i} = p_i + eA_i, \qquad u_{p_i} = -a_i
$$
$$
 h = |p| + e\phi \tag{2.7}
$$
 논문에서 제시한 것과 같은 해밀토니안이 나왔다. 
 
## Step 2: Symplectic 2-form $\omega = d\theta$
$u_{x^i}$와 $u_{p^i}$, 그리고 앞서 살펴본 symplectic matrix $\omega_{\alpha\beta}$를 구하는 식 $\omega_{\alpha\beta} \equiv \partial_\alpha u_\beta - \partial_\beta u_\alpha$ 과 symplectic 2-form의 일반식 $\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta$ 를 이용해서 symplectic 2-form을 구한다.

좌표 $\xi^\alpha = (x^1, x^2, x^3, p_1, p_2, p_3)$에서 $\omega_{\alpha\beta} = \partial_\alpha u_\beta - \partial_\beta u_\alpha$를 블록별로 계산한다.

**블록 (1) — $x$-$x$ 블록: $\omega_{x^i x^j}$**

$$
\omega_{x^i x^j} = \partial_{x^i} u_{x^j} - \partial_{x^j} u_{x^i} = e(\partial_{x^i} A_j - \partial_{x^j} A_i)
$$

양변에 $\epsilon_{kij}$를 곱하는 방식으로 $B^k = \epsilon^{kij}\partial_{x^i} A_j$를 역으로 풀면:

$$
\epsilon_{kij}B^k = \epsilon_{kij}\epsilon^{klm}\partial_{x^l} A_m = (\delta_i^l\delta_j^m - \delta_i^m\delta_j^l)\partial_{x^l} A_m = \partial_{x^i} A_j - \partial_{x^j} A_i
$$

$\epsilon_{kij} = \epsilon_{ijk}$ (cyclic)이므로:

$$
\partial_{x^i} A_j - \partial_{x^j} A_i = \epsilon_{ijk}B^k
$$

따라서:

$$
\omega_{x^i x^j} = e\,\epsilon_{ijk}B^k
$$

**블록 (2) — $p$-$p$ 블록: $\omega_{p_i p_j}$**

$$
\omega_{p_i p_j} = \partial_{p_i} u_{p_j} - \partial_{p_j} u_{p_i} = -(\partial_{p_i} a_j - \partial_{p_j} a_i)
$$

$(\nabla_p \times \mathbf{a})^k = \Theta^k$의 정의로부터 $\partial_{p_i} a_j - \partial_{p_j} a_i = \epsilon_{ijk}\Theta^k$이므로:

$$
\omega_{p_i p_j} = -\epsilon_{ijk}\Theta^k
$$

여기서 논문에서 **spin enslaving**이라고 표현하는 스핀과 모멘텀의 관계식, $\mathbf{s} = s\hat{\mathbf{p}}$를 적용한다. Spin $s$인 chiral 입자의 Berry curvature는:

$$
\Theta^k = \frac{s\,p^k}{|p|^3}
$$

이는 $\boldsymbol{\Theta} = s\,\frac{\hat{\mathbf{p}}}{|\mathbf{p}|^2}$로, $p$-공간에서의 magnetic monopole이다. 대입하면:

$$
\omega_{p_i p_j} = -\frac{s\,\epsilon_{ijk}p^k}{|p|^3}
$$

**블록 (3) — $x$-$p$ 블록: $\omega_{x^i p_j}$**

$a_j$는 $\mathbf{p}$에만, $A_i$는 $\mathbf{x}$에만 의존하므로 교차 미분은 0:

$$
\omega_{x^i p_j} = \partial_{x^i} u_{p_j} - \partial_{p_j} u_{x^i} = 0 - \partial_{p_j}p_i = -\delta_{ij}
$$

따라서 $\omega_{p_j x^i} = +\delta_{ij}$.

### 2-form으로 조립
각 블록의 기여를 합산하면:

$$
\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta = dp_i\wedge dx^i - \frac{s}{2|p|^3}\epsilon_{ijk}p^k\,dp_i\wedge dp_j + \frac{e}{2}\epsilon_{ijk}B^k\,dx^i\wedge dx^j
$$

인덱스를 올리고 순서를 재배열하면 ($\epsilon_{ijk}p^k\,dp_i\wedge dp_j = \epsilon^{ijk}p_i\,dp_j\wedge dp_k$):

$$
\boxed{\omega = dp_i\wedge dx^i - \frac{s}{2|p|^3}\epsilon^{ijk}p_i\,dp_j\wedge dp_k + \frac{e}{2}\epsilon_{ijk}B^k\,dx^i\wedge dx^j}
$$

이를 논문 표기로 분해하면:

$$
\omega_0 = dp_i\wedge dx^i - \frac{s}{2|p|^3}\epsilon^{ijk}p_i\,dp_j\wedge dp_k \tag{2.6}
$$

$$
\omega = \omega_0 + \frac{e}{2}\epsilon_{ijk}B^i\,dx^j\wedge dx^k \tag{2.5}
$$

문제에서 제시한 형태와 정확히 일치한다. ✓

- 첫 항 $dp_i\wedge dx^i$: 표준 canonical symplectic form
- 둘째 항 $\sim\epsilon^{ijk}p_i\,dp_j\wedge dp_k$: $p$-공간의 magnetic monopole (Berry 곡률), spin enslaving $\mathbf{s}=s\hat{\mathbf{p}}$에 의해 계수가 $s$
- 셋째 항 $\sim\epsilon_{ijk}B^k\,dx^i\wedge dx^j$: 실공간 자기장에서 오는 보정

### Symplectic 행렬 $\omega_{\alpha\beta}$의 명시적 표현
좌표 순서 $(x_1, x_2, x_3, p_1, p_2, p_3)$에서 블록별 계산 결과를 행렬로 쓰면:

$$
\omega_{\alpha\beta} = \begin{pmatrix} 0 & eB^3 & -eB^2 & -1 & 0 & 0 \\ -eB^3 & 0 & eB^1 & 0 & -1 & 0 \\ eB^2 & -eB^1 & 0 & 0 & 0 & -1 \\ 1 & 0 & 0 & 0 & -\Theta^3 & \Theta^2 \\ 0 & 1 & 0 & \Theta^3 & 0 & -\Theta^1 \\ 0 & 0 & 1 & -\Theta^2 & \Theta^1 & 0 \end{pmatrix} 
$$

블록으로 쓰면:

$$
\omega_{\alpha\beta} = \begin{pmatrix} X & -\mathbf{1} \\ \mathbf{1} & P \end{pmatrix}, \qquad X_{ij} = \omega_{x^i x^j} = e\epsilon_{ijk}B^k,\quad P_{ij} = \omega_{p_i p_j} = -\epsilon_{ijk}\Theta^k
$$

### Non-degeneracy: $\det(\omega_{\alpha\beta}) = \mathfrak{m}^2$
**Pfaffian — 정의 및 공식**

$2n\times 2n$ 반대칭 행렬의 determinant는 Pfaffian을 이용해 계산할 수 있다. 

$$
\det(A) = \mathrm{Pf}(A)^2
$$

$2n\times 2n$ 반대칭 행렬 A의 Pfaffian은 다음과 같이 정의된다:

$$
\mathrm{Pf}(A) = \frac{1}{2^n n!}\sum_{\sigma\in S_{2n}}\mathrm{sgn}(\sigma)\prod_{i=1}^{n}A_{\sigma(2i-1),\,\sigma(2i)}
$$
이때 $S_{2n}$는 순열 $\{1, 2, \cdots, 2n\}$의 순열들의 집합니다. 
중복을 제거하면 **완전 매칭(perfect matching)** 전개로 쓸 수 있다. 지표 집합 $\{1,2,\ldots,2n\}$의 완전 매칭이란 전체를 $n$개의 쌍으로 나누는 방법이며, 총 $(2n-1)!! = (2n-1)(2n-3)\cdots 1$가지가 존재한다:

$$
\mathrm{Pf}(A) = \sum_{\text{perfect matchings}\;\alpha}\mathrm{sgn}(\alpha)\prod_{(i,j)\in\alpha}A_{ij}
$$

여기서 부호 $\mathrm{sgn}(\alpha)$는 매칭 $\alpha$를 표준 순서 $\{(1,2),(3,4),\ldots,(2n-1,2n)\}$로 정렬했을 때의 순열의 부호이다. 

구체적으로, 매칭 $\alpha = (i_1 j_1)(i_2 j_2)\cdots(i_n j_n)$에 대해 각 쌍 내부는 $i_k < j_k$, 쌍들 사이는 $i$가 오름차순이 되도록 $i_1 < i_2 < \cdots < i_n$이 되도록 정렬하면 순열 $\sigma = (i_1, j_1, i_2, j_2, \ldots, i_n, j_n)$을 얻는다. 이때 $\mathrm{sgn}(\alpha) = \mathrm{sgn}(\sigma)$이다. 
예를 들어 매칭 $(14)(25)(36)$은 이미 표준 순서이므로 순열 $\sigma = (1,4,2,5,3,6)$에 해당한다. 순열 $\sigma$를 $(1, 2, 3, 4,5,6)$로 되돌리는데 필요한 inversion을 세면 $(4,2),\,(4,3),\,(5,3)$으로 총 3개이므로 $\mathrm{sgn} = (-1)^3 = -1$이다. 

지금 determinant를 구하는 $\omega_{\alpha\beta}$같이 $6\times 6$ matrix의 경우, $n=3$이며, 매칭은 $(2\cdot3-1)!! = 15$가지이다.

$\alpha < \beta$ 조건을 만족하는 $\omega_{\alpha\beta}$중 non-zero element는:

$$
\omega_{12}=eB^3,\quad \omega_{13}=-eB^2,\quad \omega_{23}=eB^1,\quad \omega_{14}=-1,\quad \omega_{25}=-1,\quad \omega_{36}=-1
$$

$$
\omega_{45}=-\Theta^3,\quad \omega_{46}=\Theta^2,\quad \omega_{56}=-\Theta^1
$$

15개 완전 매칭 중 모든 쌍이 영이 아닌 것만 살아남는다:

| 매칭             | 부호   | 기여                                                                        |
| -------------- | ---- | ------------------------------------------------------------------------- |
| $(14)(25)(36)$ | $-1$ | $-\omega_{14}\omega_{25}\omega_{36} = -(-1)(-1)(-1) = 1$                  |
| $(12)(36)(45)$ | $+1$ | $+\omega_{12}\omega_{36}\omega_{45}=(eB^3)(-1)(-\Theta^3) = eB^3\Theta^3$ |
| $(13)(25)(46)$ | $+1$ | $+\omega_{13}\omega_{25}\omega_{46}=(-eB^2)(-1)(\Theta^2) = eB^2\Theta^2$ |
| $(14)(23)(56)$ | $+1$ | $+\omega_{14}\omega_{23}\omega_{56}=(-1)(eB^1)(-\Theta^1) = eB^1\Theta^1$ |


합산하면:

$$
\mathrm{Pf}(\omega) = 1 + e(B^1\Theta^1 + B^2\Theta^2 + B^3\Theta^3) = (1 + e\,\boldsymbol{\Theta}\cdot\mathbf{B}) = \mathfrak{m}
$$

따라서:

$$
\boxed{\det(\omega_{\alpha\beta}) = \mathrm{Pf}(\omega)^2 = \mathfrak{m}^2 \equiv (1 + e\,\boldsymbol{\Theta} \cdot B)^2 } \tag{2.8}
$$

$\mathfrak{m} = 1 + e\,\boldsymbol{\Theta}\cdot\mathbf{B} \neq 0$인 한 $\det(\omega) \neq 0$이므로, symplectic 2-form은 **non-degenerate**하다. 
1번 문제의 EOM에서 등장한 effective mass $\mathfrak{m}$이 여기서 위상공간 부피 측도의 보정 인자로 재등장하는 것은 우연이 아니다.

## Step 3: Hamiltonian vector field $X_H$

$i_{X_H}\omega = dh$는 성분으로 쓰면 $\omega_{\alpha\beta}X_H^\beta = \partial_\alpha h$이다. 즉 (2.3)의 행렬 방정식:

$$
\begin{pmatrix} X & -\mathbf{1} \\ \mathbf{1} & P \end{pmatrix} \begin{pmatrix} \dot{x}^i \\ \dot{p}_i \end{pmatrix} = \begin{pmatrix} \partial_{x^i}h \\ \partial_{p_i}h \end{pmatrix}
$$

$h = |p| + e\phi$이므로 우변은:

$$
\partial_{x^i}h = e\partial_{x^i}\phi = -eE_i, \qquad \partial_{p_i}h = \hat{p}_i
$$

**위쪽 블록** ($x$ 방향):

$$
e\epsilon_{ijk}B^k\dot{x}^j - \dot{p}_i = -eE_i \quad\Rightarrow\quad \dot{p}_i = eE_i + e(\dot{\mathbf{x}}\times\mathbf{B})_i \tag{I}
$$

**아래쪽 블록** ($p$ 방향):

$$
\dot{x}^i - \epsilon_{ijk}\Theta^k\dot{p}^j = \hat{p}^i \quad\Rightarrow\quad \dot{\mathbf{x}} = \hat{\mathbf{p}} + \boldsymbol{\Theta}\times\dot{\mathbf{p}} \tag{II}
$$

식 (I), (II)는 Problem 1의 EL 방정식과 완전히 동일하다. 따라서 연립해서 풀면 동일한 결과:

$$
\boxed{X_H = \frac{1}{\mathfrak{m}}\Big[\,\big(\hat{p}^i + e(\mathbf{E}\times\boldsymbol{\Theta})^i + e(\boldsymbol{\Theta}\cdot\hat{\mathbf{p}})B^i\big)\,\partial_{x^i}\ +\ \big(eE_i + e(\hat{\mathbf{p}}\times\mathbf{B})_i + e^2(\mathbf{E}\cdot\mathbf{B})\Theta_i\big)\,\partial_{p_i}\Big]} \tag{2.5}
$$

$X_H$의 적분 곡선(integral curve)이 바로 chiral fermion의 운동 궤적이다.

$\det(\omega) = \mathfrak{m}^2 \neq 0$이 보장되므로 $X_H = \omega^{-1}(dh)$는 **유일하게** 정의된다. Problem 1에서 EOM의 분모로 등장했던 $\mathfrak{m}$이, symplectic 구조의 non-degeneracy 조건으로부터 자연스럽게 재등장하는 것이다.

---