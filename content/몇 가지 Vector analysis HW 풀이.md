---
title: 몇 가지 Vector analysis HW 풀이
date: "2026-04-19"
tags:
  - electrodynamics
  - homework
  - vector-analysis
---

# 몇 가지 Vector Analysis HW 풀이

> [!info] 시험 대비
> [[Electrodynamics 그 모든 것]]
> 전기역학1 중간고사 대비 기출 문제 풀이. 원본: [[Old HW PHYS503.pdf]]

---

## 1. (6) Vector identities via Levi-Civita notation

→ 여기 문제는 내 기준 다 쉬움. 
종이에는 다 풀었음. 나중에 전산화하기.

Show that with the use of Levi-Civita notation,

### a)

$$
\varepsilon_{ijk} = \hat{e}_i \cdot (\hat{e}_j \times \hat{e}_k)
$$

**풀이:**
![[Pasted image 20260419200341.png]]
---

### b)

$$
\varepsilon_{ijk}\varepsilon_{ilm} = \delta_{jl}\delta_{km} - \delta_{jm}\delta_{kl}
$$
내가 중요하다 생각한 식, 교수님도 중요하게 생각함. 
**풀이:**


---

### c)

$$
(\vec{A} \times \vec{B}) \cdot (\vec{C} \times \vec{D}) = (\vec{A} \cdot \vec{C})(\vec{B} \cdot \vec{D}) - (\vec{A} \cdot \vec{D})(\vec{B} \cdot \vec{C})
$$

**풀이:**

$$
(\vec{A}\times\vec{B})\cdot(\vec{C}\times\vec{D}) = (\hat{e}_i\,\varepsilon_{i23}\,A_2 B_3)\cdot(\hat{e}_\ell\,\varepsilon_{\ell jk}\,C_j D_k)
$$

$$
= (\delta_{i\ell}\,\varepsilon_{i23}\,\varepsilon_{\ell jk})\,A_2 B_3 C_j D_k = \varepsilon_{i23}\,\varepsilon_{ijk}\,A_2 B_3 C_j D_k
$$

1b)의 항등식 $\varepsilon_{ijk}\varepsilon_{ilm}=\delta_{jl}\delta_{km}-\delta_{jm}\delta_{kl}$ 을 적용:

$$
= (\delta_{2j}\delta_{3k} - \delta_{2k}\delta_{3j})\,A_2 B_3 C_j D_k
$$

$$
= A_2 B_3 C_2 D_3 - A_2 B_3 C_3 D_2
$$

$$
= (\vec{A}\cdot\vec{C})(\vec{B}\cdot\vec{D}) - (\vec{A}\cdot\vec{D})(\vec{B}\cdot\vec{C})
$$

왜냐하면, 두 벡터 $\vec{X}$와 $\vec{Y}$에 대해 $\vec{X}\cdot\vec{Y}=X_i Y_i$ 이므로. $\square$

---

### d)

$$
(\vec{A} \times \vec{B}) \times (\vec{C} \times \vec{D}) = (\vec{A} \cdot \vec{C} \times \vec{D})\vec{B} - (\vec{B} \cdot \vec{C} \times \vec{D})\vec{A}
$$

**풀이:**

**우변을 변환:**

$$
\{\vec{A}\cdot(\vec{C}\times\vec{D})\}\vec{B} - \{\vec{B}\cdot(\vec{C}\times\vec{D})\}\vec{A}
$$

$$
= (\varepsilon_{ijk}\,A_i\,C_j\,D_k)\vec{B} - (\varepsilon_{lmn}\,B_l\,C_m\,D_n)\vec{A}
$$

$$
= \hat{e}_b\,\varepsilon_{ijk}\,A_i\,C_j\,D_k\,B_b - \hat{e}_a\,\varepsilon_{lmn}\,B_l\,C_m\,D_n\,A_a
$$

**좌변을 변환:**

$$
(\vec{A}\times\vec{B})\times(\vec{C}\times\vec{D}) = (\hat{e}_1\,\varepsilon_{123}\,A_2\,B_3)\times(\hat{e}_4\,\varepsilon_{456}\,C_5\,D_6)
$$

$\hat{e}_1 \times \hat{e}_4 = \varepsilon_{14p}\,\hat{e}_p$ 이므로,

$$
= \hat{e}_p\,\varepsilon_{14p}\,\varepsilon_{123}\,\varepsilon_{456}\,A_2\,B_3\,C_5\,D_6
$$

$\varepsilon_{ijk}\varepsilon_{ilm}=\delta_{jl}\delta_{km}-\delta_{jm}\delta_{kl}$ 적용:

$$
= \hat{e}_p\,(\delta_{42}\delta_{p3}-\delta_{43}\delta_{p2})\,\varepsilon_{456}\,A_2\,B_3\,C_5\,D_6
$$

$$
= \hat{e}_3\,A_2\,B_3\,C_5\,D_6\,\varepsilon_{256} - \hat{e}_2\,\varepsilon_{356}\,A_2\,B_3\,C_5\,D_6
$$

여기서 더미 인덱스를 재명명하면 ($3\to b,\;2\to i,\;5\to j,\;6\to k$ 및 $2\to a,\;3\to l,\;5\to m,\;6\to n$):

$$
\hat{e}_3\,\varepsilon_{256}\,A_2\,C_5\,D_6\,B_3 = \hat{e}_b\,\varepsilon_{ijk}\,A_i\,C_j\,D_k\,B_b
$$

$$
\hat{e}_2\,\varepsilon_{356}\,B_3\,C_5\,D_6\,A_2 = \hat{e}_a\,\varepsilon_{lmn}\,B_l\,C_m\,D_n\,A_a
$$

따라서 좌변 = 우변. $\square$
[[Poisson_Equation_for_Dirac_Delta_and_Point_Charge_Potential]]

---

### e)

$$
\nabla \cdot (\vec{f} \times \vec{g}) = \vec{g} \cdot (\nabla \times \vec{f}) - \vec{f} \cdot (\nabla \times \vec{g})
$$

**풀이:**

어떤 벡터 $\vec{A}$에 대해 그 발산을 아인슈타인 표기로 나타내면,

$$
\nabla \cdot \vec{A} = \partial_i A_i
$$

$$
\nabla \cdot (\vec{f} \times \vec{g}) = \nabla \cdot (\hat{e}_i\,\varepsilon_{ijk}\,f_j\,g_k) = \varepsilon_{ijk}\,\partial_i(f_j\,g_k)
$$

곱의 미분 법칙을 적용:

$$
= \varepsilon_{ijk}\,g_k(\partial_i f_j) + \varepsilon_{ijk}\,f_j(\partial_i g_k)
$$

**첫째 항:**

$$
\varepsilon_{ijk}\,g_k(\partial_i f_j) = g_k\{\hat{e}_k \cdot (\nabla \times \vec{f})\} = \vec{g} \cdot (\nabla \times \vec{f})
$$

여기서 $\nabla \times \vec{f} = \varepsilon_{ijk}\,\hat{e}_i\,\partial_j\,f_k = \varepsilon_{ijk}\,\hat{e}_k\,\partial_i\,f_j$ 를 이용했다.

**둘째 항:**

$$
\varepsilon_{ijk}\,f_j(\partial_i g_k) = -f_j\{\hat{e}_j \cdot (\nabla \times \vec{g})\} = -\vec{f} \cdot (\nabla \times \vec{g})
$$

여기서 $\nabla \times \vec{g} = \varepsilon_{ijk}\,\hat{e}_i\,\partial_j\,g_k = -\varepsilon_{ijk}\,\hat{e}_j\,\partial_i\,g_k$ (인덱스의 역할 바꿈, 반대칭으로 부호 변경)를 이용했다.

따라서,

$$
\nabla \cdot (\vec{f} \times \vec{g}) = \vec{g} \cdot (\nabla \times \vec{f}) - \vec{f} \cdot (\nabla \times \vec{g}) \quad \square
$$

---

### f)

$$
\nabla \times (\vec{f} \times \vec{r}) = 2\vec{f} + r\frac{\partial \vec{f}}{\partial r} - \vec{r}(\nabla \cdot \vec{f})
$$

**풀이:**

먼저 일반적인 $\nabla \times (\vec{A} \times \vec{B})$를 전개하자.

$$
\nabla \times (\hat{e}_i\,\varepsilon_{ijk}\,A_j\,B_k) = \hat{e}_l\,\varepsilon_{lmn}\,\partial_m[\varepsilon_{njk}\,A_j\,B_k]
$$

$$
= \hat{e}_l\,\varepsilon_{lmn}\,\varepsilon_{njk}\,\partial_m(A_j B_k)
$$

$\varepsilon_{lmn}\varepsilon_{njk} = \delta_{lj}\delta_{mk} - \delta_{lk}\delta_{mj}$ 적용:

$$
= \hat{e}_j\,\partial_k(A_j B_k) - \hat{e}_k\,\partial_j(A_j B_k)
$$

전개하면:

$$
= \hat{e}_j\,A_j(\partial_k B_k) + \hat{e}_j\,B_k(\partial_k A_j) - \hat{e}_k\,B_k(\partial_j A_j) - \hat{e}_k\,A_j(\partial_j B_k)
$$

$$
= \vec{A}(\nabla \cdot \vec{B}) + (\vec{B}\cdot\nabla)\vec{A} - \vec{B}(\nabla \cdot \vec{A}) - (\vec{A}\cdot\nabla)\vec{B}
$$

이제 $\vec{A}=\vec{f}$, $\vec{B}=\vec{r}$ 대입. 필요한 보조 결과:

$\vec{r} = \hat{e}_i\,x_i$, $r^2 = x_i x_i$ 이므로,

$$
\frac{\partial r}{\partial x_i} = \frac{x_i}{r}, \qquad \frac{\partial}{\partial x_i} = \frac{x_i}{r}\frac{\partial}{\partial r}
$$

$$
\nabla \cdot \vec{r} = \frac{\partial x_i}{\partial x_i} = 3
$$

$$
\vec{r}\cdot\nabla = x_i\frac{\partial}{\partial x_i} = \frac{x_i x_i}{r}\frac{\partial}{\partial r} = r\frac{\partial}{\partial r}
$$

$$
(\vec{f}\cdot\nabla)\vec{r} = f_i\frac{\partial}{\partial x_i}(\hat{e}_j\,x_j) = \hat{e}_j\,f_i\,\delta_{ij} = \hat{e}_i\,f_i = \vec{f}
$$

대입하면:

$$
\nabla \times (\vec{f} \times \vec{r}) = \vec{f}(3) + r\frac{\partial \vec{f}}{\partial r} - \vec{r}(\nabla \cdot \vec{f}) - \vec{f}
$$

$$
= 2\vec{f} + r\frac{\partial \vec{f}}{\partial r} - \vec{r}(\nabla \cdot \vec{f})
$$
$\square$

---

## 2. (5) Derivatives of $\exp(i\vec{k} \cdot \vec{r})$

With $\vec{A} = \vec{c}\exp(i\vec{k} \cdot \vec{r})$, show that the replacement of $\nabla$ to $i\vec{k}$ is valid for:

$$
\nabla \cdot \vec{A}, \quad \nabla \times \vec{A}, \quad \nabla \times (\nabla \times \vec{A}), \quad \nabla(\nabla \cdot \vec{A}), \quad \nabla^2 \vec{A}
$$

**풀이:**

$\vec{c}$는 상수 벡터이므로 $\nabla$는 오직 $\exp(i\vec{k}\cdot\vec{r})$에만 작용한다. 핵심은 다음 관계식이다:

$$
\partial_j \exp(i\vec{k}\cdot\vec{r}) = \partial_j \exp(i k_m x_m) = i k_j \exp(i\vec{k}\cdot\vec{r})
$$

따라서 $\nabla \exp(i\vec{k}\cdot\vec{r}) = i\vec{k}\exp(i\vec{k}\cdot\vec{r})$, 즉 $\nabla$가 $\exp$에 작용할 때마다 $i\vec{k}$를 곱하는 것과 동일하다.

**① $\nabla \cdot \vec{A}$:**

$$
\nabla \cdot \vec{A} = \partial_j (c_j e^{i\vec{k}\cdot\vec{r}}) = c_j (ik_j) e^{i\vec{k}\cdot\vec{r}} = i\vec{k}\cdot\vec{c}\, e^{i\vec{k}\cdot\vec{r}} = i\vec{k}\cdot\vec{A}
$$

**② $\nabla \times \vec{A}$:**

$$
(\nabla \times \vec{A})_i = \varepsilon_{ijk}\,\partial_j (c_k e^{i\vec{k}\cdot\vec{r}}) = \varepsilon_{ijk}\,(ik_j)\,c_k\, e^{i\vec{k}\cdot\vec{r}} = (i\vec{k}\times\vec{A})_i
$$

따라서 $\nabla \times \vec{A} = i\vec{k} \times \vec{A}$.

**③ $\nabla \times (\nabla \times \vec{A})$:**

②의 결과를 두 번 적용:

$$
\nabla \times (\nabla \times \vec{A}) = i\vec{k} \times (i\vec{k} \times \vec{A}) = (i\vec{k})\times((i\vec{k})\times\vec{A})
$$

**④ $\nabla(\nabla \cdot \vec{A})$:**

①의 결과에 다시 $\nabla \to i\vec{k}$ 적용:

$$
\nabla(\nabla \cdot \vec{A}) = i\vec{k}\,(i\vec{k}\cdot\vec{A}) = (i\vec{k})(i\vec{k}\cdot\vec{A})
$$

**⑤ $\nabla^2 \vec{A}$:**
벡터 이중곱 공식은 알아두자. 
아래 노트에서 상세히 유도했다. 
이중곱은 짭플라시안 빼기 라플라시안. 
[[Vector Identities in Electrodynamics]]
$$
\nabla^2 \vec{A} = \nabla(\nabla \cdot \vec{A}) - \nabla \times (\nabla \times \vec{A})
$$

또는 직접 계산:

$$
\nabla^2 \vec{A} = \partial_j \partial_j \vec{A} = (ik_j)(ik_j)\vec{A} = -k^2 \vec{A} = (i\vec{k})^2 \vec{A}
$$

모든 경우에 $\nabla \to i\vec{k}$ 치환이 성립한다. $\square$

---

## 3. (4) Laplacian of $1/r$

Show that,

$$
\nabla^2 \frac{1}{r} = -4\pi\delta(\vec{r})
$$

**풀이:**
이미 풀어본 적 있는 문제. 
아래 노트에 상세히 정리됨
[[Poisson_Equation_for_Dirac_Delta_and_Point_Charge_Potential]]
r이 0이 아닌 곳에는 그냥 라플라시안을 풀어보면 0이 나온다. 
가우스법칙을 이용하면 식의 좌변을 통적분한 값이 $-4\pi$라는 것을 알 수 있다. 

---

## 4. (5) Equivalence of three forms (spherical coordinates)

Show that the following three forms (in spherical coordinates) are equivalent.

### a)

$$
\frac{1}{r^2}\frac{d}{dr}\left[r^2 \frac{d}{dr}f(r)\right]
$$

### b)

$$
\frac{1}{r}\frac{d^2}{dr^2}[r f(r)]
$$

### c)

$$
\frac{d^2}{dr^2}f(r) + \frac{2}{r}\frac{d}{dr}f(r)
$$

**풀이:**

**(a) → (c):**

$$
\frac{1}{r^2}\frac{d}{dr}\left[r^2 \frac{d}{dr}f(r)\right] = \frac{1}{r^2}\left\{\frac{\partial r^2}{\partial r}\left(\frac{\partial f}{\partial r}\right) + r^2\frac{\partial^2 f}{\partial r^2}\right\}
$$

$$
= \frac{1}{r^2}\left\{2r\left(\frac{\partial f}{\partial r}\right) + r^2\frac{\partial^2 f}{\partial r^2}\right\}
$$

$$
= \frac{2}{r}\frac{\partial f}{\partial r} + \frac{\partial^2 f}{\partial r^2}
$$

→ (c)와 같다.

**(b) → (c):**

$$
\frac{1}{r}\frac{d^2}{dr^2}[r f(r)] = \frac{1}{r}\frac{d}{dr}\left[\left(\frac{\partial r}{\partial r}\right)f + r\frac{\partial f}{\partial r}\right]
$$

$$
= \frac{1}{r}\frac{d}{dr}\left[f + r\frac{\partial f}{\partial r}\right]
$$

$$
= \frac{1}{r}\left(\frac{\partial f}{\partial r} + \frac{\partial f}{\partial r} + r\frac{\partial^2 f}{\partial r^2}\right)
$$

$$
= \frac{2}{r}\frac{\partial f}{\partial r} + \frac{\partial^2 f}{\partial r^2}
$$

→ (c)와 같다. $\square$

---

## 5. (5) Complex representation

Show that

$$
\langle \vec{a} \rangle = \frac{1}{2}(\vec{b} \times \vec{c}^*)
$$

for the complex representation to have the $\text{Re}\{\vec{a}\} = \text{Re}\left\{\frac{1}{2}(\vec{b} \times \vec{c}^*)\right\}$

for any physical quantities of a, b or c.

**풀이:**


$\vec{b}$와 $\vec{c}$가 같은 진동수로 시간에 의존적이다.

$$
\vec{b}(t) = \vec{b}_0\, e^{-i\omega t}, \quad \vec{c}(t) = \vec{c}_0\, e^{-i\omega t}
$$

실제 물리량의 외적:

$$
\vec{a} = \text{Re}(\vec{b}) \times \text{Re}(\vec{c})
$$

$\text{Re}(X) = \frac{1}{2}(X + X^*)$ 를 사용하면:

$$
\text{Re}(\vec{b}) = \frac{1}{2}(\vec{b}_0\, e^{-i\omega t} + \vec{b}_0^*\, e^{i\omega t})
$$

따라서:

$$
\vec{a} = \frac{1}{4}(\vec{b}_0\, e^{-i\omega t} + \vec{b}_0^*\, e^{i\omega t}) \times (\vec{c}_0\, e^{-i\omega t} + \vec{c}_0^*\, e^{i\omega t})
$$

$$
= \frac{1}{4}\left(\vec{b}_0 \times \vec{c}_0\, e^{-2i\omega t} + \vec{b}_0^* \times \vec{c}_0^*\, e^{2i\omega t} + \vec{b}_0 \times \vec{c}_0^* + \vec{b}_0^* \times \vec{c}_0\right)
$$

시간 평균을 취하면, $\langle e^{\pm 2i\omega t}\rangle = 0$ 이므로:

$$
\langle e^{2i\omega t} \rangle = \int_0^{2\pi/\omega} \cos(2\omega t) + i\sin(2\omega t)\, dt = 0, \quad \langle e^{-2i\omega t} \rangle = 0
$$

$$
\langle \vec{a} \rangle = \frac{1}{4}(\vec{b}_0 \times \vec{c}_0^* + \vec{b}_0^* \times \vec{c}_0)
$$

한편, $\vec{b}(t) \times \vec{c}^*(t) = \vec{b}_0\, e^{-i\omega t} \times \vec{c}_0^*\, e^{i\omega t} = \vec{b}_0 \times \vec{c}_0^*$ (시간 의존성 상쇄) 이고,

$$
\text{Re}(\vec{b}(t) \times \vec{c}^*(t)) = \frac{1}{2}(\vec{b}(t) \times \vec{c}^*(t) + \vec{b}^*(t) \times \vec{c}(t)) = \frac{1}{2}(\vec{b}_0 \times \vec{c}_0^* + \vec{b}_0^* \times \vec{c}_0)
$$

따라서:

$$
\langle \vec{a} \rangle = \frac{1}{4}(\vec{b}_0 \times \vec{c}_0^* + \vec{b}_0^* \times \vec{c}_0) = \frac{1}{2}\text{Re}(\vec{b} \times \vec{c}^*) \quad \square
$$

---
