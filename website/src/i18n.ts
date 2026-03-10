export type Lang = "ko" | "zh" | "en";

export const i18n: Record<Lang, Record<string, string>> = {
  ko: {
    "nav.docs": "문서",
    "nav.more": "더 보기",
    "nav.releaseNotes": "업데이트 로그",
    "nav.download": "다운로드",
    "nav.github": "GitHub",
    "nav.githubComingSoon": "준비 중",
    "nav.lang": "한국어",
    "nav.agentscopeTeam": "AgentScope",
    "hero.slogan": "당신이 필요한 것을 이해하고, 항상 곁에 있습니다",
    "hero.sub":
      "당신의 AI 개인 비서; 설치가 매우 간편하며 로컬 및 클라우드 모두 배포 가능합니다; 다양한 채널 연동 및 손쉬운 능력 확장을 지원합니다.",
    "hero.cta": "문서 보기",
    "follow.title": "팔로우하기",
    "follow.sub": "CoPaw의 최신 소식을 가장 먼저 확인하세요",
    "follow.xiaohongshu": "샤오홍슈:",
    "follow.x": "X:",
    "brandstory.title": "Why CoPaw?",
    "brandstory.para1":
      "CoPaw는 '당신의 파트너 작은 발바닥'(co-paw)이자, Co Personal Agent Workstation(협업 개인 지능형 워크스테이션)을 의미합니다.",
    "brandstory.para2":
      "우리는 그것이 차가운 도구가 아니라, 언제든 도울 준비가 된 따뜻한 '작은 발바닥'이자 당신의 디지털 생활에서 가장 호흡이 잘 맞는 파트너가 되기를 바랍니다.",
    "features.title": "핵심 능력",
    "features.channels.title": "전 영역 도달",
    "features.channels.desc":
      "딩딩, 페이슈, QQ, Discord, iMessage 등 다양한 채널을 지원하며, 하나의 CoPaw로 필요에 따라 연결합니다.",
    "features.private.title": "당신의 제어",
    "features.private.desc":
      "기억과 개인화는 당신이 제어하며, 로컬 혹은 클라우드 모두 가능합니다; 정기 작업 및 협업을 지정된 채널로 발송합니다.",
    "features.skills.title": "Skills 확장",
    "features.skills.desc":
      "내장된 정기 작업(Cron), 사용자 정의 스킬 디렉토리, CoPaw가 자동으로 로드합니다.",
    "features.skills.viewAll": "전체 보기",
    "testimonials.title": "커뮤니티 반응",
    "testimonials.viewAll": "전체 보기",
    "testimonials.1":
      "CoPaw는 이래야죠: 여러 채널을 하나의 입구로, Python으로 수정과 배포가 쉽습니다.",
    "testimonials.2":
      "정기 작업과 하트비트 기능이 매우 유용합니다. 스킬을 직접 추가할 수 있고 데이터는 로컬에 보관됩니다.",
    "testimonials.3": "완벽한 제어를 원하는 팀에게 매우 적합합니다.",
    "usecases.title": "CoPaw로 무엇을 할 수 있나요",
    "usecases.sub": "",
    "usecases.category.social": "소셜 미디어",
    "usecases.category.creative": "창의 및 구축",
    "usecases.category.productivity": "생산성",
    "usecases.category.research": "연구 및 학습",
    "usecases.category.assistant": "데스크톱 및 파일",
    "usecases.category.explore": "더 탐색하기",
    "usecases.social.1":
      "샤오홍슈, 지후, Reddit에서 관심 있는 인기 게시물을 매일 요약하여 푸시하고, 피드백에 따라 추천을 최적화합니다.",
    "usecases.social.2":
      "Bilibili, YouTube 관심 채널이나 키워드의 새 영상을 매일 긁어와 요약을 생성하여 탐색 시간을 절약합니다.",
    "usecases.social.3":
      "샤오홍슈, 지후 등 계정의 콘텐츠 패턴과 특징을 분석하여 콘텐츠 창작에 참고 자료를 제공합니다.",
    "usecases.creative.1":
      "잠들기 전 CoPaw에게 목표를 설명하고 자동 실행을 설정하면, 다음 날 바로 사용 가능한 결과물을 얻을 수 있습니다.",
    "usecases.creative.2":
      "주제 선정, 소재 찾기부터 방향 설정까지, CoPaw가 영상 콘텐츠 제작의 전 과정을 지원합니다.",
    "usecases.productivity.1":
      "뉴스레터와 중요 이메일을 매일 요약하여 딩딩, 페이슈 또는 QQ 메시지로 푸시합니다.",
    "usecases.productivity.2":
      "이메일과 캘린더에서 연락처를 자동으로 정리하며, 자연어 질의를 통해 연락처 및 교류 기록을 조회할 수 있습니다.",
    "usecases.productivity.3":
      "식단과 신체 반응을 기록하고, CoPaw가 정기적으로 분석하여 패턴을 보여줍니다.",
    "usecases.research.1":
      "기술 및 AI 기업의 실적 발표와 중요 뉴스를 자동으로 추적하고 핵심 내용을 요약하여 생성합니다.",
    "usecases.research.2":
      "링크, 기사, 게시물을 개인 지식창고에 저장하여 다양한 상황에서 쉽게 검색하고 재사용할 수 있습니다.",
    "usecases.assistant.1":
      "로컬 파일 정리 및 검색, 문서 읽기 및 요약을 지원하며, 딩딩, 페이슈 또는 QQ 대화창에서 명령으로 지정된 파일을 전송할 수 있습니다.",
    "usecases.explore.1":
      "더 많은 가능성을 탐색해 보세요. Skills와 정기 작업을 조합하여 자신만의 agentic app을 만들 수 있습니다.",
    "quickstart.title": "빠른 시작",
    "quickstart.serviceNotice":
      "단 몇 분 만에 당신만의 AI 비서를 만나보세요. 한 줄의 명령어 혹은 실행 파일 더블 클릭으로 누구나 쉽게 설정할 수 있습니다.",
    "quickstart.hintBefore": "설치 → 초기화 → 실행; 채널 설정은 ",
    "quickstart.hintLink": "문서",
    "quickstart.hintAfter":
      "를 참조하여 딩딩, 페이슈, QQ 등에서 CoPaw를 사용해 보세요.",
    "quickstart.method.pip": "pip",
    "quickstart.method.script": "스크립트 설치",
    "quickstart.method.docker": "Docker",
    "quickstart.method.cloud": "클라우드 배포",
    "quickstart.method.desktop": "데스크톱 앱",
    "quickstart.desc.pip": "Python 환경을 직접 관리하는 사용자에게 적합합니다.",
    "quickstart.desc.script":
      "Python을 직접 설정할 필요 없이 한 줄의 명령어로 설치를 완료합니다. 스크립트가 uv(Python 패키지 관리자)를 다운로드하고 가상 환경 생성, CoPaw 및 의존성(Node.js 및 프론트엔드 리소스 포함) 설치를 자동으로 수행합니다. 주의: 일부 네트워크 환경이나 기업 보안 정책에 따라 사용이 제한될 수 있습니다.",
    "quickstart.desc.docker":
      "공식 Docker 이미지를 사용하여 환경 격리 및 관리가 용이한 빠른 배포를 지원합니다.",
    "quickstart.desc.cloud":
      "로컬 환경 설정 없이 클라우드에서 클릭 한 번으로 배포하거나 온라인에서 실행합니다.",
    "quickstart.desc.desktop":
      "완전한 Python 환경과 모든 의존성, 프론트엔드 리소스가 포함된 독립 데스크톱 앱입니다. 터미널이나 사전 도구 설치 없이 더블 클릭만으로 바로 사용 가능합니다.",
    "quickstart.platform.mac": "macOS / Linux",
    "quickstart.platform.windows": "Windows",
    "quickstart.shell.cmd": "CMD",
    "quickstart.shell.ps": "PowerShell",
    "quickstart.docker.hub": "Docker Hub",
    "quickstart.cloud.aliyun": "알리윤",
    "quickstart.cloud.modelscope": "ModelScope",
    "quickstart.cloud.aliyunDeploy": "알리윤 원클릭 배포",
    "quickstart.cloud.aliyunDoc": "설명 문서 보기",
    "quickstart.cloud.modelscopeGo": "ModelScope 스튜디오로 이동",
    "quickstart.desktop.platforms": "지원 플랫폼",
    "quickstart.desktop.downloadGithub": "GitHub에서 다운로드",
    "quickstart.desktop.viewGuide": "사용 가이드 보기",
    "quickstart.desktop.recommended": "권장",
    "quickstart.badgeBeta": "Beta",
    footer: "CoPaw — 당신이 필요한 것을 이해하고, 항상 곁에 있습니다",
    "footer.poweredBy.p1": "Built by ",
    "footer.poweredBy.p2": " with ",
    "footer.poweredBy.p3": ", ",
    "footer.poweredBy.p3b": ", and ",
    "footer.poweredBy.p4": ".",
    "footer.poweredBy.team": "AgentScope 팀",
    "footer.poweredBy.agentscope": "AgentScope",
    "footer.poweredBy.runtime": "AgentScope Runtime",
    "footer.poweredBy.reme": "ReMe",
    "footer.inspiredBy": "영감을 준 프로젝트: ",
    "footer.inspiredBy.name": "OpenClaw",
    "footer.thanksSkills": "Agent Skills 규격과 예시를 제공해 준 ",
    "footer.thanksSkills.name": "anthropics/skills",
    "footer.thanksSkills.suffix": "에게 감사드립니다.",
    "docs.backToTop": "맨 위로",
    "docs.copy": "복사",
    "docs.copied": "복사됨",
    "docs.searchPlaceholder": "문서 검색",
    "docs.searchLoading": "로딩 중…",
    "docs.searchNoResults": "결과 없음",
    "docs.searchResultsTitle": "검색 결과",
    "docs.searchResultsTitleEmpty": "문서 검색",
    "docs.searchHint": "왼쪽에 키워드를 입력하고 엔터를 눌러 검색하세요.",
    "releaseNotes.title": "업데이트 로그",
    "releaseNotes.noReleases": "업데이트 로그가 없습니다",
    "nav.agentscopeDesc": "AgentScope 기반",
    "hero.scrollHint": "아래로 스크롤하여 빠른 시작 확인",
    "video.notSupported": "브라우저가 비디오 태그를 지원하지 않습니다.",
    "ecosystem.title": "에코시스템",
    "ecosystem.sub": "CoPaw는 다양한 플랫폼 및 도구와 호환됩니다.",
  },
  zh: {
    "nav.docs": "文档",
    "nav.more": "更多",
    "nav.releaseNotes": "更新日志",
    "nav.download": "下载",
    "nav.github": "GitHub",
    "nav.githubComingSoon": "Coming Soon",
    "nav.lang": "한국어",
    "nav.agentscopeTeam": "AgentScope",
    "hero.slogan": "懂你所需，伴你左右",
    "hero.sub":
      "你的AI个人助理；安装极简、本地与云上均可部署；支持多端接入、能力轻松扩展。",
    "hero.cta": "查看文档",
    "follow.title": "关注我们",
    "follow.sub": "第一时间获取 CoPaw 最新动态",
    "follow.xiaohongshu": "小红书：",
    "follow.x": "X：",
    "brandstory.title": "Why CoPaw？",
    "brandstory.para1":
      "CoPaw 既是「你的搭档小爪子」（co-paw），也寓意 Co Personal Agent Workstation（协同个人智能体工作台）。",
    "brandstory.para2":
      "我们希望它不是冰冷的工具，而是一只随时准备帮忙的温暖「小爪子」，是你数字生活中最默契的伙伴。",
    "features.title": "核心能力",
    "features.channels.title": "全域触达",
    "features.channels.desc":
      "支持钉钉、飞书、QQ、Discord、iMessage 等频道，一个 CoPaw 按需连接。",
    "features.private.title": "由你掌控",
    "features.private.desc":
      "记忆与个性化由你掌控，本地或云端均可；定时与协作发往指定频道。",
    "features.skills.title": "Skills 扩展",
    "features.skills.desc": "内置定时任务，自定义技能目录，CoPaw 自动加载。",
    "testimonials.title": "社区怎么说",
    "testimonials.viewAll": "查看全部",
    "testimonials.1": "CoPaw 就该这样：多频道一个入口，Python 好改好部署。",
    "testimonials.2": "定时和心跳很实用，Skills 自己加，数据都在本地。",
    "testimonials.3": "想完全掌控的团队用着很顺手。",
    "usecases.title": "你可以用 CoPaw 做什么",
    "usecases.sub": "",
    "usecases.category.social": "社交媒体",
    "usecases.category.creative": "创意与构建",
    "usecases.category.productivity": "生产力",
    "usecases.category.research": "研究与学习",
    "usecases.category.assistant": "桌面与文件",
    "usecases.category.explore": "探索更多",
    "usecases.social.1":
      "每日将小红书、知乎、Reddit 上你关注的热帖整理成摘要并推送，并根据反馈优化推荐。",
    "usecases.social.2":
      "每日抓取 B 站、YouTube 关注频道或关键词下的新视频并生成摘要，节省浏览时间。",
    "usecases.social.3":
      "分析小红书、知乎等账号的内容规律与特点，为内容创作提供参考。",
    "usecases.creative.1":
      "睡前向 CoPaw 说明目标并设定自动执行，次日即可获得可用的雏形。",
    "usecases.creative.2":
      "从选题、找素材到确定方向，CoPaw 可协助完成视频内容创作全流程。",
    "usecases.productivity.1":
      "每日汇总订阅邮件与 Newsletter 精华，并推送至钉钉、飞书或 QQ 会话。",
    "usecases.productivity.2":
      "从邮件与日历自动整理联系人，支持用自然语言查询联系人及往来记录。",
    "usecases.productivity.3":
      "记录饮食与身体反应，由 CoPaw 定期分析并呈现规律。",
    "usecases.research.1":
      "自动追踪科技与 AI 公司财报与重要资讯，筛选重点并生成摘要。",
    "usecases.research.2":
      "将链接、文章与帖子存入个人知识库，便于在多场景中检索与复用。",
    "usecases.assistant.1":
      "协助整理与搜索本地文件、阅读文档并做摘要；在钉钉、飞书或 QQ 中通过对话将指定文件发至当前会话。",
    "usecases.explore.1":
      "你可以探索更多可能，用 Skills 与定时任务组合成 agentic app。",
    "quickstart.title": "快速开始",
    "quickstart.serviceNotice":
      "几分钟，获得专属AI助理。一行命令，或双击桌面应用，自己动手，轻松搞定。",
    "quickstart.hintBefore": "安装 → 初始化 → 启动；频道配置见 ",
    "quickstart.hintLink": "文档",
    "quickstart.hintAfter": "，即可通过钉钉、飞书、QQ 等频道使用 CoPaw。",
    "quickstart.method.pip": "pip",
    "quickstart.method.script": "脚本安装",
    "quickstart.method.docker": "Docker",
    "quickstart.method.cloud": "云部署",
    "quickstart.method.desktop": "桌面应用",
    "quickstart.desc.pip": "适合自行管理 Python 环境的用户",
    "quickstart.desc.script":
      "无需手动配置 Python，一行命令自动完成安装。脚本会自动下载 uv（Python 包管理器）、创建虚拟环境、安装 CoPaw 及其依赖（含 Node.js 和前端资源）。注意：部分网络环境或企业权限管控下可能无法使用。",
    "quickstart.desc.docker":
      "使用官方 Docker 镜像快速部署，隔离环境、便于管理",
    "quickstart.desc.cloud": "云端一键部署或在线运行，无需本地环境配置",
    "quickstart.desc.desktop":
      "独立打包的桌面应用，内置完整 Python 环境、所有依赖和前端资源。双击即用，无需命令行，无需预装任何工具。",
    "quickstart.platform.mac": "macOS / Linux",
    "quickstart.platform.windows": "Windows",
    "quickstart.shell.cmd": "CMD",
    "quickstart.shell.ps": "PowerShell",
    "quickstart.docker.hub": "Docker Hub",
    "quickstart.cloud.aliyun": "阿里云",
    "quickstart.cloud.modelscope": "魔搭",
    "quickstart.cloud.aliyunDeploy": "前往阿里云一键部署",
    "quickstart.cloud.aliyunDoc": "查看说明文档",
    "quickstart.cloud.modelscopeGo": "前往魔搭创空间",
    "quickstart.desktop.platforms": "支持平台",
    "quickstart.desktop.downloadGithub": "前往 GitHub 下载",
    "quickstart.desktop.viewGuide": "查看使用指南",
    "quickstart.desktop.recommended": "推荐",
    "quickstart.badgeBeta": "Beta",
    footer: "CoPaw — 懂你所需，伴你左右",
    "footer.poweredBy.p1": "由 ",
    "footer.poweredBy.p2": " 基于 ",
    "footer.poweredBy.p3": "、",
    "footer.poweredBy.p3b": " 与 ",
    "footer.poweredBy.p4": " 打造。",
    "footer.poweredBy.team": "AgentScope 团队",
    "footer.poweredBy.agentscope": "AgentScope",
    "footer.poweredBy.runtime": "AgentScope Runtime",
    "footer.poweredBy.reme": "ReMe",
    "footer.inspiredBy": "部分灵感来源于 ",
    "footer.inspiredBy.name": "OpenClaw",
    "footer.thanksSkills": "感谢 ",
    "footer.thanksSkills.name": "anthropics/skills",
    "footer.thanksSkills.suffix": " 提供 Agent Skills 规范与示例。",
    "docs.backToTop": "返回顶部",
    "docs.copy": "复制",
    "docs.copied": "已复制",
    "docs.searchPlaceholder": "搜索文档",
    "docs.searchLoading": "加载中…",
    "docs.searchNoResults": "无结果",
    "docs.searchResultsTitle": "搜索结果",
    "docs.searchResultsTitleEmpty": "搜索文档",
    "docs.searchHint": "在左侧输入关键词后按回车搜索。",
    "releaseNotes.title": "更新日志",
    "releaseNotes.noReleases": "暂无更新日志",
    "nav.agentscopeDesc": "基于 AgentScope 打造",
    "hero.scrollHint": "向下滚动查看快速开始",
    "video.notSupported": "您的浏览器不支持 video 标签。",
    "ecosystem.title": "生态系统",
    "ecosystem.sub": "CoPaw 兼容多种平台与工具。",
  },
  en: {
    "nav.docs": "Docs",
    "nav.more": "More",
    "nav.releaseNotes": "Release Notes",
    "nav.download": "Download",
    "nav.github": "GitHub",
    "nav.githubComingSoon": "Coming Soon",
    "nav.lang": "한국어",
    "nav.agentscopeTeam": "AgentScope",
    "hero.slogan": "Works for you, grows with you",
    "hero.sub":
      "Your Personal AI Assistant; easy to install, deploy on your own machine or on the cloud; supports multiple chat apps with easily extensible capabilities.",
    "hero.cta": "Read the docs",
    "follow.title": "Follow us",
    "follow.sub": "Follow us for the latest CoPaw updates",
    "follow.xiaohongshu": "Rednote:",
    "follow.x": "X:",
    "brandstory.title": "Why CoPaw?",
    "brandstory.para1":
      'CoPaw represents both a Co Personal Agent Workstation and a "co-paw"—a partner always by your side.',
    "brandstory.para2":
      'More than just a cold tool, CoPaw is a warm "little paw" always ready to lend a hand (or a paw!). It is the ultimate teammate for your digital life.',
    "features.title": "Key capabilities",
    "features.channels.title": "Every channel",
    "features.channels.desc":
      "DingTalk, Feishu, QQ, Discord, iMessage, and more — one assistant, connect as you need.",
    "features.private.title": "Under your control",
    "features.private.desc":
      "Memory and personalization under your control. Deploy locally or in the cloud; scheduled reminders and collaboration to any channel.",
    "features.skills.title": "Skills",
    "features.skills.desc":
      "Built-in Cron; custom skills in your workspace, auto-loaded.",
    "testimonials.title": "What people say",
    "testimonials.viewAll": "View all",
    "testimonials.1":
      "This is what a personal assistant should be: one entry, every channel.",
    "testimonials.2":
      "Cron and heartbeat are super practical. Add your own skills; data stays local.",
    "testimonials.3": "Teams who want full control love it.",
    "usecases.title": "What you can do with CoPaw",
    "usecases.sub": "",
    "usecases.category.social": "Social media",
    "usecases.category.creative": "Creative & building",
    "usecases.category.productivity": "Productivity",
    "usecases.category.research": "Research & learning",
    "usecases.category.assistant": "Desktop & files",
    "usecases.category.explore": "Explore more",
    "usecases.social.1":
      "Daily digest of hot posts from Xiaohongshu, Zhihu, and Reddit based on your interests, with recommendations that improve over time.",
    "usecases.social.2":
      "Daily summaries of new videos from Bilibili or YouTube by channel or keyword, saving you time browsing.",
    "usecases.social.3":
      "Analyze your Xiaohongshu or Zhihu account to uncover content patterns and inform what to post next.",
    "usecases.creative.1":
      "Describe your goal to CoPaw and set it to run overnight; get a working draft by the next day.",
    "usecases.creative.2":
      "From topic selection and material gathering to direction setting, CoPaw supports the full video content workflow.",
    "usecases.productivity.1":
      "Daily digests of newsletters and important emails, delivered to your DingTalk, Feishu or QQ chat.",
    "usecases.productivity.2":
      "Contacts surfaced from email and calendar, with natural-language search for people and past interactions.",
    "usecases.productivity.3":
      "Log diet and symptoms; CoPaw analyzes and surfaces patterns over time.",
    "usecases.research.1":
      "Track tech and AI company earnings and news; get key points and summaries automatically.",
    "usecases.research.2":
      "Save links, articles, and posts to a personal knowledge base and reuse them across workflows.",
    "usecases.assistant.1":
      "Organize and search local files, read and summarize documents; request files in DingTalk, Feishu or QQ and receive them in the current chat.",
    "usecases.explore.1":
      "Explore more possibilities—combine Skills and cron into your own agentic app.",
    "quickstart.title": "Quick start",
    "quickstart.serviceNotice":
      "Your personal AI assistant in minutes. One command, or double-click the app—do it yourself, done easily.",
    "quickstart.hintBefore":
      "Install → init → start. Configure channels to use CoPaw on DingTalk, Feishu, QQ, etc. See ",
    "quickstart.hintLink": "docs",
    "quickstart.hintAfter": ".",
    "quickstart.method.pip": "pip",
    "quickstart.method.script": "Script",
    "quickstart.method.docker": "Docker",
    "quickstart.method.cloud": "Cloud",
    "quickstart.method.desktop": "Desktop",
    "quickstart.desc.pip": "If you prefer managing Python yourself",
    "quickstart.desc.script":
      "No Python setup required, one command installs everything. The script will automatically download uv (Python package manager), create a virtual environment, and install CoPaw with all dependencies (including Node.js and frontend assets). Note: May not work in restricted network environments or corporate firewalls.",
    "quickstart.desc.docker":
      "Quick deployment with official Docker images, isolated environment and easy management",
    "quickstart.desc.cloud":
      "One-click cloud deployment or online execution, no local setup required",
    "quickstart.desc.desktop":
      "Standalone desktop app with bundled Python environment, all dependencies, and frontend assets. Double-click to run, no command line, no prerequisites required.",
    "quickstart.platform.mac": "macOS / Linux",
    "quickstart.platform.windows": "Windows",
    "quickstart.shell.cmd": "CMD",
    "quickstart.shell.ps": "PowerShell",
    "quickstart.docker.hub": "Docker Hub",
    "quickstart.cloud.aliyun": "Aliyun",
    "quickstart.cloud.modelscope": "ModelScope",
    "quickstart.cloud.aliyunDeploy": "Deploy on Aliyun ECS",
    "quickstart.cloud.aliyunDoc": "View Documentation",
    "quickstart.cloud.modelscopeGo": "Go to ModelScope Studio",
    "quickstart.desktop.platforms": "Supported Platforms",
    "quickstart.desktop.downloadGithub": "Download from GitHub",
    "quickstart.desktop.viewGuide": "View User Guide",
    "quickstart.desktop.recommended": "recommended",
    "quickstart.badgeBeta": "Beta",
    footer: "CoPaw — Works for you, grows with you",
    "footer.poweredBy.p1": "Built by ",
    "footer.poweredBy.p2": " with ",
    "footer.poweredBy.p3": ", ",
    "footer.poweredBy.p3b": ", and ",
    "footer.poweredBy.p4": ".",
    "footer.poweredBy.team": "AgentScope team",
    "footer.poweredBy.agentscope": "AgentScope",
    "footer.poweredBy.runtime": "AgentScope Runtime",
    "footer.poweredBy.reme": "ReMe",
    "footer.inspiredBy": "Partly inspired by ",
    "footer.inspiredBy.name": "OpenClaw",
    "footer.thanksSkills": "Thanks to ",
    "footer.thanksSkills.name": "anthropics/skills",
    "footer.thanksSkills.suffix": " for the Agent Skills spec and examples.",
    "docs.backToTop": "Back to top",
    "docs.copy": "Copy",
    "docs.copied": "Copied",
    "docs.searchPlaceholder": "Search docs",
    "docs.searchLoading": "Loading…",
    "docs.searchNoResults": "No results",
    "docs.searchResultsTitle": "Search results",
    "docs.searchResultsTitleEmpty": "Search docs",
    "docs.searchHint": "Enter a keyword and press Enter to search.",
    "releaseNotes.title": "Release Notes",
    "releaseNotes.noReleases": "No release notes available",
    "nav.agentscopeDesc": "Built on AgentScope",
    "hero.scrollHint": "Scroll down for quick start",
    "video.notSupported": "Your browser does not support the video tag.",
    "ecosystem.title": "Ecosystem",
    "ecosystem.sub": "CoPaw is compatible with various platforms and tools.",
  },
};

export function t(lang: Lang, key: string): string {
  return i18n[lang][key] ?? key;
}
