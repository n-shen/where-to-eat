import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { Server } from "socket.io";
import * as http from "http";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// app.use(express.static("build"));

app.use(cors());
app.use(express.json());

// Routers
import queryRouter from "./routes/queryRouter.js";
app.use("/api/v1/query", queryRouter);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

server.listen(process.env.PORT_NUM, () => {
  console.log(
    "TL-Server is running without db connection on port: " +
      process.env.PORT_NUM
  );
});

io.on("connection", (socket) => {
  console.log("IO new connection:", socket.id);

  socket.on("chat-out", (msg, rid) => {
    if (rid !== "") {
      console.log("[S-chat-in]", msg, " from:", rid);
      socket.to(rid).emit("chat-in", msg);
    }
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    if (
      io.sockets.adapter.rooms.get(room) &&
      io.sockets.adapter.rooms.get(room).size >= 2
    ) {
      console.log(
        "partner joined!",
        io.sockets.adapter.rooms.get(room).size,
        room
      );
      socket.to(room).emit("server-notice", "Server: partner joined the room!");
    }
  });

  socket.on("ex-selection", (room, collection) => {
    socket.to(room).emit("ex-selection-store", collection);
  });

  socket.on("done-selection", (room, collection) => {
    socket.to(room).emit("ex-selection-done", collection);
  });

  socket.on("game-ready", (room, message) => {
    socket.to(room).emit("game-ready-s", message);
  });

  socket.on("game-action", (room, message) => {
    socket.to(room).emit("game-action-s", message);
  });

  socket.on("game-result", (room, message) => {
    socket.to(room).emit("game-result-s", message);
  });

  socket.on("remove-result", (room, message) => {
    socket.to(room).emit("remove-result-s", message);
  });
});

// mongoose
//     .connect(process.env.MDB_LINK)
//     .then(() => {
//         app.listen(process.env.PORT_NUM, () => {
//             console.log(
//                 "TL-Server is connected to DB and running on port: " +
//                 process.env.PORT_NUM
//             );
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
