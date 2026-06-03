---
title: ED lecture note - Special Relativity and Lorentz Transform
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

[[ED lecture note - Circular Aperture Diffraction and Optical Theorem]]

# 오늘의 핵심

- 갈릴레이 변환은 뉴턴 역학은 불변이지만, 파동방정식(Maxwell)은 불변이 아님 → Lorentz 변환이 필요
- Lorentz 변환은 ① Newton + Maxwell 방정식 불변, ② 광속 불변 두 가지 공리에서 출발
- 시공간 좌표를 $X_\alpha = (ict, x, y, z)$로 정의하면 내적이 두 관성계에서 보존됨
- Lorentz 변환은 hyperbolic rotation으로 표현되며, $\beta \to 0$에서 갈릴레이 변환으로 환원됨
- Four-vector: Lorentz 변환을 따르는 시공간 속 벡터. 3-vector의 자연스러운 확장
- Proper time $\tau$: 움직이는 좌표계에서 흐르는 시간. $dt' = dt/\gamma$
- Light cone: 두 사건의 인과적 관계를 시공간 간격 $S_{12}^2$의 부호로 분류

# 필기 내용

## Chapter 11 Special Theory of Relativity

**동기:** 전자가 얼마나 빨리 이동해야 빛이 생기나? 라는 질문에 답하기 위해, 광속에 가까운 운동을 다룰 수 있는 coordinate transform을 배워야 한다.

**설정:** 두 관성계에 관해서만 논의한다. 한 관성계가 다른 관성계에 대해 $\mathbf{V}$의 속도로 이동할 때.

---

## Galilean Transformation

$$
\begin{cases}
x' = x - Vt \\
t' = t
\end{cases}
$$

속도 변환:

$$
v_i' = \frac{dX_i'}{dt} = \frac{d}{dt}(X_i - V_i t) = v_i - V_i
$$

편미분 변환:

$$
\frac{\partial}{\partial x_i} = \frac{\partial x_j'}{\partial x_i}\frac{\partial}{\partial x_j'} + \frac{\partial t'}{\partial x_i}\frac{\partial}{\partial t'} = \delta_i^j \frac{\partial}{\partial x_j'} = \frac{\partial}{\partial x_i'}
$$

$$
\frac{\partial}{\partial t} = \frac{\partial x_j'}{\partial t}\frac{\partial}{\partial x_j'} + \frac{\partial t'}{\partial t}\frac{\partial}{\partial t'} = V_j\frac{\partial}{\partial x_j'} + \frac{\partial}{\partial t'}
$$

**뉴턴 역학에서 불변성 확인:**

Newton's law:

$$
m\frac{dv_i'}{dt'} = -\nabla_i' \sum_j V_{ij}(|x_i' - x_j'|) = -\nabla_i\sum_j V_{ij}(|x_i - x_j|) = m\frac{dv_i}{dt}
$$

> [!question] 이게 무슨 논리지?
> 갈릴레이 변환에서 $|x_i' - x_j'| = |x_i - x_j|$ 이므로 퍼텐셜이 같아지고, 따라서 뉴턴 방정식이 불변함.

**파동방정식은 불변이 아님:**

$$
\left(\sum_i \partial_i^2 - \frac{1}{c^2}\partial_t^2\right)\psi = 0
$$

갈릴레이 변환 후:

$$
\partial_i = \partial_{i'}, \quad \partial_t = \partial_{t'} + V_i\partial_{i'}
$$

$$
\partial_t^2 = (\partial_{t'} + V_i\partial_{i'})(\partial_{t'} + V_i\partial_{i'}) = \partial_{t'}^2 + 2\partial_{t'}\mathbf{V}\cdot\nabla' + (\mathbf{V}\cdot\nabla')^2
$$

> [!question] 이거 이렇게 풀기 하는 게 맞음?

파동방정식의 형태를 무너뜨리는 추가항 $2\partial_{t'}\mathbf{V}\cdot\nabla' + (\mathbf{V}\cdot\nabla')^2$가 생겼다. 이래서는 안 된다! 맥스웰 방정식과 파동방정식을 보존하는 transformation이 필요.

---

## Lorentz Transform

이것을 만드는 두 가지 재료:

① Newton's equation of motion과 Maxwell equation이 invariant할 것.

② 광속 불변: Speed of light (Maximum speed of objects) is constant.

---

## Lorentz Transformation Relation

$K$와 $K'$라는 두 inertial frame을 고려.

- $K$: $(t, x, y, z)$, $K'$: $(t', x', y', z')$
- $t = t' = 0$일 때, $K$와 $K'$의 원점은 같았다.
- $K'$는 $K$에 대해 $x(x')$ direction으로 $V$의 속도로 이동 중.
- $t = t' = 0$에서 빛을 잠깐 켰다끄다.

**$K$-frame에서 빛의 경로:** $c^2t^2 = x^2 + y^2 + z^2$

광속 불변이므로, **$K'$-frame에서 빛의 경로도:** $c^2t'^2 = x'^2 + y'^2 + z'^2$

homogeneous하고 isotropic한 space-time coordinate라면 다음 등식을 만족해야 한다:

$$
0 = c^2t^2 - x^2 - y^2 - z^2 = \lambda^2\left[c^2t'^2 - x'^2 - y'^2 - z'^2\right]
$$

이때 $\lambda$는 scale factor.

$K$에서 $K'$로의 역변환을 고려하면, $|\lambda| = 1$이어야 한다. 따라서:

$$
\boxed{x^2 + y^2 + z^2 - c^2t^2 = x'^2 + y'^2 + z'^2 - c'^2t'^2}
$$

**4-벡터 표기법 도입:**

$$
\begin{cases}
X_0 = ict \\
X_1 = x \\
X_2 = y \\
X_3 = z
\end{cases}
$$

이렇게 $X_\alpha$ $(\alpha = 0, 1, 2, 3)$를 정의하면, 두 좌표계에서 $X$의 내적은 같다:

$$
\boxed{X_\alpha \cdot X_\alpha = X_\alpha' \cdot X_\alpha'}
$$

**변환 행렬 구하기:**

$X_2' = X_2$, $X_3' = X_3$은 받아들이고 넘어가자.

미지의 $a$ 값을 $X_0'^2 + X_1'^2 = X_0^2 + X_1^2$을 통해 찾는다.

$$
\begin{cases}
X_0' = a_{00} X_0 + a_{01} X_1 \\
X_1' = a_{10} X_0 + a_{11} X_1 \\
X_2' = X_2 \\
X_3' = X_3
\end{cases}
$$

좌변을 풀면:

$$
(a_{00}^2 + a_{10}^2)X_0^2 + (a_{01}^2 + a_{11}^2)X_1^2 + 2(a_{00}a_{01} + a_{10}a_{11})X_1 X_0
$$

따라서:

$$
\begin{cases}
a_{00}^2 + a_{10}^2 = 1 \\
a_{01}^2 + a_{11}^2 = 1 \\
a_{00}a_{01} + a_{10}a_{11} = 0
\end{cases}
$$

**추가 조건:** $K'$ 좌표계의 원점을 $K'$ 좌표계와 $K$ 좌표계에서 나타내자.

$K$에서는 등속 $V$로 이동 중: $X_1 = Vt = \dfrac{V}{iC}X_0$

$K'$에서는 원점이니까 정지 중: $X_1' = 0$

앞으로 광속과 속도의 비를 $\beta = \dfrac{V}{c}$라고 두겠다. 따라서 $X_1 = -i\beta X_0$.

$X_1' = a_{10}X_0 + a_{11}X_1$에 원점의 상황 대입:

$$
0 = (a_{10} - i\beta a_{11})X_0 \implies \boxed{a_{10} = i\beta a_{11}}
$$

이를 세 연립방정식에 대입하면:

$$
\begin{cases}
a_{00}^2 + a_{10}^2 = 1 &\longrightarrow& a_{00}^2 - \beta^2 a_{11}^2 = 1 &\longrightarrow& a_{00}^2 - i\beta a_{00}a_{01} = 1 \\
a_{01}^2 + a_{11}^2 = 1 &\longrightarrow& \underline{a_{01}^2 - \dfrac{1}{i\beta}a_{00}a_{01}} = 1 \\
a_{00}a_{01} + a_{10}a_{11} = 0 &\longrightarrow& a_{00}a_{01} + i\beta a_{11}^2 = 0
\end{cases}
$$

$$
\begin{cases}
 a_{00}^2 - i\beta a_{00}a_{01} = 1 \\
 a_{01}^2 - \dfrac{1}{i\beta}a_{00}a_{01} = 1 
\end{cases}
$$

이제 전부 풀 수 있는데... 복잡하긴 마찬가지.

$a_{00} = b\,a_{01}$를 넣어 두 식을 같게 만드는 $b$를 찾는다:

$$
\begin{cases}
a_{01}^2\,b(b - i\beta) = 1 \\
a_{01}^2\!\left(1 - \dfrac{b}{i\beta}\right) = 1
\end{cases}
$$

$$
b^2 - i\beta b = 1 - \frac{1}{i\beta}b
$$

$$
b^2 - \left(i\beta - \frac{1}{i\beta}\right)b - 1 = 0
$$

$$
(b - i\beta)\!\left(b + \frac{1}{i\beta}\right) = 0
$$

$b = i\beta$를 선택하면 $a_{00}(a_{00} - i\beta a_{01}) = 1 \implies i\beta a_{01}(i\beta a_{01} - i\beta a_{01}) = 0 \neq 1$ → 모순 발생.

$b = -\dfrac{1}{i\beta}$를 선택하면, $a_{00} = \dfrac{i}{\beta}a_{01}$ 대입 시:

$$
a_{00}(a_{00} - i\beta a_{01}) = 1 \implies a_{01}^2\!\left(-\frac{1}{\beta^2} + 1\right) = 1
$$

$$
a_{01}^2 = \frac{1}{1 - \frac{1}{\beta^2}} = \frac{-\beta^2}{-\beta^2 + 1}
$$

**Lorentz factor 정의:**

$$
\gamma = \frac{1}{\sqrt{1-\beta^2}}
$$

따라서 $a_{01} = i\beta\gamma$.

나머지 값들도 순서대로 대입하면:

$$
a_{01} = -i\beta\gamma, \quad a_{00} = \gamma, \quad a_{11} = \gamma, \quad a_{10} = i\beta\gamma
$$

> [!question] $a_{11}$과 $a_{10}$의 부호가 동시에 바뀌어도 수학적으로는 문제 없다. 이러면 안 될 거 같은데?

**올바른 부호 결정:**

$a_{01} = i\beta\gamma$로 넘어간 것이 문제였다. 
$a_{01} = -i\beta\gamma$, $a_{00} = \gamma$로 두어 $a_{00} > 0$을 지켜야 했다.

또 $a_{11} > 0$이어야 말이 되므로, **진짜 답**은:

$$
\begin{cases}
a_{01} = -i\beta\gamma \\
a_{00} = \gamma \\
a_{11} = \gamma \\
a_{10} = i\beta\gamma
\end{cases}
$$

**최종 Lorentz Transformation:**

$$
\begin{cases}
X_0' = \gamma X_0 - i\beta\gamma X_1 \\
X_1' = i\beta\gamma X_0 + \gamma X_1 \\
X_2' = X_2 \\
X_3' = X_3
\end{cases}
$$

$X_0 = ict$ 를 다시 넣으면:

$$
\begin{cases}
t' = \gamma t - \dfrac{\beta}{c}\gamma x \\
x' = -V\gamma t + \gamma x
\end{cases}
$$

**$V \ll c$ 극한 확인:** $\beta \to 0$, $\gamma \to 1$이면 $t' = t$, $x' = -Vt + x$ → 갈릴레이 변환 환원. 이제야 정확하게 변환이 이루어졌다.

---

## Boost와 Hyperbolic Function 표현

**Boost $\zeta$의 정의:** $\tanh\zeta = \dfrac{V}{c}$

이러면 $\beta$와 $\gamma$의 관계를 hyperbolic function으로 나타낼 수 있다:

$$
1 = \cosh^2\zeta - \sinh^2\zeta
$$

$$
\gamma = \frac{1}{\sqrt{1-\beta^2}} = \frac{\cosh\zeta}{\sqrt{\cosh^2\zeta - \sinh^2\zeta}} = \cosh\zeta
$$

$$
\begin{cases}
\beta = \tanh\zeta \\
\gamma = \cosh\zeta \\
\gamma\beta = \sinh\zeta
\end{cases}
\qquad
\begin{cases}
X_0' = -\cosh\zeta\,X_0 + i\sinh\zeta\,X_1 \\
X_1' = i\sinh\zeta\,X_0 + \cosh\zeta\,X_0
\end{cases}
$$

실제 좌표로 쓰면:

$$
\begin{cases}
(ct') = (ct)\cosh\zeta - x\sinh\zeta \\
x' = -(ct)\sinh\zeta + x\cosh\zeta
\end{cases}
$$

hyperbolic function이란 점에서 다르긴 하지만, 마치 **회전 변환**처럼 생겼다.

## Lorentz transform matrix

$$
A =
\begin{pmatrix}
\cosh\zeta & -\sinh\zeta & 0 & 0 \\
-\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
내부에 들어가는 원소가 삼각함수가 아니라 하이퍼볼릭 삼각함수인 만큼, 그의 역변환은 pesudo-orthogonal하다. 
$\cosh^2\zeta - \sinh^2\zeta = 1$임을 이용해 찾아보면, 
$$
A^{-1} =
\begin{pmatrix}
\cosh\zeta & \sinh\zeta & 0 & 0 \\
\sinh\zeta & \cosh\zeta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

---

## Four Vectors

대학원에서 배우는 개념인 four vector를 소개한다.

**Four Vector $\mathbb{A}$**: $(A_0, A_1, A_2, A_3)$ → Lorentz transform property를 따르는 시공간 속 벡터.

> **notation:** 앞으로 4-vector는 볼드체로 쓰고, 3-vector는 $\vec{A}$ 화살표 기호를 쓴다.

원래 우리가 알던 3-dimension vector: $\vec{X}:(x,y,z)$ → orthogonal transformation property

> [!question] four vector 공간과 $\mathbb{R}^4$가 같지 않겠지? light cone 밖에는 four vector가 정의 안 되어야 할 것 같다.

$\vec{\beta} = \dfrac{1}{c}\vec{V}$라고, 3-vector를 정의.

4-vector $\mathbb{A}$의 일부, spatial element만 분리해 3-vector $\vec{A} = (A_1, A_2, A_3)$

**Generalized Lorentz Transform:**

$$
\begin{cases}
A_0' = \gamma(A_0 - \vec{\beta}\cdot\vec{A}) \\
A_\parallel' = \gamma(- \beta A_0 + A_\parallel ) \\
A_\perp' = A_\perp
\end{cases}
$$

이때, $A_\parallel$은 $\vec{V}$에 평행, $A_\perp$는 $\vec{V}$에 직교하는 성분.

> [!question] $A_\parallel' = \gamma(A_\parallel - \beta A_0)$에서 스칼라 $\beta$는 $\vec{\beta}$의 크기겠지? 그래야 하는데?

**Invariance:**

$$
A_0'^2 - |\vec{A}'|^2 = A_0^2 - |\vec{A}|^2
$$

**Scalar product invariance:**

$$
A_0' B_0' - \vec{A}'\cdot\vec{B}' = A_0 B_0 - \vec{A}\cdot\vec{B}
$$

---

## Light Cone

고수님이 교과서 보라고 하심. 이미 아는 내용이다.


![[Pasted image 20260529122806.png|289]]

두 사건 $P_1(t_1, \vec{x}_1)$, $P_2(t_2, \vec{x}_2)$가 있을 때, 시공간에서 사건 사이 거리를:

$$
S_{12}^2 = c^2(t_1 - t_2)^2 - |\vec{x}_1 - \vec{x}_2|^2
$$

로 정의.

- **Case 1)** $S_{12}^2 > 0$ : $c^2(t_1-t_2)^2 > |\vec{x}_1-\vec{x}|^2$
  Light cone 내부에서 일어나는, 인과적으로 연결할 수 있는 두 사건. **time like separation**이라 부른다.

- **Case 2)** $S_{12}^2 < 0$ : $c^2(t_1-t_2)^2 < |\vec{x}_1-\vec{x}|^2$
  인과적으로 이어질 수 없는, 거의 동시간에 다른 공간에서 일어나는 독립 사건. **space like separation**이라 부른다.

- **Case 3)** $S_{12}^2 = 0$ : $c^2|t_1-t_2|^2 = |\vec{x}_1-\vec{x}_2|^2$
  이건 빛의 경로가 있는 사건. **light like separation**이라 한다.

---

## Proper Time
![[Pasted image 20260603172349.png]]
- 멈춘 coordinate $K$에서 흐른 시간: $dt$
- 움직인 coordinate $K'$에서 흐른 시간: $dt'$ → 이게 **proper time**이다.

$$
c^2dt^2 = c^2dt'^2 + dx^2 + dy^2 + dz^2
$$

$$
dt' = dt\sqrt{1 - \frac{dx^2+dy^2+dz^2}{c^2 dt^2}} = dt\sqrt{1-\beta^2(t)} = \frac{dt}{\gamma(t)}
$$

$$
\boxed{\tau' = \int_{t_1}^{t_2} dt\sqrt{1-\beta^2(t)}}
$$

> [!question] 왜 앞서 본 변환식 $t' = \gamma t - \dfrac{\beta}{c}\gamma x$과 결과가 반대처럼 보이나?

---

## Relativistic Doppler Shift

**phase of wave is invariant:** $\phi = \omega t - \vec{k}\cdot\vec{x} = \omega' t' - \vec{k}'\cdot\vec{x}'$

**wave number 4-vector:** $\mathbb{k} = (k_0, \vec{k})$

$k_0 = \omega/c$ 이다. 신기하다!
phase $\phi = \omega t - \vec{k}\cdot\vec{x}$를 4-vector 내적 형태로 쓰려면 시간 성분의 짝이 $\omega/c$여야 하기 때문.

> [!tip] Glia의 보충 설명 — $k_0 = \omega/c$인 이유
> 
> 위상 $\phi = \omega t - \vec{k}\cdot\vec{x}$는 Lorentz 불변량이다. 이것을 4-vector 내적으로 쓰면:
> 
> $$
> \phi = k_\mu X^\mu = k_0 X_0 - \vec{k}\cdot\vec{x}
> $$
> 
> $X_0 = ct$ (교과서 표기)이므로 $k_0 \cdot ct = \omega t$가 되려면 $k_0 = \omega/c$.
> 
> **진공에서 내적 불변성 확인:** 진공의 분산 관계 $\omega = c|\vec{k}|$를 쓰면:
> 
> $$
> k_\mu k^\mu = k_0^2 - |\vec{k}|^2 = \frac{\omega^2}{c^2} - |\vec{k}|^2 = 0
> $$
> 
> 광자의 4-momentum은 **null vector** (light-like). 4-velocity의 $U_\mu U^\mu = c^2$에 대응하는 광자 버전.

**Lorentz transform:**

$$
\begin{cases}
k_0' = \gamma(k_0 - \vec{\beta}\cdot\vec{k}) \\
k_\parallel' = \gamma(k_\parallel - \beta k_0) \\
k_\perp' = k_\perp
\end{cases}
$$

$$
\tan\theta' = \frac{|k_\perp'|}{k_\parallel'} = \frac{\sin\theta}{\gamma(\cos\theta - \beta)}
$$

> [!question] 유도 어떻게?

$$
\omega' = \gamma\omega(1 - \beta\cos\theta)
$$

여기서 $\theta$는 빛의 진행방향이 $V$와 이루는 각도.

---

## 4-Velocity

$k'$에서 $P$가 $\vec{u}'(u', 0, \phi)$으로 움직일 때.

> 책에서 왜 봐라!
>
> Transformation of velocities shows that they are not 4-vector.
> 하지만 $(\gamma_u C, \gamma_u \vec{u})$는 4-vector이다.

$\tau$가 proper time일 때:

$$
V_0 \equiv \frac{dX_0}{d\tau} = \frac{dt}{d\tau}\frac{dX_0}{dt} = \gamma_u c
$$

$$
\vec{V} \equiv \frac{d\vec{x}}{d\tau} = \frac{dt}{d\tau}\frac{d\vec{x}}{dt} = \gamma_u \vec{u}
$$

---

## 에너지와 운동량

$$
E = \gamma m_0 c^2, \quad P_0 = \frac{E}{c} \to \text{왜지?} \quad m_0: \text{rest mass}
$$

$$
\vec{p} = \gamma m_0 \vec{u}
$$

$(P_0, \vec{P})$도 four-vector다.

# 궁금한 내용

> [!question] Galilean transform에서 Newton's law 불변 논리
> $|x_i' - x_j'| = |x_i - x_j|$이므로 퍼텐셜이 같아지고 뉴턴 방정식이 불변함. 실제로는 거리 자체가 불변이라는 사실을 활용.

> [!question] $\partial_t^2$ 계산 시 operator product 주의
> $(\partial_{t'} + V_i\partial_{i'})(\partial_{t'} + V_i\partial_{i'}) = \partial_{t'}^2 + 2V_i\partial_{i'}\partial_{t'} + V_iV_j\partial_{i'}\partial_{j'}$가 맞는 계산. operator라서 교환법칙이 성립하므로 $2\partial_{t'}\mathbf{V}\cdot\nabla'$ 형태로 쓰는 것도 동일.

> [!question] proper time이 변환식 $t' = \gamma t - \frac{\beta}{c}\gamma x$와 반대처럼 보이는 이유
> 미답변 — 두 상황의 물리적 설정이 다름. 변환식은 한 사건에 대해 두 좌표계의 좌표를 연결하는 것이고, proper time은 한 입자의 worldline을 따라 적분하는 것.

> [!question] $\beta$의 의미 (Generalized Lorentz Transform)
> $A_\parallel' = \gamma(A_\parallel - \beta A_0)$에서 $\beta = |\vec{\beta}| = V/c$는 스칼라.

# AI의 보충 설명

> [!tip] Glia의 보충 설명 — 왜 일반 속도 $\vec{u}$는 4-vector가 아닌가?
> 
> 강의에서 "책에서 왜 봐라!"라고 넘어간 부분. 교과서(Jackson 11.4)의 설명을 정리한다.
> 
> **핵심 이유:** 보통 속도 $u_i = dx_i/dt$를 정의할 때 나누는 $dt$는 **Lorentz 불변량이 아니다.** 시간 $t$는 좌표계마다 다르게 변환되기 때문.
> 
> **속도 변환 법칙 유도 (Jackson 11.18 이용):**
> 
> $K'$가 $K$에 대해 $x_1$ 방향으로 속도 $v = c\beta$로 움직일 때, 좌표 미분의 Lorentz 변환은:
> 
> $$
> \begin{cases}
> dx_0 = \gamma_v(dx_0' + \beta\,dx_1') \\
> dx_1 = \gamma_v(dx_1' + \beta\,dx_0') \\
> dx_2 = dx_2' \\
> dx_3 = dx_3'
> \end{cases}
> $$
> 
> 속도 성분은 $u_i = c\,dx_i/dx_0$, $u_i' = c\,dx_i'/dx_0'$으로 정의된다. 이를 이용하면:
> 
> $$
> u_\parallel = \frac{u_\parallel' + v}{1 + \dfrac{\mathbf{v}\cdot\mathbf{u}'}{c^2}}, \qquad \mathbf{u}_\perp = \frac{\mathbf{u}_\perp'}{\gamma_v\!\left(1 + \dfrac{\mathbf{v}\cdot\mathbf{u}'}{c^2}\right)}
> $$
> 
> 이 변환식이 Lorentz 변환 (11.22)의 형태와 **다른 것**을 확인할 수 있다. 분모에 $(1 + \mathbf{v}\cdot\mathbf{u}'/c^2)$가 붙어 있어서 단순한 선형 변환이 아니기 때문에, $\vec{u}$는 4-vector가 아니다.
> 
> **극한 확인:** $u', v \ll c$이면 분모 $\to 1$이 되어 갈릴레이 변환 $\mathbf{u} = \mathbf{u}' + \mathbf{v}$로 환원된다. 또한 $u' = c$이면 $u = c$도 확인 가능 (광속 불변).

> [!tip] Glia의 보충 설명 — 4-velocity가 진짜 4-vector인 이유
> 
> 문제는 $dt$가 불변이 아닌 것이었다. 해결책은 불변량인 **proper time $\tau$로 나누는 것**.
> 
> $\gamma_v$, $\gamma_u$, $\gamma_{u'}$를 각각 $\mathbf{v}$, $\mathbf{u}$, $\mathbf{u}'$에 대한 로런츠 인수라 하면, Jackson (11.34)에 따라:
> 
> $$
> \gamma_u = \gamma_v \gamma_{u'}\!\left(1 + \frac{\mathbf{v}\cdot\mathbf{u}'}{c^2}\right)
> $$
> 
> 이 관계를 속도 변환식 (11.31)에 대입하면 (Jackson 11.35):
> 
> $$
> \gamma_u u_\parallel = \gamma_v(\gamma_{u'} u_\parallel' + v\gamma_{u'}), \qquad \gamma_u \mathbf{u}_\perp = \gamma_{u'}\mathbf{u}_\perp'
> $$
> 
> 이것은 $(x_0, \mathbf{x})$의 Lorentz 변환인 (11.22)와 **완전히 같은 형태**다. 따라서 네 양:
> 
> $$
> \boxed{U^\mu = (U_0,\, \mathbf{U}) \equiv (\gamma_u c,\, \gamma_u \mathbf{u})}
> $$
> 
> 는 4-vector를 이룬다. 이것이 **4-velocity**다.
> 
> Proper time $\tau$를 이용한 동등한 표현 (Jackson 11.36):
> 
> $$
> U_0 \equiv \frac{dX_0}{d\tau} = \frac{dt}{d\tau}\frac{dX_0}{dt} = \gamma_u c, \qquad \mathbf{U} \equiv \frac{d\mathbf{x}}{d\tau} = \frac{dt}{d\tau}\frac{d\mathbf{x}}{dt} = \gamma_u \mathbf{u}
> $$
> 
> $dt/d\tau = \gamma_u$임을 이용했다 (proper time 정의에서).
> 
> **4-velocity의 내적 불변성 확인:**
> 
> $$
> U_\mu U^\mu = U_0^2 - |\mathbf{U}|^2 = \gamma_u^2 c^2 - \gamma_u^2 u^2 = \gamma_u^2 c^2(1-\beta_u^2) = c^2
> $$
> 
> 즉 4-velocity의 크기는 항상 $c$로 일정하다. 모든 관성계에서 불변.

> [!tip] Glia의 보충 설명 — 4-momentum과 에너지
> 
> 강의 필기의 $E = \gamma m_0 c^2$, $P_0 = E/c$가 왜 성립하는지.
> 
> 4-velocity에 rest mass $m_0$를 곱하면 **4-momentum** $p^\mu$를 얻는다:
> 
> $$
> p^\mu = m_0 U^\mu = (m_0 \gamma_u c,\; m_0 \gamma_u \mathbf{u}) = \left(\frac{E}{c},\; \mathbf{p}\right)
> $$
> 
> 여기서 비상대론적 극한 $u \ll c$에서 $\gamma_u \to 1$이면 $\mathbf{p} = m_0\mathbf{u}$로 뉴턴 운동량과 일치한다.
> 
> 시간 성분 $p_0 = m_0\gamma_u c$에서 에너지를 읽으려면:
> 
> $$
> p_0 = m_0\gamma_u c = \frac{m_0 c}{\sqrt{1-u^2/c^2}} \approx \frac{m_0 c}{1 - u^2/(2c^2)} \approx m_0 c + \frac{m_0 u^2}{2c}
> $$
> 
> $cp_0 \approx m_0 c^2 + \frac{1}{2}m_0 u^2$ → 정지 에너지 + 운동 에너지. 따라서:
> 
> $$
> E \equiv cp_0 = \gamma_u m_0 c^2, \qquad P_0 = \frac{E}{c}
> $$
> 
> 4-momentum의 내적 불변성:
> 
> $$
> p_\mu p^\mu = \frac{E^2}{c^2} - |\mathbf{p}|^2 = m_0^2 c^2
> $$
> 
> 이를 정리하면 유명한 **에너지-운동량 관계식**: $E^2 = (m_0 c^2)^2 + (pc)^2$

# 연관 학습 노트

- [[ED lecture note - Circular Aperture Diffraction and Optical Theorem]]
- [[Mini Note - Lorentz Transform Derivation (교과서 표기)]]

# References

Jackson Classical Electrodynamics, Chapter 11

# 다음 강의

[[ED lecture note - Covariant Formulation of Electrodynamics]]
# 필기 원본

![[ED_12thweek_1.pdf]]
