---
title: "Rank-One Update of Symmetric Eigenproblem (Secular Equation)"
date: "2026-07-21"
subject: mathematics
tags:
  - study
  - concept
  - numerical-linear-algebra
  - eigenvalue-problem
  - secular-equation
  - k-matrix
  - polymer-physics
class: study
---

# Rank-One Update of Symmetric Eigenproblem (Secular Equation)

## Overview

Backbone(linear 또는 circular Rouse chain)에 loop를 하나씩 추가할 때, 이미 알고 있는 backbone의 eigendecomposition으로부터 새로운 eigenspectrum을 얻는 방법을 정리한다. 핵심 관찰은 **loop 하나 = rank-1 perturbation**이며, 이 구조를 이용하면 매번 $O(N^3)$의 full diagonalization을 반복하지 않고 loop마다 $O(N^2)$ 이하로 spectrum을 갱신할 수 있다.

[[K-matrix Diagonalization (Generalized Rouse Model)]]에서 constant loop의 경우는 circulant 구조 덕분에 해석적으로 풀렸지만(식 L7), **random position에 loop를 추가하는 일반적 경우**는 translation invariance가 깨져 닫힌 해가 없다. 이 노트는 그 일반적 경우를 위한 numerical framework를 다룬다.

## Symbol Table

| Symbol | Meaning |
|--------|---------|
| $K_0$ | Loop 없는 backbone의 K-matrix (Laplacian) |
| $D$ | $K_0$의 eigenvalue 대각행렬 $\mathrm{diag}(d_0,\dots,d_N)$ |
| $U$ | $K_0$의 orthonormal eigenvector를 열로 갖는 행렬 |
| $e_i$ | $i$번째 표준기저 벡터 |
| $\rho$ | Rank-1 perturbation의 세기 (loop의 경우 $-k$) |
| $z$ | Perturbation 방향을 eigenbasis로 투영한 벡터, $z = U^T(e_i - e_j)$ |
| $\lambda$ | Update 후의 eigenvalue |
| $q$ | Update 후의 eigenvector |
| $L$ | 추가된 loop의 개수 |

## Key Points

### 1. Loop 하나는 rank-1 perturbation이다

Bead $i$와 $j$ 사이에 spring을 추가하면 Laplacian에서 네 개의 원소가 변한다: diagonal 두 개($K_{ii}, K_{jj}$)와 off-diagonal 두 개($K_{ij}, K_{ji}$). **Off-diagonal만 바뀌는 것이 아니라 diagonal도 함께 바뀐다**는 점이 핵심이다. 이 네 변화를 묶으면 정확히 outer product 형태가 된다:

$$
\Delta K = -k\,(e_i - e_j)(e_i - e_j)^T
\tag{1}
$$

Outer product $vv^T$는 정의상 항상 **rank 1**이다 (모든 열이 $v$의 스칼라배이므로 column space가 1차원).

물리적으로는 더 자명하다. Laplacian의 quadratic form이 spring energy이므로:

$$
-\frac{1}{2}\mathbf{R}^T K \mathbf{R} = \frac{1}{2}\sum_{\text{edges}} k\,(R_i - R_j)^2
\tag{2}
$$

Edge 하나가 기여하는 항은 $\frac{1}{2}k[(e_i-e_j)^T\mathbf{R}]^2$이다. **Spring 하나는 "두 bead의 상대 좌표"라는 단 하나의 자유도만 구속**하므로, 구속 방향이 1차원이고 따라서 rank도 1이다.

> [!warning] Laplacian 구조를 지켜야 한다
> 만약 diagonal을 그대로 두고 off-diagonal에만 $\pm k$를 넣으면 그 행렬은 $e_ie_j^T + e_je_i^T$ 꼴로 **rank 2**가 된다 (eigenvalue $+k, -k$). 게다가 row sum이 0이 아니게 되어 zero mode(center-of-mass translation)가 깨지므로 물리적으로 틀린 모델이 된다.

Loop가 $L$개면:

$$
K = K_0 + \sum_{l=1}^{L} \Delta K_l = K_0 - \sum_{l=1}^{L} k_l\,(e_{i_l}-e_{j_l})(e_{i_l}-e_{j_l})^T
\tag{3}
$$

이것을 한 번에 처리하지 않고 **rank-1 update를 $L$번 순차 적용**하는 것이 전략이다.

### 2. Eigenbasis로의 변환

$K_0 = U D U^T$ ($U$는 orthonormal, $D$는 대각)를 알고 있다고 하자. Backbone이 linear이면 $\cos$ basis, circular이면 Fourier basis로 이미 해석적으로 안다. 양옆에 $U^T, U$를 곱하면:

$$
U^T K U = D + \rho\, zz^T, \qquad z = U^T(e_i - e_j), \qquad \rho = -k
\tag{4}
$$

즉 문제가 **"대각행렬 + rank-1"의 eigenvalue를 구하는 표준 문제**로 환원된다. 이것이 Golub & Van Loan §8.4.3–8.4.4에서 다루는 divide-and-conquer의 핵심 서브루틴과 정확히 같은 형태다.

$z$의 계산은 $O(N)$이다 — $z_p = U_{ip} - U_{jp}$로, backbone eigenvector의 두 성분 차이일 뿐이다. Linear backbone이면:

$$
z_p = \sqrt{\frac{c_p}{N+1}}\left[\cos\frac{p\pi(i+\tfrac12)}{N+1} - \cos\frac{p\pi(j+\tfrac12)}{N+1}\right]
\tag{5}
$$

### 3. Secular equation — 분해 전후를 잇는 유일한 관계식

$D$의 eigenvalue $d_i$와 $D + \rho zz^T$의 eigenvalue $\lambda$ 사이에는 **닫힌 형태의 공식이 존재하지 않는다.** $D$와 $zz^T$가 동시 대각화되지 않기 때문이다 ($z$가 표준기저 방향이 아니라 여러 성분에 퍼져 있음). 대신 둘을 잇는 **방정식**이 하나 나온다.

Eigenvalue 정의에서 출발한다:

$$
(D + \rho zz^T)q = \lambda q
\tag{6}
$$

$$
(D - \lambda I)q = -\rho z (z^Tq)
\tag{7}
$$

$z^Tq$는 스칼라이므로 $c \equiv z^Tq$로 두면:

$$
q = -\rho c\,(D-\lambda I)^{-1} z
\tag{8}
$$

양변에 $z^T$를 곱하면 좌변이 $z^Tq = c$가 되고, $c \ne 0$으로 나누면 **secular equation**을 얻는다:

$$
f(\lambda) = 1 + \rho \sum_{p=0}^{N} \frac{z_p^2}{d_p - \lambda} = 0
\tag{9}
$$

이것이 $d_p$와 $\lambda$를 잇는 유일한 관계식이다. $\lambda$에 대한 $N+1$차 방정식이라 해석적으로 풀 수 없고 수치적으로 근을 찾아야 한다. 대신 (8)에서 **eigenvector가 공짜로 나온다**:

$$
q_j \propto (D - \lambda_j I)^{-1} z
\tag{10}
$$

이것을 원래 좌표계로 되돌리려면 $U$를 곱하면 된다.

### 4. Interlacing — 정성적 관계

$\rho > 0$인 경우 $f$는 각 극점 사이 구간에서 **단조증가**하며 $-\infty$에서 $+\infty$로 가므로 근이 정확히 하나씩 존재한다. $d_p$를 정렬해두면:

$$
d_0 \le \lambda_0 \le d_1 \le \lambda_1 \le \cdots \le d_N \le \lambda_N \le d_N + \rho\|z\|^2
\tag{11}
$$

즉 **새 eigenvalue들은 옛 eigenvalue들 사이에 하나씩 끼어 들어간다** (Cauchy interlacing theorem). 이것이 구간별 bisection이나 Newton method가 안전하게 작동하는 근거다.

Loop의 경우 $\rho = -k < 0$이므로 밀리는 방향이 반대(아래쪽)지만 interlacing 구조 자체는 동일하다.

### 5. Deflation — $z_p = 0$인 모드

$z_p = 0$이면 (9)에서 해당 항이 사라지고, $d_p$가 **그대로 $\lambda$로 살아남는다**. 물리적 의미는 명확하다: 그 mode의 eigenvector가 추가된 loop 방향 $(e_i - e_j)$와 직교해서 **loop의 영향을 전혀 받지 않는다**는 뜻이다.

$z_p = U_{ip} - U_{jp}$이므로, $p$번째 backbone mode가 bead $i$와 $j$에서 같은 값을 가지면 deflation이 일어난다. 대칭성이 높은 구조에서 자주 발생하며, [[K-matrix Diagonalization (Generalized Rouse Model)]]의 constant loop 케이스에서 관찰되는 degeneracy(계단형 spectrum)와도 관련이 있을 가능성이 있다.

수치적으로는 $z_p \approx 0$이거나 $d_p \approx d_{p+1}$인 경우가 불안정성의 주된 원인이며, Gu–Eisenstat (1994)의 deflation 처리가 이를 다룬다.

### 6. 계산 비용

| 방법 | 복잡도 | 조건 |
|--------|---------|------|
| Full `eigh` (매번) | $O(N^3)$ | 항상 |
| Rank-1 update (naive) | $O(LN^2)$ | $L$개 loop 순차 적용 |
| Rank-1 update (최적화) | $O(LN)$ | 구현 난이도 높음 |
| Sparse `eigsh` | 문제 의존 | 일부 mode만 필요할 때 |

$L \ll N$ (loop 개수가 backbone 길이보다 훨씬 적음)이면 rank-1 update가 압도적으로 유리하다.

### 7. 구현 스케치

```python
import numpy as np
from scipy.optimize import brentq

def rank1_update(d, z, rho):
    """
    D + rho * z z^T 의 eigenvalue를 secular equation으로 계산.
    d: 정렬된 기존 eigenvalue 배열
    z: eigenbasis로 투영된 perturbation 벡터
    rho: perturbation 세기
    """
    def f(lam):
        return 1.0 + rho * np.sum(z**2 / (d - lam))

    n = len(d)
    new_eigs = np.zeros(n)
    eps = 1e-12
    for i in range(n - 1):
        # 각 구간 (d[i], d[i+1])에 근이 하나씩
        lo, hi = d[i] + eps, d[i+1] - eps
        new_eigs[i] = brentq(f, lo, hi)
    # 마지막 근은 (d[-1], d[-1] + rho*||z||^2) 구간
    lo = d[-1] + eps
    hi = d[-1] + rho * np.sum(z**2) + eps
    new_eigs[-1] = brentq(f, lo, hi)
    return new_eigs
```

Loop를 순차 적용할 때는 매 단계마다 새 eigenvector로 다음 $z$를 재투영해야 한다.

### 8. 왜 우리 문제에 잘 맞는가

Random position loop의 경우 $z$의 성분이 여러 mode에 골고루 퍼지므로 degeneracy가 많이 깨진다. 이는 secular equation의 근이 잘 분리된다는 뜻이고, deflation 처리 없는 naive 구현으로도 꽤 안정적으로 작동할 가능성이 높다. Constant loop처럼 대칭성이 높은 경우가 오히려 수치적으로 까다롭다.

## Questions & Insights

- "loop가 있으면 eigenspectrum exponent가 2에서 1 아래로 떨어진다"는 현상을, $L$번의 interlacing shift가 누적되어 spectral density를 낮은 $|\lambda|$ 쪽으로 재분배한 결과로 해석할 수 있는가?
- Loop의 위치 분포(power law vs exponential)가 $z$의 성분 분포를 어떻게 바꾸고, 그것이 secular equation의 근 위치에 어떻게 반영되는가? 이것이 두 distribution을 비교하는 정량적 기준이 될 수 있는가?
- Deflation이 일어나는 mode의 개수가 loop topology의 대칭성을 재는 지표가 될 수 있는가?
- 순차 적용 시 오차가 어떻게 누적되는가? $L$이 커질 때 full `eigh`와의 편차를 측정해야 한다.

## Related Concepts

- [[K-matrix Diagonalization (Generalized Rouse Model)]]
- [[Rouse Model]]
- [[Orthogonal Matrix]]
- [[Fast_Fourier_Transform]]

## References

- G. H. Golub & C. F. Van Loan, *Matrix Computations*, Chapter 8 (Symmetric Eigenvalue Problems), §8.4.3–8.4.4 — 이 노트의 주 참고문헌
- G. H. Golub (1973), "Some Modified Matrix Eigenvalue Problems", *SIAM Review* 15(2), 318–334 — secular equation의 최초 체계적 유도
- J. R. Bunch, C. P. Nielsen & D. C. Sorensen (1978), "Rank-One Modification of the Symmetric Eigenproblem", *Numerische Mathematik* 31, 31–48 — eigenvector 공식 포함
- J. J. M. Cuppen (1981), "A Divide and Conquer Method for the Symmetric Tridiagonal Eigenproblem", *Numerische Mathematik* 36, 177–195
- M. Gu & S. C. Eisenstat (1994), "A Stable and Efficient Algorithm for the Rank-One Modification of the Symmetric Eigenproblem", *SIAM J. Matrix Anal. Appl.* 15(4), 1266–1276 — LAPACK `dlaed*` 루틴의 기반
- J. W. Demmel, *Applied Numerical Linear Algebra*, §5.3.3 — 더 짧은 대안, deflation 설명이 직관적

## Notes from Claude

**구현 경로 제안.** Python에는 이 알고리즘의 완성된 라이브러리가 사실상 없다. SciPy는 관련 LAPACK 루틴(`dlaed4`)을 API로 노출하지 않는다. 선택지는 두 가지다.

1. **직접 구현** — secular equation 자체는 위 스케치처럼 짧다. Naive 버전을 먼저 짜서 `eigh` 결과와 대조하고 (K_matrix_validation.ipynb에서 쓰던 검증 방식 그대로), 정확도가 무너지는 지점이 확인되면 그때 deflation을 추가하는 순서를 권한다.
2. **Julia의 `Arrowhead.jl`** — `ivanslapnicar/Arrowhead.jl`. DPR1(diagonal plus rank-1) 행렬의 모든 eigenpair를 forward stable하게 계산하는 검증된 패키지다. 이론적 근거는 Jakovcevic Stor, Barlow & Slapnicar (2015), arXiv:1405.7537. `juliacall` 등으로 Python에서 호출 가능하다.

**주의할 점.** Rank-1 update를 $L$번 순차 적용할 때 매 단계 eigenvector 갱신 비용($O(N^2)$)이 eigenvalue 계산 비용을 넘어설 수 있다. MSD 계산에는 segment-averaged 형태라면 eigenvalue spectrum만 필요하므로([[K-matrix Diagonalization (Generalized Rouse Model)]]의 결론), eigenvector를 매번 갱신하지 않고 **eigenvalue만 추적하는 경로**가 가능한지 검토해볼 가치가 있다. 다만 다음 loop의 $z$를 계산하려면 eigenvector가 필요하므로, 완전히 생략하기는 어려울 수 있다 — 이 부분은 추가 검토가 필요하다.
