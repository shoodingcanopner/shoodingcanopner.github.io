---
title: "QM lecture note - Position, Momentum, and Generators"
date: "2026-03-17"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[QM lecture note - Position, Momentum, and Translation]]

# 오늘의 핵심

Momentum operator를 position basis에서 나타내면 디락델타와 공간 미분이 나온다. 
유도는 momentum operator가 position transition operator라는 점에서 시작한다. 

**이 유도법은 다른 generator에서도 쓰일 것 같으니 통으로 알아두자**

$$
T(dx)\ket{\alpha} = \left(\mathbb{1} - \frac{i}{\hbar}dx\, p\right)\ket{\alpha} = \int dx''\, \psi_\alpha(x'')\ket{x''} - \frac{i}{\hbar}dx\, p\ket{\alpha}
$$
한편으로는, 
$$
T(dx)\ket{\alpha} = \int dx'\, \psi_\alpha(x')T(dx)\ket{x'} = \int dx'\, \psi_\alpha(x')\ket{x'+dx} = \int dx''\, \psi_\alpha(x''-dx)\ket{x''}
$$
두 식을 같다고 놓으면:
$$
-\frac{i}{\hbar}dx\, p\ket{\alpha} = \int dx''\,\bigl(\psi_\alpha(x''-dx) - \psi_\alpha(x'')\bigr)\ket{x''}
$$
$$
= \int dx''\left(-dx\,\frac{\partial}{\partial x''}\psi_\alpha(x'')\right)\ket{x''}
$$

양변에서 $-\frac{i}{\hbar}dx$를 나누고, $\bra{x''}$을 왼쪽에서 곱하면:

$$
\braket{x''|p|\alpha} = -i\hbar\frac{\partial}{\partial x''}\braket{x''|\alpha}
$$
$$
\boxed{\langle x' | p | x'' \rangle = -i\hbar \frac{\partial}{\partial x'} \delta(x' - x'')}
$$
이것이 모든 유도의 시작점.

---

$$
\langle x^m | \mathcal{U} | x^k \rangle = \langle x^m | p^k \rangle
$$

이게 position space와 mementum space사이 transformation function 역할을 한다.
Position basis에서 연산을 수행할 때, transformation function으로 $\langle x^m | p^k \rangle$의 값을 사용하면 되는 것이다. 
$$
\boxed{\langle x' | p' \rangle = \frac{1}{\sqrt{2\pi\hbar}} \exp\!\left( \frac{ip'x'}{\hbar} \right)}
$$
---

# 필기 내용

## Motivation: 해석역학의 Canonical Transformation과 Generator

Translation operator의 무한소 형태:

$$
T = \mathbb{1} + A\, dx
$$

$A$는 anti-Hermitian이어야 하고, 대응하는 observable $k$에 대해 $A = -ik$.

---

### Canonical Transformation 복습
모르는 것 투성이였다. 아래 노트를 참고하자. 
[[Canonical Transformation and Symplectic Structure]]
해밀턴 역학에서 운동 방정식:

$$
\dot{q}_i = \frac{\partial \mathcal{H}}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial \mathcal{H}}{\partial q_i}
$$

**Canonical transformation**은 Poisson bracket 구조를 보존하는 변환이다:

$$
\{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0, \quad \{q_i, p_j\} = \delta_{ij}
$$

$(q_i, p_i) \to (Q_i, P_i)$로 변환해도 동일한 관계가 성립:

$$
\{Q_i, Q_j\} = 0, \quad \{P_i, P_j\} = 0, \quad \{Q_i, P_j\} = \delta_{ij}
$$

Canonical transformation이라면 equation of motion이 바뀌지 않는다.

작용(Action)으로 보면:

$$
S = \int_{t_1}^{t_2} dt \left( p_i \dot{q}_i - \mathcal{H}(p_i, q_i, t) \right)
$$

$(Q_i, P_i)$로 나타내도 $\delta S$가 변하지 않는다.

$$
H(q_i, p_i) \to H'(Q_i, P_i)
$$

$$
p_i \dot{q}_i - H = Q_i \dot{P}_i - H' + \frac{dF}{dt}
$$

변환을 해도 시간에 대한 전미분 항 $\frac{dF}{dt}$만 추가될 뿐.

→ 유도를 직접 할 수 있을까?

---

### Generating Function

Generator는 $(q_i, p_i) \to (Q_i, P_i)$로의 전환을 만든다. 네 가지 generating function이 생각된다:

$$
\begin{cases}
F_1(q, Q, t) \\
F_2(q, P, t) \\
F_3(p, Q, t) \\
F_4(p, P, t)
\end{cases}
$$
→ 무슨 취지로 이 네 가지 generating function을 생각하는 거지?
→ 원하는 변환을 얻고싶다면 gernerating function을 어떻게 설정해야 하는가?

$F_2(q_i, P_i, t)$를 선택하면,

$$
dF_2 = \frac{\partial F_2}{\partial q_i} dq_i + \frac{\partial F_2}{\partial P_i} dP_i + \frac{\partial F_2}{\partial t} dt
$$

이로부터:

$$
\frac{\partial F_2}{\partial q_i} = p_i, \qquad \frac{\partial F_2}{\partial P_i} = Q_i
$$
→ 왜 generation function이 이 식을 성립한다고 가정하는 거지?
$$
H' = H + \frac{\partial F_2}{\partial t}
$$
→ 이것 또한 왜 성립하지?


**예시:** $F_2 = q_i P_i$이면 identity transformation이다.

---

### Infinitesimal Canonical Transformation

$G$는 $F_2$ 변환에 대한 **generator**.
$F_2 = q_i P_i$에서 미소 변화를 주면:

$$
F_2(q_i, P_i, t) = q_i P_i + \varepsilon\, G(q_i, P_i, t)
$$

 이로부터:
$$
p_i = \frac{\partial F_2}{\partial q_i} = P_i + \varepsilon \frac{\partial G}{\partial q_i}
$$

$$
Q_i = \frac{\partial F_2}{\partial P_i} = q_i + \varepsilon \frac{\partial G}{\partial P_i}
$$

따라서 변환량:

$$
\delta q_i = Q_i - q_i = \varepsilon \frac{\partial G}{\partial P_i} \approx \varepsilon \frac{\partial G}{\partial p_i}
$$

$$
\delta p_i = P_i - p_i = -\varepsilon \frac{\partial G}{\partial q_i}
$$

임의의 함수 $A(q, p)$에 대해:

$$
\delta A = \{A, G\}\, \varepsilon
$$

왜냐하면 아래가 성립하기 때문이다.
$$
\delta q_i = \varepsilon \{q_i, G\} = \varepsilon \frac{\partial G}{\partial p_i}, \qquad \delta p_i = \varepsilon \{p_i, G\} = -\varepsilon \frac{\partial G}{\partial q_i}
$$

> [!note] 이게 왜 성립하죠? 해석역학에서 유도법을 배운 적 없는 거 같은데...
> Glia 왈..
> 
> Hamilton 방정식을 봐:
> 
> $$
> \dot{q}_i = \frac{\partial H}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial H}{\partial q_i}
> $$
> 
> 시간 $\varepsilon$만큼의 변화는:
> 
> $$
> \delta q_i = \dot{q}_i\,\varepsilon = \varepsilon\frac{\partial H}{\partial p_i}, \qquad \delta p_i = \dot{p}_i\,\varepsilon = -\varepsilon\frac{\partial H}{\partial q_i}
> $$
> 
> 즉 시간 발전은 $H$를 generator로 하는 변환이야.
> 
> "시간"이 아닌 임의의 파라미터 $\varepsilon$으로 위상공간을 흘려보내는 변환을 정의하고 싶어. 그 변환을 생성하는 함수를 $G$라고 하면, Hamilton 방정식의 구조를 그대로 빌려와서:
> 
> $$
> \frac{dq_i}{d\varepsilon} = \frac{\partial G}{\partial p_i}, \qquad \frac{dp_i}{d\varepsilon} = -\frac{\partial G}{\partial q_i}
> $$
> 
> 라고 **정의**한다. 그러면 infinitesimal 변환은:
> 
> $$
> \delta q_i = \varepsilon\frac{\partial G}{\partial p_i}, \qquad \delta p_i = -\varepsilon\frac{\partial G}{\partial q_i}
> $$
> 자세한 건 심플래틱 기하학을 통해 이야기해야 한다면서, 일단은 정의라고 치고 넘어가라고 한다. 

**예시: Infinitesimal space translation**

$Q = q + \varepsilon$, $P = p$이면:
space translation을 일으키는 generator는 $G = p$
$$
\delta q = \varepsilon \frac{\partial G}{\partial p} = \varepsilon, \qquad \delta p = -\varepsilon \frac{\partial G}{\partial q} = 0
$$

$$
\therefore\quad G = p
$$

공간 평행이동의 generator는 운동량 $p$이다.

---

## Position Basis에서 Momentum Operator

양자역학으로 돌아와서, space translation operator는
$$
T(dx) = \mathbb{1} - \frac{i}{\hbar} \mathbf{p} \cdot d\mathbf{x}
$$
비교하면 generator 사이 관계를 얻는다:

$$
[x_i, p_j] = i\hbar\, \delta_{ij}
$$

### Momentum Operator의 Matrix Element (x-basis)


$$
\langle x' | p | x'' \rangle = -i\hbar \frac{\partial}{\partial x'} \delta(x' - x'')
$$

**유도:** $T(dx)\ket{\alpha}$를 두 가지 방법으로 전개해서 비교한다.

**방법 1 — $T(dx)$의 정의로부터:**

$$
T(dx)\ket{\alpha} = \int dx'\, T(dx)\ket{x'}\braket{x'|\alpha}
$$

$$
= \int dx'\, \ket{x'+dx}\braket{x'|\alpha}
$$

$$
= \int dx'\, \psi_\alpha(x')\ket{x'+dx}
$$

$$
= \int dx''\, \psi_\alpha(x''-dx)\ket{x''}
$$

**방법 2 — $T(dx) = \mathbb{1} - \frac{i}{\hbar}dx\, p$로부터:**

$$
T(dx)\ket{\alpha} = \left(\mathbb{1} - \frac{i}{\hbar}dx\, p\right)\ket{\alpha} = \int dx''\, \psi_\alpha(x'')\ket{x''} - \frac{i}{\hbar}dx\, p\ket{\alpha}
$$

두 식을 같다고 놓으면:

$$
-\frac{i}{\hbar}dx\, p\ket{\alpha} = \int dx''\,\bigl(\psi_\alpha(x''-dx) - \psi_\alpha(x'')\bigr)\ket{x''}
$$

$$
= \int dx''\left(-dx\,\frac{\partial}{\partial x''}\psi_\alpha(x'')\right)\ket{x''}
$$

양변에서 $-\frac{i}{\hbar}dx$를 나누고, $\bra{x''}$을 왼쪽에서 곱하면:

$$
\braket{x''|p|\alpha} = -i\hbar\frac{\partial}{\partial x''}\braket{x''|\alpha}
$$

$\ket{\alpha} = \ket{x'}$으로 놓으면:

$$
\boxed{\braket{x''|p|x'} = -i\hbar\frac{\partial}{\partial x''}\delta(x'-x'')}
$$

운동량 연산자를 서로 다른 상태에 샌드위치한 결과를 position basis에서 계산하면 이렇게 된다. 

$$
\langle \beta | p | \alpha \rangle = \int dx'\, \langle \beta | x' \rangle \left( -i\hbar \frac{\partial}{\partial x'} \langle x' | \alpha \rangle \right)
$$

$$
= \int dx' \int dx''\, \langle \beta | x' \rangle \langle x' | p | x'' \rangle \langle x'' | \alpha \rangle
$$

$$
= \int dx' \int dx''\, \psi_\beta^*(x') \left( -i\hbar\, \delta(x'-x'') \frac{\partial}{\partial x'} \right) \psi_\alpha(x'')
$$

$$
= \int dx'\, \psi_\beta^*(x') \left( -i\hbar \frac{\partial}{\partial x'} \psi_\alpha(x') \right)
$$

$$
= -i\hbar \int dx'\, \psi_\beta^*(x')\, \frac{\partial \psi_\alpha}{\partial x'}
$$
또한 $\bra{\beta} = \bra{x'}$이라면, 
$$
\braket{x'|p|\alpha} = -i\hbar \frac{\partial}{\partial x'}\braket{x'|p}
$$

즉, position space에서 운동량 연산자는 미분 연산자로 작용한다:

$$
p \longleftrightarrow -i\hbar \frac{\partial}{\partial x}
$$

---

## Finite Translation과 Momentum Eigenstate

### Finite Translation Operator

Infinitesimal translation을 $N$번 반복하면:

$$
T(\Delta x) = \lim_{N \to \infty} \left( T\!\left(\frac{\Delta x}{N}\right) \right)^N = \lim_{N \to \infty} \left( \mathbb{1} - \frac{i}{\hbar} \frac{p_x \Delta x}{N} \right)^N = \exp\!\left( -\frac{i}{\hbar} p_x \Delta x \right)
$$

지금까지 infinitesimal translation을 exponential로 나타내는 게 그냥 테일러 전개의 결인 줄알았다. 
이것은더 정확한 방식으로 exponential 표현을 정당화한다. 곱하기와 더하기 연산을 이어주는 것은 로그나 지수함수밖에 없으므로. 

### Translation Operator의 Commutativity

 어떤 변환을 어떤 순서로 해도 결과가 같기 위해서는 translation operator들 끼리 서로로 commute해야 한다 —이는 generator가 commute할 때 가능하다:

$$
[T(\Delta y\, \hat{y}),\; T(\Delta x\, \hat{x})] = \left[ \mathbb{1} - \frac{i}{\hbar} p_y \Delta y,\; \mathbb{1} - \frac{i}{\hbar} p_x \Delta x \right] = -\frac{1}{\hbar^2} \Delta x\, \Delta y\, [p_y, p_x] = 0
$$

그들의 generator들이 commute하는 translation의 group을 **Abelian**이라 한다.

### 보존량과 gernerator

운동량 보존 → space translation을 momentum eigenket에 작용해도 변하지 않는다:

$$
T(dx)\,\ket{p'} = \left( \mathbb{1} - \frac{i}{\hbar} p'\, dx \right) \ket{p'} \approx \ket{p'}
$$
더 일반화하면, gernerator는 곧 자기 자신을 나타내는 물리량을 보존하는 translation을 만든다. 

---

## Poisson Bracket → Commutator 대응

고전역학의 Poisson bracket을 commutator로 바꾸면 양자화된다:

$$
\{\cdot,\cdot\} \longrightarrow \frac{1}{i\hbar}[\cdot,\cdot]
$$
$\hbar$랑 $p \dot{q}$ 랑 차원이 같나.. 생각해 보니까 그렇지 않다. 시간 만큰의 차원 차이가 있다. 

Poisson bracket이 가지는 성질들은 commutator 또한 가진다.

---

## Momentum Space

이제 함수를 momentum space에서 보자.

$$
\ket{\alpha} = \int dp'\, \ket{p'}\braket{p'|\alpha} = \int dp'\, \phi_\alpha(p')\, \ket{p'}
$$

$$
\int dp'\, |\phi_\alpha(p')|^2 = 1
$$

$\psi_\alpha(x')$을 $\phi_\alpha(p')$으로 바꾸어 볼 수 있다.

### Unitary Transformation: x-basis ↔ p-basis

$$
\mathcal{U} \ket{x^k} = \ket{p^k}, \qquad \mathcal{U} = \sum_{k}\ket{p^k}\bra{x^k}
$$

$$
\langle x^m | \mathcal{U} | x^k \rangle = \langle x^m | p^k \rangle
$$

이게 transformation function 역할을 한다.
Position basis에서 연산을 수행할 때, transformation function으로 $\langle x^m | p^k \rangle$의 값을 사용하면 되는 것이다. 
### $\braket{x'|p'}$ 결정

$\braket{x'|p|\alpha} = -i\hbar \frac{\partial}{\partial x'}\braket{x'|p}$를 이용해서,
$\ket{\alpha} = \ket{p'}$, 운동량에 대한 한 eigenket이라 하면
$$
\langle x' | p | p' \rangle = -i\hbar \frac{\partial}{\partial x'} \langle x' | p' \rangle = p' \langle x' | p' \rangle
$$


$\langle x' | p' \rangle$에 대한 미분 방정식을 풀면:

$$
\langle x' | p' \rangle = N \exp\!\left( \frac{ip'x'}{\hbar} \right)
$$

정규화 상수 $N$을 결정하기 위해:

$$
\langle x' | x'' \rangle = \delta(x' - x'') = \int dp'\, \langle x' | p' \rangle \langle p' | x'' \rangle
$$

$$
= |N|^2 \int dp'\, \exp\!\left( \frac{ip'(x' - x'')}{\hbar} \right) = |N|^2\, 2\pi\hbar\, \delta(x' - x'')
$$

$$
\therefore\quad |N|^2 = \frac{1}{2\pi\hbar}, \qquad N = \frac{1}{\sqrt{2\pi\hbar}}
$$

$$
\boxed{\langle x' | p' \rangle = \frac{1}{\sqrt{2\pi\hbar}} \exp\!\left( \frac{ip'x'}{\hbar} \right)}
$$

$$
\langle p' | x' \rangle = \frac{1}{\sqrt{2\pi\hbar}} \exp\!\left( -\frac{ip'x'}{\hbar} \right)
$$

### Wave Function과 Fourier Transform

$$
\psi_\alpha(x') = \langle x' | \alpha \rangle = \int dp'\, \langle x' | p' \rangle \langle p' | \alpha \rangle = \int dp'\, \phi_\alpha(p') \cdot \frac{1}{\sqrt{2\pi\hbar}} \exp\!\left( \frac{ip'x'}{\hbar} \right)
$$

$$
\phi_\alpha(p') = \int dx'\, \langle p' | x' \rangle \langle x' | \alpha \rangle = \int dx'\, \psi_\alpha(x') \cdot \frac{1}{\sqrt{2\pi\hbar}} \exp\!\left( -\frac{ip'x'}{\hbar} \right)
$$

즉, **position space wave function과 momentum space wave function은 서로 Fourier transform 관계**이다.

# 궁금한 내용



# AI의 보충 설명

# 연관 학습 노트

- [[Canonical Transformation and Symplectic Structure]]
- [[AM lecture note - Hamiltonian mechanics]]

# References

# 다음 강의

[[QM lecture note - Gaussian Wave Packet]]

# 원본 필기 이미지

[[QM_4thweek_1.pdf]]
![[Pasted image 20260326172639.png]]![[Pasted image 20260326172645.png]]
![[Pasted image 20260326172650.png]]
![[Pasted image 20260326172657.png]]
![[Pasted image 20260326172704.png]]
![[Pasted image 20260326172709.png]]