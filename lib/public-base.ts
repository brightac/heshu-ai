const configuredBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export const publicBase = repositoryName.endsWith(".github.io") ? "" : configuredBase;
