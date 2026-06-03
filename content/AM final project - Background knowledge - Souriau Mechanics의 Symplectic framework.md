# Background knowledge: Souriau Mechanics의 Symplectic framework

> [!info] 이 섹션의 목적
> 레퍼런스 논문(Duval & Horváthy 2015)의 **Appendix A**는 일반적인 해밀턴 역학의 symplectic 기하학 표현을 제시한다. 이 표현이 없으면 논문 전체의 언어를 이해할 수 없으며, 특히 2번 문제의 sympletic 2-form 유도는 이 framework 위에서 이루어진다. 아래는 그 공백을 직접 채운 유도이다.

## 설정: General Lagrangian

Phase space 좌표 $\xi^\alpha = (x^i, p_i)$를 통합해서 다음 형태의 Lagrangian을 고려한다:

$$
\mathcal{L} = u_\alpha(\xi)\,\dot{\xi}^\alpha - h(\xi) \tag{L}
$$

$u_\alpha$는 $\xi$에만 의존하는 함수이고, $h(\xi)$는 Hamiltonian이다. 
$u_\alpha(\xi)\dot{\xi}^\alpha$는 phase space Lagrangian에서 $p_i\dot{q}^i$에 해당하는 항의 일반화이다. 르장드르 변환이 이미 완료된 phase space 위에서, $u_\alpha$는 canonical 1-form $\theta = p_i\,dq^i$를 일반화한 것이다. 
*Berry term $-a_i\dot{p}^i$가 있는 경우, $u_{p_i} = -a_i \neq 0$이 되어 momentum space 방향으로도 연결(connection)이 생기며, 이것이 Berry connection의 기하학적 의미이다.*

### Step A: Euler-Lagrange 방정식 유도

Lagrangian의 편미분을 계산한다. $\frac{\partial}{\partial\xi^\alpha} = \partial_\alpha$라고 표기. 

$$
\frac{\partial\mathcal{L}}{\partial\xi^\alpha} = \partial_\alpha u_\beta\,\dot{\xi}^\beta - \partial_\alpha h
$$

$$
\frac{\partial\mathcal{L}}{\partial\dot{\xi}^\alpha} = u_\alpha
$$

Euler-Lagrange equation에 대입한다. $\frac{d}{dt}u_\alpha$를 chain rule로 전개하면:

$$
\frac{d}{dt}u_\alpha(\xi) = \dot{\xi}^\beta\,\partial_\beta u_\alpha
$$

따라서 Euler-Lagrange equation은:

$$
\partial_\alpha u_\beta\,\dot{\xi}^\beta - \partial_\alpha h - \dot{\xi}^\beta\,\partial_\beta u_\alpha = 0
$$

$$
\boxed{(\partial_\alpha u_\beta - \partial_\beta u_\alpha)\,\dot{\xi}^\beta = \partial_\alpha h} \tag{A1-1}
$$
논문 속 식 (A1)을 이렇게 유도했다. 

### Step B: Symplectic 2-form 정의

위 방정식의 계수 행렬을 $\omega_{\alpha\beta}$로 이름 붙인다:

$$
\omega_{\alpha\beta} \equiv \partial_\alpha u_\beta - \partial_\beta u_\alpha \tag{A1-2}
$$

$\omega_{\alpha\beta} = -\omega_{\beta\alpha}$이므로 antisymmetric하다. 이를 이용해서 phase space 위의 sympletic 2-form을 정의하면:

$$
\omega = \frac{1}{2}\omega_{\alpha\beta}\,d\xi^\alpha\wedge d\xi^\beta
$$
이로서 일반적인 라그랑지안으로부터 그에 상응하는 sympletic 2-form을 구하는 방법을 알아냈다. 

### Step C: Evolution space와 $\sigma$ 정의

Phase space에 시간 $t$를 한 차원 더 붙여 **evolution space** $V = \text{phase space}\times\mathbb{R}$를 만든다. 이 위에서 다음 two-form을 정의한다:

$$
\sigma = \omega - dh\wedge dt = \frac{1}{2}(\partial_\alpha u_\beta - \partial_\beta u_\alpha)\,d\xi^\alpha\wedge d\xi^\beta - \partial_\alpha h\,d\xi^\alpha\wedge dt \tag{A2}
$$

### Step D: $\sigma(\dot{y}, \cdot) = 0$이 EOM임을 증명

Evolution space의 좌표 $y = (\xi^\alpha, t)$에서 trajectory일 때,  
논문에서는 아래 식을 EMO이라고 둔다. 
$$
\sigma(\dot{y}, \cdot) = 0 \tag{A3}
$$
이것이 EMO임을 증명해 보자. Trajectory의 tangential vertor는 $\dot{y}$는:

$$
\dot{y} = \dot{\xi}^\alpha\,\partial_\alpha + \partial_t
$$

시간 $t$가 매개변수이므로 $dt(\dot{y}) = 1$이다. 임의의 벡터 $v$에 대해 $v^\alpha \equiv d\xi^\alpha(v)$, $v^t \equiv dt(v)$로 정의하면, wedge product의 정의로부터:

$$
(d\xi^\alpha\wedge d\xi^\beta)(\dot{y},\, v) = \dot{\xi}^\alpha v^\beta - \dot{\xi}^\beta v^\alpha
$$

$$
(d\xi^\alpha\wedge dt)(\dot{y},\, v) = \dot{\xi}^\alpha v^t - v^\alpha
$$

대입하면:

$$
\sigma(\dot{y},v) = \frac{1}{2}\omega_{\alpha\beta}(\dot{\xi}^\alpha v^\beta - \dot{\xi}^\beta v^\alpha) - \partial_\alpha h(\dot{\xi}^\alpha v^t - v^\alpha)
$$

$\omega_{\alpha\beta}$의 반대칭성을 이용해 첫 항을 정리한다:

$$
\frac{1}{2}\omega_{\alpha\beta}(\dot{\xi}^\alpha v^\beta - \dot{\xi}^\beta v^\alpha) = \omega_{\alpha\beta}\dot{\xi}^\alpha v^\beta
$$

따라서:

$$
\sigma(\dot{y},v) = \left[\omega_{\alpha\beta}\dot{\xi}^\alpha + \partial_\beta h\right]v^\beta - \left[\dot{\xi}^\alpha\partial_\alpha h\right]v^t
$$

이것이 임의의 $v$에 대해 0이 되려면 $v^\beta$와 $v^t$의 계수가 각각 0이어야 한다:

$$
\begin{cases}
\omega_{\alpha\beta}\,\dot{\xi}^\alpha + \partial_\beta h = 0 \\[4pt]
\dot{\xi}^\alpha\,\partial_\alpha h = 0
\end{cases}
$$

**첫 번째 조건**: $\omega_{\alpha\beta}\dot{\xi}^\alpha = -\partial_\beta h$. $\omega_{\alpha\beta} = -\omega_{\beta\alpha}$를 이용해 부호를 바꾸고 인덱스를 $\alpha\leftrightarrow\beta$로 rename하면:

$$
\boxed{\omega_{\alpha\beta}\,\dot{\xi}^\beta = \partial_\alpha h}
$$

이것이 Hamilton 방정식이며, 식 (A1-1)과 같다. 

**두 번째 조건**: $\dot{\xi}^\alpha\partial_\alpha h = \frac{dh}{dt} = 0$ — 에너지 보존이다. 이 조건은 사실 독립적이지 않다. 첫 번째 EOM 양변에 $\dot{\xi}^\beta$를 곱하면:

$$
\omega_{\alpha\beta}\,\dot{\xi}^\alpha\dot{\xi}^\beta = \dot{\xi}^\alpha\partial_\alpha h\,
$$

좌변은 $\omega_{\alpha\beta}$의 반대칭성에 의해 자동으로 0이므로, 에너지 보존 $\frac{dh}{dt}=0$은 EOM으로부터 자동으로 따라온다.

### 핵심 등가 관계

$$
\underbrace{\delta S = 0}_{\text{variational principle}} \iff \underbrace{\omega_{\alpha\beta}\dot{\xi}^\beta = \partial_\alpha h}_{\text{Hamilton EOM}} \iff \underbrace{\sigma(\dot{y},\cdot)=0}_{\ker\sigma\text{에 접하는 곡선}}
$$

이 세 가지 표현은 모두 동치이며, 논문 Appendix A의 핵심이다. 1번 문제는 이 프레임워크를 chiral fermion action에 적용한 것이다.

---
