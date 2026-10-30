---
title: SM HW4-1 Phase Diagram of Water
date: "2026-10-29"
subject: physics
tags:
  - study
  - homework
  - statistical_mechanics
class: study_homework
---
> [!info] 과제 풀이
> [[MOCs/Statistical Mechanics|Statistical Mechanics]] 4th HW, Problem 1

# 문제

$\mathrm{H_2O}$의 phase diagram을 **P–T plane**에 그려라. Coexistence line, critical point, triple point를 설명하라.

# 내 풀이
![[Pasted image 20261030132127.png]]

![[Pasted image 20261030132140.png]]
- **Coexistence line**: 두 phase가 동시에 공존하는 압력과 온도. Coexistence line 위의 $(P, T)$라면 상황에 따라 시스템이 다른 부피와 엔트로피를 가질 수 있다.
- **Critical point**: Coexistence line이 끊기는 지점. 이 이상의 압력, **혹은** 온도에서는 liquid와 gas의 구분이 사라진다.
- **Triple point**: 세 phase가 공존할 수 있는 압력과 온도. Gibbs phase rule에 따라 PT diagram에서 오로지 한 점으로 존재한다.

# 풀이 검토

**판정: 그림과 설명 모두 좋다.** 특히 ice–water 선을 **음의 기울기**로 그린 것은 물의 핵심 특징을 정확히 잡은 것이다. 아래는 표현의 정확성에 관한 지적이다.

> [!tip] 1. 잘한 점: 음의 기울기의 이유를 함께 쓰면 완성도 높은 서술이 된다
> Clausius–Clapeyron $\frac{dP}{dT} = \frac{\Delta s}{\Delta v}$에서, 얼음이 녹을 때 $\Delta s > 0$이고 얼음이 물보다 밀도가 낮아 $\Delta v = v_{\text{water}} - v_{\text{ice}} < 0$이다. 따라서 $dP/dT < 0$이다. 압력을 가하면 녹는점이 내려간다. 대부분의 물질은 이와 반대로 양의 기울기를 가진다.

> [!warning] 2. Critical point 설명의 "혹은"이 부정확하다
> "이 이상의 압력, **혹은** 온도에서 구분이 사라진다"는 엄밀하지 않다.
> - $T > T_c$이면 **어떤 압력에서도** liquid–gas 전이가 없다.
> - 그러나 $P > P_c$이면서 $T < T_c$인 영역은 보통 압축된 liquid로 부른다.
>
> 이 영역에서 출발해 $T_c$ 위로 돌아가면 상전이 없이 gas로 연속적으로 갈 수 있으므로 엄밀한 경계는 없다. 하지만 관례적으로 **supercritical fluid는 $T > T_c$ 그리고 $P > P_c$인 영역**이다. "liquid–gas coexistence line이 $T_c$에서 끝나므로, 그 너머로 돌아가면 상전이 없이 liquid와 gas를 연속적으로 연결할 수 있다"고 쓰는 것이 가장 정확하다.

> [!tip] 3. 더 쓸 수 있는 내용
> - **Triple point**: phase rule $f = 2 + r - \nu = 2 + 1 - 3 = 0$을 명시하면 좋다. 물의 triple point는 약 273.16 K (0.01 °C), 약 612 Pa이다.
> - **Critical point가 liquid–vapor 선에만 있는 이유**: liquid와 gas는 대칭성이 같아서(둘 다 무질서) 연속적으로 이어질 수 있다. 반면 solid는 결정의 병진 대칭이 깨져 있어 liquid와 연속적으로 이어질 수 없다. 그래서 solid–liquid 선은 끝나지 않는다.
> - **Coexistence line 위에서 부피가 정해지지 않는 이유**: 두 phase의 비율이 $(T, P)$로 정해지지 않기 때문이다. $V$를 주면 lever rule로 정해진다 ([[SM lecture note - Phase Equilibrium and Maxwell Construction|5주차 노트]] 6절).

> [!warning] 4. 과목 노트의 문제 요약 오타
> 과목 노트의 4th HW 목록에는 "P-V plane에서 그리고"로 적혀 있으나, 실제 문제와 답안은 **P–T plane**이다.

# 연관 노트

- [[SM lecture note - Phase Equilibrium and Maxwell Construction]]
- [[SM HW4-2 PV Isotherms of Water-Vapor Fluid]]
- [[SM HW4-3 Clausius-Clapeyron Coexistence Curve]]

# 다음 문제
- [[SM HW4-2 PV Isotherms of Water-Vapor Fluid|HW4-2 PV Isotherms of Water-Vapor Fluid]]