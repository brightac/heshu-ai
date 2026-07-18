import { ParticleField } from "./ParticleField";

const experience = [
  {
    index: "01 / 2022—至今",
    company: "ArtiusGlobal · 新加坡",
    role: "技术负责人",
    description:
      "面向银行、保险与资管机构，带领团队建设金融合规 SaaS、监管申报与数据整合系统，覆盖 20 多个国家和地区。",
    tags: ["RegTech", "SaaS", "数据治理", "信息安全"],
  },
  {
    index: "02 / 2013—2022",
    company: "PINTEC & JIMU Group",
    role: "产品技术 VP / COO / 管理合伙人",
    description:
      "深度参与一家互联网金融公司从初创到上市，跨越产品、技术、增长、运营与金融业务，协调多地团队把复杂系统跑起来。",
    tags: ["0→1→IPO", "金融科技", "跨国团队", "组织管理"],
  },
  {
    index: "03 / 2007—2013",
    company: "北京普瑞明特",
    role: "总经理",
    description:
      "带领技术团队服务百度、联想、去哪儿、爱普生、思科等客户，完成从需求拆解到系统交付与长期运营。",
    tags: ["技术交付", "团队建设", "企业服务"],
  },
];

const capabilities = [
  {
    code: "GEAR / 01",
    title: "帮你选装备",
    description:
      "不看参数表空谈。我把机器、模型、云端与本地方案都跑一遍，告诉你什么值得买，什么只是贵。",
  },
  {
    code: "WORKFLOW / 02",
    title: "带你跑通工作流",
    description:
      "围绕 OpenClaw、Claude Code、Codex 与 AI Skills，做看得见的实操，不把关键步骤藏在剪辑后面。",
  },
  {
    code: "FIELD NOTE / 03",
    title: "替你先踩坑",
    description:
      "成本、性能、稳定性、隐私与维护负担，都是真实使用的一部分。我的内容从这些问题开始，而不是在 Demo 结束。",
  },
];

export default function Home() {
  return (
    <div className="site-frame">
      <header className="shell topbar">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark" aria-hidden="true">
            LH
          </span>
          <span>贺叔 AI</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#about">介绍</a>
          <a href="#capabilities">内容</a>
          <a href="#works">代表作</a>
          <a href="#experience">关于我</a>
          <a className="status" href="mailto:cranelee@gmail.com">
            OPEN TO BUILD
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="shell hero" aria-labelledby="hero-title">
          <ParticleField />
          <div className="hero-copy fade-up">
            <p className="eyebrow">AI Gear · Real Tests · Less Hype</p>
            <h1 id="hero-title">
              技术人的
              <span className="gradient">AI 装备师。</span>
            </h1>
            <p className="intro">
              <strong>贺叔 AI</strong>。真用过，真演示，帮技术人、职场人和一人公司选 AI 装备、避坑省钱。
              我不贩卖焦虑，只分享自己跑过的机器、工作流和真实成本。
            </p>
            <div className="actions" aria-label="主要行动">
              <a
                className="btn primary"
                href="mailto:cranelee@gmail.com?subject=%E8%81%8A%E8%81%8A%E5%90%88%E4%BD%9C"
              >
                聊聊 AI <span aria-hidden="true">↗</span>
              </a>
              <a className="btn secondary" href="#works">
                看代表作 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="system-card fade-up" aria-label="能力系统概览">
            <div className="card-head">
              <span>Field-tested AI / Profile</span>
              <span>● ONLINE</span>
            </div>
            <div className="core">
              <span className="node node-ai">OPENCLAW</span>
              <span className="node node-product">CLAUDE CODE</span>
              <span className="node node-compliance">CODEX</span>
              <span className="node node-ops">AI SKILLS</span>
              <div className="core-label">
                USE IT
                <br />
                FOR REAL
              </div>
            </div>
            <div className="system-flow" aria-hidden="true">
              <div className="flow-row">
                <span>真用过</span>
                <i />
                <b>01</b>
              </div>
              <div className="flow-row">
                <span>真演示</span>
                <i />
                <b>02</b>
              </div>
              <div className="flow-row">
                <span>帮决策</span>
                <i />
                <b>03</b>
              </div>
            </div>
          </aside>
        </section>

        <section className="metrics-wrap" aria-label="重点数据">
          <div className="shell metrics">
            <div className="metric">
              <small>Field Time</small>
              <strong>84 万+</strong>
              <span>四平台累计播放</span>
            </div>
            <div className="metric">
              <small>Community</small>
              <strong>8,800+</strong>
              <span>四平台关注者</span>
            </div>
            <div className="metric">
              <small>Content Library</small>
              <strong>23 条</strong>
              <span>OpenClaw 系列视频</span>
            </div>
            <div className="metric">
              <small>Platforms</small>
              <strong>4 个</strong>
              <span>视频号、抖音、小红书、YouTube</span>
            </div>
          </div>
        </section>

        <section className="shell about" id="about" aria-labelledby="about-title">
          <div className="section-label">About / 认识我</div>
          <div className="about-copy">
            <h2 id="about-title">玩 AI，还是被 AI 玩？</h2>
            <p>
              AI 工具越来越多，真正稀缺的不是新名词，而是判断：这台机器养不养得起？这个工作流能不能每天跑？本地与云端到底怎么选？
            </p>
            <p>
              我是 40+ 的 Fintech 工程师出身，也是一人公司实践者。近 20 年从写代码走到产品、技术与组织管理。现在，我把这些经验拿来拆 AI：不追热闹，追可用；不背概念，做实操。
            </p>
          </div>
        </section>

        <section className="capabilities-wrap" id="capabilities" aria-labelledby="capabilities-title">
          <div className="shell capabilities-section">
            <div className="section-heading">
              <p className="section-kicker">What I Share / 01—03</p>
              <h2 id="capabilities-title">每条内容，都要帮你做一个决定。</h2>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.code}>
                  <span>{capability.code}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell experience" id="works" aria-labelledby="works-title">
          <div className="section-heading experience-heading">
            <p className="section-kicker">Selected Works / 01—03</p>
            <h2 id="works-title">真正被需要的内容，会自己长尾。</h2>
          </div>
          <div className="experience-list">
            <article className="role">
              <div className="role-index">01 / 51 万播放</div>
              <div><h3>先选一台“养得起”的机器</h3><p className="role-title">视频号 + 抖音</p></div>
              <div className="role-detail"><p>从真实成本出发做 AI 硬件决策。视频号 33.1 万、抖音 18.3 万播放，视频号分享 4,409 次。</p><ul aria-label="作品关键词"><li>帮决策</li><li>成本测算</li><li>社交裂变</li></ul></div>
            </article>
            <article className="role">
              <div className="role-index">02 / 4.5 万播放</div>
              <div><h3>为什么被云端坑了</h3><p className="role-title">视频号</p></div>
              <div className="role-detail"><p>把云端方案里常被忽略的账单、限制和维护成本摊开讲，踩坑避雷题型与目标人群强共鸣。</p><ul aria-label="作品关键词"><li>云端成本</li><li>踩坑复盘</li><li>方案对比</li></ul></div>
            </article>
            <article className="role">
              <div className="role-index">03 / S01—S03</div>
              <div><h3>OpenClaw 系列</h3><p className="role-title">23 条季播视频</p></div>
              <div className="role-detail"><p>从选机器、接微信到三条铁律，用一季一个问题的方式，把完整实践拆成可跟随的步骤。</p><ul aria-label="作品关键词"><li>OpenClaw</li><li>实机演示</li><li>季播内容</li></ul></div>
            </article>
          </div>
        </section>

        <section className="capabilities-wrap" id="experience" aria-labelledby="experience-title">
          <div className="shell capabilities-section">
            <div className="section-heading">
              <p className="section-kicker">Why Trust Me / 2006—Now</p>
              <h2 id="experience-title">不是 AI 原住民，是一路做系统的人。</h2>
            </div>
            <div className="capability-grid">
              {experience.map((item) => (
                <article className="capability" key={item.company}>
                  <span>{item.index}</span>
                  <h3>{item.company}</h3>
                  <p>{item.role}。{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell principles" aria-labelledby="principles-title">
          <div className="section-label">Operating Principles</div>
          <div>
            <h2 id="principles-title">我的内容防伪码</h2>
            <ol>
              <li>
                <span>01</span>
                真用过：没有跑过的工具，不做结论式推荐。
              </li>
              <li>
                <span>02</span>
                真演示：关键步骤放到台面上，不靠剪辑制造魔法。
              </li>
              <li>
                <span>03</span>
                帮决策：每条内容都回答“你该怎么选”，不只解释“它是什么”。
              </li>
            </ol>
          </div>
        </section>

        <section className="contact-wrap" id="contact" aria-labelledby="contact-title">
          <div className="shell contact">
            <p className="eyebrow">Let&apos;s Build Something Real</p>
            <h2 id="contact-title">想少踩一个 AI 坑？<br />先从真实问题聊起。</h2>
            <a className="contact-link" href="mailto:cranelee@gmail.com">
              发邮件聊聊 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <span>贺叔 AI</span>
        <span>新加坡 · Singapore</span>
        <span>数据截至 2026.07 · © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
