# Vercel 무료(Hobby)로 내 서비스 주소 만들기 — 필수

> 오늘의 완료 기준: **`프로젝트이름.vercel.app` 주소를 시크릿 창에서 열었을 때 내 기능이 동작한다.**
> 확인일 2026-09-17 · 출처 [Vercel Hobby 플랜](https://vercel.com/docs/plans/hobby) · 요금·조건은 바뀔 수 있습니다.

## 0. 무료 플랜에서 지킬 것

- Hobby 플랜은 **무료**이고 **개인·비상업 용도만** 허용됩니다. 결제 버튼·광고·실제 판매 문구를 넣지 않습니다.
- 하루 배포 100회, 프로젝트 200개까지입니다. 수업에서는 충분합니다.
- 카드 등록이 필요 없습니다. 카드 입력 화면이 나오면 유료(Pro) 경로로 들어간 것이니 멈추고 강사를 부릅니다.

## 1. 올리기 전에 Claude에게 점검받기

> 배포 전에 수정하지 말고 표로만 점검해줘. ① index.html이 맨 위 폴더에 있나 ② 링크·이미지·script 경로가 실제 파일명과 대소문자까지 같나 ③ fetch로 파일을 읽는 곳이 있나(있으면 data.js 방식으로 바꿔야 함) ④ API 키·토큰·개인정보가 들어간 파일이 있나 ⑤ 파일 수와 가장 큰 파일 크기.

- 파일 이름은 **영어 소문자·공백 없이** 씁니다. 내 PC에서는 `Report.html`과 `report.html`이 같지만 배포하면 404가 납니다.
- 내 PC에서 `index.html`을 더블클릭해 정상·빈값·오류를 먼저 확인합니다.

## 2. GitHub에 올리기 (웹 업로드)

오늘은 **같은 저장소에 두 번** 올립니다. 오전에는 기획 문서, 오후에는 앱 파일입니다. 폴더 없이 **맨 위에 파일만** 올립니다.

1. github.com 로그인 → 새 기기라 **이메일 인증 코드**가 오면 휴대폰 메일에서 확인합니다.
2. (오전 한 번만) 오른쪽 위 **+ → New repository** → 이름(예: `pnu-fintech-07`) → **Public** → **Create repository**.
3. **uploading an existing file**(두 번째부터는 **Add file → Upload files**)을 누릅니다.
4. **올릴 파일만 골라** 끌어다 놓습니다. Windows는 Ctrl, Mac은 ⌘를 누른 채 하나씩 클릭합니다.
   - 오전(M5-05): `docs` 폴더 안의 내 기획 문서 6개 — `data_sources.md` · `topic.md` · `lean_canvas.md` · `persona.md` · `journey_map.md` · `self_check.md`
   - 오후(M6-01·M6-03): 앱 파일 — `index.html` · `app.html` · `app.js` · `data.js` · (있으면) `test.html` · `README.md`, 그리고 새로 바뀐 기획 문서
   - **Ctrl+A로 전부 고르지 않습니다.** 실습 폴더에는 강의안·명령 파일·예제 PDF 등 수업 자료가 200개쯤 있어서, 전부 올리면 수업 자료가 인터넷에 공개되고 한 번에 100개 제한에도 걸립니다.
   - 폴더째 끌면 한 겹 더 들어가 Vercel에서 404가 납니다.
5. 한 번에 100개·파일당 25MB까지입니다. **Commit changes**를 누릅니다.
6. 저장소 첫 화면에 올린 파일이 바로 보이는지 확인합니다(오후에는 `index.html`).

## 3. Vercel에 연결하기

1. vercel.com → **Continue with GitHub**으로 가입·로그인 → 플랜을 물으면 **Hobby** 선택.
2. **Add New… → Project** → 방금 만든 저장소 옆 **Import**.
   - 저장소가 안 보이면 **Adjust GitHub App Permissions**에서 해당 저장소 접근을 허용합니다.
3. 설정 화면: **Framework Preset = Other**, **Root Directory는 비워 둡니다**(index.html이 맨 위에 있으면). 빌드 명령은 비워 둡니다.
4. **Deploy** → 1분 안팎으로 완료 화면이 뜹니다.
5. 프로젝트 화면의 **Domains에 있는 짧은 주소(`이름.vercel.app`)** 를 **시크릿 창**에서 엽니다.
   - 배포마다 생기는 긴 주소는 로그인을 요구할 수 있으니 **제출은 짧은 주소로** 합니다.
6. 배포 주소에서 **정상·빈값·오류를 다시** 확인합니다. 내 PC에서 됐다고 배포도 된 것은 아닙니다.

## 4. 고친 뒤 다시 배포하기

1. 내 PC에서 고치고 확인 → GitHub 저장소에서 **Add file → Upload files**로 **바뀐 앱 파일만** 같은 이름으로 다시 올림 → Commit.
2. Vercel이 **자동으로 다시 배포**합니다. **Deployments**에서 가장 위가 **Ready**인지 확인합니다.
3. 짧은 주소를 새로고침(Ctrl+F5)해서 바뀐 내용을 확인합니다.

## 5. 막혔을 때

| 증상 | 원인일 가능성 | 할 일 |
|---|---|---|
| 404 NOT_FOUND | index.html이 하위 폴더에 있음 | 저장소 첫 화면 확인 → Settings에서 Root Directory를 그 폴더로 |
| 화면은 뜨는데 데이터가 비어 있음 | 경로 대소문자 틀림 · fetch 경로 오류 | F12 → Console 첫 오류를 Claude에게 전달 |
| 내 PC에서는 되는데 배포에서만 안 됨 | 파일명 대소문자 · 올리지 않은 파일 | 1절 점검 명령 다시 실행 |
| 저장소가 Import 목록에 없음 | GitHub 앱 권한 | Adjust GitHub App Permissions |
| 카드 입력·Pro 화면 | 유료 경로 | 뒤로 가기 · Hobby 선택 |
| 끝까지 안 되면 | — | 내 PC 화면 캡처 + GitHub 링크로 패들렛 제출. 강사가 따로 봅니다 |

> 오류를 전달할 때: 「배포 주소 __에서 __를 눌렀더니 __가 나왔어. 기대한 결과는 __야. Console 첫 오류: __. 원인을 먼저 설명하고 고칠 파일만 알려줘.」

## 4-1. `app.html`도 자동 배포되나요?

네. **GitHub 저장소를 Vercel 프로젝트에 한 번 연결한 뒤** GitHub에 커밋한 정적 파일은 같은 배포에 함께 들어갑니다.

- `index.html`은 기본 주소 `https://내주소.vercel.app/`에서 열립니다.
- `app.html`은 `https://내주소.vercel.app/app.html`에서 열립니다.
- 따라서 랜딩의 실행 버튼은 `<a href="./app.html">앱 실행</a>`처럼 연결합니다.
- `app.html`만 올리고 `app.js`·`data.js`를 빼면 화면은 열려도 기능은 실패합니다. 네 파일을 함께 올렸는지 확인합니다.
- GitHub에 같은 이름으로 수정 파일을 커밋하면 Vercel이 자동 재배포합니다. **Deployments의 최신 항목이 Ready가 된 뒤** 기본 주소와 `/app.html`을 각각 시크릿 창에서 직접 눌러 확인합니다.

> `index.html`이 하위 폴더에 있거나 Vercel Root Directory가 다르면 기본 주소가 404가 될 수 있습니다. 이때는 저장소 첫 화면과 Vercel의 Root Directory를 먼저 확인합니다.

## 6. Claude Code에 한 번에 맡기는 배포 도우미 명령

아래 명령은 **로그인·권한 승인만 학생이 직접** 하고, 파일 점검·GitHub 업로드 순서·Vercel 설정·두 주소 검사를 Claude Code가 단계별로 안내하게 합니다. 비밀번호·인증 코드·API 키는 대화나 파일에 적지 않습니다.

```text
[Vercel 배포 도우미]
내 현재 프로젝트 폴더를 읽고, 정적 HTML 앱을 GitHub와 Vercel에 안전하게 배포하도록 한 단계씩 안내해.
중요: 비밀번호·인증 코드·API 키를 묻거나 입력하지 마. 로그인·권한 승인·Deploy 버튼은 내가 직접 누른 뒤 "로그인 완료" 또는 "배포 완료"라고 말할 때까지 기다려.

1. 먼저 파일 목록을 표로 보여줘. index.html, app.html, app.js, data.js, test.html(있다면), README.md, docs/가 있는지와 index.html이 최상위인지 확인해.
2. 링크·script·이미지 경로의 대소문자, fetch 사용, 시크릿·개인정보·references/ 관찰용 캡처가 있는지 검사해. 문제를 고치기 전에는 원인과 수정 파일만 보여주고 내 승인을 받아.
3. 내가 GitHub 로그인 완료라고 말하면, 저장소 첫 화면에 올릴 파일만 순서대로 안내해. Ctrl+A·폴더 전체 업로드는 금지하고, 앱 파일과 바뀐 docs만 고르게 해.
4. 내가 GitHub 커밋 완료라고 말하면 Vercel에서 Continue with GitHub → Add New → Project → 해당 저장소 Import → Framework Preset Other → Root Directory 비움 → Deploy 순서를 한 화면씩 안내해. 카드·Pro 화면이면 멈춰.
5. 내가 Vercel Deploy 완료라고 말하면 Deployments의 최신 항목이 Ready인지, Domains의 짧은 주소가 무엇인지 묻게 해.
6. 마지막으로 시크릿 창에서 기본 주소 / 와 /app.html을 각각 열고, 랜딩 CTA가 app.html로 가는지 R-01·R-02·R-03이 기대대로인지 확인 순서를 줘. 내가 실제 결과를 말하면 docs/deploy_check.md와 docs/submission.md에만 기록해.
7. 바뀐 파일을 다시 올리면 자동 재배포되는 원리와, Deployments가 Ready가 된 뒤 다시 검사하는 순서를 알려줘.
[출력] 배포 점검표 + 실제 확인 결과가 적힌 docs/deploy_check.md + 최종 docs/submission.md
```
