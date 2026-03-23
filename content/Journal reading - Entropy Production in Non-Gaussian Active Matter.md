---
title: "Entropy Production in Non-Gaussian Active Matter: A Unified Fluctuation Theorem and Deep Learning Framework"
authors: Yuanfei Huang, Chengyu Liu, Bing Miao, Xiang Zhou
DOI: "[10.1103/y94p-4qcz](https://doi.org/10.1103/y94p-4qcz)"
date read: "2026-03-22"
date published: "2026-02-11"
subject: nonequilibrium statistical mechanics, active matter, stochastic thermodynamics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Entropy Production in Non-Gaussian Active Matter: A Unified Fluctuation Theorem and Deep Learning Framework

## Overview

비가우시안(non-Gaussian) 활성 요동(active fluctuations)에 의해 구동되는 active matter 시스템에서 엔트로피 생성률(entropy production rate, EPR)을 다루는 통합 프레임워크를 제시하는 논문. 핵심 도구는 **probability-flow equivalence technique**이며, 이를 통해 엔트로피 생성(EP)을 세 가지 성분으로 분해하고, 비가우시안 계에서도 유효한 fluctuation theorem을 엄밀하게 유도한다. 또한 Lévy score를 활용한 딥러닝 기반 EPR 계산 방법론을 제안한다.

저자 소속 기관에 **Asia Pacific Center for Theoretical Physics, Pohang-si** 가 포함되어 있다 — 포스텍 바로 옆 기관.

## Link to PDF and DOI

- DOI: [10.1103/y94p-4qcz](https://doi.org/10.1103/y94p-4qcz)
- PDF: [[Entropy Production in Non-Gaussian Active Matter.pdf]]

## 주요 내용 요약

### 핵심 결과 1: EP 분해 공식

총 엔트로피 생성(EP)은 세 성분으로 분해된다:

$$
\Delta s_\text{tot} = \Delta s_\text{sys} + \Delta s_m + \Delta s_\text{act}
$$

- $\Delta s_\text{sys}$: 계(system) 자체의 엔트로피 변화
- $\Delta s_m$: 열역학적 매질(medium)로의 엔트로피 흐름 (열 소산)
- $\Delta s_\text{act}$: 활성 요동(active fluctuation)에 의한 엔트로피 기여 — **비가우시안 계에서 새롭게 등장하는 항**

### 핵심 결과 2: Fluctuation Theorem (일반화)

경로 의존 확률변수 $B_\text{act}$를 도입하고 $\mathcal{R} \equiv \Delta s_\text{tot} - B_\text{act}$를 정의하면:

**Detailed Fluctuation Theorem (DFT):**

$$
\frac{\rho_\mathcal{R}(\Sigma)}{\rho_\mathcal{R}(-\Sigma)} = e^\Sigma
$$

**Integral Fluctuation Theorem (IFT):**

$$
\langle e^{-\mathcal{R}} \rangle = 1
$$

**일반화된 열역학 제2법칙:**

$$
\langle \Delta s_\text{tot} \rangle \geq \langle B_\text{act} \rangle
$$

활성 요동이 없으면($B_\text{act} \to 0$) 기존의 표준 stochastic thermodynamics 결과로 환원된다.

### 핵심 결과 3: 딥러닝 기반 EPR 계산

Lévy score function을 학습하는 두 개의 신경망 $S^\text{NN}_B$, $S^\text{NN}_L$을 이용해 velocity field를 추정하고, 각 EP 성분을 수치적으로 계산한다.

### 모델: Lévy형 active noise를 가진 Langevin 방정식

$$
\frac{d\mathbf{r}(t)}{dt} = \frac{F[\mathbf{r}(t)]}{\Gamma} + \eta_\text{th}(t) + \eta_\text{act}(t)
$$

- $\eta_\text{th}$: Gaussian 백색 잡음 (열적 요동)
- $\eta_\text{act}$: compound Poisson process (비가우시안 활성 잡음, Lévy형)

대응하는 Lévy-Fokker-Planck equation (LFPE):

$$
\partial_t P(\mathbf{r}, t) = -\nabla \cdot J(\mathbf{r}, t) \equiv -\nabla \cdot [V(\mathbf{r}, t) P(\mathbf{r}, t)]
$$

### 예제 적용

1. **비대칭 주기 포텐셜 속 Brownian particle**: 평균 jump height $\mu = 0$이면 EPR이 0으로 감소(effective equilibrium), $\mu \neq 0$이면 비평형 정상상태 유지.
2. **Active polymer (ABP cross-linker + passive Brownian beads)**: 고차원 계에서도 프레임워크 적용 가능.

## Questions & Insights

_논문을 읽으며 생긴 질문과 통찰을 여기에 기록한다._

- Q: Gaussian noise에서 '각 시간 스텝의 킥이 정규분포를 따르는' 이유는 무수히 짧은 시간 간격의 white noise가 시간 평균되어 Gaussian이 되기 때문인가?
  A: 방향은 맞지만 더 정확히는 **중심극한정리(CLT)** 때문. White noise의 한 시간 간격 $[t, t+dt]$ 동안의 누적 효과인 Wiener increment $dW_t$는, 그 구간을 $N$개의 독립적 미소 기여들로 쪼갰을 때 CLT에 의해 $N\to\infty$ 극한에서 Gaussian이 된다(분산 $\propto dt$). 반면 compound Poisson process는 "연속적인 무수히 많은 작은 킥들의 합" 구조가 아니라 **희귀하게 발생하는 유한한 크기의 점프들**로 이루어져 있어서 CLT가 적용될 구조 자체가 아니다. Lévy 분포처럼 분산이 발산하는 경우엔 CLT 대신 **Generalized CLT**가 적용되어 stable distribution이 나온다.

- Q: $\eta_\text{act}$를 non-Gaussian으로 만드는 요인은 kick amplitude 분포 $\nu_A$인가, 아니면 Poisson 분포를 따르는 kick 시점인가?
  A: 둘 다 기여하지만 역할이 다르다. **Poisson timing**은 kick이 희귀하고 이산적으로 발생하는 구조를 만들어, CLT가 적용될 만큼 충분한 독립적 기여가 누적되지 않기 때문에 non-Gaussian성의 **구조적 원인**이 된다. **Kick amplitude 분포 $\nu_A$** 는 non-Gaussian의 모양과 세기를 결정하며, 특히 비대칭($\mu \neq 0$)일 때 방향성 있는 운동(net drift)을 만들어 nonequilibrium steady state를 유지시킨다. 요약: $\nu_A$의 비대칭이 방향성 있는 운동을 만들고, Poisson 분포를 따르는 불연속적 kick 시점이 CLT를 만족시키지 않아 non-Gaussian을 만든다.

- Q: 시간역전 시 Lévy measure가 바뀌는 대칭성 파괴가 $B_\text{act}$ 항을 필요로 하는 이유는?
  A: Gaussian noise는 시간을 뒤집어도 통계적으로 동일하다($\tilde{\nu} = \nu$). 따라서 Radon-Nikodym derivative(정방향/역방향 path measure의 비)가 깔끔하게 $e^{\Delta s_\text{tot}}$로 나오고 DFT가 바로 성립한다. 반면 Lévy noise는 시간역전 시 Lévy measure가 $\nu(dz) \to \tilde{\nu}(r,dz) = \frac{P(r+z,T-t)}{P(r,T-t)}\nu(-dz)$로 바뀐다 — 점프 방향이 뒤집히고 위치 의존적 가중치가 붙는다. 이 비대칭성 때문에 Radon-Nikodym derivative에 보정항 $e^{-B_\text{act}}$가 추가로 곱해지고, 결국 $\mathcal{R} = \Delta s_\text{tot} - B_\text{act}$에 대해서만 DFT가 성립한다. $B_\text{act}$는 이 non-Gaussian 시간역전 비대칭성을 흡수하는 항이다.

- Q: Lévy score $S_L$의 물리적 의미는? 식 (7)의 $\theta$와 $\nu(d\mathbf{z})$는 무엇인가?
  A: $\nu(d\mathbf{z})$는 Lévy measure — 크기 $\mathbf{z}$인 점프가 단위 시간에 얼마나 자주 일어나는가를 나타내는 측도. $\theta \in [0,1]$은 Marcus integral에서 점프 경로를 추적하는 매개변수로, $\mathbf{r}(\theta) = \mathbf{r} + \theta\mathbf{z}$처럼 점프 시작점에서 끝점까지의 경로를 parametrize한다. $S_L$의 올바른 해석: 분자에 $P(\mathbf{r}-\theta\mathbf{z}, t)$가 있으므로, 이는 **주변 위치 $\mathbf{r}-\theta\mathbf{z}$에서 $\mathbf{r}$로 점프해 올 수 있는 출발지들의 확률밀도를 Lévy measure로 가중평균한 것**이다. 음수 부호가 붙어 전체적으로는 $\mathbf{r}$에서의 **나가는(outgoing) 비국소적 flux**를 나타내며, Gaussian noise의 $-\nabla P$와 정확히 대응된다: Gaussian의 $-\nabla P$가 국소적 나가는 flux이듯, $S_L$은 점프 noise의 비국소적 나가는 flux다.

- Q: Marcus canonical integral이란 무엇이며, 식 (10a)는 어떻게 해석해야 하는가?
  A: **Marcus integral** $\diamond$는 점프가 있는 stochastic process에서 chain rule을 보존하기 위해 정의된 stochastic calculus이다. Itô/Stratonovich는 연속 경로에서만 잘 작동하지만, Lévy 점프가 있으면 $d[f(x)] = f'(x) \diamond dx$가 성립하도록 점프 순간에 보조 경로 $x(\theta) = x(t^-) + \theta z\ (\theta \in [0,1])$를 따라 $f$를 적분한다. 물리적으로는 실제 점프가 유한한 시간 동안 일어나는 과정의 극한으로, 점프 경로를 명시적으로 추적하는 자연스러운 선택이다. **식 (10a)** 는 trajectory를 따라 $\dot{s}_\text{sys} = -\frac{d}{dt}\log P(\mathbf{r}(t),t)$를 계산한 것이다. 첫 번째 항 $-\partial_t P/P$는 **Eulerian 변화** — 입자가 제자리에 고정된 상태에서 분포 $P$ 자체가 시간에 따라 변하는 효과(비정상상태 완화 시 비영). 두 번째 항 $-(\nabla P/P) \diamond \dot{\mathbf{r}}$는 **Lagrangian 변화** — 입자가 움직이면서 다른 위치의 확률밀도를 샘플링하는 효과이며, $\dot{\mathbf{r}}$에 점프가 포함되어 Marcus integral이 필요하다. 이후 LFPE의 속도장 $V$의 분해를 대입하면 (10b)로 넘어가며 $\dot{s}_m$과 $\dot{s}_\text{act}$이 자연스러운으로 분리된다:
    - $-(F/\Gamma D_\text{th}) \diamond \dot{\mathbf{r}}$: 외력에 의한 열 소산 $\to \dot{s}_m$
    - $(S_L/D_\text{th}) \diamond \dot{\mathbf{r}}$: Lévy score에 의한 비국소적 기여 $\to \dot{s}_\text{act}$

- Q: $s_\text{sys}$, $s_m$, $s_\text{tot}$의 차이는? 그리고 왜 $s_\text{act}$는 $s_\text{sys}$에 포함되지 않는가?
  A: **$s_\text{sys} = -\log P(\mathbf{r}(t),t)$** 는 순수하게 확률적인 양 — "지금 입자 위치가 ensemble에서 얼마나 드문가"를 측정한다. $P$의 값(스냅샷)만 담으며, 입자가 어떤 동역학으로 그 위치에 도달했는지는 모른다. **$s_m$** 은 열욕(medium)으로 흘러들어가는 엔트로피로, 외력과 속도의 내적 $F \diamond \dot{\mathbf{r}}/k_BT$에서 나오는 순수 열역학적 양이다. **$s_\text{tot} = s_\text{sys} + s_m + s_\text{act}$** 는 우주 전체(계+열욕+active 기여)의 엔트로피 변화이며, $\langle \dot{s}_\text{tot}\rangle \geq 0$이 제2법칙이다. **$s_\text{act}$가 $s_\text{sys}$에 포함될 수 없는 이유**: $s_\text{sys}$는 $P$의 값(분포의 형태)만 담지만, $s_\text{act}$는 $P$가 어떻게 흐르는가 — 즉 probability flux $J$와 active noise의 상호작용($\dot{S}_\text{act} = \int (-S_L/D_\text{th}) \cdot J\, d\mathbf{r}$)에서 나오는 동역학적 정보다. 같은 분포 $P$를 가지더라도 active noise 유무에 따라 $s_\text{act}$는 달라진다. 수식적으로도 $S_L$은 $\nabla \log P$가 아닌 별도의 비국소 항이므로 $s_\text{sys}$에서 분리될 수밖에 없다. 비유: $s_\text{sys}$는 지도 위 입자의 위치(정적 정보), $s_\text{act}$는 입자가 어떤 엔진으로 움직이는가(동역학적 정보).

- Q: 딥러닝 섹션에서 input, $S^\text{NN}$, $V^\text{NN}$은 각각 무엇을 나타내는가? 그리고 score matching loss는 어떻게 정답 없이 학습이 가능한가?
  A: **Input**: 같은 Langevin 방정식 (5)를 따르는 $N$개의 독립 trajectory 샘플 $\{\mathbf{x}_i(t)\}$ — 이 샘플들이 시간 $t$에서의 분포 $P(\mathbf{r},t)$를 근사한다. **$S^\text{NN}_B(\mathbf{r},t) \approx \nabla\log P$**: 수많은 샘플로 학습된 신경망이 임의의 위치 $\mathbf{r}$ 하나를 받아 Stein score를 출력한다. 샘플 하나가 아니라 ensemble 전체의 분포 구조가 신경망에 인코딩된 것. **$S^\text{NN}_L(\mathbf{r},t) \approx S_L$**: 마찬가지로 Lévy score를 출력. **$V^\text{NN} = F/\Gamma - D_\text{th}S^\text{NN}_B - S^\text{NN}_L$**: 확률밀도 $P$가 공간에서 이동하는 속도장 — 개별 입자 속도 $\dot{\mathbf{r}}$이 아니라 위치 $\mathbf{r}$에서의 trajectory 평균 속도($= J/P$)이다. EPR 계산과 다음 시간 스텝 샘플 생성 모두에 쓰인다. **Score matching의 핵심 트릭**: $\nabla\log P$를 직접 몰라도 학습 가능하다. Naive loss $\mathbb{E}[|S^\text{NN}_B - \nabla\log P|^2]$를 전개하면 $\nabla\log P$를 포함하는 교차항이 부분적분을 통해 $\mathbb{E}[\nabla \cdot S^\text{NN}_B]$로 바뀌고, $|\nabla\log P|^2$ 항은 최적화에 무관하므로 제거된다. 결과: $\text{Loss}_B = \mathbb{E}[|S^\text{NN}_B|^2] + 2\mathbb{E}[\nabla \cdot S^\text{NN}_B]$ — $\nabla\log P$가 완전히 사라지고 샘플만으로 계산 가능하며, 이를 최소화하면 $S^\text{NN}_B \to \nabla\log P$로 수렴이 보장된다. **$\mathbb{E}[\cdot]$의 의미**: ensemble average(앙상블 평균). $\mathbb{E}[f(\mathbf{X}_t)] = \int f(\mathbf{r})P(\mathbf{r},t)d\mathbf{r} \approx \frac{1}{N}\sum_i f(\mathbf{x}_i(t))$. 물리학의 $\langle\cdot\rangle$과 동일한 의미이며 표기 관례만 다르다.

- Q: IFT와 DFT의 물리적 의미는?
  A: 미시계에서는 개별 trajectory마다 엔트로피가 감소하는 사건도 실제로 발생한다. **DFT** $\rho(\Sigma)/\rho(-\Sigma) = e^\Sigma$는 엔트로피 $+\Sigma$가 생성되는 trajectory가 $-\Sigma$가 생성되는 trajectory보다 정확히 $e^\Sigma$배 더 자주 일어난다는 것 — 엔트로피 감소가 불가능한 게 아니라 지수적으로 드물 뿐이다. $\Sigma$가 거시적으로 클수록 $e^\Sigma$가 폭발적으로 커지므로 거시계에서 제2법칙이 성립한다. **IFT** $\langle e^{-\Sigma}\rangle = 1$은 DFT를 $\Sigma$에 대해 적분한 것으로, Jensen 부등식을 적용하면 $\langle\Sigma\rangle \geq 0$ 즉 제2법칙이 바로 나온다. DFT가 더 강한 진술이고 IFT는 거기서 따라 나온다. 이 논문에서는 non-Gaussian active noise의 시간 역전 시 Lévy measure가 바뀌는($\nu \neq \tilde{\nu}$) 대칭성 파괴 때문에 $\mathcal{R} \equiv \Delta s_\text{tot} - B_\text{act}$에 대해 DFT/IFT가 성립하도록 일반화된다.

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 


## 더 읽어보고 싶은 레퍼런스


