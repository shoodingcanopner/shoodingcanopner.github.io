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
> 이것은 [[MOCs/Electrodynamics|Electrodynamics]]강의를 듣고 적은 필기입니다. 
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

**Step 1.** $(\nabla \cdot \mathbf{E})\mathbf{E}$와 대칭을 맞추기 위해 $\frac{1}{\mu_0 \epsilon_0}(\nabla \cdot \mathbf{B})\mathbf{B} = 0$ 항을 넣는다. ( $\nabla \cdot \mathbf{B} = 0$ 이므로 값에는 영향이 없다. )

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
이 식을 어떤 텐서에 대한 미분으로 나타낼 수 있다. 

vector calculus identity를 $\mathbf{E}$에 대해서 먼저 보면. 무엇을 알 수 있을까?

$$
[\mathbf{E}(\nabla \cdot \mathbf{E}) - \mathbf{E} \times (\nabla \times \mathbf{E})]_i = E_i \partial_j E_j - [\mathbf{E} \times (\nabla \times \mathbf{E})]_i
$$

아인슈타인 summation notation 을 쓸 때에, $\nabla \cdot \mathbf{E} = \partial_j E_j$ 이다.

우변 둘째 항에 cross product 두 개 있는 항을 풀어보자. 

$$
[\nabla \times \mathbf{E}]_i = \epsilon_{ijk} \partial_j E_k
$$

$$
[\mathbf{E} \times (\nabla \times \mathbf{E})]_i = \epsilon_{inm} E_n [\nabla \times \mathbf{E}]_m
$$

$$
[\mathbf{E} \times (\nabla \times \mathbf{E})]_i = \epsilon_{inm} E_n \epsilon_{mjk} \partial_j E_k
$$

이때, $\epsilon_{inm}\epsilon_{mjk} = \delta_{ij}\delta_{nk} - \delta_{ik}\delta_{nj}$ (m index에 대해 축약).

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
= \partial_j (E_i E_j) - \frac{1}{2}\partial_i E_jE_j
$$

$c^2[\mathbf{B}(\nabla \cdot \mathbf{B}) - \mathbf{B} \times (\nabla \times \mathbf{B})]$ 에 대해서도 완전히 같은 형태로 계산된다.

그래서 결론은
$$
 \left[\mathbf{E}(\nabla \cdot \mathbf{E}) - \mathbf{E} \times (\nabla \times \mathbf{E}) + c^2 \mathbf{B}(\nabla \cdot \mathbf{B}) - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]_i 
 $$
 $$
 = \partial_j (E_i E_j) +\partial_j c^2(B_i B_j) - \frac{1}{2}\partial_i E_kE_k  - \frac{1}{2}\partial_i c^2B_kB_k
$$

---

## Maxwell Stress Tensor


$$
T_{\alpha\beta} = \epsilon_0\left[E_\alpha E_\beta + c^2 B_\alpha B_\beta - \frac{1}{2}\delta_{\alpha\beta}(\mathbf{E} \cdot \mathbf{E} + c^2 \mathbf{B} \cdot \mathbf{B})\right]
$$
이런 텐서를 생각하면, 

$$
\epsilon_0  \left[\mathbf{E}(\nabla \cdot \mathbf{E}) - \mathbf{E} \times (\nabla \times \mathbf{E}) + c^2 \mathbf{B}(\nabla \cdot \mathbf{B}) - c^2 \mathbf{B} \times (\nabla \times \mathbf{B})\right]_i 
$$
$$
 = \partial_j (E_i E_j) +\partial_j c^2(B_i B_j) - \frac{1}{2}\partial_i E_kE_k  - \frac{1}{2}\partial_i c^2B_kB_k 
 $$
$$
= \partial_j (E_i E_j) +\partial_j c^2(B_i B_j) - \frac{1}{2}\delta_{ij}\partial_j E_kE_k  - \frac{1}{2}\delta_{ij}\partial_j c^2B_kB_k  = \partial_j T_{ij} 
$$
이렇게 위의 복잡한 항을 간단하게 나타낼 수 있다. 

$$
\frac{d}{dt}(\mathbf{p}_\text{mech} + \mathbf{p}_\text{field})_i = \int \partial_j T_{ij}\,d^3x = \oint T_{ij}\hat{n}_j\,d^2x
$$

여기서 아까 체적분-면적분 변환은 Green's theorem에 의함이다.
→ 어 아닌데 발산정리 같은데????

이것을 **Maxwell stress tensor** 라고 한다. 차원은 힘/면적, 즉 **stress tensor** 의 형태와 같다.

$$
\oint T_{ij}\hat{n}_j\,d^2x
$$

는 **부피 표면에 작용하는 스트레스(힘/면적)를 적분한 것**이다.

우리는 momentum conservation에서 E 와 B의 대칭성을 발견했다. 

---

## Symmetry Property of Electromagnetic Field (6.10 Jackson)

물리량들이 공간 회전 / 반전 / time reversal 에 어떤 성질을 가지나? 

회전/반전 변환은 **orthogonal matrix** (transformation) 이어야 한다. 변환을 해도 벡터의길이가 변하지 않아야 하기 때문이다. 이 matri는 determinant의 절댓값이 1이다. 

### Orthogonal transformation

변환 될 때에 모양이 불변이다.

좌표 $\hat{x}_i' = a_{ij}\hat{x}_j$ : 변환된 unit vector는 변환 이전 unit vector의 linear summation으로 나타낼 수 있어야 한다. 

$a_{ij}$는 transformation matrix의 element

$$
a_{ij} = \hat{x}_i' \cdot \hat{x}_j
$$

라는 것이 자명하다. (unit vector 의 orthogonality로 인해서.)

$$
\delta_{ij} = \hat{x}_i' \cdot \hat{x}_j' = a_{ik}a_{j\ell}\,\hat{x}_k \cdot \hat{x}_\ell = \delta_{k\ell}\,a_{ik}a_{j\ell} = a_{ik}a_{jk} = a_{ik}\tilde{a}_{kj}
$$

즉,

$$
a\tilde{a} = \mathbb{1}
$$

따라서 $\tilde{a} = a^{-1}$, 즉 **orthogonal matrix**를 의미하는 것이다.

$\alpha$의 전치행렬은 역행렬과 같다. 이것이 orthogonal matrix의 성질이다.

determinant는

$$
1 = \det(\alpha\tilde{\alpha}) = \det(\mathbb{1}) = \det(\alpha)\det(\tilde{\alpha}) = |\det(\alpha)|^2
$$

$$
\det(\alpha) = \pm 1
$$

---

## Similarity transformation

임의의 matrix $A$에 대해, 그리고 직교 변환 행렬 $S$에 대해, 

$$
\mathbf{y} = A\mathbf{x} \quad \longleftrightarrow \quad \mathbf{y}' = A'\mathbf{x}'
$$

$$
A' = SAS' 
$$

$$
\mathbf{y}' = SAS'\mathbf{x}' = SA\mathbf{x}
$$

$$
S'\mathbf{y}' = A\mathbf{x}, \quad \mathbf{y} = A\mathbf{x}
$$


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