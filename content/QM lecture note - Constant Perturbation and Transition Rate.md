---
title: QM lecture note - Constant Perturbation and Transition Rate
date: 2026-10-13
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
[[QM lecture note - Dyson Series & Transition Probability]]

# 오늘의 핵심

$$
\text{transition probability from } \alpha \text{ to } n \approx \frac{4|V_{n \alpha}|^{2}}{|E_{n}-E_{\alpha}|^{2}}\sin^{2}\left[\frac{(E_{n}-E_{\alpha})t}{2\hbar}\right]
$$

$$
\boxed{\, w_{\alpha\rightarrow[n]}={\frac{2\pi}{\hbar}}\overline{{{|V_{n \alpha}|^{2}}}}\rho(E_{n})\Big|_{E_{n}\simeq E_{\alpha}} \,}
$$
(Fermi's golden rule)

# 필기 내용

### Transition probability를 1st order correction으로 구한다
Perturbation이 $t = 0$에서 딱 켜진 상황. 

$$V(t)={\left\{\begin{array}{l l l}{0}&{{\mathrm{for}}}&{{t<0}}\\ {V}&{{\mathrm{(independent~of\,}t)}}&{{\mathrm{for}}}&{{t\ge0.}}\end{array}\right.}$$
$V$가 시간에는 independent하지만, $\mathbf{x}$, $\mathbf{p}$, $\mathbf{s}$등의 observable에는 dependent할 수 있다. 
$t_0=0$으로 두자. 이때 초기 상태는 $H_0$의 eigenstate인 $\ket{\alpha}$라고 두자. 
[[QM lecture note - Dyson Series & Transition Probability|지난 시간]]에 구한 식으로 $c_n^{(0)}, c_n^{(1)}$을 계산해보자. 

![[Pasted image 20261026153621.png]]

[[QM lecture note - The Interaction Picture|Recall]]: $\omega_{n m}\equiv\frac{\left(E_{n}-E_{m}\right)}{\hbar}=-\omega_{m n}$

$$\begin{array}{c}{{c_{n}^{(0)}=c_{n}^{(0)}(0)=\delta_{n \alpha},}}\\ {{{}}}\\ {{c_{n}^{(1)}=\displaystyle{\frac{-i}{\hbar}}V_{n  \alpha}\int_{0}^{t}e^{i\omega_{n  \alpha}t^{\prime}}d t^{\prime}}}\\ {{{}}}\\ {{=\displaystyle{\frac{V_{n  \alpha}}{E_{n}-E_{ \alpha}}}(1-e^{i\omega_{n  \alpha}t}),}}\end{array}$$
원래 $t=0$에서 $\ket{\alpha}$였던 것이 $\ket{n}$으로 발견될 확률을 구한다면, 

$$\begin{array}{c}{{\displaystyle|c_{n}^{(1)}|^{2}=\frac{|V_{n \alpha}|^{2}}{|E_{n}-E_{\alpha}|^{2}}(2-2\cos\omega_{n \alpha}t)}}\\ {{=\frac{4|V_{n \alpha}|^{2}}{|E_{n}-E_{\alpha}|^{2}}\sin^{2}\left[\frac{(E_{n}-E_{\alpha})t}{2\hbar}\right].}}\end{array}$$

오늘의 주요 결과
$$
\text{transition probability from } \alpha \text{ to } n \approx \frac{4|V_{n \alpha}|^{2}}{|E_{n}-E_{\alpha}|^{2}}\sin^{2}\left[\frac{(E_{n}-E_{\alpha})t}{2\hbar}\right]
$$

$\alpha$에서 $n$으로의 transition probability는 $V_{n \alpha}$에도 dependent하지만, $E_n - E_{\alpha}$에도 depend함을 알 수 있다.

### 전환되는 에너지가 연속적이고, 원 상태 에너지와 거의 비슷하다고 친다

Eigenstate와 eigenenergy가 거의 연속적으로 있다고 치자. 
원래의 에너지, $E_{\alpha}$에서 에너지 크기가 달라진 정도 $\Delta E$ 를 변수로 따로 두자. 
$\Delta E$를 $\hbar$로 나누어서 각진동수로 만들고, 이것을 변수로 쓰자. 

$$
\omega \equiv \frac{\Delta E}{\hbar} = \frac{E_n - E_{\alpha}}{\hbar}
$$
그러면 transition probability가 $\sim \frac{1}{\omega^2}\sin^{2}\left[\frac{\omega t}{2}\right]$임을 알 수 있다. 

$$
\text{transition probability from } \alpha \text{ to } n \approx \frac{4|V_{n \alpha}|^{2}}{\hbar^2 \omega^{2}}\sin^{2}\left[\frac{\omega t}{2}\right]
$$


즉, $\omega$가 0에 가까울 수록, transition 전화 후의 에너지 차이가 0에 가까운 상태들이 transition이 잘 일어나고, 그 이외 에너지 차이가 크면 transition이 잘 일어나지 않는 다는 것을 알 수 있다. 

![[Pasted image 20261013175911.png]]

위 그래프는 고정된 $t$에서 $|c_n^{(1)}|^2$를 $\omega$의 함수로 그린 것이다. 
$\omega = 0$에 가장 큰 central peak가 있고, 첫 번째 zero는 $\omega t/2 = \pm\pi$, 즉 $\omega = \pm 2\pi/t$에서 생긴다. 따라서 central peak의 높이는 $t^2$에, 폭은 $1/t$에 비례한다.
즉, 시간이 지날 수록 디락델타랑 비슷해 진다. → 다른 에너지로 전환이 거의 불가능함. 

![[Pasted image 20261014103330.png]] ![[Pasted image 20261014103340.png]] 

### time-energy uncertainty relation 

Peak의 폭을 이용해서 transition이 유의미하게 일어나는 에너지 범위를 알 수 있다. 

$$t\sim\frac{2\pi}{|\omega|}=\frac{2\pi\hbar}{|E_{n}-E_{\alpha}|}.$$
시간과 에너지 폭은 반비례 관계이다. 
이를 $\Delta t = t$, $\Delta E = |E_n - E_\alpha|$로 보면 time-energy uncertainty relation 꼴이 된다.

$$\Delta t\Delta E\sim\hbar,$$

> [!note] 여기서 $\Delta t$의 의미
> 이 $\Delta t$는 어떤 operator의 표준편차가 아니라, perturbation이 켜져 있던 시간이다. 시간이 짧으면 energy가 보존되지 않는 transition($E_n \neq E_\alpha$)도 꽤 일어나고, 시간이 길수록 $E_n \simeq E_\alpha$인 transition만 살아남는다. 즉 $t \to \infty$에서 energy conservation이 회복된다.

$E_n = E_\alpha$, 즉 $\omega \to 0$인 경우를 보자. 

$$
{{\displaystyle|c_{n}^{(1)}(t)|^{2}= \frac{4|V_{n \alpha}|^{2}}{|E_{n}-E_{\alpha}|^{2}}\sin^{2}\left[\frac{(E_{n}-E_{\alpha})t}{2\hbar}\right].}}
$$

$\sin^2(\omega t/2) \approx (\omega t/2)^2$ 으로 근사. 

$$|c_{n}^{(1)}(t)|^{2}=\frac{1}{\hbar^{2}}|V_{n \alpha}|^{2}t^{2}.$$
확률이 $t^2$으로 자란다. (물론 끝없이 자랄 수는 없고, 확률이 1에 가까워지기 전에 1차 perturbation theory가 깨진다.)

### Density of states 와 적분한다

하지만 이건 한 state만 봤을 때의 이야기이다. Eigenenergy가 거의 연속적이면 central peak 안에 들어오는 state가 여러 개 있으므로, 이들을 모두 더한 total transition probability를 봐야 한다.


$$\sum_{n,E_{n}\simeq E_{\alpha}}\bigl|c_{n}^{(1)}\bigr|^{2}.$$
State가 거의 연속적이므로 합을 적분으로 바꾼다. 이를 위해 **density of states** $\rho(E)$를 도입한다. 에너지 구간 $(E, E+dE)$ 안에 있는 state의 수가

$$\rho(E)\,d E.$$
이다. 그러면 합은 아래처럼 적분이 된다.

$$\begin{array}{c}{{\displaystyle{\sum_{n,E_{n}\simeq E_{\alpha}}|c_{n}^{(1)}|^{2}\Rightarrow\int d E_{n}\rho(E_{n})|c_{n}^{(1)}|^{2}}}}\\ {{{}=4\int\sin^{2}\left[\frac{(E_{n}-E_{\alpha})t}{2\hbar}\right]\frac{|V_{n \alpha}|^{2}}{|E_{n}-E_{\alpha}|^{2}}\rho(E_{n})\,d E_{n}.}}\end{array}$$
$t$가 충분히 크면 피적분함수의 $\sin^2/|E_n - E_\alpha|^2$ 부분은 $E_n = E_\alpha$ 근처에만 값이 있는 날카로운 peak가 된다. 앞에서 본 것처럼 peak의 높이는 $t^2$, 폭은 $1/t$에 비례하므로 넓이는 $t$에 비례한다. 따라서 이 peak를 delta function으로 근사할 수 있다.
$$\operatorname*{lim}_{t\rightarrow\infty}\!\frac{1}{|E_{n}-E_{\alpha}|^{2}}\sin^{2}\left[\frac{(E_{n}-E_{\alpha})t}{2\hbar}\right]=\frac{\pi t}{2\hbar}\delta(E_{n}-E_{\alpha}),$$
이는 delta function의 아래 표현을 이용한 것이다.
[[Delta function을 만드는 여러 방법]]
$$\operatorname*{lim}_{a\rightarrow\infty}\frac{1}{\pi}\frac{\sin^{2}a x}{a x^{2}}=\delta(x).$$

$x = E_n - E_\alpha$, $a = t/2\hbar$로 두면
$$
\frac{\sin^2(ax)}{x^2} = a\cdot\frac{\sin^2(ax)}{ax^2} \;\xrightarrow{t\to\infty}\; \pi a\,\delta(x) = \frac{\pi t}{2\hbar}\delta(E_n - E_\alpha)
$$
가 되어 위 식이 나온다.

이를 적분에 넣으면 delta function이 $E_n = E_\alpha$를 골라내므로
$$\operatorname*{lim}_{t\to\infty}\int d E_{n}\rho(E_{n})|c_{n}^{(1)}(t)|^{2}=\left({\frac{2\pi}{\hbar}}\right){\overline{{|V_{n \alpha}|^{2}}}}\rho(E_{n})t\biggr|_{E_{n}\simeq E_{\alpha}}$$

$|V_{n\alpha}|^2$ 위의 bar는 $E_n \simeq E_\alpha$ 근처의 final state들에 대해 $|V_{n\alpha}|^2$를 평균한 값이라는 뜻이다.

### 시간에 대해 상수인 transition rate를 정의한다

중요한 점은 total transition probability가 $t^2$이 아니라 $t$에 비례한다는 것이다. 개별 state의 확률은 $t^2$으로 자라지만, peak의 폭이 $1/t$로 좁아지면서 기여하는 state의 수가 줄어들기 때문이다. 
확률이 $t$에 비례하므로, 단위 시간당 transition 확률인 **transition rate**를 정의할 수 있다.


$$
\text{transition rate} = \frac{d}{d t}\left({\sum_{n}}|c_{n}^{(1)}|^{2}\right)
$$
$$
= \frac{d}{dt} \left({\frac{2\pi}{\hbar}}\right){\overline{{|V_{n \alpha}|^{2}}}}\rho(E_{n})t\biggr|_{E_{n}\simeq E_{\alpha}}
$$
을 계산하면, 그냥 t의 나머지 부분이 나오니까까 아래를 얻는다.

$$w_{\alpha\rightarrow[n]}={\frac{2\pi}{\hbar}}\overline{{{|V_{n \alpha}|^{2}}}}\rho(E_{n})_{E_{n}\simeq E_{\alpha}}$$
이 결과가 바로 **Fermi's golden rule**이다. 여기서 $[n]$은 $E_n \simeq E_\alpha$인 final state들의 묶음을 뜻한다.
==Transition rate가 시간에 무관한 상수라는 점에 주목하자.== 즉 constant perturbation은 일정한 비율로 상태를 다른 state들로 옮긴다.

$\rho$를 따로 빼지 않고 delta function으로 쓰면, 개별 state $n$으로의 rate를 아래처럼 쓸 수 있다. 실제로 쓸 때는 final state들에 대해 $\int dE_n\rho(E_n)$을 수행한다는 것을 전제한 표기이다.

$$w_{\alpha\rightarrow n}=\left({\frac{2\pi}{\hbar}}\right)|V_{n \alpha}|^{2}\delta(E_{n}-E_{\alpha}),$$
Delta function이 energy conservation $E_n = E_\alpha$를 강제함을 볼 수 있다.

같은 방법을 $c_n^{(2)}$까지 확장하면 2차 항까지 포함한 transition rate를 얻는다.

$$w_{\alpha\rightarrow[n]}=\frac{2\pi}{\hbar}\overline{{{\left|V_{n \alpha}+\sum_{m}\!\frac{V_{n m}V_{m \alpha}}{E_{\alpha}-E_{m}}\right|^{2}}}}\rho(E_{n})\Biggl.\Biggr|_{E_{n}\simeq E_{\alpha}}.$$
1차 항 $V_{n\alpha}$는 $\alpha \to n$으로 직접 가는 transition이고, 2차 항은 중간 state $m$을 거쳐 $\alpha \to m \to n$으로 가는 transition이다. 중간 단계에서는 $E_m \neq E_\alpha$여도 되므로 energy conservation이 성립하지 않는다. 이런 중간 과정을 **virtual transition**이라고 부른다. Energy는 전체 과정의 처음과 끝에서만($E_n \simeq E_\alpha$) 보존된다.
또한 1차 항과 2차 항이 절댓값 안에서 더해지므로, 두 경로 사이에 interference가 생긴다는 점도 주목하자.
(2차 항을 유도할 때, $c_n^{(2)}$에서 $e^{i\omega_{nm}t}$처럼 시간에 따라 빠르게 진동하는 항은 $t\to\infty$에서 rate에 기여하지 않으므로 버린다.)



# 궁금한 내용

생각난 질문을 여기에 메모
# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[QM lecture note - Harmonic Perturbation and Detailed Balance]]

# 필기 원본

