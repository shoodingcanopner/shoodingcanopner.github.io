---
title: "QM lecture note - Time Reversal Operator"
date: "2026-05-07"
subject: "quantum mechanics"
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.


# 지난 강의
[[QM lecture note - Discrete Symmetries]]에서 Time Reversal의 동기와 복소 켤레를 통한 구현을 배웠다.

# 오늘의 핵심

- **Wigner's theorem**: 모든 symmetry operation은 unitary & linear이거나, antiunitary & antilinear이다.
- 양자역학에서는 내적의 **절댓값** 보존만으로 충분 → antiunitary operator가 허용된다.
- **Antiunitary operator** $\Theta = UK$ (unitary $\times$ complex conjugation)
- Time reversal operator $\Theta$가 antiunitary여야 에너지 음수 문제가 해결된다.
- $\Theta$에 의해 **commutation relation이 보존**된다.
- Wave function: $\psi(x) \xrightarrow{\Theta} \psi^*(x)$, momentum wave function: $\phi(p') \xrightarrow{\Theta} \phi^*(-p')$
- Time reversal invariant인 계의 energy eigenstate wave function은 **실수**이다.

# 필기 내용

## 1. Proper Time Reversed State

Time reversal된 파동함수:

$$
\psi(x,t) = \psi^*(x,-t)
$$

> [!note] 출발점
> Time reversal과 complex conjugate를 같이 하는 연산자를 생각해 보자.

## 2. Symmetry Operation과 Antiunitary Operator

### Wigner's Theorem

모든 symmetry operation은 둘 중 하나의 케이스이다:
1. **Unitary & linear**
2. **Antiunitary & antilinear**

어떤 operator가 $\ket{\alpha} \to \ket{\tilde{\alpha}}$, $\ket{\beta} \to \ket{\tilde{\beta}}$로 변환할 때, symmetry operator라면 내적이 보존되어야 한다고 보통 생각한다:

$$
\braket{\tilde{\beta}|\tilde{\alpha}} = \braket{\beta|\alpha}
$$

이러한 점점에서 symmetry operator는 무조건 unitary operator여야 한다고 생각해 왔다. 
왜냐하면:

$$
\braket{\tilde{\beta}|\tilde{\alpha}} = \bra{\beta}U^\dagger U\ket{\alpha} = \braket{\beta|\alpha}
$$

### 양자역학에서의 완화된 조건

그러나 양자역학에서는 이 엄격한 내적 보존 조건을 완화할 수 있다:

$$
|\braket{\tilde{\beta}|\tilde{\alpha}}| = |\braket{\beta|\alpha}|
$$

이 경우, $\braket{\tilde{\beta}|\tilde{\alpha}} = \braket{\beta|\alpha}^*$여도 조건을 만족하며, 이를 만족하는 연산자는 **antiunitary operator**이다.

### Antilinear Operator의 정의

변환 $\ket{\alpha} \to \ket{\tilde{\alpha}} = \Theta\ket{\alpha}$가 **antilinear**이라 함은:

$$
\Theta(c_1\ket{\alpha} + c_2\ket{\beta}) = c_1^*\Theta\ket{\alpha} + c_2^*\Theta\ket{\beta}
$$

### Antiunitary Operator의 정의

$\Theta$가 **antiunitary**라 함은:

$$
\braket{\tilde{\beta}|\tilde{\alpha}} = \braket{\alpha|\beta} = \braket{\beta|\alpha}^*
$$

## 3. Antiunitary Operator의 구조: $\Theta = UK$

이런 연산자 $\Theta$는 $\Theta = UK$의 형태를 가진다.

- ==$K$: **complex conjugation operator** → 새로운 등장!==
- $U$: unitary operator

> [!question] 질문: $\Theta^{-1}\Theta = ?$ 그리고 $U$와 $K$는 교환 가능한가?

> [!note] AI 답변
> $\Theta^{-1}\Theta = \mathbf{1}$이다 (정의상). $\Theta = UK$이므로 $\Theta^{-1} = K^{-1}U^{-1} = KU^\dagger$인데, $K^2 = \mathbf{1}$이라 $K^{-1} = K$이다.
> 
> $U$와 $K$는 일반적으로 **교환하지 않는다**. $K$는 자기 오른쪽에 있는 계수를 복소 켤레하므로, $KU$를 적용하면 $U$의 행렬 원소들이 복소 켤레된다. 즉 $KU = U^*K$이고, $U$가 실수 행렬이 아닌 한 $KU \neq UK$이다.

$K$는 coefficient에 적용해서 complex conjugation을 일으키지만, **basis ket은 변화시키지 않는다**. 이 말은 즉슨, 무엇을 basis로 표현하는 가에 따라서 $K$의 적용 결과가 다르게 보일 수 있다는 뜻이다. 

$$
K\,c\ket{\alpha} = c^*\,K\ket{\alpha}
$$
아래의 식은 $\ket{\alpha'}$를 basis로 둔 경우이다. 
$$
K(c_a\ket{\alpha}) = c_a^*\,K\left(\sum_{\alpha'}\ket{\alpha'}\braket{\alpha'|\alpha}\right) = c_a^*\sum_{\alpha'}\braket{\alpha'|\alpha}^*\ket{\alpha'}
$$

> [!warning] 주의
> Antilinear operator는 항상 ket side에 적용되도록 주의해야 한다.

### $\braket{\tilde{\beta}|\tilde{\alpha}}$의 계산

$\ket{\tilde{\alpha}} = \Theta\ket{\alpha} = UK\ket{\alpha}$로 놓으면:

$$
\ket{\tilde{\alpha}} = \sum_{\alpha'}\braket{\alpha'|\alpha}^*\,U\ket{\alpha'}, \quad \ket{\tilde{\beta}} = \sum_{\alpha'}\braket{\alpha'|\beta}^*\,U\ket{\alpha'}
$$

$$
\bra{\tilde{\beta}} = \sum_{\alpha'}\braket{\alpha'|\beta}\bra{\alpha'}U^\dagger
$$

따라서:

$$
\braket{\tilde{\beta}|\tilde{\alpha}} = \sum_{\alpha'}\sum_{\alpha''}\braket{\alpha'|\alpha}^*\braket{\alpha''|\beta}\bra{\alpha''}U^\dagger U\ket{\alpha'}
$$

$$
= \sum_{\alpha'}\braket{\alpha'|\alpha}^*\braket{\alpha'|\beta} = \sum_{\alpha'}\braket{\alpha|\alpha'}\braket{\alpha'|\beta}
$$

$$
= \braket{\alpha|\beta} = \braket{\beta|\alpha}^*
$$

이로써 $\Theta = UK$가 antiunitary 조건을 만족함을 확인했다. $\checkmark$

---

## 4. Time Reversal Operator $\Theta$의 성질

### $\Theta$가 Antiunitary여야 하는 이유

$t=0$에서 원래 상태 $\ket{\alpha}$를 고려하자. $\delta t$만큼 시간이 흐르면:

$$
\ket{\alpha, \delta t} = \left(1 - \frac{i\mathcal{H}\delta t}{\hbar}\right)\ket{\alpha}
$$

$\ket{\tilde{\alpha}} = \Theta\ket{\alpha}$을 어떻게 이해해야 하는가? $\Theta\ket{\alpha}$는 **"움직임"이 역전된 상태**이다. 위치는 그대로이지만, 운동량은 뒤집어진 상태인 것이다.

두 가지 연산을 비교하자:
![[Pasted image 20260508094153.png]]
**① $t=0$에서 $\Theta$를 적용, $\delta t$만큼 time-evolve:**
그림에서 볼 때는 $t=0$에서 $\Theta$를 적용하면 파란 벡터가 나오며, 거기서 $\delta t$만큼 time-evolve하면 초록색 벡터가 된다. 

$$
\ket{\tilde{\alpha}}_i = \left(1 - \frac{i\mathcal{H}\delta t}{\hbar}\right)\Theta\ket{\alpha}
$$

**② $t=0$에서 $-\delta t$만큼 시간을 되돌린 뒤 $\Theta$를 적용:**
그림에서 볼 때는 $t=0$에서 $\delta t$만큼 시간을 되돌리면 노란 벡터가 나오며, 여기에 $\Theta$를 적용하면  초록색 벡터가 된다. 
$$
\ket{\tilde{\alpha}}_{ii} = \Theta\left(1 - \frac{i\mathcal{H}(-\delta t)}{\hbar}\right)\ket{\alpha}
$$

운동이 time reversal하다면, ①과 ②의 결과 모두 같은 상태(초록색 벡터)가 되어야 한다.

$$
\therefore \ket{\tilde{\alpha}}_i = \ket{\tilde{\alpha}}_{ii}
$$

$$
\left(1 - \frac{i\mathcal{H}\delta t}{\hbar}\right)\Theta\ket{\alpha} = \Theta\left(1 + \frac{i\mathcal{H}\delta t}{\hbar}\right)\ket{\alpha}
$$

이로부터:

$$
\boxed{-i\mathcal{H}\Theta = \Theta\, i\mathcal{H}}
$$

### 가정 A: $\Theta$가 Unitary라면?

$\Theta i = i\Theta$이 되어 $-\mathcal{H}\Theta = \Theta\mathcal{H}$, 즉 $\mathcal{H}\Theta = -\Theta\mathcal{H}$.

$\ket{n}$이 energy eigenstate이고 $\mathcal{H}\ket{n} = E_n\ket{n}$이면:

$$
\mathcal{H}(\Theta\ket{n}) = -\Theta\mathcal{H}\ket{n} = -E_n\,\Theta\ket{n}
$$

> [!warning] 문제!
> Time reversal하면 energy가 **음수**가 된다? 이것은 물리적으로 받아들일 수 없다.

### 가정 B: $\Theta$가 Antiunitary라면?

$\Theta i = -i\Theta$이므로:

$$
-i\mathcal{H}\Theta = \Theta\, i\mathcal{H} \implies \mathcal{H}\Theta = \Theta\mathcal{H}
$$

> [!tip] 핵심
> $\Theta i = -i\Theta$임을 이용하면 $\Theta$와 $\mathcal{H}$가 교환하게 된다. 즉, $\Theta\ket{n}$도 eigenvalue $E_n$을 가진 에너지 고유상태가 된다.

$$
\mathcal{H}(\Theta\ket{n}) = \Theta\mathcal{H}\ket{n} = E_n\,\Theta\ket{n}
$$

$\Theta\ket{n}$도 $\ket{n}$과 같은 eigenvalue를 가진다.

> [!question] 질문: 하이젠베르크 방식의 basis ket에 complex conjugate operator를 취하면?

> [!note] AI 답변
> 핵심은 $K$가 **basis 의존적**이라는 점이다. $K$는 "현재 선택한 basis에서 전개 계수를 복소 켤레한다"는 연산이므로, 하이젠베르크 그림에서 basis ket $\ket{a', t} = e^{iHt/\hbar}\ket{a'}$에 $K$를 적용하면, $e^{iHt/\hbar}$의 행렬 원소까지 복소 켤레되어 $e^{-iHt/\hbar}$로 바뀐다. 따라서 시간 의존하는 basis에서는 $K$의 작용이 슈뢰딩거 그림과 다르게 보일 수 있고, 이것이 $\Theta = UK$에서 $U$의 선택이 basis(표현)에 의존하는 이유이기도 하다.

---

## 5. Operator의 Time Reversal 변환

### 기댓값의 변환

$\braket{\beta|X|\alpha}$를 생각하자. $\braket{\tilde{\beta}|X|\tilde{\alpha}}$는?

$\bra{\gamma} = \bra{\beta}X$로 놓으면 $\ket{\gamma} = X^\dagger\ket{\beta}$이고:
Antiunitary 성질 $\braket{\tilde{\beta}|\tilde{\alpha}} = \braket{\alpha|\beta}$에 의해 아래 식이 성립
$$
\braket{\beta|X|\alpha} = \braket{\gamma|\alpha}=\braket{\tilde{\alpha}|\tilde{\gamma}} = \bra{\tilde{\alpha}}\Theta\ket{\gamma}
$$
$$
= \bra{\tilde{\alpha}}\Theta X^\dagger \Theta^{-1}\Theta\ket{\beta}
$$
$$
= \bra{\tilde{\alpha}}\Theta X^\dagger \Theta^{-1}\ket{\tilde{\beta}}
$$

$X$가 observable $A$ (Hermitian, $A = A^\dagger$)라면:

$$
\braket{\beta|A|\alpha} = \bra{\tilde{\alpha}}\Theta A \Theta^{-1}\ket{\tilde{\beta}}
$$

$\alpha = \beta$로 놓으면:

$$
\braket{\alpha|A|\alpha} = \bra{\tilde{\alpha}}\Theta A \Theta^{-1}\ket{\tilde{\alpha}}
$$

### Time-Reversal Odd / Even Operator
Operator를 $\Theta$로 샌드위치한다는 건 마치 similarity transform 처럼 연산자를 시간 역전 변환시킨다는 것이다. 

이렇게 변환시킬 때 부호가 어떻게 바뀌는지에 따라 두 가지로 연산자를 분류할 수 있다. 
$$
\Theta A \Theta^{-1} = \begin{cases} -A & \implies A\text{는 time-reversal \textbf{odd} operator} \\ A & \implies A\text{는 time-reversal \textbf{even} operator} \end{cases}
$$

> [!question] 질문
> 변환했을 때 -1 이나 1 이 곱해지는 것이 아닌, 아예 다른 연산자가 되는것도 가능한가? 이게 아니라면, 왜 $A$가 해르미티안일 때 TR에 의해 부호만 바뀌는 것이 보장되는가?

> [!note] AI 답변
> **가능하다.** 일반적인 연산자에 대해 $\Theta A \Theta^{-1}$이 반드시 $\pm A$일 이유는 없다. 예를 들어 $A = x + p$라면:
> $$\Theta(x+p)\Theta^{-1} = x - p$$
> 이것은 $+(x+p)$도 $-(x+p)$도 아니다.
> 
> $\pm A$로 깔끔하게 분류되는 건 **기본적인 역학 변수** ($x$, $p$, $L$ 등)에 해당하는 이야기이고, 이들은 고전적으로 time reversal 하에서 어떻게 변하는지가 명확하기 때문에 odd/even으로 분류되는 것이다. 일반적인 Hermitian operator는 odd 부분과 even 부분의 합으로 분해할 수 있다:
> $$A = \underbrace{\frac{A + \Theta A \Theta^{-1}}{2}}_{\text{even}} + \underbrace{\frac{A - \Theta A \Theta^{-1}}{2}}_{\text{odd}}$$

**Time-reversal odd operator**이면: $\braket{\alpha|A|\alpha} = -\braket{\tilde{\alpha}|A|\tilde{\alpha}}$
- TR에 의해 expectation value의 부호가 바뀜
- 예시: **momentum** $\mathbf{p}$, **angular momentum** $\mathbf{L}$

**Time-reversal even operator**이면: $\braket{\alpha|A|\alpha} = \braket{\tilde{\alpha}|A|\tilde{\alpha}}$
- TR해도 expectation value가 그대로
- 예시: **position** $\mathbf{x}$

---

## 6. Commutation Relation의 보존

### $[x_i, p_j]$의 보존

정준 교환 관계 $[x_i, p_j]\ket{} = i\hbar\delta_{ij}\ket{}$의 양변에 $\Theta$를 취하자:

$$
\Theta[x_i, p_j]\Theta^{-1}\Theta\ket{} = \Theta\, i\hbar\delta_{ij}\ket{}= -i\hbar\delta_{ij}\,\Theta\ket{}
$$

좌변을 전개하면:

$$
\Theta[x_i, p_j]\Theta^{-1} = \Theta x_i p_j \Theta^{-1} - \Theta x_i p_j \Theta^{-1}
$$

$$
= (\Theta x_i \Theta^{-1})(\Theta p_j \Theta^{-1}) - (\Theta x_i \Theta^{-1})(\Theta p_j \Theta^{-1})
$$

$$
= [\Theta x_i \Theta^{-1},\, \Theta p_j \Theta^{-1}]
$$

$$
= [x_i,\, -p_j]
$$

결국:

$$
[x_i, -p_j]\,\Theta\ket{} = -i\hbar\delta_{ij}\,\Theta\ket{}
$$

$\Theta$가 antisymmetry하기 때문에 commutation relation이 **보존**된다.

### $[L_i, L_j]$의 보존

각운동량의 교환 관계 $[L_i, L_j]\ket{} = i\hbar\epsilon_{ijk}L_k\ket{}$에 대해서도:

$$
\Theta[L_i, L_j]\Theta^{-1}\Theta\ket{} = \Theta\, i\hbar\epsilon_{ijk}L_k\ket{}
$$

$$
[\Theta L_i\Theta^{-1},\, \Theta L_j\Theta^{-1}] = -i\hbar\epsilon_{ijk}\,(\Theta L_k \Theta^{-1})
$$

$$
[-L_i, -L_j] = -i\hbar\epsilon_{ijk}(-L_k)
$$

$$
[L_i, L_j] = i\hbar\epsilon_{ijk}L_k \quad \checkmark
$$

역시 commutation relation이 보존된다.

---

## 7. Wave Function에 대한 Time Reversal

### Position Wave Function

$\Theta$의 position 연산자에 대한 작용을 정리하면:

$$
\Theta x \Theta^{-1} = x \quad \implies \quad \Theta x = x\Theta
$$

$$
\Theta x\ket{x'} = x\Theta\ket{x'} \quad \text{이고} \quad \Theta x'\ket{x'} = x'\Theta\ket{x'}
$$

$$
\therefore \Theta\ket{x'} = \ket{x'} \quad (\text{up to phase})
$$

이를 이용하면:

$$
\Theta\ket{\alpha} = \int dx'\, \braket{x'|\alpha}^*\,(\Theta\ket{x'}) = \int dx'\, \braket{x'|\alpha}^*\ket{x'} 
$$

$$
= \int dx'\, \psi_\alpha^*(x')\ket{x'}
$$

> [!tip] 결론
> TR에 의해 wave function은 다음과 같이 변환된다:
> $$\psi(x) \xrightarrow{\Theta} \psi^*(x)$$
> 슈뢰딩거 방정식에서 예상한 결과와 같다.

### 예시: Spherical Harmonics

$$
Y_l^m(\theta, \phi) \xrightarrow{\Theta} Y_l^{m\,*}(\theta, \phi) = (-1)^m\, Y_l^{-m}(\theta, \phi)
$$

$$
Y_l^m(\theta, \phi) \xrightarrow{\Theta^2} (-1)^{2m}\, Y_l^m(\theta, \phi) = Y_l^m(\theta, \phi)
$$

$\Theta^2$을 적용하면 원래대로 돌아온다. $\checkmark$


### Momentum Wave Function

$\Theta\ket{p'} = \ket{-p'}$임을 이용하면:

$$
\Theta\ket{\alpha} = \int dp'\, \braket{p'|\alpha}^*\,\Theta\ket{p'} = \int dp'\, \braket{p'|\alpha}^*\ket{-p'} = \int dp'\, \braket{-p'|\alpha}^*\ket{p'}
$$

$\braket{p'|\alpha} = \phi(p')$일 때:

$$
\phi(p') \xrightarrow{\Theta} \phi^*(-p')
$$

---

## 8. Time Reversal Invariance의 결과

### Probability Current Density

$$
\mathbf{J} = \frac{\hbar}{m}\,\text{Im}\left[\psi^*\nabla\psi\right]
$$

여기에 time reversal을 적용하면:

$$
\mathbf{J} \to \frac{\hbar}{m}\,\text{Im}\left[\psi\nabla\psi^*\right] = \frac{\hbar}{m}\,\text{Im}\left[(\psi^*\nabla\psi)^*\right] = -\frac{\hbar}{m}\,\text{Im}\left[\psi^*\nabla\psi\right] = -\mathbf{J}
$$

> [!note] 해석
> $\mathbf{J} \xrightarrow{T.R.} -\mathbf{J}$: 시간 역전이라는 건 확률의 흐름이 반대가 되는 것.

### Energy Eigenstate의 Wave Function이 실수인 이유

$[\mathcal{H}, \Theta] = 0$이고 $\mathcal{H}\ket{n} = E_n\ket{n}$이므로:

$$
\Theta\mathcal{H}\ket{n} = \mathcal{H}(\Theta\ket{n}) = \Theta E_n\ket{n} = E_n\,\Theta\ket{n}
$$

$\Theta\ket{n}$는 $\ket{n}$과 똑같은 기능을 한다. 비축퇴(non-degenerate)의 경우:

$$
\ket{n} = \int dx'\, \braket{x'|n}\ket{x'}
$$

$$
\Theta\ket{n} = \int dx'\, \braket{x'|n}^*\ket{x'}
$$

$$
\braket{x'|n} = \braket{x'|n}^*
$$

$$
\therefore \braket{x'|n} \in \mathbb{R}
$$

> [!tip] 결론
> Energy eigenstate의 wave function은 무조건 **실수값**이다.
> 
> → 물리적 의미는 무엇인가?

> [!note] AI 답변
> $\psi(x)$가 실수이면 $\mathbf{J} = \frac{\hbar}{m}\text{Im}[\psi^*\nabla\psi] = 0$이다. 즉, **확률 흐름이 없다** — 정상 상태에서 입자가 어느 방향으로도 "흐르지" 않는다는 뜻이다.
> 
> 이것은 time reversal invariance와 직결된다. $\Theta\ket{n} \propto \ket{n}$이면 이 상태는 시간을 뒤집어도 자기 자신이니, 특정 방향으로의 운동이 있을 수 없다. 참고로 이것은 **비축퇴** 조건 하에서만 성립한다. 축퇴가 있으면 $\Theta\ket{n}$이 $\ket{n}$과 선형 독립일 수 있고, 그때는 복소 wave function이 가능하다 (예: $Y_l^m$에서 $m \neq 0$).

# 궁금한 내용

- $\Theta^{-1}\Theta = ?$ 그리고 $U$와 $K$는 교환 가능한가?
- 하이젠베르크 방식의 basis ket에 complex conjugate operator를 취하면 어떻게 되는가?
- Energy eigenstate의 wave function이 실수라는 것의 물리적 의미는 무엇인가?

# AI의 보충 설명



# 연관 학습 노트



# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 4.4
- 강의 필기 (Week 10 - 2)

# 다음 강의
[[QM lecture note - Rotation and Angular Momentum]]
# 원본 필기 이미지

![[QM_10thweek_2.pdf]]