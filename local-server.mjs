import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import worker from "./dist/server/index.js";

const host = process.env.SITE_HOST || "127.0.0.1";
const port = Number(process.env.SITE_PORT || 3000);
const root = path.dirname(fileURLToPath(import.meta.url));
const assetsRoot = path.join(root, "dist", "client");

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function safeAssetPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relative = decoded.replace(/^\/+/, "");
  const candidate = path.resolve(assetsRoot, relative);
  const prefix = `${path.resolve(assetsRoot)}${path.sep}`;
  return candidate.startsWith(prefix) ? candidate : null;
}

const assets = {
  async fetch(request) {
    const url = new URL(request.url);
    const assetPath = safeAssetPath(url.pathname);
    if (!assetPath) return new Response("Not found", { status: 404 });

    try {
      const info = await stat(assetPath);
      if (!info.isFile()) return new Response("Not found", { status: 404 });
      const body = await readFile(assetPath);
      const headers = new Headers({
        "cache-control": url.pathname.startsWith("/_next/static/")
          ? "public, max-age=31536000, immutable"
          : "no-cache",
        "content-length": String(body.length),
        "content-type": contentTypes.get(path.extname(assetPath).toLowerCase()) || "application/octet-stream",
      });
      return new Response(request.method === "HEAD" ? null : body, { status: 200, headers });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

const executionContext = {
  passThroughOnException() {},
  waitUntil(promise) {
    Promise.resolve(promise).catch(() => {});
  },
};

async function sendResponse(nodeRequest, nodeResponse, webResponse) {
  nodeResponse.statusCode = webResponse.status;
  nodeResponse.statusMessage = webResponse.statusText;
  webResponse.headers.forEach((value, name) => nodeResponse.setHeader(name, value));

  if (nodeRequest.method === "HEAD" || !webResponse.body) {
    nodeResponse.end();
    return;
  }

  const body = Buffer.from(await webResponse.arrayBuffer());
  nodeResponse.end(body);
}

const server = http.createServer(async (request, response) => {
  try {
    const origin = `http://${request.headers.host || `${host}:${port}`}`;
    const url = new URL(request.url || "/", origin);

    const assetResponse = await assets.fetch(new Request(url, { method: request.method }));
    if (assetResponse.status !== 404) {
      await sendResponse(request, response, assetResponse);
      return;
    }

    const init = {
      method: request.method,
      headers: request.headers,
    };

    if (request.method !== "GET" && request.method !== "HEAD") {
      init.body = request;
      init.duplex = "half";
    }

    const webRequest = new Request(url, init);
    const webResponse = await worker.fetch(webRequest, { ASSETS: assets }, executionContext);
    await sendResponse(request, response, webResponse);
  } catch (error) {
    console.error(error);
    if (!response.headersSent) response.statusCode = 500;
    response.end("Local site server error");
  }
});

server.listen(port, host, () => {
  console.log(`Yongsu Jung website: http://${host}:${port}`);
});
