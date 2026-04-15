---
title: "QM lecture note - Aharonov-Bohm Effect and Magnetic Monopole"
date: "2026-04-15"
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

[[QM lecture note - Gauge Transformations]]

게이지 변환 하에서 슈뢰딩거 방정식의 형식은 보존된다. 자기벡터 포텐셜 $\mathbf{A}$가 있을 때 gradient 연산자는 $\nabla \to \nabla - \frac{ie}{\hbar c}\mathbf{A}$로 치환된다.

# 오늘의 핵심

- $\mathbf{B} = 0$인 영역에서도 $\mathbf{A} \neq 0$이면 입자 운동에 영향이 생긴다 → **Aharonov-Bohm effect**
- 두 경로의 위상차는 magnetic flux $\Phi_B$에 의해 결정된다: $\Delta\phi = \frac{e}{\hbar c}\Phi_B$
- Magnetic monopole이 존재한다면, 자하는 $e_M = \left|\frac{\hbar c}{2e}\right|$의 정수배로 **양자화**되어야 한다 → **Dirac quantization condition**

# 필기 내용

## Aharonov-Bohm Effect 설정

![[Pasted image 20260415165440.png]]

무한히 긴 원기둥이 있고, 반지름은 $\rho_a$이다.

- 내부: $\mathbf{B} = B \hat{z}$ 의 자기장이 존재
- 외부: $\mathbf{B} = 0$ 자기장이 없다. 

자기장은 원기둥 안으로 한정되어 있으나, 자기 벡터 포텐셜 **$\mathbf{A}$는 그렇지 않다.**

입자가 원기둥 내부로 들어갈 수 없을 때, 원기둥 외부에서 자기벡터 포텐셜은:

$$
\mathbf{A} = \left(\frac{B_0 \rho_a^2}{2\rho}\right)\hat{\phi}
\tag{1}
$$

이를 $\mathbf{A} = \frac{B \cdot (\pi\rho_a^2)}{2\pi\rho}\hat{\phi}$로 읽으면, Stokes' theorem을 이용하고 있음을 쉽게 알 수 있다.

원통 좌표계에서 gradient 연산자는:

$$
\nabla = \hat{z}\frac{\partial}{\partial z} + \hat{\rho}\frac{\partial}{\partial\rho} + \hat{\phi}\frac{1}{\rho}\frac{\partial}{\partial\phi}
$$
우리는 자기벡터 포텐셜이 있는 경우 슈뢰딩거 방정식에 쓰이는 gradient 연산자가 $\nabla - \frac{ie}{\hbar c}\mathbf{A}$로 바뀐다는 것을 알고 있다. 

지금 이 상황에서는

$$
\nabla - \frac{ie}{\hbar c}\mathbf{A} = \hat{z}\frac{\partial}{\partial z} + \hat{\rho}\frac{\partial}{\partial\rho} + \hat{\phi}\left[\frac{1}{\rho}\frac{\partial}{\partial\phi} - \frac{ie}{\hbar c}\cdot\frac{B_0\rho_a^2}{2\rho}\right]
\tag{2}
$$

슈뢰딩거 방정식이 바뀐다는 것은, $|\mathbf{B}| = 0$인 지역에서도 $\mathbf{A}$ 만으로 입자의 운동에 영향이 간다는 것이다.

---

## 두 경로와 위상차
![[Pasted image 20260415165802.png]]
원기둥이 있는 곳의 너머로 입자가 이동한다 하자. Top view로 상황을 보면, 자기장 영역의 위쪽으로 가는 경로(above)와 아래로 가는 경로(below), 두 가지가 있다. 두 경로로 이루어진 면적 내부에 자기장 영역이 있는 것이다.

우리가 보일 것은, 자기장 내부 영역의 **magnetic flux**로 인해 above path와 below path의 위상차가 생긴다는 것이다. 입자가 직접 로렌츠힘은 겪지 않음에도 말이다.

$\mathbf{A}$가 있을 때 라그랑지안은
$$
\mathcal{L} = \frac{m}{2}\dot{x}^2 + \frac{e}{c}\dot{x}\cdot\mathbf{A}
$$

 임을 기억하자.

$(x_{n+1}, t_{n+1})$에서 $(x_n, t_n)$으로 가는 짧은 경로의 액션은 $\mathbf{A}$가 있는 경우:

$$
S_{\text{with}\,A}(n, n{-}1) = S_{\text{no}\,A}(n, n{-}1) + \frac{e}{c}\int_{t_{n-1}}^{t_n}\left(\frac{dx}{dt}\right)\cdot\mathbf{A}\,dt
\tag{3}
$$

$$
= S_{\text{no}\,A}(n, n{-}1) + \frac{e}{c}\int_{x_{n-1}}^{x_n}\mathbf{A}\cdot d\vec{s}
\tag{4}
$$

시간 적분이 $\mathbf{A}$에 대한 선적분으로 바뀐다.

시작점부터 도착점(간섭점)까지 총 액션에 $\frac{e}{c}\int_{x_0}^{x_N}\mathbf{A}\cdot d\vec{s}$에 의한 추가 항이 곱해진다. 그리하여 도착점에 도달할 때 phase는 아래 식으로 결정된다:

$$
\left[\prod_n\exp\!\left(\frac{i}{\hbar}S_{\text{no}\,A}(n,n{-}1)\right)\right]\cdot\exp\!\left(\frac{ie}{\hbar c}\int_{x_0}^{x_N}\mathbf{A}\cdot d\vec{s}\right)
\tag{5}
$$

위쪽 경로와 아래쪽 경로에서, $\mathbf{A}$에 의한 phase 차이를 쉽게 구할 수 있다:

$$
\left[\frac{e}{\hbar c}\int_{x_0}^{x_N}\mathbf{A}\cdot d\vec{s}\right]_{\text{above}} - \left[\frac{e}{\hbar c}\int_{x_0}^{x_N}\mathbf{A}\cdot d\vec{s}\right]_{\text{below}}
$$

$$
= \frac{e}{\hbar c}\oint\mathbf{A}\cdot d\vec{s}
$$

$$
= \frac{e}{\hbar c}\int(\nabla\times\mathbf{A})\cdot d\vec{a}
$$

$$
= \frac{e}{\hbar c}\int\mathbf{B}\cdot d\vec{a}
$$

$$
= \frac{e}{\hbar c}\Phi_B
\tag{6}
$$

이때 $\oint$에서 의미하는 폐경로는 above path를 통해 시작점에서 간섭점까지 간 뒤, below path를 통해 다시 시작점으로 돌아오는 경로이다. 이 경로 내부에 자기장 영역이 있으므로, 적분 결과는 자기장 영역의 총 magnetic flux이다.

위상차 $\frac{e}{\hbar c}\Phi_B$는 연속적으로 변한다. 자기장의 세기를 변화시키면, 간섭점에서 관측될 확률에는 **$\Phi_B$에 의존하는 사인파 성분이 존재**한다. 이 사인파의 주기에 해당하는 $\Phi_B$의 변화량, 즉 위상차가 $2\pi$ 바뀌는 데 필요한 flux가 바로 magnetic flux의 **fundamental unit**이다:

$$
\boxed{\Phi_0 = \frac{2\pi\hbar c}{e}}
$$

두 경로를 만들 수 있고 그 경로들이 자기장 영역을 감싸기만 하면, 간섭점의 위치나 경로의 모양에 무관하게 동일한 위상차 $\frac{e}{\hbar c}\Phi_B$가 생긴다.

---

## Magnetic Monopole

$\nabla\cdot\mathbf{B} = 4\pi\rho_M$을 만족하는 $\mathbf{B}$가 존재할 수 있다면, 이것은 **magnetic monopole**의 존재를 시사한다.

양자 역학에서는 "만약 magnetic monopole이 있다면" 그것이 $e, \hbar, c$에 의해 양자화되어야 한다고 예상한다. 이것을 $e_M$이라고 쓰겠다. 전기장과 비슷하게, $\mathbf{B}$는 이렇게 생겨야 한다:

$$
\mathbf{B} = \left(\frac{e_M}{r^2}\right)\hat{r}
\tag{7}
$$

이에 상응하는 vector potential은 이렇게 생겼다:

$$
\mathbf{A} = \frac{e_M(1-\cos\theta)}{r\sin\theta}\hat{\phi}
\tag{8}
$$
> 직접 유도하는건 힘들 거 같은데.. 외울까? 여기가 전기역학 수업도 아닌고 양자 수업인걸


그러나 이건 문제가 있다. $\theta = \pi$일 때 정의가 안 된다 (singular point).

$\theta \to 0$에서는 테일러 전개를 해보면:

$$
1 - \cos\theta \approx \frac{\theta^2}{2}, \quad \sin\theta \approx \theta
$$

따라서 $\theta \to 0$ 극한에서:

$$
\mathbf{A} \approx \frac{e_M \cdot \theta^2/2}{r \cdot \theta} = \frac{e_M\theta}{2r} \to 0
$$

분자가 $\theta^2$, 분모가 $\theta^1$이므로 전체가 0으로 수렴한다. 즉 $\theta = 0$은 singular point가 **아니다**.

반면 $\theta \to \pi$에서는 $1 - \cos\theta \to 2$ (유한), $\sin\theta \to 0$이므로 발산한다. $\theta = \pi$가 singular point이다.

$\mathbf{A}$가 singular하지 않을 때는, $\nabla\cdot(\nabla\times\mathbf{A}) = 0$이다. 따라서:

$$
\int\nabla\cdot(\nabla\times\mathbf{A})\,dV = \int\nabla\cdot\mathbf{B}\,dV = 0
$$

인데... 원래 $\nabla\cdot\mathbf{B} = 4\pi\rho_M$을 넣으면 $\int\nabla\cdot\mathbf{B}\,dV = 4\pi e_M$이 되어야 한다. 모순이 발생한다.

### Dirac의 해결책: 두 패치
![[Pasted image 20260415173544.png]]
꼼수를 부리기로 한다. $\mathbf{A}$가 $\theta = \pi$에서만 정의가 안 되니까, 두 가지 $\mathbf{A}$의 **연결된 부분만을** 잘라서 붙여서 쓰면 어떨까?

$$
\mathbf{A}^{(I)} = \frac{e_M(1-\cos\theta)}{r\sin\theta}\hat{\phi} \quad (\theta < \pi - \varepsilon)
\tag{9}
$$

$$
\mathbf{A}^{(II)} = -\left[\frac{e_M(1+\cos\theta)}{r\sin\theta}\right]\hat{\phi} \quad (\theta > \varepsilon)
\tag{10}
$$

범위를 보면:

- $\theta = \pi$가 양점인 $\mathbf{A}^{(I)}$에게는 $\theta = \pi$가 범위에 포함되어 있지 않다.
- $\theta = 0$이 양점인 $\mathbf{A}^{(II)}$에게는 $\theta = 0$이 범위 밖이다.

문제는 $\mathbf{A}^{(I)}$와 $\mathbf{A}^{(II)}$가 겹치는 영역 $\varepsilon < \theta < \pi - \varepsilon$이다. 둘은 같은 $\mathbf{B}$를 만들어야 하므로, $\mathbf{A}^{(I)}$와 $\mathbf{A}^{(II)}$는 **게이지 변환 관계**여야 한다.

$\mathbf{A}^{(II)} - \mathbf{A}^{(I)}$를 계산하면:

$$
\mathbf{A}^{(II)} - \mathbf{A}^{(I)} = -\left(\frac{2e_M}{r\sin\theta}\right)\hat{\phi}
\tag{11}
$$

이것이 어떤 스칼라 함수 $\Lambda$의 $\nabla\Lambda$와 같아야 한다($\mathbf{A}^{(II)} = \mathbf{A}^{(I)} + \nabla\Lambda$).

적합한 $\Lambda$를 찾으면:

$$
\Lambda = -2e_M\phi
\tag{12}
$$

구면 좌표계의 gradient는:

$$
\nabla\Lambda = \hat{r}\frac{\partial\Lambda}{\partial r} + \hat{\theta}\frac{1}{r}\frac{\partial\Lambda}{\partial\theta} + \hat{\phi}\frac{1}{r\sin\theta}\frac{\partial\Lambda}{\partial\phi}
$$

이므로 $\hat{\phi}$ 성분만 살아남는다. ✓

---

## Dirac Quantization Condition

게이지 변환의 연산자는 $\exp\!\left(+\frac{i}{\hbar}\cdot\frac{e}{c}\Lambda\right)$라고 알고 있다.
> 부호가 항상 헷갈린다! 

겹치는 영역 $\varepsilon < \theta < \pi - \varepsilon$에서
$\mathbf{A}^{(I)}$를 이용해 계산한 wave function이 $\psi^{(I)}$, 
$\mathbf{A}^{(II)}$를 이용해 계산한 것이 $\psi^{(II)}$라면, $\psi^{(II)}$는 $\psi^{(I)}$의 게이지 변환이어야 한다:

$$
\psi^{(II)} = \exp\!\left(-\frac{2iee_M}{\hbar c}\phi\right)\psi^{(I)}
\tag{13}
$$

$\phi = 0$일 때와 $\phi = 2\pi$일 때, $\psi^{(II)}$와 $\psi^{(I)}$는 두 지점에서 값이 같아야 한다:

$$
\exp\!\left(-\frac{2iee_M}{\hbar c}\cdot 2\pi\right) = 1
\tag{14}
$$

따라서:

$$
\frac{2ee_M}{\hbar c} = \pm N \quad (N \in \mathbb{Z})
$$

$$
\boxed{\quad e_M = \left|\frac{\hbar c}{2e}\right| \cdot N \quad}
\tag{15}
$$

$e_M$은 $\left|\frac{\hbar c}{2e}\right|$로 **양자화**된다!

> [!important] Dirac Quantization Condition
> Magnetic monopole의 자하 $e_M$은 $\frac{\hbar c}{2e}$의 정수배여야 한다. 이것은 전기 전하 $e$가 주어지면 자하의 최솟값이 결정됨을 의미한다. 역으로, 자연에 magnetic monopole이 단 하나라도 존재하면, 전기 전하가 양자화되어 있어야 함도 설명된다.

# 궁금한 내용

- **왜 게이지 변환의 연산자에 부호가 $\exp(-\frac{2iee_M}{\hbar c}\phi)$인가?** 기존에 배운 $G = \exp(\frac{ie\Lambda}{\hbar c})$와 $\Lambda = -2e_M\phi$를 넣으면 자연스럽게 나오는지 확인하자.
- **두 패치 $\mathbf{A}^{(I)}$, $\mathbf{A}^{(II)}$가 각각 올바른 $\mathbf{B}$를 재현하는지 확인**: $\nabla\times\mathbf{A}^{(I)}$를 계산해서 $\mathbf{B} = (e_M/r^2)\hat{r}$이 나오는지 검증해보자.

# AI의 보충 설명

## Aharonov-Bohm Effect의 물리적 의미

Aharonov-Bohm effect는 **$\mathbf{B} = 0$인 곳에서도 입자가 자기장의 영향을 받을 수 있다**는 것을 보여준다. 입자는 로렌츠힘을 받지 않지만, $\mathbf{A}$가 wave function의 phase에 영향을 주기 때문이다.

## Dirac Quantization의 직관

두 패치가 겹치는 영역에서 $\psi^{(I)}$와 $\psi^{(II)}$는 위상만 다른 같은 물리 상태를 기술한다. $\phi$가 $0$에서 $2\pi$로 한 바퀴 돌 때, 이 위상 인자 $e^{-\frac{2iee_M}{\hbar c}\phi}$는 반드시 원래 값으로 돌아와야 한다(wave function의 단일 연속성). 이 조건이 $e \cdot e_M$의 양자화를 강제한다.

이것은 일종의 위상학적 제약(topological constraint)으로, 자기 단극자의 존재 자체가 전하 양자화를 필연적으로 만든다는 매우 심오한 결과이다.

# 연관 학습 노트

# References

Sakurai, Modern Quantum Mechanics, Chap. 2

# 다음 강의

중간고사 (2026-04-16)

# 원본 필기 이미지

![[QM_7thweek_2.pdf]]
