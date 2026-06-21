---
title: ED lecture note - Magnetic Dipole Radiation
date: "2026-04-18"
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

[[ED lecture note - Electric Dipole Radiation]]

# 오늘의 핵심

- Magnetic dipole radiation의 vector potential은 multipole expansion의 **1차 (n=1) 비대칭 항**에서 나온다.
- 자기 쌍극자 모멘트: $\mathbf{m} = \frac{1}{2}\int (\mathbf{x}' \times \mathbf{J})\, d^3x'$
- Magnetic dipole의 **H-field**는 Electric dipole의 **E-field**와 수학적으로 같은 형태이다. (이중성)
- 복사 파워: $\left\langle \frac{dP}{d\Omega} \right\rangle \propto k^4$ (Electric dipole과 동일한 주파수 의존성)

# 필기 내용

## Multipole Expansion 복습

지난 시간, Green function을 사용한 정확한 vector potential의 식은

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \int d^3x'\, \frac{\mathbf{J}(\mathbf{x}')}{|\mathbf{x} - \mathbf{x}'|} e^{ik|\mathbf{x}-\mathbf{x}'|}
$$

이었다. 
지난 시간에 이 식을 expand할 때는 $e^{ik|\mathbf{x}-\mathbf{x}'|}$ 부분에서 $|\mathbf{x}-\mathbf{x}'| \simeq r - \hat{n}\cdot\mathbf{x}'$ 근사를 테일러 전개하고, $\frac{1}{|\mathbf{x}-\mathbf{x}'|}$는 그냥 $\frac{1}{r}$로 두었다.

그러면 이렇게 multipole expansion이 나왔다:

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \cdot \frac{e^{ikr}}{r} \int d^3x' \sum_{n=0}^{\infty} \frac{(-ik)^n}{n!} (\hat{n}\cdot\mathbf{x}')^n \mathbf{J}(\mathbf{x}') \qquad \text{(Jackson 9.9)}
$$

Jackson에서는 여기에 만족하지 않고, $\frac{1}{|\mathbf{x}-\mathbf{x}'|}$를 더 정확하게 근사한다:

$$
\frac{1}{|\mathbf{x}-\mathbf{x}'|} \simeq \frac{1}{r - \hat{n}\cdot\mathbf{x}'} = \frac{1}{r} \cdot \frac{1}{1 - \frac{\hat{n}\cdot\mathbf{x}'}{r}}
$$

이때 $\frac{\hat{n}\cdot\mathbf{x}'}{r}$가 작은 값 $\delta$일 때, $\frac{1}{1-\delta} \simeq 1+\delta$의 테일러 전개를 적용하면:

$$
\frac{1}{|\mathbf{x}-\mathbf{x}'|} \simeq \frac{1}{r}\left(1 + \frac{\hat{n}\cdot\mathbf{x}'}{r}\right)
$$

이걸 적용하면 더 정확한 multipole expansion이 나온다.

Jackson 9.9 식에서 $\frac{1}{r}$ 대신 $\frac{1}{r}\left(1 + \frac{\hat{n}\cdot\mathbf{x}'}{r}\right)$을 대입:

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \left[\frac{e^{ikr}}{r}\left(1 + \frac{\hat{n}\cdot\mathbf{x}'}{r}\right)\right] \int d^3x' \sum_{n=0}^{\infty} \frac{(-ik)^n}{n!} (\hat{n}\cdot\mathbf{x}')^n \mathbf{J}(\mathbf{x}')
$$

## 1차항 분리: Symmetric & Antisymmetric Part

이제부터 시작이다. $(\hat{n}\cdot\mathbf{x}')$에 대해 1차인 부분을 모아 구한다.

$$
\mathbf{A}(\mathbf{x}) = \frac{\mu_0}{4\pi} \cdot \frac{e^{ikr}}{r}\left(\frac{1}{r} - ik\right) \int \mathbf{J}(\mathbf{x}')\,(\hat{n}\cdot\mathbf{x}')\,d^3x' \quad \tag{Jackson 9.30}
$$

이제 적분 내부 항 $\mathbf{J}(\hat{n}\cdot\mathbf{x}')$에서, $\mathbf{x}'$와 $\mathbf{J}$의 순서에 대해 대칭인 항과 비대칭인 항을 분리한다:

$$
\mathbf{J}(\hat{n}\cdot\mathbf{x}') = \frac{1}{2}\mathbf{J}(\hat{n}\cdot\mathbf{x}') + \frac{1}{2}\mathbf{J}(\hat{n}\cdot\mathbf{x}') + \left\{\frac{1}{2}\mathbf{x}'(\hat{n}\cdot\mathbf{J}) - \frac{1}{2}\mathbf{x}'(\hat{n}\cdot\mathbf{J})\right\}
$$

- **대칭인 항**: $\frac{1}{2}\mathbf{J}(\hat{n}\cdot\mathbf{x}') + \frac{1}{2}\mathbf{x}'(\hat{n}\cdot\mathbf{J})$
- **비대칭인 항**: $\frac{1}{2}\mathbf{J}(\hat{n}\cdot\mathbf{x}') - \frac{1}{2}\mathbf{x}'(\hat{n}\cdot\mathbf{J})$

비대칭인 항은 $\mathbf{J}$와 $\mathbf{x}'$의 위치를 바꾸면 부호가 바뀜을 알 수 있다. 비대칭 항을 보다 보면, **BAC-CAB 공식**을 쓸 수 있음을 깨닫는다.

$$
\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = \mathbf{B}(\mathbf{A}\cdot\mathbf{C}) - \mathbf{C}(\mathbf{A}\cdot\mathbf{B})
$$

여기서 $\mathbf{J}$가 $\mathbf{B}$, $\hat{n}$이 $\mathbf{A}$, $\mathbf{x}'$가 $\mathbf{C}$이면:

$$
\frac{1}{2}\mathbf{J}(\hat{n}\cdot\mathbf{x}') - \frac{1}{2}\mathbf{x}'(\hat{n}\cdot\mathbf{J}) = \frac{1}{2}\hat{n}\times(\mathbf{J}\times\mathbf{x}') = \frac{1}{2}(\mathbf{x}'\times\mathbf{J})\times\hat{n}
$$

## Magnetization과 Magnetic Dipole Moment

우리는 magnetization을 $\mathcal{M} = \frac{1}{2}(\mathbf{x}'\times\mathbf{J})$라고 정의한다. 그리고 magnetic dipole moment는 magnetization을 적분한 값이다:

$$
\mathbf{m} = \int \mathcal{M}\, d^3x' = \frac{1}{2}\int (\mathbf{x}'\times\mathbf{J})\, d^3x'
$$

식 9.30에서 비대칭 항을 분리한 것이 "magnetic dipole moment"의 기여이다:

$$
\mathbf{A}(\mathbf{x}) = \frac{-ik\mu_0}{4\pi} \cdot \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right) \int \frac{1}{2}(\mathbf{x}'\times\mathbf{J})\times\hat{n}\, d^3x'
$$

$$
= \frac{-ik\mu_0}{4\pi} \cdot \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)\left[\int \frac{1}{2}(\mathbf{x}'\times\mathbf{J})\, d^3x'\right]\times\hat{n}
$$

$\mathbf{m}\times\hat{n}$을 순서를 뒤집고 부호를 정리하면,

$$
\mathbf{A}_{m\text{-di}} = \frac{ik\mu_0}{4\pi} (\hat{n}\times\mathbf{m}) \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right) \quad \tag{Jackson 9.33}
$$

## H-field와 E-field: Electric Dipole과의 대칭성

어라? 이 식의 형태를 본 것만 같다. Electric dipole에서 자기장이 이렇게 생겼었다:

$$
\mathbf{H}_{e\text{-di}} = \frac{ck^2}{4\pi} (\hat{n}\times\mathbf{p}) \frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)
$$

이어서, magnetic dipole에서 **H-field**는 electric dipole에서 **E-field**와 닮았다. 왜냐면:

- $\mathbf{A}_{m\text{-di}}$와 $\mathbf{H}_{e\text{-di}}$가 닮음
- $\mathbf{H}_{m\text{-di}} = \frac{1}{\mu}\nabla\times\mathbf{A}_{m\text{-di}}$, $\quad \mathbf{E}_{e\text{-di}} = \frac{iZ_0}{k}\nabla\times\mathbf{H}_{e\text{-di}}$

이기 때문에, 따라서:

$$
\mathbf{H}_{m\text{-di}} = \frac{1}{4\pi}\left\{k^2(\hat{n}\times\mathbf{m})\times\hat{n}\,\frac{e^{ikr}}{r} + \left[3\hat{n}(\hat{n}\cdot\mathbf{m}) - \mathbf{m}\right]\left(\frac{1}{r^3} - \frac{ik}{r^2}\right)e^{ikr}\right\} \quad \tag{Jackson 9.35}
$$



## E-field 유도: Jackson 9.36

그리고 $\mathbf{E}_{m\text{-di}}$와 $\mathbf{H}_{e\text{-di}}$도 닮은 꼴이 된다. 
왜냐면! $\mathbf{H}_{m\text{-di}}$에서 $\frac{e^{ikr}}{r}$이 있는 term만 분리해서 보면:

$$
\mathbf{H}_{m\text{-di}} = \frac{k^2}{4\pi} (\hat{n}\times\mathbf{m})\times\hat{n}\, \frac{e^{ikr}}{r}
$$
이건 $\mathbf{A}_{e\text{-di}}$와 닮았다. 
$$
\mathbf{A}_{e\text{-di}} = -\frac{i\mu_0\omega}{4\pi} \mathbf{p} \cdot \frac{e^{ikr}}{r}
$$

따라서 $\mathbf{H}_{m\text{-di}}$와 $\mathbf{A}_{e\text{-di}}$가 닮았으며, 

$$
\mathbf{E}_{m\text{-di}} = \frac{iZ_0}{k}\nabla\times\mathbf{H}_{m\text{-di}}, \qquad \mathbf{H}_{e\text{-di}} = \frac{1}{\mu}\nabla\times\mathbf{A}_{e\text{-di}}
$$
이런 식으로 또 컬을 이용해 유도하므로, $\mathbf{H}_{e\text{-di}}$를 변형해서 $\mathbf{E}_{m\text{-di}}$를 찾을 수 있다. 

 $\mathbf{H}_{e\text{-di}}$가 $\frac{ck^2}{4\pi}(\hat{n}\times\mathbf{p})\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)$이니까, 계수를 맞춰주고 $\mathbf{p}$ 자리에 $(\hat{n}\times\mathbf{m})\times\hat{n}$을 넣어준다면:

$$
\mathbf{E}_{m\text{-di}} = -\frac{Z_0}{4\pi}k^2\left[\hat{n}\times\left\{(\hat{n}\times\mathbf{m})\times\hat{n}\right\}\right]\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)
$$

이때, BAC-CAB 공식으로 정리하면:

$$
\hat{n}\times\left\{(\hat{n}\times\mathbf{m})\times\hat{n}\right\} = (\hat{n}\times\mathbf{m})(\hat{n}\cdot\hat{n}) - \hat{n}\{(\hat{n}\times\mathbf{m})\cdot\hat{n}\}
$$

$$
= \hat{n}\times\mathbf{m} - 0
$$

을 대입!

$$
\text{(Jackson 9.36)} \quad \mathbf{E}_{m\text{-di}} = -\frac{Z_0}{4\pi}k^2(\hat{n}\times\mathbf{m})\frac{e^{ikr}}{r}\left(1 - \frac{1}{ikr}\right)
$$

하… 교수님도 교과서도, 이렇게 자세히 유도법을 알려준 적이 없다.






### 유도 단계 비교

**$\mathbf{p}$를 $\frac{1}{c}\mathbf{m}$으로 바꾸는 것이 핵심**

유도 단계: $\mathbf{A} \to \mathbf{H} \to \mathbf{E}$

| Electric dipole moment radiation                                                                                                                                                                                            | Magnetic dipole moment radiation                                                                                                                                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\mathbf{H}_{e} = \dfrac{ck^2}{4\pi}(\hat{n}\times\mathbf{p})\dfrac{e^{ikr}}{r}\left(1-\dfrac{1}{ikr}\right)$                                                                                                               | $\mathbf{A}_{m} = \dfrac{ik\mu_0}{4\pi}(\hat{n}\times\mathbf{m})\dfrac{e^{ikr}}{r}\left(1-\dfrac{1}{ikr}\right)$                                                                                               |
| $\mathbf{E}_{e} = \dfrac{1}{4\pi\varepsilon_0}\left\{k^2(\hat{n}\times\mathbf{p})\times\hat{n}\dfrac{e^{ikr}}{r} + [3\hat{n}(\hat{n}\cdot\mathbf{p})-\mathbf{p}]\left(\dfrac{1}{r^3}-\dfrac{ik}{r^2}\right)e^{ikr}\right\}$ | $\mathbf{H}_{m} = \dfrac{1}{4\pi}\left\{k^2(\hat{n}\times\mathbf{m})\times\hat{n}\dfrac{e^{ikr}}{r} + [3\hat{n}(\hat{n}\cdot\mathbf{m})-\mathbf{m}]\left(\dfrac{1}{r^3}-\dfrac{ik}{r^2}\right)e^{ikr}\right\}$ |
| $\mathbf{A}_{e} = -\dfrac{i\mu_0\omega}{4\pi}\mathbf{p}\dfrac{e^{ikr}}{r}$                                                                                                                                                  | $\mathbf{H}_{m} \approx \dfrac{k^2}{4\pi}(\hat{n}\times\mathbf{m})\times\hat{n}\dfrac{e^{ikr}}{r}$                                                                                                             |
| $\mathbf{H}_{e} = \dfrac{ck^2}{4\pi}(\hat{n}\times\mathbf{p})\dfrac{e^{ikr}}{r}\left(1-\dfrac{1}{ikr}\right)$                                                                                                               | $\mathbf{E}_{m} = -\dfrac{Z_0}{4\pi}k^2(\hat{n}\times\mathbf{m})\dfrac{e^{ikr}}{r}\left(1-\dfrac{1}{ikr}\right)$                                                                                               |

### H와 E의 방향 비교

이제 양쪽 케이스에서 $\mathbf{H}$와 $\mathbf{E}$의 방향에 집중:
![[Pasted image 20260418215140.png]]

| | Electric dipole moment | Magnetic dipole moment | 설명 |
|:---:|:---|:---|:---|
| $\mathbf{H}$ | $\hat{n}\times\mathbf{p}$ 방향 | $\mathbf{E}$: $\hat{n}\times\mathbf{m}$ 방향 | $\hat{n}$, 진행 방향과 직교 |
| $\mathbf{E}$ | $(\hat{n}\times\mathbf{p})\times\hat{n}$, $3\hat{n}(\hat{n}\cdot\mathbf{p})-\mathbf{p}$ 방향 | $\mathbf{H}$: $(\hat{n}\times\mathbf{m})\times\hat{n}$, $3\hat{n}(\hat{n}\cdot\mathbf{m})-\mathbf{m}$ 방향 | dipole moment가 $\hat{n}$과 수직한 성분의 방향 |
## E-d 와 M-d의 복사 비교

> [!info] E-d와 M-d의 복사 방향 비교
>
> - **E-d**: 전기장이 dipole moment와 $\hat{n}$으로 정의된 면 위에 놓임. **파란색 벡터**.
>   $$\mathbf{E}_{e\text{-di}} \propto (\hat{n}\times \mathbf{d})\times\hat{n}$$
> - **M-d**: 전기장이 dipole moment와 $\hat{n}$으로 정의된 면에 수직. **빨간색 벡터**.
>   $$\mathbf{E}_{m\text{-di}} \propto |\hat{n}\times \mathbf{d}|$$


그러나 공통점이 있으니, magnetic dipole moment에서도:

$$
\left\langle \frac{dP}{d\Omega} \right\rangle \propto k^4
$$

이다.

# 궁금한 내용

# AI의 보충 설명

# 연관 학습 노트

# References

Jackson, Classical Electrodynamics, Chapter 9 (식 9.9, 9.30, 9.33, 9.35)

# 다음 강의

[[ED lecture note - Electric Quadrupole Radiation]]

# 필기 원본

![[ED_8thweek_1.pdf]]
