import { socket } from "./newindex";
import {
    socketError,
    socketOpen,
    socketClose,
    socketMessage
} from "./index.event.handler";

socket.addEventListener('error', socketError)
socket.addEventListener('open', socketOpen)
socket.addEventListener('close', socketClose)
socket.addEventListener('message', socketMessage)



