---
title: Gaussian Chain
date: "2026-01-21"
subject: polymer physics
tags:
  - study
  - concept
  - question
class: study
---

# Gaussian Chain

## Overview

**Gaussian chain**(가우시안 사슬)은 고분자의 가장 단순한 mesoscopic 모델이다. **Ideal chain**(이상 사슬)이라고도 불린다.

핵심 설계:
- 단위 길이가 **Kuhn length** $l$인 $N$개의 segment가 연결됨
- 인접한 segment 사이의 각도는 **완전히 무작위** (uncorrelated)
- Segment 간 상호작용 없음 (excluded volume 무시)

이 점에서 Gaussian chain은 **random walk**와 수학적으로 동치다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $N$ | Segment 수 (입자 수) |
| $l$ | Kuhn length (단위 segment 길이) |
| $\mathbf{l}_i$ | $i$번째 segment의 변위 벡터 |
| $\mathbf{R}$ | End-to-end distance vector |
| $R_0$ | Root-mean-squared end-to-end distance |
| $L$ | Contour length, $L = Nl$ |

## Random Walk와의 대응

| Gaussian Chain | Random Walk |
|----------------|-------------|
| Segment 수 $N$ | 걸음 수 또는 시간 $t$ |
| Kuhn length $l$ | Step size |
| End-to-end vector $\mathbf{R}$ | 총 변위 벡터 |
| Segment 방향 무작위 | 각 step 방향 무작위 |

Random walk의 이동 경로가 곧 Gaussian chain의 backbone이 된다.

## Key Points

### Segment 간 무상관성

$$
\langle \mathbf{l}_i \cdot \mathbf{l}_j \rangle = l^2 \delta_{ij}
\tag{1}
$$

$i \neq j$이면 두 segment의 방향이 완전히 독립이므로 내적의 평균이 0이다.
brownian motion에서 gaussian white noise에 대응되는 설정이다.

### End-to-End Distance(EED)
Brownian motion에서 시작 지점과 도착 지점 사이 거리에 대응되는 개념이 EED이다. 
![[Pasted image 20260203172831.png]]

$$
\mathbf{R} = \sum_{i=1}^{N} \mathbf{l}_i
\tag{2}
$$


평균:
$$
\langle \mathbf{R} \rangle = 0
\tag{3}
$$

분산 (mean-squared end-to-end distance):
$$
\langle R^2 \rangle = Nl^2 \equiv R_0^2
\tag{4}
$$

Root-mean-squared (rms) end-to-end distance:
$$
R_0 = \sqrt{\langle R^2 \rangle} = N^{1/2} l
\tag{5}
$$

[[Central Limit Theorem]]에서 많이 본 그 관계. 

### $R_0 \ll L$: 사슬은 coil 상태

Contour length $L = Nl$에 비해:
$$
\frac{R_0}{L} = \frac{N^{1/2} l}{Nl} = N^{-1/2} \ll 1 \quad (\text{for large } N)
$$

긴 사슬은 평형 상태에서 **coil** 형태로 감겨 있으며, 늘리기 쉽다 (highly flexible to extension).

### End-to-End Distance의 확률분포

[[Generalized Central Limit Theorem Proof]]에 의해, $N$이 크면 $\mathbf{R}$은 Gaussian 분포를 따른다.
$\langle R^2 \rangle = \langle \Delta R^2 \rangle = Nl^2$ 

$$
P(\mathbf{R}) = \left( \frac{3}{2\pi Nl^2} \right)^{3/2} \exp\left( -\frac{3\mathbf{R}^2}{2Nl^2} \right)
\tag{6}
$$
시스템이 isotropic하므로, $x, y, z$에서 물리가 다 같아야 한다. 

$$\langle \Delta x^2 \rangle = \langle \Delta y^2 \rangle = \langle \Delta z^2 \rangle = \frac{\langle \Delta R^2 \rangle}{3}$$
$$\exp\left( -\frac{3\mathbf{R}^2}{2\langle \Delta R^2 \rangle} \right) = \exp\left( -\frac{3(x^2 + y^2 + z^2)}{2\langle \Delta R^2 \rangle} \right)$$
각각 x y z 에 대한 분포의 곱으로 나타내면 된다. 

### 자유에너지와 엔트로피

$\mathbf{R}$에 대한 effective free energy:

$$
F(\mathbf{R}) = \frac{3k_BT}{2Nl^2} R^2
\tag{7}
$$

이로부터 엔트로피(free energy를 T로 미분한 것의 음수):

$$
S(\mathbf{R}) - S(0) = -\frac{3k_B}{2Nl^2} R^2
\tag{8}
$$

사슬을 늘리면 ($R$ 증가) 가능한 configuration 수가 줄어들어 엔트로피가 **감소**한다.

### Entropic Spring

사슬 끝을 $\mathbf{R}$에 고정하려면(늘어나 있는는 길이를 유지하려면) 힘이 필요하다:

$$
\mathbf{f}(\mathbf{R}) = -\frac{\partial F}{\partial \mathbf{R}} = -K_e \mathbf{R}
\tag{9}
$$

여기서 $K_e$는 **entropic spring constant**이다. 자세한 내용은 [[Entropic Spring Constant]] 참조.

## Gaussian Chain의 Rescaling과 Fractal 구조

### 질문

Gaussian chain을 원래보다 더 긴 길이 단위에서 보면 어떻게 될까?

원래 $N$개 입자, 각 길이 $l$인 사슬을 $AN$개 ($A < 1$) 입자로 본다고 하자. 직관적으로는 입자 하나당 길이가 $l/A$가 되어야 할 것 같다.

하지만 $R_0 = N^{1/2} l$을 만족하려면:

$$N^{1/2} l = (AN)^{1/2} l'$$

$$l' = \frac{l}{A^{1/2}}$$

입자당 길이가 $1/A$가 아니라 $1/A^{1/2}$배가 된다. 이상한 현상이다!

### 답: Gaussian chain은 fractal dimension $d_f = 2$를 가진다

일반적으로 프랙탈에서:

$$R \sim N^{1/d_f}$$

Gaussian chain은 $R \sim N^{1/2}$이므로 $d_f = 2$이다.

**물리적 의미**: 선은 1차원, 공간은 2차원, 하지만 3차원 공간에 있는 가우시안안 사슬 자체는 2차원 객체처럼 공간을 채운다.

### Rescaling의 물리적 이해

Coarse-graining할 때 여러 step을 묶으면 그 **합**이 또 random walk를 한다. $n$개 step을 묶으면:

$$|\mathbf{l}_1 + \cdots + \mathbf{l}_n| \sim n^{1/2} l$$

$1/n$배 적은 입자로 보려면 ($A = 1/n$):

$$l' = n^{1/2} l = \frac{l}{A^{1/2}}$$

### 결론

이것은 Gaussian chain의 **자기유사성(self-similarity)**, 즉 프랙탈 구조 때문이다. 어떤 스케일에서 봐도 같은 통계적 성질($R \sim N^{1/2}$)을 유지하려면 길이가 $A^{-1/2}$로 스케일링되어야 한다.

## Questions & Insights

- **지수 1/2의 보편성**: $R_0 \sim N^{1/2}$는 분자 세부사항과 무관한 **보편적 스케일링**이다. ssDNA든 polyethylene이든 동일.
- **Ideal chain의 한계**: 실제 고분자는 자기 자신과 겹칠 수 없다 (excluded volume). 이를 고려하면 **self-avoiding walk**가 되고, $R \sim N^{3/5}$로 바뀐다.
- **Kuhn length의 물리적 의미**: Segment 방향이 uncorrelated되는 최소 길이. Persistence length $l_p$와 관련: $l \approx 2l_p$.

## Related Concepts

- [[Generalized Central Limit Theorem Proof]] - End-to-end distance가 Gaussian이 되는 이유
- [[Radius of Gyration of Gaussian Chain]] - Gaussian chain의 회전 반경 계산
- [[Entropic Spring Constant]] - 온도에 비례하는 탄성의 기원
- [[프랙탈의 멱법칙에 대한 직관적 설명]]

## References

- [[Statistical Physics for Biological Matter (Woo)]] - Chapter 10, Section 10.1

## Notes from Claude

Gaussian chain 모델의 아름다움은 그 **단순함**에 있다. 복잡한 고분자를 단지 "무작위 방향으로 연결된 막대들"로 환원함으로써, random walk의 모든 수학적 도구를 그대로 활용할 수 있다.

이 모델이 실제 고분자를 잘 기술하는 이유는 **coarse-graining** 때문이다. 원자 수준에서는 복잡한 상호작용이 있지만, Kuhn length보다 긴 스케일에서 보면 그 세부사항이 평균화되어 사라지고, 오직 "무작위 연결"이라는 본질만 남는다.
