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

지난 시간, 미시적 보존을 배웠다.

$$
\int \mathbf{J} \cdot \mathbf{E} + \frac{d}{dt}\frac{1}{2}\{\mathbf{E} \cdot \mathbf{D} + \mathbf{B} \cdot \mathbf{H}\}\,d^3x = \oint (\mathbf{E} \times \mathbf{H}) \cdot d\mathbf{a}
$$

여기서 mechanical work rate, field energy, Poynting vector가 등장했다.

$$
\mathbf{S} = \mathbf{E} \times \mathbf{H}
$$

차원은 $\left[\frac{\text{에너지}}{\text{면적}} \cdot \frac{1}{\text{시간}}\right]$, 즉 단위 면적 당 에너지 유출(일률)을 의미한다.

---

## 운동량 보존

이제 운동량 보존이다.

로렌츠 힘:

$$
\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})
$$

힘은 운동량 변화율. 전자와 바깥으로 나가는 개념적 다르긴 하지만, 결국 운동량 보존을 쓴다.

$$
\frac{d\mathbf{p}_\text{mech}}{dt} = \int \rho(\mathbf{E} + \mathbf{v} \times \mathbf{B})\,d^3x
$$

$\rho/\epsilon_0 = \nabla \cdot \mathbf{E}$ 와 $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$ 를 이것들을 대입한다. 2가지 맥스웰 식이 들어간다.

$$
\frac{d\mathbf{p}_\text{mech}}{dt} = \int \left[\mathbf{E}(\nabla \cdot \mathbf{E})\epsilon_0 + \left(\nabla \times \mathbf{H} - \frac{\partial \mathbf{D}}{\partial t}\right) \times \mathbf{B}\right]d^3x
$$

여기서 나머지 맥스웰 방정식도 활용하자.

$$
= \epsilon_0 \int \left[\mathbf{E}(\nabla \cdot \mathbf{E}) + c^2 \mathbf{B}(\nabla \mathbf{B}) + \mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]d^3x
$$

등 매우 복잡하게 되는데,

$$
\frac{d}{dt}(\mathbf{A} \times \mathbf{B}) = \frac{d\mathbf{A}}{dt} \times \mathbf{B} + \mathbf{A} \times \frac{d\mathbf{B}}{dt}
$$

이걸 생각하면? 이게 의미하는 것이 뭔지 ...

$$
- \epsilon_0 \int \frac{\partial}{\partial t}[\mathbf{E} \times \mathbf{B}]\,d^3x
$$

이게 Poynting vector의 형태와 관계가 있다.

$$
\mathbf{p}_\text{field} = \epsilon_0 \int \mathbf{E} \times \mathbf{B}\,d^3x = \frac{1}{c^2}\int \mathbf{E} \times \mathbf{H}\,d^3x = \frac{1}{c^2}\int \mathbf{S}\,d^3x
$$

장의 운동량 밀도:

$$
\mathbf{g} = \frac{1}{c^2}\mathbf{S}
$$

가 장의 운동량 밀도이다. 이미 질량 밀도에 해당하는 에너지 밀도와 사전이므로.

$$
\mathbf{p}_\text{field} = \int \mathbf{g}\,d^3x
$$

---

## 전체 운동량의 시간 변화

결국,

$$
\frac{d\mathbf{p}_\text{mech}}{dt} + \frac{d\mathbf{p}_\text{field}}{dt} = \epsilon_0 \int \left[\mathbf{E}(\nabla \cdot \mathbf{E}) + c^2 \mathbf{B}(\nabla \cdot \mathbf{B}) + \mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]d^3x
$$

우변의 적분을 에쁘기도 놀라, 내놓으면 도움 될 것이다.

---

## 우변의 적분을 자세히 보자

$$
\epsilon_0 \int \left[\mathbf{E}(\nabla \cdot \mathbf{E}) + c^2 \mathbf{B}(\nabla \cdot \mathbf{B}) + \mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]d^3x
$$

제기 정상 나머지 것들이 대칭 이용을 해야한다. 맨 앞의 두 항은 비슷한 항들.

$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ 이므로, $\mathbf{E} \times \frac{\partial \mathbf{B}}{\partial t} = -\mathbf{E} \times (\nabla \times \mathbf{E})$.

나머지, 불필요한 대칭을 유지하기 위해 항을 두 개 이상에 대해 합칠 수 있다는 것이 있는데.

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

# 필기 원본
[[ED_4thweek_1.pdf]]