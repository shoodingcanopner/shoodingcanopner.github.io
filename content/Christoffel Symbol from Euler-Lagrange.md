---
title: Christoffel Symbol from Euler-Lagrange
date: "2026-03-09"
subject: physics
tags: [study, concept]
class: study
---

# Christoffel Symbol from Euler-Lagrange

## 기호 표

| 기호 | 의미 |
|------|------|
| $q^a$ | 일반화 좌표 ($a = 1, \ldots, n$) |
| $g_{ab}(q)$ | metric tensor — **좌표의 함수** |
| $g^{ab}$ | $g_{ab}$의 역행렬 ($g^{ab}g_{bc} = \delta^a_c$) |
| $\Gamma^a_{bc}$ | Christoffel symbol (second kind) |

---
![[Pasted image 20260309172634.png]]
이런 문제를 풀던 중이었다. 
## 설정: 순수 운동에너지 라그랑지안

$$
L = \frac{1}{2} g_{ab}(q)\, \dot{q}^a \dot{q}^b
\tag{1}
$$

$g_{ab}(q)$는 일반화 좌표 전체 $\{q^1, \ldots, q^n\}$에 의존하는 함수다.  
(예: 극좌표에서 $g_{\theta\theta} = mr^2$은 $r$에 의존)

---

## 유도: Euler-Lagrange 방정식 적용

Euler-Lagrange 방정식:

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{q}^a} - \frac{\partial L}{\partial q^a} = 0
\tag{2}
$$

### Step 1. $\frac{\partial L}{\partial \dot{q}^a}$ 계산

> **⚠️ 핵심 주의사항**: 미분 인덱스 $a$와 라그랑지안 안의 dummy index가 겹치면 안 된다!
>
> $L = \frac{1}{2}g_{ab}\dot{q}^a\dot{q}^b$를 그대로 쓰면 $a$가 두 역할을 동시에 해서 위험하다.  
> **먼저 dummy index를 바꾼다**: $L = \frac{1}{2}g_{bc}\dot{q}^b\dot{q}^c$

$$
\frac{\partial L}{\partial \dot{q}^a} = \frac{1}{2}g_{bc}\frac{\partial(\dot{q}^b\dot{q}^c)}{\partial \dot{q}^a}
\tag{3}
$$

$\frac{\partial \dot{q}^b}{\partial \dot{q}^a} = \delta^b_a$이므로:

$$
= \frac{1}{2}(g_{ac}\dot{q}^c + g_{ba}\dot{q}^b) = g_{ac}\dot{q}^c
\tag{4}
$$

(마지막 등호: $g_{ab} = g_{ba}$ 대칭성 이용)

### Step 2. 시간 미분 — 연쇄법칙

$g_{ac}$는 $q$의 함수이므로:

$$
\frac{d}{dt}(g_{ac}\dot{q}^c) = g_{ac}\ddot{q}^c + \frac{\partial g_{ac}}{\partial q^b}\dot{q}^b\dot{q}^c
\tag{5}
$$

### Step 3. $\frac{\partial L}{\partial q^a}$ 계산

$$
\frac{\partial L}{\partial q^a} = \frac{1}{2}\frac{\partial g_{bc}}{\partial q^a}\dot{q}^b\dot{q}^c
\tag{6}
$$

### Step 4. 합치기

$$
g_{ac}\ddot{q}^c + \frac{\partial g_{ac}}{\partial q^b}\dot{q}^b\dot{q}^c - \frac{1}{2}\frac{\partial g_{bc}}{\partial q^a}\dot{q}^b\dot{q}^c = 0
\tag{7}
$$

### Step 5. 인덱스 대칭화

$\dot{q}^b\dot{q}^c$는 $b \leftrightarrow c$ 교환에 대해 대칭이므로:

$$
\frac{\partial g_{ac}}{\partial q^b}\dot{q}^b\dot{q}^c = \frac{1}{2}\left(\frac{\partial g_{ac}}{\partial q^b} + \frac{\partial g_{ab}}{\partial q^c}\right)\dot{q}^b\dot{q}^c
\tag{8}
$$

따라서:

$$
g_{ac}\ddot{q}^c + \frac{1}{2}\left(\frac{\partial g_{ac}}{\partial q^b} + \frac{\partial g_{ab}}{\partial q^c} - \frac{\partial g_{bc}}{\partial q^a}\right)\dot{q}^b\dot{q}^c = 0
\tag{9}
$$

괄호 안이 바로 **Christoffel symbol (first kind)**의 정의:

$$
\Gamma_{abc} \equiv \frac{1}{2}\left(\frac{\partial g_{ac}}{\partial q^b} + \frac{\partial g_{ab}}{\partial q^c} - \frac{\partial g_{bc}}{\partial q^a}\right)
\tag{10}
$$

### Step 6. $g^{ad}$ 곱하기 → 운동 방정식

양변에 $g^{ad}$를 곱하면 ($g^{ad}g_{ac} = \delta^d_c$):

$$
\ddot{q}^d + \Gamma^d_{bc}\dot{q}^b\dot{q}^c = 0
\tag{11}
$$

여기서 $\Gamma^a_{bc} \equiv g^{ad}\Gamma_{dbc}$는 **Christoffel symbol (second kind)** 이다.

---

## 핵심 인사이트

**Christoffel symbol은 미분기하학 없이 순수한 계산으로 유도된다.**  
필요한 것은 딱 두 가지:

1. $g_{ab}$가 좌표의 함수임을 기억하고 **연쇄법칙** 적용
2. $\dot{q}^b\dot{q}^c$의 **대칭성**을 이용한 인덱스 정리

미분기하학에서는 이 결과를 곡선 공간에서의 **측지선(geodesic) 방정식**으로 해석하지만, 그것은 이 계산을 마친 뒤에 얻는 인사이트다.

---

## ⚠️ Einstein Index 계산 시 핵심 주의사항

> **미분/변분을 수행하기 전에 항상 확인할 것:**
>
> **"내가 미분하는 인덱스가 식 안에 이미 합산 인덱스(dummy index)로 쓰이고 있지 않은가?"**
>
> 만약 겹친다면 → **dummy index를 다른 문자로 바꾸고 시작!**

예:
- 위험: $\frac{\partial}{\partial \dot{q}^a}\left(\frac{1}{2}g_{ab}\dot{q}^a\dot{q}^b\right)$ ← $a$가 미분 인덱스이자 합산 인덱스
- 안전: $\frac{\partial}{\partial \dot{q}^a}\left(\frac{1}{2}g_{bc}\dot{q}^b\dot{q}^c\right)$ ← dummy index를 $b,c$로 교체

---

## Related Concepts

- [[Lagrangian Mechanics]]
- [[라그랑지안과 해밀토니안의 르장드르 변환 관계]]
- [[AM lecture note - Lagrangian mechanics]]
- [[Vector Differential Operators in Einstein Notation]]
