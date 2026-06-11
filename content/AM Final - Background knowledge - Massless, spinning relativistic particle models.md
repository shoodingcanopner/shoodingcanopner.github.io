
문제: [[AM Finalterm problem]] / 답안 모음: [[AM finalterm answer]]

# Appendix B: Coadjoint Orbit으로부터 $\sigma$유도

**참조**: Duval & Horváthy (2015), Appendix B (p.10–11)

Appendix B는 Poincaré group과 Lie algebra에 대해 소개하고, 이것이 free relativistic particle을 modeling하는 공간임을 알려준다. 또한 이곳에서 어떻게 symplectic 2-form을 만드는지 소개하며, 논문 속 section 3에서 설명하는 이론의 기반을 만든다. 

---

## 0. 전체 흐름

$$
G = SE^+(3,1) \xrightarrow{\,SO(2)} V^9 \xrightarrow{\,\ker\sigma} M^6
$$

| 공간                     | 차원                              | 의미                                                       |
| ---------------------- | ------------------------------- | -------------------------------------------------------- |
| $G$ (Poincaré군)        | $6_{\text{Lorentz}}+4_{R} = 10$ | 가능한 모든 Lorentz frame × 평행이동                              |
| $V^9 = G/SO(2)$        | $6-1_{SO(2)}+4_{R} = 9$         | 물리적 evolution space: $(R, P, S)$                         |
| $M^6 = V^9/\ker\sigma$ | $9-3_{\ker\sigma} = 6$          | Space of motions (phase space): $(\tilde{x}, \tilde{p})$ |

Appendix B는 $G \to V^9$ 단계를 설명한다. Section 3은 $V^9 \to M^6$ 단계다.

---

## 1. 무대 설정: Poincaré group과 Lie algebra dual space
참고 논문에서는 Minkowski space-time에 사는 massless, spinning particle을 모델링한다. 이때 Free relativistic particle의 space of motion은 Poincaré group의 manifold이다. 

논문 독해를 위해 notation을 정리하겠다. 
**Poincaré group**: $G = SE^+(3,1)$
- 원소: pair $g = (L, C)$:
- $L \in SO^+(3,1)$: 고유·시간 방향 보존 Lorentz 변환
- $C \in \mathbb{R}^{3,1}$: 시공간 평행이동

그 다음 Lie algebra에 대한 이해가 필요하다. 
Lie algebra는 Lie group의 infinitesimal version이며, group operation identity에 대한 tangent space이다. 물리학자 관점으로 이야기하면 Lie algebra는 Lie group의 generator이다. 

양자역학에서 배운 예시를 통해 이해했다. Sakurai 교과서에서 배운 회전 연산자 $SU(2)$도 Lie group이다. 이때 $SU(2)$의 Lie algebra는 $\mathfrak{su}(2)$이다. $\mathfrak{su}(2)$의 기저는 $J_x, J_y, J_z$이고, 이것은 우리가 잘 아는 각운동량 연산자 $\vec{J}$의 기저이며, 회전 연산의 generator이다. 

양자역학에서 각운동량 연산자의 정의를 배울 때, $\hat{z}$을 회전축으로 하여 작은 각 $\epsilon$만큼 돌리는infinitesimal rotation이  $1-\frac{i}{\hbar}\epsilon J_z$라고 배웠고, 증명까지 했다. 이때, $1$이 $SU(2)$ group operation identity이며, $J_z$가 identity에 대한 tangent space의 원소임이 바로 눈에 보인다. 

용어의 이름이 'Lie' algebra인 이유는 자체적으로 Lie bracket구조를 가지고 있기 때문이다. 해석역학 강의에서 배웠듯, Lie algebra의 Lie bracket구조는 그대로 sympletic manifold에서 vector Lie algebra가 만드는 vector filed의 Lie bracket구조로 보존된다. 

이제 다시 논문 내용으로 돌아와, Poincaré group의 Lie algebra에 대한 참고 논문 속 notation을 살펴보자. 

**Lie algebra**: $\mathfrak{e}(3,1)$
- 원소: $Z = (\Lambda, \Gamma)$
- $\Lambda \in \mathfrak{so}(3,1)$: 무한소 Lorentz 변환
- $\Gamma \in \mathbb{R}^{3,1}$: 무한소 평행이동

Moment map을 정의하기 위해서는 Lie algebra의 dual space를 정의해야 한다. 
참고 논문 속 notation을 살펴보자면

**Dual space of $\mathfrak{e}(3,1)$**: $\mathfrak{e}(3,1)^*$ 
- 원소: $\mu = (M, P)$
- $M \in \mathfrak{so}(3,1)$: Lorentz 운동량 (각운동량 + boost 운동량)
- $P \in \mathbb{R}^{3,1}$: 선형 운동량

$\mathfrak{e}(3,1)$과 $\mathfrak{e}(3,1)^*$의 paring은 다음 식으로 주어진다.

$$
\mu \cdot Z = \frac{1}{2}M_{\mu\nu}\Lambda^{\mu\nu} - P_\mu\Gamma^\mu
$$

---

## 2. Null Frame $E = (I, J, K, L)$
Appendix B에서 쓰이는 Lorentz frame은 일반적인 정규직교기저가 아닌 **null frame**이다.

**정의**: Minkowski 공간 $\mathbb{R}^{3,1}$의 기저 $(I, J, K, L)$ — 각각은 4성분 벡터 — 로서, 각각의 scalar product는 이렇게 주어진다. 

$$
I_\mu I^\mu = 0, \quad J_\mu J^\mu = 0, \quad I_\mu J^\mu = -1
$$

$$
K_\mu K^\mu = -1, \quad L_\mu L^\mu = -1
$$

$$
I_\mu K^\mu = I_\mu L^\mu = J_\mu K^\mu = J_\mu L^\mu = K_\mu L^\mu = 0
$$

($I$ 는 future-pointing vector)

**각 벡터의 물리적 의미**:

| 벡터  | 성질                    | 물리적 의미                                      |
| --- | --------------------- | ------------------------------------------- |
| $I$ | null, future-pointing | 입자의 4-운동량 방향. 나중에 표기법을 바꾸어 $P_0 = I_0$로 동일시 |
| $J$ | null, $I\cdot J = -1$ | $I$와 complementary한 null 방향                 |
| $K$ | spacelike             | 스핀의 횡방향 1                                   |
| $L$ | spacelike             | 스핀의 횡방향 2                                   |

> [!note] Q. Null vector란?
> $I_\mu I^\mu = 0$이 **null**의 정의다. Minkowski 내적 $\eta = \text{diag}(-,-,-,+)$에서:
> $$I_\mu I^\mu = -(I^1)^2-(I^2)^2-(I^3)^2+(I^0)^2 = 0$$
> 즉 공간 크기 = 시간 크기인 벡터 — 광속으로 날아가는 방향을 의미하며, 다른 말로는 light-like vector라고 전기역학 시간에 배웠다. 
>
> **왜 null vector를 기저로 삼나?** massless 입자의 4-운동량이 $P_\mu P^\mu = 0$으로 null이기 때문이다. 정규직교기저의 어떤 원소도 null이 아니므로, $P$를 기저벡터와 자연스럽게 동일시할 수 없다. Null frame을 쓰면 $P = I$로 바로 동일시된다 — **입자의 운동량이 기저벡터 하나와 일치**하도록 설계된 기저다.

> [!note] Frame vs. 좌표 / 관계식 수 세기
> Minkowski 공간의 **한 점**을 나타내는 데는 숫자 4개면 충분하다.
> 그러나 null frame $E = (I, J, K, L)$은 **기저벡터 4개의 묶음**이므로 각각 4성분, 합계 $4\times 4 = 16$개의 변수로 이루어진다.
> 임의의 frame $E$는 기준 frame $E_0$에 Lorentz 변환 $L$을 적용한 것: $E = L \cdot E_0$.
> 따라서 **frame의 공간 $\cong$ Lorentz군 $SO^+(3,1)$**.
>
> **Q. 관계식이 10개인데 자유도는 얼마인가?**
> scalar product 조건이 정확히 10개다: $(I\cdot I,\ J\cdot J,\ I\cdot J,\ K\cdot K,\ L\cdot L,\ I\cdot K,\ I\cdot L,\ J\cdot K,\ J\cdot L,\ K\cdot L)$.
> 이 관계식들이 각각 독립적으로 자유도 하나를 제거하므로:
> $$16\text{개 변수} - 10\text{개 관계식} = 6 = \dim SO^+(3,1) \quad\checkmark$$
> Poincaré군(10차원)이 아니라 **Lorentz군은 6차원**이다. $E$는 평행이동 정보를 담지 않으므로 Lorentz군에 대응한다.

참고 논문 속 Section 3에서는 evolution space의 공간으로 $V^9 = G/SO(2)$을 사용한다. 왜 Poincaré group을 바로 사용하지 않고 한 차원 줄여서 사용하는가? 이러한 접근의 물리적인 정당성은 어디에서 나오는가?

**$SO(2)$ 자유도**: $I$, $J$를 고정하면서 $K$, $L$을 회전시키는 변환:

$$
(K, L) \mapsto (K\cos\theta + L\sin\theta,\ -K\sin\theta + L\cos\theta)
$$

이 $SO(2)$-작용이 물리에 영향을 주지 않는 여분 자유도다. 이것을 quotient하여 $V^9 = G/SO(2)$를 얻는다.

> [!note] Q. $SO(2)$ quotient의 물리적 정당성
> **스핀 텐서는 $K$, $L$에 무관하다.** $S_{\mu\nu} = s(I_\mu J_\nu - I_\nu J_\mu)$는 $I$, $J$만으로 구성되어 있어서, $K\to K\cos\theta+L\sin\theta$로 돌려도 $S_{\mu\nu}$도, $P^\mu$도 변하지 않는다. 따라서 $K$, $L$ 사이의 회전 — $SO(2)$ — 은 모든 관측량에 아무 영향을 주지 않는 **순수한 여분 자유도**다.
>
> 이는 전기장 유무와 무관하다. 비최소 결합 항 $S_{\mu\nu}F^{\mu\nu}$도 마찬가지로 $I$, $J$로만 표현되므로, 외부 전자기장이 있어도 이 $SO(2)$는 gauge 자유도로 남는다.
>
> 물리적으로: **null 방향 $I$를 축으로 하는 $SO(2)$ = 광자/Weyl fermion의 측정 불가능한 전역 위상.**

> [!note] Q. $V^9$의 차원이 어떻게 9가 되는가?
> $$\dim V^9 = \underbrace{6}_{\text{Lorentz}} - \underbrace{1}_{SO(2)\text{ quotient}} + \underbrace{4}_{R^\mu\text{ 평행이동}} = 9 \quad\checkmark$$
> - Lorentz군 $SO^+(3,1)$: 6차원 (frame $E$의 자유도)
> - $SO(2)$ quotient: $\dim(G/H) = \dim G - \dim H$이므로 1차원 제거
> - $R^\mu$: Poincaré군의 평행이동 성분 $C \in \mathbb{R}^{3,1}$, 4차원 추가
>
> $G = SE^+(3,1)$의 원소 $g=(L, C)$에서, $E$는 $L$(Lorentz 부분)에서, $R^\mu$는 $C$(평행이동 부분)에서 나온다. $E$만 쓸 때 $R^\mu$가 안 보였을 뿐, 처음부터 $G$의 원소 안에 있었다.

---

## 3. 기준점 $\mu_0$ 선택

기준 frame $E_0 = (I_0, J_0, K_0, L_0)$를 고정하고, 기준 운동량을 다음으로 설정:

$$
\mu_0 = (M_0, P_0), \qquad M_0 = s\,I_0 \times J_0, \quad P_0 = I_0
$$

명시적으로:

$$
(M_0)_{\mu\nu} = -s\,\epsilon_{\mu\nu\rho\sigma}I_0^\rho J_0^\sigma
$$

**물리적 의미**: 스핀 $s$, 4-운동량 $I_0$ 방향인 massless 입자 하나.

---

## 4. Coadjoint 1-form $\alpha$와 2-form $\sigma = d\alpha$

군 $G$ 위에 1-form을 정의한다. (논문 식 B1)

$$
\alpha = \mu_0 \cdot g^{-1}dg \tag{B1}
$$
그리고 $\alpha$를 exterior derivative하여 2-form을 구한다. (논문 식 B2):

$$
\sigma = d\alpha \tag{B2}
$$
(B1)은 group의 원소를 이용하여 1-form을 정의했다는 점에서 낯설게 느껴진다. 
참고 논문의 Appendix A에서와 같이, 해석역학 수강 학생은 주어진 라그랑지안에서 sympletic 2-form을 구하고 그 다음 1-form을 찾는 방식이 더 익숙하기 때문이다. 

그러니 왜 (B1)이 나오는지 알아볼 필요가 있었다. 
논문은 (B1)이 Appendix A의 variational framework를 "generalize"한다고만 적고 넘어간다. 둘을 잇는 빠진 다리는 "Appendix A의 $\sigma$도 사실은 어떤 1-form의 외미분 $d\alpha$였다" 는 사실이다.

### Maurer-Cartan form $g^{-1}dg$ 이란?

직관은 강체역학의 angular velocity에서 온다. 회전 행렬 $g(t)$에 대해

$$
\Omega = g^{-1}\dot{g} \in \mathfrak{so}(3)
$$

가 body frame angular velocity였다. 여기서 핵심은 $\dot g$는 $SO(3)$ group $G$ 위의 점 $g$에 매인 tangent vector인데, $g^{-1}$을 곱하면 **항상 같은 곳 — Lie algebra $\mathfrak{g}$ (항등원의 tangent space) — 로 옮겨진다**는 점이다.

이를 미분형식으로 일반화한 것이 **Maurer-Cartan form**이다. 

$$
\theta = g^{-1}dg
$$

성질:
- **$\mathfrak{g}$-valued 1-form** 이다. 실수값이 아니라 각 tangent vector를 $\mathfrak{g}$의 원소로 보낸다.
- 군 위 어디서나 좌표 없이 표준적으로 존재한다. ($g^{-1}$ 곱하기 = 모든 점의 tangent space를 $\mathfrak{g}$로 끌어다 놓는 표준 사전)
- 직관: "항등원에서 어느 방향으로 얼마나 움직였나"를 Lie algebra 언어로 읽어주는 측정기.

$\theta$는 $\mathfrak{g}$-valued라 그대로는 Appendix A 틀에 못 넣는다. 그래서 $\mathfrak{g}$의 dual space의 원소인 $\mu_0 \in \mathfrak{g}^*$로 **pairing**하여 실수값 1-form으로 만든다:

$$
\alpha = \mu_0 \cdot (g^{-1}dg) = \langle \mu_0,\, \theta\rangle \tag{B1}
$$

$\mu_0$를 무엇으로 고르냐(massless, spin $s$)가 이 1-form의 성격을 결정한다.

#### (2) Appendix A와 같은 레시피임을 확인

Appendix A의 Lagrangian은 $L = u_\alpha \dot\xi^\alpha - h(\xi)$ 였고, $\dot\xi$에 곱해지는 계수 $u_\alpha$가 **canonical 1-form** $u = u_\alpha d\xi^\alpha$ 를 이룬다. (식 1.1에서 $\dot{\mathbf x}$에 곱해진 $(\mathbf p + e\mathbf A)$, $\dot{\mathbf p}$에 곱해진 $-\mathbf a$가 그 성분. $p\,dq$의 일반화.)

Appendix A의 2-form은 (식 A1)에서

$$
\omega_{\alpha\beta} = \partial_\alpha u_\beta - \partial_\beta u_\alpha
\quad\Longleftrightarrow\quad
\omega = du
$$

즉 $\omega = du$. 시간까지 합치면 (A2):

$$
\sigma = \omega - dh\wedge dt = d(u - h\,dt)
$$

따라서 Appendix A의 $\sigma$ 역시 **어떤 1-form $\alpha = u - h\,dt$의 외미분** $\sigma = d\alpha$ 였다.

| | 1-form $\alpha$의 출처 | 2-form |
|---|---|---|
| **Appendix A** | Lagrangian의 kinetic term $u_\alpha d\xi^\alpha - h\,dt$ | $\sigma = d\alpha$ |
| **Appendix B** | 군 위의 Maurer-Cartan $\mu_0 \cdot g^{-1}dg$ | $\sigma = d\alpha$ |

**완전히 같은 레시피.** 차이는 1-form을 "좌표+Lagrangian"에서 얻느냐(A), "군 $G$의 구조 자체"에서 얻느냐(B)뿐이다. 그래서 (B1)이 variational framework를 **generalize** 한다고 말하는 것 — 좌표 의존적 $u\,d\xi - h\,dt$를 좌표 없는 군론적 객체 $\mu_0 \cdot g^{-1}dg$로 바꿔치기한 것이다.

군 버전이 더 강력한 이유: 좌표/Lagrangian 없이도 $\mu_0$ 선택만으로 입자 종류(mass·spin)가 결정되고, Poincaré symmetry가 군 구조에서 공짜로 따라온다.

$$
\boxed{\;\alpha \xrightarrow{\;d\;} \sigma \xrightarrow{\;\ker\;} \text{motion}\;}
$$


다시 본론으로 돌아와서, $\alpha = \mu_0 \cdot (g^{-1}dg)$를 명시적으로 계산해 보자. 

### 식 (B3) 유도: $\alpha = \mu_0 \cdot g^{-1}dg$ 에 실제로 대입하기

어떻게 추상적인 (B1)에서 구체적 (B3)가 나오나?
핵심은 **pairing 정의를 따라 $\alpha$를 두 조각으로 자르는 것**이다.
$M$-조각(Lorentz momentum) → 스핀×회전. $P$-조각(Linear momentum) → 운동량×병진, 

#### 준비물

**(a) Pairing 정의** (Appendix B 첫 문단)

$\mu = (M, P) \in \mathfrak{e}(3,1)^*$, $Z = (\Lambda, \Gamma) \in \mathfrak{e}(3,1)$ 에 대해

$$
\mu \cdot Z = \frac{1}{2}M_{\mu\nu}\Lambda^{\mu\nu} - P_\mu \Gamma^\mu
$$

- $M$ (Lorentz moment) $\leftrightarrow$ $\Lambda$ (rotation·boost 부분)
- $P$ (linear momentum) $\leftrightarrow$ $\Gamma$ (spacetime translation 부분)

**(b) 기준점 $\mu_0$**

$$
(M_0)_{\mu\nu} = -s\,\epsilon_{\mu\nu\rho\sigma}I_0^\rho J_0^\sigma,
\qquad
P_0 = I_0
$$

**(c) $g^{-1}dg = (\Lambda, \Gamma)$ 의 frame 번역**

Poincaré 군 원소 $g = (L, C)$ 를 frame $E=(I,J,K,L)$ 과 translation $C \leftrightarrow R$ 로 표현하면, Maurer-Cartan form의 두 성분은

- translation 부분: $\Gamma^\mu = dR^\mu$
- Lorentz 부분: $\Lambda^{\mu\nu}$ = frame 벡터들의 회전량 ($dE \cdot E$ 꼴)

#### 대입

(a)를 (B1)에 적용하면 두 덩어리로 분리:

$$
\alpha = \mu_0 \cdot g^{-1}dg
= \underbrace{\frac{1}{2}(M_0)_{\mu\nu}\Lambda^{\mu\nu}}_{\text{spin 부분}}
- \underbrace{(P_0)_\mu \Gamma^\mu}_{\text{momentum 부분}}
$$

**momentum 부분** — $P_0 = I_0$, $\Gamma^\mu = dR^\mu$:

$$
-(P_0)_\mu \Gamma^\mu = -I_\mu\,dR^\mu
$$

(기준점의 $I_0$ 는 군 위 일반 점에서 그 점의 frame vector $I$ 가 된다.)

**spin 부분** — $(M_0)_{\mu\nu} = -s\epsilon_{\mu\nu\rho\sigma}I^\rho J^\sigma$ 를 $\Lambda^{\mu\nu}$ 와 축약.
frame $(I,J,K,L)$ 이 orthonormal (식 B 위 scalar product 규칙) 이므로:

- $M_0$ 가 $I, J$ 로만 구성됨 → 직교성으로 대부분 항이 소멸
- $I,J$ 평면의 "conjugate 방향"인 $K, L$ 평면 회전만 생존

$$
\frac{1}{2}(M_0)_{\mu\nu}\Lambda^{\mu\nu} = s\,K_\mu\,dL^\mu
$$

#### 결과

$$
\boxed{\alpha = -I_\mu\,dR^\mu + s\,K_\mu\,dL^\mu} \tag{B3}
$$



이 $\sigma$를 $SO(2)$-quotient로 내리면 $V^9 = G/SO(2)$ 위에서 식 (3.5)가 된다:

$$
\boxed{\sigma = -dP_\mu \wedge dR^\mu - \frac{1}{2s^2}dS^\mu_{\ \lambda} \wedge S^\lambda_{\ \rho}\,dS^\rho_{\ \mu}}
$$

($P = I$, $S = s\,I\times J$로 놓은 것.)

---



## 5. 핵심 정리: KKS 정리와 $\sigma$의 필연성

> [!important] Kirillov–Kostant–Souriau (KKS) 정리
> Lie군 $G$의 **coadjoint orbit**
> $$\mathcal{O}_{\mu_0} = \{\mathrm{Ad}^*_g\,\mu_0 \mid g \in G\} \subset \mathfrak{g}^*$$
> 는 자동으로 canonical symplectic structure를 가진다. 그 symplectic form은:
> $$\omega_{\mathrm{KKS}}(X_\xi, X_\eta)\big|_\mu = \mu([\xi, \eta])$$
> 이며, $\alpha = \mu_0 \cdot g^{-1}dg$로부터 $\sigma = d\alpha$로 구성된다.

**결론**: "$\sigma$는 왜 저런 모양인가?"에 대한 완전한 답:

> **$\sigma$는 Poincaré군의 coadjoint 1-form $\alpha = \mu_0 \cdot g^{-1}dg$의 exterior derivative이다. KKS 정리에 의해 이 $\sigma = d\alpha$가 자동으로, 유일하게 symplectic (closed + non-degenerate) 구조를 정의한다.**

즉, massless 스핀 $s$ 입자의 phase space는 Poincaré 대칭으로부터 **군론적으로 유일하게** 결정된다.

---
