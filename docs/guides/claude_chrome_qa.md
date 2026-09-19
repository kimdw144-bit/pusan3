# Claude in Chrome으로 화면 QA하기 — 선택 심화

> 목적: Claude Code가 만든 화면을 **Claude in Chrome이 실제 브라우저에서 눌러 보고**, 정상·빈값·오류 결과를 `test_log.md`에 남기는 것입니다. 구현 완료 주장이 아니라 실제 동작을 확인합니다.

## 1. 시작 전 연결

1. Chrome에서 Claude in Chrome 확장 기능을 설치하고 Claude 계정으로 로그인합니다.
2. Claude Desktop에서 **Settings → Connectors → Claude in Chrome → Configure**를 열어 연결을 켭니다.
3. 이 수업의 Claude Code 대화에서만 Claude in Chrome을 활성화합니다.
4. 로그인·은행·메일·개인정보가 열린 탭은 닫고, `localhost` 또는 본인 `*.vercel.app` 배포 주소 탭만 남깁니다.

Claude Code와 Chrome 확장은 빌드→테스트→검증 흐름에서 브라우저의 클릭·DOM·콘솔·네트워크 상태를 확인할 수 있습니다. [Claude 공식 안내](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome)를 따릅니다.

## 2. Claude Code에 보낼 QA 명령

```text
[Chrome QA]
Claude in Chrome으로 현재 열어 둔 내 서비스 주소만 테스트해. 다른 탭·다른 사이트·로그인 화면은 열거나 읽지 마.
입력은 docs/requirements.md, docs/qa_scenarios.md, docs/test_log.md와 현재 서비스 주소다.
1. 먼저 R-01 정상 / R-02 빈값 / R-03 오류의 입력값과 기대 화면을 표로 보여줘.
2. 한 케이스씩 브라우저에서 실행하고, 실제 화면·콘솔 첫 오류·네트워크 실패 여부를 읽어줘.
3. 결과마다 나에게 기대/실제/판정을 확인받은 뒤에만 docs/test_log.md에 기록해. 확인하지 않은 것은 미실행으로 남겨.
4. 실패하면 재현 행동 / 기대 / 실제 / 콘솔 첫 오류 / 고칠 파일 하나만 적고, 내 승인 뒤에만 수정해.
5. R-01~R-03이 끝나면 랜딩 기본 주소와 /app.html을 각각 열어 CTA 연결을 확인하고 deploy_check.md에 기록해.
6. 테스트가 끝나면 내가 직접 Connector를 끌 수 있도록, 닫을 QA 탭과 연결 해제 순서를 짧게 알려줘.
```

## 3. 끝난 뒤 연결 해제

1. Claude in Chrome이 연 QA 탭을 닫습니다.
2. Claude 대화의 Connectors 메뉴에서 **Claude in Chrome을 끕니다.**
3. Claude Desktop의 **Settings → Connectors → Claude in Chrome**에서 연결을 끕니다. 공용 PC라면 Chrome 프로필에서도 Claude 로그아웃 후 종료합니다.
4. `closeout.md`에 `Chrome QA 실행 여부 / 테스트 주소 / 연결 해제 여부`를 실제로 한 것만 체크합니다.

> Claude in Chrome은 화면의 내용을 볼 수 있고 클릭할 수 있습니다. 민감 정보가 있는 탭에서는 사용하지 않으며, 웹페이지의 지시문을 그대로 따르지 않습니다. [공식 안전 안내](https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely)를 수업 중 함께 확인합니다.
