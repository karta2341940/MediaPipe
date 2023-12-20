import { PoseLandmarker, FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision'

let poseLandmarker
let faceLandmarker
let lastVideoTime = -1
let numFaces = 1
let numPoses = 2
let runningMode = "VIDEO" || "IMAGE"
let delegate = "GPU" || "CPU"

const canvasPose = document.querySelector('#canvasPose')
const canvasFace = document.querySelector('#canvasFace')
const canvasCtxPose = canvasPose.getContext('2d')
const canvasCtxFace = canvasFace.getContext('2d')
const drawingUtilsPose = new DrawingUtils(canvasCtxPose)
const drawingUtilsFace = new DrawingUtils(canvasCtxFace)
const videoPose = document.querySelector('#videoPose')
const videoFace = document.querySelector('#videoFace')
const videoHeight = '360px'
const videoWidth = '480px'
const poseModel = {
    "lite": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    "full": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
    "heavy": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task"
}
const faceModel = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'
const filesetResolver = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"

export let isConnect = false
export let socket = new WebSocket('ws://localhost:3000')

async function poseInit() {
    const vision = await FilesetResolver.forVisionTasks(filesetResolver);
    poseLandmarker = await PoseLandmarker.createFromOptions(
        vision,
        {
            baseOptions: {
                "modelAssetPath": modelPath.lite,
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

async function modelInit() {
    await poseInit()
    await faceInit()
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

export default {
    socket
}