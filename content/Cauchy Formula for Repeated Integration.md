---
title:
  "{ title }": "Cauchy Formula for Repeated Integration"
date: "2026-07-21"
subject: mathematics
tags:
  - study
  - concept
  - question
class: study
---

# Cauchy Formula for Repeated Integration

## Overview

$f$가 실수 전체에서 continuous function일 때, base-point $a$를 기준으로 한 $f$의 $n$th repeated integral은 원래 $n$중 적분으로 정의되지만, 단일 적분(single integration)으로 표현할 수 있다.

## Key Points

- $n$th repeated integral의 정의 (base-point $a$):

$$
f^{(-n)}(x) = \int_a^x \int_a^{\sigma_1} \cdots \int_a^{\sigma_{n-1}} f(\sigma_n) \, d\sigma_n \cdots d\sigma_2 \, d\sigma_1
\tag{1}
$$

- 위 $n$중 적분은 아래와 같이 단일 적분으로 압축된다 (Cauchy formula for repeated integration):

$$
f^{(-n)}(x) = \frac{1}{(n-1)!} \int_a^x (x-t)^{n-1} f(t) \, dt
\tag{2}
$$

- $(n-1)!$로 나누어지는 factorial 항과 $(x-t)^{n-1}$ kernel이 핵심 구조.

## Questions & Insights

-

## Related Concepts

-

## References

- 업로드된 스크린샷 (Cauchy formula for repeated integration 정의 및 공식)

## Notes from Claude

스크린샷에는 정의(식 1)와 그 정의가 단일 적분(식 2)으로 압축되는 결과만 제시되어 있어, 증명 과정(예: 수학적 귀납법을 이용한 유도)은 포함하지 않았습니다. 필요하시면 유도 과정도 정리해드릴 수 있습니다.
