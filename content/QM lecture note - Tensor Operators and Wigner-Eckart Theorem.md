---
title: "QM lecture note - Tensor Operators and Wigner-Eckart Theorem"
date: "2026-05-31"
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
[[QM lecture note - Addition of Angular Momentum and CG Coefficients]]에서 CG coefficients의 정의, 4가지 규칙, recursion relation을 통한 계산법, spin-angular function을 다루었다.

# 오늘의 핵심

- **CG series와 Rotation matrix**: $\mathcal{D}^{(j_1)}_{m_1 m_1'} \mathcal{D}^{(j_2)}_{m_2 m_2'}$를 $\mathcal{D}^{(j)}_{mm'}$의 합으로 나타내는 공식
- **Spherical harmonics의 곱**: $Y_{l_1}^{m_1} Y_{l_2}^{m_2}$를 $Y_{l'}^{m'}$으로 전개하는 공식 — Wigner-Eckart theorem의 special case
- **Cartesian tensor의 분해**: rank-2 Cartesian tensor $T_{ij} = U_i V_j$는 $l = 0, 1, 2$에 해당하는 irreducible spherical tensor 성분으로 분해됨 (1+3+5=9)
- **Spherical tensor의 정의**: rotation 하에서 $\mathcal{D}^{(k)}$에 따라 변환하는 $(2k+1)$-성분 연산자 $T_q^{(k)}$
- **Commutation relation**: $[J_z, T_q^{(k)}] = \hbar q\, T_q^{(k)}$, $[J_\pm, T_q^{(k)}] = \hbar\sqrt{(k \mp q)(k \pm q + 1)}\, T_{q \pm 1}^{(k)}$
- **Product of tensors**: 두 spherical tensor의 product에 CG를 씌워 새 spherical tensor를 만드는 공식
- **Scalar product** ($k=0$): $T_0^{(0)} = \vec{X} \cdot \vec{Z}$, 이것이 tensor operator인 이유

# 필기 내용

## 1. CG Coefficients와 Rotation Matrix의 연결 (Section 3.8.4)

### CG Series

2개의 입자(혹은 orbit+spin)로 이루어진 시스템에서, 각각에 대한 rotation operator $\mathcal{D}^{(j_1)}(R)$과 $\mathcal{D}^{(j_2)}(R)$이 있다.

이것의 tensor product $\mathcal{D}^{(j_1)} \otimes \mathcal{D}^{(j_2)}$는 $\mathbf{J} = \mathbf{J}_1 \otimes \mathbf{J}_2$에 의해 generate된다. $j$가 서로 다른 상태끼리는 $\mathcal{D}^{(j_1)} \otimes \mathcal{D}^{(j_2)}$ 연산을 해도 섞이지 않는다 — 2-electron system에서 singlet과 triplet을 구분한 것처럼.

따라서 $\mathcal{D}^{(j_1)} \otimes \mathcal{D}^{(j_2)}$ matrix는 각각의 $j$ 값 ($|j_1 - j_2| \le j \le j_1 + j_2$)에 대한 회전을 나타내는 **block 대각 행렬**로 쪼개진다:
![[Pasted image 20260531133609.png]]


$$
\mathcal{D}^{(j_1)} \otimes \mathcal{D}^{(j_2)} = \mathcal{D}^{(j_1+j_2)} \oplus \mathcal{D}^{(j_1+j_2-1)} \oplus \cdots \oplus \mathcal{D}^{(|j_1-j_2|)}
$$

이를 group theory에서는 **Clebsch-Gordan series**라 부른다. 성분 표현으로 쓰면:

$$
\mathcal{D}^{(j_1)}_{m_1 m_1'}\, \mathcal{D}^{(j_2)}_{m_2 m_2'} = \sum_j \sum_m \sum_{m'} \braket{j_1 j_2;\, m_1 m_2 | j_1 j_2;\, jm} \braket{j_1 j_2;\, m_1' m_2' | j_1 j_2;\, jm'}\, \mathcal{D}^{(j)}_{mm'}
\tag{식★}
$$
![[Pasted image 20260531134100.png]]
> [!note] AI 답변 — (식★)의 유도
> 좌변은 basis를 바꿔 쓸 수 있다. $\ket{j_1 j_2;\, m_1 m_2}$를 CG를 이용해 $\ket{j_1 j_2;\, jm}$ basis로 전개하면:
>
> $$
> \braket{j_1 j_2;\, m_1' m_2' | \mathcal{D}(R) | j_1 j_2;\, m_1 m_2} = \braket{j_1 m_1' | \mathcal{D}^{(j_1)} | j_1 m_1}\braket{j_2 m_2' | \mathcal{D}^{(j_2)} | j_2 m_2} = \mathcal{D}^{(j_1)}_{m_1' m_1}\, \mathcal{D}^{(j_2)}_{m_2' m_2}
> $$
>
> 이것이 성립하는 이유는 $\mathcal{D}(R)$이 product state에 대해 각 공간에 독립적으로 작용하기 때문이다:
>
> $$
> \mathcal{D}(R)\ket{j_1 j_2;\, m_1 m_2} = (\mathcal{D}^{(j_1)}(R) \otimes \mathcal{D}^{(j_2)}(R))\ket{j_1 m_1}\otimes\ket{j_2 m_2}
> $$
>
> 이제 $\ket{j_1 j_2;\, m_1 m_2}$에 completeness relation (CG basis로)을 삽입하면 (식★)이 나온다.

### Spherical Harmonics의 곱에 적용

이전 강의에서 본 spherical harmonics와 rotation operator의 연결식:

$$
\mathcal{D}^{(l)}_{m0}(\alpha, \beta, \gamma=0) = \sqrt{\frac{4\pi}{2l+1}}\, Y_l^{m*}(\theta, \phi)\bigg|_{\theta=\beta,\, \phi=\alpha}
\tag{식●}
$$

(식★)에서 $j_1 \to l_1$, $j_2 \to l_2$, $m_1' \to 0$, $m_2' \to 0$, $j \to l'$, $m' \to 0$, $m \to m$으로 대입하면:

$$
\mathcal{D}^{(l_1)}_{m_1 0}\, \mathcal{D}^{(l_2)}_{m_2 0} = \sum_{l'}\sum_{m'} \braket{l_1 l_2;\, m_1 m_2 | l_1 l_2;\, l'm}\braket{l_1 l_2;\, 00 | l_1 l_2;\, l'0}\, \mathcal{D}^{(l')}_{m'0}
$$

여기에 (식●)을 대입해 complex conjugate를 취하면:

$$
Y_{l_1}^{m_1}(\theta, \phi)\, Y_{l_2}^{m_2}(\theta, \phi) = \frac{\sqrt{2l_1+1}\,\sqrt{2l_2+1}}{4\pi} \sum_{l'}\sum_{m'} \braket{l_1 l_2;\, m_1 m_2 | l_1 l_2;\, l'm}\braket{l_1 l_2;\, 00 | l_1 l_2;\, l'0}\sqrt{\frac{4\pi}{2l'+1}}\, Y_{l'}^{m'}(\theta, \phi)
$$

양변에 $Y_l^{m'*}(\theta, \phi)$를 곱한 뒤 입체각 적분 $\int d\Omega\, Y_l^{m'*} Y_{l'}^{m'} = \delta_{mm'}\delta_{ll'}$을 이용하면, summation에서 크로네커 델타를 만족하는 항만 살아남아:

$$
\boxed{\int d\Omega\, Y_l^{m*}\, Y_{l_1}^{m_1}\, Y_{l_2}^{m_2} = \sqrt{\frac{(2l_1+1)(2l_2+1)}{4\pi(2l+1)}}\,\braket{l_1 l_2;\, m_1 m_2 | l_1 l_2;\, l\, m}\braket{l_1 l_2;\, 00 | l_1 l_2;\, l\, 0}}
$$

이 결과는 **Wigner-Eckart theorem의 special case**라고 교수님이 언급하셨다. Spherical harmonics의 행렬원소가 CG coefficient 두 개의 곱으로 인수분해된다는 점이 핵심이다.

## 2. Tensor Operators (Section 3.11)

### Cartesian Tensor란?

우리가 알던 벡터는 **1-rank tensor**이다. 회전 성질:

$$
V_i \to V_i' = \mathcal{D}^\dagger(R)\, V_i\, \mathcal{D}(R) = \sum_j R_{ij}\, V_j
$$

infinitesimal rotation $\mathcal{D}(R) = 1 - \frac{i\varepsilon}{\hbar}\mathbf{J}\cdot\hat{n}$을 대입하면:

$$
V_i + \frac{\varepsilon}{i\hbar}[V_i, \mathbf{J}\cdot\hat{n}] = \sum_j R(\hat{n}, \varepsilon)_{ij}\, V_j
$$

이것으로부터 벡터의 commutation relation이 나온다:

$$
[V_i, J_j] = i\hbar\varepsilon_{ijk}\, V_k
$$

### Cartesian Tensor의 분해 — 예시: rank-2 tensor

2개의 벡터 $\mathbf{U}$, $\mathbf{V}$로 이루어진 **dyadic** $T = \mathbf{U} \otimes \mathbf{V}$, 즉 $T_{ij} = U_i V_j$는 rank-2 Cartesian tensor이다.

이 tensor는 **reducible**하다 — 회전에 대해 특성이 제각각인 성분으로 쪼갤 수 있다:

$$
U_i V_j = \underbrace{\frac{\mathbf{U}\cdot\mathbf{V}}{3}\,\delta_{ij}}_{\text{scalar part}} + \underbrace{\frac{U_i V_j - U_j V_i}{2}}_{\text{antisymmetric (vector) part}} + \underbrace{\left(\frac{U_i V_j + U_j V_i}{2} - \frac{\mathbf{U}\cdot\mathbf{V}}{3}\,\delta_{ij}\right)}_{\text{symmetric traceless part}}
$$

각 항의 독립 성분 수:
- $\frac{\mathbf{U}\cdot\mathbf{V}}{3}\,\delta_{ij}$: scalar, rotation invariant → **1개** (이것은 $l=0$)
- $\frac{U_i V_j - U_j V_i}{2} = \frac{1}{2}\varepsilon_{ijk}(\mathbf{U}\times\mathbf{V})_k$: 벡터의 rotation property를 가짐 → **3개** (이것은 $l=1$)
- symmetric traceless part: symmetric이고 trace가 0이므로 $6 - 1 = $ **5개** (이것은 $l=2$)

$$
9 = 1 + 3 + 5
$$

직관적으로: 1은 $l=0$, 3은 $l=1$, 5는 $l=2$에 의한 것. 이것이 Cartesian tensor와 spherical tensor(아래에서 정의)의 연결고리이다.

## 3. Spherical Tensor의 정의

### 벡터 V로부터 구성

$(\theta, \phi) = \hat{n}$ 방향의 벡터 $\mathbf{V}$를 대체하면, **spherical tensor of rank $k$**:

$$
T_q^{(k)} = Y_{l=k}^{m=q}(\mathbf{V})
$$

즉, spherical harmonics의 $\cos\theta = z/r$, $\sin\theta\, e^{\pm i\phi} = (x \pm iy)/r$ 등을 벡터 성분으로 바꾼다:

$$
\cos\theta = \frac{z}{r} = (\hat{n})_z = V_z, \qquad \sin\theta\, e^{\pm i\phi} = \frac{x \pm iy}{r} = V_x \pm iV_y
$$

구체적인 예:

$$
Y_1^0 = \sqrt{\frac{3}{4\pi}}\cos\theta = \sqrt{\frac{3}{4\pi}}\frac{z}{r} \quad\longrightarrow\quad T_0^{(1)} = \sqrt{\frac{3}{4\pi}}\, V_z
$$

$$
Y_1^{\pm 1} = \mp\sqrt{\frac{3}{4\pi}}\frac{x\pm iy}{\sqrt{2}\,r} \quad\longrightarrow\quad T_{\pm 1}^{(1)} = \sqrt{\frac{3}{4\pi}}\left(\mp\frac{V_x \pm iV_y}{\sqrt{2}}\right)
$$

$$
Y_2^{\pm 2} = \sqrt{\frac{15}{32\pi}}\frac{(x \pm iy)^2}{r^2} \quad\longrightarrow\quad T_{\pm 2}^{(2)} = \sqrt{\frac{15}{32\pi}}\,(V_x \pm iV_y)^2
$$

> [!note] AI 답변 — $T_q^{(k)}$는 어떻게 operator가 될 수 있는가?
> $Y_l^m(\theta, \phi)$는 원래 숫자값 함수인데, 이것을 operator로 만드는 트릭은 **인자를 벡터 연산자로 바꾸는 것**이다.
>
> 구체적으로, $Y_l^m$의 인자인 $\hat{n}$의 성분들 $(\sin\theta\cos\phi,\, \sin\theta\sin\phi,\, \cos\theta)$을 위치 연산자 $\hat{\mathbf{r}}$의 방향 성분 $(x/r,\, y/r,\, z/r)$으로 대체하면:
>
> $$
> \cos\theta \to \frac{\hat{z}}{r}, \qquad \sin\theta\, e^{\pm i\phi} \to \frac{\hat{x} \pm i\hat{y}}{r}
> $$
>
> 이렇게 하면 $Y_l^m$은 더 이상 숫자가 아니라 **위치 연산자의 함수**, 즉 operator가 된다.
>
> 더 일반적으로는 꼭 위치 연산자일 필요가 없다. **임의의 벡터 연산자** $\mathbf{V} = (V_x, V_y, V_z)$의 성분으로 $\hat{n}$을 대체하면 $T_q^{(k)} = Y_q^k(\mathbf{V})$가 operator가 된다. $Y_l^m$은 이 연산자들을 어떻게 조합할지를 알려주는 **레시피** 역할을 할 뿐이고, $T_q^{(k)}$가 operator인 근본적인 이유는 $\mathbf{V}$ 자체가 operator이기 때문이다.

### Spherical Tensor의 변환 규칙

Spherical harmonics가 rotation 하에서 어떻게 변환하는지를 복습하자.

$$
\mathcal{D}(R^{-1})\ket{lm} = \sum_{m'}\ket{lm'}\mathcal{D}^{(l)}_{m'm}(R^{-1})
$$

$\mathcal{D}(R)\ket{\hat{n}} = \ket{\hat{n}'}$을 이용하면:

$$
Y_l^m(\hat{n}') = \sum_{m'} Y_l^{m'}(\hat{n})\, \mathcal{D}^{(l)}_{m'm}(R^{-1})
$$

만약 $Y_l^m(\mathbf{V})$처럼 **벡터에 작용하는 연산자**가 이와 동일하게 변환된다면:

$$
\mathcal{D}^\dagger(R)\, T_q^{(k)}\, \mathcal{D}(R) = \sum_{q'=-k}^{k} \mathcal{D}^{(k)*}_{q'q}(R)\, T_{q'}^{(k)}
$$

> [!note] AI 답변 — "D로 샌드위치하는 것이 V에 작용하는 것"의 의미
> 필기에 "무슨 논리인지 모르겠다"고 적었다. 핵심 아이디어는 이것이다:
>
> 회전 $R$이 공간에 작용하면, 벡터 $\mathbf{V}$는 $\mathbf{V} \to R\mathbf{V}$로 바뀐다. 양자역학에서 이 변환은 상태 $\ket{\psi}$에 $\mathcal{D}(R)$을 곱하는 것으로 기술된다.
>
> 이때 연산자 $A$의 변환은 $A \to \mathcal{D}(R)\, A\, \mathcal{D}^\dagger(R)$이다 (능동적 변환). 그런데 $T_q^{(k)}$는 $\mathbf{V}$의 성분들로 만들어진 연산자이므로, $\mathbf{V} \to R\mathbf{V}$일 때 $T_q^{(k)} \to T_q^{(k)}(R\mathbf{V})$가 된다.
>
> 즉 $\mathcal{D}^\dagger(R)\, T_q^{(k)}(\mathbf{V})\, \mathcal{D}(R) = T_q^{(k)}(R^{-1}\mathbf{V})$처럼 $\mathcal{D}$로 샌드위치하는 것이 $\mathbf{V}$에 $R^{-1}$을 작용시키는 것과 같다는 뜻이다. 이것이 $Y_l^m(\hat{n}')$의 변환식과 정확히 같은 구조이다.

### 정의 (공식)

**$k$-rank spherical tensor** $T_q^{(k)}$는 $(2k+1)$ 성분으로 이루어지며:

$$
\mathcal{D}^\dagger(R)\, T_q^{(k)}\, \mathcal{D}(R) = \sum_{q'=-k}^{k} \mathcal{D}^{(k)*}_{qq'}(R)\, T_{q'}^{(k)}
$$

> [!note] AI 답변 — "켤레전치 동치에서 T는 실수라고 가정하는 것인가?"
> 아니다. 두 식이 동치인 이유는 $\mathcal{D}^{(k)}$가 **unitary** ($\mathcal{D}^\dagger = \mathcal{D}^{-1}$)이기 때문이다.
>
> $\mathcal{D}^\dagger T_q^{(k)} \mathcal{D} = \sum_{q'} \mathcal{D}^{(k)*}_{q'q} T_{q'}^{(k)}$의 양변에 $\mathcal{D}$를 왼쪽, $\mathcal{D}^\dagger$를 오른쪽에서 곱하면:
>
> $$
> \mathcal{D}(R)\, T_q^{(k)}\, \mathcal{D}^\dagger(R) = \sum_{q'} \mathcal{D}^{(k)}_{q'q}(R)\, T_{q'}^{(k)}
> $$
>
> 이것은 $T$가 실수라는 가정 없이, unitary 행렬의 역행렬이 켤레전치라는 사실만으로 나온다.

## 4. Commutation Relation으로 보는 Spherical Tensor

> [!note] AI 답변 — "T가 index가 2개인데 어느 부분이 tensor인가?"
> $T_q^{(k)}$에서 **위 첨자 $k$**는 tensor의 rank (즉 어떤 $\mathcal{D}^{(k)}$ representation에 따라 변환하는지)를, **아래 첨자 $q$**는 $-k \le q \le k$인 성분 index이다. 행렬 $\mathcal{D}^{(k)}$의 행렬 원소는 $(q, q')$ 두 개의 index를 가지지만, $T_q^{(k)}$ 자체는 연산자이므로 $q$ 하나만 성분 index로 갖는다. 마치 벡터 $V_i$가 $i$라는 index를 갖는 것과 같다.

Infinitesimal rotation $\mathcal{D}(R) = 1 - \frac{i\varepsilon}{\hbar}\mathbf{J}\cdot\hat{n}$을 정의식에 대입하면:

$$
\left(1 - \frac{i\varepsilon\mathbf{J}\cdot\hat{n}}{\hbar}\right) T_q^{(k)} \left(1 + \frac{i\varepsilon\mathbf{J}\cdot\hat{n}}{\hbar}\right) = \sum_{q'=-k}^{k}\left\{\delta_{qq'} - \frac{i\varepsilon}{\hbar}\braket{kq'|\mathbf{J}\cdot\hat{n}|kq}\right\} T_{q'}^{(k)}
$$

정리하면:

$$
[\mathbf{J}\cdot\hat{n},\, T_q^{(k)}] = \sum_{q'=-k}^{k}\braket{kq'|\mathbf{J}\cdot\hat{n}|kq}\, T_{q'}^{(k)}
\tag{식α}
$$

(식α)에 $\hat{n} = \hat{z}$를 대입:

$$
[J_z,\, T_q^{(k)}] = \sum_{q'}\braket{kq'|J_z|kq}\, T_{q'}^{(k)} = \sum_{q'} \hbar q\,\delta_{qq'}\, T_{q'}^{(k)}
$$

$$
\boxed{[J_z,\, T_q^{(k)}] = \hbar q\, T_q^{(k)}}
$$

(식α)에 $\hat{n} = \hat{x} \pm i\hat{y}$를 대입:

$$
\boxed{[J_\pm,\, T_q^{(k)}] = \hbar\sqrt{(k \mp q)(k \pm q + 1)}\, T_{q\pm 1}^{(k)}}
$$

> [!note] AI 답변 — "Rotation generator와의 commutation 결과가 eigenstate에 J generator를 취했을 때 나오는 형식과 비슷하다"
> 정확히 맞는 관찰이다. $[J_z, T_q^{(k)}] = \hbar q\, T_q^{(k)}$는 $J_z\ket{j, q} = \hbar q\ket{j, q}$와 같은 구조이고, $[J_\pm, T_q^{(k)}] \propto T_{q\pm 1}^{(k)}$도 $J_\pm\ket{j, m} \propto \ket{j, m\pm 1}$과 같은 구조이다.
>
> 이것은 우연이 아니다. Spherical tensor $T_q^{(k)}$는 마치 rank-$k$ angular momentum의 eigenstate $\ket{k, q}$처럼 **각운동량 대수에 대해 행동하는 연산자**로 정의되기 때문이다. $T_q^{(k)}$의 정체성은 **"$J$의 commutation relation을 지키는 연산자"** 인 것이다. 이것이 바로 spherical tensor의 본질적 정의이다.

> [!note] AI 답변 — "위의 모든 성질이 $[V_i, J_j] = i\hbar\varepsilon_{ijk}V_k$로 귀결된다는 맥락에서 V가 왜 나오는가?"
> $[V_i, J_j] = i\hbar\varepsilon_{ijk}V_k$는 rank-1 Cartesian tensor(= 벡터)에 대한 commutation relation이다. 이것은 위의 $[J_z, T_q^{(1)}] = \hbar q\, T_q^{(1)}$, $[J_\pm, T_q^{(1)}] = \hbar\sqrt{\cdots}\, T_{q\pm 1}^{(1)}$의 Cartesian 버전에 해당한다. 즉, 교수님은 "spherical tensor의 commutation relation이 일반화된 벡터 commutation relation"임을 말씀하신 것이다.

## 5. Tensor의 Product (Section 3.11.3)

두 개의 irreducible spherical tensor $X_{q_1}^{(k_1)}$, $Z_{q_2}^{(k_2)}$가 있을 때, CG coefficient를 이용해 새로운 rank-$k$ spherical tensor를 만들 수 있다:

$$
T_q^{(k)} = \sum_{q_1}\sum_{q_2} \braket{k_1 k_2;\, q_1 q_2 | k_1 k_2;\, kq}\, X_{q_1}^{(k_1)}\, Z_{q_2}^{(k_2)}
$$

이것이 spherical irreducible tensor of rank $k$임을 증명할 수 있다 (강의에서 증명 제시, 아래 참고).

### Spherical 성분 표기

벡터를 구성할 때 유용한 표기:

$$
U_{\pm 1} = \mp\frac{U_x \pm iU_y}{\sqrt{2}}, \qquad U_0 = U_z
$$

이를 이용하면 $T_{ij} = U_i V_j$를 spherical tensor components로 표현할 수 있다:

$$
T_0^{(0)} = -\frac{\mathbf{U}\cdot\mathbf{V}}{3} = \frac{1}{3}(U_{+1}V_{-1} + U_{-1}V_{+1} - U_0 V_0)
$$

$$
T_q^{(1)} = \frac{1}{i\sqrt{2}}(\mathbf{U}\times\mathbf{V})_q
$$

$$
T_{\pm 2}^{(2)} = U_{\pm 1} V_{\pm 1}
$$

$$
T_{\pm 1}^{(2)} = \frac{1}{\sqrt{2}}\left(U_{\pm 1}V_0 + U_0 V_{\pm 1}\right)
$$

$$
T_0^{(2)} = \frac{1}{\sqrt{6}}\left(U_{+1}V_{-1} + 2U_0 V_0 + U_{-1}V_{+1}\right)
$$

> [!note] AI 답변 — "전부다 스칼라 값인 거 같은데 왜 텐서라고 하는 건지 모르겠다"
> 아주 핵심적인 질문이다. $T_0^{(0)} = \mathbf{U}\cdot\mathbf{V}$처럼 숫자처럼 보이지만, 여기서 $\mathbf{U}$와 $\mathbf{V}$는 **양자 연산자**이다. 따라서 $T_q^{(k)}$도 각각 하나의 **연산자**이다. 
>
> tensor라고 부르는 이유는 이 연산자들의 집합 $\{T_q^{(k)}\}_{q=-k}^{k}$가 **rotation 하에서 특정 방식으로 변환되기 때문**이다. 회전 후의 $T_q^{(k)}$는 다른 성분 $T_{q'}^{(k)}$들의 linear combination이 되고, 그 계수가 정확히 $\mathcal{D}^{(k)}$의 행렬원소이다. 마치 벡터가 회전 하에서 성분들이 섞이는 것처럼, spherical tensor의 성분들도 서로 섞인다. 이 "회전 하에서의 변환 성질"이 tensor를 정의한다.
>
> $T_0^{(0)}$은 rotation invariant ($k=0$이므로 $\mathcal{D}^{(0)} = 1$), 즉 진짜 스칼라이다. 반면 $T_{\pm 1, 0}^{(1)}$은 rotation 하에서 서로 섞이는 벡터의 spherical 성분들이다.

### 예시: $Y_0^2$와 $T_0^{(2)}$ 비교

$$
Y_0^2 = \sqrt{\frac{5}{16\pi}}\frac{3z^2 - r^2}{r^2}
$$

$3z^2 - r^2 = 2z^2 - (x^2 + y^2) = 2z^2 + 2\left(-\frac{x+iy}{\sqrt{2}}\cdot\frac{x-iy}{\sqrt{2}}\right)$이므로, $\mathbf{U} = \mathbf{V} = \mathbf{r}$ 특수한 경우:

$$
3z^2 - r^2 = 2U_0 V_0 + U_{+1}V_{-1} + U_{-1}V_{+1}
$$

이것이 위의 $T_0^{(2)} \propto (U_{+1}V_{-1} + 2U_0 V_0 + U_{-1}V_{+1})$과 같다 (비례관계).

### Scalar Product ($k=0$, $q=0$)

특수하게 $k=0$, $q=0$인 경우를 보자. $q_1 + q_2 = 0$이고, $\braket{kk;\, q\, {-q}\,|\, 00} = \frac{(-1)^{k-q}}{\sqrt{2k+1}}$이므로:

$$
T_0^{(0)} = \sum_{q=-k}^{k} \frac{(-1)^{k-q}}{\sqrt{2k+1}}\, X_q^{(k)}\, Z_{-q}^{(k)} = \vec{X}^{(1)} \cdot \vec{Z}^{(1)} = \sum_{q=-1,0,1}(-1)^q\, X_q^{(1)}\, Z_{-q}^{(1)}
$$

이것은 두 벡터의 **내적**이다. 내적은 rank-0 (scalar) spherical tensor이다.

> [!note] AI 답변 — "$k_1 = k_2 = k$이어야 하는 이유"
> $k=0$, $q=0$인 scalar product는 $k_1 = k_2$인 경우에만 만들어질 수 있다. 이유는 CG coefficient $\braket{k_1 k_2;\, q_1 q_2 | 00}$이 $k_1 = k_2 = k$이고 $q_1 = -q_2$일 때만 non-zero이기 때문이다. 각운동량 덧셈에서 $j_1 + j_2 \ge 0$이 되려면 $j_1 = j_2$이어야 하는 것과 같은 논리이다.

## 6. Product Theorem 증명 (선택)

**Theorem**: $X_{q_1}^{(k_1)}$, $Z_{q_2}^{(k_2)}$가 irreducible spherical tensor이면:

$$
T_q^{(k)} = \sum_{q_1, q_2}\braket{k_1 k_2;\, q_1 q_2 | k_1 k_2;\, kq}\, X_{q_1}^{(k_1)}\, Z_{q_2}^{(k_2)}
$$

도 spherical irreducible tensor of rank $k$이다.

**Proof**: rotation 하에서 $\mathcal{D}^\dagger T_q^{(k)} \mathcal{D}$를 계산한다.

$$
\mathcal{D}^\dagger T_q^{(k)} \mathcal{D} = \sum_{q_1 q_2}\braket{k_1 k_2;\, q_1 q_2 | k_1 k_2;\, kq}\, \mathcal{D}^\dagger X_{q_1}^{(k_1)} \mathcal{D}\, \mathcal{D}^\dagger Z_{q_2}^{(k_2)} \mathcal{D}
$$

각각의 tensor 변환 규칙을 적용하면:

$$
= \sum_{q_1 q_2 q_1' q_2'}\braket{k_1 k_2;\, q_1 q_2 | k_1 k_2;\, kq}\, \mathcal{D}^{(k_1)}_{q_1' q_1}\, \mathcal{D}^{(k_2)}_{q_2' q_2}\, X_{q_1'}^{(k_1)}\, Z_{q_2'}^{(k_2)}
$$

CG series (식★)를 적용:

$$
\mathcal{D}^{(k_1)}_{q_1' q_1}\, \mathcal{D}^{(k_2)}_{q_2' q_2} = \sum_{k'' q'' q'}\braket{k_1 k_2;\, q_1' q_2' | k'' q'}\braket{k_1 k_2;\, q_1 q_2 | k'' q''}\, \mathcal{D}^{(k'')}_{q'q''}
$$

CG의 orthogonality에 의해 $\delta_{kk''}$, $\delta_{qq''}$가 나오고, 최종적으로:

$$
\mathcal{D}^\dagger T_q^{(k)} \mathcal{D} = \sum_{q'} T_{q'}^{(k)}\, \mathcal{D}^{(k)}_{q'q}
$$

따라서 $T_q^{(k)}$는 rank-$k$ spherical tensor이다. ✓

# 궁금한 내용

> [!question] Wigner-Eckart theorem은 정확히 무엇인가? 오늘 강의에서 "special case"라고 했는데 일반 theorem은 어떤 형태인가?

> [!question] Scalar product $T_0^{(0)} = \vec{X}\cdot\vec{Z}$가 왜 $(-1)^q$ 부호를 포함하는가? Cartesian inner product $\sum_i X_i Z_i$와의 관계는?

# 연관 학습 노트

- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]
- [[QM lecture note - Orbital Angular Momentum and Spherical Harmonics]]
- [[QM lecture note - Rotation and Angular Momentum]]

# 다음 강의

[[QM lecture note - Wigner-Eckart Theorem Proof and Applications]] — Wigner-Eckart theorem 증명, selection rules, scalar/vector 예제, Projection theorem

# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.8.4, 3.11

# 원본 필기 이미지

![[QM_14thweek_2.pdf]]
