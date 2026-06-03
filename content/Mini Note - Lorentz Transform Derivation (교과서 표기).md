---
title: Mini Note - Lorentz Transform Derivation (교과서 표기)
date: "2026-06-03"
subject: physics
tags:
  - study
  - mini_note
  - special_relativity
class: study_lecture
---

> [!info] 이 노트에 대해
> [[ED lecture note - Special Relativity and Lorentz Transform]] 에서 강의 필기는 $X_0 = ict$ 표기로 유도했다.
> 이 미니 노트는 **교과서 표준 표기 $X_0 = ct$** 를 사용한 유도를 따로 정리한 것이다.
> 두 유도의 구조는 같지만 허수 $i$의 유무 때문에 부호 배치가 달라진다.

---

# Lorentz Transform Derivation ($X_0 = ct$ 표기)

## 설정

$$
ct = X_0, \quad x = X_1
$$

- 멈춘 $K$-frame: $X_0$와 $X_1$ 사용
- $V$로 움직이는 $K'$-frame: $X_0'$와 $X_1'$ 사용

변환 관계식을 선형으로 가정:

$$
\begin{cases}
X_0' = a_{00} X_0 + a_{01} X_1 \\
X_1' = a_{10} X_0 + a_{11} X_1
\end{cases}
$$

---

## 조건 1. 빛의 경로 (광속 불변)

$$
c^2t^2 - x^2 = c^2t'^2 - x'^2 \implies X_0^2 - X_1^2 = X_0'^2 - X_1'^2
$$

우변을 전개하면:

$$
X_0'^2 - X_1'^2 = (a_{00}^2 - a_{10}^2)X_0^2 + (a_{01}^2 - a_{11}^2)X_1^2 + 2(a_{00}a_{01} - a_{10}a_{11})X_0 X_1
$$

따라서:

$$
\begin{cases}
a_{00}^2 - a_{10}^2 = 1 \\
a_{01}^2 - a_{11}^2 = -1 \quad \leftarrow \text{조심! } a_{01}^2 - a_{11}^2 = 1 \text{ 이라 쓰고 한참 헤맴.} \\
a_{00}a_{01} - a_{10}a_{11} = 0
\end{cases}
$$

---

## 조건 2. 원점의 좌표

$K'$의 원점은:
- $K$-frame에서: $X_0 = ct$, $X_1 = Vt$ → 등속 운동
- $K'$-frame에서: $X_1' = 0$ → 항상 원점에 정지

$$
0 = ctA_{10} + Vt\,a_{11} \implies a_{10} = -\frac{V}{c}a_{11} = -\beta a_{11}, \quad \beta \equiv \frac{V}{c}
$$

---

## 두 조건을 합쳐서 풀기

$a_{10} = -\beta a_{11}$을 조건 1에 대입:

$$
\begin{cases}
a_{00}^2 - \beta^2 a_{11}^2 = 1 \\
a_{01}^2 - a_{11}^2 = -1 \\
a_{00}a_{01} + \beta a_{11}^2 = 0
\end{cases}
$$

$a_{01} = k\,a_{00}$으로 놓고 대입:

$$
\begin{cases}
a_{00}^2 + k\beta\,a_{00}^2 = 1 \\
k^2 a_{00}^2 + \dfrac{k}{\beta}\,a_{00}^2 = -1
\end{cases}
\implies
\begin{cases}
a_{00}^2 = \dfrac{1}{1+k\beta} \\
a_{00}^2 = \dfrac{-\beta}{k(1+k\beta)}
\end{cases}
$$

두 식을 같다고 놓으면:

$$
\frac{1}{1+k\beta} = \frac{-\beta}{k(1+k\beta)} \implies k = -\beta
$$

$k = -\beta$를 대입하고, $a_{00} > 0$ 조건을 쓰면:

$$
a_{00}^2 = \frac{1}{1-\beta^2} \implies a_{00} = \gamma \equiv \frac{1}{\sqrt{1-\beta^2}}
$$

---

## 최종 결과

$$
\begin{cases}
a_{00} = \gamma \\
a_{01} = -\beta\gamma
\end{cases}
\qquad
\begin{cases}
a_{10} = -\beta\gamma \\
a_{11} = \gamma
\end{cases}
$$

$$
\begin{cases}
X_0' = \gamma X_0 - \beta\gamma X_1 \\
X_1' = -\beta\gamma X_0 + \gamma X_1
\end{cases}
$$

즉 $ct' = \gamma(ct - \beta x)$, $x' = \gamma(x - \beta ct) = \gamma(x - Vt)$.

---

## Boost $\zeta$와 행렬 표현

$\beta = \tanh\zeta$로 놓으면:

$$
\beta = \tanh\zeta, \quad \gamma = \cosh\zeta, \quad \beta\gamma = \sinh\zeta
$$

Lorentz 변환을 행렬로 쓰면:

$$
\begin{pmatrix} X_0' \\ X_1' \\ X_2' \\ X_3' \end{pmatrix}
=
\begin{pmatrix}
\cosh\zeta & -\sinh\zeta & 0 & 0 \\
-\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix} X_0 \\ X_1 \\ X_2 \\ X_3 \end{pmatrix}
$$

> [!tip] Glia의 보충 설명 — $ict$ 표기와의 비교
>
> | | $X_0 = ict$ (강의 필기) | $X_0 = ct$ (교과서, 이 노트) |
> |---|---|---|
> | 내적 보존 | $X_\alpha X_\alpha$ (Euclidean 형태) | $X_0^2 - \|\vec{X}\|^2$ (Minkowski 형태) |
> | $a_{01}$ | $-i\beta\gamma$ | $-\beta\gamma$ |
> | $a_{10}$ | $i\beta\gamma$ | $-\beta\gamma$ |
> | 행렬 | 복소수 회전처럼 보임 | 쌍곡 회전이 명시적 |
>
> $ict$ 표기는 Euclidean 내적 형태를 유지해서 회전 변환과의 유사성이 직관적이지만, 현대 물리에서는 $ct$ 표기 + Minkowski metric이 표준이다.

---

# 연관 노트

- [[ED lecture note - Special Relativity and Lorentz Transform]]
