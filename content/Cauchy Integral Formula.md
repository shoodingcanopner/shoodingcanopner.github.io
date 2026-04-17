---
title: Cauchy Integral Formula
date: "2026-04-17"
subject: physics
tags:
  - study
  - concept
  - complex-analysis
  - cauchy
class: study
---

# Cauchy Integral Formula

## 기호 범례

| 기호 | 의미 |
|------|------|
| $F(z)$ | single pole을 가진 복소함수 |
| $f(z)$ | 모든 $z$에 대해 analytic한 함수 |
| $z_0$ | single pole의 위치 |
| $C$ | $z_0$를 내부에 포함한 폐경로 |
| $C^0$ | pole을 우회하는 작은 원형 경로 (반지름 $\varepsilon$) |
| $C'$ | single pole을 피하는 적분 경로 전체 |
| $\ell_1, \ell_2$ | $C$와 $C^0$를 잇는 선분 경로 |
| $\varepsilon$ | $C^0$의 반지름 |

---

## Cauchy Integral Formula

어떤 복소함수 $F(z)$가 $z = z_0$에서 single pole을 가진다면, 이 지점에서 $F$는 analytic하지 않으므로, $z_0$를 내부에 포함한 폐경로의 선적분 값은 0이 아니다. 그럼 무슨 값일까?

모든 $z$에 대해 analytic한 함수 $f(z)$를 이용하여, $F(z)$를 다음과 같이 나타낼 수 있다.

$$
F(z) = \frac{f(z)}{z - z_0}
\tag{1}
$$

이제, $\oint_C \frac{f(z)}{z-z_0}\,dz$ 를 구하는 꼼수를 찾아보자.

---

요점은, $z = z_0$만 피하면 $F$는 analytic하므로, 폐경로의 적분값이 0이라는 점이다.

![[Pasted image 20260417170004.png]]

single pole을 피하는 적분 경로를 $C'$이라고 부르자. 그림과 같이, $C'$은 $C$와 $\ell_1$, $\ell_2$, $C^0$로 이루어져 있다.

$$
\oint_{C'} \frac{f(z)}{z-z_0}\,dz = \oint_{C} \frac{f(z)}{z-z_0}\,dz + \int_{\ell_1} \frac{f(z)}{z-z_0}\,dz + \oint_{C^0} \frac{f(z)}{z-z_0}\,dz + \int_{\ell_2} \frac{f(z)}{z-z_0}\,dz
\tag{2}
$$

이때, $\ell_1$과 $\ell_2$는 방향만 다른 동일한 경로이므로, 둘의 적분 결과는 서로 상쇄된다.

$$
\int_{\ell_1} \frac{f(z)}{z-z_0}\,dz = -\int_{\ell_2} \frac{f(z)}{z-z_0}\,dz
\tag{3}
$$

결국, $\oint_{C'} \frac{f(z)}{z-z_0}\,dz = 0$ 이라는 점에 의해,

$$
\oint_C \frac{f(z)}{z-z_0}\,dz = -\oint_{C^0} \frac{f(z)}{z-z_0}\,dz
\tag{4}
$$

---

아직 $C^0$가 무엇인지 가정하지 않았다. 이것을 적분하기 간편한 경로로 설정하여 값을 구하면 된다. 

단, 방향이 시계 방향이어야 한다는 점에 유의.
$C$가 반시계 방향의 경로라면, $C^0$는 그 반대 방향으로 돌아야 한다.
![[Pasted image 20260417170101.png]]
$C^0$를 $z = z_0$를 중심으로 두고, 반지름이 $\varepsilon$인 원형으로 둘 수 있다.

적분 경로 위 점이 $z$일 때, 이것은 반지름 $\varepsilon$와 원형 경로 위 각도 $\theta$로 나타낸다.

$$
z = z_0 + \varepsilon e^{i\theta}, \qquad dz = i\varepsilon e^{i\theta}\,d\theta
\tag{5}
$$

경로가 시계 방향이므로, $\theta$는 $\pi$에서 시작해 $-\pi$로 끝난다.

$\varepsilon \to 0$의 극한으로 보내어 적분을 계산하면,

$$
\lim_{\varepsilon\to 0}\oint_{C^0} \frac{f(z)}{z-z_0}\,dz = \lim_{\varepsilon\to 0}\int_{\pi}^{-\pi} \frac{f(z_0 + \varepsilon e^{i\theta})\,i\varepsilon e^{i\theta}}{(z_0 + \varepsilon e^{i\theta}) - z_0}\,d\theta
\tag{6}
$$

$$
= \lim_{\varepsilon\to 0}\,i\int_{\pi}^{-\pi} f(z_0 + \varepsilon e^{i\theta})\,d\theta
\tag{7}
$$

$$
= i\,f(z_0)\int_{\pi}^{-\pi} d\theta
\tag{8}
$$

$$
= -2\pi i\,f(z_0)
\tag{9}
$$

---

## 결론

$$
\oint_C \frac{f(z)}{z-z_0}\,dz = -\oint_{C^0} \frac{f(z)}{z-z_0}\,dz = 2\pi i\,f(z_0)
\tag{10}
$$

괄목할 점은, 내부에 single pole을 똑같이 포함하고만 있다면, 폐경로가 어떻게 생겼든 적분값이 같다는 것이다.

---

## 연관 학습 노트

- [[Green Function for Wave Equation]]
- [[ED lecture note - Complex Analysis]]
