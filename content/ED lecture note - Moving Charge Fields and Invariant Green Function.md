---
title: ED lecture note - Moving Charge Fields and Invariant Green Function
date: "2026-06-02"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[MOCs/Electrodynamics|Electrodynamics]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Covariant Formulation of Electrodynamics]]

# 오늘의 핵심

- 등속운동하는 점전하의 전자기장: $K'$ frame에서 쿨롱 법칙으로 구한 뒤, 역 Lorentz 변환으로 $K$ frame으로 가져온다.
- 결과: $K$ frame에서 자기장이 발생하며, 비상대론적 극한에서 비오-사바르 법칙이 복원된다.
- 상대론적 극한 ($\gamma \gg 1$): $E_2$의 peak가 $\gamma$배 높아지고 폭은 $1/\gamma$배 좁아진다 — "빔처럼" 압축됨.
- 파동방정식 $\Box A^\beta = \frac{4\pi}{c}J^\beta$의 해: 4차원 그린 함수 $D(x,x')$ 도입.
- $k_0$ 적분의 극점 우회 방법에 따라 지연(retarded)/선진(advanced) 그린 함수가 결정된다.
- Retarded Green function: $D_r(x-x') = \dfrac{\theta(x_0-x_0')}{4\pi R}\delta(x_0 - x_0' - R)$ — 인과율 만족.
- 공변 형태: $D_r = \dfrac{1}{2\pi}\theta(x_0-x_0')\delta[(x-x')^2]$ — proper Lorentz 변환 하에서 불변.

# 필기 내용

## Part 1. 이동하는 전하가 만드는 전자기장 — 좌표 변환을 이용

### 문제 설정
![[Pasted image 20260602074955.png]]
전하 $q$가 $x_1$ 방향으로 속도 $\vec{v}$로 등속운동. 관찰점 $P$에서의 전자기장을 구한다. 
$K$ frame은 고정된 좌표계, 
$K'$ frame은 움직이는 전하를 원점에 둔 채 이동하는 좌표계이다. 

목표: $K'$ frame 기준으로 관찰자 위치에서 전자기장을 계산한 뒤, field strength tensor를 Lorentz transform하여 $K$ frame에서 전자기장을 구한다. 

- $\vec{v}$로 움직이는 frame $K'$을 생각. $t = t' = 0$에서 두 좌표는 같다.
- $K'$ frame에서 관찰자의 좌표: $(x_1', x_2', x_3') = (-vt', b, 0)$
- $K'$ frame에서는 관찰자가 $-v$로 이동하며 멀어지고, 전하는 원점에 가만히 있는 상황.


$$
(r')^2 = (vt')^2 + b^2
$$

시간 변환 관계 ($x_1 = 0$인 K-frame에서의 관찰자):

$$
ct' = \gamma(ct - \beta x_1) = \gamma ct \quad \Rightarrow \quad t' = \gamma t
$$

---

### $K'$ frame에서 전자기장

$K'$에서 전하는 정지해 있다. → 단순히 쿨롱 법칙 적용. 자기장은 없다.
$$
\vec{E}' = \frac{q \hat{r}'}{r'^2} \quad \quad E_i' = \frac{qx_i'}{r'^3}
$$

$$
E_1' = -\frac{qvt'}{r'^3}, \quad E_2' = \frac{qb}{r'^3}, \quad E_3' = 0, \quad B_1' = B_2' = B_3' = 0
$$

$r' = [(vt')^2 + b^2]^{1/2}$과 $t' = \gamma t$를 대입하면:

$$
\begin{cases}
E_1' = \dfrac{-qv\gamma t}{[(v\gamma t)^2 + b^2]^{3/2}} \\[8pt]
E_2' = \dfrac{qb}{[(v\gamma t)^2 + b^2]^{3/2}} \\[8pt]
E_3' = B_1' = B_2' = B_3' = 0
\end{cases}
$$

---

### 역 Lorentz 변환으로 $K$ frame 전자기장 획득

지난 강의에서 유도한 역변환 관계:

$$
\begin{cases}
E_1 = E_1' \\
E_2 = \gamma(E_2' + \beta B_3') \\
E_3 = \gamma(E_3' - \beta B_2') \\
B_1 = B_1' \\
B_2 = \gamma(B_2' - \beta E_3') \\
B_3 = \gamma(B_3' + \beta E_2')
\end{cases}
$$

대입하면:

$$
E_1 = E_1' = \frac{-qv\gamma t}{[(v\gamma t)^2 + b^2]^{3/2}}
$$

$$
E_2 = \gamma E_2' = \frac{\gamma qb}{[(v\gamma t)^2 + b^2]^{3/2}}
$$

$$
E_3 = 0, \quad B_1 = 0, \quad B_2 = -\beta\gamma E_3' = 0
$$

$$
\boxed{B_3 = \beta\gamma E_2' = \frac{\beta\gamma qb}{[(v\gamma t)^2 + b^2]^{3/2}}}
$$

신기하게도, $K'$에서 자기장이 0임에도 불구하고 $K$ frame에서는 $x_3$ 축 방향의 자기장이 발생한다. Boost가 커질수록 $B_3$도 커진다.

---

### 비상대론적 극한 ($\gamma \to 1$, $\beta \to 0$)

$$
\gamma \to 1, \quad \gamma\beta \to \frac{v}{c}, \quad \beta \to 0
$$

$$
B_3 = \frac{v\,qb}{c\,[(vt)^2 + b^2]^{3/2}}
$$

이것은 정확히 비오-사바르 법칙의 결과:

$$
\vec{B} = \frac{q}{c}\frac{\vec{v} \times \vec{r}}{r^3}
$$

비오-사바르 법칙이 Lorentz 변환의 비상대론적 극한으로 복원됨을 확인.

---

### 상대론적 극한 ($\gamma \gg 1$)
![[Pasted image 20260602075612.png]]
$$
E_2(t) = \frac{\gamma qb}{[(v\gamma t)^2 + b^2]^{3/2}}
$$

- $t = 0$에서 $E_2$가 peak: $E_2(0) = \gamma\,\dfrac{q}{b^2}$ → 비상대론적 대비 $\gamma$배 증폭
- Peak의 폭: $\Delta t \sim \dfrac{b}{\gamma v}$ → $\gamma$가 클수록 더 좁아짐. 

즉, 전하가 빠르게 움직일수록 peak가 높아지고 폭이 좁아진다 — 전자기장이 운동 방향에 수직인 방향으로 "빔" 형태로 집중된다.
![[Pasted image 20260602075639.png]]
$$
E_1(t) = \frac{-qv\gamma t}{[(v\gamma t)^2 + b^2]^{3/2}}
$$

이것은 홀함수(odd function)로, $t < 0$에서 양수, $t > 0$에서 음수.

두 그래프를 통해 이동하는 전하는 비등방적으로 전자기장을 방사함을 알 수 있다.

$$
\frac{E_1}{E_2} = -\frac{vt}{b}
$$
![[Pasted image 20260602075654.png]]

멈춰있는 전하의 전기장은 쿨롱 법칙을 통해 익히 알고 있듯, 등방적이다. 

![[Pasted image 20260602075735.png]]

---

### 각도 $\psi$로 표현
전기장을 관찰자와 전하 이동 방향 사이 각도 $\psi$를 이용해 나타낼 수 있다.
![[Pasted image 20260602075748.png]]
$$
vt = r\cos\psi, \quad b = r\sin\psi
$$

$$
\begin{align}
(v\gamma t)^2 + b^2
&= r^2\!\left(\gamma^2\cos^2\psi + \sin^2\psi\right)
 = r^2\left\{(\gamma^2-1)\cos^2\psi + 1\right\} \\
&= r^2\left\{(\gamma^2-1)(1-\sin^2\psi)+1\right\}
 = r^2\left\{\gamma^2 - (\gamma^2-1)\sin^2\psi\right\} \\
&= r^2\gamma^2\!\left(1-\beta^2\sin^2\psi\right)
\end{align}
$$

따라서:

$$
E_1' = -q\frac{r\cos\psi}{r^3\gamma^2[1-\beta^2\sin^2\psi]^{3/2}}, \quad E_2' = q\frac{r\sin\psi}{r^3\gamma^2[1-\beta^2\sin^2\psi]^{3/2}}
$$

전기장은 최종적으로 

$$
\boxed{\vec{E} = \frac{q\,\vec{r}}{r^2\,\gamma^2\left[1 - \beta^2\sin^2\psi\right]^{3/2}}}
$$

- $\psi = 0$ 또는 $\pi$ (운동 방향): $E \propto \dfrac{1}{\gamma^2}\left(\dfrac{q}{r^2}\right)$ → $\gamma$가 크면 약해짐
- $\psi = \dfrac{\pi}{2}$ (수직 방향): $E \propto \gamma\left(\dfrac{q}{r^2}\right)$ → **이쪽이 더 크다**

$\beta$가 클수록 $\sin\psi$항이 살아나며 비등방성이 강해진다.

---

## Part 2. 파동방정식의 공변 풀이 — 불변 그린 함수 (Jackson §12.2 / §12.11)

### 배경: Maxwell 방정식 → 파동방정식

$$
F^{\alpha\beta} = \partial^\alpha A^\beta - \partial^\beta A^\alpha
$$
아래 식이 맥스웰 방정식의 네 식 중 파동방정식으로 이어지는 두 가지 방정식을 한번에 나타낸다. 
$$
\partial_\alpha F^{\alpha\beta} = \frac{4\pi}{c}J^\beta
$$
포텐셜에 대한 파동방정식으로 바꿀 수 있다. 
$$
\partial_\alpha \partial^\alpha A^\beta - \partial_\alpha \partial^\beta A^\alpha = \frac{4\pi}{c}J^\beta
$$

 Lorenz 조건 $\partial_\alpha A^\alpha = 0$ 적용:

$$
\partial_\alpha \partial^\beta A^\alpha = \partial^\beta(\partial_\alpha A^\alpha) = \partial^\beta \cdot 0 = 0
$$
$\partial_\alpha \partial^\alpha \equiv \Box$ 적용하면 파동방정식이 남는다. 

$$
\boxed{\Box A^\beta = \frac{4\pi}{c}J^\beta}
$$

이 비동차 파동방정식을 풀기 위해 **4차원 그린 함수**를 도입한다. 로렌츠 변환에 불변인 그린 함수를 찾는 것이 목표.

---

### 4차원 그린 함수의 정의

$$
\Box_x D(x, x') = \delta^{(4)}(x - x') = \delta(x_0 - x_0')\,\delta(\vec{x} - \vec{x}_0)
$$

Boundary 조건이 없을 때, $D$는 $x$와 $x'$의 차에만 의존한다:

$$
z^\alpha = x^\alpha - x'^\alpha \quad \Rightarrow \quad D(x, x') = D(z)
$$

$$
\Box_z D(z) = \delta^{(4)}(z), \qquad k \cdot z = k_0 z_0 - \vec{k}\cdot\vec{z}
$$

---

### 푸리에 변환으로 $k$-공간에서 풀기

$$
D(z) = \frac{1}{(2\pi)^4}\int d^4k\,\tilde{D}(k)\,e^{-ik\cdot z}
$$

$$
\delta^{(4)}(z) = \frac{1}{(2\pi)^4}\int d^4k\,e^{-ik\cdot z}
$$

$\Box_z$를 $e^{-ik\cdot z}$에 적용하면:

$$
\Box_z e^{-ik\cdot z} = (-ik)(-ik)e^{-ik\cdot z} = -k\cdot k\,e^{-ik\cdot z}
$$

대입하면:

$$
\tilde{D}(k) = -\frac{1}{k\cdot k} \qquad \text{(Jackson 12.127)}
$$

따라서:

$$
D(z) = \frac{-1}{(2\pi)^4}\int d^4k\,\frac{e^{-ik\cdot z}}{k\cdot k}
$$

$k_0$ 적분을 먼저 분리하면 ($\kappa \equiv |\vec{k}|$):

$$
D(z) = \frac{-1}{(2\pi)^4}\int d^3k\,e^{i\vec{k}\cdot\vec{z}}\int_{-\infty}^{\infty}dk_0\,\frac{e^{-ik_0 z_0}}{k_0^2 - \kappa^2}
$$

> [!warning] 분모 $k_0^2 - \kappa^2 = 0$에서 $k_0 = \pm\kappa$ 두 개의 단순 극점이 생긴다. 적분이 이대로는 ambiguous — 어떻게 극점을 우회하느냐가 핵심.

---

### $k_0$ 복소 적분 — 극점 우회와 두 가지 그린 함수

$k_0$를 복소 변수로 취급. 지수인자 $e^{-ik_0 z_0}$의 수렴 조건:

$$
\begin{cases}
z_0 > 0 \Rightarrow \text{lower-half plane에서 contour 닫기} \\
z_0 < 0 \Rightarrow \text{upper-half plane에서 contour 닫기} \to \text{no singularities} \Rightarrow D_r = 0
\end{cases}
$$

**경로 $r$ (retarded): 두 극점 모두 실수축 위쪽으로 약간 우회**

$z_0 > 0$일 때, 유수 정리 적용:

$$
\oint_r dk_0\,\frac{e^{-ik_0 z_0}}{k_0^2 - \kappa^2} = -2\pi i\,\mathrm{Res}\!\left(\frac{e^{-ik_0 z_0}}{k_0^2 - \kappa^2}\right) = -\frac{2\pi}{\kappa}\sin(\kappa z_0)
$$

$z_0 > 0$인 경우만 살아남아:

$$
D_r(z) = \frac{\theta(z_0)}{(2\pi)^3}\int d^3k\,e^{i\vec{k}\cdot\vec{z}}\frac{\sin(\kappa z_0)}{\kappa}
$$

각도 적분 수행 ($R \equiv |\vec{z}|$):

$$
D_r(z) = \frac{\theta(z_0)}{2\pi^2 R}\int_0^\infty d\kappa\,\sin(\kappa R)\sin(\kappa z_0)
$$

삼각함수 곱을 지수함수로 변환하면 남은 적분이 디랙 델타:

$$
\boxed{D_r(x - x') = \frac{\theta(x_0 - x_0')}{4\pi R}\,\delta(x_0 - x_0' - R)} \qquad \text{(Jackson 12.131)}
$$

여기서 $R = |\vec{x} - \vec{x}'|$.

이것이 **지연(retarded) 그린 함수**다. 소스 시각 $x_0'$이 관측 시각 $x_0$보다 항상 이전 → 인과율 만족.

**경로 $a$ (advanced): 극점 실수축 아래쪽으로 우회** → 선진 그린 함수:

$$
D_a(x - x') = \frac{\theta(x_0' - x_0)}{4\pi R}\,\delta(x_0 - x_0' + R) \qquad \text{(Jackson 12.132)}
$$

---

### 공변 형태 (Lorentz 불변 표현)

핵심 항등식:

$$
\delta[(x-x')^2] = \delta\!\left[(x_0-x_0')^2 - R^2\right] = \frac{1}{2R}\left[\delta(x_0-x_0'-R) + \delta(x_0-x_0'+R)\right]
$$

세타함수와 결합하면:

$$
D_r(x-x') = \frac{1}{2\pi}\,\theta(x_0 - x_0')\,\delta[(x-x')^2] \qquad \text{(Jackson 12.133)}
$$

$$
D_a(x-x') = \frac{1}{2\pi}\,\theta(x_0' - x_0)\,\delta[(x-x')^2]
$$

> [!tip] 왜 Lorentz 불변인가?
> 세타함수 $\theta(x_0 - x_0')$만 보면 Lorentz 불변인지 불분명해 보인다. 그러나 이 표현이 사용되는 곳에서는 항상 $\delta[(x-x')^2] = 0$, 즉 $(x-x')^2 = 0$ (광원뿔 위)에서만 0이 아니다. 광원뿔 위의 미래/과거 방향은 proper Lorentz 변환으로 바뀌지 않는다. 따라서 세타함수가 선택하는 조건 자체가 Lorentz 불변이다. $D_r$은 소스점의 **전방 광원뿔 위**에서만 0이 아님.

---

### 파동방정식의 일반해

$$
A^\alpha(x) = A^\alpha_{\mathrm{in}}(x) + \frac{4\pi}{c}\int d^4x'\,D_r(x-x')\,J^\alpha(x') \qquad \text{(Jackson 12.134)}
$$

$$
A^\alpha(x) = A^\alpha_{\mathrm{out}}(x) + \frac{4\pi}{c}\int d^4x'\,D_a(x-x')\,J^\alpha(x') \qquad \text{(Jackson 12.135)}
$$

> [!tip] $A^\alpha_{\mathrm{in}}$이 뭐지?
> 동차 파동방정식 $\Box A^\alpha = 0$의 해다. 물리적으로는 $x_0 \to -\infty$에서 소스가 없을 때 이미 존재하던 "입사(incoming)" 포텐셜. 비동차 방정식의 해는 "특수해(그린 함수 적분 항) + 동차해"의 꼴이므로, $A_{\mathrm{in}}$은 바로 그 동차해에 해당한다. 비유: 1D에서 $y'' = f(x)$의 일반해가 $y_p + C_1 x + C_2$인 것처럼.

**복사장(radiation field):** outgoing과 incoming의 차이

$$
A^\alpha_{\mathrm{rad}}(x) = A^\alpha_{\mathrm{out}} - A^\alpha_{\mathrm{in}} = \frac{4\pi}{c}\int d^4x'\,D(z)\,J^\alpha(x')
$$

$$
D(z) = D_r(z) - D_a(z) \qquad \text{(Jackson 12.137)}
$$

---

### 점전하의 4-전류 (Jackson 12.138–12.139)

관성계 $K$에서 위치 $\mathbf{r}(t)$를 따라 움직이는 점전하 $e$의 전하·전류 밀도:

$$
\rho(\mathbf{x}, t) = e\,\delta[\mathbf{x} - \mathbf{r}(t)], \qquad \mathbf{J}(\mathbf{x}, t) = e\,\mathbf{v}(t)\,\delta[\mathbf{x} - \mathbf{r}(t)]
$$

이를 manifestly covariant한 형태의 4-전류로 쓰면, 전하의 고유시간 $\tau$와 4-좌표 $r^\alpha(\tau)$를 도입하여:

$$
\boxed{J^\alpha(x) = ec\int d\tau\,U^\alpha(\tau)\,\delta^{(4)}[x - r(\tau)]}
$$

여기서 $U^\alpha = (\gamma c,\, \gamma\vec{v})$는 4-속도. 이것을 (12.134)에 대입하면 **Chapter 14의 Liénard-Wiechert 포텐셜**로 이어진다.

# 궁금한 내용

> [!question] invariance?
> $D_r$과 $D_a$의 공변 형태에서 세타함수 $\theta(x_0 - x_0')$가 Lorentz 변환에 불변이라고 하는데, 왜 이게 invariant under Lorentz transform이라고 하는 거지?

> [!tip] Glia의 보충 설명
> 위의 "왜 Lorentz 불변인가?" 팁을 참고. 핵심은 **세타함수 홀로는 불변이 아니지만**, 항상 $\delta[(x-x')^2]$와 함께 등장하기 때문에 $(x-x')^2 = 0$인 광원뿔 위에서만 의미가 있다는 것. 광원뿔의 미래/과거 구분은 proper Lorentz 변환으로 바뀌지 않으므로, 조합 전체는 불변이다.

> [!question] $A^\alpha_\mathrm{in}$이 뭐지?
> 위의 팁 참고.

# AI의 보충 설명

# 연관 학습 노트

- [[ED lecture note - Covariant Formulation of Electrodynamics]]
- [[Green Function for Wave Equation]]

# References

Jackson Classical Electrodynamics, Chapter 12 (§12.2, §12.11)

# 다음 강의


# 필기 원본

![[ED_13thweek_2.pdf]]
