---
title: SM lecture note - Free Energies and Fluctuation Theorems
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

[[SM lecture note - Carnot Engine and Thermodynamic Entropy|2nd week - Carnot Engine and Thermodynamic Entropy]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

3rd week

## Helmholtz free energy

온도를 조절할 수 있는 system에 대해.

![[Pasted image 20261029082812.png]]

$$
F = F(T, V, N)
$$

$$
F = E(S, V, N) - TS
$$

→ 르장드르 변환.

$$
dF = T\,dS + \mu\,dN - P\,dV - T\,dS - S\,dT = -S\,dT + \mu\,dN - P\,dV
$$

**부호에 유의하자.**

$$
S = -\left(\frac{\partial F}{\partial T}\right)_{N,V}, \qquad \mu = \left(\frac{\partial F}{\partial N}\right)_{T,V}, \qquad P = -\left(\frac{\partial F}{\partial V}\right)_{T,N}
$$

$$
E = F + TS = F - T\left(\frac{\partial F}{\partial T}\right)_{N,V} = -T^2\left[-\frac{F}{T^2} + \frac{1}{T}\left(\frac{\partial F}{\partial T}\right)_{N,V}\right] = -T^2\left(\frac{\partial}{\partial T}\frac{F}{T}\right)_{N,V}
$$

## Gibbs free energy

온도, 압력이 조절되는 시스템.

![[Pasted image 20261029082824.png]]

$$
G(T, P, N) = F(T, V, N) + PV = E(S, V, N) - TS + PV
$$

$$
dG = -S\,dT + V\,dP + \mu\,dN
$$

$$
S = -\left(\frac{\partial G}{\partial T}\right)_{P,N}
$$

### Meaning of $G(T, P, N) = N g(T, P)$

$T$와 $P$는 intensive variable, $N$만 extensive variable.

- $g(T, P)$: Gibbs free energy per particle at fixed temperature and pressure

Chemical potential:

$$
\mu = \left(\frac{\partial G}{\partial N}\right)_{T,P} = g(T, P)
$$

Chemical potential을 찾는다 → Gibbs free energy를 계산.

## Grand canonical ensemble

![[Pasted image 20261029082849.png]]

$$
\Omega_G(T, V, \mu) = F - \mu N = E - ST - \mu N
$$

$$
d\Omega_G = -S\,dT - N\,d\mu - P\,dV
$$

$$
S = -\left(\frac{\partial \Omega_G}{\partial T}\right)_{\mu,V}
$$

## Enthalpy $(S, P, N)$

![[Pasted image 20261029082901.png]]

$$
H(S, P, N) = E(S, V, N) + PV
$$

$$
dH = T\,dS + V\,dP + \mu\,dN
$$

$$
T = \left(\frac{\partial H}{\partial S}\right)_{P,N}
$$

**Isopressure heat capacity는 enthalpy로 정의**

$$
C_P = \frac{\partial}{\partial T}(E + PV) = \frac{\partial H}{\partial T}
$$

---

## Revisit the thermodynamic second law

Heat bath + closed system = isolated system

![[Pasted image 20261029082921.png]]


$$
\Delta Q_{\text{bath}} = -\Delta Q_{\text{sys}}
$$

$$
\Delta S_{\text{total}} = \Delta S_{\text{sys}} + \Delta S_{\text{bath}} = \Delta S_{\text{sys}} + \frac{\Delta Q_{\text{bath}}}{T} = \Delta S_{\text{sys}} - \frac{\Delta Q_{\text{sys}}}{T}
$$

Thermodynamic first law $\Delta E = \Delta W + \Delta Q$를 이용하면,

$$
\Delta S_{\text{total}} = \Delta S_{\text{sys}} + \frac{1}{T}\left(\Delta W_{\text{sys}} - \Delta E\right) = \frac{1}{T}\left[-(\Delta E - T\Delta S) + \Delta W_{\text{sys}}\right]
$$

$$
\Delta S_{\text{total}} = \frac{1}{T}\left[-\Delta F - \Delta W_{\text{bath}}\right] \ge 0
$$

→ by 2nd law

$$
-\Delta F \ge \Delta W_{\text{bath}}, \qquad \Delta F \le \Delta W_{\text{sys}}
$$

- **시스템이 잃은 free energy가 시스템이 할 수 있는 일의 최대량이다.**
- 등호는 **reversible process**일 때 성립.

$-\Delta F \le F$: 시스템이 잃을 수 있는 free energy 양은, 현재 시스템이 가진 free energy보다 같거나 작다.

$F \ge$ amount of work can be done by the system

> [!important] 
> Free energy는 시스템이 일을 할 수 있는 **"최대의 자유"** 를 의미한다.

> [!note] 그림
> 여러 개의 local minimum을 가진 $F$ landscape. 두 minimum 사이의 차이가 $\Delta F$.

Reversible work:

$$
\Delta F = \Delta W
$$

### Isothermal system $(V, T, N)$

Isothermal system $(V, T, N)$에서는 시스템이 일을 못해.

$$
\Delta W_{\text{sys}} = 0, \qquad \Delta F \le 0
$$

- **비평형**: $\Delta F < 0$, $\Delta Q < 0$, 시스템은 열을 뺏기며, free energy가 줄어든다.
- **평형**: $\Delta F = 0$, 시스템은 free energy 최소상태에 머문다.

즉, **Helmholtz free energy가 저절로 증가하지는 않는다.**

### Isobaric & Isothermal system $(P, T, N)$

$$
\Delta W \ge \Delta F
$$

$$
0 \ge \Delta F - \Delta W = \Delta(F + PV) = \Delta G
$$

→ 여기서 $\Delta W = -\Delta(PV)$를 사용.

$$
\Delta G \le 0
$$

**Gibbs free energy도 저절로 증가하지 않는다.**

### Grand canonical $\Omega_G(T, V, \mu)$

$$
\Delta F \le \Delta W
$$

$$
0 \ge \Delta F - \Delta W = \Delta(F - \mu N) = \Delta \Omega_G
$$

$$
\Delta \Omega_G \le 0
$$

---

## Modern thermodynamics: Fluctuation theorem

Gallavotti–Cohen symmetry, reverse process

### Detailed fluctuation theorem

$$
\frac{P(\Delta S)}{P(-\Delta S)} = e^{\Delta S}
$$

### Integral fluctuation theorem

$$
\langle e^{-\Delta S} \rangle = 1
$$

$$
\langle e^{-\Delta S} \rangle = \int e^{-\Delta S} P(\Delta S)\, d(\Delta S) = \int P(-\Delta S)\, d(\Delta S) = 1
$$

**Jensen's inequality**

$$
\langle e^{x} \rangle \ge e^{\langle x \rangle}
$$

$$
1 = \langle e^{-\Delta S} \rangle \ge e^{-\langle \Delta S \rangle}
$$

$$
\Rightarrow \langle \Delta S \rangle \ge 0
$$

### Crooks relation

Detailed fluctuation theorem의 work 버전. Forward process와 reverse process의 work 분포 비교.

$$
\frac{P_F(W)}{P_R(-W)} = e^{\beta W - \beta \Delta F}
$$

### Jarzynski equality relation

$$
\langle e^{-\beta W} \rangle = e^{-\beta \Delta F}
$$

→ 어떤 열역학적 process든 상관 없이 통한다!

$\Delta F \le \Delta W$와 비교해 봐라.

$$
\langle e^{-\beta \Delta W} \rangle \ge e^{-\beta \langle \Delta W \rangle}
$$

$$
e^{-\beta \Delta F} \ge e^{-\beta \langle \Delta W \rangle}
$$

→ **그냥 열역학 제2법칙이다.**

### TUR (Thermodynamic Uncertainty Relation)

$$
\frac{\mathrm{Var}[\Theta]}{\langle \Theta \rangle^2} \langle \Delta S_{\text{tot}} \rangle \ge 2 k_B
$$

$$
\mathrm{Var}[\Theta] = \langle \Theta^2 \rangle - \langle \Theta \rangle^2
$$

- $\frac{\mathrm{Var}[\Theta]}{\langle \Theta \rangle^2}$: $(\text{precision})^{-1}$
- $\langle \Delta S_{\text{tot}} \rangle$: entropy cost

**Tight bound of the second law.**

# 궁금한 내용

- 에너지를 extensive variable로 미분한 것은 전부 해당 extensive variable에 independent한 함수인가?
- Isobaric & isothermal system에서 $\Delta W = -\Delta(PV)$로 써도 되나?
- Jarzynski equality의 average는 무엇에 대한 average인가?

# AI의 보충 설명

### Q1. 에너지를 extensive variable로 미분한 것은 전부 해당 extensive variable에 independent한 함수인가?

**System size에는 independent하지만, extensive variable 자체에는 dependent하다. 단, 그 비율을 통해서만 의존한다.**

$E(S, V, N)$은 first-order homogeneous function이다.

$$
E(\lambda S, \lambda V, \lambda N) = \lambda E(S, V, N)
$$

양변을 $S$로 미분하면 좌변에서 chain rule로 $\lambda$가 하나 나오므로,

$$
\lambda \, \frac{\partial E}{\partial S}(\lambda S, \lambda V, \lambda N) = \lambda \, \frac{\partial E}{\partial S}(S, V, N)
$$

$$
T(\lambda S, \lambda V, \lambda N) = T(S, V, N)
$$

즉 $T$, $P$, $\mu$는 **zeroth-order homogeneous function**이다. 계를 통째로 $\lambda$배 해도 값이 변하지 않는다. $\lambda = 1/N$으로 두면,

$$
T = T\left(\frac{S}{N}, \frac{V}{N}\right)
$$

로, extensive variable의 **비율(밀도)** 에만 의존함을 알 수 있다. 예를 들어 ideal gas에서 $T = \frac{2}{3k_B}\frac{E}{N}$은 $E$와 $N$에 각각 의존하지만, 비율 $E/N$에만 의존한다.

**이 성질에서 나오는 결과들**

이 아이디어를 free energy에 적용하면, 필기의 "Meaning of $G = Ng(T,P)$"가 왜 성립하는지 보인다.

- $G(T, P, N)$: 변수 중 extensive한 것은 $N$ 하나뿐이다. $G$는 extensive해야 하므로 $N$에 정비례할 수밖에 없다. → $G = N g(T,P) = N\mu$
- $F(T, V, N)$: extensive 변수가 둘이므로 → $F = N f(T, V/N)$
- $\Omega_G(T, V, \mu)$: extensive 변수는 $V$ 하나뿐이다. 그리고 $\left(\partial \Omega_G / \partial V\right)_{T,\mu} = -P$이므로 → $\Omega_G = -PV$

또한 단일 성분계의 intensive variable $T$, $P$, $\mu$가 결국 두 개의 비율 $S/N$, $V/N$의 함수라는 것은, 셋 중 **독립인 것은 두 개뿐**이라는 뜻이다. 이것이 4주차의 Gibbs–Duhem relation $d\mu = \frac{V}{N}dP - \frac{S}{N}dT$, 즉 $\mu = \mu(T, P)$의 내용이다.

### Q2. Isobaric & isothermal system에서 $\Delta W = -\Delta(PV)$로 써도 되나?

**된다. 다만 두 가지 조건이 숨어 있다.**

**(1) $P$가 고정되어 있다는 의미.** Isobaric system에서 고정된 것은 piston이 누르는 **외부 압력 $P_{\text{ext}}$** 이다. Piston이 계에 해 주는 일은 다음과 같다.

$$
\Delta W_{PV} = -\int P_{\text{ext}}\, dV = -P_{\text{ext}}\, \Delta V
$$

시작과 끝은 평형 상태이므로 $P_i = P_f = P_{\text{ext}} \equiv P$이고, 따라서

$$
\Delta W_{PV} = -P\Delta V = -(P V_f - P V_i) = -\Delta(PV)
$$

이 식은 과정 도중에 계 내부 압력이 잘 정의되지 않는 **irreversible process에서도 성립**한다. 사용한 것이 $P_{\text{ext}}$뿐이기 때문이다.

**(2) $PV$ work 이외의 일이 없다는 가정.** $\Delta F \le \Delta W$의 $\Delta W$는 계가 받은 **모든** 일이다. 이를 나누어 쓰면,

$$
\Delta W = -P\Delta V + \Delta W_{\text{other}}
$$

$$
\Delta F + P\Delta V = \Delta G \le \Delta W_{\text{other}}
$$

필기는 $\Delta W_{\text{other}} = 0$인 경우라서 $\Delta G \le 0$이 된 것이다. 일반적으로는 **$-\Delta G$가 부피 팽창 일을 제외하고 뽑아낼 수 있는 일(non-expansion work)의 최댓값**이라는 의미를 가진다. 전지의 전기적 일이나 ATP 가수분해로 분자 모터가 하는 일이 이런 예이다.

Grand canonical의 경우도 같은 구조다. $\mu$가 고정된 particle reservoir가 계에 해 주는 chemical work가 $\mu \Delta N$이고, 이를 빼면 $\Delta(F - \mu N) = \Delta \Omega_G \le \Delta W_{\text{other}}$이다.

### Q3. Jarzynski equality의 average는 무엇에 대한 average인가?

**같은 nonequilibrium protocol을 여러 번 반복했을 때, 실행(trajectory)마다 달라지는 work의 분포 $P_F(W)$에 대한 평균이다.**

**설정**
1. Control parameter $\lambda$ (예: 광학 집게의 위치, 분자를 당기는 길이)를 정해진 schedule $\lambda(t)$에 따라 시간 $\tau$ 동안 $\lambda_A \to \lambda_B$로 바꾼다. 빠르게 바꿔도 된다.
2. 매 실행의 **초기 상태는 $\lambda_A$, 온도 $T$에서의 canonical equilibrium 분포**에서 뽑는다.
3. Thermal fluctuation 때문에 실행마다 microscopic trajectory가 다르고, 따라서 한 일 $W$도 매번 다르다. $W$는 random variable이다.

$$
\langle e^{-\beta W} \rangle = \int dW\, P_F(W)\, e^{-\beta W} = e^{-\beta \Delta F}, \qquad \Delta F = F(\lambda_B) - F(\lambda_A)
$$

**Crooks relation에서 바로 나온다.** $P_F(W) e^{-\beta W} = e^{-\beta\Delta F} P_R(-W)$이므로, 양변을 $W$로 적분하면

$$
\int dW\, P_F(W)\, e^{-\beta W} = e^{-\beta \Delta F} \int dW\, P_R(-W) = e^{-\beta \Delta F}
$$

이 된다. 그래서 average의 대상이 forward process의 work 분포라는 것이 분명해진다.

**주의할 점**
- **초기 상태만 평형이면 된다.** 끝 상태는 평형이 아니어도 된다. 그런데도 우변의 $\Delta F$는 두 **평형** 상태 사이의 free energy 차이다. 비평형 실험 데이터로 평형 성질을 얻을 수 있다는 점이 이 식의 놀라운 부분이다.
- **드문 trajectory가 평균을 지배한다.** 개별 실행에서는 $W < \Delta F$인 경우, 즉 개별적으로 2nd law를 "위반"하는 trajectory가 생길 수 있다. 지수 평균에서는 이런 trajectory의 기여가 크게 증폭된다. 따라서 이를 충분히 샘플링하지 못하면 추정이 크게 편향된다.
- **거시계에서는 고전 열역학으로 돌아간다.** Fluctuation이 무시할 만해서 $P_F(W)$가 $\langle W \rangle$ 근처의 delta function처럼 좁아지고, Jensen's inequality에서 얻는 $\langle W \rangle \ge \Delta F$만 남는다. 이것이 필기의 "그냥 열역학 제2법칙이다"이다.
- **Integral FT와의 연결.** $k_B$ 단위에서 total entropy production을 $\Delta S_{\text{tot}} = \beta(W - \Delta F)$로 두면, Jarzynski equality는 $\langle e^{-\Delta S_{\text{tot}}} \rangle = 1$과 같은 식이다.

실험적으로는 RNA hairpin을 optical tweezers로 당기는 single-molecule 실험에서 검증되었다 (Liphardt et al., Science 2002).

# 연관 학습 노트

- [[열역학 자연변수와 르장드르 변환]]
- [[Thermodynamic Uncertainty Relation]]

# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium]]

# 필기 원본

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_13.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_14.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_15.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_16.jpg]]

