// 30초 송금 데모 — 교육용. 실제 송금·계좌 연결 없음.
function digits(v) { return String(v ?? '').replace(/[^0-9]/g, ''); }
function validatePhone(v) {
  const s = String(v ?? '').trim();
  if (s === '') return { ok: false, message: '받는 사람 전화번호를 입력하세요' };
  const d = digits(s);
  if (!/^[0-9\-\s]+$/.test(s) || !/^010\d{8}$/.test(d)) return { ok: false, message: '전화번호는 010으로 시작하는 11자리 숫자예요' };
  return { ok: true, value: d };
}
function validateAmount(v) {
  const s = String(v ?? '').trim().replace(/,/g, '');
  if (s === '') return { ok: false, message: '보낼 금액을 입력하세요' };
  if (!/^\d+$/.test(s) || Number(s) < 1 || Number(s) > 2000000) return { ok: false, message: '금액은 1원~200만 원 사이 숫자로 입력하세요' };
  return { ok: true, value: Number(s) };
}
function validatePin(v) {
  const s = String(v ?? '').trim();
  if (s === '') return { ok: false, message: '비밀번호 4자리를 입력하세요' };
  if (!/^\d{4}$/.test(s)) return { ok: false, message: '비밀번호는 숫자 4자리예요' };
  return { ok: true };
}
function formatPhone(d) { return d.length === 11 ? `${d.slice(0,3)}-${d.slice(3,7)}-${d.slice(7)}` : `${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6)}`; }
function won(n) { return n.toLocaleString('ko-KR') + '원'; }
function receipt(phone, amount, seconds) {
  return { to: formatPhone(phone), amount: won(amount), seconds, steps: 3, before: window.TRANSFER_FACTS.transfer_time_before.value };
}
if (typeof module !== 'undefined') module.exports = { validatePhone, validateAmount, validatePin, formatPhone, won, receipt };
