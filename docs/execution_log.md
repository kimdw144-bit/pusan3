# 실행 이력

AI가 말한 완료와 내가 직접 확인한 결과를 구분해 남깁니다. 단계가 끝날 때 한 줄씩 추가합니다.

|실행 시각|단계|한 일·명령 요약|입력|저장 결과|직접 확인한 화면·값|판정|미확인·다음 행동|
|---|---|---|---|---|---|---|---|
|2026-09-19 09:30|M5-01|kor_macro_annual.js에서 예금금리·물가상승률 2개 확인|data/public/kor_macro_annual.js|data_sources.md, topic.md|D1 2.734%·D2 2.123%(2025) 링크·기준시점 확인|PASS|없음|
|2026-09-19 09:45|M5-02|Lean Canvas 9칸 작성, 가장 위험한 가정 ★ 표시|topic.md, data_sources.md|lean_canvas.md|AI 제안 — 실제 고객 인터뷰는 미실행|보류(가설 상태)|고객 인터뷰로 검증 필요|
|2026-09-19 10:00|M5-03|페르소나 "민지" 작성|lean_canvas.md 고객 칸|persona.md|AI 제안 — 실제 조사 없이 전부 (가설)|보류(가설 상태)|실제 인터뷰 필요|
|2026-09-19 10:10|M5-04|저니맵 4단계 작성, 감정 최저점·이탈 지점 표시|persona.md, lean_canvas.md|journey_map.md|AI 제안 — 사용자 테스트 전|보류(가설 상태)|사용자 테스트로 검증|
|2026-09-19 10:30|M5-05|자가점검(16/20) + Git·GitHub 저장소 연결·1차 push|rubric.md|self_check.md, GitHub 저장소|Git 설치 확인(`git --version`), push 후 GitHub 저장소 파일 목록 직접 확인|PASS|없음|
|2026-09-19 10:50|M5-06|피드백 3건 반영(인물 이름 통일, 저니맵 전환 이유, data_sources 링크 재검증+D3 추가)|패들렛 피드백 문구|lean_canvas.md, journey_map.md, data_sources.md, feedback_log.md|World Bank·FRED 링크를 직접 열어 D1·D2·D3 값·시점 재확인|PASS|없음|
|2026-09-19 11:00|M5-07|MVP RICE 비교, F-01 선정|lean_canvas.md, journey_map.md|mvp_rice.md|AI 제안 — R·C는 추정값|보류(추정 포함)|실제 방문자 수로 R값 보정 필요|
|2026-09-19 11:10|M5-08|F-01 요구사항·단위/통합 테스트 설계|mvp_rice.md|requirements.md, qa_scenarios.md|설계 단계, 아직 실행 전|N/A|M6-02에서 실행|
|2026-09-19 11:45|M6-01|랜딩 index.html 제작, GitHub Pages로 1차 배포|topic.md~mvp_rice.md, ui_ref.md|index.html, deploy_check.md|배포 주소(https://kimdw144-bit.github.io/pusan3/)를 직접 열어 7개 섹션 렌더링 확인|PASS|없음|
|2026-09-19 12:15|M6-02|F-01 구현(data.js/app.js/app.html), S&P500→OECD 한국 주가지수로 교체(라이선스 문제 발견)|requirements.md, qa_scenarios.md|data.js, app.js, app.html|로컬 static-preview + 배포 주소에서 R-01/R-02/R-03·데이터 로드 실패 4가지 시나리오 모두 직접 클릭해 확인|PASS|없음|
|2026-09-19 12:40|추가 구현|F-02 해석 문장 + 연도별 막대그래프(dataviz 스킬 팔레트 적용) 추가|저니맵 3단계 감정 최저점|app.js, app.html|로컬 3개 기간(2021~2025, 2023~2025, 2010~2025)에서 문구·그래프 직접 확인, 배포 후 캐시 문제 발견해 버전 쿼리로 해결|PASS|없음|
|2026-09-19 13:10|M6-04|발표 대본·제출 문서 초안 작성|presentation.md, submission.md 양식|presentation.md, submission.md|기존 문서 근거로만 작성(새 숫자 없음)|PASS|이름/팀·캡처는 학생 확인 필요|
|2026-09-19 13:30|M6-05|business_plan.md ①~⑧ 작성(NotebookLM 입력용 정본)|지금까지의 모든 docs|business_plan.md|[사실]9·[가설]19·[검증]8·[리서치 필요]6 라벨로 구분|PASS|TAM/SAM/SOM 리서치 필요|
|2026-09-19 13:45|M6-06|마무리 정리, 제출 캡처 저장|app.html 배포 화면|submission_capture.png, closeout.md|배포 주소 화면 직접 캡처|PASS|이름/팀 입력 후 패들렛 제출|

- AI 제안은 `AI 제안`으로 표기하고, 실제 실행·직접 확인과 섞지 않습니다.
- 계정·비밀번호·개인정보·비공개 회사 정보는 기록하지 않습니다.

- AI 제안은 `AI 제안`으로 표기하고, 실제 실행·직접 확인과 섞지 않습니다.
- 계정·비밀번호·개인정보·비공개 회사 정보는 기록하지 않습니다.
