---
title: QM lecture note - Harmonic Perturbation
date: 2026-03-05
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
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

## Harmonic perturbation

$$
V(t) = V e^{i\omega t} + V^\dagger e^{-i\omega t}
\tag{5.298}
$$

## First-order amplitude

$$
c_n^{(1)} = \frac{-i}{\hbar}\int_0^t \left(V_{n\alpha}e^{i\omega t'} + V^\dagger_{n\alpha}e^{-i\omega t'}\right)e^{i\omega_{n\alpha}t'}\,dt'
$$

$$
c_n^{(1)} = \frac{1}{\hbar}\left[\frac{1 - e^{i(\omega + \omega_{n\alpha})t}}{\omega + \omega_{n\alpha}}V_{n\alpha} + \frac{1 - e^{i(\omega_{n\alpha} - \omega)t}}{-\omega + \omega_{n\alpha}}V^\dagger_{n\alpha}\right]
\tag{5.299}
$$

$$
\omega_{n\alpha} = \frac{E_n - E_\alpha}{\hbar} \;\rightarrow\; \omega_{n\alpha} \pm \omega
\tag{5.300}
$$

## Resonance conditions

$$
\omega_{n\alpha} + \omega \simeq 0 \quad \text{or} \quad E_n \simeq E_\alpha - \hbar\omega
\tag{5.301a}
$$

$$
\omega_{n\alpha} - \omega \simeq 0 \quad \text{or} \quad E_n \simeq E_\alpha + \hbar\omega
\tag{5.301b}
$$

### Stimulated emission and absorption (Fig. 5.12)


## Transition rate

$$
w_{\alpha\to[n]} = \frac{2\pi}{\hbar}\overline{|V_{n\alpha}|^2}\rho(E_n)\Big|_{E_n \simeq E_\alpha - \hbar\omega}
\tag{5.302a}
$$

$$
w_{\alpha\to[n]} = \frac{2\pi}{\hbar}\overline{|V^\dagger_{n\alpha}|^2}\rho(E_n)\Big|_{E_n \simeq E_\alpha + \hbar\omega}
\tag{5.302b}
$$

$$
w_{\alpha\to n} = \frac{2\pi}{\hbar}\left\{\begin{matrix} |V_{n\alpha}|^2 \\ |V^\dagger_{n\alpha}|^2 \end{matrix}\right\}\delta(E_n - E_\alpha \pm \hbar\omega)
\tag{5.303}
$$

## Detailed balancing

$$
|V_{n\alpha}|^2 = |V^\dagger_{\alpha n}|^2
\tag{5.304}
$$

$$
\bra{\alpha}V^\dagger\ket{n} = \bra{n}V\ket{\alpha}^*
\tag{5.305}
$$

$$
\frac{\text{emission rate for } \alpha \to [n]}{\text{density of final states for } [n]} = \frac{\text{absorption rate for } n \to [\alpha]}{\text{density of final states for } [\alpha]}
\tag{5.306}
$$
# 궁금한 내용

생각난 질문을 여기에 메모
# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의


# 필기 원본

