---
title: Journal reading - Genome-wide absolute quantification of chromatin looping
authors: James M. Jusuf, Jin H. Yang, Jack Toppen, Simon Grosse-Holz, Michele Gabriele, Pia Mach, Ilya M. Flyamer, Christoph Zechner, Luca Giorgetti, Leonid A. Mirny, Anders S. Hansen
DOI: "[DOI](https://doi.org/10.1038/s41594-026-01819-2)"
date read: 2026-08-02
date published: 2026-06-30
subject: chromatin biology
tags:
  - study
  - concept
  - question
class: study_journal
---

# Genome-wide absolute quantification of chromatin looping
![[Screenshot_20260803_131500_Flexcil.jpg|373]]

## 왜 읽었나
나는 아직 저널 리딩에서 순수 이론 논문을 발표할 깜냥이 안 된다. 
최근에 나온 생명 실험 논문 중 우리 연구실 사람들이 흥미 있어 할 만할 걸 찾아달라고 AI한테 부탁했더니 이걸 추천해 줬다. 
내가 요즘 하고 있는 프로젝트와 직접적으로 관련되어 있으며, 그리 어렵지 않은 논문이다. 
실험에서 데이터를 처리하는 방법을 보면 언젠가 내 연구에 적용할 수 있을 지도 모른다. 
또한, Mirny group도 저자로 끼어있다. 아무래도 MD simulation을 이용한 분석으로 기여한 것 같다. 

## Overview
Hi-C/Micro-C 같은 3D genomics 기법은 pairwise interaction을 **relative scale**로만 측정한다는 근본적 한계가 있다. Sequencing read count에서 신호를 뽑아내기 때문에, "이 loop이 저 loop보다 강하다"는 말할 수 있어도 "이 loop은 전체 allele의 몇 %에서 형성되어 있다"는 말할 수 없다.

이 논문(Technical Report)은 그 한계를 **live imaging 데이터로 Micro-C를 calibration**함으로써 돌파한다. 핵심 아이디어는 단순하다:

1. Live imaging + BILD로 absolute looping probability를 이미 알고 있는 소수의 loop들이 있다 (Fbn2, Npr3, synTAD 등).
2. 그 loop들의 Micro-C dot strength를 정량화하는 방법(**AbLE**, absolute looping estimator)을 만든다.
3. 두 값 사이의 비례상수 $k$를 구한다 ($k = 0.161$).
4. 그 $k$를 genome-wide의 모든 loop에 적용한다.

![[Pasted image 20260803085231.png]]

결과: mES cell의 65,929개 loop에 대해 absolute looping probability를 얻었고, **mean 1.2%, median 0.7%, max 25%**. 즉 chromatin loop은 거의 언제나 **rare state**다. CTCF–CTCF loop이 cis-regulatory loop보다 강하다 (2.2% vs 0.5%).



## Link to PDF and DOI

- DOI: https://doi.org/10.1038/s41594-026-01819-2
- Journal: *Nature Structural & Molecular Biology* **33**, 1105–1114 (July 2026)
- Local PDF: [[Genome-wide absolute quantification of chromatin looping.pdf]]
- Code: https://github.com/ahansenlab/AbsQuant_analysis_code
- Data: GEO GSE286495 / Zenodo 10.5281/zenodo.14600051

## 주요 내용 요약

### Hi-C란 뭔가? 왜 기존 Hi-C는 relative scaling인가?
![[Pasted image 20260803081930.png]]
이미지 출처: https://en.wikipedia.org/wiki/Hi-C_%28genomic_analysis_technique%29
![[Pasted image 20260803084555.png]]
생물학자가 보면 뒷목잡을 만큼 간략한 Hi-C 실험 기법 설명

잘 살아있는 세포에 약을 친다. (포름알데하이드, 발암물질)
가까이 있던  DNA의 두 loci가 약때문에 crosslink된다. 이 과정을 fixation이라고 한다. 
세포를 부숴서 DNA를 꺼낸다.
Restriction enzyme을 써서 DNA를 마구잡이로 잘라 조각낸다. 
Crosslink가 생긴 곳을 sequencing한다. 
어떤 loci 쌍이 함께 sequencing되었는지 그 빈도를  측정한다. 
빈도를 Matrix로 나타낸다. 

따라서 이 방법은 세포에 약을 치는 그 순간에, DNA의 모양을 확인하는 방법이다.
과정에서 세포는 죽기 때문에, 연속적인 시간에서 dynamics를 볼 수는 없는 방법이다. 
대체로 어떤 loci들이 가까이 있는지, 즉 loop을 이루는 지를 알기 위해서는 여러 세포에 똑같은 방법을 적용하여 ensemble average를 구해야 한다. 
Looping은 ergodic하다는 가정 하에, ensemble average가 time average와 같다고 가정한다. 

안타까운 점은, Hi-C data는 looping probability를 바로 보여주지 않는다는 점이다. 
왜냐면 실제 loop이 일어날 확률과, crosslink가 sequencing될 확률 사이에는 여러 상수가 곱해지기 때문이다. Loci사이 거리에 따라서 fixation이 될 확률, DNA 조각이 회수될 확률, PCR을 성공할 확률 등등.... 실험 과정에서 loss가 필연적으로 발생한다. 

대신에 이 확률들이 전체 loci에게는 거의 공평하기 때문에, '상대적인' cross link의 빈도는 Hi-C data가 보장할 수 있다. 

### Absolute looping probability와 contact probability의 구분 → AbLE (저자가 고안한 Hi-C 유래 data)

실험 과정을 생각하면, Hi-C data는 loop가 일어나는 빈도가 아니라, 
두 loci쌍이 물리적으로 가까이 있을 확률과 관련되어 있다. 
Topology에 의해서, 두 loci가 굳이 loop을 이루지 않아도 polymer가 꿈틀거리다 보면 서로 가까이 있게 된다. 

따라서 저자는, 이 Hi-C data에서 순수하게 looping probability만을 뽑아내기를 원했다. 
일련의 계산을 통해 Hi-C에서 추출한 looping probability 대응 수치를 'dot strength' 혹은 '**AbLE** score (**Ab**solute **L**ooping **E**stimator)' 이라고 부른다. 

저자들이 정의한 'Absolute looping'이 무엇인지는 아래 그림으로 정리되어 있다. 
Yes라고 되어 있는 경우만 loop으로 인정하고, No(backgorund)라고 된 경우는 인정하지 않는다. 

![[Pasted image 20260803085413.png]]
CTCF-CTCF loop
![[Pasted image 20260803085423.png]]
cis-regulatory loop


$P(s)$가 $s$만큼 genomic distance가 떨어진 두 loci가 가까이 있을 확률, contact probability일 때, 
absolute looping probability는 아래와 같이 구해 진다. 
![[Pasted image 20260803085343.png]]

$P_{bg}(s)$는 background conformation을 가질 때 확률, 즉 loop이 없을 때 확률이다.
이 값을 polymer dynamics를 이용해 이론 적으로 구할 수도 있지만, 
실제적으로 $P_{bg}(s)$는 locus 근처의 topology(예를 들어, locus가 고리 안에 있는지 아닌지 여부)에 영향을 받는다. 이 경우 이론식을 적용하기 복잡하기 때문에, 저자들은 empirical한 data를 이용해 $P_{bg}(s)$를 구한다. 
그 과정이 아래 figure에 드러난다. 
![[Pasted image 20260803090713.png]]

이렇게 구한 AbLE score가 진짜 looping probability를 잘 구하는지 확인하기 위해 MD simulation을 돌렸다. 
Simulation으로 추적한 looping probability와 simulated Hi-C data에서 구한 AbLE score가 $R^2 =0.92$를 보였다고 한다. 
![[Pasted image 20260803090814.png]]

### AbLE score와 BILD(Bayesian inference of looping dynamics)의 비교
BILD는 looping이 잘 일어나는 두 loci에 형광을 붙여놓고, live imaging으로 둘의 거리를 실시간 관찰할 수 있다. 한 cell line은 정상 표현형으로, control cell line은 CTCF를 depletion하여 해당 자리에 loop이 생기지 않게 하거나, extruder를 망가뜨려 loop이 아예 생기지 않게 한다. 

Bayesian inferenve로 loop이 일어날 때 contact probability와 loop이 없을 때 contact probabiliy를 (적어도 형광 태그한 그 두 loci에 한정해서) 정확히 알 수 있으며, 이를 통해 looping probability를 알 수 있다. 

![[Pasted image 20260803092614.png]]

#### BILD의 두 reference state는 어떻게 얻는가: ΔCTCF와 ΔRAD21

BILD가 작동하려면 두 상태의 거리 분포

$$
P(R \mid \text{unlooped}) \quad\text{와}\quad P(R \mid \text{looped})
$$

를 모두 알아야 한다. 그래야 관찰된 $R(t)$의 각 시점에 "looped일 확률"을 배분할 수 있다. 그런데 두 분포를 얻는 방식이 서로 다르고, 특히 looped 쪽이 직관에 반한다.

**Unlooped reference — ΔCTCF (직접 관찰)**

CTCF를 없애면 cohesin은 여전히 extrusion을 하지만 **멈출 자리가 없어서** loop이 두 anchor에 고정되지 않는다. 따라서 ΔCTCF에서 관찰된 거리 분포 전체를 unlooped 분포로 그대로 쓴다.

**Looped reference — ΔRAD21 (직접 관찰이 아니라 계산)**

"loop을 항상 켜놓는" 실험 조건은 존재하지 않는다. Wild-type 데이터 안에 looped 시점이 섞여 있지만 그것만 골라내는 것이 곧 풀려는 문제 자체이므로 순환이다. 그래서 저자들은 **계산으로 만들어낸다.**

Rouse chain에서 $\langle R^2(n)\rangle = b^2 n$이므로, 환산율 $b$만 알면 17 kb에 해당하는 거리를 계산할 수 있다. 그런데 $b$는 이론으로 정할 수 없고 측정해야 하며, 측정하려면 **extrusion이 전혀 없는 순수 polymer**가 필요하다. RAD21(cohesin subunit)을 없앤 조건이 정확히 그것이다.

$$
\langle R^2\rangle_{\text{looped}} = \langle R^2\rangle_{\Delta\text{RAD21}} \times \frac{17\,\text{kb}}{505\,\text{kb}}
$$

이것이 Methods의 "rescaling the mean squared distance $\langle R^2\rangle$ observed in the ΔRAD21 condition with the fraction of genomic distance remaining"의 의미다.


이렇게 구한 looping probabilit와 AbLE을 비교하여 둘 사이 비례상수 $k$를 구했다. 

![[Pasted image 20260803092932.png]]

$k= 0.161$이 나왔다고 한다. 

오직 4가지의 loop만을 이용하여 $k$값을 구했지만, 
똑같은 Hi-C experiment protocole을 따르는 한 $k$값이 모든 loop에 대해 동일할 것이라고 가정한다. 
그러면 Hi-C를 이용해 모든 loop의 looping probability를 추론할 수 있게 된다. 

### 실험 결과

#### Looping probability distribution
![[Pasted image 20260803094631.png]]
![[Pasted image 20260803094643.png]]

![[Pasted image 20260803094656.png]]

![[Pasted image 20260803094706.png]]


![[Pasted image 20260803101813.png]]
Analyzing the effects of intervening CTCF sites and loop size separately, we found that intervening CTCF sites reduced looping probability more than expected from loop size effects alone



#### Looping probabilities corrleate with epigenomic features
![[Pasted image 20260803094730.png]]
![[Pasted image 20260803094737.png]]
![[Pasted image 20260803094759.png]]
![[Pasted image 20260803094806.png]]
![[Pasted image 20260803102537.png]]
![[Pasted image 20260803094820.png]]

## Questions & Insights

## Related Concepts

이 논문을 이해하기 위해 필요한 학습 노트를 연결한다.
글리아와 논문을 읽으며 새로 공부하고, 작성한 학습노트를 이곳에 자동으로 추가한다.

## 더 읽어보고 싶은 레퍼런스

이 논문의 레퍼런스 중에서 읽어보고 싶은 것을 링크.
DOI를 적어도 좋고, 'academic_journal' class의 다른 노트를 연결하면 더 좋다.

