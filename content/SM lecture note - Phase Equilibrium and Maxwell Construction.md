---
title: SM lecture note - Phase Equilibrium and Maxwell Construction
date: "2026-10-29"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Statistical Mechanics|Statistical Mechanics]]강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium|4th week - Gibbs-Duhem Relation and Conditions for Equilibrium]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

5th week

## Phase equilibrium

- **$r$-component fluid system**: $r$ 종류의 molecule이 함께 있다.
- **$\nu$-phase coexist in EQ**


> [!question] How many **independent intensive variables** are necessary to describe this system?

EQ에서 coexist 한다면,
- subscript는 index of molecule species $(1, 2, \cdots, r)$
- superscript는 index of phase $(1, 2, \cdots, \nu)$

**Condition of Equilibrium**
1. 모든 phase들은 같은 온도를 가진다.
$$
T^1 = T^2 = \cdots = T^\nu = T
$$
2. 모든 phase들은 같은 압력을 가진다.
$$
P^1 = P^2 = \cdots = P^\nu = P
$$
3. 모든 phase들은 한 종류의 molecule에 대해 같은 chemical potential을 가진다. 
$$
\mu_i^1 = \mu_i^2 = \cdots = \mu_i^\nu = \mu_i
$$
그래야 다른 phase 사이에서 입자 이동의 net flux가 생기지 않을 테니까. 


특정 phase에서 한 molecule species의 chemical potential은 그 phase에 관여하는 다른 variable의 함수이다.

$$
\mu_i^\alpha(T, P, y_1^\alpha, y_2^\alpha, \cdots, y_r^\alpha)
$$

$y_j^\alpha$ = fraction of $j$-th molecule species in the $\alpha$-th phase
$N_i^\alpha$ = $\alpha$ phase에 있는 $i$ molecule species인 분자의 개수
$$
y_i^\alpha = \frac{N_i^\alpha}{\sum_{j=1}^{r} N_j^\alpha}
$$

### Gibbs phase rule

Condition of equilibrium 3에 의해,

$$
\mu_i^\alpha(T, P, y_1^{(\alpha)}, \cdots, y_r^{(\alpha)}) = \mu_i^\beta(T, P, y_1^{(\beta)}, \cdots, y_r^{(\beta)})
$$

- 이런 equation이 몇 개나 있나? → **$r(\nu - 1)$개**
- 방정식에 들어가는 전체 변수는 몇 개인가? → (온도 1) + (압력 1) + (phase 개수 $\nu$) × (molecule fraction $r - 1$) = **$2 + \nu(r - 1)$**

Number of independent intensive variables:

$$
f = 2 + r - \nu
$$

→ 이것이 **thermodynamic degree of freedom**이다.

**예시**

- **Homogeneous (1 molecule species, 1 phase) ideal gas system** ⇒ $f = 2$ $(T, P)$

- **Salty water system** (2 molecule species: 물 + 소금, 1 phase) ⇒ $f = 3$ $(T, P, y_s)$, $y_s$ = salt concentration

- **Water with its saturated vapor** (1 molecule species, 2 phases) ⇒ $f = 1$ $(T)$
	- 이 경우 증기압이 $T$에 의존하기 때문이다.
	- 한 온도에서, 두 phase가 공존하도록 허용하는 압력은 단 하나.
	- ![[Pasted image 20261030133054.png]]


- **Water & Ice & Vapor co-exist** (1 molecule species, 3 phases) ⇒ $f = 0$
	- 삼중점. 이것을 가능케 하는 온도와 압력이 단 하나.
![[Pasted image 20261030134049.png|451]]

### Phase diagram
![[Pasted image 20261030142639.png]]

- **End of the coexistence line** → **Critical point**

Related homework - [[SM HW4-1 Phase Diagram of Water|HW4-1 Phase Diagram of Water]]

그러나, coexistence line에서 두 phase의 비율은 예측할 수 없다. Thermodynamic process에 의존하기 때문.
![[Pasted image 20261030134139.png]]

**Beyond critical point** → **supercritical fluid**

**$P$–$V$ diagram의 세 경우**
 **$T < T_c$**: 상전이가 일어나는 구간. P-V plane에 두 가지 상이 공존하는 영역이 있다. 이 안에서는 압력이 일정하게 유지된 채로 부피가 변화한다. 이 영역을 벗어나면 다시 압력이 변화하기 시작한다. 
 
**$T = T_c$**: 등온선이 공존 영역의 꼭대기를 스치며, **변곡점의 기울기가 0**.

**$T > T_c$**: supercritical fluid. **변곡점 없음.**

![[Pasted image 20261030133450.png]]


Related homework - [[SM HW4-2 PV Isotherms of Water-Vapor Fluid|HW4-2 PV Isotherms of Water-Vapor Fluid]]

---

## Two phases: $\alpha$ and $\beta$

![[Pasted image 20261030134647.png]]


- Internal energy: $dE = T\,dS - P\,dV + \mu\,dN$
- Gibbs free energy: $dG = -S\,dT + V\,dP + \mu\,dN$

지금은 $T$와 $P$를 설정하는 Gibbs free energy를 가정.

$$
N\,d\mu = -S\,dT + V\,dP
$$

(여기부터 $S$, $V$는 particle당 양)

$$
d\mu = \left(\frac{\partial \mu}{\partial T}\right)_P dT + \left(\frac{\partial \mu}{\partial P}\right)_T dP, \qquad S = -\left(\frac{\partial \mu}{\partial T}\right)_P, \quad V = \left(\frac{\partial \mu}{\partial P}\right)_T
$$

### ★ Along the coexistence line (교수님이 강조하심)

$$
d\mu^{(\alpha)}(T, P) = d\mu^{(\beta)}(T, P) \quad \Longleftrightarrow \quad -S^{(\alpha)}dT + V^{(\alpha)}dP = -S^{(\beta)}dT + V^{(\beta)}dP
$$

> [!important] Clausius–Clapeyron equation
> $$
> \frac{dP}{dT} = \frac{S^{(\alpha)} - S^{(\beta)}}{V^{(\alpha)} - V^{(\beta)}} = \frac{\Delta Q(T)}{T\, \Delta V(T)}
> $$
> $\Delta Q(T)$를 **latent heat**라고 한다.

Related homework - [[SM HW4-3 Clausius-Clapeyron Coexistence Curve|HW4-3 Clausius-Clapeyron Coexistence Curve]]

### First order phase transition
![[Pasted image 20261030134737.png]]
![[Pasted image 20261030134750.png]]
 $\mu$ vs $P$ 그래프. $\mu^{(\alpha)}(P)$와 $\mu^{(\beta)}(P)$가 만나는 점에서 꺾인다 → **미분 불가, slope이 불연속**.
각 branch의 slope은 부피를 나타낸다. $\left(\frac{\partial \mu}{\partial P}\right)_T = V(P, T)$.

![[Pasted image 20261030134838.png]]

![[Pasted image 20261030134850.png]]

$\mu$ vs $T$ 그래프. slope $= -S(P, T)$. 
두 branch가 만나는 점에서 **엔트로피가 불연속 변화**.

**First order phase transition** → $V$와 $S$가 transition point에서 불연속.

> [!note] 그림
> $T$–$P$ diagram (vapor, ice, water). → **Critical point에서는 second-order phase transition이 나타남.**
> ![[Pasted image 20261030134919.png]]

---

## Real gas: van der Waals equation

Ideal gas of 1 mole: $PV = N k_B T$

Real gas에서는 두 가지를 고려한다.

1. **Molecule has finite volume** $b$:

$$
V_{\text{eff}} = V - Nb
$$

2. **Attractive interaction exists**

> [!note] 그림
> 분자 간 potential vs $r$. 가까우면 강한 척력, 조금 떨어지면 얕은 인력 우물.

$$
P_{\text{kinetic}} = P + \frac{a}{V^2}
$$

$$
\left(P + \frac{a}{V^2}\right)(V - Nb) = N k_B T
$$

> [!note] 그림: van der Waals isotherms
> - $T > T_c$: 단조 감소하는 곡선.
> - $T = T_c$: K점에서 **변곡점 기울기 0**.
> - $T < T_c$: 등온선이 구불구불한 loop (A, B, C, E, F, G 표시)를 가진다.

**Stability criteria**

$$
\frac{\partial P}{\partial V} \le 0
$$

이래야 stable 하다.

→ loop에서 **기울기가 양인 부분이 물리적으로 말이 안 된다.**

**Maxwell construction**이 이 문제를 해결할 것이다. (다음 시간에 계속)

---

### Maxwell construction

학부에서 공부했는데?

> [!note] 그림
> $P$–$V$ 평면의 vdW loop에 수평선을 그어, 위아래로 생기는 두 영역(초록)의 넓이가 같도록 한 그림. Loop의 극값 두 점은 **$F$의 변곡점**에 해당한다. 수평선의 양 끝 사이가 two phase coexisting region.

$$
P = -\left(\frac{\partial F}{\partial V}\right)_T, \qquad F = -\int_{V_1} P\, dV
$$

→ $F$의 변곡점의 기울기가 음수

> [!note] 그림
> $F$–$V$ 그래프. slope $= -P$. 같은 slope인 부분 → **coexistence pressure**.

> [!note] 그림
> $F$–$V$ 곡선에 두 점 ($V_1$, $V_2$)에서 동시에 접하는 접선(common tangent)을 그은 그림.
> - $V < V_1$: homogeneous liquid phase
> - $V > V_2$: homogeneous gas phase
> - $V_1 < V < V_2$: actual free energy line = 접선. **Slope is always same.**
> $$
> P_1 = -\left(\frac{\partial F}{\partial V}\right)_1, \qquad P_2 = -\left(\frac{\partial F}{\partial V}\right)_2
> $$

Free energy of two phases $\le$ free energy of homogeneous phase

Common tangent 조건:

$$
-\left(\frac{\partial F}{\partial V}\right)_1 = -\left(\frac{\partial F}{\partial V}\right)_2
$$

$$
\frac{F_2 - F_1}{V_2 - V_1} = \left(\frac{\partial F}{\partial V}\right)_1
$$

→ 옆 페이지의 면적 적분에 대해 이야기 하자.

### The critical condition of $V_c$, $P_c$ at $T = T_c$

$$
(V - b)\left(P_c + \frac{a}{V^2}\right) = R T_c
$$

At $T = T_c$, $(V - V_c)^3 = 0$

$$
R T_c = \frac{8a}{27b}, \qquad P_c = \frac{a}{27b^2}, \qquad V_c = 3b
$$

**Dimensionless variables**

$$
\tilde{P} = \frac{P}{P_c}, \qquad \tilde{T} = \frac{T}{T_c}, \qquad \tilde{V} = \frac{V}{V_c}
$$

$$
\left(\tilde{P} + \frac{3}{\tilde{V}^2}\right)\left(\tilde{V} - \frac{1}{3}\right) = \frac{8}{3}\tilde{T}
$$

→ **universal equation that explains "any" gas**

Related homework - 위 식을 유도하는 전 과정 [[SM HW4-4 Van der Waals Critical Point and Corresponding States|HW4-4 Van der Waals Critical Point and Corresponding States]]

> [!warning] 계수 확인
> 필기에는 $\left(\tilde{P} - \frac{3}{\tilde{V}}\right)$로 적혀 있었다. "계수 제대로 쓴 건지 모르겠..." → 숙제에서 제대로 풀었다! 위 식이 올바른 형태다.

# 궁금한 내용

- 교수님이 말씀하신 대로, $N\,d\mu = dG$라고 보아도 될까?
- 왜 common tangent로 만들어진 slope만 Maxwell construction을 만족하는가? 옆 페이지의 면적 적분(equal area)과는 무슨 관계인가?
- $T_c$는 어떻게 정하는가?

# AI의 보충 설명

![[Pasted image 20261029084452.png]]

> [!info] 그림 설명
> Reduced vdW isotherm $\tilde T = 0.9$에 대해 수치적으로 Maxwell construction을 계산한 그림. 결과는 $\tilde v_l \approx 0.603$, $\tilde v_g \approx 2.349$, $\tilde P^* \approx 0.647$.
> - (a) $P$–$V$: 두 영역의 넓이가 같다.
> - (b) $F$–$V$: 같은 조건이 common tangent로 나타난다.
> - (c) (b)에서 $\tilde P^* \tilde v$를 더해 기울인 것: 두 minimum의 높이가 같다.
> - 점선은 $\partial P/\partial V > 0$인 unstable 구간.

## Maxwell construction 이해하기

**한 줄 요약**: Maxwell construction은 "**두 phase가 공존하려면 $T$, $P$, $\mu$가 같아야 한다**"(4주차의 equilibrium 조건)를 vdW 등온선 위에서 그림으로 푼 것이다. Equal area, common tangent, 같은 높이의 두 minimum은 모두 **같은 조건을 세 가지 그림으로 표현한 것**이다.

### 1. 문제 상황: vdW loop의 무엇이 잘못되었나

$T < T_c$에서 vdW 등온선에는 두 가지 문제가 있다.

1. **$\partial P/\partial V > 0$인 구간이 있다.** 부피가 커졌는데 압력이 오르면, 작은 요동이 저절로 커져서 계가 버티지 못한다 (unstable).
2. **같은 $P$에 대응하는 $V$가 세 개다.** 실제 실험에서 액체를 등온 압축하면, 액화가 일어나는 동안 압력은 **일정**하게 유지된다(수평선).

그러면 질문은 하나로 정리된다. **그 수평선은 어느 높이 $P^*$에 그어야 하나?**

### 2. 필요한 조건 세기

Liquid ($v_l$)와 gas ($v_g$)가 공존하려면 (같은 등온선 위이므로 $T$는 이미 같다),

$$
P(v_l) = P(v_g) = P^*
$$

$$
\mu(v_l) = \mu(v_g)
$$

미지수는 $v_l$, $v_g$, $P^*$의 세 개이고, 조건도 세 개다(압력 두 식 + chemical potential 한 식). 그래서 $P^*$가 **하나로 결정된다.** 압력이 같다는 조건만으로는 수평선을 아무 높이에나 그을 수 있다. **$\mu$가 같다는 조건이 높이를 고정**한다. 이것이 Maxwell construction의 핵심이다.

### 3. 관점 1: Equal area rule ($P$–$V$ 평면)

![[Pasted image 20261029084702.png]]


등온($dT = 0$)에서 Gibbs–Duhem relation은 particle당 양으로 다음과 같다.

$$
d\mu = v\, dP
$$

vdW 등온선을 따라 liquid에서 gas까지 적분하면, $\mu_l = \mu_g$이어야 하므로

$$
\mu_g - \mu_l = \int_{l}^{g} v\, dP = 0
$$

부분적분하면,

$$
\int_l^g v\, dP = \Big[P v\Big]_l^g - \int_{v_l}^{v_g} P\, dv = P^*(v_g - v_l) - \int_{v_l}^{v_g} P\, dv = 0
$$

$$
\int_{v_l}^{v_g} P\, dv = P^* (v_g - v_l)
$$

좌변은 **vdW 곡선 아래의 넓이**, 우변은 **수평선 아래 직사각형의 넓이**다. 둘이 같으므로, 수평선 위로 튀어나온 넓이(area II)와 아래로 꺼진 넓이(area I)가 같다. 이것이 **equal area rule**이다.

> [!note] Unstable 구간을 지나며 적분해도 되나?
> 이 적분은 실제 물리 과정이 아니라, vdW 식이 주는 함수 $\mu(v)$를 수학적으로 따라가는 계산이다. 양 끝점의 $\mu$ 값을 비교하는 것이 목적이므로 문제없다.

### 4. 관점 2: Common tangent ($F$–$V$ 평면) — 필기 질문에 대한 답

**(1) 두 phase로 나뉜 계의 free energy는 직선이다 (lever rule).**

평균 부피가 $v$인 계가 비율 $x$만큼 $v_1$ 상태, $1-x$만큼 $v_2$ 상태로 나뉘었다고 하자.

$$
v = x v_1 + (1 - x) v_2, \qquad F_{\text{mix}} = x F(v_1) + (1 - x) F(v_2)
$$

$x$를 바꾸면 $(v, F_{\text{mix}})$는 두 점 $(v_1, F_1)$, $(v_2, F_2)$를 잇는 **선분(chord)** 위를 움직인다. 이 선분이 원래 곡선 $F(v)$보다 아래에 있으면, 계는 균일하게 있는 것보다 **둘로 나뉘는 편이 free energy가 낮다.** 그래서 "free energy of two phases ≤ free energy of homogeneous phase"가 성립한다.

**(2) 가장 낮은 선분이 바로 common tangent다.**

$v_1$, $v_2$, $x$를 자유롭게 골라 $F_{\text{mix}}$를 최소화하자. 제약 조건 $x v_1 + (1-x) v_2 = v$에 대한 Lagrange multiplier를 $\lambda$라 하면,

$$
\mathcal{L} = x F(v_1) + (1 - x) F(v_2) - \lambda\left[x v_1 + (1 - x) v_2 - v\right]
$$

$$
\frac{\partial \mathcal{L}}{\partial v_1} = 0 \;\Rightarrow\; F'(v_1) = \lambda, \qquad \frac{\partial \mathcal{L}}{\partial v_2} = 0 \;\Rightarrow\; F'(v_2) = \lambda
$$

$$
\frac{\partial \mathcal{L}}{\partial x} = 0 \;\Rightarrow\; \frac{F(v_2) - F(v_1)}{v_2 - v_1} = \lambda
$$

즉 **양 끝의 접선 기울기와 선분의 기울기가 모두 같아야 한다.** 이것은 정확히 필기의 두 식이며, 기하학적으로는 곡선에 두 점에서 동시에 접하는 직선(common tangent)이다. $\lambda = -P^*$이다.

**(3) Common tangent의 두 조건 = 공존 조건**

- $F'(v_1) = F'(v_2)$ ⟺ $P_1 = P_2$ (**mechanical equilibrium**)
- $\frac{F_2 - F_1}{v_2 - v_1} = -P^*$ ⟺ $F_1 + P^* v_1 = F_2 + P^* v_2$ ⟺ $g_1 = g_2$ ⟺ $\mu_1 = \mu_2$ (**chemical equilibrium**)

그래서 **common tangent만이** Maxwell construction을 만족한다. 다른 직선은 압력이 같거나(평행한 접선 두 개) 선분이 곡선 아래에 있을 수는 있어도, 두 조건을 동시에 만족하지 못한다.

**(4) Equal area와 같은 조건임 ("옆 페이지의 면적 적분")**

$P = -\partial F/\partial v$이므로 vdW 곡선을 따라 적분하면,

$$
F_2 - F_1 = -\int_{v_1}^{v_2} P\, dv
$$

Common tangent 조건은 $F_2 - F_1 = -P^*(v_2 - v_1)$이므로,

$$
\int_{v_1}^{v_2} P\, dv = P^*(v_2 - v_1)
$$

→ 관점 1의 equal area rule과 **똑같은 식**이다.

**(5) Stability와의 연결**

$$
\frac{\partial^2 F}{\partial V^2} = -\frac{\partial P}{\partial V} \ge 0
$$

따라서 $\partial P/\partial V \le 0$ (stable)은 **$F(V)$가 아래로 볼록(convex)** 하다는 것과 같다. vdW의 $F$에는 위로 볼록한 구간(그림 (b)의 점선)이 있는데, 그 구간이 바로 loop에서 기울기가 양인 구간이다. 실제 free energy는 이 오목한 부분을 common tangent로 덮어 convex하게 만든 것(**convex hull**)이다.

### 5. 관점 3: 기울인 free energy landscape — 가장 직관적인 그림

압력 $P^*$를 piston으로 고정한 계에서 최소화해야 할 것은 Gibbs free energy $g = F + P^* v$이다(3주차: $T$, $P$ 고정이면 $G$가 저절로 증가하지 않는다). $F(v)$에 직선 $P^* v$를 더하면, common tangent는 **수평선**이 되고 $g(v)$는 두 개의 minimum을 가진 **double well**이 된다 (그림 (c)).

- $P = P^*$: 두 minimum의 높이가 같다 → **공존** ($\mu_l = \mu_g$)
- $P > P^*$: 직선이 더 기울어져 오른쪽(gas)이 올라감 → **liquid가 global minimum**
- $P < P^*$: 반대로 **gas가 global minimum**

**First-order phase transition이란, 외부 변수를 바꿀 때 두 local minimum 중 어느 것이 global minimum인지가 뒤바뀌는 사건**이다. 바뀌는 순간 $v$가 한 well에서 다른 well로 **점프**하므로 $V$가 불연속이다. 이는 필기의 "V와 S가 transition point에서 불연속"과 같은 이야기다.

### 6. Lever rule: "두 phase의 비율은 예측할 수 없다"의 정확한 의미

$P$–$T$ diagram에서는 coexistence가 하나의 선이다. 그래서 $(T, P)$만 주어지면 두 phase의 비율이 정해지지 않는다. 필기의 두 piston 그림이 바로 이 상황이다. 그러나 **$V$ (또는 $E$)를 주면 비율이 정해진다.** 평균 부피가 $v_l < v < v_g$일 때, liquid의 비율은 다음과 같다.

$$
x_l = \frac{v_g - v}{v_g - v_l}
$$

예를 들어 $\tilde T = 0.9$, $\tilde v = 1.5$이면 $x_l = (2.349 - 1.5)/(2.349 - 0.603) \approx 0.49$이다. 즉 "예측할 수 없다"는 말은 **intensive variable만으로는** 결정되지 않는다는 뜻이다. Gibbs phase rule의 $f = 1$과도 일관된다.

### 7. Metastable과 unstable의 구분

| 구간 | 조건 | 상태 |
|---|---|---|
| $v < v_l$ 또는 $v > v_g$ | — | stable 단일 phase |
| $v_l < v <$ 첫 극값 | $\partial P/\partial v < 0$, 하지만 common tangent보다 위 | **metastable**: superheated liquid |
| 두 극값 사이 | $\partial P/\partial v > 0$ | **unstable**: 즉시 상분리 (spinodal decomposition) |
| 둘째 극값 $< v < v_g$ | $\partial P/\partial v < 0$, 하지만 common tangent보다 위 | **metastable**: supercooled vapor (구름 속 과포화 수증기) |

- $v_l$, $v_g$를 잇는 곡선을 **binodal (coexistence curve)** 이라 하고, 이것이 필기의 돔이다.
- $\partial P/\partial v = 0$인 점들을 잇는 곡선을 **spinodal**이라 한다. $\tilde T = 0.9$에서는 $\tilde v \approx 0.719$, $1.529$이다.
- Metastable 상태는 그림 (c)에서 **local minimum이지만 global minimum이 아닌** 상태에 해당한다. 핵(nucleus)이 생기기 전까지는 버틸 수 있다.

### 8. $T \to T_c$: loop가 사라지는 곳 = critical point ($T_c$는 어떻게 정하는가?)

온도를 올리면 loop가 작아진다. $v_l$과 $v_g$가 가까워지고, 두 spinodal 점(극대와 극소)도 가까워진다. **두 극값이 하나로 합쳐져 변곡점이 되는 온도**가 $T_c$다.

$$
\left(\frac{\partial P}{\partial v}\right)_{T_c} = 0, \qquad \left(\frac{\partial^2 P}{\partial v^2}\right)_{T_c} = 0
$$

vdW ($P = \frac{RT}{v - b} - \frac{a}{v^2}$)에 적용하면,

$$
-\frac{RT}{(v - b)^2} + \frac{2a}{v^3} = 0, \qquad \frac{2RT}{(v - b)^3} - \frac{6a}{v^4} = 0
$$

두 식을 나누면 $\frac{v - b}{2} = \frac{v}{3}$이므로 $v_c = 3b$이다. 이를 대입하면

$$
R T_c = \frac{8a}{27b}, \qquad P_c = \frac{a}{27b^2}
$$

필기의 "$(V - V_c)^3 = 0$" 방법도 같은 내용이다. vdW 식은 $v$에 대한 3차식 $P v^3 - (Pb + RT)v^2 + a v - ab = 0$이다. $T < T_c$에서는 한 $P$에 세 근(loop)이 있고, critical point에서 **세 근이 하나로 합쳐진다(삼중근).** $T > T_c$에서는 실근이 하나뿐이어서 loop가 없다. 따라서 Maxwell construction도 필요 없고, liquid와 gas의 구분이 사라진다 (supercritical fluid).

Reduced variable로 쓰면 vdW 식에서 $a$, $b$가 사라지므로, Maxwell construction의 결과 ($\tilde v_l$, $\tilde v_g$, $\tilde P^*$)도 $\tilde T$만의 함수가 된다. 모든 기체의 coexistence curve가 reduced 단위에서 하나로 겹친다는 이 예측이 **law of corresponding states**다.

### 9. 시험 대비: conceptual question 체크리스트

- **vdW loop의 어디가 비물리적인가?** → $\partial P/\partial V > 0$ 구간. $\partial^2 F/\partial V^2 < 0$, 즉 $F$가 concave한 구간과 같다.
- **수평선의 높이를 정하는 조건은?** → $\mu_l = \mu_g$ (압력이 같다는 조건만으로는 부족하다).
- **Equal area와 common tangent가 같은 이유는?** → $F_2 - F_1 = -\int P\,dV$이고, 둘 다 $P$와 $\mu$가 같다는 조건이기 때문.
- **공존 영역 안의 free energy가 직선인 이유는?** → 두 phase의 혼합이 lever rule로 선형 결합되기 때문.
- **Critical point의 조건은?** → $\partial P/\partial v = \partial^2 P/\partial v^2 = 0$. 즉 loop가 사라지는 점.

## $N\,d\mu = dG$라고 보아도 될까?

**$N$이 고정되어 있을 때만 그렇다.** 단일 성분계에서 $G = N\mu$이므로,

$$
dG = \mu\, dN + N\, d\mu
$$

이다. 닫힌 계($dN = 0$)라면 $dG = N\,d\mu$이다. 일반적으로는 $N\,d\mu = -S\,dT + V\,dP$ (Gibbs–Duhem)이고, $dG$에는 $\mu\,dN$ 항이 더 붙는다. 필기에서 phase 공존을 다룰 때는 $N$을 고정하고 $(T, P)$만 바꾸는 상황이므로, 교수님의 말씀처럼 써도 된다. 위의 equal area 유도에서 쓴 $d\mu = v\,dP$도 이 식을 particle당 양으로 쓴 것이다.

# 연관 학습 노트

- [[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium]]

# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[SM lecture note - Kinetic Theory and Boltzmann's H-theorem|6th week - Kinetic Theory and Boltzmann's H-theorem]]

# 필기 원본

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_24.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_25.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_26.jpg]]



![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_28.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_29.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_30.jpg]]
![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_33.jpg]]