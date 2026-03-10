---
name: news
description: "지정된 뉴스 사이트에서 사용자를 위한 최신 뉴스를 찾아봅니다. 정치, 경제, 사회, 국제, IT/과학, 스포츠, 연애 부문의 주요 언론사 URL을 제공합니다. browser_use를 사용하여 각 URL을 열고 snapshot으로 내용을 가져온 뒤 사용자에게 요약해 줍니다."
metadata:
  {
    "copaw":
      {
        "emoji": "📰",
        "requires": {}
      }
    }
---

# 뉴스 참조 가이드 (News Reference)

사용자가 "최신 뉴스 알려줘", "오늘 뉴스 뭐야?", "X 분야 뉴스 보여줘"와 같이 요청하면, 아래의 카테고리 및 URL과 함께 **browser_use** 도구를 사용하세요. 페이지를 열고 스냅샷을 찍은 뒤, 헤드라인과 핵심 내용을 추출하여 사용자에게 답변하세요.

## 카테고리 및 출처 (한국 주요 언론사)

| 카테고리 | 언론사 | URL |
|---------------|---------------------------|-----|
| **정치** | 네이버 뉴스 - 정치 | https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100 |
| **경제** | 네이버 뉴스 - 경제 | https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101 |
| **사회** | 네이버 뉴스 - 사회 | https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=102 |
| **국제** | 네이버 뉴스 - 세계 | https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=104 |
| **IT/과학** | 네이버 뉴스 - IT/과학 | https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105 |
| **스포츠** | 네이버 스포츠 | https://sports.news.naver.com/index.nhn |
| **연애** | 네이버 TV연예 | https://entertain.naver.com/home |

## 사용 방법 (browser_use 도구 이용)

1. **사용자 요구 파악**: 어떤 카테고리(정치 / 경제 / 사회 / 국제 / IT / 스포츠 / 연애 등)를 원하는지 확인하거나, 1~2개를 선택하여 가져옵니다.
2. **URL 선택**: 표에서 카테고리에 맞는 URL을 선택합니다. 여러 카테고리인 경우 각 URL에 대해 아래 단계를 반복합니다.
3. **페이지 열기**: **browser_use**를 다음 매개변수와 함께 호출합니다:
   ```json
   {"action": "open", "url": "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100"}
   ```
   `url`을 표의 해당 URL로 교체하세요.
4. **스냅샷 찍기**: 동일한 세션에서 **browser_use**를 다시 호출합니다:
   ```json
   {"action": "snapshot"}
   ```
   반환된 페이지 내용에서 헤드라인, 날짜, 요약 내용을 추출합니다.
5. **요약 답변**: 시간순 또는 중요도 순으로 짧은 목록(헤드라인 + 한두 문장 요약 + 출처)을 구성합니다. 사이트에 접속할 수 없거나 시간 초과가 발생하면 사용자에게 알리고 다른 출처를 제안하세요.

## 주의 사항

- 사이트 업데이트 시 페이지 구조가 변경될 수 있습니다. 추출에 실패하면 사용자에게 직접 링크를 열어 확인하도록 안내하세요.
- 여러 카테고리를 방문할 때는 각 URL마다 `open` 후 `snapshot`을 실행하여 다른 페이지의 내용이 섞이지 않도록 하세요.
- 사용자가 직접 확인할 수 있도록 답변에 원본 링크를 포함하는 것이 좋습니다.
