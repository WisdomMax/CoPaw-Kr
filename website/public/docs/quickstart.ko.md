# 빠른 시작

이 섹션에서는 CoPaw를 실행하는 6가지 방법을 설명합니다:

- **옵션 A — 스크립트 설치**: Python 설정 없이 사용자의 머신에서 바로 실행합니다.
- **옵션 B — pip 설치**: Python 환경을 직접 관리하고 싶은 경우에 사용합니다.
- **옵션 C — 데스크탑 애플리케이션 (Beta)**: 터미널에 익숙하지 않은 사용자를 위해 설치 프로그램을 제공합니다. [데스크탑 가이드](./desktop)를 참조하세요.
- **옵션 D — ModelScope Studio**: 로컬 설치 없이 클릭 한 번으로 클라우드에 배포합니다.
- **옵션 E — Docker**: Docker Hub의 공식 이미지를 사용합니다. `latest`(안정 버전)와 `pre`(출시 전 버전) 태그를 제공합니다.
- **옵션 F — Alibaba Cloud ECS**: 로컬 설치 없이 Alibaba Cloud에 원클릭 배포합니다.

> 📖 먼저 [소개](./intro)를 읽어보세요. 설치 후에는 [콘솔](./console) 가이드를 확인하세요.

> 💡 **설치 및 시작 후**: 채널을 설정하기 전에 [콘솔](./console) (`http://127.0.0.1:8088/`)을 열어 CoPaw와 대화하고 에이전트를 설정해 볼 수 있습니다. 다른 메시징 앱(Discord 등)을 연결할 준비가 되면 [채널](./channels)에서 추가하세요.

---

## 옵션 A: 스크립트 설치

Python이 설치되어 있지 않아도 됩니다. 설치 프로그램이 [uv](https://docs.astral.sh/uv/)를 사용하여 모든 과정을 자동으로 처리합니다.

### 1단계: 설치

**macOS / Linux:**

```bash
curl -fsSL https://copaw.agentscope.io/install.sh | bash
```

그 후 새 터미널을 열거나 `source ~/.zshrc` (또는 `source ~/.bashrc`)를 실행하세요.

**Windows (CMD):**

```cmd
curl -fsSL https://copaw.agentscope.io/install.bat -o install.bat && install.bat
```

**Windows (PowerShell):**

```powershell
irm https://copaw.agentscope.io/install.ps1 | iex
```

설치 프로그램이 CoPaw를 PATH에 자동으로 추가하므로, 그 후 새 터미널을 열어 사용하세요.

### 2단계: 최적화 및 초기화

작업 디렉토리(기본값 `~/.copaw`)에 `config.json`과 `HEARTBEAT.md`를 생성합니다. 두 가지 방법이 있습니다:

- **기본값 사용** (질문 없음; 빠르게 실행 후 나중에 설정을 편집할 때 유용):
  ```bash
  copaw init --defaults
  ```
- **대화형 설정** (하트비트 간격, 대상, 활성 시간, 채널 및 스킬 설정을 하나씩 묻습니다):
  ```bash
  copaw init
  ```
  자세한 내용은 [CLI - 시작하기](./cli#getting-started)를 참조하세요.

기존 설정을 덮어쓰려면 `copaw init --force`를 사용하세요. 초기화 후 채널이 활성화되지 않았다면 [채널](./channels) 가이드를 따라 채널을 추가하세요.

### 3단계: 서버 시작

```bash
copaw app
```

서버는 기본적으로 `127.0.0.1:8088`에서 대기합니다. 채널을 이미 설정했다면 CoPaw가 해당 채널에서 응답하며, 그렇지 않다면 이 단계 이후에 [채널](./channels)을 통해 추가할 수 있습니다.

---

## 옵션 B: pip 설치

Python 환경을 직접 관리하려는 경우 (Python >= 3.10, < 3.14 필요):

```bash
pip install copaw
```

권장 사항: 가상 환경을 먼저 만들고 활성화하세요 (`python -m venv .venv`, 그 후 `source .venv/bin/activate` 또는 Windows의 경우 `.venv\Scripts\Activate.ps1`). 그 후 `copaw` 명령어를 사용할 수 있습니다.

그다음 위의 [2단계: 초기화](#2단계-최적화-및-초기화)와 [3단계: 서버 시작](#3단계-서버-시작)을 따르세요.

---

## 옵션 C: 데스크탑 애플리케이션 (Beta)

명령줄 도구 사용이 어렵다면 데스크탑 애플리케이션을 다운로드하여 Python 환경 설정 없이 바로 사용할 수 있습니다.

### 특징

- ✅ **설정 불필요**: Python 설치나 환경 변수 설정 없이 다운로드 후 실행만 하면 됩니다.
- ✅ **크로스 플랫폼**: Windows 10+ 및 macOS 14+(Apple Silicon 권장)를 지원합니다.
- ✅ **시각적 인터페이스**: 자동으로 브라우저 인터페이스를 열어주므로 주소를 수동으로 입력할 필요가 없습니다.
- ⚠️ **베타 단계**: 기능이 지속적으로 개선 중입니다.

### 다운로드 및 사용

1. **설치 파일 다운로드**
   [GitHub Releases](https://github.com/agentscope-ai/CoPaw/releases)에서 운영체제에 맞는 버전을 받으세요:
   - Windows: `CoPaw-Setup-<version>.exe`
   - macOS: `CoPaw-<version>-macOS.zip`

2. **설치 및 실행**
   - **Windows**: `.exe` 파일을 실행하여 마법사를 따르고 바탕화면 바로가기를 통해 실행합니다.
   - **macOS**: `.zip` 압축을 풀어 `CoPaw.app`을 얻습니다. 처음에 우클릭 후 "열기"를 선택하여 보안 제한을 우회해야 할 수 있습니다.

3. **참고 사항**
   첫 실행 시 시스템 성능에 따라 Python 환경 초기화 및 의존성 로딩에 10~60초가 소요될 수 있습니다. 브라우저 창이 자동으로 열릴 때까지 기다려 주세요.

자세한 내용은 **[데스크탑 애플리케이션 전체 가이드](./desktop)**를 참조하세요.

---

## 옵션 E: Docker

이미지가 **Docker Hub**(`agentscope/copaw`)에 등록되어 있습니다. `latest`(안정판) 또는 `pre`(사전 출시판) 태그를 사용하세요.

```bash
docker pull agentscope/copaw:latest
docker run -p 127.0.0.1:8088:8088 -v copaw-data:/app/working agentscope/copaw:latest
```

그 후 브라우저에서 **http://127.0.0.1:8088/**을 열어 콘솔을 사용하세요. 설정, 메모리, 스킬은 `copaw-data` 볼륨에 저장됩니다. API 키를 전달하려면 `docker run` 시 `-e DASHSCOPE_API_KEY=xxx` 등을 추가하세요.

---

## 설치 확인 (선택 사항)

서버가 실행된 후 에이전트 API를 호출하여 설정이 올바른지 확인할 수 있습니다.
엔드포인트: **POST** `/api/agent/process`, JSON 바디, SSE 스트리밍.

```bash
curl -N -X POST "http://localhost:8088/api/agent/process" \
  -H "Content-Type: application/json" \
  -d '{"input":[{"role":"user","content":[{"type":"text","text":"안녕하세요"}]}],"session_id":"session123"}'
```

---

## 다음 단계

- **대화하기** — [채널](./channels)을 하나 연결(Discord 등이 좋습니다)하고 메시지를 보내보세요.
- **예약된 체크인 실행** — [하트비트](./heartbeat)에서 `HEARTBEAT.md`를 편집하고 간격과 응답 대상을 설정하세요.
- **더 많은 명령어** — [CLI](./cli) 및 [스킬](./skills) 가이드를 확인하세요.
- **작업 디렉토리 변경** — [설정 및 작업 디렉토리](./config)를 참조하세요.
