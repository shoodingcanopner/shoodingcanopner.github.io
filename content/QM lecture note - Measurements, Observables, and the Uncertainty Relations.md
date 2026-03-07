---
title: QM lecture note - Measurements, Observables, and the Uncertainty Relations
date: 2026-03-05
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Quantum Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의
[[QM lecture note - Base Kets and Matrix Representation]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기. 
AI한테 시켜도 되는데 추천은 안 함. 
# 필기 내용

## Measurements

### 관측의 성질

1. 관측을 하면, 관측에 쓰인 operator의 eigenstate중 하나로 **붕괴**한다. (state reduction)

2. 관측을 하면 eigenvalue 중 하나가 나온다.

$$
|\alpha\rangle \xrightarrow{A\text{로 측정, 일부 확률로} a'\text{나옴}} |a'\rangle \xrightarrow{A\text{로 다시 측정하면 확정적으로}} |a'\rangle
$$

첫 번째 관측에서 eigenvalue $a'$를 얻으면, 짧은 시간 안에 바로 두 번째 관측을 하면 100% 확률로 또 $a'$를 얻는다.

3. Born Rule,  관측 확률에 대한 규칙. 

관측 전 상태는 observable의 eigenket의 linear combination이다. 

$$
|\alpha\rangle = \sum_{a'} c_{a'}|a'\rangle
$$

$a'$를 측정할 확률은 이렇다. 이건 양자역학의 axiom이라서 더 이상 묻고 따지면 안 된다. 

$$
|c_{a'}|^2 = |\langle a'|\alpha\rangle|^2
$$

### Expectation Value

$$
\langle\alpha|A|\alpha\rangle = \sum_{a'} a'|\langle a'|\alpha\rangle|^2 = \sum_{a'} a'\langle\alpha|a'\rangle\langle a'|\alpha\rangle
$$
## Example: Spin-1/2 System (계속)

### S_x, S_y의 Eigenket

$S_z$의 eigen ket을 $|+\rangle$, $|-\rangle$이라 하고, $S_x$와 $S_y$의 eigenket을 각각 $|S_x;\pm\rangle$, $|S_y;\pm\rangle$이라 하자.

$S_x$가 $+$로 관측된 빔의 z-spin을 측정하면, $|+\rangle$과 $|-\rangle$으로 관측될 확률이 같다:

$$
|\langle+|S_x;+\rangle| = |\langle-|S_x;+\rangle| = \frac{1}{\sqrt{2}}
$$

$|S_x;+\rangle$을 $|+\rangle$, $|-\rangle$ basis로 나타내면:

$$
|S_x;+\rangle = \frac{1}{\sqrt{2}}|+\rangle + \frac{1}{\sqrt{2}}e^{i\delta_1}|-\rangle
$$

$|S_x;-\rangle$은 $|S_x;+\rangle$에 대해 orthogonal해야 하므로:

$$
|S_x;-\rangle = \frac{1}{\sqrt{2}}|+\rangle - \frac{1}{\sqrt{2}}e^{i\delta_1}|-\rangle
$$

$S_x$를 나타낼 수 있다. $|S_x;\pm\rangle$의 eigenvalue는 $\pm\frac{\hbar}{2}$이므로:

$$
S_x = \frac{\hbar}{2}\left\{e^{-i\delta_1}|+\rangle\langle-| + e^{i\delta_1}|-\rangle\langle+|\right\}
$$

마찬가지로 $S_y$에 대해서도:

$$
|S_y;\pm\rangle = \frac{1}{\sqrt{2}}|+\rangle \pm \frac{1}{\sqrt{2}}e^{i\delta_2}|-\rangle
$$

$$
S_y = \frac{\hbar}{2}\left\{e^{-i\delta_2}|+\rangle\langle-| + e^{+i\delta_2}|-\rangle\langle+|\right\}
$$

### $\delta_1$, $\delta_2$ 결정

$|S_x;-\rangle$으로 준비된 빔 또한 같은 조건을 만족해야 한다:

$$
|\langle S_y;\pm|S_x;+\rangle| = |\langle S_y;\pm|S_x;-\rangle| = \frac{1}{\sqrt{2}}
$$

이를 정리하면:

$$
\frac{1}{2}\left|1 \pm e^{i(\delta_1-\delta_2)}\right| = \frac{1}{\sqrt{2}}
$$

따라서 $\delta_2 - \delta_1 = \pm\frac{\pi}{2}$. 즉, x와 y에 대한 eigenket들은 $\frac{\pi}{2}$만큼의 위상 차 외에는 수 없다. 관습적으로 $\delta_1 = 0$, $\delta_2 = \frac{\pi}{2}$로 둔다.

### 최종 결과

$$
|S_x;\pm\rangle = \frac{1}{\sqrt{2}}|+\rangle \pm \frac{1}{\sqrt{2}}|-\rangle
$$

$$
|S_y;\pm\rangle = \frac{1}{\sqrt{2}}|+\rangle \pm \frac{i}{\sqrt{2}}|-\rangle
$$

$$
S_x = \frac{\hbar}{2}\left[|+\rangle\langle-| + |-\rangle\langle+|\right]
$$

$$
S_y = \frac{\hbar}{2}\left[-i|+\rangle\langle-| + i|-\rangle\langle+|\right]
$$

**Commutation & Anti-commutation relations:**

$$
[S_i, S_j] = i\varepsilon_{ijk}\hbar S_k
$$

$$
\{S_i, S_j\} = \frac{1}{2}\hbar^2 \delta_{ij}
$$

**Matrix representation 정리:**

$$
|S_z;+\rangle = \begin{pmatrix}1\\0\end{pmatrix}, \quad |S_z;-\rangle = \begin{pmatrix}0\\1\end{pmatrix}
$$

$$
|S_x;+\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}, \quad |S_x;-\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}
$$

$$
|S_y;+\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\i\end{pmatrix}, \quad |S_y;-\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-i\end{pmatrix}
$$

$$
S_z = \frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}, \quad S_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}, \quad S_y = \frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}
$$

## Compatible Observables

**중요한 성질: A와 B가 compatible $\iff$ $[A,B]=0$.**

- A가 non-degenerate이면, $\langle a''|B|a'\rangle$는 diagonal이다.
- **Degeneracy** → eigenvalue가 같은 eigenvector가 2개 이상 존재.

### 증명: $[A,B]=0$이면 A의 eigenket이 B의 eigenket이기도 함

$$
\langle a''|[A,B]|a'\rangle = \langle a''|AB|a'\rangle - \langle a''|BA|a'\rangle
$$

$$
= a''\langle a''|B|a'\rangle - a'\langle a''|B|a'\rangle = 0
$$

$a'' \neq a'$이면 $\langle a''|B|a'\rangle = 0$. 따라서:

$$
\langle a''|B|a'\rangle = \langle a'|B|a'\rangle\,\delta_{a''a'}
$$

B를 completeness relation으로 전개하면:

$$
B|a'\rangle = \sum_{a''} |a''\rangle\langle a''|B|a''\rangle\underbrace{\langle a''|a'\rangle}_{\delta_{a''a'}} = \langle a'|B|a'\rangle\,|a'\rangle
$$

$|a'\rangle$은 B의 eigenket이기도 하다. $|a'\rangle$에 대한 B의 eigenvalue는 $\langle a'|B|a'\rangle$이다.

### A가 degenerate한 경우

n개의 eigenket이 같은 eigenvalue $a'$를 가진다고 하자:

$$
A|a'^{(i)}\rangle = a'|a'^{(i)}\rangle \quad \text{for } i=1,2,\cdots,n
$$

$|a'^{(i)}\rangle$의 linear combination 중 B를 대각화할 수 있는 것을 찾아야 한다. (힐베르트 공간 자체가 countable basis를 가지기 때문에 가능하다고 간주)

이 경우 **simultaneous eigenket** $|a', b'\rangle$을 정의한다:

$$
A|a',b'\rangle = a'|a',b'\rangle, \quad B|a',b'\rangle = b'|a',b'\rangle
$$

### 측정의 물리적 의미

**A에 degeneracy가 없고 A, B가 compatible한 경우:**

$|\alpha\rangle$는 아무 측정을 안 한 상태로, $|a',b'\rangle$의 linear sum이다. A로 측정하면 eigenvalue $a''$가 나온 경우 상태는 $|a'',b''\rangle$로 고정된다. 이때 B로 측정하면 100% 확률로 $b''$가 나올 것이다.

**A가 degenerate한 경우:**

$|\alpha\rangle$를 A로 측정하여 $a'$가 관측되는 순간, 상태는 $|a', b'^{(i)}\rangle$의 linear sum으로 바뀐다:

$$
\sum_{i}^{n} c_{a'}^{(i)} |a', b'^{(i)}\rangle
$$

이때 B를 측정하여 $b'^{(j)}$가 나온다면 상태는 $|a', b'^{(j)}\rangle$로 고정되고, 다시 A로 측정하면 100%로 $a'$가 나온다.

# 궁금한 내용

생각난 질문을 여기에 메모
# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의



