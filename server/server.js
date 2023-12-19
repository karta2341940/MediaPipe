const fs = require('fs');
const WebSocket = require('ws');
const moment = require('moment');

/**@type import('ws').Server */
const wss = new WebSocket.Server({ port: 3000 });

wss.on('listening', () => console.log("Server is listening on port 3000"));

wss.on('connection', (ws) => {
    console.log('使用者已連接');

    const fileStream = fs.createWriteStream(`./VIDEO/output-${moment().format('MMDD-hh-mm')}.mp4`, { flags: 'a' });
    ws.on('upgrade', data => {
        console.log('Writing')
    })
    ws.on('message', (data) => {
        fileStream.write(data);
    });

    ws.on('close', () => {
        console.log('使用者已斷開連接');
        fileStream.end();
    });
});
