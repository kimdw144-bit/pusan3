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
  var badge = badgeForDeposit(depositResult);

  var html = "";

  html += '<div class="chart-card">';
  html += '<div class="chart-title">연도별 예금금리 · 물가상승률 · 한국 주가지수 수익률 (' + start + '~' + end + '년)</div>';
  html += '<div class="legend">';
  html += '<span><i style="background:var(--series-1)"></i>예금금리</span>';
  html += '<span><i style="background:var(--series-2)"></i>물가상승률</span>';
  html += '<span><i style="background:var(--series-3)"></i>한국 주가지수 수익률</span>';
  html += '</div>';
  html += '<div class="chart-scroll">' + buildChartSVG(window.KOR_MACRO_ANNUAL.rows, window.KR_STOCK_INDEX_ANNUAL.rows, start, end) + '</div>';
  html += '</div>';

  html += '<div class="result-card">';
  html += '<div class="result-title">예금금리 vs 물가상승률 (' + start + '~' + end + '년) &nbsp;<span class="badge ' + badge.cls + '">' + badge.label + '</span></div>';
  html += '<div class="result-big" data-count-to="' + depositResult.negativeCount + '" data-count-suffix="개년 마이너스">0개년 마이너스</div>';
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

  var countEl = resultEl.querySelector('[data-count-to]');
  if (countEl) animateCount(countEl, Number(countEl.getAttribute('data-count-to')), countEl.getAttribute('data-count-suffix'));
}

function badgeForDeposit(depositResult) {
  var n = depositResult.negativeCount, total = depositResult.total;
  if (n === 0) return { cls: "badge-good", label: "안정적" };
  if (n / total >= 0.5) return { cls: "badge-bad", label: "자주 뒤처짐" };
  return { cls: "badge-warn", label: "가끔 뒤처짐" };
}

function animateCount(el, to, suffix, duration) {
  duration = duration || 600;
  var start = performance.now();
  function tick(now) {
    var p = Math.min(1, (now - start) / duration);
    var eased = 1 - Math.pow(1 - p, 3);
    var val = Math.round(eased * to);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
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

function roundedBarPath(x, y, w, h, r, roundTop) {
  r = Math.min(r, w / 2, h);
  if (h <= 0) return "";
  if (roundTop) {
    return "M" + x + "," + (y + r)
      + " Q" + x + "," + y + " " + (x + r) + "," + y
      + " L" + (x + w - r) + "," + y
      + " Q" + (x + w) + "," + y + " " + (x + w) + "," + (y + r)
      + " L" + (x + w) + "," + (y + h)
      + " L" + x + "," + (y + h) + " Z";
  }
  return "M" + x + "," + y
    + " L" + (x + w) + "," + y
    + " L" + (x + w) + "," + (y + h - r)
    + " Q" + (x + w) + "," + (y + h) + " " + (x + w - r) + "," + (y + h)
    + " L" + (x + r) + "," + (y + h)
    + " Q" + x + "," + (y + h) + " " + x + "," + (y + h - r) + " Z";
}

function buildChartSVG(depositRows, stockRows, start, end) {
  var years = [];
  for (var y = start; y <= end; y++) years.push(y);

  var byYearDeposit = {};
  depositRows.forEach(function (r) { byYearDeposit[r.year] = r; });
  var byYearStock = {};
  stockRows.forEach(function (r) { byYearStock[r.year] = r; });

  var values = [0];
  years.forEach(function (y) {
    var d = byYearDeposit[y], s = byYearStock[y];
    if (d) { values.push(d.deposit_rate_pct, d.cpi_inflation_pct); }
    if (s) { values.push(s.return_pct); }
  });
  var dataMax = Math.max.apply(null, values);
  var dataMin = Math.min.apply(null, values);
  var pad = (dataMax - dataMin) * 0.15 || 1;
  var yMax = dataMax + pad, yMin = dataMin - pad;

  var barW = 14, gap = 2, groupPad = 18;
  var groupW = barW * 3 + gap * 2 + groupPad;
  var chartW = Math.max(560, years.length * groupW + 20);
  var plotTop = 14, plotBottom = 190, plotH = plotBottom - plotTop;
  var chartH = plotBottom + 28;

  function yScale(v) { return plotTop + (yMax - v) / (yMax - yMin) * plotH; }
  var zeroY = yScale(0);

  var bars = "", xLabels = "";
  years.forEach(function (year, i) {
    var gx = 10 + i * groupW;
    var d = byYearDeposit[year], s = byYearStock[year];
    var items = [];
    if (d) {
      items.push({ v: d.deposit_rate_pct, color: "var(--series-1)", name: "예금금리" });
      items.push({ v: d.cpi_inflation_pct, color: "var(--series-2)", name: "물가상승률" });
    }
    if (s) {
      items.push({ v: s.return_pct, color: "var(--series-3)", name: "한국 주가지수 수익률" });
    }
    items.forEach(function (b, bi) {
      var x = gx + bi * (barW + gap);
      var top = yScale(Math.max(b.v, 0));
      var bottom = yScale(Math.min(b.v, 0));
      var h = Math.max(1, bottom - top);
      var path = roundedBarPath(x, top, barW, h, 3, b.v >= 0);
      var vStr = (b.v >= 0 ? "+" : "") + b.v + "%";
      bars += '<path d="' + path + '" fill="' + b.color + '"><title>' + year + '년 ' + b.name + ' ' + vStr + '</title></path>';
    });
    xLabels += '<text x="' + (gx + (barW * 1.5 + gap)) + '" y="' + (plotBottom + 18) + '" font-size="11" fill="var(--muted)" text-anchor="middle">' + year + '</text>';
  });

  return '<svg viewBox="0 0 ' + chartW + ' ' + chartH + '" width="' + chartW + '" height="' + chartH + '" role="img" aria-label="연도별 예금금리, 물가상승률, 한국 주가지수 수익률 비교 막대그래프">'
    + '<line x1="0" y1="' + zeroY + '" x2="' + chartW + '" y2="' + zeroY + '" stroke="var(--baseline)" stroke-width="1"/>'
    + bars + xLabels
    + '</svg>';
}

function interpretStock(stockResult) {
  var spread = stockResult.max.return_pct - stockResult.min.return_pct;
  var level = spread >= 30 ? "큰 편" : (spread >= 15 ? "보통 수준" : "작은 편");
  return "연도별 오르내림이 " + level + "이에요(최고~최저 차이 " + Math.round(spread * 10) / 10 + "%p). 변동이 크다고 무조건 나쁜 건 아니지만, 짧은 기간에 꼭 필요한 돈이라면 오르내림을 견딜 수 있는지 먼저 생각해보세요.";
}

function syncChipState() {
  var s = document.getElementById("startYear").value;
  var e = document.getElementById("endYear").value;
  document.querySelectorAll("#presetChips .chip").forEach(function (chip) {
    var active = chip.getAttribute("data-start") === s && chip.getAttribute("data-end") === e;
    chip.classList.toggle("active", active);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calcBtn").addEventListener("click", runCalculation);
  document.getElementById("startYear").addEventListener("change", syncChipState);
  document.getElementById("endYear").addEventListener("change", syncChipState);
  document.querySelectorAll("#presetChips .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.getElementById("startYear").value = chip.getAttribute("data-start");
      document.getElementById("endYear").value = chip.getAttribute("data-end");
      syncChipState();
      runCalculation();
    });
  });
  syncChipState();
  runCalculation();
});
