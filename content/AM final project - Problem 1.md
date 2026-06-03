---
draft: true
---


# Problem 1

Based on the following effective action:
$$S = \int \left( (\mathbf{p} + e\mathbf{A}) \cdot \frac{d\mathbf{x}}{dt} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \frac{d\mathbf{p}}{dt} \right) dt$$ 

$$\nabla_{p} \times \mathbf{a} = \Theta \equiv \frac{\hat{\mathbf{p}}}{2|\mathbf{p}|^{2}}, \quad \hat{p} = \frac{\mathbf{p}}{|\mathbf{p}|}$$

where $a_{\mu}$ is a momentum-space Berry connection, derive the Hamiltonian equation of motion and solve them to find the below expression
$$\begin{cases}
\mathfrak{m}\frac{dx}{dt} = \hat{p} + eE \times \Theta + (\boldsymbol{\Theta} \cdot \hat{\mathbf{p}}) eB \\
\mathfrak{m}\frac{dp}{dt} = eE + e\hat{p} \times B + e^{2}(E \cdot B)\Theta
\end{cases}$$
$$\mathfrak{m} = 1 + e\boldsymbol{\Theta} \cdot B$$ 

Here, $\mathfrak{m}$ may be regarded as an effective mass for this particle.

* **(Questions)**
  * Can you imagine a UV complete version of this effective action? In other words, figure out where this effective action comes from. *(Hint: Maybe google or AI with "chiral fermions". It is important to notice the momentum-linear dispersion, which implies that Poincaré invariance = Lorentz invariance + Translational invariance will play a key role.)* 
  * Can you figure out the Lorentz symmetry in this particle dynamics (optional)? 
---
라그랑지안은 이렇게 정의된다. 
$$
L = (\mathbf{p} + e\mathbf{A}) \cdot \dot{\mathbf{x}} - (|\mathbf{p}| + e\phi) - \mathbf{a} \cdot \dot{\mathbf{p}}
$$

$x$와 $p$, 둘 각각에 대한 Euler-Lagrange equation을 푼다. 
## Step 1: $x^j$에 대한 Euler-Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{x}^j} - \frac{\partial L}{\partial x^j} = 0
$$

**첫째 항:**

$$
\frac{\partial L}{\partial \dot{x}^j} = p_j + eA_j
$$

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{x}^j} = \frac{d}{dt}(p_j + eA_j) = \dot{p}_j + e\,\dot{x}^i\partial_{x^i} A_j\,
$$

**둘째 항:**

$$
\frac{\partial L}{\partial x^j} = e\,\partial_{x^j} A_i\,\dot{x}^i - e\,\partial_{x^j}\phi
$$

**합치면:**

$$
\dot{p}_j + e\,\partial_{x^i} A_j\,\dot{x}^i - e\,\partial_{x^j} A_i\,\dot{x}^i + e\,\partial_{x^j}\phi = 0
$$

$$
\dot{p}_j = -e\,\partial_{x^j}\phi + e(\partial_{x^j} A_i - \partial_{x^i} A_j)\dot{x}^i = eE_j + e(\dot{x}\times B)_j
$$

$$
\boxed{\dot{\mathbf{p}} = e\mathbf{E} + e\dot{\mathbf{x}}\times \mathbf{B}}
\tag{I}
$$

---

## Step 2: $p^j$에 대한 Euler-Lagrange 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{p}^j} - \frac{\partial L}{\partial p^j} = 0
$$

**첫째 항:**

$$
\frac{\partial L}{\partial \dot{p}^j} = -a_j \quad \Rightarrow \quad \frac{d}{dt}(-a_j) = -\dot{p}^i\partial_{p^i}a_j\,
$$

**둘째 항:**

$$
\frac{\partial L}{\partial p^j} = \dot{x}^j - \partial_{p^j}a_i\,\dot{p}^i - \frac{p^j}{|p|}
$$

**합치면:**

$$
-\partial_{p^i}a_j\,\dot{p}^i - \dot{x}^j + \partial_{p^j}a_i\,\dot{p}^i + \hat{p}^j = 0
$$

$$
\dot{x}^j = \hat{p}^j + (\partial_{p^j}a_i - \partial_{p^i}a_j)\dot{p}^i = \hat{p}^j - \epsilon_{ijk}\Theta_{k}\,\dot{p}^i = \hat{p}^j - [\boldsymbol{\Theta} \times \dot{\mathbf{p}}]^j
$$

$$
\boxed{\dot{\mathbf{x}} = \hat{\mathbf{p}} - \boldsymbol{\Theta} \times \dot{\mathbf{p}}}
\tag{II}
$$

---

## Step 3: $\dot{x}$ 방정식 — (I)을 (II)에 대입
식(II) 속에 있는 $\dot{p}$에 식(I)을 대입한다. 
$$
\dot{\mathbf{x}} = \hat{\mathbf{p}} - \boldsymbol{\Theta} \times (e\mathbf{E} + e\dot{\mathbf{x}}\times \mathbf{B})
$$
$$
= \hat{\mathbf{p}} - e(\boldsymbol{\Theta} \times \mathbf{E}) - e\,\boldsymbol{\Theta} \times (\dot{\mathbf{x}} \times \mathbf{B})
$$

Triple product 전개 $\boldsymbol{\Theta} \times (\dot{\mathbf{x}} \times \mathbf{B}) = \dot{\mathbf{x}}(\boldsymbol{\Theta} \cdot \mathbf{B}) - \mathbf{B}(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})$:

$$
\dot{\mathbf{x}} = \hat{\mathbf{p}} - e(\boldsymbol{\Theta} \times \mathbf{E}) - e(\boldsymbol{\Theta} \cdot \mathbf{B})\dot{\mathbf{x}} + e(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})\mathbf{B}
$$

$\dot{\mathbf{x}}$ 항을 좌변으로 이항:

$$
(1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B})\dot{\mathbf{x}} - e(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})\mathbf{B} = \hat{\mathbf{p}} - e(\boldsymbol{\Theta} \times \mathbf{E})
\tag{III}
$$

**$(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})$ 소거:** 식 (III)의 양변에 $\boldsymbol{\Theta}$를 내적:

$$
(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})(1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B}) - e(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})(\boldsymbol{\Theta} \cdot \mathbf{B}) = \boldsymbol{\Theta} \cdot \hat{\mathbf{p}} - e\,\boldsymbol{\Theta} \cdot (\boldsymbol{\Theta} \times \mathbf{E})
$$

$\boldsymbol{\Theta} \cdot (\boldsymbol{\Theta} \times \mathbf{E}) = 0$ 이고, 좌변을 정리하면:

$$
(\boldsymbol{\Theta} \cdot \dot{\mathbf{x}})\Big[(1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B}) - e(\boldsymbol{\Theta} \cdot \mathbf{B})\Big] = \boldsymbol{\Theta} \cdot \hat{\mathbf{p}}
$$

$$
\boldsymbol{\Theta} \cdot \dot{\mathbf{x}} = \boldsymbol{\Theta} \cdot \hat{\mathbf{p}}
\tag{IV}
$$

(IV)를 (III)에 대입:

$$
(1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B})\dot{\mathbf{x}} - e(\boldsymbol{\Theta} \cdot \hat{\mathbf{p}})\mathbf{B} = \hat{\mathbf{p}} - e(\boldsymbol{\Theta} \times \mathbf{E})
$$

Effective mass $\mathfrak{m} \equiv 1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B}$ 를 정의하면

$$
\boxed{\mathfrak{m}\,\frac{d\mathbf{x}}{dt} = \hat{\mathbf{p}} + e(\mathbf{E} \times \boldsymbol{\Theta}) + e(\boldsymbol{\Theta} \cdot \hat{\mathbf{p}})\mathbf{B}} \tag{2.1-1}
$$

---

## Step 4: $\dot{p}$ 방정식 — (II)를 (I)에 대입

$$
\dot{\mathbf{p}} = e\mathbf{E} + e(\hat{\mathbf{p}} - \boldsymbol{\Theta} \times \dot{\mathbf{p}}) \times \mathbf{B}
$$
$$
= e\mathbf{E} + e\hat{\mathbf{p}} \times \mathbf{B} - e(\boldsymbol{\Theta} \times \dot{\mathbf{p}}) \times \mathbf{B}
$$

Triple product 전개 $(\boldsymbol{\Theta} \times \dot{\mathbf{p}}) \times \mathbf{B} = -\boldsymbol{\Theta}(\dot{\mathbf{p}} \cdot \mathbf{B}) + \dot{\mathbf{p}}(\boldsymbol{\Theta} \cdot \mathbf{B})$:

$$
\dot{\mathbf{p}} + e(\boldsymbol{\Theta} \cdot \mathbf{B})\dot{\mathbf{p}} = e\mathbf{E} + e\hat{\mathbf{p}} \times \mathbf{B} + e\,\boldsymbol{\Theta}(\dot{\mathbf{p}} \cdot \mathbf{B}) \tag{V}
$$

**$(\dot{\mathbf{p}} \cdot \mathbf{B})$ 소거:** 식 (V)에 $\mathbf{B}$를 내적:

$$
(1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B})(\dot{\mathbf{p}} \cdot \mathbf{B}) = e(\mathbf{E}\cdot \mathbf{B}) + e(\hat{\mathbf{p}} \times \mathbf{B})\cdot \mathbf{B} + e\,(\boldsymbol{\Theta}\cdot \mathbf{B})(\dot{\mathbf{p}} \cdot \mathbf{B})
$$

$(\hat{p} \times B) \cdot B = 0$ 이므로:

$$
(1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B})(\dot{\mathbf{p}} \cdot \mathbf{B}) - e(\boldsymbol{\Theta} \cdot \mathbf{B})(\dot{\mathbf{p}} \cdot \mathbf{B}) = e(\mathbf{E} \cdot \mathbf{B})
$$

$$
\dot{\mathbf{p}} \cdot \mathbf{B} = e(\mathbf{E} \cdot \mathbf{B})
\tag{VI}
$$

(VI)를 (V)에 대입하고 effective mass를 도입:

$$
\boxed{\mathfrak{m}\,\frac{d\mathbf{p}}{dt} = e\mathbf{E} + e\hat{\mathbf{p}} \times \mathbf{B} + e^2(\mathbf{E} \cdot \mathbf{B})\boldsymbol{\Theta}} \tag{2.1-2}
$$

## 결과

$$
\mathfrak{m} = 1 + e\,\boldsymbol{\Theta} \cdot \mathbf{B}
$$

$$
\begin{cases}
\mathfrak{m}\,\dfrac{d\mathbf{x}}{dt} = \hat{\mathbf{p}} + e\mathbf{E} \times \boldsymbol{\Theta} + (\boldsymbol{\Theta} \cdot \hat{\mathbf{p}})\,e\mathbf{B} \\[8pt]
\mathfrak{m}\,\dfrac{d\mathbf{p}}{dt} = e\mathbf{E} + e\hat{\mathbf{p}} \times \mathbf{B} + e^{2}(\mathbf{E} \cdot \mathbf{B})\boldsymbol{\Theta}
\end{cases}
$$


- $\mathfrak{m} = 1 + e\boldsymbol{\Theta}\cdot \mathbf{B}$: Berry 곡률과 자기장의 결합에서 오는 **위상공간 측도 보정 인자**
- $e\mathbf{E}\times\boldsymbol{\Theta}$: 전기장과 Berry 곡률의 결합 → **anomalous Hall velocity**
- $(\boldsymbol{\Theta}\cdot\hat{\mathbf{p}})\,e\mathbf{B}$: Berry 곡률의 자기장 방향 보정
- $e^2(\mathbf{E}\cdot \mathbf{B})\boldsymbol{\Theta}$: **chiral magnetic effect** 류의 항 (Weyl 반금속 등에서 등장)

이 방정식들은 **Weyl 반금속**이나 카이랄 입자의 anomalous transport를 기술한다.


## UV complete version

*UV complete version은 Souriau의 massless spinning particle model이다. 이 모델에서 spin은 독립적인 자유도이며, Poincaré 대칭이 자연스럽게 작용한다. Spin enslaving s=sp^s = s\hat{p} s=sp^​을 gauge fixing으로 적용하면 6차원으로 reduce되어 effective action (1.1)이 복원된다.*