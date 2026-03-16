---
title: AM lecture note - Coordinate transformation invariance of Lagrangian equation
date: 2026-03-04
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
[[AM lecture note - Lagrangian for fields]]

# 오늘의 핵심

정리를 끝내고 나서 핵심을 이곳에 적기.
AI한테 시켜도 되는데 추천은 안 함.

# 필기 내용

## 라그랑주 방정식도 coordinate transform에 invariant 한가?

변환 되기 이전 좌표인 $x^A$와 변환된 이후 좌표인 $q_a$가 있다.

$N$개의 particles와 3-dimension을 가정한다.

$q_a$는 변환 이전의 모든 좌표와 시간에 의존한다. 
$$
q_a = q_a(x_1, \cdots, x_{3N}, t)
$$
$\dot{q}_a$는 $q_a$의 시간에 대한 전미분으로 정의된다. 
$$
\dot{q}_a = \frac{d}{dt}q_a = \left(\frac{\partial q_a}{\partial x^A}\right)\dot{x}^A + \frac{\partial}{\partial t}q_a = \left(\dot{x}^A \frac{\partial}{\partial x^A} + \frac{\partial}{\partial t}\right)q_a
$$

반대로 $x^A$도 $q_a$의 함수:

$$
x^A = x^A(q_1, \cdots, q_{3N}, t)
$$

$$
\dot{x}^A = \left(\dot{q}_a \frac{\partial}{\partial q_a} + \frac{\partial}{\partial t}\right)x^A
$$

변환을 취하기 위해 필요한 건 자코비안이다.

$$
J_{nm} = \frac{\partial x^n}{\partial q_m}
$$

행렬로 쓰면:

$$
\begin{bmatrix} x^1 \\ \vdots \\ x^{3N} \end{bmatrix} = J \begin{bmatrix} q^1 \\ \vdots \\ q^{3N} \end{bmatrix}
$$

$$
J = \begin{bmatrix} \dfrac{\partial x^1}{\partial q_1} & \dfrac{\partial x^1}{\partial q_2} & \cdots \\[10pt] \dfrac{\partial x^2}{\partial q_1} & \dfrac{\partial x^2}{\partial q_2} & \cdots \\ \vdots & & \ddots \end{bmatrix}
$$

---

## 라그랑주 방정식이 변환에 invariant 라면

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{x}^A}\right) - \frac{\partial \mathcal{L}}{\partial x^A} = 0 \iff \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}_a}\right) - \frac{\partial \mathcal{L}}{\partial q_a} = 0
$$

이를 증명하려면, $\mathcal{L}$은 $x^A$와 $\dot{x}^A$의 함수이므로 chain rule을 적용한다.

**$\dfrac{\partial \mathcal{L}}{\partial q_a}$ 계산:**

$$
\frac{\partial \mathcal{L}}{\partial q_a} = \frac{\partial \mathcal{L}}{\partial x^A}\frac{\partial x^A}{\partial q_a} + \frac{\partial \mathcal{L}}{\partial \dot{x}^A}\frac{\partial \dot{x}^A}{\partial q_a}
$$

여기서 $\dfrac{\partial \dot{x}^A}{\partial q_a}$를 계산하면:

$$
\frac{\partial \dot{x}^A}{\partial q_a} = \frac{\partial}{\partial q_a}\left(\dot{q}_b \frac{\partial x^A}{\partial q_b} + \frac{\partial x^A}{\partial t}\right) = \dot{q}_b \frac{\partial^2 x^A}{\partial q_a \partial q_b} + \frac{\partial^2 x^A}{\partial q_a \partial t}
$$

따라서:

$$
\frac{\partial \mathcal{L}}{\partial q_a} = \frac{\partial \mathcal{L}}{\partial x^A}\frac{\partial x^A}{\partial q_a} + \dot{q}_b \frac{\partial \mathcal{L}}{\partial \dot{x}^A} \frac{\partial^2 x^A}{\partial q_a \partial q_b} + \frac{\partial^2 x^A}{\partial q_a \partial t}
$$

**$\dfrac{\partial \mathcal{L}}{\partial \dot{q}_a}$ 계산:**

$$
\frac{\partial \mathcal{L}}{\partial \dot{q}_a} = \frac{\partial \mathcal{L}}{\partial x^A}\underbrace{\frac{\partial x^A}{\partial \dot{q}_a}}_{=0} + \frac{\partial \mathcal{L}}{\partial \dot{x}^A}\frac{\partial \dot{x}^A}{\partial \dot{q}_a}
$$

$x^A$는 $\dot{q}$에 의존하지 않으므로 첫 항은 0이다. 두 번째 항에서:

$$
\frac{\partial \dot{x}^A}{\partial \dot{q}_a} = \frac{\partial}{\partial \dot{q}_a}\left(\dot{q}_b \frac{\partial x^A}{\partial q_b} + \frac{\partial x^A}{\partial t}\right) = \delta_{ab}\frac{\partial x^A}{\partial q_b} = \frac{\partial x^A}{\partial q_a}
$$

따라서:

$$
\frac{\partial \mathcal{L}}{\partial \dot{q}_a} = \frac{\partial \mathcal{L}}{\partial \dot{x}^A}\frac{\partial x^A}{\partial q_a}
$$

---

## 마침내, 불변성 증명

> [!note] 자체 풀이
> 아래 유도는 수업에서 생략된 부분을 직접 계산한 것.

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}_a}\right) - \frac{\partial \mathcal{L}}{\partial q_a}
= \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{x}^A}\frac{\partial x^A}{\partial q_a}\right) - \frac{\partial \mathcal{L}}{\partial q_a}
$$

$$
= \left(\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}^A}\right)\frac{\partial x^A}{\partial q_a} + \frac{\partial \mathcal{L}}{\partial \dot{x}^A}\left(\frac{d}{dt}\frac{\partial x^A}{\partial q_a}\right) - \frac{\partial \mathcal{L}}{\partial q_a}
$$

$\dfrac{d}{dt}\left(\dfrac{\partial x^A}{\partial q_a}\right) = \dfrac{\partial \dot{x}^A}{\partial q_a}$ 대입, 그리고 $\dfrac{\partial \mathcal{L}}{\partial q_a}$를 앞에서 구한 식으로 대입하면:

$$
= \left(\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}^A}\right)\frac{\partial x^A}{\partial q_a} + \frac{\partial \mathcal{L}}{\partial \dot{x}^A}\frac{\partial \dot{x}^A}{\partial q_a} - \frac{\partial \mathcal{L}}{\partial x^A}\frac{\partial x^A}{\partial q_a} - \frac{\partial \mathcal{L}}{\partial \dot{x}^A}\frac{\partial \dot{x}^A}{\partial q_a}
$$

두 번째와 네 번째 항이 상쇄되어:

$$
= \left(\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{x}^A} - \frac{\partial \mathcal{L}}{\partial x^A}\right)\frac{\partial x^A}{\partial q_a}
$$

이 괄호 안이 바로 $x^A$ 좌표에서의 라그랑주 방정식이므로, 그것이 0이면:

$$
\frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}_a}\right) - \frac{\partial \mathcal{L}}{\partial q_a} = 0 \quad \checkmark
$$

**결론: 라그랑주 방정식은 좌표 변환에 대해 불변이다.**
좌표변환된 라그랑주 방정식을 얻고 싶다면 바로 자코비 행렬을 이용하면 된다. 

## 변환된 좌표계에서 라그랑지안 역학이 사용되는 예

Tong 강의록에 그대로 있다. 
중간 풀이 과정을 추가한 내용을 별도 노트에 정리했다. 
[[Lagrangian in Rotating Coordinate, Coriolis force]]


---

# 궁금한 내용

### $\dfrac{d}{dt}\left(\dfrac{\partial x^A}{\partial q_a}\right) = \dfrac{\partial \dot{x}^A}{\partial q_a}$ 인가?

증명 과정에서 이 관계를 사용했는데, 맞는가?

# AI의 보충 설명

## $\dfrac{d}{dt}\left(\dfrac{\partial x^A}{\partial q_a}\right) = \dfrac{\partial \dot{x}^A}{\partial q_a}$ 는 맞다

이건 **"$\partial/\partial q$와 $d/dt$의 교환 가능성"** 이라고 불리는 관계로, 라그랑지안 역학에서 자주 쓰인다.

$x^A = x^A(q_1, \ldots, q_{3N}, t)$이므로 $\dot{x}^A$는:

$$
\dot{x}^A = \sum_b \frac{\partial x^A}{\partial q_b}\dot{q}_b + \frac{\partial x^A}{\partial t}
$$

이를 $q_a$로 편미분하면 ($x^A$는 $\dot{q}$에 의존하지 않으므로):

$$
\frac{\partial \dot{x}^A}{\partial q_a} = \sum_b \frac{\partial^2 x^A}{\partial q_a \partial q_b}\dot{q}_b + \frac{\partial^2 x^A}{\partial q_a \partial t}
$$

한편 $\dfrac{d}{dt}\left(\dfrac{\partial x^A}{\partial q_a}\right)$를 chain rule로 전개하면:

$$
\frac{d}{dt}\left(\frac{\partial x^A}{\partial q_a}\right) = \sum_b \frac{\partial^2 x^A}{\partial q_a \partial q_b}\dot{q}_b + \frac{\partial^2 x^A}{\partial q_a \partial t}
$$

두 식이 완전히 같다. $\checkmark$

# 연관 학습 노트


# References

Tong의 강의록
[[2 The Lagrangian Formalism.pdf]]

# 다음 강의
[[AM lecture note - Holonomic constraints]]

# 필기 원본 이미지

![[Pasted image 20260304124843.png]]![[Pasted image 20260304124848.png]]![[Pasted image 20260304124854.png]]