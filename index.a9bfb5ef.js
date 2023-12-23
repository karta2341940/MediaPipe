// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7J3PX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c3ef9955a9bfb5ef";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6nueF":[function(require,module,exports) {
var _tasksVision = require("@mediapipe/tasks-vision");
/**@type import('@mediapipe/tasks-vision').PoseLandmarker*/ let poseLandmarker;
/**@type import('@mediapipe/tasks-vision').FaceLandmarker*/ let faceLandmarker;
let lastVideoTime = -1;
let numFaces = 1;
let numPoses = 2;
/**@type {import('@mediapipe/tasks-vision').FaceLandmarkerResult} */ let results;
/**@type {MediaRecorder} */ let mediaRecorderPose = null;
/**
 * 執行模式
 * @default {"VIDEO"||"IMAGE"}
 * */ let runningMode = "VIDEO";
/**
 * 運算單元
 */ let delegate = "GPU";
let cameraIdPose = "";
let cameraIdFace = "";
/**@type {HTMLCanvasElement} */ const canvasPose = document.querySelector("#canvas-pose");
/**@type {HTMLCanvasElement} */ const canvasFace = document.querySelector("#canvas-face");
/**@type {CanvasRenderingContext2D} */ const canvasCtxPose = canvasPose.getContext("2d");
/**@type {CanvasRenderingContext2D} */ const canvasCtxFace = canvasFace.getContext("2d");
/**@type {DrawingUtils} */ const drawingUtilsPose = new (0, _tasksVision.DrawingUtils)(canvasCtxPose);
/**@type {DrawingUtils} */ const drawingUtilsFace = new (0, _tasksVision.DrawingUtils)(canvasCtxFace);
/**@type {HTMLVideoElement} */ const videoPose = document.querySelector("#video-pose");
/**@type {HTMLVideoElement} */ const videoFace = document.querySelector("#video-face");
const videoHeight = "360px";
const videoWidth = "480px";
const poseModel = {
    "lite": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    "full": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task",
    "heavy": "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task"
};
const faceModel = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
const filesetResolver = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm";
// const filesetResolver = "/node_modules/@mediapipe/tasks-vision/wasm"
let isConnect = false;
let socketPose = new WebSocket("ws://localhost:3000");
let socketFace = new WebSocket("ws://localhost:3001");
/**
 * 釋放資源並重置poseLandmarker
 */ async function ModelInit() {
    const vision = await (0, _tasksVision.FilesetResolver).forVisionTasks(filesetResolver);
    poseLandmarker = await (0, _tasksVision.PoseLandmarker).createFromOptions(vision, {
        baseOptions: {
            "modelAssetPath": poseModel.lite,
            "delegate": delegate
        },
        "runningMode": runningMode,
        "numPoses": numPoses
    });
    faceLandmarker = await (0, _tasksVision.FaceLandmarker).createFromOptions(vision, {
        baseOptions: {
            "modelAssetPath": faceModel,
            "delegate": "GPU"
        },
        "runningMode": runningMode,
        "outputFaceBlendshapes": true,
        "numFaces": numFaces
    });
    if (!poseLandmarker || !faceLandmarker) {
        if (!poseLandmarker) console.log("Pose Land Maker init error");
        if (!faceLandmarker) console.log("Face Land Maker init error");
    }
}
/**
 * Initialize model
 */ async function modelInit() {
    await ModelInit();
    document.querySelector("#video-select-pose").addEventListener("change", changePoseSrc);
    document.querySelector("#video-select-face").addEventListener("change", changeFaceSrc);
    videoPose.addEventListener("loadeddata", predictPose);
    videoFace.addEventListener("loadeddata", predictFace);
}
function hasGetUserMedia() {
    var mediaDevices;
    return !!((mediaDevices = navigator.mediaDevices) === null || (mediaDevices === void 0 ? void 0 : mediaDevices.getUserMedia));
}
/**
 * Refresh webcam list
 */ function detectCam() {
    let selectVedio = document.querySelectorAll(".video-select");
    selectVedio.forEach((item)=>{
        item.innerHTML = `<option></option>`;
    });
    navigator.mediaDevices.enumerateDevices().then((device)=>{
        device.forEach((item)=>{
            if (item.kind === "videoinput") selectVedio.forEach((select)=>{
                select.innerHTML += `<option value="${item.deviceId}">${item.label}</option>`;
            });
        });
    });
}
/**
 * 釋放資源並重置poseLandmarker
 */ async function release() {
    poseLandmarker.close();
    ModelInit();
    videoPose.srcObject = null;
    canvasCtxPose.clearRect(0, 0, canvasPose.width, canvasPose.height);
}
async function changePoseSrc(event) {
    console.log("Change Pose Src");
    let deviceId = event.target.value;
    cameraIdPose = deviceId;
    await release();
    if (deviceId === "" && isConnect) {
        mediaRecorderPose.stop();
        return;
    }
    let stream = await navigator.mediaDevices.getUserMedia({
        video: {
            deviceId: deviceId
        }
    });
    videoPose.srcObject = stream;
    if (isConnect) {
        mediaRecorderPose = new MediaRecorder(stream);
        mediaRecorderPose.ondataavailable = (event)=>{
            if (!isConnect) return;
            if (event.data && event.data.size > 0) // console.log('send')
            socketPose.send(event.data);
        };
        mediaRecorderPose.start(200);
    }
}
/**
 * 預測姿勢
 * @returns {Promise<void>}
 */ async function predictPose() {
    if (cameraIdPose === "") return;
    canvasPose.style.height = videoHeight;
    canvasPose.style.width = videoWidth;
    videoPose.style.height = videoHeight;
    videoPose.style.width = videoWidth;
    if (runningMode != "VIDEO") {
        runningMode = "VIDEO";
        await faceLandmarker.setOptions({
            runningMode: runningMode
        });
    }
    let startTimeMs = performance.now();
    if (lastVideoTime !== videoPose.currentTime) {
        lastVideoTime = videoPose.currentTime;
        poseLandmarker.detectForVideo(videoPose, startTimeMs, (result)=>{
            canvasCtxPose.save();
            canvasCtxPose.clearRect(0, 0, canvasPose.width, canvasPose.height);
            for (const landmark of result.landmarks){
                drawingUtilsPose.drawLandmarks(landmark, {
                    "radius": (data)=>(0, _tasksVision.DrawingUtils).lerp(data.from.z, -0.15, 0.1, 5, 1),
                    "lineWidth": 1
                });
                drawingUtilsPose.drawConnectors(landmark, (0, _tasksVision.PoseLandmarker).POSE_CONNECTIONS);
            }
            canvasCtxPose.restore();
        });
    }
    if (cameraIdPose !== "") window.requestAnimationFrame(predictPose);
}
let i = 1;
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
        await faceLandmarker.setOptions({
            runningMode: runningMode
        });
    }
    let startTimeMs = performance.now();
    if (lastVideoTime !== videoFace.currentTime) {
        lastVideoTime = videoFace.currentTime;
        results = faceLandmarker.detectForVideo(videoFace, startTimeMs);
    }
    // console.log(results)
    if (results.faceLandmarks) // canvasCtxFace.save();
    // canvasCtxFace.clearRect(0, 0, canvasFace.width, canvasFace.height);
    for (const landmarks of results.faceLandmarks){
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_TESSELATION, {
            color: "#C0C0C070",
            lineWidth: 1
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_RIGHT_EYE, {
            color: "#FF3030"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_RIGHT_EYEBROW, {
            color: "#FF3030"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_LEFT_EYE, {
            color: "#30FF30"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_LEFT_EYEBROW, {
            color: "#30FF30"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_FACE_OVAL, {
            color: "#E0E0E0"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_LIPS, {
            color: "#E0E0E0"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_RIGHT_IRIS, {
            color: "#FF3030"
        });
        drawingUtilsFace.drawConnectors(landmarks, (0, _tasksVision.FaceLandmarker).FACE_LANDMARKS_LEFT_IRIS, {
            color: "#30FF30"
        });
    }
    // Call this function again to keep predicting when the browser is ready.
    if (cameraIdFace !== "") window.requestAnimationFrame(predictFace);
}
async function changeFaceSrc(event) {
    console.log("Change Face Src");
    let deviceId = event.target.value;
    let stream = await navigator.mediaDevices.getUserMedia({
        video: {
            deviceId: deviceId
        }
    });
    cameraIdFace = deviceId;
    videoFace.srcObject = stream;
    if (deviceId === "" && isConnect) {
        mediaRecorderPose.stop();
        return;
    }
    if (isConnect) {
        mediaRecorderPose = new MediaRecorder(stream);
        mediaRecorderPose.ondataavailable = (event)=>{
            if (!isConnect) return;
            if (event.data && event.data.size > 0) // console.log('send')
            socketFace.send(event.data);
        };
        mediaRecorderPose.start(200);
    }
}
async function main() {
    await modelInit();
    console.log("Init");
    if (hasGetUserMedia()) {
        enableWebcamButton = document.querySelector("button");
        enableWebcamButton.addEventListener("click", detectCam);
    }
    let selectVedio = document.querySelectorAll(".video-select");
    selectVedio.forEach((item)=>{
        item.innerHTML = `<option></option>`;
    });
    let devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((item)=>{
        if (item.kind === "videoinput") selectVedio.forEach((option)=>{
            option.innerHTML += `<option value="${item.deviceId}">${item.label}</option>`;
        });
    });
}
main();
socketPose.addEventListener("error", socketError);
socketPose.addEventListener("open", socketOpen);
socketPose.addEventListener("close", socketClose);
socketPose.addEventListener("message", socketMessage);
socketFace.addEventListener("error", socketError);
socketFace.addEventListener("open", socketOpen);
socketFace.addEventListener("close", socketClose);
socketFace.addEventListener("message", socketMessage);
function socketError(error) {
    isConnect = false;
    console.log("\u6C92\u6709\u9023\u7DDA");
    console.log(error);
}
function socketOpen(event) {
    isConnect = true;
    console.log("\u9023\u7DDA\u6210\u529F");
    return;
}
function socketClose(event) {
    isConnect = false;
    console.log("\u9023\u7DDA\u4E2D\u65B7");
}
function socketMessage(event) {
    console.log("\u6536\u5230\u8A0A\u606F");
}

},{"@mediapipe/tasks-vision":"e5Mjq"}],"e5Mjq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DrawingUtils", ()=>La) //# sourceMappingURL=vision_bundle_mjs.js.map
;
parcelHelpers.export(exports, "FaceDetector", ()=>$a);
parcelHelpers.export(exports, "FaceLandmarker", ()=>ac);
parcelHelpers.export(exports, "FaceStylizer", ()=>cc);
parcelHelpers.export(exports, "FilesetResolver", ()=>Co);
parcelHelpers.export(exports, "GestureRecognizer", ()=>dc);
parcelHelpers.export(exports, "HandLandmarker", ()=>gc);
parcelHelpers.export(exports, "ImageClassifier", ()=>mc);
parcelHelpers.export(exports, "ImageEmbedder", ()=>yc);
parcelHelpers.export(exports, "ImageSegmenter", ()=>Tc);
parcelHelpers.export(exports, "ImageSegmenterResult", ()=>vc);
parcelHelpers.export(exports, "InteractiveSegmenter", ()=>Vc);
parcelHelpers.export(exports, "InteractiveSegmenterResult", ()=>Ec);
parcelHelpers.export(exports, "MPImage", ()=>Da);
parcelHelpers.export(exports, "MPMask", ()=>ya);
parcelHelpers.export(exports, "ObjectDetector", ()=>Xc);
parcelHelpers.export(exports, "PoseLandmarker", ()=>Hc);
parcelHelpers.export(exports, "TaskRunner", ()=>$o);
parcelHelpers.export(exports, "VisionTaskRunner", ()=>Ka);
var t = "undefined" != typeof self ? self : {};
function e(e, n) {
    t: {
        for(var r = [
            "CLOSURE_FLAGS"
        ], i = t, s = 0; s < r.length; s++)if (null == (i = i[r[s]])) {
            r = null;
            break t;
        }
        r = i;
    }
    return null != (e = r && r[e]) ? e : n;
}
function n() {
    throw Error("Invalid UTF8");
}
function r(t, e) {
    return e = String.fromCharCode.apply(null, e), null == t ? e : t + e;
}
let i, s;
const o = "undefined" != typeof TextDecoder;
let a;
const c = "undefined" != typeof TextEncoder;
function h(t) {
    if (c) t = (a ||= new TextEncoder).encode(t);
    else {
        let n = 0;
        const r = new Uint8Array(3 * t.length);
        for(let i = 0; i < t.length; i++){
            var e = t.charCodeAt(i);
            if (128 > e) r[n++] = e;
            else {
                if (2048 > e) r[n++] = e >> 6 | 192;
                else {
                    if (55296 <= e && 57343 >= e) {
                        if (56319 >= e && i < t.length) {
                            const s = t.charCodeAt(++i);
                            if (56320 <= s && 57343 >= s) {
                                e = 1024 * (e - 55296) + s - 56320 + 65536, r[n++] = e >> 18 | 240, r[n++] = e >> 12 & 63 | 128, r[n++] = e >> 6 & 63 | 128, r[n++] = 63 & e | 128;
                                continue;
                            }
                            i--;
                        }
                        e = 65533;
                    }
                    r[n++] = e >> 12 | 224, r[n++] = e >> 6 & 63 | 128;
                }
                r[n++] = 63 & e | 128;
            }
        }
        t = n === r.length ? r : r.subarray(0, n);
    }
    return t;
}
var u, l = e(610401301, !1), f = e(572417392, !0);
const d = t.navigator;
function p(t) {
    return !!l && !!u && u.brands.some(({ brand: e })=>e && -1 != e.indexOf(t));
}
function g(e) {
    var n;
    return (n = t.navigator) && (n = n.userAgent) || (n = ""), -1 != n.indexOf(e);
}
function m() {
    return !!l && !!u && 0 < u.brands.length;
}
function y() {
    return m() ? p("Chromium") : (g("Chrome") || g("CriOS")) && !(!m() && g("Edge")) || g("Silk");
}
u = d && d.userAgentData || null;
var v = !m() && (g("Trident") || g("MSIE"));
!g("Android") || y(), y(), g("Safari") && (y() || !m() && g("Coast") || !m() && g("Opera") || !m() && g("Edge") || (m() ? p("Microsoft Edge") : g("Edg/")) || m() && p("Opera"));
var _ = {}, w = null;
function T(t) {
    var e = t.length, n = 3 * e / 4;
    n % 3 ? n = Math.floor(n) : -1 != "=.".indexOf(t[e - 1]) && (n = -1 != "=.".indexOf(t[e - 2]) ? n - 2 : n - 1);
    var r = new Uint8Array(n), i = 0;
    return function(t, e) {
        function n(e) {
            for(; r < t.length;){
                var n = t.charAt(r++), i = w[n];
                if (null != i) return i;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return e;
        }
        E();
        for(var r = 0;;){
            var i = n(-1), s = n(0), o = n(64), a = n(64);
            if (64 === a && -1 === i) break;
            e(i << 2 | s >> 4), 64 != o && (e(s << 4 & 240 | o >> 2), 64 != a && e(o << 6 & 192 | a));
        }
    }(t, function(t) {
        r[i++] = t;
    }), i !== n ? r.subarray(0, i) : r;
}
function E() {
    if (!w) {
        w = {};
        for(var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = [
            "+/=",
            "+/",
            "-_=",
            "-_.",
            "-_"
        ], n = 0; 5 > n; n++){
            var r = t.concat(e[n].split(""));
            _[n] = r;
            for(var i = 0; i < r.length; i++){
                var s = r[i];
                void 0 === w[s] && (w[s] = i);
            }
        }
    }
}
var b = "undefined" != typeof Uint8Array, A = !v && "function" == typeof btoa;
function x(t) {
    if (!A) {
        var e;
        void 0 === e && (e = 0), E(), e = _[e];
        var n = Array(Math.floor(t.length / 3)), r = e[64] || "";
        let c = 0, h = 0;
        for(; c < t.length - 2; c += 3){
            var i = t[c], s = t[c + 1], o = t[c + 2], a = e[i >> 2];
            i = e[(3 & i) << 4 | s >> 4], s = e[(15 & s) << 2 | o >> 6], o = e[63 & o], n[h++] = a + i + s + o;
        }
        switch(a = 0, o = r, t.length - c){
            case 2:
                o = e[(15 & (a = t[c + 1])) << 2] || r;
            case 1:
                t = t[c], n[h] = e[t >> 2] + e[(3 & t) << 4 | a >> 4] + o + r;
        }
        return n.join("");
    }
    for(e = "", n = 0, r = t.length - 10240; n < r;)e += String.fromCharCode.apply(null, t.subarray(n, n += 10240));
    return e += String.fromCharCode.apply(null, n ? t.subarray(n) : t), btoa(e);
}
const k = /[-_.]/g, S = {
    "-": "+",
    _: "/",
    ".": "="
};
function L(t) {
    return S[t] || "";
}
function R(t) {
    if (!A) return T(t);
    k.test(t) && (t = t.replace(k, L)), t = atob(t);
    const e = new Uint8Array(t.length);
    for(let n = 0; n < t.length; n++)e[n] = t.charCodeAt(n);
    return e;
}
function F(t) {
    return b && null != t && t instanceof Uint8Array;
}
let M;
function O() {
    return M ||= new Uint8Array(0);
}
var I = {};
let C;
function P(t) {
    if (t !== I) throw Error("illegal external caller");
}
function U() {
    return C ||= new B(null, I);
}
function D(t) {
    P(I);
    var e = t.Z;
    return null == (e = null == e || F(e) ? e : "string" == typeof e ? R(e) : null) ? e : t.Z = e;
}
var B = class {
    constructor(t, e){
        if (P(e), this.Z = t, null != t && 0 === t.length) throw Error("ByteString should be constructed with non-empty values");
    }
    wa() {
        const t = D(this);
        return t ? new Uint8Array(t) : O();
    }
};
function N(t, e) {
    return Error(`Invalid wire type: ${t} (at position ${e})`);
}
function G() {
    return Error("Failed to read varint, encoding is invalid.");
}
function j(t, e) {
    return Error(`Tried to read past the end of the data ${e} > ${t}`);
}
function V(t) {
    return 0 == t.length ? U() : new B(t, I);
}
function X(t) {
    if ("string" == typeof t) return {
        buffer: R(t),
        L: !1
    };
    if (Array.isArray(t)) return {
        buffer: new Uint8Array(t),
        L: !1
    };
    if (t.constructor === Uint8Array) return {
        buffer: t,
        L: !1
    };
    if (t.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(t),
        L: !1
    };
    if (t.constructor === B) return {
        buffer: D(t) || O(),
        L: !0
    };
    if (t instanceof Uint8Array) return {
        buffer: new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
        L: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function z() {
    return "function" == typeof BigInt;
}
var W = !f;
let H = !f;
const Y = "function" == typeof Uint8Array.prototype.slice;
let K, $ = 0, q = 0;
function J(t) {
    const e = 0 > t;
    let n = (t = Math.abs(t)) >>> 0;
    if (t = Math.floor((t - n) / 4294967296), e) {
        const [e, r] = st(n, t);
        t = r, n = e;
    }
    $ = n >>> 0, q = t >>> 0;
}
function Z(t) {
    const e = K ||= new DataView(new ArrayBuffer(8));
    e.setFloat32(0, +t, !0), q = 0, $ = e.getUint32(0, !0);
}
function Q(t, e) {
    return 4294967296 * e + (t >>> 0);
}
function tt(t, e) {
    const n = 2147483648 & e;
    return n && (e = ~e >>> 0, 0 == (t = 1 + ~t >>> 0) && (e = e + 1 >>> 0)), t = Q(t, e), n ? -t : t;
}
function et(t, e) {
    if (t >>>= 0, 2097151 >= (e >>>= 0)) var n = "" + (4294967296 * e + t);
    else z() ? n = "" + (BigInt(e) << BigInt(32) | BigInt(t)) : (t = (16777215 & t) + 6777216 * (n = 16777215 & (t >>> 24 | e << 8)) + 6710656 * (e = e >> 16 & 65535), n += 8147497 * e, e *= 2, 1e7 <= t && (n += Math.floor(t / 1e7), t %= 1e7), 1e7 <= n && (e += Math.floor(n / 1e7), n %= 1e7), n = e + nt(n) + nt(t));
    return n;
}
function nt(t) {
    return t = String(t), "0000000".slice(t.length) + t;
}
function rt() {
    var t = $, e = q;
    if (2147483648 & e) {
        if (z()) t = "" + (BigInt(0 | e) << BigInt(32) | BigInt(t >>> 0));
        else {
            const [n, r] = st(t, e);
            t = "-" + et(n, r);
        }
    } else t = et(t, e);
    return t;
}
function it(t) {
    if (16 > t.length) J(Number(t));
    else if (z()) t = BigInt(t), $ = Number(t & BigInt(4294967295)) >>> 0, q = Number(t >> BigInt(32) & BigInt(4294967295));
    else {
        const e = +("-" === t[0]);
        q = $ = 0;
        const n = t.length;
        for(let r = e, i = (n - e) % 6 + e; i <= n; r = i, i += 6){
            const e = Number(t.slice(r, i));
            q *= 1e6, $ = 1e6 * $ + e, 4294967296 <= $ && (q += Math.trunc($ / 4294967296), q >>>= 0, $ >>>= 0);
        }
        if (e) {
            const [t, e] = st($, q);
            $ = t, q = e;
        }
    }
}
function st(t, e) {
    return e = ~e, t ? t = 1 + ~t : e += 1, [
        t,
        e
    ];
}
function ot(t, e) {
    let n, r = 0, i = 0, s = 0;
    const o = t.h;
    let a = t.g;
    do n = o[a++], r |= (127 & n) << s, s += 7;
    while (32 > s && 128 & n);
    for(32 < s && (i |= (127 & n) >> 4), s = 3; 32 > s && 128 & n; s += 7)n = o[a++], i |= (127 & n) << s;
    if (pt(t, a), 128 > n) return e(r >>> 0, i >>> 0);
    throw G();
}
function at(t) {
    let e = 0, n = t.g;
    const r = n + 10, i = t.h;
    for(; n < r;){
        const r = i[n++];
        if (e |= r, 0 == (128 & r)) return pt(t, n), !!(127 & e);
    }
    throw G();
}
function ct(t) {
    const e = t.h;
    let n = t.g, r = e[n++], i = 127 & r;
    if (128 & r && (r = e[n++], i |= (127 & r) << 7, 128 & r && (r = e[n++], i |= (127 & r) << 14, 128 & r && (r = e[n++], i |= (127 & r) << 21, 128 & r && (r = e[n++], i |= r << 28, 128 & r && 128 & e[n++] && 128 & e[n++] && 128 & e[n++] && 128 & e[n++] && 128 & e[n++]))))) throw G();
    return pt(t, n), i;
}
function ht(t) {
    return ct(t) >>> 0;
}
function ut(t) {
    var e = t.h;
    const n = t.g, r = e[n], i = e[n + 1], s = e[n + 2];
    return e = e[n + 3], pt(t, t.g + 4), (r << 0 | i << 8 | s << 16 | e << 24) >>> 0;
}
function lt(t) {
    var e = ut(t);
    t = 2 * (e >> 31) + 1;
    const n = e >>> 23 & 255;
    return e &= 8388607, 255 == n ? e ? NaN : 1 / 0 * t : 0 == n ? t * Math.pow(2, -149) * e : t * Math.pow(2, n - 150) * (e + Math.pow(2, 23));
}
function ft(t) {
    return ct(t);
}
function dt(t, e, { aa: n = !1 } = {}) {
    t.aa = n, e && (e = X(e), t.h = e.buffer, t.m = e.L, t.j = 0, t.l = t.h.length, t.g = t.j);
}
function pt(t, e) {
    if (t.g = e, e > t.l) throw j(t.l, e);
}
function gt(t, e) {
    if (0 > e) throw Error(`Tried to read a negative byte length: ${e}`);
    const n = t.g, r = n + e;
    if (r > t.l) throw j(e, t.l - n);
    return t.g = r, n;
}
function mt(t, e) {
    if (0 == e) return U();
    var n = gt(t, e);
    return t.aa && t.m ? n = t.h.subarray(n, n + e) : (t = t.h, n = n === (e = n + e) ? O() : Y ? t.slice(n, e) : new Uint8Array(t.subarray(n, e))), V(n);
}
var yt = [];
function vt(t) {
    var e = t.g;
    if (e.g == e.l) return !1;
    t.l = t.g.g;
    var n = ht(t.g);
    if (e = n >>> 3, !(0 <= (n &= 7) && 5 >= n)) throw N(n, t.l);
    if (1 > e) throw Error(`Invalid field number: ${e} (at position ${t.l})`);
    return t.m = e, t.h = n, !0;
}
function _t(t) {
    switch(t.h){
        case 0:
            0 != t.h ? _t(t) : at(t.g);
            break;
        case 1:
            pt(t = t.g, t.g + 8);
            break;
        case 2:
            if (2 != t.h) _t(t);
            else {
                var e = ht(t.g);
                pt(t = t.g, t.g + e);
            }
            break;
        case 5:
            pt(t = t.g, t.g + 4);
            break;
        case 3:
            for(e = t.m;;){
                if (!vt(t)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == t.h) {
                    if (t.m != e) throw Error("Unmatched end-group tag");
                    break;
                }
                _t(t);
            }
            break;
        default:
            throw N(t.h, t.l);
    }
}
function wt(t, e, n) {
    const r = t.g.l, i = ht(t.g), s = t.g.g + i;
    let o = s - r;
    if (0 >= o && (t.g.l = s, n(e, t, void 0, void 0, void 0), o = s - t.g.g), o) throw Error(`Message parsing ended unexpectedly. Expected to read ${i} bytes, instead read ${i - o} bytes, either the data ended unexpectedly or the message misreported its own length`);
    return t.g.g = s, t.g.l = r, e;
}
function Tt(t) {
    var e = ht(t.g), a = gt(t = t.g, e);
    if (t = t.h, o) {
        var c, h = t;
        (c = s) || (c = s = new TextDecoder("utf-8", {
            fatal: !0
        })), e = a + e, h = 0 === a && e === h.length ? h : h.subarray(a, e);
        try {
            var u = c.decode(h);
        } catch (t) {
            if (void 0 === i) {
                try {
                    c.decode(new Uint8Array([
                        128
                    ]));
                } catch (t) {}
                try {
                    c.decode(new Uint8Array([
                        97
                    ])), i = !0;
                } catch (t) {
                    i = !1;
                }
            }
            throw !i && (s = void 0), t;
        }
    } else {
        e = (u = a) + e, a = [];
        let i, s = null;
        for(; u < e;){
            var l = t[u++];
            128 > l ? a.push(l) : 224 > l ? u >= e ? n() : (i = t[u++], 194 > l || 128 != (192 & i) ? (u--, n()) : a.push((31 & l) << 6 | 63 & i)) : 240 > l ? u >= e - 1 ? n() : (i = t[u++], 128 != (192 & i) || 224 === l && 160 > i || 237 === l && 160 <= i || 128 != (192 & (c = t[u++])) ? (u--, n()) : a.push((15 & l) << 12 | (63 & i) << 6 | 63 & c)) : 244 >= l ? u >= e - 2 ? n() : (i = t[u++], 128 != (192 & i) || 0 != i - 144 + (l << 28) >> 30 || 128 != (192 & (c = t[u++])) || 128 != (192 & (h = t[u++])) ? (u--, n()) : (l = (7 & l) << 18 | (63 & i) << 12 | (63 & c) << 6 | 63 & h, l -= 65536, a.push(55296 + (l >> 10 & 1023), 56320 + (1023 & l)))) : n(), 8192 <= a.length && (s = r(s, a), a.length = 0);
        }
        u = r(s, a);
    }
    return u;
}
function Et(t) {
    const e = ht(t.g);
    return mt(t.g, e);
}
function bt(t, e, n) {
    var r = ht(t.g);
    for(r = t.g.g + r; t.g.g < r;)n.push(e(t.g));
}
var At = [];
function xt(t) {
    return t ? /^\d+$/.test(t) ? (it(t), new kt($, q)) : null : St ||= new kt(0, 0);
}
var kt = class {
    constructor(t, e){
        this.h = t >>> 0, this.g = e >>> 0;
    }
};
let St;
function Lt(t) {
    return t ? /^-?\d+$/.test(t) ? (it(t), new Rt($, q)) : null : Ft ||= new Rt(0, 0);
}
var Rt = class {
    constructor(t, e){
        this.h = t >>> 0, this.g = e >>> 0;
    }
};
let Ft;
function Mt(t, e, n) {
    for(; 0 < n || 127 < e;)t.g.push(127 & e | 128), e = (e >>> 7 | n << 25) >>> 0, n >>>= 7;
    t.g.push(e);
}
function Ot(t, e) {
    for(; 127 < e;)t.g.push(127 & e | 128), e >>>= 7;
    t.g.push(e);
}
function It(t, e) {
    if (0 <= e) Ot(t, e);
    else {
        for(let n = 0; 9 > n; n++)t.g.push(127 & e | 128), e >>= 7;
        t.g.push(1);
    }
}
function Ct(t, e) {
    t.g.push(e >>> 0 & 255), t.g.push(e >>> 8 & 255), t.g.push(e >>> 16 & 255), t.g.push(e >>> 24 & 255);
}
function Pt(t, e) {
    0 !== e.length && (t.l.push(e), t.h += e.length);
}
function Ut(t, e, n) {
    Ot(t.g, 8 * e + n);
}
function Dt(t, e) {
    return Ut(t, e, 2), e = t.g.end(), Pt(t, e), e.push(t.h), e;
}
function Bt(t, e) {
    var n = e.pop();
    for(n = t.h + t.g.length() - n; 127 < n;)e.push(127 & n | 128), n >>>= 7, t.h++;
    e.push(n), t.h++;
}
function Nt(t, e, n) {
    Ut(t, e, 2), Ot(t.g, n.length), Pt(t, t.g.end()), Pt(t, n);
}
function Gt(t, e, n, r) {
    null != n && (e = Dt(t, e), r(n, t), Bt(t, e));
}
class jt {
    constructor(t, e, n, r){
        this.g = t, this.h = e, this.l = n, this.qa = r;
    }
}
function Vt(t) {
    return Array.prototype.slice.call(t);
}
function Xt(t) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : t;
}
var zt = Xt(), Wt = Xt("0di"), Ht = zt ? (t, e)=>{
    t[zt] |= e;
} : (t, e)=>{
    void 0 !== t.D ? t.D |= e : Object.defineProperties(t, {
        D: {
            value: e,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
};
function Yt(t) {
    const e = qt(t);
    1 != (1 & e) && (Object.isFrozen(t) && (t = Vt(t)), Zt(t, 1 | e));
}
var Kt = zt ? (t, e)=>{
    t[zt] &= ~e;
} : (t, e)=>{
    void 0 !== t.D && (t.D &= ~e);
};
function $t(t, e, n) {
    return n ? t | e : t & ~e;
}
var qt = zt ? (t)=>0 | t[zt] : (t)=>0 | t.D, Jt = zt ? (t)=>t[zt] : (t)=>t.D, Zt = zt ? (t, e)=>{
    t[zt] = e;
} : (t, e)=>{
    void 0 !== t.D ? t.D = e : Object.defineProperties(t, {
        D: {
            value: e,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    });
};
function Qt() {
    var t = [];
    return Ht(t, 1), t;
}
function te(t) {
    return Ht(t, 34), t;
}
function ee(t, e) {
    Zt(e, -14591 & (0 | t));
}
function ne(t, e) {
    Zt(e, -14557 & (34 | t));
}
function re(t) {
    return 0 === (t = t >> 14 & 1023) ? 536870912 : t;
}
var ie = {}, se = {};
function oe(t) {
    return !(!t || "object" != typeof t || t.Na !== se);
}
function ae(t) {
    return null !== t && "object" == typeof t && !Array.isArray(t) && t.constructor === Object;
}
let ce = !f;
function he(t, e, n) {
    if (null != t) {
        if ("string" == typeof t) t = t ? new B(t, I) : U();
        else if (t.constructor !== B) {
            if (F(t)) t = n ? V(t) : t.length ? new B(new Uint8Array(t), I) : U();
            else {
                if (!e) throw Error();
                t = void 0;
            }
        }
    }
    return t;
}
function ue(t, e, n) {
    if (!Array.isArray(t) || t.length) return !1;
    const r = qt(t);
    return !!(1 & r) || !(!e || !(Array.isArray(e) ? e.includes(n) : e.has(n))) && (Zt(t, 1 | r), !0);
}
var le;
const fe = [];
function de(t) {
    if (2 & t) throw Error();
}
Zt(fe, 55), le = Object.freeze(fe);
class pe {
    constructor(t, e, n){
        this.l = 0, this.g = t, this.h = e, this.m = n;
    }
    next() {
        if (this.l < this.g.length) {
            const t = this.g[this.l++];
            return {
                done: !1,
                value: this.h ? this.h.call(this.m, t) : t
            };
        }
        return {
            done: !0,
            value: void 0
        };
    }
    [Symbol.iterator]() {
        return new pe(this.g, this.h, this.m);
    }
}
var ge = {};
let me, ye;
function ve(t, e) {
    (e = me ? e[me] : void 0) && (t[me] = Vt(e));
}
function _e(t) {
    return (t = Error(t)).__closure__error__context__984382 || (t.__closure__error__context__984382 = {}), t.__closure__error__context__984382.severity = "warning", t;
}
function we(t) {
    return null == t || "number" == typeof t ? t : "NaN" === t || "Infinity" === t || "-Infinity" === t ? Number(t) : void 0;
}
function Te(t) {
    return null == t || "boolean" == typeof t ? t : "number" == typeof t ? !!t : void 0;
}
Object.freeze(new class {
}), Object.freeze(new class {
});
const Ee = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function be(t) {
    const e = typeof t;
    return "number" === e ? Number.isFinite(t) : "string" === e && Ee.test(t);
}
function Ae(t) {
    if (null == t) return t;
    if ("string" == typeof t) {
        if (!t) return;
        t = +t;
    }
    return "number" == typeof t && Number.isFinite(t) ? 0 | t : void 0;
}
function xe(t) {
    if (null == t) return t;
    if ("string" == typeof t) {
        if (!t) return;
        t = +t;
    }
    return "number" == typeof t && Number.isFinite(t) ? t >>> 0 : void 0;
}
function ke(t) {
    return "-" !== t[0] && (20 > t.length || 20 === t.length && 184467 > Number(t.substring(0, 6)));
}
function Se(t) {
    return "-" === t[0] ? 20 > t.length || 20 === t.length && -922337 < Number(t.substring(0, 7)) : 19 > t.length || 19 === t.length && 922337 > Number(t.substring(0, 6));
}
function Le(t) {
    return t = Math.trunc(t), Number.isSafeInteger(t) || (J(t), t = tt($, q)), t;
}
function Re(t) {
    var e = Math.trunc(Number(t));
    return Number.isSafeInteger(e) ? String(e) : (-1 !== (e = t.indexOf(".")) && (t = t.substring(0, e)), Se(t) || (it(t), t = rt()), t);
}
function Fe(t) {
    return null == t ? t : be(t) ? "number" == typeof t ? Le(t) : Re(t) : void 0;
}
function Me(t) {
    if ("string" != typeof t) throw Error();
    return t;
}
function Oe(t) {
    if (null != t && "string" != typeof t) throw Error();
    return t;
}
function Ie(t) {
    return null == t || "string" == typeof t ? t : void 0;
}
function Ce(t, e, n, r) {
    if (null != t && "object" == typeof t && t.W === ie) return t;
    if (!Array.isArray(t)) return n ? 2 & r ? (t = e[Wt]) ? e = t : (te((t = new e).s), e = e[Wt] = t) : e = new e : e = void 0, e;
    let i = n = qt(t);
    return 0 === i && (i |= 32 & r), i |= 2 & r, i !== n && Zt(t, i), new e(t);
}
function Pe(t, e, n) {
    if (e) {
        var r = !!r;
        if (!be(e = t)) throw _e("int64");
        "string" == typeof e ? r = Re(e) : r ? (r = Math.trunc(e), Number.isSafeInteger(r) ? r = String(r) : Se(e = String(r)) ? r = e : (J(r), r = rt())) : r = Le(e);
    } else r = Fe(t);
    return "string" == typeof (n = null == (t = r) ? n ? 0 : void 0 : t) && (r = +n, Number.isSafeInteger(r)) ? r : n;
}
let Ue, De, Be;
function Ne(t) {
    switch(typeof t){
        case "boolean":
            return De ||= [
                0,
                void 0,
                !0
            ];
        case "number":
            return 0 < t ? void 0 : 0 === t ? Be ||= [
                0,
                void 0
            ] : [
                -t,
                void 0
            ];
        case "string":
            return [
                0,
                t
            ];
        case "object":
            return t;
    }
}
function Ge(t, e) {
    return je(t, e[0], e[1]);
}
function je(t, e, n) {
    if (null == t && (t = Ue), Ue = void 0, null == t) {
        var r = 96;
        n ? (t = [
            n
        ], r |= 512) : t = [], e && (r = -16760833 & r | (1023 & e) << 14);
    } else {
        if (!Array.isArray(t)) throw Error();
        if (64 & (r = qt(t))) return ye && delete t[ye], t;
        if (r |= 64, n && (r |= 512, n !== t[0])) throw Error();
        t: {
            const i = (n = t).length;
            if (i) {
                const t = i - 1;
                if (ae(n[t])) {
                    if (1024 <= (e = t - (+!!(512 & (r |= 256)) - 1))) throw Error();
                    r = -16760833 & r | (1023 & e) << 14;
                    break t;
                }
            }
            if (e) {
                if (1024 < (e = Math.max(e, i - (+!!(512 & r) - 1)))) throw Error();
                r = -16760833 & r | (1023 & e) << 14;
            }
        }
    }
    return Zt(t, r), t;
}
let Ve = function() {
    try {
        return new class extends Map {
            constructor(){
                super();
            }
        }, !1;
    } catch  {
        return !0;
    }
}();
class Xe {
    constructor(){
        this.g = new Map;
    }
    get(t) {
        return this.g.get(t);
    }
    set(t, e) {
        return this.g.set(t, e), this.size = this.g.size, this;
    }
    delete(t) {
        return t = this.g.delete(t), this.size = this.g.size, t;
    }
    clear() {
        this.g.clear(), this.size = this.g.size;
    }
    has(t) {
        return this.g.has(t);
    }
    entries() {
        return this.g.entries();
    }
    keys() {
        return this.g.keys();
    }
    values() {
        return this.g.values();
    }
    forEach(t, e) {
        return this.g.forEach(t, e);
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
const ze = Ve ? (Object.setPrototypeOf(Xe.prototype, Map.prototype), Object.defineProperties(Xe.prototype, {
    size: {
        value: 0,
        configurable: !0,
        enumerable: !0,
        writable: !0
    }
}), Xe) : class extends Map {
    constructor(){
        super();
    }
};
function We(t) {
    return t;
}
function He(t) {
    if (2 & t.O) throw Error("Cannot mutate an immutable Map");
}
var Ye = class extends ze {
    constructor(t, e, n = We, r = We){
        super();
        let i = qt(t);
        i |= 64, Zt(t, i), this.O = i, this.V = e, this.R = n || We, this.Y = this.V ? Ke : r || We;
        for(let s = 0; s < t.length; s++){
            const o = t[s], a = n(o[0], !1, !0);
            let c = o[1];
            e ? void 0 === c && (c = null) : c = r(o[1], !1, !0, void 0, void 0, i), super.set(a, c);
        }
    }
    pa(t = $e) {
        return this.X(t);
    }
    X(t = $e) {
        const e = [], n = super.entries();
        for(var r; !(r = n.next()).done;)(r = r.value)[0] = t(r[0]), r[1] = t(r[1]), e.push(r);
        return e;
    }
    clear() {
        He(this), super.clear();
    }
    delete(t) {
        return He(this), super.delete(this.R(t, !0, !1));
    }
    entries() {
        var t = this.ma();
        return new pe(t, qe, this);
    }
    keys() {
        return this.Ma();
    }
    values() {
        var t = this.ma();
        return new pe(t, Ye.prototype.get, this);
    }
    forEach(t, e) {
        super.forEach((n, r)=>{
            t.call(e, this.get(r), r, this);
        });
    }
    set(t, e) {
        return He(this), null == (t = this.R(t, !0, !1)) ? this : null == e ? (super.delete(t), this) : super.set(t, this.Y(e, !0, !0, this.V, !1, this.O));
    }
    Ta(t) {
        const e = this.R(t[0], !1, !0);
        t = t[1], t = this.V ? void 0 === t ? null : t : this.Y(t, !1, !0, void 0, !1, this.O), super.set(e, t);
    }
    has(t) {
        return super.has(this.R(t, !1, !1));
    }
    get(t) {
        t = this.R(t, !1, !1);
        const e = super.get(t);
        if (void 0 !== e) {
            var n = this.V;
            return n ? ((n = this.Y(e, !1, !0, n, this.xa, this.O)) !== e && super.set(t, n), n) : e;
        }
    }
    ma() {
        return Array.from(super.keys());
    }
    Ma() {
        return super.keys();
    }
    [Symbol.iterator]() {
        return this.entries();
    }
};
function Ke(t, e, n, r, i, s) {
    return t = Ce(t, r, n, s), i && (t = sn(t)), t;
}
function $e(t) {
    return t;
}
function qe(t) {
    return [
        t,
        this.get(t)
    ];
}
function Je(t, e, n, r, i, s) {
    if (null != t) {
        if (Array.isArray(t)) t = i && 0 == t.length && 1 & qt(t) ? void 0 : s && 2 & qt(t) ? t : Ze(t, e, n, void 0 !== r, i, s);
        else if (ae(t)) {
            const o = {};
            for(let a in t)o[a] = Je(t[a], e, n, r, i, s);
            t = o;
        } else t = e(t, r);
        return t;
    }
}
function Ze(t, e, n, r, i, s) {
    const o = r || n ? qt(t) : 0;
    r = r ? !!(32 & o) : void 0;
    const a = Vt(t);
    for(let t = 0; t < a.length; t++)a[t] = Je(a[t], e, n, r, i, s);
    return n && (ve(a, t), n(o, a)), a;
}
function Qe(t) {
    return Je(t, tn, void 0, void 0, !1, !1);
}
function tn(t) {
    return t.W === ie ? t.toJSON() : t instanceof Ye ? t.pa(Qe) : function(t) {
        switch(typeof t){
            case "number":
                return isFinite(t) ? t : String(t);
            case "boolean":
                return t ? 1 : 0;
            case "object":
                if (t) {
                    if (Array.isArray(t)) return ce || !ue(t, void 0, 9999) ? t : void 0;
                    if (F(t)) return x(t);
                    if (t instanceof B) {
                        const e = t.Z;
                        return null == e ? "" : "string" == typeof e ? e : t.Z = x(e);
                    }
                    if (t instanceof Ye) return t = t.pa(), W || 0 !== t.length ? t : void 0;
                }
        }
        return t;
    }(t);
}
function en(t, e, n = ne) {
    if (null != t) {
        if (b && t instanceof Uint8Array) return e ? t : new Uint8Array(t);
        if (Array.isArray(t)) {
            var r = qt(t);
            return 2 & r ? t : (e &&= 0 === r || !!(32 & r) && !(64 & r || !(16 & r)), e ? (Zt(t, -12293 & (34 | r)), t) : Ze(t, en, 4 & r ? ne : n, !0, !1, !0));
        }
        return t.W === ie ? (n = t.s, t = 2 & (r = Jt(n)) ? t : nn(t, n, r, !0)) : t instanceof Ye && (n = te(t.X(en)), t = new Ye(n, t.V, t.R, t.Y)), t;
    }
}
function nn(t, e, n, r) {
    return t = t.constructor, Ue = e = rn(e, n, r), e = new t(e), Ue = void 0, e;
}
function rn(t, e, n) {
    const r = n || 2 & e ? ne : ee, i = !!(32 & e);
    return t = function(t, e, n) {
        const r = Vt(t);
        var i = r.length;
        const s = 256 & e ? r[i - 1] : void 0;
        for(i += s ? -1 : 0, e = 512 & e ? 1 : 0; e < i; e++)r[e] = n(r[e]);
        if (s) {
            e = r[e] = {};
            for(const t in s)e[t] = n(s[t]);
        }
        return ve(r, t), r;
    }(t, e, (t)=>en(t, i, r)), Ht(t, 32 | (n ? 2 : 0)), t;
}
function sn(t) {
    const e = t.s, n = Jt(e);
    return 2 & n ? nn(t, e, n, !1) : t;
}
function on(t, e) {
    return an(t = t.s, Jt(t), e);
}
function an(t, e, n, r) {
    if (-1 === n) return null;
    if (n >= re(e)) {
        if (256 & e) return t[t.length - 1][n];
    } else {
        var i = t.length;
        if (r && 256 & e && null != (r = t[i - 1][n])) return r;
        if ((e = n + (+!!(512 & e) - 1)) < i) return t[e];
    }
}
function cn(t, e, n, r) {
    const i = t.s;
    let s = Jt(i);
    return de(s), hn(i, s, e, n, r), t;
}
function hn(t, e, n, r, i) {
    var s = re(e);
    if (n >= s || i) {
        if (i = e, 256 & e) s = t[t.length - 1];
        else {
            if (null == r) return i;
            s = t[s + (+!!(512 & e) - 1)] = {}, i |= 256;
        }
        return s[n] = r, i !== e && Zt(t, i), i;
    }
    return t[n + (+!!(512 & e) - 1)] = r, 256 & e && n in (t = t[t.length - 1]) && delete t[n], e;
}
function un(t, e, n, r, i) {
    var s = 2 & e;
    let o = an(t, e, n, i);
    Array.isArray(o) || (o = le);
    const a = !(2 & r);
    r = !(1 & r);
    const c = !!(32 & e);
    let h = qt(o);
    return 0 !== h || !c || s || a ? 1 & h || (h |= 1, Zt(o, h)) : (h |= 33, Zt(o, h)), s ? (t = !1, 2 & h || (te(o), t = !!(4 & h)), (r || t) && Object.freeze(o)) : (s = !!(2 & h) || !!(2048 & h), r && s ? (o = Vt(o), r = 1, c && !a && (r |= 32), Zt(o, r), hn(t, e, n, o, i)) : a && 32 & h && !s && Kt(o, 32)), o;
}
function ln(t, e) {
    t = t.s;
    let n = Jt(t);
    const r = an(t, n, e), i = we(r);
    return null != i && i !== r && hn(t, n, e, i), i;
}
function fn(t) {
    t = t.s;
    let e = Jt(t);
    const n = an(t, e, 1), r = he(n, !0, !!(34 & e));
    return null != r && r !== n && hn(t, e, 1, r), r;
}
function dn(t, e, n) {
    t = t.s;
    let r = Jt(t);
    const i = 2 & r ? 1 : 2;
    let s = pn(t, r, e);
    var o = qt(s);
    if (!(4 & o)) {
        (4 & o || Object.isFrozen(s)) && (s = Vt(s), o = On(o, r, !1), r = hn(t, r, e, s));
        var a = 0;
        let i = 0;
        for(; a < s.length; a++){
            const t = n(s[a]);
            null != t && (s[i++] = t);
        }
        i < a && (s.length = i), o = $t(o = gn(o, r, !1), 20, !0), o = $t(o, 4096, !1), o = $t(o, 8192, !1), Zt(s, o), 2 & o && Object.freeze(s);
    }
    return mn(o) || (n = o, (o = (a = 1 === i) ? $t(o, 2, !0) : $t(o, 32, !1)) !== n && Zt(s, o), a && Object.freeze(s)), 2 === i && mn(o) && (s = Vt(s), o = On(o, r, !1), Zt(s, o), hn(t, r, e, s)), s;
}
function pn(t, e, n) {
    return t = an(t, e, n), Array.isArray(t) ? t : le;
}
function gn(t, e, n) {
    return 0 === t && (t = On(t, e, n)), $t(t, 1, !0);
}
function mn(t) {
    return !!(2 & t) && !!(4 & t) || !!(2048 & t);
}
let yn;
function vn() {
    return yn ??= new Ye(te([]), void 0, void 0, void 0, ge);
}
function _n(t) {
    t = Vt(t);
    for(let e = 0; e < t.length; e++){
        const n = t[e] = Vt(t[e]);
        Array.isArray(n[1]) && (n[1] = te(n[1]));
    }
    return t;
}
function wn(t, e, n) {
    {
        const o = t.s;
        let a = Jt(o);
        if (de(a), null == n) hn(o, a, e);
        else {
            var r, i = t = qt(n), s = !!(2 & t) || Object.isFrozen(n);
            if ((r = !s) && (r = !1), !(4 & t)) for(t = 21, s && (n = Vt(n), i = 0, t = On(t, a, !0)), s = 0; s < n.length; s++)n[s] = Me(n[s]);
            r && (n = Vt(n), i = 0, t = On(t, a, !0)), t !== i && Zt(n, t), hn(o, a, e, n);
        }
    }
}
function Tn(t, e, n, r) {
    const i = Jt(t);
    de(i), t = un(t, i, e, 2), r = n(r, !!(4 & (e = qt(t))) && !!(4096 & e)), t.push(r);
}
function En(t) {
    return t;
}
function bn(t, e) {
    return An(t = t.s, Jt(t), ps) === e ? e : -1;
}
function An(t, e, n) {
    let r = 0;
    for(let i = 0; i < n.length; i++){
        const s = n[i];
        null != an(t, e, s) && (0 !== r && (e = hn(t, e, r)), r = s);
    }
    return r;
}
function xn(t, e, n, r) {
    let i = Jt(t);
    de(i);
    const s = an(t, i, n, r);
    let o;
    if (null != s && s.W === ie) return (e = sn(s)) !== s && hn(t, i, n, e, r), e.s;
    if (Array.isArray(s)) {
        const t = qt(s);
        o = 2 & t ? rn(s, t, !1) : s, o = Ge(o, e);
    } else o = Ge(void 0, e);
    return o !== s && hn(t, i, n, o, r), o;
}
function kn(t, e, n, r) {
    t = t.s;
    let i = Jt(t);
    const s = an(t, i, n, r);
    return (e = Ce(s, e, !1, i)) !== s && null != e && hn(t, i, n, e, r), e;
}
function Sn(t, e, n, r = !1) {
    if (null == (e = kn(t, e, n, r))) return e;
    t = t.s;
    let i = Jt(t);
    if (!(2 & i)) {
        const s = sn(e);
        s !== e && hn(t, i, n, e = s, r);
    }
    return e;
}
function Ln(t, e, n, r, i, s) {
    var o = !!(2 & e), a = o ? 1 : 2;
    const c = 1 === a;
    a = 2 === a, i = !!i, s &&= !o, o = pn(t, e, r);
    var h = qt(o);
    const u = !!(4 & h);
    if (!u) {
        var l = o, f = e;
        const t = !!(2 & (h = gn(h, e, i)));
        t && (f = $t(f, 2, !0));
        let r = !t, s = !0, a = 0, c = 0;
        for(; a < l.length; a++){
            const e = Ce(l[a], n, !1, f);
            if (e instanceof n) {
                if (!t) {
                    const t = !!(2 & qt(e.s));
                    r &&= !t, s &&= t;
                }
                l[c++] = e;
            }
        }
        c < a && (l.length = c), h = $t(h, 4, !0), h = $t(h, 16, s), h = $t(h, 8, r), Zt(l, h), t && Object.freeze(l);
    }
    if (n = !!(8 & h) || c && !o.length, s && !n) {
        for(mn(h) && (o = Vt(o), h = On(h, e, i), e = hn(t, e, r, o)), s = o, n = h, l = 0; l < s.length; l++)(h = s[l]) !== (f = sn(h)) && (s[l] = f);
        n = $t(n, 8, !0), n = $t(n, 16, !s.length), Zt(s, n), h = n;
    }
    return mn(h) || (s = h, c ? h = $t(h, !o.length || 16 & h && (!u || 32 & h) ? 2 : 2048, !0) : i || (h = $t(h, 32, !1)), h !== s && Zt(o, h), c && Object.freeze(o)), a && mn(h) && (o = Vt(o), h = On(h, e, i), Zt(o, h), hn(t, e, r, o)), o;
}
function Rn(t, e, n) {
    t = t.s;
    const r = Jt(t);
    return Ln(t, r, e, n, !1, !(2 & r));
}
function Fn(t, e, n, r, i) {
    return null == r && (r = void 0), cn(t, n, r, i);
}
function Mn(t, e, n, r) {
    null == r && (r = void 0), t = t.s;
    let i = Jt(t);
    de(i), (n = An(t, i, n)) && n !== e && null != r && (i = hn(t, i, n)), hn(t, i, e, r);
}
function On(t, e, n) {
    return t = $t(t, 2, !!(2 & e)), t = $t(t, 32, !!(32 & e) && n), $t(t, 2048, !1);
}
function In(t, e, n) {
    t = t.s;
    const r = Jt(t);
    de(r), t = Ln(t, r, e, 1, !0), e = null != n ? n : new e, t.push(e), 2 & qt(e.s) ? Kt(t, 8) : Kt(t, 16);
}
function Cn(t, e) {
    return Ae(on(t, e));
}
function Pn(t, e) {
    return Ie(on(t, e));
}
function Un(t) {
    return t ?? 0;
}
function Dn(t, e) {
    return Un(ln(t, e));
}
function Bn(t, e, n) {
    if (null != n && "boolean" != typeof n) throw t = typeof n, Error(`Expected boolean but got ${"object" != t ? t : n ? Array.isArray(n) ? "array" : t : "null"}: ${n}`);
    cn(t, e, n);
}
function Nn(t, e, n) {
    if (null != n) {
        if ("number" != typeof n) throw _e("int32");
        if (!Number.isFinite(n)) throw _e("int32");
        n |= 0;
    }
    cn(t, e, n);
}
function Gn(t, e, n) {
    if (null != n && "number" != typeof n) throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);
    cn(t, e, n);
}
function jn(t, e, n) {
    e.g ? e.m(t, e.g, e.h, n, !0) : e.m(t, e.h, n, !0);
}
Ye.prototype.toJSON = void 0, Ye.prototype.Na = se;
var Vn = class {
    constructor(t, e){
        this.s = je(t, e);
    }
    toJSON() {
        return Xn(this, Ze(this.s, tn, void 0, void 0, !1, !1), !0);
    }
    l() {
        var t = uo;
        return t.g ? t.l(this, t.g, t.h, !0) : t.l(this, t.h, t.defaultValue, !0);
    }
    clone() {
        const t = this.s;
        return nn(this, t, Jt(t), !1);
    }
    L() {
        return !!(2 & qt(this.s));
    }
};
function Xn(t, e, n) {
    const r = t.constructor.A;
    var i = Jt(n ? t.s : e), s = re(i), o = !1;
    if (r && ce) {
        if (!n) {
            var a;
            if ((e = Vt(e)).length && ae(a = e[e.length - 1])) {
                for(o = 0; o < r.length; o++)if (r[o] >= s) {
                    Object.assign(e[e.length - 1] = {}, a);
                    break;
                }
            }
            o = !0;
        }
        var c;
        s = e, n = !n, t = re(a = Jt(t.s)), a = +!!(512 & a) - 1;
        for(let e = 0; e < r.length; e++){
            var h = r[e];
            if (h < t) {
                var u = s[h += a];
                null == u ? s[h] = n ? le : Qt() : n && u !== le && Yt(u);
            } else {
                if (!c) {
                    var l = void 0;
                    s.length && ae(l = s[s.length - 1]) ? c = l : s.push(c = {});
                }
                u = c[h], null == c[h] ? c[h] = n ? le : Qt() : n && u !== le && Yt(u);
            }
        }
    }
    if (!(c = e.length)) return e;
    let f, d;
    if (ae(l = e[c - 1])) {
        t: {
            var p = l;
            for(var g in s = {}, n = !1, p)t = p[g], Array.isArray(t) && (a = t, (!H && ue(t, r, +g) || !W && oe(t) && 0 === t.size) && (t = null), t != a && (n = !0)), null != t ? s[g] = t : n = !0;
            if (n) {
                for(let t in s){
                    p = s;
                    break t;
                }
                p = null;
            }
        }
        p != l && (f = !0), c--;
    }
    for(i = +!!(512 & i) - 1; 0 < c && (null == (l = e[g = c - 1]) || !H && ue(l, r, g - i) || !W && oe(l) && 0 === l.size); c--)d = !0;
    return f || d ? (e = o ? e : Array.prototype.slice.call(e, 0, c), o && (e.length = c), p && e.push(p), e) : e;
}
function zn(t) {
    return Array.isArray(t) ? t[0] instanceof jt ? t : [
        Xr,
        t
    ] : [
        t,
        void 0
    ];
}
function Wn(t, e) {
    if (Array.isArray(e)) {
        var n = qt(e);
        if (4 & n) return e;
        for(var r = 0, i = 0; r < e.length; r++){
            const n = t(e[r]);
            null != n && (e[i++] = n);
        }
        return i < r && (e.length = i), Zt(e, -12289 & (5 | n)), 2 & n && Object.freeze(e), e;
    }
}
Vn.prototype.W = ie, Vn.prototype.toString = function() {
    return Xn(this, this.s, !1).toString();
};
const Hn = Symbol();
function Yn(t) {
    let e = t[Hn];
    if (!e) {
        const n = tr(t), r = fr(t), i = r.g;
        e = i ? (t, e)=>i(t, e, r) : (t, e)=>{
            for(; vt(e) && 4 != e.h;){
                var i = e.m, s = r[i];
                if (!s) {
                    var o = r.ha;
                    o && (o = o[i]) && (s = r[i] = Kn(o));
                }
                s && s(e, t, i) || (i = (s = e).l, _t(s), s.ga ? s = void 0 : (o = s.g.g - i, s.g.g = i, s = mt(s.g, o)), i = t, s && (me ||= Symbol(), (o = i[me]) ? o.push(s) : i[me] = [
                    s
                ]));
            }
            n === $n || n === qn || n.Oa || (t[ye ||= Symbol()] = n);
        }, t[Hn] = e;
    }
    return e;
}
function Kn(t) {
    const e = (t = zn(t))[0].g;
    if (t = t[1]) {
        const n = Yn(t), r = fr(t).S;
        return (t, i, s)=>e(t, i, s, r, n);
    }
    return e;
}
let $n, qn;
const Jn = Symbol();
function Zn(t, e, n) {
    const r = n[1];
    let i;
    if (r) {
        const n = r[Jn];
        i = n ? n.S : Ne(r[0]), t[e] = n ?? r;
    }
    i && i === De ? (t.na || (t.na = [])).push(e) : n[0] && (t.oa || (t.oa = [])).push(e);
}
function Qn(t, e) {
    return [
        t.l,
        !e || 0 < e[0] ? void 0 : e
    ];
}
function tr(t) {
    var e = t[Jn];
    if (e) return e;
    if (!(e = nr(t, t[Jn] = {}, Qn, Qn, Zn)).oa && !e.na) {
        let n = !0;
        for(let t in e){
            isNaN(t) || (n = !1);
            break;
        }
        n ? (e = Ne(t[0]) === De, e = t[Jn] = e ? qn ||= {
            S: Ne(!0)
        } : $n ||= {}) : e.Oa = !0;
    }
    return e;
}
function er(t, e, n) {
    t[e] = n;
}
function nr(t, e, n, r, i = er) {
    e.S = Ne(t[0]);
    let s = 0;
    var o = t[++s];
    o && o.constructor === Object && (e.ha = o, "function" == typeof (o = t[++s]) && (e.g = o, e.h = t[++s], o = t[++s]));
    const a = {};
    for(; Array.isArray(o) && "number" == typeof o[0] && 0 < o[0];){
        for(var c = 0; c < o.length; c++)a[o[c]] = o;
        o = t[++s];
    }
    for(c = 1; void 0 !== o;){
        let l;
        "number" == typeof o && (c += o, o = t[++s]);
        var h = void 0;
        if (o instanceof jt ? l = o : (l = zr, s--), l.qa) {
            o = t[++s], h = t;
            var u = s;
            "function" == typeof o && (o = o(), h[u] = o), h = o;
        }
        for(u = c + 1, "number" == typeof (o = t[++s]) && 0 > o && (u -= o, o = t[++s]); c < u; c++){
            const t = a[c];
            i(e, c, h ? r(l, h, t) : n(l, t));
        }
    }
    return e;
}
const rr = Symbol();
function ir(t) {
    let e = t[rr];
    if (!e) {
        const n = cr(t);
        e = (t, e)=>pr(t, e, n), t[rr] = e;
    }
    return e;
}
const sr = Symbol();
function or(t) {
    return t.h;
}
function ar(t, e) {
    let n, r;
    const i = t.h;
    return (t, s, o)=>i(t, s, o, r ||= cr(e).S, n ||= ir(e));
}
function cr(t) {
    let e = t[sr];
    return e || (e = nr(t, t[sr] = {}, or, ar), hr in t && sr in t && (t.length = 0), e);
}
const hr = Symbol();
function ur(t, e) {
    const n = t.g;
    return e ? (t, r, i)=>n(t, r, i, e) : n;
}
function lr(t, e, n) {
    const r = t.g;
    let i, s;
    return (t, o, a)=>r(t, o, a, s ||= fr(e).S, i ||= Yn(e), n);
}
function fr(t) {
    let e = t[hr];
    return e || (tr(t), e = nr(t, t[hr] = {}, ur, lr), hr in t && sr in t && (t.length = 0), e);
}
function dr(t, e) {
    var n = t[e];
    if (n) return n;
    if ((n = t.ha) && (n = n[e])) {
        var r = (n = zn(n))[0].h;
        if (n = n[1]) {
            const e = ir(n), i = cr(n).S;
            n = (n = t.h) ? n(i, e) : (t, n, s)=>r(t, n, s, i, e);
        } else n = r;
        return t[e] = n;
    }
}
function pr(t, e, n) {
    for(var r = Jt(t), i = +!!(512 & r) - 1, s = t.length, o = 512 & r ? 1 : 0, a = s + (256 & r ? -1 : 0); o < a; o++){
        const r = t[o];
        if (null == r) continue;
        const s = o - i, a = dr(n, s);
        a && a(e, r, s);
    }
    if (256 & r) {
        r = t[s - 1];
        for(let t in r)i = +t, Number.isNaN(i) || null != (s = r[t]) && (a = dr(n, i)) && a(e, s, i);
    }
    if (t = me ? t[me] : void 0) for(Pt(e, e.g.end()), n = 0; n < t.length; n++)Pt(e, D(t[n]) || O());
}
function gr(t, e) {
    return new jt(t, e, !1, !1);
}
function mr(t, e) {
    return new jt(t, e, !0, !1);
}
function yr(t, e) {
    return new jt(t, e, !1, !0);
}
function vr(t, e, n) {
    hn(t, Jt(t), e, n);
}
var _r = yr(function(t, e, n, r, i) {
    return 2 === t.h && (t = wt(t, Ge([
        void 0,
        void 0
    ], r), i), de(r = Jt(e)), (i = an(e, r, n)) instanceof Ye ? 0 != (2 & i.O) ? ((i = i.X()).push(t), hn(e, r, n, i)) : i.Ta(t) : Array.isArray(i) ? (2 & qt(i) && hn(e, r, n, i = _n(i)), i.push(t)) : hn(e, r, n, [
        t
    ]), !0);
}, function(t, e, n, r, i) {
    if (e instanceof Ye) e.forEach((e, s)=>{
        Gt(t, n, Ge([
            s,
            e
        ], r), i);
    });
    else if (Array.isArray(e)) for(let s = 0; s < e.length; s++){
        const o = e[s];
        Array.isArray(o) && Gt(t, n, Ge(o, r), i);
    }
});
function wr(t, e, n) {
    t: if (null != e) {
        if (be(e)) {
            if ("string" == typeof e) {
                e = Re(e);
                break t;
            }
            if ("number" == typeof e) {
                e = Le(e);
                break t;
            }
        }
        e = void 0;
    }
    null != e && ("string" == typeof e && Lt(e), null != e && (Ut(t, n, 0), "number" == typeof e ? (t = t.g, J(e), Mt(t, $, q)) : (n = Lt(e), Mt(t.g, n.h, n.g))));
}
function Tr(t, e, n) {
    null != (e = Ae(e)) && null != e && (Ut(t, n, 0), It(t.g, e));
}
function Er(t, e, n) {
    null != (e = Te(e)) && (Ut(t, n, 0), t.g.g.push(e ? 1 : 0));
}
function br(t, e, n) {
    null != (e = Ie(e)) && Nt(t, n, h(e));
}
function Ar(t, e, n, r, i) {
    Gt(t, n, e instanceof Vn ? e.s : Array.isArray(e) ? Ge(e, r) : void 0, i);
}
function xr(t, e, n) {
    null != (e = null == e || "string" == typeof e || F(e) || e instanceof B ? e : void 0) && Nt(t, n, X(e).buffer);
}
function kr(t, e, n) {
    return (5 === t.h || 2 === t.h) && (e = un(e, Jt(e), n, 2, !1), 2 == t.h ? bt(t, lt, e) : e.push(lt(t.g)), !0);
}
var Sr, Lr = gr(function(t, e, n) {
    if (1 !== t.h) return !1;
    var r = t.g;
    t = ut(r);
    const i = ut(r);
    r = 2 * (i >> 31) + 1;
    const s = i >>> 20 & 2047;
    return t = 4294967296 * (1048575 & i) + t, vr(e, n, 2047 == s ? t ? NaN : 1 / 0 * r : 0 == s ? r * Math.pow(2, -1074) * t : r * Math.pow(2, s - 1075) * (t + 4503599627370496)), !0;
}, function(t, e, n) {
    null != (e = we(e)) && (Ut(t, n, 1), t = t.g, (n = K ||= new DataView(new ArrayBuffer(8))).setFloat64(0, +e, !0), $ = n.getUint32(0, !0), q = n.getUint32(4, !0), Ct(t, $), Ct(t, q));
}), Rr = gr(function(t, e, n) {
    return 5 === t.h && (vr(e, n, lt(t.g)), !0);
}, function(t, e, n) {
    null != (e = we(e)) && (Ut(t, n, 5), t = t.g, Z(e), Ct(t, $));
}), Fr = mr(kr, function(t, e, n) {
    if (null != (e = Wn(we, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && (Ut(r, i, 5), r = r.g, Z(s), Ct(r, $));
    }
}), Mr = mr(kr, function(t, e, n) {
    if (null != (e = Wn(we, e)) && e.length) {
        Ut(t, n, 2), Ot(t.g, 4 * e.length);
        for(let r = 0; r < e.length; r++)n = t.g, Z(e[r]), Ct(n, $);
    }
}), Or = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, ot(t.g, tt)), !0);
}, wr), Ir = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, 0 === (t = ot(t.g, tt)) ? void 0 : t), !0);
}, wr), Cr = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, ot(t.g, Q)), !0);
}, function(t, e, n) {
    t: if (null != e) {
        if (be(e)) {
            if ("string" == typeof e) {
                var r = Math.trunc(Number(e));
                Number.isSafeInteger(r) && 0 <= r ? e = String(r) : (-1 !== (r = e.indexOf(".")) && (e = e.substring(0, r)), ke(e) || (it(e), e = et($, q)));
                break t;
            }
            if ("number" == typeof e) {
                e = 0 <= (e = Math.trunc(e)) && Number.isSafeInteger(e) ? e : function(t) {
                    if (0 > t) {
                        J(t);
                        const e = et($, q);
                        return t = Number(e), Number.isSafeInteger(t) ? t : e;
                    }
                    return ke(String(t)) ? t : (J(t), Q($, q));
                }(e);
                break t;
            }
        }
        e = void 0;
    }
    null != e && ("string" == typeof e && xt(e), null != e && (Ut(t, n, 0), "number" == typeof e ? (t = t.g, J(e), Mt(t, $, q)) : (n = xt(e), Mt(t.g, n.h, n.g))));
}), Pr = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, ct(t.g)), !0);
}, Tr), Ur = mr(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = un(e, Jt(e), n, 2, !1), 2 == t.h ? bt(t, ct, e) : e.push(ct(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = Wn(Ae, e)) && e.length) {
        n = Dt(t, n);
        for(let n = 0; n < e.length; n++)It(t.g, e[n]);
        Bt(t, n);
    }
}), Dr = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, 0 === (t = ct(t.g)) ? void 0 : t), !0);
}, Tr), Br = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, at(t.g)), !0);
}, Er), Nr = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, !1 === (t = at(t.g)) ? void 0 : t), !0);
}, Er), Gr = mr(function(t, e, n) {
    return 2 === t.h && (Tn(e, n, En, t = Tt(t)), !0);
}, function(t, e, n) {
    if (null != (e = Wn(Ie, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && Nt(r, i, h(s));
    }
}), jr = gr(function(t, e, n) {
    return 2 === t.h && (vr(e, n, "" === (t = Tt(t)) ? void 0 : t), !0);
}, br), Vr = gr(function(t, e, n) {
    return 2 === t.h && (vr(e, n, Tt(t)), !0);
}, br), Xr = yr(function(t, e, n, r, i) {
    return 2 === t.h && (wt(t, xn(e, r, n, !0), i), !0);
}, Ar), zr = yr(function(t, e, n, r, i) {
    return 2 === t.h && (wt(t, xn(e, r, n), i), !0);
}, Ar);
Sr = new jt(function(t, e, n, r, i) {
    if (2 !== t.h) return !1;
    r = Ge(void 0, r);
    let s = Jt(e);
    de(s);
    let o = un(e, s, n, 3);
    return s = Jt(e), 4 & qt(o) && (o = Vt(o), Zt(o, -2079 & (1 | qt(o))), hn(e, s, n, o)), o.push(r), wt(t, r, i), !0;
}, function(t, e, n, r, i) {
    if (Array.isArray(e)) for(let s = 0; s < e.length; s++)Ar(t, e[s], n, r, i);
}, !0, !0);
var Wr = yr(function(t, e, n, r, i, s) {
    if (2 !== t.h) return !1;
    let o = Jt(e);
    return de(o), (s = An(e, o, s)) && n !== s && hn(e, o, s), wt(t, e = xn(e, r, n), i), !0;
}, Ar), Hr = gr(function(t, e, n) {
    return 2 === t.h && (vr(e, n, Et(t)), !0);
}, xr), Yr = mr(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = un(e, Jt(e), n, 2, !1), 2 == t.h ? bt(t, ht, e) : e.push(ht(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = Wn(xe, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && (Ut(r, i, 0), Ot(r.g, s));
    }
}), Kr = gr(function(t, e, n) {
    return 0 === t.h && (vr(e, n, ct(t.g)), !0);
}, function(t, e, n) {
    null != (e = Ae(e)) && (e = parseInt(e, 10), Ut(t, n, 0), It(t.g, e));
}), $r = mr(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = un(e, Jt(e), n, 2, !1), 2 == t.h ? bt(t, ft, e) : e.push(ct(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = Wn(Ae, e)) && e.length) {
        n = Dt(t, n);
        for(let n = 0; n < e.length; n++)It(t.g, e[n]);
        Bt(t, n);
    }
});
class qr {
    constructor(t, e){
        this.h = t, this.g = e, this.l = Sn, this.m = Fn, this.defaultValue = void 0;
    }
}
function Jr(t, e) {
    return new qr(t, e);
}
function Zr(t, e) {
    return (n, r)=>{
        t: {
            if (At.length) {
                const t = At.pop();
                t.o(r), dt(t.g, n, r), n = t;
            } else n = new class {
                constructor(t, e){
                    if (yt.length) {
                        const n = yt.pop();
                        dt(n, t, e), t = n;
                    } else t = new class {
                        constructor(t, e){
                            this.h = null, this.m = !1, this.g = this.l = this.j = 0, dt(this, t, e);
                        }
                        clear() {
                            this.h = null, this.m = !1, this.g = this.l = this.j = 0, this.aa = !1;
                        }
                    }(t, e);
                    this.g = t, this.l = this.g.g, this.h = this.m = -1, this.o(e);
                }
                o({ ga: t = !1 } = {}) {
                    this.ga = t;
                }
            }(n, r);
            try {
                const r = new t, s = r.s;
                Yn(e)(s, n), ye && delete s[ye];
                var i = r;
                break t;
            } finally{
                n.g.clear(), n.m = -1, n.h = -1, 100 > At.length && At.push(n);
            }
            i = void 0;
        }
        return i;
    };
}
function Qr(t) {
    return function() {
        const e = new class {
            constructor(){
                this.l = [], this.h = 0, this.g = new class {
                    constructor(){
                        this.g = [];
                    }
                    length() {
                        return this.g.length;
                    }
                    end() {
                        const t = this.g;
                        return this.g = [], t;
                    }
                };
            }
        };
        pr(this.s, e, cr(t)), Pt(e, e.g.end());
        const n = new Uint8Array(e.h), r = e.l, i = r.length;
        let s = 0;
        for(let t = 0; t < i; t++){
            const e = r[t];
            n.set(e, s), s += e.length;
        }
        return e.l = [
            n
        ], n;
    };
}
var ti = [
    0,
    jr,
    gr(function(t, e, n) {
        return 2 === t.h && (vr(e, n, (t = Et(t)) === U() ? void 0 : t), !0);
    }, function(t, e, n) {
        if (null != e) {
            if (e instanceof Vn) {
                const r = e.Va;
                return void (r && (e = r(e), null != e && Nt(t, n, X(e).buffer)));
            }
            if (Array.isArray(e)) return;
        }
        xr(t, e, n);
    })
], ei = [
    0,
    Vr
], ni = [
    0,
    Pr,
    Kr,
    Br,
    -1,
    Ur,
    Kr,
    -1
], ri = [
    0,
    Br,
    -1
], ii = class extends Vn {
    constructor(){
        super();
    }
};
ii.A = [
    6
];
var si = [
    0,
    Br,
    Vr,
    Br,
    Kr,
    -1,
    $r,
    Vr,
    -1,
    ri,
    Kr
], oi = [
    0,
    Vr,
    -2
], ai = class extends Vn {
    constructor(){
        super();
    }
}, ci = [
    0
], hi = [
    0,
    Pr,
    Br,
    -2
], ui = class extends Vn {
    constructor(t){
        super(t, 2);
    }
}, li = {}, fi = [
    -2,
    li,
    Br
];
li[336783863] = [
    0,
    Vr,
    Br,
    -1,
    Pr,
    [
        0,
        [
            1,
            2,
            3,
            4,
            5
        ],
        Wr,
        ci,
        Wr,
        si,
        Wr,
        oi,
        Wr,
        hi,
        Wr,
        ni
    ],
    ei
];
var di = [
    0,
    jr,
    Nr
], pi = [
    0,
    Ir,
    -1,
    Nr,
    -3,
    Ir,
    Ur,
    jr,
    Dr,
    Ir,
    -1,
    Nr,
    Dr,
    Nr,
    -2,
    jr
], gi = [
    -1,
    {}
], mi = [
    0,
    Vr,
    1,
    gi
], yi = [
    0,
    Vr,
    Gr,
    gi
];
function vi(t, e) {
    e = Oe(e), t = t.s;
    let n = Jt(t);
    de(n), hn(t, n, 2, "" === e ? void 0 : e);
}
function _i(t, e) {
    Tn(t.s, 3, Me, e);
}
function wi(t, e) {
    Tn(t.s, 4, Me, e);
}
var Ti = class extends Vn {
    constructor(t){
        super(t, 500);
    }
    o(t) {
        return Fn(this, 0, 7, t);
    }
};
Ti.A = [
    3,
    4,
    5,
    6,
    8,
    13,
    17,
    1005
];
var Ei = [
    -500,
    jr,
    -1,
    Gr,
    -3,
    fi,
    Sr,
    ti,
    Dr,
    -1,
    mi,
    yi,
    Sr,
    di,
    jr,
    pi,
    Dr,
    Gr,
    987,
    Gr
], bi = [
    0,
    jr,
    -1,
    gi
], Ai = [
    -500,
    Vr,
    -1,
    [
        -1,
        {}
    ],
    998,
    Vr
], xi = [
    -500,
    Vr,
    Gr,
    -1,
    [
        -2,
        {},
        Br
    ],
    997,
    Gr,
    -1
], ki = [
    -500,
    Vr,
    Gr,
    gi,
    998,
    Gr
];
function Si(t, e) {
    In(t, Ti, e);
}
function Li(t, e) {
    Tn(t.s, 10, Me, e);
}
function Ri(t, e) {
    Tn(t.s, 15, Me, e);
}
var Fi = class extends Vn {
    constructor(t){
        super(t, 500);
    }
    o(t) {
        return Fn(this, 0, 1001, t);
    }
};
Fi.A = [
    1,
    6,
    7,
    9,
    10,
    15,
    16,
    17,
    14,
    1002
];
var Mi = [
    -500,
    Sr,
    Ei,
    4,
    Sr,
    Ai,
    Sr,
    xi,
    Dr,
    Sr,
    ki,
    Gr,
    Dr,
    mi,
    yi,
    Sr,
    bi,
    Gr,
    -2,
    pi,
    jr,
    -1,
    Nr,
    979,
    gi,
    Sr,
    ti
], Oi = Zr(Fi, Mi);
Fi.prototype.g = Qr(Mi);
var Ii = [
    0,
    Sr,
    [
        0,
        Pr,
        -2
    ]
], Ci = class extends Vn {
    constructor(t){
        super(t);
    }
}, Pi = [
    0,
    Pr,
    Rr,
    Vr,
    -1
], Ui = class extends Vn {
    constructor(t){
        super(t);
    }
    g() {
        return Rn(this, Ci, 1);
    }
};
Ui.A = [
    1
];
var Di = [
    0,
    Sr,
    Pi
], Bi = Zr(Ui, Di), Ni = [
    0,
    Pr,
    Rr
], Gi = [
    0,
    Pr,
    -1,
    Ii
], ji = class extends Vn {
    constructor(t){
        super(t);
    }
}, Vi = [
    0,
    Pr,
    -3
], Xi = [
    0,
    Rr,
    -3
], zi = class extends Vn {
    constructor(t){
        super(t);
    }
}, Wi = [
    0,
    Rr,
    -1,
    Vr,
    Rr
], Hi = class extends Vn {
    constructor(t){
        super(t);
    }
    h() {
        return Sn(this, ji, 2);
    }
    g() {
        return Rn(this, zi, 5);
    }
};
Hi.A = [
    5
];
var Yi = [
    0,
    Kr,
    Vi,
    Xi,
    Gi,
    Sr,
    Wi
], Ki = class extends Vn {
    constructor(t){
        super(t);
    }
};
Ki.A = [
    1,
    2,
    3,
    8,
    9
];
var $i = Zr(Ki, [
    0,
    Gr,
    Ur,
    Mr,
    Yi,
    Vr,
    -1,
    Or,
    Sr,
    Ni,
    Gr,
    Or
]), qi = class extends Vn {
    constructor(t){
        super(t);
    }
}, Ji = [
    0,
    Rr,
    -4
], Zi = class extends Vn {
    constructor(t){
        super(t);
    }
};
Zi.A = [
    1
];
var Qi = Zr(Zi, [
    0,
    Sr,
    Ji
]), ts = class extends Vn {
    constructor(t){
        super(t);
    }
}, es = [
    0,
    Rr,
    -4
], ns = class extends Vn {
    constructor(t){
        super(t);
    }
};
ns.A = [
    1
];
var rs = Zr(ns, [
    0,
    Sr,
    es
]), is = class extends Vn {
    constructor(t){
        super(t);
    }
};
is.A = [
    3
];
var ss = [
    0,
    Pr,
    -1,
    Mr,
    Kr
], os = class extends Vn {
    constructor(){
        super();
    }
};
os.prototype.g = Qr([
    0,
    Rr,
    -4,
    Or
]);
var as = class extends Vn {
    constructor(t){
        super(t);
    }
}, cs = [
    0,
    1,
    Pr,
    Vr,
    Di
], hs = class extends Vn {
    constructor(t){
        super(t);
    }
};
hs.A = [
    1
];
var us = Zr(hs, [
    0,
    Sr,
    cs,
    Or
]), ls = class extends Vn {
    constructor(t){
        super(t);
    }
};
ls.A = [
    1
];
var fs = class extends Vn {
    constructor(t){
        super(t);
    }
    ua() {
        const t = fn(this);
        return null == t ? U() : t;
    }
}, ds = class extends Vn {
    constructor(t){
        super(t);
    }
}, ps = [
    1,
    2
], gs = [
    0,
    ps,
    Wr,
    [
        0,
        Mr
    ],
    Wr,
    [
        0,
        Hr
    ],
    Pr,
    Vr
], ms = class extends Vn {
    constructor(t){
        super(t);
    }
};
ms.A = [
    1
];
var ys = Zr(ms, [
    0,
    Sr,
    gs,
    Or
]), vs = class extends Vn {
    constructor(t){
        super(t);
    }
};
vs.A = [
    4,
    5
];
var _s = [
    0,
    Vr,
    Pr,
    Rr,
    Gr,
    -1
], ws = class extends Vn {
    constructor(t){
        super(t);
    }
}, Ts = [
    0,
    Br,
    -1
], Es = class extends Vn {
    constructor(t){
        super(t);
    }
}, bs = [
    1,
    2,
    3,
    4,
    5
], As = class extends Vn {
    constructor(t){
        super(t);
    }
    g() {
        return null != fn(this);
    }
    h() {
        return null != Pn(this, 2);
    }
}, xs = [
    0,
    Hr,
    Vr,
    [
        0,
        Pr,
        Or,
        -1
    ],
    [
        0,
        Cr,
        Or
    ]
], ks = class extends Vn {
    constructor(t){
        super(t);
    }
    g() {
        return Te(on(this, 2)) ?? !1;
    }
}, Ss = [
    0,
    xs,
    Br,
    [
        0,
        bs,
        Wr,
        hi,
        Wr,
        si,
        Wr,
        ni,
        Wr,
        ci,
        Wr,
        oi
    ],
    Kr
], Ls = class extends Vn {
    constructor(t){
        super(t);
    }
}, Rs = [
    0,
    Ss,
    Rr,
    -1,
    Pr
], Fs = Jr(502141897, Ls);
li[502141897] = Rs;
var Ms = [
    0,
    xs
];
li[512499200] = Ms;
var Os = [
    0,
    Ms
];
li[515723506] = Os;
var Is = Zr(class extends Vn {
    constructor(t){
        super(t);
    }
}, [
    0,
    [
        0,
        Kr,
        -1,
        Fr,
        Yr
    ],
    ss
]), Cs = [
    0,
    Ss
];
li[508981768] = Cs;
var Ps = class extends Vn {
    constructor(t){
        super(t);
    }
}, Us = [
    0,
    Ss,
    Rr,
    Cs,
    Br
], Ds = class extends Vn {
    constructor(t){
        super(t);
    }
}, Bs = [
    0,
    Ss,
    Rs,
    Us,
    Rr,
    Os
];
li[508968149] = Us;
var Ns = Jr(508968150, Ds);
li[508968150] = Bs;
var Gs = class extends Vn {
    constructor(t){
        super(t);
    }
}, js = Jr(513916220, Gs);
li[513916220] = [
    0,
    Ss,
    Bs,
    Pr
];
var Vs = class extends Vn {
    constructor(t){
        super(t);
    }
    h() {
        return Sn(this, vs, 2);
    }
    g() {
        cn(this, 2);
    }
}, Xs = [
    0,
    Ss,
    _s
];
li[478825465] = Xs;
var zs = [
    0,
    Ss
];
li[478825422] = zs;
var Ws = class extends Vn {
    constructor(t){
        super(t);
    }
}, Hs = [
    0,
    Ss,
    zs,
    Xs,
    -1
], Ys = class extends Vn {
    constructor(t){
        super(t);
    }
}, Ks = [
    0,
    Ss,
    Rr,
    Pr
], $s = class extends Vn {
    constructor(t){
        super(t);
    }
}, qs = [
    0,
    Ss,
    Rr
], Js = class extends Vn {
    constructor(t){
        super(t);
    }
}, Zs = [
    0,
    Ss,
    Ks,
    qs,
    Rr
], Qs = class extends Vn {
    constructor(t){
        super(t);
    }
}, to = [
    0,
    Ss,
    Zs,
    Hs
];
li[463370452] = Hs, li[464864288] = Ks, li[474472470] = qs;
var eo = Jr(462713202, Js);
li[462713202] = Zs;
var no = Jr(479097054, Qs);
li[479097054] = to;
var ro = class extends Vn {
    constructor(t){
        super(t);
    }
}, io = Jr(456383383, ro);
li[456383383] = [
    0,
    Ss,
    _s
];
var so = class extends Vn {
    constructor(t){
        super(t);
    }
}, oo = Jr(476348187, so);
li[476348187] = [
    0,
    Ss,
    Ts
];
var ao = class extends Vn {
    constructor(t){
        super(t);
    }
}, co = [
    0,
    Kr,
    -1
], ho = class extends Vn {
    constructor(t){
        super(t);
    }
};
ho.A = [
    3
];
var uo = Jr(458105876, class extends Vn {
    constructor(t){
        super(t);
    }
    g() {
        var t = this.s;
        const e = Jt(t);
        var n = 2 & e;
        return t = function(t, e, n) {
            var r = ho;
            const i = 2 & e;
            let s = !1;
            if (null == n) {
                if (i) return vn();
                n = [];
            } else if (n.constructor === Ye) {
                if (0 == (2 & n.O) || i) return n;
                n = n.X();
            } else Array.isArray(n) ? s = !!(2 & qt(n)) : n = [];
            if (i) {
                if (!n.length) return vn();
                s || (s = !0, te(n));
            } else s && (s = !1, n = _n(n));
            return s || (64 & qt(n) ? Kt(n, 32) : 32 & e && Ht(n, 32)), hn(t, e, 2, r = new Ye(n, r, Pe, void 0), !1), r;
        }(t, e, an(t, e, 2)), null == t || !n && ho && (t.xa = !0), n = t;
    }
});
li[458105876] = [
    0,
    co,
    _r,
    [
        !0,
        Or,
        [
            0,
            Vr,
            -1,
            Gr
        ]
    ]
];
var lo = class extends Vn {
    constructor(t){
        super(t);
    }
}, fo = Jr(458105758, lo);
li[458105758] = [
    0,
    Ss,
    Vr,
    co
];
var po = class extends Vn {
    constructor(t){
        super(t);
    }
};
po.A = [
    5,
    6
];
var go = Jr(443442058, po);
li[443442058] = [
    0,
    Ss,
    Vr,
    Pr,
    Rr,
    Gr,
    -1
];
var mo = class extends Vn {
    constructor(t){
        super(t);
    }
}, yo = [
    0,
    Ss,
    Rr,
    -1,
    Pr
];
li[514774813] = yo;
var vo = class extends Vn {
    constructor(t){
        super(t);
    }
}, _o = [
    0,
    Ss,
    Rr,
    Br
], wo = class extends Vn {
    constructor(t){
        super(t);
    }
}, To = [
    0,
    Ss,
    yo,
    _o,
    Rr
];
li[518928384] = _o;
var Eo = Jr(516587230, wo);
function bo(t, e) {
    return e = e ? e.clone() : new vs, void 0 !== t.displayNamesLocale ? cn(e, 1, Oe(t.displayNamesLocale)) : void 0 === t.displayNamesLocale && cn(e, 1), void 0 !== t.maxResults ? Nn(e, 2, t.maxResults) : "maxResults" in t && cn(e, 2), void 0 !== t.scoreThreshold ? Gn(e, 3, t.scoreThreshold) : "scoreThreshold" in t && cn(e, 3), void 0 !== t.categoryAllowlist ? wn(e, 4, t.categoryAllowlist) : "categoryAllowlist" in t && cn(e, 4), void 0 !== t.categoryDenylist ? wn(e, 5, t.categoryDenylist) : "categoryDenylist" in t && cn(e, 5), e;
}
function Ao(t, e = -1, n = "") {
    return {
        categories: t.map((t)=>({
                index: Un(Cn(t, 1)) ?? -1,
                score: Dn(t, 2) ?? 0,
                categoryName: Pn(t, 3) ?? "" ?? "",
                displayName: Pn(t, 4) ?? "" ?? ""
            })),
        headIndex: e,
        headName: n
    };
}
function xo(t) {
    var e = dn(t, 3, we), n = dn(t, 2, Ae), r = dn(t, 1, Ie), i = dn(t, 9, Ie);
    const s = {
        categories: [],
        keypoints: []
    };
    for(let t = 0; t < e.length; t++)s.categories.push({
        score: e[t],
        index: n[t] ?? -1,
        categoryName: r[t] ?? "",
        displayName: i[t] ?? ""
    });
    if ((e = Sn(t, Hi, 4)?.h()) && (s.boundingBox = {
        originX: Cn(e, 1) ?? 0,
        originY: Cn(e, 2) ?? 0,
        width: Cn(e, 3) ?? 0,
        height: Cn(e, 4) ?? 0,
        angle: 0
    }), Sn(t, Hi, 4)?.g().length) for (const e of Sn(t, Hi, 4).g())s.keypoints.push({
        x: ln(e, 1) ?? 0,
        y: ln(e, 2) ?? 0,
        score: ln(e, 4) ?? 0,
        label: Pn(e, 3) ?? ""
    });
    return s;
}
function ko(t) {
    const e = [];
    for (const n of Rn(t, ts, 1))e.push({
        x: Dn(n, 1) ?? 0,
        y: Dn(n, 2) ?? 0,
        z: Dn(n, 3) ?? 0
    });
    return e;
}
function So(t) {
    const e = [];
    for (const n of Rn(t, qi, 1))e.push({
        x: Dn(n, 1) ?? 0,
        y: Dn(n, 2) ?? 0,
        z: Dn(n, 3) ?? 0
    });
    return e;
}
function Lo(t) {
    return Array.from(t, (t)=>127 < t ? t - 256 : t);
}
function Ro(t, e) {
    if (t.length !== e.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);
    let n = 0, r = 0, i = 0;
    for(let s = 0; s < t.length; s++)n += t[s] * e[s], r += t[s] * t[s], i += e[s] * e[s];
    if (0 >= r || 0 >= i) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
    return n / Math.sqrt(r * i);
}
let Fo;
li[516587230] = To;
const Mo = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    5,
    1,
    96,
    0,
    1,
    123,
    3,
    2,
    1,
    0,
    10,
    10,
    1,
    8,
    0,
    65,
    0,
    253,
    15,
    253,
    98,
    11
]);
async function Oo() {
    if (void 0 === Fo) try {
        await WebAssembly.instantiate(Mo), Fo = !0;
    } catch  {
        Fo = !1;
    }
    return Fo;
}
async function Io(t, e = "") {
    const n = await Oo() ? "wasm_internal" : "wasm_nosimd_internal";
    return {
        wasmLoaderPath: `${e}/${t}_${n}.js`,
        wasmBinaryPath: `${e}/${t}_${n}.wasm`
    };
}
var Co = class {
};
function Po() {
    const t = navigator.userAgent;
    return t.includes("Safari") && !t.includes("Chrome");
}
async function Uo(t) {
    if ("function" != typeof importScripts) {
        const e = document.createElement("script");
        return e.src = t.toString(), e.crossOrigin = "anonymous", new Promise((t, n)=>{
            e.addEventListener("load", ()=>{
                t();
            }, !1), e.addEventListener("error", (t)=>{
                n(t);
            }, !1), document.body.appendChild(e);
        });
    }
    importScripts(t.toString());
}
function Do(t, e, n) {
    t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n(e = t.i.stringToNewUTF8(e)), t.i._free(e);
}
function Bo(t, e, n) {
    if (!t.i.canvas) throw Error("No OpenGL canvas configured.");
    if (n ? t.i._bindTextureToStream(n) : t.i._bindTextureToCanvas(), !(n = t.i.canvas.getContext("webgl2") || t.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
    return t.i.gpuOriginForWebTexturesIsBottomLeft && n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e), t.i.gpuOriginForWebTexturesIsBottomLeft && n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1), e.videoWidth ? (n = e.videoWidth, e = e.videoHeight) : e.naturalWidth ? (n = e.naturalWidth, e = e.naturalHeight) : (n = e.width, e = e.height), !t.l || n === t.i.canvas.width && e === t.i.canvas.height || (t.i.canvas.width = n, t.i.canvas.height = e), [
        n,
        e
    ];
}
function No(t, e, n) {
    t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
    const r = new Uint32Array(e.length);
    for(let n = 0; n < e.length; n++)r[n] = t.i.stringToNewUTF8(e[n]);
    e = t.i._malloc(4 * r.length), t.i.HEAPU32.set(r, e >> 2), n(e);
    for (const e of r)t.i._free(e);
    t.i._free(e);
}
function Go(t, e, n) {
    t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[e] = n;
}
function jo(t, e, n) {
    let r = [];
    t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[e] = (t, e, i)=>{
        e ? (n(r, i), r = []) : r.push(t);
    };
}
Co.forVisionTasks = function(t) {
    return Io("vision", t);
}, Co.forTextTasks = function(t) {
    return Io("text", t);
}, Co.forAudioTasks = function(t) {
    return Io("audio", t);
}, Co.isSimdSupported = function() {
    return Oo();
};
async function Vo(t, e, n, r) {
    return t = await (async (t, e, n, r, i)=>{
        if (e && await Uo(e), !self.ModuleFactory) throw Error("ModuleFactory not set.");
        if (n && (await Uo(n), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
        return self.Module && i && ((e = self.Module).locateFile = i.locateFile, i.mainScriptUrlOrBlob && (e.mainScriptUrlOrBlob = i.mainScriptUrlOrBlob)), i = await self.ModuleFactory(self.Module || i), self.ModuleFactory = self.Module = void 0, new t(i, r);
    })(t, n.wasmLoaderPath, n.assetLoaderPath, e, {
        locateFile: (t)=>t.endsWith(".wasm") ? n.wasmBinaryPath.toString() : n.assetBinaryPath && t.endsWith(".data") ? n.assetBinaryPath.toString() : t
    }), await t.o(r), t;
}
function Xo(t, e) {
    const n = Sn(t.baseOptions, As, 1) || new As;
    "string" == typeof e ? (cn(n, 2, Oe(e)), cn(n, 1)) : e instanceof Uint8Array && (cn(n, 1, he(e, !1, !1)), cn(n, 2)), Fn(t.baseOptions, 0, 1, n);
}
function zo(t) {
    try {
        const e = t.F.length;
        if (1 === e) throw Error(t.F[0].message);
        if (1 < e) throw Error("Encountered multiple errors: " + t.F.map((t)=>t.message).join(", "));
    } finally{
        t.F = [];
    }
}
function Wo(t, e) {
    t.I = Math.max(t.I, e);
}
function Ho(t, e) {
    t.C = new Ti, vi(t.C, "PassThroughCalculator"), _i(t.C, "free_memory"), wi(t.C, "free_memory_unused_out"), Li(e, "free_memory"), Si(e, t.C);
}
function Yo(t, e) {
    _i(t.C, e), wi(t.C, e + "_unused_out");
}
function Ko(t) {
    t.g.addBoolToStream(!0, "free_memory", t.I);
}
var $o = class {
    constructor(t){
        this.g = t, this.F = [], this.I = 0, this.g.setAutoRenderToScreen(!1);
    }
    l(t, e = !0) {
        if (e) {
            const e = t.baseOptions || {};
            if (t.baseOptions?.modelAssetBuffer && t.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
            if (!(Sn(this.baseOptions, As, 1)?.g() || Sn(this.baseOptions, As, 1)?.h() || t.baseOptions?.modelAssetBuffer || t.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
            if (function(t, e) {
                let n = Sn(t.baseOptions, Es, 3);
                if (!n) {
                    var r = n = new Es, i = new ai;
                    Mn(r, 4, bs, i);
                }
                "delegate" in e && ("GPU" === e.delegate ? (e = n, r = new ii, Mn(e, 2, bs, r)) : (e = n, r = new ai, Mn(e, 4, bs, r))), Fn(t.baseOptions, 0, 3, n);
            }(this, e), e.modelAssetPath) return fetch(e.modelAssetPath.toString()).then((t)=>{
                if (t.ok) return t.arrayBuffer();
                throw Error(`Failed to fetch model: ${e.modelAssetPath} (${t.status})`);
            }).then((t)=>{
                try {
                    this.g.i.FS_unlink("/model.dat");
                } catch  {}
                this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t), !0, !1, !1), Xo(this, "/model.dat"), this.m(), this.N();
            });
            Xo(this, e.modelAssetBuffer);
        }
        return this.m(), this.N(), Promise.resolve();
    }
    N() {}
    da() {
        let t;
        if (this.g.da((e)=>{
            t = Oi(e);
        }), !t) throw Error("Failed to retrieve CalculatorGraphConfig");
        return t;
    }
    setGraph(t, e) {
        this.g.attachErrorListener((t, e)=>{
            this.F.push(Error(e));
        }), this.g.Ra(), this.g.setGraph(t, e), this.C = void 0, zo(this);
    }
    finishProcessing() {
        this.g.finishProcessing(), zo(this);
    }
    close() {
        this.C = void 0, this.g.closeGraph();
    }
};
function qo(t, e) {
    if (null === t) throw Error(`Unable to obtain required WebGL resource: ${e}`);
    return t;
}
$o.prototype.close = $o.prototype.close;
class Jo {
    constructor(t, e, n, r){
        this.g = t, this.h = e, this.m = n, this.l = r;
    }
    bind() {
        this.g.bindVertexArray(this.h);
    }
    close() {
        this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
    }
}
function Zo(t, e, n) {
    const r = t.g;
    if (n = qo(r.createShader(n), "Failed to create WebGL shader"), r.shaderSource(n, e), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);
    return r.attachShader(t.h, n), n;
}
function Qo(t, e) {
    const n = t.g, r = qo(n.createVertexArray(), "Failed to create vertex array");
    n.bindVertexArray(r);
    const i = qo(n.createBuffer(), "Failed to create buffer");
    n.bindBuffer(n.ARRAY_BUFFER, i), n.enableVertexAttribArray(t.N), n.vertexAttribPointer(t.N, 2, n.FLOAT, !1, 0, 0), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        -1,
        1,
        1,
        1,
        1,
        -1
    ]), n.STATIC_DRAW);
    const s = qo(n.createBuffer(), "Failed to create buffer");
    return n.bindBuffer(n.ARRAY_BUFFER, s), n.enableVertexAttribArray(t.M), n.vertexAttribPointer(t.M, 2, n.FLOAT, !1, 0, 0), n.bufferData(n.ARRAY_BUFFER, new Float32Array(e ? [
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1
    ] : [
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        0
    ]), n.STATIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, null), n.bindVertexArray(null), new Jo(n, r, i, s);
}
function ta(t, e) {
    if (t.g) {
        if (e !== t.g) throw Error("Cannot change GL context once initialized");
    } else t.g = e;
}
function ea(t, e, n, r) {
    return ta(t, e), t.h || (t.m(), t.F()), n ? (t.u || (t.u = Qo(t, !0)), n = t.u) : (t.v || (t.v = Qo(t, !1)), n = t.v), e.useProgram(t.h), n.bind(), t.l(), t = r(), n.g.bindVertexArray(null), t;
}
function na(t, e, n) {
    return ta(t, e), t = qo(e.createTexture(), "Failed to create texture"), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n ?? e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n ?? e.LINEAR), e.bindTexture(e.TEXTURE_2D, null), t;
}
function ra(t, e, n) {
    ta(t, e), t.C || (t.C = qo(e.createFramebuffer(), "Failed to create framebuffe.")), e.bindFramebuffer(e.FRAMEBUFFER, t.C), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0);
}
function ia(t) {
    t.g?.bindFramebuffer(t.g.FRAMEBUFFER, null);
}
var sa = class {
    I() {
        return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
    }
    m() {
        const t = this.g;
        if (this.h = qo(t.createProgram(), "Failed to create WebGL program"), this.ta = Zo(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t.VERTEX_SHADER), this.sa = Zo(this, this.I(), t.FRAGMENT_SHADER), t.linkProgram(this.h), !t.getProgramParameter(this.h, t.LINK_STATUS)) throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);
        this.N = t.getAttribLocation(this.h, "aVertex"), this.M = t.getAttribLocation(this.h, "aTex");
    }
    F() {}
    l() {}
    close() {
        if (this.h) {
            const t = this.g;
            t.deleteProgram(this.h), t.deleteShader(this.ta), t.deleteShader(this.sa);
        }
        this.C && this.g.deleteFramebuffer(this.C), this.v && this.v.close(), this.u && this.u.close();
    }
};
var oa = class extends sa {
    I() {
        return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
    }
    F() {
        const t = this.g;
        t.activeTexture(t.TEXTURE1), this.B = na(this, t, t.LINEAR), t.activeTexture(t.TEXTURE2), this.j = na(this, t, t.NEAREST);
    }
    m() {
        super.m();
        const t = this.g;
        this.U = qo(t.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.ra = qo(t.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.T = qo(t.getUniformLocation(this.h, "maskTexture"), "Uniform location");
    }
    l() {
        super.l();
        const t = this.g;
        t.uniform1i(this.T, 0), t.uniform1i(this.U, 1), t.uniform1i(this.ra, 2);
    }
    close() {
        this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
    }
}, aa = class extends sa {
    I() {
        return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
    }
    F() {
        const t = this.g;
        t.activeTexture(t.TEXTURE1), this.j = na(this, t), t.activeTexture(t.TEXTURE2), this.B = na(this, t);
    }
    m() {
        super.m();
        const t = this.g;
        this.T = qo(t.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.U = qo(t.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.J = qo(t.getUniformLocation(this.h, "maskTexture"), "Uniform location");
    }
    l() {
        super.l();
        const t = this.g;
        t.uniform1i(this.J, 0), t.uniform1i(this.T, 1), t.uniform1i(this.U, 2);
    }
    close() {
        this.j && this.g.deleteTexture(this.j), this.B && this.g.deleteTexture(this.B), super.close();
    }
};
function ca(t, e) {
    switch(e){
        case 0:
            return t.g.find((t)=>t instanceof Uint8Array);
        case 1:
            return t.g.find((t)=>t instanceof Float32Array);
        case 2:
            return t.g.find((t)=>"undefined" != typeof WebGLTexture && t instanceof WebGLTexture);
        default:
            throw Error(`Type is not supported: ${e}`);
    }
}
function ha(t) {
    var e = ca(t, 1);
    if (!e) {
        if (e = ca(t, 0)) e = new Float32Array(e).map((t)=>t / 255);
        else {
            e = new Float32Array(t.width * t.height);
            const r = la(t);
            var n = da(t);
            if (ra(n, r, ua(t)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
                n = new Float32Array(t.width * t.height * 4), r.readPixels(0, 0, t.width, t.height, r.RGBA, r.FLOAT, n);
                for(let t = 0, r = 0; t < e.length; ++t, r += 4)e[t] = n[r];
            } else r.readPixels(0, 0, t.width, t.height, r.RED, r.FLOAT, e);
        }
        t.g.push(e);
    }
    return e;
}
function ua(t) {
    let e = ca(t, 2);
    if (!e) {
        const n = la(t);
        e = pa(t);
        const r = ha(t), i = fa(t);
        n.texImage2D(n.TEXTURE_2D, 0, i, t.width, t.height, 0, n.RED, n.FLOAT, r), ga(t);
    }
    return e;
}
function la(t) {
    if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
    return t.h || (t.h = qo(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function fa(t) {
    if (t = la(t), !ma) {
        if (t.getExtension("EXT_color_buffer_float") && t.getExtension("OES_texture_float_linear") && t.getExtension("EXT_float_blend")) ma = t.R32F;
        else {
            if (!t.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
            ma = t.R16F;
        }
    }
    return ma;
}
function da(t) {
    return t.l || (t.l = new sa), t.l;
}
function pa(t) {
    const e = la(t);
    e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
    let n = ca(t, 2);
    return n || (n = na(da(t), e, t.m ? e.LINEAR : e.NEAREST), t.g.push(n), t.j = !0), e.bindTexture(e.TEXTURE_2D, n), n;
}
function ga(t) {
    t.h.bindTexture(t.h.TEXTURE_2D, null);
}
var ma, ya = class {
    constructor(t, e, n, r, i, s, o){
        this.g = t, this.m = e, this.j = n, this.canvas = r, this.l = i, this.width = s, this.height = o, this.j && 0 === --va && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
    }
    La() {
        return !!ca(this, 0);
    }
    ka() {
        return !!ca(this, 1);
    }
    P() {
        return !!ca(this, 2);
    }
    ja() {
        var t, e;
        return (e = ca(t = this, 0)) || (e = ha(t), e = new Uint8Array(e.map((t)=>255 * t)), t.g.push(e)), e;
    }
    ia() {
        return ha(this);
    }
    K() {
        return ua(this);
    }
    clone() {
        const t = [];
        for (const e of this.g){
            let n;
            if (e instanceof Uint8Array) n = new Uint8Array(e);
            else if (e instanceof Float32Array) n = new Float32Array(e);
            else {
                if (!(e instanceof WebGLTexture)) throw Error(`Type is not supported: ${e}`);
                {
                    const t = la(this), e = da(this);
                    t.activeTexture(t.TEXTURE1), n = na(e, t, this.m ? t.LINEAR : t.NEAREST), t.bindTexture(t.TEXTURE_2D, n);
                    const r = fa(this);
                    t.texImage2D(t.TEXTURE_2D, 0, r, this.width, this.height, 0, t.RED, t.FLOAT, null), t.bindTexture(t.TEXTURE_2D, null), ra(e, t, n), ea(e, t, !1, ()=>{
                        pa(this), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), ga(this);
                    }), ia(e), ga(this);
                }
            }
            t.push(n);
        }
        return new ya(t, this.m, this.P(), this.canvas, this.l, this.width, this.height);
    }
    close() {
        this.j && la(this).deleteTexture(ca(this, 2)), va = -1;
    }
};
ya.prototype.close = ya.prototype.close, ya.prototype.clone = ya.prototype.clone, ya.prototype.getAsWebGLTexture = ya.prototype.K, ya.prototype.getAsFloat32Array = ya.prototype.ia, ya.prototype.getAsUint8Array = ya.prototype.ja, ya.prototype.hasWebGLTexture = ya.prototype.P, ya.prototype.hasFloat32Array = ya.prototype.ka, ya.prototype.hasUint8Array = ya.prototype.La;
var va = 250;
const _a = {
    color: "white",
    lineWidth: 4,
    radius: 6
};
function wa(t) {
    return {
        ..._a,
        fillColor: (t = t || {}).color,
        ...t
    };
}
function Ta(t, e) {
    return t instanceof Function ? t(e) : t;
}
function Ea(t, e, n) {
    return Math.max(Math.min(e, n), Math.min(Math.max(e, n), t));
}
function ba(t) {
    if (!t.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
    return t.l;
}
function Aa(t) {
    if (!t.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
    return t.j;
}
function xa(t, e, n) {
    if (e.P()) n(e.K());
    else {
        const r = e.ka() ? e.ia() : e.ja();
        t.m = t.m ?? new sa;
        const i = Aa(t);
        n((t = new ya([
            r
        ], e.m, !1, i.canvas, t.m, e.width, e.height)).K()), t.close();
    }
}
function ka(t, e, n, r) {
    const i = function(t) {
        return t.g || (t.g = new oa), t.g;
    }(t), s = Aa(t), o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
    ea(i, s, !0, ()=>{
        !function(t, e, n, r) {
            const i = t.g;
            if (i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, e), i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, t.B), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n), t.J && function(t, e) {
                if (t !== e) return !1;
                t = t.entries(), e = e.entries();
                for (const [r, i] of t){
                    t = r;
                    const s = i;
                    var n = e.next();
                    if (n.done) return !1;
                    const [o, a] = n.value;
                    if (n = a, t !== o || s[0] !== n[0] || s[1] !== n[1] || s[2] !== n[2] || s[3] !== n[3]) return !1;
                }
                return !!e.next().done;
            }(t.J, r)) i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j);
            else {
                t.J = r;
                const e = Array(1024).fill(0);
                r.forEach((t, n)=>{
                    if (4 !== t.length) throw Error(`Color at index ${n} is not a four-channel value.`);
                    e[4 * n] = t[0], e[4 * n + 1] = t[1], e[4 * n + 2] = t[2], e[4 * n + 3] = t[3];
                }), i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 256, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array(e));
            }
        }(i, e, o, r), s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT), s.drawArrays(s.TRIANGLE_FAN, 0, 4);
        const t = i.g;
        t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, null);
    });
}
function Sa(t, e, n, r) {
    const i = Aa(t), s = function(t) {
        return t.h || (t.h = new aa), t.h;
    }(t), o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n, a = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
    ea(s, i, !0, ()=>{
        var t = s.g;
        t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, s.j), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, o), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, s.B), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, a), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.drawArrays(i.TRIANGLE_FAN, 0, 4), i.bindTexture(i.TEXTURE_2D, null), (t = s.g).activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, null);
    });
}
var La = class {
    constructor(t, e){
        t instanceof CanvasRenderingContext2D || t instanceof OffscreenCanvasRenderingContext2D ? (this.l = t, this.j = e) : this.j = t;
    }
    Ea(t, e) {
        if (t) {
            var n = ba(this);
            e = wa(e), n.save();
            var r = n.canvas, i = 0;
            for (const s of t)n.fillStyle = Ta(e.fillColor, {
                index: i,
                from: s
            }), n.strokeStyle = Ta(e.color, {
                index: i,
                from: s
            }), n.lineWidth = Ta(e.lineWidth, {
                index: i,
                from: s
            }), (t = new Path2D).arc(s.x * r.width, s.y * r.height, Ta(e.radius, {
                index: i,
                from: s
            }), 0, 2 * Math.PI), n.fill(t), n.stroke(t), ++i;
            n.restore();
        }
    }
    Da(t, e, n) {
        if (t && e) {
            var r = ba(this);
            n = wa(n), r.save();
            var i = r.canvas, s = 0;
            for (const o of e){
                r.beginPath(), e = t[o.start];
                const a = t[o.end];
                e && a && (r.strokeStyle = Ta(n.color, {
                    index: s,
                    from: e,
                    to: a
                }), r.lineWidth = Ta(n.lineWidth, {
                    index: s,
                    from: e,
                    to: a
                }), r.moveTo(e.x * i.width, e.y * i.height), r.lineTo(a.x * i.width, a.y * i.height)), ++s, r.stroke();
            }
            r.restore();
        }
    }
    Aa(t, e) {
        const n = ba(this);
        e = wa(e), n.save(), n.beginPath(), n.lineWidth = Ta(e.lineWidth, {}), n.strokeStyle = Ta(e.color, {}), n.fillStyle = Ta(e.fillColor, {}), n.moveTo(t.originX, t.originY), n.lineTo(t.originX + t.width, t.originY), n.lineTo(t.originX + t.width, t.originY + t.height), n.lineTo(t.originX, t.originY + t.height), n.lineTo(t.originX, t.originY), n.stroke(), n.fill(), n.restore();
    }
    Ba(t, e, n = [
        0,
        0,
        0,
        255
    ]) {
        this.l ? function(t, e, n, r) {
            const i = Aa(t);
            xa(t, e, (e)=>{
                ka(t, e, n, r), (e = ba(t)).drawImage(i.canvas, 0, 0, e.canvas.width, e.canvas.height);
            });
        }(this, t, n, e) : ka(this, t.K(), n, e);
    }
    Ca(t, e, n) {
        this.l ? function(t, e, n, r) {
            const i = Aa(t);
            xa(t, e, (e)=>{
                Sa(t, e, n, r), (e = ba(t)).drawImage(i.canvas, 0, 0, e.canvas.width, e.canvas.height);
            });
        }(this, t, e, n) : Sa(this, t.K(), e, n);
    }
    close() {
        this.g?.close(), this.g = void 0, this.h?.close(), this.h = void 0, this.m?.close(), this.m = void 0;
    }
};
function Ra(t, e) {
    switch(e){
        case 0:
            return t.g.find((t)=>t instanceof ImageData);
        case 1:
            return t.g.find((t)=>"undefined" != typeof ImageBitmap && t instanceof ImageBitmap);
        case 2:
            return t.g.find((t)=>"undefined" != typeof WebGLTexture && t instanceof WebGLTexture);
        default:
            throw Error(`Type is not supported: ${e}`);
    }
}
function Fa(t) {
    var e = Ra(t, 0);
    if (!e) {
        e = Oa(t);
        const n = Ia(t), r = new Uint8Array(t.width * t.height * 4);
        ra(n, e, Ma(t)), e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, r), ia(n), e = new ImageData(new Uint8ClampedArray(r.buffer), t.width, t.height), t.g.push(e);
    }
    return e;
}
function Ma(t) {
    let e = Ra(t, 2);
    if (!e) {
        const n = Oa(t);
        e = Ca(t);
        const r = Ra(t, 1) || Fa(t);
        n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r), Pa(t);
    }
    return e;
}
function Oa(t) {
    if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
    return t.h || (t.h = qo(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function Ia(t) {
    return t.l || (t.l = new sa), t.l;
}
function Ca(t) {
    const e = Oa(t);
    e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
    let n = Ra(t, 2);
    return n || (n = na(Ia(t), e), t.g.push(n), t.m = !0), e.bindTexture(e.TEXTURE_2D, n), n;
}
function Pa(t) {
    t.h.bindTexture(t.h.TEXTURE_2D, null);
}
function Ua(t) {
    const e = Oa(t);
    return ea(Ia(t), e, !0, ()=>(function(t, e) {
            const n = t.canvas;
            if (n.width === t.width && n.height === t.height) return e();
            const r = n.width, i = n.height;
            return n.width = t.width, n.height = t.height, t = e(), n.width = r, n.height = i, t;
        })(t, ()=>{
            if (e.bindFramebuffer(e.FRAMEBUFFER, null), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.drawArrays(e.TRIANGLE_FAN, 0, 4), !(t.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
            return t.canvas.transferToImageBitmap();
        }));
}
La.prototype.close = La.prototype.close, La.prototype.drawConfidenceMask = La.prototype.Ca, La.prototype.drawCategoryMask = La.prototype.Ba, La.prototype.drawBoundingBox = La.prototype.Aa, La.prototype.drawConnectors = La.prototype.Da, La.prototype.drawLandmarks = La.prototype.Ea, La.lerp = function(t, e, n, r, i) {
    return Ea(r * (1 - (t - e) / (n - e)) + i * (1 - (n - t) / (n - e)), r, i);
}, La.clamp = Ea;
var Da = class {
    constructor(t, e, n, r, i, s, o){
        this.g = t, this.j = e, this.m = n, this.canvas = r, this.l = i, this.width = s, this.height = o, (this.j || this.m) && 0 === --Ba && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
    }
    Ka() {
        return !!Ra(this, 0);
    }
    la() {
        return !!Ra(this, 1);
    }
    P() {
        return !!Ra(this, 2);
    }
    Ia() {
        return Fa(this);
    }
    Ha() {
        var t = Ra(this, 1);
        return t || (Ma(this), Ca(this), t = Ua(this), Pa(this), this.g.push(t), this.j = !0), t;
    }
    K() {
        return Ma(this);
    }
    clone() {
        const t = [];
        for (const e of this.g){
            let n;
            if (e instanceof ImageData) n = new ImageData(e.data, this.width, this.height);
            else if (e instanceof WebGLTexture) {
                const t = Oa(this), e = Ia(this);
                t.activeTexture(t.TEXTURE1), n = na(e, t), t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.bindTexture(t.TEXTURE_2D, null), ra(e, t, n), ea(e, t, !1, ()=>{
                    Ca(this), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), Pa(this);
                }), ia(e), Pa(this);
            } else {
                if (!(e instanceof ImageBitmap)) throw Error(`Type is not supported: ${e}`);
                Ma(this), Ca(this), n = Ua(this), Pa(this);
            }
            t.push(n);
        }
        return new Da(t, this.la(), this.P(), this.canvas, this.l, this.width, this.height);
    }
    close() {
        this.j && Ra(this, 1).close(), this.m && Oa(this).deleteTexture(Ra(this, 2)), Ba = -1;
    }
};
Da.prototype.close = Da.prototype.close, Da.prototype.clone = Da.prototype.clone, Da.prototype.getAsWebGLTexture = Da.prototype.K, Da.prototype.getAsImageBitmap = Da.prototype.Ha, Da.prototype.getAsImageData = Da.prototype.Ia, Da.prototype.hasWebGLTexture = Da.prototype.P, Da.prototype.hasImageBitmap = Da.prototype.la, Da.prototype.hasImageData = Da.prototype.Ka;
var Ba = 250;
function Na(...t) {
    return t.map(([t, e])=>({
            start: t,
            end: e
        }));
}
const Ga = function(t) {
    return class extends t {
        Ra() {
            this.i._registerModelResourcesGraphService();
        }
    };
}((ja = class {
    constructor(t, e){
        this.l = !0, this.i = t, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e ? this.i.canvas = e : "undefined" == typeof OffscreenCanvas || Po() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
    }
    async initializeGraph(t) {
        const e = await (await fetch(t)).arrayBuffer();
        t = !(t.endsWith(".pbtxt") || t.endsWith(".textproto")), this.setGraph(new Uint8Array(e), t);
    }
    setGraphFromString(t) {
        this.setGraph((new TextEncoder).encode(t), !1);
    }
    setGraph(t, e) {
        const n = t.length, r = this.i._malloc(n);
        this.i.HEAPU8.set(t, r), e ? this.i._changeBinaryGraph(n, r) : this.i._changeTextGraph(n, r), this.i._free(r);
    }
    configureAudio(t, e, n, r, i) {
        this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Do(this, r || "input_audio", (r)=>{
            Do(this, i = i || "audio_header", (i)=>{
                this.i._configureAudio(r, i, t, e, n);
            });
        });
    }
    setAutoResizeCanvas(t) {
        this.l = t;
    }
    setAutoRenderToScreen(t) {
        this.i._setAutoRenderToScreen(t);
    }
    setGpuBufferVerticalFlip(t) {
        this.i.gpuOriginForWebTexturesIsBottomLeft = t;
    }
    da(t) {
        Go(this, "__graph_config__", (e)=>{
            t(e);
        }), Do(this, "__graph_config__", (t)=>{
            this.i._getGraphConfig(t, void 0);
        }), delete this.i.simpleListeners.__graph_config__;
    }
    attachErrorListener(t) {
        this.i.errorListener = t;
    }
    attachEmptyPacketListener(t, e) {
        this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t] = e;
    }
    addAudioToStream(t, e, n) {
        this.addAudioToStreamWithShape(t, 0, 0, e, n);
    }
    addAudioToStreamWithShape(t, e, n, r, i) {
        const s = 4 * t.length;
        this.h !== s && (this.g && this.i._free(this.g), this.g = this.i._malloc(s), this.h = s), this.i.HEAPF32.set(t, this.g / 4), Do(this, r, (t)=>{
            this.i._addAudioToInputStream(this.g, e, n, t, i);
        });
    }
    addGpuBufferToStream(t, e, n) {
        Do(this, e, (e)=>{
            const [r, i] = Bo(this, t, e);
            this.i._addBoundTextureToStream(e, r, i, n);
        });
    }
    addBoolToStream(t, e, n) {
        Do(this, e, (e)=>{
            this.i._addBoolToInputStream(t, e, n);
        });
    }
    addDoubleToStream(t, e, n) {
        Do(this, e, (e)=>{
            this.i._addDoubleToInputStream(t, e, n);
        });
    }
    addFloatToStream(t, e, n) {
        Do(this, e, (e)=>{
            this.i._addFloatToInputStream(t, e, n);
        });
    }
    addIntToStream(t, e, n) {
        Do(this, e, (e)=>{
            this.i._addIntToInputStream(t, e, n);
        });
    }
    addStringToStream(t, e, n) {
        Do(this, e, (e)=>{
            Do(this, t, (t)=>{
                this.i._addStringToInputStream(t, e, n);
            });
        });
    }
    addStringRecordToStream(t, e, n) {
        Do(this, e, (e)=>{
            No(this, Object.keys(t), (r)=>{
                No(this, Object.values(t), (i)=>{
                    this.i._addFlatHashMapToInputStream(r, i, Object.keys(t).length, e, n);
                });
            });
        });
    }
    addProtoToStream(t, e, n, r) {
        Do(this, n, (n)=>{
            Do(this, e, (e)=>{
                const i = this.i._malloc(t.length);
                this.i.HEAPU8.set(t, i), this.i._addProtoToInputStream(i, t.length, e, n, r), this.i._free(i);
            });
        });
    }
    addEmptyPacketToStream(t, e) {
        Do(this, t, (t)=>{
            this.i._addEmptyPacketToInputStream(t, e);
        });
    }
    addBoolVectorToStream(t, e, n) {
        Do(this, e, (e)=>{
            const r = this.i._allocateBoolVector(t.length);
            if (!r) throw Error("Unable to allocate new bool vector on heap.");
            for (const e of t)this.i._addBoolVectorEntry(r, e);
            this.i._addBoolVectorToInputStream(r, e, n);
        });
    }
    addDoubleVectorToStream(t, e, n) {
        Do(this, e, (e)=>{
            const r = this.i._allocateDoubleVector(t.length);
            if (!r) throw Error("Unable to allocate new double vector on heap.");
            for (const e of t)this.i._addDoubleVectorEntry(r, e);
            this.i._addDoubleVectorToInputStream(r, e, n);
        });
    }
    addFloatVectorToStream(t, e, n) {
        Do(this, e, (e)=>{
            const r = this.i._allocateFloatVector(t.length);
            if (!r) throw Error("Unable to allocate new float vector on heap.");
            for (const e of t)this.i._addFloatVectorEntry(r, e);
            this.i._addFloatVectorToInputStream(r, e, n);
        });
    }
    addIntVectorToStream(t, e, n) {
        Do(this, e, (e)=>{
            const r = this.i._allocateIntVector(t.length);
            if (!r) throw Error("Unable to allocate new int vector on heap.");
            for (const e of t)this.i._addIntVectorEntry(r, e);
            this.i._addIntVectorToInputStream(r, e, n);
        });
    }
    addStringVectorToStream(t, e, n) {
        Do(this, e, (e)=>{
            const r = this.i._allocateStringVector(t.length);
            if (!r) throw Error("Unable to allocate new string vector on heap.");
            for (const e of t)Do(this, e, (t)=>{
                this.i._addStringVectorEntry(r, t);
            });
            this.i._addStringVectorToInputStream(r, e, n);
        });
    }
    addBoolToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            this.i._addBoolToInputSidePacket(t, e);
        });
    }
    addDoubleToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            this.i._addDoubleToInputSidePacket(t, e);
        });
    }
    addFloatToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            this.i._addFloatToInputSidePacket(t, e);
        });
    }
    addIntToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            this.i._addIntToInputSidePacket(t, e);
        });
    }
    addStringToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            Do(this, t, (t)=>{
                this.i._addStringToInputSidePacket(t, e);
            });
        });
    }
    addProtoToInputSidePacket(t, e, n) {
        Do(this, n, (n)=>{
            Do(this, e, (e)=>{
                const r = this.i._malloc(t.length);
                this.i.HEAPU8.set(t, r), this.i._addProtoToInputSidePacket(r, t.length, e, n), this.i._free(r);
            });
        });
    }
    addBoolVectorToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            const n = this.i._allocateBoolVector(t.length);
            if (!n) throw Error("Unable to allocate new bool vector on heap.");
            for (const e of t)this.i._addBoolVectorEntry(n, e);
            this.i._addBoolVectorToInputSidePacket(n, e);
        });
    }
    addDoubleVectorToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            const n = this.i._allocateDoubleVector(t.length);
            if (!n) throw Error("Unable to allocate new double vector on heap.");
            for (const e of t)this.i._addDoubleVectorEntry(n, e);
            this.i._addDoubleVectorToInputSidePacket(n, e);
        });
    }
    addFloatVectorToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            const n = this.i._allocateFloatVector(t.length);
            if (!n) throw Error("Unable to allocate new float vector on heap.");
            for (const e of t)this.i._addFloatVectorEntry(n, e);
            this.i._addFloatVectorToInputSidePacket(n, e);
        });
    }
    addIntVectorToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            const n = this.i._allocateIntVector(t.length);
            if (!n) throw Error("Unable to allocate new int vector on heap.");
            for (const e of t)this.i._addIntVectorEntry(n, e);
            this.i._addIntVectorToInputSidePacket(n, e);
        });
    }
    addStringVectorToInputSidePacket(t, e) {
        Do(this, e, (e)=>{
            const n = this.i._allocateStringVector(t.length);
            if (!n) throw Error("Unable to allocate new string vector on heap.");
            for (const e of t)Do(this, e, (t)=>{
                this.i._addStringVectorEntry(n, t);
            });
            this.i._addStringVectorToInputSidePacket(n, e);
        });
    }
    attachBoolListener(t, e) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.i._attachBoolListener(t);
        });
    }
    attachBoolVectorListener(t, e) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.i._attachBoolVectorListener(t);
        });
    }
    attachIntListener(t, e) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.i._attachIntListener(t);
        });
    }
    attachIntVectorListener(t, e) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.i._attachIntVectorListener(t);
        });
    }
    attachDoubleListener(t, e) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.i._attachDoubleListener(t);
        });
    }
    attachDoubleVectorListener(t, e) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.i._attachDoubleVectorListener(t);
        });
    }
    attachFloatListener(t, e) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.i._attachFloatListener(t);
        });
    }
    attachFloatVectorListener(t, e) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.i._attachFloatVectorListener(t);
        });
    }
    attachStringListener(t, e) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.i._attachStringListener(t);
        });
    }
    attachStringVectorListener(t, e) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.i._attachStringVectorListener(t);
        });
    }
    attachProtoListener(t, e, n) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.i._attachProtoListener(t, n || !1);
        });
    }
    attachProtoVectorListener(t, e, n) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.i._attachProtoVectorListener(t, n || !1);
        });
    }
    attachAudioListener(t, e, n) {
        this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Go(this, t, (t, n)=>{
            t = new Float32Array(t.buffer, t.byteOffset, t.length / 4), e(t, n);
        }), Do(this, t, (t)=>{
            this.i._attachAudioListener(t, n || !1);
        });
    }
    finishProcessing() {
        this.i._waitUntilIdle();
    }
    closeGraph() {
        this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
    }
}, class extends ja {
    get fa() {
        return this.i;
    }
    va(t, e, n) {
        Do(this, e, (e)=>{
            const [r, i] = Bo(this, t, e);
            this.fa._addBoundTextureAsImageToStream(e, r, i, n);
        });
    }
    ba(t, e) {
        Go(this, t, e), Do(this, t, (t)=>{
            this.fa._attachImageListener(t);
        });
    }
    ca(t, e) {
        jo(this, t, e), Do(this, t, (t)=>{
            this.fa._attachImageVectorListener(t);
        });
    }
}));
var ja, Va = class extends Ga {
};
async function Xa(t, e, n) {
    return async function(t, e, n, r) {
        return Vo(t, e, n, r);
    }(t, n.canvas ?? ("undefined" == typeof OffscreenCanvas || Po() ? document.createElement("canvas") : void 0), e, n);
}
function za(t, e, n, r) {
    if (t.J) {
        const s = new os;
        if (n?.regionOfInterest) {
            if (!t.U) throw Error("This task doesn't support region-of-interest.");
            var i = n.regionOfInterest;
            if (i.left >= i.right || i.top >= i.bottom) throw Error("Expected RectF with left < right and top < bottom.");
            if (0 > i.left || 0 > i.top || 1 < i.right || 1 < i.bottom) throw Error("Expected RectF values to be in [0,1].");
            Gn(s, 1, (i.left + i.right) / 2), Gn(s, 2, (i.top + i.bottom) / 2), Gn(s, 4, i.right - i.left), Gn(s, 3, i.bottom - i.top);
        } else Gn(s, 1, .5), Gn(s, 2, .5), Gn(s, 4, 1), Gn(s, 3, 1);
        if (n?.rotationDegrees) {
            if (0 != n?.rotationDegrees % 90) throw Error("Expected rotation to be a multiple of 90\xb0.");
            if (Gn(s, 5, -Math.PI * n.rotationDegrees / 180), 0 != n?.rotationDegrees % 180) {
                const [t, r] = void 0 !== e.videoWidth ? [
                    e.videoWidth,
                    e.videoHeight
                ] : void 0 !== e.naturalWidth ? [
                    e.naturalWidth,
                    e.naturalHeight
                ] : [
                    e.width,
                    e.height
                ];
                n = Dn(s, 3) * r / t, i = Dn(s, 4) * t / r, Gn(s, 4, n), Gn(s, 3, i);
            }
        }
        t.g.addProtoToStream(s.g(), "mediapipe.NormalizedRect", t.J, r);
    }
    t.g.va(e, t.T, r ?? performance.now()), t.finishProcessing();
}
function Wa(t, e, n) {
    if (t.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
    za(t, e, n, t.I + 1);
}
function Ha(t, e, n, r) {
    if (!t.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
    za(t, e, n, r);
}
function Ya(t, e, n, r) {
    var i = e.data;
    const s = e.width, o = s * (e = e.height);
    if ((i instanceof Uint8Array || i instanceof Float32Array) && i.length !== o) throw Error("Unsupported channel count: " + i.length / o);
    return t = new ya([
        i
    ], n, !1, t.g.i.canvas, t.M, s, e), r ? t.clone() : t;
}
var Ka = class extends $o {
    constructor(t, e, n, r){
        super(t), this.g = t, this.T = e, this.J = n, this.U = r, this.M = new sa;
    }
    l(t, e = !0) {
        if ("runningMode" in t && Bn(this.baseOptions, 2, !!t.runningMode && "IMAGE" !== t.runningMode), void 0 !== t.canvas && this.g.i.canvas !== t.canvas) throw Error("You must create a new task to reset the canvas.");
        return super.l(t, e);
    }
    close() {
        this.M.close(), super.close();
    }
};
Ka.prototype.close = Ka.prototype.close;
var $a = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect_in", !1), this.j = {
            detections: []
        }, Fn(t = this.h = new Ls, 0, 1, e = new ks), Gn(this.h, 2, .5), Gn(this.h, 3, .3);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return "minDetectionConfidence" in t && Gn(this.h, 2, t.minDetectionConfidence ?? .5), "minSuppressionThreshold" in t && Gn(this.h, 3, t.minSuppressionThreshold ?? .3), this.l(t);
    }
    G(t, e) {
        return this.j = {
            detections: []
        }, Wa(this, t, e), this.j;
    }
    H(t, e, n) {
        return this.j = {
            detections: []
        }, Ha(this, t, n, e), this.j;
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect_in"), Ri(t, "detections");
        const e = new ui;
        jn(e, Fs, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect_in"), wi(n, "DETECTIONS:detections"), n.o(e), Si(t, n), this.g.attachProtoVectorListener("detections", (t, e)=>{
            for (const e of t)t = $i(e), this.j.detections.push(xo(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("detections", (t)=>{
            Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
$a.prototype.detectForVideo = $a.prototype.H, $a.prototype.detect = $a.prototype.G, $a.prototype.setOptions = $a.prototype.o, $a.createFromModelPath = async function(t, e) {
    return Xa($a, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, $a.createFromModelBuffer = function(t, e) {
    return Xa($a, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, $a.createFromOptions = function(t, e) {
    return Xa($a, t, e);
};
var qa = Na([
    61,
    146
], [
    146,
    91
], [
    91,
    181
], [
    181,
    84
], [
    84,
    17
], [
    17,
    314
], [
    314,
    405
], [
    405,
    321
], [
    321,
    375
], [
    375,
    291
], [
    61,
    185
], [
    185,
    40
], [
    40,
    39
], [
    39,
    37
], [
    37,
    0
], [
    0,
    267
], [
    267,
    269
], [
    269,
    270
], [
    270,
    409
], [
    409,
    291
], [
    78,
    95
], [
    95,
    88
], [
    88,
    178
], [
    178,
    87
], [
    87,
    14
], [
    14,
    317
], [
    317,
    402
], [
    402,
    318
], [
    318,
    324
], [
    324,
    308
], [
    78,
    191
], [
    191,
    80
], [
    80,
    81
], [
    81,
    82
], [
    82,
    13
], [
    13,
    312
], [
    312,
    311
], [
    311,
    310
], [
    310,
    415
], [
    415,
    308
]), Ja = Na([
    263,
    249
], [
    249,
    390
], [
    390,
    373
], [
    373,
    374
], [
    374,
    380
], [
    380,
    381
], [
    381,
    382
], [
    382,
    362
], [
    263,
    466
], [
    466,
    388
], [
    388,
    387
], [
    387,
    386
], [
    386,
    385
], [
    385,
    384
], [
    384,
    398
], [
    398,
    362
]), Za = Na([
    276,
    283
], [
    283,
    282
], [
    282,
    295
], [
    295,
    285
], [
    300,
    293
], [
    293,
    334
], [
    334,
    296
], [
    296,
    336
]), Qa = Na([
    474,
    475
], [
    475,
    476
], [
    476,
    477
], [
    477,
    474
]), tc = Na([
    33,
    7
], [
    7,
    163
], [
    163,
    144
], [
    144,
    145
], [
    145,
    153
], [
    153,
    154
], [
    154,
    155
], [
    155,
    133
], [
    33,
    246
], [
    246,
    161
], [
    161,
    160
], [
    160,
    159
], [
    159,
    158
], [
    158,
    157
], [
    157,
    173
], [
    173,
    133
]), ec = Na([
    46,
    53
], [
    53,
    52
], [
    52,
    65
], [
    65,
    55
], [
    70,
    63
], [
    63,
    105
], [
    105,
    66
], [
    66,
    107
]), nc = Na([
    469,
    470
], [
    470,
    471
], [
    471,
    472
], [
    472,
    469
]), rc = Na([
    10,
    338
], [
    338,
    297
], [
    297,
    332
], [
    332,
    284
], [
    284,
    251
], [
    251,
    389
], [
    389,
    356
], [
    356,
    454
], [
    454,
    323
], [
    323,
    361
], [
    361,
    288
], [
    288,
    397
], [
    397,
    365
], [
    365,
    379
], [
    379,
    378
], [
    378,
    400
], [
    400,
    377
], [
    377,
    152
], [
    152,
    148
], [
    148,
    176
], [
    176,
    149
], [
    149,
    150
], [
    150,
    136
], [
    136,
    172
], [
    172,
    58
], [
    58,
    132
], [
    132,
    93
], [
    93,
    234
], [
    234,
    127
], [
    127,
    162
], [
    162,
    21
], [
    21,
    54
], [
    54,
    103
], [
    103,
    67
], [
    67,
    109
], [
    109,
    10
]), ic = [
    ...qa,
    ...Ja,
    ...Za,
    ...tc,
    ...ec,
    ...rc
], sc = Na([
    127,
    34
], [
    34,
    139
], [
    139,
    127
], [
    11,
    0
], [
    0,
    37
], [
    37,
    11
], [
    232,
    231
], [
    231,
    120
], [
    120,
    232
], [
    72,
    37
], [
    37,
    39
], [
    39,
    72
], [
    128,
    121
], [
    121,
    47
], [
    47,
    128
], [
    232,
    121
], [
    121,
    128
], [
    128,
    232
], [
    104,
    69
], [
    69,
    67
], [
    67,
    104
], [
    175,
    171
], [
    171,
    148
], [
    148,
    175
], [
    118,
    50
], [
    50,
    101
], [
    101,
    118
], [
    73,
    39
], [
    39,
    40
], [
    40,
    73
], [
    9,
    151
], [
    151,
    108
], [
    108,
    9
], [
    48,
    115
], [
    115,
    131
], [
    131,
    48
], [
    194,
    204
], [
    204,
    211
], [
    211,
    194
], [
    74,
    40
], [
    40,
    185
], [
    185,
    74
], [
    80,
    42
], [
    42,
    183
], [
    183,
    80
], [
    40,
    92
], [
    92,
    186
], [
    186,
    40
], [
    230,
    229
], [
    229,
    118
], [
    118,
    230
], [
    202,
    212
], [
    212,
    214
], [
    214,
    202
], [
    83,
    18
], [
    18,
    17
], [
    17,
    83
], [
    76,
    61
], [
    61,
    146
], [
    146,
    76
], [
    160,
    29
], [
    29,
    30
], [
    30,
    160
], [
    56,
    157
], [
    157,
    173
], [
    173,
    56
], [
    106,
    204
], [
    204,
    194
], [
    194,
    106
], [
    135,
    214
], [
    214,
    192
], [
    192,
    135
], [
    203,
    165
], [
    165,
    98
], [
    98,
    203
], [
    21,
    71
], [
    71,
    68
], [
    68,
    21
], [
    51,
    45
], [
    45,
    4
], [
    4,
    51
], [
    144,
    24
], [
    24,
    23
], [
    23,
    144
], [
    77,
    146
], [
    146,
    91
], [
    91,
    77
], [
    205,
    50
], [
    50,
    187
], [
    187,
    205
], [
    201,
    200
], [
    200,
    18
], [
    18,
    201
], [
    91,
    106
], [
    106,
    182
], [
    182,
    91
], [
    90,
    91
], [
    91,
    181
], [
    181,
    90
], [
    85,
    84
], [
    84,
    17
], [
    17,
    85
], [
    206,
    203
], [
    203,
    36
], [
    36,
    206
], [
    148,
    171
], [
    171,
    140
], [
    140,
    148
], [
    92,
    40
], [
    40,
    39
], [
    39,
    92
], [
    193,
    189
], [
    189,
    244
], [
    244,
    193
], [
    159,
    158
], [
    158,
    28
], [
    28,
    159
], [
    247,
    246
], [
    246,
    161
], [
    161,
    247
], [
    236,
    3
], [
    3,
    196
], [
    196,
    236
], [
    54,
    68
], [
    68,
    104
], [
    104,
    54
], [
    193,
    168
], [
    168,
    8
], [
    8,
    193
], [
    117,
    228
], [
    228,
    31
], [
    31,
    117
], [
    189,
    193
], [
    193,
    55
], [
    55,
    189
], [
    98,
    97
], [
    97,
    99
], [
    99,
    98
], [
    126,
    47
], [
    47,
    100
], [
    100,
    126
], [
    166,
    79
], [
    79,
    218
], [
    218,
    166
], [
    155,
    154
], [
    154,
    26
], [
    26,
    155
], [
    209,
    49
], [
    49,
    131
], [
    131,
    209
], [
    135,
    136
], [
    136,
    150
], [
    150,
    135
], [
    47,
    126
], [
    126,
    217
], [
    217,
    47
], [
    223,
    52
], [
    52,
    53
], [
    53,
    223
], [
    45,
    51
], [
    51,
    134
], [
    134,
    45
], [
    211,
    170
], [
    170,
    140
], [
    140,
    211
], [
    67,
    69
], [
    69,
    108
], [
    108,
    67
], [
    43,
    106
], [
    106,
    91
], [
    91,
    43
], [
    230,
    119
], [
    119,
    120
], [
    120,
    230
], [
    226,
    130
], [
    130,
    247
], [
    247,
    226
], [
    63,
    53
], [
    53,
    52
], [
    52,
    63
], [
    238,
    20
], [
    20,
    242
], [
    242,
    238
], [
    46,
    70
], [
    70,
    156
], [
    156,
    46
], [
    78,
    62
], [
    62,
    96
], [
    96,
    78
], [
    46,
    53
], [
    53,
    63
], [
    63,
    46
], [
    143,
    34
], [
    34,
    227
], [
    227,
    143
], [
    123,
    117
], [
    117,
    111
], [
    111,
    123
], [
    44,
    125
], [
    125,
    19
], [
    19,
    44
], [
    236,
    134
], [
    134,
    51
], [
    51,
    236
], [
    216,
    206
], [
    206,
    205
], [
    205,
    216
], [
    154,
    153
], [
    153,
    22
], [
    22,
    154
], [
    39,
    37
], [
    37,
    167
], [
    167,
    39
], [
    200,
    201
], [
    201,
    208
], [
    208,
    200
], [
    36,
    142
], [
    142,
    100
], [
    100,
    36
], [
    57,
    212
], [
    212,
    202
], [
    202,
    57
], [
    20,
    60
], [
    60,
    99
], [
    99,
    20
], [
    28,
    158
], [
    158,
    157
], [
    157,
    28
], [
    35,
    226
], [
    226,
    113
], [
    113,
    35
], [
    160,
    159
], [
    159,
    27
], [
    27,
    160
], [
    204,
    202
], [
    202,
    210
], [
    210,
    204
], [
    113,
    225
], [
    225,
    46
], [
    46,
    113
], [
    43,
    202
], [
    202,
    204
], [
    204,
    43
], [
    62,
    76
], [
    76,
    77
], [
    77,
    62
], [
    137,
    123
], [
    123,
    116
], [
    116,
    137
], [
    41,
    38
], [
    38,
    72
], [
    72,
    41
], [
    203,
    129
], [
    129,
    142
], [
    142,
    203
], [
    64,
    98
], [
    98,
    240
], [
    240,
    64
], [
    49,
    102
], [
    102,
    64
], [
    64,
    49
], [
    41,
    73
], [
    73,
    74
], [
    74,
    41
], [
    212,
    216
], [
    216,
    207
], [
    207,
    212
], [
    42,
    74
], [
    74,
    184
], [
    184,
    42
], [
    169,
    170
], [
    170,
    211
], [
    211,
    169
], [
    170,
    149
], [
    149,
    176
], [
    176,
    170
], [
    105,
    66
], [
    66,
    69
], [
    69,
    105
], [
    122,
    6
], [
    6,
    168
], [
    168,
    122
], [
    123,
    147
], [
    147,
    187
], [
    187,
    123
], [
    96,
    77
], [
    77,
    90
], [
    90,
    96
], [
    65,
    55
], [
    55,
    107
], [
    107,
    65
], [
    89,
    90
], [
    90,
    180
], [
    180,
    89
], [
    101,
    100
], [
    100,
    120
], [
    120,
    101
], [
    63,
    105
], [
    105,
    104
], [
    104,
    63
], [
    93,
    137
], [
    137,
    227
], [
    227,
    93
], [
    15,
    86
], [
    86,
    85
], [
    85,
    15
], [
    129,
    102
], [
    102,
    49
], [
    49,
    129
], [
    14,
    87
], [
    87,
    86
], [
    86,
    14
], [
    55,
    8
], [
    8,
    9
], [
    9,
    55
], [
    100,
    47
], [
    47,
    121
], [
    121,
    100
], [
    145,
    23
], [
    23,
    22
], [
    22,
    145
], [
    88,
    89
], [
    89,
    179
], [
    179,
    88
], [
    6,
    122
], [
    122,
    196
], [
    196,
    6
], [
    88,
    95
], [
    95,
    96
], [
    96,
    88
], [
    138,
    172
], [
    172,
    136
], [
    136,
    138
], [
    215,
    58
], [
    58,
    172
], [
    172,
    215
], [
    115,
    48
], [
    48,
    219
], [
    219,
    115
], [
    42,
    80
], [
    80,
    81
], [
    81,
    42
], [
    195,
    3
], [
    3,
    51
], [
    51,
    195
], [
    43,
    146
], [
    146,
    61
], [
    61,
    43
], [
    171,
    175
], [
    175,
    199
], [
    199,
    171
], [
    81,
    82
], [
    82,
    38
], [
    38,
    81
], [
    53,
    46
], [
    46,
    225
], [
    225,
    53
], [
    144,
    163
], [
    163,
    110
], [
    110,
    144
], [
    52,
    65
], [
    65,
    66
], [
    66,
    52
], [
    229,
    228
], [
    228,
    117
], [
    117,
    229
], [
    34,
    127
], [
    127,
    234
], [
    234,
    34
], [
    107,
    108
], [
    108,
    69
], [
    69,
    107
], [
    109,
    108
], [
    108,
    151
], [
    151,
    109
], [
    48,
    64
], [
    64,
    235
], [
    235,
    48
], [
    62,
    78
], [
    78,
    191
], [
    191,
    62
], [
    129,
    209
], [
    209,
    126
], [
    126,
    129
], [
    111,
    35
], [
    35,
    143
], [
    143,
    111
], [
    117,
    123
], [
    123,
    50
], [
    50,
    117
], [
    222,
    65
], [
    65,
    52
], [
    52,
    222
], [
    19,
    125
], [
    125,
    141
], [
    141,
    19
], [
    221,
    55
], [
    55,
    65
], [
    65,
    221
], [
    3,
    195
], [
    195,
    197
], [
    197,
    3
], [
    25,
    7
], [
    7,
    33
], [
    33,
    25
], [
    220,
    237
], [
    237,
    44
], [
    44,
    220
], [
    70,
    71
], [
    71,
    139
], [
    139,
    70
], [
    122,
    193
], [
    193,
    245
], [
    245,
    122
], [
    247,
    130
], [
    130,
    33
], [
    33,
    247
], [
    71,
    21
], [
    21,
    162
], [
    162,
    71
], [
    170,
    169
], [
    169,
    150
], [
    150,
    170
], [
    188,
    174
], [
    174,
    196
], [
    196,
    188
], [
    216,
    186
], [
    186,
    92
], [
    92,
    216
], [
    2,
    97
], [
    97,
    167
], [
    167,
    2
], [
    141,
    125
], [
    125,
    241
], [
    241,
    141
], [
    164,
    167
], [
    167,
    37
], [
    37,
    164
], [
    72,
    38
], [
    38,
    12
], [
    12,
    72
], [
    38,
    82
], [
    82,
    13
], [
    13,
    38
], [
    63,
    68
], [
    68,
    71
], [
    71,
    63
], [
    226,
    35
], [
    35,
    111
], [
    111,
    226
], [
    101,
    50
], [
    50,
    205
], [
    205,
    101
], [
    206,
    92
], [
    92,
    165
], [
    165,
    206
], [
    209,
    198
], [
    198,
    217
], [
    217,
    209
], [
    165,
    167
], [
    167,
    97
], [
    97,
    165
], [
    220,
    115
], [
    115,
    218
], [
    218,
    220
], [
    133,
    112
], [
    112,
    243
], [
    243,
    133
], [
    239,
    238
], [
    238,
    241
], [
    241,
    239
], [
    214,
    135
], [
    135,
    169
], [
    169,
    214
], [
    190,
    173
], [
    173,
    133
], [
    133,
    190
], [
    171,
    208
], [
    208,
    32
], [
    32,
    171
], [
    125,
    44
], [
    44,
    237
], [
    237,
    125
], [
    86,
    87
], [
    87,
    178
], [
    178,
    86
], [
    85,
    86
], [
    86,
    179
], [
    179,
    85
], [
    84,
    85
], [
    85,
    180
], [
    180,
    84
], [
    83,
    84
], [
    84,
    181
], [
    181,
    83
], [
    201,
    83
], [
    83,
    182
], [
    182,
    201
], [
    137,
    93
], [
    93,
    132
], [
    132,
    137
], [
    76,
    62
], [
    62,
    183
], [
    183,
    76
], [
    61,
    76
], [
    76,
    184
], [
    184,
    61
], [
    57,
    61
], [
    61,
    185
], [
    185,
    57
], [
    212,
    57
], [
    57,
    186
], [
    186,
    212
], [
    214,
    207
], [
    207,
    187
], [
    187,
    214
], [
    34,
    143
], [
    143,
    156
], [
    156,
    34
], [
    79,
    239
], [
    239,
    237
], [
    237,
    79
], [
    123,
    137
], [
    137,
    177
], [
    177,
    123
], [
    44,
    1
], [
    1,
    4
], [
    4,
    44
], [
    201,
    194
], [
    194,
    32
], [
    32,
    201
], [
    64,
    102
], [
    102,
    129
], [
    129,
    64
], [
    213,
    215
], [
    215,
    138
], [
    138,
    213
], [
    59,
    166
], [
    166,
    219
], [
    219,
    59
], [
    242,
    99
], [
    99,
    97
], [
    97,
    242
], [
    2,
    94
], [
    94,
    141
], [
    141,
    2
], [
    75,
    59
], [
    59,
    235
], [
    235,
    75
], [
    24,
    110
], [
    110,
    228
], [
    228,
    24
], [
    25,
    130
], [
    130,
    226
], [
    226,
    25
], [
    23,
    24
], [
    24,
    229
], [
    229,
    23
], [
    22,
    23
], [
    23,
    230
], [
    230,
    22
], [
    26,
    22
], [
    22,
    231
], [
    231,
    26
], [
    112,
    26
], [
    26,
    232
], [
    232,
    112
], [
    189,
    190
], [
    190,
    243
], [
    243,
    189
], [
    221,
    56
], [
    56,
    190
], [
    190,
    221
], [
    28,
    56
], [
    56,
    221
], [
    221,
    28
], [
    27,
    28
], [
    28,
    222
], [
    222,
    27
], [
    29,
    27
], [
    27,
    223
], [
    223,
    29
], [
    30,
    29
], [
    29,
    224
], [
    224,
    30
], [
    247,
    30
], [
    30,
    225
], [
    225,
    247
], [
    238,
    79
], [
    79,
    20
], [
    20,
    238
], [
    166,
    59
], [
    59,
    75
], [
    75,
    166
], [
    60,
    75
], [
    75,
    240
], [
    240,
    60
], [
    147,
    177
], [
    177,
    215
], [
    215,
    147
], [
    20,
    79
], [
    79,
    166
], [
    166,
    20
], [
    187,
    147
], [
    147,
    213
], [
    213,
    187
], [
    112,
    233
], [
    233,
    244
], [
    244,
    112
], [
    233,
    128
], [
    128,
    245
], [
    245,
    233
], [
    128,
    114
], [
    114,
    188
], [
    188,
    128
], [
    114,
    217
], [
    217,
    174
], [
    174,
    114
], [
    131,
    115
], [
    115,
    220
], [
    220,
    131
], [
    217,
    198
], [
    198,
    236
], [
    236,
    217
], [
    198,
    131
], [
    131,
    134
], [
    134,
    198
], [
    177,
    132
], [
    132,
    58
], [
    58,
    177
], [
    143,
    35
], [
    35,
    124
], [
    124,
    143
], [
    110,
    163
], [
    163,
    7
], [
    7,
    110
], [
    228,
    110
], [
    110,
    25
], [
    25,
    228
], [
    356,
    389
], [
    389,
    368
], [
    368,
    356
], [
    11,
    302
], [
    302,
    267
], [
    267,
    11
], [
    452,
    350
], [
    350,
    349
], [
    349,
    452
], [
    302,
    303
], [
    303,
    269
], [
    269,
    302
], [
    357,
    343
], [
    343,
    277
], [
    277,
    357
], [
    452,
    453
], [
    453,
    357
], [
    357,
    452
], [
    333,
    332
], [
    332,
    297
], [
    297,
    333
], [
    175,
    152
], [
    152,
    377
], [
    377,
    175
], [
    347,
    348
], [
    348,
    330
], [
    330,
    347
], [
    303,
    304
], [
    304,
    270
], [
    270,
    303
], [
    9,
    336
], [
    336,
    337
], [
    337,
    9
], [
    278,
    279
], [
    279,
    360
], [
    360,
    278
], [
    418,
    262
], [
    262,
    431
], [
    431,
    418
], [
    304,
    408
], [
    408,
    409
], [
    409,
    304
], [
    310,
    415
], [
    415,
    407
], [
    407,
    310
], [
    270,
    409
], [
    409,
    410
], [
    410,
    270
], [
    450,
    348
], [
    348,
    347
], [
    347,
    450
], [
    422,
    430
], [
    430,
    434
], [
    434,
    422
], [
    313,
    314
], [
    314,
    17
], [
    17,
    313
], [
    306,
    307
], [
    307,
    375
], [
    375,
    306
], [
    387,
    388
], [
    388,
    260
], [
    260,
    387
], [
    286,
    414
], [
    414,
    398
], [
    398,
    286
], [
    335,
    406
], [
    406,
    418
], [
    418,
    335
], [
    364,
    367
], [
    367,
    416
], [
    416,
    364
], [
    423,
    358
], [
    358,
    327
], [
    327,
    423
], [
    251,
    284
], [
    284,
    298
], [
    298,
    251
], [
    281,
    5
], [
    5,
    4
], [
    4,
    281
], [
    373,
    374
], [
    374,
    253
], [
    253,
    373
], [
    307,
    320
], [
    320,
    321
], [
    321,
    307
], [
    425,
    427
], [
    427,
    411
], [
    411,
    425
], [
    421,
    313
], [
    313,
    18
], [
    18,
    421
], [
    321,
    405
], [
    405,
    406
], [
    406,
    321
], [
    320,
    404
], [
    404,
    405
], [
    405,
    320
], [
    315,
    16
], [
    16,
    17
], [
    17,
    315
], [
    426,
    425
], [
    425,
    266
], [
    266,
    426
], [
    377,
    400
], [
    400,
    369
], [
    369,
    377
], [
    322,
    391
], [
    391,
    269
], [
    269,
    322
], [
    417,
    465
], [
    465,
    464
], [
    464,
    417
], [
    386,
    257
], [
    257,
    258
], [
    258,
    386
], [
    466,
    260
], [
    260,
    388
], [
    388,
    466
], [
    456,
    399
], [
    399,
    419
], [
    419,
    456
], [
    284,
    332
], [
    332,
    333
], [
    333,
    284
], [
    417,
    285
], [
    285,
    8
], [
    8,
    417
], [
    346,
    340
], [
    340,
    261
], [
    261,
    346
], [
    413,
    441
], [
    441,
    285
], [
    285,
    413
], [
    327,
    460
], [
    460,
    328
], [
    328,
    327
], [
    355,
    371
], [
    371,
    329
], [
    329,
    355
], [
    392,
    439
], [
    439,
    438
], [
    438,
    392
], [
    382,
    341
], [
    341,
    256
], [
    256,
    382
], [
    429,
    420
], [
    420,
    360
], [
    360,
    429
], [
    364,
    394
], [
    394,
    379
], [
    379,
    364
], [
    277,
    343
], [
    343,
    437
], [
    437,
    277
], [
    443,
    444
], [
    444,
    283
], [
    283,
    443
], [
    275,
    440
], [
    440,
    363
], [
    363,
    275
], [
    431,
    262
], [
    262,
    369
], [
    369,
    431
], [
    297,
    338
], [
    338,
    337
], [
    337,
    297
], [
    273,
    375
], [
    375,
    321
], [
    321,
    273
], [
    450,
    451
], [
    451,
    349
], [
    349,
    450
], [
    446,
    342
], [
    342,
    467
], [
    467,
    446
], [
    293,
    334
], [
    334,
    282
], [
    282,
    293
], [
    458,
    461
], [
    461,
    462
], [
    462,
    458
], [
    276,
    353
], [
    353,
    383
], [
    383,
    276
], [
    308,
    324
], [
    324,
    325
], [
    325,
    308
], [
    276,
    300
], [
    300,
    293
], [
    293,
    276
], [
    372,
    345
], [
    345,
    447
], [
    447,
    372
], [
    352,
    345
], [
    345,
    340
], [
    340,
    352
], [
    274,
    1
], [
    1,
    19
], [
    19,
    274
], [
    456,
    248
], [
    248,
    281
], [
    281,
    456
], [
    436,
    427
], [
    427,
    425
], [
    425,
    436
], [
    381,
    256
], [
    256,
    252
], [
    252,
    381
], [
    269,
    391
], [
    391,
    393
], [
    393,
    269
], [
    200,
    199
], [
    199,
    428
], [
    428,
    200
], [
    266,
    330
], [
    330,
    329
], [
    329,
    266
], [
    287,
    273
], [
    273,
    422
], [
    422,
    287
], [
    250,
    462
], [
    462,
    328
], [
    328,
    250
], [
    258,
    286
], [
    286,
    384
], [
    384,
    258
], [
    265,
    353
], [
    353,
    342
], [
    342,
    265
], [
    387,
    259
], [
    259,
    257
], [
    257,
    387
], [
    424,
    431
], [
    431,
    430
], [
    430,
    424
], [
    342,
    353
], [
    353,
    276
], [
    276,
    342
], [
    273,
    335
], [
    335,
    424
], [
    424,
    273
], [
    292,
    325
], [
    325,
    307
], [
    307,
    292
], [
    366,
    447
], [
    447,
    345
], [
    345,
    366
], [
    271,
    303
], [
    303,
    302
], [
    302,
    271
], [
    423,
    266
], [
    266,
    371
], [
    371,
    423
], [
    294,
    455
], [
    455,
    460
], [
    460,
    294
], [
    279,
    278
], [
    278,
    294
], [
    294,
    279
], [
    271,
    272
], [
    272,
    304
], [
    304,
    271
], [
    432,
    434
], [
    434,
    427
], [
    427,
    432
], [
    272,
    407
], [
    407,
    408
], [
    408,
    272
], [
    394,
    430
], [
    430,
    431
], [
    431,
    394
], [
    395,
    369
], [
    369,
    400
], [
    400,
    395
], [
    334,
    333
], [
    333,
    299
], [
    299,
    334
], [
    351,
    417
], [
    417,
    168
], [
    168,
    351
], [
    352,
    280
], [
    280,
    411
], [
    411,
    352
], [
    325,
    319
], [
    319,
    320
], [
    320,
    325
], [
    295,
    296
], [
    296,
    336
], [
    336,
    295
], [
    319,
    403
], [
    403,
    404
], [
    404,
    319
], [
    330,
    348
], [
    348,
    349
], [
    349,
    330
], [
    293,
    298
], [
    298,
    333
], [
    333,
    293
], [
    323,
    454
], [
    454,
    447
], [
    447,
    323
], [
    15,
    16
], [
    16,
    315
], [
    315,
    15
], [
    358,
    429
], [
    429,
    279
], [
    279,
    358
], [
    14,
    15
], [
    15,
    316
], [
    316,
    14
], [
    285,
    336
], [
    336,
    9
], [
    9,
    285
], [
    329,
    349
], [
    349,
    350
], [
    350,
    329
], [
    374,
    380
], [
    380,
    252
], [
    252,
    374
], [
    318,
    402
], [
    402,
    403
], [
    403,
    318
], [
    6,
    197
], [
    197,
    419
], [
    419,
    6
], [
    318,
    319
], [
    319,
    325
], [
    325,
    318
], [
    367,
    364
], [
    364,
    365
], [
    365,
    367
], [
    435,
    367
], [
    367,
    397
], [
    397,
    435
], [
    344,
    438
], [
    438,
    439
], [
    439,
    344
], [
    272,
    271
], [
    271,
    311
], [
    311,
    272
], [
    195,
    5
], [
    5,
    281
], [
    281,
    195
], [
    273,
    287
], [
    287,
    291
], [
    291,
    273
], [
    396,
    428
], [
    428,
    199
], [
    199,
    396
], [
    311,
    271
], [
    271,
    268
], [
    268,
    311
], [
    283,
    444
], [
    444,
    445
], [
    445,
    283
], [
    373,
    254
], [
    254,
    339
], [
    339,
    373
], [
    282,
    334
], [
    334,
    296
], [
    296,
    282
], [
    449,
    347
], [
    347,
    346
], [
    346,
    449
], [
    264,
    447
], [
    447,
    454
], [
    454,
    264
], [
    336,
    296
], [
    296,
    299
], [
    299,
    336
], [
    338,
    10
], [
    10,
    151
], [
    151,
    338
], [
    278,
    439
], [
    439,
    455
], [
    455,
    278
], [
    292,
    407
], [
    407,
    415
], [
    415,
    292
], [
    358,
    371
], [
    371,
    355
], [
    355,
    358
], [
    340,
    345
], [
    345,
    372
], [
    372,
    340
], [
    346,
    347
], [
    347,
    280
], [
    280,
    346
], [
    442,
    443
], [
    443,
    282
], [
    282,
    442
], [
    19,
    94
], [
    94,
    370
], [
    370,
    19
], [
    441,
    442
], [
    442,
    295
], [
    295,
    441
], [
    248,
    419
], [
    419,
    197
], [
    197,
    248
], [
    263,
    255
], [
    255,
    359
], [
    359,
    263
], [
    440,
    275
], [
    275,
    274
], [
    274,
    440
], [
    300,
    383
], [
    383,
    368
], [
    368,
    300
], [
    351,
    412
], [
    412,
    465
], [
    465,
    351
], [
    263,
    467
], [
    467,
    466
], [
    466,
    263
], [
    301,
    368
], [
    368,
    389
], [
    389,
    301
], [
    395,
    378
], [
    378,
    379
], [
    379,
    395
], [
    412,
    351
], [
    351,
    419
], [
    419,
    412
], [
    436,
    426
], [
    426,
    322
], [
    322,
    436
], [
    2,
    164
], [
    164,
    393
], [
    393,
    2
], [
    370,
    462
], [
    462,
    461
], [
    461,
    370
], [
    164,
    0
], [
    0,
    267
], [
    267,
    164
], [
    302,
    11
], [
    11,
    12
], [
    12,
    302
], [
    268,
    12
], [
    12,
    13
], [
    13,
    268
], [
    293,
    300
], [
    300,
    301
], [
    301,
    293
], [
    446,
    261
], [
    261,
    340
], [
    340,
    446
], [
    330,
    266
], [
    266,
    425
], [
    425,
    330
], [
    426,
    423
], [
    423,
    391
], [
    391,
    426
], [
    429,
    355
], [
    355,
    437
], [
    437,
    429
], [
    391,
    327
], [
    327,
    326
], [
    326,
    391
], [
    440,
    457
], [
    457,
    438
], [
    438,
    440
], [
    341,
    382
], [
    382,
    362
], [
    362,
    341
], [
    459,
    457
], [
    457,
    461
], [
    461,
    459
], [
    434,
    430
], [
    430,
    394
], [
    394,
    434
], [
    414,
    463
], [
    463,
    362
], [
    362,
    414
], [
    396,
    369
], [
    369,
    262
], [
    262,
    396
], [
    354,
    461
], [
    461,
    457
], [
    457,
    354
], [
    316,
    403
], [
    403,
    402
], [
    402,
    316
], [
    315,
    404
], [
    404,
    403
], [
    403,
    315
], [
    314,
    405
], [
    405,
    404
], [
    404,
    314
], [
    313,
    406
], [
    406,
    405
], [
    405,
    313
], [
    421,
    418
], [
    418,
    406
], [
    406,
    421
], [
    366,
    401
], [
    401,
    361
], [
    361,
    366
], [
    306,
    408
], [
    408,
    407
], [
    407,
    306
], [
    291,
    409
], [
    409,
    408
], [
    408,
    291
], [
    287,
    410
], [
    410,
    409
], [
    409,
    287
], [
    432,
    436
], [
    436,
    410
], [
    410,
    432
], [
    434,
    416
], [
    416,
    411
], [
    411,
    434
], [
    264,
    368
], [
    368,
    383
], [
    383,
    264
], [
    309,
    438
], [
    438,
    457
], [
    457,
    309
], [
    352,
    376
], [
    376,
    401
], [
    401,
    352
], [
    274,
    275
], [
    275,
    4
], [
    4,
    274
], [
    421,
    428
], [
    428,
    262
], [
    262,
    421
], [
    294,
    327
], [
    327,
    358
], [
    358,
    294
], [
    433,
    416
], [
    416,
    367
], [
    367,
    433
], [
    289,
    455
], [
    455,
    439
], [
    439,
    289
], [
    462,
    370
], [
    370,
    326
], [
    326,
    462
], [
    2,
    326
], [
    326,
    370
], [
    370,
    2
], [
    305,
    460
], [
    460,
    455
], [
    455,
    305
], [
    254,
    449
], [
    449,
    448
], [
    448,
    254
], [
    255,
    261
], [
    261,
    446
], [
    446,
    255
], [
    253,
    450
], [
    450,
    449
], [
    449,
    253
], [
    252,
    451
], [
    451,
    450
], [
    450,
    252
], [
    256,
    452
], [
    452,
    451
], [
    451,
    256
], [
    341,
    453
], [
    453,
    452
], [
    452,
    341
], [
    413,
    464
], [
    464,
    463
], [
    463,
    413
], [
    441,
    413
], [
    413,
    414
], [
    414,
    441
], [
    258,
    442
], [
    442,
    441
], [
    441,
    258
], [
    257,
    443
], [
    443,
    442
], [
    442,
    257
], [
    259,
    444
], [
    444,
    443
], [
    443,
    259
], [
    260,
    445
], [
    445,
    444
], [
    444,
    260
], [
    467,
    342
], [
    342,
    445
], [
    445,
    467
], [
    459,
    458
], [
    458,
    250
], [
    250,
    459
], [
    289,
    392
], [
    392,
    290
], [
    290,
    289
], [
    290,
    328
], [
    328,
    460
], [
    460,
    290
], [
    376,
    433
], [
    433,
    435
], [
    435,
    376
], [
    250,
    290
], [
    290,
    392
], [
    392,
    250
], [
    411,
    416
], [
    416,
    433
], [
    433,
    411
], [
    341,
    463
], [
    463,
    464
], [
    464,
    341
], [
    453,
    464
], [
    464,
    465
], [
    465,
    453
], [
    357,
    465
], [
    465,
    412
], [
    412,
    357
], [
    343,
    412
], [
    412,
    399
], [
    399,
    343
], [
    360,
    363
], [
    363,
    440
], [
    440,
    360
], [
    437,
    399
], [
    399,
    456
], [
    456,
    437
], [
    420,
    456
], [
    456,
    363
], [
    363,
    420
], [
    401,
    435
], [
    435,
    288
], [
    288,
    401
], [
    372,
    383
], [
    383,
    353
], [
    353,
    372
], [
    339,
    255
], [
    255,
    249
], [
    249,
    339
], [
    448,
    261
], [
    261,
    255
], [
    255,
    448
], [
    133,
    243
], [
    243,
    190
], [
    190,
    133
], [
    133,
    155
], [
    155,
    112
], [
    112,
    133
], [
    33,
    246
], [
    246,
    247
], [
    247,
    33
], [
    33,
    130
], [
    130,
    25
], [
    25,
    33
], [
    398,
    384
], [
    384,
    286
], [
    286,
    398
], [
    362,
    398
], [
    398,
    414
], [
    414,
    362
], [
    362,
    463
], [
    463,
    341
], [
    341,
    362
], [
    263,
    359
], [
    359,
    467
], [
    467,
    263
], [
    263,
    249
], [
    249,
    255
], [
    255,
    263
], [
    466,
    467
], [
    467,
    260
], [
    260,
    466
], [
    75,
    60
], [
    60,
    166
], [
    166,
    75
], [
    238,
    239
], [
    239,
    79
], [
    79,
    238
], [
    162,
    127
], [
    127,
    139
], [
    139,
    162
], [
    72,
    11
], [
    11,
    37
], [
    37,
    72
], [
    121,
    232
], [
    232,
    120
], [
    120,
    121
], [
    73,
    72
], [
    72,
    39
], [
    39,
    73
], [
    114,
    128
], [
    128,
    47
], [
    47,
    114
], [
    233,
    232
], [
    232,
    128
], [
    128,
    233
], [
    103,
    104
], [
    104,
    67
], [
    67,
    103
], [
    152,
    175
], [
    175,
    148
], [
    148,
    152
], [
    119,
    118
], [
    118,
    101
], [
    101,
    119
], [
    74,
    73
], [
    73,
    40
], [
    40,
    74
], [
    107,
    9
], [
    9,
    108
], [
    108,
    107
], [
    49,
    48
], [
    48,
    131
], [
    131,
    49
], [
    32,
    194
], [
    194,
    211
], [
    211,
    32
], [
    184,
    74
], [
    74,
    185
], [
    185,
    184
], [
    191,
    80
], [
    80,
    183
], [
    183,
    191
], [
    185,
    40
], [
    40,
    186
], [
    186,
    185
], [
    119,
    230
], [
    230,
    118
], [
    118,
    119
], [
    210,
    202
], [
    202,
    214
], [
    214,
    210
], [
    84,
    83
], [
    83,
    17
], [
    17,
    84
], [
    77,
    76
], [
    76,
    146
], [
    146,
    77
], [
    161,
    160
], [
    160,
    30
], [
    30,
    161
], [
    190,
    56
], [
    56,
    173
], [
    173,
    190
], [
    182,
    106
], [
    106,
    194
], [
    194,
    182
], [
    138,
    135
], [
    135,
    192
], [
    192,
    138
], [
    129,
    203
], [
    203,
    98
], [
    98,
    129
], [
    54,
    21
], [
    21,
    68
], [
    68,
    54
], [
    5,
    51
], [
    51,
    4
], [
    4,
    5
], [
    145,
    144
], [
    144,
    23
], [
    23,
    145
], [
    90,
    77
], [
    77,
    91
], [
    91,
    90
], [
    207,
    205
], [
    205,
    187
], [
    187,
    207
], [
    83,
    201
], [
    201,
    18
], [
    18,
    83
], [
    181,
    91
], [
    91,
    182
], [
    182,
    181
], [
    180,
    90
], [
    90,
    181
], [
    181,
    180
], [
    16,
    85
], [
    85,
    17
], [
    17,
    16
], [
    205,
    206
], [
    206,
    36
], [
    36,
    205
], [
    176,
    148
], [
    148,
    140
], [
    140,
    176
], [
    165,
    92
], [
    92,
    39
], [
    39,
    165
], [
    245,
    193
], [
    193,
    244
], [
    244,
    245
], [
    27,
    159
], [
    159,
    28
], [
    28,
    27
], [
    30,
    247
], [
    247,
    161
], [
    161,
    30
], [
    174,
    236
], [
    236,
    196
], [
    196,
    174
], [
    103,
    54
], [
    54,
    104
], [
    104,
    103
], [
    55,
    193
], [
    193,
    8
], [
    8,
    55
], [
    111,
    117
], [
    117,
    31
], [
    31,
    111
], [
    221,
    189
], [
    189,
    55
], [
    55,
    221
], [
    240,
    98
], [
    98,
    99
], [
    99,
    240
], [
    142,
    126
], [
    126,
    100
], [
    100,
    142
], [
    219,
    166
], [
    166,
    218
], [
    218,
    219
], [
    112,
    155
], [
    155,
    26
], [
    26,
    112
], [
    198,
    209
], [
    209,
    131
], [
    131,
    198
], [
    169,
    135
], [
    135,
    150
], [
    150,
    169
], [
    114,
    47
], [
    47,
    217
], [
    217,
    114
], [
    224,
    223
], [
    223,
    53
], [
    53,
    224
], [
    220,
    45
], [
    45,
    134
], [
    134,
    220
], [
    32,
    211
], [
    211,
    140
], [
    140,
    32
], [
    109,
    67
], [
    67,
    108
], [
    108,
    109
], [
    146,
    43
], [
    43,
    91
], [
    91,
    146
], [
    231,
    230
], [
    230,
    120
], [
    120,
    231
], [
    113,
    226
], [
    226,
    247
], [
    247,
    113
], [
    105,
    63
], [
    63,
    52
], [
    52,
    105
], [
    241,
    238
], [
    238,
    242
], [
    242,
    241
], [
    124,
    46
], [
    46,
    156
], [
    156,
    124
], [
    95,
    78
], [
    78,
    96
], [
    96,
    95
], [
    70,
    46
], [
    46,
    63
], [
    63,
    70
], [
    116,
    143
], [
    143,
    227
], [
    227,
    116
], [
    116,
    123
], [
    123,
    111
], [
    111,
    116
], [
    1,
    44
], [
    44,
    19
], [
    19,
    1
], [
    3,
    236
], [
    236,
    51
], [
    51,
    3
], [
    207,
    216
], [
    216,
    205
], [
    205,
    207
], [
    26,
    154
], [
    154,
    22
], [
    22,
    26
], [
    165,
    39
], [
    39,
    167
], [
    167,
    165
], [
    199,
    200
], [
    200,
    208
], [
    208,
    199
], [
    101,
    36
], [
    36,
    100
], [
    100,
    101
], [
    43,
    57
], [
    57,
    202
], [
    202,
    43
], [
    242,
    20
], [
    20,
    99
], [
    99,
    242
], [
    56,
    28
], [
    28,
    157
], [
    157,
    56
], [
    124,
    35
], [
    35,
    113
], [
    113,
    124
], [
    29,
    160
], [
    160,
    27
], [
    27,
    29
], [
    211,
    204
], [
    204,
    210
], [
    210,
    211
], [
    124,
    113
], [
    113,
    46
], [
    46,
    124
], [
    106,
    43
], [
    43,
    204
], [
    204,
    106
], [
    96,
    62
], [
    62,
    77
], [
    77,
    96
], [
    227,
    137
], [
    137,
    116
], [
    116,
    227
], [
    73,
    41
], [
    41,
    72
], [
    72,
    73
], [
    36,
    203
], [
    203,
    142
], [
    142,
    36
], [
    235,
    64
], [
    64,
    240
], [
    240,
    235
], [
    48,
    49
], [
    49,
    64
], [
    64,
    48
], [
    42,
    41
], [
    41,
    74
], [
    74,
    42
], [
    214,
    212
], [
    212,
    207
], [
    207,
    214
], [
    183,
    42
], [
    42,
    184
], [
    184,
    183
], [
    210,
    169
], [
    169,
    211
], [
    211,
    210
], [
    140,
    170
], [
    170,
    176
], [
    176,
    140
], [
    104,
    105
], [
    105,
    69
], [
    69,
    104
], [
    193,
    122
], [
    122,
    168
], [
    168,
    193
], [
    50,
    123
], [
    123,
    187
], [
    187,
    50
], [
    89,
    96
], [
    96,
    90
], [
    90,
    89
], [
    66,
    65
], [
    65,
    107
], [
    107,
    66
], [
    179,
    89
], [
    89,
    180
], [
    180,
    179
], [
    119,
    101
], [
    101,
    120
], [
    120,
    119
], [
    68,
    63
], [
    63,
    104
], [
    104,
    68
], [
    234,
    93
], [
    93,
    227
], [
    227,
    234
], [
    16,
    15
], [
    15,
    85
], [
    85,
    16
], [
    209,
    129
], [
    129,
    49
], [
    49,
    209
], [
    15,
    14
], [
    14,
    86
], [
    86,
    15
], [
    107,
    55
], [
    55,
    9
], [
    9,
    107
], [
    120,
    100
], [
    100,
    121
], [
    121,
    120
], [
    153,
    145
], [
    145,
    22
], [
    22,
    153
], [
    178,
    88
], [
    88,
    179
], [
    179,
    178
], [
    197,
    6
], [
    6,
    196
], [
    196,
    197
], [
    89,
    88
], [
    88,
    96
], [
    96,
    89
], [
    135,
    138
], [
    138,
    136
], [
    136,
    135
], [
    138,
    215
], [
    215,
    172
], [
    172,
    138
], [
    218,
    115
], [
    115,
    219
], [
    219,
    218
], [
    41,
    42
], [
    42,
    81
], [
    81,
    41
], [
    5,
    195
], [
    195,
    51
], [
    51,
    5
], [
    57,
    43
], [
    43,
    61
], [
    61,
    57
], [
    208,
    171
], [
    171,
    199
], [
    199,
    208
], [
    41,
    81
], [
    81,
    38
], [
    38,
    41
], [
    224,
    53
], [
    53,
    225
], [
    225,
    224
], [
    24,
    144
], [
    144,
    110
], [
    110,
    24
], [
    105,
    52
], [
    52,
    66
], [
    66,
    105
], [
    118,
    229
], [
    229,
    117
], [
    117,
    118
], [
    227,
    34
], [
    34,
    234
], [
    234,
    227
], [
    66,
    107
], [
    107,
    69
], [
    69,
    66
], [
    10,
    109
], [
    109,
    151
], [
    151,
    10
], [
    219,
    48
], [
    48,
    235
], [
    235,
    219
], [
    183,
    62
], [
    62,
    191
], [
    191,
    183
], [
    142,
    129
], [
    129,
    126
], [
    126,
    142
], [
    116,
    111
], [
    111,
    143
], [
    143,
    116
], [
    118,
    117
], [
    117,
    50
], [
    50,
    118
], [
    223,
    222
], [
    222,
    52
], [
    52,
    223
], [
    94,
    19
], [
    19,
    141
], [
    141,
    94
], [
    222,
    221
], [
    221,
    65
], [
    65,
    222
], [
    196,
    3
], [
    3,
    197
], [
    197,
    196
], [
    45,
    220
], [
    220,
    44
], [
    44,
    45
], [
    156,
    70
], [
    70,
    139
], [
    139,
    156
], [
    188,
    122
], [
    122,
    245
], [
    245,
    188
], [
    139,
    71
], [
    71,
    162
], [
    162,
    139
], [
    149,
    170
], [
    170,
    150
], [
    150,
    149
], [
    122,
    188
], [
    188,
    196
], [
    196,
    122
], [
    206,
    216
], [
    216,
    92
], [
    92,
    206
], [
    164,
    2
], [
    2,
    167
], [
    167,
    164
], [
    242,
    141
], [
    141,
    241
], [
    241,
    242
], [
    0,
    164
], [
    164,
    37
], [
    37,
    0
], [
    11,
    72
], [
    72,
    12
], [
    12,
    11
], [
    12,
    38
], [
    38,
    13
], [
    13,
    12
], [
    70,
    63
], [
    63,
    71
], [
    71,
    70
], [
    31,
    226
], [
    226,
    111
], [
    111,
    31
], [
    36,
    101
], [
    101,
    205
], [
    205,
    36
], [
    203,
    206
], [
    206,
    165
], [
    165,
    203
], [
    126,
    209
], [
    209,
    217
], [
    217,
    126
], [
    98,
    165
], [
    165,
    97
], [
    97,
    98
], [
    237,
    220
], [
    220,
    218
], [
    218,
    237
], [
    237,
    239
], [
    239,
    241
], [
    241,
    237
], [
    210,
    214
], [
    214,
    169
], [
    169,
    210
], [
    140,
    171
], [
    171,
    32
], [
    32,
    140
], [
    241,
    125
], [
    125,
    237
], [
    237,
    241
], [
    179,
    86
], [
    86,
    178
], [
    178,
    179
], [
    180,
    85
], [
    85,
    179
], [
    179,
    180
], [
    181,
    84
], [
    84,
    180
], [
    180,
    181
], [
    182,
    83
], [
    83,
    181
], [
    181,
    182
], [
    194,
    201
], [
    201,
    182
], [
    182,
    194
], [
    177,
    137
], [
    137,
    132
], [
    132,
    177
], [
    184,
    76
], [
    76,
    183
], [
    183,
    184
], [
    185,
    61
], [
    61,
    184
], [
    184,
    185
], [
    186,
    57
], [
    57,
    185
], [
    185,
    186
], [
    216,
    212
], [
    212,
    186
], [
    186,
    216
], [
    192,
    214
], [
    214,
    187
], [
    187,
    192
], [
    139,
    34
], [
    34,
    156
], [
    156,
    139
], [
    218,
    79
], [
    79,
    237
], [
    237,
    218
], [
    147,
    123
], [
    123,
    177
], [
    177,
    147
], [
    45,
    44
], [
    44,
    4
], [
    4,
    45
], [
    208,
    201
], [
    201,
    32
], [
    32,
    208
], [
    98,
    64
], [
    64,
    129
], [
    129,
    98
], [
    192,
    213
], [
    213,
    138
], [
    138,
    192
], [
    235,
    59
], [
    59,
    219
], [
    219,
    235
], [
    141,
    242
], [
    242,
    97
], [
    97,
    141
], [
    97,
    2
], [
    2,
    141
], [
    141,
    97
], [
    240,
    75
], [
    75,
    235
], [
    235,
    240
], [
    229,
    24
], [
    24,
    228
], [
    228,
    229
], [
    31,
    25
], [
    25,
    226
], [
    226,
    31
], [
    230,
    23
], [
    23,
    229
], [
    229,
    230
], [
    231,
    22
], [
    22,
    230
], [
    230,
    231
], [
    232,
    26
], [
    26,
    231
], [
    231,
    232
], [
    233,
    112
], [
    112,
    232
], [
    232,
    233
], [
    244,
    189
], [
    189,
    243
], [
    243,
    244
], [
    189,
    221
], [
    221,
    190
], [
    190,
    189
], [
    222,
    28
], [
    28,
    221
], [
    221,
    222
], [
    223,
    27
], [
    27,
    222
], [
    222,
    223
], [
    224,
    29
], [
    29,
    223
], [
    223,
    224
], [
    225,
    30
], [
    30,
    224
], [
    224,
    225
], [
    113,
    247
], [
    247,
    225
], [
    225,
    113
], [
    99,
    60
], [
    60,
    240
], [
    240,
    99
], [
    213,
    147
], [
    147,
    215
], [
    215,
    213
], [
    60,
    20
], [
    20,
    166
], [
    166,
    60
], [
    192,
    187
], [
    187,
    213
], [
    213,
    192
], [
    243,
    112
], [
    112,
    244
], [
    244,
    243
], [
    244,
    233
], [
    233,
    245
], [
    245,
    244
], [
    245,
    128
], [
    128,
    188
], [
    188,
    245
], [
    188,
    114
], [
    114,
    174
], [
    174,
    188
], [
    134,
    131
], [
    131,
    220
], [
    220,
    134
], [
    174,
    217
], [
    217,
    236
], [
    236,
    174
], [
    236,
    198
], [
    198,
    134
], [
    134,
    236
], [
    215,
    177
], [
    177,
    58
], [
    58,
    215
], [
    156,
    143
], [
    143,
    124
], [
    124,
    156
], [
    25,
    110
], [
    110,
    7
], [
    7,
    25
], [
    31,
    228
], [
    228,
    25
], [
    25,
    31
], [
    264,
    356
], [
    356,
    368
], [
    368,
    264
], [
    0,
    11
], [
    11,
    267
], [
    267,
    0
], [
    451,
    452
], [
    452,
    349
], [
    349,
    451
], [
    267,
    302
], [
    302,
    269
], [
    269,
    267
], [
    350,
    357
], [
    357,
    277
], [
    277,
    350
], [
    350,
    452
], [
    452,
    357
], [
    357,
    350
], [
    299,
    333
], [
    333,
    297
], [
    297,
    299
], [
    396,
    175
], [
    175,
    377
], [
    377,
    396
], [
    280,
    347
], [
    347,
    330
], [
    330,
    280
], [
    269,
    303
], [
    303,
    270
], [
    270,
    269
], [
    151,
    9
], [
    9,
    337
], [
    337,
    151
], [
    344,
    278
], [
    278,
    360
], [
    360,
    344
], [
    424,
    418
], [
    418,
    431
], [
    431,
    424
], [
    270,
    304
], [
    304,
    409
], [
    409,
    270
], [
    272,
    310
], [
    310,
    407
], [
    407,
    272
], [
    322,
    270
], [
    270,
    410
], [
    410,
    322
], [
    449,
    450
], [
    450,
    347
], [
    347,
    449
], [
    432,
    422
], [
    422,
    434
], [
    434,
    432
], [
    18,
    313
], [
    313,
    17
], [
    17,
    18
], [
    291,
    306
], [
    306,
    375
], [
    375,
    291
], [
    259,
    387
], [
    387,
    260
], [
    260,
    259
], [
    424,
    335
], [
    335,
    418
], [
    418,
    424
], [
    434,
    364
], [
    364,
    416
], [
    416,
    434
], [
    391,
    423
], [
    423,
    327
], [
    327,
    391
], [
    301,
    251
], [
    251,
    298
], [
    298,
    301
], [
    275,
    281
], [
    281,
    4
], [
    4,
    275
], [
    254,
    373
], [
    373,
    253
], [
    253,
    254
], [
    375,
    307
], [
    307,
    321
], [
    321,
    375
], [
    280,
    425
], [
    425,
    411
], [
    411,
    280
], [
    200,
    421
], [
    421,
    18
], [
    18,
    200
], [
    335,
    321
], [
    321,
    406
], [
    406,
    335
], [
    321,
    320
], [
    320,
    405
], [
    405,
    321
], [
    314,
    315
], [
    315,
    17
], [
    17,
    314
], [
    423,
    426
], [
    426,
    266
], [
    266,
    423
], [
    396,
    377
], [
    377,
    369
], [
    369,
    396
], [
    270,
    322
], [
    322,
    269
], [
    269,
    270
], [
    413,
    417
], [
    417,
    464
], [
    464,
    413
], [
    385,
    386
], [
    386,
    258
], [
    258,
    385
], [
    248,
    456
], [
    456,
    419
], [
    419,
    248
], [
    298,
    284
], [
    284,
    333
], [
    333,
    298
], [
    168,
    417
], [
    417,
    8
], [
    8,
    168
], [
    448,
    346
], [
    346,
    261
], [
    261,
    448
], [
    417,
    413
], [
    413,
    285
], [
    285,
    417
], [
    326,
    327
], [
    327,
    328
], [
    328,
    326
], [
    277,
    355
], [
    355,
    329
], [
    329,
    277
], [
    309,
    392
], [
    392,
    438
], [
    438,
    309
], [
    381,
    382
], [
    382,
    256
], [
    256,
    381
], [
    279,
    429
], [
    429,
    360
], [
    360,
    279
], [
    365,
    364
], [
    364,
    379
], [
    379,
    365
], [
    355,
    277
], [
    277,
    437
], [
    437,
    355
], [
    282,
    443
], [
    443,
    283
], [
    283,
    282
], [
    281,
    275
], [
    275,
    363
], [
    363,
    281
], [
    395,
    431
], [
    431,
    369
], [
    369,
    395
], [
    299,
    297
], [
    297,
    337
], [
    337,
    299
], [
    335,
    273
], [
    273,
    321
], [
    321,
    335
], [
    348,
    450
], [
    450,
    349
], [
    349,
    348
], [
    359,
    446
], [
    446,
    467
], [
    467,
    359
], [
    283,
    293
], [
    293,
    282
], [
    282,
    283
], [
    250,
    458
], [
    458,
    462
], [
    462,
    250
], [
    300,
    276
], [
    276,
    383
], [
    383,
    300
], [
    292,
    308
], [
    308,
    325
], [
    325,
    292
], [
    283,
    276
], [
    276,
    293
], [
    293,
    283
], [
    264,
    372
], [
    372,
    447
], [
    447,
    264
], [
    346,
    352
], [
    352,
    340
], [
    340,
    346
], [
    354,
    274
], [
    274,
    19
], [
    19,
    354
], [
    363,
    456
], [
    456,
    281
], [
    281,
    363
], [
    426,
    436
], [
    436,
    425
], [
    425,
    426
], [
    380,
    381
], [
    381,
    252
], [
    252,
    380
], [
    267,
    269
], [
    269,
    393
], [
    393,
    267
], [
    421,
    200
], [
    200,
    428
], [
    428,
    421
], [
    371,
    266
], [
    266,
    329
], [
    329,
    371
], [
    432,
    287
], [
    287,
    422
], [
    422,
    432
], [
    290,
    250
], [
    250,
    328
], [
    328,
    290
], [
    385,
    258
], [
    258,
    384
], [
    384,
    385
], [
    446,
    265
], [
    265,
    342
], [
    342,
    446
], [
    386,
    387
], [
    387,
    257
], [
    257,
    386
], [
    422,
    424
], [
    424,
    430
], [
    430,
    422
], [
    445,
    342
], [
    342,
    276
], [
    276,
    445
], [
    422,
    273
], [
    273,
    424
], [
    424,
    422
], [
    306,
    292
], [
    292,
    307
], [
    307,
    306
], [
    352,
    366
], [
    366,
    345
], [
    345,
    352
], [
    268,
    271
], [
    271,
    302
], [
    302,
    268
], [
    358,
    423
], [
    423,
    371
], [
    371,
    358
], [
    327,
    294
], [
    294,
    460
], [
    460,
    327
], [
    331,
    279
], [
    279,
    294
], [
    294,
    331
], [
    303,
    271
], [
    271,
    304
], [
    304,
    303
], [
    436,
    432
], [
    432,
    427
], [
    427,
    436
], [
    304,
    272
], [
    272,
    408
], [
    408,
    304
], [
    395,
    394
], [
    394,
    431
], [
    431,
    395
], [
    378,
    395
], [
    395,
    400
], [
    400,
    378
], [
    296,
    334
], [
    334,
    299
], [
    299,
    296
], [
    6,
    351
], [
    351,
    168
], [
    168,
    6
], [
    376,
    352
], [
    352,
    411
], [
    411,
    376
], [
    307,
    325
], [
    325,
    320
], [
    320,
    307
], [
    285,
    295
], [
    295,
    336
], [
    336,
    285
], [
    320,
    319
], [
    319,
    404
], [
    404,
    320
], [
    329,
    330
], [
    330,
    349
], [
    349,
    329
], [
    334,
    293
], [
    293,
    333
], [
    333,
    334
], [
    366,
    323
], [
    323,
    447
], [
    447,
    366
], [
    316,
    15
], [
    15,
    315
], [
    315,
    316
], [
    331,
    358
], [
    358,
    279
], [
    279,
    331
], [
    317,
    14
], [
    14,
    316
], [
    316,
    317
], [
    8,
    285
], [
    285,
    9
], [
    9,
    8
], [
    277,
    329
], [
    329,
    350
], [
    350,
    277
], [
    253,
    374
], [
    374,
    252
], [
    252,
    253
], [
    319,
    318
], [
    318,
    403
], [
    403,
    319
], [
    351,
    6
], [
    6,
    419
], [
    419,
    351
], [
    324,
    318
], [
    318,
    325
], [
    325,
    324
], [
    397,
    367
], [
    367,
    365
], [
    365,
    397
], [
    288,
    435
], [
    435,
    397
], [
    397,
    288
], [
    278,
    344
], [
    344,
    439
], [
    439,
    278
], [
    310,
    272
], [
    272,
    311
], [
    311,
    310
], [
    248,
    195
], [
    195,
    281
], [
    281,
    248
], [
    375,
    273
], [
    273,
    291
], [
    291,
    375
], [
    175,
    396
], [
    396,
    199
], [
    199,
    175
], [
    312,
    311
], [
    311,
    268
], [
    268,
    312
], [
    276,
    283
], [
    283,
    445
], [
    445,
    276
], [
    390,
    373
], [
    373,
    339
], [
    339,
    390
], [
    295,
    282
], [
    282,
    296
], [
    296,
    295
], [
    448,
    449
], [
    449,
    346
], [
    346,
    448
], [
    356,
    264
], [
    264,
    454
], [
    454,
    356
], [
    337,
    336
], [
    336,
    299
], [
    299,
    337
], [
    337,
    338
], [
    338,
    151
], [
    151,
    337
], [
    294,
    278
], [
    278,
    455
], [
    455,
    294
], [
    308,
    292
], [
    292,
    415
], [
    415,
    308
], [
    429,
    358
], [
    358,
    355
], [
    355,
    429
], [
    265,
    340
], [
    340,
    372
], [
    372,
    265
], [
    352,
    346
], [
    346,
    280
], [
    280,
    352
], [
    295,
    442
], [
    442,
    282
], [
    282,
    295
], [
    354,
    19
], [
    19,
    370
], [
    370,
    354
], [
    285,
    441
], [
    441,
    295
], [
    295,
    285
], [
    195,
    248
], [
    248,
    197
], [
    197,
    195
], [
    457,
    440
], [
    440,
    274
], [
    274,
    457
], [
    301,
    300
], [
    300,
    368
], [
    368,
    301
], [
    417,
    351
], [
    351,
    465
], [
    465,
    417
], [
    251,
    301
], [
    301,
    389
], [
    389,
    251
], [
    394,
    395
], [
    395,
    379
], [
    379,
    394
], [
    399,
    412
], [
    412,
    419
], [
    419,
    399
], [
    410,
    436
], [
    436,
    322
], [
    322,
    410
], [
    326,
    2
], [
    2,
    393
], [
    393,
    326
], [
    354,
    370
], [
    370,
    461
], [
    461,
    354
], [
    393,
    164
], [
    164,
    267
], [
    267,
    393
], [
    268,
    302
], [
    302,
    12
], [
    12,
    268
], [
    312,
    268
], [
    268,
    13
], [
    13,
    312
], [
    298,
    293
], [
    293,
    301
], [
    301,
    298
], [
    265,
    446
], [
    446,
    340
], [
    340,
    265
], [
    280,
    330
], [
    330,
    425
], [
    425,
    280
], [
    322,
    426
], [
    426,
    391
], [
    391,
    322
], [
    420,
    429
], [
    429,
    437
], [
    437,
    420
], [
    393,
    391
], [
    391,
    326
], [
    326,
    393
], [
    344,
    440
], [
    440,
    438
], [
    438,
    344
], [
    458,
    459
], [
    459,
    461
], [
    461,
    458
], [
    364,
    434
], [
    434,
    394
], [
    394,
    364
], [
    428,
    396
], [
    396,
    262
], [
    262,
    428
], [
    274,
    354
], [
    354,
    457
], [
    457,
    274
], [
    317,
    316
], [
    316,
    402
], [
    402,
    317
], [
    316,
    315
], [
    315,
    403
], [
    403,
    316
], [
    315,
    314
], [
    314,
    404
], [
    404,
    315
], [
    314,
    313
], [
    313,
    405
], [
    405,
    314
], [
    313,
    421
], [
    421,
    406
], [
    406,
    313
], [
    323,
    366
], [
    366,
    361
], [
    361,
    323
], [
    292,
    306
], [
    306,
    407
], [
    407,
    292
], [
    306,
    291
], [
    291,
    408
], [
    408,
    306
], [
    291,
    287
], [
    287,
    409
], [
    409,
    291
], [
    287,
    432
], [
    432,
    410
], [
    410,
    287
], [
    427,
    434
], [
    434,
    411
], [
    411,
    427
], [
    372,
    264
], [
    264,
    383
], [
    383,
    372
], [
    459,
    309
], [
    309,
    457
], [
    457,
    459
], [
    366,
    352
], [
    352,
    401
], [
    401,
    366
], [
    1,
    274
], [
    274,
    4
], [
    4,
    1
], [
    418,
    421
], [
    421,
    262
], [
    262,
    418
], [
    331,
    294
], [
    294,
    358
], [
    358,
    331
], [
    435,
    433
], [
    433,
    367
], [
    367,
    435
], [
    392,
    289
], [
    289,
    439
], [
    439,
    392
], [
    328,
    462
], [
    462,
    326
], [
    326,
    328
], [
    94,
    2
], [
    2,
    370
], [
    370,
    94
], [
    289,
    305
], [
    305,
    455
], [
    455,
    289
], [
    339,
    254
], [
    254,
    448
], [
    448,
    339
], [
    359,
    255
], [
    255,
    446
], [
    446,
    359
], [
    254,
    253
], [
    253,
    449
], [
    449,
    254
], [
    253,
    252
], [
    252,
    450
], [
    450,
    253
], [
    252,
    256
], [
    256,
    451
], [
    451,
    252
], [
    256,
    341
], [
    341,
    452
], [
    452,
    256
], [
    414,
    413
], [
    413,
    463
], [
    463,
    414
], [
    286,
    441
], [
    441,
    414
], [
    414,
    286
], [
    286,
    258
], [
    258,
    441
], [
    441,
    286
], [
    258,
    257
], [
    257,
    442
], [
    442,
    258
], [
    257,
    259
], [
    259,
    443
], [
    443,
    257
], [
    259,
    260
], [
    260,
    444
], [
    444,
    259
], [
    260,
    467
], [
    467,
    445
], [
    445,
    260
], [
    309,
    459
], [
    459,
    250
], [
    250,
    309
], [
    305,
    289
], [
    289,
    290
], [
    290,
    305
], [
    305,
    290
], [
    290,
    460
], [
    460,
    305
], [
    401,
    376
], [
    376,
    435
], [
    435,
    401
], [
    309,
    250
], [
    250,
    392
], [
    392,
    309
], [
    376,
    411
], [
    411,
    433
], [
    433,
    376
], [
    453,
    341
], [
    341,
    464
], [
    464,
    453
], [
    357,
    453
], [
    453,
    465
], [
    465,
    357
], [
    343,
    357
], [
    357,
    412
], [
    412,
    343
], [
    437,
    343
], [
    343,
    399
], [
    399,
    437
], [
    344,
    360
], [
    360,
    440
], [
    440,
    344
], [
    420,
    437
], [
    437,
    456
], [
    456,
    420
], [
    360,
    420
], [
    420,
    363
], [
    363,
    360
], [
    361,
    401
], [
    401,
    288
], [
    288,
    361
], [
    265,
    372
], [
    372,
    353
], [
    353,
    265
], [
    390,
    339
], [
    339,
    249
], [
    249,
    390
], [
    339,
    448
], [
    448,
    255
], [
    255,
    339
]);
function oc(t) {
    t.j = {
        faceLandmarks: [],
        faceBlendshapes: [],
        facialTransformationMatrixes: []
    };
}
var ac = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !1), this.j = {
            faceLandmarks: [],
            faceBlendshapes: [],
            facialTransformationMatrixes: []
        }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, Fn(t = this.h = new Ds, 0, 1, e = new ks), this.v = new Ps, Fn(this.h, 0, 3, this.v), this.u = new Ls, Fn(this.h, 0, 2, this.u), Nn(this.u, 4, 1), Gn(this.u, 2, .5), Gn(this.v, 2, .5), Gn(this.h, 4, .5);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return "numFaces" in t && Nn(this.u, 4, t.numFaces ?? 1), "minFaceDetectionConfidence" in t && Gn(this.u, 2, t.minFaceDetectionConfidence ?? .5), "minTrackingConfidence" in t && Gn(this.h, 4, t.minTrackingConfidence ?? .5), "minFacePresenceConfidence" in t && Gn(this.v, 2, t.minFacePresenceConfidence ?? .5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t && (this.outputFacialTransformationMatrixes = !!t.outputFacialTransformationMatrixes), this.l(t);
    }
    G(t, e) {
        return oc(this), Wa(this, t, e), this.j;
    }
    H(t, e, n) {
        return oc(this), Ha(this, t, n, e), this.j;
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect"), Ri(t, "face_landmarks");
        const e = new ui;
        jn(e, Ns, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), wi(n, "NORM_LANDMARKS:face_landmarks"), n.o(e), Si(t, n), this.g.attachProtoVectorListener("face_landmarks", (t, e)=>{
            for (const e of t)t = rs(e), this.j.faceLandmarks.push(ko(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t)=>{
            Wo(this, t);
        }), this.outputFaceBlendshapes && (Ri(t, "blendshapes"), wi(n, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t, e)=>{
            if (this.outputFaceBlendshapes) for (const e of t)t = Bi(e), this.j.faceBlendshapes.push(Ao(t.g() ?? []));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("blendshapes", (t)=>{
            Wo(this, t);
        })), this.outputFacialTransformationMatrixes && (Ri(t, "face_geometry"), wi(n, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t, e)=>{
            if (this.outputFacialTransformationMatrixes) for (const e of t)(t = Sn(Is(e), is, 2)) && this.j.facialTransformationMatrixes.push({
                rows: Un(Cn(t, 1)) ?? 0,
                columns: Un(Cn(t, 2)) ?? 0,
                data: dn(t, 3, we) ?? []
            });
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("face_geometry", (t)=>{
            Wo(this, t);
        })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
ac.prototype.detectForVideo = ac.prototype.H, ac.prototype.detect = ac.prototype.G, ac.prototype.setOptions = ac.prototype.o, ac.createFromModelPath = function(t, e) {
    return Xa(ac, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, ac.createFromModelBuffer = function(t, e) {
    return Xa(ac, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, ac.createFromOptions = function(t, e) {
    return Xa(ac, t, e);
}, ac.FACE_LANDMARKS_LIPS = qa, ac.FACE_LANDMARKS_LEFT_EYE = Ja, ac.FACE_LANDMARKS_LEFT_EYEBROW = Za, ac.FACE_LANDMARKS_LEFT_IRIS = Qa, ac.FACE_LANDMARKS_RIGHT_EYE = tc, ac.FACE_LANDMARKS_RIGHT_EYEBROW = ec, ac.FACE_LANDMARKS_RIGHT_IRIS = nc, ac.FACE_LANDMARKS_FACE_OVAL = rc, ac.FACE_LANDMARKS_CONTOURS = ic, ac.FACE_LANDMARKS_TESSELATION = sc;
var cc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !0), Fn(t = this.j = new Gs, 0, 1, e = new ks);
    }
    get baseOptions() {
        return Sn(this.j, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.j, 0, 1, t);
    }
    o(t) {
        return super.l(t);
    }
    Ua(t, e, n) {
        const r = "function" != typeof e ? e : {};
        if (this.h = "function" == typeof e ? e : n, Wa(this, t, r ?? {}), !this.h) return this.u;
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect"), Ri(t, "stylized_image");
        const e = new ui;
        jn(e, js, this.j);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), wi(n, "STYLIZED_IMAGE:stylized_image"), n.o(e), Si(t, n), this.g.ba("stylized_image", (t, e)=>{
            var n = !this.h, r = t.data, i = t.width;
            const s = i * (t = t.height);
            if (r instanceof Uint8Array) {
                if (r.length === 3 * s) {
                    const e = new Uint8ClampedArray(4 * s);
                    for(let t = 0; t < s; ++t)e[4 * t] = r[3 * t], e[4 * t + 1] = r[3 * t + 1], e[4 * t + 2] = r[3 * t + 2], e[4 * t + 3] = 255;
                    r = new ImageData(e, i, t);
                } else {
                    if (r.length !== 4 * s) throw Error("Unsupported channel count: " + r.length / s);
                    r = new ImageData(new Uint8ClampedArray(r.buffer, r.byteOffset, r.length), i, t);
                }
            } else if (!(r instanceof WebGLTexture)) throw Error(`Unsupported format: ${r.constructor.name}`);
            i = new Da([
                r
            ], !1, !1, this.g.i.canvas, this.M, i, t), this.u = n = n ? i.clone() : i, this.h && this.h(n), Wo(this, e);
        }), this.g.attachEmptyPacketListener("stylized_image", (t)=>{
            this.u = null, this.h && this.h(null), Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
cc.prototype.stylize = cc.prototype.Ua, cc.prototype.setOptions = cc.prototype.o, cc.createFromModelPath = function(t, e) {
    return Xa(cc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, cc.createFromModelBuffer = function(t, e) {
    return Xa(cc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, cc.createFromOptions = function(t, e) {
    return Xa(cc, t, e);
};
var hc = Na([
    0,
    1
], [
    1,
    2
], [
    2,
    3
], [
    3,
    4
], [
    0,
    5
], [
    5,
    6
], [
    6,
    7
], [
    7,
    8
], [
    5,
    9
], [
    9,
    10
], [
    10,
    11
], [
    11,
    12
], [
    9,
    13
], [
    13,
    14
], [
    14,
    15
], [
    15,
    16
], [
    13,
    17
], [
    0,
    17
], [
    17,
    18
], [
    18,
    19
], [
    19,
    20
]);
function uc(t) {
    t.gestures = [], t.landmarks = [], t.worldLandmarks = [], t.handedness = [];
}
function lc(t) {
    return 0 === t.gestures.length ? {
        gestures: [],
        landmarks: [],
        worldLandmarks: [],
        handedness: [],
        handednesses: []
    } : {
        gestures: t.gestures,
        landmarks: t.landmarks,
        worldLandmarks: t.worldLandmarks,
        handedness: t.handedness,
        handednesses: t.handedness
    };
}
function fc(t, e = !0) {
    const n = [];
    for (const i of t){
        var r = Bi(i);
        t = [];
        for (const n of r.g())r = e && null != Cn(n, 1) ? Un(Cn(n, 1)) : -1, t.push({
            score: Dn(n, 2) ?? 0,
            index: r,
            categoryName: Pn(n, 3) ?? "" ?? "",
            displayName: Pn(n, 4) ?? "" ?? ""
        });
        n.push(t);
    }
    return n;
}
var dc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Fn(t = this.v = new Qs, 0, 1, e = new ks), this.B = new Js, Fn(this.v, 0, 2, this.B), this.u = new $s, Fn(this.B, 0, 3, this.u), this.h = new Ys, Fn(this.B, 0, 2, this.h), this.j = new Ws, Fn(this.v, 0, 3, this.j), Gn(this.h, 2, .5), Gn(this.B, 4, .5), Gn(this.u, 2, .5);
    }
    get baseOptions() {
        return Sn(this.v, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.v, 0, 1, t);
    }
    o(t) {
        if (Nn(this.h, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && Gn(this.h, 2, t.minHandDetectionConfidence ?? .5), "minTrackingConfidence" in t && Gn(this.B, 4, t.minTrackingConfidence ?? .5), "minHandPresenceConfidence" in t && Gn(this.u, 2, t.minHandPresenceConfidence ?? .5), t.cannedGesturesClassifierOptions) {
            var e = new Vs, n = e, r = bo(t.cannedGesturesClassifierOptions, Sn(this.j, Vs, 3)?.h());
            Fn(n, 0, 2, r), Fn(this.j, 0, 3, e);
        } else void 0 === t.cannedGesturesClassifierOptions && Sn(this.j, Vs, 3)?.g();
        return t.customGesturesClassifierOptions ? (Fn(n = e = new Vs, 0, 2, r = bo(t.customGesturesClassifierOptions, Sn(this.j, Vs, 4)?.h())), Fn(this.j, 0, 4, e)) : void 0 === t.customGesturesClassifierOptions && Sn(this.j, Vs, 4)?.g(), this.l(t);
    }
    Pa(t, e) {
        return uc(this), Wa(this, t, e), lc(this);
    }
    Qa(t, e, n) {
        return uc(this), Ha(this, t, n, e), lc(this);
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect"), Ri(t, "hand_gestures"), Ri(t, "hand_landmarks"), Ri(t, "world_hand_landmarks"), Ri(t, "handedness");
        const e = new ui;
        jn(e, no, this.v);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), wi(n, "HAND_GESTURES:hand_gestures"), wi(n, "LANDMARKS:hand_landmarks"), wi(n, "WORLD_LANDMARKS:world_hand_landmarks"), wi(n, "HANDEDNESS:handedness"), n.o(e), Si(t, n), this.g.attachProtoVectorListener("hand_landmarks", (t, e)=>{
            for (const e of t){
                t = rs(e);
                const n = [];
                for (const e of Rn(t, ts, 1))n.push({
                    x: Dn(e, 1) ?? 0,
                    y: Dn(e, 2) ?? 0,
                    z: Dn(e, 3) ?? 0
                });
                this.landmarks.push(n);
            }
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t)=>{
            Wo(this, t);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t, e)=>{
            for (const e of t){
                t = Qi(e);
                const n = [];
                for (const e of Rn(t, qi, 1))n.push({
                    x: Dn(e, 1) ?? 0,
                    y: Dn(e, 2) ?? 0,
                    z: Dn(e, 3) ?? 0
                });
                this.worldLandmarks.push(n);
            }
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t)=>{
            Wo(this, t);
        }), this.g.attachProtoVectorListener("hand_gestures", (t, e)=>{
            this.gestures.push(...fc(t, !1)), Wo(this, e);
        }), this.g.attachEmptyPacketListener("hand_gestures", (t)=>{
            Wo(this, t);
        }), this.g.attachProtoVectorListener("handedness", (t, e)=>{
            this.handedness.push(...fc(t)), Wo(this, e);
        }), this.g.attachEmptyPacketListener("handedness", (t)=>{
            Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
function pc(t) {
    return {
        landmarks: t.landmarks,
        worldLandmarks: t.worldLandmarks,
        handednesses: t.handedness,
        handedness: t.handedness
    };
}
dc.prototype.recognizeForVideo = dc.prototype.Qa, dc.prototype.recognize = dc.prototype.Pa, dc.prototype.setOptions = dc.prototype.o, dc.createFromModelPath = function(t, e) {
    return Xa(dc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, dc.createFromModelBuffer = function(t, e) {
    return Xa(dc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, dc.createFromOptions = function(t, e) {
    return Xa(dc, t, e);
}, dc.HAND_CONNECTIONS = hc;
var gc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Fn(t = this.j = new Js, 0, 1, e = new ks), this.u = new $s, Fn(this.j, 0, 3, this.u), this.h = new Ys, Fn(this.j, 0, 2, this.h), Nn(this.h, 3, 1), Gn(this.h, 2, .5), Gn(this.u, 2, .5), Gn(this.j, 4, .5);
    }
    get baseOptions() {
        return Sn(this.j, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.j, 0, 1, t);
    }
    o(t) {
        return "numHands" in t && Nn(this.h, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && Gn(this.h, 2, t.minHandDetectionConfidence ?? .5), "minTrackingConfidence" in t && Gn(this.j, 4, t.minTrackingConfidence ?? .5), "minHandPresenceConfidence" in t && Gn(this.u, 2, t.minHandPresenceConfidence ?? .5), this.l(t);
    }
    G(t, e) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Wa(this, t, e), pc(this);
    }
    H(t, e, n) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ha(this, t, n, e), pc(this);
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect"), Ri(t, "hand_landmarks"), Ri(t, "world_hand_landmarks"), Ri(t, "handedness");
        const e = new ui;
        jn(e, eo, this.j);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), wi(n, "LANDMARKS:hand_landmarks"), wi(n, "WORLD_LANDMARKS:world_hand_landmarks"), wi(n, "HANDEDNESS:handedness"), n.o(e), Si(t, n), this.g.attachProtoVectorListener("hand_landmarks", (t, e)=>{
            for (const e of t)t = rs(e), this.landmarks.push(ko(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t)=>{
            Wo(this, t);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t, e)=>{
            for (const e of t)t = Qi(e), this.worldLandmarks.push(So(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t)=>{
            Wo(this, t);
        }), this.g.attachProtoVectorListener("handedness", (t, e)=>{
            var n = this.handedness, r = n.push;
            const i = [];
            for (const e of t){
                t = Bi(e);
                const n = [];
                for (const e of t.g())n.push({
                    score: Dn(e, 2) ?? 0,
                    index: Un(Cn(e, 1)) ?? -1,
                    categoryName: Pn(e, 3) ?? "" ?? "",
                    displayName: Pn(e, 4) ?? "" ?? ""
                });
                i.push(n);
            }
            r.call(n, ...i), Wo(this, e);
        }), this.g.attachEmptyPacketListener("handedness", (t)=>{
            Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
gc.prototype.detectForVideo = gc.prototype.H, gc.prototype.detect = gc.prototype.G, gc.prototype.setOptions = gc.prototype.o, gc.createFromModelPath = function(t, e) {
    return Xa(gc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, gc.createFromModelBuffer = function(t, e) {
    return Xa(gc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, gc.createFromOptions = function(t, e) {
    return Xa(gc, t, e);
}, gc.HAND_CONNECTIONS = hc;
var mc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "input_image", "norm_rect", !0), this.j = {
            classifications: []
        }, Fn(t = this.h = new ro, 0, 1, e = new ks);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return Fn(this.h, 0, 2, bo(t, Sn(this.h, vs, 2))), this.l(t);
    }
    ya(t, e) {
        return this.j = {
            classifications: []
        }, Wa(this, t, e), this.j;
    }
    za(t, e, n) {
        return this.j = {
            classifications: []
        }, Ha(this, t, n, e), this.j;
    }
    m() {
        var t = new Fi;
        Li(t, "input_image"), Li(t, "norm_rect"), Ri(t, "classifications");
        const e = new ui;
        jn(e, io, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), _i(n, "IMAGE:input_image"), _i(n, "NORM_RECT:norm_rect"), wi(n, "CLASSIFICATIONS:classifications"), n.o(e), Si(t, n), this.g.attachProtoListener("classifications", (t, e)=>{
            this.j = function(t) {
                const e = {
                    classifications: Rn(t, as, 1).map((t)=>Ao(Sn(t, Ui, 4)?.g() ?? [], Un(Cn(t, 2)), Pn(t, 3) ?? ""))
                };
                return null != Fe(on(t, 2)) && (e.timestampMs = Un(Fe(on(t, 2)))), e;
            }(us(t)), Wo(this, e);
        }), this.g.attachEmptyPacketListener("classifications", (t)=>{
            Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
mc.prototype.classifyForVideo = mc.prototype.za, mc.prototype.classify = mc.prototype.ya, mc.prototype.setOptions = mc.prototype.o, mc.createFromModelPath = function(t, e) {
    return Xa(mc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, mc.createFromModelBuffer = function(t, e) {
    return Xa(mc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, mc.createFromOptions = function(t, e) {
    return Xa(mc, t, e);
};
var yc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !0), this.h = new so, this.embeddings = {
            embeddings: []
        }, Fn(t = this.h, 0, 1, e = new ks);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        var e = this.h, n = Sn(this.h, ws, 2);
        return n = n ? n.clone() : new ws, void 0 !== t.l2Normalize ? Bn(n, 1, t.l2Normalize) : "l2Normalize" in t && cn(n, 1), void 0 !== t.quantize ? Bn(n, 2, t.quantize) : "quantize" in t && cn(n, 2), Fn(e, 0, 2, n), this.l(t);
    }
    Fa(t, e) {
        return Wa(this, t, e), this.embeddings;
    }
    Ga(t, e, n) {
        return Ha(this, t, n, e), this.embeddings;
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect"), Ri(t, "embeddings_out");
        const e = new ui;
        jn(e, oo, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), wi(n, "EMBEDDINGS:embeddings_out"), n.o(e), Si(t, n), this.g.attachProtoListener("embeddings_out", (t, e)=>{
            t = ys(t), this.embeddings = function(t) {
                return {
                    embeddings: Rn(t, ds, 1).map((t)=>{
                        const e = {
                            headIndex: Un(Cn(t, 3)) ?? -1,
                            headName: Pn(t, 4) ?? "" ?? ""
                        };
                        if (void 0 !== kn(t, ls, bn(t, 1))) t = dn(t = Sn(t, ls, bn(t, 1)), 1, we), e.floatEmbedding = t;
                        else {
                            const n = new Uint8Array(0);
                            e.quantizedEmbedding = Sn(t, fs, bn(t, 2))?.ua()?.wa() ?? n;
                        }
                        return e;
                    }),
                    timestampMs: Un(Fe(on(t, 2)))
                };
            }(t), Wo(this, e);
        }), this.g.attachEmptyPacketListener("embeddings_out", (t)=>{
            Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
yc.cosineSimilarity = function(t, e) {
    if (t.floatEmbedding && e.floatEmbedding) t = Ro(t.floatEmbedding, e.floatEmbedding);
    else {
        if (!t.quantizedEmbedding || !e.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
        t = Ro(Lo(t.quantizedEmbedding), Lo(e.quantizedEmbedding));
    }
    return t;
}, yc.prototype.embedForVideo = yc.prototype.Ga, yc.prototype.embed = yc.prototype.Fa, yc.prototype.setOptions = yc.prototype.o, yc.createFromModelPath = function(t, e) {
    return Xa(yc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, yc.createFromModelBuffer = function(t, e) {
    return Xa(yc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, yc.createFromOptions = function(t, e) {
    return Xa(yc, t, e);
};
var vc = class {
    constructor(t, e, n){
        this.confidenceMasks = t, this.categoryMask = e, this.qualityScores = n;
    }
    close() {
        this.confidenceMasks?.forEach((t)=>{
            t.close();
        }), this.categoryMask?.close();
    }
};
function _c(t) {
    t.categoryMask = void 0, t.confidenceMasks = void 0, t.qualityScores = void 0;
}
function wc(t) {
    try {
        const e = new vc(t.confidenceMasks, t.categoryMask, t.qualityScores);
        if (!t.j) return e;
        t.j(e);
    } finally{
        Ko(t);
    }
}
vc.prototype.close = vc.prototype.close;
var Tc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new lo, this.v = new ao, Fn(this.h, 0, 3, this.v), Fn(t = this.h, 0, 1, e = new ks);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return void 0 !== t.displayNamesLocale ? cn(this.h, 2, Oe(t.displayNamesLocale)) : "displayNamesLocale" in t && cn(this.h, 2), "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
    }
    N() {
        !function(t) {
            const e = Rn(t.da(), Ti, 1).filter((t)=>(Pn(t, 1) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
            if (t.u = [], 1 < e.length) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
            1 === e.length && (Sn(e[0], ui, 7)?.l()?.g() ?? new Map).forEach((e, n)=>{
                t.u[Number(n)] = Pn(e, 1) ?? "";
            });
        }(this);
    }
    ea(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.j = "function" == typeof e ? e : n, _c(this), Wa(this, t, r), wc(this);
    }
    Sa(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.j = "function" == typeof n ? n : r, _c(this), Ha(this, t, i, e), wc(this);
    }
    Ja() {
        return this.u;
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect");
        const e = new ui;
        jn(e, fo, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), n.o(e), Si(t, n), Ho(this, t), this.outputConfidenceMasks && (Ri(t, "confidence_masks"), wi(n, "CONFIDENCE_MASKS:confidence_masks"), Yo(this, "confidence_masks"), this.g.ca("confidence_masks", (t, e)=>{
            this.confidenceMasks = t.map((t)=>Ya(this, t, !0, !this.j)), Wo(this, e);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t)=>{
            this.confidenceMasks = [], Wo(this, t);
        })), this.outputCategoryMask && (Ri(t, "category_mask"), wi(n, "CATEGORY_MASK:category_mask"), Yo(this, "category_mask"), this.g.ba("category_mask", (t, e)=>{
            this.categoryMask = Ya(this, t, !1, !this.j), Wo(this, e);
        }), this.g.attachEmptyPacketListener("category_mask", (t)=>{
            this.categoryMask = void 0, Wo(this, t);
        })), Ri(t, "quality_scores"), wi(n, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t, e)=>{
            this.qualityScores = t, Wo(this, e);
        }), this.g.attachEmptyPacketListener("quality_scores", (t)=>{
            this.categoryMask = void 0, Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Tc.prototype.getLabels = Tc.prototype.Ja, Tc.prototype.segmentForVideo = Tc.prototype.Sa, Tc.prototype.segment = Tc.prototype.ea, Tc.prototype.setOptions = Tc.prototype.o, Tc.createFromModelPath = function(t, e) {
    return Xa(Tc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Tc.createFromModelBuffer = function(t, e) {
    return Xa(Tc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Tc.createFromOptions = function(t, e) {
    return Xa(Tc, t, e);
};
var Ec = class {
    constructor(t, e, n){
        this.confidenceMasks = t, this.categoryMask = e, this.qualityScores = n;
    }
    close() {
        this.confidenceMasks?.forEach((t)=>{
            t.close();
        }), this.categoryMask?.close();
    }
};
Ec.prototype.close = Ec.prototype.close;
var bc = class extends Vn {
    constructor(t){
        super(t);
    }
}, Ac = [
    0,
    Pr,
    -2
], xc = [
    0,
    Lr,
    -3,
    Br
], kc = [
    0,
    Lr,
    -3,
    Br,
    Lr,
    -1
], Sc = [
    0,
    kc
], Lc = [
    0,
    Sc,
    Ac
], Rc = [
    0,
    kc,
    Ac
], Fc = [
    0,
    kc,
    Pr,
    -1
], Mc = [
    0,
    Fc,
    Ac
], Oc = [
    0,
    Lr,
    -3,
    Br,
    Ac,
    -1
], Ic = [
    0,
    Lr,
    -3,
    Br,
    Kr
], Cc = class extends Vn {
    constructor(t){
        super(t);
    }
}, Pc = [
    0,
    Lr,
    -1,
    Br
], Uc = class extends Vn {
    constructor(){
        super();
    }
};
Uc.A = [
    1
];
var Dc = class extends Vn {
    constructor(t){
        super(t);
    }
}, Bc = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    14,
    15
], Nc = [
    0,
    Bc,
    Wr,
    kc,
    Wr,
    Rc,
    Wr,
    Sc,
    Wr,
    Lc,
    Wr,
    Pc,
    Wr,
    Ic,
    Wr,
    xc,
    Wr,
    [
        0,
        Vr,
        Lr,
        -2,
        Br,
        Pr,
        Br,
        -1,
        2,
        Lr,
        Ac
    ],
    Wr,
    Fc,
    Wr,
    Mc,
    Lr,
    Ac,
    Vr,
    Wr,
    Oc,
    Wr,
    [
        0,
        Sr,
        Pc
    ]
], Gc = [
    0,
    Vr,
    Pr,
    -1,
    Br
], jc = class extends Vn {
    constructor(){
        super();
    }
};
jc.A = [
    1
], jc.prototype.g = Qr([
    0,
    Sr,
    Nc,
    Vr,
    Gc
]);
var Vc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new lo, this.v = new ao, Fn(this.h, 0, 3, this.v), Fn(t = this.h, 0, 1, e = new ks);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
    }
    ea(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        this.j = "function" == typeof n ? n : r, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n = this.I + 1, r = new jc;
        const s = new Dc;
        var o = new bc;
        if (Nn(o, 1, 255), Fn(s, 0, 12, o), e.keypoint && e.scribble) throw Error("Cannot provide both keypoint and scribble.");
        if (e.keypoint) {
            var a = new Cc;
            Bn(a, 3, !0), Gn(a, 1, e.keypoint.x), Gn(a, 2, e.keypoint.y), Mn(s, 5, Bc, a);
        } else {
            if (!e.scribble) throw Error("Must provide either a keypoint or a scribble.");
            for (a of (o = new Uc, e.scribble))Bn(e = new Cc, 3, !0), Gn(e, 1, a.x), Gn(e, 2, a.y), In(o, Cc, e);
            Mn(s, 15, Bc, o);
        }
        In(r, Dc, s), this.g.addProtoToStream(r.g(), "drishti.RenderData", "roi_in", n), Wa(this, t, i);
        t: {
            try {
                const t = new Ec(this.confidenceMasks, this.categoryMask, this.qualityScores);
                if (!this.j) {
                    var c = t;
                    break t;
                }
                this.j(t);
            } finally{
                Ko(this);
            }
            c = void 0;
        }
        return c;
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "roi_in"), Li(t, "norm_rect_in");
        const e = new ui;
        jn(e, fo, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), _i(n, "IMAGE:image_in"), _i(n, "ROI:roi_in"), _i(n, "NORM_RECT:norm_rect_in"), n.o(e), Si(t, n), Ho(this, t), this.outputConfidenceMasks && (Ri(t, "confidence_masks"), wi(n, "CONFIDENCE_MASKS:confidence_masks"), Yo(this, "confidence_masks"), this.g.ca("confidence_masks", (t, e)=>{
            this.confidenceMasks = t.map((t)=>Ya(this, t, !0, !this.j)), Wo(this, e);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t)=>{
            this.confidenceMasks = [], Wo(this, t);
        })), this.outputCategoryMask && (Ri(t, "category_mask"), wi(n, "CATEGORY_MASK:category_mask"), Yo(this, "category_mask"), this.g.ba("category_mask", (t, e)=>{
            this.categoryMask = Ya(this, t, !1, !this.j), Wo(this, e);
        }), this.g.attachEmptyPacketListener("category_mask", (t)=>{
            this.categoryMask = void 0, Wo(this, t);
        })), Ri(t, "quality_scores"), wi(n, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t, e)=>{
            this.qualityScores = t, Wo(this, e);
        }), this.g.attachEmptyPacketListener("quality_scores", (t)=>{
            this.categoryMask = void 0, Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Vc.prototype.segment = Vc.prototype.ea, Vc.prototype.setOptions = Vc.prototype.o, Vc.createFromModelPath = function(t, e) {
    return Xa(Vc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Vc.createFromModelBuffer = function(t, e) {
    return Xa(Vc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Vc.createFromOptions = function(t, e) {
    return Xa(Vc, t, e);
};
var Xc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "input_frame_gpu", "norm_rect", !1), this.j = {
            detections: []
        }, Fn(t = this.h = new po, 0, 1, e = new ks);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return void 0 !== t.displayNamesLocale ? cn(this.h, 2, Oe(t.displayNamesLocale)) : "displayNamesLocale" in t && cn(this.h, 2), void 0 !== t.maxResults ? Nn(this.h, 3, t.maxResults) : "maxResults" in t && cn(this.h, 3), void 0 !== t.scoreThreshold ? Gn(this.h, 4, t.scoreThreshold) : "scoreThreshold" in t && cn(this.h, 4), void 0 !== t.categoryAllowlist ? wn(this.h, 5, t.categoryAllowlist) : "categoryAllowlist" in t && cn(this.h, 5), void 0 !== t.categoryDenylist ? wn(this.h, 6, t.categoryDenylist) : "categoryDenylist" in t && cn(this.h, 6), this.l(t);
    }
    G(t, e) {
        return this.j = {
            detections: []
        }, Wa(this, t, e), this.j;
    }
    H(t, e, n) {
        return this.j = {
            detections: []
        }, Ha(this, t, n, e), this.j;
    }
    m() {
        var t = new Fi;
        Li(t, "input_frame_gpu"), Li(t, "norm_rect"), Ri(t, "detections");
        const e = new ui;
        jn(e, go, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.ObjectDetectorGraph"), _i(n, "IMAGE:input_frame_gpu"), _i(n, "NORM_RECT:norm_rect"), wi(n, "DETECTIONS:detections"), n.o(e), Si(t, n), this.g.attachProtoVectorListener("detections", (t, e)=>{
            for (const e of t)t = $i(e), this.j.detections.push(xo(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("detections", (t)=>{
            Wo(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Xc.prototype.detectForVideo = Xc.prototype.H, Xc.prototype.detect = Xc.prototype.G, Xc.prototype.setOptions = Xc.prototype.o, Xc.createFromModelPath = async function(t, e) {
    return Xa(Xc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Xc.createFromModelBuffer = function(t, e) {
    return Xa(Xc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Xc.createFromOptions = function(t, e) {
    return Xa(Xc, t, e);
};
function zc(t) {
    t.landmarks = [], t.worldLandmarks = [], t.v = void 0;
}
function Wc(t) {
    try {
        const e = new class {
            constructor(t, e, n){
                this.landmarks = t, this.worldLandmarks = e, this.g = n;
            }
            close() {
                this.g?.forEach((t)=>{
                    t.close();
                });
            }
        }(t.landmarks, t.worldLandmarks, t.v);
        if (!t.u) return e;
        t.u(e);
    } finally{
        Ko(t);
    }
}
var Hc = class extends Ka {
    constructor(t, e){
        super(new Va(t, e), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, Fn(t = this.h = new wo, 0, 1, e = new ks), this.B = new vo, Fn(this.h, 0, 3, this.B), this.j = new mo, Fn(this.h, 0, 2, this.j), Nn(this.j, 4, 1), Gn(this.j, 2, .5), Gn(this.B, 2, .5), Gn(this.h, 4, .5);
    }
    get baseOptions() {
        return Sn(this.h, ks, 1);
    }
    set baseOptions(t) {
        Fn(this.h, 0, 1, t);
    }
    o(t) {
        return "numPoses" in t && Nn(this.j, 4, t.numPoses ?? 1), "minPoseDetectionConfidence" in t && Gn(this.j, 2, t.minPoseDetectionConfidence ?? .5), "minTrackingConfidence" in t && Gn(this.h, 4, t.minTrackingConfidence ?? .5), "minPosePresenceConfidence" in t && Gn(this.B, 2, t.minPosePresenceConfidence ?? .5), "outputSegmentationMasks" in t && (this.outputSegmentationMasks = t.outputSegmentationMasks ?? !1), this.l(t);
    }
    G(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.u = "function" == typeof e ? e : n, zc(this), Wa(this, t, r), Wc(this);
    }
    H(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.u = "function" == typeof n ? n : r, zc(this), Ha(this, t, i, e), Wc(this);
    }
    m() {
        var t = new Fi;
        Li(t, "image_in"), Li(t, "norm_rect"), Ri(t, "normalized_landmarks"), Ri(t, "world_landmarks"), Ri(t, "segmentation_masks");
        const e = new ui;
        jn(e, Eo, this.h);
        const n = new Ti;
        vi(n, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), _i(n, "IMAGE:image_in"), _i(n, "NORM_RECT:norm_rect"), wi(n, "NORM_LANDMARKS:normalized_landmarks"), wi(n, "WORLD_LANDMARKS:world_landmarks"), n.o(e), Si(t, n), Ho(this, t), this.g.attachProtoVectorListener("normalized_landmarks", (t, e)=>{
            this.landmarks = [];
            for (const e of t)t = rs(e), this.landmarks.push(ko(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("normalized_landmarks", (t)=>{
            this.landmarks = [], Wo(this, t);
        }), this.g.attachProtoVectorListener("world_landmarks", (t, e)=>{
            this.worldLandmarks = [];
            for (const e of t)t = Qi(e), this.worldLandmarks.push(So(t));
            Wo(this, e);
        }), this.g.attachEmptyPacketListener("world_landmarks", (t)=>{
            this.worldLandmarks = [], Wo(this, t);
        }), this.outputSegmentationMasks && (wi(n, "SEGMENTATION_MASK:segmentation_masks"), Yo(this, "segmentation_masks"), this.g.ca("segmentation_masks", (t, e)=>{
            this.v = t.map((t)=>Ya(this, t, !0, !this.u)), Wo(this, e);
        }), this.g.attachEmptyPacketListener("segmentation_masks", (t)=>{
            this.v = [], Wo(this, t);
        })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Hc.prototype.detectForVideo = Hc.prototype.H, Hc.prototype.detect = Hc.prototype.G, Hc.prototype.setOptions = Hc.prototype.o, Hc.createFromModelPath = function(t, e) {
    return Xa(Hc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Hc.createFromModelBuffer = function(t, e) {
    return Xa(Hc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Hc.createFromOptions = function(t, e) {
    return Xa(Hc, t, e);
}, Hc.POSE_CONNECTIONS = Na([
    0,
    1
], [
    1,
    2
], [
    2,
    3
], [
    3,
    7
], [
    0,
    4
], [
    4,
    5
], [
    5,
    6
], [
    6,
    8
], [
    9,
    10
], [
    11,
    12
], [
    11,
    13
], [
    13,
    15
], [
    15,
    17
], [
    15,
    19
], [
    15,
    21
], [
    17,
    19
], [
    12,
    14
], [
    14,
    16
], [
    16,
    18
], [
    16,
    20
], [
    16,
    22
], [
    18,
    20
], [
    11,
    23
], [
    12,
    24
], [
    23,
    24
], [
    23,
    25
], [
    24,
    26
], [
    25,
    27
], [
    26,
    28
], [
    27,
    29
], [
    28,
    30
], [
    29,
    31
], [
    30,
    32
], [
    27,
    31
], [
    28,
    32
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7J3PX","6nueF"], "6nueF", "parcelRequire4ef1")

//# sourceMappingURL=index.a9bfb5ef.js.map