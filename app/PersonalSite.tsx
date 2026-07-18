import { ParticleField } from "./ParticleField";

type Language = "zh" | "en";

const content = {
  zh: {
    htmlLang: "zh-CN",
    brand: "贺叔 AI",
    nav: { about: "介绍", venture: "创业", content: "内容", works: "代表作", trust: "关于我" },
    languageLabel: "EN",
    languageHref: "/en",
    languageAria: "Switch to English",
    status: "OPEN TO BUILD",
    hero: {
      eyebrow: "AI Gear · Real Tests · Building the Future",
      title: "技术人的",
      titleAccent: "AI 装备师",
      introLead: "贺叔 AI",
      intro:
        "真用过，真演示，帮技术人、职场人和一人公司选 AI 装备、避坑省钱。我不贩卖焦虑，只分享自己跑过的机器、工作流和真实成本。",
      ventureNote: "正在 Torchcast.AI 做 AI 创业 · FFM / Forecast Foundation Model",
      primaryAction: "聊聊 AI",
      secondaryAction: "看代表作",
      cardAria: "贺叔 AI 的技术实践概览",
      cardHeader: "CREATOR × AI FOUNDER",
      cardState: "● BUILDING",
      coreTop: "BUILD",
      coreBottom: "FOR REAL",
      nodes: ["OPENCLAW", "CLAUDE CODE", "TORCHCAST.AI", "FFM"],
      flow: ["真用过", "真演示", "做未来"],
    },
    metricsLabel: "重点数据",
    metrics: [
      ["Audience Reach", "84 万+", "四平台累计播放"],
      ["Community", "8,800+", "四平台关注者"],
      ["Content Library", "23 条", "OpenClaw 系列视频"],
      ["Current Venture", "FFM", "Forecast Foundation Model"],
    ],
    about: {
      label: "About / 认识我",
      title: "玩 AI，还是被 AI 玩？",
      paragraphs: [
        "AI 工具越来越多，真正稀缺的不是新名词，而是判断：这台机器养不养得起？这个工作流能不能每天跑？本地与云端到底怎么选？",
        "我是 40+ 的 Fintech 工程师出身，也是一人公司实践者。近 20 年从写代码走到产品、技术与组织管理。现在，我把这些经验拿来拆 AI：不追热闹，追可用；不背概念，做实操。",
      ],
    },
    venture: {
      kicker: "Current Venture / Torchcast.AI",
      title: "正在构建预测未来的基础模型。",
      intro:
        "我最近在 Torchcast.AI 做 AI 创业，推进 FFM——Forecast Foundation Model。我们希望让 AI 不只是给出一个自信的答案，而是理解不确定性，给出经过校准、可以用于决策的概率。",
      link: "访问 Torchcast.AI",
      cardLabel: "FFM / FORECAST FOUNDATION MODEL",
      cardTitle: "从通用智能，到预测智能。",
      cardItems: ["校准概率，而不是自信猜测", "持续吸收证据并更新判断", "把预测变成可行动的决策基础设施"],
    },
    capabilities: {
      kicker: "What I Share / 01—03",
      title: "每条内容，都要帮你做一个决定。",
      items: [
        ["GEAR / 01", "帮你选装备", "不看参数表空谈。我把机器、模型、云端与本地方案都跑一遍，告诉你什么值得买，什么只是贵。"],
        ["WORKFLOW / 02", "带你跑通工作流", "围绕 OpenClaw、Claude Code、Codex 与 AI Skills，做看得见的实操，不把关键步骤藏在剪辑后面。"],
        ["FIELD NOTE / 03", "替你先踩坑", "成本、性能、稳定性、隐私与维护负担，都是真实使用的一部分。我的内容从这些问题开始，而不是在 Demo 结束。"],
      ],
    },
    works: {
      kicker: "Selected Works / 01—03",
      title: "真正被需要的内容，会自己长尾。",
      items: [
        ["01 / 51 万播放", "先选一台“养得起”的机器", "视频号 + 抖音", "从真实成本出发做 AI 硬件决策。视频号 33.1 万、抖音 18.3 万播放，视频号分享 4,409 次。", ["帮决策", "成本测算", "社交裂变"]],
        ["02 / 4.5 万播放", "为什么被云端坑了", "视频号", "把云端方案里常被忽略的账单、限制和维护成本摊开讲，踩坑避雷题型与目标人群强共鸣。", ["云端成本", "踩坑复盘", "方案对比"]],
        ["03 / S01—S03", "OpenClaw 系列", "23 条季播视频", "从选机器、接微信到三条铁律，用一季一个问题的方式，把完整实践拆成可跟随的步骤。", ["OpenClaw", "实机演示", "季播内容"]],
      ],
    },
    trust: {
      kicker: "Why Trust Me / 2006—Now",
      title: "不是 AI 原住民，是一路做系统的人。",
      items: [
        ["01 / NOW", "Torchcast.AI", "AI 创业 · 推进 FFM（Forecast Foundation Model），构建面向真实世界事件的预测智能。"],
        ["02 / 2022—2026", "ArtiusGlobal · 新加坡", "技术负责人 · 为银行、保险与资管机构建设金融合规 SaaS、监管申报与数据系统。"],
        ["03 / 2013—2022", "PINTEC & JIMU Group", "产品技术 VP / COO / 管理合伙人 · 深度参与一家互联网金融公司从初创到上市。"],
      ],
    },
    principles: {
      label: "Operating Principles",
      title: "我的内容防伪码",
      items: ["真用过：没有跑过的工具，不做结论式推荐。", "真演示：关键步骤放到台面上，不靠剪辑制造魔法。", "帮决策：每条内容都回答“你该怎么选”，不只解释“它是什么”。"],
    },
    contact: {
      eyebrow: "Let’s Build Something Real",
      title: <>想少踩一个 AI 坑？<br />先从真实问题聊起。</>,
      email: "发邮件聊聊",
      wechat: "微信",
      wechatValue: "heshu-AI",
      qrAlt: "贺叔 AI 的个人微信二维码",
      scan: "扫码添加个人微信",
    },
    footerLocation: "新加坡 · Singapore",
    footerData: "数据截至 2026.07",
  },
  en: {
    htmlLang: "en",
    brand: "Heshu AI",
    nav: { about: "About", venture: "Venture", content: "Content", works: "Selected Work", trust: "Background" },
    languageLabel: "中文",
    languageHref: "/",
    languageAria: "切换到中文",
    status: "OPEN TO BUILD",
    hero: {
      eyebrow: "AI Gear · Real Tests · Building the Future",
      title: "The AI gear guide",
      titleAccent: "for technical people",
      introLead: "Heshu AI",
      intro:
        "I use it, test it, and show the real workflow—so technical professionals, knowledge workers, and solo builders can choose AI gear with fewer costly mistakes.",
      ventureNote: "Now building Torchcast.AI · FFM / Forecast Foundation Model",
      primaryAction: "Talk AI",
      secondaryAction: "Selected work",
      cardAria: "Heshu AI field-tested technology overview",
      cardHeader: "CREATOR × AI FOUNDER",
      cardState: "● BUILDING",
      coreTop: "BUILD",
      coreBottom: "FOR REAL",
      nodes: ["OPENCLAW", "CLAUDE CODE", "TORCHCAST.AI", "FFM"],
      flow: ["USE IT", "SHOW IT", "BUILD NEXT"],
    },
    metricsLabel: "Key numbers",
    metrics: [
      ["Audience Reach", "840K+", "views across four platforms"],
      ["Community", "8,800+", "followers across four platforms"],
      ["Content Library", "23", "videos in the OpenClaw series"],
      ["Current Venture", "FFM", "Forecast Foundation Model"],
    ],
    about: {
      label: "About / Field Notes",
      title: "Are you using AI—or is AI using you?",
      paragraphs: [
        "AI tools multiply every week. What is scarce is judgment: Can you afford this machine? Will the workflow still run every day? Should you go local or stay in the cloud?",
        "I am a 40+ former fintech engineer and a solo-company practitioner. Over nearly two decades I moved from writing code to leading products, technology, and organizations. I bring that experience to AI: less hype, more utility; fewer definitions, more working systems.",
      ],
    },
    venture: {
      kicker: "Current Venture / Torchcast.AI",
      title: "Building a foundation model for forecasting.",
      intro:
        "I am now building Torchcast.AI and advancing FFM—Forecast Foundation Model. The goal is not another general model that produces a confident answer, but forecasting intelligence that understands uncertainty and returns calibrated probabilities people can act on.",
      link: "Visit Torchcast.AI",
      cardLabel: "FFM / FORECAST FOUNDATION MODEL",
      cardTitle: "From general intelligence to forecasting intelligence.",
      cardItems: ["Calibrated probabilities, not confident guesses", "Evidence-aware reasoning that updates over time", "Decision infrastructure for uncertain futures"],
    },
    capabilities: {
      kicker: "What I Share / 01—03",
      title: "Every piece should help you make a decision.",
      items: [
        ["GEAR / 01", "Choose the right gear", "I run the machines, models, cloud setups, and local stacks before telling you what is worth buying—and what is merely expensive."],
        ["WORKFLOW / 02", "See the real workflow", "OpenClaw, Claude Code, Codex, and AI Skills—shown as usable workflows, with the important steps left in."],
        ["FIELD NOTE / 03", "Learn from the failures", "Cost, performance, stability, privacy, and maintenance are part of the product. My content starts where the polished demo ends."],
      ],
    },
    works: {
      kicker: "Selected Works / 01—03",
      title: "Useful content keeps working after you stop publishing.",
      items: [
        ["01 / 510K VIEWS", "Choose a machine you can afford to keep", "WeChat Channels + Douyin", "A practical AI hardware decision built around total cost. 331K views on WeChat Channels, 183K on Douyin, and 4,409 shares.", ["Decision support", "Cost model", "Social reach"]],
        ["02 / 45K VIEWS", "How the cloud trapped me", "WeChat Channels", "A field report on the bills, limits, and maintenance costs that cloud demos rarely mention.", ["Cloud cost", "Failure review", "Trade-offs"]],
        ["03 / S01—S03", "The OpenClaw series", "23 episodic videos", "From choosing a machine to connecting WeChat and defining operating rules—one practical problem per season.", ["OpenClaw", "Live demo", "Episodic learning"]],
      ],
    },
    trust: {
      kicker: "Why Trust Me / 2006—Now",
      title: "Not AI-native. System-native.",
      items: [
        ["01 / NOW", "Torchcast.AI", "Building an AI startup and advancing FFM—Forecast Foundation Model—for real-world forecasting intelligence."],
        ["02 / 2022—2026", "ArtiusGlobal · Singapore", "Technology lead for compliance SaaS, regulatory reporting, and data systems used by banks, insurers, and asset managers."],
        ["03 / 2013—2022", "PINTEC & JIMU Group", "VP Product & Technology / COO / Managing Partner. Helped take a fintech company from early stage to public markets."],
      ],
    },
    principles: {
      label: "Operating Principles",
      title: "My content checksum",
      items: ["Use it: I do not recommend tools I have not run myself.", "Show it: The important steps stay visible; editing does not create magic.", "Decide with it: Every piece answers what you should choose, not only what the tool is."],
    },
    contact: {
      eyebrow: "Let’s Build Something Real",
      title: <>One less expensive AI mistake.<br />Start with a real problem.</>,
      email: "Email me",
      wechat: "WeChat",
      wechatValue: "heshu-AI",
      qrAlt: "Personal WeChat QR code for Heshu AI",
      scan: "Scan to add me on WeChat",
    },
    footerLocation: "Singapore",
    footerData: "Data as of 2026.07",
  },
} as const;

export function PersonalSite({ language }: { language: Language }) {
  const copy = content[language];

  return (
    <div className="site-frame" lang={copy.htmlLang}>
      <header className="shell topbar">
        <a className="brand" href="#top" aria-label={language === "zh" ? "返回首页" : "Back to top"}>
          <span className="brand-mark" aria-hidden="true">HS</span>
          <span>{copy.brand}</span>
        </a>
        <nav className="nav" aria-label={language === "zh" ? "主导航" : "Main navigation"}>
          <a href="#about">{copy.nav.about}</a>
          <a href="#venture">{copy.nav.venture}</a>
          <a href="#capabilities">{copy.nav.content}</a>
          <a href="#works">{copy.nav.works}</a>
          <a href="#experience">{copy.nav.trust}</a>
          <a className="language-switch" href={copy.languageHref} aria-label={copy.languageAria}>{copy.languageLabel}</a>
          <a className="status" href="mailto:cranelee@gmail.com">{copy.status}</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-stage" aria-labelledby="hero-title">
          <ParticleField />
          <div className="hero-grid shell">
            <div className="hero-copy fade-up">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1 id="hero-title"><span>{copy.hero.title}</span><span className="gradient">{copy.hero.titleAccent}</span></h1>
              <p className="intro"><strong>{copy.hero.introLead}</strong>. {copy.hero.intro}</p>
              <a className="venture-note" href="#venture"><span aria-hidden="true">◈</span>{copy.hero.ventureNote}</a>
              <div className="actions" aria-label={language === "zh" ? "主要行动" : "Primary actions"}>
                <a className="btn primary" href="mailto:cranelee@gmail.com?subject=Heshu%20AI">{copy.hero.primaryAction} <span aria-hidden="true">↗</span></a>
                <a className="btn secondary" href="#works">{copy.hero.secondaryAction} <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <figure className="hero-visual creator-visual fade-up" aria-label={copy.hero.cardAria}>
              <div className="orbit orbit-outer" aria-hidden="true"><i /><i /><i /></div>
              <div className="orbit orbit-middle" aria-hidden="true"><i /><i /></div>
              <div className="orbit orbit-inner" aria-hidden="true" />
              <div className="portrait-field">
                <div className="portrait-aura" aria-hidden="true" />
                <img src="/heshu-avatar.jpg" alt={language === "zh" ? "贺叔 AI 头像" : "Portrait of Heshu AI"} width="1024" height="1024" fetchPriority="high" />
                <div className="portrait-mesh" aria-hidden="true" />
                <div className="signal-slice" aria-hidden="true" />
              </div>
              <div className="telemetry telemetry-top" aria-hidden="true"><span>CREATOR / 01</span><strong>HESHU AI</strong></div>
              <div className="telemetry telemetry-side" aria-hidden="true"><span>REAL TESTS</span><strong>FIELD NOTES</strong></div>
              <div className="telemetry telemetry-bottom" aria-hidden="true"><span>TORCHCAST.AI</span><strong>BUILDING FFM</strong></div>
              <figcaption>{language === "zh" ? "个人品牌 · AI 装备实测 · 一人公司" : "Personal brand · AI field tests · Solo company"}</figcaption>
            </figure>
          </div>
          <div className="hero-ticker" aria-hidden="true">
            <span>AI GEAR</span><i />
            <span>REAL TESTS</span><i />
            <span>TORCHCAST.AI</span><i />
            <span>FORECAST FOUNDATION MODEL</span>
          </div>
        </section>

        <section className="metrics-wrap" aria-label={copy.metricsLabel}>
          <div className="shell metrics">
            {copy.metrics.map(([label, value, detail]) => <div className="metric" key={label}><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>)}
          </div>
        </section>

        <section className="shell about" id="about" aria-labelledby="about-title">
          <div className="section-label">{copy.about.label}</div>
          <div className="about-copy"><h2 id="about-title">{copy.about.title}</h2>{copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="venture-wrap" id="venture" aria-labelledby="venture-title">
          <div className="shell venture">
            <div className="venture-copy">
              <p className="section-kicker">{copy.venture.kicker}</p>
              <h2 id="venture-title">{copy.venture.title}</h2>
              <p>{copy.venture.intro}</p>
              <a className="venture-link" href="https://torchcast.ai" target="_blank" rel="noreferrer">{copy.venture.link} <span aria-hidden="true">↗</span></a>
            </div>
            <aside className="ffm-card" aria-label="Forecast Foundation Model">
              <span className="ffm-label">{copy.venture.cardLabel}</span>
              <strong>FFM</strong>
              <h3>{copy.venture.cardTitle}</h3>
              <ul>{copy.venture.cardItems.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section className="capabilities-wrap" id="capabilities" aria-labelledby="capabilities-title">
          <div className="shell capabilities-section">
            <div className="section-heading"><p className="section-kicker">{copy.capabilities.kicker}</p><h2 id="capabilities-title">{copy.capabilities.title}</h2></div>
            <div className="capability-grid">
              {copy.capabilities.items.map(([code, title, description]) => <article className="capability" key={code}><span>{code}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="shell works-section" id="works" aria-labelledby="works-title">
          <div className="section-heading experience-heading"><p className="section-kicker">{copy.works.kicker}</p><h2 id="works-title">{copy.works.title}</h2></div>
          <div className="works-grid">
            {copy.works.items.map(([index, title, platform, description, tags]) => <article className="work-card" key={title}><div className="work-index">{index}</div><h3>{title}</h3><p className="work-platform">{platform}</p><p className="work-description">{description}</p><ul aria-label={`${title} tags`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="capabilities-wrap" id="experience" aria-labelledby="experience-title">
          <div className="shell capabilities-section">
            <div className="section-heading"><p className="section-kicker">{copy.trust.kicker}</p><h2 id="experience-title">{copy.trust.title}</h2></div>
            <div className="capability-grid">
              {copy.trust.items.map(([index, company, description]) => <article className="capability" key={company}><span>{index}</span><h3>{company}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="shell principles" aria-labelledby="principles-title">
          <div className="section-label">{copy.principles.label}</div>
          <div><h2 id="principles-title">{copy.principles.title}</h2><ol>{copy.principles.items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div>
        </section>

        <section className="contact-wrap" id="contact" aria-labelledby="contact-title">
          <div className="shell contact">
            <p className="eyebrow">{copy.contact.eyebrow}</p>
            <h2 id="contact-title">{copy.contact.title}</h2>
            <div className="contact-options">
              <div className="contact-methods">
                <a className="contact-link" href="mailto:cranelee@gmail.com">{copy.contact.email} <span aria-hidden="true">↗</span></a>
                <div className="wechat-contact"><span>{copy.contact.wechat}</span><strong>{copy.contact.wechatValue}</strong></div>
              </div>
              <figure className="qr-card">
                <img src="/wechat-qr.jpg" alt={copy.contact.qrAlt} width="888" height="1131" />
                <figcaption>{copy.contact.scan}</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer"><span>{copy.brand}</span><span>{copy.footerLocation}</span><span>{copy.footerData} · © {new Date().getFullYear()}</span></footer>
    </div>
  );
}
