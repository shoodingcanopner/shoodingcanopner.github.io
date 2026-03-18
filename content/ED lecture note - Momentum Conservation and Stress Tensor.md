---
title: "ED lecture note - Momentum Conservation and Stress Tensor"
date: "2026-03-16"
subject: physics
tags:
  - study
  - lecture_notes
  - electrodynamics
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]]강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[ED lecture note - Gauge Transform and Energy Conservation]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 

# 필기 내용

## 지난 시간 복습: 에너지 보존

지난 시간, 에너지 보존과 Poynting Vector를 배웠다.

$$
\int \mathbf{J} \cdot \mathbf{E} + \frac{d}{dt}\frac{1}{2}\{\mathbf{E} \cdot \mathbf{D} + \mathbf{B} \cdot \mathbf{H}\}\,d^3x = \oint (\mathbf{E} \times \mathbf{H}) \cdot d\mathbf{a}
$$

좌변에서 첫번째 항은 mechanical work rate, 두번째 항은 field energy이다. 
우변에 있는 것은 Poynting vector 이다. 

$$
\mathbf{S} = \mathbf{E} \times \mathbf{H}
$$

차원은 $\left[\frac{\text{에너지}}{\text{면적}} \cdot \frac{1}{\text{시간}}\right]$, 즉 단위 면적 당, 단위 시간 당 에너지 유출(일률)을 의미한다.

---

## 운동량 보존

이제 운동량 보존이다.

로렌츠 힘:

$$
\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})
$$

힘은 운동량 변화율. 위 식을 전하 밀도에 관한 것으로 바꾸고 적분하면 아래와 같이 표현할 수 있다. 

$$
\frac{d\mathbf{p}_\text{mech}}{dt} = \int \rho(\mathbf{E} + \mathbf{v} \times \mathbf{B})\,d^3x
$$

$\rho/\epsilon_0 = \nabla \cdot \mathbf{E}$ 와 $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$ 를 대입한다. 
지금 $\mathbf{v}$는 vector field이다. 따라서 $\rho\mathbf{v} = \mathbf{J}$ 이다. 

$$
\frac{d\mathbf{p}_\text{mech}}{dt} = \int \left[\mathbf{E}(\nabla \cdot \mathbf{E})\epsilon_0 + \left(\nabla \times \mathbf{H} - \frac{\partial \mathbf{D}}{\partial t}\right) \times \mathbf{B}\right]d^3x
$$

지금부터 아주 빡센 유도를 할 것이다. **(중요) 모든 맥스웰 방정식을 다 활용할 것이다.**

지금까지 $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$ 과 $\nabla \times \mathbf{H} = \mathbf{J}$ 를 사용했다. 이제 남은 건 $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ 와 $\nabla \cdot \mathbf{B} = 0$ 이다.

일단 위 식을 $\mathbf{B}$와 $\mathbf{E}$에 대해 정리하자. $\mathbf{D} = \epsilon_0 \mathbf{E}$, $\mathbf{H} = \frac{1}{\mu_0}\mathbf{B}$ 를 대입하면:

$$
\frac{d\mathbf{p}_\text{mech}}{dt} = \epsilon_0 \int \left[(\nabla \cdot \mathbf{E})\mathbf{E} + \left(\frac{1}{\mu_0 \epsilon_0}\nabla \times \mathbf{B} - \frac{\partial \mathbf{E}}{\partial t}\right) \times \mathbf{B}\right]d^3x
$$

괄호 안의 식을 정리하자.

**Step 1.** $(\nabla \cdot \mathbf{E})\mathbf{E}$와 대칭을 맞추기 위해 $\frac{1}{\mu_0 \epsilon_0}(\nabla \cdot \mathbf{B})\mathbf{B} = 0$ 항을 넣는다. ($\nabla \cdot \mathbf{B} = 0$ 이므로 값에는 영향이 없다.)

**Step 2.** $\frac{\partial \mathbf{B}}{\partial t}$가 나타날 수 있게 시간 미분 항을 정리한다.

$$
\left(-\frac{\partial \mathbf{E}}{\partial t}\right) \times \mathbf{B} = \mathbf{B} \times \left(\frac{\partial \mathbf{E}}{\partial t}\right) = \frac{\partial}{\partial t}(\mathbf{B} \times \mathbf{E}) - \left(\frac{\partial \mathbf{B}}{\partial t}\right) \times \mathbf{E}
$$

$$
= -\mu_0 \frac{\partial}{\partial t}(\mathbf{E} \times \mathbf{H}) + (\nabla \times \mathbf{E}) \times \mathbf{E}
$$

(두 번째 줄에서 $\mathbf{B} \times \mathbf{E} = -\mathbf{E} \times \mathbf{B} = -\mu_0 \mathbf{E} \times \mathbf{H}$ 와 $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ 를 사용)

그러면 다시 정리하면:

$$
\frac{d\mathbf{p}_\text{mech}}{dt} = \epsilon_0 \int \left[(\nabla \cdot \mathbf{E})\mathbf{E} + c^2(\nabla \cdot \mathbf{B})\mathbf{B} + (\nabla \times \mathbf{E}) \times \mathbf{E} + c^2(\nabla \times \mathbf{B}) \times \mathbf{B}\right]d^3x - \frac{1}{c^2}\int \frac{\partial}{\partial t}(\mathbf{E} \times \mathbf{H})\,d^3x
$$

**Step 3.** 앞으로 우리는

$$
\frac{1}{c^2}\int \frac{\partial}{\partial t}(\mathbf{E} \times \mathbf{H})\,d^3x = \frac{1}{c^2}\int \frac{\partial}{\partial t}\mathbf{S}\,d^3x
$$

이것을 "field momentum"의 시간 변화율이라고 해석한다.

$$
\frac{1}{c^2}\int \frac{d}{dt}\mathbf{S}\,d^3x = \frac{d\mathbf{p}_\text{field}}{dt}
$$

여기서

$$
\mathbf{p}_\text{field} = \frac{1}{c^2}\int \mathbf{S}\,d^3x = \frac{1}{c^2}\int \mathbf{E} \times \mathbf{H}\,d^3x = \epsilon_0 \int \mathbf{E} \times \mathbf{B}\,d^3x
$$

장의 운동량 밀도:

$$
\mathbf{g} = \frac{1}{c^2}\mathbf{S}
$$

$$
\mathbf{p}_\text{field} = \int \mathbf{g}\,d^3x
$$

---

## 전체 운동량의 시간 변화

따라서,

$$
\frac{d\mathbf{p}_\text{mech}}{dt} + \frac{d\mathbf{p}_\text{field}}{dt} = \epsilon_0 \int \left[(\nabla \cdot \mathbf{E})\mathbf{E} + c^2(\nabla \cdot \mathbf{B})\mathbf{B} - \mathbf{E} \times (\nabla \times \mathbf{E}) - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]d^3x
$$

(부호 주의: $(\nabla \times \mathbf{E}) \times \mathbf{E} = -\mathbf{E} \times (\nabla \times \mathbf{E})$ )

---

## 우변의 적분을 자세히 보자

우변을 $\mathbf{E}$ 부분과 $\mathbf{B}$ 부분으로 나눠서 보자. $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ 이므로, $\mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} = -\mathbf{E} \times (\nabla \times \mathbf{E})$.

---

### vector calculus identity 유도

$$
\epsilon_0 \int \left[\mathbf{E}(\nabla \cdot \mathbf{E}) - \mathbf{E} \times (\nabla \times \mathbf{E}) + c^2 \mathbf{B}(\nabla \cdot \mathbf{B}) - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]d^3x
$$

vector calculus identity를 $\mathbf{E}$에 대해서 먼저 보면. 무엇을 알 수 있을까?

$$
[\mathbf{E}(\nabla \cdot \mathbf{E}) - \mathbf{E} \times (\nabla \times \mathbf{E})]_i = E_i \partial_j E_j - [\mathbf{E} \times (\nabla \times \mathbf{E})]_i
$$

아인슈타인 summation notation 을 쓸 때에, $\nabla \cdot \mathbf{E} = \partial_j E_j$ 이다.

$\mathbf{E} \times (\nabla \times \mathbf{E})$ 가 불쾌감을 줄 수 있다. 이 외적을 풀어 써야 하는데, 이미 풀고 나온 결과를 쓰기에는 $(\nabla \times \mathbf{E})$ 자체가 벡터이다. 이걸 잘 다뤄야 하는데 해서, 해당 양을 계산하기 위해,

$$
[\nabla \times \mathbf{E}]_i = \epsilon_{ijk} \partial_j E_k
$$

$$
[\mathbf{E} \times (\nabla \times \mathbf{E})]_i = \epsilon_{inm} E_n [\nabla \times \mathbf{E}]_m
$$

$$
[\mathbf{E} \times (\nabla \times \mathbf{E})]_i = \epsilon_{inm} E_n \epsilon_{mjk} \partial_j E_k
$$

이때, $\epsilon_{inm}\epsilon_{mjk} = \delta_{ij}\delta_{nk} - \delta_{ik}\delta_{nj}$ (m 등의 시작되는 index에 대해 축약).

$$
[\mathbf{E} \times (\nabla \times \mathbf{E})]_i = (\delta_{ij}\delta_{nk} - \delta_{ik}\delta_{nj}) E_n \partial_j E_k
$$

$$
= E_k \partial_i E_k - E_j \partial_j E_i
$$

따라서,

$$
[\mathbf{E}(\nabla \cdot \mathbf{E}) - \mathbf{E} \times (\nabla \times \mathbf{E})]_i = E_i \partial_j E_j - E_k \partial_i E_k + E_j \partial_j E_i
$$

$$
= \partial_j (E_i E_j) - \frac{1}{2}\partial_i E_j^2
$$

$c^2[\mathbf{B}(\nabla \cdot \mathbf{B}) - \mathbf{B} \times (\nabla \times \mathbf{B})]$ 에 대해서도 완전히 같은 형태로 계산된다.

---

## Maxwell Stress Tensor

이것을 하나로 이 대체하는 방향.

$$
\frac{d}{dt}(\mathbf{p}_\text{mech} + \mathbf{p}_\text{field})_i = \oint T_{ij}\hat{n}_j\,d^2x = \int \partial_j T_{ij}\,d^3x
$$

여기서 아까 체적분-면적분 변환은 Green's theorem에 의함이다.

$$
T_{\alpha\beta} = \epsilon_0\left[E_\alpha E_\beta + c^2 B_\alpha B_\beta - \frac{1}{2}(\mathbf{E} \cdot \mathbf{E} + c^2 \mathbf{B} \cdot \mathbf{B})\delta_{\alpha\beta}\right]
$$

이것을 **Maxwell stress tensor** 라고 한다. 차원은 힘/면적, 즉 **stress tensor** 의 형태와 같다.

$$
\oint T_{ij}\hat{n}_j\,d^2x
$$

는 **부피 표면에 작용하는 스트레스(힘/면적)를 적분한 것**이다.

두 가지 conservation을 이 형태 E 와 B의 대칭성을 밝히면 된다.

---

## Symmetry Property of Electromagnetic Field (6.10 Jackson)

공간 반전 / 시간 / time reversal 에 의한 어떤 성질이 가능할까?

반전/변환 변환도 직교 변환의 한가지에 속한다. 공간 변환도 같이가 변하지 않아야 한다.

좋, **orthogonal matrix** (transformation) 이 이것은 된다.

### Orthogonal transformation

변환 될 때에 모양이 불변이다.

좌표 $\hat{x}_i' = a_{ij}\hat{x}_j$ : 변환된 unit vector는 변환 이전 unit vector의 linear summation으로 나타낼 수 있다나타낸다.

$a_{ij}$가 어떤 변환 행렬의 요소이다.

$$
a_{ij} = \hat{x}_i' \cdot \hat{x}_j
$$

, 라는 것이 자명하다. (unit vector 의 orthogonality를 의미한다).

$$
\delta_{ij} = \hat{x}_i' \cdot \hat{x}_j' = a_{ik}a_{j\ell}\,\hat{x}_k \cdot \hat{x}_\ell = \delta_{k\ell}\,a_{ik}a_{j\ell} = a_{ik}a_{jk}
$$

즉,

$$
\alpha\tilde{\alpha} = \mathbb{1}
$$

따라서 $\tilde{\alpha} = \alpha^{-1}$, 즉 **orthogonal matrix**를 의미하는 것이다.

$\alpha$의 제일 왼쪽 것 등 이들이 행렬 22가과 같다. 이것이 orthogonal matrix의 성질이다. 즉 열벡터도 이것은 unit vector의 dot product를 계산할 때 직교성을 줄지며 짝을 이루면서 $\delta$가 된다는 것.

determinant는

$$
1 = \det(\alpha\tilde{\alpha}) = \det(\mathbb{1}) = \det(\alpha)\det(\tilde{\alpha}) = |\det(\alpha)|^2
$$

$$
\det(\alpha) = \pm 1
$$

---

## Similarity transformation

즉 matrix $A$에 대해 차원을 살펴보면.

$$
\mathbf{y} = A\mathbf{x} \quad \longleftrightarrow \quad \mathbf{y}' = A'\mathbf{x}'
$$

$$
A' = SAS' \quad \text{(2차 변환)}
$$

$$
\mathbf{y}' = SAS'\mathbf{x}' = SA\mathbf{x}
$$

$S^{-1} = S'$ 인 경우 (2차 변환),

$$
S'\mathbf{y}' = A\mathbf{x}, \quad \mathbf{y} = A\mathbf{x}
$$

이로써 similarity transformation의 정합성이 확인된다.

# 궁금한 내용

생각난 질문을 여기에 메모

# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[ED lecture note - Symmetry and EM Waves]]

# 필기 원본
[[ED_4thweek_1.pdf]]