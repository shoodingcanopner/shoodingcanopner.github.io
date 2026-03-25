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

단순조화진동자(SHO)에서 Heisenberg 묘사를 적용하면, 사다리 연산자 $a$와 $a^\dagger$의 equation of motion이 uncoupled되어 쉽게 풀린다. 그 결과 $x^H(t)$와 $p^H(t)$는 고전적인 조화진동자와 동일한 형태를 가진다.

$$
x^H(t) = x_0 \cos\omega t + \frac{p_0}{m\omega}\sin\omega t
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

**$a$와 $a^\dagger$에 대한 방정식은 uncoupled이다!** 쉽게 풀면:

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

$a(t)$와 $a^\dagger(t)$를 더하고 빼면 $x$와 $p$에 대해 정리:

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

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

[[QM lecture note - Heisenberg Picture and Equations of Motion]]

# References

# 다음 강의

# 원본 필기 이미지

[[QM_5thweek_1.pdf]]
