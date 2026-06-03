---
title: "Polymer physics of nuclear organization and function"
date: "2026-06-02"
subject: "biophysics"
tags: [study, journal-reading, polymer-physics, chromatin, DNA, nucleus, anomalous-diffusion, Hi-C, MFET]
class: study
authors: "A. Amitai, D. Holcman"
journal: "Physics Reports 678 (2017) 1–83"
---

# Polymer physics of nuclear organization and function

> Amitai & Holcman, *Physics Reports* 678, 1–83 (2017)

**핵심 질문:** 세포 핵 내부의 DNA/크로마틴 구조와 동역학을 폴리머 물리학으로 어떻게 기술할 수 있는가?

---

## 0. 논문의 목적과 범위

이 리뷰는 핵 구조와 기능을 연결짓기 위해 세 가지 축을 다룬다:

1. **폴리머 모델** — DNA/크로마틴의 물리적 기술
2. **수학적 분석** — 루핑, MFET 등 확률론적 공식 유도
3. **실험 데이터 해석** — Hi-C, 단일입자추적(SPT) 데이터와의 연결

---

## 1. 핵 구조 개요 (Section 2)

### 다중 스케일 구조

| 스케일 | 구조 |
|-------|------|
| 2 nm | DNA 이중나선 |
| 11 nm | 뉴클레오솜 (히스톤 8량체에 감긴 DNA) |
| 30 nm | 크로마틴 파이버 |
| 300 nm | 루프 도메인 |
| 700 nm ~ 1400 nm | 응축 염색체 |

### 연구자들이 주목한 DNA 특성들

- **이상확산(Anomalous diffusion):** MSD $\sim t^\alpha$, $\alpha < 1$ (서브확산). 거의 모든 크로마틴 좌위에서 관찰됨.
- **크로마틴 영역(Chromosomal territories):** 각 염색체는 핵 내부에서 뚜렷한 공간적 영역을 점유.
- **자발적 DNA 루핑:** 멀리 떨어진 두 유전자 좌위가 물리적으로 만나 유전자 발현을 조절 (Lac operon 등).
- **텔로미어 클러스터링:** 효모 핵에서 텔로미어가 2~6개의 클러스터를 형성 (Sir4, yKu 단백질 매개).
- **DSB(이중가닥 파손) 수리:** 파손된 좌위가 핵 내부를 탐색하며 相동 서열을 찾음.
- **핵 봉투와 유전자 조절:** 핵 공극(nuclear pore)과의 상호작용이 유전자 발현 조절.

### 주요 실험 기법

| 기법 | 내용 |
|-----|-----|
| **Live-cell imaging / SPT** | GFP-LacI-LacO 시스템으로 단일 좌위를 수십 nm, 수백 ms 해상도로 추적 |
| **3C / 4C / 5C / Hi-C** | 화학 결찰(ligation)로 공간적으로 가까운 DNA 쌍의 접촉 빈도 측정. Hi-C는 전체 게놈 저해상도 지도 |
| **Super-resolution microscopy (STORM 등)** | 크로마틴 응축/이완을 나노미터 해상도로 시각화 |
| **Brownian dynamics simulation** | 폴리머 모델을 기반으로 실험 통계 재현 및 예측 |
| **Monte-Carlo simulation** | 루프 구성 샘플링, Hi-C 데이터 역설계 |

---

## 2. 폴리머 모델들 (Section 3)

### 공통 기호

| 기호 | 의미 |
|-----|-----|
| $N$ | 모노머 수 |
| $b$ | Kuhn 길이 (인접 모노머 간 거리의 표준편차) |
| $\kappa = dk_BT/b^2$ | 스프링 상수 |
| $D$ | 확산계수 |
| $\alpha$ | 이상확산 지수 |
| $R_{ee}$ | end-to-end 벡터 |
| $R_g$ | 회전반경 |

---

### 2.1 기본 폴리머 (Gaussian Chain)

모노머 위치 $\mathbf{R}_n$, $n=1,...,N$. End-to-end 벡터:

$$
\mathbf{R}_{ee} = \sum_{n=1}^{N-1} \mathbf{b}_n
$$

평균제곱 end-to-end 거리:

$$
\langle R_{ee}^2 \rangle = (N-1)b^2
$$

회전반경:

$$
\langle R_g^2 \rangle \approx \frac{Nb^2}{6}
$$

에너지 (Boltzmann 분포):

$$
\phi(\mathbf{R}) = \frac{\kappa}{2} \sum_{n=2}^{N} (\mathbf{R}_n - \mathbf{R}_{n-1})^2
\tag{5}
$$

두 모노머 $m, n$ 간 평균제곱 거리:

$$
\langle (\mathbf{R}_n - \mathbf{R}_m)^2 \rangle = |n-m| \cdot b^2
\tag{8}
$$

---

### 2.2 자기 회피 폴리머 (Self-Avoiding)

Excluded volume interaction 에너지:

$$
\phi_{EVI}(\mathbf{R}_1,..,\mathbf{R}_N) = \frac{1}{2}\sigma k_BT \sum_{n,m; n\neq m} \delta(\mathbf{R}_n - \mathbf{R}_m)
\tag{9}
$$

Flory 지수 $\nu$가 들어간 스케일링:

$$
\langle R_{ee}^2 \rangle \approx N^{2\nu}
\tag{10}
$$

- $d=2$: $\nu = 3/4$
- $d=3$: $\nu \approx 0.588$

---

### 2.3 Rouse 모델 ⭐

**특성:** 인접 모노머만 스프링으로 연결. Langevin 방정식의 overdamped 극한.

**모노머 동역학:**

$$
\frac{d\mathbf{R}_n}{dt} = -D\kappa(2\mathbf{R}_n - \mathbf{R}_{n-1} - \mathbf{R}_{n+1}) + \sqrt{2D}\frac{d\mathbf{w}_n}{dt}
\tag{14}
$$

**Rouse 모드 (정규 좌표):** $\mathbf{u}_p = \sum_{n=1}^N \mathbf{R}_n \alpha_p^n$

$$
\frac{d\mathbf{u}_p}{dt} = -D\kappa_p \mathbf{u}_p + \sqrt{2D}\frac{d\tilde{\mathbf{w}}_p}{dt}
\tag{21}
$$

$$
\kappa_p = 4\kappa \sin^2\!\left(\frac{p\pi}{2N}\right)
\tag{20}
$$

각 모드는 독립적인 **Ornstein-Uhlenbeck 과정**. 가장 느린 완화 시간:

$$
\tau_N \approx \frac{N^2}{D\kappa\pi^2}
\tag{22}
$$

**MSD 세 가지 체제:**
- 짧은 시간 ($t \ll \tau_{N-1}$): $\text{var}(\mathbf{R}_c) \approx 2dDt$ (정상 확산)
- 중간 시간: $\text{var}(\mathbf{R}_c) \sim t^{1/2}$ (**이상확산**, $\alpha = 1/2$)
- 긴 시간 ($t \gg \tau_1$): 무게중심 확산, $D_{cm} = D/N$

---

### 2.4 β-폴리머 (일반화 Rouse) ⭐

**목적:** 이상확산 지수 $\alpha$를 처방하는 폴리머 모델 구성.

Rouse 고유값을 수정:

$$
\tilde{\kappa}_p = 4\kappa \sin^\beta\!\left(\frac{p\pi}{2N}\right)
\tag{24}
$$

$\beta = 2$이면 Rouse 모델로 환원. $\beta \neq 2$이면 **모든 모노머가 장거리 상호작용**.

**중간 시간대 이상확산 지수:**

$$
\langle (\mathbf{R}_c(t_0+t) - \mathbf{R}_c(t_0))^2 \rangle \propto t^{1 - 1/\beta}
\tag{71}
$$

따라서:

$$
\alpha = 1 - \frac{1}{\beta}
$$

- $\beta = 2$ (Rouse): $\alpha = 1/2$
- $\beta = 3/2$: $\alpha = 1/3$  ← 실험값과 부합
- $\beta \to 1$: $\alpha \to 0$ (완전 응축)

---

### 2.5 Worm-like Chain (WLC)

반유연 폴리머. 접선 벡터 상관함수:

$$
\langle \mathbf{t}(s) \cdot \mathbf{t}(0) \rangle = e^{-s/L_p}
\tag{11}
$$

$L_p$: 지속 길이 (persistence length). dsDNA: $L_p \approx 50$ nm. 크로마틴 파이버: $L_p \approx 150$ nm.

굽힘 에너지:

$$
U_{bend}(\mathbf{x}) = \kappa_{ang} \sum_{i=1}^{N-1}(1 - \mathbf{u}_i \cdot \mathbf{u}_{i+1})
\tag{35}
$$

지속 길이와 굽힘 강성의 관계:

$$
L_p = \frac{\kappa_{ang} l_0}{k_B T}
\tag{36}
$$

---

### 2.6 Rod-like 모델

각도 $\theta_k$가 원에서 Brownian 운동하는 $N$개의 강체 세그먼트. $k$번째 모노머 위치:

$$
\mathbf{R}_k(t) = b\sum_{j=1}^k \exp(i\theta_j(t))
\tag{41}
$$

장거리 모노머 상관을 가지며, Rouse와 다른 루핑 공식 유도 가능.

---

## 3. 이상확산 (Anomalous Diffusion) (Section 3.10)

### 이상확산 공식

$$
\langle (\mathbf{R}(t) - \mathbf{R}(0))^2 \rangle \sim A t^\alpha
\tag{45}
$$

| $\alpha$ 값 | 체제 |
|------------|-----|
| $\alpha < 1$ | 서브확산 (subdiffusion) |
| $\alpha = 1$ | 정상 확산 |
| $\alpha > 1$ | 슈퍼확산 |
| $\alpha > 2$ | 탄도운동 (ballistic) |

### 다양한 폴리머 모델의 이상확산 지수

| 모델 | $\alpha$ |
|-----|---------|
| Rouse | $1/2$ |
| Zimm (유체역학 포함) | $2/3$ |
| Reptation | $1/4$ |
| $\beta$-polymer | $1 - 1/\beta$ |
| 실험값 (크로마틴 좌위, 효모) | $\sim 0.33$–$0.5$ |

### 연속시간 랜덤워크 (CTRW)

대기 시간 분포 $\psi(t) \approx A_a(\tau/t)^{1+a}$ (0 < a < 1)일 때 서브확산. 분수 확산 방정식:

$$
\frac{\partial P}{\partial t} = {}_0D_t^{1-\gamma} K_\gamma \frac{\partial^2 P}{\partial x^2}
\tag{48}
$$

$$
\langle x^2(t) \rangle = \frac{2K_\alpha}{\Gamma(1+\alpha)} t^\alpha
\tag{51}
$$

### 분수 브라운 운동 (FBM)

Hurst 지수 $H$를 가진 메모리 커널:

$$
K(t) = 2H(2H-1)\frac{1}{|t|^{-2H+2}}
\tag{58}
$$

이상확산 지수: $\alpha = 2 - 2H$

---

## 4. 폴리머 루핑과 MFET (Section 4)

### 왜 루핑이 중요한가?

두 유전자 좌위가 물리적으로 만나는 것이 유전자 발현, 수리의 선결 조건. 루핑 속도 = MFET의 역수.

### 4.1 First Encounter Time 정의

두 모노머 $n_a$, $n_b$ 간 첫 만남 시간:

$$
\tau_e = \inf\{t > 0 : |\mathbf{R}_{n_a}(t) - \mathbf{R}_{n_b}(t)| \leq \varepsilon\}
\tag{74}
$$

### 4.2 Szabo-Schulten-Schulten 접근

end-to-end 거리 $r$의 평균 MFET (소형 $a$ 극한):

$$
\langle E\tau \rangle \approx \left(\frac{2\pi}{3}\right)^{1/2} \frac{N^{3/2}}{12D_0 a}
\tag{83}
$$

$N$이 작으면 $\sim N^{3/2}/a$, $N$이 크면 $\sim N^2$으로 지배.

### 4.3 Fokker-Planck 고유값 전개

MFET는 FP 연산자의 첫 번째 고유값의 역수:

$$
\langle \tau_\varepsilon \rangle \approx \frac{1}{D\lambda_0^\varepsilon}
\tag{94}
$$

3차원 자유 공간 Rouse 폴리머의 $\lambda_0^\varepsilon$:

$$
\lambda_0^\varepsilon = \left(\frac{\kappa}{N\pi}\right)^{3/2} 4\pi\varepsilon + \mathcal{O}(\varepsilon^2)
\tag{114}
$$

**MFET 점근 공식 (자유 공간, 3D):**

$$
\langle\tau_\varepsilon\rangle_{3d} = \left(\frac{N\pi}{\kappa}\right)^{3/2} \frac{\sqrt{2}}{D \cdot 4\pi\varepsilon} + A_3 \frac{b^2}{D} N^2 + \mathcal{O}(1)
\tag{175}
$$

**MFET 점근 공식 (자유 공간, 2D):**

$$
\langle\tau_\varepsilon\rangle_{2d} = \frac{N}{2D\kappa}\log\!\left(\frac{\sqrt{2}b}{\varepsilon}\right) + A_2 \frac{b^2}{D} N^2 + \mathcal{O}(1)
\tag{174}
$$

### 4.4 가둔 도메인에서의 MFET (MFETC)

핵 내부 가둠을 조화 퍼텐셜로 근사. 총 에너지:

$$
\phi_h(\mathbf{R}_1,..,\mathbf{R}_N) = \phi_{Rouse} + \frac{B}{2}\sum_{n=1}^N \mathbf{R}_n^2
\tag{120}
$$

조화 퍼텐셜 강도 $B$를 반경 $A$에 맞춰 보정:

$$
B = \frac{12}{A^4/b^2 + 2A^2}
\tag{123}
$$

**MFETC 공식:**

$$
\langle\tau_h\rangle \approx \frac{2^{1/2}}{4\pi\varepsilon D}\left[\frac{4\pi N}{N^2B + \pi^2\kappa} + \frac{4}{\sqrt{\kappa B}}\left(\frac{\pi}{2} - \tan^{-1}\!\left(2\sqrt{\kappa/B}\tan(\pi/2N)\right)\right)\right]^{3/2}
\tag{182}
$$

**중요 특성:** $N \to \infty$에서도 MFETC는 유한값으로 수렴. 루핑 시간 분포는 Poisson 분포로 잘 근사됨.

### 4.5 β-폴리머의 MFET

$$
\langle\tau_\varepsilon^\beta\rangle \approx \frac{1}{D\varepsilon(2\kappa)^{3/2}} \left[\frac{2}{3}\cos\!\left(\frac{\pi}{2N}\right)^3 {}_2F_1\!\left(\frac{3}{2},\frac{1+\beta}{2};\frac{5}{2};\cos^2\!\left(\frac{\pi}{2N}\right)\right) + \cdots\right]^{3/2}
\tag{183}
$$

$N \gg 1$에서: $\langle\tau_\varepsilon^\beta\rangle \sim N^{\frac{3}{2}(\beta-1)}$ (Rouse의 $N^{3/2}$와 비교)

---

## 5. Hi-C 데이터 해석과 폴리머 모델 (Sections 5–6)

### Hi-C란?

화학 결찰로 공간적으로 가까운 DNA 쌍을 포착하여 게놈 전체 접촉 빈도 행렬 산출. 크로마틴 조직의 "평균 사진".

### 접촉 빈도의 폴리머 예측

Rouse 폴리머의 경우 접촉 빈도 (genomic 거리 $|n-m|$의 함수):

$$
P(x_n, x_m) \sim |n-m|^{-3/2}
\tag{186}
$$

### CC 데이터 해석 모델들

#### 5.1 Fractal Globule 모델
비평형 상태의 비얽힘(non-entangled) 구조. DNA가 자기 유사적(auto-similar) 규칙으로 구역을 채움. **현재는 크로마틴 구조를 설명하기에 불충분**한 것으로 평가됨.

#### 5.2 β-폴리머 모델
접촉 확률:

$$
P_{enc}(N) \sim N^{-3/2(\beta-1)}
\tag{188}
$$

$\beta$를 데이터에 피팅하여 크로마틴 내재적 장거리 상호작용의 강도 추정.

#### 5.3 String Binder and Switch (SBS) 모델
- 크로마틴을 자기 회피 사슬로 모델링
- 일부 모노머($f$ 비율)가 결합 분자(binders)와 연결 가능
- 결합자 농도 $C_{tr}$에서 상전이(붕괴) 발생
- CTCF 단백질과 같은 chromatin 조절 분자 표현

#### 5.4 Co-polymer 모델
에피게놈 상태를 반영한 이종 폴리머. 에너지:

$$
H = U + H_{Inter}, \quad H_{Inter} = \sum_{n<m} E_{nm}\exp\!\left(\frac{r^2_{nm}}{2r_0^2}\right)
\tag{189}
$$

#### 5.5 루프 돌출 (Loop Extrusion) 모델
- Condensin/cohesin 효소가 능동적으로 크로마틴 루프를 밀어냄
- Loop-Extruding Factor(LEF)가 염색체를 따라 이동
- TAD(위상적 연합 도메인)와 루프 도메인 형성을 설명
- 저농도: 불완전한 루프, 고농도: 연속적인 루프 배열

#### 5.6 TAD 재구성 모델 (Shukron & Holcman)
Hi-C 행렬의 접촉 빈도 감쇠 지수 $\alpha$를 맞추도록 랜덤 connector와 고정 connector 배치.

---

## 6. 텔로미어 조직 (Section 7)

### 효모 핵의 텔로미어

- 32개 텔로미어 → 2~6개 클러스터 형성 (평균 4개씩)
- 핵 봉투 표면에서 확산·집합·해산 반복

### 만남 속도

텔로미어 만남 속도 (핵 표면 위의 2D Brownian particle로 coarse-graining):

$$
k_f \approx 1.9 \times 10^{-3} \text{ s}^{-1}
$$

### 해산 모델

$n$개 텔로미어 클러스터의 해산 속도: $(n-1)k_b$

**실험값:** $k_b = 2.3 \times 10^{-2}$ s$^{-1}$ → 두 텔로미어 결합의 평균 수명 $\sim 43.5$ 초

**공존 확률:**

$$
P_2 = \frac{T_C}{T_C + T_R} \approx 0.047
$$

($T_C \approx 23.4$ s, $T_R \approx 480$ s)

---

## 7. 단일입자추적 (SPT) 분석 (Section 8)

### 실험 방법

GFP-LacI/LacO 시스템 → 특정 좌위를 수십 nm 해상도로 추적. 시간 해상도 수백 ms.

### 핵심 통계량

**자기상관 함수 (Cross-correlation):**

$$
C_\tau(t) = \langle (\mathbf{R}_c(\tau+t) - \mathbf{R}_c(\tau))^2 \rangle
\tag{190}
$$

**MSD:**

$$
\text{MSD}(t) = \langle \mathbf{R}_c(t) - \mathbf{R}_c(0)^2 \rangle
\tag{192}
$$

**제약 길이 (Constraint Length):**

$$
L_C = \sqrt{\text{Var}(\mathbf{R}_c)} = \sqrt{\frac{1}{T}\sum_{h=1}^T (\mathbf{R}_c(h\Delta t) - \langle \mathbf{R}_c \rangle)^2}
\tag{201}
$$

**유효 확산계수:**

$$
D_c \approx \frac{1}{6N\Delta t}\sum_{h=1}^{N-1}(\mathbf{R}_c(h\Delta t) - \mathbf{R}_c((h+1)\Delta t))^2
\tag{202}
$$

### 이상확산 지수 변화 원인들

| 원인 | 효과 |
|-----|-----|
| Rouse polymer | $\alpha = 0.5$ |
| β-polymer ($\beta < 2$) | $\alpha < 0.5$ |
| 핵 회전/외부 드리프트 | $\alpha$ 증가 ($\to 0.66$~$0.75$) |
| 진동력 | $\alpha$ 증가 ($\to 0.8$) |
| DSB 후 크로마틴 이완 | $\alpha$ 증가 |

### 외력 추출 공식

관찰 모노머 $c$, 상호작용 모노머 $n$ 사이의 유효 스프링 상수:

$$
k_{cn} = \frac{k\kappa}{\kappa + (c-n)k}
\tag{218}
$$

SPT로부터 $k_c$ 추정:

$$
k_c \approx \frac{1}{d(N_p-1)}\sum_{i=1}^d \sum_{h=1}^{N_p-1} \frac{R_c^i((h+1)\Delta t) - R_c^i(h\Delta t)}{D\Delta t (R_c^i(h\Delta t) - \langle R_c^i\rangle)}
\tag{226}
$$

---

## 8. DNA 수리의 물리학 (Section 9)

### 이중가닥 파손(DSB) 수리 과정

1. **NHEJ (비상동 말단 결합):** 두 파손 말단을 직접 재연결
2. **HR (相동 재조합):** 상동 서열을 탐색하여 정확히 수리 (rate-limiting step!)

### 물리적 특성 변화 (DSB 후)

- 제약 길이 $L_C$ **증가** → 더 넓은 핵 공간 탐색
- 유효 스프링 상수 $k_c$ **감소** → 상호작용 완화
- 이상확산 지수 $\alpha$ **증가** → 크로마틴 이완 ($\beta \to 2$에 가까워짐)

### β-폴리머로 해석한 크로마틴 이완

$\beta \to 1$: 고응축, $\beta \to 2$: 이완. DSB 후 $\beta$ 증가 = 크로마틴 이완 = 탐색 가속.

**결론:** 크로마틴 이완이 탐색 시간을 **4~8배** 단축.

### DSB의 핵 봉투 재배치

수리 불가능한 DSB → 핵 공극(nuclear pore) 또는 Mps3(SUN domain 단백질)로 이동. 전위(translocation) 방지 보호 기전으로 해석.

---

## 9. 모델 선택 가이드 (Section 10.1)

| 상황 | 권장 모델 |
|-----|----------|
| $\alpha \approx 0.5$ | Rouse |
| $\alpha < 0.5$ | β-polymer |
| $\alpha > 0.5$ | 외력 + Rouse (해석 어려움) |
| Hi-C 해석 (전체 구조) | SBS + 랜덤 루프 |
| 텔로미어 역학 | Coarse-grained Brownian particles on surface |
| DSB 탐색 | β-polymer + 이완 모델 |

---

## 10. 미해결 문제들 (Section 10.2)

- 복수 태그 좌위의 상관관계로 역학 추출
- Hi-C 데이터의 최적 폴리머 모델?
- SPT와 Hi-C 통계의 통합
- DSB 수리 단백질의 동역학 모델링
- 전사인자의 프로모터 탐색 과정 재방문
- NHEJ 전위 확률 계산
- 핵 손상 후 뉴클레오솜 재배치 모델
- 암세포 Hi-C 데이터의 특이적 특성 탐색

---

## 관련 노트

- [[Gaussian Chain (Ideal Chain)]]
- [[Radius of Gyration of Gaussian Chain]]
- [[Brownian Motion Properties]]
- [[First Passage Time from Position PDF]]
- [[First Passage Renewal Equation]]
- [[Journal reading - Anomalous diffusion models and their properties]]
- [[Journal reading - The fractal globule as a model of chromatin architecture in the cell]]
- [[Chapman-Kolmogorov Equation]]
- [[Markov Process]]
- [[Entropic Spring Constant]]
