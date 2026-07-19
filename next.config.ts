import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "heshu-ai";
const isGitHubUserSite = repositoryName.endsWith(".github.io");
const basePath = isGitHubPages && !isGitHubUserSite ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
