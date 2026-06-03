---
title: ED lecture note - Covariant Formulation of Electrodynamics
date: "2026-05-29"
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

[[ED lecture note - Special Relativity and Lorentz Transform]]

# 오늘의 핵심

- Four-vector $A^i = (A^0, \vec{A})$, 크기(square magnitude): $(A^0)^2 - (A^1)^2 - (A^2)^2 - (A^3)^2$
- Contravariant index는 위에, covariant index는 아래에 — raising/lowering은 metric tensor $g_{ik}$로
- Space index를 올리고 내리면 부호가 바뀌고, time index를 올리고 내리면 부호가 안 바뀜
- D'Alembertian $\Box \equiv \partial_i \partial^i = \partial^2/\partial x_0^2 - \nabla^2$ → 바로 wave equation의 연산자
- 전기장·자기장 전체를 antisymmetric 2nd rank tensor $F^{\alpha\beta}$로 표현 가능
- 맥스웰 방정식 4개가 $\partial_\alpha F^{\alpha\beta} = \frac{4\pi}{c}J^\beta$와 $\partial_\alpha \tilde{F}^{\alpha\beta} = 0$ 두 줄로 압축
- ==EM field의 Lorentz 변환: $F' = AFA^\top$ (텐서 변환)==

$$
(U_0, \vec{U}), \quad U_0 = \gamma_u c, \quad \vec{U} \equiv \gamma_u \vec{u} = \frac{d\vec{x}}{d\tau}
$$
$$
\left(P_0 = \frac{E}{c},\; \vec{P}\right)
\qquad
\begin{cases}
E = \gamma m_0 c^2 = \dfrac{m_0 c^2}{\sqrt{1 - \frac{u^2}{c^2}}} \\[6pt]
\vec{p} = \gamma m_0 \vec{u}
\end{cases}
$$

4-vector of current density
$$
J^\alpha = (c\rho,\; \vec{J}) \quad \text{라고 4-vector로 정의}
$$

4-vector of potentials($\phi$, $\vec{A}$)

$$
A^\alpha = (\phi,\; \vec{A})
$$



$$
\partial^i = \frac{\partial}{\partial X_i} = \left(\frac{\partial}{\partial X_0},\; -\vec{\nabla}\right)
\qquad
\partial_i = \frac{\partial}{\partial X^i} = \left(\frac{\partial}{\partial X_0},\; \vec{\nabla}\right)
$$

> [!warning]  Index의 위치에 주의하라! 미분 연산은 superscript에서 공간성분의 부호가 -이다. 

$$
\partial^i A_i = \partial_i A^i = \frac{\partial A_0}{\partial X_0} + \vec{\nabla}\cdot\vec{A}
$$

**Field Strength Tensor**
$$
F^{\alpha\beta} = \partial^\alpha A^\beta - \partial^\beta A^\alpha =
\begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & -B_z & B_y \\
E_y & B_z & 0 & -B_x \\
E_z & -B_y & B_x & 0
\end{pmatrix}
$$

$$
F_{\alpha\beta} = g_{\alpha\gamma} F^{\gamma\delta} g_{\delta\beta}
$$

**Dual Field Strength Tensor**

$$
\tilde{F}^{\alpha\beta} = \frac{1}{2}\varepsilon^{\alpha\beta\gamma\delta} F_{\gamma\delta} =
\begin{pmatrix}
0 & -B_x & -B_y & -B_z \\
B_x & 0 & E_z & -E_y \\
B_y & -E_z & 0 & E_x \\
B_z & E_y & -E_x & 0
\end{pmatrix}
$$

**CGS unit에서 방정식과 4-Vector expression**

|                                        | CGS 방정식                                                                                                                                                     | 4-Vector 표현                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **맥스웰 방정식** (Potential wave equation)  | $\begin{cases} \nabla\cdot\vec{E} = 4\pi\rho \\ \nabla\times\vec{B} = \dfrac{1}{c}\dfrac{\partial}{\partial t}\vec{E} + \dfrac{4\pi}{c}\vec{J} \end{cases}$ | $\partial_\alpha F^{\alpha\beta} = \dfrac{4\pi}{c} J^\beta$ |
| **맥스웰 방정식** (Field–potential equation) | $\begin{cases} \nabla\cdot\vec{B} = 0 \\ \nabla\times\vec{E} = -\dfrac{1}{c}\dfrac{\partial}{\partial t}\vec{B} \end{cases}$                                | $\partial_\alpha \tilde{F}^{\alpha\beta} = 0$               |
| **Potential wave equation**            | $\begin{cases} \Box\phi = 4\pi\rho \\ \Box\vec{A} = \dfrac{4\pi}{c}\vec{J} \end{cases}$                                                                     | $\partial_\beta \partial^\beta A = \dfrac{4\pi}{c} J$       |
| **Continuity equation**                | $\dfrac{\partial}{\partial t}\rho + \nabla\cdot\vec{J} = 0$                                                                                                 | $\partial_\alpha J^\alpha = 0$                              |
| **Lorentz condition**                  | $\dfrac{1}{c}\dfrac{\partial}{\partial t}\phi + \nabla\cdot\vec{A} = 0$                                                                                     | $\partial_\alpha A^\alpha = 0$                              |
| **Lorentz force**                      | $\dfrac{d\vec{p}}{dt} = \dfrac{q}{c}\!\left(c\vec{E} + \vec{v}\times\vec{B}\right)$                                                                         | $\dfrac{dP}{dt} = \dfrac{q}{c} U_\alpha F^{\alpha\beta}$    |

$x$방향으로 등속이동할 때 전자기장 Lorentz transform
$$
\begin{cases}
E_x' = E_x \\
E_y' = \gamma(E_y - \beta B_z) \\
E_z' = \gamma(E_z + \beta B_y) \\
B_x' = B_x \\
B_y' = \gamma(\beta E_z + B_y) \\
B_z' = \gamma(B_z - \beta E_y)
\end{cases}
$$


# 필기 내용

## 지난 시간 배운 것

- Four vector: 로렌츠 변환을 따르는 벡터

예시로, 4-velocity의 경우, 시간 성분($U_0$)는 광속에 Lorentz factor를 곱한 것이며, 나머지 공간 성분($\vec{U}$)은 속도 $\vec{u}$에 Lorentz factor를 곱한 것이다. 
$$
(U_0, \vec{U}), \quad U_0 = \gamma_u c, \quad \vec{U} \equiv \gamma_u \vec{u} = \frac{d\vec{x}}{d\tau}
$$
$\gamma_u$는 입자 속도 $\vec{u}$에 대한 Lorentz factor

$$
\gamma_u = \frac{1}{\sqrt{1-\frac{u^2}{c^2}}}
$$

- 에너지/운동량으로 이뤄진 4-vector:

$$
\left(P_0 = \frac{E}{c},\; \vec{P}\right)
\qquad
\begin{cases}
E = \gamma m_0 c^2 = \dfrac{m_0 c^2}{\sqrt{1 - \frac{u^2}{c^2}}} \\[6pt]
\vec{p} = \gamma m_0 \vec{u}
\end{cases}
$$

---

## Mathematical Properties

### Useful Notations (Conventions)

**Four-vector 표기:**

$$
A^i, \quad (i = 0, 1, 2, 3), \qquad A^i = (A^0, \vec{A})
$$

**Square magnitude:**

$$
(A^0)^2 - (A^1)^2 - (A^2)^2 - (A^3)^2
$$

**Subscript convention 도입:**

$$
A_i = (A_0, -\vec{A}) = (A^0, -\vec{A})
$$

$$
A_0 = A^0, \quad A_1 = -A^1, \quad A_2 = -A^2, \quad A_3 = -A^3
$$

Time coordinate는 부호 그대로. Space coordinate는 부호 거꾸로.

$$
\begin{cases}
A^i : \text{contravariant} \\
A_i : \text{covariant}
\end{cases}
$$

**Square of 4-vectors:**

$$
\sum_{i=0}^{3} A^i A_i = (A^0)^2 - (A^1)^2 - (A^2)^2 - (A^3)^2
$$

아인슈타인 합 규약을 사용하면 그냥 $A^i A_i$.

비슷하게, 서로 다른 두 벡터에 대해서도:

$$
A^i B_i = A_i B^i
$$

**Tensor notation:** $A^{ik}$, $A^{00} = A_{00}$, $A_{01} = -A_0^1 = -A^{01}$, $A_{11} = -A_1^1 = A^{11}$

- Raising / lowering of **space** index → **changes the sign**
- Raising / lowering of **time** index → **doesn't change the sign**

**Trace:**

$$
A^i_i = A^0_0 + A^1_1 + A^2_2 + A^3_3 = \text{Tr}(A)
$$

**Kronecker delta:**

$$
\delta^k_i A^i = A^k
$$

**Metric tensor:**

$$
(g^{ik}) = (g_{ik}) =
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1
\end{pmatrix}
$$

Index raising / lowering 에 의한 부호 변화 규칙을 저장한 것. 


$$
g_{ik} A^k = A_i, \quad g^{ik} A_k = A^i, \quad A^i A_i = g_{ik} A^i A^k = g^{ik} A_i A_k
$$

Metric tensor를 이용해 index 위치를 바꿀 수 있다.

---

### Partial Derivative Operator

$$
\frac{\partial}{\partial X'^i} = \frac{\partial X^k}{\partial X'^i} \frac{\partial}{\partial X^k}
$$

$$
\partial^i = \frac{\partial}{\partial X_i} = \left(\frac{\partial}{\partial X_0},\; -\vec{\nabla}\right)
\qquad
\partial_i = \frac{\partial}{\partial X^i} = \left(\frac{\partial}{\partial X_0},\; \vec{\nabla}\right)
$$

> [!warning]  Index의 위치에 주의하라! 미분 연산은 superscript에서 공간성분의 부호가 -이다. 

$$
\partial^i A_i = \partial_i A^i = \frac{\partial A_0}{\partial X_0} + \vec{\nabla}\cdot\vec{A}
$$
아마도 미분연산자와 4-vecotr의 index위치가 다를 때, 모두 양의 부호로 미분 연산이 적용되기를 노린 모양이다. 


**Laplacian in 4D (D'Alembertian):**

$$
\Box \equiv \partial_i \partial^i = \frac{\partial^2}{\partial x_0^2} - \nabla^2
$$

달랑베르시안. 이게 바로 wave equation에서의 $\dfrac{1}{c^2}\dfrac{\partial^2}{\partial t^2} - \nabla^2$ 와 정확히 같다. 

---

### Lorentz Transformation

**좌표 벡터:**

$$
X = \begin{pmatrix} X^0 \\ X^1 \\ X^2 \\ X^3 \end{pmatrix}
$$

**두 행렬의 스칼라 곱:** $(a, b) \equiv \tilde{a}b$

**Covariant 좌표 벡터:**

$$
gX = \begin{pmatrix} X^0 \\ -X^1 \\ -X^2 \\ -X^3 \end{pmatrix} = \begin{pmatrix} X_0 \\ X_1 \\ X_2 \\ X_3 \end{pmatrix}
$$

**Scalar product of four-vector:** $\tilde{a}\,g\,b$

**Linear transformation:** $X' = AX$

Norm $(X, gX)$는 invariant. 즉:

$$
\tilde{X}gX = \tilde{X}'gX' = \widetilde{AX}\,g\,AX = \tilde{X}\tilde{A}\,g\,A\,X
$$

$$
\Rightarrow g = \tilde{A}gA \quad \text{(similarity transform)}
$$

$$
\det(\tilde{A}gA) = \det g \cdot (\det A)^2 = \det g
$$

$$
\det A = \begin{cases} 1 & \text{proper linear transform} \\ -1 & \text{improper linear transform} \end{cases}
$$

---

## Covariance Property of Electrodynamics (Section 11.9)

Covariance of Maxwell equation / Lorentz force under L.T.

→ $\rho$, $\vec{J}$, $\vec{E}$, $\vec{B}$가 LT에 대해 잘 정의된다.

### Continuity Equation

$$
\frac{\partial \rho}{\partial t} + \vec{\nabla}\cdot\vec{J} = 0
\quad\longrightarrow\quad
\partial_\alpha J^\alpha = 0
$$

$$
J^\alpha = (c\rho,\; \vec{J}) \quad \text{라고 4-vector로 정의}
$$

### 4-vector of $\phi$, $\vec{A}$

$$
A^\alpha = (\phi,\; \vec{A})
$$

**Wave equation이 된다:**

$$
\Box A^\alpha = \frac{4\pi}{c} J^\alpha
$$

**Lorentz condition:**

$$
\partial_\alpha A^\alpha = 0
$$

> [!note] 갑자기 chapter 11부터 단위를 바꾼다. MKS unit → CGS unit (양자에서도 쓰던 거)

---


**$\vec{E}$ and $\vec{B}$ field**

맥스웰 방정식 중 포텐셜과 정겨: $\vec{E} = -\dfrac{1}{c}\dfrac{\partial}{\partial t}\vec{A} - \nabla\phi$, $\vec{B} = \vec{\nabla}\times\vec{A}$

성분 표기:

$$
E_x = -\frac{1}{c}\frac{\partial}{\partial t}A_x - \frac{\partial}{\partial x}\phi = -(\partial^0 A^1 - \partial^1 A^0)
$$

$$
B_x = -(- \frac{\partial}{\partial y}A_z +\frac{\partial}{\partial z}A_y )  = -(\partial^2 A^3 - \partial^3 A^2)
$$

$\vec{E}$와 $\vec{B}$ 전체를 **antisymmetric 2nd order tensor**로 나타낼 수 있음.

---

### Field Strength Tensor $F^{\alpha\beta}$

$$
F^{\alpha\beta} = \partial^\alpha A^\beta - \partial^\beta A^\alpha =
\begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & -B_z & B_y \\
E_y & B_z & 0 & -B_x \\
E_z & -B_y & B_x & 0
\end{pmatrix}
$$

$$
F_{\alpha\beta} = g_{\alpha\gamma} F^{\gamma\delta} g_{\delta\beta}
$$

### Dual Field Strength Tensor

$$
\tilde{F}^{\alpha\beta} = \frac{1}{2}\varepsilon^{\alpha\beta\gamma\delta} F_{\gamma\delta} =
\begin{pmatrix}
0 & -B_x & -B_y & -B_z \\
B_x & 0 & E_z & -E_y \\
B_y & -E_z & 0 & E_x \\
B_z & E_y & -E_x & 0
\end{pmatrix}
$$

$F^{\alpha\beta}$로부터 $E \to B$, $B \to -E$로 바뀐 형태.

맥 방이 어찌 바뀌는지 봐라.

---

### Maxwell Equations in Covariant Form

$$
\begin{cases}
\nabla\cdot\vec{E} = 4\pi\rho \\
\nabla\times\vec{B} - \dfrac{1}{c}\dfrac{\partial\vec{E}}{\partial t} = \dfrac{4\pi}{c}\vec{J}
\end{cases}
\longrightarrow \partial_\alpha F^{\alpha\beta} = \frac{4\pi}{c} J^\beta
$$

$$
\begin{cases}
\nabla\cdot\vec{B} = 0 \\
\nabla\times\vec{E} + \dfrac{1}{c}\dfrac{\partial B}{\partial t} = 0
\end{cases}
\longrightarrow \partial_\alpha \tilde{F}^{\alpha\beta} = 0
$$

---
## CGS unit에서 방정식과 4-Vector expression

|                                        | CGS 방정식                                                                                                                                                     | 4-Vector 표현                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **맥스웰 방정식** (Potential wave equation)  | $\begin{cases} \nabla\cdot\vec{E} = 4\pi\rho \\ \nabla\times\vec{B} = \dfrac{1}{c}\dfrac{\partial}{\partial t}\vec{E} + \dfrac{4\pi}{c}\vec{J} \end{cases}$ | $\partial_\alpha F^{\alpha\beta} = \dfrac{4\pi}{c} J^\beta$ |
| **맥스웰 방정식** (Field–potential equation) | $\begin{cases} \nabla\cdot\vec{B} = 0 \\ \nabla\times\vec{E} = -\dfrac{1}{c}\dfrac{\partial}{\partial t}\vec{B} \end{cases}$                                | $\partial_\alpha \tilde{F}^{\alpha\beta} = 0$               |
| **Potential wave equation**            | $\begin{cases} \Box\phi = 4\pi\rho \\ \Box\vec{A} = \dfrac{4\pi}{c}\vec{J} \end{cases}$                                                                     | $\partial_0 \partial^\beta A = \dfrac{4\pi}{c} J$           |
| **Continuity equation**                | $\dfrac{\partial}{\partial t}\rho + \nabla\cdot\vec{J} = 0$                                                                                                 | $\partial_\alpha J^\alpha = 0$                              |
| **Lorentz condition**                  | $\dfrac{1}{c}\dfrac{\partial}{\partial t}\phi + \nabla\cdot\vec{A} = 0$                                                                                     | $\partial_\alpha A^\alpha = 0$                              |
| **Lorentz force**                      | $\dfrac{d\vec{p}}{dt} = \dfrac{q}{c}\!\left(c\vec{E} + \vec{v}\times\vec{B}\right)$                                                                         | $\dfrac{dP}{dt} = \dfrac{q}{c} U_\alpha F^{\alpha\beta}$    |

---

## 활용 예시

### Transformation of Electromagnetic Field

전기·자기장은 텐서 $F^{\alpha\beta}$의 element.

그럼 $E'$, $B'$을 어떻게 LT로 얻을 수 있나?

$E'$, $B'$는 $F'^{\alpha\beta} = \dfrac{\partial X'^\alpha}{\partial X^\gamma}\dfrac{\partial X'^\beta}{\partial X^\delta} F^{\gamma\delta}$의 element.

$A$: Lorentz transform matrix.

$$
F' = AF\tilde{A} \qquad (F'^{\alpha\beta} = A^{\alpha\gamma} F^{\gamma\delta} A^{\delta\beta})
$$

**예시)** $X_1$ 방향으로 속도 $c\beta$로 이동할 때 L.T.

$$
A =
\begin{pmatrix}
\cosh\zeta & -\sinh\zeta & 0 & 0 \\
-\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

$$
F' =
\begin{pmatrix}
\cosh\zeta & -\sinh\zeta & 0 & 0 \\
-\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & -B_z & B_y \\
E_y & B_z & 0 & -B_x \\
E_z & -B_y & B_x & 0
\end{pmatrix}
\begin{pmatrix}
\cosh\zeta & -\sinh\zeta & 0 & 0 \\
-\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

중간 계산:

$$
= \begin{pmatrix}
\cosh\zeta & -\sinh\zeta & 0 & 0 \\
-\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
E_x\sinh\zeta & -E_x\cosh\zeta & -E_y & -E_z \\
E_x\cosh\zeta & -E_x\sinh\zeta & -B_z & B_y \\
E_y\cosh\zeta - B_z\sinh\zeta & -E_y\sinh\zeta + B_z\cosh\zeta & 0 & -B_x \\
E_z\cosh\zeta + B_y\sinh\zeta & -E_z\sinh\zeta - B_y\cosh\zeta & B_x & 0
\end{pmatrix}
$$

**답:**

$$
\begin{cases}
E_x' = E_x \\
E_y' = \gamma(E_y - \beta B_z) \\
E_z' = \gamma(E_z + \beta B_y) \\
B_x' = B_x \\
B_y' = \gamma(\beta E_z + B_y) \\
B_z' = \gamma(B_z - \beta E_y)
\end{cases}
$$
**역변환 관계**는 이렇다. 

$$
\begin{cases}
E_1 = E_1' \\
E_2 = \gamma(E_2' + \beta B_3') \\
E_3 = \gamma(E_3' - \beta B_2') \\
B_1 = B_1' \\
B_2 = \gamma(B_2' - \beta E_3') \\
B_3 = \gamma(B_3' + \beta E_2')
\end{cases}
$$

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

- [[ED lecture note - Special Relativity and Lorentz Transform]]

# References

Jackson Classical Electrodynamics, Chapter 11 (Section 11.9)

# 다음 강의
[[ED lecture note - Moving Charge Fields and Invariant Green Function]]

# 필기 원본

![[ED_13thweek_1.pdf]]
