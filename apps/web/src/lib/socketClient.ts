import { io } from "socket.io-client";

const hostname = window.location.hostname;
const SERVER = import.meta.env.DEV
  ? `http://${hostname}:5000`
  : "https://casa-blanca-dev-cfkt.2.us-1.fl0.io";

export const socket = io(SERVER, {
  transports: ["websocket"],
});
