---
title: Journal reading - Coherent X-rays reveal anomalous molecular diffusion and cage effects in crowded protein solutions
authors: Anita Girelli, Maddalena Bin, Mariia Filianina, et al. (Fivos Perakis, Christian Gutt, Frank Schreiber 외)
DOI: "[DOI](https://doi.org/10.1038/s41467-025-66972-6)"
date read: 2026-06-21
date published: 2025-11-29
subject: biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Coherent X-rays reveal anomalous molecular diffusion and cage effects in crowded protein solutions

## Overview

붐비는(crowded) 단백질 용액 속에서 단백질의 분자 단위 운동이 어떻게 일어나는지를, **MHz-XPCS** (Megahertz X-ray Photon Correlation Spectroscopy)를 European XFEL에서 사용하여 마이크로초 시간 스케일로 직접 측정한 연구. 모델 단백질로 **ferritin**을 사용했다.

핵심 결과: 단백질 농도가 높아질수록 단순 Brownian motion에서 **anomalous diffusion**으로 연속적 전이가 일어나며, 이는 $g_2(q,t)$의 non-exponential decay로 나타난다. 이 행동은 short-time과 long-time diffusion 사이의 **cage-trapping** (cage effect)으로 해석된다. **δγ-theory** (hydrodynamically interacting colloidal spheres)로 실험 데이터를 정량적으로 재현한다.

## Link to PDF and DOI

- DOI: https://doi.org/10.1038/s41467-025-66972-6
- Nature Communications (2025) 16:10814
- Local PDF: [[Coherent_X-rays_reveal_anomalous_molecular_diffusion_and_cage_effects_in_crowded_protein_solutions.pdf]]

## 주요 내용 요약

- **연구 질문**: crowded 환경에서 hydrodynamic interaction과 direct interaction이 long-time protein diffusion에 어떻게 영향을 주는가? cage effect의 시간/길이 스케일 signature는 무엇인가?
- **방법론**: EuXFEL의 MID instrument에서 MHz-XPCS로 ferritin 용액(c = 9–730 mg/ml)을 측정. AGIPD 검출기로 4.5 MHz intra-train rate. SAXS geometry로 $I(q)$, $S(q)$ 동시 측정.
- **Interaction time** $\tau_i \approx R_h^2/(6 D_s)$: short-time과 long-time diffusion을 가르는 기준. ferritin in water는 $\tau_i \approx 0.3\,\mu s$, crowded 조건에서는 약 12.6배 증가.
- **$g_2(q,t)$ 분석**: 농도가 높아지면 stretched exponential (KWW exponent $\alpha < 1$)로 변화 → heterogeneous dynamics. 가장 높은 농도(730 mg/ml)에서는 double exponential decay가 뚜렷.
- **De Gennes narrowing**: $D(q) = \Gamma(q)/q^2$가 $q = q_0$ (structure factor peak)에서 최소 → 이웃 단백질에 의한 collective motion 둔화.
- **Hydrodynamic function** $H(q) = \frac{D(q)}{D_0}S(q)$: many-body hydrodynamic interaction의 signature. δγ-theory로 모델링.
- **Cage effect**: double exponential의 amplitude 분석에서 $A_0 = 89\%$의 단백질이 cage 형성에 참여, 평균 변위 $\delta = 1.0$ nm (단백질 반지름의 일부) → 갇힌 상태에서 rattling.
- **결론**: long-time diffusion이 hydrodynamic + direct interaction 모두에 지배됨. cage effect가 crowded 환경에서의 reduced mobility를 분자 수준에서 설명.

### Hydrodynamic interaction vs. Direct interaction (핵심 구분)

이 논문 논리의 뼈대가 되는 두 상호작용의 구분:

- **Hydrodynamic interaction**: 단백질이 움직이며 용매(물)에 만든 **flow field**를 매개로 이웃에게 전달되는 간접적 영향. 분자끼리 닿지 않아도 작용하며 **장거리(long-range)**. (수영장에서 한 사람의 물결이 멀리 떠 있는 사람을 출렁이게 하는 것과 같음)
- **Direct interaction**: 용매를 거치지 않고 분자 표면끼리 직접 느끼는 힘. **electrostatic**(표면 전하 반발/인력), **van der Waals** 같은 nonspecific attraction, **excluded volume**(입체 배제, cage effect의 핵심 원인). 보통 **단거리(short-range)**.

**왜 중요한가 — 두 상호작용의 분리(disentangle) 전략:**

| | Short-time ($t \ll \tau_i$) | Long-time ($t \gg \tau_i$) |
|---|---|---|
| 지배 요인 | Hydrodynamic만 | Hydrodynamic + Direct 둘 다 |
| 이론 | δγ-theory로 예측 가능 | 이론적 예측 없음 (research gap) |

Short-time에는 hydrodynamic만 작동하므로 δγ-theory로 모델링하면 hydrodynamic 기여를 따로 떼어낼 수 있고, long-time에서 추가로 나타나는 둔화는 direct interaction 탓으로 귀속시킬 수 있다. Fig. 6c에서 $D^{short}(q)$와 $D^{long}(q)$가 **같은 $q$-의존성(같은 lineshape)을 갖고 scaling factor만 다르다**는 발견이 이 전략을 뒷받침 → hydrodynamic force는 두 diffusion에 똑같이 작용하고, direct interaction은 $q$에 무관하게 long-time diffusion을 전체적으로 끌어내리기만 한다.

> [!note] crowding effect의 주체
> 이 실험에서 crowding을 만드는 입자와 관찰 대상은 **모두 ferritin** (monodisperse 단일 성분 시스템). 즉 "나 같은 이웃에게 둘러싸여 갇히는" 상황으로, cage를 만드는 주체도 갇히는 주체도 ferritin이다. 단, 이는 의도적 단순화이며 실제 세포질의 crowding은 다양한 분자(다른 단백질, polymer, 다당류 등)에 의한 것. 논문 Future work에서 크기가 다른 crowder를 도입해 polydispersity 효과를 보겠다고 언급한다.


### SAXS란 뭔가?
개념 노트 참고 [[SAXS (Small-Angle X-ray Scattering)]]

### XPCS(X-ray Photon Correlation Spectroscopy)란 뭔가?
![[Pasted image 20260622094029.png]]
SAXS는 정적인 구조($S(q)$, $P(r)$)를 본다. 같은 빔으로 시간 상관 $g_2(q,t)$를 보면 dynamics가 나오고, 그게 **XPCS**다. 두 기법이 같은 $I(q)$ 측정에서 출발한다는 점이 자연스러운 다리.

또한 구조생물 SAXS는 $S(q)$를 **제거 대상**으로, ferritin 논문은 $S(q)$를 **측정 목표**로 본다는 대비도 강조할 만하다.

#### XPCS의 측정 원리 (상세)

**1. Speckle를 본다.** Coherent X-ray를 쓰면 분자들이 산란한 빛이 서로 간섭해 검출기에 **speckle pattern**(얼룩 무늬)을 만든다. 이 speckle는 그 순간 분자 배치의 지문. SAXS에서 평균으로 뭉개지던 위상 합 $\sum_j e^{-i\mathbf{q}\cdot\mathbf{R}_j}$이, coherent 빔에서는 평균되지 않고 구체적 무늬로 살아남는다. 분자가 diffusion하면 배치가 바뀌고 speckle도 깜빡인다 → 그 변화 속도가 dynamics.


**2. $g_2(q,t)$로 정량화.** Speckle가 얼마나 빨리 변하는가 = 시간 차 $t$만큼 떨어진 두 순간의 무늬가 얼마나 닮았는가. 이것이 **intensity autocorrelation function**:

$$
g_2(q,t) = \frac{\langle I(q,t')\, I(q,t'+t)\rangle_{t'}}{\langle I(q,t')\rangle^2}
\tag{1}
$$

- $t=0$: 자기 자신과 완벽히 닮음 → $g_2$ 최대
- $t \to \infty$: 무늬가 완전히 갈아엎어짐 → $g_2 \to 1$ (baseline)
- 중간: 닮음이 사라지는 **decay 곡선**, 그 시간 상수가 dynamics의 핵심. 

**3. Siegert relation으로 field correlation과 연결.** $g_2$는 강도(intensity)의 상관이지만, 물리적으로 원하는 건 **intermediate scattering function** $f(q,t)$ (field correlation; 밀도 요동이 시간 $t$ 동안 얼마나 살아남는가). 둘을 잇는 것이 **Siegert relation**:

$$
g_2(q,t) = 1 + \beta(q)\,|f(q,t)|^2
\tag{2}
$$

$\beta(q)$는 **speckle contrast** (0~1, 빔의 가간섭성과 측정 기하로 결정). 논문 식 (6)이 이것. 이 덕분에 측정 가능한 $g_2$에서 이론과 연결되는 $f(q,t)$를 추출한다.

**4. $f(q,t)$에서 $D$와 MSD를 읽는다.** 단순 Brownian diffusion이면 단일 지수 감소:

$$
f(q,t) = \exp[-\Gamma(q)\, t], \qquad \Gamma(q) = D q^2
\tag{3}
$$

$\ln f(q,t)$가 시간에 대해 직선이고 기울기 $\Gamma(q)$를 $q^2$로 나누면 $D$. 논문 Fig. 6에서 $\ln[f(q,t)]$의 직선성을 따진 이유 — 직선에서 벗어나면 단순 diffusion이 아니라는 신호. 더 일반적으로 $f(q,t)$의 로그가 **MSD**에 비례한다:

$$
f(q,t) = \exp\!\left[-\frac{1}{6}q^2 \langle \Delta r^2(t)\rangle\right]
\tag{4}
$$

**5. 왜 MHz-XPCS (XFEL)인가.** 단백질(수 nm)의 interaction time $\tau_i$가 마이크로초 수준 → 마이크로초보다 빠른 간격으로 연속 촬영해야 speckle 깜빡임을 잡는다. 일반 synchrotron은 그만큼 빠른 연속 펄스를 못 준다. EuXFEL은 train 안에서 4.5 MHz(222 ns 간격)로 펄스를 쏘므로 frame-by-frame으로 추적 가능 → "**MHz**-XPCS". 대신 강한 빔이 시료를 태우므로(radiation damage) "correlation before aggregation" 전략과 beam-induced heating 보정이 필요.

#### 식 (1) 항별 분해 — stretched exponential fit

논문의 식 (1)은 앞서 본 Siegert relation + 지수 감소를 합친 **실전용 fitting 함수**다:

$$
g_2(q,t) = 1 + \beta(q)\exp\!\left[-2(\tilde{\Gamma}(q)\,t)^\alpha\right]
\tag{5}
$$

각 조각의 의미:

- **$1 +$** : Siegert relation의 baseline. $t\to\infty$에서 무늬가 완전히 무상관이 되면 $g_2 \to 1$.
- **$\beta(q)$** : speckle contrast. $t=0$에서 곡선의 높이(0~1). 빔 가간섭성과 측정 기하로 정해지는 상수.
- **$\exp[-2(\tilde\Gamma t)^\alpha]$** : decay 부분, $|f(q,t)|^2$에 해당.
  - **$-2$의 $2$** : Siegert relation의 제곱($|f|^2$)에서 나온 것. $f \sim e^{-\Gamma t}$인데 $g_2$엔 $|f|^2 = e^{-2\Gamma t}$로 들어간다.

##### $\tilde\Gamma(q)$ — decorrelation rate (핵심)

$\tilde\Gamma$는 **decorrelation rate**(탈상관 속도), 차원은 **시간의 역수**(1/s, 1/μs). speckle 무늬가 자기 자신과의 닮음을 **잃어가는 속도**다.

- $\Gamma$ 크다 → 무늬가 빨리 갈아엎어짐 → 빠른 diffusion
- $\Gamma$ 작다 → 무늬늬가 천천히 변함 → 느린 diffusion
특성 시간 $\tau$와는 역수 관계: $\tau \sim 1/\Gamma$. "얼마나 오래 닮아있나"가 $\tau$, "얼마나 빨리 안 닮아지나"가 $\Gamma$.

**왜 핵심인가 — $D$로 가는 통로**: 단순 Brownian이면 $\Gamma(q) = D q^2$. 따라서

$$
g_2(q,t)\ \text{측정} \;\rightarrow\; \text{fit으로}\ \tilde\Gamma(q)\ \text{추출} \;\rightarrow\; D(q) = \frac{\Gamma(q)}{q^2}
\tag{6}
$$

논문 Fig. 4가 $\Gamma(q)$를 그리고 "$\Gamma(q) \propto q^2$ 직선"과 비교한 게 이것. 직선에서 벗어나면(shaded) anomalous 신호. 이후 $D(q) = \Gamma(q)/q^2$로 넘어가 De Gennes narrowing을 봤다. **$\Gamma$는 측정량($g_2$ 곡선 모양)에서 물리량($D$)으로 건너가는 다리**.

##### $\alpha$ — KWW exponent (이 논문의 주인공)

**Kohlrausch–Williams–Watts exponent** (stretched exponential).

- $\alpha = 1$ : 단순 지수 감소($e^{-2\Gamma t}$). 모든 분자가 동일한 속도로 decorrelate하는 **균질(homogeneous)** Brownian diffusion.
- $\alpha < 1$ : **stretched exponential**(늘어진 지수). 단일한 $\Gamma$ 하나로 안 되고 **여러 시간 스케일이 섞임** → **heterogeneous dynamics**. cage에 갇힌 정도가 분자마다 제각각.

논문은 농도를 높일수록 $\alpha$가 1에서 점점 작아지는 걸 보였고($\alpha<1$), 그게 crowding이 dynamics를 불균질하게 만든다는 증거.

> [!note] $\tilde\Gamma$에 물결(tilde)이 붙은 이유
> 논문은 $\tilde\Gamma$(fit에서 직접 나오는 raw rate)와 $\Gamma$(평균 decorrelation rate)를 구분한다. stretched exponential($\alpha\neq1$)에서는 "대표 속도"를 어떻게 정의하느냐가 애매해진다. 그래서 감마함수 $\Gamma_f$로 보정한 **평균** rate $\Gamma(q) = \tilde\Gamma(q)\,\alpha/\Gamma_f(1/\alpha)$를 따로 정의. ($\Gamma_f$는 감마함수 — 기호가 겹치지만 decorrelation rate $\Gamma$과 다른 것!) $\alpha=1$이면 $\tilde\Gamma = \Gamma$로 일치.

#### Brownian이면 왜 $\Gamma(q)=Dq^2$인가 / $g_2$로 anomalous를 보는 원리

출발점은 $f(q,t)$ 안에 MSD가 통째로 들어가는 식 (4):

$$
f(q,t) = \exp\!\left[-\frac{1}{6}q^2 \langle \Delta r^2(t)\rangle\right]
\tag{4}
$$

**(1) Brownian → $\Gamma = Dq^2$.** Brownian(정상 diffusion)의 정의가 MSD가 시간에 선형:
$$
\langle \Delta r^2(t)\rangle = 6Dt \quad (\text{3차원})
\tag{7}
$$
(6 = 3차원에서 축당 $2Dt$×3방향. 식 (4)의 $1/6$과 상쇄.) 대입하면
$$
f(q,t) = \exp\!\left[-\tfrac{1}{6}q^2 \cdot 6Dt\right] = \exp[-Dq^2 t]
\tag{8}
$$
단일 지수 $f = \exp[-\Gamma t]$와 비교하면 $\Gamma(q) = Dq^2$. **즉 $\Gamma \propto q^2$는 "MSD가 시간에 선형"이라는 사실의 직접 번역.** 직관: $q$가 크다(작은 스케일) → 짧은 거리만 움직여도 speckle가 갈아엎어짐 → 빠른 decorrelation. 그 의존성이 정확히 $q^2$인 이유가 MSD의 선형성.

**(2) Anomalous를 보는 원리.** Anomalous의 정의는 MSD가 비선형: $\langle \Delta r^2(t)\rangle = 6 D_\alpha t^{\alpha_{\text{MSD}}}$ ($\alpha_{\text{MSD}}\neq1$; <1 subdiffusion, >1 superdiffusion). 똑같이 식 (4)에 대입:
$$
f(q,t) = \exp\!\left[-D_\alpha q^2\, t^{\alpha_{\text{MSD}}}\right]
\tag{9}
$$
시간 지수가 1이 아닌 $\alpha_{\text{MSD}}$ → **바로 stretched exponential**. 즉:
$$
\text{MSD} \sim t^{\alpha_{\text{MSD}}} \;\Longrightarrow\; f(q,t)\ \text{비지수적} \;\Longrightarrow\; g_2 = 1+\beta|f|^2\ \text{stretched}
\tag{10}
$$
**MSD의 비선형성이 $f$의 비지수성으로, 그리고 $g_2$ 곡선의 모양으로 직접 번역**된다. 이게 "시뮬레이션(MSD) ↔ 실험($g_2$)" 다리의 수학적 근거. 논문 Fig. 6이 $\ln[f(q,t)]$의 직선성을 따진 이유 — $\ln f = -D_\alpha q^2 t^{\alpha_{\text{MSD}}}$이니 지수가 1이면 직선, 아니면 휘다.

#### KWW exponent와 MSD exponent의 관계

둘이 **일반적으로 같지 않다.** 두 종류의 "anomalous"가 있기 때문.

- **경우 A — 단일 입자의 진짜 anomalous diffusion**: MSD 자체가 $t^{\alpha_{\text{MSD}}}$를 따름. 이때 $\alpha_{\text{KWW}} = \alpha_{\text{MSD}}$, stretching이 MSD 비선형성에서 직접 나온다. (SBS/polymer의 monomer subdiffusion이 여기)
- **경우 B — 여러 입자의 dynamic heterogeneity**: 각 입자는 정상 diffusion($\Gamma_i \propto q^2$, 선형 MSD)을 하는데 **입자마다 $\Gamma_i$가 다름**. 측정 $f$는 여러 단일 지수의 합:
$$
f(q,t) = \int P(\Gamma)\, e^{-\Gamma t}\, d\Gamma
\tag{11}
$$
서로 다른 감쇠율의 지수함수를 더하면 합이 stretched exponential 모양으로 나타난다. 이때 $\alpha_{\text{KWW}}$는 **$\Gamma$ 분포의 폭**을 반영할 뿐, 개별 입자의 MSD 지수와는 무관.

> [!important] 이 논문은 경우 B
> ferritin 논문은 $\alpha<1$을 "heterogeneous protein motion"으로 해석하고, 결국 stretched를 버리고 **double exponential**($\Gamma_1$ 빠름 + $\Gamma_2$ 느림, 두 개의 정상 diffusion 성분)로 갈아탄다. 이건 "$\Gamma$ 분포"의 가장 단순한 이산 버전(두 봉우리). 즉 이 논문의 $\alpha_{\text{KWW}}$는 **short-time과 long-time diffusion이 얼마나 분리됐는가의 지표**이지, single-particle MSD exponent가 아니다.

| | 경우 A (진짜 anomalous) | 경우 B (heterogeneity) |
|---|---|---|
| 개별 입자 MSD | $\sim t^{\alpha_{\text{MSD}}}$, 비선형 | $\sim t$, 선형 |
| stretching 원인 | MSD 비선형성 | $\Gamma$ 분포의 폭 |
| $\alpha_{\text{KWW}}$의 의미 | $=\alpha_{\text{MSD}}$ | 분포 폭 (MSD 지수와 무관) |
| 이 논문 | ✗ | ✓ |

발표 대조점: SBS/polymer의 anomaly는 주로 경우 A(connectivity가 만드는 진짜 subdiffusion), 이 논문은 경우 B(crowding이 만드는 heterogeneity). 둘 다 "$\alpha<1$, anomalous"라 불리지만 물리적 기원이 다르다.

> [!warning] 흔한 혼동
> "$\alpha_{\text{KWW}} < 1$이니까 subdiffusion"이라고 바로 단정하면 안 된다. 경우 B에서는 개별 입자가 멀쌓히 정상 diffusion을 해도 $\alpha_{\text{KWW}}<1$이 나온다. KWW는 "MSD 지수"가 아니라 "decay가 단일 지수에서 벗어난 정도"일 뿐.

#### $f(q,t)$의 'field'는 무엇이며 어떻게 MSD가 들어가는가

**field = 산란된 X-ray의 전기장(scattered field amplitude $E(q,t)$).** 우리가 측정하는 건 강도 $I = |E|^2$이고 $g_2$는 그 **강도**의 상관. $f(q,t)$는 한 단계 더 근본인 **field 자체**의 상관($g_1$):
$$
f(q,t) = \frac{\langle E^*(q,0)\, E(q,t)\rangle}{\langle |E(q,0)|^2\rangle}
\tag{12}
$$
핵심: 이 field가 **입자 위치의 위상 합**으로 만들어진다 — $E(q,t) \propto \sum_j e^{-i\mathbf{q}\cdot\mathbf{R}_j(t)}$. field의 위상에 위치가 새겨있으므로, "field가 시간에 얼마나 변하나" = "입자들이 얼마나 움직였나".

**MSD가 들어가는 3단계** (self 항 $j=k$만, single-particle $f_s$):
$$
f_s(q,t) = \left\langle e^{-i\mathbf{q}\cdot[\mathbf{R}_j(t)-\mathbf{R}_j(0)]} \right\rangle = \left\langle e^{-i\mathbf{q}\cdot\Delta\mathbf{r}(t)} \right\rangle
\tag{13}
$$
지수 안에 변위 $\Delta\mathbf{r}(t)$가 들어왔다. **Gaussian 가정**(변위가 Gaussian 분포)으로 characteristic function 항등식 $\langle e^{-ix}\rangle = e^{-\langle x^2\rangle/2}$을 쓰고, 등방성($\langle(\mathbf{q}\cdot\Delta\mathbf{r})^2\rangle = q^2\langle\Delta r^2\rangle/3$)을 적용하면:
$$
f_s(q,t) = \exp\!\left[-\frac{1}{6}q^2 \langle \Delta r^2(t)\rangle\right]
\tag{14}
$$
경로 요약: **field 위상에 위치 → 시간 상관이 변위로 → Gaussian 평균이 변위 제곱(=MSD)을 지수로.** $q^2$가 붙는 것도 변위가 위상에 $\mathbf{q}\cdot\Delta\mathbf{r}$로 들어갔다 제곱되면서 나온 것 (→ (1)의 $\Gamma\propto q^2$와 같은 뿌리). 이 도구가 [[Moment Generating Function]] 노트의 characteristic function.

> [!warning] Gaussian 가정의 한계
> "$\ln f = -q^2\langle\Delta r^2\rangle/6$" 관계는 변위가 Gaussian일 때만 정확. cage에서 탈출하는 hopping 처럼 변위 분포가 non-Gaussian이면(non-Gaussian parameter $\neq0$) $f$에 고차 모멘트(kurtosis 등)도 섞인다. ferritin의 cage 영역이 엄밀히 이 보정이 필요한 구간 — 그래서 double exponential 같은 더 정교한 모델로 간 것.



### δγ-theory란 무엇인가

**한 줄 정의**: 농축된 colloid 현탁액에서 입자들 사이의 **many-body hydrodynamic interaction**을 계산하는 이론. Beenakker & Mazur (1980년대, ref. 42, 43)가 개발. 목표는 hydrodynamic function $H(q)$를 structure factor $S(q)$로부터 이론적으로 예측하는 것.

**풀려는 문제 — many-body 얽힘**: 입자 A가 만든 흐름이 B를 밀고, B가 다시 흐름을 만들어 C를 밀고, C의 흐름이 다시 A로 되돌아오고... 농축되면 모든 입자가 용매를 통해 동시에 얽힌다. 이 무한 연쇄를 정면으로 더하면 발산하는 악명 높은 문제.

**$\delta\gamma$의 의미 — 요동에 대한 전개**:
- **$\gamma$**: 평균장(mean-field) 수준의 hydrodynamic 응답 커널 (흐름장이 어떻게 전파되는가의 기본항).
- **$\delta$**: 그 위에 얹히는 **요동(fluctuation) 보정**. 입자 배치가 균일하지 않고 흔들리는 정도, 즉 $\delta\gamma$ = "$\gamma$의 요동분".

즉 직역하면 "hydrodynamic 응답 커널의 요동을 다루는 이론". 정면으로 풀면 발산하는 many-body 합을 요동 차수별로 재배열(resummation)해 **수렴하는 형태로 만든다** (ref. 42 제목의 "resummation of many-body hydrodynamic interactions").

**출력 — $S(q)$를 넣으면 $H(q)$가 나온다**: 논문 Methods 식 (14)가 그 계산식. 입력은 오직 $S(q)$이고, 그 배치가 만드는 집단적 hydrodynamic 흐름의 효과가 적분으로 나온다.

> [!important] 핵심 제약 — short-time limit에서만 성립
> δγ-theory는 hydrodynamic interaction만 다루고 direct interaction(전기적 반발, excluded volume 등)은 안 들어간다. 그래서 short-time limit에서만 엄밀. 이게 "short = hydrodynamic만, long = hydrodynamic + direct" 구분과 맞물린다.

**이 논문에서의 역할**: "순수 hydrodynamic만 있었다면 이래야 한다"는 **기준선(baseline)**. 실험 $D(q)S(q)/D_0$에 **scaling factor**를 곱해 맞추는데, lineshape($q$-의존성)는 δγ가 정확히 맞히고 전체 크기만 안 맞아서, 그 scaling이 곳 direct interaction의 기여를 정량화.

> [!note] 왜 colloid 이론이 단백질에 통하나
> δγ-theory는 원래 단단한 구형 colloid용. ferritin이 거의 완벽한 구형(24 subunit nanocage)이라 colloid처럼 다룰 수 있다는 게 근거. "$I(q)=P(q)S(q)$ 분리가 구형이라 정확히 성립"과 같은 맥락 — ferritin의 구형성이 SAXS 분석과 δγ 모델링 양쪽을 정당화.

### Short / Long diffusion 분리의 논리 사슬 (4~6페이지)

핵심: **측정한 건 $g_2$ 하나인데 어떻게 short/long 두 성분을 분리했는가**. "아는 것(hydrodynamic)을 빼서 모르는 것(direct/long)을 드러낸다"는 빼기의 논리.

**1단계 (4p) — 단순 Brownian이 깨진다**: stretched fit에서 $\Gamma(q)$ → $D(q)=\Gamma(q)/q^2$. 단순 Brownian이면 $q$-무관 상수여야 하는데, 실제는 $q_0$에서 **최소** (De Gennes narrowing). 단순 diffusion이 아니라는 첫 신호 (단, 아직 short/long 분리의 직접 증거는 아니고 collective dynamics의 $q$-의존성일 뿐).

**2단계 (4~5p) — $H(q)$ 절편이 너무 가파르게 떨어진다 (첫 핵심 증거)**: 큰 $q$ 극한에서 $H(q\to\infty) = D_s/D_0$ (self-diffusion 척도). 이걸 $\phi_h$에 대해 그렸더니(Fig. 5b):
- 순수 **short-time 이론** (식 4, $D_s^{short}/D_0 = 1 - 1.73\phi_h + 0.88\phi_h^2$) 예측선보다
- 실측값이 **훨씬 더 가파르게** 떨어짐

이 **초과 둔화(excess slowdown)** 가 long-time 성분의 존재 증거. long-time 모델(식 5)로 정량화:
$$
\frac{D_s^{long}}{D_0} = \frac{D_s^{short}}{D_0}\cdot\frac{D_s^{direct}}{D_0}, \qquad \frac{D_s^{direct}}{D_0} = \frac{1}{1+2\phi_h\chi}
\tag{15}
$$
$\chi$ = pair-correlation의 contact value (hard-sphere 근사, excluded volume). 이 long-time 모델이 측정값을 훨씬 잘 맞춤 → **$D_s/D_0$의 가파른 감소는 long-time 성분(direct interaction이 만듦) 때문**.

**3단계 (6p) — $g_2$를 직접 두 개로 쪼개다**: $\ln[f(q,t)]$를 그리면 저농도는 직선, 고농도(730 mg/ml)는 **5 μs 이후 명확히 다른 기울기** → 두 시간 스케일 공존. double exponential(식 7)로 fit:
$$
g_2(q,t) = 1 + \beta(q)\{[1-A(q)]e^{-\Gamma_1 t} + A(q)e^{-\Gamma_2 t}\}^2
\tag{16}
$$
$\Gamma_1$(빠름) → $D^{short}(q)$, $\Gamma_2$(느림) → $D^{long}(q)$.

**4단계 — 두 성분이 진짜 short/long인지 검증** (수학적 인공물이 아닌지):
- **검증 A — aggregate 가설 배제**: 느린 성분이 응집체 때문이라면 단백질보다 11배 큰 입자가 있어야 하고, $S(q)$ 낮은 $q$에서 peak이 보여야 하는데 — 안 보임. 응집체 아님.
- **검증 B — interaction time 일치**: $D^{short}$에서 $\tau_i = R_h^2/(6D_s^{short}) = 3.77$ μs 계산 → 이게 두 지수함수의 **cross-over 시간과 일치**. interaction time은 정의상 short/long의 경계이므로, 이 일치가 "진짜 short/long"이라는 강력한 물증.

**5단계 — 마지막 못: 두 성분이 같은 $q$-모양**: $D^{short}(q)$와 $D^{long}(q)$가 lineshape 동일, scaling factor만 다름 (Fig. 6c, 비율 0.09). → hydrodynamic force는 두 diffusion에 **똑같이** 작용(같은 $q$-모양), direct interaction은 $q$-무관하게 long-time만 **전체적으로 끌어내림**(scaling 차이).

**전체 사슬 요약**:
$$
\text{De Gennes (단순 X)} \to H(q)\ \text{절편 과도 감소 (long 존재)} \to \text{double exp 분해} \to \tau_i\ \text{일치 (진짜 short/long)} \to \text{같은 q-모양 (HI 공통, direct는 long만)}
\tag{17}
$$

> [!note] 발표 팁
> 이 5단계를 그대로 슬라이드 흐름으로. 특히 4단계(aggregate 배제 + $\tau_i$ 일치)는 "그냥 fit한 게 아니라 물리적으로 검증했다"는 점에서 청중 질문을 미리 막아주는 부분.


### Ferritin은 무슨 단백질인가

![[Pasted image 20260621213028.png]]

이미지 출처: https://www.authorea.com/doi/full/10.22541/au.174660859.91442623/v1

Subunit 24개가 합쳐진, 10nm order 크기의 속이 빈 공모양.
안쪽 cavity에 철 원자를 넣어서 운반한다. 


### Ferritin이 아니었으면 이런 실험 기법을 쓰지 못 한다

#### 핵심: 철의 역할은 scattering contrast

X-ray는 **전자 밀도(electron density)**와 상호작용한다. 산란 강도는 단백질과 용매 사이의 **electron density 차이(scattering contrast $\Delta\rho$)의 제곱**에 비례:

$$
I(q) \propto c\,\Delta\rho^2\,P(q)\,S(q)
$$

- **철(Fe, $Z=26$)**은 전자가 많아 X-ray를 강하게 산란한다. Ferritin은 속이 빈 nanocage 안에 **iron-rich core**를 품어, 이 core가 주변 물보다 electron density가 압도적으로 높다.
- 증거: dilute SAXS에서 측정한 반경 $R_s \approx 4.0$ nm가 단백질 껍질 전체가 아니라 **iron core 크기**와 일치 → 신호가 사실상 iron core에서 나온다.

#### 일반 단백질이라면 무너지는 것들

일반 단백질은 주로 C, N, O, H 등 가벼운 원자로 구성 → electron density가 물과 크게 다르지 않음 → **$\Delta\rho$가 작고 $\Delta\rho^2$로 신호가 깎인다.** 연쇄 문제:

1. **신호 약함 (SNR 붕괴)**: 산란 광자가 적으면 speckle를 또렷이 못 잡고, $g_2$가 노이즈에 묻혀 $\Gamma$를 신뢰성 있게 추출 불가.
2. **Radiation damage 경쟁에서 패배 (치명적)**: XPCS는 손상 누적 전에 신호를 따내야 하는 시간 경쟁("correlation before aggregation"). Iron core 덕에 ferritin은 적은 노출로 강한 신호 확보. 신호 약한 일반 단백질은 통계를 쌓으려 노출을 늘리는 순간 타버림 → **"신호 모으려면 태워야 하고, 태우면 신호가 망가지는"** 딜레마.
3. **Monodispersity/안정성**: ferritin은 24-subunit의 견고하고 균일한 nanocage라 $S(q)$ 해석이 깨끗. 일반 단백질은 모양 다양·응집·변성으로 해석이 지저분해질 수 있음.


## Questions & Insights

- **Q: DLS와 XPCS의 차이는? 둘 다 산란광의 시간 상관(speckle 깜빡임, $g_2(q,t)$)을 보는 것 아닌가?**
  A: 측정 형식($g_2$ 깜빡임)은 동일하다. XPCS의 'PCS'가 Photon Correlation Spectroscopy로 DLS의 옇 이름과 같다 — DLS는 "가시광 버전 PCS", XPCS는 "X-ray 버전 PCS". 차이는 **광원의 파장 → 접근 가능한 $q$ → 보는 길이 스케일**이라는 사슬 하나로 환원된다.
    - **DLS**: 가시광 레이저 ($\lambda \sim$ 수백 nm). $q = 4\pi\sin\theta/\lambda$에서 $\lambda$가 크니 작은 $q$만 접근 → 분자보다 훨씬 **큰 길이 스케일**($1/q \gg$ 단백질)의 collective 농도 요동만 본다. 개별 분자 간 간섭 구조($S(q)$ peak)는 못 본다. ("숲"을 본다)
    - **XPCS**: X-ray ($\lambda \sim 0.1$ nm). 큰 $q$까지 접근 → **분자 스케일(nm)**, 즉 이웃 간 간섭이 일어나는 $q_0 \approx 2\pi/\xi_p$ 근처를 직접 본다. 그래서 $D(q)$가 $q_0$에서 최소가 되는 **De Gennes narrowing**과 cage effect의 $q$-의존성을 잡을 수 있다. ("나무 사이 간격"을 본다)
  - **이 논문이 X-ray를 고집한 이유**: cage effect와 De Gennes narrowing은 분자 간 간섭이 일어나는 nm 스케일에서만 보인다. DLS로는 그 스케일에 접근 자체가 안 된다. 시간 스케일도 일반 synchrotron XPCS는 느린 dynamics(ms~s)에 강했는데, MHz-XPCS at XFEL이 단백질의 μs 영역까지 내려온 것이 방법론적 핵심.

## Related Concepts

[[SAXS (Small-Angle X-ray Scattering)]]

## 더 읽어보고 싶은 레퍼런스

