---
title: "QM lecture note - Heisenberg Picture and Equations of Motion"
date: "2026-03-24"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[QM lecture note - Time Evolution Operator]]

# 오늘의 핵심

슈뢰딩거 묘사와 하이젠베르크 묘사는 서로 dual한 관점이다. 슈뢰딩거에서는 ket이 시간에 따라 진화하고 operator는 고정되지만, 하이젠베르크에서는 ket이 고정되고 operator가 시간에 따라 진화한다. Heisenberg equation of motion은 고전역학의 Hamilton 방정식과 정확히 대응된다. 

$$
\frac{dA^H}{dt} = \frac{1}{i\hbar}[A^H, \mathcal{H}]
$$
고전역학에서는 이랬었다. Lie bracket 대신 poisson bracket 을 쓴다. 
$$
\frac{dA}{dt} = \{A, \mathcal{H}\}
$$

# 필기 내용

## 슈뢰딩거 묘사 vs 하이젠베르크 묘사

Time evolution이 **unitary operator**라는 점을 이용한다.

$$
|\alpha\rangle \xrightarrow{\text{time}} \mathcal{U}|\alpha\rangle
$$

Bra-operator-ket에 time evolution을 끼워 넣으면:

$$
\langle \beta | X | \alpha \rangle \;\to\; \langle \beta | \mathcal{U}^\dagger X \mathcal{U} | \alpha \rangle = \langle \beta | (\mathcal{U}^\dagger X \mathcal{U}) | \alpha \rangle
$$

**두 묘사의 정의:**

- **슈뢰딩거 묘사 (Schrödinger Picture)**: Operator $A^S$는 고정, ket이 시간에 따라 진화한다.
- **하이젠베르크 묘사 (Heisenberg Picture)**: ket은 고정, Operator가 시간에 따라 진화한다.

$$
A^H(t) = \mathcal{U}^\dagger A^S(t) \,\mathcal{U}
$$

여기서 $\mathcal{U}$는 $t=0$에서 $t$로 이동시키는 연산자, 즉 $\mathcal{U} = \exp\!\left(-\dfrac{i}{\hbar}\mathcal{H}t\right)$.

**두 묘사는 $t = 0$에서 일치한다:**

$$
t = 0 \text{ 이라면 } A^H = A^S
$$

$$
t > 0 \text{ 이면,} \quad
\begin{cases}
|\alpha, t\rangle^H = |\alpha, 0\rangle \\
|\alpha, t\rangle^S = \mathcal{U}|\alpha, 0\rangle
\end{cases}
$$

Expectation value는 두 묘사를 써도 같다:

$$
{}^S\!\langle \alpha, t | A^S | \alpha, t \rangle^S = \langle \alpha, 0 | \mathcal{U}^\dagger A^S \mathcal{U} | \alpha, 0 \rangle
$$

$$
{}^H\!\langle \alpha, t | A^H | \alpha, t \rangle^H = \langle \alpha, 0 | \mathcal{U}^\dagger A^S \mathcal{U} | \alpha, 0 \rangle
$$

---

## Heisenberg Equation of Motion

Hamiltonian의 시간 의존성 ($\mathcal{H}$가 시간 독립인 경우):

$$
A^H(t) = \exp\!\left(\frac{i}{\hbar}\mathcal{H}t\right) A^S(0) \exp\!\left(-\frac{i}{\hbar}\mathcal{H}t\right)
$$

이를 $t$에 대해 미분하면:

$$
\frac{\partial A^H}{\partial t}(t) = \left(\frac{i}{\hbar}\mathcal{H}\right) A^H - A^H \left(\frac{i}{\hbar}\mathcal{H}\right) = \frac{i}{\hbar}[\mathcal{H}, A^H] = \frac{1}{i\hbar}[A^H, \mathcal{H}]
$$

이것이 **Heisenberg의 equation of motion**이다.

> [!info] 상수 운동 (Constant of Motion)
> $A^H$가 $\mathcal{H}$과 commute하면, $A$는 **constant of motion**이다.

---

## 예시: 위치 연산자의 시간 진화

유용한 commutation relation:

$$
[x, P] = i\hbar, \qquad [x_i, F(P)] = i\hbar\frac{\partial F}{\partial P_i}, \qquad [P_i, G(x)] = -i\hbar\frac{\partial G}{\partial x_i}
$$

Hamiltonian이 $\mathcal{H} = \dfrac{P^2}{2m} + V(x)$일 때:

$$
\frac{\partial x^H}{\partial t} = \frac{1}{i\hbar}[x, \mathcal{H}] = \frac{1}{i\hbar}\left[x, \frac{P^2}{2m} - V(x)\right] = \frac{1}{2mi\hbar}[x, P^2]
$$

여기서 $[x, P^2]$를 recurrent하게 찾거나 포아송 괄호와의 관계를 이용하면:

$$
\frac{\partial x^H}{\partial t} = \frac{1}{2mi\hbar}(i\hbar \cdot 2P) = \frac{P}{m}
$$

마찬가지로:

$$
\frac{\partial x^H}{\partial t} = \frac{\partial \mathcal{H}}{\partial P}, \qquad \frac{\partial P^H}{\partial t} = -\frac{\partial \mathcal{H}}{\partial x}
$$

이는 **포아송 괄호로 나타낸 Hamilton 방정식과 동일한 형태**이다!

---

## Ehrenfest Theorem

Hamiltonian $\mathcal{H} = \dfrac{1}{2m}P^2 + \sum a_i x_i + \sum b_{ij}x_i x_j$에 대한 예시:

$$
\frac{\partial x_i}{\partial t} = \frac{i\hbar}{i\hbar}\frac{\partial \mathcal{H}}{\partial P} = \frac{P_i}{m}
$$

$$
\frac{dP_i}{dt} = -\frac{\partial}{\partial x_i}V
$$

$$
\frac{d^2 x_i}{dt^2} = \frac{1}{i\hbar}\left[\frac{dx_i}{dt}, \mathcal{H}\right] = \frac{1}{i\hbar}\left[\frac{1}{m}P_i, \mathcal{H}\right] = \frac{1}{m}\frac{dP_i}{dt} = -\frac{1}{m}\frac{\partial}{\partial x_i}V(x)
$$

따라서 **하이젠베르크 묘사에서 관계를 완전히 고전 역학과 같게 쓸 수 있다**:

$$
m\frac{d^2 x_i}{dt^2} = -\nabla V
$$

Expectation value에 대해서도 마찬가지:

$$
m\frac{d^2}{dt^2}\langle x_i \rangle = -\nabla\langle V(x) \rangle = \frac{d}{dt}\langle P_i \rangle
$$

> [!question] 이렇게 시간 미분을 $\langle\;\rangle$ 밖으로 뺄 수 있는가?
> 하이젠베르크 묘사에서 ket은 시간 불변이고 operator만 시간에 따라 변하므로, expectation value를 시간에 대해 미분하면 operator의 시간 미분만 남는다. 따라서 미분 기호를 expectation value 밖으로 꺼낼 수 있다.

---

## Base Ket의 시간 진화

하이젠베르크 묘사에서 base ket이 어떻게 변하는가?

Observable이 시간에 대해 변하므로 (eigenbasis 또한 시간에 따라 달라진다).

$$
t = 0 \text{ 일 때:} \quad |a'\rangle^H = |a'\rangle^S
$$

$$
t > 0 \text{ 이면:} \quad |a'\rangle^H = \mathcal{U}^\dagger |a'\rangle^S = \mathcal{U}^\dagger |a', 0\rangle^H
$$

**증명:**

$$
\mathcal{U}^\dagger A^S \mathcal{U}\, \mathcal{U}^\dagger |a'\rangle^S = \mathcal{U}^\dagger a' |a'\rangle^S = A^H \mathcal{U}^\dagger |a'\rangle^S = a'|a', t\rangle^H
$$

이 성립하므로 $|a', t\rangle^H = \mathcal{U}^\dagger |a'\rangle^S$.

**두 묘사에서 시간이 진화하는 방향이 반대:**
- 슈뢰딩거 묘사에서 ket이 시간 진화하는 것과 반대로
- 하이젠베르크 묘사에서 base ket이 변화한다.

Operator를 eigenket으로 전개하면:

$$
A^H(t) = \sum_{a'} |a', t\rangle^H a'_H \,{}^H\!\langle a', t|^H = \sum_{a'} \mathcal{U}^\dagger |a'\rangle^S a'_H \langle a'|^S \mathcal{U} = \mathcal{U}^\dagger A^S \mathcal{U}
$$

Coefficient는:

$$
C_{a'}(t) = \langle a' | \alpha, t \rangle = \langle a' | \mathcal{U} | \alpha, 0 \rangle = (\mathcal{U}^\dagger |a'\rangle)^\dagger |\alpha, 0\rangle
$$

---

## Active Transform vs Passive Transform

| 구분 | 묘사 | 무엇이 변하는가 |
|------|------|----------------|
| Active Transform | 슈뢰딩거 묘사 | 물체(ket)의 위치가 바뀜 |
| Passive Transform | 하이젠베르크 묘사 | 좌표계(base ket)가 바뀜 |

**하이젠베르크 묘사에서:**
- ket이 시간이 지나도 불변한다.
- $t=0$에서 eigenket을 basis로 사용했을 때 coefficient가 불변한다.

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

[[QM lecture note - Time Evolution Operator]]

# References

# 다음 강의

[[QM lecture note - Simple Harmonic Oscillator]]

# 원본 필기 이미지

[[QM_5thweek_1.pdf]]
