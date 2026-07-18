import Image from "next/image";
import { ParticleField } from "./ParticleField";

type Language = "zh" | "en";

const publicBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const content = {
  zh: {
    htmlLang: "zh-CN",
    brand: "贺叔 AI",
    nav: { works: "代表作", products: "产品", content: "内容", about: "介绍", venture: "创业" },
    languageLabel: "EN",
    languageHref: "/en/",
    languageAria: "Switch to English",
    status: "微信预售",
    hero: {
      eyebrow: "AI 装备实测 · 工作流拆解 · 一人公司实战",
      title: "技术人的",
      titleAccent: "AI 装备师",
      mantra: "只讲我真用过的装备，只说值不值得装。",
      intro:
        "机器、模型、云端、本地，我先跑过，再告诉你什么值得买、什么只是贵。",
      proof: "三平台累计 84 万+｜单条 51.4 万｜4,409 次分享｜23 条实测",
      productNote: "¥199 / 年 · AI Agent 落地答疑群 · 预售 30 人开群",
      primaryAction: "看代表作",
      secondaryAction: "加入答疑群",
      cardAria: "贺叔 AI 的个人品牌头像与技术实践概览",
    },
    metricsLabel: "可核验的内容数据",
    metrics: [
      ["Audience Reach", "84 万+", "视频号、抖音、小红书累计播放"],
      ["Top Work", "51.4 万", "单条代表作跨平台播放"],
      ["Social Proof", "4,409", "代表作在视频号的分享次数"],
      ["Field Tests", "23 条", "OpenClaw 系列实测视频"],
    ],
    metricsNote: "数据截至 2026.07，来自平台创作者后台；跨平台累计，未去重。",
    works: {
      kicker: "Selected Works / 01—03",
      title: "这 3 条，最能代表我怎么帮你做决定。",
      intro: "不讲参数表上的最好，只讲你实际养不养得起、跑不跑得稳、值不值得装。",
      items: [
        ["01 / 51.4 万播放", "先选一台“养得起”的机器", "视频号 33.1 万 + 抖音 18.3 万", "从真实成本出发做 AI 硬件决策；视频号被分享 4,409 次。", ["怎么买", "一共花多少", "值不值得"]],
        ["02 / 4.5 万播放", "为什么被云端坑了", "视频号", "把云端方案里常被忽略的账单、限制和维护成本摊开讲。", ["云端账单", "踩坑复盘", "本地对比"]],
        ["03 / 23 条实测", "OpenClaw 完整系列", "从选机器到接微信", "把选机器、部署、连接微信和运行规则拆成可以跟着走的步骤。", ["真机演示", "不藏步骤", "持续更新"]],
      ],
      discover: "完整视频：微信视频号搜索“贺叔 AI”；抖音号 29148039839。",
    },
    products: {
      kicker: "Products / 从免费到落地",
      title: "不只看内容，把 AI 真正装进你的工作。",
      intro: "先自己跑；遇到具体问题再付费。没有亲自验证过的工具，我不会拿来卖答案。",
      items: [
        {
          index: "01 / OPEN SOURCE",
          price: "¥0",
          title: "开源 AI Skills",
          description: "先拿走我真正在用的工具和工作流。能自己跑通，就不必为答案付费。",
          tags: ["持续更新", "直接使用", "公开可验证"],
          action: "去 GitHub",
          href: "https://github.com/brightac/heshu-ai",
          external: true,
          featured: false,
        },
        {
          index: "02 / CURRENT",
          price: "¥199 / 年",
          title: "AI Agent 落地答疑群",
          description: "群主有问必答；高频问题沉淀为《OpenClaw 避坑手册》，随群持续更新，不单卖。",
          tags: ["预售 30 人开群", "不满全退", "承诺不涨价"],
          action: "微信预售",
          href: "#contact",
          external: false,
          featured: true,
        },
        {
          index: "03 / WAITLIST",
          price: "¥1,999",
          title: "AI Agent 实操工作坊",
          description: "围绕群内最高频的真实问题，现场跑通一条可以每天使用的 AI 工作流。",
          tags: ["真实任务", "现场跑通", "候补开放"],
          action: "加入候补",
          href: "#contact",
          external: false,
          featured: false,
        },
      ],
      privateTitle: "需要一对一共创？",
      privateText: "目前仅申请制，一次只跑 1 个真实目标：工作流自动化、Side Project 或 AI 自媒体流水线。卖技能，不承诺涨粉或收入结果。",
      privateAction: "申请共创",
    },
    capabilities: {
      kicker: "What I Share / 01—03",
      title: "每条内容，都要帮你做一个决定。",
      items: [
        ["GEAR / 01", "帮你选装备", "机器、模型、云端和本地方案，我先跑一遍，再告诉你什么值得买、什么只是贵。"],
        ["WORKFLOW / 02", "带你跑通工作流", "OpenClaw、Claude Code、Codex 与 AI Skills，关键步骤留在画面里，不靠剪辑制造魔法。"],
        ["FIELD NOTE / 03", "替你先踩坑", "成本、性能、稳定性、隐私和维护负担都算进答案；Demo 结束，真实使用才开始。"],
      ],
    },
    about: {
      label: "About / 认识我",
      title: "我不是 AI 原住民，是一路做系统的人。",
      paragraphs: [
        "40+，做了近 20 年系统、产品和技术管理，也踩过机器、云账单和工作流的坑。贺叔 AI 做的事很简单：把这些坑公开，让后来的人少交一次学费。",
        "我不贩卖“跟不上 AI”的焦虑。我的标准只有三个：真用过、真演示、能帮你做决定。",
      ],
    },
    venture: {
      kicker: "Current Venture / Torchcast.AI",
      title: "我的主业，是让 AI 学会认真预测。",
      intro:
        "我最近在 Torchcast.AI 做 AI 创业。我们正在构建 FFM——Forecast Foundation Model：它不只回答“会不会发生”，还要给出发生概率，并在新证据出现后持续更新判断。",
      link: "访问 Torchcast.AI",
      cardLabel: "FFM / FORECAST FOUNDATION MODEL",
      cardTitle: "给出概率，而不是装作确定。",
      cardItems: ["预测说 70%，长期看就应大约 70% 发生", "新证据出现后，及时更新判断", "把概率变成今天可以采取的行动"],
    },
    trust: {
      kicker: "Background / 2006—Now",
      title: "近 20 年，把复杂系统做成能每天运行的东西。",
      items: [
        ["01 / NOW", "Torchcast.AI", "AI 创业 · 推进 FFM，让 AI 面对不确定性时给出可校准、可更新的概率。"],
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
      eyebrow: "A Real Question First",
      title: <>你有一个具体的 AI 坑，<br />我先听问题。</>,
      detail: "加微信请备注：答疑群 / 工作坊 / 共创 / 合作。先确认问题是否匹配，再决定要不要付费。",
      email: "发邮件聊合作",
      wechat: "个人微信",
      wechatValue: "heshu-AI",
      qrAlt: "贺叔 AI 的个人微信二维码",
      scan: "扫码添加 · 请备注来意",
    },
    footerLocation: "新加坡 · Singapore",
    footerData: "只讲我真用过的装备，只说值不值得装。",
  },
  en: {
    htmlLang: "en",
    brand: "Heshu AI",
    nav: { works: "Work", products: "Products", content: "Content", about: "About", venture: "Venture" },
    languageLabel: "中文",
    languageHref: "/",
    languageAria: "切换到中文",
    status: "JOIN PRESALE",
    hero: {
      eyebrow: "FIELD-TESTED AI GEAR · REAL WORKFLOWS · SOLO BUILDING",
      title: "The AI gear guide",
      titleAccent: "for technical people",
      mantra: "I only cover gear I have used—and whether it is worth installing.",
      intro: "Machines, models, cloud, or local: I run it first, then tell you what is worth buying and what is merely expensive.",
      proof: "840K+ cross-platform views｜514K top video｜4,409 shares｜23 field tests",
      productNote: "RMB 199 / year · AI Agent implementation Q&A · opens at 30 presales",
      primaryAction: "See selected work",
      secondaryAction: "Join the Q&A",
      cardAria: "Portrait of Heshu AI with a field-tested technology overview",
    },
    metricsLabel: "Verifiable content results",
    metrics: [
      ["Audience Reach", "840K+", "combined WeChat, Douyin, and Xiaohongshu views"],
      ["Top Work", "514K", "views for one cross-platform field test"],
      ["Social Proof", "4,409", "shares of the top WeChat Channels video"],
      ["Field Tests", "23", "videos in the OpenClaw series"],
    ],
    metricsNote: "Platform creator-dashboard data as of July 2026; cross-platform totals are not deduplicated.",
    works: {
      kicker: "Selected Works / 01—03",
      title: "Three pieces that show how I help people decide.",
      intro: "Not the best specification on paper—the setup you can afford, keep running, and justify installing.",
      items: [
        ["01 / 514K VIEWS", "Choose a machine you can afford to keep", "331K WeChat + 183K Douyin", "A practical AI hardware decision built around total cost, shared 4,409 times on WeChat Channels.", ["What to buy", "Total cost", "Worth it?"]],
        ["02 / 45K VIEWS", "How the cloud trapped me", "WeChat Channels", "A field report on bills, limits, and maintenance costs that polished cloud demos leave out.", ["Cloud bills", "Failure review", "Local vs cloud"]],
        ["03 / 23 TESTS", "The complete OpenClaw series", "From hardware to WeChat", "Machine choice, deployment, WeChat connection, and operating rules—broken into steps people can follow.", ["Live demo", "No hidden steps", "Continuously updated"]],
      ],
      discover: "Watch the full series by searching “贺叔 AI” on WeChat Channels, or Douyin ID 29148039839.",
    },
    products: {
      kicker: "Products / From Free to Working",
      title: "Move from watching AI to running it in real work.",
      intro: "Try the open tools first. Pay only when you have a concrete implementation problem.",
      items: [
        {
          index: "01 / OPEN SOURCE",
          price: "FREE",
          title: "Open-source AI Skills",
          description: "Take the tools and workflows I actually use. If you can run it yourself, you should not have to pay for the answer.",
          tags: ["Continuously updated", "Use directly", "Publicly verifiable"],
          action: "Open GitHub",
          href: "https://github.com/brightac/heshu-ai",
          external: true,
          featured: false,
        },
        {
          index: "02 / CURRENT · CHINESE",
          price: "RMB 199 / YEAR",
          title: "AI Agent Implementation Q&A",
          description: "I answer implementation questions; recurring problems become a living OpenClaw field guide included with membership.",
          tags: ["Opens at 30 presales", "Refund if it does not open", "Price locked"],
          action: "Join via WeChat",
          href: "#contact",
          external: false,
          featured: true,
        },
        {
          index: "03 / WAITLIST · CHINESE",
          price: "RMB 1,999",
          title: "AI Agent Hands-on Workshop",
          description: "Built from the community’s most common problems, with one real workflow running by the end of the session.",
          tags: ["Real task", "Run it live", "Waitlist open"],
          action: "Join waitlist",
          href: "#contact",
          external: false,
          featured: false,
        },
      ],
      privateTitle: "Need one-to-one co-building?",
      privateText: "Application only. I take one real objective at a time: workflow automation, a side project, or an AI content system. I sell implementation skill—not growth or income promises.",
      privateAction: "Apply to co-build",
    },
    capabilities: {
      kicker: "What I Share / 01—03",
      title: "Every piece should help you make a decision.",
      items: [
        ["GEAR / 01", "Choose the right gear", "I run machines, models, cloud setups, and local stacks before saying what is worth buying—and what is merely expensive."],
        ["WORKFLOW / 02", "See the real workflow", "OpenClaw, Claude Code, Codex, and AI Skills, with the important steps left visible instead of edited into magic."],
        ["FIELD NOTE / 03", "Learn from the failures", "Cost, performance, stability, privacy, and maintenance all count. Real use begins where the polished demo ends."],
      ],
    },
    about: {
      label: "About / Field Notes",
      title: "Not AI-native. System-native.",
      paragraphs: [
        "I am 40+ with nearly two decades across engineering, product, and technology leadership. I have paid for the wrong machines, surprising cloud bills, and brittle workflows. Heshu AI makes those mistakes public so the next builder can skip one.",
        "I do not sell anxiety about falling behind. My standard is simple: use it, show it, and help someone decide.",
      ],
    },
    venture: {
      kicker: "Current Venture / Torchcast.AI",
      title: "My day job is teaching AI to forecast seriously.",
      intro: "At Torchcast.AI, I am building FFM—Forecast Foundation Model. It should not only answer whether something will happen; it should assign a probability and update that judgment as new evidence arrives.",
      link: "Visit Torchcast.AI",
      cardLabel: "FFM / FORECAST FOUNDATION MODEL",
      cardTitle: "Probabilities—not performed certainty.",
      cardItems: ["If a forecast says 70%, roughly 70% should happen over time", "Update the judgment when new evidence arrives", "Turn probabilities into actions people can take today"],
    },
    trust: {
      kicker: "Background / 2006—Now",
      title: "Nearly two decades turning complex systems into daily operations.",
      items: [
        ["01 / NOW", "Torchcast.AI", "Building FFM so AI can return calibrated, updateable probabilities for uncertain real-world events."],
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
      eyebrow: "A Real Question First",
      title: <>Bring one concrete AI problem.<br />I will start by listening.</>,
      detail: "On WeChat, add a note: Q&A / Workshop / Co-build / Partnership. We first confirm whether the problem fits, then decide whether payment makes sense.",
      email: "Email about partnerships",
      wechat: "Personal WeChat",
      wechatValue: "heshu-AI",
      qrAlt: "Personal WeChat QR code for Heshu AI",
      scan: "Scan to add · include your topic",
    },
    footerLocation: "Singapore",
    footerData: "Only gear I have used—and whether it is worth installing.",
  },
} as const;

export function PersonalSite({ language }: { language: Language }) {
  const copy = content[language];
  const languageHref = `${publicBase}${copy.languageHref}`;

  return (
    <div className="site-frame" lang={copy.htmlLang}>
      <header className="shell topbar">
        <a className="brand" href="#top" aria-label={language === "zh" ? "返回首页" : "Back to top"}>
          <span className="brand-mark" aria-hidden="true">HS</span>
          <span>{copy.brand}</span>
        </a>
        <nav className="nav" aria-label={language === "zh" ? "主导航" : "Main navigation"}>
          <a href="#works">{copy.nav.works}</a>
          <a href="#products">{copy.nav.products}</a>
          <a href="#capabilities">{copy.nav.content}</a>
          <a href="#about">{copy.nav.about}</a>
          <a href="#venture">{copy.nav.venture}</a>
          <a className="language-switch" href={languageHref} aria-label={copy.languageAria}>{copy.languageLabel}</a>
          <a className="status" href="#products">{copy.status}</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-stage" aria-labelledby="hero-title">
          <ParticleField />
          <div className="hero-grid shell">
            <div className="hero-copy fade-up">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1 id="hero-title"><span>{copy.hero.title}</span><span className="gradient">{copy.hero.titleAccent}</span></h1>
              <p className="hero-mantra">{copy.hero.mantra}</p>
              <p className="intro">{copy.hero.intro}</p>
              <p className="hero-proof">{copy.hero.proof}</p>
              <a className="venture-note" href="#products"><span aria-hidden="true">◈</span>{copy.hero.productNote}</a>
              <div className="actions" aria-label={language === "zh" ? "主要行动" : "Primary actions"}>
                <a className="btn primary" href="#works">{copy.hero.primaryAction} <span aria-hidden="true">↓</span></a>
                <a className="btn secondary" href="#products">{copy.hero.secondaryAction} <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <figure className="hero-visual creator-visual fade-up" aria-label={copy.hero.cardAria}>
              <div className="orbit orbit-outer" aria-hidden="true"><i /><i /><i /></div>
              <div className="orbit orbit-middle" aria-hidden="true"><i /><i /></div>
              <div className="orbit orbit-inner" aria-hidden="true" />
              <div className="portrait-field">
                <div className="portrait-aura" aria-hidden="true" />
                <Image src={`${publicBase}/heshu-avatar.jpg`} alt={language === "zh" ? "贺叔 AI 头像" : "Portrait of Heshu AI"} width={1024} height={1024} priority unoptimized />
                <div className="portrait-mesh" aria-hidden="true" />
                <div className="signal-slice" aria-hidden="true" />
              </div>
              <div className="telemetry telemetry-top" aria-hidden="true"><span>CREATOR / 01</span><strong>HESHU AI</strong></div>
              <div className="telemetry telemetry-side" aria-hidden="true"><span>REAL TESTS</span><strong>FIELD NOTES</strong></div>
              <div className="telemetry telemetry-bottom" aria-hidden="true"><span>OPEN SOURCE</span><strong>BUILD IN PUBLIC</strong></div>
              <figcaption>{language === "zh" ? "个人品牌 · AI 装备实测 · 一人公司" : "Personal brand · AI field tests · Solo company"}</figcaption>
            </figure>
          </div>
          <div className="hero-ticker" aria-hidden="true">
            <span>USE IT</span><i />
            <span>SHOW IT</span><i />
            <span>HELP DECIDE</span><i />
            <span>HESHU AI</span>
          </div>
        </section>

        <section className="metrics-wrap" aria-label={copy.metricsLabel}>
          <div className="shell metrics">
            {copy.metrics.map(([label, value, detail]) => <div className="metric" key={label}><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>)}
          </div>
          <p className="shell metrics-note">{copy.metricsNote}</p>
        </section>

        <section className="shell works-section" id="works" aria-labelledby="works-title">
          <div className="section-heading experience-heading"><p className="section-kicker">{copy.works.kicker}</p><div><h2 id="works-title">{copy.works.title}</h2><p className="section-intro">{copy.works.intro}</p></div></div>
          <div className="works-grid">
            {copy.works.items.map(([index, title, platform, description, tags]) => <article className="work-card" key={title}><div className="work-index">{index}</div><h3>{title}</h3><p className="work-platform">{platform}</p><p className="work-description">{description}</p><ul aria-label={`${title} tags`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}
          </div>
          <p className="content-discovery">{copy.works.discover}</p>
        </section>

        <section className="products-wrap" id="products" aria-labelledby="products-title">
          <div className="shell products-section">
            <div className="section-heading"><p className="section-kicker">{copy.products.kicker}</p><div><h2 id="products-title">{copy.products.title}</h2><p className="section-intro">{copy.products.intro}</p></div></div>
            <div className="product-grid">
              {copy.products.items.map((product) => (
                <article className={`product-card${product.featured ? " featured" : ""}`} key={product.title}>
                  <span className="product-index">{product.index}</span>
                  <strong className="product-price">{product.price}</strong>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <ul>{product.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <a className="product-action" href={product.href} target={product.external ? "_blank" : undefined} rel={product.external ? "noreferrer" : undefined}>{product.action} <span aria-hidden="true">↗</span></a>
                </article>
              ))}
            </div>
            <aside className="private-offer">
              <div><span>ONE-TO-ONE / APPLICATION ONLY</span><h3>{copy.products.privateTitle}</h3><p>{copy.products.privateText}</p></div>
              <a className="btn secondary" href="#contact">{copy.products.privateAction} <span aria-hidden="true">↗</span></a>
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

        <section className="shell about" id="about" aria-labelledby="about-title">
          <div className="section-label">{copy.about.label}</div>
          <div className="about-copy"><h2 id="about-title">{copy.about.title}</h2>{copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="shell principles" aria-labelledby="principles-title">
          <div className="section-label">{copy.principles.label}</div>
          <div><h2 id="principles-title">{copy.principles.title}</h2><ol>{copy.principles.items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div>
        </section>

        <section className="capabilities-wrap" id="experience" aria-labelledby="experience-title">
          <div className="shell capabilities-section">
            <div className="section-heading"><p className="section-kicker">{copy.trust.kicker}</p><h2 id="experience-title">{copy.trust.title}</h2></div>
            <div className="capability-grid">
              {copy.trust.items.map(([index, company, description]) => <article className="capability" key={company}><span>{index}</span><h3>{company}</h3><p>{description}</p></article>)}
            </div>
          </div>
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

        <section className="contact-wrap" id="contact" aria-labelledby="contact-title">
          <div className="shell contact">
            <p className="eyebrow">{copy.contact.eyebrow}</p>
            <h2 id="contact-title">{copy.contact.title}</h2>
            <p className="contact-detail">{copy.contact.detail}</p>
            <div className="contact-options">
              <div className="contact-methods">
                <a className="contact-link" href="mailto:cranelee@gmail.com">{copy.contact.email} <span aria-hidden="true">↗</span></a>
                <div className="wechat-contact"><span>{copy.contact.wechat}</span><strong>{copy.contact.wechatValue}</strong></div>
              </div>
              <figure className="qr-card">
                <Image src={`${publicBase}/wechat-qr.jpg`} alt={copy.contact.qrAlt} width={888} height={1131} unoptimized />
                <figcaption>{copy.contact.scan}</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer"><span>{copy.brand}</span><span>{copy.footerLocation}</span><span>{copy.footerData}</span></footer>
    </div>
  );
}
