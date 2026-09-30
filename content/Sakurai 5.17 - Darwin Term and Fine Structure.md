---
title: Sakurai 5.17 - Darwin Term and Fine Structure
date: "2026-09-22"
subject: quantum mechanics
tags:
  - study
  - problem
  - perturbation-theory
class: study
---
# 문제

> [!question] Sakurai 5.17
> 5장에서는 one-electron atom의 세 가지 relativistic correction 중 두 가지를 유도했다. "relativistic kinetic energy"에서 오는 $\Delta_K^{(1)}$와 spin-orbit interaction에서 오는 $\Delta_{LS}^{(1)}$이다. 세 번째 항은 전기장이 변하는 영역에서 electron wave function이 퍼져 있어서 생기며, 이 "Darwin term"의 perturbation은 다음과 같다.
>
> $$
> V_D = -\frac{1}{8m^2c^2}\sum_{i=1}^{3}\left[p_i,\left[p_i, e\phi(r)\right]\right]
> $$
>
> 여기서 $\phi(r)$은 Coulomb potential이다. $\Delta_D^{(1)}$을 구하고, 다음을 보여라.
>
> $$
> \Delta_{nj}^{(1)} \equiv \Delta_K^{(1)} + \Delta_{LS}^{(1)} + \Delta_D^{(1)} = \frac{mc^2(Z\alpha)^4}{2n^3}\left[\frac{3}{4n} - \frac{1}{j+1/2}\right]
> $$
>
> Section 8.4에서 이 결과를 Coulomb potential 속 Dirac equation의 해와 비교한다.

# 오늘의 핵심

- **Darwin term은 $\nabla^2 V$에 비례**하고, Coulomb potential에서는 $\delta^3(\mathbf{x})$가 되어 **s-state에만 기여**한다.
- 세 correction을 더하면 **$l$-dependence가 완전히 사라지고 $j$에만 의존**한다.
- $l=0$에서 $\Delta_{LS}=0$인 자리를 Darwin term이 정확히 채운다.

# 기호 정리

| Symbol | Meaning |
|--------|---------|
| $e$ | 전자의 전하 ($e<0$). 핵의 전하는 $Z\lvert e\rvert$ |
| $V(r) = e\phi(r)$ | 전자의 potential energy, $V = -Ze^2/r$ |
| $a_0 = \hbar^2/me^2$ | Bohr radius |
| $\alpha = e^2/\hbar c$ | Fine structure constant |
| $E_n^{(0)} = -mc^2(Z\alpha)^2/2n^2$ | Unperturbed energy, 교재 (3.315) |
| $\Delta_K^{(1)}, \Delta_{LS}^{(1)}, \Delta_D^{(1)}$ | Kinetic, spin-orbit, Darwin first-order shift |

계산 내내 쓰는 조합을 먼저 정리해 둔다.

$$
\frac{\hbar^2 e^2}{m^2 c^2 a_0^3} = \frac{\hbar^2 e^2}{m^2c^2}\cdot\frac{m^3 e^6}{\hbar^6} = \frac{m e^8}{\hbar^4 c^2} = mc^2\alpha^4
\tag{0}
$$

# 풀이

## 1. Darwin term의 연산자 형태

### 1-1. 이중 commutator

Position representation에서 $p_i = -i\hbar\,\partial_i$이므로, 임의의 함수 $f(\mathbf{x})$에 대해

$$
[p_i, f] = -i\hbar\,\partial_i f
$$

$\partial_i f$도 위치의 함수이므로 한 번 더 적용하면

$$
[p_i,[p_i,f]] = -i\hbar\,\partial_i\left(-i\hbar\,\partial_i f\right) = -\hbar^2\,\partial_i^2 f
$$

$i$에 대해 합하면

$$
\sum_{i=1}^{3}[p_i,[p_i,f]] = -\hbar^2 \nabla^2 f
\tag{1}
$$

### 1-2. $V_D$ 정리

(1)을 대입하면

$$
V_D = -\frac{1}{8m^2c^2}\left(-\hbar^2\nabla^2 e\phi\right) = \frac{\hbar^2}{8m^2c^2}\nabla^2 V(r)
\tag{2}
$$

Coulomb potential에서 $\nabla^2(1/r) = -4\pi\delta^{3}(\mathbf{x})$이므로

$$
\nabla^2 V = -Ze^2\,\nabla^2\frac{1}{r} = 4\pi Z e^2\,\delta^{3}(\mathbf{x})
$$

따라서

$$
V_D = \frac{\pi\hbar^2 Z e^2}{2m^2c^2}\,\delta^{3}(\mathbf{x})
\tag{3}
$$

## 2. First-order shift $\Delta_D^{(1)}$

### 2-1. Degenerate perturbation theory를 쓸 수 있는 이유

$V_D$는 spin과 무관한 rotational scalar이므로 $\mathbf{L}^2$, $\mathbf{J}^2$, $J_z$와 commute한다. 따라서 $\ket{nljm}$ basis에서 이미 diagonal이고, 교재 (5.99)와 같은 논리로 first-order shift는 expectation value가 된다.

$$
\Delta_D^{(1)} = \bra{nljm}V_D\ket{nljm} = \frac{\pi\hbar^2 Ze^2}{2m^2c^2}\,|\psi_{nl}(0)|^2
\tag{4}
$$

### 2-2. 원점에서의 wave function

$R_{nl}(r)\sim r^l$이므로 $l\neq 0$이면 $\psi(0)=0$이다. 즉 **s-state에만 기여**한다.

$l=0$일 때 $R_{n0}(0) = 2\left(\frac{Z}{na_0}\right)^{3/2}$, $Y_0^0 = \frac{1}{\sqrt{4\pi}}$이므로

$$
|\psi_{n00}(0)|^2 = \frac{4Z^3}{n^3a_0^3}\cdot\frac{1}{4\pi} = \frac{Z^3}{\pi n^3 a_0^3}
$$

Spin 부분은 정규화되어 있으므로 결과에 영향을 주지 않는다.

### 2-3. 결과

(4)에 대입하고 (0)을 쓰면

$$
\Delta_D^{(1)} = \frac{\pi\hbar^2 Ze^2}{2m^2c^2}\cdot\frac{Z^3}{\pi n^3a_0^3}\,\delta_{l0} = \frac{Z^4}{2n^3}\cdot\frac{\hbar^2 e^2}{m^2c^2a_0^3}\,\delta_{l0}
$$

$$
\boxed{\Delta_D^{(1)} = \frac{mc^2(Z\alpha)^4}{2n^3}\,\delta_{l0}}
\tag{5}
$$

## 3. 교재의 $\Delta_K^{(1)}$, $\Delta_{LS}^{(1)}$를 공통 형태로 쓰기

모든 항을 $\dfrac{mc^2(Z\alpha)^4}{2n^3}\,[\;\cdots\;]$ 꼴로 맞춘다.

### 3-1. Relativistic kinetic energy: 교재 (5.104b)

$$
\Delta_K^{(1)} = -\frac{1}{2}mc^2 Z^4\alpha^4\left[-\frac{3}{4n^4} + \frac{1}{n^3(l+\frac{1}{2})}\right] = \frac{mc^2(Z\alpha)^4}{2n^3}\left[\frac{3}{4n} - \frac{1}{l+\frac{1}{2}}\right]
\tag{6}
$$

### 3-2. Spin-orbit: 교재 (5.125)

교재의 식은

$$
\Delta_{LS}^{(1)} = -\frac{Z^2\alpha^2}{2nl(l+1)(l+\frac{1}{2})}E_n^{(0)}\times\begin{cases} l & (j = l+\frac12)\\ -(l+1) & (j = l-\frac12)\end{cases}
$$

$E_n^{(0)} = -\dfrac{mc^2(Z\alpha)^2}{2n^2}$을 넣으면

$$
\Delta_{LS}^{(1)} = \frac{mc^2(Z\alpha)^4}{4n^3}\,\frac{1}{l(l+1)(l+\frac12)}\times\begin{cases} l & (j = l+\frac12)\\ -(l+1) & (j = l-\frac12)\end{cases}
\tag{7}
$$

이것은 $\langle 1/r^3\rangle_{nl} = \dfrac{Z^3}{a_0^3 n^3 l(l+\frac12)(l+1)}$과 교재 (5.114)의 $\langle \mathbf{L}\cdot\mathbf{S}\rangle$를 직접 넣어 얻은 결과와도 같다.

## 4. 세 항의 합

### Case (i): $l \geq 1$, $j = l+\frac12$

Darwin term은 0이고, (7)에서

$$
\Delta_{LS}^{(1)} = \frac{mc^2(Z\alpha)^4}{2n^3}\cdot\frac{1}{(2l+1)(l+1)}
$$

(6)과 합친 괄호 안은

$$
-\frac{2}{2l+1} + \frac{1}{(2l+1)(l+1)} = \frac{-2(l+1)+1}{(2l+1)(l+1)} = -\frac{1}{l+1} = -\frac{1}{j+\frac12}
$$

### Case (ii): $l \geq 1$, $j = l-\frac12$

Darwin term은 0이고, (7)에서

$$
\Delta_{LS}^{(1)} = -\frac{mc^2(Z\alpha)^4}{2n^3}\cdot\frac{1}{l(2l+1)}
$$

(6)과 합친 괄호 안은

$$
-\frac{2}{2l+1} - \frac{1}{l(2l+1)} = -\frac{2l+1}{l(2l+1)} = -\frac{1}{l} = -\frac{1}{j+\frac12}
$$

### Case (iii): $l = 0$, $j = \frac12$

s-state에서는 $\mathbf{L}\ket{\psi}=0$이므로 $\mathbf{L}\cdot\mathbf{S}$가 0이 되어 $\Delta_{LS}^{(1)} = 0$이다. 대신 Darwin term (5)가 살아남는다.

$$
\Delta_K^{(1)} + \Delta_D^{(1)} = \frac{mc^2(Z\alpha)^4}{2n^3}\left[\frac{3}{4n} - 2 + 1\right] = \frac{mc^2(Z\alpha)^4}{2n^3}\left[\frac{3}{4n} - \frac{1}{j+\frac12}\right]
$$

마지막 등호에서 $j+\frac12 = 1$을 썼다.

### 결론

세 경우 모두 $j$에만 의존하는 하나의 식으로 정리된다.

$$
\boxed{\Delta_{nj}^{(1)} \equiv \Delta_K^{(1)} + \Delta_{LS}^{(1)} + \Delta_D^{(1)} = \frac{mc^2(Z\alpha)^4}{2n^3}\left[\frac{3}{4n} - \frac{1}{j+\frac12}\right]}
\tag{8}
$$

# AI의 보충 설명

> [!note] AI 답변: $l$-dependence의 소멸과 Lamb shift
> 합 (8)에서 $l$ 의존성이 완전히 사라지므로, 같은 $n$과 같은 $j$를 가진 상태는 degenerate로 남는다. 예를 들어 $2s_{1/2}$와 $2p_{1/2}$가 그렇다. 이 degeneracy를 깨는 것이 QED의 **Lamb shift**다.

> [!note] AI 답변: 교재 (5.125) 아래 코멘트와의 연결
> 교재는 (5.125)가 "$l=0$에서도 nonzero인데도 Dirac equation의 올바른 답을 준다"고 적고, 그 기원을 Darwin term으로 돌린다. 실제로 (5.125)의 $j=l+\frac12$ 식에 $l=0$을 형식적으로 넣으면 $\dfrac{mc^2(Z\alpha)^4}{2n^3}$이 나오는데, 이것은 (5)의 $\Delta_D^{(1)}$과 **정확히 같다**.
> 물리적으로 올바른 해석은 $l=0$에서 $\Delta_{LS}=0$이고 그 자리를 Darwin term이 채운다는 것이다. 두 값은 수치상 우연히 일치한다.

> [!note] AI 답변: Darwin term의 물리적 그림
> Darwin term은 전자의 위치가 Compton wavelength $\hbar/mc$ 정도로 번져 있는 효과(Zitterbewegung)다. 전자가 느끼는 potential을 주변에서 평균하면
>
> $$
> \langle\delta V\rangle \approx \frac{1}{6}\langle(\delta r)^2\rangle\nabla^2 V
> $$
>
> 가 된다. 따라서 $\nabla^2 V\neq 0$인 곳, 즉 핵의 위치에서만 기여하고, 원점에 확률밀도가 있는 s-state에만 영향을 준다.
> Section 8.4에서 Dirac equation의 exact energy를 $(Z\alpha)^4$ 차수까지 전개하면 (8)이 그대로 나온다.

# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]

# References

- Sakurai & Napolitano, Modern Quantum Mechanics, Section 5.3 (5.3.1 Relativistic Correction to the Kinetic Energy, 5.3.2 Spin-Orbit Interaction and Fine Structure), Problem 5.17
