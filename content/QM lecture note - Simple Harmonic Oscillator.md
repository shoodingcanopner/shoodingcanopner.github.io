---
title: "QM lecture note - Simple Harmonic Oscillator"
date: "2026-03-24"
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

[[QM lecture note - Heisenberg Picture and Equations of Motion]]

# 오늘의 핵심
**내림 연산자 $a$** (lowering operator)와 **올림 연산자 $a^\dagger$** (raising operator):

$$
a = \sqrt{\frac{m\omega}{2\hbar}}\left(x + \frac{iP}{m\omega}\right), \qquad a^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(x - \frac{iP}{m\omega}\right)
$$

$$
aa^\dagger = N + 1
$$
$$
a^\dagger a = N
$$
$$
[a, a^\dagger] = 1
$$

Heisenberg 묘사를 적용하면, 
사다리 연산자 $a$와 $a^\dagger$의 equation of motion이 uncoupled되어 쉽게 풀린다. 
두 연산자는 시간이 지남에 따라 phase만 바뀐다. 
$$
\begin{cases}
a(t) = e^{-i\omega t} a_0 \\
a^\dagger(t) = e^{i\omega t} a^\dagger_0
\end{cases}
$$

사다리 연산자를 이용해 위치 연산자와 운동량 연산자를 쉽게 구할 수 있다. 
$x^H(t)$와 $p^H(t)$는 고전적인 조화진동자와 동일한 형태를 가진다.

$$
\begin{cases}
x^H(t) = x_0 \cos\omega t + \frac{p_0}{m\omega}\sin\omega t \\
p^H(t) = p_0 \cos\omega t - m\omega x_0\sin\omega t
\end{cases}
$$

완전히 처음 보는 내용: Baker-Hausdorff Lemma

$G$가 hermitian이고 $\lambda$가 실수일 때:
$$
\boxed{\exp(iG\lambda)\,A\,\exp(-iG\lambda) = A + i\lambda[G, A] + \frac{(i\lambda)^2}{2!}[G, [G, A]] + \cdots + \frac{(i\lambda)^n}{n!}[G, [G, \cdots [G, A]\cdots]]}
$$



# 필기 내용

## Hamiltonian과 사다리 연산자

단순조화진동자의 Hamiltonian:

$$
\mathcal{H} = \frac{1}{2m}P^2 + m\omega^2 x^2 \frac{1}{2}
$$

**내림 연산자 $a$** (lowering operator)와 **올림 연산자 $a^\dagger$** (raising operator):

$$
a = \sqrt{\frac{m\omega}{2\hbar}}\left(x + \frac{iP}{m\omega}\right), \qquad a^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(x - \frac{iP}{m\omega}\right)
$$
둘은 무차원 연산자. 
둘을 유도하는 방법: 해밀토니안을 $\hbar \omega$로 나누어 무차원수로 만든 다음에,  $(a^2 + b^2) = (a+ib)(a-ib)$ 꼴의 식으로 분해하면 된다. 

$$
\frac{\mathcal{H}}{\hbar\omega} = \frac{1}{2m\hbar\omega}P^2 + \frac{m\omega}{2\hbar}x^2
$$

$$
= \frac{m\omega}{2\hbar}\left(x^2 + \frac{1}{m^2\omega^2}P^2\right)
$$

$$
\overset{?}{=} \sqrt{\frac{m\omega}{2\hbar}}\left(x + i\frac{1}{m\omega}P\right)\sqrt{\frac{m\omega}{2\hbar}}\left(x - i\frac{1}{m\omega}P\right) = a\,a^\dagger
$$

> [!warning] 주의
> 위 유도 과정 중에서 일부러 $\overset{?}{=}$을 쓴 것을 확인하라. 
> $x$와 $P$는 commute하지 않으므로, $(a+ib)(a-ib) = a^2 + b^2$이 그대로 성립하지 않는다. 실제로는 $aa^\dagger = N + 1$이고 $a^\dagger a = N$이다.

Commutation relation:

$$
[a, a^\dagger] = \frac{1}{2\hbar}\left(-i[x, P] + i[P, x]\right) = 1
$$

**Number operator** $N = a^\dagger a$:

$$
N = a^\dagger a = \frac{m\omega}{2\hbar}\left(x^2 + \frac{P^2}{m^2\omega^2}\right) + \frac{i}{2\hbar}[x, P] = \frac{\mathcal{H}}{\hbar\omega} - \frac{1}{2}
$$

$$
\therefore \mathcal{H} = \hbar\omega\left(N + \frac{1}{2}\right)
$$

---

## Equation of Motion (Heisenberg 묘사)

$$
\begin{cases}
\dfrac{d}{dt}P^H = \dfrac{1}{i\hbar}[P^H, \mathcal{H}] = -m\omega^2 x \\[10pt]
\dfrac{d}{dt}x^H = \dfrac{P}{m}
\end{cases}
$$

이 두 equation of motion은 **coupling** 되어 있어 풀기 어렵다. 대신 사다리 연산자로 바꾸면:

$$
\frac{da}{dt} = \sqrt{\frac{m\omega}{2\hbar}}\left(\frac{dx}{dt} + \frac{i}{m\omega}\frac{dP}{dt}\right) = \sqrt{\frac{m\omega}{2\hbar}}\left(\frac{P}{m} + \frac{i}{m\omega}(-m\omega^2)x\right) = -i\omega a
$$

$$
\frac{da^\dagger}{dt} = i\omega a^\dagger
$$

**$a$와 $a^\dagger$에 대한 방정식은 uncoupled이다!** 
해를 구해 보면, 

$$
\begin{cases}
a(t) = e^{-i\omega t} a_0 \\
a^\dagger(t) = e^{i\omega t} a^\dagger_0
\end{cases}
$$

Number operator의 시간 진화:

$$
N(t) = a^\dagger(t)\,a(t) = |a_0|^2
$$

이것은 **하이젠베르크 보존 관계의 의미**이다 — number (에너지)는 시간에 대해 보존된다.

---

## $x^H(t)$와 $p^H(t)$ 직접 계산

$a(t)$와 $a^\dagger(t)$를 더하고 빼면 $x$와 $p$에 대해 정리할 수 있다. 

$$
a(t) \propto x(t) + \frac{i}{m\omega}p(t) = x_0 e^{-i\omega t} + \frac{ip_0}{m\omega}e^{-i\omega t}
$$

$$
a^\dagger(t) \propto x(t) - \frac{i}{m\omega}p(t) = x_0 e^{i\omega t} - i\frac{p_0}{m\omega}e^{i\omega t}
$$

두 식을 더하고 빼면 $x(t)$와 $p(t)$를 얻는다.

---

## Baker-Hausdorff Lemma를 이용한 방법

다른 방법으로, 슈뢰딩거 묘사의 관점에서 직접 풀 수 있다. $G$가 hermitian이고 $\lambda$가 실수일 때:

$$
\exp(iG\lambda)\,A\,\exp(-iG\lambda) = A + i\lambda[G, A] + \frac{(i\lambda)^2}{2!}[G, [G, A]] + \cdots + \frac{(i\lambda)^n}{n!}[G, [G, \cdots [G, A]\cdots]]
$$

이를 적용하면:

$$
x^H(t) = \exp\!\left(\frac{i}{\hbar}\mathcal{H}t\right) x^S \exp\!\left(-\frac{i}{\hbar}\mathcal{H}t\right)
= x_0 + \frac{it}{\hbar}[\mathcal{H}, x_0] + \frac{(it)^2}{2!\hbar^2}[\mathcal{H}, [\mathcal{H}, x_0]] + \cdots
$$

필요한 commutation relation:

$$
[\mathcal{H}, x_0] = -i\hbar\frac{p_0}{m}, \qquad [\mathcal{H}, P_0] = i\hbar m\omega^2 x_0
$$

테일러 전개를 계산하면:

$$
x^H(t) = x_0 + \frac{p_0}{m}t - \frac{1}{2!}t^2\omega^2 x_0 - \cdots
$$

$x_0$에 대한 항들을 모으면 $\cos\omega t$, $p_0$에 대한 항들을 모으면 $\sin\omega t$가 나온다:

$$
\boxed{x^H(t) = x_0\cos\omega t + \frac{p_0}{m\omega}\sin\omega t}
$$

이는 **고전적인 조화진동자 해와 완전히 동일한 형태**이다. (포아송 괄호로 나타낸 등식 그대로!)

---

## Number Operator의 Eigenket: $\ket{n}$ basis

### Commutation Relations

$$
N = a^\dagger a, \qquad [a, a^\dagger] = 1
$$

$$
[N, a] = [a^\dagger a,\, a] = a^\dagger[a,a] + [a^\dagger,a]a = -a
$$

$$
[N, a^\dagger] = a^\dagger
$$

이로부터: $N a^\dagger \ket{n} = a^\dagger (1+N)  \ket{n}= (1+n) a^\dagger  \ket{n}$이므로, $a^\dagger\ket{n}$은 eigenvalue $n+1$인 $N$의 eigenket이다. (표기가 헷갈린다. $N$은 number operator이고. $n$은 $N\ket{n} = n\ket{n}$연산으로 나온 eigen value, 정수이다.)

비슷하게, $Na\ket{n} = (n-1) a\ket{n}$이므로, $a\ket{n}$은 eigen value $n-1$인 $N$의 eigen ket이다. 
따라서. 

$$
a^\dagger\ket{n} \propto \ket{n+1}, \qquad a\ket{n} \propto \ket{n-1}
$$

### Normalization 계수 결정

$a\ket{n} = C\ket{n-1}$이라 두면, normalization 조건으로:

$$
\bra{n} a^\dagger a \ket{n} = |C|^2 \braket{n-1|n-1} = |C|^2 = \bra{n} N \ket{n} = n
$$

$$
\therefore C = \sqrt{n}
$$

같은 방법으로 $a^\dagger\ket{n}$의 비례상수는 $\sqrt{n+1}$이다.

$$
\boxed{a\ket{n} = \sqrt{n}\,\ket{n-1}, \qquad a^\dagger\ket{n} = \sqrt{n+1}\,\ket{n+1}}
$$

만약 어떤 ket에 $a$연산자를 연속적으로 적용해서, 끝도 없이 에너지 상태를 내릴 수 있으면 안된다. 어딘가에는 바닥이 필요하다. 
맨 처음 상태가 $\ket{M}$일 때, $a$를 계속 적용하다 보면 m번째 ket 앞에 $\sqrt{M-m}$이 곱해질 것이다. 언젠가는 이 값이 0이어야 에너지 내림을 멈출 수 있다. 
그러므로 $M$은 0 이상의 정수여야 한다. 

### $\ket{n}$의 생성

$\ket{n}$이 어떻게 생겼는지 알고 싶다면, 바닥상태로부터 raising operator를 적용하여 차례로 찾아가면 된다. 
$$
\ket{1} = a^\dagger\ket{0}, \quad \ket{2} = \frac{1}{\sqrt{2}}a^\dagger\ket{1} = \frac{1}{\sqrt{2}}(a^\dagger)^2\ket{0}, \quad \cdots
$$

$$
\boxed{\ket{n} = \frac{1}{\sqrt{n!}}(a^\dagger)^n\ket{0}}
$$

---

## $\ket{n}$ basis에서 $a$, $a^\dagger$, $x$, $p$의 행렬 표현

$$
\bra{n'} a \ket{n} = \sqrt{n}\,\delta_{n',\,n-1}, \qquad \bra{n'} a^\dagger \ket{n} = \sqrt{n+1}\,\delta_{n',\,n+1}
$$
대각선에서 딱 한 끝 벗어난 대각선에 1이 있는 모습. 

$x$와 $p$의 행렬 원소:

$$
\bra{n'} x \ket{n} = \sqrt{\frac{\hbar}{2m\omega}}\left(\sqrt{n}\,\delta_{n',n-1} + \sqrt{n+1}\,\delta_{n',n+1}\right)
$$
$$
\bra{n'} p \ket{n} = i\sqrt{\frac{\hbar m\omega}{2}}\left(\sqrt{n+1}\,\delta_{n',n+1} - \sqrt{n}\,\delta_{n',n-1}\right)
$$

$x$와 $p$에는 **diagonal term이 없다**. 따라서 에너지 eigenstate에서 $\langle x \rangle$와 $\langle p \rangle$는 모두 0이다.

### $\langle x^2 \rangle_n$ 계산

$$
x^2 = \frac{\hbar}{2m\omega}\left(a^2 + a^{\dagger 2} + aa^\dagger + a^\dagger a\right)
$$
$$
\langle x^2 \rangle_n = \frac{\hbar}{2m\omega}\left[(\sqrt{n+1})^2\braket{n+1|n+1} + (\sqrt{n})^2\braket{n-1|n-1}\right] = \frac{\hbar}{2m\omega}(2n+1)
$$

비슷하게:

$$
\langle p^2 \rangle_n = \frac{1}{2}\hbar m\omega (2n+1)
$$

에너지 중 **운동 에너지와 퍼텐셜 에너지의 기댓값은 동등하게 나뉜다** (virial theorem):

$$
\frac{1}{2m}\langle p^2 \rangle_n = \frac{1}{2}m\omega^2\langle x^2 \rangle_n = \frac{1}{4}\hbar\omega(2n+1) = \frac{1}{2}\langle \mathcal{H} \rangle_n
$$

### Uncertainty 확인

$$
\langle (\Delta x)^2 \rangle_n \langle (\Delta p)^2 \rangle_n = \hbar^2\left(n+\frac{1}{2}\right)^2 \geq \frac{\hbar^2}{4}
$$

최솟값은 $n=0$ ground state에서 $\frac{\hbar^2}{4}$로, **불확정성 원리를 등호로 만족**한다.

---

## Wave Function $\psi_n(x)$

**$\psi_0(x) = \braket{x'|0}$을 $\bra{x'}a\ket{0} = 0$ 조건으로 구한다.**

$$
\bra{x'} a \ket{0} = \sqrt{\frac{m\omega}{2\hbar}}\bra{x'}\left(x + \frac{iP}{m\omega}\right)\ket{0} = \sqrt{\frac{m\omega}{2\hbar}}\left(x' + \frac{\hbar}{m\omega}\frac{\partial}{\partial x'}\right)\psi_0(x') = 0
$$

$\chi_0^2 \equiv \frac{\hbar}{m\omega}$로 정의하면, 이 방정식의 해:

$$
\left(x' + \chi_0^2\frac{d}{dx'}\right)\psi_0(x') = 0
$$

$$
\boxed{\psi_0(x') = \frac{1}{\pi^{1/4}\sqrt{\chi_0}} \exp\left(-\frac{1}{2}\left(\frac{x'}{\chi_0}\right)^2\right)}
$$

높은 $n$의 wave function은 올림 연산자를 적용하여 차례로 구할 수 있다:

$$
\psi_1(x') = \braket{x'|1} = \bra{x'} a^\dagger \ket{0} = \frac{1}{x_0\sqrt{2}}\left(x' - \chi_0^2\frac{d}{dx'}\right)\psi_0
$$

이를 반복하면 올림 연산자로 $\psi_n$을 모두 구할 수 있다.

---

## Coherent State

### 동기

고전적인 조화진동자처럼 운동하는 상태가 있는가? 
즉, expectation value가 고전적 궤도를 따르면서 uncertainty가 최소인 상태가 있을까?
이를 **coherent state** $\ket{\alpha}$라 부른다.

$$
\ket{\alpha(0)} = \sum_{n=0}^{\infty} C_n \ket{n}, \qquad \ket{\alpha(t)} = \sum_{n=0}^{\infty} C_n e^{-i E_n t/\hbar} \ket{n} = \sum_{n=0}^{\infty} C_n \exp\!\left(-i\omega\left(n+\frac{1}{2}\right)t\right)\ket{n}
$$

### 정의: $a$의 eigenstate

Coherent state는 **내림 연산자 $a$의 eigenstate**로 정의한다:

$$
a\ket{\alpha} = \alpha\ket{\alpha}
$$

($a^\dagger$의 eigenstate는 존재하지 않는다는 점에 주의.)

### $C_n$ 계산

$\ket{\alpha} = \sum_n C_n \ket{n}$으로 전개하면,

$$
a\ket{\alpha} = \sum_{n=0}^{\infty} C_n \sqrt{n}\,\ket{n-1} = \sum_{n=0}^{\infty} C_{n+1}\sqrt{n+1}\,\ket{n} = \alpha\sum_n C_n\ket{n}
$$

항등식으로부터 점화식: $C_{n+1}\sqrt{n+1} = \alpha C_n$, 즉

$$
C_{n+1} = \frac{\alpha}{\sqrt{n+1}}C_n \implies C_n = \frac{\alpha^n}{\sqrt{n!}}C_0
$$

$C_0$는 normalization으로 결정:

$$
1 = \braket{\alpha|\alpha} = \sum_{n=0}^{\infty}|C_n|^2 = |C_0|^2 \sum_{n=0}^{\infty}\frac{|\alpha|^{2n}}{n!} = |C_0|^2 e^{|\alpha|^2}
$$
$$
|C_0|^2 = e^{-|\alpha|^2} \implies C_n = \frac{\alpha^n}{\sqrt{n!}}e^{-|\alpha|^2/2}
$$

$$
\boxed{\ket{\alpha} = e^{-|\alpha|^2/2}\sum_{n=0}^{\infty}\frac{\alpha^n}{\sqrt{n!}}\ket{n}}
$$

### Coherent State의 시간 진화

Coherent state는 $a$의 eigenstate이므로 time evolution에 의해 phase만 바뀌고 **eigenvalue만 변화한다:**

$$
a\ket{\alpha(t)} = \alpha e^{-i\omega t}\ket{\alpha(t)}
$$

즉, $\ket{\alpha(t)}$는 여전히 coherent state이고, eigenvalue가 $\alpha(t) = \alpha e^{-i\omega t}$로 변한다.

**유도:**

$$
a\ket{\alpha(t)} = aU\ket{\alpha} = UU^\dagger a U\ket{\alpha} = U\,a^H(t)\ket{\alpha} = U\,e^{-i\omega t}a_0\ket{\alpha} = e^{-i\omega t}\alpha\,U\ket{\alpha} = \alpha e^{-i\omega t}\ket{\alpha(t)}
$$
즉 $\ket{\alpha(t)}$와 $\ket{\alpha(0)}$는 서로 phase만 다른 eigen value를 내놓는다. 

### Expectation Values

Coherent state의 위치와 운동량에 대한 expectation value를 구해보자. 과연 고전적으로 진동할까?

$$
x = \sqrt{\frac{\hbar}{2m\omega}}(a + a^\dagger), \qquad p = i\sqrt{\frac{m\hbar\omega}{2}}(a^\dagger - a)
$$
이를 이용하면 쉽게 구할 수 있다. 
$\braket{a^\dagger}_\alpha = \bra{\alpha} a^\dagger \ket{\alpha} = \braket{a \alpha|\alpha} = a^*$ 이 식을 이용
$$
\langle x \rangle_\alpha = \sqrt{\frac{\hbar}{2m\omega}}\left(\alpha(t) + \alpha^*(t)\right)
$$

$$
\langle p \rangle_\alpha = i\sqrt{\frac{m\hbar\omega}{2}}\left(\alpha^*(t) - \alpha(t)\right)
$$

$\alpha(t) = \alpha e^{-i\omega t}$를 이용하면:

$$
\langle x \rangle_\alpha = x_0 \cos(\omega t), \qquad \langle p \rangle_\alpha = p_0 \sin(\omega t)
$$

**Expectation value가 고전적인 조화진동자 해를 따른다.**

### $\langle x^2 \rangle$와 $\langle p^2 \rangle$

$\bra{\alpha} a a^\dagger\ket{\alpha}$는 직접 계산하기 힘들다. 
$a a^\dagger = 1 + a^\dagger a$의 관계를 이용하자. 
$$
x^2 = \frac{\hbar}{2m\omega}\left(a^2 + a^{\dagger 2} + 2a^\dagger a + 1\right)
$$
복소 켤레 연산에 주의한다. 
$$
\langle x^2 \rangle_\alpha = \frac{\hbar}{2m\omega}\left(\alpha^2 + \alpha^{*2} + 2|\alpha|^2 + 1\right)
$$

$$
p^2 = -\frac{m\hbar\omega}{2}\left(a^2 + a^{\dagger 2} - 2a^\dagger a - 1\right)
$$

$$
\langle p^2 \rangle_\alpha = \frac{m\hbar\omega}{2}\left(-\alpha^2 - \alpha^{*2} + 2|\alpha|^2 + 1\right)
$$

### Uncertainty 계산

$$
\langle (\Delta x)^2 \rangle_\alpha = \langle x^2 \rangle_\alpha - \langle x \rangle_\alpha^2
$$

$$
= \frac{\hbar}{2m\omega}\left(\alpha^2 + \alpha^{*2} + 2|\alpha|^2 + 1\right) - \frac{\hbar}{2m\omega}(\alpha + \alpha^*)^2 = \frac{\hbar}{2m\omega}
$$

$$
\langle (\Delta p)^2 \rangle_\alpha = \frac{m\hbar\omega}{2}
$$

$$
\langle (\Delta x)^2 \rangle\langle (\Delta p)^2 \rangle = \frac{\hbar^2}{4}
$$

**Coherent state는 불확정성 원리를 등호로 만족한다.** ($n=0$ ground state와 동일한 수준의 최소 uncertainty)

> **특이 사항**: $\alpha = 0$인 coherent state는 그냥 ground state $\ket{0}$이다.

### Wave Function in Position Basis

$\xi = \sqrt{\frac{m\omega}{\hbar}}\,x'$로 정의하면:

$$
\psi_\alpha(\xi) = C' \exp\!\left(-\frac{1}{2}(\xi - \sqrt{2}\,\alpha)^2\right)
$$

이는 $\xi$를 중심으로 이동한 **Gaussian 분포**이다. Coherent state의 wave function은 고전적 진폭 주위를 최소 uncertainty로 진동하는 Gaussian wave packet.

> **질문**: $\alpha$는 아무 복소수나 가능한가?

# 궁금한 내용

## Q. $\alpha$는 아무 복소수나 가능한가?

**결론: 그렇다.** $\alpha \in \mathbb{C}$는 완전히 자유롭다.

**수학적 근거**: $C_n = \frac{\alpha^n}{\sqrt{n!}}e^{-|\alpha|^2/2}$으로 이루어진 급수는 모든 복소수 $\alpha$에 대해 수렴한다. $\sum_{n=0}^\infty \frac{|\alpha|^{2n}}{n!} = e^{|\alpha|^2}$이 항상 유한하므로 normalization도 항상 가능하다.

**물리적 의미**: $\alpha = |\alpha|e^{i\theta}$로 쓰면,

$$
\langle x \rangle = \sqrt{\frac{2\hbar}{m\omega}}|\alpha|\cos\theta, \qquad \langle p \rangle = \sqrt{2m\hbar\omega}|\alpha|\sin\theta
$$

- $|\alpha|$: 진동의 **진폭**
- $\theta$: 초기 **위상**

고전 조화진동자에서 초기 조건 $(x_0, p_0)$을 자유롭게 고를 수 있는 것처럼, $\alpha \in \mathbb{C}$도 완전히 자유롭다.

| $\alpha$ 값 | 의미 |
|---|---|
| $\alpha = 0$ | Ground state $\ket{0}$ 그 자체 |
| $\alpha$ 실수 | $t=0$에서 $\langle p \rangle = 0$, 변위 최대 위치에서 출발 |
| $\alpha$ 순허수 | $t=0$에서 $\langle x \rangle = 0$, 평형점 통과 시점에서 출발 |
| $|\alpha| \gg 1$ | 고전 극한 — 진폭이 크고 양자 효과가 상대적으로 작아짐 |

**직관**: 복소평면 위의 $\alpha$는 위상 공간의 한 점과 같다. $\alpha(t) = \alpha e^{-i\omega t}$는 복소평면에서 **원운동**을 하며, $|\alpha|$이 반지름, $\theta$가 시작 각도에 해당한다.

# AI의 보충 설명

## Equipartition Theorem vs Virial Theorem

비슷해 보이지만 다른 정리들이다. **Virial theorem이 더 일반적**이고, equipartition theorem은 그 특수한 경우로 볼 수 있다.

### Virial Theorem (역학적 정리)

정상 상태에서 $\frac{d}{dt}\langle xp \rangle = 0$을 이용하면:

$$
\frac{d}{dt}\langle xp \rangle = \frac{i}{\hbar}\langle [H, xp] \rangle = 0 \implies 2\langle T \rangle = \left\langle x\frac{dV}{dx} \right\rangle
$$

SHO의 경우 $V = \frac{1}{2}m\omega^2 x^2$이므로 $x\frac{dV}{dx} = 2V$, 따라서:

$$
\langle T \rangle = \langle V \rangle
$$

일반적으로 $V \propto r^n$이면 $\langle T \rangle = \frac{n}{2}\langle V \rangle$.

### Equipartition Theorem (통계역학적 정리)

Hamiltonian에 **이차식으로 등장하는 자유도 하나당** $\frac{1}{2}k_BT$의 에너지:

$$
\left\langle \frac{p^2}{2m} \right\rangle = \frac{1}{2}k_BT, \qquad \left\langle \frac{1}{2}m\omega^2 x^2 \right\rangle = \frac{1}{2}k_BT
$$

### 비교

| | Virial Theorem | Equipartition Theorem |
|---|---|---|
| 분야 | 역학 (고전/양자) | 통계역학 |
| 조건 | 정상 상태, 임의의 $V\propto r^n$ | 열평형, $H$에 이차식으로 등장 |
| 결론 | $\langle T\rangle = \frac{n}{2}\langle V\rangle$ | 자유도당 $\frac{1}{2}k_BT$ |

SHO에서 virial theorem은 "$T$와 $V$의 기댓값이 같다"는 것을, equipartition theorem은 "그 각각이 $\frac{1}{2}k_BT$"임을 말한다. 전자는 순수하게 역학적 결과, 후자는 여기에 열평형 조건이 더해진 것이다.

# 연관 학습 노트



# References

# 다음 강의


# 원본 필기 이미지

[[QM_5thweek_1.pdf]]
[[QM_5thweek_2.pdf]]
![[Pasted image 20260326162634.png]]
![[Pasted image 20260326162639.png]]![[Pasted image 20260327101813.png]]

![[Pasted image 20260327101821.png]]![[Pasted image 20260327101826.png]]

![[Pasted image 20260327101832.png]]