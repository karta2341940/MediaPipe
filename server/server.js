const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const fs = require('fs');
const moment = require('moment');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket連線
wss.on('connection', (ws) => {
    console.log('開始連線');
    
    ws.on('error', (error) => {
        console.log(error);
    });

    // 接收來自客戶端的視訊資料
    ws.on('message', (data) => {
        // 儲存視訊資料到檔案
        console.log('收到')
        fs.appendFile(`./VIDEO/${moment().format('MMDD')}.webm`, data, (err) => {
            if (err) throw err;
        });
    });

    // 斷開WebSocket連線
    ws.on('close', () => {
        console.log('結束連線');
    });
});

// 啟動伺服器
server.listen(3000, () => {
    console.log('Server started on port 3000');
});