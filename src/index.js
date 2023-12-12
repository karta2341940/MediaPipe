import { PoseLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision'

/**
 * @type {PoseLandmarker}
 */
let poseLandmarker
let runningMode = "VIDEO";
const canvas = document.querySelector("canvas");
const canvasCtx = canvas.getContext("2d");
const drawingUtils = new DrawingUtils(canvasCtx);
const video = document.querySelector("video");
const videoHeight = "360px";
const videoWidth = "480px";
let lastVideoTime = -1;
let modelPath = {
    "lite": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    "full": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
    "heavy": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task"
}


initPoseLandMaker();

const hasGetUserMedia = () => {
    var mediaDevices;
    return !!((mediaDevices = navigator.mediaDevices) === null || mediaDevices === void 0 ? void 0 : mediaDevices.getUserMedia);
};
if (hasGetUserMedia()) {
    enableWebcamButton = document.querySelector("button");
    enableWebcamButton.addEventListener("click", enableCam);
}
function enableCam(event) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", predict_from_webcam);
    })
    console.log("enableCam")
}
/**
 * 初始化Pose Land Maker
 */
async function initPoseLandMaker() {

    const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
    poseLandmarker = await PoseLandmarker.createFromOptions(
        vision,
        {
            baseOptions: {
                modelAssetPath: modelPath.lite,
                delegate: "GPU"
            },
            runningMode: runningMode,
            numPoses: 2
        });
    console.log("Init Pose Land Maker")
}
/**
 * 人體骨架辨識
 */
async function predict_from_webcam() {
    canvas.style.height = videoHeight;
    canvas.style.width = videoWidth;
    video.style.height = videoHeight;
    video.style.width = videoWidth;
    if (runningMode === "IMAGE") {
        runningMode = "VIDEO";
        await poseLandmarker.setOptions({ runningMode: "VIDEO" });
    }
    
    let startTimeMs = performance.now();
    if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;
        poseLandmarker.detectForVideo(video, startTimeMs, (result) => {
            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            for (const landmark of result.landmarks) {
                drawingUtils.drawLandmarks(landmark, {
                    radius: (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1)
                });
                drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
            }
            canvasCtx.restore();
        })
    }
    window.requestAnimationFrame(predict_from_webcam);
}
