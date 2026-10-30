---
title: SM lecture note - Gibbs-Duhem Relation and Conditions for Equilibrium
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

[[SM lecture note - Free Energies and Fluctuation Theorems|3rd week - Free Energies and Fluctuation Theorems]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

4th week

## Equilibrium & Stability

**Gibbs–Duhem relations** → intensive variable이 연결되어 있다.

### Homogeneous function

$E(S, V, N)$에서 $(S, V, N, E)$ are proportional to system size.

For any $\lambda > 0$,

$$
E(\lambda S, \lambda V, \lambda N) = \lambda E(S, V, N)
$$

$E(S, \{X_i\})$ is a **first order homogeneous function**. ($\{X_i\}$: other extensive variables)

**Homogeneous function of degree $n$**

$$
f(\lambda x) = \lambda^n f(x)
$$

Let $n = 1$, $f(\{X_i\})$ is a first order homogeneous function of $\{X_i\}$, and $u_i = \lambda X_i$.

$$
f(\{u_i\}) = \lambda f(\{X_i\})
$$

양변을 $\lambda$로 미분하면,

$$
\left(\frac{\partial f(\{u_i\})}{\partial \lambda}\right)_{\{X_i\}} = f(\{X_i\}) = \sum_{j=1}^{n} \left(\frac{\partial f(\{u_i\})}{\partial u_j}\right)_{u_{i \neq j}} \left(\frac{\partial u_j}{\partial \lambda}\right) = \sum_{j=1}^{n} \left(\frac{\partial f}{\partial u_j}\right)_{u_{i \neq j}} X_j
$$

### Euler's theorem

Let $\lambda = 1$, $u_i = X_i$.

$$
f(X_1, \cdots, X_n) = \sum_{j=1}^{n} \left(\frac{\partial f}{\partial X_j}\right)_{X_{i \neq j}} X_j
$$

에너지에 적용하면,

$$
E(S, \{X_i\}) = \left(\frac{\partial E}{\partial S}\right)_{\{X_i\}} S + \sum_i \left(\frac{\partial E}{\partial X_i}\right)_{X_{j \neq i}, S} X_i
$$

$$
E(S, \{X_i\}) = TS + \sum_i f_i X_i
$$

Compare with first law:

$$
dE = T\,dS + \sum_i f_i\, dX_i
$$

---

## Relation among intensive variables

### 1. Homogeneous fluid

$$
E = TS - PV + \mu N
$$

$$
dE = d(TS) - d(PV) + d(\mu N) = T\,dS + S\,dT - P\,dV - V\,dP + \mu\,dN + N\,d\mu
$$

With first law: $dE = T\,dS - P\,dV + \mu\,dN$
![[Pasted image 20261029083522.png]]
> [!important] Gibbs–Duhem relation
> $$
> S\,dT - V\,dP + N\,d\mu = 0
> $$

$$
d\mu = \frac{V}{N}dP - \frac{S}{N}dT \quad \Rightarrow \quad \mu(P, T)
$$

### 2. $r$-component heterogeneous fluid

![[Pasted image 20261029083634.png]]

$$
S\,dT - V\,dP + \sum_{\alpha=1}^{r} N_\alpha\, d\mu_\alpha = 0
$$

$$
G = E - TS + PV = \sum_{\alpha=1}^{r} \mu_\alpha N_\alpha
$$

$$
G = \sum_{\alpha=1}^{r} \mu_\alpha N_\alpha
$$

→ 이것이 Gibbs free energy의 정의다.

For a homogeneous fluid:

$$
\mu = \frac{G}{N}
$$

---

## Maxwell relations

$$
\left(\frac{\partial S}{\partial V}\right)_{T,N} = \ ?
$$

$$
dF = -S\,dT - P\,dV + \mu\,dN \quad \Longleftrightarrow \quad S = -\left(\frac{\partial F}{\partial T}\right)_{V,N}, \quad P = -\left(\frac{\partial F}{\partial V}\right)_{T,N}
$$

$$
\left(\frac{\partial S}{\partial V}\right)_{T,N} = \frac{\partial}{\partial V}\left(-\left.\frac{\partial F}{\partial T}\right|_{V,N}\right)_{T,N} = -\frac{\partial}{\partial T}\left(\left.\frac{\partial F}{\partial V}\right|_{T,N}\right)_{V,N} = \left.\frac{\partial P}{\partial T}\right|_{V,N}
$$

> [!important] Maxwell relation
> $$
> \left.\frac{\partial S}{\partial V}\right|_{T,N} = \left.\frac{\partial P}{\partial T}\right|_{V,N}
> $$


![[Pasted image 20261029083725.png]]

> [!note] 그림
> Maxwell relation 암기용 thermodynamic square.
> ```
> V  F  T
> U     G
> S  H  P
> ```
> 왼쪽 열 ($V$, $S$)과 오른쪽 열 ($T$, $P$)을 화살표로 이어 $\partial S/\partial V$ (보라)와 $\partial P/\partial T$ (하늘)를 짝짓는다.

---

## Conditions for EQ

![[Pasted image 20261029083747.png]]

$$
dE = T\,dS - P\,dV + \mu\,dN
$$

$$
dS = \frac{1}{T}dE + \frac{P}{T}dV - \frac{\mu}{T}dN
$$

### 1. Allow heat exchange → Thermal equilibrium

$$
\Delta S = \Delta S_A + \Delta S_B \ge 0
$$

→ by second law

$$
\Delta S = \left(\frac{\partial S_A}{\partial E_A}\right)_{N_A, V_A} \Delta E_A + \left(\frac{\partial S_B}{\partial E_B}\right)_{N_B, V_B} \Delta E_B = \frac{\Delta E_A}{T_A} + \frac{\Delta E_B}{T_B}
$$

1st law에 의해 $\Delta E_A = -\Delta E_B$이므로,

$$
\Delta S = \Delta E_A \left(\frac{1}{T_A} - \frac{1}{T_B}\right) \ge 0
$$

- 만약 $T_A > T_B$라면, $\Delta E_A < 0$: 열이 A → B
- If $T_B > T_A$, $\Delta E_A \ge 0$: 열이 B → A

### 2. Allow volume exchange → Mechanical equilibrium

$$
\Delta V_A = -\Delta V_B
$$

$$
\Delta S = \frac{\Delta E_A}{T_A} + \frac{\Delta E_B}{T_B} + \frac{P_A}{T_A}\Delta V_A + \frac{P_B}{T_B}\Delta V_B
$$

$$
\Delta S = \Delta E_A\left(\frac{1}{T_A} - \frac{1}{T_B}\right) + \Delta V_A\left(\frac{P_A}{T_A} - \frac{P_B}{T_B}\right)
$$

If $T_A = T_B$,

$$
\Delta V_A (P_A - P_B) \ge 0
$$

If $P_A > P_B$, $\Delta V_A > 0$ → **압력 큰 쪽이 팽창**

### 3. Allow particle exchange → Chemical EQ

$$
\Delta S = \frac{1}{T}\Delta E + \frac{P}{T}\Delta V - \frac{\mu}{T}\Delta N
$$

If two reached at thermal & mechanical equilibrium,

$$
-\Delta N_A \frac{1}{T_{\text{eq}}}(\mu_A - \mu_B) \ge 0
$$

If $\mu_A > \mu_B$, $\Delta N_A < 0$ → **입자는 chemical potential이 높은 곳에서 낮은 곳으로.**

> [!important]
> 평형은 **intensive variable이 같아지는 것**.

# 궁금한 내용


# AI의 보충 설명


# 연관 학습 노트

- [[열역학 자연변수와 르장드르 변환]]

# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[SM lecture note - Phase Equilibrium and Maxwell Construction]]

# 필기 원본


![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_19.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_20.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_21.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_22.jpg]]

![[1793335407270-4b31de06-bb16-41b1-8514-9a9a09663c64_23.jpg]]

