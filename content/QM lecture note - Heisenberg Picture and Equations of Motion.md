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

슈뢰딩거 묘사는 time evolution에 대한 active transform, 하이젠베르트 묘사는 passive transform이다. 

$$
\frac{dA^H}{dt} = \frac{1}{i\hbar}[A^H, \mathcal{H}]
$$
고전역학에서는 어떤 물리량의 시간 미분을 해밀토니안과의 푸아송 괄호호로 구했었다. 
$$
\frac{dA}{dt} = \{A, \mathcal{H}\}
$$
Poisson bracket을 Lie bracket으로 바꾸는 게 바로 양자화였다. 

# 필기 내용

## 슈뢰딩거 묘사 vs 하이젠베르크 묘사

Time evolution이 **unitary operator**라는 점을 이용한다.
원래 슈뢰딩거의 세계관에서는, 
basis와 operator는 절대 변하지 않는 양이지만, 개별 상태를 나타내는 ket들은 시간이 지남에 따라 변화하였다. 
아래 식 처럼 $\mathcal{U}$가 ket에 취해지면, 그것은 미래의 ket을 나타내었다. 

$$
|\alpha\rangle \xrightarrow{\text{time}} \mathcal{U}|\alpha\rangle
$$
미래를 나타내는 방법을 다른 방식으로 바꿀 수 있다. 

지금부터 이야기하는 **Schrödinger picture** 과 **Heisenberg Picture** 의 비교는 **active transform VS passive transform** 의 차이와 정확히 같다. 

**두 묘사의 정의:**

- **슈뢰딩거 묘사 (Schrödinger Picture)**: Operator $A^S$는 고정, ket이 시간에 따라 진화한다.
- **하이젠베르크 묘사 (Heisenberg Picture)**: ket은 고정, Operator가 시간에 따라 진화한다.

| 구분                | 묘사        | 무엇이 변하는가                             |
| ----------------- | --------- | ------------------------------------ |
| Active Transform  | 슈뢰딩거 묘사   | 물체(ket)의 위치가 바뀜                      |
| Passive Transform | 하이젠베르크 묘사 | 좌표계(base ket)가 바뀜. 연산자(operator)가 바뀜 |

**하이젠베르크 묘사에서:**
- ket이 시간이 지나도 불변한다.
- $t=0$에서 eigenket을 basis로 ket을 나타냈을 때, coefficient가 불변한다.

두가지 묘사 방식이 동등함을 쉽게 보일 수 있다. 
$\mathcal{U}$는 $t=0$에서 $t$로 이동시키는 연산자, time evolution operator, $\mathcal{U} = \exp\!\left(-\dfrac{i}{\hbar}\mathcal{H}t\right)$.
$\langle \beta | X | \alpha \rangle_t$를 계산한다고 치자, 이것은 시간 t가 지났을 때 $\langle \beta | X | \alpha \rangle$값이다. 
원래 $\bra{\beta}$와 $\ket{\alpha}$ 에 적용되어야 할 time evolution operator $\mathcal{U}$를 operator $X$에 적용시켜도, 계산 결과 $\langle \beta | X | \alpha \rangle_t$ 는 똑같다. 

$$
\langle \beta | X | \alpha \rangle \;\to\; \langle \beta | \mathcal{U}^\dagger X \mathcal{U} | \alpha \rangle = \langle \beta | (\mathcal{U}^\dagger X \mathcal{U}) | \alpha \rangle
$$
$$
A^H(t) = \mathcal{U}^\dagger A^S \,\mathcal{U}
$$

당연하지만, 두 묘사는 $t = 0$에서 일치한다. 시간 진화를 안 했으니까. 

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

Expectation value는 두 묘사를 써도 같다.
즉 실제 물리 현상으로 발현되는 값을 어느 모사를 써도 똑같이 예측할 수 있다는 뜻이다. 

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

> [!info] 운동 상수 (Constant of Motion)
> $A^H$가 $\mathcal{H}$과 commute하면, $A$는 **constant of motion**, 즉 보존량이다.

---

## 예시: 위치 연산자의 시간 진화

유용한 commutation relation.
이는 $F(P)$와 $G(x)$ 자리에 각각 P와 x에 대한 polynomial을 넣어서 직접 계산할 수 있다. 
그러나 푸아송 괄호와 commutator 사이 관계를 이용하는 게 더 쉽다. 
$$
[x, P] = i\hbar, \qquad [x_i, F(P)] = i\hbar\frac{\partial F}{\partial P_i}, \qquad [P_i, G(x)] = -i\hbar\frac{\partial G}{\partial x_i}
$$

Hamiltonian이 $\mathcal{H} = \dfrac{P^2}{2m} + V(x)$일 때:

$$
\frac{\partial x^H_{(t)}}{\partial t} = \frac{1}{i\hbar}[x, \mathcal{H}] = \frac{1}{i\hbar}\left[x, \frac{P^2}{2m} - V(x)\right] = \frac{1}{2mi\hbar}[x, P^2]
$$

아까 보인 commutation relation을 사용하면, 

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
고전역학에서 사용하던 운동방정식이 나와버린다. 
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



# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트


# References

# 다음 강의

[[QM lecture note - Simple Harmonic Oscillator]]

# 원본 필기 이미지

![[QM_5thweek_1.pdf]]

