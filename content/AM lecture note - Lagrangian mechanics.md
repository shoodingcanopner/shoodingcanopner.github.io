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
[[Analytical Mechanics]]
이것은 강의를 듣고 적은 필기입니다. 
정리가 안 되어 있고, 개인적인 생각이 섞여 있을 수도 있습니다. 

# 지난 강의
[[AM lecture notes - Transformation of equation, Casimir Invariants]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용


## 라그랑주 역학

고전역학에서 보는 것:

$$
m\frac{d^2X(t)}{dt^2} = -\frac{dV(X(t))}{dX(t)}
$$

**Action:**

$$
S[x^A(t)] = \int_{t_i}^{t_f} dt\ \mathcal{L}[x^A(t), \dot{x}^A(t)]
$$

(world line의 개념: 시공간에서 입자가 그리는 궤적)

변분법에 의해, 실제 취해지는 world line은:

$$
\delta S[x^A(t)] = 0
$$

$$
\frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}} = 0 \quad (\text{오일러-라그랑주 방정식})
$$

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

이 두 라그랑지안은 t에 대한 total derivative term만큼만 다르고, 대칭성을 깨뜨리지 않으니 같은 물리를 기술한다.

$\mathcal{L}_2$를 오일러-라그랑주에 넣으면 $\ddot{q} = 0$.

$$
\delta S_2 = \left(\frac{1}{2}q\delta\dot{q} - \frac{1}{2}\dot{q}\delta q\right)^{t_f}_{t_i}
$$

boundary condition으로 $\delta q(t_i) = \delta q(t_f) = 0$이 요구된다.

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



