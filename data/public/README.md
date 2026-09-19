# 공개 데이터 세트 (키 없이 · 재배포 가능 · 2026-09-18 수집)

앱에 바로 쓰는 법: 쓸 파일을 프로젝트 맨 위의 `data.js`로 복사하고 `app.html`에 `<script src="data.js"></script>`를 넣은 뒤 `window.변수`를 읽습니다. 서버·키·fetch가 필요 없습니다.
같은 내용의 `.csv`도 있습니다. **화면에 출처와 기준 시점을 꼭 표시하세요.** 최신 값이 필요하면 「다시 받는 주소」를 쓰되, 실패하면 이 파일 값을 보여 줍니다.

| 파일 | 변수 | 무엇 | 기간 | 출처 · 라이선스 | 다시 받는 주소 |
|---|---|---|---|---|---|
| `fx_krw_daily.js` | `FX_KRW_DAILY` | 원화 환율 일별 (1 USD·JPY·EUR·CNY당 원) (268행) | 2025-09-01~2026-09-17 (영업일) | Frankfurter API (유럽중앙은행 ECB 기준환율) · ECB 통계 · 출처 표기 후 재사용 / Frankfurter MIT | https://api.frankfurter.dev/v1/latest?base=USD&symbols=KRW |
| `kor_macro_annual.js` | `KOR_MACRO_ANNUAL` | 한국 연간 지표 8종 (소비자물가 상승률(%) · 대출금리(%) · 예금금리(%) · 실질금리(%) · 청년(15~24세) 실업률(%) · 원/달러 연평균 · 65세 이상 인구 비중(%) · 1인당 GDP(달러)) (16행) | 2010~2025 | World Bank Open Data (FP.CPI.TOTL.ZG, FR.INR.LEND, FR.INR.DPST, FR.INR.RINR, SL.UEM.1524.ZS, PA.NUS.FCRF, SP.POP.65UP.TO.ZS, NY.GDP.PCAP.CD) · CC BY 4.0 · 출처 표기 | https://api.worldbank.org/v2/country/KOR/indicator/FP.CPI.TOTL.ZG?format=json |
| `kor_cpi_monthly.js` | `KOR_CPI_MONTHLY` | 한국 소비자물가 전년동월비(%) 월별 (44행) | 2023-01~2026-08 | OECD Data Explorer (DF_PRICES_ALL, KOR CPI GY) · CC BY 4.0 · 출처 표기 | https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PRICES@DF_PRICES_ALL,1.0/KOR.M.N.CPI.PA._T.N.GY?format=csvfilewithlabels |
| `kor_rates_monthly.js` | `KOR_RATES_MONTHLY` | 한국 장기금리(10년 국채)·3개월 금리 월별(%) (44행) | 2023-01~2026-08 | OECD Data Explorer (DF_FINMARK, KOR IRLT·IR3TIB) · CC BY 4.0 · 출처 표기 | https://sdmx.oecd.org/public/rest/data/OECD.SDD.STES,DSD_STES@DF_FINMARK,4.0/KOR.M.IRLT+IR3TIB.PA.....?format=csvfilewithlabels |
| `usdkrw_monthly.js` | `USDKRW_MONTHLY` | 원/달러 환율 월평균 (69행) | 2021-01~2026-09 | FRED DEXKOUS (미 연준 H.10) · 미 연준 공표 자료 · 출처 표기 (FRED 제3자 저작권 표시 없음) | https://fred.stlouisfed.org/graph/fredgraph.csv?id=DEXKOUS&fq=Monthly |
| `sbiz_bsi_monthly.js` | `SBIZ_BSI_MONTHLY` | 소상공인 시장경기동향 체감·전망 지수 (경기전반·매출·자금사정·부산·서울·음식점업·소매업) (162행) | 2013-01~2026-06 | 공공데이터포털 소상공인시장진흥공단 소상공인 시장경기동향 (파일데이터 3060077) · 공공누리 · 이용허락범위 제한 없음(2026-09-11 확인) | https://www.data.go.kr/data/3060077/fileData.do |

**넣지 않은 것**: 한국 개별 주가(KRX 재배포 금지) · 키가 필요한 API(한국은행 ECOS·KOSIS·금감원 금융상품) · 기사 본문.
**이 숫자는 교육용 참고이며 투자·대출 판단의 근거가 아닙니다.**
