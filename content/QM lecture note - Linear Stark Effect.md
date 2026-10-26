---
title: QM lecture note - Linear Stark Effect
date: 2026-10-25
subject: quantum mechanics
tags:
  - study
  - lecture
  - quantum_mechanics
class: study
---

> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의
[[QM lecture note - Time-Independent Degenerate Perturbation Theory]]


# 오늘의 핵심


# 필기 내용

Sakurai 5.2.1 Linear Stark Effect

## Symbol table

| Symbol             | Meaning                                         |
| ------------------ | ----------------------------------------------- |
| $n$                | Principal quantum number                        |
| $l$                | Orbital angular momentum quantum number         |
| $m$                | Magnetic quantum number                         |
| $e$                | Electron charge ($e < 0$, Sakurai convention)   |
| $a_0$              | Bohr radius                                     |
| $\mathbf{E}$       | Uniform external electric field ($z$-direction) |
| $V$                | Perturbation operator                           |
| $\ket{2s, m=0}$    | $n=2$, $l=0$ state                              |
| $\ket{2p, m}$      | $n=2$, $l=1$ state ($m = 0, \pm 1$)             |
| $\Delta_\pm^{(1)}$ | First-order energy shift                        |
| $\ket{\pm}$        | $V$를 대각화하는 zeroth-order kets (good states)      |

## Degeneracy of the hydrogen atom
Stark effect, 전기장이 있을 때 수소 전자의 에너지가 달라지는 현상. 
이제 degenerate한 상황도 풀 수 있으니, $n=2$ 라서 $4$의 degeneracy가 있는 상황도 다룰 수 있다. 

한번 풀어보자. 
제일 기본, 양자수 $l$값은 상한이 $n$에 의해 주어진다는 사실을 기억하자.
$$
0 \le l < n
\tag{5.89}
$$
$n = 1$이면 $l = 0$만 있어서 s-orbital만 있고, $n=2$이면 $l=0,1$이 가능해서 s, p-orbital이 있는 식이다. 

에너지 준위는 $n$으로만 결정되어, 
$$
E_n = -\frac{e^2}{2a_0}\cdot \frac{1}{n^2}
$$
이었다. 앞에 비례 상수가 $-\frac{e^2}{2a_0}$....

따라서 $n=2$일 때는, 
$$
E_{n=2} = -\frac{e^2}{8a_0}
$$

## Perturbation
전기장이 $\hat{z}$ direction으로 있다. 그러면 perturbation은 $z$ 방향 위치와 전기장 세기와 전하량의 곱

$$
V = -ez|\mathbf{E}|
\tag{5.90}
$$
==이때, Sakurai convention 상 $e$가 전자의 전하, 음수라는 점에 유의==

Eigen energy 기호와 전기장 세기 기호를 혼동하지 않기 위해, 계속 $|\mathbf{E}|$ 라고 쓰겠다. 

이 시스템은 스핀의 영향을 받지 않는다. 따라서 스핀은 ket에서 표기하지 않는다. 
양자수 $m$은 orbital $m$을 의미한다. 
## Matrix representation in the $n=2$ subspace
$V$를 degenerate subspace에서 나타내보자. 
$\ket{l=0, m=0}$, $\ket{l=1, m=0}$, $\ket{l=1, m=1}$ ,  $\ket{l=1, m=-1}$ 이 네가지가 있다. 
$4 \times 4$ matrix의 모든 원소를 구할 필요... 없다!

관건은 $\bra{ } z \ket{}$이 얼마인지가 중요한데, $z$의 특성을 이용해서 selection rule을 쓸 수 있기 때문. 

샌드위치가 0이 아니기 위해서는.. 
- **Parity selection rule**: $\Delta l$ (양쪽 ket의 $l$값 차이) 이 odd number여야 한다. 
	 $l$이 짝수이면 wave function이 parity even, 홀수이면 parity odd이다. 
	 Why? 중간에 샌드위치되는 연산자 $A$가 parity에 odd이라면, 
	 $\Pi A \Pi^{\dagger} = -A$ , $\bra{\alpha} A \ket{\beta} = \bra{\alpha}\Pi^{\dagger}\Pi A \Pi^{\dagger}\Pi\ket{\beta} = -\bra{\Pi \alpha} A \ket{\Pi \beta} = -\pi_\alpha \pi_\beta \bra{\alpha} A \ket{\beta}$ ($\Pi\ket{\beta} = \pi_\beta\ket{\beta}$). 따라서 $\pi_\alpha\pi_\beta = -1$일 때만 0이 아니다.
	 즉, 양쪽 ket의 parity가 반대여야 한다. 
	 → 현 상황에 활용: $z$는 parity odd이다. $\Delta l$이 홀수인 transition만 0이 아니다 ($\Delta l = 2$처럼 $l$이 달라도 parity가 같으면 0). 즉, $l=1$인 상태가 다른 $l=1$ 상태가 될 수는 없다는 것.
- **Rotational selection rule**: 어떤 연산자 $A$가 $[L_z, A] = 0$ , 즉 $z$ 축 회전에 대칭적이라면, 
	 이 연산자는 $m$값을 바꿀 수 없다. $\Delta m =0$ 이어야 샌드위치가 0이 아님.
	 Why? $\bra{\alpha}[L_z, A]  \ket{\beta} = \hbar(m_\alpha - m_\beta)\bra{\alpha}A\ket{\beta} =0$
	 → 현 상황에 활용: $m$이 같은 상태끼리만 전환될 수 있다. 

두 조건을 조합하면, $\ket{l=0, m=0}$와  $\ket{l=1, m=0}$ 사이 전환만 0이 아니며, 나머지는 다 0이라는 것을 알 수 있다. 


$$
V = \begin{pmatrix} 0 & \bra{2s}V\ket{2p, m=0} & 0 & 0 \\ \bra{2p, m=0}V\ket{2s} & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
\tag{5.91}
$$

$$
\bra{2s}V\ket{2p, m=0} = \bra{2p, m=0}V\ket{2s} = 3ea_0|\mathbf{E}|
\tag{5.92}
$$
저거 계산은 어떻게 한 거냐 묻는다면, 그저 적분을 했을 뿐이다.
아래 계산 과정은 보든지 말든지.

#### (5.92) 계산: $\bra{2s}V\ket{2p, m=0}$

**Wave functions** ($\psi_{nlm} = R_{nl}(r)Y_l^m(\theta,\phi)$)

$$
\psi_{200} = \frac{1}{\sqrt{32\pi a_0^3}}\left(2 - \frac{r}{a_0}\right)e^{-r/2a_0}
$$

$$
\psi_{210} = \frac{1}{\sqrt{32\pi a_0^3}}\,\frac{r}{a_0}\,e^{-r/2a_0}\cos\theta
$$

**적분 세우기** ($z = r\cos\theta$, $d^3x = r^2\sin\theta\,dr\,d\theta\,d\phi$)

$$
\bra{2s}z\ket{2p, m=0} = \frac{1}{32\pi a_0^3}\int_0^\infty\left(2 - \frac{r}{a_0}\right)\frac{r}{a_0}\,e^{-r/a_0}\,r\cdot r^2\,dr\int\cos^2\theta\,d\Omega
$$

$\cos\theta$가 하나는 $z$에서, 하나는 $\psi_{210}$에서 와서 $\cos^2\theta$가 된다. $m = \pm 1$이었다면 $e^{\pm i\phi}$ 때문에 $\phi$ 적분이 0이 된다. → (5.91)의 selection rule

**Angular part**

$$
\int\cos^2\theta\,d\Omega = 2\pi\int_0^\pi\cos^2\theta\sin\theta\,d\theta = \frac{4\pi}{3}
$$

**Radial part** ($\int_0^\infty r^n e^{-r/a_0}dr = n!\,a_0^{n+1}$) → 이런 적분 공식을 써야하는구나 부분적분으로 하면 고생하겠는데

$$
\frac{1}{a_0}\int_0^\infty\left(2r^4 - \frac{r^5}{a_0}\right)e^{-r/a_0}dr = \frac{1}{a_0}\left(2\cdot 4!\,a_0^5 - \frac{5!\,a_0^6}{a_0}\right) = \frac{1}{a_0}(48 - 120)a_0^5 = -72a_0^4
$$

**합치기**

$$
\bra{2s}z\ket{2p, m=0} = \frac{1}{32\pi a_0^3}\cdot\frac{4\pi}{3}\cdot(-72a_0^4) = -3a_0
$$

$$
\bra{2s}V\ket{2p, m=0} = -e|\mathbf{E}|\cdot(-3a_0) = 3ea_0|\mathbf{E}|
$$

## Energy shifts and zeroth-order kets
$V$를 알았으니 대각화만 하면 된다. 
이걸  $\ket{l=0, m=0}$와  $\ket{l=1, m=0}$의 공간에서만 표현하는,  $2 \times 2$ 행렬로 다시 reduce. 

$$
  3ea_0 | \mathbf{E} |\begin{pmatrix} 0 &1 \\ 1 & 0   \end{pmatrix}
$$

$\begin{pmatrix} 0 &1 \\ 1 & 0   \end{pmatrix}$행렬은 eigen value가 $\pm 1$,  eigenvector는 $\frac{1}{\sqrt{2}}(1 \, \pm 1)^{T}$이라는 것을 우리는 안다. 

$$
\Delta_\pm^{(1)} = \pm 3ea_0|\mathbf{E}|
\tag{5.93}
$$

$$
\ket{\pm} = \frac{1}{\sqrt{2}}\left(\ket{2s, m=0} \pm \ket{2p, m=0}\right)
\tag{5.94}
$$
에너지 변화가 $|\mathbf{E}|$의 1차식부터 시작하기 때문에 이것을 linear Stark effect라고 부른다. 

### Energy-level diagram (Fig. 5.1)

![[Pasted image 20261025184909.png]]

> [!note] AI 답변 — 왜 $\ket{+}$가 아래로 가나
> Sakurai에서 $e < 0$이므로 $\Delta_+^{(1)} = 3ea_0|\mathbf{E}| = -3|e|a_0|\mathbf{E}| < 0$이다. 즉 $\ket{+}$는 내려가고 $\ket{-}$는 올라간다. 그림의 $3ea_0|\mathbf{E}|$는 간격의 크기를 표시한 것이다.
> 
> 물리적 확인: $\bra{+}z\ket{+} = \bra{2s}z\ket{2p, m=0} = -3a_0$이므로 $\ket{+}$에서 전자는 $-z$ 쪽으로 치우친다. $V = -ez|\mathbf{E}| = |e|z|\mathbf{E}|$이므로 전자는 $-z$ 쪽에 있을수록 에너지가 낮다.
> 
> 어느 state가 "+"라는 이름을 갖는지는 phase convention에 따라 바뀔 수 있지만, "전자가 전기장 반대 방향으로 치우친 state가 내려간다"는 물리는 convention과 무관하다.

## Permanent electric dipole moment


## Validity: Lamb shift vs. perturbation strength



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Time-Independent Degenerate Perturbation Theory]]
- [[QM lecture note - Nondegenerate Perturbation Theory Examples]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]
- [[양자 HW2 풀이]]

# 다음 강의
[[QM lecture note - The Relativistic Correction to the Kinetic Energy]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.2.1

# 원본 필기 이미지
