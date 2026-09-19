# 근거표 — 숫자와 출처 (M5-01)

> 링크를 **직접 열어** 값·기준 시점·제목이 문서에 있는지 확인한 것만 남깁니다. 본문은 복사하지 않습니다.

|번호|값과 단위|기준 시점|기관·문서|링크|말해주는 것|말해주지 않는 것|확인|
|---|---|---|---|---|---|---|---|
|D1|예금금리 2.734%|2025 (연간)|World Bank Open Data (FR.INR.DPST, 한국)|https://api.worldbank.org/v2/country/KOR/indicator/FR.INR.DPST?format=json|은행 예금 상품의 평균적인 연 이자율 수준|개별 은행·상품별 실제 금리는 다를 수 있음|☑ 직접 열어 봄|
|D2|소비자물가 상승률 2.123%|2025 (연간, 전년 대비)|World Bank Open Data (FP.CPI.TOTL.ZG, 한국)|https://api.worldbank.org/v2/country/KOR/indicator/FP.CPI.TOTL.ZG?format=json|평균적인 물가가 1년 동안 오른 비율|개인이 자주 사는 품목의 체감 물가와는 다를 수 있음|☑ 직접 열어 봄|
|D3|한국 주가지수 154.34 (2015=100 기준)|2025 (연간)|OECD Main Economic Indicators (SPASTT01KRA661N, FRED 경유)|https://fred.stlouisfed.org/series/SPASTT01KRA661N|한국 주식시장 전반의 가격 수준이 2015년 대비 어떻게 변했는지|개별 종목·업종별 차이, 배당 재투자 수익은 포함 안 됨. S&P500은 저작권상 재배포 금지라 이 지표로 대체함|☑ 직접 열어 봄|

## 앱에 쓸 데이터

- 파일(`data/public/…js`) 또는 키 없는 주소: `data/public/kor_macro_annual.js` (`window.KOR_MACRO_ANNUAL`, 2010~2025년 예금금리·물가상승률 등 8종) + OECD 한국 주가지수(SPASTT01KRA661N)를 연 수익률로 가공한 `window.KR_STOCK_INDEX_ANNUAL` — 둘 다 `data.js`에 포함
- 화면에 표시할 출처·기준 시점: World Bank Open Data(CC BY 4.0)·OECD Main Economic Indicators(출처 표기 필수), 2026-09-18·2026-09-19 수집, 2010~2025년 연간 자료
- 받지 못했을 때 보여줄 것: 최신 연도(2025년) 값을 기본값으로 고정 표시하고 "World Bank·OECD 자료 기준, 최신 연도가 늦게 갱신될 수 있음" 안내 문구
