---
name: node24-security-baseline
description: >-
  Enforces the project's Node 24 Active LTS security baseline, CI/CD workflow
  transparency and least-privilege permissions, immutable Action SHA pinning,
  single-lockfile policy, third-party dependency (node_modules) residual
  sanitization, and static web application security boundary defense for Let Love Fly.
  Activate this skill whenever modifying CI/CD workflows (.github/workflows),
  Dockerfiles, dependencies, build scripts, or performing security audits.
---

# Node 24 資安基準與靜態站台強化規範 (讓愛飛翔 - Let Love Fly)

本規範定義 **讓愛飛翔 (Let Love Fly)** 忠美扶輪社年度服務計畫公益網站之執行環境資安基準、GitHub Actions 最小權限與不可變 SHA Pinning 規範、第三方套件殘留檔清消機制，以及 Vite React 靜態站台資安威脅防護邊界。

---

## 1. 核心資安原則 (Mandatory Security Policy)

1. **全面棄用 Node 18 與 Node 20**：
   * Node 18 已於 2025-04-30 終止支援（EOL）。
   * **Node 20 已 EOL（Node 20 於 2026-04-30 終止支援）**。
   * 本專案所有程式碼、註解、腳本說明、CI/CD 設定以及 `node_modules` 第三方套件殘留檔，**嚴禁使用舊版 18 或 20 之容器映像標籤或版本設定**，統一強制採用 **Node 24 Active LTS**（容器映像固定為 `FROM node:24-slim` 或 `FROM node:24-alpine`）。
2. **單一事實來源 (Single Lockfile Policy)**：
   * 統一使用 `npm` 與 [`package-lock.json`](../../../package-lock.json)。
   * 專案目錄下嚴禁混用 `bun.lock`、`bun.lockb`、`yarn.lock` 或 `pnpm-lock.yaml`，避免相依樹發生環境漂移。
3. **版本鎖定檔案一致性**：
   * [`package.json`](../../../package.json)：`"engines": { "node": ">=24.0.0", "npm": ">=10.0.0" }`
   * [`.nvmrc`](../../../.nvmrc) 與 [`.node-version`](../../../.node-version)：固定為 `24`

---

## 2. GitHub Actions CI/CD 透明、最小權限與不可變 SHA 規範

編輯 [`.github/workflows/deploy.yml`](../../../.github/workflows/deploy.yml) 時必須遵守以下規範：

1. **頂層強制 Node 24 Action Runtime**：
   * 必須在 Workflow 頂層 `env:` 設定 `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`，強制所有 Runner 上的 JavaScript Actions 底層皆以 Node 24 執行。
2. **最小權限原則 (Principle of Least Privilege)**：
   * 嚴禁在 Workflow 頂層設置全域寫入權限。
   * Workflow 頂層與 `build` job 僅賦予唯讀權限：
     ```yaml
     permissions:
       contents: read
     ```
   * 僅有發布階段的 `deploy` job 才允許 Pages 與 OIDC 憑證寫入權限：
     ```yaml
     permissions:
       pages: write
       id-token: write
     ```
3. **不可變 Commit SHA Pinning（防範供應鏈攻擊與標籤劫持）**：
   * 嚴禁在生產 CI/CD 中使用浮動 Major Tag（如 `@v4`、`@v3`）。所有 Action 必須鎖定完整 40 位元 Git Commit SHA，並以註解標示對應版本號：
     * `actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2`
     * `actions/setup-node@1d0ff469b7ec7b3cb9d8673fde0c81c44821de2a # v4.2.0`
     * `actions/upload-pages-artifact@56afc609e74202658d3ffba0e8f6dda462b719fa # v3.0.1`
     * `actions/deploy-pages@d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e # v4.0.5`
4. **顯式設定 Node 24 與快取**：
   * 必須顯式宣告 `actions/setup-node` 並指定 `node-version: 24` 與 `cache: 'npm'`，隨後依序執行 `npm ci` 與 `npm run build`。

---

## 3. 第三方套件 (`node_modules`) 殘留檔強制清消機制

針對第三方套件隨 npm tarball 釋出的殘留檔，透過 [`scripts/enforce-node24.mjs`](../../../scripts/enforce-node24.mjs) 進行自動清消與守門：
1. **執行期守門**：綁定於 `package.json` 的 `postinstall` 與 `prebuild`。當執行環境 Node 主版本 $\le 20$ 時立即中斷退出（`exit(1)`）。
2. **殘留設定修正**：自動將 `node_modules` 內部殘留的 Dockerfile 改寫為 `FROM node:24-slim`，並將工作流檔案中的 `node-version` 改寫為 `'24'`。

---

## 4. 專案資安威脅防護邊界 (Threat Model & Security Boundary)

1. **純靜態 SPA 架構 (Client-Side CSR / SSG)**：
   * 本站採用 Vite 打包純靜態 React SPA（產物位於 `./dist`）並發佈於 GitHub Pages CDN。
   * 生產環境無 Node.js 伺服端中介層或伺服器端渲染 (SSR)。
2. **防範點擊劫持 (Clickjacking) 與安全標頭整合**：
   * 採用 **OWASP 推薦之標準 Frame-Busting 防禦機制**（於 [`index.html`](../../../index.html) 注入防篡改 style 與驗證腳本），防止惡意站台以 iframe 內嵌進行點擊劫持。
   * 配置標準化 `<meta http-equiv="Content-Security-Policy">`、`<meta http-equiv="X-Content-Type-Options" content="nosniff">` 與 `<meta name="referrer" content="strict-origin-when-cross-origin">`。
   * 於 [`public/_headers`](../../../public/_headers) 配置企業級 HTTP 安全標頭（含 HSTS、CSP、Nosniff、Permissions-Policy 等），便於透過 Netlify 或 Cloudflare Edge 發布時直接繼承生效。
3. **第三方指令碼供應鏈與 CSP 關鍵連線白名單（確保站台不 Crash）**：
   本專案業務邏輯高度依賴外部服務，CSP 策略已嚴格白名單化，確保防護的同時站台功能完全正常：
   * **Google Apps Script API (畫作收藏狀態)**：`connect-src` 必須包含 `https://script.google.com` 與 `https://script.googleusercontent.com`（GAS API 重新導向目標），否則收藏狀態拉取將遭瀏覽器阻斷崩潰。
   * **醫療服務照片 (Unsplash)**：`img-src` 包含 `https://images.unsplash.com`。
   * **前導紀錄片內嵌 (YouTube)**：`frame-src` 包含 `https://www.youtube.com` 與 `https://www.youtube-nocookie.com`。
   * **流量分析 (Google Tag Manager)**：`script-src`、`connect-src`、`img-src` 包含 `https://www.googletagmanager.com` 與 `https://*.google-analytics.com`。

4. **零殘留依賴與開發伺服器隔離 (Zero Dependency Bloat & Safe Dev Server)**：
   * 專案為純前端靜態 React SPA，嚴禁引入後端框架（如 `express`）、已廢棄且含原型污染之套件（如 `xlsx`）或未使用的 LLM SDK（如 `@google/genai`）。
   * 本地開發伺服器嚴禁綁定 `0.0.0.0` 全網段，一律強制限制於本機環回介面 `127.0.0.1:3000`。
   * 嚴禁在 `vite.config.ts` 使用 `define` 將後端金鑰注入至客戶端 JS 產物中。

---

## 5. 驗證步驟 (Verification Runbook)

每次更新相依套件或 CI/CD 流程後，請依序執行：
```powershell
# 1. 執行版本檢查與清消腳本
node scripts/enforce-node24.mjs

# 2. 靜態特徵掃描
git grep --untracked --no-exclude-standard -I -i -n -E "FROM[[:space:]]+node|node-version"

# 3. 依賴弱點掃描
npm audit

# 4. 完整建置測試 (確保站台編譯正常)
npm run build
```
