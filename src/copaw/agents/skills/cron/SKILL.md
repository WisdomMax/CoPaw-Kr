---
name: cron
description: copaw 명령어를 통해 예약 작업(Cron Jobs)을 관리합니다 - 작업 생성, 조회, 일시정지, 재개, 삭제
metadata: { "copaw": { "emoji": "⏰" } }
---

# 예약 작업(Cron) 관리

`copaw cron` 명령어를 사용하여 예약 작업을 관리합니다.

## 주요 명령어

```bash
# 모든 작업 목록 확인
copaw cron list

# 작업 상세 정보 확인
copaw cron get <job_id>

# 작업 상태(실행 중 여부 등) 확인
copaw cron state <job_id>

# 작업 삭제
copaw cron delete <job_id>

# 작업 일시정지/재개
copaw cron pause <job_id>
copaw cron resume <job_id>

# 지금 즉시 한 번 실행
copaw cron run <job_id>
```

## 작업 생성

다음 두 가지 작업 유형을 지원합니다:
- **text**: 정해진 시간에 특정 메시지를 채널로 전송
- **agent**: 정해진 시간에 에이전트에게 질문하고 그 답변을 채널로 전송

### 빠른 생성 예시

```bash
# 매일 오전 9:00에 텍스트 메시지 전송
copaw cron create \
  --type text \
  --name "아침 인사" \
  --cron "0 9 * * *" \
  --channel imessage \
  --target-user "CHANGEME" \
  --target-session "CHANGEME" \
  --text "좋은 아침입니다!"

# 2시간마다 에이전트에게 할 일 체크 질문
copaw cron create \
  --type agent \
  --name "할 일 체크" \
  --cron "0 */2 * * *" \
  --channel dingtalk \
  --target-user "CHANGEME" \
  --target-session "CHANGEME" \
  --text "지금 제가 처리해야 할 할 일이 무엇인가요?"
```

### 필수 매개변수

작업 생성 시 다음 정보가 필요합니다:
- `--type`: 작업 유형 (text 또는 agent)
- `--name`: 작업 이름
- `--cron`: cron 표현식 (예: `"0 9 * * *"` 는 매일 9:00 의미)
- `--channel`: 대상 채널 (imessage / discord / dingtalk / qq / console)
- `--target-user`: 사용자 식별자
- `--target-session`: 세션 식별자
- `--text`: 메시지 내용 (text 유형) 또는 질문 내용 (agent 유형)

### JSON 파일을 이용한 생성 (복잡한 설정 시)

```bash
copaw cron create -f job_spec.json
```

## Cron 표현식 예시

```
0 9 * * *      # 매일 오전 9:00
0 */2 * * *    # 2시간마다
30 8 * * 1-5   # 평일(월-금) 오전 8:30
0 0 * * 0      # 매주 일요일 자정
*/15 * * * *   # 15분마다
```

## 사용 팁

- 매개변수가 부족한 경우, 사용자에게 추가 정보를 요청한 후 생성하세요.
- 일시정지/삭제/재개 전에는 `copaw cron list`로 먼저 `job_id`를 확인하세요.
- 문제가 발생하면 `copaw cron state <job_id>`로 상태를 점검하세요.
- 사용자에게 명령어를 안내할 때는 복사해서 바로 쓸 수 있도록 완성된 형태로 제공하세요.
