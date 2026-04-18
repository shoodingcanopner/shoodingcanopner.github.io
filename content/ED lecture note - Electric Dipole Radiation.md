---
title: ED lecture note - Electric Dipole Radiation
date: "2026-04-08"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Electrodynamics 그 모든 것]] 강의를 듣고 적은 필기입니다.
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다.

# 지난 강의

[[ED lecture note - Radiating Systems]]

# 오늘의 핵심

![[DipoleRadiation.gif]]
위키피디아에서 퍼왔다. 보다 보면 빠져든다.  By MyName (<a href="//commons.wikimedia.org/wiki/User:Geoemyda" title="User:Geoemyda">Geoemyda</a> (<a href="//commons.wikimedia.org/wiki/User_talk:Geoemyda" title="User talk:Geoemyda"><span class="signature-talk">talk</span></a>)) - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=5179902">Link</a>

Multipole expansion 에서 $n=0$인 term은 electric dipole을 의미한다. 

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \frac{e^{ikr}}{r} \int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' \tag{Jackson 9.13}
$$
Electric dipole은 이렇게 정의된다. 
$$
\mathbf{p} = \int \mathbf{x}' \rho(\mathbf{x}') \, d^3\mathbf{x}' \quad \leftarrow \text{electric dipole, 회전 관성 moment와 비슷한 정의}
$$
자기벡터 포텐셜은 이렇게 spherical wave에다가 dipole moment 벡터를 씌운 모양. 

$$
\mathbf{A}(\mathbf{x}) = -\frac{i\mu_0 \omega}{4\pi} \mathbf{p} \cdot \frac{e^{ikr}}{r}
$$
자기장에 관한 식을 구하는 것은 충분히 할 수 있다. 
$$
\mathbf{H} = \frac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \frac{e^{ikr}}{r} \left(1 - \frac{1}{ikr}\right)
$$
그러나 전기장에 관한 식을 아래와 같이 정리하는 건 어렵다. 
$$
\mathbf{E} = \frac{1}{4\pi\varepsilon_0} \left\{ k^2 (\hat{n} \times \mathbf{p}) \times \hat{n} \frac{e^{ikr}}{r} + \left[3\hat{n}(\hat{n} \cdot \mathbf{p}) - \mathbf{p}\right] \frac{e^{ikr}}{r}(1 - ikr) \right\} \tag{Jackson 9.18}
$$

**전기장과 자기장의 편광 방향**
- $\mathbf{H}$는 $\hat{n}$과 직교. 빛의 특성과 같다.
- $\mathbf{E}$는 $\hat{n}$과 직교한 성분도 있고 평행한 성분도 있다.

제일 dominant한 term $\frac{1}{r} e^{ikr}$만 쓰면:

$$
\begin{cases}
\mathbf{H} = \dfrac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \dfrac{e^{ikr}}{r} \\[6pt]
\mathbf{E} = Z_0\, \mathbf{H} \times \hat{n}
\end{cases}
$$

이걸로 복사 파워를 구해 보면, 
$$
\frac{dP}{d\Omega} = \frac{k^4}{32\pi^2} \left(c^2 Z_0\right) |(\hat{n} \times \mathbf{p}) \times \hat{n}|^2
$$
관찰자와 dipole moment의 각도에 따라 복사 파워가 달라진다. 
Dipole moment와 직교하는 면 위에 있을 때 복사가 가장 세다.
Dipole moment와 같은 방향인 축 위에 있으면 복사가 0이다. 
$$
\frac{dP}{d\Omega} = \frac{k^4}{32\pi^2} \left(c^2 Z_0\right) \left| \mathbf{p} \right|^2 sin^2(\theta)
$$
![[Pasted image 20260418162549.png]]

# 필기 내용

## Electric Dipole Field (Far zone)

**Electric dipole field**가 있을 때 Far zone에서

9.9 식에서 $n=0$인 term만 이용.
> 어라... n=1이 dipole term이어야 할 것 같은데? 아닌가 지금 전류 밀도를 보고 있어서 n=0인 게 dipole인가보다. Electric dipole이 oscillation하면 magnetic monopole.

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \frac{e^{ikr}}{r} \int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' \tag{Jackson 9.13}
$$

연속 방정식 $\nabla \cdot \mathbf{J} = -\dfrac{\partial \rho}{\partial t} = -(-i\omega \rho)$를 이용한다. 
$\int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}'$ 부분을 점전하 밀도에 대한 식으로 고쳐준다. 

$$
\int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' = -\int \mathbf{x}' (\nabla' \cdot \mathbf{J}) \, d\mathbf{x}' = -i\omega \int \mathbf{x}' \rho(\mathbf{x}') \, d\mathbf{x}'
$$

> 부분 적분을 적용한 것 같다. 이런 스킬도 있구나.

맨 마지막에 나오는 적분 부분을 우리는 electric dipole moment라고 부르기로 했다. 

$$
\mathbf{p} = \int \mathbf{x}' \rho(\mathbf{x}') \, d^3\mathbf{x}' \quad \leftarrow \text{electric dipole, 회전 관성 moment와 비슷한 정의}
$$

정성적으로 뜻을 이해하자면, 전체적인 전하 분포가 어느 방향으로 얼마나 치우쳐졌는가가 dipole moment이다. 전하가 원점을 중심으로 고르게 분포되어 있으면 dipole moment가 0이고, 한쪽 위치에 쏠려있으면 dipole moment가 커진다.

식 9.13에 대입해서 자기 벡터 포텐셜을 구한다. 

$$
\mathbf{A}(\mathbf{x}) = -\frac{i\mu_0 \omega}{4\pi} \mathbf{p} \cdot \frac{e^{ikr}}{r}
$$


---

## H, E 구하기 (Electric Dipole)

### H 구하기: $\nabla \times \left(\dfrac{e^{ikr}}{r}\mathbf{p}\right)$ 계산

H를 구하기 위해 먼저 curl 연산인 $\nabla \times \left(\dfrac{e^{ikr}}{r}\mathbf{p}\right)$를 계산한다.

다음 항등식을 이용한다. 스칼라 함수 $f(\mathbf{x})$와 벡터 함수 $\mathbf{F}(\mathbf{x})$에 대해,

$$
\nabla \times (f\mathbf{F}) = (\nabla f) \times \mathbf{F} + f \,\nabla \times \mathbf{F}
$$

또한, 그라디언트를 $r$에 대해 쉽게 계산하기 위해 구대칭을 이용한다.

$$
\frac{\partial}{\partial x} = \frac{\partial r}{\partial x}\frac{\partial}{\partial r} = \frac{x}{r}\frac{\partial}{\partial r}
$$

$$
\nabla = \hat{x}\frac{\partial}{\partial x} + \hat{y}\frac{\partial}{\partial y} + \hat{z}\frac{\partial}{\partial z}
= \frac{\hat{x}x + \hat{y}y + \hat{z}z}{r}\frac{\partial}{\partial r} = \hat{n}\frac{\partial}{\partial r}
$$

따라서,

$$
\nabla \frac{e^{ikr}}{r} = \hat{n}\frac{\partial}{\partial r}\frac{e^{ikr}}{r} = \hat{n}\frac{(-1+ikr)e^{ikr}}{r^2}
$$

한편, **p는 소스 좌표 x′에 대한 적분으로 정의된 상수 벡터**이므로,
field point x에 대한 curl 연산에서 0이 된다.

$$
\mathbf{p} = \int \mathbf{x}'\rho(\mathbf{x}')\,d^3\mathbf{x}' \quad \Rightarrow \quad \nabla \times \mathbf{p} = 0
$$

따라서,

$$
\nabla \times \left(\frac{e^{ikr}}{r}\mathbf{p}\right)
= \frac{(-1+ikr)e^{ikr}}{r^2}\,\hat{n}\times\mathbf{p} + \frac{e^{ikr}}{r}\,\underbrace{\nabla\times\mathbf{p}}_{=\,0}
= \frac{(-1+ikr)e^{ikr}}{r^2}\,\hat{n}\times\mathbf{p}
$$

이를 정리하면,

$$
\nabla \times \left(\frac{e^{ikr}}{r}\mathbf{p}\right)
= ik\cdot\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)\hat{n}\times\mathbf{p}
$$
최종적으로 $\mathbf{H}$를 구하면,
$$
\mathbf{H} = \frac{1}{\mu} \nabla \times \mathbf{A} = \frac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \frac{e^{ikr}}{r} \left(1 - \frac{1}{ikr}\right)
$$

### $\mathbf{B}$ 구하기, vector cross product의 curl
$\mathbf{E} = \frac{iZ_0}{k} \nabla \times \mathbf{H}, \qquad Z_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}}$를 이용한다. 

$$
\mathbf{E} = \frac{ck^2}{4\pi} \frac{iZ_0}{k} \nabla \times \left\{(\hat{n} \times \mathbf{p}) \underbrace{\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)}_{g(r)}\right\}
$$

$$
g(r) \equiv \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)
$$

$$
\mathbf{E} = \frac{ck^2}{4\pi} \frac{iZ_0}{k} \nabla \times (\hat{n} \times \mathbf{p}\, g(r)) = \frac{ik}{4\pi\varepsilon_0} \nabla \times (\hat{n} \times \mathbf{p}\, g(r))
$$


두 벡터의 cross product의 curl 계산은 쉽지 않다. 레비-치비타로 직접 유도해 보자.
사실 예전에 학습노트로 기록한 적이 있다. [[Vector Identities in Electrodynamics]]

$$
\mathbf{A} \times \mathbf{B} = \hat{e}_i \,\varepsilon_{ijk} A_j B_k
$$

$$
\nabla \times (\mathbf{A} \times \mathbf{B}) = \hat{e}_i \,\varepsilon_{ijk} \frac{\partial}{\partial x_j} [\mathbf{A} \times \mathbf{B}]_k
$$

$$
= \hat{e}_i \,\varepsilon_{ijk} \frac{\partial}{\partial x_j} [\varepsilon_{kab} A_a B_b]
$$

$$
= \hat{e}_i \,\varepsilon_{kij} \varepsilon_{kab} \left[A_a \frac{\partial B_b}{\partial x_j} + B_b \frac{\partial A_a}{\partial x_j}\right]
$$

$\varepsilon_{kij}\varepsilon_{kab} = \delta_{ia}\delta_{jb} - \delta_{ib}\delta_{ja}$ 를 적용하면,

$$
= \hat{e}_i \left(\delta_{ia}\delta_{jb} - \delta_{ib}\delta_{ja}\right)\left(A_a \frac{\partial B_b}{\partial x_j} + B_b \frac{\partial A_a}{\partial x_j}\right)
$$

$$
= \hat{e}_i \left(A_i \underbrace{\frac{\partial B_j}{\partial x_j}}_{\nabla \cdot \mathbf{B}} + \underbrace{B_j \frac{\partial A_i}{\partial x_j}}_{B_j\frac{\partial}{\partial x_j}=(\mathbf{B}\cdot\nabla)} - \underbrace{A_j\frac{\partial B_i}{\partial x_j}}_{A_j\frac{\partial}{\partial x_j}=(\mathbf{A}\cdot\nabla)} - B_i \underbrace{\frac{\partial A_j}{\partial x_j}}_{\nabla \cdot \mathbf{A}}\right)
$$

$$
\boxed{\nabla \times (\mathbf{A} \times \mathbf{B}) = \mathbf{A}(\nabla \cdot \mathbf{B}) - \mathbf{B}(\nabla \cdot \mathbf{A}) + (\mathbf{B} \cdot \nabla)\mathbf{A} - (\mathbf{A} \cdot \nabla)\mathbf{B}}
$$

---

### 현재 상황에 적용

$\mathbf{p}\,g(r)$은 벡터장이지만, 방향이 항상 일정한 벡터이다. ($\mathbf{A} = \hat{n}$, $\mathbf{B} = \mathbf{p}\,g(r)$으로 놓는다.)

$$
\nabla \times (\hat{n} \times \mathbf{p}\,g(r)) = \hat{n}(\nabla \cdot \mathbf{p}\,g(r)) - \mathbf{p}\,g(r)(\nabla \cdot \hat{n}) + (\mathbf{p}\,g(r) \cdot \nabla)\hat{n} - (\hat{n} \cdot \nabla)(\mathbf{p}\,g(r))
$$

마지막으로 전기장 식에 대입하면
$$
\mathbf{E}= \frac{ik}{4\pi\varepsilon_0} \left[\hat{n}(\nabla \cdot \mathbf{p}\,g(r)) - \mathbf{p}\,g(r)(\nabla \cdot \hat{n}) + (\mathbf{p}\,g(r) \cdot \nabla)\hat{n} - (\hat{n} \cdot \nabla)(\mathbf{p}\,g(r))\right]
$$

최종으로 정리하면 아래 식이된다. 
그 과정을 다 따라가는 건 아주 힘들다고 한다. 
설마 시험에 나오진 않겠지?

$$
\mathbf{E} = \frac{1}{4\pi\varepsilon_0} \left\{ k^2 (\hat{n} \times \mathbf{p}) \times \hat{n} \frac{e^{ikr}}{r} + \left[3\hat{n}(\hat{n} \cdot \mathbf{p}) - \mathbf{p}\right] \frac{e^{ikr}}{r}(1 - ikr) \right\} \tag{Jackson 9.18}
$$
$$
\mathbf{H} = \frac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \frac{e^{ikr}}{r} \left(1 - \frac{1}{ikr}\right)
$$


**특징 정리:**
- $\mathbf{H}$는 $\hat{n}$과 직교. 빛의 특성과 같다.
- $\mathbf{E}$는 $\hat{n}$과 직교한 성분도 있고 평행한 성분도 있다.

제일 dominant한 term $\frac{1}{r} e^{ikr}$만 쓰면:

$$
\begin{cases}
\mathbf{H} = \dfrac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \dfrac{e^{ikr}}{r} \\[6pt]
\mathbf{E} = Z_0\, \mathbf{H} \times \hat{n}
\end{cases}
$$

---
## 복사 파워 (Radiated Power)

아래 식은 각도에 따라서 편광된 빛의 세기가 달라지는 현상과 관련있다.

**Average power:**

$$
\left\langle \frac{dP}{d\Omega} \right\rangle = \frac{1}{2} \text{Re}\left[r^2 \hat{n} \cdot (\mathbf{E} \times \mathbf{H}^*)\right]
$$
저 식을 계산하다 보면 
$\hat{n} \cdot \left[ \{ (\hat{n} \times \mathbf{p}) \times \hat{n} \} \times (\hat{n} \times \mathbf{p}) \right]$ 을 계산해야 한다.. 어지럽다. 
그러나 의외로 간단한 공식을 이용해 위를 간단한 값으로 만들 수 있다. 
$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a})
$$
이 벡터 항등식은 잘 알고 있던 것. 
$$
\hat{n} \cdot \left[\{(\hat{n} \times \mathbf{p}) \times \hat{n}\} \times (\hat{n} \times \mathbf{p})\right]
$$
$$ = \underbrace{\hat{n}}_{\mathbf{a}} \cdot \left[\underbrace{\{(\hat{n} \times \mathbf{p}) \times \hat{n}\}}_{\mathbf{b}} \times \underbrace{(\hat{n} \times \mathbf{p})}_{\mathbf{c}}\right] $$
$$
= \underbrace{\{(\hat{n} \times \mathbf{p}) \times \hat{n}\}}_{\mathbf{b}} \cdot \left[\underbrace{(\hat{n} \times \mathbf{p})}_{\mathbf{c}} \times \underbrace{\hat{n}}_{\mathbf{a}}\right]
= \left|(\hat{n} \times \mathbf{p}) \times \hat{n}\right|^2
$$
그래서 결론적으로 복사 파워는!!

$$
\frac{dP}{d\Omega} = \frac{k^4}{32\pi^2} \left(c^2 Z_0\right) |(\hat{n} \times \mathbf{p}) \times \hat{n}|^2
$$

$(\hat{n} \times \mathbf{p}) \times \hat{n}$을 BAC-CAB 공식으로 전개하면,
$$
(\hat{n} \times \mathbf{p}) \times \hat{n} = \mathbf{p} - \hat{n}(\hat{n} \cdot \mathbf{p})
$$
이는 **p에서 $\hat{n}$ 방향 성분을 제거한 것**, 즉 **p의 횡방향(transverse) 성분**이다.

![[Pasted image 20260418160121.png]]

그리고 이 벡터의 크기는 $\left|(\hat{n} \times \mathbf{p}) \times \hat{n}\right| = \left| \mathbf{p} \right| sin(\theta)$ 이다. 각도에 따른 복사 파워를 명시적으로 나타내면, 관찰자가 electric dipole moment로부터 $\theta$의 각도로 있을 때에, 

$$
\frac{dP}{d\Omega} = \frac{k^4}{32\pi^2} \left(c^2 Z_0\right) \left| \mathbf{p} \right|^2 sin^2(\theta)
$$
![[Pasted image 20260418162607.png]]
이렇게 나비 모양처럼 된다. 

즉, electric dipole moment가 있는 축 방향으로 갈 수록 복사는 약해지며, 
electic dipole moment와 직교하는 평면에 가까워 질 수록 복사가 강해진다. 


# 궁금한 내용



# AI의 보충 설명

# 연관 학습 노트

# References

Jackson Ch. 9 (9.13, 9.18)

# 필기 원본
![[ED_7thweek_2.pdf]]

# 다음 강의

Magnetic Dipole Radiation, Electric Quadrupole Radiation (보충 예정)
