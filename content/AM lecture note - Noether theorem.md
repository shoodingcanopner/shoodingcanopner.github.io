---
title: AM lecture note - Noether theorem
date: "2026-03-05"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기
> 이것은 [[Analytical Mechanics]] 강의를 듣고 적은 필기입니다. 
> 정리가 안 되어 있고, 개인적인 생각과 풀이가 섞여 있을 수도 있습니다. 

# 지난 강의

[[AM lecture note - Holonomic constraints]]

# 오늘의 핵심

### 대칭에 의한 보존량

대칭의 정의와 라그랑주 방정식을 이용하면, 대칭에 의해 보존되는 양이 
$$
\frac{\partial L}{\partial \dot{q}}\frac{\partial Q}{\partial s}\bigg|_{s=0}
$$
임을 유도할 수 있다. 

저거 외우는 방법? space translation과 운동량이 제일 간단한 예시이다. 
앞부분에 있는 $\frac{\partial L}{\partial \dot{q}}$이 바로 generalized momentum의 정의이며, $\frac{\partial Q}{\partial s} = 1$이기 때문이다. 


# 필기 내용


## 뇌터 정리 (Noether's Theorem)

라그랑지안으로부터 대칭성을 찾아라 → **뇌터 정리**.

> 라그랑지안에 **연속 대칭**이 있다면, 그에 상응하는 **보존량**이 있다.

### 보존량이란?

어떤 양 $F$에 대해 $\frac{dF}{dt} := 0$.

$$
\frac{dF}{dt} = \sum_i \left(\frac{\partial F}{\partial q_i}\frac{\partial q_i}{\partial t} + \frac{\partial F}{\partial \dot{q}_i}\frac{\partial \dot{q}_i}{\partial t}\right) + \frac{\partial F}{\partial t}
$$

### 라그랑주 방정식이 성립하면 해밀토니안은 보존량이다

$L$이 $t$에 명시적으로 의존하지 않는다면, 시간에 대해 대칭인 것이고,

$$
H = \left(\sum_j \dot{q}_j \frac{\partial L}{\partial \dot{q}_j}\right) - L
$$

$H$는 보존량이다. 양자역학에서 보존량은 양자화 가능하며, **해밀토니안은 시간의 generator**라는 사실은 익히 알고 있다. 

**증명:**

$$
\frac{dH}{dt} = \sum_j \left(\ddot{q}_j \frac{\partial L}{\partial \dot{q}_j} - \dot{q}_j \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right)\right) - \frac{d}{dt}L
$$

$$
\frac{d}{dt}L = \left(\frac{\partial L}{\partial q_i}\right)\dot{q}_i + \left(\frac{\partial L}{\partial \dot{q}_i}\right)\ddot{q}_i = -\left(\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)\right)\dot{q}_i + \left(\frac{\partial L}{\partial \dot{q}_i}\right)\ddot{q}_i
$$
위 식에 대입하면 모든 항이 cancel out, 0이 된다. 

이 증명에 따르면 
> **경로가 오일러-라그랑주 방정식을 따라야만** 해밀토니안이 보존된다는 말씀.  
> → 따르지 않는 경우가 양자역학이다.

---

## Generalized momentum 

특정 일반화 좌표 $q_j$에 대해 $\frac{\partial L}{\partial q_j} = 0$ 이라면?

$$
p_j = \frac{\partial L}{\partial \dot{q}_j} \text{ 는 보존량이다. 우린 이걸 generalized momentum이라 부른다. }
$$

증명은 아주 간단, 라그랑주 방정식을 이용한다. 

$$
\frac{dp_j}{dt} = \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) = \frac{\partial L}{\partial q_j} = 0
$$

---

## 뇌터 정리 유도하기, 간단한 방법

$q_i(t)$는 라그랑주 방정식을 만족하는 운동이다. 즉, 운동방정식의 soultion이다. 

$s$라는 정도로 $q_i(t)$ 좌표를 transform한 결과를 $Q_i(s, t)$라고 생각하자. (time transform은 아직 생각하지 않는다.)

$s$는 연속적인 값을 가진다. 뇌터 정리는 연속 대칭에 대해서만 유효하다. 
예를 들어 space translation이라면, s는 원래 좌표계의 원점과 변환 좌표계의 원점 사이 변위 벡터이다. 

$$
q_i(t) \longrightarrow Q_i(s, t)
$$
$s=0$이라면 변환 전과 후가 똑같을 것이다. 
$$
\quad Q_i(0, t) = q_i(t)
$$

### 대칭의 정의

$s$의 변화에 따라 운동 방정식이 달라지지 않으면, 
다른 말로 해 $L$이 변하지 않으면, 그 시스템은 $s$에 대해 대칭인 것이다. 

$$
\frac{\partial}{\partial s} L[Q, \dot{Q}, t] = 0
$$
### 대칭에 의한 보존량

대칭의 정의와 라그랑주 방정식을 이용하면, 대칭에 의해 보존되는 양이 
$$
\frac{\partial L}{\partial \dot{q}}\frac{\partial Q}{\partial s}\bigg|_{s=0}
$$
임을 유도할 수 있다. 

저거 외우는 방법? space translation과 운동량이 제일 간단한 예시이다. 
앞부분에 있는 $\frac{\partial L}{\partial \dot{q}}$이 바로 generalized momentum의 정의이며, $\frac{\partial Q}{\partial s} = 1$이기 때문이다. 


**증명:**

$$
\frac{\partial}{\partial s} L = \frac{\partial L}{\partial Q}\frac{\partial Q}{\partial s} + \frac{\partial L}{\partial \dot{Q}}\frac{\partial \dot{Q}}{\partial s}
$$

$s=0$이라는 조건을 넣으면 $\frac{\partial L}{\partial Q}$와 $\frac{\partial L}{\partial \dot{Q}}$에 있던 $Q$가 $q$가 된다. 당장은 납득하기 힘들고, 잊어버리기 쉬운 부분이다. 

$$
\frac{\partial L}{\partial s}\bigg|_{s=0} = \frac{\partial L}{\partial q}\frac{\partial Q}{\partial s}\bigg|_{s=0} + \frac{\partial L}{\partial \dot{q}}\frac{\partial \dot{Q}}{\partial s}\bigg|_{s=0}
$$
라그랑주 방정식을 대입
$$
= \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right)\frac{\partial Q}{\partial s}\bigg|_{s=0} + \frac{\partial L}{\partial \dot{q}}\frac{\partial \dot{Q}}{\partial s}\bigg|_{s=0}
$$
$\frac{\partial \dot{Q}}{\partial s} = \frac{d}{dt} \frac{\partial Q}{\partial s}$ 이란 점을 이용하면, 위의 식을 싹다 시간에 대한 미분으로 나타낼 수 있다. 
$$
= \frac{d}{dt}\left[\frac{\partial L}{\partial \dot{q}}\frac{\partial Q}{\partial s}\bigg|_{s=0}\right]
$$
$\frac{\partial}{\partial s} L =0$에 의해, 결국 위 값은
$$
= 0
$$

따라서,

$$
\frac{\partial L}{\partial \dot{q}} \cdot \frac{\partial Q}{\partial s}\bigg|_{s=0} \equiv \frac{\partial L}{\partial \dot{q}} \cdot \delta q
$$

**는 보존되는 양이다.**


---

## 예시 — Homogeneity of Space

Tong lecture note에 그대로 있는 내용. 
운동량의 보존을 유도하자. 
시스템 내부입자들 끼리만 상호작용하는 경우, 
그러니까 외력이 없는 시스템의 라그랑지안은 다음과 같다. 

$$
L = \frac{1}{2}m\sum_i^N |\dot{\mathbf{r}}_i|^2 - \frac{1}{2}\sum_{\substack{i,j=1 \\ i \neq j}}^N \left(|\mathbf{r}_i - \mathbf{r}_j|\right)^2
$$

변환: $\mathbf{r}_i \to \mathbf{r}_i + s\hat{n}$ ($\hat{n}$은 병진 이동 방향 벡터)

$$
L(\mathbf{r}_i, \dot{\mathbf{r}}_i, t) = L(\mathbf{r}_i + s\hat{n}, \dot{\mathbf{r}}_i, t)
$$

보존량:

$$
\sum_i \frac{\partial L}{\partial \dot{\mathbf{r}}_i} \cdot \hat{n} = \sum_i \mathbf{p}_i \cdot \hat{n} = 0
$$

→ **운동량은 보존량이다.**

## 예시 - Isotropy of Space

변환: $\mathbf{r}_i \to \mathbf{r}_i + \alpha \hat{n} \times \mathbf{r}_i$ ($\hat{n}$은 회전축 벡터)
$\alpha$는 infinitesimal angle이다. 

$$
L(\mathbf{r}_i, \dot{\mathbf{r}}_i) = L(\mathbf{r}_i + \alpha \hat{n} \times \mathbf{r}_i, \dot{\mathbf{r}_i} + \alpha \hat{n} \times \dot{\mathbf{r}_i})
$$
L이 $\alpha$에 의해 변하지 않는다면, 각운동향은 보존된다. 
$$
\sum_i \frac{\partial L}{\partial \dot{\mathbf{r}}_i} \cdot (\hat{\mathbf{n}} \times \mathbf{r}_i) = \sum_i \hat{\mathbf{n}} \cdot (\mathbf{r}_i \times \mathbf{p}_i) = \hat{\mathbf{n}} \cdot \mathbf{L}
$$
첫째 식에서 둘째 식으로 넘어갈 때 generalized momentum공식과 vector identity가 이용되었다. 

---

## 갈릴레이 변환의 10개 Generator에 적용 (Noether's theorem의 전문적 유도, 진짜 복잡함)

갈릴레이 변환에 있는 10개의 generator를 적용해 보자.  
→ 위키피디아를 참고해 강의하셨다. 

복잡해서 혼자서 하나부터 열까지 직접 유도하라고 하면 못 할 거 같다. 
나중에 필요할 때 자세히 보자. 

이제는 시간 변환까지 고려한다!

$$
t \to t' = t + \varepsilon T
$$

$T$는 time generator.
$\varepsilon$은 translation을 하는 정도이다. 이게 정확히 어떤 의미인지는 노트 후반부 Q&A를 참고. 
$\varepsilon =0$이면 translation을 하지 않는 것을 의미한다. 

일반화 좌표는 $\varphi$라는 함수를 이용해서 변환한다. 
문제는 $q_i(t)$속의 시간 $t$까지 $t'$로 변환해야 한 다는 것이다. 
$$
q_i(t) \to q'_i(t') = \varphi[q_i(t), \varepsilon] = \varphi[q_i(t' - \varepsilon T), \varepsilon]
$$

변환된 일반화 속도는 이렇게 정의된다. $t'$이 아니라 $t$로 미분해 준다. 
$$
\dot{q}_i(t) \to \dot{q}'_i(t') = \frac{d}{dt}\varphi[q_i(t), \varepsilon]
$$

> [!note] AI 보충 — 왜 $t'$이 아니라 $t$로 미분하는가?
> 
> 시간 병진 변환 $t' = t + \varepsilon T$에서 $\varepsilon$이 infinitesimal이면 $dt = dt'$이므로, **수치적으로는** $t$로 미분하든 $t'$으로 미분하든 차이가 없다. 라고 내가 생각했다. AI가 맞다고 해줬다. 
> 
> $$
> \frac{d}{dt'}\varphi[q_i(t'-\varepsilon T), \varepsilon] = \frac{d}{dt}\varphi[q_i(t), \varepsilon]\bigg|_{t = t' - \varepsilon T}
> $$
> 
> 그럼에도 $t$로 미분하는 것으로 **정의**하는 이유는 계산의 편의성 때문이다.
> $t'$으로 미분하면 나중에 $\varepsilon$에 대해 미분할 때, $t' = t + \varepsilon T$이므로 $t'$이 $\varepsilon$에 의존해서 추가 항이 생겨 복잡해진다.
> 
> 반면 $t$로 미분해두면, $\varepsilon$-미분과 $t$-미분의 교환이 깔끔하게 성립한다:
> 
> $$
> \frac{d}{d\varepsilon}\frac{d}{dt}\varphi = \frac{d}{dt}\frac{d}{d\varepsilon}\varphi
> $$
> 
> 즉, $t$로 미분하는 것은 **편의를 위해 선택한 정의**이고, 이것이 Step 1~3의 계산을 깔끔하게 만들어준다.

풀어주면
$$
 = \frac{\partial \varphi[q_i(t'-\varepsilon T), \varepsilon]}{\partial q} \cdot \frac{\partial q}{\partial t} = \frac{\partial \varphi[q_i(t'-\varepsilon T), \varepsilon]}{\partial q} \cdot \dot{q}_i(t' - \varepsilon T)
$$


Action은 변환되기 이전에 이렇게 주어진다.

$$
I = \int_{t_1}^{t_2} dt\, L(q_i(t), \dot{q}_i(t), t)
$$
변환된 이후의 action은 이렇게 구해야 한다. 
$$
I'(\varepsilon) = \int_{t_1 + \varepsilon T}^{t_2 + \varepsilon T} dt'\, L\left[q'_i(t'), \dot{q}'_i(t'), t'\right]
$$
변환된 일반화 좌표와 속도를 대입하면, 

$$
I'(\varepsilon) = \int_{t_1 + \varepsilon T}^{t_2 + \varepsilon T} dt'\, L\left[\varphi(q_i(t'-\varepsilon T), \varepsilon),\, \frac{\partial \varphi[q_i(t'-\varepsilon T), \varepsilon]}{\partial q}\dot{q}_i(t'-\varepsilon T),\, t'\right]
$$




> [!note] 위키피디아 유도 기반
> 판서의 미완성 부분을 Wikipedia의 Noether's theorem Derivations 섹션을 바탕으로 완성했다. 교수님께서도 위키피디아 스샷을 보고 판서하셨었다. 
> 원본: [Noether's theorem — Wikipedia](https://en.wikipedia.org/wiki/Noether%27s_theorem#Derivations)

### Step 1: $\varepsilon = 0$에서 미분 (Leibniz rule)

대칭 조건 ($I' = I$) 에서 $\varepsilon$으로 미분하고 $\varepsilon = 0$으로 놓는다. 
$\epsilon$이 적분 경계에 있고 내부 적분 항에도 있어서 계산이 복잡하다. 
이런 때에 사용하는 것이 Leibniz rule이다. 

$$
\frac{d}{d\varepsilon}\int_{a(\varepsilon)}^{b(\varepsilon)} f(t', \varepsilon)\, dt' = f(b(\varepsilon), \varepsilon)\cdot b'(\varepsilon) - f(a(\varepsilon), \varepsilon)\cdot a'(\varepsilon) + \int_{a(\varepsilon)}^{b(\varepsilon)} \frac{\partial f}{\partial \varepsilon}\, dt'
$$

이걸 $I'(\varepsilon)$에 적용하면, 

$$
0 = \frac{dI'}{d\varepsilon}[0] = L[\mathbf{q}[t_2],\dot{\mathbf{q}}[t_2],t_2]\,T - L[\mathbf{q}[t_1],\dot{\mathbf{q}}[t_1],t_1]\,T
$$
$$
+ \int_{t_1}^{t_2} \frac{\partial L}{\partial \mathbf{q}}\left(-\frac{\partial \varphi}{\partial \mathbf{q}}\dot{\mathbf{q}}\,T + \frac{\partial \varphi}{\partial \varepsilon}\right) + \frac{\partial L}{\partial \dot{\mathbf{q}}}\left(-\frac{\partial^2 \varphi}{(\partial \mathbf{q})^2}\dot{\mathbf{q}}^2 T + \frac{\partial^2 \varphi}{\partial \varepsilon \partial \mathbf{q}}\dot{\mathbf{q}} - \frac{\partial \varphi}{\partial \mathbf{q}}\ddot{\mathbf{q}}\,T\right) dt
$$

일단 결과는 이렇다.  $\frac{\partial L}{\partial \varepsilon}$을 어떻게 구했는지가 참 의문이다. 한번 풀어보면

> [!note] AI 보충 — $\frac{\partial L}{\partial \varepsilon}\big|_{\varepsilon=0}$ 계산
> 
> $L$은 $\mathbf{q}'$와 $\dot{\mathbf{q}}'$를 통해 $\varepsilon$에 의존하므로 chain rule:
> 
> $$
> \frac{\partial L}{\partial\varepsilon} = \frac{\partial L}{\partial\mathbf{q}'}\cdot\frac{\partial\mathbf{q}'}{\partial\varepsilon} + \frac{\partial L}{\partial\dot{\mathbf{q}}'}\cdot\frac{\partial\dot{\mathbf{q}}'}{\partial\varepsilon}
> $$
> 
> **첫 번째 인수** $\mathbf{q}' = \varphi[\mathbf{q}[t'-\varepsilon T],\varepsilon]$ 의 $\varepsilon$ 미분:
> $\varepsilon$이 $\varphi$의 첫 번째 인수 $\mathbf{q}[t'-\varepsilon T]$ 안에도, 두 번째 인수 $\varepsilon$ 자체에도 들어있으므로 chain rule:
> 
> $$
> \frac{\partial\mathbf{q}'}{\partial\varepsilon} = \frac{\partial\varphi}{\partial\mathbf{q}}\cdot(-\dot{\mathbf{q}}T) + \frac{\partial\varphi}{\partial\varepsilon}
> $$
> 
> **두 번째 인수** $\dot{\mathbf{q}}' = \frac{\partial\varphi}{\partial\mathbf{q}}[\mathbf{q}[t'-\varepsilon T],\varepsilon]\cdot\dot{\mathbf{q}}[t'-\varepsilon T]$ 의 $\varepsilon$ 미분:
> 곱이므로 product rule:
> 
> $$
> \frac{\partial\dot{\mathbf{q}}'}{\partial\varepsilon} = \frac{\partial}{\partial\varepsilon}\!\left(\frac{\partial\varphi}{\partial\mathbf{q}}\right)\cdot\dot{\mathbf{q}} + \frac{\partial\varphi}{\partial\mathbf{q}}\cdot\frac{\partial\dot{\mathbf{q}}}{\partial\varepsilon}
> $$
> 
> 앞 항: $\frac{\partial\varphi}{\partial\mathbf{q}}$도 $\varepsilon$이 두 곳에 들어있으므로 chain rule:
> 
> $$
> \frac{\partial}{\partial\varepsilon}\!\left(\frac{\partial\varphi}{\partial\mathbf{q}}\right) = \frac{\partial^2\varphi}{(\partial\mathbf{q})^2}(-\dot{\mathbf{q}}T) + \frac{\partial^2\varphi}{\partial\varepsilon\partial\mathbf{q}}
> $$
> 
> 뒤 항: $\dot{\mathbf{q}}[t'-\varepsilon T]$에서 $\varepsilon$은 $t$를 통해서만 들어오므로:
> 
> $$
> \frac{\partial}{\partial\varepsilon}\dot{\mathbf{q}}[t'-\varepsilon T] = -\ddot{\mathbf{q}}\cdot T
> $$
> 
> 따라서:
> 
> $$
> \frac{\partial\dot{\mathbf{q}}'}{\partial\varepsilon} = -\frac{\partial^2\varphi}{(\partial\mathbf{q})^2}\dot{\mathbf{q}}^2 T + \frac{\partial^2\varphi}{\partial\varepsilon\partial\mathbf{q}}\dot{\mathbf{q}} - \frac{\partial\varphi}{\partial\mathbf{q}}\ddot{\mathbf{q}}T
> $$
> 
> 전부 합치면 ($\varepsilon=0$에서 $\frac{\partial\varphi}{\partial\mathbf{q}}\big|_{\varepsilon=0}=1$):
> 
> $$
> \frac{\partial L}{\partial\varepsilon}\bigg|_{\varepsilon=0} = \frac{\partial L}{\partial\mathbf{q}}\left(-\frac{\partial\varphi}{\partial\mathbf{q}}\dot{\mathbf{q}}T + \frac{\partial\varphi}{\partial\varepsilon}\right) + \frac{\partial L}{\partial\dot{\mathbf{q}}}\left(-\frac{\partial^2\varphi}{(\partial\mathbf{q})^2}\dot{\mathbf{q}}^2 T + \frac{\partial^2\varphi}{\partial\varepsilon\partial\mathbf{q}}\dot{\mathbf{q}} - \frac{\partial\varphi}{\partial\mathbf{q}}\ddot{\mathbf{q}}T\right)
> $$

### Step 2: 오일러-라그랑주로 $T$에 관한 항 정리

오일러-라그랑주 방정식을 이용하면 다음이 성립한다:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \mathbf{q}}\dot{\mathbf{q}}\,T\right) = \frac{\partial L}{\partial \mathbf{q}}\frac{\partial \varphi}{\partial \mathbf{q}}\dot{\mathbf{q}}\,T + \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial^2 \varphi}{(\partial \mathbf{q})^2}\dot{\mathbf{q}}^2 T + \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \mathbf{q}}\ddot{\mathbf{q}}\,T
$$

이를 Step 1 식
$$
\int_{t_1}^{t_2} \frac{\partial L}{\partial \mathbf{q}}\left(-\frac{\partial \varphi}{\partial \mathbf{q}}\dot{\mathbf{q}}\,T + \frac{\partial \varphi}{\partial \varepsilon}\right) + \frac{\partial L}{\partial \dot{\mathbf{q}}}\left(-\frac{\partial^2 \varphi}{(\partial \mathbf{q})^2}\dot{\mathbf{q}}^2 T + \frac{\partial^2 \varphi}{\partial \varepsilon \partial \mathbf{q}}\dot{\mathbf{q}} - \frac{\partial \varphi}{\partial \mathbf{q}}\ddot{\mathbf{q}}\,T\right) dt
$$
에 대입하면 적분 내 $T$에 관한 항들이 경계항으로 빠져나온다:

$$
0 = \left[L\,T - \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \mathbf{q}}\dot{\mathbf{q}}\,T\right]_{t_1}^{t_2} + \int_{t_1}^{t_2} \frac{\partial L}{\partial \mathbf{q}}\frac{\partial \varphi}{\partial \varepsilon} + \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial^2 \varphi}{\partial \varepsilon \partial \mathbf{q}}\dot{\mathbf{q}}\; dt
$$

### Step 3: 오일러-라그랑주로 $\varepsilon$에 관한 항 정리

같은 방법으로 적분 내의 $\varepsilon$에 관한 항도 경계항으로 빠진다:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \varepsilon}\right) = \frac{\partial L}{\partial \mathbf{q}}\frac{\partial \varphi}{\partial \varepsilon} + \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial^2 \varphi}{\partial \varepsilon \partial \mathbf{q}}\dot{\mathbf{q}}
$$

최종적으로:

$$
0 = \left[L\,T - \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \mathbf{q}}\dot{\mathbf{q}}\,T + \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \varepsilon}\right]_{t_1}^{t_2}
$$

### 뇌터 보존량 (Noether Charge)

$t_1, t_2$가 임의적이므로 대괄호 안이 보존량이다. $\varepsilon=0$에서 $\frac{\partial \varphi}{\partial \mathbf{q}}\big|_{\varepsilon=0} = 1$이므로:

$$
\boxed{\mathcal{Q} = \left(\frac{\partial L}{\partial \dot{\mathbf{q}}}\dot{\mathbf{q}} - L\right)T - \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \varepsilon} = H\cdot T - \frac{\partial L}{\partial \dot{\mathbf{q}}}\frac{\partial \varphi}{\partial \varepsilon}}
$$

$$
\frac{d\mathcal{Q}}{dt} = 0
$$

> 부호 주의: $(\frac{\partial L}{\partial \dot{\mathbf{q}}}\dot{\mathbf{q}} - L) = H$이므로 $T$에 의한 항은 $H \cdot T$, $\frac{\partial \varphi}{\partial \varepsilon}$에 의한 항은 $-p_i \cdot \frac{\partial \varphi}{\partial \varepsilon}$이다.

### 갈릴레이 군 10개 Generator 적용

| 변환 | $T$ | $\frac{\partial \varphi}{\partial \varepsilon}$ | 보존량 $\mathcal{Q}$ |
|------|-----|------|------|
| 시간 평행이동 | $1$ | $0$ | $H$ (에너지) |
| 공간 평행이동 | $0$ | $\hat{n}$ | $-\mathbf{p}\cdot\hat{n}$ (운동량) |
| 회전 | $0$ | $\hat{n}\times\mathbf{r}$ | $-\hat{n}\cdot\mathbf{L}$ (각운동량) |
| 갈릴레이 부스트 | $0$ | $t\hat{n}$ | $-\mathbf{p}\cdot t\hat{n}$ (질량중심) |

# 궁금한 내용

### 왜 양자역학에서 보존량은 양자화 가능한 걸까?

### 왜 $\varphi[\mathbf{q}, \varepsilon]$는 $\varepsilon$에 대한 함수인가?
$\epsilon$은 이미 처음에 time translation의 척도로 쓴 변수이다. 
그런데 이걸 space translation을 일으키는 $\varphi[\mathbf{q}, \varepsilon]$에서 또 쓴다.
병진 이동 거리 같은 별도의 물리적 변수를 쓰지 않는 이유가 뭘까?

> [!note] AI 보충 설명
> 
> 뇌터 정리를 적용하려면 변환을 **하나의 실수 매개변수로 이어지는 연속적인 경로**로 봐야 한다. 그게 $\varepsilon$이다.
> 
> $$
> \varphi[\mathbf{q}, \varepsilon] : \quad \varepsilon = 0 \text{ 이면 항등변환}, \quad \varepsilon = 1 \text{ 이면 원하는 변환}
> $$
> 
> 즉, $\varepsilon$은 "변환을 얼마나 했는가"를 나타내는 **단일 실수 눈금**이다.
> 
> **병진 이동 예시:** "$x$ 방향으로 거리 $a$만큼 이동"은 이렇게 표현한다:
> 
> $$
> \varphi[\mathbf{q}, \varepsilon] = \mathbf{q} + \varepsilon\,\hat{x}
> $$
> 
> $\varepsilon = a$ 일 때 원하는 변환이 완성된다. 별도의 변수 $a$가 $\varepsilon$ 하나로 흡수된 것이다.
> 
> **핵심:** 뇌터 정리에서 실제로 필요한 건 유한한 변환 자체가 아니라, $\varepsilon = 0$ 근방의 infinitesimal 변환:
> 
> $$
> \frac{\partial \varphi}{\partial \varepsilon}\bigg|_{\varepsilon=0}
> $$
> 
> 이것만 있으면 보존량을 구할 수 있다. 변환의 구체적인 물리적 변수가 뭔지는 중요하지 않고, 그 변환이 $\varepsilon = 0$ 근방에서 어떤 방향으로 좌표를 움직이는지만 알면 된다.
> 
> 따라서 $\varphi$는 물리적 변수($a$, 회전각, $\mathbf{v}$...)를 **$\varepsilon$이라는 하나의 추상적인 눈금으로 통일**한 표현이다. 이렇게 하면 어떤 종류의 연속 변환이든 같은 공식 하나로 처리할 수 있다.

> [!note] AI 보충 — $\varepsilon$ 하나로 갈릴레이 군 10개 generator를 모두 표현할 수 있는가?
> 
> **결론:** $\varepsilon$은 "변환의 세기"만 담당하고, 변환의 종류(방향, 축 등)는 $T$와 $\varphi$의 함수 형태가 결정한다.
> 
> $\varepsilon$은 "볼륨 다이얼"에 비유할 수 있다. 어떤 음악을 틀지는 $T$와 $\varphi$가 결정하고, 볼륨 다이얼은 항상 같은 역할(크기 눈금)만 한다.
> 
> 갈릴레이 군의 10개 변환을 나열하면:
> 
> | 변환 | $T$ | $\varphi[\mathbf{q}, \varepsilon]$ |
> |------|------|------|
> | 시간 평행이동 (1개) | $1$ | $\mathbf{q}$ |
> | 공간 병진 (3개) | $0$ | $\mathbf{q} + \varepsilon\hat{n}$ ($\hat{n} = \hat{x}, \hat{y}, \hat{z}$) |
> | 회전 (3개) | $0$ | $\mathbf{q} + \varepsilon(\hat{n}\times\mathbf{q})$ |
> | 갈릴레이 부스트 (3개) | $0$ | $\mathbf{q} + \varepsilon t\hat{n}$ |
> 
> $\varepsilon$ 하나가 10가지 정보를 동시에 담는 것이 **아니라**, 각각의 변환에 대해 $\varepsilon$을 **독립적으로 10번 별도 적용**하는 것이다. 뇌터 정리의 공식 하나로 어떤 연속 대칭이든 처리할 수 있는 것은 바로 이 구조 덕분이다.


# AI의 보충 설명

## 뇌터 정리의 중요성

뇌터 정리는 현대 이론 물리학의 근간이다:

| 대칭 | 보존량 |
|------|--------|
| 시간 평행이동 | 에너지 (해밀토니안) |
| 공간 평행이동 | 운동량 |
| 회전 | 각운동량 |
| 게이지 대칭 | 전하 (전자기학) |
| 위상 대칭 | 입자 수 (양자역학) |

특히 **해밀토니안이 시간의 generator**라는 말은 양자역학에서 $e^{-iHt/\hbar}$가 시간 발전 연산자임을 통해 명확해진다. 고전역학에서 보존량이 generator인 것, 양자역학에서 에르미트 연산자가 유니터리 변환을 생성하는 것이 같은 구조다 — [[포아송 브라켓과 양자역학 교환자의 연결성]] 참고.

## Cyclic Coordinate

$\frac{\partial L}{\partial q_j} = 0$인 좌표를 **cyclic coordinate** 또는 **ignorable coordinate**라 한다. 오일러-라그랑주 방정식에 의해 즉시 $\dot{p}_j = 0$이 나온다. 이것은 뇌터 정리의 가장 단순한 케이스로, 좌표 $q_j \to q_j + s$의 대칭에 대응된다.

# 연관 학습 노트

- [[Lagrangian Mechanics]]
- [[Symmetry_Conservation_Laws_Three_Step_Proof]]
- [[포아송 브라켓과 양자역학 교환자의 연결성]]
- [[Lagrangian_and_Generalized_Momentum]]

# References

- David Tong, *Classical Dynamics* lecture notes (Cambridge)
- [[2 The Lagrangian Formalism.pdf]]
- [Noether's theorem — Wikipedia, Derivations 섹션](https://en.wikipedia.org/wiki/Noether%27s_theorem#Derivations)

# 다음 강의

[[AM lecture note - Noether theorem in field theory]]

# 필기 이미지

![[Pasted image 20260305175146.png]]
![[Pasted image 20260305175153.png]]
![[Pasted image 20260305175159.png]]
![[Pasted image 20260305175206.png]]
