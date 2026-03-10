# CoPaw 기여 가이드

## 환영합니다! 🐾

CoPaw에 관심을 가져주셔서 감사합니다! CoPaw는 오픈 소스 **개인 AI 비서**로, 로컬 환경이나 클라우드 등 당신만의 환경에서 실행할 수 있습니다. 딩톡, 페이슈, QQ, Discord, iMessage 등 다양한 채팅 앱과 연결되며, 예약 작업 및 심장박동(Heartbeat) 메커니즘을 지원하고 **Skills**를 통해 능력을 확장할 수 있습니다. 새로운 채널 추가, 새로운 모델 제공업체 연동, Skill 개발, 문서 개선, 버그 수정 등 CoPaw를 모두에게 더 유용하게 만드는 모든 기여를 열렬히 환영합니다.

**빠른 링크:** [GitHub](https://github.com/agentscope-ai/CoPaw) · [문서](https://copaw.agentscope.io/) · [라이선스: Apache 2.0](LICENSE)

---

## 기여 방법

원활한 협업과 품질 유지를 위해 다음 가이드를 준수해 주세요.

### 1. 기존 계획 및 이슈 확인 

시작하기 전에:

- **[Open Issues](https://github.com/agentscope-ai/CoPaw/issues)**와 [Projects] 또는 로드맵 태그를 확인하세요.
- **관련 이슈가 이미 있고** 열려 있거나 할당되지 않은 상태라면: 중복 작업을 피하기 위해 해당 이슈에 처리 의사를 댓글로 남겨주세요.
- **관련 이슈가 없다면**: 제안 내용을 담은 새로운 이슈를 생성하세요. 유지관리자가 프로젝트 방향성과 일치하는지 확인하고 답변을 드릴 것입니다.

### 2. 커밋 메시지 형식

명확한 히스토리 기록과 도구 지원을 위해 [Conventional Commits](https://www.conventionalcommits.org/) 규격을 따릅니다.

**형식:**
```
<type>(<scope>): <subject>
```

**타입(Type):**
- `feat:` 새로운 기능
- `fix:` 버그 수정
- `docs:` 문서 변경만 해당
- `style:` 코드 스타일 (공백, 포맷 등)
- `refactor:` 버그 수정이나 기능 추가가 아닌 코드 변경
- `perf:` 성능 개선
- `test:` 테스트 추가 또는 업데이트
- `chore:` 빌드, 도구 또는 유지보수

**예시:**
```bash
feat(channels): add Telegram channel stub
fix(skills): correct SKILL.md front matter parsing
docs(readme): update quick start for Docker
refactor(providers): simplify custom provider validation
test(agents): add tests for skill loading
```

### 3. Pull Request 제목 형식

PR 제목도 동일한 규칙을 따라야 합니다.

**형식:** ` <type>(<scope>): <description> `

- 다음 중 하나를 사용하세요: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `perf`, `style`, `build`, `revert`.
- **scope는 반드시 소문자**여야 합니다 (영문자, 숫자, 하이픈, 언더바만 가능).
- 설명은 짧으면서도 핵심을 담아야 합니다.

**예시:**
```
feat(models): add custom provider for Azure OpenAI
fix(channels): handle empty content_parts in Discord
docs(skills): document Skills Hub import
```

### 4. 코드 및 품질 관리

- **로컬 필수 검증 (Push/PR 제출 전 반드시 통과해야 함):**
  ```bash
  pip install -e ".[dev]"
  pre-commit install
  pre-commit run --all-files
  pytest
  ```
- **pre-commit이 자동으로 파일을 수정한 경우:** 해당 수정을 먼저 커밋한 후, 수정 사항이 없을 때까지 `pre-commit run --all-files`를 반복 실행하여 통과시켜야 합니다.
- **CI 정책:** pre-commit 검사가 실패한 PR은 머지 준비가 되지 않은 것(not merge-ready)으로 간주됩니다.
- **프론트엔드 코드 포맷팅:** `console` 또는 `website` 디렉토리를 수정했다면 제출 전 포맷팅을 실행하세요:
  ```bash
  cd console && npm run format
  cd website && npm run format
  ```
- **문서화:** 사용자에게 영향을 주는 동작을 추가하거나 변경할 때는 문서와 README를 업데이트하세요. 문서는 `website/public/docs/` 아래에 있습니다.

---

## 기여 유형

CoPaw는 **확장 가능하도록** 설계되었습니다: 모델, 채널, Skills 등을 추가할 수 있습니다.

### 새로운 모델 / 제공업체 추가

CoPaw는 클라우드 API(DashScope, ModelScope), **Ollama**, 로컬 백엔드(**llama.cpp**, **MLX**) 등 **다양한 모델 백엔드**를 지원합니다.

#### A. 커스텀 제공업체 (사용자 설정)
OpenAI와 호환되는 모든 API(vLLM, SGLang 등)는 코드 수정 없이 Console이나 `providers.json`을 통해 설정할 수 있습니다.

#### B. 새로운 내장 제공업체 또는 ChatModel (코드 기여)
**새로운 내장 제공업체**나 **OpenAI와 호환되지 않는 새 API 프로토콜**을 추가하려는 경우:
1. `src/copaw/providers/registry.py`에 `ProviderDefinition`을 추가합니다.
2. API 프로토콜이 다른 경우 `agentscope.model.ChatModelBase`를 상속받는 클래스를 구현합니다.
3. 문서에 새로운 제공업체나 모델 정보를 기록합니다.

### 새로운 채널 추가

채널은 CoPaw가 **딩톡, 페이슈, QQ, Discord, iMessage** 등과 통신하는 방식입니다.
- 모든 채널은 통합된 계약을 따릅니다: **Native Payload → `content_parts`**.
- `src/copaw/app/channels/base.py`의 `BaseChannel`을 상속받아 구현합니다.
- 내장 채널은 `src/copaw/app/channels/registry.py`에 등록하며, 커스텀 채널은 작업 디렉토리에서 로드할 수 있습니다.

### 기초 Skills 추가

**Skills**는 CoPaw가 할 수 있는 일(예약 작업, 파일 읽기, 브라우징 등)을 정의합니다.
- 각 skill은 `SKILL.md`(에이전트 지침)를 포함하는 **디렉토리** 구조입니다.
- 내부적으로 `agents/skills/` 아래에 위치하며 자동으로 로드됩니다.
- 지침은 명확하고 작업 지향적이어야 합니다. 모델이 정확히 식별할 수 있도록 명확한 `description`과 트리거 키워드를 포함하세요.

---

## 플랫폼 지원 (Windows, Linux, macOS 등)

CoPaw는 모든 주요 운영체제에서 원활하게 동작하는 것을 목표로 합니다.
- **호환성 수정:** 경로 처리, 셸 명령어, OS별 의존성 문제 해결 기여를 환영합니다.
- **설정 및 실행:** 모든 플랫폼에서 `copaw init` / `copaw app`이 정상 동작해야 합니다.
- 플랫폼 전용 기능을 추가할 때는 다른 플랫폼의 동작을 방해하지 않도록 주의하세요.

---

## 기여 시 주의 사항

### ✅ 권장 사항
- 작고 집중된 변경부터 시작하세요.
- 대규모 변경이나 디자인 변경은 이슈에서 먼저 논의하세요.
- 사용자 변경 사항에 대해 문서를 업데이트하세요.

### ❌ 금지 사항
- 사전 논의 없는 거대 PR 오픈.
- CI나 pre-commit 실패 무시.
- 한 PR에 서로 관련 없는 여러 변경 사항 혼합.
- 충분한 이유나 마이그레이션 가이드 없는 기존 API 파괴.

---

## 도움 받기
- **토론:** [GitHub Discussions](https://github.com/agentscope-ai/CoPaw/discussions)
- **이슈:** [GitHub Issues](https://github.com/agentscope-ai/CoPaw/issues)
- **커뮤니티:** 딩톡 그룹(README 참고) 및 [Discord](https://discord.gg/eYMpfnkG8h)

CoPaw를 더 나은 비서로 만들어주셔서 감사합니다. 🐾
