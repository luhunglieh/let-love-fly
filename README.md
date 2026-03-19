<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/a0b0726e-e3a5-4975-bba3-7d392762cfc2


# 讓愛飛翔 - Let Love Fly
忠美扶輪社年度服務計畫。

## 專案簡介

結合畫展與公益，義賣所得將捐贈給予需要的單位。

## 後臺程式運作

後臺採用 GAS (Google Apps Script) 建置，並整合以下功能：
- 建置工具：GAS
- 資料：Google Sheets (非 xlsx)

**注意 注意 注意**
- localhost call GAS api 不會成功(Google不回應 localhost)
- src code 不更動直接部署到 Github pages後會成功✅
- src code 無須模擬瀏覽器, 不會有 CORS 阻擋✅✅

## 技術架構

本網站採用 **Vite** 靜態網站打包工具建置，並整合以下功能：
- 建置工具：Vite
- 前端框架：React 19
- 語言：TypeScript
- 樣式：Tailwind CSS 4
- 路由：React Router

🎯 Vite 可以做什麼？

✅支援的框架：
- Vue.js（Vite原生支援最好）
- React
- Svelte
- Solid
- Vanilla JavaScript（純 JS/TS）
- Astro

✅主要功能：
- 開發伺服器（localhost）
- 自動刷新瀏覽器
- TypeScript 支援
- CSS 預處理器（Sass, Less, Stylus）
- 生產環境打包（使用 Rollup）
- 程式碼分割（Code Splitting）
- 靜態資源處理

## Run Locally

**Prerequisites:**  Node.js
0