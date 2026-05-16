---
title: "QM lecture note - Rotation and Angular Momentum"
date: "2026-05-13"
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
[[QM lecture note - Time Reversal Operator]]에서 Time reversal operator $\Theta$의 성질과 wave function에 대한 time reversal을 다뤘다.

# 오늘의 핵심

- Time reversal 이외에 다른 antiunitary symmetry가 있는가? → **없다!**
- Chapter 3으로 잠시 돌아가서 **Rotation**을 다룬다.
- Rotation은 서로 직교하는 방향에 대한 변환끼리 **commute하지 않는다** → **Non-Abelian**
- Infinitesimal rotation operator: $\mathcal{D}(\hat{n}, \epsilon) = \mathbb{1} - i\frac{1}{\hbar}\vec{J}\cdot\hat{n}\,\epsilon$
- Euclidean space에서 $[R_x(\epsilon), R_y(\epsilon)]$를 계산해 **angular momentum의 commutation relation** $[J_i, J_j] = i\hbar\epsilon_{ijk}J_k$를 유도
- **Consistency check**: Baker-Hausdorff formula로 $\langle J_x \rangle'$, $\langle J_y \rangle'$이 고전적인 벡터 변환과 동일함을 확인
- $\vec{J} = (J_x, J_y, J_z)$는 rotation에 대해 **vector operator**이다.

# 필기 내용

## 1. Antiunitary Symmetry에 대한 질문

> [!question] $\Theta^\dagger$를 정의할 수가 있나?? 없다면 왜 안 되는가?

Time reversal 이외에 다른 antiunitary symmetry가 있는가? → **없다!** 이것은 신기한 부분이다.

## 2. Rotation과 Angular Momentum의 정의

Chapter 3으로 잠시 돌아가자. Rotation이란 뭐고, 사용하는 unitary operator는 뭔가?

Position translation과 달리, rotation은 서로 직교하는 방향에 대한 변환끼리 commute하지 않는다 → **Non-Abelian**

**Infinitesimal rotation**: 아주 작은 각 $\epsilon$만큼 돌려보자.

$$
\mathcal{U}_\epsilon = \mathbb{1} - iG\epsilon
$$

$G$: generator of rotation = **angular momentum**

일반적인 angular momentum $\vec{J}$를 generator로 정의하여:

$$
\mathcal{D}(\hat{n}, \epsilon) = \mathbb{1} - i\frac{1}{\hbar}\vec{J}\cdot\hat{n}\,\epsilon
$$

$\mathcal{D}(\hat{n}, \epsilon)$은 $\hat{n}$을 회전축삼아서 $\epsilon$만큼 돌리는 general rotation operator이다.

**Finite rotation**: infinitesimal rotation을 여러 번 한다.

$$
\mathcal{D}(\hat{n}, \phi) = \lim_{N\to\infty}\left[\mathbb{1} - \frac{i}{\hbar}(\vec{J}\cdot\hat{n})\frac{\phi}{N}\right]^N = \exp\left(-i\frac{1}{\hbar}(\vec{J}\cdot\hat{n})\phi\right)
$$

## 3. Euclidean Space에서의 Rotation Matrix

유클리드 3차원 공간($E_3$)에서의 rotation $R$을 생각하자.

$$
R_3 = R_2 R_1 \quad \Longrightarrow \quad \mathcal{D}(R_3) = \mathcal{D}(R_2 R_1) = \mathcal{D}(R_2)\mathcal{D}(R_1)
$$

Rotation matrix및 rotation operator는 commute하지 않는다.

Infinitesimal rotation in Euclidean space:

$$
R_z(\epsilon) = \begin{pmatrix} \cos\epsilon & -\sin\epsilon & 0 \\ \sin\epsilon & \cos\epsilon & 0 \\ 0 & 0 & 1 \end{pmatrix} \simeq \begin{pmatrix} 1-\frac{\epsilon^2}{2} & -\epsilon & 0 \\ \epsilon & 1-\frac{\epsilon^2}{2} & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

$$
R_x(\epsilon) \simeq \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1-\frac{\epsilon^2}{2} & -\epsilon \\ 0 & \epsilon & 1-\frac{\epsilon^2}{2} \end{pmatrix}
$$

$$
R_y(\epsilon) \simeq \begin{pmatrix} 1-\frac{\epsilon^2}{2} & 0 & \epsilon \\ 0 & 1 & 0 \\ -\epsilon & 0 & 1-\frac{\epsilon^2}{2} \end{pmatrix}
$$

## 4. Commutation Relation의 유도

$[R_x(\epsilon), R_y(\epsilon)]$를 계산해 보자.

$$
R_x(\epsilon)R_y(\epsilon) = \begin{pmatrix} 1-\frac{\epsilon^2}{2} & 0 & \epsilon \\ \epsilon^2 & 1-\frac{\epsilon^2}{2} & -\epsilon \\ -\epsilon & \epsilon & 1-\epsilon^2 \end{pmatrix}
$$

$$
R_y(\epsilon)R_x(\epsilon) = \begin{pmatrix} 1-\frac{\epsilon^2}{2} & \epsilon^2 & \epsilon \\ 0 & 1-\frac{\epsilon^2}{2} & -\epsilon \\ -\epsilon & \epsilon & 1-\epsilon^2 \end{pmatrix}
$$

$$
R_x(\epsilon)R_y(\epsilon) - R_y(\epsilon)R_x(\epsilon) = \begin{pmatrix} 0 & -\epsilon^2 & 0 \\ \epsilon^2 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = R_z(\epsilon^2) - \mathbb{1}
$$

(3차 항 이상은 무시)

$$
\therefore [R_x(\epsilon), R_y(\epsilon)] = R_z(\epsilon^2) - \mathbb{1}
$$

$\mathcal{D}(x,\phi)$, $\mathcal{D}(y,\phi)$, $\mathcal{D}(z,\phi)$도 마찬가지의 관계식을 따라야 한다.

$$
\mathcal{D}(x,\phi) \simeq \mathbb{1} - i\frac{\phi}{\hbar}J_x - \frac{\phi^2}{2\hbar^2}J_x^2
$$

$$
[\mathcal{D}(x,\phi), \mathcal{D}(y,\phi)] = \left(\mathbb{1} - i\frac{\phi}{\hbar}J_x - \frac{\phi^2}{2\hbar^2}J_x^2\right)\left(\mathbb{1} - i\frac{\phi}{\hbar}J_y - \frac{\phi^2}{2\hbar^2}J_y^2\right) - \left(\mathbb{1} - i\frac{\phi}{\hbar}J_y - \frac{\phi^2}{2\hbar^2}J_y^2\right)\left(\mathbb{1} - i\frac{\phi}{\hbar}J_x - \frac{\phi^2}{2\hbar^2}J_x^2\right)
$$

$$
= \mathbb{1} - \frac{\phi^2}{\hbar^2}[J_x, J_y] - \mathbb{1} \simeq \mathcal{D}(z, \phi^2) - \mathbb{1} = -i\frac{\phi^2}{\hbar}J_z
$$

위 식에서 angular momentum operator의 **commutation relation**이 나온다.

$$
\boxed{[J_x, J_y] = i\hbar J_z}
$$

**General formula:**

$$
[J_i, J_j] = i\hbar\epsilon_{ijk}J_k
$$

Generator들이 commute하지 않는다 → **Non-Abelian**

> [!insight] 핵심 논리
> 유클리드 공간에서의 rotation matrix의 commutation relation이 quantum rotation operator에도 그대로 적용되어야 한다는 요구로부터 angular momentum의 commutation relation이 자연스럽게 유도된다.

## 5. Consistency Check: Finite Rotation

Expectation value가 고전적인 변환과 똑같이 변환되는가?

3차원 유클리드 공간의 일반적인 벡터 $\vec{V} = (V_x, V_y, V_z)^T$를 $z$축 회전축삼아 $\phi$만큼 돌리면:

$$
\vec{V}' = \begin{pmatrix} \cos\phi & -\sin\phi & 0 \\ \sin\phi & \cos\phi & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} V_x \\ V_y \\ V_z \end{pmatrix} = \begin{pmatrix} V_x\cos\phi - V_y\sin\phi \\ V_x\sin\phi + V_y\cos\phi \\ V_z \end{pmatrix}
$$

과연, $J_x, J_y, J_z$의 expectation value도 위 변환을 따를 것인가?
아래 식이 성립하는지 확인해야 한다. 
$$
\langle J_x \rangle' = \langle J_x \rangle\cos\phi - \langle J_y \rangle\sin\phi
$$

$$
\langle J_y \rangle' = \langle J_x \rangle\sin\phi + \langle J_y \rangle\cos\phi
$$

$$
\langle J_z \rangle' = \langle J_z \rangle
$$

### Baker-Hausdorff Formula를 이용한 유도

$$
\exp(i\lambda G)\,A\,\exp(-i\lambda G) = A + \frac{i\lambda}{1!}[G,A] + \frac{(i\lambda)^2}{2!}[G,[G,A]] + \frac{(i\lambda)^3}{3!}[G,[G,[G,A]]] + \cdots
$$

**$\langle J_x \rangle'$ 계산:**

$$
\langle J_x \rangle' = \langle \alpha' \vert\, J_x \,\vert \alpha' \rangle = \langle \alpha \vert\, \mathcal{D}_z^\dagger(\phi)\, J_x\, \mathcal{D}_z(\phi) \,\vert \alpha \rangle
$$

$$
= \langle \alpha \vert\, \exp\left(i\frac{\phi}{\hbar}J_z\right) J_x \exp\left(-i\frac{\phi}{\hbar}J_z\right) \,\vert \alpha \rangle
$$

Baker-Hausdorff formula를 적용하면:

$$
= \langle \alpha \vert\, J_x + i\frac{\phi}{\hbar}\underbrace{[J_z, J_x]}_{i\hbar J_y} + \frac{1}{2!}\left(i\frac{\phi}{\hbar}\right)^2\underbrace{[J_z,[J_z,J_x]]}_{-(i\hbar)^2 J_x} + \frac{1}{3!}\left(i\frac{\phi}{\hbar}\right)^3\underbrace{[J_z,[J_z,[J_z,J_x]]]}_{-(i\hbar)^3 J_y} + \cdots \,\vert \alpha \rangle
$$

$$
= \langle \alpha \vert\, J_x + (-\phi)J_y - \frac{(-\phi)^2}{2!}J_x - \frac{(-\phi)^3}{3!}J_y + \frac{(-\phi)^4}{4!}J_x + \frac{(-\phi)^5}{5!}J_y - \frac{(-\phi)^6}{6!}J_x + \cdots \,\vert \alpha \rangle
$$

$$
= \langle \alpha \vert\, J_x\cos\phi - J_y\sin\phi \,\vert \alpha \rangle
$$

$$
= \langle J_x \rangle\cos\phi - \langle J_y \rangle\sin\phi \quad \checkmark
$$

**$\langle J_y \rangle'$ 계산:**

$$
\langle J_y \rangle' = \langle \alpha \vert\, J_y + i\frac{\phi}{\hbar}\underbrace{[J_z, J_y]}_{-i\hbar J_x} + \frac{1}{2!}\left(i\frac{\phi}{\hbar}\right)^2\underbrace{[J_z,[J_z,J_y]]}_{-(i\hbar)^2 J_y} + \frac{1}{3!}\left(i\frac{\phi}{\hbar}\right)^3\underbrace{[J_z,[J_z,[J_z,J_y]]]}_{(-1)^3(i\hbar)^3 J_x} + \cdots \,\vert \alpha \rangle
$$

$$
= \langle \alpha \vert\, J_y + (-1)(-\phi)J_x + \frac{1}{2!}(-1)^2(-\phi)^2 J_y + \frac{1}{3!}(-1)^2(-\phi)^3 J_x + \cdots \,\vert \alpha \rangle
$$

$$
= \langle \alpha \vert\, J_y\cos\phi + J_x\sin\phi \,\vert \alpha \rangle
$$

$$
= \langle J_y \rangle\cos\phi + \langle J_x \rangle\sin\phi \quad \checkmark
$$

> [!tip] 결론
> 따라서 $\vec{J} = (J_x, J_y, J_z)$는 **벡터**다.
> Rotation에 대해 이와 같은 transformation property를 보이는 operator를 **vector operator**라고 부른다.

# 궁금한 내용

- $\Theta^\dagger$를 정의할 수가 있나?? 없다면 왜 안 되는가?

# AI의 보충 설명



# 연관 학습 노트



# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 3.1, 3.2
- 강의 필기 (Week 11 - 1, p.1~3)

# 다음 강의
[[QM lecture note - Time Reversal for Spin-½ System]]

# 원본 필기 이미지

![[QM_11thweek_1.pdf]]