---
title: "QM lecture note - Gauge Transformations"
date: "2026-04-08"
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

[[QM lecture note - Path Integral Formulation]]

상수 포텐셜 $V_0$를 더하면 wave function에 phase만 붙고 물리적 expectation value는 바뀌지 않는다. 전자기장이 있을 때 이 아이디어가 게이지 변환으로 일반화된다.

# 오늘의 핵심

- 전자기장 속 입자의 해밀토니안은 $\mathcal{H} = \frac{1}{2m}\!\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)^2 + e\phi$이다.
- **Canonical momentum** $\mathbf{p}$와 **Mechanical momentum** $\boldsymbol{\pi} = \mathbf{p} - \frac{e}{c}\mathbf{A}$는 다르다.
- 게이지 변환 $\mathbf{A} \to \mathbf{A} + \nabla\Lambda$, $\phi \to \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}$ 아래서 물리 observable은 불변이다.
- 변환은 unitary operator $G = \exp\!\left(\frac{ie\Lambda(\mathbf{x})}{\hbar c}\right)$으로 구현되며, ket은 $\ket{\tilde{\alpha}} = G\ket{\alpha}$로 변환된다.

# 필기 내용

## 전자기장 속 해밀토니안

전자기장 속 입자의 해밀토니안:

$$
\mathcal{H} = \frac{1}{2m}\!\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)^2 + e\phi
\tag{1}
$$

$$
= \frac{1}{2m}\!\left(\mathbf{p}^2 - \frac{e}{c}\mathbf{p}\cdot\mathbf{A} - \frac{e}{c}\mathbf{A}\cdot\mathbf{p} + \frac{e^2}{c^2}\mathbf{A}^2\right) + e\phi
\tag{2}
$$

여기서 **effective momentum** $\mathbf{p} - \frac{e}{c}\mathbf{A}$가 진짜 운동량 역할을 한다.

---

## Canonical momentum과 Mechanical momentum

운동방정식에서 속도를 구해보자:

$$
\frac{dx_i}{dt} = \frac{1}{i\hbar}\left[x_i, \mathcal{H}\right] = \frac{p_i}{m} + \frac{1}{m}\frac{e}{c}A_i
\tag{3}
$$

> [!note] 계산 과정
> $[x_i, p_j^2] = 2i\hbar p_j \delta_{ij}$, $[x_i, \mathbf{p}\cdot\mathbf{A}]$, $[x_i, \mathbf{A}\cdot\mathbf{p}]$, $[x_i, A^2]$ 각각의 commutator를 계산해야 한다. 자세한 계산 과정이 어떻게 되는가?

따라서:

$$
\boldsymbol{\pi} \equiv m\frac{d\mathbf{x}}{dt} = \mathbf{p} - \frac{e}{c}\mathbf{A}
\tag{4}
$$

- $\mathbf{p}$: **Canonical momentum** — 게이지 변환 하에서 불변이 **아님**. 게이지에 의존하는 양이다.
- $\boldsymbol{\pi}$: **Mechanical momentum** — 실제 운동에 해당하는 양. 게이지 불변.

이 두 가지가 다르다는 점이 전자기장에서의 양자역학의 핵심이다.

### Mechanical momentum의 Commutation Relation

$$
\left[\pi_i, \pi_j\right] = \frac{i\hbar e}{c}\varepsilon_{ijk} B_k
\tag{5}
$$

→ 자기장이 있으면 서로 다른 방향의 mechanical momentum이 commute하지 않는다!

이 commutation relation으로부터 아래의 **Lorentz force law**가 유도된다:

$$
\mathcal{H} = \frac{\boldsymbol{\pi}^2}{2m} + e\phi
$$

$$
m\frac{d^2x_i}{dt^2} = \frac{d}{dt}\pi_i = \frac{1}{i\hbar}\left[\pi_i, \frac{1}{2m}\pi_j\pi_j + e\phi\right]
$$

$$
= e\left[\mathbf{E} + \frac{1}{2c}\left(\frac{d\mathbf{x}}{dt}\times\mathbf{B}\right)\right]
\tag{6}
$$

이것이 Lorentz force이다.

---

## Gauge Transformation

**게이지 변환**: 전자기 퍼텐셜의 다음 변환은 **전기장과 자기장을 변화시키지 않는다**:

$$
\mathbf{A} \to \mathbf{A}' = \mathbf{A} + \nabla\Lambda(\mathbf{x})
\tag{7}
$$

$$
\phi \to \phi' = \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}
\tag{8}
$$

그렇다면 모든 expectation value가 게이지 불변임을 어떻게 증명하는가?

### Unitary operator $G$

게이지 변환은 다음 unitary operator $G$로 구현된다:

$$
G = \exp\!\left(\frac{ie\Lambda(\mathbf{x})}{\hbar c}\right)
\tag{9}
$$

$G$는 **unitary**하다. $G$는 $\mathbf{x}$에 의존하기 때문에 $\mathbf{p}$와는 commute하지 않는다.

### $G^{\dagger}\mathbf{p}G$의 계산

$$
G^{\dagger}\mathbf{p}G = G^{\dagger}([\mathbf{p}, G] + G\mathbf{p})
$$

$$
= \exp\!\left(-\frac{ie\Lambda}{\hbar c}\right)[\mathbf{p}, G] + \mathbf{p}
$$

$[\mathbf{p}, G]$를 계산하면 ($\mathbf{p} = -i\hbar\nabla$이므로):

$$
[\mathbf{p}, G] = -i\hbar\left(\nabla e^{ie\Lambda/\hbar c}\right) = -i\hbar \cdot \frac{ie}{\hbar c}(\nabla\Lambda)\, G = \frac{e}{c}(\nabla\Lambda)\, G
$$

따라서:

$$
G^{\dagger}\mathbf{p}G = \exp\!\left(-\frac{ie\Lambda}{\hbar c}\right)\cdot\frac{e}{c}(\nabla\Lambda)\, G + \mathbf{p} = \frac{e}{c}\nabla\Lambda + \mathbf{p}
\tag{10}
$$

**$\mathbf{p}$는 게이지 변환에 의해 불변이 아님**을 알 수 있다.

---

## 게이지 변환 하에서 Ket의 변환

Ket은 다음과 같이 변환된다:

$$
\ket{\tilde{\alpha}} = G\ket{\alpha} = e^{ie\Lambda(\mathbf{x})/\hbar c}\ket{\alpha}
\tag{11}
$$

위치 basis에서:

$$
\langle\mathbf{x}\mid\tilde{\alpha}\rangle = \langle\tilde{\mathbf{x}}\mid\mathbf{x}\rangle \quad \Rightarrow \quad \langle\mathbf{x}\mid\tilde{\alpha}\rangle = e^{ie\Lambda/\hbar c}\langle\mathbf{x}\mid\alpha\rangle
$$

Mechanical momentum의 기댓값은:

$$
\bra{\alpha}\!\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)\!\ket{\alpha} = \bra{\tilde{\alpha}}\!\left(\mathbf{p} - \frac{e}{c}\mathbf{A}'\right)\!\ket{\tilde{\alpha}}
\tag{12}
$$

즉, **mechanical momentum의 기댓값은 게이지 변환에 불변**이다. ✓

---

## 게이지 변환된 슈뢰딩거 방정식

원래의 슈뢰딩거 방정식:

$$
\left(\frac{\mathbf{p}^2}{2m} + e\phi\right)\ket{\alpha} = i\hbar\frac{\partial}{\partial t}\ket{\alpha}
\tag{13}
$$

게이지 변환 $\ket{\tilde{\alpha}} = G\ket{\alpha}$ 후:

$$
\left(\frac{\left(\mathbf{p} - \frac{e}{c}\mathbf{A}'\right)^2}{2m} + e\phi'\right)\ket{\tilde{\alpha}} = i\hbar\frac{\partial}{\partial t}\ket{\tilde{\alpha}}
\tag{14}
$$

**형식이 동일하다.** 단, $\mathbf{A}' = \mathbf{A} + \nabla\Lambda$, $\phi' = \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}$로 바뀌었을 뿐이다.

---

## 게이지 변환이 전하를 보존하는 이유 (연결)

슈뢰딩거 방정식은 게이지 불변이다. 5페이지의 probability current:

$$
\mathbf{J} = -\frac{i\hbar}{2m}\left[\psi^*\nabla\psi - (\nabla\psi^*)\psi\right] + \frac{e}{mc}\mathbf{A}|\psi|^2
\tag{15}
$$

게이지 변환 $\psi \to \tilde{\psi} = e^{ie\Lambda/\hbar c}\psi$ 하에서:

$$
\psi = \sqrt{\rho}\, e^{iS/\hbar} \quad \to \quad \psi' = \sqrt{\rho}\, e^{i(S + e\Lambda/c)/\hbar}
$$

여기서 $\mathbf{J}$가 게이지 불변임을 보여라. (숙제)

> [!question] 게이지 변환이 전하를 보존하는 건 어떻게 보이는가?
> $\phi' = \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}$와 연속 방정식 $\frac{\partial\rho}{\partial t} + \nabla\cdot\mathbf{J} = 0$을 연결해서 생각해보자.

# 궁금한 내용

- **$[x_i, \mathcal{H}]$ 계산 과정**: 식 (3)을 직접 유도해보자. $[x_i, A_j]$, $[x_i, p_j]$ commutator를 쓰면 된다.
- **Mechanical momentum commutator 유도**: 식 (5) $[\pi_i, \pi_j] = \frac{i\hbar e}{c}\varepsilon_{ijk}B_k$를 직접 유도해보자. $\pi_i = p_i - \frac{e}{c}A_i$를 대입하고 $[p_i, A_j]$를 계산하면 된다.
- **Probability current의 게이지 불변성**: 식 (15)의 $\mathbf{J}$가 게이지 변환 하에서 불변임을 보여라.

# AI의 보충 설명

## Canonical vs Mechanical Momentum: 왜 다른가?

고전 전자기학에서도 이 구분이 있다. 라그랑지안이:

$$
\mathcal{L} = \frac{1}{2}m\dot{\mathbf{x}}^2 - e\phi + \frac{e}{c}\dot{\mathbf{x}}\cdot\mathbf{A}
$$

일 때, **canonical momentum**은 $\mathbf{p} = \frac{\partial\mathcal{L}}{\partial\dot{\mathbf{x}}} = m\dot{\mathbf{x}} + \frac{e}{c}\mathbf{A}$이다. 즉 $\boldsymbol{\pi} = m\dot{\mathbf{x}} = \mathbf{p} - \frac{e}{c}\mathbf{A}$.

양자화 시 $\mathbf{p} \to -i\hbar\nabla$로 대응시키는 것은 canonical momentum이다. 따라서 QM에서 해밀토니안을 쓸 때 kinetic term은 $\frac{\boldsymbol{\pi}^2}{2m} = \frac{(\mathbf{p} - e\mathbf{A}/c)^2}{2m}$이 된다.

**핵심**: 게이지가 바뀌면 $\mathbf{A}$가 바뀌므로 $\mathbf{p}$도 재정의된다. 반면 $\boldsymbol{\pi} = m\dot{\mathbf{x}}$는 실제 속도에서 오므로 물리적으로 의미있다.

## $[\pi_i, \pi_j]$ 유도

$$
[\pi_i, \pi_j] = \left[p_i - \frac{e}{c}A_i,\; p_j - \frac{e}{c}A_j\right]
$$

$$
= -\frac{e}{c}\left([p_i, A_j] - [p_j, A_i]\right)
$$

$[p_i, A_j] = -i\hbar\frac{\partial A_j}{\partial x_i}$이므로:

$$
[\pi_i, \pi_j] = -\frac{e}{c}\cdot(-i\hbar)\left(\frac{\partial A_j}{\partial x_i} - \frac{\partial A_i}{\partial x_j}\right) = \frac{i\hbar e}{c}\varepsilon_{ijk}B_k
$$

마지막에 $(\nabla\times\mathbf{A})_k = \varepsilon_{kij}\frac{\partial A_j}{\partial x_i} = B_k$를 사용했다. ∎

# 연관 학습 노트

- [[QM lecture note - Path Integral Formulation]]
- [[QM lecture note - Wave Equation and Probability Conservation]]

# References

Sakurai, Modern Quantum Mechanics, Chap. 2

# 다음 강의

# 원본 필기 이미지

![[QM_7thweek_1.pdf]]
