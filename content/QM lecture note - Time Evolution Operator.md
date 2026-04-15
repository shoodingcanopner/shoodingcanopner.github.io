---
title: "QM lecture note - Time Evolution Operator"
date: "2026-03-20"
subject: quantum mechanics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[QM lecture note - Gaussian Wave Packet]]

# 오늘의 핵심

Time evolution operator $\mathcal{U}(t, t_0)$는 세 가지 특성(Unitarity, Composition, Identity)으로부터 Schrödinger 방정식을 유도한다.

특히, Composition 성질에 따라:

$$
\mathcal{U}(t+dt, t_0) = \mathcal{U}(t+dt, t)\,\mathcal{U}(t, t_0) = \left(\mathbb{1} - \frac{i}{\hbar}\mathcal{H}(t)\,dt\right)\mathcal{U}(t, t_0)
$$
$$
\boxed{\frac{d\,\mathcal{U}(t, t_0)}{dt} = -\frac{i}{\hbar}\mathcal{H}(t)\,\mathcal{U}(t, t_0)}
$$
$$
\boxed{i\hbar \frac{d}{dt}|\alpha, t\rangle = \mathcal{H}(t)|\alpha, t\rangle}
$$

에너지 고유상태는 시간이 지나도 phase만 바뀌며, 일반 상태의 time evolution은 에너지 eigenbasis로 전개하여 기술한다.



$$
|\Psi_{E,t}\rangle = \exp\!\left(-i\frac{E}{\hbar}t\right)|\Psi_{E,0}\rangle
$$

**Energy eigenket은 시간이 지나도 phase만 바뀐다.** (Stationary state)


# 필기 내용

## Time Evolution Operator 도입

$t_0$에서 $|\alpha\rangle$의 상태를 $|\alpha, t_0\rangle$이라 하고, $t$에서의 상태를 $|\alpha, t\rangle$이라 표기한다.

**Time evolution operator** $\mathcal{U}(t, t_0)$는 $t_0$ 시점의 상태를 $t$ 시점의 상태로 mapping하는 함수, 혹은 상태를 미래의 상태로 만드는 operator이다.

$$
|\alpha, t\rangle = \mathcal{U}(t, t_0)|\alpha, t_0\rangle
$$

---

## Time Evolution Operator의 세 가지 특성

### (i) Unitarity

Probability conservation에 의해 요구된다.

$|\alpha, t_0\rangle$이 normalized 되어 있어 $\langle \alpha, t_0 | \alpha, t_0 \rangle = 1$이라면, $|\alpha, t\rangle$ 또한 1로 normalized 되어야 한다.

$$
\langle \alpha, t | \alpha, t \rangle = \langle \alpha, t_0 | \mathcal{U}^\dagger(t,t_0)\,\mathcal{U}(t,t_0) | \alpha, t_0 \rangle = 1
$$

$$
\therefore \mathcal{U}^\dagger(t, t_0)\,\mathcal{U}(t, t_0) = \mathbb{1}
$$

시간에 따라 변화하는 expectation value를 고려해도 $\mathcal{U}(t, t_0)$의 Unitary 특성은 의미심장하다.

$$
\langle A \rangle_t = \langle \alpha, t | A | \alpha, t \rangle, \qquad |\alpha, t\rangle = \sum_{a'} |a'\rangle\langle a' | \alpha, t \rangle
$$

$$
\langle A \rangle_t = \sum_{a'} a' \left|\langle a' | \alpha, t \rangle\right|^2
$$

이것은 $A$의 eigenvalue $a'$는 변하지 않았지만, $|\alpha\rangle$를 $|a'\rangle$ basis로 나타낼 때 계수가 변하였다는 뜻이다.

한편, time evolution을 $|\alpha\rangle$에게 적용하는 게 아니라 $A$에 적용하는 것 또한 가능하다. 

$$
\langle A \rangle_t = \langle \alpha, t_0 | \mathcal{U}^\dagger(t,t_0)\,A\,\mathcal{U}(t,t_0) | \alpha, t_0 \rangle = \langle \alpha, t_0 | A'' | \alpha, t_0 \rangle = \sum_{a''} a'' \left|\langle a'' | \alpha, t_0 \rangle\right|^2
$$

이때 $a''$는 $A'' = \mathcal{U}^\dagger(t,t_0)\,A\,\mathcal{U}(t,t_0)$의 eigenvalue. $A''$는 $A$의 **Unitary transform**이므로 eigenvalue는 동일하다.

$\mathcal{U}$가 Unitary가 아니라면, 서로 다른 시간의 observable이 다른 eigenvalue를 가지게 되어 이건 말이 안 된다.

---

### (ii) Composition

$t_0 \to t_1$ evolution하고 $t_1 \to t_2$ evolution한 결과는 $t_0 \to t_2$ evolution과 동일해야 한다.

$$
\mathcal{U}(t_2, t_0) = \mathcal{U}(t_2, t_1)\,\mathcal{U}(t_1, t_0)
$$

---

### (iii) Identity

0초 동안 time evolution하면, 변환 전후의 차이가 없어야 한다.

$$
\lim_{dt \to 0} \mathcal{U}(t+dt, t) = \mathbb{1}
$$

---

## Schrödinger 방정식 유도

$\mathcal{U}$ 또한 generator를 가진다. generator를 $\Omega$라 부르면:

$$
\mathcal{U}(t+dt, t) = \mathbb{1} - i\,dt\,\Omega
$$

$\Omega$가 무엇인지는 고전역학의 개념을 이용한다. 해석역학에서 $\dfrac{d}{dt} = \{\cdot, \mathcal{H}\}$임을 알고 있다.

이를 양자화하면 $\Omega = \dfrac{1}{\hbar}\mathcal{H}$, 따라서:

$$
\mathcal{U}(t+dt, t) = \mathbb{1} - \frac{i}{\hbar}\mathcal{H}\,dt
$$

Composition 성질에 따라:

$$
\mathcal{U}(t+dt, t_0) = \mathcal{U}(t+dt, t)\,\mathcal{U}(t, t_0) = \left(\mathbb{1} - \frac{i}{\hbar}\mathcal{H}\,dt\right)\mathcal{U}(t, t_0)
$$

$$
\mathcal{U}(t+dt, t_0) - \mathcal{U}(t, t_0) = -\frac{i}{\hbar}\mathcal{H}\,dt\,\mathcal{U}(t, t_0)
$$

$$
\boxed{\frac{d\,\mathcal{U}(t, t_0)}{dt} = -\frac{i}{\hbar}\mathcal{H}\,\mathcal{U}(t, t_0)}
$$

generator가 결국은 미분 연산자라는 걸 유도하는 이 논리는, 
앞서 위치와 운동량에서 사용한 것과 완전 동일하다. 

양자에서는 $\dfrac{d}{dt} = -\dfrac{i}{\hbar}\mathcal{H}$인 것. 위 식 양변에 $|\alpha, t_0\rangle$을 곱하면:

$$
\boxed{\frac{d}{dt}|\alpha, t\rangle = -\frac{i}{\hbar}\mathcal{H}|\alpha, t\rangle}
$$

이것이 **Schrödinger 방정식**이다.

---

## Energy Eigenstate와 Stationary State

에너지 eigenket에 대해 $\mathcal{H}|\Psi_{E,t}\rangle = E|\Psi_{E,t}\rangle$이라 하면 ($E \in \mathbb{R}$).

$\mathcal{H} = i\hbar\dfrac{d}{dt}$이므로, $i\hbar\dfrac{d}{dt}|\Psi_{E,t}\rangle = E|\Psi_{E,t}\rangle$

이것은 $t$에 대한 간단한 미방이다. 해는:

$$
|\Psi_{E,t}\rangle = \exp\!\left(-i\frac{E}{\hbar}t\right)|\Psi_{E,0}\rangle
$$

**Energy eigenket은 시간이 지나도 phase만 바뀐다.** (Stationary state)
Phase가 바뀌는 진동수는 eigen ket의 eigen value와 비례한다. 
더 큰 에너지일 수록 phas가 빠르게 돌아간다. 

---

## 일반 상태의 Time Evolution

Energy eigenket을 basis로 사용하여 time evolution을 모든 ket에 대해 일반화해 보자.

$$
|\alpha\rangle = \sum_E C_\alpha(E)|\Psi_E\rangle \quad \text{at } t=0, \quad C_\alpha(E) = \langle \Psi_E | \alpha \rangle
$$

$$
|\alpha, t\rangle = \mathcal{U}(t, t_0)|\alpha, 0\rangle = \sum_E C_\alpha(E)\,\mathcal{U}(t,t_0)|\Psi_{E,0}\rangle
$$

$$
= \sum_E C_\alpha(E)|\Psi_{E,t}\rangle = \sum_E C_\alpha(E)\exp\!\left(-i\frac{E}{\hbar}t\right)|\Psi_{E,0}\rangle
$$

서로 다른 energy eigenket들의 phase 변화가 제각각 다르다.

Observable을 다른 energy eigenket 사이에 샌드위치하면:

$$
\langle \Psi_{E,t} | A | \Psi_{E',t} \rangle = \langle \Psi_{E,0} | \exp\!\left(i\frac{E}{\hbar}t\right) A \exp\!\left(-i\frac{E'}{\hbar}t\right) | \Psi_{E',0} \rangle
$$

$$
= \exp\!\left(-i\frac{E'-E}{\hbar}t\right)\langle \Psi_{E,0} | A | \Psi_{E',0} \rangle
$$

즉 에너지의 차이에 따른 진동수로 phase가 바뀐다.

---

## 케이스에 따른 Schrödinger 방정식 풀기

$i\hbar\dfrac{d}{dt}\mathcal{U} = \mathcal{H}\,\mathcal{U}$를 어떻게 푸는가?

### Case 1: $\mathcal{H}$가 시간에 대해 독립적일 때

$$
\mathcal{U}(t, t_0) = \exp\!\left[-\frac{i}{\hbar}\mathcal{H}(t - t_0)\right]
$$

이것은 Composition property와도 부합한다. 더 정확히는:

$$
\mathcal{U}(t, t_0) = \lim_{N\to\infty}\left(\mathbb{1} - i\frac{\mathcal{H}}{\hbar}\frac{t-t_0}{N}\right)^N = \exp\!\left[-\frac{i\mathcal{H}}{\hbar}(t-t_0)\right]
$$

### Case 2: $\mathcal{H}$가 시간에 의존하지만 $[\mathcal{H}(t_1),\,\mathcal{H}(t_2)] = 0$ for $\forall\, t_1, t_2$일 때

$$
\mathcal{U}(t, t_0) = \exp\!\left[-\frac{i}{\hbar}\int_{t_0}^{t} dt'\,\mathcal{H}(t')\right]
$$

이것을 테일러 전개해서 표현한다면,

$$
\mathcal{U}(t, t_0) = \mathbb{1} + \sum_{n=1}^{\infty} \frac{1}{n!}\left(\frac{1}{i\hbar}\right)^n \left(\int_{t_0}^{t} dt'\, \mathcal{H}(t')\right)^n
$$

### Case 3: $\mathcal{H}$가 시간에 의존하고 $[\mathcal{H}(t_1),\,\mathcal{H}(t_2)] \neq 0$일 때

적분할 때 $\mathcal{H}$의 서로 다른 시간 순서가 절대 바뀌면 안 된다.

Case 2의 급수 전개에서 각 항들이 시간 순서에 따른 $\mathcal{H}$의 순서를 고려하는 적분으로 바뀌어야 한다.

$n$부터 대입하면서 차례로 비교하면:

|       | $[\mathcal{H}(t_1),\mathcal{H}(t_2)] = 0$                                                                     | $[\mathcal{H}(t_1),\mathcal{H}(t_2)] \neq 0$                                                                                                                                              |
| ----- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $n=1$ | $\dfrac{1}{i\hbar}\displaystyle\int_{t_0}^{t}dt'\,\mathcal{H}(t')$                                            | $\dfrac{1}{i\hbar}\displaystyle\int_{t_0}^{t}dt_1\,\mathcal{H}(t_1)$                                                                                                                      |
| $n=2$ | $\left(\dfrac{1}{i\hbar}\right)^2\dfrac{1}{2}\left(\displaystyle\int_{t_0}^{t}dt'\,\mathcal{H}(t')\right)^2$  | $\left(\dfrac{1}{i\hbar}\right)^2\displaystyle\int_{t_0}^{t}dt_1\,\mathcal{H}(t_1)\displaystyle\int_{t_0}^{t_1}dt_2\,\mathcal{H}(t_2)$                                                    |
| $n=3$ | $\left(\dfrac{1}{i\hbar}\right)^3\dfrac{1}{3!}\left(\displaystyle\int_{t_0}^{t}dt'\,\mathcal{H}(t')\right)^3$ | $\left(\dfrac{1}{i\hbar}\right)^3\displaystyle\int_{t_0}^{t}dt_1\,\mathcal{H}(t_1)\displaystyle\int_{t_0}^{t_1}dt_2\,\mathcal{H}(t_2)\displaystyle\int_{t_0}^{t_2}dt_3\,\mathcal{H}(t_3)$ |
적분 변수로 $t_1$부터 $t_n$까지 사용하는 게 핵심. 
가능하면 인덱스 사용을 교과서랑 맞춰야 안 헷갈리지 않을까...

```tikz
\documentclass[tikz,border=10pt]{standalone}
\usepackage{kotex}

\begin{document}
\begin{tikzpicture}[>=stealth, thick]

    % 설정값 수정
    \def\n{6} % 층수
    \def\stepY{1.56} % 기존 1.2에서 30% 확장 (1.2 * 1.3 = 1.56)
    \def\widthX{8} % 전체 가로 길이
    
    \foreach \i in {1,...,\n} {
        \pgfmathsetmacro{\currentY}{-(\i-1)*\stepY}
        \pgfmathsetmacro{\startX}{(\i-1)*1.2}
        \def\endX{\widthX}
        
        % 메인 시간축
        \draw (\startX, \currentY) -- (\endX, \currentY);
        
        % 양 끝 세로 바
        \draw (\startX, \currentY+0.2) -- (\startX, \currentY-0.2);
        \draw (\endX, \currentY+0.2) -- (\endX, \currentY-0.2);
        
        % 왼쪽 라벨
        \ifnum\i=1
            \node[above] at (\startX, \currentY+0.1) {$t$};
        \else
            \pgfmathsetmacro{\prevI}{int(\i-1)}
            \node[above] at (\startX, \currentY+0.1) {$t_{\prevI}$};
        \fi
        
        % 오른쪽 라벨
        \node[above] at (\endX, \currentY+0.1) {$t_0$};
        
        % 구간 내 포인트 t_i 표시
        \ifnum\i<\n
            \pgfmathsetmacro{\pointX}{\startX + 1.2}
            \draw (\pointX, \currentY+0.1) -- (\pointX, \currentY-0.1);
            \node[below] at (\pointX, \currentY-0.1) {$t_{\i}$};
            
            % 다음 층 가이드 점선
            \draw[dashed, gray!60] (\pointX, \currentY) -- (\pointX, \currentY-\stepY+0.2);
        \fi
        
        % "영역" 표시 (화살표 제거, 단순 곡선으로 변경)
        \draw (\startX+0.2, \currentY+0.5) to[bend left=12] node[above, yshift=2pt] {$t_{\i}$의 영역} (\endX-0.2, \currentY+0.5);
    }
    
    % 마지막 말줄임표 위치 조정
    \node at (\widthX-1, -{\n*\stepY*0.9}) {$\vdots$};

\end{tikzpicture}
\end{document}
```
![[스크린샷 2026-04-14 171505.png]]

$n=2$의 경우, 
$t_1$은 $t_0$부터 $t$까지 적분하면서 연속적으로 정분한다. $t_2$는 $t_0$부터 $t_1$까지만 적분하여 $\mathcal{H}(t_2)$가 항상 $\mathcal{H}(t_1)$보다 왼쪽에 오도록 한다.

표의 왼쪽과 오른쪽을 잘 비교하면, 오른쪽의 적분하는 식에서 만약 commute 조건이 보장될 경우 왼쪽 식과 같아짐을 쉽게(?) 알 수 있다. 

$N \to \infty$까지 모든 $N$에 대해 적분 값을 더하면:

$$
\mathcal{U}(t, t_0) = \mathbb{1} + \sum_{n=1}^{\infty}\left(\frac{1}{i\hbar}\right)^n \int_{t_0}^{t}dt_1\,\mathcal{H}(t_1)\int_{t_0}^{t_1}dt_2\,\mathcal{H}(t_2)\cdots\int_{t_0}^{t_{N-1}}dt_N\,\mathcal{H}(t_N)
$$

이것을 **Dyson series**라고 한다.

---

## Energy-Time Uncertainty

Position-momentum uncertainty와는 다르게, 시간은 관측량이 아니기 때문에 좀 다르게 접근해야 한다.

결과와 시간과 에너지 분포 사이의 관계를 보자.

어떤 상태 $|\alpha\rangle$가 $t$ 시간이 지난 뒤에, 처음의 자신과 얼마나 많이 닮아 있는가? **Correlation amplitude**를 이렇게 정의하자:

$$
C(t) = \langle \alpha | \alpha, t \rangle = \langle \alpha | \mathcal{U}(t, 0) | \alpha \rangle
$$

$|\alpha\rangle$가 $t$ 시간 뒤에도 $|\alpha\rangle$로 남아 있을 확률은:

$$
|C(t)|^2 = \left|\langle \alpha | \mathcal{U}(t,0) | \alpha \rangle\right|^2
$$

앞서 $|\alpha, t\rangle$를 에너지의 eigenket으로 나타냈다:

$$
|\alpha, t\rangle = \sum_E C_\alpha(E)\exp\!\left(-i\frac{E}{\hbar}t\right)|\Psi_{E,0}\rangle
$$

$$
\langle \alpha | = \sum_E C_\alpha^*(E)\langle \Psi_{E,0} |
$$

$$
C(t) = \sum_{E'}\sum_E C_\alpha^*(E')\,C_\alpha(E)\exp\!\left(-i\frac{E}{\hbar}t\right)\langle \Psi_{E',0} | \Psi_{E,0} \rangle
$$

$$
\boxed{C(t) = \sum_E |C_\alpha(E)|^2 \exp\!\left(-i\frac{E}{\hbar}t\right)}
$$

에너지 레벨이 연속적으로 분포하고 있다고 가정하면, summation을 integral로 나타낼 수 있다. $\rho(E)$가 density of energy eigenket이고, $C_\alpha(E)$의 역할을 $g(E)$가 대신할 때:

$$
\sum_E \to \int dE\,\rho(E), \qquad C_\alpha(E) \to g(E)
$$

$$
C(t) = \int dE\,\rho(E)\,|g(E)|^2 \exp\!\left(-i\frac{E}{\hbar}t\right)
$$

에너지 분포가 $E_0$에 집중되어 있다고 치자. $\Delta E = E - E_0$일 때,

$$
t \lesssim \frac{\hbar}{\Delta E}
$$

이상의 order로 시간이 바뀌면 phase가 빠르게 돌아가는 상태.

즉, $\dfrac{\hbar}{\Delta E}$ 이상의 시간이 지나면 원래의 형태를 잃어버리기 시작한다.

$$
\therefore \Delta t \cdot \Delta E \sim \hbar
$$

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

# References

# 다음 강의

[[QM lecture note - Heisenberg Picture and Equations of Motion]]

# 원본 필기 이미지

![[QM_4thweek_2.pdf]]
