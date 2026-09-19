# UI 설계 기록 · M5-08에서 먼저 정하고 M6-01에서 구현

> 다른 서비스의 로고·글꼴·이미지·화면을 복제하지 않습니다. 공개 자료는 **정보 위계와 상호작용 원칙**만 참고하고, 내 데이터·내 문장·원본 CSS/SVG로 만듭니다.

## 1. 참고 원칙과 근거

| 참고한 원칙 | 내 화면에서의 적용 | 참고 링크 |
|---|---|---|
| 한 화면·섹션에 한 메시지 | 각 랜딩 섹션은 제목 하나와 행동 하나 | `docs/ui_ref.md` |
| 데이터는 출처·기준 시점과 함께 | 숫자 아래에 기관·기간·한계를 표시 | `data_sources.md` |
| 입력은 쉬운 순서로 | 사용자가 먼저 아는 값부터 묻기 | `journey_map.md` |
| 오류는 입력 가까이 | R-02·R-03 안내를 해당 칸 아래에 표시 | `requirements.md` |
| 가장 중요한 숫자를 가장 크게, 보조 정보는 작고 조용하게 | 결과 값은 30px+ 굵은 숫자, 출처·한계는 12px 회색 | WANDR "Fintech Mobile App Design Trends for 2026" |
| 다크모드는 2026 핀테크에서 기본값(차트·손익 색이 어두운 배경에서 더 선명) | `prefers-color-scheme: dark`로 라이트/다크 토큰 전부 분리 정의 | Yellow Slice "Fintech UX Design Trends 2026" |
| 손익·상태는 색+캡슐 배지로, 텍스트에 색을 입히지 않는다 | "안정적/가끔 뒤처짐/자주 뒤처짐" 배지를 숫자 옆에 추가(색은 배지 배경에만) | Robinhood 디자인 시스템 요약(oh-my-design.kr) — 정확한 브랜드 색·로고는 그대로 쓰지 않고 톤만 참고 |
| 값이 바뀔 때 카운트업 애니메이션으로 확인시켜준다 | 결과 숫자가 0에서 목표값까지 0.6초간 올라가며 표시 | Robinhood "Hello, Ticker" 엔지니어링 블로그(Medium) — 애니메이션 개념만 참고, 코드는 직접 작성 |

## 2. 랜딩 시각 설계

| 랜딩 요소 | 무엇을 보여 주나 | 만드는 방법 | 원천 |
|---|---|---|---|
| Hero | 고객·문제·UVP 한 문장 + CTA | CSS 도형 또는 간단한 원본 SVG | `lean_canvas.md` |
| 데이터 카드·미니 차트 | 숫자 2개·추이·출처·한계 | CSS 카드 + SVG/Canvas 차트 | `data_sources.md` |
| 전·후 흐름 | 기존 대안 → F-01 결과 | 3단계 흐름 도형 | `journey_map.md` |
| 앱 미리보기 | 실제 입력·결과 화면 | `app.html`의 원본 화면 또는 자체 도형 | `requirements.md` |
| 신뢰·한계 | 데모 범위·미검증 항목 | 작은 고지 카드 | `feedback_log.md` |

## 3. 앱 화면 설계

- 첫 화면에서 사용자 행동 하나만 보이게:
- 입력 순서와 각 입력의 예시:
- 정상 결과(R-01)에서 크게 보여 줄 값:
- 빈값(R-02)과 오류(R-03) 안내 문구:
- 키보드·모바일에서 눌러 볼 요소:

## Claude Code에 보낼 명령

```text
[입력] docs/ui_ref.md, ui_design.md, data_sources.md, lean_canvas.md, persona.md,
journey_map.md, requirements.md, qa_scenarios.md
[목표] 다른 브랜드를 복제하지 않고, 내 랜딩과 F-01 앱의 시각 설계를 먼저 완성한다.
[진행]
1. 공개 UI 참고 자료에서 원칙만 3개 추리고, 원문 링크와 내 적용 문장을 ui_design.md에 적어.
2. 랜딩은 Hero, 데이터 카드·추이, 기존→개선 흐름, 앱 미리보기, CTA, 한계·고지의 6요소를 내 문서에서 채워.
3. 각 요소가 어느 입력 문서의 어느 문장에서 왔는지 표로 연결해. 출처 없는 숫자와 타사 로고·화면·글꼴은 쓰지 마.
4. app.html은 R-01·R-02·R-03의 상태가 눈에 구분되도록 와이어프레임을 만들고, 각 상태의 확인 방법을 qa_scenarios.md에 연결해.
5. 구현하지 말고 ui_design.md에 바꾸기 전·후와 선택 이유를 저장해. 다음 M6-01에서 이 설계대로 원본 HTML/CSS/SVG를 구현한다고 적어.
```

## 2-1. AIDA 랜딩 구조 · 발표도 같은 순서로

랜딩은 AIDA 순서로 한 번에 이해되고 시연되게 만듭니다. **AIDA는 발표 대본 순서이기도 합니다.**

|AIDA|랜딩에서 보여 줄 것|반드시 연결할 문서|사용자가 얻는 답|
|---|---|---|---|
|A · Attention|제목 한 줄 + 숫자 2개·기간·출처|`topic.md`, `data_sources.md`|왜 지금 봐야 하나|
|I · Interest|페르소나의 불편 순간과 현재 대안|`persona.md`, `journey_map.md`|누구의 어떤 문제인가|
|D · Desire|우리 해결 방식·F-01 전후 흐름·얻는 가치|`lean_canvas.md`, `mvp_rice.md`|왜 이 방법이 나은가|
|A · Action|앱 미리보기 + `app.html`로 가는 큰 CTA|`requirements.md`, `ui_design.md`|지금 무엇을 해 볼 수 있나|

- 타깃은 Interest 영역에서 직업·상황·계기로 한 사람을 먼저 보여 줍니다.
- 기능 소개는 Desire와 Action에 나눕니다. Desire는 **해결 원리**, Action은 **직접 누를 F-01**입니다.
- 마지막에는 테스트 상태·데모 범위·출처·한계를 작게 표시합니다.

## 2-2. 관찰용 레퍼런스 캡처 기록

|캡처 파일·원본 URL|관찰한 원칙|복제하지 않을 요소|내 AIDA 화면에 적용한 원본 설계|
|---|---|---|---|
|`references/ui_ref_01.png` / | | | |
|https://www.wandr.studio/blog/fintech-mobile-app-design-trends|큰 숫자 우선순위, 절제된 색 사용, 마이크로 인터랙션으로 시선 유도|해당 회사의 실제 화면 스크린샷·로고|결과 카드의 숫자 크기·색 위계, 차트 등장 시 페이드인|
|https://oh-my-design.kr/design-systems/robinhood|8px 기반 spacing 스케일, 16~20px 카드 radius, 손익 색상 관례(초록=이득/빨강=손실)|Robinhood 정확한 브랜드 그린(#00C805)·로고·서체(Capsule Sans)|직접 정한 색 토큰(--good/--bad)과 spacing 변수(--sp-1~--sp-12), 자체 시스템 폰트|
|https://medium.com/robinhood-engineering/hello-ticker-20eaf6e51689|값이 바뀔 때 숫자가 애니메이션으로 올라가는 "카운트업" 패턴|실시간 티커 자체·차트 색 플래시 로직|결과 숫자에 0.6초 이징 카운트업 애니메이션(직접 구현한 `animateCount()`)|
|https://www.yellowslice.in/blog/fintech-ux-design-trends-you-must-know|다크모드가 2026 핀테크의 기본 기대치|해당 앱들의 실제 다크 UI 화면|`prefers-color-scheme: dark`로 전체 색 토큰 이중화|

## 4. 디자인 리프레시 기록 (2026-09-19, 피드백: "UI가 너무 AI스러움")

- **바꾸기 전**: 단일 파일에 인라인 CSS, 연한 파스텔 카드, 다크모드 없음, 정적인 숫자 표시, 드롭다운만으로 기간 선택
- **바꾼 뒤**: `style.css` 디자인 토큰 시스템 분리(spacing/radius/색 스케일), 라이트·다크 모드 이중 정의, 결과 숫자 카운트업 애니메이션, "안정적/가끔 뒤처짐/자주 뒤처짐" 상태 배지, 기간 선택 프리셋 칩(최근 5년·10년·전체) 추가, 스티키 상단바
- **바꾸지 않은 것**: `calcDepositVsInflation()`·`calcStockRange()`·`validateRange()` 등 계산 로직과 `startYear`/`endYear`/`calcBtn`/`result`/`message` id는 그대로 유지해 `qa_scenarios.md`의 UT/IT가 계속 유효함
- **선택 이유**: 로고·이미지를 복제하지 않고, 2026 핀테크·게임 스탯카드에서 공통적으로 쓰이는 원칙(큰 숫자, 다크모드, 카운트업, 상태 배지)만 가져와 원본 CSS/SVG로 구현
