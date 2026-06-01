---
title: "QM lecture note - Addition of Angular Momentum and CG Coefficients"
date: "2026-05-30"
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
[[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]에서 orbital angular momentum $\mathbf{L}$의 position representation, spherical coordinate에서 $L_z$, $L_\pm$, $L^2$의 미분 연산자 표현, spherical harmonics $Y_l^m(\theta, \phi)$의 유도와 반정수 $l$ 배제, 그리고 $\mathcal{D}^{(l)}_{m'0}$과 spherical harmonics의 관계를 다루었다.

# 오늘의 핵심

- **$\mathbf{J}$, $\mathbf{L}$, $\mathbf{S}$의 관계**: $\mathbf{J} = \mathbf{L} \otimes \mathbf{1} + \mathbf{1} \otimes \mathbf{S}$. Orbital part와 spin part의 tensor product로 나타나는 전체 상태
- **두 전자 시스템**: 총 spin operator $\mathbf{S} = \mathbf{S}_1 \otimes \mathbf{1} + \mathbf{1} \otimes \mathbf{S}_2$의 commutation relation 증명
- **두 가지 basis**: $\{m_1, m_2\}$ basis ($S_{1z}, S_{2z}$의 동시 고유상태)와 $\{S, m\}$ basis ($S^2, S_z$의 동시 고유상태)
- **Singlet과 Triplet**: $|S=1, m = \pm 1, 0\rangle$ (triplet), $|S=0, m=0\rangle$ (singlet)
- **일반화**: 두 각운동량 $\mathbf{J}_1$, $\mathbf{J}_2$의 합에서 허용되는 $j$의 범위: $|j_1 - j_2| \le j \le j_1 + j_2$
- **Clebsch-Gordan (CG) Coefficients**: $\ket{j_1 j_2; m_1 m_2}$ basis와 $\ket{j_1 j_2; jm}$ basis를 이어주는 변환 계수
- **CG의 4가지 규칙**: $m = m_1 + m_2$ 조건, $j$의 범위, unitary + real value, normalization condition
- **CG를 찾는 법**: $m$이 최대/최소인 상태부터 $J_\pm$ 적용하여 recursion relation 도출
- **Spin-angular functions**: $j = l \pm \frac{1}{2}$ 상태의 orbital+spin wave function $\mathcal{Y}_l^{j=l\pm 1/2, m}$

# 필기 내용

## 1. J, L, S의 관계

> [!question] J, L, S의 관계는 무엇인가?

지난 노트에서 AI가 언급하기도 했지만, Sakurai에서 정확하게 다룬다.

$\mathbf{L}$과 $\mathbf{S}$는 $l$ 정수/반정수 상태에 작용하는, **연산 적용 대상이 배타적인** 관계이다.
- $\mathbf{L}$은 고전적으로 관찰되는 회전을 일으키는 연산자
- $\mathbf{S}$는 스핀이라는 양자적이고 "입자에 내재된" 상태를 만드는 연산자

$\mathbf{L}$과 $\mathbf{S}$의 합집합으로서, 양자적 영역까지 일반적인 rotation generator, 정확하게는 $[J_i, J_j] = i\hbar\varepsilon_{ijk}J_k$의 commutation property를 가지는 연산자가 $\mathbf{J}$이다.

따라서:

$$
\mathbf{J} = \mathbf{L} + \mathbf{S}
$$

더 엄밀하게는 tensor product로 써야 한다:

$$
\mathbf{J} = \mathbf{L} \otimes \mathbf{1} + \mathbf{1} \otimes \mathbf{S}
$$

$\otimes$를 기준으로:
- **왼쪽**: 정수 $l$을 가진 ket이 연산되는 공간, 즉 position eigen ket이 span하는 공간 (orbital space)
- **오른쪽**: 반정수 $s$를 가진 ket이 연산되는 공간, 즉 spin space

따라서 입자의 전체 상태는 orbital part (integer $l$)와 spin part (half-integer $s$)의 tensor product로 나타낸다:

$$
\ket{\Psi} = \ket{\Psi_\text{orb}} \otimes \ket{\Psi_\text{spin}}
$$

$\mathbf{J}$이 generate하는 회전 연산자도 이렇게 나타낼 수 있다:

$$
\mathcal{D}(R) = \mathcal{D}_\text{orb}(R) \otimes \mathcal{D}_\text{spin}(R) = \exp\!\left(-\frac{i}{\hbar}\mathbf{L}\cdot\hat{n}\phi\right) \otimes \exp\!\left(-\frac{i}{\hbar}\mathbf{S}\cdot\hat{n}\phi\right)
$$

## 2. 각운동량의 합 — 두 전자 시스템 예시

간단한 예시로 **2개의 전자**가 있는 시스템을 다루자.

두 연산자가 작용하는 공간은 독립적이기 때문에, 시스템 전체의 총 spin operator 역시 $\mathbf{J}$와 비슷한 방법으로 나타낼 수 있다:

$$
\mathbf{S} = \mathbf{S}_1 + \mathbf{S}_2 = \mathbf{S}_1 \otimes \mathbf{1} + \mathbf{1} \otimes \mathbf{S}_2
$$

- $\mathbf{S}_1$: 첫 번째 전자에 작용하는 spin operator
- $\mathbf{S}_2$: 두 번째 전자에 작용하는 spin operator

### Commutation Relation

$$
[S_{1i}, S_{2j}] = 0, \qquad [S_{1i}, S_{1j}] = i\hbar\varepsilon_{ijk}S_{1k}, \qquad [S_{2i}, S_{2j}] = i\hbar\varepsilon_{ijk}S_{2k}
$$

이러면 total spin $\mathbf{S}$도 일반적인 spin operator의 commutation relation을 만족한다:

$$
[S_i, S_j] = i\hbar\varepsilon_{ijk}S_k
$$

> [!note] Proof
> $$
> [S_i, S_j] = [S_{1i} \otimes \mathbf{1} + \mathbf{1} \otimes S_{2i},\; S_{1j} \otimes \mathbf{1} + \mathbf{1} \otimes S_{2j}]
> $$
> 
> 교환자를 전개하면 4개의 항이 나온다. 이 중 서로 다른 space에 작용하는 항들은 commute하여 0:
> 
> $$
> = [S_{1i} \otimes \mathbf{1},\; S_{1j} \otimes \mathbf{1}] + \underbrace{[\mathbf{1} \otimes S_{2i},\; S_{1j} \otimes \mathbf{1}]}_{=0} + \underbrace{[S_{1i} \otimes \mathbf{1},\; \mathbf{1} \otimes S_{2j}]}_{=0} + [\mathbf{1} \otimes S_{2i},\; \mathbf{1} \otimes S_{2j}]
> $$
> 
> $$
> = [S_{1i}, S_{1j}] \otimes \mathbf{1} + \mathbf{1} \otimes [S_{2i}, S_{2j}]
> $$
> 
> $$
> = i\hbar\varepsilon_{ijk}(S_{1k} \otimes \mathbf{1} + \mathbf{1} \otimes S_{2k}) = i\hbar\varepsilon_{ijk}S_k \quad \checkmark
> $$

## 3. 두 가지 Basis

전체 시스템에 대한 ket을 어떤 basis를 이용해 나타낼 수 있을까?

> [!note] Simultaneous eigen state는 서로 commute하는 operator들로 구성되어야 한다.

두 가지 basis를 사용할 수 있다.

### Basis ①: $S_{1z}$와 $S_{2z}$에 대한 simultaneous eigenstate

$$
\ket{m_1, m_2}: \quad \ket{\uparrow\uparrow}, \quad \ket{\downarrow\downarrow}, \quad \ket{\uparrow\downarrow}, \quad \ket{\downarrow\uparrow}
$$

$\uparrow$는 $m = +\frac{1}{2}$를, $\downarrow$는 $m = -\frac{1}{2}$를 나타냄.

### Basis ②: $S^2$와 $S_z$에 대한 simultaneous eigenstate

$$
\ket{S=1, m = \pm 1, 0}, \qquad \ket{S=0, m=0}
$$

여기서 **singlet**과 **triplet** 개념이 나온다:
- **Triplet**: 세 가지 상태($m$ 값들)가 있는 $|S=1, m = \pm 1, 0\rangle$
- **Singlet**: 한 가지 상태만 있는 $|S=0, m=0\rangle$

### 두 Basis의 관계

① 방식과 ② 방식의 eigen ket은 당연히 one-to-one으로 대응이 안 된다. ② 방식의 eigenkets는 ① 방식 eigenkets의 superposition이다:

$$
\ket{S=1,\; m=1} = \ket{\uparrow\uparrow}
$$

$$
\ket{S=1,\; m=0} = \frac{1}{\sqrt{2}}\left(\ket{\uparrow\downarrow} + \ket{\downarrow\uparrow}\right)
$$

$$
\ket{S=1,\; m=-1} = \ket{\downarrow\downarrow}
$$

$$
\ket{S=0,\; m=0} = \frac{1}{\sqrt{2}}\left(\ket{\uparrow\downarrow} - \ket{\downarrow\uparrow}\right)
$$

CG matrix (basis ①을 행, basis ②를 열로):

$$
CG_\text{matrix} = \langle m_1, m_2 | S, m \rangle =
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 0 & 1 \\
0 & \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0
\end{pmatrix}
\quad
\begin{matrix}
\ket{\uparrow\uparrow} \\
\ket{\uparrow\downarrow} \\
\ket{\downarrow\uparrow} \\
\ket{\downarrow\downarrow}
\end{matrix}
$$

(열: $|S=1,m=1\rangle$, $|S=1,m=0\rangle$, $|S=1,m=-1\rangle$, $|S=0,m=0\rangle$ 순서)

### $S^2$의 전개

$$
\mathbf{S}^2 = (\mathbf{S}_1 + \mathbf{S}_2)^2 = \mathbf{S}_1^2 + \mathbf{S}_2^2 + 2S_{1z}S_{2z} + S_{1+}S_{2-} + S_{1-}S_{2+}
$$

마지막 두 항 $S_{1+}S_{2-} + S_{1-}S_{2+}$ 때문에 $\mathbf{S}^2$는 $S_{1z}, S_{2z}$와 commute하지 않는다.

## 4. 일반화: 두 각운동량의 합

두 전자가 아니라, 서로 다른 $j$와 $m$ 값을 가진 두 입자의 total angular momentum을 구하는 문제(혹은 스핀을 가진 입자가 회전하는 상태)로 일반화해 보자.

**Two angular momenta**: $\mathbf{J}_1$, $\mathbf{J}_2$ 둘은 독립적이며 commute한다. $[J_{1i}, J_{2j}] = 0$

**State space**: 두 종류 회전 공간의 ket을 tensor product.

$$
\ket{j_1, m_1} \otimes \ket{j_2, m_2} \equiv \ket{j_1 j_2;\; m_1 m_2}
$$

**Dimension**: $(2j_1 + 1)(2j_2 + 1)$

**Commuting observables**: $J_1^2$, $J_2^2$, $J_{1z}$, $J_{2z}$

Total angular momentum:

$$
\mathbf{J} = \mathbf{J}_1 + \mathbf{J}_2, \qquad J_z = J_{1z} + J_{2z}
$$

### 두 가지 Basis

이때 쓸 수 있는 basis는 무엇인가? 서로 commute하는 operator 4개는 무엇인가?

**Basis ①**: $J_1^2$, $J_{1z}$, $J_2^2$, $J_{2z}$의 simultaneous eigenket $\ket{j_1 j_2;\; m_1 m_2}$

$$
J_1^2\ket{j_1 j_2;\; m_1 m_2} = \hbar^2 j_1(j_1 + 1)\ket{j_1 j_2;\; m_1 m_2}
$$

$$
J_{1z}\ket{j_1 j_2;\; m_1 m_2} = \hbar m_1\ket{j_1 j_2;\; m_1 m_2}
$$

$$
J_2^2\ket{j_1 j_2;\; m_1 m_2} = \hbar^2 j_2(j_2 + 1)\ket{j_1 j_2;\; m_1 m_2}
$$

$$
J_{2z}\ket{j_1 j_2;\; m_1 m_2} = \hbar m_2\ket{j_1 j_2;\; m_1 m_2}
$$

**Basis ②**: $J_1^2$, $J_2^2$, $J^2$, $J_z$의 simultaneous eigenket $\ket{j_1 j_2;\; jm}$

$$
J_1^2\ket{j_1 j_2;\; jm} = \hbar^2 j_1(j_1+1)\ket{j_1 j_2;\; jm}
$$

$$
J_2^2\ket{j_1 j_2;\; jm} = \hbar^2 j_2(j_2+1)\ket{j_1 j_2;\; jm}
$$

$$
J^2\ket{j_1 j_2;\; jm} = \hbar^2 j(j+1)\ket{j_1 j_2;\; jm}
$$

$$
J_z\ket{j_1 j_2;\; jm} = \hbar m\ket{j_1 j_2;\; jm}
$$

## 5. 허용되는 $j$의 범위

$j_1$과 $j_2$가 정해져 있을 때 허용되는 $j$ 값의 범위는 얼마인가?

$\mathbf{J} = \mathbf{J}_1 + \mathbf{J}_2$를 3차원 벡터합처럼 생각해보면, $j$를 벡터의 크기라고 순진하게 생각하면:

$$
|j_1 - j_2| \le j \le j_1 + j_2
$$

이를 더 확실하게 알 수 있는 방법은 두 가지 basis에서 양쪽의 차원이 (basis ket의 개수가) 같아야 한다는 것이다.

$\ket{j_1 j_2;\; m_1 m_2}$의 basis 개수: $(2j_1 + 1)(2j_2 + 1)$

$\ket{j_1 j_2;\; jm}$의 basis 개수: 

$$
\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1)
$$

이를 계산하면:

$$
\sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1) = \{(j_1+j_2) - |j_1-j_2| + 1\}\{(j_1+j_2) + |j_1-j_2| + 1\}
$$

$$
= 2(j_1+j_2) + (j_1+j_2)^2 - |j_1-j_2|^2 + 1 = 4j_1 j_2 + 2j_1 + 2j_2 + 1 = (2j_1+1)(2j_2+1)
$$

두 basis의 차원이 일치한다. ✓

> [!note] Example: $j_1 = \frac{5}{2}$, $j_2 = 2$인 경우
> 허용되는 $j$의 범위: $\frac{1}{2} \le j \le \frac{9}{2}$
>
> $\ket{m_1, m_2}$ grid에서 $m_1$은 6개 값 ($-\frac{5}{2}$부터 $\frac{5}{2}$), $m_2$는 5개 값 ($-2$부터 $2$)을 가지므로, 총 $6 \times 5 = 30$개의 basis ket이 존재한다.
>
> $\{S, m\}$ basis에서는 $j = \frac{9}{2}(10) + \frac{7}{2}(8) + \frac{5}{2}(6) + \frac{3}{2}(4) + \frac{1}{2}(2) = 10 + 8 + 6 + 4 + 2 = 30$개.

## 6. Clebsch-Gordan Coefficients의 정의

$\ket{j_1 j_2;\; m_1 m_2}$와 $\ket{j_1 j_2;\; jm}$ 사이의 변환 규칙을 담은 것이 **CG coefficients**다.

한 $\ket{j_1 j_2;\; jm}$를 $\ket{j_1 j_2;\; m_1 m_2}$의 superposition으로 나타낼 때 계수이므로:

$$
CG_{\{jm\}\{m_1 m_2\}} \equiv \braket{j_1 j_2;\; m_1 m_2 | j_1 j_2;\; jm}
$$

$$
\ket{j_1 j_2;\; jm} = \sum_{m_1}\sum_{m_2} CG_{\{jm\}\{m_1 m_2\}}\,\ket{j_1 j_2;\; m_1 m_2}
$$

$$
= \sum_{m_1}\sum_{m_2}\ket{j_1 j_2;\; m_1 m_2}\braket{j_1 j_2;\; m_1 m_2 | j_1 j_2;\; jm}
$$

## 7. CG에 대한 4가지 규칙

### 규칙 1: $m = m_1 + m_2$이어야 CG $\neq$ 0

직관적으로 생각해도 당연하다 (각운동량 보존). $J_z = J_{1z} + J_{2z}$로 생기는 특성:

$$
(J_z - J_{1z} - J_{2z})\ket{j_1 j_2;\; jm} = 0
$$

양 변에 $\bra{j_1 j_2;\; m_1 m_2}$를 취하면 ($J_z - J_{1z} - J_{2z}$는 Hermitian이니 bra에 반작용):

$$
(m - m_1 - m_2)\braket{j_1 j_2;\; m_1 m_2 | j_1 j_2;\; jm} = 0
$$

$m \neq m_1 + m_2$이면 CG = 0이어야 한다.

### 규칙 2: $|j_1 - j_2| \le j \le j_1 + j_2$

앞서 증명함. 직관적인 설명은 벡터합의 삼각부등식.

### 규칙 3: Unitary이며 convention에 따라 real value

그래서 orthogonal. Basis transition matrix이니 당연히 이래야 한다.

$$
\ket{j_1 j_2;\; m_1 m_2} = \sum_j\sum_m\ket{j_1 j_2;\; jm}\braket{j_1 j_2;\; jm | j_1 j_2;\; m_1 m_2}
$$

양 변에 $\bra{j_1 j_2;\; m_1' m_2'}$를 취하고, eigenket orthogonality에 의해:

$$
\braket{j_1 j_2;\; m_1' m_2' | j_1 j_2;\; m_1 m_2} = \sum_j\sum_m \braket{j_1 j_2;\; m_1' m_2' | j_1 j_2;\; jm}\braket{j_1 j_2;\; jm | j_1 j_2;\; m_1 m_2} = \delta_{m_1' m_1}\delta_{m_2' m_2}
$$

$\ket{j_1 j_2;\; jm}$도 비슷하게 orthogonality를 적용하면:

$$
\braket{j_1 j_2;\; j'm' | j_1 j_2;\; jm} = \sum_{m_1}\sum_{m_2}\braket{j_1 j_2;\; j'm' | j_1 j_2;\; m_1 m_2}\braket{j_1 j_2;\; m_1 m_2 | j_1 j_2;\; jm} = \delta_{j'j}\delta_{m'm}
$$

### 규칙 4: Normalization condition

$\ket{j_1 j_2;\; jm}$의 normalization condition에 의해:

$$
\sum_{m_1}\sum_{m_2 = m - m_1}\left|\braket{j_1 j_2;\; m_1 m_2 | j_1 j_2;\; jm}\right|^2 = 1
$$

어떤 책은 표기법으로 **Wigner's 3-$J$ symbol**을 쓰기도 한다:

$$
\braket{j_1 j_2;\; m_1 m_2 | j, m} = (-1)^{j_1-j_2+m}\sqrt{2j+1}
\begin{pmatrix} j_1 & j_2 & j \\ m_1 & m_2 & -m \end{pmatrix}
$$

## 8. CG를 찾는 법: Recursion Relation

$m$이 최대/최소인 $\ket{j_1 j_2;\; j, m}$에서부터 $J_-$나 $J_+$를 적용해 순서대로 나머지 $\ket{j_1 j_2;\; j, m}$을 구한다.

### 두 전자($j_1 = j_2 = \frac{1}{2}$)의 예시

가장 먼저: $\ket{\frac{1}{2}\frac{1}{2};\; j=1, m=1} = \ket{\frac{1}{2}\frac{1}{2};\; m_1=\frac{1}{2}, m_2=\frac{1}{2}}$

이것은 $m = m_1 + m_2$ 규칙에 의해 확정된 것.

$J_- = S_{1-} + S_{2-}$를 적용해 $|\frac{1}{2}\frac{1}{2};\; j=1, m=0\rangle$의 CG를 찾자:

$$
\left|\tfrac{1}{2}\tfrac{1}{2};\; j=1,\; m=0\right\rangle = \frac{J_-\left|\frac{1}{2}\frac{1}{2};\; j=1, m=1\right\rangle}{\hbar\sqrt{(0+1)(1-0+1)}}
$$

$$
= \frac{1}{\hbar\sqrt{2}}(S_{1-} + S_{2-})\left|\tfrac{1}{2}\tfrac{1}{2};\; m_1=\tfrac{1}{2},\; m_2=\tfrac{1}{2}\right\rangle
$$

$$
= \frac{1}{\sqrt{2}}\left[\left|\tfrac{1}{2}\tfrac{1}{2};\; m_1=-\tfrac{1}{2},\; m_2=\tfrac{1}{2}\right\rangle + \left|\tfrac{1}{2}\tfrac{1}{2};\; m_1=\tfrac{1}{2},\; m_2=-\tfrac{1}{2}\right\rangle\right]
$$

이 결과가 앞서 보았던 $|S=1, m=0\rangle = \frac{1}{\sqrt{2}}(\ket{\uparrow\downarrow} + \ket{\downarrow\uparrow})$이 이것이다. ✓

### 일반화된 Recursion Relation

$J_\pm\ket{j_1 j_2;\; jm}$을 계산하고 양 변에 $\bra{j_1 j_2;\; m_1 m_2}$를 적용하면:

$$
\sqrt{(j \mp m)(j \pm m + 1)}\;\braket{j_1 j_2;\; m_1 m_2 | j_1 j_2;\; j,\; m\pm 1}
$$

$$
= \sqrt{(j_1 \mp m_1 + 1)(j_1 \pm m_1)}\;\braket{j_1 j_2;\; m_1 \mp 1,\; m_2 | j_1 j_2;\; jm}
+ \sqrt{(j_2 \mp m_2 + 1)(j_2 \pm m_2)}\;\braket{j_1 j_2;\; m_1,\; m_2 \mp 1 | j_1 j_2;\; jm}
$$

- $J_+$로 이어진 관계: $(m_1 - 1, m_2)$, $(m_1, m_2 - 1)$과 $(m_1, m_2)$를 이어줌
- $J_-$로 이어진 관계: $(m_1 + 1, m_2)$, $(m_1, m_2 + 1)$과 $(m_1, m_2)$를 이어줌

Recursion relation을 적용하다 보면 금지된 구역을 한 점 겹치는 경우가 있다. 요령껏 변두리부터 답을 구하고 내부로 아는 영역을 확장하면 된다.

## 9. l-orbital을 도는 전자의 CG: Spin-Angular Functions

예시로 $l$-orbital을 도는 전자를 풀어보자. $j = l \pm \frac{1}{2}$이 가능.

$j = l + \frac{1}{2}$ 일 때를 풀어보자. 임의의 $m$에 대해:

$$
\left\langle m_l = m - \tfrac{1}{2},\; m_s = \tfrac{1}{2}\;\bigg|\; j = l + \tfrac{1}{2},\; m\right\rangle
$$

부터 CG 찾기 시작.

$J_-$ recursion relation을 연쇄적으로 적용하면:

$$
\left\langle m - \tfrac{1}{2},\; \tfrac{1}{2}\;\bigg|\; l + \tfrac{1}{2},\; m\right\rangle = \frac{\sqrt{l + m + \frac{1}{2}}}{\sqrt{l + m + \frac{3}{2}}}\left\langle m + \tfrac{1}{2},\; \tfrac{1}{2}\;\bigg|\; l + \tfrac{1}{2},\; m+1\right\rangle
$$

이를 연쇄적으로 최대 $m$ 값($m = l + \frac{1}{2}$)까지 끌어올리면:

$$
\left\langle m - \tfrac{1}{2},\; \tfrac{1}{2}\;\bigg|\; l + \tfrac{1}{2},\; m\right\rangle = \sqrt{\frac{l + m + \frac{1}{2}}{2l + 1}}\,\left\langle l,\; \tfrac{1}{2}\;\bigg|\; l + \tfrac{1}{2},\; l + \tfrac{1}{2}\right\rangle
$$

전체 $z$ angular momentum이 최고인 상태는 두 basis 모두에서 하나의 basis ket이다:

$$
\left|j = l + \tfrac{1}{2},\; M = l + \tfrac{1}{2}\right\rangle = \left|m_l = l,\; m_s = \tfrac{1}{2}\right\rangle
$$

관습상 $\left\langle l, \frac{1}{2} \;\big|\; l + \frac{1}{2}, l + \frac{1}{2}\right\rangle = 1$이라고 둔다. 따라서:

$$
\left\langle m - \tfrac{1}{2},\; \tfrac{1}{2}\;\bigg|\; l + \tfrac{1}{2},\; m\right\rangle = \sqrt{\frac{l + m + \frac{1}{2}}{2l + 1}}
$$

나머지 CG들은 orthogonality를 이용하여 구할 수 있다. 전체 4개의 CG는:

$$
\begin{pmatrix}
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle \\
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle
\end{pmatrix}
= \begin{pmatrix} \sqrt{\dfrac{l+m+\frac{1}{2}}{2l+1}} & \sqrt{\dfrac{l-m+\frac{1}{2}}{2l+1}} \\[10pt] -\sqrt{\dfrac{l-m+\frac{1}{2}}{2l+1}} & \sqrt{\dfrac{l+m+\frac{1}{2}}{2l+1}} \end{pmatrix}
$$

이제 스핀과 오비탈을 전부 포함한 bound electron의 상태를 일반식으로 나타낼 수 있다:

$$
\begin{pmatrix} \left|l+\tfrac{1}{2}, m\right\rangle \\ \left|l-\tfrac{1}{2}, m\right\rangle \end{pmatrix}
=
\begin{pmatrix}
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle \\
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle
\end{pmatrix}
\begin{pmatrix} \left|m-\tfrac{1}{2}, \tfrac{1}{2}\right\rangle \\ \left|m+\tfrac{1}{2}, -\tfrac{1}{2}\right\rangle \end{pmatrix}
$$

## 10. Spin-Angular Functions

이를 **spin-angular function**이라 부른다:

$$
\mathcal{Y}_l^{j=l\pm\frac{1}{2},\; m} = \pm\sqrt{\frac{l \pm m + \frac{1}{2}}{2l+1}}\;Y_l^{m-1/2}(\theta, \phi)\,\chi_+ + \sqrt{\frac{l \mp m + \frac{1}{2}}{2l+1}}\;Y_l^{m+1/2}(\theta, \phi)\,\chi_-
$$

행렬 형태로:

$$
\mathcal{Y}_l^{j=l\pm\frac{1}{2},\; m} = \frac{1}{\sqrt{2l+1}}\begin{pmatrix} \pm\sqrt{l \pm m + \frac{1}{2}}\;Y_l^{m-1/2}(\theta, \phi) \\ \sqrt{l \mp m + \frac{1}{2}}\;Y_l^{m+1/2}(\theta, \phi) \end{pmatrix}
$$

Spin-angular function은 $L^2$, $S^2$, $J^2$, $J_z$의 eigenfunction이다.

또한 $\mathbf{L} \cdot \mathbf{S}$의 eigenfunction이기도 하나, 앞선 operator와 독립적이지 않다. 왜냐하면:

$$
\mathbf{L} \cdot \mathbf{S} = \frac{1}{2}(J^2 - L^2 - S^2) \quad \Longleftrightarrow \quad J^2 = L^2 + S^2 + 2\mathbf{L}\cdot\mathbf{S}
$$

$\mathbf{L} \cdot \mathbf{S}$의 eigenvalue도 쉽게 구할 수 있다:

$$
\frac{\hbar^2}{2}\left[j(j+1) - l(l+1) - \frac{3}{4}\right] = \begin{cases} \dfrac{l\hbar^2}{2} & \text{for } j = l + \tfrac{1}{2} \\[8pt] -\dfrac{(l+1)\hbar^2}{2} & \text{for } j = l - \tfrac{1}{2} \end{cases}
$$

# 궁금한 내용

> [!question] $S^2$와 $S_{1z}, S_{2z}$가 왜 commute하지 않는가?
> $\mathbf{S}^2 = \mathbf{S}_1^2 + \mathbf{S}_2^2 + 2S_{1z}S_{2z} + S_{1+}S_{2-} + S_{1-}S_{2+}$에서, $S_{1+}S_{2-}$와 $S_{1-}S_{2+}$ 항들이 $S_{1z}$ 또는 $S_{2z}$의 값을 바꾸기 때문이다. 구체적으로 $[S_{1+}S_{2-}, S_{1z}] \neq 0$이므로 $[\mathbf{S}^2, S_{1z}] \neq 0$.

> [!question] CG의 recursion relation을 실제로 적용할 때 어떻게 시작하는가?
> 가장 높은 $m$ 값을 가지는 상태, 즉 $m = j$인 상태 $\ket{j_1 j_2;\; j, j}$는 항상 $\ket{j_1 j_2;\; m_1 = j_1, m_2 = j_2}$와 같다 (규칙 1에 의해 유일하게 결정). 이것을 출발점으로 $J_-$를 반복 적용하면 같은 $j$에 대한 모든 CG를 구할 수 있다. 다른 $j$ 값의 시작 상태는 이미 구한 상태들과의 orthogonality 조건으로 결정한다.

# AI의 보충 설명

# 연관 학습 노트

- [[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]
- [[QM lecture note - Rotation and Angular Momentum]]
- [[QM lecture note - Two-Component Spinor and Rotation Operator]]

# 다음 강의
[[QM lecture note - Tensor Operators and Wigner-Eckart Theorem]]에서 CG coefficients와 rotation matrix의 연결, spherical tensor operator의 정의와 성질, Wigner-Eckart theorem을 다룬다.
# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.7, 3.8
- Sakurai, *Modern Quantum Mechanics*, Chapter 4.1 (Symmetry and Conservation Laws)

# 원본 필기 이미지
![[QM_14thweek_1.pdf]]
![[QM_14thweek_2.pdf]]
