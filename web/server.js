const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

// Sensenova API Configuration
// 安全修复：密钥仅从环境变量读取，禁止硬编码。原明文 Key 已泄露并作废。
const SENSENOVA_API_KEY = process.env.SENSENOVA_API_KEY;
if (!SENSENOVA_API_KEY) {
    console.error('[安全] 未检测到 SENSENOVA_API_KEY 环境变量，服务拒绝启动。请在 .env 或部署环境中配置该变量。');
    process.exit(1);
}
const SENSENOVA_API_URL = 'https://token.sensenova.cn/v1/images/generations';

// API Endpoint for image generation
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt, size = "2048x2048", n = 1, model = "sensenova-u1-fast" } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: '提示词不能为空' });
        }

        console.log('Generating image with prompt:', prompt);
        console.log('Using API URL:', SENSENOVA_API_URL);

        // Prepare request body for Sensenova API
        const requestBody = {
            model: model,
            prompt: prompt,
            size: size,
            n: n
        };

        const response = await axios.post(SENSENOVA_API_URL, requestBody, {
            headers: {
                'Authorization': `Bearer ${SENSENOVA_API_KEY}`,
                'Content-Type': 'application/json'
            },
            timeout: 120000 // 120 seconds timeout for image generation
        });

        console.log('Sensenova API Response Status:', response.status);

        if (response.status !== 200) {
            console.error('Sensenova API Error:', response.data);
            return res.status(response.status).json({ 
                error: '图片生成失败', 
                details: response.data 
            });
        }

        const data = response.data;
        console.log('Image generated successfully');

        res.json({
            success: true,
            data: data
        });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ 
            error: '服务器内部错误', 
            message: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📱 Open http://localhost:${PORT} to view the app`);
});
