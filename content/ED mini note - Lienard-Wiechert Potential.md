---
title: ED mini note - Lienard-Wiechert Potential
date: "2026-06-09"
subject: physics
tags:
  - study
  - concept
class: study
---

# Lienard-Wiechert Potential

> [!tip] Glia의 노트
> 이 노트는 강의 필기 없이 시험 준비를 위해 Glia가 작성한 학습 보충 노트입니다.
> Jackson Chapter 14 내용을 기반으로 합니다.

## 기호 정리

| Symbol                            | Meaning                          |     |      |
| --------------------------------- | -------------------------------- | --- | ---- |
| $\vec{x}$                         | 관찰자(field point) 위치              |     |      |
| $\vec{r}(t')$                     | retarded time $t'$에서 전하의 위치      |     |      |
| $\vec{R} = \vec{x} - \vec{r}(t')$ | retarded position에서 관찰자까지의 벡터    |     |      |
| $R =                              | \vec{x} - \vec{r}(t')            | $   | 그 거리 |
| $\hat{n} = \vec{R}/R$             | 그 방향 unit vector                 |     |      |
| $\vec{\beta} = \vec{v}/c$         | 전하의 속도 (단위: $c$)                 |     |      |
| $t'$                              | retarded time                    |     |      |
| $D$                               | $(1 - \hat{n}\cdot\vec{\beta})R$ |     |      |

---

## 0. 배경: 왜 Lienard-Wiechert인가?

Maxwell 방정식을 Lorentz gauge에서 풀면 retarded Green function을 이용한 일반해가 나온다:

$$
\varphi(\vec{x}, t) = \int dt' \frac{d^3x'}{|\vec{x}-\vec{x}'|} \rho(\vec{x}', t') \delta\!\left(t' + \frac{|\vec{x}-\vec{x}'|}{c} - t\right)
$$

$$
\vec{A}(\vec{x}, t) = \frac{1}{c}\int dt' \frac{d^3x'}{|\vec{x}-\vec{x}'|} \vec{J}(\vec{x}', t') \delta\!\left(t' + \frac{|\vec{x}-\vec{x}'|}{c} - t\right)
$$

$\delta$ 함수의 의미: **신호가 $\vec{x}'$에서 출발하여 관찰자 $\vec{x}$에 $t$에 도달하려면, 출발 시각이 $t' = t - |\vec{x}-\vec{x}'|/c$ 이어야 한다.**

점전하에 대해 $\rho = e\,\delta^3[\vec{x} - \vec{r}(t')]$, $\vec{J} = ec\vec{\beta}\,\delta^3[\vec{x} - \vec{r}(t')]$를 대입하면 Lienard-Wiechert potential이 나온다.

---

## 1. 문제 1: Lienard-Wiechert Potential 유도

$d^3x'$ 적분을 먼저 수행하면:

$$
\varphi(\vec{x}, t) = e\int dt' \frac{1}{|\vec{x}-\vec{r}(t')|} \delta\!\left(t' + \frac{|\vec{x}-\vec{r}(t')|}{c} - t\right)
$$

$\delta$ 함수의 인수 $f(t') \equiv t' + \frac{R(t')}{c} - t$를 분석한다. $\delta(f(t')) = \delta(t'-t'_0)/|f'(t'_0)|$이므로 $f'(t')$를 계산:

$$
f'(t') = 1 + \frac{1}{c}\frac{dR}{dt'} = 1 - \hat{n}\cdot\vec{\beta}
$$

여기서 $\frac{dR}{dt'} = -c\hat{n}\cdot\vec{\beta}$를 이용했다. 따라서:

$$
\boxed{\varphi(\vec{x}, t) = \left.\frac{e}{(1-\hat{n}\cdot\vec{\beta})R}\right|_{\text{retarded}}, \quad \vec{A}(\vec{x}, t) = \left.\frac{e\vec{\beta}}{(1-\hat{n}\cdot\vec{\beta})R}\right|_{\text{retarded}}}
$$

이것이 **Jackson (14.18) Lienard-Wiechert potential**이다.

> [!note] "retarded"의 의미
> 모든 양 ($\hat{n}$, $\vec{\beta}$, $R$)은 retarded time $t' = t - R/c$에서 평가되어야 한다.

---

## 2. 문제 2: Retarded time의 미분

Retarded time의 정의: $t' = t - R(t')/c$

**$\partial t'/\partial t$ 계산 (위치 $\vec{x}$ 고정):**

양변을 $t$로 미분하면:

$$
\frac{\partial t'}{\partial t} = 1 - \frac{1}{c}\frac{\partial R}{\partial t'}\frac{\partial t'}{\partial t} = 1 + \hat{n}\cdot\vec{\beta}\frac{\partial t'}{\partial t}
$$

$$
\boxed{\frac{\partial t'}{\partial t} = \frac{1}{1 - \hat{n}\cdot\vec{\beta}}}
$$

**$\nabla t'$ 계산 ($t$ 고정, $\vec{x}$ 변화):**

양변을 $\nabla$로 미분하면:

$$
\nabla t' = -\frac{1}{c}\nabla R = -\frac{1}{c}\left(\hat{n} - c\hat{n}\cdot\vec{\beta}\,\nabla t'\right)
$$

$$
\boxed{\nabla t' = -\frac{\hat{n}}{c(1 - \hat{n}\cdot\vec{\beta})}}
$$

---

## 3. 문제 3: E와 B 구하기

$D \equiv (1 - \hat{n}\cdot\vec{\beta})R$로 정의하면:

$$
\varphi = \frac{e}{D}, \quad \vec{A} = \frac{e\vec{\beta}}{D}
$$

문제에서 주어진 힌트의 $\partial D/\partial t$와 $\nabla D$는 위에서 구한 $\partial t'/\partial t$와 $\nabla t'$를 이용해 chain rule로 계산한다.

$$
\frac{\partial D}{\partial t} = \frac{\partial D}{\partial t'}\frac{\partial t'}{\partial t}, \quad \nabla D = \frac{\partial D}{\partial t'}\nabla t' + \frac{\partial D}{\partial \vec{x}}
$$

**E field:**

$$
\vec{E} = -\nabla\varphi - \frac{1}{c}\frac{\partial\vec{A}}{\partial t} = \frac{e}{D^2}\left(\nabla D + \frac{\vec{\beta}}{c}\frac{\partial D}{\partial t}\right) - \frac{ec\vec{\beta}}{D}\frac{\partial t'}{\partial t}
$$

이것이 문제에서 주어진 힌트 형태다. 모두 대입하면 최종적으로 Jackson (14.14):

$$
\vec{E} = e\left[\frac{(\hat{n}-\vec{\beta})(1-\beta^2)}{R^2(1-\hat{n}\cdot\vec{\beta})^3}\right]_{\text{ret}} + \frac{e}{c}\left[\frac{\hat{n}\times\left[(\hat{n}-\vec{\beta})\times\dot{\vec{\beta}}\right]}{R(1-\hat{n}\cdot\vec{\beta})^3}\right]_{\text{ret}}
$$

**B field:**

$$
\vec{B} = \left[\hat{n}\times\vec{E}\right]_{\text{ret}}
$$

---

## 물리적 해석

E field는 두 항으로 나뉜다:

**속도 항 (velocity field):** $\propto 1/R^2$, 가속도 없을 때도 존재. Coulomb field의 상대론적 일반화.

**가속도 항 (radiation field):** $\propto 1/R$, $\dot{\vec{\beta}} \neq 0$일 때만 존재. 이것이 실제 복사(radiation)를 만드는 항.

> [!tip] Glia의 보충
> velocity field는 전하와 함께 움직이는 "attached" field이고,
> radiation field는 전하에서 분리되어 propagate하는 field다.
> $R \to \infty$에서 $1/R^2$항은 사라지고 $1/R$항만 남는 것이 복사.

---
