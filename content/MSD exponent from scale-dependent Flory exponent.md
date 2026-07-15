---
title: MSD exponent from scale-dependent Flory exponent
date: "2026-06-13"
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study
---

# MSD exponent from scale-dependent Flory exponent

## Overview

Polymer 안 monomer 하나의 self-diffusion에서, mean-square displacement (MSD) $\Delta r^2(\tau)$의 anomalous exponent $\alpha$가 static scaling exponent (Flory exponent) $\nu$와 어떤 관계를 갖는지 정리한다. 특히 $\nu$가 contour distance $n$에 따라 달라지는 경우(SBS 모델처럼 binder가 만든 domain crossover가 있는 경우), MSD에도 crossover가 생기며 그 crossover 위치 $\tau_c$를 $\nu$와 정적 crossover $n_c$로부터 예측하는 것이 목표다.

핵심 결과는 Tamm et al. (2015)의 Rouse-type scaling ansatz를 일반 $\nu$로 확장한 것이다.

$$
\alpha = \frac{2\nu}{1 + 2\nu}
\tag{1}
$$

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\Delta r^2(\tau)$ | monomer MSD, lag time $\tau$ |
| $\alpha$ | MSD anomalous exponent, $\Delta r^2 \sim \tau^\alpha$ |
| $\nu$ | Flory exponent, $R(n) \sim n^\nu$ |
| $R(n)$ | contour distance $n$만큼 떨어진 두 bead의 mean spatial distance |
| $\delta n(\tau)$ | 시간 $\tau$ 동안 함께 움직이는 덩어리(blob) 속 monomer 수 |
| $D_0$ | microscopic diffusion constant, $D_0 = k_B T / \gamma$ |
| $b$ | monomer size |
| $n_c$ | static crossover ($\nu$가 $\nu_1 \to \nu_2$로 바뀌는 contour distance) |
| $\tau_c$ | dynamic crossover ($\alpha$가 바뀌는 lag time) |
| $\tau_0, \tau_N$ | 단기 Fickian / 장기 Fickian 경계 시간 |
| $\tau(n)$ | relaxation time of a subchain of $n$ monomers |
| $z_n$ | relaxation time exponent (contour), $\tau \sim n^{z_n}$ |
| $z_R$ | relaxation time exponent (spatial), $\tau \sim R^{z_R}$ |
| $d_f$ | fractal dimension of the chain conformation, $d_f = 1/\nu$ |
| $\rho(n)$ | monomer density within a subchain of size $R(n)$ |
| $\beta$ | surface-friction exponent, $A \sim [\delta n]^{\beta}$ |

## Key Points

### 1. Background — 세 가지 시간 영역

Monomer dynamics (Langevin, overdamped 가정):

$$
m\ddot{x} = -\gamma \dot{x} + \xi(t)
\tag{2}
$$

Polymer 속 monomer는 connectivity와 potential을 추가로 느낀다:

$$
m\ddot{x} = -\gamma \dot{x} + \xi(t) - \nabla\phi
\tag{3}
$$

여기서 $\xi(t)$는 thermal noise이며 delta-correlated:

$$
\langle \xi(t_1)\,\xi(t_2) \rangle = \delta(t_1 - t_2)
\tag{4}
$$

세 가지 시간 영역에서 MSD는 다음과 같이 거동한다.

$$
\Delta r^2(\tau) \simeq
\begin{cases}
 D_0 \tau \qquad (\tau \ll \tau_0) \\
k_\alpha \tau^\alpha \qquad (\tau_0 \ll \tau < \tau_c) \\
k_\beta \tau^\beta \qquad (\tau_c < \tau \ll \tau_N)\\
\frac{D_0}{N}\tau \qquad (\tau_N \ll \tau)
\end{cases}
$$

- **단기** ($\tau \ll \tau_0$): connectivity가 느껴지기 전 → 자유 monomer의 Fickian diffusion, $D_0 = k_B T/\gamma$.
- **장기** ($\tau_N \ll \tau$): polymer 전체가 하나의 입자처럼 움직이는 center-of-mass Fickian diffusion, diffusivity $D_0/N$.
- **중간** ($\tau_0 \ll \tau \ll \tau_N$): polymer의 internal structure(potential)에 의한 anomalous diffusion. $\nu$가 $n_c$에서 $\nu_1 \to \nu_2$로 바뀌면 이 영역이 $\tau_c$에서 다시 둘로 갈라진다.

정적 입력은 mean spatial distance의 scaling이다.

$$
R(n) \sim n^{\nu(n)}, \qquad
\nu(n) \sim
\begin{cases}
\nu_1 & (n \le n_c) \\
\nu_2 & (n > n_c)
\end{cases}
\tag{9}
$$

### 2. Scaling ansatz (Tamm et al. 2015)

**Ansatz 1 — connectivity.** 시간 $\tau$ 동안 monomer가 이동할 때 함께 움직이는 덩어리의 크기 $\delta n(\tau)$. 그 덩어리의 지름과 같은 scale로 monomer가 이동할 수 있으므로:

$$
 \Delta r^2(\tau)  \sim b^2\,[\delta n(\tau)]^{2\nu}
\tag{10}
$$

**Ansatz 2 — collective diffusion.** $\tau$ 동안 monomer는 $\delta n(\tau)$ 덩어리와 함께 움직이고, 그 덩어리의 effective diffusion constant는 monomer 수에 반비례한다($D \sim D_0/\delta n$, independent friction 가정):

$$
\Delta r^2(\tau) \sim \frac{D_0}{\delta n(\tau)}\,\tau
\tag{11}
$$

### 3. Exponent 유도

(10)과 (11)에서 $\Delta r^2$를 소거하면 $b^2[\delta n]^{2\nu} \sim D_0\tau/\delta n$, 따라서:

$$
[\delta n(\tau)]^{2\nu + 1} \sim \frac{D_0}{b^2}\,\tau
\quad\Rightarrow\quad
\delta n(\tau) \sim \left(\frac{D_0}{b^2}\right)^{\frac{1}{2\nu+1}} \tau^{\frac{1}{2\nu+1}}
\tag{12}
$$

이를 (10)에 다시 넣으면:

$$
\Delta r^2(\tau) \sim b^2 [\delta n]^{2\nu} \sim b^{\frac{2}{2\nu+1}}\, D_0^{\frac{2\nu}{2\nu+1}}\, \tau^{\frac{2\nu}{2\nu+1}}
\tag{13}
$$

따라서 exponent와 prefactor는:

$$
\alpha = \frac{2\nu}{1 + 2\nu}, \qquad
K_\alpha \sim b^{\frac{2}{1+2\nu}}\, D_0^{\frac{2\nu}{1+2\nu}} = b^{\frac{2}{1+2\nu}}\, D_0^{\alpha}
\tag{14}
$$

**검산:** $\nu = 1/3$ (fractal globule) → $\alpha = (2/3)/(5/3) = 2/5$ (Tamm et al. 결과와 일치). $\nu = 1/2$ (ideal/Rouse) → $\alpha = 1/2$ (Rouse 결과와 일치).

### 4. Crossover 위치 $\tau_c$

$\delta n(\tau_c) = n_c$를 만족하는 $\tau$가 바로 $\tau_c$다. 
Ansatz 1에 적용하면 
$$
\Delta r^2(\tau_c)  \sim b^2\,[\delta n(\tau_c)]^{2\nu} = b^2\,[n_c]^{2\nu}
$$

crossover 이전($n < n_c$)에는 $\nu_1$이 적용되므로, $\Delta r^2(\tau_c) = k_\alpha \tau^\alpha$
$$
 k_\alpha \tau_c^{\alpha}\sim b^2 n_c^{2\nu_1} 
\quad\Rightarrow\quad
\tau_c  \sim n_c^{\frac{2\nu_1}{\alpha}} \;\; \text{(prefactor 무시한 scaling)}
\tag{15}
$$

Ansatz 2는 독립적으로 $\tau_c$를 주지 는 못하고, 식 (12)의 $\delta n(\tau)$ 관계를 재확인해준다. $\delta n(\tau_c) = n_c$를 Ansatz 2에 직접 넣으면 $k_\alpha \tau_c^\alpha \sim \frac{D_0}{n_c}\tau_c$이고, 여기에 식 (12) $n_c \sim \tau_c^{1/(1+2\nu_1)}$을 대입하면 우변 지수가 $1 - \frac{1}{1+2\nu_1} = \frac{2\nu_1}{1+2\nu_1} = \alpha$가 되어 양변이 $\tau_c^\alpha$로 **항등식**이 된다.

$$
k_\alpha \tau_c^\alpha \sim \frac{D_0}{n_c}\tau_c
\;\xrightarrow{\,n_c \sim \tau_c^{1/(1+2\nu_1)}\,}\;
\tau_c^{\alpha} \sim \tau_c^{\,1 - \frac{1}{1+2\nu_1}} = \tau_c^{\alpha}
\tag{16}
$$

즉 Ansatz 2는 $\delta n \sim \tau^{1/(1+2\nu_1)}$ (식 12)와 일관됨을 확인해줄 뿐, $\tau_c$ 자체는 **식 (15)** (또는 동등하게 식 12에 $\delta n = n_c$ 대입)에서 결정된다. 두 ansatz를 결합하면 결론적으로 $\tau_c$는 $n_c$와 $\nu_1$에 의해 다음 관계식으로 결정된다.

$$
\tau_c  \sim n_c^{1+2\nu_1}
$$



### 5. 연속적으로 변하는 $\nu$ (continuous crossover)

앞 절은 $\nu$가 한 점 $n_c$에서 $\nu_1 \to \nu_2$로 **불연속**하게 바뀌는 경우다. 실제 $R^2(s)$ 측정 curve는 거의 항상 **부드러운 crossover**(한 decade 이상 퍼짐)를 보이므로, $\nu$가 $n$의 연속 함수인 일반형이 더 현실적이다. 핵심은 식 (12)의 유도에서 $\nu$가 상수라고 가정한 적이 없다는 점이다 — connectivity와 collective diffusion 논증은 둘 다 **그 순간 움직이는 조각 길이 $\delta n$에서의 국소 통계**만 쓴다.

**Local logarithmic slope**를 정적·동적 양쪽에서 정의한다.

$$
\nu_{\text{loc}}(n) \equiv \left.\frac{1}{2}\frac{d\ln R^2}{d\ln n}\right|_n, \qquad
\alpha_{\text{loc}}(\tau) \equiv \left.\frac{d\ln \Delta r^2}{d\ln \tau}\right|_\tau
\tag{18}
$$

주의: $R^2 = n^{2\nu(n)}$처럼 지수에 함수를 직접 넣은 표현을 미분하면 $\nu'(n)\ln n$ 항이 추가로 생긴다. 따라서 닫힌 형태 대신 **측정된 $R^2$의 local slope 자체**를 $\nu_{\text{loc}}(n)$로 다루는 것이 안전하다.

#### 유도 (로그 미분 + adiabatic 근사)

두 ansatz를 국소화해 다시 쓴다. $\nu$를 상수가 아니라 그 scale에서의 국소값 $\nu_{\text{loc}}(\delta n)$으로 둔다.

$$
\Delta r^2(\tau) \sim b^2\,[\delta n(\tau)]^{2\nu_{\text{loc}}(\delta n)}
\tag{A}
$$

$$
\Delta r^2(\tau) \sim \frac{D_0}{\delta n(\tau)}\,\tau
\tag{B}
$$

상수 $\nu$일 때는 (A)와 (B)를 대수적으로 풀어 $\delta n \sim \tau^{1/(1+2\nu)}$를 얻었다. 그러나 $\nu_{\text{loc}}$가 $\delta n$의 함수가 되면 (A)의 지수에 $\delta n$이 다시 들어가 단순 대수로는 풀리지 않는다. power-law 구조의 기울기(= exponent)는 **로그를 취한 뒤 미분**할 때 가장 깨끗하게 드러나므로(log-log plot의 국소 기울기가 곧 측정량이다) 로그 미분으로 넘어간다.

**단계 1 — (B)의 로그 미분.** 양변에 로그를 취하면 
$$
\ln \Delta r^2 = \ln D_0 + \ln\tau - \ln\delta n
$$ 
$\ln\tau$로 미분하면($D_0$는 상수):

$$
\frac{d\ln\Delta r^2}{d\ln\tau} = 1 - \frac{d\ln\delta n}{d\ln\tau}
\tag{B'}
$$

좌변은 정의상 $\alpha_{\text{loc}}$. 변환율을 $z(\tau) \equiv \dfrac{d\ln\delta n}{d\ln\tau}$로 정의하면:

$$
\alpha_{\text{loc}} = 1 - z
\tag{B''}
$$

**단계 2 — (A)의 로그 미분.** 양변에 로그를 취하면 
$$
\ln\Delta r^2 = 2\ln b + 2\,\nu_{\text{loc}}(\delta n)\cdot\ln\delta n
$$

여기서 $\nu_{\text{loc}}$ 자체가 $\delta n$의 함수이므로 $\ln\tau$로 미분할 때 **곱미분(product rule)** 을 써야 한다:

$$
\alpha_{\text{loc}} = 2\nu_{\text{loc}}\,z + 2\ln\delta n \cdot \frac{d\nu_{\text{loc}}}{d\ln\tau}
\tag{A'}
$$

오른쪽 둘째 항은 상수 $\nu$일 때는 없던 항이다($\nu' = 0$). 이 항이 살아 있으면 식이 닫히지 않는다.

**단계 3 — adiabatic 근사.** $\nu_{\text{loc}}$가 scale에 따라 천천히 변하면 $\dfrac{d\nu_{\text{loc}}}{d\ln\tau}$가 작아, 둘째 항을 첫째 항과 비교한 비율

$$
\frac{2\ln\delta n \cdot \nu_{\text{loc}}'}{2\nu_{\text{loc}}\, z} \sim \frac{\ln\delta n \cdot \nu_{\text{loc}}'}{\nu_{\text{loc}}\, z}
$$

가 작다. 이때 둘째 항을 버리면:

$$
\alpha_{\text{loc}} \approx 2\nu_{\text{loc}}\, z
\tag{A''}
$$

이것이 상수 $\nu$ 유도의 국소 버전이며, "각 순간 $\nu$가 거의 상수처럼 행동한다"는 가정에 해당한다.

**단계 4 — 연립.** (A'')와 (B'')에서 $\alpha_{\text{loc}}$를 소거하면 $2\nu_{\text{loc}}\,z = 1 - z$, 즉 $z(1 + 2\nu_{\text{loc}}) = 1$. 따라서 변환식 (20)을 얻고:

$$
\frac{d\ln \delta n}{d\ln \tau} = z = \frac{1}{1 + 2\,\nu_{\text{loc}}(\delta n)}
\tag{20}
$$

이를 (A'')에 다시 넣으면 exponent 관계식 (19)가 나온다:

$$
\alpha_{\text{loc}}(\tau) = 2\nu_{\text{loc}}\cdot\frac{1}{1+2\nu_{\text{loc}}} = \frac{2\,\nu_{\text{loc}}\big(\delta n(\tau)\big)}{1 + 2\,\nu_{\text{loc}}\big(\delta n(\tau)\big)}
\tag{19}
$$

형태가 상수 버전 식 (1)과 글자 그대로 같다($\nu \to \nu_{\text{loc}}(\delta n(\tau))$로 치환된 것뿐). 이것이 "깨끗한 결과"의 의미다.

#### ODE로서의 구조와 풀이

식 (19)는 "지금 $\delta n$을 알면 $\alpha$를 안다"는 **대수 관계**다. 그러나 우리가 원하는 것은 $\tau$의 함수로서의 $\alpha$이고, 그러려면 $\delta n(\tau)$가 필요하다. 그것을 주는 것이 식 (20)이며, 우변 $\frac{1}{1+2\nu_{\text{loc}}(\delta n)}$이 미지함수 $\delta n$에 의존하므로 **1차 ODE**다. $\nu_{\text{loc}}$가 상수면 우변이 상수라 바로 적분되어 $\delta n \sim \tau^{1/(1+2\nu)}$로 돌아간다(식 12). $\nu_{\text{loc}}$가 변하면 변수분리형 ODE가 되어 닫힌 형태가 안 나올 수 있으나 수치 적분이면 충분하다. Sharp crossover는 $\nu_{\text{loc}}(n)$가 계단 함수인 특수 극한이며, 연속 버전이 일반형이다.

수치 적분은 $u \equiv \ln\delta n$, $w \equiv \ln\tau$로 두면 표준형이 된다:

$$
\frac{du}{dw} = \frac{1}{1 + 2\,\nu_{\text{loc}}(e^{u})}
\tag{20'}
$$

초기조건(예: $\tau_0$에서 $\delta n \approx 1$, monomer 하나)을 주고 RK4 등으로 적분하면 $\delta n(\tau)$를 얻는다. $\nu_{\text{loc}}$가 변하면 닫힌 형태가 안 나올 수 있으나 **수치 적분이면 충분**하다. Sharp crossover는 $\nu_{\text{loc}}(n)$가 계단 함수인 특수 극한이며, 연속 버전이 일반형이다. $\nu_{\text{loc}}$가 변하면 닫힌 형태가 안 나올 수 있으나 **수치 적분이면 충분**하다. Sharp crossover는 $\nu_{\text{loc}}(n)$가 계단 함수인 특수 극한이며, 연속 버전이 일반형이다.

**검증 절차 (전체 curve 비교).** sharp 버전의 "세 축 한 점 확인"이 "curve 모양 대조"로 바뀐다.

1. $R^2(n)$에서 $\nu_{\text{loc}}(n)$를 수치 미분으로 추출 (연속 함수).
2. ODE (20)을 수치 적분해 $\delta n(\tau)$를 얻음.
3. (19)로 예측 curve $\alpha_{\text{pred}}(\tau)$ 생성.
4. 측정한 $\alpha_{\text{loc}}(\tau)$와 겹쳐 비교. **fitting 파라미터 없이 정적 데이터만으로 동적 curve를 예측**하는 셈이라 검증력이 높다.

> [!note] AI 보충 (논문 외 내용) — adiabatic 조건
> *아래는 원 논문에 없는, Glia(AI)가 보충한 단서다.*
>
> 위 ODE 접근은 $\nu_{\text{loc}}$가 $\delta n$에 대해 충분히 천천히 변할 때(adiabatic)에 가장 잘 맞는다. $R^2(n)$이 좁은 구간에서 급격히 꺾이면 local power law 가정 자체가 그 구간에서 깨진다. SBS의 부드러운 crossover는 보통 이 조건을 잘 만족한다.

### 6. Relaxation time exponent와 $\alpha$의 관계

식 (12)의 $\delta n(\tau)$ 를 **뒤집으면** 그것이 바로 길이 $n$ 인 subchain의 **relaxation time** $\tau(n)$ 이다. 같은 mapping을 반대 방향에서 읽는 것일 뿐이지만, 문헌에서는 dynamic exponent 로 따로 불리므로 관계식을 명시해 둔다.

#### 유도 (Rouse-type)

길이 $n$ 인 subchain을 하나의 Rouse mode로 보면:

- friction: $\zeta_n \sim n\,\zeta$ (monomer 수에 비례)
- effective spring constant: $k_n \sim \dfrac{k_B T}{R(n)^2} \sim \dfrac{k_B T}{b^2 n^{2\nu}}$ (entropic spring)

$$
\tau(n) \sim \frac{\zeta_n}{k_n} \sim \frac{n\,\zeta\, b^2\, n^{2\nu}}{k_B T} \sim \frac{b^2}{D_0}\, n^{1 + 2\nu}
\tag{21}
$$

이는 식 (12)의 $[\delta n]^{2\nu+1} \sim (D_0/b^2)\tau$ 와 정확히 동치이다.

#### 두 가지 dynamic exponent 관습

문헌에따라 $\tau$ 를 $n$ 으로 재는지 $R$ 로 재는지가 다르므로, **두 exponent를 반드시 구분할 것.**

**(a) Contour 기준** $\tau \sim n^{z_n}$:

$$
z_n \equiv \frac{d\ln\tau}{d\ln n} = 1 + 2\nu
\tag{22}
$$

**(b) Spatial 기준** $\tau \sim R^{z_R}$: $R \sim n^{\nu}$ 이므로 $z_R = z_n/\nu$.

$$
z_R \equiv \frac{d\ln\tau}{d\ln R} = \frac{1 + 2\nu}{\nu} = 2 + \frac{1}{\nu} = 2 + d_f
\tag{23}
$$

여기서 $d_f = 1/\nu$ 는 chain conformation의 fractal dimension이다.

#### $\alpha$ 와의 관계식

식 (1)과 (22), (23)을 결합하면 $\nu$ 를 소거한 깔끔한 관계가 나온다.

$$
\alpha = \frac{2\nu}{1+2\nu} = \frac{z_n - 1}{z_n} = 1 - \frac{1}{z_n}
\tag{24}
$$

$$
\alpha = \frac{2\nu}{1+2\nu} = \frac{2}{z_R}
\tag{25}
$$

역으로 풀면 $z_n = \dfrac{1}{1-\alpha}$, $z_R = \dfrac{2}{\alpha}$.

**식 (25)가 더 근본적이다.** "monomer가 자신의 blob 크기만큼 움직이는 데 blob의 relaxation time이 걸린다"는 진술을 그대로 적은 것이므로, Rouse ansatz 밖에서도 성립한다. 예: **Zimm dynamics**(hydrodynamic interaction 포함)에서는 $\tau \sim \eta R^3/k_BT$, 즉 $z_R = 3$ (대략 $\nu$ 무관) 이므로 식 (25)는 즉시 $\alpha = 2/3$ 를 줌 — 알려진 Zimm monomer subdiffusion 결과와 일치한다.

#### 검산 표

| system | $\nu$ | $d_f = 1/\nu$ | $z_n = 1+2\nu$ | $z_R = 2 + 1/\nu$ | $\alpha = 2/z_R$ |
|---|---|---|---|---|---|
| ideal chain (Rouse) | $1/2$ | $2$ | $2$ | $4$ | $1/2$ |
| SAW (Rouse) | $0.588$ | $1.70$ | $2.18$ | $3.70$ | $0.54$ |
| fractal globule | $1/3$ | $3$ | $5/3$ | $5$ | $2/5$ |
| confinement | $\to 0$ | — | $\to 1$ | $\to \infty$ | $\to 0$ (plateau) |
| Zimm (any $\nu$) | — | — | — | $3$ | $2/3$ |

맨 아랫 줄이 중요하다: confinement 극한에서 $z_R \to \infty$ (사슬이 아무리 길어져도 크기가 안 커지므로)이고, 식 (25)가 자동으로 $\alpha \to 0$, 즉 MSD plateau를 준다.

#### Scale-dependent 버전

§5의 adiabatic 근사 아래에서는 이 관계들이 모두 국소화된다. 식 (20)의 $z(\tau) = d\ln\delta n/d\ln\tau$ 는 정확히 $z_n$ 의 **역수**임에 주의할 것.

$$
z(\tau) = \frac{d\ln\delta n}{d\ln\tau} = \frac{1}{z_n(\delta n)} = \frac{1}{1 + 2\nu_{\text{loc}}(\delta n)}
\tag{26}
$$

따라서 식 (B''), $\alpha_{\text{loc}} = 1 - z$, 는 식 (24)의 국소 버전 $\alpha_{\text{loc}} = 1 - 1/z_n(\delta n)$ 과 같은 식이다. 즉 §5의 ODE는 **"scale마다 달라지는 relaxation time exponent $z_n(n)$ 을 시간축으로 적분하는 과정"** 으로 재해석된다. 등가적으로 $\tau(n)$ 을 직접 적분해도 된다:

$$
\ln\tau(n) = \int^{\ln n} \big[\,1 + 2\nu_{\text{loc}}(n')\,\big]\, d\ln n'
\tag{27}
$$

이쪽이 수치적으로 더 안정적일 수 있다 — $\nu_{\text{loc}}(n)$ 을 **직접 적분**해 $\tau(n)$ 을 얻고, 그것을 수치적으로 역함수화해 $\delta n(\tau)$ 를 얻으면 ODE 적분기의 stiffness 문제를 피할 수 있다. 둘은 수학적으로 동치이므로 **교차검증용으로 둘 다 구현해 비교해볼 것.**

### 7. $\nu$ 의 물리적 범위 — 3차원에서 $\nu < 1/3$ 은 가능한가?

$\nu(n)$ 을 자유함수로 다루기 시작하면 바로 따라오는 질문이다. 답은 **"asymptotic exponent로는 불가능, local exponent $\nu(n)$ 으로는 가능"** 이며, 이 구분이 본 framework의 실제 적용에서 결정적이다.

#### 하한 $\nu \geq 1/3$ 의 근거

**(a) 기하학적.** $\nu < 1/3 \Rightarrow d_f = 1/\nu > 3$. 그러나 $\mathbb{R}^3$ 의 부분집합이 갖는 Hausdorff dimension은 최대 $3$ 이므로, embedding 차원을 초과하는 fractal dimension은 정의상 존재할 수 없다.

**(b) 물리적 (maximal packing).** monomer가 각기 유한 부피 $b^3$ 를 차지하면(excluded volume), $N$ 개가 크기 $R$ 인 영역에 들어가려면:

$$
R^3 \gtrsim N b^3 \quad\Longrightarrow\quad R \gtrsim b\, N^{1/3}
\tag{28}
$$

즉 $\nu = 1/3$ 은 **"더 이상 압축할 수 없는 가장 조밀한 상태"**(compact globule)이고, 그것이 하한을 강제한다. equilibrium globule과 fractal globule은 **둘 다** 전역적으로 $\nu = 1/3$ 이며, 둘의 차이는 $\nu$ 가 아니라 topology(knottedness)에 있다.

종합하면 3차원 asymptotic exponent는 $\tfrac{1}{3} \leq \nu \leq 1$ 에 갇힌다 (상한 $\nu = 1$ 은 rigid rod).

#### 그러나 $\nu_{\text{loc}}(n) < 1/3$ 은 가능하다

유한한 $n$ 구간에서의 local slope는 $1/3$ 보다 작아질 수 있다. density를 보면 왜 모순이 아닌지 즉시 보인다.

$$
\rho(n) \sim \frac{n}{R(n)^3} \sim n^{\,1 - 3\nu_{\text{loc}}}
\tag{29}
$$

$\nu_{\text{loc}} < 1/3$ 이면 $\rho(n)$ 이 $n$ 에 따라 **증가**한다. 이것은 금지된 것이 아니라 단지 **아직 maximal packing에 도달하지 않았다**는 뜻 — 사슬이 정해진 영역을 점점 채워가는 중이다. 다만 density에는 유한한 상한이 있으므로 **이 구간은 반드시 유한해야 하고**, 포화하는 순간 $\nu_{\text{loc}}$ 은 $1/3$ 으로 되돌아가야 한다.

극단적 예가 **confinement**다. 사슬이 크기 $R_0$ 의 cavity(chromosome territory, TAD)에 갇히면 $n$ 이 커져도 $R(n) \to R_0$ 로 saturate하고, 그 구간의 local exponent는 $\nu_{\text{loc}}(n) \to 0$ 이 된다. Hi-C의 $P(s)$ plateau가 정확히 이 신호다.

#### 정리와 framework에의 함의

| | 성립 여부 | 이유 |
|---|---|---|
| asymptotic $\nu < 1/3$ ($N\to\infty$) | **불가능** | $d_f \leq d$, maximal packing |
| local $\nu_{\text{loc}}(n) < 1/3$ (유한 구간) | **가능** | density가 상한까지 증가하는 transient |
| local $\nu_{\text{loc}}(n) \to 0$ | **가능** | confinement / saturation (TAD, territory) |

> [!warning] 구현 상의 주의
> $\nu \in [1/3, 1]$ 제약은 **asymptotic 값에만** 걸어야 하며, $\nu_{\text{loc}}(n)$ 곱선 전체에 하드 제약으로 걸면 **confinement 신호를 인위적으로 지워버린다.** $R^2(n)$ fitting이나 ODE 구현에서 $\nu \geq 1/3$ 을 clamp하고 있지 않은지 확인할 것.

식 (1)을 통해 이 구간은 $\alpha < 2/5$ 인 시간 영역을 낳는다. 즉 **$\alpha$ 가 fractal globule 값 $2/5$ 보다 작게 관측되는 것은 이상 신호가 아니라 confinement의 자연스러운 귀결**이며, SBS에서 binder domain이 사슬을 가두는 경우 예상되는 거동이다.

## Questions & Insights

- Q: 단기($\tau \ll \tau_0$)에서 polymer dynamics가 monomer dynamics와 같아지는 근거는? (식 3 → 식 5)
  A: drift $-\nabla\phi_0$가 사라져서가 아니라, **MSD(분산)에 drift가 기여하지 않기 때문**. 짧은 $\tau$ 동안 $-\nabla\phi$는 거의 상수($-\nabla\phi_0$)로 볼 수 있고, 입자는 그 상수 drift를 탄 brownian motion을 한다. drift는 평균 변위 $\langle \Delta r \rangle$를 결정하지만 MSD의 anomalous 성분이 아니라 $\langle \Delta r \rangle^2 \sim \tau^2$인 ballistic 항으로 들어간다. 짧은 시간에서는 이 $\tau^2$ 항이 diffusive $\tau$ 항보다 작아 무시되므로, 분산 $\text{Var}(\Delta r) = \langle \Delta r^2\rangle - \langle\Delta r\rangle^2 \simeq D_0\tau$가 자유 monomer와 같아진다. ("time/ensemble average하면 drift가 0이 된다"는 추측은 정확히는 틀림 — drift 자체는 0이 아니고, 단지 MSD 스케일링을 지배하지 않는 것.)

- Q: $k_\alpha$의 정확한 형태는? (손계산에서 $k_\alpha = b^{1/2\nu}D_0$가 나와야 하는지 의문)
  A: 정확한 답은 $k_\alpha \sim b^{\frac{2}{1+2\nu}} D_0^{\alpha}$ (식 14). $D_0$의 지수가 $1$이 아니라 $\alpha = \frac{2\nu}{1+2\nu}$인 것이 핵심. 차원 분석으로 교차검증됨: $[D_0]=\text{length}^2/\text{time}$이므로 $[D_0^\alpha \tau^\alpha]$의 시간 차원이 상쇄되고, 남은 길이 차원 $\frac{2}{1+2\nu} + \frac{4\nu}{1+2\nu} = 2$가 $[\Delta r^2]$와 일치. $b^{1/2\nu}D_0^1$ 형태는 차원이 맞지 않는다($\tau^{1-\alpha}$가 남음).

## Related Concepts

- [[📑 Journal reading - Anomalous Diffusion in Fractal Globules]]
- [[Fractional Brownian Motion]]
- [[Physical properties of DNA]]
- [[Contact probability exponent and polymer scaling]]

## References

- M. V. Tamm, L. I. Nazarov, A. A. Gavrilov, A. V. Chertovich, "Anomalous diffusion in fractal globules", Phys. Rev. Lett. 114, 178102 (2015). [DOI](https://doi.org/10.1103/PhysRevLett.114.178102)
- 위 논문의 Supplementary Information (Sec. I DPD, Sec. III hydrodynamic interactions, Sec. V first passage time)

## Notes from Claude

Claude's explanations and insights on this topic:

손글씨 유도(발표 자료)를 PDF 본문 및 supplementary와 대조해 검증한 결과, **exponent 유도(식 1, 14)와 crossover 논리는 모두 정확**하다. 두 군데 빨간 글씨 의문점은 위 Questions & Insights에 해소해 두었다.

**Surface-friction 보정 (발표에서 질문 들어올 수 있는 지점).** 위 유도는 independent friction($D \sim D_0/\delta n$, 부피 ∝ monomer 수)을 가정한다. Supplementary Sec. III에서는 compact domain의 경우 **표면 monomer만 friction을 받는다**고 보아 $D \sim D_0/A(\tau)$, $A \sim [\delta n]^\beta$ ($0.91 < \beta < 1$)로 수정한다. 이 경우 일반식은

$$
\alpha = \frac{2\nu}{1 + \beta \cdot 2\nu}
\tag{17}
$$

가 된다 (식 1은 $\beta = 1$인 특수 경우). $\nu = 1/3,\ \beta=1$이면 $\alpha = 2/5$로 동일.

> [!note] AI 보충 (논문 외 내용) — SBS 시뮬레이션 해석 시 주의점
> *아래는 원 논문에 없는, Glia(AI)가 보충한 적용 관점이다.*
>
> 1. **Off-lattice MD vs lattice/DPD.** 본 LAMMPS 작업은 off-lattice MD이므로 $\alpha$의 절대값을 Tamm et al.에서 그대로 가져오면 안 된다. 빌려오는 것은 scaling **구조**(crossover의 존재와 방향), 즉 $\alpha_1 = \frac{2\nu_1}{1+2\nu_1} \to \alpha_2 = \frac{2\nu_2}{1+2\nu_2}$로 꺾인다는 정성적 예측이다.
> 2. **SAW → globular crossover의 방향.** $\nu_1 \approx 0.588$ (small scale, SAW) → $\nu_2 \to 1/3$ (large scale, binder domain)이면 $\alpha$는 $\approx 0.54 \to 0.40$으로 **감소**한다. MSD log-log plot에서 기울기가 점점 완만해지는 것으로 나타난다.
> 3. **Binder kinetics.** 식 12의 $\delta n \sim \tau^{1/(2\nu+1)}$ 변환은 binder가 준정적이라 chain 통계를 고정한다는 가정 위에 선다. binder on/off 시간이 $\tau_c$와 비슷하면 이 mapping이 깨질 수 있고, 그것이 오히려 SBS 고유의 흥미로운 신호가 된다.
> 4. **검증 절차.** ① $R^2(s)$의 local slope로 $\nu_{\text{loc}}(s)$와 $n_c$ 확정 → ② MSD local slope $\alpha_{\text{loc}}(\tau)$ 측정 → ③ 세 가지 판별법(시간/변위/slope 축)으로 $\tau_c$ 대응 확인.
