---
title: "Obsidian + Quartz로 나만의 과학 위키 블로그 만들기"
date: "2026-02-22"
tags:
  - blog
  - quartz
  - github-pages
  - obsidian
  - tutorial
---

# Obsidian + Quartz로 나만의 과학 위키 블로그 만들기

Obsidian에서 노트를 쓰면 자동으로 블로그에 올라가는 시스템을 구축했다. 목표는 나만의 과학 위키피디아 — MOCs 폴더의 노트들이 곧 블로그 포스트가 되는 것.

## 왜 Quartz인가?

처음엔 Jekyll + GitHub Pages를 고려했지만, 위키 스타일 블로그에는 Quartz가 훨씬 적합했다.

- Obsidian의 `[[wikilink]]` 문법을 네이티브로 지원
- 백링크, 그래프 뷰 웹 지원
- GitHub Actions 자동 배포 내장

## 전체 구조

```
Obsidian 볼트 (mybrain/MOCs/)
        ↓ 파일 변경 후 push
GitHub 레포 (username.github.io)
        ↓ GitHub Actions 자동 빌드
https://username.github.io
```

---

## Step 1: Quartz 레포 Fork

[github.com/jackyzha0/quartz](https://github.com/jackyzha0/quartz)에서 Fork. 레포 이름을 반드시 `username.github.io`로 설정해야 한다.

---

## Step 2: 로컬 클론 및 초기화

Node.js LTS 버전 설치 후:

```powershell
git clone https://github.com/username/username.github.io.git
cd username.github.io
npm i
npx quartz create
```

`npx quartz create` 실행 시:
- **Empty Quartz** 선택
- 링크 방식은 **Treat links as shortest path** 선택 (Obsidian 기본값과 동일)

---

## Step 3: Obsidian 볼트와 연결 (심볼릭 링크)

PowerShell을 **관리자 권한**으로 열고:

```powershell
# content 폴더 초기화
Remove-Item -Recurse -Force "C:\path\to\username.github.io\content\*"

# 심볼릭 링크 생성 (Junction)
New-Item -ItemType Junction -Path "C:\path\to\username.github.io\content" -Target "C:\path\to\mybrain\MOCs"
```

이렇게 하면 Obsidian에서 MOCs 폴더에 파일을 저장하는 순간 Quartz content에도 자동 반영된다.

> **주의**: Windows에서는 PowerShell을 반드시 관리자 권한으로 실행해야 한다. cmd와 PowerShell을 혼동하지 말 것.

---

## Step 4: GitHub Actions 배포 설정

Quartz 기본 레포에 deploy workflow가 없는 경우 직접 생성해야 한다.

`.github/workflows/deploy.yml`:

```yaml
name: Deploy Quartz site to GitHub Pages

on:
  push:
    branches:
      - v4

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

GitHub 레포 → **Settings** → **Pages** → Source를 **GitHub Actions**로 변경 후 push.

---

## Step 5: 커스터마이징

### quartz.config.ts 주요 설정

```typescript
configuration: {
  pageTitle: "스라소니 머릿속에는",
  locale: "ko-KR",
  baseUrl: "username.github.io",
  theme: {
    fontOrigin: "googleFonts",
    typography: {
      header: "Noto Serif KR",
      body: "Noto Serif KR",
      code: "IBM Plex Mono",
    },
    colors: {
      lightMode: {
        light: "#F5F0E8",       // 베이지 배경
        secondary: "#2E4336",   // 딥그린
        tertiary: "#FFB906",    // 노랑 포인트
      },
    },
  },
},
```

### custom.scss

`quartz/styles/custom.scss` 파일을 생성하면 Quartz가 자동으로 인식한다.

```scss
// 하이퍼링크 딥그린 + 초록 음영
a {
  color: #2E4336 !important;
  text-decoration-color: rgba(46, 67, 54, 0.4) !important;
  transition: background-color 0.2s ease;
  border-radius: 3px;
  &:hover {
    color: #FFB906 !important;
    background-color: rgba(46, 67, 54, 0.1) !important;
  }
}

// 태그 딥그린
.tag {
  background-color: #2E4336 !important;
  color: #F5F0E8 !important;
  &:hover {
    background-color: #FFB906 !important;
    color: #1A1008 !important;
  }
}

// 노트 목록 구분선
.explorer-ul li {
  border-bottom: 1px solid rgba(46, 67, 54, 0.2);
  padding-bottom: 0.4rem;
  margin-bottom: 0.4rem;
}

.explorer-ul li:last-child {
  border-bottom: none;
}
```

> **주의**: `a` 태그에 `padding`을 주면 레이아웃이 깨진다. 절대 추가하지 말 것.

---

## Step 6: LaTeX 수식 렌더링

`quartz.config.ts`에서 KaTeX 대신 MathJax를 사용하면 더 안정적이다:

```typescript
Plugin.Latex({ renderEngine: "mathjax" }),
```

단, `$$수식$$`을 한 줄에 쓰면 inline으로 처리된다. display mode로 렌더링하려면 줄내림이 필요하다:

```
$$
수식
$$
```

---

## Step 7: 노트 업데이트 자동화

`push.bat` 파일을 레포 루트에 만들어두면 더블클릭 한 번으로 배포 가능:

```batch
@echo off
cd /d "C:\path\to\username.github.io"
git add .
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo 변경사항이 없습니다.
) else (
    git commit -m "update: %date% %time%"
    git push
    echo 배포 완료! 2-3분 후 사이트에 반영됩니다.
)
pause
```

---

## 트러블슈팅

### [object Object]로 노트 이름이 표시될 때
frontmatter의 `title` 형식이 잘못된 경우다.

```yaml
# 잘못된 형식
title:
  "노트 제목":

# 올바른 형식
title: "노트 제목"
```

### GitHub Actions가 Jekyll로 빌드될 때
Settings → Pages → Source가 "Deploy from a branch"로 되어있으면 "GitHub Actions"로 변경해야 한다.

### PowerShell 스크립트 실행 오류
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
