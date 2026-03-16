---
title: "Action of free particle"
date: "2025-05-17"
subject: 
  - physics
  - computational_physics
tags:
  - study
  - concept
  - classical_mechanics
  - lagrangian_mechanics
  - action
  - free_particle
class: study
---

# Action of free particle

## Overview

자유 입자(free particle)는 어떤 외부 힘이나 포텐셜에 의한 영향을 받지 않는 입자를 의미한다. 라그랑지안 역학에서 자유 입자의 작용(action)은 입자가 취하는 경로에 대한 정보를 담고 있으며, 최소 작용 원리에 따라 이 입자는 작용이 최소가 되는 경로를 따라 움직인다. 이 노트에서는 자유 입자의 라그랑지안과 작용, 그리고 그 적분에 관한 수학적 접근법을 설명한다.\n\n## Key Points\n\n- **자유 입자의 라그랑지안**:\n  - 포텐셜 에너지가 없으므로 $L = T - V = T = \\frac{1}{2}m\\dot{x}^2$\n  - 여기서 $m$은 입자의 질량, $\\dot{x}$는 입자의 속도\n\n- **자유 입자의 작용**:\n  - 정의: $S = \\int_{t_1}^{t_2} L dt = \\int_{t_1}^{t_2} \\frac{1}{2}m\\dot{x}^2 dt$\n  - 적분 계산 시 문제점: 일반적인 경로 $x(t)$를 모르는 상태에서는 직접 적분 불가능\n\n- **변분법적 접근**:\n  - 작용 적분을 직접 계산하는 대신, 최소 작용 원리를 적용\n  - 오일러-라그랑주 방정식 적용: $\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$\n  - 자유 입자의 경우: $\\frac{d}{dt}(m\\dot{x}) = 0$ → $\\dot{x} = $ 상수\n\n- **등속 직선 운동**:\n  - 자유 입자는 등속 직선 운동을 하게 됨\n  - 이 경우 작용 적분: $S = \\frac{1}{2}mv^2(t_2-t_1) = \\frac{1}{2}m\\frac{(x_2-x_1)^2}{t_2-t_1}$\n\n## Questions & Insights\n\n- 작용 적분을 직접 계산하는 방식과 변분법적 접근의 차이점은 무엇인가?\n- 자유 입자의 작용이 최소가 되는 조건이 왜 등속 직선 운동을 의미하는가?\n- 라그랑지안 역학에서 자유 입자는 간단한 예시이지만, 이러한 접근법이 복잡한 시스템에서는 어떤 이점을 제공하는가?\n- 자유 입자에서 확장하여, 단순 조화 진동자나 중력장 내 입자의 작용은 어떻게 다르게 나타나는가?\n\n## Related Concepts\n\n- [[Lagrangian_and_Generalized_Momentum|Lagrangian and Generalized Momentum]]\n- [[Principle of Least Action]]\n- [[Angular_Momentum_and_Centrifugal_Force|Angular Momentum and Centrifugal Force]]\n- [[Variational Principles]]\n\n## References\n\n- Classical Mechanics by Herbert Goldstein\n- Mechanics by Landau and Lifshitz\n- Theoretical Physics by Georg Joos\n\n## Notes from Claude\n\n자유 입자의 작용(action)에 관한 적분 계산은 라그랑지안 역학의 핵심적인 개념을 보여줍니다. 이 문제의 접근 방식에서 흥미로운 점은 직접적인 적분 계산보다 변분법적 접근이 더 효과적이라는 것입니다.\n\n일반적으로 물리 문제에서는 \"경로를 먼저 가정하고 작용을 계산한다\"보다는 \"작용이 최소가 되는 경로를 찾는다\"는 접근이 더 자연스럽습니다. 이것이 라그랑지안 역학의 철학적 기반입니다.\n\n자유 입자는 가장 단순한 사례지만, 이러한 접근법은 더 복잡한 시스템(다체 문제, 장 이론 등)으로 자연스럽게 확장됩니다. 특히 대칭성과 보존량의 관계를 명확하게 보여주는 노터의 정리로 이어지며, 이는 현대 물리학의 기초가 됩니다.\n