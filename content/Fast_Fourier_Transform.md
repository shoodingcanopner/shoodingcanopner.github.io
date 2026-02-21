---
title: lecture8_FFT
date: 2025-05-09
subject:
  - physics
  - mathmetics
tags:
  - study
  - lecture_note
  - computational_physics
class: study_lecture
---

# PHYS406 Computational Physics - Fast Fourier Transform (Part 1)
*Aaram J. Kim*

## 1 Fast Fourier Transform

이전 섹션에서 우리는 PDE의 푸리에 해석을 접했습니다. 물리학과 공학에서 푸리에 해석은 매우 유용합니다. 이 섹션에서는 수치 알고리즘을 사용하여 푸리에 변환을 효율적으로 수행하는 방법을 다룹니다.

### 1.1 Fourier series

주기 함수 $f(x)$가 범위 $0 \leq x < L$에 대해 정의되어 있다고 가정해 봅시다. 이러한 주기 함수는 사인 함수와 코사인 함수의 선형 조합으로 표현할 수 있습니다:

$$
\sin\left(\frac{2\pi kx}{L}\right) \text{ and } \cos\left(\frac{2\pi kx}{L}\right) \tag{1}$$

여기서 $k$는 정수입니다. 특히, 짝수 부분:

$$\begin{equation}
f_{even}(x) = \sum_{k=0}^{\infty} \alpha_k \cos\left(\frac{2\pi kx}{L}\right)
\end{equation} \tag{2}$$

그리고 홀수 부분:

$$f_{odd}(x) = \sum_{k=1}^{\infty} \beta_k \sin\left(\frac{2\pi kx}{L}\right) \tag{3}$$

따라서, 일반적인 주기 함수는:

$$f(x) = \sum_{k=0}^{\infty} \alpha_k \cos\left(\frac{2\pi kx}{L}\right) + \sum_{k=1}^{\infty} \beta_k \sin\left(\frac{2\pi kx}{L}\right) \tag{4}$$

기저 함수를 다음과 같이 지수 함수로 변환할 수 있습니다:

$$f(x) = \frac{1}{2}\sum_{k=0}^{\infty} \alpha_k \left[ \exp\left(-i\frac{2\pi kx}{L}\right) + \exp\left(i\frac{2\pi kx}{L}\right) \right] + \frac{i}{2}\sum_{k=1}^{\infty} \beta_k \left[ \exp\left(-i\frac{2\pi kx}{L}\right) - \exp\left(i\frac{2\pi kx}{L}\right) \right]$$

이는 다음과 같은 푸리에 급수의 간단한 형태로 이어집니다:

$$f(x) = \sum_{k=-\infty}^{\infty} \gamma_k \exp\left(i\frac{2\pi kx}{L}\right) \tag{6}$$

여기서:

$$\gamma_k = 
\begin{cases}
\frac{1}{2}(\alpha_{-k} + i\beta_{-k}) & (k < 0) \\
\alpha_0 & (k = 0) \\
\frac{1}{2}(\alpha_k - i\beta_k) & (k > 0)
\end{cases}$$
단순하게, 지수부에 마이너스 부호가 있는 것과 없는 항으로 나누었을 뿐이다. 


푸리에 계수 $\gamma_k$를 어떻게 구할 수 있을까요? $e^{i\frac{2\pi kx}{L}}$과 $e^{i\frac{2\pi k'x}{L}}$ 사이의 직교성 관계를 사용하면:

$$\int_0^L dx \exp\left(i\frac{2\pi(k' - k)x}{L}\right) = L\delta_{kk'}$$

먼저 이 직교성 조건을 확인해 봅시다. $k \neq k'$인 경우:

$$\int_0^L dx \exp\left(i\frac{2\pi(k' - k)x}{L}\right) = \frac{L}{2\pi i(k' - k)}\left[\exp\left(i\frac{2\pi(k' - k)x}{L}\right)\right]_0^L = \frac{L}{2\pi i(k' - k)}[e^{i2\pi(k'-k)} - 1] = 0$$

$k' = k$인 경우:

$$\int_0^L dx \exp\left(i\frac{2\pi(k' - k)x}{L}\right) = L$$

이제 $e^{-i\frac{2\pi kx}{L}}$로 적분하여 특정 $k$ 성분을 추출할 수 있습니다:

$$\int_0^L dx f(x) \exp\left(-i\frac{2\pi kx}{L}\right) = \sum_{k'=-\infty}^{\infty} \gamma_{k'} \int_0^L dx \exp\left(-i\frac{2\pi(k - k')x}{L}\right) = L\gamma_k$$

따라서, 우리의 푸리에 성분은:

$$\gamma_k = \frac{1}{L} \int_0^L dx f(x) \exp\left(-i\frac{2\pi kx}{L}\right)$$

여기까지는 모든 것이 정확합니다. 이것은 일반적인 주기 함수의 푸리에 표현일 뿐입니다.



## 1.2 Discrete Fourier Transform

수치 데이터 $f(x_n)$를 다루고 있으므로, 적분을 정확하게 수행할 수 없습니다. 대신, 사다리꼴 규칙(Trapezoidal rule)을 적용할 것입니다:

$$\gamma_k = \frac{1}{L}\frac{L}{N}\left[\frac{1}{2}f(0) + \frac{1}{2}f(L) + \sum_{n=1}^{N-1} f(x_n) \exp\left(-i\frac{2\pi kx_n}{L}\right)\right]$$

여기서 $x_n = n\frac{L}{N}$입니다.

주기 조건 $f(0) = f(L)$에 의해:

$$\gamma_k = \frac{1}{N}\sum_{n=0}^{N-1} f(x_n) \exp\left(-i\frac{2\pi kn}{N}\right)$$

$N$ 인자를 $\gamma_k$에 흡수시키면, 이산 푸리에 변환(DFT)의 관례적 형태에 도달합니다:

$$c_k = \sum_{n=0}^{N-1} y_n \exp\left(-i\frac{2\pi kn}{N}\right)$$

여기서 간단한 표기법 $y_n = f(x_n)$이 도입되었습니다.

흥미롭게도, 사다리꼴 근사에도 불구하고, 절단 오차 없이 푸리에 변환을 앞뒤로 수행할 수 있습니다. (절단 오차와 반올림 오차를 구별하는 방법을 알고 있죠!)

(가정된 근사) 푸리에 계수 $c_k$를 사용하여, $y_n$을 다시 재구성해 봅시다. $c_k$를 포함하는 다음 합을 고려해 봅시다:

$$\sum_{k=0}^{N-1} c_k \exp\left(i\frac{2\pi kn}{N}\right) = \sum_{k=0}^{N-1} \sum_{n'=0}^{N-1} y_{n'} \exp\left(-i\frac{2\pi kn'}{N}\right) \exp\left(i\frac{2\pi kn}{N}\right)$$

$$= \sum_{n'=0}^{N-1} y_{n'} \sum_{k=0}^{N-1} \exp\left(i\frac{2\pi k(n - n')}{N}\right)$$

두 번째 합은 다음과 같이 계산할 수 있습니다:

$$\sum_{k=0}^{N-1} e^{i2\pi kn/N} = \frac{1 - e^{i2\pi n}}{1 - e^{i2\pi n/N}}$$

쉽게 알 수 있듯이: -> *나는 그닥 쉽게 알 수 있지 않았다! n=0인 경우는 분자 분모 모두 0이 되니까, 극한 값이 분모 분자를 미분한 뒤의 극한값과 같다는 로피탈 정리를 이용하자*

$$\sum_{k=0}^{N-1} e^{i2\pi kn/N} = 
\begin{cases}
N & (n = 0) \\
0 & (\text{그 외})
\end{cases}$$

따라서, 원래의 이산 데이터를 재구성할 수 있습니다:

$$y_n = \frac{1}{N}\sum_{k=0}^{N-1} c_k \exp\left(i\frac{2\pi kn}{N}\right)$$

이것을 역 이산 푸리에 변환(inverse DFT)이라고 합니다.

## 1.3 Cosine and sine transform

함수가 짝함수인 경우, 코사인 변환이라고 불리는 다른 공식을 사용할 수 있습니다. 그리고 이는 전체 FFT에 비해 비용이 적게 듭니다. 함수가 짝함수가 아닌 경우, 원래 범위 옆에 대칭 반사된 부분을 추가하여 짝함수로 만들 수 있습니다. 식 (14)에서 시작하면:

$$c_k = \sum_{n=0}^{N-1} y_n \exp\left(-i\frac{2\pi kn}{N}\right)$$

$$= \sum_{n=0}^{N/2} y_n \exp\left(-i\frac{2\pi kn}{N}\right) + \sum_{n=N/2+1}^{N-1} y_n \exp\left(-i\frac{2\pi kn}{N}\right)$$

$$= \sum_{n=0}^{N/2} y_n \exp\left(-i\frac{2\pi kn}{N}\right) + \sum_{n=N/2+1}^{N-1} y_{N-n} \exp\left(i\frac{2\pi k(N-n)}{N}\right)$$

$$= \sum_{n=0}^{N/2} y_n \exp\left(-i\frac{2\pi kn}{N}\right) + \sum_{n=1}^{N/2-1} y_n \exp\left(i\frac{2\pi kn}{N}\right)$$

$$= y_0 + y_{N/2} \cos(\pi k) + 2\sum_{n=1}^{N/2-1} y_n \cos\left(\frac{2\pi kn}{N}\right)$$

세 번째 행에서는 $y_n = y_{N-n}$이라는 사실과 $e^{2i\pi k} = 1$을 사용했습니다. 네 번째 행에서는 변수가 바뀌었습니다: $N-n \rightarrow n$. 이것이 이산 코사인 변환의 공식입니다. $y_n$이 실수일 때 $c_k$는 순수하게 실수라는 점에 유의하세요. 따라서:

$$c_{N-k} = \sum_{n=0}^{N-1} y_n \exp\left(-i\frac{2\pi(N-k)n}{N}\right) = \sum_{n=0}^{N-1} y_n \exp\left(i\frac{2\pi kn}{N}\right) = c_k^*$$

비슷한 방식으로, 위의 관계를 사용하여 역 이산 코사인 변환을 얻을 수 있습니다:

$$y_n = \frac{1}{N}\sum_{k=0}^{N-1} c_k \exp\left(i\frac{2\pi kn}{N}\right)$$

$$= \frac{1}{N}\left[\sum_{k=0}^{N/2} c_k \exp\left(i\frac{2\pi kn}{N}\right) + \sum_{k=N/2+1}^{N-1} c_k \exp\left(i\frac{2\pi kn}{N}\right)\right]$$

$$= \frac{1}{N}\left[\sum_{k=0}^{N/2} c_k \exp\left(i\frac{2\pi kn}{N}\right) + \sum_{k=N/2+1}^{N-1} c_{N-k} \exp\left(-i\frac{2\pi(N-k)n}{N}\right)\right]$$

$$= \frac{1}{N}\left[\sum_{k=0}^{N/2} c_k \exp\left(i\frac{2\pi kn}{N}\right) + \sum_{k=1}^{N/2-1} c_k \exp\left(-i\frac{2\pi kn}{N}\right)\right]$$

$$= \frac{1}{N}\left[c_0 + c_{N/2} \cos\frac{2\pi n(N/2)}{N} + 2\sum_{k=1}^{N/2-1} c_k \cos\frac{2\pi kn}{N}\right]$$

PDE를 풀 때 스펙트럴 방법에서는 홀함수에 대한 유사한 사인 변환이 사용될 것입니다.


## 1.4 Fast Fourier transform

DFT를 직접 수행할 때 계산 비용은 얼마나 될까요?

$$c_k = \sum_{n=0}^{N-1} y_n \exp\left(-i\frac{2\pi kn}{N}\right)$$

주어진 $k$에 대해 $O(N)$ 연산이 필요합니다. 그리고 $N$개의 서로 다른 $k$ 값이 있으므로, 전체적으로 $O(N^2)$ 연산이 필요합니다. 이것은 최선의 방법이 아닙니다. 소위 고속 푸리에 변환(FFT)을 사용하면 $O(N \log N)$ 연산 내에서 DFT를 완료할 수 있습니다. 이는 Carl Friedrich Gauss(1805) 이후로 알려져 있었습니다. FFT로 알려진 가장 성공적인 알고리즘 중 하나는 1965년 J. W. Cooley와 J. W. Tukey에 의해 재발견되었습니다. 그들은 발표 당시 Gauss의 작업을 알지 못했습니다. 그리고 Gauss의 미발표 노트는 그들의 발표 이후에 발견되었습니다.

FFT는 $2^m$ 개의 그리드 포인트에 대해 정의됩니다, $N = 2^m$. 왜 그런지 알게 될 것입니다. $N$개의 샘플 $y_n$ 중에서, 짝수 인덱스 샘플 포인트만 선택해 봅시다: $n = 0, 2, 4, \ldots$. 이러한 부분집합도 DFT를 완벽하게 구성할 수 있습니다. 이는 동일한 샘플 거리를 가진 주기 함수입니다. 단지 샘플 수가 더 적을 뿐입니다, $N/2$. 짝수 샘플의 DFT는 다음과 같이 작성할 수 있습니다:

$$c_k^e = \sum_{r=0}^{N/2-1} y_{2r} \exp\left(-i\frac{2\pi k(2r)}{N}\right) = \sum_{r=0}^{N/2-1} y_{2r} \exp\left(-i\frac{2\pi kr}{N/2}\right)$$

윗첨자는 원래 샘플의 짝수 부분집합을 나타냅니다. 얼마나 많은 $k$ 포인트를 계산해야 할까요? $c_k^e = c_{k+N/2}^e$ 이기 때문에 $k$는 $N-1$이 아니라 $0$부터 $N/2-1$까지만 실행된다는 점이 중요합니다! 따라서, $c_k^e$에 대한 계산 비용은 $N^2/4$이지 $N^2/2$가 아닙니다. 홀수 성분은 어떨까요?

$$\sum_{r=0}^{N/2-1} y_{2r+1} \exp\left(-i\frac{2\pi k(2r+1)}{N}\right) = e^{-2\pi k/N} \sum_{r=0}^{N/2-1} y_{2r+1} \exp\left(-i\frac{2\pi kr}{N/2}\right) = e^{-i2\pi k/N} c_k^o$$

같은 논리가 적용됩니다. 홀수 샘플 DFT를 $N^2/4$ 비용으로 완성할 수 있습니다. 그리고 마지막으로 전체 푸리에 성분은 $N$ 비용으로 $c_k^e$와 $c_k^o$를 조립하여 계산됩니다:

$$c_k = c_k^e + e^{-i2\pi k/N} c_k^o$$

총 계산 비용은 얼마나 될까요? $c_k^e$와 $c_k^o$ 각각에 대해 약 $N^2/4$, 그리고 이 둘을 조립하는 데 마지막 $N$ 연산이 필요합니다. 따라서, 전체 계산 비용은 $N^2/2$이지 $N^2$가 아닙니다! 이러한 계산 이득이 FFT의 핵심 요소입니다.

마법적인 부분은 이러한 계산 이득이 재귀적으로 달성될 수 있다는 것입니다. 원래 $N$ 그리드를 두 개의 $N/2$ 그리드로 분할한 후, 각 $N/2$ 그리드를 다시 두 개의 $N/4$ 그리드로 분할할 수 있으며, 그리드가 1개만 남을 때까지 계속합니다. 단일 그리드 푸리에 변환은 $k$ 의존성 없이 단순한 항등 변환입니다.

$N = 2^3$ 경우를 고려해 봅시다. 그러면 깊이가 3인 세 구조를 구성할 수 있습니다. 그러면 다음과 같은 연산 횟수가 필요합니다: $2 \times 4$, $2^2 \times 2$, $2^3 \times 1$. 각 레벨에서 동일한 연산 수 $2^3 = N$이 수행되었으며, 레벨은 3개뿐입니다. 따라서, 전체 연산 수는 약 $2^3 \times 3$으로, 이는 명확히 $2^6$보다 작습니다.

일반적인 $N$에 대해 이러한 인수를 일반화하면, 개선은 더욱 현저합니다. 각 레벨에서 $k$ 조합의 수는 $N$이고 레벨은 $\log N$개뿐입니다. 따라서, 총 FFT는 $O(N^2)$보다 훨씬 작은 $O(N \log N)$ 계산 비용만 소요됩니다. 자세히 말하면, 데이터를 비트 반전 순서로 정렬하는 것이 더 쉬우며, 이 경우 인접한 샘플로 간단히 작업할 수 있습니다.

조선 순종 시대에 누군가가 FFT를 발명했다는 것은 정말 인상적입니다.

## 1.5 Partial differential equation revisited: spectral method

지금까지 우리는 유한 차분법에 집중해 왔습니다. 이것이 유일한 방법은 아닙니다. 예를 들어, 유한 요소법(유한 차분법과 혼동하지 마세요)이 있으며, 이는 작은 시스템의 해를 더 큰 시스템에 대해 결합합니다. 하지만 이는 매우 복잡하며 이 수업의 범위를 넘어섭니다.

대신 스펙트럴 방법이라고 불리는 또 다른 간단한 PDE 방법을 고려할 것입니다. 이는 이전 장에서 논의된 FFT를 기반으로 합니다. 파동 방정식으로 돌아가 봅시다:

$$\frac{\partial^2 \phi(x,t)}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 \phi(x,t)}{\partial t^2}$$

경계 조건: $\phi = 0$ for $x = 0$ 및 $L$.

그러면 다음과 같은 시험 해를 고려할 수 있습니다:

$$\phi_k(x,t) = \sin\frac{\pi kx}{L}e^{i\omega t}$$

실제 문자열 진폭의 경우 실수 부분만 중요하지만, 복소수도 유지할 수 있습니다.

경계 조건을 만족시키기 위해 $k$는 정수여야 합니다. 그리고 식 (36)은 주파수 속도 관계를 제공합니다:

$$\omega = \frac{\pi vk}{L}$$

파동 방정식은 선형 방정식이므로, 시험 해를 선형 조합하여 일반 해를 구성할 수 있습니다:

$$\phi(x_n, t) = \frac{1}{N}\sum_{k=1}^{N-1} b_k \sin\frac{\pi kn}{N}\exp\left(i\frac{\pi vkt}{L}\right)$$

$\phi(x_n, t)$가 알려진 초기값 문제의 경우, $x_n = nL/N$에서:

$$\phi(x_n, 0) = \frac{1}{N}\sum_{k=1}^{N-1} b_k \sin\frac{\pi kn}{N}$$

여기서, 계수는 일반 복소수입니다, $b_k = \alpha_k + i\eta_k$. 이제 실수부 계수 $\alpha_k$는 다음 조건을 만족해야 합니다:

$$\text{Re}\phi(x_n, 0) = \frac{1}{N}\sum_{k=1}^{N-1} \alpha_k \sin\frac{\pi kn}{N}$$

반면, 허수부는 초기 미분에 의해 결정됩니다:

$$\text{Re}\frac{\partial\phi}{\partial t} = -\left(\frac{\pi v}{L}\right)\frac{1}{N}\sum_{k=1}^{N-1} k\eta_k \sin\frac{\pi kn}{N}$$

이것은 $\text{Re}\phi$와 $\text{Re}\frac{\partial\phi}{\partial t}$의 이산 사인 변환으로, FFT 알고리즘으로 수행할 수 있습니다.

초기 조건에서 FFT를 통해 $\alpha_k$와 $\eta_k$를 얻은 후, 임의의 시간에 대한 $\text{Re}\phi(x_n, t)$를 직접 얻을 수 있습니다. 해당 시간 진화는 다음 표현식으로 작성할 수 있습니다:

$$\text{Re}\phi(x_n, t) = \frac{1}{N}\sum_{k=1}^{N-1}\left[\alpha_k \cos\frac{\pi vkt}{L} - \eta_k \sin\frac{\pi vkt}{L}\right]\sin\frac{\pi kn}{N}$$

이는 단순히 역 사인 변환입니다. 이 방법의 본질적인 이점은 시간 단계가 필요 없다는 것입니다. 목표 시간 지점으로 시간 도약한 다음 역 FFT를 수행할 수 있습니다. 그리고 보너스로 안정성 기준에 대해 걱정할 필요가 없습니다.

사실, 전체 시간 진화를 스윕하려면 FTCS보다 느립니다. FTCS는 매 단계마다 $O(N)$만 필요한 반면, FFT는 $\text{Re}f\phi(x_n, t)$로의 역 FFT 동안 $O(N \log N)$이 필요합니다. 그리고 이는 단순한 경계 조건에서만 작동합니다.