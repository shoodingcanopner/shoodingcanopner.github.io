---
title: SM HW6-4 Kinetic Pressure of an Ideal Gas
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 6th HW, Problem 4 (MB distribution 유도, 3단계)

# 문제

기체 분자가 가하는 압력 $P$는 단위 면적당 분자들이 가하는 평균 힘이다.

$$
P = \int_0^\infty dp_x\int_{-\infty}^{\infty}dp_y\int_{-\infty}^{\infty}dp_z\,(2p_x)\frac{p_x}{m}f_1^0(\mathbf{p})
$$

적분을 수행하여 다음을 보여라.

$$
P = \frac{2}{3}n\epsilon = \frac{2}{3}\frac{N}{V}\epsilon
$$

# 내 풀이

$$
P = \frac{2C}{m}\left(\int_0^\infty dp_x\,e^{-Ap_x^2}p_x^2\right)\left(\int dp_y\,e^{-Ap_y^2}\right)\left(\int dp_z\,e^{-Ap_z^2}\right)
$$

$p_x$ 적분은 짝함수이므로 $\frac{1}{2}\int_{-\infty}^{\infty} = \frac{1}{4}\pi^{1/2}A^{-3/2}$, 나머지는 $\pi A^{-1}$.

$$
P = \frac{1}{2m}C\pi^{3/2}A^{-5/2} = \frac{n}{2mA} = \frac{2}{3}n\epsilon \qquad \left(C = nA^{3/2}\pi^{-3/2},\; A = \frac{3}{4m\epsilon}\right)
$$

# 풀이 검토

**판정: 완벽하다.** 적분 하한이 0인 것을 짝함수 성질로 처리한 것이 정확하다 (답안 메모: "$-\infty$ 없어지는 대신").
![[Pasted image 20261030135829.png]]

> [!tip] 1. 적분식의 각 인자의 의미 (서술형 대비)
> - **$(2p_x)$**: 벽에 탄성 충돌한 분자 하나가 벽에 전달하는 운동량 ($p_x \to -p_x$)
> - **$\frac{p_x}{m}f_1^0\,d^3p$**: 단위 시간 동안 단위 면적의 벽에 부딪히는 해당 운동량 분자의 수 (flux)
> - **$p_x > 0$만 적분**: 벽을 **향해** 움직이는 분자만 부딪힌다.
>
> 흔한 실수는 인자 2를 빼먹거나, $p_x$를 $-\infty$부터 적분하여 두 배를 얻는 것이다. 둘이 서로 상쇄되어 우연히 맞는 답이 나오기도 하므로, 각 인자의 의미를 말할 수 있어야 한다.

> [!tip] 2. 이 결과가 온도를 "정의"하는 방식 — HW1-1과의 연결
> 이 문제에서 얻는 것은 $PV = \frac{2}{3}N\epsilon$이다. 여기에는 **온도가 없다**. 다음 문제에서 이것을 실험 법칙 $PV = Nk_BT$와 비교해야 비로소 $\epsilon = \frac{3}{2}k_BT$가 나온다. 즉 kinetic theory는 온도를 스스로 정의하지 못하고, 열역학의 온도(또는 ideal gas law)를 **외부에서 빌려온다**.
>
> 바로 이 점 때문에 [[SM HW1-1 Ideal Gas and Absolute Temperature|HW1-1]]에서 "$\langle\frac{1}{2}mv^2\rangle = \frac{3}{2}k_BT$"를 온도의 **정의**로 쓴 것이 감점되었다. 온도의 정의는 열역학($\partial S/\partial E$ 또는 Carnot)에서 오고, $\epsilon = \frac{3}{2}k_BT$는 그 정의와 kinetic theory를 연결한 **결과**다.

# 연관 노트

- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]
- [[SM HW6-3 Average Energy and the Constant A]]
- [[SM HW6-5 Maxwell-Boltzmann Distribution]]
- [[SM HW1-1 Ideal Gas and Absolute Temperature]]

# 다음 문제
[[SM HW6-5 Maxwell-Boltzmann Distribution|HW6-5 Maxwell-Boltzmann Distribution]]