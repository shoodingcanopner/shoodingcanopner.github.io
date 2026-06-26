---
title: "Polymer Models"
date: "2026-06-23"
subject: biophysics
tags:
  - study
  - concept
  - question
  - polymer-physics
  - chromatin
  - anomalous-diffusion
class: study
---

# Polymer Models

## Overview

세포 핵 내 크로마틴/DNA의 구조와 동역학을 기술하기 위해 사용되는 coarse-grained 폴리머 모델들을 정리한 노트다. 가장 단순한 Gaussian (Ideal) Chain에서 시작해, excluded volume을 고려한 Self-Avoiding Walk, 동역학을 부여한 Rouse Model, 그리고 그 일반화 버전들(Freely-Joined-Chain, β-polymer, Worm-Like Chain, Rod-like)까지 다룬다. 모든 모델은 결국 같은 질문으로 수렴한다 — **monomer 간 상호작용(또는 그 부재)이 폴리머의 정적 통계량($R_{ee}$, $R_g$, Flory exponent $\nu$)과 동적 통계량(MSD, 이상확산 지수 $\alpha$)을 어떻게 결정하는가?**

내용은 Amitai & Holcman, *Physics Reports* 678 (2017) 리뷰의 Section 3을 기반으로 하며, [[Journal reading - Polymer physics of nuclear organization and function]]에서 분리되어 독립 개념 노트로 정리되었다.

## Key Points

### 공통 기호

| 기호                   | 의미                 |
| -------------------- | ------------------ |
| $N$                  | 모노머 수              |
| $b$                  | Kuhn length        |
| $\kappa = dk_BT/b^2$ | 스프링 상수             |
| $D$                  | 확산계수               |
| $\alpha$             | 이상확산 지수            |
| $R_{ee}$             | end-to-end 벡터      |
| $R_g$                | 회전반경               |
| $\nu$                | Flory exponent     |
| $d$                  | dimension of space |

---

### 기본 폴리머 (Gaussian Chain, Ideal Chain)
**기본 아이디어:** 폴리머를 일정한 통계적 규칙을 따르는 random walk trajectory로 본다. 즉 한 monomer에서 다음 monomer로의 변위 $\mathbf{b}_n$을 random step으로 간주하고, 전체 폴리머를 $N$-step random walk의 한 realization으로 본다.

이때 self-avoidance를 무시한다 (monomer끼리 통과 가능). 그래서 **Ideal Chain** 혹은 **Phantom Chain**이라고도 부른다.

#### 왜 monomer 간 변위를 Gaussian으로 두는가?

여기서 'monomer'는 실제 화학적 단위가 아니라, 여러 개의 미시적 결합을 묶어 만든 **coarse-grained segment (Kuhn segment)** 다. 실제 폴리머(예: dsDNA)에서 인접한 화학 결합들은 방향이 서로 강하게 상관되어 있다 (backbone이 뻣뻣함). 그러나 **persistence length보다 충분히 긴** 스케일로 묶으면, 그 너머의 방향 상관은 사라진다.

하나의 Kuhn segment 변위(step) $\mathbf{b}_n$은 사실 그 안의 수많은 미시 결합 벡터들의 합이다:

$$
\mathbf{b}_n = \sum_{i} \mathbf{l}_i
$$

이 미시 벡터들은 (거의) 독립이고 동일 분포를 따르므로, **중심극한정리([[Central Limit Theorem]])에 의해 그 합 $\mathbf{b}_n$은 평균 0, 분산 일정한 Gaussian 분포**를 따른다. 이것이 monomer 간 거리가 Gaussian으로 설정되는 근본 이유다.

- **Kuhn length $b$**: 방향 상관이 소멸하는 길이 스케일. 이 단위로 coarse-grain하면 각 step이 독립이 된다.
- 결과적으로 Gaussian chain은 각 step이 독립인 random walk이며, 전체 통계도 Gaussian이 된다.

#### 정적 통계량

$n$번째 monomer 위치 $\mathbf{R}_n$, $n=1,...,N$. Step 벡터 $\mathbf{b}_n = \mathbf{R}_{n+1} - \mathbf{R}_n$.

End-to-end 벡터:

$$
\mathbf{R}_{ee} = \sum_{n=1}^{N-1} \mathbf{b}_n
$$

Step들이 독립이고 등방적이라($\langle \mathbf{b}_n \rangle = 0$) end-to-end 벡터 자체도 Gaussian이며, 평균제곱 거리는 step 분산의 단순 합이다 (CLT의 직접적 결과):

$$
\langle R_{ee}^2 \rangle = (N-1)b^2
$$

여기서 $b^2 = \langle \mathbf{b}_n^2 \rangle$. 즉 $b$는 개별 step의 RMS 크기로 정의된다.

모든 monomer 질량을 1로 두면, center of mass:

$$
\mathbf{R}_{cm} = \frac{1}{N}\sum_{n=1}^{N} \mathbf{R}_n
$$

Radius of gyration $R_g^2 = \frac{1}{N}\sum_{n=1}^{N}(\mathbf{R}_n - \mathbf{R}_{cm})^2$는 $N$이 커질수록 수렴:

$$
\langle R_g^2 \rangle \approx \frac{Nb^2}{6}
$$

#### 에너지: Entropic Spring

평형 상태에서 어떤 configuration이 존재할 확률은 Boltzmann 분포 $P(\mathbf{R}) \propto e^{-\phi(\mathbf{R})}$로 주어진다. Gaussian chain의 에너지는 인접 monomer 사이의 [[Entropic Spring Constant|엔트로피 스프링]] 에너지의 합이다:

$$
\phi(\mathbf{R}) = \frac{\kappa}{2} \sum_{n=2}^{N} (\mathbf{R}_n - \mathbf{R}_{n-1})^2
\tag{5}
$$

이 "스프링"은 실제 화학 결합의 강성이 아니라, 각 step 변위가 Gaussian이라는 사실의 다른 표현이다. Gaussian 분포 $\propto e^{-(\Delta \mathbf{R})^2 / 2b^2}$를 Boltzmann 형태로 쓰면 자동으로 조화 포텐셜이 나오고,
스프링 상수는
$$
\kappa = \frac{dk_BT}{b^2}
$$

두 monomer $m, n$ 간 평균제곱 거리도 그 사이 step 수에 비례한다:

$$
\langle (\mathbf{R}_n - \mathbf{R}_m)^2 \rangle = |n-m| \cdot b^2
\tag{8}
$$

> **요약:** Gaussian chain은 폴리머를 독립 step의 random walk로 보는 *정적(equilibrium) 구조* 모델이다. CLT가 step과 전체 통계 모두를 Gaussian으로 만들고, 그 결과 entropic spring 에너지와 $\langle R^2 \rangle \propto N$ 스케일링이 따라온다. (여기에 시간축을 얹어 동역학을 부여한 것이 [[#Rouse Model]]이다.)

---

### Self-Avoiding Random Walk Model (SAW)
Gaussian chain은 random walk의 궤적이기 때문에, walker가 한번 지나왔던 장소를 다시 지나가는 것 처럼, monomer의 위치가 겹칠 수도 있는 (혹은 아주 가까워질 수 있는) 모델이다.
실제 polymer는 그렇지 않다. momomer가 부피를 가지기 때문이다.
이러한 점을 고려한 게 self-avoiding random walk이다.

Excluded volume interaction 에너지를 추가한다. 디락델타를 써서 monomer 위치가 겹치는 순간 에너지가 무한해진다. 같은 위치에 있는 걸 절대 금지시키는 것이다.
$\sigma$가 excluded volume일 때 excluded volume interation energy는:

$$
\phi_{EVI}(\mathbf{R}_1,..,\mathbf{R}_N) = \frac{1}{2}\sigma k_BT \sum_{n,m; n\neq m} \delta(\mathbf{R}_n - \mathbf{R}_m)
\tag{9}
$$
이 효과 때문에 동일 조건의 gaussian chain보다 polymer가 부풀어 오른다.

> [!note] AI 보충 (논문 외 내용) — 왜 excluded volume 포텐셜이 디랙델타로 주어지는가?
> *아래 내용은 원 논문에 없는, Glia(AI)가 보충한 설명이다.*
>
> **의문:** 진짜 반발은 $|r| \le \sigma^{1/d}$인 **모든** 순간 무한대여야 하는데, 왜 식 (9)는 $r=0$ 한 점에서만 터지는 디랙델타일까? 그리고 왜 $\sigma$가 앞에 곱해져 있을까?
>
> 핵심: 식 (9)는 진짜 hard-core 포텐셜이 아니라, 그것을 큰 스케일에서 coarse-grain한 **유효(effective) 표현**이다.
>
> #### 1. 진짜 포텐셜과 Boltzmann factor
> 진짜 hard-core 반발은 $|r| \le \sigma^{1/d}$에서 $+\infty$, 그 밖에서 $0$. 그러나 통계역학에서 실제로 중요한 건 $U$ 자체가 아니라 **Boltzmann factor** $e^{-U/k_BT}$다.
>
> #### 2. Mayer function
> $$ f(r) \equiv e^{-U(r)/k_BT} - 1 = \begin{cases} -1 & |r| \le \sigma^{1/d} \\ 0 & |r| > \sigma^{1/d} \end{cases} $$
>
> 두 monomer가 겹치는 작은 구 영역에서만 $-1$인 함수.
>
> #### 3. $\sigma$는 어디서 오는가 — 적분하면 부피
> 상호작용의 통계적 효과는 $f(r)$을 공간에 적분한 양으로 측정되며, 이게 바로 **excluded volume**의 정의다:
>
> $$ v = -\int f(r)\, d^d r = \int_{|r| \le \sigma^{1/d}} 1 \, d^d r = \sigma $$
>
> 즉 $\sigma$는 "유한 반지름 안에서 무한대"라는 hard-core 정보가 **적분을 통해 부피 하나로 압축된 결과**다. 반지름과 "무한대"는 사라지고, 그 영향력의 총량만 부피 $\sigma$로 남는다.
>
> #### 4. 그래서 디랙델타가 등장한다 (coarse-graining)
> 폴리머 통계는 monomer 크기보다 훨씬 큰 스케일($R \sim N^\nu b \gg \sigma^{1/d}$)에서 일어난다. 이 큰 스케일에서 폭이 $\sigma^{1/d}$인 좁은 반발 영역은 사실상 **점**처럼 보인다. 따라서 같은 적분값을 갖는 디랙델타로 대체한다:
>
> $$ f(r) \approx -\sigma\, \delta(r), \qquad U_{eff}(r) \approx \sigma k_B T\, \delta(r) $$
>
> 모든 쌍에 대해 합하고 double-counting 보정 $\tfrac{1}{2}$을 붙이면 정확히 식 (9)가 된다.
>
> #### 5. 그럼 "겹치면 무한대"는 어디 갔나?
> 디랙델타 포텐셜은 한 점에서 무한대지만 **적분 가능**해서 겹침을 완전히 금지하진 않는다. 대신 겹침 configuration의 통계적 가중치를 정확히 $v=\sigma$만큼 깎는다. 큰 스케일 통계량($\langle R_{ee}^2\rangle \sim N^{2\nu}$ 등)을 계산할 때는 진짜 hard-core와 디랙델타 버전이 **같은 답**을 주기 때문에 이 교체가 정당화된다.


End to end distance가 $\langle R_{ee}^2 \rangle \approx N$보다 커지는 것이다. 이 효과를 **==Flory exponent $\nu$==** 로 나타낼 수 있다.

$$
\langle \lvert R_{ee} \rvert \rangle \approx N^{\nu}
\tag{10}
$$
Flory exponent는 차원으로 결정된다.

- $d=2$: $\nu = 3/4$
- $d=3$: $\nu \approx 0.588$

> [!note] AI 보충 (논문 외 내용) — Flory exponent의 유도와 0.588의 정체
> *아래 내용은 원 논문에 없는, Glia(AI)가 보충한 설명이다.*
>
> #### 1. Flory의 mean-field 유도
> 폴리머 크기 $R$에 대해 경쟁하는 두 자유에너지 항을 균형시킨다.
>
> **① Excluded volume 반발 (swelling):** 부피 $R^d$ 안에 $N$개 monomer가 있으면 농도 $c \sim N/R^d$. 충돌 쌍 수 $\sim N c$에 excluded volume $v$를 곱하면
>
> $$ F_{rep} \sim k_B T \, v \frac{N^2}{R^d} $$
>
> **② Entropic spring 복원 (shrinking):** ideal 크기보다 늘이면 엔트로피 손실이 생긴다.
>
> $$ F_{el} \sim k_B T \frac{R^2}{Nb^2} $$
>
> **③ 균형:** $F = F_{rep} + F_{el}$을 $R$에 대해 최소화 ($\partial F/\partial R = 0$):
>
> $$ \frac{v N^2}{R^{d+1}} \sim \frac{R}{Nb^2} \quad\Rightarrow\quad R^{d+2} \sim N^3 \quad\Rightarrow\quad R \sim N^{3/(d+2)} $$
>
> 따라서 **Flory 지수**는
>
> $$ \nu_F = \frac{3}{d+2} $$
>
> | 차원 $d$ | $\nu_F = 3/(d+2)$ | 비고 |
> |---|---|---|
> | 1 | 1 | 정확 (완전히 펴짐) |
> | 2 | 3/4 = 0.75 | **정확** |
> | 3 | 3/5 = 0.6 | 거의 정확 |
> | 4 | 1/2 | 정확 (ideal chain으로 환원) |
>
> #### 2. 그럼 왜 0.6이 아니라 0.588인가?
> Flory 공식은 **mean-field 근사**라 정확하지 않다. 반발 에너지 과대평가와 Gaussian 단순화의 오차가 $d=3$에서 우연히 거의 상쇄되어 $0.6$이라는 좋은 값을 줄 뿐이다.
>
> 정확한 값은 **renormalization group (RG)** 이론에서 나온다. self-avoiding walk를 $n \to 0$ 극한의 $O(n)$ field theory로 매핑하고 $\varepsilon = 4 - d$ 전개를 하면
>
> $$ \nu = \frac{1}{2} + \frac{\varepsilon}{16} + \cdots $$
>
> 고차항 + 수치적 재합(resummation), conformal bootstrap, Monte Carlo를 종합하면
>
> $$ \nu_{3D} \approx 0.5876 $$
>
> 이것이 여러 논문에서 보이는 **0.588**의 정체다.
>
> #### 3. 왜 이 숫자를 여기저기서 마주치는가 — Universality
> self-avoiding walk는 **$n \to 0$인 $O(n)$ universality class**에 속한다. 그래서 같은 임계지수를 공유하는 모든 시스템(자성 물질의 임계현상, $\phi^4$ 이론 등)이 동일한 $\nu \approx 0.588$을 보인다. polymer physics에서 RG가 빛을 발하는 가장 깔끔한 입구.
>
> **요약:** $0.6$ = Flory mean-field, $\nu = 3/(d+2)$. / $0.588$ = RG · $\varepsilon$-전개로 얻은 정확한 임계지수 ($O(n\to 0)$ universality class).

---

### Rouse Model
독립된 노트로 작성: [[Rouse Model]]

**특성:** 인접 모노머만 스프링으로 연결된 가장 기본적인 동적 폴리머 모델. Gaussian chain의 에너지(식 5)에 Langevin 동역학을 얹은 것. 스프링 상수는 $\kappa = dk_BT/b^2$ ($d$는 공간 차원).

#### 동역학의 출발점: Langevin 방정식

질량 $m$인 입자가 마찰($\gamma$)과 열적 요동 속에서 운동하는 일반 Langevin 방정식 (식 12):

$$
m\ddot{\mathbf{x}} + \gamma\dot{\mathbf{x}} = \sqrt{2\gamma k_BT}\,\dot{\mathbf{w}} - \nabla U(\mathbf{x})
\tag{12}
$$

폴리머 동역학에서는 관성항이 마찰항에 비해 무시되는 **overdamped(Smoluchowski) 극한** $\gamma \to \infty$를 취한다 (식 13):

$$
d\mathbf{x} = -\frac{1}{\gamma}\nabla U(\mathbf{x})\,dt + \sqrt{2D}\,d\mathbf{w}
\tag{13}
$$

여기서 확산계수 $D = k_BT/\gamma$ (3차원).

#### 모노머 동역학

Rouse 포텐셜(식 5)에서 $-\nabla_{\mathbf{R}_n}\phi$를 계산하면, 내부 모노머 $n=2,...,N-1$의 동역학 (식 14):

$$
\frac{d\mathbf{R}_n}{dt} = -D\kappa(2\mathbf{R}_n - \mathbf{R}_{n-1} - \mathbf{R}_{n+1}) + \sqrt{2D}\frac{d\mathbf{w}_n}{dt}
\tag{14}
$$

각 항의 $(2\mathbf{R}_n - \mathbf{R}_{n-1} - \mathbf{R}_{n+1})$는 이산 라플라시안으로, 양 이웃이 당기는 스프링 힘을 나타낸다. 평형에서 결합 길이 분산:

$$
\langle |\mathbf{R}_{n+1} - \mathbf{R}_n|^2 \rangle = b^2
\tag{15}
$$

#### Rouse 모드 (정규 좌표)

식 (14)는 모노머들이 서로 결합되어 있어 직접 풀기 어렵다. **Rouse 변환**으로 모드를 분리(decouple)한다:

$$
\mathbf{u}_p = \sum_{n=1}^{N} \mathbf{R}_n \alpha_p^n
\tag{17}
$$

변환 계수 (식 18):

$$
\alpha_p^n = \begin{cases} \dfrac{1}{N}, & p = 0 \\[2mm] \sqrt{\dfrac{2}{N}}\cos\!\left((n-1/2)\dfrac{p\pi}{N}\right), & \text{otherwise} \end{cases}
\tag{18}
$$
(식 17)은 descrete Fourier transform이며 $p$는 폴리머 configuration의 wave number이다.

$p=0$인 $\mathbf{u}_0$는 **무게중심의 운동**을 나타낸다. 이 좌표에서 포텐셜이 대각화된다 (식 19):

$$
\phi(\mathbf{u}_1,...,\mathbf{u}_{N-1}) = \frac{1}{2}\sum_{p=1}^{N-1}\kappa_p \mathbf{u}_p^2
\tag{19}
$$

고유값 (식 20):

$$
\kappa_p = 4\kappa \sin^2\!\left(\frac{p\pi}{2N}\right)
\tag{20}
$$

이제 식 (14)가 **분리된 $(N-1)d$개의 독립 Ornstein-Uhlenbeck 과정**이 된다 (식 21):

$$
\frac{d\mathbf{u}_p}{dt} = -D_p\kappa_p \mathbf{u}_p + \sqrt{2D_p}\frac{d\mathbf{w}_p}{dt}
\tag{21}
$$

여기서 $p=1,...,N-1$에 대해 $D_p = D$, 무게중심은 $D_0 = D/N \equiv D_{cm}$. 완화 시간 $\tau_p = 1/(D\kappa_p)$. 가장 느린(slowest) 완화 시간 (식 22):

$$
\tau_N = \frac{1}{D\kappa_1} = \frac{1}{4D\kappa\sin^2(\pi/2N)} \approx \frac{N^2}{D\kappa\pi^2}
\tag{22}
$$

#### 단일 모노머의 MSD와 이상확산

모노머 $\mathbf{R}_c$는 모드들의 합 $\mathbf{R}_c = \sum_{p=0}^{N-1}\alpha_p^c \mathbf{u}_p$ (식 61, 역푸리에변환).
각 OU 모드의 분산 (식 62):

$$
\sigma_p^2(t) = \langle|\mathbf{u}_p(t) - \mathbf{u}_p(0)|^2\rangle = \frac{1}{\kappa_p}\left(1 - e^{-2t/\tau_p}\right), \quad p \geq 1
$$
$$
\sigma_0^2(t) = 2D_{cm}t
\tag{62}
$$

완화 시간 (식 63):

$$
\tau_p = \frac{1}{D\kappa_p}, \quad p = 1,...,N-1
\tag{63}
$$

이를 합치면 모노머 MSD의 완전한 표현 (식 64):

$$
\text{var}(\mathbf{R}_c(t)) = \frac{d}{\kappa N}\sum_{p=1}^{N-1}\frac{\cos^2\!\left(\frac{(2c-1)p\pi}{2N}\right)}{\sin^2\!\left(\frac{p\pi}{2N}\right)}\left(1 - e^{-2t/\tau_p}\right) + 2dD_{cm}t
\tag{64}
$$

여기서 세 가지 체제가 나온다:

- **짧은 시간** ($t \ll \tau_{N-1}$): 지수항을 Taylor 전개하면 $\sigma_p^2(t)\approx Dt$ (p 무관). 합하면 (식 65):
$$
\text{var}(\mathbf{R}_c) \approx 2dDt \quad \text{(정상 확산)}
\tag{65}
$$

- **중간 시간** ($\tau_{N-1} \ll t \ll \tau_1$): 합을 적분으로 근사 (식 66):
$$
\text{var}(\mathbf{R}_c) \approx 2\int_{p_{min}}^{N-1}\frac{\cos^2\!\left(\frac{(2c-1)p\pi}{2N}\right)}{\sin^2\!\left(\frac{p\pi}{2N}\right)}\,dp \sim t^{1/2}
\tag{66}
$$
모든 내부 완화 시간이 기여하여 **이상확산** $\alpha = 1/2$가 나타난다. 폴리머가 길수록 이 구간이 길어진다.

- **긴 시간** ($t \gg \tau_1$): 지수항이 모두 포화되고 무게중심 확산만 남아 정상 확산, 단 확산계수는 $D_{cm} = D/N$.

> **핵심:** Rouse 모델의 이상확산($t^{1/2}$)은 외부 매질의 점탄성이 아니라, **내부 모드들의 완화 시간이 넓게 퍼져 있다는 사실**에서 순수하게 기하학적으로 나온다. 이것이 [[Journal reading - Polymer physics of nuclear organization and function#3. 이상확산 (Anomalous Diffusion) (Section 3.10)|이상확산]]에서 다룰 다른 메커니즘(FBM 등)과 구별되는 점이다.
>
> 이 섹션의 전체 유도 과정(friction의 미시적 기원, normal mode 분리, stress tensor)은 [[Rouse Model]] 노트에 자세히 정리되어 있다.

---
### Freely-Joined-Chain Model (Generalized Rouse)

**기본 아이디어:** Rouse 모델은 인접 monomer 사이 스프링 포텐셜의 최소점이 $0$이다 (즉 평균 결합 길이가 0). Freely-Joined-Chain(FJC) 모델은 그 최소점을 $0$이 아닌 $l_0$으로 옮긴 **일반화된 Rouse 모델**이다. 즉 결합 길이를 $l_0$를 평균으로 요동하도록 스프링으로 묶는다.

**에너지 (식 16):**

$$
\phi(\mathbf{R}_1,..,\mathbf{R}_N) = \frac{\kappa}{2}\sum_{n=1}^{N}(|\mathbf{R}_n - \mathbf{R}_{n-1}| - l_0)^2
\tag{16}
$$

- 정상상태에서 인접 monomer 간 평균 거리는 $\langle |\mathbf{R}_{n+1} - \mathbf{R}_n| \rangle = l_0$.
- $l_0 = 0$으로 두면 정확히 **고전적 Rouse 모델**로 환원된다.

**왜 $l_0 \neq 0$을 쓰는가:** Rouse($l_0=0$)는 결합 길이가 $0$을 평균으로 요동해서 두 인접 monomer가 같은 점에 자주 겹친다. 유한한 결합 길이 $l_0 > 0$을 주면 더 현실적이고, excluded volume·Lennard-Jones 포텐셜을 얹어 시뮬레이션할 때 자연스러운 출발점이 된다. 실제로 이 논문은 뒤쪽 NETP 시뮬레이션의 기본 모델로 "$l_0 \neq 0$인 FJC"를 사용한다.

> [!note] AI 보충 (논문 외 내용) — "FJC = ideal chain"과의 충돌 정리
> *아래 내용은 원 논문에 없는, Glia(AI)가 보충한 설명이다.*
>
> 위키피디아 등에서는 FJC를 **ideal chain과 같다**고 소개하는데, 이 논문은 FJC를 **generalized Rouse**라고 한다. 둘 다 맞다 — 이름이 서로 다른 대상을 가리키기 때문이다.
>
> - **정통 FJC (위키):** 결합 길이를 $b$로 엄격히 고정하고 각도만 무작위. 큰 $N$에서 CLT에 의해 end-to-end 분포가 Gaussian으로 수렴 → **큰 스케일에서 ideal chain과 같은 통계**. "FJC = ideal chain"은 이 의미.
> - **논문의 FJC (식 16):** 결합 길이를 $l_0$ 주위로 스프링으로 묶어 **요동을 허용**한 후 Langevin 동역학을 얹은 버전. Rouse가 $l_0=0$인 특수 케이스이므로 저자 입장에서는 "최소점을 옮긴 generalized Rouse".


---
### β-폴리머 (Generalized Rouse)

**목적:** 이상확산 지수 $\alpha$를 처방하는 폴리머 모델 구성.

Rouse 고유값을 수정:

$$
\tilde{\kappa}_p = 4\kappa \sin^\beta\!\left(\frac{p\pi}{2N}\right)
\tag{24}
$$

$\beta = 2$이면 Rouse 모델로 환원. $\beta \neq 2$이면 **모든 모노머가 장거리 상호작용**.

**중간 시간대 이상확산 지수:**

$$
\langle (\mathbf{R}_c(t_0+t) - \mathbf{R}_c(t_0))^2 \rangle \propto t^{1 - 1/\beta}
\tag{71}
$$

따라서:

$$
\alpha = 1 - \frac{1}{\beta}
$$

- $\beta = 2$ (Rouse): $\alpha = 1/2$
- $\beta = 3/2$: $\alpha = 1/3$  ← 실험값과 부합
- $\beta \to 1$: $\alpha \to 0$ (완전 응축)

---

### Worm-Like Chain (WLC)

**특성:** Semi-flexible polymer. Rouse/Gaussian chain은 구부림 강성이 없어 완전히 유연하지만, 실제 dsDNA·크로마틴 파이버는 일정 길이까지 뮣뮣하다. WLC는 이 **stiffness(구부림 강성)** 를 도입한 모델이다.

#### 접선 벡터 상관함수

WLC의 정의적 특성은 접선 벡터 $\mathbf{t}(s) = \frac{d\mathbf{r}(s)}{ds}$의 방향 상관이 사슬을 따라 지수적으로 감쇄한다는 것이다 (식 11):

$$
\langle \mathbf{t}(s) \cdot \mathbf{t}(0) \rangle = \cos(\theta(s)) = e^{-s/L_p}
\tag{11}
$$

$L_p$는 **지속 길이(persistence length)** — 방향 기억이 사라지는 특성 길이. dsDNA: $L_p \approx 50$ nm, 크로마틴 파이버: $L_p \approx 150$ nm.

> 이산 모델에서 단위 접선 벡터로 평균을 내면 같은 지수 감쇄가 나온다 (식 37): $\langle \hat{\mathbf{u}}(s) \cdot \hat{\mathbf{u}}(0) \rangle = e^{-s/L_p}$.

#### 구부림 에너지 (Bending Energy)

stiffness는 인접한 결합 벡터 사이의 각도에 에너지 비용을 부과하여 구현한다. 단위 결합 벡터 $\mathbf{u}_i = \frac{\mathbf{x}_{i+1} - \mathbf{x}_i}{|\mathbf{x}_{i+1} - \mathbf{x}_i|}$ 에 대해 (식 35):

$$
U_{bend}(\mathbf{x}) = \frac{\kappa_{ang}}{2}\sum_{i=1}^{N-1}(\mathbf{u}_{i+1} - \mathbf{u}_i)^2 = \kappa_{ang}\sum_{i=1}^{N-1}(1 - \mathbf{u}_i \cdot \mathbf{u}_{i+1})
\tag{35}
$$

두 형태가 같은 이유: $\mathbf{u}$는 단위 벡터라 $|\mathbf{u}_{i+1}|^2 = |\mathbf{u}_i|^2 = 1$이므로 $(\mathbf{u}_{i+1}-\mathbf{u}_i)^2 = 2(1 - \mathbf{u}_i\cdot\mathbf{u}_{i+1})$. 여기서 $\mathbf{u}_i \cdot \mathbf{u}_{i+1} = \cos\theta_i$ ($\theta_i$는 연속한 두 결합 사이 각도). 즉 곧게 펴지면($\theta_i = 0$) 에너지 0, 구부러질수록 비용 증가.

#### 지속 길이와 구부림 강성의 관계

구부림 강성 $\kappa_{ang}$은 지속 길이와 직접 연결된다 (식 36):

$$
L_p = \frac{\kappa_{ang} l_0}{k_B T}
\tag{36}
$$

$l_0$는 결합 길이. 강성이 클수록, 또는 열요동($k_BT$)이 작을수록 더 뮣뮣하다(=$L_p$ 큼).

#### 동역학 시뮬레이션

WLC의 시간 발전은 총 포텐셜에 대한 overdamped Langevin 방정식으로 시뮬레이션한다 (식 38, 39):

$$
\dot{\mathbf{x}} + \nabla U = \sqrt{2D}\,\dot{\mathbf{w}}
\tag{38}
$$

$$
U(\mathbf{x}) = U^N(\mathbf{x}) + U_{bend}(\mathbf{x})
\tag{39}
$$

여기서 $U^N$은 FJC의 탄성 포텐셜(식 16), $U_{bend}$는 구부림 에너지(식 35). 즉 **WLC = FJC(스프링) + 구부림 강성**.

#### 에너지 스케일 비교

논문의 coarse-grained 크로마틴 시뮬레이션($\kappa_{ang} = 5$, $L_p = 250$ nm)에서 두 에너지는 비슷한 크기를 갖는다:

- 탄성 에너지: $U_{el} = \frac{1}{2}k|r - l_0|^2 \sim 2 \times 10^{-18}$ N·m (DNA 최대 신장 ~10%, $|r - l_0| \sim 5$ nm)
- 구부림 에너지: $U_{bend} = \kappa_{ang}(1 - \cos\theta) \sim 5 \times 10^{-19}$ N·m ($\cos\theta = -1$일 때)

비교하면, 같은 조건에서 순수 Rouse 폴리머는 구부림 항이 없어 구면 경계 근처에서도 구부러지지 않고 더 응축된 ($R_g \propto \sqrt{N}$) 구조를 보인다. WLC는 stiffness 때문에 경계 근처에서 펴지는 경향이 있다.

> **핵심:** WLC는 Rouse/FJC에 구부림 강성 $U_{bend}$를 더한 것으로, 지속 길이 $L_p$ 스케일 이하에서는 뻣뻣한 막대처럼, 그 이상에서는 유연한 사슬처럼 거동한다. 이 stiffness는 뒤의 NETP(좁은 탈출 시간)에서 탐색 효율에 직접 영향을 준다 (뻣뻣한 사슬이 경계 근처 타깃을 더 빨리 찾음).

---

### Rod-like 모델

각도 $\theta_k$가 원에서 Brownian 운동하는 $N$개의 강체 세그먼트. $k$번째 모노머 위치:

$$
\mathbf{R}_k(t) = b\sum_{j=1}^k \exp(i\theta_j(t))
\tag{41}
$$

장거리 모노머 상관을 가지며, Rouse와 다른 루핑 공식 유도 가능.

## Questions & Insights

- 현재까지 기록된 질문 없음 — 학습 중 궁금한 점이 생기면 이곳에 추가.

## Related Concepts

- [[Central Limit Theorem]]
- [[Entropic Spring Constant]]
- [[MSD exponent from scale-dependent Flory exponent]]
- [[Contact probability exponent and polymer scaling]]
- [[Journal reading - Polymer physics of nuclear organization and function#3. 이상확산 (Anomalous Diffusion) (Section 3.10)|이상확산 (Anomalous Diffusion)]]

## References

- Amitai, A. & Holcman, D., "Polymer physics of nuclear organization and function," *Physics Reports* 678, 1–83 (2017) — Section 3
- [[Journal reading - Polymer physics of nuclear organization and function]]

## Notes from Claude

이 노트는 원래 [[Journal reading - Polymer physics of nuclear organization and function]]의 Section 3 발췌본으로 시작됐던 것을, 독립적인 개념 노트 형식(frontmatter + Overview/Key Points/Related Concepts/References 구조)으로 재구성한 것이다.

- 본문에 있던 Glia(AI)의 보충 설명 콜아웃(`[!note] AI 보충`)은 해당 수식 직후 원래 위치에 그대로 유지했다 — excluded volume 포텐셜이 디랙델타로 근사되는 이유, Flory exponent의 mean-field 유도와 0.588의 정체, FJC와 ideal chain 명명 충돌 정리 세 가지다. 내용 손실 없이 그대로 보존했다.
- 원문에서 `[[#3. 이상확산...]]`처럼 같은 파일 내부 앵커로 걸려 있던 링크는 실제로는 모(母) 저널 노트의 섹션을 가리키고 있었기 때문에, 정확한 cross-note 링크로 수정했다.
- Related Concepts에 사용자의 현재 핵심 연구 주제와 직결되는 [[MSD exponent from scale-dependent Flory exponent]]를 추가했다 — 이 노트의 Rouse/β-polymer 이상확산 지수가 바로 그 연구의 이론적 출발점이기 때문이다.
