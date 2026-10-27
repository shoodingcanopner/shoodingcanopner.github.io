---
title: "QM lecture note - Berry's Phase"
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
[[QM lecture note - Adiabatic Approximation]]


# 오늘의 핵심


$$
\bra{n; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right] = \bra{n; t}\left[\nabla_R\ket{n; t}\right]\cdot\frac{d\mathbf{R}}{dt}
\tag{5.231}
$$



Berry phase를 parameter space에서 닫힌 적분으로 나타낸다. (parameter가 천천히 바뀌다가 다시 원래 값으로 돌아오는 경우를 고려려)

$$
\gamma_n(C) = i\oint_C\bra{n; t}\left[\nabla_R\ket{n; t}\right]\cdot d\mathbf{R}
\tag{5.233}
$$

$$
\gamma_n(C) = \oint_C\mathbf{A}_n(\mathbf{R})\cdot d\mathbf{R} = \int\left[\nabla_R\times\mathbf{A}_n(\mathbf{R})\right]\cdot d\mathbf{a} =\int\left[\mathbf{B}_n(\mathbf{R})\right]\cdot d\mathbf{a} 
\tag{5.235}
$$

| 전자기학                                                                 | Berry's phase                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Vector potential $\mathbf{A}$                                        | Berry connection $\mathbf{A}_n$                                             |
| Magnetic field $\mathbf{B} = \nabla\times\mathbf{A}$                 | Berry curvature $\mathbf{B}_n$                                              |
| Aharonov-Bohm phase $\propto\oint\mathbf{A}\cdot d\mathbf{l}$ = flux | $\gamma_n(C) = \oint\mathbf{A}_n\cdot d\mathbf{R}$ = flux of $\mathbf{B}_n$ |
| Gauge transformation $\mathbf{A} \to \mathbf{A} + \nabla\Lambda$     | Phase convention 변경 (아래)                                                    |
| 실제 공간                                                                | Parameter space                                                             |

# 필기 내용

Sakurai 5.6.3 Berry's Phase, 5.6.4 Example: Berry's Phase for Spin 1/2

## Symbol table

| Symbol | Meaning |
|--|--|
| $\mathbf{R}(t)$ | Hamiltonian을 정하는 parameter vector (예: 자기장) |
| $\nabla_R$ | Parameter space에서의 gradient |
| $\ket{n; t} = \ket{n(\mathbf{R}(t))}$ | Instantaneous eigenstate |
| $C$ | Parameter space에서 닫힌 경로 |
| $\gamma_n(C)$ | Berry's phase (geometric phase) |
| $\mathbf{A}_n(\mathbf{R})$ | Berry connection (vector potential과 유사) |
| $\mathbf{B}_n(\mathbf{R})$ | Berry curvature (magnetic field와 유사) |
| $\delta(\mathbf{R})$ | Phase convention을 바꾸는 임의의 함수 (gauge transformation) |
| $\mu$ | Magnetic moment |
| $\Omega$ | 경로가 원점에 대해 만드는 solid angle |

## 0. 한눈에 보기

> [!summary] Berry's phase 요약
> 1. Parameter $\mathbf{R}$을 천천히 한 바퀴 돌리면, 계는 원래 eigenstate로 돌아오면서 dynamical phase 외에 **추가 phase $\gamma_n(C)$**를 얻는다.
> 2. $\gamma_n(C)$는 **경로의 모양(기하)에만** 의존하고, 얼마나 빨리 돌렸는지는 상관없다.
> 3. 전자기학과 똑같은 구조다: $\mathbf{A}_n$ = vector potential, $\mathbf{B}_n$ = magnetic field, $\gamma_n$ = 경로가 감싸는 "flux".
> 4. Spin-1/2 in $\mathbf{B}$: $\gamma_\pm = \mp\frac{1}{2}\Omega$ (solid angle의 절반).

## 1. 시간 적분 → parameter space 경로 적분

Hamiltonian이 parameter $\mathbf{R}(t)$를 통해서만 시간에 의존한다고 하자. 그러면 $E_n(t) = E_n(\mathbf{R}(t))$, $\ket{n; t} = \ket{n(\mathbf{R}(t))}$이고, chain rule로

$$
\bra{n; t}\left[\frac{\partial}{\partial t}\ket{n; t}\right] = \bra{n; t}\left[\nabla_R\ket{n; t}\right]\cdot\frac{d\mathbf{R}}{dt}
\tag{5.231}
$$

이것을 (5.224)에 넣으면 $dt$가 $d\mathbf{R}$로 바뀐다.

$$
\gamma_n(T) = i\int_0^T\bra{n; t}\left[\nabla_R\ket{n; t}\right]\cdot\frac{d\mathbf{R}}{dt}\,dt = i\int_{\mathbf{R}(0)}^{\mathbf{R}(T)}\bra{n; t}\left[\nabla_R\ket{n; t}\right]\cdot d\mathbf{R}
\tag{5.232}
$$

**핵심**: 시간 $t$가 완전히 사라졌다. $\gamma_n$은 parameter space에서 **어떤 경로를 지나갔는지**에만 의존하고, 그 경로를 얼마나 빨리 지나갔는지와는 무관하다. (dynamical phase $\theta_n$은 시간에 비례하는 것과 대조된다.)

한 주기 $T$ 후 제자리로 돌아오면 ($\mathbf{R}(T) = \mathbf{R}(0)$, 닫힌 경로 $C$)

$$
\gamma_n(C) = i\oint_C\bra{n; t}\left[\nabla_R\ket{n; t}\right]\cdot d\mathbf{R}
\tag{5.233}
$$

## 2. 전자기학과의 유사성

### Berry connection과 Berry curvature

$$
\mathbf{A}_n(\mathbf{R}) \equiv i\bra{n; t}\left[\nabla_R\ket{n; t}\right]
\tag{5.234}
$$

Stokes' theorem을 쓰면 (선적분 → 면적분)

$$
\gamma_n(C) = \oint_C\mathbf{A}_n(\mathbf{R})\cdot d\mathbf{R} = \int\left[\nabla_R\times\mathbf{A}_n(\mathbf{R})\right]\cdot d\mathbf{a} =\int\left[\mathbf{B}_n(\mathbf{R})\right]\cdot d\mathbf{a} 
\tag{5.235}
$$

$$
\mathbf{B}_n(\mathbf{R}) \equiv \nabla_R\times\mathbf{A}_n(\mathbf{R})
\tag{5.236}
$$

Berry's phase = 경로 $C$가 감싸는 면을 지나는 $\mathbf{B}_n$의 **flux**다. 같은 flux를 감싸기만 하면 경로가 달라도 같은 phase가 나온다. ((5.226)과 같은 이유로 $\mathbf{A}_n$, $\mathbf{B}_n$은 실수다.)

| 전자기학 | Berry's phase |
|--|--|
| Vector potential $\mathbf{A}$ | Berry connection $\mathbf{A}_n$ |
| Magnetic field $\mathbf{B} = \nabla\times\mathbf{A}$ | Berry curvature $\mathbf{B}_n$ |
| Aharonov-Bohm phase $\propto\oint\mathbf{A}\cdot d\mathbf{l}$ = flux | $\gamma_n(C) = \oint\mathbf{A}_n\cdot d\mathbf{R}$ = flux of $\mathbf{B}_n$ |
| Gauge transformation $\mathbf{A} \to \mathbf{A} + \nabla\Lambda$ | Phase convention 변경 (아래) |
| 실제 공간 | Parameter space |

### Gauge invariance: 왜 "닫힌 경로"여야 하나

Eigenstate의 phase는 원래 임의로 잡을 수 있다. $\mathbf{R}$마다 다른 phase를 곱해 보자.

$$
\ket{n; t} \longrightarrow e^{i\delta(\mathbf{R})}\ket{n; t}
\tag{5.237}
$$

(5.234)에 넣으면 $\nabla_R$이 $e^{i\delta}$에 걸려서

$$
\mathbf{A}_n(\mathbf{R}) \longrightarrow \mathbf{A}_n(\mathbf{R}) - \nabla_R\delta(\mathbf{R})
\tag{5.238}
$$

- 열린 경로: $\gamma_n$이 $\delta(\mathbf{R}(T)) - \delta(\mathbf{R}(0))$만큼 바뀐다 → convention에 따라 달라지는, 의미 없는 값. (Adiabatic 노트 6절의 self-consistency check가 바로 이 경우였다.)
- **닫힌 경로**: gradient의 closed-loop 적분은 0이므로 ($\oint\nabla_R\delta\cdot d\mathbf{R} = 0$) $\gamma_n(C)$는 **변하지 않는다** → 물리적이고 측정 가능한 값.

그래서 "geometric phase"라고 부른다. 경로의 기하만 남는다.

## 3. $\mathbf{B}_n$을 계산하기 쉬운 형태로

(5.234)의 curl을 취하면, curl of gradient = 0이므로

$$
\mathbf{B}_n(\mathbf{R}) = i\left[\nabla_R\bra{n; t}\right]\times\left[\nabla_R\ket{n; t}\right]
\tag{5.239}
$$

Completeness $\sum_m\ket{m; t}\bra{m; t}$를 가운데 넣으면

$$
\mathbf{B}_n(\mathbf{R}) = i\sum_{m\neq n}\left[\nabla_R\bra{n; t}\right]\ket{m; t}\times\bra{m; t}\left[\nabla_R\ket{n; t}\right]
\tag{5.240}
$$

$m = n$ 항은 0이다: $\braket{n|n} = 1$에서 $[\nabla_R\bra{n}]\ket{n} = -\bra{n}[\nabla_R\ket{n}]$이므로, 같은 vector(의 $-1$배)끼리의 cross product가 된다.

### $\nabla_R\ket{n}$을 $\nabla_RH$로 바꾸기

Adiabatic 노트의 (5.220)과 똑같은 trick이다. (5.214)를 $\mathbf{R}$로 미분하고 $\bra{m}$과 내적하면

$$
\bra{m; t}\left[\nabla_R\ket{n; t}\right] = \frac{\bra{m; t}\left[\nabla_RH\right]\ket{n; t}}{E_n - E_m}, \qquad m \neq n
\tag{5.241}
$$

### 최종 결과

$$
\gamma_n(C) = \int\mathbf{B}_n(\mathbf{R})\cdot d\mathbf{a}
\tag{5.242}
$$

$$
\mathbf{B}_n(\mathbf{R}) = i\sum_{m\neq n}\frac{\bra{n; t}\left[\nabla_RH\right]\ket{m; t}\times\bra{m; t}\left[\nabla_RH\right]\ket{n; t}}{(E_m - E_n)^2}
\tag{5.243}
$$

- 장점: eigenstate의 미분이 없고, $\nabla_RH$의 matrix element만 있으면 된다. 그래서 phase convention과 무관하다는 것도 눈에 보인다.
- **Degeneracy point** ($E_m = E_n$)에서 분모가 0이 되어 $\mathbf{B}_n$이 발산한다. 이 점들이 $\mathbf{B}_n$의 **source (monopole)** 역할을 한다. 경로가 이 점을 지나지 않아도, 감싸는 면이 그 점의 flux를 받으면 phase에 기여한다.

## 4. 예제: Spin 1/2 in a slowly rotating magnetic field

자기장 자체를 parameter로 잡는다: $\mathbf{R}(t)$ = 자기장 vector. ($\mathbf{B}$라는 글자는 Berry curvature에 양보)

$$
H(t) = H(\mathbf{R}(t)) = -\frac{2\mu}{\hbar}\mathbf{S}\cdot\mathbf{R}(t)
\tag{5.244}
$$

### Step 1. Eigenvalue와 분모

$\mathbf{R}$ 방향을 양자화 축으로 잡으면 $\mathbf{S}\cdot\mathbf{R} = RS_{\hat{R}}$이고 eigenvalue는 $\pm\frac{\hbar}{2}R$이므로

$$
E_\pm(t) = \mp\mu R(t)
\tag{5.245}
$$

$\ket{\pm; t}$는 $\mathbf{R}$ 방향에 대한 spin up/down이다. (5.243)의 합은 상대 state 하나뿐이고

$$
(E_\pm - E_\mp)^2 = 4\mu^2R^2
\tag{5.246}
$$

### Step 2. $\nabla_RH$

$H$가 $\mathbf{R}$에 대해 선형이므로

$$
\nabla_RH = -\frac{2\mu}{\hbar}\mathbf{S}
\tag{5.247}
$$

### Step 3. Matrix element의 cross product

$$
\bra{\pm; t}\mathbf{S}\ket{\mp; t}\times\bra{\mp; t}\mathbf{S}\ket{\pm; t} = \bra{\pm; t}\mathbf{S}\ket{\mp; t}\times\bra{\pm; t}\mathbf{S}\ket{\mp; t}^*
\tag{5.248}
$$

계산을 쉽게 하려고 잠시 $\mathbf{R}$을 $\hat{\mathbf{z}}$ 방향으로 둔다 (rotational symmetry). 그러면 $\ket{\pm}$는 $S_z$ eigenstate이고

$$
\mathbf{S} = \frac{1}{2}(S_+ + S_-)\hat{\mathbf{x}} + \frac{1}{2i}(S_+ - S_-)\hat{\mathbf{y}} + S_z\hat{\mathbf{z}}
\tag{5.249}
$$

$\bra{+}S_+\ket{-} = \hbar$를 쓰면 $\bra{+}S_x\ket{-} = \frac{\hbar}{2}$, $\bra{+}S_y\ket{-} = \frac{\hbar}{2i} = -\frac{i\hbar}{2}$, $\bra{+}S_z\ket{-} = 0$이므로

$$
\bra{\pm; t}\mathbf{S}\ket{\mp; t} = \frac{\hbar}{2}(\hat{\mathbf{x}} \mp i\hat{\mathbf{y}})
\tag{5.250}
$$

$+$의 경우 cross product는

$$
\frac{\hbar^2}{4}(\hat{\mathbf{x}} - i\hat{\mathbf{y}})\times(\hat{\mathbf{x}} + i\hat{\mathbf{y}}) = \frac{\hbar^2}{4}\left(i\,\hat{\mathbf{x}}\times\hat{\mathbf{y}} - i\,\hat{\mathbf{y}}\times\hat{\mathbf{x}}\right) = \frac{i\hbar^2}{2}\hat{\mathbf{z}}
$$

### Step 4. 모두 조합

$$
\mathbf{B}_+ = i\cdot\left(\frac{2\mu}{\hbar}\right)^2\cdot\frac{i\hbar^2}{2}\hat{\mathbf{z}}\cdot\frac{1}{4\mu^2R^2} = -\frac{1}{2R^2}\hat{\mathbf{z}}
$$

$-$도 같은 방식으로 부호만 반대다.

$$
\mathbf{B}_\pm(\mathbf{R}) = \mp\frac{1}{2R^2(t)}\hat{\mathbf{z}}
\tag{5.251}
$$

$\hat{\mathbf{z}}$는 사실 $\mathbf{R}$ 방향이었으므로

$$
\mathbf{B}_\pm(\mathbf{R}) = \mp\frac{1}{2R^2(t)}\hat{\mathbf{R}}
\tag{5.252}
$$

**해석**: parameter space의 원점 $\mathbf{R} = 0$에 놓인 **세기 $\mp\frac{1}{2}$인 magnetic monopole**의 field와 똑같은 모양이다. 원점은 자기장이 0이 되어 $E_+ = E_-$가 되는 바로 그 **degeneracy point**다.

### Step 5. Berry's phase

$$
\gamma_\pm(C) = \mp\frac{1}{2}\int\frac{\hat{\mathbf{R}}\cdot d\mathbf{a}}{R^2} = \mp\frac{1}{2}\Omega
\tag{5.253}
$$

$\hat{\mathbf{R}}\cdot d\mathbf{a}/R^2$는 solid angle element이므로, 적분은 경로가 원점에 대해 만드는 **solid angle $\Omega$**다.

- 경로의 구체적 모양, 자기장의 세기 $R$, 돌린 속도와 무관하다. **Solid angle만** 중요하다.
- Magnetic moment $\mu$와도 무관하다. (단, $\mu$의 부호가 회전 방향을 정한다.)
- 예: 자기장 방향을 적도를 따라 한 바퀴 돌리면 $\Omega = 2\pi$이므로 $\gamma_\pm = \mp\pi$, 즉 $e^{i\gamma} = -1$. 상태 vector의 부호가 뒤집힌다.

## 5. 실험 확인 (Fig. 5.7)

- 중성자 spin으로 측정: Bitter & Dubbers (1987), Richardson et al. (1988, ultra cold neutron, 주기 $T = 7.387$ s로 adiabatic 조건 확보)
- 자기장이 원(또는 타원)을 그리게 하고, 최종 polarization에서 전체 phase를 측정한 뒤 dynamical phase (5.217)를 빼면 Berry's phase가 남는다.
- 결과는 $\gamma/2\pi$ vs $\Omega/2\pi$가 기울기 $\mp\frac{1}{2}$인 직선으로 (5.253)과 잘 맞는다. 회전 방향으로부터 중성자 magnetic moment가 **음수**임도 확인되었다.



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Adiabatic Approximation]]
- [[QM lecture note - Spin-Orbit Interaction and Fine Structure]]

# 다음 강의


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.6.3, 5.6.4
- M. V. Berry, Proc. R. Soc. London A **392**, 45 (1984)

# 원본 필기 이미지
