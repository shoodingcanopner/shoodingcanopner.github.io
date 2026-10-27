---
title: "QM lecture note - Adiabatic Approximation"
date: "2026-10-26"
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


# 오늘의 핵심
Dynamical phase and geometric phase

$$
\theta_n(t) \equiv -\frac{1}{\hbar}\int_0^tE_n(t')\,dt'
\tag{5.217}
$$

$\theta_n$은 time-independent 경우의 $e^{-iE_nt/\hbar}$를 일반화한 것이다 (**dynamical phase**). 

$$
\gamma_n(t) \equiv i\int_0^t\bra{n; t'}\left[\frac{\partial}{\partial t'}\ket{n; t'}\right]dt'
\tag{5.224}
$$
이것은 geometric phase이다. 

(5.224)를 유도하는 방법?


$$
i\hbar\frac{\partial}{\partial t}\ket{\alpha; t} = H(t)\ket{\alpha; t}
\tag{5.215}
$$

$$
\ket{\alpha; t} = \sum_nc_n(t)e^{i\theta_n(t)}\ket{n; t}
\tag{5.216}
$$


$$
\dot{c}_m(t) = -\sum_nc_n(t)e^{i[\theta_n(t) - \theta_m(t)]}\bra{m; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]
\tag{5.219}
$$

(5.214) $H(t)\ket{n; t} = E_n(t)\ket{n; t}$ 를 시간 미분하면 $\dot{H}\ket{n} + H\ket{\dot{n}} = \dot{E}_n\ket{n} + E_n\ket{\dot{n}}$이다. $\bra{m}$ ($m \neq n$)과 내적하면 $\dot{E}_n$ 항은 orthogonality로 사라지고

$$
\bra{m; t}\dot{H}\ket{n; t} = [E_n(t) - E_m(t)]\bra{m; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]
\tag{5.220}
$$

따라서 (5.219)의 $n = m$ 항과 $n \neq m$ 항을 나눠 쓰면

$$
\dot{c}_m(t) = -c_m(t)\bra{m; t}\left[\frac{\partial}{\partial t}\ket{m; t}\right] - \sum_{n\neq m}c_n(t)e^{i(\theta_n - \theta_m)}\frac{\bra{m; t}\dot{H}\ket{n; t}}{E_n - E_m}
\tag{5.221}
$$
Aidiabatic approximation으로 두번째 항을 0으로 만든다. 


이제 $c_n$의 정체를 알 수 있다. 
$$
c_n(t) = e^{i\gamma_n(t)}c_n(0)
\tag{5.223}
$$

$$
\gamma_n(t) \equiv i\int_0^t\bra{n; t'}\left[\frac{\partial}{\partial t'}\ket{n; t'}\right]dt'
\tag{5.224}
$$


# 필기 내용

> [!info] 이 노트의 설명은 Glia가 작성했다.
> 시험 대비로 빠르게 완성한 노트. 이후 직접 읽으면서 고치거나 보충할 것.

Sakurai 5.6.2 Adiabatic Approximation

## Symbol table

| Symbol | Meaning |
|--|--|
| $H(t)$ | Time-dependent Hamiltonian |
| $\ket{n; t}$ | Instantaneous eigenstate of $H(t)$ |
| $E_n(t)$ | Instantaneous eigenvalue |
| $\ket{\alpha; t}$ | 실제로 Schrödinger equation을 따라 시간 발전하는 state |
| $c_n(t)$ | Expansion coefficient |
| $\theta_n(t)$ | Dynamical phase |
| $\gamma_n(t)$ | Geometric phase (→ Berry's phase) |
| $\tau$ | Hamiltonian이 변하는 time scale |

## 1. 아이디어

Hamiltonian의 parameter가 **천천히** 변하면, 처음에 $n$번째 eigenstate에 있던 계는 계속 "그 순간의" $n$번째 eigenstate를 따라간다.

- "천천히"의 기준: 변화의 time scale $T$가 $2\pi\hbar/E_{ab}$ (level 간격에 해당하는 진동 주기)보다 훨씬 길 것
- 고전적 예: 진자를 들고 산을 천천히 오르면, 중력이 약해지면서 주기만 조금씩 길어질 뿐 진자는 정상적으로 흔들린다.
- 양자 예: 수소 원자에 걸린 전기장을 천천히 바꾸면, level이 Stark effect 계산을 그대로 따라간다.

여기서 놓치기 쉬운 것은 **phase**다. 이 절의 진짜 결과는 phase에 숨어 있다.

## 2. Instantaneous eigenstate로 전개

각 순간마다 eigenvalue equation이 있다.

$$
H(t)\ket{n; t} = E_n(t)\ket{n; t}
\tag{5.214}
$$

Schrödinger equation

$$
i\hbar\frac{\partial}{\partial t}\ket{\alpha; t} = H(t)\ket{\alpha; t}
\tag{5.215}
$$

의 해를 instantaneous eigenstate로 전개하되, **에너지에서 오는 phase를 미리 떼어 낸다.**

$$
\ket{\alpha; t} = \sum_nc_n(t)e^{i\theta_n(t)}\ket{n; t}
\tag{5.216}
$$

$$
\theta_n(t) \equiv -\frac{1}{\hbar}\int_0^tE_n(t')\,dt'
\tag{5.217}
$$

$\theta_n$은 time-independent 경우의 $e^{-iE_nt/\hbar}$를 일반화한 것이다 (**dynamical phase**). 
즉, eigen energy가 스리슬쩍 변화하는 상황에서 이 에너지에 의해 누적되어 쌓인 phase이다. 
이렇게 떼어 내면 $c_n(t)$에는 "그 외의 변화"만 남는다.

## 3. $c_m(t)$의 운동방정식

(5.216)을 (5.215)에 넣으면 $\dot{\theta}_n = -E_n/\hbar$ 덕분에 $H$ 항이 상쇄되고

$$
\sum_ne^{i\theta_n(t)}\left[\dot{c}_n(t)\ket{n; t} + c_n(t)\frac{\partial}{\partial t}\ket{n; t}\right] = 0
\tag{5.218}
$$

$\bra{m; t}$와 내적하면 (같은 시각의 eigenstate끼리 orthonormal)

$$
\dot{c}_m(t) = -\sum_nc_n(t)e^{i[\theta_n(t) - \theta_m(t)]}\bra{m; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]
\tag{5.219}
$$

새로운 요소는 $\bra{m; t}\frac{\partial}{\partial t}\ket{n; t}$, 즉 **eigenstate 자체가 시간에 따라 변하는 정도**다.

### $m \neq n$ 항을 $\dot{H}$로 바꾸기

(5.214) $H(t)\ket{n; t} = E_n(t)\ket{n; t}$ 를 시간 미분하면 $\dot{H}\ket{n} + H\ket{\dot{n}} = \dot{E}_n\ket{n} + E_n\ket{\dot{n}}$이다. $\bra{m}$ ($m \neq n$)과 내적하면 $\dot{E}_n$ 항은 orthogonality로 사라지고

$$
\bra{m; t}\dot{H}\ket{n; t} = [E_n(t) - E_m(t)]\bra{m; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]
\tag{5.220}
$$

따라서 (5.219)의 $n = m$ 항과 $n \neq m$ 항을 나눠 쓰면

$$
\dot{c}_m(t) = -c_m(t)\bra{m; t}\left[\frac{\partial}{\partial t}\ket{m; t}\right] - \sum_{n\neq m}c_n(t)e^{i(\theta_n - \theta_m)}\frac{\bra{m; t}\dot{H}\ket{n; t}}{E_n - E_m}
\tag{5.221}
$$

- 첫째 항: 자기 자신의 phase만 바꾼다.
- 둘째 항: 다른 state $\ket{n}$이 $\ket{m}$으로 섞여 들어온다 (transition). $\dot{H}$에 비례하고 level 간격에 반비례한다.

## 4. Adiabatic approximation

**둘째 항을 버린다.** 이 근사가 성립하는 조건은

$$
\frac{\lvert\bra{m; t}\dot{H}\ket{n; t}\rvert}{E_{nm}} \equiv \frac{1}{\tau} \ll \bra{m; t}\left[\frac{\partial}{\partial t}\ket{m; t}\right] \sim \frac{E_m}{\hbar}
\tag{5.222}
$$

즉 Hamiltonian이 변하는 time scale $\tau$가 state의 고유 진동 주기보다 훨씬 길어야 한다. 그러면 첫째 항만 남아 바로 적분된다.

이제 $c_n$의 정체를 알 수 있다. 
$$
c_n(t) = e^{i\gamma_n(t)}c_n(0)
\tag{5.223}
$$

$$
\gamma_n(t) \equiv i\int_0^t\bra{n; t'}\left[\frac{\partial}{\partial t'}\ket{n; t'}\right]dt'
\tag{5.224}
$$

### $\gamma_n$은 실수다

$\braket{n; t|n; t} = 1$을 미분하면

$$
0 = \frac{\partial}{\partial t}\braket{n; t|n; t} = \left[\frac{\partial}{\partial t}\bra{n; t}\right]\ket{n; t} + \bra{n; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]
\tag{5.225}
$$

$$
\left(\bra{n; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]\right)^* = -\bra{n; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right]
\tag{5.226}
$$

즉 $\bra{n}\partial_t\ket{n}$은 순허수이고, 앞에 $i$가 곱해진 $\gamma_n$은 실수다. 따라서 $e^{i\gamma_n}$은 크기를 바꾸지 않는 **순수한 phase**다.

## 5. 결과: Adiabatic theorem

처음에 $\ket{n}$에 있었다면 ($c_n(0) = 1$, 나머지 0) 계속 $\ket{n; t}$에 머물고, **두 종류의 phase**만 얻는다.

$$
\ket{\alpha^{(n)}; t} = e^{i\gamma_n(t)}e^{i\theta_n(t)}\ket{n; t}
\tag{5.227}
$$

| Phase | 정의 | 의미 |
|--|--|--|
| $\theta_n$ (dynamical) | $-\frac{1}{\hbar}\int E_n\,dt$ | 에너지 × 시간. 얼마나 **오래** 걸렸는지에 의존 |
| $\gamma_n$ (geometric) | $i\int\bra{n}\partial_t\ket{n}\,dt$ | eigenstate가 어떻게 **돌아갔는지**에 의존 |

## 6. Self-consistency check와 그 함의

$H$가 시간에 무관한 경우, $\ket{n; t}$를 굳이 시간 phase까지 포함해서 쓰면

$$
\ket{n; t} = e^{-iE_nt/\hbar}\ket{n}
\tag{5.228}
$$

$$
\bra{n; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right] = -i\frac{E_n}{\hbar}
\tag{5.229}
$$

이면 (5.224)로 $\gamma_n = +E_nt/\hbar$이고, $\theta_n = -E_nt/\hbar$이므로 두 phase가 상쇄되어

$$
\ket{\alpha^{(n)}; t} = \ket{n; t} \qquad \text{for } H \neq H(t)
\tag{5.230}
$$

**함의 (중요)**: 이 예는 $\gamma_n(t)$가 $\ket{n; t}$의 **phase를 어떻게 잡느냐에 따라 달라진다**는 것을 보여 준다. 그래서 오랫동안 $\gamma_n$은 "phase convention으로 없앨 수 있는 의미 없는 값"으로 여겨졌다. 그런데 parameter가 **한 바퀴 돌아 제자리로 오는 경우**에는 이 임의성이 사라지고 측정 가능한 값이 남는다. 이것이 다음 절의 Berry's phase다.



# 궁금한 내용


# 연관 학습 노트

- [[Adiabatic Invariants]]
- [[QM lecture note - Linear Stark Effect]]

# 다음 강의
[[QM lecture note - Berry's Phase]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.6.2

# 원본 필기 이미지
