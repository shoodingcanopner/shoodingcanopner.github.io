---
title: SM lecture note - Carnot Engine and Thermodynamic Entropy
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

[[SM lecture note - Thermodynamic Equilibrium and the First Law|1st week - Thermodynamic Equilibrium and the First Law]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

2nd week

## Thermodynamic Second Law

### 카르노 열엔진 (Carnot process)

**Maximum efficiency**를 가지는 이론적 열기관.
Ideal reversible engine converting heat energy to work with maximum efficiency.
![[Pasted image 20261029081557.png]]
> [!note] 그림
> 위쪽에 HOT reservoir ($T_2$), 아래쪽에 COOL reservoir ($T_1$). 엔진이 hot reservoir로부터 열 $Q_2$를 받아 일 $W$를 하고, 남은 열 $Q_1$을 cool reservoir로 버린다.

**Efficiency**: 주입열(투입) 대비 한 일(산출).

$$
\eta_C = \frac{W}{Q_2}
$$

Energy conservation:

$$
W = Q_2 - Q_1
$$

$$
\eta_C = \frac{Q_2 - Q_1}{Q_2} = 1 - \frac{Q_1}{Q_2}
$$

카르노 기관이 제일 효율이 좋으므로, $\eta_C$가 efficiency의 **upper bound**다.

$$
\eta \le 1 - \frac{Q_1}{Q_2}
$$

이제 $\frac{Q_1}{Q_2}$가 무엇인지 구해보자. Reversible process의 엔트로피 변화량이 0임을 이용한다. 

### Thermodynamic state of engine
![[Pasted image 20261029081642.png]]
> [!note] 그림
> $P$–$V$ diagram 위의 Carnot cycle $a \to b \to c \to d \to a$. 두 isotherm ($T_2$, $T_1$)과 두 adiabat으로 둘러싸인 영역(초록색)이 $W$.

- **Area**: amount of work done by one cycle of process
- **Dashed lines** are isothermal expansion → 같은 온도 유지, 내부에너지 유지.
- **Dotted lines** are adiabatic expansion → 열출입 없음, 일을 하거나 받아 내부에너지가 줄거나 늘거나.

**$a \to b$**: Isothermal expansion
- Gas expands, doing work: $\Delta W < 0$
- Internal energy is constant
- Absorbing heat: $Q_2 = \Delta Q_{ab}$ ($a \to b$ 중에 engine이 받은 열)

**$b \to c$**: Adiabatic expansion
- Do some work
- Internal energy decreases → 일을 하면서 내부에너지가 준다 (온도 낮아짐)
- Decreased internal energy is converted to work

**$c \to d$**: Isothermal process
- Got some work (compression)
- Internal energy is constant
- Release heat: $-Q_1 = \Delta Q_{cd}$

**$d \to a$**: Adiabatic compression
- Got some work
- Internal energy increased

![[Pasted image 20261029081707.png]]
> [!note] 그림
> 두 isotherm ($T_2$ hot, $T_1$ cool) 사이의 cycle을 단계별로 설명한 그림.
> 1. 뜨거운 곳에서 열 받은 만큼 일한다.
> 2. 식어가며 줄어든 내부에너지로 일한다.
> 3. 일을 받으면서 열을 방출한다.
> 4. 일을 받으며 내부에너지가 돌아온다.

### Cycle에 대한 $\oint \text{đ}Q / T$

$$
\oint_{\text{cycle}} \frac{\text{đ}Q}{T} = \int_a^b \frac{1}{T_2} \, \text{đ}Q + \int_c^d \frac{1}{T_1} \, \text{đ}Q
$$

$$
= \frac{\Delta Q_{ab}}{T_2} + \frac{\Delta Q_{cd}}{T_1} = 0
$$

따라서 (필기에서는 빈칸으로 남겨둔 부분),

$$
\frac{Q_1}{Q_2} = \frac{T_1}{T_2}, \qquad \eta_C = 1 - \frac{T_1}{T_2}
$$
![[Pasted image 20261029081854.png]]
> [!note] 그림
> $P$–$V$ diagram 위의 임의의 closed cycle을 여러 isotherm/adiabat으로 잘게 쪼갠 그림.

**Reversible**이라면, 어떤 process든 Carnot process의 합으로 나타낼 수 있다.

### Thermodynamic definition of entropy

Entropy is another thermodynamic parameter.

$$
T \, dS = \text{đ}Q_{\text{rev}}
$$

$$
S = \int \frac{1}{T} \, \text{đ}Q_{\text{rev}}
$$

$Q_{\text{rev}}$ means heat exchange during reversible process.

### Path independency of entropy

모든 reversible cycle에서 엔트로피 생성량은 0이라는 점을 이용한다. 
![[Pasted image 20261029082000.png]]
> [!note] 그림
> 두 상태 $a$, $b$를 잇는 서로 다른 두 경로 1, 2로 이루어진 closed loop.

$$
0 = \int_1 \frac{\text{đ}Q}{T} - \int_2 \frac{\text{đ}Q}{T}
$$


$$
\int_1 \frac{\text{đ}Q}{T} = \int_2 \frac{\text{đ}Q}{T}
$$
1과 2, 어느 경로를 이용하든 엔트로피 생산량은 똑같다. 

State variable이므로 경로에 무관하게 시작점과 끝점으로만 정해진다.

$$
S(B) - S(A) = \int_A^B \frac{\text{đ}Q}{T}
$$

> [!important] 시험에 나온다
> - $dS$ is **exact differential**
> - $S$ is **function of state variable**

---

## More generalized idea: Clausius' theorem

Cyclic, but **not reversible** process:

$$
\oint \frac{\text{đ}Q}{T} \le 0
$$

젠장, 낚였군! 부호가 음수라니. → 지금 정의는 열기관에 한정되어 있기 때문이다. (**Dissipation**)

Consequence of this theorem:

$$
\int_A^B \frac{\text{đ}Q}{T} \le \int_A^B \frac{\text{đ}Q_{\text{rev}}}{T} = S(B) - S(A)
$$

$$
\frac{\text{đ}Q}{T} \le dS
$$

### Isolated system
![[Pasted image 20261029082033.png]]
> [!note] 그림
> 단열벽으로 둘러싸인 두 상자가 연결되는 그림 (isolated). 아래 그림은 Gas molecule A와 Gas molecule B가 각각 다른 상자에 있다가, 통로가 열린 뒤 섞이는 모습.

$$
\text{đ}Q = 0, \qquad dS \ge 0
$$

→ for all isolated systems.

열역학적 엔트로피는 이 현상(mixing)을 잘 설명하기 곤란하다.

---

## 평형에서 엔트로피는 변하지 않는다

- **제1법칙** → 에너지는 보존된다.
- **제2법칙** → 고립계에서 엔트로피가 줄어들 일은 없다.

- 제1법칙 → 에너지 보존: $E_a + E_b = E_{\text{net}}$
- 제2법칙
	- $\delta S > 0$: 새로운 평형에 도달하기 전까지
	- $\delta S = 0$: 평형 상태에 도달한 이후는

Classical thermodynamics에는 비평형 상태에서 엔트로피를 정의하지 않으므로.

### 시간의 화살

Reversible process:

$$
dE = \text{đ}Q + \text{đ}W = T \, dS + \text{đ}W = T \, dS + \sum_i f_i \, dX_i
$$

$$
E = E(S, \{X_i\}) = E(S, V, N, \cdots)
$$

$X_i$ is an extensive variable.

$$
dS = \frac{1}{T}\left(dE - \sum_i f_i \, dX_i\right)
$$

### Entropy의 편미분

$$
\left(\frac{\partial S}{\partial E}\right)_{N,V} = \frac{1}{T}
$$

→ **Isolated system에서 온도를 정의할 수 있다.**

$$
\left(\frac{\partial S}{\partial N}\right)_{E,V} = -\frac{\mu}{T}
$$

$$
\left(\frac{\partial S}{\partial V}\right)_{E,N} = \frac{P}{T}
$$

(**부호 주의**)

$$
\left(\frac{\partial S}{\partial X_i}\right)_{\text{else}} = -\frac{f_i}{T}
$$

$\frac{\partial S}{\partial E}$는 항상 양수 → $E$가 증가하면 $S$도 무조건 증가.
$S(E)$ is **monotonically increasing function**.

### Two different increasing tendency

1. **Concave**
	- $E$가 증가할 때 → $\frac{1}{T}$이 감소 → $T$는 증가. 이게 자연스럽다.
	- Ideal gas가 이렇다.
2. **Convex**
	- $E$ 증가 → $T$ 감소?
	- 예시가 뭐 있지?
3. **Unusual**
	- $S$가 $E$에 대해 감소하는 경우.
	- 온도가 음수다!

![[Pasted image 20261029082120.png]]
> [!note] 그림
> 세 가지 $S(E)$ 개형: (1) 위로 볼록하게 증가 (concave), (2) 아래로 볼록하게 증가 (convex), (3) $E$가 커질수록 감소 (unusual).

# 궁금한 내용

- 왜 카르노 기관이 최대 효율인가?
- Carnot cycle에서 $\oint \text{đ}Q/T = 0$이라는 보장은 어디서 나오나? Reversible이니까?
- Heat bath까지 포함한 엔트로피는 어떻게 계산하나?
- $Q_{\text{rev}}$로 정의한다면, entropy는 reversible process일 때만 정의된다는 건가?
- Convex한 $S(E)$, 즉 $E$가 증가할 때 $T$가 감소하는 예시는 뭐가 있나?

# AI의 보충 설명

### Q1. 왜 카르노 기관이 최대 효율인가?

**Carnot's theorem**: 같은 두 reservoir $T_2 > T_1$ 사이에서 작동하는 어떤 엔진도 reversible engine보다 효율이 높을 수 없고, 모든 reversible engine은 작동 물질과 무관하게 같은 효율을 가진다.

**엔트로피를 이용한 증명.** 엔진 + 두 reservoir 전체는 isolated system이다. 한 cycle이 끝나면 엔진은 원래 상태로 돌아오므로 $\Delta S_{\text{engine}} = 0$이다. Reservoir는 항상 평형 상태를 유지하므로 $\Delta S = Q/T$로 계산할 수 있다.

$$
\Delta S_{\text{total}} = -\frac{Q_2}{T_2} + \frac{Q_1}{T_1} \ge 0
$$

$$
\frac{Q_1}{Q_2} \ge \frac{T_1}{T_2} \quad \Rightarrow \quad \eta = 1 - \frac{Q_1}{Q_2} \le 1 - \frac{T_1}{T_2} = \eta_C
$$

등호는 $\Delta S_{\text{total}} = 0$, 즉 reversible일 때만 성립한다.

**엔트로피 없이 하는 고전적 증명.** $\eta_X > \eta_C$인 엔진 X가 있다고 가정하고, 그 일로 Carnot engine을 거꾸로 돌려 냉장고로 쓴다. 두 기계를 합치면 결과적으로 차가운 쪽에서 뜨거운 쪽으로 열만 옮겨진다. 이는 Clausius statement(열은 저절로 차가운 곳에서 뜨거운 곳으로 가지 않는다)에 모순이다.

> [!warning] 필기 식에 대한 코멘트
> 필기의 $\eta \le 1 - \frac{Q_1}{Q_2}$는 의도와 달리 쓰인 것 같다. 어떤 엔진이든 energy conservation에 의해 $\eta = 1 - \frac{Q_1}{Q_2}$는 **항상 등호**로 성립한다. 의미 있는 upper bound는 $Q$가 아니라 **온도**로 쓴 $\eta \le 1 - \frac{T_1}{T_2}$이다.

### Q2. Carnot cycle에서 $\oint \text{đ}Q/T = 0$이라는 보장은 어디서 나오나? Reversible이니까?

반은 맞다. 두 단계로 나눠서 보면 순환논리가 아님을 알 수 있다.

**(1) Ideal gas로 직접 계산하면 가정이 아니라 결과로 나온다.**

Isothermal 구간에서 $\Delta E = 0$이므로,

$$
Q_2 = N k_B T_2 \ln\frac{V_b}{V_a}, \qquad Q_1 = N k_B T_1 \ln\frac{V_c}{V_d}
$$

Adiabatic 구간에서는 $T V^{\gamma - 1} = \text{const}$이므로,

$$
T_2 V_b^{\gamma-1} = T_1 V_c^{\gamma-1}, \qquad T_2 V_a^{\gamma-1} = T_1 V_d^{\gamma-1} \quad \Rightarrow \quad \frac{V_b}{V_a} = \frac{V_c}{V_d}
$$

$$
\frac{Q_2}{T_2} = \frac{Q_1}{T_1}
$$

**(2) 일반 물질로 확장하는 논리 순서**

1. 2nd law (Kelvin 또는 Clausius statement)를 공리로 둔다.
2. → Carnot's theorem: 모든 reversible engine의 효율은 같다 (Q1의 고전적 증명).
3. → 효율이 reservoir 온도에만 의존하므로, 이를 이용해 **thermodynamic temperature scale**을 $\frac{Q_1}{Q_2} = \frac{T_1}{T_2}$가 되도록 정의할 수 있다. (Ideal gas 온도와 일치함은 (1)에서 확인.)
4. → 임의의 reversible cycle은 Carnot cycle들의 합이므로 $\oint \text{đ}Q_{\text{rev}}/T = 0$.
5. → 따라서 $S$라는 state function이 존재한다.

즉 "reversible이니까"가 필요한 이유는 2단계 때문이다. Reversible engine끼리만 효율이 같다는 보장이 있다. 반대로 "$S$가 state function이니까 0이다"라고 하면 순환논리가 된다. $S$의 존재 자체가 이 결과로부터 나오기 때문이다.

### Q3. Heat bath까지 포함한 엔트로피는 어떻게 계산하나?

Heat bath는 매우 커서 열을 주고받아도 온도가 변하지 않고, 내부적으로 항상 평형을 유지한다. 그래서 system 쪽 과정이 irreversible이더라도 **bath 입장에서는 항상 reversible하게 열을 받는 것**으로 볼 수 있다.

$$
\Delta S_{\text{bath}} = \frac{Q_{\text{bath}}}{T_{\text{bath}}} = -\frac{Q_{\text{sys}}}{T_{\text{bath}}}
$$

**Carnot cycle의 경우**: $\Delta S_{\text{total}} = 0 - \frac{Q_2}{T_2} + \frac{Q_1}{T_1} = 0$.

**Irreversible 예시 (열전도)**: 엔진 없이 열 $Q$가 $T_2$에서 $T_1$으로 직접 흐르면,

$$
\Delta S_{\text{total}} = -\frac{Q}{T_2} + \frac{Q}{T_1} = Q\left(\frac{1}{T_1} - \frac{1}{T_2}\right) > 0
$$

Carnot engine은 바로 이 엔트로피 생성을 0으로 만들면서 그 차이를 일로 뽑아내는 장치라고 볼 수 있다. 이 계산 방식은 이후 필기의 "Revisit the thermodynamic second law" ($\Delta S_{\text{total}} = \Delta S_{\text{sys}} + \Delta Q_{\text{bath}}/T$)에서 그대로 다시 쓰인다.

### Q4. $Q_{\text{rev}}$로 정의한다면, entropy는 reversible process일 때만 정의되는 건가?

아니다. 구분해야 할 것은 **"무엇에 대해 정의되는가"** 와 **"어떻게 계산하는가"** 이다.

- $S$는 **평형 상태(equilibrium state)** 의 함수다. 그 상태에 어떤 과정으로 도달했는지와 무관하게 정의된다.
- Reversible path는 **계산 도구**다. 두 평형 상태 사이의 $\Delta S$를 구할 때, 실제 과정이 irreversible이라도 같은 시작점과 끝점을 잇는 아무 reversible path를 상상해서 $\int \text{đ}Q_{\text{rev}}/T$를 계산하면 된다. $S$가 state function이므로 경로가 달라도 결과는 같다.

**예시 (1주차 필기의 irreversible process)**: 힘을 갑자기 없애 기체가 $V_1 \to V_2$로 팽창하면, 바깥에 한 일이 없고 $\Delta E = 0$이므로 실제 $Q = 0$이다. 그러나 같은 끝점을 잇는 reversible isothermal path로 계산하면,

$$
\Delta S_{\text{sys}} = N k_B \ln\frac{V_2}{V_1} > 0 = \int \frac{\text{đ}Q_{\text{actual}}}{T}
$$

이것이 Clausius inequality $\frac{\text{đ}Q}{T} \le dS$의 구체적인 예다.

**진짜 한계**: Classical thermodynamics는 irreversible process **도중의** 비평형 상태에 대해서는 $S$를 정의하지 않는다 (필기의 "Classical thermodynamics에는 비평형 상태에서 엔트로피를 정의하지 않으므로"와 같은 이야기). 비평형 상태의 엔트로피는 statistical mechanics로 넘어가야 정의된다. Boltzmann의 $H$-function이나 Gibbs entropy가 그 역할을 한다. → [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]], [[Gibbs Entropy]]

### Q5. Convex한 $S(E)$, 즉 $E$가 증가할 때 $T$가 감소하는 예시는?

$S(E)$의 곡률은 heat capacity의 부호와 직결된다.

$$
\frac{\partial^2 S}{\partial E^2} = \frac{\partial}{\partial E}\left(\frac{1}{T}\right) = -\frac{1}{T^2 C_V}
$$

Concave ($\partial^2 S/\partial E^2 < 0$)이면 $C_V > 0$, convex이면 **$C_V < 0$ (negative heat capacity)** 이다. 에너지를 넣었는데 온도가 내려가는 계다.

**예시**
1. **Self-gravitating system** (별, 구상성단): Virial theorem에 의해 $E = -K$. 별이 에너지를 복사로 잃으면($E$ 감소) 수축하면서 $K$가 증가해 오히려 뜨거워진다.
2. **Black hole**: Hawking temperature $T_H \propto 1/M$, Bekenstein–Hawking entropy $S \propto M^2 \propto E^2$로 convex하다. 질량(에너지)이 클수록 차갑다. → [[콜로퀴엄 보고서 - Black Hole Thermodynamics]]
3. **유한한 크기의 계의 first-order transition 근처** (예: 원자 cluster의 melting): microcanonical $S(E)$에 작은 convex 구간이 나타난다.

> [!important] 왜 일상적인 계에서는 볼 수 없나?
> - **Stability**: short-range interaction을 가진 extensive system에서, $S(E)$가 convex하면 계가 에너지를 $E+\delta E$, $E-\delta E$인 두 부분으로 나누는 편이 엔트로피가 더 크다. 그래서 thermodynamic limit에서 $S(E)$는 반드시 concave해야 한다. 이것은 4주차의 stability, 5주차의 Maxwell construction(concave hull)과 같은 이야기다.
> - **Ensemble**: canonical ensemble에서는 $C_V = k_B \beta^2 \langle (\Delta E)^2 \rangle \ge 0$이 항상 성립한다. Negative heat capacity는 isolated(microcanonical) 계에서만 나타나며, 이것이 **ensemble inequivalence**의 대표적인 예다.
> - 위 예시들은 gravity처럼 long-range interaction이 있어 extensivity가 깨지거나, 유한한 크기라서 thermodynamic limit이 아닌 경우다.

**참고: 3번 "Unusual" (음의 온도).** 필기의 "$\partial S/\partial E$는 항상 양수"는 kinetic energy처럼 에너지 스펙트럼이 위로 열려 있을 때만 성립한다. Spin system처럼 에너지에 **상한이 있는** 계에서는 $S(E)$가 최대점을 지난 뒤 감소한다. 이 구간에서 $T < 0$이고, 이는 population inversion(laser)에 해당한다. 음의 온도의 계는 어떤 양의 온도의 계와 접촉해도 열을 내주므로, 양의 무한대 온도보다도 "뜨겁다".

# 연관 학습 노트

# 다음 강의

[[SM lecture note - Free Energies and Fluctuation Theorems]]

# 필기 원본
![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_7.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_8.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_9.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_10.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_11.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_12.jpg]]