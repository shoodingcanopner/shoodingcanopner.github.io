
문제: [[AM Finalterm problem]] / 답안 모음: [[AM finalterm answer]]

# Problem 4

Now, we introduce a non-minimal coupling of electromagnetic fields into this spin $1/2$ chiral fermion. Starting from the closed two-form:
$$
\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\lambda}^{\mu} \wedge S_{\rho}^{\lambda} dS_{\mu}^{\rho} + \frac{1}{2}eF_{\mu\nu}dR^{\mu} \wedge dR^{\nu}
$$
Q. derive the corresponding equations of motion as follows:
$$
\begin{cases}
\dot{R}^{\mu} = P^{\mu} + \frac{S^{\mu \nu} F_{\nu \rho} P^\rho}{\frac{1}{2}S \cdot F} \\
\dot{P}^{\mu} = -e F^{\mu}_{\nu} \dot{R}^{\nu} \\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu}
\end{cases}
$$
Unfortunately, the above closed two-form is not completely satisfactory. We have to introduce the mass square constraint in the following way:
$$
P_\mu P^\mu = -\frac{eg}{2}S \cdot F
$$
Hence we introduce the novel evolution space 
$$
\tilde{V}^{9} = \left\{ P, R \in \mathbb{R}^{3,1}, \; S \in \mathfrak{o}(3,1) \;\middle|\; P_{\mu}P^{\mu} = -\frac{eg}{2}S \cdot F, \; S_{\mu\nu}P^{\nu} = 0, \; \frac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^{2} \right\}
$$
endowed with the closed two-form:
$$
\sigma = -dP_{\mu} \wedge dR^{\mu} - \frac{1}{2s^{2}}dS_{\lambda}^{\mu} \wedge S_{\rho}^{\lambda} dS_{\mu}^{\rho} + \frac{1}{2}eF_{\mu\nu}dR^{\mu} \wedge dR^{\nu} \quad
$$
As a result, we find:
$$
\begin{cases}
\dot{R}^{\mu} = P^{\mu} - \frac{1}{g+1}\frac{1}{S_{\alpha \beta}F^{\alpha \beta}} \left[ (g-2) S^{\mu\nu}F_{\nu\rho}P^{\rho} - g S^{\mu\nu}\partial_\nu F_{\rho\sigma} S^{\rho \sigma} \right] \\
\dot{P}^{\mu} = -e F^{\mu}_{\nu}\dot{R}^\nu -\frac{eg}{4}\partial^{\mu}F_{\rho\sigma}S^{\rho \sigma}\\
\dot{S}^{\mu\nu} = P^{\mu}\dot{R}^{\nu} - P^{\nu}\dot{R}^{\mu} + \frac{eg}{2}\left[ S^{\mu}_{\rho}F^{\rho\nu} - S^{\nu}_{\rho}F^{\rho \mu} \right]
\end{cases}
$$ 

These equations constitute the zero-rest-mass counterparts of the celebrated **Bargmann-Michel-Telegdi (BMT) equations** for massive relativistic particles.

For the massive case, one can show that these types of equations can be derived from the following Lagrangian:
$$
L = -\frac{1}{2}m(\dot{x}_{\mu} + \lambda^{\nu}S_{\mu\nu})(\dot{x}^{\mu} + \lambda_{\nu}S^{\mu\nu}) - eA_{\mu}\dot{x}^{\mu} + \frac{1}{2}(\psi_{A}\dot{\varphi}^{A} - \dot{\psi}_{A}\varphi^{A}) - \frac{1}{2}kF_{\mu\nu}S^{\mu\nu}
$$

where $S_{\mu\nu} = \psi_{A}(\Sigma_{\mu\nu})^{A}_{B}\varphi^{B}$.
*(The dynamical variables are the position of the particle $x^{\mu}(\theta)$, a real vector $\varphi^{A}$ belonging to a finite-dimensional representation of the Lorentz-group, whose infinitesimal generators are the quantities $(\Sigma_{\mu\nu})^{A}_{B}$, a vector $\psi_{A}$ belonging to the conjugate representation, and the lagrangian multipliers $\lambda^{\mu}$. The constant $m$ represents the mass of the particle and $k$ is given by $k = \frac{eg}{2m}$, where $g$ represents the gyromagnetic factor.)


* **(Questions)**
  * Starting from this effective Lagrangian, derive that $S^2$ is a conserved quantity.
  * We note that in the weak-field approximation, all the components of the four-vector $\eta_{\mu}$ are very small, and therefore they can be neglected, so we get the BMT equations:
$$
\ddot{x}_{\mu} = \frac{e}{m}F_{\mu\nu}\dot{x}^{\nu}
$$

$$
\dot{S}_{\rho} = g\frac{e}{2m}F_{\rho\mu}S^{\mu} + (g-2)\frac{e}{2m}F_{\mu\nu}S^{\mu}\dot{x}^{\nu}\dot{x}_{\rho}
$$

---

# Part A 풀이 — Minimal coupling ($g=0$)의 EOM

Part A의 풀이는 앞서 풀었던 Problem 3의 연장이다. Problem 3의 free 2-form $\sigma_{\text{free}} = \sigma_1 + \sigma_2$에 전자기 결합항 $\sigma_3 = \frac{1}{2}eF_{\mu\nu}dR^\mu\wedge dR^\nu$ 하나만 추가된다. 따라서 $\iota_X\sigma_1, \iota_X\sigma_2$의 전개는 Problem 3에서 그대로 가져오고, **새 항 $\iota_X\sigma_3$만 계산**하면 된다.
표기는 Problem 3과 동일: signature $\eta = \mathrm{diag}(+,+,+,-)$, $\dot{\,} = d/d\tau$, $X = \dot R^\mu\partial_{R^\mu} + \dot P^\mu\partial_{P^\mu} + \dot S^{\mu\nu}\partial_{S^{\mu\nu}}$.

## Setup

Evolution space는 Problem 3과 동일한 $V^9$ (질량껍질 $P^2=0$, $S_{\mu\nu}P^\nu=0$, $\frac12 S^2 = s^2$)이고, 그 위의 closed 2-form에 전자기항이 더해진다:
$$
\sigma = \underbrace{-dP_\mu\wedge dR^\mu}_{\sigma_1} \underbrace{- \frac{1}{2s^2}dS^\lambda_{\ \mu}\wedge S^\mu_{\ \rho}\,dS^\rho_{\ \lambda}}_{\sigma_2} + \underbrace{\frac{1}{2}eF_{\mu\nu}\,dR^\mu\wedge dR^\nu}_{\sigma_3} \tag{5.3}
$$
운동방정식은 변함없이 $\iota_X\sigma = 0$ (Hamiltonian vector field = $\ker\sigma$의 적분곡선).

## Step 1: 새 항 $\iota_X\sigma_3$의 전개

$\sigma_1, \sigma_2$의 interior product는 Problem 3 결과를 그대로 쓴다:
$$
\iota_X\sigma_1 = -\dot P_\mu\,dR^\mu + \dot R^\mu\,dP_\mu, \qquad \iota_X\sigma_2 = \frac{1}{s^2}S^\mu_{\ \rho}\dot S^\rho_{\ \lambda}\,dS^\lambda_{\ \mu}
$$
새 항 $\iota_X\sigma_3$을 계산한다. 
$\iota_X(\alpha\wedge\beta) = \alpha(X)\beta - \beta(X)\alpha$와 $dR^\mu(X) = \dot R^\mu$을 적용하면:
$$
\iota_X\sigma_3 = \frac{1}{2}eF_{\mu\nu}\left(\dot R^\mu\,dR^\nu - \dot R^\nu\,dR^\mu\right) = eF_{\mu\nu}\dot R^\mu\,dR^\nu
$$
($F$의 반대칭성으로 두 항이 합쳐져 factor 2가 $\frac12$을 상쇄.) 즉 **$dR^\nu$ 성분에 $+eF_{\mu\nu}\dot R^\mu$가 추가**된다

전체:
$$
\iota_X\sigma = -\dot P_\nu\,dR^\nu + eF_{\mu\nu}\dot R^\mu\,dR^\nu + \dot R^\mu\,dP_\mu + \frac{1}{s^2}S^\mu_{\ \rho}\dot S^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} = 0
$$

## Step 2: $dR^\nu$ 성분 → Lorentz force

$R$에는 제약이 없으므로 $dR^\nu$는 자유롭다. 위 식을 만족하기 위해서는 $dR^\nu$의 계수가 0이어야 하므로:
$$
-\dot P_\nu + eF_{\mu\nu}\dot R^\mu = 0 \;\Longrightarrow\; \boxed{\dot P^\mu = -eF^\mu_{\ \nu}\dot R^\nu}
$$
Problem 3의 $\dot P^\mu = 0$이 **Lorentz force로 일반화**되었다. 이것이 Problem 3 → Problem 4 Part A의 가장 직접적인 변화다.

## Step 3: kernel 차원 감소 (3 → 1) — Z-shift 대칭의 깨짐

> [!important] Part A의 물리적 의의
> Problem 3에서 $\ker\sigma$는 **3차원**이었다 (임의의 $P$-직교 $Z^\mu$에 대한 Z-shift가 모두 kernel). 그런데 $\sigma_3$ 항이 이 대칭을 깨뜨린다. Z-shift 방향 $Z$ ($P_\mu Z^\mu=0$)에 대해
> $$
> \iota_Z\sigma_3 = eF_{\mu\nu}Z^\mu\,dR^\nu \neq 0 \quad(\text{일반적으로})
> $$
> 이므로 Z-shift는 더 이상 $\ker\sigma$의 원소가 아니다. 결과적으로 $\ker\sigma$가 $3 \to 1$차원으로 줄어든다.
>
> **의미:** Problem 3에서 spin은 Z-shift gauge로 흡수 가능한(enslave 가능한) 자유도였다. 장이 켜지면 spin이 **진짜 독립 자유도**로 살아나, 위상공간이 $6 \to 8$차원이 된다. 이것이 chiral model(6D)과 massless spinning model(8D)이 결합 시 갈라지는 근본 이유이며, 논문 결론의 핵심 메시지다.

kernel이 1차원(= worldline 방향 $P^\mu$의 reparametrization)으로 줄었으므로, $\dot R^\mu$는 더 이상 자유로운 $Z^\mu$가 아니라 **유일하게 고정**된다.

## Step 4: $\dot R^\mu$의 결정

남은 성분 방정식은 $dP_\mu$ 성분과 $dS$ 성분이다. 핵심은 **$dP$와 $dS$가 제약으로 서로 묶여 있다**는 점이다. 제약 $P^2=0$, $S_{\mu\nu}P^\nu=0$, $\frac12 S^2=s^2$를 미분하면 허용되는 변분이 다음 제약을 만족해야 한다:
$$
P_\mu\,dP^\mu = 0 \quad(\text{a}),\qquad dS_{\mu\nu}P^\nu + S_{\mu\nu}\,dP^\nu = 0 \quad(\text{b}),\qquad S_{\mu\nu}\,dS^{\mu\nu}=0 \quad(\text{c}) \tag{제약}
$$

### (1) $dS$ 성분의 해 — ansatz $\dot S^{\mu\nu} = P^\mu\dot R^\nu - P^\nu\dot R^\mu$

$\sigma_2$의 형태가 Problem 3과 완전히 같으므로, $dS$ 성분 방정식의 구조도 동일하다. Problem 3에서 이미 $\dot S^{\mu\nu} = P^\mu\dot R^\nu - P^\nu\dot R^\mu$가 그 해임을 보였고, 여기서도 그대로 유지된다. 다만 Part A에서는 $\dot R$이 더 이상 자유롭지 않으므로, 이 ansatz를 $dP$ 성분 방정식에 다시 대입해 $\dot R$을 결정해야 한다.

### (2) $dP_\mu$ 성분으로 $\dot R$ 고정

$\iota_X\sigma=0$에서 $dR^\nu$ 성분(Step 2)을 제외한 나머지는
$$
\dot R^\mu\,dP_\mu + \frac{1}{s^2}S^\mu_{\ \rho}\dot S^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} = 0 \tag{$*$}
$$

**단계 A — 스핀 항을 $\dot R$로 환원.** ansatz $\dot S^\rho_{\ \lambda} = P^\rho\dot R_\lambda - P_\lambda\dot R^\rho$를 $S^\mu_{\ \rho}\dot S^\rho_{\ \lambda}$에 넣으면
$$
S^\mu_{\ \rho}\dot S^\rho_{\ \lambda} = \underbrace{(S^\mu_{\ \rho}P^\rho)}_{=\,0}\dot R_\lambda - (S^\mu_{\ \rho}\dot R^\rho)P_\lambda = -(S^\mu_{\ \rho}\dot R^\rho)\,P_\lambda
$$
첫 항이 제약 $S_{\mu\nu}P^\nu = 0$ (즉 $S^\mu_{\ \rho}P^\rho=0$)으로 **소멸**한다. 따라서 $(*)$의 스핀 항은
$$
\frac{1}{s^2}S^\mu_{\ \rho}\dot S^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} = -\frac{1}{s^2}(S^a_{\ \rho}\dot R^\rho)\,P_\lambda\,dS^\lambda_{\ a}
$$
($\mu\to a$ 로 index 바꿈)

**단계 B — 제약 (b)로 $P_\lambda dS^\lambda_{\ a}$를 $dP$로 교체.** 제약 (b) $dS_{a\nu}P^\nu + S_{a\nu}dP^\nu = 0$에서 $P^\lambda dS_{a\lambda} = -S_{a\nu}dP^\nu$. 인덱스를 올리면 $P_\lambda dS^\lambda_{\ a} = P^\lambda dS_{\lambda a} = -P^\lambda dS_{a\lambda} = S_{a\nu}dP^\nu$. 따라서 스핀 항이 **$dP$ 성분으로 완전히 환원**된다:
$$
\frac{1}{s^2}S^\mu_{\ \rho}\dot S^\rho_{\ \lambda}\,dS^\lambda_{\ \mu} = -\frac{1}{s^2}(S^a_{\ \rho}\dot R^\rho)\,S_{a\nu}\,dP^\nu
$$
**단계 C — $(*)$를 $\dot R$에 대한 닫힌 방정식으로.** 단계 B에서 스핀 항을 $dP$ 성분으로 환원했으므로, $(*)$의 첫 항 $\dot R^\mu dP_\mu = \dot R_\nu dP^\nu$와 합치면
$$
\left[\dot R_\nu - \frac{1}{s^2}(S^2)_{\nu}^{\ \mu}\dot R_\mu\right]dP^\nu = 0
$$
의 꼴이 된다. 여기서 $w^\mu = S^\mu_{\ \rho}\dot R^\rho$를 한 번 더 $S$로 수축한 $S_\nu^{\ \mu}w_\mu = (S^2)_\nu^{\ \mu}\dot R_\mu$가 나타난 것이다. 제약 (a) $P_\nu dP^\nu = 0$ 때문에 $dP^\nu$는 $P$-직교 성분만 자유로우므로, 대괄호 안의 계수가 $P_\nu$에 비례해야 한다. 비례상수를 $P$-성분의 정합성($P_\nu\dot R^\nu = 0$)으로 고정하면 그 값은 $1$이 되어
$$
\dot R^\mu = P^\mu - \frac{1}{s^2}(S^2)^\mu_{\ \nu}\dot R^\nu
\quad\Longleftrightarrow\quad
\boxed{(S^2)^\mu_{\ \nu}\dot R^\nu = -s^2\left(\dot R^\mu - P^\mu\right)} \tag{$\dagger^\star$}
$$

**단계 D — $S^2$의 고유공간 분해로 $\dot R$의 구조를 읽는다.** 제약 위에서 스핀 텐서 $S$는 다음 고유구조를 가진다:
$$
S^2 P = 0 \quad(\because\ S_{\mu\nu}P^\nu = 0), \qquad
(S^2)\,t = -s^2\,t \ \ \text{for } t \perp P,\ t \in \mathrm{Im}\,S
$$
즉 $P$는 $S^2$의 **kernel**(고유값 $0$)에 속하고, $P$에 직교하며 $S$의 상(image)에 놓인 방향은 **고유값 $-s^2$** 의 고유공간을 이룬다. $(\dagger^\star)$의 우변을 보면 $\dot R$은 정확히 이 두 고유공간으로 분해된다:
$$
\dot R^\mu = \underbrace{P^\mu}_{S^2\text{-kernel}} + \underbrace{t^\mu}_{-s^2\text{-eigenvector}}, \qquad (S^2)t = -s^2 t
$$
실제로 $\dot R = P + t$를 $(\dagger^\star)$에 넣으면 $S^2(P+t) = 0 + (-s^2)t = -s^2(\dot R - P)$로 자동 성립한다.

**단계 E — anomalous 항 $t^\mu$를 $F$로 표현 (계수까지 결정).** 남은 것은 $-s^2$ 고유벡터 $t^\mu$를 외부장으로 쓰는 일이다. $S^{\mu\nu}F_{\nu\rho}P^\rho$가 바로 $S^2$의 $-s^2$ 고유벡터임을 직접 확인할 수 있다($S^2(SFP) = -s^2(SFP)$, 또한 $P_\mu(SFP)^\mu = 0$이므로 $P$-직교, 료). 따라서 미정 계수 $c$로
$$
\dot R^\mu = P^\mu + c\,S^{\mu\nu}F_{\nu\rho}P^\rho
$$
로 두고, 이를 Lorentz force $\dot P^\mu = -eF^\mu_{\ \nu}\dot R^\nu$ 및 ansatz $\dot S^{\mu\nu} = P^\mu\dot R^\nu - P^\nu\dot R^\mu$와 함께 **제약 (b)의 보존** $\frac{d}{d\tau}(S_{\mu\nu}P^\nu) = 0$에 대입하면 $c$가 유일하게 고정된다. 계산하면
$$
c = \frac{1}{\tfrac12 S\cdot F}, \qquad S\cdot F \equiv S_{\alpha\beta}F^{\alpha\beta}
$$
최종적으로
$$
\boxed{\dot R^\mu = P^\mu + \frac{S^{\mu\nu}F_{\nu\rho}P^\rho}{\tfrac12 S\cdot F}}
$$

분모 $\tfrac12 S\cdot F \neq 0$ 가정은 Problem 2의 effective mass $\mathfrak m \neq 0$ 조건에 대응한다. $S\cdot F \to 0$이면 anomalous 항이 발산하고 $\ker\sigma$의 차원 구조가 무너진다(논문 식 5.5의 정칙성 조건 (a)). 또한 $\sigma_3$ 항으로 인해 $\ker\sigma$가 $3 \to 1$차원으로 줄어, Problem 3에서 Z-shift gauge로 흡수되던 spin이 이제 **독립 자유도로 살아나** 위상공간이 $6 \to 8$차원이 된다.

## Step 5: 나머지 EOM과 일관성 검증

spin 동역학은 Problem 3과 같은 형태:
$$
\boxed{\dot S^{\mu\nu} = P^\mu\dot R^\nu - P^\nu\dot R^\mu}
$$

세 제약의 보존을 직접 검증한다 (sympy로 $P^2=0$ null 벡터와 일반 $F, S$에 대해 수치 확인 완료):

**(C1) $P^2 = 0$ 보존:** $\dot P^\mu = -eF^\mu_{\ \nu}\dot R^\nu$를 쓰면
$$
P_\mu\dot P^\mu = -eF^{\mu\nu}P_\mu\dot R_\nu \cdot(\ldots)
$$
$F$ 반대칭과 $\dot R \parallel P + (\text{spin항})$ 구조로 $P_\mu\dot P^\mu = 0$. $\checkmark$

**(C2) $S_{\mu\nu}P^\nu = 0$ 보존:**
$$
\frac{d}{d\tau}(S_{\mu\nu}P^\nu) = \dot S_{\mu\nu}P^\nu + S_{\mu\nu}\dot P^\nu = (P_\mu\dot R_\nu - P_\nu\dot R_\mu)P^\nu + S_{\mu\nu}\dot P^\nu
$$
첫 항은 $P_\mu(\dot R_\nu P^\nu) - (P_\nu P^\nu)\dot R_\mu$. $P^2 = 0$이고 $P_\nu\dot R^\nu = 0$ (아래)이므로 첫 항 소멸, 둘째 항도 $S_{\mu\nu}\dot P^\nu = -eS_{\mu\nu}F^\nu_{\ \rho}\dot R^\rho$와 상쇄. 합이 0. $\checkmark$

**(C3) $\frac12 S^2 = s^2$ 보존:** $S_{\mu\nu}\dot S^{\mu\nu} = S_{\mu\nu}(P^\mu\dot R^\nu - P^\nu\dot R^\mu) = 2S_{\mu\nu}P^\mu\dot R^\nu = 0$ ($\because S_{\mu\nu}P^\mu = 0$). $\checkmark$

**(참고) $P_\mu\dot R^\mu = 0$:** spin 항이 $S_{\mu\nu}P^\nu = 0$ 덕분에 $P$와 직교하고, $P^2 = 0$이므로 $P^\mu$ 항도 기여 없음. 따라서 $P_\mu\dot R^\mu = 0$이 자동 성립.

## 결과

$$
\begin{cases}
\dot R^\mu = P^\mu + \dfrac{S^{\mu\nu}F_{\nu\rho}P^\rho}{\frac{1}{2}S\cdot F} \\[2ex]
\dot P^\mu = -eF^\mu_{\ \nu}\dot R^\nu \\[1ex]
\dot S^{\mu\nu} = P^\mu\dot R^\nu - P^\nu\dot R^\mu
\end{cases}
$$

Problem 3의 free EOM에서 (i) $\dot P = 0 \to$ Lorentz force, (ii) $\dot R = $ 임의 $Z$-shift $\to$ spin-field anomalous velocity로 유일하게 고정, 두 가지가 핵심 변화다. $\blacksquare$

# Part B 풀이 — Anomalous coupling ($g \neq 0$)의 EOM
Part B는 시험 문제 풀이용 내용이 아니다. 그저 이걸 풀고 넘어가면 맥락을 이해하기 쉽기 때문에 추가한 설명이다. 

> [!note]  논문에서 제시하는 Anomalous coupling의 의미
> Part B는 Part A의 minimal coupling($g=0$)을 임의의 gyromagnetic ratio $g$로 확장한다. Part A의 결과가 superluminal Hall 운동 같은 불만족스러운 결과를 주었기 때문에 (논문 §V A), **mass-shell을 장에 의존시키는** 대담한 수정을 가한다.
>
> 핵심: $\sigma$는 Part A와 **형태가 같다** (논문 식 5.12 = 5.3). 달라지는 것은 오직 evolution space의 **제약**이며, 이 제약을 미분할 때 $\partial_\nu F$ 항(Stern–Gerlach)과 $\dot P$의 self-consistency가 새로 등장한다.

## Setup: 장-의존 mass-shell

Part A의 자명한 mass-shell $P^2=0$ 대신, 장에 의존하는 mass-square를 부과한다:
$$
P_\mu P^\mu = -\frac{eg}{2}\,S\cdot F, \qquad S\cdot F \equiv S_{\alpha\beta}F^{\alpha\beta} \tag{5.9}
$$
Evolution space는
$$
\tilde V^9 = \left\{ R, P \in \mathbb{R}^{3,1},\ S \in \mathfrak{o}(3,1) \;\middle|\; P_\mu P^\mu = -\tfrac{eg}{2}S\cdot F,\ S_{\mu\nu}P^\nu = 0,\ \tfrac12 S_{\mu\nu}S^{\mu\nu}=s^2 \right\} \tag{5.11}
$$
2-form은 Part A와 **동일**하다 ($g=0$이면 Part A로 환원):
$$
\sigma = -dP_\mu\wedge dR^\mu - \frac{1}{2s^2}dS^\lambda_{\ \mu}\wedge S^\mu_{\ \rho}\,dS^\rho_{\ \lambda} + \frac{1}{2}eF_{\mu\nu}\,dR^\mu\wedge dR^\nu \tag{5.12}
$$

## Step 1: mass-shell 제약을 자동 구현하는 트릭

$P_\mu = I_\mu + \frac{eg}{4}(S\cdot F)J_\mu$ 재정의
제약 $P^2 = -\frac{eg}{2}S\cdot F$를 손으로 부과하는 대신, Problem 3의 null 벡터 $I, J$ ($I^2=J^2=0$, $I\cdot J=-1$)를 이용해 $P_\mu$를 재정의한다 (논문 식 5.10):
$$
P_\mu = I_\mu + \frac{eg}{4}(S\cdot F)J_\mu \tag{5.10}
$$
그러면 $P^2$이 **저절로** 제약을 만족한다:
$$
P^2 = 2\cdot\frac{eg}{4}(S\cdot F)\,(I\cdot J) = \frac{eg}{2}(S\cdot F)(-1) = -\frac{eg}{2}S\cdot F 
$$
($I^2=J^2=0$이므로 cross term만 살아남고 $I\cdot J=-1$.) $S_{\mu\nu}P^\nu=0$도 자동 만족. **제약을 손으로 부과하는 대신 변수 정의에 녹여넣는** 것이 핵심 발상이다.

## Step 2: EOM과 Stern–Gerlach 항의 등장

$\sigma$ 자체는 Part A와 같으므로 $\iota_X\sigma=0$의 전개도 같다. 하지만 $\ker\sigma$를 구할 때 제약 $P^2=-\frac{eg}{2}S\cdot F$를 미분하면 우변에 $\partial_\nu F$가 나타난다 (장이 공간적으로 변하면 mass-shell도 변함). 결과 EOM은 :
$$
\begin{cases}
\dot R^\mu = P^\mu - \dfrac{1}{g+1}\dfrac{1}{S_{\alpha\beta}F^{\alpha\beta}}\left[(g-2)S^{\mu\nu}F_{\nu\rho}P^\rho - g\,S^{\mu\nu}\partial_\nu F_{\rho\sigma}S^{\rho\sigma}\right] \\[2ex]
\dot P^\mu = -eF^\mu_{\ \nu}\dot R^\nu - \dfrac{eg}{4}\partial^\mu F_{\rho\sigma}S^{\rho\sigma} \\[1ex]
\dot S^{\mu\nu} = P^\mu\dot R^\nu - P^\nu\dot R^\mu + \dfrac{eg}{2}\left[S^\mu_{\ \rho}F^{\rho\nu} - S^\nu_{\ \rho}F^{\rho\mu}\right]
\end{cases} \tag{5.13}
$$
두 종류의 새 항을 읽는 법:
- **$(g-2)$ 항** (anomalous velocity): $g=2$(Dirac)에서 정확히 사라진다. 이것이 $g=2$가 특별한 이유다.
- **$g\,\partial_\nu F$ 항** (Stern–Gerlach force): 장 기울기가 spin에 작용. $g=2$에서도 $g$배로 남아, "어떤 $g$에서도 anomalous velocity는 존재한다"는 논문의 관찰을 뒷받침한다.

## Minimal coupling과 anomalous coupling의 비교

| | Part A ($g=0$) | Part B (임의 $g$) |
| --- | --- | --- |
| mass-shell | $P^2 = 0$ | $P^2 = -\frac{eg}{2}S\cdot F$ (장-의존) |
| $\dot R$ anomalous 계수 | $2$ ($=\frac{1}{1/2}$) | $-\frac{g-2}{g+1}$ ($g=0$에서 $2$) |
| Stern–Gerlach | 없음 | $g\,\partial F$ 항 존재 |
| $\dot P$ | $-eF\dot R$ | $-eF\dot R - \frac{eg}{4}\partial F\,S$ |
| $\dot S$ | $P\dot R - P\dot R$ | $+\frac{eg}{2}[SF-FS]$ 항 추가 |

이는 zero-rest-mass spinning particle의 BMT 방정식으로, massive 경우의 BMT(Part C)와 나란히 대응된다. $g=2$에서 anomalous velocity가 사라지는 구조는 Part C의 weak-field BMT에서 $(g-2)$ 항이 소멸하는 것과 정확히 같은 물리다.


# Part C 풀이 — BMT Lagrangian

Part C는 레퍼런스 논문(Duval & Horváthy 2015)의 본문이 아니라 그 논문이 인용한 **Cognola, Vanzo, Zerbini & Soldati, *Phys. Lett.* 104B (1981) 1**에서 직접 다룬다. 문제의 Lagrangian이 이 논문의 식 (1)과 글자 그대로 일치하며, weak-field BMT(식 21)도 이 논문이 출처다.

Notation: $c=1$, $\dot{\,} = d/d\theta$ ($\theta$는 scalar parameter), metric signature는 Problem 3과 동일. $k = eg/2m$.

---

## (i) $S^2$ is a conserved quantity — 두 가지 풀이 전략

### 첫 번째 풀이 — Lie algebra / 표현론

$\varphi^A, \psi_A$의 Euler–Lagrange 방정식에서 출발한다. 운동항(kinetic term)은
$$
L_{\text{kin}} = \frac{1}{2}(\psi_A\dot{\varphi}^A - \dot{\psi}_A\varphi^A)
$$
이고, 나머지 퍼텐셜 $V$는 $\varphi, \psi$에 **오직 $S_{\mu\nu} = \psi_A(\Sigma_{\mu\nu})^A_{\ B}\varphi^B$를 통해서만** 의존한다. 반대칭 텐서
$$
\omega^{\rho\sigma} \equiv \frac{\partial V}{\partial S_{\rho\sigma}}
$$
를 정의하면, chain rule로
$$
\frac{\partial V}{\partial\psi_A} = \omega_{\rho\sigma}(\Sigma^{\rho\sigma})^A_{\ B}\varphi^B, \qquad \frac{\partial V}{\partial\varphi^B} = \omega_{\rho\sigma}\psi_A(\Sigma^{\rho\sigma})^A_{\ B}
$$

**$\psi_A$ 변분** (중간 대수를 명시한다):
$$
\frac{\partial L}{\partial\dot{\psi}_A} = -\frac{1}{2}\varphi^A, \qquad \frac{\partial L}{\partial\psi_A} = \frac{1}{2}\dot{\varphi}^A - \frac{\partial V}{\partial\psi_A}
$$

$$
\frac{d}{d\theta}\!\left(-\frac{1}{2}\varphi^A\right) - \frac{1}{2}\dot{\varphi}^A + \frac{\partial V}{\partial\psi_A} = -\frac{1}{2}\dot{\varphi}^A - \frac{1}{2}\dot{\varphi}^A + \frac{\partial V}{\partial\psi_A} = -\dot{\varphi}^A + \frac{\partial V}{\partial\psi_A} = 0
$$

두 개의 $-\tfrac12\dot{\varphi}^A$가 합쳐져 $-\dot{\varphi}^A$가 되는 것이 핵심이다. 따라서
$$
\dot{\varphi}^A = \omega_{\rho\sigma}(\Sigma^{\rho\sigma})^A_{\ B}\varphi^B
$$

같은 방식으로 $\varphi^B$ 변분에서
$$
\dot{\psi}_B = -\omega_{\rho\sigma}\psi_A(\Sigma^{\rho\sigma})^A_{\ B}
$$

이제 $S_{\mu\nu} = \psi_A(\Sigma_{\mu\nu})^A_{\ B}\varphi^B$의 total derivative를 구하고 위 결과를 대입하면 commutator 구조가 등장한다:
$$
\dot{S}_{\mu\nu} = \dot{\psi}_A(\Sigma_{\mu\nu})^A_{\ B}\varphi^B + \psi_A(\Sigma_{\mu\nu})^A_{\ B}\dot{\varphi}^B = \omega_{\rho\sigma}\,\psi_A\,[\Sigma_{\mu\nu}, \Sigma^{\rho\sigma}]^A_{\ C}\,\varphi^C
$$

Lorentz Lie algebra $\mathfrak{o}(3,1)$의 commutation relation은 표현(representation)의 종류와 무관하게
$$
[\Sigma_{\mu\nu}, \Sigma_{\rho\sigma}] = \eta_{\mu\sigma}\Sigma_{\nu\rho} + \eta_{\nu\rho}\Sigma_{\mu\sigma} - \eta_{\mu\rho}\Sigma_{\nu\sigma} - \eta_{\nu\sigma}\Sigma_{\mu\rho}
$$
이다. 대입하고 $\psi_A(\Sigma_{\alpha\beta})^A_{\ C}\varphi^C = S_{\alpha\beta}$로 역산하면
$$
\dot{S}_{\mu\nu} = \omega^{\rho\sigma}\left(\eta_{\mu\sigma}S_{\nu\rho} + \eta_{\nu\rho}S_{\mu\sigma} - \eta_{\mu\rho}S_{\nu\sigma} - \eta_{\nu\sigma}S_{\mu\rho}\right)
$$

> [!important] 핵심 축약: 4항 → 2항
> 각 항에서 $\eta$가 $\omega$의 인덱스 하나를 내린 뒤, $S$의 반대칭성을 적용한다:
>
> - 1항: $\eta_{\mu\sigma}\omega^{\rho\sigma}S_{\nu\rho} = \omega^{\rho}_{\ \mu}S_{\nu\rho} = -\omega_\mu^{\ \rho}S_{\nu\rho} = +\omega_\mu^{\ \rho}S_{\rho\nu}$
> - 3항: $-\eta_{\mu\rho}\omega^{\rho\sigma}S_{\nu\sigma} = -\omega_\mu^{\ \sigma}S_{\nu\sigma} = +\omega_\mu^{\ \sigma}S_{\sigma\nu}$ → **1항과 동일**
> - 2항: $\eta_{\nu\rho}\omega^{\rho\sigma}S_{\mu\sigma} = \omega_\nu^{\ \sigma}S_{\mu\sigma} = -\omega_\nu^{\ \sigma}S_{\sigma\mu}$
> - 4항: $-\eta_{\nu\sigma}\omega^{\rho\sigma}S_{\mu\rho} = -\omega^\rho_{\ \nu}S_{\mu\rho} = +\omega_\nu^{\ \rho}S_{\mu\rho} = -\omega_\nu^{\ \rho}S_{\rho\mu}$ → **2항과 동일**
>
> (1항=3항), (2항=4항)이므로 각각 $\times 2$:
> $$
> \dot{S}_{\mu\nu} = 2\,\omega_\mu^{\ \alpha}S_{\alpha\nu} - 2\,\omega_\nu^{\ \alpha}S_{\alpha\mu}
> $$

스핀 불변량 $S^2 = \frac{1}{2}S_{\mu\nu}S^{\mu\nu}$의 변화율:
$$
\frac{d}{d\theta}S^2 = S^{\mu\nu}\dot{S}_{\mu\nu} = S^{\mu\nu}\left(2\omega_\mu^{\ \alpha}S_{\alpha\nu} - 2\omega_\nu^{\ \alpha}S_{\alpha\mu}\right) = 4\,\omega_{\mu\alpha}\,T^{\mu\alpha}, \quad T^{\mu\alpha} \equiv S^{\mu\nu}S^\alpha_{\ \nu}
$$

$T^{\mu\alpha}$의 대칭성을 확인한다 (반대칭 두 번 = 대칭):
$$
T^{\mu\alpha} = S^{\mu\nu}S^\alpha_{\ \nu} = (-S^{\nu\mu})(-S_\nu^{\ \alpha}) = S^{\alpha\nu}S^\mu_{\ \nu} = T^{\alpha\mu}
$$

$T^{\mu\alpha}$는 **대칭**, $\omega_{\mu\alpha} = \partial V/\partial S^{\mu\alpha}$는 **반대칭**. 대칭 텐서와 반대칭 텐서의 완전 수축(full contraction)은 항상 0이므로
$$
\boxed{\frac{d}{d\theta}S^2 = 4\,\omega_{\mu\alpha}T^{\mu\alpha} = 0}
$$

$S^2$는 보존량이다. 이 보존 법칙은 비정상 자기모멘트 항이나 라그랑주 승수 항 등 **구체적 상호작용 형태와 무관**하며, 오직 스핀이 Lorentz 군의 표현을 따른다는 기하학적 구조에서 기인한다.

### 두 번째 풀이 — Pauli–Lubanski (논문 Cognola et al. 식 18–20)

논문은 다른 정의에서 출발한다. Pauli–Lubanski spin vector (식 18):
$$
S^\mu = \frac{1}{2m}\epsilon^{\mu\nu\alpha\beta}\Pi_\nu S_{\alpha\beta}
$$
역관계 (식 19): $\displaystyle S_{\mu\nu} = -\frac{m}{\Pi^2}\epsilon_{\mu\nu\alpha\beta}S^\alpha\Pi^\beta$.

식 (18)을 미분하고 EOM (식 9, 10)을 대입하면 논문 식 (20):
$$
\dot{S}_\rho = g\frac{e}{2m}F_{\rho\mu}S^\mu + \frac{1}{2}(g-2)\frac{e}{\Pi^2}F_{\mu\nu}S^\mu\dot{x}^\nu\Pi_\rho + g\frac{e}{2\Pi^2}F_{\mu\nu}S^\mu\eta^\nu\Pi_\rho
$$

우변의 **모든 항이 $F_{\cdot\mu}S^\mu$ 꼴**, 즉 $\dot{S}_\rho$가 $S^\mu$에 선형이고 반대칭적으로 작용하는 회전(precession)이다. 따라서 $S_\mu\dot{S}^\mu = 0$이고
$$
\frac{d}{d\theta}(S_\mu S^\mu) = 0
$$
논문이 식 (20) 직후 "$S^2$가 보존량임을 본다"고 명시한 것이 이것이다.

> [!important] 두 경로의 통일된 메시지
> | | 경로 1 (Lie algebra) | 경로 2 (Pauli–Lubanski) |
> | --- | --- | --- |
> | 출발 | $S_{\mu\nu} = \psi\Sigma\varphi$ 표현 | $S^\mu = \frac{1}{2m}\epsilon\Pi S$ |
> | 메커니즘 | $[\Sigma,\Sigma]$ 구조 → $\omega$(antisym)$\times T$(sym) $=0$ | $\dot{S}_\rho \propto F_{\rho\mu}S^\mu$ 회전 |
> | 성격 | 표현론적·기하학적 | 동역학적·직접 |
> | 공통 본질 | $S$가 Lorentz orbit 위에서만 움직임 → orbit 반지름($S^2$ = Casimir) 불변 | |
>
> 둘 다 "반대칭 텐서의 닫힌 수축은 0"이라는 동일한 정신이며, 이는 [[AM final project - Problem 3]] Part 1의 $T_1 = -T_2$ 보조정리와 같은 구조다.

---

## (ii) Weak-field BMT 유도 — 논문 식 (6) → (21)

목표 (논문 식 21):
$$
\ddot{x}_\mu = \frac{e}{m}F_{\mu\nu}\dot{x}^\nu, \qquad \dot{S}_\rho = g\frac{e}{2m}F_{\rho\mu}S^\mu + (g-2)\frac{e}{2m}F_{\mu\nu}S^\mu\dot{x}^\nu\dot{x}_\rho
$$

### Step 1 — Canonical & gauge-invariant momentum

$\eta_\mu \equiv S_{\mu\nu}\lambda^\nu$ (식 7)로 묶으면 운동항이 $-\frac{1}{2}m(\dot{x}_\mu + \eta_\mu)(\dot{x}^\mu + \eta^\mu)$가 된다. Canonical momentum (식 6):
$$
p_\mu = -\frac{\partial L}{\partial\dot{x}^\mu} = m(\dot{x}_\mu + \eta_\mu) + eA_\mu
$$
Gauge-invariant momentum (식 8):
$$
\Pi_\mu \equiv p_\mu - eA_\mu = m(\dot{x}_\mu + \eta_\mu)
$$

### Step 2 — Equations of motion (식 9, 10)

$$
\dot{\Pi}_\mu = eF_{\mu\nu}\dot{x}^\nu + \frac{1}{2}k\,\partial_\mu F_{\alpha\beta}S^{\alpha\beta}
$$
$$
\dot{S}_{\mu\nu} = k(S_{\mu\alpha}F^\alpha_{\ \nu} - S_{\nu\alpha}F^\alpha_{\ \mu}) + \Pi_\mu\dot{x}_\nu - \Pi_\nu\dot{x}_\mu, \qquad k = \frac{eg}{2m}
$$

### Step 3 — Multiplier 제약 (식 11) → $\eta_\mu = 0$ 조건 (식 12)

$\lambda^\nu$는 라그랑주 승수이므로, 그 변분이 제약을 준다:
$$
S_{\mu\nu}\Pi^\nu = 0
$$
논문은 이 제약이 다음을 함의함을 보인다: 입자가 **자유롭거나, 장 기울기가 0이거나, $g = 2$** 이면
$$
\eta_\mu = 0
$$

### Step 4 — $\eta_\mu$의 명시적 형태 (식 14–16)

$\Pi^2$ 계산 (식 14):
$$
\Pi^2 = \Pi_\mu\Pi^\mu = m^2(\dot{x}^2 - \eta^2)
$$
식 (11)을 미분하고 (9), (10)을 대입하면 (식 15):
$$
\eta_\mu\left(\Pi^2 + \frac{1}{2}eF_{\alpha\beta}S^{\alpha\beta}\right) = \frac{e}{2m}(g-2)\Pi_\alpha F^{\alpha\beta}S_{\beta\mu} + \frac{1}{2}k\,\partial_\nu F_{\alpha\beta}S^{\alpha\beta}S^\nu_{\ \mu}
$$
static·homogeneous field로 한정하면 $\partial_\nu F = 0$이므로 두 번째 항이 소멸하고 (식 16):
$$
\eta_\mu = \frac{(e/2m)(g-2)\,\Pi_\alpha F^{\alpha\beta}S_{\beta\mu}}{\Pi^2 + \frac{1}{2}eF_{\alpha\beta}S^{\alpha\beta}}
$$

> [!tip] 핵심 통찰: $\eta_\mu \propto (g-2)$
> - $g = 2$이면 $\eta_\mu = 0$이 **정확히** 성립한다 (장 기울기 무관). 이것이 식 (12)의 한 경우이며, Lagrangian (1)을 선택한 정당화다.
> - $g \neq 2$여도 weak field에서 $\eta_\mu$는 $F$에 1차로 작으므로 무시할 수 있다.

### Step 5 — Weak-field limit → BMT (식 21)

$\eta_\mu \to 0$이면 식 (8)에서 $\Pi_\mu = m\dot{x}_\mu$. 이를 식 (9)에 대입하고 ($\partial F = 0$):
$$
m\ddot{x}_\mu = eF_{\mu\nu}\dot{x}^\nu \;\Longrightarrow\; \boxed{\ddot{x}_\mu = \frac{e}{m}F_{\mu\nu}\dot{x}^\nu}
$$
스핀은 식 (20)에서 $\eta \to 0$, $\Pi_\rho \to m\dot{x}_\rho$, $\Pi^2 \to m^2$:
$$
\boxed{\dot{S}_\rho = g\frac{e}{2m}F_{\rho\mu}S^\mu + (g-2)\frac{e}{2m}F_{\mu\nu}S^\mu\dot{x}^\nu\dot{x}_\rho}
$$

목표 식 (21) 도달. $(g-2)$ 항이 anomalous precession이며, $g = 2$에서는 사라지고 순수 Larmor 세차만 남는다. 
