---
draft: true
---
문제: [[AM Finalterm problem]] / 답안 모음: [[AM finalterm answer]]
# Problem 3

Consider a spinning particle to follow relativity. To describe the spinning particle, we consider a 9-dimensional phase space, given by:

$$
V^{9} = \left\{ R, I, J \in \mathbb{R}^{3,1} \;\middle|\; I_{\mu}I^{\mu} = J_{\mu}J^{\mu} = 0, \; I_{\mu}J^{\mu} = -1 \right\}
$$ 

Here, $I_{\mu} \& J_{\mu}$ are two independent null vectors, given above. To figure out that this is the 9-dimensional phase space, we introduce $P_{\mu} \& S_{\mu\nu}$ to replace $I_{\mu} \& J_{\mu}$ as follows:
$$I_{\mu} \rightarrow P_{\mu} \quad \text{and} \quad S_{\mu\nu} = -s\epsilon_{\mu\nu\rho\sigma}P^{\rho}J^{\sigma}$$ 

Then, we obtain:
$$V^{9} = \left\{ R, P \in \mathbb{R}^{3,1}, \; S \in \mathfrak{o}(3,1) \;\middle|\; P_{\mu}P^{\mu} = 0, \; S_{\mu\nu}P^{\nu} = 0, \; \frac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^{2} \right\}$$

It is straightforward to check out that $P_{\mu} \& S_{\mu\nu}$ satisfy these constraints. Now, we introduce the following closed two-form:
$$\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\mu}^{\lambda} \wedge S_{\rho}^{\mu} dS_{\lambda}^{\rho}$$ 
Here, we do not consider electromagnetic fields.  **(Question)** Identify the Hamiltonian vector field and obtain the following Hamiltonian equation of motion:
$$\begin{cases}
P_{\mu}\dot{R}^{\mu} = 0 \\
\dot{P}^{\mu} = 0 \\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu}
\end{cases}$$

It is quite surprising to realize that this symplectic two-form is identical to that of **Q. 2** if electromagnetic fields are neglected, i.e., $\omega_{0}$ in **Q. 2**. In other words, the symplectic two-form of **Q. 2** without electromagnetic fields is a symplectic reduction of the above symplectic two-form. Can you figure it out? See below.

To obtain down-to-earth expressions, we put $R = (r, t)$, where $r$ and $t$ are the position and time coordinates in a chosen Lorentz frame. The two null-vectors are in turn $P = (p, |p|)$ and $J = (q, -|q|)$, where $p$ and $q$ are two (necessarily nonzero) 3-vectors which satisfy $p \cdot q + |p||q| = 1$. In these terms we have:
$$s = s(p|q| + q|p|)$$
$$S_{ij} = \epsilon_{ijk}s^{k}$$ 
$$S_{j4} = s(p \times q)_{j} = (\hat{p} \times s)_{j}$$

* **(Question)**
  * Based on this coordinate representation, find the moment map that reduces the symplectic two-form in 9-dimensional phase space to that in 6-dimensional one.

---

풀이를 하기에 앞서, 알고 있는 지식에서 출발하자. Si Li 교과서에서는 Hamilton equation의 기하학적 재정식화를 일반적인 phase space $\{q,p\}$에서 아래 과정과 같이 하였다. 

## [Si Li 교과서] Hamilton equation의 기하학적 재정식화

> [!important] [Si Li 교과서] Proposition 3.4.1
> $\mathcal{U} \times \mathbb{R}$ 위에 다음 두 조건을 만족하는 벡터장 $X_\mathcal{H}$가 **유일하게** 존재한다:
> 1. $\pi_*(X_\mathcal{H}) = \frac{\partial}{\partial t}$ (시간 방향 성분이 1)
> 2. $\iota_{X_\mathcal{H}} \omega_\mathcal{H} = 0$ ($\omega_\mathcal{H}$의 null direction)

**조건 ①의 의미**: $X_\mathcal{H}$의 형태가 다음으로 제한된다.

$$
X_\mathcal{H} = \frac{\partial}{\partial t} + \sum_i \left( a^i \frac{\partial}{\partial q_i} + b^i \frac{\partial}{\partial p_i} \right)
$$

시간 방향은 고정되고, $a^i$와 $b^i$가 미지수이다.

**조건 ②로 미지수 결정**: $\omega_\mathcal{H}$를 성분으로 풀어쓰면

$$
\omega_\mathcal{H} = \sum_i dp_i \wedge dq_i - \sum_i (\partial_{q_i}\mathcal{H}\, dq_i + \partial_{p_i}\mathcal{H}\, dp_i) \wedge dt
$$

이에 $X_\mathcal{H}$를 interior product하면

$$
\iota_{X_\mathcal{H}} \omega_\mathcal{H} = \sum_i (a^i\, dp_i - b^i\, dq_i) + \sum_i (\partial_{q_i}\mathcal{H}\, dq_i + \partial_{p_i}\mathcal{H}\, dp_i) + (a^i \partial_{q_i}\mathcal{H} + b^i \partial_{p_i}\mathcal{H})\, dt = 0
$$

$dq_i$ 성분: $-b^i + \partial_{q_i}\mathcal{H} = 0 \implies b^i = \partial_{q_i}\mathcal{H}$

$dp_i$ 성분: $a^i + \partial_{p_i}\mathcal{H} = 0 \implies a^i = -\partial_{p_i}\mathcal{H}$

따라서

$$
\boxed{X_\mathcal{H} = \frac{\partial}{\partial t} + \sum_i \left( \frac{\partial \mathcal{H}}{\partial p_i} \frac{\partial}{\partial q_i} - \frac{\partial \mathcal{H}}{\partial q_i} \frac{\partial}{\partial p_i} \right)}
$$

**Hamilton 방정식과의 연결**: 적분곡선 $\gamma(t) = (q_i(t), p_i(t), t)$에 대해 $\frac{d}{dt}\gamma(t) = X_\mathcal{H}(\gamma(t))$이 정확히

$$
\dot{q}_i = \frac{\partial \mathcal{H}}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial \mathcal{H}}{\partial q_i}
$$

를 준다.

---

## Solution to Problem 3 — Part 1: EOM from $\ker\sigma$

강의노트의 Proposition 3.4.1 프레임워크를 이번 문제에 그대로 적용한다. 단, 두 가지 차이를 먼저 명시한다.

1. **$dh\wedge dt$ 항의 부재.** 강의노트에서는 $\omega_\mathcal{H}=\omega - d\mathcal{H}\wedge dt$로 Hamiltonian이 명시적으로 분리되어 있었다. 그러나 Problem 3의 $\sigma$에는 이 항이 없다. Massless relativistic particle에서는 시간이 별도 좌표가 아니라 $R^\mu$ 안에 포함되며, parameter $\tau$는 임의(reparametrization invariant)이다. 이 $\tau$의 임의성이 강의노트 조건 ① ($\pi_*X = \partial_t$로 정규화)의 역할을 대체한다.
2. **$\ker\sigma$의 차원.** 강의노트의 표준 케이스는 $\omega$가 non-degenerate이라 $\ker$가 1차원(시간 방향)이었다. 여기서는 $V^9$의 제약 때문에 $\sigma$가 evolution space 위에서 degenerate하며, $\ker\sigma$가 **3차원**이다. 이 추가 구조가 Z-shift(Wigner–Souriau translation)로 나타난다.

### Setup

Evolution space $V^9$의 좌표를 $(R^\mu, P^\mu, S^{\mu\nu})$로 잡는다. 그 위의 closed 2-form:

$$
\sigma = \underbrace{-dP_\mu \wedge dR^\mu}_{\sigma_1} \underbrace{- \frac{1}{2s^2}\,dS^\lambda_{\ \mu}\wedge S^\mu_{\ \rho}\,dS^\rho_{\ \lambda}}_{\sigma_2}
$$

강의노트 조건 ①에 대응하여, Hamiltonian vector field $X$를 적분곡선 $(R^\mu(\tau), P^\mu(\tau), S^{\mu\nu}(\tau))$의 접벡터로 잡는다:

$$
X = \dot{R}^\mu\,\partial_{R^\mu} + \dot{P}^\mu\,\partial_{P^\mu} + \dot{S}^{\mu\nu}\,\partial_{S^{\mu\nu}}
$$

여기서 $\dot{R}^\mu, \dot{P}^\mu, \dot{S}^{\mu\nu}$가 미지수이다 (강의노트의 $a^i, b^i$ 역할). 운동방정식은 조건 ②:

$$
\iota_X\sigma = 0
$$

### Step 1: $\iota_X\sigma$의 성분 전개

Interior product 공식 $\iota_X(\alpha\wedge\beta) = \alpha(X)\,\beta - \beta(X)\,\alpha$를 사용한다.

**운동량–위치 항 $\sigma_1$:**

$$
\iota_X\sigma_1 = -\big[dP_\mu(X)\,dR^\mu - dR^\mu(X)\,dP_\mu\big] = -\dot{P}_\mu\,dR^\mu + \dot{R}^\mu\,dP_\mu
$$

**스핀 항 $\sigma_2$:** 이 항은 $dS$가 두 번 들어가므로, interior product에서 두 항이 발생하고, 그 둘이 반대칭성에 의해 합쳐져 factor 2가 나온다. 이 2가 $-\tfrac{1}{2s^2}$의 $\tfrac12$과 정확히 상쇄되는 것이 핵심이다. 아래에서 상세히 보인다.

**(i) 0-form 분리.** $S^\mu_{\ \rho}$는 좌표함수(0-form)이므로 wedge 밖으로 계수처럼 빼낼 수 있다:

$$
\sigma_2 = -\frac{1}{2s^2}\,S^\mu_{\ \rho}\,\big(dS^\lambda_{\ \mu}\wedge dS^\rho_{\ \lambda}\big)
$$

**(ii) Interior product 곱규칙.** $\iota_X(\alpha\wedge\beta) = \alpha(X)\,\beta - \beta(X)\,\alpha$ 와 $dS^a_{\ b}(X) = \dot{S}^a_{\ b}$ 를 적용하면

$$
\iota_X\sigma_2 = -\frac{1}{2s^2}\,S^\mu_{\ \rho}\Big(\dot{S}^\lambda_{\ \mu}\,dS^\rho_{\ \lambda} - \dot{S}^\rho_{\ \lambda}\,dS^\lambda_{\ \mu}\Big)
$$

두 항을 각각 이름 붙이자 (세 인자는 스칼라 곱이므로 순서는 임의):

$$
T_1 \equiv S^\mu_{\ \rho}\,\dot{S}^\lambda_{\ \mu}\,dS^\rho_{\ \lambda} = \dot{S}^\lambda_{\ \mu}\,S^\mu_{\ \rho}\,dS^\rho_{\ \lambda}, \qquad T_2 \equiv S^\mu_{\ \rho}\,\dot{S}^\rho_{\ \lambda}\,dS^\lambda_{\ \mu}
$$

그러면 $\iota_X\sigma_2 = -\dfrac{1}{2s^2}(T_1 - T_2)$.

> [!important] 핵심 보조정리: $T_1 = -T_2$
> 이를 보이는 데에는 $S$의 구체적 형태($S_{\mu\nu} = -s\epsilon_{\mu\nu\rho\sigma}P^\rho J^\sigma$)가 **전혀 필요 없다.** 오직 $S, \dot{S}, dS$가 모두 **반대칭 텐서**라는 사실 $S^a_{\ b} = -S_b^{\ a}$ 하나만 쓰면 된다. ($S$가 antisymmetric이면 $\dot S = dS/d\tau$ 와 변분 $dS$ 도 antisymmetric이다.)
>
> **Step A — dummy 인덱스 재명명.** $T_2$의 합 인덱스 $\mu, \rho, \lambda$는 모두 dummy이므로 자유롭게 이름을 바꿔도 값이 불변이다. $\mu \leftrightarrow \lambda$ 교환($\rho$는 유지):
>
> $$
> T_2 = S^\mu_{\ \rho}\,\dot{S}^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} \;\xrightarrow{\ \mu\leftrightarrow\lambda\ }\; S^\lambda_{\ \rho}\,\dot{S}^\rho_{\ \mu}\,dS^\mu_{\ \lambda}
> $$
>
> 인자 순서를 정렬하면 $T_2 = \dot{S}^\rho_{\ \mu}\,S^\lambda_{\ \rho}\,dS^\mu_{\ \lambda}$.
>
> **Step B — 세 인자에 반대칭성을 한 번씩 적용.** 각 mixed 텐서의 위·아래 첨자 쌍을 교환하면 부호가 바뀐다:
>
> $$
> \dot{S}^\rho_{\ \mu} = -\dot{S}_\mu^{\ \rho}, \qquad S^\lambda_{\ \rho} = -S_\rho^{\ \lambda}, \qquad dS^\mu_{\ \lambda} = -dS_\lambda^{\ \mu}
> $$
>
> 세 번 적용하면 부호 $(-1)^3 = -1$:
>
> $$
> T_2 = (-1)^3\,\dot{S}_\mu^{\ \rho}\,S_\rho^{\ \lambda}\,dS_\lambda^{\ \mu} = -\,\dot{S}_\mu^{\ \rho}\,S_\rho^{\ \lambda}\,dS_\lambda^{\ \mu}
> $$
>
> **Step C — 남은 사슬이 $T_1$임을 확인.** $\dot{S}_\mu^{\ \rho}\,S_\rho^{\ \lambda}\,dS_\lambda^{\ \mu}$ 는 $\dot S$의 둘째첨자 = $S$의 첫째첨자($\rho$), $S$의 둘째첨자 = $dS$의 첫째첨자($\lambda$), $dS$의 둘째첨자 = $\dot S$의 첫째첨자($\mu$)로 닫힌 고리를 이룬다. 이는 첨자 위치(올림/내림)만 다를 뿐 $T_1 = \dot{S}^\lambda_{\ \mu}\,S^\mu_{\ \rho}\,dS^\rho_{\ \lambda}$ 과 동일한 양이다 (metric으로 일관되게 묶여 있으므로):
>
> $$
> \dot{S}_\mu^{\ \rho}\,S_\rho^{\ \lambda}\,dS_\lambda^{\ \mu} = \dot{S}^\lambda_{\ \mu}\,S^\mu_{\ \rho}\,dS^\rho_{\ \lambda} = T_1
> $$
>
> 따라서 $\boxed{T_2 = -T_1}$. $\blacksquare$
>
> **직관:** 홀수 개(3개)의 반대칭 인자로 된 닫힌 사슬(trace 구조)은 순서를 뒤집으면 부호가 바뀐다. transpose가 각 반대칭 인자마다 $-1$을 주고, 인자가 3개($\text{홀수}$)이므로 $(-1)^3 = -1$.

**(iii) 결합.** $T_1 = -T_2$ 이므로 $T_1 - T_2 = -2T_2$. 따라서

$$
\iota_X\sigma_2 = -\frac{1}{2s^2}(T_1 - T_2) = -\frac{1}{2s^2}(-2T_2) = \frac{1}{s^2}\,T_2 = \frac{1}{s^2}\,S^\mu_{\ \rho}\,\dot{S}^\rho_{\ \lambda}\,dS^\lambda_{\ \mu}
$$

factor 2의 정체가 명확해졌다: $T_1 = -T_2$ 때문에 $T_1 - T_2 = -2T_2$, 이 2가 $\tfrac{1}{2s^2}$의 $\tfrac12$을 상쇄하여 $\tfrac{1}{s^2}$ 이 남는다.

따라서

$$
\iota_X\sigma = -\dot{P}_\mu\,dR^\mu + \dot{R}^\mu\,dP_\mu + \frac{1}{s^2}\,S^\mu_{\ \rho}\,\dot{S}^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} = 0
$$

### Step 2: 제약을 존중하는 변분

강의노트 표준 케이스와 결정적으로 다른 점: $dR^\mu, dP^\mu, dS^{\mu\nu}$는 **독립이 아니다.** $V^9$의 제약

$$
P_\mu P^\mu = 0,\qquad S_{\mu\nu}P^\nu = 0,\qquad \tfrac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^2
$$

을 미분하면, 허용되는 변분(접공간 기저)이 다음 관계를 만족해야 한다:

$$
P_\mu\,dP^\mu = 0,\qquad dS_{\mu\nu}P^\nu + S_{\mu\nu}\,dP^\nu = 0,\qquad S_{\mu\nu}\,dS^{\mu\nu} = 0
$$

### Step 3: 미지수 결정

**(1) $dR^\mu$ 성분 → $\dot{P}^\mu = 0$.** $R$에는 제약이 없으므로 $dR^\mu$는 완전히 자유롭다. 그 계수가 0이어야 하므로 곧바로

$$
\boxed{\dot{P}^\mu = 0}
$$

이 항만은 강의노트의 "성분 = 0" 논리가 깨끗하게 작동한다.

**(2),(3) 나머지 → $\ker\sigma$의 직접 계산 (Z-shift).** $\dot P=0$을 대입하면 제약은 $dS_{\mu\nu}P^\nu = 0$으로 단순화된다. 남은 조건 $\dot{R}^\mu\,dP_\mu - \frac{1}{s^2}S^\mu_{\ \rho}\dot{S}^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} = 0$을, 제약을 만족하는 모든 $dP, dS$에 대해 풀어야 한다.

이 지점에서 강의노트의 "성분별로 미지수를 읽는다"는 단계는 더 이상 기계적으로 끝나지 않는다. $\sigma$가 degenerate하기 때문이다. 대신 $\ker\sigma$를 직접 구한다. $\sigma$를 보존하면서 위 조건을 만족시키는 접벡터의 방향은, 임의의 $P$-직교 벡터 $Z^\mu$ ($P_\mu Z^\mu = 0$)에 대한 **Z-shift**

$$
R^\mu \to R^\mu + Z^\mu,\qquad P^\mu \to P^\mu,\qquad S^{\mu\nu}\to S^{\mu\nu} + (P^\mu Z^\nu - P^\nu Z^\mu) \tag{3.7}
$$

로 생성된다 (논문 Duval–Horváthy 2015, 식 (3.7)). 적분곡선의 접벡터는 이 Z-shift의 $\tau$-미분이므로, $\dot{R}^\mu = Z^\mu$로 식별하면:

$$
\boxed{P_\mu\dot{R}^\mu = 0} \qquad (\text{since } P_\mu Z^\mu = 0)
$$

$$
\boxed{\dot{S}^{\mu\nu} = P^\mu\dot{R}^\nu - P^\nu\dot{R}^\mu}
$$

> [!note] Glia의 보충 — Z-shift (3.7) 세 식의 유도 (2026-06-04)
> 식 (3.7)의 세 변환이 어디서 나오는지 명확히 한다. **Z-shift는 추측이 아니라 $\ker\sigma$를 좌표로 풀면 자동으로 떨어지는 결과**이다.
>
> **① 둘째 식 $P^\mu \to P^\mu$ ($\dot P = 0$):** 가장 쉽다. $\iota_X\sigma = 0$의 $dR^\mu$ 성분에서 직접 나온다 ($R$에 제약이 없어 $dR$이 자유 → 계수 0).
>
> **② 첫째 식 $R^\mu \to R^\mu + Z^\mu$ ($P_\mu Z^\mu = 0$):** $\dot R^\mu$를 $P$ 방향과 $P$-직교로 분해한다:
> $$
> \dot R^\mu = \alpha P^\mu + Z^\mu, \qquad P_\mu Z^\mu = 0
> $$
> 질량껍질 제약 $P_\mu P^\mu = 0$ 때문에 $P^\mu$는 **null 방향**, 즉 입자가 실제 진행하는 worldline 방향이다. 따라서 $\dot R$의 $P$-방향 성분 $\alpha P^\mu$는 worldline을 따라 미끄러지는 reparametrization일 뿐 leaf(=motion)를 바꾸지 않는다. leaf를 옮기는 진짜 kernel 방향은 $P$-직교 성분 $Z^\mu$이다. 이것이 $P_\mu \dot R^\mu = 0$ 의 기하학적 의미이며, $\ker\sigma$가 3차원($R^\mu$ 4성분 중 $P$ 방향 1개 제외 = $P$-직교 3차원)인 이유이기도 하다.
>
> **③ 셋째 식 $S^{\mu\nu} \to S^{\mu\nu} + (P^\mu Z^\nu - P^\nu Z^\mu)$:** 핵심 통찰은 **$S$가 $R$의 함수가 아니라 $S_{\mu\nu} = -s\,\epsilon_{\mu\nu\rho\sigma}P^\rho J^\sigma$ 로 정의**된다는 것이다. Z-shift 하에서 $P$는 불변이므로, $S$의 변화는 오직 **spin 3-vector의 변화 $s \to s + p\times Z$** (식 3.13)에서 온다. 이 $s$-shift를 $S$의 두 블록에 대입한다.
>
> **공간-공간 블록** $S_{ij} = \epsilon_{ijk}s^k$:
> $$
> \delta S_{ij} = \epsilon_{ijk}(p\times Z)^k = \epsilon_{ijk}\epsilon_{klm}p^l Z^m = (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})p^l Z^m = p_i Z_j - p_j Z_i = P^i Z^j - P^j Z^i
> $$
> ($\epsilon\epsilon$ 항등식 사용)
>
> **시간-공간 블록** $S_{j4} = (\hat p\times s)_j$:
> $$
> \delta S_{j4} = (\hat p \times (p\times Z))_j = \big[p(\hat p\cdot Z) - |p|Z\big]_j = P^j Z^4 - P^4 Z^j
> $$
> (BAC–CAB 공식, $\hat p\cdot p = |p|$, 그리고 시간 성분 $P^4 = |p|$, $Z^4 = \hat p\cdot Z$ — 식 3.13의 $t \to t + \hat p\cdot Z$에서)
>
> 두 블록을 합치면 모든 $\mu,\nu$에 대해
> $$
> \boxed{\delta S^{\mu\nu} = P^\mu Z^\nu - P^\nu Z^\mu}
> $$
> 가 성립한다. 
>
> **요약:** ②와 ③은 ①에 종속된 결과다. 첫째 식(=$R$이 $Z$만큼 평행이동)이 강제로 둘째·셋째 식을 끌고 온다. 특히 셋째 식은 $S$가 $P, J$의 함수라는 정의 때문에, $J$(즉 $s$)의 변화 $s \to s + p\times Z$를 통해 유도된다.

| (3.7) 식 | 정체 | 출처 |
| --- | --- | --- |
| $P^\mu \to P^\mu$ | $\dot P = 0$ | $\iota_X\sigma=0$의 $dR$ 성분 |
| $R^\mu \to R^\mu + Z^\mu$ ($P_\mu Z^\mu=0$) | $\dot R$의 leaf-옮김 부분은 $P$-직교 | $P$ 방향은 null worldline 미끄러짐 (reparametrization) |
| $S^{\mu\nu}\to S^{\mu\nu}+(P^\mu Z^\nu - P^\nu Z^\mu)$ | $S\sim\epsilon PJ$에서 $s\to s+p\times Z$ | $\epsilon\epsilon$ 항등식 + BAC–CAB |

### 일관성 확인

얻은 $\dot{S}$가 제약 $S_{\mu\nu}P^\nu = 0$의 미분 $\dot{S}_{\mu\nu}P^\nu = 0$ (∵ $\dot P=0$)을 만족하는지 검증한다:

$$
\dot{S}_{\mu\nu}P^\nu = (P_\mu\dot{R}_\nu - P_\nu\dot{R}_\mu)P^\nu = P_\mu(\dot{R}_\nu P^\nu) - (P_\nu P^\nu)\dot{R}_\mu = P_\mu\cdot 0 - 0\cdot\dot{R}_\mu = 0\ \checkmark
$$

$P_\mu\dot{R}^\mu = 0$ (위 결과)과 질량껍질 제약 $P_\nu P^\nu = 0$ 덕분에 정확히 닫힌다.

### 결과

$$
\begin{cases}
P_\mu\dot{R}^\mu = 0 \\
\dot{P}^\mu = 0 \\
\dot{S}^{\mu\nu} = P^\mu\dot{R}^\nu - P^\nu\dot{R}^\mu
\end{cases}
$$



---

## Solution to Problem 3 — Part 2: Moment map ($V^9 \to M^6$ symplectic reduction)

Part 1에서 $\ker\sigma$가 3차원임을 보았다. 이 kernel 방향(Z-shift)으로 $V^9$를 quotient하면 6차원 symplectic manifold $M^6 = V^9/\ker\sigma$가 나오고, 그 위의 symplectic form이 정확히 **Problem 2의 $\omega_0$** (Berry monopole 항을 포함한 free 2-form)이다. "Moment map을 찾아라"는 것은 이 quotient를 구체적 좌표로 실현하는 사상, 즉 각 leaf(=motion)를 대표하는 6차원 좌표 $(\tilde x, \tilde p)$를 $V^9$ 좌표 $(R, P, S)$로부터 만들어내는 사상을 명시하라는 뜻이다.

### 참고 논문 Section 3의 목표 한 문장

> 9차원 추상 공간 $V^9$ 위의 운동(=잎, leaf)들을, **공간에 국소화되지 않는 입자**를 어떻게 6차원 운동의 공간 $M^6$의 한 점 $(\tilde{\mathbf{x}}, \tilde{\mathbf{p}})$로 "찍어 라벨링"할 것인가.

핵심 도구: **$Z$-shift (Wigner-Souriau translation)** — "같은 운동인데 겉보기만 다른 것들"을 하나로 묶는 gauge 자유도.

### Step 1: 환원의 구조 — 왜 $9 - 3 = 6$인가

$V^9$ 위의 2-form $\sigma$는 **degenerate**하다. 즉 어떤 방향들은 $\sigma$가 "보지 못하는 맹점이다": 점 $x$에서 $\ker\sigma_x = \{Y \in T_x V^9 \mid \iota_Y\sigma = 0\}$이 비자명하다. $\iota_Y\sigma = 0$은 $Y$ 방향이 $\sigma$ 입장에서 완전히 투명하다는 뜻이며, symplectic form이 phase space의 정준 면적(Poisson 구조)을 재는 도구임을 떠올리면, **면적을 못 재는 방향 = 물리적 자유도가 아닌 방향(gauge)** 이다.

Part 1에서 이 $\ker\sigma$가 각 점에서 3차원이며, 임의의 $P$-직교 벡터 $Z^\mu$ ($P_\mu Z^\mu = 0$, 3개의 자유도)가 생성하는 **Z-shift (Wigner–Souriau translation)** 로 주어짐을 보았다 (식 (3.7)):

$$
R^\mu \to R^\mu + Z^\mu,\qquad P^\mu \to P^\mu,\qquad S^{\mu\nu}\to S^{\mu\nu} + (P^\mu Z^\nu - P^\nu Z^\mu)
$$

이 변환의 무한소 버전(접벡터)이 곧 $\ker\sigma$의 원소이며, 이를 equation of motion(식 3.6)에서 보였다. kernel 방향들을 따라 적분하면 $V^9$는 3차원 곡면 조각들(**leaf**)로 분할되며(foliation), 같은 leaf 위의 두 점은 Z-shift로 서로 도달 가능하다. 이때 한 leaf는 물리적으로 **하나의 motion**에 대응한다. 그 근거는 두 가지다. 첫째, Part 1의 운동방정식이 $\ker\sigma$의 적분곡선이었으므로 시간 발전은 leaf를 벗어나지 못한다 (leaf = 궤적 하나). 둘째, $\sigma$가 Z-shift 방향을 게이지로 무시하므로 그 방향은 물리적 자유도가 아니다. 전자기학의 게이지 변환이 물리를 바꾸지 않듯, Z-shift도 motion을 바꾸지 않는다.

따라서 물리적으로 같은 상태(같은 leaf)를 하나로 으깨면(quotient) 비로소 진짜 phase space가 나온다:

$$
M^6 = V^9 / \ker\sigma, \qquad \dim M^6 = 9 - 3 = 6
$$

"9차원에서 3을 뺀다"는 곧 **3차원짜리 가짜 자유도(Z-shift gauge)를 점 하나로 으깬다**는 뜻이다. 으깨고 나면 $\sigma$가 못 보던 방향이 사라지므로, 남은 $M^6$ 위에서는 더 이상 degenerate하지 않은 진짜 symplectic form $\omega_0$가 살아남는다 (Step 5). Moment map은 $V^9$의 점을 그것이 속한 leaf의 대표 좌표로 보내는 사상 $\mu: V^9 \to M^6$이며, 같은 leaf 위 점들을 모두 같은 좌표로 보낸다.

### Step 2: $(3+1)$-분해와 좌표 표현

문제에서 주어진 Lorentz frame 분해를 사용한다:

- $R = (\mathbf{r}, t)$ — 시공간 위치
- $P = (\mathbf{p}, |\mathbf{p}|)$ — 4-momentum. 넷째 성분이 $|\mathbf{p}|$인 것이 **null 조건** $P^\mu P_\mu = 0$ (= massless의 표현). 에너지 $E = |\mathbf{p}|$.
- $J = (\mathbf{q}, -|\mathbf{q}|)$ — 또 다른 null vector. $I\cdot J = -1$ 조건이 $\mathbf{p}\cdot\mathbf{q} + |\mathbf{p}||\mathbf{q}| = 1$로 번역.

이때, $\mathbf{r}, t$는 정해진 Lorentz frame에서 위치와 시간의 corrdinate이다. $P$와 $J$는 식 (3.1)에서 정의한 $I$와 $J$에 해당하며, $P_\mu J^\mu =-1$를 만족하는 두 null vector이다. 즉, 위 식은 식 (3.1)에서 정의한 9-dimensional evolution space $V^9$의 기저를 이루던 세 개의 4-vector $\{ R, I=P, J\}$의 벡터 성분을 명시적으로 쓴 것이다.  

spin tensor $S_{\mu\nu}$ 분해 (식 3.8):

$$
S_{ij} = \epsilon_{ijk}s^k, \qquad S_{j4} = (\hat{\mathbf{p}}\times\mathbf{s})_j
$$

중요한 관계 (식 3.12):

$$
\hat{\mathbf{p}}\cdot\mathbf{s} = s
$$

**일반적으로** 성립한다 (enslaved일 때만이 아니라). 즉 spin vector $\mathbf{s}$의 **크기가 아니라 $\hat{\mathbf{p}}$ 방향 사영이 상수** $s$ 이다.

### Step 3: Moment map의 구성 — leaf 대표점 선택

$Z$-shift란 무엇인가?

운동은 $\ker\sigma$에 접한 잎이고, 그 kernel이 3차원. 그 3차원 자유도가 곧 $Z$-shift이다.

식 (3.7): momentum $P$에 수직인 ($P_\mu Z^\mu = 0$) 임의의 시공간 vector $Z$로

$$
R^\mu \to R^\mu + Z^\mu, \quad P^\mu \to P^\mu, \quad S^{\mu\nu} \to S^{\mu\nu} + (P^\mu Z^\nu - P^\nu Z^\mu)
$$

→ **같은 잎 안에서의 이동** = 물리적으로 동일한 운동. (Appendix A 언어로 "같은 빨대 위의 다른 점.")

Z-shift를 $(3+1)$ 분해와 좌표 표현으로 나타내면:

$$
\mathbf{r}\to\mathbf{r}+\mathbf{Z}, \quad t\to t+\hat{\mathbf{p}}\cdot\mathbf{Z}, \quad \mathbf{p}\to\mathbf{p}, \quad \mathbf{s}\to\mathbf{s}+\mathbf{p}\times\mathbf{Z} \tag{3.13}
$$

물리적 의미를 따지자면, massless spinning particle은 민코프스키 공간에서 **점이 아니다.** $Z$를 바꾸면 위치가 통째로 움직이는데 같은 운동이라는 건, 입자가 한 점이 아니라 **momentum에 수직인 3-plane (wave-plane) 전체에 퍼져 있다**는 이다 (Fig. 1, 2의 그 평면). 이것이 논문에서 나온 문장인"massless particle cannot be localized"의 정체이다. 

각 leaf를 대표하는 점을 만들고, 이 대표 점들의 공간이야 말로 phase space라고 여길 수 있을 것이다. 
다음 전략으로 leaf의 대표 점을 고른다. 두 번의 shift를 이용한다. 

**(a)** $\tau \mapsto (R + \tau P, P, S)$ — momentum 방향으로 흐르는 자명한 운동 (빛처럼 직진), $\ker\sigma$의 적분곡선("motion")이다. 운동에 의해 다른 leaf로 점이 이동한다. 

**(b)** 이 곡선을 $Z = \big(\frac{\hat p}{|p|}\times s,\ 0\big)$ 만큼 Z-shift하면 같은 leaf 위의 다른 적분곡선이 된다.

**(c)** $\tau = -t/|p|$를 택하면 시간 좌표가 0이 되는 점에 도달한다. 이 점을 leaf의 대표로 삼는다:

$$
R = (\tilde x, 0) \tag{3.10}
$$

이제 이 대표점의 **공간 성분 $\tilde x$를 명시적으로 계산**한다. (a)의 곡선($\mathbf{r}(\tau) = \mathbf{r} + \tau\,\mathbf{p}$)에 (b)의 Z-shift($\mathbf{r}\to\mathbf{r}+\frac{\hat p}{|p|}\times s$)를 적용하면 공간 위치는  

$$
\mathbf{r}(\tau) = \mathbf{r} + \tau\,\mathbf{p} + \frac{\hat p}{|p|}\times s
$$

가 되고, 시간 성분은 $t(\tau) = t + \tau|p|$ 이다 ($P = (p, |p|)$의 시간성분이 $|p|$이므로). 여기에 (c)의 $\tau = -t/|p|$를 대입하면 $t(\tau) = 0$ 이 되고, 공간 성분은

$$
\tilde x = \mathbf{r} - \frac{t}{|p|}\,\mathbf{p} + \frac{\hat p}{|p|}\times s
= \mathbf{r} - \hat p\, t + \frac{\hat p}{|p|}\times s \tag{i}
$$

이다 ($\mathbf{p}/|p| = \hat p$). 이것이 식 (3.10)에서 말한 대표점의 공간 좌표이다.

#### **보존량과의 일치 — 왜 이 사상이 moment map인가.**
한편 Part 1에서 얻은 Poincaré 대칭의 Noether charge 중 boost generator에 대응하는 보존량, boost momentum은 (논문 식 3.18)

$$
g = |p|\,\mathbf{r} - \mathbf{p}\,t + \hat p \times s \tag{ii}
$$

이다. (i)과 (ii)를 비교하면 정확히

$$
\tilde x = \frac{g}{|p|} \tag{iii}
$$

임을 알 수 있다. 즉 leaf 대표점의 공간 좌표 $\tilde x$는 **boost Noether charge를 에너지 $|p|$로 규격화한 것**과 같다. 대표점을 기하학적으로 고르는 절차((a)–(c))와, 대칭에서 나온 보존량 $g$가 같은 $\tilde x$를 준다는 이 일치가 바로 이 사상을 단순한 quotient가 아니라 **moment map**이라 부를 수 있는 근거이다 — $\tilde x$는 Poincaré boost 작용에 대응하는 conserved moment에서 직접 유래하기 때문이다.

따라서 구하는 사상은

$$
\boxed{\ \tilde x = \frac{g}{|p|} = \mathbf{r} - \hat p\, t + \frac{\hat p}{|p|}\times s\ },\qquad \boxed{\ \tilde p = p\ }
$$

이고, 이것이 moment map $\mu: V^9 \to M^6,\ (R,P,S)\mapsto(\tilde x, \tilde p)$ 이다.


엄밀히 말하면 $\mu: V^9 \to M^6$ 자체는 leaf를 대표 좌표로 보내는 **symplectic reduction (quotient) 사상**이다. 이를 "moment map"이라 부르는 것은, 그 공간 성분 $\tilde x$가 Poincaré boost 생성원의 conserved moment $g$에서 유래한다는 점 (식 iii) 에 근거한다. 표준적 의미의 moment map은 $M \to \mathfrak{g}^*$ 사상이지만, 여기서는 그 boost 성분을 좌표로 채택한 것이다.

### Step 4: Well-defined 검증 — $\tilde x$의 Z-shift 불변성

Moment map이 leaf 위의 대표점 선택과 무관하려면 $\tilde x$가 Z-shift (식 3.13)

$$
r \to r + Z,\quad t \to t + \hat p\cdot Z,\quad p \to p,\quad s \to s + p\times Z
$$

하에서 불변이어야 한다. 직접 대입하여 확인한다:

$$
\tilde x \to (r + Z) - \hat p\,(t + \hat p\cdot Z) + \frac{\hat p}{|p|}\times(s + p\times Z)
$$

추가된 항들을 모으면

$$
\Delta\tilde x = Z - \hat p(\hat p\cdot Z) + \frac{\hat p}{|p|}\times(p\times Z)
$$

세 번째 항을 BAC–CAB 공식으로 풀면 $\frac{\hat p}{|p|}\times(p\times Z) = \frac{1}{|p|}\big[p(\hat p\cdot Z) - Z(\hat p\cdot p)\big] = \hat p(\hat p\cdot Z) - Z$ (∵ $\hat p\cdot p = |p|$, $p/|p| = \hat p$). 따라서

$$
\Delta\tilde x = Z - \hat p(\hat p\cdot Z) + \hat p(\hat p\cdot Z) - Z = 0\ 
$$

$\tilde x$는 Z-shift 불변이므로 $M^6$ 위의 함수로 잘 정의된다. 

### Step 5: $\sigma$가 $M^6$ 위에서 $\omega_0$로 환원됨

Step 3의 moment map이 올바르다면, $\sigma$를 $M^6$ 좌표 $(\tilde x, \tilde p)$로 "내렸을" 때 정확히 Problem 2의 $\omega_0$가 나와야 한다. 이를 직접 계산으로 확인한다.

#### 환원의 정의 — section pullback

Reduction의 정의는 $\pi^*\omega_0 = \sigma|_{V^9}$ 이다 ($\pi: V^9 \to M^6$은 leaf로 보내는 quotient). 이 식을 확인하는 가장 간결한 방법은 **section** (각 leaf의 대표점만 모은 6차원 단면) $\iota: M^6 \hookrightarrow V^9$ 을 잡고, 그 위로 $\sigma$를 **pullback** 하는 것이다. Section 위에서는 $\pi\circ\iota = \mathrm{id}$ 이므로 $\iota^*\sigma = \iota^*\pi^*\omega_0 = \omega_0$ 가 성립한다.

Step 3에서 잡은 대표점(enslaved gauge, 시간좌표 0)을 section으로 쓴다. $M^6$ 좌표 $(\tilde x, \tilde p)$로 매개변수화하면:

$$
R^\mu = (\tilde x,\ 0),\qquad P^\mu = (\tilde p,\ |\tilde p|),\qquad \mathbf{s} = s\,\hat{\tilde p}\ \ (\text{enslaved} \Rightarrow \hat p\times s = 0,\ S_{j4}=0)
$$

즉 spin을 $\hat p$방향으로 고정해 Z-shift gauge를 완전히 고정한 단면이다. 이제 모든 $V^9$ 좌표가 $(\tilde x, \tilde p)$의 함수이므로, 각 항을 pullback할 수 있다.

#### 항별 계산

**Canonical 항 $\sigma_1 = -dP_\mu\wedge dR^\mu$:** Section 위에서 $R^i = \tilde x^i$, $R^4 = 0$, $P_i = \tilde p_i$, $P_4 = -|\tilde p|$ (내림첨자; $\eta=\mathrm{diag}(+,+,+,-)$). 시간성분은 $dR^4 = 0$으로 죽고, 공간성분만 남아

$$
\iota^*\sigma_1 = -dP_i\wedge dR^i = -d\tilde p_i\wedge d\tilde x^i = d\tilde x^i\wedge d\tilde p_i
$$

($P_4\,dR^4$ 항은 $dR^4=0$으로 사라짐). 이게 표준 canonical 항이다.

**Spin 항 $\sigma_2 = -\frac{1}{2s^2}dS^\lambda_{\ \mu}\wedge S^\mu_{\ \rho}\,dS^\rho_{\ \lambda}$:** 이 항의 pullback이 핵심이고 손계산이 길다. 포인트는 **$S_{j4} = (\hat p\times s)_j$ 가 $p$에도 의존**한다는 것이다 ($\hat p = p/|p|$). 따라서 $s$를 enslaved로 고정해도 $dS$에는 $d\tilde p$ 성분이 살아있으며, 이것이 momentum-space monopole 항을 낳는다. enslaved section($s = s\hat p$) 위에서 spin tensor는

$$
S_{ij} = s\,\epsilon_{ijk}\hat p^k,\qquad S_{j4} = 0
$$

이고, 이를 $\tilde p$로 미분하여 $\sigma_2$에 대입해 정리하면 (아래 CAS 검증) 오직 $d\tilde p\wedge d\tilde p$ 형태의 항만 남으며, 그것이 정확히 Berry monopole이다:

$$
\iota^*\sigma_2 = -\frac{s}{2|\tilde p|^3}\,\epsilon_{ijk}\,\tilde p^i\,d\tilde p^j\wedge d\tilde p^k
$$

#### 결과

두 항을 합치면

$$
\iota^*\sigma = d\tilde x^i\wedge d\tilde p_i - \frac{s}{2|\tilde p|^3}\,\epsilon_{ijk}\,\tilde p^i\,d\tilde p^j\wedge d\tilde p^k = \omega_0
$$

첫째 항 $d\tilde x^i\wedge d\tilde p_i$은 표준 canonical 항 ($= -d\tilde p_i\wedge d\tilde x^i$, 적는 순서만 다름)이고, 둘째 항은 **momentum-space Berry monopole** 항이다. 이는 Problem 2의 $\omega_0$ (논문 식 3.14)와 정확히 일치한다.

> [!check] CAS 검증 (sympy)
> Section embedding $\iota: (\tilde x, \tilde p)\mapsto (R,P,S)$를 위 enslaved gauge로 세우고, $\iota^*\sigma = \iota^*\sigma_1 + \iota^*\sigma_2$를 일반 $(\tilde x,\tilde p)$에 대해 기호적으로 계산했다. 결과는 ($j<k$로 세어 $\tfrac12$이 흡수된 형태로):
> $$
> \iota^*\sigma = \sum_i d\tilde x^i\wedge d\tilde p_i + \frac{s}{|\tilde p|^3}\big(\tilde p_3\,d\tilde p_1\wedge d\tilde p_2 + \tilde p_1\,d\tilde p_2\wedge d\tilde p_3 - \tilde p_2\,d\tilde p_1\wedge d\tilde p_3\big)
> $$
> 로, monopole 계수가 정확히 $\frac{s}{2|\tilde p|^3}\epsilon_{ijk}\tilde p^i$와 일치했다. 또한 section 위에서 $\tfrac12 S_{\mu\nu}S^{\mu\nu} = s^2$ ($= (\hat p\cdot s)^2$) 제약도 분모의 $s^2$와 모순없이 맞아떨어짐을 확인했다.

### 결론

| $V^9$ (9D evolution space) | $\xrightarrow{\ \mu\ }$ | $M^6$ (6D phase space) |
| --- | --- | --- |
| 좌표 $(R, P, S)$ | | 좌표 $(\tilde x, \tilde p)$ |
| degenerate $\sigma$, $\dim\ker\sigma = 3$ | | non-degenerate $\omega_0$ |
| Z-shift gauge 자유도 | quotient | spin enslaved, $s = s\hat p$ |

Moment map:

$$
\mu:\ (R, P, S)\ \longmapsto\ \left(\tilde x = r - \hat p\,t + \frac{\hat p}{|p|}\times s,\quad \tilde p = p\right)
$$

이로써 Problem 2의 $\omega_0$가 Problem 3의 9차원 $\sigma$의 **symplectic reduction**임이 확인된다. 물리적으로 spin은 Z-shift gauge 자유도로 흡수되어 ($s = s\hat p$로 enslave), 6차원 chiral fermion 위상공간만 독립 자유도로 남는다.
