---
title: SM lecture note - Kinetic Theory and Boltzmann's H-theorem
date: "2026-10-24"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Statistical Mechanics|Statistical Mechanics]]강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의
[[SM lecture note - Phase Equilibrium and Maxwell Construction|5th week - Phase Equilibrium and Maxwell Construction]]
# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 

# 필기 내용

## Part 2. Stochastic Mechanics

**Kinetic theory**: microscopic equation of motion으로 macroscopic property를 설명하는 것.

Thermodynamic coordinates: $T, P, V, N$

### Microstate and phase space

Microstate of $N$-particle system: $(\mathbf{q}_i(t), \mathbf{p}_i(t))$, $i$ → index for particle

Phase space is $6N$ dimension.

$$
\Gamma = \prod_{i}^{N} \{\mathbf{q}_i, \mathbf{p}_i\}
$$

### Phase space density

$\rho(\{\mathbf{q}\}, \{\mathbf{p}\}, t)$ : $\{\}$ 기호는 모든 입자의 물리량을 모은 tuple임을 의미

- **Normalization**

$$
\int \prod_i^N d^3p_i\, d^3q_i\ \rho = 1
$$

- **Ensemble average** ($O$: physical observable)

$$
\langle O \rangle = \int \prod_i^N d^3p_i\, d^3q_i\ \rho(\{\mathbf{p}\}, \{\mathbf{q}\})\, O(\{\mathbf{p}\}, \{\mathbf{q}\})
$$

### Time evolution of density of state: Liouville theorem

$$
\frac{dA}{dt} = \frac{\partial A}{\partial t} + \{A, \mathcal{H}\} = \frac{\partial A}{\partial t} + \sum_i \left( \frac{\partial A}{\partial q_i}\frac{\partial \mathcal{H}}{\partial p_i} - \frac{\partial \mathcal{H}}{\partial q_i}\frac{\partial A}{\partial p_i} \right)
$$

$$
= \frac{\partial A}{\partial t} + \sum_i \left( \dot{q}_i \frac{\partial A}{\partial q_i} + \dot{p}_i \frac{\partial A}{\partial p_i} \right)
$$

이건 그저 해밀턴 방정식일 뿐.

**연속체 방정식 → 물리적 의미**: 한 자리($\mathbf{x}$)에서 시간에 대해 밀도 변화가 있다면($\partial \rho / \partial t$), 그것은 밀도 흐름($\rho \mathbf{u}$)이 그 자리에서 모이거나 흩어지기 때문이다($\nabla \cdot (\rho \mathbf{u})$). 흐름이 발산하면 $\rho$는 줄어든다.

$$
\frac{\partial \rho}{\partial t} = -\nabla \cdot (\rho \mathbf{u})
$$

$$
\mathbf{u}(\{\mathbf{q}\}, \{\mathbf{p}\}, t) = \sum_i \left( \dot{q}_i \hat{q}_i + \dot{p}_i \hat{p}_i \right) = \sum_i \left( \frac{\partial \mathcal{H}}{\partial p_i}\hat{q}_i - \frac{\partial \mathcal{H}}{\partial q_i}\hat{p}_i \right)
$$

$\Gamma$에서 $\nabla$ 연산자 정의:

$$
\nabla = \sum_i \left( \hat{q}_i \frac{\partial}{\partial q_i} + \hat{p}_i \frac{\partial}{\partial p_i} \right)
$$

벡터 항등식 이용:

$$
\nabla \cdot (\rho \mathbf{u}) = (\nabla \rho) \cdot \mathbf{u} + \rho (\nabla \cdot \mathbf{u})
$$

$$
\nabla \cdot \mathbf{u} = \sum_i \left( \frac{\partial^2 \mathcal{H}}{\partial q_i \partial p_i} - \frac{\partial^2 \mathcal{H}}{\partial p_i \partial q_i} \right) = 0
$$

$$
\nabla \cdot (\rho \mathbf{u}) = \sum_i \left( \frac{\partial \rho}{\partial q_i}\frac{\partial \mathcal{H}}{\partial p_i} - \frac{\partial \rho}{\partial p_i}\frac{\partial \mathcal{H}}{\partial q_i} \right)
$$

$$
\frac{\partial \rho}{\partial t} + \sum_i \left( \frac{\partial \rho}{\partial q_i}\frac{\partial \mathcal{H}}{\partial p_i} - \frac{\partial \mathcal{H}}{\partial q_i}\frac{\partial \rho}{\partial p_i} \right) = 0
$$

해밀턴 방정식을 떠올리면, 연속체 방정식은 $\frac{d\rho}{dt} = 0$을 의미한다는 걸 알 수 있다.

$\frac{d\rho}{dt} = 0$은 $\rho$의 총량은 시간이 지나도 변하지 않음을 의미한다.

$$
\frac{d}{dt}\int d^3p_i\, d^3q_i\ \rho = \int d^3p_i\, d^3q_i\ \frac{d\rho}{dt} = 0
$$

즉, 상태가 $\Gamma$의 한 점으로 존재할 때, 시간이 지나 점이 $\Gamma$ 내 다른 좌표로 이동하기는 하지만 그 점들의 개수가 사라지진 않는다는 것. "연속체 방정식"에서 '연속'은 $\Gamma$ 속 점(state)의 존재가 연속된다는 의미.

> [!note] AI 메모
> 위 두 문장은 아래 "AI의 보충 설명 - 1"에서 조금 다듬어 두었다.

$\frac{\partial \rho}{\partial t} = 0$은 density distribution이 변치 않는 것. **Steady state**를 의미.

Ensemble theory로 정의되는 steady는 두 가지가 있다.

- **Microcanonical ensemble**: uniform density distribution
- **Canonical ensemble**: Boltzmann distribution

### Reduced density: kind of coarse graining

**1-particle density**: 입자 하나에 대한 정보 이외는 적분해서 없애 버림. 그리고 모든 입자는 구분 불가하다고 취급함.

$$
f_1(\mathbf{x}, \mathbf{p}, t) = \sum_j^N \int \prod_{i \neq j}^N \left( d^3x_i\, d^3p_i \right) \rho(\{\mathbf{x}\}, \{\mathbf{p}\}, t) = N \int \prod_{i \neq 1}^N \left( d^3x_i\, d^3p_i \right) \rho(\{\mathbf{x}\}, \{\mathbf{p}\}, t)
$$

**2-particle density**: 한 쌍의 입자에 대한 정보 이외는 적분해서 없앤다.
- $C$: 순서를 구분하지 않는, 가능한 모든 입자 쌍의 집합. 원소 개수는 $\frac{1}{2}N(N-1)$

$$
f_2(\mathbf{x}_1, \mathbf{p}_1, \mathbf{x}_2, \mathbf{p}_2, t) = \sum_{(a,b)}^{C} \int \prod_{i \neq a,b}^N \left( d^3x_i\, d^3p_i \right) \rho = \frac{N(N-1)}{2} \int \prod_{i \neq 1,2}^N \left( d^3x_i\, d^3p_i \right) \rho
$$

**$m$-particle density**

$$
f_m(\mathbf{x}_1, \mathbf{p}_1, \cdots, \mathbf{x}_m, \mathbf{p}_m) = \frac{N!}{m!(N-m)!} \int \prod_{i \neq 1, \cdots, m}^N \left( d^3x_i\, d^3p_i \right) \rho
$$

> [!warning] Normalization 관례
> 강의 관례 확인 필요. "AI의 보충 설명 - 2" 참고.

### Hydrodynamic fields

**Density field**: $f_1$에서 운동량 정보를 적분해 없앤다.

$$
n(\mathbf{x}, t) = \int d^3p\ f_1(\mathbf{x}, \mathbf{p}, t)
$$

$n(\mathbf{x}, t)$를 $\mathbf{x}$에 대해 적분하면 그냥 입자 수다.

$$
N(t) = \int d^3x\ n(\mathbf{x}, t)
$$

**Momentum density**: $(\mathbf{x}, t)$ → momentum으로 mapping하는 vector field

$$
\boldsymbol{\pi}(\mathbf{x}, t) = m\, n(\mathbf{x}, t)\, \mathbf{u}(\mathbf{x}, t) = \int d^3p\ f_1(\mathbf{x}, \mathbf{p}, t)\, \mathbf{p}
$$

**Energy density**: 이걸로 temperature field를 정의한다.

$$
\int d^3p\ \frac{\mathbf{p}^2}{2m} f_1 = \frac{3}{2} k_B\, n(\mathbf{x}, t)\, T(\mathbf{x}, t)
$$

---

## Boltzmann's H-theorem and Irreversibility

미시적으로는 분명 time reversal symmetry가 있는 충돌 과정이, 어떻게 거시적인 irreversibility를 만드는가?

### Definition of H-function: 엔트로피와 직결

$$
H(t) = \int d^3x\, d^3p\ f_1(\mathbf{x}, \mathbf{p}, t) \ln f_1(\mathbf{x}, \mathbf{p}, t)
$$

$$
h(\mathbf{x}, t) = \int d^3p\ f_1 \ln f_1
$$

$$
H(t) = \int d^3x\ h(\mathbf{x}, t)
$$

$H(t)$가 단조감소(non-increasing)함을 증명할 것이다.

$$
\frac{\partial h}{\partial t} = \int d^3p \left( \frac{\partial f_1}{\partial t} \ln f_1 + f_1 \frac{1}{f_1}\frac{\partial f_1}{\partial t} \right) = \int d^3p\ \frac{\partial f_1}{\partial t}(1 + \ln f_1)
$$

$$
\frac{dH}{dt} = \int d^3x\, d^3p\ \frac{\partial f_1}{\partial t}(\ln f_1 + 1)
$$

### Collision이 없는 경우: 완전 결정론적, Liouville theory

$t$ 시간에 $(\mathbf{x}, \mathbf{p})$에 있던 점이 $\delta t$ 시간 뒤에는 $(\mathbf{x} + \mathbf{v}\delta t,\ \mathbf{p} + \mathbf{F}_{\text{ext}}\delta t)$로 이동한다.

$$
f_1(\mathbf{x}, \mathbf{p}, t) = f_1(\mathbf{x} + \mathbf{v}\delta t,\ \mathbf{p} + \mathbf{F}_{\text{ext}}\delta t,\ t + \delta t)
$$

이것이 리우빌 정리와 같음을 보일 수 있다. 우변을 테일러 전개.

$$
f_1(\mathbf{x} + \mathbf{v}\delta t,\ \mathbf{p} + \mathbf{F}_{\text{ext}}\delta t,\ t + \delta t) = f_1(\mathbf{x}, \mathbf{p}, t) + \frac{\partial f_1}{\partial \mathbf{x}} \cdot (\mathbf{v}\delta t) + \frac{\partial f_1}{\partial \mathbf{p}} \cdot (\mathbf{F}_{\text{ext}}\delta t) + \frac{\partial f_1}{\partial t}\delta t
$$

$$
= f_1(\mathbf{x}, \mathbf{p}, t) + \delta t \left( \frac{\partial f_1}{\partial \mathbf{x}} \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{p}} - \frac{\partial f_1}{\partial \mathbf{p}} \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{x}} + \frac{\partial f_1}{\partial t} \right)
$$

$$
\frac{\partial f_1}{\partial \mathbf{x}} \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{p}} - \frac{\partial f_1}{\partial \mathbf{p}} \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{x}} + \frac{\partial f_1}{\partial t} = 0, \quad \frac{df_1}{dt} = 0
$$

### Collision이 있는 경우

위와 같이 움직이지 않고, 충돌에 의해 확률적으로 다른 위상이 된다. 리우빌 정리에 보정항이 붙는다.

$$
f_1(\mathbf{x} + \mathbf{v}\delta t,\ \mathbf{p} + \mathbf{F}_{\text{ext}}\delta t,\ t + \delta t) = f_1 + \left( \frac{\partial f_1}{\partial t} \right)_{\text{coll}} \delta t
$$

즉, $\left( \frac{\partial f_1}{\partial t} \right)_{\text{coll}}$의 정체를 정리하면,

$$
\left( \frac{\partial \mathcal{H}}{\partial \mathbf{p}} \cdot \frac{\partial}{\partial \mathbf{x}} - \frac{\partial \mathcal{H}}{\partial \mathbf{x}} \cdot \frac{\partial}{\partial \mathbf{p}} + \frac{\partial}{\partial t} \right) f_1 = \left( \frac{\partial f_1}{\partial t} \right)_{\text{coll}}
$$

원래 가야 할 위상 공간 속 궤적에서 벗어나는 것을 **outflux**, 다른 위상이 궤적으로 끼어든 것을 **influx**라고 부르자.

$$
\left( \frac{\partial f_1}{\partial t} \right)_{\text{coll}} = J_+ - J_- = J
$$

- $J_+$: influx
- $J_-$: outflux
- $J$: net flux

충돌 이전의 입자가 $(\mathbf{x}_1, \mathbf{p}_1, t)$였다고 가정하자. 충돌이 없었더라면, 이것은 $(\mathbf{x}_1 + \mathbf{v}\delta t,\ \mathbf{p}_1 + \mathbf{F}_{\text{ext}}\delta t,\ t + \delta t)$가 되었어야 했다. 그러나 충돌로 인해 예정되지 않은 위상 $(\mathbf{x}_1', \mathbf{p}_1', t + \delta t)$이 되는 것이 outflux이다.

반대로, 아주 다른 위상이었던 게 충돌로 예기치 않게 $(\mathbf{x}_1 + \mathbf{v}\delta t,\ \mathbf{p}_1 + \mathbf{F}_{\text{ext}}\delta t,\ t + \delta t)$와 같은 위상이 되는 것이 influx이다.

일단은 위치보단 운동량 변환에 신경쓰자. 두 입자가 만나서 충돌하는 지점을 $\mathbf{x}$로 잡고, 충돌 직전과 직후를 보아서 $\mathbf{x}$가 거의 변하지 않고 운동량만 변한다면, 충돌로 인해 '예기치 않은' 운동량 전환의 빈도를 $W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2')$라고 쓰자.

![[Pasted image 20261024130322.png]]

**Influx**: 
{충돌로 인해 $\mathbf{p}_1$이 생기는 흐름} $= \int d^3p_2\, d^3p_1'\, d^3p_2'$ {충돌이 일어날 때 $(\mathbf{p}_1', \mathbf{p}_2') \to (\mathbf{p}_1, \mathbf{p}_2)$ 전환율 (즉, 이것은 충돌 전 입자 1: $(\mathbf{x}, \mathbf{p}_1)$, 입자 2: $(\mathbf{x}, \mathbf{p}_2)$이라는 "조건부" 확률)} · {어떤 두 입자가 같은 위치에서 $(\mathbf{p}_1', \mathbf{p}_2')$일 확률}


$$
J_+(\mathbf{x}, \mathbf{p}_1, t) = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1', \mathbf{p}_2' | \mathbf{p}_1, \mathbf{p}_2)\, f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1', \mathbf{p}_2')
$$

비슷한 원리로, **outflux**는 {충돌로 인해 $\mathbf{p}_1$이 없어지는 흐름} $= \int d^3p_2\, d^3p_1'\, d^3p_2'$ {충돌이 일어날 때 $(\mathbf{p}_1, \mathbf{p}_2) \to (\mathbf{p}_1', \mathbf{p}_2')$ 전환율} · {어떤 두 입자가 같은 위치에서 $(\mathbf{p}_1, \mathbf{p}_2)$일 확률}

$$
J_-(\mathbf{x}, \mathbf{p}_1, t) = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2')\, f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1, \mathbf{p}_2)
$$

$J_+$에 대한 식에 $W(\mathbf{p}_1', \mathbf{p}_2' | \mathbf{p}_1, \mathbf{p}_2)$가 아니라 $W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2')$가 있다면 $J = J_+ - J_-$ 식을 깔끔하게 쓸 수 있을 텐데!

이때 **detailed balance**를 이용.

$$
W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') = W(\mathbf{p}_1', \mathbf{p}_2' | \mathbf{p}_1, \mathbf{p}_2)
$$

**Time reversal symmetry**와 **parity symmetry**로 증명 가능.
![[Pasted image 20261024130348.png]]
![[Pasted image 20261024130338.png]]

> [!note] 그림 (필기 원본 9쪽)
> 충돌 전(점선) → 충돌 후(실선)인 충돌 과정에 time reversal을 가하면 모든 운동량의 부호가 바뀌고 전후가 뒤집힌다. 여기에 parity를 가하면 운동량 부호가 다시 원래대로 돌아오면서, 결과적으로 $(\mathbf{p}_1', \mathbf{p}_2') \to (\mathbf{p}_1, \mathbf{p}_2)$인 역과정이 된다.

$$
J_+(\mathbf{x}, \mathbf{p}_1, t) = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2')\, f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1', \mathbf{p}_2')
$$

$$
J(\mathbf{x}, \mathbf{p}_1, t) = J_+ - J_- = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') \left\{ f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1', \mathbf{p}_2') - f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1, \mathbf{p}_2) \right\}
$$

### Continuity equation for $h$

$$
\frac{\partial h}{\partial t} = \int d^3p\ \frac{\partial f_1}{\partial t}(1 + \ln f_1), \quad \frac{\partial f_1}{\partial t} = J + \left( \frac{\partial \mathcal{H}}{\partial \mathbf{x}} \cdot \frac{\partial}{\partial \mathbf{p}} - \frac{\partial \mathcal{H}}{\partial \mathbf{p}} \cdot \frac{\partial}{\partial \mathbf{x}} \right) f_1
$$

$$
\frac{\partial h}{\partial t} = \int d^3p \left[ J - \mathbf{F}_{\text{ext}} \cdot \frac{\partial f_1}{\partial \mathbf{p}} - \frac{\mathbf{p}}{m} \cdot \frac{\partial f_1}{\partial \mathbf{x}} \right] (1 + \ln f_1)
$$

**Force term**: $\mathbf{F}_{\text{ext}}$가 $\mathbf{p}$에 독립이라면,

$$
\int d^3p\ \mathbf{F}_{\text{ext}} \cdot \frac{\partial f_1}{\partial \mathbf{p}}(1 + \ln f_1) = \mathbf{F}_{\text{ext}} \cdot \int d^3p\ \frac{\partial}{\partial \mathbf{p}}(f_1 \ln f_1) = \mathbf{F}_{\text{ext}} \cdot \Big[ f_1 \ln f_1 \Big]_{\mathbf{p} = -\infty}^{\mathbf{p} = \infty} = 0
$$

(chain rule: $1 + \ln f_1 = \frac{\partial}{\partial f_1}(f_1 \ln f_1)$)

**Streaming term**: 같은 방법으로

$$
\frac{\partial f_1}{\partial \mathbf{x}}(1 + \ln f_1) = \frac{\partial}{\partial \mathbf{x}}(f_1 \ln f_1)
$$

**Collision term**: 충돌해도 입자 수는 보존된다.

$$
\int d^3p\ J = 0
$$

따라서

$$
\frac{\partial h}{\partial t} = -\frac{\partial}{\partial \mathbf{x}} \cdot \int d^3p\ \frac{\mathbf{p}}{m} f_1 \ln f_1 + \int d^3p\ J \ln f_1
$$

정의:

$$
\mathbf{j}_h(\mathbf{x}, t) = \int d^3p\ \frac{\mathbf{p}}{m} f_1 \ln f_1, \quad \left( \frac{\partial h}{\partial t} \right)_{\text{coll}} = \int d^3p\ J \ln f_1
$$

$$
\frac{\partial h}{\partial t} + \frac{\partial}{\partial \mathbf{x}} \cdot \mathbf{j}_h = \left( \frac{\partial h}{\partial t} \right)_{\text{coll}}
$$

이것은 $h$에 대한 **continuity equation**이다.

### Dilute gas approximation (molecular chaos)

- **Two-body collision**만 일어나고, 3개 이상의 입자가 동시에 한 자리에 모일 확률은 지극히 낮다고 가정.
- **충돌 이전**: $\mathbf{p}_1$과 $\mathbf{p}_2$의 correlation이 없다고 가정. 둘이 독립임. 그래서 $f_2$를 $f_1$의 곱으로 나타낼 수 있다.

$$
f_2(\mathbf{x}, \mathbf{p}_1, \mathbf{x}, \mathbf{p}_2) = f_1(\mathbf{x}, \mathbf{p}_1) f_1(\mathbf{x}, \mathbf{p}_2)
$$

$J_+$ 정의할 때는 $\mathbf{p}_1', \mathbf{p}_2'$가 충돌 전이었다: $f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1', \mathbf{p}_2') = f_1(\mathbf{x}, \mathbf{p}_1') f_1(\mathbf{x}, \mathbf{p}_2')$

$$
J_+(\mathbf{x}, \mathbf{p}_1, t) = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2')\, f_1(\mathbf{x}, \mathbf{p}_1') f_1(\mathbf{x}, \mathbf{p}_2')
$$

$J_-$ 정의할 때는 $\mathbf{p}_1, \mathbf{p}_2$가 충돌 전이었다: $f_2(\mathbf{x}, \mathbf{x}, \mathbf{p}_1, \mathbf{p}_2) = f_1(\mathbf{x}, \mathbf{p}_1) f_1(\mathbf{x}, \mathbf{p}_2)$

$$
J_-(\mathbf{x}, \mathbf{p}_1, t) = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2')\, f_1(\mathbf{x}, \mathbf{p}_1) f_1(\mathbf{x}, \mathbf{p}_2)
$$

$$
J = \int d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') \left\{ f_1(\mathbf{x}, \mathbf{p}_1') f_1(\mathbf{x}, \mathbf{p}_2') - f_1(\mathbf{x}, \mathbf{p}_1) f_1(\mathbf{x}, \mathbf{p}_2) \right\}
$$

### H-theorem의 증명

$$
\left( \frac{\partial h}{\partial t} \right)_{\text{coll}} = \int d^3p_1\ J \ln f_1
$$

$$
= \int d^3p_1\, d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') \left\{ f_1(\mathbf{p}_1') f_1(\mathbf{p}_2') - f_1(\mathbf{p}_1) f_1(\mathbf{p}_2) \right\} \ln f_1(\mathbf{p}_1)
$$

뭐가 첫 번째 입자이고 두 번째 입자이든 상관없음. 1과 2 index 바꿈:

$$
= \int d^3p_2\, d^3p_1\, d^3p_2'\, d^3p_1'\ W(\mathbf{p}_2, \mathbf{p}_1 | \mathbf{p}_2', \mathbf{p}_1') \left\{ f_1(\mathbf{p}_2') f_1(\mathbf{p}_1') - f_1(\mathbf{p}_2) f_1(\mathbf{p}_1) \right\} \ln f_1(\mathbf{p}_2)
$$

두 식을 평균:

$$
= \frac{1}{2} \int d^3p_1\, d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') \left\{ f_1(\mathbf{p}_1') f_1(\mathbf{p}_2') - f_1(\mathbf{p}_1) f_1(\mathbf{p}_2) \right\} \left\{ \ln f_1(\mathbf{p}_1) + \ln f_1(\mathbf{p}_2) \right\}
$$

프라임이 붙었는지 아닌지로 dummy index 변환 (detailed balance 사용):

$$
= \frac{1}{2} \int d^3p_1\, d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') \left\{ f_1(\mathbf{p}_1) f_1(\mathbf{p}_2) - f_1(\mathbf{p}_1') f_1(\mathbf{p}_2') \right\} \left\{ \ln f_1(\mathbf{p}_1') + \ln f_1(\mathbf{p}_2') \right\}
$$

두 식을 평균:

$$
\left( \frac{\partial h}{\partial t} \right)_{\text{coll}} = \frac{1}{4} \int d^3p_1\, d^3p_2\, d^3p_1'\, d^3p_2'\ W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') \left\{ f_1(\mathbf{p}_1') f_1(\mathbf{p}_2') - f_1(\mathbf{p}_1) f_1(\mathbf{p}_2) \right\} \ln \frac{f_1(\mathbf{p}_1) f_1(\mathbf{p}_2)}{f_1(\mathbf{p}_1') f_1(\mathbf{p}_2')}
$$

> [!important] Inequality
> For $x > 0,\ y > 0$,
> $$
> (y - x) \ln \frac{x}{y} \leq 0
> $$
> 이 케이스에서는 $x = f_1(\mathbf{x}, \mathbf{p}_1) f_1(\mathbf{x}, \mathbf{p}_2)$, $y = f_1(\mathbf{x}, \mathbf{p}_1') f_1(\mathbf{x}, \mathbf{p}_2')$, 그리고 $W \geq 0$.

따라서! $\left( \frac{\partial h}{\partial t} \right)_{\text{coll}} \leq 0$ at every $\mathbf{x}$ and $t$.

$H = \int d^3x\ h(\mathbf{x}, t)$이니, $H(t)$는 모든 시간에 감소 (current term은 공간 적분하면 경계항으로 사라짐).

**$h(\mathbf{x}, t)$는 collision에 의해서는 결코 증가하지 않는다.** 그리고 재는 것에 대해 단조증가함수 아님.

For $H(t)$, never increases in time.

$$
\frac{dH}{dt} \leq 0
$$

### Entropy

Entropy density:

$$
s(\mathbf{x}, t) = -k_B\, h(\mathbf{x}, t)
$$

Total entropy → density를 공간에 대해 적분한 것.

$$
S_B(t) = \int d^3x\ s(\mathbf{x}, t) = -k_B H(t)
$$

**We can explain the irreversibility now.**

- Shannon entropy (information entropy)

$$
H_S = -\sum_i P(x) \log_b P(x) = -\langle \log_b P \rangle
$$

- Gibbs entropy

$$
S = -k_B \sum_i p_i \ln p_i
$$

엔트로피가 충돌로 인해 계속, 시간이 지나니까 늘어난다... **충돌이 일어나기 전의 정보를 잃어버림 (molecular chaos)** 가 비가역성을 만든다.

### EQ properties at $t \to \infty$

$H$가 상수가 됨. → $f_1(\mathbf{p}_1') f_1(\mathbf{p}_2') - f_1(\mathbf{p}_1) f_1(\mathbf{p}_2)$ 부분이 0이 된다?

$$
f_1(\mathbf{x}, \mathbf{p}_1, t) f_1(\mathbf{x}, \mathbf{p}_2, t) = f_1(\mathbf{x}, \mathbf{p}_1', t) f_1(\mathbf{x}, \mathbf{p}_2', t)
$$

(좌변: 충돌 전, 우변: 충돌 후) — 어디서부터 time reversal symmetry가 사라지지?

At $t \to \infty$: no time, position dependence.

$$
\ln f_1^0(\mathbf{p}_1) + \ln f_1^0(\mathbf{p}_2) = \ln f_1^0(\mathbf{p}_1') + \ln f_1^0(\mathbf{p}_2')
$$

$$
\ln f_1^0(\mathbf{p}) = \text{const} - \boldsymbol{\alpha} \cdot \mathbf{p} - \beta \frac{\mathbf{p}^2}{2m}
$$

- $\boldsymbol{\alpha} \cdot \mathbf{p}$: momentum conservation in collision
- $\beta \frac{\mathbf{p}^2}{2m}$: energy conservation in collision

$\boldsymbol{\alpha}$랑 $\beta$가 주어지고, 일반 상수가... → **HW**

### Maxwell-Boltzmann distribution

Eq distribution이 Maxwell-Boltzmann distribution임을 유도하기.

$$
f_1^0(\mathbf{p}) = \frac{n}{(2\pi m k_B T)^{3/2}} e^{-\frac{\mathbf{p}^2}{2m k_B T}}
$$

- $n$: density of particle
- $f_1^0(\mathbf{p})$는 입자 하나가 $\mathbf{p}$를 가질 확률 → 아님.
- $\mathbf{p}$를 가지는 입자의 평균적인 개수 → 맞음.

# 궁금한 내용

> [!question] Q1. $h(\mathbf{x}, t)$를 왜 따로 정의했을까? $H$만으로도 충분하지 않나?
> $H$의 단조성만 보이려면 바로 $dH/dt$를 계산해도 된다. 그러나 $h$를 거치면 entropy 변화가 **transport** ($\nabla \cdot \mathbf{j}_h$, 공간 적분하면 사라지는 reversible 흐름)와 **production** ($(\partial h / \partial t)_{\text{coll}} \leq 0$, collision에서만 생김)으로 분리된다. 그래서 "irreversibility가 어디서 오는가?"에 정확히 답할 수 있고, 모든 점에서 성립하는 **local second law**라는 더 강한 명제를 얻는다. 또한 $(\partial h / \partial t)_{\text{coll}} = 0$인 상태(local Maxwellian)와 전역 평형을 구분할 수 있어 hydrodynamics로 이어진다.

> [!question] Q2. 어디서부터 time reversal symmetry가 사라지지?
> **Molecular chaos (Stosszahlansatz)**: $f_2 \approx f_1 f_1$을 "충돌 직전" 쌍에만 적용한 순간이다. 충돌 직후의 두 입자는 방금 상호작용해서 correlation이 있는데, 이를 버리고 "충돌 전은 항상 uncorrelated"라고 시간 방향을 정해 놓았다. Liouville 방정식, Hamiltonian, $W$의 detailed balance는 모두 time-reversal symmetric이므로, 비대칭이 들어올 수 있는 곳은 이 가정뿐이다.

> [!question] Q3. Force term을 0으로 만드는 계산은 정확히 어떻게?
> Chain rule로 $(\ln f_1 + 1)\nabla_{\mathbf{p}} f_1 = \nabla_{\mathbf{p}}(f_1 \ln f_1)$. $\mathbf{F}_{\text{ext}}$가 $\mathbf{p}$에 무관하면 적분 밖으로 나오고, 남은 적분은 $|\mathbf{p}| \to \infty$의 경계항이 된다. $f_1 \to 0$이고 $\lim_{x \to 0^+} x \ln x = 0$이므로 0. $\mathbf{F}$가 $\mathbf{p}$에 의존해도 $\nabla_{\mathbf{p}} \cdot \mathbf{F} = 0$ (예: Lorentz force)이면 부분적분으로 여전히 0.

# AI의 보충 설명

필기 원본과 비교해 수정하거나 짚어둘 부분.

**1. $d\rho/dt = 0$과 "총량 보존"은 다른 이야기**
- 총량 보존 $\frac{d}{dt}\int \rho = 0$은 continuity equation $\partial_t \rho = -\nabla \cdot (\rho \mathbf{u})$만 있으면 ($\nabla \cdot \mathbf{u}$와 무관하게) 경계항으로 성립한다. 정확히는 $\frac{d}{dt}\int \rho = \int \frac{\partial \rho}{\partial t}$이다.
- $d\rho/dt = 0$은 그보다 강한 명제로, 흐름을 따라가며 본 밀도가 일정하다는 것 (phase-space flow가 **incompressible**, $\nabla \cdot \mathbf{u} = 0$).
- 또 "점이 다른 좌표로 이동하기는 하지만" 부분에는 $\partial \rho / \partial t \neq 0$이 어울린다. 고정된 자리의 밀도는 변할 수 있지만, 흐름을 따라가면 변하지 않는다($d\rho/dt = 0$).

**2. Reduced density의 normalization 관례**
- 필기는 $f_2$에 순서 없는 쌍의 수 $\frac{N(N-1)}{2}$, $f_m$에 $\binom{N}{m}$을 붙였다. Kardar는 순서 있는 관례 $f_s = \frac{N!}{(N-s)!}\int \prod_{i > s} dV_i\ \rho$를 쓴다.
- 이 차이는 molecular chaos에서 드러난다. Kardar 관례에서는 $\int f_2 = N(N-1) \approx N^2 = (\int f_1)^2$이라 $f_2 \approx f_1 f_1$이 자연스럽지만, 필기 관례로는 $f_2 \approx \frac{1}{2} f_1 f_1$이 되어 collision term에 1/2이 붙는다. 강의 판서가 어느 쪽이었는지 확인 필요.

**3. 원본에서 수정한 부분**
- 1쪽 "$H(t)$가 단조증가함을 증명" → 증명 결과는 $dH/dt \leq 0$이므로 **단조감소**로 적음. 증가하는 것은 entropy $S_B = -k_B H$.
- 10쪽 "$h \leq 0$ at every $t$" → 부호가 정해지는 것은 $h$ 자체가 아니라 **$(\partial h / \partial t)_{\text{coll}} \leq 0$**. $h$ 자체는 current term 때문에 국소적으로 증가할 수도 있다.
- 8쪽 force term 계산에서 $\frac{\partial}{\partial f_1}$을 적분 밖으로 꺼낸 표기는 엄밀하지 않아서, chain rule $\nabla_{\mathbf{p}}(f_1 \ln f_1) = (1 + \ln f_1)\nabla_{\mathbf{p}} f_1$로 바로 쓰도록 정리함.

**4. 두 번의 index 교환이 쓰는 대칭**
- 첫 교환 ($1 \leftrightarrow 2$): 동종 입자이므로 $W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') = W(\mathbf{p}_2, \mathbf{p}_1 | \mathbf{p}_2', \mathbf{p}_1')$.
- 둘째 교환 (프라임 ↔ 언프라임): **detailed balance** $W(\mathbf{p}_1, \mathbf{p}_2 | \mathbf{p}_1', \mathbf{p}_2') = W(\mathbf{p}_1', \mathbf{p}_2' | \mathbf{p}_1, \mathbf{p}_2)$가 필요하다. 이 대칭이 없으면 1/4 꼴로 묶을 수 없다.

**5. Temperature field 정의**
- 필기의 $\int d^3p\ \frac{\mathbf{p}^2}{2m} f_1 = \frac{3}{2} k_B n T$는 유속 $\mathbf{u} = 0$일 때만 맞다. 흐름이 있으면 bulk motion의 운동에너지가 섞이므로, 보통 상대 운동량으로 정의한다.

$$
\int d^3p\ \frac{(\mathbf{p} - m\mathbf{u})^2}{2m} f_1 = \frac{3}{2} k_B\, n(\mathbf{x}, t)\, T(\mathbf{x}, t)
$$

**6. Equilibrium 조건의 의미**
- $\ln f_1$이 충돌 전후로 더해서 보존되는 양(collision invariant)이어야 하므로, 충돌에서 보존되는 양인 $1$, $\mathbf{p}$, $\mathbf{p}^2/2m$의 선형결합이 된다. 그래서 $\ln f_1^0 = \text{const} - \boldsymbol{\alpha} \cdot \mathbf{p} - \beta \mathbf{p}^2/2m$.

# 연관 학습 노트

- [[Liouville's Theorem]]
- [[AM lecture note - Liouville theorem and Canonical transformation]]
- [[detailed balance]]
- [[Gibbs Entropy]]
- [[Shannon Entropy and Boltzmann Entropy Decomposition]]
- [[📑 Journal reading - Time-Reversal and Entropy]]

# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[SM lecture note - Ensemble Theory and Energy Hypersurface|7th week - Ensemble Theory and Energy Hypersurface]]

# 필기 원본

![[SM H theorem.pdf]]
