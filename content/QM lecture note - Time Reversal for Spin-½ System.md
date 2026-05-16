---
title: "QM lecture note - Time Reversal for Spin-½ System"
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
[[QM lecture note - Rotation and Angular Momentum]]에서 Chapter 3의 Rotation과 Angular Momentum commutation relation을 복습했다.

# 오늘의 핵심

- Spin-½ system에서 time reversal operator: $\Theta = \eta e^{-i\pi S_y/\hbar}K$
- $\ket{\hat{n},+}$를 $z$축 기준 회전으로 표현하고, $\Theta$를 적용하여 $\Theta\ket{\hat{n},+} = \eta\ket{\hat{n},-}$임을 유도
- $\Theta = UK$ 구조에서 $U = \eta e^{-iS_y\pi/\hbar} = -i\eta\sigma_y$
- $\Theta\ket{z,+} = \eta\ket{z,-}$, $\Theta\ket{z,-} = -\eta\ket{z,+}$
- **Spin-½에서 $\Theta^2 = -\mathbb{1}$**: 시간 역전을 4번 해야 원래로 돌아오는 시스템
- Half-integer spin: $\Theta^2 = -\mathbb{1}$, integer spin: $\Theta^2 = \mathbb{1}$
- 일반적인 $j$에 대한 증명: $\Theta^2\ket{\alpha} = (-1)^{2j}\ket{\alpha}$

# 필기 내용

## 1. Spin-½ System의 Time Reversal

다시 Chapter 4로 돌아가자. Spin-½ system에서의 time reversal을 다룬다.

Spin-angular operator $S_x, S_y, S_z$에 대해:

$$
\vec{S}\cdot\hat{n}\ket{\hat{n},\pm} = \pm\frac{\hbar}{2}\ket{\hat{n},\pm}
$$

$\hat{n}$이 $x, y, z$ 축과 그림과 같은 각도를 가진다. 
![[Pasted image 20260513191311.png]]
$\hat{n}$은 $z$축 얹던 벡터를 $y$축 회전축으로 하여 $\beta$만큼 돌리고, $z$축 회전축으로 하여 $\alpha$만큼 돌린 결과이다.

따라서, $\ket{\hat{n},+}$을 이렇게 표현할 수 있다:

$$
\ket{\hat{n},+} = e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\ket{z,+}
$$

## 2. $\Theta\ket{\hat{n},+}$의 계산

이걸 시간 역전시켜보자. 이때, 각운동량과 마찬가지로 spin도 TR-odd임을 이용한다: $\Theta\vec{S}\Theta^{-1} = -\vec{S}$

$$
\Theta\ket{\hat{n},+} = \Theta\, e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\ket{z,+}
$$

$\Theta$는 antilinear이므로 $i \to -i$:

$$
= e^{+i(-S_z)\frac{\alpha}{\hbar}}\,e^{+i(-S_y)\frac{\beta}{\hbar}}\,\Theta\ket{z,+}
$$

$$
= e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\,\Theta\ket{z,+}
$$

> [!insight] 핵심 관찰
> $\ket{z,+} \to \ket{\hat{n},+}$과 $\Theta\ket{z,+} \to \Theta\ket{\hat{n},+}$은 **모두 같은 operator**로 변환되는 관계다.

이제 $\vec{S}\cdot\hat{n}$의 eigenket으로서 $\ket{\hat{n},+}$의 성질을 나타낸 식에 $\Theta$를 취해보자.

$$
\Theta\,\vec{S}\cdot\hat{n}\ket{\hat{n},+} = \frac{\hbar}{2}\,\Theta\ket{\hat{n},+}
$$

$$
\Theta\,\vec{S}\cdot\hat{n}\,\Theta^{-1}\,\Theta\ket{\hat{n},+} = \frac{\hbar}{2}\,\Theta\ket{\hat{n},+}
$$

$\Theta\vec{S}\Theta^{-1} = -\vec{S}$이므로:

$$
-\vec{S}\cdot\hat{n}\,\Theta\ket{\hat{n},+} = \frac{\hbar}{2}\,\Theta\ket{\hat{n},+}
$$

$$
\vec{S}\cdot\hat{n}\,\Theta\ket{\hat{n},+} = -\frac{\hbar}{2}\,\Theta\ket{\hat{n},+}
$$

$\Theta\ket{\hat{n},+}$은 operator $\vec{S}\cdot\hat{n}$에 대해 eigenvalue가 $-\frac{\hbar}{2}$인 eigenket이므로,
$|\eta|^2 = 1$인 스칼라 $\eta$에 대해:

$$
\Theta\ket{\hat{n},+} = \eta\ket{\hat{n},-}
$$

## 3. $U$의 결정

$\Theta\ket{\hat{n},+} = e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\,\Theta\ket{z,+}$에다가 위 성질을 적용:

$$
\Theta\ket{\hat{n},+} = \eta\, e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\ket{z,-}
$$

> [!question] 이게 무슨 논리지...
> $\eta\ket{\hat{n},-} = e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\ket{z,+}$라고 분석해야 하나나?
> 
> (필기 원문의 의문점)

원래 $\Theta = UK$라고 정의했었고, $\ket{z,+}$를 basis로 사용해 $K\ket{z,+} = \ket{z,+}$을 이용한다.

$$
\Theta\ket{z,+} = UK\ket{z,+} = U\ket{z,+} = \eta\ket{z,-} = \eta\, e^{-iS_y\frac{\pi}{\hbar}}\ket{z,+}
$$

이때, $e^{-i\phi S_y/\hbar} = \mathbb{1}\cos\left(\frac{\phi}{2}\right) - i\sigma_y\sin\left(\frac{\phi}{2}\right)$을 이용 (증명은 다음 수업에서):

$$
U\ket{z,+} = \eta\, e^{-iS_y\frac{\pi}{\hbar}}\ket{z,+} = -i\eta\sigma_y\ket{z,+}
$$

여기서 $-i\sigma_y = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$

$$
\therefore U = -i\eta\sigma_y \quad \text{for } \frac{1}{2}\text{-spinner}
$$

$$
\Theta = \eta\, e^{-i\pi S_y/\hbar}\,K = -i\eta\sigma_y K
$$

## 4. $\Theta$의 Basis Ket에 대한 작용

$$
\Theta\ket{z,+} = -\eta\, i\sigma_y K\ket{z,+} = -\eta\, i\sigma_y\ket{z,+} = \eta\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \eta\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \eta\ket{z,-}
$$

$$
\Theta\ket{z,-} = \eta\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \eta\begin{pmatrix} -1 \\ 0 \end{pmatrix} = -\eta\ket{z,+}
$$

> [!question] Time reversal에 의한 flip을 꼭 $S_y$로 정의할 필요가 있는가? $S_x$로도 가능하지 않은가?

## 5. 임의 방향의 Spinner에 $\Theta$ 적용

$$
\Theta(C_+\ket{+} + C_-\ket{-}) = C_+^*\,\Theta\ket{+} + C_-^*\,\Theta\ket{-} = \eta C_+^*\ket{-} - \eta C_-^*\ket{+}
$$

## 6. $\Theta^2 = -\mathbb{1}$ (Spin-½)

$$
\Theta^2(C_+\ket{+} + C_-\ket{-}) = \Theta\left[\eta C_+^*\ket{-} - \eta C_-^*\ket{+}\right]
$$

$$
= -\eta\eta^* C_+\ket{+} - \eta\eta^* C_-\ket{-} = -(C_+\ket{+} + C_-\ket{-})
$$

(여기서 $\eta\eta^* = |\eta|^2 = 1$을 사용)

$$
\boxed{\Theta^2 = -\mathbb{1} \quad \text{for } \frac{1}{2}\text{-spin system}}
$$

> [!tip] 핵심
> **시간 역전을 4번 해야 원래로 돌아오는 시스템!**

## 7. 일반적인 $j$에 대한 $\Theta^2$

$$
\Theta^2 = -\mathbb{1} \quad \text{for half-integer spin}
$$

$$
\Theta^2 = \mathbb{1} \quad \text{for integer spin (0-spin 포함)}
$$

더 일반적으로:

$$
\Theta^2\ket{j\text{-half-integer}} = -\ket{j\text{-half-integer}}
$$

$$
\Theta^2\ket{j\text{-integer}} = \ket{j\text{-integer}}
$$

### 증명

$\Theta = \eta\, e^{-i\pi J_y/\hbar}\,K$로 놓고, $\ket{\alpha} = \sum\ket{j,m}\braket{j,m|\alpha}$에 대해:

$$
\Theta^2\ket{\alpha} = \Theta\left(\Theta\sum\ket{j,m}\braket{j,m|\alpha}\right)
$$

$$
= \Theta\left(\eta\, e^{-i\pi J_y/\hbar}\sum\ket{j,m}\braket{j,m|\alpha}^*\right)
$$

$$
= \eta\, e^{-i\pi J_y/\hbar}\left(\eta^*\sum e^{i\pi J_y^*/\hbar}\ket{j,m}\braket{j,m|\alpha}\right)
$$

$$
= \sum e^{-i2\pi J_y/\hbar}\ket{j,m}\braket{j,m|\alpha}
$$

$$
\overset{!}{=} \sum(-1)^{2j}\ket{j,m}\braket{j,m|\alpha}
$$

마지막 식이 어떻게 유도되나, 증명의 흐름을 알아보면:

1. $[R(\hat{n}, 2\pi),\, J_i] = 0$ for $\forall\,\hat{n}$ and $J_i$
2. **Schur's lemma**: 모든 generator와 commute하는 operator는 $c\mathbb{1}$이다.

$$
e^{-i2\pi J_y/\hbar} = c\mathbb{1}
$$

3. 적절한 $c$를 찾아라. → $c = (-1)^{2j}$

# 궁금한 내용

- $\Theta^\dagger$를 정의할 수가 있나?? 없다면 왜 안 되는가? (이전 수업에서 이어진 질문)
- Time reversal에 의한 flip을 꼭 $S_y$로 정의할 필요가 있는가? $S_x$로도 가능하지 않은가?
- $\eta\ket{\hat{n},-} = e^{-iS_z\frac{\alpha}{\hbar}}\,e^{-iS_y\frac{\beta}{\hbar}}\ket{z,+}$라고 분석해야 한다? (필기의 논리 흐름 의문점)
- 마지막 증명에서 $e^{-i2\pi J_y/\hbar} = (-1)^{2j}\mathbb{1}$이 되는 구체적인 과정

# AI의 보충 설명



# 연관 학습 노트



# References

- Sakurai, *Modern Quantum Mechanics*, Chapter 4.4
- 강의 필기 (Week 11 - 1, p.4~6)

# 다음 강의

[[QM lecture note - Kramers' Degeneracy]]
# 원본 필기 이미지

![[QM_11thweek_1.pdf]]