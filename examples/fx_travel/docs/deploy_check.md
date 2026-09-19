# 배포 기록과 배포 확인 (보조 예시 · 민지)

> 기록 상태: **실제 배포 주소에서 실행한 결과** (2026-09-18 · 시크릿과 같은 새 브라우저 창 · 자동 브라우저로 같은 순서를 눌러 확인)

## 배포 이력
|날짜·시각|주소|올린 파일|Ready 여부|확인한 것|
|---|---|---|---|---|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app|index.html · app.html · app.js · data.js · test.html|Ready|랜딩 ①~⑦ 표시|

## 배포 확인 (시크릿 창 · 짧은 주소)
|날짜|주소|테스트|R-ID|기대|실제|판정|
|---|---|---|---|---|---|---|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app/|랜딩 열기|—|① 한 줄 소개 표시|「① 한 줄 소개」 표시|PASS|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app/|④ 「계산기 열기」 버튼|—|app.html로 이동|app.html로 이동|PASS|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app/app.html|엔 50000 → 계산|R-01|444,005원 · 기준일 2026-09-17|「2026-09-17 기준환율로 444,005원」|PASS|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app/app.html|빈칸 → 계산|R-02|「외화 금액을 입력하세요」 · 결과 숨김|안내 표시 · 결과 없음|PASS|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app/app.html|「오만」 → 계산|R-03|「0보다 큰 숫자」 안내 · 입력 유지|안내 표시 · 입력칸에 「오만」 그대로|PASS|
|2026-09-18|https://pnu-day3-fx-travel.vercel.app/app.html|「-5」 → 계산|R-03|「0보다 큰 숫자」 안내|안내 표시|PASS|

Console 오류: 0건.
