// 여행 환전 예산 — 계산·검사는 이 파일의 함수만 한다 (data.js의 window.FX_KRW_DAILY 사용)
const CURRENCIES = {
  USD: { label: '미국 달러', unit: 1, key: 'USD_KRW' },
  JPY: { label: '일본 엔', unit: 100, key: 'JPY_KRW' },   // 엔화는 100엔 기준으로 보여 준다
  EUR: { label: '유로', unit: 1, key: 'EUR_KRW' },
  CNY: { label: '중국 위안', unit: 1, key: 'CNY_KRW' },
};

function ratesFor(code) {
  const key = CURRENCIES[code].key;
  return window.FX_KRW_DAILY.rows.filter(r => typeof r[key] === 'number').map(r => ({ date: r.date, rate: r[key] }));
}

function latestRate(code) {
  const rows = ratesFor(code);
  return rows[rows.length - 1];
}

// 기간 전체의 가장 낮은·높은 기준환율 (예산 범위를 잡는 데 쓴다)
function rateRange(code) {
  const rows = ratesFor(code);
  let min = rows[0], max = rows[0];
  for (const r of rows) { if (r.rate < min.rate) min = r; if (r.rate > max.rate) max = r; }
  return { min, max };
}

function toKrw(amount, rate) {
  return Math.round(amount * rate);
}

// 입력 문자열 검사: 빈칸 / 숫자 아님·0 이하
function validateAmount(raw) {
  const v = String(raw ?? '').trim().replace(/,/g, '');
  if (v === '') return { ok: false, message: '외화 금액을 입력하세요' };
  if (!/^\d+(\.\d+)?$/.test(v) || Number(v) <= 0) return { ok: false, message: '외화 금액은 0보다 큰 숫자로 입력하세요' };
  return { ok: true, value: Number(v) };
}

function budget(code, amount) {
  const now = latestRate(code), { min, max } = rateRange(code);
  return {
    today: { date: now.date, krw: toKrw(amount, now.rate) },
    low: { date: min.date, krw: toKrw(amount, min.rate) },
    high: { date: max.date, krw: toKrw(amount, max.rate) },
  };
}

function won(n) { return n.toLocaleString('ko-KR') + '원'; }
