---
title: ED lecture note - Fresnel Equations
date: "2026-04-01"
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

[[ED lecture note - Stokes Parameters and Reflection]]

# 오늘의 핵심

- 맥스웰 방정식의 경계 조건 4가지로부터 Fresnel equations 유도
- 전기장이 입사면에 **평행(parallel)** 한 경우와 **수직(perpendicular)** 한 경우를 나눠 처리
- Normal incidence ($\theta = 0$)에서 굴절률 차이가 클수록 반사 잘 됨
- Brewster angle: parallel 편광 성분이 반사되지 않는 각도 → $\tan\theta_B = n'/n$

# 필기 내용

## 1. 경계 조건과 Maxwell 방정식

이전까지는 반사·굴절에 의한 **각도**를 공부했다.
이제는 입사·굴절·반사 파의 **전기장 세기 관계**를 알아보자.
![[Pasted image 20260401134111.png]]
> [!note] notation
> - $k$ : 입사파 wave vector ($\mu\varepsilon$ medium)
> - $k'$ : 굴절파 wave vector ($\mu'\varepsilon'$ medium)
> - $k''$ : 반사파 wave vector ($\mu\varepsilon$ medium)
> - 경계면에서 바깥으로 나가는 방향의 법선 벡터: $\hat{n}$
> - 입사파 관련 기호: 프라임 없음 ( )
> - 굴절파: 프라임 1개 ( ' )
> - 반사파: 프라임 두 개 ( '' )
> - $\mathbf{B}_0 = \sqrt{\mu\varepsilon}\,\frac{\mathbf{k}\times\mathbb{E}}{k}$

> [!tip] 간단한 비례관계를 외우자
> $$
> k \propto \sqrt{\mu\epsilon} \propto n \propto \frac{1}{v}
> $$
> $$
> \mathbf{B}_0 \propto \mathbf{k} \times \mathbf{E}
> $$

경계 조건의 출처가 되는 Maxwell 방정식:

$$
\begin{cases}
\nabla\cdot\mathbf{D} = 0 \\
\nabla\cdot\mathbf{B} = 0 \\
\nabla\times\mathbf{E} = 0 \\
\nabla\times\mathbf{H} = 0
\end{cases}
$$

> [!tip] Glia의 보충 설명 — 왜 curl 항도 0인가?
> 
> 이 식은 맥스웰 방정식 자체가 0이라는 뜻이 **아니다**. 원래 맥스웰 방정식은:
> 
> $$
> \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{H} = \mathbf{J}_f + \frac{\partial \mathbf{D}}{\partial t}
> $$
> 
> 경계 조건을 유도할 때는 **경계면에 수직인 아주 얇은 루프**에 스토크스 정리를 적용한다:
> 
> $$
> \oint \mathbf{E}\cdot d\vec{l} = -\int \frac{\partial \mathbf{B}}{\partial t}\cdot d\vec{a}
> $$
> 
> 루프의 높이를 0으로 보내면, **루프가 둘러싸는 면적이 0**이 된다. $\frac{\partial \mathbf{B}}{\partial t}$는 유한한 값이므로 면적분이 사라진다. $\nabla \times \mathbf{H}$도 마찬가지로, 자유 전류 $\mathbf{J}_f = 0$ (유전체)이고 $\frac{\partial \mathbf{D}}{\partial t}$도 유한하므로 면적 → 0 극한에서 기여가 사라진다.
> 
> 즉, **"경계 조건 유도의 극한에서 우변이 사라진다"**는 의미이지, 공간 전체에서 curl이 0이라는 뜻이 아니다.

이를 경계에 적용하면:

$$
\begin{cases}
\text{(i)}\quad \left[\varepsilon(\mathbb{E}_0 + \mathbb{E}_0'') - \varepsilon'\mathbb{E}_0'\right]\cdot\hat{n} = 0 \quad\leftarrow \nabla\cdot\mathbf{D}=0 \\
\text{(ii)}\quad \left[\mathbf{k}\times\mathbb{E}_0 + \mathbf{k}''\times\mathbb{E}_0'' - \mathbf{k}'\times\mathbb{E}_0'\right]\cdot\hat{n} = 0 \quad\leftarrow \nabla\cdot\mathbf{B}=0 \\
\text{(iii)}\quad \left[\mathbb{E}_0 + \mathbb{E}_0'' - \mathbb{E}_0'\right]\times\hat{n} = 0 \quad\leftarrow \nabla\times\mathbf{E}=0 \\
\text{(iv)}\quad \left[\frac{1}{\mu}(\mathbf{k}\times\mathbb{E}_0 + \mathbf{k}''\times\mathbb{E}_0'') - \frac{1}{\mu'}(\mathbf{k}'\times\mathbb{E}_0')\right]\times\hat{n} = 0 \quad\leftarrow \nabla\times\mathbf{H}=0
\end{cases}
$$

- 식 (i)와 (ii): $\hat{n}$이 들어가므로 → $\mathbf{D}$와 $\mathbf{B}$의 **normal component**는 continuous 하다. 
- 식 (iii)와 (iv): $\times\hat{n}$이 들어가므로 → $\mathbf{E}$와 $\mathbf{H}$의  **tangential component**는 continuous 하다. 

> [!tip] 용어 정리
> - **normal component**: 경계면에 수직 방향. $\hat{n}$과 평행.
> - **tangential component**: 경계면의 접선 방향. $\hat{n}$과 수직.

### 경계 조건 유도 방법, divergence가 있는 식에 대해 : (i), (ii)

$$
\int \nabla\cdot\mathbf{D}\,dv = \oint_{\partial V}\mathbf{D}\cdot d\vec{a} = 0
$$

를 이용. 높이가 아주 낮은 원기둥을 잡는다. 옆면의 영향은 무시, 위 아래 뚜껑 면적만 적분한다. 
![[Pasted image 20260401135604.png]]
$$
\oint \mathbf{D}\cdot d\vec{a} = A\left[\mathbb{E}_0'\cdot\hat{n} - (\mathbb{E}_0 + \mathbb{E}_0'')\cdot\hat{n}\right] = 0
$$
![[Pasted image 20260401135633.png]]


여기서 $A$는 원판 뚜껑의 면적.
- $\mu'\varepsilon'$ 매질에서는 $d\vec{a}$로 $A\cdot\hat{n}$ 이용
- $\mu\varepsilon$ 매질에서는 $d\vec{a}$로 $-A\cdot\hat{n}$ 이용

### 경계 조건 유도 방법, curl이 있는 식에 대해 : (iii), (iv)

면의 양쪽에서 tangential한 성분이 같아야 한다. ($\hat{n}$과 수직인 성분이 같아야 한다.)

$$
(\mathbb{E}_0 + \mathbb{E}_0'')\times\hat{n} = \mathbb{E}_0'\times\hat{n}
$$
좌변은 $\mu\varepsilon$ 매질쪽 tangential component, 우변은  $\mu'\varepsilon'$ 매질 쪽 tangential component. 

$$
\left[\mathbb{E}_0 + \mathbb{E}_0'' - \mathbb{E}_0'\right]\times\hat{n} = 0
$$

식 (i) 부터 (iv)까지 모두 반대면 매질의 성분은 음수 기호가 붙는다는 공통점이 있다. 

---

## 2. 두 가지 편광 상태

두 가지 편광 상태를 생각할 수 있다.
![[Pasted image 20260401140040.png]]

- **Electric field is parallel to the plane of incidence**
- **Electric field is perpendicular to the plane of incidence**

> [!note] Plane of incidence 정의
> $\mathbf{k}$ 벡터와 $\hat{n}$ 벡터가 있는 면. 즉 그림이 그려져 있는 종이(모니터) 표면이다. 

---

## 3. Parallel case (E가 입사면에 평행한 경우)

![[Pasted image 20260401140232.png]]

식 (iii)와 (iv)를 적용.

> [!caution] 주의
> 볼드체가 아닌 글자는 **스칼라** 값. 그리고 부호 영향이 아주 헷갈린다. tangential component가 x축에 대해 음수인지 아닌지를 그림으로 직접 확인하자. 

식 (iii)으로부터 → $\mathbb{E}_0$의 tangential 성분은 음수, $\mathbb{E}_0'$의 tangential 성분도 음수, $\mathbb{E}_0''$만 양수:

$$
(E_0'' - E_0)\cos\theta = -E_0'\cos\phi
$$

$$
\Rightarrow E_0'' = -\frac{\cos\phi}{\cos\theta}E_0' + E_0
$$

[[Snell's Law]] 적용. 이것은 $\phi$를 수식에서 없애버리기 위해서 이다. 식에 입사각 $\theta$ 만을 남길 것이다. 

$$
\frac{\sin\theta'}{\sin\phi} = \frac{n'}{n}, \qquad \cos\phi = \sqrt{1 - \frac{n^2}{n'^2}\sin^2\theta}
$$

따라서:

$$
E_0'' = \bigg( -\frac{1}{\cos\theta}\sqrt{1 - \frac{n^2}{n'^2}\sin^2\theta}\, \bigg) E_0' + E_0
\tag{1}
$$

식 (iv) $\left[\frac{1}{\mu}(\mathbf{k}\times\mathbb{E}_0 + \mathbf{k}''\times\mathbb{E}_0'') - \frac{1}{\mu'}(\mathbf{k}'\times\mathbb{E}_0')\right]\times\hat{n} = 0$ 로부터 
→ $\mathbf{B}$들의 방향이 입사·굴절·반사파 전부 같다. $\mathbf{B}\times\hat{n}$의 부호도 같음.

$\frac{1}{\mu}k \propto \sqrt{\varepsilon/\mu}$를 이용:

$$
\sqrt{\frac{\varepsilon}{\mu}}(E_0 + E_0'') - \sqrt{\frac{\varepsilon'}{\mu'}}E_0' = 0
\tag{2}
$$

식 (1), (2)를 연립하면:

$$
\Rightarrow \sqrt{\frac{\varepsilon'}{\mu'}}E_0' = \sqrt{\frac{\varepsilon}{\mu}}\left(2E_0 - \frac{E_0'}{\cos\theta}\sqrt{1 - \frac{n^2}{n'^2}\sin^2\theta}\right)
$$

이제 $E_0'$와 $E_0$의 비율, 투과율을 알아보자.

$n \propto \sqrt{\mu\varepsilon}$이고 $\sqrt{\varepsilon/\mu} \propto n/\mu$이므로:

$$
\frac{E_0'}{E_0} = \frac{2\sqrt{\frac{\varepsilon}{\mu}}}{\sqrt{\frac{\varepsilon'}{\mu'}}\left(1 + \frac{1}{\cos\theta}\sqrt{1 - \frac{n^2}{n'^2}\sin^2\theta}\right)}
$$
$$
= \frac{2\frac{n}{\mu}\cos\theta}{\frac{n'}{\mu'}\left(\cos\theta + \sqrt{1 + \frac{n^2}{n'^2}\sin^2\theta}\right)}
= \frac{2nn'\cos\theta}{\frac{\mu}{\mu'}n'^2\cos\theta + n'\sqrt{n'^2 + n^2\sin^2\theta}}
\tag{3}
$$
반사율도 알아보자. 
$$
\frac{E_0''}{E_0} = \frac{\frac{\mu}{\mu'}n'^2\cos\theta - n\sqrt{n'^2 - n^2\sin^2\theta}}{\frac{\mu}{\mu'}n'^2\cos\theta + n\sqrt{n'^2 - n^2\sin^2\theta}}
\tag{4}
$$

---

## 4. Normal incidence (수직 입사, $\theta = 0$)

만약 빛이 표면에 **똑바로 쏘아진다면**, $\theta = 0$이고:

$$
\frac{E_0'}{E_0} = \frac{2}{\sqrt{\frac{\mu\varepsilon'}{\mu'\varepsilon}} + 1} \xrightarrow{\mu'=\mu} \frac{2n}{n'+n}
\tag{5}
$$

$$
\frac{E_0''}{E_0} = \frac{\sqrt{\frac{\mu\varepsilon'}{\mu'\varepsilon}} - 1}{\sqrt{\frac{\mu\varepsilon'}{\mu'\varepsilon}} + 1} \xrightarrow{\mu'=\mu} \frac{n'-n}{n'+n}
\tag{6}
$$

> [!tip] 물리적 해석
> - 첫 번째·두 번째 매질의 굴절률이 클수록 반사가 잘 된다.
> - $n' > n$일 경우, $E_0''$와 $E_0$의 방향이 같다. 이는 반사되면서 **phase reversal**이 일어났음을 의미.

---

## 5. Perpendicular case (E가 입사면에 수직한 경우)
![[Pasted image 20260401141033.png]]
식 (iii)와 (iv)를 이용하면:

$$
\begin{cases}
E_0 + E_0'' - E_0' = 0 \\
\sqrt{\frac{\varepsilon}{\mu}}(E_0'' - E_0)\cos\theta + \sqrt{\frac{\varepsilon'}{\mu'}}E_0'\cos\phi = 0
\end{cases}
$$

두 번째 식을 정리:

$$
\sqrt{\frac{\varepsilon}{\mu}}(E_0'' - 2E_0)\cos\theta + \sqrt{\frac{\varepsilon'}{\mu'}}E_0'\cos\phi = 0
$$

$$
\frac{E_0'}{E_0} = \frac{2\sqrt{\frac{\varepsilon}{\mu}}\cos\theta}{\sqrt{\frac{\varepsilon}{\mu}}\cos\theta + \sqrt{\frac{\varepsilon'}{\mu'}}\cos\phi}
$$

잘 정리하면:

$$
\frac{E_0'}{E_0} = \frac{2n\cos\theta}{n\cos\theta + \frac{\mu}{\mu'}\sqrt{n'^2 - n^2\sin^2\theta}}
\tag{7}
$$

$$
\frac{E_0''}{E_0} = \frac{n\cos\theta - \frac{\mu}{\mu'}\sqrt{n'^2 - n^2\sin^2\theta}}{n\cos\theta + \frac{\mu}{\mu'}\sqrt{n'^2 - n^2\sin^2\theta}}
\tag{8}
$$

---

## 6. Brewster Angle

반사된 빛은 주로 반사 표면에 **평행한 방향으로 편광**되어 있다.
Incident plane에 평행한 빛은 잘 반사되지 않기 때문이다.
이쪽 편광이 **완전히 반사되지 않는** 각도를 **Brewster angle**이라 부른다.

앞서 본 식에서 $E_0''/E_0 = 0$으로 놓는다. 식 (4)의 분자를 0으로 만드는 각도가 존재한다. 

$$
\frac{\mu}{\mu'}n'^2\cos\theta = n\sqrt{n'^2 - n^2\sin^2\theta}
$$

$\mu = \mu'$로 두면:

$$
\frac{n'^2}{n^2}\cos^2\theta = 1 - \frac{n^2}{n'^2}\sin^2\theta
$$

이것이 그 각도다. $\theta_B$라 두고, $\pi = n'/n$으로 정의하면:

$$
\pi^2\cos^2\theta_B = \cos^2\theta_B + \sin^2\theta_B - \pi^{-2}\sin^2\theta_B
$$

$$
\tan^2\theta_B = \frac{\pi^2 - 1}{1 - \pi^{-2}} = \pi^2
$$

$$
\therefore \tan\theta_B = \frac{n'}{n}
\tag{9}
$$

![[Pasted image 20260401141440.png]]



> [!tip] 반사율의 각도 의존성
> - $\theta_B$ 이전에는 반사율이 낮은 상태에서 감소
> - $\theta_B$ 이후에는 반사율이 급격히 증가 (직관적으로 생각해도, 표면에 비스듬히 빛을 입사할 때 반사가 더 잘 된다. )

# 궁금한 내용

> 왜 식 (i)와 (ii)는 유도에 잘 이용하지 않지?

# AI의 보충 설명

> [!tip] 왜 식 (i)와 (ii)는 Fresnel 유도에 잘 이용하지 않나?
> 
> 핵심은 **식 (i), (ii)가 주는 정보가 (iii), (iv)에 비해 덜 유용하기 때문**이다.
> 
> **식 (i), (ii)는 normal component 조건**이다.
> - **Perpendicular case**: $\mathbb{E}_0$가 경계면에 완전히 평행하므로 $\mathbb{E}_0\cdot\hat{n} = 0$. 식 (i)가 $0=0$이 되어 아무 정보도 주지 않는다.
> - **Parallel case**: $\mathbb{E}_0$의 normal 성분이 존재하긴 하지만, 이를 이용하면 $\cos\theta$, $\cos\phi$ 등이 얽혀서 결국 (iii), (iv)로 얻는 것과 중복되거나 덜 깔끔한 형태가 나온다.
> 
> **식 (iii), (iv)는 tangential component 조건**이다.
> - 두 편광 case 모두에서 tangential 성분은 0이 아니므로, 항상 non-trivial한 조건을 준다.
> - 특히 식 (iv)는 $\mathbf{H} \propto \frac{1}{\mu}\mathbf{k}\times\mathbf{E}$를 통해 자연스럽게 $\sqrt{\varepsilon/\mu}$와 amplitude의 관계를 연결해주어, $E_0, E_0', E_0''$ 사이의 비율을 바로 얻을 수 있다.
> 
> **결론**: 식 (i), (ii)는 편광 방향에 따라 trivial해지거나 (iii), (iv)와 중복된다. (iii), (iv)는 두 편광 case 모두에서 항상 독립적인 non-trivial 조건을 주기 때문에 Fresnel 유도의 핵심이 된다.

# 연관 학습 노트


# References


# 다음 강의

[[ED lecture note - Dispersion]]

# 원본 필기 이미지

[[ED_6thweek_1.pdf]]
![[Pasted image 20260401141352.png]]![[Pasted image 20260401141356.png]]

![[Pasted image 20260401141403.png]]![[Pasted image 20260401141407.png]]