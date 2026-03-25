---
title: Basis transformation matrix - inner product and Jacobian equivalence
date: "2026-03-24"
subject: mathematics
tags:
  - study
  - concept
class: study
---

# 기저 변환 행렬 — 내적 방식과 Jacobian 방식이 같은 이유

## 기호 정리

| 기호 | 의미 |
|------|------|
| $\vec{q}_i$ | 변환 이전의 기저 벡터 |
| $\vec{Q}_i$ | 변환 이후의 기저 벡터 |
| $\alpha_i$ | 이전 기저에서의 좌표 성분 |
| $\beta_i$ | 이후 기저에서의 좌표 성분 |

---

## 핵심 명제

선형 변환에서, 좌표 변환 행렬의 $(j, i)$ 성분은 내적과 Jacobian 두 방식으로 모두 표현된다:

$$
[M]_{ji} = \frac{\partial \beta_j}{\partial \alpha_i} = \vec{Q}_j \cdot \vec{q}_i
$$

---

## 증명 (passive transform 관점)

Passive transform의 관점에서, **벡터 자체는 고정**되어 있고 기저만 바뀐다. 벡터 $|r\rangle$을 두 기저로 전개하면:

$$
|r\rangle = \sum_i \alpha_i\, \vec{q}_i = \sum_j \beta_j\, \vec{Q}_j
$$

새 기저 $\{\vec{Q}_j\}$가 정규직교(orthonormal)하다고 가정하면, 완전성 관계를 이용해 이전 기저를 새 기저로 전개할 수 있다:

$$
\vec{q}_i = \sum_j (\vec{Q}_j \cdot \vec{q}_i)\, \vec{Q}_j
$$

이것이 성립함을 확인: 양변에 $\vec{Q}_s$를 내적하면,

$$
\vec{q}_i \cdot \vec{Q}_s = \sum_j (\vec{Q}_j \cdot \vec{q}_i)\, \vec{Q}_j \cdot \vec{Q}_s = \sum_j (\vec{Q}_j \cdot \vec{q}_i)\, \delta_{js} = \vec{Q}_s \cdot \vec{q}_i
$$

항등식이므로 성립. ✓

이제 원래 전개식에 대입하면:

$$
\sum_i \alpha_i\, \vec{q}_i = \sum_i \alpha_i \sum_j (\vec{Q}_j \cdot \vec{q}_i)\, \vec{Q}_j = \sum_j \left[\sum_i \alpha_i\, (\vec{Q}_j \cdot \vec{q}_i)\right] \vec{Q}_j
$$

$\sum_j \beta_j \vec{Q}_j$와 비교하면:

$$
\beta_j = \sum_i \alpha_i\, (\vec{Q}_j \cdot \vec{q}_i)
$$

이것이 선형 관계이므로, Jacobian을 계산하면:

$$
\frac{\partial \beta_j}{\partial \alpha_i} = \vec{Q}_j \cdot \vec{q}_i
$$

**내적 방식 = Jacobian 방식** $\blacksquare$

---

## 증명의 숨은 가정과 일반화

### 가정: 정규직교 기저

위 증명에서 $\vec{Q}_s \cdot \vec{Q}_k = \delta_{sk}$를 사용했다. 이것은 새 기저 $\{\vec{Q}_j\}$가 **정규직교**할 때만 성립한다.

새 기저가 정규직교가 아니면 완전성 관계

$$
\vec{q}_i = \sum_j (\vec{Q}_j \cdot \vec{q}_i)\, \vec{Q}_j
$$

가 일반적으로 **성립하지 않는다.** 이 경우 **쌍대 기저(dual basis)** $\{\vec{Q}^j\}$를 도입해야 한다. 쌍대 기저는 $\vec{Q}^j \cdot \vec{Q}_k = \delta^j_k$를 만족하도록 정의된다. 그러면 완전성 관계는:

$$
\vec{q}_i = \sum_j (\vec{Q}^j \cdot \vec{q}_i)\, \vec{Q}_j
$$

로 수정되고, 좌표 변환은:

$$
\beta_j = \sum_i \alpha_i\, (\vec{Q}^j \cdot \vec{q}_i), \qquad [M]_{ji} = \frac{\partial \beta_j}{\partial \alpha_i} = \vec{Q}^j \cdot \vec{q}_i
$$

정규직교 기저에서는 $\vec{Q}^j = \vec{Q}_j$이므로 원래 증명으로 돌아온다. 이 구분이 바로 텐서에서 **공변(covariant)/반변(contravariant)** 성분의 차이로 이어진다.

---

## 왜 선형 변환에서만 일치하는가?

내적 방식은 전역적(global)으로 정의된 **상수** 행렬을 준다. 이것은 변환이 선형일 때만 가능하다.

비선형 변환에서는 $\beta_j = f_j(\alpha_i)$가 비선형 함수이므로 $\frac{\partial \beta_j}{\partial \alpha_i}$는 각 점에서 달라진다 — Jacobian은 국소적(local) 선형 근사만을 준다. 이 경우 내적 방식으로 전역 변환 행렬을 정의할 수 없다.

해석역학의 canonical transformation $(q_i, p_i) \to (Q_i, P_i)$가 바로 이 경우다. 위상공간에는 내적 구조가 따로 정의되지 않으므로, 변환 행렬은 오직 Jacobian으로만 정의된다:

$$
[M]_{lk} = \frac{\partial X'_l}{\partial X_k}, \qquad \mathbb{X} = (q_1, \ldots, q_N, p_1, \ldots, p_N)^T
$$

그리고 이 $M$이 점마다 다를 수 있으므로, symplectic 조건 $M\mathbb{J}M^T = \mathbb{J}$는 **각 점에서 국소적으로** 성립해야 하는 조건이다.

| | 내적 방식 | Jacobian 방식 |
|---|---|---|
| 선형 변환 | ✅ 전역적으로 정의됨 | ✅ 일치 |
| 비선형 변환 | ❌ 적용 불가 | ✅ 국소적으로 정의 |

---

## 연관 학습 노트

- [[AM lecture note - Liouville theorem and Canonical transformation]]
