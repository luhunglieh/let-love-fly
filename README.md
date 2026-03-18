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

## 技術架構

本網站採用 **Vite** 靜態網站打包工具建置，並整合以下功能：
- 建置工具：Vite
- 前端框架：React 19
- 語言：TypeScript
- 樣式：Tailwind CSS 4
- 路由：React Router

## 後臺程式運作

後臺採用 GAS (Google Apps Script) 建置，並整合以下功能：
- 建置工具：GAS
- 資料：Google Sheets (非 xlsx)

注意
- localhost call GAS 不會成功(Google不回應 localhost)
- 部署 Github pages後會成功

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
