---
title: "QM lecture note - Electric Dipole Approximation and TRK Sum Rule"
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
[[QM lecture note - Absorption and Stimulated Emission]]


# 오늘의 핵심


# 필기 내용

> [!info] 이 노트의 설명은 Glia가 작성했다.
> 시험 대비로 빠르게 완성한 노트. 이후 직접 읽으면서 고치거나 보충할 것.

Sakurai 5.8.2 Electric Dipole Approximation

## Symbol table

| Symbol | Meaning |
|--|--|
| $\ket{\alpha}$ | Initial state (교과서의 $\ket{i}$) |
| $\ket{n}$ | Final state |
| $\omega_{n\alpha}$ | $(E_n - E_\alpha)/\hbar$ |
| $R_{\text{atom}}$ | Atomic size, $\sim a_0/Z$ |
| $\lambda$ | Reduced wavelength of light, $\lambda = c/\omega$ |
| $\alpha_{\text{fs}}$ | Fine-structure constant $e^2/\hbar c \approx 1/137$ |
| $\sigma_{\text{abs}}$ | Absorption cross section |
| $f_{n\alpha}$ | Oscillator strength |

## 1. 근사의 아이디어: 빛의 파장 ≫ 원자 크기

(5.320)의 matrix element 속 지수함수를 Taylor 전개하면 ($\omega/c = 1/\lambda$)

$$
e^{i(\omega/c)\hat{\mathbf{n}}\cdot\mathbf{x}} = 1 + i\frac{\omega}{c}\hat{\mathbf{n}}\cdot\mathbf{x} + \cdots
\tag{5.321}
$$

전자는 원자 안($\lvert\mathbf{x}\rvert \lesssim R_{\text{atom}}$)에만 있으므로, 두 번째 항의 크기는 $R_{\text{atom}}/\lambda$이다. 
이게 작으면 **첫 항 1만 남기면 된다.** → 이 얼마나 훌륭한 날먹인가!
**원자 입장에서는 빛의 전기장이 공간적으로 균일하게 보인다**는 뜻이다.

### 얼마나 작은가

빛의 에너지는 원자 level 간격 정도여야 흡수가 일어나므로

$$
\hbar\omega \sim \frac{Ze^2}{(a_0/Z)} \simeq \frac{Ze^2}{R_{\text{atom}}}
\tag{5.322}
$$

$$
\frac{c}{\omega} = \lambda \sim \frac{c\hbar R_{\text{atom}}}{Ze^2} \simeq \frac{137R_{\text{atom}}}{Z}
\tag{5.323}
$$

$$
\frac{1}{\lambda}R_{\text{atom}} \sim \frac{Z}{137} \ll 1
\tag{5.324}
$$

가벼운 원자(작은 $Z$)에서는 훌륭한 근사다. 예: 가시광선 파장 ~500 nm vs 원자 크기 ~0.1 nm.

## 2. Momentum matrix element → position matrix element

지수함수를 1로 두면

$$
\bra{n}e^{i(\omega/c)(\hat{\mathbf{n}}\cdot\mathbf{x})}\hat{\boldsymbol{\varepsilon}}\cdot\mathbf{p}\ket{\alpha} \rightarrow \hat{\boldsymbol{\varepsilon}}\cdot\bra{n}\mathbf{p}\ket{\alpha}
\tag{5.325}
$$

$\hat{\boldsymbol{\varepsilon}}$을 $x$축, $\hat{\mathbf{n}}$을 $z$축으로 잡으면 $\bra{n}p_x\ket{\alpha}$만 구하면 된다.

**Trick**: $H_0 = \frac{\mathbf{p}^2}{2m} + V(\mathbf{x})$에서 $V$는 $x$와 commute하므로 kinetic 항만 남는다.

$$
[x, H_0] = \frac{1}{2m}[x, p_x^2] = \frac{1}{2m}\cdot2i\hbar p_x = \frac{i\hbar p_x}{m}
\tag{5.326}
$$

양변을 $\bra{n}\cdots\ket{\alpha}$로 감싸고, $H_0$가 양쪽 eigenstate에 작용하면 eigenvalue가 나오는 것을 쓰면

$$
\bra{n}[x, H_0]\ket{\alpha} = (E_\alpha - E_n)\bra{n}x\ket{\alpha} = -\hbar\omega_{n\alpha}\bra{n}x\ket{\alpha}
$$

$$
\bra{n}p_x\ket{\alpha} = \frac{m}{i\hbar}\bra{n}[x, H_0]\ket{\alpha} = im\omega_{n\alpha}\bra{n}x\ket{\alpha}
\tag{5.327}
$$

$p$의 matrix element가 **dipole operator $x$의 matrix element**로 바뀌었다. 그래서 electric dipole (E1) approximation이라 부른다.

## 3. Selection rules

$x$는 rank-1 spherical tensor이므로 Wigner-Eckart theorem에 의해

- $\hat{\boldsymbol{\varepsilon}}$이 $x$ 또는 $y$ 방향 ($q = \pm1$): $m' - m = \pm1$
- $\hat{\boldsymbol{\varepsilon}}$이 $z$ 방향 ($q = 0$): $m' = m$
- 공통: $\lvert j' - j\rvert = 0, 1$, 단 $0 \to 0$ 금지
- Parity: $x$는 odd이므로 parity가 바뀌어야 한다 ([[QM lecture note - Linear Stark Effect]]의 selection rule과 같은 논리)

## 4. E1 근사의 absorption cross section

(5.320)에 (5.325), (5.327)을 넣으면 $\lvert\bra{n}p_x\ket{\alpha}\rvert^2 = m^2\omega_{n\alpha}^2\lvert\bra{n}x\ket{\alpha}\rvert^2$이고, $\delta(E_n - E_\alpha - \hbar\omega) = \frac{1}{\hbar}\delta(\omega - \omega_{n\alpha})$이므로

$$
\sigma_{\text{abs}} = \frac{4\pi^2\hbar}{m^2\omega}\alpha_{\text{fs}}\cdot m^2\omega_{n\alpha}^2\lvert\bra{n}x\ket{\alpha}\rvert^2\cdot\frac{1}{\hbar}\delta(\omega - \omega_{n\alpha})
$$

$\delta$-function 때문에 $\omega = \omega_{n\alpha}$로 두면 $\omega_{n\alpha}^2/\omega \to \omega_{n\alpha}$:

$$
\sigma_{\text{abs}} = 4\pi^2\alpha_{\text{fs}}\,\omega_{n\alpha}\lvert\bra{n}x\ket{\alpha}\rvert^2\delta(\omega - \omega_{n\alpha})
\tag{5.328}
$$

$\sigma_{\text{abs}}(\omega)$는 $\hbar\omega$가 level 간격과 맞을 때마다 날카로운 peak를 가진다 (흡수 스펙트럼의 선들).

### 모든 진동수에 대해 적분

$\ket{\alpha}$가 ground state이면 모든 $n$에 대해 $\omega_{n\alpha} > 0$이므로 모든 peak가 $\omega > 0$ 쪽에 있다. 모든 final state의 기여를 더하고 $\omega$로 적분하면 $\delta$가 사라진다.

$$
\int\sigma_{\text{abs}}(\omega)\,d\omega = \sum_n4\pi^2\alpha_{\text{fs}}\,\omega_{n\alpha}\lvert\bra{n}x\ket{\alpha}\rvert^2
\tag{5.329}
$$

질문: 이 **전체 흡수량**은 얼마인가? → TRK sum rule이 답한다.

## 5. Oscillator strength와 TRK sum rule

### Oscillator strength

$$
f_{n\alpha} \equiv \frac{2m\omega_{n\alpha}}{\hbar}\lvert\bra{n}x\ket{\alpha}\rvert^2
\tag{5.330}
$$

무차원 양이다. 각 transition $\alpha \to n$이 전체 흡수 중 얼마를 차지하는지를 나타낸다. 이름의 유래: 고전적으로 원자를 "고유진동수 $\omega_{n\alpha}$인 전자 용수철(oscillator)들의 모음"으로 보았을 때, $f_{n\alpha}$는 그 진동수에 해당하는 oscillator가 몇 개 분량인지에 해당한다.

### Thomas-Reiche-Kuhn (TRK) sum rule

$$
\sum_nf_{n\alpha} = 1
\tag{5.331}
$$

### 유도: double commutator $[x, [x, H_0]]$ 가 상수임을 이용하자

**Step 1. 연산자로 직접 계산.** (5.326)을 한 번 더 쓰면

$$
[x, [x, H_0]] = \left[x, \frac{i\hbar p_x}{m}\right] = \frac{i\hbar}{m}[x, p_x] = \frac{i\hbar}{m}(i\hbar) = -\frac{\hbar^2}{m}
$$

결과가 **상수**다. 따라서 어떤 state로 기댓값을 취해도 $-\hbar^2/m$이다.

**Step 2. 전개해서 기댓값.** Commutator를 풀면

$$
[x, [x, H_0]] = x^2H_0 - 2xH_0x + H_0x^2
$$

$\ket{\alpha}$로 기댓값을 취하면, 첫 항과 셋째 항은 $H_0$가 $\ket{\alpha}$나 $\bra{\alpha}$에 작용해서 $E_\alpha$가 된다.

$$
\bra{\alpha}[x, [x, H_0]]\ket{\alpha} = 2E_\alpha\bra{\alpha}x^2\ket{\alpha} - 2\bra{\alpha}xH_0x\ket{\alpha}
$$

**Step 3. Completeness 삽입.** $\mathbf{1} = \sum_n\ket{n}\bra{n}$을 넣어서, 어떻게든 식이 $\lvert\bra{n}x\ket{\alpha}\rvert$ 를 포함하도록 고친다. 

$$
\bra{\alpha}x^2\ket{\alpha} = \sum_n\lvert\bra{n}x\ket{\alpha}\rvert^2, \qquad \bra{\alpha}xH_0x\ket{\alpha} = \sum_nE_n\lvert\bra{n}x\ket{\alpha}\rvert^2
$$
결과를 합하면
$$
\bra{\alpha}[x, [x, H_0]]\ket{\alpha} = -2\sum_n(E_n - E_\alpha)\lvert\bra{n}x\ket{\alpha}\rvert^2 = -2\hbar\sum_n\omega_{n\alpha}\lvert\bra{n}x\ket{\alpha}\rvert^2
$$

**Step 4. 두 결과를 같게 놓기.**

$$
-2\hbar\sum_n\omega_{n\alpha}\lvert\bra{n}x\ket{\alpha}\rvert^2 = -\frac{\hbar^2}{m}
\quad\Rightarrow\quad
\sum_n\frac{2m\omega_{n\alpha}}{\hbar}\lvert\bra{n}x\ket{\alpha}\rvert^2 = 1
$$

이것이 $\sum_nf_{n\alpha} = 1$이다. ∎

### 왜 놀라운가

- 유도에 쓴 것은 $[x, p_x] = i\hbar$와 "potential이 $x$와 commute한다"는 사실뿐이다. **Potential의 구체적인 모양을 전혀 몰라도 성립한다.** 수소든 나트륨이든, 조화진동자든 상관없다.
- $\sum_n$은 bound state뿐 아니라 **continuum state까지 모두** 포함한다. Continuum으로의 흡수가 바로 5.8.3의 photoelectric effect다.
- 전자가 $Z$개인 원자에서는 $\sum_nf_{n\alpha} = Z$가 된다.

## 6. 전체 흡수량은 고전적인 값

(5.329)에 (5.330)을 넣으면 $\omega_{n\alpha}\lvert\bra{n}x\ket{\alpha}\rvert^2 = \frac{\hbar}{2m}f_{n\alpha}$이므로

$$
\int\sigma_{\text{abs}}(\omega)\,d\omega = 4\pi^2\alpha_{\text{fs}}\frac{\hbar}{2m}\sum_nf_{n\alpha} = \frac{4\pi^2\alpha_{\text{fs}}\hbar}{2m_e} = 2\pi^2c\left(\frac{e^2}{m_ec^2}\right)
\tag{5.332}
$$

($\alpha_{\text{fs}}\hbar = e^2/c$를 쓰면 $\hbar$가 사라진다.)

- **$\hbar$가 사라졌다.** 이 값은 고전 전자기학(Jackson)의 oscillator sum rule과 정확히 같다.
- $e^2/m_ec^2$는 classical electron radius $r_e \approx 2.8\times10^{-15}$ m이다.
- 역사적으로 "새로운 양자역학"이 올바른 고전적 결과를 재현한 초기 사례 중 하나다.

**한 문장 요약**: 원자가 빛을 얼마나 흡수하는지를 모든 진동수에 걸쳐 더하면, 원자의 구조와 무관하게 고전적인 값 $2\pi^2cr_e$로 고정된다. 양자역학은 그 총량을 각 transition에 **어떻게 나눠 주는지** ($f_{n\alpha}$)만 정한다.



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Absorption and Stimulated Emission]]
- [[QM lecture note - Linear Stark Effect]]
- [[QM lecture note - Spin-Orbit Interaction and Fine Structure]]

# 다음 강의
[[QM lecture note - Photoelectric Effect]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.8.2

# 원본 필기 이미지
