<!--
████████████████████████████████████████████████████████████████████
  seungwoo2000 · saas-deploy — K-디지털 트레이닝 포트폴리오 README
████████████████████████████████████████████████████████████████████
-->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4f46e5,50:7c3aed,100:a855f7&height=220&section=header&text=✍️%20WriteFlow&fontSize=58&fontColor=ffffff&fontAlignY=40&desc=AI와%20함께%20더%20빠르게,%20더%20잘%20쓰세요&descAlignY=62&descColor=e9d5ff&animation=fadeIn" alt="header" width="100%"/>

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-배포완료-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

> **아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요.**  
> 문맥을 이해하는 지능형 AI가 당신의 창의성을 극대화합니다.

<br/>

**🌐 라이브 서비스 →** [saas-deploy-ruby.vercel.app](https://saas-deploy-ruby.vercel.app)

</div>

---

## 📋 훈련 과정 정보

| 항목 | 내용 |
|:---|:---|
| 🏫 **훈련기관** | 아시아경제 교육센터 |
| 📚 **훈련과정명** | 융합\_데이터 기반 차세대 디지털 헬스케어 AI 솔루션 5회차 |
| 🏷️ **훈련유형** | K-디지털 트레이닝 |
| 📅 **훈련기간** | 2026-02-03 ~ 2026-07-30 (6개월) |
| 💡 **프로젝트 분류** | 안티그래비티 바이브 코딩 실습 · SaaS 랜딩 페이지 |

---

## 📖 참고 도서 — 실습 기반

<table>
  <tr>
    <td width="120" align="center">
      <a href="https://product.kyobobook.co.kr/detail/S000219023454">
        <img src="https://img.shields.io/badge/📗-골든래빗-brightgreen?style=for-the-badge" alt="book"/>
      </a>
    </td>
    <td>
      <b>요즘 바이브 코딩 안티그래비티 완벽 가이드</b><br/>
      저자: 최지호 (코드팩토리) &nbsp;|&nbsp; 출판사: 골든래빗<br/>
      <br/>
      이 프로젝트는 책의 <b>SaaS 랜딩 페이지 실습 챕터</b>를 따라가며<br/>
      구글 안티그래비티로 바이브 코딩해 직접 구현 · 배포한 결과물입니다.
    </td>
  </tr>
</table>

---

## ✍️ WriteFlow란?

```
"10,000명 이상의 작가와 마케터가 이미 WriteFlow와 함께
 창의적인 콘텐츠를 만들고 있습니다."
```

**WriteFlow**는 AI 기반 글쓰기 어시스턴트 **SaaS 서비스의 랜딩 페이지**입니다.
실제 스타트업 서비스처럼 히어로 섹션, 기능 소개, 요금제, FAQ, CTA까지
SaaS 랜딩 페이지의 전형적인 구조를 Next.js로 직접 구현하고 Vercel에 배포했습니다.

---

## 🗂️ 목차

1. [페이지 구성](#-페이지-구성)
2. [서비스 주요 기능](#-서비스-주요-기능)
3. [요금제 구조](#-요금제-구조)
4. [기술 스택](#-기술-스택)
5. [폴더 구조](#-폴더-구조)
6. [배운 점 · 성장 포인트](#-배운-점--성장-포인트)
7. [실행 방법](#-실행-방법)

---

## 🖼️ 페이지 구성

> 실제 SaaS 서비스의 랜딩 페이지 구조를 그대로 학습하고 구현했습니다.

| 섹션 | 역할 | 핵심 내용 |
|:---:|:---|:---|
| 🦸 **Hero** | 첫인상 · 핵심 메시지 전달 | 헤드라인, 서브카피, CTA 버튼, 목업 이미지 |
| ⚡ **Features** | 제품 기능 소개 | 6가지 AI 기능 카드 그리드 레이아웃 |
| 💳 **Pricing** | 요금제 비교 | Free · Pro · Enterprise 3티어 플랜 |
| ❓ **FAQ** | 신뢰도 구축 | 아코디언 형식 자주 묻는 질문 5개 |
| 🚀 **CTA** | 전환 유도 | 무료 체험 시작 버튼, 소셜 프루프 수치 |
| 🔗 **Footer** | 링크 · 저작권 | Privacy Policy, Terms, SNS 링크 |

---

## ✨ 서비스 주요 기능

WriteFlow가 제공하는 6가지 AI 글쓰기 기능을 직접 UI로 구현했습니다.

```
✍️  AI 글쓰기 어시스턴트   →  문맥 파악 후 다음 문장 자동 제안
✅  완벽한 문법 교정        →  스타일·톤에 맞는 문장 구조 추천
🎙️  브랜드 목소리 조절      →  비즈니스 톤 ↔ 친근한 블로그 스타일 전환
🌍  50개 이상 언어 지원     →  다국어 고품질 콘텐츠 생성
📋  100개 이상 템플릿       →  이메일, 블로그, 광고 카피 등 목적별 제공
👥  실시간 협업             →  팀원 공동 편집 + AI 아이디어 발전
```

---

## 💳 요금제 구조

실제 SaaS 서비스의 3티어 요금제를 UI로 구현했습니다.

| 플랜 | 가격 | 핵심 혜택 |
|:---:|:---:|:---|
| 🆓 **Free** | $0 / month | 월 5,000자, 기본 템플릿, 1개 프로젝트 |
| ⭐ **Pro** | $18 / month | 무제한 생성, 고급 AI 모델, 브랜드 목소리 커스텀, 우선 지원 |
| 🏢 **Enterprise** | $45 / month | 팀 대시보드, API 액세스, SSO 보안, 전담 매니저 |

> 💡 월간 / 연간 결제 토글 UI (연간 결제 시 20% 할인) 도 구현했습니다.

---

## 🛠️ 기술 스택

> 비전공자도 이해할 수 있도록, 각 기술이 **어떤 역할**을 하는지 함께 설명합니다.

| 기술 | 한 줄 설명 | 핵심 키워드 |
|:---:|:---|:---|
| ![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=next.js&logoColor=white) | 웹사이트의 전체 뼈대를 잡아주는 프레임워크 | `App Router` `SSG` `성능 최적화` |
| ![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black) | 화면을 블록(컴포넌트)처럼 조립하는 라이브러리 | `컴포넌트` `재사용성` `UI` |
| ![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?logo=typescript&logoColor=white) | 오류를 미리 잡아주는 강력한 자바스크립트 | `타입 안전성` `자동완성` |
| ![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=white) | 클래스 이름만으로 빠르게 스타일을 입히는 CSS 도구 | `유틸리티` `반응형` |
| ![Lucide](https://img.shields.io/badge/Lucide_React-F56565?logo=react&logoColor=white) | 깔끔한 SVG 아이콘 세트 | `아이콘` `UI 꾸미기` |
| ![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white) | GitHub 코드를 실제 인터넷 서비스로 올려주는 플랫폼 | `배포` `CI/CD` `무중단` |

---

## 📁 폴더 구조

```
saas-deploy/
│
├── 📂 app/              # 페이지 라우팅 (Next.js App Router)
│   └── page.tsx         # 랜딩 페이지 메인 (단일 페이지 구성)
│
├── 📂 components/       # 섹션별 UI 컴포넌트
│   └── Hero, Features, Pricing, FAQ, CTA, Footer 등
│
├── 📂 design/           # 디자인 시스템 관련 파일
│
├── 📂 public/           # 히어로 목업 이미지 등 정적 파일
│   └── hero-mockup.png
│
├── next.config.ts        # Next.js 전체 설정
└── tailwind.config       # Tailwind CSS 커스텀 설정
```

---

## 📈 배운 점 · 성장 포인트

| 분야 | 배운 것 | 이걸 배워서 뭘 할 수 있게 됐나? |
|:---|:---|:---|
| 🏗️ **SaaS 구조** | 랜딩 페이지 섹션 설계 | Hero → Feature → Pricing → CTA 전형적 구조 이해 |
| 🎨 **UI 설계** | 3티어 요금제 카드 UI | Free / Pro / Enterprise 비교 레이아웃 직접 구현 |
| 🔄 **인터랙션** | 월간/연간 요금제 토글 | 상태 변화에 따라 가격이 바뀌는 UI 구현 |
| 📱 **반응형** | Tailwind 반응형 클래스 | 모바일·태블릿·PC 모든 해상도 대응 |
| 🧩 **컴포넌트** | 섹션별 컴포넌트 분리 | 페이지를 독립적인 블록으로 나눠 관리 |
| 🚀 **배포** | Vercel + GitHub 연동 | `git push` 한 번으로 실서비스 자동 배포 |
| 🤖 **바이브 코딩** | 안티그래비티 활용 | AI 에이전트로 SaaS 랜딩 페이지 전체를 설계·구현 |

---

## ⚙️ 실행 방법

**1️⃣ 저장소 클론**
```bash
git clone https://github.com/seungwoo2000/saas-deploy.git
cd saas-deploy
```

**2️⃣ 패키지 설치**
```bash
npm install
```

**3️⃣ 개발 서버 실행**
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속!

---

<div align="center">

<br/>

*"AI와 함께 더 빠르게, 더 잘 쓰세요."*

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:a855f7,50:7c3aed,100:4f46e5&height=130&section=footer&text=K-디지털%20트레이닝%20|%20아시아경제%20교육센터&fontSize=15&fontColor=ffffff&fontAlignY=65" width="100%"/>

**📅 2026.02 ~ 2026.07** &nbsp;|&nbsp; Made with ✍️ during K-Digital Training

</div>
