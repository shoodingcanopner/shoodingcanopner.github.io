---
title: Journal reading - Size limits the sensitivity of kinetic schemes
authors: Jeremy A. Owen, Jordan M. Horowitz
DOI: "[DOI](https://doi.org/10.1038/s41467-023-36705-8)"
date: 2026-02-22
subject: nonequilibrium biophysics
tags:
  - study
  - concept
  - question
class: study_journal
---

# Size limits the sensitivity of kinetic schemes

## 이거 왜 읽었나?

[[Journal reading - Stochastic thermodynamics for biological functions]]
위 리뷰 논문의 레퍼런스라서 읽었다. 
세포의 sensitivity가 Markov chain의 topology와 관련있다는 내용이라고 하길래, 흥미로워 보였다. 

## Overview

Continuous time Markov chain (Markov jump process, kinetic scheme)에서 어떤 관측량의 감도(Hill coefficient)가 **perturbation의 support의 size m**에 의해 bound된다는 것을 증명한 논문. 

평형계에서 $\text{Hill coefficient} ≤ \text{ligand가 결합할 수 있는 자리 수}$ 이라는 사실을 비평형계로 일반화한다. 

또한 이 bound를 포화시키는 새로운 비평형 메커니즘인 **nested hysteresis**를 제안한다.

## Link to PDF and DOI

- DOI: [https://doi.org/10.1038/s41467-023-36705-8](https://doi.org/10.1038/s41467-023-36705-8)
- PDF: [[Size limits the sensitivity of kinetic schemes.pdf]]

## 주요 내용 요약

FIG1. 
![[Pasted image 20260222215655.png]]
- 기본 모델로 continuous time [[MOCs/Markov Process|Markov Process]] 를 이 논문에서 사용한다. 

![[Pasted image 20260223081520.png]]
- 이 논문에서 다루는 **Markov state**이란, 
> ligand가 붙을 수 있는 효소나 DNA의 상태를 의미한다. 이것에 ligand가 붙은 양상, 효소의 어느 자리에 무슨 ligand가 붙었는지가 달라지면 상태가 달라지는 것이다. 예를 들어 구분 불가능한 ligan binding site가 n개 있는 효소의 상태는, 위의 그림 처럼 ligand가 붙은 수에 따라 0부터 n 까지의 상태로 구별된다. 

- 이 논문에서 다루는 **perturbation** 이란, 
> 주로 ligand concentration을 의미한다. Ligand가 몇 개나 효소에 붙었는지에 따라 효소의 상태가 달라지고, ligand가 붙는 속도는 ligand concentration에 선형적으로 증가한다. 때문에 Markov chain의 transition rate는 ligand concentration에 따라 달라진다. 그래서 위 그림에 state transition rate가 $k_i [L]$로 표기된 것이다. 
> 결과적으로 평형상태에서 특정 상태에 있을 확률은 ligand concentration이라는 perturebation에 의해 달라진다. 


![[Pasted image 20260222220822.png|위키피디아에서 따온 이미지]]
- **Hill coefficient** → 이 논문의 출발점. 
> 일부 효소는 여러 개의 ligand binding site를 가지고 있다. ligand concentration이 증가할 때, 효소의 모든  ligand binding site가 차지되어 있을 확률은 시그모이드함수로 증가한다. 
> 이 시그모이드 관계를 정량화하기 위해 Hill function을 사용한다:
$$
f(x) = \frac{x^H}{K^H + x^H}
\tag{1}
$$
> 여기서 $x$는 ligand concentration, $K$는 effective dissociation constant, $H$는 **Hill coefficient**로 반응의 logarithmic sensitivity를 정량화한다. $H$가 클수록 입출력 관계가 스위치처럼 날카로워진다. 열역학적 평형 상태에서 $H$는 동시에 결합 가능한 ligand의 최대 수 $n$을 초과할 수 없다는 것이 알려져 있다. 

Hill function을 $\log f(x)$와 $\log x$로 나타내면 다음을 만족한다. 
$$
\frac{d \log f(x)}{d \log x} = \frac{x}{f(x)} \frac{df(x)}{dx}
\tag{5}
$$
$$
\frac{d \log f(x)}{d \log x} = H \left( 1 - f(x) \right)
\tag{6}
$$

- **Support bound** → **이 논문에서 제시하는 가장 핵심 개념**
> perturbation x의 support는 Markov chain을 이루는 state의 부분집합을 의미하는데, "perturebation이 없을 때보다 있을 때 탈출 속도가 더 빨라지는 states"로 이루어진 집합이다. 더 명확히 하면 "x가 증가함에 따라 exit rate가 증가하는 states"이다. 
> 이 논문의 제목에서 있는 size는 곧 support의 개수를 의미한다. 
> Support bound는 perturbation x의 support size가 logarithmic sensitivity를 bound한다는 개념이다. 
> 임의의 관측량 A와 B가 있고, 평형 상태에서 관측량의 평균이 $\langle \rangle_{\pi}$이며, m이 perturbation x의 support size일 때 다음 부등식을 만족한다는 것이 논문의 주장이다. 

$$
\left| \frac{d \log \langle A \rangle_\pi / \langle B \rangle_\pi}{d \log x} \right| \leq m
\tag{7}
$$
m은 오로지 markov chain의 구조에 의해 정해지기 때문에, A와 B를 어떤 관측량으로 정하는 지와는 무관하다. 

앞에서 Hill function을 다룰 때는 '효소의 모든  ligand binding site가 차지되어 있을 확률' $f(x)$의 logarithmic sensitivity를 다루었다. 식 (7)의 의도는 이 $f(x)$라는 값을 더 다양한 의미를 가지는 관측량으로 확장한 것이다. 즉 더 다양한 반응의 sensitivity를 다룬다는 뜻이다. 

만약 관측량 A를 '효소의 모든  ligand binding site가 차지되어 있는 상태'에 대한 indicator function이라고 두고, 관측량 B를 1로 둔다면, $\langle A \rangle_\pi / \langle B \rangle_\pi = f(x)$이다. 


그래서 이 논문의 목표는 평형계에서 부등식을 비평형계로 확장하는 것이다. 
- 평형계에서는 Hill coefficient ≤ n (결합 자리 수). 
- 비평형계에서는 Hill coefficient ≤ m (support 크기), 

	이를 더 구체적으로 이해하기 위해 식 (7)의 corollary인 식 (8)을 보자. observable A를 상태 집합 X의 indicator function으로, B를 그 여집합 $\bar{X}$의 indicator function으로 잡으면:

$$
\left| \frac{d \log \pi_X}{d \log x} \right| \leq m(1 - \pi_X)
\tag{8}
$$

	여기서 $\pi_X$는 시스템이 상태 집합 X에 있을 steady-state 확률이다. 우변의 구조가 식 (6)의 Hill function 감도 $H(1-f(x))$와 똑같다는 것을 주목하자. 즉, **support size m이 Hill coefficient의 역할을 한다.**

	한편 평형계에서는 식 (10)이 성립한다:

$$
\frac{d \log \pi_X}{d \log x} = \left( \langle n_b \rangle_X - \langle n_b \rangle_{\bar{X}} \right)(1 - \pi_X)
\tag{10}
$$

	여기서 $\langle n_b \rangle_X$는 X 상태에 있을 때 결합된 ligand의 평균 수다. 우변의 $\langle n_b \rangle_X - \langle n_b \rangle_{\bar{X}}$는 최대 결합 자리 수 n을 넘을 수 없으므로, 평형계에서 $H_\text{eff} \leq n$이 된다. 반면 비평형계에서는 식 (8)이 적용되어 $H_\text{eff} \leq m$이 되는데, m은 n보다 훨씬 클 수 있다.

핵심은 m은 n보다 클 수 있다는 것이다. 
따라서, **비평형계에서는 평형계에서 기대되는 것 보다 더 큰 sensitivity가 나타날 수 있다.** 
는 것이 논문의 주장이다. 이것이 맞음을 실험 데이터를 근거로 설명한다. 

- **응용 사례**: E. coli 편모 모터 스위치(비평형 MWC 모델), kinetic proofreading, 화학 농도 sensing

## **Nested hysteresis** → support bound를 포화시키는 비평형 메커니즘

FIG3
![[Pasted image 20260223091846.png]]
DNA에 여러개의 TF들이 붙는 상황을 가정하라. 
이때 TF는 한 가지이지만, n개의 binding sites는 구별된다.


이런 시스템을 unordered binding 모델이라 부르자. 
즉 $n$개의 구분 가능한 결합 자리에 동일한 ligand가 임의의 순서로 결합하는 경우이다. 
이 경우 n개의 site 각각이 ligand on/off 두 가지 상태를 가지므로, 가능한 상태의 수는 $2^n$이다.  
fully bound state를 제외한 

$$
\left| \frac{d \log \pi_\text{all}}{d \log x} \right| \leq (2^n - 1)(1 - \pi_\text{all}) 
\tag{16}
$$

모든 상척도의 위계(hierarchy of timescales)
결합 자리에 번호를 붙이면, 높은 번호의 자리일수록 결합/해리가 훨씬 느리게 일어난다.

**② 중첩된 조건부 결합 규칙**
자리 $i$에 결합이 일어나려면 $1, \ldots, i-1$번 자리가 모두 차 있어야 하고, 자리 $i$에서 해리가 일어나려면 $1, \ldots, i-1$번 자리가 모두 비어 있어야 한다.

이 두 조건이 결합되면 강한 시간척도 분리 극한에서 각 자리의 steady-state 점유 확률이 다음과 같이 유도된다:

$$
\pi(\text{site } i \text{ is bound}) = \frac{x^{2^{i-1}}}{1 + x^{2^{i-1}}} \tag{20}
$$

즉 자리마다 유효 Hill coefficient가 $1, 2, 4, \ldots, 2^{n-1}$로 배가된다. 모든 자리가 동시에 차 있을 확률은:

$$
\pi_\text{all} = \prod_{i=1}^{n} \frac{x^{2^{i-1}}}{1 + x^{2^{i-1}}} = \frac{x^{2^n - 1}}{\sum_{j=0}^{2^n - 1} x^j} \tag{21}
$$

여기에 두 극단 상태(fully bound, totally empty)에서 나가는 전이율을 $q$배 늘리면:

$$
\pi_\text{all} = \frac{x^{2^n-1}}{1 + q\left(\displaystyle\sum_{j=1}^{2^n-2} x^j\right) + x^{2^n-1}} \tag{22}
$$

$q \to 0$ 극한에서 이 식은 $H = 2^n - 1$인 Hill function에 수렴하며, 식 (16)을 모든 $\pi_\text{all}$ 범위에서 동시에 포화시킨다.

**생물학적 함의:** 평형계에서 $H_\text{eff} \approx 100$을 얻으려면 ~100개의 분자가 필요하지만, nested hysteresis를 쓰면 단 7개의 결합 자리($2^7 - 1 = 127$)로 같은 감도를 달성할 수 있다. 이는 biomolecular condensate의 기능을 이해하는 데 새로운 관점을 제시한다.



## Questions & Insights

- Q: 논문이 f(x) 대신 ⟨A⟩π/⟨B⟩π에 집중하는 이유는?
  A: f(x)는 너무 막연해서 bound 증명이 불가능. ⟨A⟩/⟨B⟩ 형태로 쓰면 Markov chain tree theorem에 의해 유리함수임이 보장되어 분자·분모의 최고차수 비교로 감도의 상한을 유도할 수 있음. 동시에 이 형태가 실험적 측정량 거의 전부를 포괄해 일반성도 잃지 않음.

- Q: A와 B가 임의적으로 정해질 수 있는데 부등식이 의미 있는가?
  A: m이 A와 B로부터 완전히 독립적으로 결정되기 때문에 가능. m은 시스템의 그래프 구조(어떤 상태가 x에 의존하는 탈출률을 갖는가)에서만 나오는 양. Markov chain tree theorem에서 spanning tree는 각 vertex마다 나가는 edge가 최대 하나이므로, x에 의존하는 전이율이 한 monomial에 들어갈 수 있는 횟수가 support 크기 m을 넘지 못함 → πk의 x에 대한 최고 차수가 m 이하 → 어떤 관측량을 고르든 감도가 m을 초과할 수 없음. A, B가 임의적이라는 점이 오히려 이 bound를 모든 측정량에 적용되는 보편적 구조적 한계로 만듦.

- Q: 편모 모터 MWC 모델에서 CW↔CCW 전환에 ligand가 직접 관여하지 않는데 어떻게 support에 포함되는가?
  A: Support는 "어떤 전환이 x에 의존하는가"가 아니라 "어떤 상태의 탈출률(exit rate)이 x에 의존하는가"로 정의됨. CW 상태들은 CW↔CCW 전환(검은 화살표, x 무관) 외에도 CheY-P 결합(빨간 화살표, x 의존) 경로가 있어서 전체 탈출률 = k_i[L] + (무관한 것들)이 되고, [L]이 오르면 탈출률이 바뀜 → support 포함. 유일하게 빠지는 상태는 fully bound state(결합 수 = n)로, 더 이상 결합이 일어나지 않아 x 의존 전이가 없기 때문. 따라서 m = 2n.

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다. 
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다. 

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크. 
