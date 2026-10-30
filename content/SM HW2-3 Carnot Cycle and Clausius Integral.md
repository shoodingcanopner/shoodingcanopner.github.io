---
title: SM HW2-3 Carnot Cycle and Clausius Integral
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 2nd HW, Problem 3

# 문제

Carnot engine의 한 cycle에 대해 다음을 명시적으로 보여라. ([[SM HW2-2 Adiabatic Relations of an Ideal Gas|HW2-2]]의 adiabatic relation을 사용할 것)

$$
\oint \frac{dQ}{T} = 0
$$
Adiabatic relation

$$
\left(\frac{T}{T_0}\right)^{3/2} = \frac{V_0}{V}, \qquad \left(\frac{T}{T_0}\right)^{5/2} = \frac{p}{p_0}, \qquad pV^{5/3} = \text{const}
$$



# 내 풀이
![[Pasted image 20261030123630.png]]
- **$a \to b$ (등온 팽창, $T_H$)**: $\text{đ}Q = -\text{đ}W = P\,dV$이므로 

$$
\int_a^b \frac{\text{đ}Q}{T} =\frac{1}{T_H} \int_a^b P dV 
$$
이상기체 상태 방정식 $P = Nk_bT \frac{1}{V}$를 이용, 
$$
\frac{T_H}{T_H}N k_B \int_a^b\frac{1}{V}dV  = Nk_B\ln\frac{V_b}{V_a}
$$

- **$b \to c$ (단열 팽창)**: $\text{đ}Q = 0$. 엔트로피 변화는 없음
Adiabatic relation: 
$$\left(\frac{T_c}{T_H}\right)^{3/2} = \frac{V_b}{V_c}$$

- **$c \to d$ (등온 압축, $T_c$)**: 
$$\int_c^d \frac{\text{đ}Q}{T} = Nk_B\ln\frac{V_d}{V_c}$$

- **$d \to a$ (단열 압축)**: $\text{đ}Q = 0$. 
Adiabatic relation: 
$$\left(\frac{T_H}{T_c}\right)^{3/2} = \frac{V_d}{V_a}$$

합하면 
$$Nk_B\ln\left[\left(\frac{V_b}{V_a}\right)\left(\frac{V_d}{V_c}\right)\right] =Nk_B\ln\left[\left(\frac{T_H}{T_c}\right)^{3/2}\left(\frac{T_c}{T_H}\right)^{3/2}\right] = Nk_B\ln 1 = 0$$

# 풀이 검토

**판정: 결과와 핵심 논리는 맞다.** 중간 식 한 줄과 풀이의 출발점, 일반성에 대해 짚을 것이 있다.


> [!tip] 4. 이 결과의 또 다른 의미
> 계산 과정에서 $Q_2/T_H = Q_1/T_c$, 즉 $Q_1/Q_2 = T_c/T_H$가 나온다. 이는 **ideal gas 온도가 Kelvin의 thermodynamic temperature와 일치함**을 보여준다. [[SM HW1-1 Ideal Gas and Absolute Temperature|HW1-1]]에서 감점받은 "thermodynamic 온도의 정의"와 직결된다.

> [!tip] 5. 표기
> 저온 reservoir를 $T_c$로 쓰면 critical temperature $T_c$와 혼동된다. 시험에서는 $T_C$나 $T_1$, $T_2$처럼 구분해 쓰는 편이 안전하다.

# 연관 노트

- [[SM lecture note - Carnot Engine and Thermodynamic Entropy]]
- [[SM HW2-2 Adiabatic Relations of an Ideal Gas]]

# 다음 문제
- [[SM HW2-4 Kelvin and Clausius Statements|HW2-4 Kelvin and Clausius Statements]]