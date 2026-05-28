---
title: "AM mini note - Conservation Laws and Hamiltonian Vector Fields"
date: "2026-05-28"
subject: physics
tags:
  - study
  - lecture_notes
class: study_lecture
---
> [!attention] 강의 필기 보충 노트
> 이것은 [[Analytical Mechanics]] 강의 관련 보충 노트입니다.
> [[AM lecture note - Symplectic form]]의 Hamiltonian vector field 내용과 양자역학의 보존량 개념을 연결합니다.

# 오늘의 핵심

- 양자역학의 보존량 조건 $[H, Q] = 0$의 symplectic geometry 대응: $\{Q, \mathcal{H}\} = 0$
- 이를 Hamiltonian vector field의 언어로 번역하면, **두 flow가 서로의 함수값을 보존한다**는 기하학적 의미가 드러남
- Lie derivative의 언어와도 직접 연결됨

# 필기 내용

## 보존량의 세 가지 언어

같은 물리적 내용을 세 가지 수학적 언어로 나타낼 수 있다:

| 양자역학 | 해석역학 (Poisson) | 해석역학 (Symplectic) |
|---------|-----------------|-------------------|
| $[H, Q] = 0$ | $\{Q, \mathcal{H}\} = 0$ | $V_Q(\mathcal{H}) = 0$ |

세 번째 열이 핵심이다. $V_Q = \tilde{\omega}^{-1}(dQ) = \{Q, -\}$이므로:

$$
\{Q, \mathcal{H}\} = V_Q(\mathcal{H})
$$

$V_Q(\mathcal{H}) = 0$은 **"$Q$의 Hamiltonian vector field가 생성하는 flow를 따라 흘러가도 $\mathcal{H}$의 값이 변하지 않는다"**는 뜻이다. 기하학적으로, $V_Q$의 flow는 $\mathcal{H}$의 등위면(level set) 위에서만 움직인다.

## 쌍방향 보존

Poisson bracket의 antisymmetry $\{Q, \mathcal{H}\} = -\{\mathcal{H}, Q\}$에 의해:

$$
\{Q, \mathcal{H}\} = 0 \quad \Longleftrightarrow \quad \{\mathcal{H}, Q\} = 0
$$

이를 Hamiltonian vector field로 번역하면:

$$
V_Q(\mathcal{H}) = 0 \quad \Longleftrightarrow \quad V_\mathcal{H}(Q) = 0
$$

**두 번째 식 $V_\mathcal{H}(Q) = 0$의 의미:** 시간 발전 flow($V_\mathcal{H}$가 생성)를 따라가도 $Q$의 값이 변하지 않는다. 이것이 바로 **"$Q$는 보존량이다"**의 기하학적 표현이다.

정리하면, 보존량 조건은 **두 Hamiltonian vector field $V_\mathcal{H}$와 $V_Q$가 서로 상대방의 함수값을 보존하는 쌍방향 관계**이다.

## Lie Derivative로의 번역

[[AM lecture note - Hodge dual and Lie derivative]]에서 배운 Lie derivative를 사용하면 더 간결하게 쓸 수 있다.

$V_\mathcal{H}(Q) = 0$은 곧:

$$
\mathcal{L}_{V_\mathcal{H}} Q = 0
$$

**"$\mathcal{H}$의 flow를 따라 $Q$의 Lie derivative가 0"** — 이 한 줄이 보존량의 기하학적 정의이다.

반대 방향도:

$$
\mathcal{L}_{V_Q} \mathcal{H} = 0
$$

**"$Q$의 flow는 $\mathcal{H}$를 불변으로 둔다"** — 이것이 Noether 정리의 Hamiltonian 버전이다. 보존량 $Q$는 대칭 변환의 생성자이고, 그 대칭 변환은 $V_Q$의 flow이다.

## 예시: 각운동량 보존

$\mathcal{H}$가 회전 대칭을 가지면 $\{L_z, \mathcal{H}\} = 0$이다.

$$
V_{L_z} = -y\,\partial_x + x\,\partial_y + p_y\,\partial_{p_x} - p_x\,\partial_{p_y}
$$

이것은 [[AM lecture note - Symplectic form]]에서 이미 유도한 $z$축 회전의 무한소 생성자이다.

$$
V_{L_z}(\mathcal{H}) = 0
$$

은 "$z$축 회전을 해도 $\mathcal{H}$가 안 변한다" = 회전 대칭이고,

$$
V_\mathcal{H}(L_z) = 0
$$

은 "시간이 흘러도 $L_z$가 안 변한다" = 각운동량 보존이다.

# 연관 학습 노트

- [[AM lecture note - Symplectic form]]
- [[AM lecture note - Hodge dual and Lie derivative]]
- [[AM lecture note - Noether theorem]]
- [[AM lecture note - Poisson bracket and Darboux theorem]]