# 배포 기록과 배포 확인 (M6-01 · M6-03 · M6-04)

## 배포 이력 (올릴 때마다 한 줄)

|날짜·시각|주소|올린 파일|Ready 여부|확인한 것|
|---|---|---|---|---|
|2026-09-19 11:51|https://kimdw144-bit.github.io/pusan3/|index.html (GitHub Pages, main 브랜치 root)|✅ Ready(github-pages 배포 성공)|배포 주소를 직접 열어 랜딩 7개 섹션(①~⑦)이 정상 렌더링되는 것 확인. app.html은 아직 없어 CTA는 "준비 중" 상태로 표시됨(M6-02에서 구현 예정)|
|2026-09-19 12:xx|https://kimdw144-bit.github.io/pusan3/app.html|app.html, app.js, data.js, index.html(CTA 연결) + docs 갱신|✅ Ready(pages-build-deployment #3)|배포 주소에서 R-01(기본값 2021~2025 → "2개년 마이너스", "+40%~−18.86%") · R-02(빈값 안내) · R-03(기간 역순 안내) 직접 확인. 랜딩의 "체험하기" 버튼이 app.html로 정상 연결됨|
|2026-09-19 13:xx|https://kimdw144-bit.github.io/pusan3/app.html|F-02 해석 문장 + 연도별 막대그래프 추가|✅ Ready(pages-build-deployment #7)|배포 직후 스크립트 캐시로 구버전이 보이는 문제 발견 → `app.js?v=3`·`data.js?v=3` 버전 쿼리 추가로 해결. 재배포 후 차트·해석 문장이 배포 주소에서 정상 표시되는 것 직접 확인|
|2026-09-19 15:xx|https://pusan3.vercel.app|같은 GitHub 저장소를 Vercel에 Import(학생이 직접 로그인·Deploy)|✅ Ready|배포 주소에서 R-01(2021~2025 기본값 결과)·R-02(빈값 안내)·R-03(기간 역순 안내) 모두 재확인. 최종 제출 주소로 이 Vercel 링크 사용|

## 배포 확인 (M6-04 · 시크릿 창에서 짧은 주소로)

|날짜|주소|테스트 ID|R-ID|기대|실제|판정|
|---|---|---|---|---|---|---|
| | | | | | | |

## 결함 카드 (있을 때만)

- 행동 / 입력 / 기대 / 실제 / Console 첫 오류:
- 원인 한 가지와 고친 것:
