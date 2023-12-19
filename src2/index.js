const video = document.getElementById('video');
let mediaRecorder;
let recordedChunks = [];

async function play() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true })
    try {

        video.srcObject = stream;
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start(1000); // 每隔 1 秒錄製一個影格
    } catch (err) {
        console.log("Cannot load webcam");
    }

}

function handleDataAvailable(event) {
    if (event.data.size > 0) {
        recordedChunks.push(event.data);
        sendStreamData(event.data);
    }
}

function sendStreamData(data) {
    const socket = new WebSocket('ws://localhost:3000');

    socket.addEventListener('open', (event) => {
        socket.send(data);
    });

    socket.addEventListener('close', (event) => {
        console.log('WebSocket 連接已關閉');
    });
}