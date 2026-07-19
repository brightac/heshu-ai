import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Chinese creator and product journey", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /技术人的/);
  assert.match(html, /AI 装备师/);
  assert.match(html, /只讲我真用过的装备，只说值不值得装/);
  assert.match(html, /AI Agent 落地答疑群/);
  assert.match(html, /¥199 \/ 年/);
  assert.match(html, /预售 30 人开群/);
  assert.match(html, /三个 Agent 独立审/);
  assert.match(html, /95 分以下不发布/);
  assert.match(html, /heshu-AI/);
  assert.match(html, /Torchcast\.AI/);
  assert.doesNotMatch(html, /李贺/);
});

test("renders the English route with the same product facts", async () => {
  const response = await render("/en/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /The AI gear guide/);
  assert.match(html, /AI Agent Implementation Q&amp;A|AI Agent Implementation Q&A/);
  assert.match(html, /RMB 199 \/ YEAR/);
  assert.match(html, /opens at 30 presales/i);
  assert.match(html, /Three independent reviews/);
  assert.match(html, /Nothing ships below 95/);
  assert.match(html, /Forecast Foundation Model/);
});
