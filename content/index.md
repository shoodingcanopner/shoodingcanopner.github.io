---
title: TBIO wiki
description: POSTECH TBIO 연구실 위키 — 연구실 운영 포털.
---

<!--
  이 페이지는 마크다운이 아니라 HTML 로 되어 있습니다. 고칠 때 규칙이 하나 있습니다.
  ★ HTML 블록 안에 빈 줄을 넣지 마세요.
  마크다운은 빈 줄을 만나면 HTML 블록이 끝났다고 판단하고, 그 다음에 오는
  들여쓴 줄을 코드 블록으로 바꿔 버립니다. 그러면 SVG 가 통째로 깨집니다.
  줄을 띄우고 싶으면 아래 블록들처럼 <div> 단위로 나누세요.
  스타일은 전부 quartz/styles/custom.scss 의 "12. 홈(허브) 화면" 절에 있습니다.
-->

<div class="hub-hero">
  <svg class="hub-hero-art" viewBox="0 0 420 170" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="hubGrid" width="14" height="14" patternUnits="userSpaceOnUse">
        <path d="M14 0H0V14" fill="none" stroke="currentColor" stroke-width="0.5" />
      </pattern>
      <linearGradient id="hubFade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="white" stop-opacity="0" />
        <stop offset="45%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="hubMask">
        <rect width="420" height="170" fill="url(#hubFade)" />
      </mask>
    </defs>
    <g mask="url(#hubMask)">
      <rect width="420" height="170" fill="url(#hubGrid)" class="hub-hero-grid" />
      <polyline class="hub-hero-walk" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" pathLength="1" points="14,126 28,112 28,98 42,98 42,84 56,84 56,98 70,98 70,70 84,70 84,84 98,84 98,56 112,56 112,70 126,70 126,42 140,42 140,56 154,56 154,84 168,84 168,70 182,70 182,42 196,42 196,28 210,28 210,56 224,56 224,42 238,42 238,70 252,70 252,56 266,56 266,84 280,84 280,70 294,70 294,98 308,98 308,84 322,84 322,112 336,112 336,98 350,98 350,126 364,126 364,112 378,112 378,140 392,140" />
      <circle class="hub-hero-dot" cx="392" cy="140" r="3.2" fill="currentColor" />
    </g>
  </svg>
  <div class="hub-hero-text">
    <p class="hub-eyebrow">POSTECH</p>
    <h1 class="hub-title">TBIO wiki</h1>
    <!-- ↓ 연구실 한 줄 소개로 바꾸세요. 지금 문구는 랩에 대해 아무것도 단정하지 않는 안전한 기본값입니다. -->
    <p class="hub-sub">필요한 사이트 주소를 모두 모았습니다. 많은 이용 부탁드립니다.</p>
  </div>
</div>

<h2 class="hub-h">연구실 서비스</h2>

<div class="hub-grid hub-grid-3">
  <a class="hub-card" href="https://tbionas.postech.ac.kr:51000/tbio/channels/town-square">
    <svg class="hub-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-4.2-.9L3 21l1.4-4.1A8.1 8.1 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 9 8.4z" />
    </svg>
    <span class="hub-card-t">메신저</span>
    <span class="hub-card-d">Mattermost · town-square</span>
  </a>
  <a class="hub-card" href="https://kawasironitori.github.io/Bookkeeping/">
    <svg class="hub-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 3v4a3 3 0 0 0 6 0V3" />
      <path d="M7 3v4" />
      <path d="M7 10v11" />
      <ellipse cx="16.5" cy="6.8" rx="2.7" ry="3.8" />
      <path d="M16.5 10.6V21" />
    </svg>
    <span class="hub-card-t">장부 & 식당 리뷰</span>
    <span class="hub-card-d">랩비 보충은 하셨나요?</span>
  </a>
  <a class="hub-card" href="https://tbionas.postech.ac.kr:2070/?launchApp=SYNO.SDS.Drive.Application#file_id=839033430434947590">
    <svg class="hub-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6.5 19a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.5-1.6A4.25 4.25 0 0 1 18 19z" />
      <path d="M12 12v5M9.5 14.5 12 12l2.5 2.5" />
    </svg>
    <span class="hub-card-t">Drive</span>
    <span class="hub-card-d">Synology · 공용 자료</span>
  </a>
  <a class="hub-card" href="https://docs.google.com/spreadsheets/d/1MpXcWNUwNL6ByipLADcPh876buV8SGTXJk1uF2vPmi4/edit?gid=1047490378#gid=1047490378">
    <svg class="hub-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M9.5 9.5V20M3.5 15h17" />
    </svg>
    <span class="hub-card-t">랩미팅</span>
    <span class="hub-card-d">발표 주제 시트</span>
  </a>
  <a class="hub-card" href="https://docs.google.com/spreadsheets/d/1OneBk9quKs2LbMWHt5ImVsiqVWEvn03E8EiLgiWmtGQ/edit?gid=1626590182#gid=1626590182">
    <svg class="hub-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M9.5 9.5V20M3.5 15h17" />
    </svg>
    <span class="hub-card-t">저널클럽</span>
    <span class="hub-card-d">논문 주제 시트</span>
  </a>
</div>

<h2 class="hub-h">이번 주 일정</h2>

<!--
  연구실 Google 캘린더입니다. 이 달력은 "비공개"로 두었습니다.
  (2026-08-01 확인: 로그인 없이 접근하면 Google 이 401 을 돌려줍니다)

  ※ 그래서 이 칸은 누구에게나 보이지 않습니다.
    달력을 공유받은 Google 계정으로 "로그인한" 사람에게만 일정이 보이고,
    그 외에는 프레임 안에 오류 화면이 뜹니다. 이건 고장이 아니라 의도한 동작입니다.

    한 가지 알려진 약점이 있습니다. iframe 안의 calendar.google.com 은
    제3자 컨텍스트라, 브라우저가 서드파티 쿠키를 막으면 로그인 세션이
    전달되지 않아 권한이 있어도 오류가 납니다(Safari 는 기본 차단).
    멤버들이 "권한이 있는데 안 보인다"고 하면 대부분 이 문제입니다.
    그 경우 Google 로그인 버튼 + Calendar API 방식으로 바꿔야 합니다.

  달력을 바꾸려면 아래 src= 뒤부터 첫 & 앞까지를 교체하세요.
    Google 캘린더 → 해당 달력 → 설정 및 공유 → "캘린더 통합" → 캘린더 ID
    ID 안의 @ 는 URL 에서 %40 으로, # 은 %23 으로 써야 합니다.

  바꿀 만한 것들:
    mode=WEEK   → 주간 격자. 좁은 화면에서는 답답할 수 있습니다.
    mode=AGENDA → 다가오는 일정 목록. 좁은 칸에서 더 잘 읽힙니다.
    wkst=2      → 월요일 시작 (1 이면 일요일 시작)
    ctz         → 표시 시간대
-->

<p class="hub-cal-note">
  <svg class="hub-cal-note-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 7.6v.9" />
  </svg>
  <span>일정은 구글 계정에 로그인된 창에서만 보입니다.</span>
</p>

<div class="hub-cal">
  <iframe class="hub-cal-frame" title="연구실 일정" loading="lazy" src="https://calendar.google.com/calendar/embed?src=2d46e2568fd4c3c846ed8cc6136d0e0362b5f3783e50b287f4521e3c40b099d1%40group.calendar.google.com&ctz=Asia%2FSeoul&mode=WEEK&wkst=2&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"></iframe>
</div>

<h2 class="hub-h">주목할 노트들</h2>

<div class="hub-grid hub-grid-2">
  <div class="hub-topic">
    <h3 class="hub-topic-t">행정 관련 노트들</h3>
    <p class="hub-topic-d">심플렉틱 기하로 다시 쓴 해밀토니안 역학. 강의 필기와 풀이 노트.</p>
    <ul class="hub-list">
      <li><a href="first/analytical-mechanics">Analytical Mechanics — 전체 목차</a></li>
      <li><a href="am-lecture-note---symplectic-form-and-hamiltonian-vector-field">심플렉틱 형식과 해밀토니안 벡터장</a></li>
      <li><a href="am-lecture-note---noether-theorem">뇌터 정리</a></li>
      <li><a href="am-lecture-note---poisson-bracket-and-darboux-theorem">푸아송 괄호와 다르부 정리</a></li>
    </ul>
  </div>
  <div class="hub-topic">
    <h3 class="hub-topic-t">여기는 뭘로 채우지</h3>
    <p class="hub-topic-d">브라운 운동과 확산, 그리고 그 수학적 뼈대.</p>
    <ul class="hub-list">
      <li><a href="brownian-motion-properties">브라운 운동의 성질</a></li>
      <li><a href="first/bachelier's-equation-(convolution-theorem)">바슐리에 방정식</a></li>
    </ul>
  </div>
</div>

<p class="hub-foot">왼쪽 탐색기에서 전체 문서를 볼 수 있고, 오른쪽 그래프는 노트 사이의 연결을 보여줍니다.</p>
