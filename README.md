# 幻影空间（HuanSpace）

## AI 图片生成应用

### ✨ 功能特性
- **创作页**：输入提示词，选择风格预设，一键生成 AI 画面
- **灵感页**：瀑布流展示 AI 作品
- **个人中心**：查看自己的作品、收藏、草稿

### 🚀 技术栈
- Cordova + Android
- Tailwind CSS + Material Design
- Sensenova API (sensenova-u1-fast)

### 🔧 构建方式
GitHub Actions 自动构建 Android APK

### 📁 项目结构

```
huanSpace/
├── www/           # Cordova 移动端源码（Android APK 构建）
├── web/           # Web 版源码（Node.js + Express 后端）
└── config.xml     # Cordova 配置
```

- **`www/`** — Cordova 移动端版本，通过 GitHub Actions 构建 Android APK
- **`web/`** — Web 服务器版本，本地运行 `npm start` 即可在浏览器中访问

### 🔑 配置 API Key
本项目调用商汤 **SenseNova** 图像生成接口（`sensenova-u1-fast`）。开源版本中**不包含任何可用的 Key**：
- **移动端**：打开 `www/index.html`，替换 `SENSENOVA_API_KEY`
- **Web 版**：编辑 `web/.env` 或 `web/server.js` 中的 `SENSENOVA_API_KEY`

> 安全提示：请勿将真实 Key 提交到公开仓库，建议通过环境变量或本地配置文件注入。
