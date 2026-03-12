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

## Incompatible Observables

$[A, B] \neq 0$인 경우, A와 B의 **simultaneous eigenket은 존재하지 않는다.**

**증명.** 만약 이 둘의 simultaneous eigenket $|a', b'\rangle$가 있다면?

$$
AB|a',b'\rangle = A(b'|a',b'\rangle) = a'b'|a',b'\rangle
$$

$$
BA|a',b'\rangle = B(a'|a',b'\rangle) = a'b'|a',b'\rangle
$$

$AB = BA$가 되어 $[A,B] \neq 0$의 전제조건을 만족하지 못한다.

### 관측의 기본항

중간에 또 다른 물리량으로 관측한 사건이이 측정 결과에 영향을 미친다.

**사례 1.** A로 $|\alpha\rangle$를 관측하여 $|a'\rangle$ 상태로 준비, 이를 B로 관측하고, 또 C로 관측한다. $|c'\rangle$ 상태가 관측될 확률은?

$$
\sum_{b'} |\langle b'|a'\rangle|^2 |\langle c'|b'\rangle|^2
$$

**사례 2.** A로 $|\alpha\rangle$를 관측하여 $|a'\rangle$ 상태로 준비, 바로 이를 C로 관측한다. $|c'\rangle$ 상태가 관측될 확률은?

$$
|\langle c'|a'\rangle|^2 = \left|\sum_{b'} \langle c'|b'\rangle\langle b'|a'\rangle\right|^2
$$

두 경우는 일반적으로 다르다:

$$
\sum_{b'} |\langle b'|a'\rangle|^2 |\langle c'|b'\rangle|^2 \neq \left|\sum_{b'} \langle c'|b'\rangle\langle b'|a'\rangle\right|^2
$$

전자는 summation 중에 **phase에 대한 정보가 날아가지만**, 후자는 summation에 **phase가 반영된다.**

## Uncertainty Principle

Observable $A$의 **variance**는 이렇게 정의된다:

$$
\langle(\Delta A)^2\rangle = \langle(A - \langle A\rangle)^2\rangle = \langle A^2 - 2\langle A\rangle A + \langle A\rangle^2\rangle = \langle A^2\rangle - \langle A\rangle^2
$$

Operator $\Delta A$를 $\Delta A = A - \langle A\rangle$라고 정의한다.

**Uncertainty Principle:**

$$
\langle(\Delta A)^2\rangle\langle(\Delta B)^2\rangle \geq \frac{1}{4}\left|\langle[A,B]\rangle\right|^2
$$

### 증명에 필요한 Lemma

**Lemma 1. 코시-슈바르츠 부등식.**
[[Cauchy-Schwarz Inequality]]
유클리드 공간에서는 두 벡터 $\vec{a}$와 $\vec{b}$에 대해:

$$
|\vec{a}|^2|\vec{b}|^2 \geq |\vec{a}\cdot\vec{b}|^2
$$

힐베르트 공간에서 두 ket $|\alpha\rangle$와 $|\beta\rangle$가 있을 때:

$$
\langle\alpha|\alpha\rangle\langle\beta|\beta\rangle \geq |\langle\alpha|\beta\rangle|^2
$$

**Lemma 2.** 에르미트 연산자의 expectation value는 **real value**이다.

**Lemma 3.** anti-에르미트 연산자의 expectation value는 **pure imaginary value**이다.

(Lemma 2와 Lemma 3의 증명은 간단하다.)

### 본격적인 증명

임의의 ket $|\alpha\rangle$에 대해, $\Delta A|\alpha\rangle$와 $\Delta B|\alpha\rangle$에 코시-슈바르츠 부등식을 적용한다:

$$
\langle\alpha|(\Delta A)^2|\alpha\rangle\langle\alpha|(\Delta B)^2|\alpha\rangle \geq |\langle\alpha|\Delta A\Delta B|\alpha\rangle|^2
$$

$$
\langle(\Delta A)^2\rangle\langle(\Delta B)^2\rangle \geq |\langle\Delta A\Delta B\rangle|^2
$$

우변을 다르게 나타낼 수 있다. 어떤 operator이든 에르미트 연산자와 anti-에르미트 연산자로 나눌 수 있기 때문에:

$$
\Delta A\Delta B = \frac{1}{2}[\Delta A, \Delta B] + \frac{1}{2}\{\Delta A, \Delta B\}
$$

또한 $[\Delta A, \Delta B] = [A, B]$이다. $[A,B]$는 anti-에르미트이고 $\{\Delta A, \Delta B\}$는 에르미트이므로:

$$
\langle\Delta A\Delta B\rangle = \frac{1}{2}\langle[A,B]\rangle + \frac{1}{2}\langle\{\Delta A,\Delta B\}\rangle
$$

이때 $\langle[A,B]\rangle$는 imaginary number, $\langle\{\Delta A,\Delta B\}\rangle$는 real number이므로:

$$
|\langle\Delta A\Delta B\rangle|^2 = \frac{1}{4}|\langle[A,B]\rangle|^2 + \frac{1}{4}|\langle\{\Delta A,\Delta B\}\rangle|^2
$$

다시 부등식으로 돌아가면:

$$
|\langle\Delta A\Delta B\rangle|^2 \geq \frac{1}{4}|\langle[A,B]\rangle|^2
$$

따라서:

$$
\langle(\Delta A)^2\rangle\langle(\Delta B)^2\rangle \geq \frac{1}{4}\left|\langle[A,B]\rangle\right|^2
$$

# 궁금한 내용

생각난 질문을 여기에 메모

## Q. 불확정성 원리 유도에서 왜 anti-commutator 항을 버리나? 등식 조건의 물리적 의미는?

**Q1. $|\langle\Delta A\Delta B\rangle|^2 = \frac{1}{4}|\langle[A,B]\rangle|^2 + \frac{1}{4}|\langle\{\Delta A,\Delta B\}\rangle|^2$에서 최종 부등식으로 넘어갈 때 왜 anti-commutator 항을 버리나?**

맞다, 더 **느슨한(덜 정확한) 부등식**이 된다. 의도적으로 그렇게 하는 것이다.

$\frac{1}{4}|\langle\{\Delta A,\Delta B\}\rangle|^2 \geq 0$이므로 이 항을 버리면:

$$
\langle(\Delta A)^2\rangle\langle(\Delta B)^2\rangle \geq \frac{1}{4}|\langle[A,B]\rangle|^2
$$

이렇게 하는 이유는 **anti-commutator 항은 상태 $|\alpha\rangle$에 의존하는 반면**, commutator $[A,B]$는 연산자만의 성질이기 때문이다. 예를 들어 $[x,p] = i\hbar$는 어떤 상태에서도 항상 성립하는 고정된 값이다.

anti-commutator 항을 포함한 식은 특정 상태에 대한 더 tight한 정보를 주긴 하지만, **"이 두 observable은 원리적으로 동시에 정확히 측정될 수 없다"는 보편적인 하한**을 주려면 commutator 항만 남기는 것이 더 유용하다.

**Q2. 등식 성립 조건 — $\langle\{\Delta A,\Delta B\}\rangle = 0$의 물리적 의미는?**

불확정성 원리의 등식이 성립하려면 두 조건이 동시에 필요하다:

- **조건 1.** Cauchy-Schwarz 등호 조건: $\Delta B|\alpha\rangle = i\lambda\,\Delta A|\alpha\rangle$ (어떤 실수 $\lambda$에 대해)
- **조건 2.** $\langle\{\Delta A,\Delta B\}\rangle = 0$

조건 2를 해석하면:

$$
\langle\{\Delta A,\Delta B\}\rangle = 2\,\text{Re}\langle\Delta A\Delta B\rangle = 0
$$

즉, $\langle\Delta A\Delta B\rangle$이 **순허수**라는 뜻이다. 두 observable의 fluctuation 사이에 **실수 부분의 상관관계(real correlation)가 없다**는 것을 의미한다.

가장 유명한 예시는 **Gaussian wave packet**이다. 위치공간에서 순수하게 실수인 가우시안 $\psi(x) \propto e^{-x^2/4\sigma^2}$ 상태는 $\langle\{\Delta x,\Delta p\}\rangle = 0$을 만족하고, $\Delta x\cdot\Delta p = \hbar/2$인 **최소 불확정성 상태(minimum uncertainty state)** 가 된다.

반대로 $\langle\{\Delta A,\Delta B\}\rangle \neq 0$이면 두 observable의 fluctuation 사이에 실수 상관관계가 존재한다. 예를 들어 **chirped Gaussian**(위상이 위치에 따라 변하는 파동묶음)은 위치가 크면 운동량도 크게 되는 상관이 생겨 $\Delta x\cdot\Delta p > \hbar/2$가 된다.

**요약:** anti-commutator expectation value가 0인 상태 = 두 observable의 fluctuation 사이에 여분의 상관관계가 없는 상태 = 불확정성 원리의 하한을 정확히 달성하는 최소 불확정성 상태.
# AI의 보충 설명


# 연관 학습 노트


# References

강의 ppt 링크를 이곳에 

# 다음 강의
[[QM lecture note - Basis Transformation Operator]]


# 원본 필기 이미지

![[Pasted image 20260310153332.png]]
![[Pasted image 20260310153339.png]]
![[Pasted image 20260310153343.png|637]]
![[Pasted image 20260310153404.png]]
![[Pasted image 20260310153408.png]]
![[Pasted image 20260310153127.png]]
![[Pasted image 20260310153121.png]]
![[Pasted image 20260310153118.png]]