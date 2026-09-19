# 근거 이력

사업계획서·랜딩·발표에 쓰는 값은 여기의 직접 확인한 근거에서만 가져옵니다. 원문 전체 대신 필요한 값·링크·한계를 기록합니다.

|근거 ID|단계|주장·값|원천 URL 또는 파일 경로|발행·기준 시점|수집·확인 시각|공개 가능 여부·라이선스|한계|사용 문서|
|---|---|---|---|---|---|---|---|---|
|E-01(D1)|M5-01|한국 예금금리 2.734%|https://api.worldbank.org/v2/country/KOR/indicator/FR.INR.DPST?format=json|2025 (연간)|2026-09-19|공개·CC BY 4.0(출처 표기)|개별 은행·상품별 실제 금리는 다를 수 있음|data_sources.md, topic.md, lean_canvas.md, data.js|
|E-02(D2)|M5-01|한국 소비자물가 상승률 2.123%|https://api.worldbank.org/v2/country/KOR/indicator/FP.CPI.TOTL.ZG?format=json|2025 (연간, 전년 대비)|2026-09-19|공개·CC BY 4.0(출처 표기)|개인 체감 물가와는 다를 수 있음|data_sources.md, topic.md, lean_canvas.md, data.js|
|E-03|M5-06|2010~2025년 16개년 중 3개년(2017·2021·2022)은 예금금리<물가상승률|data/public/kor_macro_annual.js (직접 계산: 예금금리−물가상승률)|2010~2025|2026-09-19|공개·CC BY 4.0|World Bank 원자료를 재계산한 파생값, 원지표 자체는 아님|lean_canvas.md, journey_map.md, business_plan.md|
|E-04|M6-02|S&P500은 "사전 서면 허가 없이 어떤 형태로든 재배포 금지"(저작권 © S&P Dow Jones Indices LLC)|https://fred.stlouisfed.org/series/SP500|확인 2026-09-19|2026-09-19|비공개·재배포 금지 — **이 근거는 앱에 사용하지 않음, 배제 사유로만 기록**|해당 없음(사용 배제)|requirements.md, lean_canvas.md, mvp_rice.md, submission.md 근거|
|E-05(D3)|M6-02|한국 주가지수(2015=100) 154.34(2025년), 2010년 87.60 등 연도별 지수값|https://fred.stlouisfed.org/series/SPASTT01KRA661N (OECD Main Economic Indicators)|2010~2025 (연간)|2026-09-19|공개·OECD 저작권(출처 표기 필수)|개별 종목·업종별 차이, 배당 재투자 수익 미포함, 코스피 원지수는 아님|data_sources.md, requirements.md, data.js|

- 새 외부 근거가 없는 단계(M5-02~M5-05, M5-07~M5-08, M6-01, M6-04~M6-06)에는 새 근거 없음 — 기존 E-01~E-05를 재사용했습니다.

- 개인 계좌·실제 거래·고객 개인정보·비공개 회사 자료·유료 리포트 원문은 기록하거나 공개하지 않습니다.
- 새 외부 근거가 없는 단계에는 `새 근거 없음`과 이유를 남깁니다.
