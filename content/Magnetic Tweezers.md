---
title: Magnetic Tweezers
date: "2026-06-25"
subject: biophysics
tags:
  - study
  - concept
  - question
class: study
---

# Magnetic Tweezers

## Overview

핵산(DNA/RNA)이나 단백질 등 단일 분자에 force와 torque를 가하면서 그 mechanical response를 측정하는 single-molecule force spectroscopy 기법. 분자 한쪽 끝은 glass surface(또는 surface에 고정된 non-magnetic bead)에, 다른 한쪽 끝은 paramagnetic bead에 연결한다. 자석으로 만든 magnetic field gradient가 bead에 stretching force를 가하고, 자석을 회전시키면 bead에 torque를 가할 수 있다. 다음 연구실 순환에서 주력으로 사용할 기법.

## Key Points

### 기본 원리와 experimental configuration
![[Pasted image 20260625112625.png]]


- bead와 실험 대상(DNA 등)이 있는 공간을 flow cell이라고 부른다. 

- Flow cell 아래에는 CCD가 달린 현미경이 있음. Bead가 만드는 그림자(회절 무늬)를 이용해서 bead의 위치를 확인하는 용도. 또한 Bead의 요동을 이용해 힘을 측정한다. 사실상 보든 분석은 CCD로 찍은 이미지를 이용한다. 

- Bead에 가해지는 force:
$$
\vec{F} = \frac{1}{2}\vec{\nabla}(\vec{m} \cdot \vec{B})
\tag{1}
$$
  여기서 $\vec{m}$은 bead의 induced magnetic moment, $\vec{B}$는 외부 자기장.
- Bead의 magnetic moment 중 $\vec{B}$에 align되지 않은 minor component $\vec{m}_0$가 torque를 만든다:
$$
\vec{\Gamma} = \vec{m}_0 \times \vec{B}
\tag{2}
$$
- 적용 가능 force 범위:  10 fN ~ 100 pN
- Force는 자석-flow cell 간 거리를 조절해 변화시킨다 (bead 움직임의 길이 스케일 $\mu$m이 자기장 변화의 길이 스케일 mm보다 훨씬 작아서, bead 입장에서는 거의 constant force로 느껴짐)


### Force 측정 (equipartition theorem 기반)

![[Pasted image 20260625112642.png|345]]

- Bead는 Brownian motion으로 평형 위치에서 계속 흔들리며, 이 fluctuation의 분산을 이용해 force를 역산한다.
- Effective trap stiffness: $k_x = F/l$ ($l$은 nucleic acid의 extension)
- 총 에너지 $E_p$는 늘어난 DNA의 복원력에 의한 potential $E_{NA}$와 자기장에 의한 potential $E_{mag}$의 합이다. 이때, bead의 요동은 아주 작은 sacle이므로, 자기력 $F$는 위치에 대해 상수라고 취급. $E_{NA}$는 DNA가 늘어난 길이의 함수 $E_{NA} = A(l)$이다. 
$$
E_p = E_{NA} + E_{mag} = A(l) - Fz
$$
- 평형상태에서는 bead가 양옆으로 움직이지 않고, $z$축으로 쭉 늘어나 있다. 따라서 $(x,y,z) = (0,0,l)$이며, $\frac{\partial E_p}{\partial z} = 0$이고 $\partial z = \partial l$. 따라서
$$
F = \frac{\partial A}{\partial l}
$$
즉 force는 핵산의 에너지를 extension에 대해 미분한 것. 직관적인 관계식이다. 

평형점 근처 fluctuation을 보려면, $A$를 attachment point부터 bead까지의 실제 거리 $r=\sqrt{x^2+y^2+z^2}$의 함수로 일반화해서 Taylor 전개한다.

*Transverse 방향 ($x$, Eq 13.5)*: $\partial r/\partial x = x/r$이 평형점($x=0$)에서 사라지는 항을 만들어, $A'(r)$의 1차 항은 없어지고 $A'(l)\cdot \partial^2r/\partial x^2|_{eq} = F \cdot (1/l)$만 남는다:
$$
\frac{\partial^2 E_p}{\partial x^2}\bigg|_{eq} = \frac{F}{l}
\tag{13.5}
$$
이건 순수하게 기하학적인 효과(tension/length) — 분자의 stretching elasticity $A''$는 안 들어간다. 팽팽한 줄을 옆으로 밀 때의 복원력과 같은 원리.

*Longitudinal 방향 ($z$, Eq 13.6)*: $x=y=0$ 축 위에서는 $r=z$이므로 그대로 $A''(l)$이 남는데, 이는 force-extension curve 자체($F=A'(l)$)를 $l$로 미분한 것과 같다:
$$
\frac{\partial^2 E_p}{\partial z^2}\bigg|_{eq} = \frac{\partial F}{\partial l}
\tag{13.6}
$$
이건 분자 고유의 force-extension 기울기(local stiffness) — transverse 방향과는 본질적으로 다른 물리량.

교차항은 대칭성으로 소거되어, 세 방향이 독립적인 조화진동자로 분리된다:
$$
E_p(\vec{r}) \approx E_p(\vec{r}_0) + \frac{1}{2}\frac{F}{l}\delta x^2 + \frac{1}{2}\frac{F}{l}\delta y^2 + \frac{1}{2}\frac{\partial F}{\partial l}\delta z^2
\tag{13.7}
$$
→ transverse fluctuation만으로 force를 측정할 수 있는 이유: 그 방향의 stiffness가 분자의 stretching elasticity를 몰라도 $F/l$로 정해지기 때문.

- [[Equipartition Theorem]] 적용, $\frac{1}{2}\frac{F}{l}\langle \delta x^2\rangle = \frac{k_B T}{2}$ 
$$
F = \frac{k_B T \, l}{\langle \delta x^2 \rangle}
\tag{3}
$$
이렇게 x방향의 fluctuation of position을 이용해 힘을 계산할 수 있다. $l$을 바로 알 수는 없으니 $l$과 $z$가 같다고 가정. 

- 실제 계산은 real space보다 **Fourier space**(power spectrum 적분)에서 하는 것이 더 정확함 — 특히 force > 1 pN일 때 real space 계산은 force를 과대평가하는 systematic error 발생
- Power spectrum은 Lorentzian 형태를 가지며, cutoff frequency $f_c = \omega_c/2\pi$를 fitting해서 $k_x$, 따라서 $F$를 얻을 수 있음
- Camera의 finite integration time 때문에 생기는 motion blur는 별도 보정 필요 (Wong & Halvorsen correction)



![[Pasted image 20260625112655.png|491]]


### Extension 측정 (image analysis)
![[Pasted image 20260625112630.png]]

- Bead가 만드는 회절무늬(diffraction rings) 패턴이 objective focal plane(OFP)과 bead 사이 거리에 따라 달라지는 것을 이용
- Calibration profile을 미리 만들어두고, 실측 회절무늬를 여기 대조(interpolation)해서 z 위치를 역산 — 정확도 $\sim$10 nm
- Reference bead(표면에 고정)를 같이 측정해서 objective-sample 간 drift를 보정

### DNA/RNA의 force-torque response
- **WLC (worm-like chain) 모델**: torsionally unconstrained dsDNA의 force-extension을 잘 설명 (force < 5–10 pN). 자유 파라미터는 contour length $L_c$와 persistence length $L_p$ (dsDNA: $L_p \approx 50$ nm; dsRNA: $L_p \approx 64$ nm)
- **Linking number** $Lk = Tw + Wr$ = topological invariant (torsionally constrained 분자에서). $Tw$ = twist, $Wr$ = writhe
- Supercoil density: $\sigma = (Lk - Lk_0)/Lk_0$
- 자석을 돌려 turn을 늘리면: 처음엔 twist만 증가 (torque가 turn 수에 선형), buckling transition 이후엔 plectonemic supercoil 형성 (twist 대신 writhe 증가)

### 실험적 응용 예시
- **Topoisomerase 활성**: supercoil 풀리는 속도/turn 수 측정 (예: topoisomerase IB)
- **RNA polymerase의 DNA scrunching**: 양/음으로 supercoiled DNA에서 RNAP의 unwinding이 만드는 extension 변화의 비대칭성으로 검출
- **Helicase 활성**: DNA hairpin unzipping을 이용해 helicase의 velocity, processivity 측정 (예: 박테리오파지 T4 gp41)
- **단백질 시스템**: nucleic acid-free하게 단백질-단백질 결합력, immunoassay 등에도 응용

### 실용적 한계
- 시공간 분해능은 trade-off 관계: $f_c$가 temporal resolution을 결정하고, 측정 시간이 길어야 spatial resolution이 좋아짐 (SE $= SD/\sqrt{N}$)
- 짧은 분자 + 높은 force일수록 $f_c$가 커져서 시간분해능이 좋아짐
- 일반적인 spatial resolution: 2–10 nm, temporal resolution: $10^{-2}$–$10^{-4}$ s
- AFM, optical tweezers보다 시간분해능은 낮은 편

### Flow cell 구성
- 핵산 tethering: digoxigenin–antidigoxigenin 또는 biotin–streptavidin 결합쌍 사용 (fluorescein–antifluorescein도 가능)
- Surface passivation 필요 (BSA, PGA, PEG, nitrocellulose 등) — 비특이적 상호작용 방지
- RNA 실험은 RNase 분해와 화학적 불안정성(2′-hydroxyl group) 때문에 DNA보다 까다로움

## Questions & Insights

- Q: DNA가 항상 surface-bead 사이에 연결되는 줄 알았는데?
  A: 표준 구성 외에, 양쪽 다 bead에 연결하는 변형도 있다 (한쪽은 surface에 고정된 non-magnetic bead, 한쪽은 magnetic bead). 이 경우 objective가 tether에 수직으로 위젤하도록 광학 구성도 바뀌다.
- Q: 13.3절의 image analysis가 의반는 게 회절무니로 z 위제를 잤는 거야?
  A: 맞다. 회절무니 모양↔z 거리의 calibration profile을 미리 만들어둑고, 실측 무니를 대조해서 수직 위제를 역산하는 방식 (2D 이바지로 3D 정보 복원).
- Q: Eq 13.4는 $l$과 $z$를 거의 같다고 근사한 건가?
  A: 아니다. 평형점에서 bead의 z좌표를 핵산의 extension $l$로 **정의**해둔 것이지, 근사가 아니다. 이 정의 + 평형 조건($\partial E_p/\partial z=0$)으로부타 $F=\partial A/\partial l$이 자연스럽게 나온다.
- Q: Eq 13.5, 13.6의 Taylor 전개는 어띹게 한 건가?
  A: $E_p$를 $(x,y,z)$ 전역에서 $A(r)-Fz$ (단, $r=\sqrt{x^2+y^2+z^2}$)로 일반화해서, $x,y$ 축에서는 기하학적 항($F/l$)만, $z$ 축에서는 분자 고유의 force-extension 기울기($\partial F/\partial l$)만 남는다. 자세한 유도는 위 'Force 월좜' 섹션 참조.

## Related Concepts

- [[Worm-like chain model]]
- [[Persistence length]]

## References

- Vilfan, Lipfert, Koster, Lemay, Dekker (2009), "Magnetic Tweezers for Single-Molecule Experiments," in *Handbook of Single-Molecule Biophysics*

## Notes from Claude

