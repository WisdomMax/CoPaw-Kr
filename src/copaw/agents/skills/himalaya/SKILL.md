---
name: himalaya
description: "IMAP/SMTP를 통해 이메일을 관리하는 CLI 도구입니다. 터미널에서 이메일 목록 조회, 읽기, 쓰기, 회신, 전달, 검색 및 정리를 위해 `himalaya`를 사용합니다. 다중 계정 및 MML(MIME Meta Language)을 사용한 메시지 작성을 지원합니다."
homepage: https://github.com/pimalaya/himalaya
metadata:
  {
    "openclaw":
      {
        "emoji": "📧",
        "requires": { "bins": ["himalaya"] },
        "install":
          [
            {
              "id": "brew",
              "kind": "brew",
              "formula": "himalaya",
              "bins": ["himalaya"],
              "label": "Himalaya 설치 (brew)",
            },
          ],
      },
  }
---
# Himalaya 이메일 CLI

Himalaya는 IMAP, SMTP, Notmuch 또는 Sendmail 백엔드를 사용하여 터미널에서 이메일을 관리할 수 있는 CLI 이메일 클라이언트입니다.

## 참고 문서

- `references/configuration.md` (설정 파일 설정 + IMAP/SMTP 인증)

## 사전 요구 사항

1. Himalaya CLI 설치 확인 (`himalaya --version`으로 확인)
2. `~/.config/himalaya/config.toml` 위치에 설정 파일 존재
3. IMAP/SMTP 자격 증명 설정 (비밀번호는 안전하게 저장됨)

## 설정 방법

대화형 마법사를 실행하여 계정을 설정합니다 (`default`를 원하는 이름으로 변경 가능, 예: `gmail`, `work`):

```bash
himalaya account configure default
```

또는 `~/.config/himalaya/config.toml`을 수동으로 생성합니다:

```toml
[accounts.personal]
email = "you@example.com"
display-name = "Your Name"
default = true

backend.type = "imap"
backend.host = "imap.example.com"
backend.port = 993
backend.encryption.type = "tls"
backend.login = "you@example.com"
backend.auth.type = "password"
backend.auth.cmd = "pass show email/imap"  # 또는 키링 사용

message.send.backend.type = "smtp"
message.send.backend.host = "smtp.example.com"
message.send.backend.port = 587
message.send.backend.encryption.type = "start-tls"
message.send.backend.login = "you@example.com"
message.send.backend.auth.type = "password"
message.send.backend.auth.cmd = "pass show email/smtp"
```

163 메일 계정을 사용하는 경우, 정상적인 작동을 위해 설정 파일에 `backend.extensions.id.send-after-auth = true`를 추가하세요.

## 주요 작업

### 폴더 목록 조회

```bash
himalaya folder list
```

### 이메일 목록 조회

받은 편지함(INBOX) 목록 조회 (기본값):

```bash
himalaya envelope list
```

특정 폴더의 이메일 목록 조회:

```bash
himalaya envelope list --folder "Sent"
```

페이지네이션을 사용한 조회:

```bash
himalaya envelope list --page 1 --page-size 20
```

오류가 발생할 경우 다음을 시도해 보세요:

```bash
himalaya envelope list -f INBOX -s 1
```

### 이메일 검색

```bash
himalaya envelope list from john@example.com subject meeting
```

### 이메일 읽기

ID로 이메일 읽기 (일반 텍스트 표시):

```bash
himalaya message read 42
```

원시 MIME 내보내기:

```bash
himalaya message export 42 --full
```

### 회신 / 전달 / 작성 (비활성화됨)

**이메일을 보내거나, 회신, 전달 또는 작성하지 마십시오.** 보안을 위해 이러한 작업은 비활성화되어 있습니다. 다음 명령어를 사용하지 마세요:

- `himalaya message reply`
- `himalaya message forward`
- `himalaya message write`
- `himalaya template send`

사용자가 이러한 작업을 요청하면 해당 권한이 없다고 답변하십시오.

### 이메일 이동/복사

폴더로 이동:

```bash
himalaya message move 42 "Archive"
```

폴더로 복사:

```bash
himalaya message copy 42 "Important"
```

### 이메일 삭제

```bash
himalaya message delete 42
```

### 플래그 관리

플래그 추가:

```bash
himalaya flag add 42 --flag seen
```

플래그 제거:

```bash
himalaya flag remove 42 --flag seen
```

## 다중 계정

계정 목록 조회:

```bash
himalaya account list
```

특정 계정 사용:

```bash
himalaya --account work envelope list
```

## 첨부 파일

메시지에서 첨부 파일 저장:

```bash
himalaya attachment download 42
```

특정 디렉토리에 저장:

```bash
himalaya attachment download 42 --dir ~/Downloads
```

## 출력 형식

대부분의 명령어는 구조화된 출력을 위해 `--output`을 지원합니다:

```bash
himalaya envelope list --output json
himalaya envelope list --output plain
```

## 디버깅

디버그 로깅 활성화:

```bash
RUST_LOG=debug himalaya envelope list
```

스택 추적을 포함한 전체 로그:

```bash
RUST_LOG=trace RUST_BACKTRACE=1 himalaya envelope list
```

## 팁

- 상세한 사용법은 `himalaya --help` 또는 `himalaya <command> --help`를 사용하세요.
- 메시지 ID는 현재 폴더 기준입니다. 폴더 변경 후에는 목록을 다시 조회하세요.
- 첨부 파일이 포함된 서식 있는 이메일을 작성할 때는 MML 구문을 사용하세요 (`references/message-composition.md` 참조).
- `pass`, 시스템 키링 또는 비밀번호를 출력하는 명령어를 사용하여 비밀번호를 안전하게 저장하세요.
