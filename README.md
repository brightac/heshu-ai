# 贺叔 AI

贺叔 AI 的中英文个人网站：AI 装备实测、真实工作流、产品与 Torchcast.AI 创业介绍。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

仓库内的 GitHub Actions 会在 `main` 分支更新后自动执行静态导出，并部署到 GitHub Pages。

- 根站：<https://brightac.github.io/>
- 原项目地址：<https://brightac.github.io/heshu-ai/>

同一份源码同时支持 GitHub 用户根站仓库 `brightac.github.io` 和普通项目仓库 `heshu-ai`：构建时会自动选择空路径或 `/heshu-ai` 前缀。

## 内容原则

> 只讲我真用过的装备，只说值不值得装。

- 中文首页：`/`
- English: `/en/`
- 微信：`heshu-AI`
- Torchcast.AI: <https://torchcast.ai>

## 开源产品

- [Agent Review 内容三审工作流](./products/agent-review/README.md)：三个独立视角复核同一份内容，95 分以下不发布。
