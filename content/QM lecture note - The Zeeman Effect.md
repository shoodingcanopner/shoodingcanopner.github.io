---
title: "QM lecture note - The Zeeman Effect"
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
[[QM lecture note - Spin-Orbit Interaction and Fine Structure]]


# 오늘의 핵심


# 필기 내용

Sakurai 5.3.3 The Zeeman Effect

## Symbol table

| Symbol | Meaning |
|--|--|
| $\mathbf{B}$ | Uniform external magnetic field ($+z$-direction) |
| $\mathbf{A}$ | Vector potential |
| $e$ | Electron charge ($e < 0$, Sakurai convention) |
| $\boldsymbol{\mu}$ | Electron spin magnetic moment |
| $H_0$ | Unperturbed Hamiltonian (central potential) |
| $H_{LS}$ | Spin-orbit interaction |
| $H_B$ | Interaction with the external magnetic field |
| $\ket{j = l \pm \frac{1}{2}, m}$ | $\mathbf{J}^2, J_z$ eigenkets (weak-field base kets) |
| $\ket{m_l, m_s}$ | $L_z, S_z$ eigenkets (strong-field base kets) |
| $c_\pm$ | (5.139)의 CG coefficient |
| $\Delta E_B$ | Energy shift due to $\mathbf{B}$ |

## Vector potential and minimal coupling
수소같은 전자가 **자기장** 안에 있다면?
**오비탈**과 **스핀**에 따라 에너지가 갈라진다. 
==NMR의 원리도 Zeeman effect이다 (단, NMR은 핵 스핀의 Zeeman effect이고, 이 절은 전자의 Zeeman effect다).== 

벡터포텐셜은 아래와 같이 정의된다. $\mathbf{A}$를 컬한게 $\mathbf{B}$이니까, $\mathbf{B}$를 위치와 cross product한 것이 $\mathbf{A}$ 자기벡터포텐셜. 

$$
\mathbf{A} = \frac{1}{2}(\mathbf{B}\times\mathbf{x})
\tag{5.126}
$$
자기장이 $\hat{z}$방향으로 uniform하게 있을 때는 식이 간단해진다. $\mathbf{B} = B\hat{z}$

$$
\mathbf{A} = -\frac{1}{2}(By\hat{\mathbf{x}} - Bx\hat{\mathbf{y}})
\tag{5.127}
$$
이렇게 자기포텐셜이 있는 경우, 해밀토니안을 결정하는 유효한 운동량이 바뀐다. [[QM lecture note - Gauge Transformations|1학기 양자역학]] 에서 배운 것을 참고한다. (이해할 필요 없이 그냥 외우자)
$$
\mathbf{p} \rightarrow \boldsymbol{\pi} =  \mathbf{p} - \frac{e\mathbf{A}}{c}
\tag{5.128}
$$
오른쪽 식, $\boldsymbol{\pi}$ 은 mechanical momentum이라고 불린다. $\mathbf{p} , \mathbf{A}$가 commute하지 않음에 주의. 

해밀토니안은 이렇게 달라진다. 
$$
H =  \frac{\boldsymbol{\pi}^2}{2m_e} + V_c(r) =  \frac{\mathbf{p}^2}{2m_e} + V_c(r) - \frac{e}{2m_ec}(\mathbf{p}\cdot\mathbf{A} + \mathbf{A}\cdot\mathbf{p}) + \frac{e^2\mathbf{A}^2}{2m_ec^2}
\tag{5.129}
$$
여기서 생긴 해밀토니안 추가항은 아마 전자가 오비탈을 돌며 생기는 자기장과 외부 자기장이 상호작용하면서 나타나는 에너지 일 것이다. 

아직 스핀-자기장 상호작용을 고려하지 않았다. 
$$
-\boldsymbol{\mu}\cdot\mathbf{B} = \frac{-e}{m_ec}\mathbf{S}\cdot\mathbf{B} = \frac{-e}{m_ec}BS_z
\tag{5.135}
$$
까지 더해줘야 진짜 해밀토니안이 나올 것이다. 
### $\mathbf{p}\cdot\mathbf{A}$ vs. $\mathbf{A}\cdot\mathbf{p}$
$V$ 식을 간단하게 하는 작업을 하자. 
$\mathbf{p}\cdot\mathbf{A}$을 풀다 ==보면==, 자기벡터 포텐셜의 divergence를 계산하게 되는데, 
==여기서 쓰는 $\mathbf{A} = \frac{1}{2}\mathbf{B}\times\mathbf{x}$는 divergence가 0이다. 단, 이것은 항상 성립하는 성질이 아니라 gauge 선택(Coulomb gauge)이다. 항상 성립하는 것은 $\nabla\cdot\mathbf{B} = 0$이고, $\mathbf{A}$에 gradient를 더해도 같은 $\mathbf{B}$가 나오므로 $\mathbf{A}$는 유일하지 않다.== 
$\mathbf{p} = -i \hbar \nabla$

$$
\nabla\cdot\mathbf{A}(\mathbf{x})= 0
$$
하지만 그렇다고 
$\frac{i}{\hbar}\mathbf{p}\cdot\mathbf{A}= 0$ 이라 생각하면 안 된다는 점. 왜냐면 이건 연산자이기 때문에, 뒤에 있는 ket도 함께 연산되기 때문이다. 

$\mathbf{p}\cdot\mathbf{A}(\mathbf{x})$을 서로 다른 ket 사이에 적용하는 상황이라면,
$$
\bra{\mathbf{x}'}\mathbf{p}\cdot\mathbf{A}(\mathbf{x})\ket{\;} 
$$

위 식은 $\mathbf{p}\cdot\mathbf{A}(\mathbf{x})\ket{\;}$를 $\bra{\mathbf{x}'}$ 과 내적하는 것.
$\mathbf{p}\cdot\mathbf{A}(\mathbf{x})\ket{\;}$를 ==position representation ($\psi = \braket{\mathbf{x}|\;}$)에서== 곱의 미분법으로 풀어 쓰면, 
$$
-i\hbar\nabla\cdot(\mathbf{A}\psi) = -i\hbar\left[(\nabla\cdot\mathbf{A})\psi + \mathbf{A}\cdot\nabla\psi\right]
$$
이를 $\bra{\mathbf{x}'}$ 과 내적.
$$
\bra{\mathbf{x}'}\mathbf{p}\cdot\mathbf{A}(\mathbf{x})\ket{\;} = -i\hbar\nabla'\cdot\left[\mathbf{A}(\mathbf{x}')\braket{\mathbf{x}'|\;}\right]
$$

$$
= \bra{\mathbf{x}'}\mathbf{A}(\mathbf{x})\cdot\mathbf{p}\ket{\;} + \braket{\mathbf{x}'|\;}\left[-i\hbar\nabla'\cdot\mathbf{A}(\mathbf{x}')\right]
\tag{5.130}
$$

==(5.126)의 gauge에서 성립하는 $\nabla\cdot\mathbf{A} = 0$을 이용하면,== 
$$
\nabla\cdot\mathbf{A}(\mathbf{x}) = 0
\tag{5.131}
$$

놀랍게도 $\mathbf{p}\cdot\mathbf{A} = \mathbf{A}\cdot\mathbf{p}$ 이라는 사실을 알게 된다. 
$$
\bra{\mathbf{x}'}\mathbf{p}\cdot\mathbf{A}(\mathbf{x})\ket{\;}  = \bra{\mathbf{x}'}\mathbf{A}(\mathbf{x})\cdot\mathbf{p}\ket{\;} 
$$

### Hamiltonian in a uniform $\mathbf{B}$

이제 $\mathbf{A}\cdot\mathbf{p}$만 계산하면 된다!
$\mathbf{A} = -\frac{1}{2}(By\hat{\mathbf{x}} - Bx\hat{\mathbf{y}})$ 을 이용, 그저 vector 사이 dot product이다. 
$$
\mathbf{A}\cdot\mathbf{p} = B\left(-\frac{1}{2}yp_x + \frac{1}{2}xp_y\right) = \frac{1}{2}BL_z
\tag{5.132}
$$
자연스럽게 $L_z$가 나와버렸다. 
$$
\mathbf{A}^2 = \mathbf{A}\cdot \mathbf{A} = \frac{1}{4}B^2(x^2 + y^2)
\tag{5.133}
$$

이제 해밀토니안을 간단하게 쓸 수 있다. 
$$
H = \frac{\mathbf{p}^2}{2m_e} + V_c(r) - \frac{e}{2m_ec}BL_z + \frac{e^2}{8m_ec^2}B^2(x^2 + y^2)
\tag{5.134}
$$

$\frac{e^2}{8m_ec^2}B^2(x^2 + y^2)$은 $B$ 에 대한 2차항이니, 자기장이 작다고 가정하고 무시하자. 
이걸 버리고 스핀-자기장 상호작용 $\frac{-e}{m_ec}BS_z$을 추가한다. 

$$
H = \frac{\mathbf{p}^2}{2m_e} + V_c(r) + \frac{-eB}{2m_ec}(L_z + 2S_z)
$$
정리하면, 아래 식이 perturbation 되시겠다. 


$$
H_B = \frac{-eB}{2m_ec}(L_z + 2S_z)
\tag{5.136c}
$$

### Total Hamiltonian (quadratic term omitted)
정리하면, 아래가 unperturbed Hamiltonian.
$$
H_0 = \frac{\mathbf{p}^2}{2m_e} + V_c(r)
\tag{5.136a}
$$

아래 두 perturbation이 있다. 

지난 시간에 배운 Fine structure과, 
$$
H_{LS} = \frac{1}{2m_e^2c^2}\frac{1}{r}\frac{dV_c(r)}{dr}\mathbf{L}\cdot\mathbf{S}
\tag{5.136b}
$$
이번에 도입한 Zeeman effect 
$$
H_B = \frac{-eB}{2m_ec}(L_z + 2S_z)
\tag{5.136c}
$$

한번에 두 perturbation을 함께 고려하는 건 어려운 일이다. (더군다나, 나중에 알게 되지만 $H_{LS}$와 $H_{B}$는 good state basis가 완전 달라서 더 골치아프다.)

다행인 점은 조건에 따라 두 perturbation의 세기가 달라지고, 우세한 ==perturbation==하나만 고려해도 괜찮아진다는 점이다. 

비결은 orbital에 의해 생기는 자기장의 세기와 외부 자기장 세기를 비교하는 것이다. 
외부 자기장이 약하면(Weak-field limit),  fine structure $H_{LS}$ 가 더 우세하다. 
외부 자기장이 강하면(Strong-field limit), Zeeman effect $H_B$가 더 우세하다.  

![[Pasted image 20261026131422.png]]


여기서 잠깐 헷갈리는 부분이 있는데...
우세한 포텐셜을 unperturbed Hamiltonian에 포함시키고, 열세인 것에 perturbation theory를 적용한다는 것이다. 

**우세한 포텐셜의 eigen ket을 이용하여, 열세인 ==potential==의 expectation value를 계산한다.** 

## Weak-field limit ($H_B \ll H_{LS}$)
$H_0 + H_{LS}$의 eigenket을 써야하기 때문에 , $\ket{n \, l \, j \, m}$을 basis삼는다. (m은 $J_z$것이다. 전체 $z$ 각운동량)
아래부터는 $\ket{j\,m}$으로 간략하게 쓴다. 
$H_B = \frac{-eB}{2m_ec}(L_z + 2S_z)$를 perturbation 삼아서 1st order energy correction을 계산,

$L_z + 2S_z$를 $m$값과 스핀 값에 상응하도록 바꾼다. (사실 안 바꿔도 괜찮을 것 같다)
$$
L_z + 2S_z = J_z + S_z
\tag{5.137}
$$
이제 $H_B$ 의 expectation value를 계산한다. 

$$
\frac{-eB}{2m_ec}\langle J_z + S_z\rangle_{j=l\pm1/2,m}
\tag{5.138}
$$
$\ket{j\,m}$ 으로는 $m_s$값을 알 수 없다. [[QM lecture note - Addition of Angular Momentum and CG Coefficients |CG coefficients]]를 이용하여 
$\ket{j = l \pm 1/2, \, m}$를 $\ket{m_l \, m_s}$의 eigenket으로 분해한다. 


$$
\begin{pmatrix} \left|l+\tfrac{1}{2}, m\right\rangle \\ \left|l-\tfrac{1}{2}, m\right\rangle \end{pmatrix}
=
\begin{pmatrix}
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle \\
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle
\end{pmatrix}
\begin{pmatrix} \left|m-\tfrac{1}{2}, \tfrac{1}{2}\right\rangle \\ \left|m+\tfrac{1}{2}, -\tfrac{1}{2}\right\rangle \end{pmatrix}
$$

$$
\begin{pmatrix}
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l+\frac{1}{2}, m\right\rangle \\
\left\langle m-\frac{1}{2}, \frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle & \left\langle m+\frac{1}{2}, -\frac{1}{2} \;\big|\; l-\frac{1}{2}, m\right\rangle
\end{pmatrix}
= \begin{pmatrix} \sqrt{\dfrac{l+m+\frac{1}{2}}{2l+1}} & \sqrt{\dfrac{l-m+\frac{1}{2}}{2l+1}} \\[10pt] -\sqrt{\dfrac{l-m+\frac{1}{2}}{2l+1}} & \sqrt{\dfrac{l+m+\frac{1}{2}}{2l+1}} \end{pmatrix}
$$
위 일반식을 잘 이용하면, 

$$
\ket{j = l \pm \frac{1}{2}, m} 
$$
$$
= \pm\sqrt{\frac{l \pm m + \frac{1}{2}}{2l+1}}\ket{m_l = m - \frac{1}{2}, m_s = \frac{1}{2}} + \sqrt{\frac{l \mp m + \frac{1}{2}}{2l+1}}\ket{m_l = m + \frac{1}{2}, m_s = -\frac{1}{2}}
\tag{5.139}
$$


$$
c_+ = \pm\sqrt{\frac{l \pm m + \frac{1}{2}}{2l+1}},\, \qquad c_-=\sqrt{\frac{l \mp m + \frac{1}{2}}{2l+1}}
$$

Expectation value를 구하면 끝. 

$$
\langle S_z\rangle_{j=l\pm1/2,m} = \frac{\hbar}{2}\left(\lvert c_+\rvert^2 - \lvert c_-\rvert^2\right) = \frac{\hbar}{2(2l+1)}\left[\left(l \pm m + \frac{1}{2}\right) - \left(l \mp m + \frac{1}{2}\right)\right] 
$$
$$
= \pm\frac{m\hbar}{2l+1}
\tag{5.140}
$$

### Landé's formula
$H_B = \frac{-eB}{2m_ec}(J_z + S_z)$ 을 고려해서 결론을 내면, 
$$
\Delta E_B = \frac{-e\hbar B}{2m_ec}m\left[1 \pm \frac{1}{2l+1}\right]
\tag{5.141}
$$
Energy shift가 $m$에 비례한다는 것을 알 수 있다. 
스핀 뿐만 아니라, 오비탈로 인한 $z$방향 회전도 기여하는 것이다. 

### Projection theorem으로 다시 구하기
> [!note] AI 답변 — Projection theorem이 뭐고 왜 쓰나
> ==Projection theorem (3.488): 같은 $j$ subspace 안에서 vector operator $\mathbf{V}$의 matrix element는 $\mathbf{J}$ 방향 성분만 남는다.==
> 
> $$
> \bra{j, m'}\mathbf{V}\ket{j, m} = \frac{\bra{j, m}\mathbf{J}\cdot\mathbf{V}\ket{j, m}}{\hbar^2j(j+1)}\bra{j, m'}\mathbf{J}\ket{j, m}
> $$
> 
> ==$\mathbf{V} = \mathbf{S}$로 두고 $z$ 성분을 취하면 $\langle J_z\rangle = m\hbar$이므로 아래 (5.142) 첫 줄이 된다. $\mathbf{L} = \mathbf{J} - \mathbf{S}$를 제곱하면 $\mathbf{S}\cdot\mathbf{J} = \frac{1}{2}(\mathbf{J}^2 + \mathbf{S}^2 - \mathbf{L}^2)$이므로, CG coefficient 없이 (5.140)과 같은 결과가 나온다.==
> 
> ==물리적 의미: $\mathbf{L}$과 $\mathbf{S}$는 $\mathbf{J}$ 둘레를 빠르게 세차운동하므로, 시간 평균하면 $\mathbf{S}$의 $\mathbf{J}$ 방향 성분만 남는다. 그래서 $\langle S_z\rangle \propto m$이고, energy shift가 $m$에 비례하는 이유가 이것이다.==
$$
\langle S_z\rangle_{j=l\pm1/2,m} = \left[\langle\mathbf{S}\cdot\mathbf{J}\rangle_{j=l\pm1/2}\right]\frac{m\hbar}{\hbar^2j(j+1)} = \frac{m\langle\mathbf{J}^2 + \mathbf{S}^2 - \mathbf{L}^2\rangle_{j=l\pm1/2}}{2\hbar j(j+1)}
$$

$$
= m\hbar\left[\frac{\left(l \pm \frac{1}{2}\right)\left(l \pm \frac{1}{2} + 1\right) + \frac{3}{4} - l(l+1)}{2\left(l \pm \frac{1}{2}\right)\left(l \pm \frac{1}{2} + 1\right)}\right] = \pm\frac{m\hbar}{2l+1}
\tag{5.142}
$$

## Strong-field limit: Paschen-Back ($H_B \gg H_{LS}$)
$H_B$가 우세할 경우, $\ket{m_l \, m_s}$를 basis 삼는 게 좋다. 
==먼저 $H_B$는 이 basis에서 이미 diagonal이므로, 그대로 unperturbed energy가 된다.== 

$$
\langle H_B\rangle_{m_lm_s} = \frac{-eB\hbar}{2m_ec}(m_l + 2m_s)
\tag{5.143}
$$
==그다음, 이 basis로 $H_{LS} = \frac{1}{2m_e^2c^2}\frac{1}{r}\frac{dV_c(r)}{dr}\mathbf{L}\cdot\mathbf{S}$의 expectation value를 구한다.==

$$
\langle\mathbf{L}\cdot\mathbf{S}\rangle = \left\langle L_zS_z + \frac{1}{2}(L_+S_- + L_-S_+)\right\rangle_{m_lm_s} = \hbar^2m_lm_s
\tag{5.144}
$$
Ladder operator를 이용하면 생각보다 쉽게 풀리는 모습
$$
\langle L_\pm\rangle_{m_l} = 0, \qquad \langle S_\pm\rangle_{m_s} = 0
\tag{5.145}
$$

$$
\langle H_{LS}\rangle_{m_lm_s} = \frac{\hbar^2m_lm_s}{2m_e^2c^2}\left\langle\frac{1}{r}\frac{dV_c}{dr}\right\rangle
\tag{5.146}
$$
==왜 degenerate인데도 $\ket{m_l, m_s}$를 그대로 쓸 수 있나? $H_B$만 있으면 $(m_l, m_s = +\frac{1}{2})$와 $(m_l + 2, m_s = -\frac{1}{2})$가 degenerate하다 ($m_l + 2m_s$가 같음). 그런데 $\mathbf{L}\cdot\mathbf{S}$의 $L_\pm S_\mp$ 항은 $m_l$을 $\pm1$만 바꾸므로 이 둘을 섞지 못한다. 따라서 degenerate subspace 안에서 $H_{LS}$가 이미 diagonal이고, $\ket{m_l, m_s}$가 그대로 good state다.==

## Table 5.1: Quantum numbers in weak and strong magnetic fields

| | Dominant interaction | Almost good | No good | Always good |
|--|--|--|--|--|
| Weak $\mathbf{B}$ | $H_{LS}$ | $\mathbf{J}^2$ (or $\mathbf{L}\cdot\mathbf{S}$) | $L_z, S_z$ * | $\mathbf{L}^2, \mathbf{S}^2, J_z$ |
| Strong $\mathbf{B}$ | $H_B$ | $L_z, S_z$ | $\mathbf{J}^2$ (or $\mathbf{L}\cdot\mathbf{S}$) | $\mathbf{L}^2, \mathbf{S}^2, J_z$ |

\* Exception: stretched configuration (e.g. $p_{3/2}$ with $m = \pm\frac{3}{2}$)

### Weak vs. strong의 기준

$$
\frac{e\hbar B}{2m_ec} \quad \text{vs.} \quad \left(\frac{1}{137}\right)^2\frac{e^2}{a_0}
$$

## Intermediate field (Fig. 5.3)



# 궁금한 내용


# 연관 학습 노트

- [[QM lecture note - Spin-Orbit Interaction and Fine Structure]]
- [[양자 필기 - Weak-Field Zeeman Effect]]
- [[양자 필기 - Strong-Field Zeeman Effect]]
- [[양자 필기 - Intermediate-Field Zeeman Effect]]
- [[양자 - J, L, S operator, CG coefficient and selection rule, 한 시간 만에 무배에서 다시 이해하기]]
- [[QM lecture note - Addition of Angular Momentum and CG Coefficients]]

# 다음 강의

[[QM lecture note - Variational Methods]]

# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.3.3

# 원본 필기 이미지
