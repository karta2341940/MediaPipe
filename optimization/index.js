import { PoseLandmarker, FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision'

/**@type import('@mediapipe/tasks-vision').PoseLandmarker*/
let poseLandmarker
/**@type import('@mediapipe/tasks-vision').FaceLandmarker*/
let faceLandmarker
let lastVideoTime = -1
let numFaces = 1
let numPoses = 2
/**@type {import('@mediapipe/tasks-vision').FaceLandmarkerResult} */
let results
/**@type {MediaRecorder} */
let mediaRecorderPose = null

/**
 * 執行模式
 * @default {"VIDEO"||"IMAGE"}
 * */
let runningMode = "VIDEO"
/**
 * 運算單元
 */
let delegate = "GPU"
let cameraIdPose = ""
let cameraIdFace = ""

/**@type {HTMLCanvasElement} */
const canvasPose = document.querySelector('#canvas-pose')
/**@type {HTMLCanvasElement} */
const canvasFace = document.querySelector('#canvas-face')
/**@type {CanvasRenderingContext2D} */
const canvasCtxPose = canvasPose.getContext('2d')
/**@type {CanvasRenderingContext2D} */
const canvasCtxFace = canvasFace.getContext('2d')
/**@type {DrawingUtils} */
const drawingUtilsPose = new DrawingUtils(canvasCtxPose)
/**@type {DrawingUtils} */
const drawingUtilsFace = new DrawingUtils(canvasCtxFace)
/**@type {HTMLVideoElement} */
const videoPose = document.querySelector('#video-pose')
/**@type {HTMLVideoElement} */
const videoFace = document.querySelector('#video-face')
const videoHeight = '360px'
const videoWidth = '480px'
const poseModel = {
    "lite": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    "full": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
    "heavy": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task"
}
const faceModel = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'
const filesetResolver = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"

let isConnect = false
let socketPose = new WebSocket('ws://localhost:3000')
let socketFace = new WebSocket('ws://localhost:3001')

/**
 * 釋放資源並重置poseLandmarker
 */
async function poseInit() {
    const vision = await FilesetResolver.forVisionTasks(filesetResolver);
    poseLandmarker = await PoseLandmarker.createFromOptions(
        vision,
        {
            baseOptions: {
                "modelAssetPath": poseModel.lite,
                "delegate": delegate
            },
            "runningMode": runningMode,
            "numPoses": numPoses
        }
    )
    if (!poseLandmarker) {
        console.log("Pose Land Maker init error")
    }
}

async function faceInit() {
    const vision = await FilesetResolver.forVisionTasks(filesetResolver);
    faceLandmarker = await FaceLandmarker.createFromOptions(
        vision,
        {
            baseOptions: {
                "modelAssetPath": faceModel,
                "delegate": delegate
            },
            "runningMode": runningMode,
            "numFaces": numFaces
        }
    )
}
/**
 * Initialize model
 */
async function modelInit() {
    await poseInit()
    await faceInit()
    document.querySelector('#video-select-pose').addEventListener("change", changePoseSrc);
    document.querySelector('#video-select-face').addEventListener("change", changeFaceSrc);
    videoPose.addEventListener("loadeddata", predictPose);
    videoFace.addEventListener("loadeddata", predictFace);
}

function hasGetUserMedia() {
    var mediaDevices;
    return !!((mediaDevices = navigator.mediaDevices) === null || (mediaDevices === void 0 ? void 0 : mediaDevices.getUserMedia));
}

/**
 * Refresh webcam list
 */
function detectCam() {
    let selectVedio = document.querySelectorAll(".video-select");
    selectVedio.forEach(item => {
        item.innerHTML = `<option></option>`
    })
    navigator.mediaDevices.enumerateDevices().then(device => {
        device.forEach((item) => {
            if (item.kind === "videoinput") {
                selectVedio.forEach(select => {
                    select.innerHTML += `<option value="${item.deviceId}">${item.label}</option>`
                })
            }
        })
    });
}

/**
 * 釋放資源並重置poseLandmarker
 */
async function release() {
    poseLandmarker.close()
    poseInit();
    videoPose.srcObject = null
    canvasCtxPose.clearRect(0, 0, canvasPose.width, canvasPose.height)
}

async function changePoseSrc(event) {
    console.log("Change Pose Src")
    let deviceId = event.target.value
    cameraIdPose = deviceId
    await release()
    if (deviceId === "" && isConnect) {
        mediaRecorderPose.stop()
        return;
    };

    let stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: deviceId } })
    videoPose.srcObject = stream

    if (isConnect) {
        mediaRecorderPose = new MediaRecorder(stream)
        mediaRecorderPose.ondataavailable = (event) => {
            if (!isConnect) return;
            if (event.data && event.data.size > 0) {
                console.log('send')
                socketPose.send(event.data)
            }
        }
        mediaRecorderPose.start(200)
    }
}


/**
 * 預測姿勢
 * @returns {Promise<void>}
 */
async function predictPose() {
    if (cameraIdPose === "") return;
    canvasPose.style.height = videoHeight;
    canvasPose.style.width = videoWidth;
    videoPose.style.height = videoHeight;
    videoPose.style.width = videoWidth;
    if (runningMode != "VIDEO") {
        runningMode = "VIDEO";
        await faceLandmarker.setOptions({ runningMode: runningMode });
    }

    let startTimeMs = performance.now();
    if (lastVideoTime !== videoPose.currentTime) {
        lastVideoTime = videoPose.currentTime;

        poseLandmarker.detectForVideo(videoPose, startTimeMs, (result) => {
            canvasCtxPose.save();
            canvasCtxPose.clearRect(0, 0, canvasPose.width, canvasPose.height);
            for (const landmark of result.landmarks) {
                drawingUtilsPose.drawLandmarks(landmark, {
                    "radius": (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1),
                    "lineWidth": 1
                });
                drawingUtilsPose.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
            }
            canvasCtxPose.restore();
        })
    }
    if (cameraIdPose !== "") {
        window.requestAnimationFrame(predictPose);
    }
}


async function predictFace() {

    const radio = videoPose.videoHeight / videoPose.videoWidth;
    videoPose.style.width = videoWidth + "px";
    videoPose.style.height = videoWidth * radio + "px";
    canvasFace.style.width = videoWidth + "px";
    canvasFace.style.height = videoWidth * radio + "px";
    canvasFace.width = videoPose.videoWidth;
    canvasFace.height = videoPose.videoHeight;
    // Now let's start detecting the stream.
    if (runningMode != "VIDEO") {
        runningMode = "VIDEO";
        await faceLandmarker.setOptions({ runningMode: runningMode });
    }
    let startTimeMs = performance.now();
    if (lastVideoTime !== videoFace.currentTime) {
        lastVideoTime = videoFace.currentTime;
        results = faceLandmarker.detectForVideo(videoFace, startTimeMs);
    }
    if (results.faceLandmarks) {
        for (const landmarks of results.faceLandmarks) {
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: "#C0C0C070", lineWidth: 1 });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: "#FF3030" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, { color: "#FF3030" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: "#30FF30" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, { color: "#30FF30" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, { color: "#E0E0E0" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, { color: "#E0E0E0" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, { color: "#FF3030" });
            drawingUtilsFace.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, { color: "#30FF30" });
        }
    }
    // Call this function again to keep predicting when the browser is ready.
    window.requestAnimationFrame(predictFace);
}
async function changeFaceSrc(event) {
    let deviceId = event.target.value;
    let stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: deviceId } });
    videoFace.srcObject = stream;

    if (deviceId === "" && isConnect) {
        mediaRecorderPose.stop()
        return;
    };

    if (isConnect) {
        mediaRecorderPose = new MediaRecorder(stream)
        mediaRecorderPose.ondataavailable = (event) => {
            if (!isConnect) return;
            if (event.data && event.data.size > 0) {
                console.log('send')
                socketFace.send(event.data)
            }
        }
        mediaRecorderPose.start(200)
    }
}

async function main() {
    modelInit()
    if (hasGetUserMedia()) {
        enableWebcamButton = document.querySelector("button");
        enableWebcamButton.addEventListener("click", detectCam);
    }
    let selectVedio = document.querySelectorAll(".video-select");
    selectVedio.forEach(item => {
        item.innerHTML = `<option></option>`
    })

    let devices = await navigator.mediaDevices.enumerateDevices()

    devices.forEach((item) => {
        if (item.kind === "videoinput") {
            selectVedio.forEach(option => {
                option.innerHTML += `<option value="${item.deviceId}">${item.label}</option>`
            })
        }
    })



}
main()


socketPose.addEventListener('error', socketError)
socketPose.addEventListener('open', socketOpen)
socketPose.addEventListener('close', socketClose)
socketPose.addEventListener('message', socketMessage)
socketFace.addEventListener('error', socketError)
socketFace.addEventListener('open', socketOpen)
socketFace.addEventListener('close', socketClose)
socketFace.addEventListener('message', socketMessage)
function socketError(error) {
    isConnect = false
    console.log("沒有連線")
    console.log(error)

}
function socketOpen(event) {
    isConnect = true
    console.log("連線成功")
    return
}
function socketClose(event) {
    isConnect = false
    console.log("連線中斷")
}
function socketMessage(event) {
    console.log("收到訊息")
}