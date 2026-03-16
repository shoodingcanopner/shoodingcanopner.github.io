---
title: "Dirac Delta Function"
date: "2026-03-04"
subject: mathematics
tags:
  - study
  - concept
  - mathematical-physics
  - distribution-theory
class: study
---

# Dirac Delta Function

## Symbol Definitions

| Symbol | Meaning |
|--------|---------|
| $\delta(\mathbf{x})$ | 3차원 디랙 델타 함수 |
| $\delta^{(3)}(\mathbf{x})$ | 위와 동일, 3차원임을 강조 |
| $\mathbf{F}$ | 벡터장 |
| $r = \|\mathbf{x}\|$ | 원점으로부터의 거리 |
| $\hat{r}$ | 반경방향 단위 벡터 |
| $\phi(\mathbf{x})$ | Test function (충분히 매끄럽고 빠르게 감소) |
| $\langle T, \phi \rangle$ | 분포 $T$와 test function $\phi$의 쌍대 작용 |

## Overview

디랙 델타 함수는 고전적인 의미의 "함수"가 아니다. $\delta(x) = 0$ $(x \neq 0)$이고 $\int \delta(x) dx = 1$을 동시에 만족하는 함수는 르베그 측도론 의미에서 존재하지 않는다. 그러나 **분포(distribution)** 혹은 **일반화 함수(generalized function)** 의 틀 안에서는 엄밀하게 정의된다.

핵심 교훈: **미분 연산의 결과가 0으로 보이더라도, 그것이 진짜 0인지는 발산 정리 같은 전역적 검증을 통해서만 확인할 수 있다.**

---

## Case Study 1: 쿨롱 전기장의 발산 — 왜 직접 계산이 틀리는가

### 문제 설정

단위구 $S = \{\mathbf{x} : |\mathbf{x}| = 1\}$ 위에서 벡터장

$$
\mathbf{F}(\mathbf{x}) = \frac{\mathbf{x}}{r^3}
$$

의 면적분 $\int_S \mathbf{F} \cdot d\mathbf{S}$를 구하고, $\nabla \cdot \mathbf{F}$의 진짜 의미를 규명한다.

이 벡터장은 점전하 주변의 전기장(정확히는 $\mathbf{E} = \frac{q}{4\pi\epsilon_0} \frac{\mathbf{x}}{r^3}$)과 같은 구조다.

---

### Step 1: 면적분 직접 계산

단위구 위에서 $r = 1$, 바깥 법선 $\hat{n} = \hat{r} = \frac{\mathbf{x}}{r}$이므로:

$$
\mathbf{F} \cdot \hat{n} = \frac{\mathbf{x}}{r^3} \cdot \frac{\mathbf{x}}{r} = \frac{|\mathbf{x}|^2}{r^4} = \frac{r^2}{r^4} = \frac{1}{r^2}
$$

$$
\int_S \mathbf{F} \cdot d\mathbf{S} = \int_S \frac{1}{r^2} \, dS = \frac{1}{1^2} \cdot 4\pi(1)^2 = 4\pi
\tag{1}
$$

---

### Step 2: 구면 좌표계로 발산 직접 계산

구면 좌표계에서 $\mathbf{F} = \frac{1}{r^2}\hat{r}$이므로:

$$
\nabla \cdot \mathbf{F} = \frac{1}{r^2} \frac{\partial}{\partial r}\left(r^2 \cdot \frac{1}{r^2}\right) = \frac{1}{r^2} \frac{\partial}{\partial r}(1) = 0 \quad (r \neq 0)
\tag{2}
$$

**여기서 문제가 생긴다.** 만약 $\nabla \cdot \mathbf{F} = 0$ everywhere라면, 발산 정리에 의해:

$$
\int_S \mathbf{F} \cdot d\mathbf{S} = \int_V \nabla \cdot \mathbf{F} \, dV = 0
$$

이어야 하는데, Step 1에서 $4\pi$를 얻었다. **모순!**

결론: $\nabla \cdot \mathbf{F} = 0$이 $r \neq 0$에서는 맞지만, **원점에서 델타 함수적 기여가 숨어 있다.**

---

### Step 3: 분포론적 엄밀한 증명

임의의 test function $\phi(\mathbf{x})$에 대해 분포 $\nabla \cdot \mathbf{F}$의 작용을 정의한다:

$$
\langle \nabla \cdot \mathbf{F},\ \phi \rangle = -\langle \mathbf{F},\ \nabla \phi \rangle = -\int_{\mathbb{R}^3} \frac{\mathbf{x}}{r^3} \cdot \nabla\phi \, dV
\tag{3}
$$

적분 영역을 $r > \epsilon$과 $r \leq \epsilon$으로 분리하고 $\epsilon \to 0$ 극한을 취한다:

$$
= -\lim_{\epsilon \to 0} \int_{r > \epsilon} \frac{\mathbf{x}}{r^3} \cdot \nabla\phi \, dV
\tag{4}
$$

$r > \epsilon$ 영역에서 **부분적분** (발산 정리 적용):

$$
\int_{r > \epsilon} \frac{\mathbf{x}}{r^3} \cdot \nabla\phi \, dV = \int_{r > \epsilon} \nabla \cdot \left(\frac{\mathbf{x}}{r^3} \phi\right) dV - \int_{r > \epsilon} \left(\nabla \cdot \frac{\mathbf{x}}{r^3}\right) \phi \, dV
\tag{5}
$$

두 번째 항은 $r \neq 0$에서 $\nabla \cdot \mathbf{F} = 0$이므로 0. 첫 번째 항에 발산 정리를 적용하면 경계면 $r = \epsilon$ 위의 면적분이 나온다. $r = \epsilon$ 구에서 **안쪽** 법선 $\hat{n} = -\hat{r}$이므로:

$$
\oint_{r=\epsilon} \phi \, \frac{\mathbf{x}}{r^3} \cdot (-\hat{r}) \, dS = -\oint_{r=\epsilon} \phi \cdot \frac{1}{\epsilon^2} \, dS
\tag{6}
$$

$\epsilon \to 0$에서 $\phi$는 $\phi(\mathbf{0})$으로 수렴하고, 구면의 넓이는 $4\pi\epsilon^2$이므로:

$$
\lim_{\epsilon \to 0} \left(-\frac{1}{\epsilon^2}\right) \cdot \phi(\mathbf{0}) \cdot 4\pi\epsilon^2 = -4\pi\phi(\mathbf{0})
\tag{7}
$$

따라서 식 (3)에 대입하면:

$$
\langle \nabla \cdot \mathbf{F},\ \phi \rangle = -(-4\pi\phi(\mathbf{0})) = 4\pi\phi(\mathbf{0})
\tag{8}
$$

이는 정확히 $4\pi\delta^{(3)}(\mathbf{x})$의 작용과 같다. 따라서:

$$
\nabla \cdot \left(\frac{\mathbf{x}}{r^3}\right) = 4\pi\,\delta^{(3)}(\mathbf{x})
\tag{9}
$$

---

### Step 4: 벡터 포텐셜 존재 불가 증명

만약 $\mathbf{A}$가 존재하여 $\mathbf{F} = \nabla \times \mathbf{A}$이면:

$$
\nabla \cdot \mathbf{F} = \nabla \cdot (\nabla \times \mathbf{A}) = 0
$$

항등식에 의해 항상 성립해야 한다. 그러나 식 (9)에서 $\nabla \cdot \mathbf{F} = 4\pi\delta^{(3)}(\mathbf{x}) \neq 0$. **모순.** 따라서 벡터 포텐셜 $\mathbf{A}$는 존재하지 않는다.

---

## Key Points

- **디랙 델타는 고전적 함수가 아니다.** $r \neq 0$에서 발산이 0으로 계산되더라도, 원점의 특이점이 전역적 성질을 바꾼다.
- **발산 정리는 국소적 발산과 전역적 플럭스를 연결한다.** 두 값이 일치하지 않으면, 그 불일치의 원인이 "보이지 않는" 소스임을 폭로한다.
- **분포론(Distribution theory)** 은 이런 이상한 함수들을 test function과의 쌍대 작용으로 엄밀하게 정의한다.
- **물리적 의미:** $\mathbf{F} = \frac{\mathbf{x}}{r^3}$는 점전하의 전기장이고, $\nabla \cdot \mathbf{F} = 4\pi\delta^{(3)}(\mathbf{x})$는 점전하가 원점에 있다는 사실을 수학적으로 표현한다. 가우스 법칙 $\nabla \cdot \mathbf{E} = \rho/\epsilon_0$에서 $\rho = q\delta^{(3)}(\mathbf{x})$에 해당.

---

## Questions & Insights

- 왜 미분을 직접 계산하면 0이 나오는가? → 구면 좌표계의 발산 공식 자체가 $r = 0$에서 정의되지 않기 때문. 미분 연산은 국소적이어서 원점의 특이점을 "보지 못한다."
- 분포론의 핵심 아이디어: 함수 자체가 아니라 **함수가 적분에서 어떻게 작용하는가**로 정의한다.
- $\epsilon \to 0$ 극한에서 $\epsilon^2$이 정확히 상쇄되는 것이 핵심. 이는 3차원 공간의 구면 넓이가 $r^2$에 비례하기 때문.

---

## Related Concepts

- [[Poisson_Equation_for_Dirac_Delta_and_Point_Charge_Potential]]
- [[전기장과 자기장의 포텐셜]]
- [[Vector Identities in Electrodynamics]]
- [[맥스웰 방정식 외우기]]

## References

- Griffiths, *Introduction to Electrodynamics*, §1.5
- 전자기학 수업 문제 (2026-03-04)

## Notes from Claude

이 사례가 특별한 이유는 **수학적 모순을 통해 새로운 개념을 발견하는 과정**을 보여주기 때문이다. "발산을 계산했더니 0인데 면적분은 $4\pi$?" — 이 불일치가 디랙 델타 함수의 존재를 강제한다.

분포론은 이런 물리적 직관을 수학적으로 정당화한다. Test function $\phi$와의 쌍대 작용을 통해 $\delta^{(3)}$을 정의하면, $\epsilon \to 0$ 극한에서 $\frac{1}{\epsilon^2} \cdot 4\pi\epsilon^2 = 4\pi$라는 정확한 상쇄가 일어난다.

앞으로 이 노트에 디랙 델타의 다른 면모들 — 1차원 정의, 푸리에 변환 표현, 그린 함수와의 관계 등 — 을 추가해나갈 예정.
