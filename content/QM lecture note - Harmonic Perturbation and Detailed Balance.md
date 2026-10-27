---
title: QM lecture note - Harmonic Perturbation and Detailed Balance of photo
  emission and absorption
date: 2026-10-26
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
[[QM lecture note - Constant Perturbation and Transition Rate]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 
# 필기 내용
Sakurai 5.7.4 Harmonic Perturbation

## Symbol table

| Symbol | Meaning |
|--------|---------|
| $V(t)$ | Harmonic perturbation |
| $V$ | Time-independent operator part ($\mathbf{x}$, $\mathbf{p}$, $\mathbf{s}$ 등에 의존 가능) |
| $\omega$ | Perturbation의 angular frequency |
| $\ket{\alpha}$ | Initial state ($H_0$의 eigenstate) |
| $\ket{n}$ | Final state ($H_0$의 eigenstate) |
| $\omega_{n\alpha}$ | $(E_n - E_\alpha)/\hbar$ |
| $V_{n\alpha}$ | $\bra{n}V\ket{\alpha}$ |
| $V^\dagger_{n\alpha}$ | $(V^\dagger)_{n\alpha} = \bra{n}V^\dagger\ket{\alpha}$ |
| $c_n^{(1)}$ | $\ket{n}$의 first-order amplitude |
| $\rho(E_n)$ | Density of final states |
| $w_{\alpha\to[n]}$ | Transition rate |

## Harmonic perturbation을 정의한다. 빛같은 거

$$
V(t) = V e^{i\omega t} + V^\dagger e^{-i\omega t}
\tag{5.298}
$$
이렇게 더해야 포텐셜이 실수값이며 Hermitian이 되니까. 
## First-order amplitude
[[QM lecture note - Dyson Series & Transition Probability|지지난 시간]]에 구한 식으로 $c_n^{(1)}$을 계산해보자. 
$$
c_n^{(1)}(t) = \frac{-i}{\hbar}\int_{t_0}^{t}\bra{n}V_I(t')\ket{\alpha}\,dt'
$$

$$
= \frac{-i}{\hbar}\int_{t_0}^{t}e^{i\omega_{n\alpha}t'}V_{n\alpha}(t')\,dt'
$$

주의: perturbation의 진동수 $\omega$와  $n$th state와 ==$\alpha$th state== 에너지 차이에 의한 transition frequency $\omega_{n\alpha}\equiv\frac{E_{n}-E_{\alpha}}{\hbar}$를 혼동하지 않도록 주의하자. 


$$
c_n^{(1)} = \frac{-i}{\hbar}\int_0^t \left(V_{n\alpha}e^{i\omega t'} + V^\dagger_{n\alpha}e^{-i\omega t'}\right)e^{i\omega_{n\alpha}t'}\,dt'
$$
$e^{i\omega_{n\alpha}t'}$을 괄호 속에 있는 것에 곱한 다음에, 쉬운 적분을 하고 나면, 

$$
c_n^{(1)} = \frac{1}{\hbar}\left[\frac{1 - e^{i(\omega + \omega_{n\alpha})t}}{\omega + \omega_{n\alpha}}V_{n\alpha} + \frac{1 - e^{i(\omega_{n\alpha} - \omega)t}}{-\omega + \omega_{n\alpha}}V^\dagger_{n\alpha}\right]
\tag{5.299}
$$

어라... 생긴 게 지난 시간에 배운 것과 닮았다. 
Constant perturbation에서는 
$$
{{c_{n}^{(1)}=\displaystyle{\frac{V_{n  \alpha}}{E_{n}-E_{ \alpha}}}(1-e^{i\omega_{n  \alpha}t})}} = \frac{1}{\hbar}\frac{V_{n  \alpha}}{\omega_{n\alpha}} (1-e^{i\omega_{n  \alpha}t})
$$
그저 $\omega$가 있는 부분이 바뀌었을 뿐이다. 

$$
\omega_{n\alpha} = \frac{E_n - E_\alpha}{\hbar} \;\rightarrow\; \omega_{n\alpha} \pm \omega
\tag{5.300}
$$
두 가지로 바꾼 omega를 대입하고, 결과물을 더하면 끝. 
## Resonance conditions
[[QM lecture note - Constant Perturbation and Transition Rate|지난 시간]]에 ==$\omega_{n\alpha} \simeq 0$의 극한을 살펴보았듯이,== 
이번에는 $\omega_{n\alpha} \pm \omega \simeq 0$의 극한을 살펴보자. 

### Stimulated emission 
$$
\omega_{n\alpha} + \omega \simeq 0 \quad \text{or} \quad E_n \simeq E_\alpha - \hbar\omega
\tag{5.301a}
$$
위는 전자의 에너지가 $\hbar \omega$ 만큼 떨어지며, $\hbar \omega$ 에너지의 빛이 방출되는 과정이다. 
이를 stimulated emission이라고 한다. 
Perturbation으로 특정 $\omega$의 빛을 쪼이면 그것과 똑같은 빛이 다시 방출되는 것이다. 
![[Pasted image 20261026161041.png]]

### Absorption
$$
\omega_{n\alpha} - \omega \simeq 0 \quad \text{or} \quad E_n \simeq E_\alpha + \hbar\omega
\tag{5.301b}
$$
이것은 반대로,  $\hbar \omega$ 에너지의 빛이 흡수되며 전자의 에너지 레벨이  $\hbar \omega$ 만큼 올라가는 absorption이다. 




## Transition rate
[[QM lecture note - Constant Perturbation and Transition Rate|지난 시간]]에 이런 transition rate 공식을 얻었다. 

$$
\boxed{\, w_{\alpha\rightarrow[n]}={\frac{2\pi}{\hbar}}\overline{{{|V_{n \alpha}|^{2}}}}\rho(E_{n})\Big|_{E_{n}\simeq E_{\alpha}} \,}
$$
여기서 $E_{n}\simeq E_{\alpha}$ 부분만  $E_{n}\simeq E_{\alpha} \pm \hbar \omega$ 로 바꾸면 된다. 

$$
w_{\alpha\to[n]}^{\text{emission}} = \frac{2\pi}{\hbar}\overline{|V_{n\alpha}|^2}\rho(E_n)\Big|_{E_n \simeq E_\alpha - \hbar\omega}
\tag{5.302a}
$$
위는 **==Stimulated== emission rate**


$$
w_{\alpha\to[n]} = \frac{2\pi}{\hbar}\overline{|V^\dagger_{n\alpha}|^2}\rho(E_n)\Big|_{E_n \simeq E_\alpha + \hbar\omega}
\tag{5.302b}
$$

위는 **absorption rate**

시간이 충분히 흐르면 이렇게 디락 델타로 나타낼 수 있다. 
$$
w_{\alpha\to n} = \frac{2\pi}{\hbar}\left\{\begin{matrix} |V_{n\alpha}|^2 \\ |V^\dagger_{n\alpha}|^2 \end{matrix}\right\}\delta(E_n - E_\alpha \pm \hbar\omega)
\tag{5.303}
$$
==위쪽($\lvert V_{n\alpha}\rvert^2$, $+\hbar\omega$)이 stimulated emission, 아래쪽($\lvert V^\dagger_{n\alpha}\rvert^2$, $-\hbar\omega$)이 absorption이다.==

## Detailed balancing

==Adjoint의 정의 (5.305)에 의해 아래가 성립한다. ($V$ 자체가 Hermitian일 필요는 없다. Hermitian인 것은 $V(t)$ 전체다.)== 
$$
|V_{n\alpha}|^2 = |V^\dagger_{\alpha n}|^2
\tag{5.304}
$$

$$
\bra{\alpha}V^\dagger\ket{n} = \bra{n}V\ket{\alpha}^*
\tag{5.305}
$$

결국 
$$
\frac{w_{\alpha\to[n]}^{\text{emission}}}{\rho(E_n)} = \frac{w_{n\to[\alpha]}^{\text{absorption}}}{\rho(E_\alpha)}, \qquad E_n = E_\alpha - \hbar\omega
$$

라는 뜻. ==(역과정끼리 비교한다: $\alpha\to[n]$ emission과 $n\to[\alpha]$ absorption)== 

낮은 전자 에너지 상태를 $low$ 높은 에너지 상태를 $high$라고 하고, 
둘은 $\hbar \omega$만큼 차이나며, 빛이 흡수와 방출이 되며 전자가 두 상태를 오가는 과정을 생각하자. 

$$
E_{high}= E_{low} +\hbar \omega
$$
$$
\frac{w_{high \to[low]}^{\text{emission}}}{\rho(E_{low}) }=  \frac{w_{low \to high}^{\text{absorption}}}{ \rho(E_{high})}
$$
혹은 아래 형태가 더 이해하기 쉬울 수 있다. 
$$
{\rho(E_{high}) w_{high \to[low]}^{\text{emission}}}=  {\rho(E_{low}) w_{low \to high}^{\text{absorption}}}
$$
통계역학에서는 이걸 detailed balance라고 하지. 
==주의: 이것은 rate에 대한 대칭성이지, 두 상태의 population이 평형이 된다는 뜻은 아니다. (아래 AI 답변 참고)== 
$$
\frac{\text{emission rate for } \alpha \to [n]}{\text{density of final states for } [n]} = \frac{\text{absorption rate for } n \to [\alpha]}{\text{density of final states for } [\alpha]}
\tag{5.306}
$$

> [!note] AI 답변 — (5.306)은 population 평형이 아니다
> ==(5.306)은 **rate**(전자 한 개당 단위시간 전이 확률)에 대한 대칭성이다. 실제 단위시간 전이 수는 (그 상태의 population) × rate이다.==
> 
> $$
> N_{\text{high}\to\text{low}} = P_{\text{high}}\,w_{\text{high}\to[\text{low}]}, \qquad N_{\text{low}\to\text{high}} = P_{\text{low}}\,w_{\text{low}\to[\text{high}]}
> $$
> 
> ==통계역학의 detailed balance는 population $P$가 들어간 $P_{\text{high}}w_{h\to l} = P_{\text{low}}w_{l\to h}$이고, (5.306)에는 population 대신 density of states $\rho$가 들어간다.==
> 
> ==고전적 빛(classical field)에 의한 stimulated emission과 absorption만 있으면 rate가 대칭이므로, 두 population은 같아지는 쪽으로 간다. 그러면 열평형의 Boltzmann 분포($P_{\text{low}} > P_{\text{high}}$)를 유지할 수 없다. 이를 맞추는 것이 빛 없이도 일어나는 **spontaneous emission**이다. → 5.8.4, Einstein A, B coefficient==
# 궁금한 내용

생각난 질문을 여기에 메모
# AI의 보충 설명


# 연관 학습 노트
- [[QM lecture note - Constant Perturbation and Transition Rate]]
- [[QM lecture note - Dyson Series & Transition Probability]]


# References

- Sakurai, *Modern Quantum Mechanics*, Section 5.7.4 

# 다음 강의
[[QM lecture note - Absorption and Stimulated Emission]]

# 필기 원본

