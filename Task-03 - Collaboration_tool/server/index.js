import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import setupYjs from "./yjs/setupYjs.js";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

setupYjs(io);

server.listen(3001, () => {
  console.log("✅ Server running at http://localhost:3001");
});
