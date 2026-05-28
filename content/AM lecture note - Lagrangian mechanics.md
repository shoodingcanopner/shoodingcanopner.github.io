---
title: AM lecture note - Lagrangian mechanics
date: 2026-02-26
subject: physics
tags:
  - study
  - concept
  - question
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Analytical Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의
[[AM lecture note - Transformation of equation, Casimir Invariants]]

# 오늘의 핵심

라그랑지안 역학을 설명하려다가 수업 시간이 끝나가서 마친 날. 
이 노트에는 학부때 배운 내용밖에 없다. 
웬만한 내용은 다음 강의 노트에 정리가 더 잘 되어 있다. 

# 필기 내용


## 라그랑주 역학

고전역학에서 보는 것, 뉴턴 방정식

$$
m\frac{d^2X(t)}{dt^2} = -\frac{dV(X(t))}{dX(t)}
$$
이것을 어떻게 라그랑지안 역학으로 설명할 것인가?
**Action:**

$$
S[x^A(t)] = \int_{t_i}^{t_f} dt\ \mathcal{L}[x^A(t), \dot{x}^A(t)]
$$

(world line의 개념: 시공간에서 입자가 그리는 궤적)

변분법에 의해, 실제 취해지는 world line은 액션을 최소화하는(더 엄밀히 말하면, 액션이 극값을 가지게 하는) $x^A(t)$이다. 

$$
\delta S[x^A(t)] = 0
$$
잘 유도를 하면 바로 위의 식은 바로 아래 식이 된다. 
$$
\frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}} = 0 \quad (\text{오일러-라그랑주 방정식})
$$

오일러 라그랑주 방정식이 뉴턴 운동방정식과 같아지게 만드는 라그랑지안은 아래와 같다. 
$$
\mathcal{L}(x, \dot{x}) = \frac{1}{2}m\dot{x}^2 - V
$$

이게 아닌 다른 형태도 가능하다. 예를 들어:

$$
\mathcal{L}_2 = -\frac{1}{2}q\ddot{q}
$$

$$
\tilde{\mathcal{L}}_2 = \frac{1}{2}\dot{q}^2 = \mathcal{L}_2 + \frac{1}{2}\frac{d}{dt}(q\dot{q})
$$

이 두 라그랑지안은 t에 대한 total derivative term만큼만 다르다. 
라그랑지안에 붙은 시간에 대한 total derivative term은 equation of motion을 변화시키지 않는다. 왜 그런지는 다음 강의 노트에서 풀어봤다. 

$\mathcal{L}_2$를 오일러-라그랑주에 넣으면 $\ddot{q} = 0$.

$$
\delta S_2 = \left(\frac{1}{2}q\delta\dot{q} - \frac{1}{2}\dot{q}\delta q\right)^{t_f}_{t_i}
$$

boundary condition으로 $\delta \dot{q}(t_i) = \delta \dot{q}(t_f) = 0$이 요구된다.

**Gibbons-Hawking-York term** — 이 경계 조건 관련된 용어, 나중에 알아봐야 한다.

# 궁금한 내용

### $\mathcal{L} = \frac{1}{2}m\dot{x}^2 - V$가 유일한 라그랑지안인가? 이게 어떻게 정의되지?

### Gibbons-Hawking-York term이 뭔가?


# AI의 보충 설명


# 연관 학습 노트

[[The True Nature of Lagrangian]]

# References

Tong의 강의록
[[2 The Lagrangian Formalism.pdf]]

# 다음 강의
[[AM lecture note - Lagrangian for fields]]


![[Pasted image 20260304093345.png]]
