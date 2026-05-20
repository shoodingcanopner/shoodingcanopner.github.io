---
title: "QM lecture note - Schwinger Oscillator Model and Wigner d-Matrix"
date: "2026-05-20"
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
[[QM lecture note - Euler Rotation and Angular Momentum Eigenvalues]]에서 Euler rotation의 body-fixed/space-fixed 변환, $j = \frac{1}{2}$ irreducible representation, 각운동량 고유값의 구조($j$, $m$ 양자수의 결정), ladder operator의 계수 $C^\pm_{jm}$, $\mathcal{D}(R)$의 $(2j+1)$차원 기약 표현, 그리고 $d^{(j)}(\beta)$ 행렬의 정의와 $j = 1$ 경우의 명시적 계산을 다루었다.

# 오늘의 핵심

- **회전 행렬 $\mathcal{D}^{(j)}_{m'm}(R)$의 오일러 각 표현**과 $d^{(j)}_{m'm}(\beta)$의 정의 복습
- **Schwinger Oscillator Model**: 두 독립 harmonic oscillator의 ladder operator로 각운동량 대수를 구성
- $n_+$, $n_-$와 $j$, $m$의 관계: $j = \frac{1}{2}(n_+ + n_-)$, $m = \frac{1}{2}(n_+ - n_-)$
- **Baker-Hausdorff Lemma**를 이용한 $\mathcal{D}(R)\,a_\pm^\dagger\,\mathcal{D}^{-1}(R)$의 계산
- Binomial expansion을 거쳐 **Wigner's $d$-matrix formula** $d^{(j)}_{m'm}(\beta)$의 닫힌 공식 유도

# 필기 내용

## 1. $\mathcal{D}^{(j)}_{m'm}(R)$과 $d^{(j)}_{m'm}(\beta)$의 정의 (복습)

회전 행렬의 정의:

$$
\mathcal{D}^{(j)}_{m'm}(R) = \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}\phi\,\vec{J}\cdot\hat{n}\right)\ket{j,m}
$$

오일러 각을 이용한 표현:

$$
D^{(j)}_{m'm}(\alpha,\beta,\gamma) = e^{-im'\alpha}\,e^{-im\gamma}\,\bra{j,m'}\exp\!\left(-\frac{i}{\hbar}\beta\,J_y\right)\ket{j,m}
$$

여기서 $d^{(j)}_{m'm}(\beta)$는 $y$축 회전에 해당하는 부분이다:

$$
d^{(j)}_{m'm}(\beta) = \bra{j,m'}\exp\!\left(-\frac{i}{\hbar}\beta\,J_y\right)\ket{j,m}
$$

**문제 제기**: 임의의 $j$에 대해 $d^{(j)}_{m'm}(\beta)$를 구하는 일반적인 방법은 없을까?

→ **Schwinger's Oscillator Model**을 소개한다!

## 2. Schwinger Oscillator Model

### 기본 설정

2개의 독립적인 harmonic oscillator를 고려하고, 각각의 ladder operator를 도입한다:

- **Plus type oscillator**: $a_+$, $a_+^\dagger$
- **Minus type oscillator**: $a_-$, $a_-^\dagger$

각각의 oscillator에 대해 number operator를 정의한다:

$$
N_+ = a_+^\dagger a_+, \qquad N_- = a_-^\dagger a_-
$$

$$
N_+ + 1 = a_+ a_+^\dagger, \qquad N_- + 1 = a_- a_-^\dagger
$$

### Commutation Relations

같은 type의 oscillator에 대해 (harmonic oscillator와 동일):

$$
[a_+, a_+^\dagger] = 1, \qquad [a_-, a_-^\dagger] = 1
$$

$$
[N_+, a_+] = -a_+, \qquad [N_-, a_-] = -a_-
$$

$$
[N_+, a_+^\dagger] = a_+^\dagger, \qquad [N_-, a_-^\dagger] = a_-^\dagger
$$

서로 다른 type의 oscillator를 위한 operator는 commute한다:

$$
[a_+^\dagger, a_-] = 0, \qquad [a_+, a_-^\dagger] = 0
$$

따라서 두 number operator도 commute한다:

$$
[N_+, N_-] = 0
$$

### Simultaneous Eigenket

두 operator에 대한 simultaneous eigenket을 고려할 수 있다:

$$
N_+\ket{n_+, n_-} = n_+\ket{n_+, n_-}, \qquad N_-\ket{n_+, n_-} = n_-\ket{n_+, n_-}
$$

Ladder operator는 각 type에 따로 작용한다:

$$
a_+\ket{n_+, n_-} = \sqrt{n_+}\;\ket{n_+ - 1, n_-}, \qquad a_-\ket{n_+, n_-} = \sqrt{n_-}\;\ket{n_+, n_- - 1}
$$

$$
a_+^\dagger\ket{n_+, n_-} = \sqrt{n_+ + 1}\;\ket{n_+ + 1, n_-}, \qquad a_-^\dagger\ket{n_+, n_-} = \sqrt{n_- + 1}\;\ket{n_+, n_- + 1}
$$

바닥 상태에서 내리면 0이 된다:

$$
a_+\ket{0,0} = 0, \qquad a_-\ket{0,0} = 0
$$

> [!question] $a_+\ket{0, n_-} = 0$, $a_-\ket{n_+, 0} = 0$이 임의의 $n_-$와 $n_+$에 성립하는가?
> $a_+$는 plus type에만 작용하므로 $n_+$가 0이면 항상 소멸. 마찬가지로 $a_-$는 $n_-$가 0이면 항상 소멸한다. 따라서 성립한다.

Harmonic potential에서 $\ket{0}$부터 raising operator를 반복 적용해 모든 상태를 정의하는 기법을 이용:

$$
\ket{n_+, n_-} = \frac{(a_+^\dagger)^{n_+}(a_-^\dagger)^{n_-}}{\sqrt{n_+!\,n_-!}}\ket{0,0}
$$

### $n_+$, $n_-$의 물리적 해석

이 모델은 마치 $z$-angular momentum의 최댓값($j$, quantum number)의 2배만큼 $\frac{1}{2}$-spin 입자가 내재되어 있다고 가정한 것이다. 그중 up-spin의 수가 $n_+$, down-spin의 수가 $n_-$인 것이다. 다만, 이 가상의 $\frac{1}{2}$ spin 입자들은 서로 구별되지 않는다.

- up-spin 1개는 $z$-angular momentum에 $\frac{\hbar}{2}$만큼 기여
- down-spin 1개는 $z$-angular momentum에 $-\frac{\hbar}{2}$만큼 기여
- Total momentum이 보존되면 ($j$가 바뀌지 않으면) 전체 spin 수는 유지되어야 한다

## 3. Angular Momentum Operators의 Oscillator 표현

$z$-방향 운동량을 올리고 내리는 $J_\pm$를 정의한다. Ladder operator는 무차원이라, $\hbar$를 곱해 준다.

$$
J_+ = \hbar\,a_+^\dagger a_- = \hbar\,a_- a_+^\dagger
$$

**의미**: down spin을 하나 줄이고 up spin을 하나 늘림 (순서 무관)

$$
J_- = \hbar\,a_-^\dagger a_+ = \hbar\,a_+ a_-^\dagger
$$

**의미**: up spin을 하나 줄이고 down spin을 하나 늘림 (순서 무관)

가상의 up-spin이 $z$-momentum에 $\frac{\hbar}{2}$ 기여하고, down-spin은 반대라고 한 것처럼,
$J_z$는 number operator로 정의한다:

$$
J_z = \frac{\hbar}{2}(N_+ - N_-) = \frac{\hbar}{2}(a_+^\dagger a_+ - a_-^\dagger a_-)
$$

### Commutation Relation 검증

$$
[J_z, J_\pm] = \pm\hbar\,J_\pm
$$

> [!tip] 직관적 예시
> $[J_z, J_\pm]\ket{j,m} = J_z J_\pm\ket{j,m} - J_\pm J_z\ket{j,m}$
> $= \{\hbar(m\pm 1) - \hbar m\}\,J_\pm\ket{j,m} = \pm\hbar\,J_\pm\ket{j,m}$

$$
[J_+, J_-] = 2\hbar\,J_z
$$

> [!tip] 증명 (Oscillator operator로)
> $\hbar^2[a_+^\dagger a_-,\,a_-^\dagger a_+]$
> $= \hbar^2\,a_+^\dagger[a_-,a_-^\dagger]a_+ + \hbar^2\,a_-^\dagger[a_+^\dagger, a_+]a_-$
> $= \hbar^2(a_+^\dagger a_+ - a_-^\dagger a_-) = 2\hbar\,J_z$
>
> 여기서 다른 type의 ladder operator는 commute함을 이용.

### "가상의 $\frac{1}{2}$ spin 입자들" 비유의 한계

"가상의 $\frac{1}{2}$ spin 입자들" 비유에 따르면 $J_+ J_-$와 $J_- J_+$의 결과가 같아야 할 것 같지만, 실제로는 그렇지 않다. ($[J_+, J_-] = 2\hbar J_z \neq 0$)

### Total Number Operator와 $J^2$

전체 스핀 수를 나타내는 number operator를 정의한다:

$$
N = N_+ + N_- = a_+^\dagger a_+ + a_-^\dagger a_-
$$

원래대로 다른 방향의 angular momentum을 정의하면:

$$
J_x = \frac{1}{2}(J_+ + J_-), \qquad J_y = \frac{1}{2i}(J_+ - J_-)
$$

$$
J_x^2 + J_y^2 = \frac{1}{2}\{J_+, J_-\}
$$

> [!note] 유도
> $J_x^2 + J_y^2 = \frac{1}{4}(J_+^2 + J_-^2 + \{J_+, J_-\}) - (J_+^2 + J_-^2 - \{J_+, J_-\})\cdot\frac{1}{4}$
> $= \frac{1}{4}(J_+^2 + J_-^2 + \{J_+, J_-\}) + \frac{1}{4}(-J_+^2 - J_-^2 + \{J_+, J_-\}) = \frac{1}{2}\{J_+, J_-\}$

Total angular momentum을 이렇게 정의한다:

$$
J^2 \equiv J_z^2 + \frac{1}{2}(J_+ J_- + J_- J_+)
$$

이를 oscillator operator로 계산하면:

$$
J^2 = \frac{\hbar^2}{2}\,N\!\left(\frac{N}{2} + 1\right)
$$

이것은 $\hbar^2 j(j+1)$과 직결된다.

## 4. $n_+$, $n_-$와 $j$, $m$의 관계

$J_\pm$, $J_z$를 $\ket{n_+, n_-}$에 작용한 결과를 $n_+$, $n_-$로 나타내면:

$$
J_+\ket{n_+, n_-} = \hbar\,a_+^\dagger a_-\ket{n_+, n_-} = \hbar\sqrt{(n_+ + 1)n_-}\;\ket{n_+ + 1, n_- - 1}
$$

$$
J_-\ket{n_+, n_-} = \hbar\,a_-^\dagger a_+\ket{n_+, n_-} = \hbar\sqrt{(n_- + 1)n_+}\;\ket{n_+ - 1, n_- + 1}
$$

$$
J_z\ket{n_+, n_-} = \frac{\hbar}{2}(N_+ - N_-)\ket{n_+, n_-} = \frac{\hbar}{2}(n_+ - n_-)\ket{n_+, n_-}
$$

세 연산 결과 모두 $N = N_+ + N_- = n_+ + n_-$은 바뀌지 않는 것에 주목.

원래 알고 있던 결과와 비교하면:

$$
J_+\ket{j,m} = \hbar\sqrt{(j-m)(j+m+1)}\;\ket{j, m+1}
$$

$$
J_-\ket{j,m} = \hbar\sqrt{(j+m)(j-m+1)}\;\ket{j, m-1}
$$

$$
J_z\ket{j,m} = \hbar m\ket{j,m}
$$

이 결과와 비교하면, $n_+$, $n_-$와 $j$, $m$의 관계를 구할 수 있다:

$$
\boxed{m = \frac{1}{2}(n_+ - n_-), \qquad j = \frac{1}{2}(n_+ + n_-)}
$$

$$
n_+ = j + m, \qquad n_- = j - m
$$

이제 $\ket{j,m}$을 일반적으로 나타낼 수 있다:

$$
\ket{n_+, n_-} = \frac{(a_+^\dagger)^{n_+}(a_-^\dagger)^{n_-}}{\sqrt{n_+!\,n_-!}}\ket{0,0} \implies \ket{j,m} = \frac{(a_+^\dagger)^{j+m}(a_-^\dagger)^{j-m}}{\sqrt{(j+m)!\,(j-m)!}}\ket{0,0}
$$

## 5. General Rotation Matrix의 유도

이제 모든 $j$에 대한 general rotation matrix를 찾을 수 있다. $\alpha$와 $\gamma$는 냅두고 $\beta$ 각만 돌려보자.

$$
\mathcal{D}(R) = \mathcal{D}(\alpha = 0, \beta, \gamma = 0) = \exp\!\left(-i\frac{\beta}{\hbar}J_y\right)
$$

$$
\mathcal{D}(R)\ket{j,m} = \mathcal{D}(R)\frac{(a_+^\dagger)^{j+m}(a_-^\dagger)^{j-m}}{\sqrt{(j+m)!\,(j-m)!}}\ket{0,0}
$$

어떤 연산자 $A$와 $B$에 대해:

$$
(BAB^{-1})^n = BA^n B^{-1}
$$

이 성질을 이용하면:

$$
\mathcal{D}(R)\ket{j,m} = \frac{[\mathcal{D}(R)\,a_+^\dagger\,\mathcal{D}^{-1}(R)]^{j+m}\;[\mathcal{D}(R)\,a_-^\dagger\,\mathcal{D}^{-1}(R)]^{j-m}}{\sqrt{(j+m)!\,(j-m)!}}\;\mathcal{D}(R)\ket{0,0}
$$

이때, $\mathcal{D}(R)\ket{0,0} = \ket{0,0}$이다. 이는 vacuum state가 회전에 대해 불변이기 때문이다.

따라서:

$$
\mathcal{D}(R)\ket{j,m} = \frac{[\mathcal{D}(R)\,a_+^\dagger\,\mathcal{D}^{-1}(R)]^{j+m}\;[\mathcal{D}(R)\,a_-^\dagger\,\mathcal{D}^{-1}(R)]^{j-m}}{\sqrt{(j+m)!\,(j-m)!}}\ket{0,0}
$$

## 6. Baker-Hausdorff Lemma를 이용한 전개

$\mathcal{D}(R)\,a_+^\dagger\,\mathcal{D}^{-1}(R)$과 $\mathcal{D}(R)\,a_-^\dagger\,\mathcal{D}^{-1}(R)$을 전개한다.

### Baker-Hausdorff Lemma

Operator $G$, $A$와 number $\lambda$에 대해, nested commutator 표기법을 도입한다.
나는 이렇게 쓰겠다. 어떤 교재에서는 다른 방법으로 표기할 거 같다. 

$$
[{}^n G, A] = \underbrace{[G,[G,\cdots[G,A]\cdots]]}_{n\text{번}}, \qquad [{}^0 G, A] \equiv A
$$

$$
\exp(iG\lambda)\,A\,\exp(-iG\lambda) = A + (i\lambda)[G,A] + \frac{(i\lambda)^2}{2!}[G,[G,A]] + \frac{(i\lambda)^3}{3!}[G,[G,[G,A]]] + \cdots + \frac{(i\lambda)^n}{n!}[G,[G,\cdots[G,A]\cdots]] + \cdots
$$

$$
\exp(iG\lambda)\,A\,\exp(-iG\lambda) = \sum_{n=0}^{\infty}\frac{(i\lambda)^n}{n!}\,[{}^n G, A]
$$
### 삼각함수 테일러 전개 정리

![[Pasted image 20260520134800.png]]
$$
\cos\theta = 1 - \frac{1}{2!}\theta^2 + \frac{1}{4!}\theta^4 + \cdots = \sum_{\substack{\ell\text{ is}\\\text{even number}}} (i)^\ell \frac{\theta^\ell}{\ell!}
$$
$$
\sin\theta = \theta - \frac{1}{3!}\theta^3 + \frac{1}{5!}\theta^5 - \cdots = \sum_{\substack{k\text{ is}\\\text{odd number}}} -i\,(i)^k \frac{\theta^k}{k!}
$$

### $\mathcal{D}(R)\,a_+^\dagger\,\mathcal{D}^{-1}(R)$의 계산

$G$자리에 $-\frac{1}{\hbar}J_y$를, $\lambda$자리에 $\beta$를 넣어 계산한다. Commutator를 몇 개 미리 계산한다:

$$
\left[-\frac{1}{\hbar}J_y,\,a_+^\dagger\right] = -\frac{1}{\hbar}\left[\frac{1}{2i}(J_+ - J_-),\,a_+^\dagger\right] = \frac{i}{2}[a_+^\dagger a_- - a_-^\dagger a_+,\,a_+^\dagger]
$$

$$
= \frac{1}{2i}\,a_-^\dagger[a_+, a_+^\dagger] = \frac{1}{2i}\,a_-^\dagger
$$
결국,
$$\left[-\frac{1}{\hbar}J_y,\,a_+^\dagger\right] = \frac{1}{2}\,a_-^\dagger$$

2중 commutator:

$$
\left[-\frac{1}{\hbar}J_y,\left[-\frac{1}{\hbar}J_y,\,a_+^\dagger\right]\right] = \left[-\frac{1}{\hbar}J_y,\,\frac{1}{2}\,a_-^\dagger\right] = \frac{1}{4}\,a_+^\dagger
$$

패턴을 정리하면:

$$
\left[^n\!\left(-\frac{1}{\hbar}J_y\right),\,a_+^\dagger\right] = \begin{cases} \dfrac{-i}{2^n}\,a_-^\dagger & n\text{ is odd} \\[8pt] \dfrac{1}{2^n}\,a_+^\dagger & n\text{ is even} \end{cases}
$$

Baker-Hausdorff Lemma에 대입하면:

$$
\exp\!\left(-i\frac{\beta}{\hbar}J_y\right)\,a_+^\dagger\,\exp\!\left(i\frac{\beta}{\hbar}J_y\right) = \sum_{n}\frac{(i\beta)^n}{n!}\left[{}^n\!\left(-\frac{1}{\hbar}J_y\right),\,a_+^\dagger\right]
$$
짝수 차수 항과 홀수 차수 항을 나누고
$$
= \sum_{\substack{\ell\text{ is}\\\text{even}}}\frac{i^\ell}{\ell!}\left(\frac{\beta}{2}\right)^\ell a_+^\dagger + \sum_{\substack{k\text{ is}\\\text{odd}}}\frac{i^k}{k!}\left(\frac{\beta}{2}\right)^k(-i\,a_-^\dagger)
$$
삼각함수 테일러 전개를 적용
$$
= a_+^\dagger\cos\!\left(\frac{\beta}{2}\right) + a_-^\dagger\sin\!\left(\frac{\beta}{2}\right)
$$

### $\mathcal{D}(R)\,a_-^\dagger\,\mathcal{D}^{-1}(R)$의 계산

마찬가지로 계산하면:

$$
\left[-\frac{1}{\hbar}J_y,\,a_-^\dagger\right] = \frac{i}{2}\,a_+^\dagger, \qquad \left[-\frac{1}{\hbar}J_y,\left[-\frac{1}{\hbar}J_y,\,a_-^\dagger\right]\right] = \frac{1}{4}\,a_+^\dagger
$$

패턴:

$$
\left[{}^n\!\left(-\frac{1}{\hbar}J_y\right),\,a_-^\dagger\right] = \begin{cases} \dfrac{i}{2^n}\,a_+^\dagger & n\text{ is odd} \\[8pt] \dfrac{1}{2^n}\,a_-^\dagger & n\text{ is even} \end{cases}
$$

결과:

$$
\exp\!\left(-i\frac{\beta}{\hbar}J_y\right)\,a_-^\dagger\,\exp\!\left(i\frac{\beta}{\hbar}J_y\right) = \sum_{\substack{\ell\text{ is}\\\text{even}}} \frac{i^\ell}{\ell!}\left(\frac{\beta}{2}\right)^\ell a_-^\dagger - \sum_{\substack{k\text{ is}\\\text{odd}}} \frac{-i\cdot(i)^k}{k!}\left(\frac{\beta}{2}\right)^k a_+^\dagger
$$
$$
= a_-^\dagger\cos\!\left(\frac{\beta}{2}\right) - a_+^\dagger\sin\!\left(\frac{\beta}{2}\right)
$$

### 정리

$$
\begin{pmatrix} \mathcal{D}(R)\,a_+^\dagger\,\mathcal{D}^{-1}(R) \\ \mathcal{D}(R)\,a_-^\dagger\,\mathcal{D}^{-1}(R) \end{pmatrix} = \begin{pmatrix} \cos\frac{\beta}{2} & \sin\frac{\beta}{2} \\ -\sin\frac{\beta}{2} & \cos\frac{\beta}{2} \end{pmatrix}\begin{pmatrix} a_+^\dagger \\ a_-^\dagger \end{pmatrix}
$$

> [!note] 관찰
> 이 $2\times 2$ 행렬은 $\frac{\beta}{2}$에 대한 회전 행렬이다. 
> 어떤 자료도 이렇게 삼각함수 테일러 전개까지 자세히 풀어 주지 않을 정도로 상세한 과정이다. 수업시간에는 이렇게 안 해서 내가 보충한 내용이다...

## 7. Binomial Expansion과 $d^{(j)}_{m'm}(\beta)$ 유도

위 결과를 $\mathcal{D}(R)\ket{j,m}$에 대입하면:

$$
\mathcal{D}(R)\ket{j,m} = \frac{\left[a_+^\dagger\cos\frac{\beta}{2} + a_-^\dagger\sin\frac{\beta}{2}\right]^{j+m}\;\left[-a_+^\dagger\sin\frac{\beta}{2} + a_-^\dagger\cos\frac{\beta}{2}\right]^{j-m}}{\sqrt{(j+m)!\,(j-m)!}}\ket{0,0}
$$

이때 binomial expansion을 이용한다. $(x + y)^N = \sum_k \frac{N!}{(N-k)!\,k!}\,x^{N-k}\,y^k$이므로:

$$
\mathcal{D}(R)\ket{j,m} = \sum_k\sum_\ell \frac{(j+m)!}{(j+m-k)!\,k!}\cdot\frac{(j-m)!}{(j-m-\ell)!\,\ell!}\cdot\frac{(a_+^\dagger\cos\frac{\beta}{2})^{j+m-k}\,(a_-^\dagger\sin\frac{\beta}{2})^k\,(-a_+^\dagger\sin\frac{\beta}{2})^{j-m-\ell}\,(a_-^\dagger\cos\frac{\beta}{2})^\ell}{\sqrt{(j+m)!\,(j-m)!}}\ket{0}
$$

한편, $\mathcal{D}(R)\ket{j,m}$의 $d^{(j)}_{m'm}(\beta)$ 표현은:

$$
\mathcal{D}(R)\ket{j,m} = \sum_{m'}\ket{j,m'}\,d^{(j)}_{m'm}(\beta) = \sum_{m'} d^{(j)}_{m'm}(\beta)\,\frac{(a_+^\dagger)^{j+m'}(a_-^\dagger)^{j-m'}}{\sqrt{(j+m')!\,(j-m')!}}\ket{0}
$$

$a_+^\dagger$와 $a_-^\dagger$의 지수가 같은 항을 비교한다:

- 1식에서 $a_+^\dagger$의 지수: $j + m - k + (j - m - \ell) = 2j - k - \ell$
- 2식에서 $a_+^\dagger$의 지수: $j + m'$
- 1식에서 $a_-^\dagger$의 지수: $k + \ell$
- 2식에서 $a_-^\dagger$의 지수: $j - m'$

양쪽 다 $\ell = j - k - m'$이라는 결론. 즉, $j$, $m'$과 $k$가 결정되면 $\ell$은 정해진다.

### 각 인자의 지수를 $m$, $m'$, $k$, $j$에 대해 나타내기

$$
\cos\frac{\beta}{2}\text{의 지수}: (j+m-k) + \ell = 2j - 2k + m - m'
$$

$$
\sin\frac{\beta}{2}\text{의 지수}: k + (j-m-\ell) = 2k - m + m'
$$

$$
(-1)\text{의 지수}: j - m - \ell = k - m + m'
$$

### Wigner's Formula

마침내, $d^{(j)}_{m'm}(\beta)$에 대한 완전한 식, **Wigner's formula**를 얻을 수 있다:

$$
\boxed{d^{(j)}_{m'm}(\beta) = \sum_k (-1)^{k-m+m'}\,\sqrt{\frac{(j+m)!\,(j-m)!\,(j+m')!\,(j-m')!}{(j+m-k)!\,k!\,(j-k-m')!\,(k-m+m')!}}\left(\cos\frac{\beta}{2}\right)^{2j-2k+m-m'}\left(\sin\frac{\beta}{2}\right)^{2k-m+m'}}
$$

합에서 $k$의 범위는 factorial의 인자가 0 이상인 값으로 제한된다.

# 궁금한 내용

> [!question] $\mathcal{D}(R)\ket{0,0} = \ket{0,0}$인 이유
> Vacuum state가 회전에 대해 불변이라는 것은 직관적으로 이해가 되지만, 엄밀하게 어떻게 보이는가? $J_y\ket{0,0} = 0$이면 $e^{-iJ_y\beta/\hbar}\ket{0,0} = \ket{0,0}$임은 자명한데, $J_y\ket{0,0} = \frac{1}{2i}(J_+ - J_-)\ket{0,0} = \frac{\hbar}{2i}(a_+^\dagger a_- - a_-^\dagger a_+)\ket{0,0} = 0$이므로 성립.

> [!question] Wigner $d$-matrix의 검증
> $j = \frac{1}{2}$와 $j = 1$을 Wigner's formula에 직접 대입하면 이전 강의에서 구한 $d^{(1/2)}(\beta)$와 $d^{(1)}(\beta)$가 재현되는가?

# AI의 보충 설명



# 연관 학습 노트

- [[QM lecture note - Euler Rotation and Angular Momentum Eigenvalues]]
- [[QM lecture note - Rotation and Angular Momentum]]
- [[QM lecture note - Simple Harmonic Oscillator]]

# 다음 강의



# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.8, 3.9

# 원본 필기 이미지

![[QM_13thweek_1.pdf]]