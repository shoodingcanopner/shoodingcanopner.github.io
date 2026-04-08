---
title: ED lecture note - Radiating Systems
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

아직 실제 필기 내용이랑 대조 검토 안 함.. 해야해..

# 지난 강의

[[ED lecture note - Dispersion]]

# 오늘의 핵심

- 전자기장에서 각운동량 보존 법칙 → Chapter 9 (Radiating Systems)로 진입
- 진동하는 전하가 어떻게 빛을 만드는가: **Retarded Green's function** 과 **Vector Potential**
- Source와 관찰자 거리에 따른 Near zone / Far zone 구분
- Far zone에서 Electric Dipole Radiation의 벡터 포텐셜 및 전자기장 유도

# 필기 내용

## Chapter 9 도입: Radiating Systems

이제 Chapter 9로 넘어간다.

**Radiating Systems**: 진동하는 전하/전류가 어떻게 빛을 만드는가?

이를 위해 **multipole expansion**이 필요하다.

원점 주위에 전하가 밀집해 있고, 원점에서 멀리 떨어진 곳에서 포텐셜을 알고 싶은 상황.

$$
\int \frac{\rho(\mathbf{x}')}{|\mathbf{x} - \mathbf{x}'|} \, d\mathbf{x}'
$$

를 이용해 일일이 구할 수 있지만,

이를 expansion하면 **Monopole**이 제일 dominant하고, 그 다음이 **dipole momentum**이 주요함을 알 수 있다.

> 앞서 3, 4강에서 한 multipole expansion을 이제 와서 다시 하는 것은 multipole에 **time dependence**를 넣으면 **radiation**이 나오기 때문이다.

Time dependent Green's function은 handout으로 공부하라.

---

## 시간에 따라 진동하는 소스: Oscillating ρ, J

시간에 따라 진동하는 $\rho$와 $\mathbf{J}$:

$$
\begin{cases}
\rho(\mathbf{x}, t) = \rho(\mathbf{x})\, e^{-i\omega t} \\
\mathbf{J}(\mathbf{x}, t) = \mathbf{J}(\mathbf{x})\, e^{-i\omega t}
\end{cases}
$$
보면 위치에 따라 진동하는 phase가 다르다거나.. 하지는 않다. 모든 위치에 있는 전하와 전류가 일제히 깜박거린다. 

벡터 포텐셜에 대한 헬름홀츠 방정식의 general한 해, 
이것은 **retarded Green's function**이라 한다:

$$
\mathbf{A}(\mathbf{x}, t) = \frac{\mu_0}{4\pi} \int d\mathbf{x}' \int dt' \, \frac{\mathbf{J}(\mathbf{x}', t')}{|\mathbf{x} - \mathbf{x}'|} \, \delta\!\left(t' - t + \frac{|\mathbf{x} - \mathbf{x}'|}{c}\right)
$$

> 앞으로 강의에서 프라임(')이 붙은 것은 source에 관한 것, 안 붙은 것은 observation에 관한 것.

저 $\mathbf{A}(\mathbf{x}, t)$에 진동하는 $\mathbf{J}$를 넣자.
t에 대해 적분하면 디락델타에 의해 $t' = t - \frac{|\mathbf{x} - \mathbf{x}'|}{c}$ 이 대입된다. 
$$
\mathbf{A}(\mathbf{x}, t) = \frac{\mu_0}{4\pi} \int d\mathbf{x}' \, \frac{\mathbf{J}\!\left(\mathbf{x}\right)}{|\mathbf{x} - \mathbf{x}'|} \exp\!\left[-i\omega\!\left(t - \frac{|\mathbf{x} - \mathbf{x}'|}{c}\right)\right]
$$

$$
= \frac{\mu_0}{4\pi}\, e^{-i\omega t} \int d\mathbf{x}' \, \frac{\mathbf{J}\!\left(\mathbf{x}'\right)}{|\mathbf{x} - \mathbf{x}'|} \, e^{ik|\mathbf{x} - \mathbf{x}'|}
$$

$$
c = \frac{\omega}{k}, \quad k = \frac{\omega}{c}
$$

를 대입했음.

따라서:

$$
\begin{cases}
\mathbf{A}(\mathbf{x}, t) = \mathbf{A}(\mathbf{x})\, e^{-i\omega t} \\
\mathbf{A}(\mathbf{x}) = \dfrac{\mu_0}{4\pi} \int d^3\mathbf{x}' \, \dfrac{\mathbf{J}(\mathbf{x}')}{|\mathbf{x} - \mathbf{x}'|} \, e^{ik|\mathbf{x} - \mathbf{x}'|}
\end{cases}
$$

> [!question] 위 식에서 J에 시간을 대입하지 않는 건가?
> $\mathbf{J}(\mathbf{x}', t)= \mathbf{J}(\mathbf{x}') e^{-i\omega t}$ 이므로, 공간 부분 $\mathbf{J}(\mathbf{x}')$만 남기고 시간 의존성은 $e^{-i\omega t}$ 인수로 분리한 것. $\mathbf{A}(\mathbf{x})$는 공간 함수만.

---

## H, E를 A로부터 구하기

$$
\mathbf{H} = \frac{1}{\mu} \nabla \times \mathbf{A}, \qquad \mathbf{E} = \frac{iZ_0}{k} \nabla \times \mathbf{H}, \qquad Z_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}}
$$

> → 이게 왜 성립하지? 원래는 시간 미분이 들어가야 할 텐데. 
> $\dot{\mathbf{E}} = -i\omega\mathbf{E}$을 이용한 거 같기도 하다. 

---

## Near zone / Far zone 구분

소스크기 $d$, 소스와 관찰자 사이의 거리 $r$, 파장 $\lambda$.

$$
\begin{cases}
\text{Near zone} : & d \ll r \ll \lambda & \text{소스랑 가깝고 소스가 작다.} \\
\text{Far zone} : & d \ll \lambda \ll r & \text{소스랑 멀다.}
\end{cases}
$$

---

### Near Zone Case: $kr \ll 1$

$$
\exp(ikr) \sim 1
$$

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \int \mathbf{J}(\mathbf{x}') \frac{d\mathbf{x}'}{|\mathbf{x} - \mathbf{x}'|}
$$

> 아니 근데 왜 갑자기 시간은 고려 안 하기 시작한 거지? → 일단 지금은 공간에 대한 함수만 분리해서 보고 있기 때문이다. 

와! 특수함수를 쓴다. 공부해야 할까? 시험에서는 표로 주지 않을까?

$$
\frac{1}{|\mathbf{x} - \mathbf{x}'|} = 4\pi \sum_{\ell=0}^{\infty} \sum_{m=-\ell}^{\ell} \frac{1}{2\ell+1} \frac{r_<^\ell}{r_>^{\ell+1}} Y_{\ell m}^*(\theta', \phi') \, Y_{\ell m}(\theta, \phi)
$$

$\theta', \phi'$는 소스의 위치 $\mathbf{x}'$를 위한 좌표,
$\theta, \phi$는 관찰 위치 $\mathbf{x}$를 위한 좌표.

$$
\mathbf{A} = \frac{\mu_0}{4\pi} \sum_{\ell m} \frac{4\pi}{2\ell+1} \frac{Y_{\ell m}(\theta, \phi)}{r^{\ell+1}} \int \mathbf{J}(\mathbf{x}')\, r'^\ell\, Y_{\ell m}^*(\theta', \phi') \, d\mathbf{x}'
$$

시간에 관하여, 양 변 모두는 $e^{-i\omega t}$로 oscillate 한다.

---

### Far Zone Case: $kr \gg 1$

$$
|\mathbf{x}| \gg |\mathbf{x}'|, \qquad |\mathbf{x} - \mathbf{x}'| \simeq r - \hat{n} \cdot \mathbf{x}', \qquad \hat{n} = \frac{\mathbf{x}}{r}, \quad r = |\mathbf{x}|
$$

> 그림을 그려서 이 근사를 직관적으로 납득해 보자.
![[Pasted image 20260408145349.png]]
$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \cdot \frac{e^{ikr}}{r} \int \mathbf{J}(\mathbf{x}')\, e^{-ik\hat{n} \cdot \mathbf{x}'} \, d\mathbf{x}'
$$

시간까지 고려하면:

$$
\mathbf{A}(\mathbf{x}, t) \propto \text{amplitude} \cdot \frac{e^{ikr - i\omega t}}{r}
$$

$k$에 곱해진 것이 $\mathbf{x}$가 아니라 $r$임에 주목하라.

$\frac{1}{r} e^{ikr - i\omega t}$는 **구면파**라는 것을 이야기한다.

퍼지는 모양 자체는 구면파로 똑같은데, 
amplitude를 나타내는 적분항 $\int \mathbf{J}(\mathbf{x}') e^{-ik\hat{n} \cdot \mathbf{x}'} d\mathbf{x}'$에 있는 $-ik\hat{n} \cdot \mathbf{x}'$때문에 **전하 밀도가 위치한 각도에 따라 amplitude에 기여하는 정도가 달라진다!**

$k(\hat{n} \cdot \mathbf{x}')$가 작다면, 그러니까 소스가 파장에 비해서 작다면, exponential term을 expand 할 수 있다:

$$
\exp(-ik\hat{n} \cdot \mathbf{x}') \approx 1 - ik\hat{n} \cdot \mathbf{x}' + \frac{1}{2!}(ik\hat{n} \cdot \mathbf{x}')^2
$$

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \frac{e^{ikr}}{r} \sum_{n=0}^{\infty} \frac{(-ik)^n}{n!} \int \mathbf{J}(\mathbf{x}')(\hat{n} \cdot \mathbf{x}')^n \, d\mathbf{x}' \tag{Jackson 9.9}
$$

n이 커짐에 따라 $(ik\hat{n} \cdot \mathbf{x}')^n$이 점점 작아지므로, $n$이 작은 게 leading term이다.

---

## Electric Dipole Field (Far zone)

**Electric dipole field**가 있을 때 Far zone에서

9.9 식에서 $n=0$인 term만 이용. 
> 어라... n=1이 dipole term이어야 할 것 같은데? 아닌가 지금 전류 밀도를 보고 있어서 n =0 인 게 dipole인가보다. 

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \frac{e^{ikr}}{r} \int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' \tag{Jackson 9.13}
$$

연속 방정식 $\nabla \cdot \mathbf{J} = -\dfrac{\partial \rho}{\partial t}$를 이용:

$$
\int \mathbf{J}(\mathbf{x}') \, d\mathbf{x}' = -\int \mathbf{x}' (\nabla' \cdot \mathbf{J}) \, d\mathbf{x}' = -i\omega \int \mathbf{x}' \rho(\mathbf{x}') \, d\mathbf{x}'
$$

> 부분 적분을 적용한 것 같다. 이런 스킬도 있구나. 

$$
\mathbf{A}(\mathbf{x}) = -\frac{i\mu_0 \omega}{4\pi} \mathbf{p} \cdot \frac{e^{ikr}}{r}
$$
이렇게 임의의 전하밀도로부터 dipole moment를 구하는 방법을 찾았다. 
$$
\mathbf{p} = \int \mathbf{x}' \rho(\mathbf{x}') \, d^3\mathbf{x}' \quad \leftarrow \text{electric dipole, 회전 관성 moment와 비슷한 정의}
$$
정성적으로 뜻을 이해하자면, 전체적인 전하 분포가 어느 방향으로 얼마나 치우쳐졌는가가 dipole moment이다. 전하가 원점을 중심으로 고르게 분포되어 있으면 dipole moment가 0이고, 한쪽 위치에 쏠려있으면 dipole moment가 커진다. 

---

## H, E 구하기 (Electric Dipole)

$$
\mathbf{H} = \frac{1}{\mu} \nabla \times \mathbf{A} = \frac{ck^2}{4\pi} (\hat{n} \times \mathbf{p}) \frac{e^{ikr}}{r} \left(1 - \frac{1}{ikr}\right)
$$

> → curl 연산할 때 stokes theorem 들어간 것. 자세한 유도를 공부할 필요가 있다. 

$$
\mathbf{E} = \frac{ck^2}{4\pi} \frac{iZ_0}{k} \nabla \times \left\{(\hat{n} \times \mathbf{p}) \underbrace{\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)}_{g(r)}\right\}
$$

$$
g(r) \equiv \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)
$$

$$
\mathbf{E} = \frac{ck^2}{4\pi} \frac{iZ_0}{k} \nabla \times (\hat{n} \times \mathbf{p} g(r))\
$$

$$
= \frac{ik}{4\pi\varepsilon_0} \left[(\mathbf{p}\, g(r) \cdot \nabla)\hat{n} - \mathbf{p}\, g(r)(\nabla \cdot \hat{n}) + \hat{n}(\nabla \cdot \mathbf{p}\, g(r)) - (\hat{n} \cdot \nabla g(r))\mathbf{p}\, \right] 
$$
위의 식 맞는지 확인이 필요. 

최종:

$$
\mathbf{E} = \frac{1}{4\pi\varepsilon_0} \left\{ k^2 (\hat{n} \times \mathbf{p}) \times \hat{n} \frac{e^{ikr}}{r} + \left[3\hat{n}(\hat{n} \cdot \mathbf{p}) - \mathbf{p}\right] \frac{e^{ikr}}{r}(1 - ikr) \right\} \tag{Jackson 9.18}
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

>  이러면 E랑 p랑 평행하나나? → 그건 아닌 듯.

---

## 복사 파워 (Radiated Power)

아래 식은 각도에 따라서 편광된 빛의 세기가 달라지는 현상과 관련있다. 

**Average power:**

$$
\left\langle \frac{dP}{d\Omega} \right\rangle = \frac{1}{2} \text{Re}\left[r^2 \hat{n} \cdot (\mathbf{E} \times \mathbf{H}^*)\right]
$$

$$
\frac{dP}{d\Omega} = \frac{k^4}{32\pi^2} \left(\frac{c}{\varepsilon_0}\right) |(\hat{n} \times \mathbf{p}) \times \hat{n}|^2
$$

# 궁금한 내용

0. 전자기장에서 각운동량 보존 법칙은?
1. $\mathbf{H}$와 $\mathbf{E}$를 $\mathbf{A}$로부터 구할 때 $\mathbf{E} = \frac{iZ_0}{k}\nabla \times \mathbf{H}$ 가 성립하는 이유는? 시간 미분이 있어야 할 것 같은데.
2. Near zone에서 갑자기 시간을 고려 안 하기 시작한 이유는?
3. 식 (9.9)에서 $n=0$ term이 왜 electric dipole에 해당하는가?
4. $\int \mathbf{J} d\mathbf{x}' = -i\omega \int \mathbf{x}' \rho \, d\mathbf{x}'$ 유도에서 부분적분 과정은?

# AI의 보충 설명

## 전자기장의 각운동량 보존 법칙 (궁금한 내용 0번)

> [!tip] Glia의 보충 설명 — 전자기장의 각운동량
> ### 핵심 아이디어: 역학적 유추
>
> 역학에서 각운동량은 $\mathbf{L} = \mathbf{r} \times \mathbf{p}$이다. 전자기장도 **운동량 밀도** $\mathbf{g}$를 가지므로, 각운동량 밀도도 자연스럽게 정의된다.
>
> 전자기장의 운동량 밀도:
> $$
> \mathbf{g} = \mu_0 \varepsilon_0 \mathbf{S} = \varepsilon_0 (\mathbf{E} \times \mathbf{B})
> $$
>
> 전자기장의 **각운동량 밀도**:
> $$
> \boldsymbol{\ell} = \mathbf{r} \times \mathbf{g} = \varepsilon_0 \left[\mathbf{r} \times (\mathbf{E} \times \mathbf{B})\right]
> $$
>
> 총 전자기 각운동량:
> $$
> \mathbf{L}_\text{EM} = \varepsilon_0 \int \mathbf{r} \times (\mathbf{E} \times \mathbf{B}) \, d^3x
> $$
>
> ### 보존 법칙의 구조
>
> 운동량 보존이 맥스웰 응력 텐서 $T_{ij}$를 써서
> $$
> \frac{\partial g_i}{\partial t} + \partial_j T_{ij} = -f_i
> $$
> 꼴이었던 것처럼, 각운동량도 **각운동량 플럭스 텐서** $M_{ij}$를 정의하면:
> $$
> M_{ij} = \varepsilon_{ikl} \, x_k \, T_{lj}
> $$
>
> 보존 법칙:
> $$
> \frac{\partial \ell_i}{\partial t} + \partial_j M_{ij} = -(\mathbf{r} \times \mathbf{f})_i
> $$
>
> 우변 $\mathbf{r} \times \mathbf{f}$는 전자기력이 물질에 가하는 **토크 밀도**다.
>
> 말로 표현하면: **전자기장의 각운동량 감소율 = 경계면으로 나가는 각운동량 플럭스 + 물질이 받는 토크**
>
> ### 에너지·운동량·각운동량 보존의 구조 비교
>
> | 보존량 | 밀도 | 플럭스 | 물질과의 교환 |
> |--------|------|--------|--------------|
> | 에너지 | $u = \frac{1}{2}(\varepsilon_0 E^2 + \frac{1}{\mu_0}B^2)$ | $\mathbf{S}$ (포인팅 벡터) | $\mathbf{J}\cdot\mathbf{E}$ (줄 열) |
> | 운동량 | $\mathbf{g} = \varepsilon_0(\mathbf{E}\times\mathbf{B})$ | $T_{ij}$ (맥스웰 응력 텐서) | $\mathbf{f}$ (로렌츠 힘 밀도) |
> | 각운동량 | $\boldsymbol{\ell} = \mathbf{r}\times\mathbf{g}$ | $M_{ij} = \varepsilon_{ikl}x_k T_{lj}$ | $\mathbf{r}\times\mathbf{f}$ (토크 밀도) |
>
> 구조가 완전히 평행하다!
>
> ### Radiation과의 연결
>
> 원형 편광된 빛(circularly polarized light)은 **스핀 각운동량**을 운반하며, 광자 하나당 $\pm\hbar$의 각운동량을 가진다. 이것이 전자기 각운동량의 양자화된 표현이다.
>
> 또한 Electric dipole radiation ($n=0$ term)은 각운동량을 운반하지 않지만, magnetic dipole이나 electric quadrupole ($n=1$ term 이상)부터는 각운동량을 운반하는 radiation이 나온다. 이것이 양자역학의 **선택 규칙(selection rule)**의 기원이다.

# 연관 학습 노트

[[ED lecture note - Dispersion]]
[[ED lecture note - Momentum Conservation and Stress Tensor]]

# References

강의 ppt 및 Jackson Ch. 9

# 다음 강의

# 필기 원본

![[ED_7thweek_2.pdf]]
![[Pasted image 20260408113007.png]]

![[Pasted image 20260408113011.png]]

![[Pasted image 20260408113018.png]]
![[Pasted image 20260408113023.png]]