import { isConnect } from "./newindex"

export function socketError(error) {
    isConnect = false
    console.log("沒有連線")
    throw error
}
export function socketOpen(event) {
    isConnect = true
    console.log("連線成功")
    return
}
export function socketClose(event) {
    isConnect = false
    console.log("連線中斷")
}
export function socketMessage(event) {
    console.log("收到訊息")
}