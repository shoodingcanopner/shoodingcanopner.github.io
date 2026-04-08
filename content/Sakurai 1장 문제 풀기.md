---
title: "Sakurai 1장 문제 풀기"
date: "2026-04-08"
tags:
  - study
  - quantum-mechanics
  - problem-solving
---

# Sakurai 1장 문제 풀기

> [!info]
> Sakurai Modern Quantum Mechanics 1장 연습문제 풀이 모음.
> 접근법과 핵심 개념 위주로 정리.

---

## 1.6 — Bra-ket 대수 규칙 증명

![[Pasted image 20260408180333.png]]

---

### 1.6a — tr(XY) = tr(YX)

#### 핵심 개념

- **연산자의 Outer Product 표현**: 연산자는 두 orthonormal basis의 조합으로 나타낼 수 있다. 예) $X = \sum_k \ket{b^k}\bra{a^k}$ — 여기서 $\{\ket{a^k}\}$와 $\{\ket{b^k}\}$는 서로 다른 ONB. 이 표현이 이 문제 풀이 전체의 출발점. 이렇게 정의된 operator는 $\bra{a^k}$을 먹어서 $\ket{b^k}$을 뱉는다. 
- **Trace의 정의**: $\text{tr}(A) = \sum_n \langle n | A | n \rangle$, 여기서 $\{\ket{n}\}$은 임의의 완비 정규직교기저(ONB)
- **항등연산자 삽입**: $\mathbb{1} = \sum_m \ket{m}\bra{m}$
- **Bracket은 c-number**: $\langle a | b \rangle \in \mathbb{C}$ 이므로 곱셈 순서 교환 가능

#### 접근법

두 연산자를 outer product 형태로 표현한다:

$$
X = \sum_k \ket{b^k}\bra{a^k}, \quad Y = \sum_\ell \ket{d^\ell}\bra{c^\ell}
$$

각각의 trace를 전개:

$$
\text{tr}(XY) = \sum_n \bra{n} XY \ket{n} = \sum_{n,k,\ell} \langle n | b^k \rangle \langle a^k | d^\ell \rangle \langle c^\ell | n \rangle
$$

항등연산자 $\mathbb{1} = \sum_m \ket{m}\bra{m}$를 $\bra{a^k}$와 $\ket{d^\ell}$ 사이에 삽입하면:

$$
\text{tr}(XY) = \sum_{m,n,k,\ell} \langle n | b^k \rangle \langle a^k | m \rangle \langle m | d^\ell \rangle \langle c^\ell | n \rangle
$$

마찬가지로:

$$
\text{tr}(YX) = \sum_{m,n,k,\ell} \langle m | d^\ell \rangle \langle c^\ell | n \rangle \langle n | b^k \rangle \langle a^k | m \rangle
$$

각 bracket은 복소수(c-number)이므로 곱셈 순서를 자유롭게 바꿀 수 있다. 따라서 두 식의 summand가 동일하고:

$$
\boxed{\text{tr}(XY) = \text{tr}(YX)} \quad \blacksquare
$$

> [!tip] 풀이 검토
> 논리 구조는 완벽. **"bracket은 c-number이므로 순서 교환 가능"** 이라는 문장을 명시적으로 쓰는 것이 포인트.

---

### 1.6b — $(XY)^\dagger = Y^\dagger X^\dagger$

#### 핵심 개념

- **Dagger 연산의 효과**: $\ket{\alpha}\bra{\beta}$에 dagger를 취하면 $\ket{\beta}\bra{\alpha}$ — bra ↔ ket 뒤집힘
- **Bracket의 켤레**: $\langle a | b \rangle^* = \langle b | a \rangle$

#### 접근법

$X^\dagger$와 $Y^\dagger$를 각각 구한다:

$$
X^\dagger = \sum_k \ket{a^k}\bra{b^k}, \quad Y^\dagger = \sum_\ell \ket{c^\ell}\bra{d^\ell}
$$

$(XY)^\dagger$를 직접 계산:

$$
XY = \sum_{k,\ell} \ket{b^k}\langle a^k | d^\ell \rangle \bra{c^\ell}
$$

$$
(XY)^\dagger = \sum_{k,\ell} \ket{c^\ell}\langle a^k | d^\ell \rangle^* \bra{b^k} = \sum_{k,\ell} \ket{c^\ell}\langle d^\ell | a^k \rangle \bra{b^k}
$$

$Y^\dagger X^\dagger$를 직접 계산해서 동일함을 확인:

$$
Y^\dagger X^\dagger = \sum_{k,\ell} \ket{c^\ell}\langle d^\ell | a^k \rangle \bra{b^k}
$$

$$
\boxed{(XY)^\dagger = Y^\dagger X^\dagger} \quad \blacksquare
$$

---

### 1.6c — $\exp[if(A)]$를 ket-bra form으로

#### 핵심 개념

- **Spectral decomposition**: Hermitian operator $A$는 $A = \sum_{a'} a' \ket{a'}\bra{a'}$로 분해됨
- **Projector의 멱승**: $\left(\ket{a'}\bra{a'}\right)^n = \ket{a'}\bra{a'}$ (∵ $\langle a' | a' \rangle = 1$)
- **서로 다른 eigenstate 간의 곱**: $\bra{a''}\ket{a'} = \delta_{a'a''}$ 이므로 교차항은 모두 0

#### 접근법

Taylor 전개:

$$
\exp[if(A)] = \sum_{n=0}^{\infty} \frac{[if(A)]^n}{n!}
$$

Spectral decomposition을 대입하면 $A^n = \sum_{a'} (a')^n \ket{a'}\bra{a'}$이므로:

$$
\exp[if(A)] = \sum_{a'} \left(\sum_{n=0}^{\infty} \frac{[if(a')]^n}{n!}\right) \ket{a'}\bra{a'}
$$

$$
\boxed{\exp[if(A)] = \sum_{a'} \exp[if(a')] \ket{a'}\bra{a'}}
$$

> [!tip]
> Hermitian operator의 함수는 **eigenvalue에 그 함수를 적용하고 projector를 붙이면** 된다. 이 결과는 양자역학 전반에서 매우 자주 쓰인다 (예: Time evolution operator $e^{-iHt/\hbar}$).

---

### 1.6d — $\sum_{a'} \psi_{a'}^*(\mathbf{x}')\psi_{a'}(\mathbf{x}'')$

#### 핵심 개념

- **파동함수의 bra-ket 표현**: $\psi_{a'}(\mathbf{x}') = \langle \mathbf{x}' | a' \rangle$
- **항등연산자 삽입**: $\mathbb{1} = \sum_{a'}\ket{a'}\bra{a'}$
- **Position eigenstate의 정규직교성**: $\langle \mathbf{x}'' | \mathbf{x}' \rangle = \delta^{(3)}(\mathbf{x}'' - \mathbf{x}')$

#### 접근법

$\psi_{a'}(\mathbf{x}') = \langle \mathbf{x}' | a' \rangle$이므로 $\psi_{a'}^*(\mathbf{x}') = \langle a' | \mathbf{x}' \rangle$. 대입하면:

$$
\sum_{a'} \psi_{a'}^*(\mathbf{x}')\psi_{a'}(\mathbf{x}'') = \sum_{a'} \langle a' | \mathbf{x}' \rangle \langle \mathbf{x}'' | a' \rangle = \langle \mathbf{x}'' \left| \sum_{a'} \ket{a'}\bra{a'} \right| \mathbf{x}' \rangle
$$

중간의 합이 항등연산자이므로:

$$
= \langle \mathbf{x}'' | \mathbf{x}' \rangle = \boxed{\delta^{(3)}(\mathbf{x}'' - \mathbf{x}')}
$$


---

## 1.13 — Two-state system의 Energy Eigenket
![[Pasted image 20260408181604.png]]
> A two-state system is characterized by the Hamiltonian
> $$H = H_{11}\ket{1}\bra{1} + H_{22}\ket{2}\bra{2} + H_{12}[\ket{1}\bra{2} + \ket{2}\bra{1}]$$
> where $H_{11}, H_{22}, H_{12} \in \mathbb{R}$. $\ket{1}, \ket{2}$는 $H$가 아닌 어떤 observable의 eigenket.
> Energy eigenket과 eigenvalue를 구하고, $H_{12}=0$ 극한이 올바른지 확인하라.

#### 핵심 개념

- **Matrix representation**: $\ket{1}, \ket{2}$를 basis로 $H$를 행렬로 나타내면 $2\times 2$ symmetric matrix
- **Hermitian matrix의 eigenvalue**: 항상 실수, eigenvector는 서로 직교

#### 접근법

$\{\ket{1}, \ket{2}\}$ basis에서 $H$의 행렬 표현:

$$
H \doteq \begin{pmatrix} H_{11} & H_{12} \\ H_{12} & H_{22} \end{pmatrix}
$$

Characteristic equation $\det(H - E\mathbb{1}) = 0$을 풀면:

#### 결과

**Energy eigenvalue:**

$$
\boxed{E_{\pm} = \frac{(H_{11} + H_{22}) \pm \sqrt{(H_{11} - H_{22})^2 + 4H_{12}^2}}{2}}
$$

**Energy eigenket** ($\ket{1}, \ket{2}$ basis로 표현):

$$
\ket{E_-} \propto \begin{pmatrix} \dfrac{(H_{11}-H_{22}) + \sqrt{(H_{11}-H_{22})^2+4H_{12}^2}}{2H_{12}} \\[6pt] 1 \end{pmatrix}, \quad \ket{E_+} \propto \begin{pmatrix} \dfrac{(H_{11}-H_{22}) - \sqrt{(H_{11}-H_{22})^2+4H_{12}^2}}{2H_{12}} \\[6pt] 1 \end{pmatrix}
$$

#### Sanity check: $H_{12} = 0$ 극한

$$
E_- = H_{11}, \quad E_+ = H_{22}
$$

eigenket도 각각 $\ket{1}$, $\ket{2}$로 환원 → $H_{12}=0$이면 $\ket{1}, \ket{2}$가 처음부터 $H$의 eigenket이 되는 것과 일치. ✅


---

## 1.22 — Uncertainty product를 최대화하는 spin state
![[Pasted image 20260408181555.png]]
> $\ket{+}$와 $\ket{-}$의 linear combination 중 $\langle(\Delta S_x)^2\rangle\langle(\Delta S_y)^2\rangle$를 최대화하는 상태를 찾고, 불확정성 관계가 위반되지 않음을 확인하라.

#### 핵심 개념

- **Bloch sphere 표현**: 가장 일반적인 spin-1/2 상태는 $\ket{\psi} = \cos\frac{\theta}{2}\ket{+} + e^{i\phi}\sin\frac{\theta}{2}\ket{-}$
- **Pauli matrix의 제곱**: $S_x^2 = S_y^2 = \frac{\hbar^2}{4}\mathbb{1}$ → $\langle S_x^2 \rangle = \langle S_y^2 \rangle = \frac{\hbar^2}{4}$ 는 모든 상태에서 고정
- **분산의 정의**: $\langle(\Delta S_x)^2\rangle = \langle S_x^2\rangle - \langle S_x\rangle^2$

#### 접근법

$S_x, S_y$의 행렬 표현:

$$
S_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}, \quad S_y = \frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}
$$

$\langle S_x^2 \rangle = \langle S_y^2 \rangle = \frac{\hbar^2}{4}$가 고정이므로, uncertainty product는:

$$
\langle(\Delta S_x)^2\rangle\langle(\Delta S_y)^2\rangle = \left(\frac{\hbar^2}{4} - \langle S_x\rangle^2\right)\left(\frac{\hbar^2}{4} - \langle S_y\rangle^2\right)
$$

Bloch sphere 표현으로 기댓값을 계산하면:

$$
\langle S_x \rangle = \frac{\hbar}{2}\sin\theta\cos\phi, \quad \langle S_y \rangle = \frac{\hbar}{2}\sin\theta\sin\phi
$$

곱을 **최대화**하려면 $\langle S_x \rangle = \langle S_y \rangle = 0$ 이어야 하므로, $\sin\theta = 0$, 즉 $\theta = 0$ 또는 $\theta = \pi$.

#### 결과

$$
\boxed{\ket{\psi} = \ket{+} \quad \text{또는} \quad \ket{\psi} = \ket{-}}
$$

이 상태에서 uncertainty product:

$$
\langle(\Delta S_x)^2\rangle\langle(\Delta S_y)^2\rangle = \frac{\hbar^2}{4} \cdot \frac{\hbar^2}{4} = \frac{\hbar^4}{16}
$$

#### Sanity check: 불확정성 관계 검증

$[S_x, S_y] = i\hbar S_z$ 이므로 불확정성 관계:

$$
\langle(\Delta S_x)^2\rangle\langle(\Delta S_y)^2\rangle \geq \frac{1}{4}|\langle[S_x, S_y]\rangle|^2 = \frac{\hbar^2}{4}\langle S_z\rangle^2
$$

$\ket{+}$ 상태에서 $\langle S_z \rangle = \frac{\hbar}{2}$ 이므로 우변 $= \frac{\hbar^4}{16}$.

좌변 $=$ 우변 $= \frac{\hbar^4}{16}$ → **등호 성립 (minimum uncertainty state)** ✅

> [!tip]
> $\ket{\pm}$는 $S_z$ eigenstate이기 때문에 $S_x, S_y$의 기댓값이 0이 되어 분산이 최대화된다. 직관적으로, $z$축 방향으로 spin이 완전히 확정되면 $x, y$ 방향의 불확정성이 최대가 되는 것.


---

## 1.31 — Commutator와 Poisson bracket

> **a.** $[x_i, G(\mathbf{p})] = i\hbar\frac{\partial G}{\partial p_i}$, $[p_i, F(\mathbf{x})] = -i\hbar\frac{\partial F}{\partial x_i}$ 를 fundamental commutation relation으로부터 유도하라.
> **b.** $[x^2, p^2]$를 계산하고 고전 Poisson bracket $\{x^2,p^2\}_\text{classical}$과 비교하라.

---

### 1.31a — 재귀적 QM 증명
![[Pasted image 20260408181550.png]]
#### 핵심 개념

- **Commutator의 Leibniz rule**: $[A, BC] = [A,B]C + B[A,C]$
- 이 규칙이 commutator를 **미분 연산자처럼** 작동하게 만든다
- Fundamental canonical commutation relation: $[x_i, p_j] = i\hbar\delta_{ij}$

#### 접근법

**Step 1**: 재귀 보조 정리를 수학적 귀납법으로 증명

$$
[x_i, p_j^n] = i\hbar\, n\, p_j^{n-1}\delta_{ij}
$$

귀납 단계 (Leibniz rule 적용):

$$
[x_i, p^{n+1}] = [x_i, p^n]\cdot p + p^n\cdot[x_i, p] = (i\hbar n\, p^{n-1})\cdot p + p^n\cdot(i\hbar) = i\hbar(n+1)p^n \quad \checkmark
$$

**Step 2**: $G(\mathbf{p})$를 power series로 전개

$$
G(\mathbf{p}) = \sum_n g_n p_i^n \implies [x_i, G(\mathbf{p})] = \sum_n g_n \cdot i\hbar n\, p_i^{n-1} = i\hbar\frac{\partial G}{\partial p_i}
$$

Power series의 항별 미분이 그대로 $\partial G/\partial p_i$가 된다. $F(\mathbf{x})$의 경우도 동일 구조.

$$
\boxed{[x_i, G(\mathbf{p})] = i\hbar\frac{\partial G}{\partial p_i}, \qquad [p_i, F(\mathbf{x})] = -i\hbar\frac{\partial F}{\partial x_i}}
$$

> [!tip]
> Commutator가 Leibniz rule을 만족하기 때문에, 미분과 동일한 재귀 구조를 갖는다. 이것이 QM의 commutator와 고전역학의 Poisson bracket이 구조적으로 대응되는 근본 이유.

---

### 1.31b — $[x^2, p^2]$ 계산

#### QM 계산

1.31a의 결과 $[x, p^2] = i\hbar \cdot 2p$를 Leibniz rule과 함께 적용:

$$
[x^2, p^2] = x[x, p^2] + [x, p^2]x = x(2i\hbar p) + (2i\hbar p)x
$$

$$
\boxed{[x^2, p^2] = 2i\hbar(xp + px)}
$$

#### 고전 Poisson bracket 비교

$$
\{x^2, p^2\}_\text{classical} = \frac{\partial(x^2)}{\partial x}\frac{\partial(p^2)}{\partial p} - \frac{\partial(x^2)}{\partial p}\frac{\partial(p^2)}{\partial x} = 2x \cdot 2p = 4xp
$$

고전 극한 $\hbar \to 0$에서 $xp \approx px$ 이므로:

$$
[x^2, p^2] = 2i\hbar(xp+px) \approx 4i\hbar\, xp = i\hbar\{x^2, p^2\}_\text{classical} \quad \checkmark
$$

대응 관계 $[\ ,\ ] \leftrightarrow i\hbar\{\ ,\ \}_\text{classical}$ 성립. ✅


---

## 1.33 — Infinitesimal translation 하에서의 $\langle \mathbf{x} \rangle$, $\langle \mathbf{p} \rangle$ 변환
![[Pasted image 20260408181539.png]]
> $\ket{\alpha} \to \mathcal{J}(d\mathbf{x}')\ket{\alpha}$ 일 때, $\langle \mathbf{x} \rangle \to \langle \mathbf{x} \rangle + d\mathbf{x}'$, $\langle \mathbf{p} \rangle \to \langle \mathbf{p} \rangle$ 임을 증명하라.

#### 핵심 개념

- **Translation operator**: $\mathcal{J}(d\mathbf{x}') = 1 - \frac{i}{\hbar}\mathbf{p}\cdot d\mathbf{x}'$
- **$\mathbf{p}$는 자기 자신과 commute**: $[\mathbf{p}, \mathbf{p}] = 0$

#### 접근법

변환된 기댓값: $\langle A \rangle' = \bra{\alpha}\mathcal{J}^\dagger A\, \mathcal{J}\ket{\alpha}$

**$\langle \mathbf{x} \rangle$ 변환**: Sakurai (1.227)에서 $\mathcal{J}^\dagger x_i \mathcal{J} = x_i + dx_i'$ 이므로:

$$
\langle \mathbf{x} \rangle' = \langle \mathbf{x} \rangle + d\mathbf{x}' \quad \checkmark
$$

**$\langle \mathbf{p} \rangle$ 변환**: $[\mathbf{p},\, \mathcal{J}] = \left[\mathbf{p},\, 1 - \frac{i}{\hbar}\mathbf{p}\cdot d\mathbf{x}'\right] = 0$ 이므로:

$$
\langle \mathbf{p} \rangle' = \langle \mathbf{p} \rangle \quad \checkmark
$$

> 공간을 infinitesimal하게 밀어도 운동량 기댓값은 변하지 않는다 — 직관적으로도 자연스러운 결과.

---

## 1.34 — Momentum boost operator $\mathcal{B}(dp')$

> $\mathcal{B}(dp')\ket{p'} = \ket{p'+dp'}$를 정의하고, $\mathcal{B}(dp') = 1 + i\mathbf{W}\cdot dp'$ 형태임을 보여라. $\mathbf{W}$를 차원 분석으로 결정하고, canonical commutation relation을 유도하라. Matrix element $\langle p'|\mathbf{x}|\alpha\rangle$를 $\langle p'|\alpha\rangle$의 $p'$에 대한 미분으로 표현하라.

#### 핵심 개념

- **Generator의 대칭성**: 위치 translation의 generator가 $\mathbf{p}$이듯, momentum translation의 generator는 $\mathbf{x}$
- 위치 공간과 운동량 공간은 **Fourier 쌍** → generator 역할이 대칭적으로 뒤바뀜
- 힘이 아니라 **위치 연산자 $\mathbf{x}$** 가 momentum boost의 generator임에 주의

#### Step 1: $\mathcal{B}$의 세 가지 성질 확인

$\mathcal{B}(dp') = 1 + i\mathbf{W}\cdot dp'$ ($\mathbf{W}$: Hermitian)일 때:

| 성질          | 조건                                                                | 결과                                     |
| ----------- | ----------------------------------------------------------------- | -------------------------------------- |
| Unitary     | $\mathcal{B}^\dagger\mathcal{B} = 1$                              | $\mathbf{W}$ Hermitian이면 $dp'$ 1차까지 성립 |
| Inverse     | $\mathcal{B}(-dp') = \mathcal{B}^{-1}(dp')$                       | $1 - i\mathbf{W}\cdot dp'$ 이 역원        |
| Associative | $\mathcal{B}(dp_1')\mathcal{B}(dp_2') = \mathcal{B}(dp_1'+dp_2')$ | 1차까지 성립                                |

#### Step 2: $\mathbf{W}$ 결정 — Generator는 $p$-representation의 미분 연산자

$\mathcal{J}$를 유도할 때와 **완전히 동일한 논리**를 $p$-representation에 적용한다.

위치 공간에서의 논리를 먼저 상기하면:
$$
\mathcal{J}(dx')\psi(x) = \psi(x - dx') \approx \psi(x) - dx'\frac{\partial \psi}{\partial x}
$$
즉 $\mathcal{J}(dx') = 1 - dx'\frac{\partial}{\partial x}$ 이고, $x$-representation에서 $\frac{\partial}{\partial x} = \frac{i}{\hbar}p$ 이므로 $p$가 generator.

운동량 공간에서도 동일하게: boost operator가 $p$-representation의 파동함수 $\phi(p) = \langle p | \alpha \rangle$에 작용하면
$$
\mathcal{B}(dp')\phi(p) = \phi(p - dp') \approx \phi(p) - dp'\frac{\partial \phi}{\partial p}
$$
즉 $\mathcal{B}(dp') = 1 - dp'\frac{\partial}{\partial p}$. 그런데 $p$-representation에서 미분 연산자의 정체는:
$$
\frac{\partial}{\partial p} = -\frac{i}{\hbar}x
$$
($x$-representation에서 $p \to -i\hbar\frac{\partial}{\partial x}$이면, Fourier 쌍인 $p$-representation에서는 $x \to i\hbar\frac{\partial}{\partial p}$)

따라서:
$$
\mathcal{B}(dp') = 1 - dp'\cdot\left(-\frac{i}{\hbar}x\right) = 1 + \frac{i}{\hbar}x\cdot dp'
$$
$$
\mathbf{W} = \frac{\mathbf{x}}{\hbar} \implies \boxed{\mathcal{B}(dp') = 1 + \frac{i}{\hbar}\mathbf{x}\cdot dp'}
$$

차원 분석이나 추가 가정 없이, **$p$-representation에서 미분 연산자라는 조건만으로 유일하게 결정**된다.

#### Step 3: Canonical commutation relation 유도

$\bra{x'}$를 $\mathcal{B}(dp')\ket{p'} = \ket{p'+dp'}$ 양변에 작용:

$$
\left(1 + \frac{i}{\hbar}x' dp'\right)\langle x'|p'\rangle = \langle x'|p'+dp'\rangle
$$

$\langle x'|p'\rangle = \frac{1}{\sqrt{2\pi\hbar}}e^{ip'x'/\hbar}$를 대입하면 양변이 일치 → $[x_i, p_j] = i\hbar\delta_{ij}$ 가 자연스럽게 도출됨. ✅

#### Step 4: Matrix element $\langle p'|\mathbf{x}|\alpha\rangle$ 유도

$\mathcal{B}^\dagger(dp')\ket{\alpha}$에 $\bra{p'}$를 취하면:

$$
\langle p'|\left(1 - \frac{i}{\hbar}\mathbf{x}\cdot dp'\right)|\alpha\rangle = \langle p'+dp'|\alpha\rangle
$$

우변을 Taylor 전개하고 $dp'$의 계수를 비교:

$$
\boxed{\langle p'|\mathbf{x}|\alpha\rangle = i\hbar\frac{\partial}{\partial p'}\langle p'|\alpha\rangle}
$$

> [!tip] Position-Momentum 대칭
> Position space에서 $\langle x'|p|\alpha\rangle = -i\hbar\frac{\partial}{\partial x'}\langle x'|\alpha\rangle$ 인 것의 **운동량 공간 버전**. 부호와 역할이 대칭적으로 뒤바뀐 완벽한 쌍.

