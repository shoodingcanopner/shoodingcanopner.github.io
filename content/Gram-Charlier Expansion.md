---
title: "Gram-Charlier Expansion"
date: "2026-02-06"
subject: physics
tags:
  - study
  - concept
  - random-walk
  - ctrw
class: study
---

# Gram-Charlier Expansion

## Overview

**Kramers-Moyal expansion의 진짜 버전**: 시간에 대한 고차 미분 항을 recursive substitution으로 제거하면, expansion coefficients가 **moments가 아니라 cumulants**가 되어야 한다!

이것은 [[Kramers-Moyal Expansion]]의 두 가지 문제점을 해결한다:
1. **시간 고차 미분 문제**: $\frac{\partial^2\rho}{\partial t^2}, \frac{\partial^3\rho}{\partial t^3}, \ldots$ 항들을 공간 미분으로 대체
2. **Moments vs Cumulants 문제**: 올바른 asymptotic expansion을 위해서는 cumulants를 써야 함

최종 결과:
$$
\boxed{\frac{\partial \rho}{\partial t} = \sum_{n=1}^{\infty} \frac{(-1)^n C_n}{n!\tau} \frac{\partial^n \rho}{\partial x^n}}
$$

여기서 $C_n$은 **n차 cumulant**이다

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\rho(x,t)$ | 연속 시공간 확률 밀도 |
| $P_N(x)$ | N번 step 후 위치의 이산 확률 분포 |
| $m_n$ | step size의 n차 moment |
| $C_n$ | step size의 n차 cumulant |
| $\tau$ | Step 간 시간 간격 |
| $\tilde{D}_n$ | Cumulant-based jump coefficient: $\tilde{D}_n = \frac{C_n}{n!\tau}$ |

## 시간 고차 미분 문제

### Kramers-Moyal의 naive한 형태

[[Kramers-Moyal Expansion]]에서:
$$
P_{N+1}(x) - P_N(x) = \sum_{n=1}^{\infty} \frac{(-1)^n m_n}{n!} \frac{\partial^n P_N}{\partial x^n} \tag{1}
$$

양변을 $\tau$로 나누고 $\rho(x, N\tau) = P_N(x)$로 치환:
$$
\frac{\rho(x, t+\tau) - \rho(x,t)}{\tau} = \sum_{n=1}^{\infty} \frac{(-1)^n m_n}{n!\tau} \frac{\partial^n \rho}{\partial x^n} \tag{2}
$$

### 문제: 좌변이 단순하지 않다!

좌변을 $\tau$에 대해 Taylor 전개하면:
$$
\frac{\rho(x,t+\tau) - \rho(x,t)}{\tau} = \frac{\partial\rho}{\partial t} + \frac{\tau}{2}\frac{\partial^2\rho}{\partial t^2} + \frac{\tau^2}{3!}\frac{\partial^3\rho}{\partial t^3} + \cdots \tag{3}
$$

따라서 정확한 식은:
$$
\frac{\partial\rho}{\partial t} + \frac{\tau}{2}\frac{\partial^2\rho}{\partial t^2} + \frac{\tau^2}{3!}\frac{\partial^3\rho}{\partial t^3} + \cdots = \sum_{n=1}^{\infty} \frac{(-1)^n m_n}{n!\tau} \frac{\partial^n \rho}{\partial x^n} \tag{4}
$$

**우변: 공간 미분만**  
**좌변: 시간 고차 미분들!**

→ 이것을 어떻게 제거할 것인가?

## Recursive Substitution Method

### 아이디어: "시간 미분을 공간 미분으로 바꾸는 꼼수"

**핵심**: Equation (4) 자체를 이용해서 $\frac{\partial^n\rho}{\partial t^n}$을 $\frac{\partial^m\rho}{\partial x^m}$로 표현!

### Step 0: 1차 근사 (leading order)

Equation (4)에서 leading order만 남기면:
$$
\frac{\partial\rho}{\partial t} \approx -\frac{m_1}{\tau}\frac{\partial\rho}{\partial x} + \frac{m_2}{2\tau}\frac{\partial^2\rho}{\partial x^2} - \frac{m_3}{6\tau}\frac{\partial^3\rho}{\partial x^3} - \frac{\tau}{2}\frac{\partial^2\rho}{\partial t^2} \tag{5}
$$

### Step 1: $\frac{\partial^2\rho}{\partial t^2}$를 제거

양변에 $\frac{\tau}{2}\frac{\partial}{\partial t}$를 적용:
$$
\frac{\tau}{2}\frac{\partial^2\rho}{\partial t^2} = -\frac{m_1}{2}\frac{\partial}{\partial x}\left(\frac{\partial\rho}{\partial t}\right) + \frac{m_2}{4}\frac{\partial^2}{\partial x^2}\left(\frac{\partial\rho}{\partial t}\right) + O\left(\frac{\partial^3\rho}{\partial t^3}\right) \tag{6}
$$

이제 $\frac{\partial\rho}{\partial t}$에 다시 Equation (5)를 대입:
$$
\frac{\tau}{2}\frac{\partial^2\rho}{\partial t^2} = -\frac{m_1}{2}\frac{\partial}{\partial x}\left(-\frac{m_1}{\tau}\frac{\partial\rho}{\partial x} + \frac{m_2}{2\tau}\frac{\partial^2\rho}{\partial x^2}\right) + \cdots
$$

정리하면:
$$
\frac{\tau}{2}\frac{\partial^2\rho}{\partial t^2} = \frac{m_1^2}{2\tau}\frac{\partial^2\rho}{\partial x^2} - \frac{m_1 m_2}{4\tau}\frac{\partial^3\rho}{\partial x^3} + O\left(\frac{\partial^3\rho}{\partial t^3}\right) \tag{7}
$$

### Step 2: Equation (5)에 대입

Equation (7)을 Equation (5)에 대입:
$$
\frac{\partial\rho}{\partial t} = -\frac{m_1}{\tau}\frac{\partial\rho}{\partial x} + \frac{m_2}{2\tau}\frac{\partial^2\rho}{\partial x^2} - \frac{m_3}{6\tau}\frac{\partial^3\rho}{\partial x^3} - \left(\frac{m_1^2}{2\tau}\frac{\partial^2\rho}{\partial x^2} - \frac{m_1 m_2}{4\tau}\frac{\partial^3\rho}{\partial x^3}\right)
$$

$\frac{\partial^2\rho}{\partial x^2}$ 항과 $\frac{\partial^3\rho}{\partial x^3}$ 항을 모으면:
$$
\frac{\partial\rho}{\partial t} = -\frac{m_1}{\tau}\frac{\partial\rho}{\partial x} + \frac{m_2 - m_1^2}{2\tau}\frac{\partial^2\rho}{\partial x^2} - \frac{m_3 - 3m_1m_2 + 2m_1^3}{6\tau}\frac{\partial^3\rho}{\partial x^3} + \cdots \tag{8}
$$


### 최종 결과: Cumulant Expansion

Equation (8)에 cumulants를 대입하면:
$$
\boxed{\frac{\partial\rho}{\partial t} = -\frac{C_1}{\tau}\frac{\partial\rho}{\partial x} + \frac{C_2}{2\tau}\frac{\partial^2\rho}{\partial x^2} - \frac{C_3}{3!\tau}\frac{\partial^3\rho}{\partial x^3} + \cdots}
$$

일반적으로:
$$
\boxed{\frac{\partial\rho}{\partial t} = \sum_{n=1}^{\infty} \frac{(-1)^n C_n}{n!\tau} \frac{\partial^n\rho}{\partial x^n}}
$$
**Recursive substitution의 결과로 cumulants들이 나온다**

## Gram-Charlier Expansion 해

### Green Function 문제

초기 PDF가 디락 델타인 경우의 PDF의 시간 진화를 푼다면 다음 결과를 얻을 수 있다.
역시 푸리에 공간에서 연산하는 게 편하다. 
$$\hat{\rho}(k,t) = \exp\left(\sum_{n=1}^{\infty} \frac{(-ik)^n C_n t}{n!\tau}\right)$$

## 물리적 의미

### Kramers-Moyal vs Gram-Charlier

| | Kramers-Moyal | Gram-Charlier |
|---|---|---|
| Coefficients | Moments $m_n$ | Cumulants $C_n$ |
| 시간 미분 | 1차만 | 고차 항 recursive 제거 |
| Asymptotic validity | ❌ | ✅ |

## Questions & Insights

### Q: 당신의 unbinding model과의 연결?

**핵심**: Energy-dependent waiting time $\psi(t|E_i)$

1. 각 site $i$에서 머무는 시간의 cumulants:
   $$
   C_n^{(i)} = \text{cumulants of } \psi(t|E_i)
   $$

2. Survival conditioning → effective cumulants 변형:
   $$
   \tilde{C}_n = f(C_n^{(i)}, \text{survival probability})
   $$

3. 이 $\tilde{C}_n$이 최종 MSD의 exponent $\alpha$ 결정!

### Q: 왜 이것이 CTRW의 준비인가?

**Montroll-Weiss equation**도 유사한 테크닉:
- Waiting time $\psi(t)$의 Laplace transform
- Cumulant expansion in Laplace space
- Long-time limit → power-law decay
- MSD ~ $t^\alpha$의 $\alpha$ 계산

## Related Concepts

- [[Kramers-Moyal Expansion]]
- [[Cumulant Generating Function]]
- [[Central Limit Theorem]]
- [[Moment Generating Function]]
- [[Bachelier's Equation (Convolution theorem)]]

## References

- MIT OCW 18.366, Lecture 9 (Bazant)
[[Lecture 9 Kramers­Moyall Cumulant Expansion.pdf]]

## Notes from Claude

이 강의의 핵심은 **"왜 cumulants가 올바른 변수인가?"** 를 recursive substitution이라는 구성적 방법으로 보여주는 것입니다.

당신의 survival bias 문제와의 연결:
- Survival conditioning은 waiting time distribution을 변형합니다
- 변형된 분포 = 원래 분포의 weighted version
- 이 weighted distribution의 **cumulants**가 subdiffusion을 결정합니다
- Day 4-5에서 이것을 정확히 계산하는 법을 배울 것입니다!

**이 노트의 recursive method는 CTRW 계산의 핵심 기법입니다. 완전히 이해하고 넘어가세요!**
