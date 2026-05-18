---
title: "QM lecture note - Euler Rotation and Angular Momentum Eigenvalues"
date: "2026-05-18"
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
[[QM lecture note - Two-Component Spinor and Rotation Operator]]에서 Pauli matrix의 성질, rotation operator $D(\hat{n},\phi)$의 명시적 유도, $D(\hat{n},2\pi) = -\mathbb{1}$의 의미, 그리고 SO(3)과 SU(2)의 관계를 논의했다.

# 오늘의 핵심

- **Euler Rotation**: 임의의 회전을 3개의 고정축 회전의 연속으로 표현. Body-fixed axis 회전 $R_{z'}(\gamma)\,R_{y'}(\beta)\,R_z(\alpha)$를 space-fixed axis 회전 $R_z(\alpha)\,R_y(\beta)\,R_z(\gamma)$로 변환
- $j = \frac{1}{2}$ **irreducible representation** $\mathcal{D}^{(1/2)}(\alpha,\beta,\gamma)$의 명시적 행렬
- **고차원 각운동량의 고유값 구조**: $J^2$과 $J_z$의 동시 고유켓 $\ket{a,b}$, ladder operator $J_\pm$의 도입
- $b$의 boundary 조건으로부터 **양자수 $j$와 $m$**의 결정: $a = j(j+1)\hbar^2$, $b = m\hbar$
- **Ladder operator의 계수** $C^\pm_{jm}$의 normalization을 통한 결정
- $\mathcal{D}(R)$의 **$(2j+1)$차원 기약 표현**: $\mathcal{D}^{(j)}_{m'm}(R) = \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}\vec{J}\cdot\hat{n}\,\phi\right)\ket{j,m}$
- Euler angle을 적용한 $\mathcal{D}^{(j)}_{m'm}(\alpha,\beta,\gamma)$에서 $d^{(j)}_{m'm}(\beta)$ 행렬의 분리
- $j = 1$에서의 $J_y$ 행렬 표현과 $d^{(1)}(\beta)$의 명시적 계산

# 필기 내용

## 1. Euler Rotation

지금까지 회전을 나타낼 때 회전축 $\hat{n}$과 회전각 $\phi$를 지정했다. 총 3개의 real parameter가 필요하다: $(\hat{n}(\alpha,\beta),\,\phi)$.

**Euler Rotation**: 어떤 회전이든 3개의 **고정축**에 대한 각 회전 과정의 연속된 결과로 나타낼 수 있다.

### 과정

1. $z$축에 대해 $\alpha$ 돌림: $R_z(\alpha)$
2. $y'$축(internal axis)에 대해 $\beta$ 돌림: $R_{y'}(\beta)$
3. $z'$축에 대해 $\gamma$ 돌림: $R_{z'}(\gamma)$

$$
R(\alpha,\beta,\gamma) = R_{z'}(\gamma)\,R_{y'}(\beta)\,R_z(\alpha)
$$

### Body-Fixed → Space-Fixed 변환

$R_{y'}(\beta)$를 space axis에 대한 표현으로 바꾸고 싶다. 경험적으로:

$$
R_{y'}(\beta)\,R_z(\alpha) = R_z(\alpha)\,R_y(\beta)
$$

임을 알 수 있으므로:

$$
\boxed{R_{y'}(\beta) = R_z(\alpha)\,R_y(\beta)\,R_z^{-1}(\alpha)}
$$

$R_{z'}(\gamma)$도 같은 논리로, $R_{z'}(\gamma)\,R_{y'}(\beta) = R_{y'}(\beta)\,R_z(\gamma)$이므로:

$$
\boxed{R_{z'}(\gamma) = R_{y'}(\beta)\,R_z(\gamma)\,R_{y'}^{-1}(\beta)}
$$

### Space-Fixed Axis 표현 유도

$R(\alpha,\beta,\gamma)$에 $R_{z'}(\gamma)$부터 치환해 넣어보자:

$$
R(\alpha,\beta,\gamma) = \bigl(R_{y'}(\beta)\,R_z(\gamma)\,R_{y'}^{-1}(\beta)\bigr)\,R_{y'}(\beta)\,R_z(\alpha)
$$

$$
= \bigl(R_z(\alpha)\,R_y(\beta)\,R_z^{-1}(\alpha)\bigr)\,\underbrace{R_z(\gamma)\,R_z(\alpha)}_{\text{commute}}
$$

$$
\boxed{R(\alpha,\beta,\gamma) = R_z(\alpha)\,R_y(\beta)\,R_z(\gamma)}
$$

> [!note] $\alpha$와 $\gamma$의 위치 교환
> Body-fixed 표현 $R_{z'}(\gamma)\,R_{y'}(\beta)\,R_z(\alpha)$와 비교하면 $\alpha$와 $\gamma$의 위치가 바뀐 것이 특징적이다.

## 2. $j = \frac{1}{2}$ Irreducible Representation

2차원 공간에서 이 회전을 행렬식으로 표현하면:

$$
\mathcal{D}(\alpha,\beta,\gamma) = D_z(\alpha)\,D_y(\beta)\,D_z(\gamma)
$$

$$
= \begin{pmatrix} e^{i\alpha/2} & 0 \\ 0 & e^{-i\alpha/2} \end{pmatrix}\begin{pmatrix} \cos\frac{\beta}{2} & -\sin\frac{\beta}{2} \\ \sin\frac{\beta}{2} & \cos\frac{\beta}{2} \end{pmatrix}\begin{pmatrix} e^{i\gamma/2} & 0 \\ 0 & e^{-i\gamma/2} \end{pmatrix}
$$

> [!warning] 부호 주의
> 여기서 $D_z(\alpha) = e^{-iJ_z\alpha/\hbar}$이므로, $j = \frac{1}{2}$일 때 $\ket{+}$에 대해 $e^{-i\alpha/2}$가 (1,1) 성분이 되어야 한다. 필기에는 $e^{i\alpha/2}$가 (1,1)에 적혀 있는데, 이는 convention의 차이일 수 있으므로 교재와 대조 필요.

곱을 계산하면:

$$
\mathcal{D}^{(1/2)}(\alpha,\beta,\gamma) = \begin{pmatrix} e^{-i(\alpha+\gamma)/2}\cos\frac{\beta}{2} & -e^{-i(\alpha-\gamma)/2}\sin\frac{\beta}{2} \\ e^{i(\alpha-\gamma)/2}\sin\frac{\beta}{2} & e^{i(\alpha+\gamma)/2}\cos\frac{\beta}{2} \end{pmatrix}
$$

이 행렬을 **$j = \frac{1}{2}$ irreducible representation of the rotation operator $\mathcal{D}(\alpha,\beta,\gamma)$**라 부른다:

$$
\mathcal{D}^{(1/2)}_{m'm}(\alpha,\beta,\gamma) = \bra{j = \tfrac{1}{2}, m'}\,e^{-iJ_z\alpha/\hbar}\,e^{-iJ_y\beta/\hbar}\,e^{-iJ_z\gamma/\hbar}\,\ket{j = \tfrac{1}{2}, m}
$$

## 3. 고차원 각운동량의 고유값과 고유벡터

### Total Angular Momentum

Total angular momentum을 도입한다:

$$
J^2 = \sum_i J_i^2
$$

$J^2$은 모든 방향의 $J$와 commute한다:

$$
[J^2, J_i] = 0 \quad \text{for } \forall\,i
$$

### 동시 고유켓

$J^2$과 $J_z$의 simultaneous eigenket $\ket{a,b}$를 정의한다:

$$
J^2\ket{a,b} = a\ket{a,b}, \qquad J_z\ket{a,b} = b\ket{a,b}
$$

### Ladder Operators

Ladder operator를 도입한다:

$$
J_\pm = J_x \pm iJ_y, \qquad J_\pm^\dagger = J_\mp
$$

이들의 교환 관계:

$$
[J_+, J_-] = 2\hbar J_z
$$

> [!tip] 증명
> $[J_x + iJ_y,\,J_x - iJ_y] = [J_x, -iJ_y] + [iJ_y, J_x] = -i(i\hbar J_z) + i(-i\hbar J_z) = 2\hbar J_z$

$$
[J_z, J_\pm] = \pm\hbar\,J_\pm
$$

> [!tip] 증명
> $[J_z, J_x \pm iJ_y] = i\hbar J_y \pm i(-i\hbar J_x) = \pm\hbar J_x + i\hbar J_y = \pm\hbar(J_x \pm iJ_y) = \pm\hbar J_\pm$

$$
[J^2, J_\pm] = 0
$$

> [!tip] 증명
> $[J^2, J_i] = 0$ for $\forall\,i$이므로 자명하다.

### $J_\pm$의 작용

$J_z$에 $J_\pm\ket{a,b}$를 적용하면:

$$
J_z(J_\pm\ket{a,b}) = ([J_z, J_\pm] + J_\pm J_z)\ket{a,b} = (b \pm \hbar)(J_\pm\ket{a,b})
$$

$J^2$에 적용하면:

$$
J^2(J_\pm\ket{a,b}) = J_\pm(J^2\ket{a,b}) = a(J_\pm\ket{a,b})
$$

따라서 계수 $C_\pm$에 대해:

$$
J_\pm\ket{a,b} = C_\pm\ket{a, b \pm \hbar}
$$

$C_\pm$의 정확한 형태는 나중에 normalization을 통해 찾을 것이다.

## 4. $b$의 Boundary와 양자수 $j$, $m$의 결정

### $a \geq b^2$의 증명

$$
J^2 - J_z^2 = J_x^2 + J_y^2 = \frac{1}{2}(J_+J_- + J_-J_+) = \frac{1}{2}(J_-^\dagger J_- + J_+^\dagger J_+)
$$

$$
\bra{a,b}J^2 - J_z^2\ket{a,b} = \frac{1}{2}\left\{\bra{a,b}J_-^\dagger J_-\ket{a,b} + \bra{a,b}J_+^\dagger J_+\ket{a,b}\right\}
$$

우변은 각각 norm의 제곱이므로 $\geq 0$이다. 따라서:

$$
a - b^2 \geq 0
$$

### $b_{\max}$와 $b_{\min}$의 결정

$b$에는 boundary가 있으며, $a$로 결정된다.

$$
J_+\ket{a, b_{\max}} = 0 \quad \Rightarrow \quad J_-J_+\ket{a, b_{\max}} = 0
$$

$$
J_-J_+ = (J_x - iJ_y)(J_x + iJ_y) = J_x^2 + J_y^2 + i[J_x, J_y] = J^2 - J_z^2 - \hbar J_z
$$

$$
J_-J_+\ket{a, b_{\max}} = (a - b_{\max}^2 - \hbar\,b_{\max})\ket{a, b_{\max}} = 0
$$

$$
\therefore\quad a = b_{\max}(b_{\max} + \hbar)
$$

같은 전개로:

$$
J_+J_- = J^2 - J_z^2 + \hbar J_z
$$

$$
a - b_{\min}^2 + \hbar\,b_{\min} = 0 \quad \Rightarrow \quad a = b_{\min}(b_{\min} - \hbar)
$$

두 식을 비교하면:

$$
b_{\min} = -b_{\max}
$$

> [!note] 확인
> $a = (-b_{\max})\{(-b_{\max}) - \hbar\} = b_{\max}(b_{\max} + \hbar)$ ✓

$b$가 $n+1$가지의 값을 가질 수 있다면, $b_{\max} = b_{\min} + n\hbar$이므로:

$$
b_{\max} = \frac{n}{2}\hbar
$$

### 양자수 $j$

$$
j = \frac{b_{\max}}{\hbar} = \frac{n}{2}
$$

$n$이 홀수면 $j$는 half integer, 짝수면 $j$는 integer. 총 $2j + 1$개의 state가 존재.

$$
a = b_{\max}(b_{\max} + \hbar) = j(j+1)\hbar^2
$$

### 양자수 $m$

$$
b = m\hbar
$$

$m$: $z$-component angular momentum의 expectation value에 해당하는 양자수.

$$
J^2\ket{j,m} = j(j+1)\hbar^2\ket{j,m}
$$

$$
J_z\ket{j,m} = m\hbar\ket{j,m}
$$

## 5. Matrix Elements와 Ladder Operator의 계수

### $J^2$과 $J_z$의 행렬 원소

$$
\bra{j',m'}J^2\ket{j,m} = j(j+1)\hbar^2\,\delta_{jj'}\,\delta_{mm'}
$$

$$
\bra{j',m'}J_z\ket{j,m} = m\hbar\,\delta_{jj'}\,\delta_{mm'}
$$

### $C^+_{jm}$의 결정 (Raising operator)

$$
\bra{j',m'}J_z\ket{j,m} = C^+_{jm}\bra{j',m'}\ket{j,m+1} = C^+_{jm}\,\delta_{jj'}\,\delta_{m',m+1}
$$

$\bra{j',m'}J_-J_+\ket{j,m}$을 두 가지 방법으로 계산한다:

$$
\bra{j',m'}J_-J_+\ket{j,m} = \bra{j',m'}J_+^\dagger J_+\ket{j,m} = \braket{j,m+1|j,m+1}\,|C^+_{jm}|^2\,\delta_{jj'}\,\delta_{m'm}
$$

$$
= \bra{j',m'}J^2 - J_z^2 - \hbar J_z\ket{j,m} = \{j(j+1)\hbar^2 - m^2\hbar^2 - m\hbar^2\}\,\delta_{jj'}\,\delta_{mm'}
$$

따라서:

$$
\boxed{C^+_{jm} = \hbar\sqrt{(j-m)(j+m+1)}}
$$

### $C^-_{jm}$의 결정 (Lowering operator)

비슷한 방식으로:

$$
\bra{j',m'}J_+J_-\ket{j,m} = |C^-_{jm}|^2\,\delta_{jj'}\,\delta_{mm'} = \{j(j+1)\hbar^2 - m^2\hbar^2 + m\hbar^2\}\,\delta_{jj'}\,\delta_{mm'}
$$

$$
\boxed{C^-_{jm} = \hbar\sqrt{(j+m)(j-m+1)}}
$$

### 전부 정리하면

$$
J_+\ket{j,m} = \hbar\sqrt{(j-m)(j+m+1)}\;\ket{j, m+1}
$$

$$
J_-\ket{j,m} = \hbar\sqrt{(j+m)(j-m+1)}\;\ket{j, m-1}
$$

$$
\bra{j',m'}J_\pm\ket{j,m} = \hbar\sqrt{(j \mp m)(j \pm m + 1)}\;\delta_{jj'}\,\delta_{m', m\pm 1}
$$

## 6. $\mathcal{D}(R)$의 행렬 표현

### Total Angular Momentum을 바꾸지 않는 이유

$\mathcal{D}(R)$은 total angular momentum을 바꾸지 않는다. 이는 $J^2$이 $\mathcal{D}(R)$과 commute해야 한다는 의미이다. Translation을 해도 momentum이 바뀌지 않는 관계와 유사하다.

$\ket{j,m}$과 $\mathcal{D}(R)\ket{j,m}$은 $J^2$에 대해 똑같은 eigenvalue $j(j+1)\hbar^2$을 가진다.

### $(2j+1)$차원 기약 표현

$$
\mathcal{D}(R)\ket{j,m} = \sum_{m'}\ket{j,m'}\bra{j,m'}\mathcal{D}(R)\ket{j,m} = \sum_{m'}\ket{j,m'}\,\mathcal{D}^{(j)}_{m'm}(R)
$$

$$
\boxed{\mathcal{D}^{(j)}_{(R)\,m'm} = \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}\vec{J}\cdot\hat{n}\,\phi\right)\ket{j,m}}
$$

이것은 $(2j+1) \times (2j+1)$ 행렬이다.

> [!note] Bra와 Ket의 $j$ 값이 같음에 주목하라.

모든 $j$에 대한 회전을 하나의 행렬로 나타낼 수 있다: block diagonal 형태로 $\mathcal{D}^{(1/2)}(R)$, $\mathcal{D}^{(1)}(R)$, $\mathcal{D}^{(3/2)}(R)$, ... 이 대각선에 배치된다.

## 7. Euler Angle 적용과 $d^{(j)}(\beta)$ 행렬

Euler rotation을 적용하자:

$$
\mathcal{D}^{(j)}_{m'm}(\alpha,\beta,\gamma) = \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}J_z\alpha\right)\exp\!\left(-\frac{i}{\hbar}J_y\beta\right)\exp\!\left(-\frac{i}{\hbar}J_z\gamma\right)\ket{j,m}
$$

$\ket{j,m}$은 $J_z$의 고유켓이므로:

$$
= e^{-im'\alpha}\,e^{-im\gamma}\,\bra{j,m'}\exp\!\left(-\frac{i}{\hbar}J_y\beta\right)\ket{j,m}
$$

새로운 행렬 $d^{(j)}(\beta)$를 정의하자:

$$
\boxed{d^{(j)}_{m'm}(\beta) \equiv \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}J_y\beta\right)\ket{j,m}}
$$

$j = \frac{1}{2}$일 경우, 이미 알고 있는 $2\times 2$ 행렬이다:

$$
d^{(1/2)} = \begin{pmatrix} \cos\frac{\beta}{2} & -\sin\frac{\beta}{2} \\ \sin\frac{\beta}{2} & \cos\frac{\beta}{2} \end{pmatrix}
$$

## 8. $j = 1$에서의 $J_y$ 행렬과 $d^{(1)}(\beta)$

$j = 1$이어서 $m$ 값이 3가지($m = 1, 0, -1$)인 경우.

$J_y$를 ladder operator를 이용해 나타내자:

$$
J_y = \frac{J_+ - J_-}{2i}
$$

### $J_+$와 $J_-$의 행렬 표현 ($j = 1$)

$$
(J_+)_{m',m}^{(j=1)} = \sqrt{(1-m)(1+m+1)}\;\hbar\;\delta_{m',m+1}
$$

$$
J_+^{(j=1)} = \begin{pmatrix} 0 & \sqrt{2}\,\hbar & 0 \\ 0 & 0 & \sqrt{2}\,\hbar \\ 0 & 0 & 0 \end{pmatrix}
$$

$$
(J_-)_{m',m}^{(j=1)} = \sqrt{(1+m)(1-m+1)}\;\hbar\;\delta_{m',m-1}
$$

$$
J_-^{(j=1)} = \begin{pmatrix} 0 & 0 & 0 \\ \sqrt{2}\,\hbar & 0 & 0 \\ 0 & \sqrt{2}\,\hbar & 0 \end{pmatrix}
$$

$$
J_y^{(j=1)} = \frac{\hbar}{2}\begin{pmatrix} 0 & -i\sqrt{2} & 0 \\ i\sqrt{2} & 0 & -i\sqrt{2} \\ 0 & i\sqrt{2} & 0 \end{pmatrix}
$$

### $\omega^3 = \omega$의 확인

편의를 위해 $\omega = J_y^{(j=1)}/\hbar$라 쓰자. $\omega^3 = \omega$임을 확인한다:

$$
\omega^2 = \frac{1}{4}\begin{pmatrix} 0 & -i\sqrt{2} & 0 \\ i\sqrt{2} & 0 & -i\sqrt{2} \\ 0 & i\sqrt{2} & 0 \end{pmatrix}\begin{pmatrix} 0 & -i\sqrt{2} & 0 \\ i\sqrt{2} & 0 & -i\sqrt{2} \\ 0 & i\sqrt{2} & 0 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & -1 \\ 0 & 2 & 0 \\ -1 & 0 & 1 \end{pmatrix}
$$

$$
\omega^3 = \omega^2 \cdot \omega = \frac{1}{2}\begin{pmatrix} 0 & -i\sqrt{2} & 0 \\ i\sqrt{2} & 0 & -i\sqrt{2} \\ 0 & i\sqrt{2} & 0 \end{pmatrix} = \omega \quad \checkmark
$$

### Taylor 전개로 $\exp(-i\omega\beta)$ 계산

$$
\exp(-i\omega\beta) = 1 - i\omega\beta + \frac{(-i)^2}{2!}(\omega\beta)^2 + \frac{(-i)^3}{3!}(\omega\beta)^3 + \frac{(-i)^4}{4!}(\omega\beta)^4 - \cdots
$$

$\omega^3 = \omega$를 반복 적용하면:

$$
= 1 - i\omega\beta - \frac{1}{2}\omega^2\beta^2 + i\frac{1}{3!}\omega\beta^3 + \frac{1}{4!}\omega^2\beta^4 - i\frac{1}{5!}\omega\beta^5 - \frac{1}{6!}\omega^2\beta^6 + \cdots
$$

$$
= \mathbb{1} - \omega^2(1 - \cos\beta) - i\omega\sin\beta
$$

> [!tip] 정리
> $\cos\beta = 1 - \frac{\beta^2}{2!} + \frac{\beta^4}{4!} - \frac{\beta^6}{6!} + \cdots$이고, $\sin\beta = \beta - \frac{\beta^3}{3!} + \frac{\beta^5}{5!} - \cdots$임을 이용.

### $d^{(1)}(\beta)$의 최종 결과

$$
\boxed{d^{(1)}(\beta) = \begin{pmatrix} \frac{1}{2}(1+\cos\beta) & -\frac{1}{\sqrt{2}}\sin\beta & \frac{1}{2}(1-\cos\beta) \\[6pt] \frac{1}{\sqrt{2}}\sin\beta & \cos\beta & -\frac{1}{\sqrt{2}}\sin\beta \\[6pt] \frac{1}{2}(1-\cos\beta) & \frac{1}{\sqrt{2}}\sin\beta & \frac{1}{2}(1+\cos\beta) \end{pmatrix}}
$$

# 궁금한 내용

> [!question] Body-fixed → Space-fixed 변환의 직관
> $R_{y'}(\beta) = R_z(\alpha)\,R_y(\beta)\,R_z^{-1}(\alpha)$에서, 오른쪽부터 읽으면 "$\alpha$만큼 되돌리고 → space $y$축으로 $\beta$ 돌리고 → 다시 $\alpha$ 돌림"인데, 이것이 왜 body-fixed $y'$축 회전과 같은지 직관적으로 이해할 수 있는가?

> [!question] $d^{(j)}(\beta)$ 행렬의 일반적 공식
> $j = \frac{1}{2}$와 $j = 1$의 경우를 명시적으로 계산했는데, 임의의 $j$에 대한 $d^{(j)}_{m'm}(\beta)$의 닫힌 공식(Wigner formula)은 어떤 형태인가?

# AI의 보충 설명



# 연관 학습 노트

- [[QM lecture note - Two-Component Spinor and Rotation Operator]]
- [[QM lecture note - Rotation and Angular Momentum]]

# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.3, 3.5

# 다음 강의



# 원본 필기 이미지

![[QM_12thweek_2.pdf]]
