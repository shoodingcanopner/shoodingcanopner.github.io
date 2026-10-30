---
title: SM HW5-3 Invariance of Phase Space Volume in Spherical Coordinates
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 5th HW, Problem 3

# 문제

(1) $\Gamma$에서 $d\omega$의 불변성을 $(x, y, z, p_x, p_y, p_z) \to (r, \theta, \phi, p_r, p_\theta, p_\phi)$ 좌표 변환에서 보여라.

(2) 위 결과에는 $\sin\theta$가 보이지 않아, "같은 solid angle에 같은 가중치"라는 직관과 모순되는 것처럼 보인다. $p_\theta$, $p_\phi$에 대한 의존성이 kinetic energy를 통해서만 들어오는 물리량을 이 변수들에 대해 적분하면, $(d\theta\,d\phi)$와 함께 $\sin\theta$가 다시 나타남을 보여라.

# 내 풀이

**(1) 위치 부분**: wedge product로 계산.

$$
dx \wedge dy \wedge dz = r^2\sin\theta\,(dr \wedge d\theta \wedge d\phi)
$$

**(1) 운동량 부분**: $L = T = \frac{m}{2}(\dot r^2 + r^2\dot\theta^2 + r^2\sin^2\theta\,\dot\phi^2)$에서 $p_r = m\dot r$, $p_\theta = mr^2\dot\theta$, $p_\phi = mr^2\sin^2\theta\,\dot\phi$. 따라서

$$
\mathbf{p} = p_r\hat r + \frac{1}{r}p_\theta\hat\theta + \frac{1}{r\sin\theta}\hat\phi
$$

$$
\begin{pmatrix} p_x \\ p_y \\ p_z \end{pmatrix} = R(\theta, \phi)\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1/r & 0 \\ 0 & 0 & 1/(r\sin\theta) \end{pmatrix}\begin{pmatrix} p_r \\ p_\theta \\ p_\phi \end{pmatrix}, \qquad \det J = \frac{1}{r^2\sin\theta}
$$

두 결과를 곱해 $dx\,dy\,dz\,dp_x\,dp_y\,dp_z = dr\,d\theta\,d\phi\,dp_r\,dp_\theta\,dp_\phi$.

**(2)** $T = \frac{p_r^2}{2m} + \frac{p_\theta^2}{2mr^2} + \frac{p_\phi^2}{2mr^2\sin^2\theta}$. $p_\theta = ru$, $p_\phi = r\sin\theta\,v$로 치환하면 $dp_\theta\,dp_\phi = r^2\sin\theta\,du\,dv$이므로

$$
\langle A \rangle \propto r^2\sin\theta\iint f\left(r, \theta, \phi, p_r, \frac{1}{2m}(p_r^2 + u^2 + v^2)\right)du\,dv
$$

# 풀이 검토

**판정: 위치 Jacobian의 wedge 계산은 정확하다. 그러나 (1)에서 위치와 운동량 Jacobian을 따로 구해 곱한 것이 왜 정당한지 설명하지 않았고, (2)의 마지막 식은 표기가 틀렸다.**

> [!failure] 1. (1) 두 Jacobian을 그냥 곱해도 되는 이유를 밝히지 않았다
> 6차원 변환의 부피 요소는 **6×6 Jacobian 하나의 determinant**다. 그런데 운동량 변환 행렬 $R(\theta, \phi)\,\mathrm{diag}(1, 1/r, 1/r\sin\theta)$는 **$r$, $\theta$, $\phi$에도 의존**한다. 따라서 $\partial p_x/\partial r$ 같은 교차항(off-diagonal block)이 0이 아니다. 이 교차항을 무시하고 곱해도 되는 이유는 다음과 같다.
> $$
> J = \frac{\partial(x, y, z, p_x, p_y, p_z)}{\partial(r, \theta, \phi, p_r, p_\theta, p_\phi)} = \begin{pmatrix} A & 0 \\ C & B \end{pmatrix}
> $$
> 새 위치 좌표 $(x, y, z)$는 운동량에 의존하지 않으므로 오른쪽 위 block이 **0**이다. Block-triangular 행렬의 determinant는 대각 block의 곱 $\det A \cdot \det B$이고, $C$는 결과에 기여하지 않는다. 답안의 계산이 맞는 것은 이 구조 덕분이며, 이 한 줄이 증명의 핵심이다.
>
> **일반적인 관점**: 위치 좌표 변환(point transformation)을 운동량까지 확장한 것은 **canonical transformation**이다. Canonical transformation은 symplectic 구조를 보존하므로 Jacobian이 항상 1이다. 이것이 phase space 부피가 좌표계와 무관한 근본 이유이고, Liouville theorem과도 같은 뿌리다.

> [!failure] 2. (1) 운동량 벡터 식에서 $p_\phi$가 빠졌다
> $\mathbf{p} = p_r\hat r + \frac{1}{r}p_\theta\hat\theta + \frac{1}{r\sin\theta}\,p_\phi\,\hat\phi$여야 한다. 행렬식에는 올바르게 들어가 있으므로 표기 실수다.

> [!failure] 3. (2) "$\langle A \rangle \propto r^2\sin\theta \cdots$"는 잘못된 표기다
> $\langle A \rangle$는 **모든 변수를 적분한 숫자**이므로 $\theta$나 $r$에 비례할 수 없다. 정확한 서술은 다음과 같다. $p_\theta$, $p_\phi$를 먼저 적분하고 나면 **남은 적분의 measure**에 $r^2\sin\theta$가 붙는다.
> $$
> \langle A \rangle = \int dr\,d\theta\,d\phi\,dp_r\; r^2\sin\theta\; F(r, \phi, p_r), \qquad F = \iint f\,du\,dv
> $$
> 즉 공간 부분의 measure가 익숙한 $d^3x = r^2\sin\theta\,dr\,d\theta\,d\phi$로 돌아오고, 각도 부분은 $d\Omega = \sin\theta\,d\theta\,d\phi$가 된다. "같은 solid angle에 같은 가중치"가 회복된다는 것이 문제의 요구였다.
>
> 이 결론에는 "$f$가 $\theta$에 **다른 경로로는** 의존하지 않는다"는 조건도 필요하다 (문제의 가정).

> [!tip] 4. 물리적 의미
> $(\theta, p_\theta, \phi, p_\phi)$ 좌표에서는 phase space 밀도가 균일하다. $\sin\theta$는 "주어진 kinetic energy에서 $p_\phi$가 가질 수 있는 범위"가 $\sin\theta$에 비례해 좁아지는 데 숨어 있다 ($p_\phi \sim r\sin\theta\,v$). 극(pole) 근처에서는 같은 에너지로 허용되는 $p_\phi$ 구간이 작으므로 가중치가 작아진다.

# 연관 노트

- [[SM lecture note - Kinetic Theory and Boltzmann's H-theorem]]
- [[SM lecture note - Ensemble Theory and Energy Hypersurface]] (Voxel $h^{3N}$의 좌표 불변성)
- [[SM HW5-2 Derivation of Liouville's Theorem]]
# 다음 문제
- [[SM HW6-1 Microstates and Entropy of an Ideal Gas|HW6-1 Microstates and Entropy of an Ideal Gas]]