---
title: ED lecture note - Faraday, Maxwell Equations, and Potentials
date: "2026-03-09"
subject: physics
tags:
  - study
  - lecture_note
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[ED lecture note - electroststics and magnetostatics]]

# 오늘의 핵심

패러데이 법칙으로부터 맥스웰 방정식을 완성하고, displacement current를 도입하는 과정. 
이어서 전자기장을 포텐셜 $\Phi$, $\vec{A}$로 표현하는 방법을 정리한다.

---

# 필기 내용

## 페러데이의 전자기 유도

도체 고리가 자기장 $\vec{B}$ 방향으로 닫힌다. 기전력(electromotive force):

$$
\mathcal{E} = \oint f_{mag} \cdot d\vec{l} = Bh|v| = \frac{d}{dt}Bh = -\frac{d}{dt}\int \vec{B} \cdot d\vec{a}
$$

전선을 따라 가속이므로. $\Phi$는 도선을 통하는 **magnetic flux**.

$$
\mathcal{E} = -\frac{d\Phi}{dt}
$$

기전력은 **magnetic flux의 time derivative**이다.

기전력의 원래 정의는 $\oint \vec{E} \cdot d\vec{l}$ (단위 전하가, 전기장에 의해 받는 일). 이를 대입:

$$
\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi}{dt}
$$

$$
\int (\nabla \times \vec{E}) \cdot d\vec{a} = -\frac{d}{dt} \int \vec{B} \cdot d\vec{a}
$$

따라서:

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

이것이 **③ 패러데이 법칙**이다.

---

## 맥스웰 방정식의 완성

여기까지 나온 맥스웰 방정식 4개:

$$
\nabla \cdot \vec{E} = \frac{1}{\varepsilon_0} \rho
$$

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

$$
\nabla \cdot \vec{B} = 0
$$

$$
\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
$$

네 번째 방정식 (비오-사바르 → 앙페어)에 박스 친 항 $\mu_0\varepsilon_0 \frac{\partial \vec{E}}{\partial t}$는 **어디서 나왔는가?**

### Displacement Current의 도입

$\nabla \times \vec{H} = \vec{J}$는 steady state에서만 기도된다. 왜냐하면:

$$
\nabla \cdot (\nabla \times \vec{H}) = \nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t}
$$

그런데 $\nabla \cdot (\nabla \times \text{anything}) = 0$이어야 하므로, steady state ($\frac{\partial\rho}{\partial t} = 0$)가 아니면 모순이 생긴다.

그런데 $\frac{\partial \rho}{\partial t} = \varepsilon_0 \frac{\partial}{\partial t} (\nabla \cdot \vec{E}) \neq 0$ 이면 어떻게 되나?

연속 방정식 $\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0$을 이용해서 더 general한 관계식을 만들자:

$$
\nabla \cdot \vec{J} + \frac{\partial}{\partial t}(\nabla \cdot \vec{D}) = 0
$$

$$
\nabla \cdot \left(\vec{J} + \frac{\partial}{\partial t}\vec{D}\right) = 0
$$

$\vec{J} + \frac{\partial \vec{D}}{\partial t}$가 훨씬 더 general한 전류다. 여기서 $\frac{\partial \vec{D}}{\partial t}$를 **displacement current**라고 부른다.

더 general한 앙페어 법칙:

$$
\nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t}
$$

검증: $\nabla \cdot (\nabla \times \vec{H}) = \nabla \cdot \left(\vec{J} + \frac{\partial \vec{D}}{\partial t}\right) = 0$ ✓

---

## 완전한 맥스웰 방정식 (물질 포함)

그러므로, 전가 방정식은:

$$
\nabla \cdot \vec{D} = \rho
$$

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

$$
\nabla \cdot \vec{B} = 0
$$

$$
\nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t}
$$

맥스웰, 로렌츠힘, 뉴턴 방정식만 있다면 전하를 띤 물질과 장들의 역학은 설명할 수 있다.

---

## 포텐셜 표현

여러 가지 Potential로, $\Phi$와 $\vec{A}$. $\Phi$는 전기장의 스칼라 포텐셜, $\vec{A}$는 자기장의 벡터 포텐셜.

### B의 포텐셜 표현

$$
\nabla \cdot \vec{B} = \nabla \cdot (\nabla \times \vec{A}) = 0
$$

$\vec{B}$가 자기포텐셜을 갖는 건 명확하다:

$$
\vec{B} = \nabla \times \vec{A}
$$

### E의 포텐셜 표현

$\nabla \times \vec{E} + \frac{\partial \vec{B}}{\partial t} = 0$에 $\vec{B} = \nabla \times \vec{A}$를 대입:

$$
\nabla \times \left(\vec{E} + \frac{\partial \vec{A}}{\partial t}\right) = 0
$$

curl이 0이므로, $\vec{E} + \frac{\partial \vec{A}}{\partial t}$는 어떤 스칼라의 gradient:

$$
\vec{E} + \frac{\partial \vec{A}}{\partial t} = -\nabla \Phi
$$

따라서:

$$
\vec{E} = -\nabla \Phi - \frac{\partial \vec{A}}{\partial t}
$$

> ☞ $\Phi$와 $\vec{A}$를 알면 $\vec{E}$와 $\vec{B}$를 알 수 있다.  
> potentials (scalars/vectors) → vectors.  
> potential을 사용하는 편이 dimension이 낮다. $\vec{E}$와 $\vec{B}$가 동립적이지 않기 때문.

### 파동 방정식으로 변환

$\nabla \cdot \vec{D} = \rho$, $\nabla \cdot \vec{E} = \frac{1}{\varepsilon_0}\rho$에서:

$$
-\nabla^2 \Phi = \frac{1}{\varepsilon_0}\rho
$$

$$
\nabla^2 \Phi + \frac{\partial}{\partial t}(\nabla \cdot \vec{A}) = -\frac{1}{\varepsilon_0}\rho
$$

$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$에서 $\vec{B} = \nabla \times \vec{A}$를 대입:

$$
\nabla \times (\nabla \times \vec{A}) = \mu_0 \vec{J} + \frac{1}{c^2}\frac{\partial \vec{E}}{\partial t} = \mu_0 \vec{J} + \frac{1}{c^2}\frac{\partial}{\partial t}\left(-\nabla\Phi - \frac{\partial \vec{A}}{\partial t}\right)
$$

벡터 항등식 $\nabla \times (\nabla \times \vec{A}) = \nabla(\nabla \cdot \vec{A}) - \nabla^2 \vec{A}$를 적용 (스칼라 라플라시안 vs. **벡터 라플라시안**):

$$
\nabla^2 \vec{A} - \frac{1}{c^2}\frac{\partial^2 \vec{A}}{\partial t^2} - \nabla\left(\nabla \cdot \vec{A} + \frac{1}{c^2}\frac{\partial \Phi}{\partial t}\right) = -\mu_0 \vec{J}
$$

---

# 궁금한 내용

- curl이 0이면 gradient로 표현되는 이유 (Helmholtz theorem)?
- 이 coupling된 방정식에서 게이지 선택 (Coulomb gauge / Lorenz gauge)으로 어떻게 단순화하는가?

# AI의 보충 설명


# 연관 학습 노트

- [[전기장과 자기장의 포텐셜]]
- [[포텐셜을 이용한 맥스웰 방정식]]

# References

강의 ppt 링크를 이곳에

# 다음 강의

