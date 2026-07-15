---
title: SAXS(Small-Angle X-ray Scattering)
date: 2026-06-21
subject: physics
tags:
  - study
  - concept
  - question
class: study
---

# SAXS

## Overview

**SAXS** (Small-Angle X-ray Scattering)는 용액 상태의 생체분자/colloid에 X-ray를 쏘아, **작은 산란각**에 담긴 신호로부터 분자의 크기·형상·분자 간 상호작용을 알아내는 기법이다. X-ray가 전자와 상호작용해 산란되며, 측정되는 강도 $I(q)$는 산란각 대신 **momentum transfer** $q$의 함수로 표현된다.

핵심 통찰: **큰 구조는 작은 각도로, 작은 디테일은 큰 각도로** 산란된다 (Bragg의 역수 관계). 단백질(수 nm)은 원자 간 거리(Å)보다 크므로 전체 형상 정보가 작은 $q$에 담긴다. 그래서 "small-angle".

> [!info] 결정학과의 차이
> 결정학은 분자를 격자에 고정·정렬시켜 날카로운 회절 spot을 얻는다. SAXS는 용액 속에서 분자가 **무작위 방향으로 회전**하므로, 모든 방향에 대해 평균된 부드러운 $I(q)$ 곡선을 얻는다. 정보량은 적지만 **결정화 없이 자연 상태**를 본다는 것이 결정적 장점.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $q$ | Momentum transfer, $\mid \mathbf{k}_f - \mathbf{k}_i \mid$ (nm⁻¹) |
| $2\theta$ | Scattering angle |
| $\lambda$ | X-ray wavelength |
| $R_g$ | Radius of gyration |
| $I(0)$ | Forward scattering intensity (∝ molecular weight) |
| $P(q)$ | Form factor (single-molecule shape) |
| $S(q)$ | Structure factor (inter-molecular arrangement) |
| $g(r)$ | Pair correlation function |
| $P(r)$ | Pair distance distribution function |
| $D_{max}$ | Maximum dimension of molecule |

## Key Points

### Momentum transfer $q$

![[Pasted image 20260622092236.png]]
이미지 출처: https://link.springer.com/chapter/10.1007/978-3-662-48606-1_12/figures/1

산란 과정에서 광자가 주고받은 운동량의 변화량. 입사/산란 광자의 파동벡터를 $\mathbf{k}_i, \mathbf{k}_s$라 하면

$$
\mathbf{q} = \mathbf{k}_s - \mathbf{k}_i
\tag{1}
$$

SAXS는 **elastic scattering**이라 $\mid \mathbf{k}_i \mid = \mid \mathbf{k}_s \mid = 2\pi/\lambda$, 방향만 바뀐다. 이등변삼각형 기하로부터

$$
q = \frac{4\pi \sin\theta}{\lambda}
\tag{2}
$$

운동량 보존에 의해 이 광자 운동량 변화는 **시료(전자 분포)가 받은 운동량과 크기가 같다**. 따라서 $1/q$가 곧 **탐침하는 길이 스케일**이 된다. 작은 $q$ = 큰 구조, 큰 $q$ = 작은 디테일. 푸리에 변환을 생각. 

### $I(q)$ 곡선에서 읽어내는 정보 (작은 $q$ → 큰 $q$)
![[Pasted image 20260622092344.png]]
이미지 출처: https://www.nature.com/articles/nprot.2014.116/figures/1


- **Guinier 영역 (가장 작은 $q$)**: 크기와 분자량.
$$
I(q) \approx I(0)\,\exp\!\left(-\frac{q^2 R_g^2}{3}\right)
\tag{3}
$$
$\ln I(q)$ 대 $q^2$ plot이 직선(**Guinier plot**)이며, 기울기에서 $R_g$, 절편에서 $I(0)$ (∝ 분자량). 직선에서 벗어나면 위로 휨 = aggregation, 아래로 휨 = 반발 상호작용.



### $I(q) = P(q)S(q)$의 유도
$I(q)$는 scattering intensity
$P(q)$는 단일 분자 하나의 전자 배치로 인한 factor
$S(q)$는 여러 분자 사이의 상대적인 위치(용액의 구조)로 인한 factor

$I(q) = P(q)S(q)$를 유도하는 방법
핵심은 **산란 진폭(amplitude)이 모든 산란 중심의 기여를 위상까지 포함해 더한 것**이고, 측정 강도는 그 절댓값 제곱이라는 데 있다.

동일한 분자 $N$개가 위치 $\mathbf{R}_j$에 있고, 분자 하나의 form amplitude를 $f(\mathbf{q})$라 하자. 전체 산란 진폭은 각 분자 위치의 위상 인자 $e^{-i\mathbf{q}\cdot\mathbf{R}_j}$를 곱해 더한 것:

$$
A(\mathbf{q}) = f(\mathbf{q}) \sum_{j=1}^{N} e^{-i\mathbf{q}\cdot\mathbf{R}_j}
\tag{4}
$$

**핵심 가정**: 분자의 방향(내부 구조 $f$)과 위치 $\mathbf{R}_j$가 서로 독립이면 $f(\mathbf{q})$를 합 밖으로 뺄 수 있다. 강도는

$$
I(\mathbf{q}) = \mid A(\mathbf{q}) \mid^2 = \mid f(\mathbf{q}) \mid^2 \cdot \frac{1}{N}\left| \sum_{j} e^{-i\mathbf{q}\cdot\mathbf{R}_j} \right|^2 \cdot N
\tag{5}
$$

두 인자로 분리된다:

- $P(q) = \mid f(\mathbf{q}) \mid^2$ = **form factor**. 분자 하나의 *내부* 전자 분포(모양)만 담음.
- $S(q) = \frac{1}{N}\left| \sum_j e^{-i\mathbf{q}\cdot\mathbf{R}_j} \right|^2$ = **structure factor**. 분자들의 *상대 위치*만 담음.

물리적 의미: **"무엇이 산란하는가(모양)"** 와 **"그것들이 어디 놓였는가(배치)"** 의 곱. 위상 합의 제곱이 위치 간 간섭이며, 통계 평균하면 pair correlation function의 Fourier 변환이 된다:

$$
S(q) = 1 + \rho \int [g(r) - 1]\, e^{-i\mathbf{q}\cdot\mathbf{r}}\, d^3r
\tag{6}
$$
$g(r)$은 **pair correlation function**, "내 위치에서 거리 $r$에 다른 분자를 발견할 상대 확률"

> [!warning] 분리가 깨지는 경우
> 곱 분리는 **위치와 방향이 독립**일 때만 성립한다. 비구형 분자가 서로 정렬되거나(orientational correlation), 농도가 극단적으로 높아 위치-방향이 얽히면 단순 곱이 깨진다. 구형에 가까운 **ferritin**이 이상적 모델인 이유 — 방향이라는 게 아예 없어 분리가 정확히 성립한다.

#### SAXS의 structure factor와 XRD(결정)의 structure factor사이 관계
같은 뿌리, 다른 극한. 
결정학에는 unit cell 내 원자 배치를 다루는 crystallographic structure factor $F(\mathbf{q})$와, 
분자들의 상대 위치를 다루는 liquid-state structure factor $S(q)$가 있다. 
SAXS/colloid가 쓰는 건 후자. 

Colloid는 분자가 유동적이어도 분자 간 상호작용 때문에 **선호하는 평균 간격(short-range order)** 이 생겨, $q_0 \approx 2\pi/\xi_p$에 넓고 뭉툭한 peak이 생긴다. "격자"가 아니라 "단거리 질서"라는 표현이 정확. 결정의 Bragg peak은 이 일반식의 **장거리 질서 극한**.

반대로 농도가 묽으면 분자 간 상호작용이 적고, 거리 $r$에 분자가 존재할 확률이 완전 무작위가 된다. $S(q)\to 1$이 되어, $I(q)$가 form factor $P(q)$만 반영. 


- **Pair distance distribution $P(r)$**: $I(q)$ 전체의 Fourier 변환. "분자 내에서 거리 $r$만큼 떨어진 전자쌍의 히스토그램" → 분자의 **모양과 최대 치수 $D_{max}$**. 구형이면 대칭적 종 모양, 길쭉하면 비대칭.

- **Ab initio 형상 복원**: $P(r)$로부터 simulated annealing으로 저해상도 3D bead model 복원 (DAMMIF 등).

### 측정을 망치는 함정

- **Buffer subtraction**: 단백질 신호는 buffer 산란 위에 얹힌 작은 차이. 정확히 매칭해 빼야 함.
- **Aggregation**: 작은 $q$에서 $I(q)$ 치솟음, Guinier 휨.
- **Radiation damage**: X-ray가 단백질 손상, 시간에 따라 산란 변화.
- **Polydispersity / 농도 효과**: $R_g$, $I(0)$의 농도 의존성으로 진단.

## Questions & Insights

- **Q: Momentum transfer의 momentum은 산란된 광자의 운동량인가?**
  A: 그렇다. 정확히는 광자 운동량의 **변화량** $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_s$ ($\hbar$ 단위). Elastic이라 크기는 보존되고 방향만 바뀐다. 운동량 보존으로 시료가 받은 운동량과 같으므로, $q$는 동시에 시료를 탐침하는 길이 스케일($1/q$)을 결정한다.

- **Q: SAXS의 structure factor가 XRD(결정)의 그 structure factor와 같은가?**
  A: 같은 뿌리, 다른 극한. 결정학에는 unit cell 내 원자 배치를 다루는 crystallographic structure factor $F(\mathbf{q})$와, 분자들의 상대 위치를 다루는 liquid-state structure factor $S(q)$가 있다. SAXS/colloid가 쓰는 건 후자. Colloid는 분자가 유동적이어도 분자 간 상호작용 때문에 **선호하는 평균 간격(short-range order)** 이 생겨, $q_0 \approx 2\pi/\xi_p$에 넓고 뭉툭한 peak이 생긴다. "격자"가 아니라 "단거리 질서"라는 표현이 정확. 결정의 Bragg peak은 이 일반식의 **장거리 질서 극한**.

## Related Concepts

- [[ED lecture note - Scattering and Diffraction]]
- [[📑 Journal reading - Coherent X-rays reveal anomalous molecular diffusion and cage effects in crowded protein solutions]]

## References

- Skou, Gillilan, Ando, "Synchrotron-based small-angle X-ray scattering of proteins in solution", Nat. Protoc. 9, 1727–1739 (2014). [DOI](https://doi.org/10.1038/nprot.2014.116)
