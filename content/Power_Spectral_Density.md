---
title: "Power Spectral Density"
date: "2025-09-17"
subject: mathematics
tags:
  - study
  - concept  
  - signal_analysis
  - fourier_analysis
  - stochastic_processes
class: study
---

# Power Spectral Density

## Overview

Power Spectral Density (PSD)는 시간에 따라 변하는 신호가 어떤 주파수 성분들로 이루어져 있는지, 그리고 각 주파수 성분이 얼마나 강한지를 나타내는 함수이다. 신호 분석과 확률 과정 연구에서 핵심적인 개념이며, 특히 노이즈 분석과 시스템의 동적 특성 파악에 중요하다.

## Key Points

### 수학적 정의

시간 신호 $x(t)$에 대한 Power Spectral Density $S(f)$는:

$$S(f) = \lim_{T \to \infty} \frac{1}{T} |X_T(f)|^2 \tag{1}$$

여기서 $X_T(f)$는 유한 시간 구간에서의 푸리에 변환:

$$X_T(f) = \int_{-T/2}^{T/2} x(t) e^{-2\pi i f t} dt \tag{2}$$

### 물리적 의미

| 기호 | 의미 |
|------|------|
| $S(f)$ | 주파수 $f$에서의 파워 밀도 |
| $f$ | 주파수 (Hz) |
| $T$ | 관측 시간 |
| $X_T(f)$ | 푸리에 변환 |

- **높은 $S(f)$ 값**: 해당 주파수 성분이 강함
- **낮은 주파수에서 높은 값**: 긴 시간 규모의 상관관계 존재
- **평평한 스펙트럼**: 모든 주파수 성분이 균등 (White noise)

### 실제 계산 방법

#### 1. FFT 기반 방법
```
1. 신호를 일정 간격으로 샘플링: x[0], x[1], ..., x[N-1]
2. Fast Fourier Transform (FFT) 적용
3. |FFT(x)|² 계산  
4. 샘플링 주파수와 데이터 길이로 정규화
```

#### 2. Welch 방법 (추천)
```
1. 긴 신호를 겹치는 구간들로 분할
2. 각 구간에 windowing function 적용 (Hanning, Hamming 등)
3. 각 구간의 파워 스펙트럼 계산
4. 모든 구간에 대해 평균 → 분산 감소, 신뢰성 향상
```

### 주요 노이즈 유형들

**White Noise**: $S(f) = \text{상수}$
- 모든 주파수에서 동일한 파워
- 완전한 무작위성, 메모리 없음

**Pink Noise (1/f noise)**: $S(f) \propto f^{-1}$  
- 낮은 주파수가 높은 주파수보다 강함
- 자연계에서 광범위하게 관찰
- 장기간 상관관계 존재

**Brown Noise**: $S(f) \propto f^{-2}$
- 1/f 노이즈보다 더 강한 저주파 성분
- 적분된 White noise의 특성

## Questions & Insights

- 왜 자연계에서 1/f 노이즈가 이렇게 흔하게 나타날까?
- PSD와 autocorrelation function 사이의 관계는? (Wiener-Khintchine 정리)
- 유한한 데이터에서 PSD를 추정할 때의 한계와 오차는?
- 비선형 시스템에서는 PSD만으로 충분한 정보를 얻을 수 있을까?

## Related Concepts

- [[Fast_Fourier_Transform]] - PSD 계산의 핵심 도구
- [[Brownian Motion Properties]] - 확률 과정의 spectral 특성
- [[White Noise and Brownian Motion Relationship]] - 노이즈 유형간 관계
- [[Journal reading - Self-Organized Criticality_ An Explanation of 1_f Noise]] - 1/f 노이즈의 물리적 기원

## References

- Bak, P., Tang, C., & Wiesenfeld, K. (1987). Self-organized criticality: An explanation of 1/f noise. Physical Review Letters, 59(4), 381.
- Welch, P. (1967). The use of fast Fourier transform for the estimation of power spectra. IEEE Transactions on Audio and Electroacoustics, 15(2), 70-73.
- Press, W. H., et al. (2007). Numerical Recipes: The Art of Scientific Computing. Cambridge University Press.

## Notes from Claude

Power Spectral Density는 단순히 수학적 도구가 아니라 물리 현상을 이해하는 창문이다. 

**핵심 통찰**: 
- 시간 도메인에서 복잡해 보이는 신호도 주파수 도메인에서는 명확한 구조를 드러낼 수 있다
- 1/f 특성은 시스템이 모든 시간 규모에서 동일한 상대적 중요도를 가진다는 의미 (scale invariance)
- 실제 측정에서는 항상 windowing과 averaging이 필요하며, 이는 frequency resolution과 variance 사이의 trade-off를 수반한다

**실용적 고려사항**:
- Spectral leakage를 줄이기 위한 적절한 window function 선택이 중요
- 샘플링 정리(Nyquist theorem)에 따른 aliasing 주의
- 긴 시간 기록일수록 낮은 주파수까지 분석 가능하지만 computational cost 증가
