export interface SiteConfig {
  projectName: string;
  projectTaglineEn: string;
  projectTaglineZh: string;
  projectTaglineKo: string;
  repoUrl: string;
  docsPath: string;
  /** When true or omitted, show Testimonials on homepage. */
  showTestimonials?: boolean;
  /**
   * ModelScope Studio one-click setup URL (no Python install).
   * Replace target when officially launched.
   */
  modelScopeForkUrl?: string;
}

const defaultConfig: SiteConfig = {
  projectName: "CoPaw",
  projectTaglineEn: "Works for you, grows with you",
  projectTaglineZh: "懂你所需，伴你左右",
  projectTaglineKo: "당신이 필요한 것을 이해하고, 항상 곁에 있습니다",
  repoUrl: "https://github.com/agentscope-ai/CoPaw",
  docsPath: "/docs/",
  showTestimonials: true,
  modelScopeForkUrl:
    "https://modelscope.cn/studios/fork?target=AgentScope/CoPaw",
};

let cached: SiteConfig | null = null;

export async function loadSiteConfig(): Promise<SiteConfig> {
  if (cached) return cached;
  try {
    const r = await fetch("/site.config.json");
    if (r.ok) {
      cached = (await r.json()) as SiteConfig;
      return cached;
    }
  } catch {
    /* use defaults */
  }
  return defaultConfig;
}
