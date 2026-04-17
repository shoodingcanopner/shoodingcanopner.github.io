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

상수 포텐셜 $V_0$를 더하면 wave function에 phase만 붙고 물리적 expectation value는 바뀌지 않는다. 
전자기장이 있을 때 이 아이디어가 게이지 변환으로 일반화된다.

# 오늘의 핵심

- 전자기장 속 입자의 해밀토니안은 
$$
\mathcal{H} = \frac{1}{2m}\!\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right)^2 + e\phi
$$
- 라그랑지안은 
$$
\mathcal{L} = \frac{1}{2}m\dot{\mathbf{x}}^2 - e\phi + \frac{e}{c}\dot{\mathbf{x}}\cdot\mathbf{A}
$$
$\frac{e}{c}\dot{\mathbf{x}}\cdot\mathbf{A}$부분을 잊지 마! $\frac{e}{c}\mathbf{A}$가 momentum의 차원이므로, 여기에 속도를 곱하면 차원적으로 에너지가된다. 


해밀토니안이 바뀜에 따라, 유효한 gradient 연산또한 바뀌었다. 

**Mechanical momentum**
$$
\boxed{\quad\mathbf{p} = -i\hbar\nabla \quad \xrightarrow{\mathbf{A}\text{가 있으면}} \quad \boldsymbol{\pi} = -i\hbar\nabla - \frac{e}{c}\mathbf{A} = -i\hbar\!\left(\nabla - \frac{ie}{\hbar c}\mathbf{A}\right)\quad}
$$
**Schrödinger equation에 쓰이는 gradient operator**
$$
\boxed{\quad \nabla \quad \xrightarrow{\mathbf{A}\text{가 있으면}} \quad \nabla - \frac{ie}{\hbar c}\mathbf{A}\quad}
$$

- **Canonical momentum** $\mathbf{p}$와 **Mechanical momentum** $\boldsymbol{\pi} = \mathbf{p} - \frac{e}{c}\mathbf{A}$는 다르다.
- 게이지 변환 $\mathbf{A} \to \mathbf{A} + \nabla\Lambda$, $\phi \to \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}$ 아래서 물리 observable은 불변이다.
- 변환은 unitary operator, 부호에 유의한다!

$$
G = \exp\!\left(\frac{ie\Lambda(\mathbf{x})}{\hbar c}\right)
$$

으로 구현되며, ket은 $\ket{\tilde{\alpha}} = G\ket{\alpha}$로 변환된다.

운동량은 이렇게 변환된다. 
$$
G^{\dagger}\mathbf{p}G = \exp\!\left(-\frac{ie\Lambda}{\hbar c}\right)\cdot\frac{e}{c}(\nabla\Lambda)\, G + \mathbf{p} = \frac{e}{c}\nabla\Lambda + \mathbf{p}
\tag{10}
$$

게이지 변환에 의해 wave function의 phase가 돌아간다. 

$$
\nabla\tilde{S} = \nabla\!\left(S + \frac{e}{c}\Lambda\right)
$$
그렇지만 probability current는 변하지 않는다. 
$$
\mathbf{J} = \frac{\rho}{m}\boldsymbol{\pi} = \frac{\rho}{m}\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right) = \frac{\rho}{m}\left(\nabla S - \frac{e}{c}\mathbf{A}\right)
$$
$S$가 변하는 만큼 $\mathbf{A}$도 변하기 때문이다. 

# 필기 내용

## 포텐셜과 게이지 변환 (연결)

**Constant potential** $V_0$를 더한다면:
- $\mathcal{H}' = \mathcal{H} + V_0$
- 포텐셜이 상수가 되면, wave function은 phase만 바뀌고, expectation value는 바뀌지 않는다.

$$
\psi'_{(\alpha)} = \exp\!\left(-\frac{i}{\hbar} t(\mathcal{H} + V_0)\right)\psi_0 = e^{-\frac{i}{\hbar}V_0 t}\psi_0
$$

$$
\psi_{(\alpha)} = \exp\!\left(-t\frac{i}{\hbar}\mathcal{H}\right)\psi_0
$$

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

여기서 **effective momentum(mechanical momentum)** $\mathbf{p} - \frac{e}{c}\mathbf{A}$가 진짜 운동량 역할을 한다. 저게 진짜 $m\mathbf{v}$를 나타내기 때문이다. 


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

- $\mathbf{p}$: **Canonical momentum** — 게이지 변환 하에서 불변이 **아님**. 게이지에 의존하는 양이다. Canonical commutation relation를 만족한다. $[ x_i,p_j] = i\hbar \delta_{ij}$ , $[p_i,p_j] = 0$
- $\boldsymbol{\pi}$: **Mechanical momentum** — 실제 운동에 해당하는 양. 게이지 불변.

이 두 가지가 다르다는 점이 전자기장에서의 양자역학(그리고 해밀톤 역학과 라그랑주 역학)의 핵심이다.

### Mechanical momentum의 Commutation Relation

$$
\left[\pi_i, \pi_j\right] = \frac{i\hbar e}{c}\varepsilon_{ijk} B_k
\tag{5}
$$
위 식은 $\mathbf{A}$를 위치에 대한 함수로 취급하여, $[p_i,A_j] = -i\hbar \frac{\partial A_j}{\partial x_i}$의 관계를 이용하면 쉽게 알 수 있다. 

→ 자기장이 있으면 서로 다른 방향의 mechanical momentum이 commute하지 않는다! 는 걸 알 수 있다. 

이 commutation relation으로부터 아래의 **Lorentz force law**가 유도된다:

$$
\mathcal{H} = \frac{\boldsymbol{\pi}^2}{2m} + e\phi
$$

$$
m\frac{d^2x_i}{dt^2} = \frac{d}{dt}\pi_i = \frac{1}{i\hbar}\left[\pi_i, \frac{1}{2m}\pi_j\pi_j + e\phi\right]
$$

$$
= e\left[E_i + \frac{1}{2c}\left(\mathbf{v}\times\mathbf{B} - \mathbf{B}\times\mathbf{v}\right)_i\right]
\tag{6}
$$

이것이 Lorentz force이다. 양자역학에서는 $\mathbf{v}$와 $\mathbf{B}$가 일반적으로 commute하지 않기 때문에, $\mathbf{v}\times\mathbf{B}$와 $-\mathbf{B}\times\mathbf{v}$가 구별된다. 고전 극한에서 둘을 합치면 $\frac{1}{c}\mathbf{v}\times\mathbf{B}$가 된다.

---

## Gauge Transformation

**게이지 변환**: 전자기 퍼텐셜의 다음 변환은 **전기장과 자기장을 변화시키지 않는다**:

아래 식이 전기역학에서 배운 것과 다르게, c가 있다. 
이유는 차원 때문이다. 여기서는 벡터 포텐셜과 스칼라 포텐셜의 차원을 동일하게 맞추었다. 전기장과 자기장의 차원 또한 동일하게 맞추었다. 

$$
\mathbf{A} \to \mathbf{A}' = \mathbf{A} + \nabla\Lambda(\mathbf{x})
\tag{7}
$$

$$
\phi \to \phi' = \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}
\tag{8}
$$

그렇다면 expectation value가 게이지 불변임을 어떻게 증명하는가?

### Unitary operator $G$

게이지 변환은 다음 unitary operator $G$로 구현된다고 가정하자.

$$
G = \exp\!\left(\frac{ie\Lambda(\mathbf{x})}{\hbar c}\right)
\tag{9}
$$

라고 둔 걸 생각하자. 
게이지 변환에 의해, 위치에 대한 expectation value는 변하지 않아야 한다. 
그리고 속도를 직접적으로 결정하는 mechanical momentum $\boldsymbol{\pi} = \mathbf{p} - \frac{e}{c}\mathbf{A}$의 expaction value도 변하지 않아야 한다. 
$\mathbf{A}$가 게이지 의존이기 때문에, canonical momentum $\mathbf{p}$또한 게이지 의존이어야 $\boldsymbol{\pi}$가 게이지 독립일 수 있다. 

아무 state $\ket{\alpha}$에 대해, 이것이 게이지 변환된 버전이 $\ket{\tilde{\alpha}}$라고 두면, 

$$
\ket{\tilde{\alpha}} = G\ket{\alpha}
$$
Position의 expectation value가 게이지 불변이라면, 

$$
\braket{\alpha |x|\alpha} = \braket{\tilde{\alpha} |x|\tilde{\alpha}} = \braket{\alpha |G^\dagger x G|\alpha}
$$
즉, $G^\dagger x G = x$, $[x,G] = 0$ 위치와 G가 commute해야 한다. 
G는 오로지 위치에 대한 함수이므로, 이것은 바로 성립된다. 

Mechanical momentum의 expectation value가 게이지 불변이라면, 
$\tilde{\mathbf{A}} = \mathbf{A} + \nabla\Lambda(\mathbf{x})$ 이라고 둘 때, 

$$
\mathbf{p} - \frac{e}{c}\mathbf{A} = G^\dagger(\mathbf{p} - \frac{e}{c}\tilde{\mathbf{A}})G
$$
$$
\mathbf{p} - \frac{e}{c}\mathbf{A} = G^\dagger(\mathbf{p} - \frac{e}{c}\mathbf{A}- \frac{e}{c}\nabla \Lambda)G
$$
$\mathbf{A}$와 $\nabla \Lambda$ 또한 위치에 대한 함수라서 G와 commute한다. G로 샌드위치해도 그대로 $\mathbf{A}$일 것이다. 따라서 
$$
\mathbf{p} = G^\dagger(\mathbf{p}- \frac{e}{c}\nabla \Lambda)G = G^\dagger\mathbf{p}G - \frac{e}{c}\nabla \Lambda
$$
부분만 확인하면 된다. 

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
그리고 다시 $\mathbf{p} = G^\dagger\mathbf{p}G - \frac{e}{c}\nabla \Lambda$로 돌아오면, 운동량이 위와 같이 변환되어 비로소 mechanical momentum이 게이지 불변이 된다는 걸 알 수 있다. 
다른 말로 하면 canonical momemtum의 게이지 변환 식을 알고 싶을 경우, mechanical momentum의 게이지 불변 특성을 이용하여 유도하는 편이 빠르다는 뜻이다. 

---

## 게이지 변환 하에서 Ket의 변환

Ket은 다음과 같이 변환된다:

$$
\ket{\tilde{\alpha}} = G\ket{\alpha} = e^{ie\Lambda(\mathbf{x})/\hbar c}\ket{\alpha}
\tag{11}
$$

위치 basis에서 wave function으로 쓰면:

$$
\tilde{\psi}(\mathbf{x}', t) = \exp\!\left[\frac{ie\Lambda(\mathbf{x}')}{\hbar c}\right]\psi(\mathbf{x}', t)
$$

즉 $\langle\mathbf{x}\mid\tilde{\alpha}\rangle = e^{ie\Lambda/\hbar c}\langle\mathbf{x}\mid\alpha\rangle$이다. WKB 표현 $\psi = \sqrt{\rho}\, e^{iS/\hbar}$으로 보면, 게이지 변환은 phase $S$를 다음과 같이 바꾼다:

$$
S \to S + \frac{e\Lambda}{c}
$$
즉, 게이지 변환은 파동함수의 phase를 국소적으로 변화하는 역할을 한다. 

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
\left(\frac{(\mathbf{p} - \frac{e}{c}\mathbf{A})^2}{2m} + e\phi\right)\ket{\alpha} = i\hbar\frac{\partial}{\partial t}\ket{\alpha}
\tag{13}
$$

게이지 변환 $\ket{\tilde{\alpha}} = G\ket{\alpha}$ 후:

$$
\left(\frac{\left(\mathbf{p} - \frac{e}{c}\mathbf{A}'\right)^2}{2m} + e\phi'\right)\ket{\tilde{\alpha}} = i\hbar\frac{\partial}{\partial t}\ket{\tilde{\alpha}}
\tag{14}
$$

**형식이 동일하다.** 단, $\mathbf{A}' = \mathbf{A} + \nabla\Lambda$, $\phi' = \phi - \frac{1}{c}\frac{\partial\Lambda}{\partial t}$로 바뀌었을 뿐이다.

변호나 이후의 해밀토니안 연산자를 $G$로 샌드위치해 보면, 변호나 이전의 해밀토니안과 똑같아진다는 것을 알 수 있다. 이를 통해 식 14와 식13이 동일하다는 걸 알 수 있다. 



---

## 게이지 변환이 전하를 보존하는 이유 (연결)

슈뢰딩거 방정식은 게이지 불변이다. 5페이지의 probability current:

$$
\mathbf{J} = -\frac{i\hbar}{2m}\left[\psi^*\nabla\psi - (\nabla\psi^*)\psi\right] - \frac{e}{mc}\mathbf{A}|\psi|^2
\tag{15}
$$

게이지 변환 $\psi \to \tilde{\psi} = e^{ie\Lambda/\hbar c}\psi$ 하에서:

$$
\psi = \sqrt{\rho}\, e^{iS/\hbar} \quad \to \quad \tilde{\psi} = \sqrt{\rho}\, e^{i(S + e\Lambda/c)/\hbar}
$$

**$\mathbf{J}$의 게이지 불변성 증명:**

먼저, probability current를 WKB 형태 $\psi = \sqrt{\rho}\,e^{iS/\hbar}$로 표현하면:

$$
\mathbf{J} = \frac{\rho}{m}\boldsymbol{\pi} = \frac{\rho}{m}\left(\mathbf{p} - \frac{e}{c}\mathbf{A}\right) = \frac{\rho}{m}\left(\nabla S - \frac{e}{c}\mathbf{A}\right)
$$

여기서 $\mathbf{p} \to -i\hbar\nabla$를 wave function에 적용하면 $\nabla S$가 나온다는 점을 이용했다.

이제 게이지 변환을 적용하자. $\tilde{S} = S + \frac{e\Lambda}{c}$이므로:

$$
\nabla\tilde{S} = \nabla\!\left(S + \frac{e}{c}\Lambda\right)
$$

또한 벡터 포텐셜은 $\tilde{\mathbf{A}} = \mathbf{A} + \nabla\Lambda$로 바뀐다. 변환 후의 current는:

$$
\tilde{\mathbf{J}} = \frac{\rho}{m}\!\left(\nabla\tilde{S} - \frac{e}{c}\tilde{\mathbf{A}}\right) = \frac{\rho}{m}\!\left(\nabla S + \frac{e}{c}\nabla\Lambda - \frac{e}{c}\mathbf{A} - \frac{e}{c}\nabla\Lambda\right)
$$

$$
= \frac{\rho}{m}\!\left(\nabla S - \frac{e}{c}\mathbf{A}\right) = \mathbf{J}
$$

$\frac{e}{c}\nabla\Lambda$ 항이 정확히 상쇄되어 $\tilde{\mathbf{j}} = \mathbf{j}$가 된다. ∎

**핵심**: 게이지 변환이 $S$와 $\mathbf{A}$ 모두에 $\nabla\Lambda$를 더하는 방식으로 작동하기 때문에, mechanical momentum $\nabla S - \frac{e}{c}\mathbf{A}$ — 즉 physical current — 는 변하지 않는다.

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


# References

Sakurai, Modern Quantum Mechanics, Chap. 2

# 다음 강의

[[QM lecture note - Aharonov-Bohm Effect and Magnetic Monopole]]

# 원본 필기 이미지

![[QM_7thweek_1.pdf]]
![[Pasted image 20260410185639.png]]

![[Pasted image 20260410185629.png]]