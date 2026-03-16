---
title: Vector Identities in Electrodynamics
date: "2026-02-18"
subject: physics
tags:
  - study
  - concept
class: study
---

# Vector Identities in Electrodynamics

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $\varepsilon_{ijk}$ | Levi-Civita symbol |
| $\delta_{ij}$ | Kronecker delta |
| $f, g$ | Scalar fields |
| $\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{F}$ | Vector fields |
| $\mathbf{r}$ | Position vector, $\|\mathbf{r}\| = r$ |

핵심 축약 공식:

$$
\varepsilon_{ijk}\varepsilon_{imn} = \delta_{jm}\delta_{kn} - \delta_{jn}\delta_{km}
\tag{*}
$$

모든 이중 curl, BAC-CAB 증명의 뿌리.

---

## Overview

전기역학에서 반복적으로 사용되는 벡터 미분 항등식들. 레비-치비타 기호와 아인슈타인 표기법으로 체계적으로 증명 가능하다. 특히 맥스웰 방정식에서 파동방정식 유도, 포텐셜 표현, 에너지·운동량 계산에 핵심적으로 등장한다.

---

## 1. 위상학적 항등식 (Topological Identities)

항상 성립하는 항등식. **포텐셜 도입의 근거.**

$$
\nabla \times (\nabla f) = 0
\tag{1}
$$

$$
\nabla \cdot (\nabla \times \mathbf{F}) = 0
\tag{2}
$$

**증명 (공통 논리):** $\varepsilon_{ijk}\partial_j\partial_k$에서 $\partial_j\partial_k$는 $j,k$에 대해 대칭, $\varepsilon_{ijk}$는 반대칭 → 축약 결과 0.

**전기역학 적용:**
- (1) → $\mathbf{B} = \nabla \times \mathbf{A}$이면 $\nabla\cdot\mathbf{B}=0$ 자동 성립
- (2) → $\mathbf{E} = -\nabla\phi$로 쓰면 $\nabla\times\mathbf{E}=0$ 자동 성립 (정전기)

---

## 2. BAC-CAB Rule

$$
\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = \mathbf{B}(\mathbf{A}\cdot\mathbf{C}) - \mathbf{C}(\mathbf{A}\cdot\mathbf{B})
\tag{3}
$$

**증명 (인덱스):**

$$
[\mathbf{A}\times(\mathbf{B}\times\mathbf{C})]_i = \varepsilon_{ijk}A_j(\varepsilon_{klm}B_l C_m)
$$

$$
= \varepsilon_{kij}\varepsilon_{klm} A_j B_l C_m = (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})A_j B_l C_m
$$

$$
= B_i(\mathbf{A}\cdot\mathbf{C}) - C_i(\mathbf{A}\cdot\mathbf{B}) \quad \checkmark
$$

---

## 3. 곱 규칙 (Product Rules)

$$
\nabla(fg) = f\nabla g + g\nabla f
\tag{4}
$$

$$
\nabla\cdot(f\mathbf{F}) = f(\nabla\cdot\mathbf{F}) + \mathbf{F}\cdot(\nabla f)
\tag{5}
$$

$$
\nabla\times(f\mathbf{F}) = f(\nabla\times\mathbf{F}) + (\nabla f)\times\mathbf{F}
\tag{6}
$$

$$
\nabla\cdot(\mathbf{A}\times\mathbf{B}) = \mathbf{B}\cdot(\nabla\times\mathbf{A}) - \mathbf{A}\cdot(\nabla\times\mathbf{B})
\tag{7}
$$

**증명 of (7) (인덱스):**

$$
\partial_i(\varepsilon_{ijk}A_j B_k) = \varepsilon_{ijk}(\partial_i A_j)B_k + \varepsilon_{ijk}A_j(\partial_i B_k)
$$

$$
= \mathbf{B}\cdot(\nabla\times\mathbf{A}) - \mathbf{A}\cdot(\nabla\times\mathbf{B}) \quad\checkmark
$$

**전기역학 적용:** 포인팅 벡터 $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E}\times\mathbf{B}$의 발산 계산에 (7) 직접 사용 → 포인팅 정리, 에너지 보존.

---

## 4. 이중 Curl

$$
\nabla\times(\nabla\times\mathbf{F}) = \nabla(\nabla\cdot\mathbf{F}) - \nabla^2\mathbf{F}
\tag{8}
$$

**증명 (인덱스):**

$$
[\nabla\times(\nabla\times\mathbf{F})]_l = \varepsilon_{lmi}\varepsilon_{ijk}\partial_m\partial_j F_k
$$

$$
= (\delta_{lj}\delta_{mk} - \delta_{lk}\delta_{mj})\partial_m\partial_j F_k
$$

$$
= \partial_j\partial_l F_j - \partial_j\partial_j F_l = \partial_l(\nabla\cdot\mathbf{F}) - \nabla^2 F_l \quad\checkmark
$$

**전기역학 적용:** 진공 맥스웰 ($\nabla\cdot\mathbf{E}=0$)에서

$$
\nabla\times(\nabla\times\mathbf{E}) = -\nabla^2\mathbf{E}
$$

→ 파동방정식 $\nabla^2\mathbf{E} = \mu_0\varepsilon_0\ddot{\mathbf{E}}$ 유도.

---

## 5. 외적의 Curl

$$
\nabla\times(\mathbf{A}\times\mathbf{B}) = \mathbf{A}(\nabla\cdot\mathbf{B}) + (\mathbf{B}\cdot\nabla)\mathbf{A} - \mathbf{B}(\nabla\cdot\mathbf{A}) - (\mathbf{A}\cdot\nabla)\mathbf{B}
\tag{9}
$$

**증명 (인덱스):**

$$
[\nabla\times(\mathbf{A}\times\mathbf{B})]_l = \varepsilon_{lmi}\varepsilon_{ijk}\partial_m(A_j B_k)
$$

$$
= (\delta_{lj}\delta_{mk} - \delta_{lk}\delta_{mj})\partial_m(A_j B_k)
$$

$$
= \partial_k(A_l B_k) - \partial_j(A_j B_l)
$$

$$
= A_l(\nabla\cdot\mathbf{B}) + (\mathbf{B}\cdot\nabla)A_l - B_l(\nabla\cdot\mathbf{A}) - (\mathbf{A}\cdot\nabla)B_l \quad\checkmark
$$

---

## 6. 위치벡터 항등식

$$
\nabla\cdot\mathbf{r} = 3, \qquad \nabla\times\mathbf{r} = 0
\tag{10}
$$

$$
\nabla r = \hat{r}, \qquad \nabla\left(\frac{1}{r}\right) = -\frac{\hat{r}}{r^2}
\tag{11}
$$

$$
\nabla^2\left(\frac{1}{r}\right) = -4\pi\delta^3(\mathbf{r})
\tag{12}
$$

(12)는 점전하 포텐셜 $\phi = q/4\pi\varepsilon_0 r$이 포아송 방정식 $\nabla^2\phi = -\rho/\varepsilon_0$을 만족하는 근거. 그린 함수 $G(\mathbf{r},\mathbf{r}') = -1/4\pi|\mathbf{r}-\mathbf{r}'|$와 직결.

---

## 전기역학 적용 요약

| 항등식 | 사용되는 맥락 |
|--------|--------------|
| (1), (2) | 포텐셜 $\phi$, $\mathbf{A}$ 도입의 근거 |
| (7) | 포인팅 정리, 에너지 보존 |
| (8) | 파동방정식 유도 |
| (9) | 자기력, 운동 방정식 |
| (12) | 그린 함수, 점전하 포텐셜 |

---

## Questions & Insights

- (12)를 구면 좌표계에서 직접 계산으로 확인해보기
- (8)을 이용해 맥스웰 방정식 전체로부터 파동방정식을 처음부터 유도해보기
- 게이지 변환 $\mathbf{A}\to\mathbf{A}+\nabla\chi$, $\phi\to\phi-\dot\chi$가 (1),(2)에 의해 물리량을 바꾸지 않음을 확인

## Related Concepts

- [[Vector Differential Operators in Einstein Notation]]
- [[맥스웰 방정식 외우기]]
- [[포텐셜을 이용한 맥스웰 방정식]]
- [[전기장과 자기장의 포텐셜]]
- [[Wave Equation from Maxwell Equations]]
- [[Poisson_Equation_for_Dirac_Delta_and_Point_Charge_Potential]]

## References

- 사용자 직접 증명 필기 (2026-02-18): BAC-CAB, $\nabla\cdot(\mathbf{A}\times\mathbf{B})$, $\nabla\times(\nabla\times\mathbf{F})$, $\nabla\times(\mathbf{A}\times\mathbf{B})$

## Notes from Claude

항등식 (1)~(9)는 모두 레비-치비타 축약 공식 $(*)$ 하나로 유도된다. "대칭-반대칭 축약 → 0"과 "이중 레비-치비타 → 크로네커 델타 두 쌍" 이 두 패턴을 체화하면 필요할 때 즉석에서 유도할 수 있다. 전기역학에서 가장 자주 쓰이는 건 단연 (8) — 파동방정식이 여기서 나오기 때문. 오늘 사용자가 (3), (7), (8), (9)를 인덱스 계산으로 직접 손으로 증명했다.
