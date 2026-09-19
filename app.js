function calcDepositVsInflation(rows, startYear, endYear) {
  var gaps = rows
    .filter(function (r) { return r.year >= startYear && r.year <= endYear; })
    .map(function (r) {
      return { year: r.year, gap: Math.round((r.deposit_rate_pct - r.cpi_inflation_pct) * 100) / 100 };
    });
  var negativeCount = gaps.filter(function (g) { return g.gap < 0; }).length;
  return { gaps: gaps, negativeCount: negativeCount, total: gaps.length };
}

function calcStockRange(rows, startYear, endYear) {
  var filtered = rows.filter(function (r) { return r.year >= startYear && r.year <= endYear; });
  if (filtered.length === 0) return null;
  var max = filtered[0], min = filtered[0];
  filtered.forEach(function (r) {
    if (r.return_pct > max.return_pct) max = r;
    if (r.return_pct < min.return_pct) min = r;
  });
  return { max: max, min: min };
}

function validateRange(start, end) {
  if (start === "" || start === null || start === undefined || end === "" || end === null || end === undefined) {
    return { ok: false, type: "empty", message: "비교할 기간을 선택하세요" };
  }
  var s = Number(start), e = Number(end);
  if (isNaN(s) || isNaN(e)) {
    return { ok: false, type: "empty", message: "비교할 기간을 선택하세요" };
  }
  if (s > e) {
    return { ok: false, type: "error", message: "기간을 다시 확인해주세요 (시작 연도가 종료 연도보다 늦습니다)" };
  }
  return { ok: true };
}

function runCalculation() {
  var resultEl = document.getElementById("result");
  var messageEl = document.getElementById("message");
  var startVal = document.getElementById("startYear").value;
  var endVal = document.getElementById("endYear").value;

  messageEl.textContent = "";
  messageEl.className = "message";
  resultEl.style.display = "none";
  resultEl.innerHTML = "";

  if (typeof window.KOR_MACRO_ANNUAL === "undefined" || typeof window.KR_STOCK_INDEX_ANNUAL === "undefined") {
    messageEl.textContent = "데이터를 불러오지 못했습니다. data.js가 올바르게 연결되어 있는지 확인해주세요.";
    messageEl.className = "message error";
    return;
  }

  var check = validateRange(startVal, endVal);
  if (!check.ok) {
    messageEl.textContent = check.message;
    messageEl.className = "message " + (check.type === "empty" ? "info" : "error");
    return;
  }

  var start = Number(startVal), end = Number(endVal);
  var depositResult = calcDepositVsInflation(window.KOR_MACRO_ANNUAL.rows, start, end);
  var stockResult = calcStockRange(window.KR_STOCK_INDEX_ANNUAL.rows, start, end);

  var html = "";
  html += '<div class="result-card">';
  html += '<div class="result-title">예금금리 vs 물가상승률 (' + start + '~' + end + '년)</div>';
  html += '<div class="result-big">' + depositResult.negativeCount + '개년 마이너스</div>';
  html += '<div class="result-sub">' + depositResult.total + '개년 중 예금금리가 물가상승률보다 낮았던 해</div>';
  html += '<div class="result-interpret">' + interpretDeposit(depositResult) + '</div>';
  html += '</div>';

  if (stockResult) {
    var maxStr = (stockResult.max.return_pct >= 0 ? '+' : '') + stockResult.max.return_pct + '%';
    var minStr = (stockResult.min.return_pct >= 0 ? '+' : '') + stockResult.min.return_pct + '%';
    html += '<div class="result-card">';
    html += '<div class="result-title">한국 주가지수 연 수익률 범위 (' + start + '~' + end + '년)</div>';
    html += '<div class="result-big">' + maxStr + ' ~ ' + minStr + '</div>';
    html += '<div class="result-sub">최고 ' + stockResult.max.year + '년 · 최저 ' + stockResult.min.year + '년</div>';
    html += '<div class="result-interpret">' + interpretStock(stockResult) + '</div>';
    html += '</div>';
  }

  html += '<div class="src">예금금리·물가상승률: World Bank Open Data(CC BY 4.0) · 한국 주가지수: OECD Main Economic Indicators(2015=100) · 2010~2025년 연간 자료 · 교육용 참고이며 투자 판단 근거가 아닙니다.</div>';

  resultEl.innerHTML = html;
  resultEl.style.display = "block";
}

function interpretDeposit(depositResult) {
  var n = depositResult.negativeCount, total = depositResult.total;
  if (n === 0) {
    return "이 기간에는 예금금리가 물가상승률을 계속 앞섰어요. 예금만으로도 실질 자산이 줄지 않았던 시기예요.";
  }
  var ratio = n / total;
  if (ratio >= 0.5) {
    return "절반 이상의 해에서 물가를 못 따라갔어요. 예금만으로는 실질 자산이 줄어든 해가 많았다는 뜻이에요.";
  }
  return "물가를 못 따라간 해가 " + n + "번 있었어요. 예금이 항상 이긴 건 아니라는 뜻이에요.";
}

function interpretStock(stockResult) {
  var spread = stockResult.max.return_pct - stockResult.min.return_pct;
  var level = spread >= 30 ? "큰 편" : (spread >= 15 ? "보통 수준" : "작은 편");
  return "연도별 오르내림이 " + level + "이에요(최고~최저 차이 " + Math.round(spread * 10) / 10 + "%p). 변동이 크다고 무조건 나쁜 건 아니지만, 짧은 기간에 꼭 필요한 돈이라면 오르내림을 견딜 수 있는지 먼저 생각해보세요.";
}

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calcBtn").addEventListener("click", runCalculation);
  runCalculation();
});
