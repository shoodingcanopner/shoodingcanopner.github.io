---
title: Journal reading - Conditional probability as found in nature Facilitated diffusion
date read: 2025-11-22
subject: statistical_mechanics
tags:
  - study
  - concept
  - question
class: study_journal
---

[[Conditional probability as found in nature Facilitated diffusion.pdf]]
https://pubs.aip.org/aapt/ajp/article/91/8/653/2902264/Conditional-probability-as-found-in-nature

# 내용 정리

## Elchanan Mossel's Dice Paradox

### Problem Statement
주사위를 던져 6이 나올 때까지 계속 던진다. 단, 다음의 규칙을 따른다:
- **짝수(2, 4)가 나오면:** 계속 진행
- **홀수(1, 3, 5)가 나오면:** 지금까지의 기록을 리셋하고 처음부터 다시 시작
- **6이 나오면:** 종료

**Question:** 6이 나올 때까지 주사위를 던지는 기댓값은?

### Common Wrong Answer: 3

많은 사람들(수학자 포함 50% 이상)이 다음과 같이 생각한다:

"짝수만 고려하면, 사실상 {2, 4, 6} 세 개의 면을 가진 주사위를 던지는 것과 같다. 따라서:"

$$E = \frac{1}{P(6|\text{even})} = \frac{1}{1/3} = 3$$

### Correct Answer: 1.5

실제 답은 **1.5**이다!

#### Why the difference?

6이 나올 때까지 주사위를 던지되 **짝수만 나온 시퀀스들만 고려**하는 것과, **{2, 4, 6} 주사위를 던지는 것**은 다르다!

핵심 차이:
- **{2, 4, 6} 주사위**: 모든 던지기가 "유효"
- **리셋 규칙**: 홀수가 나오면 긴 시퀀스들이 "버려진다"
  - 예: (2, 2, 4, 1) → 전체 버려짐
  - 예: (6) → 항상 유효 (짧은 시퀀스 선호)

#### 수학적 유도

조건부 확률을 사용:

$$E = \sum_{n=1}^{\infty} n \cdot P(\text{length}=n | \text{all even})$$

$$= \sum_{n=1}^{\infty} n \cdot \frac{P(\text{length}=n \cap \text{all even})}{P(\text{all even})}$$

$$= \sum_{n=1}^{\infty} n \cdot \frac{\left(\frac{2}{6}\right)^{n-1} \cdot \frac{1}{6}}{\left(\frac{1}{2}\right)^n}$$

$$= \sum_{n=1}^{\infty} n \cdot \left(\frac{2}{3}\right)^{n-1} \cdot \frac{1}{3} = \frac{3}{2}$$

---

## Connection to Facilitated Diffusion

### DNA-Binding Protein의 Target Search 문제

Transcription factors (TFs)는 DNA 상에서 특정 target sequence를 놀랍도록 빠르게 찾아낸다. 실험적으로 측정된 결합 속도 $\sim 10^{10} \, \text{M}^{-1}\text{s}^{-1}$는 순수 3D diffusion limit보다 **2 orders of magnitude 더 빠르다**.

### Berg-von Hippel Model: Facilitated Diffusion

Protein이 target을 찾는 메커니즘:
1. **3D diffusion** in bulk solution
2. **1D sliding** along DNA backbone
3. 이 두 과정을 번갈아가며 수행

### The Analogy: 주사위 역설과의 연결

논문의 핵심 인용:

> "The key principle for the success of this mechanism is analogous to what we described earlier discussing the dice 'paradox'—the **falling-off during a 1D search attempt and re-trying at a random point along the DNA** resembles the **'throwing away' of long die rolling sequences**."

**Direct Mapping:**

| Dice Paradox | Facilitated Diffusion |
|--------------|----------------------|
| 짝수(2, 4) 던지기 → 계속 | 1D sliding along DNA |
| 홀수(1, 3, 5) → 리셋 | DNA에서 떨어져 3D diffusion |
| 6 나옴 → 종료 | Target site 발견 |
| 기댓값 1.5 | Optimal search time ∝ L |

### Why "Reset" Strategy Works

**Naive 3D diffusion only:**
- Search time $\tau_{3D} \propto L^2$ (quadratic!)

**Facilitated diffusion with "reset":**
- Search time $\tau \propto L$ (linear!)
- 놀랍게도 **선형 스케일링**

주사위 역설처럼, "긴 실패 시퀀스를 버리는" 전략이 역설적으로 **전체 탐색 시간을 극적으로 단축**시킨다.

### Mathematical Description

단백질이 1D sliding 중 확률 $\Gamma$로 DNA에서 떨어진다고 하자. 최적 조건:

$$\Gamma_{\text{opt}} \sim \frac{D_{1D}}{L}$$

여기서 $D_{1D}$는 1D diffusion coefficient.

Optimal search time:

$$\tau_{\text{opt}} \sim \frac{L}{\sqrt{D_{3D} \cdot D_{1D}}}$$

이는 순수 3D ($\propto L^2$)나 순수 1D ($\propto L^2$)보다 훨씬 빠른 **$L$에 선형**!

### Optimal Time Partitioning

논문에서 계산한 결과:
- Protein이 시간의 약 **절반은 1D sliding**, **절반은 3D diffusion**을 할 때 최적
- 이는 주사위 문제에서 짝수/홀수가 각각 1/2 확률인 것과 정확히 대응

실제 박테리아에서 측정한 값들로 계산하면:
- Overall search time: **수십 초** (관찰과 일치!)

---

## Speed-Stability Paradox와의 연관

### The Paradox

**문제:**
- **Fast search**: 낮은 에너지 roughness 필요 ($\sigma \sim 1-2 \, k_B T$) → 빠른 1D diffusion
- **Stable binding**: 높은 에너지 장벽 필요 ($\sigma \sim 5 \, k_B T$) → 강한 특이적 결합

이 둘은 양립하기 어렵다!

### 해결책: Two-State Model + Reset Mechanism

**Slutsky & Mirny (2004)의 제안:**
1. **Search state (S)**: 빠르게 diffusion, 비특이적 결합
2. **Recognition state (R)**: 느리지만 특이적 인식

**Reset mechanism의 역할:**
- 1D에서 높은 에너지 장벽을 만나면 → 3D로 "리셋"
- 에너지 장벽을 우회 가능
- Target 발견 시 R state로 전환하여 안정적으로 결합

주사위 역설과 같은 원리: **막히는 경로를 버리고(reset) 새로 시작**하는 것이 전체적으로 더 효율적!

---

## First Passage Time Under Restart

이 문제는 **first passage time under restart** 문제의 일종:

Random walker가 특정 확률로 초기 위치로 "리셋"되는 경우, mean first passage time이 어떻게 변하는가?

**Counterintuitive result:** 적절한 reset rate가 있으면, **reset이 없을 때보다 더 빠를 수 있다**!

### General Framework

Reset rate $\Gamma$가 있을 때:

$$\langle T \rangle = \frac{\langle T_0 \rangle}{1 + \Gamma \langle T_0 \rangle}$$

여기서 $\langle T_0 \rangle$는 reset 없을 때의 시간.

Optimal reset rate가 존재하며, 이때 탐색 시간이 최소화된다.

---

## Conditional Probability의 핵심

이 논문의 교육적 메시지:

**Conditional probability는 단순한 수학적 도구가 아니라, 자연이 최적화 문제를 해결하는 방식이다.**

주사위 역설:
- "모든 짝수 조건"을 만족하는 시퀀스들의 분포
- Conditional probability로 자연스럽게 분석

Facilitated diffusion:
- "1D sliding으로만" vs "1D + 3D reset"
- 같은 수학적 구조



 

# 읽고 싶은 다른 레퍼런스

