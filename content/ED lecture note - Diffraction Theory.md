---
title: ED lecture note - Diffraction Theory
date: "2026-05-06"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Electrodynamics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Scattering and Diffraction]]

# 오늘의 핵심

- Kirchhoff approximation의 수학적 비일관성과 remedy (Dirichlet/Neumann B.C.)
- Infinite plane screen에서의 Green 함수 구성 (mirror image trick)
- Huygens-Fresnel 원리: 회절 무늬 = 구멍에서의 파동을 구면파로 적분
- Fresnel approximation: 관측점이 멀 때 → 2차 근사 → 푸리에 변환 구조
- Fraunhofer approximation: 더 멀어지면 → 회절 무늬 = 구멍 모양의 순수 푸리에 변환
- Babinet's principle: 두 complementary 장애물의 회절 무늬는 위상만 반대

# 필기 내용

## Kirchhoff Integral Formula (복습)

지난 시간 유도한 Kirchhoff integral formula:

$$
\Psi(\mathbf{x}) = \oint_S \left[ \Psi(\mathbf{x}') \hat{n} \cdot \nabla' G(\mathbf{x}, \mathbf{x}') - G(\mathbf{x}, \mathbf{x}') \hat{n} \cdot \nabla' \Psi(\mathbf{x}') \right] da'
\tag{Jackson 10.75}
$$

Far-field 근사 후:

$$
\Psi(\mathbf{x}) = -\frac{1}{4\pi} \int_{S_1} \frac{e^{ikR}}{R} \hat{n}' \cdot \left[ \nabla' \Psi + ik\left(1 + \frac{i}{kR}\right) \frac{\vec{R}}{R} \Psi(\mathbf{x}') \right] da'
\tag{Jackson 10.79}
$$

## Kirchhoff Approximation

Kirchhoff approximation은 두 가지 경계조건 가정으로 이루어진다.

**1st:** $S_1$에서 opening 제외하고 (그러니까, 스크린이 있는 위치에서) $\Psi = 0$, $\dfrac{\partial \Psi}{\partial n} = 0$

**2nd:** opening(aperture) 위에서의 $\Psi$, $\dfrac{\partial \Psi}{\partial n}$ 의 값은, 스크린이 없을 때 입사파(incident waves)의 값과 같다고 가정.

### 수학적 비일관성 (Mathematical Inconsistency)

만약 $\Psi = 0$이고 $\dfrac{\partial \Psi}{\partial n} = 0$ 이라면, 헬름홀츠 방정식과 라플라스 방정식의 해는 모든 곳에서 $\Psi = 0$이다.

→ **remedy** (왜 이렇게 remedy 하는 건지 모르겠다.)

### Remedy: Proper Choice of Green's Function

**① Dirichlet B.C.**

$$
G_D(\mathbf{x}, \mathbf{x}') = 0 \quad \text{for } \mathbf{x}' \text{ on } S
$$

> [!question] 이 boundary condition의 물리적 의미는?

> [!tip] Glia의 보충 설명 — Dirichlet B.C.의 물리적 의미와 remedy의 핵심
> 
> **물리적 의미:** $G_D = 0$ on $S$는 스크린 위에서 파동장이 완전히 0, 즉 스크린이 완전 흡수체처럼 행동한다는 가정이다. Mirror image trick으로 $G_D = \dfrac{1}{4\pi}\left(\dfrac{e^{ikR}}{R} - \dfrac{e^{ikR'}}{R'}\right)$을 구성하면, $z'=0$ 평면에서 $R=R'$이므로 두 항이 자동으로 상쇄되어 $G_D = 0$이 만족된다. 전자기학의 도체 평면 위 image charge 방법과 완전히 같은 논리다.
> 
> **remedy의 핵심:** 원래 Kirchhoff의 문제는 $\Psi$에 두 조건을 **동시에** 부과한다는 것이었다.
> $$\Psi = 0 \quad \text{and} \quad \frac{\partial \Psi}{\partial n} = 0 \quad \text{on } S$$
> 헬름홀츠 방정식에서 이 둘을 같은 경계에 동시에 주면 과결정(overdetermined)이 되어 해가 항등적으로 0이 된다.
> 
> Dirichlet Green 함수 trick은 그 중 **"스크린 위에서 0"이라는 조건을 $G$에 미리 흡수**시켜버리는 것이다. Green의 제2항등식
> $$\Psi(\mathbf{x}) = \oint_S \left[\Psi \frac{\partial G}{\partial n'} - G \frac{\partial \Psi}{\partial n'}\right] da'$$
> 에서 $G_D = 0$ on $S$를 대입하면 두 번째 항 $G_D \cdot \dfrac{\partial\Psi}{\partial n'}$이 **자동으로 소거**된다. $\Psi$에는 아무 B.C.도 강제로 부과하지 않아도 되고, $\dfrac{\partial\Psi}{\partial n'}$을 지정할 필요도 없어진다.
> 
> Neumann도 마찬가지로 $\dfrac{\partial G_N}{\partial n} = 0$ on $S$를 $G$에 부과하면, 이번엔 첫 번째 항 $\Psi \cdot \dfrac{\partial G_N}{\partial n'}$이 소멸하고 $\dfrac{\partial\Psi}{\partial n'}$만으로 해가 결정된다.
> 
> **한 줄 요약:** $\Psi$에 두 조건을 동시에 강요하는 대신, **한 조건을 $G$에 떠넘겨서** $\Psi$에 가해지는 부담을 반으로 줄이는 꼼수다.

$$
\Psi(\mathbf{x}) = \int_{S_1} \Psi(\mathbf{x}') \frac{\partial G_D}{\partial n'} da' \quad \text{and} \quad \Psi(\mathbf{x}) = 0 \text{ on } S_1 \text{ except for opening}
$$

**② Neumann B.C.**

$$
\frac{\partial G_N}{\partial n} = 0 \quad \text{for } \mathbf{x}' \text{ on } S
$$

$$
\Psi(\mathbf{x}) = -\int_{S_1} \frac{\partial \Psi}{\partial n'}(\mathbf{x}') G_N(\mathbf{x}') da' \quad \text{and} \quad \frac{\partial \Psi}{\partial n'} = 0 \text{ on } S_1 \text{ except for opening}
$$

---

## Infinite Plane Screen & Huygens-Fresnel Principle

스크린이 무한 평면일 때, Green 함수를 mirror image trick으로 구성한다.

$$
G_{D,N}(\mathbf{x}, \mathbf{x}') = \frac{1}{4\pi} \left( \frac{e^{ikR}}{R} \mp \frac{e^{ikR'}}{R'} \right)
$$

여기서:
$$
\vec{R} = \mathbf{x} - \mathbf{x}', \quad \vec{R}' = \mathbf{x} - \mathbf{x}''
$$

$\mathbf{x}''$: mirror image of $\mathbf{x}' = (x', y', -z')$

$$
R = |\vec{R}| = \left[ (x - x')^2 + (y - y')^2 + (z - z')^2 \right]^{1/2}
$$

$$
R' = |\vec{R}'| = \left[ (x - x')^2 + (y - y')^2 + (z + z')^2 \right]^{1/2}
$$

> [!question] 왜 이런 mirror image를 만들지? 적분 범위에서 $z' = 0$ 아닌가?

> [!tip] Glia의 보충 설명 — Mirror image trick의 목적
> 
> 맞다. 적분은 $z'=0$ 평면 위에서만 이루어진다. Mirror image point $\mathbf{x}'' = (x', y', -z')$는 **적분 변수가 아니라**, $G_D = 0$ on $S$라는 조건을 자동으로 만족시키기 위해 Green 함수를 **설계**하는 도구다.
> 
> 핵심 논리는 이렇다:
> 1. 우리에게 필요한 건 $z'=0$ 평면 위에서 $G_D = 0$인 Green 함수다.
> 2. 자유공간 Green 함수 $\dfrac{e^{ikR}}{4\pi R}$는 이 조건을 만족하지 않는다.
> 3. 그런데 $z'=0$에서 $R = R'$이 되도록 mirror point를 잡으면, $G_D = \dfrac{1}{4\pi}\left(\dfrac{e^{ikR}}{R} - \dfrac{e^{ikR'}}{R'}\right)$가 $z'=0$에서 **자동으로 0**이 된다.
> 
> 즉, mirror image는 **"$z'=0$ 평면 밖의 가상의 점"을 이용해서 경계조건을 교묘하게 구현하는 수학적 장치**다. 전자기학에서 도체 평면 위의 점전하를 다룰 때 도체 아래쪽에 image charge를 놓는 것과 완전히 같은 발상이다 — image charge도 실제 적분 영역(도체 위) 밖에 있지만, 경계조건을 만족시키기 위해 도입한다.

### $\nabla' G_{D,N}$ 계산 → 내가 시도해봄, 결국 틀렸음!!! 

편미분 관계:
$$
\frac{\partial}{\partial x'} R = -\frac{x'}{R}, \quad \frac{\partial}{\partial x'} = \frac{\partial R}{\partial x'} \frac{\partial}{\partial R} = -\frac{x'}{R} \frac{\partial}{\partial R}
$$
→ 여기서부터 잘못 되었군
$$
\frac{\partial}{\partial x'} = -\frac{x'}{R'} \frac{\partial}{\partial R'}, \quad \frac{\partial}{\partial y'} = -\frac{y'}{R'} \frac{\partial}{\partial R'}, \quad \frac{\partial}{\partial z'} = +\frac{z'}{R'} \frac{\partial}{\partial R'}
$$

($z'$ 항의 부호 주의: mirror image 때문에 $+$ 부호)

개별 항의 gradient:
$$
\nabla' \frac{e^{ikR}}{R} = -\frac{\mathbf{x}'}{R} \left( \frac{\partial}{\partial R} \frac{e^{ikR}}{R} \right) = \frac{\mathbf{x}'}{R} \left( \frac{1}{R} - ik \right) \frac{e^{ikR}}{R}
$$

$$
\nabla' \frac{e^{ikR'}}{R'} = -\frac{\mathbf{x}''}{R'} \left( \frac{\partial}{\partial R'} \frac{e^{ikR'}}{R'} \right) = \frac{\mathbf{x}''}{R'} \left( \frac{1}{R'} - ik \right) \frac{e^{ikR'}}{R'}
$$

따라서:
$$
\nabla' G_{D,N}(\mathbf{x}, \mathbf{x}') = \frac{1}{4\pi} \left[ \frac{\mathbf{x}'}{R} \left(\frac{1}{R} - ik\right) \frac{e^{ikR}}{R} \mp \frac{\mathbf{x}''}{R'} \left(\frac{1}{R'} - ik\right) \frac{e^{ikR'}}{R'} \right]
$$

$$
= \frac{k}{4\pi i} \left[ \frac{e^{ikR}}{R} \left(1 + \frac{i}{kR}\right) \frac{\mathbf{x}'}{R} \mp \frac{e^{ikR'}}{R'} \left(1 + \frac{i}{kR'}\right) \frac{\mathbf{x}''}{R'} \right]
$$

$$
= \frac{k}{4\pi i} \left[ \frac{e^{ikR}}{R} \left(1 + \frac{i}{kR}\right) \frac{\mathbf{x} - \vec{R}}{R} \mp \frac{e^{ikR'}}{R'} \left(1 + \frac{i}{kR'}\right) \frac{\mathbf{x} - \vec{R}'}{R'} \right]
$$

> [!question] $\nabla' G_{D,N}$ 구하는 건 내가 했는데, 뭘 잘못 풀었나? 어떻게 해야 아래 식이 나옴?

> [!tip] Glia의 보충 설명 — Jackson 10.85 유도: 내 풀이의 두 가지 오류
> 
> 핵심은 **$\nabla' G_{D,N}$ 전체를 구하려 했다는 것이 실수**다. 실제로 적분에 필요한 건 $z'=0$ 평면 위에서의 $\hat{n}' \cdot \nabla' G_D = \dfrac{\partial G_D}{\partial z'}\big|_{z'=0}$ 뿐이다.
> 
> **오류 1: $\nabla' R$의 방향**
> 
> $\vec{R} = \mathbf{x} - \mathbf{x}'$이므로:
> $$\nabla' R = -\frac{\vec{R}}{R} = -\hat{R}$$
> 따라서:
> $$\nabla' \frac{e^{ikR}}{R} = \left(\frac{1}{R} - ik\right)\frac{e^{ikR}}{R} \cdot (-\hat{R}) \cdot (-1) = \left(\frac{1}{R}-ik\right)\frac{e^{ikR}}{R}\hat{R}$$
> 여기서 $\hat{R} = \dfrac{\vec{R}}{R} = \dfrac{\mathbf{x}-\mathbf{x}'}{R}$이다. 내 풀이에서 $\dfrac{\mathbf{x}'}{R}$로 쓴 것은 틀렸다. $\mathbf{x}'$은 원점에서 source point까지의 벡터이고, $\hat{R}$은 source → observation point 방향이다.
> 
> **오류 2: $z'=0$에서 $\partial R / \partial z'$와 $\partial R' / \partial z'$의 부호**
> 
> 두 편미분을 각각 계산하면:
> $$\frac{\partial R}{\partial z'}\bigg|_{z'=0} = \frac{-(z-z')}{R}\bigg|_{z'=0} = \frac{-z}{R}$$
> $$\frac{\partial R'}{\partial z'}\bigg|_{z'=0} = \frac{+(z+z')}{R'}\bigg|_{z'=0} = \frac{+z}{R}$$
> 
> Mirror image 때문에 $R'$의 $z'$ 편미분은 **부호가 반대**가 된다. 그리고 $z'=0$에서 $R = R'$이다.
> 
> **올바른 계산:**
> 
> $$\hat{n}'\cdot\nabla' G_D\bigg|_{z'=0} = \frac{\partial G_D}{\partial z'}\bigg|_{z'=0}$$
> $$= \frac{1}{4\pi}\left[\left(\frac{1}{R}-ik\right)\frac{e^{ikR}}{R}\cdot\frac{-z}{R} - \left(\frac{1}{R}-ik\right)\frac{e^{ikR}}{R}\cdot\frac{+z}{R}\right]$$
> $$= \frac{1}{4\pi}\cdot(-2z)\cdot\left(\frac{1}{R}-ik\right)\frac{e^{ikR}}{R^2}$$
> $$= \frac{k}{2\pi i}\left(1+\frac{i}{kR}\right)\frac{e^{ikR}}{R}\cdot\frac{z}{R}$$
> 
> $z'=0$ 평면에서 $\dfrac{z}{R} = \dfrac{\hat{n}'\cdot\vec{R}}{R}$이므로, $\Psi = \int \Psi(\mathbf{x}') \dfrac{\partial G_D}{\partial n'} da'$에 대입하면 Jackson 10.85가 나온다.
> 
> **한 줄 요약:** $z'=0$에서 $R=R'$이지만 $\partial R/\partial z'$와 $\partial R'/\partial z'$의 **부호가 반대**라서 두 항이 더해져 2배가 되고, 이것이 Jackson 10.85의 $\dfrac{k}{2\pi i}$ (= $\dfrac{1}{4\pi}$의 2배 × $\dfrac{k}{i}$)의 유래다.

최종 결과 (Jackson 10.85):
$$
\Psi(\mathbf{x}) = \frac{k}{2\pi i} \int_{S_1} \frac{e^{ikR}}{R} \left(1 + \frac{i}{kR}\right) \frac{\hat{n}' \cdot \vec{R}}{R} \Psi(\mathbf{x}') \, da'
\tag{Jackson 10.85}
$$

Jackson 10.79와 비교하면: 피적분함수 $\hat{n}' \cdot \nabla' \Psi$ 항이 사라지고 나머지 항이 2배가 됨을 알 수 있다.

### Far-field 근사: Huygens-Fresnel Equation

$R$이 커진다면, $\left(1 + \dfrac{i}{kR}\right)$에서 $\dfrac{i}{kR}$를 무시 가능.

$\dfrac{k}{2\pi} = \lambda$ 임을 이용하고, $\mathbf{x} = P$이며 $\dfrac{\hat{n}' \cdot \vec{R}}{R} \approx \cos\theta$ 일 때:

$$
\Psi(P) = \frac{1}{i\lambda} \int_{S_1} \frac{e^{ikr}}{r} \Psi(P_0) \cos\theta \, da'
$$

**Huygens-Fresnel Equation:**

$$
\boxed{\Psi(P) = \frac{1}{i\lambda} \int_\Sigma \Psi(P_0) \frac{e^{ikr}}{r} \cos\theta \, da}
$$

여기서 $P_0$는 스크린에 뚫린 구멍들이다.

- $\dfrac{1}{i}$는 **phase delay**를 의미한다.

> [!question] 왜 구멍을 통과하면서 반의 반파장 느려지지?

> [!tip] Glia의 메모
> 물리적 직관이 존재하지 않는 문제에 가깝다. $\dfrac{1}{i}$는 Green 함수 유도 과정에서 수학적으로 자연스럽게 등장하는 결과이며, 이에 대한 깔끔한 물리적 설명은 없다.

또한:

$$
\Psi(P) = \int h(P, P_0) \Psi(P_0) \, da', \quad h(P, P_0) = \frac{1}{i\lambda} \frac{e^{ikr}}{r} \cos\theta
$$

$h(P, P_0)$는 black box (전달 함수 역할).

---

## Fresnel Approximation

$$
\cos\theta = \frac{z}{r}
$$

$$
\Psi(P) = \frac{1}{i\lambda} \int \Psi(P_0) \frac{e^{ikr}}{r} \cos\theta \, da
$$

aperture plane의 좌표를 $(\xi, \eta)$로 하면:

$$
\Psi(x, y) = \frac{z}{i\lambda} \iint \Psi(\xi, \eta) \frac{\exp(ikr)}{r^2} d\xi d\eta
$$

$$
r = \sqrt{z^2 + (x - \xi)^2 + (y - \eta)^2} = z\sqrt{1 + \left(\frac{x-\xi}{z}\right)^2 + \left(\frac{y-\eta}{z}\right)^2}
$$

**Fresnel approximation**: 구멍 크기에 비해 $z$가 클 때, $\varepsilon = \left(\dfrac{x-\xi}{z}\right)^2 + \left(\dfrac{y-\eta}{z}\right)^2$을 테일러 근사에 사용할 작은 수라 하면:

$$
\sqrt{1+\varepsilon} \approx 1 + \frac{1}{2}\varepsilon + O(\varepsilon^2)
$$

따라서:

$$
r \approx z\left[ 1 + \frac{1}{2}\left(\frac{x-\xi}{z}\right)^2 + \frac{1}{2}\left(\frac{y-\eta}{z}\right)^2 \right]
$$

이를 대입하면:

$$
\Psi(x, y) = \frac{e^{ikz}}{i\lambda z} \iint \Psi(\xi, \eta) \exp\left[ i\frac{k}{2z}\left\{ (x-\xi)^2 + (y-\eta)^2 \right\} \right] d\xi d\eta
$$

전개하면:

$$
\Psi(x, y) = \frac{e^{ikz}}{i\lambda z} \exp\left\{ i\frac{k}{2z}(x^2 + y^2) \right\} \iint \Psi(\xi, \eta) e^{i\frac{k}{2z}(\xi^2 + \eta^2)} \exp\left[ -i\frac{2\pi}{\lambda z}(x\xi + y\eta) \right] d\xi d\eta
$$

여기서 마지막 적분은 $(\xi, \eta) \to (x, y)$의 **Fourier transform**이다.

$$
\boxed{\Psi(x, y) \approx A \times \mathcal{F}\left\{ \Psi(\xi, \eta) \, e^{i\frac{k}{2z}(\xi^2 + \eta^2)} \right\}}
$$

where $A = \dfrac{e^{ikz}}{i\lambda z} \exp\left\{ i\dfrac{k}{2z}(x^2 + y^2) \right\}$

- $\Psi(\xi, \eta)$: aperture에서의 incident field
- $e^{i\frac{k}{2z}(\xi^2+\eta^2)}$: Gaussian distribution — 구멍 중심일수록, incident wave가 그대로 반영

---

## Fraunhofer Approximation

$$
z \gg k(\xi^2 + \eta^2)_{\max}
$$

또는 $\lambda z > D^2$ (여기서 $D$는 aperture size).

이 조건에서는 $\exp\left[\dfrac{ik}{2z}(\xi^2 + \eta^2)\right]$ 항을 무시할 수 있으므로:

$$
\Psi(P) = A \times \mathcal{F}\left\{ \Psi(P_0) \right\}
$$

즉, **회절 무늬는 스크린의 구멍 모양이 푸리에 변환된 것**!

> [!question] 상수를 푸리에 변환하면 디랙델타가 나온다. 이걸 지금 상황에 대입하면?

> [!tip] Glia의 메모
> Fraunhofer 조건은 $\lambda z > D^2$인데, $D \to \infty$ (aperture가 무한히 큼)이면 어떤 유한한 $z$에서도 이 조건이 성립하지 않는다. 즉 상수 aperture function은 애초에 Fraunhofer 근사의 적용 범위 밖이므로, $\mathcal{F}\{\text{const}\} \propto \delta(x)\delta(y)$라는 수학적 결과를 물리적으로 해석하려는 시도 자체가 문제일 수 있다.
>
> 참고로 올바른 물리는: 스크린 없음 → 평면파 직진 → 관측면 균일하게 밝음. $\delta$ 함수(한 점에 집중)와 정반대다.
>
> **단, 이 설명도 Glia가 확신하지 못한다. 추후 교수님께 확인 필요.**

---

## Babinet's Principle

두 **complementary** 장애물 $S_1$, $S_2$ (한쪽의 구멍이 다른 쪽의 막힌 부분)에 의한 회절 무늬는 같다. 대신 **위상(phase)이 반대**이다.

수학적으로, $S_a + S_a'$가 전체 평면을 덮으므로:

$$
\Psi(P) = \frac{1}{i\lambda} \int_{S_a} \Psi(P_0) \frac{e^{ikr}}{r} \cos\theta \, da + \frac{1}{i\lambda} \int_{S_{a'}} \Psi(P_{0'}) \frac{e^{ikr}}{r} \cos\theta \, da'
$$

$$
= \int_{S_a + S_{a'}} \cdots \, da = 0
$$

따라서:

$$
\frac{1}{i\lambda} \int_{S_a} \Psi(P_0) \frac{e^{ikr}}{r} \cos\theta \, da + \frac{1}{i\lambda} \int_{S_{a'}} \Psi(P_{0'}) \frac{e^{ikr}}{r} \cos\theta \, da' = 0
$$

→ 두 complementary 장애물의 회절 무늬는 amplitude가 같고 위상이 반대.

### Inverse Problem

이론상, 회절 무늬를 역푸리에 변환하면 장애물의 모양을 알 수 있으나,
측정할 수 있는 것은 **intensity** 뿐이고, **phase의 정보가 없어서 IFT가 불가하다.**
이 문제를 해결하기 위해 여러가지 꼼수를 쓴다. 
나는 작년 학부 정량생물학 강의에서 이 꼼수를 들었던 것 같다. 

# 궁금한 내용

1. Kirchhoff approximation의 수학적 비일관성을 어떻게 remedy 하는지 - 왜 Dirichlet/Neumann B.C.로 Green 함수를 선택하면 해결되나?
2. Infinite plane screen에서 mirror image $\mathbf{x}'' = (x', y', -z')$를 왜 만드는가? 적분 범위가 $z' = 0$인데 왜 $z' \neq 0$인 점을 mirror로 잡나?
3. Dirichlet B.C. $G_D(\mathbf{x}, \mathbf{x}') = 0$ for $\mathbf{x}'$ on $S$의 물리적 의미는?
4. Jackson 10.85가 어떻게 유도되는지 — $\nabla' G_{D,N}$ 계산 과정에서 뭔가 놓쳤다.
5. 왜 구멍을 통과하면서 반파장(phase delay $\frac{1}{i}$)이 생기는가?
6. 상수 aperture function을 푸리에 변환하면 디랙 델타가 나온다 — 이걸 Fraunhofer 회절에 대입하면 어떤 물리적 의미가 되는가?

# AI의 보충 설명


# 연관 학습 노트

- [[Green Function for Wave Equation]]

# References

Jackson Classical Electrodynamics, Chapter 10 (10.75, 10.79, 10.85)

# 다음 강의

[[ED lecture note - Circular Aperture Diffraction and Optical Theorem]]
# 필기 원본

![[ED_11thweek_1.pdf]]
