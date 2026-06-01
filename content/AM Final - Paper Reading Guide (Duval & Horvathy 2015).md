---
title: AM Final - Paper Reading Guide (Duval & Horvathy 2015)
date: "2026-05-31"
subject: physics
tags: [study, analytical_mechanics, final, symplectic, paper]
class: study
---

# 🗺️ 기말 논문 독해 가이드북
**논문**: C. Duval & P. A. Horváthy, *Phys. Rev. D* **91**, 045013 (2015)
**제목**: "Chiral Fermions as Classical Massless Spinning Particles"

> [!tip] 사용 방법
> 카페에서 논문 PDF를 열고 이 노트를 옆에 두고 섹션마다 참고하며 읽는다.
> **권장 독서 순서**: Appendix A → Sec. II → Sec. III → Sec. V.B → (여유 있으면) Appendix B

> [!info] 이 가이드의 철학
> 이 논문은 우리가 배운 symplectic geometry를 "실전 물리"에 적용한 논문이야.
> 낯선 개념들이 대거 등장하지만, 핵심 구조는 우리가 아는 것이야:
> **"2-form의 kernel이 운동이다."**

---

## 📋 문제 ↔ 논문 섹션 지도

| 문제 | 배점 | 논문 섹션 | 핵심 식 번호 |
|------|------|-----------|-------------|
| **문제 1** | 50pt | Appendix A + Sec. II + Sec. IV | (A1)–(A3), (2.1)–(2.8), (4.3) |
| **문제 2** | 50pt | Sec. II | (2.4)–(2.8) |
| **문제 3** | 100pt | Sec. III + Appendix B | (3.1)–(3.14) |
| **문제 4** | 100pt | Sec. V.B | (5.9)–(5.17) |

---

## 📖 카페 독서 플랜 (추정 총 2시간)

### ① Appendix A (p.10) — 15분 ⭐필수 먼저 읽기

**목적**: 논문 전체에서 쓰이는 "언어"를 이해하기 위한 기반.

이게 없으면 나머지를 읽어도 다 흘러가 버려.

**읽으면서 확인할 것**:
- (A1): $\omega_{\alpha\beta}\dot{\xi}^\beta = \partial_\alpha h$ 가 우리 강의의 Hamilton 방정식과 같은 식임을 확인
- (A2): $\sigma = \omega - dh \wedge dt$ — phase space의 $\omega$에 시간을 붙여 만든 2-form
- (A3): $\sigma(\dot{y}, \cdot) = 0$ — 이것이 운동의 정의다

**메모할 것**: "운동 = ker σ의 접선 곡선"이라는 프레임이 논문 전체를 관통한다.

---

### ② Sec. II (p.2) — 25분 ⭐문제 1, 2

**목적**: chiral fermion의 action에서 EOM을 symplectic 언어로 기술.

**읽으면서 확인할 것**:
- (2.3): Evolution space $V^7 = T(\mathbb{R}^3\setminus\{0\}) \times \mathbb{R}$ — phase space에 $t$ 붙인 것
- (2.4)–(2.7): $\sigma$, $\omega$, $\omega_0$, $h$의 명시적 정의 → **문제 2 답의 핵심**
- (2.8): $\det(\omega_{\alpha\beta}) = m^2 \neq 0$ → **문제 2의 non-degeneracy 결론**
- (2.1): 최종 EOM → **문제 1의 목표**

**⚠️ 논문의 한계**: 논문은 중간 계산 과정(6×6 행렬의 det 계산)을 생략했다. 시험에서는 이 과정을 직접 써야 한다. 아래 계산 가이드 참고.

---

### ③ Sec. III (p.2–5) — 50분 ⭐문제 3 (가장 길고 어렵다)

**목적**: 9차원 evolution space에서 6차원 space of motions로의 reduction.

**읽으면서 확인할 것**:
- (3.1)–(3.4): $V^9$의 두 가지 등가 기술 (null vectors vs. spin tensor)
- (3.5): $V^9$ 위의 2-form $\sigma$
- (3.6): 자유 EOM — **문제 3의 첫 번째 목표**
- (3.7)–(3.9): Z-shift의 정의와 작용 — reduction의 핵심 메커니즘
- (3.10)–(3.11): spin enslaving $s = s\hat{p}$ — gauge fixing
- (3.13): 3+1 분해 후의 Z-shift
- (3.14): $M^6$ 위의 symplectic form — **문제 3의 두 번째 목표 (reduction 결과)**
- (3.8): 좌표 표현 — **문제 3의 구체적 계산 재료**

**Fig. 1, 2를 꼭 보자**: 기하학적 그림이 추상적 개념을 직관적으로 설명해준다.

---

### ④ Sec. V.B (p.7–9) — 30분 ⭐문제 4

**목적**: 비최소 결합(non-minimal coupling)과 BMT 방정식.

**읽으면서 확인할 것**:
- (5.9): mass-square constraint $P_\mu P^\mu = -\frac{eg}{2}S\cdot F$ — 새로운 제약
- (5.10)–(5.11): 새로운 evolution space $\tilde{V}^9$
- (5.12): $\tilde{V}^9$ 위의 2-form
- (5.13): 수정된 EOM — **문제 4의 목표**
- (5.19): $g=2$, constant field 극한 → 단순화
- (5.20)–(5.22): 순수 자기장에서 나선운동 (직관 검증용)

---

### ⑤ (여유 있으면) Appendix B (p.10–11) — 20분

Poincaré군의 coadjoint orbit으로 모델을 유도하는 과정. 군론적으로 왜 이 phase space가 자연스럽게 나오는지 설명. 문제 3의 배경 이해에 도움.

---

## 📚 개념 사전

> [!note] 사전 활용법
> 논문 읽다가 모르는 개념 나오면 여기서 찾아. 각 개념은 "우리가 아는 것과의 연결"을 중심으로 설명했어.

---

### 🔵 Souriau Mechanics 프레임워크

**어느 정도 알면 되나**: 논문의 기본 언어. 구조 파악이 핵심.

우리는 Hamiltonian 역학을 배울 때 phase space $(q,p)$ 위에서 symplectic form $\omega$와 Hamiltonian $H$를 쓰고 EOM을 $\dot{q} = \partial H/\partial p$, $\dot{p} = -\partial H/\partial q$로 썼어.

Souriau는 이를 다음처럼 재공식화했어:

**Step 1**: Phase space에 시간 $t$를 붙여 **evolution space** $V = \text{phase space} \times \mathbb{R}$를 만든다.

**Step 2**: $V$ 위에 2-form을 정의:

$$
\sigma = \omega - dh \wedge dt
$$

**Step 3**: **EOM = $\ker\sigma$의 접선 곡선**, 즉:

$$
\sigma(\dot{y}, \cdot) = 0
$$

이게 Appendix A의 (A3)이야.

**왜 이게 좋냐**:
- Lagrangian/Hamiltonian 형식을 하나로 통일
- **퇴화 시스템** (constrained system, gauge theory 등)에도 자연스럽게 확장됨
- 대칭과 보존량의 관계가 기하학적으로 명확해짐

**우리 강의와의 연결**: 우리가 배운 Hamiltonian vector field $i_{X_H}\omega = dH$는 $\sigma(\dot{y},\cdot)=0$의 time-independent 버전이야.

---

### 🔵 Evolution Space $V^n$

**어느 정도 알면 되나**: $V^7$, $V^9$ 표기 볼 때마다 참고.

Souriau의 핵심 개념. Phase space에 시간 $t$를 한 차원 더 붙인 공간.

$$
V^7 = T(\mathbb{R}^3\setminus\{0\}) \times \mathbb{R} = \{(x, p, t)\}
$$

차원 세기: $(x_1,x_2,x_3) + (p_1,p_2,p_3) + t = 7$.

- **Space of motions** $M^{2n}$: Evolution space에서 $\ker\sigma$의 leaf들을 quotient한 것. 
- 물리적으로 관측 가능한 운동들의 공간 = 추상적 의미의 phase space.
- EOM의 해 하나 = $V$의 한 곡선 = $M$의 **한 점**.

$$
M^6 = V^7 / \ker\sigma
$$

---

### 🔵 Characteristic Leaf

**어느 정도 알면 되나**: ker $\sigma$의 적분다양체 = 하나의 "운동".

Closed 2-form $\sigma$의 rank가 일정하면, $\ker\sigma$는 매 점마다 같은 차원의 subspace를 정의해. 이 distribution이 Frobenius 정리에 의해 적분 가능하여 생기는 부분다양체가 **characteristic leaf**.

- 물리적 의미: 하나의 leaf = 하나의 "운동" (모든 gauge-equivalent trajectory의 묶음)
- $V^9$에서 $\ker\sigma$는 3차원 → leaf도 3차원 → $M^6 = V^9/\ker\sigma$

**우리 강의와의 연결**: 우리가 배운 Hamiltonian flow의 적분곡선과 같은 개념의 일반화야.

---

### 🔵 Poincaré Group과 그 구조

**어느 정도 알면 되나**: 특수상대론의 대칭군. 생성자 10개와 Casimir 불변량을 알면 충분.

특수상대론의 시공간 대칭 변환들의 군:

$$
\text{Poincaré} = \text{Lorentz} \ltimes \mathbb{R}^{3,1}
$$

**생성자 10개**:
- 3개: 공간 회전 ($J_i$)
- 3개: Lorentz 부스트 ($K_i$)
- 3개: 공간 평행이동 ($P_i$)
- 1개: 시간 평행이동 ($H$)

**Lie algebra 표기 (논문 방식)**:
- $\Lambda_{ij} = \epsilon_{ijk}\omega^k$: 무한소 회전 ($\omega \in \mathbb{R}^3$)
- $\Lambda_{i4} = \beta^i$: 무한소 부스트 ($\beta \in \mathbb{R}^3$)
- $\Gamma = (\gamma, \varepsilon)$: 공간/시간 평행이동

**Casimir 불변량**:
- $m^2 = -P_\mu P^\mu$: 질량의 제곱 (우리 논문에서는 0!)
- $W^2 = -W_\mu W^\mu$ (Pauli-Lubanski vector): $m^2 s(s+1)$ — 스핀을 인코딩

논문의 핵심 주장: chiral fermion의 space of motions는 **질량 0, 스핀 1/2 표현**에 해당하는 Poincaré군의 coadjoint orbit이다.

---

### 🔵 Coadjoint Orbit

**어느 정도 알면 되나**: 군론적으로 phase space가 자연스럽게 나오는 과정 이해.

Lie군 $G$의 원소 $g$가 Lie algebra 쌍대공간 $\mathfrak{g}^*$ 위에 coadjoint action으로 작용:

$$
\text{Ad}^*_g: \mathfrak{g}^* \to \mathfrak{g}^*, \quad \mu \mapsto \mu \circ \text{Ad}_{g^{-1}}
$$

특정 원소 $\mu_0 \in \mathfrak{g}^*$의 궤도:

$$
\mathcal{O}_{\mu_0} = \{\text{Ad}^*_g \mu_0 \mid g \in G\}
$$

**KKS (Kirillov-Kostant-Souriau) 정리**: Coadjoint orbit은 **자동으로** canonical symplectic structure를 가진다!

$$
\omega_{\text{KKS}}(X_\xi, X_\eta) = \mu([\xi, \eta])
$$

**왜 물리에 중요하냐**: 특정 질량과 스핀을 가진 입자의 classical phase space = Poincaré군의 coadjoint orbit. 이게 군론적으로 phase space를 구성하는 방법.

**우리 논문에서**: $M^6$은 Poincaré군의 coadjoint orbit → 자동으로 symplectic structure (3.14)를 가짐.

---

### 🔵 Berry Phase와 Berry Connection

**어느 정도 알면 되나**: 문제 1의 action에서 $a(p)$의 의미를 이해하는 수준.

**Berry phase (양자역학적 기원)**:
Hamiltonian이 외부 파라미터 $\lambda$에 천천히 의존할 때, 아디아바틱 과정을 거치면 파동함수는 동적 위상 외에 기하학적 위상 $\gamma$를 추가로 얻는다:

$$
|\psi(T)\rangle = e^{i\gamma} e^{-\frac{i}{\hbar}\int_0^T E_n dt}|\psi(0)\rangle
$$

**Berry connection (게이지 퍼텐셜)**:

$$
a_i(p) = -i\langle n(p)|\partial_{p_i}|n(p)\rangle
$$

**Berry curvature (게이지 장)**:

$$
\Theta_{ij} = \partial_i a_j - \partial_j a_i = -2\,\text{Im}\langle\partial_i n|\partial_j n\rangle
$$

**논문에서의 Berry monopole**:
Positive helicity Weyl fermion에서 p-space 위에 자기 독점자(monopole)가 존재:

$$
\Theta \equiv \nabla_p \times a = \frac{\hat{p}}{2|p|^2}
$$

이건 Dirac monopole의 momentum-space 버전이야. $\nabla_p \cdot \Theta = 0$ ($p \neq 0$에서).

**문제 1의 action에서**:
$$
S = \int \left[(p+eA)\cdot\frac{dx}{dt} - (|p|+e\phi) - a\cdot\frac{dp}{dt}\right]dt
$$
마지막 항 $-a\cdot\dot{p}$가 Berry connection의 기여야. 이걸 변분하면 anomalous velocity가 나온다.

---

### 🔵 Spin Tensor $S_{\mu\nu}$

**어느 정도 알면 되나**: 4D 텐서로 스핀을 기술하는 방법. 논문의 핵심 변수.

3차원 스핀 벡터 $\mathbf{s}$를 상대론적으로 일반화하면 반대칭 2-tensor $S_{\mu\nu} \in \mathfrak{o}(3,1)$이 됨.

**성분 관계** (3+1 분해):

$$
S_{ij} = \epsilon_{ijk}s^k \qquad (i,j,k = 1,2,3: \text{ 공간 성분})
$$

$$
S_{j4} = (\hat{p}\times s)_j \qquad (4: \text{ 시간 성분})
$$

**Enslaved 경우** ($s = s\hat{p}$):

$$
S_{j4} = (\hat{p}\times s\hat{p})_j = 0
$$

즉, enslaving하면 시간 성분이 사라지고 공간 성분만 남는다.

**제약 조건들** (논문 식 3.4):
- $P_\mu P^\mu = 0$: massless
- $S_{\mu\nu}P^\nu = 0$: 스핀이 운동량에 수직 (Tulczyjew-Dixon condition)
- $\frac{1}{2}S_{\mu\nu}S^{\mu\nu} = s^2$: 스핀 크기 $s = 1/2$ 고정

**자유도 세기**: $S_{\mu\nu}$는 4×4 반대칭 행렬이므로 6성분. 세 제약이 3개 조건을 주므로 실질적으로 3차원 자유도. 이게 논문에서 $V^9 = 6(\text{시공간}) + 3(\text{스핀})$인 이유야.

---

### 🔵 Null Vector / Lightlike Vector

**어느 정도 알면 되나**: Minkowski 내적이 0인 벡터. 기초만 알면 됨.

논문의 Minkowski metric 부호: $\eta = \text{diag}(-,-,-,+)$ (시간 성분이 양수).

벡터 $V^\mu$에 대해:
- **Timelike**: $V_\mu V^\mu > 0$
- **Spacelike**: $V_\mu V^\mu < 0$
- **Lightlike (Null)**: $V_\mu V^\mu = 0$

**논문에서**:
$P^\mu = (p, |p|)$ (massless particle의 4-운동량)이면:

$$
P_\mu P^\mu = -(p_1^2+p_2^2+p_3^2) + |p|^2 = 0 \quad \checkmark
$$

두 null vector $I$, $J$의 조건 $I_\mu J^\mu = -1$은 이들이 "complementary"하다는 것 (둘이 함께 null 2-plane을 span).

---

### 🔵 Z-shift (Wigner-Souriau Translation)

**어느 정도 알면 되나**: gauge 자유도처럼 이해. 같은 운동을 다르게 기술하는 방법.

$V^9$에서 같은 "운동"에 해당하는 다른 점들을 연결하는 변환:

$$
R^\mu \to R^\mu + Z^\mu, \qquad P^\mu \to P^\mu, \qquad S^{\mu\nu} \to S^{\mu\nu} + (P^\mu Z^\nu - P^\nu Z^\mu)
$$

단, $Z$는 $P$에 수직: $P_\mu Z^\mu = 0$.

**3+1 분해** (논문 식 3.13):

$$
r \to r + Z, \qquad t \to t + \hat{p}\cdot Z, \qquad p \to p
$$

$$
s \to s + p \times Z
$$

**Gauge analogy**:
- Z-shift = gauge 변환
- Spin enslaving $s = s\hat{p}$ = gauge fixing
- $M^6 = V^9/(\text{Z-shift})$ = gauge-fixed phase space

**핵심 아이디어**: 자유 입자의 경우, 적절한 Z를 선택하면 스핀을 $s = s\hat{p}$로 고정할 수 있다. 이 gauge fixing 후에 $(r, p)$ 좌표만으로 운동을 완전히 기술 가능.

---

### 🔵 Symplectic Reduction과 Moment Map

**어느 정도 알면 되나**: 문제 3의 핵심. "큰 phase space에서 작은 것으로" 가는 과정.

**Symplectic reduction 개요**:

대칭군 $G$가 symplectic manifold $(M, \omega)$에 Hamiltonian action으로 작용할 때:
1. **Moment map** $\mu: M \to \mathfrak{g}^*$: 각 대칭 생성자에 대응하는 보존량 묶음
2. **Reduction**: $\mu^{-1}(c)/G_c$가 더 작은 symplectic manifold를 형성

**우리 경우**:
- 큰 공간: $V^9$ (9차원)
- 대칭: Z-shift (3차원 군)
- 결과: $M^6 = V^9/\ker\sigma$ (6차원)
- Moment map 역할: spin enslaving 조건 $s = s\hat{p}$

**문제 3이 요구하는 것**: 좌표 $(r,t,p,q)$에서 이 reduction을 explicit하게 보여라. 구체적으로:
- 식 (3.8)에서 시작해서
- Z-shift (3.13)을 적용해서 $q$를 고정하고
- (3.14)의 $\omega_0$가 나오는 것을 확인

---

### 🔵 Faddeev-Jackiw Reduction

**어느 정도 알면 되나**: 이름과 용도만 알면 됨. 문제 풀이에서는 필요 없음.

$\det(\omega_{\alpha\beta}) = 0$이 되는 **퇴화점**에서 phase space의 차원이 줄어드는 것을 처리하는 방법.

Dirac의 constraint 방법과 유사하지만, first-order Lagrangian에서 직접 작동.

논문에서 $m = 1 + e\Theta\cdot B = 0$인 특수점에서만 필요. **정규 경우 ($m \neq 0$)를 다루는 문제에서는 무시해도 됨**.

---

### 🔵 BMT (Bargmann-Michel-Telegdi) 방정식

**어느 정도 알면 되나**: 문제 4의 결과물. 이름과 물리적 의미만 알면 됨.

1959년 Bargmann, Michel, Telegdi가 유도한 방정식으로, **질량 있는 상대론적 스핀 입자**가 전자기장 속에서 따르는 EOM:

$$
\frac{dp^\mu}{d\tau} = \frac{e}{m}F^{\mu\nu}p_\nu
$$

$$
\frac{dS^\mu}{d\tau} = \frac{eg}{2m}F^{\mu\nu}S_\nu + \frac{e(g-2)}{2m}(F^{\mu\nu}u_\nu)(S^\rho u_\rho)
$$

전자의 이상자기모멘트(anomalous magnetic moment)를 기술하는 데 핵심적으로 사용됨.

**논문의 문제 4**: 이것의 **질량 없는(massless) 버전**을 symplectic 방법으로 유도.

---

### 🔵 Gyromagnetic Ratio $g$

**어느 정도 알면 되나**: 자기모멘트와 스핀의 비례 상수. 값에 따른 물리가 다름.

$$
\mu_{\text{mag}} = g\frac{e}{2m}S
$$

| $g$ 값 | 물리적 의미 |
|--------|------------|
| $g=0$ | 최소 결합 (minimal coupling, Sec. V.A) |
| $g=1$ | 고전적 기대값 |
| $g=2$ | Dirac 방정식 예측 (전자의 경우) ← 핵심! |
| $g \neq 2$ | 이상 자기모멘트 (anomalous) |

논문에서 $g$는 비최소 결합의 강도를 조절하는 파라미터:
- $g=0$: anomalous velocity 있음, 이상한 Hall-type 운동
- $g=2$: anomalous velocity 소거 → 자기장에서 나선운동으로 단순화

---

### 🔵 Helicity / Chirality

**어느 정도 알면 되나**: chiral fermion이 무엇인지 이해하는 수준.

질량 없는 입자에서:

$$
h = \hat{p}\cdot\frac{\mathbf{S}}{|\mathbf{S}|}
$$

- $h = +1/2$: right-handed (positive helicity) = 스핀과 운동 방향이 같음
- $h = -1/2$: left-handed (negative helicity) = 스핀과 운동 방향이 반대

질량이 없으면 helicity는 Lorentz invariant → **chirality**.

**표준 모형에서**: 전자는 Dirac fermion = right-handed Weyl + left-handed Weyl의 합. 중성미자는 (표준 모형에서) 순수 left-handed Weyl fermion.

논문의 주제: **Positive helicity ($s=+1/2$)의 chiral Weyl fermion**의 고전적 기술.

**논문 조건**: $\hat{p}\cdot s = s$ (식 3.12) — 스핀 벡터를 $\hat{p}$ 방향으로 사영한 것이 $s = 1/2$.

---

### 🔵 Anomalous Velocity

**어느 정도 알면 되나**: EOM (2.1)에서 Berry curvature가 기여하는 추가 속도 항.

보통 free particle이라면 $\frac{dx}{dt} = \hat{p}$이어야 함. 그런데 (2.1)에서는:

$$
m\frac{dx}{dt} = \hat{p} + eE\times\Theta + (\Theta\cdot\hat{p})eB
$$

$\hat{p}$ 뒤에 오는 두 항이 **anomalous velocity** — Berry curvature $\Theta$에서 기인.

**물리적 의미**:
- $eE\times\Theta$: 전기장에 의한 횡방향 drift (Hall drift)
- $(\Theta\cdot\hat{p})eB$: 자기장에 의한 보정

이게 spin Hall effect, anomalous Hall effect 등 위상학적 물리 현상의 고전적 기원이야.

---

## 🔢 섹션별 핵심 계산 가이드

### 계산 1: $\omega_{\alpha\beta}$ 행렬과 det 계산 (문제 2)

좌표 순서: $\xi^\alpha = (x^1, x^2, x^3, p_1, p_2, p_3)$

**$\omega_0$의 성분**:

$$
\omega_0 = dp_i \wedge dx^i - \frac{s}{2|p|^3}\epsilon^{ijk}p_i\,dp_j\wedge dp_k
$$

첫 항에서: $(\omega_0)_{p_i x^j} = \delta_{ij}$, $(\omega_0)_{x^i p_j} = -\delta_{ij}$

둘째 항에서 (스핀 기여): $(\omega_0)_{p_j p_k} = -\frac{s}{|p|^3}\epsilon_{ijk}p^i$

**자기장 항**:

$$
\frac{e}{2}\epsilon_{ijk}B^i\,dx^j\wedge dx^k \Rightarrow (\omega)_{x^j x^k} = e\epsilon_{ijk}B^i
$$

**블록 행렬 구조** ($(x,p)$ 블록으로):

$$
\omega_{\alpha\beta} = \begin{pmatrix} eB_{ij} & -\delta_{ij} \\ \delta_{ij} & -\frac{s}{|p|^3}\epsilon_{ijk}p^k \end{pmatrix}
$$

여기서 $B_{ij} = \epsilon_{ijk}B^k$.

**det 계산**:

$\det(\omega_{\alpha\beta}) = \det(A - BD^{-1}C) \cdot \det(D)$ (Schur complement)를 쓰면

$$
\det(\omega_{\alpha\beta}) = (1 + e\Theta\cdot B)^2 = m^2
$$

---

### 계산 2: $V^9$에서 EOM 유도 (문제 3)

**2-form** (식 3.5):

$$
\sigma = -dP_\mu\wedge dR^\mu - \frac{1}{2s^2}dS_\lambda^\mu\wedge S_\rho^\mu dS_\lambda^\rho
$$

**ker 조건** $\sigma(\dot{X}, \cdot) = 0$, $\dot{X} = (\dot{R}^\mu, \dot{P}^\mu, \dot{S}^{\mu\nu})$:

$\delta R^\mu$ 방향: $-\dot{P}^\mu = 0 \Rightarrow \dot{P}^\mu = 0$

$\delta P^\mu$ 방향: $-\dot{R}^\mu$ 기여 + 스핀 기여 = 0

$\delta S^{\mu\nu}$ 방향: 스핀 term의 변분

**결과** (식 3.6):

$$
P_\mu\dot{R}^\mu = 0, \qquad \dot{P}^\mu = 0, \qquad \dot{S}^{\mu\nu} = P^\mu\dot{R}^\nu - P^\nu\dot{R}^\mu
$$

---

### 계산 3: Reduction 과정 (문제 3 두 번째 part)

**좌표 표현** (식 3.8):

$$
S_{ij} = \epsilon_{ijk}s^k, \qquad s = s(p|q| + q|p|)
$$

$$
S_{j4} = (p\times q)_j \cdot s = (\hat{p}\times s)_j
$$

**Z-shift (3+1 분해)** (식 3.13): $Z = (Z, \hat{p}\cdot Z)$이면

$$
r \to r+Z, \quad t \to t+\hat{p}\cdot Z, \quad p \to p, \quad s \to s + p\times Z
$$

**Gauge fixing**: $Z$를 선택해서 $S_{j4} = (\hat{p}\times s)_j = 0$ 만들기

$$
s = s\hat{p} \quad \Rightarrow \quad S_{j4} = (\hat{p}\times s\hat{p})_j = 0 \quad \checkmark
$$

이 후 $q$가 사라지고 $(r,t,p)$ 좌표만 남음.

**2-form 내려옴** (descent): $\sigma\big|_{V^9}$가 $M^6$ 위에서

$$
\omega = dp_i\wedge d\tilde{x}^i - \frac{s}{2|\tilde{p}|^3}\epsilon^{ijk}\tilde{p}_i\,d\tilde{p}_j\wedge d\tilde{p}_k
$$

이게 바로 (3.14)이자 (2.6)의 $\omega_0$!

---

### 계산 4: Non-minimal coupling EOM (문제 4)

**새로운 2-form** (식 5.12, $\tilde{V}^9$ 위):

$$
\sigma = -dP_\mu\wedge dR^\mu - \frac{1}{2s^2}dS_\lambda^\mu\wedge S_\rho^\lambda dS_\mu^\rho + \frac{1}{2}eF_{\mu\nu}dR^\mu\wedge dR^\nu
$$

Mass-shell constraint: $P_\mu P^\mu = -\frac{eg}{2}S\cdot F$

**ker 조건 + constraint 적용**:

$\delta R^\mu$: EM field term이 추가로 기여

$\delta P^\mu$: constraint를 differentiate → 새로운 항

**결과** (식 5.13): 복잡한 수식이지만 $g=0$이면 (5.4)로 환원됨을 확인.

---

## ⚠️ 표기법 정리 & 주의사항

| 표기 | 의미 | 주의사항 |
|------|------|---------|
| $\hat{p}$ | $p/\|p\|$ (단위벡터) | 4-vector $P^\mu$와 혼동 주의 |
| $\Theta$ | Berry curvature $= \hat{p}/(2\|p\|^2)$ | $\mathbf{B}$장이 아님! |
| $S\cdot F$ | $S^{\alpha\beta}F_{\alpha\beta}$ | trace형 축약 |
| $\sigma$ | Evolution space의 2-form | Phase space의 $\omega$와 다름 |
| $\omega$ | Phase space의 symplectic form | |
| $M^n$ | $n$차원 space of motions | $V^n$의 quotient |
| $V^n$ | $n$차원 evolution space | phase space + 시간 |
| $\ker\sigma$ | $\sigma$의 kernel = 운동 방향 | |
| $m$ | Effective mass $= 1+e\Theta\cdot B$ | 입자의 mass가 아님! |
| $s$ | Scalar spin $= 1/2$ | 3-vector $\mathbf{s}$와 구별 |
| $g$ | Gyromagnetic ratio | $g=2$ 중요 |

**Minkowski metric 부호**: $\eta = \text{diag}(-,-,-,+)$

내적: $P_\mu P^\mu = -(p_1^2+p_2^2+p_3^2) + P_4^2$

---

## 📌 문제별 핵심 체크리스트

### 문제 1 (50pt) ✅

- [ ] Action에서 $u_\alpha$를 읽어내기: $u = (p+eA, 0, -(|p|+e\phi))$
- [ ] $\omega_{\alpha\beta} = \partial_\alpha u_\beta - \partial_\beta u_\alpha$ 계산
- [ ] $\omega_{\alpha\beta}\dot{\xi}^\beta = \partial_\alpha h$ 풀어서 EOM (2.1) 유도
- [ ] **UV complete 버전**: "Souriau의 massless spinning particle model" (Sec. III)
- [ ] (보너스) Lorentz 대칭: 식 (4.3)이 답

### 문제 2 (50pt) ✅

- [ ] $\sigma = \omega - dh\wedge dt$, $\omega = \omega_0 + \frac{e}{2}\epsilon_{ijk}B^i dx^j\wedge dx^k$ 명시
- [ ] $\omega_{\alpha\beta}$를 6×6 행렬로 explicit하게 쓰기
- [ ] $\det(\omega_{\alpha\beta}) = (1+e\Theta\cdot B)^2 \neq 0$ 계산

### 문제 3 (100pt) ✅

- [ ] $V^9$의 2-form (3.5)에서 $\sigma(\dot{X},\cdot)=0$ 풀기 → EOM (3.6) 유도
- [ ] Z-shift (3.7)이 ker $\sigma$의 대칭임을 확인
- [ ] 좌표 표현 (3.8) 이해
- [ ] Enslaving $s=s\hat{p}$ 조건이 Z-shift gauge fixing임을 논증
- [ ] $V^9 \to M^6$: 2-form (3.5)가 (3.14)로 내려옴을 보이기

### 문제 4 (100pt) ✅

- [ ] $\tilde{V}^9$ 위에서 mass-shell constraint $P_\mu P^\mu = -\frac{eg}{2}S\cdot F$ 포함
- [ ] $\sigma$의 kernel → EOM (5.13) 유도
- [ ] $g=0$이면 (5.4)로 환원됨 확인
- [ ] **$S^2$ 보존**: Lagrangian에서 스핀 변수 EOM → $\frac{d}{d\tau}(S_{\mu\nu}S^{\mu\nu}) = 0$
- [ ] **BMT 극한**: weak-field + $g=2$ 극한에서 BMT 방정식으로 환원

---

*작성: Glia, 2026-05-31*
*논문: Duval & Horváthy, Phys. Rev. D 91, 045013 (2015)*
*[[AM Finalterm problem]] 참조*
