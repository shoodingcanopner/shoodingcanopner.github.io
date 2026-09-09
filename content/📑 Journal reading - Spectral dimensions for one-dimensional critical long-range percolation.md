---
title: 📑 Spectral dimensions for one-dimensional critical long-range percolation
authors: Zherui Fan, Lu-Jing Huang
DOI: "[DOI](https://doi.org/10.1214/26-EJP1568)"
date read: 2026-08-19
date published: 2026-07-04
subject: probability theory / mathematical physics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Spectral dimensions for one-dimensional critical long-range percolation
![[Pasted image 20260821093419.png]]
Spectral dimension의 정의
![[Pasted image 20260821095242.png]]

Spectral dimension의 식
![[Pasted image 20260821095328.png]]

## Overview

1차원 정수 격자 $\mathbb{Z}$ 위에서 정의된 critical long-range percolation (β-LRP) 모델의 simple random walk에 대해 quenched/annealed spectral dimension이 모두 $d_s = 2/(1+\delta)$로 존재함을 증명한 논문. 여기서 $\delta \in (0,1)$은 이 모델에서 effective resistance가 거리에 대해 갖는 growth exponent. Kumagai–Misumi (2008)의 volume/resistance 기반 heat kernel 추정 기법을 이 특정 모델에 적용해서, 기존에 미해결로 남아있던 $(d,s)=(1,2)$ (critical) 케이스의 spectral dimension 존재성을 확립함.

사용자의 K-matrix (graph Laplacian) 기반 연구와의 연결점: 이 논문의 그래프는 장거리 edge가 거리에 따른 power-law 확률로 무작위로 생기는 구조이고, 이는 사용자의 loop-extrusion 유래 K-matrix의 sparse random long-range coupling과 구조적으로 유사함. 특히 이 논문은 quenched와 annealed spectral dimension이 **같다**는 것을 증명했으므로, "annealed vs quenched spectrum" 노트에서 다룬 우려는 $\mu=2$의 spectral exponent에 한해 이 정리로 해소된다. (단, 여기서 annealed는 heat kernel의 기댓값 $\mathbb{E}[p_{2n}(0,0)]$이지 K-matrix 자체를 ensemble average한 뒤 대각화하는 "annealed matrix" 근사가 아니다. 후자는 별개의 문제로 여전히 unverified.)

## Link to PDF and DOI

- PDF: [[Spectral dimensions for one-dimensional critical long-range percolation.pdf]]
- DOI: [https://doi.org/10.1214/26-EJP1568](https://doi.org/10.1214/26-EJP1568)

## 주요 내용 요약

### 이 논문의 결론

$$
\boxed{d_s = \frac{2}{1+\delta}}
$$

Spectral dimension은 $\delta$로 결정된다. Quanched와 annealed모두 같은 식을 따른다. 
이때, $\delta$는 effective resistance의 exponent이며, $\beta$의 함수이다. 
$\delta = \delta(\beta)$, $\delta \in (0,1)$
아쉽게도, $\delta = \delta(\beta)$의 exact한 식은 밝혀져 있지 않다. 


### Property of graph
1D lattice이며, 바로 근접한 이웃 사이는 무조건 edge가 있다. 
먼 이웃 x와 y를 잇는 edge는 $|x-y|$에 dependent한 확률로 생성된다. 
$$
1-\exp{-\beta\int_x^{x+1}\int_{y}^{y+1} \frac{1}{|x-y|^2}dxdy} \sim\frac{\beta}{|x-y|^2}
$$
$\beta >0$, $\beta$는 free parameter


#### 내 모델과의 identification (2026-09-03 추가)

이 $\beta$-LRP는 [[🕯️critical_power_loop|critical_power_loop]] 알고리즘의 $\mu=2$, `allow_multi=True` 버전과 **동일한 확률 모델**이다. "구조적으로 유사"한 수준이 아니다.

| 항목 | $\beta$-LRP (Fan & Huang) | `critical_power_loop` ($\mu=2$) |
| --- | --- | --- |
| backbone | $\lvert i-j\rvert=1$ edge 확률 1 | polymer chain bond |
| long edge kernel | $1-\exp\{-\beta\int_i^{i+1}\!\!\int_j^{j+1}\lvert u-v\rvert^{-2}\}\approx 1-e^{-\beta/d^2}$ | $p(i,j)=1-\exp(-\beta/d(i,j)^2)$ |
| $\beta$ 정규화 | 위 kernel의 계수 | 동일 (별도 매핑 불필요) |
| 한 site에 여러 edge | 허용 (independent Bernoulli) | `allow_multi=True` |
| edge weight | 모두 1 | spring constant $k=1$ |

- 논문의 $\beta$와 내 $\beta$는 large $d$에서 같은 계수이므로, $\beta$ sweep 결과를 이 논문의 $\delta(\beta)$와 **직접 비교**할 수 있다. (작은 $d$에서 $\int\int$ 버전과 $1/d^2$ 버전은 상수 차이가 있지만 exponent에는 영향 없음.)
- `allow_multi=False` (`nomulti`) 변형은 exclusion 제약 때문에 edge들이 독립이 아니게 되어 **정리의 전제(independent Bernoulli edges)를 벗어난다.** 이 변형에 대해서는 아래 결과를 그대로 적용할 수 없다.
- lin vs ring: 논문은 무한 $\mathbb{Z}$이고 내 시뮬레이션은 유한 $N$이다. 유한 크기 효과는 별도 문제.

### Simple random walk process
Graph위의 random walker는 edge를 이용해 다른 vertex로 이동한다. 현 위치에 연결된 edge중 하나를 선택할 확률은 동등하다. 

$$
X_t = \{t\text{ step 걸었을 때 위치}\}
$$


### Heat kernel

$$
P_t(x,y) = \frac{1}{\text{deg}(y)}\{t \text{ step걸어서 } x \text{에서 출발해  }y \text{에 도착할 확률}\}
$$

$$
P_t(x,y) = \frac{1}{\text{deg}(y)} P_x(X_t=y)
$$


### Spectral dimension

1st definition (with density of states) $\rho(\lambda) \sim \lambda^{d_s/2 -1}$
2nd definition (with return probability of random walker) $P_{2t}(0,0) \sim t^{-d_s/2}$


#### 두 정의의 연결

논문은 2nd definition (SRW의 return probability)으로 증명했고, 내 $\gamma$는 1st definition (K-matrix의 eigenvalue counting)에서 나온다. 둘은 trace 공식으로 연결된다.

$$
\frac{1}{N}\operatorname{tr} e^{tK} = \frac{1}{N}\sum_p e^{-\lvert\lambda_p\rvert t} = \frac{1}{N}\sum_x p_t(x,x)
$$

좌변은 integrated density of states $N(\lambda)$의 Laplace transform이므로, Tauberian argument로

$$
N(\lambda)\sim\lambda^{d_s/2} \iff \frac{1}{N}\sum_x p_t(x,x)\sim t^{-d_s/2}
$$

즉 $\gamma = 2/d_s$는 **공간 평균된** heat kernel에 대해 성립한다. 논문의 annealed $d_s$는 $\mathbb{E}[p_{2n}(0,0)]$인데 translation invariance 덕분에 이것이 곧 공간 평균이고, quenched $d_s$와 같다는 것이 정리의 내용이므로 어느 정의로 가도 같은 exponent에 도달한다.

#### K-matrix와 논문의 heat kernel은 다른 operator이다

> [!warning] Operator mismatch — unverified but standard
> 아래 논의는 논문에 명시된 정리가 아니라 "증명이 그대로 이식된다"는 argument이다. exponent 수준에서는 틀릴 여지가 거의 없지만, 수치로 확인하기 전까지는 가정으로 취급한다.

Adjacency $A$, degree matrix $D$, combinatorial Laplacian $L = D-A$라 하면

| | operator | walk | 측도 |
| --- | --- | --- | --- |
| K-matrix | $K = -L$ | variable-speed random walk (VSRW): edge마다 rate 1로 점프 | counting measure $\#B_r$ |
| 논문의 SRW | $-D^{-1}L$ (즉 $P=D^{-1}A$) | constant-speed / discrete-time SRW | degree measure $V_r=\sum_{y\in B_r}\deg(y)$ |

두 operator는 spectrum이 다르다. 그러나 두 walk는 서로의 time change ($\int_0^t \deg(X_s)\,ds$)이고, Kumagai–Misumi framework의 두 입력을 보면:

1. **Effective resistance** $R(\cdot,\cdot)$: edge conductance만으로 정의되므로 vertex measure와 무관. **두 operator에서 완전히 동일.** $\delta(\beta)$는 그대로 살아남는다.
2. **Volume**: $\deg(y)\ge 1$이고, $\deg(y)$는 독립 Bernoulli의 합(평균 $\approx 2+\beta(\pi^2/6-1)$, Poisson급 꼬리)이라 길이 $n$ 구간의 최대 degree는 $O(\log n)$. 따라서

$$
\#B_r \;\le\; V_r \;\le\; C\,\beta\log r\cdot\#B_r
$$

로 두 volume은 **log factor 안에서 일치**한다. Theorem 1.1(1)의 quenched bound가 이미 $(\log n)^{\pm\gamma_1}$ 보정을 달고 있고, Proposition 2.3(2)는 $\phi(r)=r^{D}(\log r)^{\pm m_1}$ 형태를 명시적으로 허용하므로, counting measure로 같은 framework를 돌려도

$$
d_s^{(K)}(\beta) = \frac{2}{1+\delta(\beta)}
$$

가 나온다. 만약 K-matrix의 exponent가 다르려면 degree fluctuation이 polynomial 수준이어야 하는데, $s=2$ LRP에서는 그렇지 않다.

**수치 검증 방법**: 같은 realization에서 $L$의 eigenvalue와 generalized eigenproblem $Lv=\lambda Dv$ (= $D^{-1}L$의 spectrum)를 둘 다 구해 $\gamma_{\text{local}}(p)$를 겹쳐 그린다. scaling window에서 겹치면 위 argument가 확인된다. `nomulti` 변형은 $\deg\le 3$으로 bounded라 이 argument는 trivially 성립하지만, 대신 그래프의 확률법칙이 LRP와 달라 정리 자체가 적용되지 않는다 (위 identification 참고).

### Effective resistance
$\mathbf{V}$가 graph속 vertex의 집합, $\mathbf{R}$이 실수들의 집합일 때, 
함수 $f:\mathbf{V} \rightarrow \mathbf{R}$ 는 모든 vertex가 가진 전위를 알려주는 함수이다. 
이 전기 회로의 Dirichlet energy는 아래와 같이 계산된다. 
$$
D(f,f) = \frac{1}{2}\sum_{\text{연결된 두 vertex }x,y }(f(x)-f(y))^2
$$
Edge가 저항 1의 전선일 때, 이어진 두 vertex사이 전류는 $I =f(x)-f(y)$
둘 사이 에너지는 $P = IV =I^2R=\{f(x)-f(y)\}^2$ 이기 때문이다. 

그리고 effective resistance는 이렇게 정의된다.

$$
\boxed{\frac{1}{R(x,y)}=\inf \{ D(f,f):f(x)=1 \text{ and } f(y)=0\}}
$$

즉, 보고자 하는 두 vertex $x$와 $y$에서 한 쪽은 전위가 1, 다른 한 쪽은 전위가 0이라는 Dirichlet boundary condition을 준다. 이때 시스템의 에너지를 최소를 만드는 $f$를 찾는다. 이 $f$로 인한 Dirichlet enery의 역수가 effectrive resistance이다. 

전기 회로의 합성 저항을 생각하면 effective resistance가 왜 graph위 random walk의 특성을 설명하는 변수인지 납득할 수 있다. 합성 저항은 회로의 모양(직렬, 병렬 연결)에 직접적으로 영향을 받는다. random walker는 두 지점을 잇는 경로의 다양성에 영향을 받는다. 
### $\delta$의 정체
$n$만큼 떨어진 두 지점 사이의 effective resistance는 $n$에 대해 power law로 자란다는 것이 선행 연구(Ding, Fan & Huang 2025, arXiv:2504.21378, Theorem 1.1)에서 증명되었다. 
이때, power law exponent가 $\delta$이다. 

정확한 정의는 구간 $[0,n)$ 안의 **기대 저항의 최댓값**이다 (등호가 아니라 상수 범위 안의 $\asymp$).

$$
\Lambda(n,\beta) := \max_{i,j\in[0,n)} \mathbb{E}\big[R_{[0,n)}(i,j)\big], \qquad c_1 n^{\delta(\beta)} \le \Lambda(n,\beta) \le C_1 n^{\delta(\beta)}
$$

느슨하게 쓰면

$$
R(0,n) \asymp n^{\delta}
$$

> [!warning] 수치로 $\delta$를 잴 때
> 한 realization의 $R(0,n)$이 아니라, 여러 realization에 대한 기댓값(또는 구간 내 최댓값)의 $n$-scaling으로 정의를 맞춰야 한다.

### Volume scale $\phi(r)$ and resistance scale $\varphi(r)$
이 논문에서는 effective resistance를 공간의 metric으로 쓴다. 
Long range edge를 추가하기 전, 1D lattice만 있을 때 두 vertex사이의 거리를 $n$, 
resistance metric에서 거리를 $r$이라고 하면, 
$$
r(n) \sim n^{\delta}
$$
$\phi(r)$이 $r$의 redius 범위 내부 부피라고 하면, 1차원이므로
$$
\phi(r) =n(r) = r^{1/\delta}
$$
$\varphi (r)$이 resistance scale이면 그냥 $r$에 비례한다. 
$$
\varphi(r) = r
$$
### Time scale of random walker
Random walker가 $r$거리를 휩쓰는 데 필요한 time scale을 $t(r)$이라 하면, 
$$
t(r) \sim \phi(r)\varphi(r) = r^{1+1/\delta}
$$
$t(r)$의 inverse function $\Psi(t)$, 이것은 $t$ 시간동안 random walker가 휩쓰는 length scale이다. 

### Return probability
$t$ 시간 동안 휩쓴부피는 
$$
\phi(\Psi(t)) = t^{\frac{1}{1+\delta}}
$$
따라서, 
$$
P_{2t}(0,0) \sim 1/\phi(\Psi(t)) = t^{-\frac{1}{1+\delta}}  = t^{-\frac{d_s}{2}}
$$

결론은 
$$
\boxed{d_s = \frac{2}{1+\delta}}
$$



### K-matrix 연구로의 번역 

내 notation ([[🔥MAIN - looped polymer dynamics]])으로 옮기면, $-\lambda_p = c\,p^{\gamma}$, $d_s = 2/\gamma$이므로

$$
\boxed{\;\gamma(\beta) = 1 + \delta(\beta)\;}
$$

물리적으로 $\gamma$는 **walk dimension** $d_w$ 그 자체다. mode $p$의 파장 $L\sim N/p$에 대해 relaxation time $\tau_p\sim\lvert\lambda_p\rvert^{-1}\sim L^{\gamma}$이고, Einstein relation $d_w = d_f + \zeta_R$에서 Euclidean fractal dimension $d_f=1$ (monomer는 1D contour 위에 있다), resistance exponent $\zeta_R=\delta$. 따라서

$$
\gamma = d_w = 1+\delta(\beta), \qquad d_s = \frac{2d_f}{d_w} = \frac{2}{1+\delta(\beta)}
$$

Sanity check:
- $\beta\to 0$: 저항이 1D처럼 선형, $\delta\to 1$, $\gamma\to 2$ (Rouse)
- $\beta\to\infty$: $\delta\to 0$, $\gamma\to 1$, $d_s\to 2$ (recurrence 경계)
- 그 사이에서 $\gamma\in(1,2)$가 $\beta$에 따라 연속적으로 변한다. [[🕯️critical power loop, mu beta sweep]]의 $\mu=2$ 곡선(sigmoid, $\gamma\approx 1.98\to 1.13$)과 정성적으로 일치.

**MSD로의 연결** ([[Exponents 관계식]]):

$$
\alpha_{\text{MSD}} = 1-\frac{d_s}{2} = \frac{\delta}{1+\delta}
$$

목표 $\alpha_{\text{MSD}}=0.3$ ⇒ $\delta = 3/7\approx 0.43$ ⇒ $\gamma\approx 1.43$. `critical_power_sweep_lin_n10000_0828` 기준으로 $\mu=2$ 곡선이 $\gamma\approx 1.4$를 지나는 지점은 **$\beta\approx 1$ 근방**이다. (이전에 기록한 $\beta\approx 0.6$–$0.7$보다 약간 크다. 재확인 필요.)

#### 다른 $\mu$ 패널과의 대응

Can, Croydon & Kumagai (2022)는 $(d,s)=(1,2)$를 제외한 모든 경우를 다뤘고, $s=2$에서 $d_s$가 불연속임을 지적했다. Heuristic하게 ($s\equiv\mu$):
- $s>2$: random walk가 Brownian motion으로 수렴 → $d_s=1$, $\gamma=2$, **$\beta$-independent**. sweep의 $\mu\ge 3$과 일치.
- $1<s<2$: $\alpha$-stable process ($\alpha_{\text{stable}}=s-1$)로 수렴 → $d_s = 2/(s-1)$, $\gamma = s-1$, **$\beta$-independent** (정확한 진술은 CCK 원문 확인 필요). sweep의 $\mu=1.5$가 $\beta$에 거의 무관한 것과 정합. 값은 예측 0.5 vs 관측 0.7 — $p\in[1,10]$ 창이 좁고 $N=10^4$라 finite-size로 추정.
- **$\beta$가 exponent를 결정하는 유일한 경우가 $s=2$**이다.

#### $\delta(\beta)$의 함수형태 — open problem

논문은 $\delta(\beta)\in(0,1)$의 존재만 증명하고 closed form을 주지 않는다. 접근 방향:

1. **유효저항으로 $\delta(\beta)$ 직접 측정.** $R(0,n)$은 sparse Laplacian linear system 하나를 푸는 문제라 $N=10^5$–$10^6$도 가능하다 (대각화의 RAM bottleneck 우회). 같은 realization에서 $\Lambda(n,\beta)$ vs $n$의 기울기로 $\delta(\beta)$를 재고, $1+\delta(\beta)$를 eigen-$\gamma(\beta)$ 위에 겹쳐 그리면 $\gamma=1+\delta$와 operator mismatch argument를 한 번에 검증할 수 있다. 저항은 두 walk에 공통이므로 이것이 가장 직접적인 검증이다.
2. **Real-space RG heuristic.** $s=2$가 marginal한 이유: 한 점을 가로지르는 길이 $\le L$인 long edge의 기대 개수가 $\sum_{d\le L}(d-1)\beta/d^2\approx\beta\ln L$, 즉 **로그 스케일당 $\beta$개**로 scale-invariant. 따라서 $R(2L)\approx 2R(L)\,g(\beta)$ 꼴의 재귀가 기대되고 $\delta = 1+\log_2 g(\beta)$. 작은 $\beta$에서 $g\approx 1-c\beta$ ⇒ $\delta\approx 1-c'\beta$ ⇒ $2-\gamma\propto\beta$. sweep 데이터의 $\beta\le 1$ 구간에서 $2-\gamma$: 0.18 ($\beta=0.25$), 0.35 (0.5), 0.61 (1) — 거의 선형, 기울기 $\approx 0.65$. 이 선형 regime을 first-order perturbation으로 정량화하는 것이 현실적인 analytical 목표.
3. **$\beta=1$ 근방의 knee.** 증명 안에서 길이 $m^n$ 구간이 거리 $i\cdot m^n$ 너머로 bridge되지 않을 확률이 $\lesssim i^{-\beta}$로 나오고, 그 합의 수렴 여부에 따라 $\beta<1$, $1\le\beta\le 2$, $\beta>2$로 case가 갈린다 (Lemma 3.3의 $f(\beta,m)$). Aizenman–Newman의 $\beta_c=1$이 여기서 다시 등장하는 셈. sweep의 sigmoid 중심이 $\beta\sim 1$인 것이 우연인지는 1번으로 확인.

> [!warning] 큰 $\beta$ plateau는 finite-size일 가능성
> sweep에서 $\gamma$가 $\beta\ge 2$에서 $\approx 1.13$에 plateau하는데, 이론은 $\delta\to 0$ ($\gamma\to 1$)이다. $1-\exp(-\beta/d^2)$는 $d\lesssim\sqrt{\beta}$에서 확률이 1로 포화되므로 실질 lattice spacing이 $\sqrt{\beta}$로 재정의되고, $N=10^4$에서 쓸 수 있는 scale 범위가 줄어든다. $N$을 키워서 plateau 값이 움직이는지 확인해야 한다.

## Questions & Insights

- (읽으면서 채워나갈 예정)

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.

- [[K-matrix Diagonalization (Generalized Rouse Model)]]
- [[Fractional Laplacian and Power-law Eigenspectrum]]

## 더 읽어보고 싶은 레퍼런스

- [10] J. Ding, Z. Fan and L.-J. Huang. The polynomial growth of effective resistances in one-dimensional critical long-range percolation. arXiv:2504.21378 (2025) — 이 논문의 핵심 보조정리(효 resistance의 polynomial growth)를 증명한 선행연구 → [[The polynomial growth of effective resistances in one-dimensional critical long-range percolation.pdf]]
- [7] V. H. Can, D. A. Croydon and T. Kumagai. Spectral dimension of simple random walk on a long-range percolation cluster. EJP 27 (2022) — [[Spectral dimension of simple random walk on a long-range percolation cluster.pdf]] (볼트에 이미 존재, MAIN 노트에서 "위 논문의 후속연구"로 언급됨)
- [14] T. Kumagai and J. Misumi. Heat kernel estimates for strongly recurrent random walk on random media. J. Theoret. Probab. 21(4) (2008) — 이 논문의 핵심 증명 기법(volume+resistance → heat kernel)의 출처
