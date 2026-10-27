---
title: "QM lecture note - The Relativistic Correction to the Kinetic Energy"
date: "2026-10-25"
subject: "quantum mechanics"
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
[[QM lecture note - Linear Stark Effect]]


# 오늘의 핵심


$$
V = -\frac{(\mathbf{p}^2)^2}{8m_e^3c^2}
\tag{5.97}
$$
이제 문제는 $\mathbf{p}^4$의 expectation value를 구하는 것으로 바뀐다. 

Perturbation의 Rotational symmetry → $\mathbf{L}$의 eigenstate가 good state

스핀 신경 안 씀, $\ket{n \, l \, m}$ $m$은 오비탈의 $z$ 방향 각운동량량

$$
\Delta_{nl}^{(1)} = E_n^{(0)}\left[\frac{Z^2\alpha^2}{n^2}\left(-\frac{3}{4} + \frac{n}{l + \frac{1}{2}}\right)\right]
\tag{5.104a}
$$

$$
\Delta_{nl}^{(1)} = -\frac{1}{2}m_ec^2Z^4\alpha^4\left[-\frac{3}{4n^4} + \frac{1}{n^3\left(l + \frac{1}{2}\right)}\right]
\tag{5.104b}
$$
계산을 쉽게 하는 꼼수가 있다. 
운동에너지 = 해밀토니안 - 포텐셜
을 이용, 
$$
\frac{(\mathbf{p}^2)^2}{8m_e^3c^2} = \frac{1}{2m_ec^2}\left(\frac{\mathbf{p}^2}{2m_e}\right)^2 = \frac{1}{2m_ec^2}\left(H_0 + \frac{Ze^2}{r}\right)^2
\tag{5.100}
$$

$$
\Delta_{nl}^{(1)} = -\frac{1}{2m_ec^2}\left[\left(E_n^{(0)}\right)^2 + 2E_n^{(0)}\bra{nlm}\frac{Ze^2}{r}\ket{nlm} + \bra{nlm}\frac{(Ze^2)^2}{r^2}\ket{nlm}\right]
\tag{5.101}
$$
이제는 $\langle 1/r \rangle$ 과 $\langle 1/r^2 \rangle$를 찾는 문제로 바뀌었다. 

#### $\langle 1/r \rangle$ 을 구하는 올바른 방법 → 쿨롱 포텐셜에 perturbation theory

$$
H_0 = \frac{\mathbf{p}^2}{2m_e} - \frac{Ze^2}{r}
\tag{5.95}
$$

원래 이랬던 해밀토니안에, **작은** perturbation $\lambda\left(-\frac{Ze^2}{r}\right)$를 더한다.

#### $\langle 1/r^2 \rangle$: auxiliary perturbation $V_\gamma = \gamma/r^2$
비슷한 접근법으로  $\langle 1/r^2 \rangle$도 구할 수 있다. 
해밀토니안에  $V_\gamma = \gamma/r^2$가 perturbation으로 들어간 것이다. 

자세한 내용은 일단 생략하자. 
$$
\bra{nlm}\frac{(Ze^2)^2}{r^2}\ket{nlm} = \frac{4n}{l + \frac{1}{2}}\left(E_n^{(0)}\right)^2
\tag{5.103}
$$


# 필기 내용

Sakurai 5.3.1 The Relativistic Correction to the Kinetic Energy

## Symbol table

| Symbol              | Meaning                                             |
| ------------------- | --------------------------------------------------- |
| $m_e$               | Electron mass                                       |
| $c$                 | Speed of light                                      |
| $Z$                 | Atomic number (nuclear charge $= Z\lvert e \rvert$) |
| $e$                 | Electron charge ($e < 0$, Sakurai convention)       |
| $\alpha$            | Fine-structure constant, $\alpha = e^2/\hbar c$     |
| $\mathbf{p}$        | Momentum operator                                   |
| $\mathbf{L}$        | Orbital angular momentum operator                   |
| $H_0$               | Unperturbed (nonrelativistic) Hamiltonian           |
| $K$                 | Relativistic kinetic energy                         |
| $V$                 | Perturbation (relativistic correction)              |
| $\ket{nlm}$         | Hydrogenlike atom eigenstate                        |
| $E_n^{(0)}$         | Unperturbed energy eigenvalue                       |
| $\Delta_{nl}^{(1)}$ | First-order energy shift                            |
| $V_\gamma$          | Expectation value 계산을 위한 auxiliary perturbation     |

## Unperturbed Hamiltonian
전자가 하나 있고, 핵의 전하가 $Z$인 원자에 대해 unperturbed Hamiltonian을 일반적으로 나타내면 이렇다. 

$$
H_0 = \frac{\mathbf{p}^2}{2m_e} - \frac{Ze^2}{r}
\tag{5.95}
$$

이로 인한 eigen energy는 이렇다. 
$$
E_n^{(0)} = -\frac{1}{2}m_e c^2\frac{Z^2\alpha^2}{n^2}
\tag{3.315}
$$
이게 나중 풀이를 위한 떡밥이라는 점. 
## Relativistic kinetic energy
상대론을 생각하면 운동에너지 식이 아래와 같이 수정된다. 자세한 이유는 몰라도 되겠지...

$$
K = \sqrt{\mathbf{p}^2c^2 + m_e^2c^4} - m_e c^2 \approx \frac{\mathbf{p}^2}{2m_e} - \frac{(\mathbf{p}^2)^2}{8m_e^3c^2}
\tag{5.96}
$$

## Perturbation
$\mathbf{p}$ 4차항 까지만 생각했을 때, 원래 알고 있던 고전적 운동에너지에 $- \frac{(\mathbf{p}^2)^2}{8m_e^3c^2}$가 더 붙은 꼴이다. 
이 항이 perturbation 되시겠다.
$$
V = -\frac{(\mathbf{p}^2)^2}{8m_e^3c^2}
\tag{5.97}
$$
이제 문제는 $\mathbf{p}^4$의 expectation value를 구하는 것으로 바뀐다. 
## Rotational symmetry
$V$를 위한 good state는 무엇일지 생각해 보아야 한다. 
이럴 때 대칭성 만큼 간단한 것이 없다. 

$\mathbf{p}^4$는 스칼라이기 때문에 회전 변환을 해도 그대로여야 한다. 
$$
[\mathbf{L}, V] = 0
\tag{5.98}
$$
때문에 각운동량 operator와 commute한다. 

그러면? $\mathbf{L}$의 nondergenerate eigenket인 $\ket{n \, l\,m }$이 $V$를 이미 대각화할 수 있으며, 따로 힘들게 good state를 찾지 않아도 된다는 뜻이다. 
## First-order energy shift
속편히 expectation value를 찾아 $\Delta_{nl}^{(1)}$ 가 뭔지 알아보자. 
$$
\Delta_{nl}^{(1)} = \bra{nlm}V\ket{nlm} = -\bra{nlm}\frac{(\mathbf{p}^2)^2}{8m_e^3c^2}\ket{nlm}
\tag{5.99}
$$

## Rewriting $(\mathbf{p}^2)^2$ with $H_0$
계산을 쉽게 하는 꼼수가 있다. 
운동에너지 = 해밀토니안 - 포텐셜
을 이용, 
$$
\frac{(\mathbf{p}^2)^2}{8m_e^3c^2} = \frac{1}{2m_ec^2}\left(\frac{\mathbf{p}^2}{2m_e}\right)^2 = \frac{1}{2m_ec^2}\left(H_0 + \frac{Ze^2}{r}\right)^2
\tag{5.100}
$$

$$
\Delta_{nl}^{(1)} = -\frac{1}{2m_ec^2}\left[\left(E_n^{(0)}\right)^2 + 2E_n^{(0)}\bra{nlm}\frac{Ze^2}{r}\ket{nlm} + \bra{nlm}\frac{(Ze^2)^2}{r^2}\ket{nlm}\right]
\tag{5.101}
$$
이제는 $\langle 1/r \rangle$ 과 $\langle 1/r^2 \rangle$를 찾는 문제로 바뀌었다. 

## Expectation values

### $\langle 1/r \rangle$: auxiliary perturbation $V_\gamma = \gamma/r$
$\bra{nlm}\frac{Ze^2}{r}\ket{nlm}$ 을 찾는 건 간단하다. 핵의 전하량이 달라지는 경우를 생각하면 되거든. 


$$
H_0 = \frac{\mathbf{p}^2}{2m_e} - \frac{Ze^2}{r}
\tag{5.95}
$$
원래 이랬던 해밀토니안에, $- \frac{Ze^2}{r}$를 더한다. 

$$
H_0'= \frac{\mathbf{p}^2}{2m_e} - \frac{Ze^2 }{r}- \frac{Ze^2}{r} =  \frac{\mathbf{p}^2}{2m_e}   - \frac{2Ze^2 }{r}

$$
이렇게, $Z \rightarrow Z' =2Z$로 바뀐 것이다. 

$Z'$를 $E_n^{(0)} = -\frac{1}{2}m_e c^2\frac{Z^2\alpha^2}{n^2}$ 안에 대입해서 에너지 변화량을 확인하면, 그것이 바로 $-\bra{nlm}\frac{Ze^2}{r}\ket{nlm}$ 

$$E_n^{'(0)} = -\frac{1}{2}m_e c^2\frac{Z^{'2}\alpha^2}{n^2} = 4 E_n^{
(0)}
$$
$$
-\bra{nlm}\frac{Ze^2}{r}\ket{nlm} = E_n^{'(0)} - E_n^{(0)} = 3E_n^{(0)}
$$

어라... 왜 교과서 답이랑 다르지? $\bra{nlm}\frac{Ze^2}{r}\ket{nlm} = -2E_n^{(0)}$ 가 나와야 하는데? 뭐가 문제이지?
그리고 내가 만약 해밀토니안에 $- y\frac{Ze^2}{r}$넣었다면, ($y$는 유리수) 그러면 또 $\bra{nlm}\frac{Ze^2}{r}\ket{nlm}$ 값이 $y$에 의존하는, 이상한 결과가 나온 것이다!

> [!error] 뭐가 문제인가?
> Perturbation이 원래 해밀토니안과 견줄 만큼 너무 커서 그렇다. 
> $-\frac{Ze^2}{r}$를 통째로 더해서 ($\lambda = 1$) $Z \to 2Z$로 두고 $E_n^{'(0)} - E_n^{(0)} = 3E_n^{(0)}$을 구했다. 이것은 1차 ($2E_n^{(0)}$)와 2차 ($E_n^{(0)}$)가 **합쳐진** exact energy 변화이지, first-order shift가 아니다. Perturbation은 반드시 작은 parameter로 두고 1차 계수만 읽어야 한다.

#### $\langle 1/r \rangle$ 을 구하는 올바른 방법

$$
H_0 = \frac{\mathbf{p}^2}{2m_e} - \frac{Ze^2}{r}
\tag{5.95}
$$

원래 이랬던 해밀토니안에, **작은** perturbation $\lambda\left(-\frac{Ze^2}{r}\right)$를 더한다.

$$
H(\lambda) = \frac{\mathbf{p}^2}{2m_e} - \frac{Ze^2}{r} - \lambda\frac{Ze^2}{r} = \frac{\mathbf{p}^2}{2m_e} - \frac{(1+\lambda)Ze^2}{r}
$$

이렇게, $Z \rightarrow Z' = (1+\lambda)Z$로 바뀐 것이다. 이 문제는 exact하게 풀 수 있다. $E_n^{(0)} \propto Z^2$이므로

$$
E_n(\lambda) = -\frac{1}{2}m_e c^2\frac{(1+\lambda)^2 Z^2\alpha^2}{n^2} = (1+\lambda)^2 E_n^{(0)}
$$

$\lambda$에 대해 전개하면

$$
E_n(\lambda) = E_n^{(0)} + \underbrace{2\lambda E_n^{(0)}}_{\text{1st order}} + \underbrace{\lambda^2 E_n^{(0)}}_{\text{2nd order}}
$$

First-order energy shift는 perturbation의 기댓값이므로, **$\lambda$의 1차 계수만** 비교한다.

$$
\lambda\bra{nlm}\left(-\frac{Ze^2}{r}\right)\ket{nlm} = 2\lambda E_n^{(0)}
$$

$$
\bra{nlm}\frac{Ze^2}{r}\ket{nlm} = -2E_n^{(0)}
\tag{5.102}
$$

이게 맞는 결과다.....


### $\langle 1/r^2 \rangle$: auxiliary perturbation $V_\gamma = \gamma/r^2$
비슷한 접근법으로  $\langle 1/r^2 \rangle$도 구할 수 있다. 
해밀토니안에  $V_\gamma = \gamma/r^2$가 perturbation으로 들어간 것이다. 

자세한 내용은 일단 생략하자. 
$$
\bra{nlm}\frac{(Ze^2)^2}{r^2}\ket{nlm} = \frac{4n}{l + \frac{1}{2}}\left(E_n^{(0)}\right)^2
\tag{5.103}
$$

## Result

지금까지의 결과를 모두 합치면 아래 결과가 나온다. 
$$
\Delta_{nl}^{(1)} = E_n^{(0)}\left[\frac{Z^2\alpha^2}{n^2}\left(-\frac{3}{4} + \frac{n}{l + \frac{1}{2}}\right)\right]
\tag{5.104a}
$$

$$
\Delta_{nl}^{(1)} = -\frac{1}{2}m_ec^2Z^4\alpha^4\left[-\frac{3}{4n^4} + \frac{1}{n^3\left(l + \frac{1}{2}\right)}\right]
\tag{5.104b}
$$


# 궁금한 내용


# 연관 학습 노트

- [[양자 필기 - Relativistic Correction to Hydrogen]]
- [[Sakurai 5.17 - Darwin Term and Fine Structure]]
- [[QM lecture note - Time-Independent Nondegenerate Perturbation Theory]]
- [[QM lecture note - Time-Independent Degenerate Perturbation Theory]]
- [[양자 필기 - Good States in Degenerate Perturbation Theory]]

# 다음 강의
[[QM lecture note - Spin-Orbit Interaction and Fine Structure]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.3.1


