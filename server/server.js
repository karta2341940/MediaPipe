const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const fs = require('fs');
const moment = require('moment');
const app = express();
const app2 = express();
const serverPose = http.createServer(app);
const serverFace = http.createServer(app2);
const pose = new WebSocket.Server({"port": 3000})
const face = new WebSocket.Server({"port": 3001})

// WebSocket連線
pose.on('connection', (ws) => {
    console.log('開始連線P');
    
    ws.on('error', (error) => {
        console.log(error);
    });

    // 接收來自客戶端的視訊資料
    ws.on('message', (data) => {
        // 儲存視訊資料到檔案
        console.log('收到')
        // fs.existsSync('./VIDEO') || fs.mkdirSync('./VIDEO');
        fs.appendFile(`./VIDEO/${moment().format('MMDD')}-pose.webm`, data, (err) => {
            if (err) throw err;
        });
    });

    // 斷開WebSocket連線
    ws.on('close', () => {
        console.log('結束連線');
    });
});

// WebSocket連線
face.on('connection', (ws) => {
    console.log('開始連線F');
    
    ws.on('error', (error) => {
        console.log(error);
    });

    // 接收來自客戶端的視訊資料
    ws.on('message', (data) => {
        // 儲存視訊資料到檔案
        console.log('收到')
        // fs.existsSync('./VIDEO') || fs.mkdirSync('./VIDEO');
        fs.appendFile(`./VIDEO/${moment().format('MMDD')}-face.webm`, data, (err) => {
            if (err) throw err;
        });
    });

    // 斷開WebSocket連線
    ws.on('close', () => {
        console.log('結束連線');
    });
});
