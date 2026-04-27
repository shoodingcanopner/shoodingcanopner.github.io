---
title: AM assignment - Hypergeometric function quantization
date: "2026-04-24"
subject: physics
tags:
  - study
  - assignment
class: study_assignment
---

> [!attention] 중간고사 대체 과제
> 이것은 [[Analytical Mechanics]] 중간고사 대체 과제 풀이 노트입니다.
> 마감: 2026-04-26 (일요일)

# 최종본 파일
![[2026_PHYS501_Midterm_Paper_ShinjiKim_20262182.pdf]]

# 표지

2026 PHYS501 midterm paper

student name: 김신지

student ID: 20262182

date: 2026.04.26.

# 문제 원문
> 1. Find two coupled 1st order ordinary differential equations from the 2nd order ordinary differential equation of the hypergeometric function 
> $$
> t(1-t)\frac{d^2y}{dt^2} + \left[c - (a+b+1)t\right]\frac{dy}{dt} - ab\,y = 0
> $$
> (1) Find the corresponding Lagrangian to give the 2 nd order hypergeometric equation via the Euler Lagrange equation of motion.
> (2) Performing the Legendre transformation, find the corresponding Hamiltonian and the Hamiltonian equation of motion
> (3) Through the canonical transformation, find the Hamilton Jacobi equation for the hypergeometric equation.
> 
> 2. Quantize the hypergeometric equation.
> 
> (1) Find the corresponding Schrodinger equation for the hypergeometric equation Show that the semiclassical approximation ( ℏ→0) reduces this Schrodinger equation to the above Hamilton Jacobi equation. Can you find the eigenfunctions? You can use the Mathematica.
> (2) Find the corresponding Heisenberg equation of motion for the hypergeometric equation Can you introduce creation & annihilation operators to diagonalize the Hamiltonian operator? Construct the Hilbert space. 
> (3) Find the path integral formulation to show that it is a solution of the above Schrodinger equation Can you perform the path integral explicitly, certainly possible in principle?


---

# 풀이

## 1-(1) 라그랑지안 찾기

### 전략: Sturm-Liouville 변환

식 (0)에서 바로 라그랑지안을 찾는 것은 어렵다. 따라서 먼저 **Sturm-Liouville Differential Equation** 형태로 변환하여 미분 연산자의 자기수반성을 확보한다.

Sturm-Liouville DE는 아래와 같은 형태이다:

$$
\frac{d}{dx}\left[m(x)\frac{dy}{dx}\right] - g(x)y(x) + \lambda r(x)y(x) = 0 \quad \cdots (1)
$$

이때, $\lambda$는 고유값(eigenvalue), $r(x)$는 가중 함수(weighting function)이다.

일반적인 2차 ODE를 Sturm-Liouville 형태로 변환하는 방법을 먼저 알아보고, 초기하 함수를 다뤄보자. 
일반적인 2차 ODE가 다음과 같이 주어졌을 때:

$$
\frac{d^2y}{dx^2} + P(x)\frac{dy}{dx} + Q(x)y = 0 \quad \cdots (2)
$$

이것을 식 (1)의 형태로 변환하는 계수 $m(x)$를 구해보자. 

식 (1)을 전개하면:

$$
m\frac{d^2y}{dx^2} + \left(\frac{dm}{dx}\right)\frac{dy}{dx} - gy + \lambda ry = 0 \quad \cdots (4)
$$

식 (2)의 양변에 $m$을 곱하면:

$$
m\frac{d^2y}{dx^2} + mP\frac{dy}{dx} + mQy = 0 \quad \cdots (5)
$$

식 (4)와 (5)가 같아야 하므로, $\frac{dy}{dx}$ 항을 비교하면:

$$
mP = \frac{dm}{dx}
$$

양변을 정리 후 적분하면:

$$
\int P(x)\,dx = \int \frac{1}{m}\,dm = \ln(m(x)) \quad \cdots (6)
$$

$$
\boxed{m(x) = \exp\!\left(\int P(x)\,dx\right)} \quad \cdots (7)
$$

이렇게 $m$은 $P$로 완전히 결정된다.

또한 $y$ 항을 비교하면:

$$
Q = \frac{\lambda r - g}{m} \quad \cdots (8)
$$

연산자를 정의하자:

$$
L(y) = \frac{d}{dx}\left[m\frac{dy}{dx}\right] - gy + \lambda ry = 0 \quad \cdots (9)
$$

$$
D(y) = -\frac{d}{dx}\left[m\frac{dy}{dx}\right] + gy = 0 \quad \cdots (10)
$$

$$
L(y) = \left[-D + \lambda r\right]y = 0 \quad \cdots (11)
$$

결국 $L(y) = 0$은 $D(y) = \lambda r y$와 동치이다. $y$는 $D$ 연산에 대한 고유함수, $\lambda$는 고유값, $r$은 가중 함수이다. $D$는 자기수반 연산자이다.
식 10을 보면 오일러-라그랑주 방정식과 비슷한 형태임을 알 수 있다. 

### 초기하 방정식의 Sturm-Liouville 변환

식 (0)을 정리하면:

$$
\frac{d^2y}{dt^2} + \frac{c-(a+b+1)t}{t(1-t)}\frac{dy}{dt} - \frac{ab}{t(1-t)}y = 0 \quad \cdots (12)
$$

식 (2)와 비교하면:

$$
P(t) = \frac{c-(a+b+1)t}{t(1-t)}, \quad Q(t) = -\frac{ab}{t(1-t)} \quad \cdots (13)
$$

$m(t)$를 구하기 위해 $P(t)$를 적분한다:

$$
\int P(t)\,dt = \int \frac{c}{t(1-t)}\,dt - \int \frac{a+b+1}{1-t}\,dt
= c\ln t - c\ln(1-t) + (a+b+1)\ln(1-t) \quad \cdots (14)
$$

식 (7)을 이용해 $m(t)$를 구한다:

$$
m(t) = t^c \cdot (1-t)^{-c} \cdot (1-t)^{a+b+1} = t^c(1-t)^{a+b-c+1} \quad \cdots (15)
$$

식 (12)의 양변에 $m(t)$를 곱해서 식 (4)의 형태로 맞춰준다. 

$$
m(t)\frac{d^2y}{dt^2} + m(t)\frac{c-(a+b+1)t}{t(1-t)}\frac{dy}{dt} - m(t)\frac{ab}{t(1-t)}y = 0 \quad \cdots (16)
$$

$\frac{dm}{dt}$를 계산해 보면:

$$
\frac{dm}{dt} = \frac{c}{t}m + \frac{-a-b+c-1}{1-t}m = \frac{c-(a+b+1)t}{t(1-t)}m \quad \cdots (17)
$$

식 (16)과 (17)을 비교하면:

$$
m(t)\frac{d^2y}{dt^2} + m(t)\frac{c-(a+b+1)t}{t(1-t)}\frac{dy}{dt} = m(t)\frac{d^2y}{dt^2} + \frac{dm}{dt}\frac{dy}{dt} = \frac{d}{dt}\left[m\frac{dy}{dt}\right] \quad \cdots (18)
$$

식 (16)을 정리하면 Sturm-Liouville DE가 나온다:

$$
\frac{d}{dt}\left[m\frac{dy}{dt}\right] - ab\,t^{c-1}(1-t)^{a+b-c}\,y = 0 \quad \cdots (19)
$$

$y$ 앞에 붙은 계수를 $g(t)$라고 두면:

$$
g(t) = ab\,t^{c-1}(1-t)^{a+b-c} \quad \cdots (20)
$$

$$
\frac{d}{dt}\left[m\frac{dy}{dt}\right] - g(t)y = 0 \quad \cdots (21)
$$

### 라그랑지안 구성

식 (21)이 어떤 $\mathcal{L}(y, \dot{y}, t)$에 대한 오일러-라그랑주 방정식임을 알아본다.

오일러-라그랑주 방정식을 아래와 같이 표현한다면:

$$
\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{y}} - \frac{\partial \mathcal{L}}{\partial y} = 0 \quad \cdots (22)
$$

식 (21)과 비교하면:

$$
\frac{\partial \mathcal{L}}{\partial \dot{y}} = m(t)\dot{y}, \qquad \frac{\partial \mathcal{L}}{\partial y} = g(t)y \quad \cdots (23)
$$

따라서:

$$
\mathcal{L}(y,\dot{y},t) = \frac{1}{2}m(t)\dot{y}^2 + \frac{1}{2}g(t)y^2\quad \cdots (24)
$$

$m$과 $g$를 대입하면:

$$
\boxed{\mathcal{L}(y,\dot{y},t) = \frac{1}{2}t^c(1-t)^{a+b-c+1}\dot{y}^2 + \frac{1}{2}ab\,t^{c-1}(1-t)^{a+b-c}y^2} \quad \cdots (25)
$$

일반화된 조화진동자(harmonic oscillator)의 형태이다. 단, 질량 $m(t)$와 스프링 상수 $-g(t)$가 모두 시간($t$)에 의존한다.
조화진동자의 방정식과 부호를 맞추기 위해, $k(t) = -g(t)$라고 두고 앞으로 식을 전개한다. 


$$
k(t) = -g(t) = -ab\,t^{c-1}(1-t)^{a+b-c} \quad \cdots (20-a)
$$


$$
\boxed{\mathcal{L}(y,\dot{y},t) = \frac{1}{2}m(t)\dot{y}^2 - \frac{1}{2}k(t)y^2} \quad \cdots (24-a)
$$


---

## 1-(2) 해밀토니안과 운동방정식

### 켤레 운동량

켤레 운동량 $p$를 정의한다:

$$
p = \frac{\partial \mathcal{L}}{\partial \dot{y}} = m(t)\dot{y} = t^c(1-t)^{a+b-c+1}\dot{y} \quad \cdots (26)
$$

라그랑지안을 $p$로 나타내면 ($\dot{y} = p/m(t)$):

$$
\mathcal{L} = \frac{1}{2m(t)}p^2 - \frac{1}{2}k(t)y^2 \quad \cdots (27)
$$

### 르장드르 변환

$$
\mathcal{H}(y,p,t) = p\dot{y} - \mathcal{L} = \frac{p^2}{m(t)} - \left[\frac{1}{2m(t)}p^2 - \frac{1}{2}k(t)y^2\right]
$$

$$
\boxed{\mathcal{H}(y,p,t) = \frac{1}{2}\frac{p^2}{m(t)} + \frac{1}{2}k(t)y^2} \quad \cdots (28)
$$

$m(t)$와 $k(t)$를 명시적으로 대입하면:

$$
\boxed{\mathcal{H}(y,p,t) = \frac{1}{2}t^{-c}(1-t)^{-a-b+c-1}p^2 - \frac{1}{2}ab\,t^{c-1}(1-t)^{a+b-c}y^2} \quad \cdots (29)
$$

조화진동자와 비슷한 꼴이지만, 질량 $m(t)$와 $k(t)$가 모두 $t$에 의존한다.

### 해밀턴 운동방정식

해밀턴 운동방정식:

$$
\dot{p} = -\frac{\partial \mathcal{H}}{\partial y} = -k(t)y, \qquad \dot{y} = \frac{\partial \mathcal{H}}{\partial p} = \frac{p}{m(t)} \quad \cdots (30)
$$

$m(t)$와 $k(t)$를 명시적으로 대입하면:

$$
\begin{cases}
\dot{p} = ab\,t^{c-1}(1-t)^{a+b-c}\,y \\[6pt]
\dot{y} = t^{-c}(1-t)^{-a-b+c-1}\,p
\end{cases} \quad \cdots (31)
$$


---

## 1-(3) 해밀턴-야코비 방정식

### 전략: 생성함수로 해밀토니안을 0으로 만들기

정준변환 $y \to Y$, $p \to X$를 도입한다. 이 변환이 이루어질 때 **type 2 생성함수**이자 액션인 $W(y, X, t)$는 다음을 만족한다:

$$
p = \frac{\partial W}{\partial y}, \qquad Y = \frac{\partial W}{\partial X} \quad \cdots (32)
$$

이 생성함수 $W$에 대해 해밀턴-야코비 방정식은:

$$
\mathcal{H}\!\left(y,\, \frac{\partial W}{\partial y},\, t\right) + \frac{\partial W}{\partial t} = 0 \quad \cdots (33)
$$

이를 만족하는 $W$에 대해 $\dot{Y} = 0$, $\dot{X} = 0$이 된다. 즉 새 좌표에서 운동이 trivial해진다.

### 초기하 방정식의 해밀턴-야코비 방정식

식 (28)에 $p = \frac{\partial W}{\partial y}$를 대입하면:

$$
\frac{1}{2}\frac{1}{m(t)}\left(\frac{\partial W}{\partial y}\right)^2 + \frac{1}{2}k(t)y^2 + \frac{\partial W}{\partial t} = 0 \quad \cdots (34)
$$

$m(t)$와 $k(t)$를 명시적으로 대입하면:

$$
\boxed{\frac{1}{2}t^{-c}(1-t)^{-a-b+c-1}\left(\frac{\partial W}{\partial y}\right)^2 - \frac{1}{2}ab\,t^{c-1}(1-t)^{a+b-c}y^2 + \frac{\partial W}{\partial t} = 0} \quad \cdots (35)
$$

이것이 초기하 방정식에 대응하는 **해밀턴-야코비 방정식**이다.

---

## 2-(1) 슈뢰딩거 방정식과 WKB 극한

### 정준 양자화

정준 양자화의 기본 규칙은 포아송 괄호를 교환자(commutator)로 대응시키는 것이다:

$$
\{y, p\}_{\text{PB}} = 1 \quad \longrightarrow \quad [\hat{y}, \hat{p}]_{\text{DB}} = i\hbar \quad \cdots (36)
$$

$p$는 $y$에 대한 generator이기에, $y$에 대한 미분 연산자이다:

$$
\hat{p} = -i\hbar\frac{\partial}{\partial y} \quad \cdots (37)
$$

이라면, 식 (36)의 commutation relation을 만족한다. $y$에 대한 어떤 함수 $f(y)$에 대해,

$$
[y, \hat{p}]f(y) = -i\hbar\left[y,\frac{\partial}{\partial y}\right]f(y) = -i\hbar\left(y\frac{\partial f}{\partial y} - \frac{\partial}{\partial y}yf(y)\right) = i\hbar f(y)
$$

$$
\therefore\; \left[y,\, -i\hbar\frac{\partial}{\partial y}\right] = i\hbar
$$

### 해밀토니안 연산자와 슈뢰딩거 방정식

고전 역학에서 해밀토니안에 대한 식 (28)에 연산자 $\hat{y}$와 $\hat{p}$를 대입:

$$
\hat{\mathcal{H}} = -\frac{\hbar^2}{2m(t)}\frac{\partial^2}{\partial y^2} + \frac{1}{2}k(t)y^2 \quad \cdots (38)
$$

$m(t)$와 $k(t)$를 넣어 명시적으로 나타내면,

$$
\hat{\mathcal{H}} = -\frac{\hbar^2}{2}t^{-c}(1-t)^{a+b-c+1}\frac{\partial^2}{\partial y^2} - \frac{1}{2}ab\,t^{c-1}(1-t)^{a+b-c}y^2 \quad \cdots (39)
$$

wave function $\Psi(y,t)$에 대한 슈뢰딩거 방정식은 $\frac{d}{dt}\Psi = \frac{1}{i\hbar}\hat{\mathcal{H}}\Psi$. 여기에 식 (39)의 해밀토니안을 넣고 정리하면,

$$
\boxed{i\hbar\frac{\partial}{\partial t}\Psi + \frac{\hbar^2}{2}t^{-c}(1-t)^{a+b-c+1}\frac{\partial^2}{\partial y^2}\Psi + \frac{1}{2}ab\,t^{c-1}(1-t)^{a+b-c}y^2\Psi = 0} \quad \cdots (40)
$$

이것이 초기하 함수에 대한 슈뢰딩거 방정식이다.

### WKB approximation

$\Psi$를 복소 극좌표계로 나타낸다. $\Theta(y,t) \in \mathbb{C}$에 대해,

$$
\Psi(y,t) = \exp\!\left(\frac{i\,\Theta(y,t)}{\hbar}\right) \quad \cdots (41)
$$

이것을 슈뢰딩거 방정식 (40)에 대입해, $\Theta(y,t)$에 대한 방정식으로 바꾼다. 먼저 필요한 미분을 계산한다:

$$
\frac{\partial^2 \Psi}{\partial y^2} = \frac{\partial}{\partial y}\left[\frac{i}{\hbar}\frac{\partial \Theta}{\partial y}\Psi\right] = \frac{i}{\hbar}\left(\frac{\partial^2 \Theta}{\partial y^2}\right)\Psi - \frac{1}{\hbar^2}\left(\frac{\partial \Theta}{\partial y}\right)^2\Psi \quad \cdots (42)
$$

$$
\frac{\partial \Psi}{\partial t} = \frac{i}{\hbar}\left(\frac{\partial \Theta}{\partial t}\right)\Psi \quad \cdots (43)
$$

식 (42)와 (43)을 슈뢰딩거 방정식에 대입하고 $\Psi$로 나누어 $\Theta$에 대해 정리하면:

$$
-\frac{\partial \Theta}{\partial t} + \frac{i\hbar}{2m(t)}\frac{\partial^2 \Theta}{\partial y^2} - \frac{1}{2m(t)}\left(\frac{\partial \Theta}{\partial y}\right)^2 - \frac{1}{2}k(t)y^2 = 0 \quad \cdots (45)
$$

위에서 $\hbar \to 0$의 극한으로 보내고, 양변에 $-1$을 곱하면:

$$
\frac{1}{2}\frac{1}{m(t)}\left(\frac{\partial \Theta}{\partial y}\right)^2 + \frac{1}{2}k(t)y^2 + \frac{\partial \Theta}{\partial t} = 0 \quad \cdots (46)
$$

식 (46)은 해밀턴-야코비 방정식 식 (34)와 같으며, 특히 식 (34)에서 액션 $W$의 역할을 $\Theta(y,t)$가 하고 있다.

### 고유함수를 구할 수 있는가?

앞서 구한 슈뢰딩거 방정식 (40)의 해밀토니안은 $m(t)$와 $k(t)$가 모두 시간에 의존한다. 2-(2)에서 보이겠지만, $[\hat{\mathcal{H}}(t_1), \hat{\mathcal{H}}(t_2)] \neq 0$이므로, 무엇보다 해밀토니안이 시간에 대해 명시적으로 의존하므로 에너지가 보존량이 아니다. 따라서 일반적인 의미의 stationary state가 존재하지 않는다. 시간에 무관한 고유함수를 엄밀히 구하는 것은 불가능하다고 생각한다. 

그러나 각 고정된 시점 $t$에서 instantaneous eigenvalue problem을 세울 수는 있다. 
특히 나중에 문제 2-(2)에서 확인하겠지만, 해밀토니안에서 t-dependent term인 $m(t)$와 $k(t)$가 아주 느리게 변화하는 adiabatic condition이라면 instantaneous eigenstate를를 찾는 시도가 의미있을 것이다. 

$$
\hat{\mathcal{H}}(t)\,\phi_n(y;t) = E_n(t)\,\phi_n(y;t) \quad \cdots (40\text{-a})
$$

이때 순간 해밀토니안은

$$
\hat{\mathcal{H}}(t) = -\frac{\hbar^2}{2m(t)}\frac{\partial^2}{\partial y^2} + \frac{1}{2}k(t)y^2
$$

이며, $\hbar = 1$로 놓겠다. 지금 푸는 문제는 SHO와 거의 다를 바가 없다. 

 Instantaneous eigenvalue problem에서 bound state가 존재하려면 포텐셜 $V(y) = \frac{1}{2}k(t)y^2$이 confining potential, 즉 $k(t) > 0$이어야 한다.

대표로 $0 < t < 1$ 구간에서만 살펴보면, $t^{c-1} > 0$이고 $(1-t)^{a+b-c} > 0$이므로,

$$
k(t) = -ab\,t^{c-1}(1-t)^{a+b-c}
$$

의 부호는 $ab$의 부호로 결정된다. $ab < 0$인 경우가 bound state가 존재할 조건이다. 

예를 들어, 초기하 함수 $_2F_1(1,1;2;-z) = \frac{\ln(1+z)}{z}$에 대응하는 $a = 1,\, b = 1,\, c = 2$에서는

$$
m(t) = t^2(1-t), \qquad k(t) = -t
$$

이므로 $k(t) < 0$이다. 이 경우 포텐셜이 $V(y) = -\frac{t}{2}y^2$로 아래로 볼록하며, 물리적 bound state가 존재하지 않는다.

반면 $a = 2,\, b = -1,\, c = 2$로 놓으면

$$
k(t) = 2t(1-t)^{-1} > 0 \quad (0 < t < 1)
$$

이 되어 속박 포텐셜을 형성하고, 이산적인 고유함수가 존재한다.

$\hbar = 1$로 놓고, 수치적 계산을 위해 유한 영역 $[-y_{\max},\, y_{\max}]$에 Dirichlet 경계조건 $\phi(\pm y_{\max}) = 0$을 부과하여 `NDEigensystem`으로 순간 고유값 문제를 수치적으로 풀었다. 아래는 $a = 2,\, b = -1,\, c = 2$, $t = 0.5$에서의 처음 4개 고유함수를 구하는 Mathematica 코드이다.

```mathematica
Module[{a = 2, b = -1, c = 2, t0 = 0.5, nEig = 4, ymax = 5, mt, kt, evals, efuncs},
  mt = t0^c (1 - t0)^(a + b - c + 1);
  kt = -a b t0^(c - 1) (1 - t0)^(a + b - c);
  
  {evals, efuncs} = NDEigensystem[  
    {-1/(2 mt) \[Phi]''[y] + (1/2) kt y^2 \[Phi][y],  
     DirichletCondition[\[Phi][y] == 0, True]},  
    \[Phi][y], {y, -ymax, ymax}, nEig  
  ];
  
  Print["m(t) = ", mt, "   k(t) = ", kt];
  Print["eigenvalue: ", evals];
  Plot[Evaluate[efuncs], {y, -ymax, ymax},
    PlotLegends -> Table["n=" <> ToString[n], {n, 0, nEig - 1}],
    PlotLabel -> "instantaneous eigenfunction (a=2, b=-1, c=2, t=0.5)",
    AxesLabel -> {"y", "\[Phi](y)"},
    ImageSize -> Large
  ]
]
```
![[AM midterm figure1.png]]


SHO와 유사한 discrete eigenfunction들이 나타난다. $n$이 증가함에 따라 node 수가 하나씩 늘어나며, 이는 조화진동자의 에르미트 함수와 정성적으로 일치한다. 

---

## 2-(2) 하이젠베르크 방정식과 생성/소멸 연산자

### 준비: SHO에서의 래더 연산자 복습

SHO에서 해밀토니안은:

$$
\mathfrak{H} = \frac{1}{2m}p^2 + \frac{1}{2}m\omega^2 x^2
$$

$p$와 $x$에 대한 하이젠베르크 운동방정식을 구하면:

$$
\frac{dx^H}{dt} = \frac{1}{i\hbar}U^\dagger[x, \mathfrak{H}]U = \frac{1}{i\hbar}\cdot\frac{1}{2m}U^\dagger[x, p^2]U = \frac{1}{i\hbar}\cdot\frac{1}{2m}U^\dagger(2i\hbar p)U = \frac{1}{m}p^H \quad \cdots (47)
$$

$$
\frac{dp^H}{dt} = \frac{1}{i\hbar}U^\dagger[p, \mathfrak{H}]U = \frac{1}{i\hbar}\cdot\frac{m\omega^2}{2}U^\dagger[p, x^2]U = \frac{1}{i\hbar}\cdot\frac{m\omega^2}{2}(-2i\hbar)U^\dagger y U = -m\omega^2 x^H \quad \cdots (48)
$$

### 행렬 표현

이 coupled differential equation을 행렬 표현으로 나타내면, 파울리 행렬 $\sigma_y = \begin{bmatrix}0 & -i \\ i & 0\end{bmatrix}$를 이용할 때:

$$
\frac{d}{dt}\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix} = \begin{bmatrix}0 & -\omega \\ \omega & 0\end{bmatrix}\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix} = -i\omega\,\sigma_y\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix} \quad \cdots (49)
$$

위는 벡터 $\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix}$의 시간에 대한 간단한 1차 미분 방정식이다. 이것의 해는:

$$
\begin{bmatrix}p^H(t)/m\omega \\ x^H(t)\end{bmatrix} = \exp(-i\omega t\,\sigma_y)\begin{bmatrix}p^H(0)/m\omega \\ x^H(0)\end{bmatrix} = \begin{bmatrix}\cos(\omega t) & \sin(\omega t) \\ -\sin(\omega t) & \cos(\omega t)\end{bmatrix}\begin{bmatrix}p^H(0)/m\omega \\ x^H(0)\end{bmatrix} \quad \cdots (50)
$$

### 대각화와 생성/소멸 연산자 도출

식 (49)는 벡터 $\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix}$에 대한 슈뢰딩거 방정식 $\frac{d}{dt}\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix} = \frac{\mathfrak{H}}{i\hbar}\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix}$이면, 행렬 $\begin{bmatrix}0 & -\omega \\ \omega & 0\end{bmatrix}$가 $\frac{1}{i\hbar}\mathfrak{H}$이다. 따라서 해밀토니안을 대각화하는 것은 $\begin{bmatrix}0 & -\omega \\ \omega & 0\end{bmatrix}$가 대각행렬이 되도록하는 similarity transform을 적용하는 것이다.

운동방정식 (49)의 양변을 무차원으로 만들기 위해 scale factor $\chi = \sqrt{\frac{\hbar}{m\omega}}$를 이용. $\mathbf{z} = \frac{1}{\chi}\begin{bmatrix}p^H/m\omega \\ x^H\end{bmatrix}$라 두고, 시간도 scaling $\tau = \omega t$를 적용하면:

$$
\frac{d\mathbf{z}}{d\tau} = \begin{bmatrix}0 & -1 \\ 1 & 0\end{bmatrix}\mathbf{z} \quad \cdots (51)
$$

이제 $\begin{bmatrix}0 & -1 \\ 1 & 0\end{bmatrix}$를 대각화하는 변환행렬 $V$를 찾으면:

$$
\begin{bmatrix}i & 0 \\ 0 & -i\end{bmatrix} = V^{-1}\begin{bmatrix}0 & -1 \\ 1 & 0\end{bmatrix}V \quad \cdots (52)
$$

$$
V = \frac{1}{\sqrt{2}}\begin{bmatrix}i & -i \\ 1 & 1\end{bmatrix}, \qquad V^{-1} = \frac{1}{\sqrt{2}}\begin{bmatrix}-i & 1 \\ i & 1\end{bmatrix} \quad \cdots (53)
$$

이를 식 (51)에 적용해 $\mathbf{z}$를 변환하면:

$$
\frac{d}{d\tau}\frac{1}{\sqrt{2}}\begin{bmatrix}-i & 1 \\ i & 1\end{bmatrix}\begin{bmatrix}p^H/\chi m\omega \\ x^H/\chi\end{bmatrix} = \begin{bmatrix}i & 0 \\ 0 & -i\end{bmatrix}\frac{1}{\sqrt{2}}\begin{bmatrix}-i & 1 \\ i & 1\end{bmatrix}\begin{bmatrix}p^H/\chi m\omega \\ x^H/\chi\end{bmatrix}
$$

$$
\frac{d}{d\tau}\begin{bmatrix}a^\dagger \\ a\end{bmatrix} = \begin{bmatrix}a^\dagger \\ a\end{bmatrix}
$$

이때:

$$
a = \sqrt{\frac{m\omega}{2\hbar}}\left(i\frac{p^H}{m\omega} + x^H\right) \quad \leftarrow \text{lowering operator (annihilation operator)}
$$

$$
a^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(-i\frac{p^H}{m\omega} + x^H\right) \quad \leftarrow \text{raising operator (creation operator)}
$$

우리가 잘 알던 그 연산자이다.

### 초기하 함수에서의 하이젠베르크 방정식

이제 초기하 함수로 넘어와서, 시간에 따라 $m$과 $k$가 바뀌는 시스템에서도 비슷한 대각화 방식이 통할 것인지 확인할 것이다. $y^H$에 대한 하이젠베르크 운동 방정식을 계산하자. SHO의 식 (47)을 오마주한다. 

$$
\frac{dy^H}{dt} = \frac{1}{i\hbar} U^\dagger(t) \left[y,\, \mathcal{H}(t)\right] U(t)
= \frac{1}{i\hbar} U^\dagger(t) \left[y,\, \frac{1}{2m(t)}p^2 + \frac{1}{2}k(t)y^2\right] U(t)
= \frac{1}{i\hbar} \cdot U^\dagger(t) \frac{1}{2m(t)}\left[y,\, p^2\right] U(t) \quad \cdots (47\text{-a})
$$
이때, $U^\dagger(t) \frac{1}{2m(t)}\left[y,\, p^2\right] U(t)$ 에서 $\frac{1}{m(t)}$를 두 time evolution operator 바깥으로 꺼내도 되는지 의문이다. 초기하 해밀토니안에서 비롯된 time evolution operator가 어떻게 정의되는지 확인할 필요가 있다. 

### 시간 발전 연산자와 Time-ordering

이 시스템에서 $U(t)$의 형태를 파악하기 위해, 서로 다른 시점에서 해밀토니안끼리 commute하는지 계산한다.

$$
[\mathcal{H}(t_1), \mathcal{H}(t_2)] = \left[\frac{1}{2}\frac{p^2}{m(t_1)} + \frac{1}{2}k(t_1)y^2,\; \frac{1}{2}\frac{p^2}{m(t_2)} + \frac{1}{2}k(t_2)y^2\right]
$$

bilinearity로 전개하면 $[p^2, p^2] = 0$, $[k(t_1)y^2, k(t_2)y^2] = 0$인 두 항은 소거되고:

$$
= \frac{1}{4}\frac{k(t_1)}{m(t_2)}[y^2, p^2] + \frac{1}{4}\frac{k(t_2)}{m(t_1)}[p^2, y^2]
$$

$[y^2, p^2] = 2i\hbar\{y, p\}$이고 $[p^2, y^2] = -[y^2, p^2]$이므로:

$$
= \frac{i\hbar}{2}\{y,p\}\left(\frac{k(t_1)}{m(t_2)} - \frac{k(t_2)}{m(t_1)}\right) \quad \cdots (54)
$$

$k(t)$와 $m(t)$의 공통 인수 $A(t) = t^c(1-t)^{a+b-c}$를 이용하면:

$$
m(t) = (1-t)A(t), \qquad k(t) = -ab\,t^{-1}A(t) \quad \cdots (55)
$$

$$
\frac{k(t_1)}{m(t_2)} - \frac{k(t_2)}{m(t_1)} = ab\left(\frac{t_1(t_2-1)A^2(t_2) - t_2(t_1-1)A^2(t_1)}{t_1 t_2(t_1-1)(t_2-1)A(t_1)A(t_2)}\right) \quad \cdots (56)
$$

일반적인 $t_1 \neq t_2$에서 식 (56)은 값이 0이 아니므로:

$$
\boxed{[\mathcal{H}(t_1),\, \mathcal{H}(t_2)] \neq 0 \quad \text{when } t_1 \neq t_2}
$$

따라서, SHO와 다르게 초기하 해밀토니안은 time evolution operator를 Dyson series로 구해야 한다.

$$
\mathcal{U}(t) = \mathbb{1} + \sum_{n=1}^{\infty} \left(\frac{1}{i\hbar}\right)^n \int_0^t dt_1\, \mathcal{H}(t_1) \int_0^{t_1} dt_2\, \mathcal{H}(t_2) \cdots \int_0^{t_{N-1}} dt_N\, \mathcal{H}(t_N) \quad \cdots (58)
$$

### c-number 분리와 하이젠베르크 운동방정식

다시 $y^H$에 대한 하이젠베르크 운동방정식을 구하는 식 (47-a)로 돌아와, $\mathcal{U}^\dagger(t) \frac{1}{2m(t)}[y, p^2]\,\mathcal{U}(t)$를 계산하다가 멈앴었다.

비록 $\mathcal{U}(t)$가 단순한 exponential이 아니라 Dyson series로 정의되기는 하지만, $\frac{1}{m(t)}$는 operator가 아니라 $t$로 결정되는 스칼라 값(c-number)이기에, 여러 겹의 해밀토니안 연산자를 뚫고 나올 수 있다. 식 (47-a)를 마저 계산하면,

$$
\frac{dy^H}{dt} = \frac{1}{i\hbar} \cdot \mathcal{U}^\dagger(t)\,\frac{1}{2m(t)}[y, p^2]\,\mathcal{U}(t)
= \frac{1}{i\hbar} \cdot \frac{1}{2m(t)}\,\mathcal{U}^\dagger(t)\,(2i\hbar\,p)\,\mathcal{U}(t)
= \frac{1}{m(t)}\,p^H \quad \cdots (47\text{-h})
$$

이어서 $p$에 대한 운동방정식을 풀면

$$
\frac{dp^H}{dt} = \frac{1}{i\hbar}\,\mathcal{U}^\dagger(t)\,[p, \mathcal{H}(t)]\,\mathcal{U}(t)
= \frac{1}{i\hbar}\,\mathcal{U}^\dagger(t)\left[p,\, \frac{1}{2m(t)}p^2 + \frac{1}{2}k(t)y^2\right]\mathcal{U}(t)
= \frac{1}{i\hbar} \cdot \frac{1}{2}k(t)\,\mathcal{U}^\dagger(t)\,[p, y^2]\,\mathcal{U}(t)
$$

$$
= \frac{1}{i\hbar} \cdot \frac{1}{2}k(t)\,(-2i\hbar)\,\mathcal{U}^\dagger(t)\,y\,\mathcal{U}(t)
= -k(t)\,y^H \quad \cdots (48\text{-h})
$$

coupled differential equation을 matrix representation으로 나타내면,

$$
\frac{d}{dt}\begin{bmatrix} p^H \\ y^H \end{bmatrix} = \begin{bmatrix} 0 & -k(t) \\ \frac{1}{m(t)} & 0 \end{bmatrix} \begin{bmatrix} p^H \\ y^H \end{bmatrix} 
$$

### 차원 맞추기와 대각화 시도

행렬 내부 요소의 물리적 차원을 맞추기 위해 상수 $\alpha$를 도입한다. $\alpha$의 물리적 차원은 $m\omega$와 같다. $\frac{k(t)}{\alpha} = \omega^k(t)$, $\frac{\alpha}{m(t)} = \omega^m(t)$라고 정의하면,

$$
\frac{d}{dt}\begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} = \begin{bmatrix} 0 & -\frac{k(t)}{\alpha} \\ \frac{\alpha}{m(t)} & 0 \end{bmatrix} \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} = \begin{bmatrix} 0 & -\omega^k(t) \\ \omega^m(t) & 0 \end{bmatrix} \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} \quad \cdots (49\text{-h})
$$

$\begin{bmatrix} 0 & -\omega^k(t) \\ \omega^m(t) & 0 \end{bmatrix}$를 대각화 시키는 변환행렬 또한 $t$에 따라 변화해야 할 것이다.

$\begin{bmatrix} 0 & -\omega^k(t) \\ \omega^m(t) & 0 \end{bmatrix}$의 고유값 $\lambda(t)$는

$$
\lambda(t) = \pm i\sqrt{\omega^k(t)\,\omega^m(t)} \quad \cdots (59)
$$
아래 식을 만족하여 대각화를 해주는 변환행렬 $\mathcal{W}(t)$를 찾아본다.
$$
\sqrt{\omega^k(t)\,\omega^m(t)}\begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix} = \mathcal{W}^{-1}(t) \begin{bmatrix} 0 & -\omega^k(t) \\ \omega^m(t) & 0 \end{bmatrix} \mathcal{W}(t) \quad \cdots (52\text{-h})
$$

$$
\mathcal{W}(t) = \frac{1}{\sqrt{\omega^m - \omega^k}} \begin{bmatrix} i\sqrt{\omega^k} & -i\sqrt{\omega^k} \\ \sqrt{\omega^m} & \sqrt{\omega^m} \end{bmatrix}, \qquad \mathcal{W}^{-1}(t) = \frac{\sqrt{\omega^m - \omega^k}}{2\sqrt{\omega^m \omega^k}} \begin{bmatrix} -i\sqrt{\omega^m} & \sqrt{\omega^k} \\ i\sqrt{\omega^m} & \sqrt{\omega^k} \end{bmatrix} \quad \cdots (53\text{-h})
$$

진짜로 대각화가 되는지 검증해 보면,

$$
\mathcal{W}^{-1}(t) \begin{bmatrix} 0 & -\omega^k \\ \omega^m & 0 \end{bmatrix} \mathcal{W}(t) = \frac{1}{2\sqrt{\omega^m \omega^k}} \begin{bmatrix} -i\sqrt{\omega^m} & \sqrt{\omega^k} \\ i\sqrt{\omega^m} & \sqrt{\omega^k} \end{bmatrix} \begin{bmatrix} 0 & -\omega^k \\ \omega^m & 0 \end{bmatrix} \begin{bmatrix} i\sqrt{\omega^k} & -i\sqrt{\omega^k} \\ \sqrt{\omega^m} & \sqrt{\omega^m} \end{bmatrix}
$$

우변의 뒤 두 행렬을 먼저 계산하면,

$$
\begin{bmatrix} 0 & -\omega^k \\ \omega^m & 0 \end{bmatrix} \begin{bmatrix} i\sqrt{\omega^k} & -i\sqrt{\omega^k} \\ \sqrt{\omega^m} & \sqrt{\omega^m} \end{bmatrix} = \begin{bmatrix} -\omega^k\sqrt{\omega^m} & -\omega^k\sqrt{\omega^m} \\ i\omega^m\sqrt{\omega^k} & -i\omega^m\sqrt{\omega^k} \end{bmatrix}
$$

이어서 $\mathcal{W}^{-1}$을 곱하면,

$$
\begin{bmatrix} -i\sqrt{\omega^m} & \sqrt{\omega^k} \\ i\sqrt{\omega^m} & \sqrt{\omega^k} \end{bmatrix} \begin{bmatrix} -\omega^k\sqrt{\omega^m} & -\omega^k\sqrt{\omega^m} \\ i\omega^m\sqrt{\omega^k} & -i\omega^m\sqrt{\omega^k} \end{bmatrix} = \begin{bmatrix} 2i\,\omega^k\omega^m & 0 \\ 0 & -2i\,\omega^k\omega^m \end{bmatrix}
$$

$$
\mathcal{W}^{-1}(t) \begin{bmatrix} 0 & -\omega^k \\ \omega^m & 0 \end{bmatrix} \mathcal{W}(t) = \frac{1}{2\sqrt{\omega^m \omega^k}} \begin{bmatrix} 2i\,\omega^k\omega^m & 0 \\ 0 & -2i\,\omega^k\omega^m \end{bmatrix} = \sqrt{\omega^k\omega^m} \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}
$$

### 대각화를 운동방정식에 적용

대각화된 행렬을 운동방정식 (49-h)에 적용해 본다.

$$
\frac{d}{dt}\begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
= \mathcal{W}(t) \begin{bmatrix} i\sqrt{\omega^k\omega^m} & 0 \\ 0 & -i\sqrt{\omega^k\omega^m} \end{bmatrix} \mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
$$
$$
\mathcal{W}(t) ^{-1}\frac{d}{dt}\begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
= \begin{bmatrix} i\sqrt{\omega^k\omega^m} & 0 \\ 0 & -i\sqrt{\omega^k\omega^m} \end{bmatrix} \mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} \quad \cdots (62)
$$
우리는 운동방정식이

$$
\frac{d}{dt}\,\mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
= \begin{bmatrix} i\sqrt{\omega^k\omega^m} & 0 \\ 0 & -i\sqrt{\omega^k\omega^m} \end{bmatrix} \mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} \quad \cdots (63)
$$

의 꼴로 수정되어 $\mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}$에 대한 운동방정식이 되길 기대했으나, 실제론 식 (62)에서 알 수 있듯, 변환 행렬 $\mathcal{W}^{-1}(t)$이 time-dependent하여 시간 미분 연산자 $\frac{d}{dt}$와 교환하지 않아 기대가 이루어지지 않는다.

만약 식 (63)을 억지로 풀어 본다면, 좌변이 아래 식과 같이 된다. 

$$
\frac{d}{dt}\,\mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
= \left(\frac{d\mathcal{W}^{-1}(t)}{dt}\right) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
+ \mathcal{W}^{-1}(t) \frac{d}{dt} \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}
$$

식(62)에는 없는 추가항 $\left(\frac{d\mathcal{W}^{-1}(t)}{dt}\right) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}$가 생긴다.

그러나 만약 $\omega^k(t)$와 $\omega^m(t)$의 시간 변화율이 그것의 값보다 작아 무시할 만하다면, 즉 $\frac{\dot{\omega}^{k,m}(t)}{\omega^{k,m}(t)} \ll \omega^{k,m}(t)$의 극한에서는, $\frac{d\mathcal{W}^{-1}(t)}{dt} \simeq 0$으로 무시할 수 있다. 이것이 adiabatic approximation이다. 이 근사를 적용하면 $\mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix}$에 대한 운동방정식이 유효하며, 이 벡터의 각 요소가 ladder operator의 역할을 할 것이다. 



계산해 보면,

$$
\mathcal{W}^{-1}(t) \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} = \frac{\sqrt{\omega^m - \omega^k}}{2\sqrt{\omega^m \omega^k}} \begin{bmatrix} -i\sqrt{\omega^m} & \sqrt{\omega^k} \\ i\sqrt{\omega^m} & \sqrt{\omega^k} \end{bmatrix} \begin{bmatrix} p^H/\alpha \\ y^H \end{bmatrix} = \frac{\sqrt{\omega^m - \omega^k}}{2\sqrt{\omega^m \omega^k}} \begin{bmatrix} -i\sqrt{\omega^m}\,\frac{p^H}{\alpha} + \sqrt{\omega^k}\,y^H \\ i\sqrt{\omega^m}\,\frac{p^H}{\alpha} + \sqrt{\omega^k}\,y^H \end{bmatrix}
$$

1행은 $a_h^\dagger$가 정규화 되지 않은 연산자이고, 2행은 $a_h$가 정규화되지 않은 연산자다. 
따라서, 

$$
a_h^\dagger = \mathcal{N}(t)\left(-i\sqrt{\omega^m}\,\frac{p}{\alpha} + \sqrt{\omega^k}\,y\right) \quad \cdots \text{creation operator for hypergeometric equation}
$$
$$
a_h = \mathcal{N}(t)\left(i\sqrt{\omega^m}\,\frac{p}{\alpha} + \sqrt{\omega^k}\,y\right) \quad \cdots \ \text{annihilation operator for hypergeometric equation}
$$
$\mathcal{N}(t)$는 정규화 인자, 역시 시간에 따라 변화한다. 
$[a_h, a_h^\dagger] = 1$을 이용해 $\mathcal{N}(t)$의 값을 구한다. 

$$
\begin{aligned}
[a, a^\dagger] &= \mathcal{N}^2(t)\left\{\left(i\sqrt{\omega^m}\,\frac{p}{\alpha} + \sqrt{\omega^k}\,y\right)\left(-i\sqrt{\omega^m}\,\frac{p}{\alpha} + \sqrt{\omega^k}\,y\right) - \left(-i\sqrt{\omega^m}\,\frac{p}{\alpha} + \sqrt{\omega^k}\,y\right)\left(i\sqrt{\omega^m}\,\frac{p}{\alpha} + \sqrt{\omega^k}\,y\right)\right\} \\
&= \mathcal{N}^2(t)\left\{i\sqrt{\omega^m\omega^k}\,\frac{1}{\alpha}\,py - i\sqrt{\omega^k\omega^m}\,\frac{1}{\alpha}\,yp + i\sqrt{\omega^m\omega^k}\,\frac{1}{\alpha}\,py - i\sqrt{\omega^m\omega^k}\,\frac{1}{\alpha}\,yp\right\} \\
&= \mathcal{N}^2(t)\,\frac{-2i}{\alpha}\,\sqrt{\omega^m\omega^k}\,[y, p] \\
&= \mathcal{N}^2(t)\,\frac{2\hbar}{\alpha}\,\sqrt{\omega^m\omega^k} = 1
\end{aligned}
$$

그래서 정의된 정규화 인자와 ladder operator는 아래와 같다. 
$$
\mathcal{N}(t) = \sqrt{\frac{\alpha}{2\hbar\sqrt{\omega^m(t)\omega^k(t)}}}
$$
$$
a_h^\dagger(t) = \sqrt{\frac{\alpha}{2\hbar\sqrt{\omega^m(t)\omega^k(t)}}}\left(-i\sqrt{\omega^m(t)}\,\frac{p}{\alpha} + \sqrt{\omega^k(t)}\,y\right) 
$$
$$
a_h(t) = \sqrt{\frac{\alpha}{2\hbar\sqrt{\omega^m(t)\omega^k(t)}}}\left(i\sqrt{\omega^m(t)}\,\frac{p}{\alpha} + \sqrt{\omega^k(t)}\,y\right)
$$



### 힐베르트 공간 구성

adiabatic 근사 하에서 $[a_h, a_h^\dagger] = 1$이 성립하므로, 각 고정된 시점 $t$에서 SHO와 동일한 힐베르트 공간을 구성할 수 있다. Number operator가 $a_h^\dagger a_h = N$으로 정의될 때, number operator에 eigen value $n$을 가지는 eigenket $\ket{n}$을 basis ket으로 삼는 것이다. 단, 고정된 시점 $t$에 따라 number operator가 변화하고, eigenket도 변화하므로 $N(t)\ket{n;t} = n\ket{n;t}$라고 표기한다. 바닥 상태 $|0;t\rangle$을 $a_h(t)|0;t\rangle = 0$으로 정의하고, number basis를

$$
|n;t\rangle = \frac{(a_s^\dagger(t))^n}{\sqrt{n!}}|0;t\rangle, \qquad n = 0, 1, 2, \ldots
$$

으로 구성하면, 시점 $t$에서 순간적인 힐베르트 공간은 $\mathcal{F}(t) = \overline{\text{span}}\{|n;t\rangle\}$이다. 

SHO와의 차이점은 이 기저 자체가 $t$에 의존한다는 것이며, 이는 adiabatic 근사의 한계이다. 정확한 해를 위해서는 $\frac{d\mathcal{W}^{-1}}{dt}$ 항에 의한 보정이 필요하다.


---

## 2-(3) 경로적분 정식화

### Propagator 정의와 action 분리

초기 상태 $(y_a, t_a)$에서 최종 상태 $(y_b, t_b)$로 전이할 probability amplitude인 propagator $K$는 파인만 경로적분으로 다음과 같이 정의된다.

$$
K(y_b, t_b; y_a, t_a) = \int_{y(t_a)=y_a}^{y(t_b)=y_b} \mathcal{D}[y(t)] \exp\!\left( \frac{i}{\hbar} S[y] \right) \quad \cdots (64)
$$

앞선 문제에서 구한 라그랑지안 $\mathcal{L}(y,\dot{y},t) = \frac{1}{2}m(t)\dot{y}^2 - \frac{1}{2}k(t)y^2$은 $y$와 $\dot{y}$에 대한 2차 항으로만 이루어져 있다. 임의의 경로 $y(t)$를 고전적 경로 $y_c(t)$와 양자적으로 고전 경로에서 벗어난 효과를 나타내는  $\eta(t)$로 분리한다.

$$
y(t) = y_c(t) + \eta(t) \quad (\text{단 boundary condition에 의해, } \eta(t_a) = \eta(t_b) = 0) \quad \cdots (65)
$$

이를 작용 $S[y]$에 대입하여 전개하면:

$$
S[y] = \int_{t_a}^{t_b} \left[ \frac{1}{2}m(t)(\dot{y}_c + \dot{\eta})^2 - \frac{1}{2}k(t)(y_c + \eta)^2 \right] dt
$$
$$
= S[y_c] + S[\eta] + \int_{t_a}^{t_b} \left[ m(t)\dot{y}_c\dot{\eta} - k(t)y_c\eta \right] dt  \quad \cdots (66)
$$

가운데 1차항을 부분적분하고 경계 조건 $\eta(t_a)=\eta(t_b)=0$을 적용하면,

$$
\int_{t_a}^{t_b} m(t)\dot{y}_c\dot{\eta}\,dt = \Big[ m(t)\dot{y}_c\eta \Big]_{t_a}^{t_b} - \int_{t_a}^{t_b} \frac{d}{dt}(m(t)\dot{y}_c)\eta \, dt = - \int_{t_a}^{t_b} \frac{d}{dt}(m(t)\dot{y}_c)\eta \, dt
$$

따라서 식(66) 우변에 있던 적분항은 $-\int \left[ \frac{d}{dt}(m(t)\dot{y}_c) + k(t)y_c \right] \eta \, dt$ 와 같다. 이때 $\frac{d}{dt}(m(t)\dot{y}_c) + k(t)y_c$가 바로 오일러-라그랑주 방정식에 $y_c$를 넣은 것이며, 고전적 경로는 고전적 운동 방정식의 해이므로, $\frac{d}{dt}(m(t)\dot{y}_c) + k(t)y_c=0$이다. 따라서 식 (66)의 적분 항은 없어진다. 결국 작용은 고전적 경로에 의한 작용과 양자적 요동에 의한 작용으로 완전히 분리된다. 

$$
S[y] = S[y_c] + S[\eta] \quad \cdots (67)
$$

### 명시적 경로적분 수행

작용이 분리됨에 따라 전파 인자 역시 명시적으로 계산할 수 있다. $S[y_c]$는 $\eta$에 대한 적분과 무관하므로 적분 기호 밖으로 빠져나온다.

$$
K(y_b, t_b; y_a, t_a) = \exp\!\left(\frac{i}{\hbar} S[y_c]\right) \int_{\eta(t_a)=0}^{\eta(t_b)=0} \mathcal{D}[\eta(t)] \exp\!\left( \frac{i}{\hbar} S[\eta] \right) \quad \cdots (68)
$$


여기서 남은 $\eta(t)$에 대한 경로적분의 특성을 살펴보자. 요동 작용 $S[\eta] = \int \left[ \frac{1}{2}m(t)\dot{\eta}^2 - \frac{1}{2}k(t)\eta^2 \right] dt$ 은 $\eta$와 $\dot{\eta}$에 대한 quadratic form으로만 이루어져 있다. 따라서 $\mathcal{D}[\eta]$에 대한 경로적분은 본질적으로 무한 번의 Gaussian integral을 수행하는 것과 같다. 가우시안 적분은 해석적으로 완벽하게 적분값을 구해낼 수 있으므로, 섭동 이론 등의 근사를 도입할 필요 없이 명시적인 계산이 가능하다. 또한, 이 가우시안 적분을 모두 수행하고 나면 적분 변수인 공간 좌표 $\eta$는 소거된다. 양 끝의 경계 조건 역시 $\eta=0$으로 고정되어 있으므로, 적분 결과에는 시스템의 매개변수인 $m(t), k(t)$와 양 끝의 시간 $t_a, t_b$만 남게 된다. 즉, 공간 좌표 $y$와는 완벽하게 독립적인 시간만의 진폭 함수 $F(t_b, t_a)$가 튀어나온다. 결론적으로 시간에 의존하는 조화진동자 형태의 라그랑지안에서는 propagator를 이렇게 구할 수 있다. 

$$ \boxed{K(y_b, t_b; y_a, t_a) = F(t_b, t_a) \exp\!\left( \frac{i}{\hbar} S_{cl}(y_b, t_b; y_a, t_a) \right)} \quad \cdots (69) $$


### 3. 미소 시간 전파 인자를 통한 슈뢰딩거 방정식 도출

이제 이 경로적분 정식화가 2-(1)에서 구한 슈뢰딩거 방정식과 동치임을 미소 시간 $\Delta t$로 쪼개어 증명한다. 시간이 아주 짧은 간격 $\Delta t$ 동안 입자는 일정한 질량 $m(t)$와 퍼텐셜 $V(y, t) = \frac{1}{2}k(t)y^2$ 하에서 직선 운동한다고 근사할 수 있다. 이때 $\xi = y - y_i$ 라 하면 미소 시간 전파 인자는 다음과 같다.
$exp(\frac{i}{\hbar} S)$를 먼저 계산하자면, 초기하 라그랑지안을 넣고 직선 운동 근사를 적용할 때, 
$$
\exp\left(\frac{i}{\hbar}\int_{t}^{t+\Delta t}\mathcal{L}(t')\,dt'\right)
= \exp\left(\frac{i}{\hbar}\int_{t}^{t+\Delta t}\frac{1}{2}m(t')\dot{y}^2 - \frac{1}{2}k(t')y^2\,dt'\right)
$$
$$
= \exp\left(\frac{i}{\hbar}\Delta t\left\{\frac{1}{2}m(t)\frac{\xi^2}{\Delta t^2} - \frac{1}{2}k(t)y^2\right\}\right)
$$
$$
= \exp\left(\frac{im(t)\xi^2}{2\hbar\Delta t} - \frac{i}{2\hbar}k(t)y^2\Delta t\right)
$$
Normalization까지 취하면 propagator $K(y, t+\Delta t; y-\xi, t)$를 구할 수 있다. 
$$
K(y, t+\Delta t; y-\xi, t) \simeq \sqrt{\frac{m(t)}{2\pi i \hbar \Delta t}} \exp\!\left[ \frac{im(t)\xi^2}{2\hbar\Delta t} - \frac{i}{2\hbar}k(t)y^2\Delta t \right] \quad \cdots (70)
$$

파동함수의 시간 발전은 전파 인자의 적분 방정식으로 주어진다.

$$
\Psi(y, t+\Delta t) = \int_{-\infty}^{\infty} d\xi \, K(y, t+\Delta t; y-\xi, t) \Psi(y-\xi, t) \quad \cdots (71)
$$

좌변을 $\Delta t$에 대해 1차까지 테일러 전개한다.

$$
\Psi(y, t+\Delta t) \simeq \Psi(y, t) + \Delta t \frac{\partial \Psi}{\partial t} \quad \cdots (72)
$$

우변의 피적분 함수에서 가우시안 분산의 특성상 $\xi \sim \sqrt{\Delta t}$ 로 스케일되므로, $\Delta t$의 1차 정확도를 얻기 위해 파동함수 $\Psi(y-\xi, t)$를 $\xi$에 대해 2차까지 전개한다.

$$
\Psi(y-\xi, t) \simeq \Psi(y, t) - \xi \frac{\partial \Psi}{\partial y} + \frac{\xi^2}{2} \frac{\partial^2 \Psi}{\partial y^2} \quad \cdots (73)
$$

또한 퍼텐셜에 의한 위상 인자 역시 1차 근사한다. $\exp\!\left(- \frac{i\Delta t}{2\hbar}k(t)y^2\right) \simeq 1 - \frac{i\Delta t}{2\hbar}k(t)y^2$. 
홀수 차수인 $\xi$ 항은 odd function이므로 가우시안 적분 시 $0$이 되어 소거된다. 전개한 식들을 우변의 적분식 (71)에 대입하고 $\int e^{-ax^2}dx = \sqrt{\frac{\pi}{a}}$, $\int x^2e^{-ax^2}dx = \frac{1}{2a}\sqrt{\frac{\pi}{a}}$ 공식을 이용하여 적분을 수행하면 다음과 같다.

$$
\text{RHS} = \left[ 1 - \frac{i\Delta t}{2\hbar}k(t)y^2 \right] \left[ \Psi(y, t) + \frac{i\hbar\Delta t}{2m(t)} \frac{\partial^2 \Psi}{\partial y^2} \right] \quad \cdots (74)
$$

$\Delta t$에 대한 1차 항까지만 남기고 좌변 (72)와 우변 (74)를 같다고 두면,

$$
\Psi + \Delta t \frac{\partial \Psi}{\partial t} = \Psi + \frac{i\hbar\Delta t}{2m(t)} \frac{\partial^2 \Psi}{\partial y^2} - \frac{i\Delta t}{2\hbar}k(t)y^2 \Psi \quad \cdots (75)
$$

양변에서 $\Psi$를 소거하고 $\Delta t$로 나눈 뒤 $i\hbar$를 곱하여 정리하면,

$$
i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m(t)} \frac{\partial^2 \Psi}{\partial y^2} + \frac{1}{2}k(t)y^2 \Psi \quad \cdots (76)
$$

여기에 1-(1)에서 정의한 $m(t) = t^c(1-t)^{a+b-c+1}$ 와 $k(t) = -ab\,t^{c-1}(1-t)^{a+b-c}$ 를 대입하고 모든 항을 좌변으로 이항하면,

$$
\boxed{i\hbar\frac{\partial}{\partial t}\Psi + \frac{\hbar^2}{2}t^{-c}(1-t)^{a+b-c+1}\frac{\partial^2}{\partial y^2}\Psi + \frac{1}{2}ab\,t^{c-1}(1-t)^{a+b-c}y^2\Psi = 0} \quad \cdots (77)
$$

이 결과는 2-(1)에서 정준 양자화를 통해 얻은 초기하 함수의 슈뢰딩거 방정식, 식 (40)과 정확히 일치한다. 

# Reference

김기석 교수님 강의 필기
Modern Quantum Mechanics 3rd edition (J. J. Sakurai, Jim Napolitano) 초chapter 2 전반
김희재 교수님 2026년 양자역학1 강의 필기 노트
https://peeterjoot.com/2015/08/19/quantum-sho-ladder-operators-as-a-diagonal-change-of-basis-for-the-heisenberg-eoms/ → SHO에서 ladder operator를 이용한 대각화 과정의 내용을 참고