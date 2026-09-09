---
title: Spectral Exponent Equivalence of K-matrix and Normalized Laplacian
date: "2026-09-08"
subject: mathematics
tags:
  - study
  - concept
  - question
class: study
---

# Spectral Exponent Equivalence of K-matrix and Normalized Laplacian

## Overview

Fan & Huang (2025)의 spectral dimension $d_s = 2/(1+\delta)$는 **degree-normalized random walk**의 heat kernel로 정의된 양이다. 반면 우리가 대각화하는 K-matrix는 **combinatorial Laplacian** $L$ 그 자체다. 두 operator는 서로 다른 행렬이고 eigenvalue도 다르다. 이 노트는 그럼에도 두 행렬의 eigenvalue power-law exponent $\gamma$ ($\lambda_p \sim p^{\gamma}$)가 같다는 것을 **random walk 이론 없이 선형대수만으로** 보이는 논증을 정리한다. 핵심 도구는 Courant–Fischer min–max theorem과 그 따름정리인 Ostrowski's theorem이다.

| Symbol | Meaning |
|--------|---------|
| $A$ | adjacency matrix ($N \times N$, symmetric, 0/1) |
| $D$ | degree matrix, $D = \mathrm{diag}(d_1,\dots,d_N)$, $d_i = \deg(i)$ |
| $L$ | combinatorial (unnormalized) Laplacian, $L = D - A$ |
| $K$ | K-matrix of the generalized Rouse model, $K = -L$ |
| $H$ | generator of the degree-normalized walk, $H = -D^{-1}L$ |
| $\mathcal{L}$ | symmetric normalized Laplacian, $\mathcal{L} = D^{-1/2} L D^{-1/2}$ |
| $\lambda_k(M)$ | $k$-th smallest eigenvalue of symmetric $M$ (오름차순) |
| $d_{\min}, d_{\max}$ | 그래프의 최소/최대 degree |
| $\gamma$ | eigenvalue exponent, $\lambda_p \sim p^{\gamma}$ |
| $N(\lambda)$ | integrated density of states, $\#\{k : \lambda_k \le \lambda\}$ |
| $S$ | congruence factor, $S = D^{-1/2}$ |

## Key Points

- $H = -D^{-1}L$ 은 similarity transform으로 $-\mathcal{L} = -D^{-1/2}LD^{-1/2}$ 와 spectrum이 **정확히** 같다.
- $\mathcal{L} = S^{\top} L S$ 는 $L$의 congruence transform이다. Ostrowski's theorem에 의해 같은 index $k$의 eigenvalue끼리 $\lambda_k(L)/d_{\max} \le \lambda_k(\mathcal{L}) \le \lambda_k(L)/d_{\min}$ 로 sandwich된다.
- 이 bound는 $k$에 무관한 상수 폭 $\log(d_{\max}/d_{\min})$의 띠이므로, log–log plot의 asymptotic slope($=\gamma$)는 두 spectrum에서 같다.
- $d_{\min} = 2$ (backbone), $d_{\max} = O(\log N)$ (`allow_multi`) 또는 $\le 3$ (`nomulti`)이므로 띠의 폭은 $N$에 대해 기껏해야 $\log\log N$으로 자란다.
- 따라서 K-matrix의 $\gamma$와 Fan–Huang의 $d_s$는 $\gamma = 2/d_s = 1 + \delta(\beta)$ 로 연결된다.

## Notes from Claude

### 1. 세 개의 operator와 그 관계

Loop가 있는 polymer를 그래프 $G=(V,E)$로 본다. Vertex는 monomer, edge는 backbone bond와 loop bond. 모든 edge의 spring constant는 1이다.

**(a) Combinatorial Laplacian.** 

$$
L = D - A, \qquad (Lx)_i = \sum_{j \sim i}(x_i - x_j)
\tag{1}
$$

K-matrix는 $K = -L$이다 (대각 성분이 $-\deg(i)$). 
Generalized Rouse model $\dot{\mathbf r} = K\mathbf r + \boldsymbol\xi$ 의 relaxation rate는 $L$의 eigenvalue다.

**(b) Degree-normalized generator.** Fan & Huang의 simple random walk는 각 step에서 이웃을 **균등하게** 고른다. 전이확률 $P_{ij} = A_{ij}/d_i$, 즉 $P = D^{-1}A$ 이고 generator는

$$
H = P - I = D^{-1}A - I = -D^{-1}(D - A) = -D^{-1}L
\tag{2}
$$

**(c) Symmetric normalized Laplacian.** $H$는 대칭행렬이 아니지만, $D^{1/2}$로 similarity transform하면

$$
D^{1/2} H D^{-1/2} = -D^{1/2} D^{-1} L D^{-1/2} = -D^{-1/2} L D^{-1/2} = -\mathcal{L}
\tag{3}
$$

Similarity transform은 eigenvalue를 보존하므로 $\operatorname{spec}(H) = \operatorname{spec}(-\mathcal{L})$. 따라서 문제는 **대칭행렬 두 개** $L$과 $\mathcal{L} = D^{-1/2} L D^{-1/2}$ 의 spectrum 비교로 환원된다.

> [!note] Similarity vs congruence
> $M \mapsto P^{-1} M P$ (similarity)는 eigenvalue를 보존한다. $M \mapsto S^{\top} M S$ (congruence)는 일반적으로 eigenvalue를 보존하지 않고 **inertia**(양/음/0 eigenvalue의 개수)만 보존한다 (Sylvester's law of inertia). 식 (3)의 첫 등호는 similarity, $\mathcal{L} = S^{\top} L S$ with $S = D^{-1/2}$ 는 congruence다. $S$가 대각행렬이라 $S^{\top} = S$ 이고, $S^{-1} \neq S^{\top}$ 이므로 이 congruence는 similarity가 아니다. 그래서 $\mathcal{L}$과 $L$의 eigenvalue는 다르다.

### 2. 왜 두 walk의 자연스러운 measure가 다른가 (counting vs degree measure)

Reversible Markov chain은 detailed balance $m(i) P_{ij} = m(j) P_{ji}$ 를 만족하는 measure $m$을 가진다. 이 $m$이 heat kernel 정의 $p_t(i,j) = \mathbf P_i[X_t = j]/m(j)$ 와 volume 정의 $V_r = m(B_r)$ 에 들어간다.

- **Degree-normalized walk** ($P = D^{-1}A$): $d_i \cdot (1/d_i) = d_j \cdot (1/d_j) = 1$ 이므로 $m(i) = d_i$. 이것이 **degree measure**이고 Fan & Huang의 $V_r(0) = \sum_{y \in B_r} \deg(y)$ 가 여기서 나온다.
- **Variable-speed walk** (generator $-L$): 각 edge를 따라 rate 1로 점프하므로 rate $q_{ij} = A_{ij}$, detailed balance는 $1 \cdot 1 = 1 \cdot 1$ 로 $m(i) = 1$. 이것이 **counting measure** — 모든 vertex에 질량 1을 주는 measure. K-matrix가 대칭행렬인 것 자체가 counting measure에 대한 reversibility의 표현이다.

두 measure는 vertex마다 $d_i$배 차이가 나고, $1 \le d_{\min} \le d_i \le d_{\max}$ 이므로 그 비율은 유계다. 이 유계성이 아래 spectral 논증에서 그대로 $d_{\min}, d_{\max}$로 나타난다.

### 3. Rayleigh quotient와 Courant–Fischer min–max theorem

대칭행렬 $M \in \mathbb{R}^{N \times N}$의 Rayleigh quotient는

$$
R_M(x) = \frac{x^{\top} M x}{x^{\top} x}, \qquad x \neq 0
\tag{4}
$$

$M$의 eigenvector $v_k$에서 $R_M(v_k) = \lambda_k$ 이고, 일반적으로 $\lambda_1 \le R_M(x) \le \lambda_N$ 이다 (spectral theorem으로 $x$를 eigenbasis로 전개하면 $R_M$은 $\lambda_k$들의 convex combination).

**Courant–Fischer theorem.** $\lambda_1 \le \dots \le \lambda_N$ 을 $M$의 eigenvalue라 하면, 모든 $k$에 대해

$$
\lambda_k(M) = \min_{\dim U = k} \; \max_{x \in U,\, x \neq 0} R_M(x)
\tag{5}
$$
$$
\lambda_k(M) = \max_{\dim W = N-k+1} \; \min_{x \in W,\, x \neq 0} R_M(x)
\tag{6}
$$

여기서 $U, W$는 $\mathbb{R}^N$의 부분공간이다.

직관: $k$차원 부분공간 $U$를 "잘" 고르면 (처음 $k$개 eigenvector가 span하는 공간) 그 안에서 Rayleigh quotient의 최댓값은 정확히 $\lambda_k$다. 다른 $k$차원 부분공간은 반드시 $\lambda_k$ 이상의 Rayleigh quotient를 가지는 방향을 포함한다 (차원 세기: $\dim U + \dim \operatorname{span}(v_k,\dots,v_N) = k + (N-k+1) > N$ 이므로 두 공간은 0이 아닌 공통 벡터를 가진다). 그래서 $\min_U \max_x = \lambda_k$.

이 정리가 강력한 이유는 **eigenvector를 몰라도** eigenvalue를 부분공간 위의 최적화로 특징짓기 때문이다. Perturbation bound는 대부분 여기서 나온다.

### 4. Weyl's inequality (참고: 이 문제에는 직접 안 맞음)

Courant–Fischer의 첫 번째 따름정리는 **additive** perturbation에 대한 Weyl's inequality다. $M, E$ 대칭이면

$$
\lambda_k(M) + \lambda_1(E) \;\le\; \lambda_k(M + E) \;\le\; \lambda_k(M) + \lambda_N(E)
\tag{7}
$$

즉 $|\lambda_k(M+E) - \lambda_k(M)| \le \|E\|_{\mathrm{op}}$. 이것은 **절대 오차** bound다. 우리 문제에서 $\mathcal{L} - L = D^{-1/2}LD^{-1/2} - L$ 을 $E$로 두면 $\|E\|$는 $O(\|L\|) = O(d_{\max})$ 로 상수 크기이지만, 우리가 관심 있는 저 mode index의 eigenvalue는 $\lambda_p \sim (p/N)^{\gamma} \ll 1$ 이라 절대 오차 $O(1)$은 아무 정보도 주지 못한다. 필요한 것은 **상대 오차** bound이고, 그것이 다음의 Ostrowski's theorem이다.

### 5. Ostrowski's theorem (congruence에 대한 상대 오차 bound)

**정리.** $M$ 대칭, $S$ invertible이면 각 $k$에 대해 어떤 $\theta_k \in [\lambda_1(S^{\top}S),\, \lambda_N(S^{\top}S)]$ 가 존재하여

$$
\lambda_k(S^{\top} M S) = \theta_k \, \lambda_k(M)
\tag{8}
$$

**증명 (Courant–Fischer에서 두 줄).** $x \neq 0$에 대해 $y = Sx$로 치환하면

$$
R_{S^{\top} M S}(x) = \frac{x^{\top} S^{\top} M S x}{x^{\top} x} = \frac{y^{\top} M y}{y^{\top} y} \cdot \frac{y^{\top} y}{x^{\top} x} = R_M(y) \cdot \frac{x^{\top} S^{\top} S x}{x^{\top} x} = R_M(y) \cdot R_{S^{\top}S}(x)
\tag{9}
$$

마지막 인수는 $S^{\top}S$의 Rayleigh quotient이므로 $[\lambda_1(S^{\top}S), \lambda_N(S^{\top}S)]$ 안에 있다. 또한 $S$가 invertible이므로 $x \mapsto Sx$는 부분공간의 차원을 보존한다: $\dim U = k \Leftrightarrow \dim SU = k$. 따라서 식 (5)의 min–max를 $S^{\top}MS$에 적용하고 $U$ 대신 $SU$ 위에서 최적화하면, 각 단계에서 $R_M$이 $[\lambda_1(S^{\top}S), \lambda_N(S^{\top}S)]$ 안의 인수만큼 곱해진다. 결과가 식 (8)이다. ($\lambda_k(M) \ge 0$ 인 positive semidefinite 경우 부호 문제도 없다.)

**우리 경우.** $S = D^{-1/2}$ 이므로 $S^{\top}S = D^{-1}$, 그 eigenvalue는 $1/d_i$. 따라서 식 (9)를 정리하면, 

$$
R_{\mathcal{L}}(x)  = R_L(y) \cdot R_{D}(x)
$$

$$
\frac{\lambda_k(L)}{d_{\max}} \;\le\; \lambda_k(\mathcal{L}) \;\le\; \frac{\lambda_k(L)}{d_{\min}} \qquad \text{for every } k = 1, \dots, N
\tag{10}
$$

이 부등식이 비교하는 것은 **순위(rank)** 다. $L$의 eigenvalue를 오름차순으로 줄 세우고 $\mathcal{L}$의 eigenvalue도 오름차순으로 줄 세운 뒤, 두 목록의 $k$번째끼리 비교한다. 질량을 바꾸면 mode들이 섞이므로 $\mathcal{L}$의 $k$번째 mode가 $L$의 $k$번째 mode"에서 왔다"고 말할 수는 없다 — 그것은 $L$의 여러 mode의 혼합이다. 그럼에도 줄 세운 목록끼리는 위 비율 안에서 맞물린다는 것이 정리의 내용이고, 우리가 필요한 것은 순위 $p$ 대 값 $\lambda_p$의 관계이므로 이것으로 충분하다.

### 6. Exponent가 같다는 결론

식 (10)의 양변을 $\lambda_k(L) > 0$ 으로 나누고 로그를 취하면 (로그는 단조증가라 부등호 방향 유지)

$$
-\log d_{\max} \;\le\; \log \lambda_k(\mathcal{L}) - \log \lambda_k(L) \;\le\; -\log d_{\min}
\tag{11}
$$

즉 차이 $c_k := \log \lambda_k(\mathcal{L}) - \log \lambda_k(L)$ 는 **$k$에 무관한 고정 구간** $[-\log d_{\max}, -\log d_{\min}]$ 안에 있다. 이 구간의 길이를 $\Delta := \log(d_{\max}/d_{\min})$ 로 두면, $\log \lambda_k$ vs $\log k$ plot에서 두 곡선은 수직 폭 $\Delta$인 띄 안에 함께 들어간다.

**Local slope에 대한 함의.** 창 $[k_1, k_2]$ 에서의 평균 기울기를 $\bar\gamma = \dfrac{\log\lambda_{k_2} - \log\lambda_{k_1}}{\log k_2 - \log k_1}$ 로 정의하면, $\log\lambda_k(\mathcal L) = \log\lambda_k(L) + c_k$ 이므로

$$
\bigl| \bar\gamma_{\mathcal{L}} - \bar\gamma_{L} \bigr| = \frac{|c_{k_2} - c_{k_1}|}{\log(k_2/k_1)} \;\le\; \frac{\Delta}{\log(k_2/k_1)}
\tag{12}
$$

창의 폭 $\log(k_2/k_1) \to \infty$ 이면 우변은 0으로 간다. 따라서 asymptotic exponent는 같다: $\gamma_L = \gamma_{\mathcal{L}} = \gamma_H$.

**IDS에 대한 함의.** 같은 사실을 integrated density of states로 쓰면

$$
N_L(d_{\min}\lambda) \;\le\; N_{\mathcal{L}}(\lambda) \;\le\; N_L(d_{\max}\lambda)
\tag{13}
$$

$N(\lambda) \sim \lambda^{1/\gamma}$ 의 exponent는 argument를 상수배 해도 변하지 않는다.

### 7. $d_{\min}$과 $d_{\max}$의 크기

이제 남는 것은 $\Delta = \log(d_{\max}/d_{\min})$ 뿐이다.

- **$d_{\min} = 2$.** Ring polymer의 backbone이 모든 vertex에 두 개의 edge를 보장한다 (linear chain이면 양 끝만 1).
- **$d_{\max}$, `allow_multi` 경우.** Vertex $y$의 degree는

$$
\deg(y) = 2 + \sum_{j : |j - y| \ge 2} \mathbf 1_{\{\langle y, j\rangle \in E\}}
\tag{14}
$$

  각 indicator는 확률 $p_d = 1 - e^{-\beta/d^2}$ ($d = |y - j|$)의 Bernoulli이고, LRP 정의상 서로 다른 edge는 독립이므로 이것은 **독립 Bernoulli의 합** (Poisson-binomial)이다. 평균은

$$
\mu_\beta = \mathbb E[\deg] = 2 + 2S(\beta), \qquad S(\beta) := \sum_{d \ge 2}\bigl(1 - e^{-\beta/d^2}\bigr)
\tag{15}
$$

  $S(\beta)$는 $1 - e^{-x} \le x$ 와 $\sum 1/d^2 < \infty$ 로 모든 $\beta$에서 수렴하지만 elementary closed form은 없다. 두 regime의 asymptotic:

$$
S(\beta) \approx \beta\Bigl(\frac{\pi^2}{6} - 1\Bigr) \qquad (\beta \lesssim 0.5)
\tag{15a}
$$

$$
S(\beta) \approx \sqrt{\pi\beta} - \frac12 - \bigl(1 - e^{-\beta}\bigr) \qquad (\beta \gtrsim 1)
\tag{15b}
$$

  (15b)는 $f(x) = 1 - e^{-\beta/x^2}$ 이 폭 $\sqrt\beta \gg 1$인 매끄러운 bump이므로 합을 적분으로 바꾼 것 (Euler–Maclaurin, $f(0) = 1$, $f$는 $x=0$에서 flat). 핵심 적분은 $\int_0^\infty (1 - e^{-1/u^2})\,du = 2\int_0^\infty e^{-t^2}dt = \sqrt\pi$ (부분적분 후 $t = 1/u$). 수치 비교: $\beta = 1$에서 exact $S = 0.607$, (15a) $= 0.645$, (15b) $= 0.640$; $\beta = 4$에서 exact $2.070$, (15b) $2.063$; $\beta = 16$에서 exact $5.590$, (15b) $5.590$. 따라서 $\mu_1 \approx 3.2$, $\mu_4 \approx 6.1$, $\mu_{16} \approx 13.2$.

  $\sqrt{\pi\beta}$ 형태의 물리적 의미: $d \lesssim \sqrt\beta$인 이웃과는 확률 1에 가깝게 연결되므로, 큰 $\beta$에서는 각 monomer가 반경 $\sim\sqrt\beta$ 안의 모든 monomer와 붙은 "두꺼운 backbone"이 된다. 실효 lattice spacing이 $\sqrt\beta$로 커져 유한 $N$에서 쓸 수 있는 scale 범위가 $N/\sqrt\beta$로 줄어든다.

  독립 Bernoulli 합에 대한 Chernoff bound $\mathbb P[\deg \ge k] \le (e\mu_\beta / k)^k$ 와 $N$개 vertex에 대한 union bound를 합치면, 높은 확률로

$$
d_{\max} = O\!\left(\frac{\log N}{\log\log N}\right)
\tag{16}
$$

  $N = 10^4$, $\beta \sim 1$ 이면 대략 $d_{\max} \lesssim 10$ 정도. 그러면 $\Delta \approx \log_{10}(10/2) \approx 0.7$ decade. 이것은 worst-case bound이고, 실제 비율 $\lambda_k(\mathcal{L})/\lambda_k(L)$은 대부분의 $k$에서 $1/\mu_\beta$ 근처에 몰려 있을 것으로 예상된다.

- **$d_{\max} \le 3$, `nomulti` 경우.** 한 vertex당 loop 하나라는 exclusion으로 degree가 3 이하다. $\Delta = \log_{10}(3/2) \approx 0.18$ decade로 두 spectrum이 거의 구분되지 않는다. 다만 이 exclusion은 indicator 사이에 의존성을 만들어 그래프의 확률법칙이 LRP와 달라지므로, Fan–Huang의 정리 자체는 이 variant에 직접 적용되지 않는다. 이것은 "operator가 다르다"는 문제와 별개의, 더 근본적인 차이다.

### 8. 논리 사슬 정리

1. Fan & Huang: degree-normalized walk의 heat kernel exponent $d_s^{(H)} = 2/(1+\delta(\beta))$.
2. 그들의 annealed heat kernel bound(모든 $n$에 대해 양쪽, 로그 보정 없음)와 translation invariance로부터 $H$의 IDS exponent도 $d_s^{(H)}/2$. (표준 Tauberian 연결.)
3. **이 노트**: $\operatorname{spec}(H) = \operatorname{spec}(-\mathcal L)$ 이고, Ostrowski로 $\mathcal L$과 $L$의 IDS exponent가 같다.
4. 따라서 K-matrix의 $\gamma = 2/d_s = 1 + \delta(\beta)$.

이 논증이 random walk 경유 argument (time change, Kumagai–Misumi framework)보다 좋은 점: realization마다 **deterministic**하게 성립하고 (quenched), heat kernel을 거치지 않고 eigenvalue counting 자체를 다룬다.

### 9. 한계

- 식 (10)은 **eigenvalue만** 제어한다. Eigenvector에 대해서는 아무 말도 하지 않는다. $\gamma \to \alpha_{\rm MSD}$ 체인이 eigenvalue counting만 쓰는 한 문제없지만, monomer별 MSD, participation ratio, localization을 논할 때는 별도 논증이 필요하다.
- 유한 $N$에서 두 spectrum의 local slope는 서로 다른 $p$ 구간에서 다르게 휠 수 있다. 식 (12)는 충분히 넓은 창에서만 의미가 있다.

## Questions & Insights

- 같은 realization에서 $\lambda_k(L)$과 $\lambda_k(\mathcal L)$ (generalized eigenproblem $Lv = \lambda Dv$)을 둘 다 구해 비율 $r_k = \lambda_k(\mathcal L)/\lambda_k(L)$ 을 $k$에 대해 그리면, 이론상 $r_k \in [1/d_{\max}, 1/d_{\min}]$ 이고 실제로는 $1/\mu_\beta$ 근처에서 평평할 것으로 예상. `nomulti`와 `allow_multi` 둘 다 확인하면 식 (16)의 띠 폭 예측도 검증된다.
- Ostrowski의 $\theta_k$가 실제로 어떤 분포를 가지는지 (즉 $r_k$가 $1/\mu_\beta$에 얼마나 집중되는지)는 degree의 공간적 상관과 eigenvector의 delocalization에 달려 있을 것. 이것이 eigenvector 정보 없이 얻을 수 있는 한계 지점이다.
- Fan–Huang 세팅은 infinite $\mathbb Z$, 우리는 finite ring. Finite-size 효과와 boundary는 별도 고려.

## Related Concepts

- [[K-matrix Diagonalization (Generalized Rouse Model)]]
- [[📑 Journal reading - Spectral dimensions for one-dimensional critical long-range percolation]]

## References

- Z. Fan, L.-J. Huang, "Spectral dimensions for one-dimensional critical long-range percolation", arXiv:2505.15037 (2025). Theorem 1.1, Section 2 (Kumagai–Misumi framework).
- J. Ding, Z. Fan, L.-J. Huang, "The polynomial growth of effective resistances in one-dimensional critical long-range percolation", arXiv:2504.21378 (2025). Theorem 1.1 ($\delta(\beta)$의 정의).
- Courant–Fischer, Weyl, Ostrowski 정리의 표준 출처: R. Horn, C. Johnson, Matrix Analysis (2nd ed.), Thm 4.2.6 (Courant–Fischer), 4.3.1 (Weyl), 4.5.9 (Ostrowski).
