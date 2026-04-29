---
title: ED lecture note - Electric Quadrupole Radiation
date: "2026-04-18"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Magnetic Dipole Radiation]]

# 오늘의 핵심

- Electric quadrupole radiation은 multipole expansion의 **1차 대칭 항**에서 나온다.
- Quadrupole moment tensor: $Q_{kl} = \int \rho(\mathbf{x}')\left[3x'_k x'_l - x'^2 \delta_{kl}\right] d^3x'$
- 복사 파워: $\frac{dP}{d\Omega} \propto k^6$ — dipole ($k^4$)과 다름!
- $\mathbf{Q}_k = Q_{kl}\,\hat{n}_l$라고 정의한다. 텐서를 축약 해서 벡터로 만든다. 
- $\mathbf{Q}(\hat{n})$을 이용한 compact한 표현으로 H-field가 결정된다.

# 필기 내용

## Symmetric Part: Electric Quadrupole의 기여

맨 처음에 버려 뒀던 $(\hat{n}\cdot\mathbf{x}')\mathbf{J}$의 **symmetric part**를 보자. 이것이 Electric quadrupole의 기여이다.

$$
\frac{1}{2}\int \left[(\hat{n}\cdot\mathbf{x}')\mathbf{J} + (\hat{n}\cdot\mathbf{J})\mathbf{x}'\right] d^3x'
$$

를 계산해 보자. Electric dipole에서 했던 것 같이, $\nabla\cdot\mathbf{J} = i\omega\rho$를 이용한다.

아래 풀이가 무슨 논리인지 지금은 모르겠다! 잘못 쓴 부분도 있을 수 있다!

$$
\partial_k(x'_i x'_j J_k) = \delta_{ik} x'_j J_k + \delta_{jk} x'_i J_k + x'_i x'_j \partial_k J_k
$$

$$
= x'_j J_i + x'_i J_j + x'_i x'_j (\nabla\cdot\mathbf{J})
$$

$$
= x'_j J_i + x'_i J_j + i\omega x'_i x'_j \rho
$$

$$
\therefore \quad \int d^3x'\,(x'_j J_i + x'_i J_j) = -i\omega \int d^3x'\, x'_i x'_j \rho(\mathbf{x}')
$$

여기까지는 인정! 그런데,

$$
\frac{1}{2}\int\left[(\hat{n}\cdot\mathbf{x}')\mathbf{J} + (\hat{n}\cdot\mathbf{J})\mathbf{x}'\right] d^3x' = -\frac{i\omega}{2}\int \mathbf{x}'(\mathbf{x}'\cdot\hat{n})\rho(\mathbf{x}')\, d^3x'
$$

> [!question] 이건 어찌 유도된 결과?
> 양변의 총 벡터가 $i$ index라 하고, $\hat{n}$을 이용해 $j$ index를 합했나?

## Jackson 9.38: Electric Quadrupole의 Vector Potential

이 적분을 식 9.30에 넣어 정리하면:

$$
\text{(Jackson 9.38)} \quad \mathbf{A}(\mathbf{x}) = -\frac{\mu_0 ck^2}{8\pi} \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right) \int \mathbf{x}'(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'
$$

## Far Zone에서의 H-field: ∇ → ikn̂

이제 $\nabla\times$ 연산 대신에 $ik\hat{n}\times$ 연산을 한다. 왜지? 일단 $\nabla = \hat{n}\frac{\partial}{\partial r}$인 건 알겠다. 그러면

$$
\frac{\partial}{\partial r} = ik \quad \text{라고 둔 것인가?} \quad \text{무슨 근거로?}
$$

$$
\text{(Jackson 9.39)} \quad
\begin{cases}
\mathbf{H} = ik\, \hat{n}\times\mathbf{A}/\mu_0 \\
\mathbf{E} = ikZ_0\, (\hat{n}\times\mathbf{A})\times\hat{n}/\mu_0
\end{cases}
$$

H-field가 이렇게 되는 건 쉽게 계산할 수 있다.

$$
\text{(Jackson 9.40)} \quad \mathbf{H} = -\frac{ick^3}{8\pi} \frac{e^{ikr}}{r} \int (\hat{n}\times\mathbf{x}')(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'
$$

이제 quadrupole moment tensor로 유도할 것이다. 이 내용 아주 중요할 것 같다! 왜냐면 교수님이 중요하다고 했으니까. 적분 항을 계산하자.

## Quadrupole Moment Tensor로의 변환

$$
\int (\hat{n}\times\mathbf{x}')(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x' = \hat{n}\times\left[\int \mathbf{x}'(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'\right]
$$

좌변의 $i$번째 성분을 Levi-Civita 기호로 쓰면:

$$
\left[\hat{n}\times\left\{\int \mathbf{x}'(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'\right\}\right]_i = \varepsilon_{ijk}\,\hat{n}_j \left[\int \mathbf{x}'(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'\right]_k
$$

여기서 $k$-index를 가지는 건 이것뿐이다:

$$
= \varepsilon_{ijk}\,\hat{n}_j \int x'_k (\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'
$$

$$
= \varepsilon_{ijk}\,\hat{n}_j \int x'_k\, \hat{n}_l\, x'_l\, \rho(\mathbf{x}')\, d^3x'
$$

$$
= \varepsilon_{ijk}\,\hat{n}_j\,\hat{n}_l \int x'_k\, x'_l\, \rho(\mathbf{x}')\, d^3x'
$$

$$
= \varepsilon_{ijk}\,\frac{1}{3}\,\hat{n}_j\,\hat{n}_l \int 3x'_k x'_l\, \rho(\mathbf{x}')\, d^3x'
$$

이게 quadrupole moment의 일부분이다.

## Quadrupole Moment Tensor 정의

$$
Q_{kl} = \int \rho(\mathbf{x}')\left[3x'_k x'_l - x'^2\,\delta_{kl}\right] d^3x'
$$

$k$와 $l$이 같으면 어찌 되나? 예시로 $Q_{xx}$를 보자:

$$
Q_{xx} = \int \rho(\mathbf{x}')\left[3x'^2_x - (x'^2_x + x'^2_y + x'^2_z)\right] d^3x'
$$

$$
= \int \rho(\mathbf{x}')\left[2x'^2_x - x'^2_y - x'^2_z\right] d^3x'
$$

## Quadrupole Moment Vector Q(n̂)

$\mathbf{Q}_k = Q_{kl}\,\hat{n}_l$라고 정의한다. 텐서를 축약 해서 벡터로 만든다. 지금까지 분던 식에 정의된 대입하면:

$$
\left[\hat{n}\times\left\{\int \mathbf{x}'(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'\right\}\right]_i
= \varepsilon_{ijk}\,\hat{n}_j \cdot \frac{1}{3}\,\hat{n}_l\, Q_{kl}
+ \varepsilon_{ijk}\,\hat{n}_j \cdot \frac{1}{3}\,\hat{n}_k \int x'^2\,\rho(\mathbf{x}')\, d^3x'
$$

두 번째 항에서 $\varepsilon_{ijk}\,\hat{n}_j\,\hat{n}_k$: $j$와 $k$에 대해 $\hat{n}_j\hat{n}_k$는 대칭인데 $\varepsilon_{ijk}$는 반대칭이므로 → **0이 된다!**

$$
= \varepsilon_{ijk}\,\hat{n}_j \cdot \frac{1}{3}\,Q_k
$$

$$
\therefore \quad \hat{n}\times\left\{\int \mathbf{x}'(\hat{n}\cdot\mathbf{x}')\rho(\mathbf{x}')\, d^3x'\right\} = \frac{1}{3}\,\hat{n}\times\mathbf{Q}
$$

다! 끝났다!

## 최종 결과: Jackson 9.44

$$
\text{(Jackson 9.44)} \quad \mathbf{H} = -\frac{ick^3}{24\pi} \frac{e^{ikr}}{r}\,\hat{n}\times\mathbf{Q}(\hat{n})
$$

$$
\frac{dP}{d\Omega} = \frac{1}{2}\left(\frac{-k^3}{24\pi}\right)^2 \cdot c^2 Z_0 \left|\left[\hat{n}\times\mathbf{Q}(\hat{n})\right]\times\hat{n}\right|^2
$$

$$
\frac{dP}{d\Omega} \propto k^6 \quad \text{임에 주목!} \quad \text{dipole과 다름!}
$$

# 궁금한 내용

> [!question] $\frac{\partial}{\partial r} = ik$ 근거?
> Far zone에서 $\nabla \to ik\hat{n}$를 쓸 때, $\frac{\partial}{\partial r} = ik$로 두는 근거는?
> $e^{ikr}/r$에서 $r \to \infty$ 극한에서 $\frac{\partial}{\partial r}(e^{ikr}/r) \approx ik \cdot e^{ikr}/r$이 되는 것인가?

> [!tip] Glia의 보충 설명
> Far zone에서 모든 장은 $\frac{e^{ikr}}{r}\times(\text{r에 무관한 것들})$ 꼴을 가진다. 이걸 실제로 미분하면:
>
> $$\frac{\partial}{\partial r}\frac{e^{ikr}}{r} = \frac{e^{ikr}}{r}\left(ik - \frac{1}{r}\right)$$
>
> Far zone ($r\to\infty$)에서는 $\frac{1}{r} \ll ik$이므로 $\frac{1}{r}$ 항이 죽고:
>
> $$\frac{\partial}{\partial r}\frac{e^{ikr}}{r} \approx ik\cdot\frac{e^{ikr}}{r}$$
>
> 즉 이건 근사나 치환이 아니라, **$e^{ikr}/r$ 꼴 함수에 실제로 미분을 적용했을 때 far zone에서 자연스럽게 나오는 결과**이다. $\nabla = \hat{n}\frac{\partial}{\partial r}$이므로 결국 $\nabla \approx ik\hat{n}$이 된다.

> [!question] Symmetric part 유도 마지막 단계
> $\frac{1}{2}\int\left[(\hat{n}\cdot\mathbf{x}')\mathbf{J} + (\hat{n}\cdot\mathbf{J})\mathbf{x}'\right] d^3x' = -\frac{i\omega}{2}\int \mathbf{x}'(\mathbf{x}'\cdot\hat{n})\rho(\mathbf{x}')\, d^3x'$
> 이 단계에서 $i$, $j$ index를 이용한 구체적인 유도 과정?

> [!tip] Glia의 보충 설명
> 좌변의 $i$번째 성분을 index로 쓰면:
>
> $$\left[\frac{1}{2}\int\left((\hat{n}\cdot\mathbf{x}')\mathbf{J} + (\hat{n}\cdot\mathbf{J})\mathbf{x}'\right)d^3x'\right]_i = \frac{1}{2}\int\left(\hat{n}_j x'_j J_i + \hat{n}_j J_j x'_i\right)d^3x' = \frac{1}{2}\hat{n}_j \int\left(x'_j J_i + J_j x'_i\right)d^3x'$$
>
> 여기에 필기에서 증명한 결과를 사용한다:
>
> $$\int\left(x'_j J_i + J_j x'_i\right)d^3x' = -i\omega\int x'_i x'_j \rho(\mathbf{x}')\,d^3x'$$
>
> 대입하면:
>
> $$= \frac{1}{2}\hat{n}_j \cdot \left(-i\omega\int x'_i x'_j \rho(\mathbf{x}')\,d^3x'\right) = -\frac{i\omega}{2}\int x'_i \underbrace{(x'_j \hat{n}_j)}_{=\,\mathbf{x}'\cdot\hat{n}} \rho(\mathbf{x}')\,d^3x'$$
>
> 벡터 표현으로 되돌리면:
>
> $$= \left[-\frac{i\omega}{2}\int \mathbf{x}'(\mathbf{x}'\cdot\hat{n})\rho(\mathbf{x}')\,d^3x'\right]_i$$
>
> 핵심 트릭: $\hat{n}$을 index $j$로 내려서 $\hat{n}_j$를 적분 밖으로 반고, 이미 증명된 $\int(x'_j J_i + J_j x'_i)$ 결과를 그대로 사용하면 자연스럽게 나온다. $x'_j \hat{n}_j = \mathbf{x}'\cdot\hat{n}$으로 묶이는 것이 마지막 포인트.

# AI의 보충 설명

# 연관 학습 노트

- [[ED lecture note - Magnetic Dipole Radiation]]
- [[ED lecture note - Electric Dipole Radiation]]
- [[ED lecture note - Radiating Systems]]

# References

Jackson, Classical Electrodynamics, Chapter 9 (식 9.30, 9.38, 9.39, 9.40, 9.44)

# 다음 강의

[[ED lecture note - Scattering and Diffraction]]

# 필기 원본

ED week 8-1 remaster (p.4–6)
