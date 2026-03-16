---
title: "Heat Exchange Between Systems at Different Temperatures"
date: "2025-12-11"
subject: thermodynamics
tags:
  - study
  - concept
  - thermodynamics
class: study
---

# Heat Exchange Between Systems at Different Temperatures

## Overview

두 개의 온도가 다른 이상기체 박스가 열적으로 접촉해 있을 때, 열량 교환과 엔트로피 변화를 계산하는 방법. 각 시스템은 자기 자신의 온도와 엔트로피 변화를 사용하여 독립적으로 계산해야 한다는 것이 핵심.

## 기호 정리

| 기호 | 의미 |
|------|------|
| $T_A$ | Box A의 온도 |
| $T_B$ | Box B의 온도 |
| $Q_A$ | Box A가 얻은 열량 (양수면 흡수, 음수면 방출) |
| $Q_B$ | Box B가 얻은 열량 |
| $\Delta S_A$ | Box A의 엔트로피 변화 |
| $\Delta S_B$ | Box B의 엔트로피 변화 |
| $\Delta S_{\text{total}}$ | 전체 엔트로피 변화 |

## Key Points

### 각 박스마다 따로 계산

열량-엔트로피 관계식 $Q = T \Delta S$를 사용할 때, 각 시스템은 자기 자신의 온도를 사용한다.

**Box A (열 얻음):**
$$Q_A = T_A \Delta S_A \tag{1}$$

**Box B (열 잃음):**
$$Q_B = T_B \Delta S_B \tag{2}$$

### 에너지 보존

전체 계는 고립계이므로:
$$Q_A + Q_B = 0 \tag{3}$$
$$Q_A = -Q_B \tag{4}$$

만약 A가 $Q$만큼 얻으면, B는 $-Q$만큼 얻는다 (즉, $Q$만큼 잃음).

### 엔트로피 계산

**Box A:**
$$\Delta S_A = \frac{Q_A}{T_A} \tag{5}$$

**Box B:**
$$\Delta S_B = \frac{Q_B}{T_B} = \frac{-Q_A}{T_B} \tag{6}$$

**전체 엔트로피 변화:**
$$\Delta S_{\text{total}} = \Delta S_A + \Delta S_B = \frac{Q_A}{T_A} - \frac{Q_A}{T_B} = Q_A \left(\frac{1}{T_A} - \frac{1}{T_B}\right) \tag{7}$$

### 제2법칙 확인

열은 뜨거운 쪽에서 차가운 쪽으로 흐른다. $T_B > T_A$라고 가정하면:

- $Q_A > 0$ (A가 열 흡수)
- $Q_B < 0$ (B가 열 방출)
- $\frac{1}{T_A} > \frac{1}{T_B}$

따라서:
$$\Delta S_{\text{total}} = Q_A \left(\frac{1}{T_A} - \frac{1}{T_B}\right) > 0 \tag{8}$$

전체 엔트로피는 항상 증가한다 (제2법칙).

## 구체적 예시

**설정:**
- Box A: $T_A = 300\text{K}$ (차가움)
- Box B: $T_B = 400\text{K}$ (뜨거움)
- $Q_A = 100\text{J}$가 B에서 A로 이동

**Box A 엔트로피 변화:**
$$\Delta S_A = \frac{Q_A}{T_A} = \frac{100}{300} = \frac{1}{3} \text{ J/K} \approx 0.333 \text{ J/K}$$

**Box B 엔트로피 변화:**
$$\Delta S_B = \frac{-Q_A}{T_B} = \frac{-100}{400} = -\frac{1}{4} \text{ J/K} = -0.25 \text{ J/K}$$

**전체 엔트로피 변화:**
$$\Delta S_{\text{total}} = \frac{1}{3} - \frac{1}{4} = \frac{1}{12} \text{ J/K} \approx 0.083 \text{ J/K} > 0$$

엔트로피 증가 확인!

## Questions & Insights

### 왜 각각의 온도를 쓰는가?

Clausius의 엔트로피 정의에서:
$$dS = \frac{\delta Q_{\text{rev}}}{T}$$

여기서 $T$는 열을 받거나 주는 그 시스템의 온도를 의미한다. 각 박스는 자기 온도에서 열을 교환하므로, 각각 자기 온도를 사용해야 한다.

### 하나의 공식으로 표현 불가능

$Q = T \Delta S$에서 $T$와 $\Delta S$는 모두 특정 시스템에 대한 것이다. 두 박스를 하나의 공식으로 동시에 표현할 수 없다. 각각 독립적으로 계산해야 한다.

### 온도 변화가 있다면?

실제로 열 교환 과정에서 온도가 변한다면:
- $T_A$ 증가
- $T_B$ 감소
- 적분이 필요:

$$\Delta S_A = \int_{T_A^i}^{T_A^f} \frac{C_V dT}{T}$$

작은 변화의 경우 평균 온도로 근사 가능하다.

## Related Concepts

- [[열역학 자연변수와 르장드르 변환]]
- [[Gibbs Entropy]]
- [[Shannon Entropy and Boltzmann Entropy Decomposition]]
- [[Journal reading - Time-Reversal and Entropy]]

## References

이 내용은 "Time-Reversal and Entropy" 논문 (Maes & Netočný, 2003)을 읽으면서 나온 질문에 대한 답변을 정리한 것이다.

## Notes from Claude

이 노트는 열역학 제2법칙의 미시적 기원을 이해하는 데 중요한 개념이다. 특히 두 시스템 사이의 열 교환에서:

1. 각 시스템의 엔트로피 변화는 자기 온도로 계산
2. 개별 엔트로피는 증가/감소할 수 있음
3. 전체 엔트로피는 항상 증가 (고립계)

이것은 엔트로피가 extensive quantity (크기에 비례하는 양)가 아니라 각 시스템의 상태에 의존하는 양임을 보여준다.
