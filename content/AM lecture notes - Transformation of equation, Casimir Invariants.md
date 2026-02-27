---
title: AM lecture notes - Transformation of Equation, Casimir Invariants
date: 2026-02-26
subject: physics
tags:
  - study
  - lecture_note
class: study_lecture
---
[[Analytical Mechanics]]

이것은 강의를 듣고 적은 필기입니다. 
정리가 안 되어 있고, 개인적인 생각이 섞여 있을 수도 있습니다. 

# 지난 강의
[[AM lecture notes - Galilean transformation]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 

# 필기 내용

지난 강의에 이어서 Galilean fransformation을 다룬다. 
## Boost Generator $\vec{K}$
지난 강의의 notation하고 달라진 부분. 
Boost generator로 $\vec{K}$를 쓴다.

$$
G = \exp{i(Hs + \vec{P}\cdot\vec{a} + \vec{L}\cdot\vec{\theta} + \vec{K}\cdot\vec{u})}
$$

$$
\begin{pmatrix} X \\ t \\ 1 \end{pmatrix} \rightarrow \begin{pmatrix} X' \\ t' \\ 1 \end{pmatrix} = \begin{pmatrix} R & u & a \\ 0 & 1 & s \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} X \\ t \\ 1 \end{pmatrix}
$$
위 transform matrix를 쉽게 외우는 방법. 
ㄱ자 방향으로 기호를 읽어서 Ruas 루아스라고 읽으면 된다. 
순서대로 totation, boost veolity, spatial translation, tima translation의 변수이다. 

$G$가 사실은 5×5 matrix다.
$$
G = \mathbb{I} + i(Hs + \vec{P}\cdot\vec{a} + \vec{L}\cdot\vec{\theta} + \vec{K}\cdot\vec{u})
$$

$\begin{pmatrix} x \\ t \\ 1 \end{pmatrix}$에서 **1의 의미는?** → 차원 확장(embedding)을 가능하게 하기 위함이다.

이렇게 transform 되는 것을 **관성계**라고 한다.
다른 언급: **물리에서 모든 것은 transformation property로 정의된다.**
스칼라, 벡터, 수도 벡터도 이렇게 정의했지...


$$
F = m\frac{d^2X}{dt^2} = -\frac{\partial V(x)}{\partial x}
$$
이걸 $G$로 변환하려면, 그냥 $(X, t) \rightarrow (X', t')$를 넣는다.

$$
F' = m\frac{d^2X'}{dt'^2} = -\frac{\partial V(X')}{\partial x'}
$$
포텐셜만 transform에 의해 변하지 않는다면, 뉴턴 운동방정식은 Galilean transformation에 대해 불변이다. 왜 위 식이 성립하는지는 아래에서 따로 자세히 계산했다. 


> **글리아와 논의 (2026-02-26)**
> 이렇게 $(X,t) \rightarrow (X',t')$를 대입하는 건 맞다. 그리고 원래 식과 같은 형태가 나오는 것 자체가 **갈릴레이 대칭성의 의미**다 — 변환 후에도 운동방정식의 형태가 보존된다.
>
> 단, $V(X') = V(X)$가 되려면 퍼텐셜이 갈릴레이 변환에 불변이어야 한다. 이건 항상 성립하진 않는다.
>
> 아래에 나오는 스칼라 함수 $f$에 operator $G$를 작용시키는 것과는 다른 층위의 이야기다:
> - **운동방정식에 좌표 대입** → 물리 법칙의 불변성 확인 (물리적 내용)
> - **함수에 operator $G$ 작용** → 그 대칭성을 함수 공간에서 수학적으로 표현하는 방법 (표현론의 세팅)
>
> 같은 대칭성을 다루지만 접근하는 층위가 다르다.

어떤 스칼라 함수 $f(t, x)$에 대해 갈릴레이 변환을 한다면

$$
Gf(t,x) = f(t', x') = f(t+s,\ Rx + ut + a)
\triangleq f(t-s,\ R^{-1}(x - u(t-s) - a))
$$

> ⚠️ **notation 주의 (글리아와 논의, 2026-02-26)**
> 수업 들을 때 위 식을 판서하는 동안 맥락을 놓쳐버렸다. 
> 아마도 active transform하고 passive transform에 대해 설명하던 중 이었던 것 같다. 
> 
> 위 식은 표기가 부정확하다. 혼란스러웠다. 
> 좌변과 우변이 같은 $f$에 다른 인자를 넣은 것처럼 보이는데, 그러면 $t+s = t-s$가 되어야 해서 말이 안 된다.
>
> 정확하게 쓰면:
> - $f(t+s, Rx+ut+a)$는 $f$를 변환된 좌표에 직접 대입한 것
> - $f(t-s, R^{-1}(x-u(t-s)-a))$는 operator $(Gf)$를 원래 좌표에서 평가한 것, 즉 $f(G^{-1}(t,x))$
>
> 두 식을 제대로 구분하면:
> $$
> (Gf)(t, x) \ \equiv \ f(G^{-1}(t,x)) = f\!\left(t-s,\ R^{-1}(x - u(t-s) - a)\right)
> $$
> $$
> f(G(t,x)) = f(t+s,\ Rx+ut+a)
> $$
> 이 둘은 다른 식이다. 
> Operator가 함수 공간에 작용할 때의 표준 정의는 $(Gf)(x) = f(G^{-1}x)$이며, 이렇게 해야 그룹 구조(연속 적용 시 순서)가 보존된다.

각 변수에 대응되는 generator 표현:

$$
H = \frac{\partial}{\partial t}, \quad P_i = \frac{\partial}{\partial x_i}
$$

$$
L_i =  \varepsilon_{ijk} x_j \frac{\partial}{\partial x_k}
$$
이 식은 determinant로 쉽게 나타낼 수 있다. 
$$
L = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\
x_1 & x_2 & x_3 \\
\frac{\partial}{\partial x_1} & \frac{\partial}{\partial x_2} & \frac{\partial}{\partial x_3}
\end{vmatrix}
$$

$$
K_i = t\frac{\partial}{\partial x_i}
$$

---

## Casimir Invariants

갈릴레이 변환과 로렌츠 변환의 차이는 시간과 공간의 독립성 여부이다.
변환에 불변하는 걸 **Casimir invariant**라고 한다.
Transform이 만드는 모든 generator에 대해 commute하는 연산자. 
이건 

**Casimir invariants in Gal(3):**

$$
C_1 = M = m\mathbb{I} \quad (\text{mass})
$$

$$
C_2 = U = H - \frac{1}{2m}|P|^2 \quad (\text{innre energy})
$$

$$
\vec{S} = \vec{L} - \frac{1}{m}\vec{K}\times\vec{P} \quad (\text{spin!})
$$

$$
C_3 = |\vec{S}|^2
$$

이것이 뉴턴의 운동방정식이다.
자세한 내용은 별도 노트에. 
[[Casimir Invariants]]

---

## 예시: 갈릴레이 변환을 하면 무슨 일이?
수업 중 다룬 예시시
1차원 Maxwell equation → wave equation:

$$
\frac{\partial^2 \psi(x,t)}{\partial x^2} - \frac{1}{v^2}\frac{\partial^2 \psi(x,t)}{\partial t^2} = 0
$$

$\psi$는 파동의 변위.

Boost 변환: $x' = x + ut$, $t' = t$

(모든 프라임이 붙은 연산자에 대해서)

$$
\frac{\partial}{\partial x} = \frac{\partial}{\partial x'}
$$

$$
\frac{\partial}{\partial t} = u\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}
$$

대입하면:

$$
\left(1 - \frac{u^2}{v^2}\right)\frac{\partial^2\psi}{\partial x'^2} - \frac{1}{v^2}\frac{\partial^2\psi}{\partial t'^2} - \frac{2u}{v^2}\frac{\partial^2\psi}{\partial x'\partial t'} = 0
$$

general solution:

$$
\psi(x,t) = Af(x - vt) + Bg(x + vt)
$$

변환된 좌표의 solution:

$$
\psi(x',t') = Af(x' - (v-u)t') + Bg(x' + (v+u)t')
$$

이것을 보면 파동의 **속도가 변한 것**을 알 수 있다. 
이걸 빛에 적용하면 빛의 속도가 바뀌어야 하는데? 그렇지 않게 만드는 게 **로렌츠 변환**이다.

---

## 1D Boost Transform이 적용되었을 때 불변인 방정식과 아닌 방정식
수업 내용 외, 직접 풀어봤다. 
![[Pasted image 20260226142333.png]]
**Boost 변환:**

$$
x' = x + ut, \quad t' = t
$$

**편미분 연산자 변환 (연쇄법칙):**

$$
\frac{\partial}{\partial x} = \frac{\partial x'}{\partial x}\frac{\partial}{\partial x'} + \frac{\partial t'}{\partial x}\frac{\partial}{\partial t'} = \frac{\partial}{\partial x'}
$$

$$
\frac{\partial}{\partial t} = \frac{\partial x'}{\partial t}\frac{\partial}{\partial x'} + \frac{\partial t'}{\partial t}\frac{\partial}{\partial t'} = u\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}
$$

**열방정식에 적용:**

$$
\frac{\partial T}{\partial t} = \kappa\frac{\partial^2 T}{\partial x^2}
$$

$$
\left(u\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}\right)T = \kappa\frac{\partial^2 T}{\partial x'^2}
$$

$$
\underbrace{u\frac{\partial T}{\partial x'}}_{\text{additional term }} + \frac{\partial T}{\partial t'} = \kappa\frac{\partial^2 T}{\partial x'^2}
$$

Additional term $u\frac{\partial T}{\partial x'}$이 생겨서 원래 식과 형태가 달라진다.
**열방정식은 갈릴레이 불변이 아니다.**

**Free space 뉴턴 방정식에 적용:**

$$
m\frac{d^2x}{dt^2} = 0
$$

$$
m\left(u\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}\right)\left(u\frac{\partial}{\partial x'} + \frac{\partial}{\partial t'}\right)x' = 0
$$

전개하면:

$$
m\left(u\frac{\partial u}{\partial x'} + \frac{\partial u}{\partial t'} + u\frac{\partial^2 x'}{\partial t'\partial x'} + \frac{\partial^2 x'}{{\partial t'}^2}\right) = 0
$$
$$
m\left(u\cancelto0{\frac{\partial u}{\partial x'}} + \cancelto0{\frac{\partial u}{\partial t'}} + u\cancelto0{\frac{\partial^2 x'}{\partial t'\partial x'}} + \frac{\partial^2 x'}{{\partial t'}^2}\right) = 0
$$
각 항이 사라지는 이유:
- $\frac{\partial u}{\partial x'} = 0$, $\frac{\partial u}{\partial t'} = 0$ → $u$가 상수이므로
- $\frac{\partial^2 x'}{\partial t'\partial x'} = \frac{\partial}{\partial t'}\left(\frac{\partial x'}{\partial x'}\right) = \frac{\partial}{\partial t'}(1) = 0$ → $x'$을 $x'$으로 미분하면 1, 이를 다시 $t'$으로 미분하면 0

따라서:

$$
m\frac{\partial^2 x'}{\partial t'^2} = 0 \quad \checkmark
$$

원래 식과 **형태가 완전히 같다. 뉴턴 방정식은 갈릴레이 불변이다.**

---
다시 수업 내용으로 돌아와서

[[AM lecture note - Lagrangian mechanics]]
# 궁금한 내용

### 'p orbital은 SO(3) group에 irreducible하다. '의 의미? Irreducible이 뭐지?

### $K_i = t\frac{\partial}{\partial x_i}$ 라는 게 있다. t하고 x 위치를 바꾼 $x_i\frac{\partial}{\partial t}$ 같은 연산자도 상상할 수 있지 않을까? 있다면 이건 어떤 symmetry를 불러오는가?



# AI의 보충 설명


# 연관 학습 노트

[[라그랑지안과 해밀토니안의 르장드르 변환 관계]]
[[Lagrangian Mechanics]]
[[Casimir Invariants]]

# References

Tong의 Lecture note
[[1 Newton’s Laws of Motion.pdf]]
[[2 The Lagrangian Formalism.pdf]]

# 다음 강의