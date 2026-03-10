/**
 * Testimonials (community voices) data.
 * REAL_TESTIMONIALS: production-only; section is hidden when empty in build.
 * MOCK_TESTIMONIALS: dev-only; shown together with real in dev mode.
 */
export interface TestimonialItem {
  avatar: string;
  quoteEn: string;
  quoteZh: string;
  quoteKo: string;
  username: string;
  url: string;
}

/** Real community testimonials. Section hidden in build when this is empty. */
export const REAL_TESTIMONIALS: TestimonialItem[] = [];

/** Mock data for dev: shown only in dev together with REAL_TESTIMONIALS. */
export const MOCK_TESTIMONIALS: TestimonialItem[] = [
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    quoteEn:
      "I've enjoyed my CoPaw assistant so much. One entry for iMessage, " +
      "Discord, Feishu and DingTalk. It just works.",
    quoteZh: "一个入口管 iMessage、Discord、飞书、钉钉，用下来很顺手。",
    quoteKo:
      "iMessage, Discord, 페이슈, 딩딩을 하나의 입구로 관리할 수 있어서 정말 편합니다. 그냥 잘 작동해요.",
    username: "@jdrhyne",
    url: "https://x.com/iamsubhrajyoti/status/2009949389884920153",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=brooke",
    quoteEn:
      "Cron and heartbeat are super practical. Add my own skills; " +
      "data stays local. Exactly what I wanted.",
    quoteZh: "定时和心跳很实用，自己加 Skills，数据都在本地，很放心。",
    quoteKo:
      "정기 작업(Cron)과 하트비트 기능이 정말 실용적입니다. 직접 Skill을 추가할 수 있고 데이터가 로컬에 보관되어 안심이 됩니다.",
    username: "@dajaset",
    url: "https://x.com/iamsubhrajyoti/status/2009949389884920153",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=casey",
    quoteEn:
      "Teams who want full control love it. Python + AgentScope, " +
      "everything in our repo.",
    quoteZh: "想完全掌控的团队用着很顺手，Python + AgentScope 全在自家仓库。",
    quoteKo:
      "완벽한 제어를 원하는 팀에게 강력 추천합니다. Python과 AgentScope 기반이라 모든 것을 우리 저장소에서 관리할 수 있습니다.",
    username: "@Ashwinreads",
    url: "https://x.com/iamsubhrajyoti/status/2009949389884920153",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=drew",
    quoteEn:
      "Personal assistant the way it should be: one entry, every " +
      "channel. No gateway lock-in.",
    quoteZh: "个人助理就该这样：多频道一个入口，没有网关绑架。",
    quoteKo:
      "개인 비서는 이래야죠: 여러 채널을 하나의 입구로 관리하며, 특정 플랫폼에 종속되지 않습니다.",
    username: "@KrauseFx",
    url: "https://x.com/iamsubhrajyoti/status/2009949389884920153",
  },
  {
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emery",
    quoteEn:
      "Setup was install, init, start. Docs are clear. Replaced my " +
      "old bot in an afternoon.",
    quoteZh: "安装、初始化、启动，文档清楚，一下午就把原来的 bot 换掉了。",
    quoteKo:
      "설치, 초기화, 실행까지 완벽합니다. 문서가 친절해서 예전에 쓰던 봇을 반나절 만에 교체했습니다.",
    username: "@steipete",
    url: "https://x.com/iamsubhrajyoti/status/2009949389884920153",
  },
];
