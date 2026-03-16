---
tags: [study]
---
# 2차 시험 단어장
$\Delta G$와 $K_{eq}$사이 관계식은? 그리고 유도 과정은?
Levinthal's paradox
Anfinsen's dogma(이름에 n이 세 번 들어가는 구만)
differential scanning calorimetry(DSC) -> 직접 측정하는 것은?
비열과 엔트로피, 온도의 관계식은?
isothermal tiltration calorimetry(ITC)
엔트로피 주도 반응과 엔탈피 주도 반응의 메카니즘 차이는?
==microscale electrophoresis(MST)==
differential scanning fluorimetry
equilibrium dialysis
==surface plasmon resonance(SPR)==
==biolayer interferometry(BLI)==
quartz crystal microbalance(QCM)
Foster resonance energy transfer(FRET)

electromyogram(EMG)
trans-epithelial electrical resistance(TEER)
electro encephalo graphy
magneto encephalo graphy
superconducting quantum interference device(SQUID)
SDS PAGE
CLARITY
iontophoresis
electrospary ionization
$f = 6\pi\eta r$
$\eta$: viscousity
r: stokes radius
$qE = fv$
electrophoresis mobility: $U = \frac{v}{E} = \frac{q}{f}$



detailed balance -> 핵심 식을 설명하라. 
Glauber dynamics
Matropolice dynamics

# 2차 시험 이창훈 교수님 열역학(ligand binding affinity)


지금까지는 입자 크기 측정법을 배웠다. 
이제는 열역학적 성질을 알기 위한 열적 측정 방치를 배운다. 
calorimetry
과학파트의 장비와 이번 주 배우는 장비를 비교해보라.

## 생명체의 열을 츨정했던 역사적인 실험

단열 용기 안에 생명체를.
얼음을 채워넣는다. 녹은 물의 양을 측정한다. 
현대에도 비슷하다. 
열을 잘 단열하고 온도를 측정한다. 

## 열을 측정해서 뭘 할 것인가?

단백질의 folding unfloding에 필요한 열은 뭘까?
단백질에 리간드가 결합하는 데에 필요한 에너지는 얼마일까?
물질의 비열이 얼마일까? (잘 녹나 안 녹나?)
==반응 전후의 깁스자유에너지 차이를 보면 반응 평형 상수를 볼 수 있다.== 

$$\Delta G = -RT lnK_d$$
$K_d$는 dissociation rate, 즉 에너지가 더 낮은 쪽으로 향하는 rate이다. 
$\Delta G$는 반응 전후 깁스 자유에너지의 차이다. (아마 반응 전이 결합 상태, 반응 후가 해리 상태)
이거 Boltzman factor에 의한 transition rate와 똑같다!
에너지 단위가 1몰당이기 때문에 볼츠만 상수가 아닌 이상기체 상수를 사용한 듯 하다. 



주로 invitro로 실험한다. 

- 발열흡열을 측정
- 용액실험
- real-time 빠르게 볼 수 있고 변화를 볼 수 있어요. -> dynamics, kinetics 측정 가능
- 분자 종류에 영향을 받지 않음
- 광학적 라벨링 필요없음 -> 시간 많이 걸리는 작업을 안 해도 된다! 축복이여.

## Levinthal's paradox

사고실험
100개의 아미노산은 99+99개의 각도의 자유도를 가짐. 
각 하나당 3개의 상태중 하나일 수 있다고 가정. 
3^198 이면 얼마냐...10^94 정도의 숫자다. 
컴퓨터로는 평생 계산 못해. 우주가 죽을때까지 못해. 
이렇게 오래 걸리는 계산을 자연은 어떻게 하는 거지?
==실제 가능한 구조의 경우의 수는 한정되어 있을 것이다.== 
자연의 접힘 과정은 어떤 규칙이 있을 것이다. 
우리도 그 규칙을 찾아서 계산하자. 

RNA분해효소(Ribonuclease A)는 정말 튼튼하다. 
이거를 약물(Chaotropic reagent,  urea 등) 치고 열 쳐서 기능을 불활성화 시켰는데, 방해요소를 없애니까 다시 기능이 살아난다. -> 다시 접히는구나! 접힘은 가역적이구나!

## Anfinsen's dogma 

단백질의 native한 접힘은 오로지 그것의 아미노산 서열에 의해 결정된다. 
열적인 단백질 접힘

- 1. 유일성 (Uniqueness) - 해당 서열이 비슷한 자유에너지를 가진 다른 형태를 가져서는 안 된다. - 즉, 자유에너지 최솟값이 유일해야 한다 (경쟁자가 없어야 함). 
-  2. 안정성 (Stability) - 주변 환경의 작은 변화가 최소 에너지 형태의 변화를 일으켜서는 안 된다. - ==자유에너지 표면이 **접시**(여러 개의 비슷한 낮은 에너지 상태들이 있는)가 아니라 **깔때기**(native state가 바닥에 있는) 모양이어야 한다.== - Native state 주변의 자유에너지 표면이 충분히 가파르고 높아야 안정성을 제공할 수 있다. -> 살짝 모양이 바뀌어도 다시 native state로 돌아오도록
- 3. 운동학적 접근성 (Kinetical accessibility) - 펼쳐진 상태에서 접힌 상태로 가는 자유에너지 표면의 경로가 합리적으로 부드러워야 한다. - 다시 말해, 사슬의 폴딩 과정이 매우 복잡한 형태 변화(매듭이나 다른 고차 형태)를 포함해서는 안 된다. - 단백질 형태의 기본적인 변화는 환경에 따라 일어나며, 그 자리에 맞게 형태를 바꾼다. - 이것이 생체분자가 여러 형태로 전환할 수 있는 다중 구조를 만든다.


원래는 모든 경우의 수가 에너지가 동등하다고 가정 -> 평평하고 뾰족한 깔떼기 (Levinthal paradox의 상황이다)
실제로는 모든 경우의 수가 에너지가 다름 -> 부드러운 깔떼기
![[Pasted image 20251102195522.png]]

## $\Delta G$와 $K_d$사이 공식 유도?

[[깁스자유에너지와 평형상수]]

## differential scanning calorimetry (DSC)

열량 측정장비, 마이크로스케일로.
엔트로피를 측정하고 싶다. 그런데 이게 안되니까, 비열을 측정하자. 
온도가 달라질 때 엔탈피가 얼마나 변할까?
==경우의 수가 적으면 열용량이 적어진다.== 
==그러므로 unfolding된 단백질이 열용량이 크다.== 
 ==folding된 단백질은 열용량이 적다.== 

-> 무조건 이렇게 말하는 게 맞아?

**정압 비열 (Constant Pressure)** $$dS = \frac{C_P}{T}dT$$
 $$C_P = T\frac{S}{T}$$
 

**온도변화에 따른 엔트로피 변화가 커질 수록 비열이 커진다!!**

이제보니 비열과 엔트로피가 동차원이구나.

이 장비는 온도를 설정해 두고, 온도 변화에 따른 열 출입을 측정한다. Q(T)를 측정한다는 거다.(실제로는 열 투입에 쓰인 전기 에너지) 같은 온도를 겪는 샘플과 열 출입량을 비교한다. 


#### 뭘 측정할 수 있는가?
- 상전이 측정 (녹는 점, 지질구조물)
- 단백질의 접힘과 풀림에 대한 실험
- pH 조건에서 효소의 안정성
- ==독립적인 도메인의 수를 유추할 수 있다. (melting temperature가 몇 번이나 있는지 확인하여서)==
- 작은 리간드가 붙고 떨어지는 열용량 차이 (리간드 자체의 열용량이 없어야 함) 리간드가 붙으면 folding릐 효과가 나면서 열용량이 적어져야 한다. 그리고 T_m이 늘어나야 한다. 안정적이니까. 
레퍼런스가 꼭 필요하다. 

레퍼런스와 샘플의 온도 상승 지연을 만회하기 위한 추가 열을 측정한다. 

![[Pasted image 20251102215320.png]]

![[Pasted image 20251102215516.png]]

상전이에서는 비열이 무한대로 뛰는 경향

오른쪽으로, 풀림 이후에는 열용량이 높아졌다. 이런 방식으로 melting temperature($T_m$)도 알 수 있다. 
  
이렇게 두가지 상태의 열용량 차이를 알 수 있다. 

열용량을 온도로 적분하면 엔탈피가 나온다. 
저 그래프 아래를 적분하면 특정 온도에서 다른 온도에 도달하기 까지의 엔탈피 변화를 알 수 있다. 

![[Pasted image 20251102220604.png]]

그래프에서 나오는 시그모이드 커브는 비율을 나타낸다. 두 가지 상태의 비율. 

==시그모이드 커브는 변화량 대비 관찰량을 근사한 그래프로 그릴 수 있다. 이 시그모이드 커브를 이용해 특정 변수(여기서는 온도)에서 평형 상수를 구할 수 있다.== 
![[Pasted image 20251102220922.png]]

위 이미지에 따르면 특정 x에서 K값은
$$K = \frac{F_{inf} - F(x)}{F(x) - F_0}$$
그러면 T 알고 K아니까 깁스자유에너지 변화도 알 수 있다. 

$$\Delta G = -RTlnK$$

## isothermal titration calorimetry (ITC)

단백질 상호작용의 열을관찰하기 위해
두 종류의 단백질을 넣고 열용량의 변화를 동시에 측정. 
온도 일정 유지. 반응물을 방울방울 똑똑.

- 친화도 (혹은 해리상수수)
- 결합기작 (엔탈피에 변화를 주나? 엔트로피에 변화를 주나?)
- 결합부위 수 (stoichiometry)
- 동역학적 정보

이제는 분리 상수에 관한 식이다. 
두 가지 상태는 분리된 상태와 결합한 상태. 

분리 상수 K (dissociation constant)
$$K = \frac{[R][L]}{[RL]}$$
총 리간드 농도랑 총 리셉터 농도는 알고 있다. 
$C_L = [RL] + [L]$
$C_R = [RL] + [R]$
![[Pasted image 20251102224143.png]]
![[Pasted image 20251102224206.png]]

K는 측정을 통해 알 수 있다. 그러면 $[RL]$도 알 수 있겠지!

형광 표지 안 해도 된다. 
S, T, H 모두 볼 수 있다. 
butter를 많이 타는 게 문제. 
이온과 거품에 민감. 
시료가 많이 필요한다. 단백질을 열~~ 심히 만들어야 한다. 

DSC와 공통점
- 실시간 용액 실험
- 열용량 변화(엔탈피 변화) 측정
- 히터와 온도 센서 사용
- 샘플과 레퍼런스 비교

DSC와 차이점
- 한 분자 VS 두 분자의 결합 상태
- 주사기로 ligand 적정
- stirrer가 있음
- 상태 변화에 따른(리간드 투입에 따른) 온도 변화를 보상하기 위해 투입된 열을 측정

heat pulse -> 리간드가 결합할 때 방출되는 에너지
곡선의 중간 slope를 구하면 1/K_d 가 나온다. 왜? 이것이 affinity이므로. 해리 상수와 affinity는 inverse이다. 
더불어 엔탈피 변화량도 구했다. (왜인지는 모르겠지만)
그리고 결합수(stoichiometry) n도 구할 수 있다. 
![[Pasted image 20251102224845.png]]

K를 구했으니 $\Delta G = -RTln(K_d)$ 로 Gibbs free energy를 구할 수 있다. 
S도 구할 수 있다. $T \Delta S = \Delta H - \Delta G$

##  ==Entropy 변화 vs Enthalpy 변화==

==ITC를 동해 S와 H중 어떤 변화가 우세한지 알 수 있다.== 

- ==Entropy가 변화한다? hydrophobic interaction이나 conformational change에 의한 열량 변화가 일어난다.== 
- ==Enthalpy가 일어난다? hydrogen bond등으로 에너지 흐름이 있었다. 실질적인, 정전기적인 원자의 반응.== 
![[Pasted image 20251102225624.png]]

음수값이 큰 parameter가 안정화에 더 많이 기여한다는 뜻. 1번은 엔탈피가 더 큰 기여, 2번은 엔트로피가 더 큰 기여. 
## microscale thermophoresis (MST)
리간드 affinity를 구하는 방법
형광 표지가 필요하다. 
K_d를 측정하긴 하지만 H, T, S를 측정하지는 않는다. 
사용이 빠르다. 20분 만에 가능. 
적은 시료로도 된다. 
열변성에 취약. 데이터를 사용할 수 없다. 단백질이 열 변성에 취약하면 어쩌지?

여러 농도로 리간드를 섞은 capillary 준비!
적외선 레이저로 가열. 
열때문에 입자가 밀림. 레이저 부위의 형광 신호가 사라짐
레이저가 꺼지면 다시 형광 신호가 돌아옴. 
만약에 리간드가 리셉터에 잘 붙들어져 있어서 운동성이 낮아졌다면? 열에 의해 밀리는 정도가 줄어들기 때문에, 레이저를 쏘아도 형광 신호가 적게 줄어든다. 
![[Pasted image 20251102230951.png]]
![[Pasted image 20251102231124.png]]

어라? 시그모이드다! 평형 상수를 구할 수 있다. 
### K_d를 어떻게 구할 수 있었더라???

## differential scanning fluorimetry
역시 리간드 affinity를 구하는 방법
리셉터에 리간드가 달려있으면 온도가 높아도 단백질이 잘 안 풀린다. 
리간드가 있을 때 없을 때 언폴딩되는 온도 차를 보자. 

unfolding 되었는지 어떻게 아냐고요?
unfolding된 단백질에 잘 붙는 형광 다이를 사용. 
형광이 많이 나타나면 unfolding 완성. 

트립토판이나 타이로신이 가진 자체 단백질 형광을 볼 수도 있다. 

마이크로몰 수준의 친화도는 잘 보지만 그 보다 적은 건 좀...

![[Pasted image 20251102232729.png]]
리간드가 붙으면 T_m이 높아진다. 
높은 온도에서 버틸 수 있게 튼튼

이러면 리간드 농도에 따른 Tm 그래프를 그릴 수 있고, 이를 통해 다시 K_d 값을 구할 수 있다. 

### 한계! 아쉬운 점

Dye가 문제야. Dye와 리간드가 상호작용하면 어쩔건데?
nM 단위에서는 못 함. 마이크로몰 정도는 되어야 함. 


## equilibrium dialysis
리간드가 통과할 수 있는 반투막. 
한쪽 공간은 리셉터가 있고, 다른 공간은 없다. 

양쪽의 농도 차이를 이용해 affinity를 구할 수 있다. 
전제는? 양쪽의 자유 리간드 농도가 같다고 가정.
양쪽에서 절대적 리간드 농도 차는 곧 $[RL]$이다. 
$[R] = 전체 R 수 - [RL]$
이제 K값 구할 수 있겠죠?

### 한계!
리간드가 반투막보다 크기가 크면 그냥 못 하는 실험. 
UV 흡광도에 따른 농도를 알 수 있는 흔한 리간드라면 제일 좋은 실험. 

## surface plasmon resonance(SPR) (중요)

광학장비면서 세척장비다?

리간드와 붙은 리셉터를 계속 씻어서 리간드가 얼마나 잘 떨어져 나가는지 확인한다. 

아주 얇은 박막에서 일어나는 간섭현상. 

금 박막에 단백질을 붙인다. 
전반사 일으켜서 evanescent wave가 얼마나 흡광되는지 본다. 
즉 반사가 얼마나 잘 되는지 본다. 
![[Pasted image 20251102235542.png]]
단백질이 붙어있으면 반사광의 peak의 각도가 달라진다. resonance angle의 차이가 생김. 
리간드가 붙어 있어도 peak 위치가 달라짐. 

아주 미량의, 그리고 아주 작은 affinity도 감지할 수 있다. 
기계가 자동적으로 돌아가서 좋다. 
그런데 기계 비싸다. 
장비를 재활용하느라 더러워진다.

## biolayer interferometry(BLI)

원리는 위와 똑같다. 
입사각 대신 파장을 바꾼자.
그런데 더 비싸다. 

## quartz crystal microbalance (QCM)

석영은 압력을 주면 전기 생김. 
질량 차이를 알 수 있다. 적룔 전류와 진동수를 기록해서. 

## 정성적인 측정법

SDS page
gel filteration

Co-IP -> 일단 붙는지 아닌지는 알 수 있음. 
## Forster resonance energy transfer (FRET)
알지!! 표지를 하면 일단 정량 측정을 할 수 있어. 

## 함께 생각해 볼까요?
열로 볼 수 있는 분자의 상태 변화는 또 뭐가 있있을까>
물리 화학적 성질을 이용하여 새로운 측정 장비를 만들 수 있을까



적어두 두세개의 장비로 측정해야 논문으로 쓸 수 있다. 




# 2차 시험 이창훈 교수님 전기 강의 
 갈바니 전기
 볼타 전지

### 생명현상에서 전기를 볼 수 있는 곳은?
전기뱀장어 사냥

전기뱀장어와 아주 큰 사냥꾼 사이에 전류는 어떻게 흐르는 거지?
물을 경유해서 회로를 만든다. 


논문 저자 이름 누구였어요???

전기뱀장어의 Hunter's organ
electrocyte
mV 차이가 어떻게 감전까지 일으키지? 겹겹이라서?

사람도 전기 쓴다. 심장에 
SA node

### electromyogram(EMG)
근육의 수축도 근육으로 측정해보자. 

### trans-epithelial electrical resistance (TEER)

조직이 건강하면 조직을 통과하는 전류에 대해 저항이 강할 것이다. 
세포 조직은 capacitance도 있다. 이걸 측정할 수도?
교류를 이용한다. 이걸로 다른 정보를 알 수도?

수식은 안 외워도 돼요!

TEER은 바이오칩에서 조직이 잘 만들어졌는지 확인하는 용도로도 사용한다. 

### action potential


### Electro Encephalo Graphy (EEG)

여러 개의 신경세포에서 나오는 전기장을 함꺼번에 측정
뉴련 단위가 아니라 뇌 단위의 단서 제공. 
MAOA 유전자에 따라서 EEG 신호가 달라졌다고 한다. 


### magneto encephalo graphy
전류에서 유도된 뇌의 자기장도 측정가능할까? 물론!

장비가 정말 크다!! EEG보다 해상도가 좋다고 한다. 

센서는 작은데 왜 장비 크기는 클까. 
아주 작은 전기장을 잡아야 해서 초전도 수준으로 온도를 낮춰야한다. 

superconducting quantum interference device

지구 자기장으로 인한 노이즈는 어떡하지?
지구자기장을 차폐해야 뇌의 아주 미약한 뇌의 자기장을 잡을 수 있다. 

### 지자기를 사용하는 미생물
magnetosprillum magnectotactium
몸 안에 나침반이 있는 미생물. 
철을 먹어서 몸 안에 자석을 만든다. 
어떻게 원자단위로 자성을 정렬하죠? -> 물리학자들이 보면 까무러칠 거 같은데?

같은 종이어도 남반구에 있는 애랑 북반구에 있는 애랑 행동이 거울상이래요. 

내가 땅속 적당한 깊이에 있는지 나침반으로 확인한다고 한다?

### electron을 호흡하는 박테리아?


### SDS page



### Clarity 기법

세포가 불투명한 이유는 지질때문()이게 산란 일으킴
세포 전체를 하이드로젤로 고정시키고, 지질만 씻어 없애버린다. 
이때 SDS page를 이용해 지질을 제거한다. 


### iontophoresis

약이나 화장품을 피부에 효과적으로 전달하고 싶을 때


### electro spray ionization MS


### 실험에서 전기장을 쓰고 싶다면

시료는 전하를 띄어야 한다. 
Buffer 전해질이 필요하다. 
전기장의 크기는 분자의 성질과 매질의 성질에 따라 결정. 

### 이건 꼭 알아라!!!
전하에 의해 받는 전기력과 마찰력이 평형을 이룸. 
이때 속도를 이용해서, 그리고 마찰계수에 의해, 전하량에 의해, 입자의 크기를 알 수 있다.  
다만 매질의 점성을 잘 알아야 한다. 

DLS같은 걸로 확산 계수를 측정한다면 좋겠네?

SDS만 이용하면 적어도 크기의 상대값을 알 수 있다. 


### electrophoretic mibility

$U = \frac{v}{E} = \frac{qE}{fE} = \frac{q}{f}$

$\frac{U_i}{U_s} = \frac{d_i}{d_s}$

d는 이동 거리

U에 로그를 씌우면 선형적이다. 

# 유교수님 2차 시험

## 통계 역학
바이오에서 가장 많이 쓰임
생명에는 입자가 많으니까. 
슈뢰더 thermal physics
라이프 Fundamentals of thermal and thermal physics
패트리아

### 따로 정리한 학습 노트들
전부다 템플릿에 맞춰 수정해야 함
[[microcanonical ensemble의 entropy]]
[[여러 시스템의 미시 상태 수 예제]]
[[이상 기체의 미시 상태 수]]
[[canonical ensemble에서 Boltzman factor]]
[[partiton function in canonical ensemble]]

## 프로틴 시뮬레이션과 몬테카를로 시뮬레이션

메트로폴리스랑 detailed balance를 잘 알아야 하지요호!

왜 컴퓨터 시뮬레이션으로 연구해야하는가?
실험으로 찍지 못 하는 구조가 있기 때문. 실시간 움직임을 볼 수 없다. 
반도체는 시뮬레이션하면 실험하고 90%일치한다. 
단백질은? 20%이다. 
왜 바이오는 실험과 일치하는 시뮬레이션을 만드는게 힘든가. 

### 몬테카를로 시뮬레이션: 컴퓨터에게 시키는 확률적 반복 작업

몬테카를로가 뭘까. 그냥 확률 시행을 일일이 진행하는 게 몬테카를로다. 확률 시행을 여러번 하여 결과가 어떻게 나오는지 한번 보자. 

![[Pasted image 20251102160732.png]]
고전적인 예시) 원판에 다트 던져서 원주율 알아내기
적분 못 하는 값도 구하는 몬테카를로 
랜덤 위치에 점을 던져서 적분하고자 하는 영역 안에 있는지 비율을 알아내면 끝이라고!

### Markov state model
[[Markov Property]]  -> 아직 노트 안 만들었다
나에게 과거는 없어. 
오로지 현재 상태를 통해 다음 어떤 상태로 갈지가 결정. 
지금 상태가 A일 때, 다음으로 B로 전활될 확률이 정해진 시스템. 
이 확률들을 matrix 형태로 적을 수 있겠지?
### Markov State Model

[[Markov Property]]를 따르는 시스템.
나에게 과거는 없어. 오로지 현재 상태를 통해 다음 어떤 상태로 갈지가 결정된다.

지금 상태가 A일 때, 다음으로 B로 전환될 확률이 정해진 시스템.
이 확률들을 matrix 형태로 적을 수 있다.

### Transition Probability Matrix

![[Pasted image 20251102161217.png]]
![[Pasted image 20251102162146.png]]
![[Pasted image 20251102162156.png]]

만약 상태를 **행벡터**로 나타낸다면 (i번째 요소는 현재 i번째 상태에 있을 확률): 

- transition probability matrix에서 
- **m번째 행**은 '현재' 상태가 무엇인지 
- **n번째 열**은 '다음' 상태가 무엇인지를 나타낸다 
- 즉 $M_{mn}$은 m이라는 현재 상태에서 n이라는 미래 상태로 전환될 확률을 나타낸다. 

- **따라서 transition probability matrix의 각 행의 합이 모두 1이다.** (현재 상태 m에서 출발하면, 어딘가로는 반드시 가야 하므로) 상태 벡터를 $\vec{s}$ (행벡터)라고 하면: $$\vec{s}_{t+1} = \vec{s}_t \cdot M$$ 이렇게 곱해서 다음 시간의 상태 분포를 얻는다.

[[detailed balance]]
### Detailed balance를 따르는 transition probability에는 뭐가 있지?
#### ==Glauber dynamics==
이름 안 외워진다. Glauber!! Glauber!!!

두 상태의 전환이 일어날 확률은 $\frac{1}{1+ e^{\Delta E / kT}}$, $\Delta E = E_B - E_A$

그러니까, 현상태 A이고 이동할까 말까 고민하는 후보 상태가 B라면, 
**==둘의 Boltzman factor 중 B가 우세한 비율을 계산한다.==** 
응! 지금 상태 말고! 변화할 상태가 우세한 정도를 보는 거다. 
B의 Boltzman factor를 A와 B의 Boltzman factor의 합으로 나눈다. 

$$P(A \rightarrow B) = \frac{exp(-\beta E_B)}{exp(-\beta E_A)+ exp(-\beta E_B)}= \frac{1}{exp(\beta(E_B -E_A))+1} = \frac{1}{e^{\Delta E / kT}+1}$$

이게 왜 detailed balance를 따르는지는 금방 알 수 있다. 

#### Matropolis dynamics

에너지가 높은 상태에서 낮은 상태로 전환할 확률은 1이다. (에너지가 낮아지는 경우는 묻고따지지도 않고 그냥 전환)
에너지가 낮은 상태에서 높은 에너지로 전환할 확률은 $e^{-\Delta E / kT}$ 이다 . 

즉 정리하면, 

$$P(A \rightarrow B) = min(1, exp(-\beta \Delta E))$$
에너지가 낮->높으로 가는 건 $\Delta E$가 양수, $exp(-\beta \Delta E)$가 1보다 작다. 

이렇게 시뮬레이션하다보면 볼츠만 분포에 따라 평형상태가 된다. 
왜냐고?

1. $E_A > E_B$인 경우, $P(A \rightarrow B) = 1$, $P(B \rightarrow A) = exp(-\beta(E_A - E_B))$

2. 그 반대인 경우

에서 증명해봐라. 간단하다!

### 단백질 시뮬레이션하기

단백질 분자속 원자만 2천개.물분자 2만개. 어떻게 시뮬레이션해.

물 없애자! 곁사슬 없애자!  아미노산산을 하나의 비드로 보자! 3차원 말고 격자를 쓰자!

몬테카를로 시뮬레이션 (메트로폴리스......0...............................)

잔기를 랜덤하게 하나 고른다. 플립하면 어떤 에너지가 될지 계산한다. 에너지에 따라 플립할지 말지 결정한다. 
![[Pasted image 20251102185920.png]]

가장 간단하게는 single residue를 two-state system으로 보는 것이다. 
flip할 것인가, 말 것인가, 둘 중 하나로. 이걸 몬테카를로로 업데이트해 간다. 

#### lattice model
신기하다. 

![[Pasted image 20251102190844.png]]
세 가지 전환 방법이 있다. 

#### Molecular dynamics simulation


## 전기

물리과에서 배우는 전자기학(미분방정식의 특수함수)과 생명에서 쓰는 전자기학의 간극. 
생명에서는 회로를 더 많이 쓴다. 

내가 지금 계산 뇌 강의에 왔나요?

gene regulation도 서킷인가?
전사량과 단백질 발현 양의 상관관계는 그리 높지 않다. (70% 정도)


측정 장비에서 전자기역학?


### RC, LC, RCL 회로
빵판.
V= IR
Q = CV (이게 C의 정의다.)
V = L dI/dt 인덕턴스틑 전루 변화량에 의해 전압을 유도한다. 솔레노이드 전자기 유도. 전류의 급격한 변화를 막는다. 
![[Pasted image 20251027131504.png]]

저항과 캐퍼시터의 합성

#### RC 회로

![[Pasted image 20251027131552.png]]
캐페시터의 충전 전하의 시간 변화가 곧 전류이다, 
미방을 풀면 전압이 지수적으로 변화한다는 것을 알 수 있다. 

#### LR 회로

![[Pasted image 20251027131753.png]]

#### LC 회로

![[Pasted image 20251027131809.png]]

#### RLC 회로

damped harmonic oscillator

![[Pasted image 20251027131844.png]]
![[Pasted image 20251027131855.png]]

#### RLC 회로를 언제 쓰는가?

주파수 성분을 거르고 증폭하기 위함. 공명진동수



### 키르히호프 규칙

한 점에서 전류 in out은 0

한번 회전하면 전압이 0

### 맥스웰 방정식 -> 파방

진공(전하 없음) 상태에서 맥방 풀면 파방 나온다 -> 이 과정 외우기?

### nerve conduction

오히려 랑비에 결정에서 신호가 증폭된다?

나트륨 펌프가 있기 때문

![[Pasted image 20251027135640.png]]
data fitting이 운 좋게 잘 된 예
n h m
n은 K꺼, 
m과 가 나트륨꺼. 
g는 conductivity
u는 막전위

채널이 딱 4개 영역으로 이루어졌기에 망정이지. 

각 term의 의미가 뭔가?
m은 Na channel 활성화 게이트, h는 Na channel 비활성화 게이트, 닫히게 만든다. 
n은 K channel 활성화 게이트

회로도 그리기. 
![[Pasted image 20251027140659.png]]

### HH model

이온 채널 개패를 가변 저항으로. 

회로 그림이랑 각 parameter 의미 알아두기
![[Pasted image 20251027140801.png]]

평형 전위 음수 양수 중요?