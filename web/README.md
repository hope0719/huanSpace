# 幻影空间 - AI 图片生成应用

一个基于 Sensenova API 的 AI 图片生成应用，具有现代化的深色主题 UI 设计。

## 📱 功能特性

- ✅ 三个主要页面：创作、灵感、个人中心
- ✅ 底部导航栏页面切换
- ✅ 风格预设选择（赛博朋克、3D大片、梦幻油画、抽象艺术）
- ✅ 接入 Sensenova API 生成图片
- ✅ 瀑布流作品展示
- ✅ 响应式设计，支持移动端
- ✅ 玻璃态效果（Glass Card UI）
- ✅ 流畅的动画效果

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动后端服务器

```bash
npm start
```

服务器将运行在 `http://localhost:3000`

### 3. 访问应用

在浏览器中打开：`http://localhost:3000`

## 🎨 使用说明

1. **创作页面**：
   - 输入创意提示词（支持中文）
   - 选择风格预设（可选）
   - 点击"立即生成"按钮
   - 等待 API 返回生成的图片

2. **灵感页面**：
   - 浏览其他用户生成的 AI 作品
   - 使用分类筛选（热门、最新、人像、风景、科幻）
   - 点击作品查看详情

3. **个人中心**：
   - 查看个人资料
   - 查看发布的作品、收藏的作品、草稿箱
   - 编辑个人资料

## 🔧 API 配置

### Sensenova API

应用使用 Sensenova `sensenova-u1-fast` 模型生成图片。

API 配置在 `server.js` 中：

```javascript
const SENSENOVA_API_KEY = process.env.SENSENOVA_API_KEY || 'your-api-key';
const SENSENOVA_API_URL = 'https://token.sensenova.cn/v1/images/generations';
```

如果需要修改 API Key，可以：
1. 修改 `.env` 文件中的 `SENSENOVA_API_KEY`
2. 或直接修改 `server.js` 中的 `SENSENOVA_API_KEY`

### API 请求参数

- `model`: `sensenova-u1-fast`
- `prompt`: 图片描述（支持中文）
- `size`: 图片尺寸（默认：`2752x1536`）
- `n`: 生成数量（默认：`1`）

## 📁 项目结构

```
幻影空间/
├── index.html          # 前端主页面
├── server.js          # 后端 API 服务器
├── package.json      # 项目依赖配置
├── .env              # 环境变量（API Key）
└── README.md         # 项目说明文档
```

## 🛠️ 技术栈

### 前端
- HTML5 + CSS3
- Tailwind CSS（通过 CDN）
- Material Symbols Outlined（图标库）
- Vanilla JavaScript

### 后端
- Node.js
- Express.js
- node-fetch（HTTP 请求）
- CORS（跨域支持）

### API
- Sensenova API（`sensenova-u1-fast` 模型）

## 🎯 待开发功能

- [ ] 显示生成的图片到灵感页面
- [ ] 图片历史记录
- [ ] 用户登录/注册
- [ ] 作品点赞、评论、分享
- [ ] 图片下载功能
- [ ] 批量生成图片
- [ ] 更多风格预设

## 🐛 常见问题

### 1. 端口被占用

如果 3000 端口被占用，修改 `server.js` 中的 `PORT` 变量：

```javascript
const PORT = 3001; // 改为其他端口
```

### 2. API 请求失败

检查：
- `.env` 文件中的 API Key 是否正确
- 网络连接是否正常
- Sensenova API 服务是否可用

### 3. 图片生成慢

`sensenova-u1-fast` 模型通常需要 10-30 秒生成图片，请耐心等待。

## 📄 许可证

MIT License

## 👨‍💻 作者

由 WorkBuddy AI 助手创建

---

**享受 AI 创作的乐趣！🎨✨**
