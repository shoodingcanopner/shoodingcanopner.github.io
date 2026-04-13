---
title: Wedge Product and Area Preservation
date: "2026-04-10"
subject: "physics"
tags: [study, concept]
class: study
---

# Wedge Product and Area Preservation

## 핵심 개념 요약

위상공간(phase space)에서 면적 원소를 다룰 때는 **외적(wedge product) $\wedge$** 를 사용해야 한다. 일반적인 곱셈처럼 전개하면 안 된다.

---

## 왜 $dz \cdot dp$가 아니라 $dz \wedge dp$인가?

면적 원소 $dz\, dp$는 두 방향 벡터가 만드는 **평행사변형의 넓이**를 나타낸다. 이것은 스칼라 곱이 아니라 외적이다.

### Wedge Product의 반대칭성

$$
dz_0 \wedge dz_0 = 0
$$

$$
dp_0 \wedge dp_0 = 0
$$

$$
dp_0 \wedge dz_0 = -\, dz_0 \wedge dp_0
$$

이 반대칭성이 핵심이다. 같은 방향끼리의 외적은 0이 되므로, $(dz_0)^2$나 $(dp_0)^2$ 같은 항이 자동으로 소거된다.

---

## 야코비안과 면적 변환

좌표 변환 $(z_0, p_0) \to (z(t), p(t))$에서 면적 원소의 변환을 올바르게 계산하면:

$$
dz(t) = \frac{\partial z}{\partial z_0} dz_0 + \frac{\partial z}{\partial p_0} dp_0
$$

$$
dp(t) = \frac{\partial p}{\partial z_0} dz_0 + \frac{\partial p}{\partial p_0} dp_0
$$

이를 wedge product로 전개하면:

$$
dz(t) \wedge dp(t) = \left(\frac{\partial z}{\partial z_0}\frac{\partial p}{\partial p_0} - \frac{\partial z}{\partial p_0}\frac{\partial p}{\partial z_0}\right) dz_0 \wedge dp_0
$$

괄호 안의 양이 바로 **야코비안(Jacobian) $J$**:

$$
J = \det \begin{pmatrix} \dfrac{\partial z}{\partial z_0} & \dfrac{\partial z}{\partial p_0} \\[8pt] \dfrac{\partial p}{\partial z_0} & \dfrac{\partial p}{\partial p_0} \end{pmatrix}
$$

따라서:

$$
dz(t) \wedge dp(t) = J \cdot dz_0 \wedge dp_0
$$

**야코비안의 행렬식이 곧 좌표 변환 후 면적이 얼마나 바뀌는지를 알려준다.**

---

## 흔한 실수: 일반 곱셈으로 전개하기

$dz(t) \cdot dp(t)$를 일반 곱셈처럼 전개하면 $(dz_0)^2$, $(dp_0)^2$ 항이 생긴다. 이 항들은 면적 원소로서 아무런 의미가 없다. Wedge product의 반대칭성에 의해 이 항들은 반드시 0이 되어야 한다.

---

## 리우빌 정리와의 연결

해밀턴 역학에서 시간 진화는 **정준 변환(canonical transformation)**이다. 정준 변환의 야코비안은 항상 $J = 1$이다. 따라서:

$$
dz(t) \wedge dp(t) = dz_0 \wedge dp_0
$$

위상공간의 면적(부피)은 시간이 지나도 보존된다. 이것이 **리우빌 정리**다.

### 구체적 예시: 자유낙하

중력가속도 g, 자유낙하에서 시간 $t$ 후의 변환:

$$
z(t) = z_0 + \frac{p_0}{m}t - \frac{1}{2}gt^2, \quad p(t) = p_0 - mgt
$$

야코비안 계산:

$$
J = \det \begin{pmatrix} 1 & t/m \\ 0 & 1 \end{pmatrix} = 1
$$

$J=1$이므로 면적 보존. 초기 사각형($[-a,a]\times[-b,b]$, 넓이 $4ab$)이 시간 $t$ 후에 평행사변형으로 변형되지만 넓이는 여전히 $4ab$다.

---

## Related Concepts

- [[Liouville's Theorem]]
- [[Canonical Transformation and Symplectic Structure]]
- [[AM lecture note - Canonical transformation]]
- [[AM lecture note - Liouville theorem and Canonical transformation]]
- [[Basis transformation matrix - inner product and Jacobian equivalence]]
