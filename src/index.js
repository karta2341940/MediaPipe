import { PoseLandmarker, FilesetResolver, DrawingUtils, FaceLandmarker } from '@mediapipe/tasks-vision'

/**
 * @type {PoseLandmarker}
 */
let poseLandmarker
/**
 * @type {FaceLandmarker}
 */
let faceLandmarker;
let runningMode = "VIDEO";
let runningMode2 = "VIDEO";
const canvas = document.querySelector(".canvas");
const canvasCtx = canvas.getContext("2d");
const drawingUtils = new DrawingUtils(canvasCtx);
const canvas2 = document.querySelector(".canvas2");
const canvasCtx2 = canvas.getContext("2d");
const drawingUtils2 = new DrawingUtils(canvasCtx2);
const video = document.querySelector("video");
const videoHeight = "360px";
const videoWidth = "480px";
let lastVideoTime = -1;
let modelPath = {
    "lite": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    "full": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
    "heavy": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task"
}
const wasm = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"

initLandMaker();



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
async function initLandMaker() {

    const vision = await FilesetResolver.forVisionTasks(wasm);
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

    faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        runningMode,
        numFaces: 1
    });
}

/**
 * 辨識
 */
async function predict_from_webcam() {
    const radio = video.videoHeight / video.videoWidth;
    canvas.style.height = videoHeight;
    canvas.style.width = videoWidth;
    video.style.width = videoWidth + "px";
    video.style.height = videoWidth * radio + "px";
    canvas2.style.width = videoWidth + "px";
    canvas2.style.height = videoWidth * radio + "px";
    canvas2.width = video.videoWidth;
    canvas2.height = video.videoHeight;

    if (runningMode === "IMAGE") {
        runningMode = "VIDEO";
        await poseLandmarker.setOptions({ runningMode: "VIDEO" });
        await faceLandmarker.setOptions({ runningMode: "VIDEO" });
    }


    let startTimeMs = performance.now();
    if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;



        poseLandmarker.detectForVideo(video, startTimeMs, (result) => {
            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            for (const landmark of result.landmarks) {
                drawingUtils.drawLandmarks(landmark, {
                    "radius": (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1),
                    "lineWidth": 1,
                });
                drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS, { lineWidth: 1 });
            }
            canvasCtx.restore();
        })

    }

    let face = faceLandmarker.detectForVideo(video, startTimeMs);
    if (face.faceLandmarks) {
        canvasCtx2.save();
        canvasCtx2.clearRect(0, 0, canvas2.width, canvas2.height);
        for (const landmarks of face.faceLandmarks) {
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: "#C0C0C070", lineWidth: 1 });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: "#FF3030" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, { color: "#FF3030" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: "#30FF30" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, { color: "#30FF30" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, { color: "#E0E0E0" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, { color: "#E0E0E0" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, { color: "#FF3030" });
            drawingUtils2.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, { color: "#30FF30" });
        }
        canvasCtx2.restore();
    }
    window.requestAnimationFrame(predict_from_webcam);
}

