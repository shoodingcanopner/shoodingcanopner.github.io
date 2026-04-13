---
title: ED lecture note - Electric Dipole Radiation
date: "2026-04-08"
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

[[ED lecture note - Radiating Systems]]

# 오늘의 핵심

- Far zone에서 Electric Dipole의 벡터 포텐셜 유도 (Jackson 9.13)
- 연속 방정식으로 ∫J d³x′ → dipole moment p 연결
- H, E 완전 표현식 (Jackson 9.18) 및 Far zone dominant term
- 복사 파워 dP/dΩ

# 필기 내용

## Electric Dipole Field (Far zone)

**Electric dipole field**가 있을 때 Far zone에서

9.9 식에서 $n=0$인 term만 이용.
> 어라... n=1이 dipole term이어야 할 것 같은데? 아닌가 지금 전류 밀도를 보고 있어서 n=0인 게 dipole인가보다. Electric dipole이 oscillation하면 magnetic monopole.

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \frac{e^{ikr}}{r} \int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' \tag{Jackson 9.13}
$$

연속 방정식 $\nabla \cdot \mathbf{J} = -\dfrac{\partial \rho}{\partial t}$를 이용:

$$
\int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' = -\int \mathbf{x}' (\nabla' \cdot \mathbf{J}) \, d\mathbf{x}' = -i\omega \int \mathbf{x}' \rho(\mathbf{x}') \, d\mathbf{x}'
$$

> 부분 적분을 적용한 것 같다. 이런 스킬도 있구나.

$$
\mathbf{A}(\mathbf{x}) = -\frac{i\mu_0 \omega}{4\pi} \mathbf{p} \cdot \frac{e^{ikr}}{r}
$$

이렇게 임의의 전하밀도로부터 dipole moment를 구하는 방법을 찾았다.

$$
\mathbf{p} = \int \mathbf{x}' \rho(\mathbf{x}') \, d^3\mathbf{x}' \quad \leftarrow \text{electric dipole, 회전 관성 moment와 비슷한 정의}
$$

정성적으로 뜻을 이해하자면, 전체적인 전하 분포가 어느 방향으로 얼마나 치우쳐졌는가가 dipole moment이다. 전하가 원점을 중심으로 고르게 분포되어 있으면 dipole moment가 0이고, 한쪽 위치에 쏠려있으면 dipole moment가 커진다.

---

## H, E 구하기 (Electric Dipole)

$$
\mathbf{H} = \frac{1}{\mu} \nabla \times \mathbf{A} = \frac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \frac{e^{ikr}}{r} \left(1 - \frac{1}{ikr}\right)
$$

> → curl 연산할 때 stokes theorem 들어간 것. 자세한 유도를 공부할 필요가 있다.

$$
\mathbf{E} = \frac{ck^2}{4\pi} \frac{iZ_0}{k} \nabla \times \left\{(\hat{n} \times \mathbf{p}) \underbrace{\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)}_{g(r)}\right\}
$$

$$
g(r) \equiv \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)
$$

$$
\mathbf{E} = \frac{ck^2}{4\pi} \frac{iZ_0}{k} \nabla \times (\hat{n} \times \mathbf{p}\, g(r))
$$

$$
= \frac{ik}{4\pi\varepsilon_0} \left[(\mathbf{p}\, g(r) \cdot \nabla)\hat{n} - \mathbf{p}\, g(r)(\nabla \cdot \hat{n}) + \hat{n}(\nabla \cdot \mathbf{p}\, g(r)) - (\hat{n} \cdot \nabla g(r))\mathbf{p}\right]
$$

위의 식 맞는지 확인이 필요.

최종:

$$
\mathbf{E} = \frac{1}{4\pi\varepsilon_0} \left\{ k^2 (\hat{n} \times \mathbf{p}) \times \hat{n} \frac{e^{ikr}}{r} + \left[3\hat{n}(\hat{n} \cdot \mathbf{p}) - \mathbf{p}\right] \frac{e^{ikr}}{r}(1 - ikr) \right\} \tag{Jackson 9.18}
$$

**특징 정리:**
- $\mathbf{H}$는 $\hat{n}$과 직교. 빛의 특성과 같다.
- $\mathbf{E}$는 $\hat{n}$과 직교한 성분도 있고 평행한 성분도 있다.

제일 dominant한 term $\frac{1}{r} e^{ikr}$만 쓰면:

$$
\begin{cases}
\mathbf{H} = \dfrac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \dfrac{e^{ikr}}{r} \\[6pt]
\mathbf{E} = Z_0\, \mathbf{H} \times \hat{n}
\end{cases}
$$

> 이러면 E랑 p랑 평행하나나? → 그건 아닌 듯.

---
## 복사 파워 (Radiated Power)

아래 식은 각도에 따라서 편광된 빛의 세기가 달라지는 현상과 관련있다.

**Average power:**

$$
\left\langle \frac{dP}{d\Omega} \right\rangle = \frac{1}{2} \text{Re}\left[r^2 \hat{n} \cdot (\mathbf{E} \times \mathbf{H}^*)\right]
$$

$$
\frac{dP}{d\Omega} = \frac{k^4}{32\pi^2} \left(\frac{c}{\varepsilon_0}\right) |(\hat{n} \times \mathbf{p}) \times \hat{n}|^2
$$
# 궁금한 내용

1. $n=0$ term이 왜 electric dipole에 해당하는가? (J의 n=0 moment와 ρ의 dipole moment의 연결)
2. $\int \mathbf{J} \, d\mathbf{x}' = -i\omega \int \mathbf{x}' \rho \, d\mathbf{x}'$ 유도에서 부분적분 과정은?
3. $\mathbf{H} = \frac{1}{\mu}\nabla\times\mathbf{A}$로부터 최종 H 표현식 유도 (curl 상세 계산)
4. BAC-CAB 전개 결과 확인: $\nabla\times(\hat{n}\times\mathbf{p}\,g(r))$ 전개식이 맞는가?

# AI의 보충 설명

# 연관 학습 노트

[[ED lecture note - Radiating Systems]]
[[ED lecture note - Momentum Conservation and Stress Tensor]]

# References

Jackson Ch. 9 (9.13, 9.18)

# 다음 강의

Magnetic Dipole Radiation, Electric Quadrupole Radiation (보충 예정)
