let e,t;var o,a=globalThis,n={},r={},i=a.parcelRequire4ef1;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},a.parcelRequire4ef1=i),i.register;var d=i("3HXpN");document.getElementById("demos"),document.getElementById("image-blend-shapes"),document.getElementById("video-blend-shapes");let c="VIDEO";const s="480px";console.log("Load OK"),async function(){let t=await (0,d.FilesetResolver).forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");e=await (0,d.FaceLandmarker).createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",delegate:"GPU"},outputFaceBlendshapes:!0,runningMode:c,numFaces:1})}();const l=document.querySelector(".video2"),m=document.querySelector(".canvas2"),F=m.getContext("2d");async function E(e){let t=e.target.value,o=await navigator.mediaDevices.getUserMedia({video:{deviceId:t}});l.srcObject=o,console.log("changeVideo2")}(null===(o=navigator.mediaDevices)||void 0===o?void 0:o.getUserMedia)&&document.querySelector("button").addEventListener("click",function(e){let t=document.querySelector("#video-select2");t.innerHTML="<option></option>",navigator.mediaDevices.enumerateDevices().then(e=>{e.forEach((e,o)=>{"videoinput"===e.kind&&(t.addEventListener("change",E),t.innerHTML+=`<option value="${e.deviceId}">${e.label}</option>`)})}),l.addEventListener("loadeddata",v)});let u=-1;const p=new d.DrawingUtils(F);async function v(){let o=l.videoHeight/l.videoWidth;l.style.width=s+"px",l.style.height=s*o+"px",m.style.width=s+"px",m.style.height=s*o+"px",m.width=l.videoWidth,m.height=l.videoHeight,"IMAGE"===c&&(c="VIDEO",await e.setOptions({runningMode:c}));let a=performance.now();if(u!==l.currentTime&&(u=l.currentTime,t=e.detectForVideo(l,a)),t.faceLandmarks)for(let e of t.faceLandmarks)p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_TESSELATION,{color:"#C0C0C070",lineWidth:1}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,{color:"#FF3030"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW,{color:"#FF3030"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,{color:"#30FF30"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW,{color:"#30FF30"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL,{color:"#E0E0E0"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_LIPS,{color:"#E0E0E0"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS,{color:"#FF3030"}),p.drawConnectors(e,d.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS,{color:"#30FF30"});window.requestAnimationFrame(v)}
//# sourceMappingURL=index.073b7a5a.js.map